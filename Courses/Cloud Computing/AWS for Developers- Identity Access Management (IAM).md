---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: aws-for-developers-identity-access-management-iam
url: "https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam"
duration_minutes: 49
duration: 49m
level: Intermediate
updated: 9/6/2022
learners: 8106
skills:
  - Amazon Web Services (AWS)
  - Identity and Access Management (IAM)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQE3sS7Ro4Oy5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572024654940?e=2147483647&amp;v=beta&amp;t=9yFj2wOC1028BMaP7wDdf5lFrzzlprNEricjouOc4os"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started as an AWS Developer]]'
prev_courses:
  - '[[Building Serverless Applications in AWS]]'
next_courses:
  - '[[AWS Quick Tips for Developers]]'
path_nav: '[{"path":"Getting Started as an AWS Developer","position":3,"total":4,"prev":"Building Serverless Applications in AWS","next":"AWS Quick Tips for Developers"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - skill/amazon-web-services-aws
  - skill/identity-and-access-management-iam
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/AWS%20for%20Developers-%20Identity%20Access%20Management%20(IAM).md)

![AWS for Developers: Identity Access Management (IAM)](https://media.licdn.com/dms/image/v2/C4E0DAQE3sS7Ro4Oy5g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572024654940?e=2147483647&amp;v=beta&amp;t=9yFj2wOC1028BMaP7wDdf5lFrzzlprNEricjouOc4os)

# AWS for Developers: Identity Access Management (IAM)

> Suggested Prerequisites Familiarity with AWS Familiarity with the concepts of accounts, roles, and permissions An AWS account A variety of people and services require access to your AWS resources. With AWS Identity and Access Management (IAM), you can securely control authorization to these resources in one place. In this course, instructor Bear Cahill helps you get up and running with IAM, explai

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam) | 49m | Intermediate | 8K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [AWS user security with IAM](#aws-user-security-with-iam)
  - [What you should know](#what-you-should-know)
- [**1. AWS IAM Concepts**](#1-aws-iam-concepts) (4 videos)
  - [IAM overview](#iam-overview)
  - [Root account](#root-account)
  - [User accounts](#user-accounts)
  - [Create a user account](#create-a-user-account)
- [**2. Users and Policies**](#2-users-and-policies) (5 videos)
  - [Password settings](#password-settings)
  - [Access keys](#access-keys)
  - [Policy JSON](#policy-json)
  - [Modifying policies](#modifying-policies)
  - [Permission boundaries](#permission-boundaries)
- [**3. Groups and Roles**](#3-groups-and-roles) (3 videos)
  - [Grouping users](#grouping-users)
  - [Roles](#roles)
  - [Resource-based policies](#resource-based-policies)
- [**4. Advanced IAM**](#4-advanced-iam) (5 videos)
  - [Multi-factor authentication](#multi-factor-authentication)
  - [Federated access](#federated-access)
  - [Credential report and access advisor](#credential-report-and-access-advisor)
  - [CloudTrail](#cloudtrail)
  - [Best practices](#best-practices)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [AWS user security with IAM](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=1)** - Managing who or what has access to your AWS account can be overwhelming.
>
> **[0:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=6)** If you only use one login, that's not much control, and no way to tell who did what.
>
> **[0:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=12)** AWS's Identity and Access Management sometimes called I-A-M or IAM, allows you to create and manage who can log in and how.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=22)** Some users may need to log into the website and manage services.
>
> **[0:27](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=27)** Other users may need access keys to use other tools or develop apps.
>
> **[0:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=31)** And in other cases a service, like a Lambda, may need access to another service like a DynamoDB.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=38)** IAM allows you to manage all of this in one place.
>
> **[0:41](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=41)** You define user accounts for users and roles for services.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=45)** In both of those cases, you add policies that specify what they have access to, and the [[Representational State Transfer (REST)|rest]] is off limits.
>
> **[0:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=52)** I'm Bear Cahill, Head Binary Sequencer at Brainwash Inc.
>
> **[0:55](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=55)** And in this course, we'll look at how to manage the permissions for you users and services using IAM.
>
> **[1:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=61)** Are you ready?
>
> **[1:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=62)** Because I am.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** iam (3), aws (2)
> **CLI Commands:** aws (2)
> **Speakers:** - managing (1)

#### [What you should know](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=0)** - [Instructor] To get the most out of this course, I recommend you be familiar to some degree with [[Amazon Web Services (AWS)|Amazon Web Services]].
>
> **[0:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=5)** You don't have to be a master at it by any means, but just being familiar with the types of services and features it provides is to help you know how you're going to apply the things you learn about IAM.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=16)** Also, I recommend you have an AWS account.
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=18)** You can sign up for one at aws.[amazon.com](https://amazon.com).
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=22)** The account's free, but you do have to provide payment information in case you go over any of the limits.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=26)** The limits are pretty high, so normally you don't end up having to pay anything.
>
> **[0:30](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=30)** Also, I recommend you be familiar with server concepts of things like user accounts, roles, and permissions.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=36)** I'm sure you're going to do great.
>
> **[0:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=37)** We're going to take our time, and it's going to be very clear.
>
> **[0:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=40)** Let's get going!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **CLI Commands:** aws (2)
> **Env Vars:** iam (1), aws (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Speakers:** - [instructor] (1)


### 1. AWS IAM Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [IAM overview](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=0)** - [Instructor] IAM stands for Identity and Access Management.
>
> **[0:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=3)** So as the name implies, it allows you to manage the identity of users and grant or deny them access.
>
> **[0:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=10)** These users can then log in and have access to and only to what they're allowed to access.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=16)** Think of it like a key card for a hotel.
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=18)** As a guest, you check in.
>
> **[0:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=20)** That's you proving your identity.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=22)** Then you get the key card.
>
> **[0:24](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=24)** It gives you access to your room.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=26)** You might also have permission to use the gym or the pool but you do not have access to the manager's [[Microsoft Office|office]].
>
> **[0:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=33)** Trust me, don't even try it.
>
> **[0:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=35)** They don't appreciate that.
>
> **[0:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=37)** The manager has a different identity and their key car does give them access into the office and whatever other places they have access to.
>
> **[0:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=46)** But IAM isn't just for users who log in.
>
> **[0:49](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=49)** AWS services and features can also have access.
>
> **[0:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=54)** A lambda function for example might have access to a database or log files or other AWS services.
>
> **[1:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=61)** For this they don't have a user account, they have a role.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=64)** And the role provides access through its permissions.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=68)** Both users and roles are given access with policies.
>
> **[1:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=72)** A role can have various policies to whatever it needs.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=75)** These policies are granted through IAM.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=78)** And this course will look at the concepts that allow our user or service to say I am so and so and get access to what they need.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2)
> **Env Vars:** iam (3), aws (2)
> **CLI Commands:** aws (2)
> **Analogies:** think of it like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Root account](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=0)** - [Instructor] When you create your AWS account, you've already started your IAM journey.
>
> **[0:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=6)** Your sign-in identity has full access to all of the AWS services and features.
>
> **[0:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=12)** It's what's called the root account.
>
> **[0:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=14)** As far as your account goes, it's all powerful.
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=18)** With this root account, you can create other accounts.
>
> **[0:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=20)** Of course, those accounts have whatever access you give them.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=23)** More about that later.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=25)** You could do that under the user section over here in IAM.
>
> **[0:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=29)** There are some actions that do require the root account like configuring the root account, changing billing details and closing your account.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=36)** But for most things, it's recommended you not use your root account.
>
> **[0:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=39)** Instead, you should create other accounts with specific permissions that they require.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=45)** And as we'll see later, you can create groups to manage the permissions in bulk.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=51)** For obvious reasons, you need to strongly protect your root user account credentials.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=56)** Also it's recommended to use multifactor authentication.
>
> **[1:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=60)** You can set that up under my security credentials under your account tab on the top right.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=66)** This will take you to IAM, you can continue to the security credentials and under the multifactor authentication, you can activate it with the activate MFA button.
>
> **[1:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=76)** So consider yourself warned.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=78)** With power comes responsibility and you really need to protect this account 'cause it can do a lot of damage in the wrong hands.

> [!info]- Semantic Content
>
> **Env Vars:** iam (3), aws (2), mfa (1)
> **CLI Commands:** aws (2)
> **Best Practices:** recommended (2)
> **Speakers:** - [instructor] (1)

#### [User accounts](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=0)** - [Instructor] So now we're going to look at some of the aspects of user accounts.
>
> **[0:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=3)** AWS user accounts are created in IAM, and the IAM dashboard allows the root account to create other accounts.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=11)** The dashboard also facilitates setting up permissions through the use of policies.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=16)** We'll get to more of that later, but right now we want to focus on the different types of user accounts.
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=21)** So I'm going to click on Users here, and I'm going to click add user.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=26)** Now we can give the user a name, like AWS test or whatever we want, but notice that there's two different access types.
>
> **[0:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=33)** The first type is called programmatic access.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=36)** This enables an access key and a secret key for external tools to be able to gain access into the features and functionality they need in AWS.
>
> **[0:47](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=47)** So this is when a user's not going to log in through the console.
>
> **[0:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=50)** They're going to log in using a process like AWS API, the Command Line Interface, or an SDK.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=57)** So you might want to put your access key and secret access key into your website or into your mobile app or into your other tool to be able to get access into all the services and features of AWS without having to go through a login process.
>
> **[1:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=72)** Now, this can be a little bit dangerous because obviously this access key and secret key gains access into your AWS account.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=80)** And if they're stored insecurely somehow or otherwise obtained by some nefarious figures that they could do damage to your account, potentially either stealing your data or driving up your billing or who knows what.
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=95)** But it is possible to use these types of tools.
>
> **[1:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=98)** I would recommend you do it in a limited fashion.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=101)** You don't store these very often.
>
> **[1:43](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=103)** Maybe just use them with the tools and for your actual apps and websites that you develop, you use Cognito to allow users to log in.
>
> **[1:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=111)** And that's a different concept as far as user accounts.
>
> **[1:53](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=113)** That's your app user accounts, not your AWS user accounts.
>
> **[1:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=117)** So you can look up courses on Cognito and user authorization for that.
>
> **[2:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=122)** The other type of login is the AWS Management Console Access.
>
> **[2:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=126)** This is for users who are going to use the console.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=129)** They log in just like we did with our root account.
>
> **[2:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=132)** And then they have access to whatever services and features they need, to manage that way, through the website.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=138)** You can have a user with both types.
>
> **[2:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=140)** That's no problem at all for the Management Console.
>
> **[2:24](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=144)** There's some other features that you need to add.
>
> **[2:27](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=147)** And, again, you can do both.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=148)** I wouldn't recommend doing that too often.
>
> **[2:30](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=150)** You probably want to keep things separate, even if it means you have a lot of different options out there.
>
> **[2:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=155)** It helps with auditing and tracking who's doing what.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=160)** So what we're going to do next in the next video is we're going to look at permissions and create our first user account.

> [!info]- Semantic Content
>
> **Env Vars:** aws (8), iam (2), api (1), sdk (1)
> **CLI Commands:** aws (8)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)
> **UI Navigation:** click on (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Create a user account](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=0)** - [Instructor] So now we want to continue on with the process of creating our first user account in our AWS account.
>
> **[0:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=5)** Of course, we're in IAM and I clicked ad user and we're going to create an account for administering the account without using this root account every time.
>
> **[0:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=17)** So I'm going to add the username admin user, and then I'm going to enable the console access.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=23)** I'm going to check the AWS Management Console access.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=26)** I'm going to create a custom password and this is just for our testing.
>
> **[0:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=31)** So I'm just going to create a simple password for this and not require that it be reset.
>
> **[0:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=39)** So now that I have all these things set, I can click next and go to permissions.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=45)** Now under here, there's three different options we have for setting the permissions.
>
> **[0:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=48)** We can add the user to a group.
>
> **[0:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=50)** We don't have any groups yet.
>
> **[0:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=52)** We'll look at that later, but if we did we could select a group to add this user to.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=56)** We can copy permissions from an existing user.
>
> **[0:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=59)** If this is truly your first account, then you wouldn't have any users to copy from, so this wouldn't even really be an option.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=66)** Or you can attach existing policies directly, and this is what we're going to select here.
>
> **[1:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=71)** And then you get up all these policies.
>
> **[1:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=74)** Notice that there's a 472 results.
>
> **[1:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=76)** Now these are predefined policies that allow you to easily add the most common, the most 472 most common policies, that AWS provides.
>
> **[1:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=88)** You can make up your own policies, which we'll look at later, but for now we're going to use some of these default ones.
>
> **[1:34](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=94)** Now, if we knew we wanted this user to have access to be able to create other users, we could give them like IAM full access.
>
> **[1:42](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=102)** Or if it was a database user, we could do something with DynamoDB and so forth.
>
> **[1:47](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=107)** Now we want to make this an admin user, just like the name suggested.
>
> **[1:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=112)** And so we want this administrator access.
>
> **[1:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=114)** It happens to be the first one, so we'll check that.
>
> **[1:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=117)** And notice the description starts with provides full access to AWS services.
>
> **[2:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=121)** Now this isn't quite the root account level of access.
>
> **[2:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=126)** It can't do some certain things, like change the billing and that type of thing.
>
> **[2:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=130)** It can't close the account, but it's the next best thing, it's pretty, pretty close.
>
> **[2:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=135)** And we're going to look at boundaries later, but the concept behind boundaries is a way to limit now this user's access.
>
> **[2:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=142)** So this makes a little bit more sense when we get into groups as well.
>
> **[2:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=146)** So we're just going to leave that blank for now.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=148)** And then we're going to go to tags.
>
> **[2:30](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=150)** If you've understand tags, you can add 'em here.
>
> **[2:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=152)** This is not required.
>
> **[2:34](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=154)** Tags is a concept that goes across AWS.
>
> **[2:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=156)** It's not really specific to IAM, so we're not going to set up any tags.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=160)** Next, we go to the review and we can see that we're creating a user called admin user.
>
> **[2:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=166)** We specified the password.
>
> **[2:49](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=169)** We don't have to reset the password and that our permissions are administrator access.
>
> **[2:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=174)** So this user has a lot of access.
>
> **[2:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=176)** So we're going to click create user.
>
> **[2:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=179)** And now if we want to log in as this user, we need to have the account ID.
>
> **[3:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=183)** So we can get that, if we go to back to IAM.
>
> **[3:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=187)** So back at IAM, we'll be able to see that this is our account ID right here, this 94694724468.
>
> **[3:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=196)** So I'm going to copy that.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=197)** And now I'm going to log out as this user and log back in as the other user we just created, admin user.
>
> **[3:24](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=204)** So I need that account ID.
>
> **[3:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=206)** So when I go to sign in console here.
>
> **[3:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=209)** It'll give me the option to, I'm going to say, sign in as a different user.
>
> **[3:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=213)** And it tells me to add the account ID, if I'm signing in as a user underneath my AWS account.
>
> **[3:41](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=221)** Then I click next and it will give me the opportunity to enter the ID and password just as we've done before.
>
> **[3:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=228)** So instead of my current one, I'm going to select admin user.
>
> **[3:53](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=233)** And for the password, I'll type in what I typed in before, and then sign in.
>
> **[3:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=239)** And now I'm signed in as that user.
>
> **[4:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=241)** And I have pretty much full access because of the administration access we gave to this user account.
>
> **[4:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=247)** Now we're going to go into more details about how to set up permissions in a sensible way, but it's a good idea to kind of get past using that root account as quickly as possible.
>
> **[4:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=257)** So we've set up our admin user.
>
> **[4:19](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=259)** We can use this one going forward and now we can create all of our other groups and permissions and users, as necessary using this user.
>
> **[4:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=268)** And it's a little bit more safe.
>
> **[4:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=269)** Now, we're not using our root account everywhere.
>
> **[4:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=271)** Let's move forward in the next chapter, diving more into users and their permissions through policies.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), iam (5)
> **CLI Commands:** aws (6), make (2)
> **UI Navigation:** go to (5)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 2. Users and Policies

[↑ Back to Table of Contents](#table-of-contents)

#### [Password settings](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=0)** - [Narrator] Now that we're logged in as our admin user that's not the root account, one of our first actions might be to set some rules about the passwords that users can set.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=11)** We can do this as this admin user, and we do this as well in the IAM dashboard.
>
> **[0:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=15)** So I'm going to click on IAM for my management console, and I'm going to go to the account settings over on the left.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=23)** Once I'm here, I can see that I can set the password policy.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=26)** The default is that it has a minimum length of six characters and allows users to change their own password.
>
> **[0:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=32)** There's really not much else to it.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=34)** So we could specify that they have to have at least one upper case, one lowercase, one number and so forth.
>
> **[0:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=40)** And then we can apply this password policy.
>
> **[0:42](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=42)** When we apply this password policy, it's not going to force any current users to reset their password.
>
> **[0:49](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=49)** The next time they're required to reset their password, they would have to follow these policies.
>
> **[0:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=54)** So we might want to specify that the passwords expire, in say, 90 days.
>
> **[0:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=59)** Now this setting is an exception to that rule.
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=63)** When we set an expiration period, any passwords that are older than this amount of time will automatically expire.
>
> **[1:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=72)** And the user, the next time they try to log in, will have to set a new password.
>
> **[1:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=76)** So not all of these are immediately applied, but the expiration period is.
>
> **[1:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=82)** Now we can apply this password policy.
>
> **[1:24](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=84)** Down below here you can see, we have the security token service.
>
> **[1:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=88)** This specifies the [[Tokens]] and the way that they are handled across regions.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=93)** It is recommended that you use regional STS endpoints to reduce latency.
>
> **[1:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=99)** So this helps with performance.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=101)** And if you are using regional STS endpoints that no action is required.
>
> **[1:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=106)** Otherwise you need to come down here and activate and deactivate and set other settings in your global endpoint for your token service.
>
> **[1:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=114)** We're going to use regional endpoint, which is what I always use in my AWS account.
>
> **[1:58](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=118)** So we're not going to have to change anything here.
>
> **[2:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=121)** But if you do want to have it be per region or only use the global endpoint, you would have to make some changes there.
>
> **[2:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=128)** So be aware of what the changes are that you're allowed to do for the password policy and when they will be actually applied.
>
> **[2:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=135)** Typically it's on the next expiration time but the expiration will be retroactive to the age of the password as it currently is.
>
> **[2:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=145)** And next we'll look at similar concepts for access keys to the types of user account that's logging in with the access keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1)
> **Env Vars:** iam (2), sts (2), aws (1)
> **CLI Commands:** aws (1), make (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is an  (1)
> **Best Practices:** recommended (1)
> **Warnings:** be aware (1)
> **Prerequisites:** required to (1)

#### [Access keys](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=0)** - [Instructor] Now let's look at creating a user with the other access type, the programmatic access type.
>
> **[0:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=5)** So I'm going to click on Users and Add User.
>
> **[0:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=8)** And in this case, it's going to be programmatic access, so it's going to generate the access key and secret access key.
>
> **[0:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=14)** Now, in a lot of cases, whenever you need these for a process like Amplify's command line interface, it will guide you through this process.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=22)** In fact, in that case for Amplify, it will ask you what the username you want to use is and when you type that in, it'll actually launch this screen.
>
> **[0:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=32)** Specify the username you typed in and it'll specify all the permissions it needs on the next screen for you.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=38)** It'll be pretty automatic, but you have to actually do it as your logged in user.
>
> **[0:44](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=44)** So I'm going to create this user as cliuser.
>
> **[0:47](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=47)** I already have programmatic access checked, so we'll click Permissions.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=51)** Now I'm going to attach some existing policies as we did before and let's just say this user is going to be doing something with CloudWatch.
>
> **[0:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=59)** Now, depending on the process you're going through, whether it's Amplify or something else, they'll either direct you on what permissions it needs or it'll set it up for you.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=68)** So we're just going to have this CloudWatch actions permission as an example.
>
> **[1:13](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=73)** Next, we'll go to tags, we're not going to set any tags, and then we'll go to review.
>
> **[1:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=77)** Now at this point, we can review everything that's necessary.
>
> **[1:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=81)** If we're happy with it, we create the user.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=83)** And this is when the keys are generated.
>
> **[1:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=85)** Once the user's created, we have the opportunity to get the access key and the secret access key.
>
> **[1:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=91)** Now, this is the only time you can see this secret access key.
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=95)** From now on, once we close this, we will not be able to get this key again.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=100)** So if you're going to need access to it again, you need to copy it and make a note of it somewhere.
>
> **[1:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=105)** If you're only going to use it this one time, that's fine.
>
> **[1:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=108)** Just use it this one time and you don't need access to it anymore, but you won't.
>
> **[1:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=112)** You can also download the CSV file and that way you can have it stored locally as well and you can put it in a safe place.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=119)** Because once this is closed, it's gone.
>
> **[2:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=122)** We don't have access to it again.
>
> **[2:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=123)** If we need to create a new one, that's fine.
>
> **[2:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=125)** We can click on the user, go to the security credentials tab and create a new access key.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=131)** It'll create a new one for us.
>
> **[2:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=132)** And once again, we'll have access to the access key and the secret access key.
>
> **[2:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=136)** But again, this one time only.
>
> **[2:19](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=139)** Once we're away from this page, again, we won't be able to copy this anymore.
>
> **[2:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=143)** So again, you might want to make note of it, or you might just want to have multiple secret access keys.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=148)** So I'm going to close this and we'll notice that we have two access keys now, both with our own secret access key and both of them are active, so that's fine.
>
> **[2:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=157)** You might want to have more than one.
>
> **[2:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=159)** Probably don't want to have too many.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=160)** In fact, I probably wouldn't even use more than one.
>
> **[2:44](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=164)** And they also recommend you rotate the keys.
>
> **[2:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=166)** So every once in a while, you should change it just in case somebody else does happen to get access to your keys, they won't be active for very long.
>
> **[2:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=174)** You also notice in here, you can create the SSH public key and HTTPS [[Git]] credentials.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=180)** So this is how you get your access key and your secret access key for any tools that you need to use, or if you're pasting them into your app or website for access if you don't want to make users create their own user accounts or you're just testing it and you don't want to add user authentication, whatever the case may be, this is how you get a user with the access key and secret access key.
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=201)** And once again, I just want to note that after you have access to these keys to copy them, you won't have access again.
>
> **[3:27](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=207)** I apologize for the redundancy on that, but this has bitten me more than once and I want to save you that pain.
>
> **[3:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=212)** Anyway, let's move on and talk about the policies for permissions of user accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (1)
> **CLI Commands:** make (3), ssh (1), git (1)
> **UI Navigation:** go to (3), click on (2)
> **Env Vars:** csv (1), ssh (1), https (1)
> **Tools:** command line (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Policy JSON](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=0)** - [Instructor] So we've been talking about permissions using policies and we've even used them a little bit so far, so let's talk in a little bit more detail about these.
>
> **[0:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=7)** So I'm going to click on my Users again, and go back to my CLIuser, and we have the Permissions here.
>
> **[0:13](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=13)** If I expand these permissions, we can see the [[JSON]] definition, and we can see that there's a variety of actions that are allowed for this user.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=23)** You can have deny here, and deny certain actions, as well.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=26)** If we look at the policy summary, we can see a listing of the services, and access, and resources.
>
> **[0:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=33)** Of course, right now, this is allowed on all resources.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=36)** We'll also look on how to do it to specific resources.
>
> **[0:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=39)** So if we want to add permissions, we've seen before how we can attach them from a group, an existing user, or directly, the only existing account we have is the root account.
>
> **[0:49](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=49)** We could use that, but we want to see what it looks like to attach existing policies directly.
>
> **[0:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=54)** Now, again, there's almost 500 of these right now, and so sometimes, they can be a little bit too broad.
>
> **[1:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=60)** We may not want to give the DynamoDB full access to this user.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=64)** We can look at its definition, as well, and see that there's a lot of permissions that it gives to this user, including things like on LaMDA, SNS, IAM, and so forth.
>
> **[1:13](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=73)** We may not want to do all that, we might just want a couple of custom things for our user.
>
> **[1:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=77)** So I'm going to click Cancel, and I'm going to go to this add inline policy.
>
> **[1:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=81)** This will allow us to create a custom policy, only for this user.
>
> **[1:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=86)** We won't be able to reuse this policy for other users.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=89)** To do that, we have to go through a different process, so this is just for one user.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=93)** So there's a few ways you can do it.
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=95)** You can import a managed policy, and we could copy in something like the DynamoDB full access, and then edit that by specifying what services we don't want, we could remove the IAM service, and maybe the SNS, and we can also edit the JSON directly, if we're familiar with those things.
>
> **[1:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=114)** If we don't want to start with an existing policy to edit, we can start from scratch.
>
> **[2:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=120)** So I'm going to cancel this, click on add inline policy again, and instead, I'm going to choose the service.
>
> **[2:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=126)** So I'm going to choose DynamoDB.
>
> **[2:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=128)** And then it gives me the access level, maybe we just want to allow this user to scan the database, and we have a warning now, and that is because we have to specify what resources.
>
> **[2:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=140)** We can say all resources, or for each of the items, we can specify any resource, or we can specify the actual ARN, the Amazon Resource Name of this table.
>
> **[2:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=152)** To do that, we have to go to the table, I have the DynamoDB table here, select the table, and at the bottom of the overview, we have the ARN.
>
> **[2:41](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=161)** So I can just copy this, and paste it into here, and now it fills in the details for me, and I can add that.
>
> **[2:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=171)** So now we have no more warnings, we can review the policy, we give it a name, I'll call it dbscan, and I can create this policy and it'll add it to the user for me.
>
> **[3:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=182)** Now we have this one, and if we want to remove any, we can just click the X and detach that, and now we have this policy, again, it's only for this user.
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=190)** If I want to attach the same thing to another user, I have to recreate it, or I can create it specifically under Policies, and it'll have a very, very similar process of where I pick the service and so on, and then when I give it a name, it'll be available anytime I go to attach policies to either the user or role, or as we'll see later, with groups.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** json (2), sns (2), iam (2), arn (2)
> **UI Navigation:** go to (3), click on (2), select the (1)
> **Cross-References:** go back to (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Modifying policies](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=0)** - [Instructor] As I mentioned in the previous video, if you want to create a policy that you can use across your various users and roles, you can go to the policies area on the left from the IAM console, and click Create Policy.
>
> **[0:13](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=13)** From here, you can either import a managed policy to modify.
>
> **[0:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=17)** You can choose a service directly from here and be able to specify the service, the actions that are allowed for this policy like scanning a table, and potentially the resources, either by specifying all of them or particular Amazon resource names.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=34)** This is one place you can do this.
>
> **[0:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=35)** You can also edit the [[JSON]] here.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=38)** I'm going to cancel here and show you another workplace you can do this.
>
> **[0:42](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=42)** So we saw before in our users, we can click on the user and we can add an inline policy.
>
> **[0:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=48)** This will be only available for this user like our dbscan here.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=51)** Or you can click Add permissions, attach existing policies, and then create a policy here.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=57)** Now we're coming at it from a different angle.
>
> **[0:58](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=58)** We're coming at it from down the path of the user.
>
> **[1:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=61)** But if we create a policy here versus an inline policy, it'll be available for all users.
>
> **[1:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=67)** So it's going to take us to the same visual editor.
>
> **[1:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=70)** We can choose a service, and I'm going to choose DynamoDP again.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=75)** I'm going to choose instead of reading, I'll choose writing.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=78)** And I'm going to have it, allow you to update the table, put an item, delete an item.
>
> **[1:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=85)** And then for the resources, I'll just say All resources.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=89)** Now I'm going to review this policy, give it a name called dbwrite for all users.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=97)** And then I'll create this policy.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=100)** Now, once the policy is created, it'll be available in the list.
>
> **[1:44](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=104)** So if I do a filter for dbwrite, we can see it in there, but the dbread is not.
>
> **[1:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=112)** Also, you can filter your policies for just the ones you've created.
>
> **[1:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=116)** So you click on Filter policies and Customer managed.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=119)** Notice, there's only one.
>
> **[2:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=120)** We've only created one.
>
> **[2:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=122)** And there it is.
>
> **[2:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=123)** So there's our policy.
>
> **[2:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=124)** We can expand it just like we did for any other policy.
>
> **[2:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=127)** But notice also, there's an edit policy here.
>
> **[2:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=130)** I can edit this policy, but I'm editing it for all the users that have this policy attached.
>
> **[2:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=137)** So if I change this and remove the delete item, it's going to affect all the users that currently have this policy attached to their permission.
>
> **[2:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=145)** So be aware that when you create a policy and attach it to a bunch of different users, editing it will affect anyone that has that policy attached to their account.
>
> **[2:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=155)** So now that I've created this policy, I can add it to my user.
>
> **[2:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=159)** So it opened up a new tab for me when I created this policy.
>
> **[2:42](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=162)** I'm going to go back to the previous tab for my user, and let's see if we can search for dbwrite.
>
> **[2:49](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=169)** It's not there.
>
> **[2:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=170)** If we just do a refresh, let's see if it shows up.
>
> **[2:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=174)** There it is.
>
> **[2:55](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=175)** I can just check it.
>
> **[2:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=177)** Next, review.
>
> **[2:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=179)** And add the permissions.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=180)** And now this user has the dbwrite.
>
> **[3:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=182)** Notice, I have the link for that because I can edit it.
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=185)** And it still has the dbscan permission.
>
> **[3:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=188)** If I click on the dbwrite, once again, I can see everything and I can edit it from here as well.
>
> **[3:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=194)** So that's how you can create a policy that you can attach to multiple users.
>
> **[3:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=198)** Just be aware that if you ever change it, it's going to affect all the users that currently have it assigned to their account or their role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** iam (1), json (1)
> **Cross-References:** previous video (1), go back to (1)
> **Warnings:** be aware (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Permission boundaries](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=0)** - [Instructor] As I mentioned before, permission boundaries are a way to limit the user's access.
>
> **[0:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=4)** Now it may seem kind of productive to give a user permission here and then take it away in the boundary.
>
> **[0:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=9)** But this helps, especially with groups.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=11)** So if this user is part of a group that has admin privileges all over the place but you really want this person to specifically admin one group, you can just put that in the permissions boundary.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=22)** And it's kind of like treating it as an exception.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=25)** So let's say that this admin user has administrator access because he is in maybe the admin group.
>
> **[0:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=32)** But they're specifically an admin for a certain area, so we want to limit their access to things.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=38)** So I'm logged in as the root user right now and I'm going to set the permissions boundary on this admin user.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=45)** So I'm going to set the boundary and it's just like creating the permissions and the policy.
>
> **[0:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=50)** I can specifically say that they are admin for DynamoDB and maybe API Gateway.
>
> **[0:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=59)** And so they have access to those two areas.
>
> **[1:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=62)** That's their boundary, but nothing else.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=64)** So if they log in, they won't have access to any other services or features.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=68)** Now, if they didn't already have permissions in their policy for something like API Gateway here, this is not going to grant them permissions for that.
>
> **[1:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=78)** This is just saying, limit it to this.
>
> **[1:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=81)** If they didn't have access to DynamoDB, this would not give them permissions.
>
> **[1:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=85)** Or if they had certain permissions for API Gateway, let's just say, read and write or something, and then I give them this full access in the boundary, they still don't get any more permissions from the boundary.
>
> **[1:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=99)** The permissions is only limiting, so they have to have it both in their policy and the permissions boundary.
>
> **[1:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=106)** So again, it's like a logical and operation.
>
> **[1:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=108)** So I'm going to set the boundary for this user here and then we'll log in as this user to make sure that they can't get access to anything else.
>
> **[1:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=117)** So right now they just have the API Gateway administrator boundary.
>
> **[2:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=120)** So I shouldn't be able to go into S3 bucket or DynamoDB or something.
>
> **[2:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=125)** So I'll log out the root account.
>
> **[2:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=128)** So I'm going to sign back in as that admin user.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=131)** So I'm going to click sign in different account, put in the account ID, and then add the username of admin user and the password.
>
> **[2:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=146)** Now, when I click on IAM, it will say I don't have access to this.
>
> **[2:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=153)** And if I go to S3, it should gimme some similar message saying you don't have access here.
>
> **[2:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=159)** There is access denied and so forth.
>
> **[2:41](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=161)** But if I go to API Gateway, I don't have that type of message here because I do have permissions in my boundary for this.
>
> **[2:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=171)** So that's a good way to be able to add users to groups and handle just the exceptions in the boundaries.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), iam (1)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** kind of like (1), just like (1), it's like (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Groups and Roles

[↑ Back to Table of Contents](#table-of-contents)

#### [Grouping users](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=0)** - [Instructor] Now that we've looked up setting up permissions through policies for users, you may be thinking, "Wow if I've got a lot of users, "that's a lot of work."
>
> **[0:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=9)** And just think about when something changes and you have to add or remove some policies to all your users.
>
> **[0:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=15)** Wouldn't it be great if there was a way to group them all together?
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=18)** Well, there is.
>
> **[0:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=20)** And you guessed it. It's called groups.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=22)** It's simply that.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=23)** It's just a way of defining a group of permissions through the policies.
>
> **[0:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=28)** And then you can add users to that group.
>
> **[0:30](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=30)** So what you want to do is create a new group.
>
> **[0:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=32)** Now, depending on how you want to set up your groups, you're going to name them different things.
>
> **[0:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=36)** Something meaningful.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=38)** So let's say for example, you want to set up groups of developers who have certain permissions, testers who may have some slightly different permissions, and then a group called admin that has various other permissions.
>
> **[0:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=50)** They can overlap because users can be in a variety of groups, or you may want to set up your groups based on the naming of functionality like the database or logging.
>
> **[1:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=61)** And again, maybe have something like admin that has an overarching set of permissions for creating users, but also having access to the database and the logging.
>
> **[1:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=69)** It's up to you and how you want to organize your groups.
>
> **[1:13](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=73)** We're going to set up a group called developers.
>
> **[1:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=76)** So we want to give them permissions that make sense for developers.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=80)** Now, in our case maybe we're developing something that uses DynamoDB for the database, but maybe also uses RDS for some database as well.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=89)** Who knows?
>
> **[1:30](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=90)** It depends on what you're trying to do with your app.
>
> **[1:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=92)** I'll also add SES full access for our developers, and then I'm going to click next step.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=97)** So now I've got my group, and I've got the permissions.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=100)** It has its name of developers, and I can create the group.
>
> **[1:43](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=103)** And now from here, I have these group actions.
>
> **[1:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=106)** So if I check my developers group, I can add users to the group.
>
> **[1:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=111)** I can also delete the group, edit the group name, and remove users from the group.
>
> **[1:55](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=115)** So if I click add users, I'll get my list of users, and I can select whatever users I want and add them to the group.
>
> **[2:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=123)** I'm going to click cancel 'cause I want to show you another way you can do this, and that's through the users themselves.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=129)** So if I created the group, and I wanted to add a bunch of users in bulk, this is a great way to do it all at once.
>
> **[2:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=135)** But if I'm creating a new user, and I want to add them to the developer group.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=138)** So let's say we have a new developer called booth admin.
>
> **[2:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=142)** So I'm going click on booth admin and go to the groups tab for this account.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=148)** And then I'm going to add the user to groups and here I can select multiple groups.
>
> **[2:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=153)** So if booth admin is a developer and an admin or whatever other groups I have defined, I could check them all here at once.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=160)** So it kind of depends on if you're going from adding a new user and you want to add a bunch of groups or you added a group and you want to add users to that.
>
> **[2:47](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=167)** So now that I'm going to add this user to the group I have under the groups tab, the group that they are a member of as well as the permissions that are in there.
>
> **[2:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=176)** Of course, if I go to groups, I can check on the group, go to its permissions, and attach or remove policies as necessary as the permissions for this group change over time.
>
> **[3:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=188)** And of course it'll affect everyone in the group instead of going through them one by one.
>
> **[3:13](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=193)** So this is obviously a way that's very helpful when you're managing a lot of different users, and you have some logical way of separating them out.
>
> **[3:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=200)** But even if you don't, even if all your users have the same permission, I would still recommend using a group to manage all their permissions in one place.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (3), click on (1)
> **Prerequisites:** set up (3)
> **Env Vars:** rds (1), ses (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Roles](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=0)** - [Instructor] So we've mostly been focusing on user accounts.
>
> **[0:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=3)** User accounts, again, are a way for users to log into the console or to get access to AWS services and features from other tools like a command line interface and SDK for an app and so forth.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=16)** But sometimes AWS services need access to other AWS services.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=22)** They don't log in like a user. They don't have access keys.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=25)** So they have this concept of roles and that's what we're going to talk about now, roles.
>
> **[0:30](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=30)** Now, even if you haven't created any roles already, there may be some roles defined for you in your roles area.
>
> **[0:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=37)** Some services create roles behind the scenes.
>
> **[0:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=40)** We're going to look at a couple of services that commonly use other services and need roles.
>
> **[0:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=45)** One is going to be Lambdas.
>
> **[0:47](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=47)** So from the services dropdown, I'm going to look for Lambda.
>
> **[0:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=52)** And here, we can create a function and we need a role for it.
>
> **[0:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=56)** So I'm going to click Create Function.
>
> **[0:58](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=58)** I'm going to create from a blueprint just for time's sake and I'm going to search for hello for hello world.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=64)** I'll just pick this one, this hello-world [[Node.js]] and configure it.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=68)** So it's going to ask for a name and I'm just going to call it myfunc and then it needs a role, so we can create a new role, we can use an existing role, or create a new role with basic Lambda permissions.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=80)** Now, of course, this is a Lambda so we probably want Lambda permission.
>
> **[1:24](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=84)** So we're just going to go ahead and select that one.
>
> **[1:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=88)** And then I'm just going to use the boilerplate code that it puts in there and let everything else be defaults and let it create this function for us.
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=96)** Now, part of this creation is going to be creating the IAM role.
>
> **[1:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=99)** So I'm going to go there as well.
>
> **[1:41](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=101)** I'm going to open it up in another tab with a command click, close the list of services.
>
> **[1:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=106)** Notice that it's created the function for us.
>
> **[1:49](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=109)** And if we scroll down in the configuration, we can see that it created this role for us of myfunc-role and this unique key.
>
> **[1:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=116)** So let's go to IAM and look for that.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=119)** So here, I can click on roles again under IAM and I have myfunc-role.
>
> **[2:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=124)** And if I click on it, you can see it's got this AWS Lambda basic execution role and then all this stuff after it.
>
> **[2:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=131)** So what it did was it used the policy of AWS Lambda basic execution role and named it something unique so we could edit it if we want to.
>
> **[2:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=142)** So this is the same copy of the normal AWS Lambda basic execution rule, but it put in specifically our resource there and also our resource for the logging.
>
> **[2:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=157)** So we have these permissions and we also have our ARNs already defined for us, our ARNs defined in the [[JSON]] for us.
>
> **[2:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=165)** So this policy is specific to our Lambda and now our Lambda can execute using this role.
>
> **[2:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=171)** If we wanted to add additional policies to this, we can do that with attached policies in case this role needs to read or write from the database or anything else it might need access to as far as services go.
>
> **[3:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=182)** SES, SNS, so forth.
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=185)** Another common service that needs access through roles is Cognito Identity Pools.
>
> **[3:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=192)** We can create our own pool. We'll just call it mypool.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=197)** And we are going to enable access to unauthenticated identities.
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=201)** And for our authentication providers, we could provide whatever authentication providers we want our users to be able to log in as.
>
> **[3:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=209)** We don't need to add this now because we're not actually going through the process of user authentication.
>
> **[3:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=213)** We just want to create this pool.
>
> **[3:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=215)** So I'm going to create the pool.
>
> **[3:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=218)** I'm going to allow the role and then I'm going to click on Edit Identity Pool to see what roles it created.
>
> **[3:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=226)** So it created these two roles for us, the unauthenticated role and the authenticated role.
>
> **[3:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=230)** Let's go back to IAM and look for those as well.
>
> **[3:55](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=235)** So I'm going to click on Roles and now we have our two Cognito roles.
>
> **[3:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=239)** And so for users that have not logged in through my app or website that's using this for authentication, I can specify certain permissions that are allowed for those users.
>
> **[4:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=249)** So maybe they can't write to the database, but they can read from it and list all of the items in the database.
>
> **[4:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=254)** But for authenticated users, they may also be able to write, update, and delete items to the database.
>
> **[4:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=261)** So we can have different roles based on if the users logged in or not through Cognito.
>
> **[4:27](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=267)** And again, you can use different identity providers for the identity pool like user pools, [[Facebook]], Amazon, and so forth, but these are two services that commonly need other permissions to other services in AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1), [[JSON]] (1), [[Facebook]] (1)
> **Env Vars:** aws (7), iam (4), sdk (1), json (1), ses (1)
> **CLI Commands:** aws (7), node (1)
> **UI Navigation:** click on (4), dropdown (1), scroll down (1), go to (1)
> **File Paths:** node.js (1)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Exercise Files:** boilerplate (1)

#### [Resource-based policies](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=0)** - [Instructor] We've been talking about how users and roles have policies that give them permission into various AWS services and features like S3 Buckets, CloudWatch, and API Gateway.
>
> **[0:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=12)** But do these services and features have any say in all this, or can they just be accessed without their permission?
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=18)** Well, for some AWS services and features, you can provide what are called resource based policies.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=25)** I recommend you look up an AWS documentation to see what services and features support this.
>
> **[0:30](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=30)** But the idea is that in cases like an S3 Bucket, CloudWatch, API Gateway, and several others the resource itself can define permissions as to what's allowed or denied.
>
> **[0:44](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=44)** So let's look at that for an S3 bucket, for example.
>
> **[0:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=48)** I'm going to go to the S3 Bucket management console and I've got a bucket here called importantstuff1234.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=57)** So I'm going to click on this and I'm going to go to permissions.
>
> **[1:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=60)** The block public access settings were set up when I created the bucket and it's on.
>
> **[1:06](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=66)** So I'm blocking all public access.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=68)** So I can change this through the edit button and I can specify different access through these ACLs.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=75)** We can also click on the access control list to manipulate the ACLs.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=80)** One that's given automatically is your AWS account can do all things to this bucket by default.
>
> **[1:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=88)** You can add other accounts for that.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=89)** You can turn on public access and so forth.
>
> **[1:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=92)** This will allow or deny access to this bucket based on these rules.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=97)** You can also specify a bucket policy.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=100)** And this looks very much like the policies we've been seeing before with our users and roles.
>
> **[1:45](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=105)** We can specify a policy specifically for this bucket.
>
> **[1:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=108)** I'm going to go to the policy generator.
>
> **[1:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=110)** It's going to open up a new tab.
>
> **[1:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=112)** This is a little bit different than the policy editor we saw before.
>
> **[1:56](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=116)** So I'm going to select an S3 bucket policy.
>
> **[1:59](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=119)** I'm going to say deny.
>
> **[2:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=121)** And for the user, I'm going to specify an asterisk.
>
> **[2:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=124)** That means this applies to all users.
>
> **[2:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=127)** For the service, it's an S3 Bucket.
>
> **[2:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=129)** And for the actions I'm going to say delete bucket.
>
> **[2:12](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=132)** And for the Amazon resource name, I'm going to paste in the ARN we just copied.
>
> **[2:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=136)** And I'll add this statement to my policy.
>
> **[2:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=138)** I could add more statements, but whenever I'm done I can generate the policy.
>
> **[2:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=143)** Now I've got this [[JSON]] and I can go back to my bucket, paste it in, and save it.
>
> **[2:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=148)** And so basically what I've said is that for this bucket we're going to deny the ability to delete the bucket, this bucket and the asterisk on the principle means everyone.
>
> **[2:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=160)** So no one can delete this bucket.
>
> **[2:42](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=162)** So even though I'm logged in as an admin user with admin access, I cannot delete this bucket.
>
> **[2:49](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=169)** So I can go over here to the S3 dashboard, select the bucket, select delete, do what I need to do to confirm that.
>
> **[3:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=180)** And when I go to delete it, it doesn't go anywhere.
>
> **[3:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=183)** Doesn't give me much of information as to why, but I cannot delete this even though I am administration access.
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=190)** So what's happening is it's combining the policy in my account and the resource based policy of the bucket.
>
> **[3:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=197)** And typically they kind of banded together logically.
>
> **[3:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=201)** So if I had write access through my administration and read access through the resource based policy, I would get both.
>
> **[3:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=208)** They would combine, but a deny always trumps.
>
> **[3:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=211)** So since the resource based policy is denying me access to delete, even though I have that permission through my administration access, the deny on the resource based policy trumps it.
>
> **[3:44](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=224)** And I can't delete this bucket as long as it has that policy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** aws (4), api (2), arn (1), json (1)
> **UI Navigation:** go to (4), click on (2), select the (1)
> **CLI Commands:** aws (4)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 4. Advanced IAM

[↑ Back to Table of Contents](#table-of-contents)

#### [Multi-factor authentication](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=0)** - [Instructor] We talked before about the recommendation for enabling MFA on your root account.
>
> **[0:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=4)** In fact, from my dashboard, I can see I have a four out of five on my security status because I haven't done that.
>
> **[0:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=10)** And I can't do that now because I'm not logged in as the root account.
>
> **[0:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=14)** I can enable it on my account under the security credentials under the dropdown for my account on the top right.
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=21)** I can do it for other users under the users tab.
>
> **[0:24](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=24)** So I'm going to select on the boothadmin user and under the security credentials tab, we'll see the assigned MFA device.
>
> **[0:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=31)** It's not assigned.
>
> **[0:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=32)** So to assign it, I can click Manage.
>
> **[0:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=35)** And from here, I have three options.
>
> **[0:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=37)** I can learn more about these from this link right here, this AWS multifactor authentication link, but these three options give you the most common ones.
>
> **[0:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=46)** So you have a virtual MFA device, which is usually a app that you install on your phone or computer.
>
> **[0:52](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=52)** The U2F security key, which will allow me to connect that to my current device and it'll walk me through that, or the other MFA device which uses a Gemalto token.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=64)** And again, if I continue, it'll walk me through that by getting the serial number and so forth.
>
> **[1:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=69)** So here's a few different ways you can assign these on your existing user accounts to make your account more secure.
>
> **[1:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=75)** You may not need this for every user.
>
> **[1:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=77)** You may not use this for the programmatic connecting accounts for the access key and security keys.
>
> **[1:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=82)** That might be your security, but your group should have some kind of policy.
>
> **[1:27](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=87)** And ideally the more secure, the better.

> [!info]- Semantic Content
>
> **Env Vars:** mfa (4), aws (1), u2f (1)
> **CLI Commands:** aws (1), make (1)
> **UI Navigation:** dropdown (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Federated access](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=0)** - [Instructor] If you're setting up AWS and user accounts for your company accounts, you may already have a lot of users who already have an account on another system and you don't want to duplicate it all over again and make people have a bunch of different accounts.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=16)** One way to get around that is to use identity providers in IAM.
>
> **[0:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=20)** So if you go to the IAM dashboard, you can click on identity providers and this will allow you to create a new provider.
>
> **[0:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=26)** So let's say you have users in your company and you already have [[Google]] accounts where you can use that as an identity provider.
>
> **[0:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=33)** So you would click create provider and you choose one of the two options of SAML or OpenID Connect depending on what your user accounts are defined using.
>
> **[0:43](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=43)** Once you pick one of these, you specify the name.
>
> **[0:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=46)** And in this case of the SAML, the meta document.
>
> **[0:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=50)** For the OpenID Connect, you have to specify the URL and the audience.
>
> **[0:53](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=53)** This is often the client ID or the application ID defined in either Google or [[Facebook]] or Twitter where you create an account through their developer site.
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=63)** A really handy resource in this case is the [[AWS Security]] Blog.
>
> **[1:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=67)** Here you can find all kinds of resources and information for determining how to best secure your site.
>
> **[1:13](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=73)** Particularly I wanted to point out this article written about how to set up federated single sign on to AWS using Google apps.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=80)** This steps you through how to set up everything you need between Google and AWS IAM to allow users to log in.
>
> **[1:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=88)** Again, this is using SAML, you download the meta document, you upload it here and then you have that as one of your identity providers.
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=96)** This is a great resource to tie your systems in together and control access to AWS while using your existing user accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Facebook]] (1), [[AWS Security]] (1)
> **Env Vars:** aws (5), iam (3), saml (3), url (1)
> **CLI Commands:** aws (5), make (1), find (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Credential report and access advisor](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=0)** - [Narrator] Now I want to show you a couple other useful little tools that can help you understand how your users are accessing and using the AWS account.
>
> **[0:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=9)** One is the credential report.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=11)** Here you can download a CSV file that gives you an idea of how your users are logging in and handling their account.
>
> **[0:18](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=18)** Once you've downloaded the CSV file, you can open it as a spreadsheet or process it in any way you want.
>
> **[0:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=23)** Here it is as a spreadsheet.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=25)** We can see the user accounts, their ARN, when the account was created, if their password is enabled, and over here if they have access keys.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=34)** You can also see when their password was last used, last changed, and so on.
>
> **[0:39](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=39)** This gives you an idea of how often users are logging in and updating their password and so on.
>
> **[0:44](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=44)** So you can validate that they're following the policies as necessary.
>
> **[0:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=48)** Of course you can expire their password in the password settings, but here you can see what they're doing on their own.
>
> **[0:54](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=54)** Another useful tool is under the user's tab.
>
> **[0:57](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=57)** For a given user you can select the access advisor tab and see what services they're accessing.
>
> **[1:03](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=63)** It's not up to the minute updated, but it does show you activity usually after a few hours or so.
>
> **[1:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=70)** And you can see what they're accessing and maybe if they're not accessing certain services, they don't really need those permissions and you could remove it from their account to protect the account, but also protect them from any unnecessary access.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=83)** So these are just a couple of more tools that help you really tighten and refine the security of your system based on what's going on and what users are doing.

> [!info]- Semantic Content
>
> **Env Vars:** csv (2), aws (1), arn (1)
> **CLI Commands:** aws (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### [CloudTrail](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=0)** - While we're on the topic of security, I want to talk about another AWS service that gives you a little bit more of a granular view into the actions and events on your account.
>
> **[0:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=9)** It's called Cloud Trail.
>
> **[0:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=11)** So I'm going to go to Cloud Trail and on the dashboard it gives me the most recent events listed.
>
> **[0:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=16)** I can view all the events and see all the events of the last 90 days.
>
> **[0:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=21)** I can scroll through these and see some more details by expanding them.
>
> **[0:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=25)** I can also download this as a report, as a CSV file or [[JSON]], and in the UI, I can specify what columns I want to view.
>
> **[0:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=33)** If I want reports on certain events, in an S3 bucket or Lambda calls, I can create a trail for that.
>
> **[0:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=40)** So I'm going to create a trail called bucket actions, and I'm going to apply to all regions.
>
> **[0:46](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=46)** And I'm also going to apply to all read and write events.
>
> **[0:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=50)** We could make this trail for an S3 bucket or all S3 buckets, and we could specify specific Lambda functions or all current and future Lambda functions.
>
> **[1:02](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=62)** I can do S3 buckets and Lambdas or one or the other.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=64)** I'm just going to do an S3 bucket for this trail.
>
> **[1:08](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=68)** I can create a new S3 bucket or use an existing one.
>
> **[1:11](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=71)** I'm going to create a new S3 bucket and I'm going to name it bucket events.
>
> **[1:16](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=76)** And I'm going to give it some numbers at the end to make it unique.
>
> **[1:20](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=80)** Under the advanced settings, I can specify a log prefix, so that can help me organize this.
>
> **[1:25](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=85)** So I'll call the log prefix bucket logs.
>
> **[1:29](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=89)** I can also enable encryption, enable log file validation, and also send a notification to an SNS topic whenever a log file is delivered.
>
> **[1:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=98)** Then I click create.
>
> **[1:40](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=100)** Once the trail's created, as events happen, it will generate the log file, store it in my bucket, and then I can process it however I wish.
>
> **[1:50](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=110)** So I can go look at this bucket now.
>
> **[1:53](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=113)** Of course it's empty because no log files have been generated, but we can see that under the bucket that I named bucket events 234534, there's my prefix bucket log and so forth.
>
> **[2:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=125)** Now I have a place where my events will be logged on this S3 bucket for all reads and writes for all regions.
>
> **[2:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=130)** You can break it apart depending on how you want to organize your buckets and how you want to process your logs.
>
> **[2:15](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=135)** But this is the general way to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** aws (1), csv (1), json (1), sns (1)
> **CLI Commands:** make (2), aws (1)
> **UI Navigation:** go to (1)
> **Speakers:** - while (1)

#### [Best practices](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=0)** - [Instructor] I want to reiterate a few of the best practices that we've talked about during this course.
>
> **[0:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=5)** One that we mentioned early on was don't use the root account unless it's necessary.
>
> **[0:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=10)** If you're not making core changes to things like the billing or deleting the account, try to use a different admin account.
>
> **[0:17](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=17)** Also, protect your root account and others when possible with multifactor authentication.
>
> **[0:24](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=24)** Also, manage policies for users with groups.
>
> **[0:28](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=28)** That way, when you make changes, you only have to change it in one place and it affects all those users.
>
> **[0:34](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=34)** Also, use a good password policy, something that doesn't allow users to create weak passwords and expire those passwords up to some reasonable amount of time so users have to rotate their passwords or create completely new ones.
>
> **[0:48](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=48)** Also, don't use access keys unless necessary.
>
> **[0:51](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=51)** You don't want to have accounts out there with access keys and you're storing them on the web or in your app where they can be somehow hacked, or rotate those if you have to use them.
>
> **[1:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=61)** Also, you can monitor the usage with CloudTrail.
>
> **[1:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=64)** You can download those reports, you can store them in an S3 bucket when you're monitoring your buckets and lambdas and run reports on those as necessary.
>
> **[1:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=74)** And then also, don't leave user accounts, access keys, and other configuration settings around when they're not being used.
>
> **[1:21](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=81)** If you don't need a user account anymore, delete it.
>
> **[1:23](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=83)** And same with access keys, or at least rotate them.
>
> **[1:26](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=86)** This will help keep your account safe and protect it from anything that might go wrong or users with bad intentions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=0)** - [Bear] Going forward, I strongly encourage you to experiment with creating accounts, logging in with them and monitoring them.
>
> **[0:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=7)** Experience really is one of the best teachers out there.
>
> **[0:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=10)** Also, I encourage you to use best practices from the start.
>
> **[0:14](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=14)** Getting used to using these things and getting your users used to adhering to them can make a lot of difference in the long run.
>
> **[0:22](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=22)** Also, create a cloud trail and monitor things that happen to your S3 buckets and Lambda calls.
>
> **[0:27](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=27)** And on your S3 buckets, I encourage you to create resource-based policies.
>
> **[0:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=31)** It's not the answer to everything and you don't always need them, but it's better to be familiar with it for when it does come up.
>
> **[0:38](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=38)** Also, I'd love to hear how you use IM practices and policies, so keep in touch with me at bear@brainwashinc, brainofbear on Twitter, and of course, check out my [[LinkedIn]] account and I'd love to hear from you, thanks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [bear] (1)


## Instructor

- [[Bear Cahill]]

## Skills Covered

- Amazon Web Services (AWS)
- Identity and Access Management (IAM)

## Path Context

### In [[Getting Started as an AWS Developer]]
← [[Building Serverless Applications in AWS]] | **3 of 4** | [[AWS Quick Tips for Developers]] →

## Appears In

- [[Getting Started as an AWS Developer]]

## Related Courses

_Courses sharing skills:_

- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Identity and Access Management (IAM)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[Azure for Architects- Security and Identity Management with Microsoft Entra]] — Identity and Access Management (IAM)

---

[↑ Back to top](#)