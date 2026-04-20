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
  - Getting Started with Kubernetes
path_count: 1
tags:
  - course
  - topic/devops
  - skill/containerization
  - skill/kubernetes
  - skill/cybersecurity
status: not-started
created: 2026-04-19
---

![Securing Containers and Kubernetes Ecosystem](https://media.licdn.com/dms/image/v2/C4E0DAQHDGPzLMbnmyg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1600898707127?e=2147483647&amp;v=beta&amp;t=QcCm1mdjY0iOu_Y2iHgZeiM8d3pFOs4yS7ykzqkwHjg)

# Securing Containers and Kubernetes Ecosystem

> Containers have transformed the way applications are built, deployed, and managed. But it’s only a matter a time before a vulnerability or misconfiguration leads to a newsworthy security breach. Establishing security controls is essential to protect applications being deployed in orchestration systems like Kubernetes. This course explains how to secure containers and the Kubernetes ecosystem using

> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem) | 2h 8m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Sam Sehgal]]

## Skills Covered

- Containerization
- Kubernetes
- Cybersecurity

## Table of Contents

### Introduction

#### Protect your containers and Kubernetes ecosystem
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/protect-your-containers-and-kubernetes-ecosystem-21031810?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/protect-your-containers-and-kubernetes-ecosystem-21031810?u=76281980&t=0)** - [Sam] So how can an organization like yours ensure that the security of their containers and Kubernetes ecosystem is robust?
>
> **[0:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/protect-your-containers-and-kubernetes-ecosystem-21031810?u=76281980&t=8)** If you are seeking to build your expertise in developing and managing containerized environments that are secure by design, then this course is for you.
>
> **[0:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/protect-your-containers-and-kubernetes-ecosystem-21031810?u=76281980&t=19)** My aim is for you to depart with a comprehensive understanding of essential security controls and best practices, empowering you to safeguard both your containers and the overarching Kubernetes ecosystem.
>
> **[0:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/protect-your-containers-and-kubernetes-ecosystem-21031810?u=76281980&t=33)** I'm Sam Sehgal, and I'll be your guide throughout this journey exclusively on my LinkedIn Learning course as we explore the intersection of security, containers, and Kubernetes.

> [!info]- Semantic Content
>
> **Speakers:** - [sam] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980&t=0)** - [Instructor] This course includes an introduction to the foundations of containers and Kubernetes technologies.
>
> **[0:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980&t=6)** But to get the best out of this course, you should have some information technology knowledge.
>
> **[0:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980&t=12)** Awareness of Linux or Unix-like systems will help you get the most out of container isolation concepts.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980&t=20)** Some familiarity with the concepts of containerizations or container platforms, such as Docker, will be an excellent foundation for learning container security controls.
>
> **[0:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-you-need-to-know?u=76281980&t=31)** And lastly, awareness of a container orchestrator, such as Kubernetes, will make it easy for you to grasp the security capabilities of Kubernetes.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), make (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Demystifying Containers and Kubernetes

#### What are containers?
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=0)** - [Instructor] A container is a software that packages not only your application code, but also its dependencies such as libraries, configuration settings, and the file system.
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=13)** Containers are portable, meaning they can run on different kinds of operating systems and infrastructure, seamlessly.
>
> **[0:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=21)** They isolate a running application from the environment outside the application, as well as from the other containers.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=30)** Now it's important to realize the difference between a container and a container image.
>
> **[0:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=36)** A container image is a special file, that becomes a container when it is run as a process of an operating system.
>
> **[0:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=44)** So before we jump into the technology behind the containers, let's take a look at the reasons why you use them.
>
> **[0:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=51)** First, the economics, containers are more bang for your buck.
>
> **[0:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=57)** Look, if you're running only one operating system, all running containers utilize the same OS and that makes containers lightweight compared to a virtual machine.
>
> **[1:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=69)** So when a given hardware setup, you can squeeze a larger number of business applications, since all the dependencies required for an application are packaged along with your code.
>
> **[1:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=81)** You don't run into the issue of it works in my laptop, but not in production.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=86)** Containers are portable across platforms.
>
> **[1:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=89)** It is easier to build and share container images in comparison to virtual machine images, given that images are built in layers, they offer observability all the way from the OS to the application layer.
>
> **[1:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=105)** When implemented with the right set of security controls, containers limit the spillover should a containerized application be breached, but the security of containers depend upon correctly using the features and isolation capabilities of an operating system.
>
> **[2:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=123)** Containers take advantage of an operating system paradigm, known as OS Virtualization.
>
> **[2:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=129)** OS Virtualization is made possible, by the capabilities of the kernel of the OS.
>
> **[2:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=136)** These capabilities make a running application pink as if it has got a full copy of the OS only to itself.
>
> **[2:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=144)** But in reality, multiple applications are sharing the same operating system.
>
> **[2:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=149)** This kind of virtualization plays a significant role in the security of containers and the applications running inside them.
>
> **[2:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-are-containers?u=76281980&t=158)** That's why, it's worth while to review and compare it with other virtualization techniques.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Virtualization
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=0)** - [Instructor] At its core, there are three ways applications and their operating environment can be configured on a given hardware.
>
> **[0:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=9)** On bare metal, using hardware virtualization, or using OS virtualization.
>
> **[0:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=15)** Before virtualization technologies were in mainstream, an application was deployed on a dedicated, bare metal hardware.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=25)** There were no restrictions on the resources an application could use.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=30)** Should an application hog the entire hardware resource, the only option left for the admin was to throw more hardware at it.
>
> **[0:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=39)** Of course, the applications running on separate hardware were isolated from each other, which was great from a security perspective, but the applications running on the same hardware had limited security boundaries around them.
>
> **[0:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=55)** Then came hardware virtualization, which enabled organizations to run multiple virtual machines on the same hardware instance.
>
> **[1:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=64)** This form of virtualization not only allowed flexible scale up or scale down of the VMs, but also provided stronger isolation among applications running on the same hardware.
>
> **[1:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=79)** Think of each VM as a standalone computer with its own instance of an operating system.
>
> **[1:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=85)** The operating system running in the VM thinks it has the full compute and memory resources at its disposal.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=94)** The OS doesn't know that the hardware is actually being shared with other VMs.
>
> **[1:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=100)** And this magic is made possible by the hypervisor layer.
>
> **[1:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=104)** As an industry, we could have stopped right there.
>
> **[1:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=106)** Don't get me wrong.
>
> **[1:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=108)** VM based deployments do provide isolation and scalability.
>
> **[1:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=112)** In fact, they work really well for a variety of use cases.
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=117)** But, modern loosely coupled microservices that are built, deployed and restarted many times during the day have different requirements.
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=128)** Enter OS virtualization that made containers possible.
>
> **[2:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=132)** Containers are lightweight, easy to create and destroy and don't come with the overhead associated with the virtual machines.
>
> **[2:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=140)** This makes them more suitable for the modern applications and use cases.
>
> **[2:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=146)** On the surface containers appear similar to VMs, but remember behind the scenes, it is the operating system and not the hardware that is being virtualized.
>
> **[2:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=158)** Meaning in hardware virtualization, where each VM runs its own copy of an operating system, in OS virtualization only one instance of the operating system is running.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=170)** Each container thinks it has the entire operating system at its disposal.
>
> **[2:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=176)** The container does not know that the operating system is being shared with other containers.
>
> **[3:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=182)** What is analogous to the hypervisor from the hardware virtualization in the OS virtualization world?
>
> **[3:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=189)** It is the container runtime and the capabilities of the operating system that makes the OS virtualization possible.
>
> **[3:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/virtualization?u=76281980&t=197)** Let's take a look at the native isolation and security features of the Linux operating system.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (1), let (1)
> **Analogies:** similar to (1), analogous to (1)
> **Speakers:** - [instructor] (1)

#### Isolation and OS security features
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=0)** - [Instructor] Namespaces.
>
> **[0:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=2)** Control groups or in short, cgroups.
>
> **[0:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=6)** Ability to add or drop OS system calls.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=11)** Loadable security modules to bring additional security controls not offered by the OS by default.
>
> **[0:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=19)** And lastly, the seccomp.
>
> **[0:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=21)** Surprisingly, these capabilities have existed way before modern containers came into existence.
>
> **[0:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=29)** Container platforms, such as Docker utilize these features of the Linux operating system to make containers easy to use, run, and secure.
>
> **[0:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=40)** By default, each Linux process runs in a default namespace meaning, system resources such as process IDs, user IDs, network interfaces, and file systems are shared with other processes.
>
> **[0:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=57)** As you can imagine, that will not work for containerized applications.
>
> **[1:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=62)** Linux offers the ability to create namespaces.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=66)** When a process is run inside a namespace, it is not able to see the resources in other namespaces.
>
> **[1:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=74)** For example, it can't see the PID or process IDs from other namespaces.
>
> **[1:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=81)** Likewise, a process running in a namespace will see its own version of the host name, which will be different from the host name seen by the processes in another namespace.
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=93)** Obviously, all of these processes are running on the same host machine.
>
> **[1:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=98)** Different types of namespaces focus on different types of resources.
>
> **[1:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=103)** For example, PID for process IDs, IPC for interprocess communication, NET for networking access and so on.
>
> **[1:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=114)** Understand that the process needs to be assigned to more one namespace from this list to ensure the isolation for that resource type.
>
> **[2:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=125)** So who will do this on your behalf?
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=128)** When you issue a command to create a Docker container, the container platform takes care of creating namespaces behind the scene for you.
>
> **[2:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=139)** While namespaces offer isolation of OS resources, another feature known as control groups or in short cgroups allows you to set and enforce resource limits.
>
> **[2:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=152)** When you have multiple container processes running, you don't want one process hogging up all the available CPU or memory and leaving nothing behind for other processes.
>
> **[2:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=165)** Container platforms leverage cgroups to set limits on the resource usage.
>
> **[2:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=171)** Think of this as a security control to prevent denial of service attacks.
>
> **[2:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=177)** You have heard of the security principle of least privilege, meaning, limiting access rights for users and processes to bare minimum permissions they need to perform their jobs.
>
> **[3:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=189)** The same principle applies to containers as well.
>
> **[3:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=193)** If a container doesn't have a genuine need, you don't want that container to be granted blanket access to all system calls offered by the kernel.
>
> **[3:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=203)** And that's where the capabilities feature of Linux comes useful.
>
> **[3:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=208)** Capability feature breaks up the set of root privileges into smaller slices, and then, allows you to choose and apply only those privileges that a container needs.
>
> **[3:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=220)** Here are some examples of these capabilities as documented in the Linux manual.
>
> **[3:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=228)** Namespaces, control groups, and capabilities are enough for process isolation and resource management.
>
> **[3:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=236)** But container platforms such as Docker need a kernel supported mechanism to enforce access control.
>
> **[4:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=243)** Now the access control here refers to controlling which processes get access to which of the system resources.
>
> **[4:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=252)** There are several mandatory access control implementations, but the two most common ones are SELinux and AppArmor, and they take a different approach to provide access control.
>
> **[4:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=265)** Keep in mind, that both SELinux and AppArmor are not part of the kernel code.
>
> **[4:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=271)** Instead, they are plugged into the kernel wire hooks.
>
> **[4:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=275)** These hooks are offered by the Linux security module or LSM framework of the Linux operating system.
>
> **[4:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=283)** Instead of implementing the access control feature itself, the Linux kernel invokes the functionality of these modules.
>
> **[4:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=291)** Now, just so happens that these Mac modules are the primary users of this framework, but other modules that provide a different security capability can also be plugged into this framework.
>
> **[5:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=305)** In addition to LSMs, the container platform can also use seccomp.
>
> **[5:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=311)** Seccomp is a capability in Linux that allows the processes running in user space to transition into a secure state and, restrict the use of system calls to extremely limited set, thereby, limiting the Linux Kernel attack surface.
>
> **[5:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=329)** So to recap, namespace, not to be confused with Kubernetes namespace is a Linux kernel feature that provides isolation of processes.
>
> **[5:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=340)** Cgroups provide resource limits.
>
> **[5:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=343)** Capabilities features allow dropping privileged system calls.
>
> **[5:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=348)** Keep in mind, that this feature allows dropping system calls only to a predefined list.
>
> **[5:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=355)** SELinux and AppArmor are access control modules that are plugged into the kernel via hooks.
>
> **[6:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=361)** They provide fine grain access control to resources.
>
> **[6:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/isolation-and-os-security-features?u=76281980&t=365)** And finally, secccomp limits which system calls a process in user space can execute.

> [!info]- Semantic Content
>
> **Env Vars:** pid (2), ipc (1), net (1), cpu (1), lsm (1)
> **Analogies:** such as (3), for example (2), imagine (1)
> **Code Keywords:** default. (1), default, (1), type. (1), module (1), finally, (1)
> **CLI Commands:** docker (3), make (1)
> **Definitions:** is a  (2), known as (1), refers to (1)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### Container runtime
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=0)** - So now we recognize the security and isolation features offered by the operating system and how essential they are for a container platform.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=11)** The component that actually leverages these OS features is known as container runtime.
>
> **[0:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=18)** Let's now take a look at the role of container runtime within the context of a container platform, such as Docker.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=25)** We will cover the container images and container orchestration in the later sections of this course.
>
> **[0:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=32)** Container platform consists of a Daemon that listens to API requests from the clients.
>
> **[0:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=39)** This demon, in turn relies on a component known as container runtime.
>
> **[0:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=44)** The definition and the scope of container runtimes have changed over the years.
>
> **[0:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=50)** But in general, container runtimes perform two distinct tasks.
>
> **[0:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=55)** The high level tasks of image transport, packing or unpacking images is done by so-called high-level Container runtime.
>
> **[1:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=65)** In the Docker ecosystem, this task is performed by container D.
>
> **[1:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=70)** There are other implementations as well, such as CRI-O.
>
> **[1:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=74)** High level container runtime relies on a low-level container runtime to actually run the containers.
>
> **[1:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=82)** Low-level container runtime uses operating system features such as namespaces and cgroups to create and isolate containers.
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=92)** RunC is the most popular implementation of a low level container runtime.
>
> **[1:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=98)** Keep in mind that there are some implementations of container runtimes that perform both the high level and the low level functionalities.
>
> **[1:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=107)** For example, RKT also known as rocket.
>
> **[1:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=111)** While we are talking about containers, it is important to know about the Open Container Initiative or in short the OCI.
>
> **[1:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=119)** OCI is a project under Linux foundation that standardizes to specifications related to containers and container images.
>
> **[2:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=130)** OCI image specification defines a standard way of creating a container image.
>
> **[2:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=137)** While OCI runtime specification defines a standard way of running an ACI image.
>
> **[2:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=144)** Now let's connect back to our diagram.
>
> **[2:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-runtime?u=76281980&t=146)** RunC is an OCI runtime spec compliant implementation while container D leverages the OCI image specification.

> [!info]- Semantic Content
>
> **Env Vars:** oci (6), api (1), cri (1), rkt (1), aci (1)
> **Definitions:** known as (3), is a  (1), is an  (1)
> **Documentation:** specification (3), spec (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** docker (2)
> **Code Keywords:** let (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - so (1)

#### What is Kubernetes?
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=0)** - [Teacher] We now know that containers enable us to easily deploy small application components.
>
> **[0:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=7)** In other words, loosely coupled microservices, but it is not uncommon for an enterprise to have an extremely large number of containers running.
>
> **[0:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=16)** Once you have such a large number of containers running simultaneously, how do you manage them?
>
> **[0:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=22)** The reality is it is expensive, error-prone, and cumbersome for an operations team to do so manually.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=30)** You need an automated system that can schedule, configure, restart, and monitor such containers.
>
> **[0:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=38)** Kubernetes is such an open source-container orchestration system that relieves the operations team.
>
> **[0:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=44)** And with the help of an orchestrator, operations team only need to focus on managing kubernetes itself, while the Kubernetes manages thousands of containers on their behalf.
>
> **[0:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=56)** In fact, the combination of container technology, powered with the orchestration of Kubernetes, enables your DevOps team to focus on what they are best at.
>
> **[1:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=67)** Developing teams can focus on writing code and building applications.
>
> **[1:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=72)** They no longer have to worry about the infrastructure setup, service discovery, or how to expose their services.
>
> **[1:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=79)** Likewise, operations team can focus on the underlying infrastructure such as on-premise data center or cloud infrastructure, they no longer have to be distracted by the software application issues such as release management, tracking and interdependencies and deployment.
>
> **[1:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=98)** Loosely speaking, Kubernetes acts as an operating system for your data center.
>
> **[1:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=104)** It presents your infrastructure as a unified computation resource to your developers.
>
> **[1:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=110)** We know Kubernetes as the orchestration engine for containers, but Kubernetes does not manage the containers individually.
>
> **[1:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=119)** Instead, it manages them as a collection of containers in a single atomic unit.
>
> **[2:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=126)** This collection of containers in kubernetes jargon is known as a pod.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=131)** All containers in a pod are co-located on a single hardware node, meaning you will not find containers that belong to the pod deployed on different nodes.
>
> **[2:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=144)** By default, containers in a pod share the same OS context, such as Linux namespaces, network and volumes and so on, but it's possible to add additional isolation among containers even within a pod.
>
> **[2:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=161)** Kubernetes cluster consists of two primary building blocks, a master node and multiple worker nodes.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=170)** Master node manages and orchestrates the entire Kubernetes system.
>
> **[2:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=176)** Worker node on the other hand, is where your containerized applications are run.
>
> **[3:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=181)** Now both master node and worker node run special components that work together in harmony and make up the control plane.
>
> **[3:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=190)** KubeCTL, which you will see multiple times over this course, is a command line interface that lets you control the Kubernetes cluster.
>
> **[3:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=200)** While we're going to look at the physical components of Kubernetes in a moment, it's important to first understand the concept of Kubernetes objects.
>
> **[3:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=209)** Objects are the abstractions that Kubernetes uses to capture the state of a cluster.
>
> **[3:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=216)** For example, a pod, the smallest possible unit of deployment in the Kubernetes object model, or the policies that apply to pods, are also represented as objects.
>
> **[3:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=230)** When you create an object, essentially you're telling Kubernetes the desired state that the cluster should convert towards, but how do you represent that state?
>
> **[4:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=241)** Well, you do so in the form of a YAMl specification.
>
> **[4:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=246)** Here is an example of what a spec looks like.
>
> **[4:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=250)** We'll have plenty of opportunities in the following chapters to see this in action.
>
> **[4:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/what-is-kubernetes?u=76281980&t=255)** So for now, let's switch to the core Kubernetes components.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), find (1), make (1), kubectl (1)
> **Code Keywords:** default, (1), interface (1), let (1), switch (1)
> **Definitions:** in other words (1), known as (1), is a  (1), is an  (1)
> **Analogies:** such as (3), for example (1)
> **Documentation:** specification (1), spec (1)
> **Prerequisites:** configure (1), setup (1)
> **Tools:** command line (1)
> **UI Navigation:** switch to (1)

#### Kubernetes master node
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=0)** - [Instructor] Etcd is a distributed key value data store that stores the configuration and state of the cluster.
>
> **[0:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=9)** Master node runs the API server.
>
> **[0:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=12)** The API server is responsible for accepting and processing commands from clients such as kubctl.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=20)** The components of the master and the worker node do not talk to each other directly.
>
> **[0:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=26)** They do so via the API server.
>
> **[0:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=29)** The controller manager is the manager of the controllers.
>
> **[0:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=33)** So what is a controller?
>
> **[0:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=36)** A controller is a Kubernetes component that watches the state of the cluster and attempts to modify the actual state of the cluster so it matches the desired state.
>
> **[0:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=48)** Some examples of the controllers are replica set, daemon set, stateful set, service controller, and so on.
>
> **[0:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=55)** Controllers watch the API server for changes to the cluster state and keep performing operations until the actual state matches the desired state.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=66)** The scheduler determines which node a pod will be assigned to.
>
> **[1:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=71)** It uses a variety of algorithms to determine the best fit node to run a pod.
>
> **[1:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=78)** The algorithm takes into account many factors, such as the available hardware resources on the nodes, the special needs of the pod, affinity of a pod to a certain node type, and so on.
>
> **[1:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=91)** Scheduler posts the updated pod definition to the API server, which is being watched by kubelets on the worker nodes.
>
> **[1:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=101)** Now, it may appear as if the master node is doing all the heavy lifting.
>
> **[1:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=106)** While master node stores and controls the state of the cluster, it is the worker node that runs your containerized workloads.
>
> **[1:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-master-node?u=76281980&t=116)** So let's switch to the components that run on a worker node.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Env Vars:** api (5)
> **Code Keywords:** type, (1), let (1), switch (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### Kubernetes worker node
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=0)** - Kubelet is constantly watching out for any commands that are posted to the API server.
>
> **[0:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=6)** More specifically, commands pertaining to the pods on its node.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=11)** Once it knows that the node it is running on is expected to run a pod, it gets into action.
>
> **[0:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=19)** Of course, Kubelet doesn't do so by itself.
>
> **[0:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=22)** It takes the help of container runtime, which we discussed in depth in the previous videos.
>
> **[0:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=29)** Kubelet also monitors the containers running inside a pod.
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=34)** It restarts or terminates as needed and then notifies the API server.
>
> **[0:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=40)** The containers need a way to communicate with the other containers inside the cluster, as well as with the clients outside the cluster.
>
> **[0:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=48)** Kube-Proxy, also known as the service proxy, ensures this connectivity.
>
> **[0:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=54)** It uses the operating systems packet filtering system, if available, or it just forwards the traffic itself.
>
> **[1:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=63)** In addition to the components we just discussed, there are a few add on components required for Kubernetes and your applications to run smoothly.
>
> **[1:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=73)** For example, DNS server, dashboards, logging mechanisms, and so on.
>
> **[1:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=81)** Before we wind up this video on Kubernetes, let's revisit the topic of container runtime but this time we will look at it from the point of view of Kubernetes.
>
> **[1:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=91)** You know that the Kubelet relies on container runtime to run containers, but Kubernetes supports different kinds of container runtimes as long as they support the container runtime interface, or in short, CRI.
>
> **[1:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=107)** There are a few CRI compliant runtimes available today such as CRI-O, more commonly known as CRIO and CRI containerd.
>
> **[1:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=118)** CRIO, which implements the CRI, provides the integration path between the OCI confirmed runtime, such as RunC, and the Kubelet.
>
> **[2:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-worker-node?u=76281980&t=129)** Similarly, containerd from Docker now has a CRI plugin that allows you to run even containerd as container runtime with the Kubelet.

> [!info]- Semantic Content
>
> **Env Vars:** cri (6), api (2), crio (2), dns (1), oci (1)
> **CLI Commands:** node (2), docker (1)
> **Code Keywords:** let (1), interface (1), implements (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** known as (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - kubelet (1)


### 2. Security Model for Containers and Kubernetes

#### Overall technology architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=0)** - To implement security controls, for protecting your container, and Kubernetes' ecosystem.
>
> **[0:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=6)** You first need to identify, the attack surface.
>
> **[0:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=10)** And that requires, an understanding of the end to end architecture.
>
> **[0:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=14)** That also requires knowledge of the role, each building block plays, from the first line of code, all the way to the running containers in production.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=25)** Here is a simplified view, of a few key building blocks in this ecosystem.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=30)** Of course, the real picture is a bit more complex than this.
>
> **[0:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=35)** Taking the code, from developers hands, to a deployed application in Kubernetes, is made possible, by careful coordination of these building blocks.
>
> **[0:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=46)** These building blocks, must work harmoniously with each other.
>
> **[0:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=50)** To draw a crude analogy, imagine a conveyor belt system in a factory.
>
> **[0:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=56)** The conveyor belt, moves raw materials, from one station to another.
>
> **[1:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=60)** Each station transforms, and adds incremental value to the material.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=66)** After the work is done by the last station, you get a finished product ready to be shipped.
>
> **[1:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=71)** Let's get back to the ecosystem diagram.
>
> **[1:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=74)** Source Code Repositories, such as get hub and get lab, whether deployed in the cloud, or in your own premise environment, store the Source Code written by your developers.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=86)** An Artifact Repository, serves as the source for third party software components, libraries, and the build artifacts for your developers.
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=96)** It also makes those third party, software components available to your developers, with built in governance, and a security policy around it.
>
> **[1:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=105)** The Build Infrastructure, along with its continuous integration pipeline, provides both the engine and the workflow, to compile the Source Code and build container images.
>
> **[1:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=119)** The images that have been scanned, for security and can be trusted.
>
> **[2:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=124)** These container images, are stored in an Image Repository, and access to via central registry.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=131)** A Container Orchestrator such as Kubernetes, is set up and configured, in advance by the admin, the Orchestrator locates, an optimal compute node to run the Container Image.
>
> **[2:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/overall-technology-architecture?u=76281980&t=145)** And finally, the Orchestrator, then continues to monitor, run, and restart your application containers.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), picture (1), imagine (1)
> **Code Keywords:** this. (1), let (1), finally, (1)
> **Exercise Files:** source code (3)
> **Definitions:** is a  (2)
> **CLI Commands:** node (1)
> **Prerequisites:** set up (1)
> **Speakers:** - to (1)

#### Container deployment and orchestration lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=0)** - [Instructor] Modern practice for development, deployment and operations of software has come a long way.
>
> **[0:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=6)** Let's bring it all together and see how building blocks of this ecosystem come together to move the code from the developers IDE to deployment with the minimal human touch.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=20)** Developers write code and check in into a source code repository.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=25)** In addition to writing homegrown proprietary code, they also use open source components and third party packages to build their business applications.
>
> **[0:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=36)** Instead of going directly to third party repositories on the internet, developers retrieve these components why a trusted enterprise repository manager.
>
> **[0:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=47)** This ensures that the vulnerable software components are not accidentally or intentionally downloaded and made part of their application.
>
> **[0:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=56)** An automated continuous integration system, compiles the code and resolves dependencies, and stores any intermediate or final binary artifacts to a central repository.
>
> **[1:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=70)** Developers or an automated CI system, generates a container image and stores the image in a container image repository.
>
> **[1:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=79)** Many organizations choose to use Kubernetes package managers to define and install applications in Kubernetes.
>
> **[1:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=88)** These packages are known as Helm charts and are managed by a tool conveniently known as Helm.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=95)** The same build pipeline also creates and stores these charts in a special repository.
>
> **[1:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=101)** The stages of the software development lifecycle we looked at so far are performed as part of continuous integration or ensured a CI pipeline.
>
> **[1:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=112)** The output of the CI pipeline is a container image and a Helm chart that is ready to be deployed to staging or production environment.
>
> **[2:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=121)** From this point on a continuous deployment, or ensured a CD pipeline takes over.
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=128)** The continuous deployment pipeline deploys the containerized application to a staging environment.
>
> **[2:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=135)** The same pipeline may also perform automated security and functional tests before deployment.
>
> **[2:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=143)** And finally, the pipeline deploys to your production environment by upgrading the Helm chart in the production cluster.
>
> **[2:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=152)** From this point onwards Kubernetes monitors the health of pods and nodes.
>
> **[2:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-deployment-and-orchestration-lifecycle?u=76281980&t=158)** It watches for any configuration changes and scales up or down, or restarts as needed.

> [!info]- Semantic Content
>
> **Definitions:** known as (2), is a  (1)
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** cd (1)
> **Env Vars:** ide (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Attack surface and vectors
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=0)** - [Teacher] Keeping this well synchronized ecosystem secure is going to be challenging, but before we can secure it, we need to understand what can actually go wrong.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=11)** To do so, we will look at the attack surface of the containers and Kubernetes.
>
> **[0:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=17)** The attack surface simply means the areas of a system that are one wonderful and can be exploited.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=25)** A source code repository that contains the proprietary code may contain secrets.
>
> **[0:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=31)** The secrets might be accidentally exposed.
>
> **[0:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=35)** An attacker who gets access to your repository will automatically get access to your secrets, such as passwords, API keys, and database credentials, and access to those secrets opens the door to other parts of your system.
>
> **[0:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=52)** The artifact repositories and container image registries, serve trusted objects and images to your developers and orchestrators.
>
> **[1:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=62)** Unsecure connections, poor authentication and authorization practices can result in malicious actors getting access to these sources of trust.
>
> **[1:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=72)** The attacker in turn can then compromise stored objects and images.
>
> **[1:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=78)** Kubernetes cluster that comprises a master node and worker nodes has quite a large attack surface.
>
> **[1:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=87)** Master node, also known as the control plane, consists of API server, etcd, and several other components.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=95)** Most components of Kubernetes don't talk to each other directly.
>
> **[1:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=99)** They all communicate why our API server.
>
> **[1:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=102)** Unauthorized access to API server considerably jeopardize the security of the entire cluster.
>
> **[1:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=109)** Etcd stores the configuration and state of the clusters components and objects.
>
> **[1:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=116)** Should an attacker get read-write access to the etcd, the attacker then literally has full access to your entire cluster.
>
> **[2:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=126)** Worker nodes run your workloads, or in other words, your containerized applications.
>
> **[2:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=132)** Traffic between master and worker nodes carries commands and responses.
>
> **[2:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=137)** Unsecured network can be intercepted by an attacker.
>
> **[2:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=141)** As a result, the attacker can view or modify the state of your cluster and applications.
>
> **[2:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=147)** Kubelet process is in charge of running containers on its worker node as per the pod specification received from the API server.
>
> **[2:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=156)** Unauthorized access to Kubelet can compromise that node.
>
> **[2:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=160)** The host operating system, running on a worker node can itself be vulnerable.
>
> **[2:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=166)** Running an operating system with unnecessary components, wide open file permissions, and the unpatched kernel, can make the entire node vulnerable to attacks.
>
> **[2:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=179)** Misconfigurations or vulnerabilities in container platform and container runtime can compromise your containers.
>
> **[3:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=187)** Containers rely on successful OS virtualization and isolation.
>
> **[3:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=193)** Poorly isolated containers can access not only the host resources, but also the resources of their neighboring containers.
>
> **[3:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=202)** A poorly designed application with security weaknesses can be explored by the attacker.
>
> **[3:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=208)** And lastly, your Kubernetes cluster runs on an on-premise or cloud infrastructure Misconfiguration or poor security policies can result in unauthorized access to the underlying infrastructure.
>
> **[3:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/attack-surface-and-vectors?u=76281980&t=221)** With access to infrastructure, an adversary can compromise your entire cluster.

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), make (1)
> **Env Vars:** api (5)
> **Definitions:** known as (1), in other words (1)
> **Documentation:** specification (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [teacher] (1)

#### Five factors
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=0)** - [Sam] After seeing the attack surface, we can appreciate the complexity of efforts that might be required to keep it all protected.
>
> **[0:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=9)** Therefore, we need a structured approach to security.
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=13)** We're going to apply a five factor security model.
>
> **[0:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=17)** Each factor comprises of a set of security controls that work to protect this ecosystem.
>
> **[0:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=24)** Let's take a quick look at them.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=25)** The rest of the course will be a deep dive into each of these security factors.
>
> **[0:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=31)** The first factor is all about secure design principles and coding practices that your developers and architects should adopt.
>
> **[0:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=40)** The next factor focuses on the security of container images and image registries.
>
> **[0:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=47)** This factor includes security controls required to protect images during creation, storage, transport, and retrieval.
>
> **[0:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=57)** A container is a process instantiated from an image.
>
> **[1:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=61)** Naturally, after securing images, the next factor focuses on security controls to protect running containers.
>
> **[1:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=69)** This factor also includes controls to secure hosts that provide the operating environment for containers.
>
> **[1:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=76)** Your applications in Kubernetes depend on Kubernetes' provided features for access management, networking, secrets management, and so on.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=86)** This factor covers how to apply these security capabilities of Kubernetes to protect your applications in the cluster.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=95)** Kubernetes cluster comes with its own core component, which must be protected as well.
>
> **[1:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/five-factors?u=76281980&t=101)** This factor is all about security of Kubernetes cluster and its components.

> [!info]- Semantic Content
>
> **Code Keywords:** protected (2), let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [sam] (1)


### 3. Factor #1: Securing Containerized Application Code

#### Secure design before code
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=0)** - [Teacher] Every enterprise goal is that its containers in production are not only free today, but remain free of security vulnerabilities.
>
> **[0:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=10)** It is also expected that these containers remain compliant with the organization's security policies at all times.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=20)** So it is natural to believe that scanning and monitoring your containers and kubernetes environment for security and policy violations is going to be imperative.
>
> **[0:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=31)** But is that enough?
>
> **[0:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=33)** Don't get me wrong.
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=34)** Such security controls are extremely important and necessary as you will see in the later chapters, but they are not sufficient.
>
> **[0:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=43)** Why?
>
> **[0:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=45)** Because by the time you end up scanning thousands of running containers, not only you have missed an opportunity to catch a security bug early on, but you're also being inefficient as well.
>
> **[0:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=58)** If these containers are instantiated from the same image, you could have found many configuration defects and vulnerabilities from that one single image.
>
> **[1:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=69)** You could have also blocked it from running as a container in the first place.
>
> **[1:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=74)** By the same argument, if you have multiple container images being generated out of the same codebase, it is more effective to secure that source code itself.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=86)** In other words, there is a case for finding security vulnerabilities as early as possible in the software development life cycle.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=94)** We saw in the previous chapters that developers build images from homegrown code, third party components, libraries, and OS components.
>
> **[1:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=105)** The security of such images and containers is only as good as the security of the objects being placed inside them.
>
> **[1:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=113)** So why not shift security all the way to the left?
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=117)** A Secure Development Lifecycle or SDL, emphasizes embedding security into all stages of a software development lifecycle.
>
> **[2:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=126)** We will go to some of the key security controls you should put in place.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=131)** But for a comprehensive treatment of the subject, I encourage you to review the publications by SAFECode organization, National Institute of Standards and Technology or NIS, and other courses on LinkedIn.
>
> **[2:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=147)** Start with security requirements.
>
> **[2:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=149)** Place the security of your application at par with features and functional requirements.
>
> **[2:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=156)** Work with the product managers and owners to ensure that the user stories related to security are prioritized and not pushed to the backlog to be handled later as mere checkboxes.
>
> **[2:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=171)** A secure application is contingent upon having a secure architecture.
>
> **[2:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=177)** Understand and apply the foundational principles of secure design.
>
> **[3:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=182)** To secure an application from the ground up, an application architect or developer should be comfortable applying the following design principles at minimum, the principle of least privilege, defense in depth, separation of duties, and minimizing the attack surface.
>
> **[3:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=202)** In fact, in the next chapters, you will watch the very same principles I'm advocating applied to secure containers, hosts, and the kubernetes clusters.
>
> **[3:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=213)** Threat modeling typically done at the design stage, enables your engineering team to look at your architecture from an adversary's point of view.
>
> **[3:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=223)** The goal of threat modeling is to enumerate external threats and discover weaknesses in your design.
>
> **[3:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-design-before-code?u=76281980&t=229)** You should apply threat modeling techniques to find and then mitigate such weaknesses so that you can prevent a poor design from being implemented in the first place.

> [!info]- Semantic Content
>
> **Env Vars:** sdl (1), nis (1)
> **Definitions:** in other words (1), is a  (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [teacher] (1)

#### Secure code
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=0)** - [Instructor] Secure architecture and threat modeling will get your engineering team to a solid foundation.
>
> **[0:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=7)** But there is no guarantee that the code developers will write will be free of bugs.
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=13)** More specifically, the security bugs.
>
> **[0:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=16)** Securing code requires a multi-pronged approach.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=20)** The approach includes peer code reviews, automated scanning of the code and the software components at various stages in your software development life cycle.
>
> **[0:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=31)** Poor and unsafe programming habits leads to security bugs in the code.
>
> **[0:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=36)** These innocent-looking security bugs, if not fixed early, will morph into security vulnerabilities in your containers running in the production.
>
> **[0:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=46)** This process of identifying security issues in the source code by scanning and analyzing is popularly known as static analysis security testing, or SAST in short.
>
> **[1:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=60)** Educate your developers to write secure code in the first place.
>
> **[1:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=65)** Train them on how to use the output of these scanning tools to locate unsafe core blocks.
>
> **[1:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=73)** And finally, complete the feedback loop by ensuring that the security bugs are addressed before the code is promoted or merged into the next level branch.
>
> **[1:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=85)** You'll have multiple opportunities to run a static analysis of your code, first in the integrated development environment or the IDE of the developer.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=95)** This allows the developers to get immediate feedback on the security issues in their code.
>
> **[1:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=102)** Next, you can run a static analysis directly on the source code repository and integrate it with the developer's workflow.
>
> **[1:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=111)** This will give you the option to scan the code with every pull or merge request.
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=117)** If you're running a continuous integration pipeline, there is another opportunity to run the scan in the pipeline immediately after the code commit.
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=128)** Brand new code written by developers can be analyzed by SAST tools.
>
> **[2:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=134)** But what about the code that has been acquired from third parties?
>
> **[2:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=138)** You want to identify all components that may contain security vulnerabilities.
>
> **[2:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=144)** Perform software composition analysis of your code so you know the true bill of material of your code.
>
> **[2:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=152)** Many open source and commercial tools can assist you with this type of analysis.
>
> **[2:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=157)** So when should you run these tools?
>
> **[2:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=160)** Just as in the case of SAST, you have multiple opportunities.
>
> **[2:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=165)** Integrate component scan in your enterprise artifact repository so anytime a developer pulls or pushes a software component, it is scanned at the artifact repository level.
>
> **[2:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=178)** Many commercial tools integrate directly with the repositories.
>
> **[3:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=183)** These tools continuously apply your security policy to block vulnerable components from being used.
>
> **[3:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=191)** You can and should run a component scan in your CI/CD pipeline where possible in your workflow.
>
> **[3:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=199)** Static code and software composition analysis can give you the confidence that the code is secure, but you still want to be sure that when the code turns into running application, it can withstand the attacks of an adversary.
>
> **[3:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=216)** Before you deploy your application into your production environment, utilize specialized tools that test the application for commonly found security weaknesses.
>
> **[3:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-code?u=76281980&t=226)** This type of application testing is known as [[Dynamic Application Security Testing]], or DAST in short.

> [!info]- Semantic Content
>
> **Code Keywords:** static (4), finally, (1)
> **Env Vars:** sast (3), ide (1), dast (1)
> **Exercise Files:** source code (2)
> **CLI Commands:** cd (1)
> **Speakers:** - [instructor] (1)


### 4. Factor #2: Securing Images

#### Secure container images, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=0)** - [Instructor] So by now, you should be able to recognize the importance of secure design and code in setting a solid foundation for a secure container ecosystem.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=11)** But at some point in the software development lifecycle, you or the developers in your organization are going to build a container image.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=20)** And a container image comes with its own set of security issues related to its integrity and configuration.
>
> **[0:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=28)** Such security issues must be addressed independently.
>
> **[0:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=33)** Moreover, a container image is not just built, it is also are stored, transported, and then retrieved by many players of this ecosystem.
>
> **[0:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=43)** So we need to make sure that both the image and the image registry are protected at every stage.
>
> **[0:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=52)** And second, no defects should be introduced in the image that will later appear as vulnerabilities while running the containers.
>
> **[1:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=61)** So let's take a look at the security controls you should implement to protect these images while in rest or in motion.
>
> **[1:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=70)** We will start with the security controls required at the time of image creation.
>
> **[1:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=75)** A container image is a collection of multiple layers built using the Union File System, where each change to the file system is stored as a separate layer.
>
> **[1:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=88)** Each incremental layer represents the delta of changes from the previous layer.
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=93)** The layer also contains the metadata including a layer or a commit ID.
>
> **[1:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=99)** Although you can create a container image in many ways, the most common and practical way is to use a Dockerfile.
>
> **[1:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=108)** A Dockerfile is a plain text file with step by step instructions on how to build an image.
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=117)** Not only a Dockerfile makes it easy to see how an image was built, but it also allows you to check in the file in the source code repository and track it just like the rest of your source code.
>
> **[2:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=130)** Note that the Dockerfile defines not only the code that goes into your image, but also the configuration and the environment under which the image will run.
>
> **[2:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=141)** And that puts an enormous amount of power in the hands of the author, or anyone who can get their hands onto the file.
>
> **[2:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=149)** So let's dissect a Dockerfile and look at the security best practices you can put in place.
>
> **[2:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=156)** The FROM directive in a Dockerfile tells the container platform such as Docker, which base image to use.
>
> **[2:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=164)** This base image will be the bottom most layer of your final container image.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=170)** Start with an image whose content and the source is known.
>
> **[2:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=174)** Your organization might already maintain a set of golden base images that are trusted and made available via an enterprise image repository.
>
> **[3:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=185)** These golden images are safe to use because they have been scanned for security vulnerabilities, vetted and meet the organization's security policies.
>
> **[3:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=196)** The attack surface of your container is directly proportional to the number of software components present in its image.
>
> **[3:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=205)** Larger the number of components, the greater the probability that one of them has a security flaw that is exploitable by an attacker.
>
> **[3:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=214)** There are a few ways you can reduce the attack surface.
>
> **[3:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=218)** You already know that you should start from a trusted base image.
>
> **[3:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=223)** But you should also start with a minimal base image in the FROM directive.
>
> **[3:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=228)** There is no need to begin with say a traditional Ubuntu Linux image with all kinds of utilities and modules still in it.
>
> **[3:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=237)** Instead, use a minimal image such as Alpine, BusyBox, or something similar.
>
> **[4:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=244)** Or if you prefer, you can create your own base image by literally starting from scratch.
>
> **[4:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=251)** Even if you start with a minimal base image, you still have the option to add additional software components.
>
> **[4:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=258)** For example, add and copy commands in Dockerfile allows you to add additional content into the image file system.
>
> **[4:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=267)** You should ask, do you really need to add that extra component just because you can?
>
> **[4:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=273)** For example, do you need to add SSH web server or even the Bash shell?
>
> **[4:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=278)** Look, if you keep your image bloated with unnecessary components, you will have few consequences.
>
> **[4:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=286)** If the extra component you added happens to be vulnerable, your entire image is at risk which can lead to the breach of the container.
>
> **[4:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=295)** When a container is breached, these components can make attackers' job easier, helping them move around and even escalate privileges.
>
> **[5:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=306)** For example, if an attacker gets access to your container, the attacker will need utilities such as a shell, cat, ls command, etc.
>
> **[5:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=316)** If your container does not have these tools to begin with, you're making it harder for the attackers to carry out their job.
>
> **[5:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=325)** Keep in mind though, this approach is a dual-edged sword.
>
> **[5:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-1?u=76281980&t=329)** By stripping your image off these basic utilities, you're also making it difficult for yourself to debug any bugs.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (3), just like (1)
> **CLI Commands:** make (2), docker (1), ssh (1), cat (1), ls (1)
> **Code Keywords:** let (2), protected (1)
> **Definitions:** is a  (3)
> **Exercise Files:** source code (2)
> **Warnings:** note that (1), keep in mind (1)
> **Env Vars:** ssh (1)
> **Tools:** bash (1)

#### Secure container images, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=0)** - [Narrator] The principle of least privilege implies that a subject which can be either a person or a service account should be granted only as much as access privileges as are needed to perform their job.
>
> **[0:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=14)** Under no circumstances should they be given a blanket privilege beyond their role.
>
> **[0:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=21)** The user instruction in Dockerfile specifies, the user, the container will be running as.
>
> **[0:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=28)** If you don't specify a user in the Dockerfile, the container runs as a root by default.
>
> **[0:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=35)** And for most containers, which are running business applications that is beyond the level of privileges they actually need.
>
> **[0:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=42)** Keep in mind that unless you are building a system container that really needs to interact with the OS Kernel, no container needs route access.
>
> **[0:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=53)** Setting a setuid bit on a file in a Unix-like operating system has some interesting consequences.
>
> **[1:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=62)** Typically, when a Linux process is started from a file, the process runs with the permissions of the executer.
>
> **[1:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=70)** But when the process is started from a file with the setuid bit on, the process runs with the permissions of the owner of the file.
>
> **[1:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=79)** This behavior has some repercussions for security and can lead to privilege escalation.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=86)** Let's say you were careful enough to specify a username the image should run as, but you happen to include a binary with setuid bit in your image.
>
> **[1:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=98)** When someone runs that binary, the process starts with a different set of privileges.
>
> **[1:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=104)** For example, if the owner of the binary happened to be root, the process will be running with the root privileges.
>
> **[1:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=113)** And this is a form of privilege escalation, you didn't want that process to run as root.
>
> **[2:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=120)** Therefore, don't include binaries with setuid bit bit turned on.
>
> **[2:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=125)** Now, even if you intentionally minimize the attack surface, chances are that unsolicited objects will creep into your image.
>
> **[2:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=135)** These unwanted objects can take many forms, but all of them make your containers vulnerable.
>
> **[2:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=142)** For example, a malware that is a malicious executable that gets added into your image intentionally or accidentally.
>
> **[2:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=151)** Malware can create a backdoor to your container and make it accessible to attackers.
>
> **[2:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=157)** Ironically, you can accidentally introduce malware by getting a malicious image from a public repository.
>
> **[2:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=165)** Another kind of object that you don't want in your image is a Secret.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=170)** A Secret is anything that is confidential and can unlock access to private data.
>
> **[2:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=176)** For example, passwords, private keys or connection strings and so on.
>
> **[3:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=183)** We only know about the problem of Secrets in source-code repositories.
>
> **[3:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=187)** If you have not solved that problem, chances are that the same habits and practice will manifest in the image file system as well.
>
> **[3:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=197)** So how do you take care of these unwanted issues with the images and what security controls should you put in place?
>
> **[3:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=206)** Scan your images, identify the security issues, whether these are embedded malware, embedded secrets or security vulnerabilities and address them before your image is run as a container.
>
> **[3:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=219)** Ideally, if you follow the secure design, code and scanning practices, we discussed in prior chapters, there should be minimal vulnerabilities in your image.
>
> **[3:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=230)** But things change, new vulnerabilities are discovered.
>
> **[3:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=234)** Let's say you didn't find any security bugs in the code and the image was clean when the developers built it.
>
> **[4:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=240)** That may not be true today or in the future when you're about to run your containers.
>
> **[4:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=246)** So when and how often should you scan your container images?
>
> **[4:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=250)** First, scan an image in your Continuous Integration or CI pipeline immediately after building the image.
>
> **[4:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=258)** Second, integrate scanning directly with the image registry, so that the images are being scanned continuously in the background and are flagged based on their vulnerability status.
>
> **[4:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=272)** This will prevent vulnerable images from being downloaded in the first place.
>
> **[4:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=278)** There are several open source and commercial tools available in the market.
>
> **[4:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=282)** For example, Claire, Kube-bench, aquasec, and Twistlock.
>
> **[4:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secure-container-images-part-2?u=76281980&t=287)** These tools will help you scan for security vulnerabilities, configuration defects, policy violations, and even compliance with security Benchmarks from CIS.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (2), default. (1), public (1)
> **Analogies:** for example (4)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Env Vars:** cis (1)
> **Cross-References:** we discussed (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Image registries
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=0)** - [Instructor] Let's switch focus from images to image registries and building trust in them.
>
> **[0:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=6)** You know, that you should only use a trusted base image to create your container images.
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=13)** But how do you know if the image you just acquired has not been tampered with, and is from a source you know and trust?
>
> **[0:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=23)** Risks associated with using images built by someone else are similar to risks with using third party software components.
>
> **[0:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=31)** But the problem is a bit more nuanced for container images.
>
> **[0:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=36)** Since the final image is actually a collection of multiple layers, each layer may be created by a separate user.
>
> **[0:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=44)** So we need a mechanism to establish trust in the complete chain of custody.
>
> **[0:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=51)** This trust in the image is established through a process known as image signing.
>
> **[0:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=57)** Image signing enables its author to add its identity to the image.
>
> **[1:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=62)** This identity is in the form of a digital signature.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=66)** The user of the image then verifies the integrity of the image before starting to use it.
>
> **[1:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=72)** Now, of course, for your organization, you can implement an image signing framework from the scratch.
>
> **[1:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=79)** But many commercial container image registries, you already use, include some implementation of an image signing framework.
>
> **[1:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=88)** Few open source projects provide frameworks for image signing.
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=92)** The update framework or in short TUF started in 2019, is a general framework for software updates.
>
> **[1:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=100)** This framework includes a set of libraries and utilities that can be used to secure the software upgrade process.
>
> **[1:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=108)** Keep in mind that this framework is not specific to container images only.
>
> **[1:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=113)** Another CNCF open source project called notary, is an implementation of the update framework that is suitable for distributing container images.
>
> **[2:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=125)** With notary, the creator of the image, signs the image, using a secure private key.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=131)** The creator pushes the content to the notary server.
>
> **[2:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=135)** Users of the images, verify the image using the public key that they received from the creator via an out-of-band channel.
>
> **[2:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=145)** Now granted the current implementation of notary has few challenges.
>
> **[2:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=150)** And we will continue to see the enhancements in the next version of notary.
>
> **[2:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=154)** Your container images include your businesses intellectual property.
>
> **[2:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=159)** If you transport these images to or from an image registry over an insecure network, you run the risk of a variety of security attacks.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=170)** An attacker could intercept the clear text connection and sniff the confidential data.
>
> **[2:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=176)** There is also a risk of a man in the middle attack whereby an attacker can intercept and serve malicious images to the requester.
>
> **[3:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=184)** So what should you do?
>
> **[3:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registries?u=76281980&t=186)** Always encrypt the connection to the registry, use the latest version of the TLS protocol, but will that be enough.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), switch (1), private (1), public (1), continue (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **Env Vars:** tuf (1), cncf (1), tls (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Image registry access control
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=0)** - [Narrator] Even if the connection to the registry is encrypted, that will not prevent a malicious user with extraordinary privileges from accessing the images in the registry.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=11)** So allow only authenticated users and service accounts to access your registry, but that's not sufficient either.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=20)** Not all authenticated subjects are equal, not every authenticated subject needs to perform the same set of actions to those images.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=30)** Think about this, the publisher process executed as part of your CI/CD pipeline, that uploads the image to your image registry.
>
> **[0:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=39)** Does it really need both read and update permissions?
>
> **[0:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=43)** So long as it has the right permissions that should be sufficient.
>
> **[0:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=48)** So apply the principle of least privilege and give only permissions needed to do the job.
>
> **[0:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=54)** Similarly, when the Kubernetes orchestrator needs to pull images from an image registry, it doesn't need the right access, read-only access will just be sufficient.
>
> **[1:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=65)** Let's take a scenario.
>
> **[1:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=67)** There is a subject that has the privileges, not only to create a container image, but also to deploy the container as well.
>
> **[1:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=74)** In other words, there is no separation of duties when executing this task.
>
> **[1:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=79)** This is a very contentious topic in DevSecOps.
>
> **[1:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=83)** On one hand, this arrangement appears frictionless and is treated as a recipe for continuous deployment.
>
> **[1:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=90)** On the other hand, there is that risk of pushing some insecure code without "another pair of eyes looking at the code."
>
> **[1:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=101)** So how do you balance between the need for hands-free continuous delivery, and need for protection from fraud or error in this case.
>
> **[1:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=109)** Retain the separation of duties, but minimize the handoffs among multiple persons.
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=117)** When you do implement handoff, automate as much as possible, and do it only at the most critical point in the pipeline.
>
> **[2:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=126)** Now, depending upon the risk profile of your application and the compliance requirements, you may be even mandated to implement separation of duties.
>
> **[2:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=135)** Therefore you may be required to ensure that the person creating the image is not permitted to publish and run it, appoint someone else to publish the image, after the verification is passed.
>
> **[2:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=150)** Each image and its layers are identified by a digest that takes a special form, which is hashing algorithm colon, a hash value.
>
> **[2:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=160)** If the contents of the layers are altered, the hash value will also change.
>
> **[2:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=165)** This approach acts as a security aid in determining if the layer was altered, the digest that looks something like this is a machine friendly way to uniquely identify an image.
>
> **[2:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=179)** But for all practical purposes, developers use another construct known as a tag.
>
> **[3:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=186)** A tag is a human-friendly way to identify an image.
>
> **[3:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=190)** You may have seen the latest tag used to identify the most recent version of an image.
>
> **[3:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=196)** Although convenient, it comes with its own set of challenges.
>
> **[3:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=201)** Let's assume you have two containers A and B.
>
> **[3:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=205)** Both of them are running the same image tagged as latest.
>
> **[3:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=209)** While the containers were running, a new security vulnerability in the image was discovered.
>
> **[3:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=214)** The developer fixed the issue, created an image, and advanced the latest tag to the most recent version.
>
> **[3:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=222)** Ideally, you would redeploy those containers, so that both of your containers pick up the security fix.
>
> **[3:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=230)** But let's say you don't have an automated way of doing that and container A crashes.
>
> **[3:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=236)** Orchestrator post the image with latest tag.
>
> **[4:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=240)** Now B is running with a stale image and A with the latest image.
>
> **[4:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=246)** There is a mismatch.
>
> **[4:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=248)** This is one example where tags can be notoriously difficult to get right.
>
> **[4:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=252)** You want to make sure that you're pulling the right image from the image registry.
>
> **[4:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=258)** There are a couple of ways to address this.
>
> **[4:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=260)** First, you can use immutable tags.
>
> **[4:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=263)** Once immutable tags are attached to the image layer, they stay attached.
>
> **[4:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=268)** For example, if you tag an image would say label one, when the version of the image changes, you don't move label one.
>
> **[4:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=278)** Instead you apply a new tag called label two to the latest version.
>
> **[4:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=283)** That way your label one and label two are always pointing to a known and never changing version of the image.
>
> **[4:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=292)** In this approach, you set up the orchestrator to always pull via an immutable tag.
>
> **[4:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=298)** So you're sure that all running containers will be running an image that is known and fixed.
>
> **[5:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=305)** The second option is to keep using the latest tag, which is of course a mutable tag.
>
> **[5:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=311)** But then you should carefully implement a mechanism to ensure that each container is running the desired image.
>
> **[5:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=319)** And the last option is to not use tags at all.
>
> **[5:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=322)** Instead, pull the image by its own digest value.
>
> **[5:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/image-registry-access-control?u=76281980&t=327)** And image can have many and ever changing tags, but will always have only one unique digest that will not change.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), in other words (1), known as (1)
> **Code Keywords:** let (3), this, (1), case. (1), this. (1)
> **CLI Commands:** cd (1), make (1)
> **Prerequisites:** required to (1), set up (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 5. Factor #3: Securing Hosts and Container Working Environment

#### Container working environment
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=0)** - [Instructor] Let's assume that you implemented all of the security controls, such as secure design code, images, and registries, but your application has not come alive yet.
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=13)** It only comes to life and starts running when its image is instantiated as a container.
>
> **[0:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=19)** That container, which is nothing but a Linux process, needs an environment and resources to run.
>
> **[0:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=26)** If you recall, it needs a container runtime, it needs a host OS, and the capabilities offered by the OS.
>
> **[0:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=35)** This environment needs to be secured.
>
> **[0:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=38)** You can instantiate a container using a Docker command or in Kubernetes by submitting a part definition to an API server.
>
> **[0:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=48)** While doing so, you may override and effectively undo the security configurations you may have put in place at the time of creating images.
>
> **[0:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=58)** So let's walk through some security controls to protect the container environment and the host starting with the containers.
>
> **[1:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=67)** You know that in your Docker file, you should specify a user to not let the container run as root, but what about when running a container?
>
> **[1:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=77)** When starting a container from an image, you have a choice to specify a user ID corresponding to the root, and therefore we're running the container as root.
>
> **[1:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=89)** This action overrides any user instructions included previously in the image.
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=96)** Let's talk about another level of privileges that a container can be granted.
>
> **[1:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=100)** It's a common misconception that a container running as a root has the highest level of privileges, but that's not true.
>
> **[1:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=109)** Recall from prior chapters the list of capabilities that can be added to or drop from a Linux process.
>
> **[1:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=118)** Open Container Interface, or OCI specification, defines a set of capabilities that are granted to a container by default.
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=128)** Let's take a quick look at them.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=131)** If you look carefully in the spec, not all capabilities are turned on as shown by zero.
>
> **[2:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=141)** When you start a container with the privileged parameter, you're essentially making all of the system capabilities available to the container process.
>
> **[2:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=151)** This is extremely dangerous.
>
> **[2:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=153)** Set a container has full access to everything on the host operating system.
>
> **[2:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=159)** In other words, by creating a privileged container, you have pierced all boundaries between the container process and the OS kernel, leaving no room for isolation.
>
> **[2:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-working-environment?u=76281980&t=172)** Granted, there are use cases such as Docker in Docker or system containers that necessitates the use of privileged containers, but most application containers don't need to run in privileged mode.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), override (1), interface (1), default. (1)
> **CLI Commands:** docker (4)
> **Env Vars:** api (1), oci (1)
> **Documentation:** specification (1), spec (1)
> **Analogies:** such as (2)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Container network security
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=0)** - [Instructor] Any real business application won't be complete without containers talking to each other.
>
> **[0:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=7)** And this communication is enabled by container networking.
>
> **[0:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=12)** Now, Docker and Kubernetes take different approaches.
>
> **[0:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=16)** In Kubernetes, each pod is assigned an IP address and is expected to communicate with other pods seamlessly regardless of where the pod is running, on the same node or on separate nodes.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=30)** Kubernetes, however, does not provide the network functionality on its own.
>
> **[0:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=35)** Rather, it depends on the container network interface or CNI plugin, which must be set up by an admin separately.
>
> **[0:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=45)** So to secure inter-container communication, or to be precise, inter-pod communication in Kubernetes, you need to apply network policies.
>
> **[0:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=55)** Through these network policies, you can control what traffic can flow between pods.
>
> **[1:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=62)** We will address the network security controls for Kubernetes in the next chapter.
>
> **[1:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=67)** But that still leaves us to deal with the security of networks specific to standalone Docker containers.
>
> **[1:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=75)** Container platforms such as Docker, provide multiple ways to facilitate communication among containers.
>
> **[1:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=83)** These options are implemented via pluggable network drivers.
>
> **[1:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=88)** Let's take a quick look at these options before we review the security controls.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=94)** For a complete description of these drivers, check out the Docker platform documentation.
>
> **[1:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=101)** The bridge network driver, which is the default option, allows containers to communicate with each other on the same host.
>
> **[1:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=110)** In this diagram, you will be able to spot a Docker bridge virtual interface.
>
> **[1:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=115)** A special case of container networking is a closed container.
>
> **[2:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=120)** A closed container uses the none network driver.
>
> **[2:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=124)** It has only a loopback interface.
>
> **[2:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=127)** No incoming or outgoing connections can be made from a closed container.
>
> **[2:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=133)** Recall from the previous chapters that an isolated container runs in a separate namespace from that of its host.
>
> **[2:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=141)** But there is a special case where you may want the container to run in the same network space as the host.
>
> **[2:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=149)** Such a container uses the host network driver.
>
> **[2:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=155)** In this option, a container's access to network is identical to that of its host.
>
> **[2:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=162)** Underlay network drivers help containers that are on different hosts communicate with each other using the underlying physical interface.
>
> **[2:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=172)** Two examples of such drivers are: media access control virtual local area network, or in short macvlan, internet protocol VLAN, or in short ipvlan.
>
> **[3:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=187)** These drivers let you treat a container just like a physical host with its own MAC address.
>
> **[3:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=194)** This capability comes handy when you're migrating from existing VM-based deployments or have special security or compliance requirements.
>
> **[3:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=205)** Overlay network drivers also help containers on different hosts communicate with each other, but by taking a different approach.
>
> **[3:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=214)** The overlay network is a virtual network that sits on top of the host specific networks.
>
> **[3:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=222)** Overlay networks can be implemented using various virtualization technologies such as virtual extensible LAN or in short vxlan.
>
> **[3:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=232)** So to recap, the bridge option allows containers on the same host to talk to each other.
>
> **[3:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=239)** Host and none options are used for special container networking.
>
> **[4:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=244)** Underlay and overlay networks allow containers across hosts to talk to each other.
>
> **[4:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-network-security?u=76281980&t=250)** But by the way, on a side note, Kubernetes can utilize either underlay or overlay network plugins to make the networking possible.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (5), node (1), make (1)
> **Code Keywords:** interface (4), let (2)
> **Env Vars:** cni (1), vlan (1), mac (1), lan (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2), just like (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Container port and interface security
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=0)** - [Instructor] Let's get back to stand alone containers.
>
> **[0:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=3)** Even with the bridge network, containers are not directly routable from applications outside the cluster.
>
> **[0:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=10)** So how do containers communicate with the outside world?
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=13)** You will need to map a TCP or a UDP port on the host network interface to a target container port.
>
> **[0:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=22)** When executing Docker run command, you specify this mapping with -p or -- publish option.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=30)** For example, this command will forward traffic on port 8088 of the host to port 8080 of the container.
>
> **[0:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=41)** In contrast to Kubernetes, Docker does not come with network security policies.
>
> **[0:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=47)** So you will need to put best practices and security controls in place to ensure that the communication among containers takes place only between the authorized parties.
>
> **[0:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=59)** So let's review some of these controls.
>
> **[1:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=62)** The port mapping command that you just saw has a security issue.
>
> **[1:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=67)** With this command the container ports are exposed to any IP address which is represented by a wildcard IP address 0.0.0.0 on the host.
>
> **[1:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=80)** This is not secure.
>
> **[1:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=81)** You should accept connections only on a specific interface.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=86)** For example, if you run the same command as following, you'll be mapping container port 8080 to a specific interface represented by IP address, 10.2.5.6 and by port 49153.
>
> **[1:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=105)** So what happens if you don't specify the port mapping?
>
> **[1:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=108)** Well, Docker will automatically map the container port to any available host board in the range of 49153 to 65535.
>
> **[2:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=121)** But what if the user does not specify a port between one and 1024?
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=128)** Docker does not restrict that.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=131)** The problem is that the ports between one and 1024 are deemed privileged and may carry sensitive data.
>
> **[2:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=140)** So you should restrict users from mapping to host privileged port.
>
> **[2:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=146)** And this can be accomplished using a review of the Docker file in predeployment or by running an audit or scan of the containers after containers are deployed.
>
> **[2:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=157)** So let's switch from IP addresses and ports to the processes.
>
> **[2:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=162)** Docker Daemon process accepts commands from the clients.
>
> **[2:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=167)** The clients use a Docker socket to communicate with the Docker Daemon.
>
> **[2:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=172)** Clients can talk to the Daemon over file descriptors, TCP or unique sockets.
>
> **[2:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=179)** By default, this unique socket is located at a specific location in the host file system.
>
> **[3:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=186)** Access to the socket is protected from other processes on the host.
>
> **[3:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=192)** But what do you think will happen if you mount the socket as a volume inside a container?
>
> **[3:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=198)** Any process within that container will have full access to send any command to the Daemon.
>
> **[3:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=205)** This will result in the container gaining full control of the host, and this is not what you want.
>
> **[3:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=212)** So ensure that this socket is not mounted inside the containers.
>
> **[3:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=218)** Let's visit the default network bridge one more time.
>
> **[3:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=222)** When using the default bridge known as Docker0, by default, all traffic is permitted among containers on the same host.
>
> **[3:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=232)** This means every container has read access to the traffic on the container network.
>
> **[3:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=238)** This could lead to a breach of confidential information.
>
> **[4:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=242)** To avoid this, you have two controls.
>
> **[4:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=245)** First disable the default setting in the Docker Daemon configuration.
>
> **[4:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/container-port-and-interface-security?u=76281980&t=250)** And second, the preferred option is to create a new bridge network and only attach those containers that have a genuine need to talk to each other.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3), default, (2), switch (1), protected (1)
> **CLI Commands:** docker (9)
> **Ports:** port 8080 (2), port 8088 (1), port 49153 (1)
> **Env Vars:** tcp (2), udp (1)
> **Versions:** 0.0.0 (1), 10.2.5 (1)
> **Analogies:** for example (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Host OS protection
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=0)** - [Instructor] Unlike hardware virtualization, in OS virtualization, multiple containers share the same OS.
>
> **[0:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=8)** That leads to an expectation of mutual trust between the container and the host OS running that container.
>
> **[0:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=17)** So far we have been discussing container and application security.
>
> **[0:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=22)** But the host is equally accountable in the security of this ecosystem.
>
> **[0:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=26)** In fact, the impact of a host being breached is way more amplified than that of a container breach.
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=34)** So let's walk through security controls to protect the host.
>
> **[0:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=38)** Start with minimizing the host's attack surface.
>
> **[0:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=42)** A typical Linux operating system has way more services running than you need to support container applications.
>
> **[0:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=50)** Here you have two options to choose from.
>
> **[0:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=53)** First, run a minimal OS that has been custom built for running containers, for example, VMware Photon or Red Hat CoreOS.
>
> **[1:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=65)** These so called thin OSs have been stripped off of many components and services not typically required to run containers.
>
> **[1:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=75)** Your second option is to keep using traditional operating system as mandated by your organization, but apply special hardening techniques to reduce the attack surface.
>
> **[1:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=87)** You have fewer resources to rely on, the CIS Benchmarks and the NIST guide to server security.
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=96)** Look at the workloads you're planning to run on your hosts, are you mixing both containerized and non-containerized workloads on the same VM?
>
> **[1:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=105)** Move non-containerized workloads such as general services and applications to separate hosts.
>
> **[1:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=112)** Look, if you don't do that, it's likely your general workloads are not going to be managed by an automated orchestrator such as Kubernetes.
>
> **[2:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=123)** That means your admin and operations team will need to manually access the host to start, stop and manage your services.
>
> **[2:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=133)** And that will have two consequences.
>
> **[2:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=135)** First, there is a potential for error and fraud.
>
> **[2:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=139)** Obviously, you will need to grant permissions to users and operations to log in to host maintain the applications.
>
> **[2:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=147)** This opens up your host to new attack vectors, either internal or external.
>
> **[2:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=154)** And second, admins making changes to a live host will lead to a drift in the host configuration from its baseline.
>
> **[2:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=163)** And that will result in a disparity in the configuration of hosts running in your cluster.
>
> **[2:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=169)** Just like containers, you should make your hosts immutable as well.
>
> **[2:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=175)** And lastly, if your container does get breached, you will limit the spillover to only applications running on that host.
>
> **[3:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=185)** By agreeing to run only containerized workloads, you have already minimized the need for a human to be in direct contact with the hosts.
>
> **[3:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=195)** Let Kubernetes run and manage your containers.
>
> **[3:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=199)** With that said, there are still operational requirements that traditional hosts will have, for example, patching.
>
> **[3:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=207)** Just as you do with your containers, treat your hosts as cattle, not pets.
>
> **[3:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=214)** Instead of patching, take the host VM out of service, reimage and put it back into the pools of nodes under Kubernetes.
>
> **[3:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=222)** Now, while your host is down, trust your Kubernetes orchestration to move the pods from the down host to other available hosts.
>
> **[3:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=232)** Use golden and standardized VM images to ensure that the host OS is styled from a trusted and secure baseline image.
>
> **[4:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=243)** With that said, you can still have new vulnerabilities discovered anytime, so scan your host periodically.
>
> **[4:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=252)** The host file system is precious and must be protected from malicious applications and rogue containers.
>
> **[4:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=261)** There are many reasons why you should mount the host file system as read only to your containers.
>
> **[4:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=268)** First, should a container be compromised, it will not be able to make changes to the read only host file system.
>
> **[4:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=275)** This will limit the attack spillover to only within the container.
>
> **[4:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=281)** And secondly, by mounting the host file system as read only, you're also enforcing the container to not persist data on the host.
>
> **[4:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=291)** Containers will be forced to utilize an external data source for data persistence.
>
> **[4:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=297)** This approach is a step in the right direction.
>
> **[5:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=300)** You will ensure that your containers are decoupled from the hosts.
>
> **[5:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/host-os-protection?u=76281980&t=305)** Decoupled containers can be easily stopped and restarted on another host.

> [!info]- Semantic Content
>
> **Analogies:** for example (2), such as (2), just like (1)
> **Code Keywords:** let (2), from. (1), protected (1)
> **CLI Commands:** make (2)
> **Env Vars:** cis (1), nist (1)
> **Definitions:** is a  (2)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 6. Factor #4: Securing Applications in Kubernetes

#### Securing applications in Kubernetes
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=0)** - [Instructor] The security of images, containers and hosts is a critical part of your strategy to protect your containers ecosystem.
>
> **[0:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=10)** But when you introduce an orchestrator such as Kubernetes, you increase the attack surface exponentially.
>
> **[0:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=18)** You saw in the earlier chapters Kubernetes brings with it several moving parts that keep your workloads running without much human intervention.
>
> **[0:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=28)** When it comes to the security of Kubernetes, we can see it from two different dimensions.
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=34)** First, the security of your pods and applications running in a cluster.
>
> **[0:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=39)** And secondly, the security of the cluster and its native components.
>
> **[0:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=46)** Securing applications requires proper isolation among parts.
>
> **[0:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=51)** It also requires implementing access control, including authentication, authorization and mission control.
>
> **[1:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=60)** It includes protecting the networking among the pods.
>
> **[1:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=64)** And lastly, the secrets management.
>
> **[1:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=67)** To protect the Kubernetes orchestrator itself requires discovering and fixing misconfigurations.
>
> **[1:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=76)** It also requires securing the communication between the Kubernetes core components themselves.
>
> **[1:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=83)** Besides you also need to ensure that these components themselves are not granted extraordinary privileges and are communicating over secure channels.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=95)** But here's the thing.
>
> **[1:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=97)** The security controls we are going to discuss will vary in terms of their reach and scope.
>
> **[1:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=103)** So let's define the scope first.
>
> **[1:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=107)** Kubernetes offers a mix of components, collections and abstractions.
>
> **[1:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=112)** You're already familiar with some of them.
>
> **[1:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=115)** For example, nodes and pods.
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=117)** Kubernetes also offers clusters and namespaces.
>
> **[2:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=123)** A cluster is a collection of nodes or host machines that run your pods.
>
> **[2:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=129)** Basically every running Kubernetes instance has a cluster.
>
> **[2:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=134)** Kubernetes also allows creating multiple virtual clusters from a single physical cluster.
>
> **[2:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=142)** These virtual clusters are known as namespaces.
>
> **[2:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=146)** Organizations use namespaces to allot cluster resources among multiple teams.
>
> **[2:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=153)** So let us begin with security features and controls offered by Kubernetes to secure applications in a cluster.
>
> **[2:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-applications-in-kubernetes?u=76281980&t=161)** The scope of these controls can vary from pod, namespace to cluster level.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), known as (1)
> **Code Keywords:** let (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Pod Security Standard
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=0)** - [Instructor] Kubernetes Pod Security Standards are a collection of well-defined policies and recommendations to ensure the security of containerized workloads within Kubernetes clusters.
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=13)** But the question here is why Pod Security Standards in the first place when we have so many other security features offered by Kubernetes?
>
> **[0:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=22)** Look, organizations have requirements to meet and deliver against the industry standards, regulatory compliance requirements, or maintain internal security hygiene, and they want a clean and structured way to meet such requirements.
>
> **[0:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=40)** Previously, this was accomplished through another Kubernetes feature known as PodSecurityPolicy.
>
> **[0:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=47)** However, this feature was confusing and sometimes granted access permissions more than what was intended.
>
> **[0:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=55)** Therefore, this feature was deprecated.
>
> **[0:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=59)** Enter Pod Security Standard, which builds on the standardized levels of PodSecurityPolicy.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=66)** To ensure Pod Security Standard, Kubernetes offers Pod Security Admission Controller, which allows administrators and users to check compliance against the Pod Security Standards.
>
> **[1:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=80)** Now let's jump into what is inside the standard.
>
> **[1:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=84)** The standard defines three profiles, privileged, baseline, and restricted.
>
> **[1:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=91)** A privileged policy profile offers the most unrestricted permissions necessary for managing workloads and performing complex system or infrastructure level tasks.
>
> **[1:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=104)** When using this profile, it is important to follow the privileged mode policies of your organization.
>
> **[1:52](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=112)** For example, requiring multifactor authentication.
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=117)** The baseline policy profile is designed to be generic enough to cover a wide variety of non-critical workloads created by application development and operations teams.
>
> **[2:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=130)** This profile enables such users to secure typical application workloads against common security threats.
>
> **[2:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=138)** One example being privilege escalation.
>
> **[2:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=142)** Now, switching to restricted profile.
>
> **[2:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=144)** As the name suggests, a restricted security profile is the most restrictive and secure profile.
>
> **[2:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=152)** This profile ensures that the containers running within a pod are read-only and limited to running only necessary operations.
>
> **[2:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=162)** Applying this policy profile provides protection against most vulnerable workloads and malicious activities.
>
> **[2:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=171)** In addition to the profiles, the standard also defines three modes of applying these profiles, enforce, audit, and warn.
>
> **[3:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=182)** Both the policies and the mode are defined when configuring the Pod Security Admission Controller, which we discussed a little bit earlier.
>
> **[3:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=191)** Enforce mode will reject pods with policy violations.
>
> **[3:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=197)** Audit mode would allow the pods with policy violations, but will include an event in the audit log event record.
>
> **[3:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/pod-security-standard?u=76281980&t=206)** Warn mode will also allow pods with policy violations to run, but will directly notify the users.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Cross-References:** we discussed (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Access management
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980&t=0)** - [Instructor] Before a client such as kubectl or another Kubernetes component can perform any operation in Kubernetes, it must meet three criteria.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980&t=11)** The client must prove it is who it claims to be, the client must be permitted to perform the action it is requesting, and third, the requested operation, especially if it modifies a Kubernetes object, must be compliant with the security policy.
>
> **[0:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980&t=32)** The API server takes the help of three access control plugins to verify these criteria.
>
> **[0:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980&t=40)** Authentication plugins, authorization plugins, and admission control plugins.
>
> **[0:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/access-management?u=76281980&t=49)** Now let's start to look at the authentication plugins.

> [!info]- Semantic Content
>
> **CLI Commands:** kubectl (1)
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Authenticating users
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=0)** - [Instructor] Kubernetes supports two types of subjects, regular human users and machine accounts, also known as service accounts.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=11)** Service accounts are managed within Kubernetes while the user accounts are expected to be managed outside of Kubernetes.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=20)** In fact, Kubernetes doesn't even have a native representation of a human user.
>
> **[0:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=26)** In other words, you can create accounts for people in Kubernetes.
>
> **[0:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=31)** So how does Kubernetes authenticate then?
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=34)** It supports several authentication options.
>
> **[0:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=38)** Some of these options are encouraged since they meet good security practices while others not so.
>
> **[0:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=45)** Here's the list of options as of the writing of this course.
>
> **[0:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=49)** Static password or token file, X.509 client certificates, Open ID Connect tokens, using service accounts, and many others.
>
> **[1:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=63)** Well, the name gives it away.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=66)** In this method, the passwords are stored in a CSV file with at least three pieces of information, password, username, and user ID.
>
> **[1:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=77)** A client using HTTP passes the authorization header with a 64 base encoded value of the user column, password.
>
> **[1:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=88)** The API server then verifies it against the stored value.
>
> **[1:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=93)** If a match is found, the user is authenticated, but passwords don't expire and can be changed without restarting the API server.
>
> **[1:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=104)** This authentication method should not be used in any enterprise environment.
>
> **[1:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=110)** If the client certificate option is enabled in the API server, a client can present an X.509 certificate to assert its identity.
>
> **[2:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=121)** API server using a pre-configured list of certification authorities then verifies the identity of the client.
>
> **[2:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=129)** On the surface, this option may appear perfectly valid and even desirable, but if you're going to be using this method, be aware of its limitations.
>
> **[2:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=140)** As of the writing of this course, Kubernetes does not support revoking the certificates.
>
> **[2:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=146)** So if you want to change your certificate, your only options are to wait for the certificate to expire or just re-key.
>
> **[2:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=154)** Secondly, the certificate-based authentication and the groups within role-based access control don't work together very well, why?
>
> **[2:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=164)** Because every time the privileges of the subject change, you will need to reissue a certificate.
>
> **[2:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=173)** Well, there is a case when you can still use this option.
>
> **[2:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=177)** In case of an emergency, and your identity provider is not reachable, but we haven't yet talked about the identity provider in the context of Kubernetes yet.
>
> **[3:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=188)** And that brings us to the next authentication method, the OpenID Connect.
>
> **[3:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=194)** OpenID Connect protocol is based on the OAuth 2.0 specification.
>
> **[3:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=200)** OpenID Connect does not really authenticate, rather it provides a mechanism for generating and refreshing the client's assertion tokens.
>
> **[3:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=210)** OAuth, which is the underlying protocol, on the other hand, provides a mechanism for transferring these tokens.
>
> **[3:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=218)** Let's take a simplified view of how this works in Kubernetes.
>
> **[3:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=222)** A user logs in with an identity provider.
>
> **[3:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=226)** An identity provider could be Azure Active Directory on your cloud, you can also run your own using Keyclaok or CoreOS Dex.
>
> **[3:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=237)** Identity provider returns the user and identity token.
>
> **[4:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=242)** Using your kubectl command, you supply that token along with an API call to the API server.
>
> **[4:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=249)** API server, then validates the token, which is nothing but a JWT token.
>
> **[4:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=255)** And by the way, did you notice that there is no arrow going from the API server back to the identity provider?
>
> **[4:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=263)** No, and that's because all of the information needed to validate you as a user is in the ID token itself.
>
> **[4:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=271)** This approach makes this authentication method, both stateless and scalable.
>
> **[4:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=277)** Now, there are other authentication methods offered by Kubernetes for other situations, such as when bootstrapping the cluster or using an authentication proxy.
>
> **[4:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-users?u=76281980&t=288)** You can read more details about these methods in the Kubernetes official documentation.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), csv (1), http (1), jwt (1)
> **Code Keywords:** static (1), assert (1), let (1)
> **Definitions:** known as (1), in other words (1), is a  (1)
> **CLI Commands:** kubectl (1)
> **Versions:** 2.0 (1)
> **Documentation:** specification (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)

#### Authenticating service accounts
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=0)** - [Lecturer] So far, we talked about authenticating regular users but what about authenticating applications or more specifically pods?
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=11)** Kubernetes offers a construct known as ServiceAccont.
>
> **[0:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=15)** Unlike user accounts kubernetes does indeed store ServiceAccount details as a ServiceAccount resource.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=25)** Each pod is assigned a ServiceAccount by default.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=30)** But you can and should change the default account, why?
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=34)** By associating a ServiceAccount to a pod gives you the developer or the admin, the flexibility to control the resources a pod will have access to.
>
> **[0:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=45)** Let's see how.
>
> **[0:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=47)** A pod sends a request to the API Server with an authentication token.
>
> **[0:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=53)** That token uniquely identifies that pod.
>
> **[0:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=57)** Upon receiving the request the API Server in turn does two things.
>
> **[1:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=62)** With the help of authentication plugin it authenticates ServiceAccount and next, using the authorization plugin checks whether the requested operation is permitted for that ServiceAccount.
>
> **[1:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=76)** We'll hold off the discussion on the authorization part for a few more minutes.
>
> **[1:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=81)** But we still haven't answered one question.
>
> **[1:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=84)** How does the pod actually receive that token?
>
> **[1:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=88)** Now, if you recall in case of a user account, the ID token was granted by the identity provider.
>
> **[1:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=95)** In case of a ServiceAccount, a default secret token is mounted on every pods file system at a predetermined location.
>
> **[1:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=104)** But as you will see there're other ways to inject secret tokens into the parts.
>
> **[1:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=110)** Here's an example of using a custom ServiceAccount inside a pod.
>
> **[1:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=116)** A service account is being created using kubectl command.
>
> **[2:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=121)** And then inserted into a pods yaml specification.
>
> **[2:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authenticating-service-accounts?u=76281980&t=126)** Okay so we covered the authentication let's switch to authorization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default. (1), switch (1)
> **Env Vars:** api (2)
> **Cross-References:** we talked about (1), we covered (1)
> **CLI Commands:** kubectl (1)
> **Documentation:** specification (1)
> **UI Navigation:** switch to (1)
> **Definitions:** known as (1)
> **Speakers:** - [lecturer] (1)

#### Authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=0)** - [Instructor] Once a user or a service account has been authenticated, API server then validates if the requested operation is allowed.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=11)** By default, all permissions are denied.
>
> **[0:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=14)** Keep in mind that the authorization plugin checks for permissions only at the verb level.
>
> **[0:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=21)** In more granular validation beyond the verbs is done by the admission controller, which we will see later.
>
> **[0:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=29)** Kubernetes authorization supports multiple strategies, but the role-based access control or RBAC is the most common and recommended strategy.
>
> **[0:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=41)** Generally speaking, role-based access control strategy grants or denies access to specific operations to subjects based on their assigned roles.
>
> **[0:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=53)** For example, using kubectl command, a subject has the option of submitting any action to the API server, such as get, update and delete, but the API server by leveraging RBAC will finally determine whether the requested action is permitted or not.
>
> **[1:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=73)** Let's say you have subjects, A, B and C.
>
> **[1:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=77)** A can only perform a get operation.
>
> **[1:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=80)** B can perform both get and create, while C can perform, get, create, and delete.
>
> **[1:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=89)** How does the RBAC plugin do it?
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=92)** Well, it does through the interplay of several parts, which are, a Kubernetes object or resource, such as a Pod or a service upon which an action needs to be performed.
>
> **[1:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=107)** The action represents an operation verb, for example, get, create, delete, and so on.
>
> **[1:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=114)** Roles include a subset of actions that are permitted on a resource.
>
> **[2:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=120)** The subject represents a user, a group of users or a service account who wants to take an action.
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=128)** And finally, the bindings.
>
> **[2:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=130)** Bindings are the links between a subject and a role.
>
> **[2:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=134)** A role can be of two types from the perspective of its scope.
>
> **[2:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=138)** A role applies to namespace resources, while the cluster role applies to cluster resources.
>
> **[2:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=148)** To bind a subject to a namespace resource, you use RoleBinding, while to bind a cluster-level resource, you use ClusterBinding.
>
> **[2:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=159)** With that said there is a special use case, where you can also define cluster-level role once and then apply them to specific namespaces.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=170)** In that case, you will bind a subject to cluster role using RoleBinding.
>
> **[2:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=177)** In addition to RBAC, Kubernetes also defines two other authorizations strategies.
>
> **[3:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=184)** Node authorization is a special purpose authorization mode used to authorize API requests made by the kubelets.
>
> **[3:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=193)** Attribute-based access control, or ABAC, is an authorization approach where instead of using roles of the subjects, attributes of the subjects and the resources are used to determine who's authorized or not.
>
> **[3:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=208)** Given the maturity of RBAC and its usage in the industry, the ABAC might be deprecated in the near future.
>
> **[3:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/authorization?u=76281980&t=217)** Okay, so we covered authentication and authorization, but when the request is trying to modify a Kubernetes resource, it must go to one more level of check known as the admission control.

> [!info]- Semantic Content
>
> **Env Vars:** rbac (5), api (4), abac (2)
> **Code Keywords:** delete (3), case, (2), default, (1), let (1), finally, (1)
> **Definitions:** is a  (2), is an  (1), known as (1)
> **Analogies:** for example (2), such as (2)
> **CLI Commands:** kubectl (1), node (1)
> **Cross-References:** we covered (1)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)

#### Admission control
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=0)** - [Tutor] The admission controller plugin intercepts the request and validates it against policies before the changes to a resource are persisted.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=11)** As of the writing of this course, about 30 plus different admission controllers are included in Kubernetes.
>
> **[0:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=19)** Plugins are enabled while starting kube-apiserver.
>
> **[0:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=24)** The following 17 plugins are enabled by default.
>
> **[0:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=29)** While we won't go through all of these plugins, it is easy to understand their function by looking at some simpler examples.
>
> **[0:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=37)** Keep in mind that some of the examples we will look at are somewhat less practical and deprecated, but they help us understand the concept before getting ready for more complex ones.
>
> **[0:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=50)** By enabling AlwaysAdmit plugin, you are setting all requests to be allowed.
>
> **[0:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=57)** This is equivalent to having no admission controller at all.
>
> **[1:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=61)** Keep in mind that this plugin has been deprecated.
>
> **[1:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=65)** At the other end of the spectrum is AlwaysDeny a plugin.
>
> **[1:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=69)** With this plugin, you set all requests to be denied by default.
>
> **[1:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=75)** All of the other controllers will do something in between these two extreme cases.
>
> **[1:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=81)** Let's say a Namespace is in the process of being terminated.
>
> **[1:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=85)** During that timeframe, if you submit a request to create a pod in it, the Namespace lifecycle admission controller will kick in and will stop that pod from being created in the terminating Namespace.
>
> **[1:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=100)** If the incoming request violates the resource constraints specified in the ResourceQuota object, the request will be denied.
>
> **[1:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=109)** If an incoming request violates the resource constraints specified in the ResourceQuota object, the request will be denied.
>
> **[1:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=118)** Pod security policy used to be a special admission controller plugin.
>
> **[2:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=123)** However, as discussed earlier, this plugin has been deprecated.
>
> **[2:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=128)** The recommendation now is to use the new pod security standard.
>
> **[2:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=133)** In addition to built-in admission controllers, Kubernetes also offers dynamic admission controllers.
>
> **[2:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=141)** You can build your own admission controller extensions and run them via Webhooks.
>
> **[2:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=147)** Kubernetes offers two types of Webhooks, mutating and validating.
>
> **[2:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=152)** Mutating Webhooks are invoked first.
>
> **[2:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=155)** They allow you to modify the object included in the request that is being sent to the API server.
>
> **[2:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=163)** Validating Webhooks are invoked next.
>
> **[2:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=166)** They validate the request against custom policies.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=170)** But the question is, why would you want to mutate, or in other words, change the incoming object?
>
> **[2:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=176)** Well, in some cases you want to enforce default and more secure values, you can set those secure defaults by using mutating Webhooks.
>
> **[3:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/admission-control-21044228?u=76281980&t=187)** For example, by using your custom built mutating admission controller, you can set that pods user ID to a non route user in the incoming pod spec to the API server.

> [!info]- Semantic Content
>
> **Code Keywords:** default. (2), function (1), let (1)
> **Env Vars:** api (2)
> **Warnings:** keep in mind (2)
> **Documentation:** spec (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)

#### Security context
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=1)** - [Teacher] Correctly implemented access control strategy can issue you that only the desired subjects will be able to perform the permitted actions.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=11)** But your applications and pods work in conjunction with the OS and kernel, and you still need another layer of controls to ensure that these pods don't do anything dumb.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=25)** If you recall, from the earlier chapters about securing standalone containers, we emphasized a few best practices such as not to run a container as root, securing network access, and so on.
>
> **[0:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=38)** The fact that you now have Kubernetes orchestrating these pods, you still need a mechanism to implement the very same security controls.
>
> **[0:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=48)** Kubernetes offers these mechanisms via security context and security policies.
>
> **[0:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=56)** Think of security context as the mechanism provided to developers.
>
> **[1:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=60)** Developers when writing pod specifications can attach the security context for a pod in the spec itself.
>
> **[1:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=69)** On the other hand, think of security policy as a cluster level mechanism for admins to ensure that regardless of what specifications developer write, any non-security compliant requests will be denied.
>
> **[1:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=83)** And guess what?
>
> **[1:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=84)** A security policy is implemented by a none other than the admission controller we just talked about.
>
> **[1:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=91)** With the concepts out of the way, it's time to check out both security context and security policy in a little more detail.
>
> **[1:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=100)** To define the security context, you write it in your pod spec.
>
> **[1:45](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=105)** Let's review the security controls you can add using security context.
>
> **[1:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=110)** Some of these should look familiar to you from our prior videos on container security.
>
> **[1:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=117)** To prevent a container from running a root.
>
> **[2:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=120)** In the Security Context section, set RunAsNonRoot to true.
>
> **[2:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=127)** To run the container as a specific user, set RunAsUser value to the appropriate user ID.
>
> **[2:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=136)** You can control whether a container runs as a privileged container or not by changing the privileged attribute in the Security Context.
>
> **[2:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=147)** You can add or drop a specific capability from a system capability with add and drop attributes.
>
> **[2:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=157)** In the container security chapter, we talked about pluggable security modules and mandatory access control.
>
> **[2:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=164)** Using security context, you can assign SELinix labels to a container.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-context?u=76281980&t=170)** And besides, you can also enable Satcom and AppArmor, but both of these are not in general availability stage yet.

> [!info]- Semantic Content
>
> **Documentation:** spec (2)
> **Code Keywords:** let (1)
> **Cross-References:** we talked about (1)
> **Analogies:** such as (1)
> **Speakers:** - [teacher] (1)

#### Security Policy
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980&t=0)** - [Instructor] While security context gives the power and privileges in the hands of developers, security policies enable admins to prevent a container from running if it violates a security policy or best practice.
>
> **[0:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980&t=15)** But in July 2021, PodSecurityPolicy feature was deprecated.
>
> **[0:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980&t=21)** Now, instead of using PodSecurityPolicy, you can enforce the same effect with either a PodSecurity admission controller or a third-party admission plugin.
>
> **[0:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980&t=33)** For users of this legacy approach of PodSecurityPolicy, Kubernetes provides a migration path, details of which are available on Kubernetes website, and the link is provided here on the screen.
>
> **[0:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/security-policy-21045201?u=76281980&t=47)** The PodSecurity admission control mechanism follows the requirements defined in PodSecurity standard that we reviewed earlier.

> [!info]- Semantic Content
>
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Kubernetes network security
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=0)** - [Instructor] From access control, security context and policies.
>
> **[0:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=4)** Now let's switch gears to Kubernetes network security.
>
> **[0:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=9)** Kubernetes doesn't follow the Docker container networking model.
>
> **[0:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=13)** When it comes to port allocation, service discovery and load balancing, the Kubernetes network model is designed to be backward compatible with VMs or physical hosts.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=25)** Every pod gets assigned an IP address just as a VM does and just like a VM can talk to another VM, so can a pod.
>
> **[0:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=35)** There is no need for network address translation or NAT.
>
> **[0:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=39)** There's no need to map ports on a host to the ports on a pod.
>
> **[0:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=44)** In fact, the Kubernetes networking model requires this simplicity and this network model is made possible by the virtue of external network plugins.
>
> **[0:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=56)** Well, this simplicity of interpod communication actually creates some security challenges.
>
> **[1:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=63)** By default, pods can send and receive traffic to and from any source without any restriction.
>
> **[1:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=71)** But let's say you don't see a business or a technical need for say a database pod to be talking directly to a web server pod.
>
> **[1:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=80)** In that situation you want to ensure that the communication link between the two pods doesn't exist.
>
> **[1:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=87)** A good security policy is to segment your network and isolate traffic based on traffic sensitivity.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=94)** Kubernetes offers network policies that allow you to control which pods can communicate with each other.
>
> **[1:41](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=101)** Now, keep in mind that just defining and posting a network policy to API server will not control the traffic.
>
> **[1:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=110)** The network plugin that has been set up for Kubernetes by the admin must support network policies.
>
> **[1:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=118)** Here is an example network policy.
>
> **[2:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=120)** You want to start by stating which pods this policy is applicable to.
>
> **[2:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=125)** And the mechanism for selecting such pods is through labels.
>
> **[2:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=129)** If you don't specify a label, the policy will apply to all pods.
>
> **[2:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=135)** Policy type attribute allows you to select whether the policy will apply to ingress, egress or both types of traffic.
>
> **[2:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=143)** Ingress refers to incoming traffic to a pod while egress refers to the outgoing traffic from a pod.
>
> **[2:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=151)** So in this example, you're applying the network policy to pods that match the label inventory.
>
> **[2:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=158)** And next you're stating that the incoming traffic should be permitted only from pods with label order.
>
> **[2:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=168)** Switching to egress example, here you're limiting outbound traffic from pods labeled inventory to only pods that are labeled warehouse.
>
> **[2:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=178)** We only scratch the surface when it pertains to pod security, as well as network policies.
>
> **[3:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=185)** Your enterprise implementation is going to be more complex than the examples we just discussed.
>
> **[3:12](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/kubernetes-network-security?u=76281980&t=192)** So I encourage you to review the official Kubernetes documentation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), switch (1), default, (1)
> **Definitions:** refers to (2), is an  (1)
> **Env Vars:** nat (1), api (1)
> **CLI Commands:** docker (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Secrets management
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=0)** - [Instructor] There are several use cases for Secrets in the Kubernetes environment.
>
> **[0:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=5)** The most obvious one is when you want your Pods to use Secrets such as access tokens, passwords, or API keys.
>
> **[0:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=14)** The other use cases are really two components of your Kubernetes cluster.
>
> **[0:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=18)** These components also need Secrets so that they can communicate with the API server or other components.
>
> **[0:27](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=27)** Kubernetes offers a first class object known as Secret, which holds the key-value pair information.
>
> **[0:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=36)** The Secret is stored in etcd store as base64 encoded value.
>
> **[0:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=43)** Keep in mind that base64 is an encoding mechanism and not an encryption technique.
>
> **[0:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=49)** This encoding is used to convert binary data into plain text format.
>
> **[0:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=56)** Starting with Kubernetes Version 1.7 onwards, Secrets stored in etcd are also encrypted.
>
> **[1:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=65)** The Secrets can be passed onto your application via a mounted volume or via an environment variable.
>
> **[1:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=74)** One common example of using Secrets is that every Pod gets a Secret volume automatically mounted.
>
> **[1:22](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=82)** The Secret volume stores all the information the Pod needs to securely communicate with the API server, but for your application and use case, you're going to be creating and using custom Secrets.
>
> **[1:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=97)** So let's take a look at how your Pod can consume your custom made Secret.
>
> **[1:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=102)** You modify the Pod specification to mount the Secret volume, which in this case is mySecrets.
>
> **[1:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=110)** And next, you specify your Secret, which in this case is myKeys, but how does the Secret volume look from the point of view of a Pod?
>
> **[2:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=121)** If you will call a Kubernetes Secret object is actually a key-value pair.
>
> **[2:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=126)** The key portion of the key-value pair appears as the file name.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=131)** The value portion of the pair appears as the content of the file.
>
> **[2:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=136)** We will get to the subject of creating Secrets in a second, but for the time being, in this example, let's say when you created the Secret, your key was myVaultKey.
>
> **[2:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=149)** This will show up as myVaultKey under your mounted volume.
>
> **[2:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=155)** On a side note, all those Secrets are stored in etcd store in encrypted form.
>
> **[2:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=160)** When consuming the Secret via volume or an environment variable, the Secret is stored in its original form and not in the base64 encoded form.
>
> **[2:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=173)** The other method of making Secrets accessible within the container is via environment variables.
>
> **[2:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=179)** So you update your Pod definition to include two things.
>
> **[3:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=184)** First, the name of the environment variable that you're going to use in your application.
>
> **[3:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=190)** And second, specify where is the value of that variable going to come from.
>
> **[3:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=195)** In this example, you're stating that the environment variable name is myVaultKey, which will take its value from the Secret names, myKeys.
>
> **[3:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=206)** Furthermore, the value will be assigned from the key named myVaultKey.
>
> **[3:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=213)** Kubernetes supports both volume mount and environmental variable for injecting Secrets into a Pod, but you should prefer using the volume mount.
>
> **[3:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=224)** There are several risks associated with keeping the Secrets in environment variables.
>
> **[3:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=230)** Developers may save the environment variable values in a log file exposing the Secret information to people who shouldn't have access to your data.
>
> **[4:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=241)** A child process inherits the environment variables of its parent process.
>
> **[4:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=246)** You will not have control over what a child process does with that information.
>
> **[4:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=253)** So far, we didn't talk about the process of creating a Secret.
>
> **[4:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=257)** Secrets can be created using the command line or definition files.
>
> **[4:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=263)** For example, with kubectl create secret command, or you can write the Secret in a Yaml based Secret specification file, and then apply it using kubectl apply.
>
> **[4:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=276)** You can also inject Secrets from a third party secrets management solution.
>
> **[4:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=282)** Kubernetes uses etcd to store Secrets in an encrypted manner, but many organizations use a third party secret management solution, such as Conjur or HashiCorp Vault.
>
> **[4:56](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=296)** These third party solutions handle storage, encryption and rotation.
>
> **[5:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=302)** They also offer visibility and control beyond Kubernetes.
>
> **[5:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/secrets-management?u=76281980&t=306)** Moreover, they are useful when you want to access Secrets outside of the Kubernetes and you need a central place to store them.

> [!info]- Semantic Content
>
> **Code Identifiers:** myvaultkey (4), mykeys (2), mysecrets (1)
> **Code Keywords:** let (2), case, (1), from. (1)
> **Env Vars:** api (3)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** kubectl (2)
> **Documentation:** specification (2)
> **Definitions:** known as (1), is an  (1)
> **Versions:** version 1 (1)


### 7. Factor #5: Securing Kubernetes Cluster

#### Cluster security goals
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=0)** - [Instructor] We now know the security features and capabilities offered by Kubernetes.
>
> **[0:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=5)** These feature allow developers and admins to establish security controls that protect your running pods.
>
> **[0:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=14)** These features also play a significant role in protecting the rest of the Kubernetes infrastructure.
>
> **[0:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=21)** These core components are not typically accessed by your application.
>
> **[0:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=26)** They work behind the scenes to keep the cluster running.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=30)** But how do you protect them?
>
> **[0:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=32)** We have identified a few key goals, protect the API server traffic and the Kubernetes cluster components, prevent resource overuse, secure the Kubernetes network, and finally, the secrets.
>
> **[0:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/cluster-security-goals?u=76281980&t=50)** We will look at each one of them.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### Securing API server traffic
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=0)** - [Sam] Authentication and role-based access control enable users and service accounts to communicate with the API Server.
>
> **[0:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=9)** But remember, Kubernetes native components also frequently communicate with the API Server.
>
> **[0:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=16)** Kubelets, kube-scheduler, kube-proxy, and kube-controller-manager must connect to API Server via a secure port.
>
> **[0:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=25)** These clients must also authenticate themselves.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=30)** Make sure that in the API Server specification file, the insecure-port parameter is set to zero.
>
> **[0:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=38)** If you set up an API Server on the default insecure-port 8080, you are allowing attackers unencrypted access to the API Server.
>
> **[0:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=49)** The secure-port parameter is used to serve HTTPS traffic.
>
> **[0:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=55)** Ensure that its value, if defined, is between one and 65535.
>
> **[1:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=61)** In addition, ensure that the insecure-bind-address doesn't exist.
>
> **[1:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=67)** API Server should be configured to serve and accept only HTTPS traffic.
>
> **[1:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=74)** That will require you to set up TLS, so check out the Kubernetes documentation on how to do that.
>
> **[1:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=81)** Also, make sure in the API Server specification file, the client-ca-file parameter exists, and it points to the correct path of the file containing certificate authorities.
>
> **[1:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-api-server-traffic?u=76281980&t=94)** Similarly, ensure that the parameters related to TLS certificate file and private keys are set appropriately.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), https (2), tls (2)
> **CLI Commands:** make (2)
> **Code Keywords:** require (1), private (1)
> **Documentation:** specification (2)
> **Prerequisites:** set up (2)
> **Ports:** port 8080 (1)
> **Speakers:** - [sam] (1)

#### Securing cluster components
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=0)** - [Instructor] You need to protect etcd store.
>
> **[0:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=3)** Limit access to it, of course, with the exception of the API server, and only serve clients over TLS.
>
> **[0:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=11)** Secrets are stored in the etcd store, so you must ensure that the secret data at rest is encrypted.
>
> **[0:20](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=20)** Starting with Kubernetes version 1.13 and etcd version 3.0 onwards, Kubernetes supports encryption of secrets.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=30)** By default, kubelet allows anonymous requests.
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=34)** Ensure that you only allow authenticated and authorized requests, and again, only serve over a secure connection.
>
> **[0:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=43)** Kubernetes offers various mechanisms to manage the usage of resources at the cluster and namespace level.
>
> **[0:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=50)** You want to put these restrictions in the place to protect from a noisy neighbor that wants to hog all compute and memory resources.
>
> **[1:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=60)** This can help protect from a denial-of-service attack due to malicious containers.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=66)** You can also use ResourceQuota to prevent pods from running that do not meet the pre-specified CPU and memory limits.
>
> **[1:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=76)** Likewise, setting up Limit Range allows you to prevent users from requesting high values of your resources.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=86)** To protect your network, implement namespaces in a large, enterprise, multi-application environment.
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=92)** We already saw how network policies can help control traffic in a cluster.
>
> **[1:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=98)** Use a network plugin provider that supports network policies.
>
> **[1:43](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=103)** Utilize quota and limit ranges to control access to your load balancers.
>
> **[1:48](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=108)** Load balancers expose your application to the outside world, and you want to carefully control users who can have access.
>
> **[1:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=118)** Encrypt secrets at rest and in transit.
>
> **[2:02](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=122)** Use the latest version of Kubernetes supporting encryption of secrets in SCD.
>
> **[2:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=127)** Use TLS to ensure that the confidential data in transit is not accessible to others.
>
> **[2:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=133)** Rotate your secrets frequently.
>
> **[2:16](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=136)** Remove the service account token after it is no longer needed.
>
> **[2:21](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=141)** And finally, reduce the lifespan of a secret.
>
> **[2:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/securing-cluster-components-21045202?u=76281980&t=144)** Shorter the lifespan, the less likely it is going to be usable by an attacker.

> [!info]- Semantic Content
>
> **Env Vars:** tls (2), api (1), cpu (1), scd (1)
> **Code Keywords:** default, (1), finally, (1)
> **Versions:** version 1 (1), version 3 (1)
> **Speakers:** - [instructor] (1)


### 8. Additional Security Considerations

#### Infrastructure security
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=0)** - [Instructor] So far, we assumed that the Kubernetes cluster was already installed on hardware infrastructure.
>
> **[0:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=8)** The underlying infrastructure, whether it is your on premise data center or the public cloud is the backbone of your Kubernetes cluster.
>
> **[0:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=17)** The infrastructure provides the foundational compute, memory, storage and networking capabilities to run Kubernetes.
>
> **[0:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=26)** The security of this infrastructure is critical.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=30)** There is an implied trust between Kubernetes and the infrastructure.
>
> **[0:34](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=34)** Even if you secure your applications and the cluster, the underlying infrastructure may still be vulnerable.
>
> **[0:42](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=42)** The vulnerabilities in the infrastructure can be a reason your application or cluster might be compromised.
>
> **[0:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=50)** But who is responsible for the security of the infrastructure?
>
> **[0:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=54)** Well, that depends on the Kubernetes deployment model.
>
> **[0:59](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=59)** When it comes to deploying Kubernetes, there are two ends of the spectrum.
>
> **[1:04](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=64)** On one hand you have the fully managed Kubernetes solutions.
>
> **[1:09](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=69)** These solutions make it easy to deploy and manage Kubernetes clusters.
>
> **[1:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=75)** Some examples are, Azure Kubernetes Service, Amazon's Elastic Container Service and Google Kubernetes Engine.
>
> **[1:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=84)** On the other hand, you have a deployment of Kubernetes in your own data center.
>
> **[1:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=90)** In this model, you are responsible for managing and operating the Kubernetes clusters.
>
> **[1:36](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=96)** You're also responsible for running the infrastructure as well.
>
> **[1:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=100)** Other deployments are in between these two options.
>
> **[1:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=104)** The deployment model also governs security responsibilities.
>
> **[1:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=109)** In an on premise model, you are responsible for implementing the security controls such as network protection, firewalls, access management, all by yourself.
>
> **[2:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=120)** In the managed service model, you still need to implement these security controls.
>
> **[2:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=125)** But the difference is that you leverage the capabilities offered by the cloud provider.
>
> **[2:11](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=131)** Some examples of these capabilities are access and resource management and cloud security policies and so on.
>
> **[2:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=139)** Moreover, the cloud provider is already responsible for protecting the underlying hardware as per the shared security responsibility model.
>
> **[2:29](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=149)** Regardless of the deployment model, there are some security considerations you must keep in sight.
>
> **[2:35](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=155)** And then work with your infrastructure provider or team to ensure that security implementation addresses these.
>
> **[2:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=164)** Make sure there is network isolation among multiple clusters.
>
> **[2:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=170)** Access to the Kubernetes control plane should not be permitted directly via the public facing IP addresses.
>
> **[2:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=178)** Any access must be limited.
>
> **[3:01](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=181)** Direct public access to nodes should be prohibited.
>
> **[3:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=185)** Access must be managed via the control plane using the appropriate services offered by Kubernetes.
>
> **[3:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=193)** For Kubernetes to do its job, it needs access to your infrastructure API.
>
> **[3:19](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=199)** Give Kubernetes only as much as API access as needed.
>
> **[3:25](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=205)** Monitor your infrastructure and clusters.
>
> **[3:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=208)** Look for anomalies and patterns that impact CIA triad that is confidentiality, integrity and availability.
>
> **[3:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=218)** New technologies and approaches to modern cloud native security are emerging.
>
> **[3:44](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=224)** Do your due diligence and adopt as appropriate for your enterprise.
>
> **[3:50](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/infrastructure-security?u=76281980&t=230)** Learn more about leveraging artificial intelligence and machine learning for security in this course on LinkedIn Learning.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3)
> **Env Vars:** api (2), cia (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Logging and monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=0)** - [Narrator] When your applications are running and the cluster is humming, you need a way to know what's going on with your Kubernetes' components and applications.
>
> **[0:10](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=10)** Logs are your eyes in your cluster.
>
> **[0:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=14)** These logs help debug problems with your cluster.
>
> **[0:17](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=17)** They're also important in detecting security anomalies and any ongoing attacks.
>
> **[0:23](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=23)** However, unlike traditional applications, pods and microservices come and go.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=30)** They could be stopped and restarted anytime.
>
> **[0:33](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=33)** Furthermore, there's no guarantee that a pod will be started on the same node.
>
> **[0:38](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=38)** After a pod or a node is stopped, you still want the ability to access logs.
>
> **[0:46](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=46)** So your logging lifecycle should be decoupled from that of containers, pods and nodes.
>
> **[0:53](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=53)** Kubernetes doesn't provide any native log management solution.
>
> **[0:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=58)** Fortunately, several external logging solutions can be integrated with your Kubernetes clusters.
>
> **[1:06](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=66)** When it comes to logging in Kubernetes, there are three options with progressively increasing complexity.
>
> **[1:13](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=73)** Basic container level logging for logs generated by applications.
>
> **[1:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=78)** Logging at node level that also includes capturing logs generated by Kubernetes' core components.
>
> **[1:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=86)** And logging at cluster level that is enabled with an external backend solution.
>
> **[1:32](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=92)** Applications write their logs to standard output instead of to any specific log file.
>
> **[1:40](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=100)** By using kubectl logs command, you can see the logs from a current or a previously running container.
>
> **[1:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=109)** In addition to container logs, Kubernetes' native components generate logs as well.
>
> **[1:55](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=115)** These logs can be sent to either journal D or directly to a log file.
>
> **[2:03](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=123)** Cluster level logging relies on implementing a logging backend.
>
> **[2:07](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=127)** In a typical implementation, you will see a node agent running on every node.
>
> **[2:14](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=134)** A common example of a node agent is fluent D.
>
> **[2:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=138)** Fluent D is a log aggregator that can ingest logs from different types of log sources.
>
> **[2:26](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=146)** Node aggregator then pushes to a centralized logging backend.
>
> **[2:31](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=151)** Again, a popular choice is a combination of Elasticsearch and Kibana.
>
> **[2:37](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=157)** Though logging is essential, it is of no use if you don't monitor and look for abnormalities and patterns in data.
>
> **[2:47](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=167)** You can connect your logging infrastructure to Prometheus, which is an open source monitoring system.
>
> **[2:54](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=174)** Your enterprise may already be using it.
>
> **[2:58](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=178)** Another monitoring choice is via Splunk, which is also a popular enterprise grade event collection and monitoring solution.
>
> **[3:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=188)** And lastly, you can push your logs and events to your centralized SIEM, that is the security information and event management system.
>
> **[3:18](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=198)** This will allow your security teams to view events from Kubernetes alongside other events from the rest of your infrastructure.
>
> **[3:28](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/logging-and-monitoring?u=76281980&t=208)** A single pane of view will help them make a more judicious decision about any security issues.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), kubectl (1), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** siem (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=0)** - [Sam] The world of containers and Kubernetes is evolving rapidly.
>
> **[0:05](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=5)** In this course, we only scratched the surface of security controls you can use to protect your containers and Kubernetes ecosystem.
>
> **[0:15](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=15)** After watching this video, you will be able to assess the maturity of your organization's container and Kubernetes security posture.
>
> **[0:24](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=24)** By now, you should also know the breadth of security controls that you have at your disposal.
>
> **[0:30](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=30)** When you are ready to go deeper into a specific area, you should consult the documentation offered by Linux, Docker, and Kubernetes.
>
> **[0:39](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=39)** If you're not already using containers with Kubernetes, this course should give you a framework to think about security from day one.
>
> **[0:49](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=49)** So I urge you to take action.
>
> **[0:51](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=51)** Make security a priority for your cloud native applications.
>
> **[0:57](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=57)** Feel free to reach out and connect with me on LinkedIn.
>
> **[1:00](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=60)** I look forward to hearing how your journey in the security of containers and Kubernetes is progressing.
>
> **[1:08](https://www.linkedin.com/learning/securing-containers-and-kubernetes-ecosystem/next-steps?u=76281980&t=68)** Thank you for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (1), make (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [sam] (1)


## Path Context

### In [[Getting Started with Kubernetes]]
← [[Kubernetes- Cloud Native Ecosystem]] | **6 of 6**

## Appears In

- [[Getting Started with Kubernetes]]

## Related Courses

_Courses sharing skills:_

- [[Spring On Kubernetes Deploying And Managing Cloud Native Applications]] — Kubernetes
- [[Docker Essential Training]] — Containerization
- [[Kubernetes- Cloud Native Ecosystem]] — Kubernetes
- [[Kubernetes- Microservices]] — Kubernetes
- [[Kubernetes- Essential Tools]] — Kubernetes

---

[↑ Back to top](#)