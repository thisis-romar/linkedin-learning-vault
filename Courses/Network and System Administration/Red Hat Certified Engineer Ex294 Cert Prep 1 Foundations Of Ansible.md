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
created: 2026-05-03
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
  - [Prepare for the RHCE EX294 certification](#prepare-for-the-rhce-ex294-certification)
  - [What you should know](#what-you-should-know)
  - [About the RHCE (EX294) exam](#about-the-rhce-ex294-exam)
  - [State of Enterprise Linux](#state-of-enterprise-linux)
  - [Install Virtual Box](#install-virtual-box)
  - [CentOS 8 lab setup](#centos-8-lab-setup)
  - [Optimize your VM](#optimize-your-vm)
  - [Install Linux from DVD ISO](#install-linux-from-dvd-iso)
  - [Install Linux Guest Additions](#install-linux-guest-additions)
  - [Virtual machine snapshots](#virtual-machine-snapshots)
  - [Finish lab set up](#finish-lab-set-up)
  - [Create a private network in VirtualBox](#create-a-private-network-in-virtualbox)
  - [Reconfigure or migrate CentOS](#reconfigure-or-migrate-centos)
- [**1. Introduction to IT Automation**](#1-introduction-to-it-automation) (6 videos)
  - [About IT automation](#about-it-automation)
  - [Ansible concepts](#ansible-concepts)
  - [About provisioning](#about-provisioning)
  - [About configuration management](#about-configuration-management)
  - [About app deployment](#about-app-deployment)
  - [About orchestration](#about-orchestration)
- [**2. Getting Started with Ansible**](#2-getting-started-with-ansible) (4 videos)
  - [Host requirements](#host-requirements)
  - [Install Ansible on the control node](#install-ansible-on-the-control-node)
  - [Prepare managed nodes](#prepare-managed-nodes)
  - [View Ansible Documentation](#view-ansible-documentation)
- [**3. Setting Up an Ansible Environment**](#3-setting-up-an-ansible-environment) (3 videos)
  - [Build static inventory](#build-static-inventory)
  - [Work with dynamic inventory](#work-with-dynamic-inventory)
  - [Manage Ansible configuration files](#manage-ansible-configuration-files)
- [**4. Using Ad Hoc Commands**](#4-using-ad-hoc-commands) (6 videos)
  - [Introduction to ad-hoc commands](#introduction-to-ad-hoc-commands)
  - [Targeting hosts with patterns](#targeting-hosts-with-patterns)
  - [Manage files and packages](#manage-files-and-packages)
  - [Restart servers and services](#restart-servers-and-services)
  - [Manage users](#manage-users)
  - [Gather data](#gather-data)
- [**5. Ansible Command Line Tools**](#5-ansible-command-line-tools) (6 videos)
  - [Manage connection methods](#manage-connection-methods)
  - [Use the Ansible command](#use-the-ansible-command)
  - [View Ansible configuration](#view-ansible-configuration)
  - [Use the Ansible console](#use-the-ansible-console)
  - [Show Ansible inventory](#show-ansible-inventory)
  - [Run Ansible playbooks](#run-ansible-playbooks)
- [**Summary**](#summary) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Prepare for the RHCE EX294 certification](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-for-the-rhce-ex294-certification?u=76281980&t=0)** - [Grant] The Red Hat RHCE certification is one of the most respected and valued certifications in the IT world. Presenting credentials as well-known as the Red Hat RHCE EX294 certification will help secure a position in [[IT Automation]]. The RHCE is a popular [[Linux]] engineering certification. The EX294 version of that certification focuses on IT automation using [[Ansible]] Engine and this information can be invaluable in today's world no matter which operating systems or devices you're managing. This course is the foundation course in a three-part EX294 series aiming to prepare exam takers for that certification. In combination with the other two EX294 courses it covers all objectives of the Red Hat RHCE EX294 exam. All the chapters include assessment questions concerning the same material to help you assess your own knowledge. My name is Grant McWilliams, college professor and Linux enthusiast. In the past 20 years I've trained many people to be Linux certified and that experience is accessible to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[IT Automation]] (2), [[Ansible]] (1)
> **Env Vars:** ex294 (5), rhce (4)
> **CLI Commands:** ansible (1)
> **Definitions:** is a  (1)
> **Speakers:** - [grant] (1)

#### [What you should know](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=0)** - [Instructor] This course is designed for anyone new to [[Linux]]. If you are a beginner to Linux, you are in the right place. In this course, you will learn how to use the most recent version of Enterprise Linux, version 8. If you have access to Red Hat Enterprise Linux version 8, that would be fine, but it's not necessary to complete this course. You could also use a clone of Red Hat Enterprise Linux, such as CentOS Linux, Rocky Linux, AlmaLinux, or any other clone, including Oracle Enterprise Linux. When I refer to Enterprise Linux in this course, I mean any Red Hat Enterprise Linux version 8 clone. In fact, most tutorials will also work on Fedora Linux with very little modification, due to its similarity to Red Hat Enterprise Linux. In this course, we'll install Linux in a VirtualBox virtual machine, running on a host operating system. Included in this course are videos to install Enterprise Linux in a virtual machine on both [[Windows]] and Linux host operating systems. So use the host OS which you prefer. You can also use macOS or Solaris as your host OS with the same results. Using VirtualBox, you can install one or more guest VMs depending on your available system resources. For the purpose of virtualization, you'll need an Intel or AMD 64 bit CPU with virtualization support. Intel CPUs with virtualization support will be advertised as having VT-x, and AMD calls it AMD-V. For this course, you may want high speed internet
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/what-you-should-know-15024646?u=76281980&t=94)** for doing Linux operating system software updates. This is also handy for downloading large operating system ISO images. You'll also want 12 to 25 gigabytes of free space minimum on your host computer's hard drive. This will provide enough free space for two Enterprise Linux 8 guest VMs. If you have more free space available, it will give you more flexibility for creating additional guest VMs or giving your VMs larger virtual hard drives. To run more than one VM at a time, you'll need to have at least four gigabytes of free system memory, but eight will work much better. If you're using Windows as your host OS, you may need eight to 16 gigabytes of free system memory. If you have more than that, then it will allow you to run more complex configurations with multiple [[Virtual Machines]] operating at the same time. This is useful for example, when you want to learn networking or a server client configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (17), [[Windows]] (2), [[Virtual Machines]] (1)
> **Env Vars:** amd (3), cpu (1), iso (1)
> **Prerequisites:** install (3), you'll need (2)
> **Versions:** version 8 (3)
> **Analogies:** such as (1), for example (1)
> **Code Identifiers:** macos (1)
> **Speakers:** - [instructor] (1)

#### [About the RHCE (EX294) exam](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=0)** - [Instructor] This course provides training for the RHCE EX294 certification. RHCE stands for Red Hat Certified Engineer. The RHCE is a Red Hat certification which uses Red Hat Enterprise [[Linux]] 8 as its operating system platform. In the past, the RHCE EX300 was a certification that tested the general skills of system engineers. The new RHCE EX294 certification, however, is not a general engineer certification as the focus has changed to [[IT Automation]] using Red Hat [[Ansible]] Engine 2.8. The RHCSA EX200 exam in order to obtain the RHCE certification. You can take the RHCE exam without possessing the RHCSA certification, but RHCE credential will not be issued until both exams have been passed. Those test takers that passed the exam become Red Hat Certified Engineers. And, in addition, this certification counts towards being a Red Hat Certified Architect, or RHCA. Although Red Hat provides training for both EX200 and EX294 exams, it is not required in order to take either exam as they are standalone exams not linked to any training program. Taking the official training or this course is not a guarantee that you will pass the exam, although this three-course EX294 series, with previous experience, additional practice, and reading should be sufficient. To gauge your knowledge level, Red Hat provides online skills assessment tools, which can be helpful in deciding if you need additional instruction. The RHCE exam is a performance-based test of skills and knowledge necessary to automate Red Hat Enterprise Linux.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=93)** This hands-on practical exam requires you to use Red Hat Ansible Engines to perform real world tasks. You will be provided with multiple systems and will be required to install and configure Ansible Engine and then use it to perform standard [[System Administration]] tasks similar to what you do on a job. You will be required to create Ansible playbooks and use those playbooks to configure systems for specific roles and behaviors. The tasks will be described in terms of a specific end state that you must achieve. Your work will be evaluated by applying the playbooks created during the exam against freshly-installed systems and verifying that those systems and services work as specified. The exam is hands-on and lasts four hours. As of this recording, the exam cost is 400 US Dollars. During the exam, you will not have access to the internet or outside materials. You will, however, have access to documentation that ships with Red Hat Enterprise Linux. You can take the exam either in a classroom if you've purchase Red Hat training, onsite if your company has arranged this with Red Hat, or by way of individual exam. Most people will probably take an individual exam at a testing center. To do so, visit Red Hat's website to determine a testing center location near you. Testing centers are provided by Red Hat and other third party companies. After completing the exam, you will not receive your scores immediately as those come from Red Hat Certification Central. Examiners and training partners are not authorized to report results to candidates. Scores are usually reported within three US business days. Also, exam scores are not reported on individual items, but only on sections.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-the-rhce-ex294-exam?u=76281980&t=186)** If you don't do well on one section, you'll need to study for the entire section again. The RHCE exam is aimed at experienced Linux IT professionals who currently have an RHCSA certification, are pursuing the RHCE, or are preparing for one of the RHCA certifications. It will also be beneficial for experienced IT professionals who desire a recognized certification in IT automation. Also, this certification is useful for organizations that require compliance with a mandate such as DOD 8570. If you are not a Red Hat administrator or a person pursuing a Red Hat certification, this course will still be valuable to you if you're interested in IT automation using Ansible. I can't stress enough that this course and certification is general in nature and useful even if your infrastructure comprises [[Ubuntu]], SUSE, or even [[Windows]] hosts. This course is the first course in a three-part series covering objectives of the RHCE EX294 exam. Specific objectives can be found on Red Hat's website. Skills covered can be used to manage Ansible in any environment. If you are new to Red Hat certifications and you only want to prepare for the RHCSA certification, then take the Red Hat Certified System Administrator EX200 course in the course library. If you want to prepare for the RHCE certification, then take the EX200 course as well as this EX294 course. If you want more in-depth training on administrating [[Red Hat Linux]], take the Linux System Engineer Learning Path in the course library. This course is one of a three-part series covering objectives of the RHCE EX294 exam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[Linux]] (5), [[IT Automation]] (3), [[System Administration]] (1), [[Ubuntu]] (1)
> **Env Vars:** rhce (14), ex294 (7), rhcsa (4), ex200 (4), rhca (2)
> **CLI Commands:** ansible (6)
> **Prerequisites:** required to (2), configure (2), install (1), you'll need (1)
> **Definitions:** is a  (2), stands for (1)
> **Analogies:** similar to (1), such as (1)
> **Versions:** 2.8 (1)
> **Speakers:** - [instructor] (1)

#### [State of Enterprise Linux](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=0)** - [Instructor] There are various operating systems that fit into the classification of Enterprise [[Linux]]. It may be advantageous to understand how Enterprise Linux is created to bring clarity to recent changes in the available choices. With that in mind, let's talk about how Enterprise Linux is developed. The most recent versions of software, as well as new experimental packages are combined into a distribution called Fedora. A fedora is a low, soft felt hat with a curl which may make sense as the Fedora project was created by the Red Hat Corporation. In 2003, Red Hat chose who split [[Red Hat Linux]] into Red Hat Linux advanced server for the commercial market and Fedora Core for individuals. Later releases were renamed Red Hat Enterprise Linux and Fedora. Fedora Linux is managed by the Fedora Project, an independent community governed project primarily sponsored by Red Hat. About a third of all contributions are made by Red Hat employees. Although governed by the Fedora Council Red Hat retains legal liability over the Fedora Project. In Fedora software is downloaded by users, tested and bug fixed, and once it reaches a sufficient level of stability Red Hat starts building the next release of Enterprise Linux from those packages. This places Fedora upstream of Enterprise Linux as code flows downstream. Enterprise Linux is generally based on a previous stable version of Fedora. For instance, when Fedora 28, 29 and 30 were available Enterprise Linux 8 was based on Fedora 28. Although Red Hat Enterprise Linux is a commercial product, Red Hat makes the source code available
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=92)** which other projects compile into distributions that are nearly identical to Red Hat's own. One of the most popular is CentOS Linux which came out in 2004. The CentOS project removed Red Hat's trademarked images and created CentOS Enterprise Linux. This places CentOS downstream from Red Hat. CentOS makes an excellent foundation for learning Enterprise Linux because it is nearly identical to Red Hat Enterprise Linux. It is free, but it's provided without support. I've used CentOS as a basis for nearly all of my courses in the [[LinkedIn]] Learning library. It is common to have Red Hat Enterprise Linux servers on the frontline backed by paid Red Hat tech support and many CentOS servers in the background managed by in-house personnel. It may seem that admins are benefiting from Red Hat development without paying them. It should be noted however, that Red Hat benefits as well. The widespread usage of CentOS in production environments results in countless bug reports and code submissions to make the enterprise platform even more robust as well as increase its popularity. The relationship can, however, be a bit clumsy as code submissions to CentOS are applied downstream from Red Hat and then flow upstream. This means that code is going both directions making it difficult to manage. Red Hat who took over the CentOS project in 2014, took steps to mitigate the situation by creating CentOS Stream in 2019. Instead of being a downstream copy of Red Hat CentOS Stream is placed between Fedora and Enterprise Linux. This means the packages from Fedora are first used to create CentOS Stream where they undergo an additional level
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=185)** of testing before being folded into a new release of Enterprise Linux. All bug fixes are applied upstream of Enterprise Linux making the development process simpler and some might say more streamlined. In December 2020, Red Hat unilaterally terminated CentOS development and support ended on December 31st, 2021. CentOS Stream is to be the only supported CentOS remaining. So where does this leave you if you want to learn Enterprise Linux? Let's start by talking about Fedora. Fedora Linux allows you to gain familiarity with various tools and file system structures of Red Hat. It is not identical to Enterprise Linux but it's similar enough that the skills acquired can be useful and in fact, you will be learning technologies before they're added to Enterprise Linux giving you time to get accustomed to them. Note that Fedora is designed to be a software testbed and not with enterprise level stability in mind. I would not use it for a large commercial server installation. I would however, use it for development and as a desktop operating system CentOS Stream is perhaps a better choice as it is more similar to Enterprise Linux in both software package versions and stability, but caution has to be taken due to it not being considered a stable production quality operating system. It is perfectly fine for learning Enterprise Linux and in truth would be adequately stable for any small scale projects that a user may have in mind. An added bonus is that you would be using the next version of Enterprise Linux before it's even released. A surprising replacement for CentOS is actually Red Hat Enterprise Linux. Red Hat offers
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/state-of-enterprise-linux?u=76281980&t=278)** the Red Hat Developer Subscription for Individuals. The subscription is free and allows for installing Enterprise Linux on up to 16 machines, either real or virtual. Perhaps a good option to consider however limits are limits so plan wisely. If you're looking for an exact replacement for CentOS in both functionality and freedom then better choices may include Rocky Linux which was created by one of the original founders of CentOS and named after another, or AlmaLinux OS, which was created by Cloud Linux, makers of Cloud Linux OS. Both of these are binary compatible and track Enterprise Linux software updates just as the original CentOS did. CentOS can be migrated to either Rocky Linux or AlmaLinux OS by running scripts available on their websites.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (32), [[Red Hat Linux]] (2), [[LinkedIn]] (1)
> **CLI Commands:** make (2), curl (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** for instance (1), similar to (1)
> **Warnings:** note that (1), caution (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Install Virtual Box](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=0)** - [Instructor] If you happen to be using [[Linux]] as your host OS, you'll want to install VirtualBox for that operating system. If you're using [[Windows]] for your host OS, you can skip this video. We will be installing VirtualBox, but also installing a VirtualBox extension pack. Extension packs add additional functionality to VirtualBox. To install VirtualBox, we'll need to download it first from the VirtualBox website. Browse to [virtualbox.org/wiki/Downloads](https://virtualbox.org/wiki/Downloads) and hit Enter. There are versions of VirtualBox for multiple operating systems. In this tutorial, I am running a Linux computer, so I will download the Linux version by clicking on Linux distributions. After clicking on Linux distributions, you'll get to be more specific about which distribution you're installing VirtualBox on. If your host OS was [[Ubuntu]], Debian, openSUSE or Fedora, you'd choose one of those links. Since I'm running Enterprise Linux 8, I will choose the first item. You can install the software package, but I like to save it first. Make sure Save file is selected and click on OK. Now click on the downloaded package, and it will start the package installer GUI. Now I can click Install and install process will start. The VirtualBox installer file that we downloaded will be installed in addition to any dependency packages that VirtualBox will need. These dependencies will be downloaded from the software repositories on the internet. This method does work, but I'd rarely ever do this. Using this GUI tool is a fairly slow process,
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=93)** and more importantly this application gives you very little feedback while it's installing. A faster, more informative and more reliable method is to use the command line. Now, close this window and open a terminal by clicking on the Activities, in the top left-hand corner, and then typing terminal. Since we're going to be using the terminal more later, drag it to your application bar on the left. Now, whenever you want to start a terminal, you can just click on it. Do that now. You can also double-click the title bar to maximize it. To install the VirtualBox package that we downloaded, we'll need to change to the downloads directory, type in cd ~/Downloads. Note that Linux is case-sensitive, so be sure to include the capital D. Now type in ls to list it. Now type in ls to list the contents of the directory. We can see our VirtualBox package file in red. To install it, we'll use the DNF command and we'll elevate our privileges to administrator, using the sudo command. Type in sudo, space, dnf, space, install, space, uppercase V, and hit your Tab key. Hitting your Tab key will allow your terminal to fill out the line for you. Our shell has command line completion built in, then hit Enter, and type in your password. Note that it does not show you any characters on the screen when you type in your password.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=185)** The thing I like about the command line is that, not only is it fast, it tells you what it's doing. Here we see that it's going to install VirtualBox 6.1, but also it's going to install two dependencies as well. Note the Repository column, the VirtualBox package is coming from the command line, that is the package we downloaded. But also note where the additional packages are coming from, a repository called appstream. This is on the internet, The DNF command automatically figures out which other packages we need, and downloads them from the online software repositories. It also tells us how much space the installation will take. Press Y to continue. Now we can watch the installation process. DNF downloads the dependencies and installs them first. Then after that is complete, installs VirtualBox. It will take a few minutes to complete and configure VirtualBox. Notice that we didn't have to answer any questions during the install. It just installs the programs. After the packages are installed, it tells us that in order to create [[Virtual Machines]], our user needs to be in the vboxusers operating system group. This is for security reasons, as VirtualBox needs access to low-level resources. We can check our groups by typing in groups, and hit Enter. We can see that we are not part of the vboxusers group. To add our current user to the vboxusers group, We'll use yet another command. Type in sudo, space, gpsswd, space,
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=277)** - a for add, space, and then our username, mine is user1, space, and then the vboxusers group, and hit Enter. Now type in your password. This will add the username user1 to the vboxusers group. Enterprise Linux also uses a highly secure mandatory access control system called SELinux that keeps it safe from malicious code. We need to let SELinux know that we're using VirtualBox. Type in sudo, space, setsebool, space, dash capital P, space, use_virtualbox, space, 1, and hit Enter. This flips a boolean, and allows VirtualBox to function. If you don't do this now, you'll get notified later when attempting to use VirtualBox. To ensure the installation and modification of the [[System Configuration]] went well, reboot your Linux host by going to the top right-hand menu, click on the power button, and then click on Restart. The extension pack adds additional functionality to VirtualBox. It adds virtual USB 2.0 and 3.0 devices, VirtualBox Remote Desktop Protocol, host webcam and PCI passthrough, Intel PXE boot ROM and disk image encryption. These additional capabilities make USB devices faster, allow remote access to VMs, support passing through webcams and other real expansion cards to VMs and encrypting the VM disk images for security.
>
> **[6:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-virtual-box?u=76281980&t=372)** Future extension packs may add more features, but will be installed in exactly the same manner. Once your Linux host has rebooted, log in, then bring up your web browser, and go to [virtualbox.org/wiki/Downloads](https://virtualbox.org/wiki/Downloads) again. Scroll down to the extension packs, and click on the extension pack for all supported platforms. Unlike the main VirtualBox executable, which is specific to each operating system, the extension packs are only specific to the version of VirtualBox you have installed. In our case, we have the latest version, so we will install the latest extension pack as well. When prompted, click OK to open with Oracle VM VirtualBox. The VirtualBox installation window will appear, click on Install. View and accept a license agreement, and enter your password when prompted. This should complete the extension pack installation, click on OK. And to verify the extension is installed, click on File, Preferences, and click on Extensions, and you should see it. And that is how you install VirtualBox on an Enterprise Linux host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (11), [[Windows]] (1), [[Ubuntu]] (1), [[Virtual Machines]] (1), [[System Configuration]] (1)
> **Prerequisites:** install (14), configure (1)
> **CLI Commands:** dnf (4), sudo (4), make (2), ls (2), cd (1)
> **UI Navigation:** click on (10), double-click (1), go to (1), scroll down (1)
> **Env Vars:** dnf (3), gui (2), usb (2), pci (1), pxe (1)
> **Tools:** terminal (5), command line (4)
> **Versions:** 6.1 (1), 2.0 (1), 3.0 (1)
> **Code Identifiers:** opensuse (1), use_virtualbox (1)

#### [CentOS 8 lab setup](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=0)** - [Instructor] Before we can install [[Linux]] in a VM, we need to make one. Make sure the VirtualBox GUI is running on your host and then click on the New icon. Name your VM rhhost1. This will be short for Red Hat host number one. Change the type to Linux and change the version to Red Hat 64-bit. These settings just change the preset defaults in the [[Representational State Transfer (REST)|rest]] of the Configuration Wizard. So don't worry too much about them. Now click on Next. Although Enterprise Linux will run with less than one gigabyte of memory, things go smoother with 1.5, so let's change the value in the field to 1,500 and then click on Next. We need to create a virtual hard drive. Take note that this doesn't override anything on your host computer hard drive. It only creates a file on your host that acts as a hard drive to your VM. Make sure create a virtual hard drive now is selected and click on Create. For the hard disk file type, leave the default selected, VDI or Virtual Disk Image. Click on Next. For the type of storage, selecting fixed size allocates all drive space now. This means that if you choose to have a 10 gigabyte virtual drive, your host OS will allocate all 10 gigabytes right now so you'll be using 10 gigabytes of your host's hard drive space even if the guest drive is empty. The upside to selecting fixed size is that disk access is slightly faster. Dynamically allocated means that the host OS will only allocate space on the host hard drive
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/centos-8-lab-setup-15025659?u=76281980&t=93)** when the guest VM's drive starts to fill up. This is fantastic if we're running a lot of test VMs, because the drives will be mostly empty. The disadvantage is that disk access will be slightly slower. For this course, we'll choose dynamically allocated. Now click on Next. Now we need to choose the size of the virtual drive. Technically it is possible to get Enterprise Linux 8 to install in an eight gigabyte drive, but we have to manually configure our drive partitions which is beyond the scope of this course. Change the size to 10 gigabytes to make your life easier. If you have more free space available on your host computer hard drive, then you can increase this size if you wish. Choosing a larger size will allow you to install more software in your Enterprise Linux operating system. Remember that we chose dynamically allocated. So your guest virtual hard drive doesn't actually take up the space on the host computer until we add files to it. So there's really no downside to creating a larger virtual disk. Click on Create. Now we have a new virtual machine ready for Linux to be installed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (7)
> **CLI Commands:** make (4)
> **Prerequisites:** install (3), configure (1)
> **Definitions:** means that (2), short for (1)
> **Env Vars:** gui (1), vdi (1)
> **Versions:** 1.5 (1)
> **Warnings:** note that (1)

#### [Optimize your VM](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=0)** - [Instructor] Before we install, let's optimize our VM a bit. Be sure that your rhhost1 VM is highlighted and click on the settings icon. In the settings dialogue, click on System in the left hand pane and then click on the Motherboard tab. Ensure Enable I/O APIC is selected. Now click on the Processor tab. If you have a multi-core host computer, then select multiple CPUs. It's safe to select half the available CPUs. If you have four CPUs available, then choose two. This gives more CPU cycles to the guest, but still reserve some for the host. Note that if you choose too many CPU cores, VirtualBox will let you know that the settings are invalid. In the same tab, enable PAE/NX. PAE allows 32 bit [[Virtual Machines]] to access more than four gigabytes of RAM. If you're installing a 32 bit guest OS, then you definitely want to enable this feature. We're going to be installing a 64 bit version of Enterprise [[Linux]], so we don't actually need this but it doesn't hurt. On the Acceleration tab, choose a hypervisor. If you're on [[Windows]], then Hyper V is your best option to choose. If you're on Linux, then KVM may be your best option. Leaving it on default allows VirtualBox to make that choice, which is perfectly fine. Also select Enable Nested Paging. If your host CPU supports this, it can result in better VM performance. Now click on Display in the left hand pane. Start by giving your VM more video memory. We also want to enable 3D acceleration.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=93)** This is very important for most Linux desktops, as they utilize 3D instructions in modern display cards. For the graphics controller, it's safe to let VirtualBox choose it. VirtualBox may choose differently, depending on your host OS. Now we have a virtual machine ready for installation. There's a few other options I might mention that are not required, but may be useful. Because we installed the extension pack, we can encrypt our virtual drives. Click on General and then click on Disk Encryption. If you choose to do this, it will take a few minutes to encrypt the drive, but it will slow down your drive write speeds due to the extra overhead of encrypting the data. For this course, we'll leave our drives unencrypted. If you click on storage in the left hand pane, we see our virtual drives. If you want to add a second virtual drive to your VM, you can click on the static controller and then the icon at the bottom right. If you place your mouse over the icon, you'll see a label with Add new storage attachment. You can even add new hard drive controllers by clicking on the left most icon. If you want to access your VM from another computer on your network, you need to change your network settings. Click on Network, and then Adapter 1. You'll notice by default, it's attached to NAT. This means that this VM will have access to the local network, but your host PC and other physical computers on the local network will not be able to access your VM, meaning you will not be able to run services on it like [[Web Servers]]. If you want your VM to appear as a normal computer on your network, so other computers can access it, you will need to change the setting to Bridged Adapter.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/optimize-your-vm?u=76281980&t=187)** Not all wireless card support bridging, so if you have any problems, you can just set it back to NAT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Virtual Machines]] (1), [[Windows]] (1), [[Web Servers]] (1)
> **Env Vars:** cpu (3), pae (2), nat (2), apic (1), ram (1)
> **UI Navigation:** click on (10)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Install Linux from DVD ISO](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=0)** - [Instructor] To install Enterprise [[Linux]] from the full DVD, we need to download an ISO image from the CentOS website. We'll do this by opening a web browser and going to the download page at [sentos.org/download](https://sentos.org/download). Scroll down a bit and click on x86_64 and choose a mirror close to you for a faster download. If you don't know where any of these servers are, just randomly select one. At the time of this recording, the current version is 8.3.2011, but it may be different when you watch this video. If you have a torrent client on your computer, you can click the .torrent file, and the load will be shared among other torrent users and most likely, download much faster. On my network, downloading via torrent takes about 26 minutes. Downloading the ISO file via web browser is over one hour. It may be worth the effort to install a torrent client just for these files. Now, click the dvd1 ISO image. When the file dialogue presents itself, save the ISO image to your hard drive. Once the ISO image has downloaded, select the VM named rhhost1 and click Start. In the next dialogue, select the ISO image you downloaded by clicking the folder icon, then clicking Add and selecting the ISO image. Now click Start again. Now click on Open and then click on Choose and Start. Highlight Install CentOS 8 with the cursor keys. Selecting the item turns off the auto-start mechanism. You can choose the second option to test the install media instead.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=92)** This is mainly for ISO images that have been burned to physical DVD discs. We don't usually have to do this for ISO images that reside on hard drives. Now hit Enter and wait for the system to boot. When you click inside the window, your mouse pointer will become captive. Sometimes your host computer mouse pointer does not line up with the mouse pointer inside the virtual machine. If this happens to you, then place the mouse pointer in all four corners, and VirtualBox will center it. Now click on Continue. Now you should see the installation summary screen. This is where you will configure how the operating system will be installed. First, click on Time & Date and set your time and timezone and then click on Done. You can also choose which keyboard you want CentOS to use as well as which language you want CentOS to use. Now click on Software Selection and change it to Workstation. This configuration doesn't have a ton of packages installed, but still has a full GUI. Don't get too worried about installing software here as it can all be done later. The only difference between these categories is the list of software packages that get installed now, as opposed to what we install later ourselves. Now click on Done. We can now choose our installation destination. Naturally, this will be the only virtual disk available. Make sure ATA VBOX HARDDISK is selected. Under Storage Configuration, you'll see Automatic and Custom. If you choose Automatic, the installer sets up three partitions automatically. There's nothing wrong with this choice
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=186)** as the default partition layout is good. If you choose Custom, you can set up the partitions manually. The advantage to choosing Custom is that you get to see what the installer will create, and you can modify those results if you wish. Let's click Custom and then click on Done. This brings us into the manual partitioning screen. Here, we could create any partition scheme we want. However, we're going to cheat and click the link to create our partitions automatically. This will give us a good default partition layout. Clicking this link brings us to a new screen showing the proposed partition layout. The installer wants to create a small partition, accessible at /boot, where our Linux kernel and other boot files are stored using the XFS file system. Second, it wants to create a much larger root partition, where most of the operating system is stored, using the XFS file system again. It also wants to create a smaller swap partition for virtual memory. We can edit any of these configuration details on this screen. Let's just click Done and Accept Changes to accept the installer suggestions. We don't need the network configured to install with a full DVD, but if you want to configure the network now, you could, by clicking on Network & Host Name. Now, we need to set the administrator's password. Click on Root Password. You want a very strong password for the root user because in Linux, the root user is all-powerful, and the username is known, making it a target. If a hacker were to get this password, they'd have access to everything in the system. The installer tells you if
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=279)** the password strength is good or not. Use a combination of numbers, letters that are uppercase and lowercase and symbols for your strong password. The installer will let you proceed with a weak password, if you wish, by clicking Done twice. However, it's not recommended. In Linux, we have the philosophy that the system designer should not force the users but rather give them the freedom of choice, even if those choices are bad. Click Done. If the installer doesn't let you go on, then the two passwords probably don't match. It doesn't give you a lot of indication of this, but if you look at the bottom of the screen, you'll see the message. We don't ever want to log in as root and especially not on the GUI. There's just too much power and too few safeguards. So on Linux, we always create a user. Click on User Creation. Enter user1 for the full name, and it will create a lowercase version of it for your username. We'll create a strong password here because we're going to make this first user an administrator by clicking on the check box labeled, Make this user administrator. It's very important that you click the administrator box now as the [[Representational State Transfer (REST)|rest]] of our course depends on it. If you fail to click this box, you'll need to log in as root after the install is finished and add this user manually to the wheel group. It's best to do it now. Click on Done. Now click on Begin Installation. The install will take between 20 minutes and an hour, depending on your host computer's [[Hardware]]. As soon as the install is finished, you'll be able to click on Reboot to reboot into your new VM.
>
> **[6:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-from-dvd-iso?u=76281980&t=377)** As soon as you VM reboots, you'll need to accept the license. Click on License Information and then click the box at the bottom, I accept the license agreement and click on Done. Now click on FINISH CONFIGURATION. Now the system will continue booting to the login screen. Notice that root is not even given as an option on the GUI. You can specify any user if you click on the Not listed link. However, I really recommend that you never do this. Log in as the user you created, which was user1. As soon as you log in, you'll be prompted to choose your language. I'll choose the default and click on Next. You will then be prompted to choose your keyboard. Again, I'll choose the default and click on Next again. Next we can choose our [[Privacy]] settings. By default, location settings are on. I'm going to turn them off and then click on Next. I will also skip creating online accounts by clicking Skip. Lastly, press Start Using CentOS Linux. The next window we see is a Getting Started window, explaining how the CentOS desktop works. For now, we can close this window. You can access this anytime you want by clicking on the Activities icon and then clicking on the Help ring and then clicking on Getting Started with GNOME. Now, you have successfully installed CentOS Linux 8 via the full DVD image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (7), cursor (1), [[Representational State Transfer (REST)|Rest]] (1), [[Hardware]] (1), [[Privacy]] (1)
> **Env Vars:** iso (9), dvd (4), gui (3), xfs (2), ata (1)
> **UI Navigation:** click on (20), select the (2), scroll down (1)
> **Prerequisites:** install (9), configure (2), you'll need (2), getting started (2), set up (1)
> **CLI Commands:** make (3)
> **Best Practices:** recommended (1), it's best to (1)
> **URLs:** [sentos.org](https://sentos.org) (1)
> **Versions:** 8.3.2011 (1)

#### [Install Linux Guest Additions](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=0)** - [Instructor] Virtual box guest additions are pieces of software installed in the guest operating system that give the guest OS a direct communication path to the virtual box hypervisor. This allows the guest to take advantage of faster drivers, better screen resolutions and better integration between the guest and host, including a seamless mouse. I highly recommend installing guest additions as it makes the virtual experience smoother. Installing guest additions can be troublesome, but I think it's worth it. Before installing virtual box guest additions, there are a few prerequisites. All [[Linux]] operating systems software has to be up-to-date. After the OS is updated, it needs to be rebooted so we're using the latest kernel from the OS update. Note that shutting down the VM while restoring to a previous snapshot does not accomplish this. The VM has to go through the boot process. Networking needs to be turned on so we can install software packages from the remote software repositories to build the guest additions. You may have to manually turn the network connection on. For this exercise, your rhhost1 VM needs to be booted and you need to be logged in as user1. Now open a terminal by clicking on Activities and then clicking on the Terminal icon. Now let's update all software packages by typing in sudo dnf update -y and hit Enter. Enter your password when prompted. The sudo command allows us to elevate our privileges to the system administrator. The dnf command handles software installations
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=94)** from the software repositories. dnf has replaced the yum command if you're familiar with it. You can still type in yum and it will still work. I've also passed the -y option, which will answer all questions with a yes. This way, we will not be prompted during the process. When it's done, reboot by typing in sudo reboot and hit Enter. Do not skip the reboot step or installations of guest additions will likely fail.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=128)** After your VM reboots, log-in, ensure the network is on and then open a terminal. Now type in sudo dnf group install -y "Development tools"
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=149)** and hit Enter and enter your password when prompted. This installs the [[Software Development]] tools group. With Enterprise Linux Eight, we also need to install one more package. Type in sudo dnf install -y elfutils-libelf-devel
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-linux-guest-additions?u=76281980&t=175)** and hit Enter. Whenever you see a package name ending in -devel, you know it's the source code for that package. Once that is done, insert the virtual guest addition CD using the virtual box devices menu. You will have to release your mouse pointer by pressing the host key. Then go into the devices menu and go down to Insert Guest Addition CD Image. When the dialogue box appears, click on Run and enter your password. This will take a few minutes as it has to compile a new kernel module. Once it's done compiling, press return to close the window. You can also close your terminal. You can now choose a larger screen mode by clicking on Activities and typing in displays. Click on Resolution and choose a larger screen mode. And click on Apply. And then click on Keep Changes. Now create a new snapshot by pressing your host key plus the T key. Let's name this Guest Additions. And in the description, type in guest additions installed and click on OK. Now we have an updated VM with full screen mode and seamless mouse pointer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Software Development]] (1)
> **CLI Commands:** sudo (5), dnf (5), yum (2), cd (2)
> **UI Navigation:** click on (5)
> **Tools:** terminal (4)
> **Prerequisites:** install (4)
> **Exercise Files:** source code (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Virtual machine snapshots](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=0)** - [Instructor] VirtualBox allows us to take snapshots of the virtual machine state. The purpose of a snapshot is to save a state or version of our VM. This includes the running state of programs in the contents of the system memory. We can have a number of snapshots that we can roll back to at any time. For this exercise, you'll want your rhhost1 VM running. So if it not, start it now. Once it's booted up, log in and open a program. I'm going to choose the files program on the dock. Whenever I install a new VM, I like to take a snapshot of the fresh install. This way if I want to go back to a freshly installed operating system, I can just roll back to this snapshot without having to install all over again. I also take snapshots every time I install and configure anything major. For instance, if I installed and configured a web server, I would take a snapshot once I got it working the way I wanted. If later something goes wrong with a configuration, I could always roll back to the last working snapshot. This works in the case of malware as well. If I managed to be infected by a virus, I could roll back to the pre-infection snapshot in a matter of a minute. My rule is this, if I don't want to do it again, take a snapshot. Anytime we're using a VM and want to create a snapshot, we can just press the host plus T keys and the snapshot window will appear. We can do that now and give the snapshot a name, and if more details are necessary, use the description box. Let's call this one base install finished. And in the description box, add no updates or guest additions installed. This will remind us that these items
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=99)** still need to be completed. Click on OK. If you want to restore to the previous snapshot, just click the close gadget in the VMs window. You may need to press your host key to release your mouse pointer. A window will come up giving a few options, save the machine state, send shutdown signal or power off the machine. The last choice has an option of restoring to the previous snapshot. If we select this, our VM will be rolled back to the last snapshot we took. Choose power off the machine and make sure restore current snapshot base install finished is selected and click on OK and the VM will shut down very quickly. Once the VM has shut down, click on the start button again, and it will be restored. Notice that the operating system didn't go through the boot process. Even the files program that I started earlier is running. Had the files program been copying files, it would resume exactly where it left off as if by magic. If you want to roll back to any other snapshot, you'll need to do it from the VirtualBox manager window. In the VirtualBox manager window, we can see that our VM is still running. To see the snapshots, we want to click on the icon to the right of the VM name and select the snapshots menu item. If we click on current state, we can click on the camera icon to take a snapshot. This is the same as pressing the host key plus T in the VM window. Let's create a few snapshots to play with. Let's name the first one Test1 and click on OK.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=191)** We'll create another one and name it Test2 and click on OK again. This will give us a couple of snapshots to play with. If you want to delete any snapshot, just click on it and then click on the camera icon with the red X and then click on delete. Notice the restore icon is grayed out. This is because you cannot restore to a previous snapshot with a running VM. Shut the VM down now by clicking on the close gadget and then click on power off the machine and do not select restore current snapshot Test1 and then click on OK. Once our VM has shut down, we can see the restore icon is no longer ghosted. We can click on any snapshot and click the restore icon to roll the VM back to that state. Click on base install finished and click on restore. A dialog box will pop up with a check box asking if we want to create a snapshot of the current state. If we check the box, it will create a snapshot of the current state and we can restore our VM back to the way it is now. If we uncheck it, then the current state will be lost. Uncheck the box and then click on restore. Now start up the VM by clicking on start. This should happen very quickly as it's not actually booting but rather being restored into memory. VirtualBox is extremely efficient when it comes to snapshots, much more so than other hypervisors that are available. However, you may still end up with a lot of snapshots taking up disc space. At any time, you can delete the snapshots that you don't really need.
>
> **[4:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/virtual-machine-snapshots?u=76281980&t=285)** For the purpose of this and other courses, it may be advantageous to create snapshots after you've completed each exercise. This will allow you to revert your VM back to before the exercise and complete it again.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (16), select the (1)
> **Prerequisites:** install (7), configure (1), you'll need (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Finish lab set up](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=0)** - [Instructor] Now we have a new VM, the network configured, and have guest additions installed. Now let's make a clone of it. Right click on your rhhost1 VM and select clone. Name the clone rhhost2. Click the dropdown and select generate new Mac addresses for all network adapters and click keep disk names. Now click on next. You may now choose to make it a linked clone. This will save a lot of disk space but makes VM administration a bit more complex because our two VMs will share a base disk image. If you want to squeeze a bit more performance out of your VM and you have extra disk space, you can choose full clone. Click on clone. When the cloning is done, boot each VM to ensure everything works. After your hosts have booted, let's change their host names. On rhhost1, open a terminal and type sudo hostnamectl set-hostname rhhost1
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=61)** .[localnet.com](https://localnet.com). Hit enter. Enter your password if prompted. We now create a snapshot by pressing your host key, NT, and name it Hostname set, and click on okay.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/finish-lab-set-up?u=76281980&t=83)** Now switch to rhhost2 and open a terminal. Type sudo hostnamectl set -hostname rhhost2 .[localnet.com](https://localnet.com) and hit enter and enter your password if prompted. Note that you'll have the log out and log back in again to see your prompt change. Now take a snapshot by pressing your host key NT and name it Hostname set and hit enter. Now you have two nearly identical VMs with unique host names.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), dropdown (1), switch to (1)
> **CLI Commands:** make (2), sudo (2)
> **URLs:** [localnet.com](https://localnet.com) (2)
> **Tools:** terminal (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Create a private network in VirtualBox](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=0)** - [Instructor] The easiest VirtualBox network setup is NAT or Network Address Translation, that is the default setup when you create a new virtual machine. In this configuration, the VMs are assigned a private address, they can even end up with the same addresses. They can access the internet, the virtualization host, and other physical machines on the network. They act like single computers on private networks behind a router. However, VMs that are NATed cannot access each other, neither physical hosts on the network nor the virtualization host can access the VMs without port forwarding. This creates a problem if you want to set up any sort of network environment for a lab. Generally, the easiest way of setting up VirtualBox VMs in a network that can talk to each other is to set the VM network device to be bridged with a host physical adapter. With a bridge, the VMs are given IP addresses on the same network as the virtualization host and the physical machines. This allows the VMs to communicate with each other or the virtualization host and other hosts on the physical network as well as the internet. More importantly, this traffic goes both ways, on the real network can communicate with the VMs. This makes a virtual network that's seamless with a real network. The negative to this is that your VM network changes if the physical one does, for instance, if you were bridged to the host wire device and then later move the host computer and need to connect using its [[Wi-Fi|wireless LAN]] connection. In this scenario, you need to change the bridge in VirtualBox settings to connect to the LAN card. Another negative is that not all wireless cards and drivers support bridging, in this case, you'll have two VMs that can talk to each other and the host, but you can't send traffic outside the host to the [[Representational State Transfer (REST)|rest]] of the physical network. Lastly, you might not want to have your virtual network
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=94)** merged with your physical network. Having a merged network means you can't run a [[DHCP]] server or some other services without there being conflicts with a physical network. To avoid problems with a bridged adapter, we can set up our network a different way. In VirtualBox, we can create an internal network or a host-only adapter. The difference is that with an internal network, the VMs can communicate with each other but not with the host. With a host-only adapter, the VMs can communicate with each other and also the host. I like the host-only adapter better as it allows me to access the VMs from the virtualization host. This makes it easy to secure copy files onto the VMs. So if we overlay these two schemes, we will have a host-only adapter that lets our VMs communicate with each other and the virtualization host and we have a NAT network that lets our VMs communicate with a physical host on the network and the internet. This is not the same thing as a bridge because it doesn't let the physical host on the network access to VMs. It does require us to add a second virtual network adapter to the VMs, let's put this into practice. To create a host-only adapter, use the VirtualBox manager window on your host computer, go to the File, Host Network Manager menu item. To create a host-only adapter, click on Create. This will create a network called vboxnet0. You can have VirtualBox run a DHCP server inside the network to give out IP addresses or you can assign addresses manually. For DHCP, click the enabled DHCP server checkbox. We can change the address range of network as well, click the Properties button
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=186)** and then click on Configure Adapter Manually. For the IPv4 address, let's change it to 192.168.3.1 and we'll leave the network mask at 255.255.255.0. Now let's change the DHCP server range to match. Click on the DHCP server tab and set the server address to 192.168.3.2, we'll leave the network mask at 255.255.255.0. Then set the Lower Address Bound to 192.168.3.100 and the Upper Address Bound to 192.168.3.254, if these conflict with your physical network, then choose different network addresses to keep things simple, click on Apply and then close. To set up our VMs to communicate with each other and the host and still be able to access the internet, we'll give them two network interface cards. Their first will be a NAT card, which we'll use to access the internet and the second card will be a host-only adapter which we'll use to access other VMs and the virtualization host. Make sure your VMs are shut down. To change their configuration, click on the Discard button and then Discard again, which gets rid of the current running state. Now click on the Settings icon and Network. For Adapter 1, make sure it's attached to NAT, click on Adapter 2 and then click on Enable Network Adapter and change attached to to Host-only Adapter. Now we will choose which host-only adapter we want,
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=281)** since we only have one, it will auto select it for us. Click on OK and do the same thing for rhhost2 as well. Click on rhhost2, click on Discard, Discard, click on Settings, Network, make sure Adapter 1 is NAT, click on Adapter 2, click on Enable Network Adapter, and then select Host-only Adapter, click on OK. Now start both VMs up, log in and open a terminal in each.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=312)** Once you've logged in, open a terminal, in the terminal get your IP addresses used in the IP or ifconfig commands. From my rhhost1 VM, I can see that my enp0s3 network device has an IP address of 10.0.2.15, that's the NAT network device. My enp0s8 device has an IP address of 192.168.3.108, that's my host-only adapter address. Now log into rhhost2 and check the IP addresses there. Open a terminal and type in ifconfig, my enp0s3 address on rhhost2 is 10.0.2.15, the same as rhhost1. This is because are NATed so every host is separate. My enp0s8 address on rhhost2 is 192.168.3.109. Now let's ping rhhost1 from rhhost2, type in clear, then type in ping space 192.168.3.108 or whatever your rhhost1 address is. And we can see that that works. Now let's ping the host, bring your line back and change 108 to one and hit Enter. And we can see that that works as well. If your virtualization host is [[Linux]], macOS, or Solaris, you should be able to SSH to this address and log into it. Now let's ping something outside of our host-only network. Type in clear and then type in ping space [google.com](https://google.com) and hit Enter and press Control + C to end it. When we ping outside of our host-only network,
>
> **[6:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/create-a-private-network-in-virtualbox-15022665?u=76281980&t=406)** we're using the NAT address. Note what that doing our network this way doesn't accomplish the same thing as a bridge adapter as that doesn't allow physical machines on the network to access our VMs. It does provide a quiet network isolated from our real network though, which can be nice. If you want real physical hosts on the network to access your VMs, you'll need to bridge the VM network devices with the physical host. This works best when the physical host is using a wired connection.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (6), [[Wi-Fi|Wireless lan]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Linux]] (1), [[Google]] (1)
> **UI Navigation:** click on (15), go to (1), checkbox (1)
> **Env Vars:** nat (7), dhcp (6), lan (2), ssh (1)
> **Versions:** 192.168.3 (7), 255.255.255 (2), 10.0.2 (2)
> **Prerequisites:** set up (3), setup (2), configure (1), you'll need (1)
> **CLI Commands:** make (3), ssh (1)
> **Tools:** terminal (4)
> **Code Identifiers:** macos (1)

#### [Reconfigure or migrate CentOS](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=0)** - [Instructor] It's important to note that Red Hat ended support for CentOS 8 on December 31st, 2021. Part of the process involved changing the software repository URLs from [centos.org](https://centos.org) to vault.[centos.org](https://centos.org). If you have a CentOS installation and it cannot install software from its repositories, execute these steps. If you're using Rocky [[Linux]] or AlmaLinux OS, you can skip this video. First, make sure your networking is turned on by clicking on your top right-hand menu and clicking Wired Off. Now click on Wired Settings, click on the gear icon next to the wired connection, and click on Connect automatically. Now click Apply, and click the slider gadget to turn it on. Now to fix the repositories in our terminal, type in cd /etc/yum.repos.d and hit enter. Now comment out all mirrorlist lines by typing in sudo sed -i 's/, for the delimiter,
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=60)** mirrorlist/#mirrorlist/g, for global,
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=70)** ' CentOS-* and hit enter.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=79)** Now type in your user's password. Now change the CentOS mirror URL to vault.[centos.org](https://centos.org). We'll need to use the pipe symbol for the sed delimiter because the URLs have forward slashes in them. Type in sudo sed -i 's, for substitute again. This time, type in a pipe symbol for the delimiter. #baseurl=[http://mirror.centos.org|baseurl=http](http://mirror.centos.org|baseurl=http)://
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=123)** vault.[centos.org](https://centos.org)|g' CentOS-* and hit enter.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=137)** Now update your system by typing in sudo dnf update and hit enter. Note that this makes your CentOS installation functional again. Since this version is no longer supported, there will not be any more software updates for it, but you will be able to install current software from the repositories. For now, this may be fine, especially for the purpose of learning. However, in the future, it may become a problem when trying to install newer versions of software. Once the update has been done, reboot your VM by typing in reboot and hit enter. To be able to update your CentOS system with new versions of software and security patches, you'll need to migrate it. A couple of options include migrating to Rocky Linux or AlmaLinux OS. I will outline both processes in this video. You can do either both, for educational purposes, or choose one. Log back in, and then before making any changes to your VM, you should take a snapshot by pressing the host key + T. Name the snapshot pre-migration and hit enter. To migrate CentOS 8 to AlmaLinux OS, point your web browser to [almalinux.org](https://almalinux.org) and then click on the Migrate button. This will take you to their [[GitHub]] page. About halfway down the page, there is an almalinux-deploy.sh link. Click on it and then click on Raw, and then right-click and select Save Page As.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=234)** Choose your Downloads directory and click on Save. Once that's downloaded, go to your terminal and change the Downloads directory. Type in cd ~/Downloads, with a capital D, and hit enter. Now run the script by typing in sudo bash almalinux-deploy.sh, and hit enter again, and enter your password. Once the migration is done, reboot into AlmaLinux OS. Another option is to migrate to Rocky Linux. To do so, you'll need to revert your VM back to the pre-migration snapshot again. Click the VM Close gadget, select Power off the machine and select Restore current snapshot 'pre-migration' and hit OK. Now click on Start to start your VM back up. Once it's powered back up, bring up a web browser and browse to [rockylinux.org](https://rockylinux.org) and click on Migrate. This page contains the documentation concerning migration from CentOS. Partway down the page, is a link for the GitHub project page for the migrate2rocky script. Click on that. Now click on migrate2rocky.sh and then click Raw, and right-click and click Save Page As and save it to your Downloads directory. Open a terminal and cd to your Downloads directory.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/reconfigure-or-migrate-centos?u=76281980&t=329)** Type in cd ~/Downloads, with a capital D, and hit enter, and then run the script. Type in sudo bash migrate2rocky.sh -r, and hit enter, and enter your password. Once the migration process has finished, reboot into Rocky Linux. The differences between Rocky Linux and AlmaLinux OS are minor and comprise boot images and backdrops at this point. Both of these are nearly identical to CentOS 8 and will receive all future software updates. Use whichever one you wish.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[GitHub]] (2)
> **CLI Commands:** sudo (5), cd (4), sed (3), make (1), yum (1)
> **UI Navigation:** click on (11), right-click (2), go to (1)
> **URLs:** [centos.org](https://centos.org) (4), [http://mirror.centos.org|baseurl=http](http://mirror.centos.org|baseurl=http) (1), [almalinux.org](https://almalinux.org) (1), [rockylinux.org](https://rockylinux.org) (1)
> **Tools:** terminal (3), github (2), bash (2)
> **Prerequisites:** install (3), you'll need (2)
> **File Paths:** almalinux-deploy.sh (2), migrate2rocky.sh (2)
> **Definitions:** is an  (1), is a  (1)


### 1. Introduction to IT Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [About IT automation](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=0)** - [Instructor] [[IT Automation]] is the use of software to create repeatable processes to replace all or part of human interaction in IT systems. IT automation software works within the confines of the tradition IT environment to carry out tasks with little to no human interaction. Modern dynamic IT environments need to scale faster than they ever have in the past and the key to managing this lies with IT automation. Most IT tasks can be automated to some degree. The advantages of automating is it gets the tedious repetitive tasks out of the hands of people. This allows the same technicians and engineers to be more productive, reduce errors, improve collaboration, and free up time for more meaningful work. Automation can apply to other systems, such as network infrastructure, cloud provisioning, [[Application Development]], and [[Configuration Management]]. Using automation technologies we can penetrate specific areas, such as containers, [[DevOps]], cloud and edge computing, vulnerability assessments for security, system testing, as well as monitoring. Generally speaking, if it's an IT task then automation can probably be applied to it. There are multiple IT automation stacks, such as Puppet, Chef, Salt from Saltstack, and the reason we're here, [[Ansible]] Engine. There are others, both commercial and open-source, but we'll focus on these four. This is not a comparison of these technologies, as much as an overview of how these systems work and how Ansible contrasts to the others. With any of these configuration management systems there's a control host and then a client receiving commands and or configuration information. The client often can have a piece of software running on it
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=95)** called an agent that's waiting for commands and or configuration data. In some cases, such as Salt and Ansible, the client may be agentless. With Puppet the control host is called the Puppet master and the client is the Puppet agent. And it uses an SSL connection provided by OpenSSL for communication. The configuration data is stored in a file formatted similar to the Ruby language called the Puppet Manifest. The Manifest is compiled specifically for each host and that host-specific Manifest is sent to the specific client. This keeps sensitive data secret, but puts a lot of load on the Puppet master. There are a lot of after-market pieces of software to enhance Puppet and give it more power, as well as make it scale. Chef is a bit different. It uses a lightweight RabbitMQ message queue connection between the server and the client's agent. Chef configuration data is stored as Cookbooks and Recipes written in Ruby. Salt from Saltstack, in addition to Ansible, represents the next generation of IT automation systems. The control host in Salt is called the Salt master and the client is called the Salt minion. It was designed from the beginning to be a remote execution stack with a super lightweight encrypted tunnel between the Salt master and Salt minion using 0MQ, making it very fast. By default, it has an agent that's installed in the Salt minion that waits for instructions. It can also work agentless and use the SSH protocol to communicate with the client. This requires less initial setup, but isn't as fast and also relies on SSH access to the clients. Salt configuration files called Salt State files
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=188)** are normally stored in YAML format, but it supports many different formats, and in fact, you can create your own. Also, their not compiled specifically for each client, which relieves the control host of this arduous task. The entire Salt State file is sent across the network and the client only pays attention to the portion that pertains to it. This means you don't want to have any sensitive data in the State files, as all clients can see them. This is a very fast solution that works for most situations. For sensitive data Salt has specific State files called Salt Pillars, which are specific to each client. This adds a bit of administrative overhead, but allows Salt to scale to 10s of 1,000s of clients. The last system we'll look at is Ansible Engine. Ansible is very similar to Salt when running in agentless mode. It uses SSH or Remote [[Powershell]] on [[Windows]] host to send commands and configuration data to the client. As such, the client configuration is very simple, as those communication methods are usually configured already. Ansible stores its configurations in Playbooks and Plays in INI or YAML format. Ansible aims to be simple to setup, simple to configure, consistent, secure, and reliable. There's a performance overhead for using SSH, so Ansible has SSH pipelining, which allows executing multiple commands in one connection. Both Salt and Ansible are great at sending commands to the clients as well as configuring them. When Ansible's not controlling node it's not consuming any resources on the node, as there are no client applications running. So here's how they work. Let's say the configuration says that Apache should be installed and it should be running.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-it-automation?u=76281980&t=282)** It doesn't matter which OS the client is running, it could be [[Ubuntu]] [[Linux]], [[Red Hat Linux]], or even Windows. The control host holds a bunch of files that describe the configuration of the client. Since these configuration files are ASCII text they can be tracked using revision control. This revision control could be local or remote. The automation process might go like this. The production control host and client are cloned into a test environment, then a branch of the current production configuration is done on the revision control server, changes are made and tested. The branch is then merged back into the production configuration and pushed out to our production control host, which modifies the configuration of our clients. We then delete the configuration branch. It may be more complex than this, but I think you get the idea.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (11), [[IT Automation]] (5), [[Configuration Management]] (2), [[Windows]] (2), [[Application Development]] (1)
> **CLI Commands:** ansible (11), ssh (5), ruby (2), node (2), make (1)
> **Env Vars:** ssh (5), yaml (2), ssl (1), ini (1), ascii (1)
> **Analogies:** such as (4), similar to (2)
> **Definitions:** is called (3), is a  (2)
> **Prerequisites:** setup (2), configure (1)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)

#### [Ansible concepts](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=0)** - [Instructor] [[Ansible]] was created by Michael DeHaan, the author of Cobbler, the provisioning server application and which purchased by Red Hat in 2015. It has since been integrated into Fedora and Red Hat Enterprise [[Linux]] 8. It's also available for CentOs, SuSE, Debian and [[Ubuntu]] and others. Ansible maintains an inventory of host to work against. It then selects portions of the this inventory which are stored in ASCII text files. This is important as they are easy to edit and can be managed with a [[Version Control]] systems such as [[Git]]. Any machine with Ansible utilities installed can leverage a set of files and directories to orchestrate other nodes. The absence of a central server requirements greatly simplifies disaster recovery planing. These hosts with Ansible utilities can use multiple inventory files at the same time and even pull inventory from dynamic or cloud sources even in different formats such as YAML or INI. Nodes are managed by these controlling machine over SSH. In the cast of [[Windows]] nodes, it'll use remote [[Powershell]]. The inventory describes the location of the nodes to control. Sensitive data can be stored in encrypted files by using Ansible Vault. In contrast to Chef or Puppet, Ansible is agentless. This means that there's no software agent running on the nodes consuming resources. Instead, Ansible orchestrates a node by installing and running modules on the node temporarily via SSH. For the duration of the orchestration task, the running module task communicates with a [[JSON]] based protocol via standard input and output. These modules are mostly standalone. It can be written in any standard scripting engine such as [[Python (Programming Language)|Python]], Perl, Ruby, or Bash.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/ansible-concepts?u=76281980&t=94)** Ansible itself is written in Python, so that language is very popular with Ansible. Ansible modules are suppose to prescribe to idempotency, which means the operation can be run multiple times and the resulting state is always the same. Inventory is a description of the nodes that can be accessed by Ansible. By default, the inventory is described in INI or YAML format. The configuration file stores the IP address or hostname of each node. Nodes can also be assigned to groups. Here's an example of inventory file. The first item specifies a node by IP address, and the latter two nodes are specified by a host names. They're also part of the web service node group. Ansible can also use a custom dynamic inventory script, which pulls data from a different system and supports groups of groups. Ansible uses a playbooks to manage configurations and/or tasks on nodes. A playbook is a YAML file that expresses the configurations, deployments, and orchestration, and they allow Ansible to perform operations on nodes. Each playbook maps a group of hosts to set of roles. Each role is represented to calls by Ansible tasks. An example playbook may include a host or host group to run on. Variables and task to execute. To help manage inventory, there's Ansible Tower. Ansible Tower is a [[Representational State Transfer (REST)|REST]] API, web service, and web based console designed to make Ansible more usable for IT teams. It is a hub for automation tasks. It's also a commercial [[Microsoft Products|products]] supported by Red Hat and AWX, the upstream project is open source.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (18), [[Python (Programming Language)|Python]] (2), [[Linux]] (1), [[Ubuntu]] (1), [[Version Control]] (1)
> **CLI Commands:** ansible (18), node (5), ssh (2), python (2), git (1)
> **Env Vars:** yaml (3), ini (2), ssh (2), ascii (1), json (1)
> **Definitions:** is a  (4), means that (1)
> **Analogies:** such as (3)
> **Tools:** powershell (1), bash (1)
> **Speakers:** - [instructor] (1)

#### [About provisioning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=0)** - Provisioning combines a set of actions to prepare a host with appropriate systems, data, and software, and make it ready for operation. The host that we provision could be a bare metal server, cloud platform, virtualized system, hypervisor, or even a network device. After bootstrapping, nodes can be connected to storage, added to load balancers, security patches, or even tasks executed. We can use [[Ansible]] to provision the host, and then configure it, deploy applications, and lastly, manage it. Provisioning with Ansible allows you to seamlessly transition into [[Configuration Management]], orchestration, and application deployment using the same, simple, human readable automation language. Underneath virtualization and cloud platforms there are one or more physical servers. We can provision to bare-metal systems as Ansible integrates into many data center management invoke and enact provisioning steps. However, virtualization has opened up an entire new world of diverse scenarios on [[IT Automation]]. And the scale in which we can provision is immense. As such, Ansible has a large selection of modules specifically aimed at provisioning virtual environments. Ansible network automation allows us to configure, validate, and ensure continuous compliance for physical network devices. Using Ansible we can replace manual processes for provisioning networks. Ansible can provision and manage infrastructure storage systems including software-defined storage, cloud-based storage, and even [[Hardware]] storage appliances. Although Ansible can provision many types of devices, it may be most common to provision. Ansible includes many modules supporting services
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-provisioning?u=76281980&t=93)** on the world's most popular cloud platforms. Ansible has modules for compute instances, [[Cloud Storage]], and modules for networking which allow playbooks to directly provision these services. Ansible can even act as an orchestrator of other provisioning tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (11), [[Configuration Management]] (1), [[IT Automation]] (1), [[Hardware]] (1), [[Cloud Storage]] (1)
> **CLI Commands:** ansible (11), make (1)
> **Prerequisites:** configure (2)
> **Speakers:** - provisioning (1)

#### [About configuration management](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=0)** - [Instructor] Perhaps the most common use for [[Ansible]] is [[Configuration Management]]. With Ansible, we can manage a node's operating [[System Configuration]] including installed packages, device configurations, users, groups, and so on. Ansible configurations are simple data descriptions of your infrastructure in a human readable format, ensuring everyone can read and understand them. So, simpler the configuration, then the easier it is for team members to come up to speed on the configuration, freeing up work cycles for other tasks. Ansible requires nothing more than a password or SSH key in order to start managing systems. Because it is agentless, it can start managing them without installing software, voiding the problem of managing the management we have with other automation systems. Ansible follows a state-driven resource model that describes the desired state of the computer or service, not the path to get to the state. It means that no matter which state the resource is in, Ansible understands how to transform it into the desired state. It can also do a dry run, which allows it to run through the process without actually changing the state of the node or nodes. This allows reliable and repeatable IT infrastructure configuration. Ansible relies on OpenSSH and does not use remote agents. Ansible delivers all modules to remote systems and executes tasks as needed to enact the desired configuration. These modules run with user-supplied credentials, including support for sudo, or even Kerberos, and then clean themselves up when complete. Ansible does not require root login privileges, specific SSH keys, or dedicated users, and respects the security model of the system being managed. As a result, Ansible represents a very low attack service
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-configuration-management?u=76281980&t=96)** and is easy to deploy to new environments. Ansible features over 1,300 modules in its core distribution, providing a great base to get started with. Ansible Galaxy has over 4,000 community-provided roles that can be used immediately or tailored to your particular environment. As such, you can use them as templates for your own solutions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (12), [[Configuration Management]] (1), [[System Configuration]] (1)
> **CLI Commands:** ansible (12), node (2), ssh (2), sudo (1)
> **Env Vars:** ssh (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [About app deployment](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=0)** - Application Deployment comprises activities that make a software system available for use. The general deployment process consists of several interrelated activities with possible transitions between them. These activities can occur at the producer side or at the consumer side or both. Because every software system is unique, it's difficult to define the exact process. However, deployment should be interpreted as the process that results in deployment of software to end users. Deployment of applications involve several distinct steps, which we'll discuss now. The release step follows the development process and, in fact, could be classified as being part of it, as opposed to the deployment process. It includes the steps to transfer the applications to the systems which will run them in production. It sometimes involves determining the resources required by the target system for desired performance and documenting subsequent activities for the deployment process. Installation involves establishing some sort of installation procedure for executing the software. This is the process that [[Ansible]] is designed for. Not only can we define a state in which the software is installed on target hosts, but we can also start it and activate it. Activation is the process of running the application for the first time and accepting license agreements, asking the user questions and so on. Deactivation is the inverse of activation. It refers to shutting down any already executing components of the system. Deactivation is often required to perform other deployment activities such as updating the system or even application decommissioning, where it's removed from the system or replaced by another application. Uninstalling is just that, the removal of the application from the host system's application stack
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-app-deployment?u=76281980&t=93)** when it is no longer needed. This may require a degree of reconfiguration, depending on the application. Application deployment is a vital part of [[Software Development]]. In the development process, we might have a development environment, and, as our application's being developed, it will be deployed to this environment. As development proceeds, the application deployment will move to a test environment and eventually into production as a release candidate. Eventually, the release candidate will be removed, and the flow of production application will be deployed. The process needs to be as simple and transparent as possible. In the case of web application deployment, things get more complex. For instance, it may look like this. Run create table definition [[SQL]] scripts, it gets the database on a database server. Configure [[Java Database Connectivity (JDBC)|Java database connectivity]] to the application server. Then, configure HTTP ports and virtual hosts in the application servers, so the application is reachable. Install the application in the application server, and start the application. Next, configure the firewall by opening ports that allow communication between the web server and the application server. Configure the web server so certain requests are routed to the application server. Place static [[HTML]] content on the web server. Restart or reload the web [[Server Configuration]]. And, lastly, configure the outside firewall to allow access from desired users. In the past, this would have been an all-day job to set this up. Now, using [[IT Automation]], it can be at the push of a button. Remember the Ansible playbook. Strive to be idempotent. You can run them multiple times and always get the same results. The application is deployed and usable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (2), [[Software Development]] (1), [[SQL]] (1), [[Java Database Connectivity (JDBC)|Java database connectivity]] (1), [[HTML]] (1)
> **Prerequisites:** configure (5), required to (1), install (1)
> **CLI Commands:** ansible (2), make (1)
> **Env Vars:** sql (1), http (1), html (1)
> **Definitions:** refers to (1), is a  (1)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - application (1)

#### [About orchestration](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=0)** - [Narrator] Orchestration is the automated configuration, coordination and management of computer systems and software. Orchestration takes advantage of multiple automated tasks that execute a larger workflow or process. Automating a process requires countless steps, often spinning app, mobile and database. So orchestration is the perfect term for this larger more complex technique. It's not common anymore to just deploy one single application. In today's world, deployments have gotten more complex and more challenging. We have clustered applications, multiple data centers in different parts of the world, public, private and hybrid clouds and applications with complex dependencies. To manage this, you need a more complex tool that can orchestrate deployments. Think of IT orchestration just like the conductor of a musical orchestra with various types of instruments all playing different parts of a song. The conductor brings all of these disparate instruments into one coherent whole song. In the case of IT orchestration, it's similar. Symbolizing instruments, we have front-end and back-end services, [[Databases]], monitoring services, networks and storage. All of these systems play different roles, have different configurations and perhaps require different methods of deployment. Some may be requirements for others. All of this can be worked out using IT orchestration software. There are different types of orchestration for IT systems. For example, OpenStack clouds are built on many different pieces of software doing different tasks such as storage, network, identity, and more. Each of these services have their own dependencies on other services or components and each have their own configurations
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/about-orchestration?u=76281980&t=92)** and processes for deployment. Note that OpenStack cloud orchestration is specific to that particular environment. Orchestrating these complex systems is not new. Many systems such as OpenStack's Heat, Amazon's CloudFormations or Docker's Swarm are designed to orchestrate their respective environments. However, it may be beneficial to have a central tool such as [[Ansible]] that can orchestrate these systems using one common language and configuration type, as well as manage other systems not related to the cloud.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1), [[Ansible]] (1)
> **Analogies:** such as (3), just like (1), for example (1)
> **CLI Commands:** docker (1), ansible (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)


### 2. Getting Started with Ansible

[↑ Back to Table of Contents](#table-of-contents)

#### [Host requirements](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=0)** - [Instructor] Before installing [[Ansible]] Engine we need to discuss some host requirements. For the Control Node, Ansible supports running in any machine that has [[Python (Programming Language)|Python]] 2 or Python 3 installed running Red Hat or clones, Debian, MacOS, any of the BDS's, or other UNIX-like operating systems. Ansible does not support [[Windows]] Control Nodes. The best practice is to have the Control Node near the nodes that it will be managing. For instance, if your managed nodes are in the local network, then build a Control Node that resides there. The same goes for Cloud Instances. The Control Node should be in the Cloud with the managed nodes. If you're using MacOS as your Control Node, you may need to increase the number of file handles. By default, it's set to 14. You can raise the limit with a launchctl command. Note that certain Ansible plug ins may have additional requirements. Red Hat officially supports using Ansible on managed nodes, including Red Hat Enterprise [[Linux]] 6.3 and newer, [[Ubuntu]] 14.04 and newer, 64 bit only, [[Windows Server]] 2008, 2012, 2016, and 2019 and network device operating systems such as Arista EOS, Cisco IOS, Juniper's Junos OS, and others. In addition, there's unofficial support for many other types of Linux and Unix such as CentOS, Suse, Solaris, MacOS, and AIX. Managed nodes if they're unix-like, must have Python 2.4 or newer. Managed nodes with Python 2.4 or 2.5 must also have the python-simplejson package installed.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/host-requirements?u=76281980&t=95)** Also, Ansible looks for the Python interpreter as /usr/bin/python. If it's not in this location then you need to change the Ansible Python interpreter configuration to point to the actual location or create a symbollic link in Linux. For managed nodes that use SELinux for mandatory access control, the linselinux-python package is required. Ansible also manages Windows nodes. For Windows nodes, native [[Powershell]] Remoting supported by the WS-management protocol is used instead of SSH. Lastly, neither Ansible's raw module or script module require Python to be installed. The former sends raw SSH operating system commands, and the latter sends a script that is executed. These modules can be used to install Python on the managed host so other modules work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Ansible]] (9), [[Windows]] (3), [[Linux]] (3), [[Ubuntu]] (1)
> **CLI Commands:** python (11), ansible (9), node (5), ssh (2)
> **Env Vars:** ssh (2), bds (1), unix (1), eos (1), ios (1)
> **Versions:** python 2 (3), python 3 (1), 6.3 (1), 14.04 (1), 2.5 (1)
> **Analogies:** such as (2), for instance (1)
> **Tools:** powershell (1)
> **Best Practices:** best practice (1)
> **Warnings:** note that (1)

#### [Install Ansible on the control node](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=0)** - [Instructor] [[Ansible]] can be installed on the control node using one of three different methods. Using the Operating System package manager, using pip, the [[Python (Programming Language)|Python]] package manager, or by source code. For this course, we'll be installing Ansible using the YUM package manager, which comes with CentOS. If you're using Red Hat Enterprise [[Linux]] 8, you'll need to enable the ansible-2.8-for-rhel-8 repository. For Red Hat Enterprise Linux 7, enable the rhel-7-server-ansible repository. Since we're using CentOS 8 Enterprise Linux, we'll install Ansible Engine from the EPEL repository. First, you'll need to install the EPEL repository, if you haven't already. We'll be using our rhost1 VM as our control node. To enable the EPEL repository in rhost1, log in to it and open a terminal. And then type in sudo yum install -y epel-release and hit Enter. Enter your password if prompted. It's fine if it's already installed. Ansible requires Python. Python is probably installed already, but we'll need to make sure. Type in clear and then type in sudo yum install -y python3 and hit Enter. If we have multiple versions of Python, we'll need to set the default using the alternatives command. Type in clear and then type in sudo alternatives --set python /usr/bin/python3
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=91)** and hit Enter. Once Python is installed, we can install Ansible. We'll also install the documentation. To do so, type in sudo yum install -y ansible ansible-doc
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=107)** and hit Enter. If you're installing Ansible on any other control node, you can refer to the installation guide on [https://docs.ansible.com](https://docs.ansible.com)/ for specific details. That guide has installation instructions for Debian, Gentoo, Slackware, FreeBSD, macOS, Solaris, and more. Another package that we'll install is argcomplete. This provides show completion of the Ansible Command Line Utilities. To install it, type in clear, and type in sudo yum install -y python3-argcomplete
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=141)** and hit Enter. Argcomplete supports Bash and has limited support for Zsh and tcsh. To activate argcomplete, we need to run a command. Type in clear and then type in sudo activate -global-python-argcomplete
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/install-ansible-on-the-control-node?u=76281980&t=162)** and hit Enter. This command creates Bash completion files in /etc/bash_completion.d. The last thing we'll do is verify our Ansible installation. Type in clear and then type in ansible --version and hit Enter. This will show that Ansible is installed, the configuration file location, the module search path, the Python module location, the binary file location, and the Python version. Note that if Ansible finds a .ansible.cfg file in the user's home directory, options in that file will override the global one listed here. The last thing we'll do to set up the control node is create a simple inventory file. You'll need to know your rhost2 VM's IP address for this, so check it if you don't remember it. To add rhost2 to our inventory, type in sudo vi /etc/ansible/hosts and hit Enter. We're going to add one line here, so go down a little ways. Go into insert mode by pressing the I key and add in your rhost2 IP address. Mine is 192.168.3.110. This is a very simple inventory file with one host, but that's fine for now. Now save and exit by pressing Esc, :x!, and hitting Enter. Now list your inventory by typing in clear. Type in ansible all --list-host and hit Enter. This should list rhost2 as our only managed host.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (19), [[Python (Programming Language)|Python]] (9), [[Linux]] (3)
> **CLI Commands:** ansible (19), python (9), sudo (7), yum (5), node (4)
> **Prerequisites:** install (10), you'll need (3), set up (1)
> **Tools:** bash (2), terminal (1), command line (1), zsh (1)
> **Env Vars:** epel (3), yum (1)
> **Code Identifiers:** macos (1), bash_completion (1)
> **Versions:** 2.8 (1), 192.168.3 (1)
> **File Paths:** ansible.cfg (1)

#### [Prepare managed nodes](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=0)** - [Instructor] Before we can manage rhhost2, we need to prepare it. Be sure to have both rhhost1 and rhhost2 up and running. We'll start by making SSH keys on rhhost1. In a terminal, as your normal user, create SSH keys by typing, ssh-keygen, and hit Enter. This will generate a new RSA key pair. When it prompts you for a location to save the keys, just take the default and hit Enter. When it prompts you for a password, hit Enter, and when it prompts you again, hit Enter again. Now, list the ~/.ssh directory. Type in, ls ~/.ssh, and hit Enter. We see that we have two files in this directory now, id_rsa and id_rsa.pub. Now, we'll copy the public key to rhhost2 using the ssh-copy-id command. Type in clear, and then type in, ssh-copy-id, space, and then enter rhhost2's IP address. For me, it's 192.168.3.110, and hit Enter. When it asks to accept the fingerprint, type in yes, and hit Enter. And then, enter user1's password on rhhost2. We didn't have to give it anymore information as it tried logging in as a user1 user, which exists on both VMs. Since we saved the keys to the default location, the ssh-copy-id command knew where to find them. Now, we'll test our ability to communicate with rhhost2 by using the [[Ansible]] ping ad-hoc command. Type in clear, and then type in, ansible -m ping all, and hit Enter.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=96)** If we're able to communicate with rhhost2, we'll see it in the output. To send any regular [[Linux]] commands to rhhost2, we can us the -a option. For instance, ansible -a "uptime" all,
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/prepare-managed-nodes?u=76281980&t=112)** and hit Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (3), [[Linux]] (1)
> **CLI Commands:** ssh (8), ansible (3), ls (1), find (1)
> **Env Vars:** ssh (2), rsa (1)
> **Code Identifiers:** id_rsa (2)
> **Versions:** 192.168.3 (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [View Ansible Documentation](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=0)** - [Instructor] To read the official [[Ansible]] documentation point a web browser to docs.[ansible.com/ansible/latest](https://ansible.com/ansible/latest). This has some quickstart guides as well as documentation for modules and ad hoc commands. If you're using Ansible in the command prompt and want quick documentation for command, you can view the man pages. There are man pages for ansible-config, ansible-console, ansible-galaxy, ansible-inventory, ansible-playbook, ansible-pull, ansible-vault and lastly ansible-doc. This last one I want to focus on here. Ansible-doc is good for pulling up documentation on Ansible plugins and modules. To get a listing of all available modules type in ansible-doc -l. There are over 3,300 entries to scroll through. If you want to narrow the list down to just a certain area you can provide the -t option followed by the plugin type. For instance, type ansible-doc -t cache -l for list and hit enter. Possible plugin types are become, which is for privilege escalation, cache for backing caching, callback, which enables adding new behaviors and responding to events, cliconf, which provides an interface for executing tasks on network devices, connection, which are used to connect to targets, httpapi, which interacts with a remote device's HTTP based API, inventory, which points at data sources for inventory, lookup, which allows Ansible to access data
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-documentation?u=76281980&t=93)** from outside sources, netconf, provides an interface to execute tasks on netconf devices. Shell plugins ensure that the commands are properly formatted modules. Strategy controls the flow of play execution. And lastly, vars plugin which inject additional variable data into Ansible runs that did not come from an inventory, source, playbook or command line. If you want documentation on a specific plugin such as file, type in ansible-doc file and hit enter. This will show you the location of the module in the file system, a summary of the functionality, and list of options. Near the end of the file, you'll see other closely related commands as well, which can be helpful if you're just learning Ansible. At the end of the documentation are some examples on how to use it. After you've been using Ansible for a while, you'll know which modules to use to solve problems, but you may not remember the exact options. You can read the entire documentation page, or you can just get a snippet of it. To get a snippet use the -s option, type in clear and then type in ansible-doc -s file and hit enter. This snippet will just list the options for the module with descriptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (22)
> **CLI Commands:** ansible (22)
> **Env Vars:** http (1), api (1)
> **Tools:** command prompt (1), command line (1)
> **Analogies:** for instance (1), such as (1)
> **URLs:** [ansible.com](https://ansible.com) (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)


### 3. Setting Up an Ansible Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Build static inventory](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=0)** - [Instructor] [[Ansible]] works against multiple nodes or hosts at the same time. This list of nodes is called an inventory and can be static or dynamic. Once you've defined your inventory, you can target certain hosts or groups of hosts using patterns The default inventory file location is /etc/ansible/hosts. However, you are free to specify a different static inventory file using the -i command option. You can also use more than one static inventory file at the same time. The inventory file can be in one of many different formats depending on the inventory plug-ins you have installed. The most common formats are INI and YAML. The INI file is the simplest, so we'll look at it first. A basic INI inventory file looks like this. The headings in brackets are group names which are used in classifying hosts and deciding which host to control at one time. The single entry is specified but not grouped. The same file in YAML format is a bit more complex looking. The YAML formatted file has multiple levels of indention, and the lines end with a colon. You may notice that we also have listed an all group, and everything is nested under it. This is a default group. There are two such default groups, all and ungrouped. The all group contains every host. The ungrouped group contains all hosts that don't belong to another group. Every host will always belong to at least two groups, or all and ungrouped or all and another specific group we've defined. You will most likely place your host in more groups than these two. Often groups are categorized in what. What, which is a service or services a host provides such as Web or DNS.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=92)** Where, which is where a host is located if it's in a multi-location company. The where may be north or south or more specific like Seattle. When, such as development stage, test stage, or production stage. Our previous YAML file already satisfies what in the case of [[Web Servers]] and db servers. If we were to expand our YAML inventory file to include where and when, it would look like this. To satisfy the where, we have a group for Seattle and for San Francisco, each with one web server and one db server. To satisfy when, we also have a production group with web1, web2, db1, and db2 in it. The test group has web3 and db3. We can also nest. For instance, if all hosts in prod were in San Francisco, we could call the San Francisco group instead of listing the servers again. There are more shortcuts that we can employ in our inventory files, for instance, ranges. In this file, we're specifying web1, web2, and web3. We can use a range to compress them into one line. We can add alphabetic ranges using the same syntax. The format is the same for INI files, just include the range in the host name. If you need to access a host on a non-standard SSH port, you can add it to the host name. Ansible lets us specify the inventory file using the -i option followed by the path to the file. We can provide more than one inventory file in the same manner by providing more than one -i option with path. Keep in mind that if there's a conflict in the two files, the variables in the latter file will be used. So in this case, variables in production will override those in staging because it's processed last.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=188)** In our small lab set up, we have a very simple inventory file because rh host2 is our only managed host. If you want to make your system more interesting to manage and you have more resources, you can clone rh host2 and add it to your static inventory. Now, let's prepare for the future and modify our static inventory file. Type in sudu space vi space /etc/ansible/hosts and hit enter. Type in your password if prompted. Currently we have one line in this file with rh host2's IP address. Let's include rh host2 in a couple of groups. We'll keep our inventory file in INI format for this course. Go down below the IP address and go into insert mode by pressing the i key and then add left square bracket webservers right square bracket and then below that rhhost2.[localnet.com](https://localnet.com). And then we'll add another group, left square bracket dbservers right square bracket and then the host name again. We have a default group of all which includes all hosts. We also have a web servers group which includes rh host2 in it as well as a db servers group with the same host. We could target this host directly or specify either of these groups. Let's save and exit by pressing escape, colon, exclamation mark and hitting enter. Note that before we can target by domain name, we need name resolution either static or dynamic. For this we'll edit the Etsy host file in rh host1. Type in sudu space vi space /etc/hosts and hit enter. Go into insert mode and add a new line. For the first column, add in rh host2's IP address. For me this is 192.168.3.110
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/build-static-inventory?u=76281980&t=286)** and then space and rh host2. Then space again and rhhost2.[localnet.com](https://localnet.com). Now save and exit by pressing escape, colon, exclamation mark and hitting enter. The last thing we'll do is test it. To test it, we'll type in ping space -c1 for one count rhhost2 and hit enter. If that works, bring your line back and add .[localnet.com](https://localnet.com) and hit enter again. If that works, we can proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (4), [[Web Servers]] (2)
> **Env Vars:** ini (5), yaml (5), dns (1), ssh (1)
> **CLI Commands:** ansible (4), ssh (1), make (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** such as (2), for instance (2)
> **URLs:** [localnet.com](https://localnet.com) (3)
> **Warnings:** keep in mind (1), note that (1)
> **Versions:** 192.168.3 (1)

#### [Work with dynamic inventory](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/work-with-dynamic-inventory?u=76281980&t=0)** - [Instructor] Your inventory may change over time. This could be due to hosts spinning up and shutting down in response to demand. You may also not manage the list of hosts in your network or it may not be available to you. You may need to pull inventory from other sources like cloud providers, LDAP, and other management systems or [[Databases]]. [[Ansible]] handles dynamic inventory in one of two ways, inventory plugins and inventory scripts. Dynamic inventory plugins are part of Ansible and are written and maintained like the [[Representational State Transfer (REST)|rest]] of the Ansible code. It's recommended to use plugins if there's one available for your inventory source. It's important to note that you can write your own dynamic inventory plugins as well. The second method is using inventory scripts. Scripts are written in a general scripting language such as [[Python (Programming Language)|Python]]. Using a script involves putting a .ini file in the etc Ansible directories so Ansible knows where the dynamic inventory source is. Then you create a script and copy to etc Ansible that does the heavy lifting for you and call it using the -i option. This script essentially returns the inventory list. Often, these scripts are written in Python and can be hundreds to thousands of lines long depending on how complex it is to get the inventory list. There are scripts available for getting inventory from Cobbler, [[Amazon EC2]], OpenStack, Zabbix, CloudStack, and many, many more. We will not be going into how to create dynamic inventory scripts in this course, as it's beyond the scope. However, if you'd like to see the source for the dynamic inventory scripts available, open a web browser and go to [github.com/ansible/ansible/tree/devel/contrib/inventory](https://github.com/ansible/ansible/tree/devel/contrib/inventory) and view them yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (8), [[Python (Programming Language)|Python]] (2), [[Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Amazon EC2]] (1)
> **CLI Commands:** ansible (8), python (2)
> **Env Vars:** ldap (1), ec2 (1)
> **URLs:** [github.com](https://github.com) (1)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Best Practices:** recommended (1)

#### [Manage Ansible configuration files](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=0)** - [Instructor] For most set ups, you will not need to change the [[Ansible]] configuration. However, it's good to know how Ansible's configured in case you need to change it in the future. Ansible supports several methods of configuring its behavior including the Ansible.cfg file, environmental variables, command line options, playbook keywords, and Ansible variables. The lowest priority configuration source is actually the Ansible.cfg file, but also probably the one we'll use the most. Ansible looks for the configuration file in the following order. It looks for a path to it in the Ansible config environment variable. Then it looks for the Ansible.cfg file in the current directory. Next, it looks for the Ansible.cfg file in the user's home directory. And lastly, it looks for the Ansible.cfg file in the /etc/Ansible directory. Once it finds the configuration, it parses it. Ansible variables set in playbooks override all other methods. Variables are set in playbooks using the vars keyword. We can also assign Ansible variables on the command line using the dash e option. OS environment variables have a higher precedence than entries in any of the Ansible.cfg files that Ansible confined. If you have environment variables set on your control node, they override the settings in any of the Ansible.cfg files. Command line options like environment variables will also override any settings in the Ansible.cfg file. Configuration data can also be included in Ansible keywords. These can be in plays, blocks, or tasks. For instance, we can have a play that specifies the SSH connection type overriding the Ansible.cfg file. Unless we have a reason to,
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-ansible-configuration-files?u=76281980&t=91)** we'll probably not override the Ansible.cfg file, at least not yet. Let's take a look at it. In your rhhost1 vm, open a terminal, type in less space dash capital N for line numbering, space slash etc slash Ansible slash Ansible.cfg and hit enter. Lines 10 through 28 declare some default configuration items such as the locations of various files, the pseudo user, and the SSH port. Lines 30 through 65 configuration how Ansible will gather facts about their managed hosts. Line 68 defines the location for roles. Line 71 allows us to turn off host key checking if you don't want strict host key checking in SSH. Line 83 allows us to white list some plug-ins that are not allowed to run by default. Line 100, allows us to change the pseudo command options if necessary. Line 119 allows us to change the shell that Ansible uses. This might be important if you need features not in the standard born emulation mode. Lines 191 through 203 show the location for our different plug-in types. We can configuration SSH starting with line 370. Line 401 controls SSH pipelining which allows more than one command in one connection speeding up processing. Lastly, if you need to study specific SELinux security conducts, we can do that in line 464. At this point, we should not need to change any of these options, but now you know where there are in case you need to modify Ansible behavior.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (26)
> **CLI Commands:** ansible (26), ssh (5), node (1)
> **File Paths:** ansible.cfg (11)
> **Env Vars:** ssh (5)
> **Tools:** command line (3), terminal (1)
> **Analogies:** for instance (1), such as (1)
> **Speakers:** - [instructor] (1)


### 4. Using Ad Hoc Commands

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to ad-hoc commands](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=0)** - An ad-hoc command uses the [[Ansible]] command line tool to automate a single task on one or more managed nodes. You can not reuse them like playbooks. Whereas a playbook can be run multiple times to automate the configuration or orchestration of one or more nodes, an ad-hoc command is a one-time thing. Ad-hoc commands are for running tasks that you don't need to repeat. For instance, if you wanted to reboot all [[Web Servers]], you wouldn't want to create a playbook just for this one task. It's easier to send an ad-hoc command to all web servers telling them to reboot. Also, the methods you use in an ad-hoc command can be used in a playbook. Sometimes it's useful to test a particular task before committing it to a playbook. Ad-hoc commands are perfect for this. You can also use any of the modules available for playbooks in ad-hoc commands. The syntax for an ad-hoc command is this. In this case, the pattern is a managed host you're targeting, such as web servers. Module is the ansible module you intend to use. And module options are the options specific to that module. For example, if you wanted to use a shell module to send the echo command to all managed hosts in the web servers group, you'd type in ansible webservers
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=66)** - m shell, for the shell module,
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=69)** - a and inside single quotes the command line string. And inside single quotes, the string of commands. For simpler commands, we can use the command module. Let's say I wanted to reboot all web servers. I'd type ansible webervers a and then put the commands inside quotes. Note that if you have a variable in the command string, you'll need to use single quotes. Otherwise, you can use double. It's important to note the differences between these modules. The command module runs an OS command, doesn't use a shell, does not support pipes or redirects, does not utilize a user environment, is simple and is very secure. The shell module also runs a command on the managed host; however, it runs inside of a shell. And as such, supports pipes and redirects, has a user shell environment including shell variables, and, due to running in a real shell, is more complex but also more compatible with commands you'd manually type in if you were logged in to the remote machine. If we're running a task, such as a reboot process on a large number of managed hosts at the same time using ad-hoc commands, they may not complete as fast as we'd like. Ansible, by default, only starts five processes and then waits for them to complete before starting more. If we had 500 web servers, it may take quite a while to reboot them all. We can change the number of processes temporarily by appending the -f option. For instance, to bump it to 10 processes, we'd use -f 10. If you need to run a command as a different user, you can append that as well. Now we're running the process as a user named user1. Often, when we're administering systems, we need to elevate privileges.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/introduction-to-ad-hoc-commands?u=76281980&t=162)** In an interactive session, we'd use sudo for this. In ansible, we use the --become option. This works if we can become root without being prompted for a password. To have ansible prompt for the user's sudo password, add --ask-become-pass. As these options are getting long, we might want to shorten --become to -b and --ask-become-pass to -K. I also want to mention that you need to be aware if the command you're running is specific to a certain shell. Ansible uses /bin/sh for its shell. In many systems, this is a symbolic link to /bin/bash with bash running in born compatibility mode. As such, things might not work exactly the same, such as this exec line. Although it may be tempting to use the command or shell modules to run [[Linux]] commands, it's usually better to use a module designed for the task at hand. For instance, to copy a file from one place to another on every host in the web servers group, you could use the copy module. A similar need is to manage file permissions, which ansible has a module for called file. This will change the permissions to read write for the user owner and nothing for anyone else for db.txt file. The file module can also make directories and delete files and directories even recursively. We can use the yum module to install packages manually, the user module can manage user accounts, and the services module to start and stop services. The great thing about ad-hoc commands is that you can try them out and if you need to reproduce the functionality, put them in a playbook.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (9), [[Web Servers]] (7), [[Linux]] (1)
> **CLI Commands:** ansible (9), sudo (2), make (1), yum (1)
> **Analogies:** for instance (3), such as (3), for example (1)
> **Tools:** command line (2), bash (2)
> **Definitions:** is a  (3)
> **Speakers:** - an (1), - m (1), - a (1)
> **Warnings:** note that (1), be aware (1)
> **Prerequisites:** you'll need (1), install (1)

#### [Targeting hosts with patterns](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=0)** - When running ad hoc commands or playbooks, you'll be targeting certain hosts to run them against. For this, you'll use patterns. An [[Ansible]] pattern can refer to a Single host, IP Address, and Inventory Group, a set of groups or all hosts in your inventory. Patterns can be very flexible. You can include and exclude subsets of hosts, use wildcards or even regular expressions. For ad hoc commands, the pattern might look like this. In this case, we're sending the reboot command to all hosts in the Ansible group [[Web Servers]] that we set up in our inventory. For our setup, this happens to be the rhhost TVM The same thing in a playbook looks like this, we put the pattern after the host keyword. common patterns are, all or asterisks for all hosts, the host name for one host, an Ansible groups such as web servers for all hosts in the Ansible group named web servers, host names separated by a colon for more than one host such as web servers, colon, dbservers. For all hosts in the web servers and dbservers Ansible groups, the host does not have to be in both. Host name separated by a colon and an exclamation mark such as web servers colon, exclamation mark dbservers, for all hosts in the web servers Ansible group, except those in the dbservers Ansible group. Host names separated by a colon and an ampersand such as web servers, colon ampersand dbservers, for any servers that are in both web servers and dbservers groups. You can also combine any of these into complex patterns. You can also use wildcard patterns on fully qualified domain names
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/targeting-hosts-with-patterns?u=76281980&t=93)** and or IP addresses, as long as they're defined in your inventory such as one nine two dot one six eight dot backslash asterisk, which would match any host in the one nine two dot one six eight network. Backslash asterisk dot local net com for all hosts in the local net com domain, or backslash asterisk com for any dot-com domains. You can also mix wildcard patterns in groups such as rhhost asterisk, dot-com colon dbservers. This would match any host name starting with our rhhost and ending with com, as well as all hosts in the dbservers Ansible group. It's important to note, that you have a lot of flexibility when targeting managed hosts, but you can only match hosts described in your inventory. The most advanced pattern is a regular expression, and Ansible supports them when targeting managed hosts. For instance, to specify a pattern using a regular expression, precede it with a tilde character, inside the group, we have a logical OR, this will match web or db, followed by anything and ending with local net com. Using Ansible as extensive pattern matching we can match just about any host or set of hosts that we wish.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (10), [[Web Servers]] (9)
> **CLI Commands:** ansible (10)
> **Analogies:** such as (6), for instance (1)
> **Prerequisites:** set up (1), setup (1)
> **Env Vars:** tvm (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)

#### [Manage files and packages](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=0)** - For this exercise we're going to manage files and packages on our managed node. You'll want both your rhhost1 and rhhost2 VMs booted up. And you should be logged in to your rhhost1 VM with a terminal open. At any point during these exercises, you can switch over to your rhhost2 VM and verify the results using standard [[Linux]] command line tools. Let's start by creating an empty directory using the file module. This is similar to touching a file on the command line. On rhhost1 type [[Ansible]] rhhost2* -m file for the file module. And for arguments type
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=34)** - a "path-/home/user1/file2.txt state=touch mode=700"
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=51)** and hit enter. This will create a new empty file if it doesn't already exist with permissions of 700. If the file does exist, it will update the meta data. If you want to include text in the file you can use the copy module. Type in clear. Type in ansible rhhost2* -m copy for the copy module. And for arguments type in -a "dest=/home/user1/file3.txt
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=84)** content='stuff' force=no mode=700" and hit enter.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=99)** In this case, we're including the [[Microsoft Word|word]] stuff in the file. Note, that if you include the single quotes without content between them, it will create an empty file. Very similar to what we just did with the file module. However, creating an empty file with a touch and copy modules in not the same thing. We have provided the force=no option, which means it won't change the file if it already exists. You can test this by bringing your line back and changing stuff to other stuff and hitting enter. It will not overwrite the previous file. You can verify this by viewing the file on rhhost2. Using the file module with force=no is good for creating new files but not overwriting existing files. Also, since we're not changing [[Metadata]], the file won't change. And it won't register as changed in your logging software. Which might be what you want. If you change force=no, it will overwrite the file. You'll do this if you want to change the contents of the file. To change permissions on a file, we'll use the file module again. Type in clear. And type in ansible rhhost2* -m file for the file module. And for arguments type in
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=165)** - a "dest=/home/user1/file2.txt mode=600" and hit enter.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=178)** This command line changes the permissions from 700 to 600 for file2.txt. If you want to change the user and group ownership, similar to using the chown command, we'd add owner and group. Note, just like the chown command, you'll need to elevate your privileges. Bring your line back and inside the double quotes add owner=root group=root and outside the double quotes append -b -K and hit enter. Then enter user1's password when prompted. To create directories, we change the state to a directory. Type in clear. Then type in ansible rhhost2* -m file for the file module. And then for arguments
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=219)** - a "dest=/home/user1/newdir
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=228)** that's the name of the directory mode=755 state=directory" and hit enter.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=240)** To delete this directory recursively, bring your line back and insert, before the end quote, state=absent and then hit enter again. To manage software packages we'll use the yum module. We'll need to elevate your privileges using the -b and -K options. Type in clear. Then type in ansible rhhost2* -m yum for the yum module
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=266)** - a and for arguments we're going to type in "name=httpd state=installed" -b -K and hit enter.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-files-and-packages?u=76281980&t=279)** Enter user1's password when prompted. This will install the Apache web server. Note that state=installed and state=present are the same thing. If you wanted to ensure the latest version is installed, we'd change state=installed to state=latest. To remove the package, we just need to change state=installed to state=removed or absent. We can use a lot of the other yum functionality like updating the OS, which would be equivalent to typing in yum update -y. Installing package groups, which would be the same as yum group install. And listing installed packages, which would be yum list installed. With other functionality with the touch, file, copy and yum modules. See the Ansible documentation. Note that different managed hosts may require different package modules, based on their [[Package Management]] systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[Linux]] (1), [[Microsoft Word|Word]] (1), [[Metadata]] (1), [[Package Management]] (1)
> **CLI Commands:** yum (8), ansible (6), chown (2), node (1), apache (1)
> **Speakers:** - a (4), - for (1)
> **File Paths:** path-/home/user1/file2.txt (1), home/user1/file3.txt (1), home/user1/file2.txt (1), file2.txt (1)
> **Tools:** command line (3), terminal (1)
> **Analogies:** similar to (3), just like (1)
> **Prerequisites:** install (2), you'll need (1)
> **Warnings:** note that (2)

#### [Restart servers and services](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=0)** - [Instructor] Using [[Ansible]], we can manage the running state of another host as well as its services. Let's start by managing our httpd service on RHHOST2. If you don't have it installed, you'll want to do that first. To start it we'll change the desired state to started. On RHHOST1 in a terminal type in Ansible, space, RHHOST2, asterisk, space dash M, space, service, which is the module we'll use. Space dash A, and for arguments, double quote name equals httpd. Space state equals started, double quote. Space dash B to elevate privileges, space dash uppercase K to prompt for the password. Often when we run commands in this video, you'll need to enter the password of user one on RHHOST2 to elevate privileges. Enter that now. Bring your line back and change started, to restarted, and hit Enter again. If you just want to reload the configuration without any disruption in the service, we'll change the state to reloaded. Bring your line back again and change restarted to reloaded. Lastly, to shut the service down, we change the state to stopped. Bring your line back one more time and change reloaded to stopped. To make a service persistent, we need to enable it. Bring your line back one more time, change state equal stop to enabled equals yes. To disable the service just change enabled to disabled. If you want to check the status of the service, you can add the dash dash check option. We'll start by checking if the service is enabled. Bring your line back and outside the double quotes change dash B dash K to dash dash check and hit enter.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=93)** If we scroll up to the top, we can see that what we're checking is enabled equals yes or true. This just means we're checking for that condition. Above we can see a line that says changed. If this is false, then the state doesn't have to change to match what we're looking for. We looked for enabled equals yes. And the state doesn't have to change to be yes, so it is already. Let's check the opposite. Bring your line back and change enabled equals yes to enabled equals no and run it again. You may notice that the color of the text has changed. If the condition we checked is not true, meaning it needs to change, then it will be orange color. If the state is true, it will be green. I always check if a service is enabled or started and if it's green, then it is but if it's orange, it is not. Getting more general service information isn't easy using ad hoc commands as the service underscore facts module works best in a playbook. However, we can always revert back to executing the system CTL command on the managed node, type in clear and then type in Ansible, space, RHHOST2, asterisk, space dash M, space shell which is the module we'll use. Space dash A and for argument's, space, double quote, system CTL, space, status, space, httpd, double quote and hit enter. This gives us the output of the system CTL command. If your managed host does not use the system D command, then you'll need to substitute the appropriate command such as service here. Now let's manage our hosts running state by rebooting or shutting it down. There isn't a special module for this. So we'll just send an OS command to carry out the task. The simplest way to do this is to use the command module,
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/restart-servers-and-services?u=76281980&t=189)** type in clear, and type in Ansible, space, RHHOST2, asterisk, space dash A, space, single quote, slash SBIN, slash, reboot, single quote, space dash B, space dash uppercase K, and hit Enter. And enter your password. This should reboot our RHHOST to VM, we see that we get an error message. But if we switch over to our RHHOST2 VM, we can see the process is happening. Shutting the server down would be the exact same command string except we'd replace reboot with shut down.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (4)
> **Env Vars:** rhhost2 (6), ctl (3), rhhost1 (1), sbin (1), rhhost (1)
> **CLI Commands:** ansible (4), make (1), node (1)
> **Prerequisites:** you'll need (2)
> **Tools:** terminal (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Manage users](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=0)** - [Instructor] Managing users is definitely better using playbooks than it is using ad hoc commands. Mainly, due to users being in state of the configuration. It's better to look at a user existing as part of the configuration than a command that you would run. We can manage users with ad hoc commands. For instance, to create a user named user2, type in [[Ansible]], space rhhost2*, space -m, space user for the user module, space -a and for arguments space 'name=user2, space, state=present space home=/home/user2, space shell=/bin/bash, 'space -b space -K and hit Enter. Then enter your password. Here we're defining the name of the user, their home directory and their shell. If we leave out any of these options, it will take the defaults from this /etc/default/useradd and /etc/login.de deaths files. If we want to change the use of primary group to wheel we type in clear and then type in ansible, space rhhost2*, space -m, space user, space -a, space "name=user2, space group=wheel" space -b, space -K and hit Enter. And then enter your password again. To change our supplementary group, use the "groups" option instead of the "group" option. Let's change our primary group back to user2 and add them to the wheel group.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=93)** Type in clear and then bring back your line and change group=wheel to group=user2 and add space groups=wheel and hit Enter. If you want to add them into multiple supplementary groups, just separate them with commas. You can verify the results of this and I already chose to by viewing the Etsy password and Etsy group files. Notice that this user can't log in currently because they don't have a password. Setting a password is a lot more complex as it needs to be encoded before adding it to the user account settings since Ansible doesn't support encoding it. There are multiple ways of creating an encoded password. First, you need to know the encoding methods such as MD5 or SHA-512. Most [[Linux]] passwords are now SHA-512, so we'll focus on that. You can create the encoded password with the [[Python (Programming Language)|Python]] language or some other commands. The command we'll use is included with a Dovecot email server. First we'll install that package on rhhost1, type in clear and then type in sudo space yum space install space -y space dovecot and hit Enter and then enter your password if prompted. Type in clear and then type in doveadm space pw space -s space SHA512
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=166)** - CRYPT and hit Enter. Then enter the desired password twice. Once it gives you the SHA-512 password, copy the part after the right curly bracket. Now it gets a little clumsy, we need to bring our line back where we created user2 and then inside the single quote, we'll add password= and paste in the SHA-512 password. We'll also change the username to user3 as well as the home directory, so it's a brand new user and hit Enter. You can test logging in as user3 by switching over to your rhhost2 VM and logging in. Back on rrhost1, let's delete user2, type in clear and then type in ansible space rhhost2* space -m space user space -a space "name=user2 space state=absent" space -b space -K and hit Enter and then enter your password. To manage groups, we'll use the group module to create a group named "Accounting" we'll type in clear and then type in ansible space rhhost2* space -m space group, for the group module, space -a space "name=accounting space state=present" space -b space -K and hit Enter. And enter your password. To delete it just change state=present to state=absent. As I mentioned at the beginning of this video,
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-users?u=76281980&t=259)** using playbooks is a much better idea than remembering these commands. However, ad hoc commands are still an easy way to test methods before implementing them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (5), [[Linux]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** ansible (5), python (1), sudo (1), yum (1)
> **Env Vars:** sha (4), md5 (1), sha512 (1), crypt (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1), - crypt (1)
> **Tools:** bash (1)

#### [Gather data](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=0)** - [Instructor] Gathering information from the host in our inventory is best left to playbooks, but some of the power can also be had using ad hoc commands. We'll start with the setup module. The setup module gathers facts about the host listed in [[Ansible]]'s inventory. Other modules often call the set up module to gather the information they need. This module also supports [[Windows]] Targets. Let's get started by running the set up module against our RH host 2VM. In our terminal, type in ansible space rhhost2 asterisk space dash m space setup with no arguments and hit enter. By default, this gives us all facts about the host that we've run it against. If we're only interested in a portion of the data, we can just request that portion. For instance, to retrieve the network facts would bring our line back and append base dash A space single quote, gather underscore subset equals network single quote and hit enter. We can use the gather subset argument to retrieve facts for all areas, minimum, [[Hardware]], network, virtual and facter. If you want to specify more than one area, separate them with commas. Bring your line back, and inside the single quote, add a comma and hardware, and hit enter. We can also negate values by prepending them with an exclamation mark. For instance, if we didn't want to see network facts, I'd bring my line back and I'd put an exclamation mark before network and then hit enter. We can negate all that we don't want, and that leaves what we do want by negating multiple. Bring your line back again, and prepend hardware with an exclamation mark as well. If exclamation mark all is specified,
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=95)** then only the minimum subset is collected. Bring your line back, and change it to exclamation point all and hit enter. To collect no facts, specify exclamation point all and exclamation point min. Bring your line back, add a comma, and exclamation point min and hit enter. This will collect no facts. You might be wondering why we'd do this. You'd do this if you only want to specify another subset but didn't want to return anything else. For instance, if I only wanted hardware facts I could bring my line back and I could add comma hardware and hit enter, and it will only show the hardware facts. You can go one step further and filter the output as well. For instance, in the output on the screen, we could only return ansible mounts by adding that filter. To do so, bring your line back and inside the single quotes add filter equals ansible underscore mounts and hit enter. This will only return the items under ansible mounts. If you want to dump the facter to a file, we can add dash dash tree, and specify a path to the file. For instance, type in clear, and type in ansible space rhhost2 asterisk space dash m space setup space dash dash tree space and then the file path slash tmp slash facts and hit enter. This will place all facts in the slash tmp slash facts directory. There are a lot of uses for a [[JSON]] file, but if you want to view it in a nicer interface, we can use Firefox.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=187)** Let's see the end of the directory first. Type in CD space tmp slash facts. And then we'll get a directory listing by typing in LS. We can see that we have a file named after our host. Let's append the .json file extension to it. Type in mv space rhhost2.[localnet.com](https://localnet.com) space rhhost2.[localnet.com](https://localnet.com).json and hit enter. Now let's view it with Firefox. Type in Firefox space rhhost2.[localnet.com](https://localnet.com).json
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/gather-data?u=76281980&t=221)** and hit enter. Firefox gives us a nice graphical view of our facts. We can expand and compress different sections with our mouse.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[Hardware]] (6), [[JSON]] (4), [[Windows]] (1)
> **CLI Commands:** ansible (6), cd (1), ls (1), mv (1)
> **Prerequisites:** setup (4), set up (2)
> **Tools:** firefox (4), terminal (1)
> **Analogies:** for instance (5)
> **URLs:** [localnet.com](https://localnet.com) (3)
> **File Paths:** rhhost2.localnet.com.json (2)
> **Speakers:** - [instructor] (1)


### 5. Ansible Command Line Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Manage connection methods](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=0)** - [Instructor] By default, [[Ansible]] uses OpenSSH to connect to its host in its inventory list. OpenSSH, developed by the OpenBSD project, supports ControlPersist, Kerberos, and options in the ~/.ssh/config file. If OpenSSH is not available, Ansible falls back to paramiko, which is a [[Python (Programming Language)|Python]] implementation of OpenSSH. Earlier in this course, we created a passwordless SSH key pair using the ssh-keygen command and then copied the public key to rhhost2 using the ssh-copy-id command. Using SSH keys is the recommended way of authenticating; however, we can use SSH passwords as well by passing the --ask-pass option to Ansible. If you need to pass the sudo password, add the --ask-become-pass option. If you want to use passwords instead of keys, it can get irritating having to type your password in each time you run an ad hoc command or playbook. As such, it would be advantageous to use SSH Agent. To enable SSH Agent we type in the following. Ssh-agent space bash. Ssh-add space followed by the key. Ansible also allows you to specify a private key file by adding the --private-key option when running commands. You can even specify an SSH private key file in your inventory using the ansible_ssh_private_key_file option. Ansible enables SSH host key checking by default. With host key checking, SSH automatically maintains and checks a database containing identification for all hosts that it has communicated with.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/manage-connection-methods?u=76281980&t=95)** This is generally a good thing as it protects against man-in-the-middle attacks. However, there can be more maintenance with host key checking. For instance, if a host has to be reinstalled and the keys change, then our control domain will refuse to communicate with it. We may have to manually edit the known_hosts file to fix the issue. Also with host key checking we'll have to accept a host key the first time we connect to the host. You may want to give up a little protection for convenience. To do so you can turn off host key checking in the Ansible configuration file. In the Ansible.cfg file we change host_key_checking to false and save it. You could also change the OS environment variable to do the same thing temporarily. There are other non SSH communication methods such as local, which we used to deploy playbooks on the control host itself, docker which deploys a playbook into a docker container in a docker client. Kuberctl for running playbooks and [[Kubernetes]] pods. Vmware_tools to execute playbooks inside of VMware VMs. Podman which let you interact with podman containers, and more. You can get a full list using the ansible-doc command. If you want more information on any one of the connection methods, just specify it by name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (8), [[Python (Programming Language)|Python]] (1), [[Kubernetes]] (1)
> **CLI Commands:** ssh (14), ansible (8), docker (3), python (1), sudo (1)
> **Env Vars:** ssh (9)
> **Code Identifiers:** ansible_ssh_private_key_file (1), known_hosts (1), host_key_checking (1)
> **Analogies:** for instance (1), such as (1)
> **File Paths:** ansible.cfg (1)
> **Cross-References:** earlier in (1)
> **Tools:** bash (1)

#### [Use the Ansible command](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=0)** - [Narrator] The [[Ansible]] command is said to be an extra simple tool for doing remote things according to the documentation. This command allows you to define and run a single task playbook against a set of hosts. Some common options include list-host, which outputs a list of matching hosts but does not execute anything. Playbook-dir, which defines a playbook directory. Since the Ansible command doesn't use playbooks by default, this allows us to specify a directory where they reside. Private-key allows us to specify the private key for the connection. Syntax-check performs a syntax check on the playbook but does not execute it.
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
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-command?u=76281980&t=64)** - a is to specify the module arguments and works with -m. And lastly, -v is for verbose mode. The Ansible command uses the Ansible.cfg file stored in /etc/ansible, the current directory, or the users home directory. If you want more information on the Ansible command, see the Ansible man page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (7)
> **CLI Commands:** ansible (7)
> **Speakers:** - [narrator] (1), - b (1), - k (1), - e (1), - i (1)
> **Documentation:** the documentation (1), man page (1)
> **File Paths:** ansible.cfg (1)

#### [View Ansible configuration](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=0)** - [Instructor] [[Ansible]] makes it easy to view the overall configuration. This includes the results of the various ansible.cfg files and environment variables. To view the Ansible configurations we'll use the ansible-config command. We'll start by listing the configuration items themselves. To do so, type into a terminal ansible-config space list and hit Enter. We can scroll through this to see a listing of every configuration item and a description of what it's for. Press Q to quit. To see our complete configuration from the ansible.cfg file we'll use a dump command. Type in clear and then type in ansible-config space dump and hit Enter. We can also check to see which items have changed from the default config by appending the
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/view-ansible-configuration?u=76281980&t=42)** - -only-changed option. Press Q to quit, bring your line back, and append --only-changed and hit Enter. In our case, we have not made any changes to the default config, so it doesn't output anything. We can also view the current file by using the view argument. Note, that without any additional arguments this will view the first ansible.cfg file that it finds. If you want to specify a different ansible.cfg file, you can pass it -c with the path. Type in clear and type in ansible-config space view and hit Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (10)
> **CLI Commands:** ansible (10)
> **File Paths:** ansible.cfg (4)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Use the Ansible console](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=0)** - [Instructor] A very odd tool included with [[Ansible]] is Ansible Console. It's odd in that Ansible's designed to be a stateful system where it's concerned mainly about the state of the configuration it's in. What's mostly concerned about the state the configuration is in. Ansible Console is very different. It let's you log into an interactive session and execute modules targeted at managed hosts or groups of hosts. Let's walk through how it works. First let's run it, but we'll provide the dash b and uppercase k options so we become root. In a terminal type in ansible-console space -b space uppercase K and hit enter. Enter the sudo password of user1 rhost1 when prompted. If you want to target an Ansible group such as [[Web Servers]] we actually cd into it like it were a directory. Type in cd space webservers and hit enter. Now everything we run will be executed on the managed host in the webservers Ansible group. We can run all of the modules that we would with an ad hoc command but with a lot less typing. For instance, if I wanted to run the date command on each host in the webservers group I'd type in shell space date. And that's it. Since we changed into the webservers group already, we just type in the module and module arguments. Now let's try something a bit more complex. Let's install a piece of software. I've chosen the G Edit plugins package for this. Type in yum, that's the module, space name equals gedit dash plugins space state equals installed and hit enter. And it should install fine. Notice we didn't have to add the dash b
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/use-the-ansible-console?u=76281980&t=93)** and dash uppercase k arguments to install software because we provided them when we started the console. Any ad hoc command could be run like this with a lot less typing than normal. There's no need to provide dash b and uppercase k each time you run a command or even target managed hosts as that's already been taken care of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (7), [[Web Servers]] (1)
> **CLI Commands:** ansible (7), cd (2), sudo (1), yum (1)
> **Prerequisites:** install (3)
> **Analogies:** such as (1), for instance (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Show Ansible inventory](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=0)** - [Instructor] If we have a simple setup it's very easy to count the /etc/[[Ansible]]/host file to get a list of our inventory. However, as your system grows, this will no longer be a good option. Imagine hundreds of overlapping groups and thousands of managed hosts. The Ansible inventory command can help. Let's start by displaying a list of our inventory. To do so we'll use the Ansible-inventory command with a --list option. In a terminal type in ansible-inventory space --list and hit enter. Here we can see a [[JSON]] file listing all hosts, both of our Ansible groups named dbservers and webservers and the ungrouped group. If you want information on one specific host you can use the --host argument. However, as you can see from our rhost2.[localnet.com](https://localnet.com) managed host, there's not much to show. If you want to send the output to a file you can add the --output option for instance. Bring your line back and append --output space inventory.json. Then hit enter. This saves a file named inventory.json. This file can be used as an inventory file, but let's view it using Firefox. Type in Firefox space inventory.json and hit enter. Here we get a somewhat visual representation of it. We can expand and collapse sections of the file. You can close Firefox now. The last thing we'll do is create an asci graph of our inventory. To do so use the --graph option.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/show-ansible-inventory?u=76281980&t=93)** Type in clear and type in ansible-inventory space --graph and hit enter. It's not pretty, but might be easier to visualize than the JSON output. There's one more thing I'd like to mention. You can format the output as a YAML file if you don't want JSON. Just provide the -y option. Type in ansible-inventory space --list space -y and hit enter. Ansible inventory probably will not be a command you use every day, but can simplify viewing your inventory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (8), [[JSON]] (6)
> **CLI Commands:** ansible (8)
> **Env Vars:** json (3), yaml (1)
> **Tools:** firefox (3), terminal (1)
> **File Paths:** inventory.json (3)
> **Analogies:** imagine (1), for instance (1)
> **URLs:** [localnet.com](https://localnet.com) (1)
> **Prerequisites:** setup (1)

#### [Run Ansible playbooks](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=0)** - [Instructor] Most often when we manage infrastructure with [[Ansible]], we'll using playbooks. For more in-depth information on Ansible playbooks, see the other two EX294 courses. However, before we end this course, I'll get you started with playbooks. We'll set up a directory structure and a home directory, create a playbook and execute it. Let's start by creating the directory structure. Be sure you're logged into your rhhost1 VM as user one and create a directory in your home directory by typing in mkdir ~/ansible-files and hit Enter. Now CD into it. Type in CD ~/ansible-files and hit Enter. Now we'll create our playbook here. In this playbook we'll specify that Apache should be the latest version running and persistent. Let's start by creating the YML file Type in vi apache.yml and hit Enter. Let's turn line numbering on by pressing escape: and typing a set space number and hitting Enter. This will make it easier to ensure your file matches mine. Now go into insert mode by pressing the I key and then add on the first line - - -. As this file is a YML file and needs to start with three dashes. Line two starts with a dash followed by the name of the Playbook. So type in name: and for the name of the Playbook Apache server installed and hit Enter. Line three specifies the host of Runner Don. Since we're installing the Apache web server, we'll install in all managed notes in the web service group. Type in host: [[Web Servers]] and hit Enter. To install software, we need to become root. So line four specifies that we need to elevate privileges.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=96)** Type in become: yes and hit Enter. At this point, this Playbook doesn't really do anything. For line five we'll add a task. Type in tasks: and hit Enter. Now type in - name: and for the name, let's call it latest Apache version installed. Then hit Enter. For the module we'll use the yum module. So type in yum: and hit Enter again. Now the name of the package we'll install is httpd. So type in name: httpd and hit Enter. The state should be latest. Type in state: latest and hit Enter. Now, let's add a second task. On line 10 backspace so you're equal with line six. Type in a - name:. The name of this task will be Apache enabled and running. And then hit Enter. The module we'll use for this one is service. So type in service: and hit Enter again. The name of the service is httpd. So type in name:httpd and hit Enter. We want to type an enabled: true so it's enabled. And then the state of the service would be started. Type in state: started. Make sure your file looks like mine and when it does we'll save and exit by pressing escape:X! and hit Enter. Before we run the playbook, let's check the syntax. Type in ansible-playbook - - syntax-check apache.yml and hit Enter.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/run-ansible-playbooks?u=76281980&t=190)** If there's anything wrong with the file, it will tell us. If there's something wrong, we'll need to make those changes before running it for real. Now to run the playbook we'll just remove the syntax option and a pen-b space-K. So bring a line back, get rid of syntax check and append -b -K and hit Enter. Now enter the sudo password for user one on rhhost2. The result is the Apache package's installed and if the service is not running it will be started. If it's not enabled, it will enable it. This is the beginning of Ansible playbooks. We could extend this by having it copy over an index.[[HTML]] file. We could have it configure the firewall on the web service so that Port 80 was open and a lot more. Playbooks are where the real power of Ansible lies. In the other two courses of the series we take a deep dive into playbooks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (7), [[Web Servers]] (1), [[HTML]] (1)
> **CLI Commands:** apache (8), ansible (7), make (3), cd (2), yum (2)
> **Prerequisites:** install (3), set up (1), configure (1)
> **Env Vars:** yml (2), ex294 (1), html (1)
> **File Paths:** apache.yml (2), index.html (1)
> **Ports:** port 80 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Summary

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-1-foundations-of-ansible/next-steps?u=76281980&t=0)** - [Grant] This is the first course in a three course series on [[Ansible]] Engine for the Red Hat EX294 certification. In this course, we covered installing Ansible Engine, and configuring communication with the managed host. We also covered setting up inventory and using ad hoc commands with that static inventory. We ended with dipping our toe into creating an Ansible playbook. This is just the beginning for this series on using Ansible for [[IT Automation]]. Before attempting to take the exam, you'll want to watch the other two courses on using Ansible playbooks and managing systems using Ansible. After finishing those courses, you can consider taking the EX294 exam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ansible]] (6), [[IT Automation]] (1)
> **CLI Commands:** ansible (6)
> **Env Vars:** ex294 (2)
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