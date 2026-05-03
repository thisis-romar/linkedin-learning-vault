---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: aws-storage-and-data-management-17535108
url: "https://www.linkedin.com/learning/aws-storage-and-data-management-17535108"
duration_minutes: 304
duration: 5h 4m
level: Intermediate
updated: 1/5/2023
learners: 9774
skills:
  - Storage Management
  - Data Management
  - Amazon Web Services (AWS)
exercise_files: true
github: "https://github.com/LinkedInLearning/aws-storage-and-data-management-3082086"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFOfnWsuTJ7WA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671825403910?e=2147483647&amp;v=beta&amp;t=0-dg5x7Vwo-_AUu-1EqkZ882Xz9EdIZP8Tvc7YBl_dU"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on AWS- Skills for Administrators]]'
prev_courses:
  - '[[Complete Guide to AWS Security and Compliance Management]]'
path_nav: '[{"path":"Infrastructure Management on AWS- Skills for Administrators","position":5,"total":5,"prev":"Complete Guide to AWS Security and Compliance Management","next":null}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/devops
  - skill/storage-management
  - skill/data-management
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/AWS-%20Storage%20and%20Data%20Management.md)

![AWS: Storage and Data Management](https://media.licdn.com/dms/image/v2/C560DAQFOfnWsuTJ7WA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1671825403910?e=2147483647&amp;v=beta&amp;t=0-dg5x7Vwo-_AUu-1EqkZ882Xz9EdIZP8Tvc7YBl_dU)

# AWS: Storage and Data Management

> Amazon Web Services (AWS) offers solutions that are ideal for managing data on a sliding scale—from small businesses to big data applications. This course with instructor Brandon Rich teaches system administrators the intermediate-level skills needed to successfully manage data by creating backups, enforcing compliance requirements, and managing the disaster recovery process.

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108) | 5h 4m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Storage and AWS](#storage-and-aws)
  - [What you should know](#what-you-should-know)
  - [Exercise files](#exercise-files)
- [**1. Overview**](#1-overview) (3 videos)
  - [What is data management?](#what-is-data-management)
  - [Data security in AWS](#data-security-in-aws)
  - [Regulatory compliance and AWS](#regulatory-compliance-and-aws)
- [**2. Object Storage**](#2-object-storage) (11 videos)
  - [AWS S3 basics](#aws-s3-basics)
  - [Durability and availability](#durability-and-availability)
  - [S3 bucket creation](#s3-bucket-creation)
  - [S3 upload and logging](#s3-upload-and-logging)
  - [S3 cross-region replication](#s3-cross-region-replication)
  - [Set up SNS for event notifications](#set-up-sns-for-event-notifications)
  - [Set up S3 for event notifications](#set-up-s3-for-event-notifications)
  - [AWS Glacier and S3 lifecycle rules](#aws-glacier-and-s3-lifecycle-rules)
  - [S3 data lifecycle configuration](#s3-data-lifecycle-configuration)
  - [Versioning in S3](#versioning-in-s3)
  - [S3 teardown](#s3-teardown)
- [**3. File Systems**](#3-file-systems) (10 videos)
  - [Elastic Block Storage](#elastic-block-storage)
  - [Create an instance with multiple EBS volumes](#create-an-instance-with-multiple-ebs-volumes)
  - [Modify the type and size of an EBS volume](#modify-the-type-and-size-of-an-ebs-volume)
  - [Detach and reattach an EBS volume](#detach-and-reattach-an-ebs-volume)
  - [EBS backup, restore, and schedule with CloudWatch](#ebs-backup-restore-and-schedule-with-cloudwatch)
  - [Elastic File System](#elastic-file-system)
  - [EFS demo create EFS](#efs-demo-create-efs)
  - [EFS demo mount EFS](#efs-demo-mount-efs)
  - [EBS and EFS teardown](#ebs-and-efs-teardown)
  - [Amazon FSx](#amazon-fsx)
- [**4. Database Services**](#4-database-services) (9 videos)
  - [RDS](#rds)
  - [Create a MySQL RDS instance](#create-a-mysql-rds-instance)
  - [Connect with MySQL Workbench](#connect-with-mysql-workbench)
  - [Create an Aurora read replica](#create-an-aurora-read-replica)
  - [RDS backup and recovery](#rds-backup-and-recovery)
  - [RDS teardown](#rds-teardown)
  - [DynamoDB](#dynamodb)
  - [Create a DynamoDB table](#create-a-dynamodb-table)
  - [Dynamo teardown](#dynamo-teardown)
- [**5. Getting Data to AWS**](#5-getting-data-to-aws) (20 videos)
  - [Move data to AWS](#move-data-to-aws)
  - [Transfer data using the AWS CLI](#transfer-data-using-the-aws-cli)
  - [Storage Gateway](#storage-gateway)
  - [Configure File Gateway and shares](#configure-file-gateway-and-shares)
  - [Connect to File Gateway via NFS](#connect-to-file-gateway-via-nfs)
  - [File Gateway teardown](#file-gateway-teardown)
  - [Transfer data with AWS Snowball](#transfer-data-with-aws-snowball)
  - [AWS Database Migration Service](#aws-database-migration-service)
  - [DMS demo: Setup steps](#dms-demo-setup-steps)
  - [DMS demo: Create replication instance](#dms-demo-create-replication-instance)
  - [DMS demo: Create and execute task](#dms-demo-create-and-execute-task)
  - [DMS teardown](#dms-teardown)
  - [AWS SFTP service](#aws-sftp-service)
  - [AWS SFTP prerequisites](#aws-sftp-prerequisites)
  - [Create an SFTP endpoint](#create-an-sftp-endpoint)
  - [Send data to S3 using AWS SFTP](#send-data-to-s3-using-aws-sftp)
  - [AWS SFTP teardown](#aws-sftp-teardown)
  - [AWS DataSync](#aws-datasync)
  - [Move data with AWS DataSync](#move-data-with-aws-datasync)
  - [AWS DataSync teardown](#aws-datasync-teardown)
- [**6. Moving Data in AWS**](#6-moving-data-in-aws) (7 videos)
  - [AWS Glue overview](#aws-glue-overview)
  - [AWS Glue: Create an S3 metadata crawler](#aws-glue-create-an-s3-metadata-crawler)
  - [AWS Glue networking](#aws-glue-networking)
  - [AWS Glue: Create a connection to RDS](#aws-glue-create-a-connection-to-rds)
  - [AWS Glue: RDS data crawler](#aws-glue-rds-data-crawler)
  - [AWS Glue: Create and run a job](#aws-glue-create-and-run-a-job)
  - [Glue and course teardown](#glue-and-course-teardown)
- [**7. Backup**](#7-backup) (4 videos)
  - [Understand AWS Backup](#understand-aws-backup)
  - [Create and configure an AWS Backup job](#create-and-configure-an-aws-backup-job)
  - [Restore from backup](#restore-from-backup)
  - [AWS Backup teardown](#aws-backup-teardown)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Storage and AWS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=0)** - [Narrator] Do you need to move a semi truck full of disk storage?
>
> **[0:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=3)** Well, if so, AWS has you covered.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=5)** That's right, AWS Snowball will deliver a truck to your door.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=9)** But for most enterprise applications, you can get the job done in the cloud.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=13)** In this course, you'll learn the ins and outs of object storage and lifecycle management in S3, schema migration, backup, and replication of relational data in RDS, experience flexible network file storage with EFS, and even move and transform data with AWS Glue.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=31)** Hi, I'm Brandon Rich.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=33)** I'm an enterprise architect at the University of Notre Dame.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=37)** I've been working in the cloud since 2014 when our organization began a massive migration of services, business processes, and data to the cloud with [[Amazon Web Services (AWS)|Amazon Web Services]].
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=48)** In the process, we learned a tremendous amount and became a recognized leader in cloud operations for the [[Higher Education]] space.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-and-aws?u=76281980&t=55)** Now, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Higher Education]] (1)
> **Env Vars:** aws (3), rds (1), efs (1)
> **CLI Commands:** aws (3)
> **Speakers:** - [narrator] (1)

#### [What you should know](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=0)** - [Instructor] If you're looking to store and manage data in the cloud, you've come to the right place.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=5)** [[Amazon Web Services (AWS)|Amazon Web Services]] is home to a wide array of options to suit just about any [[Data Storage]] job you can throw at it, from file storage to relational data to [[NoSQL]] style documents and objects.
>
> **[0:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=18)** In AWS, you have many options as to the kind of storage available to you.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=22)** There's object storage supported by S3, Amazon's oldest and most durable service, block storage via Elastic Block Store, the easy way to provision drive capacity for [[Amazon EC2|EC2]] instances, [[Relational Databases]], courtesy of RDS, Amazon's managed relational database service.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=41)** You have NoSQL courtesy of DynamoDB and [[Data Warehousing]] via Redshift though the last one is outside the scope of this course.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=51)** When you use AWS storage and [[Data Management]] services not only do you gain access to all these storage types in one place, but you also take advantage of AWS's high level of service and reliability.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=63)** You get incredible durability particularly with objects stored in S3, high availability, a built-in feature of many AWS storage services, automated backups, automated as with RDS relational databases, or able to be automated as with Dynamo or EBS, managed services where we don't have to worry about running the underlying servers or configuring and maintaining platforms, and seamless encryption at [[Representational State Transfer (REST)|REST]] as seen an S3 EBS and more.
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=94)** Think of the time, research, and resources that can go into making your own homegrown or on-premises storage achieve these features and you'll start to see why [[Cloud Storage]] particularly in AWS, is so compelling.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=108)** I do want to give a heads up about which AWS services are not in scope for this series.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=113)** The data analytics tools such as Elastic Map Reduce, Kinesis, and Quicksight are not discussed.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=120)** Similarly, AWS's data warehouse, Redshift, is not covered in the course.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-you-should-know?u=76281980&t=124)** For a closer look at data analytics and AWS, check out another course in this library called Amazon Web Services for [[Data Science]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (2), [[NoSQL]] (2), [[Relational Databases]] (2), [[Data Storage]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** aws (8), rds (2), ebs (2), ec2 (1), rest (1)
> **CLI Commands:** aws (8)
> **Analogies:** such as (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### [Exercise files](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=0)** - [Narrator] If you check the details for this course, you'll see a link to a [[GitHub]] repository that contains all the files that I'll be referencing throughout the course.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=8)** Now, it's certainly possible for you to just listen and watch and follow along, but if you want to go along with me and perform the demos yourself these files will come in handy.
>
> **[0:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=18)** Chapter two has a few data files that we'll use to interact with S3, as well as a policy template that we'll use to set up an SNS topic.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=28)** Chapter four has some [[SQL]] code that we'll use to set up data in an RDS database and a [[JSON]] file that we'll use for DynamoDB.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=39)** Chapter five has a subfolder full of files that we use to demonstrate the S3 [[CLI]] and a policy that we use to set up AWS transfer for SFTP.
>
> **[0:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=50)** Finally, chapter six contains some SQL and some [[Python (Programming Language)|Python]] that we'll use while demonstrating AWS Glue.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=57)** So whether you clone this repo or you're just downloading or referencing files from the web everything you need should be here to follow along with this course.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/exercise-files?u=76281980&t=66)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[GitHub]] (1), [[JSON]] (1), [[CLI]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** sql (2), aws (2), sns (1), rds (1), json (1)
> **CLI Commands:** aws (2), python (1)
> **Prerequisites:** set up (3)
> **Tools:** github (1)
> **Exercise Files:** template (1)
> **Speakers:** - [narrator] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is data management?](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=0)** - [Instructor] Your business or organization both depends on, and generates data.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=5)** Product orders, government records, student transcripts, emails, project documents, even chat logs.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=12)** Though it's no longer paper, that data we create still piles up, and quickly, causing genuine risk for organizations whose operations depend on their data.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=22)** How do we make sure that we can access the data we need when we need it, while at the same time minimizing storage and maintenance costs?
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=30)** That effort is called Data Lifecycle Management, the act of devising and implementing policies to control data as it flows through your organization.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=40)** What is the Data Lifecycle?
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=42)** Well, there are a number of definitions out there, but in short, it's a bit like the water cycle.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=47)** Data progresses from inception to active usage to archive, and from there, either deleted for good or back into active usage.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=56)** So when we talk about data Lifecycle Management, what we mean is enacting policies to migrate data to different tiers of storage as it progresses through that life cycle.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=67)** As your data usage goes from frequent to rarely used, it can move from faster storage to slower storage, and thus from more expensive services to cheaper ones.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/what-is-data-management?u=76281980&t=79)** This process can be automated letting data migrate tiers as policies, such as age or access patterns dictate, As we'll later see, S3 has built-in mechanisms for doing just that.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data security in AWS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=0)** - [Instructor] Key to ensuring your organization's security and compliance in the cloud is what AWS calls the shared responsibility model.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=9)** The way AWS puts it, a shared responsibility model means that AWS handles the security of the cloud, while the AWS customer handles security in the cloud.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=19)** What this means is that AWS provides assurances about the security and capabilities of their services and about the physical security of the [[Hardware]] on which your resources live.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=30)** Meanwhile, you are responsible for understanding how to use these services in an appropriate way to satisfy your obligations.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=38)** Let's start with security of the cloud.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=41)** How can we be assured that AWS is doing all they can and should be doing on their side of the shared responsibility model?
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=48)** This might be a good time to look at some of AWS's security protocols.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=52)** AWS states that their data centers are housed in nondescript buildings.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=58)** They're secured at both the perimeter and at the facility itself.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=63)** The security includes video cameras, security personnel, and more.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=68)** Amazon also states that people wishing to access the data center floor must present multifactor authentication at least twice.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=76)** This ensures that the people entering the facility are guaranteed to be who they say they are.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=81)** Anyone who gets this far is also accompanied constantly by security staff.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=86)** Not only that but AWS background checks all their employees, limits access to only those people with a legitimate business need for such access, and logs every visit to a remote location.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=98)** All this should give you some assurance that no unauthorized person is going to tamper with the hardware running your [[Amazon EC2|EC2]] instance or storing your S3 data.
>
> **[1:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=106)** But what about other threats?
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=109)** AWS goes to extreme measures to protect against fire and flood.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=114)** They build their own power supplies and back everything up with onsite generators.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=118)** And, of course, their data centers themselves are redundant and geographically separated.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=124)** The multiple facilities that make up an availability zone are close enough to provide minimal latency for load balanced or distributed workloads but far enough away that a threat to one does not put the other at risk.
>
> **[2:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=138)** This is of course why AWS always recommends replicating data and compute across multiple AZs.
>
> **[2:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=144)** That's another part of the shared responsibility model.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=148)** Shared responsibility extends not only to security but to redundancy and availability as well.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=154)** While some services like EFS handle replication for you, other AWS services leave it to you.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=160)** If you don't architect your applications and [[Data Storage]] to take advantage of the high availability options AWS offers, you may end up putting your business at risk.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=170)** That's just a tip of the iceberg as far as AWS's security of the cloud.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=175)** Within the data centers of AWS, you'll find state-of-the-art advanced networking monitoring, world-class [[Intrusion Detection]], strict change management practices, and regular third party audits to ensure the [[Solidity]] of all the above.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=190)** If you're interested in the details, just search for [[AWS Security]] white paper and you can read pages upon pages of detailed assurances about the security of AWS.
>
> **[3:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=201)** Suffice it to say that AWS spends more time, money, people, and effort on security and operations than most organizations could ever dream to match.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=210)** Consider that when you're wondering if your data will be safer on premises than in the cloud.
>
> **[3:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=215)** So, what about security in the cloud?
>
> **[3:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=218)** What's your responsibility?
>
> **[3:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=220)** Well, it comes down to understanding your requirements, the capabilities of AWS, and how to properly configure each AWS service to match those requirements.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=229)** For instance, RDS, the relational database service provides an option for replicating across availability zones but you must enable it yourself.
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=239)** If you don't, in the single instance of the RDS database is lost or compromised, AWS will not be able to do anything about it.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=247)** Similarly, elastic block storage, or EBS, allows your data volumes to persist after host terminates and to be snapshotted and backed up at will.
>
> **[4:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=257)** However, if you don't enable those settings to take advantage of those features, their usefulness will be nil in a disaster scenario.
>
> **[4:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=266)** S3 is a perfectly safe place to store data but AWS will not stop you if you choose to set a security policy that makes it public.
>
> **[4:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=274)** And encryption works the same way.
>
> **[4:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=277)** EBS, S3, and EFS all offer seamless server site encryption but you have to opt in.
>
> **[4:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=283)** Now in some cases, your responsibilities may go beyond what AWS provides.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=288)** When that happens, you'll need to take additional steps.
>
> **[4:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=291)** For instance, if you must meet stricter encryption standards than what is satisfied by the available AWS options, you'll need to perform your own encryption prior to sending data to the cloud.
>
> **[5:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/data-security-in-aws?u=76281980&t=302)** As long as you do this, just like you would on premises, you'll be able to meet your requirements and still enjoy the benefits of AWS storage and compute.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Amazon EC2|Ec2]] (1), [[Data Storage]] (1), [[Intrusion Detection]] (1), [[Solidity]] (1)
> **Env Vars:** aws (25), efs (2), rds (2), ebs (2), ec2 (1)
> **CLI Commands:** aws (25), make (1), find (1)
> **Analogies:** for instance (2), just like (1)
> **Prerequisites:** you'll need (2), configure (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Regulatory compliance and AWS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=0)** - Depending on your particular industry, you may be obligated to demonstrate compliance with any number of regulations regarding data movement and storage.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=9)** A few examples include [[PCI DSS]] for the handling of financial information, HIPAA and HITECH for health information, and FERPA for the handling of educational records.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=20)** Some IT professionals, and even CIOs may fear that moving data to the cloud, may put their ability to comply with regulations at risk.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=28)** If that sounds familiar, fear or not.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=31)** AWS goes to great lengths to make sure that whatever your legal requirements, you can work with AWS to ensure compliance, and take full advantage of all the cloud has to offer.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=41)** AWS provides detailed guidance regarding many different regulatory frameworks.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=46)** If you go to aws.[amazon.com/compliance](https://amazon.com/compliance), you can drill down into any number of regulations, and find out more.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=56)** If we scroll to the bottom of this page, and click the link, 'Compliance Resources,' we'll find a list of white papers that AWS provides, to help you understand how to do compliance in the cloud.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=66)** For instance, architecting for HIPAA security and compliance on [[Amazon Web Services (AWS)|Amazon Web Services]].
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=72)** Clicking that opens a pdf.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=74)** All this content used to be exclusively provided by pdf, but now we see a link here that takes us to a web version of the content.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=82)** You want to pay particular attention to this section.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=85)** Each of the documents of this kind, provides details on which AWS services are suitable for keeping that kind of compliant data.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=92)** It'll even tell you which features within individual services, you should avoid or specifically configure to stay within the law.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=100)** In fact, AWS devotes an entire section of its web console to keeping you aware of compliance matters, and security on the could.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=107)** It's called, AWS Artifact.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=110)** Here I am at the main console of Amazon Web Services.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=114)** You access AWS artifact the same way you'd access any AWS service, such as [[Amazon EC2|EC2]] or RDS.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=120)** It's an entry in the main menu.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=125)** So I'll click artifact here, and then choose 'View Reports.'
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=131)** Inside, we'll find a list of documentation that AWS makes available related to its own compliance status.
>
> **[2:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=138)** You'll find ISO Reports, PCI DSS, SOC reports and more.
>
> **[2:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=142)** When you choose to download one of these documents, your copy will be watermarked with a special code identifying you as the original requester.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=149)** So, don't share your copy.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=152)** Because of this, I won't demonstrate downloading the documents, but I will give you one [[Microsoft Word|word]] of advice.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=157)** Use Acrobat Reader to open it.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=159)** The documents come in a special format, where the main document is a set of terms and conditions, while the actual content you're after, is an attachment to that.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=168)** The text provides some instructions on how to access the content with Adobe Acrobat Reader.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=173)** But, if you're using something like preview on the Mac, it may not be clear how to reach the content.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=179)** Of course, some regulatory frameworks are stricter than others.
>
> **[3:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=183)** If you're a government or higher ed institution subject to FITARA, FedRAMP or SRG, you may want to look at GovCloud.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=190)** To find out more, we'll go to aws.[amazon.com/govcloudus](https://amazon.com/govcloudus).
>
> **[3:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=196)** GovCloud is an entirely distinct region of AWS, that is in many ways identical to other regions, like Virginia's US East One, except that GovCloud is a hundred percent housed within the US, and accessible only by US citizens.
>
> **[3:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=211)** GovCloud has a provisional ATO, or authority to operate under the FedRAMP high baseline.
>
> **[3:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=217)** These are crucial features for organizations subject to ITAR, or US International Traffic and Arms Regulations.
>
> **[3:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=224)** Customers must create and maintain a fully separate account for GovCloud, distinct from any other AWS accounts they might operate, and they must sign a GovCloud specific contract.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=233)** They must be quoting AWS documents now, "US persons not subject to export restrictions, and who comply with us export control laws and regulations."
>
> **[4:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=243)** Organizations must for GovCloud from an existing account, or through an AWS business representative.
>
> **[4:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=250)** If your organization is subject to [[Regulatory Compliance]], chances are, you know already a lot about the requirements of your particular responsibilities.
>
> **[4:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=258)** Using AWS doesn't change any of that.
>
> **[4:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=261)** It just means that there are now layers in the stack that are managed by AWS.
>
> **[4:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/regulatory-compliance-and-aws?u=76281980&t=265)** It might sound concerning to give control of any part of your critical compliance responsibilities to AWS, but if you take advantage of Amazon's clear documentation, and understand your part in the shared responsibility model, you should feel quite at ease.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PCI DSS]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (2), [[Amazon EC2|Ec2]] (1), [[Microsoft Word|Word]] (1), [[Regulatory Compliance]] (1)
> **Env Vars:** aws (17), pci (2), dss (2), hipaa (2), hitech (1)
> **CLI Commands:** aws (19), find (5), make (1)
> **Definitions:** is a  (2), is an  (2), means that (1)
> **URLs:** [amazon.com](https://amazon.com) (2)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** configure (1)


### 2. Object Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [AWS S3 basics](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=0)** - [Instructor] Launched way back in March of 2006, S3 or Simple Storage Service is one of Amazon's longest running AWS offerings.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=9)** Its purpose is to provide easy to use [[Cloud Storage]] that is scalable, highly available, and reliable.
>
> **[0:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=16)** Before we start, it's important to know that S3 isn't actually a file system in the traditional sense.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=22)** Rather, S3 provides what's known as object storage.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=26)** What distinguishes object storage from file storage?
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=29)** Well, storage devices come in a few flavors having to do with the level at which the storage system manages data.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=36)** Block storage operates at the level of disk blocks and sectors.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=40)** This is the lowest level to the [[Hardware]].
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=42)** Sectors originally referred to actual sectors on the circular magnetic disks and platter based hard drives.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=49)** In the age of solid state drives, sectors are more of a logical construct but the concept remains the same.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=56)** Block storage is generic and can be formatted to apply a file system on top of it.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=62)** File storage is what you're probably most familiar with.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=65)** A file storage device uses a file system, software that manages files in directory structures sometimes with permission bits that describe who can read, write, and list the files.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=77)** Examples include FAT32 and NTFS for [[Windows]], HFS for Mac and Ext4 for [[Linux]]-based systems.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=87)** Object storage is a bit different.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=89)** An object might be a file from your computer or server's file system but once placed into object storage, it's an object data with [[Metadata]] attached.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=101)** In S3, this metadata often takes the form of tags.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=105)** The same kind of tags that appear on resources throughout AWS.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=110)** Objects go into Buckets.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=112)** A Bucket is called that because you can basically throw anything you want in it.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=116)** In a real life bucket, there's no structure.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=118)** There are no shelves.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=120)** Likewise, an S3 bucket has no native concept of folders or hierarchies.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=124)** It's all one flat name space for objects inside.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=128)** Of course, unlike a real bucket, S3 buckets can hold a virtually unlimited amount of objects.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=135)** S3 can easily scale to hold billions of objects.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=139)** It's also very important to understand that unlike with a file system, your server can't natively mount object storage.
>
> **[2:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=146)** Rather, your host will talk to S3 via restful APIs, through an SDK like the ones for [[Python (Programming Language)|Python]] or [[Java]] or using some kind of abstraction layer.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=157)** For instance, Ruby applications can use a gem called Fog to abstract S3 and treat it more like a file system.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=163)** They're also hardware and software gateways that can provide this abstraction for an entire server, such as AWS's file gateway.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=171)** In the case of file gateway, the middle layer actually does provide an NFS mount, so your instance can take advantage of S3 storage while still talking to a typical file system.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=181)** Back to Buckets.
>
> **[3:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=183)** The name space for Buckets is global which means that each time you create a Bucket you'll need to come up with a name that's unique worldwide.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=192)** Object names within a Bucket can contain letters, digits, or certain special characters, including slashes.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=198)** Speaking of slashes, I said there's no concept of folders and object storage, and that's true.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=203)** However, S3 goes a long way toward pretending that there is.
>
> **[3:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=207)** Take a look at these two object names.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=210)** Knowing about the flat name space, you may recognize that these are just object names that happen to share some of the same characters, but S3 will visually represent them as two objects within a files folder.
>
> **[3:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=224)** This convenience is a bit confusing when you know the truth but in practice it rarely causes issues.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=229)** In fact, the folder metaphor runs pretty deep depending on which interface you use.
>
> **[3:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=234)** These days, the web console even has a create folder button and it doesn't even let you set key names with embedded slashes.
>
> **[4:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=241)** So, what distinguishes S3 from any other object storage?
>
> **[4:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-s3-basics?u=76281980&t=245)** In the next video we'll get into S3's incredible reliability, security, and [[Data Management]] features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Metadata]] (2), [[Cloud Storage]] (1), [[Windows]] (1), [[Linux]] (1)
> **Env Vars:** aws (3), fat32 (1), ntfs (1), hfs (1), sdk (1)
> **CLI Commands:** aws (3), python (1), ruby (1)
> **Definitions:** is a  (2), known as (1), is called (1), means that (1)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** before we start (1), you'll need (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Durability and availability](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=0)** - [Instructor] Let's talk about S3's Vaunted Availability and Durability.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=5)** Availability refers to the S3 service itself.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=8)** Will S3 respond when you make a request to store or retrieve an object?
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=13)** Durability refers to S3's ability to keep your data without corrupting it or losing it.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=19)** So here are the numbers.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=21)** Objects stored in S3 are 99.99% available in standard storage mode and as for durability, well, I'm not even going to try to say that, but it's 11 nines.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=32)** AWS claims that with that level of reliability, if you were to store 10,000 objects in S3, you might lose one object every 10 million years.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=41)** That's a level of certainty that goes well beyond that of any physical storage I've ever maintained myself, no matter how redundant.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=48)** As for that availability, well, 99% uptime doesn't mean that S3 never goes down, but if it does, the service level agreement clock starts to tick down.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=58)** If S3 is out for long enough users will start to see refunds on their bill.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=63)** This actually happened back in early 2017 when a misconfiguration caused S3 to go down for several hours.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=69)** With so many customers, you can bet that this money back guarantee provides AWS with plenty of motivation to keep their services up and running.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=77)** Curiously, the wide array of services that suffered concurrent service interruptions, such as [[Slack]], [[Trello]], and many more, only serve to demonstrate how widely used and trusted S3 is as a Cloud [[Data Storage]] provider.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=91)** During that time, those companies weren't scrambling to restore service.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=95)** They knew they could rely on AWS's world-class engineers to keep them informed and correct the problem.
>
> **[1:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=102)** AWS offers multiple ways for you to secure your data in S3 with both client side and server side encryption.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=109)** Once enabled, server side encryption in S3 provides seamless encryption of data at [[Representational State Transfer (REST)|rest]].
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=114)** At rest means while the data is sitting in S3.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=118)** Seamless means that the client doesn't even need to know about the encryption in order for it to work.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=124)** Objects uploaded to S3 get encrypted before they're stored while objects downloaded from S3 get decrypted before they're sent to you.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=133)** When you create a bucket, you are offered three choices, and you can encrypt with an S3 dedicated key that's specific to your account.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=141)** It's auto-generated by AWS and shared with no one else.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=145)** You can encrypt with a key of your own creation using KMS, AWS's Key Management Service.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=152)** KMS is a service that lets users generate encryption keys and helps with tasks like rotating and expiring them over time.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=159)** Finally, you can encrypt with your own BYO key, which means client side encryption.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=165)** In this case, you'll handle encryption and decryption yourself before you pass data off to S3.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=171)** In both server side methods, S3 performs seamless encryption, meaning you don't have to worry about the details.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=177)** You just pass data in and out, knowing it's encrypted while at rest.
>
> **[3:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=182)** How about encryption in transit?
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=184)** Requests to and from S3 made through the AWS console are always encrypted via TLS.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=190)** Requests using the AWS [[CLI]] are too.
>
> **[3:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=193)** Any REST request is encrypted too, as long as it's made via HTTPS.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=199)** If you make REST requests over plain HTTP, your data will not be encrypted in transit.
>
> **[3:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=205)** S3 provides multiple different tiers of storage for different use cases.
>
> **[3:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=209)** Within a single bucket, individual objects can exist in one of the following, standard storage is the default, highly durable basic S3 storage, as you go down the tiers storage becomes cheaper, but there are trade-offs.
>
> **[3:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=224)** Infrequent Access Standard is essentially the same as S3 standard, but with fewer nines of availability guaranteed.
>
> **[3:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=231)** It's durability is the same.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=233)** Next, Infrequent Access One-Zone lets you trade a little more availability for cost.
>
> **[4:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=240)** Unlike the first two S3 classes objects stored of this tier, are not replicated across three or more availability zones.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=247)** They only exist in one, making them potentially vulnerable to an AZ outage, a rare event in itself.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=253)** Finally, Intelligent-Tiering, watches your data usage patterns to automatically shift individual objects between storage tiers designed for frequent, infrequent, and rarely accessed data.
>
> **[4:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=266)** Glacier, once its own distinct service, is the name for S3's multiple tiers of long-term archival storage.
>
> **[4:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=273)** These storage classes give you the cheapest possible storage cost as long as your access patterns are infrequent.
>
> **[4:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=279)** Outside of cost, the main difference in the three, is how often and how quickly you can retrieve data.
>
> **[4:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=285)** Glacier Instant Retrieval can return data just as fast as standard S3, in milliseconds when data is retrieved once per quarter.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=294)** You'll be charged more if you need your data more often.
>
> **[4:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=298)** Depending on your use case that might make standard and frequent access a better choice.
>
> **[5:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=303)** Glacier Flexible Retrieval is an even cheaper option if your access needs are closer to one to two times per year.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=311)** Finally, Glacier Deep Archive is the cheapest, longest term object storage you can get in AWS.
>
> **[5:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=317)** If you have data that you need to retain for years and years, but only need to access maybe once or twice a year, this is the class for you.
>
> **[5:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=325)** Retrieval at this tier is the slowest of all, up to 12 hours, but for certain cases, such as compliance related document storage, it's ideal.
>
> **[5:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=335)** Each S3 tier has nuances in the cost models, such as the minimum object size and minimum storage duration.
>
> **[5:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=342)** So make sure to read the docs at aws.[amazon.com](https://amazon.com), as you make your decision.
>
> **[5:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/durability-and-availability?u=76281980&t=348)** Now let's dive into the S3 interface and see what we can learn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (5), [[Slack]] (1), [[Trello]] (1), [[Data Storage]] (1), [[CLI]] (1)
> **Env Vars:** aws (9), kms (2), rest (2), byo (1), tls (1)
> **CLI Commands:** aws (10), make (5), az (1)
> **Definitions:** refers to (2), means that (1), is a  (1), is an  (1)
> **Analogies:** such as (3)
> **Tools:** slack (1), aws console (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Versions:** 99.99 (1)

#### [S3 bucket creation](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=0)** - [Instructor] Let's get started by creating an S3 bucket.
>
> **[0:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=3)** Here I am at the main dashboard of [[Amazon Web Services (AWS)|Amazon Web Services]].
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=6)** And before we go into the S3 specific section, I want to point out this dropdown which for me currently says North Virginia.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=13)** Here in the top right.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=14)** If I click it, you'll see a list of all the regions in which AWS operates.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=19)** This dropdown exists on most screens in Amazon Web services and it's used to determine where the resources that you provision actually get created.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=27)** When you have a region selected, that'll filter the view in most parts of AWS to show you just resources that exist in that region.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=34)** So, you could give yourself a shock by working in one region and changing regions and forgetting that you've changed it and wonder where all your resources have gone.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=43)** So, if that ever happens to you, just look up here and make sure that you're working in the region that you expect to be in.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=48)** For purposes of this course, the best thing to do is just pick the region that's closest to you geographically, which for me is that North Virginia and stick with it for the duration.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=58)** Now we'll head into S3.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=60)** I've recently visited that service, so it's right here in the top under recently visited.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=65)** I can also click services and see a categorized view of AWS.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=69)** There's S3 right at the top, or I can search here by typing S3 and selecting the first option.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=76)** If this is your first time into S3, you'll see a screen that looks like this.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=81)** We can click Create Bucket, and here we are ready to configure our first bucket.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=87)** We need to give it a name.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=89)** So, I'll call this demo primary.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=92)** And remember, S3 bucket names need to be globally unique so I'm going to append my name here and you should do the same.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=100)** Now, let's take a look at this region dropdown because it looks a little different.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=104)** It says global and all the regions are grayed out.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=108)** S3 is one of the few places in AWS that acts a little differently from the [[Representational State Transfer (REST)|rest]].
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=112)** It says global because when you look at a list of buckets in S3, it's going to show you buckets from every region.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=118)** Now, S3 buckets do have a region as you can see right here.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=123)** We're going to select the region in which to create the bucket.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=125)** Buckets are region specific.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=127)** It's just that the S3 part of the console shows you everything at once.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=131)** There's no filter.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=133)** That's why it says global.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=134)** So, choose your region right here.
>
> **[2:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=136)** Make it the same one that you chose earlier to stick with for the duration of the course and scroll on down.
>
> **[2:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=142)** Under object ownership, you can keep the default recommended choice of ACLs disabled.
>
> **[2:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=146)** If you choose the other option, that will let you set individual object level permissions which is not what we are interested in for this demo.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=154)** We'll keep the default, block all public access.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=157)** We're going to be interacting with this bucket from and within AWS, so we won't need any public access.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=163)** Bucket versioning we do want to enable.
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=166)** Then, I'll let S3 keep track of changes to each individual object in the bucket.
>
> **[2:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=172)** Under tags, this is optional, but we can add a tag.
>
> **[2:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=176)** We get a key value pair input here and this can be whatever we want.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=179)** So, I'm going to call this key creator and put Brandon so that anybody who looks at this bucket later will see that information and know who created the bucket.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=190)** You can add more tags if you like.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=192)** Sometimes these may just be informational for other users of this account, or in some cases, they could be used by third party services or other add-ons that will take some action for you based on tags on resources in your account.
>
> **[3:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=206)** Let's move on to encryption.
>
> **[3:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=207)** This is disabled by default but you can enable it and you get two options.
>
> **[3:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=212)** You can get Amazon S3 managed keys which is the key that's created for your account by Amazon, managed by them, or you can choose KMS keys.
>
> **[3:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=220)** If we were to choose the latter, we would need to have already created a KMS key in a different part of AWS.
>
> **[3:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=225)** So, we'll just stick with that first option.
>
> **[3:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=228)** We don't need advanced settings so we can just click create bucket.
>
> **[3:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=234)** Okay, now we have our bucket created and we can click into it.
>
> **[4:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=240)** And we can see that we don't have any objects yet.
>
> **[4:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=241)** So, there's nothing under objects.
>
> **[4:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=243)** We have a couple other tabs, including this properties one that has different options for us.
>
> **[4:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=248)** You can see that we have versioning enabled.
>
> **[4:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=250)** We can see the tags that we created.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=252)** And if you scroll down, you can see this server access logging.
>
> **[4:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=255)** This is something that I would like to enable.
>
> **[4:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=258)** If we click edit and enable that you can see that we're going to be asked to give a different bucket for the logs to go into.
>
> **[4:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=267)** So we actually need to back out of here because we don't have another bucket yet.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=270)** So, hit cancel and you can actually click over here and go to buckets.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=275)** Then let's just create another bucket by clicking Create Bucket.
>
> **[4:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=278)** We'll give it a different name.
>
> **[4:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=281)** We'll call it demo logging and again, I'll append my name there just for uniqueness.
>
> **[4:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=287)** Keep all the other options at their default and click Create Bucket.
>
> **[4:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=291)** By the way, very important on this logging bucket.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=294)** Don't enable versioning.
>
> **[4:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=296)** That's just going to create a whole lot of versions as logs get written to this bucket.
>
> **[5:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=300)** So here we have our two buckets, demo primary and demo logging.
>
> **[5:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=304)** And we'll click into the primary bucket.
>
> **[5:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=306)** Go to properties, head down to server access logging.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=311)** Click edit, enable and then browse S3 to choose our destination bucket, demo logging.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=319)** Click Choose Path.
>
> **[5:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=321)** And then we could from here, just save changes.
>
> **[5:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=323)** But there's one additional thing that I can do.
>
> **[5:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=325)** You can see the prompter that says prefix.
>
> **[5:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=327)** And remember, that if I use slashes in a prefix, S3 basically treats those like folders.
>
> **[5:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=333)** So what this lets me do is say, use one logging bucket to be the logging destination for multiple S3 buckets.
>
> **[5:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=341)** And the easiest way to do that is to provide a subfolder for the logs to go into on a per bucket basis.
>
> **[5:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=347)** So, we'll create a prefix here called demo-primary.
>
> **[5:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=352)** I guess for completeness, I'll go ahead and put the full bucket name there, and then save changes.
>
> **[5:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=358)** Let's remember to put a slash at the end of that so it acts like a folder and click save.
>
> **[6:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-bucket-creation?u=76281980&t=366)** So with that done, we are ready to add some objects to the bucket and see how this logging works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** aws (6), make (2)
> **Env Vars:** aws (6), kms (2)
> **UI Navigation:** dropdown (3), go to (2), select the (1), scroll down (1)
> **Best Practices:** recommended (1), remember to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [S3 upload and logging](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=0)** - [Instructor] All right, now that we've got our bucket, let's click it and add some files to it.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=5)** We can see on this screen that we've got a couple of tabs of different perspectives on the bucket that we'll explore in future videos, and we have no objects in the bucket.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=15)** You can see the count here is zero, and we've got an Upload button, so let's click it so that we can add some things.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=22)** We'll get the Add Files button, we'll click that.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=26)** And if you'll look in the exercise files of this course, you'll see Chapter 2 has a few data sets that we can upload.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=33)** These are obtained from [data.gov](https://data.gov), so just freely available for anybody to pick up.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=38)** I've got one about Marilyn Farmland here, and we can also click the states.csv file, and go ahead and say Open.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=45)** This will allow both of these files to be uploaded at once.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=49)** If we look at properties, we can expand that, and we can see storage class, which you may now be realizing was not something that we selected at the bucket level.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=59)** So every individual object in a bucket can have a different storage class.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=65)** If you think back to the slides on object storage and S3, you'll remember some of these.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=69)** We've got standard by default, with its really good durability and availability.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=75)** You've got standard IA here, which is infrequent access, so that trades a little bit of that availability for reduced cost.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=83)** You've got intelligent tiering, which will move your data around to different tiers based on usage and access patterns.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=89)** And of course you've got the glacier tiers as well.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=91)** We'll leave these at standard for now and scroll on down.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=96)** Server-side encryption, so we already selected this at the bucket level, and that'll take place for all the objects to go into the bucket, so we don't need to do anything here.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=105)** Check sums are an optional feature that you can turn on on a per object basis that will give you a hash that you can check over time with your reference that you keep to make sure that there's been no degradation in an individual object.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=119)** That's a pretty rare event, but this is a useful feature for archivists and folks like that.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=125)** Finally, we've got tags and [[Metadata]].
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=128)** You'll remember that we set tags at the bucket level to show who created the bucket.
>
> **[2:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=132)** We can do the same here.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=133)** We can add a tag and we could put a creator tag here, or any other type of tag.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=139)** You know, these are all CSVs.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=141)** We could say type of CSV.
>
> **[2:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=143)** Anything that you might find useful.
>
> **[2:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=146)** Metadata we've got here is similar but slightly different.
>
> **[2:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=150)** It's the metadata that's actually attached directly to the object.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=154)** This is different from tags, in that metadata is something that you'll get anytime that you request an object, say from get request through the API or an SDK request for the object, you'll see that metadata.
>
> **[2:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=169)** Tags are like tags that exist throughout AWS.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=173)** These key value pairs that can be pulled up by a dedicated API call that says, what are the tags on this resource?
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=179)** And one of the main differences is that tags, capital T tags, can be used in rules for IM policies, access policies, things like that on a per object basis.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=190)** So we'll go ahead for now and just say Upload.
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-upload-and-logging?u=76281980&t=194)** And with that we've got some data in the bucket, and we'll go on to the next video where we'll see how we can do some cross region replication with these objects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (5)
> **Env Vars:** api (2), csv (1), sdk (1), aws (1)
> **CLI Commands:** make (1), find (1), aws (1)
> **File Paths:** states.csv (1)
> **URLs:** [data.gov](https://data.gov) (1)
> **Cross-References:** next video (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [S3 cross-region replication](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=0)** - [Instructor] Another powerful feature of S3 is the ability to replicate automatically across regions.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=6)** Now, we've already talked about how great the durability and availability of S3 is.
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=10)** So why would we want to replicate across regions?
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=13)** Well, first, it's not impossible for a region to have an outage.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=17)** There have been a couple of examples of this occurring in the history of AWS, and so it can be a good safeguard to have things not just replicated across availability zones, but also across regions.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=27)** It's a rare event, but it can occur.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=30)** And the other reason you might want cross-region replication is because as I said before, you want to choose your region based on proximity to the users or workload that would be accessing the S3 data.
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=42)** So if your workload is actually cross-region, say if you're a global organization, it might make sense to replicate your data across regions for performance purposes.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=52)** So with that said, let's take a look at how to enable cross-region replication on our demo bucket.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=59)** Before we do this, we're actually going to need a destination bucket in another region.
>
> **[1:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=64)** So to do that, we'll go ahead and click Create Bucket.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=67)** We'll give a name, we'll call it demo-secondary-region, and then initials just like before to make the name unique.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=76)** And we need to select an alternate region.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=80)** I'm going to scroll down here and I'm going to choose Ireland.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=84)** Beautiful country, good place for our objects to go and we'll go down and choose versioning enabled.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=91)** Other than that, we'll leave all the options at default and click Create Bucket.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=97)** Now that our destination bucket is created in the Ireland region, which you can see here, we need to click back into the primary bucket, which is called Demo Bucket.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=107)** From here, we'll choose management.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=110)** Then go down to replication rules and click Create Replication Rule.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=114)** Now, we need to give this rule a name, so I'll call it replicate-to-Ireland, and its status will be enabled.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=125)** If we go down, we see the source bucket and some options here to limit or filter the objects that get moved from the source bucket to the destination.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=133)** So you have the option here if you wanted to say, create different rules for different subsets of your data or just exclude some objects entirely for whatever reason, you can do that.
>
> **[2:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=143)** But in this demo, we want everything to move over.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=145)** So we'll leave things as they are at default.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=149)** Scrolling down to destination, you want to click browse S3.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=152)** So we can choose our destination bucket.
>
> **[2:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=155)** That's demo-secondary here, and choose Path.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=159)** All right, that's set.
>
> **[2:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=161)** Let's go down to IM role.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=163)** Okay, so what is this all about?
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=166)** Well, in order to do the replication, AWS needs to act on your behalf.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=171)** It needs to be able to take the objects out of the source bucket and replicate them across to the other bucket.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=177)** So as you will see in plenty of places in AWS, the service itself needs to assume a role with permissions.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=185)** So this is the same kind of role that you would give to a user.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=187)** You're just giving it to the S3 service.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=190)** Now, you've got a couple of options here, including choose from existing IM roles, and if I click on this, I will see there's an option that says Create new role.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=199)** And because I'm currently logged in as a user that can create IM roles, that is a root user in this case, I can choose this option and this wizard will create that IM role for me behind the scenes.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=213)** So encryption, we don't need to worry about but destination storage class is interesting.
>
> **[3:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=218)** If you click this, you'll find that you can change the storage class that objects get replicated into so they can be something different from what they are in the primary bucket.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=227)** If your replication was something that you thought maybe wouldn't be used very often, you could put it in a cheaper tier of storage so that you would save a little money that way.
>
> **[3:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=237)** Of course, you're always making a choice between cost and your use case.
>
> **[4:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=242)** There are a couple of advanced options here that we could touch on.
>
> **[4:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=245)** Replication time control is something that gives you additional auditing and logging of your replication.
>
> **[4:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=251)** It notifies you if an object fails to be replicated ever within 15 minutes.
>
> **[4:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=256)** This can help you achieve some compliance goals with your S3 storage if that's a requirement for you.
>
> **[4:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=262)** Delete marker replication is interesting.
>
> **[4:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=265)** If your source bucket has versioning enabled, it never actually deletes anything.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=270)** A delete action on an object is just like a change that gets recorded by the versioning over time.
>
> **[4:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=276)** So instead of actually fully getting deleted, it gets a flag set on it, which S3 calls a delete marker.
>
> **[4:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=282)** So the question here is whether that delete marker should get propagated over to the destination bucket.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=288)** Since we want these buckets to look exactly the same, I'll go ahead and click them.
>
> **[4:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=293)** Replica modification sync here is something similar for [[Metadata]] on objects so I'll click that too and choose save.
>
> **[5:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=301)** Now, I get a question here whether to replicate existing objects, and we'll say yes because we want to go ahead and move those objects that are already in the bucket.
>
> **[5:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=310)** Click submit.
>
> **[5:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=312)** Now we see this screen, create batch operations job.
>
> **[5:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=315)** All that rule setup leads into this batch job that runs regularly to replicate the data from one region to another.
>
> **[5:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=323)** You can see we've got an option here to automatically run the job when it's ready, which we would love for it to do.
>
> **[5:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=328)** So we see these results immediately.
>
> **[5:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=331)** You can get a completion report out of this job but I'm going to uncheck that because I don't think we need to configure that right now.
>
> **[5:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=339)** Let's go ahead and keep the [[Representational State Transfer (REST)|rest]] of things at the default and click save.
>
> **[5:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=348)** All right, now you can see that we have this job.
>
> **[5:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=351)** If we click this refresh button, we should see the status that it's in.
>
> **[5:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=356)** So it's trying to replicate the existing objects.
>
> **[5:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=359)** It's in a preparing stage and you can continue to monitor it by clicking this.
>
> **[6:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=365)** Now, in the future, this will be an ongoing task, so you won't ever have to kick this off again or sit there and watch it, but it will just happen on its own.
>
> **[6:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=377)** All right, now the job's in Ready state, so it's about to run.
>
> **[6:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=383)** Now it's active.
>
> **[6:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=386)** And after a few minutes, the job is in complete state.
>
> **[6:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=390)** So you see it found two objects, 100% complete.
>
> **[6:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=394)** We can click this hamburger menu over here, go back to buckets, then click into the Ireland bucket demo-secondary and see that those objects exist.
>
> **[6:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=405)** If we want to take this a step further, we can go to buckets, back to the demo bucket and upload a new file.
>
> **[6:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=414)** I'll click add files and choose the Parks_and_Landmarks_in_Detroit.csv file, and click upload.
>
> **[7:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=425)** And that's now uploaded to our primary bucket so we can close that.
>
> **[7:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=430)** Head back to buckets and into the secondary.
>
> **[7:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=435)** And in a few moments, we'll be able to refresh this and see that the object has been replicated automatically to the Ireland region.
>
> **[7:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-cross-region-replication?u=76281980&t=446)** And now a few minutes later, we see that file too has been replicated to the cross-region destination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** aws (3), make (2), find (1)
> **Env Vars:** aws (3)
> **UI Navigation:** scroll down (1), click on (1), go to (1)
> **Definitions:** is called (1), is a  (1)
> **Prerequisites:** setup (1), configure (1)
> **File Paths:** parks_and_landmarks_in_detroit.csv (1)
> **Cross-References:** go back to (1)

#### [Set up SNS for event notifications](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=0)** - [Instructor] Another really powerful capability of S3 is the ability to send notifications to other AWS Services when something happens in the bucket.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=9)** You can send messages to SNS, the Simple Notification Service; to SQS, the Simple Queue Service; or to Lambda Functions, where you can actually execute code in response to something changing in S3.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=22)** For this demo, I'd like to set up an SNS topic and show you how to connect it to the S3 bucket to receive notifications via email when certain events occur.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=32)** So here, on the home console, in the search bar, let's type SNS and choose the first option, Simple Notification Service.
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=42)** SNS is a pub/sub service.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=45)** It lets you create message topics so that you can blast out notifications to subscribers via email or text messaging.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=52)** Today, we'll set things up so that we get emails when things change in S3.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=56)** So here, we want to create a topic, and we'll call it S3DemoNotifications.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=63)** Click Next Step.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=66)** You can see here that you have a couple of options for how this message topic works.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=70)** Standard means at least once message delivery, which means there's a possibility of duplicates, so if that were a problem for your use case, you choose the first in, first out style.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=81)** For us, standard works just fine.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=84)** We've got our name.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=85)** Display name is optional, so we can skip that.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=88)** In fact, we can just scroll all the way down and click Create Topic without changing any of the defaults.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=95)** Okay, now that the topic is created, we have one more step.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=100)** With the pub/sub model in SNS, you can have multiple subscribers to the one publisher, that is, the message topic.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=108)** So right now, we don't have any subscribers.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=110)** We need to create a subscription to this topic so that we can receive email whenever S3 has a notification for us.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=116)** I'll click Create Subscription.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=120)** The protocol here we'll choose will be email, And the address is an address I've created for purposes of receiving the mail.
>
> **[2:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=130)** You should put your own address in here if you want to try it out.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=135)** Click Create Subscription.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=137)** Okay, now the subscription is created, but before I can start to receive emails, you can see we've got a status here of Pending Confirmation.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=145)** That means I need to go into my email account and respond to a message that will ask me to confirm the subscription.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=152)** So I've got this open in another tab here, and you can see I've got subscription confirmation here as an email, and all I need to do is click this link, and that will confirm my subscription, which means now, we can go back into SNS.
>
> **[2:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=167)** And if we refresh the page here, we ought to see that the status is updated.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=171)** So now, we're confirmed.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=173)** We can click back to the topics list, go into S3DemoNotifications, and we can test things out real quick.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=181)** Click Publish Message, and we'll give a subject, just something like, "Hello, world," and then some kind of message body here.
>
> **[3:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=191)** Just say, "This is a test message."
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=194)** Scroll down, and we'll click Publish Message.
>
> **[3:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=197)** So this will allow us to confirm that we are receiving emails from the SNS topic.
>
> **[3:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=202)** Look here in my inbox.
>
> **[3:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=204)** There we go. "Hello, world," test message.
>
> **[3:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=206)** That is all working.
>
> **[3:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=208)** But before we can have S3 start to send notifications to this topic, there's one more thing we need to do.
>
> **[3:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=214)** We need to set an access policy on the topic that will specifically allow our demo bucket to publish events to it.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=221)** If you're here in the topic and click Access Policy, you can see the current policy, but it's read only.
>
> **[3:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=228)** Head up to the Edit button here, and we'll be able to change it.
>
> **[3:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=232)** Expand Access Policy, and you can see that this section is now editable.
>
> **[3:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=237)** As for what goes in here, well, if you look in the chapter two section of the exercise files associated with this course, you will see a document called sns_publish_policy_template.[[JSON]].
>
> **[4:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=251)** If you copy this, we can fill in the values that will make this work.
>
> **[4:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=257)** So copy, head back in here, erase what is already there, and paste the contents.
>
> **[4:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=264)** Now, if you look here, you'll see that we're allowing the S3 service to publish to this SNS topic, and what we need to provide is the unique identifier for the S3 bucket as well as the SNS topic.
>
> **[4:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=277)** So from here, we need to open up some new tabs so that we can keep this window open but also go [[Fetch]] those identifiers.
>
> **[4:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=286)** The first thing to do is go up here to the name, S3DemoNotifications, right click, and choose Open Link in New Tab.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=294)** That will let us have the details of the topic here, and we can copy the ARN, that unique identifier, head back to the first tab, and paste that over the SNS topic ARN.
>
> **[5:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=307)** So erase that, paste that in.
>
> **[5:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=310)** Now, here on the second tab, again, I will go type S3 to go to the S3 section.
>
> **[5:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=316)** Find our demo bucket.
>
> **[5:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=322)** Go to Properties, and copy its ARN.
>
> **[5:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=326)** In this case, I can click the Copy button, and that will go into my clipboard.
>
> **[5:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=332)** Back here, I'll paste that over S3 bucket ARN, make sure there are no additional spaces, and we're good.
>
> **[5:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=340)** I'll go down and hit Save Changes.
>
> **[5:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-sns-for-event-notifications?u=76281980&t=347)** Okay, now that we've got the SNS topic all set up, in the next video, we'll head back to S3 and configure the event delivery that'll make this all work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[Fetch]] (1)
> **Env Vars:** sns (11), arn (4), aws (1), sqs (1)
> **CLI Commands:** make (3), aws (1), find (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** set up (2), configure (1)
> **File Paths:** sns_publish_policy_template.json (1)
> **Code Identifiers:** sns_publish_policy_template (1)

#### [Set up S3 for event notifications](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=0)** - [Instructor] Okay, following up from the previous video, we've got our SNS topic all created and ready to receive events from the S3 bucket.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=8)** So now we just need to go configure that on the bucket itself.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=12)** That demo bucket is still open here in the second tab and it's open to the Property section which is where we need to be.
>
> **[0:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=18)** Scroll on down to Event notifications and click Create event notification.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=25)** Here we need to think a little bit about what kinds of notifications we want sent from this bucket.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=30)** For this demo, we'll send an email anytime something is deleted out of the bucket.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=34)** Maybe we've got important files in there and we want a notification anytime that happens.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=39)** So we'll call this S3DeletionEventNotification.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=45)** And we'll scroll down here to Event types.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=47)** This is where we can select all the types of events that we want to show up in our email whenever they happen.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=54)** I'm interested in Object removal.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=56)** If I click Permanently deleted or Delete marker created, that'll cover everything.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=60)** But there is this all-encompassing section over here if I check it, called All object removal events which encompasses both of these.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=70)** So that'll be good and I'll scroll on down to the bottom.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=74)** The destination is an SNS topic, of course, and we need to choose our topic.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=81)** Here in the dropdown, we see the one we just created, S3DemoNotifications and we can click Save changes.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=90)** Now, all we need to do test this is to go to our Object section and delete something.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=96)** So I'll select this first one, Maryland_Farmland.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=100)** Check the box and click the delete button.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=105)** To confirm this I'll need to type the [[Microsoft Word|word]] delete here, and say delete objects.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=111)** Okay, that's successful.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=113)** We can close this and then head back to email to see if we get our notification.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=119)** And there we have it.
>
> **[2:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=121)** So I have full details on what happened.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=125)** Delete marker created.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=126)** Remember, this is a version bucket so a full delete didn't happen.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=129)** We got a delete marker set on that object and I have complete details on what happened here in my email.
>
> **[2:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=136)** This is the same kind of information that you could send to a Lambda and take action in any other service in Amazon based on this information.
>
> **[2:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/set-up-s3-for-event-notifications?u=76281980&t=144)** So it's a very powerful feature that can unlock a whole lot of functionality in AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** sns (2), aws (1)
> **UI Navigation:** scroll down (1), dropdown (1), go to (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** aws (1)
> **Cross-References:** previous video (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [AWS Glacier and S3 lifecycle rules](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=0)** - [Instructor] Let's talk S3 Storage Tiers and lifecycle policies.
>
> **[0:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=4)** First up, we have S3's primary offering S3 Standard.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=9)** This general purpose tier sports an amazing 11 nines of durability, which in fact all S3 Tiers do.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=17)** It also has four nines of uptime meaning that on average you might experience one minute of unresponsiveness a week.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=24)** In practicality, the service is much more reliable than even that.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=28)** As the advertised numbers take into account the effect of the rare actual service outage where you might accumulate several minutes of downtime at once.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=37)** To get a sense of the low cost of AWS objects storage, this most expensive S3 Tier, will run you about 2.30 cents per gigabyte per month.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=47)** With prices falling the more you store.
>
> **[0:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=50)** So that's S3 Standard.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=53)** From here, we'll be making trade-offs, lower cost but along with that, certain concessions In terms of things like uptime and speed of retrieval.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=62)** Intelligent tiering is a storage class that can move data for you automatically by watching your access patterns.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=69)** It charges a small amount to monitor your data but then moves objects between frequent, infrequent and archive instant access tiers without your intervention.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=81)** It's worth noting that tiers, that's a tears used by intelligent tiering are not technically the same as the other S3 Tiers we're discussing in this video.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=89)** This storage class kind of stands on its own and has its own internal tiers.
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=94)** You could basically think of this as an easy button for managing data life cycles but if you'd like a little more control over your object storage, you want to keep listening.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=104)** The next two storage tiers trade a bit of availability for cost.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=109)** The IA in Standard-IA stands for infrequent access.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=114)** If you don't need to get to your data all that often, give this tier a try.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=119)** Do notice that at some point you run into some storage minimums.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=123)** First, objects that are deleted before 30 days incur a small monetary penalty.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=129)** Second, for billing purposes, each object is treated as if it were at least 128K.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=135)** This is no doubt due to some internal quirk of storage allocation happening within AWS but it's something to be aware of.
>
> **[2:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=144)** One Zone-IA is just the same, but as the name suggests limited to just one availability zone that drops its uptime to 99.5%.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=156)** To be clear, when your objects are stored in just one AZ you're subject to losing access in the event of a full AZ outage or losing your files, if the AZ is somehow destroyed.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=168)** Still, depending on your requirements, it might be a risk you're willing to take to achieve lower costs.
>
> **[2:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=174)** For this tier, you're looking at about only 1 cent per gigabyte per month.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=181)** Glacier is Amazon's long-term data archiving solution.
>
> **[3:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=186)** It's designed to store vast quantities of data as reliably and cheaply as possible.
>
> **[3:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=191)** There's literally no limit to the amount of data you can store and a single archive file can be up to 40 terabytes in size.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=199)** Of course, there's a trade off for this low cost reliability.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=203)** As the Glacier name implies, to retrieve data you must effectively unfreeze it and depending on the tier you choose, the process is not necessarily immediate.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=213)** After all the Glacier use cases for archival or long-term storage for things you need to keep for say, compliance purposes but don't need to access quickly or regularly.
>
> **[3:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=223)** Glacier used to be a fully distinct service from S3 but eventually AWS simplified things quite a bit by making Glacier into a set of storage tiers of S3.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=233)** Let's take a look at what those tiers are.
>
> **[3:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=237)** First, there's Glacier Instant Retrieval.
>
> **[4:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=240)** This is where the prices really start to drop at four tenths of a cent per gigabyte per month.
>
> **[4:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=245)** However, you now have a minimum of 90 days that you must keep data stored before retrieving it.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=252)** Still when you need the files out of here, you can get them instantly.
>
> **[4:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=256)** Price drops even more with Glacier Flexible Retrieval.
>
> **[4:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=260)** In this case, the flexible party would be you.
>
> **[4:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=263)** If you don't mind waiting minutes to hours for your data to become available to re-download this tier is a great option.
>
> **[4:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=271)** Now, the per object minimum size changes to 40K.
>
> **[4:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=276)** Finally, the longest term cheapest archival storage on AWS, Glacier Deep Archive, retrieval takes hours and you must keep objects a minimum of 180 days but the price is less than one-tenth of a cent per gigabyte per month.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=294)** That low cost storage is no doubt attractive, but of course often you won't want to archive data directly to Glacier.
>
> **[5:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=302)** Rather, you'll be starting with hot data, data that is frequently accessed.
>
> **[5:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=306)** What you'd like to do is migrate it over time as it becomes less frequently used to cheaper long-term storage.
>
> **[5:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=313)** S3 Lifecycle rules allow you the control to do exactly that.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=319)** S3 lifecycle rules can migrate data to cheaper storage tiers in S3.
>
> **[5:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=324)** They're based on object age in days.
>
> **[5:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=327)** They cannot be applied based on access frequency.
>
> **[5:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=330)** If you want that, just use the intelligent tiering class and they will not be applied to objects less than 128K in size, which is minor bummer.
>
> **[5:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=342)** There used to be more complex rules about which tiers could transition to which others but AWS now depicts this in their documentation with what they call a waterfall.
>
> **[5:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=352)** Take a look here at their docs to see this image as well as more details.
>
> **[5:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glacier-and-s3-lifecycle-rules?u=76281980&t=357)** For now, let's head into the console to try out configuring some data lifecycle rules on our own.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (5), az (3)
> **Env Vars:** aws (5)
> **Definitions:** is a  (2), stands for (1)
> **Versions:** 2.30 (1), 99.5 (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [S3 data lifecycle configuration](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=0)** - [Instructor] Now, let's see how we can configure S3 to manage the data lifecycle of the objects in our bucket.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=6)** Go ahead and click into your demo-bucket, and then to the Management tab.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=11)** Here, you see Lifecycle rules, and we'll create a new rule by clicking this button, Create lifecycle rule.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=19)** On this screen, we have a lot of flexibility as to what we can do, and as to how much logic we can put into a single rule.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=26)** But we want things to be readable and easy to understand, so we're going to do these things in a few steps.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=32)** The idea here is that we're going to tell our objects to go to Infrequent Access after 30 days, then go to the Glacier tier after a longer period of time, and finally, after a year, expire and delete completely.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=47)** So to do that, like I said, we could put it all in one rule, but for readability's sake, I think for better maintainability sometimes it's nice to have them separated.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=56)** So we're going to start with a rule called MoveToInfrequentAccess.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=63)** Now, this next section, like we've seen in other parts of S3, asks whether we want to scope this rule down to any subset of objects.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=70)** We don't want that, so we can leave this all at default, except in this case the default selection is to limit the scope.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=77)** So we need to select this radio button here that says Apply to all objects in the bucket.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=83)** S3 gives us a little bit of a warning, and we just need to say yes, we understand what's happening, we know what we're doing.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=90)** We acknowledge, and move on.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=92)** All right, here's where all the logic gets defined under Lifecycle rule actions.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=97)** We're going to act on both current and non-current versions of objects in the bucket, because remember, we're dealing with a bucket that we set to be versioned.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=105)** So it has both current versions and past versions of any edits that we've made over time.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=111)** So this MoveToInfrequentAccess we're going to make very straightforward.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=114)** We're just going to apply to every version of every object, so we'll check both of these, Move current versions of objects between storage classes, yes, and Move non-current versions of objects between storage classes, also yes.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=129)** That results in two configuration boxes down below, which we will now edit.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=134)** So we're going to move current versions of objects to Standard Infrequent Access after a certain number of days.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=141)** And in fact, you can see as we're typing that 30 is the minimum.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=145)** So we're just going to go with that, and that fits nicely.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=148)** 30 days, you can see we can add more transitions.
>
> **[2:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=151)** Yeah, move things to other tiers in this same rule after a different number of days.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=157)** That's perfectly viable, but we're going to keep things straightforward, so just have the one rule.
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=162)** Non-current versions, we're going to make no distinction here.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=165)** We're also going to move those to Infrequent Access after the same number of days, 30 days.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=170)** You can retain some number of past versions here if you want.
>
> **[2:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=174)** Just leave this blank, though, and we'll move on.
>
> **[2:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=178)** You see a summary of what's going to happen as a result of this rule on the last part of the screen here.
>
> **[3:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=183)** Just make sure that looks good, and we'll say Create rule.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=188)** All right, so that's the first part, MoveToInfrequentAccess.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=192)** Let's click the button to create another rule, Create lifecycle rule.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=195)** This is going to be MoveToGlacier.
>
> **[3:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=200)** Same thing, apply to all objects in the bucket, acknowledge this is what we mean, and we're going to move current versions and move non-current versions, this time not to IA, but to Glacier Flexible Retrieval.
>
> **[3:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=215)** This time, we'll move it after 100 days.
>
> **[3:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=218)** There's a note here where S3 is warning you about the retrieval cost of objects in Glacier.
>
> **[3:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=224)** We know about that, but make sure to read if you want more details, and click acknowledge.
>
> **[3:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=231)** Same thing for the non-current versions.
>
> **[3:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=234)** Go to Glacier Flexible Retrieval, after 100 days, leave this blank.
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=239)** No need to retain any objects.
>
> **[4:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=241)** By the way, if you put a zero in here, you may see an error, so do just leave that blank.
>
> **[4:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=246)** Acknowledge the warning down below, read the summary, and click Create rule.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=253)** Okay, so that's step two of three.
>
> **[4:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=256)** We'll create one more.
>
> **[4:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=259)** And this is ExpireObjects.
>
> **[4:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=263)** We'll apply to all objects in the bucket, acknowledge the warning, and this time we won't select these two first check boxes.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=270)** Instead, we'll go to Expire current versions, and Permanently delete non-current versions.
>
> **[4:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=277)** Again, this is not a very sophisticated rule.
>
> **[4:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=279)** You may want to do different things in your bucket, depending on your use case.
>
> **[4:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=283)** But for current versions after a number of days of object creation, we're going to say 365 there.
>
> **[4:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=290)** As for non-current versions of objects, same thing, 365.
>
> **[4:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=295)** And we will not retain any past versions.
>
> **[4:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=298)** So this will delete everything, current and non-current versions of objects after a year.
>
> **[5:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=303)** We'll click Create rule.
>
> **[5:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=306)** So with that, we've established a complete data lifecycle policy for the objects in this bucket.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=311)** After 30 days, they're going to move to the cheaper Infrequent Access tier.
>
> **[5:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=315)** After 100 days, they're going to move to Glacier, and then after an entire year, they're going to expire completely.
>
> **[5:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-data-lifecycle-configuration?u=76281980&t=322)** So you can see how from the tools that we've just seen there are a lot of ways that you can develop a very sophisticated [[Data Management]] policy for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Management]] (1)
> **CLI Commands:** make (4)
> **Warnings:** warning (4)
> **UI Navigation:** go to (3)
> **Best Practices:** make sure to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Versioning in S3](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=0)** - [Narrator] If you've been following along with the course your demo bucket has versioning enabled on it.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=5)** This means that the objects we place inside will retain a history of their versions as they're edited over time.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=12)** Let's go ahead and click into the demo bucket and we can pick one of the files.
>
> **[0:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=16)** How about this parks and landmarks from Detroit?
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=20)** We can open up the file and make a quick change to the data.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=27)** Why don't we just go ahead and delete this column here?
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=31)** Now, that's a pretty big change, and if that were a mistake this is something that our S3 bucket versioning could save us from because we would have the old version.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=40)** Let's go ahead and save that and head back to S3.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=45)** We'll go back to the demo bucket and re-upload the file.
>
> **[0:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=50)** That's how you create a new version of anything.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=52)** You just upload it again, so we'll click upload then add files, and add that CSV and click upload.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=65)** Hit close and we can click back into the file and click this versions tab right here.
>
> **[1:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=71)** Now you can see that we have two versions maintained on the file.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=76)** We have the current version and the past one which we can click and download separately.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=81)** You can see here we've got the version ID designating that we are looking at a past version and not the current one.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/versioning-in-s3?u=76281980&t=87)** So in this way, turning on versioning for an S3 bucket allows you to see back in time and make sure that any accidental object deletion or modification is not a catastrophe because you can always get back to an earlier version of the file.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** csv (1)
> **Cross-References:** go back to (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [S3 teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=0)** - [Instructor] Throughout this course, if you're following along, you're going to be building resources in AWS, and each one of these is going to have some cost associated with them.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=9)** If you look at AWS's documentation, you can see that the free tier that exists can cover the cost of a lot of these resources.
>
> **[0:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=18)** If you are a first time subscriber to AWS, there's a lot that you can do in the first 12 months that is free.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=25)** However, you always want to keep track of the things that you build and delete them whenever you don't need them anymore to make sure you don't encounter any unexpected costs at the end of the month.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=34)** So that's what we're going to do at the end of every chapter.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=37)** So in order to take care of what we've built in S3, we need to do a couple of things.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=43)** First, let's work backwards by starting with the Simple Notification Service.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=47)** We're going to delete the topic that we use to email.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=51)** So I'll go into Amazon SNS, which I got from my Frequently Accessed Services, or by typing SNS up here in the menu.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=59)** I'll go to topics, highlight the checkbox next to S3 Demo Notifications, and click Delete.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=69)** I'll have to confirm by typing Delete Me in the text box, which is something that happens a lot throughout AWS's graphical interfaces.
>
> **[1:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=78)** They'll have you type the [[Microsoft Word|word]] delete or copy and paste, or type out the name of a resource in particular just to make sure that you are doing what you intend to do.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=89)** So, okay, let's head back to the dashboard by clicking the logo button here, and we can go into the S3 service, either by going to recently visited or by typing.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=101)** We've got two buckets here from the course.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=104)** Now, the first thing I want to mention here is that the demo bucket is something I'm going to keep around for using later in the course, and you might want to do the same.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=113)** So I'm just going to delete the secondary bucket here from the Ireland region.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=118)** But if you'd like to delete both, it's going to be the exact same procedure.
>
> **[2:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=122)** So just repeat that for the primary bucket if you so choose.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=127)** I'll click the check box here.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=129)** Now, there are really two ways of doing this.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=131)** I can click Delete and it will prompt me to empty the bucket first or I can empty the bucket first and then Delete.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=137)** Let's go ahead and just click Delete and I'll show you what it says.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=141)** You get a warning here that buckets have to be empty before they can be deleted, and they give you a link to this thing they call the empty bucket configuration.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=149)** So here, to empty the bucket, I have to confirm by typing permanently delete, you can type it or you can cut and paste it, click empty, and then once this goes green, you can exit.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=163)** The bucket is empty so you can highlight it and click Delete.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=168)** Here, I'm going to have to copy and paste the name of the bucket to confirm, and I can click Delete Bucket.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=175)** All right, from here, like I said, I'm going to keep the primary bucket around for future purposes, but feel free to repeat that process if you want to clean everything up.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/s3-teardown?u=76281980&t=185)** All right, we'll see you in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** aws (4), make (2)
> **Env Vars:** aws (4), sns (2)
> **UI Navigation:** in the menu (1), go to (1), checkbox (1)
> **Cross-References:** later in (1), in the next (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. File Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Elastic Block Storage](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=0)** - [Instructor] When you create an [[Amazon EC2|EC2]] instance, you're asking AWS to start a virtual server for you.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=6)** Although it's sometimes easy to forget, this takes place on actual [[Hardware]], somewhere deep in Amazon's data center facilities for that availability zone.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=14)** Of course, a virtual machine is simply a way of giving you a virtualized slice of what's on the underlying hardware.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=21)** A bit of the CPU, some of the RAM, et cetera.
>
> **[0:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=23)** So in the beginning, if you needed hard drive space you'd use what's called instant storage, a slice of the hardware's disk drive.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=32)** Instant storage uses the disk attached to the instance's hardware.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=36)** It has lowest possible latency, survives reboots, and is suitable for ephemeral storage.
>
> **[0:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=44)** It might be disk-based or SSD-based.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=47)** Now, having said that it does not persist when the instance is stopped, although reboots are fine.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=53)** It cannot be encrypted and it's not part of a snapshot taken for an AMI.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=59)** It cannot be detached or backed up on its own and it has a fixed size tied to the instance size.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=65)** In short, instance storage is good for temporary uses like caching but its overall usefulness is limited.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=73)** Enter AWS's Elastic Block Store, or EBS.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=77)** EBS is network-attached storage, meaning that it has a lifecycle separate from the instance to which it's attached.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=84)** If the instance is stopped or even fully terminated, the EBS volume lives on.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=89)** This feature alone allows us to unlock the true elasticity of AWS Elastic Compute Cloud, or EC2, instances.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=97)** It means that we can shut down or sleep instances when we don't need them, such as at night or after business hours.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=104)** Since on-demand EC2 instances are charged hourly, this saves us money, and because EBS stays persistent, we can pick right back up where we left off the next day.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=114)** Since EBS is network storage, it can then be detached from one instance and attached, even at runtime, to another instance, and the data persists.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=123)** You can also attach multiple EBS volumes to a single instance, and unlike instance storage EBS can be grown on demand, giving you extra capacity when you need it.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=133)** Just be aware that you will need to make the operating system aware of any capacity changes.
>
> **[2:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=138)** EBS volumes can also be created as encrypted volumes.
>
> **[2:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=142)** The encryption is seamless, invisible to you as the user of the attached EC2 instance, but impenetrable to anyone who might gain access to the volume without permission.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=152)** What about reliability?
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=154)** Hard drives have a notorious failure rate, and with a vast number of hard drives AWS has deployed at any given time, failure is a certainty.
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=162)** The good news is that EBS is very reliable.
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=166)** Within its availability zone, an EBS volume is automatically replicated.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=170)** This replication gives EBS five nines of availability, meaning you can expect about five minutes of downtime in a year.
>
> **[2:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=178)** But we know that availability is not the same as durability, and disks are volatile.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=184)** AWS advertises that EBS has an annual failure rate of between 0.1 and 0.2%, making EBS 20 times more reliable than the typical off-the-shelf disk which carries a failure rate about 4%.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=199)** Of course, AWS gives you the tools to make sure that even those kinds of failures are not catastrophic.
>
> **[3:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=205)** You can snapshot an EBS volume at any time.
>
> **[3:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=208)** In fact, you can keep as many snaps as you like, creating them on a regular schedule, whatever satisfies your backup needs.
>
> **[3:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=215)** Just be aware that your monthly bill will increase with the number of snapshots you keep in your account.
>
> **[3:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-block-storage?u=76281980&t=220)** Now, let's take a look at what it takes to create an EBS volume.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Hardware]] (4)
> **Env Vars:** ebs (15), aws (6), ec2 (4), cpu (1), ram (1)
> **CLI Commands:** aws (6), make (2)
> **Versions:** 0.1 (1), 0.2 (1)
> **Definitions:** means that (1), is a  (1)
> **Warnings:** be aware (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Create an instance with multiple EBS volumes](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=0)** - [Instructor] In this video, we're going to look at how to create and configure multiple EBS volumes for an Amazon [[Linux]] EC two instance.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=7)** For that, we'll need to head into the EC two section of AWS, which I've recently visited, so I've got the link right here.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=15)** Click in, and let's go to the big orange button, launch instance.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=20)** Click that, and we'll be at the EC two creation wizard.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=24)** First, we need to give this host a name.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=26)** We'll call it EBS demo one, one, because we're going to have a second one of these in a few minutes.
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=35)** For Amazon machine image, we'll take the default of Amazon Linux two, and under instance type, we'll also keep the default of T two Micro.
>
> **[0:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=44)** Here under key pair, we either need to select or generate an SSH key that we use to log into the machine, so click create new key pair.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=54)** This SSH key will be used throughout the duration of the course, so give it a name you'll remember.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=59)** I'll call mine storage demo key.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=63)** Keep everything else at default, and click create key pair.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=67)** That will download to my machine, and we'll use it in a moment.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=72)** Under network settings, you can see we're creating a new security group.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=76)** It allows SSH traffic from anywhere in the world, and we're getting a warning that that is not particularly secure.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=83)** I agree with that.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=84)** In production, you would never want to create a rule that allowed SSH from anywhere in the public, however, for demo purposes, it'll work just fine.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=93)** All right, configure storage, because this is a storage course, we want to click the advanced button and see more details.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=101)** There's one volume on this machine right now.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=104)** Clicking the triangle will expand it.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=107)** We can see that storage type is EBS, and it has a device name, dev slash XVDA.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=114)** You don't need to memorize that, but take a good look, because we'll be seeing this in a moment.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=120)** We have a snapshot ID, as well as a size in gigabytes of eight gigs.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=125)** We have a volume type of GP two, and if you click the dropdown, you'll see several options here.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=131)** GP two and GP three are both the general purpose SSD that is the standard for most EBS use cases, but if you want to learn more, you can click on info and see a sidebar pop up that gives more details.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=145)** And even more than that, you can click on EBS volume type here at the bottom, and see a lot of information about the different cases for which each of these volume types is suited.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=154)** GP two and GP three are pretty similar.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=157)** GP three is newer and is cheaper, and allows you, if you select it, to specify your own IOPS and throughput.
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=166)** GP two scales its performance with volume size.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=171)** We'll keep it at GP two, the default for now and keep going.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=175)** Delete on termination is set to yes, which means this volume will go away if the instance that we're creating now is terminated.
>
> **[3:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=183)** Encryption is set to no, and we'll keep it that way.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=187)** Now let's create our second volume.
>
> **[3:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=189)** Click the button that says add new volume.
>
> **[3:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=193)** We'll make some different choices on this one.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=195)** The device name of dev SDB is filled out for us already.
>
> **[3:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=200)** Snapshot, we're going to leave blank.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=203)** Up here, we have a snapshot ID that refers back to the Amazon Linux image that's going to form the basis for this root volume.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=210)** Down here, with no snapshot selected, it means we're going to get a blank volume with no data on it.
>
> **[3:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=216)** The size in gigabytes of eight, we will change to six, just so that later when we're looking at these at the block level, we'll see the difference very easily.
>
> **[3:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=226)** The volume type can be GP three, can be GP two.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=229)** It doesn't really matter, but I'll make them match.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=233)** Now for delete on termination, I'm going to select no, because that allows us to use the feature of EBS that says that even if this instance terminates, we'll still have the EBS around, and can attach it to a different instance.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=247)** For encrypted, go ahead and say yes, and you'll be prompted over here to select a KMS key.
>
> **[4:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=254)** We've not created one separately, but that's fine, because like with S three, server-side encryption can be done by means of a key that's maintained by the AWS service.
>
> **[4:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=264)** It's called AWS/EBS, and if you click it, everything will be fine, and this volume can be encrypted.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=270)** You won't need to know the key or anything about it.
>
> **[4:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=273)** It'll just be a seamless encryption whenever things are read from or written to the disk.
>
> **[4:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=278)** Now that puts us at the end of the wizard, and we can choose launch instance.
>
> **[4:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=284)** It'll take a few moments for this instance to spin up.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=288)** To watch it, click the ID link here.
>
> **[4:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=292)** This takes us to our list of EC two instances, and in a moment, you'll see the instance state will change to running.
>
> **[4:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=298)** At that point, we can log in.
>
> **[5:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=301)** All right, this instance is created.
>
> **[5:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=303)** If we click the check box on it, we can see some details down below.
>
> **[5:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=307)** Let's copy the public IP address right here, and head on over to the terminal.
>
> **[5:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=314)** Before we can use our SSH key to log into the machine, we'll need to apply some different permission bits that it downloaded with.
>
> **[5:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=321)** Type CH mod, then four zero zero, and give the path to the key.
>
> **[5:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=328)** For me, it's in my downloads folder, and now that that's done, I can use it to SSH to the instance.
>
> **[5:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=336)** If you want to know more about how that works, check out one of my other courses, AWS Deploying and Provisioning.
>
> **[5:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=342)** All right, we're going to type SSH, then give the public IP dash I flag, and the path to that key.
>
> **[5:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=356)** That's going to take the place of a password, and before we execute this, we need to give a username right here before the IP.
>
> **[6:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=364)** That user will be EC two dash instance at.
>
> **[6:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=368)** There we go, that'll log us in.
>
> **[6:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=371)** Now just like anytime we go to a host for the first time, SSH is asking us to accept its fingerprint.
>
> **[6:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=377)** We'll say yes and hit enter, and here we are.
>
> **[6:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=380)** We are logged into the machine, and we can check out the storage situation.
>
> **[6:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=385)** We're going to use the disk free command, DF dash H, and we'll see a few things.
>
> **[6:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=392)** All right, several file systems here, the temp ones are memory-based file systems, so we don't have to worry about those.
>
> **[6:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=399)** And we can see one here that is larger than all the others, eight gigabytes in size, XVDA one.
>
> **[6:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=408)** Okay, so you should recognize that is similar to XVDA, which was our root block, but it's not exactly the same, so what's going on here?
>
> **[6:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=417)** Let's find out by typing LSBLK to list our block storage.
>
> **[7:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=423)** Okay, now we can see that XVDA one is a partition of XVDA, that root device, so that's where eight gigabyte drive comes from, and you can see it's mount point is slash, so this is all the storage on the device, XVDA one.
>
> **[7:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=441)** There's something else here that says XVDB, and what is that?
>
> **[7:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=446)** That is not the name that we expected.
>
> **[7:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=448)** We expected to see dev SDB.
>
> **[7:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=450)** Well, there is something on this machine called dev slash SDB.
>
> **[7:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=457)** Let's take a look at it, and we can see that it's actually a symlink.
>
> **[7:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=462)** So when we see XVDB here, that is actually our second volume, this six gigabyte volume and we can recognize that here as well under the LS block command by the six gigabytes, so we know that this represents our second volume.
>
> **[7:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=478)** AWS documentation states that EC two will take those device names and symlink them to other things.
>
> **[8:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=484)** So you can see also with dev slash XVDB, that this is also a symlink.
>
> **[8:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=491)** It just goes to its own name, so there's no redirection there.
>
> **[8:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=495)** All right, so now that we know what's what, how do we actually take advantage of this six gigabyte drive?
>
> **[8:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=502)** Well, we're going to need to mount it, and before we can mount it, we're going to need to format it.
>
> **[8:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=507)** Let's check out if this drive is formatted or not by using sudo, and then the file command, file dash S.
>
> **[8:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=515)** I'm going to point to dev slash, and we'll use this name, XVDB.
>
> **[8:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=521)** If we see the [[Microsoft Word|word]] data here, that means this is an unformatted drive.
>
> **[8:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=526)** We need to format it using something called MKFS.
>
> **[8:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=529)** We use sudo again, then MKFS dash T, and the format type of EXT four, and that same path, dev slash XVDB.
>
> **[9:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=545)** Okay, now that that command has finished its work, we can run the file again, and see much different output.
>
> **[9:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=552)** Instead of just seeing the word data, we see details on how the file system is formatted.
>
> **[9:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=557)** Okay, great.
>
> **[9:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=559)** So let's do DF dash H again to see if anything has changed, and it really hasn't.
>
> **[9:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=563)** We can see just the one root path here.
>
> **[9:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=567)** Now we need to create a mount point.
>
> **[9:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=569)** So a mount point needs a folder, and let's create one.
>
> **[9:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=574)** We use sudo again and make a directory with MKDIR, and we'll call it slash EBS dash encrypted, because this is our encrypted volume.
>
> **[9:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=585)** So it's just an empty folder, but we're going to use the mount command now to connect it up to that disk that we just formatted.
>
> **[9:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=593)** So we'll say sudo mount slash dev slash XVDB slash,
>
> **[10:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=601)** and now the folder name.
>
> **[10:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=604)** So we have sudo, mount, the name of the disk, the name of the mount point.
>
> **[10:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=610)** Okay, that seems to have done something, so let's go CD into EBS encrypted and look around.
>
> **[10:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=619)** Okay, it does look as though there's a file system going on here.
>
> **[10:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=622)** With a file system, we should be able to create a file.
>
> **[10:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=624)** So let's try to VI hello dot text or something like that.
>
> **[10:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=630)** We'll say hello and save the file, and uh-oh, can't open the file for writing, so let's exit out of here, and figure out how to resolve this.
>
> **[10:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=640)** So you can see that this volume, this part of the file system is owned by root.
>
> **[10:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=647)** We need to change that.
>
> **[10:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=648)** We're not logged in as root.
>
> **[10:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=648)** We're logged in as EC two user, so if we want to be able to use this file system, we need some ownership over it.
>
> **[10:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=655)** We use the CH own command, but we've got to use sudo, because that is a privileged command.
>
> **[11:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=662)** CHOWN, I'll say EC two user, colon EC two user to make both owner and group the same thing, dot, which is our current directory, and we'll give the dash R command just for fun to be recursive, even though we don't need it right now.
>
> **[11:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=680)** Now if we do LS again, you can see that the ownership has changed, and I should now be able to use VI to open up a hello dot text, put a message in there, write and quit, and save it successfully.
>
> **[11:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-instance-with-multiple-ebs-volumes?u=76281980&t=697)** I can open up the contents, I can do LS again, and now that you can see we have an encrypted EBS volume mounted on this EC two instance, usable and writeable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Microsoft Word|Word]] (2)
> **Env Vars:** ebs (11), ssh (8), xvda (6), xvdb (6), aws (5)
> **CLI Commands:** ssh (8), sudo (6), aws (5), make (4), ls (3)
> **UI Navigation:** dropdown (1), click on (1), go to (1), open the (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** just like (1), similar to (1)
> **Prerequisites:** configure (2)
> **Tools:** terminal (1)

#### [Modify the type and size of an EBS volume](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=0)** - [Instructor] In this video, we'll expand the size of the EBS volume we just created and then update the operating system to make that space usable.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=8)** To do this, we'll need to head back to the AWS Console, specifically into [[Amazon EC2|EC2]] and into our list of running instances, which I can get from clicking here.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=21)** Click the checkbox next to EBSDemo1.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=26)** You see the details below and can click the Storage tab to find out more about the storage volumes.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=32)** You see both of our device names here.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=34)** And recall that SDB is our secondary EBS at size six.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=39)** This is the one that we want to resize.
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=42)** To do that, click on its Volume ID here and we'll be taken to another part of the EC2 Console.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=48)** The Volume section, as you can see highlighted here.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=52)** If we check the checkbox next to this volume and go over to Actions, we can modify volume.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=62)** This will allow us to change the volume type if we wish, or in the case of this demo, to change the size from six to 10.
>
> **[1:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=71)** Click Modify.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=74)** We're being told here that this may take a few minutes and that we must extend the file system on our operating system to get this to work.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=82)** So we say Modify.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=85)** If you scroll over to the side, you can see that the state of this volume is modifying.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=91)** Once that's complete, we can head back to the Console.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=97)** Okay, after a few minutes, our volume is done modifying.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=100)** You can see the size is up to 10 gigabytes and although it is still in this optimizing state, we can proceed with the demo.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=107)** Head back to the Console and log into the instance.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=111)** If you type df -h, you'll see xvdb, which represents the secondary drive right here.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=118)** And for some reason, it is still at about six gigabytes.
>
> **[2:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=122)** What is going on here?
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=123)** Well, as Amazon just told us, we're going to need to modify the operating system to make this work.
>
> **[2:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=130)** Let's take a look first at lsblk.
>
> **[2:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=132)** Lsblk.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=134)** Okay, there we see the 10 gigs.
>
> **[2:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=136)** They are here.
>
> **[2:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=138)** They're just not visible to the operating system.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=140)** So the command we need is sudo resize2fs for file system and we'll give the name dev/xvdb.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=154)** Give it a second to run.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/modify-the-type-and-size-of-an-ebs-volume?u=76281980&t=156)** Now let's run df -h again and we'll see the larger size is now available to us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2)
> **Env Vars:** ebs (2), ec2 (2), aws (1), sdb (1)
> **CLI Commands:** make (2), aws (1), find (1), sudo (1)
> **UI Navigation:** checkbox (2), click on (1)
> **Tools:** aws console (1)
> **Speakers:** - [instructor] (1)

#### [Detach and reattach an EBS volume](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=0)** - [Instructor] In this video I'm going to demonstrate how we can detach an EBS volume from this instance and attach it to another.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=7)** In order to show this functionality I'm going to need a second [[Amazon EC2|EC2]] instance.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=12)** Now before we do that, please take note of the availability zone that EBS demo one is in.
>
> **[0:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=18)** We want to make our second instance in the exact same AZ, because volumes are unique to an availability zone, we can only detach and reattach within this AZ.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=29)** For me, it's US East 1A, but it may be different for you.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=33)** Click launch instances.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=37)** Now we'll call this EBSDemo2.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=41)** We'll keep the same AMI, which is Amazon [[Linux]] 2 and the same instance type.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=46)** For the key pair, instead of creating a new one, we'll use the dropdown and select the one we've already got storage-demo-key.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=55)** Under network settings, instead of saying that we have no preference for the subnet, we'll click edit and choose the one that's in the availability zone that matches EBSDdemo1.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=68)** For me, that's right here US East 1A.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=73)** We'll keep everything else at the default.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=75)** Allow it to create the ssh from the World Security Group and keep storage at just the one root volume.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=83)** Click launch instance.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=86)** Now while this instance is being created, we can click into the ID of the instance and head back to the EC2 console.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=95)** And while this is being created, we can take a step that we need to take on the first instance before we can proceed.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=101)** So head back to the console.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=103)** I'm here logged into EBSDemo1.
>
> **[1:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=106)** You remember if you use the disc free-h command, that we've got xvdb mounted as ebs encrypted.
>
> **[1:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=115)** In order to proceed we're going to have to unmount this block device.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=119)** So say sudo umount, not to be confused with unmount, that's umount -d, and then the name of that device /dev/xvdb.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=133)** All right, now we have unmounted the device which we can confirm and then exit.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=141)** Okay, back on the EC2 console, EBSDemo2 is now up and running.
>
> **[2:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=146)** That's great, but before we ssh to it we need to detach the volume from EBSDemo1.
>
> **[2:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=153)** Let's clear filters here so we can see that other instance.
>
> **[2:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=158)** Here's EBSDemo1, and if we click the checkbox next to it, we can go to the storage tab, scroll down and see that 10 gigabyte volume that we modified earlier.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=168)** Click the volume ID, and once again we'll go to the volume section.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=173)** We're looking at just that one volume which we now want to detach from EBSDemo1.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=179)** Check the checkbox, go to actions and then choose detach volume.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=184)** Confirm by clicking detach.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=188)** If you scroll to the side, you'll see that this stays in use for a few moments and should become available again.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=198)** There we go.
>
> **[3:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=200)** Now the volume is available to be reattached.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=203)** Check the checkbox again, go to actions and then attach volume.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=210)** Now here under instance we can hit the dropdown and attach to EBSDemo2.
>
> **[3:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=218)** The new device name you can edit, but we'll take the default, it's called dev/sdf.
>
> **[3:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=224)** Click attach volume.
>
> **[3:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=230)** If you look at the status now you can see that, that volume is in the attaching state.
>
> **[3:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=235)** Let's head back to the console.
>
> **[3:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=238)** Now we need to connect to our EBSDemo2, so we're actually going to need to [[Fetch]] that IP address from the EC2 console.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=247)** Let's head over to instances un-click EBSDemo1, click on EBSDemo2, and copy the public IP address.
>
> **[4:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=257)** Now back to the console.
>
> **[4:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=258)** Ssh EC2-user@IP address-I, and then refer to your key.
>
> **[4:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=268)** Say yes to the fingerprint.
>
> **[4:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=271)** And now here we are on EBSDemo2.
>
> **[4:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=276)** The DF command shows us just the mounted route drive, but if we do lsblk, we'll see that we have xvdf, which is no doubt a sim link for dev/sdf which we saw referred to in the AWS console.
>
> **[4:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=293)** And there it is.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=294)** So we need to do just like we did before.
>
> **[4:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=298)** First I want to check by running sudo file -s on dev/sdf.
>
> **[5:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=307)** Is this volume formatted?
>
> **[5:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=310)** It would rather us use not the SIM link, but xvdf so let's try that.
>
> **[5:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=316)** There we go.
>
> **[5:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=317)** We did not get the [[Microsoft Word|word]] data back.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=319)** We get all this detail, which shows us that it is already formatted, which is exactly what we'd expect because this is the same EBS volume that we just used on the other instance.
>
> **[5:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=329)** All we need to do is create a mount point.
>
> **[5:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=331)** So let's do that.
>
> **[5:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=332)** We'll create an empty folder.
>
> **[5:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=334)** We use sudo, make directory and we'll call this one, /ebs-reattached.
>
> **[5:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=340)** That's an empty folder which we can mount using sudo mount /dev/xvdf, and then the name of the mount point.
>
> **[5:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=351)** Hit enter and we should be good.
>
> **[5:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=353)** Let's cd into ebs-reattached.
>
> **[6:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=360)** Okay, I can see the hello.txt file that we had before and open it up.
>
> **[6:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/detach-and-reattach-an-ebs-volume?u=76281980&t=367)** And with that, we have detached an EBS volume from one instance and restored it by attaching it to a completely different instance carrying on with the same data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (5), [[Linux]] (1), [[Fetch]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** sudo (4), ssh (3), make (2), az (2), aws (1)
> **Env Vars:** ec2 (5), ebs (4), ami (1), aws (1), sim (1)
> **UI Navigation:** go to (4), checkbox (3), dropdown (2), select the (1), scroll down (1)
> **File Paths:** hello.txt (1)
> **Tools:** aws console (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [EBS backup, restore, and schedule with CloudWatch](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=0)** - [Instructor] As I mentioned, it's possible to take snapshots of your EBS volumes to ensure that you have backups of your critical data.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=7)** Let's go into the [[Amazon EC2|EC2]] section and see how this works.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=11)** All right, here we are looking at EBSDemo2.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=13)** It's already highlighted.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=15)** If you go down below and click the Storage tab, we can see details of the two volumes attached to it.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=22)** We have the 10 gigabyte secondary volume and the eight gigabyte root volume.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=26)** Let's click the ID of the first one, the root volume.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=30)** We're taken to the Volume section over here on the side, and we can select and highlight that volume.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=37)** Then go to Actions and choose Create snapshot.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=41)** This is how we create a one-off manual snapshot of an EBS.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=45)** We'll call it EBSDemo2-root-volume-snapshot, something like that, and click Create snapshot.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=55)** From here, we're taken back to Volumes but you can see the snapshot ID up in the header and click it, and we can see that it's already making progress on taking this snapshot.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=66)** If you want to refresh the page, you've got the button right here.
>
> **[1:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=71)** Okay.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=72)** Now the snapshot is complete, and it's in the Available state.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=75)** So what can we do with this?
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=77)** If I go to Actions and click the dropdown, I can see that I can create a brand new EBS volume from the snapshot, or I can create a machine image.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=86)** Remember, when we created the EC2 instances to begin with?
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=90)** We chose the Amazon Machine Image or AMI, for Amazon [[Linux]].
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=94)** This is how you create your own AMI's.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=97)** If I had modified this root volume in some way, say by, especially installing certain packages or configuring it in a way that's important to my business, I can create a new AMI from this snapshot to use as the basis for future builds of EC2 instances.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=112)** Let's see how that works.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=114)** Click Create image from snapshot.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=117)** From this screen, we need to give it a name, and we'll just call it EBSDemoAMI.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=124)** We'll keep everything else at the default and click Create Image.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=129)** Now you can see up at the top a confirmation that the AMI is on its way.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=134)** We'll click that ID of the AMI to go to that section of the console.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=139)** Now, if you check this box right here, you can see that the AMI is in the Available status, and we have the option to launch an instance from this AMI.
>
> **[2:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=151)** So that means just like that, we've got a new AMI that we can use to create instances.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=156)** Very nice.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=157)** So not only can we launch instances from this AMI, we can go back to that snapshot and use it to create a new EBS volume just to restore the storage for an instance if we had a problem.
>
> **[2:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=169)** So there are a few things that we can do with those snapshots.
>
> **[2:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=172)** Now, even better than creating a snapshot manually is to have AWS take them automatically for us.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-backup-restore-and-schedule-with-cloudwatch?u=76281980&t=177)** For more of that, please see the final chapter of this video course where we will explore the AWS backup service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Linux]] (1)
> **Env Vars:** ami (9), ebs (4), ec2 (3), aws (2)
> **UI Navigation:** go to (3), dropdown (1)
> **CLI Commands:** aws (2)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Elastic File System](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=0)** - [Instructor] In order to address the limitations of EBS and provide users with truly flexible storage, AWS introduced an elastic file system.
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=10)** EBS' first claim to fame is that it grows and shrinks in size.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=14)** Not manually, on demand like EBS, but automatically in response to your usage.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=19)** You don't even have to update the operating system because EFS always presents, what looks like, many petabytes of storage.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=26)** EFS is not block storage like EBS.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=29)** Rather, it's a file system that can be mounted by NFS 4.0 or 4.1 clients.
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=35)** Unfortunately, that does mean that [[Windows]] cannot natively mount EFS.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=39)** However, you can enable an NFS service on certain versions of Windows that provides an NFS client or use a third party client.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=47)** Alternatively, you can stand up a native CIFS file system and use another AWS service, FSX for Windows, which we'll explore later.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=56)** As a network file system, EFS can be mounted by many clients at once, making it well suited for tasks that require shared disk space, such as horizontally scalable web apps or parallelizable [[Data Processing]] jobs.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=70)** This makes EFS a potential NAS replacement.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=73)** And unlike EBS, elastic file systems can be mounted from outside AWS.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=79)** If you're using AWS Direct Connect, you can have an on-premises instance, or anything that can use NFS, mount EFS.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=87)** This makes EFS a perfectly viable way to get data out of your data center and into the AWS cloud.
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=94)** Before an instance can connect to an EFS file system, it must have at least one mount target.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=100)** A mount target is an AWS resource that provides the NFS connection between the client and the scalable storage in EFS.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=107)** It's like the front door of EFS.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=110)** You'll make one when you create an EFS instance for the first time.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=113)** The mount target has a DNS A record that resolves to the IP of the backend file system.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=119)** This is the domain name that you'll use on the client, say an [[Amazon EC2|EC2]] instance, when you connect to EFS.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=126)** As is the case with other AWS resources, such as application load bouncers, AWS discourages users from connecting using the IP address directly, as it may change without warning.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=137)** On the other hand, the domain name of the mount target stays consistent and reliable.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=141)** You may have at most one mount target within an availability zone.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=145)** If you have multiple subnets, as is the case in this diagram, you'll choose one to house the mount target and any instance within any subnet of the AZ will be able to resolve it and use it.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=156)** Now, we have established two connections to the same EFS.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=160)** These two instances are sharing the backend storage.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=163)** If the first instance writes, the second one can read and vice versa.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=168)** One of the most useful features of the mount target is that security groups can be attached directly to it.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=175)** [[AWS Security]] groups are like portable firewalls that can be attached to different types of AWS resources.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=180)** With security groups on your mount points, you have maximum control over what instances in your account can mount this file system.
>
> **[3:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=189)** Finally, if you want instances in another availability zone to connect to EFS, you'll need another mount target in that AZ.
>
> **[3:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=196)** Here, with two mount targets, we have four instances sharing the EFS volume.
>
> **[3:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=201)** Imagine these are all workers in a distributed data processing job or that they're all members of an auto-scaling group that serves a web application.
>
> **[3:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=209)** These hosts can all share data seamlessly, with fairly low latency.
>
> **[3:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=214)** Speaking of which, users have some control over the performance of EFS.
>
> **[3:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=218)** To configure IOPS, you can initialize a file system in one of two modes, general purpose or max IOPS.
>
> **[3:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=226)** EFS documentation states that file systems in the max IO mode can scale to higher levels of aggregate throughput and operations per second, with a trade-off of a slightly higher latency for file operations.
>
> **[3:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=238)** As for throughput, by default, EFS throughput scales with the amount of data stored on the file system and employs a bursting model.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=247)** In general, AWS increases your EFS IOPS capacity along with the size of your instance.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=252)** This can lead to some undesirable situations.
>
> **[4:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=255)** If your volume is quite high but your overall dataset size is low, you may find that you're throttled at times using EFS.
>
> **[4:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=262)** If you know that you're going to need higher sustained throughput than what bursting provides, you can also use provisioned throughput to pay for a certain baseline of throughput performance.
>
> **[4:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=271)** It's all a trade off between cost and functionality.
>
> **[4:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=274)** To get the full picture of your options, be sure to consult Amazon's document page, Amazon EFS performance.
>
> **[4:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=281)** Even with those special configurations, AWS has made significant improvements to EFS since its launch.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=288)** First, they've seamlessly deployed numerous performance enhancements, including one that tripled throughput for reads and another that increased IOPS by nearly five X.
>
> **[4:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=297)** Not only that, they've introduced S3-style storage classes to give you even more control over the cost and behavior of your file system.
>
> **[5:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=305)** As shown here, there are multiple options for how to deploy.
>
> **[5:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=308)** For instance, EFS One Zone trades a bit of durability for significant performance and cost benefit.
>
> **[5:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=315)** Even in this mode, EFS data is still replicated in the background to give you better durability than running your own network storage.
>
> **[5:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=322)** It's just limited to one availability zone.
>
> **[5:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=325)** There are also infrequent access tiers and intelligent tiering, just like with S3.
>
> **[5:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=330)** Meanwhile, EFS takes backups that can be replicated out to other AZs, giving you plenty of options to tune your desired price and performance.
>
> **[5:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/elastic-file-system?u=76281980&t=338)** Now, let's get into the console and see how this works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Data Processing]] (2), [[Amazon EC2|Ec2]] (1), [[AWS Security]] (1)
> **Env Vars:** efs (25), aws (12), ebs (5), nfs (5), iops (4)
> **CLI Commands:** aws (12), az (2), make (1), find (1)
> **Analogies:** such as (2), it's like (1), imagine (1), picture (1), for instance (1)
> **Versions:** 4.0 (1), 4.1 (1)
> **Prerequisites:** you'll need (1), configure (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)

#### [EFS demo create EFS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=0)** - [Instructor] In this video, we'll keep using the two [[Amazon EC2|EC2]] instances from the previous EBS lessons to mount an Elastic File System.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=8)** We'll start by creating a security group that will allow both of these instances to talk to EFS.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=13)** There are multiple ways to approach using security groups for purposes like this, and you can learn more about them in my other course, "AWS Deployment, Provisioning, and Automation."
>
> **[0:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=23)** For this demo, we'll go with something simple, and create a group that allows NFS file system traffic from any host in the entire VPC, in which these instances reside.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=33)** So for that, we'll need to go find the VPC in this IP range.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=38)** Let's head into the EC2 section of the console.
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=42)** Click on Instances Running to see a list and there are two demo instances.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=49)** Click the checkbox next to one to see its details and go to the networking section.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=55)** Here you see the ID of the VPC where this server lives.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=60)** Click it and we'll go to the VPC section of AWS.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=66)** Okay, here we see our VPC and right here on the line, it's CIDR block.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=72)** A CIDR block represents a range IPs and this one, 172.31.0.0/16 represents all the IP addresses within this VPC.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=84)** Both of the EC2 instances we've created then are within this range.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=88)** So if we create a security group that allows NFS traffic from this range, they'll both work.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=93)** So I'm going to go ahead and copy this.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=97)** Close the tab that opened and that'll put us back in the EC2 section.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=103)** Over here on the side, I'm going to scroll down to security groups.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=108)** Here we'll click create security group.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=111)** We're going to call this something descriptive, which will be NFSFromDefaultVPC, and we need to give it a description.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=120)** So we'll say allow NFS traffic from anywhere within the VPC.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=129)** Security groups actually belong to a VPC so that's what this line here indicates.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=135)** As for inbound rules, let's click add rule, and we'll add our NFS rule.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=141)** In the dropdown, you can put in any port that you like but there are some presets here, including NFS.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=149)** Go ahead and click that and it will get preset with the port 2049.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=154)** As to the source, we can say custom, anywhere or my IP, we'll go with custom.
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=162)** And here we can paste in that CIDR block we just copied.
>
> **[2:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=167)** We can leave the description blank since it's pretty self-evident.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=171)** And there's the description up here.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=173)** Then can scroll on down.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=175)** Outbound rules can stay at their default and we'll click create security group.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=180)** Now, if we apply this security group to our EFS mount points, any instance that's in the VPC should be able to talk to it on port 2049.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=190)** All right, with that, let's go type EFS in the search bar and head to the Elastic File System part of the console.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=199)** Click Create file system.
>
> **[3:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=202)** There's an extremely simple interface you can click through to create an EFS for the first time, however, we won't get into the details.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=210)** We'll call this one EFSDemo.
>
> **[3:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=215)** It's in our default VPC and standard storage class works, but let's hit Customize.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=221)** Okay, let's see what kind of options we have.
>
> **[3:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=225)** Storage class is either standard or one zone, which would, of course, put us in just one AZ.
>
> **[3:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=231)** Automatic backups are enabled.
>
> **[3:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=232)** This uses the AWS Backup service, which we'll talk about later in the course.
>
> **[3:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=238)** There's lifecycle management set up by default.
>
> **[4:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=241)** As you recall, there are storage tiers in EFS similar to S3, and this rule says that after 30 days, an individual file will move out to infrequent access.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=253)** That means that you may encounter some additional first byte latency hitting that file but you'll have a much better balance of price and performance for this file system.
>
> **[4:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=263)** And you can change this however you like but we'll keep it at default.
>
> **[4:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=267)** Performance mode is General Purpose or Max I/O, which will have you pay a little more for increased throughput.
>
> **[4:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=274)** Throughput mode can also be bursting based on demand or set up in advance by the use of provisioned throughput.
>
> **[4:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=284)** Encryption we'll keep at its default.
>
> **[4:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=286)** No tags needed for this, and we'll click next.
>
> **[4:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=290)** Now, this is interesting.
>
> **[4:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=292)** Mounting targets are the endpoints that our EC2 instances will actually talk to when they want to mount this EFS.
>
> **[4:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=299)** So you can see that we've got one in basically every AZ that's part of this VPC.
>
> **[5:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=305)** That's nice and that's what we want but we do want to change their security groups.
>
> **[5:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=309)** They've all got this default security group and if you go and look that up, you'll find that it is the default VPC security group, which is actually pretty wide open.
>
> **[5:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=318)** What it does is it allows all traffic within the VPC from any resource that also bears this security group.
>
> **[5:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=327)** That is an interesting pattern.
>
> **[5:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=329)** I like the pattern of creating security groups that trust themselves.
>
> **[5:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=333)** That way you can sort of batch different resources with the security group that will allow it to get to things.
>
> **[5:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=338)** That's very nice.
>
> **[5:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=339)** But in this case, because it allows all ports, it's a little more expansive than I would like.
>
> **[5:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=343)** I'm going to go ahead and just X these all out and instead, we'll use the dropdown to choose the NFSFromDefaultVPC security Group.
>
> **[5:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=356)** You can see that appears in the background so you kind of have to click off of it to see the effect sometimes.
>
> **[6:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=362)** Choose that for all of these mount targets.
>
> **[6:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=368)** And now we'll click next.
>
> **[6:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=370)** On this screen, you can actually set up some file system policies that will apply to the entire EFS.
>
> **[6:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=376)** If you click through these check boxes, you can see a little bit of how these work.
>
> **[6:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=380)** You can prevent root access with this one, you can enforce read-only access with this one.
>
> **[6:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=386)** These are all editable, so you can go in there and make tweaks or you can write your own.
>
> **[6:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=390)** That's a little bit outside of the scope of what we want to do in this demo though.
>
> **[6:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=393)** So I'm going to uncheck this and just click next.
>
> **[6:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=396)** But beware that you can always in AWS click the learn more buttons that appear frequently to find out details.
>
> **[6:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=402)** Click next.
>
> **[6:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=405)** The next screen is a summary.
>
> **[6:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=408)** If everything looks good to you, go ahead and click create.
>
> **[6:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=412)** Our EFS file system is now in creating mode and in a few moments, it will become available as it has already, very fast.
>
> **[7:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-create-efs?u=76281980&t=420)** In the next video, we'll see how we can connect to it from our EC2 instances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (6)
> **Env Vars:** vpc (13), efs (8), ec2 (6), nfs (5), aws (4)
> **CLI Commands:** aws (4), find (3), az (2), make (1)
> **UI Navigation:** go to (2), dropdown (2), click on (1), checkbox (1), scroll down (1)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **Prerequisites:** set up (3)
> **Ports:** port 2049 (2)
> **Cross-References:** later in (1), in the next (1)

#### [EFS demo mount EFS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=0)** - [Instructor] Now that we've got our EFS demo created let's see what it can do by mounting to it from two different [[Amazon EC2|EC2]] instances.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=8)** In order to demonstrate this, I've kept around the two machines from the EBS part of this chapter, EBS demo 1, here with the white background and EBS demo 2.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=19)** You can see that I'm logged into two distinct machines by the differing IP addresses in the prompt.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=26)** Now, if we head back to the AWS console and click into EFS demo, you can see details of the file system and the orange attach button.
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=35)** Let's click that.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=37)** Our default is mount via DNS, which is what we want to do, but we have two choices underneath.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=43)** We can use the EFS Mount Helper or we can use the NFS client.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=48)** The first command is much shorter and easier to work with, so I'll want to copy that and use it over here in the terminal.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=55)** However, before I'm able to use it, there are a few steps.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=59)** First, we have to make sure that the helper package, Amazon EFS Utils is installed.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=65)** Type sudo yum install dash y to answer yes automatically to all prompts, Amazon EFS Utils.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=75)** This will install the special software built and maintained by Amazon that makes mounting EFS easier.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=82)** And we'll need a mount point.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=84)** So let's create one using sudo make directory slash EFS.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=90)** Now with those two steps done we should be able to paste our command and with a slight modification, make it work.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=97)** We want to slash here so that it's an absolute path instead of a relative path.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=103)** At this point, we should have our mount complete.
>
> **[1:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=106)** If you do disk free with DF dash h, you can see that we do have slash EFS mounted and it's mounted to something that's on the network.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=117)** If you look at the size available, that's eight exabytes.
>
> **[2:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=121)** And in fact, if you say DF with no extra arguments on it, you'll see that expanded.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=127)** Lots of bites available.
>
> **[2:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=130)** Of course, this is because EFS will expand as you need it.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=133)** It basically has infinite space.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=137)** All right, let's go over to our second terminal and do the same.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=141)** We'll say sudo yum install dash y Amazon EFS Utils, and we will create a folder for mounting.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=156)** Paste the same command with a slash modification there.
>
> **[2:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=161)** And now we've mounted it here too, so I'll go ahead and CD into it, slash EFS and look around.
>
> **[2:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=169)** Okay, nothing yet, but like with the fresh EBS volume we can see that everything is owned by Root Root.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=175)** So the first thing we want to do is change that to something we can work with.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=179)** Sudo chown EC2 user colon EC2 user dot to represent the current directory.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=188)** And for good measure a dash R for recursive.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=192)** Now if wen LS again, we can see that EC2 user is the owner.
>
> **[3:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=197)** Let's head back to the first terminal and also CD into slash EFS.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=203)** When we LS here, we can see that EC2 user is already the owner of this Mount point.
>
> **[3:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=208)** That's because they are the same network file system.
>
> **[3:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=212)** This one is pointed to the same one as this one.
>
> **[3:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=215)** Now, back here, if I create a file, I can save it, see that it has saved, go to the other terminal and also see it here.
>
> **[3:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/efs-demo-mount-efs?u=76281980&t=231)** So with that, you can see how EFS provides a network file system with essentially unlimited storage capacity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (5)
> **Env Vars:** efs (13), ec2 (5), ebs (4), aws (1), dns (1)
> **CLI Commands:** sudo (4), make (3), yum (2), cd (2), ls (2)
> **Tools:** terminal (4), aws console (1)
> **Prerequisites:** install (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [EBS and EFS teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=0)** - [Instructor] As always, it's important to clean up the resources that we created so we don't incur any unexpected charges from AWS.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=7)** Let's start with EFS.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=9)** I'll click into it under my recently visited services.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=13)** Here's our EFS demo.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=15)** I'll click the check mark next to it and go up to delete.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=20)** As you often have to do in AWS, you need to provide some sort of confirmation by typing or copying in a phrase or ID.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=28)** So we'll put in that ID and then hit confirm.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=33)** This will delete the EFS and the mountain targets.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=37)** Now we want to head to the [[Amazon EC2|EC2]] section and get rid of our instances.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=41)** I'll type EC2 in the search bar and go here.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=46)** Click instances running, and you have some options here.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=51)** Later on this course, I'm going to continue to use EBSDemo1 to show things like the file gateway, so you might want to keep it around.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=59)** I'll keep it around, but if you want to, you can delete both of these instances at once.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=63)** We'll just click EBSDemo2, go up to instance state, and choose terminate instance.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=74)** We're given a note down here about deleting EBS volumes.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=77)** Any ones which do not have delete on termination set to true will persist, and we have at least one volume like that, so we'll need to go to the volume section next.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=87)** For now, click terminate.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=90)** This will start our EBS demo machine terminating, and when it's done, we can head to the volume section and take care of those EBS instances.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=101)** You can see it has disappeared from our list because our instance state filter is on running.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=105)** If you uncheck that, you can see that it's in the process of shutting down.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=109)** After a few moments, the instance has transitioned to the terminated state, and we can head over here on the left to volumes.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=118)** Because I've kept around EBSDemo1, I still have this eight gigabyte volume that's in the in use state.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=126)** If you chose to delete both instances, that one would've gone away.
>
> **[2:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=130)** We had a third one, which was the root volume of EBSDemo2, which has disappeared.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=135)** What we have left is this 10 gigabyte volume, which is in the available state.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=140)** That's the EBS volume for which we chose do not delete on termination of the instance.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=145)** So it's sitting out here able to be attached to another instance if we like.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=149)** And we want to go ahead and just delete it.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=152)** So click the checkbox next to that 10 gigabyte volume, go up to actions, and choose delete volume.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=160)** Okay, with that gone, there are a few other things we still need to clean up.
>
> **[2:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=164)** Remember we created an AMI and a snapshot from one of these volumes.
>
> **[2:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=169)** We'll start with AMIs.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=173)** Check the check box next to this one.
>
> **[2:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=176)** Go to actions, and then the [[Microsoft Word|word]] is deregister AMI.
>
> **[3:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=183)** Go ahead and confirm and we'll head to snapshots.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=187)** Be aware that you need to delete AMIs before snapshots because there's a dependency there.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=192)** AMIs depend on the snapshot existing, so you can't delete the snapshot first.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=199)** Here under snapshots is the snap that we used to create that AMI, and we can go ahead and go up to actions and choose delete snapshot.
>
> **[3:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/ebs-and-efs-teardown?u=76281980&t=209)** With that, we've cleaned up everything that we created in the part of the course related to EBS and EFS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** ebs (5), efs (4), ami (3), aws (2), ec2 (2)
> **CLI Commands:** aws (2), snap (1)
> **UI Navigation:** go to (2), checkbox (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Amazon FSx](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=0)** - [Instructor] Amazon FSx is a multifaceted service where an AWS offers managed versions of several popular file systems.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=7)** NetApp ONTAP, OpenZFS, Luster, and [[Windows]] File Server.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=13)** Throughout AWS, managed refers to systems that you could set up for yourself but for which AWS abstracts away the complexity of configuring and administrating them on your own.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=24)** This makes it easy to stand up sophisticated infrastructure without needing a certification in, for instance Windows File Systems.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=32)** In fact, FSx is probably the best AWS option for those interested in network attached storage for Windows workloads.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=39)** Since this course otherwise focuses quite a bit on non Windows storage, I thought we'd take this example and see just what FSx can offer with a few simple clicks.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=49)** First of all, FSx for Windows behaves just like any Windows File Server file system.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=54)** Provisioning a SIFs file system and allowing applications and end users to connect via the SMB protocol.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=62)** File and folder permissions are handled by your own on-premises [[Active Directory]] or by AWS [[Microsoft]] Managed AD.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=69)** Which is another managed service offered by Amazon.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=74)** FSx for Windows File System is highly available which is often something that's challenging to implement from scratch.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=80)** Behind the scenes, Amazon distributes this file system over multiple availability zones, offering high uptime and automatic failover.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=88)** In addition, FSx can set up a [[Windows Server]] failover cluster.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=93)** Just the same multi-node HA setup you'd implement if you were doing this on your own.
>
> **[1:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=99)** FSx is cost efficient due to data deduplication and compression options.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=104)** Amazon claims turning on this feature for the Windows flavor can cut an FSx bill up to 60% for general purpose workloads.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=113)** Like all AWS managed services, patching is handled for you and can be scheduled to happen at a convenient time.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=120)** FSx also does automated daily backups and you can schedule even more with the AWS backup service, which we discuss later in this course.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=129)** Finally, FSx also integrates with other AWS services such as CloudWatch for logging.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=135)** In all this, you don't need to launch [[Amazon EC2|EC2]] instances, configure nodes, or manage a storage layer.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=141)** You just launch an FSx, point it to your active directory, and start connecting systems.
>
> **[2:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=146)** We won't be demoing this.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=148)** Setting up active directory is a bit outside the scope of this course.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/amazon-fsx?u=76281980&t=152)** But FSx is a great option if you're looking for Windows Native Storage, ZFS, ONTAP, or Lustre in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (9), [[Active Directory]] (3), [[Microsoft]] (1), [[Windows Server]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** aws (8), ontap (2), smb (1), ec2 (1), zfs (1)
> **CLI Commands:** aws (8), node (1)
> **Definitions:** is a  (3), refers to (1)
> **Prerequisites:** set up (2), setup (1), configure (1)
> **Analogies:** for instance (1), just like (1), such as (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)


### 4. Database Services

[↑ Back to Table of Contents](#table-of-contents)

#### [RDS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=0)** - [Instructor] AWS's Relational Database Service or RDS can take a lot of work off your hands when it comes to [[Relational Databases]].
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=8)** Without RDS, deploying a database to AWS can be a rather involved process.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=12)** You'll provision an [[Amazon EC2|EC2]] instance, attach storage, say using one of the services we've discussed like EBS, EFS, or FSX, and then you'll have to install and configure the database instance yourself.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=25)** Patching becomes an ongoing concern both for the database and the OS it's installed on.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=30)** And if you want to read replica or standby for failover, well your database platform may provide tools but you're on your own to implement them.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=38)** Good news, RDS manages all of this for you.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=43)** With RDS, you can select one of six different relational database platforms.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=47)** Oracle, [[MySQL]], [[PostgreSQL]], [[Microsoft SQL Server|SQL Server]], MariaDB and Amazon Aurora.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=56)** Let's take a brief aside to talk about Aurora.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=59)** Amazon Aurora is AWS's proprietary database engine.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=63)** It's compatible with MySQL and PostgreSQL and meant to outperform traditional expensive database engines.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=70)** AWS advertises that Aurora provides five times the throughput of MySQL and they're positioning Aurora to compete with the likes of Oracle and SQL Server.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=80)** Aurora is also highly available and durable, automatically replicating itself across three availability zones.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=87)** It's even available in a serverless flavor that auto scales in response to use rather than needing to be pre-provisioned.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=93)** Aurora's compatibility with existing engines means that it's an attractive migration target for organizations moving relational databases to the cloud.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=103)** Back to RDS in general, when you run a database on RDS, AWS handles the compute for you.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=109)** You never need to remote into an instance to manage your database processes.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=113)** Of course, that doesn't mean that RDS doesn't have compute resources.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=117)** Your database needs CPU and RAM to run on.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=120)** With RDS, the details of the underlying compute resources are abstracted away.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=124)** Under the covers is this PostgreSQL instance running on [[Ubuntu]], Red Hat or most likely Amazon [[Linux]]?
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=131)** Who cares?
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=131)** As long as it responds on port 5432 when we want connect, we don't need to know.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=137)** But we do need some control over the provisioning of the compute resource.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=141)** So in a similar way to EC2, RDS provides us with DB instance classes.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=148)** The instance classes of RDS mirror the naming conventions of those for EC2.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=152)** Sample types include standard, memory optimized, and burst capable database instance types.
>
> **[2:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=158)** Platform support varies.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=160)** Some database types only support some instance classes.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=165)** We can convert a database instance to another instance class whenever we like, but be aware that this will incur a reboot of the database.
>
> **[2:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=172)** It's possible to reduce the outage time in a situation like this or perhaps more critically in the case of an unplanned outage.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=180)** When you select multi-AZ deployment RDS will automatically synchronously replicate data to a standby instance of your database in a neighboring availability zone.
>
> **[3:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=191)** Users continue to read from and write to only the primary instance, but if that one goes down, AWS will update the DNS record associated with your RDS instance and it'll resolve to the quite fresh hot standby.
>
> **[3:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=204)** Some applications will still need to reconnect but the result will be much less problematic than a full blown outage.
>
> **[3:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=211)** AWS claims that this failover usually occurs in under two minutes.
>
> **[3:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=217)** AWS uses a variety of methods to achieve this replication.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=221)** It varies based on the DB platform and its available tools.
>
> **[3:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=225)** Just keep in mind that no matter the platform, synchronous replication means that every time you write you must wait for that write to replicate to the standby.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=233)** If your use case can sustain the additional write latency, multi-AZ is a very attractive failover option.
>
> **[4:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=241)** You can fully stop database instances giving you the same flexibility to control uptime and cost that we enjoy with EC2.
>
> **[4:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=248)** Just be aware that you can only do this for seven days at a stretch before AWS will restart the instance automatically to ensure that it does not fall behind on required maintenance and patching.
>
> **[4:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=259)** Another nice feature of RDS is the ability to create read replicas.
>
> **[4:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=264)** Read replicas are copies of your source database that are kept up to date as changes are made in the source.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=270)** RDS read replicas are kept in sync using the existing asynchronous data transfer options available in MySQL, MariaDB and PostgresSQL meaning those are the only DB platforms currently supported.
>
> **[4:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=283)** That transfer is encrypted even when the replica is in another region.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=288)** And since I mentioned it, yes, your replica can be in another region giving you great high availability on the chance that an entire region goes down.
>
> **[4:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=297)** So why create a read replica?
>
> **[5:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=300)** Well, one big reason is to reduce load on transactional systems.
>
> **[5:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=304)** You can point reporting tasks or other query only workloads to the replica, ensuring your primary system remains responsive.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=311)** You can create unique instances on the replica if you're using MySQL to enhance its performance without impact in the primary.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=319)** Read replicas can be promoted to master manually in a scenario where the primary fails.
>
> **[5:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=324)** They can be cross region, giving you additional disaster recovery assurances.
>
> **[5:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=329)** And finally, your read replicate can use a different instance type than your primary, giving you more control over your cost performance ratio.
>
> **[5:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=337)** One last note about replicas.
>
> **[5:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=339)** MySQL can actually be replicated to Aurora since they're compatible.
>
> **[5:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=342)** So even if you don't start with Aurora, you have an easy way to take advantage of its many performance and storage benefits.
>
> **[5:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=350)** Back to management.
>
> **[5:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=351)** Don't forget about patching.
>
> **[5:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=353)** Both the underlying OS and the database engine need regular updates, some of which may be critical for security.
>
> **[5:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=358)** RDS manages that too.
>
> **[6:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=361)** We can choose a maintenance window, say, one hour every Sunday at midnight and RDS can automatically apply any OS patches and minor database level updates that are available for our chosen platform.
>
> **[6:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=372)** No downtime unless the update does require a reboot.
>
> **[6:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=376)** OS patches can be scheduled, taken immediately, or deferred, however, AWS will mark some OS updates as required and will not let them be deferred indefinitely.
>
> **[6:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=386)** As for patching the database engine, well, if this capability gives you pause, fear not.
>
> **[6:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=391)** AWS has considered that not all database updates are backward compatible or safe for your data.
>
> **[6:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=397)** So auto patching is entirely opt-in, does not extend to "major" releases and varies based on the platform.
>
> **[6:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=406)** Major updates to the DB engine you'll need to initiate yourself.
>
> **[6:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=410)** You'll want to create snapshots of your data and handle any data conversion that needs to take place.
>
> **[6:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=415)** Still, auto patching for minor updates can be a great time saver.
>
> **[7:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=420)** It should come as no surprise that RDS gives you options as to the underlying storage of your database.
>
> **[7:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=426)** Much like instance class the storage option can be changed with minimal downtime.
>
> **[7:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=431)** Magnetic is the cheapest and slowest option only available for backward compatibility purposes.
>
> **[7:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=438)** General purpose, scales performance with storage size.
>
> **[7:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=441)** Provisioned IOPS lets you pay more to specify the performance and size you want.
>
> **[7:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=447)** Finally, let's talk backup.
>
> **[7:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=449)** In the same way that you can declare a maintenance window for RDS, you can declare a backup window.
>
> **[7:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=454)** By default, RDS creates and keeps seven days worth of daily backups for you.
>
> **[7:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=459)** But that can go up to 32.
>
> **[7:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=462)** Even better, RDS can restore not only any of those daily backups but by replaying transaction logs, it can restore to any point in time within the backup window down to the minute.
>
> **[7:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=474)** You should know that anytime you restore an RDS instance you're not restoring in place, RDS will spawn a new RDS instance using the backup point that you request.
>
> **[8:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=482)** So if you need to restore some data into your hot copy you'll still need to either manually restore data or reconfigure apps to point to the restored database.
>
> **[8:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds?u=76281980&t=491)** Now let's head into the console and try our hand at creating an RDS instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (6), [[Amazon EC2|Ec2]] (4), [[PostgreSQL]] (3), [[Relational Databases]] (2), [[Microsoft SQL Server|Sql server]] (2)
> **Env Vars:** rds (24), aws (11), ec2 (4), sql (2), ebs (1)
> **CLI Commands:** aws (11), mysql (6), az (2)
> **Definitions:** means that (2), is a  (1)
> **Warnings:** be aware (2), keep in mind (1)
> **Prerequisites:** install (1), configure (1), you'll need (1)
> **Ports:** port 5432 (1)
> **Best Practices:** don't forget (1)

#### [Create a MySQL RDS instance](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=0)** - [Instructor] Let's create a [[MySQL]] database using RDS.
>
> **[0:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=3)** But before we do that, I want to visit the [[Amazon EC2|EC2]] section of the console so we can create a security group that will allow us to connect to the database on the appropriate ports.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=13)** Let's head into EC2.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=17)** We're going to go down the side here and choose security groups.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=22)** Here, click create security group.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=26)** We'll call this rule MySQL access from world.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=34)** And go down to inbound rules and click add rule.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=38)** As with most common ports, there is an entry in the dropdown for MySQL.
>
> **[0:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=44)** Please start typing, we'll see it.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=46)** MySQL/Aurora on port 3306.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=51)** The source can be custom, anywhere or my IP.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=56)** What we want to do is allow anywhere on IPV4.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=63)** Now, of course, you wouldn't want to do this in production.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=65)** In most cases, what I would prefer is to have a database B in a private subnet accessible by other resources within AWS.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=73)** But for purposes of this demo, we'll make it open to the world and something that we can access from a laptop.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=80)** Click create security group.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=82)** Oh, we do have to give it a description.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=84)** So we'll say, allow my [[SQL]] traffic from anywhere.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=92)** Now scroll down and click create security group.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=95)** Okay, so that's ready for us to use in a moment.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=98)** Now we'll head to the RDS section of AWS.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=101)** Come to the search bar and type RDS.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=104)** You'll see this, the relational database service and go ahead and click it.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=112)** Now we can click create database.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=116)** All right, on this screen, we have a few options.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=119)** We're going to go with the standard create rather than the easy so we can see some of the details of what we're choosing.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=126)** We'll click MySQL.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=129)** And you can see that we're set with MySQL Community edition and we have a number of version options down below.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=137)** In this case, I'm going to select version 8.0.23 which is a few minor points behind because I've found in setting up this demo that this is the latest one that is compatible with Aurora.
>
> **[2:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=150)** Later on, we're going to create an Aurora read replica from this database, and so we need to select that version.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=157)** It's possible this may change by the time you're viewing this video.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=160)** You can always take a look at the AWS documents to be sure.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=163)** There's also this link here that always shows up which is the known issues or limitations and if you click that, you can see some of the specific details of things that do and don't work on this version of a database running on RDS.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=177)** It's definitely worth looking at because each database engine has some unique and particular behavior that differs when you're running it on RDS.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=185)** So some of this is kind of esoteric but it may have a real impact on your workload so be sure to check it out.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=192)** All right, so we're scrolling down.
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=194)** For templates, we've got production, dev/test or free tier.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=199)** You can always customize this to your liking but if you choose free tier it's going to make some selections down here for you.
>
> **[3:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=205)** You can see we've got options to do multi-AZ deployment or a single DB instance.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=210)** Of course, a single DB would have no redundancy and no cross AZ capabilities, but for purposes of this demo that'll be all that we need.
>
> **[3:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=219)** So we're going to click free tier, and you'll see that down below chosen for you is single DB instance.
>
> **[3:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=226)** So we'll scroll on down for the database identifier which will become part of the endpoint URL.
>
> **[3:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=234)** We'll call this MySQL RDS demo.
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=239)** Now we need to create a login and I'll call this MySQL_RDS_user.
>
> **[4:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=246)** You can have it auto generate password or you can type one in that you have to confirm here.
>
> **[4:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=251)** Whatever you do, just make sure that you have the password and can use it in future steps of this video.
>
> **[4:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=259)** So I'm going to type one in here and keep going.
>
> **[4:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=267)** The instance class can stay at DB.t3.micro, that's fine.
>
> **[4:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=272)** Small instance size is all we need for this.
>
> **[4:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=274)** Storage can also stay at default.
>
> **[4:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=279)** As for connectivity, scroll this into view a little bit and make sure that public access is set to yes.
>
> **[4:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=285)** Again, that's not really how we would set up a production database, but that's our purpose for this demo to be able to access it from your own laptop.
>
> **[4:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=296)** And to facilitate that, here we select VPC security group in this drop down and look for MySQL access from world.
>
> **[5:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=305)** As with many of these security dropdowns in AWS it actually did work behind the dropdown, so just click off that and you can see that it has been selected and you can X out the default security group.
>
> **[5:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=317)** All right, keep scrolling down.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=319)** Password authentication option is fine.
>
> **[5:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=322)** We don't need to worry about enhanced monitoring but we do want to expand the additional configuration just for this first box here where I want to put in a name for the database, we'll call it very simply, my database.
>
> **[5:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=337)** That's not to be confused with the DB identifier that we gave up above.
>
> **[5:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=341)** This is actually the name of the database that will get created inside the MySQL we're about to build.
>
> **[5:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=348)** Parameter groups are interesting and we'll look more at those later.
>
> **[5:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=351)** There are all kinds of key value pairs that go into a database engine that tell it how to work, change little settings and things.
>
> **[5:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=358)** Those are termed parameter groups in RDS and you can take default ones, you can copy them, you can make changes yourself so you can have custom parameter groups.
>
> **[6:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=368)** Later on we'll see what it takes to change one of those, but for now we'll leave everything else at the default.
>
> **[6:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=372)** Scroll all the way down and click create database.
>
> **[6:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-mysql-rds-instance?u=76281980&t=378)** All right, now that this database is being created let's look at how we can connect to it using MySQL Workbench.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (10), [[Amazon EC2|Ec2]] (2), [[SQL]] (1)
> **CLI Commands:** mysql (10), make (5), aws (4), az (2)
> **Env Vars:** rds (7), aws (4), ec2 (2), ipv4 (1), sql (1)
> **UI Navigation:** dropdown (2), scroll down (1)
> **Versions:** version 8 (1), 0.23 (1)
> **Definitions:** is an  (1), is a  (1)
> **Ports:** port 3306 (1)
> **Prerequisites:** set up (1)

#### [Connect with MySQL Workbench](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=0)** - [Instructor] While the RDS instance is being created we can take a moment to go download [[MySQL]] Workbench, the client that we'll use to connect to it.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=8)** I've searched for that phrase, MySQL Workbench and this was the first hit here at [mysql.com](https://mysql.com) and we can click download now.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=17)** On the next page you'll be asked to select your operating system and you've got a download button.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=22)** From here you need to log in or create and then log in with an Oracle web account.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=28)** Since Oracle purchased MySQL, this is now a step necessary to download this software.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=34)** I've already done this so I'll leave that for you to pause and continue.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=39)** But you can see that I've got MySQL Workbench installed here and this is the first screen you see when you open it.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=46)** All you need to do is click MySQL Connections and the little plus next to that and we'll have an interface that allows us to enter in the details of this connection.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=55)** Let's head back to the browser.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=57)** I'll close this tab and I'm back here at AWS.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=60)** Our RDS instance is in the available state so let's click the name of it to see details of what got created.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=68)** All right, right here under connectivity and security, the default tab, we have the endpoint, which we can copy.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=74)** That URL is going to go into MySQL Workbench here under host name, so we can delete that IP address and paste in that URL.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=84)** Port will stay 3306.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=86)** Username will be what we created earlier, mysql_rds_user to put in your password, at least for the Mac, I'll click store in keychain and then type in the password that I created earlier.
>
> **[1:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=102)** Click okay.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=103)** Default schema should be my_database and then we'll need to give the connection a name.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=110)** We'll call this MySQL RDS Demo, before clicking okay, click test Connection to make sure that you don't have any typos or anything like that.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=120)** And now we see that we do have a successful connection made with MySQL.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=123)** So this tells us that not only was all of our data entry here correct but also that our security group and our network settings on the RDS instance in AWS are all correct.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=134)** We have a clear network path from our home machine to the RDS database.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=139)** So click okay and now we have a box here representing the connection, we can click on that and it will establish a connection to the database.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=149)** Up here if you click the schemas tab, you'll see that we are in the my_database database, no tables yet which is to be expected, it's a brand new empty database.
>
> **[2:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=158)** So we need to give it some data.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=160)** To do that, click little folder here and navigate to chapter four in the exercise files we're going to open this file called employee_data.[[SQL]], so double click on that.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=173)** Let's take a look at what we've got here.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=175)** At the top of the file, you'll see drop table statements.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=179)** If you run these, it'll allow you to clean up everything that's in the script and run everything from scratch.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=184)** Then we've got create table statements for departments, employees, projects, and project team members.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=190)** So we're setting up a basic workplace schema here.
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=194)** Further down, we've got insert statements that put values into those tables, and on line 76, a commit.
>
> **[3:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=200)** After that, we've got a couple of SQL queries that will let us confirm the data that we've put into the tables.
>
> **[3:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=206)** So let's scroll all the way up to the first create table statement and highlight all the way down through the commit.
>
> **[3:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=214)** Click the lightning bolt here and everything will get created as you can see down here below.
>
> **[3:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=219)** And then we can highlight this query here to confirm that we've entered data.
>
> **[3:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=226)** All right, there you can see the members of our sales team and with that, we have now created an RDS database, logged into it with MySQL Workbench, and created some sample data.
>
> **[3:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-with-mysql-workbench?u=76281980&t=237)** In the next video, we'll look it how to create a read replica using Aurora.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (10), [[SQL]] (2)
> **CLI Commands:** mysql (10), aws (2), make (1)
> **Env Vars:** rds (6), aws (2), url (2), sql (1)
> **Code Identifiers:** my_database (2), mysql_rds_user (1), employee_data (1)
> **UI Navigation:** click on (2), navigate to (1)
> **File Paths:** employee_data.sql (1)
> **URLs:** [mysql.com](https://mysql.com) (1)
> **Cross-References:** in the next (1)

#### [Create an Aurora read replica](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=0)** - [Instructor] I'm here at the RDS Console looking at the details of the [[MySQL]]-rds-demo database we just created.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=6)** What I'd like to do in this video is create a read replica of this MySQL instance using the Amazon Aurora database type.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=14)** Go up to Actions, and you'll see Create read replica, and below that, Create Aurora read replica.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=20)** Go ahead and click it.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=21)** As this screen loads, we'll start to see some options come up.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=25)** And we'll choose the latest Aurora version that's compatible with the version of MySQL that we selected.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=31)** So if you click the dropdown, you'll see references to various MySQL versions, including the one we chose earlier, 8.0.23.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=39)** So we can select the highest compatible version, which is this, 3.02.1, and then look at DB instance class.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=48)** You'll find with Aurora that we don't actually have the option to choose some of the smallest classes that we've used before.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=55)** You won't see smalls or micros on here, but you can choose this db.t4g.medium as one of the smaller cheaper versions.
>
> **[1:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=64)** If you're following along with this demo, this instance will not live for very long, so don't worry too much about charges.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=70)** All right, so moving on, we do not need multi-AZ deployment.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=76)** For our database instance identifier, we'll call it mysql, maybe aurora read replica.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=86)** We'll go down to the next section, [[Network Security]], and make sure that publicly accessible is selected.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=93)** As for availability zone, it doesn't really matter.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=96)** You can leave that at the default.
>
> **[1:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=99)** We do need to choose an existing VPC security group so that we can access this instance from outside.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=104)** So click that and choose the MySQLAccessFromWorld.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=109)** Remember that Aurora and MySQL both use the same port, 3306, so that security group will work for both.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=116)** You can also X out the default VPC security group, and then move on from there.
>
> **[2:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=122)** Look over the remaining options, you see the port, as we just mentioned.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=125)** You see the parameter groups are at their defaults.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=128)** Everything else can stay where it is.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=131)** Scroll all the way down and choose Create read replica.
>
> **[2:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=136)** Now, this step can take a while to complete.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=139)** Not only are we standing up a new RDS instance with the Aurora database, but AWS also has to set up the replication between the two [[Databases]].
>
> **[2:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=147)** So we'll wait for this to be done, and then we'll see how the replication works.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=152)** To monitor what's going on, click Databases.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=156)** And we'll see that we've got an Aurora cluster in the creating state.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=160)** So what about this cluster?
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=162)** Well, what you'll see in a moment is that we actually end up with two Aurora instances.
>
> **[2:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=167)** In past versions of this course, creating an Aurora read replica resulted in just one additional instance.
>
> **[2:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=174)** Now the minimum standard deployment of Aurora creates a cluster of two instances: a read/write main instance and its own read replica used for failover.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=184)** So you might wonder, why don't we just start with an Aurora cluster instead of creating a MySQL RDS where we then have to create a read replica and somehow implement failover for that?
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=194)** And I would say that's the point.
>
> **[3:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=196)** That is what Amazon is trying to do.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=198)** With Aurora, they're providing a very attractive value proposition to people who want that kind of managed resilience in a MySQL or [[PostgreSQL|Postgres]]-compatible database.
>
> **[3:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=208)** So that would work to just start with Aurora and use that for any MySQL purposes that you have in the future.
>
> **[3:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=217)** If you click the refresh button here, you can kind of watch things creating.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=221)** And we'll come back in a minute to see both of these databases available.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=227)** Okay, now the read replica is available.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=229)** And we'll want to see how the replication is working between our original MySQL and this Aurora instance.
>
> **[3:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=235)** But before we connect the two instances, I want to point out what's going on here.
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=239)** For Aurora, we see two records here on screen: one designated replica cluster, and the other called writer instance.
>
> **[4:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=248)** To illustrate why, let's take a quick look at AWS docs about Aurora.
>
> **[4:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=254)** You see here a depiction of a typical Aurora cluster.
>
> **[4:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=258)** And the first thing to understand is that every Aurora database you provision, no matter what size, is called a cluster.
>
> **[4:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=265)** Part of the reason why, as this image shows, is that Aurora separates compute from storage.
>
> **[4:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=272)** There's always a common storage layer, shown here in gray, that's spread across multiple availability zones That exists no matter what.
>
> **[4:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=279)** And there's always at least one instance, which is the compute you connect to.
>
> **[4:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=284)** While we chose single-AZ deployment, the most common Aurora installation involves multiple instances spread across multiple AZs.
>
> **[4:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=293)** In that case, you'd have one endpoint like this, that is the read/write endpoint, and any additional endpoint would be an Aurora read replica.
>
> **[5:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=303)** In our case, our cluster is a single AZ, meaning we just have the one read/write endpoint.
>
> **[5:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=309)** Our cluster is basically this section on the left here and the gray bar showing the storage spread across multiple AZs.
>
> **[5:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=317)** Nevertheless, AWS refers to the cluster and even shows URLs for both writer and reader instances separately.
>
> **[5:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=325)** The trick is that in our case, these instances are one and the same.
>
> **[5:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=329)** Our writer instance and our reader instance are both wrapped up in that one instance that we have provisioned.
>
> **[5:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=336)** If you take a look over here, you can see that.
>
> **[5:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=339)** We've got a link for the replica cluster and for the writer instance.
>
> **[5:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=342)** But if we click in to the cluster, we can get a little bit of an idea of what's going on here.
>
> **[5:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=348)** It shows two endpoints, but you can see here the size of this cluster is listed as one instance.
>
> **[5:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=355)** This is where things are a little bit confusing if you have chosen not to do multi AZ.
>
> **[5:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=359)** They refer to a writer instance and a reader instance as if they're separate things.
>
> **[6:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=363)** But in fact, if you look at the domain names that are provided and resolve them with something like nslookup, you'll find they go to the exact same IP address.
>
> **[6:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=372)** So just as we're told here, the size of this cluster is just one instance.
>
> **[6:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=377)** So now that we've cleared that up, let's connect to this Aurora instance and compare it with our MySQL to see how the replication's working.
>
> **[6:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=385)** Let's go back in and actually grab one of those domain names using the copy button here, and then we'll head back to MySQL Workbench.
>
> **[6:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=394)** I'm here on the home screen, and I'll click the plus button to add a new connection.
>
> **[6:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=400)** We'll call it Aurora Replica, and we'll paste over the IP address.
>
> **[6:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=405)** It's my host name with that domain name.
>
> **[6:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=408)** The username will be just the same as our original MySQL instance because, of course, this is meant to be a perfect replica.
>
> **[6:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=415)** mysql_rds_user.
>
> **[6:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=418)** For the password, that will again be the same.
>
> **[7:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=423)** Click OK.
>
> **[7:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=424)** And under default schema, we'll say my_database.
>
> **[7:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=429)** Click Test Connection and make sure you've typed everything correctly.
>
> **[7:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=431)** And if that works, click OK, and then OK again.
>
> **[7:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=435)** Double click Aurora Replica to open it up.
>
> **[7:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=438)** All right, so now we've got two tabs here in MySQL Workbench, the Aurora replica here, and the original MySQL RDS database here.
>
> **[7:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=447)** We'll click into that first tab, and then highlight the sales query to see our initial state.
>
> **[7:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=453)** I'll hit the lightning bolt on that, and we can see the three rows that started out in this database.
>
> **[7:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=458)** And we can copy this query, then head back to the Aurora replica and paste it in.
>
> **[7:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=465)** Hit the lightning bolt again, and you can see the three rows are here.
>
> **[7:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=469)** So the initial migration has been successful.
>
> **[7:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=472)** But of course, we want to see an ongoing replication.
>
> **[7:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=475)** Let's head back to MySQL, and you can see I've typed in a new insert statement here.
>
> **[8:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=480)** Insert into employees values 99, which is a high ID number that won't conflict with anything else, my first and last name, and the number one for the sales department.
>
> **[8:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=490)** So that should show up in the same query we've been using.
>
> **[8:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=493)** Highlight these two rows here, the insert and the commit, hit the lightning bolt.
>
> **[8:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=498)** And before we go anywhere, let's check the sales query here in the source database, just to confirm that worked.
>
> **[8:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=504)** So we now have four rows here in the source, and we'll head over to Aurora to see the replication.
>
> **[8:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=509)** Click the lightning bolt again.
>
> **[8:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=511)** So there you have it, four rows and practically instantaneous replication from MySQL to Aurora.
>
> **[8:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=517)** Now, let's head back to the AWS Console for a moment.
>
> **[8:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=520)** As I said, a read replica can be used for a variety of purposes.
>
> **[8:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=524)** It makes a great endpoint for reporting or anything else that really only needs a read-only database.
>
> **[8:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=530)** The other thing that we can do in a disaster scenario is back here on the the Databases page, we can highlight the cluster, choose Actions, and go to Promote.
>
> **[9:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=542)** What this will do is it will make the read replica become a full-fledged RDS instance of its own.
>
> **[9:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=548)** At that point, it will become a normal standalone RDS database that you could redirect traffic to.
>
> **[9:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=553)** It'll have all your data that was replicated before the promotion.
>
> **[9:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=557)** In fact, if you watch the tear-down video at the end of this chapter, and you should to make sure that you don't incur any unexpected charges, you'll find that this promotion step is necessary before we can fully delete the Aurora cluster.
>
> **[9:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-aurora-read-replica?u=76281980&t=570)** Before we get to that, though, let's take a look at backup and restore in RDS for those mistakes that won't be helped by a read replica.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (17), [[Databases]] (4), [[Network Security]] (1), [[PostgreSQL|Postgres]] (1)
> **CLI Commands:** mysql (17), az (4), make (4), aws (4), find (3)
> **Env Vars:** rds (7), aws (4), vpc (2)
> **UI Navigation:** go to (2), dropdown (1), select the (1)
> **Definitions:** is a  (2), is called (1), refers to (1)
> **Code Identifiers:** mysql_rds_user (1), my_database (1)
> **Versions:** 8.0.23 (1), 3.02.1 (1)
> **Tools:** aws console (1)

#### [RDS backup and recovery](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=0)** - [Instructor] Let's imagine that I've just made a terrible mistake and deleted some important data out of the source [[MySQL]] database.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=7)** We have the read replica, but that stays in sync with the source.
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=10)** So it's really not that much help if I've deleted something important.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=14)** What am I going to do?
>
> **[0:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=16)** Well, remember that when we set up an RDS database, it defaults to keep seven days worth of snapshots taken nightly.
>
> **[0:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=23)** So that means I can at least get back to last night.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=25)** But often, that's not good enough.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=27)** We need something a little more recent.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=29)** Fortunately, RDS has our back here.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=32)** If we have the mysql-rds-demo highlighted and go to Actions, you'll see Restore to point in time.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=39)** This is a really helpful feature that has genuinely saved me in real life a few times.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=45)** In a moment, you'll see that we have some options.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=47)** Let's start with Restore time.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=49)** The first option is Latest restorable time which is just a few moments ago.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=53)** And we can also click here and we appear to be able to put in just about any time that we want.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=58)** How does RDS let us do this?
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=60)** Well, we have the nightly backups but to get something in between, RDS looks at the actual change logs of the database engine.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=68)** These are the logs that MySQL keeps as you update data all through the day.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=73)** So it goes up to the most recent backup that we have, say last night, and replays the changes from that log through the day up to the point in time that you're specifying.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=82)** So it can get really specific on a restore time.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=86)** If we leave this at latest restorable time and scroll down, you see the [[Representational State Transfer (REST)|rest]] of what we have to fill in here is just to say, what's our new instance going to be?
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=94)** Because remember, RDS doesn't do restorations in place.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=98)** It creates a new instance for you to log into.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=101)** So you can see here, we need to give a database identifier.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=104)** This is called mysql-rds-demo right now, so we can just paste that and append something like, restored so we know what's what.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=114)** And then we can pretty much leave everything else as is.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=117)** I mean, we can change instance type, we can change other configuration options on this database but we really just want a replica that goes back to that point in time.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=126)** So we can go all the way to the bottom and choose Restore to point in time.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=131)** Now, RDS is creating a new instance based on my previous one at that exact point that I specified.
>
> **[2:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=138)** When I need to get the data back, all that I'm going to need to do is create a new connection using MySQL Workbench to go to this new database and extract the important data that I accidentally deleted.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-backup-and-recovery?u=76281980&t=148)** I can either from there, manually restore it to the original database, or if I like, I can take all my applications that are connected to the source and reroute them to this new restored database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (5), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** rds (6)
> **CLI Commands:** mysql (5)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [RDS teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=0)** - [Instructor] As usual, it's important to make sure that we clean up the resources we no longer need so that we won't be charged for them.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=6)** All right, the first thing I'm going to do is go to the [[MySQL]] RDS restored, go up to Actions, and choose Delete.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=15)** We do not want to retain automated backups, so we'll uncheck this and we'll check the next thing, which is an acknowledgement that this is going to delete everything and no backups will be available.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=27)** Type delete me to confirm that and click Delete.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=31)** As for MySQL RDS demo, you can do the exact same steps to that database, or if you want to continue to follow along with this course, keep it around, we'll use it later in the course.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=41)** For the Aurora cluster, what we need to do is click on the row for the replica cluster, and before we can delete it, we need to go to Actions and choose Promote.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=51)** This will turn it into its own full-fledged standalone database instead of being a read replica of the MySQL demo.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=57)** Click Promote Read Replica.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=60)** This will take a moment to complete, and when it does, you'll see that this no longer says replica cluster.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=68)** Now it's done and it says regional cluster, which means that we can delete this.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=73)** Instead of clicking on the cluster, we'll click on the actual instance, the second row, go to actions, and then delete.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=82)** Uncheck create final snapshot, acknowledge that we don't care, and type Delete Me.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=89)** Then click Delete, and now the cluster will be on its way to deleting.
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=94)** Before we finish, the last thing you want to check is go over here and expand, and choose Snapshots.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=100)** I didn't keep these instances running long enough for a snapshot to have taken place overnight.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/rds-teardown?u=76281980&t=105)** However, if you've been following along over the course of a couple days, you may have, so come in here and check any snapshots that exist, go up to actions and delete those as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (3)
> **CLI Commands:** mysql (3), make (1)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** rds (2)
> **Definitions:** is an  (1), means that (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### [DynamoDB](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=1)** - [Instructor] DynamoDB is AWS's highly available, scalable [[NoSQL]] database.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=6)** You might compare it to other NoSQL [[Databases]] like [[MongoDB]].
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=9)** The main advantage of Dynamo is that like RDS for [[Relational Databases]], Dynamo is a fully managed service.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=17)** It scales performance on demand, meaning that you can provision and pay for just the level of read-and-write performance you desire.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=26)** It's also a distributed storage system, meaning its durability and availability is very high.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=32)** Like S3, it can publish event streams for all its activity.
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=35)** And finally, it's stored on SSD, which gives it very low latency.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=41)** The primary artifact of DynamoDB is the table.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=45)** You can almost think of this as equivalent to a bucket in S3, it's not like a table in a relational database, it's a place to store objects.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=53)** You can have as many of these tables as you want.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=57)** And within a table, you'll create records which AWS calls items.
>
> **[1:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=61)** Items cannot exceed 400 K in size.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=66)** Items can be one of a few data types.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=69)** Scalars are single-value types such as strings or booleans.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=73)** They are multi values, they're like arrays or sets.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=77)** And documents are complex types that combine the above two and can involve in [[Data Structures]].
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=84)** Using these types, what you'll end up with is something that is basically [[JSON]].
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=89)** In this example, first and last are scalar types of string.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=93)** pilot_of is a string set, more commonly called an array of strings.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=98)** Finally, the whole thing is a map object, a conglomeration of the other data types into a structure that contains many key-value pairs as well as substructures like the nested object father.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=110)** This kind of data model means that Dynamo is an ideal choice for non-relational data.
>
> **[1:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=115)** If you need to frequently join records, you may want to look at putting your relational database on RDS or on [[Amazon EC2|EC2]], but if your data load is high volume, non-relational, and under 400 K, Dynamo is going to work really well.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=128)** Now let's discuss primary keys.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=131)** Although NoSQL databases are schemaless, each Dynamo table you create should contain the same kind of data.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=139)** The exact fields of the items might vary, some fields might be optional, for instance, who are just not present on some records, but there needs to be some consistency as to what's inside.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=149)** So given that when you create a DynamoDB table, the first thing you'll need to do other than give it a name is select a primary key.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=157)** Think about the format of the data that you want to put in.
>
> **[2:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=161)** In the previous example, we had first, last, and pilot of all examples of keys.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=165)** For the primary key, we want to select one that will uniquely identify a record, meaning it should be present for all items.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=173)** They should be diverse and evenly distributed enough within the data to be good for physically partitioning the data.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=180)** And they should serve as effective keys for actually querying the data, which we'll get into.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=184)** In some cases, you might have an actual ID or a GUID, like an employee ID to serve as a primary key.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=192)** When it comes to querying, you have just a few simple choices.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=195)** You can query on that kind of primary key, or you can query on what's called a sort key, which is a kind of secondary key.
>
> **[3:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=202)** You can create custom indices on which to query, these can be comprised of any other field on an object, but they must be maintained, and they take up space.
>
> **[3:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=212)** They also often force you into a two-part query model where first you query the index, obtain a primary key, and then use that to query the object you really want.
>
> **[3:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=222)** Finally, you can perform a full table scan retrieving all records and filter the results, which can be a slow process.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=229)** You really want to choose your keys and your indices well so that you can minimize the result set that you've got to filter at the end.
>
> **[3:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=236)** So what's a sort key?
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=239)** Sort keys combined with primary keys to act like a composite key that will extend your namespace, allowing the primary key to be repeated.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=247)** So for a trivial example of that, if the primary key was first name, having last name as a secondary key would let you store both [[John the Ripper|John]] Smith and Sally Smith.
>
> **[4:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=256)** Otherwise, you'd get a primary key conflict error.
>
> **[4:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=260)** Sort keys don't affect partitioning, so nothing to worry about there.
>
> **[4:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=265)** However, sort keys do affect the order in which the record will be stored on disk, which can have implications for query speeds, that's why these sort keys are sometimes called range keys.
>
> **[4:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=276)** Indexes in Dynamo allows searching on a field other than the primary key.
>
> **[4:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=281)** Any field that's not a primary key, sort key, or index cannot be directly searched.
>
> **[4:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=287)** Also worth noting, indexes become their own records and take up space, so you'll want to think about that.
>
> **[4:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=293)** As an example of how these keys and indexes work together, imagine we're storing employee records.
>
> **[4:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=299)** If we index start year and have employee ID as a primary, we'll enable a two-step process to drill down to employee records by start year.
>
> **[5:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=307)** First, we'll search the start year from the index, grab all the matching employee IDs, and then query the main table for those employee IDs by a primary key.
>
> **[5:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=318)** Like S3, DynamoDB is designed for high durability and availability, all your data is synchronously replicated to three different locations within your region.
>
> **[5:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=328)** You also have the option to enable cross-region replication, which asynchronously replicates your Dynamo tables to another region.
>
> **[5:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=335)** AWS handles this automatically, so if there's a problem in your primary region, you need only to switch your endpoint to the other, and your connected applications can fail over to the backup.
>
> **[5:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=345)** Note that there is an additional charge for enabling this feature.
>
> **[5:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=349)** One last capability of Dynamo I should mention is its streams feature.
>
> **[5:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=353)** Similar to event notifications in S3, streams publish events whenever something changes in a table.
>
> **[5:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=359)** You can get notifications for things like inserts, updates, and deletes on records letting downstream systems note that a change occurred as well as providing context, like the JSON that was just edited or deleted, making it possible to chain Dynamo with other services like Lambda or SNS to create some interesting [[Design Patterns]].
>
> **[6:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamodb?u=76281980&t=378)** With that, let's head to the console and try our hand at creating and querying a simple DynamoDB table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NoSQL]] (3), [[Databases]] (2), [[JSON]] (2), [[MongoDB]] (1), [[Relational Databases]] (1)
> **Env Vars:** aws (3), rds (2), json (2), ssd (1), ec2 (1)
> **Definitions:** is a  (4), is an  (2), means that (1)
> **Analogies:** such as (1), for instance (1), imagine (1), similar to (1)
> **CLI Commands:** aws (3)
> **Code Identifiers:** pilot_of (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)

#### [Create a DynamoDB table](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=0)** - [Instructor] All right, in this demo we're going to create a DynamoDB table.
>
> **[0:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=4)** I've got the service here under recently visited, but of course you can always go up here and type into the search bar and click the first option.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=12)** Now before we get started, let's go to the console where I have opened the file under chapter four called film_data.[[JSON]].
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=21)** So this is in the exercise files.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=24)** If you open that up, you can see that there are a number of Dynamo ready items here that describe different movies such as "Jaws," here, "Memento," "Eternal Sunshine of the Spotless Mind."
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=35)** You can scroll through this and see.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=37)** Now this is not exactly a JSON file because if it were this would be an array and everything would be in square brackets with commas between it.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=45)** Instead, what we have are individual items here, and in a moment we'll need to copy and paste some things into the GUI.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=52)** Now, if you were using DynamoDB in a production setting you would probably be working with an application that you're building, which would mean you'd be using some sort of programming language SDK, say for [[Python (Programming Language)|Python]], and you would interact through that to talk to Dynamo, and your application would be creating these items.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=68)** So what we'll do is a little bit out of the ordinary from a production scenario, but it'll work pretty well.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=74)** So back to the console, we are in the Dynamo DB section.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=79)** Let's click Create table.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=81)** So we'll call it FilmData.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=84)** And for our partition or primary key, we will enter, go back and you can look film_title, film underscore title.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=92)** That's going to be something that appears in every item.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=96)** So that makes a good primary key because it's in every item and it's evenly distributed, sort of, alphabetically.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=103)** As to the sort key, a secondary thing that we might want to query on would be director.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=108)** So we'll type that in.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=110)** Keep all these performance configuration options at their default setting, no need for tags, and click Create table.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=118)** At this point, our table is creating.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=119)** Should just take a second and we can refresh here to watch its progress.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=123)** Okay, the table's active now, so we can click its name and go to Explore table items, this button here in the top right.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=133)** Here we have two sections.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=134)** We have the Scan and Query section, which we can use in a moment to query our data, and we can collapse it now.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=141)** And we can see items down here in the bottom.
>
> **[2:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=143)** Right now, of course we have no items, so we'll click Create item.
>
> **[2:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=147)** Now because we defined that partition key and sort key we are greeted here with inputs for film title and director.
>
> **[2:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=155)** So as you can see here in this little tab widget here, we're on the form view of this page, but we can also go to the JSON view.
>
> **[2:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=164)** And here in the JSON view we have another toggle which gives us even more information.
>
> **[2:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=169)** So you can check and uncheck this toggle that says View DynamoDB JSON.
>
> **[2:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=174)** When you're viewing Dynamo DB JSON, this is literally the JSON format that Dynamo stores it's data in.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=181)** So you can see this looks a little bit different from your typical JSON you might expect.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=185)** Instead of film title being a key and the title being a value, film title is a key that leads to a small object here, and we have S as the key and something here ready for us to type in a value.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=198)** So that's what DynamoDB JSON looks like behind the scenes, and if you're working with its API or [[CLI]], you might need to use this format, but for our purposes we can just untoggle this and we can see something here that looks a lot more like JSON.
>
> **[3:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=212)** So what we can do here is go back to the console and highlight one of our films from bracket to bracket, copy it, come over here, delete what's here, and paste in that text.
>
> **[3:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=225)** Then we can click Create item.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=229)** So this is a little bit of a slow process, like I said, not normally the way that you would do it in practicality, but take a moment, go through here, and highlight each of those films, and create some items in the database.
>
> **[4:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=244)** Okay, now that we've got all the film titles in here, we can take a look at the Scan/Query section and see a little bit of how we can interact with this data.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=253)** So in our dropdown here, we have just a table name, and we can choose, oops, you can always expand that again if it collapses, we can go either scan or query the data.
>
> **[4:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=264)** So scan is just kind of what it sounds like.
>
> **[4:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=266)** It's a full table scan, which means that if you run it, you're going to get all the objects back, and you have the option to filter.
>
> **[4:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=273)** So you can filter on any attribute of the data.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=275)** I could put in here something like film title is equal to and we'll say "Jaws" and run that again and we're going to get just that response back.
>
> **[4:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=287)** But in terms of performance, it's not very good, because we are pulling all the data back on the server side, pulling that all down over the network, and then filtering the results on the client side for just the thing that matches the film title that we wanted.
>
> **[5:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=301)** So we can also go to query here and we can search based on the partition key, which is the film title.
>
> **[5:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=307)** So I can type something that I know exists like "Star Wars," run that, and get a response back.
>
> **[5:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=313)** Of course, the difference is I'm not doing a full table scan.
>
> **[5:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=315)** I'm not bringing all the data of the database over a network call.
>
> **[5:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=320)** That query is being executed on the server side in AWS.
>
> **[5:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=324)** I can also filter on the director here.
>
> **[5:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=328)** The sort key can't be queried by itself, but it can be queried as a subset.
>
> **[5:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=334)** So, of course, this will work if I type in director George Lucas.
>
> **[5:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=338)** By the way, I've got two versions of the movie "Psycho" in here.
>
> **[5:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=342)** So if I search that as the partition key, I get both.
>
> **[5:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=345)** But then I can specify Alfred Hitchcock to narrow that down a little bit.
>
> **[5:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=352)** So if I want to search beyond that and I want it to happen on the server side instead of being a full table scan, then I'm going to need to create an index.
>
> **[6:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=363)** So I head back to tables here on the side, click into FilmData, click on Indexes and Create Index.
>
> **[6:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=372)** So here we're creating another partition key and sort key because essentially what we are doing is we are creating a copy of our data, and how extensive a copy of that we get to decide here, but we do need to start with a partition key.
>
> **[6:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=387)** So here in our data we have release year on a lot of the objects, but not all of them.
>
> **[6:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=393)** That's okay, that's what an index is good for.
>
> **[6:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=395)** So we type in release year there, and I'm going to leave sort key off.
>
> **[6:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=400)** I'll scrolling down and keep all of the defaults here, and I want to point out attribute projections.
>
> **[6:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=404)** This is where we can determine how much of a copy this index actually is.
>
> **[6:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=409)** If we say all, then that means every attribute of every data record is going to get copied into this index.
>
> **[6:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=415)** We can be more specific and say only certain keys, but for this demo I'll keep it at all, and we'll click Create index.
>
> **[7:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=423)** Now that this index is being built, we can go back to the table level, click into FilmData and click Explore table items again.
>
> **[7:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=433)** And now under Query, we should have something new in the dropdown.
>
> **[7:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=438)** Now it may take a moment for the index to appear, or we may need to refresh the page.
>
> **[7:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=443)** And now we can see that the index does exist.
>
> **[7:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=446)** We can click on it, and we see we have the same two options, Scan and Query.
>
> **[7:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=451)** If I click Query, kind of a quirky thing, it actually skips back to the table option here.
>
> **[7:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=456)** But we can reselect Index, and we see we have a different thing that we can search on, this partition key based on release year.
>
> **[7:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=463)** So I can type in 1991 and get back "Jurassic Park."
>
> **[7:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-a-dynamodb-table?u=76281980&t=467)** And now that query is taking place on the server side with AWS rather than pulling the full table scan down and needing for me to filter it on the client side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (10), [[Python (Programming Language)|Python]] (1), [[CLI]] (1)
> **Env Vars:** json (9), aws (2), gui (1), sdk (1), api (1)
> **UI Navigation:** go to (4), toggle (2), dropdown (2), click on (2)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** aws (2), python (1)
> **Code Identifiers:** film_data (1), film_title (1)
> **Cross-References:** go back to (2)
> **File Paths:** film_data.json (1)

#### [Dynamo teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980&t=0)** - [Narrator] Okay, let's clean up our DynamoDB table.
>
> **[0:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980&t=3)** This is a pretty simple process.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980&t=5)** We're here under Dynamo under tables and we'll click the checkbox next to film data.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980&t=11)** Click delete, type in the [[Microsoft Word|word]] delete.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980&t=14)** Have this box checked to delete all CloudWatch alarms and no need to create a backup.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980&t=19)** Click delete table.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dynamo-teardown?u=76281980&t=22)** That's going to take care of the table of the items and the index.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **UI Navigation:** checkbox (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 5. Getting Data to AWS

[↑ Back to Table of Contents](#table-of-contents)

#### [Move data to AWS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=0)** - Unless your organization is just getting started, you no doubt have lots of data on premises.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=5)** And like many organizations, your data is everywhere.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=9)** It's on servers, local file systems, on a range of file system types and operating systems.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=15)** It's on network attached storage.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=17)** It's in [[Relational Databases]] of many different types.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=20)** Oracle, [[Microsoft]] [[SQL]], [[PostgreSQL|Postgres]], [[MySQL]].
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=25)** Some of this might even be on staff laptops in the form of text files or CSVs.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=30)** When we are ready to move to the cloud, how do we get all this data to AWS?
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=35)** We've seen a few ways already.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=37)** You can always upload data to S3, or add records to Dynamo directly from the AWS gooey.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=43)** But that's often the slowest way to do things, and certainly the least automated.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=48)** And recall that if you're using AWS Direct Connect, you can transfer data quickly over the direct Connect pipe to an EFS file system via an NFS mount.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=58)** But there are many more ways, of course.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=60)** In this chapter, we'll explore some of those other options.
>
> **[1:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=64)** For instance, command line interfaces for services like S3, have commands that can push, update, sync, and manage data in those services.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=72)** We'll look at that in the next lesson.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=75)** After that, it's AWS storage gateway, a service that can provide you local NFS mounts that ultimately convey your data over the internet to S3.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=85)** Next, we'll examine AWS database migration service and schema conversion tool.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=90)** These AWS features can help you both migrate, and if you choose, continuously replicate local [[Databases]] to RDS, S3, and more.
>
> **[1:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=99)** You're still subject to the latency of your AWS connection overall, but these tools make the move a lot simpler than a DIY approach.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=107)** Finally, we'll take a peek at AWS's take on Sneakernet.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=111)** AWS Snowball.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=113)** This service lets you ship your data directly to AWS, bypassing the internet entirely.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-to-aws?u=76281980&t=119)** We'll start with command line tools in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Relational Databases]] (1), [[Microsoft]] (1), [[SQL]] (1), [[PostgreSQL|Postgres]] (1), [[MySQL]] (1)
> **Env Vars:** aws (10), nfs (2), sql (1), efs (1), rds (1)
> **CLI Commands:** aws (10), mysql (1), make (1)
> **Cross-References:** in the next (2)
> **Tools:** command line (2)
> **Analogies:** for instance (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - unless (1)

#### [Transfer data using the AWS CLI](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=0)** - [Instructor] In this video, I'm in a terminal to demonstrate how the AWS command line interface can be used to interact with S3 and sync large amounts of files to it on a continuing basis.
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=10)** If you don't have the [[CLI]] installed and configured, check out my other course called AWS Deployment, Provisioning, and Automation.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=17)** To get started, we'll type aws s3 ls to list our buckets.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=22)** This will let us know that everything is hooked up right.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=25)** Here we see the two buckets that I created earlier in the course.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=28)** So with that, let's type aws s3, and then mb for make bucket.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=34)** We'll type S3://, and then the name of the new bucket we want to create.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=40)** I'll call this s3-cli-sync, and then give my initials to ensure uniqueness.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=46)** With that done, we can go back to the console and observe that the new bucket has been created.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=53)** Okay, I'm in a folder of the course materials called Ch5/s3-cli-demo, and inside here, you can see that we have one big file, and a subfolder full of smaller files.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=67)** You can see we have lots of files there that we want to get to S3.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=70)** Type cd .. to back up one, and make sure you're on the same level as big file.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=76)** From here, we could use the S3 CLI to copy files individually, but we have a better option.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=83)** We'll type aws s3 sync, and then a dot for the current folder, and we'll specify the name of the bucket, S3://s3-cli-sync, and then my initials, the fully qualified bucket name.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=100)** Hitting Enter and executing this will send up all these files on a recursive basis to S3.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=107)** The big file and the subfolder.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=109)** We can go back to the console and check out the results.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=113)** Click here, and you can see we've got everything that we expected, including all of those smaller files.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=119)** But how do we know that this is a true sync?
>
> **[2:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=121)** Well, let's start by adding another file here.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=125)** We'll call it hello.text.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=128)** Now we've got a new file, and if we execute the same sync command again, you can see that it only uploads the new file that it didn't already know about.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=139)** And if we head back to the console and click refresh again, you can see that that's true.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=145)** So you can see how the sync function is very powerful.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=148)** If you want to make sure a certain folder or files is always sync to S3, a good way to achieve this would be to set up a recurring crime job to run the sync command on the same folder.
>
> **[2:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=158)** It will only incur the bandwidth for newly created files.
>
> **[2:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-using-the-aws-cli?u=76281980&t=161)** With this, you can use the CLI to stay in sync with S3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (6)
> **CLI Commands:** aws (5), make (3), ls (1), cd (1)
> **Env Vars:** cli (3), aws (2)
> **Cross-References:** go back to (2)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Storage Gateway](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=0)** - [Instructor] We've discussed S3's incredible durability and availability.
>
> **[0:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=4)** However, it can be a bit challenging to integrate with other systems since it doesn't present a traditional file system interface.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=11)** By default, you must interact with it via restful HTTP calls, AWS [[CLI]] commands, or via the AWS web console.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=20)** But what if you could make S3 mountable as a file system?
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=24)** That's where AWS Storage Gateway comes in.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=27)** Storage Gateway is a software appliance you can place in between your data source and S3.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=32)** Storage Gateway acts as a go-between.
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=35)** Presenting a file system front end to S3 and Glacier Storage.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=39)** It can be configured to provide file, volume, or tape interfaces.
>
> **[0:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=44)** Storage Gateway is smart.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=46)** It will cash hot data locally so you don't have to go all the way to S3 each time you access frequently used data.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=52)** And here's where things get interesting.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=54)** It can be deployed to either [[Amazon EC2|EC2]] or to VMware.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=58)** Deploying to VMware means that storage gateway can act as a bridge between your existing local data center and the cloud.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=66)** In a [[Hybrid Cloud]] scenario, you deploy your gateway as a VMware appliance in your local data center.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=72)** Servers in your data center can now mount a file system on that gateway and seamlessly gain access to [[Cloud Storage]].
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=79)** You can persist in this mode and maintain a true hybrid cloud, or you can use the gateway as a bridge to AWS, leveraging it as a way to get data to S3 in a one-time migration.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=91)** Storage Gateway provides a few different ways to present to file system.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=95)** File Gateway allows the client to mount via NFS or SMB, making it suitable for both [[Linux]] and [[Windows]] workloads.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=103)** There's Volume Gateway, which uses an iSCSI interface.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=107)** Tape Gateway presents a virtual tape library or VTL interface.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=111)** Tape storage is often used for archiving data that is very relaxed requirements for access times.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=117)** As you may have guessed, this type of gateway uses the Glacier tiers of S3 storage for the most infrequently accessed data.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=124)** Let's dig into the first mode.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=126)** As a File Gateway, AWS storage gateway can present an NFS or SMB file system that is backed remotely by an S3 bucket.
>
> **[2:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=136)** This file interface can be mounted by any instance that supports these protocols.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=140)** This can occur entirely in AWS or the gateway can be on premises in VMware, making the file gateway a local bridge to cloud storage.
>
> **[2:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=150)** Unlike mounting EFS from outside AWS, this model does not require the use of direct connect.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=157)** Within a single gateway instance, you can create one or more file shares.
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=162)** These mapped individual buckets and will be your actual NFS mount points.
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=166)** This means that you can potentially serve many different applications and use cases with a single file gateway.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=173)** You might be wondering how a file gateway handles NFS [[Metadata]] like file permissions.
>
> **[2:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=178)** Permission bits and ownership attributes are stored in S3 object metadata.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=184)** To provide optimal performance, the file gateway pays attention to what data is used most often and keeps it in a local cash.
>
> **[3:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=191)** So hot data can be read and written quickly without incurring network latency.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=195)** Files are synced to S3 behind the scenes while you get your data without lag.
>
> **[3:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=201)** File Gateway does come with a few caveats.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=203)** First of all, AWS makes it clear that although you're technically able to access the backend S3 directly, you should avoid doing so.
>
> **[3:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=211)** The behavior of File Gateway is not well defined when you alter the backend S3 storage and may result in errors or lost data.
>
> **[3:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=219)** File Gateway does support using buckets of various S3 storage tiers.
>
> **[3:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=223)** However, you should read Amazon's documentation on this as certain usage patterns can trigger additional fees.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=229)** Such as the infrequent access tiers, early deletion fees, or even errors such as when trying to update files that have been moved to Glacier.
>
> **[3:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=237)** For our demo, we'll stick with S3 standard to avoid any of these issues.
>
> **[4:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=242)** Other things to consider.
>
> **[4:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=243)** File Gateway cannot support symbolic or hard links.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=247)** So if these features are critical to your use case, you'll need to use another solution.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=252)** Also, since S3 does not support renaming objects directly, File Gateway implements the operation by copying the affected file objects and deleting the old ones.
>
> **[4:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=261)** This means that your gateway won't have to send any additional data over the network.
>
> **[4:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=266)** But it also means that mass renames, such as renaming a folder containing many files and subfolders, may not be an instantaneous task.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=275)** Finally, although the NFS protocol will allow connections for more than one client, AWS again recommends that you do not do this and instead maintain a one-to-one connection policy between clients and file shares.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=288)** This will help avoid possible data corruption.
>
> **[4:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=290)** If what you need is an NFS file system that supports multiple clients as a first class use case, you're going to want to look at EFS.
>
> **[4:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/storage-gateway?u=76281980&t=299)** However, if your goal is to take advantage of S3's highly durable, relatively cheap storage, while avoiding the complexities of interacting directly with S3 APIs, AWS Storage Gateway is a great way to do just that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hybrid Cloud]] (2), [[Cloud Storage]] (2), [[Metadata]] (2), [[CLI]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** aws (10), nfs (6), smb (2), efs (2), http (1)
> **CLI Commands:** aws (10), make (1)
> **Definitions:** means that (4), is a  (2), is an  (1)
> **Analogies:** such as (3)
> **Code Identifiers:** iscsi (1)
> **Best Practices:** avoid doing (1)
> **Prerequisites:** you'll need (1)

#### [Configure File Gateway and shares](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=0)** - [Instructor] Now we'll create a File Gateway using AWS Storage Gateway.
>
> **[0:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=4)** Before we get started, there are two things we need to take care of.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=7)** First, click into S3.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=9)** We need to create the bucket.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=11)** It will be the backend for this gateway.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=13)** We'll go over here to create bucket and we'll call it something like file-gateway-demo, and I'll give it my initials again to ensure uniqueness.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=24)** I'll keep everything else at the default and click create bucket.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=30)** Now we need to create a security group.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=33)** Head over to the [[Amazon EC2|EC2]] section, and along the left-hand side, go to security groups.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=40)** There's a one-time step in the File Gateway configuration where AWS needs to access the newly created gateway via port 80.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=49)** Amazon actually says that as long as this traffic is allowed for my laptop, things will work and it can be turned off after the gateway's initialized.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=57)** For our demo purposes, we'll just allow port 80 from the world and remove this access during the tear down at the end.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=63)** But if it were your production instance, you'd want to allow it only as long as it is needed for the configuration.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=70)** We'll go up to Create Security Group and we'll call this AllowHTTPFromWorld and in our description, allow port 80 HTTP traffic from anywhere.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=84)** Go down and click Add Rule under Inbound Rules and choose the prefilled HTTP option, which makes Port 80 the default here and our source will be anywhere, IPv4.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=97)** That's all we need to do here.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=98)** So go down and click Create security group.
>
> **[1:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=102)** Now we can head into the Storage Gateway section of AWS.
>
> **[1:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=106)** We'll type that up here in the search bar and click the first option.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=110)** From here, click Create Gateway.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=114)** We're going to give our gateway a name, which will be FileGatewayDemo.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=119)** Here below we have a few different gateway options, including the default, which we'll choose the S3 File Gateway.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=125)** That's the one that's backed by S3 Storage.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=128)** We also have FSX, Tape Gateway and Volume Gateway.
>
> **[2:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=132)** Under Platform Options, you see a few things.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=134)** This is where we choose the platform for the Storage Gateway instance itself.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=139)** If we are running VMware or [[Microsoft]] Hyper-V for our virtualization in an on-premises data center, we could choose that option because remember, one of the primary use cases of Storage Gateway is to create a bridge from a local data center to the cloud.
>
> **[2:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=153)** For the purposes of this demo, I don't have a local data center.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=156)** I'm just going to be connecting from within AWS, so I'm going to choose [[Amazon EC2]].
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=162)** Below you see that we've got a button that says Launch instance, and an icon that indicates this will open in another tab, and that's exactly what we'll do.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=170)** We'll go off in another tab and we'll follow the wizard to create an EC2 that's suitable for the File Gateway.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=175)** But before we do, let's take a look at some of the instructions below here.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=180)** We're told that instance type needs to be at least m5.xlarge.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=184)** Now, that's definitely a more expensive instance type than we've used before in this course so make sure to watch the tear down at the end of this section to make sure you're not charged any more than you expect.
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=194)** We also need to make sure the instance has a public IP and we need to make sure that it can be accessed through port 2049, which is NFS.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=203)** We actually already have a security group that allows this from a previous part of the course, so we'll just use that.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=210)** Finally, pay attention to this section, which specifies that you need to add an extra volume for the cache on this File Gateway with a size of at least 150 gigabytes.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=221)** AWS recommends we have at least 150 as the basis for the caching disk.
>
> **[3:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=225)** They also devote an entire section of the Storage Gateway documentation to the subject of caching.
>
> **[3:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=230)** If you search for managing local disks for your AWS Storage Gateway, you can find a lot of information on how to tailor disk cache size to your particular use case.
>
> **[4:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=240)** All right, let's click launch instance.
>
> **[4:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=244)** We'll be taken to the EC2 wizard where we'll give our instance a name.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=247)** I'll call it FileGatewayDemoHost.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=253)** Scroll down and you'll see the AMI has been pre-selected for us.
>
> **[4:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=257)** This is the image that Amazon maintains that has the File Gateway software already on it.
>
> **[4:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=261)** Keep on scrolling down.
>
> **[4:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=263)** Under instance type, we can type in the search bar m5.x to get the m5.xlarge that we need.
>
> **[4:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=271)** Select that and move on down.
>
> **[4:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=274)** For key pair, we'll do something we haven't done before, which is choose proceed without a key pair.
>
> **[4:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=279)** We will not need to SSH this instance as it's fully managed by Amazon.
>
> **[4:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=284)** Under network settings, you can see that auto-assigned public IP is set to enable, so that's good.
>
> **[4:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=289)** And here under firewall, click Select existing security group.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=294)** We're going to choose two.
>
> **[4:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=296)** We'll take AllowHTTPFromTheWorld and NFSFromDefaultVPC, which we created earlier.
>
> **[5:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=305)** That's been collapsed here under this plus button.
>
> **[5:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=307)** So if we click that, we can see that both are applied.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=311)** Head on down, and here we need to click add new volume under configure storage, and we'll give this 150 gigabytes.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=319)** That will be our caching volume.
>
> **[5:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=321)** All right, with that, we can go ahead and click launch instance.
>
> **[5:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=326)** Click the instance ID to see the ongoing creation of the instance, and we can see that this is already in the running state, but we don't want to move on until status checks have passed from initializing to passed.
>
> **[5:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=342)** Okay, now that both status checks are passed, we're ready to proceed.
>
> **[5:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=347)** Click the checkbox here to see the details of the instance and click this button to copy the public IP address.
>
> **[5:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=355)** Now we'll head back to the AWS Storage Gateway.
>
> **[5:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=359)** This tab is where we'll continue to configure the instance.
>
> **[6:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=363)** Under confirm set up gateway, click I completed all the steps, and click Next.
>
> **[6:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=370)** Here we'll choose if this is a publicly accessible endpoint and its connection type will be IP.
>
> **[6:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=376)** Here we're going to paste the IP address that we just generated.
>
> **[6:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=379)** Click next.
>
> **[6:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=383)** All right, review what we've done so far.
>
> **[6:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=386)** Then click next.
>
> **[6:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=388)** Now, Amazon is connecting to this instance to complete the setup.
>
> **[6:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=392)** We need to wait for it to look for the local disk so we can decide which one is going to be the cache.
>
> **[6:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=397)** So when this loads up, we'll select the 150 gigabyte size disk to be the cache and move on.
>
> **[6:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=405)** Okay, Amazon has interrogated our disks and has actually figured out which one is the non-root disk, which is the 150 gigabyte, and it's already set to be allocated to cache, so that's all good.
>
> **[6:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=416)** That's exactly what we want, and we can move on.
>
> **[6:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=419)** Here under CloudWatch log Group, we will simplify things by deactivating logging.
>
> **[7:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=426)** We'll say no alarm to CloudWatch.
>
> **[7:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=427)** These are all things that you would want to set up in a production instance, of course, but not necessary for the demo.
>
> **[7:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=432)** We can also skip tags and then click configure.
>
> **[7:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=439)** Something seems to have gone wrong there but it did not recognize that we selected the cache so I reselected it, refreshed it, and reselect it and I'll click configure.
>
> **[7:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=449)** Okay, for whatever reason, that seemed to work a second time.
>
> **[7:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=453)** Now the gateway is coming up so we've successfully created the Storage Gateway.
>
> **[7:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/configure-file-gateway-and-shares?u=76281980&t=458)** However, we can't connect to it until we first create an NFS file share, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Microsoft]] (1), [[Amazon EC2]] (1)
> **Env Vars:** aws (7), ec2 (4), http (2), nfs (2), fsx (1)
> **CLI Commands:** aws (7), make (4), find (1), ssh (1)
> **Prerequisites:** configure (4), set up (2), setup (1)
> **Ports:** port 80 (4), port 2049 (1)
> **UI Navigation:** go to (1), scroll down (1), checkbox (1), select the (1)
> **Cross-References:** coming up (1), in the next (1)
> **Definitions:** is a  (1)

#### [Connect to File Gateway via NFS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=0)** - [Instructor] Now that the File Gateway has successfully been created we need to do one more thing, create a file share on it.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=7)** This will create the NFS endpoint to which our [[Amazon EC2|EC2]] instances will connect.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=11)** It's also the step where we'll tell AWS to use our S3 bucket as the storage backend.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=17)** Remember though that buckets are associated at the file share level, not with the gateway.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=22)** A single gateway can provide a file system interface to multiple buckets for different purposes.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=27)** Let's check the checkbox next to File Gateway and click Create file share.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=33)** Because we check that checkbox the first dropdown option is pre-selected for us.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=38)** Under Amazon S3 location we'll go with the default which allows us to connect directly to the bucket without any indirection.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=45)** Going down a bit we'll paste in the bucket name from the previous lesson.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=51)** Here we have the option to give a prefix.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=53)** This would allow us to place all the files saved through this particular share into a subfolder paving the way to reuse this bucket for other purposes, using other prefixes in the future.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=65)** For this demo, we'll leave it blank.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=67)** AWS region should match where the S3 bucket is.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=70)** Our bucket is in US East 1, so that works.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=74)** File share name, we can edit slightly.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=76)** I'm going to call this-file-gateway-share, with the initials.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=79)** And everything else on this screen can stay at default.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=82)** Click Next.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=84)** On this screen we're asked to choose a storage class for the objects.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=88)** Remember, the backend storage is S3 so it makes sense that we would have the option to choose S3 Standard, Intelligent Tiering, One Zone, Infrequent Access, things like that.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=98)** For now, we'll keep this at S3 Standard, but it's good to know that you have this option.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=103)** Encryption, we'll go with S3 Managed Keys and we'll click Next.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=109)** On this screen we have Access Object.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=112)** This is an option that lets you specify an IP or a CIDR block to which to restrict file system access.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=119)** Unlike a security group, this is enforced at the file share level which is why it's part of this configuration wizard.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=125)** We'll remove this entry for now and skip this step allowing any user with network access to reach this file share.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=133)** You can see some other options here such as Root Squash, which prevents remote root users from logging in as root on this system.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=140)** It's a good idea to keep that at default.
>
> **[2:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=142)** Permission bits are how the file system will treat files and folders as they're created.
>
> **[2:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=147)** We'll keep those at default and click Next.
>
> **[2:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=151)** Okay, now we're on the Review page.
>
> **[2:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=153)** Scroll all the way down and click Create.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=157)** At this point we need to give the share a few moments to be created.
>
> **[2:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=161)** Right now it's in the updating status.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=163)** When it's done, we'll be able to mount it to an EC2 instance.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=168)** Okay, now that the share has become available let's click into the ID and scroll down past the details.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=175)** Down here we see some mount commands that will become useful in a moment.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=179)** I'm going to copy this first one for [[Linux]].
>
> **[3:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=182)** Over here on the terminal, I've logged into one of the EC2 instances from earlier in the course.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=187)** If you didn't keep one around, that's okay.
>
> **[3:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=189)** As long as you have an instance in the same VPC as the Gateway, the security group we used will allow it to mount our file share.
>
> **[3:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=196)** Let's start by creating a mount point.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=199)** I'll say, sudo make directory, and we'll call it file-gateway.
>
> **[3:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=204)** Now, before I paste in the command from the previous page I want to prefix that with sudo again, paste, and then backspace over this mount path and give it the path that we just created.
>
> **[3:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=217)** Okay, with that, we can do the df -h command and see our mount right down here.
>
> **[3:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=223)** In fact, you can even see the name of the S3 bucket that backs up the storage.
>
> **[3:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=228)** Much like with EFS we see storage space looks extremely large, like eight exabytes, and if we take off the -h, we'll see an even larger number that struggles to fit on the screen, honestly.
>
> **[4:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=241)** All right, so now we can move into the File Gateway folder.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=247)** And we can see that we have mounted the file system.
>
> **[4:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=250)** Let's create something.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=252)** We'll echo a little message here into hello.txt.
>
> **[4:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=256)** And we can see that that file has been created here in the file system.
>
> **[4:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=260)** And if we go back to AWS now we can go to the S3 section and take a look in our bucket.
>
> **[4:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=268)** Now you'll recall from earlier that we shouldn't touch any of the backend storage but we do want to see what's going on here.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=275)** We'll go into file-gateway-demo.
>
> **[4:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=278)** And there you see it, our hello.txt.
>
> **[4:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/connect-to-file-gateway-via-nfs?u=76281980&t=281)** And you can clearly see now that we have mounted an S3 bucket as an NFS file share using File Gateway.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Linux]] (1)
> **Env Vars:** ec2 (3), aws (3), nfs (2), cidr (1), vpc (1)
> **CLI Commands:** aws (3), sudo (2), make (1)
> **UI Navigation:** checkbox (2), dropdown (1), scroll down (1), go to (1)
> **File Paths:** hello.txt (2)
> **Cross-References:** earlier in (1), go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)

#### [File Gateway teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=0)** - [Narrator] Okay.
>
> **[0:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=1)** As with every other section of this course, we're now going to go through and clean up all the resources that we created so that you won't have any unexpected charges on your AWS bill.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=11)** The first thing we'll do is go into the [[Amazon EC2|EC2]] section.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=14)** I'm going to delete the EBS demo one instance that we use to mount the file system.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=20)** I'll highlight it, go up to instant state and choose terminate.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=26)** We'll need to confirm that and now that's in the terminating state.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=32)** Okay, before we delete the file gateway instance we need to head back to storage gateway.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=37)** Click storage gateway.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=40)** Highlight the file gateway.
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=42)** Go to actions and choose delete gateway.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=48)** We're getting a warning here.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=49)** As we do throughout AWS, we'll type the [[Microsoft Word|word]] delete in this case to confirm and click delete.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=56)** AWS is asking us for some feedback here which is something that doesn't show up all the time.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=62)** We can choose other here and not giving them any details and just click submit.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=67)** Okay, our gateway is deleted.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=69)** Now we can head back to EC2 and delete the instance that's associated with it.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=75)** Go into running instances, highlight the file gateway.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=80)** Go up to instant state and choose Terminate instance.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=84)** This is an important step because you want to make sure that M5 dot X large machine is not running any longer than you need it to be.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=92)** Finally, let's clean up the last bit by going to S3 and deleting our bucket.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=98)** In this case, we're looking for the file gateway demo.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=103)** I'll highlight that and click delete but we'll be stopped here because the bucket is not empty.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=109)** We'll get this warning here.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=110)** Buckets must be empty and there's a link for the empty bucket configuration.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=114)** Follow that link and type the words permanently delete.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=120)** Click empty and that will remove all the objects from the bucket.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=125)** Now, if that's done, we can click exit, and once again highlight and choose delete, willing to type or paste in the name of the bucket to confirm and click delete bucket.
>
> **[2:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/file-gateway-teardown?u=76281980&t=139)** And with that, we have cleaned up all the resources from the storage gateway section of the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** aws (3), ec2 (2), ebs (1)
> **CLI Commands:** aws (3), make (1)
> **Warnings:** warning (2)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Transfer data with AWS Snowball](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=0)** - [Instructor] When it comes to transferring data to the cloud, especially in very large quantities, latency and bandwidth restrictions are a constant concern.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=8)** There are many points at which our throughput might be limited by the speed of our connection or bottlenecked by low bandwidth network ops.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=15)** We can alleviate this somewhat by using a technology like AWS Direct Connect, but at a certain size of data load, the bandwidth of the internet just isn't going to cut it.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=25)** We'd almost be better off loading our data onto a truck and driving it to AWS.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=30)** In fact, this is true.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=31)** Given sufficient data quantity and demanding enough time constraints, physically moving hard drives of data is more efficient than moving that same data over the internet.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=40)** Back in 1981, American Dutch computer scientist Andrew Tanenbaum put it thusly.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=46)** "Never underestimate the bandwidth of a station wagon full of tapes hurdling down the highway."
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=51)** For an interesting dive into the implications of this statement, take a look at XKCD author Randall Monroe's what-if article on FedEx bandwidth.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=60)** For just these sorts of situations, AWS provides AWS Snowball.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=65)** Snowball is a ruggedized device that Amazon ships to your door via, what else, Amazon Prime.
>
> **[1:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=71)** Snowball provides a way to get large quantities of data in and out of S3.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=76)** You can receive data from an S3 bucket in the mail or create an export job wherein you'll load data onto a device and ship it to AWS.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=85)** To get started, you'll log into the AWS console and create what's called a Snowball job.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=90)** A job consists of a few things.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=92)** For example, for an import job, you'll specify a shipping address, a destination S3 bucket, and an optional Lambda.
>
> **[1:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=100)** This Lambda will be executed for every S3 put performed by the Snowball import job.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=105)** You can use this to kick off all kinds of processing related to your data import.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=111)** You'll also select a size for your Snowball.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=113)** The device can be ordered in 50, 80, and 100 terabyte variants.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=118)** The 100 terabyte size is exclusive to a Snowball variant called Snowball Edge.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=124)** Snowball Edge is a true edge computing device.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=127)** Rather than just storage, it allows you to cluster multiple devices together and actually run compute on them via Lambda functions.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=135)** So you can not only transfer data, but you can perform work.
>
> **[2:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=138)** For this series, we'll focus on the normal 50 or 80 terabyte Snowball transfer device.
>
> **[2:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=144)** How about security?
>
> **[2:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=146)** If you're going to send terabytes of valuable data through the mail, you want to know it's safe.
>
> **[2:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=150)** First of all, Snowball requires that you encrypt the data to be transferred.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=154)** You must select an 80 risk KMS key management service key when you create your job.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=159)** This key will be used to encrypt the data while it's still on your own device.
>
> **[2:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=163)** Then the encrypted data moves to the Snowball, never even traveling with the key.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=168)** When it arrives in S3, the same KMS key can be used to decrypt.
>
> **[2:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=172)** Second, the enclosure itself is tamper-proof and equipped with something called a trusted platform module that can alert AWS to any unauthorized changes to the [[Hardware]].
>
> **[3:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=182)** After your job is complete, AWS erases your data according to the [[NIST]] standard for media sanitation.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=190)** Finally, you can configure SNS notifications for events that occur during the job's lifecycle.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=195)** This way, you can get text messages or emails for things like job created, Snowball shipped, Snowball delivered, Snowball back at AWS, job completed, or job canceled.
>
> **[3:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=208)** The Snowball will arrive at your location via one or two day shipping, your choice.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=213)** When it does, you'll connect the device to your network and install the Snowball S3 adapter software on your computer.
>
> **[3:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=219)** The software comes for [[Windows]], Mac, and [[Linux]], and provides an S3 compatible endpoint for you to transfer data locally.
>
> **[3:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=225)** Remember, you'll have to specify in advance the target S3 bucket and the KMS encryption key that will be used.
>
> **[3:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=232)** When you're done, the Kindle-esc e-Ink label on the device updates to the facility that you need to ship to and you simply ship the device back via your carrier of choice.
>
> **[4:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=242)** When you get the SMS notification, you'll know your data is securely in S3.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=247)** So all this is very cool, but when is Snowball really the best method for getting your data to the cloud?
>
> **[4:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=254)** AWS has some rules of thumb in their published documentation.
>
> **[4:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=257)** It's really a function of your available bandwidth, amount of data to transfer, and your time constraints.
>
> **[4:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=262)** They give some examples in this chart.
>
> **[4:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=264)** For instance, on a 100 megabit connection, 100 terabytes could take almost four months to transfer.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=270)** That's assuming you don't run into any connection problems along the way.
>
> **[4:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=274)** AWS recommends that if a data transfer over your connection is going to take longer than a week, you're a candidate for Snowball, which is only bound by the transit time of the delivery device.
>
> **[4:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=285)** Now, if you have a persistent need to move large quantities of data to AWS from an on-premises data center, it would be cost-prohibitive to use Snowball over and over.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=294)** You're going to want a bigger pipe.
>
> **[4:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=296)** Although it's outside the scope of this course, I'd recommend that you do look at AWS Direct Connect, which offers AWS customers a way to tap into high bandwidth networking infrastructure that goes directly to AWS.
>
> **[5:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=306)** Another option, of course, is to move your data-generating workloads to AWS.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=311)** Migrating from a [[Hybrid Cloud]] to a full cloud native solution is definitely going to alleviate many data transfer headaches.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=319)** There's actually another use case for Snowball, which these days is part of a larger set of devices called the Snow Family as shown here.
>
> **[5:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=327)** You can see the specs on AWS's documentation, but they vary in both storage and compute capacity.
>
> **[5:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=334)** Why compute?
>
> **[5:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=335)** Because the Snow Family devices are not just used for shipping data, they're also used for edge computing.
>
> **[5:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=341)** Edge computing refers to scenarios where you need a device that can collect and process data, but that must run in an environment where conditions or connectivity make it impractical to work directly in the cloud.
>
> **[5:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=352)** Just one example might be a research team operating in a remote location, collecting data with sensors whose output must be processed and stored locally.
>
> **[6:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=360)** This team can use a local Snow Cone or Snowball device to work with that data, even running an AMI directly on the device, and then ship it to S3 later to continue their work in the cloud.
>
> **[6:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=372)** So whether you're looking at edge computing or a one-time large scale data transfer, take a look at AWS's family of Snow devices.
>
> **[6:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=380)** Oh, and if you've got a really huge data set to move, we're talking exabytes, well, AWS has you covered there too.
>
> **[6:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=389)** Meet AWS Snowmobile.
>
> **[6:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/transfer-data-with-aws-snowball?u=76281980&t=391)** It's a literal semi-truck, and if you ever end up needing to ship this much data, give it a try, and please take pictures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[NIST]] (1), [[Windows]] (1), [[Linux]] (1), [[Hybrid Cloud]] (1)
> **Env Vars:** aws (20), kms (3), xkcd (1), nist (1), sns (1)
> **CLI Commands:** aws (20), make (1)
> **Definitions:** is a  (2), refers to (1)
> **Analogies:** for example (1), for instance (1)
> **Prerequisites:** configure (1), install (1)
> **Tools:** aws console (1)
> **Speakers:** - [instructor] (1)

#### [AWS Database Migration Service](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=0)** - [Instructor] Chances are if you're interested in Cloud [[Data Storage]], you're not starting from scratch.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=5)** You've already got a significant amount of data on-premises in your local data center or co-location and you're wondering how to get it to the Cloud.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=12)** Maybe you've been running a relational database or two or three for years, and you're ready to let AWS take over the operational details by migrating to RDS.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=21)** Perhaps you've been running [[MySQL]] and you're interested in the performance enhancements promised by Aurora or maybe you have some new architectural goals and just want to switch database engines.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=32)** How do you get from here to there?
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=35)** Well, you have a number of do it yourself options.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=37)** You can use native tools such as Oracle's data pump but often these tools are geared toward homogenous transfers, not for migrating to another platform.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=46)** You could use your database's export tools to export data and schemas to [[SQL]] scripts and run them, but again changing engines would mean that you're responsible for translating the resulting output into a syntax suitable for your destination.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=59)** The files could also be quite large at which point you're met with the challenges of getting them to the Cloud in the first place.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=65)** Finally, you could export your data in some other format such as CSV, but then it's all on you to write import scripts that will work with your destination platform.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=75)** That's where the database migration service comes in.
>
> **[1:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=78)** AWS has essentially abstracted away the details of a number of existing migration tools and created a service that gives you a single interface for moving data from one database to another.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=89)** DMS can do one time or continuous data migrations to and from a variety of relational and [[NoSQL]] [[Databases]] and can even move data to S3.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=98)** Let's take a look at how this works.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=101)** The key component of a database migration service task is the replication instance.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=105)** The replication instance is an [[Amazon EC2|EC2]] virtual machine provisioned by DMS.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=111)** The host must be able to access both your source and target databases on the respective service ports.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=117)** For example, port 5432 for [[PostgreSQL|Postgres]].
>
> **[2:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=121)** The replication instance runs migration tasks, moving relational data from your source database to the target.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=128)** This process can be a one time event, or you can keep the instance and use it as a persistent replication engine.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=135)** Just be aware that as long as the replication instance is running, you will incur the cost of that EC2 host, which varies based on the sizing you choose.
>
> **[2:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=143)** The two sides of the migration can both be in AWS or they can be local, on-premises databases.
>
> **[2:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=150)** The AWS side can be an RDS database, a database running on EC2, a NoSQL database like Mongo or Dynamo, or even S3.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=159)** This means that you can set up a migration from a local DBMS to a database in AWS, giving you yet another way to move data to the Amazon Cloud.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=168)** When you're ready to go Cloud native, you can just point your applications to the remote database, decommission your old one on-premises, and terminate the replication instance.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=177)** Of course, if your target is RDS, you can easily set it up with read replica or multi AZ functionality to keep that high availability you get from having multiple copies of your database.
>
> **[3:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=189)** The data stored on the replication instance itself is encrypted with an AWS key management service key of your choosing.
>
> **[3:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=196)** It can be one auto generator for DMS or it can be one that you've created on your own.
>
> **[3:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=201)** If you need your own SSL certificates, you can also encrypt the traffic to and from the source and target.
>
> **[3:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=207)** The other great thing about database migration service is that it not only gives you a way to move data to AWS, it also makes it possible to migrate to a different database engine than the one you're currently using.
>
> **[3:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=218)** This is called a heterogeneous migration.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=221)** AWS provides documentation that makes it clear exactly what conversions are supported.
>
> **[3:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=226)** This includes many transactional databases.
>
> **[3:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=229)** For instance, you can migrate a [[Microsoft SQL Server|SQL server]] database to Aurora, MySQL, another SQL server or Postgres.
>
> **[3:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=236)** Plus you can migrate many different data warehouse platforms into Redshift.
>
> **[4:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=241)** AWS also provides a lot of specific detail on the use of each database platform as both a source and a target.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=247)** Be sure to read the documentation carefully to make sure you understand the nuances of the migration that you're planning for DMS.
>
> **[4:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=254)** To summarize, let's look at the key concepts behind database migration service.
>
> **[4:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=259)** First, you'll create a replication instance to connect to both databases and execute the actual migration.
>
> **[4:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=265)** Second, you'll establish endpoints which is just another way of saying you'll set up the connection information on both sides.
>
> **[4:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=272)** Third, you'll create a migration task, which can be set up as either a one time or continuous migration.
>
> **[4:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=278)** Finally, within the task, you can set up simple transformations such as filtering out certain tables or schemas.
>
> **[4:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-database-migration-service?u=76281980&t=284)** Let's head to the AWS console to try this all out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (5), [[Amazon EC2|Ec2]] (3), [[MySQL]] (2), [[NoSQL]] (2), [[PostgreSQL|Postgres]] (2)
> **Env Vars:** aws (10), dms (4), rds (3), sql (3), ec2 (3)
> **CLI Commands:** aws (10), mysql (2), mongo (1), az (1), make (1)
> **Analogies:** such as (2), for example (1), for instance (1)
> **Prerequisites:** set up (4)
> **Definitions:** is an  (1), means that (1), is called (1)
> **Ports:** port 5432 (1)
> **Documentation:** the documentation (1)

#### [DMS demo: Setup steps](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=0)** - [Instructor] Okay, in this demo of the AWS Database Migration Service, we're going to use the existing [[MySQL]] RDS database that we created earlier in the course.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=9)** If you're following along but you don't have that one anymore, feel free to refer back to chapter four.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=15)** Build it again and pick up right here.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=17)** What we're going to do is migrate from a MySQL database in RDS to a [[PostgreSQL|Postgres]] database in RDS, and we use Database Migration Service to do it.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=27)** So that means we need to create the destination database.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=31)** Before we go into RDS and take that step, we need to go into [[Amazon EC2|EC2]] and create a security group.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=39)** Scroll down here on the side under the EC2 section to security groups, then click create security group.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=46)** We'll call this PostgresFromWorld.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=51)** In the description, something like allow Postgres traffic from anywhere.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=56)** We'll create a rule.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=59)** We'll use the dropdown to choose Postgres 'cause it's in the dropdown here, [[PostgreSQL]], port 5432.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=68)** Our source will be anywhere IPv4.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=72)** Now again, that's not how I would set up something in production.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=75)** I would normally have the database in a private subnet and only allow world traffic through say to an application server that can talk to the database.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=83)** But for our demo, that will work just fine.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=85)** So click create security group.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=88)** Okay, now we can type RDS to go into that section of Amazon and we should see in here our preexisting MySQL RDS demo, once we click on DB instances.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=103)** So we've got our source system here still running.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=105)** Now we're going to go create database and we'll get our target system going.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=110)** All right, we'll stick with Standard Create and we'll choose Postgres under database engine.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=117)** For this, I'm going to choose a known good copy here.
>
> **[2:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=121)** One that I know works with this demo, 13.4-R1.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=125)** It's entirely likely the newer ones will work for you as you look at this in the future, but that's what I'm sticking with for now.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=133)** I'm going to go to the free tier, just like we did with the MySQL, and I'll start providing some of the identifiers here.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=140)** So we will match the convention that we used with MySQL and we'll call this psql-rds-demo for the database instance identifier and give the username as psql_rds_user.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=157)** I'll provide a password.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=159)** Hopefully you still remember the one you used for MySQL and we'll continue on down.
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=166)** Database class of db.ts.micro is just fine.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=171)** And here under storage, we can leave all those at default.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=175)** Moving on down to connectivity, we want the default VPC and the default VPC subnet group here.
>
> **[3:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=183)** You need to make a change.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=184)** Public access set to yes.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=187)** And then under choose existing security group, we'll hit the dropdown here and choose our PostgresFromWorld rule.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=198)** We can also X out the default security group that was chosen for us.
>
> **[3:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=202)** We don't have to worry about availability zone and we can scroll all the way down, leaving everything else at default and click create database.
>
> **[3:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=212)** Now, while our target is being created, there is one important step that we can take on the MySQL database.
>
> **[3:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=218)** As I said, RDS takes care of the provisioning and creating of your database whenever you stand up a new instance.
>
> **[3:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=224)** And that means a lot of the configuration parameters that you would normally have to configure on your own are taken care of by RDS.
>
> **[3:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=231)** But what if you need to override them?
>
> **[3:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=234)** We'll find out momentarily that when we want to set up continuous replication using Database Migration Service that the default parameters included in the MySQL parameters aren't good enough for that.
>
> **[4:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=245)** We need to make a kind of change.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=247)** So we'll click here into mysql-rds-demo.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=252)** Click on the configuration tab and scroll down a bit.
>
> **[4:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=255)** You'll see parameter group, default type, MySQL 8.0.
>
> **[4:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=259)** Click it and we'll be whisked away into another part of the RDS console dealing with parameter groups as you can see on the side here.
>
> **[4:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=267)** This is a list of all of the key value pairs that you as a MySQL administrator can modify to change the behavior of the database.
>
> **[4:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=276)** It's a long list and you can see that AWS has helpfully annotated what they do over here on the side.
>
> **[4:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=282)** Now, there are two parameters that we're going to need to change to make continuous replication work for us and you might be tempted to click edit parameters but this is not actually going to be effective for us because this is a default pre-built parameter set.
>
> **[4:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=296)** And if we try to save that, we'll get an error.
>
> **[4:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=298)** So cancel out of that.
>
> **[4:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=299)** Instead, go to parameter groups from the breadcrumb here and click Create parameter group.
>
> **[5:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=306)** The first thing we're asked is what parameter group to base this on.
>
> **[5:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=309)** So we'll build off the MySQL 8.0 set that's pre-selected here, and we'll give our group a name.
>
> **[5:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=316)** We'll call it mysql80 so we remember where it's based off of, _replication_group.
>
> **[5:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=326)** And this will be description of parameters suitable for continuous replication.
>
> **[5:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=332)** Click create.
>
> **[5:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=334)** No, our group name needs to contain only letters, digits or hyphens, so those underscores will not work.
>
> **[5:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=340)** We'll have to change those to hyphens.
>
> **[5:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=343)** Click Create.
>
> **[5:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=345)** Now we have a new group right here that we can click into.
>
> **[5:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=350)** Exactly the same as the default but now we can edit it.
>
> **[5:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=353)** Click edit parameters.
>
> **[5:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=355)** All right, the two parameters that we need to change are as follows.
>
> **[5:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=359)** Type up here in the search B-I-N-L-O-G, binlog_format.
>
> **[6:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=367)** This is defaulted to the value mixed.
>
> **[6:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=370)** We need to click the dropdown and change that to row.
>
> **[6:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=376)** Next, in the filter, type log_bin_trust.
>
> **[6:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=383)** And that should be enough to reveal logbin_trust_function_creators.
>
> **[6:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=388)** We're going to set this to one.
>
> **[6:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=391)** That's not strictly necessary for our replication, but it does allow replication to copy over things like functions and procedures.
>
> **[6:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=398)** So we want that to be at the one value.
>
> **[6:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=401)** All right, now click save changes.
>
> **[6:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=405)** At this point, our parameter group is saved and all we need to do now is apply it to our MySQL database.
>
> **[6:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=412)** So go back and click [[Databases]].
>
> **[6:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=414)** Click mysql_rds_demo and go up to modify.
>
> **[7:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=421)** On this page, we need to scroll down to where we can change the parameter group.
>
> **[7:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=426)** It's down here under additional configuration.
>
> **[7:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=430)** Hit the dropdown there and you see the only other MySQL parameter group, which is ours, the replication group.
>
> **[7:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=437)** Click that and scroll all the way to the bottom and click Continue.
>
> **[7:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=442)** We'll see a summary of our changes.
>
> **[7:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=444)** It should be just the parameter group and we have an option: apply during the next maintenance window or the one we want, apply immediately.
>
> **[7:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=454)** Click apply immediately and modify DB instance.
>
> **[7:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=459)** Now, the MySQL instance will go into a modifying state, which you can monitor by clicking into mysql-rds-demo, going back to configuration and watching the parameter group.
>
> **[7:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=471)** This is applying.
>
> **[7:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-setup-steps?u=76281980&t=472)** You can continue to refresh the page until this is done and then move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (16), [[PostgreSQL|Postgres]] (4), [[Amazon EC2|Ec2]] (2), [[PostgreSQL]] (1), [[Databases]] (1)
> **CLI Commands:** mysql (16), make (3), aws (2), psql (1), find (1)
> **Env Vars:** rds (9), aws (2), ec2 (2), vpc (2)
> **UI Navigation:** dropdown (5), scroll down (3), click on (2), go to (2)
> **Code Identifiers:** psql_rds_user (1), binlog_format (1), log_bin_trust (1), logbin_trust_function_creators (1), mysql_rds_demo (1)
> **Versions:** 8.0 (2), 13.4 (1)
> **Prerequisites:** set up (2), configure (1)
> **Cross-References:** earlier in (1), next video (1)

#### [DMS demo: Create replication instance](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=0)** - [Instructor] All right, continuing from the last video, we have just applied our custom parameter group to the [[MySQL]] database in RDS, and we were waiting for it to go from the applying state to complete.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=12)** And what we found is that instead the status has changed to Pending reboot.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=17)** So some database configuration changes do require a reboot and this it turns out, is one of them.
>
> **[0:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=23)** So what we're going to do is we're going to scroll up, we're going to go to actions, still under MySQL RDS and click Reboot, click Confirm and that'll start the RDS instance rebooting.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=38)** The next thing that we want to do in this demo is establish a connection between the Database Migration Service and both of the [[Databases]].
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=47)** So we'll need to make sure that this is in the available state before we do that.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=52)** Now, I do think that we're going to have time to type in Database Migration Service here at the top.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=59)** Click into that service and start up a few things while this database becomes available again.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=66)** Because the first thing that we need to do here in Database Migration Service is create replication instance.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=72)** Let's click that button.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=74)** This is going to create a host that will act as the go-between, between these two databases.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=79)** In this example, both of our databases are in AWS but they're publicly accessible.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=85)** And the way this instance is going to reach them both is through the public internet, through those public IPs that they expose to the world.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=92)** Now, in your own institution or organization you might have this database instance reach out to private IPs of both of them because maybe they're not world exposed or maybe one of them is on premises and you are talking to it through the public internet and talking to an RDS database in AWS through its private interface.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=111)** There are a lot of ways that you could do this, but for our purposes, everything's going to be talking through the public internet.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=117)** So, we're going to create this replication instance and we'll call it 'Demoreplicationinstance', something very simple.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=126)** We'll skip the friendly name, give a short description, 'A replication demo', and we can leave the instance class at default along with engine version.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=140)** We don't need multi AZ so we can choose dev or test workload and we can choose for VPC.
>
> **[2:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=147)** The only option here, which is our default VPC.
>
> **[2:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=153)** So we can have this be publicly accessible but the instance itself does not actually need to be public.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=159)** We're not going to SSH to it or anything like that, we're going to configure it from here in the AWS console.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=165)** So it's going to be able to talk out to the public internet so it can talk to both of these databases, but in itself, we can uncheck that so it's not publicly accessible.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=175)** Everything else can stay at default, click Create.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=179)** - Okay.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=180)** Demo replication instance is being built there.
>
> **[3:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=183)** You can see it's in the creating state.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=185)** You can also see that it got rid of all my capitalization.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=187)** So all those woRDS just run together in the name, but that's okay, it's still recognizable.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=192)** What we need to do at this point is create endpoints.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=195)** So before I do that, I want to make sure that the RDS database is back online.
>
> **[3:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=200)** So I'm going to come up here, I'm going to type RDS and without clicking it, I'm going to right click on RDS and open that in a new tab so we can keep an eye on it.
>
> **[3:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=210)** I'll click into my second tab here and just check the status of that MySQL by clicking on DB Instances and it looks like it's back available, so we're good to go.
>
> **[3:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=220)** Click on the first tab.
>
> **[3:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=223)** Back here in the Database Migration Service, let's click Endpoints.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=227)** We're going to tell DMS how to connect to MySQL and to [[PostgreSQL|Postgres]].
>
> **[3:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=232)** So let's create an endpoint.
>
> **[3:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=235)** This will be our source endpoint, which is going to be the MySQL.
>
> **[3:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=238)** So we'll keep that selected.
>
> **[4:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=240)** And it says, 'Select RDS instance'.
>
> **[4:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=243)** Nice little convenient thing here.
>
> **[4:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=245)** We're going to choose 'mysql-rds-demo'.
>
> **[4:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=249)** Okay, by doing that, it has pre-filled a few things for us which makes things easier.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=253)** It's got the endpoint identifier, it's got the source engine and now it wants to know how to access the database.
>
> **[4:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=261)** So instead of using AWS Secrets Manager, we are just going to type in our username and password.
>
> **[4:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=266)** So click 'Provide access information manually'.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=270)** Server name is pre-filled here, again, which is very nice, as is the username.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=275)** So all we need to do is remember our password that we set.
>
> **[4:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=280)** We can keep everything else for this demo at default, and click Create Endpoint.
>
> **[4:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=285)** The endpoint is created, but we do want to test it.
>
> **[4:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=289)** So we're going to check this check box.
>
> **[4:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=290)** We're going to go up to Actions and we're going to click Test Connection.
>
> **[4:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=295)** It's going to use our demo replication instance.
>
> **[4:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=298)** So before we do this, let's go back to replication instances and make sure that that thing is up and running.
>
> **[5:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=305)** It's still in the creating state so I'm going to let this come available before we move on.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=311)** Okay, now, if that's up and running, we can go back to Endpoints, check the checkbox next to 'mysql-rds-demo'.
>
> **[5:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=319)** Go to Actions and choose Test Connection.
>
> **[5:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=322)** Click 'Run test', and we'll wait to see whether the replication instance can reach our MySQL RDS.
>
> **[5:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=329)** Okay, now, if that says successful, let's go back to Endpoints and we'll create our Target.
>
> **[5:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=336)** Click Create Endpoint.
>
> **[5:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=338)** This time instead of Source we'll choose Target Endpoint.
>
> **[5:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=341)** And again, select RDS DB instance.
>
> **[5:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=345)** Choose the Postgres RDS from the dropdown and continue on down below.
>
> **[5:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=351)** Change this radio button to provide access information manually.
>
> **[5:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=355)** A lot of it's prefilled for us.
>
> **[5:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=356)** And type the password from your Postgres database.
>
> **[6:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=361)** Under the database name, in this case, unlike with MySQL we never specified a default database name.
>
> **[6:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=368)** We use the one that we know Postgres creates which should be lowercase Postgres, P-O-S-T-G-R-E-S.
>
> **[6:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=377)** Scroll all the way down and click Create Endpoint.
>
> **[6:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=380)** Now, once again, I'm going to click the checkbox here, go to Actions, and then choose Test connection.
>
> **[6:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=386)** Click Run test.
>
> **[6:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=389)** And now we've got a successful connection there too.
>
> **[6:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-replication-instance?u=76281980&t=392)** So in the next video, we'll use this pipeline from source to replication instance to target, to sync some data from MySQL to Postgres.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (10), [[PostgreSQL|Postgres]] (6), [[Databases]] (4)
> **CLI Commands:** mysql (10), aws (4), make (3), az (1), ssh (1)
> **Env Vars:** rds (11), aws (4), vpc (2), ssh (1), dms (1)
> **UI Navigation:** go to (3), click on (2), checkbox (2), scroll up (1), dropdown (1)
> **Cross-References:** go back to (3), in the next (1)
> **Speakers:** - [instructor] (1), - okay (1)
> **Code Identifiers:** words (1)
> **Tools:** aws console (1)

#### [DMS demo: Create and execute task](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=0)** - [Instructor] All right, now that we've got both sides of this connection working, let's head into database migration service and set up the task that will move data from our [[MySQL]] to our [[PostgreSQL|Postgres]].
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=10)** Click on create database migration task.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=14)** We'll give a unique identifier here of MySQLToPostgres.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=20)** Under replication instance we'll choose the one that we created earlier.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=24)** Scroll down and choose our source database endpoint of mysql-rds-demo and the target of psql-rds-demo.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=32)** For migration type, we have some choices.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=34)** We've got migrate existing data which is a one-time migration or migrate existing and replicate ongoing, which is what we want to do.
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=42)** We're given a warning here about the configuration that we have to do through MySQL database to make it work.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=48)** And we did these changes already to the parameter set earlier in the course, so we're good to go.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=54)** Scrolling down to task settings and we can leave this all at the default.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=58)** You can see some of the behavior that's defined including dropping tables on target.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=62)** There's some settings here related to large binary objects so if your database contains that kind of data, you may want to pay attention to the choices here or click for more info.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=72)** Scrolling down to table mappings, this is where we'll tell DMS exactly what to move from the source to the target.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=79)** Click add new selection rule.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=82)** We'll click choose schema and go to enter schema.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=85)** That creates a new input here.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=87)** The percent is a wild card, which means take everything in the database and which is what we want to do.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=92)** And source table name is also a wild card.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=95)** If we wanted, we could erase this and put in a specific table name like employees but we want everything, so we're going to keep the percent.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=103)** We also have the action to include or exclude, so you can see how you can start to build some sophisticated rules here that perhaps take the whole database, but exclude just a certain schema or a certain couple of tables, things like that.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=116)** So we'll keep that as is with the two percents and include.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=120)** Scroll down and we'll look here under task migration startup, we can choose to automatically start the task on create instead of manually running it later.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=129)** So we'll keep that as is and click create task.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=133)** Now at this point, the task is creating and soon it will go into the running state and we ought to see the results of the job.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=141)** Okay, now the migration task has changed from ready to starting to now load complete, replication ongoing which is what we want.
>
> **[2:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=150)** So let's click into the MySQLToPostgres task name and we can click on the tab that says table [[Statistics]] to see what's happened.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=159)** Now you can tell right away that putting the wild card in for the schema might have taken things a little further than we meant to because not only did we get our schema that we created adhoc in the MySQL database, we also got all of the sort of built in administrative schemas.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=175)** So you see mysql, performance_schema, I really don't need all of that.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=179)** And if we were to redo this demo we would specify just the one schema called my_database which we created earlier in the course.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=188)** So when you filter by that you can see all of the tables that we specified in the [[SQL]] that you loaded in, employees, departments, projects, all that.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=198)** They have been moved.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=199)** And so now we can take a look at the Postgres database and see what the result looks like on that side.
>
> **[3:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=206)** So over here I have installed PG admin, the client to connect to Postgres [[Databases]] and established a connection to that RDS database.
>
> **[3:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=215)** So you can see I'm already connected here and if I expand databases, I've got Postgres here.
>
> **[3:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=220)** And if I expand schemas, you see all the ones that we just saw moved over including my_database, which I can expand and I can see the tables here, all those that we just saw in the dashboard.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=233)** If I go to tools and do query tool, I can type in some SQL.
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=239)** So I can say select * from my_database.employees and I can see that the data has indeed come over.
>
> **[4:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=248)** So our migration was fully successful but this is also supposed to be an ongoing replication.
>
> **[4:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=254)** So let's head back to MySQL Workbench where we are logged in to the source MySQL.
>
> **[4:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=260)** And we're going to do one more thing here.
>
> **[4:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=262)** We're going to add a new employee.
>
> **[4:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=263)** This row right here, Scott Summers, values are 1002 for the primary key.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=270)** First name, last name, and department one.
>
> **[4:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=272)** I'm going to run that as well as the commit which inserts one row over here and now back in the Postgres database, I'm going to see if I get a 15th row here.
>
> **[4:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-demo-create-and-execute-task?u=76281980&t=286)** And as you can see, that is some really quick replication by the database migration service between the source, MySQL database and the target Postgres database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (8), [[PostgreSQL|Postgres]] (6), [[SQL]] (2), [[Databases]] (2), [[Statistics]] (1)
> **CLI Commands:** mysql (8), psql (1), make (1)
> **UI Navigation:** click on (2), scroll down (2), go to (2)
> **Code Identifiers:** my_database (3), performance_schema (1)
> **Env Vars:** sql (2), dms (1), rds (1)
> **Cross-References:** earlier in (2)
> **Definitions:** is a  (2)
> **Warnings:** warning (1)

#### [DMS teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=0)** - [Instructor] Okay, wrapping up from the previous video we're looking at our database migration task and it's time to clean things up.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=7)** That way we won't see any unexpected charges on our monthly AWS bill.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=12)** So we're still here looking at the task, the [[MySQL]] to [[PostgreSQL|Postgres]] task, and the first thing we want to do is go up to Actions and choose Stop.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=21)** That'll stop the replication from running.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=25)** And if you refresh, you see it goes into a stopping phase and after a moment it will be stopped.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=31)** Okay, now we can go to Replication Instances and delete this replication instance.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=38)** These are like [[Amazon EC2|EC2]] instances but they don't show up in the EC2 section of AWS.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=43)** So you got to make sure to delete it from the database migration service.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=47)** Check the checkbox, go up to Actions, and choose Delete.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=51)** Click the button to confirm and we see that we have failed to delete.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=56)** So this may mean that we still have some tasks running, something that's keeping this thing from being deleted.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=63)** Let's have a look here.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=65)** We'll look at Database migration tasks.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=67)** This one is stopped, but I believe we need to delete it.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=70)** So let's check that check box.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=72)** There we go.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=72)** Go to Delete, delete that.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=77)** And when that's gone we should be able to go take care of the instance.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=82)** Okay, the task is gone so let's head back to Replication instances.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=86)** Check the checkbox again, Actions, and then Delete.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=90)** Confirm with a button.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=92)** And now we've got deletion in progress, so that's good.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=95)** We've still got our end points here.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=97)** These will not incur any costs.
>
> **[1:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=99)** They're just definitions, but you can delete them if you want to by checking both of them, going to Actions, and choosing Delete.
>
> **[1:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=106)** Now, the things that we do still have around that will incur cost are over in RDS.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=111)** Type RDS.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=112)** Choose the first option here and I'm going to start with our Postgres database.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=119)** So I'll click DB instances.
>
> **[2:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=122)** Check the psql-rds-demo.
>
> **[2:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=125)** Go up to Actions and choose Delete.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=129)** I do not want a final snapshot.
>
> **[2:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=130)** Keeping a snapshot around would incur some charges and I don't really care about the data that's in this database, so I'll uncheck that and I will uncheck Retain automated backups which causes a new check box to appear that says "I acknowledge that I will lose all this data," and that is just fine.
>
> **[2:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=147)** I'll type, "delete me" to confirm and click Delete.
>
> **[2:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=152)** Now the Postgres database is deleting itself and that will be taken care of in just a few minutes.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=157)** Now, if you'd like, you can go ahead and do the same to the MySQL database, but if you're following along this course, there is still a use for it yet, so you can either keep it around or perhaps even put it to sleep for a little while.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=170)** But if you're all done, go ahead and delete it.
>
> **[2:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/dms-teardown?u=76281980&t=172)** Otherwise keep it and you'll see it again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PostgreSQL|Postgres]] (3), [[MySQL]] (2), [[Amazon EC2|Ec2]] (2)
> **CLI Commands:** aws (2), mysql (2), make (1), psql (1)
> **Env Vars:** aws (2), ec2 (2), rds (2)
> **UI Navigation:** go to (2), checkbox (2)
> **Cross-References:** previous video (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [AWS SFTP service](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=0)** - [Instructor] Even with all the great cloud native AWS storage and transfer options we've discussed in this course, you're still going to run into systems, be it with a vendor or in your own backyard that rely on SFTP.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=12)** AWS transfer for SFTP is a service that acknowledges that SFTP processes still make a lot of the world go round, but provides a way to make those workloads easier to manage.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=24)** Many IT organizations have plenty of processes that look like this.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=29)** A vendor generates a daily batch file of data updates, which it sends to an SFTP endpoint owned by the organization.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=36)** The organization must then implement scheduled jobs, which monitor the SFTP system for new files and processes.
>
> **[0:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=44)** In this example, incoming data is parsed and stored in a relational database.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=49)** There's a definite maintenance overhead to this process.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=53)** The SFTP endpoint, probably a [[Linux]] server, must be patched regularly and hardened for security.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=59)** It is after all world exposed so that the vendor can reach it.
>
> **[1:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=64)** For each additional job that mirrors this pattern, say another vendor integration, the receiver must either create another SFTP endpoint or configure the existing one to accept another incoming connection.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=76)** Often this means creating a unique login for each vendor, along with unique destination directories for their files.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=84)** After all, you don't want different companies sharing the same password or file space, potentially collaborating each other's data or accidentally exposing information.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=93)** Then there's the question of availability.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=96)** Creating a horizontally scalable SFTP endpoint is likely more trouble than you'd prefer to take on for something like this.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=103)** So instead, you have a single point of failure, the host or instance on which the SFTP service runs.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=110)** If it goes down, the whole pipeline stops.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=113)** Finally, consider durability.
>
> **[1:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=115)** This SFTP service may be using some remote storage, such as an NFS mount, but it's often just using its own local drive.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=123)** If it's an [[Amazon EC2|EC2]] instance, perhaps EBS storage.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=127)** As with availability, the cost and complexity of building the system for high durability is significant, so a failure not only means the pipeline is down, it may mean you've lost data.
>
> **[2:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=138)** These are the challenges that AWS transfer for SFTP is meant to solve.
>
> **[2:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=144)** With this service, you can spin up managed SFTP endpoints backed by S3 storage.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=149)** Combining a managed service with an S3 backend means the resulting system is highly available, auto scaled, and extremely durable.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=157)** In fact, the setup of AWS transfer for SFTP is so closely tied with S3, that's rather useful to think of yourself as configuring an SFTP access point to one or more S3 buckets.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=170)** You start by creating a bucket and an IM role with an attached policy that can access it.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=175)** If you wish to restrict users to a certain folder path in the bucket, say because you're going to share this bucket as the backend for multiple vendors, you can go ahead and create that folder.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=185)** Your role policy can be tailored to allow only this path.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=188)** An AWS transfer for SFTP can be configured to make sure that's where the user's files go.
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=194)** We then create an SFTP endpoint and add a user to it.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=199)** When we add the user, we associate the user with a bucket, a roll for the bucket, and optionally a folder path.
>
> **[3:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=206)** Then when the user connects to the SFTP endpoint using an SSH key, they're actually interacting with that bucket via the roll through SFTP.
>
> **[3:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=216)** If you add another user to the SFTP endpoint, you can have that person/account use another folder on the same bucket, or you can actually use an entirely different bucket.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=227)** This leads to some interesting potential [[Design Patterns]].
>
> **[3:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=231)** You can support many different use cases with just one endpoint.
>
> **[3:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=234)** Then use bucket and bucket policies to lock things down appropriately.
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=239)** This team of users here can access the endpoint and have their data routed to individual folders on their team bucket.
>
> **[4:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=246)** While these cloud vendors get accounts that map to their own distinct buckets, securely separated from the others not only by their own IM policies, but by the boundary of the bucket itself.
>
> **[4:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=257)** So, AWS transfer for SFTP allows you to take advantage of S3 in some new and interesting ways.
>
> **[4:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-service?u=76281980&t=265)** Let's go into the console and see how to build one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Amazon EC2|Ec2]] (1), [[Design Patterns]] (1)
> **Env Vars:** sftp (20), aws (6), nfs (1), ec2 (1), ebs (1)
> **CLI Commands:** aws (6), make (3), ssh (1)
> **Prerequisites:** configure (1), setup (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [AWS SFTP prerequisites](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=0)** - [Instructor] Okay.
>
> **[0:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=1)** Our goal is to create an SFTP endpoint using AWS Transfer for SFTP.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=7)** Before we can do that, we need a few other resources first, starting with the S3 bucket that will serve as the backend storage.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=15)** Let's go to the search bar, type S3, and then click into that service.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=21)** On the next page, choose Create Bucket.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=25)** Go ahead and click that and we'll give the bucket a name.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=29)** I'll call it Vendor Dropbox Demo and then append my initials to ensure uniqueness.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=36)** Head on down.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=38)** We will block public access.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=40)** We'll leave that option at default.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=43)** Keep going.
>
> **[0:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=44)** Leave everything else as is and click Create Bucket.
>
> **[0:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=48)** Okay, now I've got the Vendor Dropbox bucket.
>
> **[0:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=50)** I'll click into it.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=54)** And I'm going to click the Create Folder button.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=57)** We'll just call this My Folder.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=60)** And the purpose of this is to be the destination for all the files that will be dropped here by the SFTP user.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=67)** That way, if we ever wanted to create a different SFTP endpoint using this same bucket we could route those files to a different subfolder and have separation between the two.
>
> **[1:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=78)** Okay.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=79)** The last thing that I'm going to do before we leave this bucket is go to properties and copy the ARN, the resource name of this bucket.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=90)** This button here will copy the ARN to my clipboard.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=93)** Okay.
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=94)** Now, the next thing that we need to do is head into the IAM section because we need to create a policy that will allow our SFTP user that we're going to create the ability to work with this bucket.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=107)** Let's go up to the search bar and type IAM for Identity and Access Management.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=112)** Click the first option there.
>
> **[1:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=115)** And we're going to create a policy and then assign that policy to a role.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=119)** Policies are definitions that grant certain permissions and once you assign those to roles, roles can be assigned to users or services.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=129)** So, the policy defines what someone can do.
>
> **[2:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=132)** It's loaded up into a role, and the role is assigned to a user or service.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=137)** Click Policies.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=140)** Okay, we're going to create policy.
>
> **[2:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=143)** On this screen, we have a wizard that will walk us through the steps of creating a policy, or we can click this tab and edit [[JSON]] directly.
>
> **[2:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=153)** Before we do anything here, click your [[Cursor]] into the JSON, create a few lines here, and paste that ARN of the S3 bucket.
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=162)** That way we've got it handy in just a moment.
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=166)** Now over here on the terminal, I've opened up one of our exercise files.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=170)** This is in the Chapter 5 subfolder and it's called sftp_demo_policy.json.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=177)** Copy that whole thing from bracket to bracket.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=181)** Head back to the editor, delete the existing JSON and paste this in.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=187)** Let's take a look at what's going on here.
>
> **[3:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=189)** This JSON defines an IAM policy and it has two statements.
>
> **[3:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=194)** You see this here?
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=195)** We've got an array with two statements inside.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=199)** The first one has an effect of allow which refers to two actions.
>
> **[3:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=204)** GetBucketLocation from S3 and ListAllMyBuckets.
>
> **[3:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=209)** It's applied to resources, AWS, S3, *, which means that the recipient of this policy will be able to do these two actions on every single bucket in the account.
>
> **[3:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=222)** The second statement has the Sid AllowSpecificBucket.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=227)** The Sid is a bit like a description.
>
> **[3:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=230)** It has no actual impact as to the effect of the policy but it works a bit like a code comment.
>
> **[3:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=235)** So, we can see here from the Sid that the intention is to allow privileges on one specific bucket, and you do see the effect is Allow and the action is S3*, meaning every possible S3 action will be applied to this resource.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=253)** So, this is the part of the policy that will let our user do everything it needs to do in terms of writing to our bucket.
>
> **[4:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=260)** So, now's the time to copy this ARN.
>
> **[4:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=265)** Go up here, fully copy what's in between the two quotes here and overwrite it.
>
> **[4:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=271)** We'll do the same on the next line.
>
> **[4:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=273)** Making sure to leave the /* at the end so that this policy will allow writing to any subfolder of this bucket.
>
> **[4:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=282)** Finally, we want to delete the pasted ARN here at the bottom.
>
> **[4:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=286)** Get rid of the white space.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=288)** Check over our JSON to make sure we haven't left any unterminated double quotes or commas out and click Next Tags.
>
> **[4:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=297)** Here, we don't need to create any tags, so we'll click Next Review.
>
> **[5:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=302)** Let's give this policy a name.
>
> **[5:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=303)** We'll call it SFTP Reader Policy.
>
> **[5:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=308)** And in the description, we'll say, "Allows Access to our SFTP Backend Bucket."
>
> **[5:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=317)** Click Create Policy.
>
> **[5:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=320)** Okay.
>
> **[5:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=321)** In the next step, we'll create a role which will be the vehicle for this policy.
>
> **[5:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=326)** The role can be assigned again to a user or service.
>
> **[5:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=330)** Click Create Role.
>
> **[5:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=333)** Okay.
>
> **[5:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=334)** Our trusted entity type will be an AWS service.
>
> **[5:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=338)** In this case, it'll be the transfer service.
>
> **[5:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=340)** So, we'll go down here to the dropdown and do a little type ahead, and we can choose Transfer.
>
> **[5:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=347)** Click the checkbox next to that, and that's all we need to do on this screen.
>
> **[5:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=352)** Click Next.
>
> **[5:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=354)** Next, we want to attach the policy that we just created.
>
> **[5:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=357)** So up here in the filter, we can start typing SFTP, hit Enter, and there you see it, SFTP Reader Policy.
>
> **[6:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=365)** Check the checkbox next to it, then click next.
>
> **[6:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=371)** Finally, we'll give the role a name.
>
> **[6:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=373)** We'll call it SFTPS3AccessRole.
>
> **[6:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=378)** And for the description, we can leave what's there, but also say, "Allows SFTP Transfer to access our S3 backend bucket."
>
> **[6:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=391)** Review everything below, then click Create Role.
>
> **[6:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=395)** We've made our description too long or somehow otherwise violated what can go into the description here.
>
> **[6:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=403)** So, I will just backspace over this description, leave what was there to begin with and click Create Role.
>
> **[6:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=410)** Okay.
>
> **[6:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-prerequisites?u=76281980&t=411)** Now we have the role, and in the next video, we'll go ahead and create the SFTP endpoint that will use all these pieces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6)
> **Env Vars:** sftp (11), arn (5), json (5), aws (3), iam (3)
> **UI Navigation:** go to (2), checkbox (2), dropdown (1)
> **CLI Commands:** aws (3), make (1)
> **Definitions:** refers to (1), means that (1), is a  (1)
> **Cross-References:** in the next (2)
> **File Paths:** sftp_demo_policy.json (1)
> **Code Identifiers:** sftp_demo_policy (1)

#### [Create an SFTP endpoint](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=0)** - [Instructor] Okay, in this video we're going to create the SFTP endpoint.
>
> **[0:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=4)** Let's go up here to the search bar and type SFTP.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=8)** AWS has expanded the transfer service to include more functionality, so it's now called AWS Transfer Family.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=15)** Go ahead and click into there.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=17)** And on this screen, we'll choose Create Server.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=21)** SFTP is already populated for us, so we'll keep that as is.
>
> **[0:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=24)** And you can see some of the other protocols that are now supported by the service.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=28)** Click next.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=31)** Our identity provider for this server will be service managed, basically meaning that we will be creating user accounts within the AWS transfer part of the console.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=40)** This is not to be confused with your root account user or any IAM users that you might create.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=46)** These users will only have access to the SFTP endpoint and nothing else in your account.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=52)** If you want to choose one of the other options, you could bring your own identity provider, like Okta or Auth0.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=59)** Click Next.
>
> **[1:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=61)** Our endpoint, in this case, is going to be publicly accessible.
>
> **[1:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=64)** That's easiest for the demo, but in a production instance, you might want to go with a VPC hosted and create something that is accessible through a private network interface.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=74)** Custom host name, we won't worry about.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=76)** We will just let the AWS transfer service create a domain name for us.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=81)** Click next.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=84)** Okay, our domain, the backend can be S3 or EFS.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=88)** We're going with S3, so click next.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=92)** CloudWatch logging.
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=94)** We'll let the service create a new role for us through this wizard.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=98)** We can leave this next option as default, as well as the server host key.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=104)** Skip over tags and manage workflows and just go click next.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=112)** All right, look everything over and confirm by clicking Create Server.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=118)** Okay, it's going to take a few moments for the endpoint to come online, and while it's doing that we can go ahead and create a user for this endpoint.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=126)** Hit the check box right here, then go up to Add user.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=133)** All right, we're going to give this a name like SFTP Demo User, with underscores there.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=140)** And for the role, we will choose the SFTP role that we created earlier.
>
> **[2:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=144)** So you can start typing here.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=145)** And you can see SFTP S3 Access Role.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=149)** That's the one we created.
>
> **[2:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=151)** You see the transfer service endpoint is a bit like a conduit that connects this user to the S3 bucket.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=157)** So that user needs to be able to use this role to talk to S3.
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=162)** All right, we're not going to do any additional scoping of the policy, so that can stay as none.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=168)** And as to home directory, click the drop down here and we'll choose the bucket first and then type my folder, which was the name of the sub folder that we created in that bucket.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=181)** This, basically, establishes the user's home directory in the SFTP endpoint that's going to exist but this folder needs to be preexisting when we make this choice here, which is why we created it earlier in the course.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=195)** Okay, SSH public keys.
>
> **[3:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=197)** This user is not going to use a username and password.
>
> **[3:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=201)** Instead, much like when we log into an [[Amazon EC2|EC2]] instance, it's going to use an SSH key.
>
> **[3:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=207)** So unlike with S3, that would generate keys for us, we're going to need to do this on our own.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=213)** So I'm going to head back to my Mac terminal here and we're going to use a command called ssh dash keygen.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=221)** You might be familiar with using this for other purposes, such as creating a key for [[GitHub]] access.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=227)** We'll say ssh keygen dash T RSA, which is the type of key that we want to create, dash B, which is the number of bytes that we want this key to be in size, we'll say 4096 and dash capital C, which expects an email address.
>
> **[4:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=245)** Now, this doesn't need to actually be a functioning email address, it's more like a label, so I'll just give it something fake here, Brandon at domain dot com.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=253)** And hit enter.
>
> **[4:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=256)** Now, it's generating my key pair and it asks if I want to save it as a particular file name here, ID RSA, which I don't, but I do want to save it in the same location.
>
> **[4:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=266)** So I'll paste that beginning part of the path and give this a different name.
>
> **[4:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=270)** We'll call this SFTP Demo Key.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=275)** Hit enter.
>
> **[4:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=276)** Now here, we're asked for a passphrase.
>
> **[4:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=278)** Do not put anything here, just hit enter.
>
> **[4:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=281)** And hit enter again to confirm that there's no passphrase.
>
> **[4:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=285)** And now ssh keygen has created a key pair for us.
>
> **[4:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=290)** Here in this folder, we can do an LS on SFTP, hit tab, and then star and you can see that we've got two files here.
>
> **[5:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=300)** SFTP demo key and SFTP demo key dot pub.
>
> **[5:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=304)** The first is the private key, the second is the public key.
>
> **[5:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=308)** It's that public key that AWS wants us to paste in now.
>
> **[5:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=312)** So I'll cat that out, and you can see the contents and I could just copy this with my [[Cursor]], but to make sure that I've got everything and don't miss any characters, I'm going to use the pbcopy command.
>
> **[5:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=326)** So I'll cat that out again, but instead of hitting enter I'll do a vertical pipe and then pbcopy, which will place the contents onto my clipboard.
>
> **[5:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=334)** Now, I can go back to AWS and paste that in.
>
> **[5:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=340)** Okay, I don't think I need any tags here, so I'll go ahead and click add.
>
> **[5:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=345)** And now we've got both a user and a server.
>
> **[5:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-an-sftp-endpoint?u=76281980&t=348)** In the next video, we'll see how we can use these to connect via SFTP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1), [[GitHub]] (1)
> **Env Vars:** sftp (13), aws (6), ssh (2), rsa (2), iam (1)
> **CLI Commands:** aws (6), ssh (5), make (2), cat (2), ls (1)
> **Cross-References:** earlier in (1), go back to (1), in the next (1)
> **Tools:** terminal (1), github (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Send data to S3 using AWS SFTP](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=0)** - [Narrator] Okay.
>
> **[0:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=1)** Now that our SFTP endpoint is online, let's try to interact with it with a user that we just created.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=7)** For that, we're going to need an SFTP client and I've downloaded one called Cyber Duck which you can find at [cyberduck.io](https://cyberduck.io).
>
> **[0:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=16)** This client is available for Mac or [[Windows]] so no matter your platform you should be able to follow along if you like.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=22)** Let's click Open Connection and then make sure that we change this to SFTP.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=28)** If that's not already the default.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=31)** We need to type in the URL of the server which we can get back at AWS by clicking the server ID and copying the endpoint right here.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=40)** This thing that looks like a url and we can paste it right here, keep port at 22.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=46)** And then for username we'll type SFTP underscore demo underscore user.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=52)** Now, we won't use a password because as we just said we'll use SSH key authentication.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=57)** So for the private key, if you saved your key in the right place, you should find SFTP demo key.
>
> **[1:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=64)** They're waiting for you.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=66)** Otherwise, you'll need to navigate to the location where you used SSH key gen to make your public and private key.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=72)** Just make sure for this, that you choose the private key as that is what is going to get us into the SFTP server.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=79)** To do that, let's click connect.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=81)** Okay, I've established a connection here.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=84)** If this is your first time connecting to the SFTP service you may also be asked to accept a fingerprint much like you do when you first log into an [[Amazon EC2|EC2]] instance.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=93)** Just click allow and go on through.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=95)** All right.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=96)** Now here I am at the root of the SFTP endpoint.
>
> **[1:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=99)** You can see that I have the bucket name right here the S3 bucket name, followed by my folder which means I'm in the home folder of this SFTP demo user.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=111)** Now, from here, I can upload, download, delete and do all the file interactions that I might want to do with any SFTP endpoint.
>
> **[1:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=119)** And to demonstrate I've got this AWS logo file sitting right here.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=123)** I'm just going to drag and drop that onto the surface.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=128)** And with the upload complete, I'm done.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=131)** To verify if this worked, let's go back to AWS.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=135)** Go to S3, click the link, find our Dropbox bucket, click into it, then my folder, and there it is, AWSlogo.PNG.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=149)** So that file made its way all the way through from the SFTP endpoint to the bucket.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/send-data-to-s3-using-aws-sftp?u=76281980&t=154)** So you can see how using AWS transfer for SFTP you can create an SFTP endpoint that behaves like any other you've ever used, but that's backed up by the durability and availability of S3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** sftp (13), aws (4), ssh (2), url (1), ec2 (1)
> **CLI Commands:** aws (4), find (3), make (3), ssh (2)
> **UI Navigation:** drag and drop (1), go to (1)
> **URLs:** [cyberduck.io](https://cyberduck.io) (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [AWS SFTP teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=0)** - [Instructor] Okay, let's go ahead and clean up the resources we created with the SFTP demo.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=5)** Click into AWS Transfer Family.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=8)** We'll start by deleting the SFTP endpoint.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=12)** Here it is. Click the checkbox next to it.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=14)** Go up to Actions, and choose Delete.
>
> **[0:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=18)** Confirm by typing delete, and click the Delete button.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=21)** That'll take the endpoint away along with the users that were created underneath it.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=26)** Next, let's go visit CloudWatch.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=30)** Click the first result, CloudWatch, and we'll see the logs that were generated by this SFTP activity.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=36)** Expand logs, and go to Log groups.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=40)** And you'll see one here for the AWS transfer service along with a few log entries that were created by the activity that we just did.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=49)** Go up to Actions, and you can Delete log group.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=55)** Next, we'll go to S3, and we'll delete the bucket associated with the dropbox.
>
> **[1:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=61)** Click vendor-dropbox.
>
> **[1:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=64)** First hit Empty.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=66)** Type permanently delete to empty out the bucket.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=73)** Once that's successful, hit Exit.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=75)** Highlight again and choose Delete.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=80)** Copy the bucket name to confirm, paste it in the box, and click Delete bucket.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-sftp-teardown?u=76281980&t=85)** Okay, we have now cleaned up everything associated with our SFTP demo, and that should make sure that you don't incur any additional charges from that exercise.

> [!info]- Semantic Content
>
> **Env Vars:** sftp (4), aws (2)
> **CLI Commands:** aws (2), make (1)
> **UI Navigation:** go to (2), checkbox (1)
> **Speakers:** - [instructor] (1)

#### [AWS DataSync](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=0)** - [Narrator] Throughout this course, we've talked about a few different ways to send and sync data to the cloud.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=5)** If you've tried this on your own you know that you can be subject to the whims of the network between your source and destination.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=11)** It's vital to have a tool that can not only maintain a high level of throughput but also one that's resilient and can handle interruptions along the way.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=19)** That is the purpose of AWS DataSync.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=22)** It can take data from locations inside or outside of AWS and get them to the cloud reliably and quickly, pulling from sources like NFS, CIFS, or [[Hadoop]] file systems.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=33)** It can be run ad hoc or set up on a schedule where it will sync new files as they appear in your source.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=39)** Your destinations can be any one of the FSx file system types, an S3 bucket or an EFS file system.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=47)** A common use case would be to get data from a location in your on-premises data center into the cloud.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=53)** In this case, you'd run an agent VM locally close to the data, for this, Amazon provides images to build the agent in VMware, KVM and HyperV variants.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=65)** DataSync can also be configured to move data from object storage in other clouds namely [[Microsoft Azure|Azure]] files or GCP storage buckets.
>
> **[1:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=74)** Another supported use case is transferring between AWS services, perhaps across regions.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=80)** This method requires no agent at all.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=82)** Nice.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=84)** Since we can try this using only the AWS account we've been using for the course that will be the subject of our DataSync demo.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=91)** We're going to move data from an EFS to an S3 bucket.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=96)** To show that I've set two things up in advance, an EFS file system with some data in it and an S3 bucket to act as the destination.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=105)** That'll be our good old demo primary bucket.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=109)** Then to move the data requires just two steps.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=112)** First, we'll define the source and destination locations in the DataSync console.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=116)** Then we'll create a DataSync task that moves data from EFS to S3.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync?u=76281980&t=120)** Let's head to the console and try it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hadoop]] (1), [[Microsoft Azure|Azure]] (1)
> **Env Vars:** aws (4), efs (4), nfs (1), cifs (1), kvm (1)
> **CLI Commands:** aws (4)
> **Speakers:** - [narrator] (1)

#### [Move data with AWS DataSync](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=0)** - [Instructor] Okay.
>
> **[0:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=1)** Our goal here is to move data from EFS to S3 using AWS DataSync.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=7)** To show that I've logged into an [[Amazon EC2|EC2]] Instance that have stood up here with an EFS file system mounted.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=13)** If you want to replicate this, you'll remember that we did this back in Chapter 3 so you can go back and follow those instructions.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=21)** In here, I've got a little bit of data, and this is replicated from the way that we set up the data for demonstrating S3 [[CLI]] syncs back in the beginning of this chapter, second chapter of Chapter 5.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=36)** So, you'll see that we've got one large file called big file and a folder with many small files.
>
> **[0:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=42)** These are in Chapter 5 of the exercise files but there's also a Ruby script in there that will generate them for you if you would like to do it that way.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=51)** All right, so we've got our EFS and we've got some data.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=54)** Our destination is here in S3, our demo bucket, which has a few objects in it already and we'll create a subfolder in the course of syncing data over for all the EFS data to land.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=66)** All right, let's use the search bar to head to the DataSync section of AWS.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=73)** To get started here, we choose a use case between on-premises and AWS or between AWS storage services.
>
> **[1:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=80)** We're doing the latter, so we'll click that and go right into the wizard.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=84)** This is going to walk us through a few steps.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=86)** If you expand the menu over here, you'll see some of the things that we mentioned in the slides about setting up locations or agents, but we'll just walk through it.
>
> **[1:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=95)** We'll create a new location for the source.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=98)** That will be an EFS file system.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=101)** The region is wherever you set up your EFS.
>
> **[1:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=103)** Mine is in us-east-1 so the dropdown will show the EFS I called DataSyncDemo.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=110)** So for mount path, this is not to be confused with the directory that we use to mount the EFS on our EC2 Instance, so it's not /EFS.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=120)** I want to just refer to the root of the EFS file system, so that'll be a slash.
>
> **[2:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=126)** As for subnets, I'm going to choose one where I know I can reach the EFS from.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=134)** Remember, if you follow those directions, all of your access points in the EFS should have a security group on them that allows NFS from anywhere in the VPC.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=145)** And I'm going to choose that security group right here.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=149)** Before we do that, I'm going to choose in-transit encryption TLS It's a little surprising actually that this would not be a default option.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=157)** You always want to have your data encrypted in transit when you're making a move like this, especially over the public internet, which we're doing in this demo.
>
> **[2:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=166)** The two optional settings here can stay at their default and then we click next.
>
> **[2:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=172)** All right, now we are setting up the destination.
>
> **[2:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=174)** So, we'll create new location.
>
> **[2:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=176)** We'll choose S3.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=179)** The region where your bucket is.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=181)** And I'll select the bucket in this dropdown.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=185)** Storage class is Standard and the folder, we can create here.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=188)** So, I'm going to call this datasync-demo.
>
> **[3:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=193)** For the IAM role, click the Auto Generate button, which I've already done so you can see an IAM role name there.
>
> **[3:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=200)** Once it's generated, go ahead and click Next.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=203)** And now we've got two locations.
>
> **[3:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=204)** We'll create the task.
>
> **[3:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=207)** We'll call this DataSyncDemo and take a look through the options here.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=213)** You can see that there is a step here where data sync will verify that the data was transferred correctly.
>
> **[3:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=220)** You can see, you can choose here whether to scan the entire source for all files or if you want to drill down into certain locations.
>
> **[3:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=226)** We'll keep those at default.
>
> **[3:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=228)** I'll not put this on a schedule, but of course you can set up any schedule you'd like, including a custom schedule to sync this data as often as you want.
>
> **[3:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=236)** For us, we'll kick it off manually.
>
> **[3:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=239)** No tags necessary and we do want the default CloudWatch logging going on here, so keep that at default and click next.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=247)** All right, scroll down, review your choices and click Create Task.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=252)** Now, we didn't give this a schedule, so as soon as task status is available, go up here to start and click Start With Defaults.
>
> **[4:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=260)** That'll change the task status to running, and if we want we can click See Execution Details here.
>
> **[4:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=267)** So, we're in a launching phase now and in a few moments this will be complete.
>
> **[4:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=273)** Okay, now we have a success message.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=275)** So, let's head into S3 and see the result.
>
> **[4:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=279)** I'll click into our bucket here and we see the subfolder datasync-demo and all of our files in here.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=288)** Now, if we had made this into a scheduled data sync job it would continue to run on that schedule and like the sync command and S3's CLI, it would recognize the changes as they're made.
>
> **[4:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=299)** It doesn't re-sync all the files.
>
> **[5:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=300)** It just looks for things that have changed since the last run.
>
> **[5:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=304)** So, whether you are coming from an on-premises file system or from another [[Cloud Storage]] provider, or from another service in AWS, DataSync is a really great way to move files around.
>
> **[5:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=317)** It runs things in parallel as much as possible.
>
> **[5:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=320)** It's high performing.
>
> **[5:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=321)** It handles interruptions and blips in the network.
>
> **[5:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=324)** Works very well.
>
> **[5:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/move-data-with-aws-datasync?u=76281980&t=325)** Just another great way to get data into the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[CLI]] (2), [[Cloud Storage]] (1)
> **Env Vars:** efs (12), aws (5), ec2 (2), cli (2), iam (2)
> **CLI Commands:** aws (5), ruby (1)
> **UI Navigation:** dropdown (2), select the (1), scroll down (1)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (2)
> **Cross-References:** we mentioned (1)
> **Exercise Files:** exercise files (1)

#### [AWS DataSync teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=0)** - [Instructor] Okay, picking up from the last video, we'll do our cleanup here.
>
> **[0:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=4)** So here in the demo-bucket, you can delete everything from here and then delete the bucket.
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=10)** But this bucket continues to be used in the course, so I'm going to keep it around.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=13)** And we'll go ahead and check just this check box here, and click Delete to get rid of the datasync-demo folder.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=21)** I'll confirm by typing, delete, and click the Delete objects button.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=26)** From here, I'll head back into DataSync.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=31)** So all I need to do here is highlight the task, go up to Actions, and then Delete, which I can confirm, and then go to Locations, highlight and delete both of those.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=45)** None of these definitions really incur any charges, but it's good to kind of clean things up.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=51)** As for the pre-setup steps, I can go in here into [[Amazon EC2|EC2]].
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=57)** I can delete the instance or terminate the instance is the right phrase for that.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=62)** I'll highlight, I'll go to Instant state, Terminate, confirm and then I'll also head over and clean up the EFS by going to that section, highlighting and then choosing Delete.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=76)** I have to copy the name of the file system here, the ID of it, paste it, and click Confirm.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-datasync-teardown?u=76281980&t=83)** And so with that, we will have cleaned up everything that we created with the DataSync demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1)
> **Env Vars:** ec2 (1), efs (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 6. Moving Data in AWS

[↑ Back to Table of Contents](#table-of-contents)

#### [AWS Glue overview](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=0)** - [Instructor] AWS Glue is a fully managed serverless [[Data Integration]] service based on [[PySpark]], the [[Python (Programming Language)|Python]] implementation of [[Apache Spark]].
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=9)** With Glue, you design data flows by connecting sources to targets with transformations in between.
>
> **[0:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=16)** The Glue wizard and GUI help you define these jobs which generate PySpark code.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=21)** If you're already familiar with Python and Apache Spark, you'll be right at home.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=26)** If not, Glue can get you started by proposing designs for some simple ETL jobs.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=31)** Because Glue is serverless, although you pay for the resources consumed by your running jobs, you never have to create or manage an [[Amazon EC2|EC2]] instance.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=40)** Another core feature of Glue is that it maintains a [[Metadata]] repository of your various data schemas, this could be relational table schemas, the format of a delimited file, and more.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=53)** Although it is sometimes confusing, Glue calls these metadata repositories [[Databases]].
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=58)** You can define the schema in one of two ways, first, you can manually enter it, this would involve you typing the name of each data column or field, then specifying its type and data width.
>
> **[1:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=69)** Alternatively, Glue can search your data sources and discover on its own what data schemas exist.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=76)** To do this, you must define what's called a crawler.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=79)** Crawlers can read from S3, RDS, or a [[Java Database Connectivity (JDBC)|JDBC]] source.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=84)** They can discover table schemas, but do not discover relationships.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=89)** And they can be scheduled to update themselves over time.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=92)** With crawlers keeping your metadata up to date, mapping source data to destinations becomes fairly straightforward.
>
> **[1:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=99)** Keep in mind that existing jobs are not automatically aware when schemas change and may need to be refreshed.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=107)** Jobs can be triggered on a schedule such as daily or monthly on completion of another job where we chain dependent jobs or on demand.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=117)** Finally, a few caveats with Glue.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=120)** Unlike many popular ETL packages, it has no third-party connectors.
>
> **[2:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=124)** You're not going to be connecting to Salesforce out of the box with Glue.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=128)** As I mentioned earlier, when schemas change, you'll need to update the jobs that use them.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=133)** Chaining dependent jobs is possible, but job chaining is not easy to visualize once it's built.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=140)** Finally, the wizard and GUI are really only suitable for very simple jobs, after that, you'll be writing Python.
>
> **[2:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-overview?u=76281980&t=147)** With that said, let's get into Glue and see what it can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Metadata]] (3), [[PySpark]] (2), [[Apache Spark]] (2), [[Data Integration]] (1)
> **Env Vars:** gui (2), etl (2), aws (1), ec2 (1), rds (1)
> **CLI Commands:** python (3), apache (2), aws (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [AWS Glue: Create an S3 metadata crawler](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=0)** - [Instructor] In this demo, we're going to create a job using AWS Glue that moves data from a CSV stored in S3 to a table in our [[MySQL]] database.
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=10)** If you didn't keep or create the MySQL demo from earlier in this course, you can do so by reviewing the chapter four video called Create a MySQL RDS Instance.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=21)** In addition, we're going to need an S3 bucket.
>
> **[0:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=23)** If you've still got the demo primary bucket from back in chapter two, that's perfect.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=28)** Otherwise, take a moment to create a new one with the same default configuration that we used in that chapter.
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=35)** I'm going to go into S3 and into my demo bucket, where I've got a file called states.csv.
>
> **[0:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=44)** This exists in the chapter two folder of the course exercise files.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=49)** And it looks like this.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=51)** Very simple, we've got the name of the state, the abbreviation, the year it became a state, the capital, a few other bits of information here, and that's it, just a couple of columns, a row for each one of the 50 states.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=65)** Okay, so make sure that that's in your bucket.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=67)** And now, let's go to the search bar and type Glue.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=72)** We'll go here to AWS Glue, and on the next page, instead of clicking Get Started, we'll come over here to Crawlers.
>
> **[1:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=81)** Okay, we're going to create a crawler that will look at our S3 bucket and identify the schema of all the files inside.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=90)** So click Create Crawler.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=93)** We'll call this DemoCrawler.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=97)** First, it'll examine the S3 bucket, and then later in this part of the course, it'll look at an RDS database.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=104)** Go ahead and click Next.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=107)** We're asked, is the data already mapped?
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=109)** And the answer is not yet, so keep that at default and click Add a data source.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=116)** Okay, we're choosing S3, which is the default, we can skip the network connection option, and go to the location of S3 data that's in this account, and we could type in the S3 bucket name or we can click Browse.
>
> **[2:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=131)** Oka, do not click into the bucket, but rather click the little radial button next to the bucket and click Choose.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=140)** Okay, if you click off or tab off of that, the error message that you just saw should go away, and you can see below, a couple of options for how the crawler should work.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=149)** We'll keep that at the default to crawl all sub-folders.
>
> **[2:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=153)** Click Add an S3 data source.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=156)** Okay, click Next, and now we need to create or choose an IAM role that will be used throughout the Glue process.
>
> **[2:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=164)** Right now, we don't have one, so we're going to click Create New IAM Role.
>
> **[2:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=169)** And we're prompted to add a suffix to an existing name, so I'll just put my initials on there and click Create.
>
> **[2:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=178)** Okay, so an IAM role has been created for us and we can go ahead and click Next.
>
> **[3:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=184)** Now we need to choose where the output of the crawler should go.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=188)** That [[Metadata]] is going to end up in something called a database, which is a little bit of confusing terminology, but it's just the location where that schema information will get stored.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=198)** We don't have that kind of database yet, so we're going to click add database, which opens in a new tab.
>
> **[3:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=205)** We'll call it DemoMetadata, leave the other fields blank and click Create database.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=213)** Oh, we're being told it needs to be lowercase letters, so we'll call it demo_metadata, like this.
>
> **[3:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=220)** Click Create database.
>
> **[3:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=222)** Okay, we can close this tab now, and back on the original tab, hit the refresh button, which will cause our demo metadata to show up in the dropdown.
>
> **[3:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=234)** Now click Next.
>
> **[3:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=236)** Okay, review all of the options, scroll down and click Create crawler.
>
> **[4:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=242)** After a moment, the new crawler will appear.
>
> **[4:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=245)** Check the check box next to it, and we'll go to Run.
>
> **[4:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=252)** This process takes a few moments, but what's happening is that the crawler is now inspecting our S3 bucket.
>
> **[4:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=258)** It'll look at every file that it encounters and try to take a look at it and understand what its schema is, which it will save in the database that we specified.
>
> **[4:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=268)** Okay, now that that has finished and succeeded, we can go over here on the side to [[Databases]], click into demo_metadata, and see that we have two table entries right here in this section.
>
> **[4:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=281)** The first is from the parks_and_landmarks_detroit file that was in the S3 bucket alongside states, and the second is the one that we're interested in, states.csv.
>
> **[4:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=291)** You can see it's been renamed with an underscore here.
>
> **[4:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=294)** Go ahead and click it and we can see what the crawler discovered.
>
> **[4:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=298)** Scrolling down, you can see all of the columns have been found, as well as their data types.
>
> **[5:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=303)** This is our opportunity to review what has been discovered by the crawler, and if we want to change something like a data type, we could do that here.
>
> **[5:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=310)** But this is all looking really good, so it means that we have the metadata for our source file and can now move on to establishing a connection to RDS.
>
> **[5:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-an-s3-metadata-crawler?u=76281980&t=320)** That's going to take a few steps, which I will describe in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (3), [[Metadata]] (3), [[Databases]] (1)
> **Env Vars:** rds (3), iam (3), aws (2), csv (1)
> **CLI Commands:** mysql (3), aws (2), make (1)
> **UI Navigation:** go to (3), dropdown (1), scroll down (1)
> **Code Identifiers:** demo_metadata (2), parks_and_landmarks_detroit (1)
> **Cross-References:** earlier in (1), later in (1), in the next (1)
> **File Paths:** states.csv (2)
> **Definitions:** is a  (1), means that (1)

#### [AWS Glue networking](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=0)** - [Instructor] Our target for this demo is going to be the [[MySQL]] RDS database, but before Glue can connect to it, I need to do a little explaining.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=9)** Imagine this box here represents all of AWS, not just your resources, but mine, too, and all those belonging to AWS behind the scenes.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=19)** Now, most of the resources we've created in this course have been built inside our default VPC.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=25)** A VPC, or virtual private cloud, is like your own data center inside AWS.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=31)** It's an enclave where your network traffic is private and enclosed, much like your on-premises data center may be.
>
> **[0:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=39)** Since VPCs were introduced, AWS has designed most of their services, including RDS, to work within a VPC.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=46)** You can see our database here inside the VPC.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=51)** The thing is, some AWS services exist outside of any VPC, and need special steps taken to establish communication to your private resources.
>
> **[1:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=61)** S3 is actually one such service, although AWS does an admirable job of hiding that complexity.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=67)** Normally, you don't have to think about it.
>
> **[1:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=70)** Another service that's outside the VPC is Glue.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=73)** Now, anytime that we set up a Glue job with a connection to a VPC resource like this RDS database, Glue is going to create a network interface inside our VPC that'll be used to run our job.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=87)** This is basically a little worker node or job runner for the Glue job.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=91)** So in order to let Glue both talk to our RDS database and communicate with S3, which, by the way, it would need to do, even if our source was not S3, we need to do two things.
>
> **[1:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=104)** First, we need a security group that lets the worker talk to RDS.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=108)** This'll take the form of a self-referencing rule.
>
> **[1:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=112)** This is a security group that fully trusts any resource bearing that same security group.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=117)** It doesn't trust, say, an IP address or a CIDR block, it trusts the ID of another security group, in fact, it trusts the ID of itself.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=127)** We'll attach this security group to the RDS, and later, Glue will use it when it tries to talk to the database so it will be allowed in.
>
> **[2:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=136)** The second thing we need to do is give the Glue job a way to talk to S3 from within the VPC.
>
> **[2:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=143)** We'll do this by creating something called a VPC endpoint.
>
> **[2:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=146)** Specifically, we'll create a gateway endpoint to S3, giving Glue a private channel to the S3 service.
>
> **[2:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=153)** Although it is possible for Glue to reach S3 through the public internet, Glue uses the VPC endpoint to keep all job traffic within the AWS network instead of going outside to the public internet.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=165)** If all this sounds a bit confusing, I don't blame you.
>
> **[2:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=168)** It's a fairly big hurdle to usability that one needs to understand so much of the internal networking, not just of their own resources, but of AWS itself to configure Glue jobs properly.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=180)** Right now, the only real way to understand the necessity of these steps is to take a deep dive into the docs.
>
> **[3:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=185)** Still, AWS has put a lot of development time into enhancing Glue since it's release several years ago.
>
> **[3:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=191)** Here's hoping they improve this service in the future by abstracting away some of these challenging details.
>
> **[3:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-networking?u=76281980&t=197)** Now, let's head back into the console and get Glue talking to RDS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (1)
> **Env Vars:** vpc (11), aws (9), rds (7), cidr (1)
> **CLI Commands:** aws (9), mysql (1), node (1)
> **Prerequisites:** set up (1), configure (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [AWS Glue: Create a connection to RDS](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=0)** - [Instructor] All right, let's take the steps necessary to get AWS Glue talking to our RDS database.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=6)** Remember that I'm assuming that the [[MySQL]] you created in chapter four is still around.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=11)** If it's not, head back there and look for the video called creating a MySQL RDS database.
>
> **[0:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=16)** When you're done, let's head back here into [[Amazon EC2|EC2]].
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=20)** Along the left hand side, we'll look for security groups.
>
> **[0:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=26)** We're going to create the self-referencing rule I mentioned in the last video.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=29)** Click Create security group.
>
> **[0:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=32)** Now, this will have to be done in two steps because after all, we can't reference this rule until the rule exists.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=38)** So type in a name, we'll call it Glue self-referencing rule and I'll copy paste that into the description.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=47)** We're not going to do anything else.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=49)** We won't add inbound or outbound rules.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=51)** We'll just click Create security group.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=54)** Now, here on the summary page for that rule, we can click edit inbound rules and now we can reference itself.
>
> **[1:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=61)** Click add rule.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=63)** Under type, choose all TCP.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=67)** Keep source as custom, and click into the text box with the magnifying glass.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=72)** We'll type the [[Microsoft Word|word]] Glue, to filter down to this rule and now this rule is referring to itself.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=79)** It will trust any traffic coming from any resource in AWS that also has this security group attached.
>
> **[1:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=85)** Click Save rules.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=88)** Okay, now that we have the rule, we want to head to the RDS section of AWS.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=92)** Type RDS and choose that option.
>
> **[1:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=96)** We need to attach this security group to our RDS MySQL database.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=101)** Click on DB instances and click on the name of our MySQL database.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=108)** Click the Modify button and we'll scroll about halfway down the page here, once it loads.
>
> **[1:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=115)** It's right here under connectivity.
>
> **[1:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=117)** Hit the dropdown by security groups, type Glue and we'll choose the self-referencing rule.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=123)** Make sure that appears below, scroll all the way down and click Continue.
>
> **[2:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=128)** Here in the summary, make sure to check Apply immediately.
>
> **[2:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=132)** That way we won't need to restart the database.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=134)** Click Modify DB instance.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=137)** That's going to take a few moments to take effect.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=141)** Our next step is going to be in the VPC section, so I'll search that and click into VPC.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=148)** Over here on the side, I'm going to endpoints.
>
> **[2:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=151)** Now, Create endpoint.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=154)** All right, we'll just call this demo endpoint for now.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=157)** Keep AWS services clicked here and go down and filter by the words S3.
>
> **[2:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=164)** We'll choose this middle one.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=165)** Com dot Amazon AWS dot and then the name of your chosen region dot S3.
>
> **[2:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=171)** Okay, there's a global one here and one for Outpost, but we'll choose this one in the middle.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=177)** Now we have three more options, and the one we want is the type of gateway.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=180)** So make sure that is checked.
>
> **[3:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=182)** Scroll down, choose your default VPC out of the dropdown and scroll down a little more.
>
> **[3:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=189)** Very important step here.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=190)** Make sure to check the checkbox next to the route table that appears so that AWS will modify your routes to use this endpoint.
>
> **[3:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=199)** And that should be everything you need, so scroll all the way down and then click Create Endpoint.
>
> **[3:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=204)** Now that we've done those two things, we can head back to the Glue service.
>
> **[3:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=208)** And on the side we can go to Connections.
>
> **[3:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=212)** That'll open up in a new tab.
>
> **[3:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=215)** There's a lot going on in this screen, but just scroll past anything that refers to connectors and go down to connections.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=221)** Click Create Connection and we'll call this one MySQL Connection.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=227)** Type is going to be Amazon RDS and database engine is MySQL, of course.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=233)** Down here, we will choose our RDS instance from the dropdown and that pre-fills a few values for us, including the database name of my underscore database, which we created in chapter four.
>
> **[4:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=243)** Remember that, as it will come in handy in a few steps.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=247)** Our username is pre-filled but we'll need to type in our password.
>
> **[4:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=251)** Click Create Connection.
>
> **[4:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=253)** Now, AWS has been making a lot of enhancements to Glue over the past few months and years, and unfortunately, in so doing, they have lost a pretty useful button.
>
> **[4:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=262)** There used to be something that would let you just test the connection from here.
>
> **[4:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=266)** Fortunately, we can get back to it.
>
> **[4:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=268)** If you type in Glue and go back to the front page, you may see this Legacy pages section.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=275)** Scroll down and click Connections, legacy.
>
> **[4:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=278)** Now, this is just an older user interface, but it does have this nice useful button here.
>
> **[4:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=284)** I'm going to click MySQL Connection.
>
> **[4:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=286)** Click Test connection.
>
> **[4:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=288)** Choose the IAM role that we created earlier and click the Test connection button.
>
> **[4:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=295)** Now, when you're watching in the future, it's possible that legacy Pages section will have been fully retired and you'll need to use the newer interface for everything.
>
> **[5:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=303)** Hopefully, by that time they'll have reinstated this Test connection button so that you can use it, but if not, no worries.
>
> **[5:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=309)** Just use the connection in the crawler set up that we'll do in a moment, and you'll find out at that time whether you need to make any changes to your connection.
>
> **[5:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=316)** Just remember you need to have the Glue self-referencing rule attached to your RDS.
>
> **[5:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=321)** You need the VPC endpoint set up and you need to have typed in the password correctly.
>
> **[5:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-a-connection-to-rds?u=76281980&t=326)** So we've got a successful connection here and in the next video, we'll use this in a crawler to discover our RDS schema.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (7), [[Amazon EC2|Ec2]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** rds (9), aws (7), vpc (4), ec2 (1), tcp (1)
> **CLI Commands:** aws (7), mysql (7), make (5), find (1)
> **UI Navigation:** dropdown (3), scroll down (3), click on (2), checkbox (1), go to (1)
> **Prerequisites:** set up (2), you need to have (2), you'll need (1)
> **Cross-References:** in the last (1), go back to (1), in the next (1)
> **Best Practices:** make sure to (2)
> **Definitions:** refers to (1)

#### [AWS Glue: RDS data crawler](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=0)** - [Instructor] We're picking up right where we left off with Glue, now able to talk to the RDS database.
>
> **[0:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=5)** Over here in [[MySQL]] Workbench, I've logged into that database, and you can find this bit of [[SQL]] in the Chapter 6 folder of the exercise files.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=14)** It's in a file called mysql_states_table.sql.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=19)** You see, speaking of features that Glue has modified or taken away, one of the things you used to be able to do is set up a job that would create the table in the destination database.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=30)** Unfortunately, Glue isn't going to allow us that option right now, at least not through its graphical editor.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=36)** So instead, what we're going to do is create the destination for our data and then have a crawler in glue discover it so that we'll have both sides of the [[Metadata]] defined.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=47)** In this case, you can see that this table is not going to be exactly like the schema of our CSV file, and that's because we want to show a little bit of transformation happening in this ETL job that we're going to define in Glue.
>
> **[1:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=60)** So what will eventually end up doing is mapping state to state name, abbreviation to abbreviation, and then we'll do a little bit of concatenation between the capital and the name of the state so that we can show a very basic transform that changes the data as it moves from S3 to the RDS database.
>
> **[1:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=78)** So, to get this table created, we just highlight it and click the lightning bolt, and then we can head on back to AWS.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=86)** Now we're going to go back to crawlers.
>
> **[1:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=89)** We could create an entirely new crawler and database, but we're actually able to use the same one that we use to crawl S3.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=98)** Click into Demo Crawler, scroll down to Data Sources, this tab here, and then click Add a Data Source.
>
> **[1:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=107)** Now we'll choose [[Java Database Connectivity (JDBC)|JDBC]], and that's the protocol that Glue is using to talk to the database.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=113)** As for connection, hit the dropdown, you'll find MySQL Connection.
>
> **[1:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=118)** Here in include path, a very important step, type my_database.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=123)** Now this does rely on you having set up the RDS database just like we did in Chapter 4.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=129)** I wouldn't recommend using the percent here, or at least in my experience, that has led to errors.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=133)** But being specific with the schema path here should work for you.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=137)** Click add a JDBC data source.
>
> **[2:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=140)** Okay, now we can click Run Crawler, and to watch the progress, we can click back on crawlers again.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=148)** Now what's happening here is that the demo crawler will re-scan everything that's in the S3 bucket.
>
> **[2:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=154)** Having found nothing changed, it won't make any modifications to those tables.
>
> **[2:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=159)** Then it will look at the RDS database in the schema my database, and describe the schema for all of the tables that it encounters there.
>
> **[2:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=167)** Okay, a few minutes later, and the crawler is done and has been successful, so let's click over to [[Databases]], into demo metadata.
>
> **[2:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=177)** And now we see we have more tables than before.
>
> **[3:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=180)** In addition to the two CSV files from S3, we have several records of database tables from our RDS database, including my database states.
>
> **[3:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=190)** You can see how it's naming things here using the schema_, and then the table name.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=195)** And there's the discovered schema from RDS.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-rds-data-crawler?u=76281980&t=198)** So now we're ready in the next video to define an AWS Glue job to move data from S3 to RDS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MySQL]] (2), [[SQL]] (2), [[Metadata]] (2), [[Java Database Connectivity (JDBC)|Jdbc]] (2), [[Databases]] (1)
> **Env Vars:** rds (7), csv (2), aws (2), jdbc (2), sql (1)
> **CLI Commands:** mysql (2), find (2), aws (2), make (1)
> **Code Identifiers:** mysql_states_table (1), my_database (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** scroll down (1), dropdown (1)
> **Prerequisites:** set up (2)
> **File Paths:** mysql_states_table.sql (1)

#### [AWS Glue: Create and run a job](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=0)** - [Instructor] Now that we've got Glue talking to both S3 and the RDS database, and having established a [[Metadata]] repository of files in S3 and tables in RDS, let's go into AWS Glue and click on Jobs.
>
> **[0:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=14)** This will open up a new UI in a new tab.
>
> **[0:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=18)** Under Create job, we've got a few options.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=21)** The default, which we'll go with, is Visual with a source and target.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=25)** This will create a template for us, using Glue's drag and drop interface.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=29)** But you can also see we can start with a blank canvas, or go straight to editing scripts with Spark, [[Python (Programming Language)|Python]], or even a Jupyter Notebook.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=37)** Our source is S3 and our target will be [[MySQL]].
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=43)** This will just let Glue know a little bit about what we're doing, so that it can generate some boilerplate code for us.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=49)** Click Create.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=51)** Now on this page, you can see that we've got a visual representation of a basic ETL job.
>
> **[0:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=56)** You can click on the first node here.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=58)** This is a source node, and it says S3 bucket.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=62)** Still, we need to choose the location from either the Data Catalog or S3.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=67)** So we'll go to the database here, keeping Data Catalog selected, and choose our demo metadata.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=73)** This will allow us to specify the Table, states csv.
>
> **[1:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=78)** Even though it says table, remember, this is a representation of the schema of our CSV file.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=84)** So you can see if you click Output schema, because we have that metadata, Glue knows about the columns that exist here.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=91)** Now we can go to the Data target, and choose the other end.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=97)** The database here will again be demo metadata and the table will instead be, my database states.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=105)** Again, we see the output schema matches what the metadata crawler found.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=110)** In between here, we have ApplyMapping.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=114)** Now, if you're familiar with other ETL tools that use a drag and drop interface, I think you're going to find this a little bit limited.
>
> **[2:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=121)** We don't have the ability to directly map column to column with this interface, knowing about both sides, despite the fact that we have the crawler information and all of the schema for the source and target, we don't really get to connect the dots in the way that you might with other systems.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=137)** So we do need to know a little bit about what Glue is expecting here.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=141)** So we have this option Drop, and we can go ahead and click that for all the columns we know we are not going to map over.
>
> **[2:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=151)** We're going to leave just state and abbreviation, and we'll deal with the concatenation of capital and state later on, in code.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=160)** Here we have Source key and Target key, and again, we have to know about both sides of the metadata.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=165)** If you want to click over to MYSQL, you can review that by clicking Output schema, and see that the column is called state name, instead of just state.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=173)** So here, under ApplyMapping, we'll replace the target with state name.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=179)** If we were to run the job just from here, Glue would map over the state and abbreviation into our database table, but we want to do a little bit more.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=187)** And before we run the job, we need to supply a few details.
>
> **[3:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=191)** Go to Job detail, and give the job a name.
>
> **[3:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=195)** We'll just call this Demo Job, and we need to fill in this IAM Role down here, which you will recognize from generating it earlier.
>
> **[3:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=203)** Everything else here can stay the same.
>
> **[3:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=205)** Now we can click Save, on the job, and again, we could run it from here, but let's do a little bit more.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=213)** Go to Script, and you can see the [[PySpark]] code that Glue has generated out of this visual template.
>
> **[3:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=219)** I will say that the drag and drop interface of Glue is quite limited, and a little bit confusing.
>
> **[3:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=225)** It's much better I think, if you let it set up some boilerplate, and then edit the code directly.
>
> **[3:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=231)** So to get the most out of Glue, it helps to know a little bit of this code.
>
> **[3:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=235)** Let's take a look at what's going on here.
>
> **[3:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=237)** We've got some import statements at the top.
>
> **[4:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=240)** We've got some setting up of variables, based on the parameters that we configured outside in the GUI.
>
> **[4:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=247)** And we've got three kind of sections of code here that represent the three nodes on the graph we were just looking at.
>
> **[4:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=254)** We create a dynamic frame out of the demo metadata states.csv metadata.
>
> **[4:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=261)** We have Apply Mapping, which has a mapping for state to state name, and abbreviation to abbreviation.
>
> **[4:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=268)** And then, at the end, we have a statement here, that writes into the dynamic frame represented by the state's table.
>
> **[4:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=275)** So that's the whole job, but if we want to do the concatenation for the capital, we're going to need to go to another exercise file.
>
> **[4:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=284)** In the chapter six folder of exercise files, you will find this: It's called glue states concat.py and there's just a few modifications here.
>
> **[4:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=295)** First, we have a new import statement that pulls in a couple of functions that we're going to use, concat, lit, and col.
>
> **[5:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=301)** Here, we say temp datasource equals, and we create a new data frame.
>
> **[5:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=308)** We're starting with the S3 bucket and we're adding a new column.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=311)** We'll call it capital concatenated, and then you can see we are concatenating the column capital.
>
> **[5:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=317)** We're concatenating a literal, which is a comma and space, and then we're concatenating the state.
>
> **[5:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=324)** So it doesn't actually matter whether we use capital in the mapping, even in the visual, or in the code here.
>
> **[5:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=331)** Instead, we are creating a new column before we ever get to the point of apply mapping.
>
> **[5:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=336)** So we create a new data frame out of that dynamic frame, print Schema just for a little debugging purpose.
>
> **[5:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=343)** And then here, I've added a new line to the apply mapping to make sure that capital concatenated maps to the same name column in the destination.
>
> **[5:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=354)** And that's it for changes.
>
> **[5:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=355)** If you copy this entire script, we can head back to the AWS console and put it in, click Edit script.
>
> **[6:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=364)** Now we're warned here that doing this will force us to abandon the drag and drop mode of editing this script.
>
> **[6:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=371)** And that's okay, click Confirm.
>
> **[6:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=374)** Now we can highlight and delete everything and paste in the modified script.
>
> **[6:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=379)** Click Save, and now click Run.
>
> **[6:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=384)** Okay, follow the link here to Run Details, and we can see that we are in the running state.
>
> **[6:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=391)** If you want to watch any logs while or after this is running, just click here in CloudWatch and that will open up in a new tab.
>
> **[6:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=398)** We'll let this run and in a moment we can inspect the results.
>
> **[6:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=403)** Okay, the job has now succeeded, so we can head over to the MySQL database and do a select star from states.
>
> **[6:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=416)** Now you can see that we've got data populated from the CSV that was in the S3 bucket.
>
> **[7:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=422)** We've got state name, we've got abbreviation, and we've got the capital concatenated, just like we wanted.
>
> **[7:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=428)** So it took a bit of doing, but you can see how once you've established a set of connections and a metadata repository with Glue, it can be a nice way to kickstart and run Python-based data integrations.
>
> **[7:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=440)** Feel free to experiment with the code from here.
>
> **[7:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-glue-create-and-run-a-job?u=76281980&t=442)** In the next video, we'll clean everything up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (9), [[MySQL]] (3), [[Python (Programming Language)|Python]] (2), [[PySpark]] (1)
> **CLI Commands:** mysql (3), aws (2), python (2), node (2), find (2)
> **Env Vars:** rds (2), aws (2), mysql (2), etl (2), csv (2)
> **UI Navigation:** go to (5), drag and drop (4), click on (2)
> **Exercise Files:** template (2), boilerplate (2), exercise file (1), exercise files (1)
> **Definitions:** is a  (3), is called (1)
> **File Paths:** states.csv (1), concat.py (1)
> **Tools:** jupyter (1), aws console (1)

#### [Glue and course teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=0)** - [Instructor] Okay, as with everything in this course, we'll clean up after ourselves so you don't incur any unexpected charges.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=7)** We'll start here at the dashboard of AWS Glue, and we'll go to the Job section.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=13)** Highlight the Demo Job name by clicking the checkbox.
>
> **[0:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=17)** Go up to Actions and choose Delete jobs.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=21)** Click Delete to confirm.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=22)** Okay, expand the menu here with the three lines, and go to Glue catalog.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=29)** And that'll open up in a new tab.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=31)** Let's go to [[Databases]] first.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=36)** Check the box next to demo_metadata and hit Delete.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=41)** Confirm that with the button, and that will take care of all of our [[Metadata]] and the database that enclosed it.
>
> **[0:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=46)** Now we can go to Crawlers.
>
> **[0:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=50)** Check the checkbox, go Actions, and then Delete crawler.
>
> **[0:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=54)** That will take care of the crawlers and their data connections, except for the connection to RDS, which is here under Connections.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=62)** Another new tab opens.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=65)** Scroll down, choose mysql_connection.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=68)** Go to Actions and Delete.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=72)** Okay, now let's think about the things that we had to do to the RDS database.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=77)** To start, we'll go to VPC and delete the endpoint.
>
> **[1:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=82)** Click Endpoints, click the checkbox next to DemoEndpoint, go to Actions and then Delete VPC Endpoints.
>
> **[1:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=91)** We'll type delete to confirm.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=93)** Now, here in RDS, we're going to make things simple.
>
> **[1:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=98)** Instead of detaching the security group, at this point in the course, we are done with this database and we will fully delete it.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=105)** You'll want to go ahead and do this for any RDS that you might still have around.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=110)** Click the checkbox, go to Actions, and then Delete.
>
> **[1:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=114)** Here, you'll have to answer a few questions.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=116)** Say no to final snapshot because we don't need this data and a snapshot could sit around and incur some charges for you.
>
> **[2:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=123)** Do not retain automated backups, and do acknowledge that all this data is going away by checking the third box.
>
> **[2:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=130)** Type delete me to confirm and click Delete.
>
> **[2:14](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=134)** Okay, at this point you could delete the security groups that we created, the Glue self referencing rule, or go cleanup IAM policies, but none of those things are going to charge you.
>
> **[2:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=145)** Okay, from here, we'll go into S3.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=149)** And you can delete this generated S3 bucket that's owned by Glue by checking the box next to it.
>
> **[2:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=155)** First, clicking Empty, and typing permanently delete, or you can cut and paste.
>
> **[2:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=162)** This will empty out anything that Glue placed in there, while it was running.
>
> **[2:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=167)** And when that's successful, hit Exit, check it again and choose Delete.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=173)** Copy and paste the name of the bucket to confirm that.
>
> **[2:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=179)** You may want to come here and delete your other S3 buckets.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=181)** But that'll do it for cleaning up resources associated with this Glue demo.
>
> **[3:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/glue-and-course-teardown?u=76281980&t=186)** In the next set of videos, we will look at AWS backup.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Metadata]] (1)
> **UI Navigation:** go to (8), checkbox (4), scroll down (1)
> **Env Vars:** rds (4), aws (2), vpc (2), iam (1)
> **CLI Commands:** aws (2), make (1)
> **Code Identifiers:** demo_metadata (1), mysql_connection (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 7. Backup

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand AWS Backup](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=0)** - Throughout this course, we've explored many ways of using AWS services to store and manage your data.
>
> **[0:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=6)** And at each stop, we've looked at how to keep that data backed up.
>
> **[0:10](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=10)** After all, there are many potential threats to your data.
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=13)** Disc barrier is one.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=15)** While AWS's is high level of advertised durability, facilitated by behind scenes replication and integrity checks, makes this possibility a remote one, remember that not every service has the same level of durability as S3.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=29)** EBS volumes will beat an off-the-shelf hard drive any day, but they're still subject to failures.
>
> **[0:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=35)** Malware is another danger.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=37)** Any AWS stored data attached to an instance with internet access, is subject to the same malware risk as any PC or laptop.
>
> **[0:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=45)** A very real, and very scary possibility these days, is that ransomware could encrypt your data, and hold it hostage until you pay up.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=53)** You don't want to get stuck having to comply with a demand like that.
>
> **[0:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=57)** Finally, there's the most prevalent danger to your data, you, or your users, or your newly released, "we definitely tested all the edge cases, didn't we?"
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=66)** application feature.
>
> **[1:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=68)** I'm talking about accidental data loss or data corruption, the kind of thing that's hard to plan for, because it is by nature a surprise.
>
> **[1:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=76)** In all these cases, a good backup strategy can turn potential catastrophe into an IT win.
>
> **[1:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=83)** So of course, it's important to have backups.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=86)** That's why with every [[Data Storage]] service we've discussed in this course, we've touched on the subject of creating and restoring backups.
>
> **[1:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=93)** For better or for worse, the method varies from service to service.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=97)** EBS has snapshots, Dynamo DB can be backed up to S3.
>
> **[1:42](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=102)** RDS has its own snapshot capabilities, as does Storage Gateway.
>
> **[1:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=108)** And at first, EFS didn't even have way to backup.
>
> **[1:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=111)** When the service first launched, you were responsible for doing your own backups, say by scripting and scheduling an ETL job, and storing the backups somewhere on your own.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=120)** So you can see that managing backups in AWS, can mean working with a fairly disjointed set of tools and processes.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=127)** This scenario is not unlike the state of AWS command line tools was a few years ago.
>
> **[2:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=133)** At that time, it was not unusual for individual AWS services to have their own command line tool, which would be installed separately from each other.
>
> **[2:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=142)** These interfaces were not always the most consistent, because different development teams created them independently of each other.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=148)** Eventually, AWS made a considered effort to rectify this situation, leading to the single AWS [[CLI]] we enjoy today.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=156)** The unified CLI still lets you work with all the many different services that comprise AWS, but it provides a one stop shop for doing so.
>
> **[2:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=165)** Similarly, AWS backup is a service that aims to bring consistency to the experience of managing and maintaining backups in AWS.
>
> **[2:54](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=174)** It takes those disparate implementations of backup that I just mentioned, and provides a one-stop shop to manage them.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=181)** AWS backup establishes a consistent, centralized management interface for backups across multiple services.
>
> **[3:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=188)** It debuted with support for EBS, RDS, Dynamo, Storage Gateway, and for the first time since that service was released, EFS.
>
> **[3:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=198)** With AWS backup, you create backup plans oriented around schedules.
>
> **[3:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=202)** And the backup service is based on tagging, letting you create a truly flexible backup strategy for your organization.
>
> **[3:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/understand-aws-backup?u=76281980&t=209)** Let's head to the console and see how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[Data Storage]] (1)
> **Env Vars:** aws (13), ebs (3), rds (2), efs (2), cli (2)
> **CLI Commands:** aws (13)
> **Tools:** command line (2)
> **Definitions:** is a  (1)
> **Speakers:** - throughout (1)

#### [Create and configure an AWS Backup job](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=0)** - [Instructor] I'm logged into an [[Amazon EC2|EC2]] host that has an EFS file system mounted.
>
> **[0:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=4)** Let's take a look at what's inside.
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=7)** All right, we've got a couple of files here, text files.
>
> **[0:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=9)** We've got data in [[JSON]] format.
>
> **[0:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=12)** And, oh what's this?
>
> **[0:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=13)** We've got very-important-documents.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=15)** Inside here you can see annual budget, final report.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=19)** Some things that look like we really wouldn't want to lose them.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=22)** So to protect ourselves against the risk of accidental deletion, let's go to AWS backup and create a backup plan.
>
> **[0:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=29)** Back here to the AWS console.
>
> **[0:31](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=31)** And we're going to type "backup" into the search bar here.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=34)** And click the first result AWS Backup.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=37)** Now we'll click Create Backup plan.
>
> **[0:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=40)** What we'll do now is define our plan in two steps.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=43)** The first step is to set up a plan that defines the timing, frequency and retention for the backups that we're going to create.
>
> **[0:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=51)** Then we'll take that plan and assign to it resources like the EFS file system that we just looked at.
>
> **[0:58](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=58)** Now we can start with a template and we can choose from some common patterns of backup here.
>
> **[1:03](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=63)** Or, for this demo, we can click Build new plan.
>
> **[1:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=67)** We'll call this MyBackupPlan, and scroll down to rule configuration.
>
> **[1:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=73)** Our first rule we'll call DailyBackup.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=77)** For the backup vault we can click to create a new one or we can select an existing one from the dropdown.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=84)** So there's a default that should be pre-created that we can build.
>
> **[1:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=88)** This one here could use some explaining.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=90)** When I first created the EFS file system it actually gave me the option to establish backups using AWS backup right there at the creation point of the EFS.
>
> **[1:39](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=99)** So this is actually a vault for an existing backup plan for this EFS.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=105)** But just because AWS has given us that convenience over in the EFS part of the system doesn't mean that we can't come in here and create our own custom backup rules for this or any other file system.
>
> **[1:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=116)** So we'll go ahead and just choose the default here, and continue on.
>
> **[2:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=121)** Backup frequency is already set to daily, but you see you have every option here including Custom cron expression.
>
> **[2:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=127)** So if you're familiar with cron you can create a command that gives a very detailed frequency for this backup.
>
> **[2:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=135)** If you'd like to enable something similar to what we saw with RDS where you can have a very fine-grain recovery point, going down to say the minute, you can click this to enable continuous backups for point in time recovery.
>
> **[2:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=148)** That will incur a little bit of extra cost for you, but it does mean that you have a whole lot of resolution as to where you can target your backups.
>
> **[2:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=156)** Could be very nice.
>
> **[2:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=157)** We'll leave it unchecked for now and continue on down.
>
> **[2:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=160)** The backup window says when will this backup occur?
>
> **[2:44](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=164)** You can see the default is 5:00 AM UTC, or you can click customize backup window and give your own time.
>
> **[2:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=170)** We'll keep the default for now.
>
> **[2:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=173)** Now we have some transition rules.
>
> **[2:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=175)** We can choose to transition to cold storage, never, or after a certain amount of days, weeks, or months.
>
> **[3:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=181)** For these daily backups we'll keep them for two months before going to cold storage.
>
> **[3:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=187)** As for retention, this gets to when the backups will actually be finally fully deleted.
>
> **[3:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=192)** So we'll say these daily backups are going to stay around for six months.
>
> **[3:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=197)** And you might be thinking, well I want my backups to stay around for longer than that.
>
> **[3:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=200)** We're going to supplement this rule with a different rule that takes snapshots at a different interval and keeps those around for longer.
>
> **[3:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=207)** Of course, all this configuration means you can tune your backup plan to exactly how you'd like it to work.
>
> **[3:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=213)** The other thing to note here is that there needs to be 90 days between cold storage and final expiration due to the limits of S3 Glacier.
>
> **[3:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=221)** Because these backups, like many things in AWS, are being stored in the backend by S3.
>
> **[3:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=227)** And so the lifecycle policies we're configuring here are really S3 object lifecycle policies.
>
> **[3:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=233)** So when you say cold storage, that's transitioning to the S3 Glacier tier and expiration means actual deletion.
>
> **[4:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=240)** We don't need to worry about copying to any other region or any of the other options on this page.
>
> **[4:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=246)** So click Create plan.
>
> **[4:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=248)** Okay, now we're into the second phase of creating the backup plan, which is assigning resources.
>
> **[4:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=255)** The resource assignment name we will call EFSDemoAssignment 'cause we're just going to assign the one EFS.
>
> **[4:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=262)** And as far as the IM role we can keep that at default.
>
> **[4:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=267)** And scroll on down.
>
> **[4:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=269)** We can either include all resource types, which is very expansive.
>
> **[4:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=272)** Protect all resource types enabled in your account, or we can get specific by checking the second option here.
>
> **[4:40](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=280)** If we select resource types you'll see we have different types of resources that we can protect and we can assign multiple different types at one time.
>
> **[4:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=287)** These are all just check boxes we could check.
>
> **[4:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=289)** And the same frequency and retention model of the backup plan that we created will apply to all these resources.
>
> **[4:56](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=296)** In this case, we'll just go with EFS here.
>
> **[5:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=301)** Once we've selected that, we get another option here to choose the actual EFS.
>
> **[5:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=305)** And we're asked for an ID, but luckily this dropdown is going to allow us to check those off individually.
>
> **[5:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=311)** It will load the file systems that are known to the system and allow us to select those.
>
> **[5:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=318)** So we've got our EFS file system established here.
>
> **[5:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=321)** If we had a more expansive rule, we could come here and exclude certain things.
>
> **[5:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=325)** So we've got a lot of options here as to how we can target the backup to just certain resources.
>
> **[5:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=330)** In fact, in this last part here, we could skip entirely the selection of resources based on type and do it based on tags.
>
> **[5:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=338)** And tags are a very powerful way in Amazon to focus on certain resources, whether it's for your cost reporting or for integrating with a third party that does things based on tags.
>
> **[5:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=350)** That [[Metadata]] that you can put on resources can be really useful and this is one place that you could do that.
>
> **[5:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=355)** So we've got our one EFS selected here and now we can go ahead and click Resource selection.
>
> **[6:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=362)** That's kind of a funny named button because what you're really doing is confirming the resource selection that we just did.
>
> **[6:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=368)** Now because we were able to do the schedule and the resource assignment all in the context of that wizard we haven't actually had the opportunity to go back and add any more rules to our backup.
>
> **[6:18](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=378)** So before we're done, I'd like to demonstrate how that works by going here to Backup rules here in the Summary of the entire backup plan.
>
> **[6:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=385)** And we can click Add backup rule.
>
> **[6:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=389)** So we can give a different rule to supplement the daily.
>
> **[6:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=392)** We'll call it MonthlyBackup.
>
> **[6:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=396)** Keep the default vault, switch backup frequency to monthly.
>
> **[6:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=401)** And we can tweak these or we can leave them at default, but we'll transition to cold storage after nine months.
>
> **[6:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=408)** So we'll keep these around longer.
>
> **[6:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=410)** And retention we'll say we'll retain it for two years before anything gets finally deleted.
>
> **[6:57](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=417)** Now you can click Add backup rule.
>
> **[6:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=419)** So you can see how you can start to layer and build up your backup policies to give you just what you need.
>
> **[7:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=425)** Okay, so now we've created this backup plan but we don't really want to wait around in this demo for the schedule to kick in.
>
> **[7:13](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=433)** So what we want to do is go run it manually.
>
> **[7:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=436)** We'll go to the dashboard here on the side and click Create on-demand backup.
>
> **[7:23](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=443)** So from here we can select our resource type of EFS.
>
> **[7:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=447)** We can choose that file system.
>
> **[7:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=450)** And we can choose Create backup now.
>
> **[7:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=452)** We'll leave everything else at default and click Create on-demand backup.
>
> **[7:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=458)** So you can see that's running and it won't take very long because, as you probably noted before, there's not a lot on the EFS that we're demoing here.
>
> **[7:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=466)** Not a lot of data shouldn't take long to back up.
>
> **[7:48](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=468)** And, alright, it's already completed.
>
> **[7:51](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=471)** Let's head back over to the EC2 host.
>
> **[7:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=475)** And we're working along and something very bad is about to happen.
>
> **[8:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=481)** Oh dear.
>
> **[8:01](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=481)** We have deleted the very important documents.
>
> **[8:04](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=484)** That is a big problem.
>
> **[8:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/create-and-configure-an-aws-backup-job?u=76281980&t=485)** But luckily we have the AWS backup ready to save the day in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[JSON]] (1), [[Metadata]] (1)
> **Env Vars:** efs (13), aws (7), ec2 (2), json (1), rds (1)
> **CLI Commands:** aws (7), go run (1)
> **UI Navigation:** go to (2), dropdown (2), scroll down (1)
> **Ports:** :00 (1)
> **Cross-References:** in the next (1)
> **Tools:** aws console (1)
> **Exercise Files:** template (1)

#### [Restore from backup](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=0)** - [Instructor] Okay, so we've just had a problem.
>
> **[0:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=2)** We've deleted some important documents out of our EFS file system, and we're here at the AWS Backup dashboard to see what can be done about it.
>
> **[0:11](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=11)** The easiest way to get into our backups is to go to protected resources.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=15)** Makes you feel very secure, your EFS is protected.
>
> **[0:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=19)** You can see here we have two entries.
>
> **[0:20](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=20)** Remember, that one of these was from the automatic backup that was offered to me by the EFS Creation Wizard.
>
> **[0:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=27)** The second one is the one that we just created.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=30)** And you can see I've got a couple of different backups here, including the one that I manually kicked off just a few moments ago.
>
> **[0:36](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=36)** I can click on the radio button next to that and click Restore.
>
> **[0:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=41)** Now I have the option for full restore or item level so I could be specific about certain things I want to come out of this restore.
>
> **[0:47](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=47)** I'll keep that at full.
>
> **[0:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=49)** And I can either go to a directory in the source file system or a completely new file system.
>
> **[0:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=55)** I don't want to have to go to the trouble of mounting a new EFS, so we'll just say restore to a directory in the source file system.
>
> **[1:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=62)** The default restore role is fine and we'll click Restore Backup.
>
> **[1:06](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=66)** Now, this process may take a little longer than the actual creation of the backup did.
>
> **[1:12](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=72)** So we'll come back in a few moments when this thing is complete and see what has happened.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=77)** Okay, now the backup is completed.
>
> **[1:19](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=79)** We've still got this bar at the top that says it may take several hours, but of course, this is dependent, largely, on the size of the backup that's being restored.
>
> **[1:27](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=87)** So we didn't have a lot of data to bring back and it finished very quickly.
>
> **[1:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=90)** Let's go back to the [[Amazon EC2|EC2]] Host and take a look at what we've got.
>
> **[1:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=94)** If I do LS now, you can see I don't have my very important documents folder back but what I do have is a new folder that's named for Database Backup Restore.
>
> **[1:45](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=105)** So we'll go ahead and go into there and take a look.
>
> **[1:49](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=109)** And here we have, I'll make a little space here, we have everything.
>
> **[1:55](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=115)** We have File one, two and three, we have the data and there it is, very important documents.
>
> **[2:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/restore-from-backup?u=76281980&t=120)** So we are back in business with the files that were deleted thanks to AWS Backup.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1)
> **Env Vars:** efs (4), aws (2), ec2 (1)
> **CLI Commands:** aws (2), ls (1), make (1)
> **UI Navigation:** go to (3), click on (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [AWS Backup teardown](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=0)** - [Instructor] All right, as with everything, we're going to go back through what we created as a result of this demo and delete things to make sure we don't incur any unexpected charges.
>
> **[0:08](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=8)** So let's go into AWS Backup and we'll go to Backup plans and we'll try to kind of work backwards here.
>
> **[0:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=15)** We'll click MyBackupPlan, and the first thing I'm going to do is go delete these rules here.
>
> **[0:22](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=22)** So daily backup, I'll confirm the name, delete it.
>
> **[0:25](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=25)** Same for monthly backup.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=28)** Oh, it's the last one on here.
>
> **[0:30](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=30)** So it looks like I'm not able to delete that.
>
> **[0:33](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=33)** Same I'm assuming for, no, not so much for resources.
>
> **[0:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=37)** We can delete that there.
>
> **[0:38](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=38)** So let's type EFSDemoAssignment and delete that.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=43)** Now we will go up to the top here, click the Delete button, type MyBackupPlan, and yeah, there we go.
>
> **[0:52](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=52)** Delete the whole thing.
>
> **[0:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=53)** Now this backup plan, remember if you happen to have that same as I do, is associated with the EFS.
>
> **[0:59](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=59)** I do not think that we'll be able to delete it until we delete the EFS, but we can try it.
>
> **[1:05](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=65)** Go ahead and copy the name here, paste it in, and sure enough, okay, we're getting a permissions error because it's associated with the EFS system.
>
> **[1:15](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=75)** We'll go into Backup vaults.
>
> **[1:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=77)** Now we do have inside the default vault one recovery point.
>
> **[1:24](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=84)** See that's the actual backup that was created.
>
> **[1:26](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=86)** So we can go there, click it, click its checkbox, go to actions, and choose delete.
>
> **[1:32](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=92)** This is also one way that you could get to the Restore menu.
>
> **[1:37](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=97)** So that's submitted for deletion and we'll get deleted here in a moment.
>
> **[1:41](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=101)** Okay, now that's deleted and it should take care of everything that we created for AWS Backup.
>
> **[1:46](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=106)** Meanwhile, I'm going to clean up the other resources that were a part of this demo.
>
> **[1:50](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=110)** Going to [[Amazon EC2|EC2]] here.
>
> **[1:53](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=113)** Click on my running instances and I will terminate the EFS that we logged into, confirm that, and wait for that to go into a terminated state.
>
> **[2:09](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=129)** Okay, now I'm going to go to EFS and finally delete the file system.
>
> **[2:17](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=137)** Here, I call it EFSDemo2, and I'll click Delete.
>
> **[2:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=141)** I'll need a copy of the file system ID in there, making sure there's no additional spaces, and click confirm.
>
> **[2:29](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=149)** That's now deleting the file system in addition to the EC2 and all the backups.
>
> **[2:35](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/aws-backup-teardown?u=76281980&t=155)** So with that, we should have cleaned up everything associated with the AWS Backup Demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2)
> **Env Vars:** efs (5), aws (3), ec2 (2)
> **CLI Commands:** aws (3), make (1)
> **UI Navigation:** go to (2), checkbox (1), click on (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=0)** - [Brandon] That does it for this course.
>
> **[0:02](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=2)** We've seen the breadth of what AWS has to offer in terms of storage and [[Data Management]].
>
> **[0:07](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=7)** To go further, it's hard to find a more in-depth resource than AWS's own documentation at aws.[amazon.com/documentation](https://amazon.com/documentation).
>
> **[0:16](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=16)** Of course, there's plenty more AWS content in the video library of this site.
>
> **[0:21](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=21)** I'd recommend [[Amazon Web Services (AWS)|Amazon Web Services]] Enterprise Security to learn more about IM and Access Control.
>
> **[0:28](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=28)** You may also want to check out [[Apache Spark]] Essential Training to help you better understand AWS Glue.
>
> **[0:34](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=34)** And finally, you could go into one of my other courses Amazon Web Services Deployment, Provisioning, and Automation, to learn how to get your applications to the cloud.
>
> **[0:43](https://www.linkedin.com/learning/aws-storage-and-data-management-17535108/next-steps?u=76281980&t=43)** Thanks for watching and good luck as your journey to the cloud continues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (2), [[Data Management]] (1), [[Apache Spark]] (1)
> **CLI Commands:** aws (5), find (1), apache (1)
> **Env Vars:** aws (4)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [brandon] (1)


## Instructor

- [[Brandon Rich]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/aws-storage-and-data-management-3082086)

## Skills Covered

- Storage Management
- Data Management
- Amazon Web Services (AWS)

## Path Context

### In [[Infrastructure Management on AWS- Skills for Administrators]]
← [[Complete Guide to AWS Security and Compliance Management]] | **5 of 5**

## Appears In

- [[Infrastructure Management on AWS- Skills for Administrators]]

## Related Courses

_Courses sharing skills:_

- [[Practical Database Design- Implementing Responsible Data Solutions with SQL Querying]] — Data Management
- [[JavaScript- Best Practices for Data]] — Data Management
- [[Advanced Python- Working With Data]] — Data Management
- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)

---

[↑ Back to top](#)