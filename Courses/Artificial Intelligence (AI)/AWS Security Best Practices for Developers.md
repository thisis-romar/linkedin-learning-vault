---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: aws-security-best-practices-for-developers-19179797
url: "https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797"
duration_minutes: 92
duration: 1h 32m
level: Advanced
updated: 9/22/2022
learners: 2545
skills:
  - AWS Security
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF4qOwzwd8iMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663692236119?e=2147483647&amp;v=beta&amp;t=Ea-1GHa2PKaMUJtYik7ExpZi2SxxBgYwtU4713TSJIk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your AWS Development Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[AWS for Developers- CLI Tips]]'
next_courses:
  - '[[Building Serverless Apps with AI Services on AWS]]'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":4,"total":6,"prev":"AWS for Developers- CLI Tips","next":"Building Serverless Apps with AI Services on AWS"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/aws-security
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AWS%20Security%20Best%20Practices%20for%20Developers.md)

![AWS Security Best Practices for Developers](https://media.licdn.com/dms/image/v2/C4E0DAQF4qOwzwd8iMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663692236119?e=2147483647&amp;v=beta&amp;t=Ea-1GHa2PKaMUJtYik7ExpZi2SxxBgYwtU4713TSJIk)

# AWS Security Best Practices for Developers

> Security matters to everyone, but solid security practices start with the developer of an application. In this developer-centered course, instructor and AWS Certified Solutions Architect Carlos Rivas shows how to build stronger, more secure applications for deployment on Amazon Web Services. Learn core AWS security development principles around Identity and Access Management (IAM), S3 storage, and

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797) | 1h 32m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Securing your application](#securing-your-application)
  - [What you should know](#what-you-should-know)
- [**1. Identity and Access Management**](#1-identity-and-access-management) (6 videos)
  - [Important concepts](#important-concepts)
  - [Uses and access keys](#uses-and-access-keys)
  - [Roles and policies](#roles-and-policies)
  - [IAM key points](#iam-key-points)
  - [Challenge: IAM roles and policies](#challenge-iam-roles-and-policies)
  - [Solution: IAM roles and policies](#solution-iam-roles-and-policies)
- [**2. Amazon Simple Storage Service (S3)**](#2-amazon-simple-storage-service-s3) (7 videos)
  - [S3 as a static website](#s3-as-a-static-website)
  - [Bucket policies](#bucket-policies)
  - [S3 bucket encryption](#s3-bucket-encryption)
  - [S3 object versioning and MFA delete](#s3-object-versioning-and-mfa-delete)
  - [S3 key points](#s3-key-points)
  - [Challenge: S3 presigned URL challenge](#challenge-s3-presigned-url-challenge)
  - [Solution: S3 presigned URL challenge](#solution-s3-presigned-url-challenge)
- [**3. Key Management Service Encryption**](#3-key-management-service-encryption) (5 videos)
  - [Key Management Service (KMS) introduction](#key-management-service-kms-introduction)
  - [Using AWS KMS](#using-aws-kms)
  - [KMS key points](#kms-key-points)
  - [Challenge: Key Management Service](#challenge-key-management-service)
  - [Solution: Key Management Service](#solution-key-management-service)
- [**4. User Identities with Cognito and Web**](#4-user-identities-with-cognito-and-web) (6 videos)
  - [Cognito concepts](#cognito-concepts)
  - [Workflow](#workflow)
  - [Cognito demonstration](#cognito-demonstration)
  - [Cognito key points](#cognito-key-points)
  - [Challenge: Cognito automated login](#challenge-cognito-automated-login)
  - [Solution: Cognito automated login](#solution-cognito-automated-login)
- [**5. Certificate Manager**](#5-certificate-manager) (3 videos)
  - [Creating and managing certificates](#creating-and-managing-certificates)
  - [Using certificates with AWS Resources](#using-certificates-with-aws-resources)
  - [AWS Certificates Manager and EC2 instances](#aws-certificates-manager-and-ec2-instances)
- [**6. Parameter Store and Secrets Manager**](#6-parameter-store-and-secrets-manager) (3 videos)
  - [Parameter Store for sensitive data](#parameter-store-for-sensitive-data)
  - [Using Parameter Store from EC2](#using-parameter-store-from-ec2)
  - [Secrets Manager overview](#secrets-manager-overview)
- [**7. Security Alerts in AWS**](#7-security-alerts-in-aws) (3 videos)
  - [Root login alerts](#root-login-alerts)
  - [Detecting unauthorized instance stops](#detecting-unauthorized-instance-stops)
  - [Checking for unused credentials](#checking-for-unused-credentials)
- [**Conclusion**](#conclusion) (1 videos)
  - [Get familiar with AWS tools](#get-familiar-with-aws-tools)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing your application](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=0)** - [Carlos] How do you know when your application code and infrastructures are ready for the cloud? When you're confident that your data is secure. A conversation about security will always be incomplete if we don't touch on identity and access management, storage, and data encryption. We'll talk about AWS Key Management Service, AWS Cognito, and cover identity federation, which is very important to master when migrating applications to the cloud. This will help your application establish user identity without requiring your users to maintain multiple login credentials for every application. Hi, I'm Carlos Rivas, and I'm a Certified AWS Solutions Architect and software engineer. Let's secure your application in this [[LinkedIn]] Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** aws (3)
> **Env Vars:** aws (3)
> **Speakers:** - [carlos] (1)

#### [What you should know](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/what-you-should-know?u=76281980&t=0)** - [Instructor] To be able to better apply this course, it's recommended that you have familiarity with AWS basic services, such as S3 and [[Amazon EC2|EC2]]. You understand the security needs of your application and its underlying infrastructure. Only you know if your application will require specific permissions, data encryption, or complex authentication mechanisms. If you need a refresher on AWS, you can check out [[Amazon Web Services (AWS)|Amazon Web Services]] Essential Training in our library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Env Vars:** aws (2), ec2 (1)
> **CLI Commands:** aws (2)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Identity and Access Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Important concepts](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=0)** - [Instructor] Identity and access management or IAM for short is a critical tool that has a significant impact on all AWS services. Everything you'll create within your AWS cloud will need to have permissions granted and managed by account owners or administrators. This is done from the IAM console. Before jumping to our console, let's take a moment to learn some useful terminology. An identity within IAM is a resource for which you want to be able to manage permissions. It could be a single user, a group of users, or it could simply be a role that you assign to an AWS service in order to access another one. As we'll see later in the course, it can be a federated user that locked in through another identity provider. Policies are [[JSON]]-formatted documents that specify which actions to allow or deny to an IAM identity. By default in AWS, all access is denied unless you specify otherwise. A user account in IAM is one way to give individuals access to resources within this AWS account. These permissions will need to be in-line with the role they perform within your organization. An developer for example may require access to Cutmate, Cloud9, [[Amazon EC2|EC2]] and others. But this person probably does not need to see audit logs within Cloud Trail or change any network settings within the Bitro private cloud as these tasks are performed by other employees within the organization.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=95)** A preferred away to manage users within IAM is by using groups. Groups help you avoid having to repeat yourself when assigning policies to users individually. Just group them in a way that makes logical sense for your company. For example, network engineers, database administrators, developers, and super users. Any and all changes made to the group will apply it immediately to all members of the group. As we mentioned earlier, in IAM, you can assign access policies to a non-user identity. This is called a role, and you can assign it to your application servers, for example, in order to give them permission to access your message queues, [[Databases]], and other services. Please note, this is not to be confused with security groups which control access at the networking level. Roles control access to AWS services not network traffic. Let's look at the next diagram. In this example, a developer launches an EC2 instance that gets a role assigned at boot time. When the application running inside this EC2 server attempts to access the photos S3 bucket, it will be able to do so. This is very convenient because this way your application can be deployed to a staging or production environment, and you don't need to provide an access key pair for it to be able to run. When a resource has permissions from a role, IAM will give a set of temporary credentials that match the permissions associated with the role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[JSON]] (1), [[Databases]] (1)
> **Env Vars:** iam (8), aws (6), ec2 (3), json (1)
> **CLI Commands:** aws (6)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (3)
> **Cross-References:** later in (1), we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Uses and access keys](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=0)** - [Instructor] In order to provide access management to our resources, IAM requires that we create users or roles and assign them to those resources. If you're a developer, AWS provides you with the mechanisms to access services from your code, as well as the command line of your favorite operating system. I'm talking about an access key pair. These key pairs are associated with your IAM user and inherit the exact permissions that the user has. Let's go to the console now and create a user account with full admin rights. Here in our IAM console, we click on users. Then we click on add user. Give it a name. Call it demo user. We'll give it AWS management consult access. We'll choose custom password and type our desired password. We'll click next. And then we have to choose whether to add the user to a group, copy permissions from an existing user or attach existing policies. We'll choose attach, and choose administrator access. We'll check it. Click review. In the review screen, we'll click create user. And we're done, we can close this window. We can use this account now to log in to the AWS console with administrator rights.
>
> **[1:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=96)** In order to set up our command line tool, you can visit aws.[amazon.com/cli](https://amazon.com/cli) and on the right, you can see install options for [[Windows]], Mac and [[Linux]]. Let's go back to the console now to create an access key pair for our user. We'll click our user. Go to security credentials. And we'll create an access key. The access key is automatically created. We'll click show for the secret key. Be sure to make a note of the secret key and access key, because once we move away from this screen, you won't be able to see it or retrieve it again. If you lose it, you'll have to create a new key pair. So we'll copy these values, as well as the secret key. And we'll use this information to configure the AWS [[CLI]] tool. Let's go to our console now to complete our setup. Once the tool is installed, we'll type aws configure. It's going to ask for the access key, which we have saved. We'll copy this value followed by the secret key, which we also copied. The default region, we're going to leave it as us-west-1. That's my preferred region.
>
> **[3:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=192)** And the default output format is okay as none. This completes our setup. Our command line tool is now ready for use with the keys associated with our user account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[Windows]] (1), [[Linux]] (1)
> **Env Vars:** aws (4), iam (3), cli (1)
> **CLI Commands:** aws (6), make (1)
> **Prerequisites:** configure (2), setup (2), set up (1), install (1)
> **UI Navigation:** go to (3), click on (2)
> **Tools:** command line (3), aws console (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Cross-References:** go back to (1)

#### [Roles and policies](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=0)** - [Instructor] If you noticed, when we created our user account, we gave it full access permissions. Unless you're the owner of your AWS account, you'll rarely see this in the real world. This means you need to be familiar with the creation and management of IAM policies, which can be used to provide a more restrictive and [[Java]]-specific set of permissions. Let's look at a policy right now. Here in an AWS console, we'll click on policies under IAM, type s3, and this is the AWS s3 full access policy. It has three main elements. Effect, which can be allow, or the nine, the action, in this case, the s3 service, and the resource, in this case, it could be a specific bucket within s3. Let's click on roles now. We'll click on create role. When defining a role, you'll be asked to first create a trust policy. Essentially, this is just asking who can assume this role, and the answer to that is, users from other accounts, federated users, web identity users, and in our case, AWS services. Let's now associate the policy we just saw with this role. We'll choose [[Amazon EC2|EC2]] service, click on permissions, and again, type s3, and we'll check that.
>
> **[1:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=98)** We'll type a name for our role, demo for EC2 servers, and click create. We'll go to EC2 now. We have a running server, we're going to assign that role now. We'll right click, go to settings, attach IAM role, and choose the role we just created. We'll click apply. Here in our terminal, we have connected to that particular server. If we type AWS, s3, LS, and the name of our bucket, we should be able to see the contents of that bucket, cause now our server has full access to it. Before we finish talking about role, it's important to mention this particular use case. In multi-account environments where companies have completely isolated AWS accounts for production and development, it's common practice to use role instead of IAM users inside those accounts. This allowed them to manage employees from a single AWS account, that is, the gateway account in our diagram, and to grant them full access permission within their own isolated environment. With this setup, IT operators can log in to the production environments
>
> **[3:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=190)** and perform their jobs without restrictions. We can say the same about developers. They have full control as long as they are within the confines of the development account. This is a great example of separation of duties, which is a key element of [[Data Security]]. Let's wrap up this chapter by revisiting some important facts we have learned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Java]] (1), [[Data Security]] (1)
> **Env Vars:** aws (7), iam (4), ec2 (3)
> **CLI Commands:** aws (7), ls (1)
> **UI Navigation:** click on (4), go to (2)
> **Tools:** aws console (1), terminal (1)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [IAM key points](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=0)** - [Carlos] Some of these key points may seem like common sense, but it's important to emphasize them for those of you that will be using this knowledge right away or you intend to take the AWS Developer Associate Exam. Always use an IAM user to interact with your AWS resources. Even if you are the owner and you're using your own personal AWS account, avoid using the root account credentials and keep them safe. Instead, use an MFA-enabled IAM user. All AWS root accounts should also have [[Multi-factor Authentication]] enabled. When managing more than a handful of IAM users, it's preferable to manage them using groups rather than individual users. AWS access to services is set to Deny for all, unless otherwise specified in their access policy. Prefer the use of roles to allow your application to access resources and services. This way, you can concentrate on maintaining roles that are very exclusive to the application's need instead of having to manage credentials and rotate access keys frequently. Access keys should never be hardcoded in your source code, because sooner or later you'll forget they're there, and you'll accidentally commit to your source code repository. Once this happen, your access keys will become public knowledge within your team, and you'll be forced to destroy them and create new ones.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multi-factor Authentication]] (1)
> **Env Vars:** aws (5), iam (3), mfa (1)
> **CLI Commands:** aws (5)
> **Exercise Files:** source code (2)
> **Speakers:** - [carlos] (1)

#### [Challenge: IAM roles and policies](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=0)** - [Narrator] Managing permission for multiple users can be challenging. It's nearly impossible if you have to scale to hundreds or even thousands of federated user accounts. Turns out there's an efficient way to handle this. In this challenge, we're going to create an IM policy in order to limit which services are visible. The goal is to do this once, and then you can associate this policy with as many users as you need using an IAM role. Consider this: start simple, or better yet, start with nothing and then add services as needed. Give it a try now before you proceed.

> [!info]- Semantic Content
>
> **Env Vars:** iam (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: IAM roles and policies](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=0)** - [Instructor] All right, so my solution for this challenge includes the creation of an IAM user and we're going to pretend this demo user is a assistant administrator for our company. So this person needs to be able to create [[Amazon EC2|EC2]] servers with full control of what they're doing but they only need read only access to VPCs. They should be able to do networking stuff but they should not be able to change anything regarding VPCs or networking at all. So we're going to create a policy and that policy is going to have VPC read only access and it's going to have EC2 full access. We're going to discuss later the second part of this challenge which is to assign a role associated to this policy so that we can replicate this effort for many, many users, let's go to our console. Before we create our policy, I wanted to show you what it looks like from the user's perspective. I created a user called Iamdemouser and if I click here on the VPC dashboard, you see we get these error messages that says retry instead of the count of VPCs, subnets, and so on. If I click on my VPCs, it says you're not authorized to perform this operation. This is because when you create a user, if you don't assign any policies they have access to absolutely nothing. That's default behavior within AWS.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=95)** Now let's go back to our console using our admin user and create a policy that we can associate with this other demo account. And now we're logged in here using our admin user, I'll go to policies, I'll click on create policy, and I don't want to type every single action that I want to do here. So I'll just click on import managed policy, I'm going to type VPC and I'm going to choose AmazonVPCReadOnlyAccess. Since we also require the ability to work with EC2s I'll click import again, and I'll type EC2. If I scroll down, I'll find AmazonEC2FullAccess, I click on that and I click on import. So now we have a policy that has both VPC read only access as well as EC2 full admin access. I'll click on review, I'll give it a name, I'll type SysAdminPolicy
>
> **[2:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=171)** and I'll click on create policy. Now our policy has been created. Let's go ahead and associate it with our user, click on users, select our user and click on add permissions. We're going to choose existing policies and I'll type SysAdminPolicy, and we see it there, so I'll select it and click review. And that's it, add permissions. Now I'm going to go back to our user to see if these permissions are taking effect. You may need to log out and log back in with that particular account to make sure this change will take effect. Let's go. All right, after a few minutes, I logged out and logged back in with the iamdemouser and now you can see we're getting the count of VPCs, subnets, and so on. And if I click on my VPCs, I don't get an error message anymore. It actually shows the VPC, same thing for EC2. If I go here, I get my running count and no error messages of any kind, so everything is good to go. So now for the second part of this challenge, how can we reuse this permission if we have several people that need access to this? Let's go back to our admin console, back here in our administration console, since we have a policy,
>
> **[4:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=262)** what we can do is set the policy to a group. For example, I click on groups and let's say I wanted to assign it to the admins group. I'll click on it. I would click on attach policy, I would find SysAdminPolicy and select it and then attach it, after that anybody within the admin groups will get this policy assigned to them. Other options that you have is roles, I will click create role and when you're creating a role, you can assign it to a federated login provider, usually [[Active Directory]] and then you can use your corporate credentials and then anybody logging in to those credentials can be associated with the role and this role is going to have the policy that we created. And that's how you associate a policy with a large number of users. And that's my solution to this challenge regarding permissions, roles, and user groups, hopefully it's very similar to yours.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (5), [[Active Directory]] (1)
> **UI Navigation:** click on (13), go to (2), scroll down (1)
> **Env Vars:** ec2 (5), vpc (5), iam (1), aws (1)
> **CLI Commands:** find (2), aws (1), make (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Amazon Simple Storage Service (S3)

[↑ Back to Table of Contents](#table-of-contents)

#### [S3 as a static website](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=0)** - [Carlos] Storage is one of the cloud's most popular feature. Among other things, it enable businesses and individuals with the ability to back up their computers and phones. These files can later be accessed from anywhere. Unfortunately, a lot of people set up their [[Cloud Storage]] accounts with security settings that are far too open. In these sections, we'll help you avoid this by showing you different measures you can take to safely store your confidential data in Amazon S3 Service. To start our conversation about S3 security, let's create a bucket and give it read-only access to the entire world. We'll do this using S3 static website feature, which enables access to the bucket via web browser. Let's go to the console now and create our bucket. Here we are in the S3 console. We'll click Create bucket. We'll give it a DNS-compliant name, rivas-demo- bucket3, bucket5, and we'll click Create. We'll click on our bucket name. We're going to Upload a file here. Click on Add files. And we'll choose index from our exercise files. And click Upload. As you can see, our file has been uploaded to our bucket. Now if we go to Properties
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=94)** and go to Static website hosting and click on that, we'll click on Use this bucket to host a website. And we'll specify index.[[HTML]] as our Index document. We'll click Save. Now going back here, you see there's an endpoint here at the top. We're going to use this to make sure everything is working. We'll click on that, and we'll get an error. It's important to remember that buckets are locked down by default to avoid oversharing disasters. Before this bucket is open to the world, we need a bucket policy. Let's take care of that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (1), [[HTML]] (1)
> **UI Navigation:** click on (5), go to (3)
> **File Paths:** index.html (1)
> **CLI Commands:** make (1)
> **Env Vars:** dns (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [carlos] (1)

#### [Bucket policies](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=0)** - [Instructor] Now that we have our bucket set up and ready to host our static webpages, we need to create a bucket policy that's going to allow web visitors to access the [[HTML]] file that we just loaded into it. Let's go to our console. This is our bucket. We'll go to permissions here. I'll click on bucket policy. This is the bucket policy editor. A bucket policy is a [[JSON]] document which we use to specify access restrictions on the objects stored in our bucket. If we open up access to the world, our static website should work. Let's try that now. We'll go to our code editor. This file, bucket_policy.json, which you can find in the exercise files, contains a bucket policy. This policy shows four main elements, effect, which you can see here on line five, which is allow, permitting access to our actions. Principle on line six. In this case, principle is everyone. Action, in this case, get object, permitting the principle to read objects within the bucket and resource, where we specified our bucket ARN, or Amazon Resource Name, along with slash star to be sure we can serve more than just one HTML file. We're going to copy this document and go back to our console.
>
> **[1:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=91)** We're going to paste the document and we're going to remove this from the resource and just copy the ARN of our bucket. Click copy. Paste, remove this extra space here. We're going to click save. As you can see, we get a warning that says public. You have provided public access to this bucket. That's okay, because that's what we want. Let's go back to properties and back to the static website hosting. We're going to retry our endpoint here and this time it should work. Great, this is the contents of our index.html file that we have in our bucket. We've proven this works now, but let's go a different direction and start locking things down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (3), [[JSON]] (2)
> **Env Vars:** html (2), arn (2), json (1)
> **UI Navigation:** go to (3), click on (1)
> **File Paths:** bucket_policy.json (1), index.html (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** bucket_policy (1)
> **Exercise Files:** exercise files (1)

#### [S3 bucket encryption](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=0)** - [Instructor] Just like in the real world, the best measure you can take against theft is to have several layers of protection. If an intruder gains access to your files in an S3 bucket and you have encryption enabled they won't be able to do anything with your data without access to the encryption key. Let's enable this additional layer of protection in our bucket. Click on permissions, go to bucket policy again. I'm going to remove this public policy. We'll go back to properties, static web hosting and disable. We'll click save. Now we'll go to default encryption. We're going to choose AES-256, which is server side encryption with Amazon S3 managed keys. This means you don't have to do anything. The S3 service will manage your encryption keys. We'll choose that and click save. That's all you need to do to enable encryption with S3 inside your bucket. By the way this does not encrypt our already existing files. Keep that in mind. You can always choose to encrypt the files yourself but as you can see in the diagram this approach makes you responsible for managing your keys. It's important to remember this option if you are presented with scenario where you have to meet corporate or government regulations that require that you are in total control of the encryption keys being used.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** aes (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [S3 object versioning and MFA delete](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=0)** - [Instructor] If you're using [[Cloud Storage]] within your company, chances are several people have access to it. In order to prevent accidental deletion of files or overrides, AWS provides additional layers of security. Let's look at versioning right now. When versioning is enabled in your S3 bucket, S3 will keep track of changes that occur to your files including deletes. Each time, the same file is uploaded, S3 saves the old ones and assigns a new tracking ID to the latest version. This is all transparent to you, the user. Typically you'll interact with the latest version of your file, but when things go wrong, say an accidental override, you can always go to the S3 console and choose to retrieve the previous version of your file. Let's go to our console now. Here we are in the AWS console, and we have our bucket open. We'll click on properties and select versioning. We'll click enable. Keep in mind that when enabling versioning, it cannot be disabled. You can suspend it, but you cannot disable it. You might be thinking if I update my files very frequently and S3 keeps copies of all versions, it can get expensive very quickly due to added storage costs. Not to worry. We can manage that using life cycle rules. We'll go to management, life cycle,
>
> **[1:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=93)** and we'll add a life cycle rule. We're going to call it delete old versions. We'll click next. We don't need transitions in this case. We'll click next. We'll configure expiration. We'll check on previous versions and select any amount of days that applies to your case. In this case, we can leave it at 365, meaning that after 365 days, all previous version of the file in your S3 buckets will be removed. We click next and click save. With this rule, you can [[Representational State Transfer (REST)|rest]] assured that the all versions will be kept for our desired time period but then permanently deleted to save on storage cost. Even though you can't see this option in the AWS console, once versioning is enabled in your bucket, you have the option adding one more layer of protection, and that is multifactor authentication deletes. Obviously this will require IM users that have multifactor authentication enabled. These users, assuming they have permission to delete files in your S3 bucket, will be asked to provide their security token along with their delete requests. The way to enable it is through the AWS [[CLI]] tool with a command seen here. Now let's revisit important things to remember from this section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[CLI]] (1)
> **Env Vars:** aws (4), cli (1)
> **CLI Commands:** aws (4)
> **UI Navigation:** go to (3), click on (1)
> **Tools:** aws console (2)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [S3 key points](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=0)** - [Instructor] As we close this section, let's revisit some important facts about S3 that usually come up in Certification exams. Bucket policies are your primary tool to manage access in and out of your S3 bucket. The default policy if you don't specify one, is to deny access to all. You can also restrict access with ACLs, Access Control List, but this is the legacy way to do it, and bucket policies are preferred. Data encryption in transit is done using SSL/TLS, or as most people know it, HTTPS or secure HTTP. Data encryption at [[Representational State Transfer (REST)|rest]] can be done using the S3 managed keys, or KMS managed keys, and we'll talk more about KMS in the next section. S3 managed encryption, [[Server-Sent Events|SSE]]-S3, is the preferred method, and it does not incur additional charges. KMS managed encryption, SSE-KMS, comes with KMS service charges. It's also worth noting that you can always encrypt the files yourself prior to uploading to S3. But in this case, you are responsible for managing encryption keys, as well as encryption and decryption. Enable versioning and [[Multi-factor Authentication]] Deletes to protect files in your S3 buckets against accidental overrides or deletes. Once versioning is enabled, it cannot be reverted back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Server-Sent Events|Sse]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Multi-factor Authentication]] (1)
> **Env Vars:** kms (5), sse (2), ssl (1), tls (1), https (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: S3 presigned URL challenge](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=0)** - [Instructor] There are times when you will have files in S3 that you want to share with the outside world. Anonymous users can't access S3 unless you make the bucket totally public. But this isn't exactly a secure practice. Is there a way that I can share files without compromising security? In fact, there is. This is done by using presigned URLs which point to the specific files that you want to share. Go ahead and create an S3 bucket and add some image files to it. Then using the AWS [[CLI]] tool, create a presigned URL that allows the public to view these images without actually accessing the entire contents of your S3 bucket. Go ahead and try it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** aws (1), cli (1), url (1)
> **CLI Commands:** make (1), aws (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: S3 presigned URL challenge](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=6)** - [Instructor] So, the challenge that you have here in front of you is that you don't want to share the entire contents of your S3 bucket. You just want to share one specific file for a specific period of time with one person across the internet. In this case, let's say we want to share image one, the JPEG. This file's going to have an object URL, which I can click right now. And we're going to get an error message that says access denied, as we expected it to be. Now, we want this file to be shared with someone across internet but we don't want to share the [[Representational State Transfer (REST)|rest]] of the contents. So let's go ahead and create a pre-sign URL and see how that works. Here we are. I'll show you the bucket. So you can see image one and image two there. Now I'll type aws s3 pre-sign and then the name of the bucket and the file name as well, which in this case is image one. Now, I'm going to add something else here. Dash, dash, expires in, and I'm going to specify 30 seconds. Of course, in a more realistic scenario, you would specify a much longer time interval, but for our purposes, 30 seconds is enough. I'll click enter. Now you get this URL that you can share with the other person, and they'll be able to download that content from your s3 bucket without having access to anything else in that bucket.
>
> **[1:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=101)** Let's verify. I'll copy the URL and let's go back to our browser.
>
> **[1:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=112)** I'll paste the value in here and we get our file. Now, the interesting thing here is that after 30 seconds, this URL is going to expire. So the person will no longer have access to this particular file in your s3 bucket and they never had access to anything else, which is the whole purpose of this challenge. If I refresh, now we get a message that says request has expired, as we expected. And that's the solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** url (5), jpeg (1)
> **CLI Commands:** aws (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 3. Key Management Service Encryption

[↑ Back to Table of Contents](#table-of-contents)

#### [Key Management Service (KMS) introduction](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=0)** - [Instructor] KMS, or Key Management Service, is one of those services that you won't likely use directly, but behind the scenes it can influence your security choices in some of the most popular AWS services, like S3 and EBS. If you have the task of managing encryption for an AWS environment, it is in your best interest to use KMS. In some cases, encryption may be a compliance requirement for your application, such as when handling medical records or credit card information. KMS protects your encryption keys and therefore protects your encrypted data. If your data falls in the wrong hands, everything should be fine, as long as they don't have access to the encryption keys that were used. If you need to use your own encryption key for compliance reasons, you can still use KMS because it supports imported keys. With that said, we'll do our demo right away to help you understand exactly how KMS works. But please understand that when using this tool, combined with other AWS services, you likely won't need to do anything at all because it integrates seamlessly and just needs to be configured once and done.

> [!info]- Semantic Content
>
> **Env Vars:** kms (5), aws (3), ebs (1)
> **CLI Commands:** aws (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using AWS KMS](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=0)** - [Instructor] We're going to start our demo in the IAM console, here on the left we'll go to the bottom and click on encryption keys, not the most intuitive location but this is how we get to the service. The first thing you'll notice is that there's a region reference here. This is because of a significant difference between IAM and KMS. IAM is a global service, but KMS is region specific. So be sure to create your encryption keys in the region that you intend to use them. I'll choose Oregon, US West 2. We're going to click on create key, we'll give it a name and description, our-demo-key-2, this is for our demo. Advanced options only comes into play if you want to import an external key to be used in AWS, we'll just leave it as is and click next. We don't need tags at this time but if this key was for development or production it would be a good practice to tag it with an environment tag, for now, let's just click next. Here we can choose which IAM user and roles can be administrators for this key. An administrator is typically not the person that will use this key to encrypt data but rather the individual with permissions to change the key, disable it or delete it. We'll choose our user and click next,
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=95)** now usage permissions state which user or roles can use this key for practical applications. We'll choose the same user in our case but in practice this likely will be a different role or a different person. Click here and click next, last step here. This is just a review that everything looks correct and then we can create our key, and our key has been created. If we select it and click on key actions, we could enable it, disable it, and schedule it for deletion. Even though we have administrator rights over this key, we're not allowed to delete it, we can just mark it for deletion and after the wait period, which is a minimum of seven days the key will be deleted. This is a protection mechanism because if you accidentally delete this key, any and all data that was encrypted with it essentially becomes garbage. And this is the view from the administrator point of view. These are the actions that you can possibly take with your key. It's also worth noting that KMS has a feature to allow you to rotate your keys automatically. It is a well known practice that forcing everyone to change their password frequently adds another layer of security, the same can be said about encryption keys. So just remember that this feature exists and it's a great practice to have it enabled. Finally, in order to use the key to encrypt manually
>
> **[3:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=189)** although you won't need this since you can just enable KMS with your key in your desired data store like S3, RDS, or EVS, this is the command that you would use if using the AWS [[CLI]] tool. Of course, you can also do this from the API from your own code. And this is the decrypt command and the command to enable automatic key rotation that we just mentioned. Please note the key ID value that needs to be used and not the key alis or name. Okay, let's recap what we have learned about KMS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** kms (5), iam (4), aws (2), rds (1), evs (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** is a  (4)
> **CLI Commands:** aws (2)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### [KMS key points](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=0)** - [Carlos] Some important things to remember regarding KMS are: KMS integrates with S3, EVS, Redshift, RDS, and other services to make it really simple to manage encryption keys that you can use in those services. KMS keys are region specific, and they cannot be exported. In order to delete a key, it needs to be scheduled with a wait period of no less than seven days. If you need to, you can import your own keys and manage them through KMS. Just select your user access keys. KMS key rotation is a good practice, and it can be automated with the enable-key-rotation API call. All keys have a policy associated in order to define who can manage the key, that is, delete it, change it, or disable it; and who can use the key, as in, use it to encrypt and decrypt data. This was a very short lesson since you won't likely use this service directly but more indirectly with another AWS service. Just like IAM, this is a service that you need to be aware of, because in encryption of data in the cloud is not only a best practice, but in some cases, it's a compliance requirement.

> [!info]- Semantic Content
>
> **Env Vars:** kms (5), evs (1), rds (1), api (1), aws (1)
> **CLI Commands:** make (1), aws (1)
> **Definitions:** is a  (2)
> **Best Practices:** good practice (1), best practice (1)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Speakers:** - [carlos] (1)

#### [Challenge: Key Management Service](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=0)** - [Instructor] In the world of [[Data Security]], encryption is a necessity. That said, your encrypted data is only as secure as the protection that you give to your encryption keys. In this challenge, we're going to grant temporary permissions to an IM user to be able to access our KMS encryption key. Once we verified the operation worked, we're going to revoke those permissions. This is all done using KMS grants. These grants are temporary in nature. They're easily revoked and they're key knowledge for AWS exams. Go ahead and try using the AWS [[CLI]] tool to create your own KMS grants.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Security]] (1), [[CLI]] (1)
> **Env Vars:** kms (3), aws (2), cli (1)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Key Management Service](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=0)** - [Instructor] So, what we're going to do is we're going to go to the key management service. You're going to notice I have a key here, I'll click on it. And by the way, this long, alpha numeric string, we're going to need it, that's our key ID, so just keep that in mind. If I go down here, there's a key administrator, which is myself. I'm allowed to delete this key if necessary and there's something else here which is key users, which you're going to notice, there's nothing here, there's nobody, which means I don't have any automated resources or people assigned to be able to encrypt data or decrypt data using this key. Let's go to IAM real quick, I'll click on users and in here I have one called iamdemouser and I want to assign this person the ability to encrypt and decrypt data, so let me show you how to do that. This is my list of reference commands. The first one we're going to use is kms create-grant, a grant is a temporary permission to use a KMS encryption key. You also provide a list of operations, in this case, Decrypt and Encrypt. That's all I want the user to be able to do. And of course, we have to provide the user, in this case,
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=94)** the entire ARN or Amazon Resource Name for the iamdemouser that we want to provide the permissions to. And because KMS is region specific, you always have to specify which region are you referring to. Let's go ahead and test this command. Here in the command prompt, I'll go ahead and paste my create-grant command and as you can see it, executed right away and we get a GrantId, which I'm going to save 'cause we're probably going to need this later. So I'll save this value. Now, the great advantage of what we just did is that we didn't have to go to the console, we didn't have to create a permanent user attached to this key for encrypt/decrypt operations. We just did this in an automated fashion with a single command and we can revoke this at any time without having to go to the AWS console for this. Now, what if I wanted to know what grants I've issued for this particular key? Then the command would be kms list-grants and you have to provide the key ID which all grants are associated with the specific key at all times, so let's try that command right now. I'm going to copy the command from my reference document and I'll paste it here for you. This shows the key ID, the region, and the command kms list-grants. And we get one result which is the one that we just added, it says that it's assigned to this principal, which is the iamdemouser, has a GrantId that we're going to need here in a moment,
>
> **[3:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=190)** and the operations that are allowed for this particular user which they are Encrypt and Decrypt. Now let's say this person finished doing the work, it is in our best interest to remove this permission. So let's take a look at that now. In this case, the command would be kms revoke-grant and we just need to pass the key ID and the grant ID that we want to revoke. So we're going to need the grant ID value, which we have here and I'm going to paste it into the command that I already have so that you can see it. Here's the command and on execution we get no error messages, just to be safe what we're going to do is we're going to clear the screen and we're going to execute a list-grants again to make sure we don't have any grants anymore associated with this particular key. Here's the command and as you can see for this particular key ID in this region, we don't have any grants anymore. And that's how you assign temporary grants for encryption and decryption to users in an automated way using the AWS [[CLI]]. And that's just my solution for this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** kms (2), aws (2), iam (1), arn (1), cli (1)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** aws (2), make (1)
> **Tools:** command prompt (1), aws console (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. User Identities with Cognito and Web

[↑ Back to Table of Contents](#table-of-contents)

#### [Cognito concepts](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=0)** - [Instructor] AWS Cognito is the tool of choice for solving the problem of user registration, login and managing their profiles and preferences. This is common to most application these days. If it wasn't for a tool like Cognito, you'd be forced to write a lot of logic into your application for user credential management, two-factor authentication, social logins, and several more identity related features that Cognito provides right out of the box. But the main reason I'm showing you Cognito here, is because it's a really good identity provider, as well as an identity broker. As an identity provider, it does everything we have mentioned so far. As a broker, it allows your application to take advantage of social logins, such as Amazon, [[Facebook]], and [[Google]], and map those logins to a user profile to be used within your application. One very important feature as well is the ability to trade Cognito credentials for AWS temporary credentials. This allows your Cognito users to access S3, to download or upload files and read or write from a DynamoDB table, or any other AWS service that your application may require. There is another reason why I want to talk about Cognito, and that is the workflow taking place behind the scenes. This login process is the same for all compatible SAML providers, such as [[Active Directory]]. SAML, by the way stands for Security Assertion Markup Language and is an open standard for exchanging authentication
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=94)** and authorization data between our identity providers and our service providers, in this case AWS. Chances are you'll find yourself more than once, while working in the field, connecting an active directory or some other SAML compatible identity provider to AWS. And if you'll be taking AWS Certification exams, this sign in workflow will come up directly or indirectly in one or more questions. So without further ado, let's get started. We'll detail the login workflow and then proceed with our demo.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2), [[Facebook]] (1), [[Google]] (1)
> **Env Vars:** aws (6), saml (3)
> **CLI Commands:** aws (6), find (1)
> **Definitions:** stands for (1), is an  (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Workflow](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=0)** - [Instructor] Because Cognito is SAML compatible, the login workflow that we'll learn about here is very similar to what you would see if you were in a corporate environment using [[Active Directory]] to log into the AWS Console. In this diagram, you see the entire process. It begins with the user trying to reach your application from their mobile device. This individual may choose one of the available social login providers such as [[Facebook]], Amazon, or [[Google]] to avoid having to type a username and password. If this is the case, their identity will be verified against their provider of choice. And if they pass verification, they'll be issued a token. This token will then go back to Cognito to be validated against the chosen provider. If the above passes, then the person is considered logged in and can access their Cognito identity, which contains all their user profile information and preferences. Let's take a break from our diagram for a moment to explain a couple of Cognito concepts here. User pools are Cognito's own storage mechanism for user profiles. Cognito offers two kinds of user pools, one for identity federation and the other for users. The easy way to remember this is if your intention is just to get temporary AWS credentials to allow authenticated user to use AWS services, then you'd use an identity pool. If your goal is to create and manage user profiles for your own custom application, mobile, or web, then choose user pool.
>
> **[1:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=96)** Back to our diagram, you can see on the right, we have AWS STS which is AWS Token Service. This is the service that will accept Cognito's token and optionally, at the request of the application developer, send back temporary credentials meant to be used in other AWS services. This diagram shows a scenario that you're most likely to see as an AWS professional in practice. In this example, the user logs in through a web portal and the credentials are validated against the company's LDAP identity store, typically [[Microsoft]] Active Directory or similar. Once the identity is validated, the information is passed on to AWS Single Sign-On endpoint which accepts the validated token and calls the security token service. In the end, if everything checks out, the user is redirected to the AWS Console with an AWS role that matches the one assigned to his Active Directory identity. In a large company with dozens of users and accounts being opened and closed daily, this setup eliminates the need to maintain IAM users. And as you saw, even though the involved parties are different in this case, the process itself is essentially the same as using Cognito as a social login provider. Let's now do our demo which will clarify this even more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (3), [[Facebook]] (1), [[Google]] (1), [[Microsoft]] (1)
> **Env Vars:** aws (10), saml (1), sts (1), ldap (1), iam (1)
> **CLI Commands:** aws (10)
> **Cross-References:** go back to (1), as you saw (1)
> **Tools:** aws console (2)
> **Analogies:** similar to (1), such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Cognito demonstration](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=0)** - [Instructor] We're going to start our demo here on the main Cognito screen. we'll choose User Pools, and then click Create. User pools, Create user pool. We're going to type a name, let's call it [[LinkedIn]]-demo-pool. We'll choose Review defaults. We'll scroll to the bottom and click Create pool. With this, our pool is now created. However, not all default values will apply for our needs. So we'll go right back and start making changes. We'll click on Users and groups. This screen is going to list our users and groups. Groups can be used just like IM groups. If you need to give user permissions it's best to do it in groups, as opposed to one by one. These groups will map to existing IM roles. Users can be managed from here as well. We don't have any at this time, so let's move on. We'll click on App integration. We're now going to set up [[Facebook]] as our social identity provider. We'll start by adding a domain. We'll click Add domain. We'll call it ourdemodomain. We'll check availability. The domain is available. So we'll save our changes. This domain address will become our endpoint
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=94)** for interaction with Cognito from outside of AWS. Now let's go back to App integration again. And we're going to create an App client. A client in the world of Cognito, refers to an application, web or mobile trying to access this user pool. We'll click Add app client. We'll just give it a name and click Create, ourappclient, and click Create. And we'll go right back to App integration. Let's go down to Federation now. We'll click here. Federations allows us to use identity provider to pass through Cognito and avoid the registration and login altogether. We're going to add Facebook and then map some of the information that comes back from Facebook into our own user profiles. We'll click Enable, we'll click on Facebook and go to the bottom. We'll add our Facebook app ID and secret key here. We'll get our information. Facebook app ID and the API key.
>
> **[3:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=180)** For the scope we'll use public_profile and email.
>
> **[3:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=190)** We'll click Enable. Right away, we'll go to Attribute Mapping. Attribute mapping means taking the data that is coming from Facebook and saving it as fields that make sense to our application in our user profile. Email for example, it's pretty obvious what it is, and it will map to a field with the same name in our user pool. What Facebook calls first name we will store on our end as Given Name. Choose email, choose the Facebook attribute and map it to Email as well. On our side, we'll choose first_name as well and map it to Given Name. We'll save the changes and we'll go to App client settings now. We'll click here, and we're going to enable Facebook and Cognito as well. For our callback URL we'll type in https. It needs to be secure http. It will not accept a URL for callback that is plain text http. We'll type, [linda.com](https://linda.com), we'll fix a typo here, https.
>
> **[4:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=272)** The callback URL simply means the address that the user pool is going to send us to, once the user is authenticated. We're going to scroll down here. Since we're using OWA 2.0, we'll choose the Authorization code grant, and for the scope, which is the information, which we have access to from our provider, we'll pick email and profile. We don't need their open ID, however, it is required to be able to receive the email. So we'll click it. We'll click this and the profile as well. Let's save our changes. As you can see, it's a pretty involved process. So don't be discouraged if you don't get it working the first time around. Now let's go to Facebook. I need to show you the application that we're using. Here on Facebook we've created an app and we added a single product, which is Facebook Login. And for the purpose of our demo we just need to add this OAuth URL here. We'll delete this previous one, and paste the one for our demo. By the way, this domain name is the one we just created for our user pool. This is the URL that Facebook is going to use, once the user passes Facebook's own login validations. We'll click Save Changes, and that's it. We have reached the point of testing. Let's go back to our console now.
>
> **[6:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=367)** We need to collect a value from here so that we can use it for testing. And that is the App client ID. We'll copy this value and save it in a note. App client ID. Now we'll put together a URL for testing. Let's do that now. We'll take the URL that we have for our Cognito user pool endpoint, and we're going to add login with a client ID that we just collected. We'll remove this placeholder and paste our app ID.
>
> **[6:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=413)** Now this string we can attach it to our URL.
>
> **[7:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=422)** Let's maximize this so you can see it. This is a long form URL. We're going to copy that value and go ahead and test it. Open a browser window, paste the URL, and we get the Cognito Sign In screen. As you can see, we have the option of using Cognito itself or to continue with Facebook. Let's click Facebook. And we're redirected to [linda.com](https://linda.com), which is the URL we configured earlier. That's it guys. We managed to sign up and log in. Let's now go back to our console to see what happened behind the scenes. We'll click our console, click on User Pools click on our pool, and just like before, we'll go to Users and groups. We'll click groups first. You'll see that we have a group that says Autogenerated group for users who sign in using Facebook, go back to users, we should have one user ID here. We're going to click on that. As you can see, it was able to collect the email from Facebook as well as the given name or first name. Next time you see a website that says sign in with Facebook, you'll likely remember this complex setup and you'll appreciate all that happens behind the scenes that much more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (20), [[LinkedIn]] (1)
> **Env Vars:** url (11), aws (1), api (1), owa (1)
> **UI Navigation:** click on (6), go to (5), scroll down (1)
> **Cross-References:** go back to (4)
> **Analogies:** just like (2), for example (1)
> **Prerequisites:** set up (1), required to (1), setup (1)
> **CLI Commands:** aws (1), make (1)
> **Code Identifiers:** public_profile (1), first_name (1)

#### [Cognito key points](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=0)** - [Carlos] Let's now review the things that I'd like you to remember about Cognito. Remember this workflow, particularly the part that exchanges the Cognito token for AWS credentials. This process is the same used by other SAML-compatible corporate identity providers, such as Shibboleth and [[Active Directory]]. So, the Security Token Service, STS, is used a lot, even if you never interact with it directly. Other than the authentication workflow, remember that user pools are mostly used for authentication and user profiles within your app; and identity pools, as in federated identities, are for authenticated users that need to receive a temporary limited access set of credentials into AWS Services. [[Multi-factor Authentication]] is supported. Using AWS SNS Service, you can have Cognito send a text message to further validate a user's identity prior to login. Thanks to AWS Lambda, you can trigger events and actions based on logins and registrations, such as alerts or adding records to a database, or sending emails as needed by your application. And last but not least, Cognito also keeps tracks of the same user logging in from different devices and can keep data in sync, making the experience that much more seamless for your users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1), [[Multi-factor Authentication]] (1)
> **Env Vars:** aws (4), saml (1), sts (1), sns (1)
> **CLI Commands:** aws (4)
> **Analogies:** such as (2)
> **Speakers:** - [carlos] (1)

#### [Challenge: Cognito automated login](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=0)** - [Instructor] We have seen how to log in to a custom web application using Cognito through the user interface. But what happens if we're creating automated code and we want that code to log in using one of our Cognito credentials? Lucky for us, that functionality is available, and we can certainly include it in our custom applications. In our case, we'll use the AWS command line tool to test this feature. We need to complete the following steps. We're going to create a Cognito user pool, we're going to create a user in that pool, and then we're going to use the AWS [[CLI]] tool with that username and password to get successfully authenticated by Cognito. Go ahead and give it a try yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** aws (2), cli (1)
> **CLI Commands:** aws (2)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Cognito automated login](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=0)** - [Instructor] Here we have a demo pool. Let me show you. We're using Cognito here and we created this pool, which has a user. I put my name here. This is the only user that we have in this company user pool. Now, we want to use this pool to authenticate automatically into our application. So the goal of this challenge is to create an automated command that we can send from the [[CLI]] and get a session ID back that we can use to interact with the server in exchange for valid credentials, like username and password. So the first thing we've got to do here is to create an app client. So I'll click on App clients. An app client is like an interface into your user pool. In this case, we're going to use this app client to allow people to use usernames and passwords to log in to our application. If you don't have this part done yet, you would click on Add another app client. You can put a name here. Any name is fine. Just make sure you uncheck the client secret and you check where it says enable username and password based authentication. I'm not going to do it here because I already have one that I can show you. And all we need to take from this is the app client ID, which you're going to need for the authentication process. Something else you're going to need is the region. In this case, we're working in Oregon, which is us-west-2.
>
> **[1:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=93)** So I'll need that value. And of course, we're going to need the username and password that we created. Let me show you what that command looks like now. So if you wanted to authenticate with the command line, here's the command. It would be using AWS CLI CLI tool and the command would be cognito-idp, which is Cognito Identity Provider. And we'll issue a initiate-auth command, which is initiate authentication. And we're going to use the flow that specifies username and password and that's why we checked that box when creating the app client. We also need to specify our username and our password. And the client-id. And of course, remember, we're using something that is region-specific. So we need to specify us-west-2. So let's go ahead and test this command in the command prompt so I can show you the output. Here in the command line, I'm going to paste the value of our command. Here's our command. I'll hit Enter. And the command works and we get a session ID. Any following commands that you send after this one will need to include the session ID so that the system knows that you're already authenticated. We also get a request for a NEW_PASSWORD_REQUIRED. This is expected because this is first time we're logging in with this account. So it's going to require that we change our password for future logins.
>
> **[3:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=186)** And that's my solution to the challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (3)
> **Env Vars:** cli (3), aws (1), new_password_required (1)
> **Tools:** command line (2), command prompt (1)
> **CLI Commands:** make (1), aws (1)
> **UI Navigation:** click on (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Certificate Manager

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating and managing certificates](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=0)** - [Instructor] Several decades ago, encrypting data at [[Representational State Transfer (REST)|rest]] was considered enough for data protection. As long as attackers didn't have access to the encryption key, the data was deemed to be safe. In a connected world on the other hand, your data needs to be guarded constantly. This means that when using public networks like the internet, your data needs to be encrypted while in transit. We can do this using TLS certificates. Here in the AWS Console, I'll type certificate. And it should be the very first one that shows up. I already have one here, but let me show you how to request one. Click on request. Request public certificate, then next, and now you would type [yourdomain.com](https://yourdomain.com), or you can type asterisk, dot, [yourdomain.com](https://yourdomain.com) which gives you more flexibility. This is known as a wildcard certificate. Now, of course, before you get your certificate, you need to prove that you actually own [yourdomain.com](https://yourdomain.com), in this case. And you can do this with DNS validation. I recommend this approach over email validation, and that's it, that's just a two step process. You would just click request and validate using DNS. I'm going to cancel and go to mine and show you what that looks like. What they'll do is they'll give you these two CNAME entries that you can put in your DNS provider. In my case it's Route 53, but it could be [[Google]] Domains, GoDaddy, and many others.
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=94)** So if you put these two entries or rather these two values as a CNAME entry in your Route 53, that should be enough to prove that you actually own this domain. Let's go Route 53.
>
> **[1:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=114)** I have a couple of hosted zones here. Let's choose the one for our example and click on view details. As you can see, I have those CNAME entries here and this is just a proof that I actually own this domain. Again, this is Route 53, but you could be using GoDaddy or Google Domains or any other DNS name provider that you prefer. And all you would have to do is the same process. Just include the CNAME entries provided by Amazon as a proof that you actually own this domain. Let's go back to the Certificate Manager. Now, the question is, once I have a certificate, what can I do with it? There's an option down here that says integrated services. Let's click on that and you can use it for Load Balancing. You can use it for CloudFront. You can use it for Amazon Cognito or Beanstalk. As you can see, the list keeps growing every year of services that support certificates. And now the big question is, how much is this going to cost you? Well, I have another browser tab here for that. And it says here that public TLS certificates are free. Now, of course, those services that I just mentioned, of course, they're going to cost you money, but the certificate itself is not going to add any additional cost.
>
> **[3:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=206)** You get this great additional layer of security without any added cost and that's good to know for data protection. Let's go back to the Certificate Manager. Now, as you can see here, I have it only for the top level domain. So I cannot use it say for prod.[cjrivas.com](https://cjrivas.com). I only have it for the top label domain. In this case, that's perfect for me. That's all I need this certificate for. And, of course, now that I've shown you how to create them, we're going to talk about implementation up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dns (4), cname (4), tls (2), aws (1)
> **URLs:** [yourdomain.com](https://yourdomain.com) (3), [cjrivas.com](https://cjrivas.com) (1)
> **UI Navigation:** click on (3), go to (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1), known as (1)
> **CLI Commands:** aws (1)
> **Tools:** aws console (1)

#### [Using certificates with AWS Resources](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=0)** - [Instructor] All right, it's time for us to get hands on with security certificates. Let me show you the problem first, I have this [[Ubuntu]] [[Amazon EC2|EC2]] instance running Apache web server. You can see the public IP here, and it says not secure. It says your connection to this site isn't secure. This is okay for our own testing but if you have a customer facing website people are not going to feel comfortable about typing personally identifiable information in your website if they see this message. So how do we fix it? Let's go to EC2, go to instances. We have our web server running here, this is the EC2 instance running our application. So the first thing I did was scroll down to target groups and I created a target group that has our instance. You can see it right here and it's listening on port 80. Once we have this target group then we can create a load balancer that is associated with this target group. Let's take a look at that. Here's my load balancer, it has an ugly name assigned by AWS, of course you can't really secure that so I'm going to show you how to turn this into a friendly and secure name but first let's talk about what's happening here. This is a load balancer, and it has a listener. The listeners you can see is a listening on port 443, that's the port for HTTPS, HTTP secure,
>
> **[1:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=96)** and of course it needs a certificate for that to occur. I'm going to click here where it says view and edit certificates and as you can see it's using this certificate that we assigned. It's important that the certificate be a wildcard, so in this case I don't want to point it to my top level domain, that would be [cjrivas.com](https://cjrivas.com), I want to create a sub domain and that's why I specified a wildcard *.[cjrivas.com](https://cjrivas.com). So the question is, how do we turn that ugly load balancer name into a secure domain name that we can use? For that we have route 53, before we go route 53 I'm going to click here so that we make a note of the name. In fact, they give you the option right here so that you can copy this name, so I don't need it right now but I'll copy just for illustration purposes. And now let's go to route 53, I'll find my hosted zone
>
> **[2:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=161)** and I should already have an entry for the load balancer, I'll find it and then we can discuss it. Click on edit, just to show you, I put in the name, [[LinkedIn]].[cjrivas.com](https://cjrivas.com) and it's a CNAME because the load balancer has an a record and it would be this one right here and this is the one that we just copied from the clip bar. Everything else stays the same, TTL, simple [[Routing]], we don't need to change anything. We just need to be able to create this name so that we can actually listen on HTTPS, why? Because the browser is going to go to the certificate authority in this case, Amazon, and it's going to validate that this domain actually belongs to us, which we already did with the DNS validation so it should pass validation and give us this name that we see here, linkedin.[cjrivas.com](https://cjrivas.com) as a valid, secure name for encryption in transit. I'm going to cancel these changes 'cause this is already done. I'll go back to the other tab here and as you can see, I'll refresh this so that you can see it. It's showing linkedin.[cjrivas.com](https://cjrivas.com) and it's now showing HTTPS and we get the padlock that we were looking for, it says connection is secure. And with this process we have completely and successfully set up security certificates for our EC2. This is so much better for your customers, especially when they're typing sensitive information
>
> **[4:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=254)** into your website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[LinkedIn]] (3), [[Ubuntu]] (1), [[Routing]] (1)
> **Env Vars:** ec2 (4), https (3), aws (1), http (1), cname (1)
> **CLI Commands:** find (2), apache (1), aws (1), make (1)
> **URLs:** [cjrivas.com](https://cjrivas.com) (5)
> **UI Navigation:** go to (3), scroll down (1), click on (1)
> **Ports:** port 80 (1), port 443 (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)

#### [AWS Certificates Manager and EC2 instances](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=0)** - [Instructor] So we know we can create SSL TLS certificates in Certificate Manager and use it with certain AWS services. The big question now is can I export a certificate that I created in certificate manager so I can use it in my own, say Apache Web Server for my [[WordPress]] blog for example. The quick answer is unfortunately no. And I'm showing you an AWS support question here that was posted and the answer was that no you can't do that because that would mean that ACM would have to expose its private key and that's considered a [[Security Risk]], so they will not let you export ACM certificates for use on your [[Amazon EC2|EC2]] instances. However, there is a workaround published by Amazon right here in the official documentation, and it shows how to configure certificates on Amazon [[Linux]] 2, for example. This is beyond the scope of this course but if we scroll down here, I can show you something. It says, number 2, obtain a CA-signed certificate. Let's take a look at that. The problem with this is you have to get it to a third party. The one that they recommend is called Let's Encrypt. Let me show you this website. Let's Encrypt, it's a nonprofit CA or certificate authority where you can come here and get your free TLS certificate. Once you have this certificate they'll be your certificate authority and you can install this, let's say on your Apache Web Server to run your own [[PHP]] website, which you can use say for a WordPress blog, for example.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=95)** And this way you don't need a load balancer or a cloud front or any of those services that will bring additional cost to running your website. We're going to end this conversation on SSL certificates with a reference to the resources that I just mentioned. Number 1 being the support question that mentions what I just said about AWS certificates, And number 2, the workaround on how to do this on Amazon Linux. And finally the link to [letsencrypt.org](https://letsencrypt.org), which is a place where you can go get your free SSO certificates that you can use with your own EC2 instances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (2), [[Amazon EC2|Ec2]] (2), [[Linux]] (2), [[Security Risk]] (1), [[PHP]] (1)
> **Env Vars:** aws (3), ssl (2), tls (2), acm (2), ec2 (2)
> **CLI Commands:** aws (3), apache (2), php (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (3)
> **Prerequisites:** configure (1), install (1)
> **URLs:** [letsencrypt.org](https://letsencrypt.org) (1)
> **UI Navigation:** scroll down (1)


### 6. Parameter Store and Secrets Manager

[↑ Back to Table of Contents](#table-of-contents)

#### [Parameter Store for sensitive data](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=0)** - [Instructor] It's considered good practice to avoid storing sensitive data and credentials like passwords and API keys in your code repository or config files in order to prevent those from being exposed to bad actors who can then use them to infiltrate our infrastructure and steal valuable customer data. That said, our automated task need credentials to perform their jobs. And to add a layer of complexity to these, these credentials will be different amongst our various environments such as development, test, and production. Parameter store is a service that can help with this providing a secure encrypted location for all our passwords and other secrets. Let's go to the AWS console and show you how it works. From the main screen in the console, let's type systems manager. Should be the first one that pops up. And then from the sidebar here, we can go to parameter store. And here we are presented with the parameter store main screen. As you can see, I already went ahead and created two credentials. One is called "our app development db password" and another one is "our app production db password". You can see where I'm going by segmenting via environment. Let's go ahead and create a new one just so I can show you. It's a good practice to start with a slash. In this case, I'll type "our app" to keep things organized by application, for example.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=95)** I'll go with dev-db-username. We'll keep it standard here. There's no need for a description. And I'll select a secure string. I want my data to be encrypted. I don't need it to be plain texts. You get a lot more benefit by encrypting the data at all times. And I'll use the default KMS settings. Let's say that the username is dbadmin and go ahead and create our parameter. So now for development, we have a username and a password for our database and we have a password for our production environment. Now that you know how to create secrets in parameter store, we're going to look at how to retrieve this information when needed. One more thing to consider at this point is perhaps combining this with IM roles and policies that are limited in scope. In other words, only allow access to parameters and secrets that are required by the application or individuals who need them. This means that developers shouldn't have access to say the production password, for example.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1), in other words (1), means that (1)
> **Env Vars:** api (1), aws (1), kms (1)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** go to (2)
> **Best Practices:** good practice (2)
> **CLI Commands:** aws (1)
> **Tools:** aws console (1)
> **Speakers:** - [instructor] (1)

#### [Using Parameter Store from EC2](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=0)** - [Carlos] We need a safe way to store and retrieve data from the Parameter Store. Let's take a look at an example where we actually limit an [[Amazon EC2|EC2]] server to access specific resources, in this case, development credentials, and retrieve those parameters from the Parameter Store. Here we have a diagram showing this architecture. Please note, this is only a guideline and best practice. Your use case may be slightly different. We have EC2, ECS, or Lambda, and these services are going to put in a request to Parameter Store to get credentials. What's going to happen is that Parameter Store is going to check with IAM to make sure that you have the necessary permissions to get the credentials that you're after. If that is approved, then decryption will happen using KMS, and then the data will flow back to us in the same channel. Let's go now to the AWS console and take a look at this in a more practical point of view. Here in the AWS console, we're looking at an IAM policy, and this is going to be associated with our EC2 instance. As you can see, we have PutParameter, DeleteParameter, GetParameter, and so on. And all these commands are set to Allow, but the catch is they're only allowed to resources that have dev or development in their name. So now let's make sure that this is actually true by going to our EC2 instance and trying out these command. Here in our EC2 instance, we're going to try the GetParameter command to retrieve the value. Keep in mind, we're using with-decryption, because we're not interested in the encrypted version of our data.
>
> **[1:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=93)** We want to see it as plain text so that we can use it for our application. Here we have the value of dev-db-username, and it's dbadmin, just like we expected. Let's try that again with the db password. I'll modify this line and type password over here.
>
> **[2:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=120)** And we get password123, which is the expected value. Now watch this. We're going to try to get the production password. Let's see what happens. Has the same name, it's just prod here.
>
> **[2:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=141)** Ah, and now we get an error that says is not authorized to perform the GetParameter on this particular resource. And with that, we have verified that we have access to the resources that we need from this service provided by the IAM role. So should this server ever become compromised, then the attacker will not have access beyond the permissions defined in this role, in this case, development credentials. This reduces the blast radius of the attack and gives you time to detect and stop any potential data leaks or exploits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (5)
> **Env Vars:** ec2 (5), iam (3), aws (2), ecs (1), kms (1)
> **CLI Commands:** make (2), aws (2)
> **Tools:** aws console (2)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [carlos] (1)

#### [Secrets Manager overview](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=0)** - [Instructor] AWS Secrets Manager is a tool designed to manage, audit and rotate passwords for your [[Databases]] and applications. It's very similar to Parameter Store, but in this case, this tool is dedicated to handling credentials. One of the main reasons to use Secrets Manager, other than being specifically designed to manage secrets, is the ability to automatically rotate credentials, i.e. change passwords by itself. This feature gives you the peace of mind that your passwords don't go stale. They will be changed at a frequency that you define. So if a person that doesn't need access still does, you can be sure that they'll be locked out on the very next automatic password change. Some other important features include the ability to audit access to your secrets using CloudTrail, an encrypted backend using KMS, type integration with RDS, meaning that you can change database passwords automatically and finally rotation for your own credentials that you can use in your own custom applications. So should you use Parameter Store or Secrets Manager? As you can see in this comparison table, they're mostly similar except for the automatic password rotation. But one key factor to consider is cost. Meaning that if you have hundreds of credentials to manage across multiple environments, then probably Parameter Store is the best bet for you given that they are both very secure data stores.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Env Vars:** aws (1), kms (1), rds (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 7. Security Alerts in AWS

[↑ Back to Table of Contents](#table-of-contents)

#### [Root login alerts](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=0)** - [Instructor] Login alerts are essential for a quick response to a security breach incident. They're even more critical when talking about elevated login credentials that have the ability to turn off audit logs, change user passwords, and block out everybody else from the environment. This lesson is inspired by this AWS premium support question. And if you look at the answer, it's really just a CloudFormation script, which I already executed and we're going to take a look at here in a second. Before we move away from this post however, I want you to take a look at this line that says, "Before you begin, make sure that your AWS CloudTrail Management read/write events are set to All or to Write-only for EventBridge events to be able to trigger the log-in event notification." So even if you do this correctly, CloudTrail is not set up properly, you will not get the notification. So, keep that in mind. Now let's go to CloudFormation here and I have the root-login-to email stack already executed. And as you can see, it's just three resources: SNS topic policy, the topic itself, and the event. Let's click on the event rule. Essentially, what it's doing is checking CloudTrail events and is looking for one that says "user identity type root." This will trigger this event and it will send something to the target, and the target in this case is the SNS topic. Let's click on that.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=95)** And as you can see, the topic is nothing more than the usual place where you can subscribe your email address and you'll get notified when the message comes in here. If you needed to test this right away without having to go through a root login, you can just click on publish message and you can type "Hello, world" or something like that right here. And there's a button down here that says "Publish message" to the topic and you should get an email right away saying whatever you typed in here. But of course, be sure to enable CloudTrail properly so that EventBridge will send you the necessary information when the event occurs. Hopefully, you'll never get an unexpected alert that somebody's using your root credentials to sign into your AWS environment. But if you do, it's best to have a plan in place to be able to quickly take certain shutdown or log down actions while also notifying Amazon support team for assistance.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), sns (2)
> **CLI Commands:** aws (3), make (1)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** before you begin (1), set up (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Detecting unauthorized instance stops](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=0)** - [Instructor] If you have exposed servers, such as public-facing [[Web Servers]], it's always a good idea to use a hardened version of your operating system. This is simply a version that has been patched and reviewed by a security expert, eliminating or blocking the most common exploits that the OS may have when using its default settings. To ensure compliance, it is good to have a constant check on your [[Amazon EC2|EC2]] fleet to help find any non-compliant resources and take action. Let me show you how to do that. We'll go to AWS Config. I have AWS Config already enabled here, but I don't have any rules. Let me show you. I'll click on Add rule, and it's going to be a managed rule, and we're going to be looking for AMI and select the first one that says approved-amis-by-id. We're going to click Next. We're going to take the default here for the name and select Resources, and the resources are going to be of type EC2 instance. So this is fine as it is. Now, here's the value. Let's say that you have a certain AMI ID. We'll type AMI, XX1. If you have another one, you can type it in with a coma, ami-xxx2, and this one and two, let's say they're a hardened version of Amazon [[Linux]] or CentOS or [[Ubuntu]]
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=94)** or whatever other operating system you prefer. Now, what we do is click Next, and we end up in the review screen. Make sure everything checks out, and then we can click on ad Add rule. This should be enough. If we go to the dashboard, we're going to end up with a list of non-compliant and also compliant resources, but there's one more step that you can take. Let's go back in here and select the rule. We're going to click Action and click on Manage remediation. We're going to select Automatic, and there is an option that we can do. We're going to type EC2 here. We don't want to destroy the instance, simply because it's not approved, but what we can do is stop the instance. What this is going to create is a situation where the employee or person that launched this instance is going to come asking, hey, what happened? You know, I've tried to launch an instance, and it's forcing stop, then you're going to explain, hey, it needs to be one of these particular AMIs, and then the system will let you launch your instance, simple as that. We're not going to enable it now, but I want you to be aware that this option exists. Let's go by the dashboard. As you can see the rule already found two non-compliant resources, and that's okay because we use dummy names for the AMI IDs. So this is actually expected. So as you can see, this works flawlessly, and it works right away in notifying you whether somebody's using
>
> **[3:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=189)** the approved AMI IDs in your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Web Servers]] (1), [[Linux]] (1), [[Ubuntu]] (1)
> **Env Vars:** ami (5), ec2 (3), aws (2), xx1 (1)
> **UI Navigation:** click on (3), go to (2), select the (2)
> **CLI Commands:** aws (2), find (1), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Checking for unused credentials](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=0)** - [Instructor] One nice feature about AWS Config is the ability to track down unused credentials. If you work in a corporate environment, you'll have employees, contractors and vendors coming and going all the time. And sometimes credentials will be left behind. This opens a potential weakness in your [[Network Security]] if those credentials are misused. Lucky for us, AWS Config already has a rule for this. Let me show you. From the console, I'll type config. And right now I'm in the Ohio region, simply because I don't have AWS Config enabled here. And I want to show you the simple process to enable it. Once you land on this page, all you need to do is click on the 1-click setup option, and then just click Confirm. You really don't need to set up rules. In fact, that's what we're going to be doing to set up one rule for AWS Config. For right now, I'll just cancel and switch over to us-west-2, where I already have AWS Config enabled,
>
> **[1:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=72)** and I'll click view dashboard here, and then select Rules. We're going to add a new rule, and it's going to be an AWS managed rule. I'll type credentials. And you'll see there's one called iam-use-unused-credentials-check. Let's go ahead and select that one and click Next. We have to specify a name, but the default is just fine. And, of course, the frequency, it's okay to check every 24 hours. The same for the default, which is 90. It's usually a good practice to change your passwords every 90 days, so if you have credentials that haven't been touched in 90 days, there's a good chance you can just go ahead and delete them. So we're going to accept the default here, click Next. And then here we are in the review and create screen where we just scroll down and add the rule. We're going to select the rule and click on Re-evaluate. This will execute the rule right now. We can now return to the Dashboard. If we had credentials with issues, in this case 90 days or more without any activity, you will see it here as non-compliant resources.
>
> **[2:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=168)** Now there's one more thing. Let's go back to Rules and select this rule. Here under actions, we're going to click on manage remediation and select automatic. There is an option that you can find here by typing credentials, and it's called the revoke unused credential option. What this means is you'll have this option where AWS Config will take care of the credentials for you. So be careful with this option because if it finds credentials that are unused for 90 days, it will go ahead and delete those, which is a good practice anyways, but you might want to be careful if you have credentials, say, that are for software activity or automated tasks that may have not run for a long period of time. Keep that in mind. And with this rule, this is all you need to set up an automatic check for unused credentials in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1)
> **CLI Commands:** aws (7), find (1)
> **Env Vars:** aws (7)
> **Prerequisites:** set up (3), setup (1)
> **UI Navigation:** scroll down (1), select the (1), click on (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** good practice (2)
> **Warnings:** be careful (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Get familiar with AWS tools](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=0)** - [Instructor] In this course, we have covered a security aspect of some of the tools that you'll likely use as an AWS Cloud Application Developer. If you're planning on taking the AWS Certified Developer exam, in addition to security, you still need to be familiar with the everyday use of the tools we just saw, but now you're better prepared and a lot less likely to forget a recommended best practice. Remember, in the cloud, you as a developer, are just as responsible for security as your operational colleagues, simply because everything is code, including the infrastructure and its security. For next steps, I'd like you to become familiar with the following tools. AWS Config, which is a tool to apply governance and enforce rules on your AWS account. For example, if your company requires that all resources be tagged with an environment tag to be able to identify them as production or development, you can have AWS Config monitor all resources and look for this tag, and if not found, take a specific action or send an alert. Trusted Advisor is an automated service you can run inside your AWS account to look for ways to optimize usage in several areas, such as cost and security. It will scan your resources and issue a report with a recommendation on what to change to improve. Finally, AWS CloudTrail is a service used to keep track of all actions and AWS API calls affecting your account. This can be used to track changes, authorize or otherwise,
>
> **[1:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=98)** and for compliance purposes. You can also generate alerts based on CloudTrail events, so if something out of the ordinary happens within your account, CloudTrail will track it and inform you. These services, while not as specific to security, are certainly related and will likely come up in exams, as well as in your future projects. So I wanted to be sure you're aware of those. I hope this [[Cloud Security]] course has been helpful to you. My name is Carlos and I will see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Security]] (1)
> **Env Vars:** aws (8), api (1)
> **CLI Commands:** aws (8)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), such as (1)
> **Best Practices:** recommended (1), best practice (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Carlos Rivas]]

## Resources

- Exercise files available

## Skills Covered

- AWS Security

## Path Context

### In [[Advance Your AWS Development Skills- Exploring Complex Application Development]]
← [[AWS for Developers- CLI Tips]] | **4 of 6** | [[Building Serverless Apps with AI Services on AWS]] →

## Appears In

- [[Advance Your AWS Development Skills- Exploring Complex Application Development]]

## Related Courses

_Courses sharing skills:_

- [[Complete Guide to AWS Security and Compliance Management]] — AWS Security

---

[↑ Back to top](#)