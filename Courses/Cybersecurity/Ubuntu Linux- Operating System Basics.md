---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ubuntu-linux-operating-system-basics
url: "https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics"
duration_minutes: 108
duration: 1h 48m
level: Intermediate
updated: 6/15/2017
learners: 7015
skills:
  - Linux System Administration
  - Ubuntu
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHN4zlKFpwrjQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668810191?e=2147483647&amp;v=beta&amp;t=z_U2gtrCXg5CUo4nPU9NxZO9xMSHo4oEo9t96rWKaSE"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Ubuntu Linux Professional Certificate by Canonical]]'
prev_courses:
  - '[[Learning Linux Command Line (2023)]]'
next_courses:
  - '[[Ubuntu Linux- Storage Management]]'
path_nav: '[{"path":"Ubuntu Linux Professional Certificate by Canonical","position":2,"total":4,"prev":"Learning Linux Command Line (2023)","next":"Ubuntu Linux- Storage Management"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/it-help-desk
  - topic/network-and-system-administration
  - topic/web-development
  - skill/linux-system-administration
  - skill/ubuntu
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ubuntu%20Linux-%20Operating%20System%20Basics.md)

![Ubuntu Linux: Operating System Basics](https://media.licdn.com/dms/image/v2/C4E0DAQHN4zlKFpwrjQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568668810191?e=2147483647&amp;v=beta&amp;t=z_U2gtrCXg5CUo4nPU9NxZO9xMSHo4oEo9t96rWKaSE)

# Ubuntu Linux: Operating System Basics

> In this course, you’ll get a basic understanding of the Linux operating system. Instructor Scott Simpson helps to familiarize you with the basics of operating a system running Ubuntu. Scott explains how to manage the startup process, update the kernel, install software from source code, use AppArmor to confine software into limited access spaces, and examine resource utilization. He also goes into

> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics) | 1h 48m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Welcome
  - Environment setup
- [**1. Booting and Starting Up**](#1-booting-and-starting-up) (5 videos)
  - Booting the system
  - Configuring and modifying the bootloader
  - Manage the startup process
  - Update the kernel
  - Change kernel parameters
- [**2. Software and Updates**](#2-software-and-updates) (4 videos)
  - Updating software
  - Installing from source
  - Understanding shared libraries
  - Explore AppArmor
- [**3. Resources and Reports**](#3-resources-and-reports) (8 videos)
  - Examine resource utilization
  - Working with processes
  - Explore resource bottlenecks
  - Explore system hardware
  - Upgrade or add hardware
  - Explore system log files
  - Monitor security and audit the system
  - System usage reporting
- [**4. Automation and Scheduling**](#4-automation-and-scheduling) (2 videos)
  - Schedule and verify tasks
  - Configuration management and automation
- [**5. Recovery and Support**](#5-recovery-and-support) (3 videos)
  - Consider a disaster recovery plan
  - Train team members and document changes
  - Incident management
- [**Conclusion**](#conclusion) (1 videos)
  - Summary

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=0)** - [Scott] Much of a system administrator's job is to maintain systems that are already up and running, whether it's software upgrades, making sure the hardware is performing well, keeping an eye on security or automating regular tasks, administrators need to be prepared to complete a series of steps to keep their systems happy.
>
> **[0:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=18)** In this course, I'll show you how to work with a bootloader and how to upgrade the kernel.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=22)** We'll take a look at installing software and how to use AppArmor to confine software into limited access spaces.
>
> **[0:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=29)** We'll see how to explore system resource usage and where to find common log files that contain information about how the system is running.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=37)** After that, we'll take a look at some automation and organizational support topics.
>
> **[0:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=42)** This course is the second in a series for aspiring system administrators.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=46)** Once the essentials are behind you, this course will help you become more familiar with the basics of operating a system running Ubuntu.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/welcome?u=76281980&t=53)** Let's go.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [scott] (1)

#### Environment setup
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=0)** - [Instructor] In this course I'll be using an Ubuntu desktop system that's already installed and running.
>
> **[0:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=5)** I'm using Ubuntu with a known desktop, running in VirtualBox but you could use any version of Ubuntu you want.
>
> **[0:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=12)** Other courses in the library and the previous course in this series cover the various ways you can install Ubuntu so we won't spend time doing that here.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=20)** If you want to follow along and you don't have a machine set up, take some time to do that now.
>
> **[0:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=25)** Because we'll be making changes to how the system works, be sure you're not using a production system, or a system that anyone else relies on to get their work done.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=34)** That's why I recommend you use a virtual machine.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=37)** But if for some reason you can't use a virtual machine on your computer, consider setting up an account with a cloud provider, like DigitalOcean, Azure, AWS, or many others that are out there.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=48)** The important point is that you want an environment where you can change things and learn without disrupting others.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=53)** I do expect that you're somewhat familiar with Linux and especially the command line.
>
> **[0:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=58)** If not, take a look at the previous course in this series on the essential commands.
>
> **[1:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/environment-setup?u=76281980&t=62)** This course will introduce you to some procedures and skills that merit practice, so be sure to take some time to explore on your own as well.

> [!info]- Semantic Content
>
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)


### 1. Booting and Starting Up

> [↑ Back to Table of Contents](#table-of-contents)

#### Booting the system
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=0)** - [Narrator] When a system goes from powered off to up and running, it goes through a boot process to bring up the operating system to a usable state.
>
> **[0:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=8)** This process, as well see in another video in this course, has some technical details that make it work.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=13)** It's not just about applying power to the components and having them suddenly work.
>
> **[0:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=18)** In that vein, we also can't just remove power from the system when we're done with it.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=22)** So in this video, we'll take a look at rebooting and powering down a machine safely.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=27)** Modern computers are complex, so we can't necessarily just treat them like appliances.
>
> **[0:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=32)** When we go to shut off a light, we can flick a switch, and that's that, but a computer has a lot more going on, and simply removing power from it can cause all kinds of problems.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=43)** If there were information waiting in cache to be written to the disc, it could be lost.
>
> **[0:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=47)** If another user is currently using the system, their work would be interrupted or lost.
>
> **[0:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=52)** So we have a procedure that shuts down a computer in an orderly way to try and avoid these problems.
>
> **[0:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=57)** If we want to tell a system to power down and remain off, we shut it down.
>
> **[1:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=62)** If we want to instruct the system to shut down and then immediately come back online, we tell it to reboot.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=68)** Both of these operations, though, involve the system going through the shutdown process.
>
> **[1:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=73)** That process notifies other users of the system that the system is going down, and whoever initiates the shutdown can optionally set a period of time before it happens and send a message to other logged in users.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=86)** Users with the appropriate access level can cancel the shutdown too, if need be.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=91)** When the shutdown process takes place, the system notifies processes that are running, telling them they need to do whatever they're designed to do in the case of a shutdown, including saving data, writing log entries, or anything else needed to correctly end what they're doing to minimize data loss and end up in an expected state.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=109)** Data in caches, operations in cues, and information in memory need to be dealt with in a way that's appropriate for each of them.
>
> **[1:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=116)** Here at the command line, we can reboot or shutdown the system with the shutdown command which can take a few options.
>
> **[2:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=126)** Normally, we'd write shutdown -r now, or shutdown -h now, either to restart or power off the system.
>
> **[2:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=135)** The now parameter tells the system to go down now, though we could add a time either with + and some number of minutes, or with a 24-hour format time, if we want the system to go down at a specific time rather than in a specific amount of time.
>
> **[2:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=152)** Let's practice a little bit with a shutdown command.
>
> **[2:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=156)** I'll write sudo shutdown -h +5 to tell the system to shut off in five minutes.
>
> **[2:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=168)** If I wanted to, I could cancel the shutdown with shutdown -c, and now, after five minutes, the system won't shut down after all.
>
> **[2:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=178)** I mentioned before that we can say now instead of a specific time, so let's use that and reboot the system with shutdown -r now.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=191)** The machine notifies users that it's going down, and then immediately informing processes that it's going down.
>
> **[3:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=198)** The operating system kicks off its shutdown sequence, and the machine restarts.
>
> **[3:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=202)** I'll log back in here, and get back to my terminal.
>
> **[3:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=212)** There are a few other options in the manual pages too, if you'd like to explore them.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=220)** I want to talk for a moment about runlevels.
>
> **[3:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=224)** I'll write man runlevel so we can see a convenient little chart.
>
> **[3:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=228)** For a long time, we represented various power and interactivity states of the system as runlevels, a number from zero to six that we could use to set how a system operated.
>
> **[3:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=238)** Runlevel zero represented powering off.
>
> **[4:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=241)** One represented the rescue mode or single user mode.
>
> **[4:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=245)** Two, three, and four represented various multi-user modes.
>
> **[4:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=248)** Five was a graphical mode, and six represented the system rebooting.
>
> **[4:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=253)** In modern versions of Ubuntu, using the systemd service, we use what are called targets instead to talk about this kind of difference in operating modes.
>
> **[4:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=261)** You can see the mapping here in this table, inside the man page for the runlevel command.
>
> **[4:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=267)** To switch between them, we can use the systemctl isolate command, and the name of the target we want to switch to.
>
> **[4:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=278)** In this case, we could restart the system by saying systemctl isolate reboot.target, or any of the other runlevels in the man page.
>
> **[4:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=287)** Normally, you'd want your system to come up in multi-user or graphical mode, but if for some reason you want to change the default target, you can write sudo systemctl set-default and the target that you want the system to come up in.
>
> **[5:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=301)** Let's restart in rescue mode with rescue.target.
>
> **[5:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=308)** Now I'll restart the system with sudo shutdown -r now.
>
> **[5:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=315)** And when the system comes up, it'll be in rescue mode.
>
> **[5:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=320)** Let's change that back with systemctl set-default graphical.target.
>
> **[5:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=331)** I'll restart and the system will come back up in the graphical mode.
>
> **[5:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/booting-the-system?u=76281980&t=343)** I'll log in, and we're back to where we started.

> [!info]- Semantic Content
>
> **CLI Commands:** systemctl (4), sudo (3), make (1)
> **Code Keywords:** let (4), switch (3), case, (1)
> **Documentation:** man page (2)
> **Tools:** command line (1), terminal (1)
> **UI Navigation:** go to (1), switch to (1)
> **Speakers:** - [narrator] (1)

#### Configuring and modifying the bootloader
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=0)** - [Instructor] Booting the system, or starting it up from a state where the operating system isn't running, may seem like a trivial exercise.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=7)** You push the button, some stuff goes by on the screen and then, after a while, you can actually use the computer; but the process is a lot more complex than that.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=15)** When a Linux system starts up, there are a few layers of activity that happen to get from a powered off state to a condition where you can use the computer.
>
> **[0:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=23)** At the very beginning, the system starts up and loads its firmware; and that software either knows where to find, or goes and looks for, a specially-designated area of storage where the bootloader for the system is stored.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=34)** Often, the software is GRUB, or the grand unified bootloader; though there are others, such as LILO.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=40)** The bootloader has information about where operating systems on the disk are located and with what settings they can be started up.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=48)** The bootloader starts up the kernel and initial file system, which has the tools needed to mount the root file system; and then the kernel starts to load the other aspects of the operating system, namely, systemd, which is a replacement for the older init process, which controls all other processes on the system.
>
> **[1:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=64)** This service then loads up the other services and processes that the system needs to run, and the system goes to whichever target is set as default.
>
> **[1:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=72)** And then we're at a place where we can interact with the system.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=76)** Being able to control and modify the bootloader is an important part of administering the system.
>
> **[1:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=81)** When a Linux system is installed, typically the bootloader is installed during the process.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=86)** If not, however, we can install a bootloader with the grub-install command, followed by a path to the target disk.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=93)** When we start the system up, if the GRUB screen doesn't show up, holding shift will force it to appear.
>
> **[1:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=98)** From this menu, we can choose various options to start the system.
>
> **[1:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=102)** The Ubuntu entry here is the default, and I have some other options as well, including advanced options.
>
> **[1:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=108)** In here are recent versions of kernels, with a few startup options, including a recovery mode kernel in case anything goes wrong.
>
> **[1:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=116)** This option starts up the recovery system and gives us some choices to recover different aspects of the system that might be damaged.
>
> **[2:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=124)** I'll press escape.
>
> **[2:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=126)** Back here in the main menu, I can choose to edit the entry that I've selected with the E key; and I can make changes to the settings here.
>
> **[2:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=133)** There are lines to load various modules, and the really interesting lines are down here a bit, the ones that start with Linux and initrd.
>
> **[2:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=142)** These are the kernel to load and the specification of where the root file system will be when we're booted and the initial RAM disk, the file system image that will get loaded by the kernel before it pivots to the root file system.
>
> **[2:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=155)** Here on the Linux line is a place where we can pass additional options to the kernel, such as telling it what mode or target to start up into; and for that we would write systemd.unit equals and then the name of the target that we'd want to go to.
>
> **[2:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=170)** For example, we could say rescue.target to boot into rescue mode this one time.
>
> **[2:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=177)** Changes made here, though, don't persist; and to make them permanent, you'd need to edit some configuration files we'll take a look at in a moment.
>
> **[3:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=184)** These lines of script are something we could write in the GRUB shell too, and you can get into the shell by pressing Ctrl + C.
>
> **[3:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=190)** Here at the shell we can navigate around a little bit.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=193)** We can use LS to take a look at information about the disks that are mounted and are readable here.
>
> **[3:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=199)** The disks and partitions are represented as parenthetical pairs with the device and partition here.
>
> **[3:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=205)** HD0 is a device, and MSDOS5 and MSDOS1 are partitions.
>
> **[3:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=210)** MSDOS means an MBR or master boot record partition, and GPT would represent a GUID partition table.
>
> **[3:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=217)** We can read any of the partitions here that are of a format that GRUB can read.
>
> **[3:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=221)** So encrypted partitions won't necessarily be accessible here.
>
> **[3:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=225)** We can type LS to find out about a partition, in this case, MSDOS1; or if we type the same thing
>
> **[3:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=238)** and add a slash, we can take a look at the file system instead.
>
> **[4:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=242)** That's helpful because we need to be able to read a file system to find the kernel and initial file system.
>
> **[4:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=248)** Otherwise, GRUB wouldn't be able to boot the system.
>
> **[4:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=250)** If we take a look inside the boot folder here, that's where we'll find the kernels and the initial RAM disks.
>
> **[4:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=259)** I'll press escape twice to get back to the boot selector, and I'll choose to start up my system.
>
> **[4:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=268)** Now that we're booted, let's take a look at the configuration file that controls many of the aspects of the boot loader.
>
> **[4:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=275)** That's etc/default/grub and here we could modify some things like the timeout of how long the system will show the menu before booting and which option is the default.
>
> **[4:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=287)** Any option we change here needs to be applied by running sudo update-grub afterwards.
>
> **[4:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=299)** The configuration files that specify which options are available in GRUB are located at etc/grub.d, and they do take a bit of study to get your head around.
>
> **[5:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=311)** The files here are numbered, so they're loaded in a particular order.
>
> **[5:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=315)** This is a common way of controlling the order that a system processes files, and it just goes up from zero.
>
> **[5:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuring-and-modifying-the-bootloader?u=76281980&t=321)** Modifying the bootloader is not something you might need to do frequently, but it's good to know where things are and how they interact.

> [!info]- Semantic Content
>
> **Env Vars:** grub (6), ram (2), msdos1 (2), lilo (1), hd0 (1)
> **CLI Commands:** find (4), make (2), ls (2), sudo (1)
> **Code Keywords:** default. (2), while, (1), for, (1), default, (1), pass (1)
> **Definitions:** is a  (5), is an  (1)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** install (2)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)

#### Manage the startup process
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=0)** - [Instructor] When the system starts up, it begins a process or init system that is the owner of all subsequent processes.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=7)** Older systems used diversion derived from system five Unix.
>
> **[0:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=10)** And more recent distributions mostly use systemd.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=14)** If we wanted to explore certain units or services that are running, we could tell systemctl to give us the status of each one.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=22)** I can see a list of all of the units with systemctl.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=28)** I'll press space to page through this list.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=30)** And here I see one that I recognize, Network Manager.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=34)** I'll press Q.
>
> **[0:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=35)** And let's take a look at Network Manager in more detail with systemctl status Network Manager.
>
> **[0:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=44)** Here I can see quite a bit of information about the Network Manager service.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=48)** Including the name of the service file, and the friendly name.
>
> **[0:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=54)** I can see that it's loaded and I can see where the service is defined.
>
> **[0:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=59)** Here I can tell that it's enabled, which means that it'll start up when the system starts.
>
> **[1:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=64)** And the vendor preset which is the default state of the service.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=68)** Here I can see that the service is active and running and the date when it was started, and how long ago that was.
>
> **[1:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=75)** I can see that the documentation in the man pages is in section eight, and I can see the systems main process ID.
>
> **[1:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=83)** Below that's information about the C group and other processes that this may have started up.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=88)** And at the bottom, there's a little bit of the log.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=91)** I'll press Q.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=93)** If for some reason I wanted to not have Network Manager start up at boot, and not have my network interfaces brought up, I could use the command sudo systemctl disable Network Manager.
>
> **[1:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=108)** Disabling is different than stopping a service.
>
> **[1:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=111)** Disabling tells the service not to start up at boot.
>
> **[1:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=114)** And stopping which I could do with systemctl stop Network Manager tells the service to no longer operate immediately.
>
> **[2:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=123)** So if you had a web server or something running, for example, stopping it would immediately make the service no longer work.
>
> **[2:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=130)** Disabling it would leave it running at the present time, but just not start up automatically whenever the system restarts.
>
> **[2:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=136)** Some services, like Network Manager here, have already done what they need to do when they start.
>
> **[2:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=141)** So stopping them basically has no effect.
>
> **[2:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=144)** Let's disable Network Manager, and reboot the system.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=163)** And now, if I take a look at my network information, with IP space A, I can see that my ethernet adapter doesn't have an IP address.
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=172)** That's because it's state is down.
>
> **[2:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=174)** Because Network Manager didn't bring it up.
>
> **[2:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=177)** So, I'll manually start the Network Manager service with sudo systemctl start Network Manager.
>
> **[3:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=189)** And now, using that same command again, IPA, I can see that my network interface has been brought up and I have an IP address.
>
> **[3:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=199)** Let's take a look at Network Manager with systemctl status Network Manager.
>
> **[3:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=208)** It's active and running, but it's still disabled.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=211)** So if I restart my system, Network Manager won't start up.
>
> **[3:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=215)** Let's fix that and put it back to how it was with sudo systemctl enable Network Manager.
>
> **[3:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/manage-the-startup-process?u=76281980&t=225)** And now I'm checking the status of Network Manager again I can see that it's enabled.

> [!info]- Semantic Content
>
> **CLI Commands:** systemctl (8), sudo (3), make (1)
> **Code Keywords:** let (4), interface (1)
> **Env Vars:** ipa (1)
> **Documentation:** the documentation (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Update the kernel
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=0)** - [Narrator] The kernel is what makes Linux Linux and every now and again it gets updated to add new features and support for different hardware.
>
> **[0:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=9)** On a modern system, upgrading the kernel is a fairly straightforward operation.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=13)** As long as you're using official kernels, the process just takes a few commands.
>
> **[0:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=18)** If you're hacking on your own kernel or making changes that require you to compile the kernel from source, you'll need to take a few more steps.
>
> **[0:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=25)** To find out about that, be sure to check out Advanced Linux: The Linux Kernel.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=30)** In this video, we'll download an updated kernel from the Ubuntu kernel site.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=34)** First, I'll check out what my current kernel version is using the uname - r command.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=40)** This shows me the release version of the currently active kernel.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=43)** Mine is 4.4.0-75 and yours may be different.
>
> **[0:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=49)** Over in the browser here, I'll go to the kernel site for Ubuntu, kernel.[ubuntu.com/~kernel-ppa/mainline](https://ubuntu.com/~kernel-ppa/mainline).
>
> **[0:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=58)** Up here at the top is a daily folder that contains links to versions of the kernel that have changed by day.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=63)** I'm not that adventurous so I'll scroll all the way to the bottom of the page here and find the highest number kernel that isn't a release candidate, in my case 4.11.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=76)** Again, what you see may be different.
>
> **[1:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=78)** I'll click the folder and scroll down and here's a list of packages.
>
> **[1:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=83)** Some of them are headers which you'll need if you're compiling software and the others are image which contain the actual kernel.
>
> **[1:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=90)** Both are available for different architectures so be sure to pick appropriately.
>
> **[1:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=94)** I know that I need the amd64 version which is common for a standard 64-bit Intel machine.
>
> **[1:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=102)** I'll right click and copy the link here.
>
> **[1:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=105)** Then I'll go back to my terminal and download the package with wget.
>
> **[1:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=113)** Now that that's downloaded, I can use the depackaged tool to install this.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=117)** We'll see more about package management in the chapter about software and updates.
>
> **[2:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=121)** I'll write sudo dpkg - i and the name of the package that I just downloaded.
>
> **[2:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=130)** And as that installs, we'll see part of the process is updating the grub entries.
>
> **[2:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=134)** The installation will make this version of the kernel the default one as we'll see in a moment.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=140)** There we go.
>
> **[2:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=142)** If I take a look at the boot folder, I can see that my new kernel has been installed and it's also generated an initial RAM disk and some other files that are needed for boot.
>
> **[2:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=154)** Installing new kernels doesn't replace existing ones.
>
> **[2:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=156)** It just adds them to the list of what's available.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=159)** And as we see here, point grub added.
>
> **[2:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=161)** We could always change back later if we needed to.
>
> **[2:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=164)** Okay, I'll restart my system now with sudo shutdown - r now.
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=172)** And I'll pause at the bootloader screen.
>
> **[2:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=174)** I'll press E to edit my default entry and scroll down to the Linux line and here I can see that it's going to load the new version of the kernel.
>
> **[3:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=183)** Good, I'll press Control + X to continue.
>
> **[3:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=189)** And then when the system comes up, I'll go back to my terminal, and check the kernel version with uname - r and here I can see that I'm running the new version of the kernel.
>
> **[3:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=205)** If you're using a virtual machine, you may need to rebuild and reinstall your guest editions, depending on how your system behaves.
>
> **[3:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=212)** If something went wrong, I could restart the system and go into the advanced options in the bootloader.
>
> **[3:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=217)** There, I'll find earlier kernels to select.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/update-the-kernel?u=76281980&t=220)** If an older kernel boots but the new one doesn't, you can always remove the new one with Package Manager and try again later.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), sudo (2), wget (1), make (1)
> **Code Keywords:** require (1), this. (1), continue (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Prerequisites:** you'll need (2), install (1)
> **Versions:** 4.4.0 (1), 4.11 (1)
> **Cross-References:** go back to (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)

#### Change kernel parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=0)** - [Instructor] The kernel offers many run time parameters that we can set in order to change how certain things work.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=6)** Rather than having to hard code and recompile the kernel every time we want to make a change to a kernel parameter, we have a few tools at our disposal to change things more easily.
>
> **[0:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=16)** These options are exposed in folders with ND proc sys folder and the files under each of these subfolders contain a setting that corresponds with the value of the parameter.
>
> **[0:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=29)** We can also see the options with the sysctl dash A command which shows all of the parameters we can set.
>
> **[0:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=38)** The parameters are generally organized into a series of groups as we can see and this first grouping here net, user, and so on are represented by the first level of folders within the proc sys folder.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=53)** I'll scroll up through here to net.ipv4 and here's IP forward, a common parameter that needs to be changed if a system is set up to route traffic between networks.
>
> **[1:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=66)** Now it's set to zero, or false, meaning the system wouldn't forward packets that are sent to it.
>
> **[1:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=72)** If we changed that to one, or true, it would forward packets.
>
> **[1:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=77)** We can read this value specifically with sysctl and the key name as well, with sysctl net.ipv4.ip_forward
>
> **[1:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=90)** and there's the zero.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=93)** Because each of these values is represented as a file in the proc sys folder we can also discover the value by taking a look at the contents of the files there.
>
> **[1:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=101)** I'll write cat /proc/sys/net/ipv4/ip_forward
>
> **[1:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=111)** and there's the value of zero as well.
>
> **[1:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=115)** We can change the value to one with sudo sysctl dash W for write and then the name of the key, net.ipv4.ip_forward and then I'll add equals one on the end.
>
> **[2:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=135)** That'll set the value temporarily.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=137)** When the system restarts, this will go back to the default value, however we can make the value of this entry stick by adding it to the ETC sysctl.conf file.
>
> **[2:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=147)** I'll write sudo nano /etc/sysctl.conf
>
> **[2:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=157)** in fact, it's common enough that the line is already here, but just commented out.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=163)** So you could add it here or uncomment the value.
>
> **[2:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=166)** I'm not going to change anything right now, so I'll exit nano with control X.
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=172)** If you're managing many parameters or you need a more modular approach to parameter management, you can set the values in the ETC sysctl.d folder instead.
>
> **[3:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=185)** Inside there are a series of files broken out for organization where you can add a parameter.
>
> **[3:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=190)** These are processed in numerical order and it's recommended that end users use 60 instead of 10 at the beginning, but this 99-sysctl.conf file is actually a sim link back to sysctl.conf, so anything that's in sysctl.conf will be loaded last and therefore override anything that's set in the files in this folder.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=211)** You'll need to decide how you want to design your parameter specifications.
>
> **[3:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/change-kernel-parameters?u=76281980&t=215)** As I mentioned, changes made in these files will stick through a reboot, but if you don't want to reboot and you want the setting to become active, you can use the sudo sysctl dash P command to reload the parameters and apply your changes to the running environment.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (3), make (2), cat (1)
> **Code Identifiers:** ip_forward (3)
> **Env Vars:** etc (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Code Keywords:** override (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll up (1)
> **Best Practices:** recommended (1)


### 2. Software and Updates

> [↑ Back to Table of Contents](#table-of-contents)

#### Updating software
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=0)** - [Instructor] In order to keep our systems patched and updated, we need to add new software to the system.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=6)** Here on Ubuntu, we'll do that with A-P-T, or APT, the Advanced Package Tool, which offers an easy to use interface to the Debian package manager, dpkg.
>
> **[0:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=16)** APT acts as a front end to a collection of tools that have more specific roles, including apt-cache and apt-get.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=22)** Occasionally, we need to use these tools directly, but for most tasks, using APT is sufficient.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=28)** The package management system can either search repositories of software for updates and new tools, or it can install already downloaded package files, allowing you to patch offline machines or to deploy packages across many machines and install things locally, rather than having many machines download the same update from the online repositories.
>
> **[0:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=47)** Here at the command line, we'll take a look at updating software first.
>
> **[0:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=51)** The package manager maintains a cached copy of a list of the packages available in the repositories that it knows about.
>
> **[0:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=57)** And then it uses that locally-stored information to request packages from the repositories to install.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=63)** So, if we're installing new software, we want to make sure that the cache is up to date, before we request something from the repos.
>
> **[1:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=69)** To update the cache, I'll write sudo apt update and then wait a little bit.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=76)** And when that's done, I can run sudo apt list --upgradeable to see which packages would be upgraded when we go to do that.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=86)** This may be different for you, based on how recently you installed or updated your system, and what you have installed.
>
> **[1:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=92)** The command to upgrade software is, as you might expect, apt upgrade.
>
> **[1:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=98)** And I can use that with one or more package names, or just leave it without package names, and then APT will upgrade everything upgradeable that hasn't been held back, or doesn't have some conflict preventing it from being installed.
>
> **[1:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=110)** You can hold back a package with the apt-mark command, and the hold option, if you want to prevent automatic updating of given packages.
>
> **[1:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=118)** You can unhold them with apt-mark unhold.
>
> **[2:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=121)** If you have conflicts, you can approach them in a few ways.
>
> **[2:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=124)** You want to look at an error message if there is one, first, to see if there's some clue there.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=128)** Or you can try to force an installation, or remove and reinstall a package or a group of packages to try to resolve an issue.
>
> **[2:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=136)** We can also search for, and add, new software with APT, using the search and install commands.
>
> **[2:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=143)** Apt search searches the descriptions and names of software in the local repository cache, for whatever you specify, and then returns matching packages that may be of interest.
>
> **[2:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=153)** I'll write apt search nmap, to search for a common network mapping tool.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=159)** If I scroll up here, I can find the package that I'm looking for.
>
> **[2:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=166)** Apt list shows more information about a given package, so let's take a look at nmap.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=175)** Apt show shows more information about a given package.
>
> **[2:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=178)** I'll write apt show nmap.
>
> **[3:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=182)** And here, I can find out some more information about this package.
>
> **[3:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=186)** Apt install instructs the package manager to go out and download the software and then install it.
>
> **[3:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=192)** I'll write sudo apt install nmap.
>
> **[3:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=196)** And then I'm given a display of other packages that will be installed, suggested packages, if I'm interested, and then a listing of new packages that will be installed.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=207)** I'm shown how much will be downloaded and how much space will be taken up after this installation finishes.
>
> **[3:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=213)** Then I'm prompted if I want to continue, I'll choose yes.
>
> **[3:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=222)** If I just wanted to download a package to use later, I could pass in the download-only option, and the file would be downloaded to my system.
>
> **[3:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=229)** Alright, sudo apt install download-only uuid, which is a handy utility for generating universally unique identifiers.
>
> **[4:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=242)** I can see that that file's been downloaded by taking a look at APT's cache, with ls /var/cache/apt/archives.
>
> **[4:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=253)** And here it is.
>
> **[4:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=255)** I can manually install that package with dkpg -I without being connected to the network.
>
> **[4:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=261)** Removing software is fairly straightforward as well.
>
> **[4:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=264)** I can use the apt remove command if a package was installed with APT, or I can use the dpkg -r command also.
>
> **[4:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=272)** Software installed from source isn't tracked by the package manager though, so they can't be removed with APT or dpkg.
>
> **[4:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=279)** We can also upgrade the operating system using APT when a new distro becomes available, with the apt dist-upgrade command.
>
> **[4:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=286)** That can sometimes cause problems though, and it takes quite a long time to run.
>
> **[4:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=290)** So you definitely want to test it out before you run it in production.
>
> **[4:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=293)** And depending on how critical your systems are, you may want to hold off live updating between distro versions altogether.
>
> **[5:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=300)** Sometimes it's a better idea to just deploy a new, clean server, and then layer your apps and software on top.
>
> **[5:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=306)** Some distros, including Ubuntu, can upgrade over the top of an existing install from the installation ISO.
>
> **[5:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=312)** But, as with the dist-upgrade option, it's a good idea to test out the process and make sure nothing breaks.
>
> **[5:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=317)** User accounts, software, and settings can all be changed or lost during an upgrade process.
>
> **[5:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=322)** Of course, in production, you want to run only long-term support versions anyway.
>
> **[5:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=326)** And the time gap between those means that you're likely better off with clean installs whenever you upgrade anyway.
>
> **[5:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/updating-software?u=76281980&t=332)** Updating software to address functional and security concerns is important, and while it can be automated in some cases, it's a good idea to keep human eyes on it, in case there are conflicts or other problems that need to be resolved.

> [!info]- Semantic Content
>
> **CLI Commands:** apt (27), sudo (4), make (2), find (2), ls (1)
> **Env Vars:** apt (9), iso (1)
> **Prerequisites:** install (10)
> **Code Keywords:** interface (1), for, (1), for. (1), let (1), continue (1)
> **UI Navigation:** go to (1), scroll up (1)
> **Exercise Files:** download the (2)
> **Definitions:** is a  (1), means that (1)
> **Tools:** command line (1)

#### Installing from source
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=0)** - [Instructor] Not all software we might want to use is available from the repositories.
>
> **[0:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=4)** Occasionally we'll need to install software from source code instead.
>
> **[0:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=8)** To do that, we'll need some tools in a package called build-essential, which we can get from the repositories.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=14)** So I'll install that first.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=15)** I'll write sudo apt install build-essential.
>
> **[0:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=23)** And I'll say yes to install these.
>
> **[0:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=26)** This installs a series of tools for compiling C and C++ code.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=30)** Most of the packages we'll download to build our C or C++ code, though some other projects may come with different flavors of source code and will need to be built using their own tool chains.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=40)** In this video, though, we'll follow a common pattern for installing from source using the make command, which is part of the build-essential toolkit.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=48)** A common set of steps you'll see when you're getting software that's distributed as source code looks like this.
>
> **[0:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=54)** ./configure is a shell script that sets up a Makefile, or a set of instructions for building software with the make tool.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=60)** It looks around your development environment for software, tools, and options, and then builds the Makefile accordingly, with specific settings for the environment that's being used, rather than forcing the user to know all kinds of technical details about their environment.
>
> **[1:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=74)** When the script is done we're left with a Makefile, and the make command operate on that.
>
> **[1:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=79)** Make uses the Makefile to build the source into the various objects we need in order to use the software, and then the make install command puts those objects into the places defined in the Makefile so they can be used on the system.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=93)** Let's take a look at how to install software this way.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=96)** I'll visit the site for Nmap, a popular network scanner, and navigate to the download section.
>
> **[1:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=103)** I'll scroll down and find the release file.
>
> **[1:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=107)** I'll right click and choose Copy Link Location.
>
> **[1:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=111)** I'll switch back to the command line and download this with wget.
>
> **[1:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=115)** I'll paste the URL with CTRL + Shift + V.
>
> **[1:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=119)** In a previous video, we installed this from the repositories.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=122)** So to avoid confusion, I'll uninstall that now with sudo apt remove nmap.
>
> **[2:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=134)** Then I'll open up the source code file with tar -xf and the name of the compressed archive.
>
> **[2:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=142)** This gives me a folder with the same name so I'll move into that with cd nmap-7.40.
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=151)** Looking around in here I can see a number of source code files.
>
> **[2:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=154)** And here is a script called configure.
>
> **[2:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=157)** Let's run that with ./configure.
>
> **[2:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=166)** When that's done, I have a new file here, the Makefile.
>
> **[2:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=170)** Let's run that with make.
>
> **[2:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=174)** Watching the output here, I can see the tools building my source code into object files.
>
> **[3:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=180)** And when that process finishes, I have a couple new files here, including the binary for nmap.
>
> **[3:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=187)** In fact, I can run the software here from the installation folder with ./nmap.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=193)** But it's not in a predictable location on the system yet.
>
> **[3:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=197)** Running sudo make install will run the installation portion of the Makefile and put the files into locations that are accessible from other paths, so I don't need to keep this folder of source code around.
>
> **[3:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=210)** In this case, the files get sent to /user/local/bin, my folder for local binaries that aren't required for the system to operate.
>
> **[3:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=218)** And right here is nmap and its associated tools.
>
> **[3:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/installing-from-source?u=76281980&t=222)** The make tool helps to simplify a series of very complex processes, and provides a standard framework for building and installing software from source.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), sudo (3), apt (2), find (1), wget (1)
> **Prerequisites:** install (7), configure (3)
> **Exercise Files:** source code (7)
> **Code Keywords:** let (3), this. (1), switch (1), case, (1)
> **Env Vars:** url (1), ctrl (1)
> **UI Navigation:** navigate to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Versions:** 7.40 (1)

#### Understanding shared libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=0)** - [Narrator] Most software relies on collections of functions and tools available in shared libraries or shared objects rather than having all of the libraries built into the executable.
>
> **[0:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=10)** This model of using shared libraries helps to reduce the size of programs that require basic functionality.
>
> **[0:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=16)** Tools don't have to have all of the basic operations built into one file when they can refer to an already installed object or library somewhere in a predictable place on the system.
>
> **[0:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=26)** Huge pieces of code can be referenced centrally, rather than duplicated, triplicated, and more in every single tool that needs some functionality or other though it means that those shared libraries need to be available on the system or the tools which rely on them won't work.
>
> **[0:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=42)** We can take a look at what shared libraries a tool relies on with the ldd command.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=48)** And that shows us that there is dependencies even for something seemingly basic like ls.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=53)** I'll write ldd /bin/ls.
>
> **[0:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=57)** Here we can see the libraries or shared objects, .so, that a program needs and the path where it's expecting to find the library that it needs.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=68)** This path here, in the /lib/x86_64-linux-gnu folder is often actually a symbolic link to a different file.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=76)** We can take a look at that with ls -l and the path to the file.
>
> **[1:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=84)** In this case, we'll look at libc.so.6.
>
> **[1:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=89)** And in fact, we can see that it's a symbolic link to libc-2.23.so.
>
> **[1:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=94)** So this program, ls, knows that it needs libc, the C library.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=99)** This allows the system to have updated versions of files installed but also allows software to not have to worry about what version specifically is being used.
>
> **[1:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=107)** These links are maintained by ldconfig which keeps track of the associations and can be used to update them or create new links to new so's.
>
> **[1:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=116)** The cache of associations that ldconfig keeps can be viewed with ldconfig -p.
>
> **[2:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=125)** If a program requests a shared object, ld, the linker, goes to the cache to see where those files are kept.
>
> **[2:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=131)** Typically, programs and processes that install new or updated objects will update the cache if the objects change.
>
> **[2:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=139)** And if you have a program that needs its own shared libraries, you can add it to the cache too.
>
> **[2:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=144)** You can point the dynamic linker to that path by adding it to the LD_LIBRARY_PATH environment variable though this is only recommended for local or short-term usage.
>
> **[2:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=153)** You can also add paths to objects in the /etc/ld.so.conf file.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=158)** And after you do, run ldconfig to add them to the cache.
>
> **[2:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/understanding-shared-libraries?u=76281980&t=162)** Generally speaking, as a system administrator, you won't need to deal too closely with various shared objects unless you're working with custom software builds or doing some development work alongside your administrator duties, but it's helpful to know what shared objects are and how they work in case you need to make a change or troubleshoot an error relating to them.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (4), find (1), make (1)
> **Code Keywords:** require (1), case, (1)
> **Env Vars:** ld_library_path (1)
> **Versions:** 2.23 (1)
> **Definitions:** means that (1)
> **Best Practices:** recommended (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** install (1)

#### Explore AppArmor
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=0)** - [Instructor] AppArmor is a kernel module using the Linux security module's interface, it provides mandatory access control to be added to programs, determining which specific file paths and resources it can or cannot use.
>
> **[0:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=12)** Programs and services often have their own user in order to control what access they have to the system, to some degree; but many run as root and, as such, have access to anything on the system.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=22)** Rather than using user level security to control what programs can do, AppArmor allows us to specify exactly what a program can and cannot access with a much higher degree of precision.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=34)** We can see what's going on with AppArmor with the AppArmor status command.
>
> **[0:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=42)** Specific settings for individual programs are called profiles, and I can see that 24 profiles are loaded on my system and 24 profiles are in enforce mode.
>
> **[0:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=52)** Enforce mode applies the policy to the process, preventing access where it needs to.
>
> **[0:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=57)** Another option, complain mode, doesn't enforce the policy.
>
> **[1:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=61)** It allows a process to do what it wants, but AppArmor logs what would be violations of the policy for later review.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=68)** The profiles here are files that specify what an application can do; and, if a process that's controlled by a profile is running, we see it down here and whether it's in enforce or complain mode.
>
> **[1:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=80)** These profiles are stored in the etc/apparmor.d folder and are named for the path to the executable.
>
> **[1:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=87)** Let's take a look at what's already defined here on the system with ls-l/etc/apparmor.d.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=96)** The files here, as I mentioned, are named with the path to the file that they apply to, replacing slashes with periods.
>
> **[1:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=103)** So the profile, the control syslogd, is named usr.sbin.rsyslogd.
>
> **[1:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=110)** Let's take a look at the profile for rsyslogd with cat/etc/apparmor.d/usr.sbin.rsyslogd.
>
> **[2:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=124)** I'll scroll up to the top of the file here.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=128)** There are various directives that can be used in a profile to determine what capabilities a program can make use of.
>
> **[2:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=133)** Generally, these are network, capability, and path.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=137)** There are also abstractions which can be thought of as libraries of common access rules for allowing software access to something other than its own files.
>
> **[2:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=146)** For example, rsyslogd is allowed to access the name service.
>
> **[2:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=150)** Below that is a block of capabilities that we're allowing rsyslogd to have, including setuid and setgid.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=158)** Further down, we see a list of files that rsyslogd is allowed to, in this case, read, its own configuration and some other files; and we also see that the var/log folder has read write access, R and W, which make sense because the system logger needs to write to the log folder.
>
> **[2:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=179)** There's a package available called AppArmor utils that gives us a few more tools for dealing with AppArmor profiles.
>
> **[3:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=185)** I'll install that with sudo apt install apparmor-utils.
>
> **[3:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=196)** And we can see those tools by writing ls-l/usr/sbin/aa-*.
>
> **[3:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=205)** AA stands for AppArmor, including AA status, which is what AppArmor status that we've been using is symlinked to.
>
> **[3:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=212)** AA complain and AA enforce followed by a profile name switch the mode that a profile's running in; and AA disable will disable a given profile.
>
> **[3:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-apparmor?u=76281980&t=222)** Designing and writing an AppArmor profile is beyond the scope of this course, but it's helpful to know where the policies are and how to switch their modes for troubleshooting.

> [!info]- Semantic Content
>
> **Code Keywords:** module (2), let (2), switch (2), interface (1), case, (1)
> **CLI Commands:** ls (2), make (2), cat (1), sudo (1), apt (1)
> **Definitions:** is a  (2), stands for (1)
> **Prerequisites:** install (2)
> **UI Navigation:** scroll up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Resources and Reports

> [↑ Back to Table of Contents](#table-of-contents)

#### Examine resource utilization
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=0)** - [Narrator] Every computer has a limited amount of processing power, memory and storage space.
>
> **[0:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=5)** While we can sometimes increase these resources, it's important to be able to keep an eye on how they're being used and to break down what process on a system is consuming how much of each.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=15)** For that, we can use the top tool.
>
> **[0:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=18)** Top shows a live breakdown of each process and how much RAM, processing power and other aspects of the system's resources are being used.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=27)** You can sort the view in a few ways which makes it easy to get an up-to-date view of current usage.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=34)** Let's take a look at top in a little more depth.
>
> **[0:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=36)** I'll type top and we can see the basic display here.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=40)** Here at the top of the display is the name of the application and the current system time.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=46)** I can see how long the system has been running, in my case 10 minutes, and how many users are logged in.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=53)** Right now, there's just one, just me.
>
> **[0:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=55)** After that is the load average, representing how much work the system's processors have to do versus their ability to get it done.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=63)** The numbers are based on 1.00 being 100% of one processor core.
>
> **[1:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=69)** 0.50 means one core is at half capacity and 2.00 means either one core has twice as much work as it can handle or two cores are right at their full capacity.
>
> **[1:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=81)** It's important to know how many processor cores your system has for this number to have meaning.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=86)** The three different numbers represent the load over the past minute, five minutes and 15 minutes which lets you peek into the past a little bit and see if a spike is new or if it's been happening for a little while.
>
> **[1:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=98)** The second line gives us a summary of the tasks or processes that are running and if any are considered a zombie process, processes that have finished running but haven't been removed from the process table yet.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=109)** On the third line, we see processor usage broken down into what user processes are consuming, what system processes are consuming, what NIST processes are consuming, that is processes that have had their priority changed, and how much of the processor's time is spent idling.
>
> **[2:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=126)** We also see what amount of processor resources are being used on waiting for input/output operations, often that'll be from a slow disk and what percentage of the processor resources are being used for hardware and software interrupts.
>
> **[2:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=139)** And if you're using a virtual machine, what percentage of the processor time is being used or stolen by the hypervisor.
>
> **[2:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=146)** The following line shows in kibibytes.
>
> **[2:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=149)** How much memory is used or available?
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=151)** We have the total available, in this case four gigabytes.
>
> **[2:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=155)** What amount is currently free, what specific amount is used by processes and what amount is used as a buffer or cache for the disk.
>
> **[2:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=164)** And the last line in the header here shows the swap space, the area on disk where the contents of the RAM that aren't currently being used get saved or paged out to make room for other things.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=175)** This system isn't doing too much so it hasn't used any of the swap space, but it shows the total available, of that how much is free, and what the used amount is.
>
> **[3:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=185)** The last column shows how much memory is still available which would be used before swap is used and we're not even close to using swap space yet here.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=193)** The table view down here lets us sort the list of processes in different ways.
>
> **[3:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=198)** PID here is the process ID, the number that gets assigned to a process when it starts and then goes away when the process exits and is removed from the process table.
>
> **[3:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=208)** This is a shorthand for talking to the process as we'll see later with the PS command and some others.
>
> **[3:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=213)** The second column shows the user responsible for the process.
>
> **[3:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=217)** System processes will run as root and you may see other users for specific processes here.
>
> **[3:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=222)** Next is priority, the relative importance of the process or an indication of how likely a process is to get access to processor resources in competition with others.
>
> **[3:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=233)** Priorities start at zero and go up from there, with lower numbers meaning a higher priority.
>
> **[3:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=239)** The next column, NI, represents NISTness of a process or a modifier on the real priority that can be set by the user.
>
> **[4:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=247)** This scale goes from 19 to negative 20.
>
> **[4:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=250)** And here, the more negative a number is, the higher priority it confers on a process because adding the NISTness value to the regular priority moves it closer to zero if it's a negative number and further away from zero if it's positive.
>
> **[4:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=264)** We'll see how to change the process priority in a little bit.
>
> **[4:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=268)** The next columns, VIRT, RES and SHR have to do with how much virtual memory a process is using.
>
> **[4:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=274)** RES is how much physical memory a process is taking and SHR is how much shared memory it's taking.
>
> **[4:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=280)** The S column shows whether a process is sleeping, indicated with an S or running indicated with an R.
>
> **[4:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=287)** %MEM shows what percentage of the processor's resources a process is currently using and %MEM shows the percentage of memory each process is using.
>
> **[4:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=296)** TIME+ shows how much processor time a process has used since it started.
>
> **[5:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=301)** And then finally, at the end is the command that's running in the process.
>
> **[5:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=305)** Pressing the H key here will bring up a fairly spartan help menu that gives us a few tips on what keyboard commands are available here.
>
> **[5:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=313)** Depending on how you want to see the data, I encourage you to experiment with some of these.
>
> **[5:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=317)** But for now, we'll use X and Y to toggle highlights and the capital R command to toggle the sort order.
>
> **[5:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=324)** We'll also use the lowercase b command to toggle between bold and reverse coloring.
>
> **[5:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=329)** And we'll use less than and greater than to change the sort criteria.
>
> **[5:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=334)** I'll press Q to leave the help and let's toggle the highlight from bold which is pretty subtle here to inverted so we can see what's active a lot easier.
>
> **[5:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=342)** The lowercase b command does that.
>
> **[5:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=345)** The lines that are inverted here are active or running tasks.
>
> **[5:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=348)** And if we press the X key, we can see a highlight on the column that that information is sorted by.
>
> **[5:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=354)** The Y key toggles a highlight on running tasks.
>
> **[5:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=358)** I'll press Y and I'll press Y again.
>
> **[6:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=361)** We can use less than or greater than to sort these columns, moving right with greater than and left with less than.
>
> **[6:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=374)** I can change the sort order of these columns with capital R.
>
> **[6:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=378)** And when I'm done using top, I can quit with the Q key.
>
> **[6:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=383)** You can also explore what processes are using IO or input/output, transfer of data to the disk, with a program called iotop.
>
> **[6:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=391)** It's not installed by default, but you can install it easily from the Distro's Package Manager.
>
> **[6:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=396)** And you can get some insight about how much network activity is going on with iftop, bmon, nethogs or a variety of other tools from the repositories.
>
> **[6:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=405)** You can manage the quotas that groups or users have available to them in order to limit the access to resources like the number of active processes or logins or how much data they can use by editing the etc/security/limits.conf file.
>
> **[6:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=419)** Top gives us a good overview of how processor and memory resources are being used on the system.
>
> **[7:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=425)** Once you become familiar with it, it'll become an invaluable tool for keeping an eye on activity and a suite of other tools are able to give you a look at how other resources like disk and the network are being used.
>
> **[7:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/examine-resource-utilization?u=76281980&t=436)** In combination, these tools give you the ability to track down resource-intensive processes if you need to.

> [!info]- Semantic Content
>
> **Env Vars:** ram (2), res (2), shr (2), mem (2), nist (1)
> **Code Keywords:** let (2), while. (1), finally, (1), default, (1)
> **UI Navigation:** toggle (4)
> **Versions:** 1.00 (1), 0.50 (1), 2.00 (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Working with processes
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=0)** - [Instructor] There's a handful of ways to control processes on your system.
>
> **[0:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=3)** And in this video, we'll take a look at how to change process priority, and how to find and end a running process.
>
> **[0:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=10)** Anything that happens on a Linux system, runs inside of a process.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=14)** So, being able to control how processes operate, gives you a fundamental level of control over the system.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=20)** When we run a command on the system, it starts up a process that the system keeps track of.
>
> **[0:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=25)** All processes consume resources, so being able to control them is essential.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=30)** Some processes, though, consume more resources than others.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=33)** And so, to make what we're doing when we manipulate processes here more obvious, I'll use a command called yes, which just repeatedly types the letter Y and hits enter.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=43)** It's intended to be used for scripts, but it's also very good at consuming resources.
>
> **[0:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=47)** The way we'll use this, is to type the yes command, and then redirect the output to /dev/null.
>
> **[0:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=54)** And then, we'll put it in the background with the ampersand character.
>
> **[0:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=59)** This will make your fans spin up after a while.
>
> **[1:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=61)** Because, eventually, we'll be using quite a lot of processing power.
>
> **[1:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=64)** I'll start up two separate instances of the yes command.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=67)** I've got one there, and then I'll type yes, redirected to /dev/null, and an ampersand, and there's my second process.
>
> **[1:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=75)** Normally, we'd see the output of the command here.
>
> **[1:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=77)** But, because we redirected the output to the null device, it's just sending that off into nothingness.
>
> **[1:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=83)** And the ampersand here, told the shell to send the process to the background, rather than running in the foreground.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=88)** So the shell helped us out a little bit, and gave us the process IDs of each command, in case we need to do anything with those processes later on.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=96)** If you'd like, you can make a note of them.
>
> **[1:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=97)** We can find them later, though, if we need to.
>
> **[1:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=100)** First, let's take a look at the resources that these are using with the top command.
>
> **[1:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=105)** And, because we're sorting by CPU, both of these processes are right up here at the top, taking as much processor time as they can.
>
> **[1:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=113)** They have equal priorities, both 20, and a niceness of zero.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=117)** So the system allows them to consume the same resources.
>
> **[2:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=120)** Let's sort the screen by process ID instead.
>
> **[2:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=123)** So, I don't lose these down the screen, if they stop taking up processor resources.
>
> **[2:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=127)** I'll open up another terminal window here.
>
> **[2:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=129)** I'll press F11 to move out of full screen, and I'll resize this window here a little bit.
>
> **[2:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=138)** And I'll put the other terminal down here.
>
> **[2:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=142)** Now, we'll be able to see in real time, how these processes respond to the changes that we make.
>
> **[2:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=147)** The command we'll use to change the niceness, and thus the priority of these processes, is called "renice", and it takes two arguments.
>
> **[2:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=155)** A niceness value to set, and the process ID to apply that new value to.
>
> **[2:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=160)** I'll change the niceness to five, which will slightly reduce the priority of this process, giving more processing time to other tasks.
>
> **[2:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=168)** So, I'll write sudo renice 5 2198.
>
> **[2:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=176)** And, see here, now this process is getting fewer resources.
>
> **[3:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=180)** And, I can see the number for the priority here increased.
>
> **[3:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=183)** Which means, it's further back in line, so to speak.
>
> **[3:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=186)** And, it's getting less time.
>
> **[3:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=188)** I can bring one of them up too, and see the opposite effect.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=191)** Let's set that one to renice -5 2198.
>
> **[3:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=199)** And see how that one's getting more of the processing resources now?
>
> **[3:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=203)** If you want to change the priority of more than one process, you can just add on the process IDs, one after another, to the renice command.
>
> **[3:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=210)** Or, you can use the -u option to change the niceness of all of the users processes at the same time.
>
> **[3:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=216)** Check out the man page for renice, for a couple of other options too.
>
> **[3:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=221)** I'll close this bottom window, and re-maximize my top window.
>
> **[3:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=225)** I'll press Q to end top.
>
> **[3:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=229)** Whereas top gives you a running view of the status of processes, the PS tool is more of a snapshot instead.
>
> **[3:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=235)** By itself, the ps command shows process information for everything that's running in the current terminal.
>
> **[4:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=241)** So, here in this terminal, I have my yes commands.
>
> **[4:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=244)** I have bash, which is running the terminal that we see.
>
> **[4:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=247)** And the ps command that we were running there.
>
> **[4:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=249)** I have the process ID here, in the first column, and the next column shows the terminal or console that a program is running in.
>
> **[4:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=258)** These are all sudo terminal here, for this shell session.
>
> **[4:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=261)** But with other modes, you might see tty something, for various consoles too.
>
> **[4:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=265)** The Time column shows the amount of processor time that a process has consumed since it started up.
>
> **[4:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=271)** And CMD, is the command that's running in the process.
>
> **[4:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=276)** There are a variety of output formats we can specify.
>
> **[4:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=278)** And one of the more useful ones to me, is lower case u.
>
> **[4:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=282)** What the man page calls a user-oriented format.
>
> **[4:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=287)** I'll type ps-u.
>
> **[4:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=290)** Here I can see the user name associated with the process.
>
> **[4:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=292)** Which, because we are looking just at my users' processes, they're all me.
>
> **[4:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=297)** This view shows the CPU and memory percentages, as well.
>
> **[5:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=300)** And virtual and resident memory sizes.
>
> **[5:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=303)** The console or terminal, like before.
>
> **[5:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=306)** And a status column with some fairly cryptic notations.
>
> **[5:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=309)** We can see what those are in the man page for ps.
>
> **[5:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=313)** Scrolling down a little bit, to Process State Codes.
>
> **[5:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=319)** Capital S means the process is sleeping, it's not actively doing anything.
>
> **[5:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=324)** And lower case s, means that the process is, what's called, a session leader.
>
> **[5:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=329)** A session leader has some other processes running underneath it.
>
> **[5:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=332)** And when it's ended, those processes end too.
>
> **[5:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=335)** R means that a process is currently running.
>
> **[5:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=338)** Which makes sense that ps was running when the ps command was running, even though it's not any more.
>
> **[5:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=343)** Remember, ps is a snapshot.
>
> **[5:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=345)** And the plus in the status columns, means that the process is in the foreground process group.
>
> **[5:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=350)** Lower case I means the process is multi-threaded.
>
> **[5:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=354)** The command ps f, shows us a tree of processes, rather than a flat list.
>
> **[6:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=360)** So we can see which processes are running underneath which other processes.
>
> **[6:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=365)** Here's bash and my two yes commands and the ps f command.
>
> **[6:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=369)** Remember, the small s in the status column, is a session leader.
>
> **[6:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=374)** And, these other processes, are running underneath the leader.
>
> **[6:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=378)** Often though, we want to see processes running across the whole system.
>
> **[6:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=382)** Not just those started by the current user.
>
> **[6:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=385)** For that, we have the ps -e command.
>
> **[6:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=389)** That shows every process, but there's not a lot of information.
>
> **[6:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=392)** So, let's add -f with ps -ef, and we'll get some more detail.
>
> **[6:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=398)** That's a lot.
>
> **[6:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=399)** And there are some new columns here.
>
> **[6:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=401)** So, let's pipe the output of this, through head to take a look at the top few lines.
>
> **[6:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=408)** We have the user ID that started the process, and then the process ID here.
>
> **[6:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=412)** And next to that, is the parent process ID, the process the kicked off a subsequent process.
>
> **[6:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=418)** And C here is an integer representation of CPU time used the by the process.
>
> **[7:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=423)** STIME is the start time, when the process started.
>
> **[7:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=427)** The output of these commands, can get fairly long.
>
> **[7:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=429)** So, we can start to use some other tools to find out what we're after.
>
> **[7:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=433)** A common use of ps, is to see whether a tool or command is running, and to get information about it, so we can work with it.
>
> **[7:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=440)** Let's look to see if yes is running here, by piping the output through grep.
>
> **[7:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=444)** I'll write ps -ef pipe to grep for yes.
>
> **[7:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=450)** And here, I have two.
>
> **[7:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=451)** I have the actual command that's running, which is what I want.
>
> **[7:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=455)** And then I have the command that I wrote, to see if that command is running.
>
> **[7:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=458)** So, we can ignore that one, but don't worry about it, it's not running anymore anyway.
>
> **[7:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=463)** We can use ps with the process ID, to get some more information too, if we wanted to go about it that way.
>
> **[7:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=471)** And, if I'm ready to end this process, so it's not running any more, I can use the kill command to terminate it.
>
> **[7:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=477)** With kill and the process ID by itself, I can end the process.
>
> **[8:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=481)** I could also pass more than one ID to kill, if I wanted to get rid of many processes at the same time.
>
> **[8:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=487)** Kill has some other options too, if you take some time to explore the man page.
>
> **[8:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=491)** Process control is an important thing to be aware of, as you're running a system.
>
> **[8:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=495)** So take some time to experiment with it.
>
> **[8:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/working-with-processes?u=76281980&t=497)** And be sure to check out the manual pages for ps, to find out more about what it can do.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (4), sudo (2), grep (2)
> **Code Keywords:** let (6), this, (2), while. (1), pass (1)
> **Tools:** terminal (8), bash (2)
> **Definitions:** means that (3), is a  (2), is an  (2), is called (1)
> **Env Vars:** cpu (3), f11 (1), cmd (1), stime (1)
> **Documentation:** man page (4)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Explore resource bottlenecks
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=0)** - [Instructor] If a system is becoming slow to respond to requests, either on the user interface side or though apps and services that it's providing, it may be time to look for performance bottlenecks.
>
> **[0:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=11)** The top utility is a good place to look to determine if your system is resource constrained because it shows both the general system load indicator, showing how much work the processors are doing, and it also gives you some insight into whether your storage is causing slowdowns through the I/O wait percentage at the top of the display.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=27)** The system load is indicated as 1.00 being one processor core at full capacity.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=33)** So 0.50 means half of one processor's capability is being used.
>
> **[0:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=38)** 2.00 on a single core machine means that the processor is being asked to do about twice as much work as it's able to keep up with.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=46)** But on a multi core machine, say a four core machine, 2.00 means the system is running at about half capacity so to read the system load correctly, you'll need to know how many cores your system has.
>
> **[0:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=58)** System load often spikes up over 1.00 per core during normal operations, but if it's consistently close to the full capacity or if it's consistently over full capacity, it may be time to look at either adding more processor cores if your hardware allows or adding them through a VM hypervisor or it may be time to add more systems to spread tasks across more computers.
>
> **[1:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=79)** I/O wait represents how much of the processor's time is spent waiting for input and output to happen which can often indicate a slow disk, which in turn can indicate either old hardware or a device that's having problems.
>
> **[1:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=92)** If the processor needs to write or read information and it's waiting for a slow disk, tasks can pile up and the processor can't get to them while it's waiting.
>
> **[1:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=100)** To try to avoid this condition, the operating system reserves part of the RAM and many drives have some flash memory or cache set aside to handle some disk operations in the immediate term and then complete whatever operation needs to happen later on to keep the operating system performant.
>
> **[1:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=116)** But caches are small and if many files or large files are involved, the cache can't keep up.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=122)** You can test the speed of your hard disk with the hdparm command to get an idea of what the throughput of the device is.
>
> **[2:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=129)** Network operations can also cause I/O wait if the network is slow or if a system providing services across the network is slow, like you might find in an old or overburdened file server or a busy network.
>
> **[2:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=141)** Generally speaking, if your system relies on network storage and your network is at all busy, it should have a dedicated network link for that service either physically or using network architecture settings.
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=151)** Top also shows us how much of the system's swap is being used.
>
> **[2:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=155)** Swap is a space on disk that's used to temporarily store things that were in RAM but needed to be moved to make room for something else.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=163)** A lot of swapping activity indicates that your system may need more memory.
>
> **[2:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=167)** For example, if two apps are fighting it out over which one gets to take up enough memory to operate properly, the swap usage could be pretty high.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=175)** You'd be able to tell which apps are RAM heavy by looking at what percentage of the available memory they're using over time.
>
> **[3:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=181)** Swapping indicates slowdowns because disk storage, even SSDs, are significantly slower than RAM.
>
> **[3:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=187)** So the process of writing the contents of RAM to the disk is slow and reading it back into memory is slow.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=193)** Resolving performance issues on a system could be as straightforward as adding more RAM or upgrading to an SSD instead of a traditional magnetic hard drive for swap or other storage.
>
> **[3:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=203)** Or you could even add a RAM disk if your application can use extremely fast but volitile storage.
>
> **[3:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=209)** But sometimes you'll run up against either the physical limits of the computer you're using or the limits of current technology.
>
> **[3:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=215)** For example, if you've been building an app on one machine hosting a web server, database, asset files, logging and so on all on the same system, it may be a good idea to start breaking those functions up so they can scale as your platform grows.
>
> **[3:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=229)** Depending on how your app works, you could plan for vertical scaling, adding more resources to a given machine, or break up your application in such a way that you can use horizontal scaling or adding more machines to do the same tasks.
>
> **[4:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=241)** Resolving bottlenecks and instability isn't always as easy as just throwing hardware at a problem, though it can be.
>
> **[4:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-resource-bottlenecks?u=76281980&t=249)** In an era of web scale systems, it's important to keep architecture, not just resources, in mind.

> [!info]- Semantic Content
>
> **Env Vars:** ram (7), ssd (1)
> **Versions:** 1.00 (2), 2.00 (2), 0.50 (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** interface (1), else. (1)
> **Analogies:** for example (2)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Explore system hardware
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=0)** - [Teacher] It's a good idea to test out hardware before you start to rely on it.
>
> **[0:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=4)** And if your system starts to behave oddly, it could be a sign that the integrity of a piece of hardware is starting to break down.
>
> **[0:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=10)** In this video, we'll take a look at a few ways of testing out memory and disk integrity and performance.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=15)** And then we'll explore how to check whether hardware is available on the system.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=20)** First, let's take a look at testing the system's memory with a built-in memory tester called MemTest86+.
>
> **[0:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=26)** To start it up, I can reboot my system here.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=33)** And if the GRUB loader doesn't show up, I can hold Shift to force it to appear.
>
> **[0:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=38)** And then I'll select the memtest option here.
>
> **[0:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=41)** memtest is a separate boot image from the kernel, so your system will be offline while this test is going on.
>
> **[0:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=47)** Here I see some statistics about my cache and memory, which is a helpful reminder of just how much faster the processor cache is than the system memory.
>
> **[0:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=55)** And over on the right, I have some processor information, and then the progress and status information about the test.
>
> **[1:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=61)** This top line here, labeled Pass, is how far through the first pass or iteration of the whole memory test we are.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=68)** Test percent here shows how far through a particular test we are, and the next line shows us which particular test is being run.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=76)** Then we see a range of what memory is being worked on, and the pattern that's being used for the test in hexadecimal.
>
> **[1:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=83)** And off on the right is the elapsed time.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=86)** The next sections show similar statistics about the cores and the RAM, and we see a count of tests that have passed and any errors.
>
> **[1:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=94)** More information will show up here in the lower pane if there is specific information for us to know about.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=99)** For now, I'll press Escape to end the test.
>
> **[1:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=101)** Though if you're putting new RAM in the system, or if your system is acting strangely, it's a good idea to let this test run a few times to check your memory.
>
> **[1:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=111)** Back here in the system, let's take a look at some hard drive tests.
>
> **[1:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=115)** It's a good idea to keep an eye on file system integrity on your systems.
>
> **[1:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=119)** It's generally not recommended to check the file system live, and for that reason, the system will check it every so often before the file system is mounted and booted.
>
> **[2:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=127)** In the interim, we can use the tune2fs command to get some information about what the health of the file system is.
>
> **[2:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=134)** I'll write sudo tune2fs -l /dev/sda1, the first partition on my primary disk.
>
> **[2:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=145)** And up here, near the top of the output, I can see that the state of my file system is clean.
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=151)** If the system knew that the file system was not okay, and some fixes needed to happen, we'd see not clean.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=158)** And here I can see there are options to check every so often, be it in some number of boots or some interval of time.
>
> **[2:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=164)** Mine are set to -1 and 0, so they won't do anything, but I could change that with the options
>
> **[2:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=170)** - c for count or -i for interval.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=175)** We can also take a look at the disk hardware and see if it's reporting any errors.
>
> **[2:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=179)** Many hard drive manufacturers support a system called SMART, which monitors disk hardware and records a wide range of errors, ranging from bad blocks to temperature problems.
>
> **[3:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=189)** While many hard drives support monitoring features, not all support everything, and some disks, especially USB disks, SSDs, and virtual machine disks, don't support SMART at all, but if your disks do, it's a nice thing to be able to look at.
>
> **[3:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=203)** The tool that we'll use for that is called smartctl, and it's available in the package called smartmontools, so let's install that now.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=211)** I'll write sudo apt install smartmontools.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=220)** And now I can use the smartctl application to take a look at the options available for my disk here.
>
> **[3:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=225)** I'm working in a virtual machine, so the disk won't have too much to record because it's not real.
>
> **[3:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=230)** But if you have a physical disk, chances are you'll see something much more interesting.
>
> **[3:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=235)** I'll write sudo smartctl -a /dev/sda1.
>
> **[4:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=242)** Here it says that my device doesn't support SMART.
>
> **[4:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=245)** SMART support comes from the disk controller hardware, so it won't work on network drives or anything like that.
>
> **[4:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=252)** It can be useful, but support is sometimes hit or miss, and some of the errors that SMART reports aren't necessarily as big of a deal as they sound.
>
> **[4:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=260)** So it's good to look at, search about, and decide which parameters of your disks are interesting to keep an eye on.
>
> **[4:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=267)** Google has a really interesting research paper that goes over their observations about SMART information and disk failure, if you're curious to read about that sort of thing.
>
> **[4:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=276)** It can also be interesting to look at the speed of disks in your system.
>
> **[4:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=280)** We can do that with the hdparm command, which, among other things, can test the speed of reading information from the cache and from the disk.
>
> **[4:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=288)** It can also be used to do some things to a disk that you really shouldn't do, so before you use hdparm for anything else, definitely read the man page.
>
> **[4:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=296)** To test the cache and disk read times, I'll write sudo hdparm -tT /dev/sda1.
>
> **[5:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=307)** The small t tells hdparm to test the speed of reading from the disk, and the capital T tells hdparm to test the speed of reading from the disk's cache.
>
> **[5:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=316)** These can vary if the disk is otherwise busy, so running it a few times may give you a better picture of true performance.
>
> **[5:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=325)** My cache is reasonably fast, and my disk read is pretty good at 500 megabytes per second.
>
> **[5:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=331)** We don't have as direct ways of testing the function of the processors in general, but we can take a look at the processor information with lscpu.
>
> **[5:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=341)** This shows pretty much anything you might be curious about regarding the processor.
>
> **[5:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=345)** We can also check out lshw using sudo to list all of the hardware that the system knows about.
>
> **[5:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=355)** That's a lot of information, and you can dig into it more with some options that are available on the man pages.
>
> **[6:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-hardware?u=76281980&t=361)** Or if you want to explore by bus, check out lsusb and lspci to take a look at the devices on each of those buses.

> [!info]- Semantic Content
>
> **Env Vars:** smart (6), ram (2), grub (1), usb (1)
> **Code Keywords:** let (4), pass (2), else, (1), function (1)
> **CLI Commands:** sudo (5), apt (1)
> **Definitions:** is a  (2), is called (1)
> **Prerequisites:** install (2)
> **Speakers:** - [teacher] (1), - c (1)
> **Code Identifiers:** tt (1)
> **Documentation:** man page (1)

#### Upgrade or add hardware
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=0)** - [Instructor] Sometimes, you need to upgrade hardware to provide more resources for a system.
>
> **[0:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=5)** Physical servers sometimes limit our ability to add new hardware and while we can often add more storage to a physical server, and sometimes we can add more RAM, it's difficult to add more process power for example.
>
> **[0:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=16)** Sometimes, adding RAM is impractical if we're out of slots on the board.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=20)** Small virtual machines are a lot more flexible in this regard, though if you're running a VM on a limited resource machine, like a laptop, there's no much you can do about hardware resources outside of giving the VM more systems resources.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=33)** It can't expand beyond the physical limitations of the system.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=37)** If you're using a machine with a lot of resources though, usually you can expand the VM's resources to allow more RAM, processor cores or storage by changing those settings in the hypervisor's configuration area up to whatever the maximum available to you on that host machine is.
>
> **[0:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=51)** In any case though, you usually need to power down the machine you're upgrading because the operating system doesn't know how to deal with having more memory or processors added while it's running.
>
> **[1:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=61)** Unless you're mounting a separate disc for storage, trying to modify the file system while the system is running, isn't the best idea.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=68)** And of course, on a physical machine, we don't want to plug RAM or processors in while the board is powered on because it's unsafe and it can cause component damage.
>
> **[1:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=77)** We may also need to add other hardware to add functionality like a webcam or microphone or wireless networking.
>
> **[1:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=83)** We may also need to add other hardware, to add other functionality like a webcam or a microphone or wireless networking.
>
> **[1:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=90)** When you're working with hardware like this, it can be a good idea to check and see if it's supported by the kernel at the outset.
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=95)** There's a lot of native support for hardware built in nowadays so you can save yourself some troubleshooting and investigation just by seeing if there's a solution to your hardware needs that works out of the box.
>
> **[1:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=106)** Usually, searching on the web for the hardware model number and the term Linux will give you a quick answer.
>
> **[1:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=112)** If the hardware isn't directly supported sometimes, you'll need to install a driver to give the system the software and tools it needs to be able to communicate with your new hardware.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=122)** When you connect hardware to the system, you can explore what the system recognizes it as with the lshw command, or if you want to look more specifically, with the lspci command for devices on the pci bus and the lspcu command for devices on USB.
>
> **[2:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=138)** Lspcu can tell you about the systems processors but we don't usually change those.
>
> **[2:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=143)** These tools can tell you more about the hardware that's attached to the system, including the vendor and model number, which is helpful in looking for support information and driver requirements.
>
> **[2:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=152)** Lspci-v for example shows me a list of my pci devices, including their type, hardware address, description and which driver and module they're using.
>
> **[2:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=164)** Lsusb-v does the same thing for usb, though the output is pretty long and we can see some of the other interesting information like what the power requirements and usage of various devices are.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=175)** You can explore what drivers are already loaded with the ls mod command, which is an alias for ksmod list.
>
> **[3:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=182)** Each of these drivers or modules here are loaded and associated with specific hardware on the right.
>
> **[3:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=188)** To find out more about the specific modules, you can use the modinfo command, with a module name, like this, modinfo e1000 and I can see that's my ethernet driver for example.
>
> **[3:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=202)** Depending on the hardware you need to install, there will be different requirements to fulfill.
>
> **[3:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=206)** Many devices like hard drives or memory don't need to any special action to be recognized by the system, but adding hard disks would require that you create or extend volumes onto them in order to take advantage of the space.
>
> **[3:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=218)** Adding network devices would similarly, need some configuration depending on whether the interface will have settings for different network and so on.
>
> **[3:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=227)** Other devices like scanners and printers may require drivers or third party software to get working.
>
> **[3:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/upgrade-or-add-hardware?u=76281980&t=232)** Being able to list the software connected to the system and to see which modules are loaded will give you a basis to work from as you identify what specific steps you need to take to get your new hardware working.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), module (2), require (2), type, (1), interface (1)
> **Env Vars:** ram (4), usb (1)
> **Analogies:** for example (3)
> **Prerequisites:** install (2), you'll need (1)
> **CLI Commands:** ls (1), find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Explore system log files
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=0)** - [Instructor] The system's activity is recorded or logged, in various files for various purposes.
>
> **[0:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=5)** Generally speaking, there's a system log and a kernel log; and some other applications and services have their own logs, as well.
>
> **[0:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=12)** In this video, we'll take a look at a few of the general purpose system logs.
>
> **[0:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=16)** System logs are stored in var/log.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=20)** And here on Ubuntu, the system log is very cleverly named syslog.
>
> **[0:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=25)** Let's take a look at that one first.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=27)** I could use cat to take a look through the file, but these tend to get long, so let's use less instead.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=33)** I'll write less syslog.
>
> **[0:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=36)** In this interface, we can scroll up and down, and search for text too; which is helpful if we're looking for something in particular.
>
> **[0:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=45)** I'd recommend taking a minute or so just to explore this file, and get a sense of what yours contains.
>
> **[0:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=50)** The log will be different on every system, though it will have some common themes and types of messages.
>
> **[0:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=56)** Every line has a specific format, starting with the date and time that an entry happened in the log; that is when some process wrote information into the log.
>
> **[1:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=64)** After that is the host name where the entry came from.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=67)** Mine here are all the same, the host name of my machine.
>
> **[1:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=70)** But we have this field here because the system logger can be set up to accept logs from other machines too.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=76)** And we need a way to tell those entries apart from each other and our own.
>
> **[1:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=80)** After that is the name of the process that wrote to the log and it's process ID.
>
> **[1:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=84)** This is helpful when we have many processes of the same software running, as we might in a server environment or so on.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=91)** Then after the colon, there's the message that the software sent to the log.
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=95)** They'll often wrap, but you can zoom out if you want to make them fit on your screen.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=99)** The format of what each process writes to the log, varies with what kind of information it logs, and how developers or the community need to use that information.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=109)** Logs tend to get long, so if you're looking for specific information, it's helpful to use some other tools to help narrow down what you have to look at.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=117)** Grep is handy for this, especially if we're looking at simple strings; like process names or IDs.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=122)** Let's isolate the entries made by Network Manager, with grep NetworkManager syslog | less.
>
> **[2:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=133)** That's much less information all consolidated together.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=137)** Because software constantly writes to them, the log files can get fairly large.
>
> **[2:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=141)** By default, every week the files are rotated and the system compresses an old log file and adds a number to it, and creates a new blank log file to receive input.
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=151)** This helps conserve disk space, especially because text files compress extremely well.
>
> **[2:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=155)** But it does mean that we don't have one long continuous file to search through.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=159)** Which is helpful trying to wrangle text, but it's not as helpful if we want to look at historical information; or see if a certain tool or application has been sending messages of interest longer ago than a week.
>
> **[2:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=170)** Our regular tools: cat and grep, won't work on these files though, because they're gzipped, as we can see here.
>
> **[2:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=176)** So instead, we can use zcat and zgrep, which are designed to work with these compressed text files.
>
> **[3:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=182)** I'll write zcat syslog.3.gz.
>
> **[3:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=188)** And there we go, just like a regular text file.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=191)** Other than starting with Z, these work pretty much the same as their normal counterparts.
>
> **[3:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=197)** You can control how often the logs rotate, and how many old logs to keep, by editing the etc logrotate.conf file.
>
> **[3:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=204)** Let's take a look at that with cat /etc/logrotate.conf.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=211)** Here towards the top of the file, I can see that I'm rotating logs weekly, and that I'm keeping four weeks worth of backlogs.
>
> **[3:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=219)** Another log that's interesting to look at, is the kernel log.
>
> **[3:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=223)** Which contains messages that the kernel shares about the startup process and hardware information.
>
> **[3:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=228)** This information appears in the syslog and in kern.log.
>
> **[3:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=231)** But it can also be useful to have the information separately as well.
>
> **[3:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=235)** To see the kernel log, we can use the dmesg command.
>
> **[3:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=239)** The output of dmesg shows the time since system startup, and a message from components of the system.
>
> **[4:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=245)** We can switch this output to a human-readable version with dmesg -H.
>
> **[4:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=251)** Which shows the time since the previous event in a different way.
>
> **[4:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=255)** Again, this information is available both in the kern.log file and in the syslog, but it can be helpful to have separate access to it as well.
>
> **[4:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=263)** That's really all there is to checking out logs.
>
> **[4:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=265)** If there's information there, you can find it.
>
> **[4:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/explore-system-log-files?u=76281980&t=267)** And in a more advanced set up, you can configure the system to send logs to another server for aggregation and monitoring if need be.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), var (1), interface (1), from. (1), this, (1)
> **CLI Commands:** cat (3), grep (3), make (1), find (1)
> **Prerequisites:** set up (2), configure (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Monitor security and audit the system
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=0)** - [Instructor] It's good practice to keep an eye on security events on your systems, and to conduct periodic audits.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=6)** In this video, we'll take a look at a few things to keep an eye on fairly regularly, to help protect your systems from security threats.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=13)** The first, and one of the most obvious places to watch, is the auth.log, or security log on the system.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=19)** It holds information sent by services having to do with a system's security.
>
> **[0:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=23)** SSH login attempts, users making use of sudo, and so on.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=28)** Here on Ubuntu, the log can be found in /var/log/auth.log.
>
> **[0:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=36)** Let's use sudo for something here, and see what that looks like in the log.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=40)** I'll just write sudo ls here, and type in my password, and then I'll take a look at the log again.
>
> **[0:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=49)** Right here is my user's usage of sudo.
>
> **[0:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=52)** It can see the username that called sudo, which terminal it was on, what the current working directory was where the sudo command was used, and the command that was invoked with sudo.
>
> **[1:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=66)** Any activity done with sudo will be logged here, but normal commands and commands that are run by the root user itself aren't logged here.
>
> **[1:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=74)** If a user switches to a root shell, you'll see that though.
>
> **[1:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=78)** As with the other logs, we can grep it and look through it with ls, and see what's been going on with security events.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=86)** You can also take a look at the list of users and groups on the system, to make sure that you recognize the entries there.
>
> **[1:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=92)** The file's ETC password and ETC group list these.
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=95)** Let's take a look at the password file, with cat /etc/passwd, and here's a list of a whole bunch of users.
>
> **[1:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=104)** I only have one human user on my system, but many of these other accounts were created by software for their own purposes.
>
> **[1:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=111)** Here I can see the short name of the user, the numeric user ID and numeric group ID, the human-friendly name, the path to the home folder, and here at the end, I can see what the user's shell is set to.
>
> **[2:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=126)** We can also take a look at the groups with cat /etc/group, and this is a list of groups that are defined on the system, and you can use the command last, to see the most recent few logins to the system.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=140)** There are some options for it in the manpages too, but the default output here shows that I've logged in a number of times over the past few days.
>
> **[2:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=147)** The most recent login is at the top.
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=151)** Consider setting up your machines to log to a central server, so that you can keep a record of activity that's separate from the machines.
>
> **[2:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=157)** If a machine is compromised, the logs may no longer be trustworthy, so having a separate copy of activity leading up to a compromise can be useful.
>
> **[2:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=166)** In order to make centralized logging easier to work with, consider setting up time synchronization on your clients, so they report events at a synchronized time, rather than on their own internal sense of time.
>
> **[2:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=177)** This is especially important on virtualized clients, which can have a shaky sense of time, especially if they sleep.
>
> **[3:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=183)** Configuration management tools can also be helpful, regardless of the size of your environment.
>
> **[3:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=188)** These tools can easily query information, or push new settings to machines all at once, reducing your overhead for monitoring or configuring various aspects of the systems.
>
> **[3:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=198)** Monitor the open ports on your systems, and investigate anything that looks suspicious.
>
> **[3:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=203)** You should be able to account for every opening in your system's security.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=207)** You may also consider implementing intrusion detection software.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=211)** Security isn't a set-and-forget kind of thing.
>
> **[3:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=214)** You'll need to make sure to update software regularly, and keep an eye out for reports of security updates.
>
> **[3:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=219)** You could also install software like fail2ban, to ensure that you catch attempted logins.
>
> **[3:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=224)** Be mindful of who you give access to your systems, and how they access them.
>
> **[3:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=229)** Be sure to scope access to shared resources as tightly as possible.
>
> **[3:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=233)** Don't just grant everyone access to everything because it's easier.
>
> **[3:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/monitor-security-and-audit-the-system?u=76281980&t=236)** As you design your system and extend its capabilities, be sure to keep an eye on how things should be operating.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (8), make (3), ls (2), cat (2), ssh (1)
> **Code Keywords:** let (2), var (1)
> **Env Vars:** etc (2), ssh (1)
> **Best Practices:** good practice (1), make sure to (1)
> **Prerequisites:** you'll need (1), install (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### System usage reporting
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=0)** - [Narrator] A Linux system gives us a lot of tools to show various aspects of system usage.
>
> **[0:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=5)** But, to run these tools manually across many clients, to piece together a patchwork of how the systems are operating, is time consuming and prone to errors.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=14)** So instead of running each tool manually, we can use basic scripting to do all of that work for us.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=19)** And give us a concise useful report of information that can be saved to a log, or sent to a monitoring system.
>
> **[0:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=26)** There are many tools that give us various system statistics.
>
> **[0:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=29)** So in this video I'll just use a few of them, and focus on how to get specific pieces of information into a format that we define.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=37)** Let's take a look at the free and df commands here, as examples.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=43)** These commands show us a lot of information.
>
> **[0:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=45)** But for a concise report, we only really want specific information.
>
> **[0:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=49)** So, let's pull out the free, and total memory, and the used, and available space on the primary partition.
>
> **[0:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=58)** To do that, we can use the AWK program.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=60)** AWK takes text as an input and gives us the ability to refer to certain fields that we want, with placeholders.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=67)** I can tell AWK to give me information that's at a certain position.
>
> **[1:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=70)** I'll write free -h to see a more human readable output of the memory.
>
> **[1:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=75)** And I can see here in the fourth column, on the second row, I have 2.3 Gigabytes of memory free.
>
> **[1:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=81)** So to get at that value, we need to tell AWK to give us the contents of the fourth column.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=86)** So I'll write free - h again, and pipe that into AWK.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=91)** And then I'll write an AWK program starting with an apostrophe, and a curly brace.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=96)** I'll use the print command and $4 as a placeholder for column four.
>
> **[1:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=103)** And the outputs are a little bit unexpected here.
>
> **[1:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=106)** We're seeing shared, even that appears to be in column five.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=109)** But there's nothing here in the first position, in row one.
>
> **[1:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=112)** So AWK is treating total as the first item in that row.
>
> **[1:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=116)** Otherwise though, we're seeing the values that we expect.
>
> **[1:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=119)** But we only want that middle one.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=122)** So, I'll recall my previous statement, and add in NR==2, to tell AWK to only return row two.
>
> **[2:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=131)** There we go.
>
> **[2:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=132)** And if I wanted to, I could move inside the print statement, add some double quotes, and add some commentary as well.
>
> **[2:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=141)** Let's say, available.
>
> **[2:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=143)** There we go.
>
> **[2:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=144)** Now let's get the total memory.
>
> **[2:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=146)** I'll recall the previous statement again.
>
> **[2:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=149)** And I can see here that the total value is in column two.
>
> **[2:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=153)** So I'll change the placeholder to reflect that.
>
> **[2:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=156)** Alright, we'll come back to those later.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=159)** Now let's take a look at the disc space availability.
>
> **[2:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=162)** I'll clear the screen, and then I'll write df -h.
>
> **[2:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=166)** Whereas the free command has a predictable output, and we can count lines, the df output could change order if different file systems are mounted.
>
> **[2:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=174)** So we can specify which file system we want, before we count lines.
>
> **[2:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=178)** So we know for sure that the line we're getting is the one we want.
>
> **[3:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=181)** I can write df -h /dev/sda1.
>
> **[3:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=187)** And here I can see that the file system I want is on line two.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=191)** So I'll recall my previous command, and move to the beginning of the line to change the command from free to df.
>
> **[3:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=200)** And I'll need to specify that file system, /dev/sda1.
>
> **[3:25](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=205)** And then I can see the used space is in column three.
>
> **[3:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=208)** So I'll need to change my placeholder from two to three.
>
> **[3:32](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=212)** And I'll change my comment as well, to used.
>
> **[3:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=217)** I'll recall the command again, and change my placeholder from three to four, in order to get the available space, as we see here.
>
> **[3:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=225)** And I'll change my comment.
>
> **[3:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=230)** Now let's put these together in a script.
>
> **[3:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=232)** I'll create a new script file with Nano.
>
> **[3:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=235)** And I'll call it summary.sh.
>
> **[4:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=240)** I'll add the shebang line to the top here, to tell the system where to find the shell interpreter.
>
> **[4:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=248)** Then on the next line, I'll start out a little header to describe what's up.
>
> **[4:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=252)** Alright, echo, system report for (uname -n).
>
> **[4:23](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=263)** This portion here is shell substitution in Bash, which runs the specified command and then returns the result of the command as text.
>
> **[4:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=270)** In this case, this will get the systems' host name.
>
> **[4:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=274)** I'll add a blank line, with echo and two quotes, and then I'll start adding in the information we figured out how to get before.
>
> **[4:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=281)** Alright, echo memory and the shell substitution, free -h pipe to AWK, NR==2(print $2 and our comment, total.
>
> **[5:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=303)** Then outside the substitution, a comma and another substitution, with free -h pipe to AWK, NR==2(print $4, and the comment available.
>
> **[5:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=321)** A closing curly brace, a closing single quote, and the closing parentheses.
>
> **[5:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=327)** And similarly for the disc space, I'll write echo disk: $df -h /dev/sda1, pipe to AWK NR==2(print $3 and the comment used.
>
> **[5:50](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=350)** Then a closing curly brace, a closing single quote, and the end of the substitution.
>
> **[5:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=355)** I'll add a comma and then start another substitution, with df -h /dev/sda1 pipe to AWK NR==2(print $4 and the comment available.
>
> **[6:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=375)** Then, another closing curly brace, a closing single quote, and that's the end of the substitution.
>
> **[6:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=381)** I'll save this with Control + O, and exit with Control + X.
>
> **[6:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=387)** Now let's run it with bash summary.sh.
>
> **[6:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=391)** And there's the information we're after, all in one convenient place.
>
> **[6:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=395)** You can repeat this sort of procedure with different commands to get different kinds of output.
>
> **[6:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=399)** And get different statistics that are interesting to you.
>
> **[6:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=402)** Then you can deploy it and run it manually, or automatically.
>
> **[6:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=405)** Or pipe the output through the logger, to write the information to the logs.
>
> **[6:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=412)** I'll do that here, and then I'll take a look at the log.
>
> **[6:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=415)** With cat /var/log/syslog.
>
> **[6:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=418)** And here, in my system log, is the output of my script.
>
> **[7:02](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=422)** Whatever metrics and information on your systems that you're interested in are available to you.
>
> **[7:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=426)** It's all about getting specific pieces of information where you want them.
>
> **[7:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/system-usage-reporting?u=76281980&t=430)** And then using that information to keep an eye on your machines.

> [!info]- Semantic Content
>
> **CLI Commands:** awk (12), find (1), cat (1)
> **Env Vars:** awk (12)
> **Code Keywords:** let (7), for ( (1), case, (1), var (1)
> **File Paths:** summary.sh (2)
> **Tools:** bash (2)
> **Versions:** 2.3 (1)
> **Speakers:** - [narrator] (1)


### 4. Automation and Scheduling

> [↑ Back to Table of Contents](#table-of-contents)

#### Schedule and verify tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=0)** - [Tutor] Many system maintenance and reporting tasks should be run regularly, or at predefined times when they're unlikely to bother users.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=7)** In order to schedule tasks on the Linux system, we can use Cron or Anacron.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=13)** Cron is a task scheduling system that's been part of Linux for a very long time.
>
> **[0:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=17)** Because it was developed during a time when systems were likely to be powered on at all times, it still makes this assumption, so tasks that are scheduled while a machine is asleep or powered off, are skipped.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=28)** Anacron on the other-hand, will run tasks that were scheduled during the time when a system was asleep or powered off.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=34)** Anacron is typically recommended for portable machines and desktop machines that sleep, and Cron is common on servers especially older ones or those in a mixed environment.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=43)** Let's take a look at Cron first and then we'll have a look at Anacron.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=48)** The tasks that are scheduled to run through Cron are listed in a file called a crontab or cron table.
>
> **[0:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=54)** And each user of a system can have one.
>
> **[0:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=56)** Though, for system maintenance tasks, we'll usually use root's crontab.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=60)** The format of a crontab entry can be a little cryptic at first, but really each line is just an expression of when to run a task, and the task to run.
>
> **[1:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=69)** There are five columns that describe when to run a task, and in each column we can put various conditions.
>
> **[1:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=75)** The columns are for the minute, hour, day of month, month, and day of the week.
>
> **[1:21](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=81)** In the columns, we can put an asterisk, which means any, that is, every available value for that column.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=88)** So a star in each column would mean a task would run every minute of every hour of every day of every month.
>
> **[1:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=94)** Or, we can specify a number, to set a specific aspect of when we want a task to run.
>
> **[1:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=100)** For example, here if we put a "1" in the minute column, and left the rest as asterisks a task would run at minute one of every hour: 12:01, 1:01, 2:01, and so on.
>
> **[1:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=111)** A "1" in the hour column with everything else being stars, would run for every minute of the hour of 1AM every day.
>
> **[1:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=118)** This is a 24 hour field here, so zero would be midnight, and 23 would be 11PM.
>
> **[2:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=123)** That's a bit of a strange way to run something, so we can also add another value in the minutes column, say a "0", which would run at hour one and minute zero, or once at 1AM, rather than every minute of the hour.
>
> **[2:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=135)** A "1" in the third column would run a task on the first day of every month, every minute, unless something specific were added to the other columns, say 15 and 9 to run it at 9:15 on the first day of the month.
>
> **[2:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=147)** And a "1" by itself in the month column, would run a task every minute of every hour in January, unless there were other values set.
>
> **[2:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=154)** A "1" in the last column, day of the week, would run every minute of every hour on Mondays.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=159)** Something that would run at 10PM on Saturdays would look like this... and something that runs every day at 3AM would look like this.
>
> **[2:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=167)** It can take some figuring to get things setup the way you want.
>
> **[2:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=171)** We can also put in more than one value per column, with commas.
>
> **[2:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=174)** And we can specify repetition with a slash.
>
> **[2:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=177)** So, let's run something every ten minutes, at the 9AM and 3PM hours, on weekdays.
>
> **[3:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=183)** What would that look like?
>
> **[3:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=185)** Let's start with the minutes.
>
> **[3:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=186)** For every ten minutes, we start with every minute, and repeat by every ten.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=191)** So * for every minute, /10.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=193)** To run during the 9AM and 3PM hours, in the hour column, we'll put 9,15 15 being 3PM on the 24 hour clock.
>
> **[3:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=202)** The next condition we have is weekdays.
>
> **[3:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=204)** We don't care what day of the month it is, so we'll put a *, and we don't care what month it is, so * again.
>
> **[3:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=210)** And then for the weekdays, we'll put 1-5 to represent days 1-5, Monday through Friday.
>
> **[3:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=216)** We could also put 1,2,3,4,5, but this takes up less space.
>
> **[3:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=222)** Let's take a look at adding an entry to the crontab here at the command line.
>
> **[3:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=226)** To do that, I'll use the crontab command.
>
> **[3:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=228)** Crontab with a -e option to edit.
>
> **[3:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=233)** I'll choose an editor, in this case Nano, and I'll scroll down to the bottom.
>
> **[3:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=238)** This is the user's crontab.
>
> **[4:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=240)** And to edit the root crontab, I could pass along -u for user, and root as the username.
>
> **[4:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=245)** But for now, we'll work with my user's crontab, just so we can see how a crontask operates in a short time, let's set up a task to run every minute that logs the date and time, and a message to the system log.
>
> **[4:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=258)** I'll write * * * * *, and then logger, a shell substitution with the command date, and the comment Hi!
>
> **[4:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=270)** I'll save this with Ctrl+O, and then exit with Ctrl+X.
>
> **[4:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=273)** Let's follow the syslog for awhile, and see these messages get written to the log.
>
> **[4:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=279)** I'll write tail -f /var/log/syslog.
>
> **[4:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=285)** And here I can already see, cron running the task, and the output that we're expecting.
>
> **[4:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=291)** I'll press Ctrl+C to stop following the log, and I'll go back into the crontab editor and comment that out, so it's not running all the time.
>
> **[5:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=301)** I'll just add a hash or pound sign in front of it.
>
> **[5:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=304)** It's important to note here, that when you're using the editor and you save the crontab, it'll check to see if the format is valid.
>
> **[5:10](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=310)** So if I put something that it doesn't know in here, say $ instead of # for a comment, and save and exit, I'll get an error about a bad minute.
>
> **[5:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=322)** Crontab doesn't recognize the first character in the line, and I'm prompted to try editing the file again.
>
> **[5:27](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=327)** I'll do that, and replace this with the correct character.
>
> **[5:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=331)** I'll save again, and exit.
>
> **[5:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=334)** When my edit succeeds, I'll see installing new crontab.
>
> **[5:38](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=338)** And then I know the entry was formatted correctly.
>
> **[5:41](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=341)** Tasks can be run by cron by placing them in the /etc/cron something folders as well.
>
> **[5:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=347)** I call them cron.something, because there is cron.daily, hourly, monthly, and weekly.
>
> **[5:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=353)** And these correspond to how frequently a task should run.
>
> **[5:56](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=356)** Scripts in these folders don't give you control over the hour, minute, and other specific time targets.
>
> **[6:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=361)** But the contents of the folder are run in alphabetical order, on the schedule that they suggest, hourly, daily, weekly, and so on.
>
> **[6:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=368)** We can see that in each one, is an entry called 0anacron, to help ensure that it sorts first, and the script runs anacron, another scheduler.
>
> **[6:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=377)** Anacron is useful for systems that aren't always powered on, because it will try to run tasks that were skipped whenever it comes back online.
>
> **[6:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=384)** Anacron is run by cron periodically, Anacron keeps a timestamp of when tasks run, and if they haven't run within the period of time that they're supposed to, when Anacron comes across them, it runs the tasks.
>
> **[6:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=395)** Tasks for Anacron are laid out in the /etc/anacrontab file, which we can take a look at here.
>
> **[6:44](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=404)** And we can see that this has a different syntax than cron.
>
> **[6:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=407)** The fields here represent a number of days representing the interval the task should be run, a number of minutes that represent a delay, a name or identifier, and a command to run.
>
> **[7:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=421)** These names can be specified after invoking Anacron, to run a specific one.
>
> **[7:06](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=426)** Each of these tasks already provided use the run-parts command, to run all of the scripts in the given folders.
>
> **[7:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=432)** And as each operation runs, it'll leave an entry in the logfile, so you can check there to see when it ran.
>
> **[7:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/schedule-and-verify-tasks?u=76281980&t=438)** Be sure to check out the man pages for Anacron and anacrontab for more details about what you can do with Anacron.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), pass (1), var (1)
> **Ports:** :01 (3), :15 (1)
> **Definitions:** is a  (2), is an  (1)
> **Prerequisites:** setup (1), set up (1)
> **Cross-References:** in the last (1)
> **Tools:** command line (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)

#### Configuration management and automation
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=0)** - [Narrator] Whether you're administering 10,000 systems or just a handful of them, configuration management tools give you the ability to predefine and periodically verify your desired configuration.
>
> **[0:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=11)** These tools such as Puppet, Salt, Chef and Ansible remove the need to log in to each machine you administer and make changes manually.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=19)** Using these tools, an administration can define configurations, restrictions and any other parameter that can be set locally by writing a definition or description in the text-based configuration language and deploy it to client machines.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=33)** Client machines can be instructed to change their network settings for example or be told to install new software.
>
> **[0:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=39)** They can be configured altogether to change the server that they're sending their logs to or to have their root password updated and information can be collected from machines easily in order to maintain an inventory and status log of machines under management.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=53)** This arrangement makes it easy to provision new and existing machines with the settings you need and makes it straightforward to have a way of describing your environment that can be backed up and replicated much more easily than the manual configurations of individual machines.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=67)** And configuration management solutions make it easier to return a system to a known defined state if need be.
>
> **[1:15](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=75)** Configuration management services generally use a client server model with configurations defined and stored on the server.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=82)** Some solutions run an agent process on the client machines which periodically check in with the server to receive updates.
>
> **[1:29](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=89)** Other solutions use an agentless model where the server initiates a connection and makes changes directly on the clients.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=96)** Configuration management isn't only for Linux machines either.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=99)** Many solutions also support Windows and Unix-like operating systems such as macOS.
>
> **[1:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=105)** Outside of defining a specific state, many of these tools allow administrators to run individual commands across many systems at the same time, allowing an increase in speed and accuracy as compared to repetitive manual interaction.
>
> **[1:59](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=119)** There are many configuration management tools out there and organizations will frequently decide on one versus another to use across their systems so it's helpful to know a little bit about the major tools and then specialize when you find out which tool you'll be using or you could go deep on one tool and use that expertise to guide your career.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=137)** But the most important idea about configuration management is the ability to define an entire system architecture in text.
>
> **[2:24](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=144)** This ability to define how systems work in configuration files rather than with manual interaction is known as IaC or infrastructure as code and it's a very popular approach to building and managing cloud architecture.
>
> **[2:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/configuration-management-and-automation?u=76281980&t=156)** Because the different solutions work differently, I won't go into the specifics of each here, but be sure to check out our courses on configuration management tools for more information.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), ansible (1), find (1)
> **Analogies:** such as (2), for example (1)
> **Code Identifiers:** macos (1)
> **Definitions:** known as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### 5. Recovery and Support

> [↑ Back to Table of Contents](#table-of-contents)

#### Consider a disaster recovery plan
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=0)** - [Instructor] We don't often want to think about a disaster impacting our systems.
>
> **[0:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=4)** But it's something a responsible administrator needs to consider.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=7)** A disaster isn't necessarily just a huge weather event or an earthquake that takes out power to your data center.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=14)** A disaster can be something as seemingly small as a server outage, or a bad configuration, or another system administrator maliciously deleting data, or even an outage of your internet service provider.
>
> **[0:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=26)** Disaster recovery is a whole topic unto itself and it's important to consider what it would take to get your services back up and running in a minimum amount of time.
>
> **[0:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=35)** Large enterprises often have whole data centers online and ready to go in the event that their primary systems have problems.
>
> **[0:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=42)** If you're working in a small business, having that kind of ready redundancy may be impractical.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=46)** But if your ability to keep your systems up and going is the lifeline of your business, there are a few levels of protection you should consider.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=53)** At the absolute minimum, you should have backups of all of your critical information - databases, applications, configurations, documents, and documentation should be backed up regularly.
>
> **[1:05](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=65)** And your backups should be tested regularly as well.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=68)** You certainly want to be sure that anything backed up can be restored.
>
> **[1:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=71)** Don't just trust that it'll work when it's needed.
>
> **[1:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=74)** You should also consider how your backups are stored.
>
> **[1:17](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=77)** Having your only backup on the same network means the backups are probably in the same physical place, and would be vulnerable to disasters that affect that space - a fire, a power outage, or even ransomware could compromise your backups and your live data at the same time.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=91)** For this reason, you should consider keeping a copy of your backups disconnected from the network and the internet, and in a separate physical location.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=99)** Some vendors offer this service, and will pickup and store backup tapes for you.
>
> **[1:43](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=103)** Many business will keep a local, online copy of backups and send offline backups to a remote storage facility to allow them to do minor recoveries quickly, and still have a safety layer of offsite backups, too.
>
> **[1:55](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=115)** Depending on the setup of your systems, and how critical they are to your business, you may not be able to tolerate a local hardware failure in the event of a disaster.
>
> **[2:04](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=124)** You may need to setup a remote site that has a mirror, or enough of a mirror, of your system to operate your services temporarily.
>
> **[2:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=131)** It can be a good practice to build a duplicate of your production and testing systems on a cloud provider, or in shared or dedicated data center space, in a different location or region.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=140)** The extent to which this secondary system is online, up-to-date, and ready to go, will be a business decision your leadership team will need to make.
>
> **[2:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=148)** In perfect world, we'd just have a big button on the wall that would instantly switch traffic, app hosting, data management, and everything else to a secondary system that's powered on, configured, and up-to-date with the latest data.
>
> **[2:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=160)** But for most organizations, that's impractical.
>
> **[2:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=162)** Disaster planning doesn't have to only involve setting up a remote instance of your platform.
>
> **[2:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=167)** Sometimes hardware dies, and it may be worth having a replacement server, or disks, or network switch, or so on, available in a box or already in the rack, so you don't have to wait to order a replacement when there's a failure.
>
> **[3:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=181)** You need to work with your organization's leadership team and stakeholders to define what the parameters of disaster recovery are for your business.
>
> **[3:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=188)** What front-end and back-end systems need to be available if the primary data center goes offline?
>
> **[3:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=194)** How often is customer data fed into the backup system?
>
> **[3:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=198)** Who has the authority to decide when to switch to and from the backup site?
>
> **[3:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=202)** And how often will you test the processes that switch your operations from your primary hardware to the backups?
>
> **[3:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=208)** And what are the criteria for success?
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=211)** All of your procedures, policies, and decisions should be documented clearly, and in a way that's accessible to the people who need access to them.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=220)** And you need to plan for interruptions in the ability of your team to execute that plan as well.
>
> **[3:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=225)** A major disaster may make it impossible for the database administrator to get to the backup site, or for the network administrator to make changes to the network policies that redirect traffic.
>
> **[3:54](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=234)** An ongoing disaster will require you to consider the welfare of your workers as well, who may be dealing with their own problems as a result of the disaster.
>
> **[4:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=243)** While you should know your system well enough to know how to rebuild it if the need arises, it's often recommended to seek out a professional in the area of data recovery to help you establish your policies.
>
> **[4:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/consider-a-disaster-recovery-plan?u=76281980&t=252)** They'll be able to look at your system through a different lens, and will likely be able to help identify issues you may not have thought of.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (4), require (1)
> **CLI Commands:** make (3)
> **Best Practices:** good practice (1), recommended (1)
> **Prerequisites:** setup (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Train team members and document changes
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=0)** - [Narrator] As you design, build and modify systems, you should keep detailed documentation both for your own purposes and to train anyone that may need to use them.
>
> **[0:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=9)** A new employee's success should not be dependent on how well they can discover surprise servers and define the purpose and configuration of various systems.
>
> **[0:18](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=18)** A clear, detailed and organized training plan with up-to-date documentation will help guarantee that your team is able to find the information they need when they need it in order to do their job correctly and efficiently.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=30)** If your system changes, for example if you roll out a new reporting tool or change the name servers on a certain set of machines, you need to be sure not only to document the change, but also to communicate it in a clear and timely way so your team are all in the same page metaphorically speaking.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=46)** Simply updating a Wiki page and hoping someone will find it when the need arises isn't enough.
>
> **[0:51](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=51)** Send an email, mention the change in your team meeting, and take the initiative to check in with your team to make sure they know about the change if they're directly affected by it.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=60)** Especially as an organization scales up for growth, it can seem like a burden to document procedures and changes to systems, but this inconvenience pays dividends later on when someone has the information they need to help resolve an outage or get a service running correctly.
>
> **[1:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=74)** You should document your systems and procedures in something accessible to your team such as a Wiki or internal blog.
>
> **[1:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=80)** At a certain point, you won't be able to remember all of the nuances of all of the changes on all of the systems that you've made over time and your team shouldn't have to request information from you or someone else every time they need to do something.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=93)** Hoarding knowledge is counterproductive.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=96)** It can feel good to be the go to person for information about the operating system or the network or how an application is configured and some IT workers can feel that hoarding knowledge is an effective means of job security, but that's a dangerous culture to support and it can lead to a stagnation in skills, knowledge and progress.
>
> **[1:53](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=113)** In the technology field, it's critical to always be learning.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=117)** System administration isn't something you learn once and that's it.
>
> **[2:01](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=121)** Developments in technology, security and other areas mean that any system administrator worth their salt is constantly learning new things and exploring how they might benefit users and the system.
>
> **[2:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=132)** Being able to learn and apply what you've learned will make you a more valuable employee, a more well-rounded manager and a more flexible and knowledgeable administrator.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=140)** If you're a manager, be sure to provide time, resources and most importantly, support for learning.
>
> **[2:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=146)** Every organization should be a learning organization so it's important to model this behavior for your team and share what you've learned with them.
>
> **[2:34](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=154)** Host discussions or other opportunities for your team to share what they've learned with you and with each other.
>
> **[2:40](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=160)** Many organizations set up lunchtime chats called luncheon learns where people discuss something they're working on or something they've learned.
>
> **[2:47](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=167)** Often, this can lead to an interesting conversation that might not have come up during standard workplace activity.
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=172)** Being a learning organization doesn't mean that you should adopt every new thing that anyone learns as soon as they learn it.
>
> **[2:58](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=178)** It's critical to have defined processes and policies, but how can you ever improve your efficiency and systems if you don't value exploration and learning?
>
> **[3:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=187)** A learning organization keeps its eyes on the horizon and supports employees who want to improve.
>
> **[3:12](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=192)** They look at mistakes and knowledge gaps as opportunities for improvement rather than problems to be ignored.
>
> **[3:19](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=199)** There are many resources available for extending your learning.
>
> **[3:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=202)** There are online tutorials and videos, some free, some paid.
>
> **[3:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=206)** There are local meetups for a huge array of technologies and conferences large and small that provide information and networking opportunities in cities across the globe.
>
> **[3:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/train-team-members-and-document-changes?u=76281980&t=215)** And there's an endless array of blogs, podcasts and projects out there that can help you and your team to keep learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (2)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Incident management
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=0)** - [Instructor] A system administrator rarely works in a bubble.
>
> **[0:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=3)** You and your team may need to support other teams during an outage or some other kind of trouble.
>
> **[0:09](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=9)** Be sure to find out what your expected role is and what policies are in place that you'll need to follow.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=14)** To facilitate communication, businesses usually have a cross-team communication platform already determined and set up for use.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=22)** This can be RIC, Slack, Skype, or any number of other products.
>
> **[0:26](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=26)** Sometimes it's just an email thread.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=28)** But if you need to use the system, be sure to get an account set up and get a quick overview of how the system works before you need to start using it in a time constrained situation.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=37)** Be sure to communicate with your team and with other teams about their expectations of you in terms of response time, the scope of your role, and who your points of contact will be in an outage.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=48)** Incident response teams will have a defined leader and it's important that you follow their direction or the direction of their delegates in order to respond to an outage.
>
> **[0:57](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=57)** Working to resolve an outage is not the time to make unrelated changes or upgrades to systems and it's definitely not the time to bring up disagreements about policies or vendors.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=67)** And, perhaps most importantly, remember that resolving outages under a time constraint is stressful for everyone involved.
>
> **[1:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=74)** You may only be working on a small piece, but other people, and especially stakeholders, will appreciate calm, polite, and timely responses.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=82)** Incident response may be the only time some people on other teams interact with you and it's an excellent opportunity to make a good first impression.
>
> **[1:30](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=90)** Unless you're directed otherwise, prefer over-communication to under-communication.
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=95)** Make sure you're in sync with what the rest of the team is doing and that what you're doing at any time is what they need you to be working on.
>
> **[1:42](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=102)** Keep notes of everything you do as well.
>
> **[1:45](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=105)** Having notes can be helpful for your learning and also for the larger team.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=109)** Many incidents will have a postmortem after an incident is resolved where affected teams and individuals discuss what went wrong, how it was fixed, and how to prevent similar issues in the future.
>
> **[2:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=120)** If your organization doesn't have these discussions, consider starting them within your team and then getting buy-in from the rest of the organization.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=128)** A good framework for this kind of discussion is called a blameless retrospective and you can find tips about that online.
>
> **[2:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=134)** Participating as part of an incident response team can help give you valuable insight about how your organization works.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/incident-management?u=76281980&t=140)** It also gives you an opportunity to practice your technical and collaboration skills to solve a problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Prerequisites:** set up (2), you'll need (1)
> **Env Vars:** ric (1)
> **Tools:** slack (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Summary
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/summary?u=76281980&t=0)** - [Scott] That's been a look at the basics of running a Linux system.
>
> **[0:03](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/summary?u=76281980&t=3)** As I mentioned at the beginning of the course, be sure to take time to explore what you've learned.
>
> **[0:08](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/summary?u=76281980&t=8)** And explore the man pages for some of the more advanced options.
>
> **[0:11](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/summary?u=76281980&t=11)** And be sure to keep an eye out for later courses in this series.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-operating-system-basics/summary?u=76281980&t=14)** See you next time.

> [!info]- Semantic Content
>
> **Speakers:** - [scott] (1)


## Instructor

- [[Scott Simpson]]

## Skills Covered

- Linux System Administration
- Ubuntu

## Path Context

### In [[Ubuntu Linux Professional Certificate by Canonical]]
← [[Learning Linux Command Line (2023)]] | **2 of 4** | [[Ubuntu Linux- Storage Management]] →

## Part of

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Appears In

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Related Courses

_Courses sharing skills:_

- [[Ubuntu Linux- User and Group Management]] — Linux System Administration, Ubuntu
- [[Ubuntu Linux- Storage Management]] — Linux System Administration, Ubuntu
- [[LPIC-1 Exam 102 (Version 5.0) Cert Prep]] — Linux System Administration
- [[Lpic 1 Exam 101 Version 5 0 Cert Prep]] — Linux System Administration
- [[Red Hat Certified System Administrator (EX200) Cert Prep- 2 File Access, Storage, and Security]] — Linux System Administration

---

[↑ Back to top](#)