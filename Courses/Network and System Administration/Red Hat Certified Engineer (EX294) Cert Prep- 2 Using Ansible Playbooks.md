---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks
url: "https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks"
duration_minutes: 151
duration: 2h 31m
level: Intermediate
updated: 7/25/2022
learners: 16120
skills:
  - Red Hat Enterprise Linux (RHEL)
  - Ansible
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEhLaaGVi-Knw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1596035537068?e=2147483647&amp;v=beta&amp;t=yba5RSww1EnvyDCoCsZ-3teZB-kFUTftO80DDhUzyAg"
linkedin_topic: Network and System Administration
learning_paths:
  - '[Prepare for the Red Hat Certified Engineer (EX294) Exam](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Prepare%20for%20the%20Red%20Hat%20Certified%20Engineer%20(EX294)%20Exam.md)'
prev_courses:
  - '[Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible](Red%20Hat%20Certified%20Engineer%20Ex294%20Cert%20Prep%201%20Foundations%20Of%20Ansible.md)'
next_courses:
  - '[Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible](Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%203%20Managing%20Systems%20with%20Ansible.md)'
path_nav: '[{"path":"Prepare for the Red Hat Certified Engineer (EX294) Exam","position":2,"total":3,"prev":"Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible","next":"Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/red-hat-enterprise-linux-rhel
  - skill/ansible
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%202%20Using%20Ansible%20Playbooks.md)

![Red Hat Certified Engineer (EX294) Cert Prep: 2 Using Ansible Playbooks](https://media.licdn.com/dms/image/v2/C4E0DAQEhLaaGVi-Knw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1596035537068?e=2147483647&amp;v=beta&amp;t=yba5RSww1EnvyDCoCsZ-3teZB-kFUTftO80DDhUzyAg)

# Red Hat Certified Engineer (EX294) Cert Prep: 2 Using Ansible Playbooks

> Looking to earn the Red Hat Certified Engineer (RCHE) certification? In this course, the second installment in a three-part series, learn how to create and work with Ansible playbooks as you prepare to take—and ace—the RHCE (EX294) exam. Grant McWilliams shares tips for managing YAML files, explains how to work with variables to retrieve results after you run a command, and shows how to use Jinja2

> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks) | 2h 31m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Introduction](#introduction)
  - [What you should know](#what-you-should-know)
  - [About the EX294 exam](#about-the-ex294-exam)
  - [Reconfigure-Migrate CentOS](#reconfigure-migrate-centos)
- [**1. Working with Playbooks**](#1-working-with-playbooks) (9 videos)
  - [Introduction to playbooks](#introduction-to-playbooks)
  - [Playbook language](#playbook-language)
  - [YAML tips and tricks](#yaml-tips-and-tricks)
  - [Install the Atom editor](#install-the-atom-editor)
  - [Configure VIM for YAML](#configure-vim-for-yaml)
  - [Playbook hosts and users](#playbook-hosts-and-users)
  - [Playbook tasks list](#playbook-tasks-list)
  - [Playbook change handlers](#playbook-change-handlers)
  - [Verify Playbooks](#verify-playbooks)
- [**2. Creating Reusable Playbooks**](#2-creating-reusable-playbooks) (5 videos)
  - [Create structured configuration](#create-structured-configuration)
  - [About playbook roles](#about-playbook-roles)
  - [Creating roles](#creating-roles)
  - [Static and dynamic content](#static-and-dynamic-content)
  - [Using includes in Playbooks](#using-includes-in-playbooks)
- [**3. Using Variables**](#3-using-variables) (4 videos)
  - [Setting inventory and playbook variables](#setting-inventory-and-playbook-variables)
  - [Using variables](#using-variables)
  - [Registering variables](#registering-variables)
  - [Discovering variables from facts](#discovering-variables-from-facts)
- [**4. Using Flow Control**](#4-using-flow-control) (6 videos)
  - [The when statement](#the-when-statement)
  - [Looping methods in Ansible](#looping-methods-in-ansible)
  - [Looping with lists](#looping-with-lists)
  - [Looping with dictionaries](#looping-with-dictionaries)
  - [Looping and conditionals](#looping-and-conditionals)
  - [Registering variables in loops](#registering-variables-in-loops)
- [**5. Grouping Content**](#5-grouping-content) (3 videos)
  - [Using blocks](#using-blocks)
  - [Block error handling](#block-error-handling)
  - [Using tags](#using-tags)
- [**6. Using Ansible to Deploy Files**](#6-using-ansible-to-deploy-files) (3 videos)
  - [Using Jinja2 template files](#using-jinja2-template-files)
  - [Using modules to manipulate files](#using-modules-to-manipulate-files)
  - [Deploying files from templates](#deploying-files-from-templates)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=0)** - The Red Hat RHCE certification is one of the most respected and valued in the IT industry, Possessing credentials as well known as the RHCE EX294 certification will help secure a position in [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md). The RHCE is a popular [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) engineering certification and the current version focuses on IT automation using [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) Engine. And that information can be invaluable in today's world no matter which operating systems or devices you're managing. This course is the second course in our three-part EX294 series focusing on Ansible Engine. In combination with the other two EX294 courses in the course library, it covers all objectives of the Red Hat RHCE EX294 exam. In addition, the information covered in this course is general in nature and can be used to learn Ansible Engine even if you're not planning on taking the Red Hat exam. My name is Grant McWilliams, college professor and Linux enthusiast. Over the course of the past 20 years, I've taught advanced Linux topics to many people in [Higher Education](../../Skills/Artificial%20Intelligence%20(AI)/Higher%20Education.md), as well as corporate environments. And that experience is accessible to you. I'm sure you're excited to get started and I'm excited to teach you, so let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (3), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (3), [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md) (2), [Higher Education](../../Skills/Artificial%20Intelligence%20(AI)/Higher%20Education.md) (1)
> **Env Vars:** rhce (4), ex294 (4)
> **CLI Commands:** ansible (3)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### [What you should know](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=0)** - [Instructor] As Red Hat EX294 Certification covers technologies included in Red Hat Enterprise [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) 8, we'll be using a version of that operating system for this course. In this course, when I use the generic term, Enterprise Linux 8, I mean, Red Hat Enterprise Linux 8, or any other direct clones, such as CentOS Enterprise Linux. Anything we do in this course will work fine on either of these operating systems. Since this certification focuses on [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) Engine, most of the course can also be done without modification on Fedora Linux, or any spin of Fedora as well. Furthermore, most of the technologies covered in this course, are not distribution specific and focus on [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md) using Ansible. As such, they can be applied to any operating system utilizing Ansible Engine for Automation. For this course, we'll be using Linux in VirtualBox [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). There are versions of VirtualBox for [Windows](../../Glossary/Service/Windows.md), macOS, Solaris, and various Linux distributions. For this course, I'll be running VirtualBox on a Linux host. In order to run virtual machines for this course, you'll need a computer with an Intel or AMD 64-bit CPU with virtualization support. Intel CPUs with virtualization support will be advertised as having VT-x and AMD calls at AMD-V. You will also need a 64-bit host OS. If you're using Linux, this is automatic. If you're using Windows, make sure you have a 64-bit version of that operating system. If your OS is 64-bit, then you'll want to download the 64-bit version
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=93)** of VirtualBox as well. For this course, you may also want to have high speed internet for downloading ISO images and doing Linux operating system software updates. You will also want to have 20 to 25 gigabytes of free hard drive space, minimum. This will provide enough space for two CentOS 8 Linux Guest VMs. If you have more free space available, it can give you more flexibility for creating additional Guest VMs, or giving your VMs larger virtual hard drives. To run more than one VM at a time, you'll need to have two to four gigabytes of free system memory if you're using Linux as your host OS. If you're using Windows as the host OS, I recommend eight gigabytes of RAM, minimum. The Foundation Course in this three-part Red Hat EX294 Series is Cert Prep, Red Hat Certified Engineer EX294, Foundations of Ansible. In that course, we install a 64-bit version of VirtualBox, install CentOS 8 Linux in a VirtualBox virtual machine, and set up our VirtualBox lab environment, including, installing VirtualBox Guest Additions in CentOS, making a clone of our CentOS 8 VM, as well as managing VirtualBox networking with NAT in a private network. If you haven't taken that course yet, you'll want to do that before proceeding with this one for the best [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). If you already have foundational knowledge of Ansible, you may want to just watch the videos for CentOS 8 Installation, VirtualBox Lab Setup, as well as the videos to Install Ansible on the Control Node, Preparing the Managed Nodes, and Building Static Inventory. Those videos will get you started for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (13), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (6), [Windows](../../Glossary/Service/Windows.md) (3), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (2), [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md) (1)
> **Env Vars:** ex294 (3), amd (3), cpu (1), iso (1), ram (1)
> **CLI Commands:** ansible (6), make (1), node (1)
> **Prerequisites:** install (3), you'll need (2), make sure you have (1), set up (1), setup (1)
> **Code Identifiers:** macos (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [About the EX294 exam](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=0)** - [Narrator] This course provides training for the RHCE EX294 certification. RHCE stands for Red Hat Certified Engineer. The RHCE is at Red Hat certification which uses Red Hat Enterprise [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) 8 as its operating system platform. In the past, the RHCE EX300 was a certification that tested the general skills of system engineers. The new RHCE EX294 certification however, is not a general engineer certification as the focus has changed to [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md) using Red Hat [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) Engine 2.8. All exam takers will need to have previously passed the RHCSA EX200 exam. You can take the RHCE exam without possessing the RHCSA certification, but RHCE credential will not be issued until both exams have been passed. Those test takers that pass the exam become Red Hat Certified Engineers and in addition, their certification counts towards being a Red Hat Certified Architect or RHCA. Although that Red Hat provides training for both EX200 and EX294 exams, it is not required in order to take either exam as they're are standalone exams not linked to any training program. Taking the official training or this course is not a guarantee that you will pass the exam. Although, this three course EX294 series with previous experience, additional practice and reading should be sufficient. To gauge your knowledge level, Red Hat provides online skills assessment tools which could be helpful in deciding if you need additional instruction. The RHCE exam is a performance-based test of skills and knowledge necessary to automate Red Hat Enterprise Linux.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=93)** This hands on practical exam requires you to use Red Hat Ansible Engine to perform real world tasks. You will be provided with multiple systems and will be required to install and configure Ansible Engine, and then use it to perform standard [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) tasks similar to what you do on a job. You will be required to create Ansible playbooks and users playbooks to configure systems for specific roles and behaviors. The tasks will be described in terms of a specific end state that you must achieve. Your work will be evaluated by applying the playbooks created during the exam against freshly installed systems and verifying that those systems and services work as specified. The exam is hands-on and last four hours. As of this recording, the exam costs us 400 US dollars. During the exam, you will not have access to the internet or outside materials, you will however, have access to documentation that ships with Red Hat Enterprise Linux. You can take the exam either in a classroom if you've purchased Red Hat training, onsite if your company has arranged this was Red Hat or by way of individual exam. Most people will probably take an individual exam at a testing center. To do so, visit Red Hat's website to determine a testing center location near you. Testing centers are provided by Red Hat and other third party companies. After completing the exam you will not receive your scores immediately as those come from Red Hat Certification Central. Examiners and training partners are not authorized to report results to candidates. Scores are usually reported within three US business days. Also exam scores are not reported on individual items, but only on sections.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=186)** If you don't do well on one section you'll need to study for the entire section again. The RHCE exam is aimed at experienced Linux IT professionals who currently have an RHCSA certification, are pursuing the RHCE or are preparing for one of the RHCA certifications. It will also be beneficial for experienced IT professionals who desire a recognized certification in IT Automation. Also, this certification is useful for organizations that require compliance with a mandate such as DOD 8570. If you're not a Red Hat administrator or a person pursuing a Red Hat certification, this course will still be valuable to you if you're interested in IT automation using Ansible. I can't stress enough that this course and certification is general in nature, and useful even if your infrastructure comprises [Ubuntu](../../Skills/Web%20Development/Ubuntu.md), SUSE or even [Windows](../../Glossary/Service/Windows.md) hosts. This course is the second of a three part series covering objectives of the RHCE EX294 exam. Specific objectives can be found on Red Hat's website. Skills covered can be used to manage Ansible in any environment. If you're a new Red Hat Certifications, and you only want to prepare for the RHCSA certification then take the Red Hat Certified System Administrator EX200 course in the course library. If you want to prepare for the RHCE certification then take the EX200 course as well as this EX294 course. If you want more in depth training on administering [Red Hat Linux](../../Skills/Network%20and%20System%20Administration/Red%20Hat%20Linux.md), take the Linux System Engineer Learning Paths in the course library. This course is one of a three part series covering objectives of the RHCE EX294 exam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (6), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (5), [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md) (3), [System Administration](../../Skills/Network%20and%20System%20Administration/System%20Administration.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1)
> **Env Vars:** rhce (13), ex294 (7), rhcsa (4), ex200 (4), rhca (2)
> **CLI Commands:** ansible (6)
> **Prerequisites:** required to (2), configure (2), install (1), you'll need (1)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** similar to (1), such as (1)
> **Versions:** 2.8 (1)
> **Speakers:** - [narrator] (1)

#### [Reconfigure-Migrate CentOS](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=0)** - [Instructor] It's important to note that Red Hat ended support for CentOS Eight on December 31st, 2021. Part of the process involved changing the software repository URLs from [centos.org](https://centos.org) to vault.[centos.org](https://centos.org). If you have a CentOS installation, and it cannot install software from its repositories, execute these steps. If you're using Rocky [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or AlmaLinux OS, you can skip this video. First, make sure your networking is turned on by clicking on your top right-hand menu, and clicking wired off. Now click on wired settings, click on the gear icon next to the wired connection, and click on connect automatically. Now click apply. And click the slider gadget to turn it on. Now to fix the repositories in our terminal, type in cd /etc/yum.repos.d/, and hit enter. Now comment out all mirror list lines by typing in sudo space sed space dash i, space single quote, s, forward slash for the delimiter, mirror list, forward slash, hash mirror list, forward slash, g for global, single quote, space, capital C, lowercase ent, uppercase OS, dash, asterisk, and hit enter, and type in your user's password. Now, change the CentOS mirror URL to vault.[centos.org](https://centos.org). We'll need to use the pipe symbol for the said delimiter because the URLs have forward slashes in them. Type in sudo space sed space dash i,
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=94)** space, single quote, s for substitute, again. This time, type in a pipe symbol for the delimiter, hash, base url, equals, http, colon, slash, slash, mirror, dot centos, dot org, pipe symbol, base url, equals, http, colon, slash, slash, vault dot centos dot org, pipe, g, single quote, space, capital C, lowercase ent, capital OS, dash, asterisk, and hit enter. Now update your system by typing in sudo space dnf, space update, and hit enter. Note that this makes your CentOS installation functional, again. Since this version is no longer supported, there will not be any more software updates for it, but you will be able to install current software from the repositories. For now, this may be fine, especially, for the purpose of learning. However, in the future, it may become a problem, when trying to install newer versions of software. Once the update has been done, reboot your VM by typing in reboot, and hit enter. To be able to update your CentOS system with new versions of software and security patches, you'll need to migrate it. A couple of options include migrating to Rocky Linux or AlmaLinux OS. I will outline both processes in this video.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=188)** You can do either both for educational purposes or choose one. Log back in, and then before making any changes to your VM, you should take a snapshot by pressing the host key, plus t. Name the snapshot pre-migration, and hit enter. To migrate CentOS eight to AlmaLinux OS, point your web browser to [almalinux.org](https://almalinux.org), and then click on the migrate button. This will take you to their [GitHub](../../Skills/Software%20Development/GitHub.md) page. About halfway down the page, there is an almalinux dash deploy dot sh link. Click on it, and then click on raw, and then, right click, and select save page as. Choose your downloads directory, and click on save. Once that's downloaded, go to your terminal, and change the downloads directory. Type in cd space tilde slash downloads, with a capital D, and hit enter. Now run the script by typing in sudo space bash, space, almalinux, dash deploy dot sh, and hit enter again, and enter your password. Once the migration is done, reboot into AlmaLinux OS. Another option is to migrate to Rocky Linux. To do so, you'll need to revert your VM back to the pre-migration snapshot again. Click the VM close gadget, select power off the machine, and select restore current snapshot pre-migration, and hit okay.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=283)** Now click on start to start your VM back up. Once it's powered back up, bring up a web browser, and browse to [rockylinux.org](https://rockylinux.org), and click on migrate. This page contains the documentation, concerning migration from CentOS. Partway down the page is a link for the GitHub project page for the migrate2rocky script. Click on that. Now click on migrate2rocky.sh, and then click on raw, and right click, and click save page as, and save it to your downloads directory. Open a terminal cd to your downloads directory. Type in cd space, tilde, slash, downloads with a capital D, and hit enter, and then run the script. Type in sudo space, bash, space, migrate2rocky.sh, space, dash r, and hit enter, and enter your password. Once the migration process has finished, reboot into Rocky Linux. The differences between Rocky Linux and AlmaLinux OS are minor, and comprise boot images and backdrops at this point. Both of these are nearly identical to CentOS eight, and will receive all future software updates. Use whichever one you wish.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (5), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **CLI Commands:** sudo (5), cd (4), sed (2), make (1), yum (1)
> **UI Navigation:** click on (12), go to (1)
> **Tools:** terminal (3), github (2), bash (2)
> **URLs:** [centos.org](https://centos.org) (3), [almalinux.org](https://almalinux.org) (1), [rockylinux.org](https://rockylinux.org) (1)
> **Prerequisites:** install (3), you'll need (2)
> **File Paths:** migrate2rocky.sh (2)
> **Definitions:** is an  (1), is a  (1)


### 1. Working with Playbooks

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to playbooks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=0)** - [Instructor] In the EX294 [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) Foundations course, we talked quite a bit about using ad hoc commands, which can be very powerful for running commands on a remote host. Playbooks are a completely different way to use Ansible, and are extremely flexible. Playbooks are the very basis for simple [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) using Ansible. Playbooks can be used for multi-machine deployment and are particularly well suited for deploying complex configurations and applications. Playbook files will be used to push [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) configurations to your infrastructure, this ensures that all devices being managed by Ansible are kept up to date. We can use the Ansible program for running ad hoc commands, but playbooks are very different, they're stored in text files, and as such, can be managed by source control systems like subversion or [Git](../../Skills/Software%20Development/Git.md). Playbooks are displayed in YAML format and can include multiple plays. Plays in playbooks use hosts and users to determine which systems in your infrastructure to target and which user to run as. It is the purpose of the play to map the tasks to the host. What is run on each host in a play is called a task. A play may include many tasks to be executed on many hosts. Tasks are executed in order one at a time against all targeted machines before moving on to the next task. The goal of a task is to execute a module with arguments which carries out the task on the remote host. Playbooks can have event handlers which respond when there has been changes. Normally when we use playbooks, we push configurations out to various hosts. However, we can reverse this situation by using the ansible-pull command, which pulls configurations back to the local host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (6), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** ansible (6), git (1)
> **Env Vars:** ex294 (1), yaml (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Playbook language](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=0)** - [Instructor] Playbooks are written in YAML. YAML has a minimum amount of syntax, and is not intended to be a programming language. YAML represents a model of a configuration or process. Let's talk now about the structure of a playbook. A playbook will include a list of one or more plays. A play is a sports analogy. Just as you can run a play in a football game that can do different things at different times, you can run [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) plays at different times that do different things. Plays map hosts to well-defined roles using tasks. Tasks then execute modules on hosts. Playbooks can have multiple plays that all target different hosts or groups of hosts. This might still be a bit abstract, so let me give you an example. You could have a playbook that would include plays with tasks that target the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) group. Modules would run on all hosts in this group, and then run other tasks on all hosts in the DNS servers group, and lastly, return to the web servers group and finish off by running more tasks there. Now let's see what a playbook looks like. We'll start by talking about the structure of a single playbook file. Later we'll talk about how to structure your directories, roles, and other Ansible files. This is a very simple playbook file that contains one play. Keep in mind that playbooks can and often do contain multiple plays. If so, they'll have more than one of these sections. This play includes the host group to execute on. In this example, it's the web servers group. It set some variables for the HTTP port and the maximize number of clients. Then it specifies which remote user to run as. And lastly, defines the task to run.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=93)** We have one task here named ensure apache is the latest version. It uses the yum module and passes the name of the package, in our case, httpd, and the state it should be in. In this example, it should be the latest version. In summary, this playbook targets all hosts in the webservers group, which is defined in our inventory file. Sets some variables and then as root, it runs the yum module, which installs or updates the httpd package. When it's done it finishes and then goes on to the next play if we have one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (3), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (2)
> **CLI Commands:** ansible (2), yum (2), apache (1)
> **Env Vars:** yaml (3), dns (1), http (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [YAML tips and tricks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=0)** - [Instructor] In computing, there are many different configuration data formats, including Key-value pairs, INI files, YAML formatted files, [JSON](../../Skills/Web%20Development/JSON.md) files, and XML. This is just a short list. All of these types have pluses and minuses. Some are more human readable and others are more capable. Most [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) systems allow you to choose the file format, and [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is no different. Most often, however, YAML is used for Ansible Playbooks. YAML is not specific to Ansible, so knowing it is a transferable skill set. YAML has minimal syntax, because it's not trying to be a programming language. It solely describes configuration. YAML supports a hierarchical structure so we can have nested items easily. However, not everyone loves YAML because of its [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-like reliance on syntactic whitespaces. This means it uses whitespaces to differentiate between hierarchy levels. The problem often lies in there being more than one way to create a whitespace, and by default in most editors, you can't visually tell the difference. This video is to help you keep your sanity when dealing with YAML. Let's take a look at our example Playbook again. We can see the hierarchical structure based on the levels of indentation. If we were to turn the space characters into dots, it would look like this. However, on occasion, you may copy and paste text or accidentally use a tab character to indent. And it looks the same as a sequence of spaces. For instance, our yum module line in this example. This poses a problem because the YAML file won't get processed properly. Let's talk about some ways to deal with YAML. This will be a quick list of things to do to improve your experience. We'll dive deeper into each of these items in a moment.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=94)** Primarily make your editor work for you. Use a linter. View YAML in another format. Outline your configuration ahead of time, and stay familiar with YAML. Let's talk more about making your editor work for you. This may have the biggest impact out of all of the points in the quick list and as a good practice with any language. The first step is to look for any YAML plugins for your favorite Text Editor. It doesn't matter if you use Atom, Light Table, Brackets, or Plain-old Emacs and Vim. There will be plugins or at least configuration mods that you can do to improve your life. Atom, Brackets and Light Table all come with YAML plugins and with a little bit of work can be installed and sent as eight. However, they do not come into default repositories. Next, turn on YAML syntax highlighting. Then configure your editor to insert spaces for tab characters. Next, configure the tab width to be compatible YAML. And lastly, make white spaces visible. When you use a lint roller in clothing, it cleans up the fuzz. Linters, when used with source files also clean up formatting fuzz such as programming errors, bugs, stylistic errors, or formatting errors and helps find problems before you try to use these files. You can use a linter directly to parse files or you can have the linter integrated with your editor to catch errors before you even save the file. When YAML files become very large, it can be very difficult to visualize the data, as YAML uses many lanes and hierarchies may not be obvious. It may be helpful to view YAML
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=188)** in another format such as JSON. You can also view YAML files in a graphical YAML viewer such as [treedoc.org](https://treedoc.org). YAML can turn into the config version of spaghetti code really quick if you don't have a plan. Before you start creating Ansible configurations, plan out your functionality first. After you have an idea which hosts will get which configuration data, write pseudo-config. This is a lot like pseudo-code, because you don't have to follow any syntax guidelines. During this process, you'll create the hierarchical structure, which will be helpful in the next step. Once you have the pseudo-config written, then and only then you write the YAML. The last item in our quick list is to stay familiar with YAML. Every time I switch between data formats or programming languages, it helps to revisit the syntax. You can do this by keeping cheat sheets nearby or by keeping [yaml.org](https://yaml.org) bookmark. One more thing that helps me is to keep the completed section of YAML commented out in a template file, which I start with when I create a new playbook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** yaml (24), json (2), ini (1), xml (1)
> **CLI Commands:** ansible (4), make (2), python (1), yum (1), find (1)
> **Tools:** atom (2), emacs (1), vim (1)
> **Analogies:** such as (3), for instance (1)
> **URLs:** [treedoc.org](https://treedoc.org) (1), [yaml.org](https://yaml.org) (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (2)

#### [Install the Atom editor](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=0)** - [Instructor] There are multiple editors you can use for writing YAML. For this course, we'll be installing the Atom editor created by [GitHub](../../Skills/Software%20Development/GitHub.md), as well as configuring VIM. But you can use whichever editor you like. The Atom editor is not available on the default software repositories, so we need to configure the Atom repository and install it from there. Installing a package from a repository is safer and more convenient than just downloading it. First, let's create the yum repository file. In a terminal on rhhost1, type sudo vi /etc/yum.repos.d/atom.repo.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=37)** You can name the repository file anything you want, but it has to end with .repo. Now hit enter, and enter your password if prompted. Go into insert mode by pressing the I key, and then add [Atom], and hit Enter. Name=Atom Editor, and hit Enter. Baseurl=[https://packagecloud.io/AtomEditor](https://packagecloud.io/AtomEditor) in camel text
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=73)** /atom/el/7/$basearch and hit Enter.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=83)** Enabled=1, hit Enter again. Gpgcheck=0, hit Enter again. Repo_gpgcheck=1, hit Enter. Gpgkey=[https://packagecloud.io/AtomEditor](https://packagecloud.io/AtomEditor) camel text again,
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=115)** /atom/gpgkey. Now save an exit by pressing Escape, :x!, and hitting Enter. Now install Atom by typing in sudo yum install -y atom, and hit Enter. And now we have Atom installed. You can place the Atom editor on your dock to make things easier. Click your mouse in the top left hand corner, and then type in Atom. Then grab the Atom icon, and drag it to your dock. To run it, click on the icon. If you have another editor that you like to use, that's fine. It doesn't really matter which editor you use, as long as it supports YAML and you enjoy it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** atom (14), github (1), vim (1), terminal (1)
> **CLI Commands:** yum (3), sudo (2), make (1)
> **Prerequisites:** install (3), configure (1)
> **Env Vars:** yaml (2), vim (1)
> **URLs:** [https://packagecloud.io/atomeditor](https://packagecloud.io/atomeditor) (2)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Configure VIM for YAML](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=0)** - [Narrator] VIM can also be used to write YAML. We're using VIM version eight in CentOS eight, which already has YAML support, so we don't have to install a plugin. If you're using an older version of VIM, you may want to install the vim-yaml plugin. We will however editor VIMRC file and add some configuration items. In a terminal on our toast one type in vi space tilde slash VIMRC, and hit Enter. We're going to add some VIM options here, which we'll discuss when we're done. Type in, go into insert mode by pressing the I key and then type in double quote space YAML, space config. This is a comment, newline line Backspace. Au exclamation mark, space buff, New File in camel text comma, buff, read post also in camel text, space asterisk, dot left curly bracket YAML comma YML right curly bracket space, set space file type equals YAML space fold method equals indent. New line, autocmd space file type in camel text, space YAML space set local, space TS equals two space, STS equals two, space SW equals two, space expand Tab. I've also included this file in the exercise files for this chapter named VIMRC. Go to the directory for this chapter
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=93)** and copy it to your home directory and rename it to .vimrc to use it. Let's talk about these configuration items. The first line is a comment but the second line search was a huge exclamation point, which tells VIM not to add these auto commands twice if they're already set. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the line says that when reading a new file or reading a file with a Colon read command and that file name ends with dot YAML or dot yml, then set the file type to YAML and the fold method to indent. The next line says for file types equal YAML said these configuration items. YAML requires indents in multiples of two, so we set TS to the value of two. This is the Tab stops, which is the number of spaces that a Tab counts for. STS or Soft Tab Stop is the number of spaces that a Tab counts for when doing editing operations. Again, we set it to two. SW as a Shift With, which is the number of spaces used for each auto indent. We'll set this to two and lastly, expand Tab using the appropriate number of spaces in place of a Tab. We can refine VIM a bit more by adding a plugin that adds vertical lines for indentation. This makes it easier to visualize the indentation levels. Save and Exit VIM by pressing Escape + : + X, exclamation mark and hitting Enter. Now type in clear, and then type in [Git](../../Skills/Software%20Development/Git.md) space clone space [https://github.com./Yggdroot/indentLine](https://github.com./Yggdroot/indentLine)
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=183)** with a capital L dot git space Tilda slash dot VIM slash pack slash vendor slash start, slash indent Line with a capital L again, and hit Enter. If git is not installed on your system, you'll want to install it first. This process is all we need to do in order to install the indentLine VIM plugin. You'll also want to install a linter for YAML. For this we'll install YAML lint which is useful no matter which editor you use, type in clear and then type in sudo space Yum, space install space dash y space yamllint lint and hit Enter, type in your password if prompted. Yamllint by default is fairly strict and shows errors for long lines and other things that we might not care about. So let's relax the configuration a bit. To do so, type in clear and type an mkdir space tilde slash dot config, slash yamllint. This is the config directory for yamllint and hit Enter. Now let's create the custom configuration having VI space tilde slash dot config, slash yamllint slash config, and hit Enter. Go into insert mode by pressing the I key then add, extends Colon, space relaxed, Enter. Rules colon, Enter two spaces, line, length, colon, disable. Enter two spaces, trailing dash spaces, colon space disable. This will cut down on the formatting error messages.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=279)** I have a habit of putting a space at the end of my lines and without this modification yamllint complains every time. It's up to you how strict you want it to be. Save and Exit by pressing Escape + Colon + X, exclamation mark and hitting Enter. Now let's open a YAML file on VIM and see how it works. Included in this chapter as exercise files, is a file called example.yml. Let's use VIM to look at it. Change into your exercise files directory and then into the directory for this chapter. For me, I type cd space ExerciseFiles/ch01 for chapter one. Now type in VIM space example, dot yml and hit Enter. We can see that VIM has opened this file with all indents folded. To unfold an indent, put your cursor over a full line and hit Escape to ensure you're not in insert mode, and then press Z + O to open. You can also open quickly by pressing the Spacebar. Now be sure you're inside the fold and press Z + C to close. If when opening a file, you want to expand all folds at the same time, press z, uppercase R. Now let's test the indent lines. Go into insert mode by pressing the I key and then create a new line and indent twice. You should be able to see nice vertical bars representing the levels, by default, the indentation characters a pipe symbol, but you can change it in your dot VIMRC file to any character. Lastly, we'll test the yamllint on our file. Exit VIM by pressing Escape + : + X + ! and hitting Enter. Now type in yamllint space example dot yml and hit Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), cursor (1)
> **Env Vars:** vim (14), yaml (13), vimrc (4), sts (2), yml (1)
> **Tools:** vim (15), terminal (1), github (1)
> **CLI Commands:** git (3), sudo (1), yum (1), mkdir (1), cd (1)
> **Prerequisites:** install (7)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** indentline (2)

#### [Playbook hosts and users](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=0)** - [Narrator] In EX294 Foundations of [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) course, we set up a direct instruction in our home directory of rhhost1. Let's verify this. Be sure you login as user1 on rhhost1, and are in your home directory. You should have a directory called Ansible files; change into that directory and then ls. In that directory there will be a playbook named apache.yml. If you don't have this file, you can get it out of this chapter's exercise files. Let's load it into vim. If you like the graphical Atom Editor better, you can use that. For vim, type in vim space apache.yml and hit enter. Press z, uppercase R to expand all folds. After line numbering them, by pressing escape, colon and then typing in set space number. As a quick review, we can see that we have specified on line two, that we're going to target all hosts, in the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) group. This could have been a host name IP address or a group of hosts. We talked about targeting hosts in detail in the EX294 Foundations of Ansible course, so rewatch that video for more information. Following that, on lines three through five, we set some variables for the http_port and maximum number of clients. On line six we set the remote_user. In older versions of Ansible this was just called user, but it was changed to limit confusion with the user module, so I would recommend typing out remote, underscore, user. We specified our remote_user of root. Remote users can also be defined per task, you may want to run one task as an administrator,
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=93)** but another as a regular user. For instance, if we inserted an extra remote_user entry for the latest Apache version installed task, to specify running the yum module as root. We could add an additional remote_user entry for the Apache enabled and running task as well. For this we can specify the apache user. Obviously the user we choose will need sufficient privileges for carrying out these tasks. If you want to elevate privileges, we can also use become. For example, if we set our remote_user to a normal user such as user1 and we need to elevate privileges, we set become to yes. By default we become root. However, we can specify the user as well with become underscore user. Note that become_user and remote_user are not the same thing but can effectively accomplish the same thing. Let's relate this to an interactive login. The remote_user is a user you login with using ssh, by typing in ssh space user1@rhhost2. The ssh client on rhhost1 connects to rhhost2 and exchanges credentials. Once you're logged in you'd be user1. However, if you need to elevate your privileges, you can type in su, and it will make you a root after prompting you for a password. The user that you logged into rhhost2 with will be equivalent to Ansible's remote_user. The user you'd be after using the su command would be equivalent to Ansible's become. If you wanted to elevate your privileges to a different user you'd set become to yes, and become_user to user2, for instance. Along with become and become_user, you can also specify the method that you elevate privileges using become_method.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=187)** The values can be su, sudo, runas of the noted [Windows](../../Glossary/Service/Windows.md), or many more. Check the Ansible documentation for the become plugins for more information. If you need to specify flags to the become_method, you can use become_flags. This may include running a specific shell or switch to another user, such as with su or sudo. Note that we can also set these items from the command lines for the entire playbook. For instance, dash, dash, ask, dash, become, dash, pass can prompt the password. Dash, dash, become, dash, dash, become, dash, method, and dash, dash, become, dash, user. This is all pretty simple and mimics interactive login sessions, but the permissions get complex if you're not elevating your privileges to root. When Ansible runs a module on a remote node, it copies the module as a remote_user. In this case user1. If the remote_user is a normal user, such as user1 the module is run as user1. When the remote_user is root, the modules are copied with root permissions and executed as root. Since the module is owned by a root, regular users can't read it. This is secure. Things get a bit more complex with become_user. If the remote_user is user1 and the become_user is also a normal, non-elevated user, such as apache, then the module gets executed as the become_user. In this case, apache. However, the apache user may not be able to execute the module because it's owned by user1. Note that even if the apache user cannot execute a module owned by the user1 user, the module is still world-readable. Files that are copied as a regular user are readable by other users, because the other permissions, by default, are set to read.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=281)** This could potentially be a security problem if any of the module parameters contain sensitive information. There are several solutions to this problem. The first is to use pipelining. With pipelining, the module is piped to the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) interpreter and never saved on the disc. Next, you can also mount the temporary director with POSIX ACLs turned on. Ansible will use ACLs to share the module file with the second unprivileged user, instead of having to make the file world-readable. The last solution is don't become an unprivileged user. The last solution may be the easiest. If you're worried about not knowing if you're executing modules insecurely, don't be. New versions of Ansible warn you if the modules have been saved world-readable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (10), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** ansible (10), apache (9), ssh (3), make (2), sudo (2)
> **Code Identifiers:** remote_user (12), become_user (6), become_method (2), http_port (1), become_flags (1)
> **Analogies:** such as (4), for instance (3), for example (1)
> **Tools:** vim (3), atom (1)
> **Env Vars:** ex294 (2), posix (1)
> **Warnings:** note that (3)
> **File Paths:** apache.yml (2)

#### [Playbook tasks list](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=0)** - [Narrator] Each play in a playbook contains one or more tasks. Each task is run one by one against the targeted host or hosts. Each task in the list is completed on the host or hosts before moving onto the next task. All hosts in the play get the same tasks. It's actually the plays job to map tasks, to hosts they're the glue that sticks it all together. The task job is to execute modules on the remote host. Idempotent means that an operation can be applied multiple times without changing the result beyond the initial application. So if we run a playbook more than once, the results should be exactly the same each time. This allows us to run our playbooks as many times as necessary without fear of harming anything. Playbooks should be Idempotent if possible. Playbooks execute from top to bottom, if any task fails on a host, then that host is taken out of the rotation for other tasks. Each time a module is run, the results should be the same, this gives you the flexibility and peace of mind to execute playbooks as often as you want. To be idempotent, it helps to have a module check to see if the desired state has already been reached. If it has, then it does not execute and instead exits. By design many commands run using the shell or command modules will not be idempotent, both shell and command modules run commands. Some commands don't change the state such as get facal and as such will be idempotent. Other commands modify the state and may run each time the module is executed. Rerunning the module again, reruns the commands. [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) provides a creates flag to help make shell
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=96)** and command module task idempotent. If a file is to be created, this flag check to see if the file already exists. Let's take a look at the task format, every task should have a name. This is going to be displayed in the output so be descriptive. If it does not have a name, Ansible will use a string fed to the action as the name, most module options are in the form of key value pairs, such as name:httpd and state:latest. Command and shell modules however are not in key value pairs, command and shell modules also care about the return code as they're executing commands. If a command fails, we need to decide if the operator should be notified or not. We can append ||/bin/true after the command or use the ignore errors equals true module option. When using some modules, the module arguments can get very long in this case, just break the line and indent it. We can also use variables on our task list. In this example, I've set the variable web host to rhhost2.[localnet.com](https://localnet.com). Now that I've defined this variable, I can use it in my task list. I'll talk more about templating later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (2)
> **CLI Commands:** ansible (2), make (1)
> **Analogies:** such as (2)
> **URLs:** [localnet.com](https://localnet.com) (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### [Playbook change handlers](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=0)** - [Instructor] As I've mentioned before, modules should be idempotent, so you can run a playbook as many times as you want, and the results are always the same. If a task is already in the desired state, that task should exit. If a task makes a change, we can fire an event using [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md)'s basic event system that can be used to respond to that change. Let me first talk about how we'd do this without using Ansible's event system and outline the pitfalls. Let's say we create a task using the copy module, in this task we copy the apache config file to its appropriate destination on our node. After this, we use a service module to restart the service. We could make an additional task that ensures that the apache package is updated and restart the service as well. The problem is that we're blindly restarting the service, and we may even have more than one task restarted in the apache service unnecessarily. To set up a change event, we'd use a notify action at the end of the task block. Since a notify is then at the end of a task block, it may be possible that our task calls a notify event more than once. Ansible is smart enough to only restart the service one time. Also notice that in the notify event, we're not giving specifics on what needs to be done. As written, this isn't functional. To make it functional, we also need a change handler that carries out the restart process. The change handler will look like this. The name will match the value of our notify entry, and it will use a service module to restart the apache service. We'll talk later about structuring your Ansible files in such a way that all change handlers are together instead of being mixed with your tasks. Note that to create two events, we just need to duplicate what we have. For instance, if we were using memcache,
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=93)** we would restart it at the same time as apache. We'd have to create a change handler called restart memcached to make this functional. This will look just like our apache change handler, but it will specify the memcached service. The names of these handlers are global, so they have to be unique. This can get a bit clumsy if you have a lot of changes in a task. Ansible 2.2 and higher can listen to generic topics and notify can trigger them. To show how this works, let's assume that we have a task where we want to restart a lot of services. You might assume that our handler's name would be restart all web services, and inside of it would be a list of service modules one after the other that restarted what we wanted. For instance, httpd, memcached, and bind services. This is a pretty hard-coded solution, because we'd need to create handlers for all of the different combinations of services that we'd ever want to restart at one time. This is not how we want to use generic topics. Let's go back to our task for a moment. Notice the value of the notify line was "restart all web services". Instead of making a handler with this name, we'll have multiple handlers listen for this event. To do so, we'll use the listen item and specify restart web services. By using listen, we can decouple the handler's name from the functionality. In essence, we can create groups of tasks that should be triggered by having them all listen to the same thing. It's worth noting that the order in which handlers are run is the order they're defined, not the order in which they're called in the notify statement. It's also worth noting that if you use the same name for more than one handler, only the last one will run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (5)
> **CLI Commands:** apache (6), ansible (5), make (3), node (1)
> **Analogies:** for instance (2), just like (1)
> **Versions:** 2.2 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Verify Playbooks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=0)** - To minimize troubleshooting and frustration. It's a good idea to verify your [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) playbooks before running them. There are several different ways that we can verify Ansible playbook files. First we can verify if the YAML is correct using yamllint. Also see the video in this chapter covering configuring your editor to syntax highlight for you. This will cut down on the number of YAML errors, you introduce into your playbooks. In a terminal and RH host one type in CD space, tilde slash Ansible dash files and hit enter and then verify your Ansible playbook by typing in yamllint space Apache dot yml and hit enter. Second, we can use Ansible Lint to verify the contents of the playbooks. Ansible in does not install by default. And as of the time of this recording, wasn't available to install via software repository. As such, we'll install it with a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) package installer. First, let's install pip in case is not installed. Type in sudo space yum space install space dash Y space Python three dash pip and hit enter. Type in your password prompted. Once that's done, install Ansible Lint via pip, type in clear, and then type in pip three space installs space dash dash user space, Ansible dash lint, and hit enter. Now that we have Ansible lint, we can use it to verify our Apache dot yml file. Type in clear, type in Ansible dash lint space, Apache dot yml, and hit enter. Ansible Lint will give you hints about Ansible syntax and best practices. We can see that we have a few items to clean up in our Apache dot yml file.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=93)** The next thing we can do is check the syntax in our playbooks. We can use the Ansible playbook command for this with a dash dash check option type in clear type in Ansible dash playbook space dash dash check space, Apache dot yml, and hit enter. This runs the playbook through the parser as if it were executing it to verify if all included files, roles and other files have the correct syntax and if the nodes are accessible. For this demonstration, I shut down my art shows to VM. If you don't want to check the entire playbook, but still want to check one task, we can edit the playbook file. Type and clear and then type in vim space Apache dot yml and hit enter. Press Z upper case art to expand all folds. I had to go into insert mode and after the latest Apache version installed task, add check underscore mode colon space. Yes. Now we'll check this one task, even if you haven't specified dash to check on the command line. Go ahead and save an exit by pressing escape, Call an ex, exclamation Mark and hitting enter. Another nice feature, is that we can check which host will be affected by the playbook by using the dash dash list dash host option. Type an Ansible dash playbook, space Apache dot yml space dash dash list dash posts and hit enter. Be sure to integrate these tools into your workflow to speed up your learning Ansible playbooks and the development of your configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (16), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** ansible (16), apache (8), pip (4), python (2), cd (1)
> **Prerequisites:** install (6)
> **Tools:** terminal (1), vim (1), command line (1)
> **Env Vars:** yaml (2)
> **Speakers:** - to (1)


### 2. Creating Reusable Playbooks

[↑ Back to Table of Contents](#table-of-contents)

#### [Create structured configuration](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=0)** - [Instructor] As we've seen, it's fairly easy to create a global [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) host file in a single Ansible playbook for testing. We created both of these in the EX294 Ansible Foundations Course. However, your infrastructure configuration will quickly outgrow this very simple setup, and it's a good time to start planning for the future. To get our Ansible configuration scheme to scale, we need to create a structure that separates group variables, roles, tasks, and templates. This structure will allow us to grow our configuration setup beyond where we are now. Before we create our configuration structure, we need to make sure our name resolution is working. We need to do this so we can use host names in our Ansible inventory files. You can manage name resolution by creating records in a DNS server if you have one, but to keep things simple, we'll configure the ATSE host files on our [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). First, get the IP address of rhhost1. In a terminal, type in ifconfig and hit enter. You can also use the newer IP command if you wish. In the VirtualBox lab setup for this EX294 series of courses, we configured two network interfaces, one that attaches to the VirtualBox host network via NAT for accessing the internet. The other connector, the internal network named vboxnet0, which our VMs will use to communicate with each other. This internal network address should be 192.168.3.0, so find the network interface and the output of ifconfig and configure name resolution for it. I can see that my IP address for my enp0s8 interface on rhhost1 is 192.168.3.108. This will be the interface on the vboxnet0 internal network.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=94)** Now switch over to your rhhost2 VM and check its interface on the 192.168.3 network, using the ifconfig command again. I can see that the address for my enp0s8 interface is 192.168.3.110. With this information, we can create our ATSE host files for both VMs. Now go back to your rhhost1 VM. Type in clear, and then edit the host file by typing in sudo vi /etc/hosts, and hit enter. Enter your password if prompted. Go into insert mode by pressing the I key, and then add a new line, and add your IP address for rhhost1. Mine is 192.168.3.108, space, rhhost1, space rhhost1.[localnet.com](https://localnet.com), and a new line. Now type in your IP address for rhhost2. Mine would be 192.168.3.110 rhhost2 rhhost2.[localnet.com](https://localnet.com).
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=163)** Save and exit by pressing escape colon x and hitting enter. Now let's copy this file to rhhost2 using secure copy. Type in scp /etc/hosts root@rhhost2:/etc/hosts,
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=181)** and hit enter. Accept the fingerprint if prompted. Also type in root's password if it prompts you. We had to copy as root because we're copying this file to a system directory in rhhost2. If it prompted you for root's password, then your SSH keys are not properly configured. You want to use the SSH copy ID command to copy your keys across to the root user's authorized keys file. Be sure you do this before moving on. Type in SSH-copy-ID root@rhhost2 and hit enter. Type in root's password and hit enter again. Now let's create our static inventory file. On rhhost1, change into your Ansible files directory in your home by typing in CD ~/Ansible-files and hit enter. And type in clear. We're going to create our structure here. Let's start by creating a file called hosts. Type in VI host and hit enter. Press your I key to go into insert mode and add left square bracket webservers. This is our first Ansible group. Webservers, right square bracket. This is our first Ansible group. Now add rhhost2.[localnet.com](https://localnet.com), and a new line. For our second group, [dbservers], new line. And once again, rhhost3.[localnet.com](https://localnet.com). Since we only have one managed host, we'll put it in both webservers and dbservers groups. If you have more managed hosts, you can mix it up a bit and add them here. Save and exit by pressing escape colon ! and hitting enter. Now that we have our static inventory taken care of, let's create a directory for our group variables.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=275)** Type in mkdir group_VARs, and hit enter. Later, we'll be creating variable files in this directory for all hosts, hosts in the webservers group, and hosts in the dbservers group. But for now, we just wanted the directory created. Now let's great directories for our roles. We'll use BASH's brace expansion to simplify this. Type in mkdir -p for parent directories, space roles/{base,webservers,dbservers}
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=308)** /{handlers,tasks,templates} and hit enter.
>
> **[5:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=317)** Now let's look at the results with the tree command. Type in tree and hit enter. If you don't have the tree command, you can install it with YUM. Tree shows that we now have role directories for base, webservers, and dbservers, and inside of each role directory are directors for handlers, tasks, and templates. The base role will contain configuration information that's common between all hosts. This would be general send.safe software, networking configuration, and user information. This directory structure will keep templates, tasks, and change handlers apart and allow us to scale. It would be very easy to recursively duplicate this entire structure to be modified for other configurations. It would also be simple to create a GetProject to put all the configuration data under [Version Control](../../Skills/Web%20Development/Version%20Control.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (9), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **CLI Commands:** ansible (9), ssh (3), mkdir (2), make (1), find (1)
> **Env Vars:** ssh (3), ex294 (2), atse (2), dns (1), nat (1)
> **Versions:** 192.168.3 (6)
> **Prerequisites:** setup (3), configure (2), install (1)
> **URLs:** [localnet.com](https://localnet.com) (4)
> **Tools:** terminal (1), bash (1)
> **Cross-References:** go back to (1)

#### [About playbook roles](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=0)** - [Instructor] Roles allow us to group content and allow easy sharing of configuration data for reuse on other systems. By using roles, we can automatically load variable files, tasks and handlers, all based on the file system structure. There are standard directories that can be used on roles. These directories will be automatically processed for the role. In this example, the [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) rule. Each role has to have at least one of these directories. Each directory included must have a main.yml file in it. The task directory contains the main list of tasks to be executed by the role. The handlers directory contains change handlers used by this role. Note that handlers in this directory can also be used outside of the role. The files directory contains files that can be deployed by the role. The templates directory contains templates for the role. The vars directory allows us to store non-default variables for the role. The default directory however, stores default variables for the role. And lastly, the meta directory defines [Metadata](../../Skills/Web%20Development/Metadata.md) for the role. We may define role dependencies in the meta directory so roles can require other roles. In this way, we can make one role a dependency of another role. For instance, if we wanted the webservers role to require the apache role, we'd add this to our meta/main.yml file. We can also set variables while requiring dependencies. Role dependencies are always executed before the role that called them. If a role has a dependency for more than one other role, it will not be called twice. [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is smart enough to only execute the role once. That is unless you include allow_duplicates: true
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=95)** to the same meta/main.yml file. So this is how it works. If the handlers/main.yml file exists, then the handler is listed and it will be added to the play. If the vars/main.yml file exists, then the variables listed in it will get added to the play. This also goes for the defaults/main.yml file for default variables. If the meta/main.yml file exist, any role dependencies listed in it will be added to the list of roles. The templates, files and tasks directories are a bit different. If these directories exist than those files, templates or tasks can be referenced without providing the relative or absolute path. You can use any files, templates or tasks in these directories in other plays, but you'll need to specify the relative or absolute path to them. When we specify the role in our plays, we can specify the simple name for the role such as Webservers, or we can include the path to the role. In both of these examples, we're saying that for all hosts in the webservers group, apply the role of webservers. Ansible will then go into the roles/webservers/test directory, and process main.yml and run whichever task might be listed. Note that this is automatic based on the naming of the directory structure. With Ansible 2.4 and newer, you can also import into the role from within a task. For instance, inside the task for webservers, we could use import role to import the task from an nginx role. Roles will only get run once. For instance, if we have a play call the same role twice, it will only get executed one time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (3), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **File Paths:** meta/main.yml (3), main.yml (2), handlers/main.yml (1), vars/main.yml (1), defaults/main.yml (1)
> **CLI Commands:** ansible (3), make (1), apache (1), nginx (1)
> **Analogies:** for instance (3), such as (1)
> **Warnings:** note that (2)
> **Code Identifiers:** allow_duplicates (1)
> **Versions:** 2.4 (1)
> **Prerequisites:** you'll need (1)

#### [Creating roles](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=0)** - [Instructor] Let's put what we've learned into practice and create a working role. We'll start by creating the site dot YML file at the top of our [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) files directory structure. When we run our playbook, we'll specify this file along with our host file in this directory. Make sure you're in your Ansible files directory. and then type in VIM space site dot YML and hit Enter. Once again, if you want to use a graphical editor such as Adam, please do so. Go into insert mode by pressing the Iyke, and then add dash dash dash, so it's a YALM file, space hash for comment, space this, playbook. This playbook deploys all site configs, Backspace. So it's not in a comment, dash space name, colon, space apply, base configuration to all nodes. New line, tab, hosts, colon, space all, new line, tab, remote, underscore user, colon, space, route, new line, new line, tab rolls, colon, new line, tab, dash, space, space. We're applying this to all hosts, which in our cases that are chose to VIM, we're specifying route for the remote user and executing the base role. Now to save, press escape, colon, x exclamation mark, and hit Enter. Now let's create the files for the base role, have an VIM space roles, slash base, slash tasks, slash main dot YML and hit Enter.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=94)** Going to insert a mobile president of Iyke, and then add, dash dash dash, again it's a YAML file, Enter, hash, space, This playbook contains base plays for all nodes, new line and Backspace, so it's not a comment, dash, space name, colon, space, install firewalld, new line, Tab, Yum is the module use, space, name equals firewalld, space state equals present, new line, new line, dash, space name, colon, start the firewalld service, new lane, tab service is the module we'll use. So service colon, space name equals, firewalld, space, state, equals started, space, enabled equals, yes.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=159)** Notice I'm using the short format, and I have arguments to the YUM service modules, all on one line. For short entries like this, it can be a time-saver, save an exit by pressing Escape, colon x exclamation mark and hitting Enter. We don't have any change handlers yet or templates, so we won't put anything in those directories. To recap, we have a static inventory file at Ansible files slash host, we have a site playbook file at Ansible files, slash site dot YML. And we have a file for the base role at Ansible files, slash rules, slash base, slash main dot YML. This is a good start, let's run it now. Typing clear, they have an Ansible dash playbook, space dash, I, space, hosts, that's our host file, space site dot YML and hit Enter. If your syntax was good, it should run. If there's an error, Ansible will try to tell you where it is. In my experience, it's almost always a formatting issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (7)
> **Env Vars:** yml (6), vim (3), yalm (1), yaml (1), yum (1)
> **CLI Commands:** ansible (7), yum (2), make (1)
> **Tools:** vim (3)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Static and dynamic content](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=0)** - [Narrator] Although it's possible to write one large playbook that configures every aspect of your infrastructure, it wouldn't be very efficient or portable. It's better to break up the playbook into smaller pieces. In [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md), there are three ways of doing this. Roles, includes, and imports. Roles allow entire configurations to be grouped, including tasks, variables, handlers, and modules. These roles can also be shared on Ansible galaxy, so others can utilize them. Includes and imports work a bit different than roles. However, all three will allow you to parcel up large playbooks into smaller pieces. To understand the differences between roles, includes and, imports, we need to understand that Ansible has two modes in which it utilizes reusable content. The first mode is static, which is preprocessed at the time of playbook parsing. This content is processed when we run the playbook. The second mode is dynamic, which is processed during runtime. Ansible doesn't process this content until the task is used. Up until Ansible 2.3, all roles were static, which meant they were processed at the time of playbook parsing. With Ansible 2.3 and newer, we can now reuse a role dynamically with include_role. Ansible doesn't run this content until that include is used. Ansible uses the term include when it's dynamic. Ansible sticks with the same naming scheme for includes and imports. Any include statements, such as include_role, for reusing roles, and include_tasks, for reusing tasks, are dynamic. Before Ansible 2.4, only the include statement was available, but you could include playbooks or tasks with it. And it behaved differently depending on context.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=93)** It could be dynamic or static, depending on what Ansible decided. This statement has been deprecated. Any import, including import_playbook, for reusing whole playbooks, import_role, for reusing roles, and import_tasks, for reusing tasks, will be static. By using include or import statements, we can decide if we want to reuse plays, roles, and tasks in a static or dynamic manner. Static and dynamic content can be mixed, but it's not recommended, as it makes it difficult to troubleshoot playbooks. There are some advantages of using include. For instance, includes work in loops. And includes work in loops because include is dynamic, and doesn't get processed until Ansible gets to it. So for each iteration, Ansible processes it again. There are some instances where a dynamic include doesn't work. For instance, you can't use a notify to trigger a handler name that's inside an include, because that code hasn't been processed yet. And Ansible is not aware of the name yet. You can, however, trigger the entire include, but all tasks in the include will run. There are also advantages and disadvantages to using import methods. Import methods cannot be used in loops as the import is processed at playbook parsing. When using import, you cannot use variables from inventory sources for role names. These inventory files would be hosting group vars files. Lastly, handlers will not be triggered when notified by their name, because importing overwrites the handler's name with the importer task list. Don't worry too much about the limitations of these two methods at this time. You mostly will not run into problems at this stage of learning.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=185)** Just keep them in mind, and revisit these slides later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (14)
> **CLI Commands:** ansible (14)
> **Code Identifiers:** include_role (2), include_tasks (1), import_playbook (1), import_role (1), import_tasks (1)
> **Versions:** 2.3 (2), 2.4 (1)
> **Analogies:** for instance (2), such as (1)
> **Best Practices:** recommended (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### [Using includes in Playbooks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=0)** - [Instructor] Now let's use includes in playbooks. In our choice one be sure that you're in your [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) files directory. Now change into your web service task directory. Type cd space roles slash [Web Servers](../../Skills/Web%20Development/Web%20Servers.md), slash tasks and hit Enter. Let's create a file here called main.yml. Type in vim space main.yml and hit Enter. Go into insert mode by pressing the I key and add dash dash dash because this is a YAML file new line dash space include colon space install underscore apache.yml. We're going to dynamically call a YAML file called install underscore apache.yml. Notice that we didn't have to include a path. Ansible will know to look for it within the test directory. Now save an exit by pressing Escape colon x exclamation mark and hitting Enter. Using this method we could later include other plays that would install other web server based software. Remember this is the web server role so you want to restrict what you do here to that purpose. Now let's create the install apache YAML file. Type in vim space install underscore apache.yml and hit Enter. Once again go into the insert mode and type dash dash dash and hit Enter. Now we'll start with a comment hash space install space apache new line backspace for our first task type in dash space name colon, space install space apache that's the name of it.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=94)** New Line Tab we'll use the yum module. Yum colon space name equals httpd space state equals present
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=107)** new line this will ensure the package is installed. Our second task, rephrase for our second task type in dash space name colon we'll name it apache service state. New line we'll use a service module. Type in service colon space name equals httpd space state equals started space enabled equals yes. New line the third task will be named start firewalld. Type in dash space name colon space start space firewalld. New line for this one we'll use the service module. Tab service colon space name equals firewalld. (keyboard typing) Space state equals started space enabled equals yes. New line this will ensure the firewall is started now as well as a boot. For our last task type in dash space name colon space add firewall rule for apache. New line for this we'll use a firewalld module. Tab firewalld colon space and for options port equals 80. Slash TCP space permanent equals true. Space state equals enabled. Space immediate equals yes.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=203)** This opens a hole in the firewall for web traffic. I'm using the short format for module options again because it shortens the text quite a lot. We could have put all of this information in the main.yml file that we just created but including is the first step to making your code reusable. Now save an exit by pressing Escape colon x exclamation mark and hitting Enter. Currently if we run our playbook this configuration won't run because we're not calling the role. Let's go back to our main ansible files directory and add the web servers role. Type in cd space (mumbles) slash ansible files and hit Enter. Now edit the site.yml file by typing in vim space site.yml and hitting Enter. Now expand all fold by pressing Z uppercase R. Go into insert mode by pressing the I key and go to the bottom of the file. Now add dash space name colon space configure webservers. New line Tab hosts colon space webservers as the ansible group web servers. New line Tab remote user colon root. New line new line Tab roles colon new line Tab dash space web servers. Now our main playbook file says that all hosts in the web servers ansible group run the web servers role. Save and exit by pressing Escape colon x exclamation mark and hitting Enter.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=297)** Now let's run the playbook file type in ansible dash playbook space dash I space hosts space site.yml and hit Enter. If there are errors you'll want to fix them now. In summary we changed the site.yml file that map the web servers role to the web servers ansible group of hosts. we created the roles slash web service slash main.yml file which uses and include to use dynamic content from roles slash web servers slash install underscore apache.yml which installs apache configures the firewall and make sure services are running.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (9), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (8)
> **CLI Commands:** apache (10), ansible (8), cd (2), yum (2), make (1)
> **File Paths:** main.yml (4), apache.yml (4), site.yml (4)
> **Prerequisites:** install (8), configure (1)
> **Env Vars:** yaml (3), tcp (1)
> **Tools:** vim (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 3. Using Variables

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting inventory and playbook variables](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=0)** - Although it can be an incredible time-saver to create static configurations and push them out to nodes, we often need more flexibility. For instance, we may want to include the IP address of the host in its own configuration or in the configuration of another node. In setting up a name resolution we put the IP addresses of rhhost1 and rhhost2 in our etc host file. Instead of hard coding the address in the file, we can provide a variable that is populated from another source if we are configuring our systems with [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md). Before we can start using variables, we need to follow some guidelines as far as naming them. Variable names can contain letters, numbers, and underscores. Also, variable names should always start with a letter. Valid variable names could be, rhhost2 underscore port or rhhost2port. Assigning variables is pretty similar to other systems. For instance, to assign a value to rhhost2 underscore port we'd type the variable name equals and then the value. Invalid variable names would be rhhost2 dash port, rhhost2 space port and rhhost2 dot port. Ansible also support dictionaries that hold key value pairs. For instance, for rhhost2 we can assign values to SSH port and web port. We would access each specific field in the dictionary by specifying the name of the dictionary and then the name of the key inside square brackets. There is also a dotted notation, but I'll avoid using it as there can be conflicts with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) methods. It looks like this, dictionary name dot in the key. We can also set variables in our inventory file. Our inventory file is in INI format so it looks like this.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=94)** To add a variable you just had a space at the end of the node and add the key value pair. The same inventory file would look like this in the YAML format. For simple inventory setups I think INI is better. It's shorter and easier to read and the YAML format we add entries after the host name with our variables and values. However, if you want to set a lot of variables, INI format very quickly becomes clumsy. I don't find this easier to read at all. When my inventory starts to get complex, I then move my variables somewhere else, or switch to YAML format. The same information in the YAML format would look like this, which I find easier to read. I can quickly scan the file and know which variables belong to which hosts. If you want to set a variable for all nodes in an Ansible group, you'd structure it a bit differently. In INI format, we create a new variable section that matches the Ansible group. To set variables for our group in YAML from format, you just add a vars section. I find group variables easier to read in either INI or YAML formats. We can also set variables in our playbooks. This is our site dot YMI file with a vars section. You may remember that when we created our Ansible files directory structure, we created a group vars directory. We can create a file in that directory named after the group and put our variables in it. For instance, for the web service group, we'd create Ansible files, slash group vars, slash [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) and inside of that, we'd add our variables. I need to add one more node that's specific to my example, choice a variables. I've been specifying SSH port in my examples. This is a valid variable that we can define for the SSH service, but keep in mind that setting the SSH port this way only affects open SSH connections.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=189)** If you use impair AMECO, it won't use this value. Just keep this in mind if you're using this variable in your configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (1)
> **CLI Commands:** ansible (6), ssh (5), node (3), find (3), python (1)
> **Env Vars:** yaml (6), ssh (5), ini (5), ymi (1), ameco (1)
> **Analogies:** for instance (4), similar to (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - although (1)

#### [Using variables](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=0)** - [Instructor] Once we've set some variables, we need to use them. We can do this various ways, including using them in playbooks directly and in Jinja2 templates. Let's start by creating a file of variables for all host and [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) group. In a terminal on rhhost1, change to your [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) files directory by typing in cd space, tilde, slash, Ansible dash files and hit enter. And then list the contents with ls. We can see that group vars directory that we created in this course. In this directory, we can create files named after our Ansible groups, such as web service and DB servers. In those files, we can put variables for hosts that are in those Ansible groups. For instance, a file for web servers and a file for DB servers. If those variable files get too large, you can also put a directory with a group name in group vars and all files and the director will get processed. For instance, we could have a web service directory and then separate files for servers in different geographical locations, such as Seattle, San Francisco and New York. Note that the variables are applied to host in the web server Ansible group. Ansible doesn't automatically apply to servers in different locations. The Seattle, San Francisco and New York names are just a way for us to break up our variables into different files. It doesn't really matter what you call the files. Also note that if you want variables managed in a separate file for a specific host, you can create a directory called host underscore vars and place files with the variables in them according to each host if you want that sort of granularity. You could have a file for rhhost2, rhhost3 and rhhost4. These names will have to match those in your inventory file. Let's create a file in the group vars directory,
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=93)** called web servers, and we'll add a variable for the web port number to it. Type in vim, space, group, underscore vars, slash, web servers and hit enter. Go into insert mode by pressing "I" key and add dash dash dash, because it's a YML file, new line, hash, space, variables for the web service group.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=118)** New Line and for the variable type in httpd, underscore port, colon, space 80. This variable will contain a web server port number. Now save and exit by pressing escape, colon X, exclamation mark and hitting enter. Now let's go to our web server role and change its name dot YML file. Type in CD, space roles, slash web servers, slash tasks and get a listing by typing in ls. We can see that we have two files in this directory, main dot YML and install underscore Apache dot YML. The main dot YML file only includes the install Apache file so let's edit the latter. Type in vim space, install underscore Apache dot YML, and hit enter. You'll notice on the last line we're setting a firewall rule to allow web traffic through. Let's use our variable here. Go into insert mode by pressing the "I" key and then change 80 slash tcp to left curly bracket, left curly bracket, space httpd, underscore port, that's the variable name, space, right curly bracket, right curly bracket, slash tcp. Now the variable we set for the web server the group should get used here. Save and exit by pressing escape, colon X, exclamation mark and hitting enter. Now let's go back to our Ansible files directory and run the playbook. Type in cd, space, tilde, slash Ansible dash files, and hit enter. To run the playbook type in Ansible, dash, playbook, space dot i hosts, space, site dot YML and hit enter. If you get any error messages here,
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=214)** work through the problems before continuing. We can also use variables in Jinja2 templates. For instance, you can use a template in your playbook like this. In this line we specify a source template file, which is httpd dot conf dot j2. The destination is going to be the value of the Apache underscore path variable slash httpb dot conf. We might do this because Red Hat in place the Apache configuration file in different locations. The httpd dot conf dot J2 template file would be an unconfigured httpd dot conf file with variables for any value that we want to set. When we deploy the file the variables will get filled in and the files saved as httpd dot conf. Jinja2 gives us a great deal of power for transforming the content of our variables using filters. I can't cover all filters here as there are many. However, I'll give you a couple of examples. If you want to include a default value in case it doesn't set specify it using the default filter. In this case, if httpd underscore port isn't sent anywhere, then 80 will be used. There are list filters that let you return the minimum or maximum number in a list. In this example, the list name was num underscore list. There are a random number generators. This filter will return a number between zero and 60. There's also a random mac address generator. We can specify the string prefix to make the MAC address appear to be from a certain manufacturer. There are filters for formatting data, list filters, dictionary filters, math filters, [JSON](../../Skills/Web%20Development/JSON.md) query filters, an IP address filter that can test if a number is a valid IP address,
>
> **[5:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=306)** hashing filters that will take a value and return a SHA1 or MD5 hash, URL split filters, regular expression filters and many many more. See the complete list of filters by visiting the Ansbile playbook filters web page. There's one more thing that I want to talk about concerning variables. YML supports JSON style maps and here's the format. Look familiar? Ansible variables use a very similar syntax as JSON maps, but JSON maps use single curly brackets. To keep Ansible from thinking your variable is a JSON map or dictionary, you should quote it. For instance, the line we added in our install Apache dot YML file could be this with included quotation marks. I recommend quoting variables whenever possible. They may work without quoting, but quoting tells Ansible that it's a variable and not a dictionary or map.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (12), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (5), [JSON](../../Skills/Web%20Development/JSON.md) (5)
> **CLI Commands:** ansible (12), apache (6), cd (3), ls (2), make (1)
> **Env Vars:** yml (9), json (5), mac (1), sha1 (1), md5 (1)
> **Analogies:** for instance (4), such as (2)
> **Prerequisites:** install (4)
> **Tools:** vim (2), terminal (1)
> **Exercise Files:** template (3)
> **Definitions:** is a  (2)

#### [Registering variables](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=0)** - [Instructor] In BASH and some other languages we can run commands and have the output assigned to a variable such as this. This runs the command whoami and assigns the output to the variable named NAME. We can do something similar with [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) variables by registering the result of a task as a variable. When you execute a task and save the returned value in a variable for later use, you create a registered variable. For instance, this task will use a shell module to run the GREP command to count the number of authentication failures in /var/log/messages. The standard out will be stored in the message_contents variable. Once we have the data in the variable, we can create a condition that acts on it. We won't go into conditions right now, as it's not on the scope of this particular video, but this is the syntax. Our condition runs a script called lockdown.sh when the value in the message_contents variable is equal to five. This is a fictitious example but will give you an idea of how to use registered variables with the condition. Depending on the module you use the output may vary. The documentation for modules that return data will include a return value section which describes that data. Let's look at the documentation for the shell module. In a terminal type in ansible dash dock space shell. Now go to the bottom of the document until you get to return values. We can see that the output is more complex than just text to standard out. It's a complex data structure containing the standard out, but much more including the command string, when the command was executed and when it finished. To see the values returned for a particular task you can run your playbook with a -v option.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=93)** Let's go to our ansible files directory and run our playbook. First, type Q, and then type on cd ~/anisble-files/ and hit enter. Type in clear and then type in ansible-playbook
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=106)** - i hosts site.yml -v and hit enter.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=116)** We can scroll up through this output and see the returned values for all of the modules we've used. Registered variables are host-level variables that are only stored in memory. Registered variables are only valid during the time the playbook is being run. Facts are also host-level variables depending on the cache plugin that Ansible installation is using. We'll also talk about facts in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (5)
> **CLI Commands:** ansible (5), grep (1), cd (1)
> **Env Vars:** bash (1), name (1), grep (1)
> **UI Navigation:** go to (2), scroll up (1)
> **File Paths:** lockdown.sh (1), site.yml (1)
> **Code Identifiers:** message_contents (2)
> **Documentation:** the documentation (2)
> **Tools:** bash (1), terminal (1)

#### [Discovering variables from facts](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=0)** - [Instructor] [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) facts are properties that are collected by Ansible When it runs a playbook on a remote system. The fact contains useful information about the host. Let's take a look at some facts. We'll use the Ansible command along with the setup module to retrieve the facts about the host and our [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) Ansible group. In a terminal r h host one type in Ansible space web servers space dash M space setup and hit enter. Now scroll through the output. The set up module gives a lot of data to dig through. However we can filter this output so we only see what we want. For instance, let's return the IP address. Bring your line back and add to the end space dash A space double quote, filter equals asterisk E N P zero S eight double quote. This should give us information about the enp0s8 network device. If your network never device is named something different enter that now. Scroll up again and take note of how it's structured in a hierarchy. The top level of the dictionary is Ansible facts. Unansible facts is Ansible underscore enp0s8 take note of this name. Under that is a dictionary of key value pairs including active device, features and IPV four, which is what we're interested in. Under IPV four, we have another dictionary including address, broadcast, netmask and network. Basically, all of the important interface specific network information is right there. We can't just access these items as a simple variable such as address
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=92)** because there may be more than one item with that name. We need to request the entire nest of the structure with the path, to the, that we want. For instance, we need to specify the Ansible facts namespace, the enp0s8 network device, IPV four and finally, the item we want such as address. Normally we'll use facts in a conditional, such as taking for the OS family type. If the OS family is Redhat, then use the yum module and so on. To help you see how to retrieve facts let's create a short playbook. Go to your Ansible files directory first type in CD space, tilde slash Ansible dash files and hit enter. And then create a new playbook called Ansible dash facts dot YML type in VIM space, Ansible dash facts dot YML and hit enter. Go into insert mode by pressing the I key and then add dash dash dash because it's a YAML file. New line dash space hosts, colon space, web servers, new line tab tasks, colon, new line tab tab dash space name colon space, Ansible facts, new lane tab tab tab, debug colon, new line tab tab tab tab M S G colon, that's our message. Double quote, double left curly braces, space Ansible, underscore facts, as the namespace, left square bracket, a single quote, enp0s8 that's our network device,
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=187)** single quote, right square bracket, left square bracket, single quote, IPV four single quote, right square bracket, left square bracket, single quote, and now address single quote right square bracket space double right curly braces, and double quote. Note for the network device we don't need to enter Ansible underscore enp0s8 as it appeared in our earlier output. The network device name alone is sufficient. Save an exit by pressing escape, colon X exclamation mark and hitting enter. This playbook file is also included in the exercise files for this chapter. Now let's run the playbook. Type in Ansible dash playbook space dash I space hosts space Ansible dash facts dot YML and hit enter. Near the middle of the output, you can see the IP address. Using this very short playbook, you can try to retrieving different Ansible facts. You can use these facts just like you'd use any variable on Ansible. Mostly you'll use facts in conditionals. It's very common to run different models depending on the operating system type. Ansible also provides magic variables for accessing information on other hosts. Magic variable names of reserved. Magic variables cannot be set by the user and there are many, many magic variables which you can get a list of on Ansible's magic variable documentation page. The most commonly used magic variables are hostvars, groups, group names and inventory hostname. The one I use the most is hostvars. It allows us to access variables on other hosts easily. This might include Ansible facts or other variables,
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=281)** for instance, to get the distribution type of rhhost2.[localnet.com](https://localnet.com), we'd use host bars to access the Ansible facts namespace and the distribution item. Magic variables can sometimes seem like a shortcut to Ansible facts. You can even loop through information retrieved through magic variables. In this case, we're looping through hosts in the web service group and getting the IP address for each host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (24), [Web Servers](../../Skills/Web%20Development/Web%20Servers.md) (3)
> **CLI Commands:** ansible (24), yum (1), cd (1)
> **Env Vars:** ipv (4), yml (3), vim (1), yaml (1)
> **Analogies:** for instance (3), such as (3), just like (1)
> **Prerequisites:** setup (2), set up (1)
> **Tools:** terminal (1), vim (1)
> **UI Navigation:** scroll up (1), go to (1)
> **URLs:** [localnet.com](https://localnet.com) (1)


### 4. Using Flow Control

[↑ Back to Table of Contents](#table-of-contents)

#### [The when statement](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=0)** - [Instructor] Instead of creating complete configuration specific to each host or group of host, it can be advantageous to create generic configurations that have conditionals in them. For instance, if you have some Red Hat based systems as well as Debian based systems, you may want to store configuration files in different locations or use different package managers. If we use conditionals in our configuration files, we can have one playbook that can work on multiple different host operating systems. It's fairly easy in [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) to create a task that will do something only if the condition exists. For this we'll use the when conditional clause, just like any task will give it a descriptive name. The next line will be the command that we'll execute using the command module. In our case, it will be the RPM command, which is Red Hat specific. The last line will be our conditional using the when clause when OS family is equal to Red Hat and the distribution version is equal to seven, run the command. We could create a second task that would be Red Hat 8 specific. If OS family is equal to Red Hat and the distribution version is equal to eight run a different command string using the command module. There are a couple of things to note in the syntax, I'm using two different syntaxes for using Ansible facts. The top condition uses the ansible_os_family form of referencing a fact. This is the old syntax but will probably still work in the future. It's recommended to use a second syntax which uses Ansible facts and then references the OS family item. This is longer, but it is the preferred method. Also note that when using the variables within a condition, we do not need to surround them in double curly braces.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=95)** It works fine in conditionals to directly access variables without the braces. We can also group conditions using parentheses, this allows us to use more complex logic. In this example, we're checking if the distribution is sent as version 8 or Red Hat version 8, this won't match Centos version 7 or Red Hat version 7. The syntax can get pretty messy with his long lines and tiny text to fit on the screen, which I had a hard time getting on the slide. There is a solution for some situations, if all conditions need to evaluate is true, we can put them in a yum list which is easier to read. This checks if the distribution is Centos and the version is eight in a nice clean yum list. Jinja2 includes test and filters with process Ansible variable data. For instance, using a filter you can convert text to uppercase. Jinja2 tests are different from filters in that their way of evaluating template expressions and returning true or false. There's a test that checks if the return code of a command failed called is failed. To check the success of a command use is succeeded. There're older versions of both of these named is fail and is success, these work as well. To check if something is a certain size numerically, use greater than by using is space ge and less than by using is space le. If this feels a lot like the test command in Bash you'd be right. We can test if something is a file, directory, a link or even if text matches using a regular expression and many more. See the Ansible documentation for more information about test.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=188)** Jinja2 test return true or false making them a perfect match for the Ansible when condition. My next example shows a running fictitious command named admin and registering the outcome to the variable name result. We're also ignoring errors, if the command fails we use the command module to run the logger command with a fail message, if the command succeeds, we log a success message. The command we run could be anything. The Bash equivalent to this would look like this. We'd run the fictitious admin command and redirect errors to dev null, then check the result using a Bash test and then run the appropriate command depending on the return code. If you're familiar with Bash or other scripting languages this may help you understand how Ansible accomplishes the same thing. The last example we'll look at is using Jinja2 to match text patterns. First, we set the value of a variable to a web URL, then we create three tasks. The first one uses is match, to look for a text match anchored to the beginning of the line. Is search, looks in the URL for the provided criteria, in this case the name user1 and lastly is regex, matches the regular expression against the URL. This would be similar to using pattern matching inside double square brackets in Bash. The examples I've given you are just the tip of the iceberg, you can use the when clause to execute commands, include tasks in playbooks or even decide if a certain version of a package needs to be installed based on the values of one or more variables. The when clause when combined with Jinja2 test is powerful and you'll be using it a lot in your configurations, so I recommend becoming familiar with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (7)
> **CLI Commands:** ansible (7), yum (2)
> **Tools:** bash (5)
> **Env Vars:** url (3), rpm (1)
> **Versions:** version 8 (2), version 7 (2)
> **Analogies:** for instance (2), just like (1), similar to (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** ansible_os_family (1)

#### [Looping methods in Ansible](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=0)** - [Instructor] There are two different methods of looping through data in [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) with underscore and loop. The original method use the with keyword followed by a lookup plugin. There are many different lookup plugins available. You can see a list by typing into a terminal Ansible dash doc space dash t space lookup space dash l for list and hit Enter. We can see that we have lookup plugins for CSV files, dictionaries, files which reads file contents, file glob which reads file names by pattern, file tree which shows a recursive directory list, items for a list of items, nested for nested [Data Structures](../../Skills/Software%20Development/Data%20Structures.md), sequence, vars and many others. To see the documentation for a certain lookup plugins such as the items plugin type in Q to quit and then type in Ansible dash doc space dash t space lookup space items and hit Enter. And this will show you the documentation for the items lookup plugin. Use with underscore items to loop through a list of items. The loop keyword which is equivalent to with underscore items is new and the best choice in that situation. You may have to convert the data using a lookup plugin into a list so loop can process it. The loop keyword requires a list and will not accept a string as it doesn't consider strings as being iterables. You can use the query keyword to invoke a lookup plug in return the list. The loop keyword is not a 100% replacement for lookup plugins, at least not for now. Loop can replace roughly 10 out of the 70 or so lookup plugins. The remaining plugins may be replaced using the query keyword to invoke a lookup plugin.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=93)** This allows us to take advantage of the power of lookup plugins while still using the newer loop keyword. To loop through a list using the loop keyword, you would use this syntax. As I've mentioned, loop only accepts lists which we've given it. Lookup plugins by default give a string of comma separated values. We can convert this content to a list using the query keyword. This would use query to convert the hostnames from text into a list and pass that list to loop for iteration. Another difference dimension is that look up plugins such as with underscore items perform implicit single level flattening. This means that hierarchies are flattened one level. The loop keyword does not do this. If you're moving from a lookup plugin to loop, you may have to change your data somewhat, or use a lookup plugin with query. For instance, iterating using with underscore items would look like this. Because we have a list with another list in it, the items plug in will flatten the list one level. The loop keyword does not flatten lists, so we need to pull in the flattened keyword. The loop equivalent including the single level flattening using flatten would look like this. This is not as easy to read because it has to take the items and send them to flatten in order to squash them on one level. It will work fine, but arguably the with underscore items loop is shorter and easier to read. In summary, you should use loop whenever possible because it's the future. However, when it doesn't do what you want, you can call a lookup plugin using loop and query or use the with underscore lookup plugin keywords.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (3), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **CLI Commands:** ansible (3)
> **Analogies:** such as (2), for instance (1)
> **Documentation:** the documentation (2)
> **Env Vars:** csv (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Looping with lists](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=0)** - [Instructor] We'll start talking about looping by using the loop keyword and when necessary switch over to the with_ look up plugin keyword. Looping over items can be very simple and clean. The loop keyword only loops over lists, so if you give it a list of things it'll be nice and simple. In this example, we're installing software using the yum module. We're specifying a variable named Item, and the state as present. We're then iterating through a list of packages using the loop keyword. Each item in the loop is placed in the item variable. The naming of this variable's automatic, although it is possible to override the name. We might need to override it if we had a nested loop, because the inside loop would override the contents of the variable and mess up the outside loop. The syntax of using with_items: in this example is exactly the same. You will see a lot of examples using with_items:, and there's nothing wrong with that. Although [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) is moving towards using loop in the future, so be aware. We can shorten this play further by placing the package names in a list called base_packages. This could be assigned in the group_vars directory if the host in question is in the group, or we could add the variable to the playbook. We could name this variable anything we want. Let's go to our rhhost1 VM and put this into practice. Change into your Ansible files base roll directory. To do so, type in cd ~/ansible-files/roles/base/tasks/
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=89)** and hit Enter. Now let's edit our main.yml file. Type in vim main.yml and hit enter. We can see that we're already installing the firewalld package here. Let's also install two other packages, but let's put them in a list instead. Go into insert mode by pressing the I key, and then change your - name: Install firewalld line to Install base packages. And then for the next line, change it to yum: "name={{ item }} state=present".
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=135)** And now let's add a loop. Add a new line, Tab loop: "{{ base_packages }}".
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=152)** This will allow us to loop through the items in the base_packages variable. Now we need to set this variable in the group_vars directory. Save and exit by pressing Escape :X! and hitting enter. Now change to ansible-files/group_vars directory. Type in cd ~/ansible-files/group_vars/ and hit Enter. We need to create a file here named All for the All group. Note that we can't create a file for base because base isn't a group, it's a role, so we'll apply this list to the All group, which includes All Host. Another way to solve this problem is to create a base group. Type in vim all and hit Enter. Go into insert mode and add "---" because it's a .yml file, new line, # Variables for the all group. New line, and then the variable name, base_packages:, new line. Space space, - python3-libeselinux, new line, space space, - python3-libesemanage new line, space space, - firewalld. You can add other packages to this variable if you wish. To save and exit, press Escape :X!, and hit Enter. Now test it by going back to your Ansible files directory. You can use a "cd .." shortcut for that.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=248)** Now run the playbook by typing in ansible-playbook -i hosts site.yml, and hit Enter.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=258)** If there are any errors, fix them now. We've used the loop to install packages from a list, stored in a group variable. There's nothing wrong with what we've done; however, be aware that some modules, such as yum, can accept list of arguments directly, and thus don't need a loop at all. Passing yum the list directly is more efficient and faster. However, tasks such as creating users, adding firewall rules, or restarting services can only operate on one item at a time, and as such will benefit from loops.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (7)
> **CLI Commands:** ansible (7), yum (4), cd (3), python3 (2)
> **Code Identifiers:** base_packages (4), group_vars (4), with_items (2)
> **Prerequisites:** install (4)
> **File Paths:** main.yml (2), site.yml (1)
> **Warnings:** be aware (2), note that (1)
> **Tools:** vim (2)
> **Analogies:** such as (2)

#### [Looping with dictionaries](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=0)** - [Instructor] I can't possibly demonstrate how to use loops in every situation. There are over 70 different lookup plugins that can be used to loop through different types of data. Instead, I'm going to show you how to loop through several types of [Data Structures](../../Skills/Software%20Development/Data%20Structures.md). I think this is a better use of our time. We've already looped through a list of items. Often we may want to loop through a list of key value pairs, for instance, if we wanted to create new users, and specify which group each user should belong to. Let's do this now. On rhhost1, go to your [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md)-files roles/base/tasks directory by typing in "cd ~/ansible-files/roles/base/tasks",
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=39)** and hit Enter. Edit the main.yml file by typing "vim main.yml", and hit Enter. Expand all folds by typing in "zR", and add a new task by going to the end. Go into insert mode by pressing the I key, and then type in "- name: Add users", new line, Tab, "user:", new line, Tab, Tab, "name: "{{ item.name }}"",
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=77)** new line, Tab, Tab, "state: present", new line, Tab, Tab, "groups: "{{ item.groups }}"",
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=96)** new line, and now we'll add a loop. Tab, "loop:", new line. Tab, tab, "- { name: 'webadmin1'",
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=114)** that's the username, ", groups: 'wheel'", that's our group name, " }". This'll add a username webadmin1, and put them in the wheel group. New line, Tab, Tab, "- { name: 'webadmin2', groups: 'apache' }".
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=148)** This will allow us to loop through the items, extract name and groups, and pass those to the user module. Now, save it by pressing Escape, ":x!", and hitting Enter. Now, let's run it by typing in "cd ~/ansible-files/", and hit Enter, and then type in "ansible-playbook -i hosts site.yml", and hit Enter. You should be able to see the users being created. You can check quickly by using SSH, since we've preshared the keys. Type in "clear", then type in "ssh rhhost2 "cat /etc/passwd"",
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=188)** and hit Enter. At the bottom, you should see the two new users. Now, let's check their groups. Bring your line back, and change "passwd" to "group", and hit Enter. You can see that webadmin2 is in the apache group. Scroll up to the wheel group. You should see webadmin1. We can loop through our dictionary with multiple levels as well. In the exercise files for this chapter, there's a file called loop-dictionary.yml. Change into this chapter's directory of the exercise files, and then load it into an editor. Type in "vim loop-dictionary.yml", and hit Enter. Expand all folds by typing in "zR". This playbook doesn't really do anything outside of defining a dictionary of two users. For each user, there are a couple of key value pairs. The debug line will print out the values of the keys, as well as the name value and the telephone value. Lastly, we're using the loop keyword to look through the user's dictionary using the dict2items filter. I've also included a second method using lookup. To run it, exit by pressing Escape, ":q!, and hitting Enter. Now type in "clear", and then type in "ansible-playbook
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=266)** - i ~/ansible-files/hosts loop-dictionary.yml",
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=277)** and hit Enter. And there you have it. We've looped through key value pairs and a dictionary.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (6), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1)
> **CLI Commands:** ansible (6), cd (2), apache (2), ssh (2), cat (1)
> **File Paths:** loop-dictionary.yml (3), main.yml (2), site.yml (1)
> **Code Identifiers:** zr (2)
> **Tools:** vim (2)
> **UI Navigation:** go to (1), scroll up (1)
> **Exercise Files:** exercise files (2)
> **Speakers:** - [instructor] (1), - i (1)

#### [Looping and conditionals](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=0)** - [Instructor] As with most languages, you can combine loops and conditionals. In this simple example, we're looping through a static list of even numbers and for each iteration, the number is automatically placed in the item variable. The condition is set using the when clause. When the value of the item variable is greater than five, the debug module will print the contents of the item variable and a message. I've created a runnable version of the script in this chapter's exercise files directory named loop-list-conditional.yml. You can execute it by changing into that directory and using [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) playbook. We can combine looping through a dictionary with a condition as well. First in a variable section, we define and add values to a dictionary named mydict. For keys, we have the words one, two, and three, and for values, we have the numbers 1, 2, and 3. When we loop through the contents of the dictionary, then we loop through the contents of the dictionary using the loop clause. Each item was automatically placed in the item dictionary. Note that both the key and the value gets stored. Our conditional says that when the value is greater than 2, execute the module for this task, in our case, it's the debug module. The debug module prints out a message, including the item key and the item value. I've created a runnable version of this script in this chapter's exercise files as well called loop-dict-conditional.yml. You can run it by changing to that directory and using Ansible playbook. Another way that we can execute a loop with a conditional is to use the until clause. In this example, we're using the shell module to run a fictitious command at /usr/bin/program. The output is stored in a registered variable named result
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=94)** that we've defined. The loop will continue until the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) success can be found in the result variable. If it is not found, then it will wait 10 seconds and try again. It will try it for a maximum of five attempts. Also worth noting if you run a task with the until clause and registered the variable, there will be a key named attempts, and the value will be the number of attempts that have been tried.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **File Paths:** loop-list-conditional.yml (1), loop-dict-conditional.yml (1)
> **CLI Commands:** ansible (2)
> **Exercise Files:** exercise files (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Registering variables in loops](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=0)** - [Instructor] I've included a script in this chapters exercise files named loop-register-vars.yml. This file registers the output of a loop to a variable. Let's take a look at it. Change to this chapters directory and the exercise files and then load the file in the vim. Having vim loop-register-vars.yml and hit enter. Expand folds if necessary by pressing the Z uppercase R Keys. We can see a task named output loop to registered var. I also have two shell module lines. The first one echos the item variable and the second one is commented out and uses CAT to view the item variable. We'll use this line in the moment. Then we loop two items in a list and at the end of that task, we register the variable named echo. In the next task, we manage commands and loops that return a non-zero value. We do this by using the WIN clause to check if the returning code value in the item variable is non-zero. Then we loop through the echo that results element. This element is specific to registering a variable in a loop. We don't have this element when registering a variable outside of a loop. The results element contains a lot of useful information. Let's find out by running it. Exit by pressing the escape column Q exclamation mark and hitting enter. Now run the play book by typing [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md)-playbook loop-register-vars.yml and hit enter. In the second task section,
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=91)** we have a lot of information to look through. We can see which command we ran. The return code of the command, the start and end date and time, as well as the standard out output from the command. This specifically can be very handy. Now, let's make it break. Load it into vim again so we can create an error. Bring your vim line back and hit enter. Expand your fold by pressing Z uppercase R and going to insert mode by pressing the I key. Now go to the two lines that include the shell module line. Comment out the one that says echo item. And then uncomment the one that says CAT item. The new line will attempt to use CAT DVA files in the item variable which should produce an error. Now save and exit by pressing the escape column X exclamation mark and hitting enter. Let's run it again. Bring you ansible playbook line back and hit enter. Now the second task section should be red as the return code was non-zero which we can see in the output. We can also look through this output to discern the problem. You can register a variable in a loop and then analyze the results and then analyze the results element to troubleshoot your playbooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (2)
> **CLI Commands:** cat (3), ansible (2), find (1), make (1)
> **Env Vars:** cat (3), win (1), dva (1)
> **Tools:** vim (4)
> **File Paths:** loop-register-vars.yml (3)
> **Exercise Files:** exercise files (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)


### 5. Grouping Content

[↑ Back to Table of Contents](#table-of-contents)

#### [Using blocks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=0)** - [Instructor] Using basic [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) constructs, we can group tasks by creating Separate playbook files, and then importing or including them when they're needed. We can combine this with conditionals, and even simulate group-level error handling, at least to a degree. However, Ansible includes support for blocks, which allows us a logical grouping of tasks with error handling. We can apply most things to a block just as we would a task. This includes setting data or directives for the block such as become and become user if we're using them. Any of these directors that we set at the block level, get inherited by all tasks inside of it. In this chapters exercise files, I've included a script called ansible-block.yml. Let's take a look at it. On our toast one, go into your exercise files directory and into this chapter sub-directory. Now view the Ansible block file using VIM or another editor. For VIM have been VIM ansible-block.yml and expand all folds by pressing Z uppercase R. This looks like a fairly standard playbook file. However, you may notice the block of tasks in it. Let's talk about how this all works. I've included a block of two tasks with a conditional and a block level directive. Notice that we can name the task that the block belongs to. But we can also name tasks inside of the block. Versions of Ansible before 2.3 didn't allow this. For verbosity sake, when running the playbook is recommended to provide names for both a block and for the tasks. Are two tasks inside the block look familiar? They install Apache and start the service. I've also included a win conditional. This block will only get executed if the distribution factor is equal to CentOS.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=94)** The last thing we're going to do is ignore errors. So the playbook will continue executing even if one of the tasks fails. One of the interesting things about blocks is that all tasks inside of the block inherit the directives set for the block. Currently am specifying root as a remote user. However, I could remove this item and add become and become user. All tasks inside of the block will inherit these directives. This playbook does work and you can execute it. First exit VIM by pressing escape colon q exclamation mark and hitting Enter. (keyboard clicks) Now to execute it type in ansible-playbook -I ~/ansible-files/hosts ansible-block.yml
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=137)** and hit enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (9)
> **CLI Commands:** ansible (9), apache (1)
> **Env Vars:** vim (4)
> **Tools:** vim (4)
> **File Paths:** ansible-block.yml (3)
> **Exercise Files:** exercise files (2)
> **Versions:** 2.3 (1)
> **Analogies:** such as (1)

#### [Block error handling](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=0)** - [Instructor] If you only look at blocks as a way of executing multiple tasks based on a condition, then you'll be missing a very important feature of [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md). Most modern programming languages have a concept of exceptions. Exception handling is the process of responding when an unexpected event happens that requires special processing. Exception handling attempts to gracefully handle the situation. Blocks give Ansible the ability to handle exceptions. It is important to note that the exception handling in blocks only deals with tasks with failed status. Block error handling does not handle tasks with improper syntax, bad definitions, or unreachable hosts. These are not exceptions that block error handling can deal with. I've included a script named block-exceptions.yml in this chapter's exercise files. Change into that directory and load it into Vim or another editor. If you're using Vim, type in vim space, block dash exceptions dot YML and hit enter. And then expand your folder by pressing Z, uppercase R. Now open another terminal and run it from there. That way, you can look at both the playbook text and the output while we're discussing it. In the second tab, go to this chapter's exercise files directory and type in ansible dash playbook, space dash I, space tilde slash ansible dash files, slash hosts, space, block dash exceptions dot YML, and hit enter. After it runs, let's go over how it works. In the block exceptions file, we have a main task named Attempt and Recovery.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=92)** The next thing you should notice is that we have a block, along with two new keywords, rescue and always. Let's follow the execution path. First, the block is executed and a debug message is placed on the screen saying, "This executes normally." Switch to the playbook output to see this. Tasks that execute successfully will be in green. We then force a failure by running the slash bin slash false command which returns a nonzero return code. Next, we have a new debug message that you might expect to be on your screen, but it is not. We can see the output of the failed command, along with its many attributes. We do not, however, see the debug message because it never gets executed because a previous command failed. This debug message would run if the previous command did not fail. Because we are now processing a fail, the rescue section is run, and the debug message of "This catches an error" is written to the screen. We then have a new task named, "This forces a failure during recovery!" And we run the slash bin slash false command again. This is probably not the wisest thing to do, but for the sake of understanding how error handling works, we're doing it. As with the previous fail, we can see that the color is red. Normally we'd run something in this section to fix this situation. Another method to fix this situation would be to place a meta flush underscore handlers here, which will force the playbook to run all handlers. You would then have a handler that would contain more complex tasks and plays that would deal with the error. Now moving on, we have a debug message after the fail that never runs. As I said before, this would run if the previous command did not fail.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=186)** The last thing we have is an always section that always executes with a message that says as much. We can see that the output of the always section in our terminal is green. In summary, exception handling sections include block, which executes normally, at least at first, and the rescue section, which is executed only if a task fails. The play continues if the rescue section is successful and it resolves the problem, and replaces the failed error status with a successful one. It's worth noting that there are two variables available within the rescue section. The ansible_failed_task variable holds the name of the task that failed. The ansible_failed_result variable contains the failed return code. Lastly, the always section always runs, no matter if a task fails or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (4)
> **Tools:** vim (3), terminal (2)
> **CLI Commands:** ansible (4)
> **Code Identifiers:** ansible_failed_task (1), ansible_failed_result (1)
> **Env Vars:** yml (2)
> **UI Navigation:** go to (1), switch to (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** block-exceptions.yml (1)

#### [Using tags](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=0)** - [Instructor] We can make large configurations more manageable by breaking our playbooks into smaller files using blocks to group content and by using tags. Tags differ from the other methods because they allow us to apply a label to different parts of a playbook and only run those sections, or we could run everything but those sections. This allows us to group together configuration data in a completely different and more dynamic way. Tags can be applied to plays, tasks, blocks, roles, and imported roles. It's important to note that multiple items can have the same tag. We can also apply multiple tags to one item in a playbook. When running playbooks, we can specify multiple tags to run. If you apply tags to non-task items such as plays, blocks, roles, and imported tags, the tags get inherited by all tasks contained within them. This is often easier than applying tags to every single task. Tags cannot, however, be inherited when using dynamic inclusions such as include_role and include_task, so keep that in mind when using them. Let's see what tags look like and how to use them. This example play has one task using the yum module. In this task, we're ensuring the httpd package is present, and at the bottom, we're applying a tag named packages. To run only the package installation portion of this playbook, we'd use the --tags option and specify our packages tag. To run the playbook and not include any tasks with the packages tag, we'd use the --skip-tags option. As such, it may be valuable to know which tasks will get run if we're providing the --tags option.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=95)** For that, append --list-tags to your line, and [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) will show you which tasks will get run. Where this becomes really powerful is when we provide multiple tags. To best utilize tags, it helps to plan your strategy from the very beginning. For instance, let's say we tag all tasks that install packages with a packages tag and all tasks that restart services with a services tag. To run all tasks that install packages and restart services, we'd specify both. Depending on our configuration, this may be hundreds of tasks that we can specify at a moment's notice. Keep in mind that there are a couple of special tags that are not created by the user. There is always, which is automatically applied to fact gathering, or you can use it in your tasks. We can skip running these tasks by passing the --skip-tags always option to the ansible-playbook command. The second special tag is never, which is applied to tasks that you never want to run unless the tag is called specifically. A use case for the never tag would be debug information. We would not want it running every time, but we may want to specify it when needed. Let's talk about tag inheritance for a moment. I have mentioned that tasks can inherit their tags from plays, roles, or blocks. This example will run all hosts in the webservers group, and all tasks in this playbook will inherit the packages tag. There's also a short format that I like. With this syntax, we can place the tags on the same line. This is what it looks like when tags are applied to a role. All tasks in this role will inherit the webservers and dbservers tags.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (2)
> **CLI Commands:** ansible (2), make (1), yum (1)
> **Analogies:** such as (2), for instance (1)
> **Code Identifiers:** include_role (1), include_task (1)
> **Prerequisites:** install (2)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 6. Using Ansible to Deploy Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Jinja2 template files](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=0)** - [Instructor] Sometimes it's hard to know where [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) ends and Jinja2 starts. Jinja2 is used for templating but also for accessing variables, using data filters and tests, some of which we've already discussed. Ansible uses Jinja2 templating to access variables in playbooks. For this we use the double curly braces syntax. If you want to access a variable element, you can use square brackets within the double curly braces. We can use Jinja2 filters for formatting data, creating lists, creating random data such as MAC addresses and random numbers, debugging, as well as manipulating text and data in variables and much more. See the Ansible playbooks filters' page for more information. We can use Ansible own conditionals, such as the when and until keywords, to create dynamic content. But when and until work best when combined with a Jinja2 test, such as is file, is directory, is failed, is succeeded, or even text matches, such as is regex. There are many, many more tests mentioned in the Ansible documentation. So Jinja2 templating provides a lot of the heavy lifting for Ansible's dynamic [Content Creation](../../Skills/Software%20Development/Content%20Creation.md). Note that Jinja2 has capabilities beyond what I'm going to cover here, including lookups to query external data sources, Jinja2 conditionals and loops. These conditionals and loops are different from Ansible's own. I'll be focusing on how to use Jinja2 solely in the context of Ansible templating in this course. If you'd like to dig into Jinja2 deeper, you can visit the Jinja2 website. It's worth noting that other [content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) built on [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), including SaltStack, use Jinja2 for templating as well. So any effort you spend learning Jinja2 now
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=92)** can be transferred to other systems later. Let's start templating with Jinja2. I've included a couple of files in this chapter's exercise files directory. Go to that directory and type in "vim welcome.yml" and hit enter. Expand all tabs by pressing z + R, and specifying all hosts, and then setting a couple of variables. The first is named Address and has the IP address of my ARCHOS 2 via Minute. The second is named name and has user1 in it. I have one task named Ansible Template Example. We're using the template module and providing two options, src, which is the name of the template file we'll be using, and D-E-S-T, which is where we're going to copy the resulting file to on our choice on our ARCHOS 2. Note before we move on that the source template files name is welcome.j2. Now, open another terminal tab and view the welcome.j2 file. Normally, we place this into a templates directory inside of a role, but for this exercise, we have it next to the welcome.yml file. Type in "vim welcome.j2". This file is very short. It starts with a line of dashes, which are not required. Anything that isn't a variable or Jinja2 code will be taken literally. The next line uses the Name and Address variables. The last line will be literal. Now open a third terminal tab and run this playbook. Type in "Ansible-playbook -i ~/ansible.files/hosts welcome.yml",
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=182)** and hit enter. This should run fine the way it is. If you want to make changes to your YAML file or the template file, you can do that and run it again. Now let's use SSH to view the file that we created. Type in "ssh user1@rhhost2 'cat welcome.txt'"
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=203)** and hit enter. You should see "Hello user1, "your address is 192.168.3.110. Welcome". For the template section, we can also specify some additional parameters. Force decides if we should overwrite the file if it already exists. Mode sets the permissions on the file. And lastly backup creates a backup of the old file before deploying the new one. This was a very simple example but I think you get the idea. We took a local template file in our ARCHOS 1 and then using some variable set inside of playbook, we created the welcome.txt file and send it across to ARCHOS 2. Remember that we can set variables per host group or per host in our group_vars and host_vars directories. We can also set these variables in the command line, or even in a playbook. In addition, we can use Ansible facts to fill in fields in a template file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (12), [Content Creation](../../Skills/Software%20Development/Content%20Creation.md) (1), [Content management systems](../../Skills/Web%20Development/Content%20Management%20Systems%20(CMS).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** ansible (12), ssh (2), python (1), make (1), cat (1)
> **Exercise Files:** template (8), exercise files (1)
> **Env Vars:** archos (4), mac (1), yaml (1), ssh (1)
> **File Paths:** welcome.yml (3), welcome.txt (2)
> **Tools:** vim (2), terminal (2), command line (1)
> **Analogies:** such as (4)
> **Code Identifiers:** group_vars (1), host_vars (1)

#### [Using modules to manipulate files](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=0)** - [Instructor] Managing host configurations involves many things including creating users, installing packages and so on. However, a lot of a host configuration is going to be stored in files that we can provision. [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) has multiple modules for dealing with managing files. Let's start with the file module. With the file module, we can set attributes for files, directories and links. We can also remove files directories and links. If your hosts are using the [Windows](../../Glossary/Service/Windows.md) OS, you'll want to use the win_file module instead. Attributes that we can set include permissions, using group ownership, as well as access and modify times. We can also set SELinux attributes such as role, type and user. For instance, to set permissions and ownership on a file, it would look like this. We can specify the user, group and permission mode. We can create symbolic links with the file module as well by specifying the state to be link. Creating a directory if it doesn't exist looks like this. We specify the state to be directory and we can set the initial permissions as well. Removing a file or directory is very simple. Be sure to provide the full path to the file or directory and specify the absence state. In general, we use the file module to manage files that already exist outside of some special cases like creating links or directories. If you want to copy a file to the manage host, use the copy module instead. The copy module copies files from a local or remote machine to a remote machine. If your managed host uses the Windows OS, use the win_copy module instead. The syntax of the copy module is fairly similar to the file module but instead of providing a password,
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=95)** provide both a source and destination. I provided the backup option which is not required. If you specify backup equals yes and the file already exists, it will make a backup of the original file before copying over the new file. If you need to copy a file from a remote machine to a local machine, you want to use the [Fetch](../../Skills/Web%20Development/Fetch.md) module instead of copy. The fetch module is pretty simple in comparison. We provide the source file which in this case will be /home/example.conf. The destination is /tmp/fetched. As such, the file will be fetched and stored as slash TMP slash fetched slash the host name of the managed node slash the remote path. A similar module is assemble. The assemble module gathered up a bunch of files and concatenate them into one. This is useful when there may be a bunch of configuration files and pieces, such as what you'd have in the HTTPd.conf.d or sudors dot d directories. This is very common in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). The assemble module would take the fragment files and assemble them into one file and then save it in a destination location. For instance, this takes all of the files in /etc/ssh/conf.d and assembles them into the /etc/ssh/sshd_config file on the remote host. The validate line isn't required but in the case of a service or command that can verify it's configuration file, we can use it to validate the file to ensure the syntax is correct.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Fetch](../../Skills/Web%20Development/Fetch.md) (2), [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** ssh (2), ansible (1), make (1), node (1)
> **Analogies:** such as (2), for instance (2)
> **Code Identifiers:** win_file (1), win_copy (1), sshd_config (1)
> **Env Vars:** tmp (1)
> **Speakers:** - [instructor] (1)

#### [Deploying files from templates](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=0)** - Let's put the lessons of this course in action change to the base role directory by typing in cd space tilde slash [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) dash files slash roles, slash base, slash tasks, and hit enter. Now load the main dot yml file into an editor, type in vim space main dot yml and hit enter, expand all fold by pressing z, uppercase R, we're going to provision the e-p-e-l repository file and its related GPG key. By managing the yum repo file ourselves. We could mirror the repository on the local server and provision a repository file that would point to our local repository mirror. Go into insert mode by pressing the I key and then add near the top a couple of lines. Now add dash base include underscore tasks, colon, the name of the file of the tasks that we're going to include is going to be centos dash repos dot yml. New Line tab. Now we'll use a when conditional type in when colon space, left parentheses and we'll use some Ansible facts type in Ansible underscore distribution, space equals equals space double quote, centos make sure your capitalization is the same as mine space and Ansible underscore distribution underscore major, underscore version, space equals equals, space double quote, seven double quote right parentheses, space or. Now we'll need to do this for centos eight as well
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=92)** but we'll copy and paste. Press escape, press yy, press P, and then press I to go back to the Insert mode and delete the when, and tab it over so it's equal. Now go to the end of the line and delete the or. The last thing we'll do is we'll change the seven to an eight. This condition says for centos seven or centos eight include the task from the centos dash repos dot yml file. We need to add this to the top because we want to configure the repository before we install packages. By using a condition we can split off repository centos tasks that are centos seven or centos eight specific. We could also have a similar condition for Debian, Sousa or other distributions. Let's save an exit by pressing escape colon x, exclamation mark and hitting Enter. Now we need to create the centos yamo file that we just mentioned. Type in vim space, centos dash repos, dot yml and hit enter. Go into insert mode by pressing the I key and add dash dash dash because it's a yamo file, new line, dash space name colon. We'll call this copy EPEL GPG key to the host. Newline, now we're going to use a copy module, hit tab and type in copy, colon newline tab tab. And for the source type in src colon, space, uppercase RPM, dash uppercase GPG dash uppercase K-E-Y, dash uppercase e-p-e-l dash. Now we'll use another Ansible fact
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=187)** left curly brace left curly brace, space Ansible, underscore facts, left square bracket, single quote, and the fact we'll use is distribution major version distribution underscore major, underscore version, single quote, right square bracket, space, right curly brace, right curly brace. We'll be using this fact again so copy it right click and select Copy. Now add a new line and hit Tab twice. For the destination type in d-e-s-t colon space slash etc slash pki slash RPM dash GPG, slash uppercase RPM, dash uppercase GPG dash uppercase K-E-Y dash, uppercase E-P-E-L dash and then paste in the Ansible fact again. This will be a straight copy function that will copy the appropriate GPG key file to the Manage host. Now let's add another task, type in dash space name, colon space. And we'll name this one create the e-p-e-l repo file from a template. New line, for this we'll use a template module, hit tab and type in template, colon, new line, tab tab. Now, for the source type in src, colon, space e-p-e-l dot repo dot j two. That'll be our Jinja two File. New Line, tab tab for the destination type in d-e-s-t, colon, space, slash etc, slash yum, dot repos, dot d, slash e-p-e-l dot repo.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=286)** For this task we're going to use a Jinja two template file and we're going to copy the resulting configuration to the slash etc, slash yum repos D, slash e-p-e-l dot repo file on the managed host. Now Save and Exit by pressing escape colon next exclamation mark and hitting Enter. Before we go any further, we need to place the GPG key files into our files directory. I have provided the GPG key files for both Centos seven and eight in this chapter Exercise Files. Go to this chapters Exercise Files directory in your hard drive and get a listing using tree you can see a directory called files and inside of that directory are two GPG files, copy both by typing in cp space dash capital R, space files, space tilde slash Ansible dash files, slash roles, slash base, and hit enter. We also want to copy the e-p-e-l dot repo file to our base role templates directory. This is a standard repository file so it is not a template yet, but it will be. Type in cp space, e-p-e-l, dot repo, space tilde slash Ansible slash files slash roles slash base, slash templates, slash epel dot repo, dot j two, and hit enter. Now change to your base role templates directory by typing in cd space tilde, slash Ansible dash files, slash roles, slash base, slash templates, and hit enter. Now edit the repo file by typing in vim space, e-p-e-l dot repo, dot j two, and hit enter.
>
> **[6:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=380)** Go into insert mode by pressing the I key and wherever you see the number eight, delete it and paste the Ansible fax line. Because we're using the Ansible fact, we only need one template file, for both OS versions. Save and Exit by pressing escape call next exclamation mark and hitting Enter. Now let's run it. Change back to your Ansible files directory by typing in cd space tilde slash Ansible dot files and hit enter. Then run the playbook by typing in Ansible, dash playbook, space dash I, space hosts, base site dot yml and hit enter. We've typed a lot here. So there may be errors. If there are, fix them now. In summary, we created a conditional in our base roll yamo file that includes tasks from an additional file if the OS has centos in the version of seven or eight. The first task uses the copy module to copy across the GPG key file. This uses an Ansible fact, to determine which file to copy. The second task uses the template file to create the yum repo file. Then we created a Jinja two template file, which uses the Ansible fact again to create yum repo file specific to our OS version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (17)
> **CLI Commands:** ansible (17), yum (5), cd (3), cp (2), make (1)
> **Env Vars:** gpg (10), rpm (3), epel (1)
> **Exercise Files:** template (8), exercise files (2)
> **Tools:** vim (3)
> **UI Navigation:** go to (2)
> **Prerequisites:** configure (1), install (1)
> **Cross-References:** go back to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=0)** - [Instructor] This is the second course in a three course series on [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) Engine for the Red Hat EX294 certification. In this course, we created global variable files, configured static inventory, created a scalable configuration directory structure with separate roles, templates, and task directories. We learned how to use variables and Ansible facts and Ansible conditionals for dynamic content. We looped over lists and dictionaries, imported dynamic content, used blocks for group content and manage exceptions, and learned to tag content. Lastly, we learned to use Jinja2 templates for dynamic file creation. We're not done with this series on using Ansible for [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md), which includes Ansible foundations, using Ansible playbooks, which is this course, and managing systems using Ansible. Before attempting to take your exam, you'll want to watch the other two courses. After finishing those courses, you can consider taking the EX294 exam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (7), [IT Automation](../../Skills/Network%20and%20System%20Administration/IT%20Automation.md) (1)
> **CLI Commands:** ansible (7)
> **Env Vars:** ex294 (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [Grant McWilliams](../../Instructors/Network%20and%20System%20Administration/Grant%20McWilliams.md)

## Resources

- Exercise files available

## Skills Covered

- Red Hat Enterprise Linux (RHEL)
- Ansible

## Path Context

### In [Prepare for the Red Hat Certified Engineer (EX294) Exam](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Prepare%20for%20the%20Red%20Hat%20Certified%20Engineer%20(EX294)%20Exam.md)
← [Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible](Red%20Hat%20Certified%20Engineer%20Ex294%20Cert%20Prep%201%20Foundations%20Of%20Ansible.md) | **2 of 3** | [Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible](Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%203%20Managing%20Systems%20with%20Ansible.md) →

## Appears In

- [Prepare for the Red Hat Certified Engineer (EX294) Exam](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Prepare%20for%20the%20Red%20Hat%20Certified%20Engineer%20(EX294)%20Exam.md)

## Related Courses

_Courses sharing skills:_

- [Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible](Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%203%20Managing%20Systems%20with%20Ansible.md) — Ansible, Red Hat Enterprise Linux (RHEL)
- [Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible](Red%20Hat%20Certified%20Engineer%20Ex294%20Cert%20Prep%201%20Foundations%20Of%20Ansible.md) — Ansible, Red Hat Enterprise Linux (RHEL)
- [Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage](Red%20Hat%20Certified%20System%20Administrator%20Ex200%20Cert%20Prep%201%20Deploy%20Configure%20And%20Manage.md) — Red Hat Enterprise Linux (RHEL)
- [Learning Ansible](../Database%20Management/Learning%20Ansible.md) — Ansible

---

[↑ Back to top](#)