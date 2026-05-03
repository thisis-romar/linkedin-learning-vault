---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: aws-networking-14125632
url: "https://www.linkedin.com/learning/aws-networking-14125632"
duration_minutes: 267
duration: 4h 27m
level: Intermediate
updated: 7/16/2021
learners: 9774
skills:
  - Cloud Administration
  - Amazon Web Services (AWS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQENU-CAySYwBg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626294896925?e=2147483647&amp;v=beta&amp;t=TxAgk1P_aWZmwf23iF7tTYviyA_b8LV6f-VxOpXdaf4"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Infrastructure Management on AWS- Skills for Administrators]]'
prev_courses:
  - '[[Amazon EC2 Essential Training]]'
next_courses:
  - '[[Complete Guide to AWS Security and Compliance Management]]'
path_nav: '[{"path":"Infrastructure Management on AWS- Skills for Administrators","position":3,"total":5,"prev":"Amazon EC2 Essential Training","next":"Complete Guide to AWS Security and Compliance Management"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/devops
  - skill/cloud-administration
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/AWS-%20Networking.md)

![AWS: Networking](https://media.licdn.com/dms/image/v2/C560DAQENU-CAySYwBg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1626294896925?e=2147483647&amp;v=beta&amp;t=TxAgk1P_aWZmwf23iF7tTYviyA_b8LV6f-VxOpXdaf4)

# AWS: Networking

> Adopting a cloud infrastructure strategy includes configuring a network that meets the needs of your organization. Amazon Web Services (AWS) is a cost-reducing solution that provides tools so you can build a data center with secure cloud networking technology. This course offers advice for technical managers and step-by-step instructions for system administrators and full-stack engineers. Learn ho

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-networking-14125632) | 4h 27m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [AWS networking overview](#aws-networking-overview)
  - [What you should know](#what-you-should-know)
- [**1. AWS Network Foundations**](#1-aws-network-foundations) (5 videos)
  - [Virtual Private Cloud (VPC) overview](#virtual-private-cloud-vpc-overview)
  - [Establish private connections](#establish-private-connections)
  - [Route 53 overview](#route-53-overview)
  - [The command-line interface (CLI) for Mac](#the-command-line-interface-cli-for-mac)
  - [The command-line interface (CLI) for Windows](#the-command-line-interface-cli-for-windows)
- [**2. Virtual Private Cloud**](#2-virtual-private-cloud) (10 videos)
  - [Explore the default VPC](#explore-the-default-vpc)
  - [Explore VPC templates](#explore-vpc-templates)
  - [Handcrafting a VPC](#handcrafting-a-vpc)
  - [Configure VPC subnets](#configure-vpc-subnets)
  - [Configure route tables](#configure-route-tables)
  - [Configure an internet gateway](#configure-an-internet-gateway)
  - [Configure a NAT gateway](#configure-a-nat-gateway)
  - [Configure VPC endpoints](#configure-vpc-endpoints)
  - [Create a VPC](#create-a-vpc)
  - [Expand a VPC](#expand-a-vpc)
- [**3. VPC Security**](#3-vpc-security) (10 videos)
  - [Understanding security groups](#understanding-security-groups)
  - [Verifying security groups](#verifying-security-groups)
  - [Configuring security groups](#configuring-security-groups)
  - [Understanding network ACLs](#understanding-network-acls)
  - [Explore a network ACL scenario](#explore-a-network-acl-scenario)
  - [Configure network ACLs, part 1](#configure-network-acls-part-1)
  - [Configure network ACLs, part 2](#configure-network-acls-part-2)
  - [VPC Flow Logs overview](#vpc-flow-logs-overview)
  - [Create and configure VPC Flow Logs](#create-and-configure-vpc-flow-logs)
  - [Explore VPC Flow Logs](#explore-vpc-flow-logs)
- [**4. VPC Peering**](#4-vpc-peering) (4 videos)
  - [VPC peering overview](#vpc-peering-overview)
  - [Implement VPC peering](#implement-vpc-peering)
  - [Configure VPC peer routing](#configure-vpc-peer-routing)
  - [Verify VPC peer routing](#verify-vpc-peer-routing)
- [**5. Transit Gateway**](#5-transit-gateway) (6 videos)
  - [Understand Transit Gateway](#understand-transit-gateway)
  - [Implement Transit Gateway](#implement-transit-gateway)
  - [Configure Transit Gateway](#configure-transit-gateway)
  - [Validate Transit Gateway](#validate-transit-gateway)
  - [Challenge: Transit Gateway](#challenge-transit-gateway)
  - [Solution: Transit Gateway](#solution-transit-gateway)
- [**6. Route 53**](#6-route-53) (8 videos)
  - [Configure Route 53 DNS](#configure-route-53-dns)
  - [Understand Route 53 alias](#understand-route-53-alias)
  - [Configure Route 53 alias](#configure-route-53-alias)
  - [Understand private DNS](#understand-private-dns)
  - [Explore a private DNS scenario](#explore-a-private-dns-scenario)
  - [Configure private DNS](#configure-private-dns)
  - [Understand Elastic IP addresses](#understand-elastic-ip-addresses)
  - [Use Elastic IP and Route 53](#use-elastic-ip-and-route-53)
- [**7. Global Considerations**](#7-global-considerations) (16 videos)
  - [Understand CloudFront](#understand-cloudfront)
  - [Create CloudFront distribution](#create-cloudfront-distribution)
  - [Explore CloudFront distribution](#explore-cloudfront-distribution)
  - [Explore CloudFront reporting](#explore-cloudfront-reporting)
  - [Restrict geographic access in CloudFront](#restrict-geographic-access-in-cloudfront)
  - [Delete CloudFront distribution](#delete-cloudfront-distribution)
  - [Understand Global Accelerator](#understand-global-accelerator)
  - [Explore a Global Accelerator scenario](#explore-a-global-accelerator-scenario)
  - [Configure Global Accelerator](#configure-global-accelerator)
  - [Explore Global Accelerator](#explore-global-accelerator)
  - [Delete Global Accelerator](#delete-global-accelerator)
  - [Understand API Gateway](#understand-api-gateway)
  - [Configure API Gateway](#configure-api-gateway)
  - [Explore API Gateway](#explore-api-gateway)
  - [Throttling with API Gateway](#throttling-with-api-gateway)
  - [Delete API Gateway](#delete-api-gateway)
- [**8. Troubleshooting Strategies**](#8-troubleshooting-strategies) (4 videos)
  - [Troubleshooting connectivity issues](#troubleshooting-connectivity-issues)
  - [Challenge: Troubleshooting scenario](#challenge-troubleshooting-scenario)
  - [Solution: Troubleshooting scenario](#solution-troubleshooting-scenario)
  - [Troubleshooting cleanup](#troubleshooting-cleanup)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [AWS networking overview](https://www.linkedin.com/learning/aws-networking-14125632/aws-networking-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/aws-networking-overview?u=76281980&t=0)** - [Sharif] Hi, I'm Sharif Nijim, and I'd like to welcome you to this course on networking in [[Amazon Web Services (AWS)|Amazon web services]]. Being well versed in networking will help you understand how your current infrastructure is set up, and how your applications work. This course is designed to give you an appreciation of the networking tools available within AWS. We'll start off by exploring a tool AWS calls Virtual Private Cloud. Virtual Private Cloud, or VPC, allows you to build the data center of your dreams, hosted in AWS. We'll look at how it's possible to connect AWS with external infrastructure. We'll dive deeply into the components that make up a VPC. We will explore effective strategies, and tools for keeping the resources in your VPC secure. We will also spend some time with Route 53, the AWS tool for DNS and traffic flow management. Let's get moving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Env Vars:** aws (5), vpc (3), dns (1)
> **CLI Commands:** aws (5), make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [sharif] (1)

#### [What you should know](https://www.linkedin.com/learning/aws-networking-14125632/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/what-you-should-know?u=76281980&t=0)** - [Instructor] I like to think of AWS as the air that we breathe in order to provide IT services to people. AWS has an abundance of services. And by selecting from the available network, compute, database and storage components, you can design and infrastructure to support any business requirement you may have. This course has some follow along exercises, and I think you'll find it most valuable if you have your own AWS account. You can create one for free. While no prior AWS knowledge is necessary for this course, it certainly doesn't hurt. If you have the option, I'd recommend learning about security in AWS before diving into networking, should have an awareness of basic [[Computer Networking]] concepts and understanding of server virtualization is useful as is some exposure to command-line tools. Think of this course as a tasting menu from the chef's table of AWS networking. One thing you should be aware of, a couple of the exercises I cover have a nominal cost associated with them. I will be sure to highlight this in the moment to make you fully aware. This course will help you develop an appreciation of what is possible within AWS. You will really like the networking flexibility AWS gives you. Getting your hands on virtual private cloud components, security groups and network access control lists will arm you with the practical knowledge you need to cement your conceptual knowledge. At the end, you should walk away with a strong understanding of networking in AWS and feel ready to tackle your own networking challenges. All right, let's go!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Networking]] (1)
> **CLI Commands:** aws (9), find (1), make (1)
> **Env Vars:** aws (9)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 1. AWS Network Foundations

[↑ Back to Table of Contents](#table-of-contents)

#### [Virtual Private Cloud (VPC) overview](https://www.linkedin.com/learning/aws-networking-14125632/virtual-private-cloud-vpc-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/virtual-private-cloud-vpc-overview?u=76281980&t=0)** - [Instructor] You've decided to use AWS as your infrastructure, as a service partner. By now, you've already spent time laying out how your people will securely access AWS services. Now, let's explore networking in AWS. Specifically, let's dive into what a virtual private cloud or a VPC is and how you can use VPCs to manage network traffic for resources inside of AWS, as well as managed connectivity to any local infrastructure you may have. We know that AWS provides infrastructure services on a global scale. And that AWS subdivides the world into regions. Each region contains at least two availability zones or AZs. Each AZ is made up of multiple complete independent data centers. So, what is a virtual private cloud? Simply put a VPC is a logically isolated virtual network segment of the AWS Cloud, tied to your AWS account. Each VPC is contained within a single AWS region. When you create a VPC, you specify its IP address range. You also get to decide whether or not the servers you deploy within a VPC are publicly accessible. And whether or not those servers can communicate with each other. It's also important to note that you can connect a VPC to local, private data centers. Let's explore the components that make up a VPC. Depending on your existing networking knowledge, some VPC components will feel familiar to you. As you might expect, since a VPC is a logical network,
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/virtual-private-cloud-vpc-overview?u=76281980&t=95)** it can be divided into subnets of various sizes. Subnets can be private or public. That is they can contain private or public resources. You can manipulate how traffic flows in to and out of subnets by using route tables. If you need access to the internet from within a VPC, you need to use an internet gateway. If you're making use of IPv6 and want to get to the internet, but want to prohibit inbound connections, you need to use an egress-only gateway. If you want to enable private access to other AWS services without traversing the internet, VPC endpoints are available for a variety of different services. To let resources in a private subnet connect to the internet, AWS offers network address translation or NAT gateways. This is essentially NAT as a service. These are very handy components, as you don't have to set up a server to handle network address translation for you. They are also highly available, so that concern is covered off as well. If you have external resources, you wish to connect privately to resources within AWS, you'll need a virtual private gateway. If you're looking to simplify network management across multiple VPCs and potentially local data centers, AWS offers a transit gateway. Finally, if you need to establish connectivity between VPCs, it is possible to establish appearing connection. [[DHCP]] option sets allow you to create your own DHCP options. For instance, if you want to specify your own DNS servers
>
> **[3:11](https://www.linkedin.com/learning/aws-networking-14125632/virtual-private-cloud-vpc-overview?u=76281980&t=191)** instead of using the AWS provided DNS, you can create an option set and assign it to a VPC. Keep in mind that a VPC can only have one DHCP option set. To put some context around these components, let's dive into an example. Let's say you want to operate services within three availability zones in a given region. You may manage some web server, application servers, and database servers. In addition, you make use of some AWS managed relational database services. Just as you would with an on-premise data center, you want to be able to control network access to these servers. For instance, you would want to allow your [[Web Servers]] to be accessible by anyone in the world. Simultaneously, you want to ensure that your application and database servers remain private. A VPC is a network container in which you can place all of these components. Complete with all the tools you need to granularly configure network access. Let's take a closer look at the VPC components you need to let your web servers be publicly accessible while keeping your application and database server private. To set this up, you need a VPC with two subnets. One for containing private application and database servers and another for your public facing web servers. In order to let the servers within these subnets communicate with each other, you will need to configure a router. Just like any physical router, you may have experience with. A router in AWS directs traffic between subnets. To get to the internet,
>
> **[4:43](https://www.linkedin.com/learning/aws-networking-14125632/virtual-private-cloud-vpc-overview?u=76281980&t=283)** you'll need to configure an internet gateway. And internet gateway is a highly available VPC component that connects a VPC to the internet. In order to be able to patch the servers in your private subnet, they'll need to be able to initiate a connection to the internet. On premises, you are probably accustomed to configuring network address translation or NAT. AWS makes this a little easier by offering a NAT gateway. And NAT gateway is a highly available service for allowing private subnets to access the internet and needs to be contained in a public subnet. Of course to make all of this work, you'll need to configure the route tables for each of your subnets appropriately. The route table in your public subnet needs to point to the internet gateway. Similarly, the route table in your private subnet needs to point to the NAT gateway in your public subnet. Let's say that you are storing some assets in S3. You can set up a VPC endpoint for S3, if you want communication between the services within your VPC to access S3 privately. That means it will use the AWS internal networking instead of traversing the public internet. That was kind of dense. So, how about a quick recap? At this point, you should be aware that a VPC represents a logically private center in AWS. You should also identify that an internet gateway is what you attach to a VPC, so the systems within the VPC can access the internet. You should also recognize the need to update the route tables inside your VPC to point to an internet gateway for internet access. You should understand that in order for servers
>
> **[6:17](https://www.linkedin.com/learning/aws-networking-14125632/virtual-private-cloud-vpc-overview?u=76281980&t=377)** in a private subnet to access the internet, NAT gateways are available as an option. Finally, if you want to access AWS resources privately, you can do so using a VPC endpoint. These are the components that we will configure as this course progresses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (3), [[Web Servers]] (3)
> **Env Vars:** vpc (25), aws (20), nat (7), dhcp (3), dns (2)
> **CLI Commands:** aws (20), make (3), az (1)
> **Prerequisites:** configure (5), you'll need (3), set up (2)
> **Definitions:** is a  (6)
> **Analogies:** for instance (2), just like (1)
> **Warnings:** keep in mind (1), be aware (1)
> **Speakers:** - [instructor] (1)

#### [Establish private connections](https://www.linkedin.com/learning/aws-networking-14125632/establish-private-connections?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/establish-private-connections?u=76281980&t=0)** - [Instructor] With virtual private cloud, you can build a logical data center in AWS. However, most established companies have existing equipment and services installed in a local data center or a co-location facility. Let's explore different options for securely connecting existing infrastructure to AWS, as well as how to link multiple VPCs together. Terms you'll want to be familiar with for establishing connections from AWS to external environments include the customer gateway. A customer gateway is a physical networking appliance in an on-premise facility to which all AWS bound network traffic is anchored. A virtual private gateway is the virtual counterpart to a customer gateway. It resides inside of AWS and is the anchor point for all on-premises bound network traffic. With these infrastructure components in place, you need a site-to-site VPN in order for machines in a local data center to communicate with services in AWS. When the VPN connection is established, network traffic flow securely over an encrypted VPN tunnel. One way to connect local resources with your AWS account is with an internet protocol security or IPsec VPN tunnel between your existing facilities and your AWS VPC. Let's visualize the components required to make that happen. After creating a VPC, you want to attach it back to an existing data center you operate. In this context, a data center is any facility where you have physical equipment.
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/establish-private-connections?u=76281980&t=93)** You want the servers in your physical data center to communicate privately with your elastic compute cloud or [[Amazon EC2|EC2]] instances. An EC2 instance is simply a virtual server hosted in AWS. You want your private network address space to encompass both your local and AWS hosted facilities. To facilitate this, AWS supports IPsec VPN tunnels. And IPsec tunnel needs an anchor configured on both sides in order to work. In your AWS account, the anchor is called a virtual private gateway or VPG. Once you create a VPG, you need to attach it to the VPC containing the servers you want to address privately. Meanwhile, in your physical facility, you need to configure what AWS calls a customer gateway. A customer gateway is a networking appliance you purchase and can configure to establish an IPsec tunnel. Networking companies, including Cisco and Juniper have this type of equipment available. In this configuration, the path VPC VPN tunnel takes between your local data center and AWS is routed over the public internet. Organizations that expect to continue to operate in on-premise facility may want to investigate a different offering from AWS called Direct Connect. Instead of a VPN tunnel, Direct Connect offers a dedicated network connection to AWS. Available only in Direct Connect locations or through the AWS partner network, Direct Connect establishes a physical link
>
> **[3:05](https://www.linkedin.com/learning/aws-networking-14125632/establish-private-connections?u=76281980&t=185)** between a router you own and an AWS Direct Connect router. The result is that the private traffic between your local data center and AWS gets a dedicated, consistent network path instead of getting routed over the internet. Depending on how much data you move in and out of AWS, Direct Connect can decrease your overall bandwidth costs. This comes from reducing the bandwidth needed from your ISP while benefiting from lower data egress pricing. In order to prevent Direct Connect from being a single point of failure, you have a couple of options. The first is to establish two Direct Connect links. Since that can be somewhat pricey, you might want to consider establishing an IPsec VPN link as a backup. You may be in a situation where you and a partner organization are both using resources in AWS. In this scenario, it is likely that you want network traffic between you and your partner to remain private. This can be accomplished with VPC peering. Let's say you are running some EC2 instances in a VPC in US West 2 which is an Oregon. You need to privately access some EC2 instances within a partner's VPC in a separate AWS account. This account also happens to be located in US West 2, Oregon. If you want to communicate privately between the two, AWS supports the ability to establish a private VPC peering connection. The unique thing about a VPC peering connection is that it doesn't need a gateway or VPN connection as it makes use of internal AWS [[Routing]] infrastructure. A VPC peering connection is highly available
>
> **[4:40](https://www.linkedin.com/learning/aws-networking-14125632/establish-private-connections?u=76281980&t=280)** and shouldn't be considered as a single point of failure. If you decide to move your resources to a different region like US East 2, Ohio, there's no need to worry, VPC peering connections can span regions. Another scenario you may encounter is the need to connect local assets with multiple VPCs. Instead of a VPN connection for each VPC, you can centralize route management using a transit gateway. Let's recap the private connectivity options for AWS. To connect to an on-premise environment, you can set up an IPsec VPN tunnel between your local facility and AWS. To do so you'll need to configure a virtual private gateway within AWS and a customer gateway in your local facility. Alternatively, Direct Connect exists for organizations that are looking for a consistent, highly performing network path between local facilities and AWS. With VPC peering, you can establish private connectivity between VPCs. This can be done within a single region or across different regions. It can be done for multiple VPCs within an account or across separate AWS accounts. Finally, transit gateway simplifies management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Routing]] (1)
> **Env Vars:** aws (29), vpc (13), vpn (11), ec2 (4), vpg (2)
> **CLI Commands:** aws (29), make (1)
> **Prerequisites:** configure (3), required to (1), set up (1), you'll need (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Route 53 overview](https://www.linkedin.com/learning/aws-networking-14125632/route-53-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/route-53-overview?u=76281980&t=0)** - [Instructor] Route 53 is an AWS tool for providing [[Domain Name System (DNS)|domain name system]], or DNS services. Let's explore some of the defining features of Route 53. Cleverly named after the port used for DNS queries, Route 53 provides name address resolution. It maps a user-friendly name like www.[google.com](https://google.com) to an IP address like 216.58.216.206. A more interesting capability of Route 53 is DNS failover. Configured properly, Route 53 can detect a website outage and redirect people to a different location where the website is working. With global traffic management, Route 53 allows you to create traffic policies that optimize your user's experience. Let's explore the type of [[Routing]] policies you can implement with Route 53. One option is the ability to create a failover policy. Suppose your website operates out of the U.S. west region with a warm standby in the U.S. east region. Operating normally, Route 53 is sending people to U.S. west. When Route 53 detects an application failure, traffic is directed to your warm standby in U.S. east. Route 53 also supports weighted round-robin. Suppose you operate a website out of both U.S. west and U.S. east with one record set per region. After observing traffic patterns, you notice that a bit more of the traffic hitting your site
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/route-53-overview?u=76281980&t=94)** originates on the west coast of the United States. To optimize your [[User Experience (UX)|user experience]], you can add capacity in U.S. west, then implement a 3/2 route policy. AWS will route traffic based on the weight assigned to a record set divided by the sum of all weights for all record sets. In this case, U.S. west would receive 3/5 of the requests while U.S. east would receive the remaining 2/5. A particularly nifty feature of AWS is latency-based routing. Suppose your website serves a global audience. You decide to operate your website in the U.S. west and EU central regions, respectively located in the U.S. state of Oregon and Frankfurt, Germany. When you configure latency-based routing, each DNS query Route 53 responds to will take the originating IP into account. It will compare the latency to the regions hosting your application and direct traffic to the one with the lowest latency. For instance, if a user in Italy hits your site, Route 53 knows that the latency to Frankfurt is less than the latency to Oregon and will direct the user to EU central. Similarly, a user originating in the U.S. state of Washington will be routed to U.S. west, which is located right next door in Oregon. Your location based routing is a feature of Route 53 that allows you to route traffic based on correlating IP addresses to physical locations. For instance,
>
> **[3:06](https://www.linkedin.com/learning/aws-networking-14125632/route-53-overview?u=76281980&t=186)** say you are a U.S. based company with a European presence. As such, you have to abide by the European union's general data protection regulation and keep personal data within the EU. To do so, you operate your website in U.S. west and EU central and configure geo DNS in Route 53. Based on originating IP, users will be routed to the appropriate region. For instance, a user whose IP address maps to France will be sent to EU central. While a user originating from Texas will be sent to U.S. west. Keep in mind that with geo DNS, you need to configure a default record resource set or else Route 53 will return a no answer response if it is unable to map an IP address to a physical location. As an AWS service, Route 53 has some neat features that are AWS specific. For starters, you can configure Route 53 as private DNS within an AWS virtual private cloud. If you use CloudFront, AWS' global content delivery network to deliver web content, you can specify CloudFront as the zone apex within Route 53. A zone apex is a root domain. For example, www.[mycompany.com](https://mycompany.com). The same is true for S3, AWS' web enabled object storage offering. It is possible to host a static website entirely on S3 and use Route 53 for DNS. Finally, you can also map your zone apex to an elastic load balancer.
>
> **[4:39](https://www.linkedin.com/learning/aws-networking-14125632/route-53-overview?u=76281980&t=279)** This is a thing of beauty as Route 53 handles the health checks for each instance behind an ELB. If you have multiple availability zones and lose instances in one of those AZs, Route 53 will detect the anomaly and route traffic away from the failure to a different endpoint.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (4), [[Domain Name System (DNS)|Domain name system]] (1), [[Google]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** aws (8), dns (8), elb (1)
> **CLI Commands:** aws (8)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for instance (3), for example (1)
> **Prerequisites:** configure (4)
> **URLs:** [google.com](https://google.com) (1), [mycompany.com](https://mycompany.com) (1)
> **Versions:** 216.58.216 (1)

#### [The command-line interface (CLI) for Mac](https://www.linkedin.com/learning/aws-networking-14125632/the-command-line-interface-cli-for-mac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/the-command-line-interface-cli-for-mac?u=76281980&t=0)** - [Instructor] Over the years, AWS has done an excellent job evolving the web console into a remarkably approachable, powerful tool for managing infrastructure. Throughout this course, I'll primarily be working in the console. That said, only through automation is the management of your AWS infrastructure scalable. One of the many available automation tools is the AWS Command-Line Interface, or [[CLI]]. I'll be using it at times throughout this course, so let's take a moment to see how to install and configure it. If you already have the CLI installed, and are comfortable working with it, please feel free to skip to the next chapter. Here, I've opened a web browser on the left and a terminal window on the right. With this setup I can read instructions in the browser, I can also copy commands from the browser into my terminal. The easiest way to find the CLI is to fire up your favorite search engine and search for download aws cli. In this case I'm on a Mac, so I'm going to add the Mac suffix to that search. The first link takes me to the comprehensive AWS documentation, where I can download and install the CLI. I happen to be doing this install at a point of transition. Note that the CLI no longer supports versions 2.6 or 3.3 of [[Python (Programming Language)|Python]]. Scrolling down a bit on this page, I get to the Prerequisites. Here I can check the Python version, so I copy that command and paste it into my terminal. Wonderful, I already have Python 2.7 installed on my laptop. I'm going to proceed, and install the CLI
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/the-command-line-interface-cli-for-mac?u=76281980&t=95)** using the bundled installer. Scrolling down a bit more, I can simply copy that command and paste it into my terminal. Okay, I see that the curl command, to download the bundle, has completed as has the unzip command. All I need to do now is hit Enter and the Sudu command, to install the CLI, will fire off. Here, I have to specify the password for the user on my laptop. After a couple of moments, I get the confirmation message that the CLI has been installed. Now I can simply verify which version of the CLI I have running. Wonderful, that looks great. All that's left now is to configure it. This can be done by simply running AWS Configure. I am prompted for an access key ID and a secret access key. I'm going to choose to not specify those at this time. That said, I am going to specify a default region of us-west2. I also am prompted for a default output format, which I'm simply going to skip at this time. When using the CLI, I prefer to use named profiles. By passing a profile parameter into the CLI, when executing a command, it's possible to use different sets of AWS credentials. This is particularly powerful if you actively use the CLI with multiple AWS accounts. On a Mac, these files are stored in the .aws directory under your home directory. The first file is a config file, and the second is a credentials file.
>
> **[3:08](https://www.linkedin.com/learning/aws-networking-14125632/the-command-line-interface-cli-for-mac?u=76281980&t=188)** I have pre-created those files for the accounts I'm going to use. Let's take a quick look at them now. In the config file, I can see the five named profiles I've set up, each with a default region. Examining the credentials file, I see the access key and secret access key that I'm using for each profile. I'm going to copy both the config and credentials file into the .aws directory for later use. In the next video, I'll run through installing the CLI on a [[Windows]] machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (14), [[Python (Programming Language)|Python]] (3), [[Windows]] (1)
> **Env Vars:** cli (13), aws (7)
> **CLI Commands:** aws (10), python (3), find (1), curl (1), unzip (1)
> **Prerequisites:** install (5), configure (3), setup (1), set up (1)
> **Tools:** terminal (4)
> **Versions:** 2.6 (1), 3.3 (1), python 2 (1)
> **Cross-References:** next chapter (1), in the next (1)
> **Definitions:** is a  (2)

#### [The command-line interface (CLI) for Windows](https://www.linkedin.com/learning/aws-networking-14125632/the-command-line-interface-cli-for-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/the-command-line-interface-cli-for-windows?u=76281980&t=0)** - [Instructor] Let's proceed with installing the AWS [[CLI]] for [[Windows]]. Once again, if you already have the CLI installed, or are not a Windows user, feel free to skip to the next chapter. On my Windows machine, I have a browser open to my favorite search engine. Here, I simply search for download AWS CLI. Since I'm on a Windows machine, it makes sense in include for Windows. Selecting the first link takes me to the instruction page for how to install on Windows. I want to make this as easy as possible, so I choose the first installation link, installing with the MSI installer. Since I'm running 64 bit Windows, I select the first download install link. It's a relatively small file, and downloads rather quickly. I go ahead and open up the installer which works just like any other Windows installer. I first need to accept the license agreement. There's no need for me to change the default installation location, so I simply click next. With that done, all I need to do is click install and wait. This goes relatively quickly, taking perhaps 45 seconds to a minute. Note that the machine I'm installing on is a T2 Micro. One useful hint when installing software, even if the end state is a smaller [[Amazon EC2|EC2]] instance is to create a larger instance when doing the install. Then when it's configured appropriately, you can simply size it down. After receiving the message
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/the-command-line-interface-cli-for-windows?u=76281980&t=93)** that the installation has been successful, we can validate it. To do that, we need to simply pop open a command prompt. Here I can simply check the version of the CLI that's installed. Wonderful, I get a confirmation that the CLI has been installed successfully. At this point, I like to go through the configure process. The only thing I specify is a default region. Once again, I prefer to use named profiles when using the CLI. That way I can be explicit about which credentials I'm using at a given point in time. Specifying a default region creates the .AWS directory in my user's home directory. We can see that the only thing it contains is the config file. Opening that up, we see the default region that I specified. Once again, I have the default config and credential files on my machine already. Note that in my config file, I have five different named profiles. Similarly, I have the corresponding credentials in my credentials file. To move those files into the right place, I fire up Windows Explorer and navigate to my user's home directory. I simply select the config and credentials files, and move them into the .AWS folder. Wonderful, now I'm all ready to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (9), [[CLI]] (6), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** cli (6), aws (4), msi (1), ec2 (1)
> **CLI Commands:** aws (4), make (1)
> **Prerequisites:** install (4), configure (1)
> **UI Navigation:** select the (2), navigate to (1)
> **Definitions:** is a  (3)
> **Warnings:** note that (2)
> **Cross-References:** next chapter (1)


### 2. Virtual Private Cloud

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the default VPC](https://www.linkedin.com/learning/aws-networking-14125632/explore-the-default-vpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-the-default-vpc?u=76281980&t=0)** - [Instructor] Virtual Private Cloud, or VPC, is the networking cornerstone of running your IT services in AWS, as it lets you set up your network and IP space however you want. When you create an AWS account, you get a default VPC in every region that is ready to use. Let's take a peek inside of the US East Ohio region's default VPC to understand what you get right out of the box. First off, the default VPC has a Classless Inter-Domain [[Routing]], or CIDR, range of /16. The default VPC's CIDR block is 172.31.0.0/16, and that's the case for the default VPC in every region inside of AWS. This means that the default VPC can handle 65,536 private IP addresses. However, not all of them are usable, as you will see. The default VPC also creates a subnet in each availability zone in the region. All regions have a minimum of two AZs while some regions have more. In this case, in Ohio, there are three. Each default subnet has a CIDR of /20 which can handle 4,096 IP addresses. AWS reserves some IPs for internal services so you end up with 4,091 usable IPs. The default VPC also comes with an internet gateway attached and with a rule in the main route table that sends all traffic intended for the internet to the internet gateway. A default security group is created
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/explore-the-default-vpc?u=76281980&t=93)** as well as a default network access control list, allowing all inbound and outbound traffic. While you are free to use the default VPC and modify its configuration, it's out-of-the-box setup is broadly permissive. It is designed as the catch-all location into which [[Amazon EC2|EC2]] [[Virtual Machines]] called instances get dumped in the event they aren't assigned to a VPC. I prefer to create my own VPCs and avoid using the default VPC. This way, I can be sure that when I create servers or [[Databases]] in AWS, I know exactly where they are going. Deleting a region's default VPC is a dangerous proposition, as doing so can render some AWS services in that region inoperable. While it's possible for AWS support to create a new default VPC in that region, this is painful and to be avoided. I find that it's simply better to not use it. Let's go into the console and annotate the default VPC that we don't use it or its components accidentally. Here I am logged into the main AWS Console. If you look at the top-right corner of the screen, you can see that I am in the Ohio region. If you drop that down, you can see all of the regions that are available inside of AWS. When you sign into the web console, it remembers the last region you were signed into. That said, it's a best practice to double-check the region indicator in the top-right corner to ensure you're in the region you want to be every time you log in. To navigate to the VPC configuration page, I simply start typing VPC into the search bar,
>
> **[3:08](https://www.linkedin.com/learning/aws-networking-14125632/explore-the-default-vpc?u=76281980&t=188)** find VPC Isolated Cloud Resources, and click on that link. This brings me to the VPC Dashboard. The VPC Dashboard shows me an overview of all VPC-related services operating in a given region. One useful feature I like is the See all regions dropdown. Remember that we said all regions have at least two availability zones while some have more? Dropping down the See all regions menu allows you to see the number of subnets associated with the default VPC in each region. We can see at the time of this recording that the Canada Central region looks like it has two availability zones while North Virginia has six and Oregon has four. Specifically for Ohio, I see that I have one VPC active, three subnets, one route table, one internet gateway, one [[DHCP]] option set, one network ACL, and one security group. Clicking on the VPC link in the center of the screen brings me to the VPC detail page. Here I see that the default /16 VPC is available. However, notice that the name is blank. All default VPC components are unnamed. The name tag is of special significance in AWS and is particularly useful when interacting with the web console. I'm going to rename the default VPC now by hovering over the Name area and clicking the little pencil edit icon. Instead of leaving it unnamed,
>
> **[4:42](https://www.linkedin.com/learning/aws-networking-14125632/explore-the-default-vpc?u=76281980&t=282)** I'm going to call it DONOTUSE_VPC. That's a little lengthy, but expanding the Name column allows me to see the entire thing. Okay, now let's rename the [[Representational State Transfer (REST)|rest]] of the components. Clicking on the VPC Dashboard link brings me back to the Overview where I can see subnets, route tables, et cetera. Clicking on the Subnets section brings me to the subnet configuration page. Again, the subnet names are blank. Note that each one is a /20 with available 4,091 IPs, and each one corresponds to an availability zone. Note that in the VPC column, there's the internal VPC ID, which is hard to read and not very friendly. However, remember when we talked about name having a special significance? The name assigned to a component also appears in the web console. That makes it much easier when navigating in the future. To that end, let's go ahead and label these subnets as DONOTUSE as well. The first one happens to be an availability zone B, so I'm going to call this DONOTUSE_SUBNETB. The next one happens to be an availability zone A, so I'm going to repeat the process. And the last one is in AZC. Okay, the subnets are all renamed. Let's go back to the VPC Dashboard and see what we have to do next. Let's take a peek at the Route Table configuration. So, again, we see the route table's internal ID
>
> **[6:17](https://www.linkedin.com/learning/aws-networking-14125632/explore-the-default-vpc?u=76281980&t=377)** in the Route Table ID column, rtb-, et cetera et cetera. And in the lower right-hand corner of the screen, under the Summary section, we see that this route table is associated with the main VPC, that DONOTUSE_VPC, that default. So, again, I want to specify that this is the default route table and that I do not want to use it. Let's head back to the VPC Dashboard and see what's next. Okay, let's do the internet gateway. So, again, on the Internet Gateway page, we see the default ID for the internet gateway, which is immutable, and then we also see the VPC to which it's attached. Let's go ahead and label that as DONOTUSE_NOW. Wonderful, let's head back to the main dashboard. So we've done VPC, we've done subnet, we've done route table, we've done internet gateway. The DHCP options set is an interesting one. I don't label this as DONOTUSE because I tend to use the Amazon-provided DNS. Instead, what I do is I just label it so it's clear in my mind this is the Amazon-provided DNS, so I just say AWS_DNS. Heading back to the dashboard, we only have a couple of resources to go: network ACLs and security groups. Clicking on the Network ACL link in the center section of the screen takes me to the Network ACL configuration section. Once again, I see the default network ACL ID as well as the VPC to which it's associated. I'm going to go ahead and rename it now.
>
> **[7:53](https://www.linkedin.com/learning/aws-networking-14125632/explore-the-default-vpc?u=76281980&t=473)** While we're here, let's take a quick peek at the Inbound and Outbound Rules tabs in the bottom half of the screen. The Inbound Rules tab shows that all inbound traffic is allowed. Clicking on the Outbound Rules tab, we see that all outbound rules are allowed as well. This is unique to the default nACL. Every nACL you create denies all traffic by default. Clicking on the Subnet associations tab tells us that this nACL is associated with all of the default subnets. Again, I can just expand the Subnet ID column to see the name that I associated with the subnets earlier. Instead of navigating back to the VPC Dashboard, I can go directly to the security groups configuration screen by clicking the Security Groups link in the left-hand navigation pane. Here we have that default security group, and, once again, it doesn't have a name. I'm going to go ahead and assign it one now. Let's go ahead and expand the bottom section of the screen and take a peek at the inbound rules for the security group. Here we see that all traffic, all protocols, and all port ranges are allowed from this group itself. From an outbound standpoint, all traffic is allowed as well. Let's head back to the VPC Dashboard. Okay, by this point, we've flown through the default VPC components and assigned each one a name. Now let's go forward and create a VPC of our own.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (2), [[Routing]] (1), [[Amazon EC2|Ec2]] (1), [[Virtual Machines]] (1), [[Databases]] (1)
> **Env Vars:** vpc (41), aws (10), acl (4), cidr (3), dhcp (2)
> **CLI Commands:** aws (10), find (2)
> **Code Identifiers:** nacl (3)
> **UI Navigation:** navigate to (1), click on (1), dropdown (1)
> **Definitions:** means that (1), is a  (1), is an  (1)
> **Cross-References:** we talked about (1), go back to (1)
> **Warnings:** note that (2)

#### [Explore VPC templates](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-templates?u=76281980&t=0)** - [Instructor] VPCs allow you to configure your network resources in AWS to meet just about any network design you may have. AWS provides templates to guide you. Let's dive in and explore the VPC templates, currently on offer by AWS. Here, I am logged into the AWS Console. Let's take a quick look at the menu bar at the top of the screen. On the left hand side, there are menus to take you to different configuration screens within the console. Dropping down the Services link displays the exhaustive list of AWS services. Keep in mind that AWS innovates frequently, so this list will change over time. The right-hand side of the screen shows information about the account itself. Here, I can see that I'm logged in as (indistinct).admin to the L I L S 20 account. I also see that I'm operating in Ohio. Okay. Let's get to the VPC networking page. Since I was recently looking at VPCs a link to VPC shows up under the recently visited services area in the center of the console. I'm going to go ahead and simply click that link to get to the VPC dashboard. Remember the information on the dashboard reflects the default VPC configurations that AWS automatically provisions. To get started with exploring the VPC templates on offer. I'm going to click the blue launch VPC wizard button near the top of the page. This starts the VPC configuration wizard. AWS currently offers four templates from which to choose. The first template creates a VPC
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-templates?u=76281980&t=96)** with a single public sub-net. The text in the center portion of the screen describes what is about to be created. It is accompanied on the right side of the screen by a concise visual looking at this option. I see that the wizard will create a VPC with a slash 16 network. It will also create a slash 24 sub-net containing 251 available IP addresses. Why only 251 instead of 254, because AWS reserves the first three for internal communication needs. The wizard also built an internet gateway and attaches it to the VPC. So any [[Amazon EC2|EC2]] instance launched in the VPC can access the internet. Since the wizard allocates a very small number of the IP's available in the slash 16 network, you have plenty of room to grow through the use of additional sub-nets. Of course, if you know, you will need more IP's to start with. You could change that slash 24 to a slash 23 or better. I don't have the number of hosts per sub-net mask committed to memory. So I keep a cheat sheet handy. If you do a simple internet web search for sub-net mask cheat sheet, you'll find something similar. Let's pay particular attention to the slash 23 line on this chart. This chart allows for 510 hosts in a slash 23. However, since AWS reserves, the first few IP's is for internal services. You would end up with 507 usable IP's, not the 510 listed in this chart. The second template is a VPC with public and private sub-nets.
>
> **[3:10](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-templates?u=76281980&t=190)** The slash 24 default allocation for the subnets gives you 251 usable IP's. Again, leaving you with room to grow. The third template picks up where the second template left off and adds a [[Hardware]] VPN into the picture. This is a great place to start. If you have an on-premise data center, you need to connect with AWS. The fourth VPC wizard template will create a completely private subnet and VPN connection to an on-premise data center. If you don't want any of the server instances, you'll be running in AWS to be accessible from the internet. This is a great place to start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1), [[Hardware]] (1)
> **Env Vars:** vpc (14), aws (12), vpn (2), ec2 (1)
> **CLI Commands:** aws (12), find (1)
> **Exercise Files:** template (5)
> **Definitions:** is a  (3)
> **Tools:** aws console (1)
> **Analogies:** picture (1)
> **Warnings:** keep in mind (1)

#### [Handcrafting a VPC](https://www.linkedin.com/learning/aws-networking-14125632/handcrafting-a-vpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/handcrafting-a-vpc?u=76281980&t=0)** - [Instructor] The VPC creation wizards that AWS provides via the web console give you a leg up when setting up your network in the cloud. That said, I'm a firm believer in having a deep understanding of what's going on under the covers before using wizards. This is especially true when creating infrastructure for the first time. Therefore, let's handcraft a VPC from scratch to cement that knowledge. I'm going to build the network to support a public-facing web application which uses S3 for storing static assets. This application consists of public [[Web Servers]], private application servers, and a relational database services, or RDS, database. To do so, I will build a VPC containing two subnets. The first subnet will be public. This subnet will contain my [[Amazon EC2|EC2]] web servers. I will create an internet gateway so that my web servers can get to the internet. I will then edit the route table so that traffic from my web servers gets routed to the internet gateway and out to the internet. The web app uses S3 for static content. I want to access S3 privately instead of traversing the public internet for this content. This is both faster from a performance standpoint, and cheaper from a financial one. Therefore, I will also set up a VPC endpoint for S3. I'm also going to need a private subnet. This will hold my internal EC2 instances and RDS instance. In order to allow server instances within my private subnet to get to the internet to pull down patches, I'm going to set up a NAT gateway.
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/handcrafting-a-vpc?u=76281980&t=94)** If you are following along, please be aware that setting up a NAT gateway will incur a nominal hourly and per-gigabyte process charge. For more details on pricing, please refer to the AWS pricing page. I'm already in the AWS console at the VPC dashboard. To get started from the VPC dashboard, I click on the your VPCs link in the left-hand navigation pane. This shows the list of currently available VPCs. In this case, there's only the default one that we labeled earlier. To get started, I click the blue create VPC button at the top of the screen. This kicks off the wizard, prompting me for the name and IPv4 CIDR block for this VPC. Clicking in the name tag field, I type the name of the VPC I want. In this case, simply 'demo.' Note that the name tag isn't immutable. If it's something that I wanted to rename later on, it's something that can be done easily from the VPC page. In the second field, I get to specify the IP range and size of the VPC. AWS provides useful helper text, which I can get to by mousing over the little i for information icon. This brings up an explanation of what needs to be in this box, along with what the range limits are. VPCs can be as big as a slash 16, and as small as a slash 28, which is just over 10 hosts. Unlike the name tag, this decision is permanent for the life of the VPC.
>
> **[3:08](https://www.linkedin.com/learning/aws-networking-14125632/handcrafting-a-vpc?u=76281980&t=188)** If you need more hosts later on, you won't be able to resize the VPC. Therefore, it's best to be conservative and over-allocate. I'm going to go with a slash 22 network, as that will give me room for just over 1,000 hosts. So I go ahead and type in 192.168.0.0/22. I have an option to configure an IPv6 CIDR block. I'm not using IPv6 at the moment, so I'm going to skip it for now. The last box on this screen has to do with tenancy. Dedicated tendency is like renting a dedicated piece of [[Hardware]] from AWS, which my use case doesn't warrant. Therefore, instead of selecting dedicated from this dropdown, I'm going to go ahead and go with the default. To progress to the next step of the wizard, I click the blue create button in the lower right corner of the screen. After a brief pause, I get the success message that the VPC was created. Note that the VPC ID is a hotlink. Clicking on that takes me back to the your VPCs section and applies a filter to show just the VPC that was created. Note that it has the demo name we specified, the IPv4 CIDR block, and the [[DHCP]] option set, which is AWS-provided. If I clear that filter by clicking on the little x, it will show all VPCs that I have in this region. Now let's take a quick peek at the main route table for this new VPC. Going to the main route table column
>
> **[4:42](https://www.linkedin.com/learning/aws-networking-14125632/handcrafting-a-vpc?u=76281980&t=282)** on the right side of the screen, I click the link, which takes me to the route table section. The first thing I'm going to do is specify a name for the route table. Since this route table is associated with my demo VPC, I'm simply going to call it 'demo RT' for demo route table. To get to the main VPC configuration page, I click on the VPC ID link in the VPC ID column. The other thing I want to name while I'm here is the network ACL. Down in the bottom section of the screen, I see a hotlink to the network ACL for this VPC. Clicking on it brings me to the network ACL configuration page. Clicking on the little pencil icon, I go ahead and supply a name that is consistent with my naming convention. I click the VPC link to take me back to the configuration page once more. I'm going to resize the bottom of the screen a little bit so that the entire description is visible. Now I can see that the route table has a name, the NACL has a name, and that I'm using the AWS-provided DHCP option set. Step back and be amazed for a moment. We just cordoned off a private section of the AWS cloud, and we didn't have to purchase a single piece of equipment to do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (4), [[Amazon EC2|Ec2]] (2), [[DHCP]] (2), [[Hardware]] (1)
> **Env Vars:** vpc (23), aws (8), cidr (3), acl (3), rds (2)
> **CLI Commands:** aws (8)
> **Warnings:** note that (3), be aware (1)
> **UI Navigation:** click on (2), dropdown (1)
> **Prerequisites:** set up (2), configure (1)
> **Versions:** 192.168.0 (1)
> **Tools:** aws console (1)

#### [Configure VPC subnets](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-subnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-subnets?u=76281980&t=0)** - [Instructor] Subnets are used to subdivide the IP space within a virtual private cloud. Of course, it is possible to configure multiple subnets within a VPC. Now that we have an empty VPC, let's go ahead and create a public and private subnet. Here I am at the VPC dashboard. To create a subnet, I go ahead and scan the left-hand nav and select subnets near the top. Clicking on that link shows the existing subnets in the Ohio region. I'm going to expand the name column just a little bit so that we can read the entire subnet name. We see that the only subnets that currently exist are the default ones associated with the default VPC. To create a new subnet, I click the blue Create subnet button near the top left portion of the screen. This brings up a page where I can specify the details about the subnet. The first thing I specify is the name. Since this will be a public subnet, I type in demo-pub. Again, this is something that can be changed later on. From the VPC dropdown, I select the demo VPC that I created. Note that this list shows every VPC available in this region. To make things simple, AWS shows the VPC's unique internal VPC ID, as well as its name tag. This is why I think it's very important to name resources inside of AWS. I like to specify an availability zone when creating subnets. This helps keep things logically defined in my head and will make things tidy
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-subnets?u=76281980&t=94)** if I want to add subnets in the future. For my public subnet, I'm going to pick us-east-2a. Since I've chosen availability zone A, I'm going to amend the name tag to reflect that. For the CIDR block, 250 individual hosts is more than enough for my purposes, so I specify 192.168.0.0/24. Okay, everything looks good here, so I go ahead and click the blue Create button on the lower right portion of the screen. After a brief pause, I get the success message that this subnet was created. Again, the subnet ID is a hot link, so I can simply click on it and see the details about it. I'm going to resize the lower half of the screen so I can confirm what I just did. I see the name of the subnet is reflected appropriately in the name column up above and I see that the IPv4 CIDR range is exactly what I specified. Note the available 251 addresses. Let's take a quick peek at the route table for this subnet. I can do that by simply clicking the route table associated with the subnet on the lower half of the screen. Once again, I'm going to resize the screen to make it a bit easier to read. Clicking on the Routes tab, we can see that all traffic within this subnet is routed locally. Any [[Amazon EC2|EC2]] instance placed into this subnet can't get to the internet as no internet gateway is configured yet for this VPC.
>
> **[3:07](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-subnets?u=76281980&t=187)** Now let's go ahead and create a private subnet. I'm going to want a bit more space for internal servers, so I'm going to go with the /23 private subnet. Since automation is the key to managing AWS at scale, let's create this via the AWS command line interface. First, I want to double check my named profile. I happen to be using a Mac terminal. If you're running [[Windows]], you'll want to be in a command shell or Bash environment, depending on how you've installed the AWS [[CLI]]. Regardless of your platform, the config file we're looking for is located in the .aws directory under your user's home directory. Opening the config file, we see the region for [snijm.dev](https://snijm.dev).admin is set to us-east-2. This matches the setting in the web console. It's worth noting that the web console uses the user-friendly name Ohio, while the CLI uses the programmatic name us-east-2. Note that in the region dropdown, the actual internal AWS region name is printed next to the user-friendly name. Now that I've verified the region, I can go ahead and close out of that config file. The credentials for this named profile are the AWS Identity and Access Management key and secret access key for the snijm.admin user. The command I need to use only require the VPC ID and the CIDR block. I'm going to specify the availability zone as well to be consistent with what I did in the web console. The command I want to use is aws ec2 create-subnet.
>
> **[4:47](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-subnets?u=76281980&t=287)** Since I want to confirm this command will be successful prior to running it for real, I specify the dry run flag. The next parameter it takes is the vpc-id. In the web console, I can retrieve the VPC ID by navigating back and clicking the your VPCs link in the left-hand nav. The VPC ID associated with the demo VPC is visible in the VPC ID column. I'm just going to copy that into my buffer and go back into my command line interface. Once I've specified the VPC ID, I'm going to specify the CIDR block. In this case, 192.168.2.0/23. Next, I specify the availability zone. Since I want to align it with my public subnet, I'm going to specify us-east-2a. And the final parameter I'm going to pass in is the profile I want to use to run this command. When I hit Return, I very quickly get an error message back. Note that the request would have succeeded but the dry run flag is set. That gives me confidence that I have formatted the command correctly. Since I actually do want to create this subnet, I edit my previous command and removed the dry run flag. After a short pause, I get a confirmation message back stating that the subnet is in the process of being created. I'm going to want to go ahead and name the subnet as well.
>
> **[6:21](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-subnets?u=76281980&t=381)** In order to do that, I'm going to need to grab the subnet ID from the response I got from the previous command. I'm just going to highlight that now and copy it into my buffer. In order to specify a name, I need to use the create-tags of the aws ec2 command. For the resources flag, I specify the subnet I just created. For the tags parameter, I specify the key as name and the value as demo-priv-a. And finally, I specify my named profile. Note that I don't get a response after running this command. Let's go back to the console to confirm what we've done. Clicking on the subnets link in the left-hand navigation takes me back to the subnets page. Notice that my filter from creating a subnet via the web console is still in place. I need to cancel that out by clicking the little X. Notice that the first line is my newly created private subnet. I'm going to highlight that and unhighlight the public subnet where I can confirm the details. Scanning the bottom half of the page, I can confirm that the subnet was created as I intended. At this point, there isn't much which differentiates the two subnets I created apart from their IP address range.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[CLI]] (2), [[Windows]] (1)
> **Env Vars:** vpc (16), aws (7), cidr (4), cli (2), ec2 (1)
> **CLI Commands:** aws (10), make (3)
> **Tools:** command line (2), terminal (1), bash (1)
> **UI Navigation:** dropdown (2), select the (1), click on (1)
> **Warnings:** note that (4)
> **Versions:** 192.168.0 (1), 192.168.2 (1)
> **URLs:** [snijm.dev](https://snijm.dev) (1)

#### [Configure route tables](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-tables?u=76281980&t=0)** - [Instructor] A route table is a critical component of a VPC. It is used to control how your VPC network traffic gets routed. It is important to understand what route tables can do. Whenever you create a VPC, a main route table gets created. Using the VPCs implicit router. The main route table contains a default route for internal VPC traffic. While it isn't possible to modify the default route, it is possible for you to add custom [[Routing]] rules, route tables control, how sub-net traffic gets routed by allowing you to specify a target for each destination. Each sub-net within your VPC has to be associated with a route table. If you don't explicitly assign a sub-net to a route table, the sub-net will be associated with the VPCs main route table. Think of it as a default in the absence of specific routing rules. Now that we have a VPC with two empty sub-nets, let's configure a route table for each sub-net. One sub-net is intended for public facing instances while the other will contain non-internet round-table components. Therefore let's create a route table for each sub-net. Since the routing rules will be necessarily different. Here I am at the VPC dashboard to get started. I locate the route tables link in the left-hand navigation. Clicking that link takes me to the information screen about the route tables that I have active. I currently see two listed. The first is the default route table for our demo VPC. And the other is the default route table for the default VPC.
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-tables?u=76281980&t=94)** Since I now want to create a route table for the public sub-net. I click the blue create route table button near the top of the screen. On this screen, I get to specify the name tag. Since this is the route table for the public sub-net I'm going to call it demo dash pub dash RT. Then I get to select the VPC in which I want this route table to be created, clicking the dropdown list. I select the demo VPC that we're working with. Okay. That was simple enough. So I go ahead and click the create blue button on the lower right corner of the screen. After a moment, I get a confirmation message that the route table is created as well as a hotlink to the configuration screen for that route table. I'm going to click that link now. Here, I see the name of the route table we just created. The route tables internal ID and the VPC with widgets associated. Now I want to associate that route table with the public sub-net. Looking at the bottom half of the screen, I click the sub-net associations tab. I'm going to resize that so we can see the whole thing. I see the two sub-nets in this VPC and the fact that they are not explicitly associated with any route table. Keep in mind that the number of sub-nets you see here will vary on the number of availability zones in your region and the number of sub-nets you create. Since I want to use the route table, I just created with the public sub-net, I'm going to click the edit sub-net associations button. Since I want to associate it with the public sub-net I simply select the public sub-net
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-tables?u=76281980&t=189)** and click the blue save button on the lower right-hand side of the screen. That takes me back to the route table screen filtered by the route table I just created. Notice that the lower half of the screen now shows the sub-net that's associated with this route table, as well as the other sub-net, which is associated with the main route table. Now let's go ahead and create a route table for the private sub-net. Instead of doing it through the console, I'm going to do it through the [[CLI]]. In order to do that, I'm going to need to grab the VPC ID. It is visible on this screen. So I'm simply going to highlight it and copy it into my buffer. Okay, here I am at the command line, the command I want to use is aws [[Amazon EC2|ec2]] create-route-table. The first parameter I want to specify is the VPC ID and the profile I want to specify is my named profile. Hitting enter, I very quickly get an output message. Note the new route table ID that came back in the response message. That's the route table I just created, which I'm going to need next. I'm going to simply highlight that and copy it into my buffer. The next thing we want to do here is associated with the private sub-net. The command I'm going to use is aws ec2 associate-route-table specifying as a parameter, the route table ID that we just created. And then we need the sub-net ID in order to get that, I go back to the AWS console.
>
> **[4:44](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-tables?u=76281980&t=284)** Notice that the bottom of the screen, there is a link to the sub-net that is still associated with the main route table. Clicking on that sub-net ID takes me to the configuration page for that sub-net. Now I can simply highlight that sub-net ID and copy it to my buffer. Going back to the CLI, I specify that sub-net ID to the sub-net ID parameter, and then specify my name profile. After hitting enter, I get a response message. Notice that the state is associated while we're here. I'm going to go ahead and name that route table. As we did before, I'm going to use the aws ec2 create-tags command for the resources I'm going to specify the route table we just created. And for the tags, I'm going to specify a key value of name. So I want to create a name tag, and then the value of that tag, which will be demo-priv-route table. So private route table, and finally the name profile. Now let's go back to the web console where I can verify that the route table I just created is appropriately named and associated with the correct sub-net. I can simply refresh this sub-net configuration screen. Notice how the route table on the bottom half of the screen changed from demo dash RT to demo dash priv RT, the one I just created. Clicking in the route tables section
>
> **[6:17](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-tables?u=76281980&t=377)** on the left-hand nav and expanding that. So we can see all of the route tables, I can see now that I have three demo prefix route tables. The default for the main route table and then the two, I just created one for the public and one for the private. At this point, the route tables for both of these sub-nets are the same. Let's differentiate the public one by setting up an internet gateway.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Amazon EC2|Ec2]] (3), [[CLI]] (2)
> **Env Vars:** vpc (15), cli (2), aws (1)
> **CLI Commands:** aws (4)
> **UI Navigation:** select the (3), dropdown (1)
> **Cross-References:** go back to (2)
> **Tools:** command line (1), aws console (1)
> **Definitions:** is a  (2)
> **Analogies:** think of it as (1)

#### [Configure an internet gateway](https://www.linkedin.com/learning/aws-networking-14125632/configure-an-internet-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-an-internet-gateway?u=76281980&t=0)** - [Instructor] An internet gateway or IGW is a foundational component of a VPC. An internet gateway has several key features. First off, an IGW has redundancy designed and built into it by AWS. Similarly, it is a highly available component. As such, you don't have to worry about the reliability or [[Scalability]] of this component. You only need one for your VPC. You can configure your subnet route tables to use an IGW to route internet traffic. Finally, an IGW provides network address translation for instances with a public IP. I'm going to start with a pair of empty subnets in a VPC and configure an IGW to allow instances within those subnets to get to the internet. Then I will configure the route table for the public subnet to ensure that the IGW is the target for internet bound traffic. From the VPC dashboard, I locate the internet gateways link in the left hand nav. Clicking on that link takes me to the configuration page that shows the existing internet gateways that I have. Expanding the name column, we see that the only one in this region is the one associated with the default VPC. To get started in creating one, I click the blue create internet gateway button near the top of the screen. On the next screen, I get to specify the name tag for this new internet gateway. Since it's going in my demo VPC, I'm simply going to call it demo IGW. With that specified, I click the blue create button
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/configure-an-internet-gateway?u=76281980&t=93)** near the right side of the screen. After a brief pause, I see that the IGW has been created. That said, it's not attached to a VPC, which we should do now. Clicking on the hot link for the IGWs internal ID takes me back to the internet gateway configuration screen. Note that it's filtered by this specific internal ID. Looking at the state of this IGW, we see that it's detached. That is it's not associated with VPC. Since that's what we want to do now, I click the actions button and choose attach to VPC from the options. This takes me to a screen where I get to specify the VPC to which this IGW should be attached. Clicking the dropdown list shows all of the VPCs that don't have an IGW attached. In this case, there's only the demo VPC that we've been working in. Note the helpful AWS command line interface command expansion. Expanding that, I can see the actual [[CLI]] command that's needed to attach an internet gateway to a VPC. Keep that in mind as we'll be doing that in just a moment. Continuing through the console to attach it to the VPC, I click the blue attach button on the right side of the screen. Doing so it brings me back to the IGW configuration page, still filtered to this specific IGW. Note now that its state has changed from detached to attached and at the bottom of the screen, we can see which VPC it's attached to. In this case, the demo VPC. At this point, we've created and attached the IGW
>
> **[3:07](https://www.linkedin.com/learning/aws-networking-14125632/configure-an-internet-gateway?u=76281980&t=187)** to the VPC, but we haven't finished the job. We need to add a target to the route table for the public subnet. I select the route tables link in the left hand nav and click it. This takes me to the route tables configuration page. The route table I want to adjust is for the public subnet. So I select a demo-pub-rt. Then I click the button to expand the lower half of the configuration screen. In the lower half, I click the routes tab. Notice that the only route that is there specifies local traffic. At this point, I want all non-local traffic to head to the IGW. So I click the edit routes button. To specify the route I want, I simply click the add route button in the screen that appears. Since I want all non-local traffic, I specify 0.0.0.0/0, all destinations. In the target, I specify internet gateway. That shows the internet gateway that is available to route to. Note again the importance of the naming parameter. If you just had the internal IGW ID, you'd have to be really, really conversant in internal ID speak. I like having the name next to it. It makes things much, much easier. Okay. Everything here looks good. So I simply click the blue save routes button. I quickly get a confirmation message that the route was successfully edited. Clicking the blue close button takes me back to the route table configuration screen, where I can see the effect of what I just did. At this point, the route is ready to go
>
> **[4:40](https://www.linkedin.com/learning/aws-networking-14125632/configure-an-internet-gateway?u=76281980&t=280)** and ready to handle traffic. Once again, creating an internet gateway, attaching it to a VPC, and creating a route are all things that can be automated with the CLI. To demonstrate I'm going to undo what I just did in the gooey, then recreate the IGW and appropriate route entry using the CLI. The first thing I'm going to do is remove the route. And the next thing I'm going to do is remove the internet gateway. So I click on the internet gateways tab, find the internet gateway that I want and remove it. First I detach it from the VPC and then I simply delete the internet gateway. Okay, let's pop over to the command line. The first thing I want to do is create the IGW. To do so, I specify the aws [[Amazon EC2|ec2]] create-internet-gateway command using my development profile. In short order, I get the response message with the ID of the internet gateway I just created. I'm going to copy that to my buffer since I want to give it a name right now. I can do that by using the familiar aws ec2 create-tags command. For the resources parameter, I specify the ID for the internet gateway. And for the tags parameter, I specify the key of name and the value of demo IGW. And I finish off by specifying my development profile. Note the consistency in the CLI confirmation messages.
>
> **[6:15](https://www.linkedin.com/learning/aws-networking-14125632/configure-an-internet-gateway?u=76281980&t=375)** The create-internet-gateway tag gives me visual output while the create-tags command does not. Next, I'll attach that IGW to the VPC. For that, I'm going to need the VPC ID. To get that, I pop back over to the web console and click on your VPCs. Once again, I retrieve the VPC ID of the demo ID and copy that to my buffer. The command I want to use here is aws ec2 attach-internet-gateway. This command should look familiar as AWS helpfully displayed that in the console when we did it via the gooey. As a parameter, I'm going to specify the internet gateway ID. I'm going to paste in the VPC ID because I'm going to need that in just a moment. Then I'm going to specify the VPC ID, and finally, my development profile. Again, the attach-internet-gateway command doesn't give me any feedback. I could check it via the CLI or via the web console. Let's pop over to the console and make sure that it's there. I can check that by clicking on the internet gateways tab. First, let's expand the ID and VPC columns so we can see them in their entirety. Note that the demo IGW that I just created is attached to the demo VPC. Finally, I'll create a route in the public route table to allow traffic to flow through the IGW. To do that, I'm going to need the route table ID.
>
> **[7:50](https://www.linkedin.com/learning/aws-networking-14125632/configure-an-internet-gateway?u=76281980&t=470)** To retrieve that, I click on the route tables tab. To do that, I click on the route tables link in the left hand nav, which takes me to the route tables config screen. I change the screen so I can view all of the route tables that I have in this region. In this case, the one that I want to modify is demo-rt.pub. Let's take a quick look at the configuration for that route table. I select the demo-pub-rt, and then select the routes tab on the bottom half of the screen. Notice that the only route is for local traffic. I highlight that route table ID, copy it into my buffer, and head back to the command line. Here I specify aws ec2 create-route. To the route table ID parameter, I specify the route table ID of the public subnet. To the destination cyber block parameter, I specify all destinations. And for the gateway ID parameter, I specify the internet gateway ID we just created. I'm going to highlight that, copy it, and paste it in. And finally, I specify my name profile. The output here simply says, true. Let's go back into the console and validate that this route was created. I should be able to do that by refreshing this page. There's a refresh link near the top right corner. So I click that. Great. Looks like everything worked as intended. Notice the new route at the bottom of the screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (5), [[Amazon EC2|Ec2]] (4), [[Scalability]] (1)
> **Env Vars:** vpc (25), igw (22), cli (5), aws (3)
> **CLI Commands:** aws (7), find (1), make (1)
> **UI Navigation:** click on (4), select the (3), dropdown (1)
> **Tools:** command line (3)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (2)
> **Warnings:** note that (2)

#### [Configure a NAT gateway](https://www.linkedin.com/learning/aws-networking-14125632/configure-a-nat-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-a-nat-gateway?u=76281980&t=0)** - [Instructor] One of the useful capabilities of network address translation or NAT is the ability to map multiple private hosts to a single internet routeable IP address. Spurred on by the [[IoT|Internet of Things]], there are more than 20 billion devices connected to the internet. Which is more than the roughly 3.7 billion publicly available IPv4 addresses. Thank goodness IPv6 is here. AWS is built upon the premise of one to many net. Instances in your private subnets likely need to get to the internet to pull down patches. Let's start off by exploring how to handle NAT for private subnets. One way to provide a path to the internet is to configure NAT instances in a public subnet. If you go with this option, you have more operational responsibility and flexibility. First off you have to manage the [[Amazon EC2|EC2]] instance, operating system patches, software updates and the like are all your responsibility. If you want a highly available configuration, you need to configure and manage that yourself with a multi-instance multi availability zone approach. The network bandwidth available to a NAT instance depends on the instance size. As is true for all EC2 instances, more powerful instances have greater bandwidth capabilities. Of course, they also cost more. If it is important for you to be able to specify the private IP address of your NAT service, the only way to do that is by using a NAT instance. If you need port forwarding as part of your NAT solution, running a custom configuration on your own EC2 instance is the only way to get it.
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/configure-a-nat-gateway?u=76281980&t=94)** Possibly the most compelling reason for running your own NAT instance is if you want to use it as a bastion host for inbound SSH connections. Another way to provide a NAT service to instances in your private subnets is with the NAT gateway from AWS. A NAT gateway is NAT as a Service. It is a scalable, highly available service that you don't have to manage. You have no operating system or software to worry about or patch. From a bandwidth perspective, it can support bursts of traffic of up to 45 gigabits per second. While you are free from the concerns of operating a NAT gateway, it does have some limitations. First, AWS automatically assigns a NAT gateway's private IP address from the subnet pool. That said your infrastructure design should not be dependent on specific private IP addresses. Secondly, the NAT gateway does not support port forwarding. Finally, inbound SSH access via NAT isn't supported. Running your own NAT instance may be a slightly less expensive than using a NAT gateway. However, complexity and headaches are associated with making that redundant and highly available. If you can live with the limitations using the AWS managed NAT gateway is very appealing. For our purposes, I'm going to go with the NAT gateway. Keep in mind that there is a nominal hourly costs associated with this next step if you're following along. I'm going to continue building out the demo VPC by configuring a NAT gateway in the public subnet. Then I will modify the private subnets route table
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/configure-a-nat-gateway?u=76281980&t=189)** adding the NAT gateway as a target for internet routeable traffic. Starting from the VPC dashboard, I locate the NAT gateways link in the left-hand nav. Clicking it takes me to the NAT gateway configuration page. To get started, I click the blue create NAT gateway button in the middle of the screen. The first thing I need to specify is the subnet in which I want this NAT gateway to be placed. In this case, I want the NAT gateway to be in my demo public subnet. Notice that the type of head supports the name attribute. I don't have to know the internal subnet ID when doing type ahead. That's kind of a nice feature. A NAT gateway requires an elastic IP address. An elastic IP or EIP is a public IP address that can be assigned to an EC2 instance or NAT gateway. This is a useful construct for providing your users a consistent experience. For example, in the event of an EC2 failure, you can simply re-associate its EIP with the different EC2 instance. Since the public IP of the service you are providing is unchanged, your users will only be effected momentarily. At this point I don't have an existing elastic IP. Fortunately, I can create one on the spot by clicking the create new EIP button. This looks good. So I go ahead and click the blue create a NAT gateway button in the middle of the screen. In the confirmation window that follows. there's a handy reminder that in order to use it
>
> **[4:44](https://www.linkedin.com/learning/aws-networking-14125632/configure-a-nat-gateway?u=76281980&t=284)** I need to properly configure my route tables. Let's do that now by clicking the blue edit route tables button in the center of the screen. This takes me to the route tables configuration page. In this case, I want to add a route, such that internet bound traffic originating from my private subnet hits the NAT gateway. This in turn, sends the traffic out through the internet gateway. First, I select the demo-priv-RT route table. Then I click the routes tab. Similar to how we added a route to the public route table to go to the internet gateway, we need to add a route here. So I click the edit routes button. In the screen that pops up, I click the add route button. The first thing I need to do is specify the destination. From a target perspective, I want to specify the NAT gateway. Notice that when I select the NAT gateway, the console automatically supplies the internal NAT gateway ID. Once I've clicked that the configuration is complete and I can simply click save routes. The resulting confirmation message reassures me that the route was successfully added. Hitting the blue close button takes me back to the route table configuration page. If I want to verify that the NAT gateway exists, I can simply click the NAT gateways link in the left-hand nav. Of course, with all things AWS, it is possible to do a NAT gateway through the [[CLI]] as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (6), [[IoT|Internet of things]] (1), [[CLI]] (1)
> **Env Vars:** nat (37), ec2 (6), aws (5), eip (3), ssh (2)
> **CLI Commands:** aws (5), ssh (2)
> **Definitions:** is a  (4)
> **UI Navigation:** select the (2), go to (1)
> **Prerequisites:** configure (3)
> **Analogies:** for example (1), similar to (1)
> **Versions:** 3.7 (1)

#### [Configure VPC endpoints](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-endpoints?u=76281980&t=0)** - [Instructor] VPC endpoints allow resources within a VPC to privately access other AWS services without needing to traverse the internet. Let's highlight some of the benefits of using a VPC endpoint before setting one up. PrivateLink is the AWS service that makes VPC endpoints possible. PrivateLink uses the internal AWS network to route traffic privately instead of over the internet. That way you can access AWS resources privately as though they were within your VPC. Similarly, if you integrate with a partner that operates on AWS, it's possible to configure a PrivateLink connection to that partner's AWS account. There is a nominal hourly charge associated with PrivateLink per availability zone, as well as per gigabyte charges for data that flows over PrivateLink. That said, some native AWS services may incorporate the cost of PrivateLink as part of the total cost of the service. For more details on pricing, please check out the PrivateLink pricing page. Let's explore some VPC endpoint benefits by looking at AWS' simple storage service or S3. One of S3 is unique features is that S3 objects can be made internet accessible. By default, interactions with S3 are routed over the public internet. However, when accessing S3 from resources within a VPC, it makes no sense to have to traverse the internet to get to what is an internal AWS storage service. This is logical since both S3,
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-endpoints?u=76281980&t=93)** and your VPC are hosted within AWS. A VPC endpoint simply lets resources within your VPC communicate with S3 privately with fewer network hops access to S3 is faster. In addition, endpoints simplify network configuration without needing to configure an internet gateway. That increase in simplicity leads to an improved security posture as there are simply fewer places where traffic is exposed. The first VPC endpoint was for S3, since then the list of native and marketplace services that can use VPC endpoints continues to grow. With tangible benefits and nominal cost implications, setting up a VPC endpoint for S3 makes sense, if you intend to access S3 from within your VPC. I'm going to finish building out the demo VPC by configuring a VPC endpoint for S3. In this case, let's suppose I store both static content for my website in S3, as well as internal configuration files. Let's configure a VPC endpoint for S3 and update the route tables for both the public and private subnets to take advantage of this endpoint. From the VPC dashboard, I click on Endpoints about halfway down in the left-hand navigation. To get started, I proceed by clicking the blue Create Endpoint button, either the one at the top of the screen or the one in the middle of the screen will work. Since I'm using an AWS native service, I leave the service category set to AWS services. Unfortunately, filter attributes doesn't support type ahead
>
> **[3:10](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-endpoints?u=76281980&t=190)** as you would expect, therefore, I have to scroll down through the list of AWS services until I find S3. Note that it takes the fully qualified S3 path. Now, I get to select the VPC that I want this endpoint associated with. I go ahead and select the demo VPC. Note that the text immediately below the VPC selection box specifies the route that will be added to the subnets. In this case, I want both the public and private subnets to access S3 privately, so I select both of them. Scrolling down the policy is where things get interesting. The question is what type of access do I want to allow instances within my VPC to have to S3? The default, full access, is very broad. I'm going to go with this broad policy for now. However, in a production situation, I would tighten this up to specify just the resources in S3 that I would want access to. With that said, I go ahead and click the blue Create Endpoint button towards the bottom of the screen. I quickly get a confirmation that the endpoint was created. Let's take a peek at what it looks like. I can do so by clicking on its internal ID. I'm going to go ahead and resize the bottom half of the screen, so I can see more detail. Clicking on the Route Tables tab shows the subnets with which this endpoint is associated. Let's go ahead and validate that the route tables for these subnets were updated appropriately. Let's start with the public one.
>
> **[4:42](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-endpoints?u=76281980&t=282)** I'm going to do so by clicking on the link for the public subnet. Doing so opens that subnet's configuration page in a new browser tab, in the lower half of the screen, I click on the link for the route table for this subnet. That brings me to the route table configuration page for this subnet, clicking on the Routes tab in the lower half of the screen, I can see the newly added route to S3. Instead of going all the way back to the endpoint, I'm simply going to clear the filter, since I'm already in the route table section. I can just simply look at the private route table and note that the route has been added successfully. Of course, as with all things AWS, it is possible to accomplish all of these steps programmatically via the [[CLI]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** vpc (22), aws (14), cli (1)
> **CLI Commands:** aws (14), find (1)
> **UI Navigation:** click on (2), select the (2), scroll down (1)
> **Warnings:** note that (3)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Create a VPC](https://www.linkedin.com/learning/aws-networking-14125632/create-a-vpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/create-a-vpc?u=76281980&t=0)** - [Instructor] With an understanding of the components that comprise a VPC, let's now use a VPC wizard to create the infrastructure for an application that has both public facing [[Web Servers]], as well as private application and database servers. While we're at it, let's do a NAT gateway, as well as an S3 endpoint. In the end, we'll end up with another VPC that has the same structure to the one we created manually. The big difference will be the CIDR range. A quick [[Microsoft Word|word]] of caution: Wizards are a great way to learn new concepts, however, I strongly encourage you not to get into the habit of relying on them. Wizards necessarily abstract what's going on behind the scenes. Remember, automation is the key to consistency and [[Scalability]]. Instead of relying on tools designed for human interaction, you should be developing scripts. I really wish that AWS would add a cloud formation button to each wizard. Hitting that button would export the same script that the wizard is generating. That would really help people learn. Now let's dive into the console and get started. Starting at the VPC dashboard, I click the blue Launch VPC Wizard towards the top left of the screen. In the first step of the wizard, I choose the second of the wizard templates, which will create a VPC with public and private subnets. To get the wizard started, I click the blue Select button in the center of the screen. This brings up the second step of the wizard. Let's go through it step by step. The first field is for the IP CIDR block. By default, it specifies 10.0.0.0/16. That works fine for my purposes.
>
> **[1:37](https://www.linkedin.com/learning/aws-networking-14125632/create-a-vpc?u=76281980&t=97)** So now I'm going to name the VPC. I'm going to click into the VPC Name field, and simply call this one demo2. The next field specifies the public subnet. You can see that with a /24, 251 IP addresses are available. I then have the choice of determining availability zone. To make it easier if I ever want to create a highly available configuration across multiple AZs, I'm going to choose, a, for both my public and private subnets. I'm planning on having more internal systems than publicly accessible ones, so I need more IPS in my private subnet. To support this design, I changed the private subnet to a /23, giving me 507 IPS to work with. Let's also clean up the names for the public and private subnets. Now I get to determine how I want to handle network address translation for the instances in my private subnet to get to the internet. I have two choices, the NAT gateway service, or running my own NAT instance. Since the NAT gateway meets all of my use cases and has a nominal cost, I'm going to go with it. Clicking into the field that specifies an elastic IP address, shows that none are available. For some strange reason, you can't create a new elastic IP from the wizard and have to do this manually. AWS iterating quickly on new features, and I imagine this is something they'll fix soon. However, that isn't the case right now. So I dropdown the services menu
>
> **[3:11](https://www.linkedin.com/learning/aws-networking-14125632/create-a-vpc?u=76281980&t=191)** at the top of the screen, choose VPC from my history, and right click on it to launch it in a new tab. From the VPC dashboard in the new tab, I find the elastic IP's link in the left hand NAF about halfway down. To get a new one, I simply click the blue Allocate New Address button near the top of the screen. I have the choice of getting an IP from Amazon or one that I own myself. I'm going to go with the Amazon pool for this case, and simply click the blue Allocate button on the right side of the screen. I get the success message which shows the new elastic IP address. Clicking the blue Close button takes me back to the EIP configuration page. Note that without names, it's a little bit confusing. I'm going to name the one that was there, demo NAT gateway EIP. I'm also going to name our new one demo2 NAT gateway EIP. There. That's a little easier to determine. Okay, I can close that tab and get back to my wizard. Collapsing the services tab, clicking in the EIP allocation ID field, now I see the EIP allocation of the EIP I just created. I'm going to go ahead and select that now. The next segment of the template has to do with endpoints. Since I want to connect to S3 privately, I'm going to add an S3 endpoint right now. I simply click the Add Endpoint button. I scroll down a little bit
>
> **[4:43](https://www.linkedin.com/learning/aws-networking-14125632/create-a-vpc?u=76281980&t=283)** and pop-open the services dropdown. In this case, I'm interested in creating an endpoint for S3. The next box gives me the option of associating this endpoint with the public and private subnets, the public subnet only, or just the private subnet. In this case, I want both public and private subnets to have access. Once again, I'm going with a very permissive full access policy. Again, this is not something I would do in a production environment, but it works for the purposes of this demo. I want DNS host names for the [[Amazon EC2|EC2]] instances I will be placing in this VPC, so I leave the Yes radio button selected for Enabled DNS host names. In terms of [[Hardware]] tendency, I have two options; default and dedicated. Dedicated tendency means that my future EC2 instances would be on single-tenant hardware. I have no use case for this hardware requirement, so I'm going with the default. Everything looks good, so I go ahead and click the blue Create VPC button in the lower-right corner. Now I get to wait for a while as the wizard executes. The item that takes the most time is the creation of the NAT gateway. While we wait, let's talk briefly about high availability. What we're setting up with the wizard is one public and one private subnet. Just like we did manually. If we wanted our public web servers and private application servers to be redundant across AZs, we would have to add an additional public subnet as well as an additional private subnet.
>
> **[6:18](https://www.linkedin.com/learning/aws-networking-14125632/create-a-vpc?u=76281980&t=378)** This is why I like to specify the AZ into which my subnets go, just in case I have a high availability use case in the future. Let's go back and check on the progress of that wizard. After waiting a couple of more minutes, I get the confirmation message that this VPC has been successfully created. Clicking the blue Okay confirmation button takes me to the VPC configuration section. Here, I can see the new demo2 VPC. Let's take a peek at one of the subnets just to illustrate. I'm going to look at the demo2 private subnet, for example. Looking at the route table for the demo2 private subnet, I can see that internet-bound traffic is heading to the NAT gateway, and that S3-bound traffic is heading to the S3 endpoint. Compare that to the one that we did manually, and it looks very, very similar. Used appropriately, wizards sure can simplify many steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Web Servers]] (2), [[Amazon EC2|Ec2]] (2), [[Microsoft Word|Word]] (1), [[Scalability]] (1)
> **Env Vars:** vpc (15), nat (8), eip (6), cidr (2), aws (2)
> **CLI Commands:** aws (2), make (1), find (1), az (1)
> **UI Navigation:** dropdown (2), click on (1), scroll down (1), open the (1)
> **Analogies:** imagine (1), just like (1), for example (1)
> **Warnings:** caution (1), note that (1)
> **Versions:** 10.0.0 (1)
> **Exercise Files:** template (1)

#### [Expand a VPC](https://www.linkedin.com/learning/aws-networking-14125632/expand-a-vpc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/expand-a-vpc?u=76281980&t=0)** - [Instructor] As with all things, there are limits with what you can do within an AWS VPC. One of those limits has to do with how many machines fit inside of a single VPC. Let's explore how we can work around that limit. First, let's explore some basic VPC limits. By default, you're limited to five VPCs per region. That said, this number can be increased by contacting support. There is a limit of 200 subnets per individual VPC. The CIDR range for a VPC must be between a /28 on the low end, up to a maximum of a /16. That equates to a minimum of 16 and maximum of 65,536 IP addresses. That said, recall that AWS reserves a few for internal services. Once created, it is not possible to change the size of a VPC. Therefore, if you build a VPC too small and run out of IP space, there is no way to simply expand the CIDR block. That also means that if you have more hosts than fit into a /16 CIDR block, it would appear that you're out of luck in the context of a single VPC. Fortunately, it is possible to associate more than one CIDR block with a given VPC. Let's visualize what this would look like. Suppose you had a single VPC configured with the largest possible CIDR block. Over time, your need for computing power grows and grows and grows,
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/expand-a-vpc?u=76281980&t=94)** until you run out of IP space. If, for whatever reason, it does not make sense to create a new VPC, you can simply expand it and attach another CIDR block. Then, using this new IP space, you can proceed to create the subnet sizes that are appropriate for your needs. Let's take a brief jump into the AWS console to see what it looks like to attach another CIDR block to a VPC. Here I am, looking at the Demo2 VPC. Note that it has a /16 CIDR block. Now, let's assume for a moment that we have exhausted that IP space. To add another CIDR block, we simply drop down the Actions menu and click the Edit CIDRs link. In this case, we want to add another /16 CIDR block. To do so, I simply click the Add IPV4 CIDR button near the bottom of the screen. I simply type in the new CIDR block and click the little check mark toward the right side of the screen. After a brief moment, it updates and shows the status of associated. That's all there is to it. You've successfully expanded the VPC by adding another CIDR block. That said, there are a few considerations after expansion. You'll need to consider updating the route tables for every existing subnet in your VPC so that you can route to this newly added space. Since in this scenario, we were out of space, we would need to create a new subnet or multiple subnets. After creating the new subnets,
>
> **[3:07](https://www.linkedin.com/learning/aws-networking-14125632/expand-a-vpc?u=76281980&t=187)** we would need to create the associated route tables so that traffic would flow appropriately.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (15), cidr (13), aws (3), ipv4 (1)
> **CLI Commands:** aws (3), make (1)
> **Definitions:** is a  (1), means that (1)
> **Tools:** aws console (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 3. VPC Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding security groups](https://www.linkedin.com/learning/aws-networking-14125632/understanding-security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understanding-security-groups?u=76281980&t=0)** - [Instructor] Security groups are the tool within AWS that lets you control inbound and outbound network traffic to the assets you have in AWS. Think of a security group as a virtual firewall. There are some key differences to understand about how security groups work when compared to firewalls you may have configured in the past. Let's explore some of the particulars about security groups. First off security groups are applied at the AWS component level. For example, access to AWS components including [[Amazon EC2|EC2]] instances, Elastic Load Balancers and Relational Database Services are all controlled with security groups. Security groups are assigned to AWS components individually. For example, you may have five different EC2 instances running in a given sub-net. It's possible to configure each individual EC2 instance with its own security group. With any firewall, the more rules it has to process the greater the impact on performance. For this reason, AWS starts with default which can be adjusted upwards. Let's explore some of those defaults now. Each network interface has a default of five security groups. Each security group has a default of 60 inbound or outbound rules. This means that a single security group can have a total of 120 rules, 60 inbound and 60 outbound. Note that the number of security groups per network interface, as well as the number of rules assigned to a given security group
>
> **[1:32](https://www.linkedin.com/learning/aws-networking-14125632/understanding-security-groups?u=76281980&t=92)** are calculated independently for IPv4 and IPv6. By default, a VPC is limited to 2,500 security groups. Note that it is possible to adjust all of the above limits upwards by opening a support ticket with AWS. Talking about security group limits can be a bit abstract, so let's draw a picture to see what this looks like. For illustrative purposes, let's talk about a single EC2 instance. Any given network interface, be it for an EC2 or RDS instance has a default maximum of five security groups assigned to it. Each individual security group can contain up to 60 inbound rules. Additionally, each security group can have 60 outbound rules. Finally, each VPC has a default maximum of 2,500 security groups. You can imagine how complicated these rule sets can get. Unless you have a compelling need, it's best to keep things as simple as possible. Design and define security groups broadly enough so that you don't have to manage hundreds or thousands of them per VPC. It's important to understand how security groups behave. When a security group is created it abides by the principle of least privilege for inbound connections. When you create a security group, all inbound traffic on all ports is denied by default. In fact, you can only configure allow rules within a security group. Unless you explicitly create a rule allowing traffic of a specific type from a specific source, inbound traffic will be dropped.
>
> **[3:06](https://www.linkedin.com/learning/aws-networking-14125632/understanding-security-groups?u=76281980&t=186)** Conversely, all outbound traffic for a given security group is allowed by default. This means that an instance in a public sub-net can establish a connection to the internet even if no traffic can get to it. Similarly, an instance in a private sub-net would be able to reach the internet using whatever net implementation you've configured in a public sub-net. It is also important to understand that security groups are stateful. Responses to any outbound connection will always be allowed regardless of any rules limiting inbound traffic. For instance, suppose you had a server that needed to reach out to the internet to get data from a web service. You could attach a security group that allows no inbound traffic to the instance and it would still be able to retrieve data. Suppose you attach the same security group to a pair of EC2 instances that are being used as [[Web Servers]]. You've defined a rule that allows inbound traffic on port 443 and 80, all as well. Now suppose those EC2 instances need to communicate with each other. While a route for that traffic exists in the route table, the security group will drop that traffic by default. It's a little strange to get your head around, but it does make sense. Let's walk through it. In order to let that traffic flow, think from the perspective of the instance. Inbound traffic is originating from the security group. Unless that traffic is explicitly allowed, it will be dropped. Just like in any on premises work you may have done, the firewall has to allow the traffic,
>
> **[4:40](https://www.linkedin.com/learning/aws-networking-14125632/understanding-security-groups?u=76281980&t=280)** even if the network path exists. Once you add a new rule to the security group which allows traffic from the security group itself, the instances will be able to communicate with each other. That said there is an exception. The VPC is default security group has an inbound rule allowing traffic from the default security group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (7), [[Web Servers]] (1)
> **Env Vars:** aws (7), ec2 (7), vpc (4), rds (1)
> **CLI Commands:** aws (7), make (1)
> **Analogies:** for example (2), picture (1), imagine (1), for instance (1), just like (1)
> **Definitions:** means that (2), is an  (1)
> **Warnings:** note that (2)
> **Prerequisites:** configure (2)
> **Ports:** port 443 (1)

#### [Verifying security groups](https://www.linkedin.com/learning/aws-networking-14125632/verifying-security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/verifying-security-groups?u=76281980&t=0)** - [Instructor] Let's add some practical experience to our theoretical security group knowledge by getting into the web console. First, a quick overview of what we're going to do. We'll see that we have two instances running in a public subnet and that they can't talk to each other. We're going to go ahead and update the security group to allow them to communicate. Working within the context of a VPC, let's go to the [[Amazon EC2|EC2]] dashboard and look at the configuration of a pair of EC2 instances. To get there, I simply type EC2 in the search box. When the virtual service in the cloud link appears, I click on it to take me to the EC2 dashboard. In preparation for this course, I have launched a pair of EC2 instances. For a comprehensive overview of launching EC2 instances, please refer to the other courses in our library. Onscreen, I see that I have two running instances. Let's examine how they're configured from a security group perspective by looking in the resources section and clicking on the running instances link. This screen shows a little bit more detail about each running instance. It shows the name tag I've assigned along with the unique instance ID. The instance type column describes how powerful the compute resources of the instance are. In this case, I'm using a pair of T2 micro machines, which have one virtual CPU and one gigabyte of memory. The availability zone column shows the AZ while the instance state column shows whether the instance is running or not. Clicking the check box next to one of the instances brings up even more details about the instance. On the lower half of the screen,
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/verifying-security-groups?u=76281980&t=93)** we can see its private IP address as well as the VPC and the subnet IDs. In this case, since the instances are publicly accessible, they each have a public IP address assigned to them. Scanning down a little bit on the right hand portion of the lower half of the screen, we see the security groups assigned to the instance itself. In this case, the name of the security group is SSH ICMP. If I click on the view inbound rules link to the right of the security group's name, it brings up a modal window showing the inbound port, protocol and source IP range. In this case, the security group contains two rules: one to allow secure shell or SSH traffic on port 22 and another to allow internet control message protocol, or ICMP, pings. While you might not want to allow ICMP traffic on your production [[Web Servers]], I've allowed it here for illustrative purposes. Now I'm going to click on the name of the security group to see how it is actually configured. This brings up the security group configuration screen. Again, we see the name, internal unique ID or group ID, the VPC ID and the description of the security group. Clicking the inbound tab on the lower half of the screen shows the traffic type, protocol, port range and source IP address range for traffic which is allowed to reach the instance to it's attached. Meanwhile, the outbound tab has a single line showing that all outbound traffic is allowed. Remember, outbound traffic to the internet from within a VPC
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/verifying-security-groups?u=76281980&t=189)** is stateful, regardless of what is specified in the inbound rule. From my laptop, let's open up a couple of terminal [[Windows]] and ping each instance. In order to do so, I'm going to need the public IP addresses from each instance. Clicking back to the EC2 dashboard and the running instances link, I can obtain the public IP address by simply scrolling over and finding the IPv4 public IP column. I'm going to copy the first one into my buffer and set up a ping from the first window. I'll also copy the second one. And in the second window, start pinging that. As expected, the pings are responding because the rule is specified in the security group. Now let's connect to each instance using SSH. In the next video, let's go ahead and connect to these machines and verify that they cannot talk with each other, then fix the problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (7), [[Web Servers]] (1), [[Windows]] (1)
> **Env Vars:** ec2 (7), vpc (4), ssh (3), icmp (3), cpu (1)
> **CLI Commands:** ssh (3), az (1)
> **UI Navigation:** click on (3), go to (1)
> **Ports:** port 22 (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)

#### [Configuring security groups](https://www.linkedin.com/learning/aws-networking-14125632/configuring-security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configuring-security-groups?u=76281980&t=0)** - Let's jump right back in and adjust the configuration of a security group. I'm going to go ahead and connect to each one of these instances. To do so, I can simply select the instance and click the Connect button. Notice that to connect, I need to specify the private key file, which I've already downloaded to my laptop. I simply copy the example command and paste it into one of my terminal [[Windows]]. Note that the first time you connect to an [[Amazon EC2|EC2]] instance, you have to verify the authenticity of the host. When you say yes here, the authenticity is stored in your known hosts file on your local machine. In this case, on my laptop. Closing out of that window, I unselect the sgdemo 1 instance and select sgdemo 2. In order to connect to sgdemo 2, I simply click the Connect button and copy the example command. In my second terminal window, I go ahead, paste that in, say yes, and connect. Looking at both terminal windows, we can see that the default prompt is configured to display the instances private IP address. From sgdemo 1, I'm going to try and ping the internal address of sgdemo 2. As we can see, it isn't responding. With our VPC knowledge, we know that a route exists. Remember, you can't alter the default entry in the route table, that allows traffic on the same sub-net. Therefore, the issue has to be the security group.
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/configuring-security-groups?u=76281980&t=94)** I'm going to keep the ping going, while I head back to the web console and add a new rule to the security group. Closing the modal connect window, I click the SSH/ICMP security group name on the lower right half of the screen. This takes me to the security group configuration page. Here, I can simply edit the inbound rules and add the security group in question. Clicking the Edit button, brings up a modal window where I go ahead and add the new information. I click the Add Rule button, and then from the long list of drop-downs, I select all ICMP-IPv4 traffic. In the source box, I want to specify the name of the security group itself. Security groups start with sg. Typing S causes the list of available security groups to appear. And in this case, the group that I want to trust is SSH/ICMP. Note that you have complete flexibility in terms of protocol types, and port ranges that you want to assign here. For example, if you are connecting to a relational database services oracle instance, you would want to open up port 1521. To manifest this change, I click the blue Save button at the bottom of this modal window. Sliding back over to my terminal window, I see that the ping has started responding. Meaning that the new rule has taken effect. Note that with this simple change, all instances in this sub-net, with the SSH/ICMP security group, will now be able to ping each other.
>
> **[3:08](https://www.linkedin.com/learning/aws-networking-14125632/configuring-security-groups?u=76281980&t=188)** Note that if I wanted to be able to SSH privately inside of the sub-net from machine to machine, I would need to add another rule to the security group. This rule would specify port 22, trusting the ID of the security group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** ssh (4), icmp (4), ec2 (1), vpc (1)
> **CLI Commands:** ssh (4)
> **Tools:** terminal (4)
> **Warnings:** note that (4)
> **Ports:** port 1521 (1), port 22 (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)

#### [Understanding network ACLs](https://www.linkedin.com/learning/aws-networking-14125632/understanding-network-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understanding-network-acls?u=76281980&t=0)** - [Instructor] Network access control lists, or NACLs, are a tool for controlling how traffic flows into and out of subnets within a VPC. If you have used firewalls in the past, NACLs will feel very familiar to you. Let's go over a few important things to know about how NACLs work in AWS. First off, NACLs exist within the confines of a single VPC and do not span VPCs. If you want the same NACL rule set to exist in multiple VPCs, you'll have to configure the NACL in each VPC. Within a VPC, NACLs can be associated with one or more subnets. However, each subnet can only be associated with one and only one NACL. Where security groups are granular to the [[Amazon EC2|EC2]] instance, NACLs affect entire subnets. NACLs are applied in a stateless fashion. As such, rules to allow network traffic must be explicitly defined. NACLs differ from security groups in that both allow and deny rules can be configured. For instance, if you used a NACL instead of a security group, to allow a server to reach the internet to pull down patches, you would have to specify an allow rule for both inbound and outbound traffic. All NACLs have an implicit deny built into the rule set. Say you have a NACL with four total rules. Two allowing inbound traffic on ports 80 and 443 and two more that allow outbound traffic on those same ports. If those are the only rules specified in your NACL, all other traffic on all other ports
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/understanding-network-acls?u=76281980&t=95)** will be denied implicitly. You assign a number to each rule within a NACL. NACLs are processed in numerical order with the first successful rule ending the processing logic. One thing that's very important to understand, the default NACL that gets created when you first configure a VPC has two rules in addition to the implicit deny catch-all. The two default rules allow all traffic in both directions. This allows you to not even think about NACLs and focus on controlling access to resources using security groups. Let's visualize how NACLs differ from security groups. If you take all the defaults when building a VPC, the only control you have to allow traffic to get to your EC2 instances is with a security group. Remember the security group will deny all inbound connections while allowing stateful outbound connections to originate from the EC2 instance. Modifying the security group allows you to specify where traffic comes from at the instance level. Now, suppose you want to limit traffic to this subnet to just ports 80 and 443 for web content. You could configure a NACL that specifically allows 80 and 443 while denying everything else. Suppose someone stands up a [[MySQL]] database server and makes an error with the security group, which would allow traffic on the default port of 3306 to come from the internet. With the NACL in place, there is a second level of protection.
>
> **[3:07](https://www.linkedin.com/learning/aws-networking-14125632/understanding-network-acls?u=76281980&t=187)** Since only ports 80 and 443 are allowed, inbound traffic on port 3306 will never make it to the database. Understanding how security group and NACLs operate and how they can complement each other is imperative in developing a sound strategy for how to manage traffic within your AWS VPCs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[MySQL]] (1)
> **Env Vars:** nacl (10), vpc (6), ec2 (3), aws (2)
> **CLI Commands:** aws (2), mysql (1), make (1)
> **Prerequisites:** configure (3)
> **Ports:** port 3306 (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Explore a network ACL scenario](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-network-acl-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-network-acl-scenario?u=76281980&t=0)** - [Instructor] Understanding NACLs is one thing and configuring them is a lot more fun. Before we get started, let's visualize what we're about to accomplish. I've configured a VPC in the Tokyo region with two subnets: one public, the other private. The public subnet contains a NAT gateway so the private subnet can get to the internet. I'm going to configure a NACL that will lock down the private subnet. Once implemented, only SSH and ICMP traffic originating from the public subnet will be able to get into the private subnet. In addition, all traffic originating from the private subnet will be dropped. Let's quickly review the IP space I've set up for this exercise. In the Tokyo region, I have a /16 VPC in the 10 range. Within the VPC, I have a public /24 subnet as well as a private /24 subnet. In the Frankfurt region, I have a /28 VPC in the 192 range with a single public subnet. In Tokyo, I've set up two [[Amazon EC2|EC2]] instances. The first is located in the public subnet with a public IP of 13.231.191.237 and a private IP of 10.0.0.90. You're going to want to remember what that private IP is. The second instance is in the private subnet and has a private IP of 10.0.1.78. Again, you're going to want to keep track of that private IP. Both of the instances in Tokyo have a security group attached,
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-network-acl-scenario?u=76281980&t=93)** which allows both SSH and ICMP traffic from my local machine, as well as any host within the VPC. Meanwhile, in Frankfurt, I have a single instance in the public subnet. It has a public IP of 52.59.188.152 and a private IP of 192.168.66.11. This instance has a security group which allows SSH and ICMP traffic from the public IP of the public instance in Tokyo, as well as from the NAT gateway in the Tokyo public subnet. Now that we've established the foundations for this exercise, let's go ahead and set up the NACL in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1)
> **Env Vars:** vpc (5), ssh (3), icmp (3), nat (2), nacl (2)
> **Versions:** 13.231.191 (1), 10.0.0 (1), 10.0.1 (1), 52.59.188 (1), 192.168.66 (1)
> **Prerequisites:** set up (3), configure (1)
> **CLI Commands:** ssh (3)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configure network ACLs, part 1](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-1?u=76281980&t=0)** - Before we dive in and configure a NACL, let's take a look at a picture to visualize the environment we're working in. Let's take a quick peek at this simplified diagram. Here we have the Tokyo VPC and its subnets on the left side of the screen. The right side shows the Frankfurt VPC and it's single sub net. Down in the lower right corner is my laptop somewhere out on the internet. In Frankfurt, there's a single [[Amazon EC2|EC2]] instance. Over in Tokyo, we can see the public and private EC2 instances, as well as the NAT gateway. The security group attached to the instance in Frankfurt, allows access from my laptop, the public IP of the NAT gateway and the public IP of the instance in Tokyo. The security group attached to the Tokyo public instance, also accepts traffic from my laptop. The only way for me to get to the private instance in Tokyo is by going through the instance in the Tokyo public sub-net. This makes sense as there is no public IP associated with this private instance. Right now, the Tokyo private instance can connect to the public instance in Frankfurt via the NAT gateway. Our NACL wIll put a stop to that. With a clear understanding of our VPC and instance landscape, let's validate our setup from a pair of terminal [[Windows]] before creating a custom NACL. Here I've opened up a pair of terminal windows on my laptop. I'm going to SSH from them to Tokyo. I can tell that I've SSH the instance in the public sub-net because of the IP address displayed on the prompt. Remember, 90 is the public one.
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-1?u=76281980&t=93)** In the terminal on the right, I'm going to SSH from the public instance to the private one. Okay, great. Now, from both instances, I'm going to establish an SSH connection to the instance in Frankfurt. Wonderful, note that the internal IP address on the prompt is the private IP of the instance in Frankfurt. Okay, I'm going to close those connections now. At this stage, the window on the left is connected to the public instance in Tokyo. While the window on the right is connected to the private instance, via the public instance. I'm going to go ahead and exit out of the instance in the private sub-net. Finally, I'm going to start pinging the private instance from the public instance. Great, now it's time to lock down that private subnet with an NACL. Here I am at the VPC dashboard in Tokyo. Notice that in the upper right corner, the selected region is Tokyo. What I want to see, is my existing NACL structure. Scrolling down in the left hand nav, I go ahead and click the network ACL's link. This brings me to the NACL configuration screen. Here, I see a single NACL for this VPC, named Tokyo default NACL. Selecting it, I go to the bottom half of the page and click on the subnets associations tab. Here, I see that both the public and private subnets are associated with this NACL. Looking at the inbound rules tab, I see that all traffic is permitted. This makes sense,
>
> **[3:05](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-1?u=76281980&t=185)** as the default NACAL for a VPC allows all traffic. Clicking on the outbound rules tab, shows a similar situation where all traffic is permitted. Now let's proceed to secure that private sub-net with a custom NACL. To do so, I click the blue create network ACL button at the top of the screen. in the screen that follows I get to name the NACL. Since this NACAL will be associated with the private sub-net, I'm going to simply call it, Tokyo private NACL. In the VPC dropdown, I select the Tokyo VPC that I've configured. Okay, that's all I have to do so I go ahead and click the blue create button in the lower right portion of the screen. This takes me back to the NACL configuration page. Now I'm going to unselect the default NACL, and select the private NACL I just created. Looking at the configuration, we see it down in the outbound rules tab, that all traffic is blocked. Clicking on the inbound rules tab, similarly, we see that all traffic is blocked. If we attach this NACL to the private subnet in its current state, all network traffic would be blocked. Let's do that now by clicking on the sub-net associations tab, and clicking the blue edit button. This brings up a list of the subnets to which I can attach this NACL. I'm going to go ahead and select the private sub-net. That looks good so I'm going to go ahead and save my changes by clicking the blue edit button in the lower right portion of the screen. Notice what happened in this ping window. I'm hitting return a couple of times just to establish a new line there. We see that the ping stopped responding immediately.
>
> **[4:40](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-1?u=76281980&t=280)** That's because the NACL went into effect and all network traffic is being dropped. In the next video, let's go ahead and add the rules to the NACL for SSH access, as well as ICMP access, to restore that ping. We can also validate that we can't get to Frankfurt, once our new rules are in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Windows]] (2)
> **Env Vars:** nacl (19), vpc (8), ssh (5), nat (3), ec2 (2)
> **UI Navigation:** select the (3), go to (1), click on (1), dropdown (1)
> **CLI Commands:** ssh (5)
> **Tools:** terminal (3)
> **Prerequisites:** configure (1), setup (1)
> **Code Identifiers:** will (1)
> **Cross-References:** in the next (1)

#### [Configure network ACLs, part 2](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-2?u=76281980&t=0)** - [Instructor] Let's proceed with configuring a custom NACL. Remember the NACL that we are going to configure will allow all SSH and ICNP traffic from the public sub-net in Tokyo to the private sub-net while blocking all traffic from the private sub-net to Frankfurt. Let's pop back into the web console. The first thing we want to do is configure an inbound rule by clicking on the inbound rules tab. In order to add a rule, I click the Edit inbound rules button in the middle of the screen. As this NACL has no existing rules, nothing shows up. So I go ahead and I click the Add Rule button. Remember NACL rules are evaluated in numerical order. The first thing I'm going to allow in is SSH traffic. From the dropdown list, I simply select SSH from the drop-down list in the type column. In the source, I change that to be the address range associated with the public sub-net. Now I'm going to add a rule to allow ICMP traffic. From the dropdown list, I select all ICMP IPv4. Similarly, in the source column, I specify the IP range of the public sub-net. This looks good, so I go ahead and click the blue save button near the bottom right of the screen. This brings me back to the NACL configuration page where I now see my new rules are visible in the inbound rules tab. Since NACLs are stateless, I need to configure an outbound rule for the return traffic. I'm going to go ahead and do that
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-2?u=76281980&t=94)** by clicking the outbound rules tab and clicking the Edit outbound rules button. We don't have any outbound rules yet, so I click the add rule button. You may recall from various networking classes, that many [[Linux]] kernels use the ports between 32,768 and 61,000 as ephemeral ports. Therefore, this is the port range I'm going to add to the outbound rule to allow responses to inbound SSH connections. In the destination box, I'm going to specify the IP address range of the public sub-net. Next, I click Add Rule to add the all ICMP IPv4 rule. That looks good. So I go ahead and click the blue Save button near the bottom right of the screen. Notice how the ping in my ping window started responding again. That's because the new NACL has taken effect and ICMP traffic is flowing. Now let's go ahead and prove that SSH traffic originating in the private subnet is being dropped. Let's re-establish an SSH connection to the private instance. That looks good. So now let's go ahead and try and SSH to Frankfurt. Notice that that SSH connection is hanging that's because from the private sub-net SSH traffic is blocked. Meanwhile, from the public sub-net we can still get to Frankfurt. That was kind of dense. So let's recap some of the important takeaways. NACLs are a great way to ensure that a misconfigured security group doesn't allow unintended network traffic. When thinking about your NACL design,
>
> **[3:08](https://www.linkedin.com/learning/aws-networking-14125632/configure-network-acls-part-2?u=76281980&t=188)** consider setting up rules to restrict access to [[Databases]] and internal applications. You'll want to think through how you intend on doing operating system patching. You'll also have to take into account any connections to external partners. Finally, don't forget to include the ephemeral ports for the operating systems and AWS services you're using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Databases]] (1)
> **Env Vars:** ssh (9), nacl (7), icmp (4), icnp (1), aws (1)
> **CLI Commands:** ssh (9), aws (1)
> **Prerequisites:** configure (3)
> **UI Navigation:** dropdown (2)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [VPC Flow Logs overview](https://www.linkedin.com/learning/aws-networking-14125632/vpc-flow-logs-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/vpc-flow-logs-overview?u=76281980&t=0)** - Experienced [[Network Security]] professionals may feel uncomfortable about moving services off premises. This is typically caused by a reduced ability to monitor network traffic. AWS offers VPC flow logs as a way to mitigate that concern. VPC flow logs are a way to log network traffic associated with a VPC. Flow logs can be created for any VPC within your account. Flow logs associated with a VPC will capture traffic for every network interface in that VPC at roughly 15-minute intervals. Similar to other AWS services, VPC flow logs are stored in CloudWatch, and are accessible via the web console. Upon creation, there is about a 10-minute delay before the logs become visible within the console. Since flow logs are published to CloudWatch, an IAM role with the appropriate permissions is required. Flow logs can be configured to store accepted or rejected network traffic. A single log can be configured to store both accepted and rejected traffic. VPC flow logs contain network traffic details, the most pertinent being source and destination IP addresses as well as source and destination ports. The network protocol, like TCP or UDP, is captured as well. Packet information, including the number and size transferred during the capture window is also found in a VPC flow log. Each log entry will indicate whether the traffic was permitted or denied by network ACLs or security groups.
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/vpc-flow-logs-overview?u=76281980&t=95)** The last entry is a status message, indicating whether or not logs are being published normally. Flow logs are useful in creating a comprehensive networking picture of your AWS environment. However, there are some limitations to be aware of. First off, you can't create a flow log for a peered VPC, unless that VPC is in the same AWS account. Once a flow log is created, its configuration cannot be altered. If you want to change a flow log's configuration, the only way to do it is by creating a new flow log and deleting the old one. If you have multiple IP addresses associated with a given network interface, the flow log will always display the primary IP in the destination address field. Finally, calls to some internal AWS traffic is restricted. This includes things like [[Windows]] license activation, instance [[Metadata]], and traffic associated with the default VPC router's reserved IP address.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1), [[Windows]] (1), [[Metadata]] (1)
> **Env Vars:** vpc (12), aws (5), iam (1), tcp (1), udp (1)
> **CLI Commands:** aws (5)
> **Analogies:** similar to (1), picture (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - experienced (1)

#### [Create and configure VPC Flow Logs](https://www.linkedin.com/learning/aws-networking-14125632/create-and-configure-vpc-flow-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/create-and-configure-vpc-flow-logs?u=76281980&t=0)** - [Instructor] With an understanding of what VPC flow logs are, let's open up the AWS Web Console and set one up for a VPC. Before diving in, let's just review the steps. They're pretty straightforward. You first have to create a CloudWatch log group as a destination for the flow logs. Then, you go ahead and actually create the flow log itself. As part of the creation process, you also need to ensure that the appropriate identity and access management policy exists. If one doesn't, you can create one during the flow log creation process. Here I am in the VPC dashboard back in the Ohio region. Before creating a VPC flow log, the first thing I need to do is make sure I have a CloudWatch log group where the flow logs can be published. To create one, I need to navigate to the CloudWatch section of the AWS Console. To do so, I drop down the services menu and start typing CloudWatch. When the CloudWatch link appears, I simply click on it. From the CloudWatch page, I click on the logs link in the left-hand navigation. Since this is the first time I'm setting up a CloudWatch log in this region, I'm presented with a default screen describing a little bit more about what CloudWatch logs are. To proceed, I click the blue let's get started button in the middle of the screen. At this point, I drop down the actions button and choose create log group. I'm going to name this log group with the same name as the VPC I want to capture flow logs for. So I type demo and then click the blue create log group button. Now, the log group has been created.
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/create-and-configure-vpc-flow-logs?u=76281980&t=95)** The next thing I need to do is choose the VPC to associate with it. To do so, I head over to the VPC dashboard. Then I click into the VPC section and choose the demo VPC. In order to create the flow log itself, I drop down the actions menu and choose create flow log. In the create flow log screen, the first thing I can choose is the filter. Here, I can specify whether I want to log all network traffic or only accepted or rejected traffic. For illustrative purposes, I'm going to choose all. This makes life easier since it will capture both accepted and rejected traffic. In addition, flow logs are in a format that are easily parsable by other tools for analysis. I'm going to go ahead and send these to a CloudWatch log instead of an S3 bucket. For the destination log group, I select the demo CloudWatch log group that I just created. The next thing I have to do is assign an identity and access management role. I don't already have one configured, so I click the setup permissions link in the middle of the screen. This opens up a pre-populated identity and access management or IAM create role screen in a new browser tab. Clicking the little triangle next to the view policy document lets me see the policy in [[JSON]] format. For my purposes, this default policy is just fine, so I go ahead and proceed by clicking the blue allow button in the lower right portion of the screen.
>
> **[3:08](https://www.linkedin.com/learning/aws-networking-14125632/create-and-configure-vpc-flow-logs?u=76281980&t=188)** That takes me back to the VPC dashboard. I can simply close that browser tab. Opening the IAM role dropdown, I now see my flow logs role at the bottom as an option. I select that and then click the blue create button on the right side of the screen. That's it. Relatively straightforward. At this point, it will take 10 to 15 minutes for flow logs to appear.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1)
> **Env Vars:** vpc (10), aws (2), iam (2), json (1)
> **UI Navigation:** click on (2), select the (1), dropdown (1)
> **CLI Commands:** aws (2), make (1)
> **Tools:** aws console (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Explore VPC Flow Logs](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-flow-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-flow-logs?u=76281980&t=0)** - [Instructor] Now that we know a bit about flow logs and have set one up, let's dive in and see what they can tell us. Here I am at the VPC dashboard. In order to get to the flow logs, I need to first select a VPC, so I click on the VPCs link. Remember that we created a flow log for the demo VPC. Selecting the demo VPC, I make sure that I navigate to the flow logs tab in the bottom half of the screen. To get to the CloudWatch, where I can start to examine the contents of a flow log, I click on the link under destination name. This opens up the CloudWatch log groups page in a separate browser tab. Here we see log streams for each active network interface. Let's take a peek at what one contains. My eyes are immediately drawn to the right where everything looks great. That is, these are all accepted connections, but what I'm more interested in in this case is rejected connections. So I filter by the [[Microsoft Word|word]] 'reject.' I see quite a few reject messages. Let's drill into one of them. What I first look at are the fourth and fifth columns, which show the source IP address and the destination IP address. So the source IP address, the 92 63 194 21 in this case, is trying to get to my internal host, which has a 192 168 0 247 address. The seventh column shows the port on which the connection was attempted, or in this case rejected. 33 89 is the port for remote desktop protocol,
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-flow-logs?u=76281980&t=96)** that is if you're trying to establish a remote desktop connection to a [[Windows]] instance. If we're interested in more specifics, we can highlight and copy the network interface in question, then in a new tab to figure out what network interface that corresponds to, I need to get to the [[Amazon EC2|EC2]] dashboard. Dropping down the services menu, I right-click on the EC2 link and open it in a new tab. Navigating to that tab, I scroll down until I get to the network and security section, and then click on the network interfaces link. This page shows the active network interfaces for this region. What I want to do is filter by the network interface ID that I copied over. So I type that in and filter by it. Very quickly, I can see the VPC in which this network interface exists. as well as its subnet. To drill into what the actual host is, I can simply click on the instance ID. This takes me to the EC2 page filtered by that instance ID, and in this case, I have a bastion host for Windows connectivity in my public subnet. So since we were seeing rejects on port 33 89, it looks like there are some bad guys out there knocking on the door trying to connect to this bastion host. Fortunately, I've taken appropriate [[Network Security]] control precautions, and their connections are getting rejected. This illustrates why you need to be very careful with your security groups and network ACLs. If you allow broad access, and have easily compromised services enabled on your EC2 instances,
>
> **[3:10](https://www.linkedin.com/learning/aws-networking-14125632/explore-vpc-flow-logs?u=76281980&t=190)** you're asking for trouble. Depending on your policies and requirements, you'll want to determine how long to keep flow logs around for further analysis. For example, you might be interested in determining if there are patterns of attempted penetration. Navigating back to the CloudWatch logs and scanning down, we can see that there are a number of unique external IP addresses that are knocking on port 33 89. You may be interested in identifying if there is a pattern as to where these attempted penetrations are coming from. Fortunately for you, flow logs follow a very distinct format. There are a number of [[Microsoft Products|products]] available on the market that can ingest flow log data to help you visualize their contents and unlock the insights they contain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (4), [[Windows]] (2), [[Microsoft Word|Word]] (1), [[Network Security]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** vpc (5), ec2 (4)
> **UI Navigation:** click on (4), navigate to (1), right-click (1), scroll down (1)
> **Ports:** port 33 (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. VPC Peering

[↑ Back to Table of Contents](#table-of-contents)

#### [VPC peering overview](https://www.linkedin.com/learning/aws-networking-14125632/vpc-peering-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/vpc-peering-overview?u=76281980&t=0)** - [Instructor] As your use of AWS grows, you may find yourself needing to establish private network connectivity between VPCs. Perhaps you have services you want to share across VPCs in a single account, or have the need to connect privately to a partner operating in AWS. Consider the following example. A company has a development department operating in the Central Canada region. To make financial management easier, the research department has its own AWS account. Similarly, the company's research organization has its own AWS account with resources in the Paris region. A VPC exists within each account. The company carefully manages its private IP space to ensure no overlap exists across its divisions. The research group was allocated space within the 192 address range, while the development group is working in the 10 space. Each group has a public subnet within its VPC, as well as a private subnet. The company needs to share resources between its researchers and its developers. To facilitate that, a VPC peering connection will be established between the two VPCs. In this case, the company wants private resources in the research account to have access to private resources in the development account and vice versa. The research department also wants the ability for instances within its public subnet to privately communicate with the development department's private subnet. The developers, however, don't have the same need. In order to ensure that traffic flows appropriately,
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/vpc-peering-overview?u=76281980&t=94)** the respective route tables will need to be updated.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), vpc (3)
> **CLI Commands:** aws (4), find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Implement VPC peering](https://www.linkedin.com/learning/aws-networking-14125632/implement-vpc-peering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/implement-vpc-peering?u=76281980&t=0)** - [Instructor] With an understanding of what VPC peering is, I've created the VPC in Canada and the one in Paris. Remember they have non overlapping IP space. Let's dive into the AWS console to establish connectivity between them with a VPC peering connection. Here I am at the VPC dashboard. Note in the upper right corner, I am in the central region. Dropping that down, we verify that what's displayed as central is located in Canada. To establish appearing connection, I locate the peering connections link in the left-hand nav and click on it. In order to get started, I click the blue create peering connections button. The first thing I need to specify is a name for this peering connection. In this case, since we're connecting Canada with Paris, I'm simply going to call it Canada Paris. The next thing I need to do is select the VPC from which this peering connection will originate. In this case, I'm selecting the development VPC. Note that the cider block it shows for this VPC is what we illustrated in the previous video. Scrolling down a little bit we get to choose where the target VPC exists. Note that we have the option to connect to a VPC in this account or in a separate AWS account. In this case, I'm simply establishing connectivity from one region to another region in the same account. So I leave it as my account. In the next option, I specify another region. The region I want to connect to is in Paris. So I dropped down the selection box
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/implement-vpc-peering?u=76281980&t=93)** and start typing Paris until the typer head completes. Once I see the region in question, I simply click it. The next thing I need is the VPC to which I will connect. Note that this does not auto-populate. Let's go ahead and retrieve the VPC ID for the target VPC now. Dropping down the region locator, I find Paris in the list, right Click on it and choose open in a new tab. Notice that clicking on that tab takes me to the established peering connection dialog box. Where I want to be instead, is at the VPC main console. So I dropped down the services link and select VPC. From the [[Dashboards]] I click the your VPCs link in the left-hand nav. My target VPC is the Paris research VPC. So I simply copy the ID for that VPC and click back on my original tab. In the VPC acceptor box, I paste the value for that VPC ID. Okay, everything looks good. So I go ahead and click the blue create peering connection button on the lower right portion of the screen. Very quickly, I get a success message indicating that the peering connection has been requested. If I click the blue okay Button here, it takes me back to the create peering connection screen. Although it initially says I don't have any peering connections, clicking the refresh button shows that I have a pending acceptance peering connection. I'm just going to expand that status column so we can read the whole thing. In order for that connectivity to be actually established, we need to accept that request from the other region.
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/implement-vpc-peering?u=76281980&t=189)** I can do that by clicking on the other tab. Note in the upper right corner, we are indeed in the Paris region. To accept the request, I scroll down to the peering connections link and click on it. Once again, I'm going to extend the status and peering connection columns. Note the peering connection ID. Note that we can verify that it is indeed the request we want to accept by clicking back in the original tab and verifying that it's the same peering connection ID, Since it is and everything looks good here, we simply dropped down the actions button and click accept request. A modal window appears, which prompts me with the details for this request. Since everything here looks good, I go ahead and click the yes accept button. Very quickly I get the message that the peering connection has been established. We've successfully established a private network path between these two VPCs. However, without modifying the route tables associated with each VPC, the traffic will not route appropriately. As a way of encouraging you to complete the [[Routing]] work at this point in the process, AWS embeds a modify my route tables now link in the confirmation screen. Let's go ahead and do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dashboards]] (1), [[Routing]] (1)
> **Env Vars:** vpc (20), aws (3)
> **UI Navigation:** click on (3), select the (1), scroll down (1)
> **CLI Commands:** aws (3), find (1)
> **Warnings:** note that (4)
> **Cross-References:** previous video (1), in the next (1)
> **Tools:** aws console (1)
> **Definitions:** is a  (1)

#### [Configure VPC peer routing](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-peer-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-peer-routing?u=76281980&t=0)** - [Instructor] Now that we've established a VPC peering connection, let's set things up so that we can appropriately route traffic between the research and development accounts. In the development account, I need to add a route to both subnets so that traffic heading to the 192.168.00/22 super net, uses the VPC peering connection. However, things are a little different in the research account. To satisfy my business requirement, I only need to update the route table for the private subnet. Remember, the researchers want to access both public and private systems in the development account. Finally, I will have to update the appropriate security groups to allow traffic from these new IP ranges. For the purposes of this video, I'm going to focus in on connectivity from an [[Amazon EC2|EC2]] instance in the private research subnet. I'll make the appropriate configuration changes so that it can access an EC2 instance in the private subnet of the development account. Let's jump into the web console for our research account in the Paris region. The first thing I want to do is verify my peering connection is active. So I go ahead and click on the peering connections link in the left-hand nav. Going to resize the bottom of the screen so it's a little bit more visible. Okay, note that the internal AWS ID for peering connection is prepended with PCX, which is short for peering connection. Looking at the details for that connection, I can see the local VPC and the peered VPC. The information I need in this case is the IP range of the peered VPC, which is 10.0.0/22. I'm going to go ahead and highlight that IP range
>
> **[1:37](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-peer-routing?u=76281980&t=97)** and copy it to my clipboard. Clicking on the route tables link in the left-hand navigation, takes me to the route tables configuration screen. The first thing I want to do is establish a route from my private subnet to the development IP range. I'm going to resize the name column so we can see the name of the route table we're working with. I select the Paris research priv RT route table, and click on the subnet associations tab. Here, I verify that my private 192.168.20/24 subnet is associated with this route table. Next, I click on the routes tab. I see one route for the local VPC, and another [[Routing]] all other traffic to the internet gateway. To add my route, I simply click the edit routes button. On the screen that pops up, I simply click the add route button, and paste in the IP range of the super net as the destination. For the target, I want to specify my peering connection. I could simply select peering connection from the dropdown, or start typing the AWS prefects of PCX. Doing so, brings up the peering connection that I just created. Okay, that looks good, so I click the blue save routes button. I quickly get the confirmation page showing that the routes were successfully edited. Closing out of that screen takes me back to route tables configuration page. Here, I can verify that the super net is now heading for that peering connection. Now that the routing infrastructure
>
> **[3:08](https://www.linkedin.com/learning/aws-networking-14125632/configure-vpc-peer-routing?u=76281980&t=188)** is set up in the research account, I need to create a similar route in the development account. I will also need to update security groups to allow research traffic to flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Routing]] (2)
> **Env Vars:** vpc (6), ec2 (2), aws (2), pcx (2)
> **UI Navigation:** click on (3), select the (1), dropdown (1)
> **CLI Commands:** aws (2), make (1)
> **Versions:** 192.168.00 (1), 10.0.0 (1), 192.168.20 (1)
> **Definitions:** short for (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Verify VPC peer routing](https://www.linkedin.com/learning/aws-networking-14125632/verify-vpc-peer-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/verify-vpc-peer-routing?u=76281980&t=0)** - [Instructor] Now, that we have a peering connection and updated route information for the VPC in Paris, we need to update the appropriate networking configurations in Canada. As a reminder, the IP space we're dealing with in Paris is in the 192.168.22 supernet. Specifically, we will be updating route information related to the private subnet in Paris. To validate this configuration, there are some [[Amazon EC2|EC2]] instances we're going to use. In Paris, there is an instance in the public subnet with an IP of 192.168.2.122. Meanwhile, in Canada, there are a pair of instances. One is in the public subnet with a private IP of 10.0.0.109. And the other is in the private subnet with an IP of 10.0.243. In order to get from the EC2 instance in the Paris private subnet to both instances in Canada, we need to do the following things, update the route table for the private subnet for traffic bound for the Paris private subnet, make the same modification to the Canadian public subnet's route table. And, finally, change the security group configuration for the EC2 instance in Canada. Since there are a number of configuration changes to make and automation is the key to managing infrastructure at scale, let's do this now through the AWS [[CLI]]. Okay, here I have three terminal [[Windows]] setup. Notice the two terminal windows on the left are on the same machine with the IP of 192.168.2.122. This is the machine in the Parisian private subnet.
>
> **[1:39](https://www.linkedin.com/learning/aws-networking-14125632/verify-vpc-peer-routing?u=76281980&t=99)** In the first window, let's try and ping the private IP of the instance in the Canadian public subnet. In the second window, let's ping the private IP of the private instance in Canada. Notice how both of these pings are not working. I created a short script to automate this. Let's take a quick peek at it in the other terminal window. Notice that the first command is adding the route information from the private subnet to the private subnet. The second command is adding the route information for the public subnet to the private subnet. And finally, the final two commands are making the security group changes. The first update allows SSH traffic, while the second update allows ICNP traffic. It's the second of the two, which will allow these pings to succeed. I'm going to go ahead and run that script now. Notice that immediately, we start to see pings returning. Okay, at this point, we're all set and the researchers in Paris can now access the resources they need in Canada.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Windows]] (2), [[CLI]] (1)
> **Env Vars:** ec2 (3), vpc (1), aws (1), cli (1), ssh (1)
> **Versions:** 192.168.2 (2), 192.168.22 (1), 10.0.0 (1), 10.0.243 (1)
> **CLI Commands:** make (2), aws (1), ssh (1)
> **Tools:** terminal (3)
> **Definitions:** is an  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 5. Transit Gateway

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Transit Gateway](https://www.linkedin.com/learning/aws-networking-14125632/understand-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understand-transit-gateway?u=76281980&t=0)** - [Instructor] Operating a network that connects multiple VPCs and multiple on-premises environments can present quite the management burden. AWS Transit Gateway is an elegant solution that lets you centralize network management. Transit Gateway is an AWS service that lets you optimize network management. Specifically, it centralizes network management for a given AWS region into a single hub. This is much simpler than managing multiple point-to-point VPC peering connections. You can connect multiple VPCs to an account with the Transit Gateway in order to manage traffic between those VPCs. If you're working with more than one AWS account, it is possible to peer Transit Gateway connections to manage traffic between those accounts. If you are using a VPN to connect with on-premises infrastructure, its connectivity into AWS can also be managed via a Transit Gateway. The same is true if you are using one or more AWS Direct Connect gateways. In order to understand how Transit Gateway accomplishes all of this, let's explore some foundational concepts. An attachment denotes what can be connected to a Transit Gateway. As mentioned, this includes VPCs, Direct Connect gateways, VPN connections, and peering connections to other Transit Gateways. In order to manage routes between attachments, there is a Transit Gateway route table. As you might expect, it is necessary to associate attachments with the route table. While a given attachment must be associated with a single route table,
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/understand-transit-gateway?u=76281980&t=93)** a given route table can handle more than one attachment. While routes can be dynamically propagated to the route table, VPCs require static routes when using a Transit Gateway. We'll get into greater detail about route propagation when we configure a Transit Gateway. Let's illustrate why Transit Gateway is virtually indispensable in a complicated network environment. Suppose you have some resources in a VPC in an account in US West Oregon region. You have additional resources in a separate VPC in the same account in the same region. Since you want to share data between these two VPCs, you would have traditionally established a VPC peering connection. Let's also say you have local resources which access assets in VPC B. In order to manage that connection, you would have set up a customer gateway, VPN gateway, and VPN connection. If you wanted assets in VPC A to access the local resources as well, you would traditionally need to create another VPN tunnel setup. At this point, I'm sure you can appreciate how adding locations using this point-to-point approach increases the management burden and complexity. Fortunately, Transit Gateway reduces the management overhead by allowing you to implement a hub-and-spoke model. In the previous scenario, your networks are connected across VPCs in your on-premise location in a point-to-point fashion. This can be simplified by creating a Transit Gateway. Each VPC needs an attachment point, as does the VPN gateway. When configured using Transit Gateway,
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/understand-transit-gateway?u=76281980&t=189)** management of that connectivity is centralized and simplified, and the point-to-point connections go away. You end up with a hub-and-spoke model of control. If you ever decide to use Direct Connect at a later date, Transit Gateway accommodates that as well. I'm sure you can appreciate how Transit Gateway can be beneficial. First off, Transit Gateway allows for simplified, centralized management of your network. With centralization comes an improved security posture. In addition, traffic between Transit Gateway and a given VPC uses AWS' infrastructure similar to VPC endpoints. That means it's private. Meanwhile, traffic between regions if you peered Transit Gateways is encrypted. High availability is built-in, just like it is with the NAT gateway service so you don't have to worry about architecting an HA solution if you use Transit Gateway. From a cost standpoint, Transit Gateway is billed per attachment and per gigabyte of data processed. For current pricing, please refer to the official AWS pricing page. If you only need to connect two VPCs together, Transit Gateway is overkill. However, in a complicated environment and certainly at scale, I'm confident that you'll find the benefits quickly outweigh the costs.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (9), aws (8), vpn (6), nat (1)
> **CLI Commands:** aws (8), find (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** configure (1), set up (1), setup (1)
> **Analogies:** similar to (1), just like (1)
> **Speakers:** - [instructor] (1)

#### [Implement Transit Gateway](https://www.linkedin.com/learning/aws-networking-14125632/implement-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/implement-transit-gateway?u=76281980&t=0)** - [Instructor] With an understanding of concepts related to the transit gateway, let's get into the console and configure one. Note that if you choose to follow along in your own account, you will incur a slight cost for each hour the transit gateway is up, along with associated costs for each gigabyte of data transferred. I find pictures are easy to help understand what we're about to do, so let's visualize it. We're going to start simple, just to underscore the concepts. First off, we have an administrative VPC containing a single subnet. Currently, it contains a single bastion host. We also have three independent VPCs consisting only of private subnets. Imagine that these belong to independent development teams. In order to establish connectivity from the administrative VPC to VPCs one through three, we will implement a transit gateway and ensure that the route tables are updated so that VPCs one through three are reachable from the bastion host while preserving independence. Note that the security groups for all instances in VPCs one through three have allow SSH and ICNP from any source IP. That will be important when it's time to verify this updated configuration. From the VPC console, I scroll down in the left-hand nav and click on the first link in the transit gateway section. To create a transit gateway, I simply click the blue Create Transit Gateway button. On the next screen,
>
> **[1:32](https://www.linkedin.com/learning/aws-networking-14125632/implement-transit-gateway?u=76281980&t=92)** I specify admin TGW as the name. For the description, I simply specify administrative use. For this demo, I'm going to leave the default configuration options for the transit gateway. Specifically, the default route table association and propagation settings will make this initial configuration a bit less work. Okay, everything here looks good, so I simply click the blue Create Transit Gateway button in the lower right. I quickly get a confirmation message that the request to create the transit gateway was successful. Closing out of that window takes me back to the transit gateway's configuration screen. The creation process for transit gateways takes a little bit of time. Note that the state is still in pending. In the next video, I'll proceed with creating transit gateway attachments, as well as examining the transit gateway route tables.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (3), ssh (1), icnp (1), tgw (1)
> **CLI Commands:** find (1), ssh (1), make (1)
> **Warnings:** note that (3)
> **UI Navigation:** scroll down (1), click on (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Configure Transit Gateway](https://www.linkedin.com/learning/aws-networking-14125632/configure-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-transit-gateway?u=76281980&t=0)** - [Instructor] Now that we have implemented a transit gateway, let's proceed with configuring it to facilitate communication between the VPCs. Back in the AWS console, I go ahead and click the refresh icon so that I can see if the status of the transit gateway is updated. Sure enough, it now shows that it is available. That means I can proceed with creating a transit gateway attachment one for each VPC. To do so, I click on the transit gateway attachments link, in the left-hand navigation. At the screen that follows, I click the create transit gateway attachment button to get started. In the attachment configuration screen, I first need to specify the transit gateway ID. Dropping it down, the transit gateway that was just created appears. Once again, it just underscores the importance of using the name tag appropriately. For attachment type, I specify that it is going to a VPC. However, if I was connecting to resources outside of AWS, I could specify the VPN attachment type here. Similarly, if I was peering to a transit gateway in a different region, I could specify that here as appearing connection. With that behind us, we need to specify a name for this attachment. I'm going to create an attachment for the administrative VPC first. So for the name, I simply specify administrative. Note in the VPC dropdown, I see all VPCs that are available in this region. In this case, the VPC I want to use
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/configure-transit-gateway?u=76281980&t=93)** is the one named bastion. Selecting it displays the availability zones in the region, as well as the sub dense that correspond to each EJZ. In this case, I have a single public subnet, so I don't need to do multi-select here. Everything looks good, so I simply click the blue create attachment button. Closing that out, I can see that this administrative attachment is in a state of pending. Now I simply repeat that process for the remaining three VPCs. I simply specify the transit gateway ID and then the name that I want to give this attachment. Note that the sub-net in this VPC is contained in a different availability zone. Spanning ACS is not a problem with the transit gateway. Everything looks good here, so I simply create the attachment. Only two to go. I know you're thinking at this point that this would be a wonderful place to jump into the [[CLI]] for some automation. If I open a new browser tab and search for the create transit gateway VPC attachment, I can see that it's contained in the documentation for the latest TLI. The example section has a sample command. I'm simply going to highlight it, copy it, and paste it into a script, replacing the parameters as appropriate. The first thing I need to do is retrieved the transit gateway ID. Back in the create transit gateway attachments screen,
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/configure-transit-gateway?u=76281980&t=189)** I simply cancel out and go back to the transit gateways link. The transit gateway ID is under the transit gateway column, so I simply copy it and put it into my script. Next, I need to retrieve the VPC ID for the second VPC. Back in the console, I simply scroll up to the VPC section and find the VPC I have called vpc2. Copying that ID, I paste it as the appropriate parameter in my script. Finally, I need to specify the sub-net ID. In the sub-net section, I'm looking for the sub-net that's associated with the second VPC. It happens to be the first one on this page, so I simply copy that and paste it into my script. Now, the last thing I need to specify is my named profile. That looks good, so let's give it a run. After a short wait, I get a confirmation message. Note that the state is pending. That makes sense as it takes a little while for this attachment to actually manifest. While we wait, let's go ahead and attach that final VPC. Since we're already on the subnets configuration page, what I want to grab is the subnet ID for vpc3. I also need to change the VPC ID. I'm a little leery of copying links,
>
> **[4:42](https://www.linkedin.com/learning/aws-networking-14125632/configure-transit-gateway?u=76281980&t=282)** so I'm just going to click on it and retrieve the VPC ID from the appropriate column. That should do it, so let's go ahead and give that a run. Wonderful. I see that that returned quickly and is in a state of pending. Back in the console, I scroll down and take a peek at what we've just done. Clicking on the transit gateway is attachment link shows me the VPC attachments that I've created. Note that the two attachments that I created via the command line, don't have a name tag associated with them. Let's go ahead and add those now. Let's use the AWS [[Amazon EC2|ec2]] create-tags command to name those appropriately. The first thing I need to specify is the resources flag. Since I still have the creation command output on my screen, I can simply highlight and copy the transit gateway attachment ID and specify it as the resource that I want to apply a name to. I then specify the name key and the appropriate value and then finally, my name profile. I can go ahead and edit that command to name the attachment for the third VPC. Navigating back to the AWS console, I refresh the page. Notice how all transit gateway attachments are all appropriately named and that they're all available. In the next video,
>
> **[6:16](https://www.linkedin.com/learning/aws-networking-14125632/configure-transit-gateway?u=76281980&t=376)** we'll take a peek at the transit gateway route tables and verify our configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** vpc (17), aws (4), vpn (1), ejz (1), acs (1)
> **CLI Commands:** aws (4), find (1)
> **UI Navigation:** click on (2), dropdown (1), scroll up (1), scroll down (1)
> **Tools:** aws console (2), command line (1)
> **Warnings:** note that (3)
> **Cross-References:** go back to (1), in the next (1)
> **Documentation:** the documentation (1)

#### [Validate Transit Gateway](https://www.linkedin.com/learning/aws-networking-14125632/validate-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/validate-transit-gateway?u=76281980&t=0)** - [Instructor] Now that we have created a Transit Gateway and four VPC attachments, let's explore the route table for that Transit Gateway. Picking up where we left off, I click on the transit gateway route table's link. This brings up the default route table that's automatically created when the Transit Gateway is manifested. The first thing I want to do is give it a name. On the lower half of the screen, we see some details about the route table itself. What I'm specifically interested in is the Associations tab. Here, we can see an association for each attachment that we created previously. I personally don't make a habit of memorizing internal AWS unique identifiers. Therefore, I'm not really sure which of these attachments correspond to which VPC. Fortunately, for me, the attachment ID and the resource ID are both links. Wonderful. Clicking on the first resource link, I see that it is associated with the administrative VPC. Clicking back to the transit gateway route table's area, I go to propagations. Here, I can see that the route for each attachment is propagated through this transit gateway. Finally, let's take a look at the Routes tab. The bottom portion of the screen shows me which CIDR block are getting propagated to which VPCs. Ideally, the name of the attachment or the VPC
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/validate-transit-gateway?u=76281980&t=94)** would show up here, but that's not how it works today. Okay, let's take a quick validation check and see how we did. Here, I have three terminal [[Windows]]. In each one, I've manifested a connection to a host in the administrative public sub-net. Note it's internal private IP of 172-16-0-76. In the terminal window on the left, I'm going to ping an instance in VPC1. In the top right I'm going to ping an instance in VPC2. And finally in the lower right, I'm going to ping an instance in VPC3. Note that no information is coming back. Let's take a quick look at the security group to see what's going on. In the AWS console, I open up the [[Amazon EC2|EC2]] configuration screen in a new browser tab. I see I have four running instances. Drilling in, let's take a quick look at the instance running in VPC1. We can see the VPC ID at the bottom of the screen. Let's take a quick look at the inbound rules associated with the security group. That looks okay. Both Port 22 and ICMP is open from anywhere on the planet. Can you think of why we're not getting any ping responses? Let's figure it out in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** vpc (5), aws (2), vpc1 (2), cidr (1), vpc2 (1)
> **CLI Commands:** aws (2), make (1)
> **Tools:** terminal (2), aws console (1)
> **UI Navigation:** click on (1), go to (1)
> **Ports:** port 22 (1)
> **Cross-References:** in the next (1)
> **Warnings:** note that (1)

#### [Challenge: Transit Gateway](https://www.linkedin.com/learning/aws-networking-14125632/challenge-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/challenge-transit-gateway?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/aws-networking-14125632/challenge-transit-gateway?u=76281980&t=5)** - [Instructor] Let's dig into the challenge in front of us, with the Transit Gateway setup. To refresh your memory, we have an Administrative VPC and three independent VPCs. We also have a Transit Gateway and its associated attachments. However, we are unable to route from the Bastion host to the independent VPCs because the route tables have yet to be updated. Your challenge, if you choose to accept it, is to solve the problem. Based on what you know so far, make the appropriate route table changes to allow traffic from each independent VPC to reach the Administrative VPC. Also, make sure that the reverse is true. However, be sure to not allow the independent VPCs to communicate with each other.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (3)
> **CLI Commands:** make (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Transit Gateway](https://www.linkedin.com/learning/aws-networking-14125632/solution-transit-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/aws-networking-14125632/solution-transit-gateway?u=76281980&t=5)** - As you recall, the challenge at hand is to make the appropriate route table changes that will allow traffic from each independent VPC to reach the administrative VPC. We also want the reverse to be true. That said, each independent VPC is to remain independent. In order to solve this challenge, we first need to update the route table for the public subnet in the administrative VPC to route all 10. IP space to the transit gateway. We then need to create a route for VPC 1 to let traffic flow back to the administrative VPC, via the transit gateway. We need to proceed to make the same change for VPC 2 as we did for VPC 1, and yet again for VPC 3. Recall that I had set up three terminal [[Windows]], all connected to the bastion host, each one pinging a separate instance in VPCs 1 through 3. In the fourth window, let's take a peek at a script I created that will make the appropriate route changes for me. Let's come down and step through the [[Amazon EC2|EC2]] create-route command. The route table ID being specified in the first parameter has a subnet association with the public subnet for the administrative VPC. In terms of the destination CIDR block, note that it's [[Routing]] the entire 10. IP space. I can specify an all-encompassing CIDR block here
>
> **[1:42](https://www.linkedin.com/learning/aws-networking-14125632/solution-transit-gateway?u=76281980&t=102)** because each of the independent VPCs reside in the 10. IP space. This also futureproofs us. For example, if a fourth VPC were to come online in the 10. IP space, we wouldn't have to create a new route table entry for traffic to flow there. The third parameter specifies the transit gateway ID. Even if you don't regularly commit transit gateway IDs to memory, this one should look familiar based on the videos we've seen so far. The last parameter is simply the named profile. Let's scroll down and take a look at the next section. In this section, the route table ID corresponds to the private subnet for VPC 1. In this case, the CIDR block is the 172.16 IP space belonging to the administrative VPC. Note that the transit gateway ID parameter is the same, performing its hub duties. The next two commands are remarkably similar. The only things that change are the route table IDs. Now that we understand what the script is about to do, let's go ahead and run it. We should see the pings start to return almost immediately. Wonderful. It looks like our solution worked. Now, let's just confirm, in one of the VPCs, that the VPCs themselves are still independent.
>
> **[3:17](https://www.linkedin.com/learning/aws-networking-14125632/solution-transit-gateway?u=76281980&t=197)** I'm going to break out of that ping and establish an SSH connection. As you can see from the 10.0.0.194 IP address, I am now on one of the machines in the private subnet for VPC 1. Let's go ahead and see if we can ping the 10.1.0.153 machine. As intended, that host is unreachable. Let's just verify that the same is true for the 10.2.0.14 instance. Similarly, that host is unreachable. To visualize what we just accomplished, we updated the appropriate route tables, which means congratulations is in order. The traffic is flowing as intended.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Amazon EC2|Ec2]] (1), [[Routing]] (1)
> **Env Vars:** vpc (14), cidr (3), ec2 (1), ssh (1)
> **CLI Commands:** make (3), ssh (1)
> **Versions:** 172.16 (1), 10.0.0 (1), 10.1.0 (1), 10.2.0 (1)
> **Warnings:** note that (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)


### 6. Route 53

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure Route 53 DNS](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-53-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-53-dns?u=76281980&t=0)** - [Instructor] Route 53 is the AWS service for DNS and traffic management. Let's look at some of its most basic DNS features and try and register a domain name. Here I am at the main AWS Console. The first thing I need to do is navigate to the Route 53 configuration screen. To find Route 53, I simply start typing Route 53 in the Find Services box and click the link that appears. If you have never done anything in Route 53 before, you will see a screen that looks just like this. You see the four main options, including [[DNS Management]], traffic management, availability monitoring, and domain registration. In this case, I want to look at domain registration options. So, I click the blue Get Started Now button. If you have ever registered a domain before, this flow will feel pretty familiar. Note that AWS supports transferring a domain you already own as well as registering a new one. Since I want to register a new one, I simply click the blue Register Domain button. This brings up the Choose a domain screen. The first step is to search for a domain you want to register. For example, I want to register sbndemo. Searching for sbndemo shows that [sbndemo.com](https://sbndemo.com) is available. AWS also makes some suggestions down below in case I'm interested in registering sbndemo with a different top level domain. Note that AWS supports most top level domains. Note that the dropdown list is sorted preferentially by popularity.
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-53-dns?u=76281980&t=94)** If you scroll down a ways, you can see that many more are supported. However, note that not all domains are supported. For example, looking at .a shows, academy, accountants, adult, agency, apartments, associations, and auction. What if I wanted sbndemo.army? Well, if I wanted that, I'd have to go over and find it somewhere else. In a new browser tab, I opened the popular registration site [namecheap.com](https://namecheap.com). Here, I searched for sbn.army, which is a relatively new top level domain. It's available here and not in AWS. I'm sure that will change over time. Okay, since sbndemo is what I want to register, I simply click the Add to Cart button, scroll to the bottom of the screen, and click the blue Continue button. This brings up the contact details registration page, where you would specify all of the information about who should be contacted for this domain. Instead of purchasing the domain in real time in this video, let me switch to another account, where I have already registered sbndemo with the .org top level domain. In this account, when I navigate to the Route 53 dashboard note that it looks different. That's because I already have some activity here. What I want to do is examine the configuration for [sbndemo.org](https://sbndemo.org) so I simply click Hosted Zones. The hosted zone page shows me all of the domains that I am managing with Route 53. I'm going to click on the [sbndemo.org](https://sbndemo.org) domain now
>
> **[3:10](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-53-dns?u=76281980&t=190)** to see how it's currently set up. When you register a new domain in Route 53, the start of authority and name server record sets are already created for you. If you want to create a new DNS record set, it's as simple as clicking the blue Create Record Set at the top of the screen, this opens up the Create Record Set panel on the right side of the screen. Let's take a quick look at the types of records you can create. Route 53 supports a number of DNS record sets, including IPV4 and IPV6 addresses, canonical name, mail exchange, text pointer, service locator, sender policy framework, and name server entries. For more information on DNS specifics, please check out other offerings in our course library. In the next video, let's look at an AWS specific feature of Route 53 that illustrates how you can point an address record to an S3 bucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DNS Management]] (1)
> **Env Vars:** aws (7), dns (6), ipv4 (1), ipv6 (1)
> **CLI Commands:** aws (7), find (3)
> **Warnings:** note that (5)
> **URLs:** [sbndemo.org](https://sbndemo.org) (2), [sbndemo.com](https://sbndemo.com) (1), [namecheap.com](https://namecheap.com) (1)
> **UI Navigation:** dropdown (1), scroll down (1), switch to (1), click on (1)
> **Analogies:** for example (2), just like (1)
> **Cross-References:** in the next (1)

#### [Understand Route 53 alias](https://www.linkedin.com/learning/aws-networking-14125632/understand-route-53-alias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understand-route-53-alias?u=76281980&t=0)** - Route 53 has a very interesting extension to DNS that provides unique hooks into other AWS services. This feature is called a Route 53 alias resource record set. An alias resource record set is an AWS-specific extension to regular DNS. A Route 53 alias can be configured to point to an S3 bucket, which has been configured to be available as a static website. This allows you to host a static website in S3 and manage its domain in Route 53. An alias can also reference an Elastic Load Balancer. This is useful if you are fronting multiple [[Amazon EC2|EC2]] instances with an ELB. You can make application-level changes, alter your availability zone strategy, or incorporate auto-scaling groups to meet elastic demand without worrying about having to reconfigure DNS. If you want to take advantage of CloudFront as your content delivery network, you'll be happy to know that an alias can point to a CloudFront distribution. If you use Elastic Beanstalk to deploy applications, an alias can point to an Elastic Beanstalk environment. An alias record can also be configured to point to the API Gateway, as well as a VPC interface endpoint. To illustrate the concept, I'm going to set up a static website in S3, then configure an alias in Route 53 to point to it. From the AWS Console, I'm going to search for S3, click on the resulting link, and open up the S3 Management Console. While I have a bunch of buckets in here, I'm going to filter on SBN Demo and open that bucket.
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/understand-route-53-alias?u=76281980&t=95)** Notice that this bucket contains an index.[[HTML]] file as well as an s404.html file. Clicking on the link for the s404.html file opens its page, and clicking on the object URL at the bottom shows that it contains a simple error message. Navigating back to the bucket, clicking on the index.html and it's result in object URL shows that it contains a simple welcome page. Let's open up a new browser tab and try and go to [sbndemo.org](https://sbndemo.org). We get a site can't be reached error, since it hasn't been set up in DNS. In the next video, let's make sure the S3 bucket settings have been updated appropriately before changing Route 53 to point to this bucket.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Amazon EC2|Ec2]] (1)
> **Env Vars:** dns (4), aws (3), url (2), ec2 (1), elb (1)
> **CLI Commands:** aws (3), make (2)
> **File Paths:** index.html (2), s404.html (2)
> **Prerequisites:** set up (2), configure (1)
> **UI Navigation:** click on (1), go to (1)
> **Definitions:** is called (1), is an  (1)
> **URLs:** [sbndemo.org](https://sbndemo.org) (1)

#### [Configure Route 53 alias](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-53-alias?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-53-alias?u=76281980&t=0)** - [Instructor] In this video, we pick up where we left off and configure a static website in S3. To get that done, we're going to follow three straightforward steps. The first is to verify the object permissions inside the S3 bucket. The second is to verify the permissions on the bucket itself. Finally, we'll go into route 53 and create the alias record. We left off inside the [sbndemo.org](https://sbndemo.org) bucket. The first thing I need to do, is make sure that the index.[[HTML]] and the s404.html, are both publicly available. So, I select both of them and then choose the make public option from the actions menu. Making specific objects public, is a pretty powerful action. And AWS wants to make sure that you know what you're doing. In the modal window that appears, it gives you a little warning near the bottom. In this case, this is exactly what I want to do. So I click the blue Make Public button. The next thing I need to do, is to set up the bucket properties appropriately. To adjust them, I click the Properties tab. Here I can see some of the S3 options about versioning , server access logging, et cetera. What I'm interested in, is static website hosting. Note that it's currently disabled. Clicking on that box, allows me to use this bucket to host a website. It's the first option in the list. The first thing I need to do, is specify the index document. In this case, it's the index.html file. I also can specify the error document.
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/configure-route-53-alias?u=76281980&t=93)** In this case, it's the s404.html file. Okay, everything here looks good, so I click the blue Save button. I get the resultant check mark, that bucket hosting is now available. Now let's navigate back to route 53 and set up the alias record. I drop down to services link, and since I recently was in route 53, it's in my history. This brings me to the route 53 management console where I click on Hosted Zones. [sbndemo.org](https://sbndemo.org) is the one I want to manipulate. Okay, what I want to do here, is click the blue Create Record Set near the top of the screen. In the create record set detail on the right, what I specify is that I want to create an alias. To specify an alias target, I can type it out if I know it or simply click in that box. Note that the first entry in the list, refers to the S3 website endpoint. Since my bucket name is [sbndemo.org](https://sbndemo.org) and I've configured it appropriately, it shows up as an available option here. Okay. Everything here looks good. So I simply click the blue Create button, near the bottom of the screen. Since all of these changes are internal to AWS and point to internal AWS services, the DNS propagates relatively quickly. Let's go back to the browser tab where we first try to load [sbndemo.org](https://sbndemo.org). By refreshing the page, I see that it now resolves to my static S3 site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4)
> **CLI Commands:** make (4), aws (3)
> **File Paths:** index.html (2), s404.html (2)
> **URLs:** [sbndemo.org](https://sbndemo.org) (4)
> **Env Vars:** aws (3), dns (1)
> **Warnings:** note that (2), warning (1)
> **Prerequisites:** set up (2), configure (1)
> **Definitions:** is a  (1), refers to (1)

#### [Understand private DNS](https://www.linkedin.com/learning/aws-networking-14125632/understand-private-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understand-private-dns?u=76281980&t=0)** - [Instructor] One very useful feature of Route 53 is the ability to configure Private DNS for a VPC. Let's explore a use case, illustrating why you might want to use Private DNS within a VPC, then go into the console and set it up. Let's say you are operating an application out of U.S. West and are using Route 53 to manage DNS. Within the U.S. West region, the current version of the application runs on an instance within a VPC. You can configure a public-hosted zone in Route 53 to direct users to this application. When a user tries to access the application, Route 53 will handle the DNS query and direct them to the appropriate instance. Meanwhile, in your Development VPC, you are hard at work on application updates. Prior to deploying the new version of your application, you want to test it from the perspective of a user. The scope of your testing includes using the actual domain for the application. In order to complete your testing, you configure an internal-hosted zone in Route 53. In that configuration, you specify an A record, which points to the IP of your Development instance. Once that has been configured, any DNS query originating from within the Development VPC will be directed to the Development application without affecting production at all. In the next video, let's dive into the console and make this happen.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5), vpc (5)
> **Prerequisites:** configure (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Explore a private DNS scenario](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-private-dns-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-private-dns-scenario?u=76281980&t=0)** - [Instructor] Static websites in S3 are wonderful. However, I'm looking for something a little more dynamic. I want to change [sbndemo.org](https://sbndemo.org). Replacing my static S3 site with a [[WordPress]] blog. Let's go into the console and see how this can be accomplished. Here I am at the [[Amazon EC2|EC2]] dashboard where I can see I have two running instances. Clicking on the Running Instances link shows me a little bit more detail about the instances themselves. One is my [[Wordpress Development]] environment and the other is a [[Windows]] Testbox. Looking at the details for the WordPress instance, I see it has a private IP address of 10.0.0.26 and no public IP address. Therefore, it is only accessible from within the VPC. Note that the VPC it is contained in is the WP-demo VPC. Now, let's take a look at the details for the Windows Testbox. Note that it resides in the same VPC as the WordPress instance. Let's log into the Windows machine and test it out. To do so, I click the Connect button. First, I need to download the Remote Desktop file. Then I need to decrypt the password for the administrator. Remember key pairs? That's what I need to specify here. I specify my research key pair, open it up, and decrypt the password. Thank goodness I can simply copy this as that would be a nightmare to type. I get it certificate warning message from RDP, which I can safely ignore and simply click the blue Continue button.
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-private-dns-scenario?u=76281980&t=93)** Here's where I paste in that passage, and then simply continue. Here I am on the Windows Testbox. The first thing I want to do is verify that my public DNS is working. So I pop open a browser and look up [sbndemo.org](https://sbndemo.org). As I can see, it's resolving to my static S3 site. Now, let's grab the private IP address of that WordPress instance. I'm going to close out of this modal window, unselect the testbox for Windows, and then select the WordPress dev instance. Grabbing that private IP, I go back to my Windows environment. And in a new new tab, I'm going to paste in that address. Note that this brings up my WordPress blog. However, for my testing purposes, I don't want to use that internal IP address. Instead, I want to use the fully qualified [sbndemo.org](https://sbndemo.org) name. We can make that happen with a private hosted zone in Route 53. Let's do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (6), [[Windows]] (6), [[Amazon EC2|Ec2]] (1), [[Wordpress Development]] (1)
> **Env Vars:** vpc (4), ec2 (1), rdp (1), dns (1)
> **Warnings:** note that (3), warning (1)
> **URLs:** [sbndemo.org](https://sbndemo.org) (3)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** make (1)
> **Versions:** 10.0.0 (1)
> **UI Navigation:** select the (1)

#### [Configure private DNS](https://www.linkedin.com/learning/aws-networking-14125632/configure-private-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-private-dns?u=76281980&t=0)** - [Instructor] To facilitate testing that includes a domain name, let's set up a private hosted zone in Route 53. Back in the AWS console, let's navigate to the Route 53 dashboard in a separate tab. From the dashboard, I click the hosted zones link. Here, I can see the public hosted zone for [sbndemo.org](https://sbndemo.org). To add a private zone, I click the blue create hosted zone button near the top of the screen. For the domain name, I specify [sbndemo.org](https://sbndemo.org). In the comment text entry, I simply type private zone for testing. In the type dropdown menu, I select private hosted zone for Amazon VPC. The next thing I need to do is specify a VPC ID. Clicking in that box shows all available VPCs. As you can see, the VPC ID is displayed as well as the name tag of the VPC. That's just another reason why I'm a big fan of using name tags. In this case, the one I want is the WP dash demo VPC. It's worth paying attention to the message immediately beneath the VPC ID. It says that in order to use private hosted zones, the DNS host names and support settings for the VPC must be set to true. This happens to be the default setting when you create a new VPC. It's also true in this case. Okay, everything looks good, so I go ahead and click the blue create button near the bottom of the screen.
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/configure-private-dns?u=76281980&t=94)** Now that we have created a private hosted zone, we need to create a record set. Let's go ahead and create an A record that points to the internal IP address of the [[WordPress]] instance. To get started, I click the blue create record set button. I don't need to specify a name, but I do need to specify an IP address. To get that, let's go back to the other tab. Selecting the WordPress dev instance, I slide down and copy its private IP address. Back in the Route 53 tab, I simply paste that into the value section. While there are a variety of [[Routing]] policy options, it's simple that I want. Okay, everything looks good here. So I click the blue create button. Now, let's go back to the [[Windows]] test box and validate that that configuration worked. Here, we have the IP address, which resolves to the blog. In the original tab, we have [sbndemo.org](https://sbndemo.org), which was resolving to our static S3 site. Let simply refresh that page. Note that that resolves to the WordPress instance, using private DNS. Meanwhile, back on my Mac, let's validate that the public has yet to be impacted. I simply pop open a new browser tab, and put in [sbndemo.org](https://sbndemo.org). As expected, using public DNS, that still resolves to my static S3 site. There you have it. Production users have not been affected, while I can fully simulate the new sites [[User Experience (UX)|user experience]]
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/configure-private-dns?u=76281980&t=189)** from within the confines of my VPC. When I have finished my internal testing, I can easily assign an elastic IP to the WordPress instance and update the DNS entry for my public zone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (4), [[Routing]] (1), [[Windows]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** vpc (9), dns (4), aws (1)
> **URLs:** [sbndemo.org](https://sbndemo.org) (4)
> **Cross-References:** go back to (2)
> **CLI Commands:** aws (1)
> **Tools:** aws console (1)
> **UI Navigation:** dropdown (1)
> **Warnings:** note that (1)

#### [Understand Elastic IP addresses](https://www.linkedin.com/learning/aws-networking-14125632/understand-elastic-ip-addresses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understand-elastic-ip-addresses?u=76281980&t=0)** - [Instructor] Elastic IP addresses are one of the cornerstones that allow for flexibility in delivering IT services with AWS. Let's explore some of the useful characteristics of an elastic IP or EIP. An elastic IP is a static IP address that can be pointed to an [[Amazon EC2|EC2]] instance. You can move an EIP from one instance to another. This is [[SDN|software-defined networking]] or [[SDN]] at its finest. While I don't know what software AWS uses for SDN, I do know that you don't have to be an SDN expert to use an EIP. Be advised that if you happen to move an EIP to an instance with a public IP, the existing public IP is released back to the AWS pool. You can't reuse it. Note that EIPs cannot be moved between AWS regions. That said, you can move it across VPCs, which is an extremely useful capability. For instance, if you do blue-green deployments to production using separate VPCs, an EIP can help you get there. One of my favorite things about EIPs is that there is no cost associated with using them. However, there is a caveat. If you reserve an address, but it is not associated with a running instance, you will incur an hourly charge of roughly one US cent. Let's briefly visualize a scenario in which an EIP helps. For example, suppose you run production out of US West. Thinking ahead, you create an EIP within this region and use it in front of your public applications.
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/understand-elastic-ip-addresses?u=76281980&t=96)** Now, you are ready to deploy a new software release. Making full use of disposable infrastructure, you create a new production instance instead of migrating code to your existing one. To cut traffic over, all you need to do is disassociate the EIP from the first server and make a new association with the second. I think you'll agree this is a remarkably useful capability.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SDN]] (3), [[Amazon EC2|Ec2]] (1), [[SDN|Software-defined networking]] (1)
> **Env Vars:** eip (8), aws (4), sdn (3), ec2 (1)
> **CLI Commands:** aws (4), make (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for instance (1), for example (1)
> **Warnings:** note that (1), caveat (1)
> **Speakers:** - [instructor] (1)

#### [Use Elastic IP and Route 53](https://www.linkedin.com/learning/aws-networking-14125632/use-elastic-ip-and-route-53?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/use-elastic-ip-and-route-53?u=76281980&t=0)** - [Instructor] Now that we understand what an Elastic IP is, let's use one in concert with Route 53 to make my [[WordPress]] site public. Consider [sbndemo.org](https://sbndemo.org)'s public status. Currently, Route 53 is simply pointing to an S3 bucket. I'm going to add an EIP to the mix and associate it with my WordPress instance, then I'll change [sbndemo.org](https://sbndemo.org)'s A record in Route 53 to point to the EIP. This will make my WordPress site public. Before we dive into the console, let's quickly recap what we're about to do. First, I'm going to allocate a new Elastic IP. After I have a new EIP, I'm going to associate it with my WordPress instance. With that done, I'm going to update the A record in Route 53 for [sbndemo.org](https://sbndemo.org). And finally, I'll wait for DNS to propagate this change. Here I am in the AWS console. The first thing I need to do is allocate an EIP, so I scroll down in the left-hand nav to the network and security section. Here, I click on the Elastic IP link. To allocate a new one, I simply click the allocate Elastic IP address. Note that I have an option here. I can either use one of Amazon's IPv4 addresses, or if I had my own pool, I could use one of my own. In this case, I simply want to use one of Amazon's, so I click the Allocate button. Very quickly, I get the message that the IP address has been allocated. Remember, there's an hourly charge for unassociated EIPs, so I'm going to make that association now.
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/use-elastic-ip-and-route-53?u=76281980&t=96)** I'm going to do it directly from this screen by clicking the associate this Elastic IP address button in the top right corner. On the association screen, I want to connect this EIP with an instance. I have two running instances currently, and the one I'm interested in is the WordPress one. Once again, note how useful name tags are. With that done, I simply click the Associate button. Very quickly, I get the message that the Elastic IP address has been associated. Scrolling back up to the instances link, I can verify that by getting the details for the WordPress machine. Note that it now has a public IPv4 address. After copying that to my clipboard, I'm going to head over to the Route 53 management console. In this case, I don't need to update the private hosted zone, but rather the public one. Navigating back to the hosted zones dashboard, I select [sbndemo.org](https://sbndemo.org). What I need to do is modify this record set, selecting the A record for [sbndemo.org](https://sbndemo.org). I no longer want an alias. Instead, I'm going to specify the public IP address of my EIP. Since that looks good, I click the blue Save Record Set button. I'm going to make the same change for the fully qualified www.[sbndemo.org](https://sbndemo.org) A record. Let's go back to that third browser tab.
>
> **[3:14](https://www.linkedin.com/learning/aws-networking-14125632/use-elastic-ip-and-route-53?u=76281980&t=194)** Remember, I had previously loaded [sbndemo.org](https://sbndemo.org) and it was pointing to S3. Let's go ahead and click Refresh now. Wow, that DNS propagation sure was quick. Now my WordPress site is live to the world.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WordPress]] (7)
> **Env Vars:** eip (6), dns (2), aws (1)
> **URLs:** [sbndemo.org](https://sbndemo.org) (7)
> **CLI Commands:** make (4), aws (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Warnings:** note that (2)
> **Cross-References:** go back to (1)
> **Tools:** aws console (1)


### 7. Global Considerations

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand CloudFront](https://www.linkedin.com/learning/aws-networking-14125632/understand-cloudfront?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understand-cloudfront?u=76281980&t=0)** - [Instructor] If you operate with a national or global breach, you'll want to understand how CloudFront can help you improve the experience for the people who use your systems. The most fundamental thing to understand is that CloudFront is a content delivery network. This simply means that CloudFront can use the edge locations of the AWS Global Edge Network to cache content in a distributed fashion around the globe. You may be familiar with other CDN providers, such as Akamai and Cloudflare. Let's walk through an example of how CloudFront can improve the experience of the people who use your systems. Suppose you have an image you want to share and decide to put it in S3. Since S3 is a regional product, you have to specify the region in which you want your image to be stored. In this case, us-east-2 in the U.S. state of Ohio is selected. If you have a user in the U.S. state of Wisconsin, this person has a good experience because Wisconsin is geographically close to Ohio. However, if you have people in Mumbai, Los Angeles, Rome, São Paulo, Sydney, and Nairobi, their experience is not as good as the person in Wisconsin. This is due to the latency associated with traversing the globe to get to Ohio from their locations.
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/understand-cloudfront?u=76281980&t=93)** To improve the experience of these geographically diverse users, you can choose to implement CloudFront as your content delivery network. CloudFront happens to have edge locations at all of the aforementioned cities, as well as many, many other locations around the world. With a CloudFront distribution, your content ends up cached at these edge locations. The result is that regardless of where they are located on planet earth, people experience a lower latency response as they are retrieving cached content from an edge location. If you specify a web server as the source, instead of an S3 bucket, the load on that server is reduced as the cached content take some of that burden. With that understanding of what a content delivery network is. Let's explore some of CloudFront's differentiating features. Since it is a CDN, CloudFront is something you can use to deliver low latency performance around the world. From a security standpoint, CloudFront is protected by AWS Shield Standard to mitigate against denial of service attacks, depending on what you use CloudFront for. It is possible to upgrade your protection with shield advance and web application firewall. Of course, this comes at an additional cost. There are some use cases where you need to customize
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/understand-cloudfront?u=76281980&t=189)** how an application behaves based on location. To that end, CloudFront can be used with Lambda at the edge to run functions as close to your users as possible as. As expected, CloudFront has deep integration points with other AWS services, including [[Amazon EC2|EC2]] and Certificate Manager. As you will see, getting things up and running within the AWS ecosystem is relatively straightforward. There are some concepts that you should be aware of when it comes to CloudFront. The first is that you need a point of origin or an origin server. This is the source from which CloudFront copies and distributes content. This could be as simple as an S3 bucket or a web server that you are operating. Note that the origin server does not have to be an AWS asset. If you are running a web server outside of AWS, it can be an origin server for CloudFront. That said, there is an additional cost. In the event that you're worried about the failure of your point of origin. It is possible to configure in origin group containing a primary and secondary point of origin. Since CloudFront is caching your original content, you also need to specify a cache policy. This details how frequently CloudFront checks with the origin server to see if it needs to update its cached copy. Another important consideration are the edge locations
>
> **[4:46](https://www.linkedin.com/learning/aws-networking-14125632/understand-cloudfront?u=76281980&t=286)** you want to use to distribute content, while using all edge locations that are part of the AWS Global Network is appealing. It also comes at the highest distribution cost. Depending on where the people are, who will be using your service, you may want to consider specifying fewer edge locations. This becomes an exercise in balancing the cost of delivery and the expected performance. When distributing content at scale analyzing logs can provide valuable insights about the people you serve. You can get logs delivered to an S3 bucket, or if you have the need for [[Real-Time]] insight, you can have logs pushed to a consensus data stream at an additional cost.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1), [[Real-Time]] (1)
> **Env Vars:** aws (7), cdn (2), ec2 (1)
> **CLI Commands:** aws (7)
> **Definitions:** is a  (3), means that (1), is an  (1)
> **Warnings:** be aware (1), note that (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Create CloudFront distribution](https://www.linkedin.com/learning/aws-networking-14125632/create-cloudfront-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/create-cloudfront-distribution?u=76281980&t=0)** - [Instructor] With an understanding of what CloudFront is and what it can do for you, let's get into the AWS console and create a CloudFront distribution. Here I am logged into my production account in the US East one North Virginia region. To find CloudFront I simply type CloudFront in the search for services box. When the CloudFront link appears, I click on it and am taken to the homepage for that service. You will note that the region changed from US East one to global as CloudFront is a global service. To get started, I simply click the create distribution button. In this case, I am using an S3 bucket as my origin for my CloudFront distribution. So on the subsequent page, I simply click the get started button. In the origin name, I simply specify my S3 bucket in which I want to distribute content. Note that if I want my CloudFront distribution to serve content from a logical sub-directory in this bucket, I can specify it in origin path. For this demonstration, I'm not going to enable origin shield as I don't need that additional caching layer. In this case, I'm not dealing with restricted bucket access as the content I want to distribute is publicly accessible. Origin connection attempts and timeouts specify how CloudFront should check in with the origin content.
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/create-cloudfront-distribution?u=76281980&t=95)** In this case, I'm going to accept the default values. I don't have any custom headers, so I can scroll down to the default cache behavior section. I'm not going to change the path pattern, protocol policy or allowed methods in this case. However, I do want to pay attention to the available cached policies. I have a variety of options to choose from. For example, caching disabled would disable caching and pass requests onto my origin. In this case, I'm simply going to go with caching optimized. Of course, it is possible to create your own policy if you have that need. The next thing to specify is the origin request policy. In this case, since I'm using S3 as the origin, I select managed cores S3 origin. Smooth streaming is a setting that can help in the event that you are streaming live events. Since that's not what I'm doing, I'm going to go ahead and accept the default value as no. One thing that's worth noting is that if you use an AWS service like S3 or [[Amazon EC2|EC2]] as your origin, data transfer from that service into CloudFront is at no cost. Note that it is possible to create Lambda function associations here. For example, depending on the request type, you could trigger a Lambda function to enable processing at the edge.
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/create-cloudfront-distribution?u=76281980&t=189)** That's not something that I need to do. So I'm going to skip that step. I also don't need [[Real-Time]] logs. So I'm just going to scroll on down to the distribution setting section. Opening the dropdown, you can see the price classes listed in order of costs from least to most expensive. Of course, for a truly global service it's worth paying the extra cost to go with all available edge locations. For this demonstration, I'm simply going to use the US, Canada and Europe. Since I'm not using the web application firewall, I don't need to specify a web ACL. In the SSL certificate section, I'm going to go with the default CloudFront certificate. However, this is an example of where CloudFront deeply integrates with other AWS services. For example, if you use AWS certificate manager, you can import a certificate into CloudWatch using the request or import certificate with ACM button. One thing that's worth looking at is the default route object. In this case, I do have an index.[[HTML]] file in my S3 bucket. So I'm going to specify that here. Let's take a quick look at the [[Representational State Transfer (REST)|rest]] of the contents of that bucket now. To do so I simply type S3 into services and open that link in a new browser tab.
>
> **[4:44](https://www.linkedin.com/learning/aws-networking-14125632/create-cloudfront-distribution?u=76281980&t=284)** In that new browser tab, in the SBN prod bucket, I see that I have three files. An index HTML, a mountain scene and a mountain scene.new. The latter two are simply images. Note that I also have an SBN prod logging bucket. That's going to be relevant on the next step. I'm going to enable standard logging and select the bucket that I have created for logging. I'm also going to specify a prefix of CF logs. That way if for example, I use that bucket to log access requests to S3, I know that all my CloudFront logs will be in the CF logs bucket. I'm going to accept the default for cookie logging at this point and scroll down to the bottom. Note that the distribution state can either be enabled or disabled. It's possible to create a CloudFront distribution in a disabled state. However, I want it to be immediately accessible. So I'm going to leave it as enabled and go ahead and click the create distribution button. Immediately, I'm brought back to the main CloudFront distributions page. Here, I can see the delivery method and the ID of my new CloudFront distribution. I can also see that the status column reflects in progress. Behind the scenes the distribution is being manifested, the edge locations are being spun up and the content from my S3 bucket is being cached. This can take a while,
>
> **[6:19](https://www.linkedin.com/learning/aws-networking-14125632/create-cloudfront-distribution?u=76281980&t=379)** so in the next video we'll pick up after this distribution has been completely created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Amazon EC2|Ec2]] (1), [[Real-Time]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** aws (4), html (2), sbn (2), ec2 (1), acl (1)
> **CLI Commands:** aws (4), find (1)
> **UI Navigation:** scroll down (2), click on (1), dropdown (1), select the (1)
> **Warnings:** note that (5)
> **Analogies:** for example (4)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** index.html (1)

#### [Explore CloudFront distribution](https://www.linkedin.com/learning/aws-networking-14125632/explore-cloudfront-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-cloudfront-distribution?u=76281980&t=0)** - [Instructor] Now that we've created a CloudFront distribution, let's explore what it looks like. Back in the AWS Web Console, we can see that the Status column about this CloudFront distribution has changed to Deployed, simply copying the CloudFront domain name, let's test it out in a new browser tab. Note that I didn't specify anything, so CloudFront defaulted to my index.[[HTML]] page. If I wanted to retrieve the image itself, I can simply specify the name of the object in my S3 bucket. There's the mountain scene, and by changing the URL to New, I can see the other mountain scene. Now, let's specify the index HTML page. Okay, everything looks good here. So, once again, let's pull the mountain scene. This cached copy is coming from CloudFront. Let's test out how quickly the cache updates. In my S3 console, I navigate into the sbnprod bucket. The first thing I'm going to do is simply rename my mountain scene to mountainscene.old. From the Actions object, I select Rename, and specify the new object name mountain scene.old.jpeg, with that complete
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/explore-cloudfront-distribution?u=76281980&t=95)** I simply click Save Changes. Now, let's drop the new from the mountainscene.new.jpeg To do so, I select the object and, once again, open the Actions menu, and select Rename Object. In this case, I just want to get rid of the .new. That looks good, so I go ahead and click Save Changes. With that done, let's go back to the tab where I had the mountain scene open and simply click Refresh, at this point, this cache location doesn't reflect the new image. Let's open up a completely new browser tab to ensure that we're not incurring a local caching issue. In this new browser tab, I put in the CloudFront mountain scene URL. Reflect for a moment on what just happened. By changing the image in CloudFront, the edge locations in the US, Canada and Europe were all updated in a relatively short period of time to display my new image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2)
> **Env Vars:** url (2), aws (1), html (1)
> **UI Navigation:** select the (1), open the (1)
> **File Paths:** index.html (1)
> **CLI Commands:** aws (1)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Explore CloudFront reporting](https://www.linkedin.com/learning/aws-networking-14125632/explore-cloudfront-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-cloudfront-reporting?u=76281980&t=0)** - [Instructor] Now that we have our CloudFront distribution up and running, let's take a look at some of the reporting characteristics and options that are available to us. To do so, from the CloudFront dashboard, I navigate to the reports and analytics section in the left-hand nav, and choose cache [[Statistics]]. The first thing I want to do, is specify the name of the distribution I'm working with. Then, I can go ahead and click update. Since this distribution was recently created, all we see is that little green dot in the upper right section of the graph. However, if we look at the total statistics, we see that we're hitting the cache quite a bit. The reason we have so many hits on our cache is that I spun up a bunch of [[Amazon EC2|EC2]] instances distributed around the globe, and I am simply issuing a curl command to retrieve objects from this CloudFront distribution. Let's update the popular objects report. Here, we can see that both the mountain scene and the index [[HTML]] are getting by far the most requests. While there are just a handful of misses, let's take a look at the right-most two columns. An absence of a significant number of 400 and 500 HTTP return codes indicate that CloudFront is serving this content successfully. Let's explore the top prefers report.
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/explore-cloudfront-reporting?u=76281980&t=96)** Once again, I select the web distribution I just created, and click update. Here, we can see that most of the requests have a refer that is not specified. That's because the scripts that I'm using to curl this distribution are using complete URLs. Now let's take a peak at the usage reports. Here, you can see from a scale standpoint, you can have millions and millions of requests. Scrolling down a bit, you can also get insight into how many gigabytes are being transferred. This is very important as that drives cost. Most interesting is the viewer section. Once again, I will update for the distribution we just created. Looking at the devices tab, we can see that it correctly identifies most of the devices as bots or crawlers. Once again, I'm simply using a curl command to retrieve content from CloudFront. As such, I'm not actually using a browser. That little tiny barely visible line around desktop, indicates the number of times I hit it directly from my web browser. Navigating to the browser section, we can see that both Firefox and Chrome were used to access this distribution.
>
> **[3:11](https://www.linkedin.com/learning/aws-networking-14125632/explore-cloudfront-reporting?u=76281980&t=191)** Once again, with a global audience, this can give you insight into the types of browsers and types of technology your users are using. The same can be said of the operating system tab. Finally, let's take a peak at locations. Here, we can see a variety of information about geographically where people are coming from. Scrolling down, we can see that our request count from Sweden and Singapore comprise the most requests broadly speaking for this distribution. Now imagine this was actually a production distribution, and you saw a lot of bot traffic coming from Sweden. You might want to take action on that by disabling a geographic region. Let's go ahead and do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Amazon EC2|Ec2]] (1), [[HTML]] (1)
> **CLI Commands:** curl (3)
> **Env Vars:** ec2 (1), html (1), http (1)
> **UI Navigation:** navigate to (1), select the (1)
> **Cross-References:** in the next (1)
> **Tools:** firefox (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Restrict geographic access in CloudFront](https://www.linkedin.com/learning/aws-networking-14125632/restrict-geographic-access-in-cloudfront?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/restrict-geographic-access-in-cloudfront?u=76281980&t=0)** - [Instructor] Now that we have a CloudFront distribution up and running, let's see how we can configure it to restrict access to a problematic geographic region. Here I am in the CloudFront console where I can see a disproportionate number of requests coming from Sweden. Once again, looking at the operating systems tab, I see that most of this traffic is from a bot. What I want to do is go ahead and restrict access to block traffic from Sweden. First, let's take a quick look at what is generating that traffic in the search for services and features bar I type [[Amazon EC2|EC2]]. And then I right click the EC2 virtual servers in the cloud link and open it in a new tab. Navigating to that new tab. I dropped down the region selector and select EU north one, which is in Sweden. Here I can see that I have a single running instance, clicking on the instances running link takes me to the details for that instance. I select that instance and then hit the connect button. I want to use EC2 instance connect, to establish a connection to this instance in my browser. All I need to do on the subsequent page is click the connect button. This opens up a new browser tab in which I can interact with the instance that is running in Stockholm. Let's take a quick look at the script that I have running
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/restrict-geographic-access-in-cloudfront?u=76281980&t=94)** on this instance. Here we can see it's simply an infinite loop. That's issuing a curl command against our CloudFront distribution. Issuing a tail command on the curl log will show the most recent response that curl is getting every time it hits that CloudFront distribution. In this case, it's retrieving the [[HTML]], which makes sense. Now let's go ahead and block traffic from Sweden. Back in the CloudFront management console, I click the distributions link in the top left corner. The next thing I want to do is click the ID of my distribution. As expected, this shows the details about how this distribution is configured, clicking on the origins and origins group tab. We see the S3 bucket that we specified when creating this distribution. However, what I'm interested in doing at this point can be found on the restrictions tab. In this case, I want to enable a Geo-restriction. So I select the check box and click edit. Geo-restriction is a relatively simple thing to configure and note that there is no additional charge for configuring restricted access to specific geographies. In this case, I want to go ahead and enable Geo-restriction. Note that I have the choice between whitelisting and blacklisting specific countries. In this case, I want to blacklist Sweden.
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/restrict-geographic-access-in-cloudfront?u=76281980&t=189)** So I'm going to choose the blacklist radio button. In the countries filter box, I start typing Sweden. Once it filters down to just that country, I select it and click the add button. Okay. Everything looks good here. So I go ahead and confirm this change by clicking the yes edit button. At this point, geographic access from Sweden has been enabled to confirm that this has happened. Let's take a look at the instance that we have running in Sweden. Clicking back to the tab that is connected to this instance in Sweden. Let's take a look at the end of the curl log. Note that we are no longer getting the HTML associated with the content in our S3 bucket. Instead, we are getting a CloudFront error. I'm going to specify that I want to read the last 50 lines of the curl log. Ah, that's better. Now we can see the entire HTML that is being returned. Note that the requester gets the message indicating that the CloudFront distribution has been blocked from this country. I hope you appreciate the power of CloudFront and the ease with which you can configure and restrict geographic access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[HTML]] (3)
> **Env Vars:** ec2 (3), html (3)
> **CLI Commands:** curl (5)
> **Warnings:** note that (4)
> **Prerequisites:** configure (3)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Delete CloudFront distribution](https://www.linkedin.com/learning/aws-networking-14125632/delete-cloudfront-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/delete-cloudfront-distribution?u=76281980&t=0)** - [Instructor] Now that we've explored CloudFront, let's walk through the steps required to remove a CloudFront distribution. From within the AWS web console, in the CloudFront page, I navigate to the distributions link in the top left corner. The first thing I do is select the distribution that I want to delete. Notice that the delete button is currently grayed out. That's because the state of this distribution is currently enabled. The first step to removing a distribution is to disable it. I can do that now by clicking the disable button. I get a modal window. At the modal window, which prompts me to confirm, I click yes, disable. Note that disabling a distribution is a somewhat lengthy endeavor. As the modal box indicates, depending on how the distribution is configured, this can take up to 15 minutes. I click close to dismiss the modal box. After a number of minutes has passed, I can see that the state column of my distribution has been updated to disabled. At this point, it's simply a matter of clicking the delete button. I am prompted with a modal window to confirm that this is the distribution I want to delete. It is, so I simply click yes, delete. Quite quickly, I get the confirmation that this distribution has been deleted.

> [!info]- Semantic Content
>
> **UI Navigation:** navigate to (1), select the (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Understand Global Accelerator](https://www.linkedin.com/learning/aws-networking-14125632/understand-global-accelerator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understand-global-accelerator?u=76281980&t=0)** - [Instructor] If you operate with a national or global reach, you may experience inconsistent application performance due to network bottlenecks on the public internet. Global Accelerator is a service that offers a potential solution to that particular problem. Global Accelerator is a tool you can use to isolate yourself from general internet traffic patterns. That's because it routes network traffic using the AWS global network. This results in faster, more consistent network performance. When you create a Global Accelerator, you're assigned two static IP addresses, you can then direct endpoint traffic to these two IP addresses as opposed to the service that you are using with Global Accelerator. As expected Global Accelerator works well with other AWS services, including load balancers, elastic IP addresses, and [[Amazon EC2|EC2]] instances. Global Accelerator is comprised of a number of components. The first component is the accelerator itself. This is somewhat analogous to creating a load balancer. Once you have an accelerator, you need to create a listener. This is what listens for inbound connections to the accelerator. It is here that you specify the ports and protocols you want associated with an accelerator. Once you have a listener created, you then need to create endpoint groups. This is simply a logical container for the resources that the accelerator will point to.
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/understand-global-accelerator?u=76281980&t=95)** Note that it is at the endpoint group level where you need to specify the AWS region in which the resources exist. Finally, you need to add the endpoints themselves. These can include application load balancers, network load balancers, elastic IP addresses, and EC2 instances. You may be wondering what the difference is between a Global Accelerator and CloudFront. Both use the AWS global network to facilitate speed. However, the manner in which they use it is fundamentally different. CloudFront caches assets at AWS edge locations around the world, while Global Accelerator uses the AWS global network to provide a consistent network experience. The result is that CloudFront reduces load on the origin service, while Global Accelerator sends traffic directly to the origin service. When it comes to pricing, you are paying for access to a limited access, relatively uncongested network highway. That said, there are a few considerations you want to be aware of. First off, you should know that for every accelerator you operate, you pay a flat hourly fee. The bulk of your cost comes from data transfer. Assessed per gigabyte, this charge is based on the direction of the majority of your network traffic. For example, if 90% of your traffic is outbound, your data transfer fee will be assessed on that 90%. On the other hand, if 55% of your traffic is inbound,
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/understand-global-accelerator?u=76281980&t=189)** your data transfer fee will be assessed on that 55%. As with most AWS services, there are regional differences in terms of transfer costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2)
> **Env Vars:** aws (7), ec2 (2)
> **CLI Commands:** aws (7)
> **Definitions:** is a  (2)
> **Analogies:** analogous to (1), for example (1)
> **Warnings:** note that (1), be aware (1)
> **Speakers:** - [instructor] (1)

#### [Explore a Global Accelerator scenario](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-global-accelerator-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-global-accelerator-scenario?u=76281980&t=0)** - [Instructor] With an understanding of what a global accelerator is and what it can do, consider the following scenario. You are operating an application running on an [[Amazon EC2|EC2]] server in the Mumbai ap-south-1 Region. To give yourself flexibility, you decide to put an elastic IP in front of the server itself. This lets you do all kinds of interesting things, like blue-green deployments. Users who are geographically close to Mumbai get great network performance due to geographic proximity. After operating for some time, news of your service spreads, you attract users in the United States. Since these new users are hitting the elastic IP in the Mumbai region, they follow a twisting path over the public internet to get to that IP because requests are being routed over the public internet. It is possible to run into unforeseen congestion and delays, which are completely not associated with your service. This can add unwanted latency, negatively impacting the [[User Experience (UX)|user experience]]. To provide a consistent path to your service, you decide to implement a global accelerator. This takes advantage of the AWS edge locations, providing an on-ramp into the AWS network. This means that regardless of where they are located, users bound for either of the static IP addresses provided by the global accelerator will be routed to your Mumbai location over AWS's internal network.
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/explore-a-global-accelerator-scenario?u=76281980&t=95)** This trims time and adds consistency to your service's network performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** aws (3), ec2 (1)
> **CLI Commands:** aws (3)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Configure Global Accelerator](https://www.linkedin.com/learning/aws-networking-14125632/configure-global-accelerator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-global-accelerator?u=76281980&t=0)** - Now that we understand a bit more about what a global accelerator is, let's go ahead and get one set up. Here I am in the AWS console in the Mumbai region. First, let's verify my web server. I can do that by navigating to [[Amazon EC2|EC2]]. Clicking on the EC2 link takes me to the EC2 management console. Here, I can see that I have one running instance. Clicking on the instance's running link shows me the instance that is running. Selecting my running instance, I can see a bit more detail about the instance itself. Scrolling to the right, I can see that it has an elastic IP associated with it. 15.207.169.78. I go ahead and copy its public IPv4 address and verify that the application is running, in a new browser tab. Wonderful. As expected, the application is responding. Closing that tab, I'm back in the EC2 management console. Now I want to go ahead and create an accelerator. To do that, I search for "global accelerator" in the Services search box. I click on the Global Accelerator link to open it in a new browser tab. Clicking on that new browser tab brings me to the splash page for Global Accelerator. It shows this page because I don't have any existing global accelerators. One thing that is interesting to note
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/configure-global-accelerator?u=76281980&t=96)** is the region has changed to Oregon. For some reason, even though Global Accelerator is a global service, the region selector defaults to Oregon. This is unlike the behavior with Route 53, which shows the region selector as global. It's just a curiosity to be aware of. To proceed, I simply click the "Create accelerator" button. This brings me to a basic configuration page. The first thing I need to do is specify a name for the accelerator. After typing that in, I have the option of selecting an accelerator type. In this case, I want to go with the standard [[Routing]], which automatically directs traffic to the nearest, healthiest endpoint. With those configurations specified, I click the "Next" button to proceed to the following screen. On this screen, I configure the listener for the global accelerator. In the Ports section, I specify 80 for HTTP traffic. In the Protocol section, I choose TCP from the dropdown. With those selections made, I click the "Next" button to proceed to the endpoint configuration screen. The first thing I need to do is select the region in which my endpoint exists. In this case, my endpoint is in ap-south-1, Mumbai. Note that I have the option of setting a traffic dial for this region.
>
> **[3:09](https://www.linkedin.com/learning/aws-networking-14125632/configure-global-accelerator?u=76281980&t=189)** In this case, I'm simply going to go with the default of 100%. With my endpoint group configured, I click the "Next" button to proceed to the following screen. Now I get to actually add an endpoint to my endpoint group. To do so, I click the "Add endpoint" button. The first thing I do is drop down the endpoint type. Note that here I can pick from different load balancing options, an EC2 instance itself, or an elastic IP. In this case, I want to go with an elastic IP address. Making that selection, I open the endpoint dropdown. Note that it pre-populates with elastic IPs that are in the ap-south-1 region. Since I have only one, I know that's the EIP that's associated with my EC2 instance. Now that I've created a name, added a listener, added an endpoint groups, and added an endpoint, I can proceed by clicking the "Create accelerator" button. After a few moments, I get the notification message that my global accelerator was created successfully. Note that the status column says "In progress". Manifesting a global accelerator can take some time, so we will explore the fully configured accelerator in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (6), [[Routing]] (1)
> **Env Vars:** ec2 (6), aws (1), http (1), tcp (1), eip (1)
> **UI Navigation:** dropdown (2), click on (1), select the (1), open the (1)
> **Warnings:** note that (4), be aware (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** aws (1)
> **Versions:** 15.207.169 (1)
> **Cross-References:** in the next (1)

#### [Explore Global Accelerator](https://www.linkedin.com/learning/aws-networking-14125632/explore-global-accelerator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-global-accelerator?u=76281980&t=0)** - [Instructor] Now that we have a Global Accelerator up and running, let's illustrate how it consistently improves network performance. Note that the Status column has updated to reflect the deployed status of the accelerator. We can test it out in a browser by copying the static IP addresses. Selecting and copying the first IP address, I open up a new browser and paste it in. As expected, I get my pretty mountain scene. Navigating back to the Global Accelerator screen, I select the second static IP address and open that in a new browser tab. Once again, as expected, I get my pretty mountain scene. Everything looks good to me, however, what's the impact on network performance? To find out let's grab the elastic IP from the Mumbai region. Clicking in the Instances tab, I copy the elastic IP and open that in a browser tab. Okay. We have three browser tabs, all hitting the same service and they all seem to load pretty quickly. To illustrate the difference in network performance, I'm going to go ahead and open up a pair of terminals on my laptop. In the left terminal, I will write a simple loop that will time how long it takes to return the content of the elastic IP from the Mumbai region. I'll add a sleep 1, so I hit that page every second. Here, we can see the [[HTML]] that's returned
>
> **[1:34](https://www.linkedin.com/learning/aws-networking-14125632/explore-global-accelerator?u=76281980&t=94)** as well as the timing information. Note that it varies between 0.5 and 0.6 seconds. Oh, we just saw a blip there that was over a second. As you can see, the network performance is slightly inconsistent. Now, let's retrieve one of the static IP addresses. Navigating back to the Global Accelerator page, I highlight the first static IP address and copy that into my buffer. Back in the terminal window, I will write the same loop in the right-hand terminal so we can see the difference in real time. First of all, we see that network performance tends to hover around the 0.4 second mark. As you can see, going after the Global Accelerator IP, I consistently get response times in the 0.4 to 0.5 second range, as opposed to the 0.5 to 1.5 or 1.6 second range that we see going after the IP routed over the public internet. Breaking out of the loop on the right, let's try out the other IP address. Navigating back to the Global Accelerator page, I copy the second IP address and insert it into my loop.
>
> **[2:58](https://www.linkedin.com/learning/aws-networking-14125632/explore-global-accelerator?u=76281980&t=178)** Once again, as expected, the Global Accelerator IP timing is consistently less than what we're seeing going after the IP address natively. Back in the Management console, let's explore what the accelerator looks like now that we have it configured. Clicking on the accelerator's name, I am brought to a page which shows the details about its configuration. Suppose after a while, I have a better understanding of my global network traffic and where people are coming from. In the interests of reducing load on my Mumbai region, perhaps I software-define my infrastructure and spin it up somewhere in the United States. If I wanted to add a new end point into the configuration, I could simply click on the listener ID. From there, I could navigate into the endpoint group by clicking the endpoint group ID. At this point, I could simply add an endpoint which looks very similar to the add endpoint screen we went through when initially configuring Global Accelerator. We could simply add an endpoint, select a type, and choose it. Canceling out of that, alternatively, we could simply add a new endpoint group. To do so, we would navigate back to the listener configuration and add an endpoint group. In this case, if we had replicated the server in Ohio, we could simply choose the US-east 2 Ohio region
>
> **[4:35](https://www.linkedin.com/learning/aws-networking-14125632/explore-global-accelerator?u=76281980&t=275)** and then go from there. Adding an endpoint and mapping it to whatever service fronts that server in Ohio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1)
> **Versions:** 0.5 (3), 0.4 (2), 0.6 (1), 1.5 (1), 1.6 (1)
> **Tools:** terminal (3)
> **UI Navigation:** select the (1), click on (1)
> **Warnings:** note that (2)
> **CLI Commands:** find (1)
> **Env Vars:** html (1)
> **Analogies:** similar to (1)

#### [Delete Global Accelerator](https://www.linkedin.com/learning/aws-networking-14125632/delete-global-accelerator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/delete-global-accelerator?u=76281980&t=0)** - [Instructor] Now that we've explored global accelerators and how they work, let's clean up after ourselves to ensure that we don't incur any ongoing charges. From the global accelerator dashboard, the first thing I need to do is select my global accelerator. Then I go ahead and click the delete button. However, since this global accelerator is currently serving traffic, I first need to disable it prior to deleting the accelerator. Note that you get a warning indicating that the static IP addresses provided by AWS assigned to this accelerator will be lost. It's kind of like replacing the public IP on an [[Amazon EC2|EC2]] server with an elastic IP. You can't get it back. Since that's okay, and I do in fact want to delete the accelerator, I go ahead and click the disable accelerator button. Note that this can take up to five minutes. Now that the accelerator is disabled, I can simply type 'delete' in the confirmation box. With that done, I complete the process by clicking the delete button. This takes me back to the global accelerator page where I can see that the accelerator itself is being deleted. Clicking the refresh button, I can see that the status for my accelerator has changed from 'deployed' to 'in progress.' After a few minutes, I get the confirmation message that my accelerator has been deleted. Note that unlike terminating an EC2 instance,
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/delete-global-accelerator?u=76281980&t=95)** I don't see its ghost in the accelerator screen. I simply have that confirmation message indicating that it has been deleted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2)
> **Warnings:** note that (3), warning (1)
> **Env Vars:** ec2 (2), aws (1)
> **CLI Commands:** aws (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Understand API Gateway](https://www.linkedin.com/learning/aws-networking-14125632/understand-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/understand-api-gateway?u=76281980&t=0)** - [Instructor] If you have [[Application Programming Interfaces (API)|application programming interfaces]] that you want to make broadly accessible, you'll want to take a close look at how the AWS API Gateway can help you with everything from version management to performance. There are a variety of technologies that can be used to develop and deploy application programming interfaces. With API gateway, you can homogenize access regardless of the technology that underpins the APIs themselves. Suppose you have developers who are using the Elastic Container Service to facilitate HTTP [[API Development]]. You can use API gateway to route inbound requests to your ECS endpoint. That said, please note that requesters must come in over HTTPS in order to access an API gateway managed endpoint. Similarly, you can use API gateway to front [[Representational State Transfer (REST)|REST]] APIs that have been developed in a serverless manner using Lambda. If you use Elastic Beanstalk to manage your infrastructure or, run your own [[Amazon EC2|EC2]] instances to provide [[WebSocket]] APIs, these deployment models are supported by API gateway. While all of these capabilities are useful, API gateway also has the ability to restrict access based on rate limits, authorization, and access controls. It can also be considered a fault tolerant component with the ability to accommodate thousands
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/understand-api-gateway?u=76281980&t=95)** of concurrent requests. From a payload perspective, API gateway can support query string parameters, request headers, [[JSON]], XML, and more. Developing, deploying, monitoring, and securing APIs is a deep and complicated set of topics. One of the things you'll want to think carefully about is authorization. Do you want consumers to use your API without any authentication? You can certainly make that choice. However, if you don't use API keys, then you'll be limited in your ability to throttle any given user in the event of a problematic client. You'll also want to consider how you route requests. For example, you may want to route a post or put request to a different API than a GET request. You can also specify a default to which all requests are routed regardless of calling method. Since APIs are simply the encapsulation of a piece of business logic, it is quite likely that they will change over time, to that end, you have the ability to specify stages in API gateway. For example, you can use stages to direct incoming requests to your development, [[Quality Assurance]], or production APIs. Depending on the scale at which you operate, it may make sense to use API gateways caching feature to improve overall API performance.
>
> **[3:10](https://www.linkedin.com/learning/aws-networking-14125632/understand-api-gateway?u=76281980&t=190)** While API gateway is a complicated product with many features, it is very attractive from a cost standpoint. While there are of course regional pricing differences, you can get hundreds of millions of HTTP or REST API requests for under five U.S. dollars per month. Note that there is an additional charge based on the amount of data your API returns. For additional details, please refer to the excellent documentation available at aws.[amazon.com/api-gateway/pricing](https://amazon.com/api-gateway/pricing).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Application Programming Interfaces (API)|Application programming interfaces]] (1), [[API Development]] (1), [[Amazon EC2|Ec2]] (1), [[WebSocket]] (1)
> **Env Vars:** api (18), http (2), rest (2), aws (1), ecs (1)
> **CLI Commands:** make (3), aws (2)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2)
> **Warnings:** note that (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **API Endpoints:** get  (1)

#### [Configure API Gateway](https://www.linkedin.com/learning/aws-networking-14125632/configure-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/configure-api-gateway?u=76281980&t=0)** - [Instructor] Now that we understand what API gateway is, let's get into the AWS console and build one from scratch. Here I am logged into the AWS console. The first thing I want to do is make sure I have an API that I want to front with API gateway. I went ahead and wrote a simple API in [[Python (Programming Language)|Python]] that given a stock ticker will return its current price. Given its simplicity, I chose to deploy it in Lambda. Let's take a quick peak at that function now. Looking at the contents of this function, we can see that online 13, it retrieves the ticker parameter from query string parameters that are passed in to this event. A copy of this code is available in the exercise files. With that function in place, I'm going to go ahead and create an API gateway. Navigating back to the AWS management console, I go ahead and search for API gateway. Finding the API gateway service, I click on the link and am brought to the homepage for API gateway. In this case, I have a simple HTTP API that I want to front with API gateway. Therefore I'm going to build an HTTP API. Scrolling down, we can see that [[WebSocket]] APIs, [[Representational State Transfer (REST)|REST]] APIs and private REST APIs are also supported. In the HTTP API box, I click the build button to proceed.
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/configure-api-gateway?u=76281980&t=96)** The first thing I need to do is specify an integration. To do so, I click the add integration button. Expanding the dropdown, I see that I have both Lambda and HTTP as options. Since my function is deployed in Lambda, I select it from the dropdown. The next thing I need to do is specify the AWS region in which I want to identify the Lambda function to front with API gateway. Switching over to the Lambda tab, I can see in the upper right corner, I'm in the Mumbai region, which is AP south one. That's also pre-populated in the AWS region dropdown since that is the current region in which I'm operating. With that populated, I click into the Lambda function search box. Note that this will display any functions in Lambda that exist in this region. In my case, the stock picker function is the only one I have. So I go ahead and select it. The next thing I need to do is specify and name for the API. In this case, I will name it getStockPrice. With that done, I go ahead and click the Next button. This takes me to the route configuration screen,. Opening the method dropdown display as list of methods from which I can choose. In this case, I'm going as broad as possible. So I'm going to choose the Any method. With that complete, I go ahead and click the Next button.
>
> **[3:12](https://www.linkedin.com/learning/aws-networking-14125632/configure-api-gateway?u=76281980&t=192)** This takes me to the stage definition screen. It is here that I could, for example, configure stages for my development, [[Quality Assurance]] and production APIs. In the interest of simplicity, I'm going to simply go with the default. I'm also going to leave the auto deploys switch set to True. That means that when changes are made to my stock picking function, they will be reflected immediately in API gateway. I proceed by clicking the Next button. This brings me to a review page where I can look at the name of my API, where it's integrated the [[Routing]] and the stages. Everything looks good here, so I go ahead and click Create. After a few moments, I get the message that the API gateway has been successfully created. Note that towards the middle of the screen, there is the invoke URL. That is the URL that I could publish out and direct traffic to that will front my API. Notice also that there is an attached deployment, meaning that it successfully registered my Lambda endpoint. One thing I'm going to want to make sure I do is enable logging. To configure logging, I navigate to the bottom of the left-hand navigation window and select Logging. The next thing I need to do is specify a stage. Since I only have a single stage defined,
>
> **[4:45](https://www.linkedin.com/learning/aws-networking-14125632/configure-api-gateway?u=76281980&t=285)** it is the only option available in the drop-down box. You can imagine how complicated this could get if you have multiple stages. With the selection complete, I click the Select button to proceed. Note that access logging is currently disabled and is disabled by default. To fix this, I go ahead and click the Edit button. This lets me flip the switch to enable access logging. Now, the next thing I need to do is specify a CloudWatch log group to which I can send my access logs. I don't currently have one created, so I'm going to go ahead and do that now. In the search for services box, I type CloudWatch. I open the CloudWatch service in a new browser tab. This brings me to the overall CloudWatch page. What I want to do is create a log group. So I selected under logs in the left-hand navigation. To create a new log group, I simply click the Create log group button in the upper right corner of the screen. The first thing I'll do, is specify a law group name. With that complete, I go ahead and click the Create button. Very quickly, I get the confirmation message that the log group has been created. It also returns me to the log group overview page. What I want to do is retrieved the ARN for my newly created log group.
>
> **[6:19](https://www.linkedin.com/learning/aws-networking-14125632/configure-api-gateway?u=76281980&t=379)** To do so, I simply click on the log group name. This brings up the details for that log group. Note that the ARN is available in the upper right corner of the screen. I simply copy the ARN and return to my API gateway page. In the log destination, I paste in the appropriate ARN. Down below, I have the option of specifying the format in which I want access logging to occur. For this demonstration, I'll simply select [[JSON]]. To complete my login configuration, I click the Save button towards the bottom right side of the screen. Quite quickly, I get the confirmation that the logging has been enabled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[Python (Programming Language)|Python]] (1), [[WebSocket]] (1), [[Quality Assurance]] (1), [[Routing]] (1)
> **Env Vars:** api (19), aws (5), http (4), arn (4), rest (2)
> **UI Navigation:** dropdown (4), click on (2), navigate to (1), switch to (1), open the (1)
> **CLI Commands:** aws (5), make (2), python (1)
> **Warnings:** note that (4)
> **Tools:** aws console (2)
> **Definitions:** means that (1), is an  (1)
> **Analogies:** for example (1), imagine (1)

#### [Explore API Gateway](https://www.linkedin.com/learning/aws-networking-14125632/explore-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/explore-api-gateway?u=76281980&t=0)** - [Instructor] Now that we have API Gateway up and running, let's see it in action. The first thing I need to do is go ahead and get that invocation URL. To do so, I click back to the API section in the upper left-hand corner. Here, I can see my Get Stock Price API Gateway. Clicking on Get Stock Price takes me to the details for that specific API. Note, the invocation URL. I'm going to go ahead and click on it, opening it in a new browser tab. Note that the default message that is returned is Not Found that's because there is no end point associated with the base API Gateway invocation URL. To test out my function, let's go ahead and append its name to the URL, passing in the stock symbol for Amazon. Just like that, I've liberated my Lambda code and made it accessible from the internet. Now, suppose I've gotten feedback that indicates that simply having the price in the resultant [[JSON]] is insufficient. My customers also want the ticker symbol. To do so, I need to navigate back to my Lambda function. What I want to do is update my code on line 30. I want the JSON that returns to include the ticker symbol, as well as the price. Okay, that change looks good,
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/explore-api-gateway?u=76281980&t=95)** so I go ahead and click Deploy. Remember deploying a Lambda function updates the latest version of that function on the Lambda platform. Navigating back to the URL for my API Gateway, I go ahead and refresh the page. Since my API Gateway is configured for automated deployment, the resultant change from my Lambda function is reflected here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2)
> **Env Vars:** api (7), url (5), json (2)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (typing) (1)

#### [Throttling with API Gateway](https://www.linkedin.com/learning/aws-networking-14125632/throttling-with-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/throttling-with-api-gateway?u=76281980&t=0)** - [Instructor] Now that we verified our API Gateway is working as intended, let's see how we can protect it with throttling. Here I am with two browser tabs open, on the left I have my API Gateway, on the right I have an [[Amazon EC2|EC2]] instance connect window logged on to an EC2 instance. The first thing I'm going to do is write a quick loop that will invoke my API every second. I'm going to use the curl command to hit my API. I need to pass the URL, for my API, to the curl command. To do so, I copied the invoke URL from the left-hand browser. With that in my buffer, I paste it in after the curl command on the right. With that complete, I need to append the name of my function as well as the query string parameter. I'm also going to output the current date and time, using the Date command. Finally, I'll add a one-second pause using the Sleep command. With the loop written, I type done to complete it and return so it starts executing. Since I'm running this on a day the market is closed, I keep getting the same price for Amazon. Now suppose I want to curtail that behavior, I can do so by using throttling. In the browser, on the left side of the screen,
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/throttling-with-api-gateway?u=76281980&t=93)** I select the throttling link, under protect, in the left-hand nav. The first thing I need to do is select the stage that I want to throttle. Remember, you could configure multiple stages to correspond to any environment that you might have. In this case, I have my single default stage. Selecting that from the dropdown, I click the Select button to continue. Resizing the window a bit. What I'm interested in doing is route throttling. Note that the burst limit and rate limit are not currently configured. Note, also, that I can see the account level throttling limits at the bottom right corner of the left-hand screen. To impose a cap on traffic, I want to enable route throttling, so I go ahead and click the Edit button. For demonstration purposes I'm, effectively, going to turn off the API, by setting both the burst limit and the rate limit to zero. With that done, I click the Save button. Note what happens in the window on the right, I'm still hitting the API every second, however, I'm not getting passed through to the function itself. Instead, API Gateway is returning a message to me, too many requests. Once again, if you're running an open API
>
> **[3:07](https://www.linkedin.com/learning/aws-networking-14125632/throttling-with-api-gateway?u=76281980&t=187)** you're throttling controls are somewhat coarse. I encourage you to use API keys to manage access to your APIs. Doing so would allow you to limit clients much more selectively.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2)
> **Env Vars:** api (10), ec2 (2), url (2)
> **CLI Commands:** curl (3)
> **UI Navigation:** select the (2), dropdown (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Delete API Gateway](https://www.linkedin.com/learning/aws-networking-14125632/delete-api-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/delete-api-gateway?u=76281980&t=0)** - [Tutor] Now that we've explored some of the features of API gateway, let's go ahead and clean up after ourselves. Doing so, is quite straight forward. To delete my API gateway, I go to the left-hand navigation and click the API's link towards the top. The next thing I do, is click the radio button that selects the gateway in question. From the actions menu I choose delete. I get a modal window, which prompts me to confirm my action. Since that's exactly what I want to do, I click the delete button relatively quickly and return to the API gateway, default page. Note that again, unlike an [[Amazon EC2|EC2]], I don't see the ghost of API gateways past. Its history is immediately gone. However, the artifacts associated with it still persist. For example, if I open Lambda, my function is unaffected. I can verify that by opening up the services link at the top of the page and opening Lambda. Navigating to that browser tab, I can see that my function still exists. I can also verify the CloudWatch logs, that were associated with my dead gateway. To do so, I simply search for CloudWatch and select that service.
>
> **[1:35](https://www.linkedin.com/learning/aws-networking-14125632/delete-api-gateway?u=76281980&t=95)** From the main CloudWatch page, I go ahead and click log groups. Here, I can see the log group, associated with my now defunct API gateway. Clicking on the name of that log group, I can see the log streams associated with all calls that were made to that gateway. Looking at a relatively old entry, I can see the [[Git]] request that was serviced by my gateway.
>
> **[2:09](https://www.linkedin.com/learning/aws-networking-14125632/delete-api-gateway?u=76281980&t=129)** Navigating back to the top, and clicking the newest log stream, I can see a whole bunch of individual events. These correspond to that loop that I wrote on the EC2 instance. Once again, I can click on the little caret, to expand the details, of a given event. I am free to keep this logging information for historical analysis purposes, or, if it's no longer useful, I could remove it at this time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2), [[Git]] (1)
> **Env Vars:** api (6), ec2 (2)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** git (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [tutor] (1)


### 8. Troubleshooting Strategies

[↑ Back to Table of Contents](#table-of-contents)

#### [Troubleshooting connectivity issues](https://www.linkedin.com/learning/aws-networking-14125632/troubleshooting-connectivity-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/troubleshooting-connectivity-issues?u=76281980&t=0)** - [Instructor] Now that you know a fair bit about networking in AWS, let's talk about how to troubleshoot connectivity issues. Let's start with issues that might prevent you from connecting to an [[Amazon EC2|EC2]] instance. Suppose you are trying to connect to an EC2 instance inside of AWS, but are unable to. While the instance clearly exists in a VPC, there are a number of things you need to dig through and explore to determine why you can't connect. First, confirm there is nothing in your local environment that is preventing traffic. Check local firewalls on your machine and your local network settings. Within AWS, the first thing you want to do is confirm that the instance you are trying to connect to is in a public sub-net. If you are trying to connect to a server in a private subnet, you will need to use some type of bastion host, unless you have a private tunnel between your location and the private sub-net. After you have confirmed that the server itself is in a public sub-net, you need to check and see whether or not the server has a public IP address assigned to it. Recall that EC2 instances have internal IP addresses as well. However, to be able to route to them from outside of AWS, an instance needs a public IP. That public IP could be assigned directly to the server, or it could be an elastic IP address. Depending on what you're doing,
>
> **[1:32](https://www.linkedin.com/learning/aws-networking-14125632/troubleshooting-connectivity-issues?u=76281980&t=92)** an elastic IP may make sense, especially if the server itself is disposable. After confirming the sub-net and IP address, you need to look at the security group settings for the instance. You need to make sure that the security groups assigned to the instance allow the protocol and port that you're using. Once you have verified security group settings, you need to look at the network access control list for the sub-net. Unless there is a NACL that explicitly allows your protocol and port, you won't be able to connect. Keep in mind that by default, all traffic in and out is allowed. But you might find yourself in an environment where more restrictive rules are in place. Once you have checked on the NACLs, you need to take a look at the route table. Specifically, you need to confirm that there is a route out to an internet gateway. Once you have validated all of these components, then your traffic will flow. There are a number of helpful tools that you can use if you know you need to go deeper. For example, if you need additional details about your network traffic, make sure you have VPC Flow Logs enabled. When looking at security groups, you need to see if the security group is applied directly to an instance, or if it is trusting traffic from another security group. For other services that you are using, including load balancers and API gateway, you'll want to be aware that CloudWatch Logs can help you understand what is going on with your traffic.
>
> **[3:07](https://www.linkedin.com/learning/aws-networking-14125632/troubleshooting-connectivity-issues?u=76281980&t=187)** Remember, the more you understand about how things actually work, the faster and more effectively you'll be able to solve problems when they inevitably crop up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3)
> **Env Vars:** aws (4), ec2 (3), vpc (2), nacl (1), api (1)
> **CLI Commands:** aws (4), make (3), find (1)
> **Warnings:** troubleshoot (1), keep in mind (1), be aware (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Troubleshooting scenario](https://www.linkedin.com/learning/aws-networking-14125632/challenge-troubleshooting-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/challenge-troubleshooting-scenario?u=76281980&t=0)** - [Instructor] Now it's time to put your conceptual knowledge to the test. The steps outlined in this video are completely optional as completing this exercise, will create resources in your AWS account. Allow me to introduce the situation at hand. We will be using the default VPC that comes with an AWS account. Specifically, we will be operating in the default VPC in the us-east-2 Ohio region. The default VPC has an internet gateway associated with it. The default VPC also has at least two subnets. We will be using only two of them. We will also use a CloudFormation stack that creates what is next. It is provided for you in the exercise files for this video. Running it will create an application load balancer as well as two instances inside of a target group. After running a script that uses the command line interface, the load balancer will not route traffic appropriately. Your task will be to figure out why and to resolve the issue. To accomplish this, you're going to use the provided cloud formation template, as well as the provided script, which will break the environment. I've already downloaded that CloudFormation template to my laptop. The first thing I need to do in the AWS console is make sure that I'm in us-east-2 Ohio.
>
> **[1:37](https://www.linkedin.com/learning/aws-networking-14125632/challenge-troubleshooting-scenario?u=76281980&t=97)** The next thing I want to do is navigate to CloudFormation. To do so, I simply start typing CloudFormation in the Search box, and select the CloudFormation service. What I'm going to do is simply create a stack based on the template I've downloaded. So I get started by clicking the Create stack button. In this case, my template is ready, and I want to upload it instead of specifying an S3 location. Clicking on the Choose File button, I find my Troubleshooting Connectivity template in my Downloads folder. Selecting it, I go ahead and click Open. To proceed, I click the Next button. The first thing I need to do is specify a name for the stack. In this case, I'm simply going to call it Demo. Scrolling down to the parameters section, it is going to launch two [[Amazon EC2|EC2]] instances. They are going to be of type t2 micro. I also need to specify the name of an EC2 key pair. If you don't have a key pair, you might want to create one now. To do so, you can simply type key pair into the Search box. And what you're going to want to navigate to is the key pair's EC2 feature. I'm simply going to open that in a new tab so you can see what it looks like. Here's the existing key pair that I have. And if I needed to create a new one, I could accomplish it by simply clicking the Create key pair button in the upper right corner.
>
> **[3:14](https://www.linkedin.com/learning/aws-networking-14125632/challenge-troubleshooting-scenario?u=76281980&t=194)** Since I already have a key pair, I'm simply going to select it. Feel free to modify the SSHLocation from the template. Doing so will limit the IP address range from which you can SSH into the servers. Finally, we get to the Subnets parameters. Dropping down the list, you can pick any two of the listed subnets. It doesn't matter which ones you pick. I'm going to choose once I72.31.0.0, as well as 172.31.16.0. With that done, the last thing that I want to specify is my VPC. In this case, it's my default. Okay, everything looks good here. So I go ahead and I click the Next button. I'm going to add a Tag called purpose, and a Value of troubleshooting. Everything else can be left as default. To proceed, I scroll to the bottom, and click the Next button. This brings me to a Review screen. Scrolling down, everything looks good here, so I go ahead and click the Create stack button. Now, don't worry, this is going to take a couple of minutes to run. After waiting for a couple of minutes, I click the Refresh button on the right side of the screen. Scrolling down, I can see all of the things that the CloudFormation stack did.
>
> **[4:48](https://www.linkedin.com/learning/aws-networking-14125632/challenge-troubleshooting-scenario?u=76281980&t=288)** Launching a LoadBalancer, WebServerGroup, looking at a LaunchConfig for AutoScaling, defining the InstanceSecurityGroup, ApplicationLoadBalancer, ApplicationLoadBalancerSecurityGroup, TargetGroup, everything created successfully. Navigating to the Resources tab, we can see that an ALBListener, TargetGroup, LoadBalancer, InstanceSecurityGroup, LaunchConfig for AutoScaling, LoadBalancerSecurityGroup, and WebServerGroup were all created. What we're really going to want to pay attention to is the Output tab. Clicking on the Outputs tab, we see two things. First, a SecurityGroup name, and second, a URL. Clicking on the URL, I open it in a new tab. Here, we can see what happens when we hit the load balancer in a browser. Now let's go ahead and disrupt this situation. Clicking back to the CloudFormation tab, I need to copy the value of this SecurityGroup. The next thing I need to do is navigate to my command line, either a [[Windows]] terminal on a Windows machine, or the terminal on a Mac to run a command line interface script. The script to disrupt this environment exists as an Exercise file. It's called break.it.mac,
>
> **[6:21](https://www.linkedin.com/learning/aws-networking-14125632/challenge-troubleshooting-scenario?u=76281980&t=381)** or break.it.windows depending on your operating system. It takes two parameters. The first is a SecurityGroup ID, and the second is a named profile for your command line interface. I type the name of the break.it command, followed by the name of the SecurityGroup, and my command line interface profile. Executing that command, the only output I should get is this return message of true. I can validate that it indeed broke the environment by going back to the tab where I had hit the load balancer. Hitting refresh in that tab results unfortunately now in a 504 Gateway Time-out. Your challenge is to step through and resolve this network configuration error.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (3), [[Windows]] (3)
> **Env Vars:** vpc (5), aws (3), ec2 (3), url (2), ssh (1)
> **Tools:** command line (5), aws console (1), windows terminal (1), terminal (1)
> **Exercise Files:** template (6), exercise files (1), exercise file (1)
> **CLI Commands:** aws (3), make (1), find (1), ssh (1)
> **UI Navigation:** navigate to (3), select the (1)
> **Versions:** 31.0.0 (1), 172.31.16 (1)
> **Definitions:** is a  (2)

#### [Solution: Troubleshooting scenario](https://www.linkedin.com/learning/aws-networking-14125632/solution-troubleshooting-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/solution-troubleshooting-scenario?u=76281980&t=0)** - [Narrator] Okay, let's get into the troubleshooting and see how we can resolve this problem. Recall here we are with our application load balancer, giving us a 504 gateway timeout. Let's go ahead and dig into this a little bit. Navigating back to the cloud formation tab, I'm at the outputs tab. What I'm really interested in is the resources that were created. Clicking on the resources tab, what I want to dig into is the web server group itself. Clicking on the link for the demo web server group takes me to the [[Amazon EC2|EC2]] auto-scale group section. Here, we can see that both the desired and minimum capacity is set to two. Clicking on the instance management tab in the bottom half of the screen shows me that I do indeed have two instances that are in service and healthy. Let's see how that individual instance is configured. I select the first instance ID and click on the link that takes me to the detail page for that specific instance. In the networking section on the bottom half of the screen, I can see some of the network details about this instance. The first thing I want to do is check out the sub-net. I'm going to click on the sub-net link and open it in a new tab. Navigating to that sub-net link, I go ahead and click into
>
> **[1:36](https://www.linkedin.com/learning/aws-networking-14125632/solution-troubleshooting-scenario?u=76281980&t=96)** that specific subnet ID. Here, I can see a number of details about that sub-net. The first thing I'm going to check is the network access control list. Scrolling down, I see that all traffic is allowed both in and out. So it rules out the network access control list as being a root cause for this problem. While I'm here, I'm going to verify that there is a route to an internet gateway. To do so, I click on the route table link. Note that there are two entries in this route table. The first is for local traffic while all other traffic is routed out to the internet gateway. So there doesn't seem to be a problem with the route table at this point. Clicking back to the instance details tab, let's take a peak at the security group. To do so, I click on the security section. Scrolling down, I can see a definition for port 80 being allowed from a security group. I also see port 22 being allowed from any IP address. Looking at the outbound rules, I see that all protocols and all ports are allowed out. We could validate that the web server on the instance is doing its job. To do so, I click back on the instances link in the left-hand navigation. Selecting my running instance, I go ahead and attach
>
> **[3:12](https://www.linkedin.com/learning/aws-networking-14125632/solution-troubleshooting-scenario?u=76281980&t=192)** a security group that allows web traffic on port 80. Dropping down the actions menu, I go to security and say, change security groups. In this case, I have a pre-created public web access security group, which allows port 80 from anywhere. I add the security group and click the save button. Now I'm going to copy the public IPv4 DNS address for this instance and open it in a new tab. The page loads as expected. At this point, we've confirmed that the web server itself is performing as expected. We could go ahead and validate the other instance at this point, but I'm going to move on instead. Navigating back to the instances tab, I go ahead and remove that security group. I don't want to leave it hanging around. So I go to actions, security, change security groups, and remove the public web access group. I then click the save button and can validate that it took effect by going back to the page where I had loaded the DNS name. When I click refresh, as expected, the page does not resolve. Navigating back to the instances page, I've confirmed that from an instance standpoint, everything is working. The same is true from a VPC, sub-net, route table and internet gateway standpoint. Now let's see what's going on with the load balancer.
>
> **[4:46](https://www.linkedin.com/learning/aws-networking-14125632/solution-troubleshooting-scenario?u=76281980&t=286)** Scrolling down in the left-hand navigation, I go ahead and click target groups. Here, I can see my demo target group that was created by my cloud formation stack. Clicking into it, I can see that the status for my instances is unhealthy. That's because the health checks have failed. Why could that be? Let's see how the load balancer is configured. To do so, I go ahead and click the load balancers link in the left-hand navigation. What I'm looking for here is the security group for the load balancer itself. Scrolling down in the basic configuration information, I get to the security section where I see the security group listed. Clicking on the link for that security group takes me to the security group section. It shows me the security group itself, as well as the security groups which depend on it. In this case, I'm interested in the security group itself. So I go ahead and click on that link. Looking at the inbound rules, everything looks fine, as it's allowing all traffic on port 80 in. Now let's check the outbound rules. Good grief, there are no outbound rules for this security group. That means no traffic can flow out. Let's go ahead and resolve that situation by editing the outbound rules. What I want to do is go ahead and add a rule that lets all traffic flow out. Clicking the add rule button, I open the type dropdown
>
> **[6:24](https://www.linkedin.com/learning/aws-networking-14125632/solution-troubleshooting-scenario?u=76281980&t=384)** and select all traffic. This defaults the protocol and port range to be all, which makes sense. From a destination standpoint, I select anywhere. Remember this is allowing all traffic from inside AWS to navigate out. That looks good, so I go ahead and click save changes. This takes me back to the detail page for this security group, where I can see the outbound rules allowing all traffic out. Clicking back on inbound rules, those didn't change, which makes sense. Let's go ahead and get back to the tab where I was hitting the load balancer. Hitting refresh shows me the page that's being served up by those EC2 instances. Instead of that gateway timeout, it's now performing as it should. Navigating back to the load balancer detail page, let's take a quick look at that target group again. Clicking on the target group's link in the left-hand navigation brings me back to the target group's detail page. Selecting the target group above I go down and can see that all instances are reporting healthy once again. I think you should congratulate yourself for validating each component in the network stack and finally getting to resolution, great job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (2)
> **UI Navigation:** click on (5), go to (2), select the (1), open the (1), dropdown (1)
> **Env Vars:** ec2 (2), dns (2), vpc (1), aws (1)
> **Ports:** port 80 (4), port 22 (1)
> **CLI Commands:** aws (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Troubleshooting cleanup](https://www.linkedin.com/learning/aws-networking-14125632/troubleshooting-cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/troubleshooting-cleanup?u=76281980&t=0)** - [Instructor] Now that we've explored a troubleshooting scenario, let's go ahead and clean up after ourselves. That way, we won't leave any resources running and burning our budget. Fortunately, cleaning up a cloud formation stack is very straightforward. I click back to my Cloud Formation tab. Note that my demo stack is still selected. To get rid of all of its resources, I simply click the Delete button. I do get a modal window indicating that all resources are going to be deleted per the deletion policy. Since that's exactly what I want to do, I go ahead and click the Delete Stack button. Clicking over into the [[Amazon EC2|EC2]] management console, I navigate to the instances link in the left-hand navigation. Hitting the Refresh tab, I can see that in real time, the state for these instances has changed from running to shutting down. Hitting refresh one more time, I can see the state change from shutting down to terminated. Now let's see what's going on with the security groups. Clicking into the security group setting in the left-hand navigation, I still see two security groups with Demo in their name. Remember, Demo is the name I gave my cloud formation stack. Hitting refresh in the security groups page,
>
> **[1:33](https://www.linkedin.com/learning/aws-networking-14125632/troubleshooting-cleanup?u=76281980&t=93)** I can see that the security groups which were created by that cloud formation stack have been removed. Scrolling all the way down on the left-hand nav, I click the load balancers link. As expected, I don't have any load balancers. That's because the load balancer that was created as part of the stack was removed. Navigating back to the Cloud Formation tab, I click the Refresh button in the resources section. Note that the left-hand nav updates to no stacks to display. That's because this specific stack has been deleted. I can confirm that by clicking the stacks link that's part of the breadcrumbs near the top of the page. This shows me that I no longer have any cloud formation stacks. That is one thing that I do like about cloud formation. It does a good job of cleaning up after itself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon EC2|Ec2]] (1)
> **Warnings:** note that (2)
> **Env Vars:** ec2 (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/aws-networking-14125632/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-networking-14125632/next-steps?u=76281980&t=0)** - [Sharif] Thanks for watching networking in [[Amazon Web Services (AWS)|Amazon Web Services]]. I've had a lot of fun being your guide for this survey of networking in AWS. My favorite part has been illustrating some of the networking tools available within AWS, and I encourage you to continue to experiment with them. I hope you gained an appreciation for the virtually limitless ways in which networking can be configured in AWS to meet the demands of your business. I'm confident you can appreciate how important networking is in the toolbox of a full stack engineer. By now, you should have a good understanding of how to connect any existing infrastructure you may have to AWS. Not only should you be able to explain a VPC and its components, you should be able to configure one from scratch. You should have a firm grasp of VPC security tools, including security groups and NACLs. You can wax lyrical about VPC peering, the benefits of transit gateway, and should be able to explain ways in which AWS has extended DNS with Route 53. If you are yearning to expand your knowledge, I encourage you to explore other AWS and networking-related courses available to you in the library. AWS does a commendable job of keeping its documentation up to date for its service offerings. I highly recommend looking it over. It's available at aws.[amazon.com/documentation](https://amazon.com/documentation). If you're looking to bounce ideas off like-minded people, the AWS user groups provide a friendly environment in which to do so. You can find them at aws.[amazon.com/usergroups](https://amazon.com/usergroups). There's also regular AWS chatter at [stackoverflow.com](https://stackoverflow.com).
>
> **[1:39](https://www.linkedin.com/learning/aws-networking-14125632/next-steps?u=76281980&t=99)** If you are a [[Slack]] user, there are a number of public channels in which AWS concepts are discussed and debated. I can't overstate the importance of looking behind the curtain. While wizards and templates are useful, deep knowledge only comes from understanding what they're doing for you. I encourage you to dig in and understand the APIs that are being called. It will greatly ease your automation adoption curve and deepen your knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Slack]] (1)
> **Env Vars:** aws (10), vpc (3), dns (1)
> **CLI Commands:** aws (12), find (1)
> **URLs:** [amazon.com](https://amazon.com) (2), [stackoverflow.com](https://stackoverflow.com) (1)
> **Tools:** slack (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [sharif] (1)


## Instructor

- [[Sharif Nijim]]

## Resources

- Exercise files available

## Skills Covered

- Cloud Administration
- Amazon Web Services (AWS)

## Path Context

### In [[Infrastructure Management on AWS- Skills for Administrators]]
← [[Amazon EC2 Essential Training]] | **3 of 5** | [[Complete Guide to AWS Security and Compliance Management]] →

## Appears In

- [[Infrastructure Management on AWS- Skills for Administrators]]

## Related Courses

_Courses sharing skills:_

- [[Aws Essential Training For Administrators]] — Cloud Administration, Amazon Web Services (AWS)
- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[AWS Essential Training for Architects]] — Amazon Web Services (AWS)

---

[↑ Back to top](#)