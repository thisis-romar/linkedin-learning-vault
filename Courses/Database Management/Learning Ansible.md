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
  - Network Automation Professional Certificate by Arista Networks
path_count: 1
tags:
  - course
  - topic/database-management
  - topic/devops
  - topic/network-and-system-administration
  - skill/ansible
status: not-started
created: 2026-04-19
---

![Learning Ansible](https://media.licdn.com/dms/image/v2/C4E0DAQHSCgje1Y3Afg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1597935046264?e=2147483647&amp;v=beta&amp;t=N_kwR8ju6u_VUeO3SDsZfyWl3UZePVB4DfwsVMbmTcg)

# Learning Ansible

> Ansible is a popular open-source tool that provides automation, configuration management, and orchestration all in one. In this course, Anthony Sequeira introduces Ansible and explains the many reasons system administrators and DevOps engineers choose Ansible as part of their IT toolkit. Learn how to install Ansible in different environments and work with hosts, variables, code, and playbooks. Pra

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020) | Beginner | 7K learners
> [Jump to Path Context ↓](#path-context)

## Skills Covered

- Ansible

## Table of Contents

### Introduction

#### Starting your Ansible journey
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=0)** - [Anthony] Imagine if there was a tool that would work with any environment and allow you to automate tasks, build and maintain infrastructure, and manage the entire life cycle of our IT systems.
>
> **[0:14](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=14)** If this sounds like it's too good to be true, well I have some news for you, it isn't.
>
> **[0:20](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=20)** Ansible is growing in popularity, and for good reason.
>
> **[0:24](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=24)** It lets you manage not just one device at a time, but hundreds or even thousands of machines wherever they're located.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=32)** In this course, we're going to look at the basics from the history of Ansible to the parts that make it work, to the most popular use cases for this kind of tool.
>
> **[0:42](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=42)** Along the way, we'll have some hands-on demos with building an Ansible environment, so you can get up and running with your own deployments.
>
> **[0:51](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=51)** My name's Anthony Sequeira, I'm a Cisco-certified CCIE, and I've been working in information technology since 1996.
>
> **[1:01](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=61)** I've used Ansible for years to assist with server management and the construction and maintenance of robust solutions inside of the public cloud.
>
> **[1:11](https://www.linkedin.com/learning/learning-ansible-2020/starting-your-ansible-journey?u=76281980&t=71)** So join me in this LinkedIn Learning course, as we get past the hype and really see what this tool can do for us, and trust me, even though it looks pretty bare bones and simple, that's part of the design and its magic.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (4), make (1)
> **Code Keywords:** public (1)
> **Env Vars:** ccie (1)
> **Analogies:** imagine (1)
> **Speakers:** - [anthony] (1)


### 1. What Is Ansible?

#### An introduction to Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=0)** - [Instructor] If you work in or around information technology, chances are, you've heard about Ansible lately.
>
> **[0:07](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=7)** It seems to be the tool that everyone wants to use, and everyone is all excited about.
>
> **[0:13](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=13)** But why is that?
>
> **[0:14](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=14)** Well, Ansible is extremely simple, extremely easy to use and very flexible as we're going to find out in this course, but at its most simple, it's a task execution engine.
>
> **[0:29](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=29)** So we're going to have Ansible running on a variety of different systems potentially, but oftentimes we are running it on a Linux system and Ansible can reach out and execute tasks on the local system that you're on and on remote systems.
>
> **[0:47](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=47)** By the way, when you're running Ansible on a system, in order to control other systems, you tend to call that local system running Ansible, your control node.
>
> **[0:59](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=59)** So you might hear me say control node when I'm referring to the Ansible system itself.
>
> **[1:06](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=66)** In addition to this simplicity, there is a client lists architecture that Ansible uses.
>
> **[1:13](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=73)** This is also wonderful.
>
> **[1:15](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=75)** So when you want to control a bunch of systems using Ansible, you don't have to go to those remote systems and install client software.
>
> **[1:25](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=85)** Instead, Ansible will use the kind of ubiquitous secure shell SSH.
>
> **[1:31](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=91)** It will use SSH in order to make connections into those remote systems.
>
> **[1:37](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=97)** And it will do its configuration magic for you.
>
> **[1:41](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=101)** Of course it is upon you as the administrator to set up the SSH so that it functions properly between Ansible and those remote nodes.
>
> **[1:52](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=112)** Everything that we do in Ansible is going to be in very human readable text files.
>
> **[1:58](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=118)** So that really adds to the simplicity of utilizing Ansible.
>
> **[2:03](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=123)** And the Ansible itself is written in the very popular Python programming language and the playbooks that we are going to be running, which can really get sophisticated and allow you to do automation and orchestration of tasks.
>
> **[2:22](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=142)** Those are written in the standards based YAML, which is yet another markup language.
>
> **[2:27](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=147)** YAML is very easy to read, very easy to work with.
>
> **[2:32](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=152)** And that's yet another reason why Ansible is so celebrated.
>
> **[2:37](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=157)** Finally, keep in mind that you could have massive fleets of servers these days.
>
> **[2:43](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=163)** And Ansible is going to be a very effective way in which to really maintain and monitor and operate those massive fleets of systems.
>
> **[2:56](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=176)** If you have a large, large enterprise and you have many, many different Ansible servers, and you have many, many systems that you manage, you may want help with managing Ansible itself and a nice web based graphical user interface for doing that is called Red Hat Ansible Tower.
>
> **[3:17](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=197)** Now that is not a free product from Red Hat.
>
> **[3:20](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=200)** So if you're interested in open source software for the management of all of your Ansible systems in a graphical user interface, you would want to check out the AWX product offering.
>
> **[3:34](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=214)** So that's the open source version of Red Hat Ansible Tower, if you will.
>
> **[3:41](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=221)** So let's take a look at Ansible in action shall we?
>
> **[3:45](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=225)** Here you can see, I am logged in to a Linux server and this is my control node.
>
> **[3:51](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=231)** I have Ansible set up on this system.
>
> **[3:54](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=234)** So I'm going to run what's called an ad hoc command.
>
> **[3:58](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=238)** And we'll talk more about these in great depth later on, but for right now, I'm just going to say, I want Ansible.
>
> **[4:04](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=244)** So I call the Ansible executable.
>
> **[4:06](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=246)** I want Ansible to run here against a list of systems that I have called my servers.
>
> **[4:14](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=254)** So I say Ansible, my servers.
>
> **[4:16](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=256)** And then I'm going to use a module called ping.
>
> **[4:20](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=260)** The packet Internet Groper is very useful for reaching out and testing the availability of systems, and I've set this up so that it will test for the availability of my local host, the control node itself.
>
> **[4:35](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=275)** And it will be checking for our remote servers and I've got one remote server out there at this point that we are going to be working with.
>
> **[4:44](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=284)** So you can see how amazingly simple this is.
>
> **[4:46](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=286)** Ansible, my servers, and then I call the ping module.
>
> **[4:50](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=290)** We will see the results of this test, right at the command line.
>
> **[4:55](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=295)** You can see that I successfully was able to ping communicate with over TCP IP, the system at 10 zero one, one 84 and also the system at 10 zero one 79.
>
> **[5:09](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=309)** So we've got two systems that responded in my list of my servers and they're perfectly healthy and ready to communicate with us.
>
> **[5:20](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=320)** And by the way, while it was a very simple little demonstration of Ansible notice how useful this was.
>
> **[5:28](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=328)** You know, if you had dozens of servers to test for their reachability would be a real chore if you were manually inputting all of those different ping commands.
>
> **[5:40](https://www.linkedin.com/learning/learning-ansible-2020/an-introduction-to-ansible?u=76281980&t=340)** So even our little simple demonstration here does really depict just how powerful Ansible is going to be for us.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (30), node (4), ssh (3), find (1), make (1)
> **Env Vars:** ssh (3), yaml (2), awx (1), tcp (1)
> **Code Keywords:** interface (2), module (2), finally, (1), let (1)
> **Prerequisites:** set up (2), install (1)
> **Definitions:** is a  (1), is called (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)

#### Life before Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=0)** - [Illustrator] So that we can better understand just how important Ansible can be in our IT infrastructure, let's talk about a bit about what life was like before Ansible.
>
> **[0:11](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=11)** You see many years ago, the server administrators in a typical IT department were what we call siloed.
>
> **[0:19](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=19)** They were operating somewhat in a vacuum.
>
> **[0:22](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=22)** They were doing all their work based on requests from other teams in the IT department, but there was this real big separation between their day-to-day functions and the functions of different personnel in the IT department.
>
> **[0:38](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=38)** And something that was happening a lot was these server admins were needing to go to systems and manage them by hand, that's right, they would log into the operating system, maybe it was a Windows server operating system, and they would make configuration changes.
>
> **[0:57](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=57)** Then they would go into a Linux box and make configuration changes.
>
> **[1:02](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=62)** And so what quickly happened was server tools started being developed that could assist with this manual management of systems, but no, this would really be looked upon as it's still a manual configuration approach.
>
> **[1:20](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=80)** And in fact, as server tools got more sophisticated, what started happening was we'd have our server admins needing to be trained on each of these different tools for managing different servers under their control.
>
> **[1:35](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=95)** So virtualization then came along in great, great celebrated fashion, and this really started to drive the push for automation, especially considering that many virtual servers could very quickly be established, but then, Oh my goodness, the "by hand" management that would need to take place would be really exhausting on the server admin staff.
>
> **[2:05](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=125)** So thanks to tools like Ansible, today, we have this growth of DevOps where the server teams can work side by side and even right along the way with the development staff, and can very, very efficiently now provision architectures and applications for consumption by our users with an ease and a real transparency that has never been imagined before.
>
> **[2:37](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=157)** So this is certainly an exciting time.
>
> **[2:41](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=161)** And just to prove how simple Ansible can make this, here's a sample playbook.
>
> **[2:48](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=168)** Now, you'll note that this playbook is in YAML.
>
> **[2:52](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=172)** So we see the YML extension there to indicate YAML.
>
> **[2:57](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=177)** And this simple YAML playbook notice is going to run some common code against all of the devices that Ansible is managing.
>
> **[3:09](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=189)** And then this playbook will go to the database servers that we've defined and run some code to get the database servers set up.
>
> **[3:18](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=198)** And then the same with the web servers.
>
> **[3:21](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=201)** Notice we have code that will run that will set up the base Apache and then give the exact web parameters that are needed, and then the load balancers.
>
> **[3:31](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=211)** And then the monitoring tool is going to be installed across these devices.
>
> **[3:36](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=216)** So you can see with this simple, very easily read YAML playbook for Ansible, we can create the entire infrastructure that is going to be hosting some new mission critical app of our enterprise.
>
> **[3:55](https://www.linkedin.com/learning/learning-ansible-2020/life-before-ansible?u=76281980&t=235)** Now, don't worry about the details of this YAML playbook, we'll be teaching you all of this as we move throughout this course.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (6), make (3), apache (1)
> **Env Vars:** yaml (5), yml (1)
> **Code Keywords:** let (1), this, (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** set up (2)
> **Warnings:** note that (1)
> **Speakers:** - [illustrator] (1)

#### Ansible and Red Hat
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=0)** - Now one of the very exciting things about Ansible that you may have heard is that it's free.
>
> **[0:06](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=6)** It's open source software that is free but then you may be a bit confused if you've heard that Ansible was purchased by Red Hat.
>
> **[0:16](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=16)** Well, all of that is true and let's explain as we look at the history of Ansible.
>
> **[0:24](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=24)** So the year was 2012 and Michael DeHaan released Ansible to the world and this approach that Michael took was very very interesting because what he saw was that himself and many people like him were creating scripts that would automate the infrastructure and the servers and the IT stuff all around them.
>
> **[0:51](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=51)** So Michael wanted to take an approach to systems management and configuration management and even infrastructure creation through DevOps that would be script friendly and they could even leverage existing scripts that had already been written.
>
> **[1:09](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=69)** So Ansible was created to do this and sure enough in 2015 Red Hat purchased Ansible Inc.
>
> **[1:20](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=80)** Ansible Inc. was formed by Michael and his peers and the Red Hat acquisition in 2015 was interesting because Ansible itself and all of the great resources that we can acquire through GitHub and additional sites that I'll share with you for components that function with Ansible all of that was kept open source and free but Red Hat was able to wrap some paid services and software around it specifically Ansible Consulting and Ansible Tower are two paid services.
>
> **[1:57](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=117)** Ansible Consulting, of course, being the assistance with Ansible implementations on an enterprise scale and Ansible Tower being the graphical user interface software for managing massive Ansible deployments inside of a huge enterprise.
>
> **[2:14](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=134)** So Red Hat was able to have these paid services around the free product and if you don't think Ansible is popular we'll just go check it out GitHub where it is the number one acclaimed product of all of the different management products that are available through GitHub so it really has had amazing traction.
>
> **[2:41](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=161)** So here we are at the [redhat.com](https://redhat.com) website and if you go under products you'll see under the automation and management area sure enough there's the Red Hat Ansible automation platform and this is a very valuable place for you to visit especially if you consider that right here is a learn option and there's going to be some great complementary videos and complementary technical guides that you can access to learn more regarding Ansible.
>
> **[3:15](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=195)** Now it is linked inside the Red Hat website but I will say that it's just easier to Google search for the Ansible documentation so if you do a Google search for Ansible documentation you'll get here to the official Ansible documentation on the web and we'll be utilizing this quite a bit as you might imagine as we move throughout this course.
>
> **[3:41](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=221)** Notice you can choose your version of Ansible but it is going to default to the latest greatest version.
>
> **[3:48](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=228)** You can search the documentation or just enjoy this chapter listing which will take you to specific sections of interest like working with playbooks so the Ansible documentation extremely powerful and it's often easiest just to navigate to it directly even though as I stated it is going to be linked to buried there in the [redhat.com](https://redhat.com) website.
>
> **[4:13](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-red-hat?u=76281980&t=253)** So that's a bit of the history on Ansible and I hope it clears things up for you as far as this open-source product being officially own by Red Hat themselves.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (24)
> **Code Keywords:** let (1), function (1), interface (1)
> **Tools:** github (3)
> **URLs:** [redhat.com](https://redhat.com) (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** imagine (1)


### 2. Why Choose Ansible?

#### Ansible ease of use
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=0)** - [Instructor] It can be pretty hard to believe that something so incredibly powerful, like Ansible could be so easy to use, but I think we have to remember the original goals of Ansible and they were to be clear, to be fast, to be complete, to be efficient and to be secure.
>
> **[0:23](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=23)** So the initial goals of the product really help to drive this ease of use and the simplicity.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=32)** Now another goal of Ansible was that we could go up to someone using Ansible, and we could say things like, show me the playbook that you're using.
>
> **[0:44](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=44)** And we could read that, it would be human readable.
>
> **[0:48](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=48)** And we might say, show me your inventory file.
>
> **[0:51](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=51)** And it's very easy to read.
>
> **[0:54](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=54)** We can just look at what someone is doing with the product, and we can immediately understand what they are trying to accomplish.
>
> **[1:03](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=63)** Now, one of the amazing things about Ansible to me is that even though it is so simple, even though it is so straightforward, it can be utilized in large environments.
>
> **[1:18](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=78)** In fact, one could argue that if you had a massive enterprise, you could call upon something like Red Hat Tower to manage the overall Ansible deployments you've got throughout the enterprise, and really this product could scale to the very largest of enterprises.
>
> **[1:38](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=98)** Now really attributing to this ease of use concept is the fact that Ansible is going to leverage modules in its operation.
>
> **[1:50](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=110)** And we'll take a close look at these, but they really give Ansible their straightforward functionality to do different things.
>
> **[1:58](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=118)** For example, if we want to quickly test for the reachability of some node on the network, we can call upon the ping module.
>
> **[2:07](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=127)** If we want to write information to a file, there's going to be a module for that.
>
> **[2:13](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=133)** And this lends itself to the extensibility of Ansible, where it can just continue to evolve as technologies change.
>
> **[2:23](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=143)** And speaking of extending Ansible's functionality, there's plugins for Ansible.
>
> **[2:30](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=150)** So Ansible is going to have its own versioning where new features and efficiencies are added, but there's plugins that we can add to give additional functionality.
>
> **[2:42](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=162)** A great example of this is when we want to have our inventory, the listing of hosts that we're going to be managing updated dynamically from something like AWS, a plugin gives us that functionality.
>
> **[2:59](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=179)** And speaking of inventories, we have these simple inventories that we use to list the devices that we're going to be managing.
>
> **[3:08](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=188)** And these inventories we can statically create, but thanks to plugins, we can have them dynamically generated as I described, so inventories and their simplicity is a great example of just how the overall approach to Ansible was so straightforward.
>
> **[3:29](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=209)** Now to prove this to you, here is an inventory file.
>
> **[3:34](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=214)** And notice the file by default is named hosts.
>
> **[3:39](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=219)** And you can see that I have in brackets here, web servers, and then I've got two fully qualified domain names that I'm pretending are my web servers.
>
> **[3:50](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=230)** You can put in an IP address.
>
> **[3:52](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=232)** If you don't have the fully qualified domain name for the resource, notice you can use regular expression type syntax in order to give a range of matching.
>
> **[4:03](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=243)** And here you can see, I have the DB servers, the database servers, and I've got a couple of sample entries here.
>
> **[4:10](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=250)** So this just really gives us a sense for how incredibly easy this product is going to be to work with.
>
> **[4:17](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=257)** There's the devices that we can control in two different categories.
>
> **[4:22](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=262)** And of course, we can call these by this simple name when we are in a playbook and we want to enact some behaviors against those devices, couldn't be any easier.
>
> **[4:37](https://www.linkedin.com/learning/learning-ansible-2020/ansible-ease-of-use?u=76281980&t=277)** This is a good old text file that is so easy to read and understand, and yet it is critical to the functionality of Ansible.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (14), node (1), aws (1)
> **Code Keywords:** module (2), continue (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** aws (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Advantages to using Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=0)** - [Narrator] Earlier in this course, I made the statement that Ansible was the most celebrated management tool in all of GitHub.
>
> **[0:08](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=8)** And this is true, but why is it so, I mean, we know it's easy to use, and that's probably going to help out.
>
> **[0:16](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=16)** But there are other advantages that we need to present.
>
> **[0:20](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=20)** In fact, it's not only easy to use, but as you're going to experience in this course, it's easy to learn.
>
> **[0:28](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=28)** So with a short small learning curve, that really, really helps the adoption of Ansible.
>
> **[0:36](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=36)** And Ansible itself is composed in Python and this makes the Ansible product very Python friendly.
>
> **[0:47](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=47)** Python, in case you haven't noticed, is quickly becoming the most called upon programming language in the world.
>
> **[0:55](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=55)** And it'll be interesting to see how long that is the case since these things kind of ebb and flow.
>
> **[1:01](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=61)** But right now Python is king and the fact that Ansible is written in Python is a huge advantage.
>
> **[1:10](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=70)** But I would have to say one of the biggest overall advantages is the fact that Ansible is Agentless.
>
> **[1:18](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=78)** This is hugely important for us, because it can be very tricky to install an agent on all of these different nodes that we propose managing with some management tool.
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=94)** In fact, it can be oftentimes brutally difficult, especially when we have systems that are really locked down and that don't install software with ease.
>
> **[1:48](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=108)** Some more advantages include the fact that when we write critical components like playbooks, they're in that simple YAML format, and also we love the fact that Ansible is so used around the world, because there is folks that are contributing to what Ansible can do for you all the time.
>
> **[2:14](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=134)** This is represented in the very popular website called Ansible Galaxy, where contributors all over the world can upload what are called Roles that will help us become successful with Ansible no matter what it is we're trying to achieve.
>
> **[2:35](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=155)** Here we are at the Ansible Galaxy website and you can see right on the main page, we can go in and choose a category that we might be interested in.
>
> **[2:45](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=165)** And it seems like every time I come in here, I see something cool.
>
> **[2:51](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=171)** So in the networking category, here is an Ansible module for GNS3 and this module allows you to automate the GNS3 tool, which is a router simulator.
>
> **[3:06](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=186)** So if you're interested in simulating network routing, you could use GNS3 and if you're interested in automating that now we have a module for GNS3.
>
> **[3:18](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=198)** Thanks to the contribution of some wonderful user out there that is helping the world one module at a time.
>
> **[3:27](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=207)** So there's modules that are uploaded here there is roles.
>
> **[3:33](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=213)** And while we're here, let me just quickly explain to you what a role is.
>
> **[3:39](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=219)** A role is a downloadable component that you install in your Ansible system and it's got all of the ingredients that would be needed in order to do either simple or even sophisticated automation and orchestrations.
>
> **[3:59](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=239)** So, a role is a way to package everything up that you would need and distribute it and then plug it right in to Ansible.
>
> **[4:07](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=247)** Now I said plugin there, and we shouldn't confuse Ansible roles with plugins that we mentioned earlier.
>
> **[4:15](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=255)** So just keep those two distinct in your mind they are separate things.
>
> **[4:20](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=260)** A plugin extends the functionality of what Ansible can do, where as a role is going to be something that was developed by the community out there typically, and it's for just executing within the Ansible environment, things that you want to do to your nodes.
>
> **[4:40](https://www.linkedin.com/learning/learning-ansible-2020/advantages-to-using-ansible?u=76281980&t=280)** So subtle differences there but important differences.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (17), python (5)
> **Code Keywords:** module (4), let (1), extends (1)
> **Env Vars:** gns3 (4), yaml (1)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** install (3)
> **Cross-References:** earlier in (1), we mentioned (1)
> **Tools:** github (1)
> **Speakers:** - [narrator] (1)


### 3. Getting Started with Ansible

#### The parts that make up Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=0)** - [Instructor] Well, it's time for you and I to examine the components that make up Ansible.
>
> **[0:07](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=7)** We said the Ansible is very simple, and I'm really going to prove that to you right now.
>
> **[0:12](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=12)** So here I am on the Ansible control node.
>
> **[0:16](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=16)** This is the system that has Ansible installed on it, and that will be managing other systems.
>
> **[0:23](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=23)** So the first thing we know that must exist on this device is an inventory, that list of devices that we're going to be controlling.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=32)** So I'm going to do a change directory.
>
> **[0:35](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=35)** And I'm going to go to the Etsy forward slash Ansible directory on this system.
>
> **[0:41](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=41)** And if we do a list right there, there is the hosts file.
>
> **[0:47](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=47)** So the hosts file is by default in the Etsy Ansible directory, and it's going to have the inventory inside it.
>
> **[0:56](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=56)** Those devices that we can manage.
>
> **[0:58](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=58)** Notice there is a directory here called roles.
>
> **[1:02](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=62)** And that's where we can install those wonderful roles that will have everything we need, all the ingredients for doing amazing management of systems.
>
> **[1:12](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=72)** And then notice there's the Ansible dot CFG.
>
> **[1:15](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=75)** This is a very important file.
>
> **[1:18](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=78)** So I'm going to go into the editor, I'm going to do a vim and Ansible, if I can spell that right, Ansible dot CFG.
>
> **[1:27](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=87)** And that is misspelled (giggling) so let's try that again.
>
> **[1:33](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=93)** I'm going to exit, and I'm going to try vim, and let's have auto complete help me out, there we go.
>
> **[1:40](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=100)** So notice, I did not assume the root directory permissions there.
>
> **[1:46](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=106)** So I'm in read only mode inside this Ansible dot CFG, and that's exactly what I wanted to do, because I don't want to actually make any changes in here.
>
> **[1:55](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=115)** But notice how you can come in here and you can uncomment any of these lines and modify the default behaviors.
>
> **[2:03](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=123)** So if you wanted to have Ansible, look for your inventory in a different location from the Etsy Ansible host location, well, then you could uncomment that line out, and you could give a new location for it to look for your inventory by default.
>
> **[2:21](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=141)** So this file is obviously very critical.
>
> **[2:25](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=145)** So I'm going to get out of here, I'll quit and escape out of that file.
>
> **[2:30](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=150)** And now we're ready to take a look at the next major component that makes Ansible function.
>
> **[2:38](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=158)** And that is a playbook.
>
> **[2:41](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=161)** So I'm going to go back into my home directory, and then I have a mystuff folder that I've created in my home directory.
>
> **[2:50](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=170)** And if I do a listing, there's a YAML file and it's called sample dot YAML and that is a sample playbook.
>
> **[3:00](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=180)** So let's take a look at that.
>
> **[3:01](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=181)** Once again, I'll just do it in the read only mode.
>
> **[3:05](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=185)** So I'll go vim sample dot YAML, and we'll take a look.
>
> **[3:10](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=190)** So this is a playbook.
>
> **[3:12](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=192)** The name of the playbook is sample playbook.
>
> **[3:17](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=197)** And I suppose I should back up, notice the three dashes that occur right at the top of the file.
>
> **[3:23](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=203)** That's to indicate YAML is the syntax that we're using.
>
> **[3:27](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=207)** So we have a play inside the playbook called sample playbook.
>
> **[3:32](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=212)** And this play is going to be executed against all the hosts.
>
> **[3:37](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=217)** And we are going to assume the root permissions.
>
> **[3:41](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=221)** So we are going to become a user of a root, and then we have two tasks inside of this play.
>
> **[3:49](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=229)** And one is to ensure Apache is at the latest version, and then the next is to ensure Apache is running.
>
> **[3:58](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=238)** So isn't this clever and notice how human readable this playbook is.
>
> **[4:04](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=244)** Now, we also want to know, right down here that notice we are calling upon a module.
>
> **[4:13](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=253)** And the module that we are calling upon here is the yum module.
>
> **[4:18](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=258)** And then you can see we're calling upon the service module right down here.
>
> **[4:23](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=263)** So these modules, we said, are a critical component of Ansible.
>
> **[4:28](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=268)** They are the kind of magic that make these playbooks function.
>
> **[4:33](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=273)** And yeah, we can see two examples of modules right there that are being called inside of this playbook.
>
> **[4:40](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=280)** So I'm going to get out of here, and we are going to execute that playbook as you might guess.
>
> **[4:50](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=290)** So to do this, I'm going to type Ansible dash playbook, and then I'll simply say, run that sample dot YAML playbook, and Ansible goes to work running that playbook against all of the hosts in the inventory.
>
> **[5:09](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=309)** So we had the first host at 10 zero one 184.
>
> **[5:15](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=315)** And then we had this host, Ubuntu at 10 zero one 79.
>
> **[5:21](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=321)** And you can see that the red indicates an error condition and the green indicates everything was fine.
>
> **[5:29](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=329)** So it does appear that we are having an issue with the 10 zero one 79 machine, ensuring Apaches at the latest version, and you can get details right here that the installation is failing.
>
> **[5:44](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=344)** So I'm thinking that our packages that are on that system are not updated, and we could go and troubleshoot that now.
>
> **[5:54](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=354)** Notice at the end of the display here we get a nice summary of look on 10 zero one 184, everything checked out, everything executed just fine.
>
> **[6:05](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=365)** On the Ubuntu system, we had one thing checked out and one fail.
>
> **[6:10](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=370)** And clearly what had happened was the failure of ensuring Apache is at the latest version.
>
> **[6:18](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=378)** So the playbook is a very, very powerful structure.
>
> **[6:22](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=382)** It's calling those modules to get work done.
>
> **[6:26](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=386)** Now, don't forget that you can do what are called ad hoc Ansible commands anytime you like.
>
> **[6:33](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=393)** So here you can see I'm issuing the Ansible command.
>
> **[6:36](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=396)** And then I can say that there's a group of systems called myservers in my inventory file, and I'd like to just quickly run the ping module and ping them.
>
> **[6:46](https://www.linkedin.com/learning/learning-ansible-2020/the-parts-that-make-up-ansible?u=76281980&t=406)** So notice at any point, you can fire off one of these ad hoc commands against any systems that you desire.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (18), make (3), apache (3), node (1), yum (1)
> **Code Keywords:** module (5), let (3), function (2), default. (1), this, (1)
> **Env Vars:** yaml (5), cfg (3)
> **Definitions:** is a  (6), is an  (1)
> **Tools:** vim (3)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Warnings:** troubleshoot (1)

#### Installing Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=0)** - [Instructor] It probably won't surprise you to learn that installing Ansible is very, very simple.
>
> **[0:05](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=5)** What you'll want to do is consult the Ansible documentation.
>
> **[0:09](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=9)** Notice when you go to the documentation, there's an installation guide and you'll want to follow the installation guidance for the operating system where you're doing the installation.
>
> **[0:19](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=19)** Let me demonstrate the installation of Ansible.
>
> **[0:22](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=22)** And I am doing this on a Mac.
>
> **[0:24](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=24)** Now you might think the Mac, isn't a great place to run Ansible from, but it works just fine.
>
> **[0:30](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=30)** And while this might not be a frequent platform that you use in production, it can be very, very powerful to run Ansible from the Mac when you're just experimenting and learning Ansible.
>
> **[0:42](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=42)** Notice that the Mac does not have a package management system to run from the terminal so you can install Homebrew.
>
> **[0:51](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=51)** As a matter of fact, if you visit the Homebrew webpage, you'll see that it is very easy to install Homebrew on the Mac by just copying and pasting this command.
>
> **[1:02](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=62)** Having the Homebrew on your Mac will make it easy to do things like the installation of Python 3 By default, on a Mac, if you do a Python tack tack version command, you'll find that it's running something like 2.7.16 You'd want to leave this Python in place, even though it's kind of legacy and old because the Mac relies on it.
>
> **[1:27](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=87)** But you want Python 3 certainly for your Ansible utilization at this point.
>
> **[1:34](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=94)** And if we do a Python 3 tack tack version, you can see that I've got the latest Python and this is great.
>
> **[1:42](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=102)** Should you not have Python You can use brew once it's installed to install, or in my case, I'll demonstrate the reinstallation of Python 3.
>
> **[1:54](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=114)** So you would do brew install Python 3 to ensure you have the latest Python, which is a requirement for running Ansible.
>
> **[2:03](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=123)** You can see that my reinstallation went smoothly and I am ready now to do the installation of Ansible and how you can do that is using pip3.
>
> **[2:15](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=135)** And you may have just installed pip3 when you did your Python 3 installation.
>
> **[2:21](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=141)** So I'll run sudo pip3, and I'll say install Ansible.
>
> **[2:28](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=148)** And it will ask me for my password, of course, thanks to the sudo command.
>
> **[2:33](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=153)** And you need to type that incorrectly.
>
> **[2:35](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=155)** And once you do, you will initiate the installation of Ansible.
>
> **[2:40](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=160)** And you can see that mine went very quickly because it's already installed and it's in fine shape.
>
> **[2:45](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=165)** To prove this, We will do Ansible tack tack version, and you will see that on this map, I have the 2.9.9 version of Ansible installed.
>
> **[2:55](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=175)** And you can see that I'm using the Python version of 3.7.7 One interesting thing to note here too is that the Ansible is installed in the user local bin Ansible location, and that the Mac installation doesn't set up a configuration file.
>
> **[3:13](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=193)** So if you would like you can put a configuration file on this level location.
>
> **[3:18](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=198)** You could also put the configuration file somewhere else and reference it's location when you initiate a playbook.
>
> **[3:25](https://www.linkedin.com/learning/learning-ansible-2020/installing-ansible?u=76281980&t=205)** So its great that you have several convenient options for referencing a configuration file for any nonstandard configurations that you would like with Ansible's execution.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (16), python (12), pip3 (3), brew (2), sudo (2)
> **Versions:** python 3 (6), 2.7.16 (1), 2.9.9 (1), 3.7.7 (1)
> **Prerequisites:** install (5), set up (1)
> **Code Keywords:** let (1), from, (1), default, (1), case, (1), this, (1)
> **Documentation:** the documentation (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Challenge: Install Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=0)** - [Instructor] Well, are you ready for a challenge in this Ansible course?
>
> **[0:04](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=4)** Let's have you perform an installation of Ansible.
>
> **[0:08](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=8)** Now you have a lot of options here from an operating system perspective, so go ahead and perform the Ansible installation on the platform of your choice.
>
> **[0:18](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=18)** Let's make sure, of course, that it's one of the supported platforms, and consult the Ansible documentation for the exact step by step installation process for your supported platform.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=32)** Now, when the installation completes, I want you to verify that Ansible installation, and I want you to do this using two techniques.
>
> **[0:43](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=43)** First, verify the version of Ansible that is installed.
>
> **[0:48](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=48)** Remember, you can do that with the Ansible and then dash dash version, and then use Ansible to perform a ping test against your local host.
>
> **[1:00](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=60)** Remember, that was simply Ansible, localhost dash M, and then ping.
>
> **[1:07](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=67)** So go ahead and do this installation, do it slowly, carefully, following the documentation, and then be sure to do these verification steps.
>
> **[1:19](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=79)** This can vary in the amount of time that it's going to take you, but I wouldn't think it would take anyone longer than 40 minutes.
>
> **[1:27](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=87)** So some of you will be done in just moments, because maybe it's an installation that you've done many times before, or maybe there's very little dependencies that need to be installed on your system.
>
> **[1:39](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=99)** Maybe Python 3 is already in place and ready to go.
>
> **[1:42](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=102)** So there's definitely some variation here, but yeah, it really shouldn't take you longer than that 40 minutes.
>
> **[1:49](https://www.linkedin.com/learning/learning-ansible-2020/challenge-install-ansible?u=76281980&t=109)** Have fun and good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (9), make (1), python (1)
> **Code Keywords:** let (2)
> **Versions:** python 3 (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### Solution: Install Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=0)** - [Instructor] Well, how did you do with that challenge of installing Ansible?
>
> **[0:05](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=5)** I'm going to walk through a solution right now.
>
> **[0:07](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=7)** And since I have already demonstrated the installation of Ansible on a Mac, I decided to choose a different operating system to show this solution.
>
> **[0:16](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=16)** And I'll go ahead and demonstrate the installation of Ansible on Ubuntu, one of the most popular Linux variants.
>
> **[0:26](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=26)** Now notice I've gone to the Ansible Documentation, and I've pulled up the documentation on installing Ansible on Ubuntu, and we can see these key commands right here, that can do this installation.
>
> **[0:40](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=40)** And I'm going to walk you through those commands, but sure enough, we will be in a situation where we're using that older Python.
>
> **[0:48](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=48)** So, I'll show just how easy it would be to fix that up.
>
> **[0:52](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=52)** But this will certainly work, and it is certainly not the end of the world, if you're using the 2.x version of Python behind your Ansible.
>
> **[1:02](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=62)** So, let me go to my terminal, and you will see that I am at my Ubuntu system, and we are going to use the package management tool, and we're going to begin by updating that.
>
> **[1:15](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=75)** So, we run the Sudo App update, and this again was right out of the documentation.
>
> **[1:23](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=83)** Then what we're going to do, is our sudo apt, and we are going to install.
>
> **[1:30](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=90)** And what we want is the software-properties-common.
>
> **[1:37](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=97)** So, we do this installation.
>
> **[1:39](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=99)** Notice we are prompted.
>
> **[1:40](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=100)** We have to indicate that, yes, we do want this to transpire.
>
> **[1:44](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=104)** Then we are going to do our C, our sudo apt, and we are going to add the repository, and we are going to do dash, dash yes, and finally dash, dash update.
>
> **[2:03](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=123)** And we are looking at, the personal package archive for Ansible.
>
> **[2:11](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=131)** So, it's ansible/ansible.
>
> **[2:15](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=135)** And this should take just a moment.
>
> **[2:18](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=138)** And then when that is complete, we are ready to do the install of Ansible.
>
> **[2:24](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=144)** So, I'll do my sudo apt install ansible, and it helps to spell it right.
>
> **[2:33](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=153)** Notice you'll get excellent documentation there on an error.
>
> **[2:37](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=157)** I'm going to say, yes I do want this installation to proceed.
>
> **[2:41](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=161)** So, as you're watching this installation, and you're looking for errors, we can see all those references to the 2.7 version of Python.
>
> **[2:52](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=172)** So, that's one of your clues that, oh, okay, this is working successfully, but it is relying on the older Python, that is installed in this Ubuntu.
>
> **[3:04](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=184)** And what's interesting about that by the way, is, yes, the Python, that was in place on this machine, was the 2.7.17, but notice there is Python three in place.
>
> **[3:21](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=201)** It's just not being used, by the way we did the Ansible installation there.
>
> **[3:27](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=207)** We could modify the configuration file for Ansible to point to Python three.
>
> **[3:34](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=214)** But I did want to show this, watch this.
>
> **[3:37](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=217)** If we do a sudo apt, and we install the python3-pip, we can and go ahead and do the installation of Python right away.
>
> **[3:53](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=233)** Right from the initial installation, we can do it to use the Python three.
>
> **[4:00](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=240)** And that's what I'm going to do right now.
>
> **[4:02](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=242)** This will install it over the top and fix everything, and this is a powerful way where you might want to initiate, the installation from this straight away.
>
> **[4:12](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=252)** So, just keep in mind when you're in the Ansible documentation, that many times the installation instructions, may be having you utilize, that older version of Python as we saw.
>
> **[4:27](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=267)** So, it looks like this is finishing up.
>
> **[4:29](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=269)** That's great with no errors.
>
> **[4:31](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=271)** So now, we can do our pip3 install ansible, and look at this.
>
> **[4:40](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=280)** This is going to do the Ansible installation, using the package management inside of Python, specifically version three.
>
> **[4:51](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=291)** And I like this demonstration too for you, because it is showing, how I'm doing this, right over the top of the previous installation.
>
> **[5:00](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=300)** Look at that.
>
> **[5:01](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=301)** So, it successfully installed the Ansible 2.9.9.
>
> **[5:08](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=308)** And now we can go ahead, and do our verification.
>
> **[5:13](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=313)** So, I'm going to do ansible --version, and we can see, that it is at the 2.9.9, and that's great.
>
> **[5:24](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=324)** And then we have our Python version, that is in use of 3.6.9.
>
> **[5:30](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=330)** And we definitely would want to go ahead and initiate an Ansible ad hoc command for further testing.
>
> **[5:38](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=338)** We indicated we wanted to do that against the local host system, and we're going to use that ping module.
>
> **[5:47](https://www.linkedin.com/learning/learning-ansible-2020/solution-install-ansible?u=76281980&t=347)** So there we can see, Ansible functioning just beautifully, following our installation.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (20), python (12), sudo (5), apt (4), python3 (1)
> **Code Keywords:** this, (2), this. (2), let (1), module (1)
> **Prerequisites:** install (6)
> **Versions:** 2.9.9 (2), 2.7 (1), 2.7.17 (1), 3.6.9 (1)
> **Documentation:** the documentation (2)
> **Cross-References:** as we saw (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)


### 4. Working with Ansible

#### Working with hosts and variables in Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=0)** - [Instructor] Now that we understand that there is an inventory file that defines the hosts that we're going to be managing with Ansible, let's take a closer look at this.
>
> **[0:10](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=10)** And in fact, let's add the important concept of variables.
>
> **[0:15](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=15)** We can use these variables in many places with Ansible, but one of the important places we can use them is in the inventory file for our hosts.
>
> **[0:26](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=26)** So here you can see I have a sample Ansible inventory file for us.
>
> **[0:31](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=31)** And notice on line one, we have the word Southeast in square brackets.
>
> **[0:36](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=36)** This indicates a group inside of the inventory file.
>
> **[0:41](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=41)** And this group is going to allow us to reference hosts just by using the group name.
>
> **[0:48](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=48)** So, if we wanted to initiate something against the Southeast hosts, that would include local host, and other1.[example.com](https://example.com).
>
> **[0:59](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=59)** Notice that to the right of these host entries, we have some variables and the variable values.
>
> **[1:09](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=69)** So notice for the local host, I set the Ansible underscore connection variable to local, and then for other1.[example.com](https://example.com), I set this variable to SSH.
>
> **[1:22](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=82)** So, here we're able to make sure that for the local host, that we do not use SSH we just access that system locally, and then for our other1.[example.com](https://example.com), we will use the SSH functionality in order to access that remote host.
>
> **[1:40](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=100)** Notice we also specify an Ansible user, and that is the ubuntu account on that remote system.
>
> **[1:47](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=107)** So, notice how variables are really going to give us great flexibility.
>
> **[1:52](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=112)** And as I stated, it's not just in the inventory file that we can call upon variables, we can use use them inside of our playbooks, and in many other locations inside of Ansible.
>
> **[2:05](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=125)** Notice we then have the Northeast group.
>
> **[2:09](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=129)** There's other2.[example.com](https://example.com) in this group, as well as the machine at 10.10.100.10.
>
> **[2:16](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=136)** Notice how we can use IP addresses or fully qualified domain names interchangeably within the inventory file.
>
> **[2:25](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=145)** Then we have the Southeast group that just has the one member.
>
> **[2:29](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=149)** Then notice on line 12, we do something interesting.
>
> **[2:33](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=153)** We create a sub-grouping, and I call this East, and notice the keyword children to indicate that this is going to consist of groupings of our other groups.
>
> **[2:46](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=166)** So we have the Southeast group that is referenced here, and the Northeast group that is referenced here.
>
> **[2:53](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=173)** So now we have an easy way to enact changes or configuration monitoring, or whatever we might be doing with Ansible, against all the systems that are in the Southeast and the Northeast by just using the group name East when we reference this in our Ansible command syntax.
>
> **[3:13](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=193)** Now, you might look at this and be tempted to create a grouping called all, and to include everyone, but you don't need to do that with Ansible because there is already a default grouping that's created for you automatically, and this is so that you can reference every single node that is in the inventory file.
>
> **[3:36](https://www.linkedin.com/learning/learning-ansible-2020/working-with-hosts-and-variables-in-ansible?u=76281980&t=216)** So no need for you to go and create that all grouping manually, as it already exists.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (9), ssh (3), make (1), node (1)
> **URLs:** [example.com](https://example.com) (4)
> **Code Keywords:** let (2), this. (1)
> **Env Vars:** ssh (3)
> **Versions:** 10.10.100 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Working with code in Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=0)** - [Instructor] Well, now that we've taken a deeper look at the inventory file and the hosts inside it and our ability to use variables, let's talk about how we can get things done.
>
> **[0:11](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=11)** And this is, of course, using code.
>
> **[0:14](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=14)** But it's code that's been constructed for us in the form of modules.
>
> **[0:19](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=19)** So let's take a deeper look at modules in this lesson.
>
> **[0:24](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=24)** So you will definitely want to visit the Ansible documentation as you begin to work with modules.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=32)** And you can go ahead and search the documentation for the module index.
>
> **[0:37](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=37)** This is listing all of the modules that come pre cooked inside of Ansible.
>
> **[0:45](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=45)** So these are the modules that are shipping with the version of Ansible, that of course we have selected in the documentation.
>
> **[0:53](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=53)** There are plenty of additional modules available for you out there.
>
> **[0:57](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=57)** Remember the galaxy sites is going to have many, many brand new modules that were just created to help you do various things with all kinds of various nodes out there you might be managing.
>
> **[1:10](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=70)** But to demonstrate how this index works, I'll go into all of the modules that have to do with files.
>
> **[1:18](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=78)** And notice there's a handy find module.
>
> **[1:21](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=81)** And when you go to the documentation of a module, it's going to give a synopsis.
>
> **[1:27](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=87)** So what is the basics of this module, and this is for returning lists of files based on specific criteria.
>
> **[1:35](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=95)** And notice it will give you the available parameters.
>
> **[1:39](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=99)** This is very important, because you may want to be doing various things with the module and these parameters are how you can specify those requirements.
>
> **[1:50](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=110)** And then we get examples and you can really learn a lot about how to work with the module from these examples.
>
> **[2:01](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=121)** Now you'll notice that the examples by default are composed in a playbook Task Type fashion.
>
> **[2:09](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=129)** So this is how we would see the tasks inside of a playbook.
>
> **[2:14](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=134)** But we can still use this information in order to run the module successfully in an ad hoc fashion.
>
> **[2:23](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=143)** And since we haven't really delve deep into playbooks yet, let's just experiment with this find module in an ad hoc manner.
>
> **[2:32](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=152)** So I'm going to go to the terminal and we will issue the command Ansible.
>
> **[2:39](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=159)** And we will just run this against this local host system for testing purposes.
>
> **[2:46](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=166)** And you remember how we signify a module its dash m when we're doing our ad hoc command work and we are working with the find module.
>
> **[2:56](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=176)** Now we need to provide the parameter value, so we use a dash a for that.
>
> **[3:03](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=183)** And after the dash a, you just do open quotes.
>
> **[3:07](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=187)** And you will specify the criteria that you learned of in the documentation.
>
> **[3:15](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=195)** So one of the parameters that we can specify is the path.
>
> **[3:20](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=200)** So for this particular test that we're doing right now, I'll say, go ahead and start in the Downloads folder.
>
> **[3:30](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=210)** So we will issue a path of downloads.
>
> **[3:34](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=214)** And for file type, we want to see the file, so we're examining files, not subdirectories, or anything of that nature.
>
> **[3:45](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=225)** So notice, let's coordinate this against the documentation.
>
> **[3:50](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=230)** So if we go back to the documentation, we see that there was the paths parameter and I completed that and somewhere they give an example there it is of the file type parameter.
>
> **[4:03](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=243)** And I went ahead and indicate that we were wanting to find the files that are in the path of downloads that I specify.
>
> **[4:13](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=253)** So to run this, we just hit Enter on the keyboard.
>
> **[4:17](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=257)** And look at this lots of green that tells me that we were successful.
>
> **[4:22](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=262)** And if we scroll up here, we see the output, we had success running against the local host.
>
> **[4:29](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=269)** Then we have the open curly bracket, and then we have these parameters and their values.
>
> **[4:35](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=275)** And this is wonderful, because this is a standardized format.
>
> **[4:40](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=280)** It's giving us this information in and this is JSON formatted output.
>
> **[4:45](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=285)** So did this module change anything?
>
> **[4:49](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=289)** No, it didn't.
>
> **[4:50](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=290)** And we wouldn't have expected it to because we ran it with parameters that would just be finding files, not changing anything.
>
> **[4:59](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=299)** It examined four components, and as far as the file type of files go that we wanted to examine, it has met with success.
>
> **[5:11](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=311)** Look at this.
>
> **[5:12](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=312)** So in the downloads, we have a test dot RTF, Rich Text Format file.
>
> **[5:21](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=321)** And notice we get all these excellent details about that file.
>
> **[5:27](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=327)** And then look at this, there was a test two that was found.
>
> **[5:31](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=331)** And sure enough, these are two test documents that I placed inside the download folder.
>
> **[5:38](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=338)** Notice the number of matched was two.
>
> **[5:41](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=341)** So four components were examined, but there were two matches based on my criteria that I gave of look, we want to find types of just files, not directories.
>
> **[5:54](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=354)** And then we could have returned some optional message but we chose not to do that.
>
> **[5:59](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=359)** So there we go.
>
> **[6:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=360)** This module was executed and gave us excellent data much more information at a glance than we would have been able to see with any of the graphical user interface tools.
>
> **[6:14](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=374)** Notice I am on the Mac operating system where one of the places where you and I have installed Ansible.
>
> **[6:22](https://www.linkedin.com/learning/learning-ansible-2020/working-with-code-in-ansible?u=76281980&t=382)** So running this against the Mac gives me all kinds of great details regarding the files in this location.

> [!info]- Semantic Content
>
> **Code Keywords:** module (12), let (4), this, (2), type, (1), this. (1)
> **CLI Commands:** ansible (5), find (5)
> **Documentation:** the documentation (6)
> **UI Navigation:** go to (2), scroll up (1)
> **Env Vars:** json (1), rtf (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### Working with playbooks in Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=0)** - [Instructor] Sure ad hoc commands are very powerful with Ansible, allowing us to run commands against the systems of our choice, but let's face it, playbooks are where the power really comes into play.
>
> **[0:13](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=13)** So let's turn to an editing software package like Atom, in order to create a playbook.
>
> **[0:20](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=20)** This is how easy it is.
>
> **[0:22](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=22)** Notice I've created a file called first.yml, and inside of the Atom editor, I begin my YAML file with the three dashes.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=32)** This indicates that it is an Ansible syntax that we're going to be utilizing.
>
> **[0:37](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=37)** Then I do a dash and I give a name for the first play of the playbook.
>
> **[0:42](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=42)** So I'm going to do a name of my first play inside of this playbook.
>
> **[0:47](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=47)** And then I'm going to come in and tab over just below the name, the tabs are extremely important in the YAML file, and I'm going to run this against the local host.
>
> **[1:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=60)** So we specify the hosts that are going to have this play executed it against them.
>
> **[1:06](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=66)** And then we skip a line and we are now ready to go and specify the tasks that are going to make up this play.
>
> **[1:15](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=75)** So I come down, skipping a line, and underneath the tasks we are going to indicate the name of our first task.
>
> **[1:24](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=84)** And I will call this the test reachabiliy task.
>
> **[1:30](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=90)** And then underneath that name, we're going to indicate the module that we are interested in executing.
>
> **[1:37](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=97)** And we're going to indicate the ping module.
>
> **[1:40](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=100)** And we don't need to specify any parameters for that to execute.
>
> **[1:43](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=103)** The next task in our first play is going to be to install a great utility called stress, and this allows us to stress test systems.
>
> **[1:57](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=117)** And so I'm going to tab underneath the name and we are going to use the homebrew module.
>
> **[2:03](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=123)** And for the homebrew module, I'm going to give a name of stress, so it installs the correct utility, and we are going to indicate a state of present to make sure that if the stress app is not there, that the homebrew will install it.
>
> **[2:21](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=141)** So I'll go up and do a File, Save on this file.
>
> **[2:26](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=146)** Now you might be wondering where you can get the configurable parameters for a module like homebrew, and remember that is going to be in your Ansible documentation.
>
> **[2:36](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=156)** So here you can see I've navigated to the homebrew module documentation inside of Ansible, and we get all of the details that we might need about this module, including that state parameter and the possible choices for it.
>
> **[2:52](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=172)** So we are now ready to go to the command line and try our first playbook.
>
> **[3:00](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=180)** So I'm going to do the Ansible playbook syntax, and I'm going to indicate that the Ansible playbook we want to run is simply first.yml.
>
> **[3:12](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=192)** And when I execute this, we get an error and this is perfect because I wanted to demonstrate just what will happen if you have issues in your syntax.
>
> **[3:22](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=202)** And notice it tells us where we have a potential problem and it's with this line of tasks.
>
> **[3:30](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=210)** So we're going to go back to the playbook and we're going to note that this task needs to be indented.
>
> **[3:38](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=218)** So I'm going to indent that, and we have a missing space in front of these name indicators.
>
> **[3:47](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=227)** So that's going to be a problem.
>
> **[3:49](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=229)** So now I'm going to actually re-indent this and this is going to really make it look much cleaner for me.
>
> **[3:56](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=236)** And so there we go.
>
> **[3:59](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=239)** We kind of clean up the indenting.
>
> **[4:01](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=241)** We caught a couple of errors in there.
>
> **[4:03](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=243)** We have cleaned up the display of the tasks that are going to be executed.
>
> **[4:09](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=249)** So I will do a command-S to save this file.
>
> **[4:13](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=253)** And then we will head back to the terminal and we will rerun our Ansible playbook against that first.yml file.
>
> **[4:21](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=261)** And notice we gather our facts against local host just fine.
>
> **[4:24](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=264)** We test reachabiliy against the local host just fine.
>
> **[4:28](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=268)** And we make a change.
>
> **[4:30](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=270)** We install the stress app.
>
> **[4:32](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=272)** And you can see that all of that succeeded.
>
> **[4:35](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=275)** Remember, if you want to execute a playbook and you want more details as to what is happening, you can use the dash-V and now we can see the results of the ping.
>
> **[4:49](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=289)** And we can see additional information about the installation of stress.
>
> **[4:54](https://www.linkedin.com/learning/learning-ansible-2020/working-with-playbooks-in-ansible?u=76281980&t=294)** In this particular instance, it was already installed, so there was no change required.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (7), make (4)
> **Code Keywords:** module (7), let (2), this, (1)
> **Tools:** atom (2), command line (1), terminal (1)
> **File Paths:** first.yml (3)
> **Prerequisites:** install (3)
> **Env Vars:** yaml (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)

#### Challenge: Write a playbook with Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=0)** - Well, I hope you're ready to really demonstrate the great knowledge that you've gained regarding this exciting product called Ansible.
>
> **[0:09](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=9)** In this challenge, you're going to write a Playbook in Ansible in order to carry out some tasks.
>
> **[0:16](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=16)** So what I would like to challenge you with is to create two text files in a directory of your choosing.
>
> **[0:25](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=25)** You are then going to create a Playbook with a single play that consists of two tasks.
>
> **[0:31](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=31)** And you're going to run these against your local Ansible control node.
>
> **[0:35](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=35)** The first task is going to have you ping the local Ansible system.
>
> **[0:39](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=39)** And the second task is going to have you display the details of those two text files.
>
> **[0:46](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=46)** Now, remember, you want to make sure you run this Playbook so that you can actually see the output of the modules that you're going to use in this Playbook.
>
> **[0:58](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=58)** This is a challenge that shouldn't take you longer than 40 minutes to complete.
>
> **[1:02](https://www.linkedin.com/learning/learning-ansible-2020/challenge-write-a-playbook-with-ansible?u=76281980&t=62)** Have fun.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (4), node (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - well (1)

#### Solution: Write a playbook with Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=0)** - So how did you do writing a playbook in Ansible?
>
> **[0:03](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=3)** Let me walk you through my solution.
>
> **[0:06](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=6)** So the first thing that I'm going to do is per the instructions note I've created a challenges directory in my home folder and I'm going to use the touch utility in order to quickly create a testone.txt and a testtwo.txt file.
>
> **[0:24](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=24)** So if I list the files in that directory we can see we have the two files.
>
> **[0:29](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=29)** Now I'll go over to my favorite editor and notice I've got an older playbook from our course inside here and it's always nice to go ahead and use a previous excellent playbook that you know that works beautifully as a template.
>
> **[0:44](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=44)** So I'm going to do a file save as and I'll go ahead and save this as our challenge.yml and we'll take note that that is in my documents folder.
>
> **[0:58](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=58)** So we have a challenge.yml file and I'll name this play in the playbook as the challenge answers and notice we'll run this against the localhost as was required.
>
> **[1:11](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=71)** We'll do our ping to test reachability as the first task and then we are going to use our find module because we need to list the details of those files.
>
> **[1:24](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=84)** So we are going to use the module here called find and we know some parameters that we can use we are going to use the path parameter and that is going to be starting in our home folder and then it is going to go to the challenges directory and it is going to be finding the files there and there's one more parameter we're going to set and that is for the file_type and we are going to set that to simply file.
>
> **[1:58](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=118)** There we go so there is the playbook that I'm hoping is going to succeed for the challenge.
>
> **[2:05](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=125)** So we will save this playbook and now we will move over to the terminal and I am going to change directories to my documents location.
>
> **[2:16](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=136)** So let me go back in the directory system and then I'm going to change directories into the documents where we are going to use the Ansible playbook syntax for our challenge.yml and remember we need to see the outputs so we're going to do a dash v so we see the details as this is executed and there we have it.
>
> **[2:42](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=162)** We scroll back in order to see the results and we can see that we gathered facts against the localhost system, we then did a ping and that was successful and then we listed the two files that we created.
>
> **[2:57](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=177)** Notice two files were examined and here is their details and we can see all kinds of great information about those files including the full path and the name of that file.
>
> **[3:10](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=190)** Now you might notice how this output is really clean and easy for me to read.
>
> **[3:16](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=196)** That is a result of some configuration so if I go ahead and do a vim here on the Ansible config file you'll see that I have placed a config file where I am executing the playbook from and this config file does a yaml call back plug-in so I call the stdout_callback yaml plug-in and then I add this bin_ansible_callbacks equals true so this would execute as well when I am doing ad hoc commands.
>
> **[3:52](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=232)** So these two commands that you see inside of the Ansible config make sure that that output is formatted nicely for me.
>
> **[4:03](https://www.linkedin.com/learning/learning-ansible-2020/solution-write-a-playbook-with-ansible?u=76281980&t=243)** This certainly would be considered extra credit for your playbook, you would not have to worry about this in order to successfully achieve the task that we described but I did want to kind of show you this as extra credit and indicate how you can control the output of your modules.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (4), find (2), make (1)
> **File Paths:** challenge.yml (3), testone.txt (1), testtwo.txt (1)
> **Code Keywords:** let (2), module (2)
> **Code Identifiers:** file_type (1), stdout_callback (1), bin_ansible_callbacks (1)
> **Tools:** terminal (1), vim (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)


### 5. What Can Ansible Do for You?

#### Ansible and remote management
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=0)** - [Instructor] Now as I'm sure you've noticed in order to easily test and practice with Ansible, you can execute things against your local host.
>
> **[0:08](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=8)** But this is the control mode.
>
> **[0:10](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=10)** This is the machine that is supposed to be controlling our remote systems oftentimes.
>
> **[0:16](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=16)** So let's just make sure you remember exactly how remote management is achieved in Ansible.
>
> **[0:22](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=22)** So remember, one of the great things is that Ansible calls upon the secure sure shell in order to access remote systems.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=32)** Here I am on my control node and if I do a listing, I see that I'm in my home directory.
>
> **[0:39](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=39)** And there's a mystuf folder that I've created.
>
> **[0:42](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=42)** So let's do this: Let's list my home directory.
>
> **[0:45](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=45)** But let's see any files that are marked to be hidden.
>
> **[0:49](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=49)** And of course, that's done in Linux with the period in front of the directory name in this case.
>
> **[0:54](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=54)** So I'm going to change directories to the .ssh folder.
>
> **[1:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=60)** And here if I do a list, we can see that there's an id_rsa.hub.
>
> **[1:07](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=67)** If we take a look at this file.
>
> **[1:10](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=70)** So let's go into that file and take a look.
>
> **[1:14](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=74)** We can see that inside this file is our keying information for SSH security.
>
> **[1:22](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=82)** So this is the public key information that we would use for SSH.
>
> **[1:28](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=88)** You can simply copy this to the clipboard and then you can include this public key in the authorized keys area of your remote system as one way to configure your SSH.
>
> **[1:42](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=102)** So let me go over to one of the systems that we have that we can control.
>
> **[1:47](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=107)** And once again, I'll take a look at the settings, the files, the folders that are inside of this directory.
>
> **[1:55](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=115)** And we'll change to the .ssh directory.
>
> **[1:59](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=119)** And if I do my listing here, you can see there's your authorized keys.
>
> **[2:05](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=125)** And if we look inside this file, we'll see how we can just paste in the keys that we would need for the SSH configuration.
>
> **[2:16](https://www.linkedin.com/learning/learning-ansible-2020/ansible-and-remote-management?u=76281980&t=136)** And this accommodates the use of SSH to manage these remote systems.

> [!info]- Semantic Content
>
> **CLI Commands:** ssh (7), ansible (3), make (1), node (1)
> **Code Keywords:** let (6), public (2), this: (1), case. (1)
> **Env Vars:** ssh (5)
> **Code Identifiers:** id_rsa (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Ansible for orchestration
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=0)** - [Instructor] We certainly realize at this point that Ansible is simple and straight forward, but don't let that fool you.
>
> **[0:07](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=7)** Ansible can really engage in complex orchestrations for us.
>
> **[0:13](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=13)** What exactly is orchestration?
>
> **[0:15](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=15)** I find that many people will get it confused with automation.
>
> **[0:20](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=20)** I like to think of automation referring to a single task, so we can automate something like the rebooting of a server by using a script that will carry out that single task.
>
> **[0:34](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=34)** But orchestration is going to refer to the management of many automated tasks.
>
> **[0:41](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=41)** And oftentimes, this is made complicated because there's going to be this complex ordering and the ordering of the automated tasks are going to have dependencies.
>
> **[0:53](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=53)** So, we should do something if something happens or maybe we shouldn't do something if something happens.
>
> **[1:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=60)** And also, we could have complex order of operations that we want to carry out as part of the orchestration.
>
> **[1:08](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=68)** Now, let's really have some fun experimenting with Ansible in a very simple way for orchestration.
>
> **[1:14](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=74)** Here you can see a playbook I've created called, orchestrate.yammel and we have a play called, orchestration example and I am pulling the logic servers group out of my hosts file and I am running these tasks against one server at a time.
>
> **[1:32](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=92)** So the serial colon one indicator online for here are going to make sure that all of the tasks run against one of my logic servers before moving on to the next server.
>
> **[1:45](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=105)** Under the tasks area, you can see we shut down the server, then upgrade the firmware, then start the server, then verify the server.
>
> **[1:53](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=113)** And if we have multiple servers providing the business logic for our solution, then they're going to be taken down one at a time.
>
> **[2:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=120)** Thanks to the serial execution mode here of one at a time, we make sure that these overall servers are still available to service our requests.
>
> **[2:10](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=130)** Now, notice what I do with the tasks.
>
> **[2:12](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=132)** I use the debug module and I print a simple message because we don't want to get bogged down right now with the actual modules that would do all this against our fictional servers, we're just really setting up a template right now for this activity.
>
> **[2:28](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=148)** Notice something else we do.
>
> **[2:30](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=150)** We use the inventory underscore host name variable in order to print the server that we are working with in the various messages.
>
> **[2:41](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=161)** So, the next thing that we want to take a look at is the host's file that we'll be using for this orchestration example.
>
> **[2:49](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=169)** So, if I go over and I do a VIM for the my host's file, you'll see that I have created a simple host file and included a logic servers group and I simulate four servers.
>
> **[3:04](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=184)** They're all using local loop back addresses.
>
> **[3:07](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=187)** And I indicate that the connection that should be made is just a local connection for these different devices.
>
> **[3:15](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=195)** So this is a great way to simulate four servers when you don't have any servers in all actuality there to work with.
>
> **[3:23](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=203)** So, let me go ahead and escape from this.
>
> **[3:27](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=207)** And we are now ready to use the Ansible playbook command to run the orchestrate.yammel playbook.
>
> **[3:37](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=217)** And I'm going to use for an inventory that my hosts inventory that we took a look at.
>
> **[3:43](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=223)** So, it is going to go in for each of these servers and simulate the tasks in this case.
>
> **[3:49](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=229)** So if I scroll up to the very top, we can see it begins gathering facts from our server one system.
>
> **[3:57](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=237)** It then, shuts down that server, upgrades that server, starts that server, verifies that server and then moves on to the next server in our list of servers.
>
> **[4:09](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=249)** So a great example here of how orchestration could be carried out, thanks to the powerful Ansible playbook concept.
>
> **[4:17](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=257)** And we also saw how we can set up nice templates that will run through the logic of what we want to accomplish and then of course, we can doctor up those playbooks with the actual modules that we'll be using.
>
> **[4:31](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-orchestration?u=76281980&t=271)** We also saw in this video how to simulate posts to execute commands against.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (5), make (2), find (1)
> **Code Keywords:** let (3), module (1), this. (1), case. (1)
> **Env Vars:** vim (1)
> **Tools:** vim (1)
> **UI Navigation:** scroll up (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Ansible for system configuration management
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=0)** - [Instructor] Ansible is used for configuration management of systems so often that many network engineers, really think that's all it does.
>
> **[0:10](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=10)** Let's quickly discuss and demonstrate the use of Ansible for configuration management.
>
> **[0:16](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=16)** Now, it's important to understand that this product, remember was designed to be extremely minimal in nature, very simple, very easy to use, and very minimal.
>
> **[0:28](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=28)** And really to prove that point, we remember that it is agentless.
>
> **[0:32](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=32)** We don't have to go through the potential pain of installing sophisticated agent software on systems.
>
> **[0:39](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=39)** Instead we'll access those remote systems using Secure Shell and we will ensure configurations are at some baseline.
>
> **[0:49](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=49)** And an exciting thing about Ansible, is that it is state driven as we're about to demonstrate, it can examine the state of machines, and it can decide whether or not actions need to be taken.
>
> **[1:01](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=61)** This makes Ansible something called idempotent and idempotent refers to the fact that we can safely execute actions with Ansible against systems, and not have a detrimental effect on those systems.
>
> **[1:18](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=78)** And I think this is better demonstrated than it is talked about so let me do that right now.
>
> **[1:24](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=84)** Here we are on our Ansible control node, and let me show you the playbook that we are going to be executing.
>
> **[1:33](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=93)** I'm going to go into my home folder, into the my stuff directory, and we're going to take a look at a playbook I composed for us called ntp.yml.
>
> **[1:43](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=103)** Here is our playbook, we're going to run this against all our hosts, who are going to become the root, so we're going to make sure that we have root permissions here, and as you can see, we're going to ensure the NTP configuration.
>
> **[1:58](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=118)** We begin by Ensuring NTP is installed we'll use the APT model, and we'll install if it's not there, the NTP service.
>
> **[2:09](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=129)** That state of present ensures that NTP is present and if it is, this task will not do anything and that's a wonderful aspect of it.
>
> **[2:21](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=141)** If it is not there, then it will be installed, and then we'll ensure that NTP is started, and that it will be starting automatically when this system boots.
>
> **[2:33](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=153)** The big big point here is that, if the NTP is already there, that test step will do nothing and this is wonderful because the last thing we would ever want to do is be installing NTP over the top unnecessarily on the system.
>
> **[2:53](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=173)** Let's go ahead and exit this, so we will quit without saving of course, and let's execute this playbook.
>
> **[3:03](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=183)** I'm going to do our Ansible playbook command, and we are going to execute the playbook that is in the my stuff directory, that is named ntp.yml.
>
> **[3:19](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=199)** Here goes that playbook, we can see the facts are gathered of the systems, and then is NTP installed on those systems?
>
> **[3:27](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=207)** No, it is not.
>
> **[3:28](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=208)** And we can tell that because on the systems that we are managing, we can see there were changes made for that task and then we can see that the next task of ensuring NTP started now and a boot time, was successfully executed.
>
> **[3:44](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=224)** There were two changes as a result of this playbook.
>
> **[3:49](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=229)** So, let's do this, let's clear the screen, and then let's execute this playbook again.
>
> **[3:56](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=236)** Now this time the ensure NTP is installed, simply gives us okay notification messages, and no changes are made.
>
> **[4:05](https://www.linkedin.com/learning/learning-ansible-2020/ansible-for-system-configuration-management?u=76281980&t=245)** This configuration playbook that we have for these systems is something that we can execute in the future to ensure these systems meet the requirements of our organization for network time, protocol.

> [!info]- Semantic Content
>
> **Env Vars:** ntp (10), apt (1)
> **CLI Commands:** ansible (7), node (1), make (1), apt (1)
> **Code Keywords:** let (8), this, (2)
> **File Paths:** ntp.yml (2)
> **Definitions:** refers to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### React to configuration changes with Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=0)** - [Instructor] Now, if you're like me, you've been really impressed with Ansible so far but we need to make it even more flexible.
>
> **[0:07](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=7)** We need Ansible to be able to react to things like configuration changes.
>
> **[0:12](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=12)** Think about it.
>
> **[0:13](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=13)** We'll often be modifying scripts so that we can make configuration changes that are required but we need Ansible to use a feature called handlers so that it can be really flexible about handling these changes.
>
> **[0:28](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=28)** Let me demonstrate with the playbook.
>
> **[0:31](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=31)** So here we can see our playbook that's called React with Change Example.
>
> **[0:35](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=35)** And we're running a serial-type fashion of execution across our web servers.
>
> **[0:40](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=40)** Notice, we're just simulating this with debugs.
>
> **[0:42](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=42)** We install Nginx, our web server and then upgrade it and then configure it and then verify it.
>
> **[0:49](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=49)** If there is nothing for us to configure, well, then that's great but if we do make a configuration change with this task, we need to restart the Nginx server in that case.
>
> **[1:03](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=63)** So notice what I'll do.
>
> **[1:04](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=64)** On line 19 here, I will uncomment out this notify and the notify has the name restart nginx and what you do to enact a notify is you use a handler.
>
> **[1:21](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=81)** So the handler will be named after the notify of restart nginx and it will only take effect when there's been a change with that task.
>
> **[1:32](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=92)** Now, the debug will not initiate a change.
>
> **[1:37](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=97)** So we can go ahead and try executing this playbook right now and notice, we aren't using a change.
>
> **[1:45](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=105)** We can then retry this playbook with the changed_when parameter set to true and that will imitate a change for us and it should call the handler in that case.
>
> **[1:58](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=118)** So I have done this configuration with our notify and our handler and let's see if it works without calling the handler, in this case, of no change.
>
> **[2:10](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=130)** So I'm going to execute my ansible-playbook named change.yml that we were just working with against my hosts inventory and we can see that there were no changes to any of these four servers and as a result, we see that there was never an execution of the handler that we configured in the playbook.
>
> **[2:34](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=154)** But if we return to our playbook and we go to that line 20 and we uncomment that, now for that task, we're going to indicate that a change has been made.
>
> **[2:47](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=167)** So now, the notify should trigger the handler and we would get a restart of Nginx for each of these servers.
>
> **[2:57](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=177)** Well, let's save this playbook and let's give it a try.
>
> **[3:01](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=181)** So I rerun my ansible-playbook and this time, there should be a change for each of the servers when it comes to the configuration of Nginx.
>
> **[3:15](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=195)** And we can see that is occurring and I can see that there's been a change on each of these servers and sure enough, we can see it.
>
> **[3:24](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=204)** For each of the servers, there was the running of the handler that was executed and we had the handler initiate its change, in this case, just printing the message for us that the handler was called for a restart of the Nginx server and that occurred for all four of our servers.
>
> **[3:46](https://www.linkedin.com/learning/learning-ansible-2020/react-to-configuration-changes-with-ansible?u=76281980&t=226)** So notice, here you can see that the use of a notify and a handler for that notify gives us a lot of flexibility to do various tasks based on whether or not there has been a change with the task.

> [!info]- Semantic Content
>
> **CLI Commands:** nginx (7), ansible (5), make (3)
> **Code Keywords:** let (4), case. (2), case, (2), try. (1)
> **Prerequisites:** configure (2), install (1)
> **File Paths:** change.yml (1)
> **Code Identifiers:** changed_when (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Infrastructure management with Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=0)** - [Instructor] Another really exciting aspect of Ansible is the fact that it cannot only help you when it comes to the management of configurations, but it can literally build and manage your infrastructures.
>
> **[0:13](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=13)** This has led to a real resurgence in the popularity of Ansible.
>
> **[0:19](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=19)** You see, with cloud technologies, we can use Ansible playbooks to build our infrastructure from the ground up, and with dynamic inventories we can be notified of inventory manipulations dynamically and our inventory can reflect what is being done in the cloud.
>
> **[0:39](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=39)** Playbooks can literally provision the underlying hardware for us that we're going to be utilizing inside of the cloud.
>
> **[0:48](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=48)** And Ansible does such a great job with this because it really is primed to manage the virtualization on top of that physical infrastructure.
>
> **[0:57](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=57)** So here you have Ansible making sure the physical components are in place that we need, and then automating the virtualization on top of those physical components.
>
> **[1:08](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=68)** Finally, another thing that makes Ansible very well-suited for this task in the cloud-centric world we're in today is that as we know, it has wide range of support for operating systems.
>
> **[1:21](https://www.linkedin.com/learning/learning-ansible-2020/infrastructure-management-with-ansible?u=76281980&t=81)** So in the cloud we love to use a variety of different operating systems to make our solution really flexible and agile, and Ansible is well-suited for that purpose.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (7), make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### Repeating tasks across fleets with Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=0)** - [Instructor] When most people think of Ansible, they think about repeating tasks across fleets of systems.
>
> **[0:06](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=6)** We might have thousands of systems that we want to be able to configure or make changes on and Ansible certainly shines at this.
>
> **[0:14](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=14)** We know it can do so much more, but this is certainly one of the things it's built to do for us.
>
> **[0:20](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=20)** We can't forget our ability to run ad hoc tasks.
>
> **[0:23](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=23)** We don't need a playbook.
>
> **[0:25](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=25)** We can just fire off tasks at systems.
>
> **[0:28](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=28)** And I'll review that with you here through a demonstration.
>
> **[0:31](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=31)** Something else that we can do is we can manipulate the execution strategy and we can even dictate how many systems will begin making the configuration changes at a time.
>
> **[0:43](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=43)** This is called forks.
>
> **[0:45](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=45)** And I'd like to demonstrate that as well for you.
>
> **[0:48](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=48)** So remember to execute ad hoc tasks, we don't use the Ansible hyphen playbook command to call a playbook.
>
> **[0:56](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=56)** Instead, we just use the Ansible executable.
>
> **[0:59](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=59)** We'll indicate what hosts out of the host file that we want to execute the ad hoc command against.
>
> **[1:06](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=66)** We'll specify some module and any necessary parameters.
>
> **[1:09](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=69)** And then in my case, I'll specify a custom inventory file that we have.
>
> **[1:14](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=74)** That's it, an ad hoc command is a very powerful thing.
>
> **[1:17](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=77)** As you can see, I am executing the ping module across all of the hosts in the my hosts inventory.
>
> **[1:24](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=84)** And that is just so simple and so powerful.
>
> **[1:27](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=87)** But now let's talk about this concept of the strategy and the forks.
>
> **[1:33](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=93)** You'll notice in this playbook, we had set the serial execution, so we wanted everything to run on one host and then move to the next host.
>
> **[1:43](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=103)** And we can definitely substitute here.
>
> **[1:47](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=107)** We could say, no, we want to take one of the strategies that are available inside of Ansible.
>
> **[1:53](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=113)** For instance, there is a free strategy which says, go ahead and try and get this done across all of the systems as quickly as possible.
>
> **[2:03](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=123)** So, they're going to be running the playbooks all simultaneously trying to get through it, again, as quickly as possible.
>
> **[2:12](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=132)** Now, the number of systems at a time that this will execute on is dictated by forks.
>
> **[2:20](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=140)** And you can set up the number of forks for your Ansible in the Ansible.CFG to create a default number of forks or what you can do is you can specify the forks that you want inside of your playbook, calling syntax.
>
> **[2:36](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=156)** Let me demonstrate.
>
> **[2:37](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=157)** So I could say Ansible playbook and then reference my playbook.
>
> **[2:45](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=165)** We have one called change and I can specify the number of forks.
>
> **[2:49](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=169)** By default it's five, but if I want to do 30 systems at a time, I could change the fork value to 30.
>
> **[2:59](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=179)** Once again, I'll specify my custom inventory.
>
> **[3:02](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=182)** And this example is a little dubious because we only have four systems, but you get the idea that fork syntax when calling the playbook would work just great.
>
> **[3:14](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=194)** And if I had hundreds of machines, this would go after 30 of them at a time.
>
> **[3:22](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=202)** As you would guess, there is an excellent section in the Ansible documentation on all of this.
>
> **[3:27](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=207)** You can see the controlling playbook execution, strategies and more.
>
> **[3:32](https://www.linkedin.com/learning/learning-ansible-2020/repeating-tasks-across-fleets-with-ansible?u=76281980&t=212)** So this document will give you a lot more information on the strategies, the forks and some great keywords that you can utilize to control execution inside of Ansible.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (10), make (1)
> **Code Keywords:** this. (2), module (2), let (2), case, (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Prerequisites:** configure (1), set up (1)
> **File Paths:** ansible.cfg (1)
> **Env Vars:** cfg (1)
> **Analogies:** for instance (1)
> **Best Practices:** remember to (1)


### Conclusion

#### Continuing on with Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=0)** - [Anthony Sequeira] Well, congratulations.
>
> **[0:02](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=2)** You've completed our course and built a nice, strong foundation in Ansible.
>
> **[0:08](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=8)** But there's a lot more to learn about this exciting tool.
>
> **[0:13](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=13)** So I would challenge you to visit the LinkedIn Learning library and take a look at some of the deeper dives that we have available for you regarding Ansible.
>
> **[0:25](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=25)** Now, since Ansible is installed on a Linux system, typically, and can manage very effectively your other Linux systems, maybe you'd like to boost your knowledge of Linux.
>
> **[0:37](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=37)** Well, you'll be excited to learn that there are plenty of great Linux courses in the library as well.
>
> **[0:43](https://www.linkedin.com/learning/learning-ansible-2020/continuing-on-with-ansible?u=76281980&t=43)** Well, my name is Anthony Sequeira, and I'm so glad that you chose to join me for our initial look at the remarkable tool that is Ansible.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (4)
> **Speakers:** - [anthony (1)


## Path Context

### In [[Network Automation Professional Certificate by Arista Networks]]
**1 of 6** | [[Python Quick Start]] →

## Part of

- [[Network Automation Professional Certificate by Arista Networks]]

## Appears In

- [[Network Automation Professional Certificate by Arista Networks]]

## Related Courses

_Courses sharing skills:_

- [[Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible]] — Ansible
- [[Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks]] — Ansible
- [[Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible]] — Ansible

---

[↑ Back to top](#)