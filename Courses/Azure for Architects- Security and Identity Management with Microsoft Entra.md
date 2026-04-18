---
type: course
slug: azure-for-architects-security-and-identity-management-with-microsoft-entra
url: "https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra"
duration_minutes: 100
duration: 1h 40m
level: Advanced
updated: 10/29/2024
learners: 13855
skills:
  - Cloud Security
  - Microsoft Entra ID
  - Multi-factor Authentication
  - Identity and Access Management (IAM)
exercise_files: false
tags:
  - course
  - topic/cloud-computing
  - topic/security
  - topic/software-development
  - skill/cloud-security
  - skill/microsoft-entra-id
  - skill/multi-factor-authentication
  - skill/identity-and-access-management-iam
status: not-started
created: 2026-04-17
---

# Azure for Architects: Security and Identity Management with Microsoft Entra

> Providing the right resources to the right people is the foundation of a cloud infrastructure. In this course, information technology expert and trainer Gary Grudzinskas presents the information that you need to build your corporate identity structure and ensure the safe and productive access to your Azure resources. Learn how to provide application access and secure the availability of Azure reso

> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra) | 1h 40m | Advanced | 14K learners

## Instructor

- [[Gary Grudzinskas]]

## Skills Covered

- Cloud Security
- Microsoft Entra ID
- Multi-factor Authentication
- Identity and Access Management (IAM)

## Table of Contents

### Introduction

#### Security and identity management with Microsoft Entra
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=0)** - Are you feeling exhausted managing your company identities?
>
> **[0:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=3)** If so, you are in the right place.
>
> **[0:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=6)** In this course, I will teach you the new Microsoft Entra ID and the Entra suite of products, which will help you to secure and manage your identity infrastructure.
>
> **[0:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=18)** I will tell you how to automate the employee lifecycle, work closer with customers and partners, protect your identities, and make your employees more productive from day one.
>
> **[0:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=31)** Microsoft is now embracing an identity-centric architecture in Azure, so there is no better time to learn this than now.
>
> **[0:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=42)** I'm Gary Grudzinskas.
>
> **[0:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=44)** I'm inviting you to take this Azure journey with me.
>
> **[0:48](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/security-and-identity-management-with-microsoft-entra?u=76281980&t=48)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - are (1)


### 1. Microsoft Entra ID Authentication

#### Understanding Microsoft Entra ID authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=0)** - [Instructor] Understanding Microsoft Entra Authentication.
>
> **[0:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=4)** I think the most important thing to provide context of what we're doing here is this word right here, or a double hyphenated word, identity-centric.
>
> **[0:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=15)** What this means is your identity and your customer's identity, your partner's identity, your employees identity are going to be central to their access.
>
> **[0:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=28)** We're talking network access, application access, where they can log in, where they can't log in, what hours they log in, what they look like once they are signed in to your network.
>
> **[0:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=41)** That's why it's more important now than ever to understand how Microsoft deals with identities.
>
> **[0:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=49)** I want to take you through basically how this course is going to work.
>
> **[0:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=53)** First off, we're not going to get bogged into details of exactly how you set this or that up.
>
> **[0:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=59)** What I want you to have is a knowledge of what is available to you with Microsoft Entra.
>
> **[1:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=66)** You know when and where to use each one of these products, and instead of just a PowerPoint that spells out everything that you want for that particular product, what I'm going to do is show you inside the product itself.
>
> **[1:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=83)** Now, let's take a look at identities.
>
> **[1:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=86)** This is my own personal definition of identities, but I think it helps you understand what we're talking about when we look at identities.
>
> **[1:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=95)** Think of a person's persona.
>
> **[1:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=98)** They log in with certain credentials and they're going to have attributes access according to those credentials they log into.
>
> **[1:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=109)** Their identity is going to dictate what data they can access, what they can do, and what they can see inside of there.
>
> **[1:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=117)** We should differentiate between authentication and authorization.
>
> **[2:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=122)** Authentication, you are who you say you are.
>
> **[2:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=125)** You are authenticated.
>
> **[2:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=127)** Once you're authenticated, well, what can you do according to your identity?
>
> **[2:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=133)** These become more important because Microsoft Azure is shifting towards identity-centric, so we have authorization and authentication wrapped within the identity infrastructure now.
>
> **[2:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=150)** The new product to take care of identities in Microsoft Azure is called the Entra ID, and this is the heart of Microsoft Azure identity infrastructure.
>
> **[2:43](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=163)** I want you to think of it like this.
>
> **[2:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=166)** Identity as a service.
>
> **[2:48](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=168)** We don't have IaaS, which is infrastructure-as-a-service, but this really helps you.
>
> **[2:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=176)** All your identity needs are in one place right now and that should be looked at as an identity-as-a-service.
>
> **[3:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=185)** This is separate from Active Directory, both the Active Directory in Azure and your local on-premises Active Directory directory services, and that is because we used to separate the identities.
>
> **[3:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=202)** That was one interface, one thing we dealt with, and then all the access and a lot of the security was another interface and we just kind of brought the identities into that and it's the way you should look at this when we're talking about identity-centric infrastructure.
>
> **[3:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=221)** Now, Entra ID is basically where you keep your identities, but now, we have this, an Entra Suite and these are products that are going to help you manage your identities.
>
> **[3:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=234)** Let me show you the pricing list and the different features available in Microsoft Entra.
>
> **[4:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=241)** I am inside of a webpage from Microsoft and I have the link in here for you.
>
> **[4:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=247)** What I want to do is just show you basically what we're talking about here.
>
> **[4:12](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=252)** If you had Azure Active Directory, you had P1 and P2, and it's the same thing with the Entra ID.
>
> **[4:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=258)** You're going to get a few more services with a P2 than you do with the P1.
>
> **[4:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=263)** Here's what's different for you.
>
> **[4:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=265)** The Microsoft Entra Suite, each one of these is per user per month.
>
> **[4:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=270)** The suite has to have P1 or P2.
>
> **[4:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=275)** I'm recording this in the United States, so it's going to be dollars.
>
> **[4:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=279)** It'll be in your currency when you come to this website, but this is in addition to the P1 and P2 license.
>
> **[4:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=286)** Now, let's scroll down to see what you get.
>
> **[4:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=289)** Over on the left-hand side, these are all the major things that you do to identities now.
>
> **[4:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=296)** It's not just about the identity itself, it's what you can do with it, how you can govern it, how you can monitor it, et cetera.
>
> **[5:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=305)** P2 is going to have certain things that are not included in P1, but it's good idea to scroll down here to discover what is available to you with these different license levels that you have.
>
> **[5:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=320)** We're going to be going over all of these and giving information about each one of these different products.
>
> **[5:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=327)** So I think just showing you this site, telling you that you can get the ID Free if you would like and discover for yourself if you want a P1 or P2 license.
>
> **[5:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=339)** Now, this might be a little bit new to you.
>
> **[5:43](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=343)** These standalone products that are contained within the suite.
>
> **[5:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=347)** So if you just need one or two of these, you're fine.
>
> **[5:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=350)** The Entra Internet Access.
>
> **[5:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=352)** So the identity dictates what applications your users can have according to their identity on the internet.
>
> **[6:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=362)** The Private Access is what applications you have that are private, probably on-premises or up in the cloud and have a zero trust network according to the identity.
>
> **[6:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=376)** And then we have the Governance.
>
> **[6:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=379)** There's some good governance with the P1 and P2, but this extra, add-in feature, that's when we're talking about AI and machine learning.
>
> **[6:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=388)** That's when we're talking about automation of your identity infrastructure, and then the Verified ID, that is included with the P1 and P2, but if you're going to do facial recognition, then you're going to need this add-in that you see here.
>
> **[6:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=404)** And last thing to show you.
>
> **[6:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=406)** Additional Microsoft Entra products.
>
> **[6:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=409)** With those, we have the External ID.
>
> **[6:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=411)** Think of this as the business-to-business.
>
> **[6:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=414)** Your customers, your partners, and maybe some guests.
>
> **[6:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=418)** We used to just do this with a guest account, right?
>
> **[7:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=420)** And now, we have an External ID that we can do a lot more things with.
>
> **[7:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=425)** We have Permissions Management and this allows you to interact with the different cloud providers: AWS and the Google Cloud Platform.
>
> **[7:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=436)** We have the Workload ID, which, your workloads can actually have an ID that you deal with as you would deal with any other identity.
>
> **[7:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=447)** And then we have the Microsoft Entra Domain Services.
>
> **[7:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=451)** This allows you to do a lot of the things, group policy and things like that, that you can do with your on-premises Active Directory.
>
> **[7:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=462)** So it's a great technology if you're going to lift and shift up to the cloud and go cloud-first infrastructure.
>
> **[7:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication?u=76281980&t=471)** So that is a look at how we're going to conduct the course and a general idea of the Microsoft Entra ID and the Entra Suite of products.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), private (2), this. (1), this, (1)
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** think of it like (1)
> **Speakers:** - [instructor] (1)

#### Understanding Microsoft Entra ID authentication options
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=0)** - [Instructor] Here is kind of what's changed when you're dealing with identities and managing them in Microsoft Azure.
>
> **[0:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=8)** All identities, all application access, all the policies are now in one place, and that place is the Microsoft Entra Admin Center.
>
> **[0:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=21)** The idea is this, that you don't have to spread yourself around and have four different open windows in order to do something with the identities in Microsoft Azure.
>
> **[0:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=34)** It's all in one place, And I might say that it has been separated from the general Azure interface that you're dealing with.
>
> **[0:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=45)** So let's go in there and have a look.
>
> **[0:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=49)** This is it right here.
>
> **[0:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=50)** You get here by going into entra.[microsoft.com](https://microsoft.com).
>
> **[0:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=55)** Notice in that URL there, there's nothing about Azure.
>
> **[0:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=58)** So this is somewhat separated from the portal itself, and you can see the interface is a little bit different.
>
> **[1:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=64)** This is nice for you if you are dealing with identities and have to manage a lot of customers, a lot of users, and a lot of partners.
>
> **[1:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=75)** We start off by home and we can see the different things that Microsoft is telling you and what they want to show you and what they want to highlight.
>
> **[1:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=88)** We have an identity score, and notice mine is somewhat low here.
>
> **[1:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=92)** We'll talk about those identity scores as we go on.
>
> **[1:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=95)** There's a few things I want to show you inside of here before we get into the details of the specific products and what they do.
>
> **[1:43](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=103)** We can go to what's new.
>
> **[1:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=105)** The top announcements, let me tell you what these are about.
>
> **[1:48](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=108)** The Security Service Edge, what that's going to do is by your identity, it'll tell you what networks you can get on just by your identity.
>
> **[2:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=121)** That has to do with the identity centric architecture that is being pushed down.
>
> **[2:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=128)** The second one here is the custom workflows.
>
> **[2:12](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=132)** So while somebody enters a company, maybe gets a promotion or a demotion within the company or a job description that's a little bit different, that workflow can be automated as they move around the company.
>
> **[2:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=150)** And then finally, when they leave the company, hopefully to get a better job or leave the company 'cause eh, you know, they're not working out, well then that action, then the identity can be removed, it can be archived or whatever that you have in there.
>
> **[2:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=167)** This is something that you are going to be dealing with if you're going to get into this interface.
>
> **[2:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=173)** The MFA is going to be required in order to get into interface, no exceptions.
>
> **[3:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=182)** Everybody's going to have to do this.
>
> **[3:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=183)** They're going to roll it through and by 2025 then everybody will have to do it.
>
> **[3:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=189)** So you should set up MFA now in order to get into this.
>
> **[3:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=194)** And scrolling down, we just see a few announcements and release highlights, talking about the different ways people can authenticate into Microsoft Azure now.
>
> **[3:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=204)** I'm going to come down here to protection.
>
> **[3:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=208)** From protection, I'm going to say show more and we're going to go to authentication methods that we can see right here.
>
> **[3:37](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=217)** These methods, there's not a lot new here from Microsoft Azure Active Directory, but a few of them are being highlighted more than before.
>
> **[3:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=230)** Microsoft really wants to move to password-less identification or password-less authorization.
>
> **[3:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=238)** So we have the pass key.
>
> **[4:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=240)** Once you have a little clip in order to do this, the Microsoft Authenticator, SMS, Temporary Access Pass, we'll talk a bit about that and what I want to show you here is say you click on this and in order to enable that particular form of authentication inside of your network, simply click this button and then you can set up individuals by group or their individual account in order to use that.
>
> **[4:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=269)** So this is your first look at the Microsoft Entra Admin Center.
>
> **[4:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=274)** Now let's go back and talk specifically about a few of these authentication methods.
>
> **[4:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=280)** The first one, of course, username and passwords.
>
> **[4:43](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=283)** Password authentication, you can't disable this feature.
>
> **[4:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=287)** It's still somewhat of the basis of logging in.
>
> **[4:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=292)** The problem with username and passwords is users have to remember their passwords and you're kind of in a catch 22.
>
> **[4:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=299)** The more complicated or complex you make their password, it gets up to a certain point, it's more secure, more secure until you reach the point where they have to write them down.
>
> **[5:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=309)** Then it'll be on a post-it note under their keyboard or something like that, makes them less secure as you're going along.
>
> **[5:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=317)** Username and password susceptible to many attacks.
>
> **[5:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=321)** We're all trying to go to MFA multifactor authentication or password-less if we possibly can.
>
> **[5:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=329)** The Authenticator app, if you're not familiar with this, it's just a little app you get on your iPhone or you get on your Android phone and it goes through there and it works in two different ways.
>
> **[5:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=341)** It can send you a little pass key and that pass key, you type into whatever resource that you're trying to get into, or it can prompt you and say, hey, was this you trying to get into this particular application.
>
> **[5:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=356)** So the Authenticator app, a great way to set up MFA.
>
> **[6:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=361)** We have something relatively new and that's Hello for Business.
>
> **[6:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=366)** Hello has been around for a while.
>
> **[6:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=369)** We're talking about a personal way to sign in.
>
> **[6:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=371)** This can be bound to a device.
>
> **[6:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=374)** So usually it's somebody with their laptop and they have Windows 10 or Windows 11, or hopefully Windows 12 on their laptop.
>
> **[6:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=382)** And with that device, with that camera, they can look at the face of the individual and just log them in that way.
>
> **[6:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=391)** So that's a pretty seamless way for people to log in.
>
> **[6:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=395)** The other one that might not have been obvious is, the temporary access pass.
>
> **[6:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=400)** This is used kind of for a specific case and that case is when somebody has got theirselves in a jam, they require MFA to log in, but they don't have their other factoring device or method to get in.
>
> **[6:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=418)** Well, you can get them in temporarily, get access to their user account so they can make those changes.
>
> **[7:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=426)** So that's what the temporary access pass is.
>
> **[7:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=429)** Now this diagram shows you what is secure for you to authenticate your users, bad, password bad, good password, and an SMS text message or a voice call to make sure they are who they say they are.
>
> **[7:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=449)** A little bit better than that is the Authenticator app that we just talked about, software access tokens and hardware access token, hardware in preview as the recording of this course.
>
> **[7:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=462)** The best, password-less, the authenticator with the iPhone sign in, Windows Hello, the secure key that you take along with you and any type of certificate based access.
>
> **[7:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authentication-options?u=76281980&t=476)** So that is a general look at the Microsoft Intra Admin Center and the different forms of authentication that you can use and decide which one works best for you in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), interface (4), this, (3), let (3), this. (2)
> **Env Vars:** mfa (5), sms (2), url (1)
> **UI Navigation:** go to (3), click on (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (3)
> **Code Identifiers:** iphone (2)
> **Definitions:** is a  (2)
> **URLs:** [microsoft.com](https://microsoft.com) (1)

#### Microsoft Entra ID security solutions
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=0)** - [Instructor] We're going to take a look now at different security solutions that you have with the Microsoft Entra identities.
>
> **[0:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=8)** I want to first go over this, and these are the five steps that you take in order to secure your identities.
>
> **[0:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=16)** The first one is strengthen the credentials, meaning password complexity that we have.
>
> **[0:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=23)** The reduction of the attack surface.
>
> **[0:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=26)** What we're looking at here is legacy authentication gets to be a problem.
>
> **[0:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=32)** If you have authentication that uses some old protocols, that increases your attack surface.
>
> **[0:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=39)** So, you should use and modernize your identities as much as possible, especially in this era of identity centric environments.
>
> **[0:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=50)** We have an automation of a threat response.
>
> **[0:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=54)** So, if you are in a situation where you have a lot of employees, you have many, many, many things going on.
>
> **[1:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=63)** You can't keep track of breaches.
>
> **[1:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=65)** You can't keep track of everything like that.
>
> **[1:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=68)** So, if you can automate the response to a risky sign in, then that makes your network, identity-wise, more secure.
>
> **[1:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=79)** We utilize cloud intelligence, and this is something new, something AI, if you will.
>
> **[1:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=84)** How this works is Microsoft has a vast amount of analytics analyzing a vast amount of data, people trying to break in, people being able to break in, not being able to break in.
>
> **[1:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=99)** So, by using that machine learning with that, then those risky behaviors can surface right away.
>
> **[1:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=109)** You don't have to go look through the logs and find out, oh, we were attacked a couple weeks ago.
>
> **[1:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=114)** Enable end user self-service, and the self-service, one, prevents calls to your help desk, and two, makes your network more secure because people, if they have something happen with their password, then they can go in there and they can change it themselves.
>
> **[2:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=133)** Let's take a look at different products and different services within the Entra universe.
>
> **[2:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=141)** First off, we have Entra smart lockout.
>
> **[2:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=144)** This is on by default for the free version, the P1 version and the P2 version, but you can customize it.
>
> **[2:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=150)** I'm going to show it to you in a second here.
>
> **[2:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=152)** If somebody is trying to guess a password, they're going to have somewhat of a brute force attempt.
>
> **[2:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=159)** Well, this can prevent that.
>
> **[2:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=161)** This can see it, prevent it by locking out that end user, prompting 'em with a, hey, did you forget your password?
>
> **[2:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=170)** So we can rectify this right away automatically.
>
> **[2:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=176)** By default, it's 10 password attempts and then they're locked out.
>
> **[3:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=180)** But that can all be customized, which brings us to the Entra ID Password Protection.
>
> **[3:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=188)** There are passwords globally.
>
> **[3:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=191)** It's a pretty long list and you can guess one thing on that list for bad passwords is the word password.
>
> **[3:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=199)** This is automatically enabled, so nobody can do password as a password.
>
> **[3:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=205)** However, you can customize this and let me give you some examples.
>
> **[3:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=209)** People might do the company name.
>
> **[3:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=211)** Well, you can ban that inside of the password if you want.
>
> **[3:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=216)** People might do their locations or the department.
>
> **[3:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=219)** You can ban those, as well.
>
> **[3:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=221)** Let's go into the Microsoft Entra admin center to see how this works.
>
> **[3:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=226)** We come down here to Protection, and under Protection, we have Authentication methods, and for the authentication methods, we have here Password protection.
>
> **[3:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=237)** This is where you can add banned passwords.
>
> **[4:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=240)** You can see right here, Custom banned password list.
>
> **[4:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=244)** You can also change the smart lockout.
>
> **[4:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=246)** Maybe you want five different attempts before they lock you out.
>
> **[4:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=251)** You can change the duration.
>
> **[4:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=253)** You can change whether this even looks at it or doesn't look at it by Enforced and Audit down here.
>
> **[4:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=260)** So, that's a look at Password Protection and smart lockout.
>
> **[4:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=263)** Let's take a look at some more features that are going to help you with your Microsoft identity.
>
> **[4:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=270)** It's important to deploy self-service password reset, and they have some flexibility for this of how exactly you go about this self-service.
>
> **[4:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=280)** But it is key to the security of your identities.
>
> **[4:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=285)** Because their passwords are kept up to date, it takes the administration out of the equation for the password, and administrators have no business changing passwords.
>
> **[4:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=296)** It should be the business of the end user to do that.
>
> **[5:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=300)** You want the most flexibility in the management of your identity.
>
> **[5:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=305)** We have the ID Protection, and the ID Protection, now we're talking a little bit about automation.
>
> **[5:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=311)** And with that automation, you have something called risky sign-ins and risky users.
>
> **[5:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=317)** The risky sign-in is a sign-in that's reported when there are one or more risk detections reported for that sign-in.
>
> **[5:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=326)** Then you have risky users.
>
> **[5:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=328)** A risky user is reported for either or both of the following.
>
> **[5:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=333)** The user has one or more risky sign-ins and one or more risk detections are reported.
>
> **[5:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=341)** So, this is automatic, the Entra ID Protection, and it's on by default.
>
> **[5:48](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=348)** The second one to show you, this identity secure score.
>
> **[5:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=352)** There are proper ways to secure your identities.
>
> **[5:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=358)** Microsoft knows those policies, so the way you set up your identity infrastructure might not be the best way to do it.
>
> **[6:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=368)** So, this compares what you have with the best practices every 24 hours, and you get this percent number for your identity secure posture.
>
> **[6:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=379)** This way, you not only get informed that, hey, you're not quite doing this as secure as you probably should do, but you get definite ideas on how to improve that identity secure score.
>
> **[6:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=395)** Let's take a look at that inside the admin center.
>
> **[6:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=399)** I'm going to come down here to Identity and we're going to go to Overview, and this is an overview of all your identities.
>
> **[6:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=406)** The Azure AD is now Microsoft Entra ID, and you can see different things that are kind of warning you that there are going to be some changes coming down the pipe that might affect you.
>
> **[6:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=418)** Our secure score, look at that.
>
> **[7:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=420)** We're 92.86, which is pretty good.
>
> **[7:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=424)** I think that's an A, officially.
>
> **[7:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=427)** So, what this says is that I have set up my identities pretty good according to what Microsoft deems as best practices.
>
> **[7:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=438)** I'm going to scroll down here a little bit more, and this is where we get into the Identity Protection, and under Identity Protection, this is not an active networks and nobody has tried to breach my network as of yet, but think how convenient this is for you that now, you can find out the number of attacks blocked, the number of users protected, the mean time to remediate high risk, number of high risk users, and you can actually come down here and see where in the world are these people trying to break into my network?
>
> **[7:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=475)** I would think they'd be smart enough to use a VPN so they don't give out their location for that.
>
> **[8:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=481)** You have the recommendations.
>
> **[8:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=483)** So, if somebody's trying to hack into my network just by one place, I can go and I can find out, okay, well this is what I need to do about my identities being hacked.
>
> **[8:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=496)** And down here, any kind of recent activity as far as people logging into your network are going to be right here.
>
> **[8:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=504)** We have two ways of making policies for this, the user risk policy and the sign-in risk policy, and both of those can be customized.
>
> **[8:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=515)** So, let's take a look at some of the best practices for identity.
>
> **[8:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=522)** Besides all those things that we looked at, the different services that we have through Microsoft Entra, it comes down to this basically.
>
> **[8:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=532)** Don't allow older protocols and use multifactor authentication.
>
> **[8:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=538)** You can use conditional access that says, okay, if they're trying to log in with this ancient protocol to authenticate themselves, uh uh, they're not going to get in or they get less access with that authentication protocols.
>
> **[9:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=554)** Remove older, non-MFA protocols and use multifactor authentication for all the administrative accounts and all the privileged accounts that you have in your network.
>
> **[9:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-id-security-solutions?u=76281980&t=569)** So, that is a look at the different products from Microsoft Entra that can help you secure your identity profile.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), self (4), this, (2), new, (1), default, (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** vpn (1), mfa (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Prerequisites:** set up (2)
> **Versions:** 92.86 (1)
> **Warnings:** warning (1)

#### Recommending a multifactor authentication (MFA) solution in Microsoft Entra
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=0)** - [Instructor] We're going to talk about recommending a multifactor authentication, or MFA, solution in Microsoft Entra.
>
> **[0:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=7)** Let me give you this quote, and this is by me.
>
> **[0:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=10)** "There is no greater protection you will provide for your identity security than using multifactor authentication."
>
> **[0:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=20)** You are using it commonly in your online life now.
>
> **[0:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=24)** Every once in a while, you have to get a text message or get an email, something to verify your account, and that is triggered by maybe having a new device trying to get to an old website that you were a part of.
>
> **[0:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=40)** So multifactor authentication in Azure, the user is prompted during or after the sign in process for some additional form of identification.
>
> **[0:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=51)** The reason we do this is passwords, and only using passwords and usernames, is very insecure.
>
> **[1:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=61)** The good news about this is users can self-register to use MFA, they can decide what type of challenge, that's the second factor in the MFA, that they want to use.
>
> **[1:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=74)** And with this, you can utilize a fine-grained control with conditional access.
>
> **[1:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=81)** And here is how this works.
>
> **[1:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=85)** We go by something you know.
>
> **[1:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=87)** You know your password, you know your username, and those security questions, I'm sure you got this before, "Who was your favorite teacher in grade school?"
>
> **[1:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=98)** "What is the first address you were born in?"
>
> **[1:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=101)** "How many brothers and sisters do you have?"
>
> **[1:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=104)** Things like that, that you know.
>
> **[1:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=107)** Also, something you possess.
>
> **[1:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=109)** It could be one of those USB keys that you plug into your computer.
>
> **[1:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=113)** You have a smartphone, and with that smartphone, you can use something like the Authenticator app.
>
> **[2:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=120)** You can actually have your laptop that has a hardware key, something you have.
>
> **[2:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=126)** And then we have something you are.
>
> **[2:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=127)** We have Iris, your i-readers, we have fingerprints, we have other biometrics including facial recognition.
>
> **[2:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=137)** So all of those things help identify you, and all of those things can be used as an extra factor in authenticating somebody.
>
> **[2:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=149)** Let's take a look at all the different authentication methods that you can and possibly cannot use with multifactor authentication.
>
> **[2:37](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=157)** I'm going to take you to this webpage, and I want to show you this because not all things can be used as your primary form of authentication, and not all things can be used for the secondary authentication.
>
> **[2:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=172)** You should make yourself familiar with this list.
>
> **[2:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=175)** The Microsoft Authenticated passwordless.
>
> **[2:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=179)** That is an authentication in and of itself, and you can't use a secondary authentication.
>
> **[3:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=186)** That's because the new technologies between passwordless don't require an MFA.
>
> **[3:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=193)** Some of these other things, the Authenticator Lite can't be the primary.
>
> **[3:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=197)** OATH hardware can't be used as a primary, and a voice call, that can't be used as a primary.
>
> **[3:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=204)** The password, and this makes sense, you can't have two passwords in order to authenticate into your identity.
>
> **[3:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=213)** Let's go back and see how you can trigger and use multifactor authentication.
>
> **[3:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=219)** First off, you have a signal.
>
> **[3:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=222)** The signal tells the interface that you are trying to log into, "Hey, they're going to need MFA for this."
>
> **[3:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=232)** And think about this.
>
> **[3:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=233)** It might be a user, it might be a group that user is part of, it might be the IP location that suddenly they have moved all the way across the country.
>
> **[4:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=244)** It could be a particular application that they're trying to get to, and it could be the new real-time assessment that this is looking like it's a problem, and this might be a risky user and a risky sign-in, so let's hit 'em up for another form of ID.
>
> **[4:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=267)** And then you have the decision.
>
> **[4:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=268)** And the decision tells you, "Okay, since they have that signal, I am going to require MFA, or I'm not going to require MFA."
>
> **[4:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=279)** And the enforcement is all around if you cannot provide another factor to authenticate, another method to authenticate into that network, then they are dumped, or they get some kind of lower standard of access.
>
> **[4:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=298)** Now, some of the questions you need to ask yourself with MFA: What kind of privilege accounts do you have that might require this?
>
> **[5:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=308)** Of course your administrators are going to require this, but pretty much the rule of thumb is if you have access that's going to affect or can affect anything else on your network, you probably need MFA.
>
> **[5:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=323)** Do you have any applications that are very sensitive?
>
> **[5:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=326)** You're going to need MFA to get into that application.
>
> **[5:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=331)** How capable are your users in MFA?
>
> **[5:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=335)** Because in reality, if you require MFA for almost anything an end user does, they're not going to be happy about that.
>
> **[5:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=347)** So you don't want to just require this for everything inside of your network.
>
> **[5:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=353)** You might have compliance reasons.
>
> **[5:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=355)** You might have some kind of financial, some kind of government entity that you do business with, and they require MFA.
>
> **[6:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recommending-a-multi-factor-authentication-mfa-solution-in-microsoft-entra?u=76281980&t=366)** So that's a look at using multifactor authentication in Microsoft Entra.

> [!info]- Semantic Content
>
> **Code Keywords:** require (8), let (4), this, (2), this. (2), while, (1)
> **Env Vars:** mfa (13), usb (1), oath (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Entra authentication for a hybrid environment
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=0)** - [Instructor] We're going to take a look now at a hybrid environment.
>
> **[0:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=3)** Of course, that is where you have your active directory domain services with its identities on-premises, and then you have your Entra ID identities that are in the cloud, and those two should be synchronized up.
>
> **[0:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=20)** Now, the different authentication protocols that we have for that, we have three.
>
> **[0:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=24)** The first one is password hash synchronization.
>
> **[0:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=28)** A hash is simply the result of a digest on a password.
>
> **[0:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=34)** Let me explain that a little bit better.
>
> **[0:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=36)** You have a password, you can run an algorithm on that called the digest, and what that outputs is what's called a hash.
>
> **[0:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=45)** Now, you cannot take that hash and get a password out of it, but it will identify what the password is in a way.
>
> **[0:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=55)** So you have a password on-premises, you have a password in the cloud, they run the same digest on the two passwords, and you simply match the hash from that.
>
> **[1:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=66)** And that is how you can authenticate, people log it into the cloud with their on-premises username and password.
>
> **[1:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=76)** It's the simplest way to deploy this synchronization between your identities on-premises and your identities in the cloud.
>
> **[1:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=86)** They can use the same username and password and there is no additional infrastructure to deploy.
>
> **[1:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=93)** Compare that with pass-through authentication.
>
> **[1:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=96)** This is where the password is actually authenticated on-premises on a domain controller.
>
> **[1:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=105)** That software agent needs to be deployed and the user is not really validated in the cloud.
>
> **[1:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=111)** The cloud simply asks your domain controller, is this a good username and password?
>
> **[1:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=118)** Now, where would you want to use this?
>
> **[2:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=120)** To figure that out, it's a pretty simple context that you put this in.
>
> **[2:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=125)** The user is authenticated from a domain controller, which means that if you have account states that have to be immediately enforced, you kick somebody out of the company, et cetera, well, you're going to need to use pass-through authentication to do that.
>
> **[2:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=142)** If you have very strict password policies, which includes sign-in hours and you want that enforced without question, then you're going to need pass-through authentication.
>
> **[2:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=154)** There's several circumstances, mostly due to security, where you're going to want to use pass-through authentication.
>
> **[2:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=162)** The third method is federated authentication, and this is changing all the time, the authentication process from a separate trusted authenticator.
>
> **[2:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=173)** And think about this now we have Facebook as an authenticator.
>
> **[2:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=177)** We have Google as a trusted authenticator.
>
> **[3:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=181)** So this is being seen more and more often.
>
> **[3:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=184)** It provides additional advanced authentication requirements, and also you can use smart card's authentication or third-party multifactor authentication with this as well.
>
> **[3:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=198)** All of this, all of those sign-on methods, provide seamless sign-on, and this is for your end users.
>
> **[3:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=206)** They can just use their regular username and passwords to log in.
>
> **[3:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=211)** They don't have to have one for on-premises and one for the cloud.
>
> **[3:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=216)** So you don't need any paid additions to do this.
>
> **[3:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=219)** They can do it through their access panel, Outlook on the web, Office 365, the Azure portal.
>
> **[3:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=226)** Most web browsers are going to support this, and there is something new right at the bottom here.
>
> **[3:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=232)** You now can use this with the Entra External IDs.
>
> **[3:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=236)** What that scenario is, is you have a partner with your company, well, guess what?
>
> **[4:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=242)** They can just use their username and password that they have for their company and get into whatever they need from your company in order to do their job and formulate that partnership.
>
> **[4:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=255)** When would you use either one of these?
>
> **[4:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=257)** There's a couple different scenarios.
>
> **[4:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=260)** Pass-through authentication is more secure, sign-in disaster recovery.
>
> **[4:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=266)** So if you're just using hash synchronization, you're not going to recover from sign-in disasters nearly as quickly as you can if it's being authenticated on a domain controller.
>
> **[4:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=280)** If you have leaked credentials and mostly, right here, enforced user level active directory security policies, you're not going to get that with hash synchronization.
>
> **[4:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=292)** However, hash synchronization gives you the cloud-first strategy that Microsoft is pushing.
>
> **[5:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=301)** So the sign in is handled completely through the cloud and you don't have to have any integration with the federation.
>
> **[5:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=310)** Which brings us to this, the Entra Domain Services, this is basically a domain controller in the cloud that you have that is a domain controller, that is the cloud equivalent to the domain controllers you have on-premises.
>
> **[5:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=329)** It's perfect for lift and shift migration when you are taking your whole enterprise, your on-premises, and shifting and lifting that up to the cloud.
>
> **[5:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=342)** If you have LDAP, Kerberos, NTLM, you can authenticate with those protocols with the domain services.
>
> **[5:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=350)** Now to connect, we have Entra ID Connect.
>
> **[5:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=355)** So this is the interface, this is the tool that synchronizes the identities that you have local on-premises to the identities that are in the cloud.
>
> **[6:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=366)** It's very lightweight, and you can use this with pretty much any of the hybrid authentication methods that we talked about.
>
> **[6:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=374)** If you want to monitor this, you use Entra Connect Health, and this provides a robust monitoring of identity infrastructure.
>
> **[6:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=382)** You can set up alerts, you can set up analytics.
>
> **[6:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=386)** You have everything in a centralized location, so if you have trouble with your logins, you can see it right here.
>
> **[6:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=394)** It just requires the Microsoft Entra P1 license in order to have Connect Health.
>
> **[6:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=400)** Now there's something new, the Microsoft Entra Cloud Sync, and this uses a much lighter agent to synchronize those two accounts.
>
> **[6:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=411)** You can have multiple provisioning agents.
>
> **[6:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=414)** Now, compare that to the Entra ID Connect, where you pretty much have one agent doing it.
>
> **[7:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=421)** If you are a large enterprise, that has been a problem for you.
>
> **[7:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=426)** Well, cloud sync can take care of that.
>
> **[7:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=428)** You have a simplified installation because the provisioning agents are lightweight and then the biggest benefit right there, disconnected AD domains can be synchronized now.
>
> **[7:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=441)** What this means is if you have a scenario where your company bought another company and their forest is completely and utterly separated from your forest but yet now you're the same company and you want the same identity, the same Entra ID inside the cloud, you can do that now through the Entra Cloud Sync.
>
> **[7:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=465)** This provides you with the posture of being cloud-first, so it doesn't really support pass-through authentication.
>
> **[7:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-authentication-for-a-hybrid-environment?u=76281980&t=477)** So that's a look at a hybrid authentication from an on-premises active director domain controller up to the Entra ID in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), this, (4), let (1), this. (1), interface (1)
> **Env Vars:** ldap (1), ntlm (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (2)
> **Cross-References:** we talked about (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)


### 2. Microsoft Entra Authorization

#### Understanding Microsoft Entra ID authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=0)** - [Instructor] We're going to take a look at authorization now, and in particular, I'm going to show you a couple products that you can use to grant people outside of your network and your company internal access to your private applications, and also to control what internet access your people have going outside of the corporation.
>
> **[0:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=23)** So it has made things much more simple.
>
> **[0:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=26)** But first, authorization.
>
> **[0:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=29)** Authorization is the act of granting an authenticated party permission to do something.
>
> **[0:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=35)** And in Microsoft Azure, the identity platform, acts as the server.
>
> **[0:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=41)** It handles the end user's information, what kind of access they have, and most importantly, the trust relationship between the two parties.
>
> **[0:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=50)** Now, what does this mean in a practical sense?
>
> **[0:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=54)** It means that now, granting access internally from an external entity is much simplified because the authorization server is Azure itself.
>
> **[1:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=69)** The first one I want to show you is this, the Microsoft Entra Private Access.
>
> **[1:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=75)** An identity-centric, it replaces a VPN, so you don't have to set anything up.
>
> **[1:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=82)** You're going to be amazed how simple this is.
>
> **[1:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=85)** You have adaptive conditional access according to where people are coming from.
>
> **[1:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=89)** You have multifactor authentication for legacy protocols in case your partner has some legacy technology, and a per-app access to different applications that you want to give access to.
>
> **[1:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=107)** So let's go into the Entra Administration Center and take a look at how you set up Entra Private Access.
>
> **[1:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=116)** From a landing page, you come down here and it's under Global Secure Access.
>
> **[2:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=121)** Under Global Secure Access, under Applications, we have Quick Access, Application Discovery and Enterprise applications.
>
> **[2:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=131)** To take the mystery out of this middle one, Application discovery, it's still being worked on, but look for that coming out in the future.
>
> **[2:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=139)** The Quick Access, let's say you just want to give somebody access to an application inside of your network or give them access to the internals of your network.
>
> **[2:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=152)** It's as simple as this.
>
> **[2:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=153)** You just create something up here and then you Quick Access application segment, can go by IP address, FQDN, a CIDR address range, or an IP address range.
>
> **[2:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=170)** So, those are the people you let in.
>
> **[2:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=172)** And you do the IP address here, the ports, the protocol.
>
> **[2:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=176)** It's going to be UDP or TCP, and it's simple as that.
>
> **[3:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=181)** And that's how you can grant access to your internal or private applications to an external identity.
>
> **[3:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=190)** Enterprise applications.
>
> **[3:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=191)** That's where specifically you can say, okay, we have a new application here.
>
> **[3:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=197)** You pointed to the application.
>
> **[3:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=199)** And then the application segment is going to be just how it was before.
>
> **[3:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=204)** So you can grant access to an internal node of your network, if you will, and you can grant access to an application specifically.
>
> **[3:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=215)** Now, the Conditional Access.
>
> **[3:37](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=217)** What has changed under Conditional Access?
>
> **[3:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=219)** I'm going to come up here to protection, go to Conditional Access.
>
> **[3:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=224)** We're going to say Create new policy, and under Create new policy, it's right here.
>
> **[3:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=229)** The network.
>
> **[3:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=231)** You can grant access or different access or use their network that they're coming in from as a condition for conditional access to resources.
>
> **[4:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=243)** So that's all something new and quite convenient.
>
> **[4:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=246)** Now let's take a look at Internet Access.
>
> **[4:12](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=252)** The Internet Access is a context-aware, secure web gateway.
>
> **[4:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=258)** You can have conditional access for different internet apps.
>
> **[4:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=262)** You can have protection from internet apps because you can block them, and a context-aware web filtering mechanism.
>
> **[4:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=271)** Let's go inside the Entra Admin Center.
>
> **[4:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=275)** From the landing page, it's under Global Secure Access again.
>
> **[4:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=279)** We scroll down, and right under Secure, we have Web content filtering policies.
>
> **[4:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=287)** We can just come in here and create a policy.
>
> **[4:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=289)** We can call this policy 1, for lack of a better name, click on Next, and notice that we can be blocked or allowed.
>
> **[5:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=300)** We can simply say Add Rule, and we'll say, just no chat.
>
> **[5:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=307)** We don't want our people to chat.
>
> **[5:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=309)** And take a look at these different possibilities.
>
> **[5:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=311)** This is the context under Context Aware to block these different types of websites that are out there.
>
> **[5:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=319)** And as I'm scrolling down, I know there's one here that has to do with chatting, and if we want to just keep people from chatting on... There it is, chat, right there.
>
> **[5:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=330)** And we just say Add.
>
> **[5:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=333)** And now we have a new rule that says, okay, if there are chatting applications out there on the internet, we have blocked our users from using it.
>
> **[5:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=346)** And we can also allow users to use different types of websites.
>
> **[5:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=352)** So we can categorize what user type it is, what their persona is, if you will, and dictate what type of internet access they have.
>
> **[6:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-microsoft-entra-id-authorization?u=76281980&t=362)** So that's a look at authorization in Microsoft Azure and in particular a couple of products, the Microsoft Entra Private Access and the Microsoft Entra Internet Access.

> [!info]- Semantic Content
>
> **Code Keywords:** private (5), let (5), this, (1), from. (1), this. (1)
> **Env Vars:** vpn (1), fqdn (1), cidr (1), udp (1), tcp (1)
> **UI Navigation:** go to (1), scroll down (1), click on (1)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** node (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Understanding the Microsoft hierarchical structure
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=0)** - [Instructor] When we're talking about authorization and controlling what type of access people have, we need to look at the administration of a network, so the hierarchical structure of Microsoft Azure becomes important.
>
> **[0:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=16)** The Azure Authorization Hierarchy, it goes like this.
>
> **[0:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=20)** We have management groups, and that's usually where you have Azure policy or role-based access control.
>
> **[0:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=28)** Going to look at those a little bit further.
>
> **[0:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=30)** A subscription, which always has a credit card or a billing entity that you charge for everything in that, and you know what a resource group is.
>
> **[0:43](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=43)** It is a container object with resources inside of it.
>
> **[0:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=47)** The Management Group, you can have up to six levels of depth.
>
> **[0:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=50)** You can only have one parent, and you can have many children on here.
>
> **[0:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=56)** The Root Management Group, this is important.
>
> **[0:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=58)** The Root Management Group is always there.
>
> **[1:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=61)** It cannot be moved or deleted.
>
> **[1:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=64)** New descriptions default here, so if you're adding a subscription, you have to explicitly tell it, no, it falls under another management group.
>
> **[1:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=74)** This is usually where you have your tenants, and each tenant is going to have this, and all user permissions are inherited from this management group, so it's important.
>
> **[1:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=85)** A Subscription, single billing unit.
>
> **[1:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=88)** There's really not much else to say under that.
>
> **[1:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=90)** That's who pays for everything.
>
> **[1:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=93)** The Resource Group, of course, is the logical structure.
>
> **[1:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=96)** It contains the resources.
>
> **[1:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=99)** So, your authorization and your hierarchy is going to look something similar to this.
>
> **[1:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=107)** The idea is that the big policies, the corporate policies are going to be under the tenant management group, and then you can break this down according to whatever administration requirements you have for your network.
>
> **[2:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=126)** I show you this because if you get your hierarchy right and it makes logical sense, the maintenance, the administration of your network is going to be simplified.
>
> **[2:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=143)** Now, as far as the identities go, it's going to depend upon where your tenants are, and under your tenants, that's where you can control the identities by all those controls that you have on the root tenant group.
>
> **[2:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-the-microsoft-hierarchial-structure?u=76281980&t=161)** So, that's a look at the hierarchy and how you can use the hierarchy to control the identities in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), this, (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Developing identity solutions with RBACs
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=0)** - [Instructor] We're going to now take a look at, well, how do you administrate your identities and what are some of the best practices to do that?
>
> **[0:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=7)** You do that with role-based access control.
>
> **[0:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=11)** So let's define role-based access control.
>
> **[0:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=14)** It's essentially a collection of permissions.
>
> **[0:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=17)** It lists the actions that can be performed, like read, write, list, and delete.
>
> **[0:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=22)** And it describes how those permissions are enforced.
>
> **[0:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=27)** You define a role to explain what the permissions are for.
>
> **[0:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=31)** So the actual name of the role is going to be somewhat self descriptive.
>
> **[0:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=38)** So by inspection you can tell, okay, well, this role is for this or that.
>
> **[0:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=44)** A role-based access control consists of three things, a security principle, a role definition, and a scope.
>
> **[0:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=52)** So the security principle, that's any entity.
>
> **[0:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=55)** You can assign these to a user, assign them to a group, a service principle for applications, or a managed identity.
>
> **[1:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=64)** The scope is going to be, okay, well, they can do all those things.
>
> **[1:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=68)** What can they do them to?
>
> **[1:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=71)** So this is a set of resources that the access applies to.
>
> **[1:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=75)** And by using a scope, you limit the actions that can be performed by the individual entity or the security principle, so they don't go into places they shouldn't go into.
>
> **[1:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=87)** You can apply for the scope a management group, a subscription, a resource group, or the individual resources themselves.
>
> **[1:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=96)** Now there are built-in roles for identity that follow along all the rules that we just had for RBACs.
>
> **[1:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=105)** And what this is going to do is make it easier for you to manage your identities and choose what administrative roles are available to you so you can follow the idea of least privileged access.
>
> **[2:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=122)** Let's go into the Entra admin center.
>
> **[2:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=125)** From the landing page, right down here under Identity, see that?
>
> **[2:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=129)** Roles & admins.
>
> **[2:12](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=132)** I'm going to choose Roles & admins, and here they are.
>
> **[2:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=135)** I'm going to spread this out so you can see it a little bit better.
>
> **[2:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=138)** It has a description, it has, whether it's privileged or not, and what type of role it is.
>
> **[2:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=144)** You can create your custom roles if none of these exactly applies to what you're looking for.
>
> **[2:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=150)** Let's talk about that tag, privileged.
>
> **[2:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=153)** How you use this is that if something is tagged privileged, you can make policies according to how things are handled with a privileged role.
>
> **[2:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=164)** Think of conditional access.
>
> **[2:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=166)** If somebody's logging in and they have a privileged role, well then, you can require multifactor authentication.
>
> **[2:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=174)** Maybe you change the times that they can have that role available to them.
>
> **[3:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=180)** You can make different rules according to if something is privileged or not privileged.
>
> **[3:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=186)** Privileged just means they have more access and they can do more damage.
>
> **[3:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=190)** Now, that is not to mean that if it is not tagged privileged that they cannot get you in trouble.
>
> **[3:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=197)** So keep track of that.
>
> **[3:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=199)** All right, so the best way, I'm going to scroll down so you can see this, the attributes, the DevOps, and some of these are going to look like, "Hey, wait a minute, this doesn't really have anything per se to do with identities."
>
> **[3:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=214)** What I want you to remember is that the whole strategy now is identity centric architecture, meaning that by their identity, they have a particular environment and particular access.
>
> **[3:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=230)** So this is a little hard to scroll through.
>
> **[3:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=232)** What I'm going to do is I'm going to just type in here identity, and that gives us specifically the things for identities.
>
> **[4:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=244)** Hybrid Identity Administrator, Identity Governance Administrator, Privileged Role Administrator.
>
> **[4:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=250)** And if I come up here, then I can do different searches for different things, and just come up with what I'm looking for.
>
> **[4:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=259)** You're concerned with business to customer.
>
> **[4:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=263)** That's the things for business to customers that you can give access to.
>
> **[4:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=268)** Now the rule of thumb here is that you should be able to find one of these built-in roles that meets pretty much what you're looking for for that person to do.
>
> **[4:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=281)** Most of these are going to have a predefined scope.
>
> **[4:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=284)** They're going to have a predefined set of permissions to that scope, and then they're going to be somewhat descriptive, like Tenant Creator can create new Microsoft Entra or Azure AD B2C tenants.
>
> **[4:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=299)** So you should be able to find what you're looking for.
>
> **[5:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=302)** Now going on from here, the protected actions.
>
> **[5:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=307)** The protected actions, let's go ahead and add one here.
>
> **[5:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=310)** The protected actions means that, boy, if somebody is going to do one of these actions, then we need to protect this.
>
> **[5:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=320)** And that can be a trigger for conditional access.
>
> **[5:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=325)** Certain tasks are going to be more dangerous or they can get more trouble than other ones.
>
> **[5:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=331)** So you have that options now in Microsoft Entra.
>
> **[5:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=336)** I'm going to go back here.
>
> **[5:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=338)** And we have Diagnose and solve problems, and then we have something, Access reviews.
>
> **[5:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=345)** And the access review is just what it sounds like, that you can review the different access that people have.
>
> **[5:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=353)** This serves two purposes.
>
> **[5:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=355)** The first purpose is to find out well, who accessed what, and especially in the privileged role.
>
> **[6:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=361)** And the second one is what kind of tasks were performed with that level of access.
>
> **[6:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/developing-identity-solutions-with-rbacs?u=76281980&t=370)** So that is a look at using RBACs and in particular using the built-in roles for Microsoft Entra and Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), for. (4), protected (3), delete (1), self (1)
> **CLI Commands:** make (3), find (3)
> **Definitions:** is a  (3), means that (1)
> **Env Vars:** b2c (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Entra Privileged Identity Management
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=0)** - [Instructor] Let's say that you want to give permissions only for a little while, just so somebody can perform their task.
>
> **[0:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=8)** Well, Microsoft Entra Privileged Identity Management, sometimes called PIM, PIM, is your solution for that.
>
> **[0:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=17)** You provide just-in-time privileged access to resources and it is time-bound.
>
> **[0:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=24)** They don't necessarily always have this role or permission structure while they're in.
>
> **[0:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=31)** It just cuts off after a certain amount of time.
>
> **[0:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=34)** You can require approval to activate the privileged roles and you get notification when they're activated.
>
> **[0:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=41)** So if this says anything, it's about control over those privileged access roles.
>
> **[0:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=49)** Now, this is how it works.
>
> **[0:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=51)** You make PIM available.
>
> **[0:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=54)** The user activates the PIM role.
>
> **[0:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=58)** The user completes whatever they're supposed to do inside of there, and then the role disappears.
>
> **[1:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=65)** There's a couple different recommendations that we have for this.
>
> **[1:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=69)** You need to identify and manage users assigned to administrative roles.
>
> **[1:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=74)** Remove the unused or excessive privileged roles, use multifactor authentication for the privileged roles, grant access only long enough to accomplish the task, remove any accounts that are in the administrative roles.
>
> **[1:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=90)** In other words, if you have a privileged role and somebody is just granted that role, they always have that role.
>
> **[1:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=98)** So why not set up some kind of just-in-time format that you're only giving them that role for a limited amount of time and then monitoring it to make sure that it's done and done right.
>
> **[1:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=112)** It's going to be much more safe in order to do that.
>
> **[1:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=115)** And lastly, you should use justifications to understand why the user's activated that particular role for the limited amount of time to perform their task.
>
> **[2:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=129)** Let's go into the Entra admin center to see how this is done.
>
> **[2:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=135)** From the landing page, let's go here to Identity Governance.
>
> **[2:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=139)** It's right there.
>
> **[2:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=140)** Privileged identity management.
>
> **[2:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=143)** You can scroll down here, Manage access, Activate just in time, and Discover and monitor.
>
> **[2:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=149)** What I'm going to do is I'm going to go to Manage, and this is going to actually assign the role.
>
> **[2:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=154)** And we can see from here that we have all our roles here.
>
> **[2:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=159)** So we want to assign one of these.
>
> **[2:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=162)** I'm going to just pretty much pick one at random.
>
> **[2:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=165)** Intune Administrator.
>
> **[2:48](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=168)** That Intune Administrator role, we're going to assign to somebody.
>
> **[2:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=172)** So we say Add assignment.
>
> **[2:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=174)** We have our role here.
>
> **[2:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=176)** We have what scope that role is applied in.
>
> **[3:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=180)** And then we select our member.
>
> **[3:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=182)** And in here, what I'm going to do is I'm going to say, Joe, congratulations.
>
> **[3:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=187)** You are an Intune Administrator.
>
> **[3:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=189)** Now let's Click Next, and under next Permanently eligible, now, we can timeframe this as you can see right here.
>
> **[3:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=200)** Now, Assignment type, that is going to be, is it active or are they eligible for it?
>
> **[3:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=207)** If they're eligible for it, they have to activate it.
>
> **[3:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=210)** And then you are going to get a notification that that role has been activated.
>
> **[3:37](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=217)** And I want you to think about this for a second, how much safer this is than just permanently giving them that particular role.
>
> **[3:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=225)** That they have to activate it, that activation is going to be for limited amount of time, they do their thing and then they don't have it anymore.
>
> **[3:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=235)** The idea and concept, back when I first started with IT was, you are an administrator and you're permanently an administrator.
>
> **[4:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=245)** Now, we're much more picky and careful about giving this privileged role access to different things.
>
> **[4:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=253)** And then I can just come down here, say Assign, wait a little bit, and now, when Joe logs in, Joe can activate this privileged role, do what Joe needs to do to his Intune environment, and then we take that role away.
>
> **[4:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=272)** So we know each time when he did that privileged role.
>
> **[4:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/5984103?u=76281980&t=276)** So there is a look at privileged identity management in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), while, (1), require (1), this. (1), type, (1)
> **Env Vars:** pim (4)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** in other words (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Microsoft Entra Application Identity Security

#### Recommending an Azure application identity security solution
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=0)** - [Instructor] Recommending an Azure Application Identity Security Solution.
>
> **[0:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=5)** For this, we need to look at some of the more primitive applications, let's just say, a legacy IaaS, or infrastructure as a service.
>
> **[0:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=16)** It's hosted on a VM and an OS, and this is where you can get into trouble.
>
> **[0:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=22)** But I understand.
>
> **[0:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=24)** You're probably in a situation if you have these, is these are old applications that don't have any updates that your business depends on.
>
> **[0:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=34)** Well, with those, you have a different set of priorities for securing access to them.
>
> **[0:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=41)** The more modern, just below the software as a service, is the platform as a service.
>
> **[0:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=47)** And these don't require the application owner to manage and secure the underlying server operating system.
>
> **[0:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=53)** So they're going to be more safe.
>
> **[0:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=56)** Now, when you're taking a look at your applications, you're going to have high-impact and high-exposure.
>
> **[1:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=62)** And that's where you have to be careful about the access to those apps.
>
> **[1:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=66)** For the high-impact, it stores and processes data, it handles regulated data, and they just can't go down.
>
> **[1:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=75)** The high-exposure, usually you're talking about legacy, because you have different authentication protocols to get into those, and they're accessible on the internet and they're continuously exposed.
>
> **[1:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=90)** So those are two you need to take a look at.
>
> **[1:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=92)** Now let's talk about approaches to securing your applications.
>
> **[1:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=98)** You have a bottom-up approach, and those are for eliminating bugs.
>
> **[1:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=102)** You try and find the bugs or the areas of vulnerability early, at a low level.
>
> **[1:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=109)** You resolve those early in development.
>
> **[1:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=112)** And then we have the top-down approach, where the threats are identified at a high level and you have to prioritize and limit the scope.
>
> **[2:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=121)** And you want to find these early in the development cycle.
>
> **[2:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=124)** Now, that is a look at applications that you have to watch out for, your more primitive applications.
>
> **[2:12](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=132)** Let's go into the Entra admin center and see some of the things that we can do with applications.
>
> **[2:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=140)** From the landing page, we're going to come down here to Identity and then Applications.
>
> **[2:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=146)** Under Applications, we have the Enterprise applications and the App registrations.
>
> **[2:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=151)** This is all how you give access to an application with all the identities that we have spoken about: the external identities, the private access to get to these applications.
>
> **[2:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=165)** Well, they have to be part of your identity infrastructure in order to give them access to it.
>
> **[2:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=174)** Remember, one of the changes that have happened from Azure Active Directory to the Microsoft Entra environment is that, now, everything is pretty much in the same place.
>
> **[3:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=187)** And you notice, Applications are under Identity now.
>
> **[3:12](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=192)** So the Enterprise applications, you can add an application in here, and then after you add that application inside of this interface, then you can control access to that particular application.
>
> **[3:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=209)** You can register different applications that you have within this space right here.
>
> **[3:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=216)** All you're doing is creating an endpoint to get access to that application, and then you can control whatever identities and conditional access and all the other features that we have with the Entra environment.
>
> **[3:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/recomending-an-azure-application-identity-security-solution?u=76281980&t=235)** So that's a quick look at how Microsoft Entra deals with applications in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), require (1), for, (1), private (1)
> **CLI Commands:** find (2)
> **Warnings:** be careful (1), watch out (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using Microsoft Entra managed identities
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=0)** - [Instructor] Let's take a look at using Microsoft Entra Managed Identities.
>
> **[0:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=5)** Managed identities are used by applications from Azure resources that require some kind of login, and traditionally we've done this with secrets and keys and things like that.
>
> **[0:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=18)** Well, this is an alternate to that.
>
> **[0:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=21)** The managed identity can obtain tokens from Entra ID.
>
> **[0:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=26)** There's two types of managed identities.
>
> **[0:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=29)** The first one, System-Assigned Managed Identity.
>
> **[0:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=33)** This is where the service principal is created.
>
> **[0:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=36)** It is tied to the resource lifecycle, meaning that that resource is gone, that managed identity disappears with it.
>
> **[0:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=45)** Only the resource that has the managed identity, the System-Assigned Managed Identity, can request tokens.
>
> **[0:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=55)** The name is always the same as the Azure resource.
>
> **[0:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=59)** It is indubitably tied to that resource.
>
> **[1:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=64)** Then we have User-Assigned Managed Identity.
>
> **[1:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=68)** This is a standalone resource.
>
> **[1:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=71)** I'll show you how to create it.
>
> **[1:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=73)** You assign it to more than one service, and it can be used by multiple resources.
>
> **[1:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=79)** This will be managed separately from the actual resource that you associate it with.
>
> **[1:26](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=86)** Let's go into the Azure portal so I can show you how to use managed identities.
>
> **[1:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=94)** From the Azure portal, you can certainly search for this, but I have mine up.
>
> **[1:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=99)** It's called Managed Identities.
>
> **[1:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=101)** You just click on it, and down here it says Create Managed Identity.
>
> **[1:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=106)** We click on it, and we're going to add this to testMI, test managed identity, and we're going to call this mi4vm.
>
> **[2:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=122)** I have a virtual machine that we're going to assign this to, and simply come down here and say, Review + create.
>
> **[2:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=133)** It takes a little while for this to create, and as soon as we do, we have a user-defined managed identity and we can assign it to various resources in Microsoft Azure.
>
> **[2:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=151)** What I'm going to do now is I'm going to go to the home.
>
> **[2:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=155)** I'm going to go to testMI right here.
>
> **[2:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=159)** This is my virtual machine, and under security we have identity.
>
> **[2:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=164)** This is where you do the managed identities.
>
> **[2:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=167)** For a system-assigned, we simply say On and then Save.
>
> **[2:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=173)** So I'll do that now, On and then Save.
>
> **[2:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=176)** I'm going to click Yes, and this actually takes a little while to have that managed identity created for this virtual machine.
>
> **[3:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=189)** We just registered it, and then we can add the role assignments by clicking on Add role assignments, and then we say just whatever we need as far as that role goes.
>
> **[3:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=199)** We can select whatever scope, the resource group.
>
> **[3:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=205)** The resource group that was right here, and then whatever role that you can see down here.
>
> **[3:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=211)** Owner, probably not, reader, that's probably good.
>
> **[3:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=214)** We'll click on Save.
>
> **[3:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=218)** And now that role assignment is added to our virtual machine.
>
> **[3:43](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=223)** So we have a managed identity that a system created for this virtual machine.
>
> **[3:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=232)** I'm going to come back here, and hopefully I got there.
>
> **[3:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=234)** Yes, I did.
>
> **[3:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=235)** I'm going to say Off for the status, and then simply click Save.
>
> **[3:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=239)** Now I'm showing you how to get rid of that managed identity, that System-Assigned Managed Identity.
>
> **[4:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=246)** Up next, we're going to go into user-assigned identity, and we're going to use the one that we just created.
>
> **[4:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=253)** So I come up here to user assigned, I click on Add, and then over here, there it is, right there.
>
> **[4:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=261)** I can check it, and then just click on Add.
>
> **[4:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=267)** And now this associates that managed identity that we just created, managed identity for VM on this virtual machine.
>
> **[4:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=278)** And there it is.
>
> **[4:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=279)** We can click on the Manage identity for virtual machines, and this is where we can delete it from here.
>
> **[4:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=287)** So go ahead and click on Delete.
>
> **[4:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=291)** We have read and understand everything.
>
> **[4:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=293)** We're not scared.
>
> **[4:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=294)** We can go ahead and click on Delete right there.
>
> **[4:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=298)** I'm going to say Refresh here, and our managed identity is gone.
>
> **[5:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=307)** We can also control what access level that managed identity has for that virtual machine.
>
> **[5:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-microsoft-entra-managed-identities?u=76281980&t=314)** So that is a look at using Microsoft Entra Managed Identities for Microsoft Azure.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), go to (2)
> **Code Keywords:** delete (3), let (2), require (1), this, (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** testmi (2)
> **Tools:** azure portal (2)
> **Speakers:** - [instructor] (1)

#### Using external identities in Microsoft Entra
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=0)** - [Instructor] Like any business, you deal with a lot of partners, so you have to develop a business-to-business strategy with Microsoft Entra.
>
> **[0:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=8)** This is where you're going to see some improvements.
>
> **[0:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=10)** We have this new thing called Entra ID External Identity.
>
> **[0:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=15)** This allows you to work with people outside of your organization, and the key here is the users just bring in an external identity, and you can manage a lot of external collaboration settings.
>
> **[0:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=30)** The external identity accounts, they might be a government-issued account, a company-issued account, Google, Facebook.
>
> **[0:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=38)** And the external identities, they allow people outside of your company to securely access your apps and resources within the company.
>
> **[0:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=50)** We have two types of tenants now, we have an external tenant and we have a workforce tenant.
>
> **[0:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=57)** Now, that's opposed to a workforce tenant, and this is your standard Microsoft Entra tenant.
>
> **[1:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=63)** And it contains your stuff, your employees, your internal business apps, and your resources.
>
> **[1:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=71)** Let's go into the Entra admin center and take a look at external accounts.
>
> **[1:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=78)** From the landing page, we go to identity, and it is right down here, External Identities.
>
> **[1:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=85)** Here's an Overview.
>
> **[1:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=87)** So basically what you're doing is you're setting up collaboration between you and people outside of your organization.
>
> **[1:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=95)** You have your cross-tenant access settings, so ya can really get granular about what you're trying to accomplish for the collaboration.
>
> **[1:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=106)** Ya can see collaboration, external users and groups, applications, external users and groups for the direct connect, et cetera.
>
> **[1:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=114)** So a lot of control over that.
>
> **[1:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=116)** Your identity partners, you can certainly add them in here by clicking on Custom, but these are the big ones: the Entra ID, realtime passcode if you want it, Microsoft, Google, and Facebook.
>
> **[2:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=130)** The External Collaboration Settings, this is where ya can get to quite a bit of exactly what you want people to be able to do, once you set up this partnership with your external identities.
>
> **[2:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=145)** You can have Custom User Attributes, Custom Authentication Extensions, and here's somethin' called User Flows.
>
> **[2:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=155)** A user flow, we'll click on New User Flow here.
>
> **[2:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=158)** A user flow is the experience somebody has when they are setting up your external identity.
>
> **[2:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=165)** You have probably done this before, when ya go into some kind of web service and it says, "Hey, do you want to create your own account, or do you want to use your Google account in order to log into our webpage?"
>
> **[3:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=183)** This is the same thing, however, it is in a business sense, it is in an enterprise sense that you can do all this collaboration easily because people can use their own identity in order to get in there.
>
> **[3:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=201)** Very, very convenient.
>
> **[3:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=203)** We'll go down here to User Experiences, and the Company Branding.
>
> **[3:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=210)** You can brand this however you would like.
>
> **[3:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/using-external-identities-in-microsoft-entra?u=76281980&t=212)** So collaborating, cooperating, and working with people outside of your corporation has gotten much easier, with this new feature called Microsoft Entra External Identities.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1), click on (1)
> **Code Keywords:** let (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Microsoft Azure Governance

#### Understanding Entra identity governance: Entitlement management
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=0)** - [Instructor] We're going to look at Entra Identity Governance, and it's important to have a good understanding of this, especially large enterprises that have a lot of users and a lot of complexity.
>
> **[0:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=13)** Here's what it does.
>
> **[0:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=15)** It automates the employee lifecycle, meaning that when somebody comes into a company, moves in a company, and leaves a company, you automatically assign resource access to employees.
>
> **[0:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=28)** And this can be based on a property for the user account or something else that triggers it.
>
> **[0:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=35)** You can also collaborate with guests and partners much easier now through Identity Governance.
>
> **[0:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=42)** What are the goals, what are we trying to do here?
>
> **[0:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=45)** We want to be productive.
>
> **[0:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=47)** This helps you in production because all the apps and services that people need to do their job should be available to them if you set this up right, as opposed to people kind of waiting around to try to get access to something they might need.
>
> **[1:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=64)** You want to be more secure.
>
> **[1:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=66)** This makes you more secure by eliminating access, group membership, and things like that, as an employee might move in the company or leave the company itself.
>
> **[1:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=78)** Streamlining, the access packages that are created with this can be delegated to non-administrators.
>
> **[1:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=88)** So, by controlling the access packages you're streamlining your whole operation in not having the people have to go to the administrator, please give me access to this thing I need in order to do my job.
>
> **[1:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=106)** We want to be more efficient, and by this automation of the approval process and making sure that people have what they need and taken away after they don't need it anymore, we become more efficient.
>
> **[2:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=121)** Let's take a look at the first product, and this is called entitlement management.
>
> **[2:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=127)** With entitlement management we have access packages.
>
> **[2:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=131)** These access packages contain the resources the user needs in order to do their job, and they can request it and the approval process is up to you.
>
> **[2:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=143)** You can have a multi-stage approval process for their access.
>
> **[2:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=147)** You can give access automatically based on a user's properties and invite partners to have access to the resources within your company.
>
> **[2:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=159)** Let's go into the Entra Admin Console.
>
> **[2:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=162)** From the landing page Identity Governance, we click on it, and here it is, Entitlement management.
>
> **[2:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=170)** We have the Access packages that you see right here.
>
> **[2:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=173)** I'm going to click on it.
>
> **[2:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=174)** Let's go to New access package.
>
> **[2:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=177)** We just give this a name, and I will just say Quick Access.
>
> **[3:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=181)** We used that before.
>
> **[3:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=182)** I'm not going to really describe this because we're just looking at it, and I've already made a catalog called Quick Access.
>
> **[3:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=190)** Now, Resource roles, look at this.
>
> **[3:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=193)** We can put 'em into a group or a team.
>
> **[3:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=196)** We can assign them applications, we can give them access to SharePoint sites, and we can actually assign an Entra role to them based on this access package.
>
> **[3:30](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=210)** Requests, how do they request this?
>
> **[3:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=213)** Do they just request it themselves?
>
> **[3:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=216)** Are they not part of your company, but we trust them?
>
> **[3:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=220)** Or do you make administrators do it, or just enable it by default?
>
> **[3:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=225)** Now, Requester information, what type of information do we have for them to request it?
>
> **[3:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=232)** We can ask them questions, and we can also have attributes that trigger access to these packages.
>
> **[4:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=241)** Next, we have the Lifecycle, how's this going to work?
>
> **[4:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=244)** How many number of days do we give them the access package before they don't request it and we take it away?
>
> **[4:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=251)** Do we automatically expire their access package after a specific amount of time, and do we require access reviews in order to give them this package?
>
> **[4:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=263)** And then we have Custom extensions that fine-tune the triggers and the events that we have.
>
> **[4:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-entitlement-management?u=76281980&t=271)** So, that is a look at entitlement management with Identity Governance in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1), this. (1), require (1)
> **UI Navigation:** go to (2), click on (2)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Understanding Entra identity governance: Lifecycle workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=0)** - [Instructor] We're going to take a look at the Entra Identity Lifestyle workflow.
>
> **[0:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=5)** Let me explain what this is.
>
> **[0:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=6)** It's a form of tasks and execution conditions.
>
> **[0:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=11)** The idea is that we automate worker environments as they join, work through and get promotions and moved around a company, and then eventually leave the company.
>
> **[0:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=23)** The whole goal here is to assure the worker always has what they need to do their job and not have what they don't need to do their job.
>
> **[0:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=34)** So this automation and execution of access packages to the individual workers as their conditions change is crucial to making sure that you have an efficient and secure identity posture.
>
> **[0:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=54)** Now, there's three types of workflows here, and they can be broken into three spots.
>
> **[1:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=61)** A joiner, people join a company, join an organization, a mover, the employee gets promoted, hopefully not demoted, or just moves to a different department.
>
> **[1:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=74)** Well, they're going to have different needs and different access requirements.
>
> **[1:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=79)** And then we have a leaver.
>
> **[1:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=81)** They got another job somewhere else, they quit, they didn't do their job right, they got fired, or they retired.
>
> **[1:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=89)** Either way, they have left the company and we need to deal with that workflow lifecycle.
>
> **[1:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=95)** Let's go into the Entra admin center and take a look at how this works.
>
> **[1:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=101)** From the landing page, we come down here to identity governance and lifecycle workflows.
>
> **[1:48](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=108)** Right here.
>
> **[1:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=110)** We're going to say, let's create a workflow, but let me show you in here the workflow schedule, every three hours, schedule enabled, schedule disabled, deleted workflows, gives you an idea of what we're talking about here.
>
> **[2:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=124)** We have general information about the templates and how to monitor this, which makes it quite safe.
>
> **[2:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=131)** And what we're going to do is just come up here and say, create a workflow.
>
> **[2:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=137)** We can see by the templates, we have joiners, on board pre-hire employee, on board, a new hire.
>
> **[2:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=145)** So here we give them information before they come in.
>
> **[2:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=148)** Here, we give them everything they need because they're on.
>
> **[2:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=151)** And then after they're an employee, we have post-onboarding.
>
> **[2:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=159)** Realtime employee job change, group membership changes, group profile changes.
>
> **[2:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=164)** Here, they're terminated.
>
> **[2:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=166)** And perhaps termination should be different than somebody voluntarily leaving the company.
>
> **[2:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=173)** So we have quite a few templates to start us off with, or we can just start from scratch.
>
> **[3:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=180)** What I'm going to do is just say, onboard new hire employee.
>
> **[3:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=185)** I'm going to select it, and this should make sense when you put it in the context of somebody is coming in and starting in a company.
>
> **[3:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=194)** The idea is that we don't have them sitting around waiting all day to get access to this or that and taking a week or two weeks to finally get productive in that company.
>
> **[3:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=208)** The idea here is that from day one, from minute one, they are productive in their new company that they just joined.
>
> **[3:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=220)** We have a name, onboard new employees, and keep in mind, you can do this yourself.
>
> **[3:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=226)** Time-based attribute, days from events, et cetera.
>
> **[3:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=230)** And then we have what kind of scope that we're looking at here.
>
> **[3:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=235)** Watch, see the rule?
>
> **[3:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=237)** See?
>
> **[3:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=238)** They are not in a department, they are in a department, department equals marketing.
>
> **[4:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=245)** So this is actually looking at the properties of a user account and giving them an access package according to that.
>
> **[4:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=257)** Review tasks, how are we going to review this?
>
> **[4:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=261)** Do we automate this review or do we have certain criteria that we can review with this?
>
> **[4:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=268)** And then review and create.
>
> **[4:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=271)** I'm not going to create this one.
>
> **[4:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=273)** What I'm going to do is just come back here to lifecycle workflows, and then come here to workflow settings.
>
> **[4:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=282)** So we can control what schedule this workflow operates with.
>
> **[4:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-lifecycle-workflows?u=76281980&t=289)** And that is a look at how you can utilize lifestyle workflows to make it much easier to get your people what they need to do their job when they need it in Microsoft Azure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), else, (1), this, (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Understanding Entra identity governance: Monitoring and auditing
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=0)** - [Instructor] I want to show you how to monitor your identity infrastructure with Microsoft Entra.
>
> **[0:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=8)** The Microsoft Entra monitoring and health can help you determine how apps and services are being utilized, detect potential risks, discover what is preventing users from getting their work done.
>
> **[0:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=22)** We have audit logs, and this is a record of system activities for compliance.
>
> **[0:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=27)** You can find out who gave the access to this person, who signed into a specific application, and how many password resets occurred during a certain time?
>
> **[0:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=39)** And then we have sign-in logs.
>
> **[0:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=41)** This is a record of when, where, and who signed in.
>
> **[0:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=45)** So you can look for patterns in this.
>
> **[0:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=47)** You can find out how many people are signing in at a particular time, and you can see the status of all sign-ins in your network.
>
> **[0:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=56)** And then we have provisioning logs.
>
> **[0:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=59)** This is a record of what services and apps were provisioned to users.
>
> **[1:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=64)** So find out, hey, who created these groups and where were they created?
>
> **[1:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=68)** What users happened to be removed from accessing an application?
>
> **[1:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=73)** And what users were successfully created?
>
> **[1:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=77)** We also have identity reports.
>
> **[1:20](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=80)** This can give you usage and insights.
>
> **[1:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=83)** You can use Microsoft Entra workbooks to categorize all the events that you're looking at.
>
> **[1:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=89)** And of course, we can port everything over to Event Hubs.
>
> **[1:33](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=93)** We also have risky activities.
>
> **[1:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=96)** This is an artificial intelligence-induced evaluation of risky items.
>
> **[1:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=102)** Those risky items: workload identities, users, and sign-ins.
>
> **[1:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=107)** Let's go into the Entra admin center and take a look at where these are and how you use them.
>
> **[1:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=114)** It's right down here under Identity.
>
> **[1:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=116)** And under Identity, you have to go to Show more.
>
> **[2:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=120)** And under Show more, Monitoring and health right here.
>
> **[2:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=124)** So these are the sign-in logs.
>
> **[2:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=126)** I don't have a lot of sign-ins in here besides myself, but you get the idea.
>
> **[2:13](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=133)** Look how many times I've signed in, and this records when I signed in to different items besides just signing into my account for Microsoft Azure.
>
> **[2:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=147)** The audit logs are right here, and you can go through and check out those.
>
> **[2:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=152)** The provisioning logs, I haven't really provisioned anything.
>
> **[2:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=156)** But if you have, and you should in your network, all those will pull up here.
>
> **[2:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=162)** And then we have general health information that we can take a look at and make sure everything is healthy.
>
> **[2:48](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=168)** We have log analytics, which you should be familiar with, diagnostic settings, and then finally, workbooks, usage and insights, and all kinds of now that's available to you that really didn't have a centralized location with our identity in Microsoft Azure before Entra.
>
> **[3:12](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=192)** Now, to show you the risky usage behavior, I go under Protection, and under Protection, right here, Risky activities.
>
> **[3:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=202)** We have our risky users, our risky workload identities, and the workload identities, are identities associated with the workload, and our risky sign-ins to see how many people are logging into our network, and this just doesn't look right.
>
> **[3:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=224)** And then we have risk detections as well in here that should compile all the information for our risks.
>
> **[3:53](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/understanding-entra-identity-governance-monitoring-and-auditing?u=76281980&t=233)** So that's a look at some of the tools that you can use to easily monitor what is going on in your network in regards to identities in Microsoft Azure.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** this. (1), let (1), finally, (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Microsoft Entra best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=0)** - [Instructor] I want to conclude by talkin' about the best practices for Microsoft Entra.
>
> **[0:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=6)** Let's start with the security principles.
>
> **[0:08](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=8)** This is your run-of-the-mill human beings that have an identity.
>
> **[0:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=14)** You should always use strong authentication.
>
> **[0:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=18)** If you are giving out directory-level roles, you should limit that as much as possible, try to scope them into just what they need to take a look at rather than the whole directory.
>
> **[0:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=32)** You should control access via isolation.
>
> **[0:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=35)** Your identities should be isolated, your resources should be isolated, and that is going to give you security.
>
> **[0:43](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=43)** Deploy secure workstations whenever possible, and only use modern authentication for your people.
>
> **[0:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=52)** Let's take a look at non-human identities, otherwise, we've called these service accounts and things like that.
>
> **[0:58](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=58)** You should have two emergency accounts that are global administrators.
>
> **[1:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=63)** This prevents a couple things.
>
> **[1:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=66)** One is ya have somebody go rogue, they're a global administrator, and they shut everyone else out.
>
> **[1:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=74)** Well, if you have a counter global administrator account, then at least you can get in there and do battle with them.
>
> **[1:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=82)** The second thing is that you assure that you can get in there if somethin' should happen, accidentally deleted, whatever happened to the other global administrator, that you have another one to get in there.
>
> **[1:37](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=97)** And again, these should be secured.
>
> **[1:40](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=100)** You should use Entra managed identities whenever possible.
>
> **[1:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=104)** You should use certificates if you have a hybrid service account, that's an on-premises active directory domain services account that is acting as a service account for the applications that you have migrated up to the cloud.
>
> **[2:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=123)** Looking at just authentication: strong credentials.
>
> **[2:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=127)** Try to move, or at least consider moving, to passwordless logins for your users.
>
> **[2:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=134)** You should use Entra password protection.
>
> **[2:17](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=137)** Implement self-service password reset, which will enable you to not have to deal with passwords and keep those passwords more secure because it's up to the individuals to take care of their passwords.
>
> **[2:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=154)** You should also pay considerable attention to your external identities because these are people that don't work at your company, you have less control over them.
>
> **[2:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=166)** So monitoring external identities is very important in this scenario.
>
> **[2:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=172)** Your privileged roles, those are the roles that were marked privileged that ya saw when we were lookin' at the different roles.
>
> **[3:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=180)** You should use privileged identity management whenever possible.
>
> **[3:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=184)** You should have the right number of admins or people with the privileged role access as possible.
>
> **[3:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=191)** If ya have too few of them, how are ya going to maintain through different time zones?
>
> **[3:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=196)** If ya have too many of them, then your security posture is more vulnerable.
>
> **[3:23](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=203)** You should limit privileged access to everything, and allow privileged access from only secure workstations so you can have conditional access in order to secure that.
>
> **[3:37](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=217)** The identities are going to be assigned to resources, so you should group related resources into a resource group.
>
> **[3:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=226)** What this is going to do is allow you to control the scope to the related resources.
>
> **[3:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=232)** If they're all spread out, you're going to have to give scope to several resource groups, which spreads it out too thick.
>
> **[4:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=241)** Utilize entitlement management, we talked about that.
>
> **[4:05](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=245)** That's where you have the access packages in order to control assigning resources to identities, and taking away that access to the resources as well when it's no longer needed.
>
> **[4:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=258)** You should use direct assignment if ya have third party SaaS services, which will make access to them within the realm of your control.
>
> **[4:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=269)** Finally, administrator accounts, and this is what we've always called them.
>
> **[4:34](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=274)** The administrator accounts on premises are different than the administrator accounts in the cloud.
>
> **[4:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=282)** You should utilize time restrictions on these.
>
> **[4:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=285)** If you have an administrator that has been on premises for a long time, they log in, they have all kinds of control over their environment.
>
> **[4:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=297)** That's not necessarily the way to do that.
>
> **[5:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=300)** With privileged identity management, you can put a time restriction on when they can use it.
>
> **[5:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=307)** If you have administrator accounts, every time, require multi-factor authentication.
>
> **[5:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/microsoft-entra-best-practices?u=76281980&t=315)** If you have on-premises administrators, do not synchronize that administration account up to the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), self (1), finally, (1), require (1)
> **CLI Commands:** make (1)
> **Cross-References:** we talked about (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### Solution: Creating Entra lifecycle workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=0)** - [Instructor] Let's take a look at how we can approach this.
>
> **[0:03](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=3)** I'm going to come down here to Identity Governance and Lifecycle workflows.
>
> **[0:10](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=10)** Click on it.
>
> **[0:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=11)** We don't have any life cycles in here and no workflows, but I can create a workflow by clicking right here.
>
> **[0:19](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=19)** And we have the joiners, we have the movers, and we have the leavers.
>
> **[0:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=25)** The one we want is a pre-hire.
>
> **[0:27](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=27)** So I'm going to select this one by clicking on Select, and we can change this as much as we want.
>
> **[0:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=35)** We're going to leave the defaults here, but it's probably a good idea that this is customized in a real world environment.
>
> **[0:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=42)** Let me show you the trigger.
>
> **[0:44](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=44)** The trigger is 7 days before the employee hire date.
>
> **[0:49](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=49)** What this is going to do is trigger this automatically as somebody puts in employee hire date.
>
> **[0:59](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=59)** Next is the Configure scope.
>
> **[1:02](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=62)** What we want is the department to equal Research.
>
> **[1:07](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=67)** So let me type in Research.
>
> **[1:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=69)** So when this is triggered, it's going to look at the scope and say, oh, the department equals Research.
>
> **[1:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=76)** Okay, what do I need to do?
>
> **[1:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=78)** And for that, we have tasks.
>
> **[1:21](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=81)** Under Task, we're going to take the default here.
>
> **[1:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=84)** Generate a temporary access, and then send an email.
>
> **[1:29](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=89)** I'm going to click on this to show you the details of it.
>
> **[1:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=92)** If you click on here, Email Customization, this is where you would add the link to the webpage that they need in order to fill the non-disclosure agreement.
>
> **[1:45](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=105)** We're going to take the defaults on this, but keep in mind, you would want to change that from the defaults that are on here.
>
> **[1:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=112)** And then simply say, Review and Create.
>
> **[1:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=116)** This doesn't take long to create, and we created a workflow that is going to go through there, see that somebody was hired, see that they are in the Research department, and send them an email to do what they need to do in order to start work.
>
> **[2:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=134)** Let me show you the second scenario.
>
> **[2:16](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=136)** We can come up here to Create workflow, and under here we have Employee job profile change.
>
> **[2:24](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=144)** I'm going to select this template and we can make changes here that would be more accurate to describe what we're doing.
>
> **[2:31](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=151)** I'm going to use the defaults here and come down to Trigger.
>
> **[2:35](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=155)** Our Trigger is the job title.
>
> **[2:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=159)** So, under jobTitle, we click it, and now we configure the scope.
>
> **[2:47](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=167)** The scope is going to change from department to jobTitle.
>
> **[2:55](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=175)** I'm going to select job Title, and their job title, remember, starts with Director.
>
> **[3:01](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=181)** So it's going to be Director of this or Director of that.
>
> **[3:09](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=189)** Now we have our scope and we have our trigger, and we're ready to look at the tasks.
>
> **[3:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=194)** We have four tasks in here, but we're not using any one of these because that's not what we're supposed to do.
>
> **[3:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=202)** So we can easily say, select all these and remove them and add a new task.
>
> **[3:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=208)** And the new task is going to Add a user to a group.
>
> **[3:32](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=212)** So I simply click here and click on Add.
>
> **[3:36](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=216)** Now we get into the details of Add user to the group.
>
> **[3:39](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=219)** Namely, we have to say what group.
>
> **[3:42](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=222)** I click here where it says Zero Groups selected.
>
> **[3:46](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=226)** I select Directors, and then click on Select.
>
> **[3:50](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=230)** Now I save it.
>
> **[3:52](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=232)** Review and Create it.
>
> **[3:54](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=234)** And down here it says, Schedule Workflow.
>
> **[3:57](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=237)** We're going to enable this one by clicking this button and click on create.
>
> **[4:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=244)** Now, when that person's job title changes to begin with Director, they're automatically added to the Director's group.
>
> **[4:15](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=255)** For our final scenario, what we need to do is create a workflow, and right down here we have a leaver, offboard an employee.
>
> **[4:25](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=265)** I'm going to select this one.
>
> **[4:28](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=268)** It's a time-based attribute, and the time-based attribute, the trigger, says zero days from employeeLeaveDateTime.
>
> **[4:38](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=278)** I'm going to configure the scope, and this one's going to be a little bit different.
>
> **[4:41](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=281)** For the property, we're going to select accountEnabled, and that is a Boolean, And we're going to say true.
>
> **[4:51](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=291)** So if the account is still enabled, we perform the task.
>
> **[4:56](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=296)** And the task is disable the user account, remove the user from all groups, and remove the user from all teams.
>
> **[5:06](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=306)** I simply come here to say, Review and Create, and then click on Create.
>
> **[5:11](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=311)** So it's going to go through there, and what's going to trigger it is, oh, they're not working here anymore.
>
> **[5:18](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=318)** Their account is still enabled. Perform these tasks.
>
> **[5:22](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/solution-creating-entra-workforce-lifecycles?u=76281980&t=322)** And that's how you solve the third scenario.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7)
> **Code Keywords:** let (4), this. (1), this, (1)
> **Code Identifiers:** jobtitle (2), employeeleavedatetime (1), accountenabled (1)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)


### Conclusion

#### Making a more efficient organization
> [LinkedIn Learning](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/making-a-more-efficient-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/making-a-more-efficient-organization?u=76281980&t=0)** - Congratulations, and thank you for completing this course.
>
> **[0:04](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/making-a-more-efficient-organization?u=76281980&t=4)** For the next step, I encourage you to apply the insights that you have gained to create a better running organization.
>
> **[0:14](https://www.linkedin.com/learning/azure-for-architects-security-and-identity-management-with-microsoft-entra/making-a-more-efficient-organization?u=76281980&t=14)** I would love to hear from you, so let's connect on LinkedIn.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - congratulations (1)


## Path Context

### In [[Identity and Access Management in Azure]]
← [[Microsoft Azure- Identity and Access Management]] | **3 of 4** | [[Cloud Security Architecture for the Enterprise]] →

## Appears In

- [[Identity and Access Management in Azure]]

## Related Courses

_Courses sharing skills:_

- [[Cloud Security Architecture for the Enterprise]] — Cloud Security, Identity and Access Management (IAM)
- [[OWASP Top 10- -7 Identification and Authentication Failures and -8 Software and Data Integrity Failures]] — Identity and Access Management (IAM)
- [[Google Cloud Security for Beginners- Tools and Services]] — Cloud Security
- [[Google Cloud Digital Leader Cert Prep- 5 Trust and Security with Google Cloud]] — Cloud Security
- [[Microsoft Azure- Identity and Access Management]] — Identity and Access Management (IAM)
