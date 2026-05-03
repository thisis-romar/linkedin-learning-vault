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
created: 2026-05-03
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
> **[0:01](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/aws-user-security-with-iam-15113020?u=76281980&t=1)** - Managing who or what has access to your AWS account can be overwhelming. If you only use one login, that's not much control, and no way to tell who did what. AWS's Identity and Access Management sometimes called I-A-M or IAM, allows you to create and manage who can log in and how. Some users may need to log into the website and manage services. Other users may need access keys to use other tools or develop apps. And in other cases a service, like a Lambda, may need access to another service like a DynamoDB. IAM allows you to manage all of this in one place. You define user accounts for users and roles for services. In both of those cases, you add policies that specify what they have access to, and the [[Representational State Transfer (REST)|rest]] is off limits. I'm Bear Cahill, Head Binary Sequencer at Brainwash Inc. And in this course, we'll look at how to manage the permissions for you users and services using IAM. Are you ready? Because I am.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** iam (3), aws (2)
> **CLI Commands:** aws (2)
> **Speakers:** - managing (1)

#### [What you should know](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/what-you-should-know-15109604?u=76281980&t=0)** - [Instructor] To get the most out of this course, I recommend you be familiar to some degree with [[Amazon Web Services (AWS)|Amazon Web Services]]. You don't have to be a master at it by any means, but just being familiar with the types of services and features it provides is to help you know how you're going to apply the things you learn about IAM. Also, I recommend you have an AWS account. You can sign up for one at aws.[amazon.com](https://amazon.com). The account's free, but you do have to provide payment information in case you go over any of the limits. The limits are pretty high, so normally you don't end up having to pay anything. Also, I recommend you be familiar with server concepts of things like user accounts, roles, and permissions. I'm sure you're going to do great. We're going to take our time, and it's going to be very clear. Let's get going!

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/iam-overview-15108756?u=76281980&t=0)** - [Instructor] IAM stands for Identity and Access Management. So as the name implies, it allows you to manage the identity of users and grant or deny them access. These users can then log in and have access to and only to what they're allowed to access. Think of it like a key card for a hotel. As a guest, you check in. That's you proving your identity. Then you get the key card. It gives you access to your room. You might also have permission to use the gym or the pool but you do not have access to the manager's [[Microsoft Office|office]]. Trust me, don't even try it. They don't appreciate that. The manager has a different identity and their key car does give them access into the office and whatever other places they have access to. But IAM isn't just for users who log in. AWS services and features can also have access. A lambda function for example might have access to a database or log files or other AWS services. For this they don't have a user account, they have a role. And the role provides access through its permissions. Both users and roles are given access with policies. A role can have various policies to whatever it needs. These policies are granted through IAM. And this course will look at the concepts that allow our user or service to say I am so and so and get access to what they need.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/root-account-15112029?u=76281980&t=0)** - [Instructor] When you create your AWS account, you've already started your IAM journey. Your sign-in identity has full access to all of the AWS services and features. It's what's called the root account. As far as your account goes, it's all powerful. With this root account, you can create other accounts. Of course, those accounts have whatever access you give them. More about that later. You could do that under the user section over here in IAM. There are some actions that do require the root account like configuring the root account, changing billing details and closing your account. But for most things, it's recommended you not use your root account. Instead, you should create other accounts with specific permissions that they require. And as we'll see later, you can create groups to manage the permissions in bulk. For obvious reasons, you need to strongly protect your root user account credentials. Also it's recommended to use multifactor authentication. You can set that up under my security credentials under your account tab on the top right. This will take you to IAM, you can continue to the security credentials and under the multifactor authentication, you can activate it with the activate MFA button. So consider yourself warned. With power comes responsibility and you really need to protect this account 'cause it can do a lot of damage in the wrong hands.

> [!info]- Semantic Content
>
> **Env Vars:** iam (3), aws (2), mfa (1)
> **CLI Commands:** aws (2)
> **Best Practices:** recommended (2)
> **Speakers:** - [instructor] (1)

#### [User accounts](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=0)** - [Instructor] So now we're going to look at some of the aspects of user accounts. AWS user accounts are created in IAM, and the IAM dashboard allows the root account to create other accounts. The dashboard also facilitates setting up permissions through the use of policies. We'll get to more of that later, but right now we want to focus on the different types of user accounts. So I'm going to click on Users here, and I'm going to click add user. Now we can give the user a name, like AWS test or whatever we want, but notice that there's two different access types. The first type is called programmatic access. This enables an access key and a secret key for external tools to be able to gain access into the features and functionality they need in AWS. So this is when a user's not going to log in through the console. They're going to log in using a process like AWS API, the Command Line Interface, or an SDK. So you might want to put your access key and secret access key into your website or into your mobile app or into your other tool to be able to get access into all the services and features of AWS without having to go through a login process. Now, this can be a little bit dangerous because obviously this access key and secret key gains access into your AWS account. And if they're stored insecurely somehow or otherwise obtained by some nefarious figures that they could do damage to your account, potentially either stealing your data
>
> **[1:32](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/user-accounts-15107842?u=76281980&t=92)** or driving up your billing or who knows what. But it is possible to use these types of tools. I would recommend you do it in a limited fashion. You don't store these very often. Maybe just use them with the tools and for your actual apps and websites that you develop, you use Cognito to allow users to log in. And that's a different concept as far as user accounts. That's your app user accounts, not your AWS user accounts. So you can look up courses on Cognito and user authorization for that. The other type of login is the AWS Management Console Access. This is for users who are going to use the console. They log in just like we did with our root account. And then they have access to whatever services and features they need, to manage that way, through the website. You can have a user with both types. That's no problem at all for the Management Console. There's some other features that you need to add. And, again, you can do both. I wouldn't recommend doing that too often. You probably want to keep things separate, even if it means you have a lot of different options out there. It helps with auditing and tracking who's doing what. So what we're going to do next in the next video is we're going to look at permissions and create our first user account.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=0)** - [Instructor] So now we want to continue on with the process of creating our first user account in our AWS account. Of course, we're in IAM and I clicked ad user and we're going to create an account for administering the account without using this root account every time. So I'm going to add the username admin user, and then I'm going to enable the console access. I'm going to check the AWS Management Console access. I'm going to create a custom password and this is just for our testing. So I'm just going to create a simple password for this and not require that it be reset. So now that I have all these things set, I can click next and go to permissions. Now under here, there's three different options we have for setting the permissions. We can add the user to a group. We don't have any groups yet. We'll look at that later, but if we did we could select a group to add this user to. We can copy permissions from an existing user. If this is truly your first account, then you wouldn't have any users to copy from, so this wouldn't even really be an option. Or you can attach existing policies directly, and this is what we're going to select here. And then you get up all these policies. Notice that there's a 472 results. Now these are predefined policies that allow you to easily add the most common, the most 472 most common policies, that AWS provides. You can make up your own policies, which we'll look at later,
>
> **[1:31](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=91)** but for now we're going to use some of these default ones. Now, if we knew we wanted this user to have access to be able to create other users, we could give them like IAM full access. Or if it was a database user, we could do something with DynamoDB and so forth. Now we want to make this an admin user, just like the name suggested. And so we want this administrator access. It happens to be the first one, so we'll check that. And notice the description starts with provides full access to AWS services. Now this isn't quite the root account level of access. It can't do some certain things, like change the billing and that type of thing. It can't close the account, but it's the next best thing, it's pretty, pretty close. And we're going to look at boundaries later, but the concept behind boundaries is a way to limit now this user's access. So this makes a little bit more sense when we get into groups as well. So we're just going to leave that blank for now. And then we're going to go to tags. If you've understand tags, you can add 'em here. This is not required. Tags is a concept that goes across AWS. It's not really specific to IAM, so we're not going to set up any tags. Next, we go to the review and we can see that we're creating a user called admin user. We specified the password. We don't have to reset the password and that our permissions are administrator access. So this user has a lot of access. So we're going to click create user. And now if we want to log in as this user, we need to have the account ID. So we can get that,
>
> **[3:04](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/create-a-user-account-15110622?u=76281980&t=184)** if we go to back to IAM. So back at IAM, we'll be able to see that this is our account ID right here, this 94694724468. So I'm going to copy that. And now I'm going to log out as this user and log back in as the other user we just created, admin user. So I need that account ID. So when I go to sign in console here. It'll give me the option to, I'm going to say, sign in as a different user. And it tells me to add the account ID, if I'm signing in as a user underneath my AWS account. Then I click next and it will give me the opportunity to enter the ID and password just as we've done before. So instead of my current one, I'm going to select admin user. And for the password, I'll type in what I typed in before, and then sign in. And now I'm signed in as that user. And I have pretty much full access because of the administration access we gave to this user account. Now we're going to go into more details about how to set up permissions in a sensible way, but it's a good idea to kind of get past using that root account as quickly as possible. So we've set up our admin user. We can use this one going forward and now we can create all of our other groups and permissions and users, as necessary using this user. And it's a little bit more safe. Now, we're not using our root account everywhere. Let's move forward in the next chapter, diving more into users and their permissions through policies.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=0)** - [Narrator] Now that we're logged in as our admin user that's not the root account, one of our first actions might be to set some rules about the passwords that users can set. We can do this as this admin user, and we do this as well in the IAM dashboard. So I'm going to click on IAM for my management console, and I'm going to go to the account settings over on the left. Once I'm here, I can see that I can set the password policy. The default is that it has a minimum length of six characters and allows users to change their own password. There's really not much else to it. So we could specify that they have to have at least one upper case, one lowercase, one number and so forth. And then we can apply this password policy. When we apply this password policy, it's not going to force any current users to reset their password. The next time they're required to reset their password, they would have to follow these policies. So we might want to specify that the passwords expire, in say, 90 days. Now this setting is an exception to that rule. When we set an expiration period, any passwords that are older than this amount of time will automatically expire. And the user, the next time they try to log in, will have to set a new password. So not all of these are immediately applied, but the expiration period is. Now we can apply this password policy. Down below here you can see, we have the security token service. This specifies the [[Tokens]] and the way that they are handled across regions. It is recommended
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/password-settings-15111296?u=76281980&t=95)** that you use regional STS endpoints to reduce latency. So this helps with performance. And if you are using regional STS endpoints that no action is required. Otherwise you need to come down here and activate and deactivate and set other settings in your global endpoint for your token service. We're going to use regional endpoint, which is what I always use in my AWS account. So we're not going to have to change anything here. But if you do want to have it be per region or only use the global endpoint, you would have to make some changes there. So be aware of what the changes are that you're allowed to do for the password policy and when they will be actually applied. Typically it's on the next expiration time but the expiration will be retroactive to the age of the password as it currently is. And next we'll look at similar concepts for access keys to the types of user account that's logging in with the access keys.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=0)** - [Instructor] Now let's look at creating a user with the other access type, the programmatic access type. So I'm going to click on Users and Add User. And in this case, it's going to be programmatic access, so it's going to generate the access key and secret access key. Now, in a lot of cases, whenever you need these for a process like Amplify's command line interface, it will guide you through this process. In fact, in that case for Amplify, it will ask you what the username you want to use is and when you type that in, it'll actually launch this screen. Specify the username you typed in and it'll specify all the permissions it needs on the next screen for you. It'll be pretty automatic, but you have to actually do it as your logged in user. So I'm going to create this user as cliuser. I already have programmatic access checked, so we'll click Permissions. Now I'm going to attach some existing policies as we did before and let's just say this user is going to be doing something with CloudWatch. Now, depending on the process you're going through, whether it's Amplify or something else, they'll either direct you on what permissions it needs or it'll set it up for you. So we're just going to have this CloudWatch actions permission as an example. Next, we'll go to tags, we're not going to set any tags, and then we'll go to review. Now at this point, we can review everything that's necessary. If we're happy with it, we create the user. And this is when the keys are generated. Once the user's created, we have the opportunity to get the access key and the secret access key. Now, this is the only time
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=93)** you can see this secret access key. From now on, once we close this, we will not be able to get this key again. So if you're going to need access to it again, you need to copy it and make a note of it somewhere. If you're only going to use it this one time, that's fine. Just use it this one time and you don't need access to it anymore, but you won't. You can also download the CSV file and that way you can have it stored locally as well and you can put it in a safe place. Because once this is closed, it's gone. We don't have access to it again. If we need to create a new one, that's fine. We can click on the user, go to the security credentials tab and create a new access key. It'll create a new one for us. And once again, we'll have access to the access key and the secret access key. But again, this one time only. Once we're away from this page, again, we won't be able to copy this anymore. So again, you might want to make note of it, or you might just want to have multiple secret access keys. So I'm going to close this and we'll notice that we have two access keys now, both with our own secret access key and both of them are active, so that's fine. You might want to have more than one. Probably don't want to have too many. In fact, I probably wouldn't even use more than one. And they also recommend you rotate the keys. So every once in a while, you should change it just in case somebody else does happen to get access to your keys, they won't be active for very long. You also notice in here, you can create the SSH public key and HTTPS [[Git]] credentials. So this is how you get your access key and your secret access key for any tools that you need to use,
>
> **[3:05](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/access-keys-15113022?u=76281980&t=185)** or if you're pasting them into your app or website for access if you don't want to make users create their own user accounts or you're just testing it and you don't want to add user authentication, whatever the case may be, this is how you get a user with the access key and secret access key. And once again, I just want to note that after you have access to these keys to copy them, you won't have access again. I apologize for the redundancy on that, but this has bitten me more than once and I want to save you that pain. Anyway, let's move on and talk about the policies for permissions of user accounts.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=0)** - [Instructor] So we've been talking about permissions using policies and we've even used them a little bit so far, so let's talk in a little bit more detail about these. So I'm going to click on my Users again, and go back to my CLIuser, and we have the Permissions here. If I expand these permissions, we can see the [[JSON]] definition, and we can see that there's a variety of actions that are allowed for this user. You can have deny here, and deny certain actions, as well. If we look at the policy summary, we can see a listing of the services, and access, and resources. Of course, right now, this is allowed on all resources. We'll also look on how to do it to specific resources. So if we want to add permissions, we've seen before how we can attach them from a group, an existing user, or directly, the only existing account we have is the root account. We could use that, but we want to see what it looks like to attach existing policies directly. Now, again, there's almost 500 of these right now, and so sometimes, they can be a little bit too broad. We may not want to give the DynamoDB full access to this user. We can look at its definition, as well, and see that there's a lot of permissions that it gives to this user, including things like on LaMDA, SNS, IAM, and so forth. We may not want to do all that, we might just want a couple of custom things for our user. So I'm going to click Cancel, and I'm going to go to this add inline policy. This will allow us to create a custom policy, only for this user. We won't be able to reuse this policy for other users. To do that, we have to go through a different process, so this is just for one user.
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=93)** So there's a few ways you can do it. You can import a managed policy, and we could copy in something like the DynamoDB full access, and then edit that by specifying what services we don't want, we could remove the IAM service, and maybe the SNS, and we can also edit the JSON directly, if we're familiar with those things. If we don't want to start with an existing policy to edit, we can start from scratch. So I'm going to cancel this, click on add inline policy again, and instead, I'm going to choose the service. So I'm going to choose DynamoDB. And then it gives me the access level, maybe we just want to allow this user to scan the database, and we have a warning now, and that is because we have to specify what resources. We can say all resources, or for each of the items, we can specify any resource, or we can specify the actual ARN, the Amazon Resource Name of this table. To do that, we have to go to the table, I have the DynamoDB table here, select the table, and at the bottom of the overview, we have the ARN. So I can just copy this, and paste it into here, and now it fills in the details for me, and I can add that. So now we have no more warnings, we can review the policy, we give it a name, I'll call it dbscan, and I can create this policy and it'll add it to the user for me. Now we have this one, and if we want to remove any, we can just click the X and detach that,
>
> **[3:07](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/policy-json-15106895?u=76281980&t=187)** and now we have this policy, again, it's only for this user. If I want to attach the same thing to another user, I have to recreate it, or I can create it specifically under Policies, and it'll have a very, very similar process of where I pick the service and so on, and then when I give it a name, it'll be available anytime I go to attach policies to either the user or role, or as we'll see later, with groups.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=0)** - [Instructor] As I mentioned in the previous video, if you want to create a policy that you can use across your various users and roles, you can go to the policies area on the left from the IAM console, and click Create Policy. From here, you can either import a managed policy to modify. You can choose a service directly from here and be able to specify the service, the actions that are allowed for this policy like scanning a table, and potentially the resources, either by specifying all of them or particular Amazon resource names. This is one place you can do this. You can also edit the [[JSON]] here. I'm going to cancel here and show you another workplace you can do this. So we saw before in our users, we can click on the user and we can add an inline policy. This will be only available for this user like our dbscan here. Or you can click Add permissions, attach existing policies, and then create a policy here. Now we're coming at it from a different angle. We're coming at it from down the path of the user. But if we create a policy here versus an inline policy, it'll be available for all users. So it's going to take us to the same visual editor. We can choose a service, and I'm going to choose DynamoDP again. I'm going to choose instead of reading, I'll choose writing. And I'm going to have it, allow you to update the table, put an item, delete an item. And then for the resources, I'll just say All resources. Now I'm going to review this policy, give it a name called dbwrite for all users.
>
> **[1:37](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=97)** And then I'll create this policy. Now, once the policy is created, it'll be available in the list. So if I do a filter for dbwrite, we can see it in there, but the dbread is not. Also, you can filter your policies for just the ones you've created. So you click on Filter policies and Customer managed. Notice, there's only one. We've only created one. And there it is. So there's our policy. We can expand it just like we did for any other policy. But notice also, there's an edit policy here. I can edit this policy, but I'm editing it for all the users that have this policy attached. So if I change this and remove the delete item, it's going to affect all the users that currently have this policy attached to their permission. So be aware that when you create a policy and attach it to a bunch of different users, editing it will affect anyone that has that policy attached to their account. So now that I've created this policy, I can add it to my user. So it opened up a new tab for me when I created this policy. I'm going to go back to the previous tab for my user, and let's see if we can search for dbwrite. It's not there. If we just do a refresh, let's see if it shows up. There it is. I can just check it. Next, review. And add the permissions. And now this user has the dbwrite. Notice, I have the link for that because I can edit it. And it still has the dbscan permission. If I click on the dbwrite,
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/modifying-policies-15111293?u=76281980&t=190)** once again, I can see everything and I can edit it from here as well. So that's how you can create a policy that you can attach to multiple users. Just be aware that if you ever change it, it's going to affect all the users that currently have it assigned to their account or their role.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=0)** - [Instructor] As I mentioned before, permission boundaries are a way to limit the user's access. Now it may seem kind of productive to give a user permission here and then take it away in the boundary. But this helps, especially with groups. So if this user is part of a group that has admin privileges all over the place but you really want this person to specifically admin one group, you can just put that in the permissions boundary. And it's kind of like treating it as an exception. So let's say that this admin user has administrator access because he is in maybe the admin group. But they're specifically an admin for a certain area, so we want to limit their access to things. So I'm logged in as the root user right now and I'm going to set the permissions boundary on this admin user. So I'm going to set the boundary and it's just like creating the permissions and the policy. I can specifically say that they are admin for DynamoDB and maybe API Gateway. And so they have access to those two areas. That's their boundary, but nothing else. So if they log in, they won't have access to any other services or features. Now, if they didn't already have permissions in their policy for something like API Gateway here, this is not going to grant them permissions for that. This is just saying, limit it to this. If they didn't have access to DynamoDB, this would not give them permissions. Or if they had certain permissions for API Gateway, let's just say, read and write or something, and then I give them this full access in the boundary,
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/permission-boundaries-15107841?u=76281980&t=96)** they still don't get any more permissions from the boundary. The permissions is only limiting, so they have to have it both in their policy and the permissions boundary. So again, it's like a logical and operation. So I'm going to set the boundary for this user here and then we'll log in as this user to make sure that they can't get access to anything else. So right now they just have the API Gateway administrator boundary. So I shouldn't be able to go into S3 bucket or DynamoDB or something. So I'll log out the root account. So I'm going to sign back in as that admin user. So I'm going to click sign in different account, put in the account ID, and then add the username of admin user and the password. Now, when I click on IAM, it will say I don't have access to this. And if I go to S3, it should gimme some similar message saying you don't have access here. There is access denied and so forth. But if I go to API Gateway, I don't have that type of message here because I do have permissions in my boundary for this. So that's a good way to be able to add users to groups and handle just the exceptions in the boundaries.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=0)** - [Instructor] Now that we've looked up setting up permissions through policies for users, you may be thinking, "Wow if I've got a lot of users, "that's a lot of work." And just think about when something changes and you have to add or remove some policies to all your users. Wouldn't it be great if there was a way to group them all together? Well, there is. And you guessed it. It's called groups. It's simply that. It's just a way of defining a group of permissions through the policies. And then you can add users to that group. So what you want to do is create a new group. Now, depending on how you want to set up your groups, you're going to name them different things. Something meaningful. So let's say for example, you want to set up groups of developers who have certain permissions, testers who may have some slightly different permissions, and then a group called admin that has various other permissions. They can overlap because users can be in a variety of groups, or you may want to set up your groups based on the naming of functionality like the database or logging. And again, maybe have something like admin that has an overarching set of permissions for creating users, but also having access to the database and the logging. It's up to you and how you want to organize your groups. We're going to set up a group called developers. So we want to give them permissions that make sense for developers. Now, in our case maybe we're developing something that uses DynamoDB for the database, but maybe also uses RDS for some database as well. Who knows? It depends on what you're trying to do with your app. I'll also add SES full access for our developers,
>
> **[1:35](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=95)** and then I'm going to click next step. So now I've got my group, and I've got the permissions. It has its name of developers, and I can create the group. And now from here, I have these group actions. So if I check my developers group, I can add users to the group. I can also delete the group, edit the group name, and remove users from the group. So if I click add users, I'll get my list of users, and I can select whatever users I want and add them to the group. I'm going to click cancel 'cause I want to show you another way you can do this, and that's through the users themselves. So if I created the group, and I wanted to add a bunch of users in bulk, this is a great way to do it all at once. But if I'm creating a new user, and I want to add them to the developer group. So let's say we have a new developer called booth admin. So I'm going click on booth admin and go to the groups tab for this account. And then I'm going to add the user to groups and here I can select multiple groups. So if booth admin is a developer and an admin or whatever other groups I have defined, I could check them all here at once. So it kind of depends on if you're going from adding a new user and you want to add a bunch of groups or you added a group and you want to add users to that. So now that I'm going to add this user to the group I have under the groups tab, the group that they are a member of as well as the permissions that are in there. Of course, if I go to groups, I can check on the group, go to its permissions, and attach or remove policies as necessary as the permissions for this group change over time. And of course it'll affect everyone
>
> **[3:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/grouping-users-15110625?u=76281980&t=189)** in the group instead of going through them one by one. So this is obviously a way that's very helpful when you're managing a lot of different users, and you have some logical way of separating them out. But even if you don't, even if all your users have the same permission, I would still recommend using a group to manage all their permissions in one place.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=0)** - [Instructor] So we've mostly been focusing on user accounts. User accounts, again, are a way for users to log into the console or to get access to AWS services and features from other tools like a command line interface and SDK for an app and so forth. But sometimes AWS services need access to other AWS services. They don't log in like a user. They don't have access keys. So they have this concept of roles and that's what we're going to talk about now, roles. Now, even if you haven't created any roles already, there may be some roles defined for you in your roles area. Some services create roles behind the scenes. We're going to look at a couple of services that commonly use other services and need roles. One is going to be Lambdas. So from the services dropdown, I'm going to look for Lambda. And here, we can create a function and we need a role for it. So I'm going to click Create Function. I'm going to create from a blueprint just for time's sake and I'm going to search for hello for hello world. I'll just pick this one, this hello-world [[Node.js]] and configure it. So it's going to ask for a name and I'm just going to call it myfunc and then it needs a role, so we can create a new role, we can use an existing role, or create a new role with basic Lambda permissions. Now, of course, this is a Lambda so we probably want Lambda permission. So we're just going to go ahead and select that one. And then I'm just going to use the boilerplate code that it puts in there and let everything else be defaults
>
> **[1:33](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=93)** and let it create this function for us. Now, part of this creation is going to be creating the IAM role. So I'm going to go there as well. I'm going to open it up in another tab with a command click, close the list of services. Notice that it's created the function for us. And if we scroll down in the configuration, we can see that it created this role for us of myfunc-role and this unique key. So let's go to IAM and look for that. So here, I can click on roles again under IAM and I have myfunc-role. And if I click on it, you can see it's got this AWS Lambda basic execution role and then all this stuff after it. So what it did was it used the policy of AWS Lambda basic execution role and named it something unique so we could edit it if we want to. So this is the same copy of the normal AWS Lambda basic execution rule, but it put in specifically our resource there and also our resource for the logging. So we have these permissions and we also have our ARNs already defined for us, our ARNs defined in the [[JSON]] for us. So this policy is specific to our Lambda and now our Lambda can execute using this role. If we wanted to add additional policies to this, we can do that with attached policies in case this role needs to read or write from the database or anything else it might need access to as far as services go. SES, SNS, so forth. Another common service that needs access through roles
>
> **[3:09](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/roles-15107844?u=76281980&t=189)** is Cognito Identity Pools. We can create our own pool. We'll just call it mypool. And we are going to enable access to unauthenticated identities. And for our authentication providers, we could provide whatever authentication providers we want our users to be able to log in as. We don't need to add this now because we're not actually going through the process of user authentication. We just want to create this pool. So I'm going to create the pool. I'm going to allow the role and then I'm going to click on Edit Identity Pool to see what roles it created. So it created these two roles for us, the unauthenticated role and the authenticated role. Let's go back to IAM and look for those as well. So I'm going to click on Roles and now we have our two Cognito roles. And so for users that have not logged in through my app or website that's using this for authentication, I can specify certain permissions that are allowed for those users. So maybe they can't write to the database, but they can read from it and list all of the items in the database. But for authenticated users, they may also be able to write, update, and delete items to the database. So we can have different roles based on if the users logged in or not through Cognito. And again, you can use different identity providers for the identity pool like user pools, [[Facebook]], Amazon, and so forth, but these are two services that commonly need other permissions to other services in AWS.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=0)** - [Instructor] We've been talking about how users and roles have policies that give them permission into various AWS services and features like S3 Buckets, CloudWatch, and API Gateway. But do these services and features have any say in all this, or can they just be accessed without their permission? Well, for some AWS services and features, you can provide what are called resource based policies. I recommend you look up an AWS documentation to see what services and features support this. But the idea is that in cases like an S3 Bucket, CloudWatch, API Gateway, and several others the resource itself can define permissions as to what's allowed or denied. So let's look at that for an S3 bucket, for example. I'm going to go to the S3 Bucket management console and I've got a bucket here called importantstuff1234. So I'm going to click on this and I'm going to go to permissions. The block public access settings were set up when I created the bucket and it's on. So I'm blocking all public access. So I can change this through the edit button and I can specify different access through these ACLs. We can also click on the access control list to manipulate the ACLs. One that's given automatically is your AWS account can do all things to this bucket by default. You can add other accounts for that. You can turn on public access and so forth. This will allow or deny access to this bucket
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=96)** based on these rules. You can also specify a bucket policy. And this looks very much like the policies we've been seeing before with our users and roles. We can specify a policy specifically for this bucket. I'm going to go to the policy generator. It's going to open up a new tab. This is a little bit different than the policy editor we saw before. So I'm going to select an S3 bucket policy. I'm going to say deny. And for the user, I'm going to specify an asterisk. That means this applies to all users. For the service, it's an S3 Bucket. And for the actions I'm going to say delete bucket. And for the Amazon resource name, I'm going to paste in the ARN we just copied. And I'll add this statement to my policy. I could add more statements, but whenever I'm done I can generate the policy. Now I've got this [[JSON]] and I can go back to my bucket, paste it in, and save it. And so basically what I've said is that for this bucket we're going to deny the ability to delete the bucket, this bucket and the asterisk on the principle means everyone. So no one can delete this bucket. So even though I'm logged in as an admin user with admin access, I cannot delete this bucket. So I can go over here to the S3 dashboard, select the bucket, select delete, do what I need to do to confirm that. And when I go to delete it, it doesn't go anywhere. Doesn't give me much of information as to why, but I cannot delete this even though I am administration access.
>
> **[3:10](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/resource-based-policies-15107843?u=76281980&t=190)** So what's happening is it's combining the policy in my account and the resource based policy of the bucket. And typically they kind of banded together logically. So if I had write access through my administration and read access through the resource based policy, I would get both. They would combine, but a deny always trumps. So since the resource based policy is denying me access to delete, even though I have that permission through my administration access, the deny on the resource based policy trumps it. And I can't delete this bucket as long as it has that policy.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/multi-factor-authentication-15106896?u=76281980&t=0)** - [Instructor] We talked before about the recommendation for enabling MFA on your root account. In fact, from my dashboard, I can see I have a four out of five on my security status because I haven't done that. And I can't do that now because I'm not logged in as the root account. I can enable it on my account under the security credentials under the dropdown for my account on the top right. I can do it for other users under the users tab. So I'm going to select on the boothadmin user and under the security credentials tab, we'll see the assigned MFA device. It's not assigned. So to assign it, I can click Manage. And from here, I have three options. I can learn more about these from this link right here, this AWS multifactor authentication link, but these three options give you the most common ones. So you have a virtual MFA device, which is usually a app that you install on your phone or computer. The U2F security key, which will allow me to connect that to my current device and it'll walk me through that, or the other MFA device which uses a Gemalto token. And again, if I continue, it'll walk me through that by getting the serial number and so forth. So here's a few different ways you can assign these on your existing user accounts to make your account more secure. You may not need this for every user. You may not use this for the programmatic connecting accounts for the access key and security keys. That might be your security, but your group should have some kind of policy. And ideally the more secure, the better.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/federated-access-15112031?u=76281980&t=0)** - [Instructor] If you're setting up AWS and user accounts for your company accounts, you may already have a lot of users who already have an account on another system and you don't want to duplicate it all over again and make people have a bunch of different accounts. One way to get around that is to use identity providers in IAM. So if you go to the IAM dashboard, you can click on identity providers and this will allow you to create a new provider. So let's say you have users in your company and you already have [[Google]] accounts where you can use that as an identity provider. So you would click create provider and you choose one of the two options of SAML or OpenID Connect depending on what your user accounts are defined using. Once you pick one of these, you specify the name. And in this case of the SAML, the meta document. For the OpenID Connect, you have to specify the URL and the audience. This is often the client ID or the application ID defined in either Google or [[Facebook]] or Twitter where you create an account through their developer site. A really handy resource in this case is the [[AWS Security]] Blog. Here you can find all kinds of resources and information for determining how to best secure your site. Particularly I wanted to point out this article written about how to set up federated single sign on to AWS using Google apps. This steps you through how to set up everything you need between Google and AWS IAM to allow users to log in. Again, this is using SAML, you download the meta document, you upload it here and then you have that as one of your identity providers.
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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/credential-report-and-access-advisor-15110623?u=76281980&t=0)** - [Narrator] Now I want to show you a couple other useful little tools that can help you understand how your users are accessing and using the AWS account. One is the credential report. Here you can download a CSV file that gives you an idea of how your users are logging in and handling their account. Once you've downloaded the CSV file, you can open it as a spreadsheet or process it in any way you want. Here it is as a spreadsheet. We can see the user accounts, their ARN, when the account was created, if their password is enabled, and over here if they have access keys. You can also see when their password was last used, last changed, and so on. This gives you an idea of how often users are logging in and updating their password and so on. So you can validate that they're following the policies as necessary. Of course you can expire their password in the password settings, but here you can see what they're doing on their own. Another useful tool is under the user's tab. For a given user you can select the access advisor tab and see what services they're accessing. It's not up to the minute updated, but it does show you activity usually after a few hours or so. And you can see what they're accessing and maybe if they're not accessing certain services, they don't really need those permissions and you could remove it from their account to protect the account, but also protect them from any unnecessary access. So these are just a couple of more tools that help you really tighten and refine the security of your system based on what's going on and what users are doing.

> [!info]- Semantic Content
>
> **Env Vars:** csv (2), aws (1), arn (1)
> **CLI Commands:** aws (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### [CloudTrail](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=0)** - While we're on the topic of security, I want to talk about another AWS service that gives you a little bit more of a granular view into the actions and events on your account. It's called Cloud Trail. So I'm going to go to Cloud Trail and on the dashboard it gives me the most recent events listed. I can view all the events and see all the events of the last 90 days. I can scroll through these and see some more details by expanding them. I can also download this as a report, as a CSV file or [[JSON]], and in the UI, I can specify what columns I want to view. If I want reports on certain events, in an S3 bucket or Lambda calls, I can create a trail for that. So I'm going to create a trail called bucket actions, and I'm going to apply to all regions. And I'm also going to apply to all read and write events. We could make this trail for an S3 bucket or all S3 buckets, and we could specify specific Lambda functions or all current and future Lambda functions. I can do S3 buckets and Lambdas or one or the other. I'm just going to do an S3 bucket for this trail. I can create a new S3 bucket or use an existing one. I'm going to create a new S3 bucket and I'm going to name it bucket events. And I'm going to give it some numbers at the end to make it unique. Under the advanced settings, I can specify a log prefix, so that can help me organize this. So I'll call the log prefix bucket logs. I can also enable encryption, enable log file validation, and also send a notification to an SNS topic
>
> **[1:36](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/cloudtrail-15111291?u=76281980&t=96)** whenever a log file is delivered. Then I click create. Once the trail's created, as events happen, it will generate the log file, store it in my bucket, and then I can process it however I wish. So I can go look at this bucket now. Of course it's empty because no log files have been generated, but we can see that under the bucket that I named bucket events 234534, there's my prefix bucket log and so forth. Now I have a place where my events will be logged on this S3 bucket for all reads and writes for all regions. You can break it apart depending on how you want to organize your buckets and how you want to process your logs. But this is the general way to do it.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/best-practices-15113021?u=76281980&t=0)** - [Instructor] I want to reiterate a few of the best practices that we've talked about during this course. One that we mentioned early on was don't use the root account unless it's necessary. If you're not making core changes to things like the billing or deleting the account, try to use a different admin account. Also, protect your root account and others when possible with multifactor authentication. Also, manage policies for users with groups. That way, when you make changes, you only have to change it in one place and it affects all those users. Also, use a good password policy, something that doesn't allow users to create weak passwords and expire those passwords up to some reasonable amount of time so users have to rotate their passwords or create completely new ones. Also, don't use access keys unless necessary. You don't want to have accounts out there with access keys and you're storing them on the web or in your app where they can be somehow hacked, or rotate those if you have to use them. Also, you can monitor the usage with CloudTrail. You can download those reports, you can store them in an S3 bucket when you're monitoring your buckets and lambdas and run reports on those as necessary. And then also, don't leave user accounts, access keys, and other configuration settings around when they're not being used. If you don't need a user account anymore, delete it. And same with access keys, or at least rotate them. This will help keep your account safe and protect it from anything that might go wrong or users with bad intentions.

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
> **[0:00](https://www.linkedin.com/learning/aws-for-developers-identity-access-management-iam/next-steps-15110624?u=76281980&t=0)** - [Bear] Going forward, I strongly encourage you to experiment with creating accounts, logging in with them and monitoring them. Experience really is one of the best teachers out there. Also, I encourage you to use best practices from the start. Getting used to using these things and getting your users used to adhering to them can make a lot of difference in the long run. Also, create a cloud trail and monitor things that happen to your S3 buckets and Lambda calls. And on your S3 buckets, I encourage you to create resource-based policies. It's not the answer to everything and you don't always need them, but it's better to be familiar with it for when it does come up. Also, I'd love to hear how you use IM practices and policies, so keep in touch with me at bear@brainwashinc, brainofbear on Twitter, and of course, check out my [[LinkedIn]] account and I'd love to hear from you, thanks.

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