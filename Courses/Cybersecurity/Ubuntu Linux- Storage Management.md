---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ubuntu-linux-storage-management
url: "https://www.linkedin.com/learning/ubuntu-linux-storage-management"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 8/11/2017
learners: 7015
skills:
  - Storage Management
  - Linux System Administration
  - Ubuntu
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQF_CbvTEEp2ng/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568056376216?e=2147483647&amp;v=beta&amp;t=XXIa9m3QogMVFdWBK9-H0xc3zaLqgssEL4BQdJSE2IM"
linkedin_topic: Cybersecurity
learning_paths:
  - Ubuntu Linux Professional Certificate by Canonical
path_count: 1
tags:
  - course
  - topic/security
  - topic/it-help-desk
  - topic/network-and-system-administration
  - topic/web-development
  - skill/storage-management
  - skill/linux-system-administration
  - skill/ubuntu
status: not-started
created: 2026-04-20
---

![Ubuntu Linux: Storage Management](https://media.licdn.com/dms/image/v2/C4E0DAQF_CbvTEEp2ng/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568056376216?e=2147483647&amp;v=beta&amp;t=XXIa9m3QogMVFdWBK9-H0xc3zaLqgssEL4BQdJSE2IM)

# Ubuntu Linux: Storage Management

> Storage is a critical component of any system. Linux offers a variety of approaches to storage management, depending on the size and importance of your data. Mastering this topic is key to finding a job in Linux administration. This course is part of a Professional Certificate from Canonical.

> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management) | 1h 42m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Scott Simpson]]

## Skills Covered

- Storage Management
- Linux System Administration
- Ubuntu

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=0)** - [Scott] Storage is a critical component of systems.
>
> **[0:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=3)** Documents, photos, music, databases, logs and code all need to live somewhere.
>
> **[0:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=9)** And depending on how large or how important this data is, you have different approaches and strategies for configuring and managing your storage.
>
> **[0:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=17)** In this course we'll take a look at the basics of storage.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=19)** Devices, partitions, volumes and file systems.
>
> **[0:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=23)** We'll see how to manage swap space for your systems, and how to make changes to partitions.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=28)** And then we'll dig deeper into combining the basics into more complex systems with volume management.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=34)** And then we'll take a look at mounting file systems manually and automatically.
>
> **[0:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=39)** At the end of the course, we'll look at quarters and backup policies.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/welcome?u=76281980&t=43)** Let's go.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [scott] (1)

#### Understanding storage terminology
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=0)** - [Instructor] Storage refers to systems and components on which information can be saved and retrieved as needed.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=6)** A flash drive, a hard disk drive, a NAS, and a SAN are all different types of storage that can be used for different purposes.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=15)** Storage is considered separately from memory, when talking about systems.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=20)** While both kinds of components store information, storage media are designed for mass storage over the long term, whereas memory is designed for holding smaller amounts of information, for a much shorter period of time.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=33)** Memory, or RAM, is extremely fast, but it's volatile; that is, it doesn't retain information when the power's removed.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=40)** And it's also comparatively expensive per unit of capacity, so we use it where it makes the most sense: to give a system some space to work.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=48)** Think of memory as a workbench, or the top of a desk, where the system can keep a few things that it's currently working on.
>
> **[0:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=55)** Storage on the other hand, is quite a bit slower than memory, but it does retain information when it's powered off, and that's why we use it for holding data for longer periods of time.
>
> **[1:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=65)** It's also much less expensive per unit of capacity.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=68)** If memory is a desk surface in an office, storage is the filing cabinet, where information that isn't currently being worked on is kept.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=76)** The information is accessible to the system, in case it's needed, but it's not stored in memory all the time.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=82)** So even though they're often measured in gigabytes, memory and storage are different things used for different purposes.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=88)** We typically refer to the devices used for storage as disks.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=93)** A disk is a physical device you can hold in your hands.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=96)** These devices can be traditional magnetic disks, SSDs, or other flash media.
>
> **[1:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=102)** Storage devices are either local or remote.
>
> **[1:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=106)** Local means that they're plugged into the system you're using, as is usually the case with a boot drive, or a USB disk, or anything else plugged in to a local data bus on your computer, like serial or parallel ETA, USB, FireWire, or Thunderbolt.
>
> **[2:01](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=121)** Remote storage is accessed over some kind of network medium, like ethernet or wifi.
>
> **[2:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=127)** Remote storage is provided by another system, to which your system connects.
>
> **[2:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=132)** The devices that we'll be working with in this course are called block devices.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=137)** Block devices are those which keep track of, and communicate information, in terms of blocks of binary information, as opposed to the other kind of device, called character devices.
>
> **[2:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=147)** Character devices track information in bytes, interpreted as characters.
>
> **[2:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=152)** A parallel port for a printer, or a serial port, like you might use for communicating with a micro controller, or programming some sort of network hardware, is a character device.
>
> **[2:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=162)** The pieces of information sent back and forth are read as individual characters.
>
> **[2:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=166)** A block device, like a hard drive, doesn't think about information in terms of characters, but rather just as chunks, or blocks, of information of a given size.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=175)** Locally connected storage devices are represented as devices in the /dev directory, where every device and partition the system can find is represented with a series of letters and numbers.
>
> **[3:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=186)** On many modern systems, we have disks attached on the serial bus, either on the SATA, or Serial ATA bus, or mounted via USB, the Universal Serial Bus.
>
> **[3:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=196)** Drives attached in these ways are represented by the letters SD, for Serial Disk.
>
> **[3:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=201)** And then they're given a letter to identify them, in the order that the system detects the devices.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=207)** On older systems, or those with disks on a Parallel ATA bus, and some other buses, disks are labeled with HD instead of SD.
>
> **[3:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=215)** The order in which these disks are detected by the system isn't guaranteed to stay the same, and we'll cover that when we look into mounting disks.
>
> **[3:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=223)** But for now, the first disk the system detects is called A, then B, then C, and so on.
>
> **[3:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=229)** Divisions within these disks, usually called partitions, are represented with a number, starting at 1.
>
> **[3:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=235)** So on a disk that's the first or only one in the system, with three partitions, here in the /dev directory, and in other places, where we see the descriptors for the disks, we'd see sda, the whole disk, and sda1, sda2, and sda3, the partitions on that disk represented right alongside the disk itself.
>
> **[4:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=256)** Aside from necessary hardware like a controller, or mechanical actuators, disks can contain media that store information as bits, which you can think of as a big field or space of areas that can represent either an on or off state.
>
> **[4:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=269)** The space can be divided in various ways.
>
> **[4:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=272)** Usually there's just one partition with one filesystem, on devices like USB drives, but there can be more than one, for various purposes.
>
> **[4:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=280)** Most frequently, on a running system, you'll see a single device, with one or more partitions, each containing a filesystem.
>
> **[4:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=286)** Information about the partitions is stored on-disk, in the partition table.
>
> **[4:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=292)** A type of partition management that's been around since the 1980s is called MBR, or master boot record.
>
> **[4:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=299)** This structure only allowed for up to four partitions, and these were called primary partitions.
>
> **[5:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=304)** You could also replace one of those primary partitions with an extended partition, which could store any number of logical partitions as well.
>
> **[5:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=312)** You may come across this partition management scheme if you're working on a very old system.
>
> **[5:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=317)** A more recent type of partition management is called GPT, for GUID partition table, where GUID stands for Globally Unique Identifier, and it doesn't suffer from the same limitation on the number of partitions.
>
> **[5:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=329)** Most modern computers, especially Windows systems and Macs, use this partition type.
>
> **[5:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=334)** Linux can use it as well, of course, and you'll probably use it if you want to dual-boot Linux on a fairly recent system, but it's still considered space in terms of partitions.
>
> **[5:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=345)** Once we have partitions, we can make filesystems on top of them, as we'll see later on, or we can go one step further, with a tool called LVM, which is an additional layer of management on top of standard partitions.
>
> **[5:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=357)** While it uses standard partitions, usually on a GPT disk, LVM thinks about the storage as volumes and groups, and gives us a few advantages over traditional partitioning.
>
> **[6:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=367)** Among other things, it gives us the ability to span a filesystem across more than one disk, which gives us a lot more flexibility, in terms of how much data we can store in a single filesystem, and also allows us to provide more redundancy, in the case of hardware failure.
>
> **[6:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=382)** LVM first divides space up into PVs, or physical volumes, which are standard partitions, but are treated a little differently.
>
> **[6:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=390)** These PVs become members of a VG, or volume group, an organizational unit that keeps track of the underlying volumes, whether they're all on one disk, or spread across more than one.
>
> **[6:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=400)** And on top of this volume group, we have one or more logical volumes, or LVs, which are what contain the filesystems that we use.
>
> **[6:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=408)** These layers of abstraction are what help give us more useful features, and a more flexible approach to managing space.
>
> **[6:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=415)** Whether it's on a standard partition, or a logical volume, our storage needs a filesystem.
>
> **[7:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=420)** The filesystem is the most user-facing part of the storage that we see.
>
> **[7:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=424)** It's the data structure that keeps track of bits, and shows them to us as files, in folders with various information, or metadata about their size, creation and modification dates, permissions, and so on.
>
> **[7:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=436)** There are a number of different filesystems, with features like snapshots and journaling, and we'll get into those ideas a little bit more in detail later on.
>
> **[7:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=444)** The filesystem is the way that raw data is represented as files, and folders to the user on the system.
>
> **[7:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=450)** The metaphor of representing pieces of information as files, organized into folders, goes back a long way in computing, and filesystems that work this way go back a long way too.
>
> **[7:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=459)** Filesystems store more than just the information that makes up files, though.
>
> **[7:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=463)** Depending on the type, they'll store all kinds of metadata, or data about the data, like the creation and modification dates, permissions that determine access to the file, and some other bits of information that systems need.
>
> **[7:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=477)** In both cases, in order to use storage, it needs to be mounted, which means that the system not only needs to be aware that the storage hardware's available, but it needs to read information about the device, and understand how to make the data available on it accessible to a system or user.
>
> **[8:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=492)** The system needs to be able to read and understand the filesystem of the mounted device, in order to make the volume available to use it on the system.
>
> **[8:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=499)** And when the system is done using storage, it can unmount the device, or logically disconnect the filesystem, so it's no longer available, and is in a safe state to disconnect our power down.
>
> **[8:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=509)** When a device is mounted, its filesystem becomes available somewhere in the host system's filesystem.
>
> **[8:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=515)** So, to tell a system to mount a volume, we need to know where it's accessible, and where to show it.
>
> **[8:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=521)** We need to specify where the system should make the filesystem, or volume on the partition table available, in its own filesystem.
>
> **[8:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=527)** Very often, the primary filesystem for the system is mounted at /, or /root, so the operating system knows where to find the parts that it needs in order to run.
>
> **[8:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=537)** A separate boot partition is mounted at /boot, and other disks that might be used on the system are commonly mounted in subfolders under /mnt, but that's just a convention, not a rule.
>
> **[9:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=549)** You can mount disks anywhere, and some disk droves mount removable media like optical disks and disk images in the media directory instead.
>
> **[9:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=557)** This flexibility lets us mount devices accessible to the whole system, or just to specific users, depending on where they are and what the permissions on those paths look like.
>
> **[9:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-storage-terminology?u=76281980&t=566)** That's a lot of terms, but knowing them before we start working with the mechanics of the filesystem, partitions, and disks, will be helpful.

> [!info]- Semantic Content
>
> **Env Vars:** usb (4), lvm (3), ata (2), gpt (2), guid (2)
> **Definitions:** is a  (3), is called (3), means that (2), refers to (1), stands for (1)
> **CLI Commands:** make (4), find (2)
> **Code Keywords:** type. (1), type, (1)
> **Warnings:** be aware (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [instructor] (1)

#### Lab setup
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=0)** - [Instructor] In this course I'll be using VirtualBox and Ubuntu.
>
> **[0:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=4)** I've already set up an Ubuntu virtual machine and if you haven't done that already, take a moment to download an installation .ISO and set up a VM to work in.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=13)** If you need help with that, check out our other courses on installing Linux in a VM.
>
> **[0:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=17)** I'll also be using some USB drives that are attached to my system for the storage management tasks that I'll be showing you throughout the course.
>
> **[0:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=24)** In my case, I have two 128 gigabyte disks attached, but the size doesn't matter too much.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=30)** If you're using a system with a native Linux installed you could use internal disks as well.
>
> **[0:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=35)** But make sure that whatever storage you're using doesn't contain anything you want to save.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=40)** You'll be creating and destroying partitions on these disks and that will cause data loss.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=46)** Because what we're doing can cause data loss, be careful to note what your important disks and partitions are and don't use them for the management tasks that we'll be doing.
>
> **[0:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=54)** I can't stress this strongly enough.
>
> **[0:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=56)** Be careful to preserve your data.
>
> **[0:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=59)** A virtual machine is a great choice for practicing with storage because at the very worst, you may damage an imaginary computer rather than your real one.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=68)** As with many things in the Linux world, the hardware and naming that you see here may be different from yours, and you'll need to be able to follow along with the idea behind what's happening and apply it to your system, rather than just type what I show.
>
> **[1:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=80)** That's especially the case when we get to partition and device names.
>
> **[1:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/lab-setup?u=76281980&t=85)** Most of the tools I'll show you in this course require root access, so except where I need to be using an unprivileged user, I'll be using the root user.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2), you'll need (1)
> **Code Keywords:** case, (1), require (1)
> **Env Vars:** iso (1), usb (1)
> **Warnings:** be careful (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Working with Partitions and Filesystems

#### Explore and identify block devices
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=0)** - One of the ways that we can explore storage on a system is by using the blkid command.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=7)** This shows us attributes of block devices attached to the system.
>
> **[0:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=11)** Blkid shows the mount point, the universally unique identifier, or UUID, the volume or file system type, a label, if it's relevant, and the partition UUID for a device.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=27)** What you see for your system will be a little different but the parts are all the same.
>
> **[0:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=31)** These pieces of information can help us to identify a device and see if it is as we expect it to be.
>
> **[0:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=38)** The UUID of a volume is really helpful for allowing us to address it in an unambiguous way.
>
> **[0:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=44)** If, for example, we added another disk, my external disk might change descriptors.
>
> **[0:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=49)** It might become sdb or sdd, so only talking to it by calling it dev sdc1 isn't reliable, especially in a script or something across reboots.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=60)** Instead, when the volume was created, it was given an identifier that's, for all intents and purposes, unique.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=67)** So wherever this disk gets detected, on this system or a different one, it'll always have the same UUID for the volume, and in fact, the partition has one too, if you need to use that.
>
> **[1:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=77)** But usually the volume UUID is more useful, as we'll see when we mount disks.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=82)** The type value here shows what kind of file system is being used on the volume and that will vary based on how the volume was created and what it's for.
>
> **[1:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=90)** This one here is swap, for example, which is designed to act as system swap, and this one here is ext2 The internal disk here is ext4.
>
> **[1:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=101)** We'll dig into what these types are really about later on, but both of these are common file system types for general data storage on Linux systems.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=109)** You may also see vfat or lvm member depending on how your system is set up.
>
> **[1:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=114)** There are a few options that can show us more interesting information including the dash i option or a blkid -i and this takes an argument of a device.
>
> **[2:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=126)** I'll use /dev/sdc1.
>
> **[2:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=130)** This shows us some information about the input and output parameters of the disk, like the sector sizes.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=137)** Blkid dash p and the device reads information directly rather than from blkid's cache.
>
> **[2:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=146)** Check out the man pages for more information.
>
> **[2:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=150)** Another helpful command line utility for taking a look at block devices is lsblk which lists volumes in tree format so we can more easily see how they relate to each other and it shows us some different information than the blkid command, too.
>
> **[2:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=165)** On the left, we see the name of each volume and there's a tree diagram that shows how they're related.
>
> **[2:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=171)** The next column shows what are called the major and minor numbers for the devices.
>
> **[2:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=176)** These are classifications of the type of device that the system knows about.
>
> **[3:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=180)** Here, a major number of eight represents a serial device, the hard disk.
>
> **[3:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=184)** A major number is a way of communicating to the kernel what driver will be used to communicate with that device.
>
> **[3:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=190)** Minor numbers of one, two, five, and so on here represent partitions on these devices.
>
> **[3:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=196)** But it's up to the driver to determine what those numbers actually mean.
>
> **[3:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=200)** On other devices, the minor number can represent specific models, or modes, or any information the driver creator wants to use them for.
>
> **[3:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=208)** If you're curious, you can take a look at what the major numbers correspond to in the block devices section of the /proc/devices file.
>
> **[3:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=219)** These numbers are also shown on the long listing format if you take a look in the dev directory.
>
> **[3:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=227)** The RM column shows whether a volume is removable.
>
> **[3:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=230)** And we also have a column showing the human readable size of the volume or device.
>
> **[3:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=236)** RO represents whether a device is read only.
>
> **[4:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=240)** And the type shows what kind of thing each line is.
>
> **[4:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=244)** Part is partition and disk is the storage device itself.
>
> **[4:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=249)** And then at the end we have the mount point in the system where the volume is mounted.
>
> **[4:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=254)** If you need more information in the output, you can reformat the display to show what you need specifically, and you can find out more about the options for lsblk in the man pages, and find out which columns of information are available with the dash dash help option.
>
> **[4:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=269)** All of this information that we see comes from the sys files system, or sfs.
>
> **[4:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=273)** The pseudo-files in that folder represent aspects of the devices attached to the system and our storage devices are no exception.
>
> **[4:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=280)** Our block devices are represented in sys block.
>
> **[4:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=284)** I can take a look at that with ls -l /sys/block, or at least there are symlinks to the actual device entries deep in the device history.
>
> **[4:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=294)** You can see the same information in a different way by major and minor numbers in the /sys/dev/block folder.
>
> **[5:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=300)** We can see that with ls -l /sys/dev/block.
>
> **[5:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=308)** And here are the major and minor numbers, symlink to the actual devices.
>
> **[5:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=316)** And within the sys/fs folder there's entries for each file system and type that the system knows about.
>
> **[5:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=321)** And within each of these are some parameters you can read about devices of that type.
>
> **[5:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=326)** We can also take a look at what volumes and devices the system knows about in the /dev/disk folder.
>
> **[5:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=334)** Within here they're organized in various ways such as by path and by UUID.
>
> **[5:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=347)** And of you want to take a look at all kinds of information about your disk or volume, here in Ubuntu you can use the udevadm command with the info argument along with a path to a disk.
>
> **[6:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=363)** This shows the device path, the various ways that it can be accessed, and other information the system can read from the device.
>
> **[6:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/explore-and-identify-block-devices?u=76281980&t=371)** That's a few ways to get information about block devices on your system so you can get an idea about what they are and how to explore them if you need to in the future.

> [!info]- Semantic Content
>
> **Env Vars:** uuid (6)
> **CLI Commands:** find (2), ls (2), rm (1)
> **Code Keywords:** for. (2), type, (1), if, (1), type. (1)
> **Analogies:** for example (2), such as (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - one (1)

#### Create and modify partitions
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=0)** - [Instructor] Let's take a look at exploring the partitions that are available on the system and how to create and modify them.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=6)** There are a few tools to be aware of before we start this.
>
> **[0:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=9)** Generally speaking, there's parted, the partition editor, and fdisk, another tool that modifies the partition table of disks.
>
> **[0:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=17)** If you're working in a graphical environment, there's a graphical version of parted called gparted, which can be really useful to get a visual idea of how partitions on a disk are allocated.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=27)** There's also a program called cfdisk that makes work with partitions at the command line a little bit easier, though it lacks some of the features that fdisk offers.
>
> **[0:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=36)** Here on my system, I have two external disks connected.
>
> **[0:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=40)** Let's use gparted first to get a look at my drives.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=43)** If you don't have it installed, you can install it with apt install gparted.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=53)** And now, I'll run gparted with no arguments.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=60)** When I open gparted, it defaults to the first device.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=63)** In this case, sda, the disk that my system is booted from.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=67)** I can see that here in the upper right on the device selector.
>
> **[1:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=71)** I'll choose to show the device information here from the view menu as well.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=76)** So we can see a little bit more information about the devices.
>
> **[1:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=79)** I can see that the overall disk is 100 gigabytes, and it's dev sda.
>
> **[1:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=84)** It has an msdos partition table, which is the same as MBR.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=88)** Yours may be GPT, depending on how you set up the system that you're using.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=93)** And then there's some information about other aspects of the drive, but the more interesting parts are up here in the graphical representation of the disk, which is divided up into sections, highlighted with colors, and there's a table below here where we can see more information about what each section represents.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=109)** The dark blue box here represents an ext4 file system in a primary partition.
>
> **[1:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=115)** I can tell it's a primary one because the other kind, the extended partition, is highlighted here in light blue.
>
> **[2:01](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=121)** There's a light yellow highlight in the box here that represents how full this primary partition is, and all of that is my system and the files I have on this machine here.
>
> **[2:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=130)** In the table, I can see that this partition is sda1, and it's mounted at slash, so it's the root file system.
>
> **[2:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=138)** This extended partition is sda2, and it contains a Linux swap file system.
>
> **[2:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=143)** That's a special kind of file system that the system uses to store things that it swaps out of memory if the memory starts to run low.
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=151)** I can double-click on any of these divisions here and find out more information about them too.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=158)** I'll switch to one of my external drives now with the selector in the upper right.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=163)** This one, sdb, is a USB disk, and it's formatted to be compatible with Linux, Windows, and Mac.
>
> **[2:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=170)** It's fat32, which you can see here represented in green.
>
> **[2:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=174)** This is also on an msdos or MBR partition table.
>
> **[2:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=178)** And my other disk here, sdc, is gpt type and has one ext2 file system on it.
>
> **[3:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=185)** By right-clicking on a partition or file system, I have lots of options to make changes to it.
>
> **[3:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=190)** To delete, resize or move, copy, and format to various other file system types.
>
> **[3:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=196)** I can also change the name, manage the flags, check the file system and so on.
>
> **[3:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=201)** Let's say I wanted to format this to fat32.
>
> **[3:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=204)** I'll choose that, and it's not done yet.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=207)** gparted will only make changes to the file system when you choose to apply them.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=211)** So that format operation hasn't happened yet.
>
> **[3:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=214)** To make the change actually happen, I'll click the check mark here to apply the pending operation, and then gparted here will go through the changes I've requested and make them, but before you format a partition, make sure you don't need to save anything on the file system that you're working with.
>
> **[3:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=229)** gparted gives us a nice graphical view of what's going on with partitions and file systems on a disk.
>
> **[3:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=234)** We can do some of the same things with a parted program at the command line.
>
> **[4:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=242)** Parted, or the partition editor, is a text interface that lets us work with partition tables on devices.
>
> **[4:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=249)** If we start it up without specifying a device, it defaults to sda, or first disk.
>
> **[4:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=254)** We can see a list of commands with help.
>
> **[4:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=258)** And that suggests to us a few interesting things to look at.
>
> **[4:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=262)** First, I'll use print to take a look at the partition table for sda.
>
> **[4:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=268)** And here's the same information we saw before, but in a less colorful way.
>
> **[4:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=274)** There's my primary partition one, or sda1, and the extended partition, sda2.
>
> **[4:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=281)** And inside that, the logical partition, sda5, my swap space.
>
> **[4:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=288)** I can see here there's a boot flag set on partition one, indicating that the system can boot from this partition.
>
> **[4:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=295)** There are some options in the help that will let you toggle those flags if you need to.
>
> **[5:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=300)** Print all shows us a little bit more information across all of the devices.
>
> **[5:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=306)** Here's the information for my first disk, the second disk, and my third disk.
>
> **[5:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=318)** I'll select dev sdc here to go to one of my external disks, and let's take a look at it with print.
>
> **[5:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=327)** There's the fat32 file system we made with gparted.
>
> **[5:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=331)** Let's get rid of that and make two partitions here on this disk instead.
>
> **[5:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=335)** To get rid of the partition, I'll write rm and the partition number, one.
>
> **[5:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=340)** If we wanted to change the partition type here, we could with the mktable command with either msdos or gpt, but I'll leave this disk as gpt for now.
>
> **[5:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=352)** The mkpart command makes partitions.
>
> **[5:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=355)** So let's make two here.
>
> **[5:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=357)** I'll write mkpart and hit enter.
>
> **[5:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=359)** I can specify options at the command line, but let's go through it interactively instead.
>
> **[6:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=364)** I'm prompted for a partition name, which I'll set to p1.
>
> **[6:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=368)** If you're working with an MBR or msdos partition table, you'll be asked if you want to make a primary or extended partition.
>
> **[6:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=375)** Next, we're asked for the file system type, and since we'll reformat this before we use it, I'll just leave it at ext2 here.
>
> **[6:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=384)** And then it asks where to start the partition.
>
> **[6:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=386)** This can be a little tricky because if you give it a number, it'll interpret that in megabytes.
>
> **[6:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=391)** We could calculate what specific number of bytes to use by finding out the block size and offset information.
>
> **[6:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=398)** Or we could say zero gigabytes or 0% for that matter.
>
> **[6:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=403)** And then parted will figure it out for us.
>
> **[6:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=406)** And for the end, we can use a gigabytes value or a percentage as well.
>
> **[6:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=411)** Let's make this first partition 10 gigabytes.
>
> **[6:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=414)** Great, now let's make a second partition with mkpart, a name of p2, ext2 file system, starting at 10 gigabytes, and then I'll use 100% to tell parted to fill up the rest of the disk with this partition.
>
> **[7:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=431)** Let's have a look at that with print.
>
> **[7:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=435)** Looks good.
>
> **[7:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=437)** If we wanted to use these, we would still need to create file systems on them, but that's a topic for another video.
>
> **[7:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=442)** Let's quit with q and take a look at the fdisk tool.
>
> **[7:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=449)** Fdisk can be launched from the command line with a path to a device.
>
> **[7:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=453)** So let's take a look at the sdc drive here.
>
> **[7:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=456)** We can press M for help, which we'll need because the commands for fdisk are all single letters.
>
> **[7:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=463)** Commands we'll use here will be p for print, n for new, and d for delete.
>
> **[7:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=469)** First, let's take a look at the partition table with p.
>
> **[7:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=472)** There's the partitions that I expect, that I created earlier.
>
> **[7:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=476)** Let's get rid of these and make just one partition again on this device.
>
> **[8:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=480)** I'll type d, and I'm asked which partition I'd like to delete.
>
> **[8:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=484)** If there were just one on the disk, it would automatically delete that one, but here, I'll write one, and then if I print again, that one's gone, leaving just the second one.
>
> **[8:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=494)** I can delete that too with d, and there because it's the last one, it gets deleted without any further ado.
>
> **[8:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=501)** I can also change the partition type or disk label to MBR or msdos with the o command or to gpt, as it already is, with lowercase g.
>
> **[8:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=511)** But I'll leave this as is, and we'll create a new partition.
>
> **[8:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=516)** To do that, I'll use the n command, and then I'm asked which partition to make it.
>
> **[8:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=522)** I don't have any partitions right now, so I'll choose the default, one.
>
> **[8:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=527)** Then I'm asked what the first sector of my partition ought to be, and I can put any number in this range here, but again, I'll go with the default.
>
> **[8:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=534)** Right at the beginning of where fdisk things my partition should align.
>
> **[8:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=538)** If I were to be creating more than one partition, this value would update to the earliest recommended sector after the other partitions.
>
> **[9:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=545)** I'll stick with 2048.
>
> **[9:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=547)** And here, I'm asked what the last sector is.
>
> **[9:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=550)** I don't want to have to deal with calculating the exact sector number.
>
> **[9:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=554)** So I can also use plus size and a size amount if I want to set a specific size smaller than the full extent of the disk.
>
> **[9:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=561)** So like plus 60G if I wanted to make a 60 gig partition, but I want to use all of the disk, so I'll erase that and just press enter to accept the default.
>
> **[9:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=570)** The last sector fdisk recommends, 242 million, 614 thousand, and so on.
>
> **[9:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=576)** And then I see that fdisk has created a partition of the type Linux file system.
>
> **[9:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=581)** That's the default, and it's fine for a storage partition, but sometimes, we might want to make it a different kind of partition depending on how it's going to be used.
>
> **[9:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=589)** I can do that with t, and it's asking for a hexadecimal code.
>
> **[9:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=595)** I can type L to list all of the codes for the partition types that fdisk knows about.
>
> **[10:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=602)** Here's the Linux file system one that we're already using, number 20.
>
> **[10:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=607)** We could change it to, say, Microsoft basic data, number 11.
>
> **[10:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=612)** So I'll scroll back down and type 11.
>
> **[10:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=617)** And then if I print again, I can see that my partition has the type of Microsoft basic data.
>
> **[10:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=624)** Let's change that back to Linux file system though with t and 20, if you remember from before.
>
> **[10:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=633)** And print, there we go.
>
> **[10:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=636)** There are a few other things you can do with fdisk if you need to, and some of them are available in the expert mode, which you can get by typing x and then pressing m for the help there.
>
> **[10:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=646)** You can get back out of expert mode by typing r.
>
> **[10:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=649)** We're done making changes with fdisk now, but there's one more step to go.
>
> **[10:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=653)** All of these changes so far have just been taking place in memory, that is, they're not actually being written back to the disk, which is nice because if we made a mistake and needed to cancel this work, we could do so with just the q command to quit and not write the changes to the partition table, but I do want to write this change to the partition table.
>
> **[11:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=671)** Having removed two partitions and created one.
>
> **[11:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=674)** So to do that, I'll write w.
>
> **[11:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=677)** Fdisk tells me that the partition table has been altered, and it's letting me know that it's updating the information the system has about the partitions on this disk.
>
> **[11:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=685)** And when we're back to the command line, our partition has been created, but we still need to add a file system to it.
>
> **[11:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=690)** We'll do that in the video about file systems.
>
> **[11:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=695)** Another tool you can use to make basic changes to the partition table on a drive is cfdisk.
>
> **[11:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=700)** It's called cfdisk because it's fdisk using a curses interface, a TUI, or a text user interface.
>
> **[11:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=707)** That surfaces some common commands in a more user-friendly way.
>
> **[11:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=710)** I'll start up cfdisk on this device with cfdisk dev sdc.
>
> **[11:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=716)** And here I can see information about the disk.
>
> **[11:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=719)** There's the device path, the size and gigabytes, bytes and sectors, the label, and the identifier.
>
> **[12:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=726)** Below that is a listing of the partitions on the device, with their name, the start, and end values, how many sectors they take up, their raw size, and the type of the file system.
>
> **[12:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=736)** Below that, for each partition that's selected is a little bit of extra information.
>
> **[12:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=741)** I can choose from among the options at the bottom of the screen here by using the arrow keys and then arrow over to delete.
>
> **[12:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=749)** I'll press enter to delete that partition.
>
> **[12:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=752)** Just like fdisk, this change won't be written to the partition table just yet.
>
> **[12:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=756)** We need to do that explicitly when we're done, or we can cancel to ignore our changes.
>
> **[12:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=762)** I'll make sure new is selected and then give the partition a size.
>
> **[12:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=766)** 60 gigs sounds good.
>
> **[12:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=769)** And there it is, up above.
>
> **[12:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=772)** I'll create another new partition and say 60 gigabytes again, and this time I get an error that says the maximum size is zero bytes.
>
> **[13:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=782)** What's going on?
>
> **[13:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=783)** Well, the selector up above moved to the zero byte free space entry before my new partition rather than the empty space after it.
>
> **[13:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=790)** So I'll hit escape to leave this dialog and then move down to the free space that I intend to use, and there I'll choose new.
>
> **[13:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=797)** Now, it recommends for me the maximum size this partition can be, about 55 gigabytes, and that's okay, so I'll press enter.
>
> **[13:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=805)** I can't go larger than this, or it won't fit on the device.
>
> **[13:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=809)** Okay, so now we need to write these changes to the partition table.
>
> **[13:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=812)** To do that, I'll move over here to write and press enter.
>
> **[13:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=817)** I'm asked to confirm, and I need to type out the word yes in order to make the change.
>
> **[13:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=822)** Just typing the letter Y won't do it.
>
> **[13:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=826)** All right, the partition table has been altered, and if you'd like, you can alter it further.
>
> **[13:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=830)** I'm done though, so I'll choose to quit.
>
> **[13:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=834)** Even though we have partitions, they don't have usable file systems yet.
>
> **[13:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-modify-partitions?u=76281980&t=838)** We'll need to create the file system in order to store files there, and we'll get into that in just a little bit.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), delete (7), interface (3), default, (2), default. (2)
> **CLI Commands:** make (17), apt (1), find (1), rm (1)
> **Env Vars:** mbr (4), gpt (1), usb (1), tui (1)
> **Tools:** command line (5)
> **UI Navigation:** double-click (1), switch to (1), toggle (1), go to (1)
> **Definitions:** is a  (4)
> **Prerequisites:** install (2), before we start (1), set up (1)
> **Analogies:** just like (1)

#### Create, modify, and mount filesystems
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=0)** - [Instructor] Once we have a partition on a device, we need to add a filesystem to it in order to store and keep track of files.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=6)** Filesystems act like, well, filing systems, keeping track of pieces of data that we refer to as files and information about those files.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=15)** It also provides a system for keeping files organized, or rather, presenting the lists of files that it knows about in a way that makes sense to us.
>
> **[0:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=24)** There are many different kinds of filesystems, most of which Linux supports natively.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=28)** But support for others can be added as well.
>
> **[0:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=31)** In this video, we'll take a look at the more common filesystems on Linux and leave exploring the exotic ones aside.
>
> **[0:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=38)** Probably the most common filesystems that you'll see are called Ext2, three, or four, depending on which version of the extended filesystem you're using.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=46)** X2, Ext2, or the second extended filesystem, started out in the early 90s, and it's pretty standard across Linux installations.
>
> **[0:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=55)** There was an extended filesystem before it, but it wasn't used for very long.
>
> **[0:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=59)** The third extended filesystem adds support for journaling which keeps track of pending changes on the disk in order to ensure their integrity.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=67)** And the fourth extended filesystem adds support for larger files, a different approach to storing data on the disk, and some other features.
>
> **[1:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=75)** Depending on what you're going to be doing with a filesystem, consider the options and features before you make your choice.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=82)** Ext2 is a good choice for SSDs and removable drives, whereas Ext4 is a good choice if you need to have some guarantees from the journal about whether your data did in fact get written to the disk.
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=95)** Another format you might see is XFS.
>
> **[1:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=98)** XFS was developed by Sun Microsystems, and it's fairly widespread on various flavors of Linux as well.
>
> **[1:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=104)** Btrfs, or the B-tree filesystem, is a fairly new option intended to focus on easier administration and better fault tolerance.
>
> **[1:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=113)** And while it's considered good enough for daily use, there are still some areas where it has problems.
>
> **[1:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=118)** If you're interested in how different filesystems work under the hood, definitely check it out.
>
> **[2:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=123)** Linux also supports formats that work well across platforms, notably the FAT32 format which works on Windows and Mac.
>
> **[2:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=130)** But it's an older format, and it has some limitations like a four gigabyte cap on the size of individual files.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=137)** Normally, we won't want to use FAT32 volumes unless we need to take the disk to another platform and plug it in.
>
> **[2:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=143)** There's just too many limitations and not enough features to use it full-time on Linux.
>
> **[2:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=149)** Creating a filesystem is also called formatting a drive in some operating systems.
>
> **[2:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=154)** When we're creating a filesystem, we'll use individual tools for each type of filesystem.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=159)** Let's take a look at the options here.
>
> **[2:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=162)** I'll type ls -l and we'll look inside the sbin folder for tools that start with mk.
>
> **[2:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=171)** There's a few options here including mkfs which works but is considered deprecated in favor of the specific tools, mkfs for x2, three, four, and so on.
>
> **[3:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=184)** These all use mke2fs, and there are some other programs for FAT, or file allocation table like FAT32 and tfs and so on.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=193)** In order to make a filesystem on a partition, all we need to do is use the tool that corresponds to the filesystem that we want and pass along the path to the partition.
>
> **[3:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=202)** If you want to explore all of the more advanced options you can set with these tools, check out the man page for mke2fs.
>
> **[3:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=210)** There's options here to set the block size if you need that and to check the device before creating a filesystem.
>
> **[3:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=218)** We have options for enabling the journal, setting the label for the volume, and how much space to reserve for the superuser if we want to change it from the default of five percent.
>
> **[3:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=232)** Each of these options has its place, though in this course, we don't need to do anything like changing the block size or the number of inodes.
>
> **[3:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=239)** But this is where you'd find the options if you do need to do that.
>
> **[4:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=242)** I'll quit out of here.
>
> **[4:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=243)** And let's make a filesystem.
>
> **[4:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=245)** Alright, mkfs.ext2, and I'll give it the path of /dev/sdc1, the first partition on my third disk.
>
> **[4:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=256)** If there's already a filesystem on your target device, you'll be asked if you want to overwrite it, destroying any existing data there.
>
> **[4:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=263)** If you have an empty partition, you won't see that message.
>
> **[4:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=266)** And you want to make sure that you're specifying a partition with a number, not a whole device without a number.
>
> **[4:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=272)** If you do, it can overwrite your partition table and cause data loss outside of just one partition.
>
> **[4:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=277)** So with this basic mkfs command here, we'll create an Ext2 filesystem on the sdc1 partition.
>
> **[4:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=285)** The process of creating this filesystem takes a little while.
>
> **[4:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=288)** And we can see here that the program is making blocks that are four K in size and that there are backups of the superblock which stores metadata that defines the filesystem at specific block addresses in case anything happens to the original one.
>
> **[5:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=303)** And it's writing some of the other structures that the filesystem needs.
>
> **[5:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=307)** Okay, we're done.
>
> **[5:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=308)** Now, in order to use this shiny new filesystem we just made, we need to mount it.
>
> **[5:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=313)** Mounting a filesystem tells the system where to make it available in the root filesystem.
>
> **[5:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=319)** Usually we'll mount things in the mnt directory, but we can mount them anywhere we like.
>
> **[5:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=324)** To mount something, we need to create a folder as a placeholder.
>
> **[5:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=328)** Alright, mkdir /mnt/storage to create a folder called storage in my mnt folder.
>
> **[5:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=335)** And then, I'll use the mount command with the path to the filesystem, /dev/sdc1 and then the path where I want it to be available, /mnt/storage.
>
> **[5:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=347)** There we go.
>
> **[5:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=349)** Let's take a look at the result of this with the df command to see all the disks on the system.
>
> **[5:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=356)** Here's my new disk.
>
> **[5:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=358)** If I wanted to, I could copy files to and from it and set permissions as needed.
>
> **[6:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=363)** If I just type mount here, I can see information about all of the filesystems that are mounted.
>
> **[6:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=369)** There are some we don't really care about here.
>
> **[6:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=371)** But on this line, I can see my new filesystem.
>
> **[6:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=376)** Here in parentheses are various flags that set how the system uses the disk.
>
> **[6:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=381)** rw means it's mounted read write.
>
> **[6:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=384)** relatime means that the system will update access times for inodes relative to the modification time, and that's the default on Linux now.
>
> **[6:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=392)** block_validity means that the system will check the blocks are where they're expected to be, and barrier means that the volume is mounted using write barriers which help to guarantee that the data is written to disk rather than the cache, just in case the volume goes away unexpectedly.
>
> **[6:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=408)** user_xattr means that the volume supports extended attributes defined by the user.
>
> **[6:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=413)** And acl means that the volume supports and will respect access control lists.
>
> **[6:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=419)** This is the default set of flags for an ext2 volume, and you can set others if you need to.
>
> **[7:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=424)** You can find mount options in the mount man page and in the man pages for the various mkfs tools as well.
>
> **[7:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=431)** I can also take a look at the information about a filesystem with a tune2fs -l command.
>
> **[7:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=440)** Again, let's take a look at /dev/sdc1.
>
> **[7:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=446)** Here I can see the filesystem features, flags, and mount options.
>
> **[7:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=450)** The tune2fs command can make changes to these parameters in case you need to make a modification to a filesystem that already exists.
>
> **[7:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=458)** When we're done using this filesystem, we can remove it from the system safely by unmounting it.
>
> **[7:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=463)** That tells the system that the device is no longer available for use.
>
> **[7:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=467)** To do that, we can use the umount command with either the device path or the mount path.
>
> **[7:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=476)** I'll do that.
>
> **[7:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=476)** And if we take a look at df again, we'll see that device isn't available anymore.
>
> **[8:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=483)** If you want to create a different filesystem on the partition, maybe on an ext4 one, or on a FAT32 one to work with Windows, you can do that with the appropriate tool.
>
> **[8:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=491)** Just be aware that the data on your partition will no longer be accessible.
>
> **[8:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-modify-and-mount-filesystems?u=76281980&t=495)** When you create a new filesystem, the structures that describe where the data are stored get overwritten and recreated, but the actual blocks of data are still there, waiting to be overwritten with new data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7), find (2), ls (1), mkdir (1)
> **Definitions:** means that (5), is a  (3)
> **Env Vars:** fat32 (4), xfs (2), fat (1)
> **Code Keywords:** let (4), pass (1), while. (1)
> **Code Identifiers:** block_validity (1), user_xattr (1)
> **Documentation:** man page (2)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Create and mount an encrypted partition
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=0)** On a Linux system, we can encrypt whole partitions of disks in order to protect them from unauthorized access.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=7)** There's no such thing as perfect security, but protecting data with encryption and a password is certainly better than nothing if you have sensitive information to safeguard.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=15)** To encrypt a partition, we'll use a combination of dm-crypt, which handles things on the back end, and LUKS, or Linux unified key setup.
>
> **[0:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=24)** The tools we need are available in the package called cryptsetup.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=28)** So the first thing I'll do is install that from the repository, and with that install cryptsetup.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=34)** While there are tools to convert an existing partition to an encrypted one, they put you at a risk of data loss, so in this video, we'll create a brand new, empty encrypted partition to start using.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=43)** If you have data you need to protect, that needs to be copied off somewhere else and then put back on the encrypted partition when it's been created.
>
> **[0:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=52)** I'll install cryptsetup.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=60)** And I'll clear the screen.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=63)** I'm going to use the second partition on my third disk, STC2, as an encrypted partition.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=68)** We can switch it to an encrypted format with the command cryptsetup, luksFormat, /dev/sdc2, and then we're warned that the data will be destroyed.
>
> **[1:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=84)** To accept this, I'll need to type YES in capital letters.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=88)** And then I'm asked for a passphrase.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=93)** To make sure that I've typed it carefully, I'm asked for confirmation.
>
> **[1:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=97)** Be sure to remember this passphrase, and record it somewhere secure, like a password manager, if you use one.
>
> **[1:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=102)** If you forget this passphrase, you won't be able to decrypt the partition, so your data will be stuck all scrambled up and out of your reach, which is what we want for people trying to get our data, but not for ourselves.
>
> **[1:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=113)** So be careful to remember your passphrase.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=117)** This partition is still pretty much like a regular partition, except that the contents are all encrypted.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=122)** So it'll show up in a partition manager, but we won't really be able to do much with it there.
>
> **[2:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=127)** And being a partition, we would still need to put a file system on it in order to use it.
>
> **[2:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=131)** So let's decrypt the partition, and put a file system on it.
>
> **[2:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=135)** To decrypt the partition, we can use cryptsetup, open, /dev/sdc2, and secret.
>
> **[2:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=148)** The open command tells cryptsetup to open up my partition, and then I'm giving it the path to the partition: /dev/sdc2 in my case.
>
> **[2:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=156)** And then I'm giving this a name that the device will be mapped to.
>
> **[2:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=161)** Dm-crypt, is part of the map or infrastructure, like LVM, giving us a virtual block device that we can use to communicate with the underlying partition, so Dm-crypt sits in between us and the actual storage, encrypting and decrypting information as it passes to and from our encrypted partition.
>
> **[3:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=180)** I'll type in my passphrase, and now we can see that the device is mapped.
>
> **[3:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=185)** At /dev/mapper, and here it is: secret.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=191)** So all we need to do is to create a file system of whatever type we need.
>
> **[3:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=196)** We could put a FAT32 file system in there if we wanted, and read it with LibreCrypt on Windows.
>
> **[3:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=201)** But we'll just make a regular ext4 file system here.
>
> **[3:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=205)** Alright, mkfs.ext4, /dev/mapper/secret.
>
> **[3:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=214)** There's nothing special about this file system.
>
> **[3:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=216)** It's not doing any encryption itself.
>
> **[3:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=218)** It's just a normal file system.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=220)** The encryption is happening at the partition level.
>
> **[3:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=223)** And now, we can mount that file system normally.
>
> **[3:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=226)** I'll create a folder in the mount directory, with mkdir/mnt/secure-drive.
>
> **[3:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=234)** And then I'll mount /dev/mapper/secret to /mnt/secure-drive.
>
> **[4:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=243)** And we can use it like any other partition.
>
> **[4:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=246)** When we're done with it, we can unmount it, but there's one more step to take.
>
> **[4:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=252)** We need to close the device with cryptsetup, close, and then use the name that we mapped earlier.
>
> **[4:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=262)** And now that's disconnected.
>
> **[4:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=264)** When we come back to mount this encrypted partition again, we'll need to use two commands.
>
> **[4:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=269)** Cryptsetup open with the path and the name, and then we'll need to mount the file system.
>
> **[4:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=275)** There's a lot you can do with Cryptsetup, like change the type of encryption that you're creating a partition with, or choosing to use or view the master key, adding another key and so on.
>
> **[4:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=284)** We can take a look at the information about the LUKS container, or partition, with cryptsetup, luksDump, and the path to the partition.
>
> **[4:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=298)** And here we can see information about the encryption, about the master key, and the key slots.
>
> **[5:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=305)** We can see here that we have one key slot taken up with information for our initial password.
>
> **[5:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-and-mount-an-encrypted-partition?u=76281980&t=311)** We can add more keys if need be with the Luks add key option, allowing someone else access to decrypt the volume without revealing our own password.

> [!info]- Semantic Content
>
> **Env Vars:** luks (2), stc2 (1), yes (1), lvm (1), fat32 (1)
> **Code Keywords:** new, (1), switch (1), this, (1), let (1), case. (1)
> **Prerequisites:** install (3), setup (1)
> **CLI Commands:** make (2), mkdir (1)
> **Code Identifiers:** luksformat (1), luksdump (1)
> **Warnings:** be careful (1)

#### Configure disk mounting
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=0)** - [Instructor] Rather than mounting a file system manually whenever we want to use it, we can tell the system to try to mount it when the system starts up instead.
>
> **[0:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=8)** To do that, we need to modify a file called the file system table, or fstab.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=14)** The format of this file is fairly particular.
>
> **[0:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=16)** So before we start modifying it, let's take a look at how it's set up.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=20)** In the file, there's a line for each volume that we want to have auto-mounted at boot.
>
> **[0:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=25)** The entries here can be mounted with the mount -a command later, if need be.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=30)** On each row, for each device, there are six categories of information that the system needs.
>
> **[0:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=35)** First is the file system, or the device that we want to mount.
>
> **[0:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=39)** This can be a device path or a UUID.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=43)** A UUID is generally preferred because it's more specific than a device descriptor that could change at startup, as devices are detected in a different order.
>
> **[0:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=51)** The next piece of information we need is the location in the root file system where we want the device to be mounted.
>
> **[0:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=58)** And then we need to tell the system what type of file system it should expect, so it can use the right driver to mount the volume.
>
> **[1:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=64)** After that are the options, which is an area that we can use to set some particular parameters about the volume.
>
> **[1:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=71)** Sometimes you'll want to set this to defaults, which, among other things, mounts the volume as read/write.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=76)** You could add others here too, like read-only, or one that's particularly useful with external drives, which will prevent the system from hanging at boot time, if it can't mount a given disk.
>
> **[1:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=87)** Dump and pass determine whether the disk will be available for the dump utility to back up, and the priority with which the file system will be checked automatically, if at all.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=96)** This can be zero, one, or two.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=99)** Zero disables automatic checking.
>
> **[1:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=101)** Usually we'll leave these both at zero.
>
> **[1:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=105)** Let's set the system to automatically mount my regular partition at boot time.
>
> **[1:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=110)** That one's on sdc1.
>
> **[1:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=112)** So let's take a look at the blkid command to get the UUID.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=117)** As I mentioned before, the system might not always detect and name devices in a repeatable way.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=122)** But this UUID will stay the same, regardless of whether the disk and partition that they're on, rsdb, sdc, or whatever.
>
> **[2:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=131)** This output also shows us the file system type, which we'll need as well, ext2.
>
> **[2:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=136)** I'll copy this UUID because it's pretty long.
>
> **[2:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=139)** I'll select it and then hit control-shift-C here in the terminal.
>
> **[2:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=144)** I'll open up the fstab file.
>
> **[2:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=149)** And then, down at the bottom, I'll make space for this new line.
>
> **[2:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=152)** I'll add UUID equals, and then paste the UUID with control-shift-V.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=159)** Remember, this could be the device path for a partition too, if you're sure that the path won't change.
>
> **[2:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=164)** In the next space, I'll put the path where we want to mount the device, in my case, /mnt/storage.
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=172)** This path needs to exist or you'll get an error.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=175)** After that, I'll put the type of the file system, ext2, in this case, and defaults for the options.
>
> **[3:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=183)** This is an external disk, so I'll also add nofail here, with a comma and no space, to tell the system that, if it can't find this device when it starts up, to keep going with the boot sequence instead of hanging.
>
> **[3:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=195)** That's a pretty common problem with home servers and things like that, where an external device might not be attached, causing the system to look like it's failed or not booting.
>
> **[3:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=203)** And then I'll put zero and zero for dump and pass.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=207)** No need to check this file system every boot.
>
> **[3:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=210)** And then I'll save this.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=211)** If you're in nano, that's control-O, enter, and then control-X to exit.
>
> **[3:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=216)** If I restarted my system, my volume would be mounted automatically.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=220)** Instead of doing that though, we can simulate what will happen.
>
> **[3:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=224)** I can make sure that this volume is not mounted, and then I'll run mount -a, to try to mount all of the file systems in the fstab file.
>
> **[3:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=234)** We'll check the disks again, and here's my volume.
>
> **[3:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/configure-disk-mounting?u=76281980&t=239)** That's what would happen during a boot as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), case, (2), type, (1), this. (1)
> **Env Vars:** uuid (7)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is an  (2)
> **Prerequisites:** before we start (1), set up (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Mount volumes on demand
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=0)** - [Instructor] Using the autofs package, we can tell the system to mount file systems on demand, rather than needing them to be mounted at boot time and having them always online.
>
> **[0:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=10)** We can install the autofs package with apt install autofs.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=22)** And when it's installed, it starts up a service called autofs.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=30)** In order to use autofs, we need to create a map file that tells it which mount to keep an eye on.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=37)** The master map file, located at /etc/auto.master, holds a listing of entries that effectively correspond to directories for mount points and configuration files for them.
>
> **[0:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=50)** These entries give us a path that we can use to mount various volumes as they are needed.
>
> **[0:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=54)** Let's make my other disk, sdb1, automatically mount when we need it, rather than keeping it mounted all the time.
>
> **[1:01](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=61)** To do that, I'll edit this auto.master file, to add a line with /misc, where I'll expect the device to be.
>
> **[1:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=69)** I don't want to use /mnt because I don't want autofs to take over my regular mount.
>
> **[1:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=75)** And then I'll provide a path to a file where I'll provide more information about the volume that will get mounted.
>
> **[1:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=80)** That's /etc/auto.misc, a file that already exists.
>
> **[1:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=84)** And so we'll use that.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=86)** I'll save this and exit.
>
> **[1:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=89)** And then I'll open up that auto.misc file, with nano /etc/auto.misc.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=96)** I'll move down here and add a few lines.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=99)** Let's call the device disk1.
>
> **[1:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=102)** And then I'll tab over here and specify the file system type, which in this case is vfat, because this is a fat32 disk.
>
> **[1:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=111)** You'd want to specify ext2 or ext4 if you're using one of those devices.
>
> **[1:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=116)** And then I'll tab over again, and I'll use a colon and then the path to the device, /dev/sdb1.
>
> **[2:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=124)** You can see the pieces of a mount command here, but they're kind of scattered around.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=128)** I'll save this and I'll quit.
>
> **[2:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=130)** Now because I've made changes to the configuration files, I need to restart the autofs service, with systemctl restart autofs.
>
> **[2:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=141)** And I'll make sure that my device isn't mounted.
>
> **[2:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=142)** I'll take a look at what I have here with df.
>
> **[2:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=145)** And if I need to unmount it, I could use umount for that.
>
> **[2:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=148)** So my device is unmounted.
>
> **[2:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=150)** And now I can use cd to go to the misc folder and the name of the disk.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=158)** And I'm in the file system.
>
> **[2:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=161)** Autofs mounted the device transparently.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=163)** And if I take a look at df -h, I can see that my device has been mounted here in /misc/disk1.
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=172)** And I could do the same thing for a remote mount too.
>
> **[2:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=175)** To use a CIFS mount, I could change the options in /etc/auto.misc to cifs, and specify a username and password, like in a regular mount command, and then set the path to the server and share after the colon.
>
> **[3:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=189)** If you were using NFS, you'd switch the protocol, of course.
>
> **[3:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/mount-volumes-on-demand?u=76281980&t=192)** And the name of the NFS server would go before the colon, with the export path after it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), apt (1), systemctl (1), cd (1)
> **Code Keywords:** let (2), type, (1), switch (1)
> **Env Vars:** nfs (2), cifs (1)
> **Prerequisites:** install (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reconfigure swap space
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=0)** - [Instructor] RAM is a limited resource, and so we need to deal with what happens when the system runs out of it.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=6)** Programs that are running consume RAM, and if we launch something else and there's no RAM left, what happens?
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=13)** Typically the system will look at the contents of the RAM and see what might be stale or lower priority, and then transfer that information to a specially designated kind of storage called swap.
>
> **[0:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=24)** Once the information's saved to disk, the space it took up in memory is cleared, opening it up for other programs to use.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=30)** If the information that was swapped or paged out to the disk is needed, the system can bring it back into memory.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=37)** Swap space can be configured either as a file or as a separate partition on the disk, and depending on how much memory you have and how frequently you expect your software to be fighting for memory space, you'll need to determine exactly how much swap space to provide.
>
> **[0:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=52)** A rule of thumb used to be to reserve two times the amount of RAM in your system for swap, and that still is probably a good rule for systems with two gigabytes or less of memory.
>
> **[1:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=62)** But over that, you probably want to have about four gigabytes of swap at a minimum, scaling up slightly as you go up.
>
> **[1:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=69)** A system with 64 gigs of RAM probably won't need 64 gigs of swap, but depending on the use case, it could.
>
> **[1:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=76)** Don't worry though, we can always change the swap space in order to more effectively tune the system.
>
> **[1:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=81)** In fact, we can even specify more than one place that's available for swap across different drives or devices.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=88)** If you're working to figure out how much swap to allocate, be sure to keep an eye on how much is being used, which you can see in various tool like top and free, and in the /proc/swaps files.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=99)** There are three tools specific to swap files that we'll use if we change the swap file.
>
> **[1:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=104)** Swapoff to disable swapping while we work with an existing space that's reserved for it.
>
> **[1:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=109)** Mkswap to make a swap space, either in a partition, volume or file.
>
> **[1:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=114)** And Swapon to turn swapping back on using the newly modified space.
>
> **[1:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=119)** Before we work with swap space on this system, let's take a look at the swaps information in proc to see where we currently have swap space and how it's being used.
>
> **[2:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=130)** I see that I have a swap partition here, sda5, and it's about four gigabytes.
>
> **[2:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=135)** And none of it's being used.
>
> **[2:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=137)** My system has four gigs of RAM, so I don't want to go below four gigs of swap.
>
> **[2:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=142)** Let's give the system eight gigs instead of four.
>
> **[2:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=145)** I have a bit of a situation here though.
>
> **[2:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=147)** This four gig partition is on the standard partition table, which means it would be a real hassle to resize it.
>
> **[2:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=153)** So I have two options if I don't want to repartition my drive or plug another one in.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=158)** I can use logical volume management to make a swap partition, which as you'll see in that chapter is pretty straight forward once you know how the tools work.
>
> **[2:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=165)** Or I can specify a file to use as a swap space instead of a volume or partition.
>
> **[2:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=171)** I have plenty of space on my root partition here, so let's do that.
>
> **[2:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=174)** If I were modifying my existing swap partition, I'd need to take it offline first with swapoff and the path to the swap device.
>
> **[3:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=183)** That action would move information from the swap space back into RAM, but only if there's enough RAM free, so you may need to close some programs or otherwise manage what's running.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=193)** If you have more free space in memory than what's in the swap, it won't be a problem.
>
> **[3:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=197)** While you can run your system without swap space, it's generally not a great idea if the system is doing anything that might conceivably end up needing a decent amount of RAM.
>
> **[3:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=206)** In any case, we don't need to do that right now because we'll be creating a new separate space for swapping.
>
> **[3:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=212)** I'll create a file that will hold pages swapped from memory by building a file full of zeroes in the size that I want to use, eight gigabytes.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=220)** And I'll put it in the var directory, which is fairly common, but you can put it anywhere that will be persistently available to the system.
>
> **[3:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=227)** It's best to put it on the fastest storage you have available to somewhat mitigate the speed difference between RAM and storage.
>
> **[3:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=234)** To create the file I'll write dd, if equals dev/zero.
>
> **[4:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=240)** Of, the output file, is going to be var/swapfile.
>
> **[4:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=249)** The block size is one gigabyte, and we'll do that eight times.
>
> **[4:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=256)** This file does need to be accessible to the system, so the root user need permission to use it, but nobody else does.
>
> **[4:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=262)** So let's set the permissions to read and write for root, and no access for anyone else.
>
> **[4:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=268)** Chmod 600, var/swapfile.
>
> **[4:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=274)** Oops, I need a space in there.
>
> **[4:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=278)** And now we can use the mkswap command to create the headers and other information that turn this file into a usable swap file.
>
> **[4:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=286)** Alright, mkswap /var/swapfile.
>
> **[4:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=291)** Now let's use the swapon command to add this swap file to the resources that the system knows about so it can start using it for swap if it's needed.
>
> **[5:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=304)** And if I take a look at my swaps again, I see it listed here along with my other partition.
>
> **[5:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=314)** We don't need to swap to that partition anymore so I'll write swapoff /dev/sda5.
>
> **[5:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=323)** And now the swap file is the only place that the system knows about to swap.
>
> **[5:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=328)** These changes will stick until the next reboot, because ultimately our swap partitions are mounted by the system via fstab, so we need to make these changes in our ETC fstab file in order to make them permanent.
>
> **[5:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=340)** I'll open up the fstab file.
>
> **[5:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=346)** And here I'll comment out the existing swap volume with the pound sign, and I'll add a line with the information about our new swap space.
>
> **[5:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=356)** That's in var/swapfile.
>
> **[6:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=360)** The amount point is swap, the file system type is swap, and I'll add defaults, zero, zero.
>
> **[6:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=369)** I'll save that.
>
> **[6:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=371)** And now if we were to reboot, these settings would become active.
>
> **[6:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=375)** We're not using the partition anymore, so we could go in and delete that, and grow the file system to make use of that extra four gigs if we wanted to.
>
> **[6:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/reconfigure-swap-space?u=76281980&t=382)** Or we could format it and keep it around for something important like cat pictures.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), var (5), case, (2), else. (1), delete (1)
> **Env Vars:** ram (11), etc (1)
> **CLI Commands:** make (5), chmod (1), cat (1)
> **Best Practices:** rule of thumb (1), it's best to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Create redundant storage with RAID
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=0)** - [Narrator] RAID, or a redundant array of independent disks, allows us to configure storage in such a way that data is written to more than one disk in an effort to increase reliability if an underlying disk has a problem.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=13)** Some RAID configurations are also able to read and write data faster than one individual device.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=20)** We describe various configurations of RAID arrays, or groups of disks, using a system of numbers.
>
> **[0:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=26)** RAID 0, sometimes called RAID Level 0, or striped, spreads one volume across two or more disks.
>
> **[0:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=33)** While this has a benefit in terms of available space, if one of the underlying disks experiences a problem, it can cause complete data loss for the whole volume.
>
> **[0:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=42)** In a RAID 0 setup, the disks don't need to be the same size.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=46)** RAID 1, on the other hand, writes the same data to more than one disk, effectively mirroring the disks.
>
> **[0:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=51)** This way, if one disk fails, there's still another copy.
>
> **[0:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=55)** With RAID 1, the disks need to be the same size.
>
> **[0:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=57)** If they're not, the resulting volume size will only be as large as the smallest disk, and all of the space on the other disks, outside of that size, will be effectively ignored or wasted.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=68)** RAID 2, 3, and 4 are arrangements of disks that aren't as widely used anymore for various reasons.
>
> **[1:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=74)** RAID 5 is fairly common and it takes three or more disks and distributes data and parity information across all of the disks.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=82)** Parity information is data that can check and reconstruct data that was stored on a disk that failed.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=88)** From this arrangement, we can lose, at most, one disk before information is permanently lost.
>
> **[1:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=93)** RAID 6 is similar to RAID 5, but it needs four disks and has additional parity information, so it can lose two disks before data loss occurs.
>
> **[1:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=103)** Disks in a RAID setup need to be the same size and we can calculate the approximate size of a RAID 5 or 6 array by adding together the capacity of all the disks and removing one for RAID 5, and two for RAID 6.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=117)** Of course, in reality we'll get a little bit less space than that, because both the overhead that the systems use to manage RAID and the actual file system structure take up a little bit of space on disks.
>
> **[2:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=127)** RAID management software keeps an eye on your array and informs you if there's a problem with the integrity of the array.
>
> **[2:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=134)** If there's a problem, the array enters a degraded state, and that's when you need to act to replace a disk.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=140)** The software is able to rebuild the array in the case of 1, 5, and 6, but again, you're out of luck if your RAID 0 array fails.
>
> **[2:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=148)** RAID doesn't care what's on the array.
>
> **[2:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=150)** It doesn't know about the files and folders, or whether you have a lot of empty space or a little.
>
> **[2:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=155)** When you set up an array, the software starts tracking the state of all the data blocks in the array and, in the case of RAID 5 and 6, calculating parity for them.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=163)** So an array can hold encrypted data just the same as data in a regular file system.
>
> **[2:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=168)** RAID doesn't care what your data is.
>
> **[2:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=171)** On Linux, you can use the MDADM tool to create and manage RAID arrays.
>
> **[2:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=176)** MD on Linux stands for multiple device, and MDADM, or the multiple device administration tool, can take raw disks, or partitions, and assemble them into various RAID configurations.
>
> **[3:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=187)** It then presents the array as a multiple device, like /dev/md0, ror /dev/md1, to the system, ready to use for a file system.
>
> **[3:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=195)** MDADM is available from the repositories, so you can install it, if it's not already installed, with apt-install MDADM.
>
> **[3:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=203)** Going to how RAID works, when we create a RAID volume, it'll take a while to resync, and for that reason, if you're experimenting, I'd recommend using small underlying volumes.
>
> **[3:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=213)** While I usually like to show how to use realistic scenarios, in this video, I'm going to fake it a little bit in the interest of time.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=220)** Rather than using three one-terabyte hard drives, or something like you might in the real world, I'm going to create three five-gig partitions on one device here.
>
> **[3:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=228)** Normally, you would use partitions on physically separate devices, so keep that in mind.
>
> **[3:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=233)** This will keep the resync time low enough that you won't have to go get a cup of coffee or 12 while you wait.
>
> **[3:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=239)** For this, I'll use my second disk, SDB, and I'll make sure that it's unmounted.
>
> **[4:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=246)** And then I'll use F disk to create three identical partitions.
>
> **[4:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=251)** I'll write fdisk /dev/sdb.
>
> **[4:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=254)** What have we got here? One partition.
>
> **[4:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=257)** Let's delete that, and create a new primary partition.
>
> **[4:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=262)** Number one of five gigabytes.
>
> **[4:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=268)** Another one, primary.
>
> **[4:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=270)** Number two.
>
> **[4:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=273)** Also five gigabytes.
>
> **[4:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=277)** And a third partition, primary, number three.
>
> **[4:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=282)** Five gigabytes as well.
>
> **[4:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=285)** Let's take a look at that, and it looks like what we want.
>
> **[4:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=288)** I'll write that, and I'll clear the screen.
>
> **[4:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=291)** Now, I'll install MDADM with apt install mdadm.
>
> **[5:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=303)** And now, I'll create an array.
>
> **[5:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=306)** I'll type mdadm --create --level=1
>
> **[5:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=313)** - -raid-devices=2 and the device name, /dev/md0.
>
> **[5:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=322)** And then, after that, I'll specify two disks: /dev/sdb1 and /dev/sdb2.
>
> **[5:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=331)** That'll make a RAID 1 mirror with two devices.
>
> **[5:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=334)** I'll say yes to continue creating the array, and I see that my array has started.
>
> **[5:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=340)** I can take a look at the status with mdadm--detail and the path to /dev/md0.
>
> **[5:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=351)** I can see the status of the resync which is the process where the RAID system is verifying that the data on the devices is consistent.
>
> **[5:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=359)** Remember, even though we haven't put any data on here yet, the RAID system is making sure that the blocks of data, whatever they are, are consistent between the devices.
>
> **[6:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=368)** When this process finishes, we'll be protected from one of these two devices failing.
>
> **[6:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=375)** Here on the detail view, I see the total size of the array, in this case, just about the same as the underlying disks, and how many devices are participating.
>
> **[6:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=385)** I can see the state, how many active devices there are, and if there are any failed devices.
>
> **[6:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=393)** And down at the bottom, I can see a little bit more detail about the individual devices in the array.
>
> **[6:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=399)** And I'll check again to see if it's done, and it looks like the resync is done.
>
> **[6:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=403)** Great, let's add a file system now to this array with mkfs.ext4 /dev/md0.
>
> **[6:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=415)** Let's make a mount point for the RAID with mkdir /mnt/myraid and then we'll mount it with mount /dev/md0 /mnt/myraid.
>
> **[7:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=430)** We can add some data to it as well with touch /mnt/myraid and we'll create 10 files.
>
> **[7:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=440)** And let's take a look at those files.
>
> **[7:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=441)** I'll do ls /mnt/myraid and there they are.
>
> **[7:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=447)** Now, let's say we have a failure on one of the two disks that are part of this mirror.
>
> **[7:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=452)** Let's say we get a message in the log that SDB1 has a problem.
>
> **[7:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=455)** So, we need to tell MDADM to remove it from the array, and we need to add another disk in there to preserve the integrity of our data.
>
> **[7:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=463)** To tell MDADM to remove this volume, I'll use the fail command.
>
> **[7:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=467)** I'll write mdadm --fail, the path for the array, /dev/md0, and then the path to the device that we want to remove, in this case, sdb1.
>
> **[8:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=482)** If we take a look at the details of the array now, with mdadm --detail /dev/md0, we can see that the state is degraded, that there is one active device and one failed device, and down here in the details, we can see that /dev/sdb1 is indicated as being faulty.
>
> **[8:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=504)** Because I told the array that this disk is failed, we can remove it and add a replacement.
>
> **[8:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=508)** To remove the disk from the array, I'll write mdadm --remove and the array path, /dev/md0 and /dev/sdb1, and to add the new disk in, I'll write mdadm --add, again, the path to the array and the path to the new device, /dev/sdb3, and of course our data is still here.
>
> **[8:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=539)** I'll list the my raid folder.
>
> **[9:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=543)** There's our files.
>
> **[9:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=545)** When I added the disk, it immediately started resyncing, and we can double check that with mdadm --detail /dev/md0.
>
> **[9:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=557)** I can see that the state now is recovering.
>
> **[9:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=560)** The rebuild will take a few minutes, just like it did before.
>
> **[9:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=564)** I'll check out the status of the array, and I can see now that it's rebuilt.
>
> **[9:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=568)** If we're done with the RAID volume, and need to destroy it for some reason or another, we need to take a few steps.
>
> **[9:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=574)** The first is to unmount the volume with umount and then the path to the device, in this case I'll use /mnt/myraid, and then we need to tell MDADM to stop the array.
>
> **[9:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=587)** I'll write mdadm --stop /dev/md0, and then we can tell MDADM to remove the array.
>
> **[10:01](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=601)** And now there's no more volumes spanning these disks.
>
> **[10:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=603)** They're still marked as members of a RAID set though.
>
> **[10:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=606)** So, to fully restore them to unused partitions, we'll tell MDADM to zero the super block, where the information about what kind of device they are is stored.
>
> **[10:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=615)** I'll write mdadm --zero-superblock /dev/sdb1, /dev/sdb2, and /dev/sdb3, all of the devices that were participating in our array.
>
> **[10:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=633)** We could use a similar approach to make a RAID 5 or RAID 6 array too, switching the RAID level we set, the number of RAID devices, and the actual devices that we're adding to the array.
>
> **[10:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/create-redundant-storage-with-raid?u=76281980&t=645)** If you're adding more than the minimum number of disks, you tell MDADM about that with the RAID devices argument.

> [!info]- Semantic Content
>
> **Env Vars:** raid (37), mdadm (11), sdb (1), sdb1 (1)
> **Code Keywords:** let (7), case, (2), this, (1), delete (1), continue (1)
> **CLI Commands:** make (4), apt (2), mkdir (1), ls (1)
> **Prerequisites:** install (4), setup (2), configure (1), set up (1)
> **Analogies:** similar to (1), just like (1)
> **Definitions:** stands for (1)
> **Speakers:** - [narrator] (1)


### 2. Logical Volume Management

#### Understanding LVM
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=0)** - LVM, or logical volume management, is a system for disc management that gives us some benefits over traditional partition management.
>
> **[0:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=8)** It uses regular partitions on disks, but on top of the partitions, it creates a management system of volumes or rather, physical volumes, volume groups and logical volumes.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=19)** Those allow us to configure storage in a more flexible way and we can enjoy some benefits like the ability to fairly easily manage redundant storage and to resize volumes as needs change.
>
> **[0:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=31)** With a traditional partitioning scheme we could create as many partitions as we'd like on one disk but the total available space would be limited by the size of the individual disk, whether it's one partition or more.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=43)** If we needed more space we'd need to add another disk with another file system and figure out which data to put where.
>
> **[0:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=50)** With LVM, each disk can host one or more physical volumes, or PVs, in a partition which you can kind of think of like virtual drives.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=60)** Usually we'll have one physical volume per actual disk.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=63)** These physical volumes are grouped into what's called a volume group, or VG.
>
> **[1:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=68)** And again, we can have more than one of these groups, and a group can contain one or more physical volumes.
>
> **[1:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=74)** This volume group gives us the resources to create one or more logical volumes within it, and these logical volumes can hold file systems.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=82)** The physical and logical volumes are divided into units that are called extents, or chunks of blocks that we can use for data storage.
>
> **[1:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=90)** Because the logical volume manager is handling where the data is stored and how, using these extents that map to extents on physical volumes, we can move space around independently of how it's divided on our actual physical disks.
>
> **[1:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=104)** We can span a volume across many hard disks or configure the volumes so they act like RAID and provide some redundancy in the case of some kind of failure in our physical hardware.
>
> **[1:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=114)** We can also use LVM to extend a volume to a new hard drive and even shrink it back to remove an old hard drive from the system without having to back up and restore data.
>
> **[2:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=124)** And logical volumes let us create snapshots for easy backups and other tasks.
>
> **[2:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=129)** The LVM tools are available in the package called LVM2, so if you don't have them installed, run apt install lvm2 to make sure you have them.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=140)** There are a lot of tools that we'll need when working with LVM and it can get overwhelming, but they really break down into a pretty organized system.
>
> **[2:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=147)** For working with each kind of entity, a physical volume or a volume group, or a logical volume, there are different actions that each have their own command.
>
> **[2:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=155)** There are some missing, for example, you can't extend or reduce a physical volume.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=159)** But otherwise, things line up in a pretty sensible way.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=163)** I have two external disks attached to my system here, both equally sized.
>
> **[2:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=168)** Let's take a moment and make sure we clean those off, removing any partitions we don't need going forward.
>
> **[2:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=173)** Of course, this may be different on your system so be careful not to delete anything important like your data or your boot volume.
>
> **[3:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=180)** Here on my system, I'll run fdisk /dev/sdb delete the partition and write the change.
>
> **[3:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=192)** And I'll run fdisk again for dev/sdc and delete both of these partitions.
>
> **[3:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=202)** If you're prompted to reboot to change the partition table, do that.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=207)** Now with my system rebooted, let's take a look at the devices again with lsblk.
>
> **[3:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=211)** And there we go.
>
> **[3:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=212)** I've got two disks with no partitions on them.
>
> **[3:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=215)** To explore using LVM, we'll look at creating an LVM volume on one of the disks, and then extending it to the second to get more space.
>
> **[3:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/understanding-lvm?u=76281980&t=223)** And then we'll see how to migrate the data from the first physical volume to the other so we can affect and upgrade or remove an old disk from the system.

> [!info]- Semantic Content
>
> **Env Vars:** lvm (7), raid (1), lvm2 (1)
> **Code Keywords:** let (3), delete (3)
> **Prerequisites:** configure (2), install (1), make sure you have (1)
> **CLI Commands:** make (2), apt (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - lvm (1)

#### Creating a physical volume, volume group, and logical volume
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=0)** - [Instructor] To start out with, let's take a look at a diagram of what we'll actually be doing when we create one volume on one disk with LVM.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=7)** We have the actual disk, and then we'll create a partition and a physical volume on top of that.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=13)** We'll add that physical volume to a volume group and then on the volume group, we'll create a logical volume and add a filesystem on top.
>
> **[0:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=22)** Here at the command line, the first thing we need to do is make sure we have a nice, clean disk.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=27)** LVM can create a volume on a whole disk device but it's recommended that you create a partition for the whole disk and then use that for your physical volume.
>
> **[0:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=35)** So I'll jump into fdisk here for /dev/sdb and make sure that this volume only has one partition.
>
> **[0:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=44)** And I'll set the partition type to GPT as well.
>
> **[0:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=48)** There's my GPT disklabel, and then n for new partition, number one, and accepting the defaults to make the full size.
>
> **[0:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=56)** I'll write this change.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=60)** Now we need to create a physical volume.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=63)** To do that, I'll use the pvcreate command followed by the path to my partition, /dev/sdb1.
>
> **[1:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=71)** This sets the partition type to LVM member and it may prompt you to replace an existing partition type.
>
> **[1:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=77)** This sets up the structures that are needed to let this volume participate in LVM.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=82)** Doing this will replace anything that's already in the partition.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=86)** The extents, the units that we'll be working with in LVM are four megabytes by default.
>
> **[1:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=90)** If you need to change the extent size, you can, but for now, we'll leave it at the default.
>
> **[1:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=96)** You can explore the man pages to see all of the advanced options that are available in case you need to make specific changes, with man pvcreate.
>
> **[1:54](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=114)** So now that we have a physical volume and I can double check that with the pvdisplay command, which shows me information about physical volumes on the system or I can use the pvs command for a little bit more of a compact report.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=128)** We need to get this physical volume into a volume group so we can use it to create a logical volume.
>
> **[2:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=133)** To create a volume group, I'll write vgcreate and name for the volume group.
>
> **[2:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=138)** In this case, I'll call it mygroup.
>
> **[2:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=142)** And then the path to any physical volumes that we want to be part of this group.
>
> **[2:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=146)** In this case, /dev/sdb1.
>
> **[2:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=149)** And if I were creating a group with more than one physical volume, I'd just add them on the end of this command after running pvcreate on each of them.
>
> **[2:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=157)** I can run the vgdisplay command to find out more about my new volume group.
>
> **[2:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=162)** Now we need to create a logical volume.
>
> **[2:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=165)** And remember, logical volumes are expressed in terms of extents.
>
> **[2:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=168)** If we had, say 2,000 extents on one physical volume and 1,000 on another, we could make a logical volume that's 3,000 extents or two logical volumes, each with 1,500, and so on.
>
> **[3:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=180)** And LVM will take care of mapping the logical extents to physical extents.
>
> **[3:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=184)** So I'll take a look at how many physical extents I have to work with here in my volume group.
>
> **[3:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=189)** And that's right here, Total PE.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=191)** In my case, it's 29,615.
>
> **[3:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=195)** I can see some other information about my volume group here, and if I wanted a shorter listing, I could use the vgs command.
>
> **[3:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=203)** We have a few options for setting the size of a volume when we use lvcreate.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=207)** The -L option followed by a size,
>
> **[3:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=210)** - l followed by a percentage of either the volume group size or of the free space.
>
> **[3:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=216)** For example, 100%VG would use the whole volume group and 100%FREE would use 100% of whatever space is left, if there's already something taking up some of the space in the volume group.
>
> **[3:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=228)** So, 70%VG would make a volume with 70% of the available space, and then 100%FREE would use up the remaining 30%.
>
> **[3:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=237)** We can also use -l with a number of extents.
>
> **[4:01](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=241)** It's a little more precise than the other options but depending on your use case, you can choose how you want to specify the size.
>
> **[4:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=248)** If you need an exact amount of gigabytes, for example, you can set it that way, but you may end up with a few unused extents in the group, and there's nothing wrong with that.
>
> **[4:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=257)** I want to make a logical volume that uses all of the extents in this group, so I'll write lvcreate -l 29615, which is the total physical extents that I have available in my group.
>
> **[4:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=272)** Then I'll use the -n option to set a name and I'll call this mydata.
>
> **[4:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=278)** And then I'll provide the name of the volume group that I want to use, mygroup.
>
> **[4:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=284)** There we go.
>
> **[4:45](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=285)** We can take a look at the information about the logical volume with lvdisplay or I could use the lvs command to see a quick listing.
>
> **[4:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=296)** LVM makes the volume available in the /dev/mapper folder, named with the group name, dash, the volume name, but we can also treat this as any regular partition in the dev folder too.
>
> **[5:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=313)** We'll see the device show up in the dev folder with the group name.
>
> **[5:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=319)** And within that, there's my logical volume.
>
> **[5:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=322)** Let's create an EXT for filesystem here with mkfs.ext4 and then the path to the device.
>
> **[5:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=329)** We could either use the mapper or the device notation.
>
> **[5:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=332)** I'll use the device notation, /dev/mygroup/mydata.
>
> **[5:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=339)** And there we go.
>
> **[5:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=340)** We have a filesystem that we can use for storage.
>
> **[5:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=343)** Let's mount it and add some data to it.
>
> **[5:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=350)** I'll create a folder inside my mount folder, mkdir /mnt/ and we'll call this one myvolume.
>
> **[5:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=359)** Then I'll mount with mount /dev/mygroup/mydata to /mnt/myvolume.
>
> **[6:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=369)** And we'll take a look at df to see that it's there.
>
> **[6:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=373)** Here it is.
>
> **[6:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=375)** Let's set a couple files to it with touch /mnt/myvolume/file and we'll create 10 files.
>
> **[6:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=391)** All right, we've got some files on our filesystem inside a logical volume sitting on top of a physical volume.
>
> **[6:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=397)** Let's take a look at the diagram from earlier and line up the things we just created with it.
>
> **[6:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=403)** Starting with the disk that was sdb and on that we made a partition called sdb1.
>
> **[6:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=409)** We made that partition a PV or a physical volume, which is also called /dev/sdb1, and it has a UUID of its own too.
>
> **[6:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=417)** We added that PV to a volume group called mygroup and within that, we created a logical volume called mydata.
>
> **[7:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/creating-a-physical-volume-volume-group-and-logical-volume?u=76281980&t=425)** And finally, within mydata, we have a filesystem that we can mount and work with on the system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (4), default. (2), type. (1), finally, (1)
> **Env Vars:** lvm (7), gpt (2), free (2), ext (1), uuid (1)
> **CLI Commands:** make (7), find (1), mkdir (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1), - l (1)
> **Tools:** command line (1)
> **Best Practices:** recommended (1)

#### Extending a volume group and logical volume
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=0)** - [Instructor] Let's take a look at extending a logical volume and its file system.
>
> **[0:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=4)** We'll add a new disk and create a new partition.
>
> **[0:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=7)** And, in that partition, I'll create a new physical volume.
>
> **[0:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=11)** Then we'll extend the volume group to include the new physical volume.
>
> **[0:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=15)** And we'll extend the logical volume to take up the space that's available.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=19)** Then we'll extend the file system to be able to take advantage of this new space.
>
> **[0:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=23)** Here, I've got my file system that's about 114 gigabytes.
>
> **[0:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=28)** And I want to effectively double that space.
>
> **[0:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=31)** Right now, if I take a look at the volume group with vgdisplay, I can see that I currently have one PV and that one is active.
>
> **[0:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=41)** And the volume group size is about 115 gigabytes.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=46)** Taking a look at my phsyical volumes with pvdisplay, I can see I have one, the one that we just added, called sdb1.
>
> **[0:55](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=55)** In order to add my other disk, I'll need to make sure that there's a partition, so I'll do that with fdisk /dev/sdc.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=63)** And I'll create a partition.
>
> **[1:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=66)** I'll save the changes, and then I'll use pvcreate and the path to that partition, /dev/sdc1 to create a physical volume.
>
> **[1:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=78)** Now I'll add this to my volume group, by extending the volume group to include this physical volume.
>
> **[1:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=83)** For that, I'll use vgextend and the name of my group and the new PV, /dev/sdc1.
>
> **[1:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=95)** Now if I check out my PVs with pvdisplay, I can see I have two of them.
>
> **[1:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=101)** And if I take a look at my volume group with vgdisplay, I can see that I currently have two PVs and two of them are active.
>
> **[1:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=112)** My total physical extents are about 59,000 now.
>
> **[1:56](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=116)** Half of those are allocated but half of them are free.
>
> **[2:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=120)** At this point, I could create a new logical volume with this unused space.
>
> **[2:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=124)** Or I could extend the existing volume to use these new extents.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=128)** Let's extend the existing logical volume.
>
> **[2:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=131)** I'll do that with the lvextend command, dash, lowercase l, and then plus, and the number of extends, in my case, 29,615.
>
> **[2:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=143)** And then I'll give the path to the logical volume that I want to extend, /dev/mygroup/mydata.
>
> **[2:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=151)** Again, you could use a size specification here too, but that's inexact and will leave you with a handful of unused extends.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=158)** But it's up to you.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=159)** If nice round numbers are your thing, go for gigabytes.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=163)** Our logical volume is larger now, as we can see with lvdisplay.
>
> **[2:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=169)** It's 231 gigabytes, whereas before, it was 115.
>
> **[2:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=173)** And now we need to extend the file system to take advantage of that new space.
>
> **[2:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=179)** Right now, it's 114 gigabytes.
>
> **[3:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=182)** And we can change that, using all the new space available in the logical volume, with resize2fs.
>
> **[3:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=190)** I'll give the path to my logical volume, /dev/mygroup/mydata, and now it's resized the file system.
>
> **[3:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/extending-a-volume-group-and-logical-volume?u=76281980&t=199)** If I take a look at my disks again, I can see that, now, it's 228 gigabytes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), extends (2), case, (1)
> **CLI Commands:** make (1)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)

#### Migrating and replace a physical volume
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=0)** - [Instructor] Once we have a volume group with physical volumes in it, we can retire a disk and move it's data to a new one.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=6)** To do that, we need to add a new drive and create a partition and a physical volume on it.
>
> **[0:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=11)** We know how to do these things already.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=13)** Then, we need to add it to the volume group, and we know how to do that too, but now instead of extending the logical volume to consume this new space, we need to tell LVM to move the data from our old drive somewhere else in the pool.
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=27)** For that, we can use the pvmove command.
>
> **[0:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=30)** We have two options here.
>
> **[0:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=31)** We can either tell pvmove to move all of the extents from the old physical volume to the new physical volume, or we can specify the old physical volume and LVM will just take care of moving extents off of the old physical volume, and figure out where to put them across the volume group.
>
> **[0:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=47)** The pvmove command takes a very long time to move data between devices, and that's why I'm not going through it interactively here, and if you need to migrate a physical volume, you want to make sure that you have enough time to run the command, and that it won't be interrupted.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=60)** Otherwise you can lose data.
>
> **[1:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=62)** As always, it's a good idea to back up data on volumes you're using before making any kind of potentially damaging change.
>
> **[1:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=69)** Once the pvmove process is finished, you can remove the old physical volume from the volume group with vgreduce, and then your old disk can be removed from the system safely, of course.
>
> **[1:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=79)** Before removing it, you can use the pvremove command to remove the LVM headers and information, putting the disk back into a clean state.
>
> **[1:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=88)** You'd want to do that if you're reusing the drive, but if the disk you're using failed, it doesn't really matter if your remove the physical volume information, or if you let the drive crushing machine do it for you.
>
> **[1:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=98)** This is an example of how LVM gives us much more flexibility.
>
> **[1:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/migrating-and-replace-a-physical-volume?u=76281980&t=101)** Except for performance reductions during the pvmove process, the file system has been online and available for use this whole time.

> [!info]- Semantic Content
>
> **Env Vars:** lvm (4)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Filesystem Security and Backups

#### Access control lists (ACLs)
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=0)** - [Instructor] Standard Linux permissions can be extended with ACLs or access control lists.
>
> **[0:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=5)** ACLs let us specify access to a file for individual users and groups, outside of the regular owner, group, others approach.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=13)** Say you had a user who needs read/write access to a file that's owned by a group that they're not part of.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=19)** Since our user is not the owner of the file, or a member of the group that owns the file, and we don't want to open up read/write access to others, what can we do?
>
> **[0:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=27)** With a file access control list, we can explicitly say that our user is granted permissions to the file.
>
> **[0:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=34)** Let's take a look at this, at the command line.
>
> **[0:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=36)** I'll create a file here with the touch command.
>
> **[0:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=39)** I'll say touch a_file.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=43)** And I can look at the permissions for this file with the getfacl command and the filename.
>
> **[0:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=51)** I can see that the owner and group are listed here, as well as the user, group, and other permissions.
>
> **[0:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=57)** My regular user wouldn't have access to change this file.
>
> **[1:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=60)** I'll switch to that user with su scott.
>
> **[1:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=65)** And I'll try to edit the file, nope, no write permission.
>
> **[1:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=71)** I'll exit back to my root shell.
>
> **[1:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=72)** And I'll use the setfacl command, with -m for modify.
>
> **[1:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=79)** And then I'll write u for user, colon, the username I want to give permissions, colon, and the permissions I want them to have, in this case, read and write.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=91)** And then I'll add the filename.
>
> **[1:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=94)** You can use the g option and a group name here too, if you want to change the access for a group.
>
> **[1:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=100)** Now if I take a look at the permissions with getfacl, I see there's a new line here with the username.
>
> **[1:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=110)** I can also see an indication that this file has an ACL when I use ls to look at a folder.
>
> **[1:57](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=117)** This plus character here indicates that a file has an ACL.
>
> **[2:02](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=122)** Let's switch back over to my user and see about editing this file.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=128)** I'll write nano a_file.
>
> **[2:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=131)** And now I don't have a warning about not having write access.
>
> **[2:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=136)** I can make changes.
>
> **[2:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=138)** I'll save that and exit.
>
> **[2:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=140)** And I'll go back to my root shell.
>
> **[2:23](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=143)** We could add more users with specific permissions here.
>
> **[2:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=146)** And we can remove special permissions by name with the -x flag.
>
> **[2:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=150)** I could write setfacl -x and the username, and then specify a file to move that user's ACL from.
>
> **[2:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=159)** And now my user wouldn't be able to edit the file any more.
>
> **[2:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/access-control-lists-acls?u=76281980&t=163)** ACLs give us some flexibility that the standard permission model doesn't, so be sure to keep them in mind when you're designing or troubleshooting permissions for your system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (2), this, (1), case, (1), from. (1)
> **Env Vars:** acl (3)
> **CLI Commands:** ls (1), make (1)
> **Code Identifiers:** a_file (2)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **UI Navigation:** switch to (1)
> **Warnings:** warning (1)

#### Exploring disk quotas
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=0)** - [Narrator] On a Lennox system, we can set a specific amount of space that users are allowed to consume.
>
> **[0:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=5)** This is called a quota.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=6)** We can enable it on specific file systems where we want to limit how much space any individual user or group can use.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=14)** There's a few steps to getting a quota set up.
>
> **[0:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=17)** First we need to install the quota software if it's not installed.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=20)** And then we need to mount our file system with support for quotas.
>
> **[0:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=24)** They're disabled by default, so we need to edit our fstab file or autofs map to request support for quotas.
>
> **[0:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=31)** Then, we need to create the tables and files that the quota system needs in order to work.
>
> **[0:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=36)** After that, we need to specify what our quotas will be.
>
> **[0:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=41)** First, I'll install quota with apt install quota.
>
> **[0:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=49)** Then, I need to make sure that I have a partition mounted with quota support.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=53)** As I mentioned, I could do that in the fstab file if I wanted it to happen automatically.
>
> **[0:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=59)** I have a volume mounted here from before, my lvmvolume.
>
> **[1:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=63)** Let's use that.
>
> **[1:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=64)** You could use a different volume if you wanted to.
>
> **[1:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=67)** Oh, un-mount that with umount, mnt, myvolume.
>
> **[1:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=72)** Then here, just temporarily, I'll use mount with the -o option to specify options.
>
> **[1:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=79)** I'll put in the option quota.
>
> **[1:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=82)** If I wanted to use group quotas too, I could specify group quota to enable that, but we'll stick with user quotas for now.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=91)** Then, I'll mount this volume just like normal.
>
> **[1:39](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=99)** Alright, the next thing I need to do is to use the quota check tool to create the files that quota needs on my storage system.
>
> **[1:47](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=107)** I'll do that with quotacheck -c, and the paths to my volume.
>
> **[2:01](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=121)** This creates a file, the user quota file, right at the root of the volume.
>
> **[2:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=126)** Now that we have the files we need on this volume, we can use the edquota command with the username to actually set a quota.
>
> **[2:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=133)** If I use the -g option with edquota, I could give it a group name instead.
>
> **[2:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=138)** Things are the same between users and groups in terms of setup.
>
> **[2:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=141)** I'll use my normal user for this.
>
> **[2:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=144)** This table shows the file systems where there are quotas enabled, and what the usage and quotas are for this user on them.
>
> **[2:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=153)** This first column here shows how many blocks the user is taking up already on the file system.
>
> **[2:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=158)** Zero right now because this is a brand new file system.
>
> **[2:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=161)** The next two columns are the soft and hard quota limits.
>
> **[2:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=168)** The soft limit is a number where the user will get a warning, but they can still continue to create files up until the hard limit where the system actually prevents them from consuming any more space.
>
> **[2:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=178)** We can express these limits in blocks, but just in case you're not a wiz at dividing by 4,096 or whatever your block size is set to, we can use binary units in here as well, megabytes, gigabytes, and so on.
>
> **[3:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=191)** Let's set a soft limit of one gigabyte and a hard limit of two gigabytes.
>
> **[3:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=200)** These other columns relate to iNotes and describe how many iNotes a user is currently using on the file system, and what the hard and soft limits are there.
>
> **[3:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=208)** You could set limits for iNotes if you want to control the number of files that a user can create.
>
> **[3:34](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=214)** I'm going to leave these at zero, which represents no limit because that's not something that I'm interested in controlling.
>
> **[3:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=220)** Okay, I'll save this and it'll be added to the quota table.
>
> **[3:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=224)** I can check to see if the quota is turned on with quotaon -pa.
>
> **[3:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=230)** To enable the quota for a volume, I type quotaon and the path to the file system where I want to enable quotas.
>
> **[3:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=239)** In this case mnt, myvolume.
>
> **[4:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=243)** I'll check again quotaon -pa, and there we go.
>
> **[4:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=248)** User quota is turned on.
>
> **[4:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=252)** Alright, let's make sure that my user can access the storage volume.
>
> **[4:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=256)** I'll write chmod, 777, mnt, myvolume.
>
> **[4:22](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=262)** Then, I'll switch over to that user.
>
> **[4:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=269)** I'll go to that path, and now let's create some files and see what happens when I hit the soft limit and the hard limit.
>
> **[4:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=277)** I'll write fallocate -l, and create a 500 megabyte file called myfile1.
>
> **[4:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=286)** Then, let's take a look at the quota information for my user.
>
> **[4:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=291)** So far, so good.
>
> **[4:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=292)** I'm below my quota with 512,00 blocks used, out of a soft limit of a million, and a hard limit of about two million.
>
> **[5:01](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=301)** This is in blocks and we can use the -s option to see numbers that are a little bit more human friendly.
>
> **[5:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=307)** I'll recall my previous command and change to myfile2, and add another file.
>
> **[5:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=313)** We'll take a look at the quota, and I'm getting close to the soft limit.
>
> **[5:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=318)** We'll recall that command again to create file3, and let's check the quota again.
>
> **[5:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=325)** I'm over the limit, and I can see that because there's an asterisk here.
>
> **[5:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=331)** It's still letting me create files even though I'm over the soft limit.
>
> **[5:35](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=335)** This will also flag for the report we'll take a look at in a moment.
>
> **[5:38](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=338)** We don't have any bells going off or a pop-up notification or anything when I hit he soft limit.
>
> **[5:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=344)** These kinds of quotas are meant to be self-monitored or monitored by an administrator on an on-going basis.
>
> **[5:49](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=349)** If you implement quotas on your system, you'll need to check them and encourage users to check them and manage their files periodically.
>
> **[5:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=358)** I'll recall my fallocate command and create my file4.
>
> **[6:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=363)** How are we doing on that quota?
>
> **[6:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=365)** Ah, pretty close.
>
> **[6:07](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=367)** I'll create one more file, and I've hit the hard limit.
>
> **[6:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=371)** Let's take a look at my files.
>
> **[6:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=375)** This last file got chopped off when it hit the hard limit.
>
> **[6:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=381)** I'll take a look at my quota again, and I can see that my space consumed is the same as the hard limit.
>
> **[6:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=387)** I won't be allowed to consume any more space on this volume.
>
> **[6:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=390)** If there are other volumes that I have access to, and I'm below quota on those, or if they don't have quotas, I can still write files there, but not on this one.
>
> **[6:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=400)** I'll exit back to my root user here.
>
> **[6:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=402)** Let's take a look at the reporting from the administrator side.
>
> **[6:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=406)** For that, there's the repquota command.
>
> **[6:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=410)** The -a option will show me information about all file systems with quotas, and s returns the numbers in a human readable format.
>
> **[6:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=419)** In this report, a plus sign indicates that I've hit the user limit.
>
> **[7:03](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=423)** If you enable quotas, it's a good idea to monitor them.
>
> **[7:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/exploring-disk-quotas?u=76281980&t=426)** And, you could put this repquota command into a Cron job or something so you get daily, weekly, or monthly reports.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), default, (1), this. (1), continue (1), switch (1)
> **Prerequisites:** install (3), set up (1), setup (1), you'll need (1)
> **CLI Commands:** make (2), apt (1), chmod (1)
> **Code Identifiers:** inotes (3)
> **Definitions:** is a  (2), is called (1)
> **UI Navigation:** go to (1)
> **Analogies:** just like (1)
> **Warnings:** warning (1)

#### Diagnosing file access issues
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=0)** - [Instructor] Tracking down problems that users or services are having, can often come down to permissions issues.
>
> **[0:06](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=6)** Sometimes permission issues are easy to identify.
>
> **[0:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=9)** If you get a log message or other error that points you in the right direction.
>
> **[0:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=13)** Otherwise you'll need to do some detective work and figure it out.
>
> **[0:16](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=16)** A good place to start is with the file ACL tool, get F-A-C-L or getfacl, which will list both the permissions and access control lists for a file or folder which may tell you what you need to know to solve a permissions problem.
>
> **[0:29](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=29)** From there you can work to figure out whether a user or a program is being prevented access through explicit permissions or through group membership.
>
> **[0:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=37)** And if everything looks good, be sure to check the permission structure of the path to wherever you're looking.
>
> **[0:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=43)** Remember that listing a folder needs execute permissions.
>
> **[0:46](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=46)** Remember too, if you move a disk full of data from one machine to another, you might encounter strange permission problems.
>
> **[0:53](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=53)** Permissions are stored and calculated with the ID number of groups and users, not the name.
>
> **[0:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=58)** So whoever was user 1002 on the previous system, may not be user 1002 on the new system.
>
> **[1:05](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=65)** Keep in mind that while copying a file applies default permissions at the destination, moving a file keeps the same permissions.
>
> **[1:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=72)** And if you're using an additional security model like AppArmor or SELinux, be sure to check the profile or context of files being used with the program.
>
> **[1:21](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=81)** Though files are tagged correctly, their security system may not be able to allow access.
>
> **[1:26](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=86)** Check your logs for AppArmor complaints or SELinux policy violations.
>
> **[1:31](https://www.linkedin.com/learning/ubuntu-linux-storage-management/diagnosing-file-access-issues?u=76281980&t=91)** These should give you information about a misbehaving policy or a context problem.

> [!info]- Semantic Content
>
> **Env Vars:** acl (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Backing up data
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=0)** - [Narrator] To help reduce the chances for data loss, it's always a good idea to have backups, but designing and using a backup isn't a one size fits all kind of thing.
>
> **[0:09](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=9)** So there's a couple of different approaches to backing up information that we need to consider.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=14)** What's most important to keep in mind is the strategy and philosophy of backing up information.
>
> **[0:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=20)** We want information to be safe from loss and that loss can be physical rather than just digital so it's critical to keep a copy of important information in a separate physical location than the original data in case something terrible happens to your office or data center and damages all of the hardware.
>
> **[0:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=36)** It's no good to only have a backup in the same bag as the laptop if the bag gets stolen.
>
> **[0:41](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=41)** And to guard against digital loss like accidental erasure or even ransomware, a backup should also be disconnected from the network or the internet.
>
> **[0:50](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=50)** Of course, we'll need to update this backup.
>
> **[0:51](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=51)** So periodically, we'll need to bring the backup to us or send the backup away or connect to the backup electronically.
>
> **[0:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=59)** Enterprises accomplish this by sending backup tapes to a secured location every now and then.
>
> **[1:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=64)** And in a smaller setting, you can designate a hard drive or two as your off-site backups and take them to a safe place after the backup has been made.
>
> **[1:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=72)** We need to think about where information from individual computers or servers is copied.
>
> **[1:17](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=77)** We could plug in an external disk to each of our systems and configure a script or some software to back up important information to it.
>
> **[1:24](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=84)** And then we could collect the disks and lock them away and repeat this process at some interval to make sure that our backups aren't too far out of date.
>
> **[1:32](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=92)** But that's not very practical for more than a handful of computers if it's even something we'll remember to do.
>
> **[1:37](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=97)** So we can configure our systems to back up to a central file storage location instead.
>
> **[1:42](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=102)** We also need to back up the backup since now we have a single point of failure in our backup system.
>
> **[1:48](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=108)** Periodically, we should either make full or incremental backups of the storage on the backup server and secure the copies appropriately in case anything ever happens to the server.
>
> **[1:58](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=118)** Having this kind of local backup also allows us to quickly restore files for clients without requesting tapes from the archive and also satisfies the offline and remote backups as well.
>
> **[2:08](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=128)** But what software do we use to make and restore these backups?
>
> **[2:12](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=132)** Again, it depends on the size and scale of your system.
>
> **[2:15](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=135)** You could write a Cron job that uses tar to archive files and then rsync them to another location or you can invest in enterprise-level backup software that handles a lot of the tedious stuff for you and there are options in between as well.
>
> **[2:28](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=148)** And finally, what do we back up?
>
> **[2:30](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=150)** You certainly could take full images of all of your systems, but that consumes space really quickly and full image restores don't always play nicely with machines that are different from their original.
>
> **[2:40](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=160)** So it's usually a better idea to target the backups more specifically.
>
> **[2:44](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=164)** If you're in an environment where your machines are built from predetermined images, you may not need to back up anything other than actual user files.
>
> **[2:52](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=172)** Ideally, your machine management system will be able to install the operating system and necessary software in the case of a failure.
>
> **[2:59](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=179)** This can be an effective strategy if you make sure users keep everything in their home folders.
>
> **[3:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=184)** If they're using other resources like a shared file server, it's important to back that up as well from the backend.
>
> **[3:10](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=190)** That is, make sure that that server is backing up itself.
>
> **[3:13](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=193)** Don't try to backup data accessed over the network in the local computer's backup.
>
> **[3:18](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=198)** You should also consider how to back up servers.
>
> **[3:20](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=200)** You may need to consider the state of databases and caches in your backups, but that will be determined by what the servers are doing.
>
> **[3:27](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=207)** File system snapshots and things like that can help us keep data stable enough to back up periodically.
>
> **[3:33](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=213)** It's also critical that you test your backups.
>
> **[3:36](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=216)** You need to make sure that the backup is happening, that the correct data is being backed up, and that it can be successfully restored where it needs to be.
>
> **[3:43](https://www.linkedin.com/learning/ubuntu-linux-storage-management/backing-up-data?u=76281980&t=223)** Otherwise, there's no point in backing up in the first place.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6), tar (1)
> **Prerequisites:** configure (2), install (1)
> **Code Keywords:** finally, (1)
> **Best Practices:** remember to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ubuntu-linux-storage-management/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ubuntu-linux-storage-management/next-steps?u=76281980&t=0)** - [Scott] I hope you're more comfortable working with disks, partitions and volumes.
>
> **[0:04](https://www.linkedin.com/learning/ubuntu-linux-storage-management/next-steps?u=76281980&t=4)** Being able to work with storage is a good skill to have as a system administrator, and it brings with it some important concepts.
>
> **[0:11](https://www.linkedin.com/learning/ubuntu-linux-storage-management/next-steps?u=76281980&t=11)** There are off course many more things in this space to explore.
>
> **[0:14](https://www.linkedin.com/learning/ubuntu-linux-storage-management/next-steps?u=76281980&t=14)** For a look at some of them, check out our Linux Storage Systems course.
>
> **[0:19](https://www.linkedin.com/learning/ubuntu-linux-storage-management/next-steps?u=76281980&t=19)** As you continue learning and implementing storage systems, don't forget your passwords and remember to test your backups.
>
> **[0:25](https://www.linkedin.com/learning/ubuntu-linux-storage-management/next-steps?u=76281980&t=25)** See you next time.

> [!info]- Semantic Content
>
> **Best Practices:** don't forget (1), remember to (1)
> **Code Keywords:** continue (1)
> **Definitions:** is a  (1)
> **Speakers:** - [scott] (1)


## Path Context

### In [[Ubuntu Linux Professional Certificate by Canonical]]
← [[Ubuntu Linux- Operating System Basics]] | **3 of 4** | [[Ubuntu Linux- User and Group Management]] →

## Part of

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Appears In

- [[Ubuntu Linux Professional Certificate by Canonical]]

## Related Courses

_Courses sharing skills:_

- [[Ubuntu Linux- User and Group Management]] — Linux System Administration, Ubuntu
- [[Ubuntu Linux- Operating System Basics]] — Linux System Administration, Ubuntu
- [[LPIC-1 Exam 102 (Version 5.0) Cert Prep]] — Linux System Administration
- [[Lpic 1 Exam 101 Version 5 0 Cert Prep]] — Linux System Administration
- [[Red Hat Certified System Administrator (EX200) Cert Prep- 2 File Access, Storage, and Security]] — Linux System Administration

---

[↑ Back to top](#)