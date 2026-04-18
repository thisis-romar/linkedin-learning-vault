---
type: course
slug: advanced-spring-spring-boot-actuator
url: "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator"
duration_minutes: 73
duration: 1h 13m
level: Advanced
updated: 2/1/2022
learners: 9810
skills:
  - Spring Framework
  - Spring Boot
exercise_files: true
github: "https://github.com/LinkedInLearning/spring-boot-actuator-3010189"
tags:
  - course
  - topic/cloud-computing
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/spring-framework
  - skill/spring-boot
status: not-started
created: 2026-04-17
---

# Advanced Spring: Spring Boot Actuator

> Are you a Java developer with a need to monitor the performance of your applications? In this advanced course, award-winning technical instructor Mikaila Akeredolu gives you an overview of the dashboard that you build in this course using Spring Boot Actuator, Prometheus, and Grafana. Then he dives into specifics. Mikaila introduces you to monitoring and managing Spring Boot applications with Spri

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator) | 1h 13m | Advanced | 10K learners

## Instructor

- [[Mikaila Akeredolu]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-boot-actuator-3010189)

## Skills Covered

- Spring Framework
- Spring Boot

## Table of Contents

### Introduction

#### Need to monitor the performance of your applications?
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=0)** - [Mikaila] As the adoption of microservices grows, monitoring the health of production-ready applications and gathering relevant metrics about our apps is becoming more important.
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=9)** If we don't monitor our apps, we'll lack insight and have no clue of what is happening when certain issues arise.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=16)** Spring Boot Actuator is a sub-module that helps with monitoring and managing production-ready Spring Boot applications.
>
> **[0:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=22)** It integrates easily with external monitoring systems such as Prometheus, a monitoring and alerting tool that recalls metrics in a time series database.
>
> **[0:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=33)** My name is Mikaila Akeredolu.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=36)** I've been a software developer and technical instructor for about a decade.
>
> **[0:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=40)** In this course, you'll learn how to monitor your Spring Boot applications with Spring Boot Actuator, gather metrics with Prometheus and build beautiful dashboards with Grafana.
>
> **[0:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=50)** If you're ready to learn how to get a monitoring system up and running in less than an hour, join me in my LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Code Keywords:** module (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [mikaila] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is designed for Java developers with an intermediate to advanced knowledge of Java.
>
> **[0:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/what-you-should-know?u=76281980&t=4)** You're expected to be familiar with Spring Boot and Spring Security, have a basic understanding of Docker images and containers.
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/what-you-should-know?u=76281980&t=11)** It also helps if you're familiar with basic CLI commands, knowledge of HTTP, databases, RESTful APIs, and knowing how to make API calls with tools such as Postman.

> [!info]- Semantic Content
>
> **Env Vars:** cli (1), http (1), api (1)
> **CLI Commands:** docker (1), make (1)
> **Tools:** postman (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 1. Intro to Spring Boot Actuator

#### Introduction to Spring Boot Actuator
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=0)** - [Instructor] Spring Boot Actuator is a module that helps us in monitoring and managing our Spring Boot application when we push them to production.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=6)** It adds many production grade services to applications with little effort on our part, and allows us to monitor our applications in two different ways, either by leveraging HTTP endpoints or via leveraging JMX.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=19)** JMX stands for Java Management Extension.
>
> **[0:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=21)** Throughout this course, we'll be leveraging the HTTP endpoints.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=25)** Spring Boot Actuator, also, integrates easily with external monitoring systems, such as Prometheus, Datadog, New Relic, and so much more.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=36)** It does so by leveraging Micrometer, which is a vendor neutral application metric facade, that makes it easier to plug into these monitoring systems.
>
> **[0:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=45)** We'll be integrating our application with Prometheus and building a beautiful dashboard with Grafana later on in this course.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=53)** I've also provided a repo for an existing application that we'll monitor throughout this course.
>
> **[0:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=58)** It's a basic cloud application.
>
> **[1:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=60)** Let's take a look at it by going over to IntelliJ.
>
> **[1:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=63)** As you can see, right here I'm in my service layer, and I just have some business logic here.
>
> **[1:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=69)** And if I go into my controller, you see endpoints that talk to the disservice layer.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=74)** And you see endpoints for posting, getting, putting, deleting.
>
> **[1:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=78)** If I also take a look at my application to properties file, I have an in-memory database.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=82)** I'm using H2.
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=84)** And when I ran the application, it's just running on port 8080.
>
> **[1:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=88)** And as you can see, I have H2 for my path for my database.
>
> **[1:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=92)** What's missing, however, is that I don't have a way to monitor this right now.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=96)** So, in order for me to monitor this with spring boot actuator, I'm going to go over into my palm.xml file and bring in additional dependency, which would be for spring boot actuator.
>
> **[1:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=106)** So, let's do that right away.
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=108)** So I'm coming here, and I'm going to type in dependency.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=112)** Let IntelliJ complete that for me.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=114)** I'm going to grab the group ID from here and paste it down here, because it's going to be the same.
>
> **[2:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=121)** I'm also going to need all of this part, spring boot starter.
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=126)** However, the dependency that I need to bring in is actuator.
>
> **[2:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=129)** So, I'm going to type that in, actuator.
>
> **[2:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=132)** Make sure you spell that correctly, and allow it to load.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=135)** Once it loads, we're going to restart the application.
>
> **[2:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=138)** So, I'm going to do that right now.
>
> **[2:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=141)** And once the application is up and running, I should have a new path, a base path for actuator.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=147)** And if that's the case, we're going to trigger that endpoint and see what we get, okay?
>
> **[2:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=152)** So, I'm going to scroll over.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=153)** And as you can see, we have a new base path to monitor our application.
>
> **[2:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=157)** So, let's go over to Postman, and let's trigger this endpoint by typing in [http://localhost:8080/actuator](http://localhost:8080/actuator), okay?
>
> **[2:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=172)** And let's hit send.
>
> **[2:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=174)** And awesome.
>
> **[2:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=175)** We did get back a JSON response with the actuator base path.
>
> **[3:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=180)** And it shows you we have a couple of endpoints here, one for health.
>
> **[3:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=184)** We'll take a look at these later in the course.
>
> **[3:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=186)** So, a great job for getting this far.
>
> **[3:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=188)** This is awesome.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), module (1), case, (1)
> **Env Vars:** http (2), jmx (2), json (1)
> **Tools:** intellij (2), postman (1)
> **Definitions:** is a  (2), stands for (1)
> **Ports:** port 8080 (1), :8080 (1)
> **File Paths:** palm.xml (1)
> **CLI Commands:** make (1)
> **URLs:** [http://localhost:8080/actuator](http://localhost:8080/actuator) (1)

#### Actuator endpoints and documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=0)** - Spring Boot actuator endpoints allow us to manage, monitor and interact with our applications.
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=7)** By default, actuator endpoints are enabled with a prefix of actuator followed by their ID.
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=13)** For example, to access the health endpoint, we would need to go to actuator slash health.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=19)** Let's take a look at the spring documentation to see some of the built in end points that are available to us.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=25)** I already have the documentation open.
>
> **[0:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=27)** If you go to the end points tab and you scroll down, you start to see a bunch of end points such as the beans endpoint, displays a complete list of the beans in your application.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=37)** If you want to see the health end point, you already know it's available there slash health.
>
> **[0:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=42)** Info endpoint displays arbitrary info about your application.
>
> **[0:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=47)** So let's dive a little bit deeper into some of the end points that we'll cover specifically in this course.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=52)** In this course, we're going to focus on three specific end points.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=55)** The health, the info and the metrics endpoint.
>
> **[0:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=59)** So let's dive right in.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=61)** As you already know, we need to regularly check to see if our service is up or down, which is one of the reasons why the health endpoint is the only HTTP endpoint that's exposed by default.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=72)** And it is available by going to slash actuator slash health.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=76)** If you trigger that successfully, you will get a status of up or down indicating the health of your application.
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=84)** The next end point that we'll focus on in this course, is the info endpoint.
>
> **[1:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=88)** The info endpoint displays arbitrary information about your application that can be obtained from build files or GET property files.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=96)** And it can be accessed by going to slash actuator slash info.
>
> **[1:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=100)** Currently, we did not have this endpoint exposed by default, but will do so shortly.
>
> **[1:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=106)** The final endpoint that we'll focus on is the metrics endpoint.
>
> **[1:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=109)** The metrics endpoint makes available to us lots of useful metrics, such as system CPU usage, JVM memory usage, and so much more.
>
> **[1:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=118)** And it can be triggered by going to slash actuator slash metrics.
>
> **[2:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=123)** This is another end point that is not exposed by default, but we'll be taking a look at how to expose this endpoint later on in this course, great job.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (3), let (3), default. (1)
> **Env Vars:** http (1), cpu (1), jvm (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Analogies:** such as (2), for example (1)
> **API Endpoints:** get  (1)
> **Documentation:** the documentation (1)
> **Speakers:** - spring (1)

#### Exposing and enabling endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=0)** - [Instructor] Almost all actuator endpoints are enabled by default.
>
> **[0:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=3)** However, they are not all exposed by default.
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=7)** The health endpoint is the only HTTP endpoint that we have exposed by default.
>
> **[0:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=12)** Exposing all your actuator endpoints could be a security risk.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=16)** However, since this is a demo, and we're here to learn, I'll go ahead and show you how to expose all your actuator endpoints, by setting the include property to a wildcard character.
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=26)** So what we need to do is go to our application property files, and we're going to add this configuration in there.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=32)** Once we do that, we'll trigger the actuator endpoint, and what we'll get is additional endpoints, such as the metrics endpoint, the info endpoint, and so much more that we need in this course.
>
> **[0:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=44)** So let's dive right in.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=46)** Inside my properties file, I need to add one configuration saying I want to expose all my endpoints.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=53)** And that configuration is management .endpoints.web .exposure.include.
>
> **[1:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=66)** And I'm going to set that to a wildcard.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=68)** I'm going to restart the application.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=72)** In the interim, I'm going to go to Postman, as you can see, we only have these three endpoints open by default.
>
> **[1:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=79)** Now let's make sure the application ran successfully.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=82)** It did.
>
> **[1:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=83)** So what I'm going to do now is just resend my request to /actuator.
>
> **[1:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=89)** And if you scroll down now, you'll see that you have additional endpoints available to you, such as the info endpoint, we have the beans endpoint, loggers endpoint, and so on and so forth.
>
> **[1:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=100)** So this is awesome, fantastic. This is great.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=103)** However, you can also decide that only want to expose certain endpoints, 'cause you don't want everything exposed by default.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=110)** In that case, there is an additional configuration that you can add in your properties file.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=114)** So let's go right back into our properties file.
>
> **[1:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=117)** And this time around, we'll just copy everything, paste it right underneath, and we'll make some changes.
>
> **[2:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=123)** I'm going to delete everything, include the include, and now instead of include, I want to type exclude.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=131)** Okay.
>
> **[2:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=132)** And in this situation, I want to exclude my info and my beans endpoints.
>
> **[2:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=138)** Okay, so I'm going to reboot the application.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=142)** And if everything goes well, I'm going to trigger the endpoint again in Postman, and the info and the beans endpoints should no longer be available to us.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=150)** So let's take a look at that.
>
> **[2:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=152)** I'm going to go right back to Postman, as you can see, I still currently have the beans endpoint, prior to the configuration.
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=159)** So let's go ahead and hit Send.
>
> **[2:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=162)** And if we scroll down now, the beans endpoint is gone, and we can no longer find the info endpoint as well.
>
> **[2:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=169)** So this is awesome, great job.
>
> **[2:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=172)** Now, we could go one step further.
>
> **[2:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=174)** Perhaps, you'd rather opt in, then opt out of enabling endpoints.
>
> **[3:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=180)** If that's the case, you can set the management enabled-by-default property to false.
>
> **[3:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=185)** So let's take a look at that.
>
> **[3:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=186)** I'm going to go right back into my properties file.
>
> **[3:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=190)** I'm going to come right underneath this.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=192)** I'm actually going to copy this, management.endpoints, because I need that again.
>
> **[3:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=198)** I'm going to paste that right underneath here, okay.
>
> **[3:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=201)** And then I'm going to type .enabled, hyphen, by-default, and I want to set that property to false.
>
> **[3:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=213)** Okay.
>
> **[3:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=214)** So now I'm going to reboot the application one more time.
>
> **[3:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=220)** And if everything goes well, we'll also go back to Postman, we'll trigger the endpoint, and we should no longer see all these endpoints, okay.
>
> **[3:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=228)** So let's go ahead and hit Send.
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=231)** And as you can see, everything is gone, okay, so we're back to square one.
>
> **[3:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=235)** Actually, this is even sort of a little bit worse than square one, because we don't even have the health point exposed, right?
>
> **[4:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=241)** So what we would love to do, is the ability to enable only certain endpoints that we want, okay.
>
> **[4:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=249)** So in this situation, I just want to enable and expose the info endpoint.
>
> **[4:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=253)** So to do that, I need to go back to my properties file.
>
> **[4:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=257)** I need to comment this out, so I'm going to put a pound sign right here.
>
> **[4:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=261)** And the endpoint that I want to expose, and the only one I want to expose right now, is the info endpoint.
>
> **[4:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=267)** So to do that, I'll start to type management.endpoint, which is singular, .info.enabled.
>
> **[4:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=277)** And I'll set that to true. Okay.
>
> **[4:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=280)** So we're going to restart the application.
>
> **[4:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=284)** And if everything works well, when I go back to Postman and I trigger my actuator endpoint, the only endpoint that should be available and exposed to me, enabled by default, should be the info endpoint.
>
> **[4:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=296)** So let's go ahead and hit Send.
>
> **[4:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=298)** And as you can see, I have an additional endpoint, which is the info endpoint, which displays arbitrary information about my application, which I don't have currently.
>
> **[5:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=307)** I don't have anything in there. All right.
>
> **[5:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=310)** So this is fantastic, this is awesome, we did a great job.
>
> **[5:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=313)** In this part of the course, we were able to enable endpoints, expose all endpoints, and enable specific endpoints that we wanted, all right.
>
> **[5:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=323)** So this is it, great job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), default. (5), case, (2), include, (2), default, (2)
> **Tools:** postman (5)
> **UI Navigation:** go to (2), scroll down (2)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Env Vars:** http (1)

#### Show details and create health endpoint groups
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=0)** - [Instructor] By default, the health endpoint only displays a status of up or down.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=5)** Let's take a look at our application to see the health status of application SES.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=10)** But before we do that, we definitely need to make some changes.
>
> **[0:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=13)** Right now we have these properties from the last video, so we need to comment these two out, okay.
>
> **[0:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=21)** Now, if we run the application one more time, we are exposing everything by default using the wild card.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=29)** So if we go back to Postman, we should be able to see all our end points, including the health end point again.
>
> **[0:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=34)** So I'm going to go back to Postman go 'head and hit send.
>
> **[0:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=38)** And as you can see, if you scroll down now you have additional end points, including the health end point.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=43)** Let's go 'head and trigger the health end point.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=46)** Okay, as you can see Postman open this in a new tab, so I'm just going to hit send.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=52)** And as you can see, I have a status of up indicating that the health status of my application.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=57)** However, I can show more details about the health of my application by going back into the properties file, which is precisely what we want to do, all we have to do is type management.endpoint.health.show iPhone details.
>
> **[1:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=78)** And we're going to set that to always.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=81)** I spelled endpoint incorrectly.
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=84)** So it's E-N-D-P-O-I-N-T.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=86)** Now I'm going to reboot the application and if everything was successful, when I go back to the health endpoint, I should see more than just a status of up or down.
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=98)** I'm going to trigger the health endpoint one more time.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=102)** And awesome look at this.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=103)** We have a database information showing you that I'm using H two.
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=108)** We have a disk space information.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=110)** So this is great, this is awesome.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=112)** But we can do more.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=114)** We can also decide to group certain health indicators into their own group.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=119)** So for example, let's just go ahead and group our disk space information and our ping status.
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=126)** So to do that, I'm going to go right back into my properties file.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=131)** And right here, I'm going to type management.end points.health.group,
>
> **[2:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=141)** 'cause that's what I want to do I want to group a couple of health indicators and then I need to give it a group name.
>
> **[2:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=146)** So I'll call this health group.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=150)** Okay, and the indicators that I want to include, I need to use the include property to include them.
>
> **[2:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=157)** And all I have to do is separate them by color.
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=159)** So right now I'm going to include the ping status as well as the disk space.
>
> **[2:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=164)** Make sure that it's camel cased.
>
> **[2:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=166)** I'm going to reboot the application.
>
> **[2:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=169)** I made a mistake here.
>
> **[2:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=171)** I could see endpoint is not spelled correctly, so I'm going to go 'head and re-type that by adding a D for endpoint.
>
> **[2:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=178)** And now I'm just going to reboot the application one more time.
>
> **[3:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=183)** Once the app is up and running, we'll go back to the health endpoint, trigger that endpoint one more time, so let's do so.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=191)** Right now, all I have, as you can see, is the status, the disk space and the ping status, so I'm going to hit send now.
>
> **[3:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=199)** And now we should have an additional property here called groups.
>
> **[3:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=204)** And in there I have an endpoint health group, which is a name of the group that I came up with to group my indicators.
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=212)** So I'm going to copy that.
>
> **[3:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=213)** And in order to trigger this endpoint, I'm just going to append it to the end of my health endpoint.
>
> **[3:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=219)** And now if I hit send, I should just have those health indicators that are grouped together, which is showing my disk space and the ping status.
>
> **[3:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=228)** So great job, this is awesome.
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=231)** This is what we wanted all along, to be able to go in there and see more details about the health of our application, but also to be able to group together certain health indicators.
>
> **[4:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=241)** So this is fantastic.
>
> **[4:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=243)** Great job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1), this. (1), include, (1)
> **Cross-References:** go back to (4)
> **Tools:** postman (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** iphone (1)
> **Env Vars:** ses (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### Show application information with the info endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=0)** - [Instructor] Earlier, we learned that the info endpoint can be used to display arbitrary information, but what does that mean?
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=6)** Well, it can be used to display information such as environment information, build and git property files information, or, we may just want to add the build version to our info endpoint as well as maybe display the build timestamp.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=23)** Well, we can customize this data for the info endpoint in several ways.
>
> **[0:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=28)** For example, if I just wanted to display the name of my project, the description, the version, I can do that by adding some configuration in the properties file.
>
> **[0:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=39)** Once I do that and I trigger the info endpoint I'll no longer just get an empty Jason object, instead, I would get back the information about my application, so let's take a look at that.
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=51)** In writing our properties file, we want to add certain information that we want exposed in our info endpoint.
>
> **[0:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=58)** So we'll begin to type [info.app](https://info.app).name 'cause I want to display the name of my application so I used to at sign, project.name, just to add sign again.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=72)** I'm going to go to the next line, I'm going to copy all this, paste it in the second line and make some changes.
>
> **[1:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=79)** So instead of name, I also want a description, I'm going to copy the description and swap it out here and I'm going to copy this again, go to the next line, I also want it to display the version, so I'll change this to version and change this to version, okay, I'm going to paste one more time and this one, I want the Java version, so [info.app](https://info.app).java, that version.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=110)** And on the other side, it will be java.version.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=120)** Okay, now, we also mentioned that we wanted to show the build timestamp.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=124)** So in order for us to do that successfully, we first need to go into the properties file and we need to add one more thing into our properties file, which would be a format for the build timestamp.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=136)** So, right here, I'm going to type the left angle bracket, maven.build.timestamp that format, okay,
>
> **[2:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=149)** and in between that, I'm just going to type the format that I want, year, okay, month, day, hours, minutes, and seconds.
>
> **[2:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=163)** Before we reboot, we need to add one more configuration in order to be able to display the build timestamp in our info endpoint.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=170)** So I'm going to come right here and right underneath here, I'm going to start typing info.build.timestamp
>
> **[3:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=182)** equals, actually it's not a dot, it's build iPhone timestamps so, build that iPhone timestamp, I'm going to set out to equals@maven.build.timestamp
>
> **[3:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=200)** end that with at sign and now let's reboot the application and if everything is successful, I should see more information now when that trigger the info endpoint.
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=212)** I should see the name of my app, a description, the Java version I'm running and what time is built.
>
> **[3:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=217)** So let's go ahead and trigger the info endpoint by going back to Postman, let's locate info endpoint from the actuator end point, it's right here so I'm going to click this, Postman opens it up in a new tab, that's fine, we're going to hit send so that we can trigger the info endpoint, and wow, this is cool.
>
> **[3:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=236)** We now have more information now in our info endpoint displaying the project's name, description, showing I'm running Java version 14, and the build timestamp, so this is awesome, this is great, fantastic, good job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (2)
> **CLI Commands:** git (1), make (1)
> **Code Identifiers:** iphone (2)
> **URLs:** [info.app](https://info.app) (2)
> **Tools:** postman (2)
> **UI Navigation:** go to (2)
> **Analogies:** such as (1), for example (1)
> **File Paths:** info.app.java (1)

#### Overriding the Actuator base path
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=0)** - [Instructor] So, we can override the actuator base path.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=5)** Perhaps, maybe our app is already using the slash actuator path for something else.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=10)** Well, we do have the option of customizing a base path from actuator to something else such as manage.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=17)** And to do so, we would go into our properties file and add in additional configuration to change the base path from actuator to manage.
>
> **[0:25](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=25)** Once we do that, we'll trigger the new end point in Postman, and we should have access to all the default actuator endpoints that we exposed by default.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=35)** So let's take a look at that.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=37)** Inside my properties file, I'm going to add a configuration by typing management.
>
> **[0:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=44)** endpoints .web .base
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=51)** - path.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=52)** I'm going to set this new base path to slash manage.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=57)** Now let's go back to Postman for a second.
>
> **[1:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=60)** The default actuator end point that we currently have, and I just want to trigger it before we reboot the application, is actuator and you can see everything is exposed.
>
> **[1:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=70)** Now, if I go back to the properties file, again, what I'm doing is I'm changing that to manage.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=76)** So let's go and reboot.
>
> **[1:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=80)** And if everything goes well, we'll go back to our Postman, trigger the actuator endpoint, and it should fail.
>
> **[1:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=88)** We should probably get like a page, not found, like a full fail status code.
>
> **[1:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=91)** So let's take a look at that.
>
> **[1:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=92)** I'm going to try to hit the actuator end point and no longer exist.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=96)** And as you can see is giving me a full fail, it can't be found.
>
> **[1:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=99)** In order to find it, we just need to change this to manage because that's the configuration we made in our properties file.
>
> **[1:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=107)** Now, if I hit send, I have access to all those endpoints again.
>
> **[1:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=113)** All right.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=114)** And as you can see, it's now manage/health no longer manage/.
>
> **[1:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=118)** So it's now managed/health versus actuator/help.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=122)** So this is awesome.
>
> **[2:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=123)** Let's go ahead and reset it back to the actuator though cause I want to keep things the way they were.
>
> **[2:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=130)** So I'm just going to come in the cell.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=131)** I'm going to reboot the application just to make sure my change went into effect.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=136)** Once the app is up and running, I'm going to go back to Postman.
>
> **[2:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=140)** I'm going to go ahead and change this back to actuator and I'm going to hit send again.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=147)** Now, all our end points of the default based path of actuator one more time.
>
> **[2:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=152)** So that is great.
>
> **[2:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=154)** The next, now when we do demo is the ability to map end points to different paths.
>
> **[2:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=161)** For example, we may want to remap the health end point from slash help to something else.
>
> **[2:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=168)** So let's take a look at how that would work.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=170)** And right underneath here, I still want everything up here.
>
> **[2:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=175)** So I'm going to copy this management.endpoints.web, portion.
>
> **[3:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=180)** And now what I want to do, is include a base
>
> **[3:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=185)** - path equals, and I'm just going to set it to a slash.
>
> **[3:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=192)** I'm going to come right under that and I'm going to copy the, management.endpoints.web.
>
> **[3:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=198)** Again, I'm going to paste it right onto that.
>
> **[3:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=200)** And this time around, I want to do some path mapping.
>
> **[3:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=203)** So I'm going to say .path.mapping.
>
> **[3:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=208)** And the end point that I'm trying to map is the health end point, H E A L T H.
>
> **[3:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=215)** And I want to map that to a different end point, which is healthcheck.
>
> **[3:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=223)** Now I'm going to reboot the application.
>
> **[3:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=227)** If everything goes well, I should be able to access my health endpoint by going to slash healthcheck directly.
>
> **[3:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=236)** And I no longer need to go to slash actuator default base path is just a slash.
>
> **[4:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=241)** So now I'm going to change this to healthcheck and I'm going to hit send.
>
> **[4:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=248)** And as you can see, I have the end point for my health, which includes my health group, my status, my database, and so much more.
>
> **[4:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=257)** So this is great.
>
> **[4:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=258)** This is awesome.
>
> **[4:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=259)** We're able to come in here and change the base path from actuator to manage to whatever it is that we chose.
>
> **[4:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=266)** And we're able to demo how to map certain end points such as the health end point to specific end point of our chosen.
>
> **[4:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=274)** Fantastic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), else. (2), override (1), default. (1)
> **Cross-References:** go back to (4)
> **Tools:** postman (4)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - path (2), - [instructor] (1)
> **CLI Commands:** find (1), make (1)


### 2. Creating and Securing Actuator Endpoints

#### Implementing the Health Indicator interface
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=0)** - [Instructor] In the last video, we went over overriding the actuator base path as well as mapping endpoints to different paths.
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=7)** Let's comment out those configurations to get back to our default configuration where we just have /actuator as our base path.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=15)** To make this make more sense, I'm going to first go to Postman.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=19)** Currently, if I hit healthcheck, this was the last customization we made.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=24)** And we also chained the base path.
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=26)** It's no longer pointing to /actuator, and we can confirm that.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=32)** Just trigger this endpoint.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=35)** As you can see, we can find the actuator path.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=37)** So what we want to do is go back into our properties file and get things back to where they were.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=43)** In my properties file, we're going to comment out these last two configurations, and we're going to restart the application.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=54)** Once the app is back up and running, I'm going to go back to Postman, and I'm going to trigger the /actuator endpoint to see if I have all my endpoints appearing again.
>
> **[1:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=65)** I'm going to hit Send.
>
> **[1:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=67)** As you can see, I have all my endpoints once more, so great job.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=72)** Now, the next thing we want to talk about is we may have an external service that our Spring Boot application depends upon and let's assume is some sort of external database service.
>
> **[1:25](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=85)** Now, if this database service is down, the status of our application should also report as down.
>
> **[1:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=91)** So what we want to do in this situation is create a custom health check components that are not covered by Spring by implementing Spring Boot's actuator Health Indicator interface.
>
> **[1:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=104)** Once we implement that interface, we have to override the health method to do as we please.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=110)** So let's take a look at that.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=111)** We're going to go right back into IntelliJ.
>
> **[1:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=113)** Step one is I'm going to create a new component.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=116)** I'm going to create a package and a class in one.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=119)** So I'm going to call this monitor, something easy, okay?
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=126)** And the name of this component, this class, will be DbHealthIndicator.
>
> **[2:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=134)** Okay?
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=135)** So I'm going to hit Enter, Cancel, and I'll have to add the @Component annotation as well.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=147)** This way, Spring can be aware of it.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=150)** The next thing I need to do is implement the HealthIndicator interface.
>
> **[2:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=160)** It has a method that I need to implement and override which is the health method.
>
> **[2:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=164)** So I'm going to click OK.
>
> **[2:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=167)** I'm going to click Enter here, add some space here, and I'm going to minimize this for now so we can have more real estate.
>
> **[2:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=176)** Awesome.
>
> **[2:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=177)** Now, I've annotated this with @Component so that, like I said earlier, Spring can be aware of it.
>
> **[3:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=184)** It can bring it into the Spring context.
>
> **[3:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=187)** We've created a class called Database Health Indicator, DbHealthIndicator for short.
>
> **[3:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=193)** We're implementing the HealthIndicator interface.
>
> **[3:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=196)** What we need to do now is to go ahead and create something that mimics a call to an external service or DB in this case, okay?
>
> **[3:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=212)** So I'm going to just create just a random method that returns true or false if this external service is down or up.
>
> **[3:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=221)** So it's going to be a private method, it's a helper method, returns a boolean, call it isDBHealthy.
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=231)** In there, I'm just going to create a random object,
>
> **[4:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=240)** and I'm going to just return a random boolean value.
>
> **[4:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=247)** Okay? Cool.
>
> **[4:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=249)** Now, I need to override this and customize this as I need.
>
> **[4:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=254)** So I'm going to say if my external database is healthy, I need to report back a status of up.
>
> **[4:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=269)** That's what I'm attempting to do here, all right?
>
> **[4:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=272)** So I'm just going to return a health status of up with some detail.
>
> **[4:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=281)** And in here, I could just type a string.
>
> **[4:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=284)** I think I have an extra parenthesis in here, okay.
>
> **[4:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=288)** Here I'm just going to type in External, say Db service.
>
> **[4:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=296)** I'm going to give it a Healthy, and I'm going to build that.
>
> **[5:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=304)** Else, I want to do the opposite.
>
> **[5:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=306)** So I'm going to copy that, I'm going to paste it down here and make some changes.
>
> **[5:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=311)** I'm going to change the up to down, and External service Is Not-Healthy, okay?
>
> **[5:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=320)** So this is awesome.
>
> **[5:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=321)** What we need now to do is just run the application.
>
> **[5:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=324)** And if this comes back with a random boolean value and it's a false value, our database will be not healthy and our application also would be down.
>
> **[5:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=337)** So let's go ahead and run the application. I'm going to reboot.
>
> **[5:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=343)** And if everything runs perfectly, I'm going to go back to Postman, and we're going to trigger the endpoint.
>
> **[5:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=350)** I'm going to look for the health endpoint.
>
> **[5:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=353)** I'm going to trigger that.
>
> **[5:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=356)** And as you can see, on the first go, it's showing that the External database is not healthy, status is down, right?
>
> **[6:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=366)** So this is awesome. This is what we were looking for.
>
> **[6:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=369)** Fantastic, this is marvelous. Great job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (4), override (3), class, (1), case, (1)
> **CLI Commands:** make (3), find (1)
> **Tools:** postman (3), intellij (1)
> **Cross-References:** go back to (2), in the last (1)
> **Warnings:** be aware (2)
> **Code Identifiers:** isdbhealthy (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Creating a custom Actuator endpoint
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=0)** - [Instructor] Spring Boot Actuator also empowers us with the ability to create our own custom endpoints.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=5)** We may need to create a custom endpoint for our release notes, which consists of a list of bug fixes, and new features implemented in our application, or maybe we need to monitor our Jira server, or any other external service that our application may depend upon.
>
> **[0:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=22)** To do so, we would need to create a new component and annotate it with the @Endpoint annotation.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=29)** And then we'll pass in an Id, which would be the name of the path that we want our custom endpoint to point to.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=35)** In our application, we're calling it custom.
>
> **[0:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=38)** Also, we'll need to add the @ReadOperation annotation to signify the type of CAD operation that we're performing.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=46)** In this case, we annotated with @ReadOperation, which signifies a get request.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=52)** Finally, we would go to Postman and trigger that endpoint.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=57)** Now, if it was a post request, we would use the @Write annotation.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=62)** And also if it's a delete request, would leverage the @Delete annotation.
>
> **[1:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=67)** Let's go right into IntelliJ and make this happen.
>
> **[1:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=71)** I want to create a new component.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=74)** So here I'm going to just go to create a new class.
>
> **[1:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=77)** So I'm going to say, a package in a class in one.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=81)** So what do I want to call this?
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=82)** I'll say custom.
>
> **[1:25](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=85)** And I'll call this, CustomActuatorEndpoint, just to be very clear.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=95)** Now I need to add a couple of annotations, make this a component.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=102)** And is more important one is, I need to add the @Endpoint annotation, and here I need to passing the ID, which is the path to where this endpoint should point to.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=115)** And in this case, I want it to point to slash actuator, slash custom.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=120)** And then in here, I'm going to leverage the @ReadOperation and my method, returns a Map, whose key and values are both Strings, and we can call it whatever.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=136)** We just call it custom Endpoint.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=142)** I guess, make it easy.
>
> **[2:25](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=145)** And we can also take in a parameter.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=147)** In this case, I'm going to take a String and I'm going to call it id.
>
> **[2:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=152)** In here, I'm going to create a map.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=153)** So I'm going to create a hash map.
>
> **[2:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=155)** I'm going to create a new object.
>
> **[2:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=161)** And we'll just call it map, new HashMap.
>
> **[2:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=167)** So let's just initialize that.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=170)** And now I'm going to put something in my map, which is the id, this past to me.
>
> **[2:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=176)** So here, I'm going to pass id, and then id.
>
> **[3:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=184)** And finally, I'm going to just return this map object.
>
> **[3:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=189)** Awesome.
>
> **[3:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=190)** But to minimize this, I'm going to restart the application.
>
> **[3:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=196)** Once the application is back up and running, we should now have a new endpoint in our list of actuator endpoints, pointing to slash custom.
>
> **[3:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=208)** Let's first, go back to the actuator endpoint.
>
> **[3:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=215)** And now if you scroll down, we have a new endpoint called custom.
>
> **[3:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=218)** So let's trigger that as well.
>
> **[3:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=220)** And if I click send, it's a bad request, and there's a reason why, is because we're omitting the parameter that was passed.
>
> **[3:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=229)** So let's go back to IntelliJ.
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=231)** We were past an argument, so we need to leverage that as well as a query parameter.
>
> **[3:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=238)** So let's go back into Postman and here all I need to do, is type of question mark, id equals and passing any idea I want.
>
> **[4:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=249)** So I'm going to pass in 5, 5, 2.
>
> **[4:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=251)** I'm going to send that request one more time.
>
> **[4:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=253)** And vola, I get my JSON response back, which is the id that I passed into it.
>
> **[4:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=258)** So this is awesome.
>
> **[4:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=259)** Fantastic, great job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (3), case, (3), finally, (2), delete (2)
> **Tools:** postman (2), intellij (2), jira (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), scroll down (1)
> **Env Vars:** cad (1), json (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### How to secure Actuator endpoints with Spring Security
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=0)** - [Instructor] Currently our health endpoint reveals lots of details that we may not want exposed.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=5)** Therefore, it'd be nice to be able to limit access to the full details of our health endpoint to specific users so that only perhaps users with a role of admin should be able to see the full details of our health endpoint.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=15)** And this is what I mean.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=16)** If I go back to Postman, and I trigger the health endpoints, let's say send, you can see the full details, right?
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=26)** So we want to make some changes here.
>
> **[0:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=29)** If you're an admin, you should be able to see this.
>
> **[0:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=31)** If you're not an admin, you should not be able to see this.
>
> **[0:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=34)** This is what we're trying to achieve.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=36)** So I'm going to go back here and talk about the things that we need to make this happen.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=41)** So, first of all, we need to bring in spring security dependency into our application so that we can secure the application in general.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=48)** Next, we need to go into the properties file and make a change.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=52)** Currently, we have our health endpoint which showing the details.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=55)** We have it set to always so wherever you are anybody comes, they see the entire thing.
>
> **[1:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=60)** We want to change that and set it to when authorized.
>
> **[1:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=64)** This way, only users with a rule of admin will be able to see the full details of the health endpoint.
>
> **[1:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=70)** In addition to that, we need to extend Spring's web security configure adapter, and override the configure method to specify in our situation here that we want everybody to be able to access the health endpoint, but only users with a role of admin should be able to access all of the endpoints.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=90)** Finally will trigger the actuator endpoint and see if we have access or not.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=95)** So let's dive right in.
>
> **[1:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=97)** First thing I need to do is bring in into spring security.
>
> **[1:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=100)** So I'm going to go into my pump file and start typing dependency.
>
> **[1:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=104)** (keyboard ticking) The group ID should remain the same.
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=108)** So I'm just going to copy this (keyboard ticks) and add a fact ID should be almost identical.
>
> **[1:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=115)** So I copy spring-boot-starter, and I'll just add security at the end of that, allow it to load.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=122)** Give it a second.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=124)** Next thing we need to do is extend the web security configure adapter.
>
> **[2:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=130)** So right here, at the main package, I'm going to create a new cluster package and one called the package name config called the class name custom web config.
>
> **[2:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=141)** (keyboard clicks) That's spelled out, right?
>
> **[2:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=143)** Nope.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=144)** Let's fix that.
>
> **[2:25](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=145)** So config, hit enter.
>
> **[2:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=149)** I'm going to add annotation; configuration annotation up here for spring, and I'm going to extend the web security configure adapter, okay.
>
> **[2:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=165)** And in here I need to override the configure method that takes in the HTTP basic parameter.
>
> **[2:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=172)** So I'm going to hit command O.
>
> **[2:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=174)** And this gives me quick access to the methods I need to override.
>
> **[2:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=179)** I'm going to select the one with the HTTP security.
>
> **[3:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=184)** And here I need to add some security for our application; as in how we want to give access to different users.
>
> **[3:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=193)** So in this situation, I'm going to leverage the HTTP basic object, and I want to authorize some requests.
>
> **[3:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=203)** And the first one I want to leverage is I want to leverage this convenience method called endpoint requests.
>
> **[3:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=211)** This where I can just pass in the class that I want to enable access to for everybody, which is the health endpoints class.
>
> **[3:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=223)** And I want to permit access for everyone.
>
> **[3:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=227)** So I'll use permit all.
>
> **[3:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=229)** The second endpoint that I want to block is actually all other endpoints.
>
> **[3:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=236)** So if you attempt to go to any other endpoints spelled out right, endpoint requests, I'm going to say to any other endpoints, you must have a role of admin.
>
> **[4:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=253)** Okay, and I will add a semi colon.
>
> **[4:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=256)** And since we're leveraging HTTP basic, I'm just going to leverage that here.
>
> **[4:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=262)** I'm going to complete this method by typing and HTTP basic.
>
> **[4:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=268)** And that should be it.
>
> **[4:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=270)** We're going to restart the application in a second, but we do need to make an additional change.
>
> **[4:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=275)** So let's go back into the property's filling, change something.
>
> **[4:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=279)** Here we currently have our health endpoint showing all his details.
>
> **[4:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=284)** So we need to change that from always to when authorized.
>
> **[4:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=289)** (keyboard clicking) Okay, also, I want to set a default user that as a role of admin.
>
> **[5:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=301)** This way, only that user will be able to access the full details of my health endpoint.
>
> **[5:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=308)** So I'm going to copy this, change this to password and give this user a password of pass and set the role by changing this to roles.
>
> **[5:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=323)** And the role would be the admin role, because this is what we set up in spring security.
>
> **[5:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=328)** So I'm going to reboot now, if all goes well, I should be able to go back to my Postman and attempt to trigger my actuator endpoint.
>
> **[5:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=339)** And I should not be able to access it because I'm not an admin.
>
> **[5:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=344)** So let's take a look at that.
>
> **[5:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=346)** We could actually try to trigger the out endpoint first because now we should not be able to see the full details anymore.
>
> **[5:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=353)** So let's click... Let's just check something real quick.
>
> **[5:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=357)** Make sure there's No Auth here.
>
> **[5:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=359)** Okay, so let's click send.
>
> **[6:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=362)** And as you can see, we do get back some data.
>
> **[6:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=365)** It just shows all the status of up.
>
> **[6:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=367)** It doesn't show us the full details like we had before.
>
> **[6:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=370)** So what I want to do now is try to also access the actuator endpoint.
>
> **[6:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=375)** And since it's now secure, we should not be able to access it.
>
> **[6:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=380)** So let's get and trigger that as you can see 404, actually, there's a mistake here.
>
> **[6:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=386)** That's not what I want.
>
> **[6:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=387)** It should be not authorized.
>
> **[6:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=389)** So I'm just saying, I should say actuator.
>
> **[6:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=392)** And now it shows unauthorized because I am not an admin.
>
> **[6:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=395)** So I need to tell Postman that I'm an admin.
>
> **[6:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=400)** So I'm going to use Basic Auth.
>
> **[6:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=402)** The admin's name was admin.
>
> **[6:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=404)** So just type lowercase admin here, and the password was pass, p a s s or whatever it is that you chose.
>
> **[6:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=411)** And now if I hit send, now it's 200.
>
> **[6:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=415)** Now I see the entire full list of actuator endpoints that I had before.
>
> **[7:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=421)** So awesome.
>
> **[7:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=422)** This is brilliant. Great job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), override (3), pass (3), this. (2), this
( (1)
> **Prerequisites:** configure (5), set up (1)
> **CLI Commands:** make (5)
> **Env Vars:** http (5)
> **Tools:** postman (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1), go to (1)
> **Speakers:** - [instructor] (1)


### 3. Metrics and Prometheus

#### Spring Boot Actuator metrics and Prometheus
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=0)** - [Instructor] As applications become more complex due to the increased adoption of microservices, it's increasingly becoming more important to gather metrics about our apps are behaving over time by setting up alerts for certain activities such as how long it takes a server request, the number of requests being made, the rate at which requests are actually failing.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=19)** Luckily for us, spring boot provides support for metrics instrumentation library called micrometer.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=24)** It is a vendor-neutral application metrics facade that captures and exposes metrics from our app to several monitoring systems and time-series databases such as Prometheus, Datadog, New Relic and so much more.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=41)** Micrometer also gives us the ability to create our own custom metrics by leveraging the different types of metrics that it exposes which are timers, counters and gauges.
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=54)** A timer is used to measure event duration times such as how long it takes for a method to execute.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=61)** A counter that is used to measure events that only increase over time such as the total task completed.
>
> **[1:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=69)** Gauges however are used to measure values that rise and fall such as memory usage.
>
> **[1:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=75)** Once micrometer is added to our app, it sits there collecting and exposing our applications metrics so that we can leverage a metrics based monitoring and alerting tools such as Prometheus to scrape and analyze those metrics.
>
> **[1:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=89)** Now that we have a better understanding of which role micrometer plays in which Prometheus plays in the upcoming videos, we'll install and configure Prometheus so that we can scrape our applications metrics.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=102)** Fantastic.

> [!info]- Semantic Content
>
> **Analogies:** such as (6)
> **Prerequisites:** install (1), configure (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Micrometer Prometheus registry
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=0)** - Micrometer's job is to expose our applications metrics to external monitoring systems.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=5)** While Prometheus job, is to scrape and store the metrics exposed by micrometer.
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=11)** However, we need a way to get the metrics exposed from our application into Prometheus.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=17)** Luckily for us, Micrometer consists of a set of modules containing implementation for several monitoring systems.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=24)** All we need to do is add the micrometer registered dependency into our pumped XML file, by doing so we'll gain an additional endpoint for Prometheus @twitter/Prometheus.
>
> **[0:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=38)** Let's dive right back into intelligence and make this happen.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=41)** First thing I need to do is bring it into the dependency for Micrometer Prometheus Registry.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=46)** So I'm going to type dependency.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=48)** The group ID here would be io.micrometer.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=53)** The artifact ID is micrometer-registry-Prometheus.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=62)** Okay, give it a second to load.
>
> **[1:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=64)** Once the pump files loaded successfully, we're going to reboot the application.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=68)** So let's do that right now.
>
> **[1:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=71)** Once the app is back up and running, we'll go back to postman and trigger the @twitterendpoint, to see if we have a new endpoint for Prometheus.
>
> **[1:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=80)** But before I trigger this end point, what I want to do is just check the list of @twitterendpoints that I have to see if I have one for Prometheus.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=90)** And as you can see, I currently don't have any endpoints for Prometheus at this time.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=96)** But once I hit send, which we're about to do right now, let's go ahead and hit send.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=103)** We should now have a new end point for Prometheus.
>
> **[1:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=105)** So let's scroll back down and locate that end point for Prometheus.
>
> **[1:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=112)** Awesome. Look at it right here.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=114)** I'm going to click this link and go ahead and trigger this endpoint, and oh my, take a look at this.
>
> **[2:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=121)** I have access to all my applications data.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=124)** Now I have access to my metrics.
>
> **[2:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=126)** It's been exposed and I have a new end point for Prometheus.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=131)** So fantastic, great job getting this far.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (1)
> **CLI Commands:** make (1)
> **Env Vars:** xml (1)
> **Cross-References:** go back to (1)
> **Tools:** postman (1)
> **Speakers:** - micrometer (1)

#### Prometheus configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=1)** - Prometheus is a monitoring system for gathering metrics at intervals, evaluating rules, as well as triggering alerts.
>
> **[0:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=7)** It leverages a pool-based approach when fetching our applications metrics.
>
> **[0:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=11)** Therefore, it needs to know where and how often to script the metrics that's exposed by our application.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=17)** This means we'll need to create a configuration file to scrape our data from the actuator/prometheus endpoint.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=24)** Let's dive right into IntelliJ and make this happen.
>
> **[0:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=27)** Under my resources folder, I'm going to right click.
>
> **[0:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=31)** I want to create a new YAML file, so I'm going to select File.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=35)** I'm going to call this prometheus.yml, the YAML extension.
>
> **[0:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=42)** I'm going to hit enter.
>
> **[0:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=45)** And what I'm actually going to do now is paste the configuration and then we can go over it one at a time.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=52)** So let me minimize this as well so we can see everything.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=55)** Awesome.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=57)** So what do we have going on here?
>
> **[0:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=58)** For starters, we are configuring Prometheus's scrape and pool our metrics every five seconds.
>
> **[1:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=65)** We also have the option of declaring a rules file so that we can receive alerts based on certain conditions.
>
> **[1:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=72)** Then we can leverage the alert manager component to send those notifications either via email or use services such as Slack.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=82)** Next thing we're doing here is we're defining two targets that we want to monitor.
>
> **[1:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=87)** One is our Prometheus server and the second is our spring boot application.
>
> **[1:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=91)** We're going to be leveraging Docker, so we've already passed in the host and the port information.
>
> **[1:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=97)** And since we have spring security in our application, we've passed in the admin user information, which has a role of admin, a user name of admin, and a password of pass.
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=108)** So that's it for now.
>
> **[1:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=110)** Great job.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=111)** And in the next video, we'll go ahead and start Prometheus with Docker.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), make (1)
> **Code Keywords:** let (2), pass (1)
> **Env Vars:** yaml (2)
> **Tools:** intellij (1), slack (1)
> **File Paths:** prometheus.yml (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Installing and running a Prometheus Docker image
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=0)** - [Instructor] Now that our Prometheus that YAML file has been configured, let's go ahead and use Docker to install Prometheus.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=6)** So I'm going to type docker pull prom/prometheus, and I'll click enter.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=16)** And if all goes well, we should have a new Docker image for Prometheus, and we're going ahead and least all the images that we have just to see if we have such an image.
>
> **[0:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=28)** So I'm going to say "Docker images," as you can see I have a Prometheus image here, so this is great.
>
> **[0:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=38)** Next thing we need to do is run this in the background.
>
> **[0:41](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=41)** So I'm going to go ahead and type that command its a pretty long command so just bear with me.
>
> **[0:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=46)** It'll be docker run -d --name=,
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=54)** and then the name of our Prometheus server is prometheus -p,and I'm at port 9090 (keyboard clicking)
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=68)** - v, and here I need to get the path to my YAML configuration file.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=74)** So I'm going to go back to IntelliJ, and I have my YAML file here I'm going to right click on that, and scroll down to copy path and I'm going to select that, and I actually want the absolute path for this demo.
>
> **[1:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=88)** So I'm going to click absolute path and copy that.
>
> **[1:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=91)** I'm going to go back to my terminal, and after this -v I'm going to put a space and I'm going to paste the path.
>
> **[1:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=100)** So that's looking good so far, I'm going to put a semi-colon here, /etc/prometheus (keyboard clicking) /prometheus.yml prom/prometheus.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=119)** One more thing I need to pass in a config file information.
>
> **[2:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=122)** So I pass in, --config (keyboard clicking) .file=/etc/prometheus/prometheus.yml.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=142)** Now if everything goes well, we should have a new container, so let's go ahead and hit enter.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=147)** (keyboard clicking) And that looks good to me.
>
> **[2:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=150)** Next thing we're going to do is least all the containers that we have.
>
> **[2:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=153)** So I'll say, "docker container ls."
>
> **[2:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=159)** And awesome.
>
> **[2:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=160)** We have a Docker container for Prometheus now, this is awesome.
>
> **[2:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=163)** This is great.
>
> **[2:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=164)** Great job.
>
> **[2:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=165)** Now we have a Prometheus server running in the background.
>
> **[2:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=168)** This is fantastic.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (7), ls (1)
> **Code Keywords:** let (2), pass (2)
> **Non-Speech:** (keyboard clicking) (4)
> **Env Vars:** yaml (3)
> **File Paths:** prometheus.yml (1), etc/prometheus/prometheus.yml (1)
> **Cross-References:** go back to (2)
> **Tools:** intellij (1), terminal (1)
> **UI Navigation:** click on (1), scroll down (1)

#### Take the Prometheus UI for a spin
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=0)** - [Instructor] Now that we have installed Prometheus and are running it in the background successfully and we also have access to a dashboard, let's take the Prometheus dashboard for spin.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=10)** To get started, I want to check the status of my servers.
>
> **[0:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=14)** So the first thing I'm going to do is go back to the menu and I'm going to select the dropdown, and I'm going to scroll down to targets.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=24)** And as you can see, I have both my Prometheus server up and running, and my end point for my Springwood application as well.
>
> **[0:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=33)** So, I'm fetching my metrics successfully, so this is great.
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=37)** Now, let's go back to the Prometheus homepage.
>
> **[0:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=39)** So I'm going to click parameters here, click the Prometheus name, and I'm back to the dashboard.
>
> **[0:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=45)** The first thing I'm going to do is I want to just do a quick search.
>
> **[0:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=49)** So here, you can type in queries.
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=51)** Prometheus has a query language called PromQL, but we also have access to a bunch of metrics by default.
>
> **[0:58](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=58)** And how we can access that is to go to the globe up here.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=62)** I'm going to click this globe.
>
> **[1:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=64)** And as you can see, I've lots of metrics already available to me.
>
> **[1:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=69)** So let's look for maybe the amounts of several requests of guidance so far.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=74)** So we'll use the account cause account increases over time.
>
> **[1:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=77)** So let's click that, and let's just click execute.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=81)** Okay, this doesn't tell me much.
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=84)** As you can see, this is the metric here, but let's graph it.
>
> **[1:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=87)** Let's take a look at is visually.
>
> **[1:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=90)** So I'm just going to click the graph tab up here, and wow, look at that.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=94)** Very visual. It just keeps going up.
>
> **[1:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=97)** It's a lot of requests.
>
> **[1:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=99)** Also, if you're used to the Classic UI, you'll have the option of leveraging that.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=103)** So here, let's take a look at what that looks like.
>
> **[1:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=105)** I'm going to click the Classic UI.
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=108)** I actually liked the Classic UI a lot because I'm used to just go into the drop-down here right under here and clicking down and I scroll down.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=116)** So for example, let's say we want to check the CPU usage of app, so we select that.
>
> **[2:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=123)** We click execute, and wow, look at what we got here.
>
> **[2:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=128)** So let's graph that as well by clicking the graph.
>
> **[2:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=131)** Oh, crazy. It looks like I got a spike up here.
>
> **[2:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=134)** Wow. Okay.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=135)** This is good data.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=136)** And as you can see, it's over a period of time as in time series.
>
> **[2:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=140)** Great job getting this far.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=142)** We've been able to take the dashboard for spin, make sure everything is up and running.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=147)** In the next incoming videos, we'll go a little bit deeper and start creating some custom metrics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), default. (1)
> **UI Navigation:** scroll down (2), select the (1), dropdown (1), go to (1)
> **Cross-References:** go back to (2), in the next (1)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Adding custom metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=0)** - [Tutor] Prometheus supports for core types of metrics.
>
> **[0:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=3)** If you are not satisfied with the basic metrics provided my micrometer, you can add your own with Prometheus metric types.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=10)** The first one I want to talk about are counters.
>
> **[0:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=12)** A counter is accumulative metric used to measure events that only increase such as the number of visits to your website.
>
> **[0:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=20)** If you want to know how many times something occurs, you use a counter.
>
> **[0:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=24)** Gauges are used to measure values, the rise and fall such as memory usage or the temperature.
>
> **[0:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=31)** It helps answer questions such as, what is the current value of something right now?
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=36)** An histogram samples observations such as request duration or response sizes in configurable buckets.
>
> **[0:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=44)** It's used to know how big something is or how long it takes.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=48)** Similar to an histogram, we have a summary.
>
> **[0:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=52)** A summary tracks value distribution in percentiles.
>
> **[0:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=56)** Maybe we want to know the latest percentile across a number of requests.
>
> **[1:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=60)** We are going to create a hit counter by creating a custom metric that keeps count of page hits to one of our end points.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=68)** Let's dive right back into (indistinct) and make this happen.
>
> **[1:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=71)** In my controller, I'm going to scroll back up here.
>
> **[1:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=76)** What we need to do is set up a counter and add it to the default meta registry.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=81)** This hit counter will be incremented each time our get all student endpoint is triggered.
>
> **[1:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=87)** So first thing I'm going to do is bring in a counter, so I'm going to say counter, I want to import the one that says core instrument, the first one, so I'm going to click Enter.
>
> **[1:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=96)** I'm going to give it a name, I'll call this guy hitCounter, and I'm going to create a constructor to wire this in, so I'll say public StudentController and it takes in one parameter, which would be the MeterRegistry.
>
> **[1:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=114)** I'll call it MeterRegistry.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=116)** And in here I need to build my hit counter, so I would say counter.builder, I need to give it a name, so a name I can easily identify with would be hit_counter.
>
> **[2:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=133)** Next thing I need to do is give it a description.
>
> **[2:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=136)** We'll call this number of hits and we need to register it.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=142)** So I'm going to pass in to meterRegistry, awesome.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=147)** Now we need to leverage this, so we're going to come right into our get all students end point, and we're going to invoke the method increment on our hit counter.
>
> **[2:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=158)** So I'll say, hitCounter.increment, fantastic.
>
> **[2:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=164)** Now I'm going to reboot the application and if everything goes well, we should be able to go back to postman and do a search for this new custom metric that we just created.
>
> **[2:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=176)** So I'm going to go right back into postman.
>
> **[2:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=179)** Let's quickly do a search to see if we can find a custom metric.
>
> **[3:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=182)** So I'll do Command + F and I'll start typing hit_counter, I have no results.
>
> **[3:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=190)** Okay, that's fine.
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=191)** So we need to trigger the students end point so that we can actually have some hits.
>
> **[3:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=197)** So I'm going to open a new tab, I'm going to go to [HTTP://localhosts:8080/api/v1/student](https://HTTP://localhosts:8080/api/v1/student).
>
> **[3:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=214)** Okay, so let's hit send, and we got back an empty array.
>
> **[3:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=220)** Okay, a status of 200, so let's trigger it two more times and one more.
>
> **[3:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=227)** All right, so that's three hits to our student end point.
>
> **[3:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=231)** So let's take a look at our custom metric and see if we can find it in Prometheus.
>
> **[3:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=236)** So I'm going to go back to my Prometheus server and I'm going to hit send.
>
> **[4:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=242)** And this time around, (indistinct) when finished typing hit counter, you already see I have one of three, so let's type it out, hit counter.
>
> **[4:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=249)** And as you can see, we give it a label of number of hits and you can see we had three hits.
>
> **[4:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=255)** So this is fantastic, we made it happen, great job.
>
> **[4:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=258)** In the next video, we'll take a look at graphing this metric.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (1), pass (1), this, (1)
> **Code Identifiers:** hitcounter (2), hit_counter (2), meterregistry (1)
> **Analogies:** such as (4), similar to (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** postman (2)
> **URLs:** [http://localhosts:8080/api/v1/student](http://localhosts:8080/api/v1/student) (1)
> **Ports:** :8080 (1)

#### Viewing custom metrics from the Prometheus UI
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=0)** - Now that we have a custom metric that we're keeping track off, called the heat counter.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=5)** Let's view our custom metric with the permit you as you are.
>
> **[0:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=8)** So to do that, I'm going to get rid of the last expression we had, which was just showing us a CPU usage.
>
> **[0:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=14)** I'm going to highlight and delete that.
>
> **[0:16](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=16)** And I want to type into new expression, which is heat counter, and I'm going to leverage the auto search and I'm going to click enter.
>
> **[0:28](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=28)** Now, I'm going to execute this query by clicking execute.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=32)** And as you can see, I only have three hits showing up here.
>
> **[0:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=38)** All right, now what we want to do is we're going to reboot the application.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=43)** And so let's go back to Intelligent I'm going to restart the application.
>
> **[0:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=50)** Once the application is back up and running, we're going to go back to Postmate and trigger the end points of federal students again, just to see if it gives us a new counter to see if our counter resets back to zero. And this time around, go back to the student and point, and I'm going to trigger this maybe say five times one, two, three, four, five.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=74)** All right, now I'm going to go back to the premise here's UI, and I want to hit execute one more time.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=81)** And as you can see, there's a break here.
>
> **[1:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=83)** We started at zero, got to three, and there we rebooted the application and we reset the counter back to zero. And then we triggered it once here, then you went all the way to five.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=95)** All right, so this can happen.
>
> **[1:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=98)** The counter starts at zero and increases over the lifetime or the service, but occasionally if a service process restart, the counter may reset back to zero, which is what we're looking at here.
>
> **[1:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=111)** Now we can get around this by leveraging Prometheus's query language known as prom QL. It has a rate function, which accounts for counter resets by assuming that any decrease in the counter is a reset.
>
> **[2:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=128)** The rate function calculates the per second average rate of our value is increasing over a period of time.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=135)** So it's great for spotting trends, spikes and for sending alerts, if something happens.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=142)** So let's modify our counter with a rate function.
>
> **[2:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=146)** So I'm going to go right back into the search box here, and I'm going to go right in front of hit counter and started type rate and a left bracket and a right bracket.
>
> **[2:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=158)** So I want to wrap the heat counter metric inside the right function as an argument. And then within the brackets, I'm going to have a left-hand good bracket and a right angle bracket.
>
> **[2:50](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=170)** And in here we can specify a time to specify how far back we want to fetch a metric of values. So in here going to go back five minutes by typing 5:00 AM, and I'm going to trigger this by hitting execute, and you should see this data change now, and it should give us a more like a range over a period of time. So let's go ahead and click execute and voila, look at that. Awesome.
>
> **[3:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=197)** So as you can see, it's giving us more like a range, not a hardcore metric, like one or two, not an integer.
>
> **[3:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=203)** We've done a great job, creating a custom metric view and a custom metric in the dashboard and even modifying the custom metric with Prometheus's query language known as prompt QL.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (4), delete (1)
> **Cross-References:** go back to (4)
> **Definitions:** known as (2), is a  (1)
> **Ports:** :00 (1)
> **Env Vars:** cpu (1)
> **Speakers:** - now (1)


### 4. Grafana Dashboards

#### Installing and running a Grafana Docker image
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=0)** - [Instructor] Grafana is an open-source platform used to monitor, analyze and visualize data.
>
> **[0:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=6)** You can bring data into Grafana from the plethora of data sources, such as Prometheus, InfluxDB, Graphite, AWS CloudWatch and many more.
>
> **[0:17](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=17)** Let's head back to the CLI and use Docker to install and run Grafana.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=23)** And as you can see here, I already have Prometheus up and running, now we want to go ahead and install and run Grafana as well.
>
> **[0:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=31)** So I'm going to type docker, run -d --name we're going to name it grafana -p, give it a port 3000, which is the default port 3000:3000.
>
> **[0:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=49)** And we're going to type grafana/grafana, okay?
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=55)** So this command will start Grafana inside a Docker container and make it available to us on port 3000.
>
> **[1:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=61)** I'm going to hit Enter, and if all goes well, we'll least start containers to see if we have a new container, once this is up and running.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=73)** So let's take a look at that.
>
> **[1:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=75)** So I'm going to list my containers with a Docker command, docker container ls.
>
> **[1:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=82)** Oh, I misspelled that so let's type that again, it'll be docker, D-O-C-K-E-R container ls, let's hit Enter.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=95)** And as you can see, we have a new container, we have a Grafana image here, so this is awesome on port 3000.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=103)** And we can verify this by going to our browser and we open up a new tab and we'll trigger HTTP:localhost:3000,
>
> **[1:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=117)** 'cause that's the default port that we set for Grafana.
>
> **[2:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=121)** So we're going to go ahead and hit Enter, and this is awesome.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=124)** We're welcome to the new Grafana dashboard with a new interface showing us to log in so that we can access our dashboard and the default username and password for this would be admin, so we'll go ahead and leverage that instead of creating an account, I'm just going to type admin and admin for the password as well.
>
> **[2:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=144)** I'm going to click login, and it's suggesting that I come up with a new password as well.
>
> **[2:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=151)** I'm going to skip this step, so I'm going to just click skip, awesome I'm in.
>
> **[2:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=156)** As you can see now I have a backend to create dashboards and we'll explore more of this in the upcoming video.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), ls (2), aws (1), make (1)
> **Ports:** port 3000 (4), :3000 (2)
> **Code Keywords:** let (4), interface (1)
> **Env Vars:** aws (1), cli (1), http (1)
> **Prerequisites:** install (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)

#### Import metrics data from Prometheus to Grafana
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=0)** - [Instructor] Now that we've installed Grafana, we need to configure a data source for it.
>
> **[0:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=5)** And the data source for our application in this case will be Prometheus.
>
> **[0:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=10)** We need to get our Prometheus metrics into Grafana so that we can build beautiful dashboards.
>
> **[0:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=15)** So what I'm going to do is go to the left panel right here at this left menu.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=19)** I'm going to go on the gear icon, right up on the gear icon is configuration and right under configuration is data sources.
>
> **[0:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=27)** I'm going to select Data sources.
>
> **[0:30](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=30)** And I have an option of adding a data source.
>
> **[0:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=33)** I'm going to click here where it says, add data source.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=36)** And as you can see, Prometheus is on the list.
>
> **[0:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=39)** It's actually the first one on the list but you do have options.
>
> **[0:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=43)** In my case, we're just going to select Prometheus, so we click select.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=48)** And here I'm going to include my IP address, as well as the port.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=55)** So I need to locate my IP address real quick.
>
> **[0:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=57)** So I'm going to go back to the terminal and the command to get my IP address on a Mac should be ipconfig.
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=68)** Trying to get my IP address.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=73)** And here it is.
>
> **[1:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=74)** So I'm going to select that real quick, go back to my Grafana dashboard and I'm going to type http:// and I'm going to paste that IP address, and I'm going to put a colon and include the port where my Prometheus server is running.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=94)** Awesome.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=94)** So I'm going to scroll down and here it gives me the option to save and test it.
>
> **[1:39](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=99)** So that's what I want to do. I'm going to click save and test.
>
> **[1:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=103)** And, awesome.
>
> **[1:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=104)** I have a green check mark here, indicating that my data source is working.
>
> **[1:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=108)** So this is fantastic.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Code Keywords:** case, (1)
> **Tools:** terminal (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Creating dashboards with Grafana
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=0)** - [Instructor] Now that we've configured Prometheus as our data source, all that is left for us to do now is build a beautiful dashboard with Grafana.
>
> **[0:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=9)** To do so, I'm going to come over to the left panel, hover over the plus icon, come down to create dashboard and select dashboard.
>
> **[0:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=19)** Now I'm going to build my dashboard by first adding an empty panel.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=23)** So I'm going to add an empty panel.
>
> **[0:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=26)** In here, I have the option of leveraging the metrics browser to gather my metrics, or I could enter a PromQL query directly in here.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=35)** So let's do so.
>
> **[0:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=36)** So I'm going to click in here and type system_cpu.
>
> **[0:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=42)** I want the CPU usage, so system_cpu_usage, select that.
>
> **[0:48](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=48)** And to run this query, I'll just hold down Shift + Enter.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=53)** And wow, look at that.
>
> **[0:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=55)** My system CPU usage is being graphed, and as you can see, I had a spike up here.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=62)** Now I can make this graph even more appealing if I want to.
>
> **[1:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=67)** To do that, I have to come to the right end panel, scroll down.
>
> **[1:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=71)** And for example, let's say, I want to make this a bar instead of a lines.
>
> **[1:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=79)** I'm going to select bars.
>
> **[1:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=81)** If I wanted to change back to lines, just click lines, because I actually do prefer the lines.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=86)** So I'm going to go over here, I want to change the width of the lines.
>
> **[1:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=89)** I'm going to just track this.
>
> **[1:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=91)** As you can see, it's getting thicker.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=94)** Let's keep it right there.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=95)** I could also add a fill opacity, and as you can see, there's so many options.
>
> **[1:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=102)** But we're not going to go through all of that right here.
>
> **[1:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=104)** What we'll do next is just going to save this, so let's go ahead and click save up here.
>
> **[1:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=109)** And we'll give this dashboard a name, let's leave it as New dashboard.
>
> **[1:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=113)** We'll click save.
>
> **[1:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=116)** And as you can see, I have a new dashboard with one panel, which shows my system CPU metric thus far.
>
> **[2:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=124)** If I wanted to add an additional metric to this, say for example, I wanted to add my hit counter metric.
>
> **[2:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=129)** I could just come up here and add an additional panel, click add an empty panel.
>
> **[2:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=135)** And this time around, I'm going to start typing, hit_counter.
>
> **[2:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=140)** As you can see, I have my hit counter total, let's select that.
>
> **[2:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=143)** And to run the query is Shift + Enter.
>
> **[2:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=146)** And as you can see, I have my hit counter metric here.
>
> **[2:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=149)** I can go ahead and add this to my existing dashboard by clicking apply.
>
> **[2:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=154)** So let's do that.
>
> **[2:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=156)** As you can see, I have two panels in my dashboard and I can keep on building my dashboard panel by panel.
>
> **[2:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=162)** But that is time consuming and it can be very tedious.
>
> **[2:45](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=165)** So there's another way.
>
> **[2:47](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=167)** The other way is to leverage existing dashboard templates that are provided to us by Grafana.
>
> **[2:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=173)** So let's take a look at that.
>
> **[2:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=175)** I'm going to open a new tab, and I'm going to access the Grafana dashboard templates by going to Grafana's website.
>
> **[3:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=183)** And as you can see, Grafana has a dashboard repository that allows you to search for templates by category, via data source.
>
> **[3:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=193)** So for example, if I'm looking for Prometheus template, I'm going to select this.
>
> **[3:19](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=199)** And you can see, I have some options here.
>
> **[3:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=201)** Let's try Spring Boot, so I'm going to type Spring Boot.
>
> **[3:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=206)** And look, I have Spring Boot Statistics, I have other ones here.
>
> **[3:31](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=211)** Let's select the Spring Boot Statistics one.
>
> **[3:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=215)** As you can see, it has an ID up here.
>
> **[3:38](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=218)** There's a specific template that I'm looking for, the ID is 12900.
>
> **[3:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=224)** And that's the one I'm going to leverage instead of this one.
>
> **[3:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=226)** So let's go back to Grafana.
>
> **[3:49](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=229)** This time around, I want to get rid of this old dashboard that I created, so I'm going to come to this gear, click that, scroll down and delete.
>
> **[4:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=242)** All right.
>
> **[4:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=242)** So now this new dashboard that I want to create is going to be created leveraging an existing template.
>
> **[4:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=248)** So I'm going to come back down here as though I want to create a new dashboard.
>
> **[4:12](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=252)** But instead of creating a dashboard, I'm going to import.
>
> **[4:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=255)** So I'm going to select import, and here I'm going to pass in the ID.
>
> **[4:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=261)** If you look back at the browser, the ID for the one that we saw was 6756.
>
> **[4:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=267)** But the one that I want is actually 12900.
>
> **[4:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=272)** So I'm going to load this template by clicking load.
>
> **[4:36](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=276)** And as you can see, the name of the template is Spring Boot APM Dashboard.
>
> **[4:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=280)** I'm going to scroll down and click import.
>
> **[4:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=284)** It's asking for a data source.
>
> **[4:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=286)** So the data source for us is Prometheus, so I'm going to click the dropdown and select Prometheus.
>
> **[4:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=292)** Now I'm going to click import.
>
> **[4:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=295)** And look at that.
>
> **[4:56](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=296)** It's telling me my system has been up for an hour and change.
>
> **[5:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=300)** My heap usage, my non-heap usage.
>
> **[5:04](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=304)** Wow, this is a lot of metric already customized for me.
>
> **[5:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=308)** Great job getting this far.
>
> **[5:09](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=309)** This is fantastic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), import. (3), this. (2), this, (2), for, (1)
> **UI Navigation:** scroll down (3), select the (1), dropdown (1)
> **Exercise Files:** template (5)
> **Env Vars:** cpu (3), apm (1)
> **Code Identifiers:** system_cpu (1), system_cpu_usage (1), hit_counter (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=0)** - [Instructor] Wow, we did it all under an hour.
>
> **[0:03](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=3)** We became familiar with the importance of monitoring our production ready Springwood applications by leveraging Springwood actuator Prometheus and Grafana to set up a monitoring system.
>
> **[0:14](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=14)** While doing so, we covered many topics such as actuator endpoints, what they are, how to customize them and even how to secure them.
>
> **[0:23](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=23)** We were later introduced to gathering metrics with Micrometer and Prometheus and ended up putting together a beautiful dashboard with Grafana.
>
> **[0:32](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=32)** Regardless, there is still much more to learn.
>
> **[0:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=35)** So what's next?
>
> **[0:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=37)** I highly recommend a couple of courses on the LinkedIn Lennon library that can help you get familiar with Prometheus and Grafanna.
>
> **[0:44](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=44)** The courses are introduction to Prometheus by Chris Bailey and Grafana basics by Laura Stone.
>
> **[0:53](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=53)** You can also search in the search bar to find courses on Prometheus and Grafana to learn more.
>
> **[0:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=59)** However, if you have any questions, please do not hesitate to leverage the Q&A section under each video to ask questions.
>
> **[1:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=67)** I am so grateful and appreciative of each and everyone that took time to watch this course.
>
> **[1:13](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=73)** You can catch me on LinkedIn under my LinkedIn page, which is my first and last name, Mikaila AKeredolu or visit me @[tech552.com](https://tech552.com).
>
> **[1:24](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=84)** I'd love to hear from you.
>
> **[1:26](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=86)** Thanks for taking time to watch the course, and have a wonderful day.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **URLs:** [tech552.com](https://tech552.com) (1)
> **Cross-References:** we covered (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance Your Spring Development Skills]]
← [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] | **4 of 6** | [[Advanced Spring- Application Events]] →

## Appears In

- [[Advance Your Spring Development Skills]]

## Related Courses

_Courses sharing skills:_

- [[Learning Spring 6 With Spring Boot]] — Spring Framework, Spring Boot
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Spring Boot
- [[Advanced Spring- Application Events]] — Spring Framework
- [[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing]] — Spring Boot
- [[Performance Tuning in Spring Apps]] — Spring Framework
