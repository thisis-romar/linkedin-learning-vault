---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
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
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG75ufonreaEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643410169109?e=2147483647&amp;v=beta&amp;t=StKwKToKmzc-3CfC_zc4cpqU2Nv_b2ydQaBfaeLve9c"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)'
prev_courses:
  - '[Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing](Spring%20Boot%20Observability-%20Deep%20Dive%20into%20Logging%2C%20Metrics%2C%20and%20Tracing.md)'
next_courses:
  - '[Advanced Spring- Application Events](Advanced%20Spring-%20Application%20Events.md)'
path_nav: '[{"path":"Advance Your Spring Development Skills","position":4,"total":6,"prev":"Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing","next":"Advanced Spring- Application Events"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/database-management
  - topic/software-development
  - topic/web-development
  - skill/spring-framework
  - skill/spring-boot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Advanced%20Spring-%20Spring%20Boot%20Actuator.md)

![Advanced Spring: Spring Boot Actuator](https://media.licdn.com/dms/image/v2/C4E0DAQG75ufonreaEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643410169109?e=2147483647&amp;v=beta&amp;t=StKwKToKmzc-3CfC_zc4cpqU2Nv_b2ydQaBfaeLve9c)

# Advanced Spring: Spring Boot Actuator

> Are you a Java developer with a need to monitor the performance of your applications? In this advanced course, award-winning technical instructor Mikaila Akeredolu gives you an overview of the dashboard that you build in this course using Spring Boot Actuator, Prometheus, and Grafana. Then he dives into specifics. Mikaila introduces you to monitoring and managing Spring Boot applications with Spri

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator) | 1h 13m | Advanced | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Need to monitor the performance of your applications?](#need-to-monitor-the-performance-of-your-applications)
  - [What you should know](#what-you-should-know)
- [**1. Intro to Spring Boot Actuator**](#1-intro-to-spring-boot-actuator) (6 videos)
  - [Introduction to Spring Boot Actuator](#introduction-to-spring-boot-actuator)
  - [Actuator endpoints and documentation](#actuator-endpoints-and-documentation)
  - [Exposing and enabling endpoints](#exposing-and-enabling-endpoints)
  - [Show details and create health endpoint groups](#show-details-and-create-health-endpoint-groups)
  - [Show application information with the info endpoint](#show-application-information-with-the-info-endpoint)
  - [Overriding the Actuator base path](#overriding-the-actuator-base-path)
- [**2. Creating and Securing Actuator Endpoints**](#2-creating-and-securing-actuator-endpoints) (3 videos)
  - [Implementing the Health Indicator interface](#implementing-the-health-indicator-interface)
  - [Creating a custom Actuator endpoint](#creating-a-custom-actuator-endpoint)
  - [How to secure Actuator endpoints with Spring Security](#how-to-secure-actuator-endpoints-with-spring-security)
- [**3. Metrics and Prometheus**](#3-metrics-and-prometheus) (7 videos)
  - [Spring Boot Actuator metrics and Prometheus](#spring-boot-actuator-metrics-and-prometheus)
  - [Micrometer Prometheus registry](#micrometer-prometheus-registry)
  - [Prometheus configuration](#prometheus-configuration)
  - [Installing and running a Prometheus Docker image](#installing-and-running-a-prometheus-docker-image)
  - [Take the Prometheus UI for a spin](#take-the-prometheus-ui-for-a-spin)
  - [Adding custom metrics](#adding-custom-metrics)
  - [Viewing custom metrics from the Prometheus UI](#viewing-custom-metrics-from-the-prometheus-ui)
- [**4. Grafana Dashboards**](#4-grafana-dashboards) (3 videos)
  - [Installing and running a Grafana Docker image](#installing-and-running-a-grafana-docker-image)
  - [Import metrics data from Prometheus to Grafana](#import-metrics-data-from-prometheus-to-grafana)
  - [Creating dashboards with Grafana](#creating-dashboards-with-grafana)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Need to monitor the performance of your applications?](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/need-to-monitor-the-performance-of-your-applications?u=76281980&t=0)** - [Mikaila] As the adoption of [Microservices](../../Skills/Software%20Development/Microservices.md) grows, monitoring the health of production-ready applications and gathering relevant metrics about our apps is becoming more important. If we don't monitor our apps, we'll lack insight and have no clue of what is happening when certain issues arise. [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) Actuator is a sub-module that helps with monitoring and managing production-ready Spring Boot applications. It integrates easily with external monitoring systems such as Prometheus, a monitoring and alerting tool that recalls metrics in a time series database. My name is Mikaila Akeredolu. I've been a software developer and technical instructor for about a decade. In this course, you'll learn how to monitor your Spring Boot applications with Spring Boot Actuator, gather metrics with Prometheus and build beautiful [Dashboards](../../Skills/Data%20Science/Dashboards.md) with Grafana. If you're ready to learn how to get a monitoring system up and running in less than an hour, join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (4), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [mikaila] (1)

#### [What you should know](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/what-you-should-know?u=76281980&t=0)** - [Narrator] This course is designed for [Java](../../Skills/Software%20Development/Java.md) developers with an intermediate to advanced knowledge of Java. You're expected to be familiar with [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) and [Spring Security](../../Skills/Web%20Development/Spring%20Security.md), have a basic understanding of Docker images and containers. It also helps if you're familiar with basic [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) commands, knowledge of HTTP, [Databases](../../Skills/Software%20Development/Databases.md), RESTful APIs, and knowing how to make API calls with tools such as Postman.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (2), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Spring Security](../../Skills/Web%20Development/Spring%20Security.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** cli (1), http (1), api (1)
> **CLI Commands:** docker (1), make (1)
> **Tools:** postman (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


### 1. Intro to Spring Boot Actuator

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Spring Boot Actuator](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=0)** - [Instructor] [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) Actuator is a module that helps us in monitoring and managing our Spring Boot application when we push them to production. It adds many production grade services to applications with little effort on our part, and allows us to monitor our applications in two different ways, either by leveraging HTTP endpoints or via leveraging JMX. JMX stands for [Java](../../Skills/Software%20Development/Java.md) Management Extension. Throughout this course, we'll be leveraging the HTTP endpoints. Spring Boot Actuator, also, integrates easily with external monitoring systems, such as Prometheus, Datadog, New Relic, and so much more. It does so by leveraging Micrometer, which is a vendor neutral application metric facade, that makes it easier to plug into these monitoring systems. We'll be integrating our application with Prometheus and building a beautiful dashboard with Grafana later on in this course. I've also provided a repo for an existing application that we'll monitor throughout this course. It's a basic cloud application. Let's take a look at it by going over to IntelliJ. As you can see, right here I'm in my service layer, and I just have some business logic here. And if I go into my controller, you see endpoints that talk to the disservice layer. And you see endpoints for posting, getting, putting, deleting. If I also take a look at my application to properties file, I have an in-memory database. I'm using H2. And when I ran the application, it's just running on port 8080. And as you can see, I have H2 for my path for my database. What's missing, however,
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=94)** is that I don't have a way to monitor this right now. So, in order for me to monitor this with spring boot actuator, I'm going to go over into my palm.xml file and bring in additional dependency, which would be for spring boot actuator. So, let's do that right away. So I'm coming here, and I'm going to type in dependency. Let IntelliJ complete that for me. I'm going to grab the group ID from here and paste it down here, because it's going to be the same. I'm also going to need all of this part, spring boot starter. However, the dependency that I need to bring in is actuator. So, I'm going to type that in, actuator. Make sure you spell that correctly, and allow it to load. Once it loads, we're going to restart the application. So, I'm going to do that right now. And once the application is up and running, I should have a new path, a base path for actuator. And if that's the case, we're going to trigger that endpoint and see what we get, okay? So, I'm going to scroll over. And as you can see, we have a new base path to monitor our application. So, let's go over to Postman, and let's trigger this endpoint by typing in [http://localhost:8080/actuator](http://localhost:8080/actuator), okay?
>
> **[2:52](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator?u=76281980&t=172)** And let's hit send. And awesome. We did get back a [JSON](../../Skills/Web%20Development/JSON.md) response with the actuator base path. And it shows you we have a couple of endpoints here, one for health. We'll take a look at these later in the course. So, a great job for getting this far. This is awesome.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (6), [Java](../../Skills/Software%20Development/Java.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** http (2), jmx (2), json (1)
> **Tools:** intellij (2), postman (1)
> **Definitions:** is a  (2), stands for (1)
> **Ports:** port 8080 (1), :8080 (1)
> **File Paths:** palm.xml (1)
> **CLI Commands:** make (1)
> **URLs:** [http://localhost:8080/actuator](http://localhost:8080/actuator) (1)

#### [Actuator endpoints and documentation](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=0)** - [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) actuator endpoints allow us to manage, monitor and interact with our applications. By default, actuator endpoints are enabled with a prefix of actuator followed by their ID. For example, to access the health endpoint, we would need to go to actuator slash health. Let's take a look at the spring documentation to see some of the built in end points that are available to us. I already have the documentation open. If you go to the end points tab and you scroll down, you start to see a bunch of end points such as the beans endpoint, displays a complete list of the beans in your application. If you want to see the health end point, you already know it's available there slash health. Info endpoint displays arbitrary info about your application. So let's dive a little bit deeper into some of the end points that we'll cover specifically in this course. In this course, we're going to focus on three specific end points. The health, the info and the metrics endpoint. So let's dive right in. As you already know, we need to regularly check to see if our service is up or down, which is one of the reasons why the health endpoint is the only HTTP endpoint that's exposed by default. And it is available by going to slash actuator slash health. If you trigger that successfully, you will get a status of up or down indicating the health of your application. The next end point that we'll focus on in this course, is the info endpoint. The info endpoint displays arbitrary information about your application that can be obtained from build files
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation?u=76281980&t=94)** or GET property files. And it can be accessed by going to slash actuator slash info. Currently, we did not have this endpoint exposed by default, but will do so shortly. The final endpoint that we'll focus on is the metrics endpoint. The metrics endpoint makes available to us lots of useful metrics, such as system CPU usage, JVM memory usage, and so much more. And it can be triggered by going to slash actuator slash metrics. This is another end point that is not exposed by default, but we'll be taking a look at how to expose this endpoint later on in this course, great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1)
> **Env Vars:** http (1), cpu (1), jvm (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Analogies:** such as (2), for example (1)
> **API Endpoints:** get  (1)
> **Documentation:** the documentation (1)
> **Speakers:** - spring (1)

#### [Exposing and enabling endpoints](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=0)** - [Instructor] Almost all actuator endpoints are enabled by default. However, they are not all exposed by default. The health endpoint is the only HTTP endpoint that we have exposed by default. Exposing all your actuator endpoints could be a [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md). However, since this is a demo, and we're here to learn, I'll go ahead and show you how to expose all your actuator endpoints, by setting the include property to a wildcard character. So what we need to do is go to our application property files, and we're going to add this configuration in there. Once we do that, we'll trigger the actuator endpoint, and what we'll get is additional endpoints, such as the metrics endpoint, the info endpoint, and so much more that we need in this course. So let's dive right in. Inside my properties file, I need to add one configuration saying I want to expose all my endpoints. And that configuration is management .endpoints.web .exposure.include. And I'm going to set that to a wildcard. I'm going to restart the application. In the interim, I'm going to go to Postman, as you can see, we only have these three endpoints open by default. Now let's make sure the application ran successfully. It did. So what I'm going to do now is just resend my request to /actuator. And if you scroll down now, you'll see that you have additional endpoints available to you,
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=94)** such as the info endpoint, we have the beans endpoint, loggers endpoint, and so on and so forth. So this is awesome, fantastic. This is great. However, you can also decide that only want to expose certain endpoints, 'cause you don't want everything exposed by default. In that case, there is an additional configuration that you can add in your properties file. So let's go right back into our properties file. And this time around, we'll just copy everything, paste it right underneath, and we'll make some changes. I'm going to delete everything, include the include, and now instead of include, I want to type exclude. Okay. And in this situation, I want to exclude my info and my beans endpoints. Okay, so I'm going to reboot the application. And if everything goes well, I'm going to trigger the endpoint again in Postman, and the info and the beans endpoints should no longer be available to us. So let's take a look at that. I'm going to go right back to Postman, as you can see, I still currently have the beans endpoint, prior to the configuration. So let's go ahead and hit Send. And if we scroll down now, the beans endpoint is gone, and we can no longer find the info endpoint as well. So this is awesome, great job. Now, we could go one step further. Perhaps, you'd rather opt in, then opt out of enabling endpoints. If that's the case, you can set the management enabled-by-default property to false. So let's take a look at that.
>
> **[3:06](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=186)** I'm going to go right back into my properties file. I'm going to come right underneath this. I'm actually going to copy this, management.endpoints, because I need that again. I'm going to paste that right underneath here, okay. And then I'm going to type .enabled, hyphen, by-default, and I want to set that property to false. Okay. So now I'm going to reboot the application one more time. And if everything goes well, we'll also go back to Postman, we'll trigger the endpoint, and we should no longer see all these endpoints, okay. So let's go ahead and hit Send. And as you can see, everything is gone, okay, so we're back to square one. Actually, this is even sort of a little bit worse than square one, because we don't even have the health point exposed, right? So what we would love to do, is the ability to enable only certain endpoints that we want, okay. So in this situation, I just want to enable and expose the info endpoint. So to do that, I need to go back to my properties file. I need to comment this out, so I'm going to put a pound sign right here. And the endpoint that I want to expose, and the only one I want to expose right now, is the info endpoint. So to do that, I'll start to type management.endpoint, which is singular, .info.enabled. And I'll set that to true. Okay.
>
> **[4:40](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints?u=76281980&t=280)** So we're going to restart the application. And if everything works well, when I go back to Postman and I trigger my actuator endpoint, the only endpoint that should be available and exposed to me, enabled by default, should be the info endpoint. So let's go ahead and hit Send. And as you can see, I have an additional endpoint, which is the info endpoint, which displays arbitrary information about my application, which I don't have currently. I don't have anything in there. All right. So this is fantastic, this is awesome, we did a great job. In this part of the course, we were able to enable endpoints, expose all endpoints, and enable specific endpoints that we wanted, all right. So this is it, great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Security Risk](../../Skills/Cybersecurity/Security%20Risk.md) (1)
> **Tools:** postman (5)
> **UI Navigation:** go to (2), scroll down (2)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Env Vars:** http (1)

#### [Show details and create health endpoint groups](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=0)** - [Instructor] By default, the health endpoint only displays a status of up or down. Let's take a look at our application to see the health status of application SES. But before we do that, we definitely need to make some changes. Right now we have these properties from the last video, so we need to comment these two out, okay. Now, if we run the application one more time, we are exposing everything by default using the wild card. So if we go back to Postman, we should be able to see all our end points, including the health end point again. So I'm going to go back to Postman go 'head and hit send. And as you can see, if you scroll down now you have additional end points, including the health end point. Let's go 'head and trigger the health end point. Okay, as you can see Postman open this in a new tab, so I'm just going to hit send. And as you can see, I have a status of up indicating that the health status of my application. However, I can show more details about the health of my application by going back into the properties file, which is precisely what we want to do, all we have to do is type management.endpoint.health.show iPhone details.
>
> **[1:18](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=78)** And we're going to set that to always. I spelled endpoint incorrectly. So it's E-N-D-P-O-I-N-T. Now I'm going to reboot the application and if everything was successful, when I go back to the health endpoint, I should see more than just a status of up or down. I'm going to trigger the health endpoint one more time. And awesome look at this. We have a database information showing you that I'm using H two. We have a disk space information. So this is great, this is awesome. But we can do more. We can also decide to group certain health indicators into their own group. So for example, let's just go ahead and group our disk space information and our ping status. So to do that, I'm going to go right back into my properties file. And right here, I'm going to type management.end points.health.group,
>
> **[2:21](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=141)** 'cause that's what I want to do I want to group a couple of health indicators and then I need to give it a group name. So I'll call this health group. Okay, and the indicators that I want to include, I need to use the include property to include them. And all I have to do is separate them by color. So right now I'm going to include the ping status as well as the disk space. Make sure that it's camel cased. I'm going to reboot the application. I made a mistake here. I could see endpoint is not spelled correctly, so I'm going to go 'head and re-type that by adding a D for endpoint. And now I'm just going to reboot the application one more time. Once the app is up and running, we'll go back to the health endpoint, trigger that endpoint one more time, so let's do so. Right now, all I have, as you can see, is the status, the disk space and the ping status, so I'm going to hit send now. And now we should have an additional property here called groups. And in there I have an endpoint health group, which is a name of the group that I came up with to group my indicators. So I'm going to copy that. And in order to trigger this endpoint, I'm just going to append it to the end of my health endpoint. And now if I hit send, I should just have those health indicators that are grouped together, which is showing my disk space and the ping status. So great job, this is awesome. This is what we wanted all along, to be able to go in there and see more details
>
> **[3:55](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups?u=76281980&t=235)** about the health of our application, but also to be able to group together certain health indicators. So this is fantastic. Great job.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4)
> **Tools:** postman (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** iphone (1)
> **Env Vars:** ses (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Show application information with the info endpoint](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=0)** - [Instructor] Earlier, we learned that the info endpoint can be used to display arbitrary information, but what does that mean? Well, it can be used to display information such as environment information, build and [Git](../../Skills/Software%20Development/Git.md) property files information, or, we may just want to add the build version to our info endpoint as well as maybe display the build timestamp. Well, we can customize this data for the info endpoint in several ways. For example, if I just wanted to display the name of my project, the description, the version, I can do that by adding some configuration in the properties file. Once I do that and I trigger the info endpoint I'll no longer just get an empty Jason object, instead, I would get back the information about my application, so let's take a look at that. In writing our properties file, we want to add certain information that we want exposed in our info endpoint. So we'll begin to type [info.app](https://info.app).name 'cause I want to display the name of my application so I used to at sign, project.name, just to add sign again. I'm going to go to the next line, I'm going to copy all this, paste it in the second line and make some changes. So instead of name, I also want a description, I'm going to copy the description and swap it out here and I'm going to copy this again, go to the next line, I also want it to display the version,
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=94)** so I'll change this to version and change this to version, okay, I'm going to paste one more time and this one, I want the [Java](../../Skills/Software%20Development/Java.md) version, so [info.app](https://info.app).java, that version. And on the other side, it will be java.version.
>
> **[2:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=120)** Okay, now, we also mentioned that we wanted to show the build timestamp. So in order for us to do that successfully, we first need to go into the properties file and we need to add one more thing into our properties file, which would be a format for the build timestamp. So, right here, I'm going to type the left angle bracket, maven.build.timestamp that format, okay,
>
> **[2:29](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=149)** and in between that, I'm just going to type the format that I want, year, okay, month, day, hours, minutes, and seconds.
>
> **[2:43](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=163)** Before we reboot, we need to add one more configuration in order to be able to display the build timestamp in our info endpoint. So I'm going to come right here and right underneath here, I'm going to start typing info.build.timestamp
>
> **[3:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=182)** equals, actually it's not a dot, it's build iPhone timestamps so, build that iPhone timestamp, I'm going to set out to equals@maven.build.timestamp
>
> **[3:20](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint?u=76281980&t=200)** end that with at sign and now let's reboot the application and if everything is successful, I should see more information now when that trigger the info endpoint. I should see the name of my app, a description, the Java version I'm running and what time is built. So let's go ahead and trigger the info endpoint by going back to Postman, let's locate info endpoint from the actuator end point, it's right here so I'm going to click this, Postman opens it up in a new tab, that's fine, we're going to hit send so that we can trigger the info endpoint, and wow, this is cool. We now have more information now in our info endpoint displaying the project's name, description, showing I'm running Java version 14, and the build timestamp, so this is awesome, this is great, fantastic, good job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (5), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** git (1), make (1)
> **Code Identifiers:** iphone (2)
> **URLs:** [info.app](https://info.app) (2)
> **Tools:** postman (2)
> **UI Navigation:** go to (2)
> **Analogies:** such as (1), for example (1)
> **File Paths:** info.app.java (1)

#### [Overriding the Actuator base path](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=0)** - [Instructor] So, we can override the actuator base path. Perhaps, maybe our app is already using the slash actuator path for something else. Well, we do have the option of customizing a base path from actuator to something else such as manage. And to do so, we would go into our properties file and add in additional configuration to change the base path from actuator to manage. Once we do that, we'll trigger the new end point in Postman, and we should have access to all the default actuator endpoints that we exposed by default. So let's take a look at that. Inside my properties file, I'm going to add a configuration by typing management. endpoints .web .base
>
> **[0:51](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=51)** - path. I'm going to set this new base path to slash manage. Now let's go back to Postman for a second. The default actuator end point that we currently have, and I just want to trigger it before we reboot the application, is actuator and you can see everything is exposed. Now, if I go back to the properties file, again, what I'm doing is I'm changing that to manage. So let's go and reboot. And if everything goes well, we'll go back to our Postman, trigger the actuator endpoint, and it should fail. We should probably get like a page, not found, like a full fail status code. So let's take a look at that. I'm going to try to hit the actuator end point and no longer exist. And as you can see is giving me a full fail, it can't be found. In order to find it, we just need to change this to manage because that's the configuration we made in our properties file. Now, if I hit send, I have access to all those endpoints again. All right. And as you can see, it's now manage/health no longer manage/. So it's now managed/health versus actuator/help. So this is awesome. Let's go ahead and reset it back to the actuator though cause I want to keep things the way they were. So I'm just going to come in the cell. I'm going to reboot the application just to make sure my change went into effect. Once the app is up and running, I'm going to go back to Postman. I'm going to go ahead and change this back to actuator and I'm going to hit send again.
>
> **[2:27](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=147)** Now, all our end points of the default based path of actuator one more time. So that is great. The next, now when we do demo is the ability to map end points to different paths. For example, we may want to remap the health end point from slash help to something else. So let's take a look at how that would work. And right underneath here, I still want everything up here. So I'm going to copy this management.endpoints.web, portion. And now what I want to do, is include a base
>
> **[3:05](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path?u=76281980&t=185)** - path equals, and I'm just going to set it to a slash. I'm going to come right under that and I'm going to copy the, management.endpoints.web. Again, I'm going to paste it right onto that. And this time around, I want to do some path mapping. So I'm going to say .path.mapping. And the end point that I'm trying to map is the health end point, H E A L T H. And I want to map that to a different end point, which is healthcheck. Now I'm going to reboot the application. If everything goes well, I should be able to access my health endpoint by going to slash healthcheck directly. And I no longer need to go to slash actuator default base path is just a slash. So now I'm going to change this to healthcheck and I'm going to hit send. And as you can see, I have the end point for my health, which includes my health group, my status, my database, and so much more. So this is great. This is awesome. We're able to come in here and change the base path from actuator to manage to whatever it is that we chose. And we're able to demo how to map certain end points such as the health end point to specific end point of our chosen. Fantastic.

> [!info]- Semantic Content
>
> **Cross-References:** go back to (4)
> **Tools:** postman (4)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - path (2), - [instructor] (1)
> **CLI Commands:** find (1), make (1)


### 2. Creating and Securing Actuator Endpoints

[↑ Back to Table of Contents](#table-of-contents)

#### [Implementing the Health Indicator interface](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=0)** - [Instructor] In the last video, we went over overriding the actuator base path as well as mapping endpoints to different paths. Let's comment out those configurations to get back to our default configuration where we just have /actuator as our base path. To make this make more sense, I'm going to first go to Postman. Currently, if I hit healthcheck, this was the last customization we made. And we also chained the base path. It's no longer pointing to /actuator, and we can confirm that. Just trigger this endpoint. As you can see, we can find the actuator path. So what we want to do is go back into our properties file and get things back to where they were. In my properties file, we're going to comment out these last two configurations, and we're going to restart the application. Once the app is back up and running, I'm going to go back to Postman, and I'm going to trigger the /actuator endpoint to see if I have all my endpoints appearing again. I'm going to hit Send. As you can see, I have all my endpoints once more, so great job. Now, the next thing we want to talk about is we may have an external service that our [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) application depends upon and let's assume is some sort of external database service. Now, if this database service is down, the status of our application should also report as down. So what we want to do in this situation
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=94)** is create a custom health check components that are not covered by Spring by implementing Spring Boot's actuator Health Indicator interface. Once we implement that interface, we have to override the health method to do as we please. So let's take a look at that. We're going to go right back into IntelliJ. Step one is I'm going to create a new component. I'm going to create a package and a class in one. So I'm going to call this monitor, something easy, okay? And the name of this component, this class, will be DbHealthIndicator. Okay? So I'm going to hit Enter, Cancel, and I'll have to add the @Component annotation as well. This way, Spring can be aware of it. The next thing I need to do is implement the HealthIndicator interface. It has a method that I need to implement and override which is the health method. So I'm going to click OK. I'm going to click Enter here, add some space here, and I'm going to minimize this for now so we can have more real estate. Awesome. Now, I've annotated this with @Component so that, like I said earlier, Spring can be aware of it. It can bring it into the Spring context.
>
> **[3:07](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=187)** We've created a class called Database Health Indicator, DbHealthIndicator for short. We're implementing the HealthIndicator interface. What we need to do now is to go ahead and create something that mimics a call to an external service or DB in this case, okay? So I'm going to just create just a random method that returns true or false if this external service is down or up. So it's going to be a private method, it's a helper method, returns a boolean, call it isDBHealthy. In there, I'm just going to create a random object,
>
> **[4:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=240)** and I'm going to just return a random boolean value. Okay? Cool. Now, I need to override this and customize this as I need. So I'm going to say if my external database is healthy, I need to report back a status of up. That's what I'm attempting to do here, all right? So I'm just going to return a health status of up with some detail. And in here, I could just type a string. I think I have an extra parenthesis in here, okay. Here I'm just going to type in External, say Db service. I'm going to give it a Healthy, and I'm going to build that. Else, I want to do the opposite. So I'm going to copy that, I'm going to paste it down here and make some changes. I'm going to change the up to down, and External service Is Not-Healthy, okay? So this is awesome. What we need now to do is just run the application. And if this comes back with a random boolean value and it's a false value, our database will be not healthy and our application also would be down.
>
> **[5:37](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface?u=76281980&t=337)** So let's go ahead and run the application. I'm going to reboot. And if everything runs perfectly, I'm going to go back to Postman, and we're going to trigger the endpoint. I'm going to look for the health endpoint. I'm going to trigger that. And as you can see, on the first go, it's showing that the External database is not healthy, status is down, right? So this is awesome. This is what we were looking for. Fantastic, this is marvelous. Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (2)
> **CLI Commands:** make (3), find (1)
> **Tools:** postman (3), intellij (1)
> **Cross-References:** go back to (2), in the last (1)
> **Warnings:** be aware (2)
> **Code Identifiers:** isdbhealthy (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Creating a custom Actuator endpoint](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=0)** - [Instructor] [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) Actuator also empowers us with the ability to create our own custom endpoints. We may need to create a custom endpoint for our release notes, which consists of a list of bug fixes, and new features implemented in our application, or maybe we need to monitor our [Jira](../../Skills/DevOps/Jira.md) server, or any other external service that our application may depend upon. To do so, we would need to create a new component and annotate it with the @Endpoint annotation. And then we'll pass in an Id, which would be the name of the path that we want our custom endpoint to point to. In our application, we're calling it custom. Also, we'll need to add the @ReadOperation annotation to signify the type of CAD operation that we're performing. In this case, we annotated with @ReadOperation, which signifies a get request. Finally, we would go to Postman and trigger that endpoint. Now, if it was a post request, we would use the @Write annotation. And also if it's a delete request, would leverage the @Delete annotation. Let's go right into IntelliJ and make this happen. I want to create a new component. So here I'm going to just go to create a new class. So I'm going to say, a package in a class in one. So what do I want to call this? I'll say custom. And I'll call this, CustomActuatorEndpoint, just to be very clear.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=95)** Now I need to add a couple of annotations, make this a component. And is more important one is, I need to add the @Endpoint annotation, and here I need to passing the ID, which is the path to where this endpoint should point to. And in this case, I want it to point to slash actuator, slash custom. And then in here, I'm going to leverage the @ReadOperation and my method, returns a Map, whose key and values are both Strings, and we can call it whatever. We just call it custom Endpoint. I guess, make it easy. And we can also take in a parameter. In this case, I'm going to take a String and I'm going to call it id. In here, I'm going to create a map. So I'm going to create a hash map. I'm going to create a new object. And we'll just call it map, new HashMap. So let's just initialize that. And now I'm going to put something in my map, which is the id, this past to me. So here, I'm going to pass id, and then id. And finally, I'm going to just return this map object. Awesome.
>
> **[3:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint?u=76281980&t=190)** But to minimize this, I'm going to restart the application. Once the application is back up and running, we should now have a new endpoint in our list of actuator endpoints, pointing to slash custom. Let's first, go back to the actuator endpoint. And now if you scroll down, we have a new endpoint called custom. So let's trigger that as well. And if I click send, it's a bad request, and there's a reason why, is because we're omitting the parameter that was passed. So let's go back to IntelliJ. We were past an argument, so we need to leverage that as well as a query parameter. So let's go back into Postman and here all I need to do, is type of question mark, id equals and passing any idea I want. So I'm going to pass in 5, 5, 2. I'm going to send that request one more time. And vola, I get my [JSON](../../Skills/Web%20Development/JSON.md) response back, which is the id that I passed into it. So this is awesome. Fantastic, great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Jira](../../Skills/DevOps/Jira.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Tools:** postman (2), intellij (2), jira (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), scroll down (1)
> **Env Vars:** cad (1), json (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)

#### [How to secure Actuator endpoints with Spring Security](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=0)** - [Instructor] Currently our health endpoint reveals lots of details that we may not want exposed. Therefore, it'd be nice to be able to limit access to the full details of our health endpoint to specific users so that only perhaps users with a role of admin should be able to see the full details of our health endpoint. And this is what I mean. If I go back to Postman, and I trigger the health endpoints, let's say send, you can see the full details, right? So we want to make some changes here. If you're an admin, you should be able to see this. If you're not an admin, you should not be able to see this. This is what we're trying to achieve. So I'm going to go back here and talk about the things that we need to make this happen. So, first of all, we need to bring in [Spring Security](../../Skills/Web%20Development/Spring%20Security.md) dependency into our application so that we can secure the application in general. Next, we need to go into the properties file and make a change. Currently, we have our health endpoint which showing the details. We have it set to always so wherever you are anybody comes, they see the entire thing. We want to change that and set it to when authorized. This way, only users with a rule of admin will be able to see the full details of the health endpoint. In addition to that, we need to extend Spring's web security configure adapter, and override the configure method to specify in our situation here that we want everybody to be able to access the health endpoint, but only users with a role of admin should be able to access all of the endpoints. Finally will trigger the actuator endpoint
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=93)** and see if we have access or not. So let's dive right in. First thing I need to do is bring in into spring security. So I'm going to go into my pump file and start typing dependency. (keyboard ticking) The group ID should remain the same. So I'm just going to copy this (keyboard ticks) and add a fact ID should be almost identical. So I copy spring-boot-starter, and I'll just add security at the end of that, allow it to load. Give it a second. Next thing we need to do is extend the web security configure adapter. So right here, at the main package, I'm going to create a new cluster package and one called the package name config called the class name custom web config. (keyboard clicks) That's spelled out, right? Nope. Let's fix that. So config, hit enter. I'm going to add annotation; configuration annotation up here for spring, and I'm going to extend the web security configure adapter, okay. And in here I need to override the configure method that takes in the HTTP basic parameter. So I'm going to hit command O. And this gives me quick access to the methods I need to override. I'm going to select the one with the HTTP security. And here I need to add some security for our application;
>
> **[3:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=188)** as in how we want to give access to different users. So in this situation, I'm going to leverage the HTTP basic object, and I want to authorize some requests. And the first one I want to leverage is I want to leverage this convenience method called endpoint requests. This where I can just pass in the class that I want to enable access to for everybody, which is the health endpoints class. And I want to permit access for everyone. So I'll use permit all. The second endpoint that I want to block is actually all other endpoints. So if you attempt to go to any other endpoints spelled out right, endpoint requests, I'm going to say to any other endpoints, you must have a role of admin. Okay, and I will add a semi colon. And since we're leveraging HTTP basic, I'm just going to leverage that here. I'm going to complete this method by typing and HTTP basic. And that should be it. We're going to restart the application in a second, but we do need to make an additional change. So let's go back into the property's filling, change something. Here we currently have our health endpoint
>
> **[4:42](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=282)** showing all his details. So we need to change that from always to when authorized. (keyboard clicking) Okay, also, I want to set a default user that as a role of admin. This way, only that user will be able to access the full details of my health endpoint. So I'm going to copy this, change this to password and give this user a password of pass and set the role by changing this to roles. And the role would be the admin role, because this is what we set up in spring security. So I'm going to reboot now, if all goes well, I should be able to go back to my Postman and attempt to trigger my actuator endpoint. And I should not be able to access it because I'm not an admin. So let's take a look at that. We could actually try to trigger the out endpoint first because now we should not be able to see the full details anymore. So let's click... Let's just check something real quick. Make sure there's No Auth here. Okay, so let's click send. And as you can see, we do get back some data. It just shows all the status of up. It doesn't show us the full details like we had before. So what I want to do now is try to also access the actuator endpoint.
>
> **[6:15](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security?u=76281980&t=375)** And since it's now secure, we should not be able to access it. So let's get and trigger that as you can see 404, actually, there's a mistake here. That's not what I want. It should be not authorized. So I'm just saying, I should say actuator. And now it shows unauthorized because I am not an admin. So I need to tell Postman that I'm an admin. So I'm going to use Basic Auth. The admin's name was admin. So just type lowercase admin here, and the password was pass, p a s s or whatever it is that you chose. And now if I hit send, now it's 200. Now I see the entire full list of actuator endpoints that I had before. So awesome. This is brilliant. Great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Security](../../Skills/Web%20Development/Spring%20Security.md) (3)
> **Prerequisites:** configure (5), set up (1)
> **CLI Commands:** make (5)
> **Env Vars:** http (5)
> **Tools:** postman (3)
> **Cross-References:** go back to (2)
> **UI Navigation:** select the (1), go to (1)
> **Speakers:** - [instructor] (1)


### 3. Metrics and Prometheus

[↑ Back to Table of Contents](#table-of-contents)

#### [Spring Boot Actuator metrics and Prometheus](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=0)** - [Instructor] As applications become more complex due to the increased adoption of [Microservices](../../Skills/Software%20Development/Microservices.md), it's increasingly becoming more important to gather metrics about our apps are behaving over time by setting up alerts for certain activities such as how long it takes a server request, the number of requests being made, the rate at which requests are actually failing. Luckily for us, [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) provides support for metrics instrumentation library called micrometer. It is a vendor-neutral application metrics facade that captures and exposes metrics from our app to several monitoring systems and time-series [Databases](../../Skills/Software%20Development/Databases.md) such as Prometheus, Datadog, New Relic and so much more. Micrometer also gives us the ability to create our own custom metrics by leveraging the different types of metrics that it exposes which are timers, counters and gauges. A timer is used to measure event duration times such as how long it takes for a method to execute. A counter that is used to measure events that only increase over time such as the total task completed. Gauges however are used to measure values that rise and fall such as memory usage. Once micrometer is added to our app, it sits there collecting and exposing our applications metrics so that we can leverage a metrics based monitoring and alerting tools such as Prometheus to scrape and analyze those metrics. Now that we have a better understanding of which role micrometer plays in which Prometheus plays
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus?u=76281980&t=93)** in the upcoming videos, we'll install and configure Prometheus so that we can scrape our applications metrics. Fantastic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** such as (6)
> **Prerequisites:** install (1), configure (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Micrometer Prometheus registry](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=0)** - Micrometer's job is to expose our applications metrics to external monitoring systems. While Prometheus job, is to scrape and store the metrics exposed by micrometer. However, we need a way to get the metrics exposed from our application into Prometheus. Luckily for us, Micrometer consists of a set of modules containing implementation for several monitoring systems. All we need to do is add the micrometer registered dependency into our pumped XML file, by doing so we'll gain an additional endpoint for Prometheus @twitter/Prometheus. Let's dive right back into intelligence and make this happen. First thing I need to do is bring it into the dependency for Micrometer Prometheus Registry. So I'm going to type dependency. The group ID here would be io.micrometer. The artifact ID is micrometer-registry-Prometheus.
>
> **[1:02](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry?u=76281980&t=62)** Okay, give it a second to load. Once the pump files loaded successfully, we're going to reboot the application. So let's do that right now. Once the app is back up and running, we'll go back to postman and trigger the @twitterendpoint, to see if we have a new endpoint for Prometheus. But before I trigger this end point, what I want to do is just check the list of @twitterendpoints that I have to see if I have one for Prometheus. And as you can see, I currently don't have any endpoints for Prometheus at this time. But once I hit send, which we're about to do right now, let's go ahead and hit send. We should now have a new end point for Prometheus. So let's scroll back down and locate that end point for Prometheus. Awesome. Look at it right here. I'm going to click this link and go ahead and trigger this endpoint, and oh my, take a look at this. I have access to all my applications data. Now I have access to my metrics. It's been exposed and I have a new end point for Prometheus. So fantastic, great job getting this far.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** xml (1)
> **Cross-References:** go back to (1)
> **Tools:** postman (1)
> **Speakers:** - micrometer (1)

#### [Prometheus configuration](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=1)** - Prometheus is a monitoring system for gathering metrics at intervals, evaluating rules, as well as triggering alerts. It leverages a pool-based approach when fetching our applications metrics. Therefore, it needs to know where and how often to script the metrics that's exposed by our application. This means we'll need to create a configuration file to scrape our data from the actuator/prometheus endpoint. Let's dive right into IntelliJ and make this happen. Under my resources folder, I'm going to right click. I want to create a new YAML file, so I'm going to select File. I'm going to call this prometheus.yml, the YAML extension. I'm going to hit enter. And what I'm actually going to do now is paste the configuration and then we can go over it one at a time. So let me minimize this as well so we can see everything. Awesome. So what do we have going on here? For starters, we are configuring Prometheus's scrape and pool our metrics every five seconds. We also have the option of declaring a rules file so that we can receive alerts based on certain conditions. Then we can leverage the alert manager component to send those notifications either via email or use services such as [Slack](../../Skills/Software%20Development/Slack.md). Next thing we're doing here is we're defining two targets that we want to monitor. One is our Prometheus server and the second is our [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) application. We're going to be leveraging Docker,
>
> **[1:33](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration?u=76281980&t=93)** so we've already passed in the host and the port information. And since we have [Spring Security](../../Skills/Web%20Development/Spring%20Security.md) in our application, we've passed in the admin user information, which has a role of admin, a user name of admin, and a password of pass. So that's it for now. Great job. And in the next video, we'll go ahead and start Prometheus with Docker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Slack](../../Skills/Software%20Development/Slack.md) (1), [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (1), [Spring Security](../../Skills/Web%20Development/Spring%20Security.md) (1)
> **CLI Commands:** docker (2), make (1)
> **Env Vars:** yaml (2)
> **Tools:** intellij (1), slack (1)
> **File Paths:** prometheus.yml (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Installing and running a Prometheus Docker image](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=0)** - [Instructor] Now that our Prometheus that YAML file has been configured, let's go ahead and use Docker to install Prometheus. So I'm going to type docker pull prom/prometheus, and I'll click enter. And if all goes well, we should have a new Docker image for Prometheus, and we're going ahead and least all the images that we have just to see if we have such an image. So I'm going to say "Docker images," as you can see I have a Prometheus image here, so this is great. Next thing we need to do is run this in the background. So I'm going to go ahead and type that command its a pretty long command so just bear with me. It'll be docker run -d --name=,
>
> **[0:54](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=54)** and then the name of our Prometheus server is prometheus -p,and I'm at port 9090 (keyboard clicking)
>
> **[1:08](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=68)** - v, and here I need to get the path to my YAML configuration file. So I'm going to go back to IntelliJ, and I have my YAML file here I'm going to right click on that, and scroll down to copy path and I'm going to select that, and I actually want the absolute path for this demo. So I'm going to click absolute path and copy that. I'm going to go back to my terminal, and after this -v I'm going to put a space and I'm going to paste the path. So that's looking good so far, I'm going to put a semi-colon here, /etc/prometheus (keyboard clicking) /prometheus.yml prom/prometheus.
>
> **[1:59](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=119)** One more thing I need to pass in a config file information. So I pass in, --config (keyboard clicking) .file=/etc/prometheus/prometheus.yml.
>
> **[2:22](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image?u=76281980&t=142)** Now if everything goes well, we should have a new container, so let's go ahead and hit enter. (keyboard clicking) And that looks good to me. Next thing we're going to do is least all the containers that we have. So I'll say, "docker container ls." And awesome. We have a Docker container for Prometheus now, this is awesome. This is great. Great job. Now we have a Prometheus server running in the background. This is fantastic.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (7), ls (1)
> **Non-Speech:** (keyboard clicking) (4)
> **Env Vars:** yaml (3)
> **File Paths:** prometheus.yml (1), etc/prometheus/prometheus.yml (1)
> **Cross-References:** go back to (2)
> **Tools:** intellij (1), terminal (1)
> **UI Navigation:** click on (1), scroll down (1)
> **Speakers:** - [instructor] (1), - v (1)

#### [Take the Prometheus UI for a spin](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=0)** - [Instructor] Now that we have installed Prometheus and are running it in the background successfully and we also have access to a dashboard, let's take the Prometheus dashboard for spin. To get started, I want to check the status of my servers. So the first thing I'm going to do is go back to the menu and I'm going to select the dropdown, and I'm going to scroll down to targets. And as you can see, I have both my Prometheus server up and running, and my end point for my Springwood application as well. So, I'm fetching my metrics successfully, so this is great. Now, let's go back to the Prometheus homepage. So I'm going to click parameters here, click the Prometheus name, and I'm back to the dashboard. The first thing I'm going to do is I want to just do a quick search. So here, you can type in queries. Prometheus has a query language called PromQL, but we also have access to a bunch of metrics by default. And how we can access that is to go to the globe up here. I'm going to click this globe. And as you can see, I've lots of metrics already available to me. So let's look for maybe the amounts of several requests of guidance so far. So we'll use the account cause account increases over time. So let's click that, and let's just click execute. Okay, this doesn't tell me much. As you can see, this is the metric here, but let's graph it. Let's take a look at is visually. So I'm just going to click the graph tab up here, and wow, look at that.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin?u=76281980&t=94)** Very visual. It just keeps going up. It's a lot of requests. Also, if you're used to the Classic UI, you'll have the option of leveraging that. So here, let's take a look at what that looks like. I'm going to click the Classic UI. I actually liked the Classic UI a lot because I'm used to just go into the drop-down here right under here and clicking down and I scroll down. So for example, let's say we want to check the CPU usage of app, so we select that. We click execute, and wow, look at what we got here. So let's graph that as well by clicking the graph. Oh, crazy. It looks like I got a spike up here. Wow. Okay. This is good data. And as you can see, it's over a period of time as in time series. Great job getting this far. We've been able to take the dashboard for spin, make sure everything is up and running. In the next incoming videos, we'll go a little bit deeper and start creating some custom metrics.

> [!info]- Semantic Content
>
> **UI Navigation:** scroll down (2), select the (1), dropdown (1), go to (1)
> **Cross-References:** go back to (2), in the next (1)
> **CLI Commands:** make (1)
> **Env Vars:** cpu (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Adding custom metrics](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=0)** - [Tutor] Prometheus supports for core types of metrics. If you are not satisfied with the basic metrics provided my micrometer, you can add your own with Prometheus metric types. The first one I want to talk about are counters. A counter is accumulative metric used to measure events that only increase such as the number of visits to your website. If you want to know how many times something occurs, you use a counter. Gauges are used to measure values, the rise and fall such as memory usage or the temperature. It helps answer questions such as, what is the current value of something right now? An histogram samples observations such as request duration or response sizes in configurable buckets. It's used to know how big something is or how long it takes. Similar to an histogram, we have a summary. A summary tracks value distribution in percentiles. Maybe we want to know the latest percentile across a number of requests. We are going to create a hit counter by creating a custom metric that keeps count of page hits to one of our end points. Let's dive right back into (indistinct) and make this happen. In my controller, I'm going to scroll back up here. What we need to do is set up a counter and add it to the default meta registry. This hit counter will be incremented each time our get all student endpoint is triggered. So first thing I'm going to do is bring in a counter, so I'm going to say counter, I want to import the one that says core instrument,
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=94)** the first one, so I'm going to click Enter. I'm going to give it a name, I'll call this guy hitCounter, and I'm going to create a constructor to wire this in, so I'll say public StudentController and it takes in one parameter, which would be the MeterRegistry. I'll call it MeterRegistry. And in here I need to build my hit counter, so I would say counter.builder, I need to give it a name, so a name I can easily identify with would be hit_counter. Next thing I need to do is give it a description. We'll call this number of hits and we need to register it. So I'm going to pass in to meterRegistry, awesome. Now we need to leverage this, so we're going to come right into our get all students end point, and we're going to invoke the method increment on our hit counter. So I'll say, hitCounter.increment, fantastic. Now I'm going to reboot the application and if everything goes well, we should be able to go back to postman and do a search for this new custom metric that we just created. So I'm going to go right back into postman. Let's quickly do a search to see if we can find a custom metric. So I'll do Command + F and I'll start typing hit_counter, I have no results.
>
> **[3:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=190)** Okay, that's fine. So we need to trigger the students end point so that we can actually have some hits. So I'm going to open a new tab, I'm going to go to [HTTP://localhosts:8080/api/v1/student](https://HTTP://localhosts:8080/api/v1/student).
>
> **[3:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics?u=76281980&t=214)** Okay, so let's hit send, and we got back an empty array. Okay, a status of 200, so let's trigger it two more times and one more. All right, so that's three hits to our student end point. So let's take a look at our custom metric and see if we can find it in Prometheus. So I'm going to go back to my Prometheus server and I'm going to hit send. And this time around, (indistinct) when finished typing hit counter, you already see I have one of three, so let's type it out, hit counter. And as you can see, we give it a label of number of hits and you can see we had three hits. So this is fantastic, we made it happen, great job. In the next video, we'll take a look at graphing this metric.

> [!info]- Semantic Content
>
> **Code Identifiers:** hitcounter (2), hit_counter (2), meterregistry (1)
> **Analogies:** such as (4), similar to (1)
> **CLI Commands:** find (2), make (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** postman (2)
> **URLs:** [http://localhosts:8080/api/v1/student](http://localhosts:8080/api/v1/student) (1)
> **Ports:** :8080 (1)
> **API Endpoints:** /api/v1/student (1)

#### [Viewing custom metrics from the Prometheus UI](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=0)** - Now that we have a custom metric that we're keeping track off, called the heat counter. Let's view our custom metric with the permit you as you are. So to do that, I'm going to get rid of the last expression we had, which was just showing us a CPU usage. I'm going to highlight and delete that. And I want to type into new expression, which is heat counter, and I'm going to leverage the auto search and I'm going to click enter. Now, I'm going to execute this query by clicking execute. And as you can see, I only have three hits showing up here. All right, now what we want to do is we're going to reboot the application. And so let's go back to Intelligent I'm going to restart the application. Once the application is back up and running, we're going to go back to Postmate and trigger the end points of federal students again, just to see if it gives us a new counter to see if our counter resets back to zero. And this time around, go back to the student and point, and I'm going to trigger this maybe say five times one, two, three, four, five. All right, now I'm going to go back to the premise here's UI, and I want to hit execute one more time. And as you can see, there's a break here. We started at zero, got to three, and there we rebooted the application and we reset the counter back to zero. And then we triggered it once here, then you went all the way to five.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=95)** All right, so this can happen. The counter starts at zero and increases over the lifetime or the service, but occasionally if a service process restart, the counter may reset back to zero, which is what we're looking at here. Now we can get around this by leveraging Prometheus's query language known as prom QL. It has a rate function, which accounts for counter resets by assuming that any decrease in the counter is a reset. The rate function calculates the per second average rate of our value is increasing over a period of time. So it's great for spotting trends, spikes and for sending alerts, if something happens. So let's modify our counter with a rate function. So I'm going to go right back into the search box here, and I'm going to go right in front of hit counter and started type rate and a left bracket and a right bracket. So I want to wrap the heat counter metric inside the right function as an argument. And then within the brackets, I'm going to have a left-hand good bracket and a right angle bracket. And in here we can specify a time to specify how far back we want to [Fetch](../../Skills/Web%20Development/Fetch.md) a metric of values. So in here going to go back five minutes by typing 5:00 AM, and I'm going to trigger this by hitting execute, and you should see this data change now, and it should give us a more like a range over a period of
>
> **[3:10](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui?u=76281980&t=190)** time. So let's go ahead and click execute and voila, look at that. Awesome. So as you can see, it's giving us more like a range, not a hardcore metric, like one or two, not an integer. We've done a great job, creating a custom metric view and a custom metric in the dashboard and even modifying the custom metric with Prometheus's query language known as prompt QL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1)
> **Cross-References:** go back to (4)
> **Definitions:** known as (2), is a  (1)
> **Ports:** :00 (1)
> **Env Vars:** cpu (1)
> **Speakers:** - now (1)


### 4. Grafana Dashboards

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing and running a Grafana Docker image](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=0)** - [Instructor] Grafana is an open-source platform used to monitor, analyze and visualize data. You can bring data into Grafana from the plethora of data sources, such as Prometheus, InfluxDB, Graphite, AWS CloudWatch and many more. Let's head back to the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) and use Docker to install and run Grafana. And as you can see here, I already have Prometheus up and running, now we want to go ahead and install and run Grafana as well. So I'm going to type docker, run -d --name we're going to name it grafana -p, give it a port 3000, which is the default port 3000:3000. And we're going to type grafana/grafana, okay? So this command will start Grafana inside a Docker container and make it available to us on port 3000. I'm going to hit Enter, and if all goes well, we'll least start containers to see if we have a new container, once this is up and running. So let's take a look at that. So I'm going to list my containers with a Docker command, docker container ls. Oh, I misspelled that so let's type that again, it'll be docker, D-O-C-K-E-R container ls, let's hit Enter.
>
> **[1:35](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=95)** And as you can see, we have a new container, we have a Grafana image here, so this is awesome on port 3000. And we can verify this by going to our browser and we open up a new tab and we'll trigger HTTP:localhost:3000,
>
> **[1:57](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image?u=76281980&t=117)** 'cause that's the default port that we set for Grafana. So we're going to go ahead and hit Enter, and this is awesome. We're welcome to the new Grafana dashboard with a new interface showing us to log in so that we can access our dashboard and the default username and password for this would be admin, so we'll go ahead and leverage that instead of creating an account, I'm just going to type admin and admin for the password as well. I'm going to click login, and it's suggesting that I come up with a new password as well. I'm going to skip this step, so I'm going to just click skip, awesome I'm in. As you can see now I have a backend to create [Dashboards](../../Skills/Data%20Science/Dashboards.md) and we'll explore more of this in the upcoming video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **CLI Commands:** docker (6), ls (2), aws (1), make (1)
> **Ports:** port 3000 (4), :3000 (2)
> **Env Vars:** aws (1), cli (1), http (1)
> **Prerequisites:** install (2)
> **URLs:** [localhost:3000](https://localhost:3000) (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)

#### [Import metrics data from Prometheus to Grafana](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=0)** - [Instructor] Now that we've installed Grafana, we need to configure a data source for it. And the data source for our application in this case will be Prometheus. We need to get our Prometheus metrics into Grafana so that we can build beautiful [Dashboards](../../Skills/Data%20Science/Dashboards.md). So what I'm going to do is go to the left panel right here at this left menu. I'm going to go on the gear icon, right up on the gear icon is configuration and right under configuration is data sources. I'm going to select Data sources. And I have an option of adding a data source. I'm going to click here where it says, add data source. And as you can see, Prometheus is on the list. It's actually the first one on the list but you do have options. In my case, we're just going to select Prometheus, so we click select. And here I'm going to include my IP address, as well as the port. So I need to locate my IP address real quick. So I'm going to go back to the terminal and the command to get my IP address on a Mac should be ipconfig. Trying to get my IP address. And here it is. So I'm going to select that real quick, go back to my Grafana dashboard and I'm going to type http:// and I'm going to paste that IP address, and I'm going to put a colon and include the port where my Prometheus server is running.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana?u=76281980&t=94)** Awesome. So I'm going to scroll down and here it gives me the option to save and test it. So that's what I want to do. I'm going to click save and test. And, awesome. I have a green check mark here, indicating that my data source is working. So this is fantastic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Cross-References:** go back to (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Tools:** terminal (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Creating dashboards with Grafana](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=0)** - [Instructor] Now that we've configured Prometheus as our data source, all that is left for us to do now is build a beautiful dashboard with Grafana. To do so, I'm going to come over to the left panel, hover over the plus icon, come down to create dashboard and select dashboard. Now I'm going to build my dashboard by first adding an empty panel. So I'm going to add an empty panel. In here, I have the option of leveraging the metrics browser to gather my metrics, or I could enter a PromQL query directly in here. So let's do so. So I'm going to click in here and type system_cpu. I want the CPU usage, so system_cpu_usage, select that. And to run this query, I'll just hold down Shift + Enter. And wow, look at that. My system CPU usage is being graphed, and as you can see, I had a spike up here. Now I can make this graph even more appealing if I want to. To do that, I have to come to the right end panel, scroll down. And for example, let's say, I want to make this a bar instead of a lines. I'm going to select bars. If I wanted to change back to lines, just click lines, because I actually do prefer the lines. So I'm going to go over here, I want to change the width of the lines. I'm going to just track this. As you can see, it's getting thicker.
>
> **[1:34](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=94)** Let's keep it right there. I could also add a fill opacity, and as you can see, there's so many options. But we're not going to go through all of that right here. What we'll do next is just going to save this, so let's go ahead and click save up here. And we'll give this dashboard a name, let's leave it as New dashboard. We'll click save. And as you can see, I have a new dashboard with one panel, which shows my system CPU metric thus far. If I wanted to add an additional metric to this, say for example, I wanted to add my hit counter metric. I could just come up here and add an additional panel, click add an empty panel. And this time around, I'm going to start typing, hit_counter. As you can see, I have my hit counter total, let's select that. And to run the query is Shift + Enter. And as you can see, I have my hit counter metric here. I can go ahead and add this to my existing dashboard by clicking apply. So let's do that. As you can see, I have two panels in my dashboard and I can keep on building my dashboard panel by panel. But that is time consuming and it can be very tedious. So there's another way. The other way is to leverage existing dashboard templates that are provided to us by Grafana. So let's take a look at that. I'm going to open a new tab, and I'm going to access the Grafana dashboard templates by going to Grafana's website. And as you can see, Grafana has a dashboard repository that allows you to search for templates by category,
>
> **[3:11](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=191)** via data source. So for example, if I'm looking for Prometheus template, I'm going to select this. And you can see, I have some options here. Let's try [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md), so I'm going to type Spring Boot. And look, I have Spring Boot [Statistics](../../Skills/Data%20Science/Statistics.md), I have other ones here. Let's select the Spring Boot Statistics one. As you can see, it has an ID up here. There's a specific template that I'm looking for, the ID is 12900. And that's the one I'm going to leverage instead of this one. So let's go back to Grafana. This time around, I want to get rid of this old dashboard that I created, so I'm going to come to this gear, click that, scroll down and delete. All right. So now this new dashboard that I want to create is going to be created leveraging an existing template. So I'm going to come back down here as though I want to create a new dashboard. But instead of creating a dashboard, I'm going to import. So I'm going to select import, and here I'm going to pass in the ID. If you look back at the browser, the ID for the one that we saw was 6756. But the one that I want is actually 12900. So I'm going to load this template by clicking load. And as you can see, the name of the template is Spring Boot APM Dashboard. I'm going to scroll down and click import. It's asking for a data source.
>
> **[4:46](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana?u=76281980&t=286)** So the data source for us is Prometheus, so I'm going to click the dropdown and select Prometheus. Now I'm going to click import. And look at that. It's telling me my system has been up for an hour and change. My heap usage, my non-heap usage. Wow, this is a lot of metric already customized for me. Great job getting this far. This is fantastic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Spring Boot](../../Skills/Software%20Development/Spring%20Boot.md) (5), [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **UI Navigation:** scroll down (3), select the (1), dropdown (1)
> **Exercise Files:** template (5)
> **Env Vars:** cpu (3), apm (1)
> **Code Identifiers:** system_cpu (1), system_cpu_usage (1), hit_counter (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/next-steps?u=76281980&t=0)** - [Instructor] Wow, we did it all under an hour. We became familiar with the importance of monitoring our production ready Springwood applications by leveraging Springwood actuator Prometheus and Grafana to set up a monitoring system. While doing so, we covered many topics such as actuator endpoints, what they are, how to customize them and even how to secure them. We were later introduced to gathering metrics with Micrometer and Prometheus and ended up putting together a beautiful dashboard with Grafana. Regardless, there is still much more to learn. So what's next? I highly recommend a couple of courses on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Lennon library that can help you get familiar with Prometheus and Grafanna. The courses are introduction to Prometheus by Chris Bailey and Grafana basics by Laura Stone. You can also search in the search bar to find courses on Prometheus and Grafana to learn more. However, if you have any questions, please do not hesitate to leverage the Q&A section under each video to ask questions. I am so grateful and appreciative of each and everyone that took time to watch this course. You can catch me on LinkedIn under my LinkedIn page, which is my first and last name, Mikaila AKeredolu or visit me @[tech552.com](https://tech552.com). I'd love to hear from you. Thanks for taking time to watch the course, and have a wonderful day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3)
> **CLI Commands:** find (1)
> **URLs:** [tech552.com](https://tech552.com) (1)
> **Cross-References:** we covered (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Mikaila Akeredolu](../../Instructors/Cloud%20Computing/Mikaila%20Akeredolu.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/spring-boot-actuator-3010189)

## Skills Covered

- Spring Framework
- Spring Boot

## Path Context

### In [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)
← [Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing](Spring%20Boot%20Observability-%20Deep%20Dive%20into%20Logging%2C%20Metrics%2C%20and%20Tracing.md) | **4 of 6** | [Advanced Spring- Application Events](Advanced%20Spring-%20Application%20Events.md) →

## Appears In

- [Advance Your Spring Development Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Advance%20Your%20Spring%20Development%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Learning Spring 6 With Spring Boot](../Software%20Development/Learning%20Spring%206%20With%20Spring%20Boot.md) — Spring Framework, Spring Boot
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](../Artificial%20Intelligence%20(AI)/Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Spring Boot
- [Advanced Spring- Application Events](Advanced%20Spring-%20Application%20Events.md) — Spring Framework
- [Spring Boot Observability- Deep Dive into Logging, Metrics, and Tracing](Spring%20Boot%20Observability-%20Deep%20Dive%20into%20Logging%2C%20Metrics%2C%20and%20Tracing.md) — Spring Boot
- [Performance Tuning in Spring Apps](Performance%20Tuning%20in%20Spring%20Apps.md) — Spring Framework

---

[↑ Back to top](#)