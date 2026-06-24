---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: cloud-computing-understanding-networking
url: "https://www.linkedin.com/learning/cloud-computing-understanding-networking"
duration_minutes: 49
duration: 49m
level: Beginner
updated: 3/1/2024
learners: 10502
skills:
  - Cloud Computing
  - Network Administration
  - Computer Networking
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGvYJXudczV6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709157556433?e=2147483647&amp;v=beta&amp;t=9TXeFW4EW7R0jy2W9xDJGpxMZ875O7WDKUF3UGjuMeI"
linkedin_topic: Cloud Computing
learning_paths:
  - '[Foundations of Cloud Computing- Models, Platforms, Services, and Careers](../../Paths/Cloud%20Computing/Learning%20Paths/Foundations%20of%20Cloud%20Computing-%20Models%2C%20Platforms%2C%20Services%2C%20and%20Careers.md)'
prev_courses:
  - '[Cloud Storage Concepts- Services, Cost Control, and Security](Cloud%20Storage%20Concepts-%20Services%2C%20Cost%20Control%2C%20and%20Security.md)'
next_courses:
  - '[Cloud Concepts- Hybrid Cloud](Cloud%20Concepts-%20Hybrid%20Cloud.md)'
path_nav: '[{"path":"Foundations of Cloud Computing- Models, Platforms, Services, and Careers","position":7,"total":9,"prev":"Cloud Storage Concepts- Services, Cost Control, and Security","next":"Cloud Concepts- Hybrid Cloud"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - skill/cloud-computing
  - skill/network-administration
  - skill/computer-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Cloud%20Computing-%20Understanding%20Networking.md)

![Cloud Computing: Understanding Networking](https://media.licdn.com/dms/image/v2/D560DAQGvYJXudczV6Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1709157556433?e=2147483647&amp;v=beta&amp;t=9TXeFW4EW7R0jy2W9xDJGpxMZ875O7WDKUF3UGjuMeI)

# Cloud Computing: Understanding Networking

> Understanding the ins and outs of networking—how it works, how it interacts with your existing enterprise network, and how to work with different networking services—is crucial. In this course, explore the fundamentals of cloud networking. Instructor David Linthicum begins with the basics of networking, including the basics of public, private, hybrid, and multicloud architectures. David includes c

> [LinkedIn Learning](https://www.linkedin.com/learning/cloud-computing-understanding-networking) | 49m | Beginner | 11K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Welcome](#welcome)
- [**1. Introduction to Cloud Computing Networking**](#1-introduction-to-cloud-computing-networking) (3 videos)
  - [Cloud computing basics](#cloud-computing-basics)
  - [Understanding cloud deployment models](#understanding-cloud-deployment-models)
  - [The important role of cloud networking](#the-important-role-of-cloud-networking)
- [**2. Virtual Networks in the Cloud**](#2-virtual-networks-in-the-cloud) (3 videos)
  - [Understanding virtual networks and their purpose](#understanding-virtual-networks-and-their-purpose)
  - [Creating and configuring virtual networks](#creating-and-configuring-virtual-networks)
  - [Addressing and subnetting in the cloud](#addressing-and-subnetting-in-the-cloud)
- [**3. Cloud-Based Network Services**](#3-cloud-based-network-services) (5 videos)
  - [Cloud-based network services: DNS, DHCP, and VPN](#cloud-based-network-services-dns-dhcp-and-vpn)
  - [Setting up and managing DNS in the cloud](#setting-up-and-managing-dns-in-the-cloud)
  - [Implementing Dynamic Host Configuration Protocol](#implementing-dynamic-host-configuration-protocol)
  - [Configuring and managing VPN connections in the cloud](#configuring-and-managing-vpn-connections-in-the-cloud)
  - [Configuring and managing VPC (virtual private cloud)](#configuring-and-managing-vpc-virtual-private-cloud)
- [**4. Network Security in the Cloud**](#4-network-security-in-the-cloud) (4 videos)
  - [Cloud security and its challenges](#cloud-security-and-its-challenges)
  - [Implementing network security measures in the cloud](#implementing-network-security-measures-in-the-cloud)
  - [Configuring network access control policies and rules](#configuring-network-access-control-policies-and-rules)
  - [Security services: Web app firewalls and DDoS protection](#security-services-web-app-firewalls-and-ddos-protection)
- [**5. Interconnecting Cloud Networks**](#5-interconnecting-cloud-networks) (4 videos)
  - [Establishing connectivity between cloud environments](#establishing-connectivity-between-cloud-environments)
  - [Configuring VPNs for secure inter-cloud communication](#configuring-vpns-for-secure-inter-cloud-communication)
  - [Interconnecting virtual networks within a cloud provider](#interconnecting-virtual-networks-within-a-cloud-provider)
  - [Integrating networks (hybrid and multicloud)](#integrating-networks-hybrid-and-multicloud)
- [**6. Network Monitoring and Troubleshooting**](#6-network-monitoring-and-troubleshooting) (4 videos)
  - [Network monitoring tools and techniques](#network-monitoring-tools-and-techniques)
  - [Configuring network monitoring services in the cloud](#configuring-network-monitoring-services-in-the-cloud)
  - [Analyzing network traffic and troubleshooting issues](#analyzing-network-traffic-and-troubleshooting-issues)
  - [Logging and analytics services](#logging-and-analytics-services)
- [**Conclusion**](#conclusion) (1 videos)
  - [Learning more about cloud networking](#learning-more-about-cloud-networking)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Welcome](https://www.linkedin.com/learning/cloud-computing-understanding-networking/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/welcome?u=76281980&t=0)** - Welcome to my course on [Cloud Computing](../../Topics/Cloud%20Computing.md), Understanding Networking. It's no secret that cloud computing has changed how we do computing and will continue to do so in the future. Considering that cloud computing is about running assets you access via networking, the network component of cloud computing is foundational to a success. Hi, I'm Dave Linthicum, internationally known cloud expert and consultant. Remember that this course is meant to be the start of your journey and not the destination. For those new to networking and cloud computing, we welcome you to a new learning journey. I wish you luck and good learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (5)
> **Speakers:** - welcome (1)


### 1. Introduction to Cloud Computing Networking

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud computing basics](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-computing-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-computing-basics?u=76281980&t=0)** - [Narrator] [Cloud Computing](../../Topics/Cloud%20Computing.md) is one of those topics everyone thinks they understand, but everyone may define it differently. In this video, let's settle on a standard definition of cloud computing to better understand how cloud networking fits in. Cloud computing is defined as the delivery of computing services, including storage, [Databases](../../Skills/Software%20Development/Databases.md), networking, software and analytics over the open internet. Let's be real though, that sounds like a definition that's handy as a party trick, let's better define cloud computing as allowing individuals and businesses to access and use computing resources without significant investment in physical infrastructure. This includes servers and storage devices. Cloud computing provides [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), flexibility and cost efficiency. This enables users to rapidly scale resources up or down based on their current requirements. Also, Cloud computing allows remote access to data and applications from any location with network connectivity. This means that the network is the connective tissue for Cloud computing, and thus it's essential to understand how Cloud computing networking works, hence the need for this course. There are three types of clouds or [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). We'll go over them quickly here. I'll refer to each of them throughout this course. First are [software as a service](../../Glossary/Concept/SaaS.md) or [SaaS](../../Glossary/Concept/SaaS.md) clouds. These applications are delivered over a network, primarily the internet as a service.
>
> **[1:34](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-computing-basics?u=76281980&t=94)** If you use [Google](../../Glossary/Service/Google.md) Docs or [Office](../../Skills/Web%20Development/Microsoft%20Office.md) 365, these are some examples of SaaS clouds. The second is [infrastructure as a service](../../Glossary/Concept/IaaS.md) or [IaaS](../../Glossary/Concept/IaaS.md) clouds. Traditional Resources such as storage and compute servers are typically found in a data center. However, this type of cloud has rapidly expanded with many other services. Being part of an IaaS cloud, including AI and thousands of applications and utilities. This will be the type of cloud we're focusing on in this course. Finally, we have [platform as a service](../../Glossary/Concept/PaaS.md) or [PaaS](../../Glossary/Concept/PaaS.md). You can leverage this [Application Development](../../Skills/Software%20Development/Application%20Development.md) and deployment platform as a service. This cloud is helpful to those just looking for an application development platform that can also host the resulting application. For more detailed information about types of clouds and how they're used, check out my Core Concepts course, which you can find here. Indeed, some of you may find it helpful to learn from that course before taking this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (8), [SaaS](../../Glossary/Concept/SaaS.md) (2), [IaaS](../../Glossary/Concept/IaaS.md) (2), [Platform as a service](../../Glossary/Concept/PaaS.md) (2), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (2)
> **CLI Commands:** find (2)
> **Definitions:** defined as (1), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Understanding cloud deployment models](https://www.linkedin.com/learning/cloud-computing-understanding-networking/understanding-cloud-deployment-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/understanding-cloud-deployment-models?u=76281980&t=0)** - [Instructor] Cloud deployment models are the configuration of cloud types we've covered in the last video, including [SaaS](../../Glossary/Concept/SaaS.md), [PaaS](../../Glossary/Concept/PaaS.md), and [IaaS](../../Glossary/Concept/IaaS.md). In other words, they define how we leverage [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) for different purposes. These are private cloud, public cloud, [Hybrid Cloud](../../Skills/Network%20and%20System%20Administration/Hybrid%20Cloud.md), and multicloud. We'll cover each in enough detail for this course. However, consider taking the core concepts course if you want a deeper understanding. [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md) are SaaS, IaaS, or PaaS clouds that a single organization or enterprise leverages. They are private to these groups, and most private clouds exists within traditional on-premise data centers. Public clouds are SaaS, IaaS, or PaaS clouds that are available and accessible to anyone connected to the internet. They are shared in that there is no restriction on who can use these services. They are open to the public. Hybrid clouds are two systems, a public cloud and an on-premise system, such as a private cloud. They allow enterprises to assess the benefits of both types of clouds simultaneously. Multiclouds are typically two or more public clouds that enterprises can leverage simultaneously. They may also include private clouds and traditional systems, and they offer choices to the enterprise in terms of cloud services they can leverage. What's important here is that you understand these models and how networking works with them. We'll explore this in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SaaS](../../Glossary/Concept/SaaS.md) (3), [PaaS](../../Glossary/Concept/PaaS.md) (3), [IaaS](../../Glossary/Concept/IaaS.md) (3), [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md) (3), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (2)
> **Cross-References:** in the last (1)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [The important role of cloud networking](https://www.linkedin.com/learning/cloud-computing-understanding-networking/the-important-role-of-cloud-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/the-important-role-of-cloud-networking?u=76281980&t=0)** - [Instructor] Cloud networking is essential for several reasons including [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), flexibility, cost effectiveness, accessibility, security and reliability, innovation and agility. Let's explore each. Scalability are the ability to expand, to support and increasing load on the network. For example, the ability to support 100 users on Monday than 10,000 users on Friday. Any limitations can mean not getting the value out of the cloud network as required. Flexibility are the ability to change the cloud network without much latency. This means that the network can adapt to the business continuously. It's an imperative if the network will provide the most value to the company. Cost effectiveness maximizes the value return to the business with the money being spent. Investing a great deal and cloud networking is okay if the value is returned. That is, it is cost-effective. Accessibility is the ability to access network services from any number of physical locations and using any number of devices. Cloud networks should support the access required by the business to what devices or systems need to be connected to the [Cloud Computing](../../Topics/Cloud%20Computing.md) network. Security and reliability. The network must support security services as the business requires. For instance, leveraging VPN or virtual private networks protects data
>
> **[1:33](https://www.linkedin.com/learning/cloud-computing-understanding-networking/the-important-role-of-cloud-networking?u=76281980&t=93)** transmitted over the web. Reliability refers to the ability of the network to function and provide the performance needed consistently. Innovation and agility are the ability of the cloud network to support any new systems and processes needed to support innovation within the business. Also, the ability to change the network as required, which is agility, allows the industry to adjust to evolving requirements such as changes in the market. Overall, cloud networking is essential as it offers scalability, flexibility, cost effectiveness, accessibility, security, reliability, and the potential for innovation and agility. All crucial for modern businesses to thrive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (3), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Analogies:** for example (1), for instance (1), such as (1)
> **Definitions:** means that (1), refers to (1)
> **Env Vars:** vpn (1)
> **Speakers:** - [instructor] (1)


### 2. Virtual Networks in the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding virtual networks and their purpose](https://www.linkedin.com/learning/cloud-computing-understanding-networking/understanding-virtual-networks-and-their-purpose?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/understanding-virtual-networks-and-their-purpose?u=76281980&t=0)** - [Instructor] Virtual networks in the context of [Cloud Computing](../../Topics/Cloud%20Computing.md) and computing networking refers to the network infrastructure that exists entirely within a virtual realm. These networks are created, managed, and customized using software and cloud-based tools. This provides connectivity and facilitates communication between various components in a cloud environment and on premises. Virtual networks as related to cloud computing allow for the extension of on-premise networks into the cloud. This enables the integration of on-premise and cloud resources, such as your private cloud talking to your public cloud provider, or any other on-premises systems. Virtual networks also provide the foundation for deploying and running cloud-based applications and complete systems. What is essential to understand here is that this allows cloud architects and network architects to design networks that only exist in software or are software defined. This provides the flexibility to create change and remove virtual networks to meet the needs of the business, typically without having to touch networking [Hardware](../../Topics/Hardware.md). This makes this kind of networking a game changer, indirectly removing the dependence on managing hardware. Critical aspects of virtual networks in cloud computing and cloud computing network include subnets, or the ability to subdivide networks into subnets, to segment and organize resources. This allows for the network to be better managed and secure. Virtual [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md), or VPCs, allows users to create isolated networks within the public cloud
>
> **[1:36](https://www.linkedin.com/learning/cloud-computing-understanding-networking/understanding-virtual-networks-and-their-purpose?u=76281980&t=96)** that enable better control and security over the cloud environment. Security and access control means that virtual networks enable implementation of security measures. This includes [Network Security](../../Skills/Cybersecurity/Network%20Security.md) groups, access control lists, and firewalls. [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) means that virtual networks in cloud computing are designed to be scalable. This allows for the speedy allocation of network resources based on application demand and changing business needs. It's helpful to become familiar with virtual networks in the context of cloud computing, considering that the concept is used for many cloud networking services. So we'll return to this concept several times during this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (6), [Hardware](../../Topics/Hardware.md) (2), [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Definitions:** means that (2), refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating and configuring virtual networks](https://www.linkedin.com/learning/cloud-computing-understanding-networking/creating-and-configuring-virtual-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/creating-and-configuring-virtual-networks?u=76281980&t=0)** - [Instructor] So, how does one configure a virtual network? It's perhaps best that we walk you through the basic steps. Note that these steps may change based on the cloud brand you're working with and cloud networking service or services you're leveraging. Number one, choose a cloud provider that provides virtual networking capabilities. The most significant cloud providers are [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), or AWS; [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md), or [Google Cloud Platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). Log into the chosen cloud provider's console or web interface to get to the console. This is where you can configure your virtual network. Locate the section in the console related to networking. Normally, this will list all network-related services, so it may be overwhelming. In the networking section, look for options to create a new virtual network, VPC, or virtual [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md). You'll be asked to provide some basic information, such as the name you want to use for the network. Within the virtual network settings, you can create and configure subnets. As discussed in the last video, these are used to segment and organize resources based on your specific requirements. Configure [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) tables, allowing you to direct traffic within the virtual network and define routes for accessing external networks or other VPCs, virtual private clouds, if needed. Networking routing tables are data tables stored in network devices, such as routers or switches, that determine the path through which network traffic is directed. It's the same concept with virtual networks on clouds. Set up security groups and other necessary security measures
>
> **[1:37](https://www.linkedin.com/learning/cloud-computing-understanding-networking/creating-and-configuring-virtual-networks?u=76281980&t=97)** to manage inbound and outbound traffic. The objective is to protect resources within the virtual network. Establish connectivity options. This means VPNs, or virtual private networks, direct connections, or peering with other networks, including on-premises, or networking with another cloud provider. Before finalizing the virtual network configuration, review all settings to ensure they align with your requirements, and save the design. This will give you the option to deploy it at that time, or you can wait until you need the virtual network to function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Prerequisites:** configure (4), set up (1)
> **Env Vars:** aws (1), vpc (1)
> **Analogies:** such as (2)
> **CLI Commands:** aws (1)
> **Cross-References:** in the last (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Addressing and subnetting in the cloud](https://www.linkedin.com/learning/cloud-computing-understanding-networking/addressing-and-subnetting-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/addressing-and-subnetting-in-the-cloud?u=76281980&t=0)** - [Narrator] Addressing and subnetting enables the efficient utilization of IP addresses, and thus, the organization of network resources. Thus, this needs to be carefully considered in that they are more difficult to change after deployment of the virtual network in the cloud. Addressing refers to the allocation and management of IP addresses for cloud-based resources. These may include [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), [Databases](../../Skills/Software%20Development/Databases.md), AI servers, and other network components. Cloud providers offer IP address assignment mechanisms. These can include public IP addresses, which are used for externally accessible resources, and private IP addresses, which are utilized for internal communications within the cloud. Subnetting involves dividing a single IP network into multiple smaller networks. These are also called subnets. This is used to logically segment resources within a virtual network. These are leveraged to enhance security, improve the ability to manage a virtual network, and optimize allocation of the network. For example, different subnets may be used for database servers, application servers, and AI servers. Thus, you can use these subnets to provide specific access control and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) configurations. As you can see, addressing and subnetting provide the cloud network designer with better organization and management of resources. This goes to how secure the network is and makes cloud resource management much simpler, no matter how complex the network is
>
> **[1:33](https://www.linkedin.com/learning/cloud-computing-understanding-networking/addressing-and-subnetting-in-the-cloud?u=76281980&t=93)** or the number of resources on that network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Definitions:** refers to (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 3. Cloud-Based Network Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud-based network services: DNS, DHCP, and VPN](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-based-network-services-dns-dhcp-and-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-based-network-services-dns-dhcp-and-vpn?u=76281980&t=0)** - [Instructor] So now let's dive a bit deeper into the great depths of [Cloud Computing](../../Topics/Cloud%20Computing.md) networking, including DNS, or [domain name system](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md), [DHCP](../../Glossary/Standard/DHCP.md), or [Dynamic Host Configuration Protocol](../../Glossary/Standard/DHCP.md), and VPN, which as you may recall, stands for [virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md). Here's a brief overview of each within the context of cloud computing networking, DNS is responsible for translating domain names into IP addresses. We're all familiar with these when using a browser leveraging the worldwide web. This means that we don't have to put in an IP address, such as the IP address [linkedin.com](https://linkedin.com) resolves to 13.107.42.14. As you can see, this allows users to access websites and other resources using easily recognizable names, such as when typing in [linkedin.com](https://linkedin.com), it finds the associated IP address for you. Thus, you don't have to type in or remember a complex set of numbers. Thus, in cloud computing networking, DNS services are crucial for connecting users to cloud-based applications, and thus it's useful to use DNS even if those resources allows for the IP address to change, and the DNS will find the right address for the right name. DHCP automatically assigns IP addresses and network configuration settings to devices that exist on a network including a cloud computing network. This means that we don't have to do this manually,
>
> **[1:36](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-based-network-services-dns-dhcp-and-vpn?u=76281980&t=96)** and it's easier to respond to network changes. DHCP simplifies the provisioning and management of IP addresses for [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) and other cloud resources. It works behind the scenes and is something you just know is working for you on your behalf to ensure that all devices have an IP address and that IP address is unique. VPNs create a secure encrypted connection over a public network. Best example for this is for use over the internet, where we may use a public network as if it were our own personal and secured network. Many of you may be aware of what VPNs are considering that they allow us to work remotely at home and on-the-go on our phones. The idea is to protect the data from being discovered, considering that it's encrypted when flowing over the VPN. VPNs are used to establish secure connections between on-premise networks and cloud environments. This allows for cloud resources to be leveraged in a more secure manner. What's important here is that you understand each of these networking concepts in that they exist and can be leveraged. It's not important that you understand each concept in depth. Most cloud computing networking professionals deal with these concepts from time to time, but not daily.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (5), [DHCP](../../Glossary/Standard/DHCP.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Domain name system](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) (1), [Dynamic host configuration protocol](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** dns (5), dhcp (3), vpn (2)
> **Definitions:** means that (2), stands for (1)
> **URLs:** [linkedin.com](https://linkedin.com) (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Versions:** 13.107.42 (1)
> **Warnings:** be aware (1)

#### [Setting up and managing DNS in the cloud](https://www.linkedin.com/learning/cloud-computing-understanding-networking/setting-up-and-managing-dns-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/setting-up-and-managing-dns-in-the-cloud?u=76281980&t=0)** - [Instructor] So, what are the steps to set up and manage DNS within a cloud network? Here are the major steps. Choose a DNS provider, meaning researching, and selecting a DNS provider that offers cloud-based DNS services. Options include Amazon Route 53, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) DNS, and [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) DNS, but there are many others to consider as well. Domain registration and configuration means that we're going to register the domain and configure it for our specific requirements. Creating DNS zones for our newly registered DNS means leveraging a chosen DNS provider's console to create DNS zones that allow you to better organize and segment your network. Configuring a DNS record means that we're adding or managing types of DNS records, for instance, A records, CNAME records, MX Records, TXT records. This allows us to better define domains and specific use. It's not important to understand what those items are specifically just yet. What is important is that you understand that these records can be directly configured by you. Next, we need to implement security measures such as DNSSEC, our [Domain Name System](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) Security Extensions. This provides us with better authentication and [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md). Finally, and most importantly, we need to optimize network performance by setting up monitoring and alerting for DNS services.
>
> **[1:35](https://www.linkedin.com/learning/cloud-computing-understanding-networking/setting-up-and-managing-dns-in-the-cloud?u=76281980&t=95)** This ensures that they are functioning as expected and meeting the needs of the business. Also, you can optimize DNS performance by configuring caching and using any available performance-enhancing features provided by your DNS provider. Each provider will be a bit different in what types of [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md) capabilities they provide. This seems a bit complex, don't worry. [Cloud Computing](../../Topics/Cloud%20Computing.md) networking pros often use checklists to get through these procedures. It's not important that you memorize these steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Domain name system](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) (1), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1), [Performance Tuning](../../Skills/Web%20Development/Performance%20Tuning.md) (1)
> **Env Vars:** dns (15), cname (1), txt (1), dnssec (1)
> **Definitions:** means that (2)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** set up (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Implementing Dynamic Host Configuration Protocol](https://www.linkedin.com/learning/cloud-computing-understanding-networking/implementing-dynamic-host-configuration-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/implementing-dynamic-host-configuration-protocol?u=76281980&t=0)** - [Instructor] Same deal here as with DNS. Let's look at the specific steps to set up [DHCP](../../Glossary/Standard/DHCP.md) as related to cloud networking. Understand the DHCP options and capabilities provided by your specific cloud provider, such as AWS and [Google](../../Glossary/Service/Google.md). Different providers may have different support for DHCP and network configuration, and it's important that you understand what they provide specifically. Plan and design the network subnets. This means working within the cloud environment, considering the number of instances or [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) that will require IP addresses. Also, how they will be segmented. Set up a VPC, or virtual private cloud, and define the subnets within the VPC. This may include specific IP address ranges and setting [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) tables. Again, don't get caught up too much with the lingo here. Just understand now that these capabilities exist. You'll have to find out how your specific cloud provider does this anyway. Utilize DHCP services provided by the cloud service provider, as we discussed in the last video, or deploy your own DHCP server within the cloud environment, which is sometimes needed if the applications have specific requirements to do so. Unless there is a specific need, I would suggest avoiding this, considering that this is an added complication. Configure the DHCP server, meaning defining the DHCP options that will be provided to the instances. These include DNS servers, domain names, NTP,
>
> **[1:37](https://www.linkedin.com/learning/cloud-computing-understanding-networking/implementing-dynamic-host-configuration-protocol?u=76281980&t=97)** or network time protocol servers, also any custom options that are required for your network. Finally, test the DHCP setup by deploying instances with the defined subnets and seeing if it works. This means ensuring they received the correct IP configurations from the DHCP service, then verify connectivity and the network settings. Of course, there may be other steps, such as looking at autoscaling features and implementing monitoring and automation as well. These are services that many DHCP providers offer that are handled when operating the network after deployment. Again, focus on the process and the concept and not on the specifics here. You'll find that these change a great deal from provider to provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (10), [Google](../../Glossary/Service/Google.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** dhcp (10), dns (2), vpc (2), aws (1), ntp (1)
> **Prerequisites:** set up (2), configure (1), setup (1)
> **CLI Commands:** find (2), aws (1)
> **Cross-References:** we discussed (1), in the last (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Configuring and managing VPN connections in the cloud](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-and-managing-vpn-connections-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-and-managing-vpn-connections-in-the-cloud?u=76281980&t=0)** - [Instructor] Let's briefly look at the specific steps to set up VPN as related to cloud networking. Choose a VPN solution compatible with your cloud provider, meaning that we're normally looking for either the VPN that your cloud provider provides, or one that has been verified to work with your provider. Set up a VPN gateway or instance within your cloud environment, depending on the steps needed by your specific VPN solution. Configure the VPN settings. This normally includes authentication, encryption, and tunneling protocols. Establish connectivity between the cloud VPN and your specific on-premise network of client devices. This should provide a secure connection. Finally, test and validate the VPN connection to ensure secure and reliable communications. This ensures that everything is working as planned. These steps can vary based on the specific cloud provider and VPN solution. Again, this is a general overview of the configuration process.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (9)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configuring and managing VPC (virtual private cloud)](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-and-managing-vpc-virtual-private-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-and-managing-vpc-virtual-private-cloud?u=76281980&t=0)** - [Instructor] Same with VPC. Let's explore the specific steps and process for configuring and deploying a VPC. Log onto your cloud provider's platform and find the VPC console. It's generally under Networking. Click on Create VPC or similar wording to specify the VPC name and any additional configuration parameters you may be asked to provide. Within the VPC, create subnets in different availability zones. This means different parts of the public cloud provider, normally in different geographical locations. In essence, we're configuring a part of the VPC to operate in different segments of the public cloud provider. Create an internet gateway and attach it to the VPC. This enables internet access for resources within the VPC. If you're looking to use a VPC over the internet, which is really what most do, this is a necessary step. Create route tables and associate them with the subnets. This controls the traffic flow. Define network ACLs, or access control lists. These provide an additional layer of security at the subnet level. Configure security groups within the VPC. This is to control inbound and outbound traffic for the instances to provide sound [Network Security](../../Skills/Cybersecurity/Network%20Security.md). Create and manage VPN connections. This allows you to establish secure communications between the VPC and on-premise networks or other VPCs. This process and tool
>
> **[1:34](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-and-managing-vpc-virtual-private-cloud?u=76281980&t=94)** will vary from cloud provider to cloud provider. What's important here is that you understand this conceptually, not memorize the steps at this point in your journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Env Vars:** vpc (12), vpn (1)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 4. Network Security in the Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloud security and its challenges](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-security-and-its-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-security-and-its-challenges?u=76281980&t=0)** - [Instructor] I'd now like to discuss [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) and some of its challenges. First, know that cloud security is a simple process that many people make more complicated than needed. The basic steps are to protect, detect, respond, and track. Let's cover each here as an introduction to cloud security and the challenges that you'll face when dealing with networking. Protect is a passive process because we set up systems to defend against threats. This is by using whatever security mechanisms are best for that defense. These may include data encryption for instance. How do you find and stop attacks on your cloud-based system, including the network? The security system must be smart enough to consistently monitor things that are occurring, have already happened or about to happen. Then raise the alarm that a breach attempt is underway and prompt the system to take evasive action. This is what the concept of detect is all about. How to respond to detecting an attack or an emerging threat? The [Network Security](../../Skills/Cybersecurity/Network%20Security.md) system could disconnect and block an IP address, then backup systems and data just in case they are breached. This includes turning off systems and [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) to stop an attack. Track means that we're keeping a detailed log of everything that happens on the system and on the network. This includes breach attempts as well as normal operations. Of course, you can't boil down cloud security to just these four concepts.
>
> **[1:33](https://www.linkedin.com/learning/cloud-computing-understanding-networking/cloud-security-and-its-challenges?u=76281980&t=93)** We need to consider many of the details as well to create a sound security plan, including a secure [Cloud Computing](../../Topics/Cloud%20Computing.md) network. Let's see what those are in the remainder of this section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md) (4), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Data Storage](../../Skills/Data%20Science/Data%20Storage.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Implementing network security measures in the cloud](https://www.linkedin.com/learning/cloud-computing-understanding-networking/implementing-network-security-measures-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/implementing-network-security-measures-in-the-cloud?u=76281980&t=0)** - [Instructor] At some point, you're going to want to look at the system assets on your [Cloud Computing](../../Topics/Cloud%20Computing.md) network and identify any risks to those assets. This will allow you to assess the security approach that will be required. This means an inventory of applications, data stores, and anything else that may be connected to the cloud computing network. During the next step, we'll select a cloud provider that supports the security services we need. Remember that this includes compliance and core security services, such as standard encryption. Picking a cloud provider is multi-dimensional, meaning you'll have to consider other things such as cost, performance, additional services needed, et cetera. Also, this is usually not picking the best cloud, but in many instances is picking more than a single cloud provider or building a multi-cloud. Utilize robust encryption [Algorithms](../../Skills/Software%20Development/Algorithms.md) to protect the data both at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) and in transit or flight. This adds another layer of security against unauthorized access, since even if they can see the data, it's scrambled using encryption. Many instances, those deploying cloud computing encrypt everything. Utilize IAM, our identity access management tools to manage user permissions. Every system, human, data or data store has an identity. We can use these digital signatures to authorize or deauthorize access. For example, we may not want others outside of the [human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) organization
>
> **[1:33](https://www.linkedin.com/learning/cloud-computing-understanding-networking/implementing-network-security-measures-in-the-cloud?u=76281980&t=93)** to see payroll data. Thus, they're the only identities authorized to access that system and perhaps the network that system resides on. Divide the cloud network into separate zones or sub networks. We've discussed subnets in a previous video. This is to isolate and protect different types of data and services. This can also limit the damage that can be done if a specific network segment is breached. Install and configure firewalls, which are used to monitor and control incoming and outcoming network traffic, and will prevent unwanted access. Firewalls are handy because they can stop access by systems and humans who are not authorized to access the systems. Since the network is protected by our firewall, so are the attached systems. Make sure to leverage [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and prevention systems or IDPS. These monitor network and system activities, detecting activities that could indicate a breach or an attempted breach. This goes to the detect concept discussed in the last video. Make sure to perform security audits often. This ensures that you comply with industry standards and regulations, which are a core requirement of your security approach. Finally, make sure to provide education to all employees. This should pertain to best practices for implementing [Cloud Security](../../Skills/Cloud%20Computing/Cloud%20Security.md), including simple users of the systems to security admins charged with operations, security, and cloud [Network Security](../../Skills/Cybersecurity/Network%20Security.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Human resources](../../Skills/Artificial%20Intelligence%20(AI)/Human%20Resources%20(HR).md) (1), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1)
> **CLI Commands:** make (3)
> **Analogies:** such as (2), for example (1)
> **Best Practices:** make sure to (3)
> **Env Vars:** iam (1), idps (1)
> **Cross-References:** previous video (1), in the last (1)
> **Prerequisites:** install (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Configuring network access control policies and rules](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-network-access-control-policies-and-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-network-access-control-policies-and-rules?u=76281980&t=0)** - [Instructor] Let's walk through what it takes for a [Network Security](../../Skills/Cybersecurity/Network%20Security.md) admin, let's call him Dave, to configure network access controls and rules. First, Dave should access the [Cloud Computing](../../Topics/Cloud%20Computing.md) platform's management console or portal. This is where Dave will work to set up policies using this tool. It should be noted that it is different from cloud to cloud. Next, Dave needs to navigate to the network security section. This is where he can manage access control policies, including the creation and removal of policies and/or rules. Policies are just logic that carry out specific rules related to network security. For example, if you're not allowed to access the network after 9:00 PM on Friday, or you're not allowed to access the network from an IP address that's out of the country. Next, Dave needs to understand the types of network access controls available. This includes security groups, network access control lists, or rules associated with a firewall. Next, Dave wants to determine the specific resources or services that need to be part of his access control rules or policies. For example, is it all [Databases](../../Skills/Software%20Development/Databases.md)? Is it all systems connected to the network, or just a few systems that are associated with compliance, such as a bank needing to protect transactional data, or a healthcare provider protecting data that has PII attributes or personally identifiable information? Now, Dave needs to create a new access control policy or rule based on the requirements for the resource or service. This can vary a great deal and is largely dependent
>
> **[1:34](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-network-access-control-policies-and-rules?u=76281980&t=94)** on the requirements of the business. What are we protecting and for what purpose? Now, Dave needs to define the source destination in port where he wishes to create the right access control rule. This means we're defining a target for the policy or rule. Next, Dave needs to test the policy or rule to ensure that it does both of the following: Allows the intended access, denies unauthorized access. The last step is Dave documenting the rules and policies created, including the purpose. This is handled for those that have to come after Dave and figure out what he has done and for what reason. Access control policies for future reference and auditing purposes. If this seems complex, it's really not. In essence, we're defining parameters around how systems and humans access the cloud computing network. This allows for use to further protect the network and the systems on the network from unauthorized access or mistakes that employees can make.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (3), [Cloud Computing](../../Topics/Cloud%20Computing.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Analogies:** for example (2), such as (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** make (1)
> **Ports:** :00 (1)
> **Env Vars:** pii (1)
> **Speakers:** - [instructor] (1)

#### [Security services: Web app firewalls and DDoS protection](https://www.linkedin.com/learning/cloud-computing-understanding-networking/security-services-web-app-firewalls-and-ddos-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/security-services-web-app-firewalls-and-ddos-protection?u=76281980&t=0)** - [Instructor] Let's look at an example of just two useful security services. This includes Web Application Firewalls, or WAFs, and DDoS Protection, meaning protection from specific kinds of attacks called Distributed Denial of Service attacks. A WAF is a cloud [Network Security](../../Skills/Cybersecurity/Network%20Security.md) service that provides monitoring, filtering, and the ability to block selected HTTP requests and responses. WAF is able to do this by inspecting HTTP requests and responses to detect issues with those actions and protect the web application. Issues it looks for include [SQL](../../Skills/Data%20Science/SQL.md) injection or cross-site scripting, just to name a few. SQL or Structured Query Language injection is a type of cyber attack that allows hackers to execute malicious SQL queries. This can result in destroying data or allowing access to data they are not authorized to see. Cross-site scripting enables attackers to inject malicious scripts into webpages. This means that they can change what the webpage displays. DDoS Protection means taking actions to mitigate and eliminate DDoS attacks. These are attempts to disrupt the normal load on a specific server and can lead to server crashes, slow performance, and legitimate users being denied access to a specific server or information. These are common attacks that are often caused by bad actors putting code on many unknowing users
>
> **[1:36](https://www.linkedin.com/learning/cloud-computing-understanding-networking/security-services-web-app-firewalls-and-ddos-protection?u=76281980&t=96)** and systems, which, in turn, attack a specific target. The Protection uses approaches such as traffic filtering, rate limiting, and traffic diversion, which ensure that only legitimate requests can reach the specific server or services. The objective here is to provide you with two network security services that you'll likely deploy when you're carrying out network security design and/or operations. There are many others to understand as well, and if you are going deeper into network security, that's something that you need to comprehend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (4), [SQL](../../Skills/Data%20Science/SQL.md) (3)
> **Env Vars:** sql (3), waf (2), http (2)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 5. Interconnecting Cloud Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Establishing connectivity between cloud environments](https://www.linkedin.com/learning/cloud-computing-understanding-networking/establishing-connectivity-between-cloud-environments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/establishing-connectivity-between-cloud-environments?u=76281980&t=0)** - [Instructor] Clouds don't exist as silos or islands in the world of IT. They need to communicate with other clouds, private and public, legacy systems, edge computing, mobile computing, and so on. Indeed, those clouds that don't have good connectivity with other cloud brands or cloud types, including on premises systems, just won't work, period. Thus, let's explore what this connectivity is and how it works. The most used types of connectivity, in and out of cloud platforms, include direct connection, also called private connectivity, is just a physical connection between the systems in the data center, which could be your data center or a data center space that you rent and public cloud platforms such as AWS, [Google](../../Glossary/Service/Google.md) and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). Examples of this would be a private circuit or lease line that only exists for use of a single organization or business. This can improve performance since you're not sharing the line with others. It also improves security for the same reason. VPNs, which we covered already. These provide secure encrypted connections that can use the public internet for connectivity. The advantage here is that we don't have to pay for or maintain a private line, as with a direct connection, but many of the same security benefits are gained when using a VPN. Inter-region connectivity. This is when cloud providers use multiple data
>
> **[1:34](https://www.linkedin.com/learning/cloud-computing-understanding-networking/establishing-connectivity-between-cloud-environments?u=76281980&t=94)** centers that are geographically dispersed and you're setting up a connection between these regions. This means you're connecting from one region to another, normally within the same cloud provider. Most use cases for this type of connectivity enable redundancy for disaster recovery types of services that may be needed. If one data center experiences an outage or is taken offline, the other region can take over the processing Inter- cloud connectivity. This refers to connections going from one cloud provider or cloud brands, such as AWS, to another cloud provider or a cloud brand, such as Google. This is handy for cloud to cloud data exchange, providing redundancy for disaster recovery, but this time, using another brand of public cloud provider. Finally, public internet connectivity. This is how most of us use public cloud providers, by connecting to those providers over the open internet. The trade-off is security and that data in flight may not be encrypted and performance, given that you're sharing the internet with millions of other users. If better security is needed, it may be necessary to use a VPN or a VPC. The idea here is to make sure that all cloud systems have access to the systems and data that they need, no matter if it's on premise or in another cloud provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** aws (2), vpn (2), vpc (1)
> **CLI Commands:** aws (2), make (1)
> **Analogies:** such as (3)
> **Cross-References:** we covered (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [Configuring VPNs for secure inter-cloud communication](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-vpns-for-secure-inter-cloud-communication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-vpns-for-secure-inter-cloud-communication?u=76281980&t=0)** - [Narrator] So you want to make two cloud brands communicate with one another using a VPN. What are the steps to take? We've already covered the steps in setting up a VPN from an on-premise system to a single public cloud provider. Here, we are doing just the same thing, but between two different cloud providers. So we'll mostly focus on the added steps and what they mean. First is that you need to pick a VPN protocol or the way that the VPN will communicate across itself. Obviously, both sender and receiver must agree on the protocol or protocols that they're going to use. Examples include IPSec, Internet Protocol Security, SSL, TLS, our secured sockets layer and transport layer security and L2TP, meaning layer two tunneling protocol. It does not make much sense to go in depth here, but each protocol has its own strengths and use cases. Second, we need to implement authentication. This means agreeing on which digital certificate is going to be used. Also, pre-shared keys or multifactor authentication. Again, each approach has its own strengths and weaknesses for your specific use case. Third, set up a VPN gateway that's able to act as an entry and exit point for the VPN communications. Each cloud will need its own gateway. Next, we'll need to configure tunneling and encryption. This is needed for secure connections between cloud platforms, in this case,
>
> **[1:35](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-vpns-for-secure-inter-cloud-communication?u=76281980&t=95)** different cloud brands. We'll also need to set up [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and access control. This means establishing the proper routing between cloud platforms such as AWS and [Google](../../Glossary/Service/Google.md). We'll need to set up an access control link, firewall rules, and other security mechanisms to control which resources can communicate over the VPN. Finally, we'll need to make sure we can both monitor and maintain the VPN. This should include tracking, VPN usage, monitoring performance, and watching for outages. In many instances, if the VPN is not functioning properly, then all systems that have a dependence on that VPN fail to operate as well. Again, this will vary a great deal based on which VPN and cloud provider you're using. However, the general steps will be about the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** vpn (12), ssl (1), tls (1), l2tp (1), aws (1)
> **CLI Commands:** make (3), aws (1)
> **Prerequisites:** set up (3), configure (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Interconnecting virtual networks within a cloud provider](https://www.linkedin.com/learning/cloud-computing-understanding-networking/interconnecting-virtual-networks-within-a-cloud-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/interconnecting-virtual-networks-within-a-cloud-provider?u=76281980&t=0)** - [Instructor] Interconnecting virtual networks within a public cloud provider is the process of creating secure communications between different virtual networks. This allows for data to be shared between networks within a single cloud provider such as AWS and [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). A common method to leverage is virtual network peering, this allows for the connecting of different virtual networks existing within the same Region or different Regions. Regions are named locations used by public [Cloud Computing](../../Topics/Cloud%20Computing.md) providers. They use private IP addresses to facilitate these communications, and this is achieved without the need for a gateway. Another approach, again, is to use a VPN. What's different here is that we're setting up the VPN to work within a single public cloud. We are able to do this by establishing secure connections between virtual networks using a VPN. This process is very much the same as when we create a VPN for communications between public cloud providers and other systems or networks existing across the open internet. Also, some cloud providers provide services for interconnecting of virtual networks. Examples of these types of services include AWS Transit Gateway, or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Virtual WAN, which stands for Wide Area Network. These services provide a hub that facilitates network connectivity, thus allowing you to integrate several virtual networks within a single cloud provider.
>
> **[1:34](https://www.linkedin.com/learning/cloud-computing-understanding-networking/interconnecting-virtual-networks-within-a-cloud-provider?u=76281980&t=94)** Finally, software-defined networks, or SDNs, are offered by cloud providers to allow interconnection of virtual networks. These facilitate how you control the network behavior programmatically using software. Sometimes this is easier to deploy for complex intercloud networks rather than the other solutions listed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** vpn (4), aws (2), wan (1)
> **CLI Commands:** aws (2)
> **Definitions:** stands for (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Integrating networks (hybrid and multicloud)](https://www.linkedin.com/learning/cloud-computing-understanding-networking/integrating-networks-hybrid-and-multicloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/integrating-networks-hybrid-and-multicloud?u=76281980&t=0)** - [Instructor] Hybrid and multicloud networking is basically integrating on-premise networks, such as those deployed by most companies, with public cloud platforms such as AWS, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), and [Google](../../Glossary/Service/Google.md). They're used to create a unified distributed network infrastructure so that applications and data stores can more easily communicate. Examples include a private cloud is connected to two public clouds, an on-premise system connected with a public cloud, a mobile computing system connected with three public clouds. Some of the networking approaches that come into play include VPNs, SDNs, VPCs, as well as load balancing and traffic management. Since we've already covered VPNs, SDNs, and VPCs, let's focus on load balancing and traffic management. Load balancers and traffic management systems make sure that network traffic is efficiently distributed, thus no single resource is overloaded. This means across both systems and cloud resources, the objective is to optimize performance as well as [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and reliability for hybrid and multicloud environments. Of course, there are other ways to deploy and manage networks that span hybrid and multicloud deployments. These are just the most common ways of carrying this out. It's often a good idea to work with technology providers to determine what's best for your situation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **CLI Commands:** aws (1), make (1)
> **Analogies:** such as (2)
> **Env Vars:** aws (1)
> **Speakers:** - [instructor] (1)


### 6. Network Monitoring and Troubleshooting

[↑ Back to Table of Contents](#table-of-contents)

#### [Network monitoring tools and techniques](https://www.linkedin.com/learning/cloud-computing-understanding-networking/network-monitoring-tools-and-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/network-monitoring-tools-and-techniques?u=76281980&t=0)** - [Instructor] Networks, indeed cloud networks, need to be monitored and maintained. As we discussed earlier in this course, usually the last step in setting up a VPC, VPN, or other network domain is establishing monitoring. So what is that? Simply put, it's the ability to watch something work over a long period of time, in this case, the network. So what do you monitor? There are several techniques to consider here. Let's talk about the five most important. Packet analysis is the ability to analyze the network packets and keep an eye on them and troubleshoot any problems that may emerge, such as performance issues. Packets are like blood throwing through the cloud networks. Much like our blood, its contents and behavior indicate health. Traffic flow analysis, or the monitoring and analysis of network traffic, including flow. The idea is to identify potential bottlenecks occurring or beginning to form. Log analysis is collecting and understanding log data from resources running on the cloud network. This allows you to understand system behaviors, user activities, and other events of interest. In essence, we're recording each networking event and then looping back to understand what those events mean. Performance monitoring, or the ability to track and analyze [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md). This includes CPU saturation, memory usage, network latency, and input and output system throughput. It is understood that if your automobile
>
> **[1:33](https://www.linkedin.com/learning/cloud-computing-understanding-networking/network-monitoring-tools-and-techniques?u=76281980&t=93)** isn't performing as usual, making odd noises or showing aberrant behavior, a more serious problem could be coming. In the same way, performance monitoring allows us to spot cloud networking problems before they occur. Anomaly detection, or the ability to use AI-based mechanisms to identify patterns or behaviors that are out of the norm. This could indicate potential performance issues or even security threats. Of course, this is just scratching the surface. There are many other ways and things to monitor when looking at the ongoing health of a [Cloud Computing](../../Topics/Cloud%20Computing.md) network. These are just the most important and common.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Performance Metrics](../../Skills/Cybersecurity/Performance%20Metrics.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Env Vars:** vpc (1), vpn (1), cpu (1)
> **Cross-References:** we discussed (1), earlier in (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Configuring network monitoring services in the cloud](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-network-monitoring-services-in-the-cloud?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-network-monitoring-services-in-the-cloud?u=76281980&t=0)** - [Instructor] So how does one configure network monitoring services within a public cloud? There are a few steps to consider. Choose a network monitoring tool, which means selecting a monitoring tool designed to monitor network resources in the cloud. These tools collect data and provide analysis from resources on the network and the network itself. These may include [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), applications, serverless systems, and resources existing within a cloud. Examples of these tools include Amazon CloudWatch, [Google](../../Glossary/Service/Google.md) Stack Driver, and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Monitor. Define the objectives of your network monitoring. This means typically defining the network's key performance indicators or KPIs, and what the network needs to hit in terms of KPIs to declare success. In other words, what performance levels must the network hit for a specific company? Deploy monitoring agents on the network and resources connected to the network. These agents collect performance data and store it, then they send that data to the monitoring service where it's analyzed and findings understood. Define alert thresholds. This is based on monitoring objectives we defined previously. Once the network or network resources exceed the threshold, an alert is sent to any system or person who knows something is wrong and needs fixing. Utilize network monitoring technology to keep track of network traffic. This may include network latency network utilization, and indicators that something is failing,
>
> **[1:34](https://www.linkedin.com/learning/cloud-computing-understanding-networking/configuring-network-monitoring-services-in-the-cloud?u=76281980&t=94)** such as packet loss. The idea is to catch issues with the network before they become real problems. Make sure to monitor for [Network Security](../../Skills/Cybersecurity/Network%20Security.md). This means using security specific monitoring technology to find breaches. This means detecting any unauthorized access attempts and other odd behavior that could mean someone is attempting to break into your cloud network and must be dealt with. Of course, the specific steps here depend on the networking requirements of your organization or company. For now, this is enough to understand the basic problems that need to be solved when you set out to configure networking, monitoring services in the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** configure (2)
> **Definitions:** in other words (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing network traffic and troubleshooting issues](https://www.linkedin.com/learning/cloud-computing-understanding-networking/analyzing-network-traffic-and-troubleshooting-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/analyzing-network-traffic-and-troubleshooting-issues?u=76281980&t=0)** - [Instructor] Analyzing network traffic and troubleshooting common network issues can be done using a few steps. First, use networking monitoring technology to gather network monitoring data and analyze the data to understand any network issues. Next is troubleshooting any network issues by checking virtual device configurations to ensure they are not misconfigured. Helpful to this process is using network diagnostic tools, such as identifying specific issues. Usually, this is carried out using small tests, such as pinging remote servers over the [Cloud Computing](../../Topics/Cloud%20Computing.md) network. Check out the network logs, looking for any error messages and events that could indicate any network problems. Finally, collaborate with others or consult with online communications for additional insights. You'll find that this is an ever-changing science, and as we learn more and share more, we all need to keep up with the changes in best practices and technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Logging and analytics services](https://www.linkedin.com/learning/cloud-computing-understanding-networking/logging-and-analytics-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/logging-and-analytics-services?u=76281980&t=0)** - [Instructor] So how does one use logging and analytic services for networking monitoring in order to assist in [Network Troubleshooting](../../Skills/Network%20and%20System%20Administration/Network%20Troubleshooting.md)? Surprisingly, it's not as complex as it sounds. Here are a few simple steps to consider. First, make sure to select a reliable logging and analytic service. Examples include AWS CloudWatch, [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Logging, or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Monitor. Second, set up the logging service to gather the network monitoring data you need to analyze. This typically includes network traffic data, system performance data and relevant application logs. Third, create a monitoring dashboard providing a custom view of any metrics and alerts that should be monitored ongoing. Fourth, set up alerting and notifications based on the previously defined threshold as you may recall from an earlier video. Of course, there are some services that you may need to add depending on your specific [Cloud Computing](../../Topics/Cloud%20Computing.md) network. However, here are the most relevant for networking, monitoring, and troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Network Troubleshooting](../../Skills/Network%20and%20System%20Administration/Network%20Troubleshooting.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **CLI Commands:** make (1), aws (1)
> **Prerequisites:** set up (2)
> **Env Vars:** aws (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning more about cloud networking](https://www.linkedin.com/learning/cloud-computing-understanding-networking/learning-more-about-cloud-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cloud-computing-understanding-networking/learning-more-about-cloud-networking?u=76281980&t=0)** - [Narrator] [Cloud Computing](../../Topics/Cloud%20Computing.md) Networking is an evolving field that will only become more critical as time progresses. The demand for cloud networking pros is also expected to rise considering that cloud computing growth is exploding. A solid understanding of networking principles such as the ones provided in this course helps you develop a sound foundation to start in cloud computing networking. However, it's also helpful to understand specific cloud provider networking capabilities and native networking components that they offer. You'll find that many of these concepts learned in this course transfer to particular tools that public cloud providers provide. To keep up with cloud networking, you'll find that there are a few things you can do. The first is attending industry conferences, seminars, and webinars, even some that are free. Second, make sure to leverage cloud provider documentation and white papers. Third, follow specific outline publications that focus on cloud computing networking. Finally, participating in online communities. You'll not only learn from others, but make contacts. Remember that this is your own journey and this is only the start. You'll need to be a continuous learner and understand that there's always more to learn and that's a good thing. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (4)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [David Linthicum](../../Instructors/Cloud%20Computing/David%20Linthicum.md)

## Skills Covered

- Cloud Computing
- Network Administration
- Computer Networking

## Path Context

### In [Foundations of Cloud Computing- Models, Platforms, Services, and Careers](../../Paths/Cloud%20Computing/Learning%20Paths/Foundations%20of%20Cloud%20Computing-%20Models%2C%20Platforms%2C%20Services%2C%20and%20Careers.md)
← [Cloud Storage Concepts- Services, Cost Control, and Security](Cloud%20Storage%20Concepts-%20Services%2C%20Cost%20Control%2C%20and%20Security.md) | **7 of 9** | [Cloud Concepts- Hybrid Cloud](Cloud%20Concepts-%20Hybrid%20Cloud.md) →

## Appears In

- [Foundations of Cloud Computing- Models, Platforms, Services, and Careers](../../Paths/Cloud%20Computing/Learning%20Paths/Foundations%20of%20Cloud%20Computing-%20Models%2C%20Platforms%2C%20Services%2C%20and%20Careers.md)

## Related Courses

_Courses sharing skills:_

- [MPLS Segment Routing](../Network%20and%20System%20Administration/MPLS%20Segment%20Routing.md) — Network Administration, Computer Networking
- [Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Wireless%20Networks%2C%20Services%2C%20Security%2C%20and%20Virtualization.md) — Network Administration
- [Mpls Foundations Getting Started With Mpls](../Network%20and%20System%20Administration/Mpls%20Foundations%20Getting%20Started%20With%20Mpls.md) — Computer Networking
- [Cloud Quantum Computing Essentials](Cloud%20Quantum%20Computing%20Essentials.md) — Cloud Computing
- [Server Administration Essential Training](Server%20Administration%20Essential%20Training.md) — Network Administration

---

[↑ Back to top](#)