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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Kubernetes-%20Cloud%20Native%20Ecosystem.md)

![Kubernetes: Cloud Native Ecosystem](https://media.licdn.com/dms/image/v2/C560DAQFgC_JiqphLxw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639678943330?e=2147483647&amp;v=beta&amp;t=B1cK0bszYU19K-ctq6PHATHz9ocdEYN6KrmCRYbhnB0)

# Kubernetes: Cloud Native Ecosystem

> This course covers many of the tools hosted by the Cloud Native Computing Foundation, with an emphasis on the problems they solve. Instructor Karthik Gaekwad covers not just these tools, but also the mindset and engineering challenges involved in adopting cloud native or cloud distributed system architectures. Karthik begins by introducing the Cloud Native Computing Foundation (CNCF), the vendor-n

> [LinkedIn Learning](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671) | 34m | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Kubernetes: Cloud native ecosystem](#kubernetes-cloud-native-ecosystem)
  - [What you need to know](#what-you-need-to-know)
- [**1. Cloud Native Computing Foundation**](#1-cloud-native-computing-foundation) (2 videos)
  - [What is the CNCF?](#what-is-the-cncf)
  - [First look at the CNCF landscape](#first-look-at-the-cncf-landscape)
- [**2. Management and Orchestration**](#2-management-and-orchestration) (3 videos)
  - [Application development and deployment](#application-development-and-deployment)
  - [Service discovery and registry](#service-discovery-and-registry)
  - [Managing cloud native services](#managing-cloud-native-services)
- [**3. Networking and Runtime**](#3-networking-and-runtime) (2 videos)
  - [Container networking 101](#container-networking-101)
  - [Container storage and runtime projects](#container-storage-and-runtime-projects)
- [**4. Application Observability, Analysis, and Security**](#4-application-observability-analysis-and-security) (4 videos)
  - [Cloud native monitoring with Prometheus](#cloud-native-monitoring-with-prometheus)
  - [Application logging](#application-logging)
  - [Application tracing](#application-tracing)
  - [Security, policy, and distribution](#security-policy-and-distribution)
- [**Conclusion**](#conclusion) (1 videos)
  - [The CNCF today and tomorrow](#the-cncf-today-and-tomorrow)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Kubernetes: Cloud native ecosystem](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/kubernetes-cloud-native-ecosystem?u=76281980&t=0)** - [Karthik] Are you confused with all the different tools and platforms provided by the cloud native computing foundation? Not sure what they do or how they help you build your [[Kubernetes]] applications? Then you're in the right place. Hi, I'm Karthik Gaewad, @iteration1 on Twitter and blogger on the [agileadmin.com](https://agileadmin.com). I work on the managed Kubernetes team at Oracle and work with CNCF tools on a regular basis. In this course, we'll go over the tools and platforms provided by the CNCF. We'll discuss management and orchestration, networking and runtime, application observability, and analysis and security. You'll leave with an overall understanding of the landscape, what the tools are, how they're positioned, and where or why to use them. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2)
> **Env Vars:** cncf (2)
> **URLs:** [agileadmin.com](https://agileadmin.com) (1)
> **Speakers:** - [karthik] (1)

#### [What you need to know](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-you-need-to-know?u=76281980&t=0)** - [Instructor] The only prerequisites for this course is having a general understanding of IT concepts and an interest in building cloud native applications using [[Kubernetes]]. We have a number of courses in the library on IT and [[DevOps]] to help you get started if you're new to the industry. If you're already familiar with Kubernetes, you're ahead of the curve. But if not, I'd recommend that you take a look at the Learning Kubernetes course here in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3), [[DevOps]] (1)
> **Speakers:** - [instructor] (1)


### 1. Cloud Native Computing Foundation

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the CNCF?](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=1)** - [Instructor] The Cloud Native Computing Foundation, or the CNCF, is the vendor neutral home for fast-growing projects in the Cloud Native landscape, like [[Kubernetes]], Prometheus, GRPC, and a whole lot of others. It's a part of the [[Linux]] foundation and was founded in late 2015. The CNCF acts as a steward for Cloud Native projects, so that they're available to the community and free of partisan issues from the company that might have released the project. Also, it pays attention to the UX and compatibility of its projects so that they're all interoperable. It also fosters the evolution of projects and the entire ecosystem. This means that it looks for new projects that will add to the liveliness of the ecosystem or build common technical standards for existing projects. Ever been to KubeCon or a Kubernetes meetup? The CNCF actually puts on these conferences and helps meetup organizers to host them in different cities. It's also created a Kubernetes training and certification program in late 2017 for developers to get up to speed on Kubernetes. Finally, the CNCF makes sure that the technology is accessible and reliable. No one likes to use a project from [[GitHub]] that isn't supported anymore, or doesn't work with newer versions of software. From my perspective, having an organization that helps the development of Kubernetes, related projects, and the ecosystem, is great. The structure provided by the CNCF is something that is different from other software and platforms I've seen in the past. It promotes success for the entire ecosystem and makes
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/what-is-the-cncf?u=76281980&t=94)** Kubernetes a strong platform choice for Cloud Native development from an enterprise perspective.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[Linux]] (1), [[GitHub]] (1)
> **Env Vars:** cncf (5), grpc (1)
> **Tools:** github (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [First look at the CNCF landscape](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=0)** - [Instructor] The cloud native landscape is vast and encompasses many categories and projects. To look at what's going on in the cloud native landscape, most folks start by looking at landscape.[cncf.io](https://cncf.io). It encompasses all the categories, projects and companies. However, for folks new to the ecosystem, this diagram is overwhelming. Over time, there have been more categories, projects and companies that have been added and there are over 450 cards at the time of writing this course. A more digestible way to look at the landscape is to visit the trail map. It is a recommended way by the CNCF to leverage open source, cloud native technologies to help with your cloud native journey. And it's organized in a logical way for an organization to update cloud native features. The cloud native journey begins with containerization. The most common way to containerize applications is by using Docker. Most applications can be containerized and the recommendation is to split your applications using a [[Microservices]] methodology. The next step is [[Continuous Integration (CI)|continuous integration]] and delivery. This allows changes to your source code to automatically build a new container image, test your container and then deploy your containers to a staging environment. Step three is by orchestration and application definition. Now that the containers are built, and a CI/CD system is in place, there is the need to orchestrate these containers to an environment and be able to deploy the containers at scale, whether it's on premise or in the cloud.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=94)** Observability and analysis is the next section. Having a solution for logging, metrics and observability are critical for running and debugging container-based applications. [[Fine Tuning]] your observability is crucial to get your container infrastructure to work well, especially when you're running your applications at scale in a distributed fashion. I categorize the next few sections for intermediate and advanced cloud native users. Proxies, discovery and service meshes, followed by networking, policy and security. When you're running containers at scale in a microservices fashion, it is important to have proxies and service discovery features to allow for constant container communication. Advanced cloud native users might also want to use a service [[Mesh]] layer for better connectivity and to get the benefits of observability, traffic control and fault injection. From a networking standpoint, consider using a project that is compliant with a container network interface, also known as the CNI. This allows you to change between different networking plugins at a later point of time. There are also a lot of security considerations you'll want to consider for cloud native applications from containers to the cluster to the applications running on the cluster. Generally, you'll want to define policies for your applications as well as invest in tooling for anomaly detection. It has become a common practice to store data in [[Kubernetes]] clusters and the next step in the trail map addresses the methodologies, solutions and tooling to store your data, alongside your cluster in Kubernetes.
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/first-look-at-the-cncf-landscape?u=76281980&t=188)** The eighth stop on the trail map has to do with additional ways to transfer data to and from your services. While [[Representational State Transfer (REST)|REST]]-style services are very popular, you might require your applications to stream data or require a messaging system or perhaps an eventing framework as well. The streaming and messaging sections prescribe frameworks to allow for better performance to stream data, and the standards-based approach for events and messages. The final two sections of the trail map are container registry and runtime, and software distribution. Both these sections have projects that'll help organizations level up their ways of delivering containers and software. However, not all organizations have the use case that these sections go about solving. So it might not always be pertinent. Now that we know the basics of the trail map, let's explore these sections in a little bit more detail in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (2), [[Kubernetes]] (2), [[Continuous Integration (CI)|Continuous integration]] (1), [[Fine Tuning]] (1), [[Mesh]] (1)
> **Env Vars:** cncf (1), cni (1), rest (1)
> **CLI Commands:** docker (1), cd (1)
> **Definitions:** is a  (1), known as (1)
> **URLs:** [cncf.io](https://cncf.io) (1)
> **Exercise Files:** source code (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 2. Management and Orchestration

[↑ Back to Table of Contents](#table-of-contents)

#### [Application development and deployment](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=0)** - [Instructor] Developing cloud native applications can be a challenge for new folks, because there are so many technologies that can be used interchangeably. So how do you get started? And what are the most important things you need to know? From an application developer perspective, the first step to cloud native begins by containerizing your applications. Most applications can be containerized, and Docker has become the standard way to build and run new containers. However, it isn't your only option. Projects like containerd and Podman are gaining traction. Take a look at these as well, especially if you're using [[Kubernetes]] to run your containers at scale. After containerizing your applications, it's a great time to add some process to the workflow and add some [[Continuous Integration (CI)|continuous integration]] and delivery. It is common practice to use your CI system to build your container images and then deploy them to your image repository once you check in your code to source control. In addition, you could also deploy your application to a Kubernetes staging or production environment if your test pass to add that [[Continuous Delivery (CD)|continuous delivery]] step. From a trail map perspective, take a look at the Argo project for your CI/CD needs if you don't currently have a solution. Argo has many features, but it's commonly used for CI and CD purposes. You can use it to build your container images when there are changes to your code in source control. [[Argo CD]] allows you to follow a declarative pattern to deploy applications and their updates to Kubernetes via [[GitHub]]'s model. When it comes to running your containers,
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=94)** Kubernetes is that de facto way to do so. Kubernetes allows you to treat your compute nodes as a single cluster, so it solves the challenge of scaling applications and managing computing and resources in an elegant way. It's also cloud agnostic, so it can be run on any cloud in either a managed or unmanaged fashion. It beat out many other container orchestration platforms early on and has become the standard way for deploying containerized applications. Once you start dealing with more complicated applications in Kubernetes or dealing with a [[Microservices]] pattern, you might realize that you need a package manager that just using Kubernetes manifest to deploy your applications. One such package manager that's getting a lot of traction is called [[Helm]]. Helm allows you to define, install and upgrade Kubernetes applications via Helm Charts. You can create, version, share and publish Helm Charts. I like to think of Helm for Kubernetes the same way we have app for [[Linux]] or perhaps [[npm]] for node or [[JavaScript]] applications. Finally, from an [[Application Development]] perspective, there are often reasons you might want to stream your data or have a messaging interface for your microservices. There are a few CNCF projects that can help in these scenarios. If you're dealing with APIs, and you find that your [[Representational State Transfer (REST)|REST]] or SOAP APIs aren't performant, consider investigating gRPC remote procedure calls, also known as gRPC. If your need is for messaging or queuing, you might want to take a look at NATS. Finally,
>
> **[3:06](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-development-and-deployment?u=76281980&t=186)** if you're thinking about event-based applications, definitely take a look at the CloudEvents specification. This allows for a standard way to describe event data. When you're making a shift to the cloud native ecosystem, you'll want to strongly consider some of the methodologies we've talked about in the section to make your transition. If you're looking for more information about Kubernetes, check out the Learning Kubernetes course in the library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (11), [[Helm]] (5), [[Microservices]] (2), [[Continuous Integration (CI)|Continuous integration]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1)
> **CLI Commands:** cd (3), docker (1), npm (1), node (1), find (1)
> **Env Vars:** npm (1), cncf (1), rest (1), soap (1), nats (1)
> **Code Identifiers:** grpc (2)
> **Definitions:** is called (1), known as (1)
> **Documentation:** specification (1)
> **Tools:** github (1)
> **Prerequisites:** install (1)

#### [Service discovery and registry](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=0)** - [Instructor] Let's talk about service discovery and container registries. Both service discovery and registries are concepts that came into the spotlight with cloud and container applications. When containers first became popular, it was difficult to network all of the different containers together because they might have been running on different hosts with IPs on a unique port. There was a lot of coordination that needed to be done at container startup to get to a running system. Enter service discovery, which provided a coordination mechanism for containers to communicate with each other and has many patterns to accomplish this. Consul and etcd are the classic examples of service discovery tooling but really so is DNS. A typical [[Kubernetes]] install will have an etcd cluster to store its data, and also have a DNS provider like CoreDNS for the DNS layer. And speaking of CoreDNS, it's a project that's supported by the CNCF as a graduated project for the ecosystem. CoreDNS is super fast and flexible because of it's plug-in architecture. It's also written in Golang, so if for some reason this functionality that's not provided out of the box, you can add to it by writing a plugin. It is also the recommended DNS server for Kubernetes. Let's talk about container registries for a second. A container registry is the repository where you store, retrieve and distribute your container images. Think of it like [[Git]] or [[GitHub]] but for container images. Each container image has a unique ID that can be referenced by a name and a label. Initially, most folks would store
>
> **[1:37](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/service-discovery-and-registry?u=76281980&t=97)** their container images inside of Docker Hub, which is not really surprising because of all the work that Docker had done with containers. Today, however, you have many choices. While Docker Hub is still very popular, you can use other registries to store container images. If you're running in the cloud, most cloud providers have a private registry you can use. On-premise registries that are popular in enterprises include artifactory from JFrog, or the GitLab container registry. There's also a CNCF project that plays in this space and it's called Harbor. Harbor is an open source registry that secures artifacts with policies and role-based access control. It ensures that images are scanned and free from vulnerabilities, and signs images as trusted. In my opinion, if your organization isn't already using a solution for a registry, and is thinking about going the open source route, or needs something to work in your own data center, then definitely invest time in getting Harbor up and running. It looks full featured and is a graduated CNCF project. We've covered a couple of topics in this section, from service discovery to container registry. Both of these items are critical pieces of development for cloud native applications. Definitely take a look at the course handouts for links for information on each of these topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[Git]] (1), [[GitHub]] (1)
> **Env Vars:** dns (4), cncf (3)
> **CLI Commands:** docker (3), git (1)
> **Tools:** github (1), gitlab (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** think of it like (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)

#### [Managing cloud native services](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=1)** - [Instructor] In my estimation, it'll be the service management space that will show the most growth in the next few years. For a long time, the goal was to have an operations tool that could deploy and manage your applications. This is where [[Kubernetes]] fits in, and solves the problem in an elegant fashion. As the Kubernetes platform grew, the people in the cloud native space realized that there were many asks for Kubernetes. Some operational, like how do I scale nodes, and some developmental, such as how do I manage my applications in a better way? There have been huge strides made from a development perspective, which is captured in this service management diagram. We covered gRPC earlier but now let's explore service meshes. From a high level, a service [[Mesh]] is the layer that handles all of the different communication and networking intricacies between [[Microservices]]. Two projects that implement service meshes that are popular in the ecosystem today are Linkerd and Envoy. We'll start with Linkerd. Linkerd is a transparent network proxy that acts as a service mesh. It's the one-stop shop for managing, controlling, and monitoring service-to-service communication in a larger application. Companies around the world use Linkerd to simplify communications within their software infrastructure. It takes care of the error-prone parts of cross-service communications and has features including latency-aware load balancing, connection pooling, TLS, instrumentation, and request-level [[Routing]].
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=94)** All of these features make your application code more scalable, performance and resilient. Don't tweet this but I don't use Linkerd very extensively. I've actually used Envoy a lot more. Envoy came from Lyft and was written in C++. But the idea of Envoy is similar to Linkerd. It's a small server with a small footprint, and supports http2 and gRPC. Envoy supports advanced load balancing concepts that are becoming a requirement in the dev world. Things like rate limiting, circuit breaking patterns, automatic retries, et cetera. I find that Envoy is highly configurable by design, and provides APIs for [[Configuration Management]]. Finally, Envoy lets you do things like distributed request tracing and wire-level observability. The big question here is what is the difference between these two things? In comparison to Envoy, Linkerd is essentially a bit bigger, consumes more CPU and memory, offers minimalistic configuration and business support hot reloads by design, instead relying on service abstractions and dynamic provisioning. It does support the Thrift protocol in addition to http2 and gRPC, where at the time of recording this course, Envoy did not. So if you're looking for a simple solution for your [[Representational State Transfer (REST)|REST]]-style service, either should work. If you're looking to do something more well, elaborate, then perhaps read the docs. It took me just a few hours
>
> **[3:08](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/managing-cloud-native-services?u=76281980&t=188)** to get up and running with Envoy, so it's not a heavy time investment up front to play with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3), [[Mesh]] (2), [[Microservices]] (1), [[Routing]] (1), [[Configuration Management]] (1)
> **Code Identifiers:** grpc (3)
> **Env Vars:** tls (1), cpu (1), rest (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** in the next (1), we covered (1)
> **Analogies:** such as (1), similar to (1)
> **Documentation:** the docs (1)
> **Definitions:** is a  (1)


### 3. Networking and Runtime

[↑ Back to Table of Contents](#table-of-contents)

#### [Container networking 101](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=1)** - [Instructor] Let's look at the runtime compartment of the CNCF landscape and start with container native networks. Container networking was one of the hottest and most confusing topics in 2016, especially when enterprises started to use [[Kubernetes]]. Actually, it's still confusing, but at least today we have a lot more documentation. Anyways, in 2015, there wasn't a specific standard for networking vendors to use when integrating their network stacks with Kubernetes. There was confusion for developers about which network provider to use and it was challenging to go from one provider to another because there would always be integration issues. The CNI, or the container network interface, solved this issue elegantly. The goal for CNI is to generate a generic plugin-based networking solution for containers. This means that the networking plugin vendors should adhere to the CNI spec, which is available on [[GitHub]]. The CNI states that the container runtime must create a new network namespace for the container before invoking any plugins. The runtime then determines which networks this container should belong to and, for each network, which plugins must be executed. Finally, it adds the container to each network by executing the corresponding plugins for each network sequentially. Another interesting aspect is that the networking config is a [[JSON]] file, which makes it easy to understand. One question I frequently get asked is
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-networking-101?u=76281980&t=94)** what underlying networking provider should I pick? There are so many in this ecosystem. My recommendation is twofold. Look at the most popular implementations available today, and probably more importantly, understand your use case well. Calico and Flannel are the two most commonly used networking providers used with Kubernetes today. If either of these providers fit your use case, start there and then evolve to something else if necessary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (3), [[GitHub]] (1), [[JSON]] (1)
> **Env Vars:** cni (4), cncf (1), json (1)
> **Definitions:** means that (1), is a  (1)
> **Documentation:** spec (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Container storage and runtime projects](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=0)** - [Instructor] Storage and runtime are two fundamental concepts when it comes to containers and cloud native applications. When we take a look at the storage landscape, we notice that there're a plethora of tools and projects here. This isn't a surprise because storage, like networking, is the way vendors can sell commercial software in this space. Most of the projects in the storage and database landscapes are related to being able to run [[Databases]] in [[Kubernetes]] environment, both [[SQL]] and [[NoSQL]]. Over time, organizations have wanted to store their data closer to their [[Microservices]], which has resulted in ways to run databases on Kubernetes and deal with stateful data in a more operational-friendly fashion. The dominant projects in this space, from a CNCF perspective are Vitess, Rook, etcd and TiKV. Here's a quick summary of what they do and how they fit together. If you're wanting to run [[MySQL]] in your Kubernetes cluster, Vitness is a good option to help you horizontally scale your MySQL via sharding. Etcd serves as the brain of Kubernetes. It provides a reliable way to store data across a cluster of machines. I wouldn't reuse the etcd that is used by the Kubernetes cluster for your own purposes at scale. This will cause larger problems. If you do want to use etcd, feel free to spin up another etcd cluster on your Kubernetes cluster. TiKV is a high-performant distributed transactional, easy-to-use key-value store written in [[Rust (Programming Language)|Rust]]. Finally, Rook focuses on orchestrating Ceph on top of Kubernetes.
>
> **[1:35](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/container-storage-and-runtime-projects?u=76281980&t=95)** Ceph is a distributed storage system that provides file, block and object storage, and is deployed in large-scale production clusters. Let's talk about the container runtime landscape next. The container runtime is the software that executes your containerized applications. Containerd and CRI-O are the two most prominent projects here. Both projects are open source. Containerd came from Docker and CRI-O from Red Hat, IBM, Intel, SUSE and a few others. Containerd is the standard container runtime and is the default for a few Kubernetes-managed distributions. It's designed to be simple, robust and portable, and is available as a daemon for [[Linux]] and [[Windows]]. Containerd manages the complete container lifecycle of the host system: image transfer and storage, container execution and supervision, low-level storage, and network attachment. CRI-O has additional security benefits compared to containerd, and is the default in OpenShift. So with the container runtime interface options here, which one do you pick and what should you be paying attention to? In my opinion, I would use the default CRI that comes with your Kubernetes distribution when you're learning. If you need specific features, added security or compartmentalization, then by all means, pick another runtime.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (9), [[Databases]] (2), [[MySQL]] (2), [[SQL]] (1), [[NoSQL]] (1)
> **Env Vars:** cri (4), sql (1), cncf (1), ibm (1), suse (1)
> **CLI Commands:** mysql (2), docker (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)


### 4. Application Observability, Analysis, and Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud native monitoring with Prometheus](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=1)** - [Instructor] Application monitoring is a vendor-heavy segment in IT, and this remains true for the CNCF segment, as well. All of the existing monitoring vendors extend the solutions well for [[Kubernetes]] and cloud native applications. Prometheus is the open source project that was added as a CNCF project. There are many reasons for this and I'll list out the four major reasons I think Prometheus makes a good fit. First, Prometheus integrates with fetching and reporting Kubernetes cluster metrics. It simplifies monitoring your Kubernetes clusters and has the ability to scrape the Kubernetes [[Representational State Transfer (REST)|REST]] API, giving you insights into the cluster. Second, you can instrument Prometheus to scrape your application metrics that are running in Kubernetes. You'll need to add a metrics endpoint to your application and create an exporter to monitor whatever metrics are important to you. Third, it has a really good query language called PromQL that allows you to build sophisticated rules to monitor an alert. Finally, Prometheus comes with Alertmanager, which takes care of the work to remove duplicates, group and route messages to your email, and integrate with third-party alerting tools like PagerDuty. Prometheus serves as a great backend to store your metrics, but you'll probably want to integrate it with a front end visualization tool like Grafana to get the most out of your graphs. That's what I do when I have to monitor our Kubernetes cluster at work. It's worked out really well.
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/cloud-native-monitoring-with-prometheus?u=76281980&t=94)** Finally, one quick note on monitoring in general. Some enterprises are already well integrated with a specific monitoring tool, so check out your existing tool to see if it has integration for Kubernetes. Prometheus has great Kubernetes monitoring features, but with a lively monitoring ecosystem, chances are all of the platforms will make Kubernetes monitoring easy as well, if they haven't already. The end goal is to have a system in place to monitor Kubernetes and your application metrics, whether it's Prometheus or some other tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (10), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** cncf (2), rest (1), api (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Application logging](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=0)** - [Instructor] Similar to monitoring, log management in IT also has a lot of vendors, and open source projects. The growth at [[DevOps]] has helped system and application logging become more visible. This continues to be true in the Cloud Native space as well, where most of the logging vendors and open source projects are also compatible with [[Kubernetes]] and Cloud Native software. Logging tools collect, store, and analyze application and infrastructure messages to track errors, warnings, or any related data. Some of their tools handle every aspect from collection to analysis while others focus on just a single task like collection. One thing that is different in the Kubernetes ecosystem versus traditional applications is that instead of sending your logs to files, you want to send your logs to standard output or standard error streams. The Kubernetes node agent also known is Kubelet will collect these streams and write them to local files behind the scenes so you can access them with Kubernetes via the Kubectl logs command. From a CNCF perspective, Fluentd is the most common tool that I've seen being used in the ecosystem, as well as the CNCF project in this space. Fluentd joined CNCF in late 2016 as the unified logging platform for Cloud Native applications. It provides the log aggregation layer that allows you to filter, buffer, and route your logs from various applications and platforms to a backend of your choosing. If you're familiar with the [[Elasticsearch]], Logstash, Kibana, or ELK Stack, you can replace Logstash or Beats with Fluentd.
>
> **[1:33](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-logging?u=76281980&t=93)** When FluentD first joined the CNCF, it was positioned well to ingest logs from despaired applications, the Docker Daemon logs, the Kubernetes API server logs, which made it a great fit for the foundation. It's a popular solution in the Cloud Native space with a strong community behind it. It's performant, reliable and flexible to use. Now, if you're in a large enterprise, you might already be using enterprise logging tools, maybe like a Splunk or Sumo Logic. The good news is that most enterprise tooling have a module for Kubernetes applications. So your existing logging methodologies should work pretty well in a Cloud Native environment as well. The big caveat could be cost, so definitely look into that before you start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (6), [[DevOps]] (1), [[Elasticsearch]] (1)
> **Env Vars:** cncf (4), elk (1), api (1)
> **CLI Commands:** node (1), kubectl (1), docker (1)
> **Analogies:** similar to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Application tracing](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=0)** - [Instructor] I often progress through these stages of debugging when I'm trying to figure out why an app isn't functioning. I don't always find myself at step six, but with [[Microservices]], debugging issues does get a lot more complicated. Before the tooling evolved in to cloud native ecosystem, I was pretty much equipped with detailed log statements and multiple screens to see log data flowing in. Fortunately for me, the CNCF stepped in and introduced Open Telemetry and Jaeger as important projects to help with issues of tracing applications. Also, I'd like to give a shout out to ZipKin, which is another open source project, similar to these. Let's take a look. Think of Open Telementry as the standard for setting up a distributed trace in your application. It started out as a spec, but has grown to be a collection of tools, APIs, and SDKs. Use it in your applications to instrument, generate, collect, and export telemetry data to help you analyze applications performance and behavior. There are a couple of important concepts to understand with Open Telemetry, traces and spans. Think of a trace as the progress of an entire request coming into the system. For example, if someone clicks on a purchase button on an [[E-Commerce]] site, the trace would encompass all of the actions behind the scenes from the start of the button click to the end of the request. Spans represent the work actually being done by a specific service or component involved in the request as it flows through the system. So if we're using the same example where somebody clicks a purchase button on any e-commerce site,
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=92)** a span might be the part of the trace that validates if their credit card is valid for that purchase. Now that we know the basic concepts, it's on the developer to instrument the application with the required start and finish functions in the APIs, to tell you how long a specific call might take to complete. The more you instrument your code with traces and spans, the more visibility you will have about your code performance and characteristics. You can also instrument the calls by attaching tags and logs to an individual trace or span to give the span a lot more context. So how do you visualize all of this data? This is where something like Jaeger comes in. Jaeger can be broken down to a few components, the client, agent, collector, and the supporting APIs, known as the Jaeger query, and finally the UI. The client lives alongside your microservices code and reports data to the Jaeger agent running on the host or the container. The agent then forwards this information to the collector that stores the span in a database that is queried and reported to the Jaeger UI. Simply put Jaeger allows you to trace through every call in your code and decide where the bottlenecks might be. Use Jaeger to improve your overall code quality or find bugs in your application. Tracing is the next evolution of logging, monitoring, and metrics. The tracing paradigm is still early, but I think it allows developers and SREs to get a lot more context to their logs and metrics. Plus it takes some of the guesswork about why applications are not performing the way they are supposed to.
>
> **[3:05](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/application-tracing?u=76281980&t=185)** Why let's a new paradigm, I am convinced that tracing is the way to instrument your microservices and as the future for debugging cloud native applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microservices]] (3), [[E-Commerce]] (2)
> **CLI Commands:** find (2)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** cncf (1)
> **Documentation:** spec (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Security, policy, and distribution](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=0)** - [Instructor] As a proponent of [[DevSecOps]], I'm happy to see that the thought leaders in the cloud native space pay attention to policy and security. They've been thinking about how to treat both of these concerns proactively, rather than in a reactive manner, as is so common in the software industry. In the current landscape, there are three foundational areas where security projects play a critical role: image security, policy management and runtime security. Let's first talk about the security with respect to images. Container images are effectively black boxes. The questions people generally ask are, what is in this image, or how do I know if this image contains vulnerabilities? Notary and the Update Framework, also TUF, are projects that are leading the CNCF for this space. TUF is actually a framework, much like the CNI, and various tools implement this specification. TUF hardened software update systems, which are vulnerable to many known attacks. It provides protection against attackers that compromise the signing keys or repository. Notary is a mature implementation of the TUF spec and is a tool that can be used by teams to secure their update systems. Docker uses Notary behind the scenes to implement Docker Content Trust as well as all of the Docker Trust subcommands. So if you're working in a scenario where you have to deal with a lot of software updates, et cetera, make sure to take a look at these projects. From a runtime perspective, one of the issues with [[Kubernetes]] is that the default for access to a Kubernetes cluster
>
> **[1:34](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/security-policy-and-distribution?u=76281980&t=94)** can be very broad. This makes it a misconfiguration haven and an attractive target for attackers. To hardened clusters, you might want to consider better policies to allow for more fine grain access and enforcement. This is where projects like the Open Policy Agent, also known as OPA, fit in. OPA is a standard tool set that allows for the same policy language, model and API that can be used across the cloud native stack. Finally, from a runtime security perspective, you want to have the tooling to continuously detect and alert on threads and unexpected application or cluster behaviors. This is where a tool like Falco shines. Falco was initially a Sysdig project that was donated to the CNCF. It continuously parses the [[Linux]] system calls from the kernel. It allows you to configure policies to strengthen your container security by matching rules to what's going on in your running system. And it allows for alerts when there are policy violations so that you can catch and remediate issues quicker and thereby reducing risk. There are actually a lot of tools in the security, policy and distribution space. They can be open source as well as a lot of vendor-driven tools as well. You don't necessarily need to pick one of the CNCF tools we've talked about in the section, but definitely look at the capabilities they provide and ensure that you have all your surface areas covered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (2), [[DevSecOps]] (1), [[Linux]] (1)
> **Env Vars:** tuf (4), cncf (3), opa (2), cni (1), api (1)
> **CLI Commands:** docker (3), make (1)
> **Definitions:** is a  (3), known as (1)
> **Documentation:** specification (1), spec (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [The CNCF today and tomorrow](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=0)** - [Instructor] And we've come to the end of the course. Thanks for sticking through it with me. I know the course was a whirlwind of everything in the CNCF, but I wanted to give you a quick overview of the ecosystem. Remember that the ecosystem is quickly evolving, project start, grow, merge, or sometimes lose traction within the community. Sometimes, when I look at the landscape, it reminds me of the Circle CI blog posts about it's the future, where everything changes too quickly. The CNCF does help with project churn because it tries to shepherd the community to the best choices out there. In my opinion, while it does that well, it's still hard to know how the landscape will play out in the end. If you're just getting started with [[Kubernetes]], and the CNCF, begins slowly with a few projects that solve your use case before expanding out. Another way to know whether a project has gotten traction with the CNCF is to look at the project maturation criteria. The maturity level is a signal by the CNCF as to what sorts of enterprises should be adopting different projects. Projects accepted into the CNCF have three levels, sandbox, incubating and graduated. Projects increase their maturity by demonstrating the [[Sustainability]] to the CNCF Technical Oversight Committee that they can have adoption, a healthy rate of change, and committers for multiple organizations for example. Projects increase their maturity by demonstrating the sustainability to the CNCF Technical Oversight Committee, things like, that they have adoption,
>
> **[1:32](https://www.linkedin.com/learning/kubernetes-cloud-native-ecosystem-14444671/the-cncf-today-and-tomorrow?u=76281980&t=92)** there's a healthy rate of change, and that there are committers from multiple organizations. Let's say you're a developer looking for practical training, check out the other Kubernetes, and cloud native courses in the library, or consider getting certified as a certified Kubernetes administrator or a certified Kubernetes application developer or another certification by the CNCF. Also, I'll try to keep up with the new container technology on the [[Agile Development|Agile]] Admin blog. So keep tabs on that as well. And if you're really stuck, feel free to reach out to me on [[LinkedIn]] or Twitter. Good luck on your journey with Cloud Native applications. I wish you the best of luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kubernetes]] (4), [[Sustainability]] (2), [[Agile Development|Agile]] (1), [[LinkedIn]] (1)
> **Env Vars:** cncf (9)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Karthik Gaekwad]]

## Skills Covered

- Cloud-Native Applications
- Kubernetes

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