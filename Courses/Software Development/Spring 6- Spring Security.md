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
  - '[[Getting Started In Spring Development]]'
prev_courses:
  - '[[Spring Data 2]]'
next_courses:
  - '[[Building Full-Stack Apps with React and Spring]]'
path_nav: '[{"path":"Getting Started In Spring Development","position":4,"total":5,"prev":"Spring Data 2","next":"Building Full-Stack Apps with React and Spring"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/spring-security
  - skill/spring-boot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Spring%206-%20Spring%20Security.md)

![Spring 6: Spring Security](https://media.licdn.com/dms/image/v2/D4E0DAQGM42dYNIUQUw/learning-public-crop_675_1200/B4EZaNvIdDHoAY-/0/1746134665323?e=2147483647&amp;v=beta&amp;t=_d-79CVF9PcZt994YTHF1qhQl94G3OXpRDEJLCb1qG4)

# Spring 6: Spring Security

> This comprehensive Spring Security course provides an in-depth exploration of security implementation in Java applications, covering critical topics from core authentication concepts to advanced security techniques. Learn to implement various authentication methods including in-memory, JDBC, and LDAP authentication, master password hashing with bcrypt, develop form-based and OAuth2 authentication 

> [LinkedIn Learning](https://www.linkedin.com/learning/spring-6-spring-security) | 1h 30m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Secure with Spring Security](#secure-with-spring-security)
  - [What you need to know](#what-you-need-to-know)
- [**1. Spring Security Concepts**](#1-spring-security-concepts) (2 videos)
  - [Introduction to Spring Security](#introduction-to-spring-security)
  - [Authentication vs. authorization](#authentication-vs-authorization)
- [**2. Securing Web Applications with Spring**](#2-securing-web-applications-with-spring) (9 videos)
  - [Introduction to project](#introduction-to-project)
  - [In-memory authentication](#in-memory-authentication)
  - [JDBC authentication](#jdbc-authentication)
  - [Leveraging bcrypt for hashing](#leveraging-bcrypt-for-hashing)
  - [Applying authorizations](#applying-authorizations)
  - [Form-based authentication](#form-based-authentication)
  - [The login page](#the-login-page)
  - [Wiring it all together](#wiring-it-all-together)
  - [Finishing touches and testing](#finishing-touches-and-testing)
- [**3. LDAP Authentication**](#3-ldap-authentication) (4 videos)
  - [Introduction to LDAP for authentication](#introduction-to-ldap-for-authentication)
  - [Configuring a sample LDAP server](#configuring-a-sample-ldap-server)
  - [Spring LDAP outside of authentication](#spring-ldap-outside-of-authentication)
  - [Active directory vs. LDAP for authentication](#active-directory-vs-ldap-for-authentication)
- [**4. Leveraging OAuth 2.0 with Spring Security**](#4-leveraging-oauth-20-with-spring-security) (3 videos)
  - [Introduction to OAuth 2.0](#introduction-to-oauth-20)
  - [Spring and OAuth 2.0](#spring-and-oauth-20)
  - [Using GitHub as an authorization service](#using-github-as-an-authorization-service)
- [**5. WebFlux Security**](#5-webflux-security) (2 videos)
  - [Introduction to WebFlux Security](#introduction-to-webflux-security)
  - [Implementing basic security](#implementing-basic-security)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure with Spring Security](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security?u=76281980&t=0)** - [Frank] Building secure applications can be stressful and difficult for many developers. For developers working in the [[Java]] Virtual Machine, [[Spring Security]] simplifies the processes and allows you to focus on delivery of your business value. Hi, my name is Frank Moley. I'm a developer, architect, teacher and perpetual student with over 25 years of development experience, much of that with the JVM. Join me in this course to learn how to use Spring Security to help secure your applications in a simpler and less stressful way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (2), [[Java]] (1)
> **Env Vars:** jvm (1)
> **Speakers:** - [frank] (1)

#### [What you need to know](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=0)** - [Instructor] In order to be successful in this course, there is some prerequisite knowledge you should have, as well as some understanding of the environment itself. While you can use Spring with several JVM languages, we will be focusing on using the [[Java]] language. For this course, I'll be using the latest long-term support version of the Java language that is supported by Spring today, and that is Java 21. While we won't use any of the newer features of the language, you should have a good base knowledge of Java in general. Since we are using [[Codespaces]] for this course, the JDK is installed for you. However, if you prefer to work locally, make sure you have a JDK installed and not just a JRE. This course is based on the [[Spring Framework]], so there is an expectation of knowledge of Spring. If you are new to Spring, stop this course and go through my course, Learning Spring with [[Spring Boot]] 3 at a minimum. As I just said, a base understanding of Spring is very important. We're going to focus on the security framework, not Spring itself. We will be leveraging Spring Boot as our framework for running our applications. As such, you will need a base knowledge of Spring Boot and how it works. Once again, my course, Learning Spring With Spring Boot 3, is a great starting point if you need it. [[Spring Security]] is primarily designed for web security. You should understand how Spring Web works, especially in Spring Boot. We will be working with Thymeleaf templates a bit in this course. As such, some basic knowledge will be good.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/what-you-need-to-know?u=76281980&t=93)** Once again, the course that I've mentioned will provide you with the basic knowledge that you need. There are a few more pieces of software that you will need to have on your computer for this course if you are not using codespaces, they're already installed in the codespaces environment if you are using them. We're going to be using Maven as our [[Dependency Management]] system. Now, Spring supports both Maven and [[Gradle]], but for this course, I will be using Maven. If you prefer the Gradle path, it will definitely work, but you will need to adjust as you go. You'll need a command line tool to call web URLs and execute requests. I will be using a tool called HTTPie, but cURL should work equally well. You just need to use the appropriate options if you're going to use it. Now with that, let's jump into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (5), [[Java]] (4), [[Codespaces]] (3), [[Gradle]] (2), [[Spring Framework]] (1)
> **Env Vars:** jdk (2), jvm (1), jre (1)
> **Prerequisites:** prerequisite (1), make sure you have (1), you'll need (1)
> **CLI Commands:** make (1), curl (1)
> **Definitions:** is an  (1), is a  (1)
> **Code Identifiers:** curl (1)
> **Versions:** java 21 (1)
> **Tools:** command line (1)


### 1. Spring Security Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Spring Security](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=0)** - [Instructor] The [[Spring Security]] Project is one of the most powerful abstractions from the perspective of the developer. However, it is also one of the most complex considering everything that it includes. Throughout this course, we will focus on Spring Security and the problems it tries to solve and the complexities that it abstracts away. In order to fully grasp the power of Spring Security, we first need to know where it fits in. Security should be tackled in a layered fashion. This layered security pattern provides you distinct focus areas to secure monitor as well as tune. Now, I'm not going to go too deep here. These topics can comprise several courses on their own, but I do want a conceptual framework so you get a feel of where Spring Security comes into play. Most often, the focus in this layered model starts with the lowest level, and that is the physical [[Hardware]]. Hardware must be physically secured and uniquely identifiable to trusted systems. After you plan to secure the hardware, you start looking at the network. Here we deploy transport layer security, firewalls, network segmentation strategies like VLANs and security zones, [[Intrusion Detection]] systems, and the list goes on and on. We then move to the operating systems where user access controls, patching policies, and software restrictions provide additional layers of security for our system as a whole. Finally, we look at [[Application Security]], and this is where we focus on good [[Coding Practices]], proper data handling, and application user access controls.
>
> **[1:38](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security?u=76281980&t=98)** So where does Spring Security fit in? Well, it's in the application space itself. Spring Security is a project that provides amazing abstractions of the J2EE now called Jakarta EE application space. These applications help solve the various issues of traditional [[Java]] enterprise security like portability and vendor lock-in. By abstracting these topics, we are providing a clean and efficient way to provide security services. Spring Security isn't just for enterprise developers. It also provides valuable tools for internet facing applications running in the JVM. Obviously as a Spring project, it plays very nice with the [[Spring Framework]] as a whole, but that isn't a requirement. In this course, we will do all of our work using [[Spring Boot]], but at no point should that feel like a requirement. You could use Spring Security with traditional Spring-based WAR applications, as well as raw Java applications. Most of Spring Security is designed to focus on authentication and authorization. These are often the most critical needs at the application level itself outside of [[Secure Coding]] practices. We will focus on these topics exclusively in this course, but there's a lot of material in these topics, so buckle up and let's dig into what authentication and authorization is really about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (9), [[Hardware]] (3), [[Java]] (2), [[Intrusion Detection]] (1), [[Application Security]] (1)
> **Env Vars:** j2ee (1), jvm (1), war (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Authentication vs. authorization](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=0)** - [Instructor] Authentication and authorization are all too often misunderstood, overlooked, or confused by application developers. But I want to provide a simple baseline of the meaning of these words and how they apply to software so that we can level set before we move into this course. Let's start with authentication, also commonly called AuthN. Authentication is the process of determining the who, specifically and more technically, it is the process of determining that a principal is who they say they are. Now, this goes beyond a simple username and password scenario, but that can be a method of authentication. A point to remember when talking about principals in authentication is that systems as well as humans can be principals. Often we leverage a process of a system calling another system. In a [[Microservices]] world, that tends to happen a lot. We can leverage [[Spring Security]] to secure system to system calls the same way we would use for user to system calls. Now, Spring provides out-of-the box support for many different flavors of authentication. In the web world, there is support for HTTP basic, as well as HTTP digest authentication. It also includes support for X.509 certificate based authentication. The most common internal level of authentication model is [[Forms]] based authentication. Spring Security provides rich
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=93)** and robust support for forms based authentication models. Now in the enterprise world, we often see integration with LDAP as a method of authentication. Spring Security provides native LDAP support as well as support for [[Microsoft]] [[Active Directory]] using the LDAP abstraction. This is clearly one of the most common integration points in the world for [[Java]]-based applications using Spring Security. Spring Security has rich support for other external facing authentication providers that are much more common in an internet-based system. Spring can support OAuth Connect and OpenID, as well as Jasig CAS for single sign-on authentication options. Also, as you might expect from a Java world, there's also support for JAAS. Finally, Spring natively supports Kerberos and SAML. We're not going to go into those topics in this course, but if for some reason you find yourself needing to implement these protocols, note that Spring Security can take away some of the pain. Not all of it, but some of it. Spring also has rich third party support for many other authentication providers. This brings us to authorization, also commonly called AuthZ. Once we determine who the principal is via AuthN, we can then determine what they're authorized to do. The principal must be authenticated to get to this point, so it's a prerequisite in every single flow. Often authorization is also called access control,
>
> **[3:09](https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization?u=76281980&t=189)** and for good reason. Via authorization, you are controlling access to the underlying resources. Spring Security handles authorization, and in doing so, supports three distinct cases. The first and most common, and the one that we'll dig into exclusively in this course is web request based authentications. The pattern that we apply to web request can be extended, however, to support method invocation security. And finally, you can leverage Spring Security to provide domain object instance access control, which can be very powerful in highly sensitive areas like PII, financial or healthcare information. But that is again, beyond the scope of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (8), [[Forms]] (2), [[Java]] (2), [[Microservices]] (1), [[Microsoft]] (1)
> **Env Vars:** ldap (3), http (2), cas (1), jaas (1), saml (1)
> **CLI Commands:** find (1)
> **Warnings:** note that (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)


### 2. Securing Web Applications with Spring

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to project](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=0)** - [Instructor] Most of the work that we'll be doing in this course is adding security to a web application. To save immense time and so we can focus on [[Spring Security]], I've created a [[Spring Boot]] based web application that we will use. The project details are really important to understand. This is a simple monolithic web application based on Spring MVC. I'm using Thymeleaf with the little bootstrap styling to make the application more attractive. And so you can work with principles in the application itself, the view and the model. We're using an embedded H2 database with default schema and data files that are preloaded by the application context starting up. So we have a fresh database at every restart. We also have a simple [[Spring Data]] repository to connect to that data source. So let's take a look at the application itself. I've opened up [[GitHub]] Code Spaces, and I'm going to start with the admin web application, which is what we are going to use for this chapter. Within here, you can take a look at the Palm.XML file and you'll see that we have brought in Spring Boot starter Actuator, Lombok for Annotation Processing, Spring Boot Starter JPA, Thymeleaf and Web, as well as the H2 embedded database. And then of course, the test package that comes with every Spring Boot application. In source main [[Java]], we have our base application package, and within there we have two sub packages as well as the application class that comes with Spring Boot. One of those packages is our data package,
>
> **[1:35](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=95)** and underneath that is our model, which has our customer model annotated with Lombok as well as JPA and our order model. Similarly with JPA and Lombok. And then we have two repository interfaces. We have a customer repository and an order repository. And then in the web package we have controllers for each of them, including a model for our order model, more details on that later. In our resources directory, we also have our templates. We've got a customer template and you'll see that we bring in a common header, we bring in Bootstrap, and then we have the styling, a detailed Customer's template. We have a generic error template. We also have the header [[HTML]], which is used as a fragment on every page. We've got our indexer homepage and then an orders page. We've also got our application properties set for both JPA and Spring itself. And then our data.[[SQL]] file and schema.SQL file, which are used to load that data into the embedded database. So with that, I'm going to jump over here to admin web, and I am going to start it in the Spring Boot dashboard. Now I do have this set to auto fire a browser window. If yours does not fire, you may have popup block or some other thing. In that case, what you need to do is simply go to the ports tab, hover over the application 80-80, and click the link to open up the browser. But as you saw mine loaded, I can go to the customer's tab and load customer data.
>
> **[3:10](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-project?u=76281980&t=190)** If I go into details, I get the orders for that customer. And then on the orders tab, I get all of the orders themselves as well with the link back to the customer as necessary. So this is the project that we are going to work with throughout this course, specifically in this chapter as we add security to this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (6), [[SQL]] (2), [[Spring Security]] (1), [[Spring Data]] (1), [[GitHub]] (1)
> **Env Vars:** jpa (4), sql (2), mvc (1), xml (1), html (1)
> **File Paths:** palm.xml (1), data.sql (1), schema.sql (1)
> **Exercise Files:** template (3)
> **CLI Commands:** make (1)
> **Cross-References:** as you saw (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)

#### [In-memory authentication](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=0)** - [Instructor] So we're going to start with the Hello World example of [[Spring Security]]. Now I want to be very, very clear. This is not how we should ever do this in the real world. I'm going to show you how easy it is to use basic Spring Security before we get into the noise. But this can never be used in a production or any deployed situation in the real world, and that's very, very important to understand. So let's go ahead and get started. The first thing we're going to do is go to our admin web application, open up the pom file, and we're going to add a couple dependencies to this. So at the end of my compiled dependencies I am going to add the first one, which comes from org.springframework.boot. And that is Spring Security. So spring-boot-starter-security. Now you don't have to add 'em the way I'm doing it. You can use the tool from the toolkit that I've installed. I just prefer to type them. So the second one that we're going to add is from org.thymeleaf.extras and we're not going to use this for a while, but I just want to get it installed while we are here. And the artifactID is thymeleaf-extras-springsecurity6.
>
> **[1:24](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=84)** And we need to add a version because as of right now, there's actually a bug in this. So we're going to do 3.1.1.RELEASE in all caps.
>
> **[1:40](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=100)** And then we're going to go down to the test section and we're going to add another dependency. And though we're not going to use this one at all in this course, it's a good habit to go ahead and add it because you're going to use it in the real world. So that comes from org.springframework.security, and the artifactID that we are going to bring in is spring-security-test. And of course the scope of this will be test. So now we can go ahead and close that and we're going to go to source, main, [[Java]]. In our base package, we are going to add a new Java package called config. And within that config package, we will add a new Java class. And that class is going to be called WebSecurityConfig. Now we need to start by annotating this. So we're going to annotate it with @configuration from org.springframework, and @EnableWebSecurity, also from org.springframework. Now there's a couple beans that we need to add. The first one that we are going to add is to actually set up the basic security. Now this is valid in the real world. This method is definitely something you would use if you were using basic security. So we're going to create an instance of a SecurityFilterChain and we will simply call it securityFilterChain. And it is going to take an instance of HTTP security that we will call HTTP.
>
> **[3:16](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=196)** And this of course throws an exception. So now within here we're going to go and grab HTTP, and now we're going to do an authorizeHTTPRequests and we're going to get a handle on our requests and do a lambda mutation on it to requests. And now we're going to do a request matcher. We're going to do the request matcher at our context route as well as at slash index. And at these two locations, we are going to permit all, and this is very important. We need to have a way to get there without authentication. Now any other request is going to be required to be authenticated, okay? So now we're going to go and implement httpBasic, and we're going to simply use a default customizer from org.springframework, and we will use with defaults on it. Now at this point, we are ready to simply return the http.build and that method is complete. So we now have basic security set up, but we need to know where our usernames are and our passwords are. And normally we would store this in other locations, which we will show you later, but for now, we're going to simply create a UserDetailsService and we will simply call it user details service.
>
> **[4:52](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=292)** And this is going to be an in-memory user detail. So we will get an handle on user details from org.springframework. We'll simply call it User for simplicity. And this is going to be user.withDefaultPasswordEncoder, which is deprecated, and that's okay, we know it. You're not supposed to use a default password encoder in the real world. Again, this is a Hello World example. So do our username of user, our password of the ever-so-secret, password. The roles that we will add to this are simply User and we will build it. All right, now that we have built that, we can simply return a new InMemoryUserDetailsManager,
>
> **[5:46](https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication?u=76281980&t=346)** passing it our user object. And we are now ready to run it. So I'm going to go to the [[Spring Boot]] dashboard and launch my admin web application and it's going to open up. Now, if I click on customers, it's now going to prompt me with the browser-based authentication for basic loss. So I will simply do user and password, and now it lets me in and I can navigate to different locations, including going back to the root. Everything works fine and it is all secure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (3), [[Java]] (3), [[Spring Boot]] (1)
> **Code Identifiers:** artifactid (2), securityfilterchain (1), authorizehttprequests (1), httpbasic (1), withdefaultpasswordencoder (1)
> **UI Navigation:** go to (3), click on (1), navigate to (1)
> **Env Vars:** http (3), release (1)
> **Prerequisites:** set up (2)
> **Versions:** 3.1.1 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [JDBC authentication](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=0)** - [Narrator] So, in the last video, we used an InMemory user store. This not only isn't tenable for real solutions, it isn't scalable or safe. If you are keeping your users within your walls, the next step is adding the user to a database. So let's go ahead and do that. All right, so the first thing we need do, is to go to src, main, resources. Let's open up our schema.[[SQL]] file. We're going to add a couple of new tables. So the first table that we will add is called users. It's going to have a username field that is varchar_ignorecase of size 50, And this is the primary key. It's going to have a password, which is a varchar_ignorecase as well. This time we're going to do 500, and this will be not null, and then it will be enabled boolean not null. Now, this is the default, out-of-the-box way of building this schema. This is not how I'd normally do it. I actually build my own schema and my own user details service. But again, for the purposes of demo, we're just going to go with the default. I just don't really like this table structure personally, but that's okay. So now we're going to build a table called authorities, and it is going to have a username field that is a varchar_ignorecase, once again. As you might imagine, the size will be 50, and not null. It's also going to have an authority,
>
> **[1:35](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=95)** which is a varchar_ignorecase. Again, size 50 will be fine. It also can be not null. And we're going to do a foreign key on the username field, and it will reference users with a username. Now, there's one more thing that we need to add to this file, and this is going to be a UNIQUE INDEX. We'll call it idx_auth_username on a authorities. For username, authority. And that's it for our schema. So now let's jump into our data file and let's add a few data elements. Now we're going to do a little bit of copy and paste here to make this easy. So let's start with an INSERT INTO users username, password, enabled with values of user. We are going to call this passwordjdbc, and true. We will simply copy that line and paste it. And we are going to do our admin user. Now we'll do an INSERT INTO authorities, with a username and an authority, and the values,
>
> **[3:08](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=188)** we'll start with user, and we'll put that person with a roles of USER. I'm going to copy that, paste it twice. We will set admin also to the role of USER, and admin to the role of ADMIN. Now let's jump into our src, main, [[Java]]. Go into our config, and our WebSecureConfig, and and we are now going to modify our UserDetailsService. So the first thing that we'll do, is we will get rid of all of the InMemory. We are going to auto-wire in a data source from javax.sql called dataSource. And Spring will wire that in as it brings up the InMemory database. And we return a new JdbcUserDetailsManager, passing it the dataSource. We'll now create another Bean. And this is going to be a static Bean called PasswordEncoder, called getPasswordEncoder. And we are going to simply return a NoOpPasswordEncoder, which is deprecated, .getInstance. This is not something you should use.
>
> **[4:40](https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication?u=76281980&t=280)** Again, demo purposes. So with that, we can now run our application. Now there's a couple things that are going to happen here. Either you're going to get prompted immediately with the password box, because we did change the password, or in my case where I've already run it, I've already dealt with that. But we need to talk about the way basic auth works. So, it actually is stored in the browser itself. So, we're not going to be able to log out. That's a problem with basic auth. So we never get challenged again to type it in. So, what I want you to do, is to go ahead and copy that, open up a new private incognito window and go to that same place. Now, it's probably going to ask you to log into [[GitHub]], because this is public. So, I'm going to use my pass key to do that. And now when it loads, it'll load the index page, I can go to Customers, and it now asks me for this password again. So, user, we will call this passwordjdbc, and it logs in. So, we know that we're using the database, because we removed the InMemory, we obviously change the password as well. And that's what we need to see. So, with this, we have a [[Java Database Connectivity (JDBC)|JDBC]]-based password system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SQL]] (2), [[Java]] (1), [[GitHub]] (1), [[Java Database Connectivity (JDBC)|Jdbc]] (1)
> **Env Vars:** insert (2), into (2), user (2), unique (1), index (1)
> **Code Identifiers:** varchar_ignorecase (4), datasource (2), idx_auth_username (1), getpasswordencoder (1), getinstance (1)
> **Definitions:** is a  (3), is called (1)
> **SQL:** insert into (2), index (1)
> **UI Navigation:** go to (3)
> **File Paths:** schema.sql (1), javax.sql (1)
> **CLI Commands:** make (1)

#### [Leveraging bcrypt for hashing](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=0)** - [Instructor] So it just created passwords using plain text. You should never, never store passwords in plain text. You should never encrypt your user's passwords either. You should use a proper cryptographically sound one way hash, Shell 256 is no longer considered secure. There are several valid hash [[Algorithms]] you can use and [[Spring Boot]] supports them. But we will use the default one, which is Bcrypt. So the first thing that we need to do is we need to put a command line tool in the environment. So we're going to do an SDK to use SDK Man, which is installed, install Spring Boot. Now once that is installed, we can actually use it to encode our password. So we're going to do an encode password and we will do our password [[Java Database Connectivity (JDBC)|JDBC]], and we can now grab that entire text string and copy it. Now open up admin web, go to source main resources and go to our data file. So we will simply replace the plain text password with the Bcrypt password. Now with that said, we need to actually go out and make this use BCrypt. So in order to do that, we simply go to our source bank [[Java]] config, go to our web security config and simply remove the password encoder. Bcrypt is default behavior.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing?u=76281980&t=94)** So once that is gone, we can now go and run our admin web application. Now again, remember that this is probably going to be stored because it's still using basic auth. So I'm going to copy it and open up an incognito window, pop that in. I'm going to have to sign in again. And now when I go to customers, it prompts me. I can put in my user and do my password. JDBC. And there we go, we've logged in, so it's now hashed our password. So now it's stored in a way that no one can ever figure out what it is other than in this case, they know that they're both the same, they don't know what that value is. Probably could figure it out pretty quickly. Doesn't really matter for demo purposes, but the idea here is still the same. We have a password that has been encoded using a one-way hash and is now stored in a safe manner In our embedded database, it would be the exact same if you were using a remote database. It is stored in a secure way, and now your application can use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Boot]] (2), [[Java Database Connectivity (JDBC)|Jdbc]] (2), [[Algorithms]] (1), [[Java]] (1)
> **Env Vars:** sdk (2), jdbc (2)
> **UI Navigation:** go to (4)
> **Best Practices:** you should never (2)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Applying authorizations](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=0)** - [Instructor] So at this point, we've only been enforcing login or authentication to secure our application, but we haven't put any authorizations in place on our pages. So let's change that for our simple web example. All right, so the first thing I want you to do is open up admin web, go to source, main, [[Java]]. The config package underneath our base package and the web security config. So in here, we're going to add a couple new request matchers. So the first one that we're going to do is at /customers/**, so this will be anything beyond the /customers endpoint, inclusive of it. Here we want to do it where we have a role of user. Now, we're going to add another one. And this one is going to be at /orders. And we're going to do a has role of admin. So to get to our orders page, you've got to be an admin, otherwise a standard user can access it. But nonetheless, they all must be authenticated. So now we need to go and add another bean. And this bean is going to be of type GrantedAuthoritiesMapper. And we will simply call it authoritiesMapper. And we will create an instance of a SimpleAuthorityMapper. And to that authorityMapper, we are going to setConvertToUpperCase equal to true.
>
> **[1:43](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=103)** And then we will return that authorityMapper. Now, at this point, we've actually secured our site. And we can test that by going and running our application. If we go to Customers. And then Orders, you'll see that it blocks us on orders. But back on Customers, you'll see that it does list our order data, which is not appropriate. So we need to secure that. So what we are going to do is we are going to go back into our application. Let's go ahead and stop that. We're going to go into the resources directory and the templates, and we're going to open up the detailed_customer. Now, the first thing we need to do is we need to add a new namespace. And this namespace is sec. And this has actually been imported already for us when we brought in the [[Spring Security]] extras for Thymeleaf. So this is going to come from [http://www.thymeleaf.org/extra/spring-security](http://www.thymeleaf.org/extra/spring-security).
>
> **[2:50](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=170)** So now if we scroll down to line 25, you'll see that we build a div, and underneath that is the table for the order numbers. So we're going to add to that div on line 25 a check. And that check is going to be hasAuthority. And we want to check for role of admin. Now, this will actually block that from being shown. And you can test that if you would like. However, there's one other thing that we need to do. Because of the way that the controller works, it will still load the data into the model even though we don't display it. So we need to prevent that from happening. So we're going to go into the web package, and into the controller and the customer controller itself. And at the very bottom of the customer controller is our method that loads that table. So we're going to take line 59 and we're actually going to move it up. We want to create an instance of that first, and now I'm going to put a little separation because we're going to grab the line 60 and 61 here in a moment when we are done. But let's go ahead and execute against this. In order to do so, we need to get a handle of our principal, and the principal comes from Java Security, and we will simply call it principal. So now we can do our checks. So if principal is an instanceof UsernamePasswordAuthenticationToken. So if it's an instance of that,
>
> **[4:28](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=268)** we're going to go do some work. In order to do it, we need to create an AtomicBoolean, we will call it auth. This equals a new AtomicBoolean that we will set to false. Now, we will create a collection, and the collection is going to be of type Granted Authority from org [[Spring Framework]], and we will call this authorities. And this will equal a UsernamePassword. We're going to cast it to a UsernamePasswordAuthenticationToken. And we will call this principal getAuthorities. And now we can take that authorities and we can iterate over it. And we're going to do so in a lambda. So authority. And within here, we're going to do a check. So if authority.getAuthority.equals,
>
> **[5:37](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=337)** and here we need to do our ROLE_ADMIN. So if it is that way, we're going to set our auth equal to true. Now, after that is done, we're going to do a check. So if auth.get, in this case, it will happen to be true, we will go into this. If not, it won't. We will now grab our two lines and put them into that block. Now, I'm going to drop a breakpoint on line 64, and I'm going to run my application. Now, we're currently logged in as the user on basic auth. So when I go to that page, so after I talk about setting the breakpoint. So now let's go ahead and debug our application. Now, I am logged in as the user with basic auth. So if I go to Customers, and then I click Details, we can go back into our app and you'll see that we have a breakpoint. So we will step over that. And now you will see when we look at the auth get, if I step into this, its value is false. So let's grab this and let's go to a new window, an incognito window,
>
> **[7:17](https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations?u=76281980&t=437)** and let's paste that in. I will log into [[GitHub]]. Now, I'm going to sign in as the admin user, go to my Details once again. Go back into my breakpoint. And now if you look at auth, it is true. So we will now load that data. And if I go ahead and play that out, you will see that our order data loads. So we now have authentication set up in our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Spring Security]] (1), [[Spring Framework]] (1), [[GitHub]] (1)
> **Code Identifiers:** authoritymapper (2), authoritiesmapper (1), setconverttouppercase (1), detailed_customer (1), hasauthority (1)
> **UI Navigation:** go to (6), scroll down (1)
> **URLs:** [http://www.thymeleaf.org/extra/spring-security](http://www.thymeleaf.org/extra/spring-security) (1)
> **Env Vars:** role_admin (1)
> **Tools:** github (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)

#### [Form-based authentication](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=0)** - [Instructor] Before we jump into implementing [[Forms]] based authentication, let's take a moment and discuss why we should do this in a web application. So you may ask yourself, why would we want to implement forms based authentication for web applications when we have basic authentication? Let's talk for a moment about that basic auth. RFC 2617, for instance, defines basic authentication. But there is no specification that does the same for forms based authentication. There's nothing even close. One of the biggest issues with basic authentication is actually the inability to log off. As we've seen, we've had to open up sessions in private browsers and things like that. It doesn't log off and your browser actually maintains its state. Everything is session based with basic authentication. And as such, there's not a real unified way to handle logging off across all the browsers. Most of them don't even implement a log off at all. Often you'll hear that the base 64 encoding of the username and password is a security flaw in the spec. Now, I'd like to put that to [[Representational State Transfer (REST)|rest]] a little bit. When leveraging TLS communications, the base 64 encoded header is actually encrypted on the wire. As such, it isn't easy to decode as some people will tell you. There's really no inherent [[Security Risk]] with using basic auth, assuming your server's operating with TLS, unless of course you consider the risk of not being able to log out, of course.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=93)** And I do consider that a risk when it comes to basic authentication. The limitations of basic auth are why I implement forms based authentication. But it is a truly secure method, especially for internal systems if that's what you choose to use. So we're going to do some forms based authentication, but let's talk about the why. Again, with basic auth, not only can you not log out, but you may also have no ability to modify the login window either because it's provided by the browser. In many cases, that causes organizational heartburn to have a page that doesn't look like the rest of your forms. So with forms based authentication, you have complete control. Since you're going to leverage a standard [[HTML]] form to pass the credentials to the backend, you can style that form as much or as little as your organization would like. But keep in mind that you still need to leverage TLS to secure your credentials on the wire because they're going to be in the body instead of the header, but it still needs to be encrypted. Now, this does allow for a much more seamless view of your login page. And forms based authentication can provide support for remember me options if they are implemented. And finally, as you might expect, forms based authentication allows you to define a logout process and a page to return to after you're logged out if you want to have that. So before we progress to the next step of our application, let's evaluate these steps because we're going to do them over several videos. First of all, we need to create our login form itself. We also need to create the login process
>
> **[3:10](https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication?u=76281980&t=190)** and a landing page for that. And finally, we need to configure our system to not utilize the basic auth, but instead to leverage forms based authentication. So let's jump into this over the next couple videos step by step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (10), [[Representational State Transfer (REST)|Rest]] (2), [[Security Risk]] (1), [[HTML]] (1)
> **Env Vars:** tls (3), rfc (1), html (1)
> **Documentation:** rfc (1), specification (1), spec (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [The login page](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=0)** - So let's start where we said we would, and that is the login page itself. Now, in an effort to save a little bit of time and a lot of typing, I've gone ahead and created a login page for you. You should update your exercise files to grab it, but let's walk through what it says. So after the head section, we get into the body. On line 13 here I bring in the standard header so that my login page looks like every other page. I then create an instance of a container, which is a bootstrap construct, and then I simply build out a form. But before I get to that form on line 16 and 17, you will see that there are a couple of error messages that will get displayed. If the parameter is an error parameter, it will tell me that there is an invalid username or password. Then on line 17, if the parameter is a logout indication, it will simply say that you've been logged out. Now when it comes to the form, it's just a standard username and password form with a submit button that says Sign in. Now that's great and all, but wouldn't it be nice to actually have a button on every page that I could log in or log out from? So let's go implement that. So we're going to go over to the header itself. And the first thing we need to do on the header is we need to bring in an XML namespace sec and set that equal to like we did before, [http://thymeleaf.org/extras/spring-security](http://thymeleaf.org/extras/spring-security).
>
> **[1:37](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=97)** And now we're going to go down here to line 31 and we are going to add in at the end of our nav. So this will be at the far right of the nav itself. We're going to create a new div, and the class on this div is going to be d-flex and flex-row-reverse. That way it shows up on the far right. And we're going to put another div in here with a sec:authorize. And that is going to be equal to is authenticated. So if we are already authenticated, we now need to build a form with a th:action+@{/logout}
>
> **[2:28](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=148)** with a method equal to post. And we will simply put in here a button of type submit and a class of button and button primary. And we will call this log out. So now after that div, we're going to put in another one, and this one will have a sec:authorize=isAnonymous.
>
> **[3:05](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=185)** So if we are anonymous, we're going to put in an anchor, but the anchor we're going to put in is going to be a class of button. And once again, button primary, we will set the href of this anchor equal to #. Then we will do a th:href equal to @{/login} and we will call this login.
>
> **[3:34](https://www.linkedin.com/learning/spring-6-spring-security/the-login-page?u=76281980&t=214)** So now every page will have a login or logout button based on where we're at. And this will exist on every page because it is included in the header, which is a fragment brought into every other page. We are now done writing our login form. Now let's jump in and wire it up.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3), is an  (2)
> **Code Identifiers:** isanonymous (1)
> **URLs:** [http://thymeleaf.org/extras/spring-security](http://thymeleaf.org/extras/spring-security) (1)
> **Env Vars:** xml (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - so (1)

#### [Wiring it all together](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=0)** - [Instructor] So now that we've made our page and added the header button, let's put the wiring in place so we can actually use this. So the first thing that I need you to do is to go into the admin-web, source, main, [[Java]]. base package, web, controller. And open up the HomeController. Now I'm going to remove this request mapping from the class. And I'm going to simply put a slash on the GetMapping. Now I'm going to create another GetMapping. And this is going to be at /login. We will call it getLoginPage. We actually do not need any parameters. And we are going to simply return login. Now let's go into the config package in the WebSecurityConfig. There's a few changes that we need to make here. So we are going to get rid of httpBasic, and we're going to replace it with .formLogin. And in our formLogin, we will do a handle to a form. And do a lambda on that. And now form .loginPage. That's going to be at /login. And permit all.
>
> **[1:35](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=95)** And now we're also going to do a logout. And do a logout.permitAll.
>
> **[1:49](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=109)** Now there's one more change that we need to make, and this is because of the environment we're working in. This is not something that we normally have to do, but because we're working in code spaces, we need to add a couple tomcat properties. So server.tomcat.remoteip.remote-ip header
>
> **[2:12](https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together?u=76281980&t=132)** =x forwarded for. And server.tomcat .remoteip.protocol-header =x forwarded proto. All right, now with that said, we are ready to actually run this. So when we come back we'll do some testing, and make sure that all of this works as expected using [[Forms]]-based authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[Forms]] (1)
> **Code Identifiers:** formlogin (2), getloginpage (1), httpbasic (1), loginpage (1), permitall (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### [Finishing touches and testing](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=0)** - [Instructor] So, we've made our login page, we've added a button to the header so we can log in or log out depending on our state, and we've wired this in instead of basic auth using [[Forms]] authentication, so let's actually go test everything in all of our scenarios. So, I'm going to go ahead and simply fire up my application, and you'll notice up here at the top right, we have a Login button, but instead of clicking that right now, let's go ahead and click on Customers. It fires the login page as expected because we need to be authenticated here. So, let's sign in as the user, and you'll see, we can see all of our customers. If we go to Details, we do not get the order details, and if we go to Orders, we get the Oops page. But now if I log out, you'll see that we have the indication that I've logged out. So, let's sign in as admin, but let's use the wrong password. You'll see that we now have an invalid username and password warning. Now, let's sign in with the proper password. Now, when I go to Customers and go to Details, you'll see that I see the orders, and when I go to the Orders tab, I see the orders there as well. So, now our application is wired with a form-based authentication, saving that data in the database using Bcrypt to hash that password, and we essentially have a fully working
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing?u=76281980&t=93)** and relatively secure app. That being said, there's a little bit more we can do and we're going to take it into the next chapter and apply some enterprise-based focus to this using LDAP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **UI Navigation:** go to (5), click on (1)
> **Env Vars:** ldap (1)
> **Cross-References:** next chapter (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)


### 3. LDAP Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to LDAP for authentication](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=0)** - [Instructor] One of the most common ways to authenticate an application in an enterprise is due to the use of LDAP. So let's talk a little bit about LDAP in [[Microsoft]] [[Active Directory]]. LDAP or Lightweight Directory Access Protocol is a lightweight user authentication directory structure. It's built in natively to many operating systems in one shape or another and of course there are standalone implementations as well. One of the biggest benefits of LDAP is the fact that it's interoperable among many different operating systems and components. In fact, IT services are exported to many of those components so that they don't natively have to support authentication, which in an enterprise setting is exactly what we want. Because LDAP is lightweight, it's also highly scalable, which again, is another benefit when you're running distributed systems across the globe. And all of those enterprise systems need to share the same directory structure. Now, I mentioned Microsoft Active Directory. In some way, shape or form, it supports an LDAP protocol, but it is not LDAP, and that's very important to understand before we go forward. Now, [[Spring Security]] LDAP is not a very hard project to learn. The base project is Spring Security LDAP itself. It offers full support for all native LDAP operations that you would need outside of authentication. And while we're going to focus primarily on the authentication routines, it is good to keep in mind that you have other accesses to LDAP
>
> **[1:34](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=94)** outside of authentication as well. Spring Security also provides adequate support for password hashing that most LDAP implementations also support. Now, the paradigm that we will use to learn Spring Security with LDAP is going to be very similar to what we saw with basic and form-based authentication. LDAP authentication still leverages the authentication manager builder that we have been configuring in our security configuration class. I do want to talk a little bit about how we're going to to use LDAP in this chapter. We're going to use an embedded LDAP server that's part of the spring [[Dependency Management]] structure. You don't have to use the embedded LDAP server if you don't want to. You can use something like OpenLDAP with Docker or built into your OS. It's ready to go. That's actually how I do most of my LDAP work when I'm running locally. But again, in this example, we're going to use an embedded LDAP instance. Now you may be asking yourself, well, I've got access to Active Directory. Can I just use it for the purposes of this demo? The short answer is you can. It's a little bit different, and we're going to talk about some of those differences. However, it's important to note that active directory is not LDAP, but it can use LDAP for authentication routines. Both of them are based on a directory structure
>
> **[3:07](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-ldap-for-authentication?u=76281980&t=187)** and it's very similar, but they are not the same, and we should be really clear on that. With all that being said, let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Spring Security]] (4), [[Microsoft]] (2), [[Dependency Management]] (1)
> **Env Vars:** ldap (21)
> **CLI Commands:** docker (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Configuring a sample LDAP server](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=0)** - [Instructor] So now let's go through the actions of configuring a local embedded LDAP server, acknowledging that this is only for the demo itself. Normally your LDAP server is external to your application, as we already discussed, but doing so gets us what we need so we can actually wire in the [[Spring Security]] constructs. So the first thing that I want you to do is I want you to go into the DAT directory and I want you to copy the Test-server LDIF file. And now in admin-web, source, main resources, I want you to paste that file. Now we're going to go back to our spring command line utility, and we're going to do a spring encodepassword passwordldap.
>
> **[0:48](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=48)** We're going to grab the value after the curly braces with the bcrypt and we will swap out the passwords that I have put in here.
>
> **[1:04](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=64)** Excellent, so now that that is done, let's open up the pom.xml file and we're going to add a few compile time dependencies to our project. So the first one comes from org.springframework.security, and the artifact here is spring-security-ldap.
>
> **[1:34](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=94)** Now we're going to add another dependency, and this one is going to come from org.springframework.ldap. And the artifact ID here is spring-ldap-core. And now there's one more, and this is going to be our embedded LDAP server. So com.unboundid. The artifact ID is unboundid-ldapsdk. Now we're going to go ahead and let everything download and do its thing. Now we're going to go to our config class and we're going to open up the WebSecurityConfig, and we are going to create an Autowired construct. So Autowired public void configure. This way that this thing actually gets run. And this is going to take an authenticationManagerBuilder. We will call this auth, and this throws an Exception. All right, so we're going to do an auth, ldapAuthentication, .userDnPatterns.
>
> **[3:11](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=191)** Now you can actually get the value of these patterns from the file itself, from the LDIF file, but for now we're just going to go ahead and type them out. So, ou is people, and then the groupSearch Base is an ou of groups. And then a contextSource. Now we're going to do our URL, and in this case it's an embedded URL. So it's ldap://localhost:8389/dc=landon,dc=org.
>
> **[3:57](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=237)** And now we're going to do an and. And we will do a passwordCompare. And a passwordEncoder. And the passwordEncoder we will use is a new BCryptPasswordEncoder. And the password attribute in our LDIF file is userPassword. Now with that done, we have one more thing and that is going to our application.properties file. And we need to set a couple application properties. So spring.ldap.embedded.ldif, and that is going to be available on the classpath at test-server.ldif, spring.ldap.embedded.base-dn, and that is going to be equal to dc=landon,dc=org. And then spring.ldap.embedded.port, and that is going to be 8389. Now with all of that up and running, we should now be able to run our application.
>
> **[5:27](https://www.linkedin.com/learning/spring-6-spring-security/configuring-a-sample-ldap-server?u=76281980&t=327)** Now we can do a login. We will log in as user and it's passwordldap. And you'll see we now have logged in and we've used our new LDAP password, but all of our authentication remains the same. So that's the simplest way to use LDAP to do authentication specifically around an enterprise application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (1)
> **Env Vars:** ldap (5), ldif (3), url (2), dat (1)
> **Code Identifiers:** passwordencoder (2), authenticationmanagerbuilder (1), ldapauthentication (1), userdnpatterns (1), groupsearch (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** pom.xml (1)
> **URLs:** [localhost:8389](https://localhost:8389) (1)
> **Ports:** :8389 (1)
> **Cross-References:** go back to (1)

#### [Spring LDAP outside of authentication](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=0)** - [Instructor] One of the tangential projects that I have done quite a bit of work in exists in the LDAP realm, and I want to give a brief discussion of it. The use case in this arena are very enterprise focused for my experiences, but there are always different use cases, so it's worth learning a little bit about them. So to a casual person in technology, when you hear LDAP, you may only consider authentication. While that is an important use case, it isn't the only one. In fact, there are several valid use cases that you may encounter where LDAP can be a viable solution. The project for working with LDAP outside of the security sense is spring-ldap-core as we previously saw. And I professionally use this project a few times for some really big projects. The uses, in fact, are so critical to HR that I feel it's worth this entire video on this topic so you know that it exists. Many of these use cases are not even security focused. They are simply, in my experience, employee-related tasks. One of the beautiful aspects of the way the Spring team works is the cohesion of the framework itself and LDAP operations are no exception. In [[Spring Security]], we can query LDAP using the template pattern for LDAP, just like we would for [[Java Database Connectivity (JDBC)|JDBC]] or [[Representational State Transfer (REST)|Rest]] or Rabbit, or any of the other templates for the various technologies that exist. The LDAP template has several key use cases that you need to know.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=93)** The first and most common for many people is search. There is also support for building distinguished names in a very simple LDAP name builder, mostly associated with the JDBC template, and often you use one to serve the other back to the template support. You also get binding support, which is the creation of nodes and associations. With that, you get updates and deletes. Finally, there's support for the repository patterns within LDAP. So we haven't seen any code, and I think that's fine since it's all well documented. But I do want to share a few real life use cases that I have worked on or I have consulted on. One really powerful use is an employee onboarding system where the user is added to the directory dynamically based on conditions being met, like signatures being fulfilled and things like that. In other valid use cases, the various HR management systems, especially those for targeting communications, by leveraging groups that may not be visible to the entire company, communication channels or email lists can be generated while obscuring those from the view of those not in the group. It can also be a very useful tool when building HR or physical security directory tooling or search programs if you are on an on-premise environment. I've also seen it used for alerting systems for weather and other warnings within an enterprise.
>
> **[3:08](https://www.linkedin.com/learning/spring-6-spring-security/spring-ldap-outside-of-authentication?u=76281980&t=188)** Finally, I think it's important to admit that there are other pieces of data that you can store in LDAP other than users, and those use cases can generate huge wins by leveraging spring-ldap-core.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java Database Connectivity (JDBC)|Jdbc]] (2), [[Spring Security]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** ldap (11), jdbc (2)
> **Exercise Files:** template (4)
> **Definitions:** is an  (2)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Active directory vs. LDAP for authentication](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=0)** - [Instructor] I want to talk for a moment about using [[Active Directory]] from [[Microsoft]] for authentication in a [[Spring Boot]] application. Now today, many companies are moving to ADFS, which is SAML-based, but there still are a lot of enterprises using good old fashioned Microsoft Active Directory. It's important to note that Active Directory is not LDAP, and that sometimes gets really confusing in the industry, because people deal with LDAP, and quite often, they're connecting to LDAP URLs, but really they are hitting Active Directory. It's important to make this distinction, because Active Directory implements an LDAP API, but Active Directory is much more than LDAP. Now, the LDAP interface is really what is exposed, and it's exposed to the AD Lightweight Directory Services, and that's contained within the structure of Active Directory itself. Now, again, Active Directory isn't LDAP, because Active Directory provides many more services, and if you look at the port requirements of a domain controller, you get a real feel for the weight of Active Directory versus a very small Lightweight LDAP implementation like OpenLDAP. But that being said, Active Directory is by far one of the most popular enterprise solutions for managing directory services, among other things. And as such, as a Spring developer, it is critical that you not only understand the differences, but understand how to leverage your knowledge of LDAP
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=93)** to interact with your enterprise Active Directory. Now, authentication with an Active Directory instance seems very familiar if you have worked with LDAP. It can be standard, but there's also some non-standard methods. Now, configuration in an Active Directory situation is very similar to what we previously looked at with our embedded LDAP instance, but I do want to give you a little [[Microsoft Word|word]] of caution. One catch with active directories, all too often we build nested group structures. In fact, that's considered a feature of Active Directory to build groups within groups within groups. That way you can cascade permissions down across your organization. But in the [[Spring Security]] world, nested groups don't natively work out of the box. And there's actually a Spring Security ticket that talks about this, and there's some conversation there actually between Rob Winch and myself, for instance, where we're talking about the fact that this support, in my mind's eye, seems natural, but it would be non-passive changed in Spring Security. So Rob has provided a very clear implementation step, and it's one that I've implemented, and I highly recommend you go take a look at this ticket, SEC 1823, if you're dealing with nested groups within your structure. The implementation of this from Spring Security perspective, again, should look very familiar to what we do for a traditional LDAP instance. There's an authentication provider, and instead of an LDAP auth provider,
>
> **[3:06](https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication?u=76281980&t=186)** it's an Active Directory LDAP auth provider. Now, mostly it's going to be the exact same as standard LDAP. There's a slight configuration, but that is pretty well-documented. What you're going to have some play around is the group and role matching, and you're going to have to do some extra work on that. That's just because the nature of the nested groups that we get all too often in Active Directory. I'm not going to do a demo of code here, because quite frankly, setting up an Active Directory server is not a trivial task. But I'm sure that once you have one in your organization, you have access to a test instance, and you can play around with that following the documentation from Spring, as well as many conversation points on Stack Overflow, or in the various tickets around Spring Source itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (18), [[Spring Security]] (4), [[Microsoft]] (2), [[Spring Boot]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** ldap (15), adfs (1), saml (1), api (1), sec (1)
> **Documentation:** the documentation (1), stack overflow (1)
> **Analogies:** similar to (1), for instance (1)
> **Warnings:** note that (1), caution (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 4. Leveraging OAuth 2.0 with Spring Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to OAuth 2.0](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=0)** - [Instructor] While OAuth and OAuth 2 are probably two of the most common authentication and authorization schemes on the internet today, they're also some of the most confusing and misunderstood. So before we get too deep into using OAuth 2 with [[Spring Security]], I want to just talk very briefly about what OAuth 2 actually is. So what is it? OAuth 2 is a protocol as well as a framework for providing access to HTTP services. It's often used for third party access, so if you use social media and you grant an application access to your [[Facebook]] profile, for instance, that's done through OAuth 2. [[Google]] provides the same sort of structure with its frameworks. It's so common that you may not even realize you're doing it, but OAuth 2 really is all over the place. It can also be used for system-to-system communications in standalone mode or on behalf of another user. And from my perspective, this is actually the most common use case that I use because we actually secure all of our web service calls with OAuth 2, between the client and server on purpose in order to make sure that we're protecting the data as needed. Now, there are several key components of an OAuth 2 system. The first is the resource owner, and that's the data that is actually being protected. For instance, my profile data in Google would be the resource, and I'm the owner of that data because it's about me. Now, the client is the application that, for instance, I am using
>
> **[1:32](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=92)** or a service that is being used on my behalf that is requesting access to the resource itself. The resource server in my previous use case would be Google's profile system itself. So it is the system that hosts the protected data in the accounts that we're requesting access to. And the authorization server is the service that grants [[Tokens]] on behalf of me to the data that the resource server itself holds, that the application is requesting. Now, there's a couple token types and we need to know about these tokens as we're interacting with OAuth 2 at a systemic level. The first is the access token, and this is the secret token that is used to identify the user. Often it is very short-lived, and that's on purpose because that token uniquely identifies me and whatever permissions I've associated with it. As such, we don't really want it to live for a long time because if it gets leaked, the security breaks down very quickly. Now, the refresh token is a little bit longer-lived token. It is used to renew an access token when that access token expires. So you may have an access token that lasts for a day, and you may have a refresh token that lasts for a week. So what that means is, is if I log in today, I use my access token. If I come back tomorrow, I would use the refresh token to renew my access token. However, if I don't come back for another 14 days
>
> **[3:05](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=185)** after my refresh token and my access token will have expired, and I will have to go through the process of granting access once again. Now, scopes are provided on the access tokens, and it's essentially the rights that are associated with the token. So for instance, in a server side component, let's say we have a service that serves customer data. We would grant read access to another system that says you can access customer data while not providing that same scope to a different access token. Now, I kind of alluded to it here, but there's a couple of different types of grants, and those grants impact flow throughout the system. The authorization code grant is the most common, and that's what you would use if you see something on Facebook or Google where you're granting access to someone else on your behalf or usually an application. Now, an implicit grant is a very common grant that is used in web apps and mobile apps where the security of that access token cannot be maintained. Often these don't come with refresh tokens, and they're very specific to a function of the application being granted access. Now, the one that I use most often, as I alluded to previously, is the concept of a client credential. Each system gets a client ID and a secret that it uses to get an access token and then do its work within the system based on the scopes that we previously defined.
>
> **[4:40](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2?u=76281980&t=280)** Now, that's like 100,000-foot view of OAuth 2, and it is by no means an in-depth explanation of every key component of OAuth. If you're really interested in understanding OAuth more, I provided a text document as part of this chapter to give you some ideas, but of course, you can take it much deeper than I've provided you with this text document itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Tokens]] (4), [[Facebook]] (2), [[Spring Security]] (1)
> **Analogies:** for instance (4)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Env Vars:** http (1)
> **Speakers:** - [instructor] (1)

#### [Spring and OAuth 2.0](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=0)** - [Instructor] After just discussing a bit about what OAuth 2 is, I'd like to talk a little bit about how Spring works with OAuth 2. And as you might guess, Spring has full integration for this protocol. One of the first classes you may interact with is the CommonOAuth2Provider, and this is used to connect to such systems as Okta or [[Facebook]], and we'll use a little bit more on this later, but as I said, it provides native support for things like Okta, [[Google]], Facebook, [[GitHub]], and several other OAuth providers. It's a property-based configuration if you're in a [[Spring Boot]] application, and that's most often how you're going to use this class. By using the property-based configuration, you actually get native support in the Spring Boot app itself with very little work, something that we are going to see in our example. It provides client-side OAuth integration. It allows you to provide third party support for the login operations so you don't have to keep that information in your site, which is very attractive to a lot of companies that don't want to manage the overhead of bringing user authentication in. Because after all, when user authentication leaks, that's what makes the news. One of the next pieces you might work with is an authorization server. Now, we're not going to spend much time working with that and that's fine, but this system that provides authorization and authentication services to the system as a whole. Many companies choose to have their own internal authorization server to provide that utility to not only your mobile applications,
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=93)** but also your internal services themselves. Creating an authorization service really is as simple as using an annotation, EnableAuthorizationServer. It's something that you can do when you are setting up an application if you choose to go that route, and Spring has examples of doing this. I would caution you though that there are third party tools that provide the same benefit, and you don't have to roll any of it yourself. Now, one of the beautiful parts of configuring your OAuth this way is you actually have support for multiple grant types. Now again, this is not something that we're going to work with, but it's something that you can play with on your own time if you find value in building an authorization server. Now, I do want to say one thing about these grant types that it supports is that this is an opportunity for you to play. Now, when I do this at home, I actually just run a keycloak server, which is an open source authorization server and use it. That being said, if you want to play with the full stack from both sides, this is a great pathway for your learning. I'm just not a big fan of using it in production personally. Now, the next thing is the resource server itself. The resource server provides the resources that are being protected, and often this is a person system, but it doesn't always have to be. Configuring the resource server literally is as simple as doing an EnableResourceServer annotation. Again, something you can go further into on your own, and there is documentation on this if you want to. Now, finally, let's get to the OAuth 2 client,
>
> **[3:09](https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2?u=76281980&t=189)** and this is what we are going to build. The OAuth 2 client allows you to have full client-side support for OAuth systems like Facebook, Google, GitHub, and the like. To enable the client, you simply enable OAuth2Client and then we're going to walk through that, and then you have the ability to do the [[Representational State Transfer (REST)|rest]] of it through configuration. Now, there is a REST template that you have access to if you want to use it to do more detailed work. Not something we're going to focus on on this course, but I do want you to know that it exists. And like we had before, you've got various grant types and you can use [[Spring Security]] annotations to protect your methods based on those. More documentation is available at [spring.io](https://spring.io) on all of these constructs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (3), [[Google]] (2), [[GitHub]] (2), [[Spring Boot]] (2), [[Representational State Transfer (REST)|Rest]] (2)
> **Definitions:** is an  (3), is a  (3)
> **Tools:** github (2)
> **CLI Commands:** find (1)
> **URLs:** [spring.io](https://spring.io) (1)
> **Env Vars:** rest (1)
> **Exercise Files:** template (1)
> **Warnings:** caution (1)

#### [Using GitHub as an authorization service](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=0)** - [Instructor] All right, now it's time to actually do some work, and we're going to use [[GitHub]] as our OAuth provider. Quite simply, not only is it easy, but we have a GitHub token because you're using GitHub as part of Code Spaces. So let's walk through this exercise. Okay. The first thing that we actually are going to do is we're going to create a new application. So I'm going to open up the command palette and do spring initializer. We'll select 344 [[Java]] com.frankmoley.lil, choose your group name, whatever you would like it to be. We're going to call this admin client. We're going to package it as a jar. We're going to choose Java 21. Now a couple dependencies. We're going to bring in web and it's spring web. We're going to bring in the OAuth2 client, and we are going to bring in security. We'll go ahead and build this into the root. Now I am going to go ahead and import this into my workspace. So I'm going to go to Java import, let it bring everything in. I'm going to do a quick check and make sure that it shows up in my [[Spring Boot]] dashboard, which it does. So we should be ready to go. So let's go ahead and open that up. Let's go to source main resources static, and I'm going
>
> **[1:30](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=90)** to create a new file called index.[[HTML]], and we are going to do a very simple Hello World example.
>
> **[1:45](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=105)** We'll put an h1 tag in here and I'll simply say, Hello [[LinkedIn]] Learning. Excellent, okay, that is the entire application that we are going to build. However, we do need to tie it into GitHub. So let's go do that. First thing I'm going to do is open up a GitHub link. I'm going to go to my profile and go to settings. Then at the very bottom, I'm going to go to developer settings. All right, so we're going to go to OAuth apps and we are going to create a new OAuth app. So the first thing we'll do is call it admin client. Now we need a URL. The easiest way that I have to get this URL is to actually come back over here and run the admin client. Now, it is not going to run. It's going to fail to actually load the page because it doesn't know where any of this stuff is, and that's fine. What I care about is getting this URL. So I'm going to copy the URL that is exposed at port 8080. Come back to this tab, and I'm going to put that as my homepage URL, and then my authorization callback URL, I'm going to paste that again and follow it by login/OAuth2/code/GitHub.
>
> **[3:13](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=193)** Now I'm going to register my application and you'll see it gives me a client ID and we are going to generate a client secret. But before we do that, let's go back to our application. Let's go to our application.properties file. We're going to type in the first one as Spring.Security.OAuth2.client.registration.GitHub,
>
> **[3:40](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=220)** .client-ID equals. Now grab the client ID and paste that in. Now you may wonder, I'm going to show these values. Does that not expose everything? And it would, except for I'm going to delete these as soon as we're done. And in your example, do not check these in. That is very important to never check these values in, even though I am going to do it as part of this, you should not. So the next one is our client's secret. Now, to generate the client's secret, it generally will prompt you to log in. I've already gone through a past key authentication before I did the recording, therefore I did not get prompted. So you may get prompted. And if you do that as expected, nonetheless, I have generated it, I can now copy that value, bring it back over here and paste it. Now I'm going to go ahead and update my application. Now, there's two other things that we need to go copy, and what I want you to do is to go back to your admin web source main resources application properties, and I want you to grab these two server Tomcat values. Okay? We're going to drop those in as well. Now we can run our application. So let's go run our admin client, and it fires up and you will see that it
>
> **[5:17](https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service?u=76281980&t=317)** is prompting you to log in. I'm going to go ahead and authorize it, and the page loads. We have now loaded our application using GitHub as our authentication provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Java]] (3), [[Spring Boot]] (1), [[HTML]] (1), [[LinkedIn]] (1)
> **Tools:** github (8)
> **Env Vars:** url (6)
> **UI Navigation:** go to (6)
> **CLI Commands:** make (1), go run (1)
> **File Paths:** index.html (1)
> **Ports:** port 8080 (1)
> **Versions:** java 21 (1)


### 5. WebFlux Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to WebFlux Security](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=0)** - [Instructor] Any modern development in Spring these days requires a reference to WebFlux. WebFlux is the way to do Reactive Spring since 2.0. With [[Spring Security]], there is full support for WebFlux. Let's take a look. The basic annotation that you're going to use is @EnableWebFluxSecurity. This gives you control for basic configuration mapping, and the basic config puts everything as secured. You also have a handle on SecurityWebFilterChain. As you might remember, everything in Spring Security is based on filters and Reactive Spring is no different. The filter chain provides much more fine-grained control, much the way we've seen before in the authentication managers. You also have a MapReactiveUserDetailsService that allows you to have a handle on traditional UserDetailsService, much the same way we have before. And when we get into our example, we're going to go back to that in-memory UserDetailsService. Oftentimes in security, as we have seen, we want to handle the principal, and in traditional Spring Security, it was never a problem. With WebFlux, it still isn't a problem. You still have a model based on the principal itself, but instead of injecting straight principal into your method, you now inject a mono with the principal template into your method where you want to handle it. You still get all the same core functionality, but now it's just wrapped with mono. Now that we've seen the basics, let's jump into some code and show you how similar it is to what we've done
>
> **[1:36](https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security?u=76281980&t=96)** before in order to build out our Spring Security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (4)
> **Versions:** 2.0 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Implementing basic security](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=0)** - [Instructor] So now it's time to implement reactive security. The first thing that I want to do is actually start up an application that's been here the whole time that we haven't actually been using, and that's the Bones application. This is one of my favorite little toy applications because essentially it's a dice rolling application. Now it's going to fire up, there's nothing to respond to, that's fine. Come back over to your IDE, go to your terminal and you can simply do an http :8080/roll.
>
> **[0:36](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=36)** And you'll see it rolls two dice. This time I got snake eyes 1 and 1 with a value of 2. So we'll go ahead and stop that application. Now let's open it up and go to the pom file. And we are going to add a dependency to our pom file.
>
> **[1:01](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=61)** And the dependency that we are going to add comes from org.springframework.boot. And the artifact ID is spring-boot-starter-security.
>
> **[1:18](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=78)** Looks familiar and that's because it is, because it's the exact same starter that we've been using. In fact, what you're going to find is a whole lot of this looks the exact same as we discussed. So let's go to our main application. All right, so the first thing we're going to do is we're going to add an annotation. And the annotation is EnableWebFluxSecurity. Now once that's added, we're going to come underneath the main method and we are going to add a bean. And the bean that we are going to add is a MapReactiveUserDetailsService. We'll simply call this userDetailsService. It takes no parameters. We're going to do a list of type userDetails.
>
> **[2:13](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=133)** And this is going to be an array list. Now we'll do a userDetails.add User withDefaultPasswordEncoder, .username, user .password
>
> **[2:40](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=160)** of password, .roles of USER and .build.
>
> **[2:57](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=177)** Need to import this [[Java]].util.ArrayList 'cause I type too fast. Excellent, now after we build it, we will return a new MapReactiveUserDetailsService where we pass it, the userDetails. And now we've got one more to add. And this one again, will look very similar. We're going to add a bean and this is a SecurityWebFilterChain.
>
> **[3:36](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=216)** And we will do a ServerHttpSecurity, calling it http. And now we can do an http .authorizeExchange.
>
> **[3:54](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=234)** And within there we will do an exchanges,
>
> **[4:03](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=243)** .anyExchange .authenticated .httpBasic.
>
> **[4:14](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=254)** And we're going to use our Customizer.withDefaults.
>
> **[4:24](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=264)** And we'll go ahead and do a formLogin
>
> **[4:34](https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security?u=76281980&t=274)** and we will do a return of http.build. Excellent, so now let's go ahead and run our application, once again. We'll go back to our terminal. You'll see we get an authentication and we can type in here user password. It's going to redirect us to a white level error page because there is nothing there for it. But if we go to /roll, you'll see that it actually prints out the [[JSON]] that we would get back, which is great to see. But if we come back to our console, you'll see that we get a 401 because we haven't provided the header. So we can simply do an a user:password and now it executes. So we provided the basic auth header and we're good to go. This is the way you do security, whether it's reactive or not, it's really all the exact same. It's just little tweaks here and there based on whether it's standard or reactive. But nonetheless, [[Spring Security]] works for all of it and hopefully will make your life easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (1), [[JSON]] (1), [[Spring Security]] (1)
> **Code Identifiers:** userdetails (3), userdetailsservice (1), withdefaultpasswordencoder (1), authorizeexchange (1), anyexchange (1)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** ide (1), user (1)
> **Cross-References:** we discussed (1), go back to (1)
> **Tools:** terminal (2)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=0)** - [Instructor] So before we end this course, I'd like to talk through a little bit about what might be next in your journey. But before we get there, I want to start with a very simple review of what we've looked at in this course. To start with, we introduced the concept of [[Spring Security]], as well as some general security concepts. We then went about the process of securing a web application through various incantations. We then integrated with an internal LDAP server to show you how to leverage LDAP as an authentication source for those of you working with enterprise-based solutions. We then took a look at OAuth2 as a security methodology for those working in Internet as well as enterprise systems relying on OAuth2 or OIDC Connect in order to connect their web application. And then we took a brief look at reactive programming with security showing the similarities to standard web applications. So the next things for you really are to get involved. I highly recommend that you find a local Spring or [[Java]] user group to get involved with. Many times security topics get talked about in these user group sessions. I also encourage you to join the online community at Stack Overflow where you will find lots of questions and answers about all things Spring, but specifically Spring Security. And, of course, you should follow the contributors and advocates of the [[Spring Framework]] as well as Spring Security on Twitter or X, many of whom I already follow. So if you want to go that route, you could follow me and then get their names from that path.
>
> **[1:33](https://www.linkedin.com/learning/spring-6-spring-security/next-steps?u=76281980&t=93)** And, of course, you can commit to this project. But I do want to say that your involvement also involves yourself in this code. Play with Spring Security, dig into other aspects of it, and repeat the operations over and over until you get a better grasp of the framework as a whole. Now, I do want to end by saying that my commitment to you does not end when this course is done. And that's very important for me because your time invested in this course is very valuable, and I thank you for taking your time to learn with me. Reach out to me on X or Stack Overflow or [[GitHub]] by the handle fpmoles. Also, I am very active in the Q&A section on this platform. So if you've got questions or specific comments around this, please feel free to reach out there. And I do answer them on an almost daily basis and, of course, provide feedback for this course because it's through your feedback that I make this in all of my courses better. So once again, thank you so much for your time, and remember to never stop learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Spring Security]] (4), [[Java]] (1), [[Spring Framework]] (1), [[GitHub]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** ldap (2), oidc (1)
> **Documentation:** stack overflow (2)
> **Tools:** github (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frank P Moley III]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-6-spring-security-5985041/codespaces)

## Skills Covered

- Spring Security
- Spring Boot

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