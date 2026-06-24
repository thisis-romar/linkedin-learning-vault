---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-ansible-2020
url: "https://www.linkedin.com/learning/learning-ansible-2020"
level: Beginner
updated: 8/25/2020
learners: 7015
skills:
  - Ansible
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHSCgje1Y3Afg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597935046264?e=2147483647&amp;v=beta&amp;t=N_kwR8ju6u_VUeO3SDsZfyWl3UZePVB4DfwsVMbmTcg"
linkedin_topic: Database Management
learning_paths:
  - '[Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)'
next_courses:
  - '[Python Quick Start](Python%20Quick%20Start.md)'
path_nav: '[{"path":"Network Automation Professional Certificate by Arista Networks","position":1,"total":6,"prev":null,"next":"Python Quick Start"}]'
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/devops
  - topic/network-and-system-administration
  - skill/ansible
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Database%20Management/Learning%20Ansible.md)

![Learning Ansible](https://media.licdn.com/dms/image/v2/C4E0DAQHSCgje1Y3Afg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597935046264?e=2147483647&amp;v=beta&amp;t=N_kwR8ju6u_VUeO3SDsZfyWl3UZePVB4DfwsVMbmTcg)

# Learning Ansible

> Ansible is a popular open-source tool that provides automation, configuration management, and orchestration all in one. In this course, Anthony Sequeira introduces Ansible and explains the many reasons system administrators and DevOps engineers choose Ansible as part of their IT toolkit. Learn how to install Ansible in different environments and work with hosts, variables, code, and playbooks. Pra

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020) | Beginner | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Starting your Ansible journey](#starting-your-ansible-journey)
- [**1. What Is Ansible?**](#1-what-is-ansible) (3 videos)
  - [An introduction to Ansible](#an-introduction-to-ansible)
  - [Life before Ansible](#life-before-ansible)
  - [Ansible and Red Hat](#ansible-and-red-hat)
- [**2. Why Choose Ansible?**](#2-why-choose-ansible) (2 videos)
  - [Ansible ease of use](#ansible-ease-of-use)
  - [Advantages to using Ansible](#advantages-to-using-ansible)
- [**3. Getting Started with Ansible**](#3-getting-started-with-ansible) (4 videos)
  - [The parts that make up Ansible](#the-parts-that-make-up-ansible)
  - [Installing Ansible](#installing-ansible)
  - [Challenge: Install Ansible](#challenge-install-ansible)
  - [Solution: Install Ansible](#solution-install-ansible)
- [**4. Working with Ansible**](#4-working-with-ansible) (5 videos)
  - [Working with hosts and variables in Ansible](#working-with-hosts-and-variables-in-ansible)
  - [Working with code in Ansible](#working-with-code-in-ansible)
  - [Working with playbooks in Ansible](#working-with-playbooks-in-ansible)
  - [Challenge: Write a playbook with Ansible](#challenge-write-a-playbook-with-ansible)
  - [Solution: Write a playbook with Ansible](#solution-write-a-playbook-with-ansible)
- [**5. What Can Ansible Do for You?**](#5-what-can-ansible-do-for-you) (6 videos)
  - [Ansible and remote management](#ansible-and-remote-management)
  - [Ansible for orchestration](#ansible-for-orchestration)
  - [Ansible for system configuration management](#ansible-for-system-configuration-management)
  - [React to configuration changes with Ansible](#react-to-configuration-changes-with-ansible)
  - [Infrastructure management with Ansible](#infrastructure-management-with-ansible)
  - [Repeating tasks across fleets with Ansible](#repeating-tasks-across-fleets-with-ansible)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing on with Ansible](#continuing-on-with-ansible)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Starting your Ansible journey](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=0)** - [Anthony] Imagine if there was a tool that would work with any environment and allow you to automate tasks, build and maintain infrastructure, and manage the entire life cycle of our IT systems. If this sounds like it's too good to be true, well I have some news for you, it isn't. [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is growing in popularity, and for good reason. It lets you manage not just one device at a time, but hundreds or even thousands of machines wherever they're located. In this course, we're going to look at the basics from the history of Ansible to the parts that make it work, to the most popular use cases for this kind of tool. Along the way, we'll have some hands-on demos with building an Ansible environment, so you can get up and running with your own deployments. My name's Anthony Sequeira, I'm a Cisco-certified CCIE, and I've been working in information technology since 1996. I've used Ansible for years to assist with server management and the construction and maintenance of robust solutions inside of the public cloud. So join me in this [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course, as we get past the hype and really see what this tool can do for us, and trust me, even though it looks pretty bare bones and simple, that's part of the design and its magic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** ansible (4), make (1)
> **Env Vars:** ccie (1)
> **Analogies:** imagine (1)
> **Speakers:** - [anthony] (1)


### 1. What Is Ansible?

[↑ Back to Table of Contents](#table-of-contents)

#### [An introduction to Ansible](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=0)** - [Instructor] If you work in or around information technology, chances are, you've heard about [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) lately. It seems to be the tool that everyone wants to use, and everyone is all excited about. But why is that? Well, Ansible is extremely simple, extremely easy to use and very flexible as we're going to find out in this course, but at its most simple, it's a task execution engine. So we're going to have Ansible running on a variety of different systems potentially, but oftentimes we are running it on a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) system and Ansible can reach out and execute tasks on the local system that you're on and on remote systems. By the way, when you're running Ansible on a system, in order to control other systems, you tend to call that local system running Ansible, your control node. So you might hear me say control node when I'm referring to the Ansible system itself. In addition to this simplicity, there is a client lists architecture that Ansible uses. This is also wonderful. So when you want to control a bunch of systems using Ansible, you don't have to go to those remote systems and install client software. Instead, Ansible will use the kind of ubiquitous secure shell SSH. It will use SSH in order to make connections
>
> **[1:35](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=95)** into those remote systems. And it will do its configuration magic for you. Of course it is upon you as the administrator to set up the SSH so that it functions properly between Ansible and those remote nodes. Everything that we do in Ansible is going to be in very human readable text files. So that really adds to the simplicity of utilizing Ansible. And the Ansible itself is written in the very popular [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming language and the playbooks that we are going to be running, which can really get sophisticated and allow you to do automation and orchestration of tasks. Those are written in the standards based YAML, which is yet another markup language. YAML is very easy to read, very easy to work with. And that's yet another reason why Ansible is so celebrated. Finally, keep in mind that you could have massive fleets of servers these days. And Ansible is going to be a very effective way in which to really maintain and monitor and operate those massive fleets of systems. If you have a large, large enterprise and you have many, many different Ansible servers, and you have many, many systems that you manage, you may want help with managing Ansible itself and a nice
>
> **[3:11](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=191)** web based graphical user interface for doing that is called Red Hat Ansible Tower. Now that is not a free product from Red Hat. So if you're interested in open source software for the management of all of your Ansible systems in a graphical user interface, you would want to check out the AWX product offering. So that's the open source version of Red Hat Ansible Tower, if you will. So let's take a look at Ansible in action shall we? Here you can see, I am logged in to a Linux server and this is my control node. I have Ansible set up on this system. So I'm going to run what's called an ad hoc command. And we'll talk more about these in great depth later on, but for right now, I'm just going to say, I want Ansible. So I call the Ansible executable. I want Ansible to run here against a list of systems that I have called my servers. So I say Ansible, my servers. And then I'm going to use a module called ping. The packet Internet Groper is very useful for reaching out and testing the availability of systems, and I've set this up so that it will test for the availability of my local host, the control node itself. And it will be checking for our remote servers and I've got one remote server out there at this point that we are going to be working with.
>
> **[4:44](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=284)** So you can see how amazingly simple this is. Ansible, my servers, and then I call the ping module. We will see the results of this test, right at the command line. You can see that I successfully was able to ping communicate with over TCP IP, the system at 10 zero one, one 84 and also the system at 10 zero one 79. So we've got two systems that responded in my list of my servers and they're perfectly healthy and ready to communicate with us. And by the way, while it was a very simple little demonstration of Ansible notice how useful this was. You know, if you had dozens of servers to test for their reachability would be a real chore if you were manually inputting all of those different ping commands. So even our little simple demonstration here does really depict just how powerful Ansible is going to be for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (30), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** ansible (30), node (4), ssh (3), find (1), make (1)
> **Env Vars:** ssh (3), yaml (2), awx (1), tcp (1)
> **Prerequisites:** set up (2), install (1)
> **Definitions:** is a  (1), is called (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)

#### [Life before Ansible](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=0)** - [Illustrator] So that we can better understand just how important [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) can be in our IT infrastructure, let's talk about a bit about what life was like before Ansible. You see many years ago, the server administrators in a typical IT department were what we call siloed. They were operating somewhat in a vacuum. They were doing all their work based on requests from other teams in the IT department, but there was this real big separation between their day-to-day functions and the functions of different personnel in the IT department. And something that was happening a lot was these server admins were needing to go to systems and manage them by hand, that's right, they would log into the operating system, maybe it was a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) operating system, and they would make configuration changes. Then they would go into a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) box and make configuration changes. And so what quickly happened was server tools started being developed that could assist with this manual management of systems, but no, this would really be looked upon as it's still a manual configuration approach. And in fact, as server tools got more sophisticated, what started happening was we'd have our server admins needing to be trained on each of these different tools for managing different servers under their control.
>
> **[1:35](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=95)** So virtualization then came along in great, great celebrated fashion, and this really started to drive the push for automation, especially considering that many virtual servers could very quickly be established, but then, Oh my goodness, the "by hand" management that would need to take place would be really exhausting on the server admin staff. So thanks to tools like Ansible, today, we have this growth of [DevOps](../../Topics/DevOps.md) where the server teams can work side by side and even right along the way with the development staff, and can very, very efficiently now provision architectures and applications for consumption by our users with an ease and a real transparency that has never been imagined before. So this is certainly an exciting time. And just to prove how simple Ansible can make this, here's a sample playbook. Now, you'll note that this playbook is in YAML. So we see the YML extension there to indicate YAML. And this simple YAML playbook notice is going to run some common code against all of the devices that Ansible is managing.
>
> **[3:09](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=189)** And then this playbook will go to the database servers that we've defined and run some code to get the database servers set up. And then the same with the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md). Notice we have code that will run that will set up the base Apache and then give the exact web parameters that are needed, and then the load balancers. And then the monitoring tool is going to be installed across these devices. So you can see with this simple, very easily read YAML playbook for Ansible, we can create the entire infrastructure that is going to be hosting some new mission critical app of our enterprise. Now, don't worry about the details of this YAML playbook, we'll be teaching you all of this as we move throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (6), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [DevOps](../../Topics/DevOps.md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **CLI Commands:** ansible (6), make (3), apache (1)
> **Env Vars:** yaml (5), yml (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (2)
> **Warnings:** note that (1)
> **Speakers:** - [illustrator] (1)

#### [Ansible and Red Hat](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=0)** - Now one of the very exciting things about [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) that you may have heard is that it's free. It's open source software that is free but then you may be a bit confused if you've heard that Ansible was purchased by Red Hat. Well, all of that is true and let's explain as we look at the history of Ansible. So the year was 2012 and Michael DeHaan released Ansible to the world and this approach that Michael took was very very interesting because what he saw was that himself and many people like him were creating scripts that would automate the infrastructure and the servers and the IT stuff all around them. So Michael wanted to take an approach to systems management and [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) and even infrastructure creation through [DevOps](../../Topics/DevOps.md) that would be script friendly and they could even leverage existing scripts that had already been written. So Ansible was created to do this and sure enough in 2015 Red Hat purchased Ansible Inc. Ansible Inc. was formed by Michael and his peers and the Red Hat acquisition in 2015 was interesting because Ansible itself and all of the great resources that we can acquire through [GitHub](../../Skills/Software%20Development/GitHub.md)
>
> **[1:36](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=96)** and additional sites that I'll share with you for components that function with Ansible all of that was kept open source and free but Red Hat was able to wrap some paid services and software around it specifically Ansible Consulting and Ansible Tower are two paid services. Ansible Consulting, of course, being the assistance with Ansible implementations on an enterprise scale and Ansible Tower being the graphical user interface software for managing massive Ansible deployments inside of a huge enterprise. So Red Hat was able to have these paid services around the free product and if you don't think Ansible is popular we'll just go check it out GitHub where it is the number one acclaimed product of all of the different management [products](../../Skills/Software%20Development/Microsoft%20Products.md) that are available through GitHub so it really has had amazing traction. So here we are at the [redhat.com](https://redhat.com) website and if you go under products you'll see under the automation and management area sure enough there's the Red Hat Ansible automation platform and this is a very valuable place for you to visit especially if you consider that right here is a learn option and there's going to be some great complementary videos and complementary technical guides that you can access
>
> **[3:11](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=191)** to learn more regarding Ansible. Now it is linked inside the Red Hat website but I will say that it's just easier to [Google](../../Glossary/Service/Google.md) search for the Ansible documentation so if you do a Google search for Ansible documentation you'll get here to the official Ansible documentation on the web and we'll be utilizing this quite a bit as you might imagine as we move throughout this course. Notice you can choose your version of Ansible but it is going to default to the latest greatest version. You can search the documentation or just enjoy this chapter listing which will take you to specific sections of interest like working with playbooks so the Ansible documentation extremely powerful and it's often easiest just to navigate to it directly even though as I stated it is going to be linked to buried there in the [redhat.com](https://redhat.com) website. So that's a bit of the history on Ansible and I hope it clears things up for you as far as this open-source product being officially own by Red Hat themselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (24), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2), [Google](../../Glossary/Service/Google.md) (2), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (1)
> **CLI Commands:** ansible (24)
> **Tools:** github (3)
> **URLs:** [redhat.com](https://redhat.com) (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** imagine (1)


### 2. Why Choose Ansible?

[↑ Back to Table of Contents](#table-of-contents)

#### [Ansible ease of use](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=0)** - [Instructor] It can be pretty hard to believe that something so incredibly powerful, like [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) could be so easy to use, but I think we have to remember the original goals of Ansible and they were to be clear, to be fast, to be complete, to be efficient and to be secure. So the initial goals of the product really help to drive this ease of use and the simplicity. Now another goal of Ansible was that we could go up to someone using Ansible, and we could say things like, show me the playbook that you're using. And we could read that, it would be human readable. And we might say, show me your inventory file. And it's very easy to read. We can just look at what someone is doing with the product, and we can immediately understand what they are trying to accomplish. Now, one of the amazing things about Ansible to me is that even though it is so simple, even though it is so straightforward, it can be utilized in large environments. In fact, one could argue that if you had a massive enterprise, you could call upon something like Red Hat Tower to manage the overall Ansible deployments you've got throughout the enterprise, and really this product could scale
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=94)** to the very largest of enterprises. Now really attributing to this ease of use concept is the fact that Ansible is going to leverage modules in its operation. And we'll take a close look at these, but they really give Ansible their straightforward functionality to do different things. For example, if we want to quickly test for the reachability of some node on the network, we can call upon the ping module. If we want to write information to a file, there's going to be a module for that. And this lends itself to the extensibility of Ansible, where it can just continue to evolve as technologies change. And speaking of extending Ansible's functionality, there's plugins for Ansible. So Ansible is going to have its own versioning where new features and efficiencies are added, but there's plugins that we can add to give additional functionality. A great example of this is when we want to have our inventory, the listing of hosts that we're going to be managing updated dynamically from something like AWS, a plugin gives us that functionality. And speaking of inventories, we have these simple inventories that we use to list the devices that we're going to be managing.
>
> **[3:08](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=188)** And these inventories we can statically create, but thanks to plugins, we can have them dynamically generated as I described, so inventories and their simplicity is a great example of just how the overall approach to Ansible was so straightforward. Now to prove this to you, here is an inventory file. And notice the file by default is named hosts. And you can see that I have in brackets here, [Web Servers](../../Skills/Web%20Development/Web%20Servers.md), and then I've got two fully qualified domain names that I'm pretending are my web servers. You can put in an IP address. If you don't have the fully qualified domain name for the resource, notice you can use regular expression type syntax in order to give a range of matching. And here you can see, I have the DB servers, the database servers, and I've got a couple of sample entries here. So this just really gives us a sense for how incredibly easy this product is going to be to work with. There's the devices that we can control in two different categories. And of course, we can call these by this simple name when we are in a playbook and we want to enact some behaviors against those devices, couldn't be any easier. This is a good old text file that is so easy to read and understand,
>
> **[4:42](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=282)** and yet it is critical to the functionality of Ansible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (14), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (2)
> **CLI Commands:** ansible (14), node (1), aws (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** aws (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Advantages to using Ansible](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=0)** - [Narrator] Earlier in this course, I made the statement that [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) was the most celebrated management tool in all of [GitHub](../../Skills/Software%20Development/GitHub.md). And this is true, but why is it so, I mean, we know it's easy to use, and that's probably going to help out. But there are other advantages that we need to present. In fact, it's not only easy to use, but as you're going to experience in this course, it's easy to learn. So with a short small learning curve, that really, really helps the adoption of Ansible. And Ansible itself is composed in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) and this makes the Ansible product very Python friendly. Python, in case you haven't noticed, is quickly becoming the most called upon programming language in the world. And it'll be interesting to see how long that is the case since these things kind of ebb and flow. But right now Python is king and the fact that Ansible is written in Python is a huge advantage. But I would have to say one of the biggest overall advantages is the fact that Ansible is Agentless. This is hugely important for us, because it can be very tricky to install an agent on all of these different nodes that we propose managing with some management tool. In fact, it can be oftentimes brutally difficult,
>
> **[1:39](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=99)** especially when we have systems that are really locked down and that don't install software with ease. Some more advantages include the fact that when we write critical components like playbooks, they're in that simple YAML format, and also we love the fact that Ansible is so used around the world, because there is folks that are contributing to what Ansible can do for you all the time. This is represented in the very popular website called Ansible Galaxy, where contributors all over the world can upload what are called Roles that will help us become successful with Ansible no matter what it is we're trying to achieve. Here we are at the Ansible Galaxy website and you can see right on the main page, we can go in and choose a category that we might be interested in. And it seems like every time I come in here, I see something cool. So in the networking category, here is an Ansible module for GNS3 and this module allows you to automate the GNS3 tool, which is a router simulator. So if you're interested in simulating network [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), you could use GNS3
>
> **[3:12](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=192)** and if you're interested in automating that now we have a module for GNS3. Thanks to the contribution of some wonderful user out there that is helping the world one module at a time. So there's modules that are uploaded here there is roles. And while we're here, let me just quickly explain to you what a role is. A role is a downloadable component that you install in your Ansible system and it's got all of the ingredients that would be needed in order to do either simple or even sophisticated automation and orchestrations. So, a role is a way to package everything up that you would need and distribute it and then plug it right in to Ansible. Now I said plugin there, and we shouldn't confuse Ansible roles with plugins that we mentioned earlier. So just keep those two distinct in your mind they are separate things. A plugin extends the functionality of what Ansible can do, where as a role is going to be something that was developed by the community out there typically, and it's for just executing within the Ansible environment, things that you want to do to your nodes. So subtle differences there but important differences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (17), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **CLI Commands:** ansible (17), python (5)
> **Env Vars:** gns3 (4), yaml (1)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** install (3)
> **Cross-References:** earlier in (1), we mentioned (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)


### 3. Getting Started with Ansible

[↑ Back to Table of Contents](#table-of-contents)

#### [The parts that make up Ansible](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=0)** - [Instructor] Well, it's time for you and I to examine the components that make up [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md). We said the Ansible is very simple, and I'm really going to prove that to you right now. So here I am on the Ansible control node. This is the system that has Ansible installed on it, and that will be managing other systems. So the first thing we know that must exist on this device is an inventory, that list of devices that we're going to be controlling. So I'm going to do a change directory. And I'm going to go to the Etsy forward slash Ansible directory on this system. And if we do a list right there, there is the hosts file. So the hosts file is by default in the Etsy Ansible directory, and it's going to have the inventory inside it. Those devices that we can manage. Notice there is a directory here called roles. And that's where we can install those wonderful roles that will have everything we need, all the ingredients for doing amazing management of systems. And then notice there's the Ansible dot CFG. This is a very important file. So I'm going to go into the editor, I'm going to do a vim and Ansible, if I can spell that right, Ansible dot CFG. And that is misspelled (giggling) so let's try that again.
>
> **[1:33](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=93)** I'm going to exit, and I'm going to try vim, and let's have auto complete help me out, there we go. So notice, I did not assume the root directory permissions there. So I'm in read only mode inside this Ansible dot CFG, and that's exactly what I wanted to do, because I don't want to actually make any changes in here. But notice how you can come in here and you can uncomment any of these lines and modify the default behaviors. So if you wanted to have Ansible, look for your inventory in a different location from the Etsy Ansible host location, well, then you could uncomment that line out, and you could give a new location for it to look for your inventory by default. So this file is obviously very critical. So I'm going to get out of here, I'll quit and escape out of that file. And now we're ready to take a look at the next major component that makes Ansible function. And that is a playbook. So I'm going to go back into my home directory, and then I have a mystuff folder that I've created in my home directory. And if I do a listing, there's a YAML file and it's called sample dot YAML and that is a sample playbook. So let's take a look at that. Once again, I'll just do it in the read only mode. So I'll go vim sample dot YAML, and we'll take a look.
>
> **[3:10](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=190)** So this is a playbook. The name of the playbook is sample playbook. And I suppose I should back up, notice the three dashes that occur right at the top of the file. That's to indicate YAML is the syntax that we're using. So we have a play inside the playbook called sample playbook. And this play is going to be executed against all the hosts. And we are going to assume the root permissions. So we are going to become a user of a root, and then we have two tasks inside of this play. And one is to ensure Apache is at the latest version, and then the next is to ensure Apache is running. So isn't this clever and notice how human readable this playbook is. Now, we also want to know, right down here that notice we are calling upon a module. And the module that we are calling upon here is the yum module. And then you can see we're calling upon the service module right down here. So these modules, we said, are a critical component of Ansible. They are the kind of magic that make these playbooks function. And yeah, we can see two examples of modules right there that are being called inside of this playbook. So I'm going to get out of here,
>
> **[4:43](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=283)** and we are going to execute that playbook as you might guess. So to do this, I'm going to type Ansible dash playbook, and then I'll simply say, run that sample dot YAML playbook, and Ansible goes to work running that playbook against all of the hosts in the inventory. So we had the first host at 10 zero one 184. And then we had this host, [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) at 10 zero one 79. And you can see that the red indicates an error condition and the green indicates everything was fine. So it does appear that we are having an issue with the 10 zero one 79 machine, ensuring Apaches at the latest version, and you can get details right here that the installation is failing. So I'm thinking that our packages that are on that system are not updated, and we could go and troubleshoot that now. Notice at the end of the display here we get a nice summary of look on 10 zero one 184, everything checked out, everything executed just fine. On the Ubuntu system, we had one thing checked out and one fail. And clearly what had happened was the failure of ensuring Apache is at the latest version.
>
> **[6:18](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=378)** So the playbook is a very, very powerful structure. It's calling those modules to get work done. Now, don't forget that you can do what are called ad hoc Ansible commands anytime you like. So here you can see I'm issuing the Ansible command. And then I can say that there's a group of systems called myservers in my inventory file, and I'd like to just quickly run the ping module and ping them. So notice at any point, you can fire off one of these ad hoc commands against any systems that you desire.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (18), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (2)
> **CLI Commands:** ansible (18), make (3), apache (3), node (1), yum (1)
> **Env Vars:** yaml (5), cfg (3)
> **Definitions:** is a  (6), is an  (1)
> **Tools:** vim (3)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Warnings:** troubleshoot (1)

#### [Installing Ansible](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=0)** - [Instructor] It probably won't surprise you to learn that installing [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is very, very simple. What you'll want to do is consult the Ansible documentation. Notice when you go to the documentation, there's an installation guide and you'll want to follow the installation guidance for the operating system where you're doing the installation. Let me demonstrate the installation of Ansible. And I am doing this on a Mac. Now you might think the Mac, isn't a great place to run Ansible from, but it works just fine. And while this might not be a frequent platform that you use in production, it can be very, very powerful to run Ansible from the Mac when you're just experimenting and learning Ansible. Notice that the Mac does not have a [Package Management](../../Skills/Web%20Development/Package%20Management.md) system to run from the terminal so you can install Homebrew. As a matter of fact, if you visit the Homebrew webpage, you'll see that it is very easy to install Homebrew on the Mac by just copying and pasting this command. Having the Homebrew on your Mac will make it easy to do things like the installation of [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3 By default, on a Mac, if you do a Python tack tack version command, you'll find that it's running something like 2.7.16 You'd want to leave this Python in place, even though it's kind of legacy and old because the Mac relies on it. But you want Python 3 certainly for your Ansible utilization at this point.
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=94)** And if we do a Python 3 tack tack version, you can see that I've got the latest Python and this is great. Should you not have Python You can use brew once it's installed to install, or in my case, I'll demonstrate the reinstallation of Python 3. So you would do brew install Python 3 to ensure you have the latest Python, which is a requirement for running Ansible. You can see that my reinstallation went smoothly and I am ready now to do the installation of Ansible and how you can do that is using pip3. And you may have just installed pip3 when you did your Python 3 installation. So I'll run sudo pip3, and I'll say install Ansible. And it will ask me for my password, of course, thanks to the sudo command. And you need to type that incorrectly. And once you do, you will initiate the installation of Ansible. And you can see that mine went very quickly because it's already installed and it's in fine shape. To prove this, We will do Ansible tack tack version, and you will see that on this map, I have the 2.9.9 version of Ansible installed. And you can see that I'm using the Python version of 3.7.7 One interesting thing to note here too is that the Ansible is installed in the user local bin Ansible location,
>
> **[3:09](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=189)** and that the Mac installation doesn't set up a configuration file. So if you would like you can put a configuration file on this level location. You could also put the configuration file somewhere else and reference it's location when you initiate a playbook. So its great that you have several convenient options for referencing a configuration file for any nonstandard configurations that you would like with Ansible's execution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (16), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (12), [Package Management](../../Skills/Web%20Development/Package%20Management.md) (1)
> **CLI Commands:** ansible (16), python (12), pip3 (3), brew (2), sudo (2)
> **Versions:** python 3 (6), 2.7.16 (1), 2.9.9 (1), 3.7.7 (1)
> **Prerequisites:** install (5), set up (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Challenge: Install Ansible](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=0)** - [Instructor] Well, are you ready for a challenge in this [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) course? Let's have you perform an installation of Ansible. Now you have a lot of options here from an operating system perspective, so go ahead and perform the Ansible installation on the platform of your choice. Let's make sure, of course, that it's one of the supported platforms, and consult the Ansible documentation for the exact step by step installation process for your supported platform. Now, when the installation completes, I want you to verify that Ansible installation, and I want you to do this using two techniques. First, verify the version of Ansible that is installed. Remember, you can do that with the Ansible and then dash dash version, and then use Ansible to perform a ping test against your local host. Remember, that was simply Ansible, localhost dash M, and then ping. So go ahead and do this installation, do it slowly, carefully, following the documentation, and then be sure to do these verification steps. This can vary in the amount of time that it's going to take you, but I wouldn't think it would take anyone longer than 40 minutes. So some of you will be done in just moments, because maybe it's an installation that you've done many times before,
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=94)** or maybe there's very little dependencies that need to be installed on your system. Maybe [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3 is already in place and ready to go. So there's definitely some variation here, but yeah, it really shouldn't take you longer than that 40 minutes. Have fun and good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (9), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** ansible (9), make (1), python (1)
> **Versions:** python 3 (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Install Ansible](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=0)** - [Instructor] Well, how did you do with that challenge of installing [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md)? I'm going to walk through a solution right now. And since I have already demonstrated the installation of Ansible on a Mac, I decided to choose a different operating system to show this solution. And I'll go ahead and demonstrate the installation of Ansible on [Ubuntu](../../Skills/Web%20Development/Ubuntu.md), one of the most popular [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) variants. Now notice I've gone to the Ansible Documentation, and I've pulled up the documentation on installing Ansible on Ubuntu, and we can see these key commands right here, that can do this installation. And I'm going to walk you through those commands, but sure enough, we will be in a situation where we're using that older [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). So, I'll show just how easy it would be to fix that up. But this will certainly work, and it is certainly not the end of the world, if you're using the 2.x version of Python behind your Ansible. So, let me go to my terminal, and you will see that I am at my Ubuntu system, and we are going to use the [Package Management](../../Skills/Web%20Development/Package%20Management.md) tool, and we're going to begin by updating that. So, we run the Sudo App update, and this again was right out of the documentation. Then what we're going to do, is our sudo apt, and we are going to install. And what we want is the software-properties-common.
>
> **[1:37](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=97)** So, we do this installation. Notice we are prompted. We have to indicate that, yes, we do want this to transpire. Then we are going to do our C, our sudo apt, and we are going to add the repository, and we are going to do dash, dash yes, and finally dash, dash update. And we are looking at, the personal package archive for Ansible. So, it's ansible/ansible. And this should take just a moment. And then when that is complete, we are ready to do the install of Ansible. So, I'll do my sudo apt install ansible, and it helps to spell it right. Notice you'll get excellent documentation there on an error. I'm going to say, yes I do want this installation to proceed. So, as you're watching this installation, and you're looking for errors, we can see all those references to the 2.7 version of Python. So, that's one of your clues that, oh, okay, this is working successfully, but it is relying on the older Python, that is installed in this Ubuntu. And what's interesting about that by the way, is, yes, the Python, that was in place on this machine,
>
> **[3:13](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=193)** was the 2.7.17, but notice there is Python three in place. It's just not being used, by the way we did the Ansible installation there. We could modify the configuration file for Ansible to point to Python three. But I did want to show this, watch this. If we do a sudo apt, and we install the python3-pip, we can and go ahead and do the installation of Python right away. Right from the initial installation, we can do it to use the Python three. And that's what I'm going to do right now. This will install it over the top and fix everything, and this is a powerful way where you might want to initiate, the installation from this straight away. So, just keep in mind when you're in the Ansible documentation, that many times the installation instructions, may be having you utilize, that older version of Python as we saw. So, it looks like this is finishing up. That's great with no errors. So now, we can do our pip3 install ansible, and look at this. This is going to do the Ansible installation, using the package management inside of Python,
>
> **[4:48](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=288)** specifically version three. And I like this demonstration too for you, because it is showing, how I'm doing this, right over the top of the previous installation. Look at that. So, it successfully installed the Ansible 2.9.9. And now we can go ahead, and do our verification. So, I'm going to do ansible --version, and we can see, that it is at the 2.9.9, and that's great. And then we have our Python version, that is in use of 3.6.9. And we definitely would want to go ahead and initiate an Ansible ad hoc command for further testing. We indicated we wanted to do that against the local host system, and we're going to use that ping module. So there we can see, Ansible functioning just beautifully, following our installation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (20), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (12), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (4), [Package Management](../../Skills/Web%20Development/Package%20Management.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** ansible (20), python (12), sudo (5), apt (4), python3 (1)
> **Prerequisites:** install (6)
> **Versions:** 2.9.9 (2), 2.7 (1), 2.7.17 (1), 3.6.9 (1)
> **Documentation:** the documentation (2)
> **Cross-References:** as we saw (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)


### 4. Working with Ansible

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with hosts and variables in Ansible](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=0)** - [Instructor] Now that we understand that there is an inventory file that defines the hosts that we're going to be managing with [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), let's take a closer look at this. And in fact, let's add the important concept of variables. We can use these variables in many places with Ansible, but one of the important places we can use them is in the inventory file for our hosts. So here you can see I have a sample Ansible inventory file for us. And notice on line one, we have the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Southeast in square brackets. This indicates a group inside of the inventory file. And this group is going to allow us to reference hosts just by using the group name. So, if we wanted to initiate something against the Southeast hosts, that would include local host, and other1.[example.com](https://example.com). Notice that to the right of these host entries, we have some variables and the variable values. So notice for the local host, I set the Ansible underscore connection variable to local, and then for other1.[example.com](https://example.com), I set this variable to SSH. So, here we're able to make sure that for the local host, that we do not use SSH we just access that system locally, and then for our other1.[example.com](https://example.com),
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=94)** we will use the SSH functionality in order to access that remote host. Notice we also specify an Ansible user, and that is the [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) account on that remote system. So, notice how variables are really going to give us great flexibility. And as I stated, it's not just in the inventory file that we can call upon variables, we can use use them inside of our playbooks, and in many other locations inside of Ansible. Notice we then have the Northeast group. There's other2.[example.com](https://example.com) in this group, as well as the machine at 10.10.100.10. Notice how we can use IP addresses or fully qualified domain names interchangeably within the inventory file. Then we have the Southeast group that just has the one member. Then notice on line 12, we do something interesting. We create a sub-grouping, and I call this East, and notice the keyword children to indicate that this is going to consist of groupings of our other groups. So we have the Southeast group that is referenced here, and the Northeast group that is referenced here. So now we have an easy way to enact changes or configuration monitoring, or whatever we might be doing with Ansible, against all the systems that are in the Southeast and the Northeast by just using the group name East
>
> **[3:08](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=188)** when we reference this in our Ansible command syntax. Now, you might look at this and be tempted to create a grouping called all, and to include everyone, but you don't need to do that with Ansible because there is already a default grouping that's created for you automatically, and this is so that you can reference every single node that is in the inventory file. So no need for you to go and create that all grouping manually, as it already exists.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (9), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **CLI Commands:** ansible (9), ssh (3), make (1), node (1)
> **URLs:** [example.com](https://example.com) (4)
> **Env Vars:** ssh (3)
> **Versions:** 10.10.100 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Working with code in Ansible](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=0)** - [Instructor] Well, now that we've taken a deeper look at the inventory file and the hosts inside it and our ability to use variables, let's talk about how we can get things done. And this is, of course, using code. But it's code that's been constructed for us in the form of modules. So let's take a deeper look at modules in this lesson. So you will definitely want to visit the [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) documentation as you begin to work with modules. And you can go ahead and search the documentation for the module index. This is listing all of the modules that come pre cooked inside of Ansible. So these are the modules that are shipping with the version of Ansible, that of course we have selected in the documentation. There are plenty of additional modules available for you out there. Remember the galaxy sites is going to have many, many brand new modules that were just created to help you do various things with all kinds of various nodes out there you might be managing. But to demonstrate how this index works, I'll go into all of the modules that have to do with files. And notice there's a handy find module. And when you go to the documentation of a module, it's going to give a synopsis. So what is the basics of this module, and this is for returning lists of files based on specific criteria.
>
> **[1:35](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=95)** And notice it will give you the available parameters. This is very important, because you may want to be doing various things with the module and these parameters are how you can specify those requirements. And then we get examples and you can really learn a lot about how to work with the module from these examples. Now you'll notice that the examples by default are composed in a playbook Task Type fashion. So this is how we would see the tasks inside of a playbook. But we can still use this information in order to run the module successfully in an ad hoc fashion. And since we haven't really delve deep into playbooks yet, let's just experiment with this find module in an ad hoc manner. So I'm going to go to the terminal and we will issue the command Ansible. And we will just run this against this local host system for testing purposes. And you remember how we signify a module its dash m when we're doing our ad hoc command work and we are working with the find module. Now we need to provide the parameter value, so we use a dash a for that. And after the dash a, you just do open quotes. And you will specify the criteria
>
> **[3:12](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=192)** that you learned of in the documentation. So one of the parameters that we can specify is the path. So for this particular test that we're doing right now, I'll say, go ahead and start in the Downloads folder. So we will issue a path of downloads. And for file type, we want to see the file, so we're examining files, not subdirectories, or anything of that nature. So notice, let's coordinate this against the documentation. So if we go back to the documentation, we see that there was the paths parameter and I completed that and somewhere they give an example there it is of the file type parameter. And I went ahead and indicate that we were wanting to find the files that are in the path of downloads that I specify. So to run this, we just hit Enter on the keyboard. And look at this lots of green that tells me that we were successful. And if we scroll up here, we see the output, we had success running against the local host. Then we have the open curly bracket, and then we have these parameters and their values. And this is wonderful, because this is a standardized format. It's giving us this information in and this is [JSON](../../Skills/Web%20Development/JSON.md) formatted output.
>
> **[4:45](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=285)** So did this module change anything? No, it didn't. And we wouldn't have expected it to because we ran it with parameters that would just be finding files, not changing anything. It examined four components, and as far as the file type of files go that we wanted to examine, it has met with success. Look at this. So in the downloads, we have a test dot RTF, Rich Text Format file. And notice we get all these excellent details about that file. And then look at this, there was a test two that was found. And sure enough, these are two test documents that I placed inside the download folder. Notice the number of matched was two. So four components were examined, but there were two matches based on my criteria that I gave of look, we want to find types of just files, not directories. And then we could have returned some optional message but we chose not to do that. So there we go. This module was executed and gave us excellent data much more information at a glance than we would have been able to see with any of the graphical user interface tools. Notice I am on the Mac operating system where one of the places where you and I have installed Ansible.
>
> **[6:22](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=382)** So running this against the Mac gives me all kinds of great details regarding the files in this location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** ansible (5), find (5)
> **Documentation:** the documentation (6)
> **UI Navigation:** go to (2), scroll up (1)
> **Env Vars:** json (1), rtf (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### [Working with playbooks in Ansible](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=0)** - [Instructor] Sure ad hoc commands are very powerful with [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), allowing us to run commands against the systems of our choice, but let's face it, playbooks are where the power really comes into play. So let's turn to an editing software package like Atom, in order to create a playbook. This is how easy it is. Notice I've created a file called first.yml, and inside of the Atom editor, I begin my YAML file with the three dashes. This indicates that it is an Ansible syntax that we're going to be utilizing. Then I do a dash and I give a name for the first play of the playbook. So I'm going to do a name of my first play inside of this playbook. And then I'm going to come in and tab over just below the name, the tabs are extremely important in the YAML file, and I'm going to run this against the local host. So we specify the hosts that are going to have this play executed it against them. And then we skip a line and we are now ready to go and specify the tasks that are going to make up this play. So I come down, skipping a line, and underneath the tasks we are going to indicate the name of our first task. And I will call this the test reachabiliy task. And then underneath that name, we're going to indicate the module
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=94)** that we are interested in executing. And we're going to indicate the ping module. And we don't need to specify any parameters for that to execute. The next task in our first play is going to be to install a great utility called stress, and this allows us to stress test systems. And so I'm going to tab underneath the name and we are going to use the homebrew module. And for the homebrew module, I'm going to give a name of stress, so it installs the correct utility, and we are going to indicate a state of present to make sure that if the stress app is not there, that the homebrew will install it. So I'll go up and do a File, Save on this file. Now you might be wondering where you can get the configurable parameters for a module like homebrew, and remember that is going to be in your Ansible documentation. So here you can see I've navigated to the homebrew module documentation inside of Ansible, and we get all of the details that we might need about this module, including that state parameter and the possible choices for it. So we are now ready to go to the command line and try our first playbook. So I'm going to do the Ansible playbook syntax, and I'm going to indicate that the Ansible playbook
>
> **[3:07](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=187)** we want to run is simply first.yml. And when I execute this, we get an error and this is perfect because I wanted to demonstrate just what will happen if you have issues in your syntax. And notice it tells us where we have a potential problem and it's with this line of tasks. So we're going to go back to the playbook and we're going to note that this task needs to be indented. So I'm going to indent that, and we have a missing space in front of these name indicators. So that's going to be a problem. So now I'm going to actually re-indent this and this is going to really make it look much cleaner for me. And so there we go. We kind of clean up the indenting. We caught a couple of errors in there. We have cleaned up the display of the tasks that are going to be executed. So I will do a command-S to save this file. And then we will head back to the terminal and we will rerun our Ansible playbook against that first.yml file. And notice we gather our facts against local host just fine. We test reachabiliy against the local host just fine. And we make a change. We install the stress app. And you can see that all of that succeeded. Remember, if you want to execute a playbook and you want more details as to what is happening,
>
> **[4:43](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=283)** you can use the dash-V and now we can see the results of the ping. And we can see additional information about the installation of stress. In this particular instance, it was already installed, so there was no change required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (7)
> **CLI Commands:** ansible (7), make (4)
> **Tools:** atom (2), command line (1), terminal (1)
> **File Paths:** first.yml (3)
> **Prerequisites:** install (3)
> **Env Vars:** yaml (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### [Challenge: Write a playbook with Ansible](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=0)** - Well, I hope you're ready to really demonstrate the great knowledge that you've gained regarding this exciting product called [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md). In this challenge, you're going to write a Playbook in Ansible in order to carry out some tasks. So what I would like to challenge you with is to create two text files in a directory of your choosing. You are then going to create a Playbook with a single play that consists of two tasks. And you're going to run these against your local Ansible control node. The first task is going to have you ping the local Ansible system. And the second task is going to have you display the details of those two text files. Now, remember, you want to make sure you run this Playbook so that you can actually see the output of the modules that you're going to use in this Playbook. This is a challenge that shouldn't take you longer than 40 minutes to complete. Have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (4)
> **CLI Commands:** ansible (4), node (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - well (1)

#### [Solution: Write a playbook with Ansible](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=0)** - So how did you do writing a playbook in [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md)? Let me walk you through my solution. So the first thing that I'm going to do is per the instructions note I've created a challenges directory in my home folder and I'm going to use the touch utility in order to quickly create a testone.txt and a testtwo.txt file. So if I list the files in that directory we can see we have the two files. Now I'll go over to my favorite editor and notice I've got an older playbook from our course inside here and it's always nice to go ahead and use a previous excellent playbook that you know that works beautifully as a template. So I'm going to do a file save as and I'll go ahead and save this as our challenge.yml and we'll take note that that is in my documents folder. So we have a challenge.yml file and I'll name this play in the playbook as the challenge answers and notice we'll run this against the localhost as was required. We'll do our ping to test reachability as the first task and then we are going to use our find module because we need to list the details of those files. So we are going to use the module here called find and we know some parameters that we can use we are going to use the path parameter
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=94)** and that is going to be starting in our home folder and then it is going to go to the challenges directory and it is going to be finding the files there and there's one more parameter we're going to set and that is for the file_type and we are going to set that to simply file. There we go so there is the playbook that I'm hoping is going to succeed for the challenge. So we will save this playbook and now we will move over to the terminal and I am going to change directories to my documents location. So let me go back in the directory system and then I'm going to change directories into the documents where we are going to use the Ansible playbook syntax for our challenge.yml and remember we need to see the outputs so we're going to do a dash v so we see the details as this is executed and there we have it. We scroll back in order to see the results and we can see that we gathered facts against the localhost system, we then did a ping and that was successful and then we listed the two files that we created. Notice two files were examined and here is their details and we can see all kinds of great information about those files
>
> **[3:05](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=185)** including the full path and the name of that file. Now you might notice how this output is really clean and easy for me to read. That is a result of some configuration so if I go ahead and do a vim here on the Ansible config file you'll see that I have placed a config file where I am executing the playbook from and this config file does a yaml call back plug-in so I call the stdout_callback yaml plug-in and then I add this bin_ansible_callbacks equals true so this would execute as well when I am doing ad hoc commands. So these two commands that you see inside of the Ansible config make sure that that output is formatted nicely for me. This certainly would be considered extra credit for your playbook, you would not have to worry about this in order to successfully achieve the task that we described but I did want to kind of show you this as extra credit and indicate how you can control the output of your modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (4)
> **CLI Commands:** ansible (4), find (2), make (1)
> **File Paths:** challenge.yml (3), testone.txt (1), testtwo.txt (1)
> **Code Identifiers:** file_type (1), stdout_callback (1), bin_ansible_callbacks (1)
> **Tools:** terminal (1), vim (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)


### 5. What Can Ansible Do for You?

[↑ Back to Table of Contents](#table-of-contents)

#### [Ansible and remote management](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=0)** - [Instructor] Now as I'm sure you've noticed in order to easily test and practice with [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), you can execute things against your local host. But this is the control mode. This is the machine that is supposed to be controlling our remote systems oftentimes. So let's just make sure you remember exactly how remote management is achieved in Ansible. So remember, one of the great things is that Ansible calls upon the secure sure shell in order to access remote systems. Here I am on my control node and if I do a listing, I see that I'm in my home directory. And there's a mystuf folder that I've created. So let's do this: Let's list my home directory. But let's see any files that are marked to be hidden. And of course, that's done in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) with the period in front of the directory name in this case. So I'm going to change directories to the .ssh folder. And here if I do a list, we can see that there's an id_rsa.hub. If we take a look at this file. So let's go into that file and take a look. We can see that inside this file is our keying information for SSH security. So this is the public key information that we would use for SSH. You can simply copy this to the clipboard and then you can include this public key
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=94)** in the authorized keys area of your remote system as one way to configure your SSH. So let me go over to one of the systems that we have that we can control. And once again, I'll take a look at the settings, the files, the folders that are inside of this directory. And we'll change to the .ssh directory. And if I do my listing here, you can see there's your authorized keys. And if we look inside this file, we'll see how we can just paste in the keys that we would need for the SSH configuration. And this accommodates the use of SSH to manage these remote systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** ssh (7), ansible (3), make (1), node (1)
> **Env Vars:** ssh (5)
> **Code Identifiers:** id_rsa (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Ansible for orchestration](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=0)** - [Instructor] We certainly realize at this point that [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is simple and straight forward, but don't let that fool you. Ansible can really engage in complex orchestrations for us. What exactly is orchestration? I find that many people will get it confused with automation. I like to think of automation referring to a single task, so we can automate something like the rebooting of a server by using a script that will carry out that single task. But orchestration is going to refer to the management of many automated tasks. And oftentimes, this is made complicated because there's going to be this complex ordering and the ordering of the automated tasks are going to have dependencies. So, we should do something if something happens or maybe we shouldn't do something if something happens. And also, we could have complex order of operations that we want to carry out as part of the orchestration. Now, let's really have some fun experimenting with Ansible in a very simple way for orchestration. Here you can see a playbook I've created called, orchestrate.yammel and we have a play called, orchestration example and I am pulling the logic servers group out of my hosts file and I am running these tasks against one server at a time. So the serial colon one indicator online for here are going
>
> **[1:37](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=97)** to make sure that all of the tasks run against one of my logic servers before moving on to the next server. Under the tasks area, you can see we shut down the server, then upgrade the firmware, then start the server, then verify the server. And if we have multiple servers providing the business logic for our solution, then they're going to be taken down one at a time. Thanks to the serial execution mode here of one at a time, we make sure that these overall servers are still available to service our requests. Now, notice what I do with the tasks. I use the debug module and I print a simple message because we don't want to get bogged down right now with the actual modules that would do all this against our fictional servers, we're just really setting up a template right now for this activity. Notice something else we do. We use the inventory underscore host name variable in order to print the server that we are working with in the various messages. So, the next thing that we want to take a look at is the host's file that we'll be using for this orchestration example. So, if I go over and I do a VIM for the my host's file, you'll see that I have created a simple host file and included a logic servers group and I simulate four servers. They're all using local loop back addresses. And I indicate that the connection that should be made
>
> **[3:10](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=190)** is just a local connection for these different devices. So this is a great way to simulate four servers when you don't have any servers in all actuality there to work with. So, let me go ahead and escape from this. And we are now ready to use the Ansible playbook command to run the orchestrate.yammel playbook. And I'm going to use for an inventory that my hosts inventory that we took a look at. So, it is going to go in for each of these servers and simulate the tasks in this case. So if I scroll up to the very top, we can see it begins gathering facts from our server one system. It then, shuts down that server, upgrades that server, starts that server, verifies that server and then moves on to the next server in our list of servers. So a great example here of how orchestration could be carried out, thanks to the powerful Ansible playbook concept. And we also saw how we can set up nice templates that will run through the logic of what we want to accomplish and then of course, we can doctor up those playbooks with the actual modules that we'll be using. We also saw in this video how to simulate posts to execute commands against.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (5)
> **CLI Commands:** ansible (5), make (2), find (1)
> **Env Vars:** vim (1)
> **Tools:** vim (1)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Ansible for system configuration management](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=0)** - [Instructor] [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is used for [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) of systems so often that many network engineers, really think that's all it does. Let's quickly discuss and demonstrate the use of Ansible for configuration management. Now, it's important to understand that this product, remember was designed to be extremely minimal in nature, very simple, very easy to use, and very minimal. And really to prove that point, we remember that it is agentless. We don't have to go through the potential pain of installing sophisticated agent software on systems. Instead we'll access those remote systems using Secure Shell and we will ensure configurations are at some baseline. And an exciting thing about Ansible, is that it is state driven as we're about to demonstrate, it can examine the state of machines, and it can decide whether or not actions need to be taken. This makes Ansible something called idempotent and idempotent refers to the fact that we can safely execute actions with Ansible against systems, and not have a detrimental effect on those systems. And I think this is better demonstrated than it is talked about so let me do that right now. Here we are on our Ansible control node, and let me show you the playbook that we are going to be executing.
>
> **[1:33](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=93)** I'm going to go into my home folder, into the my stuff directory, and we're going to take a look at a playbook I composed for us called ntp.yml. Here is our playbook, we're going to run this against all our hosts, who are going to become the root, so we're going to make sure that we have root permissions here, and as you can see, we're going to ensure the NTP configuration. We begin by Ensuring NTP is installed we'll use the APT model, and we'll install if it's not there, the NTP service. That state of present ensures that NTP is present and if it is, this task will not do anything and that's a wonderful aspect of it. If it is not there, then it will be installed, and then we'll ensure that NTP is started, and that it will be starting automatically when this system boots. The big big point here is that, if the NTP is already there, that test step will do nothing and this is wonderful because the last thing we would ever want to do is be installing NTP over the top unnecessarily on the system. Let's go ahead and exit this, so we will quit without saving of course, and let's execute this playbook. I'm going to do our Ansible playbook command,
>
> **[3:08](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=188)** and we are going to execute the playbook that is in the my stuff directory, that is named ntp.yml. Here goes that playbook, we can see the facts are gathered of the systems, and then is NTP installed on those systems? No, it is not. And we can tell that because on the systems that we are managing, we can see there were changes made for that task and then we can see that the next task of ensuring NTP started now and a boot time, was successfully executed. There were two changes as a result of this playbook. So, let's do this, let's clear the screen, and then let's execute this playbook again. Now this time the ensure NTP is installed, simply gives us okay notification messages, and no changes are made. This configuration playbook that we have for these systems is something that we can execute in the future to ensure these systems meet the requirements of our organization for network time, protocol.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (7), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (2)
> **Env Vars:** ntp (10), apt (1)
> **CLI Commands:** ansible (7), node (1), make (1), apt (1)
> **File Paths:** ntp.yml (2)
> **Definitions:** refers to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [React to configuration changes with Ansible](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=0)** - [Instructor] Now, if you're like me, you've been really impressed with [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) so far but we need to make it even more flexible. We need Ansible to be able to [react](../../Skills/Web%20Development/React.js.md) to things like configuration changes. Think about it. We'll often be modifying scripts so that we can make configuration changes that are required but we need Ansible to use a feature called handlers so that it can be really flexible about handling these changes. Let me demonstrate with the playbook. So here we can see our playbook that's called React with Change Example. And we're running a serial-type fashion of execution across our [Web Servers](../../Skills/Web%20Development/Web%20Servers.md). Notice, we're just simulating this with debugs. We install Nginx, our web server and then upgrade it and then configure it and then verify it. If there is nothing for us to configure, well, then that's great but if we do make a configuration change with this task, we need to restart the Nginx server in that case. So notice what I'll do. On line 19 here, I will uncomment out this notify and the notify has the name restart nginx and what you do to enact a notify is you use a handler. So the handler will be named after the notify of restart nginx and it will only take effect when there's been a change with that task. Now, the debug will not initiate a change.
>
> **[1:37](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=97)** So we can go ahead and try executing this playbook right now and notice, we aren't using a change. We can then retry this playbook with the changed_when parameter set to true and that will imitate a change for us and it should call the handler in that case. So I have done this configuration with our notify and our handler and let's see if it works without calling the handler, in this case, of no change. So I'm going to execute my ansible-playbook named change.yml that we were just working with against my hosts inventory and we can see that there were no changes to any of these four servers and as a result, we see that there was never an execution of the handler that we configured in the playbook. But if we return to our playbook and we go to that line 20 and we uncomment that, now for that task, we're going to indicate that a change has been made. So now, the notify should trigger the handler and we would get a restart of Nginx for each of these servers. Well, let's save this playbook and let's give it a try. So I rerun my ansible-playbook and this time, there should be a change for each of the servers
>
> **[3:11](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=191)** when it comes to the configuration of Nginx. And we can see that is occurring and I can see that there's been a change on each of these servers and sure enough, we can see it. For each of the servers, there was the running of the handler that was executed and we had the handler initiate its change, in this case, just printing the message for us that the handler was called for a restart of the Nginx server and that occurred for all four of our servers. So notice, here you can see that the use of a notify and a handler for that notify gives us a lot of flexibility to do various tasks based on whether or not there has been a change with the task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (5), [React](../../Skills/Web%20Development/React.js.md) (2), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **CLI Commands:** nginx (7), ansible (5), make (3)
> **Prerequisites:** configure (2), install (1)
> **File Paths:** change.yml (1)
> **Code Identifiers:** changed_when (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Infrastructure management with Ansible](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=0)** - [Instructor] Another really exciting aspect of [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is the fact that it cannot only help you when it comes to the management of configurations, but it can literally build and manage your infrastructures. This has led to a real resurgence in the popularity of Ansible. You see, with cloud technologies, we can use Ansible playbooks to build our infrastructure from the ground up, and with dynamic inventories we can be notified of inventory manipulations dynamically and our inventory can reflect what is being done in the cloud. Playbooks can literally provision the underlying [Hardware](../../Topics/Hardware.md) for us that we're going to be utilizing inside of the cloud. And Ansible does such a great job with this because it really is primed to manage the virtualization on top of that physical infrastructure. So here you have Ansible making sure the physical components are in place that we need, and then automating the virtualization on top of those physical components. Finally, another thing that makes Ansible very well-suited for this task in the cloud-centric world we're in today is that as we know, it has wide range of support for operating systems. So in the cloud we love to use a variety of different operating systems to make our solution really flexible and [agile](../../Skills/DevOps/Agile%20Development.md), and Ansible is well-suited for that purpose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (7), [Hardware](../../Topics/Hardware.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **CLI Commands:** ansible (7), make (1)
> **Speakers:** - [instructor] (1)

#### [Repeating tasks across fleets with Ansible](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=0)** - [Instructor] When most people think of [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), they think about repeating tasks across fleets of systems. We might have thousands of systems that we want to be able to configure or make changes on and Ansible certainly shines at this. We know it can do so much more, but this is certainly one of the things it's built to do for us. We can't forget our ability to run ad hoc tasks. We don't need a playbook. We can just fire off tasks at systems. And I'll review that with you here through a demonstration. Something else that we can do is we can manipulate the execution strategy and we can even dictate how many systems will begin making the configuration changes at a time. This is called forks. And I'd like to demonstrate that as well for you. So remember to execute ad hoc tasks, we don't use the Ansible hyphen playbook command to call a playbook. Instead, we just use the Ansible executable. We'll indicate what hosts out of the host file that we want to execute the ad hoc command against. We'll specify some module and any necessary parameters. And then in my case, I'll specify a custom inventory file that we have. That's it, an ad hoc command is a very powerful thing. As you can see, I am executing the ping module across all of the hosts in the my hosts inventory. And that is just so simple and so powerful. But now let's talk about this concept of the strategy and the forks.
>
> **[1:33](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=93)** You'll notice in this playbook, we had set the serial execution, so we wanted everything to run on one host and then move to the next host. And we can definitely substitute here. We could say, no, we want to take one of the strategies that are available inside of Ansible. For instance, there is a free strategy which says, go ahead and try and get this done across all of the systems as quickly as possible. So, they're going to be running the playbooks all simultaneously trying to get through it, again, as quickly as possible. Now, the number of systems at a time that this will execute on is dictated by forks. And you can set up the number of forks for your Ansible in the Ansible.CFG to create a default number of forks or what you can do is you can specify the forks that you want inside of your playbook, calling syntax. Let me demonstrate. So I could say Ansible playbook and then reference my playbook. We have one called change and I can specify the number of forks. By default it's five, but if I want to do 30 systems at a time, I could change the fork value to 30. Once again, I'll specify my custom inventory. And this example is a little dubious because we only have four systems,
>
> **[3:07](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=187)** but you get the idea that fork syntax when calling the playbook would work just great. And if I had hundreds of machines, this would go after 30 of them at a time. As you would guess, there is an excellent section in the Ansible documentation on all of this. You can see the controlling playbook execution, strategies and more. So this document will give you a lot more information on the strategies, the forks and some great keywords that you can utilize to control execution inside of Ansible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (10)
> **CLI Commands:** ansible (10), make (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Prerequisites:** configure (1), set up (1)
> **File Paths:** ansible.cfg (1)
> **Env Vars:** cfg (1)
> **Analogies:** for instance (1)
> **Best Practices:** remember to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing on with Ansible](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=0)** - [Anthony Sequeira] Well, congratulations. You've completed our course and built a nice, strong foundation in [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md). But there's a lot more to learn about this exciting tool. So I would challenge you to visit the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library and take a look at some of the deeper dives that we have available for you regarding Ansible. Now, since Ansible is installed on a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) system, typically, and can manage very effectively your other Linux systems, maybe you'd like to boost your knowledge of Linux. Well, you'll be excited to learn that there are plenty of great Linux courses in the library as well. Well, my name is Anthony Sequeira, and I'm so glad that you chose to join me for our initial look at the remarkable tool that is Ansible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** ansible (4)
> **Speakers:** - [anthony (1)


## Skills Covered

- Ansible

## Path Context

### In [Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)
**1 of 6** | [Python Quick Start](Python%20Quick%20Start.md) →

## Part of

- [Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)

## Appears In

- [Network Automation Professional Certificate by Arista Networks](../../Paths/Database%20Management/Professional%20Certificates/Network%20Automation%20Professional%20Certificate%20by%20Arista%20Networks.md)

## Related Courses

_Courses sharing skills:_

- [Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible](../Network%20and%20System%20Administration/Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%203%20Managing%20Systems%20with%20Ansible.md) — Ansible
- [Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks](../Network%20and%20System%20Administration/Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%202%20Using%20Ansible%20Playbooks.md) — Ansible
- [Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible](../Network%20and%20System%20Administration/Red%20Hat%20Certified%20Engineer%20Ex294%20Cert%20Prep%201%20Foundations%20Of%20Ansible.md) — Ansible

---

[↑ Back to top](#)