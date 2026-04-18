---
type: course
slug: devops-foundations-monitoring-and-observability-20223247
url: "https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247"
duration_minutes: 121
duration: 2h 1m
level: Intermediate
updated: 12/20/2023
learners: 114262
skills:
  - DevOps
  - System Monitoring
exercise_files: true
tags:
  - course
  - topic/devops
  - skill/devops
  - skill/system-monitoring
status: not-started
created: 2026-04-17
---

# DevOps Foundations: Monitoring and Observability

> Monitoring is a key practice area of modern operations. Even as we innovate and evolve our processes, there is still a fundamental need to understand and measure the reliability and performance of our infrastructure and products. In this course, explore techniques and tools for monitoring from a DevOps mindset. Instructor Ibukunoluwa Itimi covers all the functional areas of monitoring (synthetic, 

> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247) | 2h 1m | Intermediate | 114K learners

## Instructor

- [[Ibukun Itimi]]

## Resources

- Exercise files available

## Skills Covered

- DevOps
- System Monitoring

## Table of Contents

### Introduction

#### Measure, detect, and respond
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measure-detect-and-respond?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measure-detect-and-respond?u=76281980&t=0)** - [Ibukun] As we innovate and evolve, there is still a fundamental need to understand and measure the reliability and performance of our infrastructure and products.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measure-detect-and-respond?u=76281980&t=10)** This is how we're able to innovate while maintaining high standards of performance and stay efficient as we grow.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measure-detect-and-respond?u=76281980&t=17)** Observability and monitoring are key facets in this ability to measure, detect, and respond to this ever-changing landscape.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measure-detect-and-respond?u=76281980&t=26)** Hi, I'm Ibukun Itimi, and I am an engineering leader, championing and advocating the observability culture in the organizations I work with.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measure-detect-and-respond?u=76281980&t=36)** And with this course, I'm here to help you do that as well.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measure-detect-and-respond?u=76281980&t=40)** If you're ready to learn more, then join me in my LinkedIn course.

> [!info]- Semantic Content
>
> **Speakers:** - [ibukun] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=0)** - [Instructor] I'll take you through the different pillars of observability, types of monitoring and how they can be applied to improve your understanding of how services, infrastructure, and applications work.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=12)** While observability is usually owned by specific teams, different teams have a part to play as well as a huge gain if they invest in it.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=21)** For this reason, I recommend this course for software engineers, DevOps/SRE or observability engineers who want to understand the foundations of observability.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=33)** Because product managers are also invested in metrics and KPIs, understanding the potential use cases and outcomes of observability could improve how they approach implementing these.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=45)** This course could also be a precursor to empowering them to drive the observability culture in their engineering teams.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=52)** If this sounds like you, then this course is definitely for you.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=57)** To follow along in this course, it'll be helpful to have basic knowledge of IT, development or product management experience.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=65)** However, if you are new to this, you can follow along, as well as watch other videos in the DevOps Foundation series to deepen your understanding.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=76)** As for technologies, I'll be using Grafana Cloud to explore some demos as well.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/what-you-need-to-know?u=76281980&t=82)** For Grafana Cloud, I'll be using the free tier account, which should be sufficient for us to get through this course, and even for small teams who are looking to explore observability on a small scale.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Env Vars:** sre (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Monitoring and Observability

#### Overview of monitoring and observability
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=0)** - [Instructor] Observability and monitoring are often used interchangeably.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=4)** However, while these two concepts are related, they're also very different.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=11)** Observability is a characteristic of a system that makes it easy to understand its inner workings through the signals it emits.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=20)** Monitoring, on the other hand, is the use of these signals to visualize or alert on system performance.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=27)** By practicing observability, we're able to uncover known and unknown problems that lie within our services.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=35)** Since we emit both good and bad signals.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=39)** While monitoring could potentially be targeted at known problems, meaning that there could be a plethora of problems we may not be uncovering.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=48)** In a nutshell, monitoring and observability go hand in hand.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=52)** With monitoring, we can see or be alerted to what is wrong.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=57)** While with observability, we can dig deeper into why things went wrong depending on the data we're getting from our services.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=66)** Observability relies on signals, which are called the pillars of observability.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=71)** They are metrics, logs, and traces.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=77)** However, there's another class of signals called events, which as the name implies emits the events happening in your system.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=86)** Having coverage of these pillars gives high visibility into system performance.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=94)** Monitoring uses these signals to paint a picture of what is happening within our services, either using dashboards or visualizations or alerting.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=105)** There are several monitoring techniques depending on which aspects of a service is being monitored.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=111)** Usually having more than one of these techniques in place gives a full picture of service performance.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=118)** For example, having application monitoring alone for your backend services doesn't quite provide insight into your frontend performance, which is equally an important part of your user experience.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/overview-of-monitoring-and-observability?u=76281980&t=132)** We'll explore these and a few others as we progress in the course.

> [!info]- Semantic Content
>
> **Analogies:** picture (2), for example (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Importance of observability in building applications
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=0)** - [Instructor] Systems are bound to fail due to several reasons.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=4)** Reliability is not hinged on building a perfect system.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=8)** Rather, it is based on being able to understand and recover from failures.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=14)** Observability empowers teams to do just that.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=18)** While we briefly touched on the pillars of observability, I'd like us to take a step back to understand why observability is important in the first place.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=28)** Observability powers other aspects of platform engineering, such as monitoring, testing, and incident response.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=36)** We can make informed decisions about how the changes we introduce to our system impact performance.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=43)** We are also able to use that data to efficiently make decisions on skill and reliability.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=49)** Furthermore, we anticipate that a system will fail either due to skill, new changes, or even underlying infrastructure issues.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=58)** The ability to measure our uptime and response times when incidents happen is a direct output of observability.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=67)** It goes without saying that observability is the backbone of reliability for any system that is built to scale or even perform optimally.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=76)** All this boils down to being customer-focused.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/importance-of-observability-in-building-applications?u=76281980&t=80)** Our ability to understand and react to issues in our system leads to overall improved experiences for the users we're building for.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** for. (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Pillars of observability
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=0)** - [Instructor] The observability pillars we will discuss in this course are: metrics, logs, traces, and events.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=10)** Metrics are numeric values that provide insights into the characteristics of a system.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=15)** They are data points that can be aggregated and analyzed statistically, which then give you a measurement of a system's performance.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=23)** You might be familiar with metrics like CPU usage or memory usage.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=28)** These are measurements for the utilization of CPU and memory resources for a piece of infrastructure.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=35)** Similarly, you can have other metrics measuring your application's performance, as we'll see as we go along in the course.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=41)** Logs are text records that are outputs from either infrastructure or applications.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=46)** They're usually a representation of what is happening within your infrastructure or service.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=51)** Different services come with some default logs.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=54)** However, software developers can also define custom logs for their services as well.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=60)** For example, you can log the requests and responses that go through your system.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=65)** Traces show the lifecycle of a request as it passes through your services and infrastructure.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=71)** Because systems are not built in isolation, but are in constant communication with other infrastructure, whether as monoliths or microservices, it is important to understand the path through which your requests flow so that you're able to understand individual requests and also pinpoint problem areas within your infrastructure.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=89)** Traces are the pictorial representation of this and are very instrumental in building distributed services.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=96)** Events are pretty much explained in its name.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=99)** When something of note happens within your infrastructure, it is able to emit a signal.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=105)** A typical example is a restart of your service or infrastructure.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=109)** This could be useful to understand why your application was unavailable for some time.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=114)** On its own, a signal is only a part of the picture.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/pillars-of-observability?u=76281980&t=118)** However, when correlated with other observability signals, it could very well be the missing piece of the puzzle.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (2)
> **Analogies:** for example (1), picture (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Observability architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=0)** - [Instructor] Observability can be implemented in so many ways.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=4)** There are different methodologies and tools, so this means that there are several architectures you could implement to get your system to be observable.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=12)** Before we delve into the course, I wanted us to run through different possible architectures you might end up with, as it could often take a while to wrap one's head around the technicalities of implementing observability.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=25)** Regardless of how you implement observability, there are some common stages across the different architecture options.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=32)** The first is instrumentation or configuration.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=35)** That is, writing your code in a way that it creates and can export observability signals, metrics, logs, traces, and events.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=44)** The configuration aspect is applicable to infrastructure, which would often need some settings configured to expose metrics or logs.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=53)** The collection and processing is where you're running some sort of collector, typically an agent, which is a service that collects these signals.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=62)** I might also perform some processing on them.
>
> **[1:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=65)** The export layer is where these signals are then sent to your observability tool or backend, and the visualization layer is usually where you can interact with your signals in a meaningful way, either on dashboards or by being able to query the signals your service or infrastructure has exposed.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=83)** These layers might not always be this distinct depending on how you implement your observability, but we'll see that as we explore.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=91)** The first architecture type would explore is the vendor based observability.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=96)** In this scenario, you will typically pay a vendor to provide observability services.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=101)** In this case, you'll leverage the services they have by using their instrumentation libraries, their collection agents, as well as the UI they provide.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=111)** This is usually a quick way to get into observability, but also tends to be costly.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=117)** In this case, the vendor's agent often serves as both the collection and export layer.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=124)** The other option you could explore is the open source observability.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=129)** This is a more cost friendly option.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=130)** However, as your infrastructure scales, there tends to be more moving parts and maintenance required to run open source observability.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=138)** In this architecture, you'd also leverage the open source instrumentation libraries as well as the collection agents and UI.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=146)** The main difference is that all of this will be hosted on your infrastructure and you'll be responsible for scaling as you grow.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=154)** As you can, see the different layers that come on across both architecture options, although they differ in complexity.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=161)** In recent times, however, new frameworks have come up to standardize how observability is implemented, and so OpenTelemetry has gained a lot of popularity.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=171)** OpenTelemetry is an open source observability framework that provides standard protocols and tools for instrumenting, collecting and routing telemetry data.
>
> **[3:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=183)** OpenTelemetry has its own instrumentation libraries which help to gather, process and export data.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=189)** This replaces the need to implement custom libraries for each observability tool you make use of.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=195)** Instead, you can instrument your code in a uniform way regardless of your observability tool or vendor.
>
> **[3:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=202)** The OpenTelemetry instrumentation libraries are language specific.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=205)** That is there are different libraries for different programming languages.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=210)** OpenTelemetry also has a collector which receives, processes and exports data to different backends.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=218)** It has compatibility across several observability tools, including some of the vendors we've seen in the architecture diagrams we explored.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=226)** This again, reduces the complexity of having to deploy custom collection agent based on the vendor you use.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=233)** The collector in itself has the ability to send to several vendors or backends, meaning that things which used to be complicated like changing your observability vendor can easily be done using OpenTelemetry.
>
> **[4:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=246)** The OpenTelemetry collector is made up of the receiver, which receives the observability signals, the processor, which prepares the data for exporting and performs actions like batching or data manipulation, and the exporter, which is where the collector then sends the data to the desired backend or vendor.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=265)** These three aspects of the OpenTelemetry collector are mandatory when setting up your config.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=271)** However, it also has extensions, which is an optional way of adding capabilities without having to create a separate distribution.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=279)** OpenTelemetry has its pros and cons.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=282)** Some of the pros are that it is vendor agnostic.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=285)** This prevents vendor lock-in where it would typically be difficult to switch to a new vendor because you have implemented lots of custom configuration.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=294)** It is easy to set up since it standardizes observability implementation and it is flexible since you can configure several backends.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=301)** It gives you a good level of flexibility in implementing your observability.
>
> **[5:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=306)** However, it also has a few cons.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=309)** Being open source, its maintenance is not managed by a single organization.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=314)** This could trickle down into slow feature releases, unclear documentation, and others.
>
> **[5:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=319)** However, because it is gaining more and more popularity, I believe the support and maintenance will improve over the years.
>
> **[5:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=326)** It also has some data limitations.
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=329)** OpenTelemetry documentation states what type of observability signals are available.
>
> **[5:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=334)** This is typically metrics, logs, and traces while others like profiling are not yet supported.
>
> **[5:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=340)** Also, not all languages have their instrumentation available or in stable states on OpenTelemetry.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=348)** This means that depending on the language your code is written in, you might experience certain limitations with OpenTelemetry.
>
> **[5:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=354)** You can check the OpenTelemetry documentation to see if it'll be a good fit for your service.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=360)** Now that we've covered OpenTelemetry, let's see how we changes our open source and vendor architectures.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=367)** The key things that change will be replacing vendor specific instrumentation with OTel instrumentation.
>
> **[6:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=373)** This is optional, however, because the OpenTelemetry collector has receivers that are compatible with different types of data sources.
>
> **[6:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=381)** The second will be replacing the collection agents in vendor based observability and also any collectors that you use in your open source observability with the OpenTelemetry collector.
>
> **[6:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=393)** This then serves as the layer where data is received, processed, and exported.
>
> **[6:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=399)** In this course, I'll be working with a sample Node.js application to show you some of the demos.
>
> **[6:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=405)** We'll be instrumenting our Node.js service using some Node.js libraries, as well as OpenTelemetry libraries.
>
> **[6:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/observability-architecture?u=76281980&t=411)** We'll also be making use of the OpenTelemetry Collector and Grafana Cloud as our observability tool.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (2), means that (1)
> **CLI Commands:** node (3), make (1)
> **Code Keywords:** case, (2), switch (1), let (1)
> **File Paths:** node.js (3)
> **Prerequisites:** required to (1), set up (1), configure (1)
> **Speakers:** - [instructor] (1)


### 2. Metrics and Monitoring

#### Metric types
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=0)** - [Ibukun] Metrics and numeric values that provide insights into the characteristics of a system.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=6)** There are data points that can be aggregated and analyzed statistically, which then give you a measurement of a system's performance.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=14)** Metrics come out the box with software that we use, but can also be custom defined to fit our business use cases.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=21)** Depending on the observability tool you use, there are different types of supported metrics.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=27)** The commonly supported ones are counters, gauges, and histograms.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=34)** Counters are simple increments-only metrics that keep track of the number of occurrences of a specific event or activity.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=42)** They're invaluable for measuring discrete event such as the number of API requests, error occurrences, or system restarts.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=51)** Counters are particularly useful for tracking the volume of incoming requests to a web server.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=57)** By monitoring the request counter, we can identify spikes in traffic and potentially allocate additional resources to handle load.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=66)** You can use counters when you want to record a value that only goes up, or you want to be able to later query how fast the value is increasing, that is its rates.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=78)** Gauges are metrics that provide a snapshots of a particular value at a specific point in time.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=84)** They represent the instantaneous state of a system such as memory usage, CPU utilization, or the number of active connections.
>
> **[1:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=94)** Consider a database server.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=96)** Monitoring the gauge metric for memory usage allows us to understand the current memory consumption and whether there's need to optimize memory management.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=106)** You can use gauges when you want to record a value that can go up or down or you don't need to query its rates.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=115)** Histograms measure the duration and frequency of time durations for specific events.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=121)** You could measure the request duration of a specific HTTP request call using histograms.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=127)** You can use histograms when you want to take many measurements of a value to later calculate averages or percentiles, you're not bothered about the exact values but are happy with an approximation, or you know what the range of values will be upfront so you can use the default bucket definitions or define your own.
>
> **[2:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=147)** Each type of metric serves a unique purpose and offers valuable insights.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=152)** Here are a few key use cases for these metric types.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=156)** For performance optimization, gauges help identify bottlenecks and performance issues in real time.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=162)** By analyzing these metrics, you can pinpoint areas that require optimization such as memory-hungry processes or slow database queries.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=173)** For capacity planning, counters aid in predicting resource requirements.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=178)** They help determine when your systems are approaching capacity limits, allowing you to scale resources proactively.
>
> **[3:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=186)** While for user experience enhancements, understanding the distribution of user interactions through histograms helps optimize user experience.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metric-types?u=76281980&t=195)** By focusing on improving metrics related to user interactions, you can create a smoother and more responsive system.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), cpu (1), http (1)
> **Analogies:** such as (3)
> **Code Keywords:** require (1)
> **Speakers:** - [ibukun] (1)

#### Analyzing metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=0)** - [Instructor] Mathematical analysis of different metric types like sums, rates, percentiles, and averages provide valuable insights into the behavior and performance of systems.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=12)** Sums are straightforward to analyze mathematically, you simply add up all the individual data points within a specific timeframe.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=20)** Summing metrics is useful when you want to keep track of the total count or quantity of events over a period.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=27)** For example, you can count the number of requests served by a web server in an hour to understand overall traffic.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=34)** Rates involve dividing the change in quantity by the change in time.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=38)** Rates are useful when you want to measure how something changes over time.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=43)** For example, you can calculate the rate of incoming requests per minute to understand the request space.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=51)** Next, the average, or mean, is calculated by summing all the data points and dividing by the number of data points.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=58)** Averages are useful for finding the central tendency of data.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=63)** For instance, you can calculate the average response time of a service to understand its typical performance.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=70)** Finally, percentiles are calculated by dividing data into 100 equal parts and finding the value below which a given percentage of data falls.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=80)** The median, which is the 50th percentile, divides data into two equal halves.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=86)** Percentiles, are used to understand the distribution of data and identify outliers.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=91)** For example, the 90th percentile of response times can help you gauge the performance that 90% of your users experience.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=102)** Percentiles have recently become popular.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=104)** So let's see why.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=106)** In the observability world averages are usually used to analyze latency metrics.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=111)** However, the challenge with averages is that you are unable to get the outliers, which means that while some users may experience low latencies, there could be a subset experiencing outrageously high latencies, which might be masked by average values.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=127)** Percentiles, on the other hand, help you identify those outliers.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=132)** You can have several percentiles, but the commonly used ones are 50th percentiles, 90th percentiles, 95th percentiles, and 99th percentiles, commonly called P50, P90, P95, and P99.
>
> **[2:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=149)** To understand how latency and percentiles work, let's look at these examples.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=154)** If the P50 latency for web server's request is one millisecond, it means that the other 50% of requests completed in more than one millisecond.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=165)** Also, if you have the P99 latency for a web server's request as two milliseconds, it means that 99% of the requests completed in two milliseconds or less, while the other 1% of requests completed in more than two milliseconds.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/analyzing-metrics?u=76281980&t=180)** These metric types and mathematical analysis can be applied to both default metrics and custom metrics generated by software or applications.

> [!info]- Semantic Content
>
> **Env Vars:** p50 (2), p99 (2), p90 (1), p95 (1)
> **Analogies:** for example (3), for instance (1)
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** means that (3)
> **Speakers:** - [instructor] (1)

#### Choosing the right metric
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=0)** - [Instructor] Choosing the right metrics makes a huge difference in how we're able to observe our system.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=5)** Metrics play a foundational role in monitoring and observability and are used in conjunction with the other observability signals.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=13)** In fact, metrics are often generated from these other signals for several purposes.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=18)** There are several schools of thought when it comes to choosing what metrics are the most important for an application.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=24)** One of the most popular ones is Google's Four Golden Signals.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=28)** According to the Google SRE book, having the Four Golden Signals allows you a decent insight into your system's performance.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=36)** These four golden signals are: errors, latency, throughputs, and saturation.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=42)** Let's touch briefly on each of these golden signals.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=47)** Firstly, we have errors.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=49)** Errors are the rate of unsuccessful events within a service or infrastructure.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=54)** For example, the rate of requests that return HTTP 500 responses could indicate the health of your service.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=63)** Next, we have latency.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=66)** Latency shows the amount of time taken for an event or request to be completed.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=71)** This is important because you want your service to not only be giving successful responses, but also giving them in good time.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=79)** Thirdly, we have throughput.
>
> **[1:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=82)** Throughput is the volume of requests or events being received by a service or infrastructure.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=87)** It is important to measure because it helps you keep an eye on how much work your system is doing.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=93)** It can also help you with understanding performance with respect to load.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=97)** Finally, we have saturation.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=100)** This is the measure of how a service's or infrastructure's limited resources are utilized.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=106)** Because these resources are limited, overutilization can lead to problems within our infrastructure, and so, measuring saturation helps us stay ahead of resource utilization issues.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=117)** A good example would be measuring your CPU, memory, or disk utilization.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=123)** These four golden signals are a good foundation for defining your application's metrics.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=128)** However, they have their limitations in that they're very engineering-focused.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=132)** The downside of this is that while we are building software using engineering techniques and principles, there is often a softer side to our software, which is the product.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=142)** At the heart of it, we don't just build software for the sake of it, but usually with a product in mind.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=148)** That being said, we can extend the foregoing signals and other engineering metrics by defining custom metrics, which also take into consideration product performance, and this gives you even better insights into your system.
>
> **[2:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=162)** Choosing the right metric entails the following.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=165)** First of all, deciding what you want to measure.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=168)** This is the first thing you do when using metrics that come out of the box with software or even creating custom metrics.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=175)** Deciding the purpose of your metrics help guide the decision of what you want to capture in a metric and also how you query that metric.
>
> **[3:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=182)** For example, deciding whether you want to measure the rate of change or volume of a metric will determine what query you use.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=190)** Next, you decide if the metric is an actionable, exploratory or reporting metric.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=196)** Alert fatigue is a common phenomenon when it comes to monitoring and alerting.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=200)** This is when your system produces so many alerts that the recipients are unable to distinguish between alerts that indicates a problem and those that are just noisy.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=210)** Actionable metrics for your team to action.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=213)** If there's an outage in your system, alerting on an actionable metric tells your team that there's a problem that needs fixing, which they can act on.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=222)** Exploratory metrics take it a step further.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=225)** By combining your actionable metrics with exploratory metrics, you'll be able to dig deeper into an issue.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=231)** Exploratory metrics can help you make sense of different things that could be happening within your system.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=237)** Finally, we have reporting metrics.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=240)** These are best suited for dashboards rather than alerting.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=243)** For example, the number of signups to your product could be a reporting metric, which you view over periods of time to understand how your users are interacting with your service.
>
> **[4:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=254)** A metric could be actionable or exploratory depending on the context.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=258)** Deciding which requires understanding the system you're monitoring, but even more importantly, continuing to tune the metrics and alerts that you have and being flexible about deciding whether they should be alerted on or be available on a dashboard to aid investigation instead.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=274)** For example, there are cases where getting a CPU utilization alert is critical and actionable because you're running a standalone instance.
>
> **[4:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=283)** However, there are cases where you're running a cluster of instances that scale automatically, and the CPU utilization of individual instances doesn't exactly indicate an issue.
>
> **[4:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=294)** However, if an issue arises, having the CPU utilization metrics available on a dashboard for investigation could be an exploratory metric to explain why the health of your service has been degraded.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=307)** Next, you need to decide how best to visualize the metric.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=311)** When visualizing metrics, different charts can be used.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=314)** We have pie charts, time series, single starts, gauges, tables, and many others depending on the observability tooling you're using.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=323)** For example, as you can see on the screen, we have several represented panels and some are visualized as stats while others are visualized as a gauge.
>
> **[5:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=333)** To wrap up, we'll see what the characteristics of a good metric is.
>
> **[5:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=337)** Good metrics are understandable.
>
> **[5:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=340)** That is, their purpose and function are clear, and they also give insight into a specific system or product's characteristic.
>
> **[5:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=347)** They're actionable, meaning that they can spur your team to action and help guide how your team responds to incidents or issues within the system.
>
> **[5:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=356)** Aside from incidents, they can also drive improvements within the system.
>
> **[6:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=360)** They're also improvable.
>
> **[6:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=362)** Having metrics that can drive change means that we can improve on them as things go wrong.
>
> **[6:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=368)** They're created with a purpose in mind and ultimately can help us improve the experience of our users by making sure that they're within the right thresholds.
>
> **[6:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=377)** Finally, they're multidimensional.
>
> **[6:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=379)** One of the common things you'd come across with observability signals is tagging.
>
> **[6:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=384)** Tagging helps to add dimensions to your metric to help understand it.
>
> **[6:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=388)** A simple tag could be an environment tag indicating if the metric is a staging or production metric.
>
> **[6:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=394)** Adding meaningful tags to your metrics can help you isolate issues and areas of interest.
>
> **[6:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-the-right-metric?u=76281980&t=399)** For example, an e-commerce company could tag their metrics by country, meaning that they can analyze their sales or views by the countries that they're coming from.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (1), function (1), from. (1)
> **Env Vars:** cpu (4), sre (1), http (1)
> **Analogies:** for example (6)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Metrics in action using Mimir and Grafana Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=0)** - [Instructor] As I've mentioned, metrics may come out of the box depending on the software or language you're using.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=6)** A common way to find what metrics your service has would be reading through documentation.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=11)** For custom build applications, you can also instrument your service to emit custom metrics which are defined by you.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=19)** Again, this depends on the language in which your application is built and how you collect metrics and where you send them.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=25)** In the example on the screen, you can see how with instruments, a Node.js application to send metrics to Prometheus.
>
> **[0:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=33)** By following the documentation, you'll be able to instrument your own application accordingly as long as your observability metrics stack supports it.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=42)** Next, we're go into Grafana Cloud to interact with metrics from a sample service.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=47)** But before we do that, let's look at some of the instrumentation we've done to make this possible.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=54)** I'm making use of a Node.js application, so I'm going to be using the prompt client library to create an export my metrics to Prometheus.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=62)** To do so, on line 21, I create a register and then go ahead to collect the default metrics.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=69)** These are default Node.js metrics that Prometheus exposes.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=73)** On line 25, I'm also defining the labels that I would have tagged for each of my metrics.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=78)** This could be useful if I was collecting metrics from several services and I want to be able to separate them by each service.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=85)** On line 28, I'm defining a metrics endpoint, which is where we'll be able to interact with those metrics locally and also tell Prometheus to read our metrics from.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=96)** We've also talked about custom metrics, and so I'm going to be showing that in this video.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=100)** I'm making use of the pro client library again to create custom metrics on line 12 and 18 called product views and category views.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=109)** These metrics are counter metrics, which I'm adding labels to and I would increment as a product or category is viewed on my website.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=119)** After defining the metrics in my GET product endpoint, I'm incrementing the product views metric and also parsing the required labels to it.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=129)** This means that every time this endpoint is called, this metric will be incremented, and I can use that as a counter in Grafana.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=137)** Finally, to get these metrics sent to Grafana, I'm making use of the OpenTelemetry collector.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=142)** As you'll see, for my metrics pipeline, I've defined three things, which is my receiver called prometheus, my exporter called otlphttp, and the processor called batch.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=154)** We'll run through each of these to see what the definition looks like.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=159)** For my Prometheus receiver, I've defined a script config, which scrapes my services metrics from the host of Docker or internal output 8,000.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=169)** When a specific path is not defined, it assumes that the slash metrics endpoint is where it'll find the metrics, which is completely fine as that is what we've defined in our service.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=180)** For the exporter, we've defined OTLP HTTP.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=184)** We just points to the Grafana OTLP endpoint that's available on our Grafana instance.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=190)** And finally, for the processors, we've defined the batch processor.
>
> **[3:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=194)** We just tell the OpenTelemetry collector to send the metrics in batches.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=200)** On my website, I've done a few actions just to generate a few metrics.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=205)** If we visit slash metrics, we're able to see all the metrics that Prometheus is collecting.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=210)** Most of these are Prometheus metrics.
>
> **[3:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=213)** However, if we search for the metrics we created, we can see that they're available in the metrics endpoint.
>
> **[3:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=220)** You can see that product views has the labels that we've set on it of the products id, product name and price, as well as the value as each product is called, and same for the category.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=231)** Finally, when we go into Grafana, we can navigate to the explore tab using the side menu.
>
> **[3:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=237)** At the explore tab, we'll ensure that the Prometheus data source is selected, which is where our metrics are being sent to.
>
> **[4:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=244)** When you click on the metrics dropdown, you can use the Metrics Explorer to see the available metrics in Grafana.
>
> **[4:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=251)** As you can see at the top of the list is a custom metric, but this list is sorted by alphabetical order.
>
> **[4:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=258)** So if we search for views, we can see that both our custom metrics, product views and category views are created.
>
> **[4:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=266)** You'd also see that there are lots of Node.js metrics.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=269)** This is because Prometheus by default exports all of these metrics based on the config that we've set.
>
> **[4:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=275)** You can filter the metrics explorer by type, and so you can filter by your counters, gauge, histograms and summary, which is another type of metric available in Prometheus.
>
> **[4:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=287)** Back in the explore tab, I'm able to select the specific metric that I want and run a query.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=293)** Once I do that, Grafana gives me the values that my application is sending, and then I can do several operations on these metrics.
>
> **[5:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=301)** I can do an aggregation of the sum.
>
> **[5:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=304)** I can also use a range function of increase to find the total accounts of the metrics that I'm collecting.
>
> **[5:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=311)** As you can see, these sums up the entire metric value, but I can sum by each label.
>
> **[5:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=317)** For example, a product name, run the query, and that gives me a breakdown of each product and how many times they were viewed.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=327)** This is an example of one of the mathematical analytics that we looked at earlier in the course.
>
> **[5:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=333)** You can do different types of analytics based on the type of metric that you've collected.
>
> **[5:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=337)** For example, if you go back to the metrics explorer and find a histogram metric, one of the histogram metrics that Prometheus collects is the nodejs_gc_duration_seconds_bucket.
>
> **[5:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=349)** If I select this, Grafana automatically tells me to add an histogram quantile.
>
> **[5:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=355)** Once I do this, you can see that we're trying to find the 95th percentile latency, and if I run this query, we're going to be able to get the value for 95th percentile latency.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=367)** As we've mentioned before, interacting with custom metrics and default metrics are quite similar, especially when they're of the same type.
>
> **[6:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/metrics-in-action-using-mimir-and-grafana-cloud?u=76281980&t=374)** However, you can play around with the different types of metrics that you have, as well as the analysis that is available in the tooling that you're using.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5), node (4), make (1), docker (1)
> **Code Keywords:** finally, (3), this, (2), let (1), from. (1), type, (1)
> **Definitions:** is called (2), means that (1), is a  (1), is an  (1)
> **File Paths:** node.js (4)
> **Env Vars:** otlp (2), http (1)
> **UI Navigation:** click on (1), dropdown (1), select the (1)
> **Cross-References:** earlier in (1), go back to (1)
> **Analogies:** for example (2)


### 3. Tracing and Distributed Systems

#### Concepts of tracing and distributed systems
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=0)** - [Instructor] As the name implies, traces chart the path your request takes as it goes through different components in your infrastructure.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=8)** An example of this would be being able to visualize a request as it goes from the different functions within your applications to your database and back.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=17)** The outcome of this is understanding where your application spends the most time or fails in the event of an incident.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=25)** Traces can also be tagged with custom information that may be important to your business or product, which gives you a view into your user's experience, as each trace represents an actual user interaction.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=38)** Traces are made up of individual spans, which represent each hop your request makes.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=44)** When viewing a trace, you see a span for each function that was called, and also other spans for any infrastructure code outside of your service.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=54)** They're easy to interpret because of how they're visually represented.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=58)** All the spans collectively make up the trace, and you can also tell which spans are the most latent by the length of the base of the span, or the ones which errored out.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=69)** While metrics give you an aggregated view of performance and can indicate where there's an issue, drilling down from a metric to the traces that occurred within the same timeframe unlocks the ability to deeper understand what contributes to the metric behavior.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=85)** Because metrics can be tagged with more context, they're a good driver for generating business metrics.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=92)** With the right tooling, you should be able to search and analyze traces based on the tags you've set.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=98)** Since traces naturally hold data on latency, for example, using custom tags, you could see if the traces tagged with a certain location are more latent than the other.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=110)** Metrics generated from traces can then be used in similar ways as custom metrics, which we explored previously.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=117)** You can then query or visualize these metrics on a dashboard.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=121)** This just shows how much context you can extract from your traces and how metrics and traces can work hand in hand to improve your observability.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=130)** Depending on the volume of traffic your application receives, you could be generating many traces.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=136)** This could impact how much you pay your provider, or even how much storage you provision if you use open source tooling.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=143)** For this reason, sampling is introduced.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=146)** This takes only a portion of your requests, which you can then analyze.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=150)** If you're not sampling 100% of your volumes, there's no magic choice for what you should be sampling.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=156)** However, you can reiterate over your sampling strategy such that you're able to make meaning out of the tracing data that's available to you.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=165)** Your sampling strategy will depend on the observability software you use.
>
> **[2:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-tracing-and-distributed-systems?u=76281980&t=169)** On the screen, you can see different sampling configurations that would work with Grafana's tracing tool, Tempo.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** function (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Tracing in action using Tempo and Grafana Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=0)** - [Lecturer] For your application to emit traces, it has to be instrumented.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=4)** This differs depending on the programming language your code is written in, the tracing collector, as well as the tooling you use to visualize your traces.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=14)** Traces are usually collected via a tracing agent.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=18)** This could be vendor-agnostic like OpenTelemetry or vendor-specific, such as Datadog or Grafana Agents.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=25)** These agents then send the traces to our tooling, which is used to visualize and analyze the traces.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=31)** Again, this could be tooling like Grafana's Cloud or Open Source Tempo, or other vendors like Honeycomb, Datadog, or Elastic APM.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=41)** Traces are visualized as waterfall diagrams, making them easy to interpret.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=46)** A trace is made up of a Parent Trace and Child Spans.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=51)** The Parent Trace captures the entire request, while the Spans capture each hope the request has made within your infrastructure as well as any external requests made within the call.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=63)** Each span has its own latency, and can be visualized using the bars for each span.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=68)** The longer the bar, the higher the latency, or response time of that action.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=73)** This makes it easy to pinpoint where your request has spent the most time.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=78)** The response time of the entire trace is the sum of all the span response times.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=83)** Each trace is representative of a request received and processed by your service, and so it is a good insight into how your users perceive your services performance and availability.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=95)** In this video, we'll be interacting with tracing using Grafana Cloud.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=99)** But once again, let's take a look at some of the instrumentation that we've done to make this possible.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=106)** Using my Node.js service, I'm making use of the OpenTelemetry instrumentation to send my traces to Grafana Cloud.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=114)** I'm making use of automatic instrumentation libraries like the getNodeAutoInstrumentation to capture all the node actions going on in my service, HTTPInstrumentation and ExpressInstrumentation to capture my HTTP traces as well.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=128)** From line 21, I'm also using the requestHook to capture my request headers and add them as attributes to my span.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=136)** And finally, I have the MongoDBInstrumentation library as well.
>
> **[2:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=142)** After setting up my tracing instrumentation, I'm going to be exporting my traces using the OTLPTraceExporter function and sending them to the collector on port 4318.
>
> **[2:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=154)** Asides the default traces that you get with your auto instrumentation, you can also create custom spans and add attributes to them.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=163)** In my metrics endpoint, I'm creating a span called metrics and adding the attribute foo with the value bar to it.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=170)** We'll see how we're able to interact with this when we get to Grafana.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=174)** But just before we do that, let's take a look at our OpenTelemetry config.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=179)** In my OpenTelemetry config, I have a pipeline called traces, where I've defined my receiver, exporter, and processor, just like we did with metrics.
>
> **[3:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=188)** For the receiver, I have otlp, exporter, otlphttp, and processor as batch.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=195)** So let's take a look at what this configs mean.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=199)** For my otlp receiver, I have a http endpoint of 4318, which is where my tracing instrumentation is set up to send my traces to.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=210)** For the exporter on line 31, I'm making use of the same otlp Grafana endpoint.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=219)** And finally, for my processor, I'm making use of the batch processor, which tells OpenTelemetry to send the traces in batch.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=226)** Now we can go into Grafana Cloud to see how we can make use of these traces.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=232)** In Grafana Cloud, I'll navigate to the Explore menu once again.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=236)** This time, I'll ensure that the Tempo data source is selected, so that we can interact with our traces.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=242)** You can interact with traces using TraceQL or using the Search tab.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=247)** In the Search tab, I can select my Service Name and run the query, and this will give me the list of all the traces within my service.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=256)** I can filter this down by the Span Name, Duration, or Tags that I've set on the traces or spans.
>
> **[4:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=262)** When I select the Span drop-down, I can either filter by the default spans generated by instrumentation library, or as you can see here, I can also find the metrics span, which I created.
>
> **[4:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=275)** If I select this and run the query again, Grafana filters down to trace that contain spans with that Span Name.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=282)** Here you can see that we have the Span ID as well as the Span Name of metrics.
>
> **[4:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=287)** If I click on the Span ID, I'm able to see that specific span along with the list of other spans that occurred within the same requests.
>
> **[4:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=295)** You can see the metrics endpoints generated by HTTPInstrumentation as well as some of the middleware spans and file system spans, which are generated by the NodeAutoInstrumentation library.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=307)** Here, you can see the metrics span, which we created, and when we click on this, and look at the Span Attributes, we're able to see the attributes that we set of foo and bar.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=322)** If we return to the Explore tab, you'll see that we're also able to filter by the specific tag that we have.
>
> **[5:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=329)** So here we have foo and we have the bar value.
>
> **[5:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=332)** If we run this query again, we get a list of all the Trace IDs with spans containing the key value pairs, foo and bar, as their attributes.
>
> **[5:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=344)** Traces naturally hold data about latency, and so you can also filter by the duration of the traces or spans.
>
> **[5:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=351)** So here, if I select traces that are above 20 milliseconds and run my query, you can see that my traces are now filtered down to traces with 20 milliseconds and above.
>
> **[6:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=363)** This can be quite useful when you're trying to find long running processes.
>
> **[6:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=369)** Finally, you can also interact with traces using a Service Graph.
>
> **[6:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=372)** If I run the query, you're able to see information about the traces such as the Name of the trace, the Rate of requests, and the Duration.
>
> **[6:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=380)** You're also able to see a graphical representation of what is happening within your service from when the user calls your service to when it gets into the service, as well as the database calls that it's making, as well as some of the metrics indicating your request performance.
>
> **[6:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=397)** This can be very useful when your service is making requests to several backends and you want to be able to see where there's a problem, an error, or where latency is high.
>
> **[6:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=407)** Finally, one of the things that we discussed was being able to generate metrics from traces.
>
> **[6:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=413)** To see the metrics that Tempo has generated, we'll go back into the Prometheus data source.
>
> **[7:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=420)** Using the Metrics explorer, if we filter by trace, you're able to see some of the metrics that Grafana creates based on our traces.
>
> **[7:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=428)** This is important to note that this is not enabled by default on Grafana Cloud.
>
> **[7:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=433)** However, because I have the application observability module enabled on Grafana Cloud, it's generating the traces on my behalf.
>
> **[7:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=441)** If you want to do this without using the application observability module, you should reach out to Grafana Cloud Supports to enable this feature.
>
> **[7:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=449)** Interacting with metrics generated from traces, is similar to how we've seen when we interacted with our custom and default metrics.
>
> **[7:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=457)** If we select this metric, Grafana can already detect that this is a histogram metric, and so we can add the histogram content to it.
>
> **[7:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=467)** We can select which presenter we're interested in, but for now, we can leave it as the 95th percentile.
>
> **[7:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=473)** If I run the query, you're able to see the 95th percent latency for our spans.
>
> **[7:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=478)** These spans can also be filtered based on label.
>
> **[8:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=481)** For example, if you want to filter based on your status_code or you could filter based on the span_name, and that will give you the list of your endpoints such that you can find the individual latency for each endpoint.
>
> **[8:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=494)** Finally, metrics generated from trace's can be treated just like any metric.
>
> **[8:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=499)** You can add them on dashboards or even alerts on them as you would a regular metric.
>
> **[8:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/tracing-in-action-using-tempo-and-grafana-cloud?u=76281980&t=504)** This just shows you how the observability signals would work together to give you more insights into your service performance.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (5), let (3), module (2), function (1), this, (1)
> **CLI Commands:** find (3), make (2), node (2)
> **Analogies:** such as (2), just like (2), similar to (1), for example (1)
> **Code Identifiers:** getnodeautoinstrumentation (1), requesthook (1), status_code (1), span_name (1)
> **UI Navigation:** click on (2), navigate to (1), select the (1)
> **Env Vars:** apm (1), http (1)
> **Definitions:** is a  (2)
> **File Paths:** node.js (1)


### 4. Logging and Log Management

#### Concepts of logging and log management
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=0)** - [Instructor] Logging is quite a common concept when discussing observability and monitoring.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=4)** However, despite being quite popular, it is often implemented wrongly, becoming more of a burden than a useful piece of our stack.
>
> **[0:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=14)** Logs are text lines emitted from our services or infrastructure depicting events that have happened.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=20)** Default logs are often defined for different types of infrastructure.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=25)** For example, if you are using a proxy service, you'd often be able to enable its access logs, which tells you all the requests the proxy service has received.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=35)** When building applications, developers often tend to also output log lines, letting them know what points in their system was reached.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=44)** Logs are typically unstructured, leaving you with lines of text to decode.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=50)** The power of logs lies in being able to have them in a structured manner.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=54)** This makes it easier to extract useful information about your service or infrastructure.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=60)** JSON is the most common format for structured logs.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=63)** With JSON, you can define common fields you're interested in which achieves a few things.
>
> **[1:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=69)** Firstly, it makes your logs easier on the eyes.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=73)** It defines common facets by which you can analyze your logs by.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=77)** It could greatly impact the size of your logs since you can pick and choose which fields matter to you.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/concepts-of-logging-and-log-management?u=76281980&t=83)** And then depending on the logging tool you use, JSON is a commonly supported format, which means that you can also take advantage of some processing your tooling provides just by structuring your logs in JSON.

> [!info]- Semantic Content
>
> **Env Vars:** json (4)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Best practices for logging
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=0)** - [Instructor] Having structured logs is key to having usable and impactful logs.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=5)** There are few considerations to be mindful of when using logs.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=9)** Firstly, the content of your logs.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=12)** Logs hold the raw information passing through your application.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=16)** Depending on the industry you're in, there are certain data types like personal information, popularly known as PII, or financial information that should be protected data based on the regulations of those industries.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=31)** It is important that you're aware of what is required to prevent regulatory issues.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=37)** You should also consider the retention of your logs.
>
> **[0:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=40)** Logs are often defined on a lifecycle.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=43)** Again, depending on your use case, the lifecycle of your logs will differ.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=48)** The lifecycle of logs is often defined by how long you need them available for active query or use, or how long you need or are required to have them in archival.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=60)** As your logs grow and scale, this is an important one to keep an eye on as it impacts costs.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=66)** Having more logs available for active querying could be costly depending on the tooling you choose.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=71)** While having them archived and only retrieved when needed could be a way to also potentially save costs.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=79)** The purpose of your logs should be the driver for the tooling you choose.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=83)** Some tools are more suited for real-time logging, while others are better suited for analytics.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=89)** The use case for your logs is also a driver for cost.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=93)** If not taken into consideration, you may end up having tools that are not suited to your team's use case.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=99)** The purpose of your logs is also another driver of the lifecycle of your logs, which also impacts costs.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=107)** These are a few of the best practices and considerations you should have in mind when starting to explore logs, your logs should be structured.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=116)** Decide what's important, and reflect that in your logs.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=119)** Depending on the purpose of your logs, this could range from data about your infrastructure.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=123)** For example, the IP address of the instance your service is running on to data about your product.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=129)** For example, customer IDs for an e-commerce website.
>
> **[2:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=134)** Define the log levels.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=135)** This is a way of categorizing logs to depict a level of severity.
>
> **[2:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=140)** Some of the levels are error, warning, debug, info, and fatal.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=145)** By categorizing your structured logs based on their levels, you can leverage this for alerting and analytical purposes.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=153)** Provide clear and concise messages to describe what is happening in a log.
>
> **[2:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=158)** This helps whoever or whatever system consuming your logs to be able to take specific action because they also have full context on what the logs are saying.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=168)** Consider the several uses for your logs.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=170)** Logs are often used by developers for troubleshooting.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=173)** However, they can be used for other purposes like auditing or analytics.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/best-practices-for-logging?u=76281980&t=178)** As such, this should inform having logs that are fit for each purpose rather than simply for stepping through code.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (1), case, (1), case. (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Env Vars:** pii (1)
> **Warnings:** warning (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Log collection and application
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=0)** - [Instructor] Logs can be collected in different ways.
>
> **[0:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=3)** For services we use, we can often enable certain logging configurations that give us access to the services' default logs.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=11)** You can see what logs come out of the box for each software you use and decide if that will be efficient for your purpose.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=18)** For applications we build, it's usually up to the developer to define their logs.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=24)** The first thing to note is that depending on the programming language, there are usually logging frameworks that can be used.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=31)** These frameworks abstract and simplify the process of defining logs.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=36)** Now that we have a good idea of what logging is and its best practices, let's look at its applications.
>
> **[0:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=43)** In following best practices, we should be writing structured logs.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=47)** This means that we can leverage logging tools to analyze our logs based on the available fields.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=54)** For example, we could group logs by the level such as error logs.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=58)** Or for logs that contain business context, we could group logs by a certain tag.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=64)** By defining the phases that we would be interested in, log filtering and analysis is a good way to understand your service.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=72)** To build on that, certain tools also supports alerting on logs.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=76)** You could alert on the presence of a log message, the value of a specific field, or even the count of logs if that indicates a systemic issue.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=86)** Logs can also be used to generate metrics depending on the tooling you have.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=91)** As mentioned previously, you could generate a metric based on the count or the type of logs.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=96)** Another common use case is to use the start and end time fields in logs to calculate the latency of the task being logged.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=104)** As explored in this chapter, logs are a great way to get started with observability.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=109)** They're usually quite low effort to start.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-collection-and-application?u=76281980&t=112)** However, the ROI is quite impactful when done properly.

> [!info]- Semantic Content
>
> **Code Keywords:** abstract (1), let (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **Env Vars:** roi (1)
> **Speakers:** - [instructor] (1)

#### Log monitoring in action using Loki and Grafana Cloud
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=0)** - [Instructor] After learning so much about logging, let's look at Grafana Cloud to see how we can interact with our logs.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=6)** As usual, we'll take a look at the instrumentation to see how we're making this possible.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=11)** In my node.js service, I'm making use of the Winston Library to collect my logs.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=18)** In my Winston config, I'm instantiating a file log on line seven, which is sending my logs to a file name combined.log.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=28)** I also have functions defined, which receive a message or payload and create a log line, which is then sent to the file.
>
> **[0:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=36)** Throughout my service, I'm making use of this config to create my logs.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=41)** As you'll see in the metrics endpoint on line 40, I have a log response, which sends my response as well as the status code and the payload.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=52)** In the payload, I'm including the trace ID, which is what will help us link our logs to traces.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=56)** As we'll see when we get into Grafana.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=59)** To send my logs to Grafana, we're using the hotel collector as we use for metrics and traces in the otl collector I have a pipeline called Logs, which has receiver defined as file log exporter as OTLPHTTP, and processors as batch.
>
> **[1:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=75)** Let's take a look at what these configs are doing.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=79)** For my file log receiver, I'm letting you know the directory where my logs are being sent to.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=84)** I'm also making use of adjacent parser to make sure that my timestamp is properly formatted.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=90)** On line 31 I'm also making use of the OTLPHTTP exporter as defined for metrics and traces to send my logs to the OTLP Grafana endpoint.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=101)** And finally, on line 43 I'm making use of the batch processor to send my logs to Grafana in batches.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=108)** Now, let's go into Grafana Cloud to see how we can work with these logs.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=113)** In Grafana Cloud we'll make use of the menu to navigate the explore tab.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=118)** In the explore tab, I'll make sure that I'm selecting my low key data source for my logs.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=124)** Once that is done, I'm able to filter my logs by the labels.
>
> **[2:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=129)** In this case, because I'm sending them through the exporter, the parent label is the exporter with value of OTLP.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=136)** As you can see, Grafana already detects that my logs are in JSON and so it would ask me to add a JSON parser.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=143)** This is what we talked about when we mentioned that having your logs in JSON helps you take advantage of some of the processing that your observability tooling might offer.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=151)** If I click on this and run the query, it returns a list of the logs that are being generated by my service.
>
> **[2:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=159)** When I select on a specific log, you can see that it has already passed out the values based on my JSON key value pairs.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=167)** You can see here that I have my span ID, I have my trace ID as well, as well as my body, which I am sending in my log file.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=174)** I'm able to interact with my logs on this level, and I'm able to filter out my logs based on the attributes that I've set.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=181)** For example, I could filter only info logs by clicking on this value.
>
> **[3:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=187)** Once I've done that, Grafana automatically populates this filter for me, and I can run that to give me only info logs.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=195)** I'll get rid of this, and we can also go back to look at the information that we get with our logs.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=201)** As you can see from my logs, I'm also adding attributes like endpoints, which helps me to see the log for each endpoint in my service.
>
> **[3:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=210)** By adding the trace ID and span ID, I'm also able to connect my logs to my traces.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=215)** In this case, Grafana already gives me a data link, which I can click on to access my trace.
>
> **[3:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=222)** This filters down to the specific trace that is connected to this log, which can come in quite handy when navigating between traces and logs when you're debugging.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=231)** On that note, it's worth mentioning that in some observability tools, logs can also be used to generate metrics.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=238)** However, in Grafana, rather than generating metrics, you're able to alert on your logs just as you would a metric.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/log-monitoring-in-action-using-loki-and-grafana-cloud?u=76281980&t=245)** Again, this just shows you how connected the different observability signals are often being able to be transformed into one form or the other, which you can then use depending on your use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), finally, (1), this, (1), case. (1)
> **Env Vars:** json (4), otlphttp (2), otlp (2)
> **CLI Commands:** make (3), node (1)
> **Cross-References:** we talked about (1), we mentioned (1), go back to (1)
> **UI Navigation:** click on (2)
> **File Paths:** node.js (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 5. Events

#### Collecting system events
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=0)** - [Instructor] Events are often not talked about in the context of the pillars of observability.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=5)** However, they're an interesting piece of the puzzle.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=9)** Events are changes within or external to your system or infrastructure that could affect the availability or uptime of your service.
>
> **[0:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=18)** Because events can be so fundamental, they can give some insights into the behavior of your service, especially when the service is seemingly operating fine.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=28)** For example, an outage in your service could be caused by a deployment, which is a change event, or even by a restart of the infrastructure where your service is deployed.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=39)** Seeing what changes or events are caught in your system and correlating that with the other signals you're getting could very well be the missing piece of the puzzle in your exploration.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=49)** Depending on the observability tool you're using, there are different ways to collect and observe events.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/collecting-system-events?u=76281980&t=56)** This also depends on the events you're collecting and the infrastructure involved.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Event analysis and correlation
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=0)** - [Instructor] The way of collecting events would differ depending on the type of events that you're trying to collect.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=5)** It would also depend on the sort of integrations that are available on the observability tooling that you're using.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=11)** In some cases, you could depend on integrations, while in other cases you might depend on metrics to extract these events that are happening in your underlying infrastructure.
>
> **[0:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=21)** We go into Grafana Cloud.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=23)** We'll look at some of the ways that these events could be collected.
>
> **[0:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=26)** If I go into the menu and scroll down to connections in the infrastructure tab, you'll be able to add new integrations.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=35)** If, for example, you wanted to add an integration with your CI/CD pipeline, Grafana has a plugin for Jenkins, which you could use if Jenkins is your CI/CD tool.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=46)** Here, you can leverage some of the metrics found, for example, with the Jenkins run success total, every time a pipeline is successfully run and a deployments is done, you could use this metric to correlate your deployment with changes within your system.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=62)** Another option is to use metrics that you set up without an integration.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=67)** If we go into the explore tab and we select a metric, for example, I have my Docker metrics here, and I can select this container actions metric.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=77)** If I run this, you'll be able to see the different actions that are happening, such as when a container is started, a container is deleted, created, or if there are any changes within this container.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=89)** In this case, these are metrics that I'm collecting using Prometheus, but I can use this sort of metrics, which are not necessarily metrics that are measuring performance to show which events are happening within my system.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/event-analysis-and-correlation?u=76281980&t=102)** We'll delve into this a bit more in our next chapter where we cover infrastructure monitoring, and there you'll still have leveraged Prometheus and also Grafana Cloud integrations to collect some of these types of metrics.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), such as (1)
> **CLI Commands:** cd (2), docker (1)
> **Code Keywords:** if, (1), this, (1), case, (1)
> **Cross-References:** next chapter (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. Monitoring Techniques

#### Application performance monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=0)** - [Ibukun] Application performance monitoring, popularly known as APM, uses signals we've explored in a cohesive way to understand more about our application's behavior.
>
> **[0:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=12)** As we've seen so far in the course, the observability signals, metrics, logs, and traces are intertwined, and can be used to paint a picture of a systems health.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=22)** Application performance monitoring is usually mentioned in conjunction with monitoring backend applications.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=29)** This is typically done by measuring the performance of your individual API endpoints, and using that to measure your systems overall health.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=37)** In a lot of APM tools, an Apdex score is usually given to each service to determine its overall health.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=44)** This rates applications from zero to one with one being the highest.
>
> **[0:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=50)** The power of APM is usually that you can go from the overall system health to understanding the underlying functions or endpoints.
>
> **[0:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=58)** By applying the principles we've discussed, like proper tagging, APM is quite a powerful tool in the hands of engineers, especially when used properly.
>
> **[1:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=68)** You can get APM for your services by instrumenting them based on the language your service is written in and the observability tool you're using.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=76)** Each tool available on the market usually comes with documentation on how to instrument your code to enable APM.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=83)** Different vendors implement APM in different ways, but most observability vendors will have an APM product, which you can explore.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=92)** Now, let's look at how Grafana Cloud implements APM and how all the signals we've explored come together.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=99)** When you log into Grafana Cloud, we'll visit the menu and move down to the observability section.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=104)** In the observability section, you'll see the application option.
>
> **[1:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=108)** As you can see at the time of recording this video, application observability is still in preview.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=114)** However, it's mature enough for us to explore.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=118)** When you open this up, you'll get a view showing you the list of your services.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=123)** Most APM tools usually come with this sort of view where you can see the list of your service, the sort of services it is as well as a few metrics.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=132)** These metrics are typically the red metrics, which is the rate of requests, the error rate of your service as well as the duration, also known as latency.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=143)** When you open the service, you're able to see how all the metrics, traces, and logs come together.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=148)** So far in the course, whenever we've had to interact with our metrics, logs, or traces, we would usually be doing so from the explore tab, and we'd usually be switching between data sources to explore each signal.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=160)** However, with application observability, or APM, you can see how all of those come together.
>
> **[2:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=166)** In the overview tab, you're able to see your metrics, and then, when you navigate to the traces tab, you're able to see all the traces from your service.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=174)** And finally, you can see the logs as well.
>
> **[2:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=179)** You would also notice that as we switch between each tab, the time picker has stayed the same, meaning that we are seeing the metrics logs and traces within the same timeframe for our service.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=189)** You can also see our service map, which is similar to the trace service graph, which we saw when we were exploring Tempo.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=197)** Back in the overview tab, you'll notice that app observability also shows us our downstream and database dependencies.
>
> **[3:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=204)** We can also see upstream dependencies, which we don't have for this particular service as well as the operations that make up the service, like your guess or push request.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=212)** We can also drill down to each operation and app observability will give us a similar view like we've seen with the overall service, meaning that you're able to get your endpoint held as well as metrics about your endpoint, as if it was a service on its own.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=227)** You can also see the specific traces for that particular endpoint and drill down as necessary.
>
> **[3:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=233)** You may be wondering why APM or app observability, since so far in the course, we've actually interacted with our observability signals individually and even in some cases, we've been able to link them together.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=245)** First of all, you have improved user experience.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=249)** In the case of Grafana Cloud, app observability removes the need to switch between data sources, but instead, presents the service performance as a whole to a user, which is a more intuitive way for engineers to interact with their signals.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=263)** You also remove the need for context switching.
>
> **[4:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=266)** In Grafana's case, there is no need to switch between data sources.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=269)** However, in some cases, it could even mean removing the need to have your metrics logs and traces in different tools, which is even more overhead for engineering teams.
>
> **[4:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=279)** And finally, you have better observability KPIs, like meantime to detect and meantime to resolve because the information your team needs is quickly available to them to triage and resolve incidents.
>
> **[4:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=292)** This is not an exhaustive list of why you should use APM.
>
> **[4:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=295)** However, I'm hoping that in seeing the difference between how we've interacted with signals individually versus with APM, you'd be able to identify how it benefits your use case.
>
> **[5:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=307)** As I've mentioned, Grafana Cloud's app observability is fairly new, but I believe they will continue to improve on it.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=314)** There are other mature APM tools in the market, like Datadog, New Relic, Honeycomb, and Elastic APM, just to mention a few.
>
> **[5:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=323)** When implementing these, however, you should be mindful of the cost.
>
> **[5:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/application-performance-monitoring?u=76281980&t=327)** If you're particularly interested in Datadog, you should check out my course, Monitoring and Observability with Datadog, here on LinkedIn Learning.

> [!info]- Semantic Content
>
> **Env Vars:** apm (16), api (1)
> **Code Keywords:** switch (3), finally, (2), let (1), implements (1), case, (1)
> **Definitions:** known as (2), is a  (1)
> **UI Navigation:** open the (1), navigate to (1)
> **Analogies:** picture (1), similar to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [ibukun] (1)

#### Synthetics monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=0)** - [Instructor] Synthetic monitoring serves as a form of black box monitoring, where you're checking that when your API endpoint receives a specific input, it emits unexpected output.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=11)** The conditions you could be checking for are a specific status code, for example, a 200 HTTP response, a specific message, which could be a text or a JSON payload, or the completion time of your request, such as saying it should be completed in less than five milliseconds.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=29)** Synthetic monitoring is often used to check that an endpoint is responding as expected and is often used to measure uptime with the assumption that whenever the output isn't as expected, the system is also not functioning properly.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=42)** The results of a synthetic monitor could also be alerted on when there's a failure, since it's often a clear indication that the system isn't performing as intended.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=51)** Now, let's go into Grafana Cloud to see how this works.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=56)** When you visit Grafana Cloud, we'll go to the menu and the Observability section to find Synthetics.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=63)** Here, you can either create a check or view existing checks.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=67)** I already created one for this demo, so I'm going to view the existing checks.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=71)** As you can see, I have a synthetics demo, which is pinging the [google.com](https://google.com) website.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=77)** Let's edit this to see how we've set this up.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=79)** After defining the job name, you can give it a target.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=83)** If your endpoint or your website is expecting query parameters, you can also pass those in.
>
> **[1:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=88)** Next, you have the option to choose which location you want this test to be run from.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=93)** This could be a very good way to test your latency per location.
>
> **[1:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=96)** So for example, if your website is hosted in the Frankfurt region on AWS, you might want to test from several locations depending on where your customers are.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=105)** So I could test from Tokyo, Oregon, Frankfurt, and that would help you see what the latency experience is like from your customers from those regions.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=113)** I'll add a different location just so that we can see how that runs.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=117)** Next, you can set up the frequency of the run, so how often should the check run and how long before the check times out.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=123)** And then finally, you can publish a set of metrics.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=126)** Grafana gives you a summary of the number of checks per month, active series and data points so that you can use this to determine whether it's within the limits that you have for your accounts.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=138)** You can also set up the HTTP request method by stating whether it's a GET endpoint, PUT, POST, DELETE, and so on.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=146)** And if your endpoint is expecting a request, you can set that in as well, as well as other HTTP settings.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=152)** You can set up the TLS config, authentication, validation, as well as advanced options, such as the IP version or other cache settings.
>
> **[2:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=161)** And finally, you can alert on this synthetic test by setting up an alert and sensitivity.
>
> **[2:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=168)** If I test this, Grafana would run the test from the two locations that I've specified, so London and Tokyo, and tell us whether it's successful or not.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=178)** We can see that our tests are success, and you can also see these conditions by which it's successful alongside some logs.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=184)** When I close this and save the test, Grafana gives me a summary of what my test is about.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=189)** I can see the name, the endpoint that I'm testing, the type of synthetic test I have, whether it's enabled, the frequency, and so on and so forth.
>
> **[3:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=198)** More importantly, I can see metrics like my uptime, my reachability, and my latency.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=203)** So this is a good way to measure uptime of your service or your website.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=207)** Grafana also gives you a dashboard, so if I click on this dashboard, it gives me a summary of my test.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=212)** You can see a map showing any errors that come up.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=215)** You can also see my error rate, as well as the latency breakdown.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=219)** And if any errors come up, you're going to be able to see the logs here as well.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=224)** Back in the Synthetics tab, let's just simulate creating a check.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=228)** You can see that there are several types of checks that you can run.
>
> **[3:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=231)** For example, a ping check, a DNS resolve or a trace route, or TCP check.
>
> **[3:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=236)** You can use any of these depending on your use case and what you're trying to achieve.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/synthetics-monitoring?u=76281980&t=242)** So finally, just to wrap up, synthetics monitoring is a good way to get your uptime, reachability, and latency about your service by running dummy checks to ensure that it's up and running.

> [!info]- Semantic Content
>
> **Env Vars:** http (3), api (1), json (1), aws (1), put (1)
> **Code Keywords:** let (3), finally, (3), pass (1), from. (1), delete (1)
> **Analogies:** for example (3), such as (2)
> **Prerequisites:** set up (3)
> **CLI Commands:** find (1), aws (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (2)
> **URLs:** [google.com](https://google.com) (1)

#### Infrastructure monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=0)** - [Instructor] Infrastructure monitoring is one of the most popular forms of monitoring.
>
> **[0:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=4)** This is because before the advent of APM and other forms of monitoring, there were established ways of monitoring infrastructure such as VMs or instances, which have been around for a while.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=16)** Infrastructure monitoring measures the performance of your application's underlying infrastructure resources.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=22)** Common metrics for infrastructure monitoring are CPU utilization, memory utilization, and disc utilization.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=32)** This form of monitoring ensures that your infrastructure has sufficient resources to run efficiently.
>
> **[0:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=38)** When infrastructure monitoring is mentioned, it is usually for VMs, or virtual instances.
>
> **[0:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=44)** However, depending on the type of infrastructure your software uses, there are different metrics to measure performance.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=51)** For example, we can measure metrics such as CPU, disc, and memory for a database.
>
> **[0:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=57)** However, databases have other metrics specific to them that also measure performance.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=63)** When it comes to infrastructure metrics, you need to understand what default metrics come with the infrastructure you're using and decide which of them is critical for your service and measure them.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=73)** This can be used in conjunction with the default CPU, memory, and disc metrics.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=79)** Infrastructure metrics can be collected from your infrastructure or enabled using integrations on your observability tooling.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=87)** Let's see how we can implement both with Docker.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=91)** I'm running Grafana Mimir on my computer and using that to script my Docker metrics.
>
> **[1:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=97)** As you can see, I have a script config under which I have a Docker job.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=102)** Under the Docker job, I've set a target where it should script the metrics from, which is where my Docker desktop is exposing my metrics.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=109)** That is host.Docker.internal on port 9323.
>
> **[1:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=114)** When we come into Grafana Cloud, we can navigate to the Explore tab.
>
> **[1:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=119)** In the Explore tab, I'll ensure that my Prometheus data source is selected.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=123)** There, I can search for the metrics from my Docker engine by searching engine, and here you can see all of the metrics that Docker desktop is sending to Grafana.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=135)** If I click on any of the metrics and run the query, it'll give me the results based on what Docker is sending to Grafana Cloud.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=143)** If we put this into table form, you'll see that the OS is Docker Desktop, which is where I'm sending these metrics from.
>
> **[2:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=150)** This is one way that you can monitor your infrastructure.
>
> **[2:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=152)** However, observability tools usually come with integrations that you can enable, which give you a ready set of metrics and sometimes even dashboards that you can monitor.
>
> **[2:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=164)** If we go into the menu again and go to Connections, we can find the infrastructure tab.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=170)** You'll see that I already have Docker Desktops set up.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=173)** If we click on this, you'll see that Grafana gives me the configuration details, which is how I was able to set up Docker Desktop to send metrics to Grafana.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=181)** You would also see that there's a list of metrics that the integration comes with by default, and you can also see that there are dashboards that it comes with as well.
>
> **[3:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=190)** If I click on this dashboard, you'll see that Grafana Cloud has already created a number of dashboards for me to interact with.
>
> **[3:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=197)** When I go to the Docker Overview dashboard, you'll see that all of this is enabled just by setting up the integration.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=205)** This is a quick way to get up and running with your infrastructure and have data at your fingertips by taking advantage of infrastructure integrations that your observability tooling provides.
>
> **[3:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=216)** Let's go back into the infrastructure tab to see other integrations that are available.
>
> **[3:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=221)** When you click on the Add new integration button, you'll get a list of different types of infrastructure that you can integrate with.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=228)** Again, all you need to do is to click on the one that you're interested in, follow the configuration details, and explore the different things that that particular integration comes with.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=238)** You'd be able to see the metrics typically.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/infrastructure-monitoring?u=76281980&t=240)** In this case, you can also see alerts that it will come with by default, just by enabling this integration.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (13), find (1)
> **Code Keywords:** let (2), default, (2), while. (1), from, (1), from. (1)
> **UI Navigation:** click on (5), go to (2), navigate to (1)
> **Env Vars:** cpu (3), apm (1)
> **Tools:** docker desktop (4)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** set up (2)
> **Ports:** port 9323 (1)

#### Product monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=0)** - [Instructor] Throughout this course, we've talked about the importance of customizing your observability signals.
>
> **[0:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=6)** Product monitoring leverages custom metrics, logs and traces to measure things that are important or peculiar to your product.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=16)** For example, an e-commerce store owner could care about the number of sales they make in a day, or a FinTech could be interested in monitoring the reliability of its partners when processing payment transactions.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=31)** These sort of data are usually custom to the product that's been built, and so we require you to customize your observability signals.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=39)** We've explored different aspects of observability that can come together for product monitoring, such as custom metrics, traces with custom attributes and log attributes.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=52)** All the factors we've discussed about choosing the right metrics still come into play in product metrics, as you want to be sure that you're measuring the right thing and capturing the data you need in the best way possible.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=64)** Instrumenting product metrics can be done by following the documentation of the observability tooling you're working with, and you can also refer to previous videos to see how we did it in this course.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=76)** You will also have to use the relevant product tags and attributes when instrumenting the other observability signals, such as traces and logs.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=85)** You can then use these tags and attributes to analyze and dissect your observability data to get the product context.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/product-monitoring?u=76281980&t=92)** To explore these options, you can go back to our previous chapters where we discuss these topics.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Code Keywords:** require (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Other monitoring techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=0)** - [Instructor] We've explored the pillars of observability and seen how they can be used to power different monitoring techniques.
>
> **[0:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=7)** There are so many facets to monitoring and observability, and the list continues to grow as software becomes more and more sophisticated.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=15)** That being said, I'd like to run through a few of the monitoring techniques that we haven't covered in this course so far.
>
> **[0:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=22)** However, I'll point out that they will typically follow the same pattern we've seen so far; that is your software or infrastructure is instrumented or configured to send the necessary signals, and you can instrument a collector or agent to process and send these signals to the appropriate destinations, which then become useful to implement the monitoring techniques you're interested in.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=47)** The first monitoring technique we'll discuss in this chapter is profiling.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=51)** Profiling refers to the practice of collecting and analyzing data about the performance and behavior of software applications or systems.
>
> **[1:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=60)** This involves tracking various metrics such as CPU and memory usage, response times and resource utilization to create a detailed profile of how the application or system behaves under different conditions.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=74)** Observability profiling helps identify performance bottlenecks, resource inefficiencies, and areas for optimization, enabling developers and operators to enhance the reliability, efficiency, and scalability of their software.
>
> **[1:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=90)** It is particularly valuable for troubleshooting issues, improving system performance, and ensuring the smooth operation of complex distributed applications in environments like cloud computing and microservice architectures.
>
> **[1:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=105)** Techniques like APM and profiling are suited for backend services.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=109)** However, frontend monitoring also has its own monitoring technique called Real User Monitoring.
>
> **[1:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=115)** RUM collects information on the users of your apps and the actions they perform on your frontend application.
>
> **[2:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=121)** This serves as a way to measure your user's experience as you're able to get information like the pages they visit, the location they use your application from, and the devices they use.
>
> **[2:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=133)** Apart from getting metadata about your users, frontend metrics are also collected to measure your frontend performance and drive improvements.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=143)** Next, we have network monitoring, which is the ongoing process of observing and analyzing a computer's network performance, availability, and security.
>
> **[2:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=153)** It involves tracking metrics like bandwidth utilization, latency and packet loss, ensuring devices and services are operational, and detecting and responding to security threats.
>
> **[2:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=165)** Network monitoring tools generate alerts, provide historical data analysis, and often integrates with other IT systems.
>
> **[2:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=174)** This practice helps maintain a stable and efficient network infrastructure, reducing downtime, optimizing resource utilization, and it's particularly helpful for debugging beyond application performance, but also how distributed systems will interact over the network.
>
> **[3:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=191)** The last technic we'll discuss is security monitoring.
>
> **[3:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=195)** Security monitoring is the continuous process of observing and analyzing a computer network or system for signs of potential security threats or incidents.
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=205)** It leverages network monitoring, system logs, and user activities to detect anomalies or suspicious behavior that may indicate cyber attacks, unauthorized access, or data breaches.
>
> **[3:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=217)** Security monitoring is essential for protecting sensitive data and ensuring compliance with security policies and regulations and preventing or mitigating security breaches.
>
> **[3:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=229)** Its use cases include real-time threat detection, incident response and forensic analysis to identify the root causes of security incidents and improve overall cybersecurity posture.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=242)** There are also others like database performance monitoring, cloud monitoring, compliance monitoring and so on.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=248)** As I mentioned, the principles remain the same, and you can adopt them as needed for your service or products.
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/other-monitoring-techniques?u=76281980&t=255)** Just be sure to refer to the documentation for the observability tool that you're using.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (1), apm (1), rum (1)
> **Code Keywords:** from, (1)
> **Documentation:** the documentation (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 7. Utilizing Observability Signals

#### Dashboards and visualization
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=0)** - [Instructor] Dashboards are a common way to group and view different observability signals.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=5)** Creating meaningful dashboards can make a difference in a team's strategizing process.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=11)** Signals on a dashboard are grouped logically based on the story its creator is trying to tell.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=17)** How well a dashboard is created will determine how easy and intuitive it's to use.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=23)** There are a few things to keep in mind when creating dashboards.
>
> **[0:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=27)** First of all, you should have clear titles and descriptions.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=31)** You should keep in mind that your dashboard may be used by other people aside from you.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=35)** Making sure your dashboard title clearly depicts the purpose of the dashboard will make you easy to discover.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=42)** Also, having good descriptions on the dashboard would help people navigate your dashboard easily.
>
> **[0:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=48)** In Grafana Cloud, I've created this dashboard for us to walk through as I explain the dashboard best practices.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=55)** First of all, if we click on the Dashboard settings button, you can see my dashboard title and the description.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=62)** My dashboard title is in indicative of the service in question and in the description you can see what information is available on the dashboard as well.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=71)** So you can see that my dashboard includes my application health, infrastructure health, and product health.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=78)** When I close this, the first rule on my dashboard is also a documentation rule.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=83)** This provides a guide on how to use this dashboard.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=86)** It tells you what metrics are available for application health, infrastructure health, as well as product health.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=92)** This would make it easy for anyone coming to this dashboard to use and understand.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=99)** Next, you should group your dashboard panels according to their use.
>
> **[1:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=103)** When creating dashboards, panels that show data about a common subject should be grouped together.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=109)** This makes it easy to navigate the dashboard.
>
> **[1:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=112)** By making use of dashboard artifacts like rules, you'll be able to group data such that it's easy to tell what data you're looking at as you navigate the dashboards.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=123)** On my dashboard, I'm making use of rules to group my data.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=127)** I have my Documentation rule, which contains my dashboard guide.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=132)** I have my Application Health rule, which contains my application metrics and application logs.
>
> **[2:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=137)** I have my Infrastructure Health, which contains my DB metrics, and I have my Product Health, which contains my custom metrics.
>
> **[2:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=145)** When coming to this dashboard, it's going to be easy for anyone to navigate the dashboard, given that the data is well segmented and documented.
>
> **[2:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=155)** Next, you should keep your dashboards short and easy on the eye.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=160)** Where possible, keep your dashboards short and sweet.
>
> **[2:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=163)** This prevents an overload of information and helps you communicate your message as optimally as possible while making sure you can hold your user's attention without necessarily overwhelming them.
>
> **[2:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=177)** Making use of rules would make it easy for any user to take in the data that I have on my dashboard, and even with the use of rules, I've made sure to keep it as short as possible so that the information on this dashboard is not too overwhelming.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=192)** Finally, you should use thoughtful panels when creating dashboards.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=196)** The same data can also be represented using different panel types.
>
> **[3:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=200)** For example, you could represent the same data on a table or on a pie chart.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=206)** However, when selecting what panel type to use, you should be mindful of what tells the story at first glance.
>
> **[3:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=214)** In Grafana Cloud dashboards, you can add several types of panels.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=218)** You do so by adding a visualization and selecting from the different types of visualizations that are available.
>
> **[3:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=226)** I would advise that you take a look at several types when trying to visualize your data and seeing which one paints the best picture of the story that you're trying to tell with your data.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/dashboards-and-visualization?u=76281980&t=238)** On that note, it's important that you know that the visualizations that would be available to you would largely be dependent on the type of observability tooling that you're using, so feel free to play around with the different ones available to you and see which one works best for you.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** this, (1), finally, (1)
> **Analogies:** for example (1), picture (1)
> **Warnings:** keep in mind (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Monitoring and alerting
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=0)** - [Instructor] The observability signals we've been discussing throughout this course can be rendered irrelevant if we cannot proactively act on them.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=8)** Alerting is one of the ways we can rely on the signals we collect without being attached to dashboards 24/7.
>
> **[0:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=15)** While dashboards are great, we need to be able to step away from our computers knowing that our systems will alert us when there's an issue.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=23)** By alerting, we are examining the signals we've collected and deciding what thresholds indicate that the system is working as expected or not.
>
> **[0:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=32)** For example, I could set a threshold on the latency of a specific endpoint.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=39)** Observability platforms will often come with the ability to create alerts, and the default method of propagating these alerts are emails.
>
> **[0:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=47)** There are also integrations that exist, like Slack or Microsoft Teams, so that your teams are alerted where they primarily work.
>
> **[0:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=56)** Now, let's go into Grafana Cloud to see how alerting works.
>
> **[1:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=62)** When we log into Grafana Cloud, we'll navigate to the Alerting menu.
>
> **[1:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=67)** When we click on this, we'll click on Manage alert rules to see some of the alerts I've already created.
>
> **[1:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=74)** I've categorized them into my application alerts and my infrastructure alerts.
>
> **[1:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=80)** To take a look at the application one, we'll click on the dropdown and click on the Edit button.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=86)** Here, you'll see the different things you need to configure to set up your alerts.
>
> **[1:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=91)** First is the alert name.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=93)** You should give this a name that's easily understandable to anyone who reads it.
>
> **[1:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=98)** So here, I have Trace Latency Get Products because I'm alerting on the latency of my traces for the Get Products endpoints.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=107)** Next, you need to define your query and alert condition.
>
> **[1:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=111)** In this section, for Grafana specifically, you can pick what data source you want to make use of.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=117)** For this specific alert, I'm using my Prometheus data source because I'm using a metric.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=123)** However, you can also use your logs data source, as well as other data sources that are available in Grafana Cloud.
>
> **[2:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=130)** This would mean that you can alert on your logs as well, but in this case, I'm making use of a metric.
>
> **[2:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=136)** As you can see here, I'm using the traces_spanmetrics_latency_bucket, which is a metric that's generated based on the traces that my application is sending.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=148)** Next, I have my span_name, which is the GET product endpoint.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=151)** And then I have my Histogram quantile, which is calculating the 95th percent latency of my endpoints.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=160)** When I scroll down, I can also set a threshold for this metric, so here, if my input is above three milliseconds, my alert should trigger.
>
> **[2:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=171)** As we continue to scroll down, I can set other parameters for this alert, like what folder it should be in or how it should react if there is no data or if there's an execution error.
>
> **[3:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=184)** I can also add annotations, like the summary or description, which are optional, and then I can add a Runbook URL, which is a URL that contains instructions on what to do or how to resolve this alert when it triggers.
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=199)** This could be very important when you're creating alerts that will be responded to by other people on your team.
>
> **[3:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=206)** As you can see here, you can add custom annotations or also link dashboards.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=211)** In this case, I could probably link the dashboard that we looked at earlier, which is my Best Bags Performance Dashboard.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=218)** I can link the request latency panel since that is what we are alerting on in this case, and click on Confirm.
>
> **[3:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=224)** So that when my alert is triggered, this panel also shows up to help the person who is triaging or who has received the alert.
>
> **[3:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=232)** Finally, we can configure notifications, which is where alerts differ from dashboards, as you'll be alerted when something happens rather than babysitting and watching a dashboard 24/7.
>
> **[4:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=243)** If I click on Preview routing, it shows me where these alerts will be sent to.
>
> **[4:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=248)** In this case, it's using my default policy, which is delivered to this Grafana default email contact points.
>
> **[4:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=255)** When I click on See details, I would also click on this URL to look at this contact point and see what has been configured.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=263)** For the grafana-default-email contact point, I've defined a Grafana OnCall integration.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=269)** This would make use of Grafana OnCall to place phone calls to anyone who is configured to receive this alert on this contact point.
>
> **[4:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=276)** However, I can also add contact points like emails and Slack.
>
> **[4:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=282)** As I mentioned earlier.
>
> **[4:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=285)** As you can see from this list, there are several types of contact points that you can set up depending on your use case.
>
> **[4:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/monitoring-and-alerting?u=76281980&t=291)** Again, it would be beneficial for you to go through the integrations that your observability tooling provides so that you can decide which is best for your use case.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (8), scroll down (2), navigate to (1), dropdown (1)
> **Code Keywords:** case, (4), case. (2), let (1), this, (1), continue (1)
> **Prerequisites:** configure (2), set up (2)
> **Env Vars:** url (3)
> **CLI Commands:** make (2)
> **Code Identifiers:** traces_spanmetrics_latency_bucket (1), span_name (1)
> **Tools:** slack (2)
> **Definitions:** is a  (2)

#### SLIs, SLOs, SLAs
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=0)** - [Instructor] The concepts of SLIs, and SLOs are first becoming a core part of SRE, and how we measure system uptime and availability.
>
> **[0:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=9)** SLIs, SLOs and SLAs are based on default software metrics, custom metrics or even metrics generated from other signals like traces or logs.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=19)** Generally, they help you capture, and react to the most user impacting events that occur within your system so as to maintain a high level of user experience.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=28)** Service level indicators or SLI are key metrics that measure system performance.
>
> **[0:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=34)** While services often have many metrics, SLI are supposed to be the most critical, and most customer impacting.
>
> **[0:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=41)** The latency or error rate of a service directly impacts how a user experiences your system and can be part of the SLIs that contribute to how you measure your system's availability.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=52)** A service level agreement is the agreement between you and your users on the level of availability you can provide.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=59)** You might be familiar with AWS's Service Level Agreement or SLE, which is nine nines.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=66)** And finally, service level objectives or SLOs are the availability targets for your service.
>
> **[1:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=72)** SLOs are typically calculated using a standard formula, which is successful events over total events times a hundred.
>
> **[1:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=79)** This finds the ratio of good events that happen in your service.
>
> **[1:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=83)** For example, if we're looking at HTTP requests, we could categorize good events by requests that return to a hundred status codes, and use that to calculate our SLOs.
>
> **[1:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=93)** SLOs are the internal version of an SLE, and are usually set to a higher number internally.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=99)** This holds engineering teams to higher standards.
>
> **[1:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=102)** What gives room for errors so that the SLAs can still be met.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=107)** In essence, if your external SLA is 99.99, your internal SLO could be 99.999 with the extra nine being a buffer to give some room for failure.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=118)** SLOs and SLAs could be set based on different factors like third party dependencies, cost and user impact.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=126)** For example, if it'll cost significantly more for a service to have an SLO of five nines instead of four, but not significantly improve user retention or performance, then cost can be a factor in determining a lower SLO, which is cheaper for the organization, but still optimal enough to ensure user satisfaction.
>
> **[2:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=146)** When SLOs are sets, the remainder out of a hundred is what we call an error budget.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=151)** A service with an SLO of 90% has an error budget of 10%.
>
> **[2:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=156)** In practical terms, it means it has a daily allowance of two hours and 24 minutes of downtime, monthly downtime allowance of three days, one hour, two minutes and 54 seconds, and yearly downtime allowance of 36 days, 12 hours, 34 months and 55 seconds.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=175)** You can use any availability calculator to calculate this.
>
> **[3:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=180)** This means that a service within 90% SLO must not breach its set SLAs for more than this alerted error budget.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=189)** The benefits of having SLOs, SLAs, and error budgets is that, you can quantitatively measure your user's experience, and streamline incident response to incidents that impact user experience.
>
> **[3:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=201)** This can be a relief for engineering teams who are traditionally alerted for every single metric rather than only for actionable metrics.
>
> **[3:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=208)** That impacts your users.
>
> **[3:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=211)** By also being mindful of error budgets and using them wisely, the team is able to innovate, and take risks when they have higher error budgets, but then focus on reliability tasks when the error budgets are getting spent.
>
> **[3:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=225)** This can help address technical debts as well.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=228)** Overall, your services and users are better for it when SLIs, SLOs, and error budgets are well-defined, and are adhere to.
>
> **[3:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=238)** Some observability vendors have SLO products.
>
> **[4:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=240)** However, you can also create them yourself, and alert on them.
>
> **[4:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=245)** Let's go into Grafana Cloud to see how this is done.
>
> **[4:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=249)** When we log into Grafana Cloud, on the menu under Alert and IRM, you'll find the SLO product.
>
> **[4:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=256)** If we click on this, we'll see that we get a preview dashboard, and I already have an SLO set up.
>
> **[4:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=263)** The SLO feature is in preview, but it's mature enough for us to interact with, so let's see how that works.
>
> **[4:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=269)** If I edit this, you'll be able to see what is necessary to create the SLO.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=274)** First of all, you have the name and description, which I named based on the metric that I'm using for this SLO.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=281)** Next, you have the service level indicator.
>
> **[4:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=284)** If we edit this section, you'll see how this was set up.
>
> **[4:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=288)** To define your service level indicator, you select a timeframe over which to evaluate the SLOs.
>
> **[4:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=293)** So for example, you can have 28, 30 days for a month.
>
> **[4:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=296)** You could have 90 days for a quarter, just depending on how you want to evaluate your SLO.
>
> **[5:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=303)** To start querying, you can either select a ratio SLI, which uses the default SLO calculation, which finds the ratio of successful events to total events.
>
> **[5:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=312)** Or you can choose the advanced option to create your own query.
>
> **[5:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=315)** In this case, I've gone with the ratio making use of the default calculation.
>
> **[5:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=319)** Here you can see that I'm indicating my success metric and my total metric.
>
> **[5:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=324)** For my success metric, I'm filtering by all the requests that have a code of 200 since that would indicate that they're successful.
>
> **[5:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=332)** And for my total metric, I don't have any filter, so this covers requests that either have 200 or other HTTP response codes.
>
> **[5:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=339)** I'm grouping by job in this case, and I can run the query to see that this works properly.
>
> **[5:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=345)** Once that is done, you'll see how the SLO is calculated.
>
> **[5:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=348)** You'll see that it gets the rate of successful events compared to the total events, and it uses this to calculate my SLO.
>
> **[5:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=355)** In this case, the value is one, meaning that I have a hundred percent uptime based on this particular metric.
>
> **[6:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=363)** Next, I can set the targets on error budgets.
>
> **[6:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=366)** This is where you set your SLO.
>
> **[6:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=368)** As we mentioned, an example would be AWS's nine nine, but in this case, I'm setting a target of 99.5, which gives me an error budget of 0.5.
>
> **[6:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=378)** Here you can see my remaining error budgets, which is a 100% because so far, all of my requests have been successful.
>
> **[6:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=386)** To make a quick note, if you go back into the SLI section, I should point out that what you set up as your success metric or total metric is completely up to you.
>
> **[6:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=394)** In this case, I'm using this from HTTP metric handler request, but you could set this up based on your own service or the infrastructure that you're monitoring.
>
> **[6:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=404)** Going back to where we were, we can then add a name and a description.
>
> **[6:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=408)** Here this is already set up, so I'm going to click on add SLO Alert rules.
>
> **[6:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=412)** In this case, Grafana gives you the option to set a fast burn alert rate, and a slow burn alert rate.
>
> **[6:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=418)** Here, it just checks the rate at which your error budget is being burned through, and then it alerts you based on that.
>
> **[7:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=426)** This is one of the advantages of using an SLO product because you have this sort of alert set up by default.
>
> **[7:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=433)** And finally, we can review the SLOs.
>
> **[7:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=437)** Everything looks good, so I'm going to save this.
>
> **[7:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=441)** Once we've saved this, we can take a look at the dashboard that Grafana provides.
>
> **[7:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=445)** On this dashboard, you can see a summary of details about the SLO that we've created.
>
> **[7:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=449)** You see the time window, the SLO itself, the current value, which is 100% meaning that we're doing great.
>
> **[7:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=456)** You can see whether the alert is in okay states, and if it gets breached, that will be reflected on the dashboard.
>
> **[7:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=461)** And you can also see information about our error budgets, and our error budgets bond rates.
>
> **[7:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=466)** So far it looks like we're doing good, but if anything went wrong, we'll be alerted on this SLO.
>
> **[7:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/slis-slos-slas?u=76281980&t=472)** Making use of metrics that reflects your user experience would come in very handy in this process because you're sure that you're staying within the required levels of your SLA, and if anything goes wrong, you'll be alerted on this, and you can act appropriately.

> [!info]- Semantic Content
>
> **Env Vars:** slo (21), sli (4), http (3), aws (2), sle (2)
> **Code Keywords:** case, (6), this, (4), finally, (2), this. (2), let (2)
> **Prerequisites:** set up (5)
> **CLI Commands:** aws (2), find (1), make (1)
> **Versions:** 99.99 (1), 99.999 (1), 99.5 (1), 0.5 (1)
> **Analogies:** for example (3)
> **UI Navigation:** click on (2)
> **Definitions:** means that (1), is a  (1)

#### Incident management
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=0)** - [Ibukun] Incident response is often where observability carries the biggest weight.
>
> **[0:05](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=5)** The idea behind understanding both the knowns and unknowns about your system becomes even more critical when things are going wrong.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=13)** Defining an incident response process is simply being prepared to use the signals and data you have optimally to reduce the impact of downtime and outages.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=23)** To design an incident response process, you should take into consideration the following.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=29)** The incident response team.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=31)** There are several roles to be played when it comes to incident management.
>
> **[0:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=35)** These roles include the incident manager who often leads the incident, liaisons who handle communications, and subject matter experts who understand the domain and can resolve the incidents.
>
> **[0:45](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=45)** You should also consider the incident response process.
>
> **[0:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=49)** These are laid down processes for your team to follow when resolving an incident.
>
> **[0:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=53)** These include things like when and where to communicate or collaborate on the incident, where to document incidents, and how to categorize and respond to the different incident categories.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=64)** Educating your team on this can make or break your incident response culture at your organization.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=70)** And finally, incident remediation.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=73)** This is where your observability signals and tooling come together.
>
> **[1:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=77)** By being equipped with the information that's needed to triage and diagnose the incident at hand, your team can efficiently respond to incidents.
>
> **[1:26](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=86)** Incident response goes through the following phases.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=89)** The first phase is the detection phase, which is when an incident is detected either by tooling that's put in place or reported by an employee or customer.
>
> **[1:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=99)** One of the goals of the incident response process is to ensure that incidents are identified and contained before customers are aware.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=107)** The second stage is the triage phase, and this is the process of reviewing available information to determine the cause of an incident.
>
> **[1:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=116)** The next phase is the diagnosis, which is where we've identified the cause or source of an incident.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=123)** Next, you have mitigation or resolution.
>
> **[2:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=126)** This is the point where an incident is rectified by finding a suitable solution to the diagnosis.
>
> **[2:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=132)** And finally, you have the monitoring phase.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=135)** After the incident is resolved, the service should be monitored for a while to ensure that the service performance is back to normal.
>
> **[2:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=143)** The detection to resolution phases leverage most of the things that we've talked about in this chapter.
>
> **[2:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=148)** Alerting for being notified about incidents, SLIs and SLOs for narrowing down incidents to the most critical ones, and dashboards for drilling down and understanding incidents.
>
> **[2:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=160)** To make your incident response phases go smoothly, your team roles and responsibilities and tooling should work hand in hand.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=167)** The first step will be defining your teams on call.
>
> **[2:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=170)** This is where you have schedules for your team to be able to monitor your services.
>
> **[2:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=175)** In order to do so, you can leverage incident response tools.
>
> **[2:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=178)** In the tooling, you'd usually be able to define who is on call for your services or incidents and what role they play, when they're notified, and how they're notified.
>
> **[3:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=189)** Your incident response process can then leverage your oncall to define things like the incident responsibilities.
>
> **[3:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=196)** That is, who is the incident commander or subject matter expert?
>
> **[3:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=199)** Who is most likely to be the person on call for the service and other relevant team members?
>
> **[3:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=205)** Your incident severities and how to respond to the different severity types, incident communications, and incident postmortems and actions.
>
> **[3:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=215)** There are several tools that can be used to implement incident response.
>
> **[3:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=219)** While some are dedicated incident response tools, there are also some provided by vendors who provide other observability services.
>
> **[3:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=227)** Some of these tools are PagerDuty, Splunk On-Call, Datadog Incident Management, and much more.
>
> **[3:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=235)** If you're particularly interested in PagerDuty, you should check out my course, Incident Response with PagerDuty, here on LinkedIn Learning.
>
> **[4:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=242)** I also cover in depth how to design and implement your incident response process, so regardless of whether you use PagerDuty or not, if you're interested in incident response, this will be useful for you.
>
> **[4:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=253)** Now, let's go into Grafana Cloud to define our incident response process.
>
> **[4:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=261)** We'll visit the menu and refer to the Alerts & IRM tab.
>
> **[4:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=265)** As I mentioned earlier, the first thing we need to do is to define our oncall process.
>
> **[4:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=271)** To do that, we're going to use Grafana OnCall.
>
> **[4:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=274)** As we saw in our alerting video, Grafana OnCall can serve as a destination for our alerts, and we saw that I had already configured that.
>
> **[4:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=281)** As you can see, every time I get an alert from Grafana Alerting, this is routed to our Grafana OnCall instance.
>
> **[4:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=290)** If we look into the settings, we'll see that this is made possible by using Grafana's contact points.
>
> **[4:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=295)** If I open up the contact points, you'll see here that my Grafana default email has an integration type of Grafana OnCall, which is how Grafana Alerting and Grafana OnCall are linked together.
>
> **[5:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=308)** Back into the menu.
>
> **[5:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=309)** When we go to Grafana OnCall, we can also look at the Integrations tab.
>
> **[5:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=314)** In the Integrations tab, again, you see that Grafana Alerting is set up.
>
> **[5:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=319)** Now, we can look at our schedules.
>
> **[5:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=322)** Like I mentioned, your oncall rotation is made up of schedules saying who is on call per time.
>
> **[5:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=328)** In this schedule, I have only one person on call with the username connectwithibukunitimi.
>
> **[5:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=333)** You can also see this schedule shift, which is the 2nd of October to 9th of October.
>
> **[5:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=338)** If I open up the schedule, you can also see information like the time zone.
>
> **[5:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=343)** If I scroll down, you can see a section called Overrides and swaps.
>
> **[5:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=347)** This is where your team can request shift swaps or create overrides to have someone cover their own call.
>
> **[5:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=353)** Here, you'll just need to select a user and add them as an override for the existing person who is on call.
>
> **[6:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=362)** Back into the Schedule page, let's simulate adding a new schedule just to see how this works.
>
> **[6:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=367)** You can set up an oncall rotation schedule and create it.
>
> **[6:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=371)** If you do Demo schedule and click on the Create Schedule button, it gives us an empty schedule.
>
> **[6:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=377)** Here, you can see that the quality is bad because of certain things.
>
> **[6:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=381)** For example, in this case, the schedule is empty.
>
> **[6:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=385)** To populate my schedule, I'll click on the Add rotation button and I can select the user that I want.
>
> **[6:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=392)** This gives me a rotation that recurs every day and I can click on Create.
>
> **[6:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=396)** As you would see, because I have only one user, that same person is on call every single day.
>
> **[6:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=400)** However, you can have multiple people as needed.
>
> **[6:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=404)** You can also add new layers so that there's a fallback within your schedule.
>
> **[6:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=409)** Now that we've seen an existing schedule and created one, let's go back to our menu, and we'll find escalation chains.
>
> **[6:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=416)** Escalation chains just define what should happen when an alert comes in.
>
> **[7:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=420)** In this case, we want to start the default notification schedule and we've selected the Observability Primary Schedule, which is the one I created originally.
>
> **[7:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=429)** We've also mentioned that this should notify a Slack channel and also repeats five times.
>
> **[7:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=434)** As I mentioned earlier, your oncall schedule helps you to know who to notify, where to notify them, and how often to notify them as well.
>
> **[7:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=442)** Before we go into incident response, let's take a look at this user setting.
>
> **[7:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=449)** In the Users tab, your users will be able to define default notifications.
>
> **[7:33](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=453)** As you can see here, you have email and SMS notifications.
>
> **[7:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=458)** If I edit this, I can come to Notification Settings, and you would see that I've asked Grafana to notify me by email, by SMS, and then wait for five minutes and then give me a phone call For default notifications.
>
> **[7:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=472)** And for important notifications, I've asked it to notify me by SMS and wait for one minute before giving me a phone call.
>
> **[7:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=479)** All of this comes into action once the escalation chain is triggered, and the escalation chain will be triggered anytime there's a corresponding alert for that escalation chain.
>
> **[8:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=490)** Now that we've seen how our oncall is set up, how do we then move into incident response?
>
> **[8:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=495)** If I take a look at this alert, you'll see that Grafana gives you the option to declare an incident.
>
> **[8:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=501)** If I click on this button, that brings me to Grafana Incident where I can put in relevant information.
>
> **[8:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=508)** For example, if I say Demo Incidents, here, you can see that we can select our severity.
>
> **[8:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=516)** I'll say that this is a critical incident, and then you can also see here that Grafana does a few automated actions.
>
> **[8:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=524)** The first is a safe investigation, which is Grafana's way of using machine learning to suggest possible root causes for an incident.
>
> **[8:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=532)** At the moment, this is only limited to Kubernetes applications, so we're going to skip that for now.
>
> **[8:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=537)** The next thing is that it creates a Slack channel, which is where your team can communicate.
>
> **[9:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=542)** As I mentioned earlier, communication is quite a key part of incident response.
>
> **[9:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=546)** This channel can also be where your team collaborates to resolve this incident as well.
>
> **[9:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=552)** If click on Declare incident, then you have more information that you can fill out about this incident.
>
> **[9:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=558)** You can assign an incident commander, which is where incident rules come into play.
>
> **[9:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=563)** You can also assign an investigator who would typically be a subject matter expert, so for example, the person who was on call and trigger this incident can assign themselves as an investigator and assign the relevant incident commander.
>
> **[9:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=576)** You can also add updates and add this to the incident timeline.
>
> **[9:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=582)** Building up your incident timeline makes it easy to come back to this incident, and see what happened, and use that to improve your process or to review the incident itself.
>
> **[9:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=592)** Grafana also gives you the option to add relevant queries.
>
> **[9:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=596)** So you can select a metric and add that to the timeline as well.
>
> **[10:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=601)** Again, this is just data that you can come back to later to review your incidents.
>
> **[10:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=606)** You can add an alert as well or even a dashboard panel.
>
> **[10:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=610)** Here, if, for example, I wanted to add one of my panels from my dashboards and say maybe the DB Query Error Rate and add to this timeline.
>
> **[10:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=619)** Another thing with incident response that's important is having post-mortem actions, which your team would come back to as soon as possible to prevent a similar incident from happening in the future.
>
> **[10:30](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=630)** Here, let's say we want to fix our disk space allocation to prevent this incident next time.
>
> **[10:36](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=636)** I can add this as a task, and as it's completed, I can mark it as Done.
>
> **[10:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=642)** All of this would happen while you're using your observability tools and signals to try Azure Incidents.
>
> **[10:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=648)** And hopefully you're able to come to a resolution soon and you can mark your incident as resolved.
>
> **[10:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=654)** You can give a brief summary of the incident so that anyone who reads this would have a good idea of what happened and resolve the incident.
>
> **[11:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=664)** Now that incidents is resolved, let's go back into the main Incidents tab.
>
> **[11:09](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=669)** Here, you can see that I already had a few incidents that I had created and resolved previously.
>
> **[11:14](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=674)** If you go back into the menu, you'll see that Grafana also gives you insights dashboards on your OnCall and incidents.
>
> **[11:22](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=682)** On the OnCall dashboard, you can see metrics like: How many alerts have been triggered within the timeframe selected on the dashboard?
>
> **[11:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=689)** The mean time to resolve, and you can also see information on who was alerted during this time period.
>
> **[11:34](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=694)** This could be useful for you when you're reviewing oncall rotations with your team.
>
> **[11:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=699)** It could come in handy to use some of these metrics to improve your oncall process.
>
> **[11:43](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=703)** If you go back to these dashboards again and look at Incident Insights, you see that Grafana gives us metrics again about the total incidents, the status of the incident.
>
> **[11:56](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=716)** We also have a separate tab for security incidents, which is quite important because those are typically more critical.
>
> **[12:02](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=722)** You can also see the MTTR of the incidents as well and severities.
>
> **[12:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=728)** You would also see that this dashboard has a response management rule.
>
> **[12:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=732)** This role is quite important because it helps you to know how your organization is following the standards that you've set.
>
> **[12:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=738)** For example, you can see the percentage of time a commander is assigned, or investigator is assigned, or even when all the tasks are completed.
>
> **[12:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=745)** You can also see in this case that my Post-Incident Report is zero, and this could be a good way for you to track if your team is actually following the rules that you've laid down for incident response, and you can use these metrics to serve as training guides to ensure that your team knows how to complete these actions and also understands why and also starts improving on them.
>
> **[12:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/incident-management?u=76281980&t=767)** If you scroll down a bit, you also see information about the list of all the incidents, and you can click into any of them to review.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (2), case, (2), override (1), this, (1)
> **UI Navigation:** click on (5), scroll down (2), go to (1), select the (1)
> **Env Vars:** sms (3), irm (1), mttr (1)
> **Analogies:** for example (5)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** go back to (2), as we saw (1)
> **Prerequisites:** set up (3)
> **Tools:** slack (2)

#### Machine learning and observability
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=0)** - [Instructor] With the advent of AI and machine learning technologies, the observability space has also benefited and leveraged this in different ways.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=8)** Some of the applications of machine learning and AI are, anomaly detection, this is when your observability tool is able to detect changes in the trend of your data, for example, a sudden increase in the volume of logs a service is emitting.
>
> **[0:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=24)** With machine learning, you can compare the current trend to previous trends and use this to determine if the thresholds are out of bounds.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=31)** This can also be alerted on, so that you and your team can respond proactively to these types of issues.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=39)** Next, you have root cause analysis.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=42)** Incident response tools and observability tools can suggest root causes for incidents based on the trend of incidents that are usually triggered around the same time.
>
> **[0:51](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=51)** If you send multiple signals like your metrics, logs, and traces to the same tool, they can also correlates errors in all the signals to suggest a root cause.
>
> **[1:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=61)** And then you have service owner discovery.
>
> **[1:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=63)** By correlating ongoing incidents, your observability tool makes it easy for you to know who to contact during incidents.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=71)** For example, if team A's incident shows up as a possible root cause for team B's ongoing incident, team B is able to quickly contact team A to confirm.
>
> **[1:21](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=81)** This has an impact on how quickly it takes team B to respond to and resolve their incident.
>
> **[1:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=87)** As machine learning and AI become more prevalent, there will be more and more applications in the observability space.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=95)** Grafana Cloud has a few machine learning applications, so let's explore some of them.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=100)** When you log into Grafana Cloud, you visit the menu and scroll down to the Alerts & IRM section.
>
> **[1:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=106)** There, you'll be able to find Machine learning.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=109)** On the Machine learning page, you're able to see what options you have, you can create metric forecasts, outlier detections, and holidays.
>
> **[1:58](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=118)** If you go back into the menu, under Machine learning, let's explore Metric forecasts.
>
> **[2:03](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=123)** Here you can see that I already have a demo forecast created.
>
> **[2:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=128)** If I click on View, I've given Grafana Cloud a query, which is using a histogram metric, and then Grafana Cloud creates predictions based on this query.
>
> **[2:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=138)** You see that the green is the actual value for my latency metric, and the blue line is what Grafana Cloud creates.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=144)** As you can see, it gives fairly similar values for what the actual query is and the predicted value as well.
>
> **[2:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=151)** Grafana Cloud takes your metric and then predicts the future based on how the metric has behaved in the past.
>
> **[2:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=157)** As you can see here where you have the blue line alone, that's where it's predicting values that haven't happened yet, so it's predicting the future of your value.
>
> **[2:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=167)** You can create this as an alert where if anything unnormal has happened, Grafana Cloud would alert you.
>
> **[2:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=173)** Here, you also see that you have Holidays, which is where you can define specific holidays for Grafana Cloud to take into consideration.
>
> **[3:01](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=181)** For example, on Black Friday, you'll potentially expect a huge spike in traffic, and letting Grafana Cloud know that that is a specific holiday would help you train the machine learning model even further.
>
> **[3:12](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=192)** You can also create outlier detectors as well, where you give Grafana Cloud a specific metric, and then it uses that to detect outliers for your metric.
>
> **[3:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=203)** Another machine learning application is in Grafana Incident.
>
> **[3:27](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=207)** Here, you can see that the first automated action is to create a Sift investigation.
>
> **[3:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=212)** This helps in incident management by suggesting things that could potentially be a root cause for your incident.
>
> **[3:38](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=218)** This is, at the moment, very specific to Kubernetes applications and is currently in preview, and I believe that Grafana Cloud will continue to improve on this as time goes on.
>
> **[3:48](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=228)** In summary, machine learning just takes your observability to the next level by helping you to respond to anomalies you may not catch with your usual alerting, enabling proactive capacity planning and improving incident response by understanding your system and suggesting root causes, as well as other things that would help you to solve incidents faster.
>
> **[4:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/machine-learning-and-observability?u=76281980&t=247)** Different observability tools leverage machine learning in different ways, so be sure to check the documentation for whatever tool you're using, so that you can make the best use of it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1)
> **Analogies:** for example (3)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Env Vars:** irm (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Choosing your observability stack
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=0)** - [Instructor] Throughout this course, we have mostly worked with Grafana Cloud, but I have given examples of several observability tools, as there are many options available in the market.
>
> **[0:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=10)** I made the decision to work with Grafana Cloud because I wanted to demonstrate how powerful your observability signals can be when you're able to create them easily.
>
> **[0:20](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=20)** This brings me to the considerations you should have when choosing your observability stack.
>
> **[0:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=25)** The first thing you should consider is one pane of glass.
>
> **[0:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=29)** As you've seen throughout the course, having your data in one pane of glass simply means you can interact with all your observability signals in one place.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=37)** This means you should be looking out for tooling that provides you with this option, as it reduces context switching for you and your team, and also helps you to triage and troubleshoot easily, since all your signals are in one place and easy to correlate.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=52)** The next thing you should consider is cost.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=55)** Observability tools get pretty expensive with scale.
>
> **[0:59](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=59)** Ensuring that you factor in the rate of growth of your data and how your observability costs will grow is quite important.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=66)** Going the open-source route is an option that many organizations take.
>
> **[1:10](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=70)** However, that comes at a higher cost for engineering hours, because you and your team have more infrastructure to manage.
>
> **[1:18](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=78)** Depending on the scale of your organization and data, starting out with open-source might be a good choice, and you can evaluate the balance between your dollar cost and engineering costs as you grow.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=89)** Next, you should consider custom instrumentation.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=92)** We've seen throughout the course that being able to add custom context to observability data makes it even more powerful and drives the observability culture, since you are able to leverage this for other teams who are interested in observability from non-engineering perspectives.
>
> **[1:47](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=107)** Having a tool that supports this can help drive a better observability culture in your organization.
>
> **[1:53](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=113)** Innovation is also something that you should strongly consider.
>
> **[1:57](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=117)** Having a tool that is backed by a team or organization that innovates quickly can help you take advantage of new capabilities that come up in the observability space.
>
> **[2:07](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=127)** You should have some confidence in the managers of your tooling to evolve it in line with the direction that the industry is moving.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=135)** Reliability is probably one of the most important things, because observability is usually one of the backbones of reliability in an organization.
>
> **[2:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/choosing-your-observability-stack?u=76281980&t=144)** By virtue of this, it is important that your tools are reliable and available in order to ensure that teams that depend on your team and stack can rely on your services.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Measuring the success of your observability
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=0)** - [Instructor] Measuring the success, and impact of observability is important, especially in the context of being part of an organization that has other teams who rely on your observability stack.
>
> **[0:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=11)** How you measure your observability success will depend on how you run your tooling.
>
> **[0:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=16)** If your observability stack is largely vendor based, you should ideally be choosing vendors who give you high availability so that some of the responsibility of uptime of the stack is abstracted from you.
>
> **[0:28](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=28)** However, you still own the collection, and exporting layers of the process, so you'd want to ensure high availability in those areas.
>
> **[0:37](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=37)** If your observability is largely open source, you'd be responsible for ensuring the entire flow is highly available, and that should be measured.
>
> **[0:46](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=46)** Identifying the metrics that matter, and defining them as SLIs is a continuous process.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=52)** You can think of your SLIs in two major ways.
>
> **[0:55](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=55)** You have SLIs for availability, for example, ensuring that you're returning the correct HETP status code when your data is queried, and you can also have SLIs for latency.
>
> **[1:06](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=66)** For example, ensuring that your responses to data queries are completed in time.
>
> **[1:11](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=71)** As I've mentioned, this is a process that happens at relatively.
>
> **[1:16](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=76)** These SLIs can then be used to calculate SLUs as we'll see in the chapter, exploring SLIs, SLUs and SLAs.
>
> **[1:24](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=84)** Another way to measure observability is also the impact it has on incident response.
>
> **[1:29](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=89)** These are the most common observability metrics you'll come across, and they are mean time to detect.
>
> **[1:35](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=95)** That is how quickly your observability stack detects an issue.
>
> **[1:40](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=100)** Mean time to respond.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=101)** That is how quickly your team responds to that issue, and finally mean time to resolve, which is how quickly the incident is resolved.
>
> **[1:50](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=110)** The parallel drawn between incident response and observability is that the better your observability stack is, and the easier it is to use to triage during incidents, the more you can improve on your MTCD and MTTRs.
>
> **[2:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=124)** Finally, as an observability team, you can also get feedback from your users, and use that to decide an NPS score for your stack and team services.
>
> **[2:15](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/measuring-the-success-of-your-observability?u=76281980&t=135)** Ensuring that your users are well-versed with your tooling will mean higher NPS scores, as well as improved MTTD and MTTR metrics.

> [!info]- Semantic Content
>
> **Env Vars:** nps (2), hetp (1), mtcd (1), mttd (1), mttr (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Implementing observability in your organization
> [LinkedIn Learning](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=0)** - [Ibukun] Having gone through this course, you should have a solid idea of the moving parts of observability and how they all work together.
>
> **[0:08](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=8)** At this point, you're ready to start implementing observability in your organization.
>
> **[0:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=13)** To get the ball rolling on this, you should have these three things in mind.
>
> **[0:17](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=17)** Number one is staffing.
>
> **[0:19](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=19)** Deciding who will be responsible for observability is important.
>
> **[0:23](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=23)** You should ensure that your team has the resources to learn and improve on observability as it's a continuously evolving field.
>
> **[0:31](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=31)** You should definitely share this course with them to get them well grounded in the observability foundations, and also if Grafana Cloud is one of the tools you're considering.
>
> **[0:39](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=39)** That brings us to tooling.
>
> **[0:42](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=42)** Having taken all the considerations we discussed, for choosing your tooling, evaluate the different options in the industry and make a decision based on your use case.
>
> **[0:52](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=52)** And finally, we have culture.
>
> **[0:54](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=54)** Ultimately, being able to cultivate a culture of observability in your organization is what will help you reap the benefits of your staffing and tooling choices.
>
> **[1:04](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=64)** Encourage your primary observability team to empower other teams to build on and innovate on the services they offer so they don't become a bottleneck.
>
> **[1:13](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=73)** Also, encourage the other teams to contribute to your observability tooling and practices such that every team and engineer can feel like they're part of the observability culture you're trying to build.
>
> **[1:25](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=85)** At this juncture, I'm confident that you can be an observability champion and you have what it takes to do so successfully.
>
> **[1:32](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=92)** I encourage you to explore the concepts we've discussed in this course so far and use that in starting and thriving at your observability journey.
>
> **[1:41](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=101)** That brings me to the end of this course.
>
> **[1:44](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=104)** Thank you for joining me on this amazing journey, and I look forward to connecting with you as well.
>
> **[1:49](https://www.linkedin.com/learning/devops-foundations-monitoring-and-observability-20223247/implementing-observability-in-your-organization?u=76281980&t=109)** You can reach out to me on LinkedIn at Ibukun Itimi.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), case. (1), finally, (1)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [ibukun] (1)


## Path Context

### In [[Getting Started with DevOps]]
← [[DevOps Foundations- Infrastructure as Code]] | **4 of 5** | [[DevOps Foundations- Your First Project]] →

## Appears In

- [[Getting Started with DevOps]]

## Related Courses

_Courses sharing skills:_

- [[AWS- Monitoring, Logging, and Remediation (2021)]] — System Monitoring
- [[Leveraging Google Cloud Developer and DevOps Tools]] — DevOps
- [[DevOps Foundations- Your First Project]] — DevOps
- [[Advanced Data Engineering with Snowflake]] — DevOps
- [[Automated Data Governance in Practice]] — DevOps
