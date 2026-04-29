---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: learning-autopsy-for-digital-forensics
url: "https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics"
duration_minutes: 83
duration: 1h 23m
level: Beginner
updated: 2/3/2022
learners: 24485
skills:
  - Digital Forensics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQGUv76gCM-4cA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643742664904?e=2147483647&amp;v=beta&amp;t=Ca4DShYlHixAmhuvnORyuQDFnPPDRCvL1sU7TcNNmnM"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Explore a Career in Computer Forensics]]'
prev_courses:
  - '[[Protecting Your Network with Open-Source Software]]'
next_courses:
  - '[[Soft Skills for Information Security Professionals]]'
path_nav: '[{"path":"Explore a Career in Computer Forensics","position":7,"total":9,"prev":"Protecting Your Network with Open-Source Software","next":"Soft Skills for Information Security Professionals"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/digital-forensics
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Learning%20Autopsy%20for%20Digital%20Forensics.md)

![Learning Autopsy for Digital Forensics](https://media.licdn.com/dms/image/v2/C560DAQGUv76gCM-4cA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643742664904?e=2147483647&amp;v=beta&amp;t=Ca4DShYlHixAmhuvnORyuQDFnPPDRCvL1sU7TcNNmnM)

# Learning Autopsy for Digital Forensics

> Anyone who’s ever used a computer has lost or accidentally deleted a file. In other instances, people often want to erase their digital tracks and hide their information and activity. If you work in digital forensics, recovering files and reconstructing a person’s activity on a computer can require finding and analyzing data from several sources. In this course, Bennett Hendrix III shows you the b

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics) | 1h 23m | Beginner | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Preparing Autopsy]]** (7 videos)
- **[[#2. Ingest Modules]]** (6 videos)
- **[[#3. Reviewing Results]]** (3 videos)
- **[[#4. Searching and Reporting]]** (5 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Hey, where's the data?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=0)** - Between being at the office, being at home, or at school, we are always using our computers.
>
> **[0:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=5)** And unfortunately, things do happen.
>
> **[0:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=7)** Those things may be ransomware, viruses, or losing your files.
>
> **[0:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=12)** Autopsy is used by our military, law enforcement, and investigators to determine what happened on a computer.
>
> **[0:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=18)** This can be applied in a multitude of situations, any of which involves a computer.
>
> **[0:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=24)** Autopsy can be used by anyone to retrieve deleted files and folders that were emptied from the Recycling Bin.
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=31)** Whether you are a cybersecurity professional, law enforcement, or a hobbyist, there is something for you to learn with this course.
>
> **[0:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=37)** Being able to reconstruct a person's activity on a computer and establish a timeline is something that everyone can benefit from.
>
> **[0:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=45)** How you doin', my name is Bennet Hendrix III, a.k.a. CyberBennett.
>
> **[0:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=49)** I am currently a SOC analyst at a global company, and I have a strong passion for digital forensics.
>
> **[0:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=54)** I have used Autopsy countless times, and I say all this to say you are in good hands with this course.

> [!info]- Semantic Content
>
> **Env Vars:** iii (1), soc (1)
> **Code Keywords:** from. (1)
> **Speakers:** - between (1)

#### Getting the most out of this course
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=0)** - H+ Support has an upcoming product release.
>
> **[0:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=4)** Before that release, they received a threat via email that said basically to pay us some money so we don't release this before you do.
>
> **[0:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=12)** Unfortunately, they discovered it was legitimate and had some of their data leaked, resulting in their stock dropping and slightly tarnishing their reputation.
>
> **[0:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=21)** H+ Support have reasons to believe that they know who is responsible for the leak.
>
> **[0:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=25)** As a suspect is an employee of a contractor.
>
> **[0:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=29)** They were able to image the host and provide it to us.
>
> **[0:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=32)** They gave us a disk image from their internal employee, which we will be using to determine what exactly happened.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=40)** In order to determine this, we will be utilizing Autopsy and being able to reconstruct that timeline.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Definitions:** is an  (1)
> **Speakers:** - h (1)


### 1. Preparing Autopsy

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction and installation of Autopsy
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=0)** - [Narrator] Autopsy is a digital forensic platform and graphical interface to the sleuth kit and other digital forensic tools.
>
> **[0:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=7)** It is used by law enforcement, military, digital forensic enthusiasts, and corporate examiners to investigate exactly what happened on a computer.
>
> **[0:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=15)** It is designed to be easy to install and usable right out of the box and simple to navigate.
>
> **[0:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=20)** In this chapter, we will cover some preparation tips for autopsy in addition to installing it.
>
> **[0:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=27)** In order to install your copy of Autopsy, go to [autopsy.com](https://autopsy.com).
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=31)** Once you get there, you will have the option to download the latest version of the software.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=35)** In this course, we will be using 4.19.2.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=40)** While other versions may be released in the future, this course will still be relevant and accurate as it covers the fundamentals.
>
> **[0:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=45)** So go ahead and select the download button.
>
> **[0:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=48)** You will be brought to the download page where you can download the specific version that you like.
>
> **[0:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=53)** We will use the 64 bit version.
>
> **[0:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=56)** Once you get that downloaded, we will open our file and begin the installation.
>
> **[1:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=61)** The installation is very straightforward and simple.
>
> **[1:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=64)** It does, however, require admin privileges.
>
> **[1:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=69)** I'd like to also forewarn you that when you open the file, your antivirus may ask if you trust the software.
>
> **[1:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=74)** This is because the vendor did not sign this copy of Autopsy for some reason.
>
> **[1:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=78)** However, it is trustworthy, as long as you get it from the Autopsy website.
>
> **[1:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=83)** This website is free and there's no reason to go to a third party website for the download.
>
> **[1:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=88)** Also, you should consider configuring your antivirus to ignore a contents in your case output directory.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=94)** Some false positives may be triggered.
>
> **[1:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=97)** Some files may also be blocked before you get the chance to look at them.
>
> **[1:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=100)** While this can be prevented by disabling your antivirus, I would never recommend that due to security concerns.
>
> **[1:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=108)** There are two ways to deploy Autopsy: single user and multi-user.
>
> **[1:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=112)** The main difference is that single user cases are the only instance of Autopsy in one given moment, and it's easy to install.
>
> **[1:59](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=119)** Whereas multi-user is opened by multiple users who are able to see what each other is doing and collaborate and requires installation and configuration of other network-based services.
>
> **[2:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=130)** Before beginning our Autopsy workflow video, I would like to assure you that you may see a prompt from Windows that Autopsy wants to communicate with other devices on your network.
>
> **[2:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=139)** In order to do this, Autopsy wants to open some firewall ports on your network.
>
> **[2:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=144)** This is expected and totally fine.
>
> **[2:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=147)** You can choose to enable or disable this, and it will not interfere with our objective.
>
> **[2:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=152)** Autopsy should be done by the time you are done with the prompt.
>
> **[2:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=156)** In the next video, we will briefly cover Autopsy's workflow.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), interface (1), require (1)
> **UI Navigation:** go to (2), select the (1), open the (1)
> **Prerequisites:** install (3)
> **URLs:** [autopsy.com](https://autopsy.com) (1)
> **Versions:** 4.19.2 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### Autopsy workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=0)** - [Instructor] Now that we have installed Autopsy, it will be best to understand the workflow and know the normal process overall.
>
> **[0:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=7)** This course is structured in alignment to the process so I will use this diagram as a reference point.
>
> **[0:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=13)** First, you have to create the case.
>
> **[0:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=15)** A case is another term for a container that has at least one data source.
>
> **[0:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=20)** This is required to use Autopsy and analyze any data using Autopsy.
>
> **[0:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=25)** The second step in the workflow is to add the data source into the case in run ingest modules.
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=31)** Data sources include files, folders, and disk images.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=35)** Whereas afterwards, the ingest modules will analyze the data in the background and the results will be posted to the interface as they are populated.
>
> **[0:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=44)** Once that is complete, the third step is to manually review those results.
>
> **[0:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=49)** Of course, as you review those results, you gather those of interest and you can also search for a specific artifacts and you can tag those as well.
>
> **[0:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=58)** This is covered in a later video in one of the last few chapters.
>
> **[1:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=62)** Lastly, you can generate the report.
>
> **[1:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=65)** In order to accomplish this, you can use tags and results and simply create a report from those findings.
>
> **[1:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=72)** Now that you have an idea of the process, let's begin the first step and create our case in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1), interface (1), this, (1), let (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Creating a case
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=0)** - [Instructor] The only way to analyze the data in Autopsy is to create the case.
>
> **[0:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=4)** A case contains a data source, which can be a disk image, a disk device, or a logical file.
>
> **[0:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=10)** Remember, a disk device is a hard drive, while logical files are the files that do not contain data.
>
> **[0:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=16)** They do contain a description of records found in one or more physical file.
>
> **[0:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=20)** In this lab, we will use a virtual disk file to analyze.
>
> **[0:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=24)** Now that you have a little insight, let's go ahead and create the case.
>
> **[0:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=28)** When you launch Autopsy, you will see three options that are pretty straightforward.
>
> **[0:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=32)** We will select New Case, since the other two options require a case to already be created.
>
> **[0:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=39)** The case name we can use will be Learning Autopsy Lab.
>
> **[0:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=47)** As far as the base directory, you can place this wherever you see fit.
>
> **[0:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=52)** For simplicity, we can just go ahead and go to Documents, create a cases directory, and use that.
>
> **[1:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=60)** However, make sure that your case name is unique and not a duplicate.
>
> **[1:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=64)** If I select Next, I receive an error, basically saying that this lab and this case number already exist.
>
> **[1:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=71)** So basically, make sure that this is unique.
>
> **[1:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=73)** So to make sure that this is not going to conflict with anything that I have, I would just put Test next to it.
>
> **[1:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=83)** Once you're done with that, select Next.
>
> **[1:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=86)** You will be prompted for additional information such as your case number.
>
> **[1:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=91)** For us, we're going to just throw 001.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=94)** You'll be also prompted for your name and other information.
>
> **[1:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=97)** Do not worry about the organization, as organization will only be active if you have central repository enabled.
>
> **[1:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=106)** Now that you have successfully created a case, you'll be prompted to add the data source next.
>
> **[1:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=111)** But because that is in the next video, select Cancel.
>
> **[1:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=115)** There will not be any information displayed, as Autopsy does not have any data to analyze.
>
> **[2:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=120)** Moving on, if you want to view or confirm that you entered the correct details for your case, you can always do this by selecting Case in the top menu.
>
> **[2:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=129)** Select Case Details, and you will be able to view it.
>
> **[2:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=135)** You can also edit this information if something was to change later on, such as your phone number, or you can simply close it.
>
> **[2:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=143)** Autopsy's default configuration case file is using a .aut file extension.
>
> **[2:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=150)** This is something that you may need to note if you plan to search for the case file by file extension.
>
> **[2:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=156)** Now that you created your case, confirmed the details, and know how to edit those details, if you prefer, let's move on to the next video where we will add our data source.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), case. (2), let (2), require (1), throw (1)
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1), next video (1)
> **Analogies:** such as (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### What data sources are allowed?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=0)** - [Instructor] Now that you created a case, we can add a data source.
>
> **[0:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=3)** So, you may be wondering what data sources are allowed.
>
> **[0:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=6)** Well, great question.
>
> **[0:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=8)** As understanding this will help you determine what you're able to investigate and analyze.
>
> **[0:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=13)** Autopsy supports multiple types.
>
> **[0:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=15)** And before going over those, let's do a few things first.
>
> **[0:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=19)** Select the add data source button in the top left corner, below case.
>
> **[0:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=23)** You will see a select host option.
>
> **[0:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=25)** This is a new feature that has been recently introduced, and is a great way for categorizing your information if you are analyzing multiple hosts.
>
> **[0:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=33)** For example, your suspect has a desktop, two laptops and a cell phone that are all a part of an investigation.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=40)** Here you have have three options for selecting the host name.
>
> **[0:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=43)** You can name the host after the data source.
>
> **[0:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=46)** You can specify a new host name, such as giving it a nickname or a name that is easier to identify, or you can use a host that has already been created, which could be useful or used if your suspect has multiple hard drives in their computer.
>
> **[1:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=62)** Nonetheless, for our lab, we will select generate new host name based on data source name.
>
> **[1:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=69)** Click next.
>
> **[1:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=71)** So back to the types of data sources that are supported.
>
> **[1:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=74)** You have disc image or a VM file, which is simply a file or set of files that is a byte for byte replica of a hard drive, a media card or a virtual machine image.
>
> **[1:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=85)** The latter is what we will be using and should be provided as an attachment in this courses files.
>
> **[1:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=91)** Next, we have local disc, which is a local storage device or a USB attached device, such as an external hard drive.
>
> **[1:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=100)** Which can be likely if your suspect keeps those secret files hidden and separate from their computer for their own concerns.
>
> **[1:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=108)** Next, you have logical files.
>
> **[1:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=110)** This is simply local files and folders.
>
> **[1:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=114)** You have an allocated space image files, which is any file type that does not contain a file system.
>
> **[2:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=121)** Second to last, you have Autopsy Logical Imager Results, which are the results from running the local imager.
>
> **[2:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=129)** And lastly, you have autopsy supporting the XRY Text Export.
>
> **[2:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=135)** Which is the result from exporting text files from XRY and XRY is a product used to analyze and recover information from open devices, such as a GPS, a tablet, cell phones, et cetera.
>
> **[2:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=148)** Of course, using multiple forensics tools always supports a thorough investigation however, we will continue focusing on autopsy.
>
> **[2:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=156)** You should still be at the select type of data source to add.
>
> **[2:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=159)** So go ahead and choose disc image NVM file.
>
> **[2:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=163)** You'll be prompted with the files location, so browse to it and select it.
>
> **[2:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=169)** This is where the type of data source comes into play as each type will have a different screen.
>
> **[2:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=173)** Because we're analyzing a disc image, I will focus on this type.
>
> **[2:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=177)** And disc images are supported in a few different ways.
>
> **[3:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=181)** Mainly the raw single format such as the dot IMGs.
>
> **[3:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=186)** because we are analyzing a disk image, I will focus on this type.
>
> **[3:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=189)** The disc images that are supported are the following, you have raw single format files, such as the dot IMGs, the dot dds, the dot bins, and dot raw files.
>
> **[3:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=201)** You have raw splits.
>
> **[3:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=203)** Whereas you'll see that extension, .001, .002 and so on.
>
> **[3:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=208)** And then you also see dot AA dot AB and so on.
>
> **[3:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=212)** You have in case files, which have the extension dot E01, dot E02 et cetera.
>
> **[3:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=218)** And you have virtual machines, which is the dot VMDK and dot BHD.
>
> **[3:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=225)** After you select the file types, you will also see the option to ignore orphan files and FAT file systems.
>
> **[3:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=231)** Do not select that.
>
> **[3:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=234)** An orphan file is a file that no longer has a purpose.
>
> **[3:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=237)** For example, a suspect may have uninstalled application but yet it still remains on that hard drive.
>
> **[4:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=243)** The disadvantage of this option is that if you do select it, it will increase the processing time and possibly cause your computer to crash.
>
> **[4:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=251)** So go ahead and select next.
>
> **[4:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=253)** Autopsy will examine the data source and create an embedded database, which enumerates the files.
>
> **[4:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=259)** Autopsy will run the fault ingest modules when you select the next on the following page, which is the current page that we have right now.
>
> **[4:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=266)** We will cover these ingest modules in our next chapter in great detail.
>
> **[4:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=270)** So for now leave the select the modules and continue.
>
> **[4:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=273)** Afterwards, you'll see the processing tab.
>
> **[4:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=275)** Wait until this process is complete.
>
> **[4:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=277)** It should be noted do not delete the data source after this file is added to the case.
>
> **[4:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=282)** The data source would need to be present as it is not copied nor stored in autopsy.
>
> **[4:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=288)** To conclude, I'd like you to navigate to the title bar and select the case option again.
>
> **[4:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=293)** And scroll down to the data source summary, the table present it shows general information about each data source, such as the files, the type in any tags.
>
> **[5:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=302)** In order to see the data source summary, you have to select the actual data source itself.
>
> **[5:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=307)** What's more important are the details and information that each tab provides.
>
> **[5:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=311)** Something that will be a value is the hash numbers, which would confirm in a real investigation that this data that you are analyzing is indeed the original image that your suspect possessed.
>
> **[5:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=322)** As this will be documented during the evidence collection process in that investigation.
>
> **[5:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=327)** This summary is a quick way to get immediate information.
>
> **[5:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=331)** However, we will go further into reviewing the results from the modules in the next chapter.
>
> **[5:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=335)** But for now, consider this a sneak peak.
>
> **[5:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=338)** In the next video, we will cover, veiling the case folder and case logs.

> [!info]- Semantic Content
>
> **Env Vars:** xry (3), usb (1), gps (1), nvm (1), e01 (1)
> **Code Keywords:** case. (2), continue (2), type. (2), case, (1), let (1)
> **UI Navigation:** select the (6), navigate to (1), scroll down (1)
> **Analogies:** such as (6), for example (2)
> **Definitions:** is a  (7)
> **Cross-References:** in the next (2), next chapter (1)
> **Speakers:** - [instructor] (1)

#### Viewing case logs and output
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=0)** - [Instructor] For the last video of this chapter, we will cover viewing case logs and output.
>
> **[0:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=5)** This video is pretty quick and straightforward.
>
> **[0:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=8)** So to view the cases output, we will go to the Tools in the menu bar.
>
> **[0:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=13)** We're going to scroll down to Open Case Folder.
>
> **[0:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=18)** This folder will have all of your information from the files you exported, hence the Export folder, to the logs, which we will analyze in a second.
>
> **[0:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=30)** You will also see ModuleOutput, and this will be the only thing that has folders and files populated in it.
>
> **[0:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=38)** Nonetheless, because we haven't covered the modules just yet, we can move past these and you can revisit these after we cover the modules later on.
>
> **[0:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=47)** Regarding the Lab folder, if you remember creating the case at the beginning of this chapter, this is the location that we use for the base directory.
>
> **[0:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=55)** So the alternative would be to navigate manually to this path.
>
> **[1:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=60)** And maybe not this specific path, but the path that you used for your base directory.
>
> **[1:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=66)** Once you get here, you will have access to all of this information.
>
> **[1:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=69)** This will be beneficial if you have Autopsy open, of course you will want to come here via the menu.
>
> **[1:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=75)** However, if Autopsy is closed, you can visit this location by using the Windows Explorer.
>
> **[1:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=83)** This may save time, especially if you have a large case and multiple data sources, and it takes a while for your case to actually load itself.
>
> **[1:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=91)** To view the case logs, you can obviously go into the Logs folder, but there's a simpler way that doesn't take multiple steps.
>
> **[1:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=99)** You can go to Help in the menu bar, and then scroll down to Open Log Folder.
>
> **[1:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=105)** This will open the same Log folder from the previous screen, but it's all done in roughly one step.
>
> **[1:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=111)** You will notice that there's a continuous number log files, such as 1, 2, 3, 4, 5, 6, and 7 for me.
>
> **[2:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=120)** For you, you should not have this.
>
> **[2:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=122)** These will continue as you continue having actions in the software, you can open all of these files, excluding the lock file here.
>
> **[2:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=132)** The main way to open these, of course, is to right-click, Open with, and you can use Notepad as these are only text files, despite the file types having a specific number.
>
> **[2:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=144)** As of, right now, we do not need to look through this information as this is something that you will want to use if you have some functionality that isn't being performed correctly.
>
> **[2:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=153)** Mainly to troubleshoot any issues or investigate any concerns.
>
> **[2:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=157)** So now that we've covered how to view case logs in the Output folder, we will cover this chapter's challenge in the next video.

> [!info]- Semantic Content
>
> **UI Navigation:** in the menu (2), scroll down (2), go to (1), open the (1), right-click (1)
> **Code Keywords:** continue (2), this. (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Challenge: View case logs and output
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=0)** - For this chapter's challenge, we will have a simple one, mainly because we've simply installed Autopsy, created a case and viewed the log source.
>
> **[0:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=14)** Autopsy gathers a lot of information.
>
> **[0:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=17)** I want to be confident that you'll be able to know where and how to find any specific details you may be seeking.
>
> **[0:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=23)** I challenge you to find the Device ID for the Disc Image provided.
>
> **[0:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=28)** This shouldn't take more than a few minutes and please move on to the next video after a few minutes, regardless if you were or were not able to find it.
>
> **[0:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=36)** This way, I can show you how I did it in the upcoming solutions video.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=40)** There are multiple approaches to use in order to find this information and if you need a hint, use the Data Source Summary.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Cross-References:** next video (1)
> **Speakers:** - for (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: View case logs and output
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=0)** - [Instructor] So now that you have some time to go through the challenge itself and find the Device ID for the virtual disk image, I want to go through a couple of ways in order for you to find this information.
>
> **[0:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=16)** So, there's multiple ways.
>
> **[0:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=17)** The first way, which is where I hinted at, you open Case in the menu file and you go to Data Source Summary.
>
> **[0:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=24)** Of course, it says no data source has been selected, so you click that and that's when the information will populate.
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=31)** The Data Source Summary is all the information in this, the summary regarding the data source, where the data source was the virtual disc that I provided to you.
>
> **[0:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=39)** Okay.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=40)** So, once you go into there, you have different things such as User Activity, Analysis, Recent Files, Past Cases, Geolocation, Timeline, etcetera.
>
> **[0:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=48)** Well, this is another summarized version of all the other stuff we will look at in the analysis results and the data artifacts.
>
> **[0:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=55)** However, for what we're going to do, and what I specifically requested, it was to simply just go through, you'll be able to realize, "Wait a minute, one of these is going to have it."
>
> **[1:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=66)** So the question is which one may have it.
>
> **[1:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=69)** That's where you get to Container.
>
> **[1:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=70)** The Container has the Display Name, the Name, and the Device ID.
>
> **[1:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=74)** This Device ID is the main way for this device to be identified, therefore, this number and hex will not change.
>
> **[1:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=83)** And once again, you're able to find it that way.
>
> **[1:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=85)** Now there are a couple more ways to get to the Data Source Summary.
>
> **[1:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=88)** Aside from the Cases method, you can go through Data Sources to click through it, and, side note, if you notice this right here, you also have the Device ID.
>
> **[1:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=98)** That's another way to go about it, by simply just clicking on the Data Source here, but let's just say you didn't see that for some reason, 'cause you know, you're moving fast and there's no wrong issue with moving fast.
>
> **[1:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=109)** Third option would be to right click on it and go to View Summary Information.
>
> **[1:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=116)** That's where you're going to get the same window.
>
> **[1:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=117)** And that's pretty much the main way to get to the Device ID.
>
> **[2:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=121)** Whether you go through this route, using the Data Sources Summary, or you go through the Data Sources tree, and click on it.
>
> **[2:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=130)** Either way, you should get the same results and the same answer.
>
> **[2:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=135)** So that was the solution to finding the Device ID.
>
> **[2:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=138)** I look forward to seeing you in the next lesson.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (2), in the menu (1)
> **CLI Commands:** find (3)
> **Code Keywords:** this, (1), let (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Ingest Modules

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Utilizing Automated Analysis in Autopsy
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=0)** - [Instructor] Ingest modules analyze the data and the data source, thus performing all of the analysis for the files and parsing their contents.
>
> **[0:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=7)** After adding a data source to a case, you will be presented with a dialogue that will let you configure what should be analyzed on that data.
>
> **[0:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=16)** This will be ran in the background, providing you with real-time results.
>
> **[0:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=20)** There are three ways to start these modules.
>
> **[0:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=22)** First is by default, which is immediately after you add a data source.
>
> **[0:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=26)** Second, by right clicking on the data source from the tree in the main interface and choosing Run Ingest Module.
>
> **[0:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=33)** You will see this process presented on your screen, this would be used if you decide to analyze data that you didn't previously include.
>
> **[0:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=41)** Lastly, you can go to the Tools, Run Ingest Modules, and you will have the Data Source Options here as a Dropbox.
>
> **[0:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=50)** When configuring in Ingest modules, you will be presented with an interface to choose which files to analyze and enable or disable for each module.
>
> **[0:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=58)** For example, we are not given an image of a mobile phone, so we will not need the Android analyzer module.
>
> **[1:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=66)** However, if you later receive this evidence as a part of another case, you can use this process to enable it so that the module will be ran.
>
> **[1:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=74)** Moving on, the selection box at the top controls which files the Ingest modules will run on.
>
> **[1:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=80)** The two built-in options are All Files, Directories, and Unallocated Space and All Files and Directories.
>
> **[1:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=87)** Which does not include Unallocated Space.
>
> **[1:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=89)** Of course, it would be recommended to use the default option that includes Unallocated Space.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=94)** Unallocated Space is the area on a hard drive, where new files can be stored.
>
> **[1:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=99)** This is important as certain files may have been marked for deletion and may be critical to your investigation.
>
> **[1:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=104)** So not including this option, may be detrimental to your case.
>
> **[1:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=108)** There are two places to configure Ingest modules.
>
> **[1:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=111)** When you select the module name, you may have some general settings you may want to change from image to image or by case.
>
> **[1:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=117)** For example, if one investigation is for child exploitation case and another is for data exfiltration.
>
> **[2:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=125)** You may not use the same modules to support each incident.
>
> **[2:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=128)** They may also be an advanced button that is enabled in the lower corner.
>
> **[2:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=132)** So when I mentioned the settings, I'm referring to this Global Settings area right here.
>
> **[2:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=137)** For example, the Hash Lookup Settings.
>
> **[2:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=141)** You can also access the settings portion using the settings bar itself.
>
> **[2:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=146)** But we can discuss that later as well.
>
> **[2:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=148)** For example, if one investigation is for a child exploitation case in another is for data exfiltration case.
>
> **[2:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=154)** You may not want to use the same modules to support each incident.
>
> **[2:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=157)** There may also be a Global Settings button that is enabled in the lower corner.
>
> **[2:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=162)** Pressing this button would allow you to change the global settings that are not specific to a single image.
>
> **[2:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=168)** This advanced configuration panel can also be accessed via the Tools bar, Selecting Options, which we could show later.
>
> **[2:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=176)** It should also be noted that running a lot of modules will slow down your computer and also take longer for the Ingest to finish processing.
>
> **[3:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=185)** With this said, It may not be best to run all the modules and run those specifically that's needed or you can also remove and de-select those that you will not need.
>
> **[3:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=195)** So in this example, I've already mentioned not needing the Android Analyzer.
>
> **[3:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=202)** You won't need the Drone Analyzer, Plaso, YARA, IOS and GPX Parser.
>
> **[3:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=210)** Well, we also will not need Central Repository, as I mentioned that we will not be using that.
>
> **[3:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=214)** Let's see, and everything else we can have to run the Ingest itself.
>
> **[3:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=219)** You will notice that mine automatically has numbers here.
>
> **[3:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=222)** Do not expect yours to match mine, mainly because when you run Ingest modules multiple times, they will compile onto one another.
>
> **[3:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=231)** So at that point, you will receive duplicates.
>
> **[3:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=233)** So as I click finished here, these have already been populated where they will add to the list and continue being populated.
>
> **[4:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=241)** That's something that should be noted for future reference.
>
> **[4:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=244)** Speaking of processing time, there are a few tips to ensure optimal performance when running Autopsy.
>
> **[4:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=250)** Before going to those, I would want to ensure that we're going to cancel analyzing the files because I already ran these.
>
> **[4:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=258)** In a way to cancel them, as using a status bar and clicking the X to cancel all of the tasks.
>
> **[4:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=267)** Perfect, so speaking of processing time, there are a few tips to ensure optimal performance when running Autopsy.
>
> **[4:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=273)** First, is recommended that you start Autopsy from the desktop or the start menu.
>
> **[4:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=278)** Once again. Okay.
>
> **[4:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=280)** So you can run it from the desktop or the Start menu.
>
> **[4:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=287)** The second tip is to confirm you are using the maximum number of threads for Ingest files.
>
> **[4:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=293)** To do this, go to Tools, Options, you see Ingest, and then you will see three tabs, go to Settings on the far right.
>
> **[5:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=305)** Below it, you'll see a drop-down list.
>
> **[5:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=306)** And next to it, is the yellow exclamation mark that has a specific recommendation for your specific computer.
>
> **[5:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=314)** Use that number, if it's not already changed to the maximum.
>
> **[5:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=317)** If you do change the settings, select Apply, and then Ok.
>
> **[5:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=321)** This is an important thing to note.
>
> **[5:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=323)** As you can see, I have the option of having four number of threads to use.
>
> **[5:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=327)** However, for it's recommended that I use a maximum of two.
>
> **[5:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=331)** Of course, after you click, Ok, you close Autopsy and restart it in order for it to take effect.
>
> **[5:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=339)** In the last tip to ensure optimal performance is when making a case in Autopsy, the vendor also recommends using a different drive for the case.
>
> **[5:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=347)** That is not the same as the data source.
>
> **[5:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=349)** For example, if you store your case details on your computer, but store the disk image on an external hard drive, this allows the maximum amount of data to be read and written at the same time.
>
> **[6:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=362)** This is also a digital forensic tip.
>
> **[6:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=364)** That example is also forensically sound method, as it's bad practice to have your evidence saved to your computer as it may corrupt the file, which is exactly why write blockers are required so that the evidence's integrity is insured.
>
> **[6:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=379)** On the next video, we will discuss Autopsy's essential modules, part one.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), case. (4), case, (2), let (2), interface (2)
> **Analogies:** for example (5)
> **UI Navigation:** go to (3), select the (1)
> **Best Practices:** recommended (3), bad practice (1)
> **Env Vars:** yara (1), ios (1), gpx (1)
> **Cross-References:** in the last (1), next video (1)
> **Prerequisites:** configure (2)
> **Definitions:** is an  (1)

#### The Extension Mismatch and USB device-attached modules
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=0)** - [Instructor] Autopsy has a number of essential modules.
>
> **[0:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=3)** The modules I mentioned are not in order of priority, as each case will be different.
>
> **[0:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=8)** I highly recommend you perform a thorough analysis of all important artifacts for your investigation.
>
> **[0:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=13)** Please remember that every time you run ingests, you will have those results added to the existing results.
>
> **[0:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=19)** I say this because you may not need to follow the actions that are on my screen because your module may have already been enabled.
>
> **[0:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=26)** You are able to select individual modules to run without previous results disappearing.
>
> **[0:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=33)** Because our lab is focused on data exfiltration, we will want to find files that indicate this user is involved.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=40)** Many criminals believe that they can hide their data in plain sight.
>
> **[0:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=43)** In the tree viewer panel on your left, you will notice that Autopsy has an Extension Mismatch Detected tree.
>
> **[0:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=50)** This is due to the Extension Mismatch Detector module.
>
> **[0:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=53)** This module is important because some suspects may attempt to hide their files by changing this extension to deceive others.
>
> **[1:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=61)** If an investigator opened the file, there would be a file is corrupted error regenerated, and it would appear to be a useless file.
>
> **[1:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=68)** However, this may not always be the case.
>
> **[1:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=71)** So to enable this or to confirm this is enabled, go to Tools, scroll down to Run Ingest Modules, and you shall see Extension Mismatch Detector.
>
> **[1:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=83)** You also see options to check all file types, to check all the file types, except text files, and to check only multimedia and executable files.
>
> **[1:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=92)** You may also skip files without extensions and skip known files.
>
> **[1:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=97)** However, I recommend leaving those checked, of course.
>
> **[1:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=100)** Once you're done with that, select Finish, only if this was unchecked and has not been previously ran.
>
> **[1:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=106)** After you confirm that this module has ran, you can go to the Extension Mismatch Detect tree in the tree viewer panel.
>
> **[1:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=114)** You should see a bunch of names that look suspicious.
>
> **[1:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=116)** I will give about a good five second pause, so you can look and try identifying any files that may look kind of sketchy.
>
> **[2:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=124)** You can tell certain files are irrelevant and unsuspicious by their name and unity.
>
> **[2:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=128)** As the naming scheme looks like something, a computer will automate.
>
> **[2:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=133)** However, if you scroll down, Lesson 4.docx file and the H+ executable file are both something that may be of interest.
>
> **[2:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=142)** Mainly because the docx file being a windows word file, and the H+ executable being named after the victim.
>
> **[2:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=151)** And what other reason would there be for our victim H+ sports to have an executable.
>
> **[2:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=157)** So let's go ahead and click the Lesson 4.docx.
>
> **[2:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=160)** And if you scroll over to the right, you notice that this file has a docx extension, which is why it's here.
>
> **[2:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=170)** Nonetheless, if you look over to the right of it, you will see a PDF mime type, hence the mismatch.
>
> **[2:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=176)** let's look a little further, after we select the file, we can see that the Application tab pops up in the content viewer.
>
> **[3:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=183)** If you have central repository enabled, you will be able to go to the Other Occurrences tab.
>
> **[3:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=189)** So let's go ahead and select that.
>
> **[3:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=191)** We see this file is present in this case about three times all under files with different names.
>
> **[3:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=197)** So this is a file of importance somehow.
>
> **[3:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=200)** So let's go ahead and use the Application tab to analyze the file.
>
> **[3:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=206)** After a few minutes of investigating it, we can see that this is something that is not related to this case.
>
> **[3:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=211)** This file is a chapter on mobile devices from a book called Saleen, the CyberTeen hits the header.
>
> **[3:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=217)** While this may be an extraordinary book with valuable information, it's not relevant to our investigation.
>
> **[3:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=222)** So we can label this as a false positive.
>
> **[3:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=225)** Next, we will look at the USB devices attached.
>
> **[3:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=228)** It's common for employees and users to utilize USBs as storage devices and to transfer files and other important data.
>
> **[3:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=237)** Selecting the USB Devices Attached tab displays a list of connected devices, but what's imperative here is to note that Device ID, which is in this column, this is important as it's the main way to prove or disprove a suspect's involvement.
>
> **[4:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=252)** Every Device ID is different, and of course you have to make a model which adds to the further claim, but it's possible for someone to swap the USB case out and put another in, so it appeared to be fake or false information.
>
> **[4:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=265)** This specific information is retrieved from the computer's registry, if it's windows, and so the authenticity is valid and it's not something that is likely to be changed due to the escalated privileges that's required to access it.
>
> **[4:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=278)** Extension Mismatch modules and USB Devices are important modules, but there are definitely more.
>
> **[4:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=284)** Next, let's take a look at the recent activities and interesting files modules.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (4), case. (2), type, (1)
> **UI Navigation:** go to (3), scroll down (2), select the (1)
> **Env Vars:** usb (4), pdf (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### The Recent Activity and Interesting Files modules
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=0)** - [Instructor] Let's look at a few more of autopsy's, essential modules.
>
> **[0:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=3)** The recent activity module, extracts users activities, such as information saved by the web browsers, including web searches and start programs and the operating system for example.
>
> **[0:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=15)** It also uses reg ripper on the registry hive.
>
> **[0:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=18)** Reg ripper is an open source tool that is used for data extraction and correlation.
>
> **[0:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=23)** It uses plugins to fetch frequently needed information during an investigation on a windows device.
>
> **[0:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=28)** It assesses the registry high files to extract specific keys, values and data.
>
> **[0:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=34)** The registry is a database that stores low-level settings for the windows operating system.
>
> **[0:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=39)** Its purpose is to help programs use the computers resources and contains complex information about the applications, documents created hardware and much more.
>
> **[0:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=50)** These functionalities are why autopsy incorporated these tools.
>
> **[0:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=54)** There is no better database for a windows device and if you would like to see the registering for a better understanding, you can go this by going through your search bar.
>
> **[1:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=63)** It's like being run and simply typing in, reg edit.
>
> **[1:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=69)** So R E G E D I T and then simply click enter and at this point you will be able to see your registry.
>
> **[1:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=78)** I'd like to set a reminder that it is very low level and you should not change any devices as this is very critical to your computer system.
>
> **[1:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=89)** So now that you know where all this information is coming from, I can move back to the recent activities module.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=94)** This allows you to see what activity has occurred in the last week of usage, what websites were visited, what the machine itself did and what devices were connected to it.
>
> **[1:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=103)** There is nothing to configure for this module, as it is the default setting.
>
> **[1:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=108)** The results show up in the tree viewer under data artifacts.
>
> **[1:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=112)** Due to the plethora of information this module provides, this would be among the most important to analyze.
>
> **[1:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=118)** You shall see the recent documents, web history, web downloads, and more present below it.
>
> **[2:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=124)** Next is the interesting files identifier module.
>
> **[2:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=128)** This allows you to automatically flag files and directories that match a set of rules.
>
> **[2:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=134)** This can be useful if you always need to check for certain files, whether it's a specific type or an identified file name.
>
> **[2:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=142)** Using a custom set of rules, this module allows you to run these against each processed file.
>
> **[2:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=148)** If a file matches any of the rules, you will see an entry for it in the tree viewer.
>
> **[2:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=153)** You can also share your rules with other users and import sets made by others into your copy of autopsy.
>
> **[2:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=160)** Before we continue, I'd like you to note, a rule sets is a collection of rules.
>
> **[2:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=165)** If a file matches any rule in the rule sets, it will be flagged as a match for this rule set.
>
> **[2:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=171)** Rule sets can be enabled and disabled at ingest time.
>
> **[2:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=175)** So to create an edit your own rule set, you can go to tools, options, go to the interesting files tab, the area on the left side we'll show you a list of rule sets that are currently available.
>
> **[3:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=190)** Selecting a rule set will display its description and information.
>
> **[3:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=194)** You can copy, import, export, create a new, edit and delete a rule set.
>
> **[3:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=200)** However, you can not delete or edit the ones that's present as is set by default.
>
> **[3:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=205)** However, let's go through the process of creating a new rule.
>
> **[3:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=209)** Which will open a new window, so you can enter information about your ideal files.
>
> **[3:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=214)** So let's set the case name to example.
>
> **[3:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=219)** We're not going to have a description here, just so we can give you the experience for creating a rule set.
>
> **[3:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=225)** So once you have your rule set highlighted, you can select new rule.
>
> **[3:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=230)** At this point, you can enter information about the files that you want to find.
>
> **[3:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=234)** The top line allows you to choose one of three types, the files, the directories, or all, which simply means both.
>
> **[4:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=242)** Be aware that some condition types, only apply to files and won't be available if you select the directories or all option.
>
> **[4:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=251)** Each rule must have at least one condition.
>
> **[4:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=253)** You can save this newly created rule under any name, of course, giving it a name is entirely optional, but I highly recommend it.
>
> **[4:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=262)** So for the sake of our lab, we're personally not going to find a file just because I'm going to have you import one later for your challenge.
>
> **[4:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=270)** So for the sake of creating one, let's name, this file H plus, and the file name is going to be H plus logo.
>
> **[4:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=284)** Let's actually name our file name logo.
>
> **[4:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=287)** With this to do is search our archived files for anything that has a name logo.
>
> **[4:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=294)** Once there, you will see the rule name itself with the name of the file or whatever indicator that you decide to use.
>
> **[5:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=304)** Once you're done, select apply, select okay.
>
> **[5:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=306)** You will notice that there is an interesting, files tab in the panel.
>
> **[5:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=311)** This is specifically because one of the default rules actually has, let me show you.
>
> **[5:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=317)** So I got back to that settings using a different approach.
>
> **[5:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=321)** This file actually matched because this is the AX crypt, that's executable.
>
> **[5:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=327)** So because it was able to match, this file is already going to be present for you to view.
>
> **[5:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=333)** The file name we used would generate nothing because there is no file in here named logo specifically.
>
> **[5:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=339)** If so, then we have a foolish suspect.
>
> **[5:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=343)** Next, let's take a look at installing a third party module in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (7), delete (2), from, (1), continue (1)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** go to (2), select the (1)
> **Analogies:** such as (1), for example (1), it's like (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the last (1), in the next (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)

#### Installing third-party modules
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=0)** - [Tutor] Autopsy has many ingest modules that parses the data, but sometimes you may need capabilities that have not been yet incorporated.
>
> **[0:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=9)** That's where third-party modules come into play.
>
> **[0:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=12)** This is a tricky topic as for any digital forensic case, your data extraction methods must be forensically sound.
>
> **[0:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=18)** And forensically sound simply refers to the process by which data is collected for E-discovery without any changes to the data or metadata itself.
>
> **[0:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=26)** So to be forensically sound, a data collection process must be defensible, meaning that it must be consistent, repeatable and well documented.
>
> **[0:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=34)** Assuming a third party module does follow this, here's how you will be able to install the module into your case.
>
> **[0:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=41)** So for this example, we will be using a module that we received from Autopsy itself.
>
> **[0:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=47)** Go to your browser and type in [autopsy.com](https://autopsy.com).
>
> **[0:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=50)** Once you get here, go to add on modules.
>
> **[0:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=53)** The module we'll be using is called video triage.
>
> **[0:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=56)** This module efficiently triaged video content by splitting videos up into easily viewable thumbnails.
>
> **[1:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=64)** So go ahead and select learn more, and once you fill out this form with information, you will automatically have access to the file to be downloaded.
>
> **[1:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=73)** It will not be sent to your email, or would I be asking you to wait and verify anything, it will just simply download right then and there.
>
> **[1:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=81)** After you fill out the form, you'll be able to download it.
>
> **[1:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=83)** So just like download.
>
> **[1:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=86)** It will take a little time to install, nothing too long thankfully.
>
> **[1:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=91)** Of course, this depends on your data speed.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=94)** Afterwards, go back to your Autopsy window, go to tools and go to Python plugins.
>
> **[1:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=102)** You will see a window that you need to copy and paste.
>
> **[1:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=105)** So let's go ahead and copy this here.
>
> **[1:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=107)** And basically you have to copy it because this is where you will want your file to be extracted to.
>
> **[1:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=114)** So we're going to extract all when it asks you, where do you want it to extract to.
>
> **[1:59](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=119)** Select the path that we just copied, and it's going to put it there.
>
> **[2:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=127)** After you add the path, you will want to close out your Autopsy and then you're going to relaunch it.
>
> **[2:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=134)** This is done specifically because Autopsy checks that location every time it starts up.
>
> **[2:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=138)** It has no reason to check the location in the middle of a case.
>
> **[2:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=143)** So open up the case that you just had.
>
> **[2:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=149)** So go back to tools, go to the plugins, go to download it, go to add plugins.
>
> **[2:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=156)** Go to Python modules where you will see the video triage module folder and select the file that you placed it in.
>
> **[2:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=164)** Once you do this, do not forget to select install.
>
> **[2:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=169)** If you close it out, nothing will happen.
>
> **[2:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=172)** You must select install.
>
> **[2:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=175)** Follow the prompt accordingly.
>
> **[3:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=180)** After selecting continue, it's going to ask to restart the application so that this installation can be complete.
>
> **[3:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=186)** Then select finish.
>
> **[3:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=188)** It's going to close out for us, it's going to restart by itself.
>
> **[3:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=192)** That window you saw was what Autopsy uses in order to be compatible with that module.
>
> **[3:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=198)** So afterwards you're going to go back and open your case again for the final time.
>
> **[3:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=203)** And when the application is restarted, you can go to any video to confirm that this works.
>
> **[3:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=208)** So we are going to go to file types, extension, videos, almost like a random video, and you will notice that the video triage tab is right here present.
>
> **[3:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=225)** And it's going to have the thumbnails every second, every few seconds, depending on what file it is.
>
> **[3:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=230)** But it's going to have a variety of thumbnails that show you each key frame as it changes.
>
> **[3:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=235)** And that is how you install a third party module.

> [!info]- Semantic Content
>
> **Code Keywords:** module (8), this, (2), case. (2), case, (1), let (1)
> **UI Navigation:** go to (10), select the (2)
> **Prerequisites:** install (5)
> **CLI Commands:** python (2)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is called (1)
> **URLs:** [autopsy.com](https://autopsy.com) (1)
> **Analogies:** just like (1)

#### Challenge: Install a third-party module
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=5)** - [Instructor] For chapter two's challenge, we will have two parts.
>
> **[0:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=9)** First, I will want you to analyze the H+ executable file and answer the following two questions.
>
> **[0:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=15)** Where was it downloaded from?
>
> **[0:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=17)** And two, what type of file was it originally?
>
> **[0:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=21)** For the second part of the challenge, you would need to import the provided rule set to find some files.
>
> **[0:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=25)** The goal is to see how this process works and give a little insight to how it can be used.
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=31)** Using the sample rule set, you shall be able to answer the following two questions.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=35)** First, what are the names of the files?
>
> **[0:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=38)** Second, what can these files prove or disprove regarding our suspect?
>
> **[0:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=43)** Once you're finished with the challenge or ready for the answer, go ahead and select the next video so we can start and we can go over how I solve these challenges.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Install a third-party module
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=0)** - [Illustrator] This chapter's challenges consists of two parts.
>
> **[0:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=8)** To find the first one, you must first analyze the h+ executable.
>
> **[0:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=13)** This was the other file that we consider suspicious from the second video in this chapter.
>
> **[0:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=18)** So in order to do this, so go to the Tree Viewer, scroll down and open Analysis Results, and select Extension Mismatch Detected.
>
> **[0:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=30)** Once there, scroll down until you see the h+ executable file, on my screen I have multiple, only because I ran this module a few different times.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=40)** This will not impact the results.
>
> **[0:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=43)** So, the first question asks, where was it downloaded from?
>
> **[0:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=47)** Well, the answer is able to be found by going to the Context tab, and seeing that this file itself was downloaded by the following URL.
>
> **[0:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=58)** This URL is through h+ Sports website, so it looks legitimate.
>
> **[1:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=63)** The second answer is able to be found by scrolling right in the results viewer, where we can see that this file is a JPEG, in two different areas.
>
> **[1:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=73)** First is the Justification, second is the MIME Type.
>
> **[1:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=77)** Either way, this file was originally a JPEG file despite its executable extension.
>
> **[1:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=85)** For the second part, you must first import the rule set that was provided by first going to Tools, Options, Interesting Files, Import Set, select Open, once you found it.
>
> **[1:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=102)** Here you'll see the rules that were already established and created from another analyst or previously.
>
> **[1:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=109)** So, you can select Apply, then OK.
>
> **[1:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=112)** You shall see the results almost immediately, if not immediately.
>
> **[1:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=117)** So, the results did not pop up automatically, which is fine.
>
> **[2:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=120)** So while you can restart the window in order for it to run, it would be best to just go ahead and go to Tools, Run Ingest Modules, and manually start itself.
>
> **[2:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=129)** So I'm going to personally just Deselect All, go to Interesting Files, I will even remove these.
>
> **[2:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=137)** I want to specifically confirm that these results that we just imported will be populated.
>
> **[2:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=145)** Select Finish, you will see the Status bar at the bottom of the screen.
>
> **[2:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=149)** And, oh, look, now we got the Learning Files itself that were identified.
>
> **[2:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=153)** So right now we're at a 1%, so we're going to wait until it's done identifying the rest of the results, if there are more of course.
>
> **[2:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=162)** However, we won't really know until it's completely done.
>
> **[2:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=165)** Once the Ingest is finished, you can go to the results by going to the Interesting Files tab and select the name of the rule set.
>
> **[2:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=172)** So we have two different files of course, while we have four different results.
>
> **[2:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=177)** This is because they are located different sections.
>
> **[3:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=180)** Both of them are in the Downloads folder hidden in a Zip file that's called OfficeSetup.zip, which is suspicious, and other locations are in a Commons File and a different area where the systems or the program files data is set up as well.
>
> **[3:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=195)** So either way, it's safe to say both of these files were actually hidden.
>
> **[3:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=198)** And it shows where the file path is, which shows that obviously that this suspect knew that these documents was here.
>
> **[3:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=206)** Because we have the employee database on our suspect's computer, this supports the claim that our suspect is responsible for the breach.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), scroll down (2), select the (1)
> **Env Vars:** url (2), jpeg (2), mime (1)
> **Code Keywords:** this, (1), module (1), type. (1)
> **CLI Commands:** find (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [illustrator] (1)


### 3. Reviewing Results

> [[#Table of Contents|↑ Back to Table of Contents]]

#### UI layout
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=0)** - [Instructor] Autopsy's user interface has five major areas, the tree viewer, results viewer, content viewer, key search, keyword search and status area.
>
> **[0:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=11)** Being able to navigate and understand where your results and findings will populate will make this course much easier as I refer to the different viewers and panels.
>
> **[0:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=20)** On the left side of the main window, you will see a panel where you can browse the files of your case's data source.
>
> **[0:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=26)** This tree viewer panel also has five main areas within it.
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=31)** You have data sources, which will show a directory tree hierarchy.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=35)** You can navigate specific paths as it will also contain distinct sub trees, once selected.
>
> **[0:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=42)** We specifically have one for our demo, but this is where you'll find all of them.
>
> **[0:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=47)** For example, if we had a desktop disk image, a virtual disc image, and a USB image, they will all be located here.
>
> **[0:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=55)** But once again, because we only have one, this is all we'll see for now.
>
> **[0:59](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=59)** Second or next is the file views.
>
> **[1:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=63)** This is an area for specific file types that can be grouped by type or other properties across all data sources.
>
> **[1:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=71)** This simply allows you to go into the specific media type.
>
> **[1:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=74)** So for example, we can go through the file types, extensions, and go to images.
>
> **[1:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=79)** Or if we want to go a different route and go specifically by the extension, then we can go by the extension where the mime types is also available.
>
> **[1:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=91)** Mime types of file extensions, provide hints as to how to deal with a file.
>
> **[1:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=95)** Whereas file extensions are commonly used for your operating system to decide what programs to open with, mime types are used by your browser to decide how to present some data.
>
> **[1:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=106)** So after file types, you also have deleted files, which is important as you can use this data to support specific claims.
>
> **[1:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=114)** However, if you open it, you'll see a lot of different deleted files.
>
> **[1:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=118)** That is because the file system does delete a lot of files and many may be irrelevant to your case.
>
> **[2:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=123)** So if you want to see what the user initiated for deletion, then you can also visit the recycling bin section of the results, which is later on.
>
> **[2:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=132)** But the deleted file section is there for you.
>
> **[2:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=135)** And lastly, you have file size.
>
> **[2:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=137)** This can be beneficial when you know a large amount of media was stored on a device or specifically know the size of the file in question.
>
> **[2:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=144)** So for example, if you're looking for something, let's say you're looking for a zip file that has a lot of pictures of the evidence that you're trying to find.
>
> **[2:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=153)** Well, you know, that that file may be two gigabytes.
>
> **[2:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=157)** Well, it will then be in the one gigabyte or more section of the file size.
>
> **[2:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=162)** So moving on from here, you have data artifacts.
>
> **[2:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=167)** This was previously known as results.
>
> **[2:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=169)** This is also where you're able to find results from the ingests and your search results.
>
> **[2:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=175)** This is where we will spend most of our time as there is a plethora of information gathered here.
>
> **[3:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=180)** In another main area within the tree viewer are the files that you will have tagged as they will be under the tags area.
>
> **[3:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=187)** Because we have no tags, there's nothing here populated currently.
>
> **[3:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=191)** And lastly, we have reports.
>
> **[3:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=192)** And these are reports that were automatically generated by the ingest modules or they were manually created by you.
>
> **[3:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=199)** So if we were to right click on a data source, this will reveal specific information.
>
> **[3:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=203)** So let's go ahead and expand this.
>
> **[3:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=206)** And with this being the data source file, we can right click on it.
>
> **[3:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=210)** And we can see things such as, you know, the image details.
>
> **[3:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=214)** We were able to search for specific files.
>
> **[3:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=217)** We are able to restart the ingest modules.
>
> **[3:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=220)** We're able to extract an allocated space to single files.
>
> **[3:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=224)** Unallocated spaces, the blocks of the file system that are not being used for anything.
>
> **[3:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=228)** In an device image, an allocated space has stored the distinct locations in the file system.
>
> **[3:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=233)** Therefore it would be better to combine those into a single larger file.
>
> **[3:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=237)** Whichever method you prefer, of course, however Autopsy provides analysis for both.
>
> **[4:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=241)** If you choose to keep them separate, there is a folder that will be present here, denoted with the dollar sign, and it's called unaloc that will consist of the unallocated space that contains the information and you can manually extract the files as you normally would.
>
> **[4:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=256)** Moving out to the results viewer, the results of your is different and should not be confused with the results area in the tree viewer.
>
> **[4:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=264)** The results viewer is located on the top right of the main screen.
>
> **[4:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=267)** And it shows the contents of what was selected in the tree viewer.
>
> **[4:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=271)** This usually consists of a table and tab viewers.
>
> **[4:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=275)** The table viewer will list the contents of whatever's currently selected and provide information for that selection.
>
> **[4:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=280)** So for example, if I was to go in and you see that these are folders right here that have more results in them.
>
> **[4:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=288)** However, once you select down to the file itself, you will then see more information regarding that specific file that was not present earlier.
>
> **[4:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=297)** And for files, you will see the modification dates, creation timestamps, size, and more information about the file.
>
> **[5:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=302)** You may also see columns that start with S-C-O on them.
>
> **[5:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=307)** These columns right here.
>
> **[5:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=310)** These are after the file name, the S stands for a score column and indicates whether this item is of interest.
>
> **[5:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=317)** A red exclamation mark means that this file matches a notable hash set.
>
> **[5:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=321)** A yellow icon means that this file is of interest.
>
> **[5:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=325)** The C means the item has a comment in the central repository.
>
> **[5:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=330)** And the O column indicates how many other data sources contain this item.
>
> **[5:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=335)** You may notice that these columns do not have any values in them.
>
> **[5:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=338)** That's because we didn't enable the central repository.
>
> **[5:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=341)** However, there are some instances where you may see it if you do have it open.
>
> **[5:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=347)** While we will not be spending any more time on the central repository feature in this course, I would like to briefly mention that you just need to know that it allows you to collaborate with other analysts on your network, and these columns are used in that collaborative environment.
>
> **[6:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=360)** You also have the option of exporting the contents of the table viewer.
>
> **[6:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=364)** It will be saved to a CSV file.
>
> **[6:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=367)** So I got to do is right click this, save as CSV button and choose a destination.
>
> **[6:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=373)** You can select certain rows or highlight all of the rows.
>
> **[6:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=376)** Additionally, right-clicking allows you to do a few things such as accessing the file in the external viewer.
>
> **[6:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=383)** So for example, opening an HTML file in Chrome or a document in a text editor, such as Notepad.
>
> **[6:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=391)** You can also extract files, which allows you to save a local copy for further analysis, which you may want to include it in your documentation, or analyze it with another forensics program.
>
> **[6:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=401)** You can view in a new window.
>
> **[6:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=403)** And lastly, you can add a file tag, which will help you properly categorize information and allow you to review it later, if you need to support a theory or just come back to it.
>
> **[6:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=414)** For the thumbnail viewer that's located in the results viewer, this displays items as a table of thumbnails.
>
> **[7:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=421)** This viewer only displays certain picture files like gifs, PNG files, and JPEG formatted files.
>
> **[7:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=427)** And if you would like to view files in other formats, you will probably need to use the access file and external viewer function by right clicking that file itself.
>
> **[7:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=437)** The content viewer is located on the bottom right of Autopsy's main screen.
>
> **[7:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=441)** This viewer is generated when you select an item and the results viewer, so let me go ahead and do that.
>
> **[7:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=448)** And with this being on the bottom right, we can enlarge this as to the size of your preference.
>
> **[7:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=453)** The content viewer itself shows the pictures, the videos, the text, metadata, the operating system, account information, and much more.
>
> **[7:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=464)** The hex tab is usually available.
>
> **[7:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=465)** And it shows the raw and extracted contents of a file.
>
> **[7:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=468)** This saves you from needing to open a separate hex viewer.
>
> **[7:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=471)** However, if you prefer, you can do that using the options window, that's located in the tools portion.
>
> **[7:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=477)** So let's go to tools, options, so go to options and then click over to the external viewer, select new rule.
>
> **[8:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=485)** And you'll be able to customize it wherever you would like.
>
> **[8:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=488)** You can either choose the mime type or the extension, or you can simply browse to the file that you're referring to.
>
> **[8:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=495)** The text tab has three sub tabs.
>
> **[8:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=496)** Strings will return all text strings found in the file, and this can be used to see human readable strings inside of file types.
>
> **[8:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=504)** They may also have a lot of other information.
>
> **[8:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=507)** You have indexed text, which shows the text that has been indexed by the keyword search module.
>
> **[8:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=514)** And of course it has translation, which pretty much goes or translates this information to whatever language you're using.
>
> **[8:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=523)** The applications have itself will display the files in a friendly manner if it's a common file type.
>
> **[8:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=529)** So for example, if we have videos, pictures, you know, SQL databases, HTML files, and registry high files.
>
> **[8:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=535)** However, you will see that in this instance it's actually is not highlighted.
>
> **[9:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=540)** This is because the PDF extension does not have a common type.
>
> **[9:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=544)** That's going to open it up.
>
> **[9:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=545)** However, if we were to go to images, whatever image we will have, the application populates.
>
> **[9:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=552)** Next, you have context.
>
> **[9:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=554)** The context tab shows the source of the attached file, allowing you to view the original path.
>
> **[9:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=559)** For example, maybe an image from a chain of emails.
>
> **[9:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=562)** Other occurrences tab will list off where else that this file has been placed in this case.
>
> **[9:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=568)** This is of course, if central repository is enabled.
>
> **[9:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=573)** Annotations shows tabs and comments that you, as an analyst may have made.
>
> **[9:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=579)** And lastly, you have the status area.
>
> **[9:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=583)** And this bar shows the progress of what ingest is occurring.
>
> **[9:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=587)** So to show you this, I'm just going to run something just so we can have the simple sake of showing its status bar because we don't have anything in the examples where it's going to work.
>
> **[9:59](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=599)** We're going to use that.
>
> **[10:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=600)** You see the status bar at the very bottom that has zero or now 1%.
>
> **[10:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=604)** Clicking on this bar will reveal further details or allow you to cancel whatever ingest is being performed.
>
> **[10:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=610)** This may seem like a lot, but no worries.
>
> **[10:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=612)** I only want to give you a high level overview of the interface to help you follow along.
>
> **[10:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=616)** As we work in Autopsy through the rest of this course, you will become more confident and familiar and comfortable with this display and interface.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3), type. (3), case. (2), this, (2)
> **Analogies:** for example (7), such as (3), picture (1)
> **Env Vars:** csv (2), html (2), usb (1), png (1), jpeg (1)
> **Definitions:** is a  (2), means that (2), is an  (1), known as (1), stands for (1)
> **UI Navigation:** go to (4), click on (2)
> **CLI Commands:** find (3), make (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### The image and video gallery
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=0)** - [Instructor] Now that you know Autopsy's user interface, I would like to expand this a little further with a specialized viewer called Image Gallery.
>
> **[0:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=8)** The Image Gallery is a feature that is specifically designed for law enforcement child exploitation cases, but can be used for other investigations as well.
>
> **[0:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=17)** It groups images using folders to help the analyst further separate the photos and focus on those crucial images.
>
> **[0:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=24)** This also allows the investigator to view images immediately, once added to the case, opposed to waiting for it to be ingested.
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=31)** To use this, you have to ensure specific modules are enabled.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=35)** So let's confirm that by right-clicking our Data Source and selecting Run Ingest Modules.
>
> **[0:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=43)** So these are all selected.
>
> **[0:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=45)** So let's confirm that File Type Identification is selected, Picture Analyzer is selected, and Hash Lookup is selected.
>
> **[0:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=55)** Of course, you'll click Finish just to ensure.
>
> **[0:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=58)** Also, I'd like to mention that Hash Lookup requires a Hash Set to be present.
>
> **[1:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=62)** Law enforcement officers would usually download NSRL lists and import them in the Hash Set.
>
> **[1:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=68)** As a quick reminder, NSRL is provided by NIS and it stands for National Software Reference Library, and it's designed to collect software from various sources and incorporate file profiles computed from this software into a reference data set of information.
>
> **[1:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=84)** The RDS can be used by law enforcement, government, and industry organizations to review files on a computer by matching file profiles in the RDS.
>
> **[1:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=93)** This helps alleviate much effort involved in determining which files are important as evidence on computers or file systems that may have been seized as a part of a criminal investigation.
>
> **[1:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=102)** However, it should be noted that the RDS is a collection of digital signatures of known traceable software applications.
>
> **[1:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=111)** There are applications hash values in the Hash Set which may be considered malicious, such as other hacking tools, network sniffers, and other tools.
>
> **[2:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=120)** There are no hash values of illicit data.
>
> **[2:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=123)** So, for example, child abuse images or anything of such nature.
>
> **[2:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=127)** While the NSRL is not applicable to our situation, it still may be needed for situations where you may need it.
>
> **[2:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=134)** If you need to use this feature or this list, for any reason, you can download it at [sourceforge.net/projects/autopsy/files/NSRL](https://sourceforge.net/projects/autopsy/files/NSRL).
>
> **[2:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=146)** Regarding the type of file you would download depends on the exact thing that you are analyzing, and that is beyond the scope of this video.
>
> **[2:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=154)** If you need to use the NSRL for any reason, you can download it at [sourceforge.net/project/autopsy/files/NSRL](https://sourceforge.net/project/autopsy/files/NSRL).
>
> **[2:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=165)** This, specifically, would be downloaded depending on what type of file that you may need.
>
> **[2:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=171)** After you download any file that you think is applicable, you will have to go to Tools, Options, Hash Sets, and then click Import Hash Set.
>
> **[3:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=183)** That was more of an FYI for you, however, once again, we will not need that in this course.
>
> **[3:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=188)** The Image Gallery can be configured to collect data about images or videos after ingestion is completed or while the ingest is in progress.
>
> **[3:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=198)** This is specific to each case and cannot be changed during ingest.
>
> **[3:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=202)** However, to use the Image Gallery, you can click on Images/Videos.
>
> **[3:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=208)** A new window will pop up, let me bring it over to the screen.
>
> **[3:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=212)** This will cause Autopsy to open up a new window.
>
> **[3:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=215)** In the left panel you will notice that there are two tabs, All Groups and Only Hash Hits.
>
> **[3:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=220)** This is where the Hash Set that I referred to previously will be included.
>
> **[3:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=226)** However, because we will not be having Hash Sets in this instance, or at least any that will be utilized, we will look at the Path, as I recommend Paths as they are pretty important just due to the ease of being able to analyze those images.
>
> **[4:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=241)** For example, you can go down to Downloads and see exactly what was downloaded, but that's something that's simple.
>
> **[4:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=246)** It's also important as this shows the image location, which may reveal something of interest, for example, if a user attempts to hide a file in the program data folder.
>
> **[4:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=255)** As each group is reviewed, the next highest priority group is presented according to a sorting criteria, and the default is usually the density of the Hash Set Hits.
>
> **[4:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=266)** Once again, you have to tap here and that's where the Hash Set comes into play, which is also why it's as important as it is.
>
> **[4:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=273)** Images that were hid from the Hash Sets will usually have a dashed border around them, but don't worry about that in our case as we don't have any.
>
> **[4:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=281)** You can also use the menu bar on the top of the group to categorize the entire group.
>
> **[4:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=287)** You can right-click on an image to categorize or tag an individual image.
>
> **[4:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=290)** So, for example, you know if you want to categorize, says, okay, this is Windows in the Cloud, well, that's not really important.
>
> **[4:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=297)** All right, now I'm printin it.
>
> **[4:59](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=299)** You can right-click in Categorize to whichever is beneficial or you can simply add a text such as Notable Item, Follow Up, or just simply to Bookmark.
>
> **[5:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=309)** It should be noted that, of course, you can tag with customizable tags, but an image can only have one categorization, but it can have multiple tags.
>
> **[5:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=319)** And that is the Image/Video gallery.

> [!info]- Semantic Content
>
> **Env Vars:** nsrl (6), rds (3), nis (1), fyi (1)
> **Code Keywords:** let (3), this, (2), interface (1), case, (1)
> **Analogies:** for example (4), such as (2), picture (1)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **Definitions:** is a  (2), stands for (1)
> **URLs:** [sourceforge.net](https://sourceforge.net) (2)
> **Speakers:** - [instructor] (1)

#### The timeline tool
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=0)** - [Trainer] The next specialized viewer, we will discuss is the Timeline feature.
>
> **[0:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=4)** As of this specific version, it should be installed.
>
> **[0:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=7)** However, if you have autopsy 4.13 or previous installations, the timeline events are not going to be present.
>
> **[0:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=16)** There are a few modules you will also want to enable during the ingest.
>
> **[0:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=19)** First, let's go to the tools, click run ingest modules, and ensure the following are all selected.
>
> **[0:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=29)** I personally deselected these to not confuse you, I would not recommend deselecting these yet.
>
> **[0:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=34)** First, you want to make sure that the hash lookup module is enabled as this uses the NSRLs to ignore known files, which we covered last video.
>
> **[0:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=46)** Secondly, you want to make sure that the recent activity module is enabled.
>
> **[0:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=50)** This generates web related events.
>
> **[0:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=53)** Next, you'll want to make sure that the exif-parser module is enabled.
>
> **[0:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=58)** Next, you will want to make sure that the picture Analyzer is enabled to ensure events based off of the stored meta data is also included.
>
> **[1:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=67)** Lastly, enable any other ingest that you think could be useful.
>
> **[1:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=70)** So for example, if we were analyzing a tablet, we want to enable the Android Analyzer module.
>
> **[1:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=76)** So in this instance, it could be whatever we decide.
>
> **[1:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=79)** However, for simplicity sake, I will continue using these here.
>
> **[1:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=84)** To open this feature, you need to go to tools and go to timeline, or you can simply just select the timeline function button.
>
> **[1:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=92)** We will have to wait until the data is finished processing to get the full timeline.
>
> **[1:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=96)** This info will be presented in a bar graph called counts, which uses the number of events.
>
> **[1:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=101)** You can use this view to see the amount of activity for a given timeframe.
>
> **[1:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=104)** So for example, if you have a case where the suspect claims to not have used the device, let alone possess it, you can use this count feature to support or deny their claim.
>
> **[1:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=114)** This view can be changed to a list or details in a top.
>
> **[1:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=118)** Now, of course, I can't do anything just yet because it's almost done, but you can change the details.
>
> **[2:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=125)** This is best used after identifying the window of time.
>
> **[2:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=129)** Given the same example, you can use this to answer any questions about the specific event such as did this user or suspect log into an account online, which will also verify that this user was utilizing this device at the time of the incident.
>
> **[2:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=142)** View mode will populate in a second.
>
> **[2:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=146)** The list view shows every event in the order of occurrence.
>
> **[2:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=150)** This is most helpful when you want to see what other activity occurred around the time of that incident.
>
> **[2:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=154)** Using the same example, you can use this to look at what happened after the successful login.
>
> **[2:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=160)** You may notice that the user went to the Google Drive and uploaded a few files affecting that Gmail account.
>
> **[2:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=167)** Both lists and details would be useful with filters that will reduce the number of events shown.
>
> **[2:53](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=173)** The filters of course are going to be on your left panel, which I think a specific filter ticks any answer may be tagged.
>
> **[3:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=180)** Anything that relates or corresponds with the hash set, That was (indistinct) as well.
>
> **[3:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=186)** Once you select any of these files, don't be too concerned about a long loading time.
>
> **[3:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=193)** This may be specific or vary depending on your computers' processing time and power in addition to the size of the image itself.
>
> **[3:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=202)** I did provide a large one, so don't be surprised if it takes some time, it's okay.
>
> **[3:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=206)** So after selecting stuff, you will see a bunch of information in the Content Viewer, where you can further analyze anything that you may find interesting.
>
> **[3:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=215)** Is important to note that each event has a type, a description and a timestamp.
>
> **[3:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=220)** The timeline collects data from the file system for the timestamp information web activity in other places like calls, emails, recent documents, registries, and more.
>
> **[3:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=230)** I would highly recommend being familiar with timeline functionality as it can also add to anything that you may be looking for if you want to get the full picture of an investigation.

> [!info]- Semantic Content
>
> **Code Keywords:** module (4), let (2), continue (1), function (1), type, (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** picture (2), for example (2), such as (1)
> **UI Navigation:** go to (3), select the (1)
> **Versions:** 4.13 (1)
> **Cross-References:** we covered (1)
> **Warnings:** note that (1)
> **Speakers:** - [trainer] (1)


### 4. Searching and Reporting

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Searching for keywords and files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=0)** - [Instructor] Autopsy can extract a lot of information in files.
>
> **[0:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=4)** There are many times where you may have an idea of what you want to look for.
>
> **[0:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=8)** We will utilize Autopsy's search functionality.
>
> **[0:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=12)** The file search tool is accessed from the tool menu or by right clicking the data source node in the directory tree.
>
> **[0:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=20)** So let's go ahead and do that.
>
> **[0:21](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=21)** We're going to right click and you're going to select open file search by attributes.
>
> **[0:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=26)** This allows you to filter directories and files that you want to view.
>
> **[0:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=30)** There are several categories you can use to find files and directories.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=35)** You can use any of these as criteria to build your case.
>
> **[0:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=38)** It is important to check the note with the asterix near the text field.
>
> **[0:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=42)** For example, name matches case sensitive and matches any part of the file name.
>
> **[0:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=47)** Regular expressions are not currently supported.
>
> **[0:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=50)** These results are populated in the top, right window of the browser.
>
> **[0:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=55)** So to give you a quick example, I will populate anything with the word example in it.
>
> **[1:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=63)** And there you go.
>
> **[1:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=65)** Fortunately, this has nothing to do with the case.
>
> **[1:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=67)** I just want to give you a quick example of everything that's going to be populated.
>
> **[1:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=72)** So I'm going to exit out of this.
>
> **[1:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=74)** You also have the ability to search a single keyword or a list of keywords.
>
> **[1:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=78)** Both options are located in the top right of Autopsy, via texts with an icon next to them.
>
> **[1:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=84)** This is featured as the ad hoc keyword search module.
>
> **[1:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=87)** Individual keywords and regular expressions can be quickly searched here using the search text box widget.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=94)** You have the option to restrict the search to certain data sources.
>
> **[1:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=97)** Fortunately, for us, we only have one.
>
> **[1:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=100)** If you do select the box that says save search results, the results will be saved to the directory tree as well.
>
> **[1:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=107)** Otherwise it will be in the results viewer window.
>
> **[1:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=109)** So for the sake of example, we're going to say Bennett.
>
> **[1:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=114)** So when selecting Bennett, you see the word Bennett itself populated a few different results with it.
>
> **[1:59](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=119)** However, what you will not notice is that it's not included in this section.
>
> **[2:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=124)** So if I were to do the same thing and save the results and type in CyberBennets make it a little different.
>
> **[2:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=134)** You will notice that CyberBennett is now option.
>
> **[2:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=137)** So when you click the save search results, it will be populated as an option here.
>
> **[2:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=144)** So going back to this window, exact matches best use when the search term is the root.
>
> **[2:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=149)** For example, virus is a word that is rarely extended or dependant with any postfix.
>
> **[2:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=155)** Substrings should be used, where the search term is a part of another word.
>
> **[2:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=159)** And you want all instances.
>
> **[2:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=161)** For example, data, this can result with database, data, or metadata.
>
> **[2:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=167)** For regular expressions, these can be used for specific patterns and regular expressions support, many kinds of wild cards.
>
> **[2:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=174)** This way you be catching all cases in all instances.
>
> **[2:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=178)** The ad hoc searches are intended to be used after the ingest completes.
>
> **[3:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=182)** If the ingest is ongoing, the searches will work with limited capacity.
>
> **[3:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=186)** Additionally, you won't be able to edit the keyword lists during the ingest, but you can't copy them to a new list.
>
> **[3:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=192)** My suggestion is just to wait until the ingest is finished to ensure your findings are accurate.
>
> **[3:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=198)** When referring to the keyword list, I'm referring to the keyword list, the button itself.
>
> **[3:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=202)** Here, you have a variety of options.
>
> **[3:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=204)** You have phone numbers, IP addresses, email addresses, URL, and credit card numbers.
>
> **[3:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=209)** Select any of that may apply that you may want to find and you can go from there.
>
> **[3:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=214)** If you want to manage a list or add something else, you can select that as well, and select new list.
>
> **[3:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=220)** Here, we can create our lists, whatever the keyword itself may be.
>
> **[3:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=226)** You can copy it from clipboard for taking this data from somewhere else, or you can manually put them in so every result will populate a specific instance.
>
> **[3:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=234)** Either way, this works best if there's something you may want to test.
>
> **[3:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=238)** So in some examples, this would be beneficial if you have a list of users or usernames that you will want to use regarding the case.
>
> **[4:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=245)** So select okay, when you're done.
>
> **[4:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=248)** And that's how to use the keyword lists.
>
> **[4:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=251)** If you go to the keyword search and you type in H-sport-employee-info.CSV and click the exact match and search, you will see some files that may be interesting.
>
> **[4:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=266)** However, what you also will notice is that these files are not the same as what's included in our interesting files module that we did in the last chapter.
>
> **[4:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=278)** As mentioned, we have 43 results here when using a keyword search.
>
> **[4:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=283)** However, in our listings, we only have four documents.
>
> **[4:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=287)** This is because the keyword search found this string in the text files.
>
> **[4:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=292)** So if you used to go and click any of these, you will notice that the phrase H-sport-employee-info.csv is in every single one of these.
>
> **[5:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=306)** Opposed to the listing, which simply just looks for the files that the file names.
>
> **[5:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=311)** I mentioned this as it helps underlying the way that Autopsy works and it helps you identify which way you can use the keyword search.
>
> **[5:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=318)** In our next video, we will cover tagging.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (3), module (2), else, (2), for. (1), let (1)
> **CLI Commands:** find (2), node (1), make (1)
> **Analogies:** for example (3)
> **File Paths:** h-sport-employee-info.csv (2)
> **Env Vars:** url (1), csv (1)
> **Cross-References:** in the last (1), next video (1)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)

#### Tagging
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=0)** - [Instructor] In this video, we will cover tagging.
>
> **[0:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=2)** Tagging is another name for bookmarking, and this allows you to mark and refer to a file of interest for later usage.
>
> **[0:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=8)** You can do this by right-clicking on an object and choosing the appropriate tag.
>
> **[0:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=12)** I want to show you that you will notice that there's two different types of tags.
>
> **[0:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=16)** First, there's the result tag.
>
> **[0:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=20)** Second, there's the file tag.
>
> **[0:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=23)** So you may be wondering, well, what's the difference?
>
> **[0:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=26)** Well, you can use a file tag when a certain file is of interest.
>
> **[0:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=30)** For example, let's say you're working on an investigation for a suspected cheating spouse.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=35)** Well, you found some pictures of someone that isn't the person who may have hired you.
>
> **[0:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=39)** So you decided to tag those photos.
>
> **[0:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=42)** Now regarding anything that says add result tag, this is specifically for results that are generated from the modules themselves.
>
> **[0:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=52)** There are three options when tagging.
>
> **[0:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=54)** You can use an existing tag, which are these here.
>
> **[0:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=57)** You can tag and comment, and you can create a new tag.
>
> **[1:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=62)** The pre-existing tag names will already have a description.
>
> **[1:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=65)** So the comment would have to be something additional that would also need to be noted, such as the location it was found.
>
> **[1:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=72)** Maybe the file was deleted to destroy the proof, which shows that the user was aware of its existence.
>
> **[1:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=77)** There are several default tag names.
>
> **[1:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=79)** You have bookmark, which is the default tag for marking files of interests.
>
> **[1:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=83)** You have category one through five, which is mainly used for law enforcement usage.
>
> **[1:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=88)** You have follow-up, which is of course to follow-up on.
>
> **[1:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=92)** And you have notable items.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=94)** The default tag, which is the default tag for indicating that an item should be marked as notable in the central repository.
>
> **[1:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=100)** Creating a custom tag will be automatically saved for future reference and will be above the default tags.
>
> **[1:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=106)** So for this example, we're going to create a tag that is titled H+ Sport Files.
>
> **[1:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=116)** We're actually, we're going to call it Leaked H+ Sports Files.
>
> **[2:01](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=121)** And the description is, I'm just going to put something here as a placeholder, but okay.
>
> **[2:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=126)** So once you get done typing out whatever you may need to type, you can select OK.
>
> **[2:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=131)** And you will also notice this yellow exclamation point.
>
> **[2:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=134)** This exclamation point has been referenced in the previous video.
>
> **[2:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=139)** Creating a custom tag name will automatically be saved for the future, it will be above the default tags.
>
> **[2:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=145)** There's an option to tag a group of items as well.
>
> **[2:28](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=148)** You can simply highlight all the items you will want to tag by clicking the first one, and then going to whatever other files you want to add, select shift and select the rest.
>
> **[2:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=160)** Once you right-click, you can click Add Results, and add it to whatever you decide you may need to.
>
> **[2:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=168)** Because these actually do not apply, I will not include it in this instance.
>
> **[2:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=175)** Once you get done tagging something, you can also review the tag in tree viewer by scrolling down and going to the Tags folder itself, where are you in notice that the tag name is the exact tag that you gave it.
>
> **[3:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=189)** Another tagging feature is called image tagging.
>
> **[3:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=191)** This allows you to tag a portion of an image when you are viewing it in Content Viewer.
>
> **[3:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=196)** This feature is only available for Windows.
>
> **[3:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=198)** However, to perform this action, you need to have selected an image in the results viewer.
>
> **[3:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=202)** So let's do that.
>
> **[3:24](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=204)** So I'm going to go up to Images, and I'm going to select the random one.
>
> **[3:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=213)** Actually because I wanted to make sure it's an image, I'm going to go ahead and go to the image itself and then select a specific JPEG.
>
> **[3:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=222)** Welcome scan.
>
> **[3:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=223)** Sounds good enough to me.
>
> **[3:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=225)** So once you get here, we're going to enlarge the Content Viewer, so you're able to see, and you'll notice that there's a tags menu in the upper-right.
>
> **[3:52](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=232)** So go to that and select it.
>
> **[3:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=234)** You can go to create.
>
> **[3:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=236)** This feature will work best when you want to identify a specific object across various pictures, and you may need to refer to them later.
>
> **[4:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=243)** For example, let's say you are gathering data for a amateur assassin.
>
> **[4:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=247)** The suspect is seen with another individual across a few different photos.
>
> **[4:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=251)** So you tag both him and the accomplice.
>
> **[4:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=254)** You later find out that this is his brother, and can provide this information to attorneys in a given report.
>
> **[4:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=260)** By tagging both individuals, you won't have to go search for both people in the photos all over again.
>
> **[4:25](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=265)** You can select, resize, and delete an image tag.
>
> **[4:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=269)** While this is a harmless photo, and there's nothing in here of importance, you have two left-click somewhere near the image tag that you will want, select whatever you may want to select.
>
> **[4:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=282)** You can have it tagged or categorized in any of the existing tag names, and you can also add a comment.
>
> **[4:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=289)** So I'm going to create a new one, and it's called an example because this lovely flower is not a part of any investigation.
>
> **[4:57](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=297)** After you make the tag, you will have the option to be able to resize it, to delete it, to edit it, and go from there.
>
> **[5:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=305)** Lastly, the list of tags can be managed through the Tags tab in the Options menu.
>
> **[5:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=310)** To go here, you go to Tools, go to Options, and you go to Tags, Custom Tags, where you will see a compilation of all the tags you have created.
>
> **[5:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=323)** It should also be noted that deleting a tag does not remove it from any tagged items.
>
> **[5:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=327)** And that tag will also be usable in any case that it has been used in.
>
> **[5:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=332)** Now that we discussed tagging, in the next video, let's go ahead and cover reporting.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), select the (2), right-click (1)
> **Code Keywords:** let (4), delete (2), type, (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** previous video (1), we discussed (1), in the next (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** jpeg (1)
> **Prerequisites:** you need to have (1)

#### Generating reports in Autopsy
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=0)** - [Instructor] The report module allows the user to extract key information from a case in a variety of formats, which include HTML, Excel, Text, CSV, just to name a few.
>
> **[0:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=11)** Most report types require you to select which data source to include.
>
> **[0:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=15)** Fortunately, for us, we only have one, so we don't need to worry about that for now.
>
> **[0:19](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=19)** The names of the excluded data sources may appear in the report, regardless of them being selected or not being selected.
>
> **[0:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=26)** Majority of the report modules will generate a report file displayed under the reports note in the tree viewer.
>
> **[0:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=33)** These are automatically generated for a specific modules.
>
> **[0:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=35)** And in our case, if we go to there, we will see recent activity as the main module.
>
> **[0:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=40)** Once again, I want to remind everyone that you may not have as many results as me because a couple of these modules have ran a few times.
>
> **[0:48](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=48)** If the report has a specific viewer, such as Excel for CSV reports, you can open it in an external application.
>
> **[0:54](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=54)** Now, let's create a basic report based off our findings.
>
> **[0:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=58)** Select generate report.
>
> **[1:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=60)** For HTML reports, you can choose both a header or footer to be displayed with the results.
>
> **[1:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=67)** Once you select next, this is the data source I was referring to, and you can also include our results are specifically those that are tagged.
>
> **[1:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=75)** If you choose our results, you will be prompted further with the types of artifacts to include in that report.
>
> **[1:20](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=80)** So for example, you can select or deselect any of these that you may find irrelevant or relevant to your case.
>
> **[1:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=90)** If you do specific Tag results, you can select whichever tags you may want as well.
>
> **[1:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=96)** Once you decided to select whatever you want, you select finish, a report will be created, and it will also be provided in the node.
>
> **[1:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=106)** You can see the results at the very bottom here.
>
> **[1:50](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=110)** Alternatively, if you remember where the case folder is at, you can go there as well.
>
> **[1:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=116)** Going there, you will see the report that was generated in the HTML file.
>
> **[2:02](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=122)** An Excel report is pretty much similar to the HTML report, however, it will create an Excel file with a proper extension.
>
> **[2:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=130)** The remaining report options are not as commonly used, but I can cover them briefly.
>
> **[2:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=136)** If you select the safe tagged hashes, this will specifically be used to add hashes to an autopsy hash set so it can be used by the hash lookup in the future.
>
> **[2:26](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=146)** After configuring this module to create a new hash set to write to, or use an existing one, it will tag matching files and new cases.
>
> **[2:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=154)** If you use files dash texts, this allows you to create a report of all files in the current case.
>
> **[2:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=161)** It can be tagged in limited or comma.
>
> **[2:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=163)** You will then have a list of items to include in the report that you can select or de-select, similar to HTML files.
>
> **[2:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=175)** And if you use Google Earth KML, this will create a KML file from any GPS data in the case and is used with Google Earth.
>
> **[3:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=183)** And now we have finally covered all the chapters in the learning autopsy course.
>
> **[3:07](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=187)** Next is the chapters challenge.

> [!info]- Semantic Content
>
> **Env Vars:** html (5), csv (2), kml (2), gps (1)
> **Code Keywords:** module (3), case. (2), require (1), include. (1), case, (1)
> **Analogies:** similar to (2), such as (1), for example (1)
> **CLI Commands:** find (1), node (1)
> **UI Navigation:** go to (1), select the (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Search for all instances of a file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=6)** - [Instructor] In this chapter, we learned about file searching, tagging and generating reports.
>
> **[0:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=11)** For this challenge, I want you to search for the new logo that was leaked.
>
> **[0:15](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=15)** And once you find it, look for all instances of the logo by using the file search capability and the hash of that logo.
>
> **[0:23](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=23)** If you recall, we did actually see this new logo present in a previous challenge.
>
> **[0:29](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=29)** Once you're done with that, go to the next video for our solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Search for all instances of a file
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=0)** - [Instructor] The solution for this challenge is built upon chapter two's challenge.
>
> **[0:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=10)** If you remember the H+ executable file that we analyzed in chapter two, you will notice that in the Application tab, you saw the leaked logo.
>
> **[0:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=18)** So let's go back there by expanding Analysis Results, Extension Mismatch Detected.
>
> **[0:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=27)** Another hint at this was noticeable by the jpeg justification and MIME type.
>
> **[0:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=34)** So if we increase this, you see the logo.
>
> **[0:38](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=38)** And going to File Metadata, you're able to grab the MD5 hash.
>
> **[0:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=45)** I'm going to Control C to copy it, since I don't have the option to right-click and copy it.
>
> **[0:51](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=51)** Once you do that, you can go to the Data Sources, right-click and Open File Search by Attributes.
>
> **[0:58](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=58)** If you go to MD5, paste the value in there and click Search, you shall then... Hmm.
>
> **[1:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=68)** Okay. So I'm going to try again.
>
> **[1:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=70)** I'm going to go to here.
>
> **[1:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=73)** H+ SPORT.
>
> **[1:16](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=76)** We are going to grab the file meta... Actually, you could just use the SHA-256.
>
> **[1:27](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=87)** Control copy that in.
>
> **[1:30](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=90)** Go back to File Search for Attributes.
>
> **[1:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=92)** If you notice, I used a different method, 'cause there's multiple ways you can do this.
>
> **[1:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=97)** Ah, okay.
>
> **[1:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=99)** So this is a good point that I did not think about.
>
> **[1:41](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=101)** The reason this was not found was because I have the name, here, highlighted from my previous example.
>
> **[1:46](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=106)** So we can select the MD5.
>
> **[1:49](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=109)** But now that I got the SHA-256, I'm just going to use that instead.
>
> **[1:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=115)** Once I do that, then the results are going to show up.
>
> **[1:59](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=119)** So if you were not able to find it, please be sure that you actually did have the SHA or MD5 hash, and only that option selected.
>
> **[2:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=129)** So once again, you'll notice that we have four different instances of the file being present on this desktop.
>
> **[2:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=134)** You can look at the information, the Modified Time, the Change Times, and the dates they were accessed, if you want more information regarding them.
>
> **[2:22](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=142)** If you select them, you will notice on the application that, indeed, these are all identical copies, despite the different file names themselves.
>
> **[2:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=151)** And lastly, if we wanted to just confirm, to see where all these files were located, you do have the executable that was located in the Pictures directory.
>
> **[2:39](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=159)** However, everything else was hidden someway, somehow, in a different, unknown program file.
>
> **[2:45](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=165)** Nonetheless, that is the solution for the challenge for this chapter.

> [!info]- Semantic Content
>
> **Env Vars:** md5 (4), sha (3), mime (1), sport (1)
> **UI Navigation:** go to (3), right-click (2), select the (1)
> **Code Keywords:** let (1), type. (1), this, (1), this. (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps: Create your own case and analyze your files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980&t=0)** - And thank you for joining me for this Autopsy course.
>
> **[0:03](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980&t=3)** I really hope that you enjoyed it, the journey, the course, the information, and you understand how valuable Autopsy is, how powerful it is, and how much you can use that tool to your advantage.
>
> **[0:14](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980&t=14)** For more information, I'd highly recommend you go to Autopsy's website.
>
> **[0:18](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980&t=18)** They do have a blog that's fairly active, and in case you want to find additional resources and training available, you can find disc images online through various websites or image your own desktop for your own analysis.
>
> **[0:31](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980&t=31)** To remain in contact with me, you can add me on LinkedIn, or you can also go to [cyberbennett.com](https://cyberbennett.com).
>
> **[0:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980&t=37)** Thanks for watching. Good luck, thanks.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** go to (2)
> **URLs:** [cyberbennett.com](https://cyberbennett.com) (1)
> **Speakers:** - and (1)


## Instructor

- [[Bennett Hendrix]]

## Resources

- Exercise files available

## Skills Covered

- Digital Forensics

## Path Context

### In [[Explore a Career in Computer Forensics]]
← [[Protecting Your Network with Open-Source Software]] | **7 of 9** | [[Soft Skills for Information Security Professionals]] →

## Appears In

- [[Explore a Career in Computer Forensics]]

---

[↑ Back to top](#)