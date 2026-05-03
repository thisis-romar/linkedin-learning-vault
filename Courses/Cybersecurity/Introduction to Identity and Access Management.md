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
  - '[[Navigating the Cybersecurity Threat Landscape]]'
  - '[[Cybersecurity Fundamentals]]'
  - '[[Networking and Administration Fundamentals]]'
prev_courses:
  - '[[Learning the OWASP Top 10]]'
  - '[[IT Security Foundations- Network Security]]'
  - '[[Server Administration Essential Training]]'
next_courses:
  - '[[Supply Chain Cybersecurity- Preventing Supply Chain Attacks]]'
  - '[[TLS for Beginners- Securing Network Communications]]'
  - '[[Learning Virtualization]]'
path_nav: '[{"path":"Navigating the Cybersecurity Threat Landscape","position":4,"total":8,"prev":"Learning the OWASP Top 10","next":"Supply Chain Cybersecurity- Preventing Supply Chain Attacks"},{"path":"Cybersecurity Fundamentals","position":9,"total":12,"prev":"IT Security Foundations- Network Security","next":"TLS for Beginners- Securing Network Communications"},{"path":"Networking and Administration Fundamentals","position":6,"total":10,"prev":"Server Administration Essential Training","next":"Learning Virtualization"}]'
path_count: 3
tags:
  - course
  - topic/security
  - topic/cloud-computing
  - topic/network-and-system-administration
  - skill/identity-and-access-management-iam
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Introduction%20to%20Identity%20and%20Access%20Management.md)

![Introduction to Identity and Access Management](https://media.licdn.com/dms/image/v2/C560DAQHnNlXXSDM8jg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1665594694262?e=2147483647&amp;v=beta&amp;t=bjQ8QTqZEBdo2FF5qW90UZivUthZNSzr9PxN4Nf7Lg4)

# Introduction to Identity and Access Management

> Your systems and resources are your organization’s lifeline. If your data falls into the wrong hands, you could stand to lose it all. Especially now, in a world where credential theft is so pervasive, you need to be able to validate who your users are and what they can access within your organization. Join cybersecurity leader Mandy Huth for an introduction to identity and access management, a cor

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management) | 57m | Beginner | 47K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [The importance of identity and access management](#the-importance-of-identity-and-access-management)
  - [What you should know](#what-you-should-know)
- [**1. Key Concepts for Identity**](#1-key-concepts-for-identity) (4 videos)
  - [Authentication, authorization, and accounting](#authentication-authorization-and-accounting)
  - [Authentication deep dive](#authentication-deep-dive)
  - [Users, groups, systems, assets, and permissions](#users-groups-systems-assets-and-permissions)
  - [Access control principles](#access-control-principles)
- [**2. Applying Authentication in Your Organization**](#2-applying-authentication-in-your-organization) (3 videos)
  - [Better together: Identity providers and identity governance](#better-together-identity-providers-and-identity-governance)
  - [Single sign-on](#single-sign-on)
  - [Federation](#federation)
- [**3. Applying Authorization in Your Organization**](#3-applying-authorization-in-your-organization) (3 videos)
  - [Least privilege](#least-privilege)
  - [Provisioning](#provisioning)
  - [Identity lifecycle](#identity-lifecycle)
- [**4. Advanced Tips and Tricks**](#4-advanced-tips-and-tricks) (4 videos)
  - [Zero trust](#zero-trust)
  - [Role mining](#role-mining)
  - [Conditional access and just-in-time access](#conditional-access-and-just-in-time-access)
  - [An important side note on passwords](#an-important-side-note-on-passwords)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The importance of identity and access management](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/the-importance-of-identity-and-access-management?u=76281980&t=1)** - According to the 2022 Verizon Data Breach Investigations Report, over 82% of all in scope breaches involved humans, and in over 50% of the cases, credential theft was the first link of attack. That's crazy. It has never been more important to validate who your users are and what they are accessing within your organization. Your data is important, so let's find out how we protect it by giving only authorized users access to the resources they need. Hi, I'm Mandy Huth, and I've helped organizations with over $8 billion in revenue create and run identity and access management programs. Additionally, I've spoken at leading industry conferences on this very topic in how to approach this type of program. In this course, I'll show you the basics of identity and access management, including key concepts like authentication, authorization, and accounting. I'll even touch on some advanced tips and tricks. So come with me and let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - according (1)

#### [What you should know](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/what-you-should-know?u=76281980&t=1)** - [Narrator] Whether you are starting your career in security or work closely with a security team, understanding the concepts of identity and access management will help you navigate how to control access to your company's data and how to better protect your systems. This course is intended to provide an overview of key concepts and components involved in identity and access management. Learning how the security team will apply these concepts enables you to apply the best approaches for your business needs. As we move through, you'll become a pro yourself.

> [!info]- Semantic Content
>
> **Speakers:** - [narrator] (1)


### 1. Key Concepts for Identity

[↑ Back to Table of Contents](#table-of-contents)

#### [Authentication, authorization, and accounting](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=0)** - There are three key concepts that are foundational to identity and access management. Authentication, authorization, and accounting. These concepts are the basis of everything we will build on, so this is a good one to spend some extra time understanding. Let's talk about each one of them separately. Authentication is the process of recognizing a user's identity. This is done by validating who they claim to be. How do you validate who you are? Usually, it is some additional data that is specific to that person, and it should be hard to reproduce or guess. If you validate your credentials, such as a password correctly, you get access. If not, access is denied. Think of authentication as a two-part process. A good way of thinking of this is something you are and something you have. Check out the next video for a deep dive into authentication and the different ways to validate who you are. Just remember, others need to know who you are, and you have to prove it. Authentication is proving who you are. Authorization is determining what you are entitled to have access to. Authorization is defined as giving someone permission to do or have something. Another way to say that is giving the user access to a resource. An important note is that authorization always takes place after authentication. When you are on a site, say Globe Bank, and put in your username and password,
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=95)** which is authentication, you get access to your transaction history, which is giving you authorization to that information. Authorization is the key element that organizations can use to control permissions to important information. When organizations build proper access controls through authorization, their users can access what they need when they need it, but nothing more than they need. When implemented properly, it is one of the strongest security controls a company can implement, with the greatest impact. Once authentication and authorization are in place, the way to ensure they are working properly is the use of the third component of identity and access management, which is accounting. Accounting is the process of measuring the resource the user consumes while they have access. Some people call this monitoring when someone accesses a system. Examples can be the time logged into a system, the data they reviewed or changed while in the system, or even where they logged into the system from. The reason the practice of accounting is important is to ensure that the access you have granted to users is being used as intended, and to ensure that access to your systems by someone not granted access is not occurring. It should be done on a regular basis for your most critical systems, since these tend to be the most targeted places for hackers to try to take advantage. Now let's pull all three concepts together with an example. When you go into your workplace,
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-authorization-and-accounting?u=76281980&t=190)** you may have a badge to prove who you are, which is authentication. Once you swipe your badge to your [[Microsoft Office|office]] floor, if you have permission to access that particular area, the locked door will open, which is authorization. On a monthly basis, the security group will run a report to ensure that only authorized people have accessed the building. That is accounting. The three key concepts for identity and access management, authentication, authorization, and accounting help organizations maintain proper access to resources and provide a process for checking that it is accurate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Definitions:** is a  (1), defined as (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Warnings:** important note (1)
> **Speakers:** - there (1)

#### [Authentication deep dive](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=0)** - [Instructor] Can you count the number of times you have proven who you were over the past week? Have you shown your driver's license to confirm who you are? Maybe you used a passport at the airport, those documents prove who you are. And how many of you put a password into a website before you were allowed access? You were verifying something you have. Authentication is the primary mechanism used across a myriad of ecosystems that helps provide access to people that are supposed to have access to those places. Let's deep dive into the components of authentication, as it is the first gateway into resources you need to use. Authentication is the process of recognizing a user's identity. This is done by validating who they claim to be. How do you validate who you are? Usually it is some additional data that is specific to that person, and it should be hard to reproduce or guess. If you validate your credentials correctly, you get access, if not, access is denied. Think of authentication as a two part process. A good way of thinking of this is something you are and something you have. First, you will need a user identification or ID, this is who you are. Examples of that might be an email address, a number like your school student number, or a random ID that you are allowed to come up with. Second is something you have.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/authentication-deep-dive?u=76281980&t=96)** You need to provide information that is specific to you but is hard to guess. The most common type is either a password or a pin. Most of us use these when logging into our company's assets. Many of you probably have a six digit password that you have to enter when your phone is locked as well. Something that is becoming very popular for authentication is biometrics, which are body measurements. This is also something only you have. Examples include your fingerprint, your voice, or facial recognition, which are all specific to you and your body. More and more devices in our world, like the phone we just mentioned, are providing options to use biometrics as proof of who you are. Finally, another type of proof is a token. This can be an actual token that has a number that changes on a regular frequency. It might be a card that you insert into your laptop, or it could be a text message to your phone that provides a code. Authentication is the gateway to getting the access you need. You have to prove who you are, and then validate it with something you have or know. Ensuring strong authentication makes sure you are providing access to the right people.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Users, groups, systems, assets, and permissions](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=0)** - [Instructor] When we talk about identity and access management, identity, also called a user or entity, can mean many different things depending on the context for an organization. Once you understand the relevant users for your company, you can outline the different permissions available for each. First, let's discuss the different types of identities. The most common type of user is a person. Most organizations have many people accessing their systems. This can be an employee, a contractor, or a vendor. Another type of user is an agent, someone or something you give permission to act on your behalf. For example, you may give your personal assistant permission to book your travel for you. They would still need to use their own identity, but they would be acting as your agent. Another type of user is a device or system. Think about this like your laptop or a server in your data center. Since it is executing actions, it needs an identity so that you are able to track what it is doing within your ecosystem. Finally, you may have accounts. There may be accounts in your network that need to access a system to get information or to take action. You would give that account an identity so that you can track its actions. Think about when a [[Banking]] system needs to transfer money between accounts. In order to transfer money from checking to savings,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=94)** the system needs to know that the accounts have permission to take that action. Giving each one an identity allows you to provide the appropriate access. If you have a certain user type that is the same for multiple users, you can also create a user group. This is an identity that contains more than one user, and can be managed as a single user for giving permissions. An example might be a group of distributors who can all get access to one place in your systems. You can manage permissions with a single user group and keep the list of individual distributors in that group. Another user type you may use is called a role. It is similar to a user group, but the reverse. If you label a user, for example a person, with a certain role, like an accountant, you could then provide a standard set of permissions based on that role. Once you understand who your users are, you have to determine what permissions you are going to provide to them. Permissions are another [[Microsoft Word|word]] for authorizations, or access to your network. In the ideal situation, all identities would start with no permissions. That way, identities cannot do anything inside your ecosystem until you grant them the access you want them to have. You can address permissions in a couple of ways. Most companies will address permissions using a build out approach.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/users-groups-systems-assets-and-permissions?u=76281980&t=187)** The security team will usually begin with what they call birthright access, or access that every single employee gets when they start with a company. That may be areas like network access, email, and internet access, for example. Then, an employee or their manager will request additional permissions to systems as they need them. Another way to address permissions is based on roles, as we mentioned as a user type. In this approach, you would take the accountant job and determine what permissions that particular role might need. For example, they may need access to your company's financial systems, to your sales systems to capture order information, and to your purchasing system so they know about accounts payable and accounts receivable. Finally, you can consider attaching a policy that specifies a type of access or what actions can be performed by users. This can include conditions that must be met before access is granted. For example, you can put a policy that only an email address from your company can access a certain system, or a condition that only a company managed device can access certain parts of your network. Defining users within your organization and outlining what access you will provide to each type will help ensure that you provide the right level of access to the correct people and systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1), [[Microsoft Word|Word]] (1)
> **Analogies:** for example (5), similar to (1)
> **Definitions:** is a  (2), is an  (2), is called (1)
> **Cross-References:** we mentioned (1)
> **Speakers:** - [instructor] (1)

#### [Access control principles](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=0)** - Have you ever needed access to a shared drive location that is part of another function in your company? You probably didn't have access, and had to call the help desk to request the access. Organizations can help improve it's security, and make sure users have the right permissions, by applying an access control model. Access control is when we have to decide whether we will accept or deny user requests for permissions. There are three primary models you can use to manage access requests. Let's discuss the different models and how they are used. First, there is Mandatory Access Control, or MAC. This model is the most restrictive and the most secure. Mandatory Access Control is a model where identity administrators would set access control for both users and objects. What that means is that not only does the user need access to a location, they also need access to a specific object, such as a classified document. The Mandatory Access Control method is used quite often by governments, and places where heavy security is required. It is the most hard access control method to manage, and is often burdensome for users who have to navigate a lot of obstacles for access. I recommend using this model only in heavily guarded environments. Next, there is Discretionary Access Control, or DAC.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=97)** In this model, every object, remember that's like a document, has an owner who decides who gets access to that object. This model is the least restrictive, allowing access control to be decentralized and managed by teams and individuals. While Discretionary Access Control can provide a high level of flexibility for organizations, it also brings a lack of visibility for identity administrators. Since each object owner can create their own group of objects, and determine the access, an organization's controls can become very unstructured and unstandardized. If the owner doesn't understand access control, it can also mean more access than is needed may be given. Depending on your organization's security requirements, you can consider this model to provide users the greatest amount of control over their access. If Mandatory Access Control is very stringent, and Discretionary Access Control is very flexible, I would place the third model, called Role-Based Access, or RBAC, somewhere near the middle between the two, providing a standard framework for access control while still allowing some flexibility. Role-Based Access Control, or RBAC, is a model that uses specific jobs, or roles, to determine access permissions. So instead of giving [[John the Ripper|John]] permissions based on who he is, John would be given permissions based on his role,
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=193)** such as accountant. Role based access, when built well, is a very good framework to use and is the easiest model for the identity administrator to leverage. It can also provide a positive [[User Experience (UX)|user experience]], providing all the necessary permissions for a given job automatically. One downside of RBAC would be if a user needs permissions outside of their job. An example may be that an accountant needs access to a file for marketing, which is not part of his job. These types of exceptions have to be administered separately. Role-Based Access can be used very effectively by organizations that have well defined jobs. There are a few other access control models available for organizations to use, such as Attribute-Based Access Control, Rule-Based Access Control, and Risk-Based Access Control. These models aren't as widely used, but could be considered if one of the three primary models does not work for an organization. In order to be able to standardize a method of giving users permission to what they need to do their jobs, using access control models, such as Mandatory Access Control, Discretionary Access Control, or Role-Based Access Control, can give organizations an effective approach to apply appropriate controls to sets of users and objects. Take time to review the benefits of each
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/access-control-principles?u=76281980&t=286)** to determine which works best for your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (2), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** rbac (3), mac (1), dac (1)
> **Analogies:** such as (4)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - have (1)


### 2. Applying Authentication in Your Organization

[↑ Back to Table of Contents](#table-of-contents)

#### [Better together: Identity providers and identity governance](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=1)** - As we have discussed, authentication is validating a user's identity. Authorization is giving that user permission to access a resource. Authentication and authorization have to work well together to ensure the best results for access management. An identity provider is a provider that will execute authentication for your controls. Identity governance is the mechanism to execute authorization to your systems. Let's discuss each one in turn. You may ask, what exactly is an identity provider and why would I need one for my business? In the simplest terms, an identity provider is a service that authenticates your users and ensures they are who they say they are. Knowing your users are verified increases security for your organization, which is definitely a benefit. Think of an identity provider like a broker, someone who negotiates with the user on your behalf. An identity provider or IDP executes many tasks on your behalf as the trusted source of user authentication. An IDP can create, store and manage all the identities you may use for your organization. The process of authentication is straightforward. First, a user requests access. In most cases, users do this by entering their username and password into a form. The identity provider checks the records to see if the user is valid
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=92)** and has provided proper credentials and then sends a token back to the user that they can use to confirm they have proven themselves. Next is identity governance. Identity governance is the process that allows organizations to manage access to their resources in a centralized place. This process is usually enabled by an identity governance administration or IGA technology solution. Once authentication has taken place, you need to leverage identity governance in order to provide the right access to your user. The identity governance process confirms authentication has taken place by checking the user's token. That's how the identity provider and identity governance work together. The identity governance solution then gives the verified user access to the right resources. Let's look at an example. Let's say Luke owns two houses and needs to check his electric bill. When Luke goes to the utility website, he enters his username and password. The identity provider validates Luke is who he says he is and gives him a token. The identity governance tool confirms the token then goes to the electric company's records and sees that he has two houses. It then renders the information for both of his houses. But it doesn't give him any information on his neighbor's house. He only gets access to the accounts that are valid for him. It is very important that your organization
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/better-together-identity-providers-and-identity-governance?u=76281980&t=189)** only allow users entry into your ecosystem who should have access to your resources. Using an identity provider to validate their identity via authentication and then leveraging an identity governance system is an effective method for managing your users. If you'd like to learn more, you can check out specific vendors by searching for identity providers and identity governance, respectively.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2)
> **Env Vars:** idp (2), iga (1)
> **Speakers:** - as (1)

#### [Single sign-on](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=0)** - [Instructor] Single sign-on, commonly referred to as SSO in IT circles, is pretty much exactly what it sounds like. It is the ability of a user to sign on a single time while providing access to multiple service providers, things such as email or an expense reporting system. Single sign-on provides benefits for both identity administrators, as well as for users. Single sign-on is a very popular feature for users, even if they don't know what it is called. Being able to sign on just one time without having to repeatedly enter their username and password makes navigating across multiple places much simpler for users. The benefit of increased productivity is pronounced if one has many systems or resources they need to work with frequently. I know I like only signing on once per day. Another huge benefit of single sign-on is to reduce password fatigue. As a user of many resources, having to remember different passwords for different systems can be frustrating and inefficient. If I know that I only have to remember a single password, I am more likely to create a single strong password versus trying to simplify or replicate my multiple passwords. We all know about using password as your actual password, even if we know better,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=94)** or worse, we write down the many different passwords, leaving our credentials vulnerable to curious eyes. From an administration perspective, single sign-on provides simpler administration of authentication, since a standardized process can be used repeatedly across resources using the same set of tools. The other large benefit of single sign-on for identity administrators is improved [[Network Security]]. Let me explain. When an organization uses single sign-on, they have created a single identity across multiple systems. When a user leaves an organization, the administrators can turn off a single identity and know that access has been disabled across all those systems. What a relief. Side note, my IT friend, Tim, says this is a huge benefit for administrators. For a little more technical detail, let's discuss the process. Don't worry if you're not an IT technical person. I'll try to keep it straight forward. The single sign-on process leverages a service provider and that trusted identity provider we spoke of. Once a user goes to a website or application, they will enter an identifier, like their username. The service provider, like the website owner, sends something called a token request to the identity provider. The identity provider then checks that
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=188)** that user has received a token from them and passes that confirmation back to the service provider who will then pass through that confirmation to log onto their site. An important note here is that the confirmed token will follow the user across services as long as that service accepts token forwarding. You can ask your IT friends about that one. Just know that not all services accept those [[Tokens]]. The basis of single sign-on is having the trusted relationship between the service provider and the identity provider in place ahead of time so that the user can be quickly validated and sent to the various resources that are part of that trust. An example that you may be familiar with is if you use your [[Facebook]] login to sign into multiple websites. Facebook has over 150,000 websites that allow you to use that login to prove who you are. Some examples are Airbnb or Spotify. If you use those websites, you can use your Facebook login information so you don't have to create another set of credentials and remember a password. Single sign-on makes the user's life so much easier. Single sign-on is a great way to set up trust between a service provider and an identity provider to allow users to sign on a single time across multiple service providers.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/single-sign-on?u=76281980&t=284)** It creates higher security for service providers and makes it very easy for users to utilize many resources simply. It's a win for everyone involved.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (3), [[Network Security]] (1), [[Tokens]] (1)
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** sso (1)
> **Analogies:** such as (1)
> **Warnings:** important note (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Federation](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=0)** - [Instructor] Federation is a collection of domains or service providers that have established trust among one another, following standard principles to allow them all to execute authentication in the same manner. Having federation in place allows for more effective and secure identity administration, as well as improved simplicity for the [[User Experience (UX)|user experience]]. The act of federation is being able to use your relationship with an organization in multiple places, using an identity provider to validate your identity using a trusted list and provide that to various service providers so you can have easy access to their services. If you listened to the last video you heard about single sign on. Single sign on is actually part of the overarching framework of federation and is one of the most beneficial aspects of federation. If single sign on is the process of forwarding [[Tokens]] to achieve federation, we also need to discuss the different protocols that are used to enable everyone to speak a common language. There are three primary protocols used in federation, SAML or Security Assertion Markup Language, OAuth 2.0 pronounced OAuth, and OIDC or OpenID Connect.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=93)** Let's talk about each one specifically. SAML or Security Assertion Markup Language is a protocol that provides a secure method of passing authentication between an identity provider and a service provider. SAML is mostly used in web browsers using a language called XML. In order for authentication to work, the web browsers need to be configured the same. SAML is the protocol that defines a standard way to pass those details to each other. Think of it this way. If the identity provider sends authentication for Luke as Jones comma Luke which is configured as last name comma first name but the service provider is looking for Luke Jones which is configured as first name last name with no commas, they aren't going to match and Luke isn't going to get access. OAuth 2.0 is a protocol that allows one application to request a user's authentication with a different service to be used as proof of their identity without sharing password data. And yes, in case you're wondering, there was a previous version. OAuth 2.0 is used mostly in mobile applications using a language called [[JSON]]. In order for this protocol to work,
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=185)** an authorization token is provided by one application on your behalf to another application. Let's say Luke uses [[Facebook]] so that application has his login data. Luke decides he wants to go on vacation using Airbnb. Airbnb asks if he wants to use his Facebook login to log into their application. Airbnb asks Facebook for permission and Facebook gives a token instead of the actual information, and Luke can log into Airbnb. OIDC or OpenID Connect is a protocol used for authentication. It is a protocol that extends the token concept from OAuth but it also gathers additional user details. So while OAuth does not include any information that is identifiable in its token, OIDC allows for sharing account data from one application to another. If we go back to the example of Luke using Facebook to log into Airbnb, the difference in using OIDC would be that Airbnb may request to have Luke's profile and email address information in addition to using the token to validate Luke's identity. Federation can create a simple user experience by sharing identity validation amongst a group of trusted service providers. Single sign on is the most commonly used approach
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/federation?u=76281980&t=278)** to federation. Federation is made possible by using standard protocols so each service provider is speaking the same language. Those protocols are SAML, OAuth 2.0 and OIDC. Knowing how each works and which benefits are most relevant to your organization will help you provide a great user experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (5), [[User Experience (UX)|User experience]] (3), [[Tokens]] (1), [[JSON]] (1)
> **Env Vars:** saml (5), oidc (5), xml (1), json (1)
> **Definitions:** is a  (5)
> **Versions:** 2.0 (4)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 3. Applying Authorization in Your Organization

[↑ Back to Table of Contents](#table-of-contents)

#### [Least privilege](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=1)** - Now that we have discussed authentication, which is proving who you are, it's important to discuss authorization, or what you have access to. A foundational principle of authorization is called least privilege. Least privilege is an access control principle that outlines that the user should have the minimum necessary privileges to access information required to do their jobs. Let's talk about Luke. If Luke is an accountant at Globe Bank, then he should have access to bank information for credits and debits. However, he should not have access to HR files on Globe Banks' other associates, as that is not a part of his job. Of important note is that least privilege extends to all types of users. Remember, a user can be a person, a device, a system, or even an account. So ensuring that application systems only have access to what they need to access is just as critical as limiting people's access. There are a few key benefits to ensuring your organization uses the principle of least privilege. First, it limits the attack surface of your environment. If users only have access to a limited amount of information, it reduces the available targets that bad people can take advantage of. Second, least privilege limits damage in the event of a security incident. If a bad person does gain access to your systems, ensuring that users only have the access they need
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/least-privilege?u=76281980&t=95)** limits the amount of systems that can be impacted by that bad person. Lastly, if you have least privilege, auditing access becomes a lot simpler since each user has a limited amount of access that needs to be reviewed. Let's not get scared, but let's be realistic. In 2019, the Capital One data breach exposed information of over 100 million consumers because a firewall, here, the user was a system, had excess access to the cloud environment that was taken advantage of. An easy way to get started with least privilege is to identify a baseline set of privileges that every user should have. Many organizations call this birthright access. Birthright access for your human users may be network access and email. For a system user, it may be only network access to a certain network segment. Thinking about baseline privileges and applying minimum authorization or privilege to your different users will ensure that you are protecting your ecosystem through rigorous access controls.

> [!info]- Semantic Content
>
> **Definitions:** is an  (2), is called (1)
> **Warnings:** important note (1)
> **Prerequisites:** required to (1)
> **Speakers:** - now (1)

#### [Provisioning](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=0)** - [Instructor] The process of providing access to various systems is called provisioning. Provisioning is required to give your users access to the resources they need to do their job. Provisioning is the act of creating, updating and deleting access to a user's access across multiple systems, applications and information across your organization. Provisioning happens most frequently when a user is onboarded. For human users, that is when they are hired. For systems, that would be when they are created and/or put into a production state. Other times provisioning may need to occur would be if a user was promoted or transferred. And when a user is no longer part of your organization provisioning would need to delete access. While you could keep track of what users have access to which systems manually, imagine if you had hundreds of users with access to hundreds of resources. The ability to manage that in a spreadsheet or in individual systems quickly becomes untenable. The best approach to provisioning would be to leverage an automated provisioning system based on user roles. If you recall, when we discussed access control principles in chapter one, go check out that video for a refresher, role-based access allows you to outline privileges based on a user's role. When you combine this process with a technology
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/provisioning?u=76281980&t=96)** that can automatically grant permissions to a system based on their role, this becomes a very efficient way to manage access to your organization's resources. Let's check in with Luke. Let's say Luke in his accountant role, needs to have access to two different bank resources and one tax application. When Luke was hired at Globe Bank rather than a security administrator going into each of those three systems separately and manually adding Luke, the system sees that Luke is an accountant and sends a message to those three systems to give Luke permission to the accountant resources in that system. Voila. The added benefit is that in the sad case that Luke leaves Globe Bank, automated provisioning allows for those same systems to be notified to remove or deprovision Luke's access with one message from the access management tool. Ensuring that a user has the proper access to needed systems and resources requires you to have a provisioning plan in place. While you can do it manually, using an access management technology can help increase efficiency by automating provisioning across multiple systems for you.

> [!info]- Semantic Content
>
> **Definitions:** is called (1), is an  (1)
> **Cross-References:** we discussed (1)
> **Analogies:** imagine (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Identity lifecycle](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=0)** - [Instructor] Recent studies state that the average number of jobs a person will hold in their lifetime is 12. This is important because understanding a user's identity lifecycle with your company will ensure that your users have the right access to the right resources while they are a part of your organization. Understanding that their role in your organization will change over time is important to effectively manage their access. We'll approach this with an example using our friend Luke. Let's start at the beginning. You hire Luke at your organization. Lucky you. When Luke starts at your company, you will need to ensure he has birthright access, as well as any role-based access needed for his new accountant role at your organization. Next, Luke is doing such a great job, you promote him from accountant to accounting manager. This will require you to update his access to add additional HR information privileges for his direct reports so he can do their performance reviews and see their years of service. During Luke's work as a manager, he finds he is really skilled at developing talent, so he decides to transfer into the Learning and Development Team in HR as a manager. At this point, you will need to remove Luke's accounting access, as well as his access to his HR privileges for his accounting associates and you will need to add permissions for Luke
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/identity-lifecycle?u=76281980&t=96)** to have access to the Learning and Development platform as an administrator and give him access to HR information for his new HR reports. Finally, Luke gets a great opportunity at a different company to build out a new learning and development organization. Once Luke leaves your organization, you will need to remove all access to your organization. That includes network access, email access and any remaining system and application access based on his last role. However, note that Luke may still need access to some things after he leaves your organization. For example, he may need access to his tax documents based on being a previous associate at your organization or he may have pension information he will need access to when he hits retirement age. There are many possibilities for what an identity lifecycle may look like at your organization. Mapping out different use cases and what permissions you will need to manage during that lifecycle will be important to ensuring access is always appropriate to the part of the lifecycle your users are in.

> [!info]- Semantic Content
>
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced Tips and Tricks

[↑ Back to Table of Contents](#table-of-contents)

#### [Zero trust](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=1)** - You may know of the saying, "Trust, but verify," when talking about who and what you can rely on. There is a concept in security called zero trust that uses that saying. Zero trust says never trust, always verify. While the concept can be difficult to implement across your entire ecosystem, there are some principles you can leverage that can make a material difference in your security. Let's start with the definition: zero trust means that no one is trusted from the outside or inside of your network, and verification is required from anyone trying to access your assets and resources. If we did that, we would definitely ensure that people only have access to what they should have. If you need a refresher, go back and check out the video on least privilege. The first step in zero trust is ensuring every user has to verify who they are. You can use a simple automated way to do this, such as single sign-on to make it easier for your users. Next, there needs to be proper policies between applications and what they're allowed to share with one another. Finally, you would extend zero trust devices, such as servers, routers, et cetera, as well. Even though they are all within your network, it doesn't mean they should all have open access to one another. As one example, you wouldn't want your sales application to have open access to your HR application. Typically, a sales organization should not have detailed associate salary information.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/zero-trust?u=76281980&t=95)** Understanding the policies and rules of what can be shared and where is the core tenet of zero trust. Zero trust may sound simple, but it isn't always easy. The biggest risk of zero trust is the reduced productivity of your users. People require access to work and collaborate, so locking things down so tightly that they can't get what they need can be a very bad thing for them. So, how do you get started? Choose one use case or your most critical asset and make sure that it is locked down to needed users and to only applications and infrastructure it needs to talk to. Another approach might be to target a very vulnerable population and ensure that the resources they use are leveraging this model. The principles of zero trust can materially improve your security when implemented well. Making sure you understand users, applications, and infrastructure will help you implement appropriate rules. Just make sure to keep employee productivity in mind and proceed with caution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (2)
> **Best Practices:** make sure to (1)
> **Warnings:** caution (1)
> **Speakers:** - you (1)

#### [Role mining](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=0)** - [Speaker] A recent study showed that most organizations believe that 85% of their users have some excessive privilege in their organization. Role mining is an opportunity for an identity and access management analyst to review what users should have access to and what they are actually using in your organization to optimize user permissions. In other words, we use data about what users are consuming through accounting to determine the profile they should have. Role mining is an analytical process to review user and resource relationships to determine or modify user permissions. The concept of role mining is to automate the analysis against your data set versus trying to do manual audits. There are two key concepts that can be used with role mining, auditing access based on roles and modifying access based on actual usage. Auditing access based on roles is used primarily in organizations that leverage role-based access. If you have a clear outline of which roles require which access, it is a relatively straightforward process to have your identity and access management system audit those roles across your user's current roles. I would recommend that you do this kind of audit on a quarterly basis to ensure that users have not moved in their identity life cycle and permissions are as accurate as possible.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=95)** Once you have analyzed what resources users are actually accessing, the other role mining practice is to modify their role based on the permissions they require. This would mean you would add permissions that are being used as well as removing permissions to resources that the users were not using. A key result of this analysis is being able to optimize your organization's birthright access profiles for different roles. As a user, it means you get the right access you need when you start working. As an administrator, it means you know that your organization roles don't have excessive access. Let's check in with our friend Luke. If we look at Luke's previous permissions, which included access to two bank resources and a tax application, a role mining process may see that Luke regularly accesses one of the bank resources and the tax application, but has not accessed the other bank resource in over six months. In this case, the role mining analysis would recommend that you remove access to the unused resource and consider if modifying the accountant role makes sense as well. Being able to analyze your user's permissions to resources and how they use them can significantly reduce the [[Security Risk]] in your organization. By ensuring that people have the appropriate resources needed for their role when you audit,
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/role-mining?u=76281980&t=188)** and in the case where they are not using them, they can be automatically modified and or removed as relevant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Risk]] (1)
> **Definitions:** is an  (2), in other words (1), is a  (1)
> **Speakers:** - [speaker] (1)

#### [Conditional access and just-in-time access](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=0)** - [Instructor] Imagine how much attention your house would get if you always left your front door open. People may see that as an opportunity to get in at any time. Access to resources can be the same. If you have always-on access, it allows more opportunity for attackers to take advantage. Fortunately, there are ways to minimize this risk. Conditional access is one way and just-in-time access is another. Let's talk about each one individually. Conditional access is a set of rules and conditions that must be met in order to gain access to various resources and services. To gain access, the user must ensure all conditions are compliant. For your reference, conditional access is most common with [[Microsoft]] [[Active Directory]] and [[Microsoft Azure|Azure]], as well as their Intune product for mobile devices. Conditional access can block or allow access. It can require multifactor authentication, it can require a compliant device, or it can restrict a user session. Sometimes it can even restrict access based on a location. Let's go through a few examples for clarity. One example is when conditional access requires that a user's laptop have the latest patches or access is blocked. Another example would be when conditional access requires someone with administrative privileges to use multifactor authentication
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=94)** versus a regular user only having a single factor. Lastly, if there was some weird behavior happening with a user sign-on, conditional access may limit that user and not allow them to reach the internet until the machine had been scanned for malware. Just-in-time access works differently. Just-in-time access limits the period of time someone can access a resource using a predefined set of time based on the resource or use case. An example might be when a system administrator needs to use an elevated role to complete a task. That administrator would check out the elevated role for say two hours to complete that task. Let's be honest about this one. Doing this type of just-in-time access without an automated solution would be really hard. Most security teams will look for an automated solution to manage the time periods for different resources. An especially popular use of this automated solution is a request access feature that allows users to request access to something outside of their normal work functions without adding burdensome approvals. The reason this works is in addition to the access being for a limited time, the request for access is logged and can be audited. Using controls like conditional access
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/conditional-access-and-just-in-time-access?u=76281980&t=188)** and just-in-time access allow organizations to minimize risk by requiring certain compliance measures or by limiting the exposure of time to their environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1), [[Active Directory]] (1), [[Microsoft Azure|Azure]] (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [An important side note on passwords](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=0)** - [Narrator] We've talked a lot in these videos about access control, including authentication, or proving who you are, what you know, and sometimes what you have. The part of authentication that is what you know is a password or passphrase. Passwords are almost always the weakest link of security controls because they involve a person who wants something easy to remember. Did you know that 89% of web application breaches involved some sort of credential theft? That's a lot. To help combat this, we can use things like multifactor authentication. And if we go back to the very beginning, it all starts with password habits by the user. Let me provide you three opportunities to make passwords easier for your user. First, introduce passphrases instead of passwords. We are taught that our passwords need 12 or more characters, a number, a special character, et cetera. That's hard to remember. How about we just make passphrases instead? Instead of having to remember something like this with the at signs and the numbers, why not just make a sentence? My one salamander's name is Jake. Those spaces? They're special characters too. I'll bet you can remember that.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=94)** And attackers can't find those words all together like that in any dictionary. One more for practice, because this is so important. I eat oatmeal 5 days a week. Voila, easy to remember and hard to guess. Next, let's talk about password vaults, also known as password managers. These little gems are an amazing tool to use as the tool requires a user to only remember one password. That's right, I said one. Password vaults are just like a bank vault. They have one master password. Think of it like a single combination that only the user knows. All the [[Representational State Transfer (REST)|rest]] of the user's passwords are in a vault and protected. As long as that master password is long and secure, use a passphrase here too, then no one should get access to your vault. I personally have a password vault and it has over 300 passwords in it. I don't have to remember more than one. Some popular password vaults out there are things like LastPass, 1Password, Dashlane, Keeper, and others. A few bonus pieces of these vaults are that most of them have a mobile app, so your passwords go everywhere with you. Also, some are even free for individual users
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=187)** so they can be protected at work as well as at home. One, watch out! If the user forgets their master password, no one else has it, so make sure it is memorable. The last password opportunity for you, wait for it, is to get rid of passwords entirely. Yes, you heard me correctly. There is an ongoing change in the password landscape to go passwordless. This means that instead of a password, you can leverage biometrics, an authenticator application, or a security key called FIDO2 keys in place of a password. We'll assume biometrics for our purposes here, although any will work, so replace as you see fit. The process is fairly straightforward. First, during registration, you create a device-specific private key using a biometric or PIN that is held on your computer and only there. When you log in, you enter your username. Then you provide your biometric or PIN, which unlocks that private key, and tells the identity provider you are who you say you are and grants you access for a limited time. During that time, you must provide a biometric or authenticator or FIDO2 key gesture and you will receive a token in the background
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/an-important-side-note-on-passwords?u=76281980&t=280)** that provides you access to your resources. The nice part about passwordless is that it doesn't have to be all or nothing. You can roll it out by population or by individual without any real overhead, other than ensuring the device being used has that capability. The one watch out here is to ensure there is a backup in case you need to recover your key. Passphrases, password vaults, and passwordless are all ways to simplify the [[User Experience (UX)|user experience]] without sacrificing security. I highly recommend that you consider one, two, or all three of them as part of your identity and access management strategy. For additional information, check out [[NIST]]'s special publication 800-63B Rev. 3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[User Experience (UX)|User experience]] (1), [[NIST]] (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** fido2 (2), pin (2), nist (1)
> **Definitions:** is a  (2), known as (1), is an  (1), means that (1)
> **Analogies:** just like (1), think of it like (1)
> **Warnings:** watch out (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=1)** - We've talked about a lot of different concepts today. Take a minute to congratulate yourself on all you have learned. With so many new ideas, how do you get started? My first bit of advice is to not try to boil the ocean. Start small, try things to ensure they work, and then you can scale them once you have the process down. Let's go over four things you can go back to your company right now and start implementing. First, you need to know what you have. Make a list of your user types, especially critical roles such as a system administrator with elevated access. Make a list of your key systems for those users with use cases for their workday and their habits. Second, determine how you are going to implement access controls. Which approach works best for your organization? That will help outline the approach you will take for your users from the beginning using a consistent process. Third, set a password policy. There's a lot of discussion right now about what the right answer is. If you can't go passwordless right now, I suggest you require passwords or passphrases of at least 14 characters that only have to be changed once per year or in case of a security incident. You can check out [[NIST]] Special Publication 800-63B guidance for this. Lastly, take those users with elevated access
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-identity-and-access-management/next-steps?u=76281980&t=98)** and separate their normal user accounts from their elevated user accounts. You may call them A accounts, where the A stands for administrator. That way you can monitor what happens when that user is leveraging their elevated privilege. That's critical when there is a security incident. Identity and access management isn't just a project, it's a program. It's a journey that will take time and effort. If you leverage the principles outlined in this course, you will have standard processes and a strong foundation to apply the principles one by one. Good luck on your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (1)
> **CLI Commands:** make (2)
> **Definitions:** stands for (1), is a  (1)
> **Env Vars:** nist (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)
> **Speakers:** - we (1)


## Instructor

- [[Mandy Huth]]

## Skills Covered

- Identity and Access Management (IAM)

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