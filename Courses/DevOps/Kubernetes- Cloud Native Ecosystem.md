---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: kubernetes-cloud-native-ecosystem-14444671
url: "https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671"
duration_minutes: 34
duration: 34m
level: Intermediate
updated: 12/20/2021
learners: 27516
skills:
  - Cloud-Native Applications
  - Kubernetes
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFgC_JiqphLxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639678943330?e=2147483647&amp;v=beta&amp;t=B1cK0bszYU19K-ctq6PHATHz9ocdEYN6KrmCRYbhnB0"
linkedin_topic: DevOps
learning_paths:
  - '[[Getting Started with Kubernetes]]'
prev_courses:
  - '[[Kubernetes- Microservices]]'
next_courses:
  - '[[Securing Containers and Kubernetes Ecosystem]]'
path_nav: '[{"path":"Getting Started with Kubernetes","position":5,"total":6,"prev":"Kubernetes- Microservices","next":"Securing Containers and Kubernetes Ecosystem"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/cloud-native-applications
  - skill/kubernetes
status: not-started
created: 2026-04-21
---

![Kubernetes: Cloud Native Ecosystem](https://media.licdn.com/dms/image/v2/C560DAQFgC_JiqphLxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639678943330?e=2147483647&amp;v=beta&amp;t=B1cK0bszYU19K-ctq6PHATHz9ocdEYN6KrmCRYbhnB0)

# Kubernetes: Cloud Native Ecosystem

> This course covers many of the tools hosted by the Cloud Native Computing Foundation, with an emphasis on the problems they solve. Instructor Karthik Gaekwad covers not just these tools, but also the mindset and engineering challenges involved in adopting cloud native or cloud distributed system architectures. Karthik begins by introducing the Cloud Native Computing Foundation (CNCF), the vendor-n

> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671) | 34m | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Karthik Gaekwad]]

## Skills Covered

- Cloud-Native Applications
- Kubernetes

## Table of Contents

### Introduction

#### Kubernetes: Cloud native ecosystem
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=0)** - [Karthik] Are you confused with all the different tools and platforms provided by the cloud native computing foundation?
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=6)** Not sure what they do or how they help you build your Kubernetes applications?
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=11)** Then you're in the right place.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=12)** Hi, I'm Karthik Gaewad, @iteration1 on Twitter and blogger on the [agileadmin.com](https://agileadmin.com).
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=17)** I work on the managed Kubernetes team at Oracle and work with CNCF tools on a regular basis.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=23)** In this course, we'll go over the tools and platforms provided by the CNCF.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=27)** We'll discuss management and orchestration, networking and runtime, application observability, and analysis and security.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=37)** You'll leave with an overall understanding of the landscape, what the tools are, how they're positioned, and where or why to use them.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=44)** So let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** cncf (2)
> **Code Keywords:** let (1)
> **URLs:** [agileadmin.com](https://agileadmin.com) (1)
> **Speakers:** - [karthik] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-you-need-to-know?u=76281980&t=0)** - [Instructor] The only prerequisites for this course is having a general understanding of IT concepts and an interest in building cloud native applications using Kubernetes.
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-you-need-to-know?u=76281980&t=10)** We have a number of courses in the library on IT and DevOps to help you get started if you're new to the industry.
>
> **[0:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-you-need-to-know?u=76281980&t=15)** If you're already familiar with Kubernetes, you're ahead of the curve.
>
> **[0:19](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-you-need-to-know?u=76281980&t=19)** But if not, I'd recommend that you take a look at the Learning Kubernetes course here in the library.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 1. Cloud Native Computing Foundation

#### What is the CNCF?
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=1)** - [Instructor] The Cloud Native Computing Foundation, or the CNCF, is the vendor neutral home for fast-growing projects in the Cloud Native landscape, like Kubernetes, Prometheus, GRPC, and a whole lot of others.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=12)** It's a part of the Linux foundation and was founded in late 2015.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=17)** The CNCF acts as a steward for Cloud Native projects, so that they're available to the community and free of partisan issues from the company that might have released the project.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=26)** Also, it pays attention to the UX and compatibility of its projects so that they're all interoperable.
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=33)** It also fosters the evolution of projects and the entire ecosystem.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=38)** This means that it looks for new projects that will add to the liveliness of the ecosystem or build common technical standards for existing projects.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=47)** Ever been to KubeCon or a Kubernetes meetup?
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=49)** The CNCF actually puts on these conferences and helps meetup organizers to host them in different cities.
>
> **[0:56](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=56)** It's also created a Kubernetes training and certification program in late 2017 for developers to get up to speed on Kubernetes.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=64)** Finally, the CNCF makes sure that the technology is accessible and reliable.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=70)** No one likes to use a project from GitHub that isn't supported anymore, or doesn't work with newer versions of software.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=76)** From my perspective, having an organization that helps the development of Kubernetes, related projects, and the ecosystem, is great.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=84)** The structure provided by the CNCF is something that is different from other software and platforms I've seen in the past.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=91)** It promotes success for the entire ecosystem and makes Kubernetes a strong platform choice for Cloud Native development from an enterprise perspective.

> [!info]- Semantic Content
>
> **Env Vars:** cncf (5), grpc (1)
> **Code Keywords:** finally, (1)
> **Tools:** github (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### First look at the CNCF landscape
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=0)** - [Instructor] The cloud native landscape is vast and encompasses many categories and projects.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=7)** To look at what's going on in the cloud native landscape, most folks start by looking at landscape.[cncf.io](https://cncf.io).
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=13)** It encompasses all the categories, projects and companies.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=17)** However, for folks new to the ecosystem, this diagram is overwhelming.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=21)** Over time, there have been more categories, projects and companies that have been added and there are over 450 cards at the time of writing this course.
>
> **[0:30](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=30)** A more digestible way to look at the landscape is to visit the trail map.
>
> **[0:35](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=35)** It is a recommended way by the CNCF to leverage open source, cloud native technologies to help with your cloud native journey.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=42)** And it's organized in a logical way for an organization to update cloud native features.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=49)** The cloud native journey begins with containerization.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=52)** The most common way to containerize applications is by using Docker.
>
> **[0:57](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=57)** Most applications can be containerized and the recommendation is to split your applications using a microservices methodology.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=64)** The next step is continuous integration and delivery.
>
> **[1:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=68)** This allows changes to your source code to automatically build a new container image, test your container and then deploy your containers to a staging environment.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=77)** Step three is by orchestration and application definition.
>
> **[1:22](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=82)** Now that the containers are built, and a CI/CD system is in place, there is the need to orchestrate these containers to an environment and be able to deploy the containers at scale, whether it's on premise or in the cloud.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=94)** Observability and analysis is the next section.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=98)** Having a solution for logging, metrics and observability are critical for running and debugging container-based applications.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=105)** Fine tuning your observability is crucial to get your container infrastructure to work well, especially when you're running your applications at scale in a distributed fashion.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=115)** I categorize the next few sections for intermediate and advanced cloud native users.
>
> **[2:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=120)** Proxies, discovery and service meshes, followed by networking, policy and security.
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=126)** When you're running containers at scale in a microservices fashion, it is important to have proxies and service discovery features to allow for constant container communication.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=135)** Advanced cloud native users might also want to use a service mesh layer for better connectivity and to get the benefits of observability, traffic control and fault injection.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=146)** From a networking standpoint, consider using a project that is compliant with a container network interface, also known as the CNI.
>
> **[2:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=154)** This allows you to change between different networking plugins at a later point of time.
>
> **[2:39](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=159)** There are also a lot of security considerations you'll want to consider for cloud native applications from containers to the cluster to the applications running on the cluster.
>
> **[2:49](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=169)** Generally, you'll want to define policies for your applications as well as invest in tooling for anomaly detection.
>
> **[2:56](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=176)** It has become a common practice to store data in Kubernetes clusters and the next step in the trail map addresses the methodologies, solutions and tooling to store your data, alongside your cluster in Kubernetes.
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=188)** The eighth stop on the trail map has to do with additional ways to transfer data to and from your services.
>
> **[3:14](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=194)** While REST-style services are very popular, you might require your applications to stream data or require a messaging system or perhaps an eventing framework as well.
>
> **[3:24](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=204)** The streaming and messaging sections prescribe frameworks to allow for better performance to stream data, and the standards-based approach for events and messages.
>
> **[3:33](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=213)** The final two sections of the trail map are container registry and runtime, and software distribution.
>
> **[3:39](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=219)** Both these sections have projects that'll help organizations level up their ways of delivering containers and software.
>
> **[3:45](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=225)** However, not all organizations have the use case that these sections go about solving.
>
> **[3:50](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=230)** So it might not always be pertinent.
>
> **[3:54](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=234)** Now that we know the basics of the trail map, let's explore these sections in a little bit more detail in the course.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), interface (1), let (1)
> **Env Vars:** cncf (1), cni (1), rest (1)
> **CLI Commands:** docker (1), cd (1)
> **Definitions:** is a  (1), known as (1)
> **URLs:** [cncf.io](https://cncf.io) (1)
> **Exercise Files:** source code (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 2. Management and Orchestration

#### Application development and deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=0)** - [Instructor] Developing cloud native applications can be a challenge for new folks, because there are so many technologies that can be used interchangeably.
>
> **[0:09](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=9)** So how do you get started?
>
> **[0:10](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=10)** And what are the most important things you need to know?
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=13)** From an application developer perspective, the first step to cloud native begins by containerizing your applications.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=20)** Most applications can be containerized, and Docker has become the standard way to build and run new containers.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=26)** However, it isn't your only option.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=28)** Projects like containerd and Podman are gaining traction.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=32)** Take a look at these as well, especially if you're using Kubernetes to run your containers at scale.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=39)** After containerizing your applications, it's a great time to add some process to the workflow and add some continuous integration and delivery.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=47)** It is common practice to use your CI system to build your container images and then deploy them to your image repository once you check in your code to source control.
>
> **[0:57](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=57)** In addition, you could also deploy your application to a Kubernetes staging or production environment if your test pass to add that continuous delivery step.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=66)** From a trail map perspective, take a look at the Argo project for your CI/CD needs if you don't currently have a solution.
>
> **[1:13](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=73)** Argo has many features, but it's commonly used for CI and CD purposes.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=78)** You can use it to build your container images when there are changes to your code in source control.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=83)** Argo CD allows you to follow a declarative pattern to deploy applications and their updates to Kubernetes via GitHub's model.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=92)** When it comes to running your containers, Kubernetes is that de facto way to do so.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=97)** Kubernetes allows you to treat your compute nodes as a single cluster, so it solves the challenge of scaling applications and managing computing and resources in an elegant way.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=107)** It's also cloud agnostic, so it can be run on any cloud in either a managed or unmanaged fashion.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=113)** It beat out many other container orchestration platforms early on and has become the standard way for deploying containerized applications.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=122)** Once you start dealing with more complicated applications in Kubernetes or dealing with a microservices pattern, you might realize that you need a package manager that just using Kubernetes manifest to deploy your applications.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=135)** One such package manager that's getting a lot of traction is called Helm.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=139)** Helm allows you to define, install and upgrade Kubernetes applications via Helm Charts.
>
> **[2:25](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=145)** You can create, version, share and publish Helm Charts.
>
> **[2:29](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=149)** I like to think of Helm for Kubernetes the same way we have app for Linux or perhaps NPM for node or JavaScript applications.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=158)** Finally, from an application development perspective, there are often reasons you might want to stream your data or have a messaging interface for your microservices.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=167)** There are a few CNCF projects that can help in these scenarios.
>
> **[2:50](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=170)** If you're dealing with APIs, and you find that your REST or SOAP APIs aren't performant, consider investigating gRPC remote procedure calls, also known as gRPC.
>
> **[3:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=181)** If your need is for messaging or queuing, you might want to take a look at NATS.
>
> **[3:05](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=185)** Finally, if you're thinking about event-based applications, definitely take a look at the CloudEvents specification.
>
> **[3:11](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=191)** This allows for a standard way to describe event data.
>
> **[3:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=197)** When you're making a shift to the cloud native ecosystem, you'll want to strongly consider some of the methodologies we've talked about in the section to make your transition.
>
> **[3:25](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=205)** If you're looking for more information about Kubernetes, check out the Learning Kubernetes course in the library.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3), docker (1), npm (1), node (1), find (1)
> **Env Vars:** npm (1), cncf (1), rest (1), soap (1), nats (1)
> **Code Keywords:** finally, (2), pass (1), interface (1)
> **Code Identifiers:** grpc (2)
> **Definitions:** is called (1), known as (1)
> **Documentation:** specification (1)
> **Tools:** github (1)
> **Prerequisites:** install (1)

#### Service discovery and registry
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=0)** - [Instructor] Let's talk about service discovery and container registries.
>
> **[0:04](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=4)** Both service discovery and registries are concepts that came into the spotlight with cloud and container applications.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=11)** When containers first became popular, it was difficult to network all of the different containers together because they might have been running on different hosts with IPs on a unique port.
>
> **[0:22](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=22)** There was a lot of coordination that needed to be done at container startup to get to a running system.
>
> **[0:28](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=28)** Enter service discovery, which provided a coordination mechanism for containers to communicate with each other and has many patterns to accomplish this.
>
> **[0:36](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=36)** Consul and etcd are the classic examples of service discovery tooling but really so is DNS.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=42)** A typical Kubernetes install will have an etcd cluster to store its data, and also have a DNS provider like CoreDNS for the DNS layer.
>
> **[0:52](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=52)** And speaking of CoreDNS, it's a project that's supported by the CNCF as a graduated project for the ecosystem.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=59)** CoreDNS is super fast and flexible because of it's plug-in architecture.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=63)** It's also written in Golang, so if for some reason this functionality that's not provided out of the box, you can add to it by writing a plugin.
>
> **[1:11](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=71)** It is also the recommended DNS server for Kubernetes.
>
> **[1:16](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=76)** Let's talk about container registries for a second.
>
> **[1:18](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=78)** A container registry is the repository where you store, retrieve and distribute your container images.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=84)** Think of it like Git or GitHub but for container images.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=88)** Each container image has a unique ID that can be referenced by a name and a label.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=94)** Initially, most folks would store their container images inside of Docker Hub, which is not really surprising because of all the work that Docker had done with containers.
>
> **[1:43](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=103)** Today, however, you have many choices.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=106)** While Docker Hub is still very popular, you can use other registries to store container images.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=111)** If you're running in the cloud, most cloud providers have a private registry you can use.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=116)** On-premise registries that are popular in enterprises include artifactory from JFrog, or the GitLab container registry.
>
> **[2:03](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=123)** There's also a CNCF project that plays in this space and it's called Harbor.
>
> **[2:09](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=129)** Harbor is an open source registry that secures artifacts with policies and role-based access control.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=135)** It ensures that images are scanned and free from vulnerabilities, and signs images as trusted.
>
> **[2:21](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=141)** In my opinion, if your organization isn't already using a solution for a registry, and is thinking about going the open source route, or needs something to work in your own data center, then definitely invest time in getting Harbor up and running.
>
> **[2:33](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=153)** It looks full featured and is a graduated CNCF project.
>
> **[2:38](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=158)** We've covered a couple of topics in this section, from service discovery to container registry.
>
> **[2:43](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=163)** Both of these items are critical pieces of development for cloud native applications.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=168)** Definitely take a look at the course handouts for links for information on each of these topics.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4), cncf (3)
> **Code Keywords:** let (2), this. (1), super (1), private (1)
> **CLI Commands:** docker (3), git (1)
> **Tools:** github (1), gitlab (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** think of it like (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)

#### Managing cloud native services
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=1)** - [Instructor] In my estimation, it'll be the service management space that will show the most growth in the next few years.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=7)** For a long time, the goal was to have an operations tool that could deploy and manage your applications.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=14)** This is where Kubernetes fits in, and solves the problem in an elegant fashion.
>
> **[0:18](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=18)** As the Kubernetes platform grew, the people in the cloud native space realized that there were many asks for Kubernetes.
>
> **[0:25](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=25)** Some operational, like how do I scale nodes, and some developmental, such as how do I manage my applications in a better way?
>
> **[0:33](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=33)** There have been huge strides made from a development perspective, which is captured in this service management diagram.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=40)** We covered gRPC earlier but now let's explore service meshes.
>
> **[0:45](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=45)** From a high level, a service mesh is the layer that handles all of the different communication and networking intricacies between microservices.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=53)** Two projects that implement service meshes that are popular in the ecosystem today are Linkerd and Envoy.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=60)** We'll start with Linkerd.
>
> **[1:02](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=62)** Linkerd is a transparent network proxy that acts as a service mesh.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=66)** It's the one-stop shop for managing, controlling, and monitoring service-to-service communication in a larger application.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=75)** Companies around the world use Linkerd to simplify communications within their software infrastructure.
>
> **[1:20](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=80)** It takes care of the error-prone parts of cross-service communications and has features including latency-aware load balancing, connection pooling, TLS, instrumentation, and request-level routing.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=94)** All of these features make your application code more scalable, performance and resilient.
>
> **[1:41](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=101)** Don't tweet this but I don't use Linkerd very extensively.
>
> **[1:45](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=105)** I've actually used Envoy a lot more.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=108)** Envoy came from Lyft and was written in C++.
>
> **[1:51](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=111)** But the idea of Envoy is similar to Linkerd.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=116)** It's a small server with a small footprint, and supports http2 and gRPC.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=122)** Envoy supports advanced load balancing concepts that are becoming a requirement in the dev world.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=127)** Things like rate limiting, circuit breaking patterns, automatic retries, et cetera.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=132)** I find that Envoy is highly configurable by design, and provides APIs for configuration management.
>
> **[2:19](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=139)** Finally, Envoy lets you do things like distributed request tracing and wire-level observability.
>
> **[2:26](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=146)** The big question here is what is the difference between these two things?
>
> **[2:31](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=151)** In comparison to Envoy, Linkerd is essentially a bit bigger, consumes more CPU and memory, offers minimalistic configuration and business support hot reloads by design, instead relying on service abstractions and dynamic provisioning.
>
> **[2:45](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=165)** It does support the Thrift protocol in addition to http2 and gRPC, where at the time of recording this course, Envoy did not.
>
> **[2:54](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=174)** So if you're looking for a simple solution for your REST-style service, either should work.
>
> **[3:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=181)** If you're looking to do something more well, elaborate, then perhaps read the docs.
>
> **[3:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=187)** It took me just a few hours to get up and running with Envoy, so it's not a heavy time investment up front to play with it.

> [!info]- Semantic Content
>
> **Code Identifiers:** grpc (3)
> **Env Vars:** tls (1), cpu (1), rest (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1), finally, (1)
> **Cross-References:** in the next (1), we covered (1)
> **Analogies:** such as (1), similar to (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)


### 3. Networking and Runtime

#### Container networking 101
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=1)** - [Instructor] Let's look at the runtime compartment of the CNCF landscape and start with container native networks.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=7)** Container networking was one of the hottest and most confusing topics in 2016, especially when enterprises started to use Kubernetes.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=16)** Actually, it's still confusing, but at least today we have a lot more documentation.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=21)** Anyways, in 2015, there wasn't a specific standard for networking vendors to use when integrating their network stacks with Kubernetes.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=31)** There was confusion for developers about which network provider to use and it was challenging to go from one provider to another because there would always be integration issues.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=41)** The CNI, or the container network interface, solved this issue elegantly.
>
> **[0:46](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=46)** The goal for CNI is to generate a generic plugin-based networking solution for containers.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=53)** This means that the networking plugin vendors should adhere to the CNI spec, which is available on GitHub.
>
> **[1:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=60)** The CNI states that the container runtime must create a new network namespace for the container before invoking any plugins.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=69)** The runtime then determines which networks this container should belong to and, for each network, which plugins must be executed.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=77)** Finally, it adds the container to each network by executing the corresponding plugins for each network sequentially.
>
> **[1:25](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=85)** Another interesting aspect is that the networking config is a JSON file, which makes it easy to understand.
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=92)** One question I frequently get asked is what underlying networking provider should I pick?
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=97)** There are so many in this ecosystem.
>
> **[1:40](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=100)** My recommendation is twofold.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=102)** Look at the most popular implementations available today, and probably more importantly, understand your use case well.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=110)** Calico and Flannel are the two most commonly used networking providers used with Kubernetes today.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=115)** If either of these providers fit your use case, start there and then evolve to something else if necessary.

> [!info]- Semantic Content
>
> **Env Vars:** cni (4), cncf (1), json (1)
> **Code Keywords:** let (1), interface (1), finally, (1), case, (1)
> **Definitions:** means that (1), is a  (1)
> **Documentation:** spec (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Container storage and runtime projects
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=0)** - [Instructor] Storage and runtime are two fundamental concepts when it comes to containers and cloud native applications.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=8)** When we take a look at the storage landscape, we notice that there're a plethora of tools and projects here.
>
> **[0:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=12)** This isn't a surprise because storage, like networking, is the way vendors can sell commercial software in this space.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=20)** Most of the projects in the storage and database landscapes are related to being able to run databases in Kubernetes environment, both SQL and NoSQL.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=29)** Over time, organizations have wanted to store their data closer to their microservices, which has resulted in ways to run databases on Kubernetes and deal with stateful data in a more operational-friendly fashion.
>
> **[0:42](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=42)** The dominant projects in this space, from a CNCF perspective are Vitess, Rook, etcd and TiKV.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=50)** Here's a quick summary of what they do and how they fit together.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=55)** If you're wanting to run MySQL in your Kubernetes cluster, Vitness is a good option to help you horizontally scale your MySQL via sharding.
>
> **[1:03](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=63)** Etcd serves as the brain of Kubernetes.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=66)** It provides a reliable way to store data across a cluster of machines.
>
> **[1:10](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=70)** I wouldn't reuse the etcd that is used by the Kubernetes cluster for your own purposes at scale.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=75)** This will cause larger problems.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=77)** If you do want to use etcd, feel free to spin up another etcd cluster on your Kubernetes cluster.
>
> **[1:23](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=83)** TiKV is a high-performant distributed transactional, easy-to-use key-value store written in Rust.
>
> **[1:29](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=89)** Finally, Rook focuses on orchestrating Ceph on top of Kubernetes.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=95)** Ceph is a distributed storage system that provides file, block and object storage, and is deployed in large-scale production clusters.
>
> **[1:44](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=104)** Let's talk about the container runtime landscape next.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=107)** The container runtime is the software that executes your containerized applications.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=112)** Containerd and CRI-O are the two most prominent projects here.
>
> **[1:56](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=116)** Both projects are open source.
>
> **[1:58](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=118)** Containerd came from Docker and CRI-O from Red Hat, IBM, Intel, SUSE and a few others.
>
> **[2:05](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=125)** Containerd is the standard container runtime and is the default for a few Kubernetes-managed distributions.
>
> **[2:11](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=131)** It's designed to be simple, robust and portable, and is available as a daemon for Linux and Windows.
>
> **[2:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=137)** Containerd manages the complete container lifecycle of the host system: image transfer and storage, container execution and supervision, low-level storage, and network attachment.
>
> **[2:28](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=148)** CRI-O has additional security benefits compared to containerd, and is the default in OpenShift.
>
> **[2:36](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=156)** So with the container runtime interface options here, which one do you pick and what should you be paying attention to?
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=162)** In my opinion, I would use the default CRI that comes with your Kubernetes distribution when you're learning.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=168)** If you need specific features, added security or compartmentalization, then by all means, pick another runtime.

> [!info]- Semantic Content
>
> **Env Vars:** cri (4), sql (1), cncf (1), ibm (1), suse (1)
> **CLI Commands:** mysql (2), docker (1)
> **Code Keywords:** finally, (1), let (1), interface (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)


### 4. Application Observability, Analysis, and Security

#### Cloud native monitoring with Prometheus
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=1)** - [Instructor] Application monitoring is a vendor-heavy segment in IT, and this remains true for the CNCF segment, as well.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=8)** All of the existing monitoring vendors extend the solutions well for Kubernetes and cloud native applications.
>
> **[0:16](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=16)** Prometheus is the open source project that was added as a CNCF project.
>
> **[0:20](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=20)** There are many reasons for this and I'll list out the four major reasons I think Prometheus makes a good fit.
>
> **[0:27](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=27)** First, Prometheus integrates with fetching and reporting Kubernetes cluster metrics.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=32)** It simplifies monitoring your Kubernetes clusters and has the ability to scrape the Kubernetes REST API, giving you insights into the cluster.
>
> **[0:41](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=41)** Second, you can instrument Prometheus to scrape your application metrics that are running in Kubernetes.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=47)** You'll need to add a metrics endpoint to your application and create an exporter to monitor whatever metrics are important to you.
>
> **[0:55](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=55)** Third, it has a really good query language called PromQL that allows you to build sophisticated rules to monitor an alert.
>
> **[1:04](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=64)** Finally, Prometheus comes with Alertmanager, which takes care of the work to remove duplicates, group and route messages to your email, and integrate with third-party alerting tools like PagerDuty.
>
> **[1:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=77)** Prometheus serves as a great backend to store your metrics, but you'll probably want to integrate it with a front end visualization tool like Grafana to get the most out of your graphs.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=87)** That's what I do when I have to monitor our Kubernetes cluster at work.
>
> **[1:31](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=91)** It's worked out really well.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=94)** Finally, one quick note on monitoring in general.
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=97)** Some enterprises are already well integrated with a specific monitoring tool, so check out your existing tool to see if it has integration for Kubernetes.
>
> **[1:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=107)** Prometheus has great Kubernetes monitoring features, but with a lively monitoring ecosystem, chances are all of the platforms will make Kubernetes monitoring easy as well, if they haven't already.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=119)** The end goal is to have a system in place to monitor Kubernetes and your application metrics, whether it's Prometheus or some other tool.

> [!info]- Semantic Content
>
> **Env Vars:** cncf (2), rest (1), api (1)
> **Code Keywords:** finally, (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Application logging
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=0)** - [Instructor] Similar to monitoring, log management in IT also has a lot of vendors, and open source projects.
>
> **[0:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=7)** The growth at DevOps has helped system and application logging become more visible.
>
> **[0:11](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=11)** This continues to be true in the Cloud Native space as well, where most of the logging vendors and open source projects are also compatible with Kubernetes and Cloud Native software.
>
> **[0:21](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=21)** Logging tools collect, store, and analyze application and infrastructure messages to track errors, warnings, or any related data.
>
> **[0:31](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=31)** Some of their tools handle every aspect from collection to analysis while others focus on just a single task like collection.
>
> **[0:40](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=40)** One thing that is different in the Kubernetes ecosystem versus traditional applications is that instead of sending your logs to files, you want to send your logs to standard output or standard error streams.
>
> **[0:50](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=50)** The Kubernetes node agent also known is Kubelet will collect these streams and write them to local files behind the scenes so you can access them with Kubernetes via the Kubectl logs command.
>
> **[1:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=61)** From a CNCF perspective, Fluentd is the most common tool that I've seen being used in the ecosystem, as well as the CNCF project in this space.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=69)** Fluentd joined CNCF in late 2016 as the unified logging platform for Cloud Native applications.
>
> **[1:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=75)** It provides the log aggregation layer that allows you to filter, buffer, and route your logs from various applications and platforms to a backend of your choosing.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=84)** If you're familiar with the Elasticsearch, Logstash, Kibana, or ELK Stack, you can replace Logstash or Beats with Fluentd.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=93)** When FluentD first joined the CNCF, it was positioned well to ingest logs from despaired applications, the Docker Daemon logs, the Kubernetes API server logs, which made it a great fit for the foundation.
>
> **[1:46](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=106)** It's a popular solution in the Cloud Native space with a strong community behind it.
>
> **[1:50](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=110)** It's performant, reliable and flexible to use.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=115)** Now, if you're in a large enterprise, you might already be using enterprise logging tools, maybe like a Splunk or Sumo Logic.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=122)** The good news is that most enterprise tooling have a module for Kubernetes applications.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=127)** So your existing logging methodologies should work pretty well in a Cloud Native environment as well.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=132)** The big caveat could be cost, so definitely look into that before you start.

> [!info]- Semantic Content
>
> **Env Vars:** cncf (4), elk (1), api (1)
> **CLI Commands:** node (1), kubectl (1), docker (1)
> **Code Keywords:** module (1)
> **Analogies:** similar to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Application tracing
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=0)** - [Instructor] I often progress through these stages of debugging when I'm trying to figure out why an app isn't functioning.
>
> **[0:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=6)** I don't always find myself at step six, but with microservices, debugging issues does get a lot more complicated.
>
> **[0:14](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=14)** Before the tooling evolved in to cloud native ecosystem, I was pretty much equipped with detailed log statements and multiple screens to see log data flowing in.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=23)** Fortunately for me, the CNCF stepped in and introduced Open Telemetry and Jaeger as important projects to help with issues of tracing applications.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=32)** Also, I'd like to give a shout out to ZipKin, which is another open source project, similar to these.
>
> **[0:37](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=37)** Let's take a look.
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=39)** Think of Open Telementry as the standard for setting up a distributed trace in your application.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=44)** It started out as a spec, but has grown to be a collection of tools, APIs, and SDKs.
>
> **[0:49](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=49)** Use it in your applications to instrument, generate, collect, and export telemetry data to help you analyze applications performance and behavior.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=59)** There are a couple of important concepts to understand with Open Telemetry, traces and spans.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=65)** Think of a trace as the progress of an entire request coming into the system.
>
> **[1:09](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=69)** For example, if someone clicks on a purchase button on an e-commerce site, the trace would encompass all of the actions behind the scenes from the start of the button click to the end of the request.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=79)** Spans represent the work actually being done by a specific service or component involved in the request as it flows through the system.
>
> **[1:27](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=87)** So if we're using the same example where somebody clicks a purchase button on any e-commerce site, a span might be the part of the trace that validates if their credit card is valid for that purchase.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=98)** Now that we know the basic concepts, it's on the developer to instrument the application with the required start and finish functions in the APIs, to tell you how long a specific call might take to complete.
>
> **[1:49](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=109)** The more you instrument your code with traces and spans, the more visibility you will have about your code performance and characteristics.
>
> **[1:55](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=115)** You can also instrument the calls by attaching tags and logs to an individual trace or span to give the span a lot more context.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=124)** So how do you visualize all of this data?
>
> **[2:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=126)** This is where something like Jaeger comes in.
>
> **[2:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=128)** Jaeger can be broken down to a few components, the client, agent, collector, and the supporting APIs, known as the Jaeger query, and finally the UI.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=140)** The client lives alongside your microservices code and reports data to the Jaeger agent running on the host or the container.
>
> **[2:27](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=147)** The agent then forwards this information to the collector that stores the span in a database that is queried and reported to the Jaeger UI.
>
> **[2:36](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=156)** Simply put Jaeger allows you to trace through every call in your code and decide where the bottlenecks might be.
>
> **[2:42](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=162)** Use Jaeger to improve your overall code quality or find bugs in your application.
>
> **[2:48](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=168)** Tracing is the next evolution of logging, monitoring, and metrics.
>
> **[2:52](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=172)** The tracing paradigm is still early, but I think it allows developers and SREs to get a lot more context to their logs and metrics.
>
> **[2:59](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=179)** Plus it takes some of the guesswork about why applications are not performing the way they are supposed to.
>
> **[3:05](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=185)** Why let's a new paradigm, I am convinced that tracing is the way to instrument your microservices and as the future for debugging cloud native applications.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Code Keywords:** let (2)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** cncf (1)
> **Documentation:** spec (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Security, policy, and distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=0)** - [Instructor] As a proponent of DevSecOps, I'm happy to see that the thought leaders in the cloud native space pay attention to policy and security.
>
> **[0:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=8)** They've been thinking about how to treat both of these concerns proactively, rather than in a reactive manner, as is so common in the software industry.
>
> **[0:17](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=17)** In the current landscape, there are three foundational areas where security projects play a critical role: image security, policy management and runtime security.
>
> **[0:26](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=26)** Let's first talk about the security with respect to images.
>
> **[0:29](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=29)** Container images are effectively black boxes.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=32)** The questions people generally ask are, what is in this image, or how do I know if this image contains vulnerabilities?
>
> **[0:39](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=39)** Notary and the Update Framework, also TUF, are projects that are leading the CNCF for this space.
>
> **[0:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=47)** TUF is actually a framework, much like the CNI, and various tools implement this specification.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=53)** TUF hardened software update systems, which are vulnerable to many known attacks.
>
> **[0:57](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=57)** It provides protection against attackers that compromise the signing keys or repository.
>
> **[1:05](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=65)** Notary is a mature implementation of the TUF spec and is a tool that can be used by teams to secure their update systems.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=72)** Docker uses Notary behind the scenes to implement Docker Content Trust as well as all of the Docker Trust subcommands.
>
> **[1:19](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=79)** So if you're working in a scenario where you have to deal with a lot of software updates, et cetera, make sure to take a look at these projects.
>
> **[1:28](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=88)** From a runtime perspective, one of the issues with Kubernetes is that the default for access to a Kubernetes cluster can be very broad.
>
> **[1:36](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=96)** This makes it a misconfiguration haven and an attractive target for attackers.
>
> **[1:42](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=102)** To hardened clusters, you might want to consider better policies to allow for more fine grain access and enforcement.
>
> **[1:48](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=108)** This is where projects like the Open Policy Agent, also known as OPA, fit in.
>
> **[1:52](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=112)** OPA is a standard tool set that allows for the same policy language, model and API that can be used across the cloud native stack.
>
> **[2:02](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=122)** Finally, from a runtime security perspective, you want to have the tooling to continuously detect and alert on threads and unexpected application or cluster behaviors.
>
> **[2:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=132)** This is where a tool like Falco shines.
>
> **[2:15](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=135)** Falco was initially a Sysdig project that was donated to the CNCF.
>
> **[2:20](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=140)** It continuously parses the Linux system calls from the kernel.
>
> **[2:23](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=143)** It allows you to configure policies to strengthen your container security by matching rules to what's going on in your running system.
>
> **[2:30](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=150)** And it allows for alerts when there are policy violations so that you can catch and remediate issues quicker and thereby reducing risk.
>
> **[2:40](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=160)** There are actually a lot of tools in the security, policy and distribution space.
>
> **[2:44](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=164)** They can be open source as well as a lot of vendor-driven tools as well.
>
> **[2:47](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=167)** You don't necessarily need to pick one of the CNCF tools we've talked about in the section, but definitely look at the capabilities they provide and ensure that you have all your surface areas covered.

> [!info]- Semantic Content
>
> **Env Vars:** tuf (4), cncf (3), opa (2), cni (1), api (1)
> **CLI Commands:** docker (3), make (1)
> **Definitions:** is a  (3), known as (1)
> **Code Keywords:** let (1), finally, (1)
> **Documentation:** specification (1), spec (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### The CNCF today and tomorrow
> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=0)** - [Instructor] And we've come to the end of the course.
>
> **[0:02](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=2)** Thanks for sticking through it with me.
>
> **[0:05](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=5)** I know the course was a whirlwind of everything in the CNCF, but I wanted to give you a quick overview of the ecosystem.
>
> **[0:13](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=13)** Remember that the ecosystem is quickly evolving, project start, grow, merge, or sometimes lose traction within the community.
>
> **[0:23](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=23)** Sometimes, when I look at the landscape, it reminds me of the Circle CI blog posts about it's the future, where everything changes too quickly.
>
> **[0:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=32)** The CNCF does help with project churn because it tries to shepherd the community to the best choices out there.
>
> **[0:38](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=38)** In my opinion, while it does that well, it's still hard to know how the landscape will play out in the end.
>
> **[0:44](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=44)** If you're just getting started with Kubernetes, and the CNCF, begins slowly with a few projects that solve your use case before expanding out.
>
> **[0:53](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=53)** Another way to know whether a project has gotten traction with the CNCF is to look at the project maturation criteria.
>
> **[0:59](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=59)** The maturity level is a signal by the CNCF as to what sorts of enterprises should be adopting different projects.
>
> **[1:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=66)** Projects accepted into the CNCF have three levels, sandbox, incubating and graduated.
>
> **[1:12](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=72)** Projects increase their maturity by demonstrating the sustainability to the CNCF Technical Oversight Committee that they can have adoption, a healthy rate of change, and committers for multiple organizations for example.
>
> **[1:24](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=84)** Projects increase their maturity by demonstrating the sustainability to the CNCF Technical Oversight Committee, things like, that they have adoption, there's a healthy rate of change, and that there are committers from multiple organizations.
>
> **[1:38](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=98)** Let's say you're a developer looking for practical training, check out the other Kubernetes, and cloud native courses in the library, or consider getting certified as a certified Kubernetes administrator or a certified Kubernetes application developer or another certification by the CNCF.
>
> **[1:53](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=113)** Also, I'll try to keep up with the new container technology on the Agile Admin blog.
>
> **[1:57](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=117)** So keep tabs on that as well.
>
> **[1:59](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=119)** And if you're really stuck, feel free to reach out to me on LinkedIn or Twitter.
>
> **[2:04](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=124)** Good luck on your journey with Cloud Native applications.
>
> **[2:07](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=127)** I wish you the best of luck.

> [!info]- Semantic Content
>
> **Env Vars:** cncf (9)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Getting Started with Kubernetes]]
← [[Kubernetes- Microservices]] | **5 of 6** | [[Securing Containers and Kubernetes Ecosystem]] →

## Appears In

- [[Getting Started with Kubernetes]]

## Related Courses

_Courses sharing skills:_

- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Kubernetes, Cloud-Native Applications
- [[Securing Containers and Kubernetes Ecosystem]] — Kubernetes
- [[Kubernetes- Microservices]] — Kubernetes
- [[Kubernetes- Essential Tools]] — Kubernetes
- [[Kubernetes- Your First Project (2021)]] — Kubernetes

---

[↑ Back to top](#)