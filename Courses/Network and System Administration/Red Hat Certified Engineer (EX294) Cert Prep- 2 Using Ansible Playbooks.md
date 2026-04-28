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
  - '[[Prepare for the Red Hat Certified Engineer (EX294) Exam]]'
prev_courses:
  - '[[Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible]]'
next_courses:
  - '[[Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible]]'
path_nav: '[{"path":"Prepare for the Red Hat Certified Engineer (EX294) Exam","position":2,"total":3,"prev":"Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible","next":"Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/red-hat-enterprise-linux-rhel
  - skill/ansible
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Red%20Hat%20Certified%20Engineer%20(EX294)%20Cert%20Prep-%202%20Using%20Ansible%20Playbooks.md)

![Red Hat Certified Engineer (EX294) Cert Prep: 2 Using Ansible Playbooks](https://media.licdn.com/dms/image/v2/C4E0DAQEhLaaGVi-Knw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1596035537068?e=2147483647&amp;v=beta&amp;t=yba5RSww1EnvyDCoCsZ-3teZB-kFUTftO80DDhUzyAg)

# Red Hat Certified Engineer (EX294) Cert Prep: 2 Using Ansible Playbooks

> Looking to earn the Red Hat Certified Engineer (RCHE) certification? In this course, the second installment in a three-part series, learn how to create and work with Ansible playbooks as you prepare to take—and ace—the RHCE (EX294) exam. Grant McWilliams shares tips for managing YAML files, explains how to work with variables to retrieve results after you run a command, and shows how to use Jinja2

> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks) | 2h 31m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (4 videos)
- **2. 1. Working with Playbooks** (9 videos)
- **3. 2. Creating Reusable Playbooks** (5 videos)
- **4. 3. Using Variables** (4 videos)
- **5. 4. Using Flow Control** (6 videos)
- **6. 5. Grouping Content** (3 videos)
- **7. 6. Using Ansible to Deploy Files** (3 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=0)** - The Red Hat RHCE certification is one of the most respected and valued in the IT industry, Possessing credentials as well known as the RHCE EX294 certification will help secure a position in IT automation.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=12)** The RHCE is a popular Linux engineering certification and the current version focuses on IT automation using Ansible Engine.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=19)** And that information can be invaluable in today's world no matter which operating systems or devices you're managing.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=26)** This course is the second course in our three-part EX294 series focusing on Ansible Engine.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=32)** In combination with the other two EX294 courses in the course library, it covers all objectives of the Red Hat RHCE EX294 exam.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=40)** In addition, the information covered in this course is general in nature and can be used to learn Ansible Engine even if you're not planning on taking the Red Hat exam.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=49)** My name is Grant McWilliams, college professor and Linux enthusiast.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=54)** Over the course of the past 20 years, I've taught advanced Linux topics to many people in higher education, as well as corporate environments.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=60)** And that experience is accessible to you.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction?u=76281980&t=62)** I'm sure you're excited to get started and I'm excited to teach you, so let's get to it.

> [!info]- Semantic Content
>
> **Env Vars:** rhce (4), ex294 (4)
> **CLI Commands:** ansible (3)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - the (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=0)** - [Instructor] As Red Hat EX294 Certification covers technologies included in Red Hat Enterprise Linux 8, we'll be using a version of that operating system for this course.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=10)** In this course, when I use the generic term, Enterprise Linux 8, I mean, Red Hat Enterprise Linux 8, or any other direct clones, such as CentOS Enterprise Linux.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=21)** Anything we do in this course will work fine on either of these operating systems.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=25)** Since this certification focuses on Ansible Engine, most of the course can also be done without modification on Fedora Linux, or any spin of Fedora as well.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=34)** Furthermore, most of the technologies covered in this course, are not distribution specific and focus on IT Automation using Ansible.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=42)** As such, they can be applied to any operating system utilizing Ansible Engine for Automation.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=48)** For this course, we'll be using Linux in VirtualBox Virtual Machines.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=51)** There are versions of VirtualBox for Windows, macOS, Solaris, and various Linux distributions.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=57)** For this course, I'll be running VirtualBox on a Linux host.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=61)** In order to run virtual machines for this course, you'll need a computer with an Intel or AMD 64-bit CPU with virtualization support.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=70)** Intel CPUs with virtualization support will be advertised as having VT-x and AMD calls at AMD-V.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=78)** You will also need a 64-bit host OS.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=81)** If you're using Linux, this is automatic.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=84)** If you're using Windows, make sure you have a 64-bit version of that operating system.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=89)** If your OS is 64-bit, then you'll want to download the 64-bit version of VirtualBox as well.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=95)** For this course, you may also want to have high speed internet for downloading ISO images and doing Linux operating system software updates.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=103)** You will also want to have 20 to 25 gigabytes of free hard drive space, minimum.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=107)** This will provide enough space for two CentOS 8 Linux Guest VMs.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=112)** If you have more free space available, it can give you more flexibility for creating additional Guest VMs, or giving your VMs larger virtual hard drives.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=121)** To run more than one VM at a time, you'll need to have two to four gigabytes of free system memory if you're using Linux as your host OS.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=128)** If you're using Windows as the host OS, I recommend eight gigabytes of RAM, minimum.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=133)** The Foundation Course in this three-part Red Hat EX294 Series is Cert Prep, Red Hat Certified Engineer EX294, Foundations of Ansible.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=143)** In that course, we install a 64-bit version of VirtualBox, install CentOS 8 Linux in a VirtualBox virtual machine, and set up our VirtualBox lab environment, including, installing VirtualBox Guest Additions in CentOS, making a clone of our CentOS 8 VM, as well as managing VirtualBox networking with NAT in a private network.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=162)** If you haven't taken that course yet, you'll want to do that before proceeding with this one for the best user experience.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=168)** If you already have foundational knowledge of Ansible, you may want to just watch the videos for CentOS 8 Installation, VirtualBox Lab Setup, as well as the videos to Install Ansible on the Control Node, Preparing the Managed Nodes, and Building Static Inventory.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/what-you-should-know?u=76281980&t=181)** Those videos will get you started for this course.

> [!info]- Semantic Content
>
> **Env Vars:** ex294 (3), amd (3), cpu (1), iso (1), ram (1)
> **CLI Commands:** ansible (6), make (1), node (1)
> **Prerequisites:** install (3), you'll need (2), make sure you have (1), set up (1), setup (1)
> **Code Keywords:** private (1), static (1)
> **Code Identifiers:** macos (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### About the EX294 exam
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=0)** - [Narrator] This course provides training for the RHCE EX294 certification.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=5)** RHCE stands for Red Hat Certified Engineer.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=8)** The RHCE is at Red Hat certification which uses Red Hat Enterprise Linux 8 as its operating system platform.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=15)** In the past, the RHCE EX300 was a certification that tested the general skills of system engineers.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=21)** The new RHCE EX294 certification however, is not a general engineer certification as the focus has changed to IT automation using Red Hat Ansible Engine 2.8.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=32)** All exam takers will need to have previously passed the RHCSA EX200 exam.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=38)** You can take the RHCE exam without possessing the RHCSA certification, but RHCE credential will not be issued until both exams have been passed.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=48)** Those test takers that pass the exam become Red Hat Certified Engineers and in addition, their certification counts towards being a Red Hat Certified Architect or RHCA.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=57)** Although that Red Hat provides training for both EX200 and EX294 exams, it is not required in order to take either exam as they're are standalone exams not linked to any training program.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=68)** Taking the official training or this course is not a guarantee that you will pass the exam.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=72)** Although, this three course EX294 series with previous experience, additional practice and reading should be sufficient.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=79)** To gauge your knowledge level, Red Hat provides online skills assessment tools which could be helpful in deciding if you need additional instruction.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=86)** The RHCE exam is a performance-based test of skills and knowledge necessary to automate Red Hat Enterprise Linux.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=93)** This hands on practical exam requires you to use Red Hat Ansible Engine to perform real world tasks.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=99)** You will be provided with multiple systems and will be required to install and configure Ansible Engine, and then use it to perform standard system administration tasks similar to what you do on a job.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=110)** You will be required to create Ansible playbooks and users playbooks to configure systems for specific roles and behaviors.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=116)** The tasks will be described in terms of a specific end state that you must achieve.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=121)** Your work will be evaluated by applying the playbooks created during the exam against freshly installed systems and verifying that those systems and services work as specified.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=130)** The exam is hands-on and last four hours.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=132)** As of this recording, the exam costs us 400 US dollars.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=136)** During the exam, you will not have access to the internet or outside materials, you will however, have access to documentation that ships with Red Hat Enterprise Linux.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=146)** You can take the exam either in a classroom if you've purchased Red Hat training, onsite if your company has arranged this was Red Hat or by way of individual exam.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=155)** Most people will probably take an individual exam at a testing center.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=159)** To do so, visit Red Hat's website to determine a testing center location near you.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=163)** Testing centers are provided by Red Hat and other third party companies.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=167)** After completing the exam you will not receive your scores immediately as those come from Red Hat Certification Central.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=173)** Examiners and training partners are not authorized to report results to candidates.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=177)** Scores are usually reported within three US business days.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=181)** Also exam scores are not reported on individual items, but only on sections.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=186)** If you don't do well on one section you'll need to study for the entire section again.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=190)** The RHCE exam is aimed at experienced Linux IT professionals who currently have an RHCSA certification, are pursuing the RHCE or are preparing for one of the RHCA certifications.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=202)** It will also be beneficial for experienced IT professionals who desire a recognized certification in IT Automation.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=209)** Also, this certification is useful for organizations that require compliance with a mandate such as DOD 8570.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=216)** If you're not a Red Hat administrator or a person pursuing a Red Hat certification, this course will still be valuable to you if you're interested in IT automation using Ansible.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=226)** I can't stress enough that this course and certification is general in nature, and useful even if your infrastructure comprises Ubuntu, SUSE or even Windows hosts.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=235)** This course is the second of a three part series covering objectives of the RHCE EX294 exam.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=241)** Specific objectives can be found on Red Hat's website.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=245)** Skills covered can be used to manage Ansible in any environment.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=249)** If you're a new Red Hat Certifications, and you only want to prepare for the RHCSA certification then take the Red Hat Certified System Administrator EX200 course in the course library.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=260)** If you want to prepare for the RHCE certification then take the EX200 course as well as this EX294 course.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=267)** If you want more in depth training on administering Red Hat Linux, take the Linux System Engineer Learning Paths in the course library.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-the-ex294-exam?u=76281980&t=274)** This course is one of a three part series covering objectives of the RHCE EX294 exam.

> [!info]- Semantic Content
>
> **Env Vars:** rhce (13), ex294 (7), rhcsa (4), ex200 (4), rhca (2)
> **CLI Commands:** ansible (6)
> **Prerequisites:** required to (2), configure (2), install (1), you'll need (1)
> **Code Keywords:** pass (2), require (1)
> **Definitions:** stands for (1), is a  (1)
> **Analogies:** similar to (1), such as (1)
> **Versions:** 2.8 (1)
> **Speakers:** - [narrator] (1)

#### Reconfigure-Migrate CentOS
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=0)** - [Instructor] It's important to note that Red Hat ended support for CentOS Eight on December 31st, 2021.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=6)** Part of the process involved changing the software repository URLs from [centos.org](https://centos.org) to vault.[centos.org](https://centos.org).
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=13)** If you have a CentOS installation, and it cannot install software from its repositories, execute these steps.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=19)** If you're using Rocky Linux or AlmaLinux OS, you can skip this video.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=24)** First, make sure your networking is turned on by clicking on your top right-hand menu, and clicking wired off.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=29)** Now click on wired settings, click on the gear icon next to the wired connection, and click on connect automatically.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=37)** Now click apply.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=39)** And click the slider gadget to turn it on.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=42)** Now to fix the repositories in our terminal, type in cd /etc/yum.repos.d/, and hit enter.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=49)** Now comment out all mirror list lines by typing in sudo space sed space dash i, space single quote, s, forward slash for the delimiter, mirror list, forward slash, hash mirror list, forward slash, g for global, single quote, space, capital C, lowercase ent, uppercase OS, dash, asterisk, and hit enter, and type in your user's password.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=82)** Now, change the CentOS mirror URL to vault.[centos.org](https://centos.org).
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=86)** We'll need to use the pipe symbol for the said delimiter because the URLs have forward slashes in them.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=92)** Type in sudo space sed space dash i, space, single quote, s for substitute, again.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=97)** This time, type in a pipe symbol for the delimiter, hash, base url, equals, http, colon, slash, slash, mirror, dot centos, dot org, pipe symbol, base url, equals, http, colon, slash, slash, vault dot centos dot org, pipe, g, single quote, space, capital C, lowercase ent, capital OS, dash, asterisk, and hit enter.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=137)** Now update your system by typing in sudo space dnf, space update, and hit enter.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=144)** Note that this makes your CentOS installation functional, again.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=148)** Since this version is no longer supported, there will not be any more software updates for it, but you will be able to install current software from the repositories.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=156)** For now, this may be fine, especially, for the purpose of learning.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=160)** However, in the future, it may become a problem, when trying to install newer versions of software.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=168)** Once the update has been done, reboot your VM by typing in reboot, and hit enter.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=175)** To be able to update your CentOS system with new versions of software and security patches, you'll need to migrate it.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=181)** A couple of options include migrating to Rocky Linux or AlmaLinux OS.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=185)** I will outline both processes in this video.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=188)** You can do either both for educational purposes or choose one.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=191)** Log back in, and then before making any changes to your VM, you should take a snapshot by pressing the host key, plus t.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=200)** Name the snapshot pre-migration, and hit enter.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=205)** To migrate CentOS eight to AlmaLinux OS, point your web browser to [almalinux.org](https://almalinux.org), and then click on the migrate button.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=216)** This will take you to their GitHub page.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=219)** About halfway down the page, there is an almalinux dash deploy dot sh link.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=224)** Click on it, and then click on raw, and then, right click, and select save page as.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=234)** Choose your downloads directory, and click on save.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=239)** Once that's downloaded, go to your terminal, and change the downloads directory.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=244)** Type in cd space tilde slash downloads, with a capital D, and hit enter.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=249)** Now run the script by typing in sudo space bash, space, almalinux, dash deploy dot sh, and hit enter again, and enter your password.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=260)** Once the migration is done, reboot into AlmaLinux OS.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=266)** Another option is to migrate to Rocky Linux.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=269)** To do so, you'll need to revert your VM back to the pre-migration snapshot again.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=274)** Click the VM close gadget, select power off the machine, and select restore current snapshot pre-migration, and hit okay.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=283)** Now click on start to start your VM back up.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=286)** Once it's powered back up, bring up a web browser, and browse to [rockylinux.org](https://rockylinux.org), and click on migrate.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=299)** This page contains the documentation, concerning migration from CentOS.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=304)** Partway down the page is a link for the GitHub project page for the migrate2rocky script.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=310)** Click on that.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=312)** Now click on migrate2rocky.sh, and then click on raw, and right click, and click save page as, and save it to your downloads directory.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=327)** Open a terminal cd to your downloads directory.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=329)** Type in cd space, tilde, slash, downloads with a capital D, and hit enter, and then run the script.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=335)** Type in sudo space, bash, space, migrate2rocky.sh, space, dash r, and hit enter, and enter your password.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=347)** Once the migration process has finished, reboot into Rocky Linux.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=353)** The differences between Rocky Linux and AlmaLinux OS are minor, and comprise boot images and backdrops at this point.
>
> **[5:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=359)** Both of these are nearly identical to CentOS eight, and will receive all future software updates.
>
> **[6:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/reconfigure-migrate-centos?u=76281980&t=364)** Use whichever one you wish.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (5), cd (4), sed (2), make (1), yum (1)
> **UI Navigation:** click on (12), go to (1)
> **Tools:** terminal (3), github (2), bash (2)
> **URLs:** [centos.org](https://centos.org) (3), [almalinux.org](https://almalinux.org) (1), [rockylinux.org](https://rockylinux.org) (1)
> **Prerequisites:** install (3), you'll need (2)
> **File Paths:** migrate2rocky.sh (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** url (1)


### 2. 1. Working with Playbooks

#### Introduction to playbooks
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=0)** - [Instructor] In the EX294 Ansible Foundations course, we talked quite a bit about using ad hoc commands, which can be very powerful for running commands on a remote host.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=9)** Playbooks are a completely different way to use Ansible, and are extremely flexible.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=13)** Playbooks are the very basis for simple configuration management using Ansible.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=17)** Playbooks can be used for multi-machine deployment and are particularly well suited for deploying complex configurations and applications.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=24)** Playbook files will be used to push Azure configurations to your infrastructure, this ensures that all devices being managed by Ansible are kept up to date.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=32)** We can use the Ansible program for running ad hoc commands, but playbooks are very different, they're stored in text files, and as such, can be managed by source control systems like subversion or git.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=43)** Playbooks are displayed in YAML format and can include multiple plays.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=47)** Plays in playbooks use hosts and users to determine which systems in your infrastructure to target and which user to run as.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=54)** It is the purpose of the play to map the tasks to the host.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=58)** What is run on each host in a play is called a task.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=61)** A play may include many tasks to be executed on many hosts.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=65)** Tasks are executed in order one at a time against all targeted machines before moving on to the next task.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=72)** The goal of a task is to execute a module with arguments which carries out the task on the remote host.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=78)** Playbooks can have event handlers which respond when there has been changes.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=82)** Normally when we use playbooks, we push configurations out to various hosts.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/introduction-to-playbooks?u=76281980&t=86)** However, we can reverse this situation by using the ansible-pull command, which pulls configurations back to the local host.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (6), git (1)
> **Env Vars:** ex294 (1), yaml (1)
> **Code Keywords:** module (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Playbook language
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=0)** - [Instructor] Playbooks are written in YAML.
>
> **[0:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=2)** YAML has a minimum amount of syntax, and is not intended to be a programming language.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=7)** YAML represents a model of a configuration or process.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=11)** Let's talk now about the structure of a playbook.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=14)** A playbook will include a list of one or more plays.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=17)** A play is a sports analogy.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=19)** Just as you can run a play in a football game that can do different things at different times, you can run Ansible plays at different times that do different things.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=27)** Plays map hosts to well-defined roles using tasks.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=30)** Tasks then execute modules on hosts.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=33)** Playbooks can have multiple plays that all target different hosts or groups of hosts.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=38)** This might still be a bit abstract, so let me give you an example.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=41)** You could have a playbook that would include plays with tasks that target the web servers group.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=46)** Modules would run on all hosts in this group, and then run other tasks on all hosts in the DNS servers group, and lastly, return to the web servers group and finish off by running more tasks there.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=57)** Now let's see what a playbook looks like.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=59)** We'll start by talking about the structure of a single playbook file.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=62)** Later we'll talk about how to structure your directories, roles, and other Ansible files.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=67)** This is a very simple playbook file that contains one play.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=70)** Keep in mind that playbooks can and often do contain multiple plays.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=74)** If so, they'll have more than one of these sections.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=77)** This play includes the host group to execute on.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=80)** In this example, it's the web servers group.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=83)** It set some variables for the HTTP port and the maximize number of clients.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=88)** Then it specifies which remote user to run as.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=90)** And lastly, defines the task to run.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=93)** We have one task here named ensure apache is the latest version.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=97)** It uses the yum module and passes the name of the package, in our case, httpd, and the state it should be in.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=103)** In this example, it should be the latest version.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=106)** In summary, this playbook targets all hosts in the webservers group, which is defined in our inventory file.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=113)** Sets some variables and then as root, it runs the yum module, which installs or updates the httpd package.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-language?u=76281980&t=119)** When it's done it finishes and then goes on to the next play if we have one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (2), abstract (1), case, (1)
> **CLI Commands:** ansible (2), yum (2), apache (1)
> **Env Vars:** yaml (3), dns (1), http (1)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### YAML tips and tricks
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=0)** - [Instructor] In computing, there are many different configuration data formats, including Key-value pairs, INI files, YAML formatted files, JSON files, and XML.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=9)** This is just a short list.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=11)** All of these types have pluses and minuses.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=13)** Some are more human readable and others are more capable.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=15)** Most configuration management systems allow you to choose the file format, and Ansible is no different.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=21)** Most often, however, YAML is used for Ansible Playbooks.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=25)** YAML is not specific to Ansible, so knowing it is a transferable skill set.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=29)** YAML has minimal syntax, because it's not trying to be a programming language.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=34)** It solely describes configuration.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=35)** YAML supports a hierarchical structure so we can have nested items easily.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=40)** However, not everyone loves YAML because of its Python-like reliance on syntactic whitespaces.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=46)** This means it uses whitespaces to differentiate between hierarchy levels.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=50)** The problem often lies in there being more than one way to create a whitespace, and by default in most editors, you can't visually tell the difference.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=57)** This video is to help you keep your sanity when dealing with YAML.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=60)** Let's take a look at our example Playbook again.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=63)** We can see the hierarchical structure based on the levels of indentation.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=66)** If we were to turn the space characters into dots, it would look like this.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=71)** However, on occasion, you may copy and paste text or accidentally use a tab character to indent.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=77)** And it looks the same as a sequence of spaces.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=79)** For instance, our yum module line in this example.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=81)** This poses a problem because the YAML file won't get processed properly.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=86)** Let's talk about some ways to deal with YAML.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=88)** This will be a quick list of things to do to improve your experience.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=91)** We'll dive deeper into each of these items in a moment.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=94)** Primarily make your editor work for you.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=97)** Use a linter.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=98)** View YAML in another format.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=101)** Outline your configuration ahead of time, and stay familiar with YAML.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=106)** Let's talk more about making your editor work for you.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=110)** This may have the biggest impact out of all of the points in the quick list and as a good practice with any language.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=115)** The first step is to look for any YAML plugins for your favorite Text Editor.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=120)** It doesn't matter if you use Atom, Light Table, Brackets, or Plain-old Emacs and Vim.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=126)** There will be plugins or at least configuration mods that you can do to improve your life.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=130)** Atom, Brackets and Light Table all come with YAML plugins and with a little bit of work can be installed and sent as eight.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=137)** However, they do not come into default repositories.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=140)** Next, turn on YAML syntax highlighting.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=143)** Then configure your editor to insert spaces for tab characters.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=148)** Next, configure the tab width to be compatible YAML.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=152)** And lastly, make white spaces visible.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=155)** When you use a lint roller in clothing, it cleans up the fuzz.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=159)** Linters, when used with source files also clean up formatting fuzz such as programming errors, bugs, stylistic errors, or formatting errors and helps find problems before you try to use these files.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=169)** You can use a linter directly to parse files or you can have the linter integrated with your editor to catch errors before you even save the file.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=178)** When YAML files become very large, it can be very difficult to visualize the data, as YAML uses many lanes and hierarchies may not be obvious.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=185)** It may be helpful to view YAML in another format such as JSON.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=190)** You can also view YAML files in a graphical YAML viewer such as [treedoc.org](https://treedoc.org).
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=196)** YAML can turn into the config version of spaghetti code really quick if you don't have a plan.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=201)** Before you start creating Ansible configurations, plan out your functionality first.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=205)** After you have an idea which hosts will get which configuration data, write pseudo-config.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=210)** This is a lot like pseudo-code, because you don't have to follow any syntax guidelines.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=214)** During this process, you'll create the hierarchical structure, which will be helpful in the next step.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=219)** Once you have the pseudo-config written, then and only then you write the YAML.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=224)** The last item in our quick list is to stay familiar with YAML.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=227)** Every time I switch between data formats or programming languages, it helps to revisit the syntax.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=232)** You can do this by keeping cheat sheets nearby or by keeping [yaml.org](https://yaml.org) bookmark.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/yaml-tips-and-tricks?u=76281980&t=238)** One more thing that helps me is to keep the completed section of YAML commented out in a template file, which I start with when I create a new playbook.

> [!info]- Semantic Content
>
> **Env Vars:** yaml (24), json (2), ini (1), xml (1)
> **CLI Commands:** ansible (4), make (2), python (1), yum (1), find (1)
> **Code Keywords:** let (3), this. (1), module (1), switch (1)
> **Tools:** atom (2), emacs (1), vim (1)
> **Analogies:** such as (3), for instance (1)
> **URLs:** [treedoc.org](https://treedoc.org) (1), [yaml.org](https://yaml.org) (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (2)

#### Install the Atom editor
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=0)** - [Instructor] There are multiple editors you can use for writing YAML.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=3)** For this course, we'll be installing the Atom editor created by GitHub, as well as configuring VIM.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=8)** But you can use whichever editor you like.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=10)** The Atom editor is not available on the default software repositories, so we need to configure the Atom repository and install it from there.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=18)** Installing a package from a repository is safer and more convenient than just downloading it.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=23)** First, let's create the yum repository file.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=25)** In a terminal on rhhost1, type sudo vi /etc/yum.repos.d/atom.repo.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=37)** You can name the repository file anything you want, but it has to end with .repo.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=42)** Now hit enter, and enter your password if prompted.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=45)** Go into insert mode by pressing the I key, and then add [Atom], and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=52)** Name=Atom Editor, and hit Enter.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=58)** Baseurl=[https://packagecloud.io/AtomEditor](https://packagecloud.io/AtomEditor) in camel text
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=73)** /atom/el/7/$basearch and hit Enter.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=83)** Enabled=1, hit Enter again.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=87)** Gpgcheck=0, hit Enter again.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=93)** Repo_gpgcheck=1, hit Enter.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=100)** Gpgkey=[https://packagecloud.io/AtomEditor](https://packagecloud.io/AtomEditor) camel text again,
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=115)** /atom/gpgkey.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=119)** Now save an exit by pressing Escape, :x!, and hitting Enter.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=124)** Now install Atom by typing in sudo yum install -y atom, and hit Enter.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=132)** And now we have Atom installed.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=134)** You can place the Atom editor on your dock to make things easier.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=137)** Click your mouse in the top left hand corner, and then type in Atom.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=141)** Then grab the Atom icon, and drag it to your dock.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=144)** To run it, click on the icon.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=148)** If you have another editor that you like to use, that's fine.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/install-the-atom-editor?u=76281980&t=151)** It doesn't really matter which editor you use, as long as it supports YAML and you enjoy it.

> [!info]- Semantic Content
>
> **Tools:** atom (14), github (1), vim (1), terminal (1)
> **CLI Commands:** yum (3), sudo (2), make (1)
> **Prerequisites:** install (3), configure (1)
> **Env Vars:** yaml (2), vim (1)
> **URLs:** [https://packagecloud.io/atomeditor](https://packagecloud.io/atomeditor) (2)
> **Code Keywords:** let (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Configure VIM for YAML
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=0)** - [Narrator] VIM can also be used to write YAML.
>
> **[0:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=2)** We're using VIM version eight in CentOS eight, which already has YAML support, so we don't have to install a plugin.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=8)** If you're using an older version of VIM, you may want to install the vim-yaml plugin.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=12)** We will however editor VIMRC file and add some configuration items.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=17)** In a terminal on our toast one type in vi space tilde slash VIMRC, and hit Enter.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=24)** We're going to add some VIM options here, which we'll discuss when we're done.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=28)** Type in, go into insert mode by pressing the I key and then type in double quote space YAML, space config.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=35)** This is a comment, newline line Backspace.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=42)** Au exclamation mark, space buff, New File in camel text comma, buff, read post also in camel text, space asterisk, dot left curly bracket YAML comma YML right curly bracket space, set space file type equals YAML space fold method equals indent.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=69)** New line, autocmd space file type in camel text, space YAML space set local, space TS equals two space, STS equals two, space SW equals two, space expand Tab.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=87)** I've also included this file in the exercise files for this chapter named VIMRC.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=91)** Go to the directory for this chapter and copy it to your home directory and rename it to .vimrc to use it.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=97)** Let's talk about these configuration items.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=99)** The first line is a comment but the second line search was a huge exclamation point, which tells VIM not to add these auto commands twice if they're already set.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=108)** The rest of the line says that when reading a new file or reading a file with a Colon read command and that file name ends with dot YAML or dot yml, then set the file type to YAML and the fold method to indent.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=120)** The next line says for file types equal YAML said these configuration items.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=124)** YAML requires indents in multiples of two, so we set TS to the value of two.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=129)** This is the Tab stops, which is the number of spaces that a Tab counts for.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=133)** STS or Soft Tab Stop is the number of spaces that a Tab counts for when doing editing operations.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=139)** Again, we set it to two.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=141)** SW as a Shift With, which is the number of spaces used for each auto indent.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=145)** We'll set this to two and lastly, expand Tab using the appropriate number of spaces in place of a Tab.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=152)** We can refine VIM a bit more by adding a plugin that adds vertical lines for indentation.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=157)** This makes it easier to visualize the indentation levels.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=160)** Save and Exit VIM by pressing Escape + : + X, exclamation mark and hitting Enter.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=166)** Now type in clear, and then type in git space clone space [https://github.com./Yggdroot/indentLine](https://github.com./Yggdroot/indentLine)
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=183)** with a capital L dot git space Tilda slash dot VIM slash pack slash vendor slash start, slash indent Line with a capital L again, and hit Enter.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=197)** If git is not installed on your system, you'll want to install it first.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=200)** This process is all we need to do in order to install the indentLine VIM plugin.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=205)** You'll also want to install a linter for YAML.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=207)** For this we'll install YAML lint which is useful no matter which editor you use, type in clear and then type in sudo space Yum, space install space dash y space yamllint lint and hit Enter, type in your password if prompted.
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=222)** Yamllint by default is fairly strict and shows errors for long lines and other things that we might not care about.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=228)** So let's relax the configuration a bit.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=230)** To do so, type in clear and type an mkdir space tilde slash dot config, slash yamllint.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=239)** This is the config directory for yamllint and hit Enter.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=243)** Now let's create the custom configuration having VI space tilde slash dot config, slash yamllint slash config, and hit Enter.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=252)** Go into insert mode by pressing the I key then add, extends Colon, space relaxed, Enter.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=259)** Rules colon, Enter two spaces, line, length, colon, disable.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=269)** Enter two spaces, trailing dash spaces, colon space disable.
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=277)** This will cut down on the formatting error messages.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=279)** I have a habit of putting a space at the end of my lines and without this modification yamllint complains every time.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=286)** It's up to you how strict you want it to be.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=289)** Save and Exit by pressing Escape + Colon + X, exclamation mark and hitting Enter.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=295)** Now let's open a YAML file on VIM and see how it works.
>
> **[4:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=298)** Included in this chapter as exercise files, is a file called example.yml.
>
> **[5:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=303)** Let's use VIM to look at it.
>
> **[5:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=305)** Change into your exercise files directory and then into the directory for this chapter.
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=308)** For me, I type cd space ExerciseFiles/ch01 for chapter one.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=315)** Now type in VIM space example, dot yml and hit Enter.
>
> **[5:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=319)** We can see that VIM has opened this file with all indents folded.
>
> **[5:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=324)** To unfold an indent, put your cursor over a full line and hit Escape to ensure you're not in insert mode, and then press Z + O to open.
>
> **[5:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=333)** You can also open quickly by pressing the Spacebar.
>
> **[5:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=336)** Now be sure you're inside the fold and press Z + C to close.
>
> **[5:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=341)** If when opening a file, you want to expand all folds at the same time, press z, uppercase R.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=347)** Now let's test the indent lines.
>
> **[5:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=349)** Go into insert mode by pressing the I key and then create a new line and indent twice.
>
> **[5:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=356)** You should be able to see nice vertical bars representing the levels, by default, the indentation characters a pipe symbol, but you can change it in your dot VIMRC file to any character.
>
> **[6:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=365)** Lastly, we'll test the yamllint on our file.
>
> **[6:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=368)** Exit VIM by pressing Escape + : + X + ! and hitting Enter.
>
> **[6:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/configure-vim-for-yaml?u=76281980&t=373)** Now type in yamllint space example dot yml and hit Enter.

> [!info]- Semantic Content
>
> **Env Vars:** vim (14), yaml (13), vimrc (4), sts (2), yml (1)
> **Tools:** vim (15), terminal (1), github (1)
> **Code Keywords:** let (6), for. (1), extends (1), default, (1)
> **CLI Commands:** git (3), sudo (1), yum (1), mkdir (1), cd (1)
> **Prerequisites:** install (7)
> **Exercise Files:** exercise files (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** indentline (2)

#### Playbook hosts and users
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=0)** - [Narrator] In EX294 Foundations of Ansible course, we set up a direct instruction in our home directory of rhhost1.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=6)** Let's verify this.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=8)** Be sure you login as user1 on rhhost1, and are in your home directory.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=12)** You should have a directory called Ansible files; change into that directory and then ls.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=18)** In that directory there will be a playbook named apache.yml.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=21)** If you don't have this file, you can get it out of this chapter's exercise files.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=26)** Let's load it into vim.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=28)** If you like the graphical Atom Editor better, you can use that.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=31)** For vim, type in vim space apache.yml and hit enter.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=37)** Press z, uppercase R to expand all folds.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=42)** After line numbering them, by pressing escape, colon and then typing in set space number.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=49)** As a quick review, we can see that we have specified on line two, that we're going to target all hosts, in the web servers group.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=56)** This could have been a host name IP address or a group of hosts.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=60)** We talked about targeting hosts in detail in the EX294 Foundations of Ansible course, so rewatch that video for more information.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=68)** Following that, on lines three through five, we set some variables for the http_port and maximum number of clients.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=74)** On line six we set the remote_user.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=76)** In older versions of Ansible this was just called user, but it was changed to limit confusion with the user module, so I would recommend typing out remote, underscore, user.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=85)** We specified our remote_user of root.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=87)** Remote users can also be defined per task, you may want to run one task as an administrator, but another as a regular user.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=95)** For instance, if we inserted an extra remote_user entry for the latest Apache version installed task, to specify running the yum module as root.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=103)** We could add an additional remote_user entry for the Apache enabled and running task as well.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=108)** For this we can specify the apache user.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=110)** Obviously the user we choose will need sufficient privileges for carrying out these tasks.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=116)** If you want to elevate privileges, we can also use become.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=118)** For example, if we set our remote_user to a normal user such as user1 and we need to elevate privileges, we set become to yes.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=126)** By default we become root. However, we can specify the user as well with become underscore user.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=132)** Note that become_user and remote_user are not the same thing but can effectively accomplish the same thing.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=138)** Let's relate this to an interactive login.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=140)** The remote_user is a user you login with using ssh, by typing in ssh space user1@rhhost2.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=148)** The ssh client on rhhost1 connects to rhhost2 and exchanges credentials.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=153)** Once you're logged in you'd be user1.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=156)** However, if you need to elevate your privileges, you can type in su, and it will make you a root after prompting you for a password.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=163)** The user that you logged into rhhost2 with will be equivalent to Ansible's remote_user.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=168)** The user you'd be after using the su command would be equivalent to Ansible's become.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=173)** If you wanted to elevate your privileges to a different user you'd set become to yes, and become_user to user2, for instance.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=180)** Along with become and become_user, you can also specify the method that you elevate privileges using become_method.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=187)** The values can be su, sudo, runas of the noted windows, or many more.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=191)** Check the Ansible documentation for the become plugins for more information.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=195)** If you need to specify flags to the become_method, you can use become_flags.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=199)** This may include running a specific shell or switch to another user, such as with su or sudo.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=205)** Note that we can also set these items from the command lines for the entire playbook.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=209)** For instance, dash, dash, ask, dash, become, dash, pass can prompt the password.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=214)** Dash, dash, become, dash, dash, become, dash, method, and dash, dash, become, dash, user.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=219)** This is all pretty simple and mimics interactive login sessions, but the permissions get complex if you're not elevating your privileges to root.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=225)** When Ansible runs a module on a remote node, it copies the module as a remote_user. In this case user1.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=232)** If the remote_user is a normal user, such as user1 the module is run as user1.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=237)** When the remote_user is root, the modules are copied with root permissions and executed as root.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=243)** Since the module is owned by a root, regular users can't read it.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=246)** This is secure.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=247)** Things get a bit more complex with become_user.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=250)** If the remote_user is user1 and the become_user is also a normal, non-elevated user, such as apache, then the module gets executed as the become_user.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=260)** In this case, apache.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=262)** However, the apache user may not be able to execute the module because it's owned by user1.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=267)** Note that even if the apache user cannot execute a module owned by the user1 user, the module is still world-readable.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=274)** Files that are copied as a regular user are readable by other users, because the other permissions, by default, are set to read.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=281)** This could potentially be a security problem if any of the module parameters contain sensitive information.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=286)** There are several solutions to this problem.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=289)** The first is to use pipelining.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=291)** With pipelining, the module is piped to the Python interpreter and never saved on the disc.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=295)** Next, you can also mount the temporary director with POSIX ACLs turned on.
>
> **[5:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=300)** Ansible will use ACLs to share the module file with the second unprivileged user, instead of having to make the file world-readable.
>
> **[5:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=307)** The last solution is don't become an unprivileged user.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=311)** The last solution may be the easiest.
>
> **[5:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=313)** If you're worried about not knowing if you're executing modules insecurely, don't be.
>
> **[5:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-hosts-and-users?u=76281980&t=317)** New versions of Ansible warn you if the modules have been saved world-readable.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (10), apache (9), ssh (3), make (2), sudo (2)
> **Code Identifiers:** remote_user (12), become_user (6), become_method (2), http_port (1), become_flags (1)
> **Code Keywords:** module (13), let (3), this. (1), switch (1), pass (1)
> **Analogies:** such as (4), for instance (3), for example (1)
> **Tools:** vim (3), atom (1)
> **Env Vars:** ex294 (2), posix (1)
> **Warnings:** note that (3)
> **File Paths:** apache.yml (2)

#### Playbook tasks list
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=0)** - [Narrator] Each play in a playbook contains one or more tasks.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=4)** Each task is run one by one against the targeted host or hosts.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=7)** Each task in the list is completed on the host or hosts before moving onto the next task.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=13)** All hosts in the play get the same tasks.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=16)** It's actually the plays job to map tasks, to hosts they're the glue that sticks it all together.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=21)** The task job is to execute modules on the remote host.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=26)** Idempotent means that an operation can be applied multiple times without changing the result beyond the initial application.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=33)** So if we run a playbook more than once, the results should be exactly the same each time.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=38)** This allows us to run our playbooks as many times as necessary without fear of harming anything.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=43)** Playbooks should be Idempotent if possible.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=46)** Playbooks execute from top to bottom, if any task fails on a host, then that host is taken out of the rotation for other tasks.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=54)** Each time a module is run, the results should be the same, this gives you the flexibility and peace of mind to execute playbooks as often as you want.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=62)** To be idempotent, it helps to have a module check to see if the desired state has already been reached.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=68)** If it has, then it does not execute and instead exits.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=72)** By design many commands run using the shell or command modules will not be idempotent, both shell and command modules run commands.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=81)** Some commands don't change the state such as get facal and as such will be idempotent.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=86)** Other commands modify the state and may run each time the module is executed.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=90)** Rerunning the module again, reruns the commands.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=93)** Ansible provides a creates flag to help make shell and command module task idempotent.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=98)** If a file is to be created, this flag check to see if the file already exists.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=103)** Let's take a look at the task format, every task should have a name.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=107)** This is going to be displayed in the output so be descriptive.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=110)** If it does not have a name, Ansible will use a string fed to the action as the name, most module options are in the form of key value pairs, such as name:httpd and state:latest.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=122)** Command and shell modules however are not in key value pairs, command and shell modules also care about the return code as they're executing commands.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=131)** If a command fails, we need to decide if the operator should be notified or not.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=135)** We can append ||/bin/true after the command or use the ignore errors equals true module option.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=143)** When using some modules, the module arguments can get very long in this case, just break the line and indent it.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=150)** We can also use variables on our task list.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=152)** In this example, I've set the variable web host to rhhost2.[localnet.com](https://localnet.com).
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=157)** Now that I've defined this variable, I can use it in my task list.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-tasks-list?u=76281980&t=160)** I'll talk more about templating later.

> [!info]- Semantic Content
>
> **Code Keywords:** module (8), let (1), case, (1)
> **CLI Commands:** ansible (2), make (1)
> **Analogies:** such as (2)
> **URLs:** [localnet.com](https://localnet.com) (1)
> **Definitions:** means that (1)
> **Speakers:** - [narrator] (1)

#### Playbook change handlers
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=0)** - [Instructor] As I've mentioned before, modules should be idempotent, so you can run a playbook as many times as you want, and the results are always the same.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=7)** If a task is already in the desired state, that task should exit.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=11)** If a task makes a change, we can fire an event using Ansible's basic event system that can be used to respond to that change.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=18)** Let me first talk about how we'd do this without using Ansible's event system and outline the pitfalls.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=23)** Let's say we create a task using the copy module, in this task we copy the apache config file to its appropriate destination on our node.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=30)** After this, we use a service module to restart the service.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=34)** We could make an additional task that ensures that the apache package is updated and restart the service as well.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=40)** The problem is that we're blindly restarting the service, and we may even have more than one task restarted in the apache service unnecessarily.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=47)** To set up a change event, we'd use a notify action at the end of the task block.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=52)** Since a notify is then at the end of a task block, it may be possible that our task calls a notify event more than once.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=58)** Ansible is smart enough to only restart the service one time.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=62)** Also notice that in the notify event, we're not giving specifics on what needs to be done.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=66)** As written, this isn't functional.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=68)** To make it functional, we also need a change handler that carries out the restart process.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=73)** The change handler will look like this.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=75)** The name will match the value of our notify entry, and it will use a service module to restart the apache service.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=81)** We'll talk later about structuring your Ansible files in such a way that all change handlers are together instead of being mixed with your tasks.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=87)** Note that to create two events, we just need to duplicate what we have.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=91)** For instance, if we were using memcache, we would restart it at the same time as apache.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=96)** We'd have to create a change handler called restart memcached to make this functional.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=100)** This will look just like our apache change handler, but it will specify the memcached service.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=105)** The names of these handlers are global, so they have to be unique.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=108)** This can get a bit clumsy if you have a lot of changes in a task.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=111)** Ansible 2.2 and higher can listen to generic topics and notify can trigger them.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=116)** To show how this works, let's assume that we have a task where we want to restart a lot of services.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=121)** You might assume that our handler's name would be restart all web services, and inside of it would be a list of service modules one after the other that restarted what we wanted.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=129)** For instance, httpd, memcached, and bind services.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=133)** This is a pretty hard-coded solution, because we'd need to create handlers for all of the different combinations of services that we'd ever want to restart at one time.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=141)** This is not how we want to use generic topics.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=144)** Let's go back to our task for a moment.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=146)** Notice the value of the notify line was "restart all web services".
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=150)** Instead of making a handler with this name, we'll have multiple handlers listen for this event.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=155)** To do so, we'll use the listen item and specify restart web services.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=159)** By using listen, we can decouple the handler's name from the functionality.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=163)** In essence, we can create groups of tasks that should be triggered by having them all listen to the same thing.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=169)** It's worth noting that the order in which handlers are run is the order they're defined, not the order in which they're called in the notify statement.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/playbook-change-handlers?u=76281980&t=176)** It's also worth noting that if you use the same name for more than one handler, only the last one will run.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (6), ansible (5), make (3), node (1)
> **Code Keywords:** let (4), module (3), this, (1), this. (1)
> **Analogies:** for instance (2), just like (1)
> **Versions:** 2.2 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### Verify Playbooks
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=0)** - To minimize troubleshooting and frustration.
>
> **[0:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=2)** It's a good idea to verify your Ansible playbooks before running them.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=5)** There are several different ways that we can verify Ansible playbook files.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=9)** First we can verify if the YAML is correct using yamllint.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=12)** Also see the video in this chapter covering configuring your editor to syntax highlight for you.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=17)** This will cut down on the number of YAML errors, you introduce into your playbooks.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=21)** In a terminal and RH host one type in CD space, tilde slash Ansible dash files and hit enter and then verify your Ansible playbook by typing in yamllint space Apache dot yml and hit enter.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=35)** Second, we can use Ansible Lint to verify the contents of the playbooks.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=39)** Ansible in does not install by default.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=41)** And as of the time of this recording, wasn't available to install via software repository.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=46)** As such, we'll install it with a Python package installer.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=49)** First, let's install pip in case is not installed.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=52)** Type in sudo space yum space install space dash Y space Python three dash pip and hit enter.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=61)** Type in your password prompted.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=63)** Once that's done, install Ansible Lint via pip, type in clear, and then type in pip three space installs space dash dash user space, Ansible dash lint, and hit enter.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=76)** Now that we have Ansible lint, we can use it to verify our Apache dot yml file.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=80)** Type in clear, type in Ansible dash lint space, Apache dot yml, and hit enter.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=85)** Ansible Lint will give you hints about Ansible syntax and best practices.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=90)** We can see that we have a few items to clean up in our Apache dot yml file.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=93)** The next thing we can do is check the syntax in our playbooks.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=96)** We can use the Ansible playbook command for this with a dash dash check option type in clear type in Ansible dash playbook space dash dash check space, Apache dot yml, and hit enter.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=110)** This runs the playbook through the parser as if it were executing it to verify if all included files, roles and other files have the correct syntax and if the nodes are accessible.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=120)** For this demonstration, I shut down my art shows to VM.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=123)** If you don't want to check the entire playbook, but still want to check one task, we can edit the playbook file.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=129)** Type and clear and then type in vim space Apache dot yml and hit enter.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=133)** Press Z upper case art to expand all folds.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=137)** I had to go into insert mode and after the latest Apache version installed task, add check underscore mode colon space. Yes.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=146)** Now we'll check this one task, even if you haven't specified dash to check on the command line.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=151)** Go ahead and save an exit by pressing escape, Call an ex, exclamation Mark and hitting enter.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=156)** Another nice feature, is that we can check which host will be affected by the playbook by using the dash dash list dash host option.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=163)** Type an Ansible dash playbook, space Apache dot yml space dash dash list dash posts and hit enter.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/verify-playbooks?u=76281980&t=172)** Be sure to integrate these tools into your workflow to speed up your learning Ansible playbooks and the development of your configurations.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (16), apache (8), pip (4), python (2), cd (1)
> **Prerequisites:** install (6)
> **Tools:** terminal (1), vim (1), command line (1)
> **Code Keywords:** default. (1), let (1)
> **Env Vars:** yaml (2)
> **Speakers:** - to (1)


### 3. 2. Creating Reusable Playbooks

#### Create structured configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=0)** - [Instructor] As we've seen, it's fairly easy to create a global Ansible host file in a single Ansible playbook for testing.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=6)** We created both of these in the EX294 Ansible Foundations Course.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=10)** However, your infrastructure configuration will quickly outgrow this very simple setup, and it's a good time to start planning for the future.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=17)** To get our Ansible configuration scheme to scale, we need to create a structure that separates group variables, roles, tasks, and templates.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=25)** This structure will allow us to grow our configuration setup beyond where we are now.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=29)** Before we create our configuration structure, we need to make sure our name resolution is working.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=34)** We need to do this so we can use host names in our Ansible inventory files.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=37)** You can manage name resolution by creating records in a DNS server if you have one, but to keep things simple, we'll configure the ATSE host files on our virtual machines.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=45)** First, get the IP address of rhhost1.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=48)** In a terminal, type in ifconfig and hit enter.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=51)** You can also use the newer IP command if you wish.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=55)** In the VirtualBox lab setup for this EX294 series of courses, we configured two network interfaces, one that attaches to the VirtualBox host network via NAT for accessing the internet.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=65)** The other connector, the internal network named vboxnet0, which our VMs will use to communicate with each other.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=71)** This internal network address should be 192.168.3.0, so find the network interface and the output of ifconfig and configure name resolution for it.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=82)** I can see that my IP address for my enp0s8 interface on rhhost1 is 192.168.3.108.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=90)** This will be the interface on the vboxnet0 internal network.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=94)** Now switch over to your rhhost2 VM and check its interface on the 192.168.3 network, using the ifconfig command again.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=104)** I can see that the address for my enp0s8 interface is 192.168.3.110.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=111)** With this information, we can create our ATSE host files for both VMs.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=116)** Now go back to your rhhost1 VM.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=119)** Type in clear, and then edit the host file by typing in sudo vi /etc/hosts, and hit enter.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=126)** Enter your password if prompted.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=128)** Go into insert mode by pressing the I key, and then add a new line, and add your IP address for rhhost1.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=135)** Mine is 192.168.3.108, space, rhhost1, space rhhost1.[localnet.com](https://localnet.com), and a new line.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=149)** Now type in your IP address for rhhost2.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=151)** Mine would be 192.168.3.110 rhhost2 rhhost2.[localnet.com](https://localnet.com).
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=163)** Save and exit by pressing escape colon x and hitting enter.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=167)** Now let's copy this file to rhhost2 using secure copy.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=171)** Type in scp /etc/hosts root@rhhost2:/etc/hosts,
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=181)** and hit enter.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=183)** Accept the fingerprint if prompted.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=185)** Also type in root's password if it prompts you.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=188)** We had to copy as root because we're copying this file to a system directory in rhhost2.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=193)** If it prompted you for root's password, then your SSH keys are not properly configured.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=197)** You want to use the SSH copy ID command to copy your keys across to the root user's authorized keys file.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=202)** Be sure you do this before moving on.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=204)** Type in SSH-copy-ID root@rhhost2 and hit enter.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=211)** Type in root's password and hit enter again.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=214)** Now let's create our static inventory file.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=217)** On rhhost1, change into your Ansible files directory in your home by typing in CD ~/Ansible-files and hit enter.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=225)** And type in clear.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=227)** We're going to create our structure here.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=228)** Let's start by creating a file called hosts.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=230)** Type in VI host and hit enter.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=233)** Press your I key to go into insert mode and add left square bracket webservers.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=237)** This is our first Ansible group.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=240)** Webservers, right square bracket.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=242)** This is our first Ansible group.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=243)** Now add rhhost2.[localnet.com](https://localnet.com), and a new line.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=248)** For our second group, [dbservers], new line.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=253)** And once again, rhhost3.[localnet.com](https://localnet.com).
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=257)** Since we only have one managed host, we'll put it in both webservers and dbservers groups.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=262)** If you have more managed hosts, you can mix it up a bit and add them here.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=265)** Save and exit by pressing escape colon !
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=268)** and hitting enter.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=270)** Now that we have our static inventory taken care of, let's create a directory for our group variables.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=275)** Type in mkdir group_VARs, and hit enter.
>
> **[4:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=280)** Later, we'll be creating variable files in this directory for all hosts, hosts in the webservers group, and hosts in the dbservers group.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=287)** But for now, we just wanted the directory created.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=289)** Now let's great directories for our roles.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=291)** We'll use BASH's brace expansion to simplify this.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=294)** Type in mkdir -p for parent directories, space roles/{base,webservers,dbservers}
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=308)** /{handlers,tasks,templates} and hit enter.
>
> **[5:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=317)** Now let's look at the results with the tree command.
>
> **[5:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=319)** Type in tree and hit enter.
>
> **[5:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=321)** If you don't have the tree command, you can install it with YUM.
>
> **[5:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=323)** Tree shows that we now have role directories for base, webservers, and dbservers, and inside of each role directory are directors for handlers, tasks, and templates.
>
> **[5:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=332)** The base role will contain configuration information that's common between all hosts.
>
> **[5:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=338)** This would be general send.safe software, networking configuration, and user information.
>
> **[5:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=343)** This directory structure will keep templates, tasks, and change handlers apart and allow us to scale.
>
> **[5:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=348)** It would be very easy to recursively duplicate this entire structure to be modified for other configurations.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/create-structured-configuration?u=76281980&t=353)** It would also be simple to create a GetProject to put all the configuration data under version control.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (9), ssh (3), mkdir (2), make (1), find (1)
> **Code Keywords:** let (6), interface (5), static (2), switch (1), this. (1)
> **Env Vars:** ssh (3), ex294 (2), atse (2), dns (1), nat (1)
> **Versions:** 192.168.3 (6)
> **Prerequisites:** setup (3), configure (2), install (1)
> **URLs:** [localnet.com](https://localnet.com) (4)
> **Tools:** terminal (1), bash (1)
> **Cross-References:** go back to (1)

#### About playbook roles
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=0)** - [Instructor] Roles allow us to group content and allow easy sharing of configuration data for reuse on other systems.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=6)** By using roles, we can automatically load variable files, tasks and handlers, all based on the file system structure.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=13)** There are standard directories that can be used on roles.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=16)** These directories will be automatically processed for the role.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=19)** In this example, the web servers rule.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=21)** Each role has to have at least one of these directories.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=24)** Each directory included must have a main.yml file in it.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=28)** The task directory contains the main list of tasks to be executed by the role.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=33)** The handlers directory contains change handlers used by this role.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=37)** Note that handlers in this directory can also be used outside of the role.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=41)** The files directory contains files that can be deployed by the role.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=44)** The templates directory contains templates for the role.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=47)** The vars directory allows us to store non-default variables for the role.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=52)** The default directory however, stores default variables for the role.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=56)** And lastly, the meta directory defines metadata for the role.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=60)** We may define role dependencies in the meta directory so roles can require other roles.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=65)** In this way, we can make one role a dependency of another role.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=69)** For instance, if we wanted the webservers role to require the apache role, we'd add this to our meta/main.yml file.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=76)** We can also set variables while requiring dependencies.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=79)** Role dependencies are always executed before the role that called them.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=83)** If a role has a dependency for more than one other role, it will not be called twice.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=88)** Ansible is smart enough to only execute the role once.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=91)** That is unless you include allow_duplicates: true to the same meta/main.yml file.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=99)** So this is how it works.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=100)** If the handlers/main.yml file exists, then the handler is listed and it will be added to the play.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=107)** If the vars/main.yml file exists, then the variables listed in it will get added to the play.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=113)** This also goes for the defaults/main.yml file for default variables.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=117)** If the meta/main.yml file exist, any role dependencies listed in it will be added to the list of roles.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=124)** The templates, files and tasks directories are a bit different.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=127)** If these directories exist than those files, templates or tasks can be referenced without providing the relative or absolute path.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=134)** You can use any files, templates or tasks in these directories in other plays, but you'll need to specify the relative or absolute path to them.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=143)** When we specify the role in our plays, we can specify the simple name for the role such as Webservers, or we can include the path to the role.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=151)** In both of these examples, we're saying that for all hosts in the webservers group, apply the role of webservers.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=156)** Ansible will then go into the roles/webservers/test directory, and process main.yml and run whichever task might be listed.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=165)** Note that this is automatic based on the naming of the directory structure.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=168)** With Ansible 2.4 and newer, you can also import into the role from within a task.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=173)** For instance, inside the task for webservers, we could use import role to import the task from an nginx role.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=180)** Roles will only get run once.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/about-playbook-roles?u=76281980&t=182)** For instance, if we have a play call the same role twice, it will only get executed one time.

> [!info]- Semantic Content
>
> **File Paths:** meta/main.yml (3), main.yml (2), handlers/main.yml (1), vars/main.yml (1), defaults/main.yml (1)
> **CLI Commands:** ansible (3), make (1), apache (1), nginx (1)
> **Analogies:** for instance (3), such as (1)
> **Code Keywords:** require (2)
> **Warnings:** note that (2)
> **Code Identifiers:** allow_duplicates (1)
> **Versions:** 2.4 (1)
> **Prerequisites:** you'll need (1)

#### Creating roles
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=0)** - [Instructor] Let's put what we've learned into practice and create a working role.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=3)** We'll start by creating the site dot YML file at the top of our Ansible files directory structure.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=8)** When we run our playbook, we'll specify this file along with our host file in this directory.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=14)** Make sure you're in your Ansible files directory.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=15)** and then type in VIM space site dot YML and hit Enter.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=19)** Once again, if you want to use a graphical editor such as Adam, please do so.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=23)** Go into insert mode by pressing the Iyke, and then add dash dash dash, so it's a YALM file, space hash for comment, space this, playbook.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=34)** This playbook deploys all site configs, Backspace.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=41)** So it's not in a comment, dash space name, colon, space apply, base configuration to all nodes.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=52)** New line, tab, hosts, colon, space all, new line, tab, remote, underscore user, colon, space, route, new line, new line, tab rolls, colon, new line, tab, dash, space, space.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=72)** We're applying this to all hosts, which in our cases that are chose to VIM, we're specifying route for the remote user and executing the base role.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=80)** Now to save, press escape, colon, x exclamation mark, and hit Enter.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=84)** Now let's create the files for the base role, have an VIM space roles, slash base, slash tasks, slash main dot YML and hit Enter.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=94)** Going to insert a mobile president of Iyke, and then add, dash dash dash, again it's a YAML file, Enter, hash, space, This playbook contains base plays for all nodes, new line and Backspace, so it's not a comment, dash, space name, colon, space, install firewalld, new line, Tab, Yum is the module use, space, name equals firewalld, space state equals present, new line, new line, dash, space name, colon, start the firewalld service, new lane, tab service is the module we'll use.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=145)** So service colon, space name equals, firewalld, space, state, equals started, space, enabled equals, yes.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=159)** Notice I'm using the short format, and I have arguments to the YUM service modules, all on one line.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=165)** For short entries like this, it can be a time-saver, save an exit by pressing Escape, colon x exclamation mark and hitting Enter.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=172)** We don't have any change handlers yet or templates, so we won't put anything in those directories.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=177)** To recap, we have a static inventory file at Ansible files slash host, we have a site playbook file at Ansible files, slash site dot YML.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=187)** And we have a file for the base role at Ansible files, slash rules, slash base, slash main dot YML.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=193)** This is a good start, let's run it now.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=195)** Typing clear, they have an Ansible dash playbook, space dash, I, space, hosts, that's our host file, space site dot YML and hit Enter.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=206)** If your syntax was good, it should run.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=208)** If there's an error, Ansible will try to tell you where it is.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/creating-roles?u=76281980&t=211)** In my experience, it's almost always a formatting issue.

> [!info]- Semantic Content
>
> **Env Vars:** yml (6), vim (3), yalm (1), yaml (1), yum (1)
> **CLI Commands:** ansible (7), yum (2), make (1)
> **Code Keywords:** let (3), this, (2), module (2), static (1)
> **Tools:** vim (3)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Static and dynamic content
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=0)** - [Narrator] Although it's possible to write one large playbook that configures every aspect of your infrastructure, it wouldn't be very efficient or portable.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=7)** It's better to break up the playbook into smaller pieces.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=10)** In Ansible, there are three ways of doing this.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=13)** Roles, includes, and imports.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=15)** Roles allow entire configurations to be grouped, including tasks, variables, handlers, and modules.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=21)** These roles can also be shared on Ansible galaxy, so others can utilize them.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=25)** Includes and imports work a bit different than roles.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=28)** However, all three will allow you to parcel up large playbooks into smaller pieces.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=32)** To understand the differences between roles, includes and, imports, we need to understand that Ansible has two modes in which it utilizes reusable content.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=40)** The first mode is static, which is preprocessed at the time of playbook parsing.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=44)** This content is processed when we run the playbook.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=47)** The second mode is dynamic, which is processed during runtime.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=50)** Ansible doesn't process this content until the task is used.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=54)** Up until Ansible 2.3, all roles were static, which meant they were processed at the time of playbook parsing.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=60)** With Ansible 2.3 and newer, we can now reuse a role dynamically with include_role.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=66)** Ansible doesn't run this content until that include is used.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=70)** Ansible uses the term include when it's dynamic.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=73)** Ansible sticks with the same naming scheme for includes and imports.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=77)** Any include statements, such as include_role, for reusing roles, and include_tasks, for reusing tasks, are dynamic.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=84)** Before Ansible 2.4, only the include statement was available, but you could include playbooks or tasks with it.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=90)** And it behaved differently depending on context.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=93)** It could be dynamic or static, depending on what Ansible decided.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=97)** This statement has been deprecated.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=99)** Any import, including import_playbook, for reusing whole playbooks, import_role, for reusing roles, and import_tasks, for reusing tasks, will be static.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=109)** By using include or import statements, we can decide if we want to reuse plays, roles, and tasks in a static or dynamic manner.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=117)** Static and dynamic content can be mixed, but it's not recommended, as it makes it difficult to troubleshoot playbooks.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=123)** There are some advantages of using include.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=125)** For instance, includes work in loops.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=128)** And includes work in loops because include is dynamic, and doesn't get processed until Ansible gets to it.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=134)** So for each iteration, Ansible processes it again.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=137)** There are some instances where a dynamic include doesn't work.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=141)** For instance, you can't use a notify to trigger a handler name that's inside an include, because that code hasn't been processed yet.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=147)** And Ansible is not aware of the name yet.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=149)** You can, however, trigger the entire include, but all tasks in the include will run.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=154)** There are also advantages and disadvantages to using import methods.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=158)** Import methods cannot be used in loops as the import is processed at playbook parsing.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=162)** When using import, you cannot use variables from inventory sources for role names.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=167)** These inventory files would be hosting group vars files.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=171)** Lastly, handlers will not be triggered when notified by their name, because importing overwrites the handler's name with the importer task list.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=179)** Don't worry too much about the limitations of these two methods at this time.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=182)** You mostly will not run into problems at this stage of learning.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/static-and-dynamic-content?u=76281980&t=185)** Just keep them in mind, and revisit these slides later.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (14)
> **Code Keywords:** static (6), import, (2), include, (2), this. (1), include. (1)
> **Code Identifiers:** include_role (2), include_tasks (1), import_playbook (1), import_role (1), import_tasks (1)
> **Versions:** 2.3 (2), 2.4 (1)
> **Analogies:** for instance (2), such as (1)
> **Best Practices:** recommended (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### Using includes in Playbooks
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=0)** - [Instructor] Now let's use includes in playbooks.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=3)** In our choice one be sure that you're in your ansible files directory.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=6)** Now change into your web service task directory.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=8)** Type cd space roles slash web servers, slash tasks and hit Enter.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=15)** Let's create a file here called main.yml.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=18)** Type in vim space main.yml and hit Enter.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=22)** Go into insert mode by pressing the I key and add dash dash dash because this is a YAML file new line dash space include colon space install underscore apache.yml.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=37)** We're going to dynamically call a YAML file called install underscore apache.yml.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=42)** Notice that we didn't have to include a path.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=44)** Ansible will know to look for it within the test directory.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=48)** Now save an exit by pressing Escape colon x exclamation mark and hitting Enter.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=53)** Using this method we could later include other plays that would install other web server based software.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=58)** Remember this is the web server role so you want to restrict what you do here to that purpose.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=64)** Now let's create the install apache YAML file.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=67)** Type in vim space install underscore apache.yml and hit Enter.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=72)** Once again go into the insert mode and type dash dash dash and hit Enter.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=77)** Now we'll start with a comment hash space install space apache new line backspace for our first task type in dash space name colon, space install space apache that's the name of it.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=94)** New Line Tab we'll use the yum module.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=98)** Yum colon space name equals httpd space state equals present
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=107)** new line this will ensure the package is installed.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=111)** Our second task, rephrase for our second task type in dash space name colon we'll name it apache service state.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=122)** New line we'll use a service module.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=125)** Type in service colon space name equals httpd space state equals started space enabled equals yes.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=139)** New line the third task will be named start firewalld.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=143)** Type in dash space name colon space start space firewalld.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=149)** New line for this one we'll use the service module.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=153)** Tab service colon space name equals firewalld.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=158)** (keyboard typing) Space state equals started space enabled equals yes.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=166)** New line this will ensure the firewall is started now as well as a boot.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=171)** For our last task type in dash space name colon space add firewall rule for apache.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=179)** New line for this we'll use a firewalld module.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=183)** Tab firewalld colon space and for options port equals 80.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=190)** Slash TCP space permanent equals true.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=196)** Space state equals enabled.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=199)** Space immediate equals yes.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=203)** This opens a hole in the firewall for web traffic.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=206)** I'm using the short format for module options again because it shortens the text quite a lot.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=211)** We could have put all of this information in the main.yml file that we just created but including is the first step to making your code reusable.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=219)** Now save an exit by pressing Escape colon x exclamation mark and hitting Enter.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=223)** Currently if we run our playbook this configuration won't run because we're not calling the role.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=228)** Let's go back to our main ansible files directory and add the web servers role.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=232)** Type in cd space (mumbles) slash ansible files and hit Enter.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=237)** Now edit the site.yml file by typing in vim space site.yml and hitting Enter.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=243)** Now expand all fold by pressing Z uppercase R.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=248)** Go into insert mode by pressing the I key and go to the bottom of the file.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=252)** Now add dash space name colon space configure webservers.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=260)** New line Tab hosts colon space webservers as the ansible group web servers.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=269)** New line Tab remote user colon root.
>
> **[4:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=276)** New line new line Tab roles colon new line Tab dash space web servers.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=286)** Now our main playbook file says that all hosts in the web servers ansible group run the web servers role.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=291)** Save and exit by pressing Escape colon x exclamation mark and hitting Enter.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=297)** Now let's run the playbook file type in ansible dash playbook space dash I space hosts space site.yml and hit Enter.
>
> **[5:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=307)** If there are errors you'll want to fix them now.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=311)** In summary we changed the site.yml file that map the web servers role to the web servers ansible group of hosts.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-includes-in-playbooks?u=76281980&t=318)** we created the roles slash web service slash main.yml file which uses and include to use dynamic content from roles slash web servers slash install underscore apache.yml which installs apache configures the firewall and make sure services are running.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (10), ansible (8), cd (2), yum (2), make (1)
> **File Paths:** main.yml (4), apache.yml (4), site.yml (4)
> **Code Keywords:** let (5), module (5)
> **Prerequisites:** install (8), configure (1)
> **Env Vars:** yaml (3), tcp (1)
> **Tools:** vim (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)


### 4. 3. Using Variables

#### Setting inventory and playbook variables
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=0)** - Although it can be an incredible time-saver to create static configurations and push them out to nodes, we often need more flexibility.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=7)** For instance, we may want to include the IP address of the host in its own configuration or in the configuration of another node.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=14)** In setting up a name resolution we put the IP addresses of rhhost1 and rhhost2 in our etc host file.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=20)** Instead of hard coding the address in the file, we can provide a variable that is populated from another source if we are configuring our systems with Ansible.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=28)** Before we can start using variables, we need to follow some guidelines as far as naming them.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=32)** Variable names can contain letters, numbers, and underscores.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=36)** Also, variable names should always start with a letter.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=39)** Valid variable names could be, rhhost2 underscore port or rhhost2port.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=44)** Assigning variables is pretty similar to other systems.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=47)** For instance, to assign a value to rhhost2 underscore port we'd type the variable name equals and then the value.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=54)** Invalid variable names would be rhhost2 dash port, rhhost2 space port and rhhost2 dot port.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=62)** Ansible also support dictionaries that hold key value pairs.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=66)** For instance, for rhhost2 we can assign values to SSH port and web port.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=72)** We would access each specific field in the dictionary by specifying the name of the dictionary and then the name of the key inside square brackets.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=79)** There is also a dotted notation, but I'll avoid using it as there can be conflicts with Python methods.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=85)** It looks like this, dictionary name dot in the key.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=88)** We can also set variables in our inventory file.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=91)** Our inventory file is in INI format so it looks like this.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=94)** To add a variable you just had a space at the end of the node and add the key value pair.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=99)** The same inventory file would look like this in the YAML format.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=103)** For simple inventory setups I think INI is better.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=106)** It's shorter and easier to read and the YAML format we add entries after the host name with our variables and values.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=112)** However, if you want to set a lot of variables, INI format very quickly becomes clumsy.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=118)** I don't find this easier to read at all.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=120)** When my inventory starts to get complex, I then move my variables somewhere else, or switch to YAML format.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=126)** The same information in the YAML format would look like this, which I find easier to read.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=130)** I can quickly scan the file and know which variables belong to which hosts.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=133)** If you want to set a variable for all nodes in an Ansible group, you'd structure it a bit differently.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=138)** In INI format, we create a new variable section that matches the Ansible group.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=142)** To set variables for our group in YAML from format, you just add a vars section.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=147)** I find group variables easier to read in either INI or YAML formats.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=151)** We can also set variables in our playbooks.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=153)** This is our site dot YMI file with a vars section.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=157)** You may remember that when we created our Ansible files directory structure, we created a group vars directory.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=162)** We can create a file in that directory named after the group and put our variables in it.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=166)** For instance, for the web service group, we'd create Ansible files, slash group vars, slash web servers and inside of that, we'd add our variables.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=174)** I need to add one more node that's specific to my example, choice a variables.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=177)** I've been specifying SSH port in my examples.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=180)** This is a valid variable that we can define for the SSH service, but keep in mind that setting the SSH port this way only affects open SSH connections.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=189)** If you use impair AMECO, it won't use this value.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/setting-inventory-and-playbook-variables?u=76281980&t=192)** Just keep this in mind if you're using this variable in your configuration.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (6), ssh (5), node (3), find (3), python (1)
> **Env Vars:** yaml (6), ssh (5), ini (5), ymi (1), ameco (1)
> **Code Keywords:** this, (2), static (1), this. (1), else, (1), switch (1)
> **Analogies:** for instance (4), similar to (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - although (1)

#### Using variables
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=0)** - [Instructor] Once we've set some variables, we need to use them.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=3)** We can do this various ways, including using them in playbooks directly and in Jinja2 templates.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=9)** Let's start by creating a file of variables for all host and web servers group.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=13)** In a terminal on rhhost1, change to your Ansible files directory by typing in cd space, tilde, slash, Ansible dash files and hit enter.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=20)** And then list the contents with ls.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=23)** We can see that group vars directory that we created in this course.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=27)** In this directory, we can create files named after our Ansible groups, such as web service and DB servers.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=33)** In those files, we can put variables for hosts that are in those Ansible groups.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=36)** For instance, a file for web servers and a file for DB servers.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=41)** If those variable files get too large, you can also put a directory with a group name in group vars and all files and the director will get processed.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=48)** For instance, we could have a web service directory and then separate files for servers in different geographical locations, such as Seattle, San Francisco and New York.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=56)** Note that the variables are applied to host in the web server Ansible group.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=60)** Ansible doesn't automatically apply to servers in different locations.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=63)** The Seattle, San Francisco and New York names are just a way for us to break up our variables into different files.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=69)** It doesn't really matter what you call the files.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=72)** Also note that if you want variables managed in a separate file for a specific host, you can create a directory called host underscore vars and place files with the variables in them according to each host if you want that sort of granularity.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=84)** You could have a file for rhhost2, rhhost3 and rhhost4.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=88)** These names will have to match those in your inventory file.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=91)** Let's create a file in the group vars directory, called web servers, and we'll add a variable for the web port number to it.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=97)** Type in vim, space, group, underscore vars, slash, web servers and hit enter.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=105)** Go into insert mode by pressing "I" key and add dash dash dash, because it's a YML file, new line, hash, space, variables for the web service group.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=118)** New Line and for the variable type in httpd, underscore port, colon, space 80.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=127)** This variable will contain a web server port number.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=130)** Now save and exit by pressing escape, colon X, exclamation mark and hitting enter.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=136)** Now let's go to our web server role and change its name dot YML file.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=139)** Type in CD, space roles, slash web servers, slash tasks and get a listing by typing in ls.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=146)** We can see that we have two files in this directory, main dot YML and install underscore Apache dot YML.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=152)** The main dot YML file only includes the install Apache file so let's edit the latter.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=156)** Type in vim space, install underscore Apache dot YML, and hit enter.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=162)** You'll notice on the last line we're setting a firewall rule to allow web traffic through.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=166)** Let's use our variable here.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=168)** Go into insert mode by pressing the "I" key and then change 80 slash tcp to left curly bracket, left curly bracket, space httpd, underscore port, that's the variable name, space, right curly bracket, right curly bracket, slash tcp.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=187)** Now the variable we set for the web server the group should get used here.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=190)** Save and exit by pressing escape, colon X, exclamation mark and hitting enter.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=195)** Now let's go back to our Ansible files directory and run the playbook.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=198)** Type in cd, space, tilde, slash Ansible dash files, and hit enter.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=202)** To run the playbook type in Ansible, dash, playbook, space dot i hosts, space, site dot YML and hit enter.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=212)** If you get any error messages here, work through the problems before continuing.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=218)** We can also use variables in Jinja2 templates.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=221)** For instance, you can use a template in your playbook like this.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=224)** In this line we specify a source template file, which is httpd dot conf dot j2.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=229)** The destination is going to be the value of the Apache underscore path variable slash httpb dot conf.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=235)** We might do this because Red Hat in place the Apache configuration file in different locations.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=240)** The httpd dot conf dot J2 template file would be an unconfigured httpd dot conf file with variables for any value that we want to set.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=248)** When we deploy the file the variables will get filled in and the files saved as httpd dot conf.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=254)** Jinja2 gives us a great deal of power for transforming the content of our variables using filters.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=260)** I can't cover all filters here as there are many.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=262)** However, I'll give you a couple of examples.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=265)** If you want to include a default value in case it doesn't set specify it using the default filter.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=269)** In this case, if httpd underscore port isn't sent anywhere, then 80 will be used.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=275)** There are list filters that let you return the minimum or maximum number in a list.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=279)** In this example, the list name was num underscore list.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=282)** There are a random number generators.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=284)** This filter will return a number between zero and 60.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=287)** There's also a random mac address generator.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=289)** We can specify the string prefix to make the MAC address appear to be from a certain manufacturer.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=294)** There are filters for formatting data, list filters, dictionary filters, math filters, JSON query filters, an IP address filter that can test if a number is a valid IP address, hashing filters that will take a value and return a SHA1 or MD5 hash, URL split filters, regular expression filters and many many more.
>
> **[5:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=316)** See the complete list of filters by visiting the Ansbile playbook filters web page.
>
> **[5:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=320)** There's one more thing that I want to talk about concerning variables.
>
> **[5:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=324)** YML supports JSON style maps and here's the format.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=327)** Look familiar?
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=327)** Ansible variables use a very similar syntax as JSON maps, but JSON maps use single curly brackets.
>
> **[5:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=334)** To keep Ansible from thinking your variable is a JSON map or dictionary, you should quote it.
>
> **[5:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=339)** For instance, the line we added in our install Apache dot YML file could be this with included quotation marks.
>
> **[5:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=345)** I recommend quoting variables whenever possible.
>
> **[5:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-variables?u=76281980&t=348)** They may work without quoting, but quoting tells Ansible that it's a variable and not a dictionary or map.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (12), apache (6), cd (3), ls (2), make (1)
> **Env Vars:** yml (9), json (5), mac (1), sha1 (1), md5 (1)
> **Code Keywords:** let (7), this. (1), case, (1)
> **Analogies:** for instance (4), such as (2)
> **Prerequisites:** install (4)
> **Tools:** vim (2), terminal (1)
> **Exercise Files:** template (3)
> **Definitions:** is a  (2)

#### Registering variables
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=0)** - [Instructor] In BASH and some other languages we can run commands and have the output assigned to a variable such as this.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=6)** This runs the command whoami and assigns the output to the variable named NAME.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=10)** We can do something similar with Ansible variables by registering the result of a task as a variable.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=16)** When you execute a task and save the returned value in a variable for later use, you create a registered variable.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=22)** For instance, this task will use a shell module to run the GREP command to count the number of authentication failures in /var/log/messages.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=30)** The standard out will be stored in the message_contents variable.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=35)** Once we have the data in the variable, we can create a condition that acts on it.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=39)** We won't go into conditions right now, as it's not on the scope of this particular video, but this is the syntax.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=44)** Our condition runs a script called lockdown.sh when the value in the message_contents variable is equal to five.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=51)** This is a fictitious example but will give you an idea of how to use registered variables with the condition.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=57)** Depending on the module you use the output may vary.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=60)** The documentation for modules that return data will include a return value section which describes that data.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=66)** Let's look at the documentation for the shell module.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=68)** In a terminal type in ansible dash dock space shell.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=73)** Now go to the bottom of the document until you get to return values.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=77)** We can see that the output is more complex than just text to standard out.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=80)** It's a complex data structure containing the standard out, but much more including the command string, when the command was executed and when it finished.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=88)** To see the values returned for a particular task you can run your playbook with a -v option.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=93)** Let's go to our ansible files directory and run our playbook.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=96)** First, type Q, and then type on cd ~/anisble-files/ and hit enter.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=102)** Type in clear and then type in ansible-playbook
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=106)** - i hosts site.yml -v and hit enter.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=116)** We can scroll up through this output and see the returned values for all of the modules we've used.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=121)** Registered variables are host-level variables that are only stored in memory.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=125)** Registered variables are only valid during the time the playbook is being run.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=129)** Facts are also host-level variables depending on the cache plugin that Ansible installation is using.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables?u=76281980&t=135)** We'll also talk about facts in this course.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (5), grep (1), cd (1)
> **Code Keywords:** module (3), let (2), this. (1), var (1)
> **Env Vars:** bash (1), name (1), grep (1)
> **UI Navigation:** go to (2), scroll up (1)
> **File Paths:** lockdown.sh (1), site.yml (1)
> **Code Identifiers:** message_contents (2)
> **Documentation:** the documentation (2)
> **Tools:** bash (1), terminal (1)

#### Discovering variables from facts
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=0)** - [Instructor] Ansible facts are properties that are collected by Ansible When it runs a playbook on a remote system.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=5)** The fact contains useful information about the host.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=8)** Let's take a look at some facts.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=9)** We'll use the Ansible command along with the setup module to retrieve the facts about the host and our web servers Ansible group.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=15)** In a terminal r h host one type in Ansible space web servers space dash M space setup and hit enter.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=24)** Now scroll through the output.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=27)** The set up module gives a lot of data to dig through.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=29)** However we can filter this output so we only see what we want.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=33)** For instance, let's return the IP address.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=36)** Bring your line back and add to the end space dash A space double quote, filter equals asterisk E N P zero S eight double quote.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=48)** This should give us information about the enp0s8 network device.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=51)** If your network never device is named something different enter that now.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=56)** Scroll up again and take note of how it's structured in a hierarchy.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=59)** The top level of the dictionary is Ansible facts.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=61)** Unansible facts is Ansible underscore enp0s8 take note of this name.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=67)** Under that is a dictionary of key value pairs including active device, features and IPV four, which is what we're interested in.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=76)** Under IPV four, we have another dictionary including address, broadcast, netmask and network.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=83)** Basically, all of the important interface specific network information is right there.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=89)** We can't just access these items as a simple variable such as address because there may be more than one item with that name.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=95)** We need to request the entire nest of the structure with the path, to the, that we want.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=99)** For instance, we need to specify the Ansible facts namespace, the enp0s8 network device, IPV four and finally, the item we want such as address.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=108)** Normally we'll use facts in a conditional, such as taking for the OS family type.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=113)** If the OS family is Redhat, then use the yum module and so on.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=117)** To help you see how to retrieve facts let's create a short playbook.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=121)** Go to your Ansible files directory first type in CD space, tilde slash Ansible dash files and hit enter.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=128)** And then create a new playbook called Ansible dash facts dot YML type in VIM space, Ansible dash facts dot YML and hit enter.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=138)** Go into insert mode by pressing the I key and then add dash dash dash because it's a YAML file.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=144)** New line dash space hosts, colon space, web servers, new line tab tasks, colon, new line tab tab dash space name colon space, Ansible facts, new lane tab tab tab, debug colon, new line tab tab tab tab M S G colon, that's our message.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=175)** Double quote, double left curly braces, space Ansible, underscore facts, as the namespace, left square bracket, a single quote, enp0s8 that's our network device, single quote, right square bracket, left square bracket, single quote, IPV four single quote, right square bracket, left square bracket, single quote, and now address single quote right square bracket space double right curly braces, and double quote.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=206)** Note for the network device we don't need to enter Ansible underscore enp0s8 as it appeared in our earlier output.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=213)** The network device name alone is sufficient.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=216)** Save an exit by pressing escape, colon X exclamation mark and hitting enter.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=220)** This playbook file is also included in the exercise files for this chapter.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=224)** Now let's run the playbook.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=226)** Type in Ansible dash playbook space dash I space hosts space Ansible dash facts dot YML and hit enter.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=235)** Near the middle of the output, you can see the IP address.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=238)** Using this very short playbook, you can try to retrieving different Ansible facts.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=242)** You can use these facts just like you'd use any variable on Ansible.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=246)** Mostly you'll use facts in conditionals.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=248)** It's very common to run different models depending on the operating system type.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=252)** Ansible also provides magic variables for accessing information on other hosts.
>
> **[4:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=256)** Magic variable names of reserved.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=258)** Magic variables cannot be set by the user and there are many, many magic variables which you can get a list of on Ansible's magic variable documentation page.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=267)** The most commonly used magic variables are hostvars, groups, group names and inventory hostname.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=273)** The one I use the most is hostvars.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=275)** It allows us to access variables on other hosts easily.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=278)** This might include Ansible facts or other variables, for instance, to get the distribution type of rhhost2.[localnet.com](https://localnet.com), we'd use host bars to access the Ansible facts namespace and the distribution item.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=291)** Magic variables can sometimes seem like a shortcut to Ansible facts.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=295)** You can even loop through information retrieved through magic variables.
>
> **[4:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/discovering-variables-from-facts?u=76281980&t=298)** In this case, we're looping through hosts in the web service group and getting the IP address for each host.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (24), yum (1), cd (1)
> **Code Keywords:** let (4), module (3), type. (2), interface (1), finally, (1)
> **Env Vars:** ipv (4), yml (3), vim (1), yaml (1)
> **Analogies:** for instance (3), such as (3), just like (1)
> **Prerequisites:** setup (2), set up (1)
> **Tools:** terminal (1), vim (1)
> **UI Navigation:** scroll up (1), go to (1)
> **URLs:** [localnet.com](https://localnet.com) (1)


### 5. 4. Using Flow Control

#### The when statement
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=0)** - [Instructor] Instead of creating complete configuration specific to each host or group of host, it can be advantageous to create generic configurations that have conditionals in them.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=9)** For instance, if you have some Red Hat based systems as well as Debian based systems, you may want to store configuration files in different locations or use different package managers.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=18)** If we use conditionals in our configuration files, we can have one playbook that can work on multiple different host operating systems.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=26)** It's fairly easy in Ansible to create a task that will do something only if the condition exists.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=31)** For this we'll use the when conditional clause, just like any task will give it a descriptive name.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=36)** The next line will be the command that we'll execute using the command module.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=40)** In our case, it will be the RPM command, which is Red Hat specific.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=44)** The last line will be our conditional using the when clause when OS family is equal to Red Hat and the distribution version is equal to seven, run the command.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=53)** We could create a second task that would be Red Hat 8 specific.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=57)** If OS family is equal to Red Hat and the distribution version is equal to eight run a different command string using the command module.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=64)** There are a couple of things to note in the syntax, I'm using two different syntaxes for using Ansible facts.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=70)** The top condition uses the ansible_os_family form of referencing a fact.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=76)** This is the old syntax but will probably still work in the future.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=80)** It's recommended to use a second syntax which uses Ansible facts and then references the OS family item.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=86)** This is longer, but it is the preferred method.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=89)** Also note that when using the variables within a condition, we do not need to surround them in double curly braces.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=95)** It works fine in conditionals to directly access variables without the braces.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=99)** We can also group conditions using parentheses, this allows us to use more complex logic.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=104)** In this example, we're checking if the distribution is sent as version 8 or Red Hat version 8, this won't match Centos version 7 or Red Hat version 7.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=115)** The syntax can get pretty messy with his long lines and tiny text to fit on the screen, which I had a hard time getting on the slide.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=120)** There is a solution for some situations, if all conditions need to evaluate is true, we can put them in a yum list which is easier to read.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=129)** This checks if the distribution is Centos and the version is eight in a nice clean yum list.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=135)** Jinja2 includes test and filters with process Ansible variable data.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=139)** For instance, using a filter you can convert text to uppercase.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=144)** Jinja2 tests are different from filters in that their way of evaluating template expressions and returning true or false.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=150)** There's a test that checks if the return code of a command failed called is failed.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=155)** To check the success of a command use is succeeded.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=159)** There're older versions of both of these named is fail and is success, these work as well.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=165)** To check if something is a certain size numerically, use greater than by using is space ge and less than by using is space le.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=174)** If this feels a lot like the test command in Bash you'd be right.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=177)** We can test if something is a file, directory, a link or even if text matches using a regular expression and many more.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=185)** See the Ansible documentation for more information about test.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=188)** Jinja2 test return true or false making them a perfect match for the Ansible when condition.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=194)** My next example shows a running fictitious command named admin and registering the outcome to the variable name result.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=200)** We're also ignoring errors, if the command fails we use the command module to run the logger command with a fail message, if the command succeeds, we log a success message.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=210)** The command we run could be anything.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=213)** The Bash equivalent to this would look like this.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=216)** We'd run the fictitious admin command and redirect errors to dev null, then check the result using a Bash test and then run the appropriate command depending on the return code.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=225)** If you're familiar with Bash or other scripting languages this may help you understand how Ansible accomplishes the same thing.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=232)** The last example we'll look at is using Jinja2 to match text patterns.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=237)** First, we set the value of a variable to a web URL, then we create three tasks.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=242)** The first one uses is match, to look for a text match anchored to the beginning of the line.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=247)** Is search, looks in the URL for the provided criteria, in this case the name user1 and lastly is regex, matches the regular expression against the URL.
>
> **[4:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=256)** This would be similar to using pattern matching inside double square brackets in Bash.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=260)** The examples I've given you are just the tip of the iceberg, you can use the when clause to execute commands, include tasks in playbooks or even decide if a certain version of a package needs to be installed based on the values of one or more variables.
>
> **[4:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/the-when-statement?u=76281980&t=272)** The when clause when combined with Jinja2 test is powerful and you'll be using it a lot in your configurations, so I recommend becoming familiar with it.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (7), yum (2)
> **Code Keywords:** module (3), case, (1), this. (1), match, (1)
> **Tools:** bash (5)
> **Env Vars:** url (3), rpm (1)
> **Versions:** version 8 (2), version 7 (2)
> **Analogies:** for instance (2), just like (1), similar to (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** ansible_os_family (1)

#### Looping methods in Ansible
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=0)** - [Instructor] There are two different methods of looping through data in Ansible with underscore and loop.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=6)** The original method use the with keyword followed by a lookup plugin.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=9)** There are many different lookup plugins available.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=11)** You can see a list by typing into a terminal Ansible dash doc space dash t space lookup space dash l for list and hit Enter.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=20)** We can see that we have lookup plugins for CSV files, dictionaries, files which reads file contents, file glob which reads file names by pattern, file tree which shows a recursive directory list, items for a list of items, nested for nested data structures, sequence, vars and many others.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=40)** To see the documentation for a certain lookup plugins such as the items plugin type in Q to quit and then type in Ansible dash doc space dash t space lookup space items and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=52)** And this will show you the documentation for the items lookup plugin.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=54)** Use with underscore items to loop through a list of items.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=58)** The loop keyword which is equivalent to with underscore items is new and the best choice in that situation.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=64)** You may have to convert the data using a lookup plugin into a list so loop can process it.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=69)** The loop keyword requires a list and will not accept a string as it doesn't consider strings as being iterables.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=75)** You can use the query keyword to invoke a lookup plug in return the list.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=79)** The loop keyword is not a 100% replacement for lookup plugins, at least not for now.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=85)** Loop can replace roughly 10 out of the 70 or so lookup plugins.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=89)** The remaining plugins may be replaced using the query keyword to invoke a lookup plugin.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=93)** This allows us to take advantage of the power of lookup plugins while still using the newer loop keyword.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=99)** To loop through a list using the loop keyword, you would use this syntax.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=103)** As I've mentioned, loop only accepts lists which we've given it.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=107)** Lookup plugins by default give a string of comma separated values.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=111)** We can convert this content to a list using the query keyword.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=115)** This would use query to convert the hostnames from text into a list and pass that list to loop for iteration.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=121)** Another difference dimension is that look up plugins such as with underscore items perform implicit single level flattening.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=127)** This means that hierarchies are flattened one level.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=130)** The loop keyword does not do this.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=132)** If you're moving from a lookup plugin to loop, you may have to change your data somewhat, or use a lookup plugin with query.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=139)** For instance, iterating using with underscore items would look like this.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=143)** Because we have a list with another list in it, the items plug in will flatten the list one level.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=148)** The loop keyword does not flatten lists, so we need to pull in the flattened keyword.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=152)** The loop equivalent including the single level flattening using flatten would look like this.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=157)** This is not as easy to read because it has to take the items and send them to flatten in order to squash them on one level.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=162)** It will work fine, but arguably the with underscore items loop is shorter and easier to read.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=168)** In summary, you should use loop whenever possible because it's the future.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-methods-in-ansible?u=76281980&t=171)** However, when it doesn't do what you want, you can call a lookup plugin using loop and query or use the with underscore lookup plugin keywords.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), pass (1)
> **CLI Commands:** ansible (3)
> **Analogies:** such as (2), for instance (1)
> **Documentation:** the documentation (2)
> **Env Vars:** csv (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Looping with lists
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=0)** - [Instructor] We'll start talking about looping by using the loop keyword and when necessary switch over to the with_ look up plugin keyword.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=8)** Looping over items can be very simple and clean.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=11)** The loop keyword only loops over lists, so if you give it a list of things it'll be nice and simple.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=17)** In this example, we're installing software using the yum module.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=20)** We're specifying a variable named Item, and the state as present.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=24)** We're then iterating through a list of packages using the loop keyword.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=28)** Each item in the loop is placed in the item variable.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=31)** The naming of this variable's automatic, although it is possible to override the name.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=35)** We might need to override it if we had a nested loop, because the inside loop would override the contents of the variable and mess up the outside loop.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=44)** The syntax of using with_items: in this example is exactly the same.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=49)** You will see a lot of examples using with_items:, and there's nothing wrong with that.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=53)** Although Ansible is moving towards using loop in the future, so be aware.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=57)** We can shorten this play further by placing the package names in a list called base_packages.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=63)** This could be assigned in the group_vars directory if the host in question is in the group, or we could add the variable to the playbook.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=70)** We could name this variable anything we want.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=73)** Let's go to our rhhost1 VM and put this into practice.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=76)** Change into your Ansible files base roll directory.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=79)** To do so, type in cd ~/ansible-files/roles/base/tasks/
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=89)** and hit Enter.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=90)** Now let's edit our main.yml file.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=93)** Type in vim main.yml and hit enter.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=96)** We can see that we're already installing the firewalld package here.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=100)** Let's also install two other packages, but let's put them in a list instead.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=104)** Go into insert mode by pressing the I key, and then change your - name: Install firewalld line to Install base packages.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=118)** And then for the next line, change it to yum: "name={{ item }} state=present".
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=135)** And now let's add a loop.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=136)** Add a new line, Tab loop: "{{ base_packages }}".
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=152)** This will allow us to loop through the items in the base_packages variable.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=156)** Now we need to set this variable in the group_vars directory.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=159)** Save and exit by pressing Escape :X! and hitting enter.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=164)** Now change to ansible-files/group_vars directory.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=168)** Type in cd ~/ansible-files/group_vars/ and hit Enter.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=176)** We need to create a file here named All for the All group.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=179)** Note that we can't create a file for base because base isn't a group, it's a role, so we'll apply this list to the All group, which includes All Host.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=187)** Another way to solve this problem is to create a base group.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=190)** Type in vim all and hit Enter.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=195)** Go into insert mode and add "---" because it's a .yml file, new line, # Variables for the all group.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=206)** New line, and then the variable name, base_packages:, new line.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=214)** Space space, - python3-libeselinux, new line, space space, - python3-libesemanage new line, space space, - firewalld.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=234)** You can add other packages to this variable if you wish.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=237)** To save and exit, press Escape :X!, and hit Enter.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=242)** Now test it by going back to your Ansible files directory.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=245)** You can use a "cd .." shortcut for that.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=248)** Now run the playbook by typing in ansible-playbook -i hosts site.yml, and hit Enter.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=258)** If there are any errors, fix them now.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=262)** We've used the loop to install packages from a list, stored in a group variable.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=266)** There's nothing wrong with what we've done; however, be aware that some modules, such as yum, can accept list of arguments directly, and thus don't need a loop at all.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=274)** Passing yum the list directly is more efficient and faster.
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-lists?u=76281980&t=277)** However, tasks such as creating users, adding firewall rules, or restarting services can only operate on one item at a time, and as such will benefit from loops.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (7), yum (4), cd (3), python3 (2)
> **Code Keywords:** let (5), override (3), switch (1), module (1)
> **Code Identifiers:** base_packages (4), group_vars (4), with_items (2)
> **Prerequisites:** install (4)
> **File Paths:** main.yml (2), site.yml (1)
> **Warnings:** be aware (2), note that (1)
> **Tools:** vim (2)
> **Analogies:** such as (2)

#### Looping with dictionaries
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=0)** - [Instructor] I can't possibly demonstrate how to use loops in every situation.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=4)** There are over 70 different lookup plugins that can be used to loop through different types of data.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=8)** Instead, I'm going to show you how to loop through several types of data structures.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=12)** I think this is a better use of our time.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=14)** We've already looped through a list of items.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=17)** Often we may want to loop through a list of key value pairs, for instance, if we wanted to create new users, and specify which group each user should belong to.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=25)** Let's do this now.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=26)** On rhhost1, go to your ansible-files roles/base/tasks directory by typing in "cd ~/ansible-files/roles/base/tasks",
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=39)** and hit Enter.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=40)** Edit the main.yml file by typing "vim main.yml", and hit Enter.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=46)** Expand all folds by typing in "zR", and add a new task by going to the end.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=52)** Go into insert mode by pressing the I key, and then type in "- name: Add users", new line, Tab, "user:", new line, Tab, Tab, "name: "{{ item.name }}"",
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=77)** new line, Tab, Tab, "state: present", new line, Tab, Tab, "groups: "{{ item.groups }}"",
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=96)** new line, and now we'll add a loop.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=99)** Tab, "loop:", new line.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=102)** Tab, tab, "- { name: 'webadmin1'",
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=114)** that's the username, ", groups: 'wheel'", that's our group name, " }".
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=125)** This'll add a username webadmin1, and put them in the wheel group.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=129)** New line, Tab, Tab, "- { name: 'webadmin2', groups: 'apache' }".
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=148)** This will allow us to loop through the items, extract name and groups, and pass those to the user module.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=153)** Now, save it by pressing Escape, ":x!", and hitting Enter.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=158)** Now, let's run it by typing in "cd ~/ansible-files/", and hit Enter, and then type in "ansible-playbook -i hosts site.yml", and hit Enter.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=171)** You should be able to see the users being created.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=176)** You can check quickly by using SSH, since we've preshared the keys.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=179)** Type in "clear", then type in "ssh rhhost2 "cat /etc/passwd"",
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=188)** and hit Enter.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=189)** At the bottom, you should see the two new users.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=192)** Now, let's check their groups.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=194)** Bring your line back, and change "passwd" to "group", and hit Enter.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=199)** You can see that webadmin2 is in the apache group.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=205)** Scroll up to the wheel group. You should see webadmin1.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=209)** We can loop through our dictionary with multiple levels as well.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=212)** In the exercise files for this chapter, there's a file called loop-dictionary.yml.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=221)** Change into this chapter's directory of the exercise files, and then load it into an editor.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=225)** Type in "vim loop-dictionary.yml", and hit Enter.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=230)** Expand all folds by typing in "zR".
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=233)** This playbook doesn't really do anything outside of defining a dictionary of two users.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=237)** For each user, there are a couple of key value pairs.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=241)** The debug line will print out the values of the keys, as well as the name value and the telephone value.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=246)** Lastly, we're using the loop keyword to look through the user's dictionary using the dict2items filter.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=252)** I've also included a second method using lookup.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=255)** To run it, exit by pressing Escape, ":q!, and hitting Enter.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=261)** Now type in "clear", and then type in "ansible-playbook
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=266)** - i ~/ansible-files/hosts loop-dictionary.yml",
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=277)** and hit Enter.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=278)** And there you have it.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-with-dictionaries?u=76281980&t=279)** We've looped through key value pairs and a dictionary.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (6), cd (2), apache (2), ssh (2), cat (1)
> **File Paths:** loop-dictionary.yml (3), main.yml (2), site.yml (1)
> **Code Keywords:** let (3), pass (1), module (1)
> **Code Identifiers:** zr (2)
> **Tools:** vim (2)
> **UI Navigation:** go to (1), scroll up (1)
> **Exercise Files:** exercise files (2)
> **Speakers:** - [instructor] (1), - i (1)

#### Looping and conditionals
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=0)** - [Instructor] As with most languages, you can combine loops and conditionals.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=4)** In this simple example, we're looping through a static list of even numbers and for each iteration, the number is automatically placed in the item variable.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=12)** The condition is set using the when clause.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=14)** When the value of the item variable is greater than five, the debug module will print the contents of the item variable and a message.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=20)** I've created a runnable version of the script in this chapter's exercise files directory named loop-list-conditional.yml.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=28)** You can execute it by changing into that directory and using Ansible playbook.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=32)** We can combine looping through a dictionary with a condition as well.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=36)** First in a variable section, we define and add values to a dictionary named mydict.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=41)** For keys, we have the words one, two, and three, and for values, we have the numbers 1, 2, and 3.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=46)** When we loop through the contents of the dictionary, then we loop through the contents of the dictionary using the loop clause.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=52)** Each item was automatically placed in the item dictionary.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=55)** Note that both the key and the value gets stored.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=58)** Our conditional says that when the value is greater than 2, execute the module for this task, in our case, it's the debug module.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=65)** The debug module prints out a message, including the item key and the item value.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=69)** I've created a runnable version of this script in this chapter's exercise files as well called loop-dict-conditional.yml.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=77)** You can run it by changing to that directory and using Ansible playbook.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=81)** Another way that we can execute a loop with a conditional is to use the until clause.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=85)** In this example, we're using the shell module to run a fictitious command at /usr/bin/program.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=92)** The output is stored in a registered variable named result that we've defined.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=96)** The loop will continue until the word success can be found in the result variable.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=101)** If it is not found, then it will wait 10 seconds and try again.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=105)** It will try it for a maximum of five attempts.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/looping-and-conditionals?u=76281980&t=108)** Also worth noting if you run a task with the until clause and registered the variable, there will be a key named attempts, and the value will be the number of attempts that have been tried.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), static (1), case, (1), continue (1)
> **File Paths:** loop-list-conditional.yml (1), loop-dict-conditional.yml (1)
> **CLI Commands:** ansible (2)
> **Exercise Files:** exercise files (2)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Registering variables in loops
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=0)** - [Instructor] I've included a script in this chapters exercise files named loop-register-vars.yml.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=6)** This file registers the output of a loop to a variable.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=9)** Let's take a look at it.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=11)** Change to this chapters directory and the exercise files and then load the file in the vim.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=15)** Having vim loop-register-vars.yml and hit enter.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=23)** Expand folds if necessary by pressing the Z uppercase R Keys.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=27)** We can see a task named output loop to registered var.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=32)** I also have two shell module lines.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=34)** The first one echos the item variable and the second one is commented out and uses CAT to view the item variable.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=40)** We'll use this line in the moment.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=43)** Then we loop two items in a list and at the end of that task, we register the variable named echo.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=49)** In the next task, we manage commands and loops that return a non-zero value.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=54)** We do this by using the WIN clause to check if the returning code value in the item variable is non-zero.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=59)** Then we loop through the echo that results element.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=62)** This element is specific to registering a variable in a loop.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=65)** We don't have this element when registering a variable outside of a loop.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=69)** The results element contains a lot of useful information.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=72)** Let's find out by running it.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=74)** Exit by pressing the escape column Q exclamation mark and hitting enter.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=79)** Now run the play book by typing ansible-playbook loop-register-vars.yml and hit enter.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=90)** In the second task section, we have a lot of information to look through.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=93)** We can see which command we ran.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=95)** The return code of the command, the start and end date and time, as well as the standard out output from the command.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=102)** This specifically can be very handy.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=104)** Now, let's make it break.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=106)** Load it into vim again so we can create an error.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=109)** Bring your vim line back and hit enter.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=111)** Expand your fold by pressing Z uppercase R and going to insert mode by pressing the I key.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=117)** Now go to the two lines that include the shell module line.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=120)** Comment out the one that says echo item.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=123)** And then uncomment the one that says CAT item.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=126)** The new line will attempt to use CAT DVA files in the item variable which should produce an error.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=131)** Now save and exit by pressing the escape column X exclamation mark and hitting enter.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=135)** Let's run it again.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=136)** Bring you ansible playbook line back and hit enter.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=140)** Now the second task section should be red as the return code was non-zero which we can see in the output.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=147)** We can also look through this output to discern the problem.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/registering-variables-in-loops?u=76281980&t=149)** You can register a variable in a loop and then analyze the results and then analyze the results element to troubleshoot your playbooks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (2), var (1), break. (1)
> **CLI Commands:** cat (3), ansible (2), find (1), make (1)
> **Env Vars:** cat (3), win (1), dva (1)
> **Tools:** vim (4)
> **File Paths:** loop-register-vars.yml (3)
> **Exercise Files:** exercise files (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)


### 6. 5. Grouping Content

#### Using blocks
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=0)** - [Instructor] Using basic Ansible constructs, we can group tasks by creating Separate playbook files, and then importing or including them when they're needed.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=7)** We can combine this with conditionals, and even simulate group-level error handling, at least to a degree.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=12)** However, Ansible includes support for blocks, which allows us a logical grouping of tasks with error handling.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=18)** We can apply most things to a block just as we would a task.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=21)** This includes setting data or directives for the block such as become and become user if we're using them.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=26)** Any of these directors that we set at the block level, get inherited by all tasks inside of it.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=32)** In this chapters exercise files, I've included a script called ansible-block.yml.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=37)** Let's take a look at it.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=38)** On our toast one, go into your exercise files directory and into this chapter sub-directory.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=43)** Now view the Ansible block file using VIM or another editor.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=46)** For VIM have been VIM ansible-block.yml and expand all folds by pressing Z uppercase R.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=54)** This looks like a fairly standard playbook file.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=56)** However, you may notice the block of tasks in it.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=59)** Let's talk about how this all works.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=61)** I've included a block of two tasks with a conditional and a block level directive.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=67)** Notice that we can name the task that the block belongs to.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=69)** But we can also name tasks inside of the block.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=72)** Versions of Ansible before 2.3 didn't allow this.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=75)** For verbosity sake, when running the playbook is recommended to provide names for both a block and for the tasks.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=82)** Are two tasks inside the block look familiar?
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=84)** They install Apache and start the service.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=87)** I've also included a win conditional.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=89)** This block will only get executed if the distribution factor is equal to CentOS.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=94)** The last thing we're going to do is ignore errors.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=95)** So the playbook will continue executing even if one of the tasks fails.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=100)** One of the interesting things about blocks is that all tasks inside of the block inherit the directives set for the block.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=105)** Currently am specifying root as a remote user.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=108)** However, I could remove this item and add become and become user.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=112)** All tasks inside of the block will inherit these directives.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=116)** This playbook does work and you can execute it.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=118)** First exit VIM by pressing escape colon q exclamation mark and hitting Enter.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=122)** (keyboard clicks) Now to execute it type in ansible-playbook -I ~/ansible-files/hosts ansible-block.yml
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-blocks?u=76281980&t=137)** and hit enter.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (9), apache (1)
> **Code Keywords:** let (2), this. (1), continue (1)
> **Env Vars:** vim (4)
> **Tools:** vim (4)
> **File Paths:** ansible-block.yml (3)
> **Exercise Files:** exercise files (2)
> **Versions:** 2.3 (1)
> **Analogies:** such as (1)

#### Block error handling
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=0)** - [Instructor] If you only look at blocks as a way of executing multiple tasks based on a condition, then you'll be missing a very important feature of Ansible.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=8)** Most modern programming languages have a concept of exceptions.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=12)** Exception handling is the process of responding when an unexpected event happens that requires special processing.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=18)** Exception handling attempts to gracefully handle the situation.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=22)** Blocks give Ansible the ability to handle exceptions.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=25)** It is important to note that the exception handling in blocks only deals with tasks with failed status.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=30)** Block error handling does not handle tasks with improper syntax, bad definitions, or unreachable hosts.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=37)** These are not exceptions that block error handling can deal with.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=40)** I've included a script named block-exceptions.yml in this chapter's exercise files.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=46)** Change into that directory and load it into Vim or another editor.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=50)** If you're using Vim, type in vim space, block dash exceptions dot YML and hit enter.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=54)** And then expand your folder by pressing Z, uppercase R.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=59)** Now open another terminal and run it from there.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=62)** That way, you can look at both the playbook text and the output while we're discussing it.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=66)** In the second tab, go to this chapter's exercise files directory and type in ansible dash playbook, space dash I, space tilde slash ansible dash files, slash hosts, space, block dash exceptions dot YML, and hit enter.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=85)** After it runs, let's go over how it works.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=88)** In the block exceptions file, we have a main task named Attempt and Recovery.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=92)** The next thing you should notice is that we have a block, along with two new keywords, rescue and always.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=98)** Let's follow the execution path.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=100)** First, the block is executed and a debug message is placed on the screen saying, "This executes normally."
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=106)** Switch to the playbook output to see this.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=109)** Tasks that execute successfully will be in green.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=112)** We then force a failure by running the slash bin slash false command which returns a nonzero return code.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=118)** Next, we have a new debug message that you might expect to be on your screen, but it is not.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=124)** We can see the output of the failed command, along with its many attributes.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=127)** We do not, however, see the debug message because it never gets executed because a previous command failed.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=134)** This debug message would run if the previous command did not fail.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=138)** Because we are now processing a fail, the rescue section is run, and the debug message of "This catches an error" is written to the screen.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=146)** We then have a new task named, "This forces a failure during recovery!"
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=149)** And we run the slash bin slash false command again.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=152)** This is probably not the wisest thing to do, but for the sake of understanding how error handling works, we're doing it.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=158)** As with the previous fail, we can see that the color is red.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=162)** Normally we'd run something in this section to fix this situation.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=165)** Another method to fix this situation would be to place a meta flush underscore handlers here, which will force the playbook to run all handlers.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=173)** You would then have a handler that would contain more complex tasks and plays that would deal with the error.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=178)** Now moving on, we have a debug message after the fail that never runs.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=182)** As I said before, this would run if the previous command did not fail.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=186)** The last thing we have is an always section that always executes with a message that says as much.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=191)** We can see that the output of the always section in our terminal is green.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=196)** In summary, exception handling sections include block, which executes normally, at least at first, and the rescue section, which is executed only if a task fails.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=206)** The play continues if the rescue section is successful and it resolves the problem, and replaces the failed error status with a successful one.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=213)** It's worth noting that there are two variables available within the rescue section.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=217)** The ansible_failed_task variable holds the name of the task that failed.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=221)** The ansible_failed_result variable contains the failed return code.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/block-error-handling?u=76281980&t=225)** Lastly, the always section always runs, no matter if a task fails or not.

> [!info]- Semantic Content
>
> **Tools:** vim (3), terminal (2)
> **CLI Commands:** ansible (4)
> **Code Keywords:** let (2), switch (1), this. (1)
> **Code Identifiers:** ansible_failed_task (1), ansible_failed_result (1)
> **Env Vars:** yml (2)
> **UI Navigation:** go to (1), switch to (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** block-exceptions.yml (1)

#### Using tags
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=0)** - [Instructor] We can make large configurations more manageable by breaking our playbooks into smaller files using blocks to group content and by using tags.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=8)** Tags differ from the other methods because they allow us to apply a label to different parts of a playbook and only run those sections, or we could run everything but those sections.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=17)** This allows us to group together configuration data in a completely different and more dynamic way.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=23)** Tags can be applied to plays, tasks, blocks, roles, and imported roles.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=30)** It's important to note that multiple items can have the same tag.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=33)** We can also apply multiple tags to one item in a playbook.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=37)** When running playbooks, we can specify multiple tags to run.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=41)** If you apply tags to non-task items such as plays, blocks, roles, and imported tags, the tags get inherited by all tasks contained within them.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=50)** This is often easier than applying tags to every single task.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=53)** Tags cannot, however, be inherited when using dynamic inclusions such as include_role and include_task, so keep that in mind when using them.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=62)** Let's see what tags look like and how to use them.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=65)** This example play has one task using the yum module.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=68)** In this task, we're ensuring the httpd package is present, and at the bottom, we're applying a tag named packages.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=75)** To run only the package installation portion of this playbook, we'd use the --tags option and specify our packages tag.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=82)** To run the playbook and not include any tasks with the packages tag, we'd use the --skip-tags option.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=89)** As such, it may be valuable to know which tasks will get run if we're providing the --tags option.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=95)** For that, append --list-tags to your line, and Ansible will show you which tasks will get run.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=101)** Where this becomes really powerful is when we provide multiple tags.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=105)** To best utilize tags, it helps to plan your strategy from the very beginning.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=109)** For instance, let's say we tag all tasks that install packages with a packages tag and all tasks that restart services with a services tag.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=118)** To run all tasks that install packages and restart services, we'd specify both.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=122)** Depending on our configuration, this may be hundreds of tasks that we can specify at a moment's notice.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=129)** Keep in mind that there are a couple of special tags that are not created by the user.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=132)** There is always, which is automatically applied to fact gathering, or you can use it in your tasks.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=138)** We can skip running these tasks by passing the --skip-tags always option to the ansible-playbook command.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=145)** The second special tag is never, which is applied to tasks that you never want to run unless the tag is called specifically.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=152)** A use case for the never tag would be debug information.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=155)** We would not want it running every time, but we may want to specify it when needed.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=159)** Let's talk about tag inheritance for a moment.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=162)** I have mentioned that tasks can inherit their tags from plays, roles, or blocks.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=166)** This example will run all hosts in the webservers group, and all tasks in this playbook will inherit the packages tag.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=173)** There's also a short format that I like.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=175)** With this syntax, we can place the tags on the same line.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=178)** This is what it looks like when tags are applied to a role.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-tags?u=76281980&t=181)** All tasks in this role will inherit the webservers and dbservers tags.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (2), make (1), yum (1)
> **Code Keywords:** let (3), module (1)
> **Analogies:** such as (2), for instance (1)
> **Code Identifiers:** include_role (1), include_task (1)
> **Prerequisites:** install (2)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Using Ansible to Deploy Files

#### Using Jinja2 template files
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=0)** - [Instructor] Sometimes it's hard to know where Ansible ends and Jinja2 starts.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=4)** Jinja2 is used for templating but also for accessing variables, using data filters and tests, some of which we've already discussed.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=12)** Ansible uses Jinja2 templating to access variables in playbooks.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=16)** For this we use the double curly braces syntax.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=18)** If you want to access a variable element, you can use square brackets within the double curly braces.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=23)** We can use Jinja2 filters for formatting data, creating lists, creating random data such as MAC addresses and random numbers, debugging, as well as manipulating text and data in variables and much more.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=34)** See the Ansible playbooks filters' page for more information.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=37)** We can use Ansible own conditionals, such as the when and until keywords, to create dynamic content.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=43)** But when and until work best when combined with a Jinja2 test, such as is file, is directory, is failed, is succeeded, or even text matches, such as is regex.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=54)** There are many, many more tests mentioned in the Ansible documentation.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=58)** So Jinja2 templating provides a lot of the heavy lifting for Ansible's dynamic content creation.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=63)** Note that Jinja2 has capabilities beyond what I'm going to cover here, including lookups to query external data sources, Jinja2 conditionals and loops.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=71)** These conditionals and loops are different from Ansible's own.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=74)** I'll be focusing on how to use Jinja2 solely in the context of Ansible templating in this course.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=80)** If you'd like to dig into Jinja2 deeper, you can visit the Jinja2 website.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=84)** It's worth noting that other content management systems built on Python, including SaltStack, use Jinja2 for templating as well.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=90)** So any effort you spend learning Jinja2 now can be transferred to other systems later.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=95)** Let's start templating with Jinja2.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=97)** I've included a couple of files in this chapter's exercise files directory.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=101)** Go to that directory and type in "vim welcome.yml" and hit enter.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=106)** Expand all tabs by pressing z + R, and specifying all hosts, and then setting a couple of variables.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=112)** The first is named Address and has the IP address of my ARCHOS 2 via Minute.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=116)** The second is named name and has user1 in it.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=119)** I have one task named Ansible Template Example.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=122)** We're using the template module and providing two options, src, which is the name of the template file we'll be using, and D-E-S-T, which is where we're going to copy the resulting file to on our choice on our ARCHOS 2.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=133)** Note before we move on that the source template files name is welcome.j2.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=138)** Now, open another terminal tab and view the welcome.j2 file.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=142)** Normally, we place this into a templates directory inside of a role, but for this exercise, we have it next to the welcome.yml file.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=148)** Type in "vim welcome.j2".
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=153)** This file is very short.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=155)** It starts with a line of dashes, which are not required.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=158)** Anything that isn't a variable or Jinja2 code will be taken literally.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=162)** The next line uses the Name and Address variables.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=164)** The last line will be literal.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=166)** Now open a third terminal tab and run this playbook.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=170)** Type in "Ansible-playbook -i ~/ansible.files/hosts welcome.yml",
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=182)** and hit enter.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=183)** This should run fine the way it is.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=185)** If you want to make changes to your YAML file or the template file, you can do that and run it again.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=190)** Now let's use SSH to view the file that we created.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=193)** Type in "ssh user1@rhhost2 'cat welcome.txt'"
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=203)** and hit enter.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=206)** You should see "Hello user1, "your address is 192.168.3.110. Welcome".
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=212)** For the template section, we can also specify some additional parameters.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=217)** Force decides if we should overwrite the file if it already exists.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=220)** Mode sets the permissions on the file.
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=222)** And lastly backup creates a backup of the old file before deploying the new one.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=227)** This was a very simple example but I think you get the idea.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=230)** We took a local template file in our ARCHOS 1 and then using some variable set inside of playbook, we created the welcome.txt file and send it across to ARCHOS 2.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=239)** Remember that we can set variables per host group or per host in our group_vars and host_vars directories.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=244)** We can also set these variables in the command line, or even in a playbook.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-jinja2-template-files?u=76281980&t=248)** In addition, we can use Ansible facts to fill in fields in a template file.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (12), ssh (2), python (1), make (1), cat (1)
> **Exercise Files:** template (8), exercise files (1)
> **Env Vars:** archos (4), mac (1), yaml (1), ssh (1)
> **File Paths:** welcome.yml (3), welcome.txt (2)
> **Tools:** vim (2), terminal (2), command line (1)
> **Analogies:** such as (4)
> **Code Keywords:** let (2), module (1)
> **Code Identifiers:** group_vars (1), host_vars (1)

#### Using modules to manipulate files
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=0)** - [Instructor] Managing host configurations involves many things including creating users, installing packages and so on.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=6)** However, a lot of a host configuration is going to be stored in files that we can provision.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=11)** Ansible has multiple modules for dealing with managing files.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=14)** Let's start with the file module.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=16)** With the file module, we can set attributes for files, directories and links.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=21)** We can also remove files directories and links.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=24)** If your hosts are using the Windows OS, you'll want to use the win_file module instead.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=29)** Attributes that we can set include permissions, using group ownership, as well as access and modify times.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=36)** We can also set SELinux attributes such as role, type and user.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=40)** For instance, to set permissions and ownership on a file, it would look like this.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=44)** We can specify the user, group and permission mode.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=48)** We can create symbolic links with the file module as well by specifying the state to be link.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=53)** Creating a directory if it doesn't exist looks like this.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=56)** We specify the state to be directory and we can set the initial permissions as well.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=61)** Removing a file or directory is very simple.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=63)** Be sure to provide the full path to the file or directory and specify the absence state.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=69)** In general, we use the file module to manage files that already exist outside of some special cases like creating links or directories.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=75)** If you want to copy a file to the manage host, use the copy module instead.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=80)** The copy module copies files from a local or remote machine to a remote machine.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=85)** If your managed host uses the Windows OS, use the win_copy module instead.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=90)** The syntax of the copy module is fairly similar to the file module but instead of providing a password, provide both a source and destination.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=97)** I provided the backup option which is not required.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=100)** If you specify backup equals yes and the file already exists, it will make a backup of the original file before copying over the new file.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=107)** If you need to copy a file from a remote machine to a local machine, you want to use the fetch module instead of copy.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=114)** The fetch module is pretty simple in comparison.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=116)** We provide the source file which in this case will be /home/example.conf.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=121)** The destination is /tmp/fetched.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=124)** As such, the file will be fetched and stored as slash TMP slash fetched slash the host name of the managed node slash the remote path.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=132)** A similar module is assemble.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=134)** The assemble module gathered up a bunch of files and concatenate them into one.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=138)** This is useful when there may be a bunch of configuration files and pieces, such as what you'd have in the HTTPd.conf.d or sudors dot d directories.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=147)** This is very common in Linux.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=149)** The assemble module would take the fragment files and assemble them into one file and then save it in a destination location.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=156)** For instance, this takes all of the files in /etc/ssh/conf.d and assembles them into the /etc/ssh/sshd_config file on the remote host.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/using-modules-to-manipulate-files?u=76281980&t=168)** The validate line isn't required but in the case of a service or command that can verify it's configuration file, we can use it to validate the file to ensure the syntax is correct.

> [!info]- Semantic Content
>
> **Code Keywords:** module (15), this. (2), let (1)
> **CLI Commands:** ssh (2), ansible (1), make (1), node (1)
> **Analogies:** such as (2), for instance (2)
> **Code Identifiers:** win_file (1), win_copy (1), sshd_config (1)
> **Env Vars:** tmp (1)
> **Speakers:** - [instructor] (1)

#### Deploying files from templates
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=0)** - Let's put the lessons of this course in action change to the base role directory by typing in cd space tilde slash Ansible dash files slash roles, slash base, slash tasks, and hit enter.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=12)** Now load the main dot yml file into an editor, type in vim space main dot yml and hit enter, expand all fold by pressing z, uppercase R, we're going to provision the e-p-e-l repository file and its related GPG key.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=26)** By managing the yum repo file ourselves.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=28)** We could mirror the repository on the local server and provision a repository file that would point to our local repository mirror.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=35)** Go into insert mode by pressing the I key and then add near the top a couple of lines.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=40)** Now add dash base include underscore tasks, colon, the name of the file of the tasks that we're going to include is going to be centos dash repos dot yml.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=51)** New Line tab.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=54)** Now we'll use a when conditional type in when colon space, left parentheses and we'll use some Ansible facts type in Ansible underscore distribution, space equals equals space double quote, centos make sure your capitalization is the same as mine space and Ansible underscore distribution underscore major, underscore version, space equals equals, space double quote, seven double quote right parentheses, space or.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=90)** Now we'll need to do this for centos eight as well but we'll copy and paste.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=93)** Press escape, press yy, press P, and then press I to go back to the Insert mode and delete the when, and tab it over so it's equal.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=102)** Now go to the end of the line and delete the or.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=106)** The last thing we'll do is we'll change the seven to an eight.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=109)** This condition says for centos seven or centos eight include the task from the centos dash repos dot yml file.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=116)** We need to add this to the top because we want to configure the repository before we install packages.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=121)** By using a condition we can split off repository centos tasks that are centos seven or centos eight specific.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=127)** We could also have a similar condition for Debian, Sousa or other distributions.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=131)** Let's save an exit by pressing escape colon x, exclamation mark and hitting Enter.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=136)** Now we need to create the centos yamo file that we just mentioned.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=140)** Type in vim space, centos dash repos, dot yml and hit enter.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=146)** Go into insert mode by pressing the I key and add dash dash dash because it's a yamo file, new line, dash space name colon.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=155)** We'll call this copy EPEL GPG key to the host.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=161)** Newline, now we're going to use a copy module, hit tab and type in copy, colon newline tab tab.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=169)** And for the source type in src colon, space, uppercase RPM, dash uppercase GPG dash uppercase K-E-Y, dash uppercase e-p-e-l dash.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=185)** Now we'll use another Ansible fact left curly brace left curly brace, space Ansible, underscore facts, left square bracket, single quote, and the fact we'll use is distribution major version distribution underscore major, underscore version, single quote, right square bracket, space, right curly brace, right curly brace.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=207)** We'll be using this fact again so copy it right click and select Copy.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=213)** Now add a new line and hit Tab twice.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=217)** For the destination type in d-e-s-t colon space slash etc slash pki slash RPM dash GPG, slash uppercase RPM, dash uppercase GPG dash uppercase K-E-Y dash, uppercase E-P-E-L dash and then paste in the Ansible fact again.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=237)** This will be a straight copy function that will copy the appropriate GPG key file to the Manage host.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=242)** Now let's add another task, type in dash space name, colon space.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=248)** And we'll name this one create the e-p-e-l repo file from a template.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=253)** New line, for this we'll use a template module, hit tab and type in template, colon, new line, tab tab.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=262)** Now, for the source type in src, colon, space e-p-e-l dot repo dot j two.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=269)** That'll be our Jinja two File.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=271)** New Line, tab tab for the destination type in d-e-s-t, colon, space, slash etc, slash yum, dot repos, dot d, slash e-p-e-l dot repo.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=286)** For this task we're going to use a Jinja two template file and we're going to copy the resulting configuration to the slash etc, slash yum repos D, slash e-p-e-l dot repo file on the managed host.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=297)** Now Save and Exit by pressing escape colon next exclamation mark and hitting Enter.
>
> **[5:02](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=302)** Before we go any further, we need to place the GPG key files into our files directory.
>
> **[5:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=306)** I have provided the GPG key files for both Centos seven and eight in this chapter Exercise Files.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=312)** Go to this chapters Exercise Files directory in your hard drive and get a listing using tree you can see a directory called files and inside of that directory are two GPG files, copy both by typing in cp space dash capital R, space files, space tilde slash Ansible dash files, slash roles, slash base, and hit enter.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=335)** We also want to copy the e-p-e-l dot repo file to our base role templates directory.
>
> **[5:40](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=340)** This is a standard repository file so it is not a template yet, but it will be.
>
> **[5:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=345)** Type in cp space, e-p-e-l, dot repo, space tilde slash Ansible slash files slash roles slash base, slash templates, slash epel dot repo, dot j two, and hit enter.
>
> **[6:01](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=361)** Now change to your base role templates directory by typing in cd space tilde, slash Ansible dash files, slash roles, slash base, slash templates, and hit enter.
>
> **[6:12](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=372)** Now edit the repo file by typing in vim space, e-p-e-l dot repo, dot j two, and hit enter.
>
> **[6:20](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=380)** Go into insert mode by pressing the I key and wherever you see the number eight, delete it and paste the Ansible fax line.
>
> **[6:28](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=388)** Because we're using the Ansible fact, we only need one template file, for both OS versions.
>
> **[6:34](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=394)** Save and Exit by pressing escape call next exclamation mark and hitting Enter.
>
> **[6:38](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=398)** Now let's run it.
>
> **[6:39](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=399)** Change back to your Ansible files directory by typing in cd space tilde slash Ansible dot files and hit enter.
>
> **[6:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=405)** Then run the playbook by typing in Ansible, dash playbook, space dash I, space hosts, base site dot yml and hit enter.
>
> **[6:54](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=414)** We've typed a lot here.
>
> **[6:55](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=415)** So there may be errors.
>
> **[6:57](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=417)** If there are, fix them now.
>
> **[7:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=420)** In summary, we created a conditional in our base roll yamo file that includes tasks from an additional file if the OS has centos in the version of seven or eight.
>
> **[7:09](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=429)** The first task uses the copy module to copy across the GPG key file.
>
> **[7:13](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=433)** This uses an Ansible fact, to determine which file to copy.
>
> **[7:17](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=437)** The second task uses the template file to create the yum repo file.
>
> **[7:21](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/deploying-files-from-templates?u=76281980&t=441)** Then we created a Jinja two template file, which uses the Ansible fact again to create yum repo file specific to our OS version.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (17), yum (5), cd (3), cp (2), make (1)
> **Env Vars:** gpg (10), rpm (3), epel (1)
> **Code Keywords:** let (4), delete (3), module (3), function (1)
> **Exercise Files:** template (8), exercise files (2)
> **Tools:** vim (3)
> **UI Navigation:** go to (2)
> **Prerequisites:** configure (1), install (1)
> **Cross-References:** go back to (1)


### 8. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=0)** - [Instructor] This is the second course in a three course series on Ansible Engine for the Red Hat EX294 certification.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=6)** In this course, we created global variable files, configured static inventory, created a scalable configuration directory structure with separate roles, templates, and task directories.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=16)** We learned how to use variables and Ansible facts and Ansible conditionals for dynamic content.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=22)** We looped over lists and dictionaries, imported dynamic content, used blocks for group content and manage exceptions, and learned to tag content.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=31)** Lastly, we learned to use Jinja2 templates for dynamic file creation.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=35)** We're not done with this series on using Ansible for IT automation, which includes Ansible foundations, using Ansible playbooks, which is this course, and managing systems using Ansible.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=45)** Before attempting to take your exam, you'll want to watch the other two courses.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-engineer-ex294-cert-prep-2-using-ansible-playbooks/next-steps?u=76281980&t=48)** After finishing those courses, you can consider taking the EX294 exam.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (7)
> **Env Vars:** ex294 (2)
> **Code Keywords:** static (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Grant McWilliams]]

## Resources

- Exercise files available

## Skills Covered

- Red Hat Enterprise Linux (RHEL)
- Ansible

## Path Context

### In [[Prepare for the Red Hat Certified Engineer (EX294) Exam]]
← [[Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible]] | **2 of 3** | [[Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible]] →

## Appears In

- [[Prepare for the Red Hat Certified Engineer (EX294) Exam]]

## Related Courses

_Courses sharing skills:_

- [[Red Hat Certified Engineer (EX294) Cert Prep- 3 Managing Systems with Ansible]] — Ansible, Red Hat Enterprise Linux (RHEL)
- [[Red Hat Certified Engineer Ex294 Cert Prep 1 Foundations Of Ansible]] — Ansible, Red Hat Enterprise Linux (RHEL)
- [[Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage]] — Red Hat Enterprise Linux (RHEL)
- [[Learning Ansible]] — Ansible

---

[↑ Back to top](#)