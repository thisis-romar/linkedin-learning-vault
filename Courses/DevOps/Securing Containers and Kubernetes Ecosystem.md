---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: securing-containers-and-kubernetes-ecosystem
url: "https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem"
duration_minutes: 128
duration: 2h 8m
level: Intermediate
updated: 4/10/2024
learners: 9090
skills:
  - Containerization
  - Kubernetes
  - Cybersecurity
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHDGPzLMbnmyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600898707127?e=2147483647&amp;v=beta&amp;t=QcCm1mdjY0iOu_Y2iHgZeiM8d3pFOs4yS7ykzqkwHjg"
linkedin_topic: DevOps
learning_paths:
  - '[Getting Started with Kubernetes](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Kubernetes.md)'
prev_courses:
  - '[Kubernetes- Cloud Native Ecosystem](Kubernetes-%20Cloud%20Native%20Ecosystem.md)'
path_nav: '[{"path":"Getting Started with Kubernetes","position":6,"total":6,"prev":"Kubernetes- Cloud Native Ecosystem","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/containerization
  - skill/kubernetes
  - skill/cybersecurity
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Securing%20Containers%20and%20Kubernetes%20Ecosystem.md)

![Securing Containers and Kubernetes Ecosystem](https://media.licdn.com/dms/image/v2/C4E0DAQHDGPzLMbnmyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600898707127?e=2147483647&amp;v=beta&amp;t=QcCm1mdjY0iOu_Y2iHgZeiM8d3pFOs4yS7ykzqkwHjg)

# Securing Containers and Kubernetes Ecosystem

> Containers have transformed the way applications are built, deployed, and managed. But it’s only a matter a time before a vulnerability or misconfiguration leads to a newsworthy security breach. Establishing security controls is essential to protect applications being deployed in orchestration systems like Kubernetes. This course explains how to secure containers and the Kubernetes ecosystem using

> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem) | 2h 8m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Protect your containers and Kubernetes ecosystem](#protect-your-containers-and-kubernetes-ecosystem)
  - [What you need to know](#what-you-need-to-know)
- [**1. Demystifying Containers and Kubernetes**](#1-demystifying-containers-and-kubernetes) (7 videos)
  - [What are containers?](#what-are-containers)
  - [Virtualization](#virtualization)
  - [Isolation and OS security features](#isolation-and-os-security-features)
  - [Container runtime](#container-runtime)
  - [What is Kubernetes?](#what-is-kubernetes)
  - [Kubernetes master node](#kubernetes-master-node)
  - [Kubernetes worker node](#kubernetes-worker-node)
- [**2. Security Model for Containers and Kubernetes**](#2-security-model-for-containers-and-kubernetes) (4 videos)
  - [Overall technology architecture](#overall-technology-architecture)
  - [Container deployment and orchestration lifecycle](#container-deployment-and-orchestration-lifecycle)
  - [Attack surface and vectors](#attack-surface-and-vectors)
  - [Five factors](#five-factors)
- [**3. Factor #1: Securing Containerized Application Code**](#3-factor-1-securing-containerized-application-code) (2 videos)
  - [Secure design before code](#secure-design-before-code)
  - [Secure code](#secure-code)
- [**4. Factor #2: Securing Images**](#4-factor-2-securing-images) (4 videos)
  - [Secure container images, part 1](#secure-container-images-part-1)
  - [Secure container images, part 2](#secure-container-images-part-2)
  - [Image registries](#image-registries)
  - [Image registry access control](#image-registry-access-control)
- [**5. Factor #3: Securing Hosts and Container Working Environment**](#5-factor-3-securing-hosts-and-container-working-environment) (4 videos)
  - [Container working environment](#container-working-environment)
  - [Container network security](#container-network-security)
  - [Container port and interface security](#container-port-and-interface-security)
  - [Host OS protection](#host-os-protection)
- [**6. Factor #4: Securing Applications in Kubernetes**](#6-factor-4-securing-applications-in-kubernetes) (11 videos)
  - [Securing applications in Kubernetes](#securing-applications-in-kubernetes)
  - [Pod Security Standard](#pod-security-standard)
  - [Access management](#access-management)
  - [Authenticating users](#authenticating-users)
  - [Authenticating service accounts](#authenticating-service-accounts)
  - [Authorization](#authorization)
  - [Admission control](#admission-control)
  - [Security context](#security-context)
  - [Security Policy](#security-policy)
  - [Kubernetes network security](#kubernetes-network-security)
  - [Secrets management](#secrets-management)
- [**7. Factor #5: Securing Kubernetes Cluster**](#7-factor-5-securing-kubernetes-cluster) (3 videos)
  - [Cluster security goals](#cluster-security-goals)
  - [Securing API server traffic](#securing-api-server-traffic)
  - [Securing cluster components](#securing-cluster-components)
- [**8. Additional Security Considerations**](#8-additional-security-considerations) (2 videos)
  - [Infrastructure security](#infrastructure-security)
  - [Logging and monitoring](#logging-and-monitoring)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Protect your containers and Kubernetes ecosystem](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/protect-your-containers-and-kubernetes-ecosystem-21031810?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/protect-your-containers-and-kubernetes-ecosystem-21031810?u=76281980&t=0)** - [Sam] So how can an organization like yours ensure that the security of their containers and [Kubernetes](../../Skills/DevOps/Kubernetes.md) ecosystem is robust? If you are seeking to build your expertise in developing and managing containerized environments that are secure by design, then this course is for you. My aim is for you to depart with a comprehensive understanding of essential security controls and best practices, empowering you to safeguard both your containers and the overarching Kubernetes ecosystem. I'm Sam Sehgal, and I'll be your guide throughout this journey exclusively on my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course as we explore the intersection of security, containers, and Kubernetes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Speakers:** - [sam] (1)

#### [What you need to know](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980&t=0)** - [Instructor] This course includes an introduction to the foundations of containers and [Kubernetes](../../Skills/DevOps/Kubernetes.md) technologies. But to get the best out of this course, you should have some information technology knowledge. Awareness of [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or Unix-like systems will help you get the most out of container isolation concepts. Some familiarity with the concepts of containerizations or container platforms, such as Docker, will be an excellent foundation for learning container security controls. And lastly, awareness of a container orchestrator, such as Kubernetes, will make it easy for you to grasp the security capabilities of Kubernetes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** docker (1), make (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Demystifying Containers and Kubernetes

[↑ Back to Table of Contents](#table-of-contents)

#### [What are containers?](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=0)** - [Instructor] A container is a software that packages not only your application code, but also its dependencies such as libraries, configuration settings, and the file system. Containers are portable, meaning they can run on different kinds of operating systems and infrastructure, seamlessly. They isolate a running application from the environment outside the application, as well as from the other containers. Now it's important to realize the difference between a container and a container image. A container image is a special file, that becomes a container when it is run as a process of an operating system. So before we jump into the technology behind the containers, let's take a look at the reasons why you use them. First, the economics, containers are more bang for your buck. Look, if you're running only one operating system, all running containers utilize the same OS and that makes containers lightweight compared to a virtual machine. So when a given [Hardware](../../Topics/Hardware.md) setup, you can squeeze a larger number of business applications, since all the dependencies required for an application are packaged along with your code. You don't run into the issue of it works in my laptop, but not in production. Containers are portable across platforms. It is easier to build and share container images in comparison to virtual machine images,
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=96)** given that images are built in layers, they offer observability all the way from the OS to the application layer. When implemented with the right set of security controls, containers limit the spillover should a containerized application be breached, but the security of containers depend upon correctly using the features and isolation capabilities of an operating system. Containers take advantage of an operating system paradigm, known as OS Virtualization. OS Virtualization is made possible, by the capabilities of the kernel of the OS. These capabilities make a running application pink as if it has got a full copy of the OS only to itself. But in reality, multiple applications are sharing the same operating system. This kind of virtualization plays a significant role in the security of containers and the applications running inside them. That's why, it's worth while to review and compare it with other virtualization techniques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Virtualization](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=0)** - [Instructor] At its core, there are three ways applications and their operating environment can be configured on a given [Hardware](../../Topics/Hardware.md). On bare metal, using hardware virtualization, or using OS virtualization. Before virtualization technologies were in mainstream, an application was deployed on a dedicated, bare metal hardware. There were no restrictions on the resources an application could use. Should an application hog the entire hardware resource, the only option left for the admin was to throw more hardware at it. Of course, the applications running on separate hardware were isolated from each other, which was great from a security perspective, but the applications running on the same hardware had limited security boundaries around them. Then came hardware virtualization, which enabled organizations to run multiple [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) on the same hardware instance. This form of virtualization not only allowed flexible scale up or scale down of the VMs, but also provided stronger isolation among applications running on the same hardware. Think of each VM as a standalone computer with its own instance of an operating system. The operating system running in the VM thinks it has the full compute and memory resources at its disposal.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=94)** The OS doesn't know that the hardware is actually being shared with other VMs. And this magic is made possible by the hypervisor layer. As an industry, we could have stopped right there. Don't get me wrong. VM based deployments do provide isolation and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). In fact, they work really well for a variety of use cases. But, modern loosely coupled [Microservices](../../Skills/Software%20Development/Microservices.md) that are built, deployed and restarted many times during the day have different requirements. Enter OS virtualization that made containers possible. Containers are lightweight, easy to create and destroy and don't come with the overhead associated with the virtual machines. This makes them more suitable for the modern applications and use cases. On the surface containers appear similar to VMs, but remember behind the scenes, it is the operating system and not the hardware that is being virtualized. Meaning in hardware virtualization, where each VM runs its own copy of an operating system, in OS virtualization only one instance of the operating system is running. Each container thinks it has the entire operating system at its disposal. The container does not know that the operating system is being shared with other containers. What is analogous to the hypervisor from the hardware virtualization
>
> **[3:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=187)** in the OS virtualization world? It is the container runtime and the capabilities of the operating system that makes the OS virtualization possible. Let's take a look at the native isolation and security features of the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (14), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Analogies:** similar to (1), analogous to (1)
> **Speakers:** - [instructor] (1)

#### [Isolation and OS security features](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=0)** - [Instructor] Namespaces. Control groups or in short, cgroups. Ability to add or drop OS system calls. Loadable security modules to bring additional security controls not offered by the OS by default. And lastly, the seccomp. Surprisingly, these capabilities have existed way before modern containers came into existence. Container platforms, such as Docker utilize these features of the [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating system to make containers easy to use, run, and secure. By default, each Linux process runs in a default namespace meaning, system resources such as process IDs, user IDs, network interfaces, and file systems are shared with other processes. As you can imagine, that will not work for containerized applications. Linux offers the ability to create namespaces. When a process is run inside a namespace, it is not able to see the resources in other namespaces. For example, it can't see the PID or process IDs from other namespaces. Likewise, a process running in a namespace will see its own version of the host name, which will be different from the host name seen by the processes in another namespace. Obviously, all of these processes are running
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=96)** on the same host machine. Different types of namespaces focus on different types of resources. For example, PID for process IDs, IPC for interprocess communication, NET for networking access and so on. Understand that the process needs to be assigned to more one namespace from this list to ensure the isolation for that resource type. So who will do this on your behalf? When you issue a command to create a Docker container, the container platform takes care of creating namespaces behind the scene for you. While namespaces offer isolation of OS resources, another feature known as control groups or in short cgroups allows you to set and enforce resource limits. When you have multiple container processes running, you don't want one process hogging up all the available CPU or memory and leaving nothing behind for other processes. Container platforms leverage cgroups to set limits on the resource usage. Think of this as a security control to prevent denial of service attacks. You have heard of the security principle of least privilege, meaning, limiting access rights for users and processes to bare minimum permissions they need to perform their jobs.
>
> **[3:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=189)** The same principle applies to containers as well. If a container doesn't have a genuine need, you don't want that container to be granted blanket access to all system calls offered by the kernel. And that's where the capabilities feature of Linux comes useful. Capability feature breaks up the set of root privileges into smaller slices, and then, allows you to choose and apply only those privileges that a container needs. Here are some examples of these capabilities as documented in the Linux manual. Namespaces, control groups, and capabilities are enough for process isolation and resource management. But container platforms such as Docker need a kernel supported mechanism to enforce access control. Now the access control here refers to controlling which processes get access to which of the system resources. There are several mandatory access control implementations, but the two most common ones are SELinux and AppArmor, and they take a different approach to provide access control. Keep in mind, that both SELinux and AppArmor are not part of the kernel code. Instead, they are plugged into the kernel wire hooks. These hooks are offered by the Linux security module or LSM framework of the Linux operating system. Instead of implementing the access control feature itself,
>
> **[4:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=287)** the Linux kernel invokes the functionality of these modules. Now, just so happens that these Mac modules are the primary users of this framework, but other modules that provide a different security capability can also be plugged into this framework. In addition to LSMs, the container platform can also use seccomp. Seccomp is a capability in Linux that allows the processes running in user space to transition into a secure state and, restrict the use of system calls to extremely limited set, thereby, limiting the Linux Kernel attack surface. So to recap, namespace, not to be confused with [Kubernetes](../../Skills/DevOps/Kubernetes.md) namespace is a Linux kernel feature that provides isolation of processes. Cgroups provide resource limits. Capabilities features allow dropping privileged system calls. Keep in mind, that this feature allows dropping system calls only to a predefined list. SELinux and AppArmor are access control modules that are plugged into the kernel via hooks. They provide fine grain access control to resources. And finally, secccomp limits which system calls a process in user space can execute.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (11), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **Env Vars:** pid (2), ipc (1), net (1), cpu (1), lsm (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **CLI Commands:** docker (3), make (1)
> **Definitions:** is a  (2), known as (1), refers to (1)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### [Container runtime](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=0)** - So now we recognize the security and isolation features offered by the operating system and how essential they are for a container platform. The component that actually leverages these OS features is known as container runtime. Let's now take a look at the role of container runtime within the context of a container platform, such as Docker. We will cover the container images and container orchestration in the later sections of this course. Container platform consists of a Daemon that listens to API requests from the clients. This demon, in turn relies on a component known as container runtime. The definition and the scope of container runtimes have changed over the years. But in general, container runtimes perform two distinct tasks. The high level tasks of image transport, packing or unpacking images is done by so-called high-level Container runtime. In the Docker ecosystem, this task is performed by container D. There are other implementations as well, such as CRI-O. High level container runtime relies on a low-level container runtime to actually run the containers. Low-level container runtime uses operating system features such as namespaces and cgroups to create and isolate containers. RunC is the most popular implementation
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=96)** of a low level container runtime. Keep in mind that there are some implementations of container runtimes that perform both the high level and the low level functionalities. For example, RKT also known as rocket. While we are talking about containers, it is important to know about the Open Container Initiative or in short the OCI. OCI is a project under [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) foundation that standardizes to specifications related to containers and container images. OCI image specification defines a standard way of creating a container image. While OCI runtime specification defines a standard way of running an ACI image. Now let's connect back to our diagram. RunC is an OCI runtime spec compliant implementation while container D leverages the OCI image specification.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** oci (6), api (1), cri (1), rkt (1), aci (1)
> **Definitions:** known as (3), is a  (1), is an  (1)
> **Documentation:** specification (3), spec (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** docker (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - so (1)

#### [What is Kubernetes?](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=0)** - [Teacher] We now know that containers enable us to easily deploy small application components. In other words, loosely coupled [Microservices](../../Skills/Software%20Development/Microservices.md), but it is not uncommon for an enterprise to have an extremely large number of containers running. Once you have such a large number of containers running simultaneously, how do you manage them? The reality is it is expensive, error-prone, and cumbersome for an operations team to do so manually. You need an automated system that can schedule, configure, restart, and monitor such containers. [Kubernetes](../../Skills/DevOps/Kubernetes.md) is such an open source-container orchestration system that relieves the operations team. And with the help of an orchestrator, operations team only need to focus on managing kubernetes itself, while the Kubernetes manages thousands of containers on their behalf. In fact, the combination of container technology, powered with the orchestration of Kubernetes, enables your [DevOps](../../Topics/DevOps.md) team to focus on what they are best at. Developing teams can focus on writing code and building applications. They no longer have to worry about the infrastructure setup, service discovery, or how to expose their services. Likewise, operations team can focus on the underlying infrastructure such as on-premise data center or [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md), they no longer have to be distracted by the software application issues
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=92)** such as release management, tracking and interdependencies and deployment. Loosely speaking, Kubernetes acts as an operating system for your data center. It presents your infrastructure as a unified computation resource to your developers. We know Kubernetes as the orchestration engine for containers, but Kubernetes does not manage the containers individually. Instead, it manages them as a collection of containers in a single atomic unit. This collection of containers in kubernetes jargon is known as a pod. All containers in a pod are co-located on a single [Hardware](../../Topics/Hardware.md) node, meaning you will not find containers that belong to the pod deployed on different nodes. By default, containers in a pod share the same OS context, such as [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) namespaces, network and volumes and so on, but it's possible to add additional isolation among containers even within a pod. Kubernetes cluster consists of two primary building blocks, a master node and multiple worker nodes. Master node manages and orchestrates the entire Kubernetes system. Worker node on the other hand, is where your containerized applications are run. Now both master node and worker node run special components that work together in harmony and make up the control plane.
>
> **[3:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=190)** KubeCTL, which you will see multiple times over this course, is a command line interface that lets you control the Kubernetes cluster. While we're going to look at the physical components of Kubernetes in a moment, it's important to first understand the concept of Kubernetes objects. Objects are the abstractions that Kubernetes uses to capture the state of a cluster. For example, a pod, the smallest possible unit of deployment in the Kubernetes object model, or the policies that apply to pods, are also represented as objects. When you create an object, essentially you're telling Kubernetes the desired state that the cluster should convert towards, but how do you represent that state? Well, you do so in the form of a YAMl specification. Here is an example of what a spec looks like. We'll have plenty of opportunities in the following chapters to see this in action. So for now, let's switch to the core Kubernetes components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (17), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [DevOps](../../Topics/DevOps.md) (1), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** node (6), find (1), make (1), kubectl (1)
> **Definitions:** in other words (1), known as (1), is a  (1), is an  (1)
> **Analogies:** such as (3), for example (1)
> **Documentation:** specification (1), spec (1)
> **Prerequisites:** configure (1), setup (1)
> **Tools:** command line (1)
> **UI Navigation:** switch to (1)

#### [Kubernetes master node](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=0)** - [Instructor] Etcd is a distributed key value data store that stores the configuration and state of the cluster. Master node runs the API server. The API server is responsible for accepting and processing commands from clients such as kubctl. The components of the master and the worker node do not talk to each other directly. They do so via the API server. The controller manager is the manager of the controllers. So what is a controller? A controller is a [Kubernetes](../../Skills/DevOps/Kubernetes.md) component that watches the state of the cluster and attempts to modify the actual state of the cluster so it matches the desired state. Some examples of the controllers are replica set, daemon set, stateful set, service controller, and so on. Controllers watch the API server for changes to the cluster state and keep performing operations until the actual state matches the desired state. The scheduler determines which node a pod will be assigned to. It uses a variety of [Algorithms](../../Skills/Software%20Development/Algorithms.md) to determine the best fit node to run a pod. The algorithm takes into account many factors, such as the available [Hardware](../../Topics/Hardware.md) resources on the nodes, the special needs of the pod, affinity of a pod to a certain node type, and so on.
>
> **[1:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=91)** Scheduler posts the updated pod definition to the API server, which is being watched by kubelets on the worker nodes. Now, it may appear as if the master node is doing all the heavy lifting. While master node stores and controls the state of the cluster, it is the worker node that runs your containerized workloads. So let's switch to the components that run on a worker node.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** node (9)
> **Env Vars:** api (5)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Kubernetes worker node](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=0)** - Kubelet is constantly watching out for any commands that are posted to the API server. More specifically, commands pertaining to the pods on its node. Once it knows that the node it is running on is expected to run a pod, it gets into action. Of course, Kubelet doesn't do so by itself. It takes the help of container runtime, which we discussed in depth in the previous videos. Kubelet also monitors the containers running inside a pod. It restarts or terminates as needed and then notifies the API server. The containers need a way to communicate with the other containers inside the cluster, as well as with the clients outside the cluster. Kube-Proxy, also known as the service proxy, ensures this connectivity. It uses the operating systems packet filtering system, if available, or it just forwards the traffic itself. In addition to the components we just discussed, there are a few add on components required for [Kubernetes](../../Skills/DevOps/Kubernetes.md) and your applications to run smoothly. For example, DNS server, [Dashboards](../../Skills/Data%20Science/Dashboards.md), logging mechanisms, and so on. Before we wind up this video on Kubernetes, let's revisit the topic of container runtime but this time we will look at it from the point of view of Kubernetes. You know that the Kubelet relies on
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=93)** container runtime to run containers, but Kubernetes supports different kinds of container runtimes as long as they support the container runtime interface, or in short, CRI. There are a few CRI compliant runtimes available today such as CRI-O, more commonly known as CRIO and CRI containerd. CRIO, which implements the CRI, provides the integration path between the OCI confirmed runtime, such as RunC, and the Kubelet. Similarly, containerd from Docker now has a CRI plugin that allows you to run even containerd as container runtime with the Kubelet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Env Vars:** cri (6), api (2), crio (2), dns (1), oci (1)
> **CLI Commands:** node (2), docker (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** known as (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - kubelet (1)


### 2. Security Model for Containers and Kubernetes

[↑ Back to Table of Contents](#table-of-contents)

#### [Overall technology architecture](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=0)** - To implement security controls, for protecting your container, and [Kubernetes](../../Skills/DevOps/Kubernetes.md)' ecosystem. You first need to identify, the attack surface. And that requires, an understanding of the end to end architecture. That also requires knowledge of the role, each building block plays, from the first line of code, all the way to the running containers in production. Here is a simplified view, of a few key building blocks in this ecosystem. Of course, the real picture is a bit more complex than this. Taking the code, from developers hands, to a deployed application in Kubernetes, is made possible, by careful coordination of these building blocks. These building blocks, must work harmoniously with each other. To draw a crude analogy, imagine a conveyor belt system in a factory. The conveyor belt, moves raw materials, from one station to another. Each station transforms, and adds incremental value to the material. After the work is done by the last station, you get a finished product ready to be shipped. Let's get back to the ecosystem diagram. Source Code Repositories, such as get hub and get lab, whether deployed in the cloud, or in your own premise environment, store the Source Code written by your developers. An Artifact Repository, serves as the source for third party software components, libraries, and the build artifacts for your developers.
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=96)** It also makes those third party, software components available to your developers, with built in governance, and a security policy around it. The Build Infrastructure, along with its [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) pipeline, provides both the engine and the workflow, to compile the Source Code and build container images. The images that have been scanned, for security and can be trusted. These container images, are stored in an Image Repository, and access to via central registry. A Container Orchestrator such as Kubernetes, is set up and configured, in advance by the admin, the Orchestrator locates, an optimal compute node to run the Container Image. And finally, the Orchestrator, then continues to monitor, run, and restart your application containers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **Analogies:** such as (2), picture (1), imagine (1)
> **Exercise Files:** source code (3)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **Prerequisites:** set up (1)
> **Speakers:** - to (1)

#### [Container deployment and orchestration lifecycle](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=0)** - [Instructor] Modern practice for development, deployment and operations of software has come a long way. Let's bring it all together and see how building blocks of this ecosystem come together to move the code from the developers IDE to deployment with the minimal human touch. Developers write code and check in into a source code repository. In addition to writing homegrown proprietary code, they also use open source components and third party packages to build their business applications. Instead of going directly to third party repositories on the internet, developers retrieve these components why a trusted enterprise repository manager. This ensures that the vulnerable software components are not accidentally or intentionally downloaded and made part of their application. An automated [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) system, compiles the code and resolves dependencies, and stores any intermediate or final binary artifacts to a central repository. Developers or an automated CI system, generates a container image and stores the image in a container image repository. Many organizations choose to use [Kubernetes](../../Skills/DevOps/Kubernetes.md) package managers to define and install applications in Kubernetes. These packages are known as [Helm](../../Glossary/Tool/Helm.md) charts and are managed by a tool conveniently known as Helm.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=95)** The same build pipeline also creates and stores these charts in a special repository. The stages of the [Software Development](../../Topics/Software%20Development.md) lifecycle we looked at so far are performed as part of continuous integration or ensured a CI pipeline. The output of the CI pipeline is a container image and a Helm chart that is ready to be deployed to staging or production environment. From this point on a continuous deployment, or ensured a CD pipeline takes over. The continuous deployment pipeline deploys the containerized application to a staging environment. The same pipeline may also perform automated security and functional tests before deployment. And finally, the pipeline deploys to your production environment by upgrading the Helm chart in the production cluster. From this point onwards Kubernetes monitors the health of pods and nodes. It watches for any configuration changes and scales up or down, or restarts as needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Helm](../../Glossary/Tool/Helm.md) (4), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (2), [Software Development](../../Topics/Software%20Development.md) (1)
> **Definitions:** known as (2), is a  (1)
> **CLI Commands:** cd (1)
> **Env Vars:** ide (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Attack surface and vectors](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=0)** - [Teacher] Keeping this well synchronized ecosystem secure is going to be challenging, but before we can secure it, we need to understand what can actually go wrong. To do so, we will look at the attack surface of the containers and [Kubernetes](../../Skills/DevOps/Kubernetes.md). The attack surface simply means the areas of a system that are one wonderful and can be exploited. A source code repository that contains the proprietary code may contain secrets. The secrets might be accidentally exposed. An attacker who gets access to your repository will automatically get access to your secrets, such as passwords, API keys, and database credentials, and access to those secrets opens the door to other parts of your system. The artifact repositories and container image registries, serve trusted objects and images to your developers and orchestrators. Unsecure connections, poor authentication and authorization practices can result in malicious actors getting access to these sources of trust. The attacker in turn can then compromise stored objects and images. Kubernetes cluster that comprises a master node and worker nodes has quite a large attack surface. Master node, also known as the control plane, consists of API server, etcd, and several other components. Most components of Kubernetes
>
> **[1:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=97)** don't talk to each other directly. They all communicate why our API server. Unauthorized access to API server considerably jeopardize the security of the entire cluster. Etcd stores the configuration and state of the clusters components and objects. Should an attacker get read-write access to the etcd, the attacker then literally has full access to your entire cluster. Worker nodes run your workloads, or in other words, your containerized applications. Traffic between master and worker nodes carries commands and responses. Unsecured network can be intercepted by an attacker. As a result, the attacker can view or modify the state of your cluster and applications. Kubelet process is in charge of running containers on its worker node as per the pod specification received from the API server. Unauthorized access to Kubelet can compromise that node. The host operating system, running on a worker node can itself be vulnerable. Running an operating system with unnecessary components, wide open file permissions, and the unpatched kernel, can make the entire node vulnerable to attacks. Misconfigurations or vulnerabilities in container platform and container runtime can compromise your containers. Containers rely on successful OS virtualization
>
> **[3:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=192)** and isolation. Poorly isolated containers can access not only the host resources, but also the resources of their neighboring containers. A poorly designed application with security weaknesses can be explored by the attacker. And lastly, your Kubernetes cluster runs on an on-premise or [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) Misconfiguration or poor security policies can result in unauthorized access to the underlying infrastructure. With access to infrastructure, an adversary can compromise your entire cluster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Cloud Infrastructure](../../Skills/Cloud%20Computing/Cloud%20Infrastructure.md) (1)
> **CLI Commands:** node (6), make (1)
> **Env Vars:** api (5)
> **Definitions:** known as (1), in other words (1)
> **Documentation:** specification (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [teacher] (1)

#### [Five factors](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=0)** - [Sam] After seeing the attack surface, we can appreciate the complexity of efforts that might be required to keep it all protected. Therefore, we need a structured approach to security. We're going to apply a five factor security model. Each factor comprises of a set of security controls that work to protect this ecosystem. Let's take a quick look at them. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the course will be a deep dive into each of these security factors. The first factor is all about secure design principles and [Coding Practices](../../Skills/Software%20Development/Coding%20Practices.md) that your developers and architects should adopt. The next factor focuses on the security of container images and image registries. This factor includes security controls required to protect images during creation, storage, transport, and retrieval. A container is a process instantiated from an image. Naturally, after securing images, the next factor focuses on security controls to protect running containers. This factor also includes controls to secure hosts that provide the operating environment for containers. Your applications in [Kubernetes](../../Skills/DevOps/Kubernetes.md) depend on Kubernetes' provided features for access management, networking, secrets management, and so on. This factor covers how to apply these security capabilities of Kubernetes to protect your applications in the cluster.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=95)** Kubernetes cluster comes with its own core component, which must be protected as well. This factor is all about security of Kubernetes cluster and its components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Coding Practices](../../Skills/Software%20Development/Coding%20Practices.md) (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [sam] (1)


### 3. Factor #1: Securing Containerized Application Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure design before code](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=0)** - [Teacher] Every enterprise goal is that its containers in production are not only free today, but remain free of security vulnerabilities. It is also expected that these containers remain compliant with the organization's security policies at all times. So it is natural to believe that scanning and monitoring your containers and [Kubernetes](../../Skills/DevOps/Kubernetes.md) environment for security and policy violations is going to be imperative. But is that enough? Don't get me wrong. Such security controls are extremely important and necessary as you will see in the later chapters, but they are not sufficient. Why? Because by the time you end up scanning thousands of running containers, not only you have missed an opportunity to catch a security bug early on, but you're also being inefficient as well. If these containers are instantiated from the same image, you could have found many configuration defects and vulnerabilities from that one single image. You could have also blocked it from running as a container in the first place. By the same argument, if you have multiple container images being generated out of the same codebase, it is more effective to secure that source code itself. In other words, there is a case for finding security vulnerabilities as early as possible in the [Software Development](../../Topics/Software%20Development.md) life cycle. We saw in the previous chapters that developers build images
>
> **[1:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=98)** from homegrown code, third party components, libraries, and OS components. The security of such images and containers is only as good as the security of the objects being placed inside them. So why not shift security all the way to the left? A Secure Development Lifecycle or SDL, emphasizes embedding security into all stages of a software development lifecycle. We will go to some of the key security controls you should put in place. But for a comprehensive treatment of the subject, I encourage you to review the publications by SAFECode organization, National Institute of Standards and Technology or NIS, and other courses on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). Start with security requirements. Place the security of your application at par with features and functional requirements. Work with the product managers and owners to ensure that the user stories related to security are prioritized and not pushed to the backlog to be handled later as mere checkboxes. A secure application is contingent upon having a secure architecture. Understand and apply the foundational principles of secure design. To secure an application from the ground up, an application architect or developer should be comfortable applying the following design principles at minimum,
>
> **[3:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=193)** the principle of least privilege, defense in depth, separation of duties, and minimizing the attack surface. In fact, in the next chapters, you will watch the very same principles I'm advocating applied to secure containers, hosts, and the kubernetes clusters. [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) typically done at the design stage, enables your engineering team to look at your architecture from an adversary's point of view. The goal of threat modeling is to enumerate external threats and discover weaknesses in your design. You should apply threat modeling techniques to find and then mitigate such weaknesses so that you can prevent a poor design from being implemented in the first place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (3), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Software Development](../../Topics/Software%20Development.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** sdl (1), nis (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [teacher] (1)

#### [Secure code](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=0)** - [Instructor] Secure architecture and [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) will get your engineering team to a solid foundation. But there is no guarantee that the code developers will write will be free of bugs. More specifically, the security bugs. Securing code requires a multi-pronged approach. The approach includes peer code reviews, automated scanning of the code and the software components at various stages in your [Software Development](../../Topics/Software%20Development.md) life cycle. Poor and unsafe programming habits leads to security bugs in the code. These innocent-looking security bugs, if not fixed early, will morph into security vulnerabilities in your containers running in the production. This process of identifying security issues in the source code by scanning and analyzing is popularly known as static analysis [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md), or SAST in short. Educate your developers to write secure code in the first place. Train them on how to use the output of these scanning tools to locate unsafe core blocks. And finally, complete the feedback loop by ensuring that the security bugs are addressed before the code is promoted or merged into the next level branch. You'll have multiple opportunities to run a static analysis of your code, first in the integrated development environment or the IDE of the developer.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=95)** This allows the developers to get immediate feedback on the security issues in their code. Next, you can run a static analysis directly on the source code repository and integrate it with the developer's workflow. This will give you the option to scan the code with every pull or merge request. If you're running a [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) pipeline, there is another opportunity to run the scan in the pipeline immediately after the code commit. Brand new code written by developers can be analyzed by SAST tools. But what about the code that has been acquired from third parties? You want to identify all components that may contain security vulnerabilities. Perform software composition analysis of your code so you know the true bill of material of your code. Many open source and commercial tools can assist you with this type of analysis. So when should you run these tools? Just as in the case of SAST, you have multiple opportunities. Integrate component scan in your enterprise artifact repository so anytime a developer pulls or pushes a software component, it is scanned at the artifact repository level. Many commercial tools integrate directly with the repositories. These tools continuously apply your security policy to block vulnerable components from being used.
>
> **[3:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=191)** You can and should run a component scan in your CI/CD pipeline where possible in your workflow. Static code and software composition analysis can give you the confidence that the code is secure, but you still want to be sure that when the code turns into running application, it can withstand the attacks of an adversary. Before you deploy your application into your production environment, utilize specialized tools that test the application for commonly found security weaknesses. This type of application testing is known as [Dynamic Application Security Testing](../Cybersecurity/Dynamic%20Application%20Security%20Testing.md), or DAST in short.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Threat Modeling](../../Skills/Cybersecurity/Threat%20Modeling.md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [Security Testing](../../Skills/Cybersecurity/Security%20Testing.md) (1), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (1)
> **Env Vars:** sast (3), ide (1), dast (1)
> **Exercise Files:** source code (2)
> **CLI Commands:** cd (1)
> **Speakers:** - [instructor] (1)


### 4. Factor #2: Securing Images

[↑ Back to Table of Contents](#table-of-contents)

#### [Secure container images, part 1](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=0)** - [Instructor] So by now, you should be able to recognize the importance of secure design and code in setting a solid foundation for a secure container ecosystem. But at some point in the [Software Development](../../Topics/Software%20Development.md) lifecycle, you or the developers in your organization are going to build a container image. And a container image comes with its own set of security issues related to its integrity and configuration. Such security issues must be addressed independently. Moreover, a container image is not just built, it is also are stored, transported, and then retrieved by many players of this ecosystem. So we need to make sure that both the image and the image registry are protected at every stage. And second, no defects should be introduced in the image that will later appear as vulnerabilities while running the containers. So let's take a look at the security controls you should implement to protect these images while in [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) or in motion. We will start with the security controls required at the time of image creation. A container image is a collection of multiple layers built using the Union File System, where each change to the file system is stored as a separate layer. Each incremental layer represents the delta of changes from the previous layer.
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=93)** The layer also contains the [Metadata](../../Skills/Web%20Development/Metadata.md) including a layer or a commit ID. Although you can create a container image in many ways, the most common and practical way is to use a Dockerfile. A Dockerfile is a plain text file with step by step instructions on how to build an image. Not only a Dockerfile makes it easy to see how an image was built, but it also allows you to check in the file in the source code repository and track it just like the rest of your source code. Note that the Dockerfile defines not only the code that goes into your image, but also the configuration and the environment under which the image will run. And that puts an enormous amount of power in the hands of the author, or anyone who can get their hands onto the file. So let's dissect a Dockerfile and look at the security best practices you can put in place. The FROM directive in a Dockerfile tells the container platform such as Docker, which base image to use. This base image will be the bottom most layer of your final container image. Start with an image whose content and the source is known. Your organization might already maintain a set of golden base images that are trusted and made available via an enterprise image repository. These golden images are safe to use
>
> **[3:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=188)** because they have been scanned for security vulnerabilities, vetted and meet the organization's security policies. The attack surface of your container is directly proportional to the number of software components present in its image. Larger the number of components, the greater the [Probability](../../Skills/Data%20Science/Probability.md) that one of them has a security flaw that is exploitable by an attacker. There are a few ways you can reduce the attack surface. You already know that you should start from a trusted base image. But you should also start with a minimal base image in the FROM directive. There is no need to begin with say a traditional [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) image with all kinds of utilities and modules still in it. Instead, use a minimal image such as Alpine, BusyBox, or something similar. Or if you prefer, you can create your own base image by literally starting from scratch. Even if you start with a minimal base image, you still have the option to add additional software components. For example, add and copy commands in Dockerfile allows you to add additional content into the image file system. You should ask, do you really need to add that extra component just because you can? For example, do you need to add SSH web server or even the Bash shell? Look, if you keep your image
>
> **[4:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=281)** bloated with unnecessary components, you will have few consequences. If the extra component you added happens to be vulnerable, your entire image is at risk which can lead to the breach of the container. When a container is breached, these components can make attackers' job easier, helping them move around and even escalate privileges. For example, if an attacker gets access to your container, the attacker will need utilities such as a shell, cat, ls command, etc. If your container does not have these tools to begin with, you're making it harder for the attackers to carry out their job. Keep in mind though, this approach is a dual-edged sword. By stripping your image off these basic utilities, you're also making it difficult for yourself to debug any bugs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Analogies:** such as (3), for example (3), just like (1)
> **CLI Commands:** make (2), docker (1), ssh (1), cat (1), ls (1)
> **Definitions:** is a  (3)
> **Exercise Files:** source code (2)
> **Warnings:** note that (1), keep in mind (1)
> **Env Vars:** ssh (1)
> **Tools:** bash (1)

#### [Secure container images, part 2](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=0)** - [Narrator] The principle of least privilege implies that a subject which can be either a person or a service account should be granted only as much as access privileges as are needed to perform their job. Under no circumstances should they be given a blanket privilege beyond their role. The user instruction in Dockerfile specifies, the user, the container will be running as. If you don't specify a user in the Dockerfile, the container runs as a root by default. And for most containers, which are running business applications that is beyond the level of privileges they actually need. Keep in mind that unless you are building a system container that really needs to interact with the OS Kernel, no container needs route access. Setting a setuid bit on a file in a Unix-like operating system has some interesting consequences. Typically, when a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) process is started from a file, the process runs with the permissions of the executer. But when the process is started from a file with the setuid bit on, the process runs with the permissions of the owner of the file. This behavior has some repercussions for security and can lead to privilege escalation. Let's say you were careful enough to specify a username the image should run as, but you happen to include a binary with setuid bit
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=96)** in your image. When someone runs that binary, the process starts with a different set of privileges. For example, if the owner of the binary happened to be root, the process will be running with the root privileges. And this is a form of privilege escalation, you didn't want that process to run as root. Therefore, don't include binaries with setuid bit bit turned on. Now, even if you intentionally minimize the attack surface, chances are that unsolicited objects will creep into your image. These unwanted objects can take many [Forms](../../Skills/Web%20Development/Forms.md), but all of them make your containers vulnerable. For example, a malware that is a malicious executable that gets added into your image intentionally or accidentally. Malware can create a backdoor to your container and make it accessible to attackers. Ironically, you can accidentally introduce malware by getting a malicious image from a public repository. Another kind of object that you don't want in your image is a Secret. A Secret is anything that is confidential and can unlock access to private data. For example, passwords, private keys or connection strings and so on. We only know about the problem of Secrets in source-code repositories. If you have not solved that problem,
>
> **[3:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=190)** chances are that the same habits and practice will manifest in the image file system as well. So how do you take care of these unwanted issues with the images and what security controls should you put in place? Scan your images, identify the security issues, whether these are embedded malware, embedded secrets or security vulnerabilities and address them before your image is run as a container. Ideally, if you follow the secure design, code and scanning practices, we discussed in prior chapters, there should be minimal vulnerabilities in your image. But things change, new vulnerabilities are discovered. Let's say you didn't find any security bugs in the code and the image was clean when the developers built it. That may not be true today or in the future when you're about to run your containers. So when and how often should you scan your container images? First, scan an image in your [Continuous Integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) or CI pipeline immediately after building the image. Second, integrate scanning directly with the image registry, so that the images are being scanned continuously in the background and are flagged based on their vulnerability status. This will prevent vulnerable images from being downloaded in the first place. There are several open source and commercial tools available in the market. For example, Claire, Kube-bench, aquasec,
>
> **[4:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=286)** and Twistlock. These tools will help you scan for security vulnerabilities, configuration defects, policy violations, and even compliance with security Benchmarks from CIS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Env Vars:** cis (1)
> **Cross-References:** we discussed (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Image registries](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=0)** - [Instructor] Let's switch focus from images to image registries and [Building Trust](../../Skills/Data%20Science/Building%20Trust.md) in them. You know, that you should only use a trusted base image to create your container images. But how do you know if the image you just acquired has not been tampered with, and is from a source you know and trust? Risks associated with using images built by someone else are similar to risks with using third party software components. But the problem is a bit more nuanced for container images. Since the final image is actually a collection of multiple layers, each layer may be created by a separate user. So we need a mechanism to establish trust in the complete chain of custody. This trust in the image is established through a process known as image signing. Image signing enables its author to add its identity to the image. This identity is in the form of a digital signature. The user of the image then verifies the integrity of the image before starting to use it. Now, of course, for your organization, you can implement an image signing framework from the scratch. But many commercial container image registries, you already use, include some implementation of an image signing framework. Few open source projects provide frameworks for image signing.
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=92)** The update framework or in short TUF started in 2019, is a general framework for software updates. This framework includes a set of libraries and utilities that can be used to secure the software upgrade process. Keep in mind that this framework is not specific to container images only. Another CNCF open source project called notary, is an implementation of the update framework that is suitable for distributing container images. With notary, the creator of the image, signs the image, using a secure private key. The creator pushes the content to the notary server. Users of the images, verify the image using the public key that they received from the creator via an out-of-band channel. Now granted the current implementation of notary has few challenges. And we will continue to see the enhancements in the next version of notary. Your container images include your businesses intellectual property. If you transport these images to or from an image registry over an insecure network, you run the risk of a variety of security attacks. An attacker could intercept the clear text connection and sniff the confidential data. There is also a risk of a man in the middle attack whereby an attacker can intercept and serve malicious images to the requester.
>
> **[3:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=184)** So what should you do? Always encrypt the connection to the registry, use the latest version of the TLS protocol, but will that be enough.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Building Trust](../../Skills/Data%20Science/Building%20Trust.md) (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **Env Vars:** tuf (1), cncf (1), tls (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Image registry access control](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=0)** - [Narrator] Even if the connection to the registry is encrypted, that will not prevent a malicious user with extraordinary privileges from accessing the images in the registry. So allow only authenticated users and service accounts to access your registry, but that's not sufficient either. Not all authenticated subjects are equal, not every authenticated subject needs to perform the same set of actions to those images. Think about this, the publisher process executed as part of your CI/CD pipeline, that uploads the image to your image registry. Does it really need both read and update permissions? So long as it has the right permissions that should be sufficient. So apply the principle of least privilege and give only permissions needed to do the job. Similarly, when the [Kubernetes](../../Skills/DevOps/Kubernetes.md) orchestrator needs to pull images from an image registry, it doesn't need the right access, read-only access will just be sufficient. Let's take a scenario. There is a subject that has the privileges, not only to create a container image, but also to deploy the container as well. In other words, there is no separation of duties when executing this task. This is a very contentious topic in [DevSecOps](../../Skills/DevOps/DevSecOps.md). On one hand, this arrangement appears frictionless and is treated as a recipe for continuous deployment. On the other hand,
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=92)** there is that risk of pushing some insecure code without "another pair of eyes looking at the code." So how do you balance between the need for hands-free [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md), and need for protection from fraud or error in this case. Retain the separation of duties, but minimize the handoffs among multiple persons. When you do implement handoff, automate as much as possible, and do it only at the most critical point in the pipeline. Now, depending upon the risk profile of your application and the compliance requirements, you may be even mandated to implement separation of duties. Therefore you may be required to ensure that the person creating the image is not permitted to publish and run it, appoint someone else to publish the image, after the verification is passed. Each image and its layers are identified by a digest that takes a special form, which is hashing algorithm colon, a hash value. If the contents of the layers are altered, the hash value will also change. This approach acts as a security aid in determining if the layer was altered, the digest that looks something like this is a machine friendly way to uniquely identify an image. But for all practical purposes, developers use another construct known as a tag. A tag is a human-friendly way to identify an image.
>
> **[3:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=190)** You may have seen the latest tag used to identify the most recent version of an image. Although convenient, it comes with its own set of challenges. Let's assume you have two containers A and B. Both of them are running the same image tagged as latest. While the containers were running, a new security vulnerability in the image was discovered. The developer fixed the issue, created an image, and advanced the latest tag to the most recent version. Ideally, you would redeploy those containers, so that both of your containers pick up the security fix. But let's say you don't have an automated way of doing that and container A crashes. Orchestrator post the image with latest tag. Now B is running with a stale image and A with the latest image. There is a mismatch. This is one example where tags can be notoriously difficult to get right. You want to make sure that you're pulling the right image from the image registry. There are a couple of ways to address this. First, you can use immutable tags. Once immutable tags are attached to the image layer, they stay attached. For example, if you tag an image would say label one, when the version of the image changes, you don't move label one. Instead you apply a new tag called label two to the latest version.
>
> **[4:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=283)** That way your label one and label two are always pointing to a known and never changing version of the image. In this approach, you set up the orchestrator to always pull via an immutable tag. So you're sure that all running containers will be running an image that is known and fixed. The second option is to keep using the latest tag, which is of course a mutable tag. But then you should carefully implement a mechanism to ensure that each container is running the desired image. And the last option is to not use tags at all. Instead, pull the image by its own digest value. And image can have many and ever changing tags, but will always have only one unique digest that will not change.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [DevSecOps](../../Skills/DevOps/DevSecOps.md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **Definitions:** is a  (5), in other words (1), known as (1)
> **CLI Commands:** cd (1), make (1)
> **Prerequisites:** required to (1), set up (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 5. Factor #3: Securing Hosts and Container Working Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Container working environment](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=0)** - [Instructor] Let's assume that you implemented all of the security controls, such as secure design code, images, and registries, but your application has not come alive yet. It only comes to life and starts running when its image is instantiated as a container. That container, which is nothing but a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) process, needs an environment and resources to run. If you recall, it needs a container runtime, it needs a host OS, and the capabilities offered by the OS. This environment needs to be secured. You can instantiate a container using a Docker command or in [Kubernetes](../../Skills/DevOps/Kubernetes.md) by submitting a part definition to an API server. While doing so, you may override and effectively undo the security configurations you may have put in place at the time of creating images. So let's walk through some security controls to protect the container environment and the host starting with the containers. You know that in your Docker file, you should specify a user to not let the container run as root, but what about when running a container? When starting a container from an image, you have a choice to specify a user ID corresponding to the root, and therefore we're running the container as root. This action overrides any user instructions included previously in the image.
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=96)** Let's talk about another level of privileges that a container can be granted. It's a common misconception that a container running as a root has the highest level of privileges, but that's not true. Recall from prior chapters the list of capabilities that can be added to or drop from a Linux process. Open Container Interface, or OCI specification, defines a set of capabilities that are granted to a container by default. Let's take a quick look at them. If you look carefully in the spec, not all capabilities are turned on as shown by zero. When you start a container with the privileged parameter, you're essentially making all of the system capabilities available to the container process. This is extremely dangerous. Set a container has full access to everything on the host operating system. In other words, by creating a privileged container, you have pierced all boundaries between the container process and the OS kernel, leaving no room for isolation. Granted, there are use cases such as Docker in Docker or system containers that necessitates the use of privileged containers, but most application containers don't need to run in privileged mode.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1)
> **CLI Commands:** docker (4)
> **Env Vars:** api (1), oci (1)
> **Documentation:** specification (1), spec (1)
> **Analogies:** such as (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Container network security](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=0)** - [Instructor] Any real business application won't be complete without containers talking to each other. And this communication is enabled by container networking. Now, Docker and [Kubernetes](../../Skills/DevOps/Kubernetes.md) take different approaches. In Kubernetes, each pod is assigned an IP address and is expected to communicate with other pods seamlessly regardless of where the pod is running, on the same node or on separate nodes. Kubernetes, however, does not provide the network functionality on its own. Rather, it depends on the container network interface or CNI plugin, which must be set up by an admin separately. So to secure inter-container communication, or to be precise, inter-pod communication in Kubernetes, you need to apply network policies. Through these network policies, you can control what traffic can flow between pods. We will address the [Network Security](../../Skills/Cybersecurity/Network%20Security.md) controls for Kubernetes in the next chapter. But that still leaves us to deal with the security of networks specific to standalone Docker containers. Container platforms such as Docker, provide multiple ways to facilitate communication among containers. These options are implemented via pluggable network drivers. Let's take a quick look at these options before we review the security controls.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=94)** For a complete description of these drivers, check out the Docker platform documentation. The bridge network driver, which is the default option, allows containers to communicate with each other on the same host. In this diagram, you will be able to spot a Docker bridge virtual interface. A special case of container networking is a closed container. A closed container uses the none network driver. It has only a loopback interface. No incoming or outgoing connections can be made from a closed container. Recall from the previous chapters that an isolated container runs in a separate namespace from that of its host. But there is a special case where you may want the container to run in the same network space as the host. Such a container uses the host network driver. In this option, a container's access to network is identical to that of its host. Underlay network drivers help containers that are on different hosts communicate with each other using the underlying physical interface. Two examples of such drivers are: media access control virtual [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), or in short macvlan, internet protocol VLAN, or in short ipvlan. These drivers let you treat a container
>
> **[3:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=189)** just like a physical host with its own MAC address. This capability comes handy when you're migrating from existing VM-based deployments or have special security or compliance requirements. Overlay network drivers also help containers on different hosts communicate with each other, but by taking a different approach. The overlay network is a virtual network that sits on top of the host specific networks. Overlay networks can be implemented using various virtualization technologies such as virtual extensible LAN or in short vxlan. So to recap, the bridge option allows containers on the same host to talk to each other. Host and none options are used for special container networking. Underlay and overlay networks allow containers across hosts to talk to each other. But by the way, on a side note, Kubernetes can utilize either underlay or overlay network plugins to make the networking possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (6), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **CLI Commands:** docker (5), node (1), make (1)
> **Env Vars:** cni (1), vlan (1), mac (1), lan (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2), just like (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Container port and interface security](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=0)** - [Instructor] Let's get back to stand alone containers. Even with the bridge network, containers are not directly routable from applications outside the cluster. So how do containers communicate with the outside world? You will need to map a TCP or a UDP port on the host network interface to a target container port. When executing Docker run command, you specify this mapping with -p or -- publish option. For example, this command will forward traffic on port 8088 of the host to port 8080 of the container. In contrast to [Kubernetes](../../Skills/DevOps/Kubernetes.md), Docker does not come with [Network Security](../../Skills/Cybersecurity/Network%20Security.md) policies. So you will need to put best practices and security controls in place to ensure that the communication among containers takes place only between the authorized parties. So let's review some of these controls. The port mapping command that you just saw has a security issue. With this command the container ports are exposed to any IP address which is represented by a wildcard IP address 0.0.0.0 on the host. This is not secure. You should accept connections only on a specific interface. For example, if you run the same command as following, you'll be mapping container port 8080
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=94)** to a specific interface represented by IP address, 10.2.5.6 and by port 49153. So what happens if you don't specify the port mapping? Well, Docker will automatically map the container port to any available host board in the range of 49153 to 65535.
>
> **[2:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=121)** But what if the user does not specify a port between one and 1024? Docker does not restrict that. The problem is that the ports between one and 1024 are deemed privileged and may carry sensitive data. So you should restrict users from mapping to host privileged port. And this can be accomplished using a review of the Docker file in predeployment or by running an audit or scan of the containers after containers are deployed. So let's switch from IP addresses and ports to the processes. Docker Daemon process accepts commands from the clients. The clients use a Docker socket to communicate with the Docker Daemon. Clients can talk to the Daemon over file descriptors, TCP or unique sockets. By default, this unique socket is located at a specific location in the host file system. Access to the socket is protected from other processes on the host. But what do you think will happen if you mount the socket as a volume inside a container? Any process within that container will have full access to send any command to the Daemon. This will result in the container gaining full control of the host, and this is not what you want. So ensure that this socket is not mounted
>
> **[3:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=215)** inside the containers. Let's visit the default network bridge one more time. When using the default bridge known as Docker0, by default, all traffic is permitted among containers on the same host. This means every container has read access to the traffic on the container network. This could lead to a breach of confidential information. To avoid this, you have two controls. First disable the default setting in the Docker Daemon configuration. And second, the preferred option is to create a new bridge network and only attach those containers that have a genuine need to talk to each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **CLI Commands:** docker (9)
> **Ports:** port 8080 (2), port 8088 (1), port 49153 (1)
> **Env Vars:** tcp (2), udp (1)
> **Versions:** 0.0.0 (1), 10.2.5 (1)
> **Analogies:** for example (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Host OS protection](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=0)** - [Instructor] Unlike [Hardware](../../Topics/Hardware.md) virtualization, in OS virtualization, multiple containers share the same OS. That leads to an expectation of mutual trust between the container and the host OS running that container. So far we have been discussing container and [Application Security](../../Skills/Cybersecurity/Application%20Security.md). But the host is equally accountable in the security of this ecosystem. In fact, the impact of a host being breached is way more amplified than that of a container breach. So let's walk through security controls to protect the host. Start with minimizing the host's attack surface. A typical [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating system has way more services running than you need to support container applications. Here you have two options to choose from. First, run a minimal OS that has been custom built for running containers, for example, VMware Photon or Red Hat CoreOS. These so called thin OSs have been stripped off of many components and services not typically required to run containers. Your second option is to keep using traditional operating system as mandated by your organization, but apply special hardening techniques to reduce the attack surface. You have fewer resources to rely on, the CIS Benchmarks and the [NIST](../../Skills/IT%20Help%20Desk/NIST.md) guide to server security. Look at the workloads you're planning to run on your hosts,
>
> **[1:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=99)** are you mixing both containerized and non-containerized workloads on the same VM? Move non-containerized workloads such as general services and applications to separate hosts. Look, if you don't do that, it's likely your general workloads are not going to be managed by an automated orchestrator such as [Kubernetes](../../Skills/DevOps/Kubernetes.md). That means your admin and operations team will need to manually access the host to start, stop and manage your services. And that will have two consequences. First, there is a potential for error and fraud. Obviously, you will need to grant permissions to users and operations to log in to host maintain the applications. This opens up your host to new attack vectors, either internal or external. And second, admins making changes to a live host will lead to a drift in the host configuration from its baseline. And that will result in a disparity in the configuration of hosts running in your cluster. Just like containers, you should make your hosts immutable as well. And lastly, if your container does get breached, you will limit the spillover to only applications running on that host. By agreeing to run only containerized workloads, you have already minimized the need for a human to be in direct contact with the hosts.
>
> **[3:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=195)** Let Kubernetes run and manage your containers. With that said, there are still operational requirements that traditional hosts will have, for example, patching. Just as you do with your containers, treat your hosts as cattle, not pets. Instead of patching, take the host VM out of service, reimage and put it back into the pools of nodes under Kubernetes. Now, while your host is down, trust your Kubernetes orchestration to move the pods from the down host to other available hosts. Use golden and standardized VM images to ensure that the host OS is styled from a trusted and secure baseline image. With that said, you can still have new vulnerabilities discovered anytime, so scan your host periodically. The host file system is precious and must be protected from malicious applications and rogue containers. There are many reasons why you should mount the host file system as read only to your containers. First, should a container be compromised, it will not be able to make changes to the read only host file system. This will limit the attack spillover to only within the container. And secondly, by mounting the host file system as read only, you're also enforcing the container to not persist data on the host.
>
> **[4:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=291)** Containers will be forced to utilize an external data source for data persistence. This approach is a step in the right direction. You will ensure that your containers are decoupled from the hosts. Decoupled containers can be easily stopped and restarted on another host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Hardware](../../Topics/Hardware.md) (1), [Application Security](../../Skills/Cybersecurity/Application%20Security.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [NIST](../../Skills/IT%20Help%20Desk/NIST.md) (1)
> **Analogies:** for example (2), such as (2), just like (1)
> **CLI Commands:** make (2)
> **Env Vars:** cis (1), nist (1)
> **Definitions:** is a  (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 6. Factor #4: Securing Applications in Kubernetes

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing applications in Kubernetes](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=0)** - [Instructor] The security of images, containers and hosts is a critical part of your strategy to protect your containers ecosystem. But when you introduce an orchestrator such as [Kubernetes](../../Skills/DevOps/Kubernetes.md), you increase the attack surface exponentially. You saw in the earlier chapters Kubernetes brings with it several moving parts that keep your workloads running without much human intervention. When it comes to the security of Kubernetes, we can see it from two different dimensions. First, the security of your pods and applications running in a cluster. And secondly, the security of the cluster and its native components. Securing applications requires proper isolation among parts. It also requires implementing access control, including authentication, authorization and mission control. It includes protecting the networking among the pods. And lastly, the secrets management. To protect the Kubernetes orchestrator itself requires discovering and fixing misconfigurations. It also requires securing the communication between the Kubernetes core components themselves. Besides you also need to ensure that these components themselves are not granted extraordinary privileges and are communicating over secure channels.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=95)** But here's the thing. The security controls we are going to discuss will vary in terms of their reach and scope. So let's define the scope first. Kubernetes offers a mix of components, collections and abstractions. You're already familiar with some of them. For example, nodes and pods. Kubernetes also offers clusters and namespaces. A cluster is a collection of nodes or host machines that run your pods. Basically every running Kubernetes instance has a cluster. Kubernetes also allows creating multiple virtual clusters from a single physical cluster. These virtual clusters are known as namespaces. Organizations use namespaces to allot cluster resources among multiple teams. So let us begin with security features and controls offered by Kubernetes to secure applications in a cluster. The scope of these controls can vary from pod, namespace to cluster level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (10)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Pod Security Standard](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=0)** - [Instructor] [Kubernetes](../../Skills/DevOps/Kubernetes.md) Pod Security Standards are a collection of well-defined policies and recommendations to ensure the security of containerized workloads within Kubernetes clusters. But the question here is why Pod Security Standards in the first place when we have so many other security features offered by Kubernetes? Look, organizations have requirements to meet and deliver against the industry standards, [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) requirements, or maintain internal security hygiene, and they want a clean and structured way to meet such requirements. Previously, this was accomplished through another Kubernetes feature known as PodSecurityPolicy. However, this feature was confusing and sometimes granted access permissions more than what was intended. Therefore, this feature was deprecated. Enter Pod Security Standard, which builds on the standardized levels of PodSecurityPolicy. To ensure Pod Security Standard, Kubernetes offers Pod Security Admission Controller, which allows administrators and users to check compliance against the Pod Security Standards. Now let's jump into what is inside the standard. The standard defines three profiles, privileged, baseline, and restricted. A privileged policy profile
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=93)** offers the most unrestricted permissions necessary for managing workloads and performing complex system or infrastructure level tasks. When using this profile, it is important to follow the privileged mode policies of your organization. For example, requiring multifactor authentication. The baseline policy profile is designed to be generic enough to cover a wide variety of non-critical workloads created by [Application Development](../../Skills/Software%20Development/Application%20Development.md) and operations teams. This profile enables such users to secure typical application workloads against common security threats. One example being privilege escalation. Now, switching to restricted profile. As the name suggests, a restricted security profile is the most restrictive and secure profile. This profile ensures that the containers running within a pod are read-only and limited to running only necessary operations. Applying this policy profile provides protection against most vulnerable workloads and malicious activities. In addition to the profiles, the standard also defines three modes of applying these profiles, enforce, audit, and warn. Both the policies and the mode are defined when configuring the Pod Security Admission Controller,
>
> **[3:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=189)** which we discussed a little bit earlier. Enforce mode will reject pods with policy violations. Audit mode would allow the pods with policy violations, but will include an event in the audit log event record. Warn mode will also allow pods with policy violations to run, but will directly notify the users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (5), [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) (1), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1)
> **Cross-References:** we discussed (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Access management](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980&t=0)** - [Instructor] Before a client such as kubectl or another [Kubernetes](../../Skills/DevOps/Kubernetes.md) component can perform any operation in Kubernetes, it must meet three criteria. The client must prove it is who it claims to be, the client must be permitted to perform the action it is requesting, and third, the requested operation, especially if it modifies a Kubernetes object, must be compliant with the security policy. The API server takes the help of three access control plugins to verify these criteria. Authentication plugins, authorization plugins, and admission control plugins. Now let's start to look at the authentication plugins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3)
> **CLI Commands:** kubectl (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Authenticating users](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=0)** - [Instructor] [Kubernetes](../../Skills/DevOps/Kubernetes.md) supports two types of subjects, regular human users and machine accounts, also known as service accounts. Service accounts are managed within Kubernetes while the user accounts are expected to be managed outside of Kubernetes. In fact, Kubernetes doesn't even have a native representation of a human user. In other words, you can create accounts for people in Kubernetes. So how does Kubernetes authenticate then? It supports several authentication options. Some of these options are encouraged since they meet good security practices while others not so. Here's the list of options as of the writing of this course. Static password or token file, X.509 client certificates, Open ID Connect [Tokens](../../Skills/Web%20Development/Tokens.md), using service accounts, and many others. Well, the name gives it away. In this method, the passwords are stored in a CSV file with at least three pieces of information, password, username, and user ID. A client using HTTP passes the authorization header with a 64 base encoded value of the user column, password. The API server then verifies it against the stored value. If a match is found, the user is authenticated,
>
> **[1:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=97)** but passwords don't expire and can be changed without restarting the API server. This authentication method should not be used in any enterprise environment. If the client certificate option is enabled in the API server, a client can present an X.509 certificate to assert its identity. API server using a pre-configured list of certification authorities then verifies the identity of the client. On the surface, this option may appear perfectly valid and even desirable, but if you're going to be using this method, be aware of its limitations. As of the writing of this course, Kubernetes does not support revoking the certificates. So if you want to change your certificate, your only options are to wait for the certificate to expire or just re-key. Secondly, the certificate-based authentication and the groups within role-based access control don't work together very well, why? Because every time the privileges of the subject change, you will need to reissue a certificate. Well, there is a case when you can still use this option. In case of an emergency, and your identity provider is not reachable, but we haven't yet talked about the identity provider in the context of Kubernetes yet. And that brings us to the next authentication method,
>
> **[3:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=191)** the OpenID Connect. OpenID Connect protocol is based on the OAuth 2.0 specification. OpenID Connect does not really authenticate, rather it provides a mechanism for generating and refreshing the client's assertion tokens. OAuth, which is the underlying protocol, on the other hand, provides a mechanism for transferring these tokens. Let's take a simplified view of how this works in Kubernetes. A user logs in with an identity provider. An identity provider could be [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) on your cloud, you can also run your own using Keyclaok or CoreOS Dex. Identity provider returns the user and identity token. Using your kubectl command, you supply that token along with an API call to the API server. API server, then validates the token, which is nothing but a JWT token. And by the way, did you notice that there is no arrow going from the API server back to the identity provider? No, and that's because all of the information needed to validate you as a user is in the ID token itself. This approach makes this authentication method, both stateless and scalable. Now, there are other authentication methods offered by Kubernetes for other situations, such as when bootstrapping the cluster
>
> **[4:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=285)** or using an authentication proxy. You can read more details about these methods in the Kubernetes official documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (11), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **Env Vars:** api (8), csv (1), http (1), jwt (1)
> **Definitions:** known as (1), in other words (1), is a  (1)
> **CLI Commands:** kubectl (1)
> **Versions:** 2.0 (1)
> **Documentation:** specification (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)

#### [Authenticating service accounts](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=0)** - [Lecturer] So far, we talked about authenticating regular users but what about authenticating applications or more specifically pods? [Kubernetes](../../Skills/DevOps/Kubernetes.md) offers a construct known as ServiceAccont. Unlike user accounts kubernetes does indeed store ServiceAccount details as a ServiceAccount resource. Each pod is assigned a ServiceAccount by default. But you can and should change the default account, why? By associating a ServiceAccount to a pod gives you the developer or the admin, the flexibility to control the resources a pod will have access to. Let's see how. A pod sends a request to the API Server with an authentication token. That token uniquely identifies that pod. Upon receiving the request the API Server in turn does two things. With the help of authentication plugin it authenticates ServiceAccount and next, using the authorization plugin checks whether the requested operation is permitted for that ServiceAccount. We'll hold off the discussion on the authorization part for a few more minutes. But we still haven't answered one question. How does the pod actually receive that token? Now, if you recall in case of a user account, the ID token was granted by the identity provider.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=95)** In case of a ServiceAccount, a default secret token is mounted on every pods file system at a predetermined location. But as you will see there're other ways to inject secret [Tokens](../../Skills/Web%20Development/Tokens.md) into the parts. Here's an example of using a custom ServiceAccount inside a pod. A service account is being created using kubectl command. And then inserted into a pods yaml specification. Okay so we covered the authentication let's switch to authorization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** api (2)
> **Cross-References:** we talked about (1), we covered (1)
> **CLI Commands:** kubectl (1)
> **Documentation:** specification (1)
> **UI Navigation:** switch to (1)
> **Definitions:** known as (1)
> **Speakers:** - [lecturer] (1)

#### [Authorization](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=0)** - [Instructor] Once a user or a service account has been authenticated, API server then validates if the requested operation is allowed. By default, all permissions are denied. Keep in mind that the authorization plugin checks for permissions only at the verb level. In more granular validation beyond the verbs is done by the admission controller, which we will see later. [Kubernetes](../../Skills/DevOps/Kubernetes.md) authorization supports multiple strategies, but the role-based access control or RBAC is the most common and recommended strategy. Generally speaking, role-based access control strategy grants or denies access to specific operations to subjects based on their assigned roles. For example, using kubectl command, a subject has the option of submitting any action to the API server, such as get, update and delete, but the API server by leveraging RBAC will finally determine whether the requested action is permitted or not. Let's say you have subjects, A, B and C. A can only perform a get operation. B can perform both get and create, while C can perform, get, create, and delete. How does the RBAC plugin do it? Well, it does through the interplay of several parts,
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=96)** which are, a Kubernetes object or resource, such as a Pod or a service upon which an action needs to be performed. The action represents an operation verb, for example, get, create, delete, and so on. Roles include a subset of actions that are permitted on a resource. The subject represents a user, a group of users or a service account who wants to take an action. And finally, the bindings. Bindings are the links between a subject and a role. A role can be of two types from the perspective of its scope. A role applies to namespace resources, while the cluster role applies to cluster resources. To bind a subject to a namespace resource, you use RoleBinding, while to bind a cluster-level resource, you use ClusterBinding. With that said there is a special use case, where you can also define cluster-level role once and then apply them to specific namespaces. In that case, you will bind a subject to cluster role using RoleBinding. In addition to RBAC, Kubernetes also defines two other authorizations strategies. Node authorization is a special purpose authorization mode used to authorize API requests made by the kubelets.
>
> **[3:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=193)** Attribute-based access control, or ABAC, is an authorization approach where instead of using roles of the subjects, attributes of the subjects and the resources are used to determine who's authorized or not. Given the maturity of RBAC and its usage in the industry, the ABAC might be deprecated in the near future. Okay, so we covered authentication and authorization, but when the request is trying to modify a Kubernetes resource, it must go to one more level of check known as the admission control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4)
> **Env Vars:** rbac (5), api (4), abac (2)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** kubectl (1), node (1)
> **Cross-References:** we covered (1)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)

#### [Admission control](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=0)** - [Tutor] The admission controller plugin intercepts the request and validates it against policies before the changes to a resource are persisted. As of the writing of this course, about 30 plus different admission controllers are included in [Kubernetes](../../Skills/DevOps/Kubernetes.md). Plugins are enabled while starting kube-apiserver. The following 17 plugins are enabled by default. While we won't go through all of these plugins, it is easy to understand their function by looking at some simpler examples. Keep in mind that some of the examples we will look at are somewhat less practical and deprecated, but they help us understand the concept before getting ready for more complex ones. By enabling AlwaysAdmit plugin, you are setting all requests to be allowed. This is equivalent to having no admission controller at all. Keep in mind that this plugin has been deprecated. At the other end of the spectrum is AlwaysDeny a plugin. With this plugin, you set all requests to be denied by default. All of the other controllers will do something in between these two extreme cases. Let's say a Namespace is in the process of being terminated. During that timeframe, if you submit a request to create a pod in it, the Namespace lifecycle admission controller will kick in
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=94)** and will stop that pod from being created in the terminating Namespace. If the incoming request violates the resource constraints specified in the ResourceQuota object, the request will be denied. If an incoming request violates the resource constraints specified in the ResourceQuota object, the request will be denied. Pod security policy used to be a special admission controller plugin. However, as discussed earlier, this plugin has been deprecated. The recommendation now is to use the new pod security standard. In addition to built-in admission controllers, Kubernetes also offers dynamic admission controllers. You can build your own admission controller extensions and run them via Webhooks. Kubernetes offers two types of Webhooks, mutating and validating. Mutating Webhooks are invoked first. They allow you to modify the object included in the request that is being sent to the API server. Validating Webhooks are invoked next. They validate the request against custom policies. But the question is, why would you want to mutate, or in other words, change the incoming object? Well, in some cases you want to enforce default and more secure values, you can set those secure defaults by using mutating Webhooks.
>
> **[3:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=187)** For example, by using your custom built mutating admission controller, you can set that pods user ID to a non route user in the incoming pod spec to the API server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (3)
> **Env Vars:** api (2)
> **Warnings:** keep in mind (2)
> **Documentation:** spec (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)

#### [Security context](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=1)** - [Teacher] Correctly implemented access control strategy can issue you that only the desired subjects will be able to perform the permitted actions. But your applications and pods work in conjunction with the OS and kernel, and you still need another layer of controls to ensure that these pods don't do anything dumb. If you recall, from the earlier chapters about securing standalone containers, we emphasized a few best practices such as not to run a container as root, securing network access, and so on. The fact that you now have [Kubernetes](../../Skills/DevOps/Kubernetes.md) orchestrating these pods, you still need a mechanism to implement the very same security controls. Kubernetes offers these mechanisms via security context and security policies. Think of security context as the mechanism provided to developers. Developers when writing pod specifications can attach the security context for a pod in the spec itself. On the other hand, think of security policy as a cluster level mechanism for admins to ensure that regardless of what specifications developer write, any non-security compliant requests will be denied. And guess what? A security policy is implemented by a none other than the admission controller we just talked about. With the concepts out of the way,
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=94)** it's time to check out both security context and security policy in a little more detail. To define the security context, you write it in your pod spec. Let's review the security controls you can add using security context. Some of these should look familiar to you from our prior videos on container security. To prevent a container from running a root. In the Security Context section, set RunAsNonRoot to true. To run the container as a specific user, set RunAsUser value to the appropriate user ID. You can control whether a container runs as a privileged container or not by changing the privileged attribute in the Security Context. You can add or drop a specific capability from a system capability with add and drop attributes. In the container security chapter, we talked about pluggable security modules and mandatory access control. Using security context, you can assign SELinix labels to a container. And besides, you can also enable Satcom and AppArmor, but both of these are not in general availability stage yet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2)
> **Documentation:** spec (2)
> **Cross-References:** we talked about (1)
> **Analogies:** such as (1)
> **Speakers:** - [teacher] (1)

#### [Security Policy](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980&t=0)** - [Instructor] While security context gives the power and privileges in the hands of developers, security policies enable admins to prevent a container from running if it violates a security policy or best practice. But in July 2021, PodSecurityPolicy feature was deprecated. Now, instead of using PodSecurityPolicy, you can enforce the same effect with either a PodSecurity admission controller or a third-party admission plugin. For users of this legacy approach of PodSecurityPolicy, [Kubernetes](../../Skills/DevOps/Kubernetes.md) provides a migration path, details of which are available on Kubernetes website, and the link is provided here on the screen. The PodSecurity admission control mechanism follows the requirements defined in PodSecurity standard that we reviewed earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Kubernetes network security](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=0)** - [Instructor] From access control, security context and policies. Now let's switch gears to [Kubernetes](../../Skills/DevOps/Kubernetes.md) [Network Security](../../Skills/Cybersecurity/Network%20Security.md). Kubernetes doesn't follow the Docker container networking model. When it comes to port allocation, service discovery and load balancing, the Kubernetes network model is designed to be backward compatible with VMs or physical hosts. Every pod gets assigned an IP address just as a VM does and just like a VM can talk to another VM, so can a pod. There is no need for network address translation or NAT. There's no need to map ports on a host to the ports on a pod. In fact, the Kubernetes networking model requires this simplicity and this network model is made possible by the virtue of external network plugins. Well, this simplicity of interpod communication actually creates some security challenges. By default, pods can send and receive traffic to and from any source without any restriction. But let's say you don't see a business or a technical need for say a database pod to be talking directly to a web server pod. In that situation you want to ensure that the communication link between the two pods doesn't exist. A good security policy is to segment your network and isolate traffic based on traffic sensitivity. Kubernetes offers network policies that allow you to control
>
> **[1:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=98)** which pods can communicate with each other. Now, keep in mind that just defining and posting a network policy to API server will not control the traffic. The network plugin that has been set up for Kubernetes by the admin must support network policies. Here is an example network policy. You want to start by stating which pods this policy is applicable to. And the mechanism for selecting such pods is through labels. If you don't specify a label, the policy will apply to all pods. Policy type attribute allows you to select whether the policy will apply to ingress, egress or both types of traffic. Ingress refers to incoming traffic to a pod while egress refers to the outgoing traffic from a pod. So in this example, you're applying the network policy to pods that match the label inventory. And next you're stating that the incoming traffic should be permitted only from pods with label order. Switching to egress example, here you're limiting outbound traffic from pods labeled inventory to only pods that are labeled warehouse. We only scratch the surface when it pertains to pod security, as well as network policies. Your enterprise implementation is going to be more complex than the examples we just discussed.
>
> **[3:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=192)** So I encourage you to review the official Kubernetes documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (7), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Definitions:** refers to (2), is an  (1)
> **Env Vars:** nat (1), api (1)
> **CLI Commands:** docker (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Secrets management](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=0)** - [Instructor] There are several use cases for Secrets in the [Kubernetes](../../Skills/DevOps/Kubernetes.md) environment. The most obvious one is when you want your Pods to use Secrets such as access [Tokens](../../Skills/Web%20Development/Tokens.md), passwords, or API keys. The other use cases are really two components of your Kubernetes cluster. These components also need Secrets so that they can communicate with the API server or other components. Kubernetes offers a first class object known as Secret, which holds the key-value pair information. The Secret is stored in etcd store as base64 encoded value. Keep in mind that base64 is an encoding mechanism and not an encryption technique. This encoding is used to convert binary data into plain text format. Starting with Kubernetes Version 1.7 onwards, Secrets stored in etcd are also encrypted. The Secrets can be passed onto your application via a mounted volume or via an environment variable. One common example of using Secrets is that every Pod gets a Secret volume automatically mounted. The Secret volume stores all the information the Pod needs to securely communicate with the API server, but for your application and use case,
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=93)** you're going to be creating and using custom Secrets. So let's take a look at how your Pod can consume your custom made Secret. You modify the Pod specification to mount the Secret volume, which in this case is mySecrets. And next, you specify your Secret, which in this case is myKeys, but how does the Secret volume look from the point of view of a Pod? If you will call a Kubernetes Secret object is actually a key-value pair. The key portion of the key-value pair appears as the file name. The value portion of the pair appears as the content of the file. We will get to the subject of creating Secrets in a second, but for the time being, in this example, let's say when you created the Secret, your key was myVaultKey. This will show up as myVaultKey under your mounted volume. On a side note, all those Secrets are stored in etcd store in encrypted form. When consuming the Secret via volume or an environment variable, the Secret is stored in its original form and not in the base64 encoded form. The other method of making Secrets accessible within the container is via environment variables. So you update your Pod definition to include two things. First, the name of the environment variable
>
> **[3:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=186)** that you're going to use in your application. And second, specify where is the value of that variable going to come from. In this example, you're stating that the environment variable name is myVaultKey, which will take its value from the Secret names, myKeys. Furthermore, the value will be assigned from the key named myVaultKey. Kubernetes supports both volume mount and environmental variable for injecting Secrets into a Pod, but you should prefer using the volume mount. There are several risks associated with keeping the Secrets in environment variables. Developers may save the environment variable values in a log file exposing the Secret information to people who shouldn't have access to your data. A child process inherits the environment variables of its parent process. You will not have control over what a child process does with that information. So far, we didn't talk about the process of creating a Secret. Secrets can be created using the command line or definition files. For example, with kubectl create secret command, or you can write the Secret in a Yaml based Secret specification file, and then apply it using kubectl apply. You can also inject Secrets
>
> **[4:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=278)** from a third party secrets management solution. Kubernetes uses etcd to store Secrets in an encrypted manner, but many organizations use a third party secret management solution, such as Conjur or HashiCorp Vault. These third party solutions handle storage, encryption and rotation. They also offer visibility and control beyond Kubernetes. Moreover, they are useful when you want to access Secrets outside of the Kubernetes and you need a central place to store them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (9), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Code Identifiers:** myvaultkey (4), mykeys (2), mysecrets (1)
> **Env Vars:** api (3)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** kubectl (2)
> **Documentation:** specification (2)
> **Definitions:** known as (1), is an  (1)
> **Versions:** version 1 (1)


### 7. Factor #5: Securing Kubernetes Cluster

[↑ Back to Table of Contents](#table-of-contents)

#### [Cluster security goals](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=0)** - [Instructor] We now know the security features and capabilities offered by [Kubernetes](../../Skills/DevOps/Kubernetes.md). These feature allow developers and admins to establish security controls that protect your running pods. These features also play a significant role in protecting the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the Kubernetes infrastructure. These core components are not typically accessed by your application. They work behind the scenes to keep the cluster running. But how do you protect them? We have identified a few key goals, protect the API server traffic and the Kubernetes cluster components, prevent resource overuse, secure the Kubernetes network, and finally, the secrets. We will look at each one of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Securing API server traffic](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=0)** - [Sam] Authentication and role-based access control enable users and service accounts to communicate with the API Server. But remember, [Kubernetes](../../Skills/DevOps/Kubernetes.md) native components also frequently communicate with the API Server. Kubelets, kube-scheduler, kube-proxy, and kube-controller-manager must connect to API Server via a secure port. These clients must also authenticate themselves. Make sure that in the API Server specification file, the insecure-port parameter is set to zero. If you set up an API Server on the default insecure-port 8080, you are allowing attackers unencrypted access to the API Server. The secure-port parameter is used to serve HTTPS traffic. Ensure that its value, if defined, is between one and 65535. In addition, ensure that the insecure-bind-address doesn't exist. API Server should be configured to serve and accept only HTTPS traffic. That will require you to set up TLS, so check out the Kubernetes documentation on how to do that. Also, make sure in the API Server specification file, the client-ca-file parameter exists, and it points to the correct path of the file containing certificate authorities.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=94)** Similarly, ensure that the parameters related to TLS certificate file and private keys are set appropriately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (2)
> **Env Vars:** api (8), https (2), tls (2)
> **CLI Commands:** make (2)
> **Documentation:** specification (2)
> **Prerequisites:** set up (2)
> **Ports:** port 8080 (1)
> **Speakers:** - [sam] (1)

#### [Securing cluster components](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=0)** - [Instructor] You need to protect etcd store. Limit access to it, of course, with the exception of the API server, and only serve clients over TLS. Secrets are stored in the etcd store, so you must ensure that the secret data at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) is encrypted. Starting with [Kubernetes](../../Skills/DevOps/Kubernetes.md) version 1.13 and etcd version 3.0 onwards, Kubernetes supports encryption of secrets. By default, kubelet allows anonymous requests. Ensure that you only allow authenticated and authorized requests, and again, only serve over a secure connection. Kubernetes offers various mechanisms to manage the usage of resources at the cluster and namespace level. You want to put these restrictions in the place to protect from a noisy neighbor that wants to hog all compute and memory resources. This can help protect from a denial-of-service attack due to malicious containers. You can also use ResourceQuota to prevent pods from running that do not meet the pre-specified CPU and memory limits. Likewise, setting up Limit Range allows you to prevent users from requesting high values of your resources. To protect your network, implement namespaces in a large, enterprise, multi-application environment. We already saw how network policies
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=94)** can help control traffic in a cluster. Use a network plugin provider that supports network policies. Utilize quota and limit ranges to control access to your load balancers. Load balancers expose your application to the outside world, and you want to carefully control users who can have access. Encrypt secrets at rest and in transit. Use the latest version of Kubernetes supporting encryption of secrets in SCD. Use TLS to ensure that the confidential data in transit is not accessible to others. Rotate your secrets frequently. Remove the service account token after it is no longer needed. And finally, reduce the lifespan of a secret. Shorter the lifespan, the less likely it is going to be usable by an attacker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2)
> **Env Vars:** tls (2), api (1), cpu (1), scd (1)
> **Versions:** version 1 (1), version 3 (1)
> **Speakers:** - [instructor] (1)


### 8. Additional Security Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [Infrastructure security](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=0)** - [Instructor] So far, we assumed that the [Kubernetes](../../Skills/DevOps/Kubernetes.md) cluster was already installed on [Hardware](../../Topics/Hardware.md) infrastructure. The underlying infrastructure, whether it is your on premise data center or the public cloud is the backbone of your Kubernetes cluster. The infrastructure provides the foundational compute, memory, storage and networking capabilities to run Kubernetes. The security of this infrastructure is critical. There is an implied trust between Kubernetes and the infrastructure. Even if you secure your applications and the cluster, the underlying infrastructure may still be vulnerable. The vulnerabilities in the infrastructure can be a reason your application or cluster might be compromised. But who is responsible for the security of the infrastructure? Well, that depends on the Kubernetes deployment model. When it comes to deploying Kubernetes, there are two ends of the spectrum. On one hand you have the fully managed Kubernetes solutions. These solutions make it easy to deploy and manage Kubernetes clusters. Some examples are, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Kubernetes Service, Amazon's Elastic Container Service and [Google](../../Glossary/Service/Google.md) Kubernetes Engine. On the other hand, you have a deployment of Kubernetes in your own data center. In this model, you are responsible for managing
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=93)** and operating the Kubernetes clusters. You're also responsible for running the infrastructure as well. Other deployments are in between these two options. The deployment model also governs security responsibilities. In an on premise model, you are responsible for implementing the security controls such as network protection, firewalls, access management, all by yourself. In the managed service model, you still need to implement these security controls. But the difference is that you leverage the capabilities offered by the cloud provider. Some examples of these capabilities are access and resource management and [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) policies and so on. Moreover, the cloud provider is already responsible for protecting the underlying hardware as per the shared security responsibility model. Regardless of the deployment model, there are some security considerations you must keep in sight. And then work with your infrastructure provider or team to ensure that security implementation addresses these. Make sure there is network isolation among multiple clusters. Access to the Kubernetes control plane should not be permitted directly via the public facing IP addresses. Any access must be limited. Direct public access to nodes should be prohibited. Access must be managed via the control plane
>
> **[3:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=188)** using the appropriate services offered by Kubernetes. For Kubernetes to do its job, it needs access to your infrastructure API. Give Kubernetes only as much as API access as needed. Monitor your infrastructure and clusters. Look for anomalies and patterns that impact CIA triad that is confidentiality, integrity and availability. New technologies and approaches to modern cloud native security are emerging. Do your due diligence and adopt as appropriate for your enterprise. Learn more about leveraging [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning for security in this course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (16), [Hardware](../../Topics/Hardware.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (1)
> **Env Vars:** api (2), cia (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Logging and monitoring](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=0)** - [Narrator] When your applications are running and the cluster is humming, you need a way to know what's going on with your [Kubernetes](../../Skills/DevOps/Kubernetes.md)' components and applications. Logs are your eyes in your cluster. These logs help debug problems with your cluster. They're also important in detecting security anomalies and any ongoing attacks. However, unlike traditional applications, pods and [Microservices](../../Skills/Software%20Development/Microservices.md) come and go. They could be stopped and restarted anytime. Furthermore, there's no guarantee that a pod will be started on the same node. After a pod or a node is stopped, you still want the ability to access logs. So your logging lifecycle should be decoupled from that of containers, pods and nodes. Kubernetes doesn't provide any native log management solution. Fortunately, several external logging solutions can be integrated with your Kubernetes clusters. When it comes to logging in Kubernetes, there are three options with progressively increasing complexity. Basic container level logging for logs generated by applications. Logging at node level that also includes capturing logs generated by Kubernetes' core components. And logging at cluster level that is enabled with an external backend solution. Applications write their logs to standard output
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=96)** instead of to any specific log file. By using kubectl logs command, you can see the logs from a current or a previously running container. In addition to container logs, Kubernetes' native components generate logs as well. These logs can be sent to either journal D or directly to a log file. Cluster level logging relies on implementing a logging backend. In a typical implementation, you will see a node agent running on every node. A common example of a node agent is fluent D. Fluent D is a log aggregator that can ingest logs from different types of log sources. Node aggregator then pushes to a centralized logging backend. Again, a popular choice is a combination of [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) and Kibana. Though logging is essential, it is of no use if you don't monitor and look for abnormalities and patterns in data. You can connect your logging infrastructure to Prometheus, which is an open source monitoring system. Your enterprise may already be using it. Another monitoring choice is via Splunk, which is also a popular enterprise grade event collection and monitoring solution. And lastly, you can push your logs and events
>
> **[3:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=190)** to your centralized SIEM, that is the security information and event management system. This will allow your security teams to view events from Kubernetes alongside other events from the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your infrastructure. A single pane of view will help them make a more judicious decision about any security issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (7), [Microservices](../../Skills/Software%20Development/Microservices.md) (1), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** node (7), kubectl (1), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** siem (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=0)** - [Sam] The world of containers and [Kubernetes](../../Skills/DevOps/Kubernetes.md) is evolving rapidly. In this course, we only scratched the surface of security controls you can use to protect your containers and Kubernetes ecosystem. After watching this video, you will be able to assess the maturity of your organization's container and Kubernetes security posture. By now, you should also know the breadth of security controls that you have at your disposal. When you are ready to go deeper into a specific area, you should consult the documentation offered by [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), Docker, and Kubernetes. If you're not already using containers with Kubernetes, this course should give you a framework to think about security from day one. So I urge you to take action. Make security a priority for your cloud native applications. Feel free to reach out and connect with me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). I look forward to hearing how your journey in the security of containers and Kubernetes is progressing. Thank you for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Kubernetes](../../Skills/DevOps/Kubernetes.md) (6), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** docker (1), make (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [sam] (1)


## Instructor

- [Sam Sehgal](../../Instructors/Cybersecurity/Sam%20Sehgal.md)

## Skills Covered

- Containerization
- Kubernetes
- Cybersecurity

## Path Context

### In [Getting Started with Kubernetes](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Kubernetes.md)
← [Kubernetes- Cloud Native Ecosystem](Kubernetes-%20Cloud%20Native%20Ecosystem.md) | **6 of 6**

## Appears In

- [Getting Started with Kubernetes](../../Paths/DevOps/Learning%20Paths/Getting%20Started%20with%20Kubernetes.md)

## Related Courses

_Courses sharing skills:_

- [Spring On Kubernetes Deploying And Managing Cloud Native Applications](../Cloud%20Computing/Spring%20On%20Kubernetes%20Deploying%20And%20Managing%20Cloud%20Native%20Applications.md) — Kubernetes
- [Docker Essential Training](Docker%20Essential%20Training.md) — Containerization
- [Kubernetes- Cloud Native Ecosystem](Kubernetes-%20Cloud%20Native%20Ecosystem.md) — Kubernetes
- [Kubernetes- Microservices](Kubernetes-%20Microservices.md) — Kubernetes
- [Kubernetes- Essential Tools](Kubernetes-%20Essential%20Tools.md) — Kubernetes

---

[↑ Back to top](#)