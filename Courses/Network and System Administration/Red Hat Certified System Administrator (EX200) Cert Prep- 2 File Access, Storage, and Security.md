---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security
url: "https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security"
duration_minutes: 233
duration: 3h 53m
level: Intermediate
updated: 11/21/2023
learners: 23412
skills:
  - Linux System Administration
  - Red Hat Linux
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHTHnWS_dwmLw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1610648353099?e=2147483647&amp;v=beta&amp;t=lJ3xS1BjrsrQfJBNqp2KWleqCP6J-_anbXqZVIWuli4"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Prepare for the Red Hat Certified System Administrator (EX200) Exam]]'
prev_courses:
  - '[[Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage]]'
path_nav: '[{"path":"Prepare for the Red Hat Certified System Administrator (EX200) Exam","position":2,"total":2,"prev":"Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage","next":null}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/linux-system-administration
  - skill/red-hat-linux
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Red%20Hat%20Certified%20System%20Administrator%20(EX200)%20Cert%20Prep-%202%20File%20Access%2C%20Storage%2C%20and%20Security.md)

![Red Hat Certified System Administrator (EX200) Cert Prep: 2 File Access, Storage, and Security](https://media.licdn.com/dms/image/v2/C4E0DAQHTHnWS_dwmLw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1610648353099?e=2147483647&amp;v=beta&amp;t=lJ3xS1BjrsrQfJBNqp2KWleqCP6J-_anbXqZVIWuli4)

# Red Hat Certified System Administrator (EX200) Cert Prep: 2 File Access, Storage, and Security

> Red Hat Enterprise Linux is one of the top enterprise Linux distributions, and the Red Hat Certified System Administrator (RHCSA) cert is highly sought after. This course helps you prepare for the second half of the RHCSA exam. First, instructor Grant McWilliams covers tasks related to users and accounts, such as creating and deleting users and utilizing sudo. Next, he delves into files access con

> [LinkedIn Learning](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security) | 3h 53m | Intermediate | 23K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Prepare for the RHCSA EX200 Exam](#prepare-for-the-rhcsa-ex200-exam)
  - [About Red Hat Certifications](#about-red-hat-certifications)
  - [What was covered in Part One](#what-was-covered-in-part-one)
- [**1. Users and Accounts**](#1-users-and-accounts) (9 videos)
  - [Create and delete local user accounts](#create-and-delete-local-user-accounts)
  - [Modify local user accounts](#modify-local-user-accounts)
  - [Change passwords and adjust password aging for local user accounts](#change-passwords-and-adjust-password-aging-for-local-user-accounts)
  - [Manage aging for local user accounts](#manage-aging-for-local-user-accounts)
  - [Create, delete, and modify local groups and group memberships](#create-delete-and-modify-local-groups-and-group-memberships)
  - [Log in and switch users in multiuser targets](#log-in-and-switch-users-in-multiuser-targets)
  - [Elevating privileges using sudo](#elevating-privileges-using-sudo)
  - [Challenge: Users and accounts](#challenge-users-and-accounts)
  - [Solution: Users and accounts](#solution-users-and-accounts)
- [**2. Files Access Control**](#2-files-access-control) (13 videos)
  - [File and directory modes](#file-and-directory-modes)
  - [Change file and directory ownership](#change-file-and-directory-ownership)
  - [Set permissions using numeric mode](#set-permissions-using-numeric-mode)
  - [Set permissions using symbolic mode](#set-permissions-using-symbolic-mode)
  - [Initial permissions using umask](#initial-permissions-using-umask)
  - [Special file bits: SUID and SGID](#special-file-bits-suid-and-sgid)
  - [Special directory bits: SGID and Sticky](#special-directory-bits-sgid-and-sticky)
  - [Read access control lists](#read-access-control-lists)
  - [Set access control lists (ACLs)](#set-access-control-lists-acls)
  - [Configure inheritance with default access control lists](#configure-inheritance-with-default-access-control-lists)
  - [Delete access control lists](#delete-access-control-lists)
  - [Challenge: File access control](#challenge-file-access-control)
  - [Solution: File access control](#solution-file-access-control)
- [**3. Manage Security**](#3-manage-security) (9 videos)
  - [Set enforcing and permissive modes for SELinux](#set-enforcing-and-permissive-modes-for-selinux)
  - [List and identify SELinux file and process context](#list-and-identify-selinux-file-and-process-context)
  - [Restore SELinux default file contexts](#restore-selinux-default-file-contexts)
  - [Use Booleans to modify SELinux behavior](#use-booleans-to-modify-selinux-behavior)
  - [Diagnose routine SELinux policy violations](#diagnose-routine-selinux-policy-violations)
  - [Maintain security context when managing files](#maintain-security-context-when-managing-files)
  - [Manage firewalls with firewalld](#manage-firewalls-with-firewalld)
  - [Challenge: Manage security](#challenge-manage-security)
  - [Solution: Manage security](#solution-manage-security)
- [**4. Accessing Linux Remotely**](#4-accessing-linux-remotely) (7 videos)
  - [Configure Secure Shell](#configure-secure-shell)
  - [Configure key-based authentication for SSH](#configure-key-based-authentication-for-ssh)
  - [Securely transfer files between systems](#securely-transfer-files-between-systems)
  - [Access Linux from Windows using PuTTY](#access-linux-from-windows-using-putty)
  - [Access Linux from macOS or Linux using SSH](#access-linux-from-macos-or-linux-using-ssh)
  - [Access Linux from iOS using SSH](#access-linux-from-ios-using-ssh)
  - [Access Linux from Android using SSH](#access-linux-from-android-using-ssh)
- [**5. Configure Local Storage**](#5-configure-local-storage) (8 videos)
  - [List, create, and delete partitions on MBR and GPT disks](#list-create-and-delete-partitions-on-mbr-and-gpt-disks)
  - [Manage LVM volumes and volume groups](#manage-lvm-volumes-and-volume-groups)
  - [Mount file systems at boot](#mount-file-systems-at-boot)
  - [Mount file systems at boot by ID or label](#mount-file-systems-at-boot-by-id-or-label)
  - [Extend existing logical volumes](#extend-existing-logical-volumes)
  - [Mount and unmount CIFS and NFS network file systems](#mount-and-unmount-cifs-and-nfs-network-file-systems)
  - [Challenge: Local storage](#challenge-local-storage)
  - [Solution: Local storage](#solution-local-storage)
- [**6. Containers**](#6-containers) (8 videos)
  - [About containers on Enterprise Linux](#about-containers-on-enterprise-linux)
  - [Retrieve container images from a remote registry](#retrieve-container-images-from-a-remote-registry)
  - [Inspect container images](#inspect-container-images)
  - [Managing containers](#managing-containers)
  - [Working with container images](#working-with-container-images)
  - [Build a container from a container file](#build-a-container-from-a-container-file)
  - [Configure a container to start automatically as a systemd service](#configure-a-container-to-start-automatically-as-a-systemd-service)
  - [Attach persistent storage to a container](#attach-persistent-storage-to-a-container)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Prepare for the RHCSA EX200 Exam](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/prepare-for-the-rhcsa-ex200-exam-23052024?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/prepare-for-the-rhcsa-ex200-exam-23052024?u=76281980&t=0)** - [Grant] What if I told you you could break into the world of [[System Administration]] of the operating system that powers much of the world's websites, supercomputers, [[Cloud Services]], and mobile devices with one well-respected certification?
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/prepare-for-the-rhcsa-ex200-exam-23052024?u=76281980&t=13)** This course is the second in the two-part series that covers the Red Hat Certified System Administrator Certification, or RHCSA, and has been updated for Red Hat Enterprise [[Linux]] version 9 as well as the EX200 V9 exam.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/prepare-for-the-rhcsa-ex200-exam-23052024?u=76281980&t=27)** Hi, I'm Grant McWilliams, college professor and Linux expert.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/prepare-for-the-rhcsa-ex200-exam-23052024?u=76281980&t=31)** Welcome to Red Hat Certified System Administrator (EX200) Cert Prep: 2 File Access, Storage, and Security.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/prepare-for-the-rhcsa-ex200-exam-23052024?u=76281980&t=38)** Join me as we cover the last of the RHCSA objectives and get you ready to become Red Hat certified.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[System Administration]] (1), [[Cloud Services]] (1)
> **Env Vars:** rhcsa (2), ex200 (2)
> **Versions:** version 9 (1)
> **Speakers:** - [grant] (1)

#### [About Red Hat Certifications](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=0)** - [Instructor] To learn a bit about Red Hat certifications, let's browse to their certification site and take a look at the list.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=7)** Red Hat has a large offering of [[Linux]] certifications, including the famous Red Hat Certified Engineer, as well as specialized higher in certifications, covering many topics, such as [[Cloud Computing]] and [[Performance Tuning]].
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=19)** The base certification however is the RHCSA, which tests a user's knowledge of Red Hat [[System Administration]].
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=26)** This course is the first half of a two-part series that is a fast track to the RHCSA certification.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=32)** Here's a brief list of the objectives that we'll cover in this course.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=37)** Under deploying systems, we'll learn to configure networking, schedule recurring tasks, install Linux systems as virtual guests, configure systems to use time services, install and update software packages, update the kernel and modify the system bootloader.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=54)** We'll also cover processing files, including how to use command redirection, how to use grep and regular expressions to analyze text, and how to archive and compress files.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=64)** We'll create and edit text files and learn how to do file management on the command line.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=69)** We will operate running systems, including interrupting the boot process in order to gain access to a system, which can be useful for troubleshooting.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=76)** We'll manage processes, read log files and journals, access a virtual machine's console, and start and stop [[Virtual Machines]].
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=84)** The updated RHCSA version nine includes shell scripting knowledge as well, so we'll create simple shell scripts, conditionally execute code, use looping constructs to process, file and command input, process script inputs, and process the output of shell commands within a script.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-red-hat-certifications-23044975?u=76281980&t=101)** The RHCSA is required before taking any higher level Red Hat exams, so if you're pursuing any Red Hat certification, this course will be beneficial.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Cloud Computing]] (1), [[Performance Tuning]] (1), [[System Administration]] (1), [[Virtual Machines]] (1)
> **Env Vars:** rhcsa (4)
> **Prerequisites:** configure (2), install (2)
> **CLI Commands:** grep (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [What was covered in Part One](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=0)** - [Instructor] This is the second course in a two-part series covering the Red Hat RHCSA EX200, Version 9 Certification.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=8)** If you haven't taken the first course, I encourage you to do so before taking this one.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=13)** In the first course, we created an enterprise [[Linux]] 9 USB installation drive, and then installed Enterprise Linux 9 on a physical machine.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=21)** After that, we prepared our physical host for our KVM virtualization.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=26)** We then interactively installed Enterprise Linux in a guest virtual machine.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=30)** We learned about Kickstart files and did an automated non-interactive install using a Kickstart file and with a bit of wizardry, injected that Kickstart file into a booting VM.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=42)** In the next chapter, we booted into two different emergency and recovery modes that you'd use to recovery a broken system and/or reset a system administrator's password.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=51)** We used systemd to manage services, configured live and saved network configuration, we created at and cron jobs and restricted access to them.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=61)** There are a lot of shortcuts and power tools for the Linux command line.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=64)** In the next chapter, we used file globs and character sets to do file name pattern matching, and used regular expressions with globs to search inside files.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=73)** We used IO redirection, managed files using commands, such as CP, RM, and MV, and learned the basics of editing text with Vim, we used tar along with compressors to archive files, and we learned about system logging using our sys log and journald.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=90)** We then installed software from a remote software repository using DNF and learned about RPM packages.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=96)** We used DNF to manage installed software and learned the difference between software package groups and the new DNF modules.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=104)** Once we got repository based software [[Package Management]] covered, we turned our attention to managing local packages using RPM.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=111)** First, we got information from packages themselves and then the database.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=115)** Next, we outputted that information using complex RPM package name filters, called tags.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=121)** We also managed operating system updates, including updating the kernel and managing kernel modules.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=127)** We also covered the new objectives for the Version 9 exam, shell scripting.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=131)** This included variable scope, processing positional arguments, redirecting input and output, conditional flow, and looping constructs.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=139)** That course is the foundation course for this one.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=142)** Since in that course we created our [[Virtual Machines]] that we will use in this course, it is imperative that you take that course first before taking this one.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/what-was-covered-in-part-one?u=76281980&t=150)** If, however, you've already taken that course, feel free to proceed with the next video in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (4), [[Package Management]] (1), [[Virtual Machines]] (1)
> **Env Vars:** dnf (3), rpm (3), rhcsa (1), ex200 (1), usb (1)
> **CLI Commands:** dnf (3), cp (1), rm (1), mv (1), tar (1)
> **Cross-References:** in the next (2), next video (1)
> **Versions:** version 9 (2)
> **Tools:** command line (1), vim (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)


### 1. Users and Accounts

[↑ Back to Table of Contents](#table-of-contents)

#### [Create and delete local user accounts](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=0)** - [Instructor] In [[Linux]], every user has a username, a numeric user ID and belongs to at least one group for use with discretionary access control.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=9)** Discretionary access control meaning access is granted based on who the user is and what group or groups they belong to.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=16)** User account information is stored in /etc/passwd.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=20)** User passwords and account aging are stored in /etc/shadow.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=25)** User account defaults for commands and the shadow utilities are stored in /etc/login.defs.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=32)** Those tools that use the login.defs file, would include useradd, userdel, usermod, groupadd, groupdel and groupmod commands as well as the change command among others.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=43)** This login.defs file contains settings for the password aging, minimum and maximum numbers for user IDs, minimum and maximum numbers for system user IDs, minimum and maximum numbers for user group IDs and minimum and maximum numbers for system group IDs.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=61)** You will notice that in both cases the system ID numbers are less than 1,000.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=65)** Also configured in this file is whether to create initial home directories or not.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=69)** And the hash and coding type such as MD5 or SHA512.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=74)** Default settings for the user add command are stored in /etc/useradd.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=79)** This includes where home directories are created, whether the account should expire, which shell to use if not specified in the command line, whether to create a mail spool or not and where the skeleton directory resides.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=91)** The skeleton directory contains the files that are copied to each new user's home directory automatically.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=96)** These would include any shell initialization files or any other files you want included in any new user's home directory, in my case, Firefox browser configuration.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=107)** Other user authentication settings are in the /etc/pam.d directory where configuration files for the pluggable authentication modules are stored.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=116)** We won't be covering pluggable authentication modules in this course.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=119)** The process of creating users in Linux is fairly straightforward, for this exercise, I'll be using my RHhost1 VM.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=126)** Let's go to our terminal and type in user add with no arguments.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=129)** (keys clacking) Here we see the many options for the user add command.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=132)** Thanks to the stored defaults, we don't have to specify any of these options to create a user.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=137)** Any options that we leave out are taken from the system defaults.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=141)** Let's create a new user now by typing in clear and then type in sudo space, useradd space, bob and hit enter.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=147)** Then type in your password if prompted.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=149)** We can verify that this user exists by viewing the etc password file using cat.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=153)** Type in cat space /etc/passwd and hit enter.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=158)** The very last line is the account information for the new username Bob.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=163)** The first column in the line is the username.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=166)** The second column is the placeholder for the password, in the distant past, the encoded password was stored here.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=173)** This X tells us that we're using the shadow suite and the password is stored in the /etc/shadow file.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=178)** The third column is a user's numeric ID number.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=181)** The fourth column is a primary group ID number, every user has to belong to at least one group which is their primary group.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=188)** When the user creates files, they will be owned by this group.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=192)** We can cross reference does group ID number in the etc group file.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=196)** Type in cat space, /etc/group and hit enter.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=200)** We see that Bob's primary group is also named Bob.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=203)** In Red Hat based distributions, the primary group is a group with the same name as the user and is created automatically, but note that not all distributions act this way.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=213)** The fifth column is the GECOS field which is used to store general records.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=217)** Often we think of it as a comment field for storing information about the user account, don't put anything sensitive here as this file is world readable.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=224)** The sixth column is a user's home directory where they'll store their files.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=228)** This location is configured in the /etc/login.defs file as well.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=232)** The seventh and last column is the shell to execute upon login.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=237)** The last thing we'll do is view the password and aging information in the etc shadow file.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=241)** We need to elevate privileges using sudo for this.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=243)** Type in clear, and then type in sudo space, cat /etc/shadow and hit enter.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=249)** The last line belongs to the new username, Bob.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=252)** We can see that the second column where the password should be, has two exclamation points, this means the password has not been set yet, and thus Bob can't log in.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=261)** Let's set the password using the password command and view the etc shadow file again.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=265)** Type in clear and then type in sudo space, passwd space, Bob and hit enter.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=270)** Now enter Bob's password twice.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=273)** (keys clacking) And then type in sudo space, cat space, /etc/shadow and hit enter.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=279)** Now we see that the Bob user has an encoded password in the second field.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=283)** Let's also look in /home for home directories.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=286)** Type in clear and then type in ls space, /home and hit enter.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=289)** We see that the Bob user's home directory is present, this is a setting in the login.defs file, and now all the next distributions create the home directory automatically.
>
> **[4:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=298)** Let's also lists hidden files inside of /home/Bob.
>
> **[5:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=301)** Type in sudo space, ls space, -l for long list, a for all, space /home/bob and hit enter.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=310)** The files we see are the skeleton files that were copied from the /etc/skel directory, also listed in the login.defs configuration file.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=318)** Deleting users is pretty straightforward as well.
>
> **[5:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=321)** If you'd like to delete the user but keep their home directory and files, you'd type sudo space, userdel space, bob.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=329)** However, if you want to get rid of the Bob account and Bob's home directory including his files, you'd add the -r option to userdel and then hit enter.
>
> **[5:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=338)** We can view the etc password file to verify that the account is gone.
>
> **[5:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=342)** Type in cat space /etc/passwd and hit enter.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=347)** If you want to verify that Bob's home directory has been removed as well, type in ls space /home and hit enter.
>
> **[5:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-and-delete-local-user-accounts?u=76281980&t=354)** To view more useradd options check the man page by typing a man space, useradd.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **CLI Commands:** sudo (7), cat (6), ls (3)
> **Definitions:** is a  (5)
> **Env Vars:** md5 (1), sha512 (1), gecos (1)
> **Tools:** command line (1), firefox (1), terminal (1)
> **Analogies:** such as (1), think of it as (1)
> **Documentation:** man page (1)
> **UI Navigation:** go to (1)

#### [Modify local user accounts](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=0)** - [Instructor] In order to change a user's account settings after the user has been created, we'll need to use the usermod command.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=6)** Most of the syntax for usermod is identical to that of useradd.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=11)** Let's discuss a few of usermod's more common ones.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=14)** To change a user's home directory use -d for directory.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=18)** You might use this if you've manually moved a user's home directory and need to update/etc/password To change a user's ID number, use the -u option.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=27)** It's quite rare to do this, but it may happen if you're using NFS for network file sharing and need users to have the same user ID on different hosts.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=35)** We can do the same for the user's primary group ID using the -g option.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=39)** All users belong to the primary group.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=42)** In red hat based operating systems, The primary group is unique to the user and created automatically.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=47)** All files created by the user will belong to the primary group initially.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=51)** If you want the user to belong to an additional or supplemental group, use dash uppercase G You may want them to belong to the wheel group so they have admin privileges or perhaps a group that manages a specific service such as Apache.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=64)** Note that this is a complete list and will override their current list of groups unless you use the next option, -a.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=71)** The dash lowercase, a in combination with dash uppercase G allows you to append users to supplemental groups.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=78)** Earlier, we talked about changing a user's ID number using the -u option.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=83)** A more common operation would be to change the user's name, using the -l or login option.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=88)** You can lock and unlock a user's password using the uppercase L and uppercase U options.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=93)** Note that this does not keep a user from authenticating using other methods such as private public key pairs.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=99)** Usermod also has the ability to move a user's home directory using the -m option.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=105)** If a user wants a specific shell that has not default like ZSH, you can change it with -s In a terminal, to create a new user named Sally using the user add command.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=116)** Type in sudo useradd sally and hit Enter.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=120)** Type in your password if prompted.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=122)** Now that we have a new user, let's set her password.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=124)** Type in sudo passwd sally and hit Enter.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=128)** And then enter her password twice.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=131)** Let's take a look at her current settings.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=133)** Type in cat /wtc/passwd and hit Enter.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=137)** We can see that her user ID is 1001.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=140)** Her primary group ID is 1001.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=143)** Her home directory is /home/sally and her shell is /bin/bash Let's change all of this.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=151)** Type in clear, then type in sudo usermod/-u for user ID 1010 -g for group ID 1010 -d for home directory.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=164)** /home/jane -m to move her home directory
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=171)** - s for shell /bin/zsh
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=176)** - l for login name space Jane space, and the user we'll change is sally And hit Enter.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=185)** You can see that we have an error.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=186)** The problem with the usermod command is that things have to exist before we can use them.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=191)** You can't specify a group idea of a group.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=193)** a home directory or shell that does not exist.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=196)** You would want to manually create those things first.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=199)** Let's fix this.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=200)** Type in clear and type sudo groupad -g 1010 jane This will create a group with a group idea of 1010 and a group name of Jane.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=211)** Hit Enter.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=212)** View the group file to verify it.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=214)** Type in cat /etc/group.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=218)** It should be the last line.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=219)** Now install her shell.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=221)** Type in sudo dnf install -y zsh and hit Enter.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=227)** Now that the group exists and the shell is installed, let's run the user mod command again.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=231)** Type in clear and then bring your user mod line back and hit Enter.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=235)** This time it ran fine.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=237)** Now she should be able to log in as Jane and use the ZSH shell and access her files.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=242)** Let's verify.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=243)** Type in cat /etc/passwd and hit Enter.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=249)** We can see that our user ID number is 1010.
>
> **[4:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=251)** Her group ID is 1010.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=253)** Her home directory is /home/jane and her shell is /bin/zsh.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=259)** Now let's look at the etc group file.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=261)** Type in cat /etc/group and hit Enter.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=266)** Then we can see that the primary group for Jane is 1010.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=270)** Lastly, type in clear, and then type in ls -L /home and hit Enter.
>
> **[4:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=276)** We can see that Jane's home directory is there and it's owned by the Jane user and the Jane group.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=282)** Now let's add her to a group that does exist.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=284)** The audio group.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=286)** Type and clear and then type in sudo usermod space -a for append -G audio as the supplmental group space jane and hit Enter.
>
> **[4:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=298)** Remember that if we don't specify the -a option, then the list of groups that we specify will overwrite their current supplemental groups.
>
> **[5:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=305)** Unless you're explicitly setting their supplemental groups, you probably want to include the -a.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=310)** Now verify it by viewing the etc group file again.
>
> **[5:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=313)** Type in cat /etc/group and hit Enter.
>
> **[5:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=317)** Now scroll up to the audio group and you should see Jane in the last column.
>
> **[5:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/modify-local-user-accounts?u=76281980&t=321)** If you want to know more about the usermod command you can check out the man page by typing in man usermod, and hitting Enter.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (6), cat (5), apache (1), dnf (1), ls (1)
> **Tools:** zsh (5), terminal (1), bash (1)
> **Env Vars:** zsh (2), nfs (1)
> **Speakers:** - [instructor] (1), - s (1), - l (1)
> **Cross-References:** we talked about (1), in the last (1)
> **Analogies:** such as (2)
> **Warnings:** note that (2)
> **Prerequisites:** install (2)

#### [Change passwords and adjust password aging for local user accounts](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=0)** - [Tutor] The main tool for managing passwords in [[Linux]] is the password command.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=4)** If we type in password without any arguments, it will ask us twice for a new password then encode it and save it in the etc shadow file.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=12)** However, an administrator can use the same tool to lock and unlock passwords, as well as set some account aging information.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=19)** Let's cover some of the password commands, more common options.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=23)** - d deletes a user's password.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=26)** This is basically the state of a newly created user without a password.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=30)** - e expires a password.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=32)** A user with an expired password will need to reset it on the next login.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=37)** - l locks the password.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=39)** Note that this only locks the password.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=41)** So if a user had valid SSH keys, they could log in anyway.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=46)** Use account aging to lock the actual accounts.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=49)** Also note that this is the lowercase L as opposed to the usermod command, which uses an uppercase L to do the same thing.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=56)** - u unlocks an account password and dash uppercase s outputs the password status.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=63)** In a terminal, let's create a user named brian and give him a password.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=67)** Once he has a valid account, we'll lock the password with a password command.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=70)** Type in, sudo useradd brian, and hit enter.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=74)** Type in your password if prompted.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=75)** Now let's verify by looking at the etc shadow file Type in sudo cat /etc/shadow and hit enter.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=83)** The last line has brian's information.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=85)** If you look in the second column you should see two exclamation marks.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=88)** This means brian's account does not have a password.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=91)** So let's give him one.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=92)** Type in clear then type in sudo passwd brian and hit enter.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=98)** Type his password in, hit enter and type in his password twice.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=105)** If you choose an insecure password then it will let you know.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=109)** Since we're elevating to route, we can override the warning.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=112)** However, if we were a user setting our own password, we would not be able to.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=116)** Now verify again, bring your etc shadow line back and hit enter.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=121)** Now you should see the second column has a SHA-512 hashed password in it.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=125)** Now let's lock as account, type in clear and then type sudo passwd -l for lock brian and hit enter.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=134)** And verify by bringing your etc shadow line back again and hitting enter.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=138)** His password is still in the second column, but now it's prefixed by two exclamation marks.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=143)** Note that Brian can still log in with SSH keys if he wanted to.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=148)** You'll want to look at the change command, if you want more power, when locking accounts.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=152)** To see the status of a user's password, we can use the -S option.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=156)** Type in clear, then type in, sudo passwd -S brian and hit enter.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=163)** There shows up Brian's account is still locked.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=165)** To unlock it, we'll use the password command again.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=168)** Type in, sudo passwd -u, for unlock, brian and hit enter.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=175)** Now, if you look at the etc shadow file again the password field will be back to normal.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=180)** You may want to have more control over which passwords are considered acceptable.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=184)** That setting is in the /etc/security/[pwquality.com](https://pwquality.com) file.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=188)** Let's take a look.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=189)** Type in, clear and then type in, less -N, to turn line numbers on, /etc/security/pwquality.conf and hit enter.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=201)** This file defines which character combinations are allowed in an acceptable password.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=205)** Line 6 says that, at least one character in the new password cannot be in the old one.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=210)** Line 11 says, the minimum password length to 8 characters.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=213)** The following lines deal with credits.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=216)** If you have a strong character in your password, you get a credit that can be applied toward the minimum password length.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=221)** So not using credits, they're all set to zero.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=223)** We can set credits for numeric digits, uppercase letters, lowercase letters and other characters that are not digits, uppercase or lowercase.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=232)** Line 34 sets the minimum number of character classes such as digits, uppercase, lowercase, or other.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=238)** If we set this to 1, we could have a password that is all digits, all uppercase, all lowercase or all other.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=246)** Line 38 sets a number of duplicate adjacent characters.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=249)** Line 43 sets the number of duplicate adjacent characters of the same class.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=254)** Line 47 checks against characters in the gecos field that are in the password.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=259)** Line 51 enables checking against a cracklib dictionary, for a dictionary based passwords.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=265)** Line 55 doesn't allow the user's name to be in their password.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=269)** And lastly, line 60 also enables enforcing by pluggable authentication module.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-passwords-and-adjust-password-aging-for-local-user-accounts?u=76281980&t=274)** By using these configuration options we can make users create very strong passwords for their accounts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **CLI Commands:** sudo (6), ssh (2), cat (1), make (1)
> **Speakers:** - [tutor] (1), - d (1), - e (1), - l (1), - u (1)
> **Warnings:** note that (3), warning (1)
> **Env Vars:** ssh (2), sha (1)
> **URLs:** [pwquality.com](https://pwquality.com) (1)
> **Tools:** terminal (1)
> **Analogies:** such as (1)

#### [Manage aging for local user accounts](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=0)** - [Instructor] Account aging is important because we can determine when passwords need to be changed or even set accounts to automatically lock.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=7)** We can change these settings in the global user account settings in the /etc/login.defs file.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=13)** This, however, only affects newly created users.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=16)** If we need to change existing user accounts, we have to use other commands.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=20)** We could manually edit the /etc/shadow file for most of these settings but the password aging fields are fairly cryptic and it's easy to get these settings wrong.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=28)** The main command we'll use to change user account settings is chage or change age.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=33)** Chage is used to change the password and account aging information for users.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=38)** Chage -d changes the number of days since January 1st, 1970 when the password was last changed.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=44)** Setting this to zero means the password has not changed and forces a password change on next login.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=49)** Dash capital E sets the date that the user's account will expire.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=53)** Dash capital I sets the number of days of inactivity after the password expiration before the account will be locked.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=60)** Dash m sets the minimum number of days between password changes.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=64)** Set this to zero so users may change their password at any time.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=68)** Dash capital M is the maximum number of days during which a password is valid.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=73)** If the maximum number of days plus the last day, the first line of this chart, are less than the current day, then the user has to change his password.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=81)** If you want to give the user a warning before forcing the password change, then use the -W option.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=87)** Dash capital W is the number of days of warning before a password change is required.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=92)** And lastly, -l lists account aging information.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=97)** Now let's go to the terminal and modify some account aging information.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=100)** First, let's get the user account name.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=103)** Type in sudo cat /etc/passwd and hit Enter.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=108)** Enter your password if prompted.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=110)** Now let's get aging for a user.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=112)** I'm going to use the username Brian.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=115)** Type in clear and then type in sudo chage -l brian and hit Enter.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=120)** Here we can see a listing of the Brian account aging information.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=123)** If you want to force a user to enter their password at the next login, we can use the password chage command to expire their password.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=129)** Another way to expire password is to use the chage command, which changes aging information for the user.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=135)** Type in clear, then type in sudo chage -d 0 brian and hit Enter.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=142)** This actually sets the last day that the password was set to zero, forcing the user to change their password on login.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=148)** Let's get the listing again.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=149)** Type in sudo chage -l brian and hit Enter.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=154)** We can see now that the password needs to be changed at next login.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=158)** Let's su to Brian to see what happens.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=160)** So type in su - brian and hit Enter and type in Brian's password.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=167)** We can see that we have to change the password now.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=169)** Type in Brian's old password again and then type in Brian's new password and once more and there you go.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=176)** After logging in as Brian, type in exit to log out.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=180)** Now let's get a listing again.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=182)** And we can see that we have both account expiration and password expiration dates.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=187)** When the password is expired, a user may still log in using SSH keys but when the account is expired, it can no longer be logged into at all.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=196)** If you want to log a user's account, be sure to use chage.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=199)** Password expiration, however, creates a moving target for hackers.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=203)** If users have to change their password ever so often, it makes their accounts harder to exploit.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=208)** Now I'm going to change the account expiration date for the user.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=211)** Type in clear, then type in sudo chage -E 2025-01-01 brian
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=222)** and verify with chage list.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=224)** Type in sudo chage -l brian and hit Enter.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=229)** We can now see that the account expires on January 1st, 2025.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=233)** Then I'm going to change the password expiration to 90 days using the -M option.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=238)** Type in clear, then type in sudo chage -M 90 brian and hit Enter.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=245)** And bring back your chage -l line again and hit Enter.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=250)** Notice that this changes the password expiration date and the maximum number of days between password changes.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=255)** Typically if the password is expired, users are forced to change it during their next login.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=260)** You can configure it so when a user doesn't log in for a specific amount of time after a password has expired, the account will automatically lock.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=267)** To change the number of days the account can be inactive before it's locked to 10, we'll use the -I option.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=273)** Type in clear, then type in sudo chage -I 10 brian and hit Enter and once again, verify by bringing back your chage -l line.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=284)** You may want to disable all password aging.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=287)** To do so, type in clear and type in sudo chage -I -1 -m 0 -M 99999 -E -1 brian.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=304)** The -I -1 will set the password inactive to never.
>
> **[5:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=309)** Dash M0 will set the minimum number of days between password changes to zero, so the user can change their password any time they want.
>
> **[5:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=317)** Dash capital M 99999 will set the maximum number of days between password changes to 99,999 days or 274 years.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=327)** Dash capital E -1 will set account expires to never.
>
> **[5:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=332)** This will disable the password expiration of a user.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=335)** Hit Enter.
>
> **[5:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=336)** And then verify with your chage -l line and hit Enter again.
>
> **[5:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-aging-for-local-user-accounts?u=76281980&t=340)** I would recommend viewing the chage man page for more clarity on these settings.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (9), cat (1), ssh (1)
> **Warnings:** warning (2)
> **Env Vars:** ssh (1)
> **Documentation:** man page (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Create, delete, and modify local groups and group memberships](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=0)** - [Instructor] Groups are an important part of the [[Linux]] [[User Management]] system.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=3)** Each user belongs to a primary group.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=6)** When users create files, they're owned by the user's primary group.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=10)** Users can also belong to additional supplemental groups.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=13)** This gives users the ability to access resources owned by those additional groups.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=17)** We create a group using group add.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=19)** Group add has a few options, but the most common is -g for specifying the group ID.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=25)** Let's create a group called accounting with a group ID of 1,050.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=29)** In a terminal, type in sudo groupadd -g 1050 accounting and hit enter.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=37)** Type in your password when prompted.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=39)** We can verify this by viewing the ETC group file.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=42)** Type in cat /etc/group and hit enter.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=45)** And we can see our new group at the bottom of the file.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=48)** If later we want to modify attributes of our group, we can with group mod.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=52)** For instance, if you want to change the group ID, we'd type in clear and then type in sudo groupmod -g 1051 accounting.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=64)** This will change the group ID number to 1,051.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=67)** Hit enter.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=68)** If accounting was a primary group for any users, their accounts would be automatically updated to reflect the changed group ID.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=74)** Verify by bringing your line back to view the ETC group file again.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=80)** You should see the changed group ID number.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=82)** To place users in our group, we can use G password.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=85)** Let's put the Brian user in the accounting group by typing in clear and typing in sudo gpassword -a brian accounting.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=98)** And hit enter.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=99)** Specifying a user for our group is a very group-centric way of thinking about the problem.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=104)** Bring your ETC group line back to verify.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=106)** Now we should see Brian in the accounting group.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=110)** We can also be more user-centric if we wish by modifying the user so they belong to a group.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=115)** Type in clear and then type in sudo usermod -a for pen,
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=119)** - G accounting brian.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=125)** And hit enter.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=125)** This does the same thing as a group password command but focuses on the user.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=129)** Remember that if you want to add the accounting group to user's current list of groups, you have to include the -a append option.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=136)** Since the G password command is group-centric, we use it to manage the ETC group and ETC G shadow files in much the same way as the password command manages the ETC password and ETC shadow files.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=148)** By using the G password command, we can set passwords for groups.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=152)** Let's give our new group a password.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=154)** Type in sudo gpassword accounting.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=159)** And hit enter.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=160)** And then enter a password when prompted.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=162)** And then enter it one more time.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=164)** We can verify this by viewing the ETC G shadow file.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=168)** Type in sudo cat /etc/gshadow and hit enter.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=174)** We can see that the accounting group at the bottom has a password.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=177)** If you change to the group, we'd use the new group command.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=181)** Change to the accounting group as any user as long as they are not Brian or root.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=185)** I'm currently user1, which will work fine.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=188)** Before we change groups, verify our current group membership by typing in groups.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=194)** And hit enter.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=195)** We can see that I belong to the user1 and wheel groups.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=199)** Now change groups by typing in clear, and then type in newgrp accounting.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=205)** And hit enter.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=206)** And then type in the group password.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=209)** And hit enter.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=209)** Now verify by typing in groups.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=212)** Now we can see that I belong to the accounting group, the wheel group, and user1.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=217)** I'm logged in as user1.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=219)** I do not belong to the accounting group, and I know that, because that group is brand new.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=223)** I just created it, and I have not added user1 to it.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=226)** However, once I used the new group command, I am now in the accounting group temporarily.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=231)** Now let's create a file.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=233)** Type in clear and then type in touch file.txt and hit enter.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=237)** And then get a long listing.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=239)** Type in ls -l, and hit enter again.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=241)** We can see that the group owner of file .txt is the accounting group.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=245)** This means that the accounting group is currently my primary group.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=249)** By using this method, we can temporarily join groups, and by doing so, make them our primary group.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=254)** The reason we wanted to do this as a user that is not Brian is because he already belongs to the accounting group, so he doesn't have to enter his password.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=262)** The same goes for the super user.
>
> **[4:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=264)** To delete a user from a group, we can use the G password command again.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=268)** Type in clear and then type in sudo gpassword -d to delete, brian accounting, and hit enter.
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=277)** If you want groups to manage users and access instead of root, you can add an administrator to the group.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=284)** Type in sudo gpassword -A for administrator, brian accounting, and hit enter.
>
> **[4:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=293)** Now Brian is an administrator of the group.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=296)** Now let's cat the ETC group file.
>
> **[4:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=298)** Type in cat /etc/group and hit enter.
>
> **[5:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=302)** Notice that Brian is not in the accounting group.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=304)** If you want Brian to administer the accounting group and be a part of it, you have to add him again like we did earlier.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=310)** If you have a list of users to add to a group, you can use the -M option.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=315)** To delete a group, we'll use group del.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=318)** Type in clear and then type in sudo groupdel accounting.
>
> **[5:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=324)** And hit enter.
>
> **[5:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=325)** Verify that the group is gone by viewing the ETC group file.
>
> **[5:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=328)** Type in cat /etc/group and hit enter.
>
> **[5:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=332)** Another command that is useful for managing groups is group mod, which let's us change the group ID and name.
>
> **[5:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/create-delete-and-modify-local-groups-and-group-memberships?u=76281980&t=338)** It's not as powerful as user mod, but it's still useful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[User Management]] (1)
> **CLI Commands:** sudo (9), cat (5), ls (1), make (1)
> **Env Vars:** etc (10)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Speakers:** - [instructor] (1), - g (1)
> **File Paths:** file.txt (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)

#### [Log in and switch users in multiuser targets](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=0)** - [Instructor] We have the option to log in as a different user in [[Linux]] but there are times where we might want to switch to a different user temporarily.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=8)** Usually we do this when we went to elevate our privileges to root to run a command or access a resource.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=13)** There's an easy way of telling who you are currently.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=16)** For this we can use the who am I command.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=18)** Type in who am I and hit enter.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=20)** And it says I'm user1.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=22)** Who am I very simply prints out which user I'm logged in as.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=25)** We have another command called log name which at first glance, looks identical to who am I.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=30)** If we view the man pages for both we may be left confused.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=34)** Type in log name and hit enter.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=37)** Let me explain the differences.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=38)** When we log in as a user, we are that user.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=42)** We can however use the SU command to effectively switch to a new user.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=46)** For instance, to switch to root we type in SU space root and hit enter, and then enter a root's password.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=52)** Notice our prompt now says we're root.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=54)** If we type in who am I, it says we're root.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=57)** Now let's try a log name.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=59)** Type in log name and hit enter.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=61)** Log names says I'm user1 which is the user logged in as.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=64)** Think of it this way.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=66)** Who am I tells us who we currently are.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=68)** Log name tells us who we logged in as initially.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=71)** There's another difference between logging in as root and switching to the root user: the environment.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=77)** The environment is the variables and [[System Configuration]] that comes with a logged in user.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=81)** Type in clear and then type in echo space dollar sign capital P-A-T-H and hit enter.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=88)** The path is a list of directories that Linux will look through to find commands.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=92)** Notice that there are directories in the path was my username in them.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=96)** This means that when I switched to root I kept user1's environment.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=100)** To exit the user that you switched to, just type in exit.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=104)** Now that we're back to our user account, type in SU space hyphen space root, and hit enter.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=110)** And once again type in the root user's password.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=113)** After you've logged in, echo the dollar sign path variable again.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=117)** Type in echo space dollar sign upper case P-A-T-H and hit enter.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=121)** This time we've inherited the root user's environment.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=125)** I recommend whenever using the SU command to follow it with a hyphen.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=129)** When you're done being another user, just type in exit.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/log-in-and-switch-users-in-multiuser-targets?u=76281980&t=132)** We can also switch users using the sudo command but sudo is best covered separately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[System Configuration]] (1)
> **CLI Commands:** sudo (2), find (1)
> **UI Navigation:** switch to (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Elevating privileges using sudo](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=0)** - [Instructor] Since the beginning of this course we've been using sudo to elevate privileges.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=5)** We've also introduced the idea of using SU to switch to root thus elevating privileges as well.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=12)** With SU you have to type in the root user's password.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=15)** In order to do so, you have to know the root user's password.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=20)** This can be problematic because if we have multiple users that need to elevate to root then they all need to know the root user's password.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=28)** If one leaves the company then the root password has to be changed and everyone needs to be updated.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=34)** Switching users keeps you logged in as root for the whole session increasing the chances of human error.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=40)** With sudo, you elevate privileges for one command only.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=45)** Also by switching to root, there's very little in the way of [[Accountability]].
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=49)** All log messages say that the root user executed all commands.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=54)** With sudo, all command execution is logged individually.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=59)** When using SU to switch to root, you are all powerful.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=63)** Sudo is more granular in that an administrator can decide which commands you are allowed to run as well as which files you have access to.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=72)** Let's use sudo to elevate our privileges.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=74)** In a terminal type in sudo cat /etc/shadow.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=81)** Sudo will then prompt us for our password and execute cat with elevated privileges.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=87)** When cat is done we're returned to our normal user role.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=90)** Hit enter, type in your password, and hit enter again.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=94)** Sudo allows us to elevate privileges for one command.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=98)** Sudo also caches the user's password for a short period of time for convenience.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=104)** Sudo has a configuration file that allows an administrator to set up who gets to elevate privileges and what they get to do.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=111)** It's granular enough that we can even configure which command options the user can run.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=116)** Let's look at this configuration file.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=119)** The tool to edit the configuration file is called vi sudo which locks the sudoer's file and edits it using vi.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=126)** Let's type in sudo visudo.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=130)** Once we're done editing it checks the syntax and then saves the file.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=135)** Go ahead and hit enter.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=137)** We want to scroll all the way to the bottom.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=139)** This configuration file allows us to group together users, hosts, and even commands and then create access control rules allowing certain users to run certain commands on certain hosts.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=151)** Our user doesn't have an access rule in this file but we do belong to a very special group named wheel.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=158)** You'll want to note the line on your screen that starts with %wheel.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=163)** When sudo is using operating system groups we need to prefix the name with the percent symbol.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=169)** This line gives members of the wheel group permissions to run all commands on all hosts as all users.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=176)** Let's exit this file by pressing escape:q!
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=182)** and hitting enter Let's view the /Etsy/group file using less.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=187)** Type in less /etc/group and hit enter.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=192)** You'll want to take note of the wheel group and check out the members.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=195)** The last column on the right is the members that belong to the wheel group.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=200)** This is how we are allowed to elevate privileges.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/elevating-privileges-using-sudo?u=76281980&t=202)** The quickest way to allow other members to elevate privileges is to add them to this group.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Accountability]] (1)
> **CLI Commands:** sudo (13), cat (3)
> **UI Navigation:** switch to (2)
> **Prerequisites:** set up (1), configure (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Users and accounts](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=0)** - [Instructor] You've now come to the end of the users and accounts chapter.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=8)** This challenge will test your knowledge and understanding of what you've learned.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=12)** For this challenge, I'm going to create a fictitious scenario.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=16)** Your company has hired a temporary software developer named Steve for a three-month contract.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=21)** Steve is a former Unix administrator turned software developer.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=25)** Steve will be working with Sue and Taylor as developers on a secret project but will also be providing additional [[System Administration]] services to your company.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=33)** This means you will need a username, Steve, with a user ID of 1100 within the range in which your company places its developers.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=41)** And primary group ID, also 1100.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=44)** His home directory should be /home/Steve.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=46)** Since Steve came from Unix, his default shell should be the korn shell.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=50)** Steve will also be administrating the development host and he will need admin privileges using sudo.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=55)** You will not need to configure sudo for this challenge.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=59)** Since Steve is a contract worker, his account should expire in 90 days with a five day warning period or one work week before locking the account.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=68)** Steve will need to belong to a group called developers which should have a group password.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=72)** They users Sue and Taylor should also belong to the developers group.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=76)** This is a real world scenario matching our small infrastructure.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=79)** If you want to try the challenge more than once for practice, you may want to create a snapshot of your VM before you start the challenge.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-users-and-accounts?u=76281980&t=86)** When done with the challenge, just run the snapshot to start from the beginning again.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** sudo (2)
> **Warnings:** warning (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Users and accounts](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=0)** - For this challenge, you needed a username Steve, with a user ID of 1100, and a group ID of 1100.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=12)** A home directory of /home/Steve, his shell should be the korn shell.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=16)** He needs sudo admin privileges.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=18)** His account expires in 90 days with a five day warning period.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=22)** He needs to belong into the developer's group which has a password, as well as Sue and Taylor as members.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=28)** Now, let's look at the solution.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=30)** First of all, let's tackle the prerequisites.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=32)** We'll start by installing the korn shell sudo dnf install -y ksh and hit enter.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=41)** Now let's create our users, type in clear type in sudo useradd -u 1100 -s /bin/ksh -G wheel steve
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=56)** this creates username Steve, with user and group IDs of 1100.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=60)** notice, I don't have to specify the group ID, If it's the same as the user ID it also specifies the korn shell and add Steve to the wheel group.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=67)** Any user in the wheel group has sudo admin privileges.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=70)** view the pseudo config file with VI by typing in VI Sudo and then search for the name wheel.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=75)** Now let's add our other users in groups.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=77)** Type sudo useradd Sue and hit enter.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=80)** and then bring your line back and change Sue to Taylor and hit enter again.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=85)** Now create the group by typing in sudo groupadd developers and hit enter.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=92)** Now let's add our users to the developers group, having sudo gpasswd -M sue,taylor,steve developers
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=106)** and hit enter.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=108)** We could have used the usermode command for this but it would have taken three lines to do the same thing.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=113)** Managing users and groups from a group perspective can be faster than from a user perspective.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=118)** Now let's give the developers group a password type in sudo gpasswd developers, and type in the password twice.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=129)** Note that since our three users are in this group they won't have to enter a password, but other users will.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=134)** The last thing we need to do is set account aging for our new contract employee.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=138)** We need his account to expire in 90 days and give him a warning five days before it locks.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=144)** Type in clear and type in sudo chage -E 90 for ninety days
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=151)** - W 5 for five days steve and hit enter.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=157)** Note that if we don't specify the warning period with -W it will default to seven.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-users-and-accounts?u=76281980&t=162)** If you created a snapshot of your VM and you want to try the challenge again just run the snapshot and start the challenge

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (10), dnf (1)
> **Warnings:** warning (3), note that (2)
> **Speakers:** - for (1), - w (1)
> **Prerequisites:** install (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Files Access Control

[↑ Back to Table of Contents](#table-of-contents)

#### [File and directory modes](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=0)** - Standard [[Linux]] permissions support three different modes; read, write, and execute.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=7)** These three modes provide different functionality for files and directories.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=12)** For files, read access means a user can open and read the contents of a file.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=17)** When a user has write access to a file, they can write or modify the contents.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=22)** When a user has execute permissions on a file, it means that the file can be run as an application.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=28)** Commands like LS in applications like Firefox would have their execute bits set.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=33)** What happens when a command is executed is it's loaded into memory and run until told to stop.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=40)** These same three modes act differently on a directory.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=44)** If a user has read access to a directory, it means they can list the contents of the directory which includes the [[Metadata]] about the files and directories in it.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=52)** If a user doesn't have read access and they type in LS inside the directory, they'll see a lot of question marks where the metadata should be.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=60)** If a user has right access to a directory, it allows them to write to the directory.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=64)** Writing to the directory means creating new files in it.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=68)** Execute permissions on a directory are a bit odd.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=71)** You're not going to run a directory like you would a command.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/file-and-directory-modes?u=76281980&t=74)** Execute permissions means that you can enter or traverse the directory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Linux]] (1)
> **CLI Commands:** ls (2)
> **Definitions:** means that (2)
> **Tools:** firefox (1)
> **Speakers:** - standard (1)

#### [Change file and directory ownership](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=0)** - [Instructor] Before we talk about setting permissions we need to talk about file ownership.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=4)** A file is owned by exactly one user and one group.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=7)** If we do an LS-L on a file, we'll see that the long listing includes the files owners.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=13)** I'm using a fictitious file named file.txt as an example.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=16)** You can do a long list on any file in your operating system to see similar data.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=20)** The user owner is the third column from the left.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=23)** The group owner is the fourth column.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=25)** The command that we use to change the ownership of a file is chown.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=29)** The syntax is chown space options, space, username, colon, group name, space, file name.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=35)** To set the user owner, we just use one name.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=38)** For instance, chown space user1, space file.txt.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=42)** Which would change the user owner to user one.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=44)** Keep in mind that in order to change the ownership of a file you need to be root or elevated privileges with Sudo.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=50)** To set the group owner, the syntax will be chown space colon group space file.txt.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=56)** To set both the user and group owners of the files separate them as either a colon or a period Note that the users in groups have to exist before we can change ownership to them.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=67)** You can get a list of existing users by viewing the Etsy password file and existing groups by viewing the Etsy group file.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=74)** For more information about creating users and groups.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=76)** See my course in the course library, titled [[Linux]] user and group management, where we cover this topic in depth.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=82)** We haven't used any options with chown yet.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=85)** The one I use the most is recursive.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=87)** On occasion, I want to ensure that all files in a user's home directory are owned by the user and their primary group.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=93)** To do this I'd type in chown space dash capital R space, the username colon, the user's primary group space slash home slash the user's name.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=104)** Let's experience the changing ownership firsthand, by going to a terminal.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=107)** We'll start off by creating a directory for this exercise using mkdir and then changing into it.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=112)** Type in mkdir space ownexercise and hit enter, and then CD into it by typing in CD space, own exercises and hit enter.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=120)** We can verify our path by typing in PWD.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=124)** Let's create a new file using touch.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=127)** Type touch space file.txt, and hit enter.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=131)** Before we change the ownership we'll create a new user with user add and we'll need to elevate privileges using sudo to create a user.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=137)** Type in sudo space useradd space test user and hit enter.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=142)** Type in your password if prompted.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=144)** You can verify this by viewing the Etsy password file.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=146)** Type in cat space slash etc slash passwd, and hit enter.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=151)** And you can see on the last line, our new user.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=154)** Now let's create a group using groupadd.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=156)** Type in clear and then type in sudo space groupadd space test group, and hit enter again.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=161)** Now verify by viewing the Etsy group file.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=165)** Type in cat space slash etc slash group and hit enter.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=167)** And once again, it's the last line in the file.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=170)** Now let's assign ownership to our file.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=173)** Type in clear and then type in studio space chown space test user colon test group space file.txt and hit enter and verify with LS space dash L and hit enter again.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=185)** Here we can see our user owner and group owner have been changed.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/change-file-and-directory-ownership?u=76281980&t=189)** For more information view the man page for chown by typing in man space, tone, and hit enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **CLI Commands:** chown (8), sudo (4), ls (2), mkdir (2), cd (2)
> **File Paths:** file.txt (5)
> **Warnings:** keep in mind (1), note that (1)
> **Env Vars:** pwd (1)
> **Documentation:** man page (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)

#### [Set permissions using numeric mode](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=0)** - [Instructor] There are two different methods of setting permissions in [[Linux]].
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=3)** Numeric and symbolic.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=4)** Let's talk about numeric mode now.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=6)** When we do a long listing with ls we see several things.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=10)** We see the permissions, ownership, timestamp, file name.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=14)** and a few other smaller bits, such as size.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=18)** There are 10 characters on the left-hand side of the listing.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=21)** The first character shows the type.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=23)** If it's a dash, it's a file.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=24)** If it were a directory, it would be the letter D.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=27)** If it were a symbolic link, it would be an L.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=29)** If it were a character device, a C, a P for a pipe and a B for a block device.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=35)** The next nine characters, are divided up into groups of three.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=38)** The first group is the user owner of the file.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=41)** The user owner in this case is user one.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=44)** The user owner has read, write and execute permissions.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=48)** The second group of three, is for the group owner.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=50)** The group owner in this case is accounting.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=53)** The accounting group has read and execute permissions.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=56)** The last group of three, is for everyone that is not the user owner, or that doesn't belong to the group.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=62)** These are the permissions for the [[Representational State Transfer (REST)|rest]] of the entire known universe.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=66)** Either in this case, has no permissions.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=68)** To set permissions in numeric mode, we have to know the values of read, write and execute.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=73)** Read has a value of four, Write has a value of two, and execute has a value of one.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=79)** To set read, write and execute for the user owner, we'd add four, two, and one for a total of seven.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=85)** To set read, and execute for the group owner, we'd add four and one for a total of five.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=90)** And lastly, other doesn't have any permissions, so we'd set it to zero.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=94)** To set the user group and other permissions for this file, we'd use a numeric value of seven, five, zero.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=100)** The command we use to set permissions it's chmod or change mode.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=103)** The syntax for chmod is chmod [options] <permissions> <filename> To set the permissions to 750, we'd type chmod 750 file.txt.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=115)** Let's go to a terminal and create a directory for this exercise.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=118)** In a terminal type in mkdir permexercise, and hit Enter.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=123)** And then cd into it.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=124)** Type in cd permexercise, and hit Enter again.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=128)** Now let's create a file using touch.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=129)** Type in touch file.txt and hit Enter.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=133)** And verify with ls -l.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=135)** Initial permissions are assigned to new files based on the value of the umask, which we will cover in another video of this course.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=142)** Let's use the chmod commander, give the user owner read, write and execute.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=146)** The group owner, read and execute, and other will get no permissions.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=150)** Read, write and execute adds up to seven.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=152)** Read and execute adds up to five.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=155)** And no permissions for other equates to zero.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=157)** So type in chmod 750 file.txt and hit Enter.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=163)** And then verify with ls -l, and hit Enter again.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=166)** We can also set permissions recursively by specifying the dash capital R option.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=171)** However, I can't think of a practical application for using chmod recursively with numeric mode.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-numeric-mode?u=76281980&t=176)** There is a use case for recursive with symbolic mode, that we'll cover in another video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** chmod (7), ls (3), cd (2), mkdir (1)
> **File Paths:** file.txt (3)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Set permissions using symbolic mode](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=0)** - [Instructor] There are two different methods of setting permissions in [[Linux]], numeric and symbolic.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=4)** For this video, let's talk about symbolic mode.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=7)** When we do a long list with LS, we see several things.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=10)** We see the permissions, ownership, timestamp, file name and a few other smaller bits such as size.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=17)** There are 10 characters on the left hand side of the listing.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=20)** The first character shows the type, if it's a hash as a file.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=23)** If it were a directory it would be a letter D, if it were a symbolic link it would be an L, if it were a character device it's C, a P for a pipe and a B for a block device.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=33)** The next nine characters are divided into groups of three.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=36)** The first group is the user owner of the file.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=38)** The user owner in this case is user1.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=41)** The user owner has read, write and execute.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=44)** The second group of three is for the group owner.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=47)** The group owner in this case is accounting.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=49)** The accounting group has read and execute.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=52)** The last group of three is for everyone that is not the user owner or that doesn't belong to the group.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=58)** These are the permissions for the [[Representational State Transfer (REST)|rest]] of the known universe.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=60)** Other in our case, has no permissions.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=63)** In symbolic mode, we assign a value to each position using a symbolic representation of the desired permissions.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=70)** Unlike numeric mode, there is no math involved.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=73)** To set, read, write and execute for the user owner, we just specify u=rwx.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=79)** To set, read and execute for the group owner, we'd use g=rx .
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=84)** To set permissions to nothing for other, just use O= with nothing after it.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=90)** To set permissions for multiple positions at once, just separate them with a comma.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=94)** With symbolic method, we can also add permissions by changing the equal sign to a plus.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=99)** To add rwx to user, use u+rwx.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=103)** To subtract permissions, replace the equals with a minus sign.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=107)** For instance, to take execute permissions away from other, we'd type o minus x.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=112)** The command we use to set permissions is chmod or change mode.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=115)** The syntax for chmod is chmod space options, space permissions, space filename.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=121)** Let's go to a terminal and create a directory for this exercise.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=124)** In the terminal type in mkdir permsymexercise and hit Enter.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=130)** Now change into it.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=131)** Type in sudo permsymexercise and hit Enter again.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=135)** Now let's create a file using touch.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=137)** Type in touch file.txt and hit Enter and verify with ls -l.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=143)** Default permissions are assigned to new files based on the value of the Umask.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=147)** In another video of this course we cover using Umask.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=151)** To change permissions we'll use the Chmod command.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=153)** I'm going to give the user owner read, write and execute, the group owner, read, write and execute and other will get no permissions.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=160)** Type in clear and type in chmod u=rwx,g=rwx,O=
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=172)** with nothing after it, file.txt and hit Enter.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=176)** Verify this with ls -l and hit Enter again.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=180)** Symbolic mode often requires more typing but some think it's easier to understand.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=185)** One of the major advantages to symbolic mode is that you can add or subtract permissions.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=190)** The reason this is so useful is that we don't have to know the current permissions to add or take away.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=195)** With numeric mode, we'd have to get the current permissions and then recalculate the desired permissions.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=200)** Let's take execute permissions away from the group.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=203)** Type in clear and type in smart g-x file.txt and hit Enter and verify with ls -l.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=212)** You can also group the positions.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=214)** For instance, if we wanted to take away execute for user group and other, we could type in chmod ugo-x file.txt and hit Enter.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=226)** We can also specify A for all positions which would include user owner, group owner and other.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=232)** Type in chmod a-x file.txt and hit Enter.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=239)** We can also set permissions recursively by specifying the dash capital R option.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=244)** This is useful with symbolic mode because we can add or subtract permissions.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=249)** To set this up, let's create a username Bob.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=252)** Type in clear and type in sudo userad bob and hit Enter.
>
> **[4:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=256)** Type in your password if prompted.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=258)** If I wanted to remove all execute permissions for every file in /home/bob, we'd type in sudo chmod -R a-x /home/bob and hit Enter.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=275)** We have to elevate privileges using Sudo because we're changing another user's permissions.
>
> **[4:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-permissions-using-symbolic-mode?u=76281980&t=280)** For more information about the Chmod command, check out the man page by typing in man chmod and hit Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** chmod (10), ls (4), sudo (4), mkdir (1)
> **File Paths:** file.txt (5)
> **Analogies:** for instance (2), such as (1)
> **Tools:** terminal (2)
> **Documentation:** man page (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Initial permissions using umask](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=0)** - [Instructor] When files are created, initial permissions are applied automatically.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=4)** These permissions are calculated based on a bit mask called umask.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=8)** To see a umask, type into a terminal umask and hit enter.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=12)** We can also view the umask in symbolic notation by using the dash capital S option.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=17)** Type in umask space dash capital S and hit enter.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=21)** The umask can have either three characters or four.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=24)** Feel free to add the leading zero or leave it off as standard permissions.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=28)** Notice that the umask isn't the same format as numeric permission, such as seven, five four is actually upside down since it's a mask.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=35)** To calculate initial permissions, we'll have to subtract the umask from maximum allowed initial permissions based on whether the item is a file or a directory.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=44)** For directories, our maximum initial permission are 777 since having execute on a directory does not create a [[Security Risk]].
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=51)** Let's use a umask of 022.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=54)** Now let's subtract the umask from the maximum initial permissions of a directory.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=58)** 777 minus 022 equals 755 or in symbolic mode rwxr-xr-x.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=67)** Let's verify this by going to a terminal and creating a directory.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=70)** Type in mkdir space umaskdir and hit enter.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=74)** And verify with ls space dash l.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=77)** Note that the permissions on our new directory are rwx-rx-rx or 755 just as our calculations would show.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=85)** The maximum initial permissions for a file are different than for a directory.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=89)** For security reasons, we don't allow execute permissions on files by default.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=93)** So the maximum initial permission mode on a file is 666 or rw for the user group another.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=99)** Having execute turned off by default keeps files from being automatically executable after being copied from one place to another.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=106)** This includes files downloaded from the internet.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=109)** We will use umask of 022 again.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=112)** To get the initial permissions for files subtract the right three digits of the umask from 666.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=118)** 666 minus 022 equals 644 or in symbolic mode rw-r--r--.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=126)** Let's verify this by going to a terminal and creating a file.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=129)** Type in clear and then type in touch space umaskfile.txt and hit enter.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=135)** And then verify with ls space.dash l.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=138)** Notice that the permissions on our new file are rw-r--r-- or just as their calculations would show.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=145)** So we can temporarily change our umask by using the umask command.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=149)** Type in clear and then type in umask space, 0002 and hit enter.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=154)** And we can verify by tipping in umask and hitting enter again.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=157)** A umask of 0002 would give default directory permissions of our rwx for the user, rwx for the group owner and rx for other.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=166)** For files that would give rw for the user owner, rw for the group owner and r for other.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=172)** This only works for our current login session.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=175)** If a user wants to change the umask, they can add it to their batch start-up file using an editor.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=179)** Type in vi space -/.bashrc and hit enter.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=184)** In this file going to insert mode, and in this file, we could add umask space 0002 and save and exit by pressing Escape colon x exclamation mark and hitting enter.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=196)** I'm going to quit without saving by pressing escape colon Q exclamation mark and hitting enter.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=202)** If an administrator wants to change the system wide umask, they can add it to a file and slash empty slash profile dot d.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=208)** Let's create a new file here named umask.sh using vi.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=212)** We'll need to elevate privileges using sudo.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=214)** Type in sudo vi /etc/profile.d/umask.sh and hit enter.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=223)** Type in your password if prompted.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=224)** Go into insert mode by pressing the I key.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=227)** We could just add a line here that says umask space 0002 but as customary to have a different umask for root and other users, so we'll add a condition.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=237)** Type in, if space left square bracket space double quote, dollar sign, uppercase UID, double quote space dash ge for greater than or equal to space 1000 space right square bracket space semi-colon then new line tab umask space 0002 new line FI.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=261)** This only overrides the system umask if the user's ID number is 1000 or greater.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/initial-permissions-using-umask?u=76281980&t=265)** If you save an exit, this won't take effect until you log in again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Risk]] (1)
> **CLI Commands:** ls (2), sudo (2), mkdir (1)
> **File Paths:** umaskfile.txt (1), umask.sh (1), etc/profile.d/umask.sh (1)
> **Tools:** terminal (3)
> **Env Vars:** uid (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)

#### [Special file bits: SUID and SGID](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=0)** - [Instructor] There are additional special bits for privilege escalation on executable files.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=5)** The first is called set user ID, or SUID, which instructs [[Linux]] to run the executable file as the user owner of the file.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=13)** We also have set group ID, or SGID, which instructs Linux to run the executable file as the group owner of the file.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=21)** And lastly, Sticky.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=23)** Historically in Unix, if you set the Sticky bit on a program, it would remain in swap, making it execute faster the next time it is run.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=31)** Some versions of Unix and BSD still maintain this functionality.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=35)** But it has never existed in Linux.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=37)** Linux caches all executables for faster execution anyway.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=40)** So there's little need for a Sticky bit.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=43)** In a terminal, let's do a long list on the su command by typing in ls, space, dash l, space, /usr/bin/su and hit enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=52)** The first thing you should notice is that the file is bright red.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=55)** This tells you something special is happening here.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=57)** Let's take a look at the permissions.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=59)** The permissions for the user owner are rws.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=62)** The s in the user owner's execute position means that we have SUID bits set.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=68)** If the s is lowercase, then the underlying execute bit is also set.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=72)** If the S is uppercase, then the execute permissions are not set.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=76)** The case of the letter s is the easiest way of telling if the execute bit is set or not.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=81)** When the s exists in the group owner permissions, then the SGID bit is set.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=86)** The lowercase s again in the case of the execute permissions are also set.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=90)** Just like before, if the S is uppercase, then underlying execute permissions are not set.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=96)** When the SUID bit is set and a regular user such as user one executes the command, their privileges get elevated to that of the user owners.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=105)** In our example, user one would be executing the su command as root.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=109)** This means this command would have all of the power of the root user.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=113)** This is all because of the SUID bit.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=115)** Let's talk about how to set the SUID bit.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=118)** First, let's look at the standard permissions.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=121)** For the user owner, read permissions are set, which is equal to four.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=125)** Write permissions are set which is equal to two and execute is set.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=129)** We know this because the s is lowercase.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=131)** As such, execute is equal to one.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=134)** Combined, the user owner permissions in numeric mode are equal to seven.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=139)** For the group owner we have read, which is equal to four, and execute which is equal to one for a total of five.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=144)** The same goes for the permissions for other.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=147)** Our total permissions in numeric mode are 755.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=150)** Just like read, write, and execute with standard permissions, SUID, SGID, and Sticky have values.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=157)** SUID is worth four.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=159)** SGID is worth two and Sticky is worth one.
>
> **[2:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=163)** Keep in mind that Sticky has no effect on files in Linux.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=166)** To set the SUID bit, we just prefix the permissions with the extra digit.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=171)** Our standard permissions are 755.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=174)** We have an s in the user owner permissions, so we add a four for SUID.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=179)** We do not have any special bits in the group owner or other positions.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=182)** Add it up, the result is four.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=185)** Our total permissions in numeric mode with SUID set are 4755.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=191)** To set these permissions using numeric mode, you would type sudo chmod 4755 /usr/bin/su.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=201)** We can also use symbolic mode as well by typing sudo chmod, space, u for user, plus s, space, /usr/bin/su.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=211)** The SGID bit is very similar to SUID.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=214)** When we have SGID set, the s resides in the execute position of the group owner's permissions.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=221)** When a regular user such as user one executes a command with SGID set, it runs with the privileges of the group owner of the file.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=229)** In this case, the screen group.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=231)** To add the SGID bit to a file, we prefix the permissions with a two.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=235)** For the screen command, the permissions would be 2755.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=240)** So we'd set SGID with sudo chmod 2755 /usr/bin/screen.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=248)** We can also set this with symbolic mode if we use sudo chmod g for group, plus s, space /usr/bin/screen.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=258)** Because these commands allows privilege escalation without prompting for a password, it may be advantageous to know where in the file system they are for security reasons.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=267)** We can use the find command to locate SUID and SGID files.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=271)** Type into a terminal sudo find, space slash, that'll be where we're looking, the entire operating system, space, dash perm, space, dash 4000 and hit enter.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=283)** And type in your password if prompted.
>
> **[4:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=285)** This will find all files with the SUID bit set.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=288)** To find files with the SGID bit set, we'll change the line slightly.
>
> **[4:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-file-bits-suid-and-sgid?u=76281980&t=292)** Type in clear, then bring your line back and change 4000 to 2000 and hit enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5)
> **Env Vars:** suid (13), sgid (11), bsd (1)
> **CLI Commands:** sudo (5), chmod (4), find (4), ls (1)
> **Analogies:** just like (2), such as (2), similar to (1)
> **Tools:** terminal (2)
> **Definitions:** is called (1), means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Special directory bits: SGID and Sticky](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=0)** - [Instructor] We can apply Special Bits on Directories just like we can do files.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=4)** However, the behavior is different for directories.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=6)** Set user ID or SUID has no effect on directories.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=11)** Set Group ID or SGID provides group inheritance for files and directories created inside the directory.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=18)** Unlike with executables, the sticky bit works on directories in [[Linux]].
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=22)** When the sticky bit is set for a directory, only the owners of the files can delete them.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=27)** It might be easier to show you how SGID works on directories rather than try to explain it.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=31)** After I've shown you we can talk about it.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=33)** In a terminal, let's create a directory and slash home for this exercise using MK DIR.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=38)** Type in CD space slash home, and hit enter.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=41)** Be sure that you are in slash home, and not your user's home directory.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=44)** You can verify with PWD, now type sudu, space, MK dir, space accounting, and hit enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=52)** Now let's verify it again with LS space dash L and hit enter.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=56)** You can see that since we created it using sudu, it's owned by the root user and the root group.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=62)** The permissions for the user owner are RWX, the group owner RX and other RX.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=68)** Now let's create a group called accounting.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=70)** If you already have this group, you can skip this step.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=73)** If not type in clear, then type in sudu, space, group add, space accounting, and hit enter.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=79)** And now change the ownership of your accounting directory to the accounting group.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=83)** Type in sudu, space, chown, space, colon accounting, which is the group name space, and then the directory name, which is accounting, and hit enter.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=93)** Now let's add the SJD bit, as well as right permissions for the group owner.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=97)** Type in sudu, space, chmod, space two for SJD, 770 space accounting, and hit enter.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=107)** And verify with LS space dash L.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=110)** This should give us RWX for the root user, RWX for the accounting group, and no permissions for other, plus SJD as you can see by the letter S, in then group execute position.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=122)** Now that we have our director in group set up, let's talk about how SGID bits affect directories.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=127)** SGID bits on directories represent the only inheritance in standard Linux permissions and ownership.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=133)** All files and directors created inside of your accounting directory, will inherit the group owner.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=137)** Which in our case is the accounting group.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=139)** If user one creates a file in the accounting directory, it will be owned by user one and the accounting group.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=145)** If Ted creates a file, it would be owned by Ted and the accounting group, and so on.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=150)** This allows us to create a directory for group collaboration.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=153)** Note, that for our setup, all users creating files in this directory, would need to belong to the accounting group in order for them to have right access.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=162)** Let's see this in action, in a terminal let's create a new user.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=165)** Type in clear and then type in sudu space user add, space dash capital G for supplemental group, space, accounting, space, Ted and hit enter.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=176)** Give Ted a password by typing in sudu space P-A-S-S-W-D space Ted, and enter his password twice.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=184)** This will create a username Ted, who also belongs to the accounting group.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=188)** We can verify this by viewing the empty group file.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=190)** Type in cat space slash ETC slash group, and hit enter.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=194)** And you should see the accounting group at the bottom and Ted should be in it.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=197)** Now let's change to this user and CD into the accounting directory.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=201)** Type in clear, and then type in SU space, hyphen space, Ted and hit enter, and enter Ted's password.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=208)** Now CD to the accounting directory, type in CD space slash home slash accounting and hit enter.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=214)** Verify your path with PWD.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=216)** Now let's create a file and list that using LS dash L.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=219)** Type in touch, space, file, dot TXT, and then list it by typing LS space dash L.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=226)** You can see that our file is owned by Ted and the accounting group.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=229)** Now type an exit to go back to your previous user.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=232)** Another special bit is the sticky bit.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=235)** We set the sticky bit by adding a one to the left of the permissions.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=239)** Let's create a directory and place the sticky bit on it.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=241)** Type in clear, then type in CD, space, slash, home, and hit enter.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=246)** Now make a directory by typing in CD space, MK dir, space, sticky dir and hit enter again.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=252)** We'll give all permissions to all people plus the sticky bit.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=255)** Type in sudu space chmod space 1777 space sticky dir, and hit enter, and verify with LS space dash L.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=263)** We should see that our directory has a T in the execute position of the permissions of other.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=268)** It will be a lowercase T if execute for other is set, otherwise it will be an uppercase T.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=274)** The purpose of the sticky bit on a directory is to keep users from deleting or moving each other's files.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=279)** Let's try this, as your user one, change into the sticky directory and create a file.
>
> **[4:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=285)** Type in clear and then type in CD, space, slash, home, slash, sticky dir and hit enter, and then type in touch, space, file, dot TXT, and hit enter again.
>
> **[4:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=293)** Now give RWX permissions to everyone by typing in chmod space, 777 space, fill dot TXT and hit enter again, and verify by typing in LS space dash L.
>
> **[5:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=305)** Now, SU to Ted, type in SU space, hyphen, space, Ted, and hit enter, and enter Ted's password.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=312)** Change into the sticky dir by typing in CD space slash home, slash sticky dir, and hit enter.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=318)** Now get along list of the files by typing LS space dash L.
>
> **[5:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=321)** We can see that file dot TXT has RWX for user group and other.
>
> **[5:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=326)** This means we have full access to it including delete, now type in RM space file dot TXT and hit enter, and we should get an error message.
>
> **[5:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=334)** Even though Ted has RWX permissions on the file, he still can't remove it.
>
> **[5:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=339)** The sticky bit is used mainly for world ride able shared directors like slash TMP.
>
> **[5:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=344)** Type in LS space dash LD for directory space slash TMP, space slash TMP and hit enter.
>
> **[5:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/special-directory-bits-sgid-and-sticky?u=76281980&t=351)** You should see the T in the other permission section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **Env Vars:** rwx (6), txt (5), sgid (4), sjd (3), tmp (3)
> **CLI Commands:** cd (8), ls (8), chmod (3), chown (1), cat (1)
> **Tools:** terminal (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Read access control lists](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=0)** - [Instructor] Because ACLs are layered on top of [[Linux]] permissions, we can't use standard tools such as LS to list them.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=7)** With ACLs, comes a suite of new tools.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=9)** Let's take a look.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=11)** Go to a terminal and create a directory using mkdir and then change into it.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=16)** Type in mkdir space aclexercise and hit Enter.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=22)** Now type in cd space aclexercise and hit Enter again.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=26)** You can verify your path by typing in pwd.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=30)** Now let's create a file and place an ACL on it.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=33)** Type in touch space aclfile and hit Enter.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=37)** We can verify this with ls space -l.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=40)** In order to read the ACLs on a file, we'll use the getfacl command.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=44)** Getfacl is installed by default in CentOS, but if you're using another distribution, you may have to install ACLs before proceeding.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=52)** Type in g e t f a c l space aclfile and hit Enter.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=57)** This lists the name of the file, the user owner, the group owner and permissions for the user group and other.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=64)** Basically, this lists the standard Linux permissions.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=68)** We can also view the same data in tabular format by passing the -t option to getfacl.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=74)** Type in g e t f a c l space -t aclfile and hit Enter.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=81)** Tabular format makes it a bit easier to see which permissions belong to which user.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=86)** Now let's set an ACL using setfacl.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=90)** Type in setfacl space -m for modify, space, user: and then we'll place the username here which is going to be root:colon.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=102)** And then the permissions which will be rwx space aclfile, and then hit Enter.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=109)** This will set an acl for the root user.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=112)** We cover setting ACLs in detail in another video of this course.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=116)** Let's verify this with ls space -l and hit Enter.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=121)** You may notice that the character after the permissions is now a plus symbol.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=125)** This is the only indication that we have an ACL on this file.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=129)** Now let's use getfacl again to list the ACL file.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=134)** Getfacl space aclfile and hit Enter.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=138)** Here, we can see that our ACL for the root user has been set.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=142)** So you may also notice that there's a mask line that never used to be there.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=147)** The mask is the maximum allowed permissions.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=150)** Currently, it's set to rwx.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=153)** We can also list ACLs and permissions recursively using getfacl and store this for later use.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=160)** Type in g e t f a c l space -R space /home space > space home -perms .txt.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=171)** This will use the getfacl command and recursively go through all files in /home and output the ACLs and permissions to a file named home -perms .txt, hit Enter.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=184)** It looks like we have an error message, but really this is just a warning saying it's removed the leading slash from absolute path names, and that's fine.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=193)** Now let's look at the file using cat.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=195)** Type in cat space home -perms .txt, and hit Enter.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=201)** This is the permissions and ACLs for every file in /home.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/read-access-control-lists?u=76281980&t=206)** For more information on reading ACLs on files, hit the getfacl command main page, by typing in man space g e t f a c l and hitting Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **CLI Commands:** ls (3), mkdir (2), cat (2), cd (1)
> **Env Vars:** acl (5)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Prerequisites:** install (1)

#### [Set access control lists (ACLs)](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=0)** - [Instructor] ACLs are turned on by default in CentOS for the OS partition only.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=5)** In comparison to being creative with standard permissions along with special bits and UMass to solve problems, ACLs are downright easy to implement.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=14)** With ACLs, you just give the right people and groups the access they need and you're done.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=19)** The command we use to assign file ACLs is setfacl.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=23)** The syntax is setfacl space dash m space user colon the username, colon the desired permissions space.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=32)** And then the file name.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=34)** For example if we wanted to set our rwx permissions for the username Bob on slash home slash file dot txt we'd type setfacl dash m for modify user colon Bob for the username rwx for permissions followed by the file path.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=49)** In this case slash home slash file dot txt.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=53)** Let's go to a terminal to use the setfacl command.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=56)** To set up this exercise we'll create a directory called acldir using mkdir, type in sudo space mkdir space slash home slash acldir and hit enter type in your password and hit enter again.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=70)** We had to elevate privileges because we're creating a directory outside of a user's home directory.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=76)** If it already exists, that's fine.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=77)** Just change into it.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=78)** Using cd space slash home slash acldir, and hit enter.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=84)** We can verify our path by typing in pwd.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=88)** Now that we're in it let's create a file type in sudo space touch space file dot txt and hit enter.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=96)** Now let's create a user and two groups.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=98)** Type in sudo space useradd space Bob and hit enter.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=103)** If the user already exists, that's fine.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=105)** Just move on to the next step.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=107)** To create the groups let's type in sudo space groupadd space accounting and hit enter.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=115)** To create the marketing group let's type in sudo space groupadd space marketing and hit enter again.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=121)** If you already have any of these items from another lesson, that's fine.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=126)** We can verify users by viewing slash etc slash passwd using cat.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=131)** So type in cat space slash etc slash passwd and hit enter.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=137)** The bottom line should have our Bob user.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=140)** We can also verify our user groups by typing in cat space slash etc slash group and hit enter.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=147)** You can see that the last two lines are the accounting group and the marketing group, which we just created.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=152)** Now let's clear our screen by typing in clear and set some acls type in sudo space setfacl space dash m space user colon Bob colon rwx space file dot txt and hit enter.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=171)** Now let's look at the acl using getfacl type in getfacl space file dot txt and hit enter.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=179)** In the output of getfacl, We see the file name of file dot txt the user owner which in my case is root and the group owner, which is root again.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=188)** The most interesting part is the acl for the username Bob, here we are granting rwx to Bob.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=195)** To set a group acl, We use setfacl again, type in sudo space setfacl space dash m space group colon accounting colon rx space file dot txt and hit enter.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=214)** We can set more than one acl one at a time by specifying them separated by commas.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=219)** Type in sudo space setfacl space dash m space user colon Bob colon rwx comma group colon accounting
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=232)** colon rx space file dot txt and hit enter.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=237)** This sets the user ACL as well as the group ACL.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=240)** This is getting a bit long, so let's shorten it up a bit.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=244)** We can type in sudo space setfacl space dash m space u colon Bob colon rwx comma g colon accounting colon rx space file dot txt.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=260)** We have substituted the [[Microsoft Word|word]] user for u and group four g.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=265)** Note that if we set a user ACL and don't specify the username it sets the standard permissions for the user owner.
>
> **[4:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=272)** For instance, type in sudo space setfacl space dash m space user colon colon rwx space file dot txt.
>
> **[4:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=283)** It sets an acl let's look at it, type in getfacl space file dot txt.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=290)** This sets the permissions for the user owner.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=296)** This is exactly the same as typing in sudo space chmod space u equals rwx space file dot txt and hitting enter.
>
> **[5:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=306)** You can set the user owner permissions group owner permissions and other using the same method.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=312)** You can also say ACL's recursively using the dash capital R option for instance, type in sudo space setfacl dash capital R dash m for modify space user colon Bob colon rwx space slash home slash Bob and hit enter.
>
> **[5:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=333)** This would recursively go through slash home slash Bob and set an acl for every single file that gives Bob rwx access.
>
> **[5:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-access-control-lists-acls?u=76281980&t=341)** For more information about setfacl, check out the man page by typing man space setfacl and hitting enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** sudo (12), cat (3), mkdir (2), cd (1), chmod (1)
> **Env Vars:** acl (4)
> **Analogies:** for instance (2), for example (1)
> **Documentation:** man page (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)

#### [Configure inheritance with default access control lists](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=0)** - [Instructor] Standard [[Linux]] permissions only have one type of inheritance in the form of the SGID bit on directories.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=7)** In that case, the files and directories created inside inherit the group owner of the parent directory, which there can only be one of.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=14)** ACLs go much further as they let files and directories inherit any number of user or group permissions.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=20)** These ACLs are called default ACLs.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=24)** Keep in mind that if you want to allow a user to access a directory, you set a regular ACL on it first.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=31)** If however, you want that user to access all new files and directories inside it, then set a default ACL.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=37)** Usually, you'll need to do both of these operations.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=41)** For this exercise, we'll make a directory called ACL dir.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=45)** In a terminal, type in sudo mkdir /home/acldir and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=52)** Type in your password and hit Enter again.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=55)** If you already have this directory from another lesson, go ahead and use it.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=59)** Now let's change into using cd.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=61)** Type in cd /home/acldir and hit Enter.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=66)** You can verify your pass by typing in pwd.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=70)** Now that we're in the directory, let's create a new dir called dir1.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=74)** Type in sudo mkdir dir1 and hit Enter.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=79)** Again, if you already have this directory, ignore the warning message and go ahead and use it.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=84)** Now let's set an ACL for the Bob user.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=87)** We can verify that we have a Bob user by viewing etc password with cat.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=92)** Type in cat /etc/passwd and hit Enter.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=98)** If you do not have a Bob user, you'll need to add one by typing in sudo useradd bob and hit Enter.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=106)** Now I'm going to clear my screen and set some ACLs.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=110)** Let's set an ACL to let Bob have access to our directory named dir1.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=114)** Type in sudo setfacl -m user:bob:rwx dir1 and hit Enter.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=126)** Verify this with getfacl dir1 and hit Enter again.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=131)** We can see our ACL that we just set for Bob.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=134)** Now that the user named Bob can access dir1, let's make sure you can access any files that may be currently in the directory using recursive mode.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=142)** Type in sudo setfacl -R -M for modify user:bob:rwx dir1
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=156)** and hit Enter.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=157)** Now we just created dir1 but if you already had a dir1 and there were files in there, this would set an ACL on every file inside of dir1, granting Bob rwx access.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=168)** The previous two steps ensure that Bob had read/write next to your permissions on the directory.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=173)** They also ensure that all files that currently exist in the directory are accessible to Bob as well.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=178)** Let's create a default ACL for any future files that will be created in dir1.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=183)** Type in sudo setfacl -D -M user:bob:rwx dir1 and hit Enter.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=196)** Now let's verify this with getfacl.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=198)** Type in getfacl dir1 and hit Enter.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=202)** We can see a regular ACL granting Bob rwx access to the directory.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=207)** This is the default ACL ensuring that any new file or directory created inside of dir1 will inherit this ACL.
>
> **[3:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=215)** We can test the default ACL by creating a file in dir1 as any other user.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=219)** Which user you use doesn't matter as long as you're not Bob.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=223)** Type in cd/home/acldir/dir1 to ensure that you're in there.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=229)** Now type in sudo touch aclfile2.txt and hit Enter.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=237)** Now get the ACLs again using getfacl.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=239)** Type in getfacl aclfile2.txt.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=244)** We can see that we have an ACL already on the file even though we didn't set it.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=248)** This was the ACL that was inherited from the default ACL.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=252)** Now you may also notice that we've given Bob rwx but on the right hand side of the screen, it says effective read/write.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-inheritance-with-default-access-control-lists?u=76281980&t=259)** This is because the mask, or maximum permissions are squashed to read/write We'll cover this in another video in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **CLI Commands:** sudo (7), cd (3), make (2), mkdir (2), cat (2)
> **Env Vars:** acl (15), sgid (1)
> **File Paths:** aclfile2.txt (2)
> **Warnings:** keep in mind (1), warning (1)
> **Prerequisites:** you'll need (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Delete access control lists](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=0)** - [Instructor] Due to the added complexity of ACLs, there are three different ways of deleting ACLs on a file or directory.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=7)** For this exercise, we'll need to create a directory and assign multiple ACLs to it.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=11)** Lets create directory called acldeldir using mkdir.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=16)** In a terminal type mkdir space acldeldir and hit enter.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=22)** Now let's add a couple of ACLs to it.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=25)** Type in setfacl space dash m, space user colon root colon rwx space acldeldir.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=34)** There there is a forward slash at the end of my director name, because I typed in ACL, and then hit my tab key, and it completed the line for me.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=42)** This is a great space saver, and I recommend it.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=44)** Hit enter.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=45)** Now let's add a group ACL by typing in setfacl space dash m space group colon root colon rwx space acl, and then I'll hit my tab key again and it'll complete the line.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=60)** Hit enter.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=62)** Let's add another group ACL by typing in setfacl space dash m space group colon audio colon rw space acldeldir, and hit enter.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=74)** The last ACL will add as a default ACL.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=77)** Type in setfacl space dash d space dash m space user colon root colon rwx space acldeldir, and hit enter.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=90)** Now let's verify these ACLs with getfacl.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=93)** Type in getfacl space acldeldir, and hit enter.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=97)** We should see our user ACL, group ACLs and the default ACLs as well.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=103)** To delete ACLs we'll use the setfacl command again.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=106)** There are three different options for deleting ACLs, dash x deletes specific ACLs, dash k deletes all default ACLs, and dash b deletes all ACLs.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=119)** To delete a specific ACL, specify the type a name such as user colon root or group colon audio.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=127)** If you just specify the name setfacl, we'll assume it as the user ACL, and attempt to delete it.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=133)** To delete a specific default ACL, just specify default colon the ACL type colon and name.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=142)** For instance, default colon user colon route.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=148)** To delete all default ACLs use the dash d option.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=152)** And to delete all ACLs use the dash b option.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=156)** Let's go back to our terminal and delete some ACLs.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=159)** Type in setfacl space dash x space group colon root space acldeldir.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=168)** The ACL we're targeting is the root group ACL.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=172)** Go ahead and hit enter, and then verify with getfacl.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=175)** Hit your up arrow key twice, and then hit enter.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=178)** We see that the root group ACL is now gone.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=182)** Now let's just specify a username.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=184)** Type in setfacl space dash x space root space acldeldir and hit enter.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=192)** Press up arrow key twice and then verify with getfacl.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=196)** We can see the root user ACL is now gone.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=200)** Now let's delete all default ACLs.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=203)** Type in setfacl space dash k space acldeldir, and then verify with setfacl, and hit enter.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=212)** We can now see that all default ACLs are gone.
>
> **[3:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=214)** To delete any remaining ACLs, we can use the dash b option.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=219)** Type in setfacl space dash b acldeldir and hit enter.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=225)** And once again verify with getfacl by pressing your up arrow key twice.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=230)** Now we can see that all ACLs are gone.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=233)** If we wanted to remove all ACLs from all files in a director tree, we can use recursive mode.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=238)** Type in setfacl space dash capital r space dash b space acldeldir and hit enter.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/delete-access-control-lists?u=76281980&t=247)** This would recurse into acldeldir and remove ACLs from any files inside of it, as well as the ACLs on acldeldir itself.

> [!info]- Semantic Content
>
> **Env Vars:** acl (14)
> **CLI Commands:** mkdir (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for instance (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: File access control](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=0)** - [Reporter] You've now come to the end of the file and access control chapter.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=9)** The file and access control challenge will test your knowledge and understanding of what you've learned.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=13)** For this challenge, I'm going to build on the fictitious scenario from our user and accounts challenge.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=18)** So be sure to complete that one first.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=20)** In that challenge, we created a user named Steve with specific attributes.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=24)** And then created the Sue and Taylor users and placed them all in the developers group.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=28)** For this challenge, we're going to build on the user and account challenge but focus on file access control using these same users.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=36)** In this scenario, Steve, Sue and Taylor are developers in your company.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=40)** As such, they save their files to a central location on the server.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=44)** All developers have full access to all future development files.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=48)** If configured properly an administrator will not have to modify permissions again in the future, it will be automatic.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=54)** For safety reasons, developers will not be allowed to delete other developers files.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=59)** Your company also has a DevTest Department which has multiple employees.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=64)** The developer code is read by the DevTest Department and tested.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=67)** The DevTest department has read only access to all future development files.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=72)** Let's look at the objectives in detail.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=75)** For the first objective, you'll need a shared directory for developer group collaboration such as slash /home/developers.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=81)** The second objective says that it's necessary for all users in the developers group to be able to enter the group collaboration directory as well as read and write files in it.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=90)** The third objective necessitates that all files created by our three developers should automatically be owned by the developers group.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=97)** Four, none of the users in the developers group can delete files owned by other developers.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=102)** Five, we also want a DevTest group.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=105)** For objective six, the DevTest group should have execute permissions on the group collaboration directory so they can traverse it.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=113)** The last objective specifies that the users in the DevTest group can read the files in the group collaboration directory but not write to them.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=120)** That includes files created in the future.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=123)** To test this, make sure that Steve, Sue and Taylor can create files in the group collaboration directory.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=129)** Steve, Sue and Taylor can not delete each other's files.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=132)** The DevTest group can enter and read files in the group collaboration directory but not write them.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=137)** You could create a new user to test this or place user one in the DevTest group to test it.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=142)** And lastly, nobody else can enter the group collaboration directory.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=146)** Before you attempt this challenge, you may want to create a snapshot of your VM.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-file-access-control?u=76281980&t=150)** This way you can roll it back and do the exercise again if necessary.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [reporter] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: File access control](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=0)** - [Instructor] From the previous challenge, you needed Steve, Sue, and Taylor users.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=10)** If you've not given them passwords, you want to do that first.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=13)** You also need a group named Developers with all three users as members.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=17)** Let's start this chapter's challenge by creating a directory for group collaboration.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=20)** I'm going to put it in slash home.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=22)** Type in, sudo nkdir /home/developers and hit Enter.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=29)** Now we'll make sure it's owned by the developers group.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=31)** Type in, sudo chown :developers as the group, /home/developers and hit Enter.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=40)** We need to make sure that all users in the developers group can enter the directory as well as read and write files.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=45)** For that, we'll change the permissions.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=47)** Type in, sudo chmod 770 /home/developers and hit Enter.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=53)** Verify with lS -ld /home/developers and hit Enter.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=59)** The next objective says that all files created by our three developers should automatically be owned by the developers group.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=66)** The [[Microsoft Word|word]] automatically is the key.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=68)** There's only one method of inheriting ownership in [[Linux]], the SGID bit.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=72)** So let's set it.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=74)** Type in, clear then type in, sudo chmod g+s /home/developers and hit Enter and verify with ls -ld /home/developers and hit Enter.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=86)** Now all files created in the directory will inherit the group owner, which is developers.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=91)** We want the three developers to be able to read each other's files, write to files, and create new ones, but not to delete files owned by other developers.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=99)** For this, we'll use the sticky bit.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=100)** Type in, clear and then type in, sudo chmod o+t /home/developers and hit Enter.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=109)** And then verify again with ls -ld.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=113)** The last objective says that we need another group called dev test.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=116)** Presumably, the users in dev test will take the code created by the developers and create dev test environments to test it.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=122)** For this, they'll need to be able to traverse the directories and read the files.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=126)** We need the entire dev test group to have this access for all future files.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=130)** As you know, files and directories in Linux can only belong to one group, and currently they're owned by the developers group.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=136)** This gives you a clue of how to solve it.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=138)** You will need to use access control lists.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=141)** First, let's create the dev test group.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=143)** Type in, clear and then type in, sudo groupadd devtest and hit Enter.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=149)** Next, let's create an access control list to allow traverse and read access on the group collaboration directory.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=154)** Type in, sudo setfacl -m, for modify, group:devtest, which is the group, : and rx is the permissions /home/developers and hit Enter.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=168)** And verify with getfacul /home/ developers and hit Enter.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=174)** This will give all users in the dev test group read and execute permissions for the developers directory, execute permissions on directories, provide the ability to traverse them.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=183)** This one access control list does not solve the problem of the dev test group accessing files created in the future inside the developers directory.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=191)** For this, we need a default ACL.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=193)** Bring your setfacul line back and insert a dash d between the command and the dash m and hit Enter.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=201)** And once again, verify with getfacul.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=204)** The default access control list provides inheritance of permissions which is different than the SJD bit which provides inheritance of group ownership.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=211)** Now, we just need to test it.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=213)** To do so, let's add user1 to the dev test group.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=216)** Type in, clear and then type in, sudo usernod space dash a for pens space dash obligated G for supplemental group space devtest space user1, and hit Enter.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=228)** Now view Etsy group to verify.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=230)** Type cat /etc/group and hit Enter.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=233)** We can see that user1 is in the dev test group.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=237)** Now you may have run into some issues at this point because even though user1 is in the dev test group it can't traverse the developers directory.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=244)** Test it by typing in cd /home/developers and hit Enter.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=249)** Let's find out why.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=250)** To verify your live groups, type in, groups and hit Enter.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=254)** You'll notice that user1 is not currently in the dev test group.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=257)** This is because that's a group gets parsed on login.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=260)** You won't be in the dev test group until you log in.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=263)** You can log out and log in again.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=265)** But the quickest solution is to SU to yourself.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=268)** Type in, su - user1 and hit Enter and then type in, your password and hit Enter again.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=275)** And now verify with groups.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=278)** Now we can test our solution.
>
> **[4:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=279)** Now change to Sue or Taylor and create a file inside of the developers directory.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=284)** I'm going to use Taylor.
>
> **[4:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=285)** Type in, clear and then type in, su - taylor and hit Enter and enter Taylor's password.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=291)** Once you change the Taylor, go into the developers directory by typing in cd /home/developers and hit Enter.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=297)** And create a file using redirection, type in, echo "Taylor was here" > taylorfile.txt
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=310)** and hit Enter.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=312)** Now log out of Taylor's account by typing an exit.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=315)** Now do the same thing with Sue.
>
> **[5:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=317)** Change to Sue by typing in su - sue and hit Enter and enter Sue's password.
>
> **[5:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=323)** Now change into the developer's directory by typing a cd /home/developers and hit Enter.
>
> **[5:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=328)** And just like with Taylor, create a file named Suefile.txt using redirection.
>
> **[5:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=333)** Type an echo " Sue was here" > suefile.txt
>
> **[5:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=343)** and hit Enter.
>
> **[5:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=343)** Both users can create files just fine.
>
> **[5:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=346)** Now verify permissions with ls -l.
>
> **[5:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=348)** Type in, clear then type in, ls -l and hit Enter.
>
> **[5:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=352)** We can see that Sue's file files owned by Sue in the developer's group, Taylor's file is owned by Taylor in the developer's group.
>
> **[5:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=358)** The group permissions on both are read and write for the group owner.
>
> **[6:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=362)** Normally this means that a user in the developer's group should be able to delete any of these files.
>
> **[6:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=366)** Let's test it as Sue delete Taylor's file.
>
> **[6:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=369)** Type in, rm taylorfile.txt and hit Enter.
>
> **[6:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=373)** The sticky bit will stop Sue from doing this.
>
> **[6:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=375)** There's one more thing to test.
>
> **[6:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=377)** We need to make sure that the users in the dev test group can enter the developers directory using the dev test access control list and read files.
>
> **[6:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=384)** Change to user1 by typing in exit and verify your groups.
>
> **[6:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=388)** Now change into the developers group by typing in cd /home/developers and hit Enter and then read some files.
>
> **[6:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=396)** Type in, cat suefile.txt and hit Enter.
>
> **[6:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=400)** You should be able to read any file in this directory as a member of the dev test group.
>
> **[6:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=404)** This is your solution to the files and access control challenge.
>
> **[6:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-file-access-control?u=76281980&t=407)** If you created a snapshot of your VM and want to try the challenge again just run the snapshot and start the challenge over.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** sudo (8), ls (5), cd (4), make (3), chmod (3)
> **File Paths:** suefile.txt (3), taylorfile.txt (2)
> **Env Vars:** sgid (1), acl (1), sjd (1)
> **Code Identifiers:** ls (1)
> **Definitions:** means that (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 3. Manage Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Set enforcing and permissive modes for SELinux](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=0)** - [Narrator] Before we can talk about the SELinux mandatory access control system, we need to cover a few terms.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=6)** Discretionary access control, is a means of restricting access to objects, based on the identity of the subjects, and or the groups to which they belong.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=15)** This access control is discretionary, in that a subject with certain permissions can pass those permissions on to other subjects.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=22)** Standard [[Linux]] permissions, access control lists, SUID and SGID special bits, as well as SU/SUDO, are examples of discretionary access control.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=33)** Who the subject is, determines what they can do based on their ownership.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=37)** Mandatory access control is an additional layer over discretionary access control.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=43)** With mandatory access control, the operating system constraints the ability of a subject to access an object.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=49)** Mandatory access control is made up of rules allowing subjects some sort of access to objects.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=55)** Subjects are user processes which are run by users.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=58)** Objects are the resources they are trying to access such as files, directories, IO devices, pipes, network ports and so on.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=65)** The access is an action performed by the subject on the object such as read, write, delete, or create.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=72)** Let's take a look at an example.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=74)** A subject such as a user runs a program.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=77)** That will attempt a start operation on the object.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=80)** In this case, the object is filed at TXT, and then we'll attempt a read operation on the same object.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=86)** When the subject tries to save the changes, it will attempt a right action on the object.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=91)** A rule allows or denies subjects from performing actions on specific objects.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=96)** A rule may be specific about which subjects, which actions are allowed or denied, and on which objects.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=102)** The security policy is the system wide set of rules, defining what the subjects can do to the objects.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=109)** The security context or label, is the tags that SELinux stores, for subjects and objects.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=115)** All subjects and objects will have a security context.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=118)** This security context is stored in the extended attributes section of the file [[Metadata]].
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=123)** Let's look at the process of subjects accessing objects again, but this time add in the SELinux bits.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=129)** The subject in this case, Vim requests access to the object, which is field at TXT.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=134)** The SELinux security server queries the SELinux policy database of rules.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=139)** If based on those rules, permission is granted, then Vim will access file that TXT.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=145)** If permission is not granted, then a denied access message will be added to the access vector cash.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=151)** These messages are available to the operating system log files.
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=155)** SELinux has several operating modes, enforcing mode, where the security policy is being enforced.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=162)** Permissive mode, where the policy is consulted, and messages are printed, but the policy is not enforced.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=168)** This is good for troubleshooting SELinux policy issues.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=171)** The application is allowed to run, and all policy violations allowed.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=175)** Note, there are times when having SELinux set to permissive, will still deny a subject accessing an object, but it's usually not a problem.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=184)** Disabled is just that.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=186)** SELinux is turned off, and no mandatory access control system is in place.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=191)** I do not recommend turning SELinux off.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=194)** SELinux has different enforcement policies.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=196)** Type enforcement, is the default type of mandatory access control used in the targeted policy.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=202)** All subjects and objects are tagged with a type in the security context.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=207)** The rules determine which types can act on which other types.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=210)** There's also role-based access control, which assigns a role to SELinux users and enforces access control that way.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=217)** SELinux also supports multi-level security, which assigns a security level to various subjects and objects.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=223)** For instance, in a military environment, you may have a certain clearance level which gives you access to certain resources.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=230)** Multi-category is similar, in that it categorizes objects, and makes policy decisions based on the category.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=237)** This is useful with containerization of processes.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=241)** Let's go to a terminal and get the current SELinux mode.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=244)** On the terminal type in se status, hit enter.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=248)** This shows we're using the targeted policy, and it's being enforced.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=252)** Remember that the targeted policy uses type enforcement, and as a command that we can use to get this information, is get in force.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=259)** Type in get, and force, and hit enter.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=262)** We can alter the SELinux mode in real time by using sudden force.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=266)** Type in clear, and type in sudo setenforce permissive, and hit enter.
>
> **[4:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=272)** And type in your password I've prompted, and then verify using getenforce.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=278)** We can now see that we're in permissive mode.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=281)** This change is temporary, and if we want it to survive a reboot, we have to edit this slash at e/selinux/configfile and reboot.
>
> **[4:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=288)** Let's take a look at it Table in less /etc/selinux/config and hit enter.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=295)** If you wanted to change SELinux into permissive mode, we'd change SELinux equals enforcing, to SELinux equals permissive, and then we'd save the file and reboot the system.
>
> **[5:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=304)** Also, if you want to disable SELinux, it cannot be done live.
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/set-enforcing-and-permissive-modes-for-selinux?u=76281980&t=308)** This configuration file needs to be edited, and the system has to be rebooted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Metadata]] (1)
> **Env Vars:** txt (3), suid (1), sgid (1), sudo (1)
> **Tools:** vim (2), terminal (2)
> **Analogies:** such as (3), for instance (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** sudo (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [List and identify SELinux file and process context](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=0)** - [Instructor] SELinux subjects are usually users and processes.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=3)** all subjects and objects in SELinux have a security context or label.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=8)** To get the security context of our user, we'll use the ID command.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=12)** In a terminal, type in id -Z and hit Enter.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=16)** This is the security context of our user.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=19)** Our SELinux user is unconfined_u, our role for role based access control is unconfined_r, and our type for type enforcement is unconfined_t.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=31)** We're using the type enforcement portion of SELinux for mandatory access control, so this last bit of information is important to us.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=39)** The last section is the security level used by multi-level and multi-category security.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=44)** Now let's look at the security context of running processes using the PS command.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=48)** Type in ps -eZ and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=52)** Using the -eZ options shows all processes and their security context.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=57)** Pay special attention to the type portion of the security context.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=62)** Files also have a security context as they are objects.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=65)** Get the security context of your files in your home directory by typing in clear then typing in ls -l, for longest, Z and hit Enter.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=74)** We can see the type as user_home_t.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=78)** Now that we've looked at the security context of users, processes and files, let's talk about domain transitions.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=85)** SELinux supports domain transitioning which means subjects can move from one type to another, if allowed in the security policy.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=92)** To show how this works let's get the context of the password command type it in clear, then type in ls -lZ /usr/bin/passwd, and hit Enter.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=104)** The password commands type is passwd_exec_t.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=109)** When passwords are set, they're written to the etc shadow file.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=113)** Let's get the context of that file.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=115)** We'll need to elevate privileges with sudo for this one.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=117)** Type in sudo ls -lZ /etc/shadow, and hit Enter, and enter your password if prompted.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=127)** The etc shadows type is shadow_t.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=131)** You might think that there's a rule in SELinux that allows subjects with a type of passwd_exec_t to read and write to objects with a type of shadow_t, but that isn't quite how it works.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=143)** Now let's open a new terminal tab and run the password command.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=148)** Don't answer the prompt and just leave it running, now go back to your first terminal and type in ps -eZ and hit Enter.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=157)** Now we see that the running password commands type is passwd_t and not passwd_exec_t.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=164)** When the password command is run, it is allowed to transition to the passwd_t type.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=169)** There is a rule that allows a subject of type passwd_t to write to an object with a type of shadow_t.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=176)** Without transitioning to the passwd_t type, the password command would not be able to write to the shadow file.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=182)** It's important to know that all users, processes, and files have a security context.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=187)** Processes can transition from one type to another temporarily to execute code in that type, if the security policy allows it.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=194)** It might help to think of this as similar to the sudo command.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=198)** When we executed command using sudo, we transitioned to the super-user temporarily.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-and-identify-selinux-file-and-process-context?u=76281980&t=203)** The SELinux model is much, much more complex than this, but it's similar.

> [!info]- Semantic Content
>
> **Code Identifiers:** ez (3), passwd_exec_t (3), lz (2), user_home_t (1)
> **CLI Commands:** sudo (4), ls (3)
> **Tools:** terminal (3)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Restore SELinux default file contexts](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=0)** - (Narrator)In standard Unix permissions the file permissions are stored with the file.
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=4)** With SELinux, the security context is also stored with the file, in the extended attributes area.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=10)** However, there are default security context settings stored in the SELinux security policy itself.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=16)** These default settings, may see that all files in slash home have a certain type.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=20)** Let's take a look.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=22)** Type ls -lz /home and hit enter Notice that the security context of slash home is, user_home_dir_t.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=32)** We can change the security context of any file, using the chcon command.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=36)** Let's make a file called, newfile.txt in our home directory, by typing, touch newfile.txt, and hit enter.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=44)** Let's verify the context using ls.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=46)** Typing, ls -lz and hit enter.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=49)** We can see that its type is, user_home_t.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=53)** Now let's change the type to something else.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=55)** Note, that we don't need to elevate privileges, when we're doing this to our own files.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=60)** If you want to change the context of files, belonging to another user, you'll need to elevate your privileges.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=65)** Type in clear, then type in chcon -t etc_t, that's the type we will change it to, newfile.txt, then hit enter.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=76)** Now lets verify by typing in ls -lz and hit enter again.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=82)** We can see the user type is now etc_t, this is not the correct type and may cause issues later, but for this exercise, it's fine.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=90)** The policy database knows what the security context to files and slash home should be.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=95)** Instead of putting the context back to what we think it should be, let's just let the database do it.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=99)** Type in clear and then type in restorecon newfile.txt and hit enter.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=106)** Now let's verify with ls, type in, ls -lz and hit enter again and now we see the type has changed to user_home_t.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=116)** If you want to reset the security context of every file in the operating system, you'll want to relabel the drive.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=121)** This means that SELinux will restore or relabel every file back to its default security context.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=127)** To do so, we just need to create a hidden file, in the root directory named, .autorelabel and reboot.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=133)** Make sure you spell this right or it won't work.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=135)** Type in, clear and then type in sudo touch /.autorelabel and hit enter and type in your password as prompted.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=143)** The next time you reboot, the security context of all files in the entire operating system, will be set back to the default context.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=150)** Expect the boot process to take longer this one time.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=153)** When it's done relabeling all files, it deletes the hidden autorelabel file that we created.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=158)** Now, if you are positive that you want a file in your home directory to have a different security context and you don't want to restorecon or a relabel to reset it, now, if you're a positive that you want a file in your home directly to have a different security context and you don't want to restorecon or a relabel to set it, then you can change the policy database using the se manage command.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=177)** We're going to add a security context to the policy.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=180)** Type in, clear, and then type in sudo semanage fcontext, for a file context, -a -t, followed by the type, we're going to go with etc_t, which is our type, /home/user1/newfile.txt and hit enter.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=204)** This will add an entry for the type, etc_t on the file named, newfile.txt.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=209)** We can verify the change was added to the policy, by listing all file contexts.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=213)** Type in sudo semanage fcontext -l for list pipe grep newfile.txt and hit enter and there it is.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=226)** Now let's test it and verify, type in restorecon newfile.txt and hit enter.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=231)** Now let's verify, type in ls -lznewfile.txt and hit enter and you can see now the security context is, etc_t.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=241)** It's best to change the policy and then use restorecon to set the context, rather than use chcon.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/restore-selinux-default-file-contexts?u=76281980&t=247)** I only use chcon, for temporary context changes to troubleshoot.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (7), sudo (3), make (2), grep (1)
> **File Paths:** newfile.txt (7), home/user1/newfile.txt (1), lznewfile.txt (1)
> **Code Identifiers:** user_home_t (2), user_home_dir_t (1)
> **Definitions:** means that (1)
> **Best Practices:** it's best to (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)

#### [Use Booleans to modify SELinux behavior](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=0)** - [Instructor] In many cases, administrators don't have to rewrite SELinux security policies to permit certain actions.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=6)** SELinux has booleans, which are on-off switches to activate or deactivate certain functions.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=12)** For instance, by default Mozilla plugins can't use GPS.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=15)** If they wanted this functionality turned on, it's as simple as flipping a switch.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=19)** To get a list of SELinux booleans use the getsebool command.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=23)** Type in getsebool -a and hit Enter.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=28)** There's about 300 booleans, so be sure to scroll up.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=31)** We can get the value of just one boolean by specifying it.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=35)** Type in clear and then type in getsebool mozilla_plugin_use_gps and hit Enter.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=44)** And you can see that this boolean is set to off.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=47)** You can also get the boolean list with sestatus -b.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=50)** Type in sestatus -b and hit Enter.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=54)** A third tool to get the list of booleans is semanage.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=57)** Although we need to elevate privileges for this.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=60)** Type in clear and type in studo semanage boolean -l and hit Enter.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=67)** The advantage of this command is that it also gives you a short description of each boolean.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=73)** To temporarily change a boolean, use the setsebool command.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=77)** Type in clear, type in sudo setsebool mozilla_plugin _use_gps on and hit Enter.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=90)** And then verify by typing getsebool mozilla_plugin_use_gps and hit Enter.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=99)** And we can see that it's on.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=101)** This does not survive a reboot though.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=103)** If you want to make the boolean persistent, you need to add it to the policy.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=107)** Bring your setsebool line back and a -P between setsebool and Mozilla and hit Enter.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=116)** Now, let's verify this with semanage.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=119)** Type in clear and then type in sudo semanage boolean -l for list, | egrep ' SELinux| mozilla_plugin_use_gps' and hit Enter.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=144)** In this example, I've used egrep and alternation to show both the header and the boolean.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/use-booleans-to-modify-selinux-behavior?u=76281980&t=149)** We can see that since we've added the boolean to the policy, it's on by default.

> [!info]- Semantic Content
>
> **Code Identifiers:** mozilla_plugin_use_gps (3), mozilla_plugin (1)
> **CLI Commands:** sudo (2), make (1)
> **Env Vars:** gps (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Diagnose routine SELinux policy violations](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=0)** - [Instructor] In this exercise, you'll be modifying critical system files in a security context in order to break it.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=7)** Before we do this, you might want to create a snapshot of your VM, just in case.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=11)** Click on the snapshot button on the toolbar of your VM and then click on the plus symbol in the bottom left, give you a snapshot of name and then click on Finish.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=20)** Now, go back to your Console and click on full screen.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=23)** Now, if you manage to make your VM non-functional, you can just run the snapshot and you'll be back in business.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=29)** As the [[Linux]] logs alerts when it's running in either enforcing or permissive mode.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=33)** If the audit DService is running, SELinux logs to ./var/log/audit.log.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=40)** If the audit DService is not running, it logs the ./var/log/messages.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=44)** It may be advantageous to tell whichever log file is being used on your host.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=48)** You'll need to elevate privileges for these.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=50)** Because our [[Virtual Machines]] are very new, there may not be any SELinux messages to look at.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=55)** So we're going to generate one.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=56)** To do so, we'll change the security context of the /Etsy/shadow file.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=61)** To see what the original security context is, type into a terminal sudo ls -lz/etc/shadow and hit Enter.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=71)** We can see that the security context is shadow_t.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=74)** Now let's change it.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=76)** Type in sudo chcon -t etc_t /etc/shadow
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=86)** and hit Enter again and verify it by bringing your LS line back and hitting Enter.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=91)** We can see the new type is at the underscore t.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=93)** This is not the correct security context for this file which is what we want in order to generate an error message.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=99)** Before we make any changes.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=101)** Let's tell the audit log.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=103)** Type in sudo tail -f /var/log/audit/audit.log and hit Enter.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=111)** We'll come back to this in a bit.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=113)** Another way to get access to this information, is to use the auto search command.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=118)** Now open another terminal and attempt to change your password by typing in P-A-S-S-W-D and hit Enter.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=125)** Type in your old password as well as your new one.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=128)** It will fail.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=130)** The interesting thing about this is that the password command doesn't really know why it failed.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=134)** It said password: Authentication token manipulation error which could be many things.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=140)** Often as the Linux denies the access at such a low level, that the command doesn't understand so it's error messages may not be very helpful.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=147)** You may have gotten an SELinux alert message.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=150)** If so, click on it to get more information.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=154)** If you did not get a message, you can bring up the SELinux Alert Browser by going into overview mode and typing in sealert and hitting Enter.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=164)** Either way, this is the SELinux Alert Browser.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=168)** Click on the troubleshoot button, and it explains a problem and will give you several solutions.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=173)** Usually the best least intrusive solution is at the top.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=176)** Naturally, we aren't going to follow any of these because we know what the problem is since we created it.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=181)** Each one of these solutions will tell you exactly what to do to solve the problem.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=186)** Now let's click on the bottom solution.
>
> **[3:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=188)** This one actually creates a new SELinux policy module, with rules.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=193)** The ausearch command searches the audit logs for the [[Microsoft Word|word]] password, and then sends this to the audit to allow command which builds a new security policy module allowing for the action to succeed.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=204)** We then insert the security policy module into the security policy and the action no longer fails.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=210)** Normally we consider creating a new policy module as a last resort, because messing with the SELinux security policy, can be complex.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=217)** Go ahead and close this window and switch back to your other terminal.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=220)** And let's analyze the audit.log entries.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=226)** We have two error messages related to the password command not being able to write to the Etsy shadow file.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=231)** To make them easier to read, I've placed a blank line between them.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=235)** Each entry starts with type equals followed by the audit log error type.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=239)** The first error says AVC which stands for access vector cash.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=242)** This tells us it is an SELinux error.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=246)** We can see that the action that was denied was create for process ID 202425.
>
> **[4:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=251)** The command name is password, the context of the subject is password_t and the context of the object is etc_t which we know because we set it.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=261)** The second message has a type of USER_CHATHOK.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=266)** We can see that it's the same process ID number.
>
> **[4:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=269)** The subject type is password_t again and the error message follows.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=273)** This is a bit easier to read.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=275)** The operation was a pluggable authentication module trying to change the authentication token.
>
> **[4:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=280)** It was for the user one account.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=282)** The executable command was /usr/bin/passwd The host was rhhost1 and it was on our pts 2 terminal.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=290)** The result is failed.
>
> **[4:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=292)** Even though it looks really cryptic, we can read these messages.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=296)** There are several ways of handling most SELinux errors.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=299)** We may be able to change a Boolean to allow an action to happen.
>
> **[5:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=302)** Booleans are easy to look through, and if you use the sudo semanaged boolean -l command to view them, you can get a short description as well.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=311)** Often service configuration files will have comments in them explaining which booleans to change.
>
> **[5:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=316)** Always check this first.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=318)** Use set setsebool to change the boolean.
>
> **[5:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=320)** If you want it to persist, make sure you include the -P option.
>
> **[5:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=325)** Another course of action is to change a files type using chcon/semanage.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=329)** File contacts can be incorrect when files are not copied correctly.
>
> **[5:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=333)** Using change con, we can change the context to the correct one.
>
> **[5:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=337)** Keep in mind that these changes only last until an administrator has a restore con or a system relabel happens.
>
> **[5:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=343)** Use semanage to change the files context in the security database to make it persistent.
>
> **[5:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=348)** Then use restore con to change the context of the file.
>
> **[5:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=351)** A real world example of when you do this is if you wanted to put your [[MySQL]] database in a nonstandard location.
>
> **[5:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=358)** You'd need to update the default security context, for the MySQL directory in the policy and then run restore con on the directory and files.
>
> **[6:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=365)** The last resort is to create a new security policy module.
>
> **[6:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=369)** This isn't a bad option, just the most intrusive.
>
> **[6:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=372)** When creating a policy module, we're actually modifying the security policy to allow something that was being denied.
>
> **[6:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=379)** It's often better to find out why it was being denied first and then fix it instead of modifying the security policy itself.
>
> **[6:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=385)** In summary to troubleshoot SELinux problems start by putting SELinux in permissive mode, so that the applications can run all the way through generating all errors.
>
> **[6:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=395)** Then search the audit log for the errors.
>
> **[6:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=397)** Look for SELinux desktop notifications and follow the instructions in the SELinux alert browser.
>
> **[6:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=403)** Before we end this video, let's put the context of our etc shadow file back the way it was.
>
> **[6:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/diagnose-routine-selinux-policy-violations?u=76281980&t=408)** Type into a terminal sudo restorecon /etc/shadow, and hit Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[MySQL]] (2), [[Virtual Machines]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (5), sudo (5), ls (2), mysql (2), find (1)
> **UI Navigation:** click on (7)
> **Tools:** terminal (5)
> **Definitions:** stands for (1), is an  (1), is a  (1)
> **Warnings:** troubleshoot (2), keep in mind (1)
> **Env Vars:** avc (1), user_chathok (1)
> **Cross-References:** go back to (1)

#### [Maintain security context when managing files](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=0)** - [Instructor] By default, when you copy a file to a new location, it inherits the security context of the directory it's in according to the security policy.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=8)** If you copy a file to /home, the type will be user_home_der_T.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=14)** If however, you want to keep the original security context of the file, you will need to provide additional options to commands.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=22)** If you copy a file, you may want to provide the -a option.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=25)** - a is for archive and preserves permissions, access control lists, extended attributes, And SELinux security context.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=34)** The move command preserves attributes by default because it just moves the files and doesn't change their [[Metadata]].
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=40)** When you want to back up your system using tar, you'll want to pass the --selinux option to preserve security context.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=47)** To copy files from one host to another while Preserving security context, use rsync with the dash capital X option.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=54)** Be careful with these commands.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=56)** Preserving security context may not be what you want.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/maintain-security-context-when-managing-files?u=76281980&t=60)** The safe option would be to copy or move the files and then do a restore con to restore their context to the policy default.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (1)
> **Speakers:** - [instructor] (1), - a (1)
> **CLI Commands:** tar (1)
> **Warnings:** be careful (1)

#### [Manage firewalls with firewalld](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=0)** - [Instructor] In Enterprise [[Linux]] 8, the firewall administration tool is firewalld.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=5)** Although the iptable service cannot be running at the same time as firewalld as they are not compatible.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=11)** To make sure firewalld is running type into a terminal, sudo systemctl start firewalld and hit Enter, to make it persistent, bring your line back and change start to enable and hit Enter again.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=27)** The command we use to interact with firewalld is firewall-cmd.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=31)** To verify the status, let's use the --state option.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=35)** Type in sudo firewall-cmd --state and hit Enter.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=41)** Note that if you're editing the firewall rules remotely, you can use the --timeout= option, which will revert the rules back after the specified timeout.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=51)** Anyone who has written shell scripts to do the same with iptables in the past will appreciate this feature.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=56)** This is useful if your rules lock you out so you can't fix them, after the timeout expires firewalld will roll back your changes which is great for remote firewall development.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=66)** Also note the difference between the running config and the saved config.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=69)** To make changes to the firewall, so if I have a reboot, which is important use the --permanent option.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=75)** Let's add a permanent rule for the web service, type in clear then type in sudo firewall-cmd --permanent --add-service=http
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=89)** and hit Enter.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=91)** This will allow HTTP traffic in from the outside to the default zone.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=95)** Removing a service is just as easy.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=98)** Bring your line back and change add to remove and hit Enter.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=102)** To open a port and protocol, you can just specify them, type in clear and then bring your line back and change add service to add-port=443/tcp, and hit Enter.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=117)** Change add port to remove port to reverse it.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=119)** We can also add ranges of ports, for instance to let VNC connections in, we'd bring our line back and would change 443/tcp to 5901-5910/tcp and hit Enter.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=134)** After modifying your firewall, you'll need to reload your rules, or none of it will be active.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=138)** Type in clear, type in sudo firewall-cmd --reload and hit Enter.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=145)** Earlier, we added the HTTP service by name.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=149)** To list the services that we can use by name, type in sudo firewall-cmd --get-services and hit Enter.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=158)** To list the services enabled in the current zone, type in clear and then bring your line back and change get services to list services, and hit Enter.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-firewalls-with-firewalld?u=76281980&t=168)** And lastly, to list the ports enabled in the current zone, bring your line back again and change list services to list ports, and hit Enter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **CLI Commands:** sudo (5), make (3), systemctl (1)
> **Env Vars:** http (2), vnc (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Warnings:** note that (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Manage security](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=0)** - [Instructor] You've now come to the end of the Manage Security chapter.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=8)** This Manage Security challenge will test your knowledge and understanding of what you've learned.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=13)** In this chapter, you learned about SELinux and Firewalld.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=16)** This challenge will focus only on SELinux.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=19)** To set this challenge up, we will be installing the Apache web server and configuring a non-standard location for website files.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=26)** We will remove standard discretionary access control problems using ownership and permissions.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=31)** We'll also remove any Apache access controls so users will be able to access the website files.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=36)** This will cause SELinux to deny requests in the name of security.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=39)** This challenge is not about configuring Apache, nor is any knowledge of such needed.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=44)** Your job will be to leave the Apache configuration alone and solve the SELinux problem using what you learned about SELinux in this chapter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=52)** To set up the challenge, we need to install and configure the Apache software.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=56)** In a terminal, type in sudo dnf install -y httpd and hit Enter, and type in your password if prompted.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=65)** Now, we'll move the website [[HTML]] files directory to a non-standard location in /home/webdoc.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=70)** Let's create that directory.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=72)** Type in clear and then type in sudo mkdir /home/webdoc and hit Enter.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=78)** Now change the ownership of it to the Apache user and group.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=81)** Type in sudo chown apache.apache /home/webdoc and hit Enter.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=88)** Now get a long list of the directory.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=90)** Type in ls -ld /home/webdoc and hit Enter.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=95)** The Apache user and Apache group owners have read-write permissions.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=98)** This will mean that discretionary access control consisting of ownership and permissions will not restrict Apache from accessing the website files.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=105)** Now let's create an index.html file.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=108)** Type in sudo vi /home/webdoc/index.html and hit Enter.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=114)** Go into insert mode by pressing the I key and then type in Hello there or anything that you want.
>
> **[2:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=121)** Save and exit by pressing Escape :x! and hitting Enter.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=125)** Now let's edit the Apache configuration file so it uses this directory for its website files.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=131)** Type in clear and then type in sudo vi /etc/httpd/conf/httpd.conf and hit Enter.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=140)** Now search by pressing forward slash and then type in Document Root was a capital D and a capital R and hit Enter.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=147)** This configuration setting defines where the website files will be stored.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=151)** Go into insert mode by pressing the I key and then change the path from /var/www/html to /home/webdoc.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=159)** Now go down to the access control line.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=161)** This is Apache's own built-in access control rules.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=164)** Change the directory from /var/www/html to /home/webdoc.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=172)** This will ensure that Apache's own access control won't deny our request.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=176)** Now save and exit by pressing the Escape :x!
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=178)** and hitting Enter.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=181)** Now let's start the Apache service.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=183)** Type in sudo systemctl start httpd and hit Enter.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=189)** Now start Firefox by clicking on its icon on the toolbar.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=193)** browse to rhhost1.[localnet.com/index.html](https://localnet.com/index.html) and hit Enter.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=202)** Make sure that your name resolution is working, as it is necessary for this step.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=206)** This request should be denied and a forbidden message should be displayed.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=210)** Once again, this challenge is not about Apache, it just happens to be the service that we're exploiting to set this up.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=216)** You will not need to know how to configure Apache and in fact, need to focus solely on SELinux.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=221)** You may get an SELinux security alert.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=223)** If not, run the sealert command.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=225)** Before you try to solve this challenge, I recommend creating a VM snapshot.
>
> **[3:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-manage-security?u=76281980&t=229)** This way, if you need to start over, you can roll back to the snapshot instead of executing these directions a second time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (6)
> **CLI Commands:** apache (17), sudo (6), dnf (1), mkdir (1), chown (1)
> **Prerequisites:** install (2), configure (2), set up (1)
> **File Paths:** index.html (1), home/webdoc/index.html (1), rhhost1.localnet.com/index.html (1)
> **Tools:** terminal (1), firefox (1)
> **URLs:** [localnet.com](https://localnet.com) (1)
> **Env Vars:** html (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Manage security](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=0)** - [Instructor] Let's recap what we did to set up this challenge.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=8)** We installed Apache and moved the web document root to /home/webdoc.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=13)** We configured ownership and permission so that discretionary access control would allow access.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=18)** We configured Apache to allow access to the web files.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=21)** We accessed our rhhost1.[localnet.com](https://localnet.com) and were denied by SELinux.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=26)** Note that we have three different levels of access control.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=29)** Apache allows or denies first, then the request goes to the [[Linux]] discretionary access control system using permissions and ownership.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=36)** If access was granted at this stage, then the request has passed under SELinux which in our case denied access.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=43)** Let's talk about a couple of possible solutions.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=45)** You may have gotten an SE alert gooey pop-up window.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=48)** If not just run as the alert from the command line, go into overview mode and type SE alert and it will come up.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=55)** Once the SELinux alert browser window comes up, click on troubleshoot.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=59)** You should see two issues on the left-hand side.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=61)** Let's look at the top one first.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=63)** It says if you want to allow httpd to read you as a content and then provides a solution.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=69)** Click on the plugin details on the right.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=71)** This will explain more in depth what the problem is.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=74)** The current Boolean setting does not allow httpd to access this file in this location.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=80)** The solution is to set the httpd_read_user_content Boolean to one.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=86)** This Boolean allows the Apache service to read files in /home.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=90)** Take note that it doesn't restrict Apache to reading files justin/home/webdoc, but rather allows Apache to read files in all directories in /home if the services configured to do so and discretionary access control allows it.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=103)** This isn't too much of a problem, but just remember that you can't count on SELinux restricting Apache from accessing /home/user1 if Apache is misconfigured.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=113)** This solution isn't as granular as it could be.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=115)** I don't see a problem, just be aware.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=117)** Close that window and now let's look at the second solution.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=120)** This one is more involved.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=122)** This solution uses the auto search command to look through the audit.log for httpd and sends it to the audit to allow command which creates an SELinux policy module called my-httpd and then answers to my-httpd.pp policy package into the security policy.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=140)** Let's execute the first piece to see what it finds.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=143)** Copy the all search part and then go to terminal.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=146)** Type in sudo and then paste it and hit enter.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=149)** Type in your password and hit enter again.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=152)** We can see the one results where httpd was denied read access to the index.[[HTML]] file.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=158)** I recommend reading the output of this command before creating security policy from it, because it could be including other httpd errors that are not related.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=166)** Now let's execute the whole command string.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=168)** Go back to your other window and copy the [[Representational State Transfer (REST)|rest]] of it.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=172)** Return to your terminal, bring your line back and paste it on the end then hit enter.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=178)** Make you're in your home director when you run this so it can write the module to the disc.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=182)** Now list the director with ls.
>
> **[3:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=184)** We have two files, my-httpd.pp and my-httpd.te.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=191)** The latter is a text file so let's read it.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=193)** Type in cat my-httpd.te and hit enter.
>
> **[3:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=199)** Here, we can see the rule.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=201)** Allow a subject of type httpd_t to read objects of type user_home_t.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=207)** Effectively, this is doing exactly the same thing as the Boolean that we just looked at.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=212)** In fact, it says as much at the end of the text This solution is no more granular than the Boolean either.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=217)** It allows the Apache process to read any files with type user_home_t including files in /home/user1.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=226)** Interestingly enough, there's a third solution that is not provided here.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=230)** Let's look at the SELinux type of /var/www/html which was the old document route.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=237)** Type in clear and then type in ls -ldZ /var/www/html and hit enter.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=246)** This gives a long list of the directory itself including the SELinux security context.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=250)** We can see that the type is httpd_sis_content_t.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=255)** Now let's look at the type of our new web document root.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=259)** Type in ls -ldZ /home/webdoc and hit enter.
>
> **[4:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=265)** We can see that its type is user_home_dir_t.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=270)** Let's change the type temporarily to the correct type.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=273)** Type in sudo chcon -R for recursive -t httpd_sys_content_t
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=284)** /home/webdoc and hit enter.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=287)** This will change the type of the webdoc directory and any files that may be in it to httpd_sys_content_t.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=295)** Now that that's done flip back over to Firefox and refresh.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=299)** And now, we can view the index.html file just fine.
>
> **[5:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=303)** You may remember though that when we change security context with the change con command, it won't survive a file system relabel or a restore con operation.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=312)** To make it permanent, we need to change the database.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=315)** To do so type in clear and then type in sudo semanage fcontext for file context -a for ad -t.
>
> **[5:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=324)** And the type is httpd_sysc_ content_t " and then the file system path pattern /home/ webdoc{/*}?" and hit enter.
>
> **[5:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=343)** And then we'd follow up with a restore con.
>
> **[5:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=346)** Type in sudo estorecon/home/webdoc and hit enter.
>
> **[5:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=351)** This will add a new default type for files in /home/webdoc of httpd_sys_content_t.
>
> **[5:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=359)** Now, if we do a file system relabel or a restore con operation, the files in this directory will get relabeled to this type.
>
> **[6:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=365)** The nice thing about the solution is that it's very granular.
>
> **[6:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=368)** It's only for this directory and sub-directories and no others.
>
> **[6:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-manage-security?u=76281980&t=372)** Any of these three solutions will solve the problem but I think it's important to know and understand how each works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Linux]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** apache (9), sudo (4), ls (3), make (2), cat (1)
> **Code Identifiers:** httpd_sys_content_t (3), user_home_t (2), ldz (2), httpd_read_user_content (1), httpd_sis_content_t (1)
> **Tools:** terminal (2), command line (1), firefox (1)
> **Warnings:** note that (2), troubleshoot (1), be aware (1)
> **UI Navigation:** click on (2), go to (1)
> **File Paths:** index.html (2)
> **URLs:** [localnet.com](https://localnet.com) (1)


### 4. Accessing Linux Remotely

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure Secure Shell](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=0)** - [Instructor] Secure shell is the heart of remote access on [[Linux]].
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=4)** SSH can provide us with an interactive login shell, non interactive remote command execution, secure copying of files from across the network, and simple network tunneling of other traffic.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=16)** A working secure shell system comprises of an SSH client on the local host and an SSH server on a remote host connected with an encrypted tunnel.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=26)** There are SSH clients for just about every desktop operating system made including Linux, macOS, and [[Windows]] as well as iOS and [[Android]].
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=34)** There are SSH servers for most desktop and server operating systems.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=38)** Linux, macOS, and Unix, all come with SSH servers built in.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=43)** Third party SSH servers are available for windows as well but it doesn't come with one.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=47)** On Linux the main SSH configuration files are stored in /etc/ssh.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=53)** The config file for the client is ssh_config.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=57)** The SSH server and Enterprise Linux has two configuration files.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=61)** The main one is sshd_config and there's a minor one at /etc/sysconfig/sshd.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=70)** You will probably only need to edit the main one.
>
> **[1:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=73)** The SSH server answers on port 22 by default.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=76)** If you wanted to change this, you just edit the [[Server Configuration]] file.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=80)** There are many other options in that file, including items for ciphers, compression, access control and forwarding.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=86)** So you'll want to make sure you look at the Man page for it.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=89)** Also, every user can have a per user client configuration file for overwriting certain configuration items.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=95)** These configuration files are stored in the user's home directory at ~/.ssh/config.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=102)** This .ssh directory doesn't exist until you try to connect to a server for the first time.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=106)** A per user client configuration file allows us to store information about our remote servers to make administration easier.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=113)** For instance, if a remote server use port 1022, and we had a private public key pair created for it, we would have a configuration file that look like this.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=122)** Without the configuration file, we'd have to type more to log in remotely.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=126)** We'd have the type ssh -p space, the port number 1022, space, the username grant@[server1vmguests.com](https://server1vmguests.com), space, and then the identity of file the dash I space, ~/.ssh/server1.key.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=144)** With the config file in place we'd type in ssh server1.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=149)** Making our job much, much easier.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-secure-shell?u=76281980&t=151)** Per user client configuration files, make managing lots of servers possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[Windows]] (2), [[Android]] (1), [[Server Configuration]] (1)
> **CLI Commands:** ssh (16), make (3)
> **Env Vars:** ssh (10)
> **Code Identifiers:** macos (2), ios (1), ssh_config (1), sshd_config (1)
> **Ports:** port 22 (1), port 1022 (1)
> **URLs:** [server1vmguests.com](https://server1vmguests.com) (1)
> **Documentation:** man page (1)
> **Analogies:** for instance (1)

#### [Configure key-based authentication for SSH](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=0)** - [Tutor] There are multiple ways of authenticating using SSH but the two most common are passwords and private public key pairs.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=7)** In this video, we'll configure private public key pairs for passwordless logins.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=12)** The first step to passwordless logins is to generate the SSH key pair using the ssh-keygen command.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=18)** In a terminal on rhhost1, type in ssh-keygen and hit enter.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=23)** Go ahead and take the defaults when prompted.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=26)** Since we did not pass it in the options, it created RSA, private and public keys.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=31)** Let's verify this by listing the .ssh hidden directory.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=35)** Type in clear and then type in ls -l ~/.ssh and hit enter.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=40)** We can see that we have a file named id_rsa that is our private key.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=45)** And we have a file named id_rsa.pub which is our public key.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=50)** Now you need to copy the public key to your rhhost2 machine using its host name.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=54)** We configured host names earlier in this course.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=57)** Let's copy that public key across using the ssh-copy-id command.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=62)** Type in ssh-copy-id rhhost2 and hit enter.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=68)** Type in user one's password on rhhost2.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=71)** To make sure that the key is added to the local SSH agent that manages the keys, type in ssh-add and hit enter.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=79)** This isn't always necessary but it doesn't hurt anything if you run it.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=82)** When using ssh-copy-id, two things happen, first the local public key is copied across a network to the remote end and stored in the user's authorized keys file.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=92)** And second, the fingerprint of the remote server is stored in the local known host file.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=98)** Let's take a look at the local known host file.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=100)** Type in clear then type in cat ~/.ssh/known_host and hit enter.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=107)** This file stores the IP address of the remote servers as well as their matching fingerprints.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=112)** If the remote server ever changes its IP address you will need to delete its line from this file before connecting again.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=118)** Don't worry about remembering this as the ssh client will refuse to connect and remind you to delete the line.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=124)** Let's also compare the RSA public key on rhhost1 with the authorized keys file on rhhost2.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=130)** In your rhhost1 terminal, type in clear then type in cat ~/.ssh/id_rsa.pub and hit enter.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=139)** Then change over to your rhhost2 terminal.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=141)** In your rhhost2 terminal, type in cat ~/.ssh/authorized_keys and hit enter.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=149)** We can see that these files are exactly the same.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-key-based-authentication-for-ssh?u=76281980&t=152)** We can manually append any SSH public key to the authorized keys file using a redirect but it's best to let the ssh-copy-id command do it for you as SSH can be very picky about file permissions and syntax.

> [!info]- Semantic Content
>
> **CLI Commands:** ssh (18), cat (3), ls (1), make (1)
> **Env Vars:** ssh (5), rsa (2)
> **Code Identifiers:** id_rsa (3), known_host (1), authorized_keys (1)
> **Tools:** terminal (4)
> **Best Practices:** the key is (1), it's best to (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [tutor] (1)

#### [Securely transfer files between systems](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=0)** - [Instructor] There are several different ways of transferring files from one host to another, using an encrypted tunnel.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=5)** The easiest being SCP or secure copy.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=9)** SCP acts like the local CP command but the arguments are a bit more complex as you'll see.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=13)** The syntax for SCP is scp options source file destination file.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=20)** At first glance the syntax looks the same as the CP command.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=23)** However, the source and destination files may include the host name or IP address.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=28)** For instance, to copy the local/etc/host file to a remote server, you might type in, scp /etc/hosts the IP address:/tmp.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=41)** The source file is the local path and the destination file is an IP address and remote path separated by a colon.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=48)** We can also copy a remote file to a local location by reversing the arguments.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=53)** Now, the source is the remote host and the destination has a local path.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=57)** This copies of remote/etc/host file to the local /tmp directory.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=62)** By default SCP uses a standard SSH port number of 22.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=67)** If the remote server uses a non-standard port you'll need to specify it with -P.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=72)** This is slightly different than SSH which uses a lowercase p.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=75)** With SCP the lowercase p is used to preserve permissions.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=79)** We can copy and recursive as well by providing the -R option.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=83)** This will copy all files and directories in the remote /etc directory to the local /tmp directory.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=89)** Since speed may be of interest, we might want to change the cipher.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=93)** We can do this by passing the -c option.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=95)** In this example, we were copying the contents of the remote /etc directory but with the RC4 cipher, instead of the default AES.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=103)** The RC4 cipher is an insecure cipher but much faster than AES when copying larger amounts of data.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=110)** I only use the cipher when copying nonsensitive data or if I'm copying on a local trusted network.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=116)** For very slow networks, we can also turn on compression using the -z option.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=120)** Although this only makes sense on very, very slow networks and on data that is not already compressed.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=126)** If we're backing up files systems we would probably want to add the -p option to preserve permissions as well.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=131)** Note that this preserves file ownership, timestamps and permissions.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=136)** But not file ACLs or SELinux security context.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=139)** Even though SCP will copy files recursively through an encrypted tunnel, is probably not the best tool for doing more complex copy jobs.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=147)** A more powerful tool that still uses an SSH tunnel is rsync.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=151)** The syntax for rsync is more complex and the behavior is a bit different but worth the effort to learn.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=156)** SCP we'll copy every file, every time it was run.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=159)** Rsync will get a list of files needed to be copied and only copy the missing files.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=164)** Even if a file is perfectly copied and thus not complete, it is smart enough to recopy it.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=169)** To copy all files in the local etc directory to the remote host/tmp directory, we'd use this syntax.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=176)** The -a option copies recursive and preserves permissions, ownership and symbolic links but does not copy hard links, preserve ACLs extended attributes or SELinux security context.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=187)** For those items we need to add -H for hard links,
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=191)** - A for ACLs and -X for extended attributes which includes SELinux security context.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=198)** This is a pretty good set of options for system backups.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=201)** I also like to add --progress, for very good visual progress information.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=206)** There's one thing I need to address about file paths with rsync.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=209)** With CP or SCP, the paths /etc, and /etc with the trailing slash are the same.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=216)** If you copy this path, either tool will attempt to copy this /etc directory.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=221)** Rsync is a bit different /etc copies the /etc directory, whereas /etc/ copies the contents of the directory.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=230)** Keep this in mind.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=231)** Rsync has a dry run option to test your command line before actually copying anything.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=235)** Just add --dry- run to the option string.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=239)** Because of how rsync paths work, I recommend doing a dry run first to ensure the files get copied, where you want.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=246)** Since rsync is using SSH, we can pass any SSH options to it such as different port number or cipher.
>
> **[4:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=252)** However, the syntax is a bit complex.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=254)** To use port 1022, we would need to pass the entire SSH command and options inside of quotes.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=260)** Feel free to add out other options inside the double quotes like -cacr4 for the RC4 cipher.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=266)** Rsync also has the ability to mirror two directories and delete files on the destination if they don't exist on the source or vice versa.
>
> **[4:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=272)** For these options, you'll want to reference the rsync main page as it's beyond the scope of this video.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=278)** We can also transfer files securely by piping them through an SSH tunnel.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=282)** This command uses "cat" to view the id_rsa.pub file and then pipes it into SSH, which logs into the remote host and executes the commands inside of double quotes on the remote host.
>
> **[4:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=294)** In this case, "cat" reads standard in and redirects the output and appends to the authorized keys file.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=299)** This is very useful when you want to send any stream from one host to another.
>
> **[5:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=303)** You would use this to do a bit by bit copy of one drive to another across the network using dd and ssh.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=310)** You can also copy files from one host to another securely using SFTP.
>
> **[5:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/securely-transfer-files-between-systems?u=76281980&t=314)** SFTP as an FTP like client that uses an SSH encrypted tunnel but we won't cover it in this course.

> [!info]- Semantic Content
>
> **Env Vars:** ssh (9), scp (8), rc4 (3), aes (2), sftp (2)
> **CLI Commands:** ssh (10), cp (3), cat (2)
> **Definitions:** is a  (4), is an  (2)
> **Analogies:** for instance (1), such as (1)
> **Speakers:** - [instructor] (1), - a (1)
> **Code Identifiers:** id_rsa (1)
> **Ports:** port 1022 (1)
> **Tools:** command line (1)

#### [Access Linux from Windows using PuTTY](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=0)** - [Instructor] To access the [[Linux]] command line remotely from [[Windows]].
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=3)** We're going to use a free program called PuTTY.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=6)** We'll need our Linux host IP address.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=8)** So go to your virtual machine, open a terminal, and type in ifconfig.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=17)** You'll notice that my IP address is 10.3.66.102.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=22)** You'll want to take note of yours.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=25)** On the windows machine, open a web browser, and browse the [PuTTY.org](https://PuTTY.org).
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=29)** Click on download PuTTY here, scroll down and click on PuTTY.exe.
>
> **[0:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=35)** As soon as it's downloaded, click on it.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=39)** In the host name section we're going to type in our IP address.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=41)** Mine is 10.3.66.102.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=46)** You want to make sure that connection type is SSH and I'm going to change the font size to a larger font.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=54)** Click on 14.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=55)** Okay.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=57)** I'll go back and click on Session and let's give this a name.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=61)** And click on Save.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=63)** Now I want to click on Open, and type in our username and password.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=69)** We can make this full screen once we're logged in, we're free to type in commands.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=74)** If you want to access files on the Linux host using windows without setting up a complex network file system, you can use winSCP.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=82)** Let's go back to our web browser, and let's browse to [winscp.net/eng/download.[[PHP]]](https://winscp.net/eng/download.php).
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=91)** And we'll click on the installation package.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=95)** As soon as it's downloaded, click on Installer.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=99)** We'll want to accept the license agreement, and for setup type, the typical installation is recommended.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=103)** So we'll go ahead and click on Next.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=106)** For user interface style commander is the default.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=109)** So we'll click Next again.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=111)** And click Install.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=112)** WinSCP's installer wants to know if we want to import the session we just created in PuTTY, click on Yes.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=120)** And make sure it's selected and click on Okay.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=123)** Now we'll click on Finish.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=125)** The after installation page for winSCP's website, comes up in another browser tab, but also winSCP starts.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=134)** Let's click on the session that was just imported, and click on log in.
>
> **[2:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=140)** It'll ask for our username, and password.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=145)** And we'll make this full screen.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=148)** What we're seeing here is the right hand pane, is our Linux machine.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=152)** And we can see that the path is /home/our username.
>
> **[2:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=156)** The left-hand side of the screen is the windows computer.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=159)** If you want to copy files from one side to the other, you just grab them and drag them across, and click on Okay.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-windows-using-putty?u=76281980&t=166)** That's how you connect to a Linux host via the command line in file transfer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5), [[Windows]] (4), [[PHP]] (1)
> **UI Navigation:** click on (16), go to (1), scroll down (1)
> **CLI Commands:** make (4), ssh (1), php (1)
> **Code Identifiers:** winscp (3)
> **Tools:** command line (2), terminal (1)
> **URLs:** [putty.org](https://putty.org) (1), [winscp.net](https://winscp.net) (1)
> **Versions:** 10.3.66 (2)
> **Prerequisites:** setup (1), install (1)

#### [Access Linux from macOS or Linux using SSH](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=0)** - [Instructor] Because macOS and [[Linux]] are both Unix-like operating systems, they have terminals and SSH capability built into them.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=7)** The way in which we access a Linux host from macOS or Linux is nearly identical so we'll cover them together.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=14)** On macOS, we'll launch a terminal by going to the search icon and typing in terminal and hitting Enter.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=21)** I'm going to resize my terminal to full screen and increase the font.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=27)** The syntax for logging in, it's going to be ssh followed by the IP address, which you would get from the ifconfig command on Linux.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=38)** My IP address is 172.28.29.15 on this machine.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=46)** Type in your password, and you should be logged in.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-macos-or-linux-using-ssh?u=76281980&t=51)** To log out, you'll just type in exit and hit Enter and then close the terminal window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (4)
> **Tools:** terminal (4)
> **Code Identifiers:** macos (3)
> **CLI Commands:** ssh (2)
> **Env Vars:** ssh (1)
> **Versions:** 172.28.29 (1)
> **Speakers:** - [instructor] (1)

#### [Access Linux from iOS using SSH](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=0)** - [Instructor] As tablets are getting larger and more powerful, accessing the [[Linux]] command line from iOS is becoming more common.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=7)** To access our remote Linux host via an iPhone or iPad, we'll need to install an SSH client first.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=14)** There are plenty of SSH clients available and most have similar features.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=18)** So on iOS devices, you'll need to install an app called Server Auditor, which is a free SSH client from the App Store.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=26)** Once that's installed, start it up.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=29)** We'll start out by adding a host, so click on Hosts and then click on plus, and we'll click on New Host.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=38)** Under alias, let's call this Linux VM.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=47)** For username, I'm going to put in my username 'cause that's who I log in as on my Linux machine.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=52)** For host name, this'll depend on your IP address.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=55)** You'll want to verify this on your Linux machine using ifconfig.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=60)** My IP address is 10.16.18.227.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=69)** For the port, we're going to leave that alone.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=71)** By default, the port number is 22 and we shouldn't have to change that.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=76)** And then I'll type in my password and I'll hit Return.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=80)** Click on Save at the top, and now we have our host configured.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=84)** Go ahead and click on the Host.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=86)** And the first time you try to connect to your Linux virtual machine, you're going to get this message.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=91)** What it does is it store a fingerprint to try to remember that machine later.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=95)** And as a security feature, you should go ahead and click on Continue here, and now we're logged in.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=101)** To log out, you can just type in exit and hit Return, and we're not locked back out.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-ios-using-ssh?u=76281980&t=109)** That's how to connect your Linux VM using iOS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (7)
> **UI Navigation:** click on (6)
> **Code Identifiers:** ios (3), iphone (1), ipad (1)
> **CLI Commands:** ssh (3)
> **Env Vars:** ssh (3)
> **Prerequisites:** install (2), you'll need (1)
> **Versions:** 10.16.18 (1)
> **Tools:** command line (1)

#### [Access Linux from Android using SSH](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=0)** - [Instructor] It's becoming more common to use mobile devices to access and manage our servers remotely.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=5)** Tablets are getting larger and more powerful.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=8)** Accessing the [[Linux]] [[CLI]] from [[Android]] is becoming more common.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=12)** To access our Linux VM from Android, you'll need to install Connect Bot from the [[Google]] Play Store.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=18)** Search for Connect Bot and install it.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=20)** Once it's installed, open it.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=23)** As soon as we start Connect Bot, we can type in our VM IP address, username and password and log in.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=29)** On the bottom bar type in your username.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=32)** In my case is G-R-A-N-T at and then your IP address.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=38)** My IP address for this network is 10.16.18.227.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=51)** You'll want to verify on your virtual machine using the if config command that you have the right address.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=56)** And then click enter.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=59)** It'll ask if you're sure you want to connect and it's going to try to store the fingerprint.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=63)** Say yes.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=65)** And then you'll need to type in your password.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=68)** And now we're connected.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=70)** To disconnect, select the menu on the top right and select disconnect.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=76)** Now this host is stored in our Connect Bot and anytime we want to connect, we just have to click on it.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=81)** Most mobile platforms have SSH clients available.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=84)** There's a version of Putty for [[Windows]] phone and Jolla Sailfish has a program called Terminal in it's app store.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/access-linux-from-android-using-ssh?u=76281980&t=89)** No matter how you connect to your Linux host remotely, mobile solutions exist.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Android]] (2), [[CLI]] (1), [[Google]] (1), [[Windows]] (1)
> **Prerequisites:** you'll need (2), install (2)
> **Env Vars:** cli (1), ssh (1)
> **UI Navigation:** select the (1), click on (1)
> **CLI Commands:** ssh (1)
> **Versions:** 10.16.18 (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### 5. Configure Local Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [List, create, and delete partitions on MBR and GPT disks](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=0)** - [Tutor] Because we're working with [[Virtual Machines]], we add additional drives a little different than in the physical world.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=5)** Bring up your virtual machine manager window and click on your rhhost1 VM.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=9)** Then right-click and select open.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=12)** Now click on the light bulb on the toolbar.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=13)** Here we can add [[Hardware]].
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=15)** Click on add hardware in the bottom left.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=18)** Click on storage and change the size to one gigabyte.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=23)** You can make a larger if you like, but it doesn't have to be for this exercise.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=26)** Now click on finish.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=27)** If your VM is not running powered up, then click on the console, make a full screen and log in.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=33)** If it is running, just switch over to your console.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=36)** The first thing we'll do is get a list of drives in the system.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=39)** We can do that by cating proc partitions.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=41)** Type into a terminal cat space /proc/partitions and hit enter.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=46)** This information comes directly from the kernel.
>
> **[0:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=48)** This is a list of drives and partitions that the kernel currently recognizes.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=53)** Another tool that's useful in determining available drives is lsblk.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=57)** Type in lsblk and hit enter.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=59)** This also gives a visual of the drives and their partitions or logical volumes.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=64)** We can see that /dev/vda has partitions on it and they're mounted as /boot and slash.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=69)** But /dev/vdb is bare.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=72)** That is our new drive.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=74)** If you want to read the partition table directly you can use fdisc-l, type in clear and type in sudo space fdisc space -l space /dev/vda and hit enter.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=85)** Type in your password if prompted.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=86)** Fdisk, shows us the partition table from the drive itself.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=90)** Our new driver/dev/vdb and has no partitions.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=94)** To partition it we can use any of these three commands, fdisc, gdisc or parted.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=99)** Legacy systems use a BIOS to boot the machine and the BIOS stores it's partition table in the MBR or a master boot record.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=105)** Numerous systems use UEFI and the GUID partition table or GPT.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=110)** Fdisk is the legacy tool for BIOS based systems.
>
> **[1:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=114)** Fdisc has a limitation of four real partitions otherwise known as primary partitions.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=118)** If you want more partitions, one of these four needs to be an extended partition.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=122)** Inside this extended partition, we can then create logical partitions.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=126)** All primary and extended partitions will be numbered one, three, four.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=129)** All logical partitions will be numbered five and higher.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=133)** As of this recording experimental GPT support has been added to fdisc.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=138)** Gdisc however, was designed for GPT partitions.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=141)** With GPT, you can have a virtually unlimited number of partitions.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=145)** Also Gdesk storage is a BIOS partition table as well.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=148)** So even non UEFI systems can use the GPT table.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=152)** The third tool is parted which allows us to create partitions and even format them.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=157)** Parted is a powerful tool but for this course we're going to create partitions separate from formatting and thus we'll be using gdisc and mkfs.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=165)** Let's run gdisc with /dev/vdb, type in clear and then type in sudo space gdisc space /dev/vdb and hit enter.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=175)** In this text, is telling us there is no partition table of any type.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=178)** Press question mark for the help menu.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=180)** We can see that we can press N2 add a new partition, D2 delete a partition, P to print the partition table and W to write the petition table to the disc.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=190)** Let's create a new partition by pressing N.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=192)** For partition number take the default and hit enter.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=195)** For the first sector, hit enter again for the default.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=198)** For the ending sector I'm going to specify a size.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=201)** Type in +500M.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=204)** This will create a 500 megabyte partition and leave the [[Representational State Transfer (REST)|rest]] of the disc free.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=209)** Then hit enter.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=210)** Hit enter for the default partition ID of 8300 and then verify by pressing P to print your partition table.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=217)** If everything looks okay, press W to write it and Y to proceed.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=221)** Now to verify that the kernel seizes, let's cap proc partitions.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=225)** Type in clear and type in cat space /proc/partitions and hit enter.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=230)** And we can see that the kernel recognizes our new partition.
>
> **[3:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=233)** To delete partitions we'd use Gdesk and press D to delete.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=237)** It's as simple as that.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=238)** Always verify the operation was successful by cating proc partitions.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=242)** Sometimes the partitions are created or deleted but the changes are not reflected in proc partitions.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=247)** This means the kernel hasn't recognized them.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=249)** Running the part probe command or rebooting maybe in order to force the kernel to use the new partition table.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=255)** I've included in this chapter's exercise files the disk tools, PDF cheat sheet.
>
> **[4:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/list-create-and-delete-partitions-on-mbr-and-gpt-disks?u=76281980&t=260)** This one page cheat sheet includes just about everything you'll need in order to use fdisc, gdisc and parted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Virtual Machines]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** gpt (5), bios (4), uefi (2), mbr (1), guid (1)
> **UI Navigation:** click on (6), right-click (1)
> **CLI Commands:** make (2), cat (2), sudo (2)
> **Definitions:** is a  (3), known as (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)

#### [Manage LVM volumes and volume groups](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=0)** - [Instructor] There are limitations to standard partitions.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=3)** For example, they have to be contiguous on the disc.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=6)** If you want to resize a partition in the middle of the disc, you're out of luck.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=9)** For instance, let's say we have a five-gigabyte /boot partition, a 50-gigabyte / partition, which has five gigabytes of free space.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=17)** Next, we have a 600-gigabyte /home, which is nearly full, and a 400-gigabyte /var, which has about 300 gigabytes of unused space.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=26)** It might seem logical to take some space from /var partition and give it to the /home partition, but that's not a function of standard partitions.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=34)** There are disc management tools out there that, through sheer brilliance, can move blocks of data around and rewrite the partition table when they're done.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=41)** Note that standard partition tables do not support this and you should make sure to backup your data first.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=47)** Logical volume management provides tools for managing volumes, including resizing, combining volumes and moving them.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=53)** If there is room in a volume group, you can resize a logical volume even if the empty space is somewhere else on the disc.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=59)** In this example, I have taken 50 gigabytes from the end of the drive.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=64)** LVM looks at the data on the disk in a logical way instead of a physical way.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=68)** Your data in the logical volume can be in multiple different areas of the disc.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=72)** We can then add that space to a volume and it does not have to be contiguous.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=76)** The drive space appears to be contiguous to the applications using it.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=80)** If there is no room in a volume group, you can just add more drives to it on the fly and then the logical volume can be expanded across the drives.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=88)** To create an LVM system, we need to add a partition or drive to an LVM volume group and then divide that up into logical volumes.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=94)** We'll use the vdb1 partition we previously for this.
>
> **[1:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=98)** To use it for LVM, we need to make it a physical volume.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=101)** Verify that our extra partition exists first by typing an lsblk and hit enter.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=106)** So we can see the vdb1 line at the very end.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=109)** Now, prepare it for LVM.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=111)** Type in sudo space pvcreate space /dev/vdb1 and hit enter and type in your password if prompted.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=120)** We can verify this was PVS which is physical volume summary.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=125)** Type in clear then type in sudo space pvs and hit enter.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=129)** If you want to know more about your PVs, you can use pvdisplay.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=132)** Type in sudo space pvdisplay and hit enter.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=136)** Note, to reference physical volumes, you use the absolute path to the partitioner drive.
>
> **[2:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=141)** Now that our partition is a PV, let's create a volume group and include it.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=145)** We'll use vgcreate for this.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=146)** Type in sudo space vgcreate space vgdata space /dev/vdb1.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=153)** This will create a volume group called VG data and include the /dev/vdb1 physical volume.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=159)** Hit enter.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=160)** Verify with VGS.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=162)** Type in sudo space vgs and hit enter.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=164)** For more information, use VG display.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=167)** Type in sudo space vgdisplay and hit enter.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=172)** Note, to reference volume groups, use the name only without the path.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=177)** Now that we have a volume group, let's create a logical volume in it.
>
> **[3:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=180)** We'll use LV Create for this.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=181)** Type in clear and then type in sudo space lvcreate space --name space lvdata space --size space four nine five capital M space vgdata.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=195)** This will create a new logical volume that's 495 megabytes in size named LV data in the VG data volume group.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=203)** We have to make the logical volume slightly smaller than the volume group to make sure that it'll fit.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=207)** Hit enter and verify with sudo space lvs and hit enter again.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=213)** And of course, for more information, type in sudo space lvdisplay and hit enter again.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=220)** Take note of the LV path.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=221)** LV display says /dev/vgdata/lvdata.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=227)** There are two different paths that you can use to refer to logical volumes.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=230)** The path format of LV display is /dev/VolumeGroupName/LogicalVolumeName.
>
> **[3:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=237)** But we can use /dev/mapper/VolumeGroupName-LogicalVolumeName Either will work fine, but I prefer the former.
>
> **[4:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=247)** Also note that if you put a hyphen in the volume group name or the logical volume name, the latter naming scheme gets hard to read.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=254)** Now we'll format the logical volume with a file system.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=257)** We have two commands for this: the very simple mkfs and the more powerful mke2fs.
>
> **[4:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=262)** The latter has more options for choosing journal types and optimizations.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=266)** Either command calls other tools to do the actual formatting.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=270)** We also have several choices for file systems.
>
> **[4:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=272)** The historic [[Linux]] file system is ext2, which supports permissions and ownership but is not journalized.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=278)** If the system crashes, the operating system doesn't know what it was doing last because it wasn't writing it as a journal.
>
> **[4:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=284)** When the system boots back up, it will have to do a file system check to find corrupt files.
>
> **[4:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=289)** Ext3 is ext2, but with a journal.
>
> **[4:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=292)** You should consider it the lowest common file system to use.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=295)** There's no reason going older than ext3.
>
> **[4:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=298)** The newest in the series is ext4, which supports much larger drives, about 32,000 times larger than ext3 at 1 million terabytes.
>
> **[5:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=307)** Ext4 is more robust than ext3 and supports solid state drives, as well.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=312)** Ext4 is a good default file system for Linux.
>
> **[5:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=314)** Ext2 and 3 drives can be migrated to ext4.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=318)** The default file system with enterprise Linux Eight is XFS, a file system created by Silicon Graphics for its version of Unix.
>
> **[5:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=325)** It supports much larger drives than even ext4 and larger maximum file sizes.
>
> **[5:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=330)** It supports snapshots, as well.
>
> **[5:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=332)** Let's format our logical volume as XFS.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=335)** Type in clear and then type in sudo space mkfs space -t space xfs space /dev/vgdata/lvdata and hit enter.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=347)** Now verify this by typing in sudo space blkid and hit enter again.
>
> **[5:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=353)** And we can see that our logical volume is formatted as XFS.
>
> **[5:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=356)** In this chapter's exercise files, I've included an LVM PDF cheat sheet.
>
> **[6:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=361)** This one-page cheat sheet covers about 90% of what you'll need LVM for.
>
> **[6:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=365)** The LVM advanced cheat sheet covers the [[Representational State Transfer (REST)|rest]].
>
> **[6:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/manage-lvm-volumes-and-volume-groups?u=76281980&t=368)** So be sure to check them out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** sudo (11), make (4), find (1)
> **Env Vars:** lvm (8), xfs (3), pvs (1), vgs (1), pdf (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), for instance (1)
> **Warnings:** note that (2)
> **Exercise Files:** exercise files (1)
> **Best Practices:** make sure to (1)

#### [Mount file systems at boot](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=0)** - [Instructor] To mount a drive, we need to make a mount point first.
>
> **[0:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=3)** We'll be using our LV data logical volume on RH host1.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=7)** To create the mount point type into a terminal sudo space mkdir space slash media slash LV data and hit enter.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=15)** Type in your password if prompted.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=17)** Note that the name of this directory is arbitrary.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=20)** You can name it whatever you want.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=21)** However, for this exercise I'm using the same name as the logical volume.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=25)** Now let's mount our logical volume on this directory.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=28)** To do so type in sudo space mount space slash dev slash VG data slash LV data space slash media slash LV data and hit enter.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=39)** Verify this with the DF command by typing in DF space dash capital T which shows us the file system type.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=46)** We can see that it's mounted and it's formatted with XFS.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=50)** If you want to list the file system options it was mounted with use the mount command without any arguments.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=55)** Type in mount and hit enter.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=57)** You can see the LV data entry at the very bottom.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=60)** This mount won't survive a reboot without adding it to the FTFS tab, the file system table.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=65)** We need to edit this file and add a line for our logical volume.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=68)** Type in clear and then type in sudo space VI space slash EDC slash FS tab and hit enter.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=75)** Go into insert mode by pressing the I key and then go to the bottom of the file and append a line.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=81)** That line should read slash dev slash VG data slash LV data, that's the path to our logical volume, tab slash media slash LV data.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=91)** That's our mount point.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=92)** Tab tab.
>
> **[1:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=93)** The file system is XFS.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=95)** Tab, the file system options, we'll just type in defaults here.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=99)** Tab one space, two for the backup and restore and the file system check.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=104)** Save and exit by pressing the escape colon x exclamation mark and hitting enter.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=108)** The last thing we need to do is test the line in the FTFS tab.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=112)** Unmount slash media slash LV data first.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=115)** If it's mounted the mount command we'll just skip over it and you won't know if the line is correct.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=120)** Type in sudo space umount space slash media slash LV data and hit enter and then test the FS tab with mount space dash a.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=130)** Sudo space mount space dash a and hit enter.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=133)** And you can verify with DF.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=135)** This reads the FS tab and attempts to mount anything not already mounted.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=139)** Your new logic volume should now mount up automatically when the system boots.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=143)** In this exercise we've mounted the logic of volume based on its path.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot?u=76281980&t=146)** This works well for logical volumes because the path always stays the same.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (5), make (1), mkdir (1)
> **Env Vars:** xfs (2), ftfs (2), edc (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Mount file systems at boot by ID or label](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=0)** - [Instructor] It works well to mount logical volumes using the path, because it always stays the same.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=5)** However, for regular partitions, it may not.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=7)** The path of the disc depends on when and sometimes where the system sees the drive.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=12)** If you have four USB drives plugged into your system, they will get assigned a certain order when the host boots up.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=17)** The first will be /dev/sda.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=20)** The second will be SDB and so on.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=23)** However, if you unplug drive two, and then boot up, the old SDC becomes SDB and the old SDD becomes SDC.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=32)** To make matters worse, If the drive path changes and there's a line in the etc fstab, mounting that drive it may freeze the boot process.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=40)** It's better to mount drives based on a label or Universal ID, then their location in the computer.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=45)** Let's mount some drivers based on UID and labels now.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=49)** To set this up, we need to create two more partitions on the /dev/vdb drive.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=53)** We left 500 megabytes free.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=55)** So, we'll make two more petitions that are 250 megabytes in size each.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=59)** To do so type in sudo space gdisk space slash dev slash VDB and hit Enter.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=65)** Press N for a new partition.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=67)** Press Enter for the default partition number.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=70)** Press Enter for the default start sector and for the ending sector.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=74)** Type in plus 250 capital M for 250 megabytes.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=78)** Hit Enter and then press Enter for the default partition type.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=81)** Now, let's make another partition.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=83)** Press N for a new partition and take the defaults for all other attributes.
>
> **[1:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=88)** These will make a partition that will take up the [[Representational State Transfer (REST)|rest]] of the drive.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=91)** Press P to print the partition table.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=94)** You should now have three partitions on the drive, VDB one, VDB two, and VDB three.
>
> **[1:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=100)** Press W to write the changes and Y to confirm.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=103)** You may get a message saying the Colonel is still using the old partition table.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=107)** Let's verify this.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=108)** Type in Clear, then type in cat space slash proc slash partitions and hit Enter.
>
> **[1:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=113)** You should see both a VDB two and VDB three, however, you probably do not.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=118)** If not, you can run sudo space partprobe and hit Enter, and then check again.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=124)** If that doesn't fix it, then you could reboot.
>
> **[2:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=126)** Sometimes the drive can get locked and the Colonel will not update his live partition table.
>
> **[2:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=131)** Usually, it's because a drive is mounted.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=133)** In that case, you'd want to unmount the drive and run partprobe again.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=136)** Once you see the partitions, you can proceed.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=139)** Now that we have two more partitions, let's format both of them as Ext4.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=143)** Type in clear, then type in sudo space mkfs space dash T space Ext4 space slash dev slash VDB two and hit Enter.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=153)** Bring your line back and change VDB two to VDB three, and hit Enter again.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=157)** Now, verify that they're both formatted by typing in clear and then type in sudo space blkid and hit Enter.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=164)** We can see both partitions are formatted as Ext4.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=167)** Now, let's create mount points for both of them.
>
> **[2:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=169)** For expediency, I'm going to name the mount point the same as the device.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=174)** Type in clear, then type in sudo space mkdir space slash media slash VDB two and hit Enter.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=181)** Now, bring your line back and change the VDB two to VDB three and hit Enter again.
>
> **[3:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=185)** One of these partitions will be mounted by UID and the other will be mounted by label.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=190)** First, we need to get the UID of our first drive.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=193)** Use blkid for this.
>
> **[3:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=194)** Type in sudo space blkid and hit Enter.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=198)** Let's copy the UID of VDB two.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=201)** Now, let's edit the etc fstab.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=203)** Type in clear, and then type in sudo space VI space slash etc slash fstab, and hit Enter.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=208)** Going to insert mode by pressing the I key, and then go to the bottom of the file and append a line.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=213)** In this line, type in uppercase UID equals, and then paste in the UID.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=220)** And then type in tab.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=221)** And the mount point is slash media slash VDB two.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=225)** Tab again the file system is Ext4.
>
> **[3:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=228)** Tab again, it's the file system options are defaults.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=232)** Tab again and for the file system check, and dump and restore type in zero space zero.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=238)** Save and exit by pressing escape, colon X exclamation mark and hitting Enter.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=242)** For the second partition, we'll set a label on the file system and mount it by label.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=246)** File system labels are file system specific.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=249)** So, you will use different tools depending on which file system the driver's formatted with.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=254)** Since ours is Ext4, we'll set the file system label with an E2 label command.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=259)** If it was formatted with XFS, we'd use the XFS underscore admin command.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=263)** Type in sudo space E2 label space slash dev slash VDB three space backups.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=271)** That's the label we'll set and hit Enter.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=273)** Verify this with E2 label.
>
> **[4:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=275)** Type in sudo space E2 label space slash dev slash VDB three and hit Enter.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=281)** Or if you want more information about the file system use tune2fs.
>
> **[4:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=285)** Type in sudo space tune2fs space dash L for list space slash dev slash VDB three and hit Enter.
>
> **[4:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=293)** And then scroll up to the top to see the file system label.
>
> **[4:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=295)** Once you have the label set, let's edit the etc fstab again.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=299)** Type in clear and type in sudo space VI space slash etc slash fstab and hit Enter.
>
> **[5:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=305)** Once again, going to answer mode by pressing the I key at the end of the file and append a line.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=310)** This time type in uppercase label equals and then type in the label backups.
>
> **[5:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=317)** Tab Tab.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=318)** The mount point is slash media slash VDB three.
>
> **[5:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=322)** Tab Tab.
>
> **[5:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=323)** The file system is the Ext4.
>
> **[5:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=325)** Tab.
>
> **[5:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=326)** The file system options are defaults.
>
> **[5:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=329)** And then for file system check-in dump and restore zero space zero and then save and exit by pressing escape colon X exclamation mark and hitting Enter.
>
> **[5:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=337)** To verify that the lines in the etc fstab work use mount dash A.
>
> **[5:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=341)** Make sure the drives you want to test are unmounted.
>
> **[5:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=344)** Type in sudo space mount space dash A and hit Enter.
>
> **[5:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=348)** If you're getting the errors, fix them otherwise you're good to go.
>
> **[5:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=351)** I've included a mount PDF cheat sheet in this chapter as exercise files.
>
> **[5:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-file-systems-at-boot-by-id-or-label?u=76281980&t=355)** There's one page cheat sheet has most everything you'll need to mount and unmount drives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** vdb (18), uid (6), sdb (2), sdc (2), xfs (2)
> **CLI Commands:** sudo (12), make (5), cat (1), mkdir (1)
> **UI Navigation:** go to (1), scroll up (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Extend existing logical volumes](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=0)** - [Instructor] One of the beauties of logical volume management is the ability to resize an LV with non-contiguous drive space.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=7)** For this exercise, we'll need to add another drive to our rhhost1 VM.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=11)** Shut down our rhhost1 by right clicking on it and selecting shutdown and then shut down, and then go to the virtual machine manager agree window and click on your rhhost1 VM, and then click on open, now click on the light bulb.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=25)** Now click on add [[Hardware]], make sure storage is selected and change the size to one gigabyte and then click on finish.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=33)** Once tasks done power up your VM and then click on console.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=39)** Now we'll open a terminal and get a listing of all drivers, do so by typing in cat space slash proc slash partitions and hit enter, our new drive should be slash dev slash vdc.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=50)** We'll want to put a partition on it so let's use gdisk, type in clear and then type in sudo space gdisk space slash dev slash vdc and hit enter type in your password if prompted, press n for a new partition and then press enter to take old defaults press P to print the partition table.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=68)** We created one partition that takes up the entire drive press w to save and exit and Y to confirm.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=75)** Now let's verify again, type in clear, and then type in cat space slash proc slash partitions and hit enter and we can see our vdc1 partition if not double check with gdisk to make sure it was saved.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=87)** If it did run partprobe to force the kernel to update his partition table, that doesn't work.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=92)** You can reboot now that we have a new partition let's make it a physical volume type in clear and then type in sudo space pvcreate space slash dev slash vdc1 and hit enter, and then verify with pvs, type in sudo space, pvs and hit enter again.
>
> **[1:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=110)** We can see our new vdc1 physical volume that is not part of a vg.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=115)** Normally we would create a new volume group at this point but for this exercise we're going to extend an existing volume group.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=122)** Let's get a list of all volume groups by typing in sudo space, vgs and hit enter.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=127)** Now let's extend vgdata by adding a new pv to it, type in sudo space, vgextend space vgdata space slash dev slash vdc1 and hit enter now verify by typing in sudo space vgs and hit enter again.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=143)** You should see that the vgdata volume group is a lot larger and then now has free space available.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=147)** Also it has two pvs.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=150)** The next step is to resize the logical volume.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=152)** We'll use lvresize for this, let's verify the logical volume size first type in sudo space lvs and hit enter, note that it's currently 500 megabytes in size even though the volume group is 1000.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=165)** Now let's resize it by typing in clear then type in sudo space lvresize space, dash lowercase l, space 100% uppercae free space slash dev size vgdata, slash lvdata and hit enter.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=181)** Note that when specifying a logic of volume.
>
> **[3:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=183)** We provide the full path to it type in sudo space lvs and hit enter, note that our logic volume is now much larger.
>
> **[3:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=191)** Now let's verify the file system size of lvdata type in df space dash h and hit enter.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=197)** Notice that the file system is the old size because it's formatted as XFS file system.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=202)** We'll use XFS underscore growfs to resize it.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=206)** If it were EXT3 or EXT4, we'd use resize 2fs.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=210)** Also note that the lvresize command can now resize the file system as well, older versions could not.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=217)** Type in clear and then type in sudo space xfs underscore growfs space slash dev slash vgdata, slash lvdata and hit enter.
>
> **[3:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=227)** Now, verify this again by typing in df space dash h and hit enter.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/extend-existing-logical-volumes?u=76281980&t=231)** You should see the LV and its file system expanded to the new size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **CLI Commands:** sudo (10), make (3), cat (2)
> **UI Navigation:** click on (6), go to (1)
> **Env Vars:** xfs (2), ext3 (1), ext4 (1)
> **Warnings:** note that (4)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Mount and unmount CIFS and NFS network file systems](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=0)** - [Instructor] The two main types of network files systems in [[Linux]] are NFS and CIFS.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=5)** NFS stands for network file system and is the Linux and Unix default.
>
> **[0:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=9)** CIFS is a network file system of [[Windows]].
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=12)** In order to mount a remote NFS file system, we need to make sure we have the nfs-utils package installed.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=18)** Then we'd want to create a mountpoint for the nfsshare such as /mnt/nfsshare.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=23)** You can mount the nfsshare anywhere you want, but /mnt is set aside for network mounts.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=28)** Mounting an NFS drive isn't that much different from mounting a local hard drive.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=33)** The only difference is the path name of the network drive which has an IP address or host name in it followed by a colon, and then the remote path.
>
> **[0:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=40)** In order for the network drive to be mounted at boot, it needs to be in the /etc/fstab.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=44)** The device is 192.168.1.218:/share.
>
> **[0:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=50)** This is a combination of the IP address and the remote path.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=54)** The mount point is /mnt/nfsshare.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=57)** The file system is NFS and the file system option is _netdev.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=62)** This means that the system will wait for the network to come up before mounting the share.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=66)** In this example, dump and restore and file system check at boot are both turned off by setting them to zero.
>
> **[1:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=71)** Unmounting the remote share is the same as any other.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=75)** Specify the device or the mount point.
>
> **[1:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=77)** The other network file system is CIFS or common internet file system.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=81)** This is used to mount remote Windows shares.
>
> **[1:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=83)** You need to make sure the samba-client and cifs-utils are installed.
>
> **[1:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=89)** Included in the samba-client package is the smbclient command line tool.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=94)** This is useful for troubleshooting CIFS network drives.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=97)** You can use smbclient to connect to a Windows share with an FTP like interface.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=102)** The URL for samba share looks different than NFS.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=105)** It starts with two forward slashes followed by a host name or IP address, then another forward slash followed by the share name.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=112)** In Windows, this exact same paths would be using back slashes.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=116)** Using smbclient, you can specify a user to authenticate as.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=120)** Once accessing the share has been accomplished, mounting is the next step.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=124)** You can create the mount point anywhere, but once again, /mnt is a good place.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=129)** Mounting the share is a bit different than NFS because you have to specify who to authenticate as.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=133)** With NFS, you authenticate as yourself.
>
> **[2:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=136)** The device is the CIFS URL.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=138)** The Mount point you created and the file system options include username to authenticate as.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=144)** If it does not include a password, then the user is prompted for it.
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=148)** Naturally you don't want to put a password in /etc/fstab as it's world readable, so a credentials file is created.
>
> **[2:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=154)** The credentials file holds two lines, the username and the password.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=158)** Nobody but root should be able to read the credentials file keeping it safe.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/mount-and-unmount-cifs-and-nfs-network-file-systems?u=76281980&t=162)** The /etc/fstab line referencing the credentials file can be quite long, but keeps the usernames and passwords out of prying eyes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Linux]] (2)
> **Env Vars:** nfs (8), cifs (5), url (2), ftp (1)
> **Definitions:** is a  (4), stands for (1), means that (1)
> **CLI Commands:** make (2)
> **Versions:** 192.168.1 (1)
> **Tools:** command line (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Local storage](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=0)** - [Instructor] You've now come to the end of the local storage chapter.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=8)** The local storage challenge will test your knowledge and understanding of what you've learned.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=12)** For this scenario, a server in your infrastructure will get two new hard drives, which you'll need to create one formatted volume out of that will be available automatically at boot.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=21)** Let's look at the details of this challenge.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=24)** You will need to add two new drives to your VM.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=26)** If necessary, you can delete the RHS 2 VM if you don't have enough free space as we won't be using it again.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=32)** You will then need to create partitions on both drives before making them physical devices for use with LVM.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=38)** Next you'll need to create a volume group including both devices.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=41)** You'll then carve up the volume group with at least one logical volume.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=45)** To make the logical volume useful you'll need to format it with one of the more recent file systems.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=49)** I'll leave that choice up to you.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=51)** Once formatted you'll want to mount it and create an NCFS tab entry to automount it.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=56)** To test this, make sure that you can access the mounted volume, it mounts automatically, and that your VM will successfully reboot.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=63)** Before you attempt this challenge you may want to create a snapshot of your VM.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=66)** This way you can roll it back and do the exercise again if necessary.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=70)** If the automatic mounting isn't done right you may need to rescue the system through the boot process.
>
> **[1:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/challenge-local-storage?u=76281980&t=75)** Having a VM snapshot can make this easier.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Env Vars:** rhs (1), lvm (1), ncfs (1)
> **Prerequisites:** you'll need (3)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Local storage](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=0)** - [Instructor] Let's recap what was needed for this challenge.
>
> **[0:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=8)** You needed to add two new drives to your VM and partition the two drives, making them physical devices.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=13)** You needed to create a new volume group including both drives, create a logical volume, format the logical volume, mount the logical volume, and make sure it mounts on boot.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=23)** Let's start on objective one by adding two more virtual drives to our VM.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=27)** In the Virtual Machine manager window, shut down your rhhost1 VM if it's running.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=32)** And then click on Open and click on the light bulb.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=36)** Now, click on Add [[Hardware]], and make sure storage is selected and change the size to one gigabyte.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=42)** Now click on finish.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=44)** Now, add a second drive by clicking Add Hardware again.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=47)** Make sure storage is selected.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=49)** Set the size to one gigabyte and click on Finish one more time.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=53)** Now power the VM up.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=55)** Click on the power button and then click on the console.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=57)** For objective two, we'll need to log in and open a terminal.
>
> **[1:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=61)** Now, we need to create partitions on both drives.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=64)** Let's look at the drives first.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=65)** Type in lsblk and hit Enter.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=68)** Our drive names are vdd and vde.
>
> **[1:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=70)** Let's create partitions on them.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=72)** Type in clear and then type in sudo space gdisk space /dev/vdd and hit enter.
>
> **[1:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=78)** Type in your password, if prompted.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=80)** Press N for new partition and just keep hitting enter to take the defaults for everything else.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=85)** Type in W for write and Y to confirm and hit enter.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=90)** Type in clear.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=91)** Bring your line back and change vdd to vde and hit enter.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=95)** Press N for new partition and keep hitting enter again.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=99)** Press w to write and Y to confirm.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=102)** Now let's verify with lsblk.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=103)** Type in clear, then type in lsblk and hit enter.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=108)** We can see our two partitions: vdd1 and vde1.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=112)** For objective three, we need to prepare these partitions for LVM use by making them physical volumes.
>
> **[1:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=117)** Type in clear and then type in sudo space pvcreate space /dev/vdd1 and hit enter.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=124)** Then bring your line back and change vdd1 to vde1 and hit enter again.
>
> **[2:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=128)** We can verify by typing in sudo space pvs and hit enter.
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=133)** Now, for objective four, we need to create a volume group containing both physical volumes.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=138)** Type in clear and then type in sudo space vgcreate space vgchallenge, that'll be the name of the volume group, space /dev/vdd1 space /dev/vde1.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=150)** And hit enter.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=152)** This will create a volume group called VG Challenge that includes the space of both vdd1 and vde1 physical volumes.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=158)** Verify with sudo space vgs and hit enter.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=162)** Now for objective five, we need to carve out a logical volume from this volume group.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=166)** Type in clear and then type in sudo space lvcreate space --name space lvchallenge.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=173)** That'll be the name of the logical volume.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=175)** Space -lowercase L space 100% upper case FREE space vgchallenge.
>
> **[3:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=182)** This will create a logical volume named LV Challenge that will take up 100% of the available space.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=187)** Hit enter and verify with sudo space lvs and hit enter again.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=193)** For objective six, we need to format the logical volume using a modern file system.
>
> **[3:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=197)** We can either choose exd4 or XFS for this.
>
> **[3:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=200)** I'm going with XFS.
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=202)** Type in clear.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=203)** Type in sudo space mkfs space -T space XFS space /dev/vgchallenge/lvchallenge and hit enter.
>
> **[3:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=215)** Take note of the path to the logical volume; we'll use it again.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=218)** Verify with sudo space blkid and hit enter.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=223)** The last line shows our logical volume in the file system format type.
>
> **[3:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=226)** For objective seven, we need to ensure that it mounts automatically.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=230)** That's the end goal, but we really have a few steps between now and then.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=234)** Let's create a mount point in /media first.
>
> **[3:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=236)** Type in clear and then type in sudo space mkdir space /media/lvchallenge and hit enter.
>
> **[4:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=245)** Now let's manually mount our logical volume on it to make sure that it works.
>
> **[4:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=248)** Type in sudo space mount space /dev /vgchallenge/lvchallenge space /media/lvchallenge and hit enter and verify with df space /uppercase T and hit enter again.
>
> **[4:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=267)** This will show the mounted volume and the file system.
>
> **[4:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=270)** Now that it's mounted, we need to create an entry in the XEFS tab to ensure it mounts automatically.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=274)** To save some time, I'm going to copy the device and mount point in my previous command by right-clicking and selecting Copy.
>
> **[4:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=281)** Now edit the FS tab by typing in sudo space vi space /etc/fstab and hit enter.
>
> **[4:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=287)** Go into insert mode by pressing your I key, and then go to the end of the file and add a new line.
>
> **[4:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=292)** Now paste in the device and mount point and hit tab.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=296)** For the file system, type in XFS, file system options, type in defaults and then type 1 so it's included in a file system backup, and 2 to make sure that, if there's a file system check, it will do this volume after those with lower numbers, which are higher priority.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=310)** Save and exit by pressing the escape, colon X exclamation mark and hitting enter.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=315)** Now test it.
>
> **[5:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=316)** Let's un-mount all drives that don't need to be mounted.
>
> **[5:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=319)** Type in clear and then type in sudo space umount space /a and hit enter.
>
> **[5:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=324)** This will go through the XEFS tab and attempt to un-mount each drive.
>
> **[5:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=328)** It will only be successful if the drive is not in use.
>
> **[5:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=331)** Let's verify that it's unmounted.
>
> **[5:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=333)** Type in df and hit enter.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=335)** The last step is to mount all drives from the FS tab.
>
> **[5:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=338)** Type in clear and then type in sudo space mount space -a and hit enter again, and then verify with DF.
>
> **[5:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=344)** If it mounts with mount-a, then it will probably mount when rebooted, but the final test is to reboot.
>
> **[5:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=351)** This is your solution to the local storage challenge.
>
> **[5:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=354)** If you created a snapshot of your VM and want to try the challenge again, just run the snapshot and start the challenge over.
>
> **[5:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/solution-local-storage?u=76281980&t=359)** Sometimes with KVM [[Virtual Machines]], you need to manually delete the extra storage devices that are not in the previous snapshot before restoring it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Virtual Machines]] (1)
> **CLI Commands:** sudo (14), make (5), mkdir (1)
> **Env Vars:** xfs (4), xefs (2), lvm (1), free (1), kvm (1)
> **UI Navigation:** click on (7), go to (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Containers

[↑ Back to Table of Contents](#table-of-contents)

#### [About containers on Enterprise Linux](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=0)** - [Instructor] [[Virtual Machines]] or VMs are an abstraction of physical [[Hardware]].
>
> **[0:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=4)** A hypervisor allows running software machines containing full operating systems with libraries and applications.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=10)** This method is useful for when an entire server installation running in an isolated virtual environment is warranted.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=16)** Containers are a new way of isolating applications similar to virtual machines, but they do not attempt to present a software machine or include an entire guest operating systems.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=26)** Containers are an abstraction at the app layer that packages code and dependencies together.
>
> **[0:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=31)** Containers share the OS kernel with other containers running as isolated processes in user space.
>
> **[0:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=37)** The container stack bears little resemblance to a hypervisor as it just manages the containers themselves, as opposed to providing an entire platform to run on.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=46)** Because containers don't include the entire operating system or drivers for hardware that only exists in virtual space, they're smaller in size than VMs.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=54)** When you pull down a container, you're only downloading the application and the necessary bits for it to run.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=59)** There are a lot of container technologies on [[Linux]], including Docker.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=62)** However, Red Hat implements containers using open core technologies, including control groups for resource management, namespaces for process isolation, SELinux for security and secure multi-tenancy.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=74)** Using these technologies reduces the chance of software being exploited by not locking users into a specific container stack or format.
>
> **[1:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=82)** The tools used by Red Hat to manage containers include Podman for directly managing pods and container images.
>
> **[1:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=87)** This includes running, stopping, getting status, and so on.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=91)** Buildah or building, pushing and signing container images.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=94)** Skopeo for copying, inspection, deleting and signing images.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=99)** Runc for providing container run and build features to the aforementioned tools.
>
> **[1:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=104)** And crun, an optional runtime that can be configured and give greater flexibility, control and security for rootless containers.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=112)** All of these tools are compatible with the Open Container Initiative or OCI and other OCI compatible container engines.
>
> **[1:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=119)** They're specifically designed to be run on single node systems.
>
> **[2:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=123)** If you're needing to run containers in larger multi-node systems, you'll want to look into OpenShift or other container stacks like it.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=130)** Podman, Skopeo and Buildah are developed to replace Docker command features.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=134)** Each tool focuses on a subset of those features.
>
> **[2:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=137)** They can all run in rootless mode, which improves security as they don't require additional privileges.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=143)** They do not require a daemon to be running, so they have lower resource usage.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=147)** If you're not running containers, Podman is not running.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=150)** Lastly, they have native systemd integration.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=153)** Podman allows you to create standard systemd unit files to run containers as system services.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=159)** Many Linux administrators are familiar with Docker.
>
> **[2:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=162)** Red Hat has removed the Docker container engine and the Docker command from Enterprise Linux Nine.
>
> **[2:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=167)** Users can however install the podman-docker package, which provides some level of backwards compatibility at least from a user perspective.
>
> **[2:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=176)** Every time a user runs a Docker command with podman-docker installed, it actually runs a Podman command.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=181)** Podman also supports the Docker Socket API, so you can continue to run Docker API commands without requiring the Docker daemon running.
>
> **[3:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=189)** The Podman command can also build container images from Podman container files or Docker files.
>
> **[3:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=195)** Be aware that not all options to the Docker command are supported.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=198)** The compatibility helps with the migration to Podman but does not mitigate it.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=203)** Red Hat provides two types of container images, but to understand the difference, one must understand a bit about how containers work.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=209)** Containers are not binary images in the sense that virtual machine disc images are.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=213)** They can be layered upon to create new images.
>
> **[3:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=215)** For instance, you could take a base enterprise Linux image and layer the Init system on it and then layer the Apache web server on that.
>
> **[3:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=223)** A container file is used to keep track of these layers and to build a container image, the container file can be shared in a registry where one user would pull it down and use it.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=232)** The two Red Hat container image types consist of Red Hat Enterprise Linux base images referred to as RHEL base images and Red Hat Universal Base Images referred to as UBI images.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=242)** Both container types are built from portions of Red Hat Enterprise Linux.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=246)** They're supported, secured, and tested by Red Hat.
>
> **[4:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=249)** They contain certified packages from Red Hat Enterprise Linux.
>
> **[4:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=253)** Red Hat maintains a catalog of the images, including descriptions, technical details, and health index of each.
>
> **[4:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=259)** Red Hat keeps the images up to date with the latest software and they track the changes to the container images, making it easier for admins to maintain inventory documentation.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=268)** All Red Hat images can be downloaded to your production environment and reused.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=274)** The main difference between the two types of container images is that the UBI images allow you to share the container with others.
>
> **[4:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=280)** You can build a containerized application using UBI, push it to your choice of registry server, easily sharing it with others and even deploy it on non Red Hat platforms.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=290)** The UBI images are designed to be a foundation for cloud-native and web application use cases developed in containers.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=296)** Red Hat UBI images come in for base flavors, standard, init, minimal and micro.
>
> **[5:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=303)** The standard images named UBI are designed for any application that runs on RHEL.
>
> **[5:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=308)** These include the systemd init system, which allows you to have services start up automatically.
>
> **[5:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=313)** They have the full DNF [[Package Management]] system with DNF repositories.
>
> **[5:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=318)** They also include standard utilities like tar, dmidecode, gzip, ASIL commands and others.
>
> **[5:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=324)** You can think of this as a fairly normal enterprise Linux system.
>
> **[5:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=328)** Remember that container images work like a version controlled system, so an image that is layered upon another image contains the changes.
>
> **[5:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=335)** The UBI init image is built on top of the UBI image, so the contents are mostly the same.
>
> **[5:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=340)** The UBI init image, however, sets the CMD variable to /sbin/init to start the systemd init service as opposed to setting it to /bin/bash like the UBI image.
>
> **[5:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=352)** The purpose of the UBI init image is to run system services and not manage interactive logins.
>
> **[5:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=358)** The image content is less than what you get with a standard image, but more than what you get with a UBI minimal image.
>
> **[6:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=364)** The UBI minimal image offers a minimized pre-installed content set and is small, about 92 megabytes on disk and 32 megabytes in compressed form, requiring less download time.
>
> **[6:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=375)** This is roughly half the size of the standard UBI image.
>
> **[6:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=379)** Also, it utilizes the micro DNF package manager.
>
> **[6:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=382)** The scaled down micro DNF command has a simplified set of tools, but still has the ability to install and remove software and manage repositories.
>
> **[6:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=391)** Micro DNF also supports package modules for doing updates within a software version, which is useful as containers are more application focused than operating system focused.
>
> **[6:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=400)** Lastly, the UBI micro image is the smallest possible UBI image.
>
> **[6:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=404)** It doesn't even contain a package manager, which minimizes the attack surface.
>
> **[6:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=409)** A container image without the Linux distribution packaging is called a distroless container image.
>
> **[6:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/about-containers-on-enterprise-linux?u=76281980&t=414)** The UBI micro image is used mainly for running one application and not simulating an entire operating system environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (9), [[Virtual Machines]] (2), [[Hardware]] (2), [[Package Management]] (1)
> **Env Vars:** ubi (17), dnf (5), oci (2), api (2), rhel (2)
> **CLI Commands:** docker (13), dnf (5), node (2), apache (1), tar (1)
> **Analogies:** similar to (1), for instance (1)
> **Prerequisites:** install (2)
> **Tools:** bash (1)
> **Definitions:** is called (1)
> **Warnings:** be aware (1)

#### [Retrieve container images from a remote registry](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=0)** - [Instructor] To get started with using containers on Enterprise [[Linux]], you need to install some software using dnf install.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=6)** If it's using DNF, install the container-tools meta-package by typing into a terminal sudo dnf install container-tools and hit Enter.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=17)** Enter your password if prompted.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=20)** DNF should give you a list of packages that will install, including podman, podman-docker, and skopeo.
>
> **[0:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=26)** Press Y to continue.
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=28)** Once it's downloaded, you can check the installed version of podman by typing in podman version.
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=38)** Type in podman run hello-world and hit Enter.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=47)** This pulled down the Hello image and ran the container.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=49)** Now, show the container status by typing in podman ps -a and hit Enter.
>
> **[0:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=56)** You should see the container based on the Docker image, Hello World, with the current status of Exited.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=62)** This exercise ensures your container system is working.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=66)** Container images are stored in a registry.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=68)** You can think of a registry as a repository for container images.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=72)** The syntax for pulling down a container image from a registry is podman pull, the registry name, which is usually the domain name, optionally followed by a port number if it's nonstandard, slash, the namespace, slash, the name of the container image, and optionally followed by a tag.
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=91)** For instance, registry.access.[redhat.com](https://redhat.com) is the registry, ubi9 is the namespace, and ubi is the name of the image.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=101)** You can use the namespace to differentiate between images with the same name.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=105)** For instance, if you had development and production database images, you could use the namespace to identify the purpose of each.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=112)** This may also be used to create space for different users.
>
> **[1:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=116)** You can display the container registries using the podman info command.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=120)** Type in podman info -f [[JSON]], for file format, | jq ' .registries ["search"]' and hit Enter.
>
> **[2:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=142)** Here you can see the registries in JSON format.
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=145)** You should have three registries, registry.access.[redhat.com](https://redhat.com), registry.[redhat.io](https://redhat.io), and [docker.io](https://docker.io).
>
> **[2:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=155)** If you need to edit the registries, they're listed in the [registries.com](https://registries.com) file in etc.
>
> **[2:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=159)** View this file using less with line numbers turned on by typing in less -N /etc/containers/registries.conf.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=171)** And hit Enter.
>
> **[2:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=173)** The non-commented lines, lines that don't start with a hash, contain the configured registries.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=178)** For my system, that would be line 22, which specifies registry.[redhat.io](https://redhat.io), which requires authentication and it's for Red Hat subscribers.
>
> **[3:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=186)** registry.access.[redhat.com](https://redhat.com), which does not require authentication, and as such can be used by anyone.
>
> **[3:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=192)** And lastly, [docker.io](https://docker.io), which is the Docker Hub registry.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=196)** To remember the difference between registry.redhat and registry.access.redhat, remember that anyone can access the latter even if they do not have Red Hat customer portal credentials as access is in the name.
>
> **[3:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=209)** Press Q to quit.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=211)** To edit these registries, you'll need to load this file into an editor, such as vi, while elevating privileges.
>
> **[3:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=217)** Although it's recommended to use the fully qualified name to a container image, it's customary to use short names or aliases.
>
> **[3:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=224)** For instance, the full path to the latest ubi image might be registry.access.[redhat.com/ubi9/ubi:latest](https://redhat.com/ubi9/ubi:latest).
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=234)** But if aliases are set up properly, you could use ubi9, and the latest version would be downloaded, saving typing.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=242)** Aliases are configured in much the same fashion as registries in /etc/containers/registries.conf directory, you can view them there.
>
> **[4:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=251)** Let's use podman search to find images in our configured registries.
>
> **[4:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=255)** For instance, to find an image to run BusyBox in a container type in podman search busybox.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=263)** And hit Enter.
>
> **[4:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=266)** You can list all images available on a registry by typing the registry alone.
>
> **[4:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=271)** Type in podman search [docker.io](https://docker.io) and hit Enter.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=278)** View the podman-search main page for more information.
>
> **[4:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=282)** Now pull down and run the BusyBox image by typing in podman run -it.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=290)** The -it option specify interactive mode, so standard in stays open and allocates a terminal, [docker.io/library](https://docker.io/library), that's the namespace, /busybox, which is the image name, and hit Enter.
>
> **[5:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=307)** You should now see your prompt change to the BusyBox prompt.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=311)** Feel free to look around, but to be honest, there's not much here.
>
> **[5:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=315)** To exit the BusyBox container, type in exit.
>
> **[5:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=319)** Now you should be back to your regular Enterprise Linux prompt.
>
> **[5:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=323)** Note that we could have pulled the image down using the shorten alias as well.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=327)** Running a limited shell in a container isn't that interesting, so now, let's pull down something more serious and persistent.
>
> **[5:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=333)** Type in podman pull registry.access.[redhat.com/ubi9](https://redhat.com/ubi9).
>
> **[5:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=344)** And hit Enter.
>
> **[5:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=347)** After the download has finished, list the podman images by typing podman images and hit Enter.
>
> **[5:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/retrieve-container-images-from-a-remote-registry?u=76281980&t=354)** You should see all downloaded container images, their tags, image size, and when they were created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[JSON]] (2)
> **CLI Commands:** docker (7), dnf (4), find (2), sudo (1)
> **URLs:** [redhat.com](https://redhat.com) (5), [docker.io](https://docker.io) (4), [redhat.io](https://redhat.io) (2), [registries.com](https://registries.com) (1)
> **Prerequisites:** install (5), you'll need (1), set up (1)
> **Analogies:** for instance (4), such as (1)
> **Env Vars:** dnf (2), json (1)
> **Tools:** terminal (2)
> **Best Practices:** recommended (1)

#### [Inspect container images](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=0)** - [Instructor] Once you have some container images pulled down from registries, you can inspect them using the podman inspect command.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=6)** Podman inspect can display a container, image, volume, network, or pods configuration.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=12)** Here we'll use it to view a container.
>
> **[0:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=14)** First, get a list of container images by typing in podman space images and hit Enter.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=20)** Now choose one and inspect it using podman inspect.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=23)** For instance, to inspect the ubi9 image, I type in podman space inspect space registry.access.[redhat.com/ubi9](https://redhat.com/ubi9)
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=36)** and hit Enter.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=39)** The output of this command should display key-value pairs.
>
> **[0:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=42)** For instance, the Cmd key specifies the default command to run in the container.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=47)** You can override this key by specifying a command as an argument using podman run.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=51)** This particular UBI container will execute the bash shell if no argument is given.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=57)** You can also inspect remote images before you even pull them down to your local host using the skopeo inspect command.
>
> **[1:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=65)** You can use podman search to find other images to inspect, but I'm going to inspect the same registry.access.[redhat.com/ubi9](https://redhat.com/ubi9) image, but remotely using Skopeo.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=76)** To do so, type in skopeo space inspect space docker://registry.access.[redhat.com/ubi9](https://redhat.com/ubi9)
>
> **[1:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=91)** and hit Enter.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=94)** This will give you info, including the fully qualified name, tags, when it was created, the CPU architecture, and a description.
>
> **[1:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/inspect-container-images?u=76281980&t=102)** See the Skopeo inspect man page for more information.

> [!info]- Semantic Content
>
> **URLs:** [redhat.com](https://redhat.com) (3)
> **CLI Commands:** find (1), docker (1)
> **Env Vars:** ubi (1), cpu (1)
> **Analogies:** for instance (2)
> **Documentation:** man page (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Managing containers](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=0)** - [Narrator] Containers are in effect distributable isolated processes and you can interact with them in a similar manner.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=6)** You can start, stop, and get the status of a container just as you would a program.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=11)** To run a command in a container, you will use the podman run command.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=15)** The most common options are -d, which detaches from the shell and runs the container in the background.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=20)** The only output is the container ID.
>
> **[0:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=23)** - a runs the container in the foreground attaching to the current shell.
>
> **[0:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=27)** - n assigns a name to the container, making it easier to manage with subsequent commands.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=32)** - rm automatically removes the container when the command exits.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=36)** Note that this is a long option with two dashes.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=39)** - t allocates and attaches the pseudo terminal to the standard input of the container.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=44)** And lastly, -i is for interactive processes.
>
> **[0:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=47)** It is common to use -i and -t together to allocate a terminal for the container process.
>
> **[0:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=53)** Let's start a container, run a command inside of it that shows the OS version, and then remove the container automatically when done.
>
> **[1:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=60)** To do so, type podman run --rm registry.access.redhat
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=68)** .com/ubi9, the command, which is cat /etc/os-release and hit Enter.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=81)** The podman run command runs a process in a new container based on the container image.
>
> **[1:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=86)** If the container image has not been downloaded, then podman run pulls the image from the repository just as podman pull would and then starts the container from that image.
>
> **[1:35](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=95)** Because I provided the --rm option, the container was removed automatically when the command exited.
>
> **[1:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=101)** Bring your line back and change the command to /bin/bash and replace the --rm option with the -it options to keep the container running and open a terminal.
>
> **[1:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=115)** Now you should see the container's bash prompt.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=118)** Since we have our persistent terminal, let's do something useful like installing a piece of software.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=122)** Type in dnf install -y zip.
>
> **[2:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=127)** This will log you in as root so there's no reason to elevate privileges.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=130)** Hit Enter.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=132)** Now open a second terminal and get the container status by typing in podman ps and hit Enter.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=138)** You should see the running container.
>
> **[2:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=143)** Copy the container ID into your clipboard for later.
>
> **[2:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=146)** To list all containers if they're running or not, bring your line back and add -a and hit Enter.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=153)** This should show your busy box container as well.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=158)** Now let's stop the container using its ID.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=160)** Type in podman stop and then paste in the container's ID and hit Enter.
>
> **[2:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=166)** Give this a moment and then verify with podman ps.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=170)** The container should not be listed.
>
> **[2:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=172)** We ran a container and then stopped it but did not remove the image.
>
> **[2:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=175)** This means the container image is stored locally and it can run again.
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=179)** Use podman start to start the container without running any commands inside of it.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=187)** Go back to your first terminal and type podman start -a and then paste in the ID.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=198)** The -a option is for attaching to the current shell and hit Enter.
>
> **[3:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=204)** Now go back to your second terminal and list all containers again.
>
> **[3:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=207)** Type podman ps -a and hit Enter.
>
> **[3:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=211)** You should see the container running.
>
> **[3:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=213)** If you want to shut down all containers, use podman stop -a and hit Enter.
>
> **[3:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=221)** Give this a little time and then verify again with podman -ps -a.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/managing-containers?u=76281980&t=230)** All containers should be in the exited states.

> [!info]- Semantic Content
>
> **Tools:** terminal (7), bash (2)
> **CLI Commands:** rm (4), cat (1), dnf (1)
> **Speakers:** - [narrator] (1), - a (1), - n (1), - rm (1), - t (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)

#### [Working with container images](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=0)** - [Instructor] There will be a time when you have to manage container images, including copying them to other registries or backing them up.
>
> **[0:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=6)** Using the skopeo copy command, you can copy a container image from one registry to another.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=11)** This might be useful if you want to populate an internal repository with images from external registries.
>
> **[0:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=17)** The syntax isn't that much different from the secure copy command.
>
> **[0:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=21)** This will copy the latest stable image from [quay.io](https://quay.io) to a fictitious registry at registry.[example.com](https://example.com).
>
> **[0:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=28)** You can also use the skopeo copy command to copy layers of a container to a local directory.
>
> **[0:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=34)** For this exercise, create a directory in your user's home to have an mkdir, space dash P to create parent directories, space dollar sign uppercase home slash .local, slash share slash images and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=52)** Now copy the latest Nginx layer to the directory.
>
> **[0:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=55)** You'll specify the local directory using the dir colon prefix.
>
> **[0:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=59)** Type in skopeo, space copy, space docker, colon slash slash [docker.io](https://docker.io) slash nginx colon latest, space dir, colon slash dollar sign uppercase HOME, slash .local slash share slash images slash nginx and hit enter.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=84)** This will pull down the nginx image from [docker.io](https://docker.io) and copy the layer.
>
> **[1:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=92)** Once that's done, view the nginx directory.
>
> **[1:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=96)** Have an LS space dollar sign.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=97)** Uppercase HOME slash .local, slash share slash images slash nginx and hit Enter.
>
> **[1:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=106)** There is a manifest.[[JSON]] file in this directory.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=109)** Let's view it using CAT.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=111)** Type in cat space dollar sign HOME slash .local, slash share slash images slash nginx slash manifest.json.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=125)** Be careful with tab completion or Bash will try to escape the HOME variable.
>
> **[2:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=129)** Hit enter.
>
> **[2:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=130)** This manifest files shows the names of the layers and the size of the diff files.
>
> **[2:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=139)** To make managing downloaded images easier, you want to add additional names or tags to them.
>
> **[2:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=144)** You can do so using the podman tag command.
>
> **[2:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=147)** The additional name can consist of several parts, a name or a tag.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=152)** Get a list of images by typing podman space images and hit Enter.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=157)** Now let's give the ubi9 image a new name.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=161)** Type in podman space tag space registry .access.[redhat.com/ubi9](https://redhat.com/ubi9) space myubi and hit Enter.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=174)** And get a list of images again.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=181)** You should now see the original image with its image ID and the newly named local host version.
>
> **[3:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=187)** You can tell they're the same image as the IDs are the same.
>
> **[3:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=190)** The tag for both is latest.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=193)** Let's change the tag of my ubi to 9.
>
> **[3:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=196)** Type in podman space tags space registry .access.[redhat.com/ubi9](https://redhat.com/ubi9), space myubi:9, and hit Enter.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=210)** Now get a list of all images again after tagging the ubi9 image, you have three options for referencing it.
>
> **[3:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=218)** By the ID itself, by the fully qualified name such as localhost/myubi:latest or by the name with tag such as localhost/myubi:9.
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=230)** For more information see the podman tag man page.
>
> **[3:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=235)** You can use the podman save command to save an image to a container archive.
>
> **[3:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=239)** You can restore it later to another container environment or send it to someone else.
>
> **[4:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=243)** You can use the podman save command to save an image to a container archive.
>
> **[4:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=246)** You can restore it later to another container environment or send it to someone else.
>
> **[4:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=251)** Use the dash dash format option to specify the archive format.
>
> **[4:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=254)** The currently supported archive formats are docker-archive, oci-archive, oci-dir which is a directory with OCI manifest and docker-dir, which is a directory with Docker v2s2 manifest.
>
> **[4:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=268)** Use the podman load command to load an image from a container image archive into the container storage.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=274)** You'll need to have a pulled image on the local file system to do this.
>
> **[4:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=277)** First, we'll save the image to a tarball.
>
> **[4:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=280)** Type in podman space save, space -o myubi9.tar.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=286)** That'll be the archive, space registry.access .[redhat.com/ubi9](https://redhat.com/ubi9) and hit Enter.
>
> **[4:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=296)** Now that it's saved, delete the original.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=299)** Type in podman space rmi for remove image, space registry, .access.[redhat.com/ubi9](https://redhat.com/ubi9) and hit Enter.
>
> **[5:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=312)** Note that if the image you want to remove is running, you'll need to stop at first.
>
> **[5:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=316)** Verify with podman space images, the ubi9 container image should be gone.
>
> **[5:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=323)** If you wanted to start over and remove all images from your system, use podman space rmi space -a for all.
>
> **[5:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=330)** To remove images with multiple tags, you'll need to use podman space rmi space -f followed by the ID number.
>
> **[5:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=337)** For more information, see the podman -rmi man page.
>
> **[5:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=342)** Now load the saved copy using podman load.
>
> **[5:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=345)** Type in podman space load, space -I, space myubi9.tar and hit Enter and verify by typing in podman images.
>
> **[6:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=362)** You can redistribute UBI images using the podman push command.
>
> **[6:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=366)** This will allow you to push an UBI image to your own registry or to a third party.
>
> **[6:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=371)** Note that if you're pushing a redhat UBI image to a third party registry, you cannot call these images Red Hat Certified or Red Hat supported unless you certify them through the Red Hat Partner Connect program.
>
> **[6:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=382)** You can use the podman export command to export the file system of a running container to your local machine.
>
> **[6:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=388)** This would be useful if you wanted to snapshot a container in order to revert it later much in the same way as we do with [[Virtual Machines]].
>
> **[6:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=396)** First you run podman export to export the file system to a tar ball and then you use podman import to import the tarball and save it as a file system image.
>
> **[6:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=405)** Once that's done, you run the file system image or use it as a layer for other images.
>
> **[6:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=410)** Let's start this exercise by running the ubi9 container.
>
> **[6:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=415)** Type in podman space run space -dt space --name equals testubi space registry .access.[redhat.com/ubi9](https://redhat.com/ubi9) and hit Enter.
>
> **[7:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=431)** Now verify by listing all containers.
>
> **[7:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=433)** Type in podman space ps space -a.
>
> **[7:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=438)** You should see testubi running.
>
> **[7:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=440)** Take note of its ID by copying it into the clipboard.
>
> **[7:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=444)** Now attach to the container.
>
> **[7:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=446)** Type in podman space attach space testubi and hit Enter.
>
> **[7:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=453)** And then inside the container, create a file called test file.
>
> **[7:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=456)** Type an echo space double quote, this is a test, double quote, space greater than testfile.txt and hit Enter.
>
> **[7:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=468)** Detach from the container now by pressing Control + P, followed by Control + Q.
>
> **[7:53](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=473)** Now export the file system of testubi as a tar file.
>
> **[7:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=477)** Type in podman space export space -o space testubi.tar, that'll be the tar file name and then paste in the ID and hit Enter.
>
> **[8:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=491)** Note that this is just a tar archive of the files in the container so you can list the files using tar.
>
> **[8:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=496)** Type in tar space -tf space testubi.tar and hit Enter.
>
> **[8:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=504)** Or you could create a directory and extract the archive to it to browse the contents.
>
> **[8:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=508)** I will leave this as an exercise for you.
>
> **[8:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=512)** Now let's import the testubi.tar archive and save it as a file system image.
>
> **[8:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=517)** Type in podman space import space testubi.tar space testubi-imported and hit Enter.
>
> **[8:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=528)** Once that's done, list all images.
>
> **[8:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=530)** Type in podman space images and hit Enter.
>
> **[8:55](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=535)** There you should see the testubi-imported image.
>
> **[8:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=539)** And lastly, run the imported image and verify that it's the same file system by viewing the test file.
>
> **[9:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=544)** Type in podman space run space -it space --name equals testubi-imported space localhost/testubi-imported.
>
> **[9:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=560)** Space, the command is cat space testfile.txt and hit Enter.
>
> **[9:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=569)** And there it is, it's the same file system that came from the running container.
>
> **[9:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/working-with-container-images?u=76281980&t=573)** For more information view the podman import and podman export man pages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[Virtual Machines]] (1)
> **CLI Commands:** tar (12), nginx (7), docker (6), cat (3), mkdir (1)
> **URLs:** [redhat.com](https://redhat.com) (5), [docker.io](https://docker.io) (2), [quay.io](https://quay.io) (1), [example.com](https://example.com) (1)
> **Env Vars:** home (4), ubi (3), cat (1), oci (1)
> **File Paths:** manifest.json (2), testfile.txt (2)
> **Definitions:** is a  (4)
> **Warnings:** note that (3), be careful (1)
> **Prerequisites:** you'll need (3)

#### [Build a container from a container file](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=0)** - [Instructor] Often, we can find image containers, either through Red Hat's UBI registry or elsewhere, that are nearly perfect for our needs, and other times, we need to customize them by adding or removing software.
>
> **[0:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=11)** It may be that we need to change the software configuration for our particular use case.
>
> **[0:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=16)** As I've mentioned before, container images are not actually images.
>
> **[0:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=20)** They're made up of multiple layers.
>
> **[0:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=22)** These layers are listed in a container file.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=25)** These container files can be easily modified, saved, and shared with others.
>
> **[0:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=30)** A container file contains the instructions needed to build a new container image, and as they are text files, can be shared using [[Version Control]] systems, such as [[Git]].
>
> **[0:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=38)** In this first exercise, we'll pull down an UBI image and add software to it.
>
> **[0:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=43)** Start by running the UBI image.
>
> **[0:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=45)** Type into a terminal, podman, space, run, space, dash, it, space, dash, dash, name, space, myubi, space, registry.access.[redhat.com/ubi9](https://redhat.com/ubi9) and hit enter.
>
> **[1:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=62)** Since we ran it with the dash, it options, we are logged into the container as root.
>
> **[1:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=67)** Now add a package to it.
>
> **[1:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=68)** Type in dnf, space, install, space, zsh and hit enter.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=74)** Once this has completed, we have a modified container that we can save, export, or push to a new registry.
>
> **[1:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=80)** Note that if using Red Hat's UBI containers, you can only install software from Red Hat's UBI repositories if you want to distribute the container within Red Hat's subscribed RHEL systems.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=90)** The easiest way to ensure that you only install software from the UBI repositories is to disable all others and manually enable the two UBI repos.
>
> **[1:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=99)** If you will be using the container locally or uploading it to a different registry, then you're free to install anything you wish.
>
> **[1:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=105)** Now let's take this a step further and start from a container file.
>
> **[1:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=108)** First, create a directory for your container file and change into it.
>
> **[1:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=111)** Type in mkdir, space, myhttpd and hit enter, then type in cd, space, myhttpd and hit enter again.
>
> **[2:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=122)** Now, using a text editor, create the container file.
>
> **[2:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=125)** Type in vi, space, Containerfile with a capital C and hit enter.
>
> **[2:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=132)** Press your I key to insert text.
>
> **[2:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=135)** For the first line, type in FROM in uppercase letters, registry/access.[redhat.com/ubi9/ubi-init](https://redhat.com/ubi9/ubi-init).
>
> **[2:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=148)** For this container, we'll use the ubi-init image.
>
> **[2:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=152)** Hit enter.
>
> **[2:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=153)** Type in run, uppercase letters, dnf, space, dash, Y, space, install, space, httpd, semicolon.
>
> **[2:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=161)** Space, DNF, space, clean, space, all, semicolon.
>
> **[2:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=165)** Space, systemctl, space, enable, space, httpd, semicolon.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=171)** This installs the web server, cleans the DNF cache, and enables HTTPD.
>
> **[2:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=177)** Hit enter.
>
> **[2:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=178)** Now typing in RUN, uppercase letters, space, echo, space, double quote, "Successful Web Server Test", double quote, space, greater than, space, /var/www/[[HTML]]/index.html.
>
> **[3:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=201)** This will be our default webpage.
>
> **[3:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=203)** Hit enter.
>
> **[3:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=205)** Type in RUN, uppercase letters, mkdir, space, /etc/systemd/system/httpd.service.d/, semicolon.
>
> **[3:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=219)** Space echo, space, dash, e, space, single quote, left square bracket, Service with a capital S, right square bracket.
>
> **[3:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=231)** Backslash n for new line, Restart with a capital R equals always, single quote, space, greater than.
>
> **[4:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=240)** We'll redirect this into an httpd.conf file.
>
> **[4:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=244)** /etc/systemd/system/httpd.service.d/httpd.conf.
>
> **[4:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=256)** New line.
>
> **[4:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=258)** EXPOSE, in uppercase letters, space, 80.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=261)** That's the port number.
>
> **[4:23](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=263)** New line.
>
> **[4:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=264)** CMD, space, left square bracket, double quote, /sbin/init, double quote, right square bracket.
>
> **[4:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=274)** Feel free to pause the video and make sure your file matches mine.
>
> **[4:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=278)** When done, save and exit by pressing escape, colon, X, exclamation mark, and hit enter.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=286)** Now we'll build a container image from this container file.
>
> **[4:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=291)** Type in podman, space, build, space, dash, dash, format equals docker.
>
> **[4:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=297)** Space, dash, t, space, myhttpd, that's the name, space, dot for the current directory.
>
> **[5:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=306)** Make sure you include the dot, otherwise it won't work.
>
> **[5:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=309)** Hit enter.
>
> **[5:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=310)** Before we run it, we will change a few system settings.
>
> **[5:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=313)** If you want to run containers with systemd while SE [[Linux]] is enabled on your system, you must set the container_manage_cgroup Boolean variable.
>
> **[5:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=321)** Type in sudo, space, setsebool, space, dash, capital P to add it to the policy, space, container_manage_cgroup, space, 1 and hit enter.
>
> **[5:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=334)** To use port numbers lower than 1024, you have to modify the net.ipv4.ip_unprivileged_port_start variable.
>
> **[5:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=343)** Type in sudo, space, sysctl, not systemctl, space, net.ipv4.ip_unprivileged_port_start equals 80
>
> **[6:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=365)** and hit enter.
>
> **[6:08](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=368)** Now let's run the container.
>
> **[6:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=370)** Type in podman, space, run, space, dash, D, space, dash, dash, name equals myhttpd_run.
>
> **[6:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=379)** That's what we'll call it.
>
> **[6:20](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=380)** Space, dash, p, space.
>
> **[6:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=382)** This is the port forwarding, 80:80.
>
> **[6:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=388)** This'll forward the local host port 80 to the container's port 80.
>
> **[6:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=392)** Space, myhttpd, and hit enter.
>
> **[6:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=396)** Now, check that the container is running by typing in podman, space, ps, and hit enter.
>
> **[6:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=405)** The last thing we'll do is test the web server.
>
> **[6:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=407)** Type in curl, space, localhost/index.html and hit enter.
>
> **[6:56](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=416)** If what you see matches the index.html file we made, then you're done.
>
> **[7:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/build-a-container-from-a-container-file?u=76281980&t=421)** You've built a container from a container file and run a service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (4), [[Version Control]] (1), [[Git]] (1), [[Linux]] (1)
> **CLI Commands:** dnf (4), mkdir (2), systemctl (2), make (2), sudo (2)
> **Env Vars:** ubi (7), dnf (2), run (2), rhel (1), httpd (1)
> **Code Identifiers:** container_manage_cgroup (2), ip_unprivileged_port_start (2), myhttpd_run (1)
> **Prerequisites:** install (5)
> **File Paths:** var/www/html/index.html (1), localhost/index.html (1), index.html (1)
> **Ports:** port 80 (2), :80 (1)
> **URLs:** [redhat.com](https://redhat.com) (2)

#### [Configure a container to start automatically as a systemd service](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=0)** - [Instructor] Remember that containers are just packaged and configured applications and even if they resemble [[Virtual Machines]] on occasion, they are not.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=7)** They were never designed to be virtual machines providing full operating system functionality, but in contrast, we're designed to compartmentalize applications and utilize as much of the host OS as possible.
>
> **[0:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=18)** OCI formatted containers built by podman can be managed in the same way as system services using systemd.
>
> **[0:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=25)** You can use the podman generate systemd command to create systemd unit files for containers and pods.
>
> **[0:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=32)** With systemd unit files, containers or pods can start as systemd services.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=36)** This means you can define the order in which the containerized service runs and even consider dependencies.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=41)** You can also control the state of the containers using the systemctl command.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=46)** Before we get started creating systemd unit files for containers, we have to think about how rootless containers work.
>
> **[0:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=52)** You may have noticed that we have not had to run any containers using sudo or by logging in as root.
>
> **[0:57](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=57)** This is great for processes that would normally run as a user, but now we're taking things to a different level and managing rootless containers using systemd services.
>
> **[1:06](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=66)** As such, we need to take a few things into consideration.
>
> **[1:09](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=69)** Normally you would enable a systemd service so it starts at boot no matter who is logged in, by typing sudo space systemctl space enables followed by the service name.
>
> **[1:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=79)** Since you have to elevate privileges, this type of service would be managed by the super user.
>
> **[1:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=84)** The systemd unit files reside in /etc/systemd/system/.
>
> **[1:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=90)** If you want to service to start at user login and stop when the user logs out, you can insert the --user option.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=97)** In this case, a service would be managed by a user and the systemd unit files will reside in the user's home directory /.config/systemd/user.
>
> **[1:47](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=107)** In order for a user to start a service at system boot and have it persist after logout, you have to run loginctl space enable-linger, followed by the username.
>
> **[1:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=118)** With that in mind, we can move on.
>
> **[2:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=120)** For this exercise, we'll create a new container using the ubi9 image.
>
> **[2:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=124)** In a terminal type in podman space create space --name space, and let's call it serviceubi.
>
> **[2:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=134)** Space registry.access.[redhat.com/ubi9](https://redhat.com/ubi9) space sleep
>
> **[2:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=145)** space infinity, and hit enter.
>
> **[2:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=149)** This returns the container id.
>
> **[2:31](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=151)** We can use the name serviceubi, which we specified, or this ID to create the systemd unit file.
>
> **[2:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=157)** Since we're doing this as a user, we'll place it in $HOME/.config/systemd/user.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=164)** First, let's create the directory structure using mkdir creating parent directors automatically.
>
> **[2:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=170)** Type in mkdir space -p $HOME/.config/systemd/user
>
> **[2:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=179)** and hit enter.
>
> **[3:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=181)** Now to create the systemd unit file type podman space generate space systemd space --name space serviceubi space > space $HOME/.config/systemd/user
>
> **[3:22](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=202)** /container-serviceubi.service.
>
> **[3:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=210)** To verify, let's display the contents of the container-serviceubi.service file.
>
> **[3:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=216)** Type of cat space $HOME/.config/systemd/user/container-serviceubi.service
>
> **[3:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=230)** Be careful, tab completion here as it will escape the variable which you don't want.
>
> **[3:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=234)** It's better to type it out.
>
> **[3:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=238)** You can see this file was auto generated by podman and the date.
>
> **[4:02](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=242)** In the systemd unit section, it has a description, wants the network online target, and will run after the network online target has finished starting.
>
> **[4:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=250)** Under the service section, it says it will restart on failure by running podman start serviceubi.
>
> **[4:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=257)** Lastly, in the install section, it says it is wanted by the default target.
>
> **[4:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=261)** As mentioned before, a user can manage services as long as the systemd unit files are stored in the user's home directory and you provide the --user option to systemctl.
>
> **[4:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=273)** Start by enabling linger for user1.
>
> **[4:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=276)** Type in sudo space loginctl space enable-linger space user1 and hit enter.
>
> **[4:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=286)** Now reload the systemd configuration as user1.
>
> **[4:50](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=290)** Systemctl space -user space daemon -reload, and hit enter.
>
> **[4:59](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=299)** To ensure our service is recognized, list all service unit files, type in systemctl --user space list-unit-files space -t space service.
>
> **[5:11](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=311)** This will only show files of the type service.
>
> **[5:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=316)** You should see container -serviceubi.service listed as disabled.
>
> **[5:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=321)** Now enable this service and start it at boot.
>
> **[5:27](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=327)** Type systemctl space --user space enable space container
>
> **[5:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=333)** - serviceubi.service, and hit enter.
>
> **[5:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=339)** This should create a symbolic link for the service.
>
> **[5:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=342)** Notice it's still working within the .config/systemd directory.
>
> **[5:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=346)** Now start the service immediately.
>
> **[5:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=349)** Type in systemctl space --user space start space container-serviceubi.service, and hit enter.
>
> **[6:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=364)** Now verify by typing systemctl space --user space list-units space -t space service.
>
> **[6:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=375)** Look near the top and you should see the running container.
>
> **[6:17](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=377)** Also verify with podman space ps and hit enter.
>
> **[6:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=384)** The name in the right hand column is serviceubi.
>
> **[6:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=388)** This takes care of a user run service, but generally speaking, the purpose of creating systemd unit files is to run processes as global system services.
>
> **[6:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=396)** To run the container as a system service, you'll need to copy the systemd unit files from your home directory to the /etc/systemd systemdirectory.
>
> **[6:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=405)** You'll need to elevate privileges and we'll also want to ensure the SE [[Linux]] security context is correct.
>
> **[6:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/configure-a-container-to-start-automatically-as-a-systemd-service?u=76281980&t=411)** Then reload the systemd configuration and start the service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Linux]] (1)
> **CLI Commands:** systemctl (8), sudo (3), mkdir (2), cat (1)
> **Env Vars:** home (4), oci (1)
> **File Paths:** home/.config (4)
> **Prerequisites:** you'll need (2), install (1)
> **Speakers:** - [instructor] (1), - serviceubi (1)
> **URLs:** [redhat.com](https://redhat.com) (1)
> **Tools:** terminal (1)

#### [Attach persistent storage to a container](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=0)** - [Instructor] Although it is possible to copy data into a container image and make it persistent, this also makes the container larger.
>
> **[0:07](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=7)** Another alternative is to create a Podman volume and attach it to the container.
>
> **[0:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=12)** These volumes will persist even across container deletions.
>
> **[0:15](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=15)** Volumes can be used to share data among multiple containers, and since a volume is just a folder on the host machine, it makes it easy to share data with the host as well.
>
> **[0:24](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=24)** And as such, makes it easier to back up data or migrate to another host.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=29)** To attach a volume to a container, we have to create it with Podman first.
>
> **[0:33](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=33)** Type into a terminal podman volume create hostvol.
>
> **[0:39](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=39)** I named it hostvol to remind me that it's a volume I created on the host.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=44)** Now inspect it using Podman.
>
> **[0:46](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=46)** Type in podman volume inspect hostvol, and hit enter.
>
> **[0:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=54)** This will show the volume's name which we defined, and the mountpoint in .local/share/container/storage/volumes.
>
> **[1:03](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=63)** Copy the path to the volume.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=64)** You'll need it in a moment, and it's quite long to type.
>
> **[1:12](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=72)** Now let's create a text message inside hostvol.
>
> **[1:16](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=76)** Type in echo, space, double quote, message from host, double quote, space, greater than, greater than, space.
>
> **[1:25](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=85)** Right click the path and add /hostmessage.txt and hit enter.
>
> **[1:34](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=94)** Now list the contents of the volume to be sure that it wrote the file.
>
> **[1:37](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=97)** Type in ls, space, and then right click and paste and hit enter.
>
> **[1:43](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=103)** If the hostmessage.txt file is there, then we can move on to attaching it to a container.
>
> **[1:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=109)** Now let's run a container and attach hostvol to it.
>
> **[1:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=112)** Type in podman run -it -v for volume, space, hostvol:/containervol, space registry.access.[redhat.com/ubi9](https://redhat.com/ubi9),
>
> **[2:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=133)** space, /bin/bash and hit enter.
>
> **[2:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=138)** The syntax of the volume portion is the host volume name as specified when we used Podman to create it, followed by a colon as a delimiter and then /container volume name, which is the path on the container.
>
> **[2:30](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=150)** So in our case, we named the volume that we created hostvol, and it will be mounted inside the container as /containervol.
>
> **[2:38](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=158)** This should help keep the two straight.
>
> **[2:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=160)** Now that you're inside the container, list the contents of the attached volume.
>
> **[2:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=164)** Type in ls /containervol and hit enter.
>
> **[2:48](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=168)** You should see the hostmessage.txt file you created.
>
> **[2:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=171)** Now let's do the opposite and create a file inside the container.
>
> **[2:54](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=174)** Type in echo, space, double quote, message from the container, double quote, space, greater than, greater than, space, /containervol/containermessage.txt and hit enter.
>
> **[3:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=193)** Now you can detach the container shell from the host terminal and list a volume from the host.
>
> **[3:18](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=198)** To detach the shell while leaving it running, press Control + P and then Control + Q.
>
> **[3:26](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=206)** Now you should be back to your host terminal.
>
> **[3:28](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=208)** If you want to reattach the container, just use podman attach.
>
> **[3:32](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=212)** List the volume by tipping in ls, space, and then right click for the path and hit enter.
>
> **[3:40](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=220)** You should be able to see both files.
>
> **[3:42](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=222)** Now you're sharing files between the host and container.
>
> **[3:45](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=225)** To share the same directory between more than one container, just attach it to another container when you run it exactly the same as we did with this one.
>
> **[3:52](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=232)** Keep in mind though that you can end up with a situation where processes in multiple containers could be attempting to write to the same file at the same time.
>
> **[4:01](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/attach-persistent-storage-to-a-container?u=76281980&t=241)** Although this isn't different than two separate processes trying to write to the same file at the same time on a normal system, just keep it in mind.

> [!info]- Semantic Content
>
> **File Paths:** hostmessage.txt (3), containervol/containermessage.txt (1)
> **CLI Commands:** ls (3), make (1)
> **Tools:** terminal (3), bash (1)
> **URLs:** [redhat.com](https://redhat.com) (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=0)** - [Grant] Thank you for taking this fast track course on Red Hat's R8 CSA certification.
>
> **[0:05](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=5)** This course was part of a two course series for the RHCSA EX.200 Exam.
>
> **[0:10](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=10)** Be sure to take both courses before attempting the test.
>
> **[0:13](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=13)** I recommend that you watch each video as many times as necessary and do the exercises for each.
>
> **[0:19](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=19)** The RHCSA certification as a performance-based test and not multiple choice, thus it requires you to actually know how to solve a problem in a lab environment.
>
> **[0:29](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=29)** The exam lasts 2.5 hours and internet access is not provided during the test nor are outside material permitted.
>
> **[0:36](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=36)** Documentation that ships with Red Hat Enterprise [[Linux]] is available though.
>
> **[0:41](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=41)** Also study the cheat sheets available in each chapter.
>
> **[0:44](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=44)** You may also want to pick up an RHCSA certification prep book to give you more information.
>
> **[0:49](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=49)** There are several high rated books out there.
>
> **[0:51](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=51)** No matter which one you choose make sure it covers the most recent RHCSA test as this is a product certification.
>
> **[0:58](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=58)** Bypassing it, you're proving that you know how to administer this particular version of Red Hat Enterprise Linux.
>
> **[1:04](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=64)** If you want more in depth training on topics covered in this course you may want to take the Linux Administrator Learning Paths which spends more time and provides more supporting information about each topic.
>
> **[1:14](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=74)** Once you're ready to take the certification test contact Red Hat to schedule your exam by going to a Red Hat certification website.
>
> **[1:21](https://www.linkedin.com/learning/red-hat-certified-system-administrator-ex200-cert-prep-2-file-access-storage-and-security/next-steps?u=76281980&t=81)** Thank you again for taking this series and good luck on the exam.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3)
> **Env Vars:** rhcsa (4), csa (1)
> **CLI Commands:** make (1)
> **Versions:** 2.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [grant] (1)


## Instructor

- [[Grant McWilliams]]

## Resources

- Exercise files available

## Skills Covered

- Linux System Administration
- Red Hat Linux

## Path Context

### In [[Prepare for the Red Hat Certified System Administrator (EX200) Exam]]
← [[Red Hat Certified System Administrator Ex200 Cert Prep 1 Deploy Configure And Manage]] | **2 of 2**

## Appears In

- [[Prepare for the Red Hat Certified System Administrator (EX200) Exam]]

## Related Courses

_Courses sharing skills:_

- [[LPIC-1 Exam 102 (Version 5.0) Cert Prep]] — Linux System Administration
- [[Lpic 1 Exam 101 Version 5 0 Cert Prep]] — Linux System Administration
- [[Ubuntu Linux- User and Group Management]] — Linux System Administration
- [[Ubuntu Linux- Storage Management]] — Linux System Administration
- [[Ubuntu Linux- Operating System Basics]] — Linux System Administration

---

[↑ Back to top](#)