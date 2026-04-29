---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible
url: "https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible"
level: Intermediate
updated: 7/25/2022
learners: 16120
skills:
  - Red Hat Enterprise Linux (RHEL)
  - Ansible
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGlIjE8z2GOPw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1589564615700?e=2147483647&amp;v=beta&amp;t=c_im-JAk2hoOazTpjPObssqc9bZKK2rmyM3qxJhBm7U"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Prepare for the Red Hat Certified Engineer (EX294) Exam]]'
next_courses:
  - '[[Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks]]'
path_nav: '[{"path":"Prepare for the Red Hat Certified Engineer (EX294) Exam","position":1,"total":3,"prev":null,"next":"Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/red-hat-enterprise-linux-rhel
  - skill/ansible
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Red%20Hat%20Certified%20Engineer%20Ex294%20Cert%20Prep%201%20Foundations%20Of%20Ansible.md)

![Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible](https://media.licdn.com/dms/image/v2/C4E0DAQGlIjE8z2GOPw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1589564615700?e=2147483647&amp;v=beta&amp;t=c_im-JAk2hoOazTpjPObssqc9bZKK2rmyM3qxJhBm7U)

# Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible

> Red Hat Enterprise Linux is one of the top enterprise Linux distributions, and Red Hat Certified Engineer (RCHE) is one of the top Linux certifications. The RHCE exam for Red Hat Enterprise Linux 8 (EX294) focuses on IT automation using Red Hat Ansible Engine. In this course—the first in a three-part series—learn the foundations of working with Ansible Engine as you study for the Red Hat Certified

> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible) | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (13 videos)
  - Prepare for the RHCE EX294 certification
  - What you should know
  - About the RHCE (EX294) exam
  - State of Enterprise Linux
  - Install Virtual Box
  - CentOS 8 lab setup
  - Optimize your VM
  - Install Linux from DVD ISO
  - Install Linux Guest Additions
  - Virtual machine snapshots
  - Finish lab set up
  - Create a private network in VirtualBox
  - Reconfigure or migrate CentOS
- [**1. Introduction to IT Automation**](#1-introduction-to-it-automation) (6 videos)
  - About IT automation
  - Ansible concepts
  - About provisioning
  - About configuration management
  - About app deployment
  - About orchestration
- [**2. Getting Started with Ansible**](#2-getting-started-with-ansible) (4 videos)
  - Host requirements
  - Install Ansible on the control node
  - Prepare managed nodes
  - View Ansible Documentation
- [**3. Setting Up an Ansible Environment**](#3-setting-up-an-ansible-environment) (3 videos)
  - Build static inventory
  - Work with dynamic inventory
  - Manage Ansible configuration files
- [**4. Using Ad Hoc Commands**](#4-using-ad-hoc-commands) (6 videos)
  - Introduction to ad-hoc commands
  - Targeting hosts with patterns
  - Manage files and packages
  - Restart servers and services
  - Manage users
  - Gather data
- [**5. Ansible Command Line Tools**](#5-ansible-command-line-tools) (6 videos)
  - Manage connection methods
  - Use the Ansible command
  - View Ansible configuration
  - Use the Ansible console
  - Show Ansible inventory
  - Run Ansible playbooks
- [**Summary**](#summary) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Prepare for the RHCE EX294 certification
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=0)** - [Grant] The Red Hat RHCE certification is one of the most respected and valued certifications in the IT world.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=7)** Presenting credentials as well-known as the Red Hat RHCE EX294 certification will help secure a position in IT automation.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=14)** The RHCE is a popular Linux engineering certification.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=18)** The EX294 version of that certification focuses on IT automation using Ansible Engine and this information can be invaluable in today's world no matter which operating systems or devices you're managing.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=29)** This course is the foundation course in a three-part EX294 series aiming to prepare exam takers for that certification.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=36)** In combination with the other two EX294 courses it covers all objectives of the Red Hat RHCE EX294 exam.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=44)** All the chapters include assessment questions concerning the same material to help you assess your own knowledge.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=49)** My name is Grant McWilliams, college professor and Linux enthusiast.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=52)** In the past 20 years I've trained many people to be Linux certified and that experience is accessible to you.

> [!info]- Semantic Content
>
> **Env Vars:** ex294 (5), rhce (4)
> **CLI Commands:** ansible (1)
> **Definitions:** is a  (1)
> **Speakers:** - [grant] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=0)** - [Instructor] This course is designed for anyone new to Linux.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=4)** If you are a beginner to Linux, you are in the right place.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=7)** In this course, you will learn how to use the most recent version of Enterprise Linux, version 8.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=13)** If you have access to Red Hat Enterprise Linux version 8, that would be fine, but it's not necessary to complete this course.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=21)** You could also use a clone of Red Hat Enterprise Linux, such as CentOS Linux, Rocky Linux, AlmaLinux, or any other clone, including Oracle Enterprise Linux.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=31)** When I refer to Enterprise Linux in this course, I mean any Red Hat Enterprise Linux version 8 clone.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=37)** In fact, most tutorials will also work on Fedora Linux with very little modification, due to its similarity to Red Hat Enterprise Linux.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=46)** In this course, we'll install Linux in a VirtualBox virtual machine, running on a host operating system.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=52)** Included in this course are videos to install Enterprise Linux in a virtual machine on both Windows and Linux host operating systems.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=60)** So use the host OS which you prefer.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=63)** You can also use macOS or Solaris as your host OS with the same results.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=68)** Using VirtualBox, you can install one or more guest VMs depending on your available system resources.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=75)** For the purpose of virtualization, you'll need an Intel or AMD 64 bit CPU with virtualization support.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=83)** Intel CPUs with virtualization support will be advertised as having VT-x, and AMD calls it AMD-V.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=91)** For this course, you may want high speed internet for doing Linux operating system software updates.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=97)** This is also handy for downloading large operating system ISO images.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=102)** You'll also want 12 to 25 gigabytes of free space minimum on your host computer's hard drive.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=108)** This will provide enough free space for two Enterprise Linux 8 guest VMs.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=113)** If you have more free space available, it will give you more flexibility for creating additional guest VMs or giving your VMs larger virtual hard drives.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=122)** To run more than one VM at a time, you'll need to have at least four gigabytes of free system memory, but eight will work much better.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=130)** If you're using Windows as your host OS, you may need eight to 16 gigabytes of free system memory.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=136)** If you have more than that, then it will allow you to run more complex configurations with multiple virtual machines operating at the same time.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=144)** This is useful for example, when you want to learn networking or a server client configuration.

> [!info]- Semantic Content
>
> **Env Vars:** amd (3), cpu (1), iso (1)
> **Prerequisites:** install (3), you'll need (2)
> **Versions:** version 8 (3)
> **Analogies:** such as (1), for example (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### About the RHCE (EX294) exam
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=0)** - [Instructor] This course provides training for the RHCE EX294 certification.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=5)** RHCE stands for Red Hat Certified Engineer.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=8)** The RHCE is a Red Hat certification which uses Red Hat Enterprise Linux 8 as its operating system platform.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=15)** In the past, the RHCE EX300 was a certification that tested the general skills of system engineers.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=21)** The new RHCE EX294 certification, however, is not a general engineer certification as the focus has changed to IT automation using Red Hat Ansible Engine 2.8.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=33)** The RHCSA EX200 exam in order to obtain the RHCE certification.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=38)** You can take the RHCE exam without possessing the RHCSA certification, but RHCE credential will not be issued until both exams have been passed.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=48)** Those test takers that passed the exam become Red Hat Certified Engineers.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=51)** And, in addition, this certification counts towards being a Red Hat Certified Architect, or RHCA.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=57)** Although Red Hat provides training for both EX200 and EX294 exams, it is not required in order to take either exam as they are standalone exams not linked to any training program.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=68)** Taking the official training or this course is not a guarantee that you will pass the exam, although this three-course EX294 series, with previous experience, additional practice, and reading should be sufficient.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=79)** To gauge your knowledge level, Red Hat provides online skills assessment tools, which can be helpful in deciding if you need additional instruction.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=86)** The RHCE exam is a performance-based test of skills and knowledge necessary to automate Red Hat Enterprise Linux.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=93)** This hands-on practical exam requires you to use Red Hat Ansible Engines to perform real world tasks.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=99)** You will be provided with multiple systems and will be required to install and configure Ansible Engine and then use it to perform standard system administration tasks similar to what you do on a job.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=110)** You will be required to create Ansible playbooks and use those playbooks to configure systems for specific roles and behaviors.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=116)** The tasks will be described in terms of a specific end state that you must achieve.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=121)** Your work will be evaluated by applying the playbooks created during the exam against freshly-installed systems and verifying that those systems and services work as specified.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=130)** The exam is hands-on and lasts four hours.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=132)** As of this recording, the exam cost is 400 US Dollars.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=136)** During the exam, you will not have access to the internet or outside materials.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=140)** You will, however, have access to documentation that ships with Red Hat Enterprise Linux.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=146)** You can take the exam either in a classroom if you've purchase Red Hat training, onsite if your company has arranged this with Red Hat, or by way of individual exam.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=155)** Most people will probably take an individual exam at a testing center.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=159)** To do so, visit Red Hat's website to determine a testing center location near you.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=164)** Testing centers are provided by Red Hat and other third party companies.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=167)** After completing the exam, you will not receive your scores immediately as those come from Red Hat Certification Central.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=173)** Examiners and training partners are not authorized to report results to candidates.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=177)** Scores are usually reported within three US business days.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=181)** Also, exam scores are not reported on individual items, but only on sections.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=186)** If you don't do well on one section, you'll need to study for the entire section again.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=190)** The RHCE exam is aimed at experienced Linux IT professionals who currently have an RHCSA certification, are pursuing the RHCE, or are preparing for one of the RHCA certifications.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=202)** It will also be beneficial for experienced IT professionals who desire a recognized certification in IT automation.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=209)** Also, this certification is useful for organizations that require compliance with a mandate such as DOD 8570.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=216)** If you are not a Red Hat administrator or a person pursuing a Red Hat certification, this course will still be valuable to you if you're interested in IT automation using Ansible.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=226)** I can't stress enough that this course and certification is general in nature and useful even if your infrastructure comprises Ubuntu, SUSE, or even Windows hosts.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=235)** This course is the first course in a three-part series covering objectives of the RHCE EX294 exam.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=241)** Specific objectives can be found on Red Hat's website.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=244)** Skills covered can be used to manage Ansible in any environment.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=249)** If you are new to Red Hat certifications and you only want to prepare for the RHCSA certification, then take the Red Hat Certified System Administrator EX200 course in the course library.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=259)** If you want to prepare for the RHCE certification, then take the EX200 course as well as this EX294 course.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=267)** If you want more in-depth training on administrating Red Hat Linux, take the Linux System Engineer Learning Path in the course library.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=273)** This course is one of a three-part series covering objectives of the RHCE EX294 exam.

> [!info]- Semantic Content
>
> **Env Vars:** rhce (14), ex294 (7), rhcsa (4), ex200 (4), rhca (2)
> **CLI Commands:** ansible (6)
> **Prerequisites:** required to (2), configure (2), install (1), you'll need (1)
> **Definitions:** is a  (2), stands for (1)
> **Code Keywords:** pass (1), require (1)
> **Analogies:** similar to (1), such as (1)
> **Versions:** 2.8 (1)
> **Speakers:** - [instructor] (1)

#### State of Enterprise Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=0)** - [Instructor] There are various operating systems that fit into the classification of Enterprise Linux.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=4)** It may be advantageous to understand how Enterprise Linux is created to bring clarity to recent changes in the available choices.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=11)** With that in mind, let's talk about how Enterprise Linux is developed.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=15)** The most recent versions of software, as well as new experimental packages are combined into a distribution called Fedora.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=21)** A fedora is a low, soft felt hat with a curl which may make sense as the Fedora project was created by the Red Hat Corporation.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=30)** In 2003, Red Hat chose who split Red Hat Linux into Red Hat Linux advanced server for the commercial market and Fedora Core for individuals.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=38)** Later releases were renamed Red Hat Enterprise Linux and Fedora.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=43)** Fedora Linux is managed by the Fedora Project, an independent community governed project primarily sponsored by Red Hat.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=49)** About a third of all contributions are made by Red Hat employees.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=53)** Although governed by the Fedora Council Red Hat retains legal liability over the Fedora Project.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=59)** In Fedora software is downloaded by users, tested and bug fixed, and once it reaches a sufficient level of stability Red Hat starts building the next release of Enterprise Linux from those packages.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=70)** This places Fedora upstream of Enterprise Linux as code flows downstream.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=76)** Enterprise Linux is generally based on a previous stable version of Fedora.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=80)** For instance, when Fedora 28, 29 and 30 were available Enterprise Linux 8 was based on Fedora 28.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=87)** Although Red Hat Enterprise Linux is a commercial product, Red Hat makes the source code available which other projects compile into distributions that are nearly identical to Red Hat's own.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=97)** One of the most popular is CentOS Linux which came out in 2004.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=101)** The CentOS project removed Red Hat's trademarked images and created CentOS Enterprise Linux.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=106)** This places CentOS downstream from Red Hat.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=109)** CentOS makes an excellent foundation for learning Enterprise Linux because it is nearly identical to Red Hat Enterprise Linux.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=116)** It is free, but it's provided without support.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=119)** I've used CentOS as a basis for nearly all of my courses in the LinkedIn Learning library.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=124)** It is common to have Red Hat Enterprise Linux servers on the frontline backed by paid Red Hat tech support and many CentOS servers in the background managed by in-house personnel.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=134)** It may seem that admins are benefiting from Red Hat development without paying them.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=138)** It should be noted however, that Red Hat benefits as well.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=142)** The widespread usage of CentOS in production environments results in countless bug reports and code submissions to make the enterprise platform even more robust as well as increase its popularity.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=152)** The relationship can, however, be a bit clumsy as code submissions to CentOS are applied downstream from Red Hat and then flow upstream.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=160)** This means that code is going both directions making it difficult to manage.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=165)** Red Hat who took over the CentOS project in 2014, took steps to mitigate the situation by creating CentOS Stream in 2019.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=173)** Instead of being a downstream copy of Red Hat CentOS Stream is placed between Fedora and Enterprise Linux.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=180)** This means the packages from Fedora are first used to create CentOS Stream where they undergo an additional level of testing before being folded into a new release of Enterprise Linux.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=190)** All bug fixes are applied upstream of Enterprise Linux making the development process simpler and some might say more streamlined.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=198)** In December 2020, Red Hat unilaterally terminated CentOS development and support ended on December 31st, 2021.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=207)** CentOS Stream is to be the only supported CentOS remaining.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=211)** So where does this leave you if you want to learn Enterprise Linux?
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=214)** Let's start by talking about Fedora.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=217)** Fedora Linux allows you to gain familiarity with various tools and file system structures of Red Hat.
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=222)** It is not identical to Enterprise Linux but it's similar enough that the skills acquired can be useful and in fact, you will be learning technologies before they're added to Enterprise Linux giving you time to get accustomed to them.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=234)** Note that Fedora is designed to be a software testbed and not with enterprise level stability in mind.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=239)** I would not use it for a large commercial server installation.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=242)** I would however, use it for development and as a desktop operating system CentOS Stream is perhaps a better choice as it is more similar to Enterprise Linux in both software package versions and stability, but caution has to be taken due to it not being considered a stable production quality operating system.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=260)** It is perfectly fine for learning Enterprise Linux and in truth would be adequately stable for any small scale projects that a user may have in mind.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=267)** An added bonus is that you would be using the next version of Enterprise Linux before it's even released.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=273)** A surprising replacement for CentOS is actually Red Hat Enterprise Linux.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=278)** Red Hat offers the Red Hat Developer Subscription for Individuals.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=282)** The subscription is free and allows for installing Enterprise Linux on up to 16 machines, either real or virtual.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=288)** Perhaps a good option to consider however limits are limits so plan wisely.
>
> **[4:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=293)** If you're looking for an exact replacement for CentOS in both functionality and freedom then better choices may include Rocky Linux which was created by one of the original founders of CentOS and named after another, or AlmaLinux OS, which was created by Cloud Linux, makers of Cloud Linux OS.
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=308)** Both of these are binary compatible and track Enterprise Linux software updates just as the original CentOS did.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=315)** CentOS can be migrated to either Rocky Linux or AlmaLinux OS by running scripts available on their websites.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), curl (1)
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** let (2)
> **Analogies:** for instance (1), similar to (1)
> **Warnings:** note that (1), caution (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Install Virtual Box
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=0)** - [Instructor] If you happen to be using Linux as your host OS, you'll want to install VirtualBox for that operating system.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=6)** If you're using Windows for your host OS, you can skip this video.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=11)** We will be installing VirtualBox, but also installing a VirtualBox extension pack.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=15)** Extension packs add additional functionality to VirtualBox.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=19)** To install VirtualBox, we'll need to download it first from the VirtualBox website.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=24)** Browse to [virtualbox.org/wiki/Downloads](https://virtualbox.org/wiki/Downloads) and hit Enter.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=30)** There are versions of VirtualBox for multiple operating systems.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=33)** In this tutorial, I am running a Linux computer, so I will download the Linux version by clicking on Linux distributions.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=41)** After clicking on Linux distributions, you'll get to be more specific about which distribution you're installing VirtualBox on.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=48)** If your host OS was Ubuntu, Debian, openSUSE or Fedora, you'd choose one of those links.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=55)** Since I'm running Enterprise Linux 8, I will choose the first item.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=59)** You can install the software package, but I like to save it first.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=63)** Make sure Save file is selected and click on OK.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=67)** Now click on the downloaded package, and it will start the package installer GUI.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=72)** Now I can click Install and install process will start.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=76)** The VirtualBox installer file that we downloaded will be installed in addition to any dependency packages that VirtualBox will need.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=83)** These dependencies will be downloaded from the software repositories on the internet.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=87)** This method does work, but I'd rarely ever do this.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=91)** Using this GUI tool is a fairly slow process, and more importantly this application gives you very little feedback while it's installing.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=99)** A faster, more informative and more reliable method is to use the command line.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=103)** Now, close this window and open a terminal by clicking on the Activities, in the top left-hand corner, and then typing terminal.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=112)** Since we're going to be using the terminal more later, drag it to your application bar on the left.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=121)** Now, whenever you want to start a terminal, you can just click on it.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=125)** Do that now.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=126)** You can also double-click the title bar to maximize it.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=130)** To install the VirtualBox package that we downloaded, we'll need to change to the downloads directory, type in cd ~/Downloads.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=141)** Note that Linux is case-sensitive, so be sure to include the capital D.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=145)** Now type in ls to list it.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=147)** Now type in ls to list the contents of the directory.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=151)** We can see our VirtualBox package file in red.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=155)** To install it, we'll use the DNF command and we'll elevate our privileges to administrator, using the sudo command.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=161)** Type in sudo, space, dnf, space, install, space, uppercase V, and hit your Tab key.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=169)** Hitting your Tab key will allow your terminal to fill out the line for you.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=173)** Our shell has command line completion built in, then hit Enter, and type in your password.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=181)** Note that it does not show you any characters on the screen when you type in your password.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=185)** The thing I like about the command line is that, not only is it fast, it tells you what it's doing.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=191)** Here we see that it's going to install VirtualBox 6.1, but also it's going to install two dependencies as well.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=198)** Note the Repository column, the VirtualBox package is coming from the command line, that is the package we downloaded.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=205)** But also note where the additional packages are coming from, a repository called appstream.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=210)** This is on the internet, The DNF command automatically figures out which other packages we need, and downloads them from the online software repositories.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=221)** It also tells us how much space the installation will take.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=224)** Press Y to continue.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=226)** Now we can watch the installation process.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=229)** DNF downloads the dependencies and installs them first.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=233)** Then after that is complete, installs VirtualBox.
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=236)** It will take a few minutes to complete and configure VirtualBox.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=240)** Notice that we didn't have to answer any questions during the install.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=243)** It just installs the programs.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=247)** After the packages are installed, it tells us that in order to create virtual machines, our user needs to be in the vboxusers operating system group.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=255)** This is for security reasons, as VirtualBox needs access to low-level resources.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=260)** We can check our groups by typing in groups, and hit Enter.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=265)** We can see that we are not part of the vboxusers group.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=268)** To add our current user to the vboxusers group, We'll use yet another command.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=273)** Type in sudo, space, gpsswd, space,
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=277)** - a for add, space, and then our username, mine is user1, space, and then the vboxusers group, and hit Enter.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=289)** Now type in your password.
>
> **[4:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=292)** This will add the username user1 to the vboxusers group.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=297)** Enterprise Linux also uses a highly secure mandatory access control system called SELinux that keeps it safe from malicious code.
>
> **[5:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=306)** We need to let SELinux know that we're using VirtualBox.
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=308)** Type in sudo, space, setsebool, space, dash capital P, space, use_virtualbox, space, 1, and hit Enter.
>
> **[5:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=322)** This flips a boolean, and allows VirtualBox to function.
>
> **[5:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=325)** If you don't do this now, you'll get notified later when attempting to use VirtualBox.
>
> **[5:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=331)** To ensure the installation and modification of the system configuration went well, reboot your Linux host by going to the top right-hand menu, click on the power button, and then click on Restart.
>
> **[5:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=342)** The extension pack adds additional functionality to VirtualBox.
>
> **[5:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=346)** It adds virtual USB 2.0 and 3.0 devices, VirtualBox Remote Desktop Protocol, host webcam and PCI passthrough, Intel PXE boot ROM and disk image encryption.
>
> **[5:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=359)** These additional capabilities make USB devices faster, allow remote access to VMs, support passing through webcams and other real expansion cards to VMs and encrypting the VM disk images for security.
>
> **[6:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=372)** Future extension packs may add more features, but will be installed in exactly the same manner.
>
> **[6:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=378)** Once your Linux host has rebooted, log in, then bring up your web browser, and go to [virtualbox.org/wiki/Downloads](https://virtualbox.org/wiki/Downloads) again.
>
> **[6:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=388)** Scroll down to the extension packs, and click on the extension pack for all supported platforms.
>
> **[6:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=393)** Unlike the main VirtualBox executable, which is specific to each operating system, the extension packs are only specific to the version of VirtualBox you have installed.
>
> **[6:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=402)** In our case, we have the latest version, so we will install the latest extension pack as well.
>
> **[6:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=409)** When prompted, click OK to open with Oracle VM VirtualBox.
>
> **[6:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=415)** The VirtualBox installation window will appear, click on Install.
>
> **[7:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=420)** View and accept a license agreement, and enter your password when prompted.
>
> **[7:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=429)** This should complete the extension pack installation, click on OK.
>
> **[7:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=433)** And to verify the extension is installed, click on File, Preferences, and click on Extensions, and you should see it.
>
> **[7:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=440)** And that is how you install VirtualBox on an Enterprise Linux host.

> [!info]- Semantic Content
>
> **Prerequisites:** install (14), configure (1)
> **CLI Commands:** dnf (4), sudo (4), make (2), ls (2), cd (1)
> **UI Navigation:** click on (10), double-click (1), go to (1), scroll down (1)
> **Env Vars:** dnf (3), gui (2), usb (2), pci (1), pxe (1)
> **Tools:** terminal (5), command line (4)
> **Code Keywords:** this. (1), from, (1), continue (1), let (1), function (1)
> **Versions:** 6.1 (1), 2.0 (1), 3.0 (1)
> **Code Identifiers:** opensuse (1), use_virtualbox (1)

#### CentOS 8 lab setup
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=0)** - [Instructor] Before we can install Linux in a VM, we need to make one.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=4)** Make sure the VirtualBox GUI is running on your host and then click on the New icon.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=8)** Name your VM rhhost1.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=13)** This will be short for Red Hat host number one.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=17)** Change the type to Linux and change the version to Red Hat 64-bit.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=24)** These settings just change the preset defaults in the rest of the Configuration Wizard.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=27)** So don't worry too much about them.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=29)** Now click on Next.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=31)** Although Enterprise Linux will run with less than one gigabyte of memory, things go smoother with 1.5, so let's change the value in the field to 1,500 and then click on Next.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=43)** We need to create a virtual hard drive.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=45)** Take note that this doesn't override anything on your host computer hard drive.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=49)** It only creates a file on your host that acts as a hard drive to your VM.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=54)** Make sure create a virtual hard drive now is selected and click on Create.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=59)** For the hard disk file type, leave the default selected, VDI or Virtual Disk Image.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=64)** Click on Next.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=66)** For the type of storage, selecting fixed size allocates all drive space now.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=71)** This means that if you choose to have a 10 gigabyte virtual drive, your host OS will allocate all 10 gigabytes right now so you'll be using 10 gigabytes of your host's hard drive space even if the guest drive is empty.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=83)** The upside to selecting fixed size is that disk access is slightly faster.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=88)** Dynamically allocated means that the host OS will only allocate space on the host hard drive when the guest VM's drive starts to fill up.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=95)** This is fantastic if we're running a lot of test VMs, because the drives will be mostly empty.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=100)** The disadvantage is that disk access will be slightly slower.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=104)** For this course, we'll choose dynamically allocated.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=107)** Now click on Next.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=109)** Now we need to choose the size of the virtual drive.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=112)** Technically it is possible to get Enterprise Linux 8 to install in an eight gigabyte drive, but we have to manually configure our drive partitions which is beyond the scope of this course.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=121)** Change the size to 10 gigabytes to make your life easier.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=124)** If you have more free space available on your host computer hard drive, then you can increase this size if you wish.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=130)** Choosing a larger size will allow you to install more software in your Enterprise Linux operating system.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=135)** Remember that we chose dynamically allocated.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=138)** So your guest virtual hard drive doesn't actually take up the space on the host computer until we add files to it.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=143)** So there's really no downside to creating a larger virtual disk.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=146)** Click on Create.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=149)** Now we have a new virtual machine ready for Linux to be installed.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7)
> **CLI Commands:** make (4)
> **Prerequisites:** install (3), configure (1)
> **Code Keywords:** let (1), override (1), type, (1)
> **Definitions:** means that (2), short for (1)
> **Env Vars:** gui (1), vdi (1)
> **Versions:** 1.5 (1)
> **Warnings:** note that (1)

#### Optimize your VM
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=0)** - [Instructor] Before we install, let's optimize our VM a bit.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=3)** Be sure that your rhhost1 VM is highlighted and click on the settings icon.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=7)** In the settings dialogue, click on System in the left hand pane and then click on the Motherboard tab.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=14)** Ensure Enable I/O APIC is selected.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=17)** Now click on the Processor tab.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=19)** If you have a multi-core host computer, then select multiple CPUs.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=23)** It's safe to select half the available CPUs.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=26)** If you have four CPUs available, then choose two.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=29)** This gives more CPU cycles to the guest, but still reserve some for the host.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=35)** Note that if you choose too many CPU cores, VirtualBox will let you know that the settings are invalid.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=42)** In the same tab, enable PAE/NX.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=46)** PAE allows 32 bit virtual machines to access more than four gigabytes of RAM.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=51)** If you're installing a 32 bit guest OS, then you definitely want to enable this feature.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=56)** We're going to be installing a 64 bit version of Enterprise Linux, so we don't actually need this but it doesn't hurt.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=62)** On the Acceleration tab, choose a hypervisor.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=65)** If you're on Windows, then Hyper V is your best option to choose.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=69)** If you're on Linux, then KVM may be your best option.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=72)** Leaving it on default allows VirtualBox to make that choice, which is perfectly fine.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=77)** Also select Enable Nested Paging.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=80)** If your host CPU supports this, it can result in better VM performance.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=84)** Now click on Display in the left hand pane.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=86)** Start by giving your VM more video memory.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=90)** We also want to enable 3D acceleration.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=93)** This is very important for most Linux desktops, as they utilize 3D instructions in modern display cards.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=99)** For the graphics controller, it's safe to let VirtualBox choose it.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=102)** VirtualBox may choose differently, depending on your host OS.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=106)** Now we have a virtual machine ready for installation.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=109)** There's a few other options I might mention that are not required, but may be useful.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=114)** Because we installed the extension pack, we can encrypt our virtual drives.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=118)** Click on General and then click on Disk Encryption.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=122)** If you choose to do this, it will take a few minutes to encrypt the drive, but it will slow down your drive write speeds due to the extra overhead of encrypting the data.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=129)** For this course, we'll leave our drives unencrypted.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=133)** If you click on storage in the left hand pane, we see our virtual drives.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=138)** If you want to add a second virtual drive to your VM, you can click on the static controller and then the icon at the bottom right.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=144)** If you place your mouse over the icon, you'll see a label with Add new storage attachment.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=150)** You can even add new hard drive controllers by clicking on the left most icon.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=154)** If you want to access your VM from another computer on your network, you need to change your network settings.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=160)** Click on Network, and then Adapter 1.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=164)** You'll notice by default, it's attached to NAT.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=167)** This means that this VM will have access to the local network, but your host PC and other physical computers on the local network will not be able to access your VM, meaning you will not be able to run services on it like web servers.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=179)** If you want your VM to appear as a normal computer on your network, so other computers can access it, you will need to change the setting to Bridged Adapter.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=187)** Not all wireless card support bridging, so if you have any problems, you can just set it back to NAT.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (3), pae (2), nat (2), apic (1), ram (1)
> **UI Navigation:** click on (10)
> **Code Keywords:** let (3), this, (2), static (1), default, (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Install Linux from DVD ISO
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=0)** - [Instructor] To install Enterprise Linux from the full DVD, we need to download an ISO image from the CentOS website.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=6)** We'll do this by opening a web browser and going to the download page at [sentos.org/download](https://sentos.org/download).
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=12)** Scroll down a bit and click on x86_64 and choose a mirror close to you for a faster download.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=19)** If you don't know where any of these servers are, just randomly select one.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=25)** At the time of this recording, the current version is 8.3.2011, but it may be different when you watch this video.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=32)** If you have a torrent client on your computer, you can click the .torrent file, and the load will be shared among other torrent users and most likely, download much faster.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=41)** On my network, downloading via torrent takes about 26 minutes.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=45)** Downloading the ISO file via web browser is over one hour.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=48)** It may be worth the effort to install a torrent client just for these files.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=53)** Now, click the dvd1 ISO image.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=55)** When the file dialogue presents itself, save the ISO image to your hard drive.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=61)** Once the ISO image has downloaded, select the VM named rhhost1 and click Start.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=67)** In the next dialogue, select the ISO image you downloaded by clicking the folder icon, then clicking Add and selecting the ISO image.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=74)** Now click Start again.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=75)** Now click on Open and then click on Choose and Start.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=82)** Highlight Install CentOS 8 with the cursor keys.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=85)** Selecting the item turns off the auto-start mechanism.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=89)** You can choose the second option to test the install media instead.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=92)** This is mainly for ISO images that have been burned to physical DVD discs.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=97)** We don't usually have to do this for ISO images that reside on hard drives.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=101)** Now hit Enter and wait for the system to boot.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=108)** When you click inside the window, your mouse pointer will become captive.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=112)** Sometimes your host computer mouse pointer does not line up with the mouse pointer inside the virtual machine.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=117)** If this happens to you, then place the mouse pointer in all four corners, and VirtualBox will center it.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=123)** Now click on Continue.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=127)** Now you should see the installation summary screen.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=129)** This is where you will configure how the operating system will be installed.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=134)** First, click on Time & Date and set your time and timezone and then click on Done.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=139)** You can also choose which keyboard you want CentOS to use as well as which language you want CentOS to use.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=145)** Now click on Software Selection and change it to Workstation.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=149)** This configuration doesn't have a ton of packages installed, but still has a full GUI.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=154)** Don't get too worried about installing software here as it can all be done later.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=158)** The only difference between these categories is the list of software packages that get installed now, as opposed to what we install later ourselves.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=165)** Now click on Done.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=168)** We can now choose our installation destination.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=171)** Naturally, this will be the only virtual disk available.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=173)** Make sure ATA VBOX HARDDISK is selected.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=177)** Under Storage Configuration, you'll see Automatic and Custom.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=181)** If you choose Automatic, the installer sets up three partitions automatically.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=184)** There's nothing wrong with this choice as the default partition layout is good.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=188)** If you choose Custom, you can set up the partitions manually.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=192)** The advantage to choosing Custom is that you get to see what the installer will create, and you can modify those results if you wish.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=198)** Let's click Custom and then click on Done.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=205)** This brings us into the manual partitioning screen.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=207)** Here, we could create any partition scheme we want.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=211)** However, we're going to cheat and click the link to create our partitions automatically.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=216)** This will give us a good default partition layout.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=219)** Clicking this link brings us to a new screen showing the proposed partition layout.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=224)** The installer wants to create a small partition, accessible at /boot, where our Linux kernel and other boot files are stored using the XFS file system.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=234)** Second, it wants to create a much larger root partition, where most of the operating system is stored, using the XFS file system again.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=242)** It also wants to create a smaller swap partition for virtual memory.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=246)** We can edit any of these configuration details on this screen.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=249)** Let's just click Done and Accept Changes to accept the installer suggestions.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=254)** We don't need the network configured to install with a full DVD, but if you want to configure the network now, you could, by clicking on Network & Host Name.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=262)** Now, we need to set the administrator's password.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=265)** Click on Root Password.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=267)** You want a very strong password for the root user because in Linux, the root user is all-powerful, and the username is known, making it a target.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=274)** If a hacker were to get this password, they'd have access to everything in the system.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=278)** The installer tells you if the password strength is good or not.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=281)** Use a combination of numbers, letters that are uppercase and lowercase and symbols for your strong password.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=287)** The installer will let you proceed with a weak password, if you wish, by clicking Done twice.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=291)** However, it's not recommended.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=294)** In Linux, we have the philosophy that the system designer should not force the users but rather give them the freedom of choice, even if those choices are bad.
>
> **[5:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=303)** Click Done.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=304)** If the installer doesn't let you go on, then the two passwords probably don't match.
>
> **[5:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=309)** It doesn't give you a lot of indication of this, but if you look at the bottom of the screen, you'll see the message.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=315)** We don't ever want to log in as root and especially not on the GUI.
>
> **[5:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=319)** There's just too much power and too few safeguards.
>
> **[5:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=322)** So on Linux, we always create a user.
>
> **[5:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=324)** Click on User Creation.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=327)** Enter user1 for the full name, and it will create a lowercase version of it for your username.
>
> **[5:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=332)** We'll create a strong password here because we're going to make this first user an administrator by clicking on the check box labeled, Make this user administrator.
>
> **[5:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=341)** It's very important that you click the administrator box now as the rest of our course depends on it.
>
> **[5:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=345)** If you fail to click this box, you'll need to log in as root after the install is finished and add this user manually to the wheel group.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=353)** It's best to do it now. Click on Done.
>
> **[5:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=357)** Now click on Begin Installation.
>
> **[6:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=361)** The install will take between 20 minutes and an hour, depending on your host computer's hardware.
>
> **[6:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=366)** As soon as the install is finished, you'll be able to click on Reboot to reboot into your new VM.
>
> **[6:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=377)** As soon as you VM reboots, you'll need to accept the license.
>
> **[6:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=380)** Click on License Information and then click the box at the bottom, I accept the license agreement and click on Done.
>
> **[6:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=388)** Now click on FINISH CONFIGURATION.
>
> **[6:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=390)** Now the system will continue booting to the login screen.
>
> **[6:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=395)** Notice that root is not even given as an option on the GUI.
>
> **[6:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=398)** You can specify any user if you click on the Not listed link.
>
> **[6:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=401)** However, I really recommend that you never do this.
>
> **[6:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=404)** Log in as the user you created, which was user1.
>
> **[6:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=411)** As soon as you log in, you'll be prompted to choose your language.
>
> **[6:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=415)** I'll choose the default and click on Next.
>
> **[6:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=418)** You will then be prompted to choose your keyboard.
>
> **[7:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=420)** Again, I'll choose the default and click on Next again.
>
> **[7:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=423)** Next we can choose our privacy settings.
>
> **[7:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=424)** By default, location settings are on.
>
> **[7:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=427)** I'm going to turn them off and then click on Next.
>
> **[7:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=430)** I will also skip creating online accounts by clicking Skip.
>
> **[7:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=434)** Lastly, press Start Using CentOS Linux.
>
> **[7:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=438)** The next window we see is a Getting Started window, explaining how the CentOS desktop works.
>
> **[7:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=444)** For now, we can close this window.
>
> **[7:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=447)** You can access this anytime you want by clicking on the Activities icon and then clicking on the Help ring and then clicking on Getting Started with GNOME.
>
> **[7:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=457)** Now, you have successfully installed CentOS Linux 8 via the full DVD image.

> [!info]- Semantic Content
>
> **Env Vars:** iso (9), dvd (4), gui (3), xfs (2), ata (1)
> **UI Navigation:** click on (20), select the (2), scroll down (1)
> **Prerequisites:** install (9), configure (2), you'll need (2), getting started (2), set up (1)
> **Code Keywords:** let (4), continue (2), match. (1), this, (1), this. (1)
> **CLI Commands:** make (3)
> **Best Practices:** recommended (1), it's best to (1)
> **URLs:** [sentos.org](https://sentos.org) (1)
> **Versions:** 8.3.2011 (1)

#### Install Linux Guest Additions
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=0)** - [Instructor] Virtual box guest additions are pieces of software installed in the guest operating system that give the guest OS a direct communication path to the virtual box hypervisor.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=10)** This allows the guest to take advantage of faster drivers, better screen resolutions and better integration between the guest and host, including a seamless mouse.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=19)** I highly recommend installing guest additions as it makes the virtual experience smoother.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=24)** Installing guest additions can be troublesome, but I think it's worth it.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=29)** Before installing virtual box guest additions, there are a few prerequisites.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=34)** All Linux operating systems software has to be up-to-date.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=37)** After the OS is updated, it needs to be rebooted so we're using the latest kernel from the OS update.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=44)** Note that shutting down the VM while restoring to a previous snapshot does not accomplish this.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=49)** The VM has to go through the boot process.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=52)** Networking needs to be turned on so we can install software packages from the remote software repositories to build the guest additions.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=60)** You may have to manually turn the network connection on.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=66)** For this exercise, your rhhost1 VM needs to be booted and you need to be logged in as user1.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=71)** Now open a terminal by clicking on Activities and then clicking on the Terminal icon.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=77)** Now let's update all software packages by typing in sudo dnf update -y and hit Enter.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=84)** Enter your password when prompted.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=88)** The sudo command allows us to elevate our privileges to the system administrator.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=92)** The dnf command handles software installations from the software repositories.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=96)** dnf has replaced the yum command if you're familiar with it.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=100)** You can still type in yum and it will still work.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=103)** I've also passed the -y option, which will answer all questions with a yes.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=107)** This way, we will not be prompted during the process.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=111)** When it's done, reboot by typing in sudo reboot and hit Enter.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=116)** Do not skip the reboot step or installations of guest additions will likely fail.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=128)** After your VM reboots, log-in, ensure the network is on and then open a terminal.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=137)** Now type in sudo dnf group install -y "Development tools"
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=149)** and hit Enter and enter your password when prompted.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=154)** This installs the software development tools group.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=157)** With Enterprise Linux Eight, we also need to install one more package.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=166)** Type in sudo dnf install -y elfutils-libelf-devel
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=175)** and hit Enter.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=177)** Whenever you see a package name ending in -devel, you know it's the source code for that package.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=182)** Once that is done, insert the virtual guest addition CD using the virtual box devices menu.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=188)** You will have to release your mouse pointer by pressing the host key.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=191)** Then go into the devices menu and go down to Insert Guest Addition CD Image.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=198)** When the dialogue box appears, click on Run and enter your password.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=205)** This will take a few minutes as it has to compile a new kernel module.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=210)** Once it's done compiling, press return to close the window.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=214)** You can also close your terminal.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=217)** You can now choose a larger screen mode by clicking on Activities and typing in displays.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=224)** Click on Resolution and choose a larger screen mode.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=232)** And click on Apply.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=233)** And then click on Keep Changes.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=237)** Now create a new snapshot by pressing your host key plus the T key.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=241)** Let's name this Guest Additions.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=245)** And in the description, type in guest additions installed and click on OK.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=253)** Now we have an updated VM with full screen mode and seamless mouse pointer.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (5), dnf (5), yum (2), cd (2)
> **UI Navigation:** click on (5)
> **Code Keywords:** let (2), this. (1), module (1)
> **Tools:** terminal (4)
> **Prerequisites:** install (4)
> **Exercise Files:** source code (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Virtual machine snapshots
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=0)** - [Instructor] VirtualBox allows us to take snapshots of the virtual machine state.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=4)** The purpose of a snapshot is to save a state or version of our VM.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=8)** This includes the running state of programs in the contents of the system memory.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=11)** We can have a number of snapshots that we can roll back to at any time.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=16)** For this exercise, you'll want your rhhost1 VM running.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=19)** So if it not, start it now.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=21)** Once it's booted up, log in and open a program.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=24)** I'm going to choose the files program on the dock.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=28)** Whenever I install a new VM, I like to take a snapshot of the fresh install.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=32)** This way if I want to go back to a freshly installed operating system, I can just roll back to this snapshot without having to install all over again.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=39)** I also take snapshots every time I install and configure anything major.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=44)** For instance, if I installed and configured a web server, I would take a snapshot once I got it working the way I wanted.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=50)** If later something goes wrong with a configuration, I could always roll back to the last working snapshot.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=56)** This works in the case of malware as well.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=58)** If I managed to be infected by a virus, I could roll back to the pre-infection snapshot in a matter of a minute.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=64)** My rule is this, if I don't want to do it again, take a snapshot.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=69)** Anytime we're using a VM and want to create a snapshot, we can just press the host plus T keys and the snapshot window will appear.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=77)** We can do that now and give the snapshot a name, and if more details are necessary, use the description box.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=83)** Let's call this one base install finished.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=88)** And in the description box, add no updates or guest additions installed.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=97)** This will remind us that these items still need to be completed.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=100)** Click on OK.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=102)** If you want to restore to the previous snapshot, just click the close gadget in the VMs window.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=108)** You may need to press your host key to release your mouse pointer.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=111)** A window will come up giving a few options, save the machine state, send shutdown signal or power off the machine.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=119)** The last choice has an option of restoring to the previous snapshot.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=122)** If we select this, our VM will be rolled back to the last snapshot we took.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=127)** Choose power off the machine and make sure restore current snapshot base install finished is selected and click on OK and the VM will shut down very quickly.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=137)** Once the VM has shut down, click on the start button again, and it will be restored.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=141)** Notice that the operating system didn't go through the boot process.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=145)** Even the files program that I started earlier is running.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=148)** Had the files program been copying files, it would resume exactly where it left off as if by magic.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=154)** If you want to roll back to any other snapshot, you'll need to do it from the VirtualBox manager window.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=159)** In the VirtualBox manager window, we can see that our VM is still running.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=164)** To see the snapshots, we want to click on the icon to the right of the VM name and select the snapshots menu item.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=170)** If we click on current state, we can click on the camera icon to take a snapshot.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=176)** This is the same as pressing the host key plus T in the VM window.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=180)** Let's create a few snapshots to play with.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=182)** Let's name the first one Test1 and click on OK.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=191)** We'll create another one and name it Test2 and click on OK again.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=198)** This will give us a couple of snapshots to play with.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=201)** If you want to delete any snapshot, just click on it and then click on the camera icon with the red X and then click on delete.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=210)** Notice the restore icon is grayed out.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=212)** This is because you cannot restore to a previous snapshot with a running VM.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=216)** Shut the VM down now by clicking on the close gadget and then click on power off the machine and do not select restore current snapshot Test1 and then click on OK.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=228)** Once our VM has shut down, we can see the restore icon is no longer ghosted.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=233)** We can click on any snapshot and click the restore icon to roll the VM back to that state.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=238)** Click on base install finished and click on restore.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=242)** A dialog box will pop up with a check box asking if we want to create a snapshot of the current state.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=247)** If we check the box, it will create a snapshot of the current state and we can restore our VM back to the way it is now.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=254)** If we uncheck it, then the current state will be lost.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=257)** Uncheck the box and then click on restore.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=261)** Now start up the VM by clicking on start.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=265)** This should happen very quickly as it's not actually booting but rather being restored into memory.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=270)** VirtualBox is extremely efficient when it comes to snapshots, much more so than other hypervisors that are available.
>
> **[4:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=276)** However, you may still end up with a lot of snapshots taking up disc space.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=281)** At any time, you can delete the snapshots that you don't really need.
>
> **[4:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=285)** For the purpose of this and other courses, it may be advantageous to create snapshots after you've completed each exercise.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=291)** This will allow you to revert your VM back to before the exercise and complete it again.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (16), select the (1)
> **Prerequisites:** install (7), configure (1), you'll need (1)
> **Code Keywords:** let (3), delete (3), this, (2)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Finish lab set up
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=0)** - [Instructor] Now we have a new VM, the network configured, and have guest additions installed.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=4)** Now let's make a clone of it.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=6)** Right click on your rhhost1 VM and select clone.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=10)** Name the clone rhhost2.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=14)** Click the dropdown and select generate new Mac addresses for all network adapters and click keep disk names.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=22)** Now click on next.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=24)** You may now choose to make it a linked clone.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=26)** This will save a lot of disk space but makes VM administration a bit more complex because our two VMs will share a base disk image.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=33)** If you want to squeeze a bit more performance out of your VM and you have extra disk space, you can choose full clone.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=38)** Click on clone.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=40)** When the cloning is done, boot each VM to ensure everything works.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=46)** After your hosts have booted, let's change their host names.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=50)** On rhhost1, open a terminal and type sudo hostnamectl set-hostname rhhost1
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=61)** .[localnet.com](https://localnet.com).
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=64)** Hit enter.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=65)** Enter your password if prompted.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=68)** We now create a snapshot by pressing your host key, NT, and name it Hostname set, and click on okay.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=83)** Now switch to rhhost2 and open a terminal.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=89)** Type sudo hostnamectl set -hostname rhhost2 .[localnet.com](https://localnet.com) and hit enter and enter your password if prompted.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=102)** Note that you'll have the log out and log back in again to see your prompt change.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=106)** Now take a snapshot by pressing your host key NT and name it Hostname set and hit enter.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=114)** Now you have two nearly identical VMs with unique host names.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), dropdown (1), switch to (1)
> **CLI Commands:** make (2), sudo (2)
> **Code Keywords:** let (2), switch (1)
> **URLs:** [localnet.com](https://localnet.com) (2)
> **Tools:** terminal (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Create a private network in VirtualBox
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=0)** - [Instructor] The easiest VirtualBox network setup is NAT or Network Address Translation, that is the default setup when you create a new virtual machine.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=8)** In this configuration, the VMs are assigned a private address, they can even end up with the same addresses.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=13)** They can access the internet, the virtualization host, and other physical machines on the network.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=18)** They act like single computers on private networks behind a router.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=22)** However, VMs that are NATed cannot access each other, neither physical hosts on the network nor the virtualization host can access the VMs without port forwarding.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=30)** This creates a problem if you want to set up any sort of network environment for a lab.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=34)** Generally, the easiest way of setting up VirtualBox VMs in a network that can talk to each other is to set the VM network device to be bridged with a host physical adapter.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=43)** With a bridge, the VMs are given IP addresses on the same network as the virtualization host and the physical machines.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=49)** This allows the VMs to communicate with each other or the virtualization host and other hosts on the physical network as well as the internet.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=56)** More importantly, this traffic goes both ways, on the real network can communicate with the VMs.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=61)** This makes a virtual network that's seamless with a real network.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=64)** The negative to this is that your VM network changes if the physical one does, for instance, if you were bridged to the host wire device and then later move the host computer and need to connect using its wireless LAN connection.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=75)** In this scenario, you need to change the bridge in VirtualBox settings to connect to the LAN card.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=81)** Another negative is that not all wireless cards and drivers support bridging, in this case, you'll have two VMs that can talk to each other and the host, but you can't send traffic outside the host to the rest of the physical network.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=92)** Lastly, you might not want to have your virtual network merged with your physical network.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=96)** Having a merged network means you can't run a DHCP server or some other services without there being conflicts with a physical network.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=104)** To avoid problems with a bridged adapter, we can set up our network a different way.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=108)** In VirtualBox, we can create an internal network or a host-only adapter.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=112)** The difference is that with an internal network, the VMs can communicate with each other but not with the host.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=118)** With a host-only adapter, the VMs can communicate with each other and also the host.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=123)** I like the host-only adapter better as it allows me to access the VMs from the virtualization host.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=128)** This makes it easy to secure copy files onto the VMs.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=131)** So if we overlay these two schemes, we will have a host-only adapter that lets our VMs communicate with each other and the virtualization host and we have a NAT network that lets our VMs communicate with a physical host on the network and the internet.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=145)** This is not the same thing as a bridge because it doesn't let the physical host on the network access to VMs.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=150)** It does require us to add a second virtual network adapter to the VMs, let's put this into practice.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=155)** To create a host-only adapter, use the VirtualBox manager window on your host computer, go to the File, Host Network Manager menu item.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=164)** To create a host-only adapter, click on Create.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=168)** This will create a network called vboxnet0.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=171)** You can have VirtualBox run a DHCP server inside the network to give out IP addresses or you can assign addresses manually.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=178)** For DHCP, click the enabled DHCP server checkbox.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=182)** We can change the address range of network as well, click the Properties button and then click on Configure Adapter Manually.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=189)** For the IPv4 address, let's change it to 192.168.3.1 and we'll leave the network mask at 255.255.255.0.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=201)** Now let's change the DHCP server range to match.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=204)** Click on the DHCP server tab and set the server address to 192.168.3.2, we'll leave the network mask at 255.255.255.0.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=216)** Then set the Lower Address Bound to 192.168.3.100 and the Upper Address Bound to 192.168.3.254, if these conflict with your physical network, then choose different network addresses to keep things simple, click on Apply and then close.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=238)** To set up our VMs to communicate with each other and the host and still be able to access the internet, we'll give them two network interface cards.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=245)** Their first will be a NAT card, which we'll use to access the internet and the second card will be a host-only adapter which we'll use to access other VMs and the virtualization host.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=254)** Make sure your VMs are shut down.
>
> **[4:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=256)** To change their configuration, click on the Discard button and then Discard again, which gets rid of the current running state.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=263)** Now click on the Settings icon and Network.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=266)** For Adapter 1, make sure it's attached to NAT, click on Adapter 2 and then click on Enable Network Adapter and change attached to to Host-only Adapter.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=278)** Now we will choose which host-only adapter we want, since we only have one, it will auto select it for us.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=284)** Click on OK and do the same thing for rhhost2 as well.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=288)** Click on rhhost2, click on Discard, Discard, click on Settings, Network, make sure Adapter 1 is NAT, click on Adapter 2, click on Enable Network Adapter, and then select Host-only Adapter, click on OK.
>
> **[5:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=303)** Now start both VMs up, log in and open a terminal in each.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=312)** Once you've logged in, open a terminal, in the terminal get your IP addresses used in the IP or ifconfig commands.
>
> **[5:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=320)** From my rhhost1 VM, I can see that my enp0s3 network device has an IP address of 10.0.2.15, that's the NAT network device.
>
> **[5:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=330)** My enp0s8 device has an IP address of 192.168.3.108, that's my host-only adapter address.
>
> **[5:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=340)** Now log into rhhost2 and check the IP addresses there.
>
> **[5:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=344)** Open a terminal and type in ifconfig, my enp0s3 address on rhhost2 is 10.0.2.15, the same as rhhost1.
>
> **[5:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=354)** This is because are NATed so every host is separate.
>
> **[5:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=357)** My enp0s8 address on rhhost2 is 192.168.3.109.
>
> **[6:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=364)** Now let's ping rhhost1 from rhhost2, type in clear, then type in ping space 192.168.3.108 or whatever your rhhost1 address is.
>
> **[6:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=377)** And we can see that that works.
>
> **[6:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=379)** Now let's ping the host, bring your line back and change 108 to one and hit Enter.
>
> **[6:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=384)** And we can see that that works as well.
>
> **[6:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=387)** If your virtualization host is Linux, macOS, or Solaris, you should be able to SSH to this address and log into it.
>
> **[6:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=394)** Now let's ping something outside of our host-only network.
>
> **[6:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=396)** Type in clear and then type in ping space [google.com](https://google.com) and hit Enter and press Control + C to end it.
>
> **[6:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=404)** When we ping outside of our host-only network, we're using the NAT address.
>
> **[6:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=408)** Note what that doing our network this way doesn't accomplish the same thing as a bridge adapter as that doesn't allow physical machines on the network to access our VMs.
>
> **[6:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=416)** It does provide a quiet network isolated from our real network though, which can be nice.
>
> **[7:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=421)** If you want real physical hosts on the network to access your VMs, you'll need to bridge the VM network devices with the physical host.
>
> **[7:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=427)** This works best when the physical host is using a wired connection.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (15), go to (1), checkbox (1)
> **Env Vars:** nat (7), dhcp (6), lan (2), ssh (1)
> **Code Keywords:** let (7), private (2), case, (1), require (1), match. (1)
> **Versions:** 192.168.3 (7), 255.255.255 (2), 10.0.2 (2)
> **Prerequisites:** set up (3), setup (2), configure (1), you'll need (1)
> **CLI Commands:** make (3), ssh (1)
> **Tools:** terminal (4)
> **Code Identifiers:** macos (1)

#### Reconfigure or migrate CentOS
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=0)** - [Instructor] It's important to note that Red Hat ended support for CentOS 8 on December 31st, 2021.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=6)** Part of the process involved changing the software repository URLs from [centos.org](https://centos.org) to vault.[centos.org](https://centos.org).
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=13)** If you have a CentOS installation and it cannot install software from its repositories, execute these steps.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=19)** If you're using Rocky Linux or AlmaLinux OS, you can skip this video.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=24)** First, make sure your networking is turned on by clicking on your top right-hand menu and clicking Wired Off.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=29)** Now click on Wired Settings, click on the gear icon next to the wired connection, and click on Connect automatically.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=37)** Now click Apply, and click the slider gadget to turn it on.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=42)** Now to fix the repositories in our terminal, type in cd /etc/yum.repos.d and hit enter.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=49)** Now comment out all mirrorlist lines by typing in sudo sed -i 's/, for the delimiter,
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=60)** mirrorlist/#mirrorlist/g, for global,
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=70)** ' CentOS-* and hit enter.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=79)** Now type in your user's password.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=82)** Now change the CentOS mirror URL to vault.[centos.org](https://centos.org).
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=86)** We'll need to use the pipe symbol for the sed delimiter because the URLs have forward slashes in them.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=92)** Type in sudo sed -i 's, for substitute again.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=97)** This time, type in a pipe symbol for the delimiter.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=101)** #baseurl=[http://mirror.centos.org|baseurl=http](http://mirror.centos.org|baseurl=http)://
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=123)** vault.[centos.org](https://centos.org)|g' CentOS-* and hit enter.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=137)** Now update your system by typing in sudo dnf update and hit enter.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=144)** Note that this makes your CentOS installation functional again.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=148)** Since this version is no longer supported, there will not be any more software updates for it, but you will be able to install current software from the repositories.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=156)** For now, this may be fine, especially for the purpose of learning.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=160)** However, in the future, it may become a problem when trying to install newer versions of software.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=168)** Once the update has been done, reboot your VM by typing in reboot and hit enter.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=175)** To be able to update your CentOS system with new versions of software and security patches, you'll need to migrate it.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=181)** A couple of options include migrating to Rocky Linux or AlmaLinux OS.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=185)** I will outline both processes in this video.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=188)** You can do either both, for educational purposes, or choose one.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=191)** Log back in, and then before making any changes to your VM, you should take a snapshot by pressing the host key + T.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=200)** Name the snapshot pre-migration and hit enter.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=205)** To migrate CentOS 8 to AlmaLinux OS, point your web browser to [almalinux.org](https://almalinux.org) and then click on the Migrate button.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=216)** This will take you to their GitHub page.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=219)** About halfway down the page, there is an almalinux-deploy.sh link.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=224)** Click on it and then click on Raw, and then right-click and select Save Page As.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=234)** Choose your Downloads directory and click on Save.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=239)** Once that's downloaded, go to your terminal and change the Downloads directory.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=244)** Type in cd ~/Downloads, with a capital D, and hit enter.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=249)** Now run the script by typing in sudo bash almalinux-deploy.sh, and hit enter again, and enter your password.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=260)** Once the migration is done, reboot into AlmaLinux OS.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=266)** Another option is to migrate to Rocky Linux.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=269)** To do so, you'll need to revert your VM back to the pre-migration snapshot again.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=274)** Click the VM Close gadget, select Power off the machine and select Restore current snapshot 'pre-migration' and hit OK.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=283)** Now click on Start to start your VM back up.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=286)** Once it's powered back up, bring up a web browser and browse to [rockylinux.org](https://rockylinux.org) and click on Migrate.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=299)** This page contains the documentation concerning migration from CentOS.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=304)** Partway down the page, is a link for the GitHub project page for the migrate2rocky script.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=310)** Click on that.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=312)** Now click on migrate2rocky.sh and then click Raw, and right-click and click Save Page As and save it to your Downloads directory.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=327)** Open a terminal and cd to your Downloads directory.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=329)** Type in cd ~/Downloads, with a capital D, and hit enter, and then run the script.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=335)** Type in sudo bash migrate2rocky.sh -r, and hit enter, and enter your password.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=347)** Once the migration process has finished, reboot into Rocky Linux.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=353)** The differences between Rocky Linux and AlmaLinux OS are minor and comprise boot images and backdrops at this point.
>
> **[5:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=359)** Both of these are nearly identical to CentOS 8 and will receive all future software updates.
>
> **[6:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=364)** Use whichever one you wish.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (5), cd (4), sed (3), make (1), yum (1)
> **UI Navigation:** click on (11), right-click (2), go to (1)
> **URLs:** [centos.org](https://centos.org) (4), [http://mirror.centos.org|baseurl=http](http://mirror.centos.org|baseurl=http) (1), [almalinux.org](https://almalinux.org) (1), [rockylinux.org](https://rockylinux.org) (1)
> **Tools:** terminal (3), github (2), bash (2)
> **Prerequisites:** install (3), you'll need (2)
> **File Paths:** almalinux-deploy.sh (2), migrate2rocky.sh (2)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** note that (2)


### 1. Introduction to IT Automation

> [↑ Back to Table of Contents](#table-of-contents)

#### About IT automation
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=0)** - [Instructor] IT automation is the use of software to create repeatable processes to replace all or part of human interaction in IT systems.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=8)** IT automation software works within the confines of the tradition IT environment to carry out tasks with little to no human interaction.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=16)** Modern dynamic IT environments need to scale faster than they ever have in the past and the key to managing this lies with IT automation.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=23)** Most IT tasks can be automated to some degree.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=27)** The advantages of automating is it gets the tedious repetitive tasks out of the hands of people.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=32)** This allows the same technicians and engineers to be more productive, reduce errors, improve collaboration, and free up time for more meaningful work.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=40)** Automation can apply to other systems, such as network infrastructure, cloud provisioning, application development, and configuration management.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=48)** Using automation technologies we can penetrate specific areas, such as containers, devops, cloud and edge computing, vulnerability assessments for security, system testing, as well as monitoring.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=59)** Generally speaking, if it's an IT task then automation can probably be applied to it.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=65)** There are multiple IT automation stacks, such as Puppet, Chef, Salt from Saltstack, and the reason we're here, Ansible Engine.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=73)** There are others, both commercial and open-source, but we'll focus on these four.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=77)** This is not a comparison of these technologies, as much as an overview of how these systems work and how Ansible contrasts to the others.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=85)** With any of these configuration management systems there's a control host and then a client receiving commands and or configuration information.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=92)** The client often can have a piece of software running on it called an agent that's waiting for commands and or configuration data.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=99)** In some cases, such as Salt and Ansible, the client may be agentless.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=104)** With Puppet the control host is called the Puppet master and the client is the Puppet agent.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=109)** And it uses an SSL connection provided by OpenSSL for communication.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=114)** The configuration data is stored in a file formatted similar to the Ruby language called the Puppet Manifest.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=119)** The Manifest is compiled specifically for each host and that host-specific Manifest is sent to the specific client.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=127)** This keeps sensitive data secret, but puts a lot of load on the Puppet master.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=131)** There are a lot of after-market pieces of software to enhance Puppet and give it more power, as well as make it scale.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=137)** Chef is a bit different.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=139)** It uses a lightweight RabbitMQ message queue connection between the server and the client's agent.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=144)** Chef configuration data is stored as Cookbooks and Recipes written in Ruby.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=149)** Salt from Saltstack, in addition to Ansible, represents the next generation of IT automation systems.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=154)** The control host in Salt is called the Salt master and the client is called the Salt minion.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=159)** It was designed from the beginning to be a remote execution stack with a super lightweight encrypted tunnel between the Salt master and Salt minion using 0MQ, making it very fast.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=169)** By default, it has an agent that's installed in the Salt minion that waits for instructions.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=174)** It can also work agentless and use the SSH protocol to communicate with the client.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=179)** This requires less initial setup, but isn't as fast and also relies on SSH access to the clients.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=185)** Salt configuration files called Salt State files are normally stored in YAML format, but it supports many different formats, and in fact, you can create your own.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=193)** Also, their not compiled specifically for each client, which relieves the control host of this arduous task.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=199)** The entire Salt State file is sent across the network and the client only pays attention to the portion that pertains to it.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=205)** This means you don't want to have any sensitive data in the State files, as all clients can see them.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=210)** This is a very fast solution that works for most situations.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=214)** For sensitive data Salt has specific State files called Salt Pillars, which are specific to each client.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=220)** This adds a bit of administrative overhead, but allows Salt to scale to 10s of 1,000s of clients.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=225)** The last system we'll look at is Ansible Engine.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=228)** Ansible is very similar to Salt when running in agentless mode.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=232)** It uses SSH or Remote Powershell on Windows host to send commands and configuration data to the client.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=238)** As such, the client configuration is very simple, as those communication methods are usually configured already.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=245)** Ansible stores its configurations in Playbooks and Plays in INI or YAML format.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=250)** Ansible aims to be simple to setup, simple to configure, consistent, secure, and reliable.
>
> **[4:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=256)** There's a performance overhead for using SSH, so Ansible has SSH pipelining, which allows executing multiple commands in one connection.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=265)** Both Salt and Ansible are great at sending commands to the clients as well as configuring them.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=269)** When Ansible's not controlling node it's not consuming any resources on the node, as there are no client applications running.
>
> **[4:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=276)** So here's how they work.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=278)** Let's say the configuration says that Apache should be installed and it should be running.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=282)** It doesn't matter which OS the client is running, it could be Ubuntu Linux, Red Hat Linux, or even Windows.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=288)** The control host holds a bunch of files that describe the configuration of the client.
>
> **[4:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=292)** Since these configuration files are ASCII text they can be tracked using revision control.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=297)** This revision control could be local or remote.
>
> **[5:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=301)** The automation process might go like this.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=304)** The production control host and client are cloned into a test environment, then a branch of the current production configuration is done on the revision control server, changes are made and tested.
>
> **[5:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=314)** The branch is then merged back into the production configuration and pushed out to our production control host, which modifies the configuration of our clients.
>
> **[5:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=322)** We then delete the configuration branch.
>
> **[5:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=325)** It may be more complex than this, but I think you get the idea.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (11), ssh (5), ruby (2), node (2), make (1)
> **Env Vars:** ssh (5), yaml (2), ssl (1), ini (1), ascii (1)
> **Code Keywords:** super (1), default, (1), let (1), this. (1), delete (1)
> **Analogies:** such as (4), similar to (2)
> **Definitions:** is called (3), is a  (2)
> **Prerequisites:** setup (2), configure (1)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)

#### Ansible concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=0)** - [Instructor] Ansible was created by Michael DeHaan, the author of Cobbler, the provisioning server application and which purchased by Red Hat in 2015.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=7)** It has since been integrated into Fedora and Red Hat Enterprise Linux 8.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=11)** It's also available for CentOs, SuSE, Debian and Ubuntu and others.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=16)** Ansible maintains an inventory of host to work against.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=20)** It then selects portions of the this inventory which are stored in ASCII text files.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=24)** This is important as they are easy to edit and can be managed with a version control systems such as Git.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=29)** Any machine with Ansible utilities installed can leverage a set of files and directories to orchestrate other nodes.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=35)** The absence of a central server requirements greatly simplifies disaster recovery planing.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=40)** These hosts with Ansible utilities can use multiple inventory files at the same time and even pull inventory from dynamic or cloud sources even in different formats such as YAML or INI.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=50)** Nodes are managed by these controlling machine over SSH.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=53)** In the cast of Windows nodes, it'll use remote powershell.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=57)** The inventory describes the location of the nodes to control.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=60)** Sensitive data can be stored in encrypted files by using Ansible Vault.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=64)** In contrast to Chef or Puppet, Ansible is agentless.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=68)** This means that there's no software agent running on the nodes consuming resources.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=72)** Instead, Ansible orchestrates a node by installing and running modules on the node temporarily via SSH.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=79)** For the duration of the orchestration task, the running module task communicates with a JSON based protocol via standard input and output.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=87)** These modules are mostly standalone.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=89)** It can be written in any standard scripting engine such as Python, Perl, Ruby, or Bash.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=94)** Ansible itself is written in Python, so that language is very popular with Ansible.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=99)** Ansible modules are suppose to prescribe to idempotency, which means the operation can be run multiple times and the resulting state is always the same.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=106)** Inventory is a description of the nodes that can be accessed by Ansible.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=110)** By default, the inventory is described in INI or YAML format.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=114)** The configuration file stores the IP address or hostname of each node.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=118)** Nodes can also be assigned to groups.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=121)** Here's an example of inventory file.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=123)** The first item specifies a node by IP address, and the latter two nodes are specified by a host names.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=129)** They're also part of the web service node group.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=131)** Ansible can also use a custom dynamic inventory script, which pulls data from a different system and supports groups of groups.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=139)** Ansible uses a playbooks to manage configurations and/or tasks on nodes.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=143)** A playbook is a YAML file that expresses the configurations, deployments, and orchestration, and they allow Ansible to perform operations on nodes.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=153)** Each playbook maps a group of hosts to set of roles.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=156)** Each role is represented to calls by Ansible tasks.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=160)** An example playbook may include a host or host group to run on.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=164)** Variables and task to execute.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=167)** To help manage inventory, there's Ansible Tower.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=170)** Ansible Tower is a REST API, web service, and web based console designed to make Ansible more usable for IT teams.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=177)** It is a hub for automation tasks.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=180)** It's also a commercial products supported by Red Hat and AWX, the upstream project is open source.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (18), node (5), ssh (2), python (2), git (1)
> **Env Vars:** yaml (3), ini (2), ssh (2), ascii (1), json (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** such as (3)
> **Code Keywords:** module (1), default, (1)
> **Tools:** powershell (1), bash (1)
> **Speakers:** - [instructor] (1)

#### About provisioning
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=0)** - Provisioning combines a set of actions to prepare a host with appropriate systems, data, and software, and make it ready for operation.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=8)** The host that we provision could be a bare metal server, cloud platform, virtualized system, hypervisor, or even a network device.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=15)** After bootstrapping, nodes can be connected to storage, added to load balancers, security patches, or even tasks executed.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=23)** We can use Ansible to provision the host, and then configure it, deploy applications, and lastly, manage it.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=29)** Provisioning with Ansible allows you to seamlessly transition into configuration management, orchestration, and application deployment using the same, simple, human readable automation language.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=39)** Underneath virtualization and cloud platforms there are one or more physical servers.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=44)** We can provision to bare-metal systems as Ansible integrates into many data center management invoke and enact provisioning steps.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=51)** However, virtualization has opened up an entire new world of diverse scenarios on IT automation.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=57)** And the scale in which we can provision is immense.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=60)** As such, Ansible has a large selection of modules specifically aimed at provisioning virtual environments.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=67)** Ansible network automation allows us to configure, validate, and ensure continuous compliance for physical network devices.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=73)** Using Ansible we can replace manual processes for provisioning networks.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=77)** Ansible can provision and manage infrastructure storage systems including software-defined storage, cloud-based storage, and even hardware storage appliances.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=85)** Although Ansible can provision many types of devices, it may be most common to provision.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=91)** Ansible includes many modules supporting services on the world's most popular cloud platforms.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=96)** Ansible has modules for compute instances, cloud storage, and modules for networking which allow playbooks to directly provision these services.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=103)** Ansible can even act as an orchestrator of other provisioning tools.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (11), make (1)
> **Prerequisites:** configure (2)
> **Speakers:** - provisioning (1)

#### About configuration management
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=0)** - [Instructor] Perhaps the most common use for Ansible is configuration management.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=4)** With Ansible, we can manage a node's operating system configuration including installed packages, device configurations, users, groups, and so on.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=12)** Ansible configurations are simple data descriptions of your infrastructure in a human readable format, ensuring everyone can read and understand them.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=20)** So, simpler the configuration, then the easier it is for team members to come up to speed on the configuration, freeing up work cycles for other tasks.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=27)** Ansible requires nothing more than a password or SSH key in order to start managing systems.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=33)** Because it is agentless, it can start managing them without installing software, voiding the problem of managing the management we have with other automation systems.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=41)** Ansible follows a state-driven resource model that describes the desired state of the computer or service, not the path to get to the state.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=48)** It means that no matter which state the resource is in, Ansible understands how to transform it into the desired state.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=55)** It can also do a dry run, which allows it to run through the process without actually changing the state of the node or nodes.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=61)** This allows reliable and repeatable IT infrastructure configuration.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=65)** Ansible relies on OpenSSH and does not use remote agents.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=69)** Ansible delivers all modules to remote systems and executes tasks as needed to enact the desired configuration.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=76)** These modules run with user-supplied credentials, including support for sudo, or even Kerberos, and then clean themselves up when complete.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=84)** Ansible does not require root login privileges, specific SSH keys, or dedicated users, and respects the security model of the system being managed.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=92)** As a result, Ansible represents a very low attack service and is easy to deploy to new environments.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=98)** Ansible features over 1,300 modules in its core distribution, providing a great base to get started with.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=105)** Ansible Galaxy has over 4,000 community-provided roles that can be used immediately or tailored to your particular environment.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=112)** As such, you can use them as templates for your own solutions.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (12), node (2), ssh (2), sudo (1)
> **Env Vars:** ssh (2)
> **Code Keywords:** require (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### About app deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=0)** - Application Deployment comprises activities that make a software system available for use.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=5)** The general deployment process consists of several interrelated activities with possible transitions between them.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=11)** These activities can occur at the producer side or at the consumer side or both.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=16)** Because every software system is unique, it's difficult to define the exact process.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=20)** However, deployment should be interpreted as the process that results in deployment of software to end users.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=26)** Deployment of applications involve several distinct steps, which we'll discuss now.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=30)** The release step follows the development process and, in fact, could be classified as being part of it, as opposed to the deployment process.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=38)** It includes the steps to transfer the applications to the systems which will run them in production.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=42)** It sometimes involves determining the resources required by the target system for desired performance and documenting subsequent activities for the deployment process.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=51)** Installation involves establishing some sort of installation procedure for executing the software.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=56)** This is the process that Ansible is designed for.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=58)** Not only can we define a state in which the software is installed on target hosts, but we can also start it and activate it.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=64)** Activation is the process of running the application for the first time and accepting license agreements, asking the user questions and so on.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=71)** Deactivation is the inverse of activation.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=74)** It refers to shutting down any already executing components of the system.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=78)** Deactivation is often required to perform other deployment activities such as updating the system or even application decommissioning, where it's removed from the system or replaced by another application.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=88)** Uninstalling is just that, the removal of the application from the host system's application stack when it is no longer needed.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=94)** This may require a degree of reconfiguration, depending on the application.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=98)** Application deployment is a vital part of software development.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=102)** In the development process, we might have a development environment, and, as our application's being developed, it will be deployed to this environment.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=110)** As development proceeds, the application deployment will move to a test environment and eventually into production as a release candidate.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=117)** Eventually, the release candidate will be removed, and the flow of production application will be deployed.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=122)** The process needs to be as simple and transparent as possible.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=126)** In the case of web application deployment, things get more complex.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=129)** For instance, it may look like this.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=131)** Run create table definition SQL scripts, it gets the database on a database server.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=136)** Configure Java database connectivity to the application server.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=140)** Then, configure HTTP ports and virtual hosts in the application servers, so the application is reachable.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=146)** Install the application in the application server, and start the application.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=150)** Next, configure the firewall by opening ports that allow communication between the web server and the application server.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=156)** Configure the web server so certain requests are routed to the application server.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=160)** Place static HTML content on the web server.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=163)** Restart or reload the web server configuration.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=166)** And, lastly, configure the outside firewall to allow access from desired users.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=171)** In the past, this would have been an all-day job to set this up.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=174)** Now, using IT automation, it can be at the push of a button.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=177)** Remember the Ansible playbook.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=178)** Strive to be idempotent.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=180)** You can run them multiple times and always get the same results.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=183)** The application is deployed and usable.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (5), required to (1), install (1)
> **Code Keywords:** for. (1), require (1), this. (1), static (1)
> **CLI Commands:** ansible (2), make (1)
> **Env Vars:** sql (1), http (1), html (1)
> **Definitions:** refers to (1), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - application (1)

#### About orchestration
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=0)** - [Narrator] Orchestration is the automated configuration, coordination and management of computer systems and software.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=7)** Orchestration takes advantage of multiple automated tasks that execute a larger workflow or process.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=12)** Automating a process requires countless steps, often spinning app, mobile and database.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=17)** So orchestration is the perfect term for this larger more complex technique.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=22)** It's not common anymore to just deploy one single application.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=25)** In today's world, deployments have gotten more complex and more challenging.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=29)** We have clustered applications, multiple data centers in different parts of the world, public, private and hybrid clouds and applications with complex dependencies.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=38)** To manage this, you need a more complex tool that can orchestrate deployments.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=43)** Think of IT orchestration just like the conductor of a musical orchestra with various types of instruments all playing different parts of a song.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=50)** The conductor brings all of these disparate instruments into one coherent whole song.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=54)** In the case of IT orchestration, it's similar.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=57)** Symbolizing instruments, we have front-end and back-end services, databases, monitoring services, networks and storage.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=64)** All of these systems play different roles, have different configurations and perhaps require different methods of deployment.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=70)** Some may be requirements for others.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=73)** All of this can be worked out using IT orchestration software.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=77)** There are different types of orchestration for IT systems.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=79)** For example, OpenStack clouds are built on many different pieces of software doing different tasks such as storage, network, identity, and more.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=87)** Each of these services have their own dependencies on other services or components and each have their own configurations and processes for deployment.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=95)** Note that OpenStack cloud orchestration is specific to that particular environment.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=100)** Orchestrating these complex systems is not new.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=102)** Many systems such as OpenStack's Heat, Amazon's CloudFormations or Docker's Swarm are designed to orchestrate their respective environments.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=111)** However, it may be beneficial to have a central tool such as Ansible that can orchestrate these systems using one common language and configuration type, as well as manage other systems not related to the cloud.

> [!info]- Semantic Content
>
> **Code Keywords:** public (1), private (1), this, (1), require (1), new. (1)
> **Analogies:** such as (3), just like (1), for example (1)
> **CLI Commands:** docker (1), ansible (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 2. Getting Started with Ansible

> [↑ Back to Table of Contents](#table-of-contents)

#### Host requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=0)** - [Instructor] Before installing Ansible Engine we need to discuss some host requirements.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=4)** For the Control Node, Ansible supports running in any machine that has Python 2 or Python 3 installed running Red Hat or clones, Debian, MacOS, any of the BDS's, or other UNIX-like operating systems.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=16)** Ansible does not support Windows Control Nodes.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=19)** The best practice is to have the Control Node near the nodes that it will be managing.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=25)** For instance, if your managed nodes are in the local network, then build a Control Node that resides there.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=30)** The same goes for Cloud Instances.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=31)** The Control Node should be in the Cloud with the managed nodes.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=35)** If you're using MacOS as your Control Node, you may need to increase the number of file handles.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=40)** By default, it's set to 14.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=42)** You can raise the limit with a launchctl command.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=45)** Note that certain Ansible plug ins may have additional requirements.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=50)** Red Hat officially supports using Ansible on managed nodes, including Red Hat Enterprise Linux 6.3 and newer, Ubuntu 14.04 and newer, 64 bit only, Windows server 2008, 2012, 2016, and 2019 and network device operating systems such as Arista EOS, Cisco IOS, Juniper's Junos OS, and others.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=74)** In addition, there's unofficial support for many other types of Linux and Unix such as CentOS, Suse, Solaris, MacOS, and AIX.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=83)** Managed nodes if they're unix-like, must have Python 2.4 or newer.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=87)** Managed nodes with Python 2.4 or 2.5 must also have the python-simplejson package installed.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=95)** Also, Ansible looks for the Python interpreter as /usr/bin/python.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=100)** If it's not in this location then you need to change the Ansible Python interpreter configuration to point to the actual location or create a symbollic link in Linux.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=109)** For managed nodes that use SELinux for mandatory access control, the linselinux-python package is required.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=116)** Ansible also manages Windows nodes.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=119)** For Windows nodes, native Powershell Remoting supported by the WS-management protocol is used instead of SSH.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=125)** Lastly, neither Ansible's raw module or script module require Python to be installed.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=132)** The former sends raw SSH operating system commands, and the latter sends a script that is executed.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=137)** These modules can be used to install Python on the managed host so other modules work.

> [!info]- Semantic Content
>
> **CLI Commands:** python (11), ansible (9), node (5), ssh (2)
> **Env Vars:** ssh (2), bds (1), unix (1), eos (1), ios (1)
> **Versions:** python 2 (3), python 3 (1), 6.3 (1), 14.04 (1), 2.5 (1)
> **Code Keywords:** module (2), default, (1), raise (1), require (1)
> **Analogies:** such as (2), for instance (1)
> **Tools:** powershell (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)

#### Install Ansible on the control node
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=0)** - [Instructor] Ansible can be installed on the control node using one of three different methods.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=4)** Using the Operating System package manager, using pip, the Python package manager, or by source code.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=12)** For this course, we'll be installing Ansible using the YUM package manager, which comes with CentOS.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=17)** If you're using Red Hat Enterprise Linux 8, you'll need to enable the ansible-2.8-for-rhel-8 repository.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=24)** For Red Hat Enterprise Linux 7, enable the rhel-7-server-ansible repository.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=31)** Since we're using CentOS 8 Enterprise Linux, we'll install Ansible Engine from the EPEL repository.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=38)** First, you'll need to install the EPEL repository, if you haven't already.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=42)** We'll be using our rhost1 VM as our control node.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=46)** To enable the EPEL repository in rhost1, log in to it and open a terminal.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=51)** And then type in sudo yum install -y epel-release and hit Enter.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=59)** Enter your password if prompted.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=60)** It's fine if it's already installed.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=63)** Ansible requires Python.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=65)** Python is probably installed already, but we'll need to make sure.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=68)** Type in clear and then type in sudo yum install -y python3 and hit Enter.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=76)** If we have multiple versions of Python, we'll need to set the default using the alternatives command.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=81)** Type in clear and then type in sudo alternatives --set python /usr/bin/python3
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=91)** and hit Enter.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=92)** Once Python is installed, we can install Ansible.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=95)** We'll also install the documentation.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=97)** To do so, type in sudo yum install -y ansible ansible-doc
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=107)** and hit Enter.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=109)** If you're installing Ansible on any other control node, you can refer to the installation guide on [https://docs.ansible.com](https://docs.ansible.com)/ for specific details.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=116)** That guide has installation instructions for Debian, Gentoo, Slackware, FreeBSD, macOS, Solaris, and more.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=126)** Another package that we'll install is argcomplete.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=128)** This provides show completion of the Ansible Command Line Utilities.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=132)** To install it, type in clear, and type in sudo yum install -y python3-argcomplete
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=141)** and hit Enter.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=145)** Argcomplete supports Bash and has limited support for Zsh and tcsh.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=150)** To activate argcomplete, we need to run a command.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=152)** Type in clear and then type in sudo activate -global-python-argcomplete
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=162)** and hit Enter.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=163)** This command creates Bash completion files in /etc/bash_completion.d.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=170)** The last thing we'll do is verify our Ansible installation.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=173)** Type in clear and then type in ansible --version and hit Enter.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=179)** This will show that Ansible is installed, the configuration file location, the module search path, the Python module location, the binary file location, and the Python version.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=190)** Note that if Ansible finds a .ansible.cfg file in the user's home directory, options in that file will override the global one listed here.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=199)** The last thing we'll do to set up the control node is create a simple inventory file.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=203)** You'll need to know your rhost2 VM's IP address for this, so check it if you don't remember it.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=208)** To add rhost2 to our inventory, type in sudo vi /etc/ansible/hosts and hit Enter.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=218)** We're going to add one line here, so go down a little ways.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=221)** Go into insert mode by pressing the I key and add in your rhost2 IP address.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=226)** Mine is 192.168.3.110.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=232)** This is a very simple inventory file with one host, but that's fine for now.
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=236)** Now save and exit by pressing Esc, :x!, and hitting Enter.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=241)** Now list your inventory by typing in clear.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=244)** Type in ansible all --list-host and hit Enter.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=250)** This should list rhost2 as our only managed host.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (19), python (9), sudo (7), yum (5), node (4)
> **Prerequisites:** install (10), you'll need (3), set up (1)
> **Tools:** bash (2), terminal (1), command line (1), zsh (1)
> **Code Keywords:** module (2), override (1), this, (1)
> **Env Vars:** epel (3), yum (1)
> **Code Identifiers:** macos (1), bash_completion (1)
> **Versions:** 2.8 (1), 192.168.3 (1)
> **File Paths:** ansible.cfg (1)

#### Prepare managed nodes
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=0)** - [Instructor] Before we can manage rhhost2, we need to prepare it.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=4)** Be sure to have both rhhost1 and rhhost2 up and running.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=7)** We'll start by making SSH keys on rhhost1.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=11)** In a terminal, as your normal user, create SSH keys by typing, ssh-keygen, and hit Enter.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=18)** This will generate a new RSA key pair.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=20)** When it prompts you for a location to save the keys, just take the default and hit Enter.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=25)** When it prompts you for a password, hit Enter, and when it prompts you again, hit Enter again.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=30)** Now, list the ~/.ssh directory.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=34)** Type in, ls ~/.ssh, and hit Enter.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=38)** We see that we have two files in this directory now, id_rsa and id_rsa.pub.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=45)** Now, we'll copy the public key to rhhost2 using the ssh-copy-id command.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=50)** Type in clear, and then type in, ssh-copy-id, space, and then enter rhhost2's IP address.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=58)** For me, it's 192.168.3.110, and hit Enter.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=64)** When it asks to accept the fingerprint, type in yes, and hit Enter.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=68)** And then, enter user1's password on rhhost2.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=71)** We didn't have to give it anymore information as it tried logging in as a user1 user, which exists on both VMs.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=77)** Since we saved the keys to the default location, the ssh-copy-id command knew where to find them.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=83)** Now, we'll test our ability to communicate with rhhost2 by using the Ansible ping ad-hoc command.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=89)** Type in clear, and then type in, ansible -m ping all, and hit Enter.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=96)** If we're able to communicate with rhhost2, we'll see it in the output.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=99)** To send any regular Linux commands to rhhost2, we can us the -a option.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=103)** For instance, ansible -a "uptime" all,
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=112)** and hit Enter.

> [!info]- Semantic Content
>
> **CLI Commands:** ssh (8), ansible (3), ls (1), find (1)
> **Env Vars:** ssh (2), rsa (1)
> **Code Keywords:** pub (1), public (1)
> **Code Identifiers:** id_rsa (2)
> **Versions:** 192.168.3 (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### View Ansible Documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=0)** - [Instructor] To read the official Ansible documentation point a web browser to docs.[ansible.com/ansible/latest](https://ansible.com/ansible/latest).
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=7)** This has some quickstart guides as well as documentation for modules and ad hoc commands.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=13)** If you're using Ansible in the command prompt and want quick documentation for command, you can view the man pages.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=19)** There are man pages for ansible-config, ansible-console, ansible-galaxy, ansible-inventory, ansible-playbook, ansible-pull, ansible-vault and lastly ansible-doc.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=32)** This last one I want to focus on here.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=34)** Ansible-doc is good for pulling up documentation on Ansible plugins and modules.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=39)** To get a listing of all available modules type in ansible-doc -l.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=47)** There are over 3,300 entries to scroll through.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=50)** If you want to narrow the list down to just a certain area you can provide the -t option followed by the plugin type.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=57)** For instance, type ansible-doc -t cache -l for list and hit enter.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=64)** Possible plugin types are become, which is for privilege escalation, cache for backing caching, callback, which enables adding new behaviors and responding to events, cliconf, which provides an interface for executing tasks on network devices, connection, which are used to connect to targets, httpapi, which interacts with a remote device's HTTP based API, inventory, which points at data sources for inventory, lookup, which allows Ansible to access data from outside sources, netconf, provides an interface to execute tasks on netconf devices.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=101)** Shell plugins ensure that the commands are properly formatted modules.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=104)** Strategy controls the flow of play execution.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=107)** And lastly, vars plugin which inject additional variable data into Ansible runs that did not come from an inventory, source, playbook or command line.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=116)** If you want documentation on a specific plugin such as file, type in ansible-doc file and hit enter.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=124)** This will show you the location of the module in the file system, a summary of the functionality, and list of options.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=130)** Near the end of the file, you'll see other closely related commands as well, which can be helpful if you're just learning Ansible.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=136)** At the end of the documentation are some examples on how to use it.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=140)** After you've been using Ansible for a while, you'll know which modules to use to solve problems, but you may not remember the exact options.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=146)** You can read the entire documentation page, or you can just get a snippet of it.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=150)** To get a snippet use the -s option, type in clear and then type in ansible-doc -s file and hit enter.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=159)** This snippet will just list the options for the module with descriptions.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (22)
> **Code Keywords:** interface (2), module (2), type. (1), while, (1)
> **Env Vars:** http (1), api (1)
> **Tools:** command prompt (1), command line (1)
> **Analogies:** for instance (1), such as (1)
> **URLs:** [ansible.com](https://ansible.com) (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


### 3. Setting Up an Ansible Environment

> [↑ Back to Table of Contents](#table-of-contents)

#### Build static inventory
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=0)** - [Instructor] Ansible works against multiple nodes or hosts at the same time.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=3)** This list of nodes is called an inventory and can be static or dynamic.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=8)** Once you've defined your inventory, you can target certain hosts or groups of hosts using patterns The default inventory file location is /etc/ansible/hosts.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=17)** However, you are free to specify a different static inventory file using the -i command option.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=23)** You can also use more than one static inventory file at the same time.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=26)** The inventory file can be in one of many different formats depending on the inventory plug-ins you have installed.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=31)** The most common formats are INI and YAML.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=35)** The INI file is the simplest, so we'll look at it first.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=38)** A basic INI inventory file looks like this.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=41)** The headings in brackets are group names which are used in classifying hosts and deciding which host to control at one time.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=47)** The single entry is specified but not grouped.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=50)** The same file in YAML format is a bit more complex looking.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=53)** The YAML formatted file has multiple levels of indention, and the lines end with a colon.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=58)** You may notice that we also have listed an all group, and everything is nested under it.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=63)** This is a default group.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=64)** There are two such default groups, all and ungrouped.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=68)** The all group contains every host.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=70)** The ungrouped group contains all hosts that don't belong to another group.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=74)** Every host will always belong to at least two groups, or all and ungrouped or all and another specific group we've defined.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=82)** You will most likely place your host in more groups than these two.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=85)** Often groups are categorized in what.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=87)** What, which is a service or services a host provides such as Web or DNS.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=92)** Where, which is where a host is located if it's in a multi-location company.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=97)** The where may be north or south or more specific like Seattle.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=101)** When, such as development stage, test stage, or production stage.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=105)** Our previous YAML file already satisfies what in the case of web servers and db servers.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=110)** If we were to expand our YAML inventory file to include where and when, it would look like this.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=116)** To satisfy the where, we have a group for Seattle and for San Francisco, each with one web server and one db server.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=123)** To satisfy when, we also have a production group with web1, web2, db1, and db2 in it.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=129)** The test group has web3 and db3.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=132)** We can also nest.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=133)** For instance, if all hosts in prod were in San Francisco, we could call the San Francisco group instead of listing the servers again.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=141)** There are more shortcuts that we can employ in our inventory files, for instance, ranges.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=146)** In this file, we're specifying web1, web2, and web3.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=150)** We can use a range to compress them into one line.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=153)** We can add alphabetic ranges using the same syntax.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=157)** The format is the same for INI files, just include the range in the host name.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=161)** If you need to access a host on a non-standard SSH port, you can add it to the host name.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=166)** Ansible lets us specify the inventory file using the -i option followed by the path to the file.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=171)** We can provide more than one inventory file in the same manner by providing more than one -i option with path.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=177)** Keep in mind that if there's a conflict in the two files, the variables in the latter file will be used.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=182)** So in this case, variables in production will override those in staging because it's processed last.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=188)** In our small lab set up, we have a very simple inventory file because rh host2 is our only managed host.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=194)** If you want to make your system more interesting to manage and you have more resources, you can clone rh host2 and add it to your static inventory.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=201)** Now, let's prepare for the future and modify our static inventory file.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=204)** Type in sudu space vi space /etc/ansible/hosts and hit enter.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=210)** Type in your password if prompted.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=212)** Currently we have one line in this file with rh host2's IP address.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=216)** Let's include rh host2 in a couple of groups.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=219)** We'll keep our inventory file in INI format for this course.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=223)** Go down below the IP address and go into insert mode by pressing the i key and then add left square bracket webservers right square bracket and then below that rhhost2.[localnet.com](https://localnet.com).
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=236)** And then we'll add another group, left square bracket dbservers right square bracket and then the host name again.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=244)** We have a default group of all which includes all hosts.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=247)** We also have a web servers group which includes rh host2 in it as well as a db servers group with the same host.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=253)** We could target this host directly or specify either of these groups.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=257)** Let's save and exit by pressing escape, colon, exclamation mark and hitting enter.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=262)** Note that before we can target by domain name, we need name resolution either static or dynamic.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=267)** For this we'll edit the Etsy host file in rh host1.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=270)** Type in sudu space vi space /etc/hosts and hit enter.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=275)** Go into insert mode and add a new line.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=278)** For the first column, add in rh host2's IP address.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=281)** For me this is 192.168.3.110 and then space and rh host2.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=289)** Then space again and rhhost2.[localnet.com](https://localnet.com).
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=294)** Now save and exit by pressing escape, colon, exclamation mark and hitting enter.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=299)** The last thing we'll do is test it.
>
> **[5:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=301)** To test it, we'll type in ping space -c1 for one count rhhost2 and hit enter.
>
> **[5:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=307)** If that works, bring your line back and add .[localnet.com](https://localnet.com) and hit enter again.
>
> **[5:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=313)** If that works, we can proceed.

> [!info]- Semantic Content
>
> **Code Keywords:** static (6), let (3), this. (2), case, (1), override (1)
> **Env Vars:** ini (5), yaml (5), dns (1), ssh (1)
> **CLI Commands:** ansible (4), ssh (1), make (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** such as (2), for instance (2)
> **URLs:** [localnet.com](https://localnet.com) (3)
> **Warnings:** keep in mind (1), note that (1)
> **Versions:** 192.168.3 (1)

#### Work with dynamic inventory
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=0)** - [Instructor] Your inventory may change over time.
>
> **[0:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=2)** This could be due to hosts spinning up and shutting down in response to demand.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=6)** You may also not manage the list of hosts in your network or it may not be available to you.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=11)** You may need to pull inventory from other sources like cloud providers, LDAP, and other management systems or databases.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=18)** Ansible handles dynamic inventory in one of two ways, inventory plugins and inventory scripts.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=24)** Dynamic inventory plugins are part of Ansible and are written and maintained like the rest of the Ansible code.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=30)** It's recommended to use plugins if there's one available for your inventory source.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=34)** It's important to note that you can write your own dynamic inventory plugins as well.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=39)** The second method is using inventory scripts.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=41)** Scripts are written in a general scripting language such as Python.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=44)** Using a script involves putting a .ini file in the etc Ansible directories so Ansible knows where the dynamic inventory source is.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=51)** Then you create a script and copy to etc Ansible that does the heavy lifting for you and call it using the -i option.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=59)** This script essentially returns the inventory list.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=61)** Often, these scripts are written in Python and can be hundreds to thousands of lines long depending on how complex it is to get the inventory list.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=68)** There are scripts available for getting inventory from Cobbler, Amazon EC2, OpenStack, Zabbix, CloudStack, and many, many more.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=77)** We will not be going into how to create dynamic inventory scripts in this course, as it's beyond the scope.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=83)** However, if you'd like to see the source for the dynamic inventory scripts available, open a web browser and go to [github.com/ansible/ansible/tree/devel/contrib/inventory](https://github.com/ansible/ansible/tree/devel/contrib/inventory) and view them yourself.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (8), python (2)
> **Env Vars:** ldap (1), ec2 (1)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Manage Ansible configuration files
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=0)** - [Instructor] For most set ups, you will not need to change the Ansible configuration.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=3)** However, it's good to know how Ansible's configured in case you need to change it in the future.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=8)** Ansible supports several methods of configuring its behavior including the Ansible.cfg file, environmental variables, command line options, playbook keywords, and Ansible variables.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=19)** The lowest priority configuration source is actually the Ansible.cfg file, but also probably the one we'll use the most.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=25)** Ansible looks for the configuration file in the following order.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=29)** It looks for a path to it in the Ansible config environment variable.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=33)** Then it looks for the Ansible.cfg file in the current directory.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=36)** Next, it looks for the Ansible.cfg file in the user's home directory.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=40)** And lastly, it looks for the Ansible.cfg file in the /etc/Ansible directory.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=45)** Once it finds the configuration, it parses it.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=48)** Ansible variables set in playbooks override all other methods.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=51)** Variables are set in playbooks using the vars keyword.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=54)** We can also assign Ansible variables on the command line using the dash e option.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=59)** OS environment variables have a higher precedence than entries in any of the Ansible.cfg files that Ansible confined.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=65)** If you have environment variables set on your control node, they override the settings in any of the Ansible.cfg files.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=71)** Command line options like environment variables will also override any settings in the Ansible.cfg file.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=77)** Configuration data can also be included in Ansible keywords.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=81)** These can be in plays, blocks, or tasks.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=84)** For instance, we can have a play that specifies the SSH connection type overriding the Ansible.cfg file.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=90)** Unless we have a reason to, we'll probably not override the Ansible.cfg file, at least not yet.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=95)** Let's take a look at it.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=96)** In your rhhost1 vm, open a terminal, type in less space dash capital N for line numbering, space slash etc slash Ansible slash Ansible.cfg and hit enter.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=106)** Lines 10 through 28 declare some default configuration items such as the locations of various files, the pseudo user, and the SSH port.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=115)** Lines 30 through 65 configuration how Ansible will gather facts about their managed hosts.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=120)** Line 68 defines the location for roles.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=122)** Line 71 allows us to turn off host key checking if you don't want strict host key checking in SSH.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=130)** Line 83 allows us to white list some plug-ins that are not allowed to run by default.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=134)** Line 100, allows us to change the pseudo command options if necessary.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=140)** Line 119 allows us to change the shell that Ansible uses.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=144)** This might be important if you need features not in the standard born emulation mode.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=150)** Lines 191 through 203 show the location for our different plug-in types.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=156)** We can configuration SSH starting with line 370.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=159)** Line 401 controls SSH pipelining which allows more than one command in one connection speeding up processing.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=165)** Lastly, if you need to study specific SELinux security conducts, we can do that in line 464.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=171)** At this point, we should not need to change any of these options, but now you know where there are in case you need to modify Ansible behavior.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (26), ssh (5), node (1)
> **File Paths:** ansible.cfg (11)
> **Code Keywords:** override (4), let (1), default. (1)
> **Env Vars:** ssh (5)
> **Tools:** command line (3), terminal (1)
> **Analogies:** for instance (1), such as (1)
> **Speakers:** - [instructor] (1)


### 4. Using Ad Hoc Commands

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to ad-hoc commands
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=0)** - An ad-hoc command uses the ansible command line tool to automate a single task on one or more managed nodes.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=6)** You can not reuse them like playbooks.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=8)** Whereas a playbook can be run multiple times to automate the configuration or orchestration of one or more nodes, an ad-hoc command is a one-time thing.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=16)** Ad-hoc commands are for running tasks that you don't need to repeat.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=20)** For instance, if you wanted to reboot all web servers, you wouldn't want to create a playbook just for this one task.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=25)** It's easier to send an ad-hoc command to all web servers telling them to reboot.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=30)** Also, the methods you use in an ad-hoc command can be used in a playbook.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=35)** Sometimes it's useful to test a particular task before committing it to a playbook.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=39)** Ad-hoc commands are perfect for this.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=41)** You can also use any of the modules available for playbooks in ad-hoc commands.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=45)** The syntax for an ad-hoc command is this.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=48)** In this case, the pattern is a managed host you're targeting, such as web servers.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=52)** Module is the ansible module you intend to use.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=55)** And module options are the options specific to that module.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=59)** For example, if you wanted to use a shell module to send the echo command to all managed hosts in the web servers group, you'd type in ansible webservers
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=66)** - m shell, for the shell module,
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=69)** - a and inside single quotes the command line string.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=73)** And inside single quotes, the string of commands.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=77)** For simpler commands, we can use the command module.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=79)** Let's say I wanted to reboot all web servers.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=81)** I'd type ansible webervers a and then put the commands inside quotes.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=87)** Note that if you have a variable in the command string, you'll need to use single quotes.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=91)** Otherwise, you can use double.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=93)** It's important to note the differences between these modules.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=96)** The command module runs an OS command, doesn't use a shell, does not support pipes or redirects, does not utilize a user environment, is simple and is very secure.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=106)** The shell module also runs a command on the managed host; however, it runs inside of a shell.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=111)** And as such, supports pipes and redirects, has a user shell environment including shell variables, and, due to running in a real shell, is more complex but also more compatible with commands you'd manually type in if you were logged in to the remote machine.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=124)** If we're running a task, such as a reboot process on a large number of managed hosts at the same time using ad-hoc commands, they may not complete as fast as we'd like.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=133)** Ansible, by default, only starts five processes and then waits for them to complete before starting more.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=138)** If we had 500 web servers, it may take quite a while to reboot them all.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=143)** We can change the number of processes temporarily by appending the -f option.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=147)** For instance, to bump it to 10 processes, we'd use -f 10.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=151)** If you need to run a command as a different user, you can append that as well.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=155)** Now we're running the process as a user named user1.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=158)** Often, when we're administering systems, we need to elevate privileges.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=162)** In an interactive session, we'd use sudo for this.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=164)** In ansible, we use the --become option.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=167)** This works if we can become root without being prompted for a password.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=171)** To have ansible prompt for the user's sudo password, add --ask-become-pass.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=176)** As these options are getting long, we might want to shorten --become to -b and --ask-become-pass to -K.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=186)** I also want to mention that you need to be aware if the command you're running is specific to a certain shell.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=191)** Ansible uses /bin/sh for its shell.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=194)** In many systems, this is a symbolic link to /bin/bash with bash running in born compatibility mode.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=200)** As such, things might not work exactly the same, such as this exec line.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=205)** Although it may be tempting to use the command or shell modules to run Linux commands, it's usually better to use a module designed for the task at hand.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=213)** For instance, to copy a file from one place to another on every host in the web servers group, you could use the copy module.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=220)** A similar need is to manage file permissions, which ansible has a module for called file.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=224)** This will change the permissions to read write for the user owner and nothing for anyone else for db.txt file.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=230)** The file module can also make directories and delete files and directories even recursively.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=235)** We can use the yum module to install packages manually, the user module can manage user accounts, and the services module to start and stop services.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=244)** The great thing about ad-hoc commands is that you can try them out and if you need to reproduce the functionality, put them in a playbook.

> [!info]- Semantic Content
>
> **Code Keywords:** module (16), this. (3), pass (2), case, (1), let (1)
> **CLI Commands:** ansible (9), sudo (2), make (1), yum (1)
> **Analogies:** for instance (3), such as (3), for example (1)
> **Tools:** command line (2), bash (2)
> **Definitions:** is a  (3)
> **Speakers:** - an (1), - m (1), - a (1)
> **Warnings:** note that (1), be aware (1)
> **Prerequisites:** you'll need (1), install (1)

#### Targeting hosts with patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=0)** - When running ad hoc commands or playbooks, you'll be targeting certain hosts to run them against.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=4)** For this, you'll use patterns.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=6)** An Ansible pattern can refer to a Single host, IP Address, and Inventory Group, a set of groups or all hosts in your inventory.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=14)** Patterns can be very flexible.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=16)** You can include and exclude subsets of hosts, use wildcards or even regular expressions.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=22)** For ad hoc commands, the pattern might look like this.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=24)** In this case, we're sending the reboot command to all hosts in the Ansible group web servers that we set up in our inventory.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=30)** For our setup, this happens to be the rhhost TVM The same thing in a playbook looks like this, we put the pattern after the host keyword.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=39)** common patterns are, all or asterisks for all hosts, the host name for one host, an Ansible groups such as web servers for all hosts in the Ansible group named web servers, host names separated by a colon for more than one host such as web servers, colon, dbservers.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=56)** For all hosts in the web servers and dbservers Ansible groups, the host does not have to be in both.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=61)** Host name separated by a colon and an exclamation mark such as web servers colon, exclamation mark dbservers, for all hosts in the web servers Ansible group, except those in the dbservers Ansible group.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=75)** Host names separated by a colon and an ampersand such as web servers, colon ampersand dbservers, for any servers that are in both web servers and dbservers groups.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=85)** You can also combine any of these into complex patterns.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=90)** You can also use wildcard patterns on fully qualified domain names and or IP addresses, as long as they're defined in your inventory such as one nine two dot one six eight dot backslash asterisk, which would match any host in the one nine two dot one six eight network.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=105)** Backslash asterisk dot local net com for all hosts in the local net com domain, or backslash asterisk com for any dot-com domains.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=114)** You can also mix wildcard patterns in groups such as rhhost asterisk, dot-com colon dbservers.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=121)** This would match any host name starting with our rhhost and ending with com, as well as all hosts in the dbservers Ansible group.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=129)** It's important to note, that you have a lot of flexibility when targeting managed hosts, but you can only match hosts described in your inventory.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=136)** The most advanced pattern is a regular expression, and Ansible supports them when targeting managed hosts.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=141)** For instance, to specify a pattern using a regular expression, precede it with a tilde character, inside the group, we have a logical OR, this will match web or db, followed by anything and ending with local net com.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=153)** Using Ansible as extensive pattern matching we can match just about any host or set of hosts that we wish.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (10)
> **Analogies:** such as (6), for instance (1)
> **Code Keywords:** this, (2), this. (1), case, (1)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** tvm (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### Manage files and packages
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=0)** - For this exercise we're going to manage files and packages on our managed node.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=4)** You'll want both your rhhost1 and rhhost2 VMs booted up.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=8)** And you should be logged in to your rhhost1 VM with a terminal open.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=11)** At any point during these exercises, you can switch over to your rhhost2 VM and verify the results using standard Linux command line tools.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=19)** Let's start by creating an empty directory using the file module.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=22)** This is similar to touching a file on the command line.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=24)** On rhhost1 type ansible rhhost2* -m file for the file module.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=32)** And for arguments type
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=34)** - a "path-/home/user1/file2.txt state=touch mode=700"
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=51)** and hit enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=52)** This will create a new empty file if it doesn't already exist with permissions of 700.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=57)** If the file does exist, it will update the meta data.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=60)** If you want to include text in the file you can use the copy module.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=63)** Type in clear.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=64)** Type in ansible rhhost2* -m copy for the copy module.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=71)** And for arguments type in -a "dest=/home/user1/file3.txt
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=84)** content='stuff' force=no mode=700" and hit enter.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=99)** In this case, we're including the word stuff in the file.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=102)** Note, that if you include the single quotes without content between them, it will create an empty file.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=107)** Very similar to what we just did with the file module.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=110)** However, creating an empty file with a touch and copy modules in not the same thing.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=114)** We have provided the force=no option, which means it won't change the file if it already exists.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=120)** You can test this by bringing your line back and changing stuff to other stuff and hitting enter.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=125)** It will not overwrite the previous file.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=127)** You can verify this by viewing the file on rhhost2.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=131)** Using the file module with force=no is good for creating new files but not overwriting existing files.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=138)** Also, since we're not changing metadata, the file won't change.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=141)** And it won't register as changed in your logging software.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=143)** Which might be what you want.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=145)** If you change force=no, it will overwrite the file.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=148)** You'll do this if you want to change the contents of the file.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=152)** To change permissions on a file, we'll use the file module again.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=155)** Type in clear.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=156)** And type in ansible rhhost2* -m file for the file module.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=163)** And for arguments type in
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=165)** - a "dest=/home/user1/file2.txt mode=600" and hit enter.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=178)** This command line changes the permissions from 700 to 600 for file2.txt.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=183)** If you want to change the user and group ownership, similar to using the chown command, we'd add owner and group.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=188)** Note, just like the chown command, you'll need to elevate your privileges.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=192)** Bring your line back and inside the double quotes add owner=root group=root and outside the double quotes append -b -K and hit enter.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=204)** Then enter user1's password when prompted.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=207)** To create directories, we change the state to a directory.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=210)** Type in clear.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=211)** Then type in ansible rhhost2* -m file for the file module.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=218)** And then for arguments
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=219)** - a "dest=/home/user1/newdir
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=228)** that's the name of the directory mode=755 state=directory" and hit enter.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=240)** To delete this directory recursively, bring your line back and insert, before the end quote, state=absent and then hit enter again.
>
> **[4:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=251)** To manage software packages we'll use the yum module.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=254)** We'll need to elevate your privileges using the -b and -K options.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=258)** Type in clear.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=259)** Then type in ansible rhhost2* -m yum for the yum module
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=266)** - a and for arguments we're going to type in "name=httpd state=installed" -b -K and hit enter.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=279)** Enter user1's password when prompted.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=281)** This will install the Apache web server.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=283)** Note that state=installed and state=present are the same thing.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=287)** If you wanted to ensure the latest version is installed, we'd change state=installed to state=latest.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=294)** To remove the package, we just need to change state=installed to state=removed or absent.
>
> **[5:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=300)** We can use a lot of the other yum functionality like updating the OS, which would be equivalent to typing in yum update -y.
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=308)** Installing package groups, which would be the same as yum group install.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=311)** And listing installed packages, which would be yum list installed.
>
> **[5:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=316)** With other functionality with the touch, file, copy and yum modules.
>
> **[5:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=320)** See the Ansible documentation.
>
> **[5:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=322)** Note that different managed hosts may require different package modules, based on their package management systems.

> [!info]- Semantic Content
>
> **CLI Commands:** yum (8), ansible (6), chown (2), node (1), apache (1)
> **Code Keywords:** module (11), switch (1), let (1), case, (1), delete (1)
> **Speakers:** - a (4), - for (1)
> **File Paths:** path-/home/user1/file2.txt (1), home/user1/file3.txt (1), home/user1/file2.txt (1), file2.txt (1)
> **Tools:** command line (3), terminal (1)
> **Analogies:** similar to (3), just like (1)
> **Prerequisites:** install (2), you'll need (1)
> **Warnings:** note that (2)

#### Restart servers and services
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=0)** - [Instructor] Using Ansible, we can manage the running state of another host as well as its services.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=5)** Let's start by managing our httpd service on RHHOST2.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=9)** If you don't have it installed, you'll want to do that first.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=12)** To start it we'll change the desired state to started.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=15)** On RHHOST1 in a terminal type in Ansible, space, RHHOST2, asterisk, space dash M, space, service, which is the module we'll use.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=25)** Space dash A, and for arguments, double quote name equals httpd.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=30)** Space state equals started, double quote.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=34)** Space dash B to elevate privileges, space dash uppercase K to prompt for the password.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=40)** Often when we run commands in this video, you'll need to enter the password of user one on RHHOST2 to elevate privileges.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=45)** Enter that now.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=47)** Bring your line back and change started, to restarted, and hit Enter again.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=51)** If you just want to reload the configuration without any disruption in the service, we'll change the state to reloaded.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=56)** Bring your line back again and change restarted to reloaded.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=60)** Lastly, to shut the service down, we change the state to stopped.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=63)** Bring your line back one more time and change reloaded to stopped.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=67)** To make a service persistent, we need to enable it.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=70)** Bring your line back one more time, change state equal stop to enabled equals yes.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=77)** To disable the service just change enabled to disabled.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=80)** If you want to check the status of the service, you can add the dash dash check option.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=83)** We'll start by checking if the service is enabled.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=86)** Bring your line back and outside the double quotes change dash B dash K to dash dash check and hit enter.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=93)** If we scroll up to the top, we can see that what we're checking is enabled equals yes or true.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=99)** This just means we're checking for that condition.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=101)** Above we can see a line that says changed.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=103)** If this is false, then the state doesn't have to change to match what we're looking for.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=108)** We looked for enabled equals yes.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=110)** And the state doesn't have to change to be yes, so it is already.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=113)** Let's check the opposite.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=115)** Bring your line back and change enabled equals yes to enabled equals no and run it again.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=121)** You may notice that the color of the text has changed.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=123)** If the condition we checked is not true, meaning it needs to change, then it will be orange color.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=128)** If the state is true, it will be green.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=131)** I always check if a service is enabled or started and if it's green, then it is but if it's orange, it is not.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=137)** Getting more general service information isn't easy using ad hoc commands as the service underscore facts module works best in a playbook.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=144)** However, we can always revert back to executing the system CTL command on the managed node, type in clear and then type in Ansible, space, RHHOST2, asterisk, space dash M, space shell which is the module we'll use.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=158)** Space dash A and for argument's, space, double quote, system CTL, space, status, space, httpd, double quote and hit enter.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=168)** This gives us the output of the system CTL command.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=171)** If your managed host does not use the system D command, then you'll need to substitute the appropriate command such as service here.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=177)** Now let's manage our hosts running state by rebooting or shutting it down.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=181)** There isn't a special module for this.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=183)** So we'll just send an OS command to carry out the task.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=185)** The simplest way to do this is to use the command module, type in clear, and type in Ansible, space, RHHOST2, asterisk, space dash A, space, single quote, slash SBIN, slash, reboot, single quote, space dash B, space dash uppercase K, and hit Enter.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=203)** And enter your password.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=204)** This should reboot our RHHOST to VM, we see that we get an error message.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=208)** But if we switch over to our RHHOST2 VM, we can see the process is happening.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=213)** Shutting the server down would be the exact same command string except we'd replace reboot with shut down.

> [!info]- Semantic Content
>
> **Env Vars:** rhhost2 (6), ctl (3), rhhost1 (1), sbin (1), rhhost (1)
> **Code Keywords:** module (5), let (3), for. (1), this. (1), switch (1)
> **CLI Commands:** ansible (4), make (1), node (1)
> **Prerequisites:** you'll need (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Manage users
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=0)** - [Instructor] Managing users is definitely better using playbooks than it is using ad hoc commands.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=5)** Mainly, due to users being in state of the configuration.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=8)** It's better to look at a user existing as part of the configuration than a command that you would run.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=13)** We can manage users with ad hoc commands.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=15)** For instance, to create a user named user2, type in ansible, space rhhost2*, space -m, space user for the user module, space -a and for arguments space 'name=user2, space, state=present space home=/home/user2, space shell=/bin/bash, 'space -b space -K and hit Enter.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=48)** Then enter your password.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=50)** Here we're defining the name of the user, their home directory and their shell.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=53)** If we leave out any of these options, it will take the defaults from this /etc/default/useradd and /etc/login.de deaths files.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=62)** If we want to change the use of primary group to wheel we type in clear and then type in ansible, space rhhost2*, space -m, space user, space -a, space "name=user2, space group=wheel" space -b, space -K and hit Enter.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=83)** And then enter your password again.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=85)** To change our supplementary group, use the "groups" option instead of the "group" option.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=90)** Let's change our primary group back to user2 and add them to the wheel group.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=93)** Type in clear and then bring back your line and change group=wheel to group=user2 and add space groups=wheel and hit Enter.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=106)** If you want to add them into multiple supplementary groups, just separate them with commas.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=110)** You can verify the results of this and I already chose to by viewing the Etsy password and Etsy group files.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=115)** Notice that this user can't log in currently because they don't have a password.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=119)** Setting a password is a lot more complex as it needs to be encoded before adding it to the user account settings since Ansible doesn't support encoding it.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=126)** There are multiple ways of creating an encoded password.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=128)** First, you need to know the encoding methods such as MD5 or SHA-512.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=132)** Most Linux passwords are now SHA-512, so we'll focus on that.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=136)** You can create the encoded password with the Python language or some other commands.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=140)** The command we'll use is included with a Dovecot email server.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=144)** First we'll install that package on rhhost1, type in clear and then type in sudo space yum space install space -y space dovecot and hit Enter and then enter your password if prompted.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=156)** Type in clear and then type in doveadm space pw space -s space SHA512
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=166)** - CRYPT and hit Enter.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=169)** Then enter the desired password twice.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=171)** Once it gives you the SHA-512 password, copy the part after the right curly bracket.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=176)** Now it gets a little clumsy, we need to bring our line back where we created user2 and then inside the single quote, we'll add password= and paste in the SHA-512 password.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=187)** We'll also change the username to user3 as well as the home directory, so it's a brand new user and hit Enter.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=196)** You can test logging in as user3 by switching over to your rhhost2 VM and logging in.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=204)** Back on rrhost1, let's delete user2, type in clear and then type in ansible space rhhost2* space -m space user space -a space "name=user2 space state=absent" space -b space -K and hit Enter and then enter your password.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=227)** To manage groups, we'll use the group module to create a group named "Accounting" we'll type in clear and then type in ansible space rhhost2* space -m space group, for the group module, space -a space "name=accounting space state=present" space -b space -K and hit Enter.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=252)** And enter your password.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=253)** To delete it just change state=present to state=absent.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=258)** As I mentioned at the beginning of this video, using playbooks is a much better idea than remembering these commands.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=263)** However, ad hoc commands are still an easy way to test methods before implementing them.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (5), python (1), sudo (1), yum (1)
> **Code Keywords:** module (3), let (2), delete (2)
> **Env Vars:** sha (4), md5 (1), sha512 (1), crypt (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1), - crypt (1)
> **Tools:** bash (1)

#### Gather data
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=0)** - [Instructor] Gathering information from the host in our inventory is best left to playbooks, but some of the power can also be had using ad hoc commands.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=8)** We'll start with the setup module.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=9)** The setup module gathers facts about the host listed in ansible's inventory.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=14)** Other modules often call the set up module to gather the information they need.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=18)** This module also supports Windows Targets.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=20)** Let's get started by running the set up module against our RH host 2VM.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=24)** In our terminal, type in ansible space rhhost2 asterisk space dash m space setup with no arguments and hit enter.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=31)** By default, this gives us all facts about the host that we've run it against.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=36)** If we're only interested in a portion of the data, we can just request that portion.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=40)** For instance, to retrieve the network facts would bring our line back and append base dash A space single quote, gather underscore subset equals network single quote and hit enter.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=54)** We can use the gather subset argument to retrieve facts for all areas, minimum, hardware, network, virtual and facter.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=62)** If you want to specify more than one area, separate them with commas.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=65)** Bring your line back, and inside the single quote, add a comma and hardware, and hit enter.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=71)** We can also negate values by prepending them with an exclamation mark.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=75)** For instance, if we didn't want to see network facts, I'd bring my line back and I'd put an exclamation mark before network and then hit enter.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=82)** We can negate all that we don't want, and that leaves what we do want by negating multiple.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=88)** Bring your line back again, and prepend hardware with an exclamation mark as well.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=92)** If exclamation mark all is specified, then only the minimum subset is collected.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=98)** Bring your line back, and change it to exclamation point all and hit enter.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=102)** To collect no facts, specify exclamation point all and exclamation point min.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=108)** Bring your line back, add a comma, and exclamation point min and hit enter.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=115)** This will collect no facts.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=116)** You might be wondering why we'd do this.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=119)** You'd do this if you only want to specify another subset but didn't want to return anything else.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=123)** For instance, if I only wanted hardware facts I could bring my line back and I could add comma hardware and hit enter, and it will only show the hardware facts.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=134)** You can go one step further and filter the output as well.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=136)** For instance, in the output on the screen, we could only return ansible mounts by adding that filter.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=142)** To do so, bring your line back and inside the single quotes add filter equals ansible underscore mounts and hit enter.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=153)** This will only return the items under ansible mounts.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=157)** If you want to dump the facter to a file, we can add dash dash tree, and specify a path to the file.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=162)** For instance, type in clear, and type in ansible space rhhost2 asterisk space dash m space setup space dash dash tree space and then the file path slash tmp slash facts and hit enter.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=177)** This will place all facts in the slash tmp slash facts directory.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=181)** There are a lot of uses for a json file, but if you want to view it in a nicer interface, we can use Firefox.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=187)** Let's see the end of the directory first.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=188)** Type in CD space tmp slash facts.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=191)** And then we'll get a directory listing by typing in LS.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=195)** We can see that we have a file named after our host.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=197)** Let's append the .json file extension to it.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=200)** Type in mv space rhhost2.[localnet.com](https://localnet.com) space rhhost2.[localnet.com](https://localnet.com).json and hit enter.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=210)** Now let's view it with Firefox.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=212)** Type in Firefox space rhhost2.[localnet.com](https://localnet.com).json
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=221)** and hit enter.
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=222)** Firefox gives us a nice graphical view of our facts.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=226)** We can expand and compress different sections with our mouse.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), let (4), default, (1), this. (1), else. (1)
> **CLI Commands:** ansible (6), cd (1), ls (1), mv (1)
> **Prerequisites:** setup (4), set up (2)
> **Tools:** firefox (4), terminal (1)
> **Analogies:** for instance (5)
> **URLs:** [localnet.com](https://localnet.com) (3)
> **File Paths:** rhhost2.localnet.com.json (2)
> **Speakers:** - [instructor] (1)


### 5. Ansible Command Line Tools

> [↑ Back to Table of Contents](#table-of-contents)

#### Manage connection methods
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=0)** - [Instructor] By default, Ansible uses OpenSSH to connect to its host in its inventory list.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=6)** OpenSSH, developed by the OpenBSD project, supports ControlPersist, Kerberos, and options in the ~/.ssh/config file.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=15)** If OpenSSH is not available, Ansible falls back to paramiko, which is a Python implementation of OpenSSH.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=23)** Earlier in this course, we created a passwordless SSH key pair using the ssh-keygen command and then copied the public key to rhhost2 using the ssh-copy-id command.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=33)** Using SSH keys is the recommended way of authenticating; however, we can use SSH passwords as well by passing the --ask-pass option to Ansible.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=43)** If you need to pass the sudo password, add the --ask-become-pass option.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=48)** If you want to use passwords instead of keys, it can get irritating having to type your password in each time you run an ad hoc command or playbook.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=56)** As such, it would be advantageous to use SSH Agent.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=59)** To enable SSH Agent we type in the following.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=63)** Ssh-agent space bash.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=65)** Ssh-add space followed by the key.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=69)** Ansible also allows you to specify a private key file by adding the --private-key option when running commands.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=77)** You can even specify an SSH private key file in your inventory using the ansible_ssh_private_key_file option.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=83)** Ansible enables SSH host key checking by default.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=86)** With host key checking, SSH automatically maintains and checks a database containing identification for all hosts that it has communicated with.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=95)** This is generally a good thing as it protects against man-in-the-middle attacks.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=99)** However, there can be more maintenance with host key checking.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=103)** For instance, if a host has to be reinstalled and the keys change, then our control domain will refuse to communicate with it.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=109)** We may have to manually edit the known_hosts file to fix the issue.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=113)** Also with host key checking we'll have to accept a host key the first time we connect to the host.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=118)** You may want to give up a little protection for convenience.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=121)** To do so you can turn off host key checking in the Ansible configuration file.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=126)** In the Ansible.cfg file we change host_key_checking to false and save it.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=130)** You could also change the OS environment variable to do the same thing temporarily.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=135)** There are other non SSH communication methods such as local, which we used to deploy playbooks on the control host itself, docker which deploys a playbook into a docker container in a docker client.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=145)** Kuberctl for running playbooks and Kubernetes pods.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=149)** Vmware_tools to execute playbooks inside of VMware VMs.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=152)** Podman which let you interact with podman containers, and more.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=157)** You can get a full list using the ansible-doc command.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=160)** If you want more information on any one of the connection methods, just specify it by name.

> [!info]- Semantic Content
>
> **CLI Commands:** ssh (14), ansible (8), docker (3), python (1), sudo (1)
> **Code Keywords:** pass (3), private (3), default, (1), public (1), default. (1)
> **Env Vars:** ssh (9)
> **Code Identifiers:** ansible_ssh_private_key_file (1), known_hosts (1), host_key_checking (1)
> **Analogies:** for instance (1), such as (1)
> **File Paths:** ansible.cfg (1)
> **Cross-References:** earlier in (1)
> **Tools:** bash (1)

#### Use the Ansible command
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=0)** - [Narrator] The Ansible command is said to be an extra simple tool for doing remote things according to the documentation.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=6)** This command allows you to define and run a single task playbook against a set of hosts.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=11)** Some common options include list-host, which outputs a list of matching hosts but does not execute anything.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=18)** Playbook-dir, which defines a playbook directory.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=20)** Since the Ansible command doesn't use playbooks by default, this allows us to specify a directory where they reside.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=26)** Private-key allows us to specify the private key for the connection.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=30)** Syntax-check performs a syntax check on the playbook but does not execute it.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=35)** - B and -K runs operations with become and asks for the privilege escalation password.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=43)** - K or --ask-pass is different from -K, it asks for the connection password as opposed to the escalation password.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=52)** - e sets additional variables as key value pairs.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=56)** - i specifies a path to an inventory file or a comma separated host list.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=60)** - m specifies the module named to execute.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=64)** - a is to specify the module arguments and works with -m.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=68)** And lastly, -v is for verbose mode.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=72)** The Ansible command uses the Ansible.cfg file stored in /etc/ansible, the current directory, or the users home directory.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=79)** If you want more information on the Ansible command, see the Ansible man page.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (7)
> **Speakers:** - [narrator] (1), - b (1), - k (1), - e (1), - i (1)
> **Code Keywords:** private (2), module (2), default, (1), pass (1)
> **Documentation:** the documentation (1), man page (1)
> **File Paths:** ansible.cfg (1)

#### View Ansible configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=0)** - [Instructor] Ansible makes it easy to view the overall configuration.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=3)** This includes the results of the various ansible.cfg files and environment variables.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=8)** To view the Ansible configurations we'll use the ansible-config command.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=12)** We'll start by listing the configuration items themselves.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=15)** To do so, type into a terminal ansible-config space list and hit Enter.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=20)** We can scroll through this to see a listing of every configuration item and a description of what it's for.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=25)** Press Q to quit.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=27)** To see our complete configuration from the ansible.cfg file we'll use a dump command.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=32)** Type in clear and then type in ansible-config space dump and hit Enter.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=39)** We can also check to see which items have changed from the default config by appending the
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=42)** - -only-changed option.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=45)** Press Q to quit, bring your line back, and append --only-changed and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=52)** In our case, we have not made any changes to the default config, so it doesn't output anything.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=57)** We can also view the current file by using the view argument.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=61)** Note, that without any additional arguments this will view the first ansible.cfg file that it finds.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=66)** If you want to specify a different ansible.cfg file, you can pass it -c with the path.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=72)** Type in clear and type in ansible-config space view and hit Enter.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (10)
> **File Paths:** ansible.cfg (4)
> **Code Keywords:** for. (1), case, (1), pass (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Use the Ansible console
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=0)** - [Instructor] A very odd tool included with Ansible is Ansible Console.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=4)** It's odd in that Ansible's designed to be a stateful system where it's concerned mainly about the state of the configuration it's in.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=10)** What's mostly concerned about the state the configuration is in.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=13)** Ansible Console is very different.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=14)** It let's you log into an interactive session and execute modules targeted at managed hosts or groups of hosts.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=21)** Let's walk through how it works.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=23)** First let's run it, but we'll provide the dash b and uppercase k options so we become root.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=29)** In a terminal type in ansible-console space -b space uppercase K and hit enter.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=35)** Enter the sudo password of user1 rhost1 when prompted.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=39)** If you want to target an Ansible group such as web servers we actually cd into it like it were a directory.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=46)** Type in cd space webservers and hit enter.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=50)** Now everything we run will be executed on the managed host in the webservers Ansible group.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=55)** We can run all of the modules that we would with an ad hoc command but with a lot less typing.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=60)** For instance, if I wanted to run the date command on each host in the webservers group I'd type in shell space date.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=66)** And that's it.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=68)** Since we changed into the webservers group already, we just type in the module and module arguments.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=74)** Now let's try something a bit more complex.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=75)** Let's install a piece of software.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=77)** I've chosen the G Edit plugins package for this.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=80)** Type in yum, that's the module, space name equals gedit dash plugins space state equals installed and hit enter.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=90)** And it should install fine.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=92)** Notice we didn't have to add the dash b and dash uppercase k arguments to install software because we provided them when we started the console.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=99)** Any ad hoc command could be run like this with a lot less typing than normal.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=103)** There's no need to provide dash b and uppercase k each time you run a command or even target managed hosts as that's already been taken care of.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (7), cd (2), sudo (1), yum (1)
> **Code Keywords:** let (5), module (3), this. (1)
> **Prerequisites:** install (3)
> **Analogies:** such as (1), for instance (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Show Ansible inventory
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=0)** - [Instructor] If we have a simple setup it's very easy to count the /etc/ansible/host file to get a list of our inventory.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=7)** However, as your system grows, this will no longer be a good option.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=11)** Imagine hundreds of overlapping groups and thousands of managed hosts.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=15)** The Ansible inventory command can help.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=17)** Let's start by displaying a list of our inventory.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=20)** To do so we'll use the Ansible-inventory command with a --list option.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=25)** In a terminal type in ansible-inventory space --list and hit enter.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=31)** Here we can see a JSON file listing all hosts, both of our Ansible groups named dbservers and webservers and the ungrouped group.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=39)** If you want information on one specific host you can use the --host argument.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=44)** However, as you can see from our rhost2.[localnet.com](https://localnet.com) managed host, there's not much to show.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=50)** If you want to send the output to a file you can add the --output option for instance.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=55)** Bring your line back and append --output space inventory.json.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=62)** Then hit enter.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=63)** This saves a file named inventory.json.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=66)** This file can be used as an inventory file, but let's view it using Firefox.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=70)** Type in Firefox space inventory.json and hit enter.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=78)** Here we get a somewhat visual representation of it.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=81)** We can expand and collapse sections of the file.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=84)** You can close Firefox now.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=87)** The last thing we'll do is create an asci graph of our inventory.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=90)** To do so use the --graph option.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=93)** Type in clear and type in ansible-inventory space --graph and hit enter.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=100)** It's not pretty, but might be easier to visualize than the JSON output.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=104)** There's one more thing I'd like to mention.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=106)** You can format the output as a YAML file if you don't want JSON.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=109)** Just provide the -y option.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=112)** Type in ansible-inventory space --list space -y and hit enter.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=119)** Ansible inventory probably will not be a command you use every day, but can simplify viewing your inventory.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (8)
> **Env Vars:** json (3), yaml (1)
> **Tools:** firefox (3), terminal (1)
> **File Paths:** inventory.json (3)
> **Code Keywords:** let (2)
> **Analogies:** imagine (1), for instance (1)
> **URLs:** [localnet.com](https://localnet.com) (1)
> **Prerequisites:** setup (1)

#### Run Ansible playbooks
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=0)** - [Instructor] Most often when we manage infrastructure with Ansible, we'll using playbooks.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=4)** For more in-depth information on Ansible playbooks, see the other two EX294 courses.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=10)** However, before we end this course, I'll get you started with playbooks.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=13)** We'll set up a directory structure and a home directory, create a playbook and execute it.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=17)** Let's start by creating the directory structure.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=19)** Be sure you're logged into your rhhost1 VM as user one and create a directory in your home directory by typing in mkdir ~/ansible-files and hit Enter.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=29)** Now CD into it.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=30)** Type in CD ~/ansible-files and hit Enter.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=35)** Now we'll create our playbook here.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=36)** In this playbook we'll specify that Apache should be the latest version running and persistent.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=41)** Let's start by creating the YML file Type in vi apache.yml and hit Enter.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=47)** Let's turn line numbering on by pressing escape: and typing a set space number and hitting Enter.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=54)** This will make it easier to ensure your file matches mine.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=56)** Now go into insert mode by pressing the I key and then add on the first line - - -.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=62)** As this file is a YML file and needs to start with three dashes.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=66)** Line two starts with a dash followed by the name of the Playbook.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=69)** So type in name: and for the name of the Playbook Apache server installed and hit Enter.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=76)** Line three specifies the host of Runner Don.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=78)** Since we're installing the Apache web server, we'll install in all managed notes in the web service group.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=84)** Type in host: web servers and hit Enter.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=90)** To install software, we need to become root.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=92)** So line four specifies that we need to elevate privileges.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=96)** Type in become: yes and hit Enter.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=99)** At this point, this Playbook doesn't really do anything.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=102)** For line five we'll add a task.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=105)** Type in tasks: and hit Enter.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=108)** Now type in - name: and for the name, let's call it latest Apache version installed.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=115)** Then hit Enter.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=116)** For the module we'll use the yum module.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=118)** So type in yum: and hit Enter again.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=121)** Now the name of the package we'll install is httpd.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=125)** So type in name: httpd and hit Enter.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=129)** The state should be latest.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=131)** Type in state: latest and hit Enter.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=136)** Now, let's add a second task.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=138)** On line 10 backspace so you're equal with line six.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=141)** Type in a - name:.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=145)** The name of this task will be Apache enabled and running.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=149)** And then hit Enter.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=150)** The module we'll use for this one is service.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=152)** So type in service: and hit Enter again.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=155)** The name of the service is httpd.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=157)** So type in name:httpd and hit Enter.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=161)** We want to type an enabled: true so it's enabled.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=166)** And then the state of the service would be started.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=169)** Type in state: started.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=172)** Make sure your file looks like mine and when it does we'll save and exit by pressing escape:X!
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=178)** and hit Enter.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=179)** Before we run the playbook, let's check the syntax.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=182)** Type in ansible-playbook - - syntax-check apache.yml and hit Enter.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=190)** If there's anything wrong with the file, it will tell us.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=193)** If there's something wrong, we'll need to make those changes before running it for real.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=196)** Now to run the playbook we'll just remove the syntax option and a pen-b space-K.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=202)** So bring a line back, get rid of syntax check and append -b -K and hit Enter.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=212)** Now enter the sudo password for user one on rhhost2.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=216)** The result is the Apache package's installed and if the service is not running it will be started.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=220)** If it's not enabled, it will enable it.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=223)** This is the beginning of Ansible playbooks.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=225)** We could extend this by having it copy over an index.HTML file.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=228)** We could have it configure the firewall on the web service so that Port 80 was open and a lot more.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=233)** Playbooks are where the real power of Ansible lies.
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=236)** In the other two courses of the series we take a deep dive into playbooks.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (8), ansible (7), make (3), cd (2), yum (2)
> **Code Keywords:** let (6), module (3)
> **Prerequisites:** install (3), set up (1), configure (1)
> **Env Vars:** yml (2), ex294 (1), html (1)
> **File Paths:** apache.yml (2), index.html (1)
> **Ports:** port 80 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Summary

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=0)** - [Grant] This is the first course in a three course series on Ansible Engine for the Red Hat EX294 certification.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=7)** In this course, we covered installing Ansible Engine, and configuring communication with the managed host.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=12)** We also covered setting up inventory and using ad hoc commands with that static inventory.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=17)** We ended with dipping our toe into creating an Ansible playbook.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=20)** This is just the beginning for this series on using Ansible for IT automation.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=24)** Before attempting to take the exam, you'll want to watch the other two courses on using Ansible playbooks and managing systems using Ansible.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=32)** After finishing those courses, you can consider taking the EX294 exam.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (6)
> **Env Vars:** ex294 (2)
> **Code Keywords:** static (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [grant] (1)


## Skills Covered

- Red Hat Enterprise Linux (RHEL)
- Ansible

## Path Context

### In [[Prepare for the Red Hat Certified Engineer (EX294) Exam]]
**1 of 3** | [[Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks]] →

## Appears In

- [[Prepare for the Red Hat Certified Engineer (EX294) Exam]]

## Related Courses

_Courses sharing skills:_

- [[Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible]] — Ansible, Red Hat Enterprise Linux (RHEL)
- [[Red Hat Certified Engineer (EX294) Cert Prep- 2 Using Ansible Playbooks]] — Ansible, Red Hat Enterprise Linux (RHEL)
- [[Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage]] — Red Hat Enterprise Linux (RHEL)
- [[Learning Ansible]] — Ansible

---

[↑ Back to top](#)