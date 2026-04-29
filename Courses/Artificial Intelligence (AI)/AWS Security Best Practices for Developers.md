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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AWS%20Security%20Best%20Practices%20for%20Developers.md)

![AWS Security Best Practices for Developers](https://media.licdn.com/dms/image/v2/C4E0DAQF4qOwzwd8iMg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1663692236119?e=2147483647&amp;v=beta&amp;t=Ea-1GHa2PKaMUJtYik7ExpZi2SxxBgYwtU4713TSJIk)

# AWS Security Best Practices for Developers

> Security matters to everyone, but solid security practices start with the developer of an application. In this developer-centered course, instructor and AWS Certified Solutions Architect Carlos Rivas shows how to build stronger, more secure applications for deployment on Amazon Web Services. Learn core AWS security development principles around Identity and Access Management (IAM), S3 storage, and

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797) | 1h 32m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Identity and Access Management]]** (6 videos)
- **[[#2. Amazon Simple Storage Service (S3)]]** (7 videos)
- **[[#3. Key Management Service Encryption]]** (5 videos)
- **[[#4. User Identities with Cognito and Web]]** (6 videos)
- **[[#5. Certificate Manager]]** (3 videos)
- **[[#6. Parameter Store and Secrets Manager]]** (3 videos)
- **[[#7. Security Alerts in AWS]]** (3 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Securing your application
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=0)** - [Carlos] How do you know when your application code and infrastructures are ready for the cloud?
>
> **[0:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=4)** When you're confident that your data is secure.
>
> **[0:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=7)** A conversation about security will always be incomplete if we don't touch on identity and access management, storage, and data encryption.
>
> **[0:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=16)** We'll talk about AWS Key Management Service, AWS Cognito, and cover identity federation, which is very important to master when migrating applications to the cloud.
>
> **[0:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=27)** This will help your application establish user identity without requiring your users to maintain multiple login credentials for every application.
>
> **[0:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=36)** Hi, I'm Carlos Rivas, and I'm a Certified AWS Solutions Architect and software engineer.
>
> **[0:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/securing-your-application?u=76281980&t=42)** Let's secure your application in this LinkedIn Learning course.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3)
> **Env Vars:** aws (3)
> **Code Keywords:** let (1)
> **Speakers:** - [carlos] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/what-you-should-know?u=76281980&t=0)** - [Instructor] To be able to better apply this course, it's recommended that you have familiarity with AWS basic services, such as S3 and EC2.
>
> **[0:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/what-you-should-know?u=76281980&t=10)** You understand the security needs of your application and its underlying infrastructure.
>
> **[0:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/what-you-should-know?u=76281980&t=14)** Only you know if your application will require specific permissions, data encryption, or complex authentication mechanisms.
>
> **[0:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/what-you-should-know?u=76281980&t=22)** If you need a refresher on AWS, you can check out Amazon Web Services Essential Training in our library.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), ec2 (1)
> **CLI Commands:** aws (2)
> **Code Keywords:** require (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. Identity and Access Management

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Important concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=0)** - [Instructor] Identity and access management or IAM for short is a critical tool that has a significant impact on all AWS services.
>
> **[0:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=9)** Everything you'll create within your AWS cloud will need to have permissions granted and managed by account owners or administrators.
>
> **[0:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=17)** This is done from the IAM console.
>
> **[0:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=20)** Before jumping to our console, let's take a moment to learn some useful terminology.
>
> **[0:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=26)** An identity within IAM is a resource for which you want to be able to manage permissions.
>
> **[0:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=32)** It could be a single user, a group of users, or it could simply be a role that you assign to an AWS service in order to access another one.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=41)** As we'll see later in the course, it can be a federated user that locked in through another identity provider.
>
> **[0:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=49)** Policies are JSON-formatted documents that specify which actions to allow or deny to an IAM identity.
>
> **[0:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=57)** By default in AWS, all access is denied unless you specify otherwise.
>
> **[1:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=63)** A user account in IAM is one way to give individuals access to resources within this AWS account.
>
> **[1:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=70)** These permissions will need to be in-line with the role they perform within your organization.
>
> **[1:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=75)** An developer for example may require access to Cutmate, Cloud9, EC2 and others.
>
> **[1:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=81)** But this person probably does not need to see audit logs within Cloud Trail or change any network settings within the Bitro private cloud as these tasks are performed by other employees within the organization.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=95)** A preferred away to manage users within IAM is by using groups.
>
> **[1:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=100)** Groups help you avoid having to repeat yourself when assigning policies to users individually.
>
> **[1:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=105)** Just group them in a way that makes logical sense for your company.
>
> **[1:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=108)** For example, network engineers, database administrators, developers, and super users.
>
> **[1:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=115)** Any and all changes made to the group will apply it immediately to all members of the group.
>
> **[2:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=121)** As we mentioned earlier, in IAM, you can assign access policies to a non-user identity.
>
> **[2:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=127)** This is called a role, and you can assign it to your application servers, for example, in order to give them permission to access your message queues, databases, and other services.
>
> **[2:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=137)** Please note, this is not to be confused with security groups which control access at the networking level.
>
> **[2:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=143)** Roles control access to AWS services not network traffic.
>
> **[2:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=148)** Let's look at the next diagram.
>
> **[2:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=150)** In this example, a developer launches an EC2 instance that gets a role assigned at boot time.
>
> **[2:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=156)** When the application running inside this EC2 server attempts to access the photos S3 bucket, it will be able to do so.
>
> **[2:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=163)** This is very convenient because this way your application can be deployed to a staging or production environment, and you don't need to provide an access key pair for it to be able to run.
>
> **[2:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/important-concepts?u=76281980&t=173)** When a resource has permissions from a role, IAM will give a set of temporary credentials that match the permissions associated with the role.

> [!info]- Semantic Content
>
> **Env Vars:** iam (8), aws (6), ec2 (3), json (1)
> **CLI Commands:** aws (6)
> **Code Keywords:** let (2), require (1), private (1), super (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (3)
> **Cross-References:** later in (1), we mentioned (1)
> **Speakers:** - [instructor] (1)

#### Uses and access keys
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=0)** - [Instructor] In order to provide access management to our resources, IAM requires that we create users or roles and assign them to those resources.
>
> **[0:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=9)** If you're a developer, AWS provides you with the mechanisms to access services from your code, as well as the command line of your favorite operating system.
>
> **[0:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=19)** I'm talking about an access key pair.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=21)** These key pairs are associated with your IAM user and inherit the exact permissions that the user has.
>
> **[0:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=27)** Let's go to the console now and create a user account with full admin rights.
>
> **[0:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=33)** Here in our IAM console, we click on users.
>
> **[0:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=38)** Then we click on add user.
>
> **[0:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=42)** Give it a name.
>
> **[0:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=44)** Call it demo user.
>
> **[0:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=46)** We'll give it AWS management consult access.
>
> **[0:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=51)** We'll choose custom password and type our desired password.
>
> **[0:59](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=59)** We'll click next.
>
> **[1:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=62)** And then we have to choose whether to add the user to a group, copy permissions from an existing user or attach existing policies.
>
> **[1:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=70)** We'll choose attach, and choose administrator access.
>
> **[1:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=77)** We'll check it.
>
> **[1:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=78)** Click review.
>
> **[1:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=80)** In the review screen, we'll click create user.
>
> **[1:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=85)** And we're done, we can close this window.
>
> **[1:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=89)** We can use this account now to log in to the AWS console with administrator rights.
>
> **[1:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=96)** In order to set up our command line tool, you can visit aws.[amazon.com/cli](https://amazon.com/cli) and on the right, you can see install options for Windows, Mac and Linux.
>
> **[1:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=108)** Let's go back to the console now to create an access key pair for our user.
>
> **[1:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=115)** We'll click our user.
>
> **[1:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=118)** Go to security credentials.
>
> **[2:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=121)** And we'll create an access key.
>
> **[2:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=124)** The access key is automatically created.
>
> **[2:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=127)** We'll click show for the secret key.
>
> **[2:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=130)** Be sure to make a note of the secret key and access key, because once we move away from this screen, you won't be able to see it or retrieve it again.
>
> **[2:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=139)** If you lose it, you'll have to create a new key pair.
>
> **[2:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=142)** So we'll copy these values, as well as the secret key.
>
> **[2:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=153)** And we'll use this information to configure the AWS CLI tool.
>
> **[2:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=158)** Let's go to our console now to complete our setup.
>
> **[2:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=161)** Once the tool is installed, we'll type aws configure.
>
> **[2:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=168)** It's going to ask for the access key, which we have saved.
>
> **[2:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=172)** We'll copy this value followed by the secret key, which we also copied.
>
> **[3:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=184)** The default region, we're going to leave it as us-west-1.
>
> **[3:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=188)** That's my preferred region.
>
> **[3:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=192)** And the default output format is okay as none.
>
> **[3:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=195)** This completes our setup.
>
> **[3:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/uses-and-access-keys?u=76281980&t=196)** Our command line tool is now ready for use with the keys associated with our user account.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), iam (3), cli (1)
> **CLI Commands:** aws (6), make (1)
> **Prerequisites:** configure (2), setup (2), set up (1), install (1)
> **UI Navigation:** go to (3), click on (2)
> **Tools:** command line (3), aws console (1)
> **Code Keywords:** let (3)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Cross-References:** go back to (1)

#### Roles and policies
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=0)** - [Instructor] If you noticed, when we created our user account, we gave it full access permissions.
>
> **[0:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=6)** Unless you're the owner of your AWS account, you'll rarely see this in the real world.
>
> **[0:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=11)** This means you need to be familiar with the creation and management of IAM policies, which can be used to provide a more restrictive and Java-specific set of permissions.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=21)** Let's look at a policy right now.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=24)** Here in an AWS console, we'll click on policies under IAM, type s3, and this is the AWS s3 full access policy.
>
> **[0:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=38)** It has three main elements.
>
> **[0:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=40)** Effect, which can be allow, or the nine, the action, in this case, the s3 service, and the resource, in this case, it could be a specific bucket within s3.
>
> **[0:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=52)** Let's click on roles now.
>
> **[0:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=57)** We'll click on create role.
>
> **[1:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=60)** When defining a role, you'll be asked to first create a trust policy.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=64)** Essentially, this is just asking who can assume this role, and the answer to that is, users from other accounts, federated users, web identity users, and in our case, AWS services.
>
> **[1:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=78)** Let's now associate the policy we just saw with this role.
>
> **[1:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=83)** We'll choose EC2 service, click on permissions, and again, type s3, and we'll check that.
>
> **[1:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=98)** We'll type a name for our role, demo for EC2 servers, and click create.
>
> **[1:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=111)** We'll go to EC2 now.
>
> **[1:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=117)** We have a running server, we're going to assign that role now.
>
> **[2:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=121)** We'll right click, go to settings, attach IAM role, and choose the role we just created.
>
> **[2:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=133)** We'll click apply.
>
> **[2:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=139)** Here in our terminal, we have connected to that particular server.
>
> **[2:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=144)** If we type AWS, s3, LS, and the name of our bucket, we should be able to see the contents of that bucket, cause now our server has full access to it.
>
> **[2:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=156)** Before we finish talking about role, it's important to mention this particular use case.
>
> **[2:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=161)** In multi-account environments where companies have completely isolated AWS accounts for production and development, it's common practice to use role instead of IAM users inside those accounts.
>
> **[2:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=173)** This allowed them to manage employees from a single AWS account, that is, the gateway account in our diagram, and to grant them full access permission within their own isolated environment.
>
> **[3:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=186)** With this setup, IT operators can log in to the production environments and perform their jobs without restrictions.
>
> **[3:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=193)** We can say the same about developers.
>
> **[3:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=195)** They have full control as long as they are within the confines of the development account.
>
> **[3:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=200)** This is a great example of separation of duties, which is a key element of data security.
>
> **[3:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/roles-and-policies?u=76281980&t=205)** Let's wrap up this chapter by revisiting some important facts we have learned.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), iam (4), ec2 (3)
> **CLI Commands:** aws (7), ls (1)
> **Code Keywords:** let (4), case, (3), case. (1)
> **UI Navigation:** click on (4), go to (2)
> **Tools:** aws console (1), terminal (1)
> **Definitions:** is a  (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### IAM key points
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=0)** - [Carlos] Some of these key points may seem like common sense, but it's important to emphasize them for those of you that will be using this knowledge right away or you intend to take the AWS Developer Associate Exam.
>
> **[0:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=12)** Always use an IAM user to interact with your AWS resources.
>
> **[0:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=17)** Even if you are the owner and you're using your own personal AWS account, avoid using the root account credentials and keep them safe.
>
> **[0:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=25)** Instead, use an MFA-enabled IAM user.
>
> **[0:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=29)** All AWS root accounts should also have multi-factor authentication enabled.
>
> **[0:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=35)** When managing more than a handful of IAM users, it's preferable to manage them using groups rather than individual users.
>
> **[0:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=42)** AWS access to services is set to Deny for all, unless otherwise specified in their access policy.
>
> **[0:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=50)** Prefer the use of roles to allow your application to access resources and services.
>
> **[0:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=55)** This way, you can concentrate on maintaining roles that are very exclusive to the application's need instead of having to manage credentials and rotate access keys frequently.
>
> **[1:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=65)** Access keys should never be hardcoded in your source code, because sooner or later you'll forget they're there, and you'll accidentally commit to your source code repository.
>
> **[1:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/iam-key-points?u=76281980&t=74)** Once this happen, your access keys will become public knowledge within your team, and you'll be forced to destroy them and create new ones.

> [!info]- Semantic Content
>
> **Env Vars:** aws (5), iam (3), mfa (1)
> **CLI Commands:** aws (5)
> **Exercise Files:** source code (2)
> **Code Keywords:** public (1)
> **Speakers:** - [carlos] (1)

#### Challenge: IAM roles and policies
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=0)** - [Narrator] Managing permission for multiple users can be challenging.
>
> **[0:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=9)** It's nearly impossible if you have to scale to hundreds or even thousands of federated user accounts.
>
> **[0:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=14)** Turns out there's an efficient way to handle this.
>
> **[0:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=17)** In this challenge, we're going to create an IM policy in order to limit which services are visible.
>
> **[0:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=23)** The goal is to do this once, and then you can associate this policy with as many users as you need using an IAM role.
>
> **[0:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=30)** Consider this: start simple, or better yet, start with nothing and then add services as needed.
>
> **[0:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-iam-roles-and-policies?u=76281980&t=37)** Give it a try now before you proceed.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), this: (1)
> **Env Vars:** iam (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: IAM roles and policies
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=0)** - [Instructor] All right, so my solution for this challenge includes the creation of an IAM user and we're going to pretend this demo user is a assistant administrator for our company.
>
> **[0:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=16)** So this person needs to be able to create EC2 servers with full control of what they're doing but they only need read only access to VPCs.
>
> **[0:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=28)** They should be able to do networking stuff but they should not be able to change anything regarding VPCs or networking at all.
>
> **[0:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=36)** So we're going to create a policy and that policy is going to have VPC read only access and it's going to have EC2 full access.
>
> **[0:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=44)** We're going to discuss later the second part of this challenge which is to assign a role associated to this policy so that we can replicate this effort for many, many users, let's go to our console.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=58)** Before we create our policy, I wanted to show you what it looks like from the user's perspective.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=64)** I created a user called Iamdemouser and if I click here on the VPC dashboard, you see we get these error messages that says retry instead of the count of VPCs, subnets, and so on.
>
> **[1:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=79)** If I click on my VPCs, it says you're not authorized to perform this operation.
>
> **[1:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=85)** This is because when you create a user, if you don't assign any policies they have access to absolutely nothing.
>
> **[1:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=92)** That's default behavior within AWS.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=95)** Now let's go back to our console using our admin user and create a policy that we can associate with this other demo account.
>
> **[1:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=105)** And now we're logged in here using our admin user, I'll go to policies, I'll click on create policy, and I don't want to type every single action that I want to do here.
>
> **[1:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=117)** So I'll just click on import managed policy, I'm going to type VPC and I'm going to choose AmazonVPCReadOnlyAccess.
>
> **[2:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=130)** Since we also require the ability to work with EC2s I'll click import again, and I'll type EC2.
>
> **[2:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=140)** If I scroll down, I'll find AmazonEC2FullAccess, I click on that and I click on import.
>
> **[2:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=148)** So now we have a policy that has both VPC read only access as well as EC2 full admin access.
>
> **[2:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=158)** I'll click on review, I'll give it a name, I'll type SysAdminPolicy
>
> **[2:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=171)** and I'll click on create policy.
>
> **[2:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=175)** Now our policy has been created.
>
> **[2:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=177)** Let's go ahead and associate it with our user, click on users, select our user and click on add permissions.
>
> **[3:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=189)** We're going to choose existing policies and I'll type SysAdminPolicy, and we see it there, so I'll select it and click review.
>
> **[3:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=200)** And that's it, add permissions.
>
> **[3:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=204)** Now I'm going to go back to our user to see if these permissions are taking effect.
>
> **[3:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=209)** You may need to log out and log back in with that particular account to make sure this change will take effect.
>
> **[3:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=216)** Let's go.
>
> **[3:39](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=219)** All right, after a few minutes, I logged out and logged back in with the iamdemouser and now you can see we're getting the count of VPCs, subnets, and so on.
>
> **[3:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=231)** And if I click on my VPCs, I don't get an error message anymore.
>
> **[3:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=234)** It actually shows the VPC, same thing for EC2.
>
> **[4:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=240)** If I go here, I get my running count and no error messages of any kind, so everything is good to go.
>
> **[4:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=247)** So now for the second part of this challenge, how can we reuse this permission if we have several people that need access to this?
>
> **[4:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=256)** Let's go back to our admin console, back here in our administration console, since we have a policy, what we can do is set the policy to a group.
>
> **[4:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=265)** For example, I click on groups and let's say I wanted to assign it to the admins group.
>
> **[4:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=271)** I'll click on it.
>
> **[4:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=273)** I would click on attach policy, I would find SysAdminPolicy and select it and then attach it, after that anybody within the admin groups will get this policy assigned to them.
>
> **[4:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=290)** Other options that you have is roles, I will click create role and when you're creating a role, you can assign it to a federated login provider, usually active directory and then you can use your corporate credentials and then anybody logging in to those credentials can be associated with the role and this role is going to have the policy that we created.
>
> **[5:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=315)** And that's how you associate a policy with a large number of users.
>
> **[5:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-iam-roles-and-policies?u=76281980&t=319)** And that's my solution to this challenge regarding permissions, roles, and user groups, hopefully it's very similar to yours.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (13), go to (2), scroll down (1)
> **Env Vars:** ec2 (5), vpc (5), iam (1), aws (1)
> **Code Keywords:** let (6), require (1), import. (1)
> **CLI Commands:** find (2), aws (1), make (1)
> **Cross-References:** go back to (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Amazon Simple Storage Service (S3)

> [[#Table of Contents|↑ Back to Table of Contents]]

#### S3 as a static website
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=0)** - [Carlos] Storage is one of the cloud's most popular feature.
>
> **[0:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=4)** Among other things, it enable businesses and individuals with the ability to back up their computers and phones.
>
> **[0:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=10)** These files can later be accessed from anywhere.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=13)** Unfortunately, a lot of people set up their cloud storage accounts with security settings that are far too open.
>
> **[0:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=20)** In these sections, we'll help you avoid this by showing you different measures you can take to safely store your confidential data in Amazon S3 Service.
>
> **[0:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=30)** To start our conversation about S3 security, let's create a bucket and give it read-only access to the entire world.
>
> **[0:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=37)** We'll do this using S3 static website feature, which enables access to the bucket via web browser.
>
> **[0:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=44)** Let's go to the console now and create our bucket.
>
> **[0:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=48)** Here we are in the S3 console.
>
> **[0:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=51)** We'll click Create bucket.
>
> **[0:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=54)** We'll give it a DNS-compliant name, rivas-demo- bucket3, bucket5, and we'll click Create.
>
> **[1:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=71)** We'll click on our bucket name.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=73)** We're going to Upload a file here.
>
> **[1:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=76)** Click on Add files.
>
> **[1:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=79)** And we'll choose index from our exercise files.
>
> **[1:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=84)** And click Upload.
>
> **[1:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=87)** As you can see, our file has been uploaded to our bucket.
>
> **[1:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=91)** Now if we go to Properties and go to Static website hosting and click on that, we'll click on Use this bucket to host a website.
>
> **[1:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=104)** And we'll specify index.html as our Index document.
>
> **[1:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=110)** We'll click Save.
>
> **[1:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=114)** Now going back here, you see there's an endpoint here at the top.
>
> **[1:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=118)** We're going to use this to make sure everything is working.
>
> **[2:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=122)** We'll click on that, and we'll get an error.
>
> **[2:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=125)** It's important to remember that buckets are locked down by default to avoid oversharing disasters.
>
> **[2:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=131)** Before this bucket is open to the world, we need a bucket policy.
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-as-a-static-website?u=76281980&t=135)** Let's take care of that.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (3)
> **Code Keywords:** let (3), static (2)
> **File Paths:** index.html (1)
> **CLI Commands:** make (1)
> **Env Vars:** dns (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [carlos] (1)

#### Bucket policies
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=0)** - [Instructor] Now that we have our bucket set up and ready to host our static webpages, we need to create a bucket policy that's going to allow web visitors to access the HTML file that we just loaded into it.
>
> **[0:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=12)** Let's go to our console.
>
> **[0:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=14)** This is our bucket.
>
> **[0:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=15)** We'll go to permissions here.
>
> **[0:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=18)** I'll click on bucket policy.
>
> **[0:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=20)** This is the bucket policy editor.
>
> **[0:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=22)** A bucket policy is a JSON document which we use to specify access restrictions on the objects stored in our bucket.
>
> **[0:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=30)** If we open up access to the world, our static website should work.
>
> **[0:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=35)** Let's try that now.
>
> **[0:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=37)** We'll go to our code editor.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=41)** This file, bucket_policy.json, which you can find in the exercise files, contains a bucket policy.
>
> **[0:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=49)** This policy shows four main elements, effect, which you can see here on line five, which is allow, permitting access to our actions.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=58)** Principle on line six.
>
> **[1:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=61)** In this case, principle is everyone.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=64)** Action, in this case, get object, permitting the principle to read objects within the bucket and resource, where we specified our bucket ARN, or Amazon Resource Name, along with slash star to be sure we can serve more than just one HTML file.
>
> **[1:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=82)** We're going to copy this document and go back to our console.
>
> **[1:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=91)** We're going to paste the document and we're going to remove this from the resource and just copy the ARN of our bucket.
>
> **[1:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=102)** Click copy.
>
> **[1:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=105)** Paste, remove this extra space here.
>
> **[1:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=109)** We're going to click save.
>
> **[1:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=112)** As you can see, we get a warning that says public.
>
> **[1:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=116)** You have provided public access to this bucket.
>
> **[1:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=118)** That's okay, because that's what we want.
>
> **[2:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=122)** Let's go back to properties and back to the static website hosting.
>
> **[2:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=127)** We're going to retry our endpoint here and this time it should work.
>
> **[2:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=133)** Great, this is the contents of our index.html file that we have in our bucket.
>
> **[2:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/bucket-policies?u=76281980&t=139)** We've proven this works now, but let's go a different direction and start locking things down.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), static (3), case, (2), public (2)
> **Env Vars:** html (2), arn (2), json (1)
> **UI Navigation:** go to (3), click on (1)
> **File Paths:** bucket_policy.json (1), index.html (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** find (1)
> **Code Identifiers:** bucket_policy (1)
> **Exercise Files:** exercise files (1)

#### S3 bucket encryption
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=0)** - [Instructor] Just like in the real world, the best measure you can take against theft is to have several layers of protection.
>
> **[0:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=7)** If an intruder gains access to your files in an S3 bucket and you have encryption enabled they won't be able to do anything with your data without access to the encryption key.
>
> **[0:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=18)** Let's enable this additional layer of protection in our bucket.
>
> **[0:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=22)** Click on permissions, go to bucket policy again.
>
> **[0:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=27)** I'm going to remove this public policy.
>
> **[0:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=32)** We'll go back to properties, static web hosting and disable.
>
> **[0:39](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=39)** We'll click save.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=41)** Now we'll go to default encryption.
>
> **[0:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=44)** We're going to choose AES-256, which is server side encryption with Amazon S3 managed keys.
>
> **[0:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=52)** This means you don't have to do anything.
>
> **[0:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=54)** The S3 service will manage your encryption keys.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=58)** We'll choose that and click save.
>
> **[1:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=63)** That's all you need to do to enable encryption with S3 inside your bucket.
>
> **[1:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=68)** By the way this does not encrypt our already existing files.
>
> **[1:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=72)** Keep that in mind.
>
> **[1:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=74)** You can always choose to encrypt the files yourself but as you can see in the diagram this approach makes you responsible for managing your keys.
>
> **[1:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-bucket-encryption?u=76281980&t=82)** It's important to remember this option if you are presented with scenario where you have to meet corporate or government regulations that require that you are in total control of the encryption keys being used.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), public (1), static (1), require (1)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** aes (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### S3 object versioning and MFA delete
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=0)** - [Instructor] If you're using cloud storage within your company, chances are several people have access to it.
>
> **[0:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=6)** In order to prevent accidental deletion of files or overrides, AWS provides additional layers of security.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=13)** Let's look at versioning right now.
>
> **[0:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=15)** When versioning is enabled in your S3 bucket, S3 will keep track of changes that occur to your files including deletes.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=24)** Each time, the same file is uploaded, S3 saves the old ones and assigns a new tracking ID to the latest version.
>
> **[0:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=32)** This is all transparent to you, the user.
>
> **[0:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=34)** Typically you'll interact with the latest version of your file, but when things go wrong, say an accidental override, you can always go to the S3 console and choose to retrieve the previous version of your file.
>
> **[0:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=48)** Let's go to our console now.
>
> **[0:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=51)** Here we are in the AWS console, and we have our bucket open.
>
> **[0:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=56)** We'll click on properties and select versioning.
>
> **[1:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=61)** We'll click enable.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=64)** Keep in mind that when enabling versioning, it cannot be disabled.
>
> **[1:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=68)** You can suspend it, but you cannot disable it.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=73)** You might be thinking if I update my files very frequently and S3 keeps copies of all versions, it can get expensive very quickly due to added storage costs.
>
> **[1:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=83)** Not to worry.
>
> **[1:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=84)** We can manage that using life cycle rules.
>
> **[1:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=89)** We'll go to management, life cycle, and we'll add a life cycle rule.
>
> **[1:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=96)** We're going to call it delete old versions.
>
> **[1:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=101)** We'll click next.
>
> **[1:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=103)** We don't need transitions in this case.
>
> **[1:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=104)** We'll click next.
>
> **[1:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=106)** We'll configure expiration.
>
> **[1:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=110)** We'll check on previous versions and select any amount of days that applies to your case.
>
> **[1:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=117)** In this case, we can leave it at 365, meaning that after 365 days, all previous version of the file in your S3 buckets will be removed.
>
> **[2:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=129)** We click next and click save.
>
> **[2:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=133)** With this rule, you can rest assured that the all versions will be kept for our desired time period but then permanently deleted to save on storage cost.
>
> **[2:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=144)** Even though you can't see this option in the AWS console, once versioning is enabled in your bucket, you have the option adding one more layer of protection, and that is multifactor authentication deletes.
>
> **[2:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=158)** Obviously this will require IM users that have multifactor authentication enabled.
>
> **[2:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=163)** These users, assuming they have permission to delete files in your S3 bucket, will be asked to provide their security token along with their delete requests.
>
> **[2:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=173)** The way to enable it is through the AWS CLI tool with a command seen here.
>
> **[2:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-object-versioning-and-mfa-delete?u=76281980&t=178)** Now let's revisit important things to remember from this section.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), delete (3), case. (2), override (1), case, (1)
> **Env Vars:** aws (4), cli (1)
> **CLI Commands:** aws (4)
> **UI Navigation:** go to (3), click on (1)
> **Tools:** aws console (2)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### S3 key points
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=0)** - [Instructor] As we close this section, let's revisit some important facts about S3 that usually come up in Certification exams.
>
> **[0:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=7)** Bucket policies are your primary tool to manage access in and out of your S3 bucket.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=13)** The default policy if you don't specify one, is to deny access to all.
>
> **[0:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=18)** You can also restrict access with ACLs, Access Control List, but this is the legacy way to do it, and bucket policies are preferred.
>
> **[0:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=27)** Data encryption in transit is done using SSL/TLS, or as most people know it, HTTPS or secure HTTP.
>
> **[0:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=36)** Data encryption at rest can be done using the S3 managed keys, or KMS managed keys, and we'll talk more about KMS in the next section.
>
> **[0:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=45)** S3 managed encryption, SSE-S3, is the preferred method, and it does not incur additional charges.
>
> **[0:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=52)** KMS managed encryption, SSE-KMS, comes with KMS service charges.
>
> **[0:59](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=59)** It's also worth noting that you can always encrypt the files yourself prior to uploading to S3.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=64)** But in this case, you are responsible for managing encryption keys, as well as encryption and decryption.
>
> **[1:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=70)** Enable versioning and Multi-factor Authentication Deletes to protect files in your S3 buckets against accidental overrides or deletes.
>
> **[1:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/s3-key-points?u=76281980&t=78)** Once versioning is enabled, it cannot be reverted back.

> [!info]- Semantic Content
>
> **Env Vars:** kms (5), sse (2), ssl (1), tls (1), https (1)
> **Code Keywords:** let (1), case, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Challenge: S3 presigned URL challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=0)** - [Instructor] There are times when you will have files in S3 that you want to share with the outside world.
>
> **[0:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=11)** Anonymous users can't access S3 unless you make the bucket totally public.
>
> **[0:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=16)** But this isn't exactly a secure practice.
>
> **[0:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=18)** Is there a way that I can share files without compromising security?
>
> **[0:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=22)** In fact, there is.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=24)** This is done by using presigned URLs which point to the specific files that you want to share.
>
> **[0:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=29)** Go ahead and create an S3 bucket and add some image files to it.
>
> **[0:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=33)** Then using the AWS CLI tool, create a presigned URL that allows the public to view these images without actually accessing the entire contents of your S3 bucket.
>
> **[0:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-s3-presigned-url-challenge?u=76281980&t=43)** Go ahead and try it.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), cli (1), url (1)
> **CLI Commands:** make (1), aws (1)
> **Code Keywords:** public (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: S3 presigned URL challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=6)** - [Instructor] So, the challenge that you have here in front of you is that you don't want to share the entire contents of your S3 bucket.
>
> **[0:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=14)** You just want to share one specific file for a specific period of time with one person across the internet.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=21)** In this case, let's say we want to share image one, the JPEG.
>
> **[0:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=26)** This file's going to have an object URL, which I can click right now.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=31)** And we're going to get an error message that says access denied, as we expected it to be.
>
> **[0:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=37)** Now, we want this file to be shared with someone across internet but we don't want to share the rest of the contents.
>
> **[0:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=43)** So let's go ahead and create a pre-sign URL and see how that works.
>
> **[0:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=50)** Here we are. I'll show you the bucket.
>
> **[0:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=55)** So you can see image one and image two there.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=58)** Now I'll type aws s3 pre-sign and then the name of the bucket and the file name as well, which in this case is image one.
>
> **[1:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=72)** Now, I'm going to add something else here.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=73)** Dash, dash, expires in, and I'm going to specify 30 seconds.
>
> **[1:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=80)** Of course, in a more realistic scenario, you would specify a much longer time interval, but for our purposes, 30 seconds is enough.
>
> **[1:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=88)** I'll click enter.
>
> **[1:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=90)** Now you get this URL that you can share with the other person, and they'll be able to download that content from your s3 bucket without having access to anything else in that bucket.
>
> **[1:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=101)** Let's verify.
>
> **[1:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=104)** I'll copy the URL and let's go back to our browser.
>
> **[1:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=112)** I'll paste the value in here and we get our file.
>
> **[1:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=118)** Now, the interesting thing here is that after 30 seconds, this URL is going to expire.
>
> **[2:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=125)** So the person will no longer have access to this particular file in your s3 bucket and they never had access to anything else, which is the whole purpose of this challenge.
>
> **[2:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=136)** If I refresh, now we get a message that says request has expired, as we expected.
>
> **[2:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-s3-presigned-url-challenge?u=76281980&t=143)** And that's the solution to this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1), else, (1)
> **Env Vars:** url (5), jpeg (1)
> **CLI Commands:** aws (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)


### 3. Key Management Service Encryption

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Key Management Service (KMS) introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=0)** - [Instructor] KMS, or Key Management Service, is one of those services that you won't likely use directly, but behind the scenes it can influence your security choices in some of the most popular AWS services, like S3 and EBS.
>
> **[0:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=14)** If you have the task of managing encryption for an AWS environment, it is in your best interest to use KMS.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=21)** In some cases, encryption may be a compliance requirement for your application, such as when handling medical records or credit card information.
>
> **[0:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=30)** KMS protects your encryption keys and therefore protects your encrypted data.
>
> **[0:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=36)** If your data falls in the wrong hands, everything should be fine, as long as they don't have access to the encryption keys that were used.
>
> **[0:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=43)** If you need to use your own encryption key for compliance reasons, you can still use KMS because it supports imported keys.
>
> **[0:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=50)** With that said, we'll do our demo right away to help you understand exactly how KMS works.
>
> **[0:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/key-management-service-kms-introduction?u=76281980&t=56)** But please understand that when using this tool, combined with other AWS services, you likely won't need to do anything at all because it integrates seamlessly and just needs to be configured once and done.

> [!info]- Semantic Content
>
> **Env Vars:** kms (5), aws (3), ebs (1)
> **CLI Commands:** aws (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using AWS KMS
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=0)** - [Instructor] We're going to start our demo in the IAM console, here on the left we'll go to the bottom and click on encryption keys, not the most intuitive location but this is how we get to the service.
>
> **[0:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=14)** The first thing you'll notice is that there's a region reference here.
>
> **[0:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=18)** This is because of a significant difference between IAM and KMS.
>
> **[0:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=22)** IAM is a global service, but KMS is region specific.
>
> **[0:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=26)** So be sure to create your encryption keys in the region that you intend to use them.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=31)** I'll choose Oregon, US West 2.
>
> **[0:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=36)** We're going to click on create key, we'll give it a name and description, our-demo-key-2, this is for our demo.
>
> **[0:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=53)** Advanced options only comes into play if you want to import an external key to be used in AWS, we'll just leave it as is and click next.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=64)** We don't need tags at this time but if this key was for development or production it would be a good practice to tag it with an environment tag, for now, let's just click next.
>
> **[1:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=75)** Here we can choose which IAM user and roles can be administrators for this key.
>
> **[1:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=80)** An administrator is typically not the person that will use this key to encrypt data but rather the individual with permissions to change the key, disable it or delete it.
>
> **[1:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=90)** We'll choose our user and click next, now usage permissions state which user or roles can use this key for practical applications.
>
> **[1:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=102)** We'll choose the same user in our case but in practice this likely will be a different role or a different person.
>
> **[1:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=110)** Click here and click next, last step here.
>
> **[1:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=115)** This is just a review that everything looks correct and then we can create our key, and our key has been created.
>
> **[2:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=126)** If we select it and click on key actions, we could enable it, disable it, and schedule it for deletion.
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=135)** Even though we have administrator rights over this key, we're not allowed to delete it, we can just mark it for deletion and after the wait period, which is a minimum of seven days the key will be deleted.
>
> **[2:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=147)** This is a protection mechanism because if you accidentally delete this key, any and all data that was encrypted with it essentially becomes garbage.
>
> **[2:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=157)** And this is the view from the administrator point of view.
>
> **[2:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=160)** These are the actions that you can possibly take with your key.
>
> **[2:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=163)** It's also worth noting that KMS has a feature to allow you to rotate your keys automatically.
>
> **[2:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=169)** It is a well known practice that forcing everyone to change their password frequently adds another layer of security, the same can be said about encryption keys.
>
> **[2:59](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=179)** So just remember that this feature exists and it's a great practice to have it enabled.
>
> **[3:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=186)** Finally, in order to use the key to encrypt manually although you won't need this since you can just enable KMS with your key in your desired data store like S3, RDS, or EVS, this is the command that you would use if using the AWS CLI tool.
>
> **[3:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=202)** Of course, you can also do this from the API from your own code.
>
> **[3:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=207)** And this is the decrypt command and the command to enable automatic key rotation that we just mentioned.
>
> **[3:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=213)** Please note the key ID value that needs to be used and not the key alis or name.
>
> **[3:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-aws-kms?u=76281980&t=220)** Okay, let's recap what we have learned about KMS.

> [!info]- Semantic Content
>
> **Env Vars:** kms (5), iam (4), aws (2), rds (1), evs (1)
> **Code Keywords:** delete (3), let (2), finally, (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** is a  (4)
> **CLI Commands:** aws (2)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### KMS key points
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=0)** - [Carlos] Some important things to remember regarding KMS are: KMS integrates with S3, EVS, Redshift, RDS, and other services to make it really simple to manage encryption keys that you can use in those services.
>
> **[0:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=15)** KMS keys are region specific, and they cannot be exported.
>
> **[0:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=19)** In order to delete a key, it needs to be scheduled with a wait period of no less than seven days.
>
> **[0:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=26)** If you need to, you can import your own keys and manage them through KMS.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=31)** Just select your user access keys.
>
> **[0:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=33)** KMS key rotation is a good practice, and it can be automated with the enable-key-rotation API call.
>
> **[0:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=40)** All keys have a policy associated in order to define who can manage the key, that is, delete it, change it, or disable it; and who can use the key, as in, use it to encrypt and decrypt data.
>
> **[0:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=54)** This was a very short lesson since you won't likely use this service directly but more indirectly with another AWS service.
>
> **[1:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/kms-key-points?u=76281980&t=62)** Just like IAM, this is a service that you need to be aware of, because in encryption of data in the cloud is not only a best practice, but in some cases, it's a compliance requirement.

> [!info]- Semantic Content
>
> **Env Vars:** kms (5), evs (1), rds (1), api (1), aws (1)
> **CLI Commands:** make (1), aws (1)
> **Code Keywords:** delete (2)
> **Definitions:** is a  (2)
> **Best Practices:** good practice (1), best practice (1)
> **Analogies:** just like (1)
> **Warnings:** be aware (1)
> **Speakers:** - [carlos] (1)

#### Challenge: Key Management Service
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=0)** - [Instructor] In the world of data security, encryption is a necessity.
>
> **[0:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=10)** That said, your encrypted data is only as secure as the protection that you give to your encryption keys.
>
> **[0:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=16)** In this challenge, we're going to grant temporary permissions to an IM user to be able to access our KMS encryption key.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=24)** Once we verified the operation worked, we're going to revoke those permissions.
>
> **[0:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=28)** This is all done using KMS grants.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=31)** These grants are temporary in nature.
>
> **[0:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=34)** They're easily revoked and they're key knowledge for AWS exams.
>
> **[0:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-key-management-service?u=76281980&t=38)** Go ahead and try using the AWS CLI tool to create your own KMS grants.

> [!info]- Semantic Content
>
> **Env Vars:** kms (3), aws (2), cli (1)
> **CLI Commands:** aws (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Key Management Service
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=0)** - [Instructor] So, what we're going to do is we're going to go to the key management service.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=13)** You're going to notice I have a key here, I'll click on it.
>
> **[0:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=17)** And by the way, this long, alpha numeric string, we're going to need it, that's our key ID, so just keep that in mind.
>
> **[0:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=26)** If I go down here, there's a key administrator, which is myself.
>
> **[0:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=30)** I'm allowed to delete this key if necessary and there's something else here which is key users, which you're going to notice, there's nothing here, there's nobody, which means I don't have any automated resources or people assigned to be able to encrypt data or decrypt data using this key.
>
> **[0:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=50)** Let's go to IAM real quick, I'll click on users and in here I have one called iamdemouser and I want to assign this person the ability to encrypt and decrypt data, so let me show you how to do that.
>
> **[1:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=70)** This is my list of reference commands.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=73)** The first one we're going to use is kms create-grant, a grant is a temporary permission to use a KMS encryption key.
>
> **[1:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=82)** You also provide a list of operations, in this case, Decrypt and Encrypt.
>
> **[1:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=87)** That's all I want the user to be able to do.
>
> **[1:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=91)** And of course, we have to provide the user, in this case, the entire ARN or Amazon Resource Name for the iamdemouser that we want to provide the permissions to.
>
> **[1:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=102)** And because KMS is region specific, you always have to specify which region are you referring to.
>
> **[1:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=109)** Let's go ahead and test this command.
>
> **[1:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=112)** Here in the command prompt, I'll go ahead and paste my create-grant command and as you can see it, executed right away and we get a GrantId, which I'm going to save 'cause we're probably going to need this later.
>
> **[2:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=127)** So I'll save this value.
>
> **[2:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=130)** Now, the great advantage of what we just did is that we didn't have to go to the console, we didn't have to create a permanent user attached to this key for encrypt/decrypt operations.
>
> **[2:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=140)** We just did this in an automated fashion with a single command and we can revoke this at any time without having to go to the AWS console for this.
>
> **[2:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=149)** Now, what if I wanted to know what grants I've issued for this particular key?
>
> **[2:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=155)** Then the command would be kms list-grants and you have to provide the key ID which all grants are associated with the specific key at all times, so let's try that command right now.
>
> **[2:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=166)** I'm going to copy the command from my reference document and I'll paste it here for you.
>
> **[2:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=172)** This shows the key ID, the region, and the command kms list-grants.
>
> **[2:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=178)** And we get one result which is the one that we just added, it says that it's assigned to this principal, which is the iamdemouser, has a GrantId that we're going to need here in a moment, and the operations that are allowed for this particular user which they are Encrypt and Decrypt.
>
> **[3:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=197)** Now let's say this person finished doing the work, it is in our best interest to remove this permission.
>
> **[3:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=204)** So let's take a look at that now.
>
> **[3:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=207)** In this case, the command would be kms revoke-grant and we just need to pass the key ID and the grant ID that we want to revoke.
>
> **[3:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=216)** So we're going to need the grant ID value, which we have here and I'm going to paste it into the command that I already have so that you can see it.
>
> **[3:47](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=227)** Here's the command and on execution we get no error messages, just to be safe what we're going to do is we're going to clear the screen and we're going to execute a list-grants again to make sure we don't have any grants anymore associated with this particular key.
>
> **[4:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=247)** Here's the command and as you can see for this particular key ID in this region, we don't have any grants anymore.
>
> **[4:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=255)** And that's how you assign temporary grants for encryption and decryption to users in an automated way using the AWS CLI.
>
> **[4:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-key-management-service?u=76281980&t=264)** And that's just my solution for this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (3), delete (1), this. (1), pass (1)
> **Env Vars:** kms (2), aws (2), iam (1), arn (1), cli (1)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** aws (2), make (1)
> **Tools:** command prompt (1), aws console (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. User Identities with Cognito and Web

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Cognito concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=0)** - [Instructor] AWS Cognito is the tool of choice for solving the problem of user registration, login and managing their profiles and preferences.
>
> **[0:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=10)** This is common to most application these days.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=13)** If it wasn't for a tool like Cognito, you'd be forced to write a lot of logic into your application for user credential management, two-factor authentication, social logins, and several more identity related features that Cognito provides right out of the box.
>
> **[0:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=29)** But the main reason I'm showing you Cognito here, is because it's a really good identity provider, as well as an identity broker.
>
> **[0:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=36)** As an identity provider, it does everything we have mentioned so far.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=41)** As a broker, it allows your application to take advantage of social logins, such as Amazon, Facebook, and Google, and map those logins to a user profile to be used within your application.
>
> **[0:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=54)** One very important feature as well is the ability to trade Cognito credentials for AWS temporary credentials.
>
> **[1:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=61)** This allows your Cognito users to access S3, to download or upload files and read or write from a DynamoDB table, or any other AWS service that your application may require.
>
> **[1:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=74)** There is another reason why I want to talk about Cognito, and that is the workflow taking place behind the scenes.
>
> **[1:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=80)** This login process is the same for all compatible SAML providers, such as Active Directory.
>
> **[1:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=86)** SAML, by the way stands for Security Assertion Markup Language and is an open standard for exchanging authentication and authorization data between our identity providers and our service providers, in this case AWS.
>
> **[1:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=101)** Chances are you'll find yourself more than once, while working in the field, connecting an active directory or some other SAML compatible identity provider to AWS.
>
> **[1:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=113)** And if you'll be taking AWS Certification exams, this sign in workflow will come up directly or indirectly in one or more questions.
>
> **[2:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=121)** So without further ado, let's get started.
>
> **[2:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-concepts?u=76281980&t=124)** We'll detail the login workflow and then proceed with our demo.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), saml (3)
> **CLI Commands:** aws (6), find (1)
> **Code Keywords:** require (1), let (1)
> **Definitions:** stands for (1), is an  (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=0)** - [Instructor] Because Cognito is SAML compatible, the login workflow that we'll learn about here is very similar to what you would see if you were in a corporate environment using Active Directory to log into the AWS Console.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=13)** In this diagram, you see the entire process.
>
> **[0:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=17)** It begins with the user trying to reach your application from their mobile device.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=21)** This individual may choose one of the available social login providers such as Facebook, Amazon, or Google to avoid having to type a username and password.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=31)** If this is the case, their identity will be verified against their provider of choice.
>
> **[0:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=37)** And if they pass verification, they'll be issued a token.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=41)** This token will then go back to Cognito to be validated against the chosen provider.
>
> **[0:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=46)** If the above passes, then the person is considered logged in and can access their Cognito identity, which contains all their user profile information and preferences.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=58)** Let's take a break from our diagram for a moment to explain a couple of Cognito concepts here.
>
> **[1:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=63)** User pools are Cognito's own storage mechanism for user profiles.
>
> **[1:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=68)** Cognito offers two kinds of user pools, one for identity federation and the other for users.
>
> **[1:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=74)** The easy way to remember this is if your intention is just to get temporary AWS credentials to allow authenticated user to use AWS services, then you'd use an identity pool.
>
> **[1:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=87)** If your goal is to create and manage user profiles for your own custom application, mobile, or web, then choose user pool.
>
> **[1:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=96)** Back to our diagram, you can see on the right, we have AWS STS which is AWS Token Service.
>
> **[1:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=103)** This is the service that will accept Cognito's token and optionally, at the request of the application developer, send back temporary credentials meant to be used in other AWS services.
>
> **[1:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=116)** This diagram shows a scenario that you're most likely to see as an AWS professional in practice.
>
> **[2:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=122)** In this example, the user logs in through a web portal and the credentials are validated against the company's LDAP identity store, typically Microsoft Active Directory or similar.
>
> **[2:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=134)** Once the identity is validated, the information is passed on to AWS Single Sign-On endpoint which accepts the validated token and calls the security token service.
>
> **[2:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=145)** In the end, if everything checks out, the user is redirected to the AWS Console with an AWS role that matches the one assigned to his Active Directory identity.
>
> **[2:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=156)** In a large company with dozens of users and accounts being opened and closed daily, this setup eliminates the need to maintain IAM users.
>
> **[2:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=165)** And as you saw, even though the involved parties are different in this case, the process itself is essentially the same as using Cognito as a social login provider.
>
> **[2:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/workflow?u=76281980&t=175)** Let's now do our demo which will clarify this even more.

> [!info]- Semantic Content
>
> **Env Vars:** aws (10), saml (1), sts (1), ldap (1), iam (1)
> **CLI Commands:** aws (10)
> **Code Keywords:** case, (2), let (2), pass (1)
> **Cross-References:** go back to (1), as you saw (1)
> **Tools:** aws console (2)
> **Analogies:** similar to (1), such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Cognito demonstration
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=0)** - [Instructor] We're going to start our demo here on the main Cognito screen.
>
> **[0:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=3)** we'll choose User Pools, and then click Create.
>
> **[0:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=8)** User pools, Create user pool.
>
> **[0:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=12)** We're going to type a name, let's call it linkedin-demo-pool.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=21)** We'll choose Review defaults.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=24)** We'll scroll to the bottom and click Create pool.
>
> **[0:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=29)** With this, our pool is now created.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=31)** However, not all default values will apply for our needs.
>
> **[0:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=35)** So we'll go right back and start making changes.
>
> **[0:39](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=39)** We'll click on Users and groups.
>
> **[0:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=42)** This screen is going to list our users and groups.
>
> **[0:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=45)** Groups can be used just like IM groups.
>
> **[0:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=48)** If you need to give user permissions it's best to do it in groups, as opposed to one by one.
>
> **[0:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=54)** These groups will map to existing IM roles.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=58)** Users can be managed from here as well.
>
> **[1:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=61)** We don't have any at this time, so let's move on.
>
> **[1:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=65)** We'll click on App integration.
>
> **[1:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=68)** We're now going to set up Facebook as our social identity provider.
>
> **[1:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=72)** We'll start by adding a domain.
>
> **[1:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=75)** We'll click Add domain.
>
> **[1:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=78)** We'll call it ourdemodomain.
>
> **[1:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=85)** We'll check availability.
>
> **[1:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=87)** The domain is available.
>
> **[1:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=89)** So we'll save our changes.
>
> **[1:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=91)** This domain address will become our endpoint for interaction with Cognito from outside of AWS.
>
> **[1:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=98)** Now let's go back to App integration again.
>
> **[1:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=102)** And we're going to create an App client.
>
> **[1:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=105)** A client in the world of Cognito, refers to an application, web or mobile trying to access this user pool.
>
> **[1:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=114)** We'll click Add app client.
>
> **[1:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=118)** We'll just give it a name and click Create, ourappclient, and click Create.
>
> **[2:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=128)** And we'll go right back to App integration.
>
> **[2:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=133)** Let's go down to Federation now.
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=135)** We'll click here.
>
> **[2:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=137)** Federations allows us to use identity provider to pass through Cognito and avoid the registration and login altogether.
>
> **[2:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=145)** We're going to add Facebook and then map some of the information that comes back from Facebook into our own user profiles.
>
> **[2:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=152)** We'll click Enable, we'll click on Facebook and go to the bottom.
>
> **[2:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=161)** We'll add our Facebook app ID and secret key here.
>
> **[2:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=166)** We'll get our information.
>
> **[2:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=171)** Facebook app ID and the API key.
>
> **[3:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=180)** For the scope we'll use public_profile and email.
>
> **[3:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=190)** We'll click Enable.
>
> **[3:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=192)** Right away, we'll go to Attribute Mapping.
>
> **[3:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=197)** Attribute mapping means taking the data that is coming from Facebook and saving it as fields that make sense to our application in our user profile.
>
> **[3:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=206)** Email for example, it's pretty obvious what it is, and it will map to a field with the same name in our user pool.
>
> **[3:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=213)** What Facebook calls first name we will store on our end as Given Name.
>
> **[3:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=220)** Choose email, choose the Facebook attribute and map it to Email as well.
>
> **[3:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=226)** On our side, we'll choose first_name as well and map it to Given Name.
>
> **[3:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=235)** We'll save the changes and we'll go to App client settings now.
>
> **[4:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=242)** We'll click here, and we're going to enable Facebook and Cognito as well.
>
> **[4:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=248)** For our callback URL we'll type in https.
>
> **[4:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=254)** It needs to be secure http.
>
> **[4:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=257)** It will not accept a URL for callback that is plain text http.
>
> **[4:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=263)** We'll type, [linda.com](https://linda.com), we'll fix a typo here, https.
>
> **[4:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=272)** The callback URL simply means the address that the user pool is going to send us to, once the user is authenticated.
>
> **[4:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=281)** We're going to scroll down here.
>
> **[4:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=283)** Since we're using OWA 2.0, we'll choose the Authorization code grant, and for the scope, which is the information, which we have access to from our provider, we'll pick email and profile.
>
> **[4:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=295)** We don't need their open ID, however, it is required to be able to receive the email.
>
> **[5:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=300)** So we'll click it.
>
> **[5:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=305)** We'll click this and the profile as well.
>
> **[5:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=308)** Let's save our changes.
>
> **[5:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=312)** As you can see, it's a pretty involved process.
>
> **[5:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=314)** So don't be discouraged if you don't get it working the first time around.
>
> **[5:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=319)** Now let's go to Facebook.
>
> **[5:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=320)** I need to show you the application that we're using.
>
> **[5:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=324)** Here on Facebook we've created an app and we added a single product, which is Facebook Login.
>
> **[5:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=330)** And for the purpose of our demo we just need to add this OAuth URL here.
>
> **[5:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=337)** We'll delete this previous one, and paste the one for our demo.
>
> **[5:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=344)** By the way, this domain name is the one we just created for our user pool.
>
> **[5:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=348)** This is the URL that Facebook is going to use, once the user passes Facebook's own login validations.
>
> **[5:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=356)** We'll click Save Changes, and that's it.
>
> **[6:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=360)** We have reached the point of testing.
>
> **[6:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=362)** Let's go back to our console now.
>
> **[6:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=367)** We need to collect a value from here so that we can use it for testing.
>
> **[6:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=372)** And that is the App client ID.
>
> **[6:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=376)** We'll copy this value and save it in a note.
>
> **[6:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=383)** App client ID.
>
> **[6:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=387)** Now we'll put together a URL for testing.
>
> **[6:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=390)** Let's do that now.
>
> **[6:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=392)** We'll take the URL that we have for our Cognito user pool endpoint, and we're going to add login with a client ID that we just collected.
>
> **[6:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=404)** We'll remove this placeholder and paste our app ID.
>
> **[6:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=413)** Now this string we can attach it to our URL.
>
> **[7:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=422)** Let's maximize this so you can see it.
>
> **[7:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=426)** This is a long form URL.
>
> **[7:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=428)** We're going to copy that value and go ahead and test it.
>
> **[7:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=435)** Open a browser window, paste the URL, and we get the Cognito Sign In screen.
>
> **[7:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=443)** As you can see, we have the option of using Cognito itself or to continue with Facebook.
>
> **[7:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=449)** Let's click Facebook.
>
> **[7:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=456)** And we're redirected to [linda.com](https://linda.com), which is the URL we configured earlier.
>
> **[7:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=461)** That's it guys.
>
> **[7:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=462)** We managed to sign up and log in.
>
> **[7:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=465)** Let's now go back to our console to see what happened behind the scenes.
>
> **[7:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=469)** We'll click our console, click on User Pools click on our pool, and just like before, we'll go to Users and groups.
>
> **[8:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=480)** We'll click groups first.
>
> **[8:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=482)** You'll see that we have a group that says Autogenerated group for users who sign in using Facebook, go back to users, we should have one user ID here.
>
> **[8:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=494)** We're going to click on that.
>
> **[8:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=497)** As you can see, it was able to collect the email from Facebook as well as the given name or first name.
>
> **[8:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-demonstration?u=76281980&t=504)** Next time you see a website that says sign in with Facebook, you'll likely remember this complex setup and you'll appreciate all that happens behind the scenes that much more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (1), pass (1), type, (1), delete (1)
> **Env Vars:** url (11), aws (1), api (1), owa (1)
> **UI Navigation:** click on (6), go to (5), scroll down (1)
> **Cross-References:** go back to (4)
> **Analogies:** just like (2), for example (1)
> **Prerequisites:** set up (1), required to (1), setup (1)
> **CLI Commands:** aws (1), make (1)
> **Code Identifiers:** public_profile (1), first_name (1)

#### Cognito key points
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=0)** - [Carlos] Let's now review the things that I'd like you to remember about Cognito.
>
> **[0:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=4)** Remember this workflow, particularly the part that exchanges the Cognito token for AWS credentials.
>
> **[0:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=12)** This process is the same used by other SAML-compatible corporate identity providers, such as Shibboleth and Active Directory.
>
> **[0:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=20)** So, the Security Token Service, STS, is used a lot, even if you never interact with it directly.
>
> **[0:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=28)** Other than the authentication workflow, remember that user pools are mostly used for authentication and user profiles within your app; and identity pools, as in federated identities, are for authenticated users that need to receive a temporary limited access set of credentials into AWS Services.
>
> **[0:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=49)** Multi-factor authentication is supported.
>
> **[0:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=52)** Using AWS SNS Service, you can have Cognito send a text message to further validate a user's identity prior to login.
>
> **[1:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=60)** Thanks to AWS Lambda, you can trigger events and actions based on logins and registrations, such as alerts or adding records to a database, or sending emails as needed by your application.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/cognito-key-points?u=76281980&t=73)** And last but not least, Cognito also keeps tracks of the same user logging in from different devices and can keep data in sync, making the experience that much more seamless for your users.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), saml (1), sts (1), sns (1)
> **CLI Commands:** aws (4)
> **Code Keywords:** let (1), lambda (1)
> **Analogies:** such as (2)
> **Speakers:** - [carlos] (1)

#### Challenge: Cognito automated login
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=0)** - [Instructor] We have seen how to log in to a custom web application using Cognito through the user interface.
>
> **[0:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=11)** But what happens if we're creating automated code and we want that code to log in using one of our Cognito credentials?
>
> **[0:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=17)** Lucky for us, that functionality is available, and we can certainly include it in our custom applications.
>
> **[0:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=23)** In our case, we'll use the AWS command line tool to test this feature.
>
> **[0:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=28)** We need to complete the following steps.
>
> **[0:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=30)** We're going to create a Cognito user pool, we're going to create a user in that pool, and then we're going to use the AWS CLI tool with that username and password to get successfully authenticated by Cognito.
>
> **[0:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/challenge-cognito-automated-login?u=76281980&t=42)** Go ahead and give it a try yourself.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), cli (1)
> **CLI Commands:** aws (2)
> **Code Keywords:** interface (1), case, (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Cognito automated login
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=0)** - [Instructor] Here we have a demo pool.
>
> **[0:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=8)** Let me show you.
>
> **[0:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=9)** We're using Cognito here and we created this pool, which has a user.
>
> **[0:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=14)** I put my name here.
>
> **[0:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=15)** This is the only user that we have in this company user pool.
>
> **[0:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=19)** Now, we want to use this pool to authenticate automatically into our application.
>
> **[0:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=26)** So the goal of this challenge is to create an automated command that we can send from the CLI and get a session ID back that we can use to interact with the server in exchange for valid credentials, like username and password.
>
> **[0:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=40)** So the first thing we've got to do here is to create an app client.
>
> **[0:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=44)** So I'll click on App clients.
>
> **[0:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=46)** An app client is like an interface into your user pool.
>
> **[0:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=50)** In this case, we're going to use this app client to allow people to use usernames and passwords to log in to our application.
>
> **[0:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=57)** If you don't have this part done yet, you would click on Add another app client.
>
> **[1:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=63)** You can put a name here.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=64)** Any name is fine.
>
> **[1:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=65)** Just make sure you uncheck the client secret and you check where it says enable username and password based authentication.
>
> **[1:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=76)** I'm not going to do it here because I already have one that I can show you.
>
> **[1:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=80)** And all we need to take from this is the app client ID, which you're going to need for the authentication process.
>
> **[1:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=87)** Something else you're going to need is the region.
>
> **[1:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=89)** In this case, we're working in Oregon, which is us-west-2.
>
> **[1:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=93)** So I'll need that value.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=95)** And of course, we're going to need the username and password that we created.
>
> **[1:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=100)** Let me show you what that command looks like now.
>
> **[1:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=103)** So if you wanted to authenticate with the command line, here's the command.
>
> **[1:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=108)** It would be using AWS CLI CLI tool and the command would be cognito-idp, which is Cognito Identity Provider.
>
> **[1:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=117)** And we'll issue a initiate-auth command, which is initiate authentication.
>
> **[2:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=123)** And we're going to use the flow that specifies username and password and that's why we checked that box when creating the app client.
>
> **[2:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=130)** We also need to specify our username and our password.
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=135)** And the client-id.
>
> **[2:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=137)** And of course, remember, we're using something that is region-specific.
>
> **[2:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=140)** So we need to specify us-west-2.
>
> **[2:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=144)** So let's go ahead and test this command in the command prompt so I can show you the output.
>
> **[2:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=150)** Here in the command line, I'm going to paste the value of our command.
>
> **[2:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=157)** Here's our command.
>
> **[2:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=158)** I'll hit Enter.
>
> **[2:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=161)** And the command works and we get a session ID.
>
> **[2:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=165)** Any following commands that you send after this one will need to include the session ID so that the system knows that you're already authenticated.
>
> **[2:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=174)** We also get a request for a NEW_PASSWORD_REQUIRED.
>
> **[2:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=178)** This is expected because this is first time we're logging in with this account.
>
> **[3:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=182)** So it's going to require that we change our password for future logins.
>
> **[3:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/solution-cognito-automated-login?u=76281980&t=186)** And that's my solution to the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), interface (1), require (1)
> **Env Vars:** cli (3), aws (1), new_password_required (1)
> **Tools:** command line (2), command prompt (1)
> **CLI Commands:** make (1), aws (1)
> **UI Navigation:** click on (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Certificate Manager

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating and managing certificates
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=0)** - [Instructor] Several decades ago, encrypting data at rest was considered enough for data protection.
>
> **[0:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=5)** As long as attackers didn't have access to the encryption key, the data was deemed to be safe.
>
> **[0:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=9)** In a connected world on the other hand, your data needs to be guarded constantly.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=13)** This means that when using public networks like the internet, your data needs to be encrypted while in transit.
>
> **[0:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=19)** We can do this using TLS certificates.
>
> **[0:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=23)** Here in the AWS Console, I'll type certificate.
>
> **[0:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=27)** And it should be the very first one that shows up.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=31)** I already have one here, but let me show you how to request one.
>
> **[0:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=35)** Click on request.
>
> **[0:37](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=37)** Request public certificate, then next, and now you would type [yourdomain.com](https://yourdomain.com), or you can type asterisk, dot, [yourdomain.com](https://yourdomain.com) which gives you more flexibility.
>
> **[0:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=53)** This is known as a wildcard certificate.
>
> **[0:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=56)** Now, of course, before you get your certificate, you need to prove that you actually own [yourdomain.com](https://yourdomain.com), in this case.
>
> **[1:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=63)** And you can do this with DNS validation.
>
> **[1:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=65)** I recommend this approach over email validation, and that's it, that's just a two step process.
>
> **[1:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=72)** You would just click request and validate using DNS.
>
> **[1:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=76)** I'm going to cancel and go to mine and show you what that looks like.
>
> **[1:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=81)** What they'll do is they'll give you these two CNAME entries that you can put in your DNS provider.
>
> **[1:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=88)** In my case it's Route 53, but it could be Google Domains, GoDaddy, and many others.
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=94)** So if you put these two entries or rather these two values as a CNAME entry in your Route 53, that should be enough to prove that you actually own this domain.
>
> **[1:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=105)** Let's go Route 53.
>
> **[1:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=114)** I have a couple of hosted zones here.
>
> **[2:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=120)** Let's choose the one for our example and click on view details.
>
> **[2:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=126)** As you can see, I have those CNAME entries here and this is just a proof that I actually own this domain.
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=135)** Again, this is Route 53, but you could be using GoDaddy or Google Domains or any other DNS name provider that you prefer.
>
> **[2:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=143)** And all you would have to do is the same process.
>
> **[2:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=145)** Just include the CNAME entries provided by Amazon as a proof that you actually own this domain.
>
> **[2:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=155)** Let's go back to the Certificate Manager.
>
> **[2:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=161)** Now, the question is, once I have a certificate, what can I do with it?
>
> **[2:47](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=167)** There's an option down here that says integrated services.
>
> **[2:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=170)** Let's click on that and you can use it for Load Balancing.
>
> **[2:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=175)** You can use it for CloudFront.
>
> **[2:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=177)** You can use it for Amazon Cognito or Beanstalk.
>
> **[3:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=180)** As you can see, the list keeps growing every year of services that support certificates.
>
> **[3:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=187)** And now the big question is, how much is this going to cost you?
>
> **[3:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=190)** Well, I have another browser tab here for that.
>
> **[3:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=193)** And it says here that public TLS certificates are free.
>
> **[3:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=198)** Now, of course, those services that I just mentioned, of course, they're going to cost you money, but the certificate itself is not going to add any additional cost.
>
> **[3:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=206)** You get this great additional layer of security without any added cost and that's good to know for data protection.
>
> **[3:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=216)** Let's go back to the Certificate Manager.
>
> **[3:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=221)** Now, as you can see here, I have it only for the top level domain.
>
> **[3:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=225)** So I cannot use it say for prod.[cjrivas.com](https://cjrivas.com).
>
> **[3:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=230)** I only have it for the top label domain.
>
> **[3:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=232)** In this case, that's perfect for me.
>
> **[3:54](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=234)** That's all I need this certificate for.
>
> **[3:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/creating-and-managing-certificates?u=76281980&t=237)** And, of course, now that I've shown you how to create them, we're going to talk about implementation up next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (3), case. (1), case, (1), for. (1)
> **Env Vars:** dns (4), cname (4), tls (2), aws (1)
> **URLs:** [yourdomain.com](https://yourdomain.com) (3), [cjrivas.com](https://cjrivas.com) (1)
> **UI Navigation:** click on (3), go to (1)
> **Cross-References:** go back to (2)
> **Definitions:** means that (1), known as (1)
> **CLI Commands:** aws (1)
> **Tools:** aws console (1)

#### Using certificates with AWS Resources
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=0)** - [Instructor] All right, it's time for us to get hands on with security certificates.
>
> **[0:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=4)** Let me show you the problem first, I have this Ubuntu EC2 instance running Apache web server.
>
> **[0:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=10)** You can see the public IP here, and it says not secure.
>
> **[0:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=15)** It says your connection to this site isn't secure.
>
> **[0:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=18)** This is okay for our own testing but if you have a customer facing website people are not going to feel comfortable about typing personally identifiable information in your website if they see this message.
>
> **[0:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=32)** So how do we fix it?
>
> **[0:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=35)** Let's go to EC2, go to instances.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=41)** We have our web server running here, this is the EC2 instance running our application.
>
> **[0:47](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=47)** So the first thing I did was scroll down to target groups and I created a target group that has our instance.
>
> **[0:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=56)** You can see it right here and it's listening on port 80.
>
> **[1:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=61)** Once we have this target group then we can create a load balancer that is associated with this target group.
>
> **[1:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=67)** Let's take a look at that.
>
> **[1:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=70)** Here's my load balancer, it has an ugly name assigned by AWS, of course you can't really secure that so I'm going to show you how to turn this into a friendly and secure name but first let's talk about what's happening here.
>
> **[1:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=86)** This is a load balancer, and it has a listener.
>
> **[1:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=89)** The listeners you can see is a listening on port 443, that's the port for HTTPS, HTTP secure, and of course it needs a certificate for that to occur.
>
> **[1:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=100)** I'm going to click here where it says view and edit certificates and as you can see it's using this certificate that we assigned.
>
> **[1:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=109)** It's important that the certificate be a wildcard, so in this case I don't want to point it to my top level domain, that would be [cjrivas.com](https://cjrivas.com), I want to create a sub domain and that's why I specified a wildcard *.[cjrivas.com](https://cjrivas.com).
>
> **[2:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=125)** So the question is, how do we turn that ugly load balancer name into a secure domain name that we can use?
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=135)** For that we have route 53, before we go route 53 I'm going to click here so that we make a note of the name.
>
> **[2:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=142)** In fact, they give you the option right here so that you can copy this name, so I don't need it right now but I'll copy just for illustration purposes.
>
> **[2:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=152)** And now let's go to route 53, I'll find my hosted zone
>
> **[2:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=161)** and I should already have an entry for the load balancer, I'll find it and then we can discuss it.
>
> **[2:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=170)** Click on edit, just to show you, I put in the name, linkedin.[cjrivas.com](https://cjrivas.com) and it's a CNAME because the load balancer has an a record and it would be this one right here and this is the one that we just copied from the clip bar.
>
> **[3:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=187)** Everything else stays the same, TTL, simple routing, we don't need to change anything.
>
> **[3:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=191)** We just need to be able to create this name so that we can actually listen on HTTPS, why?
>
> **[3:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=197)** Because the browser is going to go to the certificate authority in this case, Amazon, and it's going to validate that this domain actually belongs to us, which we already did with the DNS validation so it should pass validation and give us this name that we see here, linkedin.[cjrivas.com](https://cjrivas.com) as a valid, secure name for encryption in transit.
>
> **[3:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=220)** I'm going to cancel these changes 'cause this is already done.
>
> **[3:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=225)** I'll go back to the other tab here and as you can see, I'll refresh this so that you can see it.
>
> **[3:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=232)** It's showing linkedin.[cjrivas.com](https://cjrivas.com) and it's now showing HTTPS and we get the padlock that we were looking for, it says connection is secure.
>
> **[4:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=242)** And with this process we have completely and successfully set up security certificates for our EC2.
>
> **[4:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-certificates-with-aws-resources?u=76281980&t=248)** This is so much better for your customers, especially when they're typing sensitive information into your website.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (4), https (3), aws (1), http (1), cname (1)
> **Code Keywords:** let (5), public (1), case, (1), pass (1), for, (1)
> **CLI Commands:** find (2), apache (1), aws (1), make (1)
> **URLs:** [cjrivas.com](https://cjrivas.com) (5)
> **UI Navigation:** go to (3), scroll down (1), click on (1)
> **Ports:** port 80 (1), port 443 (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)

#### AWS Certificates Manager and EC2 instances
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=0)** - [Instructor] So we know we can create SSL TLS certificates in Certificate Manager and use it with certain AWS services.
>
> **[0:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=7)** The big question now is can I export a certificate that I created in certificate manager so I can use it in my own, say Apache Web Server for my WordPress blog for example.
>
> **[0:18](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=18)** The quick answer is unfortunately no.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=21)** And I'm showing you an AWS support question here that was posted and the answer was that no you can't do that because that would mean that ACM would have to expose its private key and that's considered a security risk, so they will not let you export ACM certificates for use on your EC2 instances.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=41)** However, there is a workaround published by Amazon right here in the official documentation, and it shows how to configure certificates on Amazon Linux 2, for example.
>
> **[0:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=51)** This is beyond the scope of this course but if we scroll down here, I can show you something.
>
> **[0:57](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=57)** It says, number 2, obtain a CA-signed certificate.
>
> **[1:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=61)** Let's take a look at that.
>
> **[1:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=65)** The problem with this is you have to get it to a third party.
>
> **[1:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=68)** The one that they recommend is called Let's Encrypt.
>
> **[1:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=71)** Let me show you this website.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=73)** Let's Encrypt, it's a nonprofit CA or certificate authority where you can come here and get your free TLS certificate.
>
> **[1:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=81)** Once you have this certificate they'll be your certificate authority and you can install this, let's say on your Apache Web Server to run your own PHP website, which you can use say for a WordPress blog, for example.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=95)** And this way you don't need a load balancer or a cloud front or any of those services that will bring additional cost to running your website.
>
> **[1:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=103)** We're going to end this conversation on SSL certificates with a reference to the resources that I just mentioned.
>
> **[1:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=109)** Number 1 being the support question that mentions what I just said about AWS certificates, And number 2, the workaround on how to do this on Amazon Linux.
>
> **[1:59](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/aws-certificates-manager-and-ec2-instances?u=76281980&t=119)** And finally the link to [letsencrypt.org](https://letsencrypt.org), which is a place where you can go get your free SSO certificates that you can use with your own EC2 instances.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), ssl (2), tls (2), acm (2), ec2 (2)
> **Code Keywords:** let (6), private (1), this, (1)
> **CLI Commands:** aws (3), apache (2), php (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (3)
> **Prerequisites:** configure (1), install (1)
> **URLs:** [letsencrypt.org](https://letsencrypt.org) (1)
> **UI Navigation:** scroll down (1)


### 6. Parameter Store and Secrets Manager

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Parameter Store for sensitive data
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=0)** - [Instructor] It's considered good practice to avoid storing sensitive data and credentials like passwords and API keys in your code repository or config files in order to prevent those from being exposed to bad actors who can then use them to infiltrate our infrastructure and steal valuable customer data.
>
> **[0:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=19)** That said, our automated task need credentials to perform their jobs.
>
> **[0:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=23)** And to add a layer of complexity to these, these credentials will be different amongst our various environments such as development, test, and production.
>
> **[0:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=32)** Parameter store is a service that can help with this providing a secure encrypted location for all our passwords and other secrets.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=41)** Let's go to the AWS console and show you how it works.
>
> **[0:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=44)** From the main screen in the console, let's type systems manager.
>
> **[0:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=49)** Should be the first one that pops up.
>
> **[0:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=53)** And then from the sidebar here, we can go to parameter store.
>
> **[0:59](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=59)** And here we are presented with the parameter store main screen.
>
> **[1:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=63)** As you can see, I already went ahead and created two credentials.
>
> **[1:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=67)** One is called "our app development db password" and another one is "our app production db password".
>
> **[1:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=74)** You can see where I'm going by segmenting via environment.
>
> **[1:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=80)** Let's go ahead and create a new one just so I can show you.
>
> **[1:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=85)** It's a good practice to start with a slash.
>
> **[1:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=87)** In this case, I'll type "our app" to keep things organized by application, for example.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=95)** I'll go with dev-db-username.
>
> **[1:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=103)** We'll keep it standard here.
>
> **[1:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=104)** There's no need for a description.
>
> **[1:47](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=107)** And I'll select a secure string.
>
> **[1:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=109)** I want my data to be encrypted.
>
> **[1:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=111)** I don't need it to be plain texts.
>
> **[1:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=113)** You get a lot more benefit by encrypting the data at all times.
>
> **[1:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=118)** And I'll use the default KMS settings.
>
> **[2:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=122)** Let's say that the username is dbadmin and go ahead and create our parameter.
>
> **[2:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=132)** So now for development, we have a username and a password for our database and we have a password for our production environment.
>
> **[2:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=141)** Now that you know how to create secrets in parameter store, we're going to look at how to retrieve this information when needed.
>
> **[2:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=148)** One more thing to consider at this point is perhaps combining this with IM roles and policies that are limited in scope.
>
> **[2:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=155)** In other words, only allow access to parameters and secrets that are required by the application or individuals who need them.
>
> **[2:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/parameter-store-for-sensitive-data?u=76281980&t=163)** This means that developers shouldn't have access to say the production password, for example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1)
> **Definitions:** is a  (1), is called (1), in other words (1), means that (1)
> **Env Vars:** api (1), aws (1), kms (1)
> **Analogies:** for example (2), such as (1)
> **UI Navigation:** go to (2)
> **Best Practices:** good practice (2)
> **CLI Commands:** aws (1)
> **Tools:** aws console (1)

#### Using Parameter Store from EC2
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=0)** - [Carlos] We need a safe way to store and retrieve data from the Parameter Store.
>
> **[0:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=4)** Let's take a look at an example where we actually limit an EC2 server to access specific resources, in this case, development credentials, and retrieve those parameters from the Parameter Store.
>
> **[0:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=15)** Here we have a diagram showing this architecture.
>
> **[0:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=17)** Please note, this is only a guideline and best practice.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=21)** Your use case may be slightly different.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=24)** We have EC2, ECS, or Lambda, and these services are going to put in a request to Parameter Store to get credentials.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=31)** What's going to happen is that Parameter Store is going to check with IAM to make sure that you have the necessary permissions to get the credentials that you're after.
>
> **[0:39](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=39)** If that is approved, then decryption will happen using KMS, and then the data will flow back to us in the same channel.
>
> **[0:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=46)** Let's go now to the AWS console and take a look at this in a more practical point of view.
>
> **[0:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=51)** Here in the AWS console, we're looking at an IAM policy, and this is going to be associated with our EC2 instance.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=58)** As you can see, we have PutParameter, DeleteParameter, GetParameter, and so on.
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=64)** And all these commands are set to Allow, but the catch is they're only allowed to resources that have dev or development in their name.
>
> **[1:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=75)** So now let's make sure that this is actually true by going to our EC2 instance and trying out these command.
>
> **[1:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=81)** Here in our EC2 instance, we're going to try the GetParameter command to retrieve the value.
>
> **[1:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=87)** Keep in mind, we're using with-decryption, because we're not interested in the encrypted version of our data.
>
> **[1:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=93)** We want to see it as plain text so that we can use it for our application.
>
> **[1:39](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=99)** Here we have the value of dev-db-username, and it's dbadmin, just like we expected.
>
> **[1:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=105)** Let's try that again with the db password.
>
> **[1:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=108)** I'll modify this line and type password over here.
>
> **[2:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=120)** And we get password123, which is the expected value.
>
> **[2:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=124)** Now watch this.
>
> **[2:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=125)** We're going to try to get the production password.
>
> **[2:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=129)** Let's see what happens.
>
> **[2:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=133)** Has the same name, it's just prod here.
>
> **[2:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=141)** Ah, and now we get an error that says is not authorized to perform the GetParameter on this particular resource.
>
> **[2:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=150)** And with that, we have verified that we have access to the resources that we need from this service provided by the IAM role.
>
> **[2:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=158)** So should this server ever become compromised, then the attacker will not have access beyond the permissions defined in this role, in this case, development credentials.
>
> **[2:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/using-parameter-store-from-ec2?u=76281980&t=168)** This reduces the blast radius of the attack and gives you time to detect and stop any potential data leaks or exploits.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (5), iam (3), aws (2), ecs (1), kms (1)
> **Code Keywords:** let (5), case, (2), lambda (1), this. (1)
> **CLI Commands:** make (2), aws (2)
> **Tools:** aws console (2)
> **Analogies:** just like (1)
> **Best Practices:** best practice (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [carlos] (1)

#### Secrets Manager overview
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=0)** - [Instructor] AWS Secrets Manager is a tool designed to manage, audit and rotate passwords for your databases and applications.
>
> **[0:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=8)** It's very similar to Parameter Store, but in this case, this tool is dedicated to handling credentials.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=13)** One of the main reasons to use Secrets Manager, other than being specifically designed to manage secrets, is the ability to automatically rotate credentials, i.e. change passwords by itself.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=24)** This feature gives you the peace of mind that your passwords don't go stale.
>
> **[0:28](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=28)** They will be changed at a frequency that you define.
>
> **[0:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=31)** So if a person that doesn't need access still does, you can be sure that they'll be locked out on the very next automatic password change.
>
> **[0:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=40)** Some other important features include the ability to audit access to your secrets using CloudTrail, an encrypted backend using KMS, type integration with RDS, meaning that you can change database passwords automatically and finally rotation for your own credentials that you can use in your own custom applications.
>
> **[1:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=60)** So should you use Parameter Store or Secrets Manager?
>
> **[1:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=64)** As you can see in this comparison table, they're mostly similar except for the automatic password rotation.
>
> **[1:10](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=70)** But one key factor to consider is cost.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/secrets-manager-overview?u=76281980&t=73)** Meaning that if you have hundreds of credentials to manage across multiple environments, then probably Parameter Store is the best bet for you given that they are both very secure data stores.

> [!info]- Semantic Content
>
> **Env Vars:** aws (1), kms (1), rds (1)
> **CLI Commands:** aws (1)
> **Code Keywords:** case, (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 7. Security Alerts in AWS

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Root login alerts
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=0)** - [Instructor] Login alerts are essential for a quick response to a security breach incident.
>
> **[0:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=5)** They're even more critical when talking about elevated login credentials that have the ability to turn off audit logs, change user passwords, and block out everybody else from the environment.
>
> **[0:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=16)** This lesson is inspired by this AWS premium support question.
>
> **[0:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=20)** And if you look at the answer, it's really just a CloudFormation script, which I already executed and we're going to take a look at here in a second.
>
> **[0:29](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=29)** Before we move away from this post however, I want you to take a look at this line that says, "Before you begin, make sure that your AWS CloudTrail Management read/write events are set to All or to Write-only for EventBridge events to be able to trigger the log-in event notification."
>
> **[0:46](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=46)** So even if you do this correctly, CloudTrail is not set up properly, you will not get the notification.
>
> **[0:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=53)** So, keep that in mind.
>
> **[0:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=56)** Now let's go to CloudFormation here and I have the root-login-to email stack already executed.
>
> **[1:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=63)** And as you can see, it's just three resources: SNS topic policy, the topic itself, and the event.
>
> **[1:11](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=71)** Let's click on the event rule.
>
> **[1:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=75)** Essentially, what it's doing is checking CloudTrail events and is looking for one that says "user identity type root."
>
> **[1:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=83)** This will trigger this event and it will send something to the target, and the target in this case is the SNS topic.
>
> **[1:31](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=91)** Let's click on that.
>
> **[1:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=95)** And as you can see, the topic is nothing more than the usual place where you can subscribe your email address and you'll get notified when the message comes in here.
>
> **[1:44](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=104)** If you needed to test this right away without having to go through a root login, you can just click on publish message and you can type "Hello, world" or something like that right here.
>
> **[1:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=115)** And there's a button down here that says "Publish message" to the topic and you should get an email right away saying whatever you typed in here.
>
> **[2:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=125)** But of course, be sure to enable CloudTrail properly so that EventBridge will send you the necessary information when the event occurs.
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=135)** Hopefully, you'll never get an unexpected alert that somebody's using your root credentials to sign into your AWS environment.
>
> **[2:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/root-login-alerts?u=76281980&t=142)** But if you do, it's best to have a plan in place to be able to quickly take certain shutdown or log down actions while also notifying Amazon support team for assistance.

> [!info]- Semantic Content
>
> **Env Vars:** aws (3), sns (2)
> **CLI Commands:** aws (3), make (1)
> **UI Navigation:** click on (3), go to (1)
> **Code Keywords:** let (3)
> **Prerequisites:** before you begin (1), set up (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Detecting unauthorized instance stops
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=0)** - [Instructor] If you have exposed servers, such as public-facing web servers, it's always a good idea to use a hardened version of your operating system.
>
> **[0:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=8)** This is simply a version that has been patched and reviewed by a security expert, eliminating or blocking the most common exploits that the OS may have when using its default settings.
>
> **[0:21](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=21)** To ensure compliance, it is good to have a constant check on your EC2 fleet to help find any non-compliant resources and take action.
>
> **[0:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=30)** Let me show you how to do that.
>
> **[0:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=32)** We'll go to AWS Config.
>
> **[0:35](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=35)** I have AWS Config already enabled here, but I don't have any rules.
>
> **[0:39](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=39)** Let me show you.
>
> **[0:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=40)** I'll click on Add rule, and it's going to be a managed rule, and we're going to be looking for AMI and select the first one that says approved-amis-by-id.
>
> **[0:58](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=58)** We're going to click Next.
>
> **[1:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=61)** We're going to take the default here for the name and select Resources, and the resources are going to be of type EC2 instance.
>
> **[1:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=69)** So this is fine as it is.
>
> **[1:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=72)** Now, here's the value.
>
> **[1:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=73)** Let's say that you have a certain AMI ID.
>
> **[1:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=77)** We'll type AMI, XX1.
>
> **[1:20](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=80)** If you have another one, you can type it in with a coma, ami-xxx2, and this one and two, let's say they're a hardened version of Amazon Linux or CentOS or Ubuntu or whatever other operating system you prefer.
>
> **[1:38](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=98)** Now, what we do is click Next, and we end up in the review screen.
>
> **[1:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=102)** Make sure everything checks out, and then we can click on ad Add rule.
>
> **[1:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=109)** This should be enough.
>
> **[1:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=110)** If we go to the dashboard, we're going to end up with a list of non-compliant and also compliant resources, but there's one more step that you can take.
>
> **[2:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=120)** Let's go back in here and select the rule.
>
> **[2:03](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=123)** We're going to click Action and click on Manage remediation.
>
> **[2:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=128)** We're going to select Automatic, and there is an option that we can do.
>
> **[2:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=132)** We're going to type EC2 here.
>
> **[2:15](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=135)** We don't want to destroy the instance, simply because it's not approved, but what we can do is stop the instance.
>
> **[2:23](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=143)** What this is going to create is a situation where the employee or person that launched this instance is going to come asking, hey, what happened?
>
> **[2:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=150)** You know, I've tried to launch an instance, and it's forcing stop, then you're going to explain, hey, it needs to be one of these particular AMIs, and then the system will let you launch your instance, simple as that.
>
> **[2:43](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=163)** We're not going to enable it now, but I want you to be aware that this option exists.
>
> **[2:49](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=169)** Let's go by the dashboard.
>
> **[2:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=172)** As you can see the rule already found two non-compliant resources, and that's okay because we use dummy names for the AMI IDs.
>
> **[3:01](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=181)** So this is actually expected.
>
> **[3:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/detecting-unauthorized-instance-stops?u=76281980&t=182)** So as you can see, this works flawlessly, and it works right away in notifying you whether somebody's using the approved AMI IDs in your system.

> [!info]- Semantic Content
>
> **Env Vars:** ami (5), ec2 (3), aws (2), xx1 (1)
> **Code Keywords:** let (7), public (1)
> **UI Navigation:** click on (3), go to (2), select the (2)
> **CLI Commands:** aws (2), find (1), make (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Checking for unused credentials
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=0)** - [Instructor] One nice feature about AWS Config is the ability to track down unused credentials.
>
> **[0:06](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=6)** If you work in a corporate environment, you'll have employees, contractors and vendors coming and going all the time.
>
> **[0:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=13)** And sometimes credentials will be left behind.
>
> **[0:16](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=16)** This opens a potential weakness in your network security if those credentials are misused.
>
> **[0:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=22)** Lucky for us, AWS Config already has a rule for this.
>
> **[0:26](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=26)** Let me show you.
>
> **[0:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=27)** From the console, I'll type config.
>
> **[0:32](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=32)** And right now I'm in the Ohio region, simply because I don't have AWS Config enabled here.
>
> **[0:39](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=39)** And I want to show you the simple process to enable it.
>
> **[0:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=42)** Once you land on this page, all you need to do is click on the 1-click setup option, and then just click Confirm.
>
> **[0:53](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=53)** You really don't need to set up rules.
>
> **[0:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=55)** In fact, that's what we're going to be doing to set up one rule for AWS Config.
>
> **[1:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=60)** For right now, I'll just cancel and switch over to us-west-2, where I already have AWS Config enabled,
>
> **[1:12](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=72)** and I'll click view dashboard here, and then select Rules.
>
> **[1:19](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=79)** We're going to add a new rule, and it's going to be an AWS managed rule.
>
> **[1:25](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=85)** I'll type credentials.
>
> **[1:30](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=90)** And you'll see there's one called iam-use-unused-credentials-check.
>
> **[1:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=96)** Let's go ahead and select that one and click Next.
>
> **[1:42](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=102)** We have to specify a name, but the default is just fine.
>
> **[1:47](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=107)** And, of course, the frequency, it's okay to check every 24 hours.
>
> **[1:52](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=112)** The same for the default, which is 90.
>
> **[1:56](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=116)** It's usually a good practice to change your passwords every 90 days, so if you have credentials that haven't been touched in 90 days, there's a good chance you can just go ahead and delete them.
>
> **[2:08](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=128)** So we're going to accept the default here, click Next.
>
> **[2:13](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=133)** And then here we are in the review and create screen where we just scroll down and add the rule.
>
> **[2:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=142)** We're going to select the rule and click on Re-evaluate.
>
> **[2:27](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=147)** This will execute the rule right now.
>
> **[2:33](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=153)** We can now return to the Dashboard.
>
> **[2:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=156)** If we had credentials with issues, in this case 90 days or more without any activity, you will see it here as non-compliant resources.
>
> **[2:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=168)** Now there's one more thing.
>
> **[2:50](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=170)** Let's go back to Rules and select this rule.
>
> **[2:55](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=175)** Here under actions, we're going to click on manage remediation and select automatic.
>
> **[3:04](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=184)** There is an option that you can find here by typing credentials, and it's called the revoke unused credential option.
>
> **[3:14](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=194)** What this means is you'll have this option where AWS Config will take care of the credentials for you.
>
> **[3:22](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=202)** So be careful with this option because if it finds credentials that are unused for 90 days, it will go ahead and delete those, which is a good practice anyways, but you might want to be careful if you have credentials, say, that are for software activity or automated tasks that may have not run for a long period of time.
>
> **[3:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=221)** Keep that in mind.
>
> **[3:45](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/checking-for-unused-credentials?u=76281980&t=225)** And with this rule, this is all you need to set up an automatic check for unused credentials in your environment.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (7), find (1)
> **Code Keywords:** let (3), delete (2), this. (1), switch (1), default, (1)
> **Env Vars:** aws (7)
> **Prerequisites:** set up (3), setup (1)
> **UI Navigation:** scroll down (1), select the (1), click on (1)
> **Definitions:** is an  (1), is a  (1)
> **Best Practices:** good practice (2)
> **Warnings:** be careful (2)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Get familiar with AWS tools
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=0)** - [Instructor] In this course, we have covered a security aspect of some of the tools that you'll likely use as an AWS Cloud Application Developer.
>
> **[0:09](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=9)** If you're planning on taking the AWS Certified Developer exam, in addition to security, you still need to be familiar with the everyday use of the tools we just saw, but now you're better prepared and a lot less likely to forget a recommended best practice.
>
> **[0:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=24)** Remember, in the cloud, you as a developer, are just as responsible for security as your operational colleagues, simply because everything is code, including the infrastructure and its security.
>
> **[0:36](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=36)** For next steps, I'd like you to become familiar with the following tools.
>
> **[0:41](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=41)** AWS Config, which is a tool to apply governance and enforce rules on your AWS account.
>
> **[0:48](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=48)** For example, if your company requires that all resources be tagged with an environment tag to be able to identify them as production or development, you can have AWS Config monitor all resources and look for this tag, and if not found, take a specific action or send an alert.
>
> **[1:07](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=67)** Trusted Advisor is an automated service you can run inside your AWS account to look for ways to optimize usage in several areas, such as cost and security.
>
> **[1:17](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=77)** It will scan your resources and issue a report with a recommendation on what to change to improve.
>
> **[1:24](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=84)** Finally, AWS CloudTrail is a service used to keep track of all actions and AWS API calls affecting your account.
>
> **[1:34](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=94)** This can be used to track changes, authorize or otherwise, and for compliance purposes.
>
> **[1:40](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=100)** You can also generate alerts based on CloudTrail events, so if something out of the ordinary happens within your account, CloudTrail will track it and inform you.
>
> **[1:51](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=111)** These services, while not as specific to security, are certainly related and will likely come up in exams, as well as in your future projects.
>
> **[1:59](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=119)** So I wanted to be sure you're aware of those.
>
> **[2:02](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=122)** I hope this cloud security course has been helpful to you.
>
> **[2:05](https://www.linkedin.com/learning/aws-security-best-practices-for-developers-19179797/get-familiar-with-aws-tools?u=76281980&t=125)** My name is Carlos and I will see you in the next one.

> [!info]- Semantic Content
>
> **Env Vars:** aws (8), api (1)
> **CLI Commands:** aws (8)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), such as (1)
> **Best Practices:** recommended (1), best practice (1)
> **Code Keywords:** finally, (1)
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