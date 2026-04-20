---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-identity-and-access-management
url: "https://www.linkedin.com/learning/introduction-to-identity-and-access-management"
duration_minutes: 57
duration: 57m
level: Beginner
updated: 10/14/2022
learners: 46881
skills:
  - Identity and Access Management (IAM)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHnNlXXSDM8jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1665594694262?e=2147483647&amp;v=beta&amp;t=bjQ8QTqZEBdo2FF5qW90UZivUthZNSzr9PxN4Nf7Lg4"
linkedin_topic: Cybersecurity
learning_paths:
  - Navigating the Cybersecurity Threat Landscape
  - Cybersecurity Fundamentals
  - Networking and Administration Fundamentals
path_count: 3
tags:
  - course
  - topic/security
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/identity-and-access-management-iam
status: not-started
created: 2026-04-19
---

![Introduction to Identity and Access Management](https://media.licdn.com/dms/image/v2/C560DAQHnNlXXSDM8jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1665594694262?e=2147483647&amp;v=beta&amp;t=bjQ8QTqZEBdo2FF5qW90UZivUthZNSzr9PxN4Nf7Lg4)

# Introduction to Identity and Access Management

> Your systems and resources are your organization’s lifeline. If your data falls into the wrong hands, you could stand to lose it all. Especially now, in a world where credential theft is so pervasive, you need to be able to validate who your users are and what they can access within your organization. Join cybersecurity leader Mandy Huth for an introduction to identity and access management, a cor

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management) | 57m | Beginner | 47K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Mandy Huth]]

## Skills Covered

- Identity and Access Management (IAM)

## Table of Contents

### Introduction

#### The importance of identity and access management
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=1)** - According to the 2022 Verizon Data Breach Investigations Report, over 82% of all in scope breaches involved humans, and in over 50% of the cases, credential theft was the first link of attack.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=16)** That's crazy.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=18)** It has never been more important to validate who your users are and what they are accessing within your organization.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=25)** Your data is important, so let's find out how we protect it by giving only authorized users access to the resources they need.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=34)** Hi, I'm Mandy Huth, and I've helped organizations with over $8 billion in revenue create and run identity and access management programs.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=43)** Additionally, I've spoken at leading industry conferences on this very topic in how to approach this type of program.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=51)** In this course, I'll show you the basics of identity and access management, including key concepts like authentication, authorization, and accounting.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=61)** I'll even touch on some advanced tips and tricks.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=64)** So come with me and let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** find (1)
> **Speakers:** - according (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/what-you-should-know?u=76281980&t=1)** - [Narrator] Whether you are starting your career in security or work closely with a security team, understanding the concepts of identity and access management will help you navigate how to control access to your company's data and how to better protect your systems.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/what-you-should-know?u=76281980&t=18)** This course is intended to provide an overview of key concepts and components involved in identity and access management.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/what-you-should-know?u=76281980&t=27)** Learning how the security team will apply these concepts enables you to apply the best approaches for your business needs.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/what-you-should-know?u=76281980&t=35)** As we move through, you'll become a pro yourself.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


### 1. Key Concepts for Identity

#### Authentication, authorization, and accounting
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=0)** - There are three key concepts that are foundational to identity and access management.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=5)** Authentication, authorization, and accounting.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=9)** These concepts are the basis of everything we will build on, so this is a good one to spend some extra time understanding.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=16)** Let's talk about each one of them separately.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=19)** Authentication is the process of recognizing a user's identity.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=23)** This is done by validating who they claim to be.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=27)** How do you validate who you are?
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=30)** Usually, it is some additional data that is specific to that person, and it should be hard to reproduce or guess.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=38)** If you validate your credentials, such as a password correctly, you get access.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=43)** If not, access is denied.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=47)** Think of authentication as a two-part process.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=51)** A good way of thinking of this is something you are and something you have.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=56)** Check out the next video for a deep dive into authentication and the different ways to validate who you are.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=62)** Just remember, others need to know who you are, and you have to prove it.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=67)** Authentication is proving who you are.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=70)** Authorization is determining what you are entitled to have access to.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=75)** Authorization is defined as giving someone permission to do or have something.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=80)** Another way to say that is giving the user access to a resource.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=84)** An important note is that authorization always takes place after authentication.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=90)** When you are on a site, say Globe Bank, and put in your username and password, which is authentication, you get access to your transaction history, which is giving you authorization to that information.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=103)** Authorization is the key element that organizations can use to control permissions to important information.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=110)** When organizations build proper access controls through authorization, their users can access what they need when they need it, but nothing more than they need.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=120)** When implemented properly, it is one of the strongest security controls a company can implement, with the greatest impact.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=128)** Once authentication and authorization are in place, the way to ensure they are working properly is the use of the third component of identity and access management, which is accounting.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=139)** Accounting is the process of measuring the resource the user consumes while they have access.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=144)** Some people call this monitoring when someone accesses a system.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=148)** Examples can be the time logged into a system, the data they reviewed or changed while in the system, or even where they logged into the system from.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=158)** The reason the practice of accounting is important is to ensure that the access you have granted to users is being used as intended, and to ensure that access to your systems by someone not granted access is not occurring.
>
> **[2:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=173)** It should be done on a regular basis for your most critical systems, since these tend to be the most targeted places for hackers to try to take advantage.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=184)** Now let's pull all three concepts together with an example.
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=188)** When you go into your workplace, you may have a badge to prove who you are, which is authentication.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=195)** Once you swipe your badge to your office floor, if you have permission to access that particular area, the locked door will open, which is authorization.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=204)** On a monthly basis, the security group will run a report to ensure that only authorized people have accessed the building.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=212)** That is accounting.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=214)** The three key concepts for identity and access management, authentication, authorization, and accounting help organizations maintain proper access to resources and provide a process for checking that it is accurate.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), from. (1)
> **Definitions:** is a  (1), defined as (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Warnings:** important note (1)
> **Speakers:** - there (1)

#### Authentication deep dive
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=0)** - [Instructor] Can you count the number of times you have proven who you were over the past week?
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=6)** Have you shown your driver's license to confirm who you are?
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=10)** Maybe you used a passport at the airport, those documents prove who you are.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=16)** And how many of you put a password into a website before you were allowed access?
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=21)** You were verifying something you have.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=24)** Authentication is the primary mechanism used across a myriad of ecosystems that helps provide access to people that are supposed to have access to those places.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=34)** Let's deep dive into the components of authentication, as it is the first gateway into resources you need to use.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=43)** Authentication is the process of recognizing a user's identity.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=48)** This is done by validating who they claim to be.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=51)** How do you validate who you are?
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=53)** Usually it is some additional data that is specific to that person, and it should be hard to reproduce or guess.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=61)** If you validate your credentials correctly, you get access, if not, access is denied.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=68)** Think of authentication as a two part process.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=71)** A good way of thinking of this is something you are and something you have.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=77)** First, you will need a user identification or ID, this is who you are.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=84)** Examples of that might be an email address, a number like your school student number, or a random ID that you are allowed to come up with.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=94)** Second is something you have.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=96)** You need to provide information that is specific to you but is hard to guess.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=102)** The most common type is either a password or a pin.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=106)** Most of us use these when logging into our company's assets.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=110)** Many of you probably have a six digit password that you have to enter when your phone is locked as well.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=117)** Something that is becoming very popular for authentication is biometrics, which are body measurements.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=124)** This is also something only you have.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=128)** Examples include your fingerprint, your voice, or facial recognition, which are all specific to you and your body.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=138)** More and more devices in our world, like the phone we just mentioned, are providing options to use biometrics as proof of who you are.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=146)** Finally, another type of proof is a token.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=150)** This can be an actual token that has a number that changes on a regular frequency.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=155)** It might be a card that you insert into your laptop, or it could be a text message to your phone that provides a code.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=163)** Authentication is the gateway to getting the access you need.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=168)** You have to prove who you are, and then validate it with something you have or know.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=174)** Ensuring strong authentication makes sure you are providing access to the right people.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Users, groups, systems, assets, and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=0)** - [Instructor] When we talk about identity and access management, identity, also called a user or entity, can mean many different things depending on the context for an organization.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=12)** Once you understand the relevant users for your company, you can outline the different permissions available for each.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=20)** First, let's discuss the different types of identities.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=23)** The most common type of user is a person.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=26)** Most organizations have many people accessing their systems.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=31)** This can be an employee, a contractor, or a vendor.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=36)** Another type of user is an agent, someone or something you give permission to act on your behalf.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=43)** For example, you may give your personal assistant permission to book your travel for you.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=48)** They would still need to use their own identity, but they would be acting as your agent.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=54)** Another type of user is a device or system.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=58)** Think about this like your laptop or a server in your data center.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=62)** Since it is executing actions, it needs an identity so that you are able to track what it is doing within your ecosystem.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=71)** Finally, you may have accounts.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=74)** There may be accounts in your network that need to access a system to get information or to take action.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=82)** You would give that account an identity so that you can track its actions.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=87)** Think about when a banking system needs to transfer money between accounts.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=91)** In order to transfer money from checking to savings, the system needs to know that the accounts have permission to take that action.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=99)** Giving each one an identity allows you to provide the appropriate access.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=104)** If you have a certain user type that is the same for multiple users, you can also create a user group.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=112)** This is an identity that contains more than one user, and can be managed as a single user for giving permissions.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=120)** An example might be a group of distributors who can all get access to one place in your systems.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=127)** You can manage permissions with a single user group and keep the list of individual distributors in that group.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=134)** Another user type you may use is called a role.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=137)** It is similar to a user group, but the reverse.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=142)** If you label a user, for example a person, with a certain role, like an accountant, you could then provide a standard set of permissions based on that role.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=153)** Once you understand who your users are, you have to determine what permissions you are going to provide to them.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=160)** Permissions are another word for authorizations, or access to your network.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=166)** In the ideal situation, all identities would start with no permissions.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=171)** That way, identities cannot do anything inside your ecosystem until you grant them the access you want them to have.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=179)** You can address permissions in a couple of ways.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=182)** Most companies will address permissions using a build out approach.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=187)** The security team will usually begin with what they call birthright access, or access that every single employee gets when they start with a company.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=197)** That may be areas like network access, email, and internet access, for example.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=203)** Then, an employee or their manager will request additional permissions to systems as they need them.
>
> **[3:31](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=211)** Another way to address permissions is based on roles, as we mentioned as a user type.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=216)** In this approach, you would take the accountant job and determine what permissions that particular role might need.
>
> **[3:44](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=224)** For example, they may need access to your company's financial systems, to your sales systems to capture order information, and to your purchasing system so they know about accounts payable and accounts receivable.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=238)** Finally, you can consider attaching a policy that specifies a type of access or what actions can be performed by users.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=248)** This can include conditions that must be met before access is granted.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=253)** For example, you can put a policy that only an email address from your company can access a certain system, or a condition that only a company managed device can access certain parts of your network.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=268)** Defining users within your organization and outlining what access you will provide to each type will help ensure that you provide the right level of access to the correct people and systems.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), similar to (1)
> **Definitions:** is a  (2), is an  (2), is called (1)
> **Code Keywords:** finally, (2), let (1), type. (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### Access control principles
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=0)** - Have you ever needed access to a shared drive location that is part of another function in your company?
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=6)** You probably didn't have access, and had to call the help desk to request the access.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=12)** Organizations can help improve it's security, and make sure users have the right permissions, by applying an access control model.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=21)** Access control is when we have to decide whether we will accept or deny user requests for permissions.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=28)** There are three primary models you can use to manage access requests.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=33)** Let's discuss the different models and how they are used.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=38)** First, there is Mandatory Access Control, or MAC.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=43)** This model is the most restrictive and the most secure.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=48)** Mandatory Access Control is a model where identity administrators would set access control for both users and objects.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=57)** What that means is that not only does the user need access to a location, they also need access to a specific object, such as a classified document.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=68)** The Mandatory Access Control method is used quite often by governments, and places where heavy security is required.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=77)** It is the most hard access control method to manage, and is often burdensome for users who have to navigate a lot of obstacles for access.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=87)** I recommend using this model only in heavily guarded environments.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=93)** Next, there is Discretionary Access Control, or DAC.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=97)** In this model, every object, remember that's like a document, has an owner who decides who gets access to that object.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=107)** This model is the least restrictive, allowing access control to be decentralized and managed by teams and individuals.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=116)** While Discretionary Access Control can provide a high level of flexibility for organizations, it also brings a lack of visibility for identity administrators.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=126)** Since each object owner can create their own group of objects, and determine the access, an organization's controls can become very unstructured and unstandardized.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=138)** If the owner doesn't understand access control, it can also mean more access than is needed may be given.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=145)** Depending on your organization's security requirements, you can consider this model to provide users the greatest amount of control over their access.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=154)** If Mandatory Access Control is very stringent, and Discretionary Access Control is very flexible, I would place the third model, called Role-Based Access, or RBAC, somewhere near the middle between the two, providing a standard framework for access control while still allowing some flexibility.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=176)** Role-Based Access Control, or RBAC, is a model that uses specific jobs, or roles, to determine access permissions.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=185)** So instead of giving John permissions based on who he is, John would be given permissions based on his role, such as accountant.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=196)** Role based access, when built well, is a very good framework to use and is the easiest model for the identity administrator to leverage.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=205)** It can also provide a positive user experience, providing all the necessary permissions for a given job automatically.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=212)** One downside of RBAC would be if a user needs permissions outside of their job.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=218)** An example may be that an accountant needs access to a file for marketing, which is not part of his job.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=225)** These types of exceptions have to be administered separately.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=229)** Role-Based Access can be used very effectively by organizations that have well defined jobs.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=236)** There are a few other access control models available for organizations to use, such as Attribute-Based Access Control, Rule-Based Access Control, and Risk-Based Access Control.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=250)** These models aren't as widely used, but could be considered if one of the three primary models does not work for an organization.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=260)** In order to be able to standardize a method of giving users permission to what they need to do their jobs, using access control models, such as Mandatory Access Control, Discretionary Access Control, or Role-Based Access Control, can give organizations an effective approach to apply appropriate controls to sets of users and objects.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=284)** Take time to review the benefits of each to determine which works best for your organization.

> [!info]- Semantic Content
>
> **Env Vars:** rbac (3), mac (1), dac (1)
> **Analogies:** such as (4)
> **Definitions:** is a  (3)
> **Code Keywords:** function (1), let (1)
> **CLI Commands:** make (1)
> **Speakers:** - have (1)


### 2. Applying Authentication in Your Organization

#### Better together: Identity providers and identity governance
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=1)** - As we have discussed, authentication is validating a user's identity.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=6)** Authorization is giving that user permission to access a resource.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=11)** Authentication and authorization have to work well together to ensure the best results for access management.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=19)** An identity provider is a provider that will execute authentication for your controls.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=25)** Identity governance is the mechanism to execute authorization to your systems.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=30)** Let's discuss each one in turn.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=34)** You may ask, what exactly is an identity provider and why would I need one for my business?
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=40)** In the simplest terms, an identity provider is a service that authenticates your users and ensures they are who they say they are.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=49)** Knowing your users are verified increases security for your organization, which is definitely a benefit.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=55)** Think of an identity provider like a broker, someone who negotiates with the user on your behalf.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=61)** An identity provider or IDP executes many tasks on your behalf as the trusted source of user authentication.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=70)** An IDP can create, store and manage all the identities you may use for your organization.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=77)** The process of authentication is straightforward.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=80)** First, a user requests access.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=83)** In most cases, users do this by entering their username and password into a form.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=89)** The identity provider checks the records to see if the user is valid and has provided proper credentials and then sends a token back to the user that they can use to confirm they have proven themselves.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=100)** Next is identity governance.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=103)** Identity governance is the process that allows organizations to manage access to their resources in a centralized place.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=113)** This process is usually enabled by an identity governance administration or IGA technology solution.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=121)** Once authentication has taken place, you need to leverage identity governance in order to provide the right access to your user.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=130)** The identity governance process confirms authentication has taken place by checking the user's token.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=137)** That's how the identity provider and identity governance work together.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=142)** The identity governance solution then gives the verified user access to the right resources.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=148)** Let's look at an example.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=150)** Let's say Luke owns two houses and needs to check his electric bill.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=156)** When Luke goes to the utility website, he enters his username and password.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=161)** The identity provider validates Luke is who he says he is and gives him a token.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=167)** The identity governance tool confirms the token then goes to the electric company's records and sees that he has two houses.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=176)** It then renders the information for both of his houses.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=179)** But it doesn't give him any information on his neighbor's house.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=182)** He only gets access to the accounts that are valid for him.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=187)** It is very important that your organization only allow users entry into your ecosystem who should have access to your resources.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=196)** Using an identity provider to validate their identity via authentication and then leveraging an identity governance system is an effective method for managing your users.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=206)** If you'd like to learn more, you can check out specific vendors by searching for identity providers and identity governance, respectively.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2)
> **Code Keywords:** let (3)
> **Env Vars:** idp (2), iga (1)
> **Speakers:** - as (1)

#### Single sign-on
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=0)** - [Instructor] Single sign-on, commonly referred to as SSO in IT circles, is pretty much exactly what it sounds like.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=10)** It is the ability of a user to sign on a single time while providing access to multiple service providers, things such as email or an expense reporting system.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=22)** Single sign-on provides benefits for both identity administrators, as well as for users.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=29)** Single sign-on is a very popular feature for users, even if they don't know what it is called.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=36)** Being able to sign on just one time without having to repeatedly enter their username and password makes navigating across multiple places much simpler for users.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=49)** The benefit of increased productivity is pronounced if one has many systems or resources they need to work with frequently.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=57)** I know I like only signing on once per day.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=61)** Another huge benefit of single sign-on is to reduce password fatigue.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=67)** As a user of many resources, having to remember different passwords for different systems can be frustrating and inefficient.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=76)** If I know that I only have to remember a single password, I am more likely to create a single strong password versus trying to simplify or replicate my multiple passwords.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=88)** We all know about using password as your actual password, even if we know better, or worse, we write down the many different passwords, leaving our credentials vulnerable to curious eyes.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=103)** From an administration perspective, single sign-on provides simpler administration of authentication, since a standardized process can be used repeatedly across resources using the same set of tools.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=117)** The other large benefit of single sign-on for identity administrators is improved network security.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=124)** Let me explain.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=126)** When an organization uses single sign-on, they have created a single identity across multiple systems.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=133)** When a user leaves an organization, the administrators can turn off a single identity and know that access has been disabled across all those systems.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=143)** What a relief.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=145)** Side note, my IT friend, Tim, says this is a huge benefit for administrators.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=152)** For a little more technical detail, let's discuss the process.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=157)** Don't worry if you're not an IT technical person.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=161)** I'll try to keep it straight forward.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=163)** The single sign-on process leverages a service provider and that trusted identity provider we spoke of.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=171)** Once a user goes to a website or application, they will enter an identifier, like their username.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=178)** The service provider, like the website owner, sends something called a token request to the identity provider.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=186)** The identity provider then checks that that user has received a token from them and passes that confirmation back to the service provider who will then pass through that confirmation to log onto their site.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=201)** An important note here is that the confirmed token will follow the user across services as long as that service accepts token forwarding.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=212)** You can ask your IT friends about that one.
>
> **[3:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=215)** Just know that not all services accept those tokens.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=219)** The basis of single sign-on is having the trusted relationship between the service provider and the identity provider in place ahead of time so that the user can be quickly validated and sent to the various resources that are part of that trust.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=237)** An example that you may be familiar with is if you use your Facebook login to sign into multiple websites.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=244)** Facebook has over 150,000 websites that allow you to use that login to prove who you are.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=253)** Some examples are Airbnb or Spotify.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=256)** If you use those websites, you can use your Facebook login information so you don't have to create another set of credentials and remember a password.
>
> **[4:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=266)** Single sign-on makes the user's life so much easier.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=271)** Single sign-on is a great way to set up trust between a service provider and an identity provider to allow users to sign on a single time across multiple service providers.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=284)** It creates higher security for service providers and makes it very easy for users to utilize many resources simply.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=293)** It's a win for everyone involved.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is called (1)
> **Code Keywords:** let (2), pass (1)
> **Env Vars:** sso (1)
> **Analogies:** such as (1)
> **Warnings:** important note (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Federation
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=0)** - [Instructor] Federation is a collection of domains or service providers that have established trust among one another, following standard principles to allow them all to execute authentication in the same manner.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=14)** Having federation in place allows for more effective and secure identity administration, as well as improved simplicity for the user experience.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=26)** The act of federation is being able to use your relationship with an organization in multiple places, using an identity provider to validate your identity using a trusted list and provide that to various service providers so you can have easy access to their services.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=46)** If you listened to the last video you heard about single sign on.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=51)** Single sign on is actually part of the overarching framework of federation and is one of the most beneficial aspects of federation.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=60)** If single sign on is the process of forwarding tokens to achieve federation, we also need to discuss the different protocols that are used to enable everyone to speak a common language.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=75)** There are three primary protocols used in federation, SAML or Security Assertion Markup Language, OAuth 2.0 pronounced OAuth, and OIDC or OpenID Connect.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=93)** Let's talk about each one specifically.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=97)** SAML or Security Assertion Markup Language is a protocol that provides a secure method of passing authentication between an identity provider and a service provider.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=110)** SAML is mostly used in web browsers using a language called XML.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=116)** In order for authentication to work, the web browsers need to be configured the same.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=123)** SAML is the protocol that defines a standard way to pass those details to each other.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=129)** Think of it this way.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=131)** If the identity provider sends authentication for Luke as Jones comma Luke which is configured as last name comma first name but the service provider is looking for Luke Jones which is configured as first name last name with no commas, they aren't going to match and Luke isn't going to get access.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=158)** OAuth 2.0 is a protocol that allows one application to request a user's authentication with a different service to be used as proof of their identity without sharing password data.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=172)** And yes, in case you're wondering, there was a previous version.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=176)** OAuth 2.0 is used mostly in mobile applications using a language called JSON.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=183)** In order for this protocol to work, an authorization token is provided by one application on your behalf to another application.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=193)** Let's say Luke uses Facebook so that application has his login data.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=198)** Luke decides he wants to go on vacation using Airbnb.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=203)** Airbnb asks if he wants to use his Facebook login to log into their application.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=209)** Airbnb asks Facebook for permission and Facebook gives a token instead of the actual information, and Luke can log into Airbnb.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=220)** OIDC or OpenID Connect is a protocol used for authentication.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=228)** It is a protocol that extends the token concept from OAuth but it also gathers additional user details.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=236)** So while OAuth does not include any information that is identifiable in its token, OIDC allows for sharing account data from one application to another.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=247)** If we go back to the example of Luke using Facebook to log into Airbnb, the difference in using OIDC would be that Airbnb may request to have Luke's profile and email address information in addition to using the token to validate Luke's identity.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=267)** Federation can create a simple user experience by sharing identity validation amongst a group of trusted service providers.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=276)** Single sign on is the most commonly used approach to federation.
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=280)** Federation is made possible by using standard protocols so each service provider is speaking the same language.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=287)** Those protocols are SAML, OAuth 2.0 and OIDC.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=293)** Knowing how each works and which benefits are most relevant to your organization will help you provide a great user experience.

> [!info]- Semantic Content
>
> **Env Vars:** saml (5), oidc (5), xml (1), json (1)
> **Definitions:** is a  (5)
> **Code Keywords:** let (2), pass (1), extends (1)
> **Versions:** 2.0 (4)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Applying Authorization in Your Organization

#### Least privilege
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=1)** - Now that we have discussed authentication, which is proving who you are, it's important to discuss authorization, or what you have access to.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=10)** A foundational principle of authorization is called least privilege.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=15)** Least privilege is an access control principle that outlines that the user should have the minimum necessary privileges to access information required to do their jobs.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=25)** Let's talk about Luke.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=27)** If Luke is an accountant at Globe Bank, then he should have access to bank information for credits and debits.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=35)** However, he should not have access to HR files on Globe Banks' other associates, as that is not a part of his job.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=43)** Of important note is that least privilege extends to all types of users.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=49)** Remember, a user can be a person, a device, a system, or even an account.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=55)** So ensuring that application systems only have access to what they need to access is just as critical as limiting people's access.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=65)** There are a few key benefits to ensuring your organization uses the principle of least privilege.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=70)** First, it limits the attack surface of your environment.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=74)** If users only have access to a limited amount of information, it reduces the available targets that bad people can take advantage of.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=83)** Second, least privilege limits damage in the event of a security incident.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=88)** If a bad person does gain access to your systems, ensuring that users only have the access they need limits the amount of systems that can be impacted by that bad person.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=100)** Lastly, if you have least privilege, auditing access becomes a lot simpler since each user has a limited amount of access that needs to be reviewed.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=111)** Let's not get scared, but let's be realistic.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=115)** In 2019, the Capital One data breach exposed information of over 100 million consumers because a firewall, here, the user was a system, had excess access to the cloud environment that was taken advantage of.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=132)** An easy way to get started with least privilege is to identify a baseline set of privileges that every user should have.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=140)** Many organizations call this birthright access.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=144)** Birthright access for your human users may be network access and email.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=150)** For a system user, it may be only network access to a certain network segment.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=155)** Thinking about baseline privileges and applying minimum authorization or privilege to your different users will ensure that you are protecting your ecosystem through rigorous access controls.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), extends (1)
> **Definitions:** is an  (2), is called (1)
> **Warnings:** important note (1)
> **Prerequisites:** required to (1)
> **Speakers:** - now (1)

#### Provisioning
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=0)** - [Instructor] The process of providing access to various systems is called provisioning.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=6)** Provisioning is required to give your users access to the resources they need to do their job.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=13)** Provisioning is the act of creating, updating and deleting access to a user's access across multiple systems, applications and information across your organization.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=26)** Provisioning happens most frequently when a user is onboarded.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=30)** For human users, that is when they are hired.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=33)** For systems, that would be when they are created and/or put into a production state.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=40)** Other times provisioning may need to occur would be if a user was promoted or transferred.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=46)** And when a user is no longer part of your organization provisioning would need to delete access.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=53)** While you could keep track of what users have access to which systems manually, imagine if you had hundreds of users with access to hundreds of resources.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=64)** The ability to manage that in a spreadsheet or in individual systems quickly becomes untenable.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=71)** The best approach to provisioning would be to leverage an automated provisioning system based on user roles.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=79)** If you recall, when we discussed access control principles in chapter one, go check out that video for a refresher, role-based access allows you to outline privileges based on a user's role.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=93)** When you combine this process with a technology that can automatically grant permissions to a system based on their role, this becomes a very efficient way to manage access to your organization's resources.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=107)** Let's check in with Luke.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=110)** Let's say Luke in his accountant role, needs to have access to two different bank resources and one tax application.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=119)** When Luke was hired at Globe Bank rather than a security administrator going into each of those three systems separately and manually adding Luke, the system sees that Luke is an accountant and sends a message to those three systems to give Luke permission to the accountant resources in that system.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=139)** Voila.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=142)** The added benefit is that in the sad case that Luke leaves Globe Bank, automated provisioning allows for those same systems to be notified to remove or deprovision Luke's access with one message from the access management tool.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=160)** Ensuring that a user has the proper access to needed systems and resources requires you to have a provisioning plan in place.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=169)** While you can do it manually, using an access management technology can help increase efficiency by automating provisioning across multiple systems for you.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1)
> **Definitions:** is called (1), is an  (1)
> **Cross-References:** we discussed (1)
> **Analogies:** imagine (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Identity lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=0)** - [Instructor] Recent studies state that the average number of jobs a person will hold in their lifetime is 12.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=7)** This is important because understanding a user's identity lifecycle with your company will ensure that your users have the right access to the right resources while they are a part of your organization.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=19)** Understanding that their role in your organization will change over time is important to effectively manage their access.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=27)** We'll approach this with an example using our friend Luke.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=32)** Let's start at the beginning.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=34)** You hire Luke at your organization.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=37)** Lucky you.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=39)** When Luke starts at your company, you will need to ensure he has birthright access, as well as any role-based access needed for his new accountant role at your organization.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=51)** Next, Luke is doing such a great job, you promote him from accountant to accounting manager.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=58)** This will require you to update his access to add additional HR information privileges for his direct reports so he can do their performance reviews and see their years of service.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=71)** During Luke's work as a manager, he finds he is really skilled at developing talent, so he decides to transfer into the Learning and Development Team in HR as a manager.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=82)** At this point, you will need to remove Luke's accounting access, as well as his access to his HR privileges for his accounting associates and you will need to add permissions for Luke to have access to the Learning and Development platform as an administrator and give him access to HR information for his new HR reports.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=106)** Finally, Luke gets a great opportunity at a different company to build out a new learning and development organization.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=115)** Once Luke leaves your organization, you will need to remove all access to your organization.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=121)** That includes network access, email access and any remaining system and application access based on his last role.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=131)** However, note that Luke may still need access to some things after he leaves your organization.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=138)** For example, he may need access to his tax documents based on being a previous associate at your organization or he may have pension information he will need access to when he hits retirement age.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=151)** There are many possibilities for what an identity lifecycle may look like at your organization.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=158)** Mapping out different use cases and what permissions you will need to manage during that lifecycle will be important to ensuring access is always appropriate to the part of the lifecycle your users are in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), finally, (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced Tips and Tricks

#### Zero trust
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=1)** - You may know of the saying, "Trust, but verify," when talking about who and what you can rely on.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=7)** There is a concept in security called zero trust that uses that saying.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=12)** Zero trust says never trust, always verify.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=16)** While the concept can be difficult to implement across your entire ecosystem, there are some principles you can leverage that can make a material difference in your security.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=25)** Let's start with the definition: zero trust means that no one is trusted from the outside or inside of your network, and verification is required from anyone trying to access your assets and resources.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=39)** If we did that, we would definitely ensure that people only have access to what they should have.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=45)** If you need a refresher, go back and check out the video on least privilege.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=50)** The first step in zero trust is ensuring every user has to verify who they are.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=55)** You can use a simple automated way to do this, such as single sign-on to make it easier for your users.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=62)** Next, there needs to be proper policies between applications and what they're allowed to share with one another.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=70)** Finally, you would extend zero trust devices, such as servers, routers, et cetera, as well.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=77)** Even though they are all within your network, it doesn't mean they should all have open access to one another.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=83)** As one example, you wouldn't want your sales application to have open access to your HR application.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=89)** Typically, a sales organization should not have detailed associate salary information.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=95)** Understanding the policies and rules of what can be shared and where is the core tenet of zero trust.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=103)** Zero trust may sound simple, but it isn't always easy.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=107)** The biggest risk of zero trust is the reduced productivity of your users.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=113)** People require access to work and collaborate, so locking things down so tightly that they can't get what they need can be a very bad thing for them.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=123)** So, how do you get started?
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=126)** Choose one use case or your most critical asset and make sure that it is locked down to needed users and to only applications and infrastructure it needs to talk to.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=138)** Another approach might be to target a very vulnerable population and ensure that the resources they use are leveraging this model.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=146)** The principles of zero trust can materially improve your security when implemented well.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=153)** Making sure you understand users, applications, and infrastructure will help you implement appropriate rules.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=160)** Just make sure to keep employee productivity in mind and proceed with caution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (1), this, (1), finally, (1), require (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (2)
> **Best Practices:** make sure to (1)
> **Warnings:** caution (1)
> **Speakers:** - you (1)

#### Role mining
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=0)** - [Speaker] A recent study showed that most organizations believe that 85% of their users have some excessive privilege in their organization.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=11)** Role mining is an opportunity for an identity and access management analyst to review what users should have access to and what they are actually using in your organization to optimize user permissions.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=24)** In other words, we use data about what users are consuming through accounting to determine the profile they should have.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=34)** Role mining is an analytical process to review user and resource relationships to determine or modify user permissions.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=43)** The concept of role mining is to automate the analysis against your data set versus trying to do manual audits.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=51)** There are two key concepts that can be used with role mining, auditing access based on roles and modifying access based on actual usage.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=63)** Auditing access based on roles is used primarily in organizations that leverage role-based access.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=70)** If you have a clear outline of which roles require which access, it is a relatively straightforward process to have your identity and access management system audit those roles across your user's current roles.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=84)** I would recommend that you do this kind of audit on a quarterly basis to ensure that users have not moved in their identity life cycle and permissions are as accurate as possible.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=95)** Once you have analyzed what resources users are actually accessing, the other role mining practice is to modify their role based on the permissions they require.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=108)** This would mean you would add permissions that are being used as well as removing permissions to resources that the users were not using.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=116)** A key result of this analysis is being able to optimize your organization's birthright access profiles for different roles.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=125)** As a user, it means you get the right access you need when you start working.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=130)** As an administrator, it means you know that your organization roles don't have excessive access.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=137)** Let's check in with our friend Luke.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=140)** If we look at Luke's previous permissions, which included access to two bank resources and a tax application, a role mining process may see that Luke regularly accesses one of the bank resources and the tax application, but has not accessed the other bank resource in over six months.
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=161)** In this case, the role mining analysis would recommend that you remove access to the unused resource and consider if modifying the accountant role makes sense as well.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=172)** Being able to analyze your user's permissions to resources and how they use them can significantly reduce the security risk in your organization.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=183)** By ensuring that people have the appropriate resources needed for their role when you audit, and in the case where they are not using them, they can be automatically modified and or removed as relevant.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (1), case, (1)
> **Definitions:** is an  (2), in other words (1), is a  (1)
> **Speakers:** - [speaker] (1)

#### Conditional access and just-in-time access
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=0)** - [Instructor] Imagine how much attention your house would get if you always left your front door open.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=6)** People may see that as an opportunity to get in at any time.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=10)** Access to resources can be the same.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=13)** If you have always-on access, it allows more opportunity for attackers to take advantage.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=20)** Fortunately, there are ways to minimize this risk.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=24)** Conditional access is one way and just-in-time access is another.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=30)** Let's talk about each one individually.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=33)** Conditional access is a set of rules and conditions that must be met in order to gain access to various resources and services.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=41)** To gain access, the user must ensure all conditions are compliant.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=45)** For your reference, conditional access is most common with Microsoft Active Directory and Azure, as well as their Intune product for mobile devices.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=56)** Conditional access can block or allow access.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=61)** It can require multifactor authentication, it can require a compliant device, or it can restrict a user session.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=69)** Sometimes it can even restrict access based on a location.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=74)** Let's go through a few examples for clarity.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=77)** One example is when conditional access requires that a user's laptop have the latest patches or access is blocked.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=85)** Another example would be when conditional access requires someone with administrative privileges to use multifactor authentication versus a regular user only having a single factor.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=99)** Lastly, if there was some weird behavior happening with a user sign-on, conditional access may limit that user and not allow them to reach the internet until the machine had been scanned for malware.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=113)** Just-in-time access works differently.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=116)** Just-in-time access limits the period of time someone can access a resource using a predefined set of time based on the resource or use case.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=128)** An example might be when a system administrator needs to use an elevated role to complete a task.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=135)** That administrator would check out the elevated role for say two hours to complete that task.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=142)** Let's be honest about this one.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=145)** Doing this type of just-in-time access without an automated solution would be really hard.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=152)** Most security teams will look for an automated solution to manage the time periods for different resources.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=160)** An especially popular use of this automated solution is a request access feature that allows users to request access to something outside of their normal work functions without adding burdensome approvals.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=176)** The reason this works is in addition to the access being for a limited time, the request for access is logged and can be audited.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=185)** Using controls like conditional access and just-in-time access allow organizations to minimize risk by requiring certain compliance measures or by limiting the exposure of time to their environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), require (2), case. (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### An important side note on passwords
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=0)** - [Narrator] We've talked a lot in these videos about access control, including authentication, or proving who you are, what you know, and sometimes what you have.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=11)** The part of authentication that is what you know is a password or passphrase.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=17)** Passwords are almost always the weakest link of security controls because they involve a person who wants something easy to remember.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=26)** Did you know that 89% of web application breaches involved some sort of credential theft?
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=34)** That's a lot.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=36)** To help combat this, we can use things like multifactor authentication.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=42)** And if we go back to the very beginning, it all starts with password habits by the user.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=48)** Let me provide you three opportunities to make passwords easier for your user.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=55)** First, introduce passphrases instead of passwords.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=60)** We are taught that our passwords need 12 or more characters, a number, a special character, et cetera.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=69)** That's hard to remember.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=71)** How about we just make passphrases instead?
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=75)** Instead of having to remember something like this with the at signs and the numbers, why not just make a sentence?
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=84)** My one salamander's name is Jake.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=87)** Those spaces? They're special characters too.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=91)** I'll bet you can remember that.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=94)** And attackers can't find those words all together like that in any dictionary.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=100)** One more for practice, because this is so important.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=104)** I eat oatmeal 5 days a week.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=108)** Voila, easy to remember and hard to guess.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=113)** Next, let's talk about password vaults, also known as password managers.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=120)** These little gems are an amazing tool to use as the tool requires a user to only remember one password.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=129)** That's right, I said one.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=132)** Password vaults are just like a bank vault.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=135)** They have one master password.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=138)** Think of it like a single combination that only the user knows.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=142)** All the rest of the user's passwords are in a vault and protected.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=147)** As long as that master password is long and secure, use a passphrase here too, then no one should get access to your vault.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=157)** I personally have a password vault and it has over 300 passwords in it.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=162)** I don't have to remember more than one.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=165)** Some popular password vaults out there are things like LastPass, 1Password, Dashlane, Keeper, and others.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=176)** A few bonus pieces of these vaults are that most of them have a mobile app, so your passwords go everywhere with you.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=184)** Also, some are even free for individual users so they can be protected at work as well as at home.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=192)** One, watch out!
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=194)** If the user forgets their master password, no one else has it, so make sure it is memorable.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=202)** The last password opportunity for you, wait for it, is to get rid of passwords entirely.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=209)** Yes, you heard me correctly.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=212)** There is an ongoing change in the password landscape to go passwordless.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=217)** This means that instead of a password, you can leverage biometrics, an authenticator application, or a security key called FIDO2 keys in place of a password.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=231)** We'll assume biometrics for our purposes here, although any will work, so replace as you see fit.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=239)** The process is fairly straightforward.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=242)** First, during registration, you create a device-specific private key using a biometric or PIN that is held on your computer and only there.
>
> **[4:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=254)** When you log in, you enter your username.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=258)** Then you provide your biometric or PIN, which unlocks that private key, and tells the identity provider you are who you say you are and grants you access for a limited time.
>
> **[4:31](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=271)** During that time, you must provide a biometric or authenticator or FIDO2 key gesture and you will receive a token in the background that provides you access to your resources.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=285)** The nice part about passwordless is that it doesn't have to be all or nothing.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=290)** You can roll it out by population or by individual without any real overhead, other than ensuring the device being used has that capability.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=300)** The one watch out here is to ensure there is a backup in case you need to recover your key.
>
> **[5:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=308)** Passphrases, password vaults, and passwordless are all ways to simplify the user experience without sacrificing security.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=318)** I highly recommend that you consider one, two, or all three of them as part of your identity and access management strategy.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=327)** For additional information, check out NIST's special publication 800-63B Rev. 3.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), protected (2), private (2), this, (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** fido2 (2), pin (2), nist (1)
> **Definitions:** is a  (2), known as (1), is an  (1), means that (1)
> **Analogies:** just like (1), think of it like (1)
> **Warnings:** watch out (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=1)** - We've talked about a lot of different concepts today.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=6)** Take a minute to congratulate yourself on all you have learned.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=10)** With so many new ideas, how do you get started?
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=14)** My first bit of advice is to not try to boil the ocean.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=18)** Start small, try things to ensure they work, and then you can scale them once you have the process down.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=27)** Let's go over four things you can go back to your company right now and start implementing.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=33)** First, you need to know what you have.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=36)** Make a list of your user types, especially critical roles such as a system administrator with elevated access.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=44)** Make a list of your key systems for those users with use cases for their workday and their habits.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=51)** Second, determine how you are going to implement access controls.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=56)** Which approach works best for your organization?
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=59)** That will help outline the approach you will take for your users from the beginning using a consistent process.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=66)** Third, set a password policy.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=70)** There's a lot of discussion right now about what the right answer is.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=74)** If you can't go passwordless right now, I suggest you require passwords or passphrases of at least 14 characters that only have to be changed once per year or in case of a security incident.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=87)** You can check out NIST Special Publication 800-63B guidance for this.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=94)** Lastly, take those users with elevated access and separate their normal user accounts from their elevated user accounts.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=103)** You may call them A accounts, where the A stands for administrator.
>
> **[1:48](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=108)** That way you can monitor what happens when that user is leveraging their elevated privilege.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=114)** That's critical when there is a security incident.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=118)** Identity and access management isn't just a project, it's a program.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=123)** It's a journey that will take time and effort.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=127)** If you leverage the principles outlined in this course, you will have standard processes and a strong foundation to apply the principles one by one.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=137)** Good luck on your journey.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1), this. (1)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1), is a  (1)
> **Env Vars:** nist (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)
> **Speakers:** - we (1)


## Path Context

### In [[Navigating the Cybersecurity Threat Landscape]]
← [[Learning the OWASP Top 10]] | **4 of 8** | [[Supply Chain Cybersecurity- Preventing Supply Chain Attacks]] →

### In [[Cybersecurity Fundamentals]]
← [[IT Security Foundations- Network Security]] | **9 of 12** | [[TLS for Beginners- Securing Network Communications]] →

### In [[Networking and Administration Fundamentals]]
← [[Server Administration Essential Training]] | **6 of 10** | [[Learning Virtualization]] →

## Appears In

- [[Navigating the Cybersecurity Threat Landscape]]
- [[Cybersecurity Fundamentals]]
- [[Networking and Administration Fundamentals]]

## Related Courses

_Courses sharing skills:_

- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Identity and Access Management (IAM)
- [[Azure for Architects- Security and Identity Management with Microsoft Entra]] — Identity and Access Management (IAM)
- [[Microsoft Azure- Identity and Access Management]] — Identity and Access Management (IAM)
- [[Microsoft Azure- Security Concepts]] — Identity and Access Management (IAM)
- [[AWS for Developers- Identity Access Management (IAM)]] — Identity and Access Management (IAM)

---

[↑ Back to top](#)