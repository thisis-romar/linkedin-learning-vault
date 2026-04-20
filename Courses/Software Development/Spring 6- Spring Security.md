---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: spring-6-spring-security
url: "https://www.linkedin.com/learning/spring-6-spring-security"
duration_minutes: 90
duration: 1h 30m
level: Intermediate
updated: 5/16/2025
learners: 3414
skills:
  - Spring Security
  - Spring Boot
exercise_files: true
github: "https://github.com/LinkedInLearning/spring-6-spring-security-5985041/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGM42dYNIUQUw/learning-public-crop_675_1200/B4EZaNvIdDHoAY-/0/1746134665323?e=2147483647&amp;v=beta&amp;t=_d-79CVF9PcZt994YTHF1qhQl94G3OXpRDEJLCb1qG4"
linkedin_topic: Software Development
learning_paths:
  - Getting Started In Spring Development
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/spring-security
  - skill/spring-boot
status: not-started
created: 2026-04-20
---

![Spring 6: Spring Security](https://media.licdn.com/dms/image/v2/D4E0DAQGM42dYNIUQUw/learning-public-crop_675_1200/B4EZaNvIdDHoAY-/0/1746134665323?e=2147483647&amp;v=beta&amp;t=_d-79CVF9PcZt994YTHF1qhQl94G3OXpRDEJLCb1qG4)

# Spring 6: Spring Security

> This comprehensive Spring Security course provides an in-depth exploration of security implementation in Java applications, covering critical topics from core authentication concepts to advanced security techniques. Learn to implement various authentication methods including in-memory, JDBC, and LDAP authentication, master password hashing with bcrypt, develop form-based and OAuth2 authentication 

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security) | 1h 30m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Frank P Moley III]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-6-spring-security-5985041/codespaces)

## Skills Covered

- Spring Security
- Spring Boot

## Table of Contents

### Introduction

#### Secure with Spring Security
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980&t=0)** - [Frank] Building secure applications can be stressful and difficult for many developers.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980&t=5)** For developers working in the Java Virtual Machine, Spring Security simplifies the processes and allows you to focus on delivery of your business value.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980&t=14)** Hi, my name is Frank Moley.
>
> **[0:16](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980&t=16)** I'm a developer, architect, teacher and perpetual student with over 25 years of development experience, much of that with the JVM.
>
> **[0:25](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980&t=25)** Join me in this course to learn how to use Spring Security to help secure your applications in a simpler and less stressful way.

> [!info]- Semantic Content
>
> **Env Vars:** jvm (1)
> **Speakers:** - [frank] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course, there is some prerequisite knowledge you should have, as well as some understanding of the environment itself.
>
> **[0:08](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=8)** While you can use Spring with several JVM languages, we will be focusing on using the Java language.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=14)** For this course, I'll be using the latest long-term support version of the Java language that is supported by Spring today, and that is Java 21.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=23)** While we won't use any of the newer features of the language, you should have a good base knowledge of Java in general.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=30)** Since we are using codespaces for this course, the JDK is installed for you.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=35)** However, if you prefer to work locally, make sure you have a JDK installed and not just a JRE.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=42)** This course is based on the Spring framework, so there is an expectation of knowledge of Spring.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=47)** If you are new to Spring, stop this course and go through my course, Learning Spring with Spring Boot 3 at a minimum.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=54)** As I just said, a base understanding of Spring is very important.
>
> **[0:58](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=58)** We're going to focus on the security framework, not Spring itself.
>
> **[1:03](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=63)** We will be leveraging Spring Boot as our framework for running our applications.
>
> **[1:07](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=67)** As such, you will need a base knowledge of Spring Boot and how it works.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=72)** Once again, my course, Learning Spring With Spring Boot 3, is a great starting point if you need it.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=78)** Spring security is primarily designed for web security.
>
> **[1:22](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=82)** You should understand how Spring Web works, especially in Spring Boot.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=87)** We will be working with Thymeleaf templates a bit in this course.
>
> **[1:30](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=90)** As such, some basic knowledge will be good.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=93)** Once again, the course that I've mentioned will provide you with the basic knowledge that you need.
>
> **[1:39](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=99)** There are a few more pieces of software that you will need to have on your computer for this course if you are not using codespaces, they're already installed in the codespaces environment if you are using them.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=110)** We're going to be using Maven as our dependency management system.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=114)** Now, Spring supports both Maven and Gradle, but for this course, I will be using Maven.
>
> **[2:00](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=120)** If you prefer the Gradle path, it will definitely work, but you will need to adjust as you go.
>
> **[2:05](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=125)** You'll need a command line tool to call web URLs and execute requests.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=130)** I will be using a tool called HTTPie, but cURL should work equally well.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=136)** You just need to use the appropriate options if you're going to use it.
>
> **[2:21](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=141)** Now with that, let's jump into the course.

> [!info]- Semantic Content
>
> **Env Vars:** jdk (2), jvm (1), jre (1)
> **Prerequisites:** prerequisite (1), make sure you have (1), you'll need (1)
> **CLI Commands:** make (1), curl (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** curl (1)
> **Versions:** java 21 (1)
> **Tools:** command line (1)


### 1. Spring Security Concepts

#### Introduction to Spring Security
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=0)** - [Instructor] The Spring Security Project is one of the most powerful abstractions from the perspective of the developer.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=6)** However, it is also one of the most complex considering everything that it includes.
>
> **[0:11](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=11)** Throughout this course, we will focus on Spring Security and the problems it tries to solve and the complexities that it abstracts away.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=19)** In order to fully grasp the power of Spring Security, we first need to know where it fits in.
>
> **[0:25](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=25)** Security should be tackled in a layered fashion.
>
> **[0:29](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=29)** This layered security pattern provides you distinct focus areas to secure monitor as well as tune.
>
> **[0:36](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=36)** Now, I'm not going to go too deep here.
>
> **[0:39](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=39)** These topics can comprise several courses on their own, but I do want a conceptual framework so you get a feel of where Spring Security comes into play.
>
> **[0:48](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=48)** Most often, the focus in this layered model starts with the lowest level, and that is the physical hardware.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=54)** Hardware must be physically secured and uniquely identifiable to trusted systems.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=61)** After you plan to secure the hardware, you start looking at the network.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=65)** Here we deploy transport layer security, firewalls, network segmentation strategies like VLANs and security zones, intrusion detection systems, and the list goes on and on.
>
> **[1:17](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=77)** We then move to the operating systems where user access controls, patching policies, and software restrictions provide additional layers of security for our system as a whole.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=87)** Finally, we look at application security, and this is where we focus on good coding practices, proper data handling, and application user access controls.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=98)** So where does Spring Security fit in?
>
> **[1:40](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=100)** Well, it's in the application space itself.
>
> **[1:44](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=104)** Spring Security is a project that provides amazing abstractions of the J2EE now called Jakarta EE application space.
>
> **[1:53](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=113)** These applications help solve the various issues of traditional Java enterprise security like portability and vendor lock-in.
>
> **[2:01](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=121)** By abstracting these topics, we are providing a clean and efficient way to provide security services.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=128)** Spring Security isn't just for enterprise developers.
>
> **[2:11](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=131)** It also provides valuable tools for internet facing applications running in the JVM.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=138)** Obviously as a Spring project, it plays very nice with the Spring framework as a whole, but that isn't a requirement.
>
> **[2:27](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=147)** In this course, we will do all of our work using Spring Boot, but at no point should that feel like a requirement.
>
> **[2:34](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=154)** You could use Spring Security with traditional Spring-based WAR applications, as well as raw Java applications.
>
> **[2:42](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=162)** Most of Spring Security is designed to focus on authentication and authorization.
>
> **[2:47](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=167)** These are often the most critical needs at the application level itself outside of secure coding practices.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=175)** We will focus on these topics exclusively in this course, but there's a lot of material in these topics, so buckle up and let's dig into what authentication and authorization is really about.

> [!info]- Semantic Content
>
> **Env Vars:** j2ee (1), jvm (1), war (1)
> **Code Keywords:** finally, (1), let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Authentication vs. authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=0)** - [Instructor] Authentication and authorization are all too often misunderstood, overlooked, or confused by application developers.
>
> **[0:07](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=7)** But I want to provide a simple baseline of the meaning of these words and how they apply to software so that we can level set before we move into this course.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=17)** Let's start with authentication, also commonly called AuthN.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=21)** Authentication is the process of determining the who, specifically and more technically, it is the process of determining that a principal is who they say they are.
>
> **[0:33](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=33)** Now, this goes beyond a simple username and password scenario, but that can be a method of authentication.
>
> **[0:41](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=41)** A point to remember when talking about principals in authentication is that systems as well as humans can be principals.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=49)** Often we leverage a process of a system calling another system.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=53)** In a microservices world, that tends to happen a lot.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=57)** We can leverage Spring Security to secure system to system calls the same way we would use for user to system calls.
>
> **[1:06](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=66)** Now, Spring provides out-of-the box support for many different flavors of authentication.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=72)** In the web world, there is support for HTTP basic, as well as HTTP digest authentication.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=79)** It also includes support for X.509 certificate based authentication.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=84)** The most common internal level of authentication model is forms based authentication.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=91)** Spring Security provides rich and robust support for forms based authentication models.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=97)** Now in the enterprise world, we often see integration with LDAP as a method of authentication.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=103)** Spring Security provides native LDAP support as well as support for Microsoft Active Directory using the LDAP abstraction.
>
> **[1:52](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=112)** This is clearly one of the most common integration points in the world for Java-based applications using Spring Security.
>
> **[2:00](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=120)** Spring Security has rich support for other external facing authentication providers that are much more common in an internet-based system.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=130)** Spring can support OAuth Connect and OpenID, as well as Jasig CAS for single sign-on authentication options.
>
> **[2:19](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=139)** Also, as you might expect from a Java world, there's also support for JAAS.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=143)** Finally, Spring natively supports Kerberos and SAML.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=148)** We're not going to go into those topics in this course, but if for some reason you find yourself needing to implement these protocols, note that Spring Security can take away some of the pain.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=158)** Not all of it, but some of it.
>
> **[2:41](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=161)** Spring also has rich third party support for many other authentication providers.
>
> **[2:46](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=166)** This brings us to authorization, also commonly called AuthZ.
>
> **[2:51](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=171)** Once we determine who the principal is via AuthN, we can then determine what they're authorized to do.
>
> **[2:58](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=178)** The principal must be authenticated to get to this point, so it's a prerequisite in every single flow.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=185)** Often authorization is also called access control, and for good reason.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=190)** Via authorization, you are controlling access to the underlying resources.
>
> **[3:15](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=195)** Spring Security handles authorization, and in doing so, supports three distinct cases.
>
> **[3:21](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=201)** The first and most common, and the one that we'll dig into exclusively in this course is web request based authentications.
>
> **[3:29](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=209)** The pattern that we apply to web request can be extended, however, to support method invocation security.
>
> **[3:36](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=216)** And finally, you can leverage Spring Security to provide domain object instance access control, which can be very powerful in highly sensitive areas like PII, financial or healthcare information.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=230)** But that is again, beyond the scope of this course.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (3), http (2), cas (1), jaas (1), saml (1)
> **Code Keywords:** finally, (2), let (1)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)


### 2. Securing Web Applications with Spring

#### Introduction to project
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=0)** - [Instructor] Most of the work that we'll be doing in this course is adding security to a web application.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=5)** To save immense time and so we can focus on Spring security, I've created a Spring Boot based web application that we will use.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=14)** The project details are really important to understand.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=17)** This is a simple monolithic web application based on Spring MVC.
>
> **[0:22](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=22)** I'm using Thymeleaf with the little bootstrap styling to make the application more attractive.
>
> **[0:27](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=27)** And so you can work with principles in the application itself, the view and the model.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=32)** We're using an embedded H2 database with default schema and data files that are preloaded by the application context starting up.
>
> **[0:40](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=40)** So we have a fresh database at every restart.
>
> **[0:44](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=44)** We also have a simple Spring data repository to connect to that data source.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=49)** So let's take a look at the application itself.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=53)** I've opened up GitHub Code Spaces, and I'm going to start with the admin web application, which is what we are going to use for this chapter.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=61)** Within here, you can take a look at the Palm.XML file and you'll see that we have brought in Spring Boot starter Actuator, Lombok for Annotation Processing, Spring Boot Starter JPA, Thymeleaf and Web, as well as the H2 embedded database.
>
> **[1:17](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=77)** And then of course, the test package that comes with every Spring Boot application.
>
> **[1:22](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=82)** In source main Java, we have our base application package, and within there we have two sub packages as well as the application class that comes with Spring Boot.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=93)** One of those packages is our data package, and underneath that is our model, which has our customer model annotated with Lombok as well as JPA and our order model.
>
> **[1:44](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=104)** Similarly with JPA and Lombok.
>
> **[1:47](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=107)** And then we have two repository interfaces.
>
> **[1:49](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=109)** We have a customer repository and an order repository.
>
> **[1:53](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=113)** And then in the web package we have controllers for each of them, including a model for our order model, more details on that later.
>
> **[2:03](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=123)** In our resources directory, we also have our templates.
>
> **[2:06](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=126)** We've got a customer template and you'll see that we bring in a common header, we bring in Bootstrap, and then we have the styling, a detailed Customer's template.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=135)** We have a generic error template.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=138)** We also have the header HTML, which is used as a fragment on every page.
>
> **[2:22](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=142)** We've got our indexer homepage and then an orders page.
>
> **[2:26](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=146)** We've also got our application properties set for both JPA and Spring itself.
>
> **[2:30](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=150)** And then our data.SQL file and schema.SQL file, which are used to load that data into the embedded database.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=158)** So with that, I'm going to jump over here to admin web, and I am going to start it in the Spring Boot dashboard.
>
> **[2:47](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=167)** Now I do have this set to auto fire a browser window.
>
> **[2:51](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=171)** If yours does not fire, you may have popup block or some other thing.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=175)** In that case, what you need to do is simply go to the ports tab, hover over the application 80-80, and click the link to open up the browser.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=185)** But as you saw mine loaded, I can go to the customer's tab and load customer data.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=190)** If I go into details, I get the orders for that customer.
>
> **[3:14](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=194)** And then on the orders tab, I get all of the orders themselves as well with the link back to the customer as necessary.
>
> **[3:21](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=201)** So this is the project that we are going to work with throughout this course, specifically in this chapter as we add security to this.

> [!info]- Semantic Content
>
> **Env Vars:** jpa (4), sql (2), mvc (1), xml (1), html (1)
> **File Paths:** palm.xml (1), data.sql (1), schema.sql (1)
> **Code Keywords:** let (1), case, (1), this. (1)
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Cross-References:** as you saw (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)

#### In-memory authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=0)** - [Instructor] So we're going to start with the Hello World example of Spring Security.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=4)** Now I want to be very, very clear.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=6)** This is not how we should ever do this in the real world.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=9)** I'm going to show you how easy it is to use basic Spring Security before we get into the noise.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=14)** But this can never be used in a production or any deployed situation in the real world, and that's very, very important to understand.
>
> **[0:22](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=22)** So let's go ahead and get started.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=23)** The first thing we're going to do is go to our admin web application, open up the pom file, and we're going to add a couple dependencies to this.
>
> **[0:31](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=31)** So at the end of my compiled dependencies I am going to add the first one, which comes from org.springframework.boot.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=43)** And that is Spring Security.
>
> **[0:45](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=45)** So spring-boot-starter-security.
>
> **[0:51](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=51)** Now you don't have to add 'em the way I'm doing it.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=53)** You can use the tool from the toolkit that I've installed.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=57)** I just prefer to type them.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=60)** So the second one that we're going to add is from org.thymeleaf.extras and we're not going to use this for a while, but I just want to get it installed while we are here.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=71)** And the artifactID is thymeleaf-extras-springsecurity6.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=84)** And we need to add a version because as of right now, there's actually a bug in this.
>
> **[1:28](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=88)** So we're going to do 3.1.1.RELEASE in all caps.
>
> **[1:40](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=100)** And then we're going to go down to the test section and we're going to add another dependency.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=105)** And though we're not going to use this one at all in this course, it's a good habit to go ahead and add it because you're going to use it in the real world.
>
> **[1:52](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=112)** So that comes from org.springframework.security, and the artifactID that we are going to bring in is spring-security-test.
>
> **[2:05](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=125)** And of course the scope of this will be test.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=130)** So now we can go ahead and close that and we're going to go to source, main, Java.
>
> **[2:14](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=134)** In our base package, we are going to add a new Java package called config.
>
> **[2:22](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=142)** And within that config package, we will add a new Java class.
>
> **[2:27](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=147)** And that class is going to be called WebSecurityConfig.
>
> **[2:34](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=154)** Now we need to start by annotating this.
>
> **[2:36](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=156)** So we're going to annotate it with @configuration from org.springframework, and @EnableWebSecurity, also from org.springframework.
>
> **[2:47](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=167)** Now there's a couple beans that we need to add.
>
> **[2:49](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=169)** The first one that we are going to add is to actually set up the basic security.
>
> **[2:54](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=174)** Now this is valid in the real world.
>
> **[2:57](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=177)** This method is definitely something you would use if you were using basic security.
>
> **[3:02](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=182)** So we're going to create an instance of a SecurityFilterChain and we will simply call it securityFilterChain.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=189)** And it is going to take an instance of HTTP security that we will call HTTP.
>
> **[3:16](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=196)** And this of course throws an exception.
>
> **[3:18](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=198)** So now within here we're going to go and grab HTTP, and now we're going to do an authorizeHTTPRequests and we're going to get a handle on our requests and do a lambda mutation on it to requests.
>
> **[3:40](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=220)** And now we're going to do a request matcher.
>
> **[3:43](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=223)** We're going to do the request matcher at our context route as well as at slash index.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=230)** And at these two locations, we are going to permit all, and this is very important.
>
> **[3:55](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=235)** We need to have a way to get there without authentication.
>
> **[3:59](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=239)** Now any other request is going to be required to be authenticated, okay?
>
> **[4:09](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=249)** So now we're going to go and implement httpBasic, and we're going to simply use a default customizer from org.springframework, and we will use with defaults on it.
>
> **[4:22](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=262)** Now at this point, we are ready to simply return the http.build and that method is complete.
>
> **[4:31](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=271)** So we now have basic security set up, but we need to know where our usernames are and our passwords are.
>
> **[4:38](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=278)** And normally we would store this in other locations, which we will show you later, but for now, we're going to simply create a UserDetailsService and we will simply call it user details service.
>
> **[4:52](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=292)** And this is going to be an in-memory user detail.
>
> **[4:56](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=296)** So we will get an handle on user details from org.springframework.
>
> **[5:01](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=301)** We'll simply call it User for simplicity.
>
> **[5:05](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=305)** And this is going to be user.withDefaultPasswordEncoder, which is deprecated, and that's okay, we know it.
>
> **[5:14](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=314)** You're not supposed to use a default password encoder in the real world.
>
> **[5:18](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=318)** Again, this is a Hello World example.
>
> **[5:21](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=321)** So do our username of user, our password of the ever-so-secret, password.
>
> **[5:27](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=327)** The roles that we will add to this are simply User and we will build it.
>
> **[5:34](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=334)** All right, now that we have built that, we can simply return a new InMemoryUserDetailsManager,
>
> **[5:46](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=346)** passing it our user object.
>
> **[5:51](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=351)** And we are now ready to run it.
>
> **[5:52](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=352)** So I'm going to go to the Spring Boot dashboard and launch my admin web application and it's going to open up.
>
> **[6:00](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=360)** Now, if I click on customers, it's now going to prompt me with the browser-based authentication for basic loss.
>
> **[6:06](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=366)** So I will simply do user and password, and now it lets me in and I can navigate to different locations, including going back to the root.
>
> **[6:17](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=377)** Everything works fine and it is all secure.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), let (1), while, (1), class. (1), lambda (1)
> **Code Identifiers:** artifactid (2), securityfilterchain (1), authorizehttprequests (1), httpbasic (1), withdefaultpasswordencoder (1)
> **UI Navigation:** go to (3), click on (1), navigate to (1)
> **Env Vars:** http (3), release (1)
> **Prerequisites:** set up (2)
> **Versions:** 3.1.1 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### JDBC authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=0)** - [Narrator] So, in the last video, we used an InMemory user store.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=4)** This not only isn't tenable for real solutions, it isn't scalable or safe.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=9)** If you are keeping your users within your walls, the next step is adding the user to a database.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=15)** So let's go ahead and do that.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=17)** All right, so the first thing we need do, is to go to src, main, resources.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=21)** Let's open up our schema.sql file.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=24)** We're going to add a couple of new tables.
>
> **[0:27](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=27)** So the first table that we will add is called users.
>
> **[0:33](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=33)** It's going to have a username field that is varchar_ignorecase of size 50, And this is the primary key.
>
> **[0:44](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=44)** It's going to have a password, which is a varchar_ignorecase as well.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=49)** This time we're going to do 500, and this will be not null, and then it will be enabled boolean not null.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=59)** Now, this is the default, out-of-the-box way of building this schema.
>
> **[1:03](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=63)** This is not how I'd normally do it.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=65)** I actually build my own schema and my own user details service.
>
> **[1:10](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=70)** But again, for the purposes of demo, we're just going to go with the default.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=74)** I just don't really like this table structure personally, but that's okay.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=78)** So now we're going to build a table called authorities, and it is going to have a username field that is a varchar_ignorecase, once again.
>
> **[1:28](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=88)** As you might imagine, the size will be 50, and not null.
>
> **[1:32](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=92)** It's also going to have an authority, which is a varchar_ignorecase.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=97)** Again, size 50 will be fine.
>
> **[1:40](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=100)** It also can be not null.
>
> **[1:42](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=102)** And we're going to do a foreign key on the username field, and it will reference users with a username.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=114)** Now, there's one more thing that we need to add to this file, and this is going to be a UNIQUE INDEX.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=122)** We'll call it idx_auth_username on a authorities.
>
> **[2:09](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=129)** For username, authority.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=135)** And that's it for our schema.
>
> **[2:17](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=137)** So now let's jump into our data file and let's add a few data elements.
>
> **[2:21](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=141)** Now we're going to do a little bit of copy and paste here to make this easy.
>
> **[2:24](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=144)** So let's start with an INSERT INTO users username, password, enabled with values of user.
>
> **[2:39](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=159)** We are going to call this passwordjdbc, and true.
>
> **[2:47](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=167)** We will simply copy that line and paste it.
>
> **[2:50](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=170)** And we are going to do our admin user.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=175)** Now we'll do an INSERT INTO authorities, with a username and an authority, and the values, we'll start with user, and we'll put that person with a roles of USER.
>
> **[3:18](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=198)** I'm going to copy that, paste it twice.
>
> **[3:22](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=202)** We will set admin also to the role of USER, and admin to the role of ADMIN.
>
> **[3:32](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=212)** Now let's jump into our src, main, java.
>
> **[3:36](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=216)** Go into our config, and our WebSecureConfig, and and we are now going to modify our UserDetailsService.
>
> **[3:45](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=225)** So the first thing that we'll do, is we will get rid of all of the InMemory.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=230)** We are going to auto-wire in a data source from javax.sql called dataSource.
>
> **[3:56](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=236)** And Spring will wire that in as it brings up the InMemory database.
>
> **[4:01](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=241)** And we return a new JdbcUserDetailsManager, passing it the dataSource.
>
> **[4:13](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=253)** We'll now create another Bean.
>
> **[4:16](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=256)** And this is going to be a static Bean called PasswordEncoder, called getPasswordEncoder.
>
> **[4:28](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=268)** And we are going to simply return a NoOpPasswordEncoder, which is deprecated, .getInstance.
>
> **[4:38](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=278)** This is not something you should use.
>
> **[4:40](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=280)** Again, demo purposes.
>
> **[4:43](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=283)** So with that, we can now run our application.
>
> **[4:50](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=290)** Now there's a couple things that are going to happen here.
>
> **[4:52](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=292)** Either you're going to get prompted immediately with the password box, because we did change the password, or in my case where I've already run it, I've already dealt with that.
>
> **[4:59](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=299)** But we need to talk about the way basic auth works.
>
> **[5:02](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=302)** So, it actually is stored in the browser itself.
>
> **[5:05](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=305)** So, we're not going to be able to log out.
>
> **[5:06](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=306)** That's a problem with basic auth.
>
> **[5:08](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=308)** So we never get challenged again to type it in.
>
> **[5:11](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=311)** So, what I want you to do, is to go ahead and copy that, open up a new private incognito window and go to that same place.
>
> **[5:21](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=321)** Now, it's probably going to ask you to log into GitHub, because this is public.
>
> **[5:25](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=325)** So, I'm going to use my pass key to do that.
>
> **[5:29](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=329)** And now when it loads, it'll load the index page, I can go to Customers, and it now asks me for this password again.
>
> **[5:36](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=336)** So, user, we will call this passwordjdbc, and it logs in.
>
> **[5:42](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=342)** So, we know that we're using the database, because we removed the InMemory, we obviously change the password as well.
>
> **[5:47](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=347)** And that's what we need to see.
>
> **[5:49](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=349)** So, with this, we have a JDBC-based password system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), default, (1), default. (1), static (1), private (1)
> **Env Vars:** insert (2), into (2), user (2), unique (1), index (1)
> **Code Identifiers:** varchar_ignorecase (4), datasource (2), idx_auth_username (1), getpasswordencoder (1), getinstance (1)
> **Definitions:** is a  (3), is called (1)
> **SQL:** insert into (2), index (1)
> **UI Navigation:** go to (3)
> **File Paths:** schema.sql (1), javax.sql (1)
> **CLI Commands:** make (1)

#### Leveraging bcrypt for hashing
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=0)** - [Instructor] So it just created passwords using plain text.
>
> **[0:02](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=2)** You should never, never store passwords in plain text.
>
> **[0:07](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=7)** You should never encrypt your user's passwords either.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=10)** You should use a proper cryptographically sound one way hash, Shell 256 is no longer considered secure.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=18)** There are several valid hash algorithms you can use and Spring Boot supports them.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=23)** But we will use the default one, which is Bcrypt.
>
> **[0:27](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=27)** So the first thing that we need to do is we need to put a command line tool in the environment.
>
> **[0:31](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=31)** So we're going to do an SDK to use SDK Man, which is installed, install Spring Boot.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=38)** Now once that is installed, we can actually use it to encode our password.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=43)** So we're going to do an encode password and we will do our password JDBC, and we can now grab that entire text string and copy it.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=57)** Now open up admin web, go to source main resources and go to our data file.
>
> **[1:04](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=64)** So we will simply replace the plain text password with the Bcrypt password.
>
> **[1:13](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=73)** Now with that said, we need to actually go out and make this use BCrypt.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=78)** So in order to do that, we simply go to our source bank Java config, go to our web security config and simply remove the password encoder.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=91)** Bcrypt is default behavior.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=94)** So once that is gone, we can now go and run our admin web application.
>
> **[1:41](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=101)** Now again, remember that this is probably going to be stored because it's still using basic auth.
>
> **[1:47](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=107)** So I'm going to copy it and open up an incognito window, pop that in.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=114)** I'm going to have to sign in again.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=119)** And now when I go to customers, it prompts me.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=122)** I can put in my user and do my password. JDBC.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=128)** And there we go, we've logged in, so it's now hashed our password.
>
> **[2:11](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=131)** So now it's stored in a way that no one can ever figure out what it is other than in this case, they know that they're both the same, they don't know what that value is.
>
> **[2:21](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=141)** Probably could figure it out pretty quickly.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=143)** Doesn't really matter for demo purposes, but the idea here is still the same.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=148)** We have a password that has been encoded using a one-way hash and is now stored in a safe manner In our embedded database, it would be the exact same if you were using a remote database.
>
> **[2:40](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=160)** It is stored in a secure way, and now your application can use it.

> [!info]- Semantic Content
>
> **Env Vars:** sdk (2), jdbc (2)
> **UI Navigation:** go to (4)
> **Best Practices:** you should never (2)
> **CLI Commands:** make (1)
> **Code Keywords:** case, (1)
> **Tools:** command line (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Applying authorizations
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=0)** - [Instructor] So at this point, we've only been enforcing login or authentication to secure our application, but we haven't put any authorizations in place on our pages.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=9)** So let's change that for our simple web example.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=13)** All right, so the first thing I want you to do is open up admin web, go to source, main, java.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=18)** The config package underneath our base package and the web security config.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=23)** So in here, we're going to add a couple new request matchers.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=26)** So the first one that we're going to do is at /customers/**, so this will be anything beyond the /customers endpoint, inclusive of it.
>
> **[0:37](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=37)** Here we want to do it where we have a role of user.
>
> **[0:44](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=44)** Now, we're going to add another one.
>
> **[0:46](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=46)** And this one is going to be at /orders.
>
> **[0:50](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=50)** And we're going to do a has role of admin.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=54)** So to get to our orders page, you've got to be an admin, otherwise a standard user can access it.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=59)** But nonetheless, they all must be authenticated.
>
> **[1:04](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=64)** So now we need to go and add another bean.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=69)** And this bean is going to be of type GrantedAuthoritiesMapper.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=75)** And we will simply call it authoritiesMapper.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=79)** And we will create an instance of a SimpleAuthorityMapper.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=87)** And to that authorityMapper, we are going to setConvertToUpperCase equal to true.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=103)** And then we will return that authorityMapper.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=108)** Now, at this point, we've actually secured our site.
>
> **[1:51](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=111)** And we can test that by going and running our application.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=118)** If we go to Customers.
>
> **[2:03](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=123)** And then Orders, you'll see that it blocks us on orders.
>
> **[2:06](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=126)** But back on Customers, you'll see that it does list our order data, which is not appropriate.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=130)** So we need to secure that.
>
> **[2:12](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=132)** So what we are going to do is we are going to go back into our application.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=138)** Let's go ahead and stop that.
>
> **[2:19](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=139)** We're going to go into the resources directory and the templates, and we're going to open up the detailed_customer.
>
> **[2:26](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=146)** Now, the first thing we need to do is we need to add a new namespace.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=148)** And this namespace is sec.
>
> **[2:31](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=151)** And this has actually been imported already for us when we brought in the spring security extras for Thymeleaf.
>
> **[2:38](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=158)** So this is going to come from [http://www.thymeleaf.org/extra/spring-security](http://www.thymeleaf.org/extra/spring-security).
>
> **[2:50](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=170)** So now if we scroll down to line 25, you'll see that we build a div, and underneath that is the table for the order numbers.
>
> **[3:00](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=180)** So we're going to add to that div on line 25 a check.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=185)** And that check is going to be hasAuthority.
>
> **[3:09](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=189)** And we want to check for role of admin.
>
> **[3:14](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=194)** Now, this will actually block that from being shown.
>
> **[3:17](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=197)** And you can test that if you would like.
>
> **[3:20](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=200)** However, there's one other thing that we need to do.
>
> **[3:22](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=202)** Because of the way that the controller works, it will still load the data into the model even though we don't display it.
>
> **[3:29](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=209)** So we need to prevent that from happening.
>
> **[3:31](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=211)** So we're going to go into the web package, and into the controller and the customer controller itself.
>
> **[3:38](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=218)** And at the very bottom of the customer controller is our method that loads that table.
>
> **[3:44](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=224)** So we're going to take line 59 and we're actually going to move it up.
>
> **[3:48](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=228)** We want to create an instance of that first, and now I'm going to put a little separation because we're going to grab the line 60 and 61 here in a moment when we are done.
>
> **[4:00](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=240)** But let's go ahead and execute against this.
>
> **[4:03](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=243)** In order to do so, we need to get a handle of our principal, and the principal comes from Java Security, and we will simply call it principal.
>
> **[4:13](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=253)** So now we can do our checks.
>
> **[4:14](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=254)** So if principal is an instanceof UsernamePasswordAuthenticationToken.
>
> **[4:26](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=266)** So if it's an instance of that, we're going to go do some work.
>
> **[4:30](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=270)** In order to do it, we need to create an AtomicBoolean, we will call it auth.
>
> **[4:35](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=275)** This equals a new AtomicBoolean that we will set to false.
>
> **[4:41](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=281)** Now, we will create a collection, and the collection is going to be of type Granted Authority from org Spring Framework, and we will call this authorities.
>
> **[4:54](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=294)** And this will equal a UsernamePassword.
>
> **[5:00](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=300)** We're going to cast it to a UsernamePasswordAuthenticationToken.
>
> **[5:07](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=307)** And we will call this principal getAuthorities.
>
> **[5:14](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=314)** And now we can take that authorities and we can iterate over it.
>
> **[5:22](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=322)** And we're going to do so in a lambda.
>
> **[5:23](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=323)** So authority.
>
> **[5:26](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=326)** And within here, we're going to do a check.
>
> **[5:29](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=329)** So if authority.getAuthority.equals,
>
> **[5:37](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=337)** and here we need to do our ROLE_ADMIN.
>
> **[5:43](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=343)** So if it is that way, we're going to set our auth equal to true.
>
> **[5:50](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=350)** Now, after that is done, we're going to do a check.
>
> **[5:55](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=355)** So if auth.get, in this case, it will happen to be true, we will go into this.
>
> **[6:01](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=361)** If not, it won't.
>
> **[6:02](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=362)** We will now grab our two lines and put them into that block.
>
> **[6:11](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=371)** Now, I'm going to drop a breakpoint on line 64, and I'm going to run my application.
>
> **[6:21](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=381)** Now, we're currently logged in as the user on basic auth.
>
> **[6:25](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=385)** So when I go to that page, so after I talk about setting the breakpoint.
>
> **[6:30](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=390)** So now let's go ahead and debug our application.
>
> **[6:36](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=396)** Now, I am logged in as the user with basic auth.
>
> **[6:39](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=399)** So if I go to Customers, and then I click Details, we can go back into our app and you'll see that we have a breakpoint.
>
> **[6:46](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=406)** So we will step over that.
>
> **[6:53](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=413)** And now you will see when we look at the auth get, if I step into this, its value is false.
>
> **[7:04](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=424)** So let's grab this and let's go to a new window, an incognito window, and let's paste that in.
>
> **[7:22](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=442)** I will log into GitHub.
>
> **[7:29](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=449)** Now, I'm going to sign in as the admin user, go to my Details once again.
>
> **[7:36](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=456)** Go back into my breakpoint.
>
> **[7:41](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=461)** And now if you look at auth, it is true.
>
> **[7:45](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=465)** So we will now load that data.
>
> **[7:47](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=467)** And if I go ahead and play that out, you will see that our order data loads.
>
> **[7:52](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=472)** So we now have authentication set up in our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (2), lambda (1), case, (1), this, (1)
> **Code Identifiers:** authoritymapper (2), authoritiesmapper (1), setconverttouppercase (1), detailed_customer (1), hasauthority (1)
> **UI Navigation:** go to (6), scroll down (1)
> **URLs:** [http://www.thymeleaf.org/extra/spring-security](http://www.thymeleaf.org/extra/spring-security) (1)
> **Env Vars:** role_admin (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)

#### Form-based authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=0)** - [Instructor] Before we jump into implementing forms based authentication, let's take a moment and discuss why we should do this in a web application.
>
> **[0:08](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=8)** So you may ask yourself, why would we want to implement forms based authentication for web applications when we have basic authentication?
>
> **[0:15](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=15)** Let's talk for a moment about that basic auth.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=19)** RFC 2617, for instance, defines basic authentication.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=23)** But there is no specification that does the same for forms based authentication.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=30)** There's nothing even close.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=32)** One of the biggest issues with basic authentication is actually the inability to log off.
>
> **[0:37](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=37)** As we've seen, we've had to open up sessions in private browsers and things like that.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=42)** It doesn't log off and your browser actually maintains its state.
>
> **[0:46](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=46)** Everything is session based with basic authentication.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=49)** And as such, there's not a real unified way to handle logging off across all the browsers.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=55)** Most of them don't even implement a log off at all.
>
> **[0:59](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=59)** Often you'll hear that the base 64 encoding of the username and password is a security flaw in the spec.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=65)** Now, I'd like to put that to rest a little bit.
>
> **[1:08](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=68)** When leveraging TLS communications, the base 64 encoded header is actually encrypted on the wire.
>
> **[1:17](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=77)** As such, it isn't easy to decode as some people will tell you.
>
> **[1:22](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=82)** There's really no inherent security risk with using basic auth, assuming your server's operating with TLS, unless of course you consider the risk of not being able to log out, of course.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=93)** And I do consider that a risk when it comes to basic authentication.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=98)** The limitations of basic auth are why I implement forms based authentication.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=103)** But it is a truly secure method, especially for internal systems if that's what you choose to use.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=110)** So we're going to do some forms based authentication, but let's talk about the why.
>
> **[1:55](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=115)** Again, with basic auth, not only can you not log out, but you may also have no ability to modify the login window either because it's provided by the browser.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=124)** In many cases, that causes organizational heartburn to have a page that doesn't look like the rest of your forms.
>
> **[2:11](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=131)** So with forms based authentication, you have complete control.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=135)** Since you're going to leverage a standard HTML form to pass the credentials to the backend, you can style that form as much or as little as your organization would like.
>
> **[2:24](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=144)** But keep in mind that you still need to leverage TLS to secure your credentials on the wire because they're going to be in the body instead of the header, but it still needs to be encrypted.
>
> **[2:35](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=155)** Now, this does allow for a much more seamless view of your login page.
>
> **[2:39](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=159)** And forms based authentication can provide support for remember me options if they are implemented.
>
> **[2:46](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=166)** And finally, as you might expect, forms based authentication allows you to define a logout process and a page to return to after you're logged out if you want to have that.
>
> **[2:56](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=176)** So before we progress to the next step of our application, let's evaluate these steps because we're going to do them over several videos.
>
> **[3:03](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=183)** First of all, we need to create our login form itself.
>
> **[3:08](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=188)** We also need to create the login process and a landing page for that.
>
> **[3:13](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=193)** And finally, we need to configure our system to not utilize the basic auth, but instead to leverage forms based authentication.
>
> **[3:21](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=201)** So let's jump into this over the next couple videos step by step.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2), private (1), pass (1)
> **Env Vars:** tls (3), rfc (1), html (1)
> **Documentation:** rfc (1), specification (1), spec (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### The login page
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=0)** - So let's start where we said we would, and that is the login page itself.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=5)** Now, in an effort to save a little bit of time and a lot of typing, I've gone ahead and created a login page for you.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=12)** You should update your exercise files to grab it, but let's walk through what it says.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=17)** So after the head section, we get into the body.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=20)** On line 13 here I bring in the standard header so that my login page looks like every other page.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=26)** I then create an instance of a container, which is a bootstrap construct, and then I simply build out a form.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=34)** But before I get to that form on line 16 and 17, you will see that there are a couple of error messages that will get displayed.
>
> **[0:41](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=41)** If the parameter is an error parameter, it will tell me that there is an invalid username or password.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=47)** Then on line 17, if the parameter is a logout indication, it will simply say that you've been logged out.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=54)** Now when it comes to the form, it's just a standard username and password form with a submit button that says Sign in.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=61)** Now that's great and all, but wouldn't it be nice to actually have a button on every page that I could log in or log out from?
>
> **[1:09](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=69)** So let's go implement that.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=71)** So we're going to go over to the header itself.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=74)** And the first thing we need to do on the header is we need to bring in an XML namespace sec and set that equal to like we did before, [http://thymeleaf.org/extras/spring-security](http://thymeleaf.org/extras/spring-security).
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=97)** And now we're going to go down here to line 31 and we are going to add in at the end of our nav.
>
> **[1:46](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=106)** So this will be at the far right of the nav itself.
>
> **[1:48](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=108)** We're going to create a new div, and the class on this div is going to be d-flex and flex-row-reverse.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=118)** That way it shows up on the far right.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=122)** And we're going to put another div in here with a sec:authorize.
>
> **[2:07](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=127)** And that is going to be equal to is authenticated.
>
> **[2:12](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=132)** So if we are already authenticated, we now need to build a form with a th:action+@{/logout}
>
> **[2:28](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=148)** with a method equal to post.
>
> **[2:34](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=154)** And we will simply put in here a button of type submit and a class of button and button primary.
>
> **[2:50](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=170)** And we will call this log out.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=173)** So now after that div, we're going to put in another one, and this one will have a sec:authorize=isAnonymous.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=185)** So if we are anonymous, we're going to put in an anchor, but the anchor we're going to put in is going to be a class of button.
>
> **[3:14](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=194)** And once again, button primary, we will set the href of this anchor equal to #.
>
> **[3:22](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=202)** Then we will do a th:href equal to @{/login} and we will call this login.
>
> **[3:34](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=214)** So now every page will have a login or logout button based on where we're at.
>
> **[3:38](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=218)** And this will exist on every page because it is included in the header, which is a fragment brought into every other page.
>
> **[3:45](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=225)** We are now done writing our login form.
>
> **[3:48](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=228)** Now let's jump in and wire it up.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2)
> **Code Keywords:** let (4)
> **Code Identifiers:** isanonymous (1)
> **URLs:** [http://thymeleaf.org/extras/spring-security](http://thymeleaf.org/extras/spring-security) (1)
> **Env Vars:** xml (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - so (1)

#### Wiring it all together
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=0)** - [Instructor] So now that we've made our page and added the header button, let's put the wiring in place so we can actually use this.
>
> **[0:08](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=8)** So the first thing that I need you to do is to go into the admin-web, source, main, java.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=13)** base package, web, controller.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=17)** And open up the HomeController.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=19)** Now I'm going to remove this request mapping from the class.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=24)** And I'm going to simply put a slash on the GetMapping.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=32)** Now I'm going to create another GetMapping.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=34)** And this is going to be at /login.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=38)** We will call it getLoginPage.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=42)** We actually do not need any parameters.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=47)** And we are going to simply return login.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=53)** Now let's go into the config package in the WebSecurityConfig.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=57)** There's a few changes that we need to make here.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=61)** So we are going to get rid of httpBasic, and we're going to replace it with .formLogin.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=69)** And in our formLogin, we will do a handle to a form.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=75)** And do a lambda on that.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=79)** And now form .loginPage.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=87)** That's going to be at /login.
>
> **[1:31](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=91)** And permit all.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=95)** And now we're also going to do a logout.
>
> **[1:40](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=100)** And do a logout.permitAll.
>
> **[1:49](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=109)** Now there's one more change that we need to make, and this is because of the environment we're working in.
>
> **[1:54](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=114)** This is not something that we normally have to do, but because we're working in code spaces, we need to add a couple tomcat properties.
>
> **[2:03](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=123)** So server.tomcat.remoteip.remote-ip header
>
> **[2:12](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=132)** =x forwarded for.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=138)** And server.tomcat .remoteip.protocol-header =x forwarded proto.
>
> **[2:32](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=152)** All right, now with that said, we are ready to actually run this.
>
> **[2:37](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=157)** So when we come back we'll do some testing, and make sure that all of this works as expected using forms-based authentication.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), class. (1), lambda (1), for. (1)
> **Code Identifiers:** formlogin (2), getloginpage (1), httpbasic (1), loginpage (1), permitall (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### Finishing touches and testing
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=0)** - [Instructor] So, we've made our login page, we've added a button to the header so we can log in or log out depending on our state, and we've wired this in instead of basic auth using forms authentication, so let's actually go test everything in all of our scenarios.
>
> **[0:15](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=15)** So, I'm going to go ahead and simply fire up my application, and you'll notice up here at the top right, we have a Login button, but instead of clicking that right now, let's go ahead and click on Customers.
>
> **[0:29](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=29)** It fires the login page as expected because we need to be authenticated here.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=34)** So, let's sign in as the user, and you'll see, we can see all of our customers.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=43)** If we go to Details, we do not get the order details, and if we go to Orders, we get the Oops page.
>
> **[0:50](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=50)** But now if I log out, you'll see that we have the indication that I've logged out.
>
> **[0:56](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=56)** So, let's sign in as admin, but let's use the wrong password.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=60)** You'll see that we now have an invalid username and password warning.
>
> **[1:06](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=66)** Now, let's sign in with the proper password.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=71)** Now, when I go to Customers and go to Details, you'll see that I see the orders, and when I go to the Orders tab, I see the orders there as well.
>
> **[1:21](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=81)** So, now our application is wired with a form-based authentication, saving that data in the database using Bcrypt to hash that password, and we essentially have a fully working and relatively secure app.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=96)** That being said, there's a little bit more we can do and we're going to take it into the next chapter and apply some enterprise-based focus to this using LDAP.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **UI Navigation:** go to (5), click on (1)
> **Env Vars:** ldap (1)
> **Cross-References:** next chapter (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. LDAP Authentication

#### Introduction to LDAP for authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=0)** - [Instructor] One of the most common ways to authenticate an application in an enterprise is due to the use of LDAP.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=6)** So let's talk a little bit about LDAP in Microsoft Active Directory.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=10)** LDAP or Lightweight Directory Access Protocol is a lightweight user authentication directory structure.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=17)** It's built in natively to many operating systems in one shape or another and of course there are standalone implementations as well.
>
> **[0:25](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=25)** One of the biggest benefits of LDAP is the fact that it's interoperable among many different operating systems and components.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=32)** In fact, IT services are exported to many of those components so that they don't natively have to support authentication, which in an enterprise setting is exactly what we want.
>
> **[0:45](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=45)** Because LDAP is lightweight, it's also highly scalable, which again, is another benefit when you're running distributed systems across the globe.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=54)** And all of those enterprise systems need to share the same directory structure.
>
> **[0:58](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=58)** Now, I mentioned Microsoft Active Directory.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=61)** In some way, shape or form, it supports an LDAP protocol, but it is not LDAP, and that's very important to understand before we go forward.
>
> **[1:10](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=70)** Now, Spring Security LDAP is not a very hard project to learn.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=74)** The base project is Spring Security LDAP itself.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=79)** It offers full support for all native LDAP operations that you would need outside of authentication.
>
> **[1:26](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=86)** And while we're going to focus primarily on the authentication routines, it is good to keep in mind that you have other accesses to LDAP outside of authentication as well.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=97)** Spring Security also provides adequate support for password hashing that most LDAP implementations also support.
>
> **[1:46](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=106)** Now, the paradigm that we will use to learn Spring Security with LDAP is going to be very similar to what we saw with basic and form-based authentication.
>
> **[1:56](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=116)** LDAP authentication still leverages the authentication manager builder that we have been configuring in our security configuration class.
>
> **[2:07](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=127)** I do want to talk a little bit about how we're going to to use LDAP in this chapter.
>
> **[2:12](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=132)** We're going to use an embedded LDAP server that's part of the spring dependency management structure.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=138)** You don't have to use the embedded LDAP server if you don't want to.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=143)** You can use something like OpenLDAP with Docker or built into your OS.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=148)** It's ready to go.
>
> **[2:30](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=150)** That's actually how I do most of my LDAP work when I'm running locally.
>
> **[2:34](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=154)** But again, in this example, we're going to use an embedded LDAP instance.
>
> **[2:39](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=159)** Now you may be asking yourself, well, I've got access to Active Directory.
>
> **[2:45](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=165)** Can I just use it for the purposes of this demo?
>
> **[2:47](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=167)** The short answer is you can.
>
> **[2:50](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=170)** It's a little bit different, and we're going to talk about some of those differences.
>
> **[2:55](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=175)** However, it's important to note that active directory is not LDAP, but it can use LDAP for authentication routines.
>
> **[3:04](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=184)** Both of them are based on a directory structure and it's very similar, but they are not the same, and we should be really clear on that.
>
> **[3:13](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=193)** With all that being said, let's jump in.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (21)
> **Code Keywords:** let (2), class. (1)
> **CLI Commands:** docker (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Configuring a sample LDAP server
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=0)** - [Instructor] So now let's go through the actions of configuring a local embedded LDAP server, acknowledging that this is only for the demo itself.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=9)** Normally your LDAP server is external to your application, as we already discussed, but doing so gets us what we need so we can actually wire in the spring security constructs.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=21)** So the first thing that I want you to do is I want you to go into the DAT directory and I want you to copy the Test-server LDIF file.
>
> **[0:29](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=29)** And now in admin-web, source, main resources, I want you to paste that file.
>
> **[0:37](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=37)** Now we're going to go back to our spring command line utility, and we're going to do a spring encodepassword passwordldap.
>
> **[0:48](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=48)** We're going to grab the value after the curly braces with the bcrypt and we will swap out the passwords that I have put in here.
>
> **[1:04](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=64)** Excellent, so now that that is done, let's open up the pom.xml file and we're going to add a few compile time dependencies to our project.
>
> **[1:13](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=73)** So the first one comes from org.springframework.security, and the artifact here is spring-security-ldap.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=94)** Now we're going to add another dependency, and this one is going to come from org.springframework.ldap.
>
> **[1:46](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=106)** And the artifact ID here is spring-ldap-core.
>
> **[1:53](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=113)** And now there's one more, and this is going to be our embedded LDAP server.
>
> **[1:58](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=118)** So com.unboundid.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=124)** The artifact ID is unboundid-ldapsdk.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=130)** Now we're going to go ahead and let everything download and do its thing.
>
> **[2:16](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=136)** Now we're going to go to our config class and we're going to open up the WebSecurityConfig, and we are going to create an Autowired construct.
>
> **[2:33](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=153)** So Autowired public void configure.
>
> **[2:40](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=160)** This way that this thing actually gets run.
>
> **[2:44](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=164)** And this is going to take an authenticationManagerBuilder.
>
> **[2:53](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=173)** We will call this auth, and this throws an Exception.
>
> **[2:59](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=179)** All right, so we're going to do an auth, ldapAuthentication, .userDnPatterns.
>
> **[3:11](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=191)** Now you can actually get the value of these patterns from the file itself, from the LDIF file, but for now we're just going to go ahead and type them out.
>
> **[3:20](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=200)** So, ou is people, and then the groupSearch Base is an ou of groups.
>
> **[3:35](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=215)** And then a contextSource.
>
> **[3:39](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=219)** Now we're going to do our URL, and in this case it's an embedded URL.
>
> **[3:42](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=222)** So it's ldap://localhost:8389/dc=landon,dc=org.
>
> **[3:57](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=237)** And now we're going to do an and.
>
> **[4:01](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=241)** And we will do a passwordCompare.
>
> **[4:08](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=248)** And a passwordEncoder.
>
> **[4:12](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=252)** And the passwordEncoder we will use is a new BCryptPasswordEncoder.
>
> **[4:20](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=260)** And the password attribute in our LDIF file is userPassword.
>
> **[4:30](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=270)** Now with that done, we have one more thing and that is going to our application.properties file.
>
> **[4:36](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=276)** And we need to set a couple application properties.
>
> **[4:39](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=279)** So spring.ldap.embedded.ldif, and that is going to be available on the classpath at test-server.ldif, spring.ldap.embedded.base-dn, and that is going to be equal to dc=landon,dc=org.
>
> **[5:05](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=305)** And then spring.ldap.embedded.port, and that is going to be 8389.
>
> **[5:15](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=315)** Now with all of that up and running, we should now be able to run our application.
>
> **[5:27](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=327)** Now we can do a login.
>
> **[5:28](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=328)** We will log in as user and it's passwordldap.
>
> **[5:34](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=334)** And you'll see we now have logged in and we've used our new LDAP password, but all of our authentication remains the same.
>
> **[5:43](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=343)** So that's the simplest way to use LDAP to do authentication specifically around an enterprise application.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (5), ldif (3), url (2), dat (1)
> **Code Identifiers:** passwordencoder (2), authenticationmanagerbuilder (1), ldapauthentication (1), userdnpatterns (1), groupsearch (1)
> **Code Keywords:** let (3), public (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** pom.xml (1)
> **URLs:** [localhost:8389](https://localhost:8389) (1)
> **Ports:** :8389 (1)
> **Cross-References:** go back to (1)

#### Spring LDAP outside of authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=0)** - [Instructor] One of the tangential projects that I have done quite a bit of work in exists in the LDAP realm, and I want to give a brief discussion of it.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=9)** The use case in this arena are very enterprise focused for my experiences, but there are always different use cases, so it's worth learning a little bit about them.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=19)** So to a casual person in technology, when you hear LDAP, you may only consider authentication.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=26)** While that is an important use case, it isn't the only one.
>
> **[0:29](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=29)** In fact, there are several valid use cases that you may encounter where LDAP can be a viable solution.
>
> **[0:36](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=36)** The project for working with LDAP outside of the security sense is spring-ldap-core as we previously saw.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=43)** And I professionally use this project a few times for some really big projects.
>
> **[0:49](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=49)** The uses, in fact, are so critical to HR that I feel it's worth this entire video on this topic so you know that it exists.
>
> **[0:57](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=57)** Many of these use cases are not even security focused.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=60)** They are simply, in my experience, employee-related tasks.
>
> **[1:05](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=65)** One of the beautiful aspects of the way the Spring team works is the cohesion of the framework itself and LDAP operations are no exception.
>
> **[1:14](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=74)** In Spring Security, we can query LDAP using the template pattern for LDAP, just like we would for JDBC or Rest or Rabbit, or any of the other templates for the various technologies that exist.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=89)** The LDAP template has several key use cases that you need to know.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=93)** The first and most common for many people is search.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=97)** There is also support for building distinguished names in a very simple LDAP name builder, mostly associated with the JDBC template, and often you use one to serve the other back to the template support.
>
> **[1:52](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=112)** You also get binding support, which is the creation of nodes and associations.
>
> **[1:57](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=117)** With that, you get updates and deletes.
>
> **[2:00](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=120)** Finally, there's support for the repository patterns within LDAP.
>
> **[2:05](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=125)** So we haven't seen any code, and I think that's fine since it's all well documented.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=130)** But I do want to share a few real life use cases that I have worked on or I have consulted on.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=138)** One really powerful use is an employee onboarding system where the user is added to the directory dynamically based on conditions being met, like signatures being fulfilled and things like that.
>
> **[2:32](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=152)** In other valid use cases, the various HR management systems, especially those for targeting communications, by leveraging groups that may not be visible to the entire company, communication channels or email lists can be generated while obscuring those from the view of those not in the group.
>
> **[2:52](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=172)** It can also be a very useful tool when building HR or physical security directory tooling or search programs if you are on an on-premise environment.
>
> **[3:02](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=182)** I've also seen it used for alerting systems for weather and other warnings within an enterprise.
>
> **[3:08](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=188)** Finally, I think it's important to admit that there are other pieces of data that you can store in LDAP other than users, and those use cases can generate huge wins by leveraging spring-ldap-core.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (11), jdbc (2)
> **Exercise Files:** template (4)
> **Code Keywords:** finally, (2), case, (1)
> **Definitions:** is an  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Active directory vs. LDAP for authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=0)** - [Instructor] I want to talk for a moment about using Active Directory from Microsoft for authentication in a Spring Boot application.
>
> **[0:07](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=7)** Now today, many companies are moving to ADFS, which is SAML-based, but there still are a lot of enterprises using good old fashioned Microsoft Active Directory.
>
> **[0:16](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=16)** It's important to note that Active Directory is not LDAP, and that sometimes gets really confusing in the industry, because people deal with LDAP, and quite often, they're connecting to LDAP URLs, but really they are hitting Active Directory.
>
> **[0:32](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=32)** It's important to make this distinction, because Active Directory implements an LDAP API, but Active Directory is much more than LDAP.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=42)** Now, the LDAP interface is really what is exposed, and it's exposed to the AD Lightweight Directory Services, and that's contained within the structure of Active Directory itself.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=55)** Now, again, Active Directory isn't LDAP, because Active Directory provides many more services, and if you look at the port requirements of a domain controller, you get a real feel for the weight of Active Directory versus a very small Lightweight LDAP implementation like OpenLDAP.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=75)** But that being said, Active Directory is by far one of the most popular enterprise solutions for managing directory services, among other things.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=84)** And as such, as a Spring developer, it is critical that you not only understand the differences, but understand how to leverage your knowledge of LDAP to interact with your enterprise Active Directory.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=97)** Now, authentication with an Active Directory instance seems very familiar if you have worked with LDAP.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=105)** It can be standard, but there's also some non-standard methods.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=110)** Now, configuration in an Active Directory situation is very similar to what we previously looked at with our embedded LDAP instance, but I do want to give you a little word of caution.
>
> **[2:01](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=121)** One catch with active directories, all too often we build nested group structures.
>
> **[2:07](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=127)** In fact, that's considered a feature of Active Directory to build groups within groups within groups.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=133)** That way you can cascade permissions down across your organization.
>
> **[2:17](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=137)** But in the Spring Security world, nested groups don't natively work out of the box.
>
> **[2:22](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=142)** And there's actually a Spring Security ticket that talks about this, and there's some conversation there actually between Rob Winch and myself, for instance, where we're talking about the fact that this support, in my mind's eye, seems natural, but it would be non-passive changed in Spring Security.
>
> **[2:39](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=159)** So Rob has provided a very clear implementation step, and it's one that I've implemented, and I highly recommend you go take a look at this ticket, SEC 1823, if you're dealing with nested groups within your structure.
>
> **[2:54](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=174)** The implementation of this from Spring Security perspective, again, should look very familiar to what we do for a traditional LDAP instance.
>
> **[3:02](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=182)** There's an authentication provider, and instead of an LDAP auth provider, it's an Active Directory LDAP auth provider.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=190)** Now, mostly it's going to be the exact same as standard LDAP.
>
> **[3:14](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=194)** There's a slight configuration, but that is pretty well-documented.
>
> **[3:18](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=198)** What you're going to have some play around is the group and role matching, and you're going to have to do some extra work on that.
>
> **[3:24](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=204)** That's just because the nature of the nested groups that we get all too often in Active Directory.
>
> **[3:30](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=210)** I'm not going to do a demo of code here, because quite frankly, setting up an Active Directory server is not a trivial task.
>
> **[3:37](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=217)** But I'm sure that once you have one in your organization, you have access to a test instance, and you can play around with that following the documentation from Spring, as well as many conversation points on Stack Overflow, or in the various tickets around Spring Source itself.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (15), adfs (1), saml (1), api (1), sec (1)
> **Code Keywords:** implements (1), interface (1), this, (1)
> **Documentation:** the documentation (1), stack overflow (1)
> **Analogies:** similar to (1), for instance (1)
> **Warnings:** note that (1), caution (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Leveraging OAuth 2.0 with Spring Security

#### Introduction to OAuth 2.0
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=0)** - [Instructor] While OAuth and OAuth 2 are probably two of the most common authentication and authorization schemes on the internet today, they're also some of the most confusing and misunderstood.
>
> **[0:10](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=10)** So before we get too deep into using OAuth 2 with Spring Security, I want to just talk very briefly about what OAuth 2 actually is.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=19)** So what is it?
>
> **[0:20](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=20)** OAuth 2 is a protocol as well as a framework for providing access to HTTP services.
>
> **[0:26](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=26)** It's often used for third party access, so if you use social media and you grant an application access to your Facebook profile, for instance, that's done through OAuth 2.
>
> **[0:37](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=37)** Google provides the same sort of structure with its frameworks.
>
> **[0:41](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=41)** It's so common that you may not even realize you're doing it, but OAuth 2 really is all over the place.
>
> **[0:48](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=48)** It can also be used for system-to-system communications in standalone mode or on behalf of another user.
>
> **[0:55](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=55)** And from my perspective, this is actually the most common use case that I use because we actually secure all of our web service calls with OAuth 2, between the client and server on purpose in order to make sure that we're protecting the data as needed.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=71)** Now, there are several key components of an OAuth 2 system.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=75)** The first is the resource owner, and that's the data that is actually being protected.
>
> **[1:20](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=80)** For instance, my profile data in Google would be the resource, and I'm the owner of that data because it's about me.
>
> **[1:27](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=87)** Now, the client is the application that, for instance, I am using or a service that is being used on my behalf that is requesting access to the resource itself.
>
> **[1:39](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=99)** The resource server in my previous use case would be Google's profile system itself.
>
> **[1:44](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=104)** So it is the system that hosts the protected data in the accounts that we're requesting access to.
>
> **[1:51](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=111)** And the authorization server is the service that grants tokens on behalf of me to the data that the resource server itself holds, that the application is requesting.
>
> **[2:05](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=125)** Now, there's a couple token types and we need to know about these tokens as we're interacting with OAuth 2 at a systemic level.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=133)** The first is the access token, and this is the secret token that is used to identify the user.
>
> **[2:20](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=140)** Often it is very short-lived, and that's on purpose because that token uniquely identifies me and whatever permissions I've associated with it.
>
> **[2:29](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=149)** As such, we don't really want it to live for a long time because if it gets leaked, the security breaks down very quickly.
>
> **[2:37](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=157)** Now, the refresh token is a little bit longer-lived token.
>
> **[2:41](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=161)** It is used to renew an access token when that access token expires.
>
> **[2:45](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=165)** So you may have an access token that lasts for a day, and you may have a refresh token that lasts for a week.
>
> **[2:52](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=172)** So what that means is, is if I log in today, I use my access token.
>
> **[2:56](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=176)** If I come back tomorrow, I would use the refresh token to renew my access token.
>
> **[3:02](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=182)** However, if I don't come back for another 14 days after my refresh token and my access token will have expired, and I will have to go through the process of granting access once again.
>
> **[3:15](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=195)** Now, scopes are provided on the access tokens, and it's essentially the rights that are associated with the token.
>
> **[3:22](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=202)** So for instance, in a server side component, let's say we have a service that serves customer data.
>
> **[3:28](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=208)** We would grant read access to another system that says you can access customer data while not providing that same scope to a different access token.
>
> **[3:39](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=219)** Now, I kind of alluded to it here, but there's a couple of different types of grants, and those grants impact flow throughout the system.
>
> **[3:48](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=228)** The authorization code grant is the most common, and that's what you would use if you see something on Facebook or Google where you're granting access to someone else on your behalf or usually an application.
>
> **[4:02](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=242)** Now, an implicit grant is a very common grant that is used in web apps and mobile apps where the security of that access token cannot be maintained.
>
> **[4:12](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=252)** Often these don't come with refresh tokens, and they're very specific to a function of the application being granted access.
>
> **[4:22](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=262)** Now, the one that I use most often, as I alluded to previously, is the concept of a client credential.
>
> **[4:28](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=268)** Each system gets a client ID and a secret that it uses to get an access token and then do its work within the system based on the scopes that we previously defined.
>
> **[4:40](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=280)** Now, that's like 100,000-foot view of OAuth 2, and it is by no means an in-depth explanation of every key component of OAuth.
>
> **[4:49](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=289)** If you're really interested in understanding OAuth more, I provided a text document as part of this chapter to give you some ideas, but of course, you can take it much deeper than I've provided you with this text document itself.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (2), let (1), function (1)
> **Analogies:** for instance (4)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Env Vars:** http (1)
> **Speakers:** - [instructor] (1)

#### Spring and OAuth 2.0
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=0)** - [Instructor] After just discussing a bit about what OAuth 2 is, I'd like to talk a little bit about how Spring works with OAuth 2.
>
> **[0:07](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=7)** And as you might guess, Spring has full integration for this protocol.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=12)** One of the first classes you may interact with is the CommonOAuth2Provider, and this is used to connect to such systems as Okta or Facebook, and we'll use a little bit more on this later, but as I said, it provides native support for things like Okta, Google, Facebook, GitHub, and several other OAuth providers.
>
> **[0:31](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=31)** It's a property-based configuration if you're in a Spring Boot application, and that's most often how you're going to use this class.
>
> **[0:39](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=39)** By using the property-based configuration, you actually get native support in the Spring Boot app itself with very little work, something that we are going to see in our example.
>
> **[0:50](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=50)** It provides client-side OAuth integration.
>
> **[0:53](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=53)** It allows you to provide third party support for the login operations so you don't have to keep that information in your site, which is very attractive to a lot of companies that don't want to manage the overhead of bringing user authentication in.
>
> **[1:07](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=67)** Because after all, when user authentication leaks, that's what makes the news.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=72)** One of the next pieces you might work with is an authorization server.
>
> **[1:15](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=75)** Now, we're not going to spend much time working with that and that's fine, but this system that provides authorization and authentication services to the system as a whole.
>
> **[1:25](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=85)** Many companies choose to have their own internal authorization server to provide that utility to not only your mobile applications, but also your internal services themselves.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=96)** Creating an authorization service really is as simple as using an annotation, EnableAuthorizationServer.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=103)** It's something that you can do when you are setting up an application if you choose to go that route, and Spring has examples of doing this.
>
> **[1:51](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=111)** I would caution you though that there are third party tools that provide the same benefit, and you don't have to roll any of it yourself.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=119)** Now, one of the beautiful parts of configuring your OAuth this way is you actually have support for multiple grant types.
>
> **[2:06](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=126)** Now again, this is not something that we're going to work with, but it's something that you can play with on your own time if you find value in building an authorization server.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=135)** Now, I do want to say one thing about these grant types that it supports is that this is an opportunity for you to play.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=143)** Now, when I do this at home, I actually just run a keycloak server, which is an open source authorization server and use it.
>
> **[2:30](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=150)** That being said, if you want to play with the full stack from both sides, this is a great pathway for your learning.
>
> **[2:36](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=156)** I'm just not a big fan of using it in production personally.
>
> **[2:40](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=160)** Now, the next thing is the resource server itself.
>
> **[2:42](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=162)** The resource server provides the resources that are being protected, and often this is a person system, but it doesn't always have to be.
>
> **[2:52](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=172)** Configuring the resource server literally is as simple as doing an EnableResourceServer annotation.
>
> **[2:59](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=179)** Again, something you can go further into on your own, and there is documentation on this if you want to.
>
> **[3:06](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=186)** Now, finally, let's get to the OAuth 2 client, and this is what we are going to build.
>
> **[3:11](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=191)** The OAuth 2 client allows you to have full client-side support for OAuth systems like Facebook, Google, GitHub, and the like.
>
> **[3:19](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=199)** To enable the client, you simply enable OAuth2Client and then we're going to walk through that, and then you have the ability to do the rest of it through configuration.
>
> **[3:29](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=209)** Now, there is a REST template that you have access to if you want to use it to do more detailed work.
>
> **[3:37](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=217)** Not something we're going to focus on on this course, but I do want you to know that it exists.
>
> **[3:42](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=222)** And like we had before, you've got various grant types and you can use Spring security annotations to protect your methods based on those.
>
> **[3:51](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=231)** More documentation is available at [spring.io](https://spring.io) on all of these constructs.

> [!info]- Semantic Content
>
> **Definitions:** is an  (3), is a  (3)
> **Code Keywords:** class. (1), this. (1), protected (1), finally, (1), let (1)
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Env Vars:** rest (1)
> **Exercise Files:** template (1)
> **Warnings:** caution (1)

#### Using GitHub as an authorization service
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=0)** - [Instructor] All right, now it's time to actually do some work, and we're going to use GitHub as our OAuth provider.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=6)** Quite simply, not only is it easy, but we have a GitHub token because you're using GitHub as part of Code Spaces.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=13)** So let's walk through this exercise. Okay.
>
> **[0:17](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=17)** The first thing that we actually are going to do is we're going to create a new application.
>
> **[0:21](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=21)** So I'm going to open up the command palette and do spring initializer.
>
> **[0:25](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=25)** We'll select 344 java com.frankmoley.lil, choose your group name, whatever you would like it to be.
>
> **[0:35](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=35)** We're going to call this admin client.
>
> **[0:38](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=38)** We're going to package it as a jar. We're going to choose Java 21.
>
> **[0:42](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=42)** Now a couple dependencies.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=43)** We're going to bring in web and it's spring web.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=47)** We're going to bring in the OAuth2 client, and we are going to bring in security.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=54)** We'll go ahead and build this into the root.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=60)** Now I am going to go ahead and import this into my workspace.
>
> **[1:04](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=64)** So I'm going to go to Java import, let it bring everything in.
>
> **[1:11](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=71)** I'm going to do a quick check and make sure that it shows up in my Spring Boot dashboard, which it does.
>
> **[1:17](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=77)** So we should be ready to go.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=79)** So let's go ahead and open that up.
>
> **[1:21](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=81)** Let's go to source main resources static, and I'm going
>
> **[1:30](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=90)** to create a new file called index.html, and we are going to do a very simple Hello World example.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=105)** We'll put an h1 tag in here and I'll simply say, Hello LinkedIn Learning.
>
> **[1:53](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=113)** Excellent, okay, that is the entire application that we are going to build.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=119)** However, we do need to tie it into GitHub.
>
> **[2:02](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=122)** So let's go do that.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=124)** First thing I'm going to do is open up a GitHub link.
>
> **[2:08](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=128)** I'm going to go to my profile and go to settings.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=133)** Then at the very bottom, I'm going to go to developer settings.
>
> **[2:18](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=138)** All right, so we're going to go to OAuth apps and we are going to create a new OAuth app.
>
> **[2:23](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=143)** So the first thing we'll do is call it admin client.
>
> **[2:26](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=146)** Now we need a URL.
>
> **[2:28](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=148)** The easiest way that I have to get this URL is to actually come back over here and run the admin client.
>
> **[2:36](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=156)** Now, it is not going to run.
>
> **[2:37](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=157)** It's going to fail to actually load the page because it doesn't know where any of this stuff is, and that's fine.
>
> **[2:43](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=163)** What I care about is getting this URL.
>
> **[2:47](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=167)** So I'm going to copy the URL that is exposed at port 8080.
>
> **[2:51](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=171)** Come back to this tab, and I'm going to put that as my homepage URL, and then my authorization callback URL, I'm going to paste that again and follow it by login/OAuth2/code/GitHub.
>
> **[3:13](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=193)** Now I'm going to register my application and you'll see it gives me a client ID and we are going to generate a client secret.
>
> **[3:21](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=201)** But before we do that, let's go back to our application.
>
> **[3:25](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=205)** Let's go to our application.properties file.
>
> **[3:29](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=209)** We're going to type in the first one as Spring.Security.OAuth2.client.registration.GitHub,
>
> **[3:40](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=220)** .client-ID equals.
>
> **[3:44](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=224)** Now grab the client ID and paste that in.
>
> **[3:50](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=230)** Now you may wonder, I'm going to show these values.
>
> **[3:53](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=233)** Does that not expose everything?
>
> **[3:55](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=235)** And it would, except for I'm going to delete these as soon as we're done.
>
> **[3:59](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=239)** And in your example, do not check these in.
>
> **[4:03](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=243)** That is very important to never check these values in, even though I am going to do it as part of this, you should not.
>
> **[4:13](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=253)** So the next one is our client's secret.
>
> **[4:16](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=256)** Now, to generate the client's secret, it generally will prompt you to log in.
>
> **[4:22](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=262)** I've already gone through a past key authentication before I did the recording, therefore I did not get prompted.
>
> **[4:29](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=269)** So you may get prompted.
>
> **[4:31](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=271)** And if you do that as expected, nonetheless, I have generated it, I can now copy that value, bring it back over here and paste it.
>
> **[4:41](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=281)** Now I'm going to go ahead and update my application.
>
> **[4:46](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=286)** Now, there's two other things that we need to go copy, and what I want you to do is to go back to your admin web source main resources application properties, and I want you to grab these two server Tomcat values.
>
> **[5:03](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=303)** Okay? We're going to drop those in as well.
>
> **[5:06](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=306)** Now we can run our application.
>
> **[5:09](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=309)** So let's go run our admin client, and it fires up and you will see that it is prompting you to log in.
>
> **[5:22](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=322)** I'm going to go ahead and authorize it, and the page loads.
>
> **[5:26](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=326)** We have now loaded our application using GitHub as our authentication provider.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), import, (1), static (1), delete (1), this, (1)
> **Tools:** github (8)
> **Env Vars:** url (6)
> **UI Navigation:** go to (6)
> **CLI Commands:** make (1), go run (1)
> **File Paths:** index.html (1)
> **Ports:** port 8080 (1)
> **Versions:** java 21 (1)


### 5. WebFlux Security

#### Introduction to WebFlux Security
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=0)** - [Instructor] Any modern development in Spring these days requires a reference to WebFlux.
>
> **[0:05](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=5)** WebFlux is the way to do Reactive Spring since 2.0.
>
> **[0:09](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=9)** With Spring Security, there is full support for WebFlux.
>
> **[0:13](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=13)** Let's take a look.
>
> **[0:14](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=14)** The basic annotation that you're going to use is @EnableWebFluxSecurity.
>
> **[0:20](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=20)** This gives you control for basic configuration mapping, and the basic config puts everything as secured.
>
> **[0:27](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=27)** You also have a handle on SecurityWebFilterChain.
>
> **[0:30](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=30)** As you might remember, everything in Spring Security is based on filters and Reactive Spring is no different.
>
> **[0:37](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=37)** The filter chain provides much more fine-grained control, much the way we've seen before in the authentication managers.
>
> **[0:44](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=44)** You also have a MapReactiveUserDetailsService that allows you to have a handle on traditional UserDetailsService, much the same way we have before.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=54)** And when we get into our example, we're going to go back to that in-memory UserDetailsService.
>
> **[1:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=60)** Oftentimes in security, as we have seen, we want to handle the principal, and in traditional Spring Security, it was never a problem.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=69)** With WebFlux, it still isn't a problem.
>
> **[1:12](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=72)** You still have a model based on the principal itself, but instead of injecting straight principal into your method, you now inject a mono with the principal template into your method where you want to handle it.
>
> **[1:25](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=85)** You still get all the same core functionality, but now it's just wrapped with mono.
>
> **[1:30](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=90)** Now that we've seen the basics, let's jump into some code and show you how similar it is to what we've done before in order to build out our Spring Security.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Versions:** 2.0 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Implementing basic security
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=0)** - [Instructor] So now it's time to implement reactive security.
>
> **[0:04](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=4)** The first thing that I want to do is actually start up an application that's been here the whole time that we haven't actually been using, and that's the Bones application.
>
> **[0:11](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=11)** This is one of my favorite little toy applications because essentially it's a dice rolling application.
>
> **[0:19](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=19)** Now it's going to fire up, there's nothing to respond to, that's fine.
>
> **[0:23](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=23)** Come back over to your IDE, go to your terminal and you can simply do an http :8080/roll.
>
> **[0:36](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=36)** And you'll see it rolls two dice.
>
> **[0:39](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=39)** This time I got snake eyes 1 and 1 with a value of 2.
>
> **[0:43](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=43)** So we'll go ahead and stop that application.
>
> **[0:46](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=46)** Now let's open it up and go to the pom file.
>
> **[0:52](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=52)** And we are going to add a dependency to our pom file.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=61)** And the dependency that we are going to add comes from org.springframework.boot.
>
> **[1:10](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=70)** And the artifact ID is spring-boot-starter-security.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=78)** Looks familiar and that's because it is, because it's the exact same starter that we've been using.
>
> **[1:23](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=83)** In fact, what you're going to find is a whole lot of this looks the exact same as we discussed.
>
> **[1:29](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=89)** So let's go to our main application.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=93)** All right, so the first thing we're going to do is we're going to add an annotation.
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=97)** And the annotation is EnableWebFluxSecurity.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=103)** Now once that's added, we're going to come underneath the main method and we are going to add a bean.
>
> **[1:50](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=110)** And the bean that we are going to add is a MapReactiveUserDetailsService.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=119)** We'll simply call this userDetailsService.
>
> **[2:01](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=121)** It takes no parameters.
>
> **[2:04](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=124)** We're going to do a list of type userDetails.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=133)** And this is going to be an array list.
>
> **[2:19](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=139)** Now we'll do a userDetails.add User withDefaultPasswordEncoder, .username, user .password
>
> **[2:40](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=160)** of password, .roles of USER and .build.
>
> **[2:57](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=177)** Need to import this java.util.ArrayList 'cause I type too fast.
>
> **[3:06](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=186)** Excellent, now after we build it, we will return a new MapReactiveUserDetailsService where we pass it, the userDetails.
>
> **[3:19](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=199)** And now we've got one more to add.
>
> **[3:21](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=201)** And this one again, will look very similar.
>
> **[3:26](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=206)** We're going to add a bean and this is a SecurityWebFilterChain.
>
> **[3:36](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=216)** And we will do a ServerHttpSecurity, calling it http.
>
> **[3:44](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=224)** And now we can do an http .authorizeExchange.
>
> **[3:54](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=234)** And within there we will do an exchanges,
>
> **[4:03](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=243)** .anyExchange .authenticated .httpBasic.
>
> **[4:14](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=254)** And we're going to use our Customizer.withDefaults.
>
> **[4:24](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=264)** And we'll go ahead and do a formLogin
>
> **[4:34](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=274)** and we will do a return of http.build.
>
> **[4:41](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=281)** Excellent, so now let's go ahead and run our application, once again.
>
> **[4:50](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=290)** We'll go back to our terminal.
>
> **[4:52](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=292)** You'll see we get an authentication and we can type in here user password.
>
> **[4:58](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=298)** It's going to redirect us to a white level error page because there is nothing there for it.
>
> **[5:03](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=303)** But if we go to /roll, you'll see that it actually prints out the json that we would get back, which is great to see.
>
> **[5:12](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=312)** But if we come back to our console, you'll see that we get a 401 because we haven't provided the header.
>
> **[5:19](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=319)** So we can simply do an a user:password and now it executes.
>
> **[5:26](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=326)** So we provided the basic auth header and we're good to go.
>
> **[5:30](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=330)** This is the way you do security, whether it's reactive or not, it's really all the exact same.
>
> **[5:37](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=337)** It's just little tweaks here and there based on whether it's standard or reactive.
>
> **[5:42](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=342)** But nonetheless, spring security works for all of it and hopefully will make your life easier.

> [!info]- Semantic Content
>
> **Code Identifiers:** userdetails (3), userdetailsservice (1), withdefaultpasswordencoder (1), authorizeexchange (1), anyexchange (1)
> **Code Keywords:** let (3), pass (1)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** ide (1), user (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Tools:** terminal (2)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=0)** - [Instructor] So before we end this course, I'd like to talk through a little bit about what might be next in your journey.
>
> **[0:06](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=6)** But before we get there, I want to start with a very simple review of what we've looked at in this course.
>
> **[0:12](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=12)** To start with, we introduced the concept of Spring Security, as well as some general security concepts.
>
> **[0:18](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=18)** We then went about the process of securing a web application through various incantations.
>
> **[0:24](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=24)** We then integrated with an internal LDAP server to show you how to leverage LDAP as an authentication source for those of you working with enterprise-based solutions.
>
> **[0:34](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=34)** We then took a look at OAuth2 as a security methodology for those working in Internet as well as enterprise systems relying on OAuth2 or OIDC Connect in order to connect their web application.
>
> **[0:47](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=47)** And then we took a brief look at reactive programming with security showing the similarities to standard web applications.
>
> **[0:54](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=54)** So the next things for you really are to get involved.
>
> **[0:58](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=58)** I highly recommend that you find a local Spring or Java user group to get involved with.
>
> **[1:04](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=64)** Many times security topics get talked about in these user group sessions.
>
> **[1:09](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=69)** I also encourage you to join the online community at Stack Overflow where you will find lots of questions and answers about all things Spring, but specifically Spring Security.
>
> **[1:19](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=79)** And, of course, you should follow the contributors and advocates of the Spring framework as well as Spring Security on Twitter or X, many of whom I already follow.
>
> **[1:28](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=88)** So if you want to go that route, you could follow me and then get their names from that path.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=93)** And, of course, you can commit to this project.
>
> **[1:36](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=96)** But I do want to say that your involvement also involves yourself in this code.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=103)** Play with Spring Security, dig into other aspects of it, and repeat the operations over and over until you get a better grasp of the framework as a whole.
>
> **[1:53](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=113)** Now, I do want to end by saying that my commitment to you does not end when this course is done.
>
> **[1:59](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=119)** And that's very important for me because your time invested in this course is very valuable, and I thank you for taking your time to learn with me.
>
> **[2:10](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=130)** Reach out to me on X or Stack Overflow or GitHub by the handle fpmoles.
>
> **[2:15](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=135)** Also, I am very active in the Q&A section on this platform.
>
> **[2:20](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=140)** So if you've got questions or specific comments around this, please feel free to reach out there.
>
> **[2:26](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=146)** And I do answer them on an almost daily basis and, of course, provide feedback for this course because it's through your feedback that I make this in all of my courses better.
>
> **[2:36](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=156)** So once again, thank you so much for your time, and remember to never stop learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Env Vars:** ldap (2), oidc (1)
> **Documentation:** stack overflow (2)
> **Code Keywords:** this, (1)
> **Tools:** github (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started In Spring Development]]
← [[Spring Data 2]] | **4 of 5** | [[Building Full-Stack Apps with React and Spring]] →

## Appears In

- [[Getting Started In Spring Development]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Spring Boot
- [[Advanced Spring- Spring Boot Actuator]] — Spring Boot
- [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] — Spring Boot
- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Spring Boot
- [[Advanced Spring- Effective Integration Testing with Spring Boot]] — Spring Boot

---

[↑ Back to top](#)