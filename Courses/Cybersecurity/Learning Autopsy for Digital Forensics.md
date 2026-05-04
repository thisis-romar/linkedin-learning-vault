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
  - '[Explore a Career in Computer Forensics](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Computer%20Forensics.md)'
prev_courses:
  - '[Protecting Your Network with Open-Source Software](Protecting%20Your%20Network%20with%20Open-Source%20Software.md)'
next_courses:
  - '[Soft Skills for Information Security Professionals](Soft%20Skills%20for%20Information%20Security%20Professionals.md)'
path_nav: '[{"path":"Explore a Career in Computer Forensics","position":7,"total":9,"prev":"Protecting Your Network with Open-Source Software","next":"Soft Skills for Information Security Professionals"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/digital-forensics
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Learning%20Autopsy%20for%20Digital%20Forensics.md)

![Learning Autopsy for Digital Forensics](https://media.licdn.com/dms/image/v2/C560DAQGUv76gCM-4cA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643742664904?e=2147483647&amp;v=beta&amp;t=Ca4DShYlHixAmhuvnORyuQDFnPPDRCvL1sU7TcNNmnM)

# Learning Autopsy for Digital Forensics

> Anyone who’s ever used a computer has lost or accidentally deleted a file. In other instances, people often want to erase their digital tracks and hide their information and activity. If you work in digital forensics, recovering files and reconstructing a person’s activity on a computer can require finding and analyzing data from several sources. In this course, Bennett Hendrix III shows you the b

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics) | 1h 23m | Beginner | 24K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Hey, where's the data?](#hey-wheres-the-data)
  - [Getting the most out of this course](#getting-the-most-out-of-this-course)
- [**1. Preparing Autopsy**](#1-preparing-autopsy) (7 videos)
  - [Introduction and installation of Autopsy](#introduction-and-installation-of-autopsy)
  - [Autopsy workflow](#autopsy-workflow)
  - [Creating a case](#creating-a-case)
  - [What data sources are allowed?](#what-data-sources-are-allowed)
  - [Viewing case logs and output](#viewing-case-logs-and-output)
  - [Challenge: View case logs and output](#challenge-view-case-logs-and-output)
  - [Solution: View case logs and output](#solution-view-case-logs-and-output)
- [**2. Ingest Modules**](#2-ingest-modules) (6 videos)
  - [Utilizing Automated Analysis in Autopsy](#utilizing-automated-analysis-in-autopsy)
  - [The Extension Mismatch and USB device-attached modules](#the-extension-mismatch-and-usb-device-attached-modules)
  - [The Recent Activity and Interesting Files modules](#the-recent-activity-and-interesting-files-modules)
  - [Installing third-party modules](#installing-third-party-modules)
  - [Challenge: Install a third-party module](#challenge-install-a-third-party-module)
  - [Solution: Install a third-party module](#solution-install-a-third-party-module)
- [**3. Reviewing Results**](#3-reviewing-results) (3 videos)
  - [UI layout](#ui-layout)
  - [The image and video gallery](#the-image-and-video-gallery)
  - [The timeline tool](#the-timeline-tool)
- [**4. Searching and Reporting**](#4-searching-and-reporting) (5 videos)
  - [Searching for keywords and files](#searching-for-keywords-and-files)
  - [Tagging](#tagging)
  - [Generating reports in Autopsy](#generating-reports-in-autopsy)
  - [Challenge: Search for all instances of a file](#challenge-search-for-all-instances-of-a-file)
  - [Solution: Search for all instances of a file](#solution-search-for-all-instances-of-a-file)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps: Create your own case and analyze your files](#next-steps-create-your-own-case-and-analyze-your-files)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Hey, where's the data?](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/hey-where-s-the-data?u=76281980&t=0)** - Between being at the [office](../../Skills/Web%20Development/Microsoft%20Office.md), being at home, or at school, we are always using our computers. And unfortunately, things do happen. Those things may be ransomware, viruses, or losing your files. Autopsy is used by our military, law enforcement, and investigators to determine what happened on a computer. This can be applied in a multitude of situations, any of which involves a computer. Autopsy can be used by anyone to retrieve deleted files and folders that were emptied from the Recycling Bin. Whether you are a [Cybersecurity](../../Topics/Cybersecurity.md) professional, law enforcement, or a hobbyist, there is something for you to learn with this course. Being able to reconstruct a person's activity on a computer and establish a timeline is something that everyone can benefit from. How you doin', my name is Bennet Hendrix III, a.k.a. CyberBennett. I am currently a SOC analyst at a global company, and I have a strong passion for [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md). I have used Autopsy countless times, and I say all this to say you are in good hands with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Cybersecurity](../../Topics/Cybersecurity.md) (1), [Digital Forensics](../../Skills/Cybersecurity/Digital%20Forensics.md) (1)
> **Env Vars:** iii (1), soc (1)
> **Speakers:** - between (1)

#### [Getting the most out of this course](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/getting-the-most-out-of-this-course?u=76281980&t=0)** - H+ Support has an upcoming product release. Before that release, they received a threat via email that said basically to pay us some money so we don't release this before you do. Unfortunately, they discovered it was legitimate and had some of their data leaked, resulting in their stock dropping and slightly tarnishing their reputation. H+ Support have reasons to believe that they know who is responsible for the leak. As a suspect is an employee of a contractor. They were able to image the host and provide it to us. They gave us a disk image from their internal employee, which we will be using to determine what exactly happened. In order to determine this, we will be utilizing Autopsy and being able to reconstruct that timeline.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - h (1)


### 1. Preparing Autopsy

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction and installation of Autopsy](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=0)** - [Narrator] Autopsy is a digital forensic platform and graphical interface to the sleuth kit and other digital forensic tools. It is used by law enforcement, military, digital forensic enthusiasts, and corporate examiners to investigate exactly what happened on a computer. It is designed to be easy to install and usable right out of the box and simple to navigate. In this chapter, we will cover some preparation tips for autopsy in addition to installing it. In order to install your copy of Autopsy, go to [autopsy.com](https://autopsy.com). Once you get there, you will have the option to download the latest version of the software. In this course, we will be using 4.19.2. While other versions may be released in the future, this course will still be relevant and accurate as it covers the fundamentals. So go ahead and select the download button. You will be brought to the download page where you can download the specific version that you like. We will use the 64 bit version. Once you get that downloaded, we will open our file and begin the installation. The installation is very straightforward and simple. It does, however, require admin privileges. I'd like to also forewarn you that when you open the file, your antivirus may ask if you trust the software. This is because the vendor did not sign this copy of Autopsy for some reason. However, it is trustworthy, as long as you get it from the Autopsy website. This website is free and there's no reason to go to a third party website for the download. Also, you should consider configuring your antivirus to ignore a contents in your case output directory.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/introduction-and-installation-of-autopsy?u=76281980&t=94)** Some false positives may be triggered. Some files may also be blocked before you get the chance to look at them. While this can be prevented by disabling your antivirus, I would never recommend that due to security concerns. There are two ways to deploy Autopsy: single user and multi-user. The main difference is that single user cases are the only instance of Autopsy in one given moment, and it's easy to install. Whereas multi-user is opened by multiple users who are able to see what each other is doing and collaborate and requires installation and configuration of other network-based services. Before beginning our Autopsy workflow video, I would like to assure you that you may see a prompt from [Windows](../../Glossary/Service/Windows.md) that Autopsy wants to communicate with other devices on your network. In order to do this, Autopsy wants to open some firewall ports on your network. This is expected and totally fine. You can choose to enable or disable this, and it will not interfere with our objective. Autopsy should be done by the time you are done with the prompt. In the next video, we will briefly cover Autopsy's workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** go to (2), select the (1), open the (1)
> **Prerequisites:** install (3)
> **URLs:** [autopsy.com](https://autopsy.com) (1)
> **Versions:** 4.19.2 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### [Autopsy workflow](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/autopsy-workflow?u=76281980&t=0)** - [Instructor] Now that we have installed Autopsy, it will be best to understand the workflow and know the normal process overall. This course is structured in alignment to the process so I will use this diagram as a reference point. First, you have to create the case. A case is another term for a container that has at least one data source. This is required to use Autopsy and analyze any data using Autopsy. The second step in the workflow is to add the data source into the case in run ingest modules. Data sources include files, folders, and disk images. Whereas afterwards, the ingest modules will analyze the data in the background and the results will be posted to the interface as they are populated. Once that is complete, the third step is to manually review those results. Of course, as you review those results, you gather those of interest and you can also search for a specific artifacts and you can tag those as well. This is covered in a later video in one of the last few chapters. Lastly, you can generate the report. In order to accomplish this, you can use tags and results and simply create a report from those findings. Now that you have an idea of the process, let's begin the first step and create our case in the next video.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Creating a case](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=0)** - [Instructor] The only way to analyze the data in Autopsy is to create the case. A case contains a data source, which can be a disk image, a disk device, or a logical file. Remember, a disk device is a hard drive, while logical files are the files that do not contain data. They do contain a description of records found in one or more physical file. In this lab, we will use a virtual disk file to analyze. Now that you have a little insight, let's go ahead and create the case. When you launch Autopsy, you will see three options that are pretty straightforward. We will select New Case, since the other two options require a case to already be created. The case name we can use will be Learning Autopsy Lab. As far as the base directory, you can place this wherever you see fit. For simplicity, we can just go ahead and go to Documents, create a cases directory, and use that. However, make sure that your case name is unique and not a duplicate. If I select Next, I receive an error, basically saying that this lab and this case number already exist. So basically, make sure that this is unique. So to make sure that this is not going to conflict with anything that I have, I would just put Test next to it. Once you're done with that, select Next. You will be prompted for additional information such as your case number. For us, we're going to just throw 001.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/creating-a-case?u=76281980&t=94)** You'll be also prompted for your name and other information. Do not worry about the organization, as organization will only be active if you have central repository enabled. Now that you have successfully created a case, you'll be prompted to add the data source next. But because that is in the next video, select Cancel. There will not be any information displayed, as Autopsy does not have any data to analyze. Moving on, if you want to view or confirm that you entered the correct details for your case, you can always do this by selecting Case in the top menu. Select Case Details, and you will be able to view it. You can also edit this information if something was to change later on, such as your phone number, or you can simply close it. Autopsy's default configuration case file is using a .aut file extension. This is something that you may need to note if you plan to search for the case file by file extension. Now that you created your case, confirmed the details, and know how to edit those details, if you prefer, let's move on to the next video where we will add our data source.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Cross-References:** in the next (1), next video (1)
> **Analogies:** such as (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [What data sources are allowed?](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=0)** - [Instructor] Now that you created a case, we can add a data source. So, you may be wondering what data sources are allowed. Well, great question. As understanding this will help you determine what you're able to investigate and analyze. Autopsy supports multiple types. And before going over those, let's do a few things first. Select the add data source button in the top left corner, below case. You will see a select host option. This is a new feature that has been recently introduced, and is a great way for categorizing your information if you are analyzing multiple hosts. For example, your suspect has a desktop, two laptops and a cell phone that are all a part of an investigation. Here you have have three options for selecting the host name. You can name the host after the data source. You can specify a new host name, such as giving it a nickname or a name that is easier to identify, or you can use a host that has already been created, which could be useful or used if your suspect has multiple hard drives in their computer. Nonetheless, for our lab, we will select generate new host name based on data source name. Click next. So back to the types of data sources that are supported. You have disc image or a VM file, which is simply a file or set of files that is a byte for byte replica of a hard drive, a media card or a virtual machine image. The latter is what we will be using and should be provided as an attachment in this courses files. Next, we have local disc,
>
> **[1:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=92)** which is a local storage device or a USB attached device, such as an external hard drive. Which can be likely if your suspect keeps those secret files hidden and separate from their computer for their own concerns. Next, you have logical files. This is simply local files and folders. You have an allocated space image files, which is any file type that does not contain a file system. Second to last, you have Autopsy Logical Imager Results, which are the results from running the local imager. And lastly, you have autopsy supporting the XRY Text Export. Which is the result from exporting text files from XRY and XRY is a product used to analyze and recover information from open devices, such as a GPS, a tablet, cell phones, et cetera. Of course, using multiple forensics tools always supports a thorough investigation however, we will continue focusing on autopsy. You should still be at the select type of data source to add. So go ahead and choose disc image NVM file. You'll be prompted with the files location, so browse to it and select it. This is where the type of data source comes into play as each type will have a different screen. Because we're analyzing a disc image, I will focus on this type. And disc images are supported in a few different ways. Mainly the raw single format such as the dot IMGs. because we are analyzing a disk image,
>
> **[3:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=188)** I will focus on this type. The disc images that are supported are the following, you have raw single format files, such as the dot IMGs, the dot dds, the dot bins, and dot raw files. You have raw splits. Whereas you'll see that extension, .001, .002 and so on. And then you also see dot AA dot AB and so on. You have in case files, which have the extension dot E01, dot E02 et cetera. And you have [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md), which is the dot VMDK and dot BHD. After you select the file types, you will also see the option to ignore orphan files and FAT file systems. Do not select that. An orphan file is a file that no longer has a purpose. For example, a suspect may have uninstalled application but yet it still remains on that hard drive. The disadvantage of this option is that if you do select it, it will increase the processing time and possibly cause your computer to crash. So go ahead and select next. Autopsy will examine the data source and create an embedded database, which enumerates the files. Autopsy will run the fault ingest modules when you select the next on the following page, which is the current page that we have right now. We will cover these ingest modules in our next chapter in great detail. So for now leave the select the modules and continue. Afterwards, you'll see the processing tab. Wait until this process is complete. It should be noted do not delete the data source after this file is added to the case.
>
> **[4:42](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/what-data-sources-are-allowed?u=76281980&t=282)** The data source would need to be present as it is not copied nor stored in autopsy. To conclude, I'd like you to navigate to the title bar and select the case option again. And scroll down to the data source summary, the table present it shows general information about each data source, such as the files, the type in any tags. In order to see the data source summary, you have to select the actual data source itself. What's more important are the details and information that each tab provides. Something that will be a value is the hash numbers, which would confirm in a real investigation that this data that you are analyzing is indeed the original image that your suspect possessed. As this will be documented during the evidence collection process in that investigation. This summary is a quick way to get immediate information. However, we will go further into reviewing the results from the modules in the next chapter. But for now, consider this a sneak peak. In the next video, we will cover, veiling the case folder and case logs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Env Vars:** xry (3), usb (1), gps (1), nvm (1), e01 (1)
> **UI Navigation:** select the (6), navigate to (1), scroll down (1)
> **Analogies:** such as (6), for example (2)
> **Definitions:** is a  (7)
> **Cross-References:** in the next (2), next chapter (1)
> **Speakers:** - [instructor] (1)

#### [Viewing case logs and output](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=0)** - [Instructor] For the last video of this chapter, we will cover viewing case logs and output. This video is pretty quick and straightforward. So to view the cases output, we will go to the Tools in the menu bar. We're going to scroll down to Open Case Folder. This folder will have all of your information from the files you exported, hence the Export folder, to the logs, which we will analyze in a second. You will also see ModuleOutput, and this will be the only thing that has folders and files populated in it. Nonetheless, because we haven't covered the modules just yet, we can move past these and you can revisit these after we cover the modules later on. Regarding the Lab folder, if you remember creating the case at the beginning of this chapter, this is the location that we use for the base directory. So the alternative would be to navigate manually to this path. And maybe not this specific path, but the path that you used for your base directory. Once you get here, you will have access to all of this information. This will be beneficial if you have Autopsy open, of course you will want to come here via the menu. However, if Autopsy is closed, you can visit this location by using the [Windows](../../Glossary/Service/Windows.md) Explorer. This may save time, especially if you have a large case and multiple data sources, and it takes a while for your case to actually load itself. To view the case logs, you can obviously go
>
> **[1:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/viewing-case-logs-and-output?u=76281980&t=93)** into the Logs folder, but there's a simpler way that doesn't take multiple steps. You can go to Help in the menu bar, and then scroll down to Open Log Folder. This will open the same Log folder from the previous screen, but it's all done in roughly one step. You will notice that there's a continuous number log files, such as 1, 2, 3, 4, 5, 6, and 7 for me. For you, you should not have this. These will continue as you continue having actions in the software, you can open all of these files, excluding the lock file here. The main way to open these, of course, is to right-click, Open with, and you can use Notepad as these are only text files, despite the file types having a specific number. As of, right now, we do not need to look through this information as this is something that you will want to use if you have some functionality that isn't being performed correctly. Mainly to troubleshoot any issues or investigate any concerns. So now that we've covered how to view case logs in the Output folder, we will cover this chapter's challenge in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** in the menu (2), scroll down (2), go to (1), open the (1), right-click (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: View case logs and output](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-view-case-logs-and-output?u=76281980&t=0)** - For this chapter's challenge, we will have a simple one, mainly because we've simply installed Autopsy, created a case and viewed the log source. Autopsy gathers a lot of information. I want to be confident that you'll be able to know where and how to find any specific details you may be seeking. I challenge you to find the Device ID for the Disc Image provided. This shouldn't take more than a few minutes and please move on to the next video after a few minutes, regardless if you were or were not able to find it. This way, I can show you how I did it in the upcoming solutions video. There are multiple approaches to use in order to find this information and if you need a hint, use the Data Source Summary.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Cross-References:** next video (1)
> **Speakers:** - for (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: View case logs and output](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=0)** - [Instructor] So now that you have some time to go through the challenge itself and find the Device ID for the virtual disk image, I want to go through a couple of ways in order for you to find this information. So, there's multiple ways. The first way, which is where I hinted at, you open Case in the menu file and you go to Data Source Summary. Of course, it says no data source has been selected, so you click that and that's when the information will populate. The Data Source Summary is all the information in this, the summary regarding the data source, where the data source was the virtual disc that I provided to you. Okay. So, once you go into there, you have different things such as User Activity, Analysis, Recent Files, Past Cases, Geolocation, Timeline, etcetera. Well, this is another summarized version of all the other stuff we will look at in the analysis results and the data artifacts. However, for what we're going to do, and what I specifically requested, it was to simply just go through, you'll be able to realize, "Wait a minute, one of these is going to have it." So the question is which one may have it. That's where you get to Container. The Container has the Display Name, the Name, and the Device ID. This Device ID is the main way for this device to be identified, therefore, this number and hex will not change. And once again, you're able to find it that way. Now there are a couple more ways to get to the Data Source Summary. Aside from the Cases method, you can go through Data Sources to click through it,
>
> **[1:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-view-case-logs-and-output?u=76281980&t=93)** and, side note, if you notice this right here, you also have the Device ID. That's another way to go about it, by simply just clicking on the Data Source here, but let's just say you didn't see that for some reason, 'cause you know, you're moving fast and there's no wrong issue with moving fast. Third option would be to right click on it and go to View Summary Information. That's where you're going to get the same window. And that's pretty much the main way to get to the Device ID. Whether you go through this route, using the Data Sources Summary, or you go through the Data Sources tree, and click on it. Either way, you should get the same results and the same answer. So that was the solution to finding the Device ID. I look forward to seeing you in the next lesson.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (2), in the menu (1)
> **CLI Commands:** find (3)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. Ingest Modules

[↑ Back to Table of Contents](#table-of-contents)

#### [Utilizing Automated Analysis in Autopsy](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=0)** - [Instructor] Ingest modules analyze the data and the data source, thus performing all of the analysis for the files and parsing their contents. After adding a data source to a case, you will be presented with a dialogue that will let you configure what should be analyzed on that data. This will be ran in the background, providing you with [Real-Time](../../Skills/Database%20Management/Real-Time.md) results. There are three ways to start these modules. First is by default, which is immediately after you add a data source. Second, by right clicking on the data source from the tree in the main interface and choosing Run Ingest Module. You will see this process presented on your screen, this would be used if you decide to analyze data that you didn't previously include. Lastly, you can go to the Tools, Run Ingest Modules, and you will have the Data Source Options here as a Dropbox. When configuring in Ingest modules, you will be presented with an interface to choose which files to analyze and enable or disable for each module. For example, we are not given an image of a mobile phone, so we will not need the [Android](../../Glossary/Sdk/Android.md) analyzer module. However, if you later receive this evidence as a part of another case, you can use this process to enable it so that the module will be ran. Moving on, the selection box at the top controls which files the Ingest modules will run on. The two built-in options are All Files, Directories, and Unallocated Space and All Files and Directories. Which does not include Unallocated Space. Of course, it would be recommended to use the default option that includes Unallocated Space.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=94)** Unallocated Space is the area on a hard drive, where new files can be stored. This is important as certain files may have been marked for deletion and may be critical to your investigation. So not including this option, may be detrimental to your case. There are two places to configure Ingest modules. When you select the module name, you may have some general settings you may want to change from image to image or by case. For example, if one investigation is for child exploitation case and another is for data exfiltration. You may not use the same modules to support each incident. They may also be an advanced button that is enabled in the lower corner. So when I mentioned the settings, I'm referring to this Global Settings area right here. For example, the Hash Lookup Settings. You can also access the settings portion using the settings bar itself. But we can discuss that later as well. For example, if one investigation is for a child exploitation case in another is for data exfiltration case. You may not want to use the same modules to support each incident. There may also be a Global Settings button that is enabled in the lower corner. Pressing this button would allow you to change the global settings that are not specific to a single image. This advanced configuration panel can also be accessed via the Tools bar, Selecting Options, which we could show later. It should also be noted that running a lot of modules will slow down your computer and also take longer for the Ingest to finish processing. With this said, It may not be best to run all the modules
>
> **[3:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=188)** and run those specifically that's needed or you can also remove and de-select those that you will not need. So in this example, I've already mentioned not needing the Android Analyzer. You won't need the Drone Analyzer, Plaso, YARA, IOS and GPX Parser. Well, we also will not need Central Repository, as I mentioned that we will not be using that. Let's see, and everything else we can have to run the Ingest itself. You will notice that mine automatically has numbers here. Do not expect yours to match mine, mainly because when you run Ingest modules multiple times, they will compile onto one another. So at that point, you will receive duplicates. So as I click finished here, these have already been populated where they will add to the list and continue being populated. That's something that should be noted for future reference. Speaking of processing time, there are a few tips to ensure optimal performance when running Autopsy. Before going to those, I would want to ensure that we're going to cancel analyzing the files because I already ran these. In a way to cancel them, as using a status bar and clicking the X to cancel all of the tasks. Perfect, so speaking of processing time, there are a few tips to ensure optimal performance when running Autopsy. First, is recommended that you start Autopsy from the desktop or the start menu. Once again. Okay.
>
> **[4:40](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=280)** So you can run it from the desktop or the Start menu. The second tip is to confirm you are using the maximum number of threads for Ingest files. To do this, go to Tools, Options, you see Ingest, and then you will see three tabs, go to Settings on the far right. Below it, you'll see a drop-down list. And next to it, is the yellow exclamation mark that has a specific recommendation for your specific computer. Use that number, if it's not already changed to the maximum. If you do change the settings, select Apply, and then Ok. This is an important thing to note. As you can see, I have the option of having four number of threads to use. However, for it's recommended that I use a maximum of two. Of course, after you click, Ok, you close Autopsy and restart it in order for it to take effect. In the last tip to ensure optimal performance is when making a case in Autopsy, the vendor also recommends using a different drive for the case. That is not the same as the data source. For example, if you store your case details on your computer, but store the disk image on an external hard drive, this allows the maximum amount of data to be read and written at the same time. This is also a digital forensic tip. That example is also forensically sound method, as it's bad practice to have your evidence saved to your computer as it may corrupt the file,
>
> **[6:13](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/utilizing-automated-analysis-in-autopsy?u=76281980&t=373)** which is exactly why write blockers are required so that the evidence's integrity is insured. On the next video, we will discuss Autopsy's essential modules, part one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Analogies:** for example (5)
> **UI Navigation:** go to (3), select the (1)
> **Best Practices:** recommended (3), bad practice (1)
> **Env Vars:** yara (1), ios (1), gpx (1)
> **Cross-References:** in the last (1), next video (1)
> **Prerequisites:** configure (2)
> **Definitions:** is an  (1)

#### [The Extension Mismatch and USB device-attached modules](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=0)** - [Instructor] Autopsy has a number of essential modules. The modules I mentioned are not in order of priority, as each case will be different. I highly recommend you perform a thorough analysis of all important artifacts for your investigation. Please remember that every time you run ingests, you will have those results added to the existing results. I say this because you may not need to follow the actions that are on my screen because your module may have already been enabled. You are able to select individual modules to run without previous results disappearing. Because our lab is focused on data exfiltration, we will want to find files that indicate this user is involved. Many criminals believe that they can hide their data in plain sight. In the tree viewer panel on your left, you will notice that Autopsy has an Extension Mismatch Detected tree. This is due to the Extension Mismatch Detector module. This module is important because some suspects may attempt to hide their files by changing this extension to deceive others. If an investigator opened the file, there would be a file is corrupted error regenerated, and it would appear to be a useless file. However, this may not always be the case. So to enable this or to confirm this is enabled, go to Tools, scroll down to Run Ingest Modules, and you shall see Extension Mismatch Detector. You also see options to check all file types, to check all the file types, except text files, and to check only multimedia and executable files. You may also skip files without extensions
>
> **[1:35](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=95)** and skip known files. However, I recommend leaving those checked, of course. Once you're done with that, select Finish, only if this was unchecked and has not been previously ran. After you confirm that this module has ran, you can go to the Extension Mismatch Detect tree in the tree viewer panel. You should see a bunch of names that look suspicious. I will give about a good five second pause, so you can look and try identifying any files that may look kind of sketchy. You can tell certain files are irrelevant and unsuspicious by their name and [Unity](../../Skills/Software%20Development/Unity.md). As the naming scheme looks like something, a computer will automate. However, if you scroll down, Lesson 4.docx file and the H+ executable file are both something that may be of interest. Mainly because the docx file being a [Windows](../../Glossary/Service/Windows.md) [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) file, and the H+ executable being named after the victim. And what other reason would there be for our victim H+ sports to have an executable. So let's go ahead and click the Lesson 4.docx. And if you scroll over to the right, you notice that this file has a docx extension, which is why it's here. Nonetheless, if you look over to the right of it, you will see a PDF mime type, hence the mismatch. let's look a little further, after we select the file, we can see that the Application tab pops up in the content viewer. If you have central repository enabled, you will be able to go to the Other Occurrences tab.
>
> **[3:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=189)** So let's go ahead and select that. We see this file is present in this case about three times all under files with different names. So this is a file of importance somehow. So let's go ahead and use the Application tab to analyze the file. After a few minutes of investigating it, we can see that this is something that is not related to this case. This file is a chapter on mobile devices from a book called Saleen, the CyberTeen hits the header. While this may be an extraordinary book with valuable information, it's not relevant to our investigation. So we can label this as a false positive. Next, we will look at the USB devices attached. It's common for employees and users to utilize USBs as storage devices and to transfer files and other important data. Selecting the USB Devices Attached tab displays a list of connected devices, but what's imperative here is to note that Device ID, which is in this column, this is important as it's the main way to prove or disprove a suspect's involvement. Every Device ID is different, and of course you have to make a model which adds to the further claim, but it's possible for someone to swap the USB case out and put another in, so it appeared to be fake or false information. This specific information is retrieved from the computer's registry, if it's windows, and so the authenticity is valid and it's not something that is likely to be changed due to the escalated privileges that's required to access it. Extension Mismatch modules and USB Devices are important modules, but there are definitely more.
>
> **[4:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-extension-mismatch-and-usb-device-attached-modules?u=76281980&t=284)** Next, let's take a look at the recent activities and interesting files modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (2), [Unity](../../Skills/Software%20Development/Unity.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** go to (3), scroll down (2), select the (1)
> **Env Vars:** usb (4), pdf (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [The Recent Activity and Interesting Files modules](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=0)** - [Instructor] Let's look at a few more of autopsy's, essential modules. The recent activity module, extracts users activities, such as information saved by the web browsers, including web searches and start programs and the operating system for example. It also uses reg ripper on the registry hive. Reg ripper is an open source tool that is used for data extraction and correlation. It uses plugins to [Fetch](../../Skills/Web%20Development/Fetch.md) frequently needed information during an investigation on a [Windows](../../Glossary/Service/Windows.md) device. It assesses the registry high files to extract specific keys, values and data. The registry is a database that stores low-level settings for the windows operating system. Its purpose is to help programs use the computers resources and contains complex information about the applications, documents created [Hardware](../../Topics/Hardware.md) and much more. These functionalities are why autopsy incorporated these tools. There is no better database for a windows device and if you would like to see the registering for a better understanding, you can go this by going through your search bar. It's like being run and simply typing in, reg edit. So R E G E D I T and then simply click enter and at this point you will be able to see your registry. I'd like to set a reminder that it is very low level and you should not change any devices as this is very critical to your computer system. So now that you know where all this information is coming from, I can move back to the recent activities module.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=94)** This allows you to see what activity has occurred in the last week of usage, what websites were visited, what the machine itself did and what devices were connected to it. There is nothing to configure for this module, as it is the default setting. The results show up in the tree viewer under data artifacts. Due to the plethora of information this module provides, this would be among the most important to analyze. You shall see the recent documents, web history, web downloads, and more present below it. Next is the interesting files identifier module. This allows you to automatically flag files and directories that match a set of rules. This can be useful if you always need to check for certain files, whether it's a specific type or an identified file name. Using a custom set of rules, this module allows you to run these against each processed file. If a file matches any of the rules, you will see an entry for it in the tree viewer. You can also share your rules with other users and import sets made by others into your copy of autopsy. Before we continue, I'd like you to note, a rule sets is a collection of rules. If a file matches any rule in the rule sets, it will be flagged as a match for this rule set. Rule sets can be enabled and disabled at ingest time. So to create an edit your own rule set, you can go to tools, options, go to the interesting files tab, the area on the left side we'll show you a list of rule sets that are currently available.
>
> **[3:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=190)** Selecting a rule set will display its description and information. You can copy, import, export, create a new, edit and delete a rule set. However, you can not delete or edit the ones that's present as is set by default. However, let's go through the process of creating a new rule. Which will open a new window, so you can enter information about your ideal files. So let's set the case name to example. We're not going to have a description here, just so we can give you the experience for creating a rule set. So once you have your rule set highlighted, you can select new rule. At this point, you can enter information about the files that you want to find. The top line allows you to choose one of three types, the files, the directories, or all, which simply means both. Be aware that some condition types, only apply to files and won't be available if you select the directories or all option. Each rule must have at least one condition. You can save this newly created rule under any name, of course, giving it a name is entirely optional, but I highly recommend it. So for the sake of our lab, we're personally not going to find a file just because I'm going to have you import one later for your challenge. So for the sake of creating one, let's name, this file H plus, and the file name is going to be H plus logo. Let's actually name our file name logo.
>
> **[4:47](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-recent-activity-and-interesting-files-modules?u=76281980&t=287)** With this to do is search our archived files for anything that has a name logo. Once there, you will see the rule name itself with the name of the file or whatever indicator that you decide to use. Once you're done, select apply, select okay. You will notice that there is an interesting, files tab in the panel. This is specifically because one of the default rules actually has, let me show you. So I got back to that settings using a different approach. This file actually matched because this is the AX crypt, that's executable. So because it was able to match, this file is already going to be present for you to view. The file name we used would generate nothing because there is no file in here named logo specifically. If so, then we have a foolish suspect. Next, let's take a look at installing a third party module in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** go to (2), select the (1)
> **Analogies:** such as (1), for example (1), it's like (1)
> **CLI Commands:** find (2)
> **Cross-References:** in the last (1), in the next (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)

#### [Installing third-party modules](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=0)** - [Tutor] Autopsy has many ingest modules that parses the data, but sometimes you may need capabilities that have not been yet incorporated. That's where third-party modules come into play. This is a tricky topic as for any digital forensic case, your data extraction methods must be forensically sound. And forensically sound simply refers to the process by which data is collected for E-discovery without any changes to the data or [Metadata](../../Skills/Web%20Development/Metadata.md) itself. So to be forensically sound, a [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) process must be defensible, meaning that it must be consistent, repeatable and well documented. Assuming a third party module does follow this, here's how you will be able to install the module into your case. So for this example, we will be using a module that we received from Autopsy itself. Go to your browser and type in [autopsy.com](https://autopsy.com). Once you get here, go to add on modules. The module we'll be using is called video triage. This module efficiently triaged video content by splitting videos up into easily viewable thumbnails. So go ahead and select learn more, and once you fill out this form with information, you will automatically have access to the file to be downloaded. It will not be sent to your email, or would I be asking you to wait and verify anything, it will just simply download right then and there. After you fill out the form, you'll be able to download it. So just like download. It will take a little time to install, nothing too long thankfully. Of course, this depends on your data speed.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=94)** Afterwards, go back to your Autopsy window, go to tools and go to [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) plugins. You will see a window that you need to copy and paste. So let's go ahead and copy this here. And basically you have to copy it because this is where you will want your file to be extracted to. So we're going to extract all when it asks you, where do you want it to extract to. Select the path that we just copied, and it's going to put it there. After you add the path, you will want to close out your Autopsy and then you're going to relaunch it. This is done specifically because Autopsy checks that location every time it starts up. It has no reason to check the location in the middle of a case. So open up the case that you just had. So go back to tools, go to the plugins, go to download it, go to add plugins. Go to Python modules where you will see the video triage module folder and select the file that you placed it in. Once you do this, do not forget to select install. If you close it out, nothing will happen. You must select install. Follow the prompt accordingly. After selecting continue, it's going to ask to restart the application so that this installation can be complete. Then select finish.
>
> **[3:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/installing-third-party-modules?u=76281980&t=188)** It's going to close out for us, it's going to restart by itself. That window you saw was what Autopsy uses in order to be compatible with that module. So afterwards you're going to go back and open your case again for the final time. And when the application is restarted, you can go to any video to confirm that this works. So we are going to go to file types, extension, videos, almost like a random video, and you will notice that the video triage tab is right here present. And it's going to have the thumbnails every second, every few seconds, depending on what file it is. But it's going to have a variety of thumbnails that show you each key frame as it changes. And that is how you install a third party module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1)
> **UI Navigation:** go to (10), select the (2)
> **Prerequisites:** install (5)
> **CLI Commands:** python (2)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), is called (1)
> **URLs:** [autopsy.com](https://autopsy.com) (1)
> **Analogies:** just like (1)

#### [Challenge: Install a third-party module](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-install-a-third-party-module?u=76281980&t=5)** - [Instructor] For chapter two's challenge, we will have two parts. First, I will want you to analyze the H+ executable file and answer the following two questions. Where was it downloaded from? And two, what type of file was it originally? For the second part of the challenge, you would need to import the provided rule set to find some files. The goal is to see how this process works and give a little insight to how it can be used. Using the sample rule set, you shall be able to answer the following two questions. First, what are the names of the files? Second, what can these files prove or disprove regarding our suspect? Once you're finished with the challenge or ready for the answer, go ahead and select the next video so we can start and we can go over how I solve these challenges.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Install a third-party module](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=0)** - [Illustrator] This chapter's challenges consists of two parts. To find the first one, you must first analyze the h+ executable. This was the other file that we consider suspicious from the second video in this chapter. So in order to do this, so go to the Tree Viewer, scroll down and open Analysis Results, and select Extension Mismatch Detected. Once there, scroll down until you see the h+ executable file, on my screen I have multiple, only because I ran this module a few different times. This will not impact the results. So, the first question asks, where was it downloaded from? Well, the answer is able to be found by going to the Context tab, and seeing that this file itself was downloaded by the following URL. This URL is through h+ Sports website, so it looks legitimate. The second answer is able to be found by scrolling right in the results viewer, where we can see that this file is a JPEG, in two different areas. First is the Justification, second is the MIME Type. Either way, this file was originally a JPEG file despite its executable extension. For the second part, you must first import the rule set that was provided by first going to Tools, Options, Interesting Files,
>
> **[1:37](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=97)** Import Set, select Open, once you found it. Here you'll see the rules that were already established and created from another analyst or previously. So, you can select Apply, then OK. You shall see the results almost immediately, if not immediately. So, the results did not pop up automatically, which is fine. So while you can restart the window in order for it to run, it would be best to just go ahead and go to Tools, Run Ingest Modules, and manually start itself. So I'm going to personally just Deselect All, go to Interesting Files, I will even remove these. I want to specifically confirm that these results that we just imported will be populated. Select Finish, you will see the Status bar at the bottom of the screen. And, oh, look, now we got the Learning Files itself that were identified. So right now we're at a 1%, so we're going to wait until it's done identifying the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the results, if there are more of course. However, we won't really know until it's completely done. Once the Ingest is finished, you can go to the results by going to the Interesting Files tab and select the name of the rule set. So we have two different files of course, while we have four different results. This is because they are located different sections. Both of them are in the Downloads folder hidden in a Zip file that's called OfficeSetup.zip, which is suspicious, and other locations are in a Commons File and a different area where the systems
>
> **[3:12](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-install-a-third-party-module?u=76281980&t=192)** or the program files data is set up as well. So either way, it's safe to say both of these files were actually hidden. And it shows where the file path is, which shows that obviously that this suspect knew that these documents was here. Because we have the employee database on our suspect's computer, this supports the claim that our suspect is responsible for the breach.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** go to (4), scroll down (2), select the (1)
> **Env Vars:** url (2), jpeg (2), mime (1)
> **CLI Commands:** find (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [illustrator] (1)


### 3. Reviewing Results

[↑ Back to Table of Contents](#table-of-contents)

#### [UI layout](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=0)** - [Instructor] Autopsy's user interface has five major areas, the tree viewer, results viewer, content viewer, key search, keyword search and status area. Being able to navigate and understand where your results and findings will populate will make this course much easier as I refer to the different viewers and panels. On the left side of the main window, you will see a panel where you can browse the files of your case's data source. This tree viewer panel also has five main areas within it. You have data sources, which will show a directory tree hierarchy. You can navigate specific paths as it will also contain distinct sub trees, once selected. We specifically have one for our demo, but this is where you'll find all of them. For example, if we had a desktop disk image, a virtual disc image, and a USB image, they will all be located here. But once again, because we only have one, this is all we'll see for now. Second or next is the file views. This is an area for specific file types that can be grouped by type or other properties across all data sources. This simply allows you to go into the specific media type. So for example, we can go through the file types, extensions, and go to images. Or if we want to go a different route and go specifically by the extension, then we can go by the extension where the mime types is also available. Mime types of file extensions,
>
> **[1:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=92)** provide hints as to how to deal with a file. Whereas file extensions are commonly used for your operating system to decide what programs to open with, mime types are used by your browser to decide how to present some data. So after file types, you also have deleted files, which is important as you can use this data to support specific claims. However, if you open it, you'll see a lot of different deleted files. That is because the file system does delete a lot of files and many may be irrelevant to your case. So if you want to see what the user initiated for deletion, then you can also visit the recycling bin section of the results, which is later on. But the deleted file section is there for you. And lastly, you have file size. This can be beneficial when you know a large amount of media was stored on a device or specifically know the size of the file in question. So for example, if you're looking for something, let's say you're looking for a zip file that has a lot of pictures of the evidence that you're trying to find. Well, you know, that that file may be two gigabytes. Well, it will then be in the one gigabyte or more section of the file size. So moving on from here, you have data artifacts. This was previously known as results. This is also where you're able to find results from the ingests and your search results. This is where we will spend most of our time as there is a plethora of information gathered here. In another main area within the tree viewer are the files that you will have tagged
>
> **[3:04](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=184)** as they will be under the tags area. Because we have no tags, there's nothing here populated currently. And lastly, we have reports. And these are reports that were automatically generated by the ingest modules or they were manually created by you. So if we were to right click on a data source, this will reveal specific information. So let's go ahead and expand this. And with this being the data source file, we can right click on it. And we can see things such as, you know, the image details. We were able to search for specific files. We are able to restart the ingest modules. We're able to extract an allocated space to single files. Unallocated spaces, the blocks of the file system that are not being used for anything. In an device image, an allocated space has stored the distinct locations in the file system. Therefore it would be better to combine those into a single larger file. Whichever method you prefer, of course, however Autopsy provides analysis for both. If you choose to keep them separate, there is a folder that will be present here, denoted with the dollar sign, and it's called unaloc that will consist of the unallocated space that contains the information and you can manually extract the files as you normally would. Moving out to the results viewer, the results of your is different and should not be confused with the results area in the tree viewer. The results viewer is located on the top right of the main screen. And it shows the contents of what was selected in the tree viewer. This usually consists of a table and tab viewers. The table viewer will list
>
> **[4:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=276)** the contents of whatever's currently selected and provide information for that selection. So for example, if I was to go in and you see that these are folders right here that have more results in them. However, once you select down to the file itself, you will then see more information regarding that specific file that was not present earlier. And for files, you will see the modification dates, creation timestamps, size, and more information about the file. You may also see columns that start with S-C-O on them. These columns right here. These are after the file name, the S stands for a score column and indicates whether this item is of interest. A red exclamation mark means that this file matches a notable hash set. A yellow icon means that this file is of interest. The C means the item has a comment in the central repository. And the O column indicates how many other data sources contain this item. You may notice that these columns do not have any values in them. That's because we didn't enable the central repository. However, there are some instances where you may see it if you do have it open. While we will not be spending any more time on the central repository feature in this course, I would like to briefly mention that you just need to know that it allows you to collaborate with other analysts on your network, and these columns are used in that collaborative environment. You also have the option of exporting the contents of the table viewer. It will be saved to a CSV file. So I got to do is right click this,
>
> **[6:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=369)** save as CSV button and choose a destination. You can select certain rows or highlight all of the rows. Additionally, right-clicking allows you to do a few things such as accessing the file in the external viewer. So for example, opening an [HTML](../../Skills/Web%20Development/HTML.md) file in Chrome or a document in a text editor, such as Notepad. You can also extract files, which allows you to save a local copy for further analysis, which you may want to include it in your documentation, or analyze it with another forensics program. You can view in a new window. And lastly, you can add a file tag, which will help you properly categorize information and allow you to review it later, if you need to support a theory or just come back to it. For the thumbnail viewer that's located in the results viewer, this displays items as a table of thumbnails. This viewer only displays certain picture files like gifs, PNG files, and JPEG formatted files. And if you would like to view files in other formats, you will probably need to use the access file and external viewer function by right clicking that file itself. The content viewer is located on the bottom right of Autopsy's main screen. This viewer is generated when you select an item and the results viewer, so let me go ahead and do that. And with this being on the bottom right, we can enlarge this as to the size of your preference. The content viewer itself shows the pictures, the videos, the text, [Metadata](../../Skills/Web%20Development/Metadata.md), the operating system, account information, and much more.
>
> **[7:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=464)** The hex tab is usually available. And it shows the raw and extracted contents of a file. This saves you from needing to open a separate hex viewer. However, if you prefer, you can do that using the options window, that's located in the tools portion. So let's go to tools, options, so go to options and then click over to the external viewer, select new rule. And you'll be able to customize it wherever you would like. You can either choose the mime type or the extension, or you can simply browse to the file that you're referring to. The text tab has three sub tabs. Strings will return all text strings found in the file, and this can be used to see human readable strings inside of file types. They may also have a lot of other information. You have indexed text, which shows the text that has been indexed by the keyword search module. And of course it has translation, which pretty much goes or translates this information to whatever language you're using. The applications have itself will display the files in a friendly manner if it's a common file type. So for example, if we have videos, pictures, you know, [SQL](../../Skills/Data%20Science/SQL.md) [Databases](../../Skills/Software%20Development/Databases.md), HTML files, and registry high files. However, you will see that in this instance it's actually is not highlighted. This is because the PDF extension does not have a common type. That's going to open it up. However, if we were to go to images, whatever image we will have, the application populates. Next, you have context. The context tab shows the source of the attached file,
>
> **[9:17](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/ui-layout?u=76281980&t=557)** allowing you to view the original path. For example, maybe an image from a chain of emails. Other occurrences tab will list off where else that this file has been placed in this case. This is of course, if central repository is enabled. Annotations shows tabs and comments that you, as an analyst may have made. And lastly, you have the status area. And this bar shows the progress of what ingest is occurring. So to show you this, I'm just going to run something just so we can have the simple sake of showing its status bar because we don't have anything in the examples where it's going to work. We're going to use that. You see the status bar at the very bottom that has zero or now 1%. Clicking on this bar will reveal further details or allow you to cancel whatever ingest is being performed. This may seem like a lot, but no worries. I only want to give you a high level overview of the interface to help you follow along. As we work in Autopsy through the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course, you will become more confident and familiar and comfortable with this display and interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** for example (7), such as (3), picture (1)
> **Env Vars:** csv (2), html (2), usb (1), png (1), jpeg (1)
> **Definitions:** is a  (2), means that (2), is an  (1), known as (1), stands for (1)
> **UI Navigation:** go to (4), click on (2)
> **CLI Commands:** find (3), make (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### [The image and video gallery](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=0)** - [Instructor] Now that you know Autopsy's user interface, I would like to expand this a little further with a specialized viewer called Image Gallery. The Image Gallery is a feature that is specifically designed for law enforcement child exploitation cases, but can be used for other investigations as well. It groups images using folders to help the analyst further separate the photos and focus on those crucial images. This also allows the investigator to view images immediately, once added to the case, opposed to waiting for it to be ingested. To use this, you have to ensure specific modules are enabled. So let's confirm that by right-clicking our Data Source and selecting Run Ingest Modules. So these are all selected. So let's confirm that File Type Identification is selected, Picture Analyzer is selected, and Hash Lookup is selected. Of course, you'll click Finish just to ensure. Also, I'd like to mention that Hash Lookup requires a Hash Set to be present. Law enforcement officers would usually download NSRL lists and import them in the Hash Set. As a quick reminder, NSRL is provided by NIS and it stands for National Software Reference Library, and it's designed to collect software from various sources and incorporate file profiles computed from this software into a reference data set of information. The RDS can be used by law enforcement, government, and industry organizations to review files on a computer by matching file profiles in the RDS. This helps alleviate much effort involved in determining
>
> **[1:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=96)** which files are important as evidence on computers or file systems that may have been seized as a part of a criminal investigation. However, it should be noted that the RDS is a collection of digital signatures of known traceable software applications. There are applications hash values in the Hash Set which may be considered malicious, such as other hacking tools, network sniffers, and other tools. There are no hash values of illicit data. So, for example, child abuse images or anything of such nature. While the NSRL is not applicable to our situation, it still may be needed for situations where you may need it. If you need to use this feature or this list, for any reason, you can download it at [sourceforge.net/projects/autopsy/files/NSRL](https://sourceforge.net/projects/autopsy/files/NSRL). Regarding the type of file you would download depends on the exact thing that you are analyzing, and that is beyond the scope of this video. If you need to use the NSRL for any reason, you can download it at [sourceforge.net/project/autopsy/files/NSRL](https://sourceforge.net/project/autopsy/files/NSRL). This, specifically, would be downloaded depending on what type of file that you may need. After you download any file that you think is applicable, you will have to go to Tools, Options, Hash Sets, and then click Import Hash Set. That was more of an FYI for you, however, once again, we will not need that in this course. The Image Gallery can be configured to collect data
>
> **[3:11](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=191)** about images or videos after ingestion is completed or while the ingest is in progress. This is specific to each case and cannot be changed during ingest. However, to use the Image Gallery, you can click on Images/Videos. A new window will pop up, let me bring it over to the screen. This will cause Autopsy to open up a new window. In the left panel you will notice that there are two tabs, All Groups and Only Hash Hits. This is where the Hash Set that I referred to previously will be included. However, because we will not be having Hash Sets in this instance, or at least any that will be utilized, we will look at the Path, as I recommend Paths as they are pretty important just due to the ease of being able to analyze those images. For example, you can go down to Downloads and see exactly what was downloaded, but that's something that's simple. It's also important as this shows the image location, which may reveal something of interest, for example, if a user attempts to hide a file in the program data folder. As each group is reviewed, the next highest priority group is presented according to a sorting criteria, and the default is usually the density of the Hash Set Hits. Once again, you have to tap here and that's where the Hash Set comes into play, which is also why it's as important as it is. Images that were hid from the Hash Sets will usually have a dashed border around them, but don't worry about that in our case as we don't have any. You can also use the menu bar on the top of the group
>
> **[4:44](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-image-and-video-gallery?u=76281980&t=284)** to categorize the entire group. You can right-click on an image to categorize or tag an individual image. So, for example, you know if you want to categorize, says, okay, this is [Windows](../../Glossary/Service/Windows.md) in the Cloud, well, that's not really important. All right, now I'm printin it. You can right-click in Categorize to whichever is beneficial or you can simply add a text such as Notable Item, Follow Up, or just simply to Bookmark. It should be noted that, of course, you can tag with customizable tags, but an image can only have one categorization, but it can have multiple tags. And that is the Image/Video gallery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** nsrl (6), rds (3), nis (1), fyi (1)
> **Analogies:** for example (4), such as (2), picture (1)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **Definitions:** is a  (2), stands for (1)
> **URLs:** [sourceforge.net](https://sourceforge.net) (2)
> **Speakers:** - [instructor] (1)

#### [The timeline tool](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=0)** - [Trainer] The next specialized viewer, we will discuss is the Timeline feature. As of this specific version, it should be installed. However, if you have autopsy 4.13 or previous installations, the timeline events are not going to be present. There are a few modules you will also want to enable during the ingest. First, let's go to the tools, click run ingest modules, and ensure the following are all selected. I personally deselected these to not confuse you, I would not recommend deselecting these yet. First, you want to make sure that the hash lookup module is enabled as this uses the NSRLs to ignore known files, which we covered last video. Secondly, you want to make sure that the recent activity module is enabled. This generates web related events. Next, you'll want to make sure that the exif-parser module is enabled. Next, you will want to make sure that the picture Analyzer is enabled to ensure events based off of the stored meta data is also included. Lastly, enable any other ingest that you think could be useful. So for example, if we were analyzing a tablet, we want to enable the [Android](../../Glossary/Sdk/Android.md) Analyzer module. So in this instance, it could be whatever we decide. However, for simplicity sake, I will continue using these here. To open this feature, you need to go to tools and go to timeline, or you can simply just select the timeline function button. We will have to wait until the data is finished processing
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=94)** to get the full timeline. This info will be presented in a bar graph called counts, which uses the number of events. You can use this view to see the amount of activity for a given timeframe. So for example, if you have a case where the suspect claims to not have used the device, let alone possess it, you can use this count feature to support or deny their claim. This view can be changed to a list or details in a top. Now, of course, I can't do anything just yet because it's almost done, but you can change the details. This is best used after identifying the window of time. Given the same example, you can use this to answer any questions about the specific event such as did this user or suspect log into an account online, which will also verify that this user was utilizing this device at the time of the incident. View mode will populate in a second. The list view shows every event in the order of occurrence. This is most helpful when you want to see what other activity occurred around the time of that incident. Using the same example, you can use this to look at what happened after the successful login. You may notice that the user went to the [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) and uploaded a few files affecting that Gmail account. Both lists and details would be useful with filters that will reduce the number of events shown. The filters of course are going to be on your left panel, which I think a specific filter ticks any answer may be tagged. Anything that relates or corresponds with the hash set, That was (indistinct) as well. Once you select any of these files,
>
> **[3:10](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/the-timeline-tool?u=76281980&t=190)** don't be too concerned about a long loading time. This may be specific or vary depending on your computers' processing time and power in addition to the size of the image itself. I did provide a large one, so don't be surprised if it takes some time, it's okay. So after selecting stuff, you will see a bunch of information in the Content Viewer, where you can further analyze anything that you may find interesting. Is important to note that each event has a type, a description and a timestamp. The timeline collects data from the file system for the timestamp information web activity in other places like calls, emails, recent documents, registries, and more. I would highly recommend being familiar with timeline functionality as it can also add to anything that you may be looking for if you want to get the full picture of an investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Android](../../Glossary/Sdk/Android.md) (1), [Google Drive](../../Skills/Software%20Development/Google%20Drive.md) (1)
> **CLI Commands:** make (4), find (1)
> **Analogies:** picture (2), for example (2), such as (1)
> **UI Navigation:** go to (3), select the (1)
> **Versions:** 4.13 (1)
> **Cross-References:** we covered (1)
> **Warnings:** note that (1)
> **Speakers:** - [trainer] (1)


### 4. Searching and Reporting

[↑ Back to Table of Contents](#table-of-contents)

#### [Searching for keywords and files](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=0)** - [Instructor] Autopsy can extract a lot of information in files. There are many times where you may have an idea of what you want to look for. We will utilize Autopsy's search functionality. The file search tool is accessed from the tool menu or by right clicking the data source node in the directory tree. So let's go ahead and do that. We're going to right click and you're going to select open file search by attributes. This allows you to filter directories and files that you want to view. There are several categories you can use to find files and directories. You can use any of these as criteria to build your case. It is important to check the note with the asterix near the text field. For example, name matches case sensitive and matches any part of the file name. Regular expressions are not currently supported. These results are populated in the top, right window of the browser. So to give you a quick example, I will populate anything with the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) example in it. And there you go. Fortunately, this has nothing to do with the case. I just want to give you a quick example of everything that's going to be populated. So I'm going to exit out of this. You also have the ability to search a single keyword or a list of keywords. Both options are located in the top right of Autopsy, via texts with an icon next to them. This is featured as the ad hoc keyword search module. Individual keywords and regular expressions can be quickly searched here using the search text box widget.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=94)** You have the option to restrict the search to certain data sources. Fortunately, for us, we only have one. If you do select the box that says save search results, the results will be saved to the directory tree as well. Otherwise it will be in the results viewer window. So for the sake of example, we're going to say Bennett. So when selecting Bennett, you see the word Bennett itself populated a few different results with it. However, what you will not notice is that it's not included in this section. So if I were to do the same thing and save the results and type in CyberBennets make it a little different. You will notice that CyberBennett is now option. So when you click the save search results, it will be populated as an option here. So going back to this window, exact matches best use when the search term is the root. For example, virus is a word that is rarely extended or dependant with any postfix. Substrings should be used, where the search term is a part of another word. And you want all instances. For example, data, this can result with database, data, or [Metadata](../../Skills/Web%20Development/Metadata.md). For regular expressions, these can be used for specific patterns and regular expressions support, many kinds of wild cards. This way you be catching all cases in all instances. The ad hoc searches are intended to be used after the ingest completes. If the ingest is ongoing, the searches will work with limited capacity. Additionally, you won't be able to edit the keyword lists
>
> **[3:09](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=189)** during the ingest, but you can't copy them to a new list. My suggestion is just to wait until the ingest is finished to ensure your findings are accurate. When referring to the keyword list, I'm referring to the keyword list, the button itself. Here, you have a variety of options. You have phone numbers, IP addresses, email addresses, URL, and credit card numbers. Select any of that may apply that you may want to find and you can go from there. If you want to manage a list or add something else, you can select that as well, and select new list. Here, we can create our lists, whatever the keyword itself may be. You can copy it from clipboard for taking this data from somewhere else, or you can manually put them in so every result will populate a specific instance. Either way, this works best if there's something you may want to test. So in some examples, this would be beneficial if you have a list of users or usernames that you will want to use regarding the case. So select okay, when you're done. And that's how to use the keyword lists. If you go to the keyword search and you type in H-sport-employee-info.CSV and click the exact match and search, you will see some files that may be interesting. However, what you also will notice is that these files are not the same as what's included in our interesting files module that we did in the last chapter. As mentioned, we have 43 results here when using a keyword search.
>
> **[4:43](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/searching-for-keywords-and-files?u=76281980&t=283)** However, in our listings, we only have four documents. This is because the keyword search found this string in the text files. So if you used to go and click any of these, you will notice that the phrase H-sport-employee-info.csv is in every single one of these. Opposed to the listing, which simply just looks for the files that the file names. I mentioned this as it helps underlying the way that Autopsy works and it helps you identify which way you can use the keyword search. In our next video, we will cover tagging.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **CLI Commands:** find (2), node (1), make (1)
> **Analogies:** for example (3)
> **File Paths:** h-sport-employee-info.csv (2)
> **Env Vars:** url (1), csv (1)
> **Cross-References:** in the last (1), next video (1)
> **UI Navigation:** select the (1), go to (1)
> **Definitions:** is a  (2)

#### [Tagging](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=0)** - [Instructor] In this video, we will cover tagging. Tagging is another name for bookmarking, and this allows you to mark and refer to a file of interest for later usage. You can do this by right-clicking on an object and choosing the appropriate tag. I want to show you that you will notice that there's two different types of tags. First, there's the result tag. Second, there's the file tag. So you may be wondering, well, what's the difference? Well, you can use a file tag when a certain file is of interest. For example, let's say you're working on an investigation for a suspected cheating spouse. Well, you found some pictures of someone that isn't the person who may have hired you. So you decided to tag those photos. Now regarding anything that says add result tag, this is specifically for results that are generated from the modules themselves. There are three options when tagging. You can use an existing tag, which are these here. You can tag and comment, and you can create a new tag. The pre-existing tag names will already have a description. So the comment would have to be something additional that would also need to be noted, such as the location it was found. Maybe the file was deleted to destroy the proof, which shows that the user was aware of its existence. There are several default tag names. You have bookmark, which is the default tag for marking files of interests. You have category one through five, which is mainly used for law enforcement usage. You have follow-up, which is of course to follow-up on. And you have notable items.
>
> **[1:34](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=94)** The default tag, which is the default tag for indicating that an item should be marked as notable in the central repository. Creating a custom tag will be automatically saved for future reference and will be above the default tags. So for this example, we're going to create a tag that is titled H+ Sport Files.
>
> **[1:56](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=116)** We're actually, we're going to call it Leaked H+ Sports Files. And the description is, I'm just going to put something here as a placeholder, but okay. So once you get done typing out whatever you may need to type, you can select OK. And you will also notice this yellow exclamation point. This exclamation point has been referenced in the previous video. Creating a custom tag name will automatically be saved for the future, it will be above the default tags. There's an option to tag a group of items as well. You can simply highlight all the items you will want to tag by clicking the first one, and then going to whatever other files you want to add, select shift and select the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). Once you right-click, you can click Add Results, and add it to whatever you decide you may need to. Because these actually do not apply, I will not include it in this instance. Once you get done tagging something, you can also review the tag in tree viewer by scrolling down and going to the Tags folder itself, where are you in notice that the tag name is the exact tag that you gave it. Another tagging feature is called image tagging. This allows you to tag a portion of an image when you are viewing it in Content Viewer. This feature is only available for [Windows](../../Glossary/Service/Windows.md). However, to perform this action, you need to have selected an image in the results viewer. So let's do that. So I'm going to go up to Images, and I'm going to select the random one.
>
> **[3:33](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=213)** Actually because I wanted to make sure it's an image, I'm going to go ahead and go to the image itself and then select a specific JPEG. Welcome scan. Sounds good enough to me. So once you get here, we're going to enlarge the Content Viewer, so you're able to see, and you'll notice that there's a tags menu in the upper-right. So go to that and select it. You can go to create. This feature will work best when you want to identify a specific object across various pictures, and you may need to refer to them later. For example, let's say you are gathering data for a amateur assassin. The suspect is seen with another individual across a few different photos. So you tag both him and the accomplice. You later find out that this is his brother, and can provide this information to attorneys in a given report. By tagging both individuals, you won't have to go search for both people in the photos all over again. You can select, resize, and delete an image tag. While this is a harmless photo, and there's nothing in here of importance, you have two left-click somewhere near the image tag that you will want, select whatever you may want to select. You can have it tagged or categorized in any of the existing tag names, and you can also add a comment. So I'm going to create a new one, and it's called an example because this lovely flower is not a part of any investigation. After you make the tag, you will have the option to be able to resize it, to delete it, to edit it, and go from there. Lastly, the list of tags can be managed through the Tags tab
>
> **[5:08](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/tagging?u=76281980&t=308)** in the Options menu. To go here, you go to Tools, go to Options, and you go to Tags, Custom Tags, where you will see a compilation of all the tags you have created. It should also be noted that deleting a tag does not remove it from any tagged items. And that tag will also be usable in any case that it has been used in. Now that we discussed tagging, in the next video, let's go ahead and cover reporting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** go to (6), select the (2), right-click (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** previous video (1), we discussed (1), in the next (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is called (1), is a  (1)
> **Env Vars:** jpeg (1)
> **Prerequisites:** you need to have (1)

#### [Generating reports in Autopsy](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=0)** - [Instructor] The report module allows the user to extract key information from a case in a variety of formats, which include [HTML](../../Skills/Web%20Development/HTML.md), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md), Text, CSV, just to name a few. Most report types require you to select which data source to include. Fortunately, for us, we only have one, so we don't need to worry about that for now. The names of the excluded data sources may appear in the report, regardless of them being selected or not being selected. Majority of the report modules will generate a report file displayed under the reports note in the tree viewer. These are automatically generated for a specific modules. And in our case, if we go to there, we will see recent activity as the main module. Once again, I want to remind everyone that you may not have as many results as me because a couple of these modules have ran a few times. If the report has a specific viewer, such as Excel for CSV reports, you can open it in an external application. Now, let's create a basic report based off our findings. Select generate report. For HTML reports, you can choose both a header or footer to be displayed with the results. Once you select next, this is the data source I was referring to, and you can also include our results are specifically those that are tagged. If you choose our results, you will be prompted further with the types of artifacts to include in that report. So for example, you can select or deselect any of these that you may find irrelevant or relevant to your case. If you do specific Tag results, you can select whichever tags you may want as well.
>
> **[1:36](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=96)** Once you decided to select whatever you want, you select finish, a report will be created, and it will also be provided in the node. You can see the results at the very bottom here. Alternatively, if you remember where the case folder is at, you can go there as well. Going there, you will see the report that was generated in the HTML file. An Excel report is pretty much similar to the HTML report, however, it will create an Excel file with a proper extension. The remaining report options are not as commonly used, but I can cover them briefly. If you select the safe tagged hashes, this will specifically be used to add hashes to an autopsy hash set so it can be used by the hash lookup in the future. After configuring this module to create a new hash set to write to, or use an existing one, it will tag matching files and new cases. If you use files dash texts, this allows you to create a report of all files in the current case. It can be tagged in limited or comma. You will then have a list of items to include in the report that you can select or de-select, similar to HTML files.
>
> **[2:55](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/generating-reports-in-autopsy?u=76281980&t=175)** And if you use [Google](../../Glossary/Service/Google.md) Earth KML, this will create a KML file from any GPS data in the case and is used with Google Earth. And now we have finally covered all the chapters in the learning autopsy course. Next is the chapters challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [Excel](../../Skills/Data%20Science/Microsoft%20Excel.md) (4), [Google](../../Glossary/Service/Google.md) (2)
> **Env Vars:** html (5), csv (2), kml (2), gps (1)
> **Analogies:** similar to (2), such as (1), for example (1)
> **CLI Commands:** find (1), node (1)
> **UI Navigation:** go to (1), select the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Search for all instances of a file](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=0)** (bright music)
>
> **[0:06](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/challenge-search-for-all-instances-of-a-file?u=76281980&t=6)** - [Instructor] In this chapter, we learned about file searching, tagging and generating reports. For this challenge, I want you to search for the new logo that was leaked. And once you find it, look for all instances of the logo by using the file search capability and the hash of that logo. If you recall, we did actually see this new logo present in a previous challenge. Once you're done with that, go to the next video for our solution.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### [Solution: Search for all instances of a file](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=0)** - [Instructor] The solution for this challenge is built upon chapter two's challenge. If you remember the H+ executable file that we analyzed in chapter two, you will notice that in the Application tab, you saw the leaked logo. So let's go back there by expanding Analysis Results, Extension Mismatch Detected. Another hint at this was noticeable by the jpeg justification and MIME type. So if we increase this, you see the logo. And going to File [Metadata](../../Skills/Web%20Development/Metadata.md), you're able to grab the MD5 hash. I'm going to Control C to copy it, since I don't have the option to right-click and copy it. Once you do that, you can go to the Data Sources, right-click and Open File Search by Attributes. If you go to MD5, paste the value in there and click Search, you shall then... Hmm. Okay. So I'm going to try again. I'm going to go to here. H+ SPORT. We are going to grab the file meta... Actually, you could just use the SHA-256. Control copy that in. Go back to File Search for Attributes.
>
> **[1:32](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/solution-search-for-all-instances-of-a-file?u=76281980&t=92)** If you notice, I used a different method, 'cause there's multiple ways you can do this. Ah, okay. So this is a good point that I did not think about. The reason this was not found was because I have the name, here, highlighted from my previous example. So we can select the MD5. But now that I got the SHA-256, I'm just going to use that instead. Once I do that, then the results are going to show up. So if you were not able to find it, please be sure that you actually did have the SHA or MD5 hash, and only that option selected. So once again, you'll notice that we have four different instances of the file being present on this desktop. You can look at the information, the Modified Time, the Change Times, and the dates they were accessed, if you want more information regarding them. If you select them, you will notice on the application that, indeed, these are all identical copies, despite the different file names themselves. And lastly, if we wanted to just confirm, to see where all these files were located, you do have the executable that was located in the Pictures directory. However, everything else was hidden someway, somehow, in a different, unknown program file. Nonetheless, that is the solution for the challenge for this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** md5 (4), sha (3), mime (1), sport (1)
> **UI Navigation:** go to (3), right-click (2), select the (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps: Create your own case and analyze your files](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-autopsy-for-digital-forensics/next-steps-create-your-own-case-and-analyze-your-files?u=76281980&t=0)** - And thank you for joining me for this Autopsy course. I really hope that you enjoyed it, the journey, the course, the information, and you understand how valuable Autopsy is, how powerful it is, and how much you can use that tool to your advantage. For more information, I'd highly recommend you go to Autopsy's website. They do have a blog that's fairly active, and in case you want to find additional resources and training available, you can find disc images online through various websites or image your own desktop for your own analysis. To remain in contact with me, you can add me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), or you can also go to [cyberbennett.com](https://cyberbennett.com). Thanks for watching. Good luck, thanks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (2)
> **URLs:** [cyberbennett.com](https://cyberbennett.com) (1)
> **Speakers:** - and (1)


## Instructor

- [Bennett Hendrix](../../Instructors/Cybersecurity/Bennett%20Hendrix.md)

## Resources

- Exercise files available

## Skills Covered

- Digital Forensics

## Path Context

### In [Explore a Career in Computer Forensics](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Computer%20Forensics.md)
← [Protecting Your Network with Open-Source Software](Protecting%20Your%20Network%20with%20Open-Source%20Software.md) | **7 of 9** | [Soft Skills for Information Security Professionals](Soft%20Skills%20for%20Information%20Security%20Professionals.md) →

## Appears In

- [Explore a Career in Computer Forensics](../../Paths/Cybersecurity/Learning%20Paths/Explore%20a%20Career%20in%20Computer%20Forensics.md)

---

[↑ Back to top](#)