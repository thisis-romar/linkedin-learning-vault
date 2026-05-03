---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible
url: "https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible"
duration_minutes: 134
duration: 2h 14m
level: Intermediate
updated: 7/25/2022
learners: 16120
skills:
  - Red Hat Enterprise Linux (RHEL)
  - Ansible
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGuseBEfggfSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1599103236612?e=2147483647&amp;v=beta&amp;t=YZdUxVefTZZS9vAHEjL8giaWWsaeRMwN6bk3XdU7wok"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Prepare for the Red Hat Certified Engineer (EX294) Exam]]'
prev_courses:
  - '[[Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks]]'
path_nav: '[{"path":"Prepare for the Red Hat Certified Engineer (EX294) Exam","position":3,"total":3,"prev":"Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks","next":null}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/red-hat-enterprise-linux-rhel
  - skill/ansible
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%203%20Managing%20Systems%20with%20Ansible.md)

![Red Hat Certified Engineer (EX294) Cert Prep: 3 Managing Systems with Ansible](https://media.licdn.com/dms/image/v2/C4E0DAQGuseBEfggfSQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1599103236612?e=2147483647&amp;v=beta&amp;t=YZdUxVefTZZS9vAHEjL8giaWWsaeRMwN6bk3XdU7wok)

# Red Hat Certified Engineer (EX294) Cert Prep: 3 Managing Systems with Ansible

> Red Hat Certified Engineer (RHCE) is one of the top Linux certifications. And the main focus of the RHCE exam—IT automation using Ansible Engine—is a topic that's valuable for both aspiring RHCEs and anyone using Ansible Engine. In this course, the final installment in the Red Hat Certified Engineer (EX294) Cert Prep series, review the basics of using Ansible modules for system administration and 

> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible) | 2h 14m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (5 videos)
  - [Introduction](#introduction)
  - [What you should know](#what-you-should-know)
  - [About the RHCE (EX294) exam](#about-the-rhce-ex294-exam)
  - [Before you proceed with this course](#before-you-proceed-with-this-course)
  - [Reconfigure-Migrate CentOS](#reconfigure-migrate-centos)
- [**1. Ansible Roles**](#1-ansible-roles) (6 videos)
  - [Directory structure best practices](#directory-structure-best-practices)
  - [Create the directory structure](#create-the-directory-structure)
  - [Understanding RHEL System Roles](#understanding-rhel-system-roles)
  - [Using RHEL System Roles](#using-rhel-system-roles)
  - [Exploring Ansible Galaxy](#exploring-ansible-galaxy)
  - [Installing roles from Ansible Galaxy](#installing-roles-from-ansible-galaxy)
- [**2. Using Ansible in Large Environments**](#2-using-ansible-in-large-environments) (4 videos)
  - [Using dynamic inventory plugins](#using-dynamic-inventory-plugins)
  - [Using dynamic inventory scripts](#using-dynamic-inventory-scripts)
  - [Manage parallel playbook execution](#manage-parallel-playbook-execution)
  - [Performance tuning Ansible](#performance-tuning-ansible)
- [**3. Templating with Jinja2**](#3-templating-with-jinja2) (4 videos)
  - [Templating with Jinja2](#templating-with-jinja2)
  - [Using variables with Jinja2](#using-variables-with-jinja2)
  - [Jinja2 syntax](#jinja2-syntax)
  - [Using control structures in Jinja2](#using-control-structures-in-jinja2)
- [**4. Managing Software with Ansible**](#4-managing-software-with-ansible) (3 videos)
  - [Modules related to software management](#modules-related-to-software-management)
  - [Managing packages in playbooks](#managing-packages-in-playbooks)
  - [Implementing a playbook to manage software](#implementing-a-playbook-to-manage-software)
- [**5. Managing Users with Ansible**](#5-managing-users-with-ansible) (4 videos)
  - [Modules related to user management](#modules-related-to-user-management)
  - [Using playbooks to create users](#using-playbooks-to-create-users)
  - [Using external user data files](#using-external-user-data-files)
  - [Advanced user creation](#advanced-user-creation)
- [**6. Managing Processes and Tasks**](#6-managing-processes-and-tasks) (3 videos)
  - [Modules for managing services and tasks](#modules-for-managing-services-and-tasks)
  - [Creating a playbook to manage services](#creating-a-playbook-to-manage-services)
  - [Creating a playbook to manage tasks](#creating-a-playbook-to-manage-tasks)
- [**7. Troubleshooting Ansible**](#7-troubleshooting-ansible) (2 videos)
  - [Managing Ansible logging and output](#managing-ansible-logging-and-output)
  - [Troubleshooting Ansible playbooks](#troubleshooting-ansible-playbooks)
- [**Conclusion**](#conclusion) (1 videos)
  - [Taking the exam](#taking-the-exam)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=0)** - [Grant] The Red Hat RHCE certification is one of the most respected and valued in the IT industry.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=6)** The RHCE is a popular [[Linux]] engineering certification, and the current version focuses on [[IT Automation]] using [[Ansible]] Engine, and that information can be invaluable in today's world, no matter which operating systems or devices you're managing.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=20)** This course is the third and last course in our three-part EX294 series focusing on Ansible Engine.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=27)** In combination with the other two EX294 courses in the course library, it covers all objectives of the Red Hat RHCE EX294 exam.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=36)** In addition, the information covered in this course is general in nature, and can be used to learn Ansible Engine even if you're not planning on taking the Red Hat exam.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=45)** My name is Grant McWilliams, college professor and Linux enthusiast.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=49)** Over the course of the past 20 years, I've taught advanced Linux topics to many people in [[Higher Education]] as well as corporate environments, and that experience is accessible to you.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/introduction?u=76281980&t=58)** I'm sure you're excited to get started, and I'm excited to teach you, so let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Ansible]] (3), [[IT Automation]] (1), [[Higher Education]] (1)
> **Env Vars:** rhce (3), ex294 (3)
> **CLI Commands:** ansible (3)
> **Definitions:** is a  (1)
> **Speakers:** - [grant] (1)

#### [What you should know](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=0)** - [Instructor] As the Red Hat EX294 certification covers technologies included in Red Hat Enterprise [[Linux]] 8.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=6)** We'll be using a version of that operating system for this course.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=10)** In this course when I use the generic term Enterprise Linux 8 I mean Red Hat Enterprise Linux 8 or any other direct clone such as CentOS 8 Enterprise Linux.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=21)** Anything we do in this course will work fine on either of these operating systems.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=25)** Since the certification focuses on [[Ansible]] Engine, most of the course could also be done without modification on Fedora Linux or any spin of Fedora as well.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=34)** Furthermore, most of the technologies covered in this course are not distribution specific and focus on [[IT Automation]] using Ansible.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=42)** As such, they can be applied to any operating system utilizing Ansible Engine for automation.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=48)** For this course we'll be using Linux in VirtualBox [[Virtual Machines]].
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=51)** There are versions of VirtualBox for [[Windows]], macOS, Solaris and Various Linux distributions.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=57)** For this course I'll be running VirtualBox on a Linux host.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=61)** In order to run virtual machines for this course, you'll need a computer with an Intel or AMD 64-bit CPU with virtualization support.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=70)** Intel CPUs with virtualization support will be advertised as having VT-x and AMD calls it AMD-V.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=78)** You will also need a 64-bit host OS.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=81)** If you're using Linux this is automatic.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=84)** If you're using Windows make sure you have a 64-bit of that operating system.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=89)** If you're OS is 64-bit then you'll want to download the 64-bit version of VirtualBox as well.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=95)** For this course you may also want to have high-speed internet for downloading ISO images.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=99)** And doing Linux operating system software updates.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=103)** You will also want to have 20 to 25 gigabytes of free hard drive space minimum.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=107)** This will provide enough space for two CentOS 8 Linux guest VMs.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=112)** If you have more free space available it could give you more flexibility for creating additional guest VMs or giving your VMs larger virtual hard drives.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=121)** To run more than one VM at a time you'll need to have two to four gigabytes of free system memory if you're using Linux as your host OS.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=128)** If you're using Windows as the host OS, I recommend eight gigabytes of RAM minimum.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=133)** The foundation course in this three part Red Hat EX294 series is Cert Prep Red Hat Certified Engineer EX294 Foundations of Ansible.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=143)** In that course we install a 64-bit version of VirtualBox.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=146)** Install CentOS 8 Linux in a VirtualBox virtual machine.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=150)** And set up our VirtualBox lab environment.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=152)** Including installing VirtualBox guest additions in CentOS.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=156)** Making a clone of our CentOS 8 VM.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=158)** As well as managing VirtualBox networking with NAT in a private network.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=162)** If you haven't taken that course yet, you'll want to do that before proceeding with this one for the best [[User Experience (UX)|user experience]].
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=167)** If you already have foundational knowledge of Ansible you may want to just watch the videos for CentOS 8 installation, VirtualBox lab set up as well as the videos to install Ansible on the control node, preparing to manage nodes and building static inventory.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/what-you-should-know?u=76281980&t=181)** Those videos will get you started for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (13), [[Ansible]] (6), [[Windows]] (3), [[Virtual Machines]] (2), [[IT Automation]] (1)
> **Env Vars:** ex294 (3), amd (3), cpu (1), iso (1), ram (1)
> **CLI Commands:** ansible (6), make (1), node (1)
> **Prerequisites:** install (3), you'll need (2), set up (2)
> **Code Identifiers:** macos (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [About the RHCE (EX294) exam](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=0)** - This course provides training for the RHCE EX294 certification.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=5)** RHCE stands for Red Hat Certified Engineer.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=8)** The RHCE is a Red Hat certification, which uses Red Hat Enterprise [[Linux]] eight as its operating system platform.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=15)** In the past, the RHCE EX300 was a certification that tested the general skills of system engineers.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=21)** The new RHCE EX294 certification however, is not a general engineer certification as the focus has changed to [[IT Automation]] using Red Hat [[Ansible]] Engine 2.8.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=32)** All exam takers will need to have previously passed the RHCSA EX200 exam in order to obtain the RHCE certification.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=40)** You can take the exam without possessing the RHCSA certification.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=45)** But RHCE credential will not be issued until both exams have been passed.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=50)** Those test takers that pass the exam become Red Hat Certified Engineers and in addition, this certification counts towards being a Red Hat Certified Architect or RHCA.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=60)** Although Red Hat provides training for both EX200 and EX294 exams, it is not required in order to take either exam as their stand alone exams not linked to any training program.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=70)** Taking the official training or this course is not a guarantee that you will pass the exam.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=74)** Although this three course EX294 series with previous experience, additional practice and reading should be sufficient.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=81)** To gauge your knowledge level Red Hat provides online skills assessment tools, which can be helpful in deciding if you need additional instruction.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=89)** The RHCE exam is a performance based test of skills and knowledge necessary to automate Red Hat Enterprise Linux.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=96)** This hands on practical exam requires you to use Red Hat Ansible Engine to perform real world tasks.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=102)** You will be provided with multiple systems and will be required to install and configure Ansible Engine and they use it to perform standard [[System Administration]] tasks similar to what you do on a job.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=112)** You will be required to create Ansible playbooks and use those playbooks to configure systems for specific roles and behaviors.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=119)** The tasks will be described In terms of a specific end state that you must achieve.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=123)** Your work will be evaluated by applying the playbooks created during the exam against freshly installed systems and verifying that those systems and services work as specified.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=132)** The exam is hands on and last four hours.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=136)** As of this recording, the exam cost is 400 US dollars.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=139)** During the exam, you will not have access to the internet or outside materials.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=143)** You will however have access to documentation that ships with Red Hat Enterprise Linux.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=149)** You can take the exam either in a classroom if you purchase Red Hat training, On site if your company has a range, this was Red Hat or by way of individual exam.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=157)** Most people will probably take an individual exam at a testing center.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=162)** To do so visit Red Hat's website to determine a testing center location near you.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=166)** Testing centers are provided by Red Hat and other third party companies.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=170)** After completing the exam, you will not receive your scores immediately as those come from Red Hat certification central.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=175)** examiner's and training partners are not authorized to report results to candidates Scores are usually reported within three US business days.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=184)** Also, exam scores are not reported on individual items, but only on sections.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=188)** If you don't do well on one section, you'll need to study for the entire section again.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=193)** The RHCE exam is aimed at experienced Linux IT professionals who currently have an RHCSA certification, are pursuing the RHCE or are preparing for one of the RCA certifications.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=205)** It will also be beneficial for experienced IT professionals who desire a recognized certification in IT automation.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=211)** Also, this certification is useful for organizations that require compliance with a mandate such as DoD 8570.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=218)** If you're not a Red Hat administrator, or a person pursuing a Red Hat certification, this course will still be valuable to you if you're interested in IT automation using Ansible.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=228)** I can't stress enough that this course and certification is general in nature, and useful even if your infrastructure comprises of [[Ubuntu]], Souza or even [[Windows]] hosts.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=237)** This course is the third of a three part series covering objectives of the RHCE EX294 exam.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=244)** specific objectives can be found on Red Hat's website skills covered can be used to manage Ansible in any environment.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=252)** If you are new to Red Hat certifications and you only want to prepare for the RHCSA certification, then take the Red Hat certified System Administrator EX200 course in the course library.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=262)** If you want to prepare for the RHCE certification, then take the EX200 course as well as this EX294 course.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/about-the-rhce-ex294-exam?u=76281980&t=269)** If you want more in depth training on administering [[Red Hat Linux]], take the Linux system engineer learning path and the course library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[Linux]] (5), [[IT Automation]] (3), [[System Administration]] (1), [[Ubuntu]] (1)
> **Env Vars:** rhce (12), ex294 (6), rhcsa (4), ex200 (4), ex300 (1)
> **CLI Commands:** ansible (6)
> **Prerequisites:** required to (2), configure (2), install (1), you'll need (1)
> **Definitions:** is a  (2), stands for (1)
> **Analogies:** similar to (1), such as (1)
> **Versions:** 2.8 (1)
> **Speakers:** - this (1)

#### [Before you proceed with this course](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=0)** - [Narrator] This is the third course in the EX294 series.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=4)** In the EX294 Foundations of [[Ansible]] course, we created a virtual machine named rhhost1, and installed CentOS 8 in it.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=12)** We also configured VirtualBox Guest Additions.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=15)** For networking, we created the virtual NAT network for communicating to the internet, and a private network to communicate with the virtual host and other internal VMs.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=23)** Lastly, we created a clone of the VM and named it rhhost2.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=29)** Before you proceed with this course, you'll want to verify that you have a basic working network and Ansible set up.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=35)** To do this log into rhhost1 and open a terminal.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=38)** Now type in ping, space, rhhost2.[localnet.com](https://localnet.com), and hit Enter.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=46)** Press Control C to end the ping requests.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=50)** If you're getting responses from rhhost2, then you can move on.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=53)** If not, you want to verify that the VM IP address of rhhost2 has not changed, and if it has, edit the /etc/hosts file to reflect the update.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=62)** Since we'll be using host names to refer to our VMs, we'll want to have reliable name resolution.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=68)** If the ping command works, then networking is working.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=72)** Now let's verify that Ansible can communicate with rhhost2.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=75)** In the terminal, type in ansible, space, rhhost2.[localnet.com](https://localnet.com), space, dash, m, space, ping.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=85)** If this doesn't work, you need to troubleshoot the problem.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=88)** It may be that you haven't shared SSH keys to rhhost2.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=92)** You can review the videos in the EX294 Foundations of Ansible course for more information on setting up Ansible on the control node.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=99)** The next thing we'll do is have Ansible gather some information from rhhost2.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=104)** We'll use the setup module for this.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=106)** Type in clear, then type in ansible, space, rhhost2.[localnet.com](https://localnet.com), space, dash, m, space, setup for the setup module, space, dash, a, space.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=118)** And for arguments, type in single quote, gather, underscore, subset, =network, space, filter=ansible, underscore, interfaces, single quote.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=133)** This uses the setup module to display the network interfaces.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=136)** Hit Enter.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=138)** If you've created other [[Virtual Machines]] and are planning on building a more complex configuration infrastructure, then you should carry out the same tasks with those VMs as well.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=146)** The last test you might want to do, is ensure that each VM can communicate with the outside world.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=151)** To do so, you can use the command module.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=153)** Type in clear, and then type in ansible, space, rhhost2.[localnet.com](https://localnet.com), space, dash, m, space, command, for the command module, space, dash, a, space, single quote, and for arguments, type in ping, space, dash, c1, space, [google.com](https://google.com), single quote, or you could use another URL, and hit enter.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=176)** This will use the command module to run the ping command, to send one ping packet to [google.com](https://google.com).
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=181)** In order to accomplish this, rhhost1 will send the ansible command across the private network to rhhost2, which will send the ping request out the NAT network interface to the internet.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=192)** This will ensure that both private and Nat network interfaces are working.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=196)** If you had to modify your virtual machines to get them to communicate, you may want to create VM snapshots of both by pressing the Control key and the letter T for each.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/before-you-proceed-with-this-course?u=76281980&t=205)** You can name your snapshots whatever you wish.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (11), [[Virtual Machines]] (2), [[Google]] (2)
> **CLI Commands:** ansible (11), ssh (1), node (1)
> **Env Vars:** ex294 (3), nat (2), ssh (1), url (1)
> **URLs:** [localnet.com](https://localnet.com) (4), [google.com](https://google.com) (2)
> **Prerequisites:** setup (4), set up (1)
> **Tools:** terminal (2)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### [Reconfigure-Migrate CentOS](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=0)** - [Instructor] It's important to note that Red Hat ended support for CentOS 8 on December 31st, 2021.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=6)** Part of the process involved changing the software repository URLs from [centos.org](https://centos.org) to vault.[centos.org](https://centos.org).
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=13)** If you have a CentOS installation, and it cannot install software from its repositories, execute these steps.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=19)** If you're using Rocky [[Linux]] or AlmaLinux OS, you can skip this video.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=24)** First, make sure your networking is turned on by clicking on your top right-hand menu and clicking Wired Off.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=29)** Now, click on Wired Settings, click on the gear icon next to the wired connection and click on Connect Automatically.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=37)** Now, click apply and click the slider gadget to turn it on.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=42)** Now, to fix the repositories, in a terminal, type in cd /edc/yum.repos.d and hit Enter.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=49)** Now comment out all mirrorlist lines by tipping in sudo sed -i 's, forward slash for the delimiter, mirrorlist/#mirrorlist/g,
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=69)** for global, ' CentOS-*
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=77)** and hit Enter and type in your user's password.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=82)** Now change the CentOS mirror URL to vault.[sento.org](https://sento.org).
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=86)** We'll need to use the pipe symbol for the sed delimiter because the URLs have forward slashes in them.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=92)** Type in sudo sed -i 's, for substitute again.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=97)** This time, type in a pipe symbol for the delimiter, #baseurl=[http://mirror.centos.org](http://mirror.centos.org),
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=114)** pipe symbol, baseurl=http>//vault.[centos.org](https://centos.org),
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=127)** pipe, g' CentOS-*
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=136)** and hit Enter.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=137)** Now, update your system by typing in sudo dnf update and hit Enter.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=144)** Note that this makes your CentOS installation functional again.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=148)** Since this version is no longer supported, there will not be any more software updates for it, but you will be able to install current software from the repositories.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=156)** For now, this may be fine, especially for the purpose of learning.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=160)** However, in the future, it may become a problem when trying to install newer versions of software.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=168)** Once the update has been done, reboot your VM by typing in reboot and hit Enter.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=175)** To be able to update your CentOS system with new versions of software and security patches, you'll need to migrate it.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=181)** A couple of options include migrating to Rocky Linux or AlmaLinux OS.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=185)** I will outline both processes in this video.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=188)** You can do either both for educational purposes or choose one.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=191)** Log back in and then before making any changes to your VM, you should take a snapshot by pressing the host key plus T.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=200)** Name the snapshot pre-migration and hit Enter.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=205)** To migrate CentOS 8 to AlmaLinux OS, point your web browser to [almalinux.org](https://almalinux.org) and then click on the Migrate button.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=216)** This will take you to their [[GitHub]] page.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=219)** About halfway down the page, there is an almalinux-deploy.sh link.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=224)** Click on it and then click on Raw and then right-click and select Save Page As.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=234)** Choose your Downloads directory and click on Save.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=239)** Once that's downloaded, go to your terminal and change the downloads directory.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=244)** Type in cd ~/Downloads, with a capital D, and hit Enter.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=249)** Now run the script by typing in sudo bash almalinux-deploy.sh and hit Enter again and enter your password.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=260)** Once the migration is done, reboot into AlmaLinux OS.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=266)** Another option is to migrate to Rocky Linux.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=269)** To do so, you'll need to revert your VM back to the pre-migration snapshot again.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=274)** Click the VM close gadget, select Power off the machine and select Restore current snapshot "pre-migration," and hit OK.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=283)** Now click on Start to start your VM back up.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=286)** Once it's powered back up, bring up a web browser and browse to [rockylinux.org](https://rockylinux.org) and click on Migrate.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=299)** This page contains the documentation concerning migration from CentOS.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=304)** Partway down the page is a link for the GitHub project page for the migrate2rocky script.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=310)** Click on that.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=312)** Now click on migrate2rocky.sh and then click on Raw and right-click and click Save Page As and save it to your Downloads directory.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=327)** Open a terminal and cd to your downloads directory.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=329)** Type in cd ~/Downloads, with a capital D, and hit Enter and then run the script.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=335)** Type in sudo bash migrate2rocky.sh -r and hit Enter and enter your password.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=347)** Once the migration process has finished, reboot into Rocky Linux.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=353)** The differences between Rocky Linux and AlmaLinux OS are minor and comprise boot images and backdrops at this point.
>
> **[5:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=359)** Both of these are nearly identical to CentOS 8 and will receive all future software updates.
>
> **[6:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/reconfigure-migrate-centos?u=76281980&t=364)** Use whichever one you wish.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[GitHub]] (2)
> **CLI Commands:** sudo (5), cd (4), sed (3), make (1), yum (1)
> **UI Navigation:** click on (11), right-click (2), go to (1)
> **URLs:** [centos.org](https://centos.org) (3), [sento.org](https://sento.org) (1), [http://mirror.centos.org](http://mirror.centos.org) (1), [almalinux.org](https://almalinux.org) (1), [rockylinux.org](https://rockylinux.org) (1)
> **Tools:** terminal (3), github (2), bash (2)
> **Prerequisites:** install (3), you'll need (2)
> **File Paths:** almalinux-deploy.sh (2), migrate2rocky.sh (2)
> **Definitions:** is an  (1), is a  (1)


### 1. Ansible Roles

[↑ Back to Table of Contents](#table-of-contents)

#### [Directory structure best practices](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=0)** - [Instructor] Its easier to plan for expansion when you implement [[Ansible]] then it is to change it later after your infrastructure's grown.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=7)** To get our Ansible configuration scheme to scale we need to create a directory structure that separates host and group variables, roles and all components of a role including tasks, handlers, deployable files, templates, role variables, defaults and meta data.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=24)** We can duplicate this structure for other roles.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=27)** In this case [[Web Servers]].
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=29)** You are not required to have all of the directories for a working configuration.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=33)** For more detailed information on the purpose of each directory see the EX294 using Ansible playbooks course.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=40)** This structure will of course change depending on your particular infrastructure layout.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=44)** Let's say we have a small set of service providing web applications.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=48)** We might have an application server running the NetBSD operating system.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=53)** We could have a couple of network devices such as a firewall and manage switch.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=57)** Behind these would be a database server to running Enterprise [[Linux]] 8.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=62)** This could be Red Hat or CentOS.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=64)** We might have both Apache and Engine X web servers.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=67)** Both running on Enterprise Linux 8 as well.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=70)** We may have two monitoring servers both running Debian.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=74)** The second monitoring server is also a remote logging server.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=78)** We may also have [[Windows]] based [ASP.net](https://ASP.net) application servers or perhaps [[Active Directory]] servers as well.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=84)** The network devices might also be managed by Ansible but we won't get in to either of these scenarios in this course.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=91)** Traditionally, we look at grouping all hosts with a similar operating systems and managing them together.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=97)** For instance, the Enterprise Linux 8 host would all have a similar configuration.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=101)** And the Debian host would as well.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=103)** The NetBSD server would also have it's own configuration.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=106)** The Ansible configuration directory structure would look like this.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=110)** We'd have a role for NetBSD, a role for EL8 and a role for Debian.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=116)** Inside each would be directories for tasks, change handlers and deployable files.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=121)** This might seem like a logical thing to do if you've managed servers in the past.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=125)** It would keep all OS specific packaged manager configurations, OS specific configuration files and change handlers separate as well.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=134)** However, I caution you against using a configuration layout like this.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=139)** We have powerful tools at our disposal that give us the flexibility to break out of this paradigm.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=145)** Let's think for a moment why you would not want to structure your configuration in this manner.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=150)** What happens if you want to move your monitoring service from Debian to Enterprise Linux 8.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=155)** You need to create new playbook files and configuration files for the new OS.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=160)** Let's take it a step further.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=161)** Let's say you had one Debian monitoring server and one Enterprise Linux monitoring server.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=167)** Now you'd have to have monitoring server configurations on both the Debian role and the EL8 role.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=173)** Every time you make changes to one configuration you would have to remember to make it to the other.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=179)** I would like to encourage you to think more along the lines of what the server provides.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=183)** If it provides database services then it would belong to a Debian server role.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=188)** If it provides web services it would belong to a web server role and so on.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=193)** It may still make sense to have based OS configuration roles such as a based EL8 role.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=199)** Or a based Debian role.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=200)** We'll talk more about these based roles later.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=204)** The neat thing about this layout is that you can create a new database of web server just by including a host in that group in the inventory file.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=212)** For instance, if you wanted rhhost2 to provide database services we'd add it to the dbservers group.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=218)** And then run our configuration and it would become a database server.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=223)** It wouldn't even matter what the operating system was if we created our configuration properly.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=229)** We can add new servers or even change server roles easily if we plan from the beginning.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=234)** A playbook task that handles both Debian and Enterprise Linux might look like this.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=238)** If the distribution is Debian or [[Ubuntu]] then install a package named Apache2 using apt.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=245)** If the distribution is CentOS or Red Hat Enterprise Linus then install a package named httpd using yum.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/directory-structure-best-practices?u=76281980&t=252)** This may require a bit more planning but if you have a mixed OS environment it will pay off in the long run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Ansible]] (5), [[Web Servers]] (2), [[Windows]] (1), [[ASP.NET]] (1)
> **CLI Commands:** ansible (5), make (3), apache (1), apt (1), yum (1)
> **Env Vars:** el8 (3), ex294 (1), asp (1)
> **Analogies:** such as (2), for instance (2)
> **Prerequisites:** install (2), required to (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Best Practices:** remember to (1)
> **Warnings:** caution (1)

#### [Create the directory structure](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=0)** - [Instructor] It can be somewhat difficult to visualize our role structure as it can be very abstract.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=5)** We can have both horizontal layers and vertical stacks.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=8)** Let's take a look.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=10)** I'll start by creating a generic stack.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=11)** First, I'll put the OS on the bottom and then I'll add tools.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=15)** These would be tools we'd use across the board like Vim, htop, and tree.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=19)** These will be installed on every system no matter the OS if possible.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=23)** Layered on top is the services that the host would provide, such as [[Databases]], remote logging, or web services.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=31)** Let's fill this out with our fictitious infrastructure.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=33)** First, we'll add our NetBSD application server, then we'll add our Debian monitoring server and our Enterprise [[Linux]] 8 monitoring server, which is also a remote logging server.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=44)** Next we'll add our database servers, both running on Enterprise Linux 8, and lastly, we'll add our [[Web Servers]], one running NGINX and the other running Apache.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=53)** Now that we have the full picture, let's map our roles to our hosts.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=58)** The base role would ensure tools or other generic files that are common to all hosts are installed.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=63)** The base EL8 role will be Enterprise Linux 8 specific, and would ensure that the base OS is configured properly.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=70)** This would be for operating system specific configuration items.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=74)** The web servrers role would configure the web services, and the DB servers role will configure the database servers.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=81)** We can see that we end up with layered, and often overlapping roles.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=85)** The services section of the stack can get a lot more complex, but I'm keeping it simple here for the purpose of visualization.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=91)** Imagine for a moment that most of the web servers handled different websites, but some NGINX servers handled the same sites as the Apache servers, and you can see that it gets very complex very quickly.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=103)** It's best to draw it out ahead of time.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=106)** We're going to start creating our directory structure with a couple of roles.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=110)** This will be building on what we created in the EX294 Using [[Ansible]] Playbooks course.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=115)** Log into your rhhost1 VM for this exercise and open a terminal.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=119)** To create our roll directories, we'll use Bash's brace expansion to simplify the task.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=124)** If you still have your directories from EX294 Using Ansible Playbooks, this will not interfere with those, although you may get an error message if they already exist.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=133)** In the terminal, type in mkdlr, space, -p for parent directories, ~/Ansible-files/ roles/ {base, baseEL8, webservers,dbservers}/.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=154)** Those are our roles.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=157)** {handlers, tasks, templates, files, vars, defaults, and meta}.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=175)** If you want to clone your CentOS 8 VM and create multiple new hosts to provide all the services, be my guest.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=181)** However, I will be keeping my infrastructure simple in this course so we can stay focused, but I encourage you to build upon this if you have the resources to do so.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=190)** If you want to create new roles for different types of hosts, just append them to the list of roles in this command line.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=195)** Now hit Enter.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=197)** Let's take a look at the results with the tree command.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=199)** Type in tree, space, ansible-files and hit Enter.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=203)** Tree shows that we now have rolled directories for base, baseEL8, webservers and dbervers, and inside of each are directories for portions of the configuration.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=214)** You may still have files from the EX294 Using Ansible Playbooks course, which is fine, it's really easy to add new roles for new services, create a directory, copy your crash files from a different service, and modify them.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=228)** You might be wondering how we'd handle the web servers in our scenario.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=231)** One host utilizes NGINX and the other Apache.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=235)** Instead of creating two different roles, we can set a host variable either in our playbook.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=239)** or in the host_vars directory.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=242)** The host that provides NGINX, in this case, web1.[localnet.com](https://localnet.com), would have a variable such as web server set to nginx and the host that provides Apache, in this case, web2.[localnet.com](https://localnet.com), would have web servers set to apache.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=257)** In our playbooks, we'd check the value of this variable before installing packages or creating configuration files.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=262)** This allows us to change the configured web server just by changing the value of the variable of the host.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=268)** In our playbooks, we'd check the value of this variable before installing packages or creating configuration files.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=274)** This allows us to change the configured web server just by changing the value of the variable for the host.
>
> **[4:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=280)** This directory structure example will keep various parts of our configuration separate and will provide an abstraction area above the operating system, allowing us to have OS agnostic configurations.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/create-the-directory-structure?u=76281980&t=290)** It will allow us to quickly add services or change the desired functionality of a host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (5), [[Web Servers]] (4), [[Linux]] (3), [[Databases]] (1)
> **CLI Commands:** nginx (5), apache (5), ansible (5)
> **Env Vars:** nginx (4), ex294 (3), el8 (1)
> **Tools:** terminal (2), vim (1), bash (1), command line (1)
> **Analogies:** such as (2), picture (1), imagine (1)
> **Code Identifiers:** baseel8 (2), host_vars (1)
> **URLs:** [localnet.com](https://localnet.com) (2)
> **Prerequisites:** configure (2)

#### [Understanding RHEL System Roles](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=0)** - [Grant] It is not necessary to create [[Ansible]] roles for every situation from scratch.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=5)** Red Hat has created roles for helping to manage services and has included them as an installable package called rhel-system-roles.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=13)** Red Hat started including Ansible system roles in Enterprise [[Linux]] 7.4 as a technology preview, and they became a supported feature in Enterprise Linux 7.6.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=23)** If you are a Red Hat customer and use our satellite web interface to manage your host, you can use the rhel System Roles Powered by Ansible using that interface.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=31)** Or you can use the command line, which we'll outline in this course.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=35)** The beauty of using Ansible roles is that they can be OS agnostic, as I've mentioned before.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=40)** So one role can be used to manage configurations on multiple distributions.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=45)** They can even be useful if you only use one distribution such as Red Hat, but your infrastructure has multiple versions.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=51)** Using Red Hat System Roles Powered by Ansible allows you to automate configurations across your entire environment, mo matter if you're using Enterprise Linux 6.10, 7, or 8, which are all supported.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=64)** If you are familiar with these operating systems, you'll know that the underlying technology changed a lot between them.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=69)** For instance, Enterprise Linux 6 uses ntp for its network time server, but Enterprise Linux 7 and 8 use chrony.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=77)** The way services are managed has changed as well.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=80)** Older systems uses service and check config commands to manage services, whereas newer systems use systemctl from systemd.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/understanding-rhel-system-roles?u=76281980&t=88)** None of this matters if you're using Red Hat System Roles Powered by Ansible, as it takes care of it for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[Linux]] (5)
> **CLI Commands:** ansible (6), systemctl (1)
> **Versions:** 7.4 (1), 7.6 (1), 6.10 (1)
> **Analogies:** such as (1), for instance (1)
> **Tools:** command line (1)
> **Speakers:** - [grant] (1)

#### [Using RHEL System Roles](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=0)** - [Instructor] Before we can use the [[Ansible]] system roles package developed by Red Hat.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=4)** We need to install it.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=6)** In a terminal type in sudo space yum space install space dash y space R-H-E-L dash system dash roles and hit enter.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=18)** Once that's done, let's get a list of files that were installed.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=21)** Type in clear and then type in RPM space dash qL space R-H-E-L dash system dash roles and hit enter.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=30)** Quite a few files got installed.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=31)** If we scroll up we can see files for timesync, storage, seLinux, postfix, networking and more.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=39)** Bring you a line back now and append space pipe space grep space dash c for count space yml and hit enter.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=49)** Looks like we installed about 146 yamo files in the slash user slash share slash Ansible slash roles slash RHEL dash system dash roles directory.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=61)** We also have a matching documentation directory at slash usr slash share slash doc slash RHEL dash system dash roles.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=69)** Now let's get a listing of the example playbook files by typing in tree space slash usr, slash share, slash doc, slash RHEL dash system dash rolls and hit enter.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=83)** Here we see a list of example playbook files for different services.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=87)** Before we try to use any of these files in an exercise, let's get a list of network interfaces from rhhost2, which we'll need in a moment.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=94)** Type in clear, then type in Ansible space rhhost2.[localnet.com](https://localnet.com) space dash m space setup for the setup module space dash A space and for arguments, single quote, gather underscore subset equals network, space filter equals Ansible underscore interfaces.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=118)** Single quote and hit enter.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=121)** We can see that we have two Ethernet devices enp0s3 and enp0s8.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=128)** Now let's get information on the enp0s3 interface, bring your line back and change the filter to match the interface name.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=135)** In my case it would be Ansible underscore enp0s3, and hit Enter again.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=143)** This will return all of the network information for that interface.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=148)** Now we'll make a playbook file that will utilize this role to make changes to our enp0s3 network interface on rhhost2.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=156)** Change back to your home directory by typing in cd space tilde and hit enter.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=160)** Now type in clear.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=162)** Now type in vim space example dash network dash playbook.yml and hit enter.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=172)** Because this is a yamo file, we'll start out with three dashes going to answer mode by pressing the I key, then press dash, dash, dash and hit enter.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=180)** For the second line, press dash, space, hosts, colon space rhhost2.[localnet.com](https://localnet.com).
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=189)** New Line.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=191)** Tab, vers, colon, new line, tab, tab, network underscore connections.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=199)** Colon, new line, tab, tab, tab, dash, space name colon, enp0s3.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=206)** That'll be our network device.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=208)** New Line.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=209)** Four tabs, state, colon, space down.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=216)** New Line, four tabs again.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=218)** Type colon, ethernet.
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=222)** New Line, four tabs again, interface, underscore, name, colon space, enp0s3 again.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=230)** New Line.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=232)** four tabs again, auto connect.
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=236)** Colon space no.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=239)** New line, four tabs again.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=241)** IP colon, new line, five tabs, dhcp4 colon space.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=248)** Yes, new Line five tabs, auto, six, colon, space, no,
>
> **[4:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=256)** new line.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=257)** One tab, roles, colon, new line, two tabs, dash, space role, colon.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=265)** Now this is where we'll specify the network role of RHEL, dash, system, dash roles.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=270)** So type in a rhel dash system, dash roles.network.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=278)** Make yours look like mine and then save and exit by pressing escape colon, next exclamation mark and hitting Enter.
>
> **[4:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=285)** Now let's run this playbook by typing in Ansible, dash playbook, space dash l space rhhost2.[localnet.com](https://localnet.com).
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=295)** Space dash U, space route, space example, dash network, dash playbook.yml.
>
> **[5:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=302)** This should disable the enp0s3 network interface.
>
> **[5:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=309)** And it did.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=311)** Before you go any further, you probably want to edit the playbook file again and run it a second time to bring the interface back up.
>
> **[5:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=319)** To do so bring your vim line back and hit enter.
>
> **[5:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=322)** Then press z uppercase R to expand the tabs.
>
> **[5:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=326)** Go into insert mode by pressing the I key and then change state to up and change auto connect to Yes.
>
> **[5:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=334)** And then save by pressing escape colon x, exclamation mark and hitting Enter.
>
> **[5:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=339)** Now bring your Ansible playbook line back and hit Enter again.
>
> **[5:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=345)** This should put everything back the way it was.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=347)** You can use any of the yamo files in these documentation directories as example playbook files.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=353)** Now let's go over to the roles directory now.
>
> **[5:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=355)** Type in clear, and then type in cd space, slash usr, slash share, slash, Ansible, slash roles and hit enter, get a long listing by typing in ls space dash L and hit Enter again.
>
> **[6:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=367)** We can see that we have some symbolic links and they point to the RHEL dash system dash roles directories.
>
> **[6:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=373)** Type in tree to see all of the files.
>
> **[6:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=375)** If we scroll up, we can see that some of the role directories have templates, tasks, handlers, variables, defaults and meta subdirectories.
>
> **[6:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=386)** Inside the templates directories we have templates for configuration files for these services.
>
> **[6:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=390)** I would recommend utilizing those roles whenever possible to save time, but also to learn how to create roles.
>
> **[6:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-rhel-system-roles?u=76281980&t=397)** Feel free to make a copy of an entire role and modify it for your own purposes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (8)
> **CLI Commands:** ansible (8), make (4), cd (2), sudo (1), yum (1)
> **Env Vars:** rhel (5), rpm (1)
> **Prerequisites:** install (2), setup (2)
> **URLs:** [localnet.com](https://localnet.com) (3)
> **Tools:** vim (2), terminal (1)
> **File Paths:** playbook.yml (2)
> **Code Identifiers:** ql (1), selinux (1)

#### [Exploring Ansible Galaxy](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=0)** - [Narrator] You might think that it'd be a really great idea to have a central location where people could contribute their [[Ansible]] roles to be shared.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=7)** I think you'd be right.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=9)** For this we have Ansible Galaxy.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=10)** Ansible Galaxy is a site for finding and downloading community developed Ansible roles.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=17)** Roles on Ansible Galaxy can be downloaded and used for free.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=21)** In addition, the Ansible Galaxy site supports rating and reviewing roles as well.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=25)** Giving users a way of determining the quality of the content.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=30)** It's nice to be able to download roles from Ansible Galaxy, but what about other content such as modules and plugins?
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=36)** Ansible supports a package format called Collections just for this purpose.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=40)** With Ansible Galaxy we can install Collections, which include roles, modules, and plugins in one package.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=48)** To see how the Ansible Galaxy website works, open a web browser and browse to galaxy.[ansible.com](https://ansible.com).
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=55)** Since we won't be downloading anything using the web browser you don't have to use the one in your VM.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=59)** You could use a browser that you're using to watch this course.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=63)** The easiest way to find what you're looking for on the Ansible Galaxy site is to click on the search tab on the left.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=69)** Then in the search bar type in Apache.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=74)** Now click on the filters button on the right side of the search bar.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=77)** Now click on the filter by drop down.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=80)** Here we can choose a collection or a role, let's choose role.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=85)** Just to the left of this we can specify what we're matching with more precision.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=90)** Click, the Type drop down.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=91)** Here we can choose whether we're searching for a Cloud Platform, Contributor, operating system platform, or tag.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=98)** Note that we can combine multiple filters, which will show up right below the dropdown.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=104)** If you want to remove one, you can just click the X.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=108)** To the right of the filter box is a best match dropdown, which allows us to change the weighting of the results.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=114)** Next to it we can reverse the sort order.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=117)** You can see that we have about 2,600 results.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=120)** Let's focus on the top result.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=123)** From the short description we can see that it's a role for Apache version two.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=127)** Below this there's some tags giving us some additional information about the role.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=131)** On the right side of this item, we can see it has a rating of 4.8 and that 3.5 million people have downloaded it.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=138)** We could also click on the green button on the right to view the Travis CIA build information.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=144)** Now let's click on Apache, the title of the top item.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=151)** Here we can see the minimum version of Ansible that the role will work on.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=155)** We also see the Ansible Galaxy command line to install the role, which is very helpful.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=160)** Lower on the page is a list of operating system platforms and versions that this role supports.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=166)** Now click on the Read Me button.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=170)** This is the documentation for this role.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=172)** It tells us how to set the variables for various Apache configuration items.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=176)** These variables will be read when Ansible executes the playbooks to configure the control node.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=181)** You will want to configure these items for your environment.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=186)** If, while on the Ansible Galaxy website, you're not certain what you're looking for, you can browse by clicking the home button on the left hand pane.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=193)** From here, you can click on a topic such as Networking.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=197)** Once we click on a topic, we're taken to the search criteria box again, which you can use to refine your search.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/exploring-ansible-galaxy?u=76281980&t=203)** Feel free to use the Ansible Galaxy website to find what you want, and then use the Ansible-Galaxy command to install the roll or collection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (18)
> **CLI Commands:** ansible (18), apache (4), find (2), node (1)
> **UI Navigation:** click on (8), dropdown (2)
> **Prerequisites:** install (3), configure (2)
> **Definitions:** is a  (3)
> **Versions:** 4.8 (1), 3.5 (1)
> **Analogies:** such as (2)
> **URLs:** [ansible.com](https://ansible.com) (1)

#### [Installing roles from Ansible Galaxy](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=0)** - [Narrator] We're going to install a role now from [[Ansible]] galaxy browse to galaxy.[ansible.com](https://ansible.com) and type Apache into the search box.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=10)** Then click on filters and then click on the filter, by and choose role.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=15)** Now click on the top choice.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=17)** If you're using a web browser on your VM, then you can click the copy to clipboard icon to the right of the installation line.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=24)** If you're not using a web browser on your VM, you can type the command in manually.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=29)** Now go to your terminal on our choice one and type in ansible dash galaxy space install space, geerlingguy dot Apache and hit enter.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=46)** We can see in the outputs of the archive was extracted to a hidden directory in my home called dot ansible on the ansible galaxy website.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=55)** It shows which versions of this role are available.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=58)** If I wanted to specify a special version, I would upend the line with a comma and the version number, for instance, for the version three.one, I would bring my line back and add comma V three.one zero, and I'd hit enter.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=72)** If you had a lot of roles to install from ansible galaxy, you could use a requirements file.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=77)** Using a requirements file allows us to install a list of roles in one operation.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=82)** Before we continue take a note of the URL to the Apache roll that we just installed to create a requirements file.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=89)** We would create a file with a text editor that ends in dyml or dyeml Inside the file, we would have a list of rule file locations.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=99)** We can specify the source of the files with the SRC attribute.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=103)** If the roles are stored in a software [[Configuration Management]] system, we'd use the SCM attribute, get an HG are supported.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=111)** We can also specify the version that we want to install with version.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=115)** We can provide a tag value, commit, hash or branch name.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=119)** It defaults to master.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=121)** If we're using ansible galaxy, we can specify the name of the role.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=125)** We can also use this to specify the name of a repository.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=129)** When SRC is an URL.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=132)** For instance, we'd use SRC to specify a role to install from ansible galaxy.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=138)** The next example is similar, but specifies a gihub URL, overriding the name and specifying a tag, neither of these attributes are required.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=147)** We can also specify the URL of a tar on a web server.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=150)** For our package, we could use the URL that we took note of a moment ago.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=155)** The next example installed from [[Bitbucket]] and the last example shows using the [[Git]] protocol and specifying a user.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=163)** Once you have the requirements file created, you specify it with a dash R option.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=169)** Now let's get a list of the roles we've installed type in Ansible dash galaxy space list and hit enter.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=178)** We can see the roles that we just installed via ansible galaxy, but we can also see the roles we installed from the rail dash system dev roles package.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=185)** This command also shows where in the file system they're installed.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=190)** Let's change into the Apache role directly by typing in CD space dot ansible slash roles slash geer and hit your tab key and then use tree to get a listing.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=204)** We can see how this role is structured.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=206)** It has separate files for different operating systems.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=208)** There's a template file for the Apache virtual hosts and variable files for each OS as well.
>
> **[3:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=215)** Installing and collection is almost identical to installing a role except for specifying the collection.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/installing-roles-from-ansible-galaxy?u=76281980&t=221)** Using a collection is as simple as specifying it in your playbook file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (11), [[Configuration Management]] (1), [[Bitbucket]] (1), [[Git]] (1)
> **CLI Commands:** ansible (11), apache (5), tar (1), git (1), cd (1)
> **Env Vars:** url (5), src (3), scm (1)
> **Prerequisites:** install (6)
> **UI Navigation:** click on (3), go to (1)
> **Tools:** terminal (1), bitbucket (1)
> **Analogies:** for instance (2)
> **URLs:** [ansible.com](https://ansible.com) (1)


### 2. Using Ansible in Large Environments

[↑ Back to Table of Contents](#table-of-contents)

#### [Using dynamic inventory plugins](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=0)** - In the EX294 foundations of [[Ansible]] course, we created a static inventory of file.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=5)** That's entails listing the hosts that we want to manage as well as putting them into groups.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=9)** I demonstrated both the INI and the ammo formats.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=12)** Static Inventory files are easy to configure, they don't change, work for smaller environments and are large non-changing environments.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=21)** However, if your environment changes such as if you have hosts that start up and shut down often you'll need to look into ways of managing inventory dynamically.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=30)** A static Inventory file will not be sufficient in this case.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=34)** Dynamic inventory is more complex to configure and stores inventory externally in configurable sources.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=41)** It's good for large infrastructures, or when the infrastructure changes, which is common in [[Cloud Computing]].
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=47)** You can manage dynamic inventory two ways, with inventory plugins or with inventory scripts.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=55)** We'll start by talking about inventory plugins.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=57)** It's recommended that you use inventory plugins over scripts, as they take advantage of the latest changes to Ansible, Ansible shifts With most inventory plugins disabled.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=67)** To use an inventory plugin, we need to white list it in the slash Etsy slash Ansible.cfg file.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=74)** This line also defines an order of preference in this list host underscore list would be used first.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=79)** You can optimize your Ansible system by only including the inventory plugins that you use.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=86)** When you use an inventory plugin, it's important to know the correct name.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=89)** The plugin will dictate the names.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=91)** So check the documentation for it.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=93)** To use the plugin, you will first need to create a file with the correct name.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=97)** For instance, for the virtual box plugin, you'd create a file named vbox.yml or vbox.yaml.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=104)** Inside of the file, you'd add plugin: virtual box.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=108)** This is all according to the documentation for that plugin.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=113)** However, some other plugins may use different rules.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=116)** For instance, the file for the [[Amazon EC2]] plugin, you can name whatever you want.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=122)** As long as it ends with aws_ec2.yml or aws_ec2.yaml This means you could name the file inventory.aws_ec2.yml and it would work fine .
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=136)** To use the inventory plugin specify it when you run the playbook just as you would with a static inventory file.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=143)** You can test the output of the plugin by using the Ansible-inventory command with the --graph option.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=149)** The virtual box plugin was just an example.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=152)** See the official documentation for more information on its syntax.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=157)** To get a list of Ansible inventory plugins use Ansible-doc -t for type inventory -l for list.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-plugins?u=76281980&t=166)** Once you have the name of the plugin you're interested in change the -l to the plugin name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (8), [[Cloud Computing]] (1), [[Amazon EC2]] (1)
> **CLI Commands:** ansible (8)
> **File Paths:** ansible.cfg (1), vbox.yml (1), vbox.yaml (1), aws_ec2.yml (1), aws_ec2.yaml (1)
> **Analogies:** for instance (2), such as (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Env Vars:** ex294 (1), ini (1)
> **Documentation:** the documentation (2)
> **Best Practices:** recommended (1)

#### [Using dynamic inventory scripts](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=0)** - [Instructor] The alternative way to use Dynamic Inventory is by using an inventory script.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=5)** To do so, you need to place an INI configuration file for it in /etc/[[Ansible]].
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=10)** Then you need to either create the inventory script or download one.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=14)** Inventory scripts can be written in any language.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=16)** They gather dynamic inventory data from external sources and display the output in [[JSON]] format.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=22)** For instance, if you're using an [[Amazon EC2]] inventory script, your INI configuration file would be /etc/Ansible/[[Amazon EC2|EC2]].ini.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=31)** I'm not going to show you all of that file as it's long, but it will have configuration items specific to the inventory source.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=38)** For EC2, that might include the region that your VMs are in, as well as authentication token information.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=45)** To run a playbook with Dynamic Inventory, we specify the inventory script instead of an inventory file with a -i option.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=52)** This would use the ec2.py script to create your inventory list.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=58)** Another option is to copy the inventory script to /etc/Ansible/hosts and make it executable so it gets run automatically instead of us having to specify each time we run a playbook.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=69)** It's also important to note that you can specify more than one inventory source by providing more than one -i argument.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=75)** This allows us to combine static and dynamic inventory, or even multiple dynamic sources.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=80)** We may need this if we're using VMs in more than one cloud provider, if the inventory script is a directory, then Ansible will attempt to run the scripts in it if they're executable, or parsed MS Static files if they are not.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=93)** This allows us to store all of our inventory scripts in a directory, and they'll be used automatically.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-dynamic-inventory-scripts?u=76281980&t=99)** To get a list of inventory scripts included in Ansible, visit the Ansible [[GitHub]] directory, where the scripts are stored.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[Amazon EC2|Ec2]] (3), [[JSON]] (1), [[Amazon EC2]] (1), [[GitHub]] (1)
> **CLI Commands:** ansible (6), make (1)
> **Env Vars:** ec2 (3), ini (2), json (1)
> **File Paths:** etc/ansible/ec2.ini (1), ec2.py (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)

#### [Manage parallel playbook execution](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=0)** - [Instructor] To get [[Ansible]] to scale in large environments, you may have to make some changes.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=4)** Understanding these changes is important and will help you tailor your Ansible setup to match your needs.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=10)** When Ansible runs a task it sends the module for each task to the host at the play targets, executes the module and then moves onto the next task.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=18)** It might sound like the Ansible control node would send the task to all hosts at the same time, this is not however the case.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=25)** Ansible runs the tasks and for each host Ansible forks itself and that fork communicates directly with a host in question.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=33)** By default Ansible only forks itself five times.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=37)** Once the task is complete on these five hosts, Ansible sends a task to the next five and executes it there.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=43)** Lastly, Ansible sends it to the last group and executes it again.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=47)** Once that's done it runs the second task.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=51)** This isn't so much a feeling of Ansible, but rather a configuration item that needs to be modified for your environment.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=57)** There are other things that you can do to make Ansible scale for large environments as well.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=61)** If you want to optimize Ansible, you can change the number of forks, apply play-level keywords to fine tune how tasks are run on hosts or use a different strategy plugin.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=73)** to change the number of forks, go into your ansible.cfg file under defaults and change the value of forks to whatever you want for instance, 30.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=81)** You may be wondering why we wouldn't just set this to a high number all of the time.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=85)** The reason we want to keep it small enough, but not too small is that each fork takes CPU cycles in Ram.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=91)** If you set it too high, you may overwhelm your control nodes resources.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=96)** For more granularity and managing parallelism in plays, you can apply play-level keywords.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=102)** The most common of these play-level keywords is serial, which sets a number, percentage or a list of numbers of hosts you want to manage at one time.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=111)** That last one may not be obvious.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=113)** So I will explain it in a moment.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=116)** When we set the serial keyword, Ansible will manage the specified number or percentage of hosts executing the task before starting on the next group of host.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=125)** Note that this is different than just setting the forks to a larger number, it's more powerful, more granular and only pertains to how many hosts we're managing at a time, not how many forks of the Ansible executable we have running.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=138)** If we set serial to five, then it will play on five hosts in the web service group, when the task completes it will play on the next five and so on.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=147)** If you don't want to hardcore the number of hosts you can use a percentage.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=150)** By setting serial to 33% Ansible will run the play on one third of the [[Web Servers]] before moving onto the next third.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=158)** It's worth noting that no matter how small the percentage is, it will run on at least one host.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=164)** The last value that the serial keyword will take is a list of numbers of hosts, let me explain.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=170)** The other value specified linear amounts of servers five on the first run, five on the second run and so on.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=176)** With a list of numbers of hosts, we can change the number on each run.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=180)** In this example, the first batch will run on exactly one host.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=184)** The second will run on five hosts and all batches from the third one on will run on 10 hosts until all hosts have been processed.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=192)** You can also do lists of percentages.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=195)** You might wonder what the purpose of these lists are.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=198)** Imagine using a service that caches such as DNS or web content, the first host that requests a piece of content will force the caching service to download it and handle the next request locally making it faster.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=210)** We could take advantage of this feature.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=212)** Also, we may be accessing a Cloud service where more host processing requests are added depending on the number of requests.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=220)** Lastly, we can mix numbers and percentages.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=223)** These create a lot of possibilities in how we run our plays.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=227)** The second play-level keyword is throttle.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=230)** Throttle can also be used at the blocker task level.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=234)** Throttle limits the number of forks up to the maximum set via the fork setting, in this example, one fork at a time.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=241)** This can be useful to limit tasks that are CPU intensive.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=244)** Another use case is when accessing a service that is rate limited.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=249)** The last item in our list is changing our strategy plugin.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=252)** The default strategy plugin used in the examples so far has been the linear plugin.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=257)** This processes tasks in a linear rate up to the limits that we specified such as five hosts at a time until we're done.
>
> **[4:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=264)** An alternative is a free strategy.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=267)** The free strategy, lets the host run to the end of the play as fast as possible.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=271)** You can set the strategy separately for each play like you see here or globally in the ansible.cfg file.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=278)** It might seem like a good idea to let the plays run as fast as possible, but there can be issues.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=283)** Let's say one task needs the other to complete before it runs.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=287)** In that case, you would want to use the linear strategy.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=290)** However, if you have a bunch of independent tasks that have no dependencies, it may be advantageous to run them all in parallel using the free strategy.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=299)** You don't have to choose your strategy at a global level.
>
> **[5:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=302)** You can break your playbook up into multiple plays.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/manage-parallel-playbook-execution?u=76281980&t=304)** One may use a free strategy and the next would use a linear strategy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (17), [[Web Servers]] (1)
> **CLI Commands:** ansible (17), make (2), node (1)
> **Analogies:** such as (2), for instance (1), imagine (1)
> **Env Vars:** cpu (2), dns (1)
> **File Paths:** ansible.cfg (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Prerequisites:** setup (1)

#### [Performance tuning Ansible](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=0)** - [Instructor] In addition to creating more [[Ansible]] forks and running tasks in parallel, we can performance-tune other parts of Ansible.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=7)** For instance, we can optimize fact gathering or even turn it off.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=11)** Optimize SSH with pipelining and multiplexing, or even replace SSH.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=16)** Let's start with fact gathering.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=18)** By default, Ansible gathers many facts as it can for each host, which takes time.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=24)** Often, you don't need all of the facts that it gathers.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=27)** This problem has multiple solutions, including disabling fact gathering, enabling only partial fact gathering, or using fact caching.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=36)** We can disable fact gathering in its entirety by setting the value of gather_facts to no.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=42)** This will result in a large speed increase.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=44)** However, it may not be the best solution as you won't have access to any of the hosts' facts.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=50)** Note that a lot of playbooks use facts, so you might want to disable some, but not all.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=56)** To only gather the minimum facts, set gather_facts to !all.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=61)** This will turn off most of all facts, but still gather a minimum.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=65)** If you want to turn on more specific facts, such as network and virtual, you can specify them.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=69)** This example will return network and virtual facts along with the minimal facts from before.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=75)** We can also be more specific and turn off only certain sections.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=79)** If our hosts are virtual, we can feel safe in turning off [[Hardware]] facts, which take a long time to gather.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=84)** And in a virtual environment, we don't have a lot of hardware anyway.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=88)** This example disables hardware globally in the ansible.cfg file.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=93)** Another strategy that can help, especially if you need to gather all facts is fact caching.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=98)** In this case, the facts are cached for a specified amount of time, and our control host does not need to gather them each time a playbook is run.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=106)** There are multiple different fact caching backends, but in this case, we're using a [[JSON]] file.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=111)** The fact caching timeout is in seconds.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=113)** In this example, it's set to 7,200 seconds or two hours.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=119)** Possible cache backends include JSON formatted files, Memcached [[Databases]], memory, or RAM backed, be aware, this is not persistent, [[MongoDB]] for MongoDB databases, pickle for Pickle formatted files, [[Redis]] databases, and lastly, yaml formatted files.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=137)** To get a list of Ansible fact cache plugins, use the ansible-doc command.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=141)** Once you have a list, you can bring up more information by specifying the plugin by name.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=147)** Ansible uses SSH heavily for communication with the managed nodes.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=151)** We can make SSH faster a couple of ways, including SSH pipelining, SSH multiplexing, modifying SSH preferred authentication types, and lastly, we can even replace SSH.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=164)** To turn on SSH pipelining, change the value of pipelining in the ansible.cfg file to True.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=170)** It's worth noting that SSH pipelining doesn't work if requiretty is on in the /etc/sudoers file.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=177)** Originally, requiretty was a security measure, disabling sudo, if the user was not on a real TTY.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=184)** A lot of distributions do not have it turned on by default anymore.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=188)** If it's not already disabled in the etc sudoers file, we can disable it by adding defaults space exclamation mark requiretty.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=196)** That would be system-wide.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=197)** If you want to disable it for one user, just specify them right after the defaults item.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=203)** SSH multiplexing can help pick up a bit more speed.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=206)** The idea is that the connection stays open.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=209)** By default, this is set to one minute.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=212)** This means that if a playbook is taking a long time to finish, the SSH session will end and SSH will have to connect back up in the middle of a playbook run.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=220)** We can set this to a much longer amount of time if we want.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=223)** Nothing is free and there can be caveats with a very large control persistent number.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=228)** If your server IP address changes while the SSH connection is still open, then it will try to send data to the old IP address because the socket is still alive.
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=236)** This setting is in the ansible.cfg file.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=240)** The next thing we'll look at is configuring a preferred authentication method.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=244)** By setting the preferred authentication method to public key, it will try this first, instead of trying other types of authentication before settling on keys.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=253)** The last item I'll mention, you could just replace SSH with Mitogen, a third party piece of software that replaces Ansible's shell-centric way of doing things with a pure [[Python (Programming Language)|Python]] version that is invoked by highly efficient remote procedure calls to persistent interpreters tunneled over SSH.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=270)** Mitogen promises an increase in speed from 125% to 700%.
>
> **[4:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=276)** I won't spend any time on the solution and will leave this up to you to try.
>
> **[4:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=280)** I did want to mention it, so you have something to try if you're having speed issues.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=284)** See the Mitogen website for more information.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=288)** I'd like to mention one last thing.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=289)** To make sure your optimizations are working, you want to turn on the profile_ tasks callback in your ansible.cfg file.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=297)** This will output time profile information when you run your playbooks.
>
> **[5:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=301)** This will help a lot in deciding which optimizations work and which don't.
>
> **[5:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/performance-tuning-ansible?u=76281980&t=305)** After optimizing, you can turn the callback off by deleting it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (11), [[Hardware]] (3), [[Databases]] (3), [[JSON]] (2), [[MongoDB]] (2)
> **CLI Commands:** ssh (16), ansible (11), make (2), sudo (1), python (1)
> **Env Vars:** ssh (16), json (2), ram (1), tty (1)
> **File Paths:** ansible.cfg (4)
> **Code Identifiers:** gather_facts (2)
> **Analogies:** for instance (1), such as (1)
> **Warnings:** note that (1), be aware (1)
> **Definitions:** means that (1)


### 3. Templating with Jinja2

[↑ Back to Table of Contents](#table-of-contents)

#### [Templating with Jinja2](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=0)** - [Instructor] As we learned in the ex294 using [[Ansible]] playbooks course.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=4)** Ansible has various language constructs in its playbooks such as variables lists and arrays, dictionaries, loops and conditionals.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=13)** Jinja2 is used for templating.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=16)** It also has constructs such as variables, lists and arrays, dictionaries, loops and conditionals.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=23)** That should sound familiar.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=25)** You might be wondering why there's such an overlap in the Ansible playbook language engine to two and why does Ansible use both? That is a valid question.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=33)** So let me explain the language constructs in playbooks are for deciding how to manage a systems configuration.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=40)** We need variables to hold information about a host.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=43)** If we have many hosts, we will need a list or array of them.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=47)** If we need to store specific data about a host, we'll need a list of key value pairs, which is a dictionary.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=54)** We may also want to loop through items such as package names to install so we don't have to write install tasks for each and every package. We would need conditionals so we can install or configure a host differently depending on the operating system type, version or other pieces of data.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=70)** All of these things are specific to making decisions about the [[System Configuration]].
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=75)** Jinja2, is a language designed for templating files.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=79)** What I mean by that is this designed to create static files based on variable content.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=84)** To use it, you create a template containing variables and control structures and process it.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=90)** The result is a text file of you're making.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=92)** This is similar to how [[PHP]] works for webpages.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=95)** It creates static [[HTML]] from code, variables and database content.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=99)** Jinja2 creates configuration files from templates containing code and variables, in short Jinja2 lets us create specific text files using generic templates. To make very simple substitutions, you will only need to have variables in your templates, but having lists or arrays as well as dictionaries, will allow you to create much more complex text files.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=122)** Adding in conditionals and loops will make those template files even more powerful Because Jinja2 creates text files we could create any type of text file with it.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=132)** We could create HTML webpages, XML files, system configuration files, and so on.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=138)** Jinja2 is very powerful. If you want to study it in depth, you can visit the Jinja2 website for more information.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=145)** However, for the purpose of Ansible, you will not need to know every detail about Jinja2.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=151)** Having said that, any amount of time you spend learning YAML and Jinja2, will pay off in the future even if you never use Ansible again.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=159)** Both formats are very popular and are used for many applications, as such YAML and Jinja2 are transferable skills.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=167)** Even other [[Configuration Management]] systems such as SaltStack use both of them.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=171)** In short, when making host configuration decisions use Ansible playbooks. When creating text files to be deployed, to manage hosts use Jinja2.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=182)** Now I'll walk through a very simple template.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=184)** This YAML file and the associated Jinja2 files are both in this chapter is exercise directory.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=190)** In rh host2 ch1nge to this chapter's exercise files directory, and load the YAML file into VIM.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=198)** To load it into VIM type in VIM space SimpleTemplate.YML.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=203)** Simple template is in camel case and hit Enter.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=207)** Expand the Tabs by pressing Z uppercase R.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=211)** Look over this file, while I explain it with slides.
>
> **[3:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=215)** First, we're specifying all hosts in our inventory.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=218)** Then we're setting the username variable to user one.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=221)** I've named this variable camel case. So it will be unique.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=225)** We have one task named simple template example, which uses a template module to deploy a file from a Jinja2 template.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=233)** The Jinja2 template is in the same directory as the SimpleTemplate.YML file, so we don't have to specify a path.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=239)** The template file is called SimpleTemplate.J2.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=244)** The destination file will be created in slash home slash the user's name in the username variable in our case, it's user one slash welcome.TXT.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=253)** So it's going to create a file in the user ones home directory.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=257)** The owner of the file should be set to user one as well as the group owner and the permissions will be 0644.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=265)** Now let's look at the Jinja template file, press Escape, colon Q exclamation mark and hit Enter.
>
> **[4:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=272)** Now type in VIM space, SimpleTemplate in camel case dot J2 and hit enter. It can't get much simpler than this.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=281)** We have one actual line that does something.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=284)** It says, hello, inserts the value of the username variable, and then follows up with welcome.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=289)** Exit by pressing Escape, colon Q exclamation Mark and hitting Enter.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=294)** Now let's run the playbook and check the results.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=296)** You can run the playbook from this directory, but you will need to provide the path to your inventory file.
>
> **[5:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=301)** My inventory file from the previous courses is in tilde slash Ansible dash files.
>
> **[5:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=305)** So I would type in Ansible dash playbook space dash I for inventory space tilde slash Ansible dash files slash hosts space SimpleTemplate.YML.
>
> **[5:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=321)** Simple template is in camel case and hit Enter.
>
> **[5:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=325)** This should execute fine. Now let's look at the results.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=329)** Type in ssh space rh host2 space double quote cat space tilde slash welcome.TXT double quote and hit enter. And there your have it.
>
> **[5:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/templating-with-jinja2?u=76281980&t=341)** Our very simple Jinja template created this file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (10), [[System Configuration]] (2), [[HTML]] (2), [[PHP]] (1), [[Configuration Management]] (1)
> **Env Vars:** yaml (4), vim (4), yml (3), html (2), txt (2)
> **CLI Commands:** ansible (10), make (2), php (1), ssh (1), cat (1)
> **Exercise Files:** template (12), exercise files (1)
> **File Paths:** simpletemplate.yml (3), welcome.txt (2)
> **Definitions:** is a  (4), is called (1)
> **Analogies:** such as (4), similar to (1)
> **Tools:** vim (4)

#### [Using variables with Jinja2](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=0)** - In the EX294 Using [[Ansible]] Playbooks course, we discussed variables in playbooks.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=6)** I will give a quick overview here so we can discuss how to use variables in templates using Jinja 2.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=12)** We can pass variables and their values to playbooks on the command line using the -e argument.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=17)** We can set variables in our inventory files.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=21)** We can set variables for hosts in the host underscore virus directory by creating an INI or YAML file for each host.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=28)** We can set variables for groups in the group underscore virus directory by creating an INI or YAML file for each group.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=36)** Inside of the files, and either the host underscore virus or group underscore virus directories, we have variables that are applied to either single hosts or groups of hosts, depending on the directory.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=47)** We can also define variables in a playbook.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=50)** In this example, in our virus section, we've assigned the value of hello world to the message variable.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=56)** We're using the debug module to print it on the screen.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=59)** You can use this method to troubleshoot variable contents easily.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=63)** Note the examples in this video are in this chapter's exercise files directory, see the overlay for the names.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=71)** We can also have ordered array variables.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=73)** In this case, our message array has five items, using debug to output to the screen is exactly the same as a single variable.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=82)** We can also access one item if we wish by specifying the index number inside square brackets.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=88)** This is very similar to many programming languages.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=91)** This will output only hello on the screen.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=94)** Variables can contain dictionaries for more complex datasets.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=98)** In this example, we have a dictionary named message and nested inside as bob with both greeting and salutation inside of it.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=106)** We are using the debug module to print the value of message bob greeting and then message bob salutation.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=113)** An alternative syntax uses dots for each hierarchy level instead of square brackets.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=119)** This syntax can cause conflicts with [[Python (Programming Language)|Python]] in certain situations, so I prefer the square brackets, even if the dotted notation is cleaner.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=128)** You can also assign the output of a command to a variable by registering it, and then using that content in your templates as well.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=135)** Here, we're setting a variable named interface to enp0s3.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=140)** Then we run the ipconfig command using the shell module while passing the interface name as an argument.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=146)** The output of this, we're registering to the CMD out variable.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=150)** We then use debug to print the value of CMD out but split each line by adding a new line character to it.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=157)** It might be worth noting that you can also capture the output of the template module into a registered variable using the same method.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-variables-with-jinja2?u=76281980&t=164)** Now that we have the foundations of setting variables, creating arrays, creating dictionaries and accessing them all through Jinja two and our playbooks, we can move on to using Jinja two for templating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** ini (2), yaml (2), cmd (2), ex294 (1)
> **CLI Commands:** ansible (1), python (1)
> **Exercise Files:** exercise files (1), template (1)
> **Cross-References:** we discussed (1)
> **Tools:** command line (1)
> **Analogies:** similar to (1)
> **Warnings:** troubleshoot (1)

#### [Jinja2 syntax](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=0)** - [Instructor] Every example I've shown you so far, use the double curly braces around variable names.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=5)** Now let's talk more about Jinja2 syntax.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=8)** The double curly braces are used for expressions to print to the template output.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=12)** This would include variables and key value pairs.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=15)** It's important to note that the double curly braces are not part of the variable, but rather the print statement.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=21)** If you access variables inside of other tags, don't put the braces around them.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=26)** If you have a variable that may include a greater than symbol, ampersand, or double quote, you should escape it.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=34)** You can escape a variable by piping it through the e filter.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=37)** Pay close attention and you'll see me using this later in other examples. The double curly braces are also used for literals like text strings, integers and floating-point numbers.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=49)** We would also use the double curly braces for a list of data that change, tuples of data that don't change and dictionaries.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=57)** We can also have a list of tuples.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=61)** We can also use double curly basis for true and false.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=65)** Perhaps the most obvious use for expressions would be for mathematical expressions.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=70)** Mathematical expressions can also be used on strings.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=74)** For example, this would print the equal sign 80 times.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=78)** We can also use them for comparisons, such as equality, inequality, greater than, greater than or equal to, less than, and less than or equal to.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=89)** We use the double curly basis for a Boolean Logic and if statements, filtering and if expressions, which I'll get to in a moment.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=97)** We can express a Boolean and, which is true if the left and right operand are true.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=103)** Boolean or, which is true if the left or the right operand are true.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=108)** Not, which negates the statement and parentheses which group an expression.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=114)** Note that usually expressions use the prefix notation when negating, for instance, not apple or pear.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=121)** However, the is and in operators support negation using an infinite notation, such as apple is not pear or apple not in pair.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=131)** For the is and in operators, we use a more spoken language order.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=136)** We can also express conditionals with if expressions.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=140)** If expressions provide inline conditionals in expressions.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=143)** Note that this is a bit different than the if statements we'll talk about in a minute.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=148)** Lastly, variables and double curly braces can be modified by filters.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=153)** The variable name and the chosen filter are separated by a pipe symbol.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=157)** Multiple filters can be changed with one applying to the next, for example, this will strip all [[HTML]] tags and then upper case the output.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=166)** Filters that accept arguments have parentheses around their arguments, just like a function call.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=170)** For example, this will join items of a list called names with commas. To get a list of available filters see the Jinja2 website.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=180)** We use curly brace percent for statements, within these statements we can put control structures such as loops. In this example, I am looping through a list.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=189)** Looping through a dictionary simular, you specify the dictionary and then loops of the key value pairs.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=195)** Inside the loop you can use either the key or the value.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=200)** You can filter the sequence during iteration, allowing you to skip items. The following example skips all of the users which are hidden.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=208)** Jinja2 does support nested loops, but you'll want to refer to the Jinja2 documentation for more information if you require this functionality.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=217)** Just as we can use filters to modify the contents of variables, we can use filters in statements.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=221)** In this example, the text that we would place within the filter statement is modified by the upper filter.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=228)** We can make variable assignments and statements as well.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=232)** Jinja2 has the equivalent to programming functions, which it calls macros.
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=236)** You may not need this functionality in your [[Ansible]] playbooks, at least not at first, but it's nice to know macros exist.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=242)** So if the need arises in the future, you know where to look.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=246)** Earlier, we talked about inline if expressions.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=249)** For more complex logic, we have if statements.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=253)** If statements support else if and else as well.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=257)** For texts not to be included in the template output, we use comments. We use a curly brace and a pound symbol together.
>
> **[4:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=264)** Comments can span multiple lines.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=267)** That covers most of the Jinja2 syntax that you'll need for Ansible playbook templating.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/jinja2-syntax?u=76281980&t=271)** Jinja2 does have functionality beyond what we covered, which you can find on the Jinja2 website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (2), [[HTML]] (1)
> **Analogies:** for example (3), such as (3), for instance (1), just like (1)
> **CLI Commands:** ansible (2), make (1), find (1)
> **Warnings:** note that (3)
> **Cross-References:** we talked about (1), we covered (1)
> **Exercise Files:** template (2)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)

#### [Using control structures in Jinja2](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=0)** - [Instructor] I've included a couple of Jinja2 template files in this chapter's exercise files directory.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=5)** In a terminal change to that directory and view etchosts.j2 with the less command.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=10)** The reason we're going to use less is because we'll want to copy and paste it without the indent characters we have turned on in Vim.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=17)** Type in less space etchost.j2 and hit Enter.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=22)** Now let's talk about what's happening in this file.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=25)** First of all, you'll see we're using curly braces and percent symbols for Jinja statement execution in addition to double curly braces for expression evaluation.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=35)** Range is a global function.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=37)** This is similar to what the sequence command does in Bash.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=40)** In our case, it will create a list of numbers from 201 to 221.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=46)** The for loop will loop through the numbers in the range, assigning each number to the IP variable.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=51)** Inside the loop we have an IP version four address with the IP variable taking up the last octet.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=57)** Then we have a space and our host name followed by an expression.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=62)** Inside the double curly braces of the expression are several things.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=65)** The format filter using the IP variable with a mathematical expression as an argument.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=71)** In the mathematical expression we're subtracting 200 from whatever number is in the IP variable, then we're formatting it with the %02d [[Python (Programming Language)|Python]] formatting string, which aligns the output to two digits.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=85)** We use this output for our incremented host name.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=88)** We also use it again for the fully qualified domain name.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=92)** You don't have to create a Playbook in a Jinja2 template to practice this.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=96)** There's a Jinja2 parser on the internet.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=99)** In a web browser, type in the address bar: [https://cryptic-cliffs-32040.herokuapp.com](https://cryptic-cliffs-32040.herokuapp.com)
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=111)** The top left box is the template box where you'd type in your Jinja2 template code.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=117)** The bottom left box is the values box.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=119)** You'd input either [[JSON]] or YAML data here, you will also want to check the correct box in the top right to match.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=127)** The right hand box is the render box.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=129)** It will show the results, go back to your terminal and copy the text of the etchost.j2 file and paste it into the templates box overriding the text that was there.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=140)** Now click convert.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=143)** You can see the output on the right pane.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=146)** If you've accidentally deleted the text in the values box, you'll want to put something back there, even if you don't use it, otherwise it might not work.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=156)** Now let's do something a bit more complex.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=158)** In this chapter's exercise files, I have two more files we can use.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=163)** The first is cars.yml let's view that with less.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=166)** Press Q and then type in less space cars.yml, and hit Enter.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=172)** This is a YAML file that has a couple of dictionaries in it.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=175)** There's a list of people, Bob, Ted, Sally, Brenda, Luigi and Tim.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=180)** For each user, we have a fav_car item and the value is their favorite car.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=186)** Now copy and paste this data into the values box.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=190)** Once again, overriding the text that's there.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=195)** Since this is a YAML file, we'll also want to click on YAML.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=199)** Now let's open the cars.j2 template file.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=202)** Go back to your terminal, press Q to quit, and then type in less space cars.j2 and hit Enter.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=209)** This is a much shorter, but more cryptic file.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=212)** Copy and paste this to the template window.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=217)** Once again, overriding the content that was there.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=220)** Now let's talk about what this does.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=224)** In the first line, we set a dictionary named car_count.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=228)** This is a counter.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=229)** It may seem odd to use a dictionary for this purpose.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=232)** The reason is Jinja2 doesn't let you modify a variable from within a loop that set from outside of a loop.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=238)** So this is a solution, but not the only one.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=241)** The second line is our for loop.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=243)** We're going to loop through the car's dictionary and for each one, assign it to the car variable.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=249)** Notice that in the third line, we're using loop.index, which we did not create.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=253)** Loop indexing is provided automatically with Jinja2.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=257)** loop.index is the current iteration of the loop, indexed starting from one.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=262)** If you want it to start from zero use loop.index0, the other built in loop indexes are loop.revindex, which is the number of iterations until the end indexed from one, loop.revindex0, the same by index from zero.
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=277)** loop.first is true if it's the first iteration and loop.last is true, if it's the last iteration.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=284)** And lastly loop.length is the number of times in the sequence.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=289)** The for-else line checks, if each person's favorite car matches the car name.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=294)** If so it bumps the counter, then it outputs how many people like each car and some details about each car.
>
> **[5:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=301)** Now that we have our template file, as well as the values file, click on convert.
>
> **[5:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=306)** You should be able to see the output of the Jinja2 file using the values file we pasted.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=311)** You can use this webpage to practice using loops, if conditionals, lists, dictionaries and most everything we've talked about in this chapter, I would encourage you to paste in Jinja2 code to test it here.
>
> **[5:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-control-structures-in-jinja2?u=76281980&t=322)** Once you have certain routines working, put them into template files and call them with Playbooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[JSON]] (1)
> **Exercise Files:** template (8), exercise files (2)
> **Definitions:** is a  (6)
> **Env Vars:** yaml (4), json (1)
> **Tools:** terminal (3), vim (1), bash (1)
> **UI Navigation:** click on (2), open the (1)
> **File Paths:** cars.yml (2)
> **Code Identifiers:** fav_car (1), car_count (1)


### 4. Managing Software with Ansible

[↑ Back to Table of Contents](#table-of-contents)

#### [Modules related to software management](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=0)** - [Instructor] Installing and managing software is one of the main tasks involved in configuring hosts.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=5)** As such, there are just under 50 different [[Ansible]] modules designed to install operating system software packages.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=11)** There are another 12 modules for installing programming language packages, such as RubyGems and [[Python (Programming Language)|Python]] dependencies.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=18)** There are also modules to deal with [[Windows]] software packages, as well as modules for installing packages on many types of Unix, such as AIX, HPUX, And Solaris.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=27)** In addition, there are auxiliary modules for installing [[Linux]] software repository files, and for managing keys for verifying package integrity.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=36)** I can't go over all of these modules in one video, but here's a quick short list of Linux software management modules, including apt for installing Debian packages, dnf for Fedora, yum for older Fedora and enterprise Linux systems, pacman for Arch Linux, slackpkg for Slackware packages, and zypper for SUSE packages.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=57)** Modules specific to Unix-based operating systems would include installp for AIX, pkg5 for Solaris, swdepo for HPUX, pkgin in for netBSD, pgkng for FreeBSD, and openbsd_pkg for Open BSD packages.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=76)** There are also modules for distribution in specific packages, such as flatpak, snap, and homebrew for installing packages on macOS and Linux hosts.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=86)** Most of these modules support the same basic functionality across operating systems such as installing, reinstalling, updating, removing, verifying, and checking checksums.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=96)** Not all package managers work the same, so each module handles package-manager specific options.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=102)** For instance, the apt module has an option called force apt-get, where you can force Debian to use apt-get to install packages instead of letting aptitude do the heavy lifting.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=112)** This argument is specific to apt.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=116)** However, if all you want to do is install and remove packages, you may be able to get along with the Ansible package module.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=122)** The package module is a generic module that installs, upgrades, and removes packages using the underlying OS package manager.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-software-management?u=76281980&t=130)** For Windows targets, use the win_package module instead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[Ansible]] (2), [[Windows]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** apt (5), ansible (2), python (1), dnf (1), yum (1)
> **Env Vars:** aix (2), hpux (2), suse (1), bsd (1)
> **Analogies:** such as (4), for instance (1)
> **Code Identifiers:** netbsd (1), openbsd_pkg (1), macos (1), win_package (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Managing packages in playbooks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=0)** - [Narrator] Let's take a look at some examples on how to use various [[Package Management]] modules to install the net tools package using the generic package module.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=7)** It would look like this.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=9)** The module name is package.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=10)** The package name is net-tools and the package state is present.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=15)** You could use this task on just about any OS as you're not specifying the package manager and the name of the package is consistent.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=22)** However, there is a problem with the package name changes between distributions.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=26)** This is the case with the Apache package.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=28)** To install Apache using the yum module on a redhat based system.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=31)** It would look like this.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=32)** The module name is yum.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=34)** The package name is httpd and the package state is present.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=39)** To install a package using the apt module.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=41)** I need debian basis.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=42)** Then what would look like this.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=44)** The module name is ABT.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=46)** Notice the package name is Apache2, which is different than a redhat.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=49)** And the package state is present.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=52)** We may want to shorten our playbook and install multiple packages at the same time, for this we could place them in a loop.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=58)** In this example, we're installing the httpd and rsyslog packages in one [[Ansible]] task.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=64)** By using the item variable for the package name, you can install packages using a loop.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=70)** It does work.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=71)** However, using a list is better.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=73)** This will pass the list of packages to the yum module, and it will calculate dependencies once and install all packages in the same yum operation.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=81)** I highly recommend that you take advantage of this as it will always save time if installing more than one package.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=86)** And in the case of installing a long list of packages, it will save a lot of time.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=91)** You may also want to use the results of a package installation for other tasks.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=95)** In this example, we're assigning the output of the installation process to the install, underscore output, registered variable.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=102)** We can then use the debug module to print the output.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=105)** We could also use this output with other things such as conditionals.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=109)** We can use this method with loops as well.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=112)** I mentioned that if you have two different package managers, you can use the generic package module.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=116)** However, you have a problem.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=118)** If the distributions use different package names, which is often the case, there are several solutions to this problem.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=124)** One solution is including a conditional.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=127)** This is the solution that most people go to first, as it's easy to visualize, all we're doing is using a wind conditional to decide which package to install and which package manager to use.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=137)** However, I caution you against using this method throughout your playbooks.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=141)** The problem is that we end up having a conditional for every single thing we do.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=145)** Every time we install a package or start a service, we need a conditional for every single OS type we're using.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=150)** This gets very difficult to manage and ends up with a lot of duplicate boilerplate code.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-packages-in-playbooks?u=76281980&t=155)** This method is perfectly fine to use in moderation though.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Package Management]] (1), [[Ansible]] (1)
> **Prerequisites:** install (9)
> **CLI Commands:** yum (4), apache (2), apt (1), ansible (1)
> **Env Vars:** abt (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** boilerplate (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Implementing a playbook to manage software](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=0)** - [Instructor] Let's talk about a different, more abstract solution to the problem of package names changing between distributions.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=6)** We're going to use a variable for the package and service names.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=10)** We're going to add a condition to our site.yml file that loads a variables file if the host is CentOS.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=15)** Then we'll create the distribution specific variable files and place variables for the name of the packages and services in it.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=21)** We'd have a file for each distribution here.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=25)** Then we'll create tasks in our webserver role that will install packages based on the variable contents.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=29)** For instance on CentOS we've installed the httpd package, and on Debian, we'd install the apache2 package.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=37)** Lastly we'll create handlers that start Apache, add firewall rules, and then start the firewall.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=43)** In a terminal in our rhhost1, change to the [[Ansible]]-files and edit the site.yml file.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=50)** Press z + R to expand the folds.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=54)** Go into insert mode by pressing the i key and add a new task near the top.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=59)** Type in - hosts: all new line.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=63)** Tab tasks: new line.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=67)** Tab Tab - name: Space and we're going to call it Set distribution variables new line.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=76)** Tab Tab Tab include_vars: "os_{{ ansible_facts['distribution'] }}.yml"
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=107)** New line.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=109)** # Tab Tab - debug: new line.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=115)** var: apache_pkg This task will include the variables in a file named os_ followed by the distribution type, and ending with .yml.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=129)** In the case of CentOS it will be os_CentOS.yml.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=132)** For Debian managed hosts, it will try to load os_Debian.yml.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=137)** I've added two commented out debug lines, if you want to make sure that your new variables are getting parsed, then uncomment these lines and insert the variable name and it will print it on the screen.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=147)** This is a simple troubleshooting measure to ensure that the variable is getting set.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=152)** Save and exit by pressing Escape, :x!
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=155)** and hitting Enter.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=156)** Now make an ansible-files/vars directory if you don't already have one.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=160)** Type in mkdir vars and hit Enter.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=163)** Now let's make a variables file for CentOS.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=165)** Type in vim vars/os_CentOS with a capital C and a capital OS .yml.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=174)** And hit Enter.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=175)** Go into insert mode by pressing the i key, and add ---, because it's a yml file, Space, #, and the comment will say CentOS specific variables.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=190)** New line.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=190)** Backspace apache_pkg: httpd that's the name of the Apache package on CentOS.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=201)** New line.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=202)** apache_svc: httpd that is the name of the Apache service on CentOS.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=212)** If you have any Debian hosts, you create an os_Debian.yml file and put the same variables in it but with the proper package and service names.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=220)** Save and exit by pressing Escape :x!
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=223)** and hitting Enter.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=225)** Now we'll use this variables in our webservers role.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=228)** Go to the webservers task directory.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=230)** Type in cd roles/webservers/tasks and hit Enter.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=237)** Let's edit the main.yml file.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=239)** In the ex294 using Ansible Playbook's course, we have the main.yml file include install_apache.yml.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=247)** We're going to use a different strategy now, so you can delete that one line and we won't need the install_apache.yml file either.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=254)** Type in vim main.yml and hit Enter.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=258)** And go ahead and delete the include line.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=261)** Go into insert mode and then - name: Space, and for the name of the task, Install apache.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=270)** New line.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=271)** Tab, package is the module we'll use, new line.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=275)** Tab, Tab, name: "{{ apache_pkg }}"
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=288)** That's the variable that we just set in the other file.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=291)** New line.
>
> **[4:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=292)** Tab, Tab.
>
> **[4:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=293)** state: latest New line.
>
> **[4:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=298)** Now we're going to add another task, - name: and the name of this one will be Enable apache on system boot.
>
> **[5:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=306)** New line.
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=308)** Tab, and we'll use the service module.
>
> **[5:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=309)** Type in service: New line.
>
> **[5:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=313)** Tab, Tab, name: "{{ Space, and we'll use our other variable, apache_svc }}" That's the name of the Apache service in our variables file.
>
> **[5:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=330)** New line.
>
> **[5:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=331)** Tab, Tab.
>
> **[5:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=332)** enabled: yes This doesn't start the service, but only changes the configuration.
>
> **[5:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=339)** New line.
>
> **[5:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=340)** Now we'll set up our handlers.
>
> **[5:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=342)** Tab, notify: New line.
>
> **[5:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=345)** Tab, - start apache This is the name of the handler that we're going to create in a minute.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=353)** New line.
>
> **[5:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=354)** Tab, - setup firewalld New line.
>
> **[6:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=361)** Tab, - reload firewalld You want to remember these names because we're going to use 'em in a minute.
>
> **[6:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=370)** Now save and exit by pressing Escape :x!
>
> **[6:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=374)** and hitting Enter.
>
> **[6:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=375)** Now we'll want to set up our handlers.
>
> **[6:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=377)** Change to the webservers handlers directory by typing in cd ../handlers and hit Enter.
>
> **[6:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=385)** And we'll load the main.yml file into vim by typing in vim main.yml and hit Enter.
>
> **[6:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=390)** Go into insert mode, add three dashes because it's a yaml file, and then for our first handler we'll type in - name: And if you remember, the name was start apache.
>
> **[6:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=402)** This has to match the other file.
>
> **[6:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=404)** New line.
>
> **[6:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=405)** Tab, service: New line.
>
> **[6:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=408)** Tab, Tab, name: "{{ Space, and the variable for the Apache service, apache_svc }}" New line.
>
> **[7:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=424)** Tab, Tab, state: started For our second handler, - name: and we named it setup firewalld.
>
> **[7:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=437)** New line.
>
> **[7:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=437)** Tab, firewalld: that's the name of the module.
>
> **[7:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=441)** New line.
>
> **[7:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=442)** Tab, Tab, service: http That's the port we'll open.
>
> **[7:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=447)** New line.
>
> **[7:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=448)** Tab, Tab, permanent: true New line.
>
> **[7:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=453)** Tab, Tab, state: enabled Our last handler we'll name reload firewalld.
>
> **[7:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=461)** So type - name: reload firewalld
>
> **[7:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=470)** New line.
>
> **[7:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=471)** Tab, service: That'll be the service module.
>
> **[7:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=474)** New line.
>
> **[7:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=475)** Tab, Tab, name: And the service name was firewalld.
>
> **[8:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=480)** New line.
>
> **[8:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=481)** Tab, Tab, state: restarted In this file we have three handlers, one for starting Apache, one for opening the HTTP port in the firewall, and one for reloading the firewall.
>
> **[8:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=494)** We called all three in that order in the webservers task file.
>
> **[8:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=497)** Save and exit by pressing Escape :x!
>
> **[8:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=501)** and hitting Enter.
>
> **[8:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=503)** Now let's run the playbook.
>
> **[8:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=504)** Go back to your ansible-files directory by typing in cd ~/ansible-files and hit Enter.
>
> **[8:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=509)** And run it by typing in ansible-playbook -i hosts site.yml and hit Enter again.
>
> **[8:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/implementing-a-playbook-to-manage-software?u=76281980&t=521)** If you have any errors, fix them now before moving on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6)
> **CLI Commands:** apache (10), ansible (6), make (3), cd (3), mkdir (1)
> **File Paths:** main.yml (5), site.yml (3), os_debian.yml (2), install_apache.yml (2), os_centos.yml (1)
> **Code Identifiers:** apache_pkg (3), apache_svc (3), install_apache (2), include_vars (1), ansible_facts (1)
> **Prerequisites:** install (3), set up (2), setup (2)
> **Tools:** vim (4), terminal (1)
> **Env Vars:** http (1)
> **Cross-References:** go back to (1)


### 5. Managing Users with Ansible

[↑ Back to Table of Contents](#table-of-contents)

#### [Modules related to user management](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=0)** - [Instructor] Operating systems are not that useful without users.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=3)** Managing users with [[Ansible]], is fairly straightforward.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=7)** For most systems, we can manage users using the Ansible user module.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=11)** To manage groups on [[Linux]] and Unix hosts, use the group module.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=15)** If your managed host is [[Windows]], you'll want to use the win_user module, and to manage groups on Windows, use the win_group module.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=24)** To manage group membership on Windows, use the win_group_membership module.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=29)** Although you can manage users on Mac OS X 10 using the user module, you may want to use the osx_defaults module to manage Mac OS user defaults.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=40)** There are many specific modules for managing user accounts on network devices as well.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=44)** For instance, for a Big IP devices, use bigip_user.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=49)** For Huawei CloudEngine switches, use esce_snmp_user.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=56)** And there's modules for Lenovo CNOS devices as well.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=59)** EOS devices, use eos_user, and for Cisco iOS devices, use iOS_user, as well as Juno devices can use junos_user, and there are much more.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=71)** There are specific modules for local services, including managing the HT password file that both Apache and Nginx use.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=78)** For the free IPA identity management service, use ipa_user.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=84)** To manage Ovirt users, use ovirt_user, and for VMware local users, use the vmware_local_user_manager module.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=94)** For [[Cloud Services]], the avcs_user module manages users on Apache cloud stack.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=101)** For [[Amazon Web Services (AWS)|Amazon web services]], iam users, groups, roles, and keys, use the iam_user module, and iam_group, to manage Amazon groups.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=114)** os_user, can be used to manage OpenStack identity users, and we can even manage Ansible tower users with the tower_user module, to create, update, and destroy Ansible tower users.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=126)** This isn't even all of the user modules in Ansible.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=129)** Since this course targets host operating systems and [[Red Hat Linux]] specifically, we'll cover using the standard user and group modules.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=136)** Just be aware that the others exist and check the Ansible module page for specifics on any of them.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=142)** Here's a pretty simple example of managing a user using the user module.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=145)** This adds a user named Bob to the system.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=148)** His full name was in the comment field.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=150)** His user ID is 1001.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=153)** His primary group is Bob, and he's being added to the admin and wheel groups.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=158)** We're generating SSH keys that are 2048 bits in length, and stored in his .SSH directory.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=165)** His date is present.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=167)** If we wanted to remove Bob, we could change this to absent.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=170)** There are other options that we can set as well.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-related-to-user-management?u=76281980&t=173)** See the user module documentation for more information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[Windows]] (3), [[Linux]] (1), [[Cloud Services]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Code Identifiers:** win_user (1), win_group (1), win_group_membership (1), osx_defaults (1), bigip_user (1)
> **CLI Commands:** ansible (6), apache (2), ssh (2), nginx (1)
> **Env Vars:** ssh (2), cnos (1), eos (1), ipa (1)
> **Analogies:** for instance (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Using playbooks to create users](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=0)** - [Narrator] We can use the user module to manage users, which is fairly straightforward for speed reasons, [[Ansible]] leaves a lot of data in readable format for the users password will want to hide their sensitive data.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=10)** Since this is the first time we've dealt with sensitive data in this series, you'll want to watch this video.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=16)** Let's start by using the user module to create a user, be sure you are in your Ansible files directory.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=22)** Let's create a playbooks directory and move our loose playbooks into it, this structure will have playbooks that exhibit different technologies.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=28)** When you want to integrate these into roles, you can access them here, tab in MKdir space playbooks and hit enter and that CD into the directory.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=38)** Now let's create a playbook file by typing in vim space create Bob dot yml and hit enter.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=46)** In this file, we're going to put the basics needed to create a username Bob go into insert mode by pressing the I key and add dash dash dash because this is a YAML file, new line, dash space name colon space, create a New User, new line, tab, hosts, colon, space, all you could specify a group here if you wanted to.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=68)** New Line, tab, tasks, colon, new line, tab, dash, space name, colon space.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=77)** And this is the task.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=78)** We're going to call it, create Space Bob, new Line, tab, tab, user colon.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=85)** New Line tab, tab, tab, Name colon Bob.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=89)** This will be the user name.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=91)** New Line, tab, tab, tab, state, colon, space present.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=97)** If we wanted to delete Bob, we'd change this to absent, new line, tab, tab, tab, shell, colon space, double quote slash bin, slash bash, double quote.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=110)** Now save it, but don't exit by pressing escape colon W exclamation mark and hitting Enter.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=118)** To speed up the development of display We're going to leave it open on one terminal and use another terminal to run it.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=124)** Open a new terminal tab.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=127)** In the new terminal tab, type in Ansible dash playbook, space dash u space root space dash I, and for our inventory file, space tilde slash Ansible dash files slash hosts space, create Bob dot yml and hit enter.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=147)** This should run fine.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=148)** However, if you try to log in as Bob you will be denied, because we didn't set a password for Bob.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=154)** You could run in a ad hoc command and set Bob's password or even login as an admin account and set it that way.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=160)** But we want this done automatically.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=162)** That is why we're using Ansible.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=165)** Go back to your create Bob dot yml tab.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=168)** Go back into insert mode.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=170)** And at the end of the file after shell we're going to add a new line and then type in tab tab tab password colon, space, double quote, left curly brace, left curly brace space default underscore password, space pipe password, underscore hash, left parentheses, sha512 single quote comma, single quote uppercase a512 single quote, right parentheses space right curly brace, right curly brace, double quote.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=207)** This uses a variable called default underscore password, which is then piped to the password underscore hash function, and it's encoded using Sha512.
>
> **[3:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=215)** The last argument is just assault for the hash.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=218)** You might be wondering where the value of the default underscore password variable comes from.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=223)** The answer is us, we just haven't said it yet.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=225)** We will add it to our group underscore virus directory so we can use it in our playbook save this file by pressing escape colon W, exclamation mark, and hit enter.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=234)** Now go to your second terminal and type in clear and type in vim space Tilde slash, Ansible dash files slash group, underscore vars slash all.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=245)** This is the variables for all hosts, we created this file in the EX294 using Ansible playbooks course.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=252)** Now go into insert mode and at the end of the file add default underscore password, colon space password.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=261)** We're assigning the value of password to this variable.
>
> **[4:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=264)** Now I realized that this is not a very good idea to have every user's default password sitting here in plain sight.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=270)** However, I will remedy this situation in a moment.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=273)** Also, if you're doing this in production, you'll want to use a stronger default password than the [[Microsoft Word|word]] password.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=278)** Now Save and Exit by pressing escape colon x, exclamation mark and hitting Enter.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=283)** Now, let's take care of the unencrypted default password in our group variables file.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=288)** We'll use Ansible Vault for this purpose.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=290)** Ansible vault lets us encrypt files with sensitive data and then prompts us for the password when we access them.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=296)** We can also give it a credentials file to avoid being prompted, in your second terminal type in Ansible dash vault space encrypt space, Tilde, slash Ansible dash files, slash group underscore vars slash all, and hit Enter, and then enter a new vault password twice.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=318)** Now we can cat the file by typing cat space tilde slash Ansible dash files slash, group underscore vars, slash all and hit Enter.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=327)** And we can see that it's encrypted with AES256.
>
> **[5:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=331)** If you want to see the contents of the file, you'll have to do so with Ansible vault with a view option, bring your line back and change encrypt to view and hit enter and then type in your password.
>
> **[5:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=344)** And you should be able to see the file.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=347)** If you need to edit the encrypted file later change the view option to edit and it will open in the default editor.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=353)** Now let's run the playbook and use the variables in the vault file.
>
> **[5:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=356)** Type in clear and then type in Ansible, dash playbook, space dash u space root space dash I space Tilde, slash Ansible dash files slash hosts, space dash dash ask dash vault dash pass, space create Bob dot yml.
>
> **[6:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=378)** Now hit enter, type in your vault password and it should run.
>
> **[6:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=383)** You can have multiple vault passwords, but you'll need to use the dash dash vault dash ID followed by the vault ID to specify which ID to use.
>
> **[6:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=391)** To test it, ssh to rhhost2 to as Bob and login with the default password, type in ssh space rhhost2, space dash l space Bob and hit enter and type in the default password.
>
> **[6:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=405)** If you can log in, things are good.
>
> **[6:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-playbooks-to-create-users?u=76281980&t=408)** This is a pretty basic playbook that creates one user and stores the default passwords securely.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (15), [[Microsoft Word|Word]] (1)
> **CLI Commands:** ansible (15), cat (2), ssh (2), mkdir (1), cd (1)
> **Tools:** terminal (6), vim (2), bash (1)
> **Env Vars:** yaml (1), ex294 (1), aes256 (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)

#### [Using external user data files](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=0)** - [Lecturer] Now let's take a step into more Advanced User Creation using playbooks.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=4)** We may want to create multiple users in one go, set their default groups for admin privileges or even force users to change their password on first login, you may also want to use an external source for your user data information.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=19)** Let's start by modifying our createbob.yml playbook.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=22)** Be sure you're in your [[Ansible]]-files/playbooks directory and make a copy of createbob.yml type in cp space createbob.yml space createusers.yml and hit enter, now edit it using vim, type in vim space createusers.yml and hit enter.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=42)** Expand the foals by pressing Z uppercase R, currently this file creates one username, Bob, which may be useful if you only have one user named Bob chances are you'll want to create more users.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=55)** The first thing we'll do is go into ansible mode and we going to change dash name, create a new user to create users.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=63)** Then we going to change the task name from create Bob to create users again , now go down to the username.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=71)** For the username let's use a variable, change Bob to double quote, left curly brace, left curly brace, space item ,space, right curly brace, right curly brace, double quote.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=83)** You will probably know right away that this is the default variable name for each item in a loop, which is correct.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=89)** We're going to use a loop, down below the password line, add the loop at the same level as a user module note that the loop is not part of the user module, but rather part of the task for each item in the loop, the user module will run, press tab twice and type in loop, colon, new line ,press tab three times, and then type in dash space Bob that will take care of the Bob user, new line tab three times, dash space Ted, new line tab three times dash space Sally.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=123)** This will allow us to add three users specifically by name in the playbook.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=127)** Now save it, but don't exit by pressing escape colon w exclamation mark and hitting enter flip to your second terminal and bring your ansible playbook line back, If it's still in your history and change create Bob to create users or type it in as I have it hit enter and enter your vault password, and it should run.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=151)** To go to the next step, we're going to create our users from an external file.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=155)** We could put this list in the group_vars/webservers variable file.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=160)** In my example, the list name is web admins and contains three users, Bob, Ted, and Sally, and then to use it in our playbook, we changed the host we are targeting to the web service group, then change the name of our task.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=174)** So it's more descriptive and then instead of inserting the list of users in the playbook, we referenced a list named web admins that we put in the group variables file.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=184)** This changed file is in this chapter as exercise files, directory as createusers.yml.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=190)** Note that this does exactly the same thing as having the loop in the playbook file.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=194)** Why should you go through the trouble if it does exactly the same thing, because we're taking the first step at managing our user data separate from our [[System Configuration]] code.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=203)** Currently, everything is in the create users playbook by putting user data in a file by itself and separating it from the playbook and external source could be creating the file for instance, a customer facing web portal.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=216)** Or we could even be pulling the user data out of a directory server or database somewhere.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=220)** The playbook would then process the data, sending the resulting configuration to the managed hosts.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=225)** The source doesn't matter as much as the method.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/using-external-user-data-files?u=76281980&t=227)** There's a lot of power in managing your user data separately from your playbooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (3), [[System Configuration]] (1)
> **File Paths:** createbob.yml (3), createusers.yml (3)
> **CLI Commands:** ansible (3), make (1), cp (1)
> **Tools:** vim (2), terminal (1)
> **Warnings:** note that (2)
> **Code Identifiers:** group_vars (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise files (1)

#### [Advanced user creation](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=0)** - [Instructor] Now let's take [[User Management]] to the next level.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=3)** In the Exercise Files directory for this chapter, there are two files that we'll want to take a look at.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=8)** Change to this chapters Exercise Files directory and view the webadmins.yml file using vim.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=13)** Type in vim space webadmins.yml and hit Enter.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=19)** Press Z and uppercase R to expand the folds.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=24)** This is a user data file similar to what we just created by using a dictionary.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=28)** In this file, we have a dictionary named webadmins.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=31)** In the dictionary for each named item, we have usernames and other attributes such as the comment or geckos field, the shell, and supplemental groups.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=42)** You could add any other fields that you want for each user such as a primary group, userID, groupID, account expiration date, whether the password is locked, or even whether the account is locked and so on.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=55)** Now, let's look at the playbook file that utilizes the dictionary, press escape colon Q exclamation mark and now load the create webadmins.yml file, type in vim createwebadmins.yml and hit Enter.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=69)** And once again, press Z uppercase R to expand the folds.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=74)** The name of the place stays the same.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=77)** We're targeting the webservers inventory group, and we have two tasks.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=81)** The first is to include the webadmin user file.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=84)** In this task we use include underscore vars, to include the webadmins.yml file that we just looked at.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=90)** This is our user data dictionary file.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=93)** The second task is called create webadmins.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=96)** And in it, we loop through the webadmins dictionary.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=100)** For each iteration, we process one user.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=102)** First we get item.user and assign it to the user's name.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=106)** Then we get item.state and set the user account state.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=110)** Note that if we want to remove a user, we just edit the webadmins.yml file and change this to absent and the user will be removed.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=119)** By default, when we remove users we keep their home directories, but we could add a remove item and set it to yes or no if we want to remove the user's home directory when they're removed.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=130)** We would then add this to our playbook as well.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=133)** We're also pulling comment, shell, and supplemental groups from the data file.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=139)** We are once again hashing the default underscore password variables stored in the group underscore vars, slash all encrypted file to create the initial password.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=148)** The last thing we're doing is updating the password field on initial user account creation.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=153)** This keeps the playbook from changing back to the initial password each time you run it.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=157)** Now, we're not quite done yet, it's fine to have an initial password for the user to log in the first time with, but we don't want them to keep this password so a good policy would be to force them to set a new password.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=169)** At the end of the create webadmins task, we assign the results to the user stat variable by registering it.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=175)** The name of those variable is arbitrary, you can name it what you want.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=179)** Then in a new task named force password reset for new users, we run the change command to set the last date that the password was reset to zero.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=188)** If this variable looks odd, just remember that we're looping to the contents of the users stat registered variable.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=193)** For each item in there, we have our original item too.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=196)** So we need to specify item.item.value.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=200)** The result of all of this is that the user is required to set their password on login.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=205)** Since we don't want this to happen every time we run the playbook, we only run this task when the user stat variable has changed.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=213)** Now to run the playbook let's first exit by pressing escape colon Q, exclamation mark, and hitting Enter, and type in clear.
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=222)** Now bring your [[Ansible]] playbook line back and change create users to createwebadmins.yml and hit Enter.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=232)** Now type in your vault password and hit Enter again and everything should work fine.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=240)** That is all we'll be covering for managing users and Ansible.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=243)** The next step for you is to have this file in playbook manage SSH keys.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=247)** This will be useful for logging in without passwords.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/advanced-user-creation?u=76281980&t=250)** We will not be covering that in this course though.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (2), [[User Management]] (1)
> **File Paths:** webadmins.yml (5), createwebadmins.yml (2)
> **CLI Commands:** ansible (2), ssh (1)
> **Tools:** vim (3)
> **Code Identifiers:** userid (1), groupid (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** such as (2)


### 6. Managing Processes and Tasks

[↑ Back to Table of Contents](#table-of-contents)

#### [Modules for managing services and tasks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=0)** - Most of what we'll use [[Ansible]] for is managing saved configuration.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=4)** Meaning we install software packages, create users and configuration files, and set up the state in which we want the Manage hosts to be.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=12)** Now let's talk about processes, services and tasks.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=15)** We've talked about how to install software.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=17)** When we install a software package installs programs on the disk.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=21)** These may be regular programs designed to be run by a user, or more likely in our case, they may be programs that will run in an automated fashion.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=30)** At the simplest level, we may run a program once at a certain time.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=34)** For this would use the at Module, which schedules the execution of a command or script file via the at command.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=40)** If we want the program to run at regular intervals, as opposed to just once will use the cron Module.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=46)** If you know how to use cron, then creating a task using the cron Module will be fairly easy.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=52)** In this example, we create a cron entry that runs at two and five o'clock.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=57)** There's also another module related to cron called cronvar.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=61)** Its job is to manage variables in cron.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=65)** There are several modules for managing system services depending on which init system your Manage host uses.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=71)** There's a generic service module called service that supports init systems including BSD Init, OpenRC used by Gentoo [[Linux]], SysVinit used by Legacy Linux systems, Solaris SMF and systemd used by most current distributions.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=87)** For manage hosts running [[Windows]] use win_service.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=91)** For most management of services, the service module works fine.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=95)** Here we see that the status set to standard the service module support started, restarted, reloaded and stopped.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=103)** A module related to service is service_facts.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=107)** Its job is to return service related facts.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=110)** In this example, it stores the fact data in ansible_facts.services.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=114)** It support systemd, SysVinit and Upstart.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=120)** If you manage host as an older Linux system or a compatible Unix system, you may want more control over SysVinit system.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=127)** For that there's SysVinit module.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=130)** It's worth noting that the service module currently can provide all of this functionality, but Ansible is moving away from having one monolithic service module towards having specialized modules for different init systems.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=142)** As such, Ansible has a module specifically for systemd, the newest system and net stack on Linux.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=149)** Unlike the SysVinit module, the systemd module has additional functionality beyond what the service module provides including masking services, service manager scope, and daemon_reexec for serializing the manager state.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=163)** The syntax of the systemd module is very similar to the service module, but it has extra module arguments.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=170)** Note that this particular daemon_reexec feature only works in Ansible 2.8 and newer.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=176)** There are other service modules like nosh for managing nosh services, runit for runit services, and Svc for Daemon tools managed services.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=186)** When dealing with network services, we often have to open ports to allow traffic to traverse the firewall.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=191)** We have the iptables and firewalld modules for that purpose depending on which one your system uses.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=196)** For Windows use win_firewall.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=200)** When managing firewalls, we often need to make sure there's a service listening on a port.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=205)** On the Linux command line, we'd use the netstat command for this.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=208)** On Ansible we can use the listen_ports_facts module to gather information on listening services.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=216)** If we need information on running processes, we can use the pids module.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=220)** This example stores the output into a variable called pids of [[Python (Programming Language)|Python]].
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=224)** Since that is the registered variable name we specified.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=227)** You could name it whatever you wish.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=231)** The next module I'll mention doesn't specifically work with services or tasks, but rather with files.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=237)** Sometimes there may not be a module for what we want.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=240)** For that, we can use the [[Fetch]] module to gather the file data that we wish.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=244)** One use may be to fetch a virtual file from the slash proc or slash sis directories on the Manage host.
>
> **[4:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=251)** This example will fetch the /proc/meminfo file and store it locally as /tmp/meminfo.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=259)** If you need to write to a file on the Manage host, you can use the copy module.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=262)** This will work even if you're writing data into virtual files, managing processes and other items of the life state.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=269)** For Windows, there is a similar module called win/copy.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/modules-for-managing-services-and-tasks?u=76281980&t=273)** Also, don't forget that you can use a shell module to run any command you want and save the output into a registered variable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (5), [[Linux]] (5), [[Windows]] (3), [[Fetch]] (3), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** ansible (5), make (1), python (1)
> **Code Identifiers:** daemon_reexec (2), win_service (1), service_facts (1), ansible_facts (1), win_firewall (1)
> **Prerequisites:** install (3), set up (1)
> **Env Vars:** bsd (1), smf (1)
> **Versions:** 2.8 (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)

#### [Creating a playbook to manage services](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=0)** - [Instructor] The majority of modern [[Linux]] distributions use systemd to manage their net process.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=5)** As such, we'll mostly be covering how to manage services using the systemd module.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=10)** If you're using a distribution that does not use systemd, you can substitute the service, upstart, sysvinit modules, in most cases, depending on which one your managed host uses.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=20)** The simplest example of the systemd module, looks exactly like the service module.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=24)** You could substitute service for systemd, and this will still work.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=28)** This uses the systemd module and specifies that the httpd service date should be started, and it should do so on boot as well.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=37)** Since we're starting system services, we'll need admin privileges.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=41)** In this example, I'm using become equals true to run sidu.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=44)** We could also use dash uroute when we execute the playbook.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=48)** Let's look at a more complex example.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=50)** We may want to shorten our playbook and, or start multiple services at the same time.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=55)** For this, we could place them in a loop.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=57)** In this example, we're starting httpd and our CIS log services in one task, using the loop item variable for the service name.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=66)** We may also want to use the output of a service starting.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=69)** In this example, we're assigning the output to the service_output registered variable.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=74)** We can then use the debug module to print the output.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=77)** We can also use this output for other things such as conditionals.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=82)** We can also capture the output of multiple services being started in a loop, in the service_output registered variable by combining the last two examples.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=92)** If we have two managed hosts that use different operating systems, such as Debian and 7.0, and Enterprise Linux 8, for example, we will have two different init systems.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=101)** If all we're doing is starting and stopping services, replace this systemd module with a service module and everything will be fine.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=106)** [[Ansible]] figures out which init system to use based on their operating system.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=111)** However, just like with software packages, we have a problem if the distributions use different names for the services.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=118)** We can solve this in the same manner as with software packages.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=121)** Previously in a different video, we added this text to the top of our site.yml file.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=127)** This looks in the local VARs directory for a file named os underscore, followed by the distribution name, and ending with .yml.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=135)** For CentOS, it will look for a file named os_CentOS.yml.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=140)** For Debian, it would look for os_Debian.yml.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=144)** These files will only get processed for the respective operating systems.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=148)** This allows us to store variables in them that are specific to each OS.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=152)** It's worth noting that you can use other answerable facts, such as distribution version, OS family, or a combination.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=158)** You could have separate files full of variables for Debian 7.0, [[Ubuntu]] 16.04, and CentOS 8, just by manipulating this string.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=167)** In the variable file that we're including in our playbook, we would place variables that are specific to the OS we're matching, any general variables, however, should go in other files so you don't have duplicates.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=179)** Now we can refer to the service by variable name in our playbooks.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=183)** Here we are using the general service module, which will work on many different managed host operating systems, to start the service contained in the apache_svc variable.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=193)** If this were a Debian, SUSE, or Legacy Red Hat system, this will work as long as we're using the service module, and the apache_svc variable holds the name of the service on the managed host.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=204)** If you want to walk through this process, review the video, Implementing a Playbook to Manage Software, in this course.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-services?u=76281980&t=210)** We use this method in that video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Ansible]] (1), [[Ubuntu]] (1)
> **Analogies:** such as (3), for example (1), just like (1)
> **Code Identifiers:** service_output (2), apache_svc (2)
> **File Paths:** site.yml (1), os_centos.yml (1), os_debian.yml (1)
> **Versions:** 7.0 (2), 16.04 (1)
> **Env Vars:** cis (1), suse (1)
> **CLI Commands:** ansible (1)
> **Speakers:** - [instructor] (1)

#### [Creating a playbook to manage tasks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=0)** - [Instructor] Let's create a scheduled task in a terminal and rh host one change into the [[Ansible]] files slash playbooks directory.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=10)** We're using this directory to outline specific technologies and Ansible.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=13)** Once you know and understand each, you're going to integrate them into your role strategy.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=17)** Now create a new playbook by typing in vim space clear package, cache, dot yml and hit enter.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=25)** Go into answer mode by pressing the I key and then add dash dash dash because it's a yaml file New Line dash space name colon, and we'll name it Run a scheduled task.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=39)** New Line tab hosts colon space all new line, tab tasks colon new line tab dash space name colon and we're going to name this task Use cron to clear package cache.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=59)** New line tab tab.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=61)** Now we'll use the cron module.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=63)** cron colon new line tab tab tab name colon space double quote Clear Yum Cache double quote and hit enter.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=75)** Tab tab tab user colon space double quotes root double quote new line tab tab tab Minute colon space double quote 30 double quote new line tab tab tab our colon space double quote three double quote new line tab tab tab job colon space double quote yum clean space packages.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=104)** That'll be the command that we run.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=106)** Save but don't exit by pressing escape colon W exclamation mark and hitting Enter.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=113)** This file can also be found in this chapter is Exercise Files directory.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=120)** The name of the play is Run a scheduled task.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=123)** We're targeting all hosts in our inventory and we have one task named Use cron declare package cache.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=129)** We're creating this cron job for the root user.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=131)** This will be important to note.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=133)** The cron job will run at 3:30am.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=136)** And the job will run the yum clean packages command.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=139)** You might want to note that in Enterprise [[Linux]] eight, the command that actually runs is DNF.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=143)** But calling yum will work on both Enterprise Linux seven and eight.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=149)** Now open another terminal and change to it.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=152)** In that terminal let's run our playbook type bin Ansible dash playbook space dash use space root space dash I space dot dot forward slash hosts space dash dash ask dash vault dash pass space clear package cache dot yml and hit enter.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=172)** Type in your vault password and hit Enter again.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=176)** Note that we're not utilizing any encrypted data in the group on the screen.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=180)** slash all file, but Ansible still wants to decrypt it to get the values anyway, so we need to enter the password.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=186)** This should run fine.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=187)** Now let's go look at the results.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=190)** Type an SSH space rh host two and hit Enter, and then change the route by typing in su space hyphen and hit Enter again and type in root password.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=201)** Then type in clear.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=203)** The reason we want to be a root is we created our cron job for the root user.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=207)** Now let's view as crontab command.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=210)** Type in crontab space dash e and hit Enter.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=214)** And there's our cron job created by Ansible.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=216)** Viewing the cron job this way is easier than searching the OS for the root crontab file.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=221)** However on Enterprise Linux eight it is in slash var slash spool slash cron slash root if you want to cut it.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=228)** press escape colon Q exclamation mark and hit enter.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=235)** (keyboard clatters) This is the actual file that Ansible created.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=240)** Now log out by typing an exit and then type in exit again.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=246)** There are some other parameters that I think you'll like.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=249)** Managing cron from Ansible is easier than directly with cron especially if you don't already have experience with cron.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=255)** The first parameter we'll look at is special underscore time and the values are yearly, monthly, weekly, daily, hourly, and lastly, reboot.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=268)** This is really nice if you don't want to figure out when to run your cron job.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=271)** If it needs to run once per day you specify daily if once per month then you specify monthly and so on.
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=277)** Note, the last one is reboot.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=279)** This will only run the job on reboot.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=282)** The state parameter is just like with other Ansible modules the options are present and absent.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=288)** This makes sense when dealing with software packages.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=290)** It's either present or installed or absent and removed.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=294)** It's the same as crontab entries.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=295)** If you want to remove an entry just change present to absent and Ansible will delete it After that you can remove the play.
>
> **[5:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=302)** Another less destructive option would be disabled.
>
> **[5:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=305)** This leaves the cron job in the cron tab but just comments it out.
>
> **[5:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=309)** cron underscore file specifies the cron file you want to use using the default also works.
>
> **[5:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=314)** backup tells Ansible to create a backup of the crontab file before creating the new one.
>
> **[5:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=320)** This is probably not a bad idea.
>
> **[5:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=323)** You can have variables in your crontab file as well.
>
> **[5:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=326)** One of these is the mailto variable which does the email address to send messages to concerning this cron job.
>
> **[5:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=332)** We will use the cron var module to edit the variables in our cron tab.
>
> **[5:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=336)** Go back to your terminal with vim and add another task at the bottom for the cron var module.
>
> **[5:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=341)** Go into insert mode and hit enter.
>
> **[5:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=345)** Now tab dash space name colon and the name will use is Set mailto variable.
>
> **[5:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=354)** New line tab tab.
>
> **[5:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=357)** The module we'll use is cronvar typing cronvar colon new line tab tab tab name colon space double quote mailto in uppercase letters double quote new line tab tab tab value colon space double quote.
>
> **[6:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=375)** This is the email address we want at sending messages to admin@[localnet.com](https://localnet.com) double quote you can put anything you want in here.
>
> **[6:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=386)** New Line tab tab tab user colon space double quote root double quote.
>
> **[6:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=393)** Now save it by pressing escape colon W exclamation mark and hitting Enter.
>
> **[6:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=399)** The name of the task is Set mailto variable.
>
> **[6:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=403)** We're using the cron var module we're setting a variable named mailto in uppercase letters.
>
> **[6:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=409)** We're setting the value to admin@[localnet.com](https://localnet.com) which is the email address to send a message to and we're adding it to the root cron tab.
>
> **[6:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=417)** Now go to your second terminal again and run it by bringing back your Ansible playbook line and hit enter.
>
> **[7:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=423)** Type in your vault password and hit Enter again.
>
> **[7:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=427)** Once it's done running log into rhhost two again by typing in SSH space rhhost two (keyboard clatters) and hit enter.
>
> **[7:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=436)** Now change the root once more type in su space hyphen type in root password and then bring back your crontab dash e line and hit enter.
>
> **[7:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/creating-a-playbook-to-manage-tasks?u=76281980&t=447)** You should now see the variable being set in the crontab file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (11), [[Linux]] (3)
> **CLI Commands:** ansible (11), yum (4), ssh (2), dnf (1)
> **Tools:** terminal (5), vim (2)
> **Env Vars:** ssh (2), dnf (1)
> **URLs:** [localnet.com](https://localnet.com) (2)
> **Warnings:** note that (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 7. Troubleshooting Ansible

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing Ansible logging and output](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=0)** - [Instructor] In any complex system, is good to be able to see what's going on and even better to be able to analyze it.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=5)** For this, we have logging, by default [[Ansible]] outputs data onto the screen when running a playbook, but doesn't save any of it.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=12)** We can however change this.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=14)** The lowest tech solution, is the run Ansible playbook, with multiple levels of verbosity.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=19)** By providing the -v option, you get more verbose output.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=23)** It tells you which ansible.cfg file have processed and a bit more information about the task.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=29)** When you provide two vs, Ansible will tells us a lot more about it's configuration, including where the modules config files and executables are, in addition to the [[Python (Programming Language)|Python]] version.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=37)** It also shows the task path.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=39)** This could be very useful if you have a lot of includes in your playbooks.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=44)** When we go to the next level and provide three vs, things get serious.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=47)** In fact, the output is so verbosed, that I'm not able to get more than a tiny amount on the slide.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=52)** Three vs shows you just about everything, you'd ever need to see.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=55)** All module arguments, all variables and the results of the plays.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=61)** Ansible has one more level of verbosity, four vs.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=64)** The only difference between this and three vs, is that all ssh connection information is also provided.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=69)** It does this by passing the - vvv option to ssh when it connects.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=75)** With three or four Vs, there's so much information that you need to save it to a file.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=80)** The best way to do this is to append the tee command and a log file name to the end of the line.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=85)** This will show the output on the screen, as well as save it to the output on a square vvv.log file.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=92)** Using increased verbosity helps troubleshoot problems, as we run playbooks.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=97)** If we want to increase logging all of the time, we need to edit the ansible.cfg file and set the variable to the log file.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=103)** An alternative option, is to set the ansible_log_path environment variable in our shell, which is equivalent, but isn't persistent across login sessions.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=113)** You may also want to set display args to standard out, which helps to differentiate similar tasks, including variable values in Ansible output.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=121)** If you set this variable in the config to true, then Ansible playbook will also include the task arguments in the header.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=128)** It's also possible to save Ansible output to separate log files on each manage node, by setting the no target syslog and syslog facility options, to specify the syslog facility name.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=139)** It's worth noting that if you're using Ansible tower, you can have a gather logs to view through the interface, in a central location.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=146)** We have a problem if we save Ansible output to a log though.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=150)** Everything that goes on the screen will be saved, in an insecure file, including sensitive data such as usernames and passwords.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=157)** To keep sensitive data out of your logs, you can mark task containing this data, with a no_log attribute.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=164)** This will work for suppressing normal output that may expose sensitive data.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=168)** It does not suppress debug output.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=170)** So be sure not to log, debug output in a production environment.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=175)** You can add new behaviors to Ansible, when responding to events, by changing the callback plugin.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=180)** Callback plugins control most of the output, you see when using Ansible.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=184)** Be aware, that you can have more than one callback plugin active, but only one will control the output at a time.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=190)** Plugins by default are disabled Ansible and have to be white listed, in the ansible.cfg file.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=195)** In this case, we've kept the timer plugin turned on, which is good, if we want execution time information.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=201)** The mail plugin allows Ansible to send mail messages.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=204)** And lastly the profile_task plugin, gives us execution profile information, including how long each task took to execute.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=213)** Another useful callback plugin is log_play.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=216)** This callback writes playbook output to a file, per host in the /var/log/ansible/hosts directory.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=224)** You need a white list of plugin as you see here.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=226)** And you need a directory at /var/log/ansible/host that's ride able by the Ansible process.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=231)** That means that the user executing the playbooks, has to build a right to that directory.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=237)** For console output, you can set the callback plugin separately in the ansible.cfg file.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=242)** This will affect command output.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=244)** The dense plugin provides minimal output, which is less than the default behavior.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=248)** If you'd run a command with verbose turned on, with a -V, it will provide the same output, as the default behavior, If you have this set to dense.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=258)** The Ansible ad hoc command, has its own specific callback plugin for standard out.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=263)** You can get a list of available callback plugins, by using the ansible.command.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/managing-ansible-logging-and-output?u=76281980&t=268)** Specify the plugin in question, for more information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (22), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** ansible (22), ssh (2), python (1), node (1)
> **File Paths:** ansible.cfg (4)
> **Code Identifiers:** ansible_log_path (1), no_log (1), profile_task (1), log_play (1)
> **Warnings:** troubleshoot (1), be aware (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)

#### [Troubleshooting Ansible playbooks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=0)** - [Instructor] One way to troubleshoot our playbooks is to run them with the dash dash check option.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=5)** When a playbook is executed with the dash dash check option, it will not make any changes to the remote host.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=11)** Any module that supports check mode will display what would have been done had it not been in check mode.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=17)** Modules that do not support check mode will not execute, but will also not output information on the screen showing what would have been done.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=25)** If you're only making changes to one task and you don't want to run check mode on the entire playbook, then you can control it at task level.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=32)** We have two options for this.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=34)** We can force a task to run in check mode, even if the playbook has called without dash dash check on the command line.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=40)** To do this, we'd set the check mode in our task.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=43)** We can also force a task to run with check mode turned off, even if we do provide dash dash check on the command line.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=49)** To do so, we'd set check mode to no in our task.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=53)** Here's the create users playbook that we created in this course.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=56)** The guest check mode is set to yes, no change in this task will be made on the remote hosts.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=63)** There are some tasks that will throw an error if run in check mode.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=66)** if you want to skip these tasks or even ignore errors, we could use variables and conditionals to make this happen.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=72)** [[Ansible]] check mode is a Boolean variable so we can use it directly in a win conditional.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=77)** If it's not true, then we'll skip the first task.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=80)** And the second task ignore errors gets processed as true or false, depending on Ansible check mode.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=85)** If we're in check mode, then it will be true and we'll ignore errors.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=90)** Throughout this course, I've used a debug module to print values of variables.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=94)** This allows us to see what's happening in our tasks, no matter if the task completes or fails.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=98)** Debug in this example shows the value of the service underscore output registered variable.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=104)** And so we'll also include the debugger that enables us to debug a task.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=108)** The debugger keyword can be used on any block where you provide a name attribute such as a play, roll, block or task.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=117)** The debugger has several levels that it works on.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=119)** Always, which always invokes the debugger regardless of the outcome.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=124)** Never, will never invoke the debugger regardless of outcome.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=128)** On_failed, only invokes the debugger if a task fails.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=132)** On_unreachable only invokes the debugger if a host was unreachable.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=138)** On_skipped only invokes the debugger if the task is skipped.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=143)** To use the debugger in a task, place it at the same level as the task name.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=148)** You can also use the debugger on a play, just like the task, place the debugger keyword at the same level as the play name.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=155)** If you're using the debugger on both the play and task at the same time and at different debugging levels, the most specific one wins.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=163)** In this case, we've specified never and on_failed.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=166)** The latter is more specific, so it wins.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=170)** You can also turn on the debugger globally in the ansible.cfg file by setting the value of enabled task debugger to true.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=177)** We can invoke the debugger only when something fails, which can be the most useful.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=182)** In this case, wrong_var is not set, so the task fails and the debugger is invoked.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=189)** If we replaced wrong_var with var1 which is set, then the task would succeed and the debugger would never start.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=196)** Once the debuggers invoked, you can interact with it in five different ways.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=200)** Using print to print tasks, task variables, hosts and results.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=205)** You can change values of task variables, update tasks, redo tasks, continue past errors and quit.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=214)** You can print values using the print command.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=216)** For instance, print task will show the task.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=219)** Print task.args will show the task arguments.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=223)** Print host we'll show the host the task is running on.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=226)** Print result._result will print the key value pairs of result.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=231)** We can shorten the print command to one letter P.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=235)** We can use the update command to update tasks.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=238)** In this example, we're setting the value of pkg_name to bash.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=242)** Then we're printing the value to double check.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=244)** Next we update the task.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=246)** And then lastly, we run it with redo.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=249)** There are two more debugger commands, to continue past an error, type continue.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/troubleshooting-ansible-playbooks?u=76281980&t=253)** And to exit the debugger, type quit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (3)
> **CLI Commands:** ansible (3), make (2)
> **Code Identifiers:** wrong_var (2), on_failed (1), pkg_name (1)
> **Tools:** command line (2), bash (1)
> **Analogies:** such as (1), just like (1), for instance (1)
> **File Paths:** ansible.cfg (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking the exam](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=0)** - [Grant McWilliams] This is the third and last course in the three-part series on [[Ansible]] Engine for the Red Hat EX294 certification.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=7)** Before attempting to take the exam, you'll want to watch the other two courses.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=11)** EX294 Foundations of Ansible and EX294 Using Ansible Playbooks.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=17)** After finishing those courses, you can consider taking the EX294 exam.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=22)** My first piece of advice is to manage your time during the exam.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=26)** This is a hands-on practical exam that requires you to use Red Hat Ansible Engine to perform real world tasks.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=34)** You will be provided with multiple systems and will be required to install and configure Ansible Engine, and then use it to perform standard [[System Administration]] tasks similar to what you would do on a job.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=45)** You are allowed four hours to complete those tasks.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=49)** The test follows the exam objectives.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=52)** So visit Red Hat's website and pay close attention to the details.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=56)** Read all of the exam before starting.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=58)** Some items in different tasks can be grouped together, saving time.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=63)** Be familiar with which Ansible doc pages you may need.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=66)** Sometimes being able to find the information is more important than memorizing it.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=71)** If you know which Ansible module you need upfront, then it will take less time to look up the syntax and usage information.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=77)** If you're searching for how to accomplish a task, you may run out of time.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=81)** Review your work against the exam.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=83)** After you have accomplished what the exam asks for, audit your work.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=87)** Sometimes when trying to accomplish a task, it might not be clear what the objective is.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=92)** After you've completed it, you can look at the exam and then compare your results to identify if the objective has been satisfied.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=99)** And lastly, walk through this course more than once, and practice, practice, practice.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=104)** The key is to be comfortable to Ansible before you take the exam.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-3-managing-systems-with-ansible/taking-the-exam?u=76281980&t=108)** And one last thing, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (8), [[System Administration]] (1)
> **CLI Commands:** ansible (8), find (1)
> **Env Vars:** ex294 (4)
> **Prerequisites:** required to (1), install (1), configure (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [grant (1)


## Instructor

- [[Grant McWilliams]]

## Resources

- Exercise files available

## Skills Covered

- Red Hat Enterprise Linux (RHEL)
- Ansible

## Path Context

### In [[Prepare for the Red Hat Certified Engineer (EX294) Exam]]
← [[Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks]] | **3 of 3**

## Appears In

- [[Prepare for the Red Hat Certified Engineer (EX294) Exam]]

## Related Courses

_Courses sharing skills:_

- [[Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks]] — Ansible, Red Hat Enterprise Linux (RHEL)
- [[Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible]] — Ansible, Red Hat Enterprise Linux (RHEL)
- [[Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage]] — Red Hat Enterprise Linux (RHEL)
- [[Learning Ansible]] — Ansible

---

[↑ Back to top](#)