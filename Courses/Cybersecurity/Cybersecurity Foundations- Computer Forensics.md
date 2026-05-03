---
type: course
cssclasses:
  - lle-course
slug: cybersecurity-foundations-computer-forensics
url: "https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics"
duration_minutes: 162
duration: 2h 42m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG5VnozORNgkQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702587022790?e=2147483647&amp;v=beta&amp;t=n1BwL6VnZRkDQQVPhQWmfeCmD34_kd-Z3LR29eC0mKk"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an IT Security Specialist]]'
  - '[[Cybersecurity Fundamentals]]'
  - '[[Explore a Career in Computer Forensics]]'
prev_courses:
  - '[[Cybersecurity with Cloud Computing]]'
  - '[[Cybersecurity with Cloud Computing]]'
  - '[[The Cybersecurity Threat Landscape]]'
next_courses:
  - '[[Vulnerability Management in Cybersecurity- The Basics]]'
  - null
  - '[[Operating System Forensics]]'
path_nav: '[{"path":"Become an IT Security Specialist","position":7,"total":12,"prev":"Cybersecurity with Cloud Computing","next":"Vulnerability Management in Cybersecurity- The Basics"},{"path":"Cybersecurity Fundamentals","position":12,"total":12,"prev":"Cybersecurity with Cloud Computing","next":null},{"path":"Explore a Career in Computer Forensics","position":2,"total":9,"prev":"The Cybersecurity Threat Landscape","next":"Operating System Forensics"}]'
path_count: 3
tags:
  - course
  - topic/security
  - topic/cloud-computing
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Cybersecurity%20Foundations-%20Computer%20Forensics.md)

![Cybersecurity Foundations: Computer Forensics](https://media.licdn.com/dms/image/v2/D560DAQG5VnozORNgkQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702587022790?e=2147483647&amp;v=beta&amp;t=n1BwL6VnZRkDQQVPhQWmfeCmD34_kd-Z3LR29eC0mKk)

# Cybersecurity Foundations: Computer Forensics

> Computer forensics is used to find legal evidence in computers, mobile devices, or data storage units. This course covers all the technical essentials for up-and-coming digital forensics professionals. Instructor Jungwoo Ryoo reviews the goals of computer forensics, the types of investigations it's used for, a forensic investigator's typical tool set, and the legal implications of this type of wor

> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics) | 2h 42m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Computer forensics](#computer-forensics)
  - [What you should know](#what-you-should-know)
- [**1. Understanding Computer Forensics**](#1-understanding-computer-forensics) (10 videos)
  - [Definition and goals of computer forensics](#definition-and-goals-of-computer-forensics)
  - [History](#history)
  - [Types of investigations](#types-of-investigations)
  - [Tools](#tools)
  - [Legal implications](#legal-implications)
  - [Current and future trends](#current-and-future-trends)
  - [Challenges](#challenges)
  - [Anti-forensics techniques](#anti-forensics-techniques)
  - [Compliance and forensics](#compliance-and-forensics)
  - [Cybersecurity and forensics](#cybersecurity-and-forensics)
- [**2. Areas of Computer Forensics**](#2-areas-of-computer-forensics) (9 videos)
  - [Specializations in computer forensics](#specializations-in-computer-forensics)
  - [Network forensics](#network-forensics)
  - [Operating system forensics](#operating-system-forensics)
  - [Web forensics](#web-forensics)
  - [Cloud forensics](#cloud-forensics)
  - [Malware forensics](#malware-forensics)
  - [Mobile forensics](#mobile-forensics)
  - [Email forensics](#email-forensics)
  - [Certifications](#certifications)
- [**3. Preparing for an Investigation**](#3-preparing-for-an-investigation) (9 videos)
  - [Tools and knowledge requirements](#tools-and-knowledge-requirements)
  - [Hardware](#hardware)
  - [Software](#software)
  - [Understanding hexadecimal numbers](#understanding-hexadecimal-numbers)
  - [Using a hex editor](#using-a-hex-editor)
  - [Understanding offset](#understanding-offset)
  - [Forensics OS distributions](#forensics-os-distributions)
  - [Challenge: Hex editor](#challenge-hex-editor)
  - [Solution: Hex editor](#solution-hex-editor)
- [**4. File System Fundamentals**](#4-file-system-fundamentals) (7 videos)
  - [Understanding file systems](#understanding-file-systems)
  - [Understanding the boot sequence](#understanding-the-boot-sequence)
  - [Understanding disk/solid-state drives](#understanding-disksolid-state-drives)
  - [Understanding the master boot records (MBR)](#understanding-the-master-boot-records-mbr)
  - [Understanding Partitioning](#understanding-partitioning)
  - [Challenge: Partitioning a USB drive](#challenge-partitioning-a-usb-drive)
  - [Solution: Partitioning a USB drive](#solution-partitioning-a-usb-drive)
- [**5. Persisting Data**](#5-persisting-data) (11 videos)
  - [Evidence preservation approaches](#evidence-preservation-approaches)
  - [Understanding the role of write blockers](#understanding-the-role-of-write-blockers)
  - [Using a software write blocker](#using-a-software-write-blocker)
  - [Using hardware write blockers](#using-hardware-write-blockers)
  - [Understanding hashing](#understanding-hashing)
  - [Hashing algorithms](#hashing-algorithms)
  - [Case Study: Hashing in FTK Imager](#case-study-hashing-in-ftk-imager)
  - [Understanding mounting](#understanding-mounting)
  - [Mounting manually](#mounting-manually)
  - [Challenge: Hashing in Kali](#challenge-hashing-in-kali)
  - [Solution: Hashing in Kali](#solution-hashing-in-kali)
- [**6. Aquiring Data**](#6-aquiring-data) (7 videos)
  - [Data acquisition approaches](#data-acquisition-approaches)
  - [Static acquisition with open-source tools](#static-acquisition-with-open-source-tools)
  - [Static acquisition case study with dd](#static-acquisition-case-study-with-dd)
  - [Static acquisition case study with dcfldd](#static-acquisition-case-study-with-dcfldd)
  - [Live acquisition case study with a commercial tool](#live-acquisition-case-study-with-a-commercial-tool)
  - [Challenge: Live acquisition with a memory dump file](#challenge-live-acquisition-with-a-memory-dump-file)
  - [Solution: Live acquisition with a memory dump file](#solution-live-acquisition-with-a-memory-dump-file)
- [**7. Putting It All Together: Analyzing Data and Generating Reports**](#7-putting-it-all-together-analyzing-data-and-generating-reports) (7 videos)
  - [Forensic data analysis](#forensic-data-analysis)
  - [Indexing](#indexing)
  - [Searching](#searching)
  - [Generating a Report](#generating-a-report)
  - [Case Study: Hex editor analysis of a file with a wrong extension](#case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension)
  - [Hex editor analysis of a bit-shifted file](#hex-editor-analysis-of-a-bit-shifted-file)
  - [Case Study: Steganography](#case-study-steganography)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Computer forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=0)** - Cyber crime is growing. It's all over the news. Businesses are shut down due to ransomware attacks, and individuals are suffering from identity thefts. The demand is high for [[Computer Forensics]] professionals who are at the forefront of bringing cyber criminals to justice. Hello, I'm Jungwoo Ryoo. As a college professor, I've been teaching computer forensics many years. I'm thrilled you've joined me in this course where you'll learn major computer forensics topics, such as investigation prep, write blocking and [[Data Acquisition]]. You'll also have an opportunity to explore evidence analysis and reporting through hands-on demos in [[Windows]] and [[Linux]]. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (3), [[Data Acquisition]] (1), [[Windows]] (1), [[Linux]] (1)
> **Analogies:** such as (1)
> **Speakers:** - cyber (1)

#### [What you should know](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=0)** - Let's talk about what you should know before taking this course. My goal is to help you quickly learn essential [[Digital Forensics]] concepts and develop an overall understanding of the field. So this course has no real prerequisites. We'll be using both [[Windows]] and [[Linux]] operating systems, but don't worry if you don't have a Linux computer available, you can still sit back and watch the demos. However, do keep in mind that many [[Computer Forensics]] investigations require using Linux, so it'll be good to get familiar with the OS. The software tools used in this course are free or available as trial versions. I'll share details about how to download each of them later in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3), [[Digital Forensics]] (1), [[Windows]] (1), [[Computer Forensics]] (1)
> **Cross-References:** later in (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)


### 1. Understanding Computer Forensics

[↑ Back to Table of Contents](#table-of-contents)

#### [Definition and goals of computer forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=0)** - [Instructor] The ultimate goal of [[Computer Forensics]] is to produce evidence for legal cases. You need to keep four objectives in mind to achieve this goal. The first objective is to prepare for an investigation by ensuring the integrity of the evidence. An example is write protecting your evidence media to avoid accidentally writing over it. The second objective is to acquire data, which includes duplicating your evidence to only work on the copy instead of the original media. Once your data is acquired, the next step is to analyze it. Conducting a search based on a keyword to find an incriminating piece of evidence is an excellent example of analyzing data. Finally, the last step is to identify evidence and present it as a written report. These reports can be autogenerated by your computer forensics tool, but you often have to edit them. When we accomplish these objectives of computer forensics, it's safe to allow investigators to submit their evidence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (3)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [History](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=0)** - [Presenter] [[Computer Forensics]] originated from practical needs in the law enforcement community. Criminals started using computers to commit crimes and law enforcement officers in the trenches had to deal with the new phenomenon at the time. One of the first official recognitions of computer forensics in the US as a separate field was the formation of a computer analysis response team, or CART by the Federal Bureau of Investigation, or FBI in 1984. As the field matured, more players appeared. The Federal Law Enforcement Training Centers, or FLETC started offering training in collecting digital data. In 2005, the International Organization for Standardization, or ISO published a new standard called ISO 17025, general requirements for the competence of testing and calibration laboratories. Since crimes have no borders, countries also had to work together to reconcile the differences in their laws to prosecute criminals successfully. Europeans led this effort and played a significant role
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=95)** in establishing the Treaty of Convention on Cyber Crime in 2004, and the US signed the treaty. As an astute viewer, you may have noticed the change of terms used here. Cyber is a shorthand for cyberspace and refers to a virtual environment where information exchanges occur among computing devices. The [[Microsoft Word|word]] cybercrime emphasizes that computer crimes are no longer confined to a single, isolated machine, but touch on a collection of devices connected through a communications network like the internet. The word cybercrime compliments the more conventional label, "computer crime." Therefore, we're increasingly seeing both computer and cyber used together in media, as in computer and cyber forensics. You can also use [[Digital Forensics]] to cover both computer and cyber forensics because digital means anything using zeros and ones for representing data, which computers and cyberspaces do. Since its humble beginning in the 1970s, computer forensics has seen explosive growth and continues to expand its scope. Newly emerging technologies such as the [[Internet of Things (IoT)|Internet of Things]], or [[IoT]] are constantly pushing the limits of the field.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=191)** I'm sure some future successor will soon replace IoT, which will help keep expanding the field of digital forensics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (3), [[Microsoft Word|Word]] (2), [[Digital Forensics]] (2), [[IoT]] (2), [[Internet of Things (IoT)|Internet of things]] (1)
> **Env Vars:** iso (2), cart (1), fbi (1), fletc (1)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### [Types of investigations](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=0)** - [Instructor] There are two primary types of [[Computer Forensics]] investigations. One is public and the other is private. Public investigations occur in the context of criminal cases. They're usually conducted by law enforcement officers and driven by the statutes in the criminal law. Examples of public investigations include drug crimes, sexual exploitation, and theft. Private investigations occur in the context of civil cases. Organizations try to avoid any form of litigation due to the enormous associated cost. As a result, many private investigations turn out to be incident responses. Private investigations are typically conducted by corporations or similar types of organizations. The statutes of civil law or organizational policies drive private investigations. One of the most important things to consider in private investigations is business continuity. If your investigation hurts your business' bottom line, it's probably not worth the effort. Therefore, your priority has to be stopping the violations instead of litigating. Examples of private investigations include sabotage,
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=96)** embezzlement, and industrial espionage. The boundary between public and private investigations is often unclear. For example, when you're investigating an employee for a potential violation of company policies and coming across illegal pornography, the investigation quickly turns into a public case. Because of this reason, as a computer forensics investigator, you should be able to handle both public and private cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Tools](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=0)** - [Instructor] There are many tools of the trade in [[Computer Forensics]]. Some of these tools are software-based, others are [[Hardware]]-based. Many computer forensics software tools exist in the form of a software suite. They usually have a comprehensive set of features that cover an investigation from the beginning to its completion. Some of these features include the ability to acquire and process data, conduct searches, and generate reports. EnCase Forensic by OpenText is one such software suite. Here is their website in case you'd like to check it out. Depending on the nature of your case, you may need specialized software tools other than a computer forensic software suite because sometimes they don't provide the particular feature you're looking for. For example, if you had to retrieve a hidden text in an image file, a general purpose computer forensics tool wouldn't help you. For that, you need specialized software called a steganography tool similar to the one you're seeing here. There are also special hardware needs. Forensic software is demanding in terms of processing power, memory size, and storage space. The more of these resources you have, the better.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=96)** Forensic workstations also feature extra base and ports to help with future expansions. In addition to the computer forensics workstation, you may also need special equipment such as a write-blocker, which prevents an operating system from writing over on evidence drive. Software write-blockers are also available, but hardware write-blockers are often preferred because of their simple and surefire nature. Although it's not very special, a large capacity storage device is another tool you need in your computer forensics arsenal. These days, evidence drives tend to be big size devices, and they are getting bigger as we speak. Regardless of our backgrounds, we know very well that having an effective tool at hand can make a day and night difference. The same applies to computer forensics. To be effective as a computer forensics investigator, you have to have as many relevant tools as possible, and throughout this course, we'll explore many of the tools I've mentioned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (7), [[Hardware]] (3)
> **Analogies:** for example (1), similar to (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Legal implications](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=0)** - [Instructor] As a [[Computer Forensics]] investigator, you should be aware of the potential legal consequences of your action. If you conduct your computer forensics investigation improperly, the court could throw away all the evidence you provide. Even worse, you could get into legal trouble if you're not careful. In the context of a public investigation, one of the first things you have to consider is the Fourth Amendment. As you know, the Fourth Amendment protects you from unauthorized search and seizure. Therefore, as a computer forensics investigator working in public cases, you must obtain a warrant, by putting together a document called an affidavit, to justify the warrant. In the context of a private investigation, the Fourth Amendment is often not a significant issue because internal policies drive your investigation. instead of the statutes of the law. Employers ask their employees to give their consent to comply with these policies when a job offer is made. Whether part of a public or private case, for your evidence to be accepted by the court, you must ensure the reproducibility and verifiability of your evidence. You can accomplish this by following systematic procedures in your computer forensics investigations when collecting and analyzing data. For example, using chain of custody [[Forms]]
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=95)** and evidence lockers is critical to ensure there is little chance of tampering. Chain of custody forms allow you to track who handled your evidence, while evidence lockers are secure containers to store physical evidence. One way of ensuring verifiability is by the use of hashing. Let's say you have data on an original storage device or evidence drive, and a hash algorithm produces value A based on that data. Then you make a copy of the drive. If the same algorithm produces hash value B out of the duplicate, and if A and B match, the validity of the copy is verified. This course has a dedicated lesson where we look into hashing in more detail. Reproducibility is proven if you can generate the same hash value repeatedly. The Fourth Amendment, verifiability, and reproducibility are what you should always keep in mind as a computer forensics professional. How you conduct your investigation concerning these principles may have a significant legal impact. To avoid unintended consequences, following the leading practices is essential.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (5), [[Forms]] (2)
> **Warnings:** be aware (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### [Current and future trends](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=0)** - [Instructor] The good news for [[Computer Forensics]] professionals is that there are opportunities everywhere and there'll be even more because computer crimes are rising. The bad news is that criminals are getting more organized and sophisticated, making our job as investigators more challenging. There are many anti-forensics techniques that individuals can use when committing crimes in cyberspace. It's now a common practice to adopt one or more of these approaches to evade detection. Encryption is a huge challenge because it scrambles evidence and renders it useless. All mainstream operating systems or OS vendors are providing advanced encryption capabilities for mobile devices and personal computers to protect the [[Privacy]] of their customers. Users can quickly and easily turn encryption on without expert knowledge. Some of you may remember a controversy surrounding Apple not providing [[Technical Support]] for bypassing its encryption algorithm to help law enforcement. Advances in [[Hardware]] and software are always ongoing, presenting constant challenges. The sheer volume of data they generate alone is already too daunting to keep up with. These days, many standard storage devices have well over one terabyte capacity. Unless we accomplish comparable advances in search tools,
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=96)** forensic analysis attempts are bound to take longer. Luckily, we are seeing an explosion in [[Data Science]] innovations, especially in the area of [[Big Data]] and [[Artificial Intelligence (AI)|artificial intelligence]], and I'm hoping that these newly emerging data science solutions will help reduce the average turnaround time for computer forensics analysis reports. We are also storing more data in the cloud, and the ownership of data is not always clear, which could lead to custody disputes over potential evidence that a cloud service provider stores. Another welcome change would be the improvement of the ease of use of computer forensics tools. More automation is important because it will enable investigators to spend less time on mundane tasks and focus more on what's really important. Automation can also help relieve specialists of simple but critical preliminary tasks such as collecting evidence at crime scenes, which less trained law enforcement officers should be able to handle with the help of more user-friendly software and hardware. Despite some of the challenges I mentioned here, the prospect of computer forensics industry is highly positive. There's always a big demand for well-trained professionals, and this trend will continue for the foreseeable future. If you're considering a career path in computer forensics,
>
> **[3:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=193)** now is the time to jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (5), [[Hardware]] (2), [[Data Science]] (2), [[Privacy]] (1), [[Technical Support]] (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Challenges](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=0)** - [Instructor] Working in [[Computer Forensics]] is challenging, partly due to the rapidly changing technology landscape. Whether they're old or new, all the technologies also coexist while new software and [[Hardware]] are constantly appearing. Take your PC, they continuously release new versions of the operating systems or OS. [[Microsoft]] OS alone has a long list of upgrades from MS-DOS to the latest version of [[Windows]] OS. Computer forensics professionals encounter many different technologies during an investigation. It could be MS-DOS today, but Windows 11 tomorrow. Does this mean that you need to know everything? The simple answer is no. It's virtually impossible to master every OS. A good compromise is to develop foundational knowledge that transcends different versions of OSs and to focus on more persistent aspects of computer technology, such as file systems. You also have to be resourceful. Sometimes all it takes is a call to an expert. However, it's still challenging to keep up with the changes and fundamentals and maintain an understanding of numerous technologies out there. Therefore, to thrive in this ever-changing field, you must love learning.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=96)** The second challenge is that criminals are getting smarter and developing new ways thwart forensic analysis attempts. These anti forensics techniques range from encryption to steganography. Once again, computer forensic specialists should be fully aware of these tricks and wade through the challenges to acquire the evidence they are tasked to find. The third challenge is the sheer volume of data to be analyzed. The storage capacity of a typical computer is growing exponentially. These days, it's common for a laptop to have a terabyte solid state drive. To produce a timely report, an investigator must have access to a powerful workstation equipped with the latest forensic technologies, which are rapidly evolving themselves. There are also other non-technical challenges. [[Privacy]] is one of them. To stay out of trouble, a forensic specialist should be crafty and able to navigate through private data while not violating a person's privacy. Otherwise, the investigator risks having the collected evidence not accepted by the court. Jurisdiction is another legal challenge. Due to the differences in laws between countries, you may not be allowed to retrieve and present certain information.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=191)** There are many more challenges in computer forensics, which naturally result in more expansion and specializations in the field. These challenges are good for the industry because they generate more opportunities for all of us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (3), [[Windows]] (2), [[Privacy]] (2), [[Hardware]] (1), [[Microsoft]] (1)
> **Env Vars:** dos (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Anti-forensics techniques](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=0)** - [Instructor] There is an ongoing race between criminals and [[Computer Forensics]] professionals. The lawbreakers are always seeking ways to evade the investigators. Sometimes bad guys get unexpected help from operating systems or OS vendors. To protect the [[Privacy]] of its users, OS companies strengthened their encryption, which could keep good guys like investigators from doing their work. It's a delicate balance. Encryption is one of the most daunting challenges computer forensics specialists face today because it prevents investigators from reading the data they need to investigate. Another obstacle is an attempt to erase evidence from various media, like a solid state drive. It's impossible to recover your data depending on how you delete it. When you delete a file, your OS doesn't remove it from a storage device. It simply marks the area the file occupies as deleted so it can be overwritten later. Therefore, to thrive in this ever-changing field, to override the section designated as deleted and make it permanently erased. [[Metadata]] provides information on different aspects of data. If your data is a digital photo, its metadata includes facts like when the photo was taken and which device took it.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=96)** OSs keep metadata about files, including names, sizes, timestamps, and most importantly, where the files are stored. Corrupting or deleting the metadata will make it extremely difficult to reconstruct or find the file. Preventing metadata from being created altogether is another option. An example is suppressing the changes of timestamps every time revisions are made. This will throw off investigators because they'll be confused about the sequence of file change events. There are also more creative ways to avoid detection and hide information. One of the methods is using steganography, often favored by spies. They can subtly embed information in a picture file so that the image is not significantly altered. If done well, it's almost impossible to tell the difference between an original image and its tampered version, as you can see on the Guardian Project website where they offer a steganography app. A more general method to hide data is to put it in unreachable places, undetectable by computer forensics software. A [[Slack]] space, a leftover created when writing to a file system, is a popular choice for this.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=191)** More advanced techniques can destroy evidence once they detect and attempt to analyze a digital medium forensically. New anti-forensic approaches are constantly emerging and many more are under development. This race between defenders and violators will continue as long as there is money to be made through computer and cyber crimes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (5), [[Computer Forensics]] (3), [[Privacy]] (1), [[Slack]] (1)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** make (2), find (1)
> **Tools:** slack (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Compliance and forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=0)** - [Narrator] [[Computer Forensics]] is essential to meeting compliance requirements. Organizations must comply with different rules and regulations, depending on the industry. The Health Insurance Portability and [[Accountability]] Act, or HIPAA of 1996, stipulates protecting personally identifiable information, or PII, in the healthcare and insurance industries. The National Institute of Standards and Technology, or [[NIST]], is a non-regulatory agency of the US Department of Commerce. NIST SP 800-66 is a publication designed to help implement the HIPAA security rule. SP here stands for special publication. The NIST Guide clearly specifies computer forensics requirements and regulations. In particular, it discusses establishing an audit trail, supporting a forensics investigation after an incident. An audit trail is a chronological record that documents security-relevant events. Various log messages generated by software and [[Hardware]] are an example of an audit trail. In handling credit card transactions, an organization is responsible for adhering
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=93)** to the [[PCI DSS|Payment Card Industry Data Security Standard]], or [[PCI DSS]]. PCI DSS imposes annual audit reports to ensure organizations take proper security precautions while processing customer credit card information. It mandates a process to provide a timely computer forensics investigation after a compromise occurs. The Federal [[Information Security Management]] Act, or FSMA of 2002, requires federal organizations to generate and retain an immutable audit trail that enables a computer forensics investigation after a security incident. Computer forensics plays a crucial role in ensuring that an organization remains compliant with [[Cybersecurity]] rules and regulations. This is one more reason to learn about computer forensics if you're involved in any aspect of the cybersecurity industry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (6), [[NIST]] (3), [[PCI DSS]] (2), [[Cybersecurity]] (2), [[Accountability]] (1)
> **Env Vars:** nist (3), hipaa (2), pci (2), dss (2), pii (1)
> **Definitions:** is a  (3), stands for (1)
> **Speakers:** - [narrator] (1)

#### [Cybersecurity and forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=0)** - [Instructor] Cyber crimes are increasingly affecting our lives. We routinely hear news about data breaches and wonder whether criminals stole our data. [[Cybersecurity]] is all about preventing and responding to cyber crimes, which requires the heavy use of [[Computer Forensics]] techniques. Whenever there is a security incident such as unauthorized access to a server, it's crucial trace back to the source of the attack and to understand how it happened. By doing this, we determine the damages extent and take appropriate actions. We can also prevent future attacks by making adjustments according to the lessons we learned from a comprehensive investigation. Since the evidence of cyber crime is mostly present on computing devices like laptops, routers, and firewalls, a computer forensics investigation must accompany every cybersecurity action. Due to this close relationship between cybersecurity and computer forensics, professionals are paying more attention to developing additional skills specific to handling cyber crimes. One expertise required to more effectively investigate a cyber crime is knowledge of [[Computer Networking]], which is the study of connecting machines using various media, including radio signals, internet and fiber optics cables.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=96)** As computer forensics workers who are seeking more specialization in cybersecurity regarding computer networking, they created an entirely new discipline called [[Network Forensics]]. This subfield of computer forensics focuses on violations and crimes occurring in the context of a computer network. Cyber crimes and computer forensics are now inseparable, and you need to develop at least a reasonable understanding of computer networking to play any significant role in a computer forensics investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (7), [[Cybersecurity]] (4), [[Computer Networking]] (3), [[Network Forensics]] (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 2. Areas of Computer Forensics

[↑ Back to Table of Contents](#table-of-contents)

#### [Specializations in computer forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=0)** - [Instructor] As [[Computer Forensics]] expands into cyber and digital domains, specialization is essential because it's impossible for one person to know everything. Investigations in cyber spaces require expertise in [[Computer Networking]] because monitoring, passing network traffic establishes evidence after a cyber crime happens. This involves looking for traces of crime and all the possible elements of what constitutes a computer network, including computers, switches, and routers. Many computers host programs called servers that provide services to another program or remote users called clients. Servers and clients can both be the origins and the destinations of computer network communications and should be subject to close scrutiny. This emphasis on computer networking is why we collectively call the cyber crime-centric investigation techniques [[Network Forensics]]. One of the conventional subfield of computer forensics is operating systems or OS forensics. The sheer number of different OSs and their versions warrant a specialty. The third primary specialization focuses on the World Wide Web. These days, I find myself doing a majority
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=94)** of my computing tasks in a web browser. I use a web client to check my emails. I edit my documents in [[Google]] Docs. I watch videos on YouTube. My Google Chrome frequently takes up over half of the resources on my computer. Just because of the dominance of the web and its applications in our everyday lives, unique web-specific forensic approaches are necessary and are in high demand. [[Cloud Computing]] is another trend shaping our information technology adoption. The cloud now powers most of the applications we are accessing through the web. Criminals have already started exploiting cloud users, which is why cloud forensics is becoming a major [[Digital Forensics]] subfield. To compromise web and [[Cloud Security]], criminals sponsor the development of malicious software or malware. The complexity of malware is increasing as law breakers understand its value, and invest more resources in producing more sophisticated attack software. Expert knowledge is a must to address malware challenges in computer forensics effectively. Mobile computing devices have software and [[Hardware]] characteristics fundamentally different from desktop computers. The form factors are different
>
> **[3:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=188)** and so are the OSs, such as iOS and [[Android]]. Tablets and mobile phones are quickly becoming mainstream and we spend less and less time on our PCs. We definitely need specialized treatment here, and mobile forensics is a response to this need. Email forensics is the last specialization I'd like to bring up. People spend a lot of their professional lives checking emails, and the same applies to criminals who exchange emails to coordinate their illegal activities. The significance of email and digital forensics is high enough to deserve a specialization. As the information technology landscape changes, digital forensics must keep up with the advancement of the field. Specialization is a coping mechanism and the discipline of digital forensics will become even more diverse. I feel lucky to be part of this dynamic industry of digital forensics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (5), [[Computer Forensics]] (3), [[Computer Networking]] (2), [[Google]] (2), [[Network Forensics]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Code Identifiers:** ios (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Network forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=0)** - [Instructor] [[Network Forensics]] investigates crimes in cyberspace. It focuses on analyzing and monitoring network traffic data exchanged between computing devices with unique addresses. To be able to conduct network forensics tasks, you need to develop significant knowledge in [[Computer Networking]]. Some of the topics to master include the roles of network [[Hardware]] like switches, routers, and hosts, and various network layers such as physical, data link and application. Others are concepts. A prime example is network architecture, which decides how to assemble different networking hardware components using specific technologies. Understanding a network architecture is equivalent to acquiring a map, which is essential for the searches you need to conduct in a maze of various network devices and appliances. Besides learning the hardware, layers and concepts, becoming proficient with networking software is another crucial aspect of establishing yourself as a network forensics specialist. Therefore, to thrive in this ever-changing field, is operating systems or OSs. They provide baseline networking capabilities that turn your application data into packets and then electrical or optical signals
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=94)** so that they can travel through copper wires or fiber optics cables. Your OSs also allow you to configure your network settings to connect your computer to a [[Local Area Network (LAN)|local area network]], or LAN. If you're not already familiar with basic commands like ipconfig on [[Windows]], or ifconfig on [[Linux]], it's a good indicator that you lack qualifications as a network forensics investigator. After developing proficiency with OSs, a natural next step is to study well-known software tools, Package snippers are one of them. This will throw off investigators and package snippers are what you use to collect and preserve data in computer networks. There are numerous other software tools in computer networking. These are software firewall solutions, [[Intrusion Detection]] and prevention systems, security information and event management, or SIEM applications. I hope you now have a good feel for what network forensics involves. Several [[Digital Forensics]] software [[Microsoft Products|products]] have built-in features for network forensics tasks and require minimum networking knowledge, but much more is needed to dig deeper into the crime scenes in cyberspace. If your career goal is to become a network forensics specialist,
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=186)** I recommend you do everything I've highlighted so far.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Forensics]] (7), [[Hardware]] (3), [[Computer Networking]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Windows]] (1)
> **Env Vars:** lan (1), siem (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Operating system forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=0)** - [Instructor] Operating systems, or OSs, are one of the most fundamental components of [[Digital Forensics]]. We use OSs to control all the digital devices around us. Take your mobile phones. The prevalent OSs that drive their inner workings are [[Android]] and iOS. Your favorite digital watches also have OSs. [[Windows]], [[Linux]], and Mac OS power most of the computers in the world. The diversity alone presents a considerable challenge. Each type of [[Hardware]] can potentially have its own OS, like your phone, watch, and computer. Windows OS has so many versions and you cannot simply ignore its old versions because many of them are still in use. I bet Windows 3.1 is still in news somewhere out there. A more realistic scenario is investigators running into outdated OSs, such as Windows 98 instead of its prehistoric predecessor. The die-hard nature of OSs and their diversity make them even tougher to investigate, and demand specialization. One of the major areas of OSs forensics is file systems, because they store data, including evidence. Although similar,
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=92)** each operating system has its unique way of storing files. This is even the case among different versions of the same OS, like Windows. Have you heard of FAT or NTFS? FAT stands for File Allocation Table and NTFS is an acronym for New Technology File System. Both of them are popular Windows file management systems. Linux and Mac OS have their own. Random access memory, or RAM, is another location where an investigator can find significant data leading to potentially incriminating evidence. Over the years, the capacity of RAM has been increasing and personal computers or PCs often have eight gigabytes of memory or more. You can find lots of valuable data in RAM, including unencrypted encryption keys and passwords. The challenge is that the data in RAM is volatile, which means you lose its content when your computer is turned off. Because of this, you must capture the data while the suspect computer is still on. We call this act of retrieving data from RAM live acquisition. OSs also generate numerous log files with crucial information like time stamps and identities of users.
>
> **[3:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=187)** Other areas of OS forensics include virtualization and [[Cloud Computing]]. Many corporations no longer have their server room but outsource their IT to cloud service providers, which use [[Virtual Machines]] to install end users' OSs instead of physical PCs. What I've discussed so far is just a highlight of the fascinating field of OS forensics. You at least need a decent level of competency in OS forensics to qualify as a digital forensics professional because the knowledge is foundational for almost all digital forensics tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Digital Forensics]] (3), [[Linux]] (2), [[Android]] (1), [[Hardware]] (1)
> **Env Vars:** ram (5), fat (2), ntfs (2)
> **CLI Commands:** find (2), make (1)
> **Definitions:** stands for (1), is an  (1), we call this (1)
> **Code Identifiers:** ios (1)
> **Versions:** 3.1 (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### [Web forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=0)** - [Instructor] Web browsers are a huge part of how we use our computing devices. We check our emails through web applications. We shop online using our web browsers. Online [[Banking]] is another area where we use web applications. We use web browsers on multiple platforms. They're available on our phones, tablets, and computers. We can also sync multiple instances of web browsers by signing on, which makes web forensics even more relevant. Due to our heavy use of web browsers in our computing experience and on the internet, web forensics has become a significant subfield of [[Digital Forensics]]. One of the web forensics goals is to find sensitive information, such as usernames and passwords. Password management has been a challenge in [[Cybersecurity]]. Web browsers are trying to help mitigate the problem by allowing users to save their credentials in the cloud. Therefore, full access to a web browser account can unlock many other online accounts a suspect owns. The same, applies to credit card numbers because they're stored as well. Browsing history is another treasure trove of information. Based on the sites of user visits, investigators can tell much about the person, including motives and criminal intent.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=96)** A lot of what people do is also searching, and the query terms often provide clues to the mindset of a suspect. Although ultimately encrypted to be saved in the cloud, the confidential information; documents, images, videos; data entered into [[Forms]], scripts, and executable files linger in a temporary and less secure memory location called cache. Basically, examining web data alone can reveal ton of information on a user, including interests, preferences, beliefs, shopping habits, friends, family, and other social networks. Because of the widespread use and the information-rich environment it provides, cyber criminals frequently launch their attacks against web browsers. You must have heard of cross-site scripting and [[SQL]] injection by now. Since these attacks occurred through web browsers, cybersecurity professionals can conduct a web forensics investigation to fulfill an [[Incident Response]] task. The dominance and popularity of web browsers in everyday computing also presents some challenges. An obvious one is their diversity. There are several mainstream web browsers, and they continue to evolve.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=190)** Encryption and [[Privacy]] features are others. By using an incognito mode, users can conceal their browsing history. Despite these difficulties, web browsers are still a primary source of evidence for digital forensics. I hope you're intrigued and ready to learn more about them. Web forensics certainly deserves attention in its own right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (2), [[Cybersecurity]] (2), [[Banking]] (1), [[Forms]] (1), [[SQL]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** sql (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Cloud forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=0)** - [Instructor] [[Cloud Computing]] used to be an emerging technology, but not anymore. It's quickly taken over many aspects of our computing lives. Take file storage. Many of us now have one or more cloud-drive service accounts. I rarely store data locally. This trend implies that [[Digital Forensics]] is no longer limited to local file systems, but must expand its scope to include cloud service [[Microsoft Products|products]]. There are three major types of [[Cloud Services]]. We are most familiar with [[SaaS|Software as a service]], or [[SaaS]], because of its end-user facing nature. It offers software solutions in web applications like [[Microsoft Word|word]] processors and spreadsheets. [[PaaS|Platform as a service]], or [[PaaS]], allows a self-contained environment where users can develop and maintain their software services. [[Web Servers]], [[Databases]], and operating systems are frequently available in PaaS offerings. Infrastructure-as-a-Service, or [[IaaS]], is the most extensive cloud computing option and allows users to build their computing resources by providing virtual [[Hardware]]. Through IaaS, you can provide your [[Virtual Machines]], virtual switches, and virtual routers, to name just a few. What's daunting to digital forensics investigators
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=95)** is that criminals also have access to all these different cloud capabilities. Due to the prevalence of cloud computing, the bad guys have a much easier time quickly setting up a computing infrastructure to commit a crime, and destroying it to evade detection, all on somebody else's hardware. What's important here is the actions of cloud service providers to monitor these criminal activities. By now, you know very well that social media sites could become the prime targets of criminal investigations and hold important evidence. Investigators will have very little to work with if these companies don't cooperate in capturing, and detecting illegal activities on their service platforms. Think about the possibility of having to execute a search warrant for an entire data center. There is no way you can do your job effectively without the help of the people managing the facility. This is why rules and regulations are critical in cloud forensics. Without a mandate to help lawful investigators, cloud service providers have little incentive to do anything. In civil cases, you can only rely on basic mechanisms such as service level agreements, or SLAs. Another option is the Federal Rules of Civil Procedure, or FRCP. Other than these, there doesn't seem
>
> **[3:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=189)** to be too much available to help cloud forensics investigations. Negotiations and legal knowledge, in addition to technical skills, play an essential role here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Computing]] (3), [[Digital Forensics]] (2), [[PaaS]] (2), [[IaaS]] (2), [[Hardware]] (2)
> **Env Vars:** frcp (1)
> **Speakers:** - [instructor] (1)

#### [Malware forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=0)** - [Instructor] Malware is short for malicious software. Cyber criminals frequently use malware to commit crimes. Computer viruses used to be the majority of malware we encountered, which is no longer the case. Malware has evolved since its first appearance. Many types of malware now exist including viruses, worms, adware, Trojan horses, rootkit, and ransomware. Viruses need human assistance like opening a file while worms can spread on their own through network connections. Adware is less damaging than other malware that destroys information because its goal is to display advertisements. It's annoying but better than losing access to data. Trojan horses appear benign and valuable on the surface, but the software performs steps to inflict damage behind the scenes. Rootkits change your operating system altogether to hide any suspicious activities. Changes are only visible to the installers of the rootkit. Victims cannot detect anything unusual. Ransomware seems to be very active these days. I'm sure you heard about it. They lock your computer and prevent you from using it. Recently, many organizations have been the victims
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=94)** of ransomware attacks. Criminals would ask for ransom money in return for unlocking your computer hence the name ransomware. Much of malware forensics involves capturing and analyzing the software tools used for crimes to understand the scope of damage and to find ways to detect and disable them. One of the most popular tools is disassembler, which allows an investigator to extract source code from an executable file. Having access to source code is like obtaining a treasure map. The source code shows the logic behind malware behavior and sheds light on its evasion techniques. Another vital tool is live acquisition. You want to catch malware red-handed while it's in action, and the best place to do this is the main memory of your computer in which the malware resides and is taking action. After lifting the memory resident binary data that is simply a combination of zeros and ones, you can use a disassembler to dissect the malware you just captured. One of the first steps of malware forensics is to detect malware. A conventional way to do this is fingerprinting, which looks for a static pattern. The assumption here is that the pattern is not changing, which is why we use the term static.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=190)** Malware is getting smarter and uses various tactics to avoid detection through static analysis, which is why we now need a new approach called dynamic analysis. Observing damaging and deceptive behaviors is crucial in dynamic analysis. Because of the heavy emphasis on examining software, coding knowledge is critical to becoming an expert in malware forensics.

> [!info]- Semantic Content
>
> **Exercise Files:** source code (3)
> **CLI Commands:** find (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### [Mobile forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=0)** - [Instructor] Mobile computing devices are everywhere. Mobile phones are quickly replacing personal computers in their popularity and functions. It's now common to confiscate mobile phones and tablets in a criminal investigation. Mobile forensics is a subfield of [[Digital Forensics]], focusing on finding evidence on mobile devices. The diversity of mobile devices is overwhelming. I've gone through dozens of cell phones and tablets since my first purchase. You've seen many technologies come and go as part of the mobile revolution in our modern world. USB is a good example. I have so many cables at home to connect devices using different USB standards like USB 2.0, USB 3.0, Apple lightning, USB 3.1 type C, and USB 4.0 connectors. The list goes on and on. Finding appropriate cables alone could be a massive challenge for a forensics investigator. This example highlights the importance of tool support for cases involving mobile devices. If a vendor can provide the universal kit with all the necessary [[Hardware]] to get the data we need out of the proprietary hardware, the investigator's job will be much easier. Therefore, mobile forensics investigators must be proficient
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=97)** with specialized hardware and software tools to do their jobs effectively because having the right equipment or program can make a big difference. Luckily, many forensic solutions companies specialize in mobile devices as shown in this "Gifford Foundation" article. To be competitive, they aim to cover as many technologies as possible, which include various versions of mobile operating systems and different generations of hardware by numerous vendors. There are hardware components unique to mobile devices such as subscriber identifier module, or SIM. Seizing all associated cables and media, like a secure digital or SD memory card, is vital at a crime scene. There are also mobile device specific data to acquire. These include phone books, text messages, call history, location information, [[Wi-Fi]] networks, and cell towers used. Due to the diverse nature of mobile devices, it's often necessary to resort to multiple software and hardware tools. Mobile devices require custom seizure and preservation methods. All these distinct characteristics of mobile device forensics demand special training, and justify recognition
>
> **[3:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=193)** as a standalone track within digital forensics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (6), [[Digital Forensics]] (2), [[Wi-Fi]] (1)
> **Env Vars:** usb (6), sim (1)
> **Versions:** 2.0 (1), 3.0 (1), 3.1 (1), 4.0 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Email forensics](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=0)** - [Instructor] They are also our principle means to reach out to people. Criminals know that we pay attention to email. They try to exploit our increasing dependence on email in our personal and business lives. Take [[Phishing]] that tries to lure you into visiting a fake website and giving up sensitive information like your social security number or SSN. Emails are its primary attack vector or mechanism. Phishing is a form of social engineering taking advantage of human mistakes in an overall [[Cybersecurity]] context. Phishing emails can be as simple as someone impersonating your boss and asking for confidential information. Emails can also deliver malware in their attachments. Simply opening an attachment can infect your computer. Since emails are so prevalent during our daily communications, the electronic conversations alone can serve as incriminating evidence. Emails provide credible documentation of how various criminal activities unfolded in an organization in many corporate fraud cases and white collar crimes. One of the major tasks of an email forensic specialist is to find out the true identities of the senders and the receivers of an email and validate the authenticity of a message. We can use [[Metadata]] to do this.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=96)** Assuming that our data is email, its metadata includes IP addresses, timestamps, headers, and email clients used. Timestamps establish the sequence of criminal activities, while IP addresses can pinpoint where emails originated. Other significant email data include multimedia content such as web links, pictures, videos, and audio files. Another important email forensics task is keyword searches. The goal is to find the emails relevant to the crime you're investigating. Tool support is essential in making the search process efficient. To retrieve emails and prepare them for an in-depth analysis, it's necessary to know how to work with different email clients. There are characteristics unique to each client, and how they save their emails on local or remote file systems. An effective investigator needs to be fully aware of these details. Typically, emails go through multiple servers to reach their destinations. To make this delivery process happen, email clients and servers use a protocol called Simple Mail Transfer Protocol or SMTP. Because it's so easy to fabricate an email, it's frequently necessary to examine the SMTP logs
>
> **[3:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=193)** of the email servers to check its validity. Therefore, email forensics investigation requires you to understand the server side of the SMTP too. Since email systems rely heavily on computer networks and their software applications, including clients and servers, it doesn't hurt to develop knowledge in [[Computer Networking]]. Although we treat it as an independent subfield of [[Digital Forensics]], email forensics is closely related to [[Network Forensics]]. I would go so far as to say that email forensics is a further specialization of network forensics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (3), [[Metadata]] (2), [[Network Forensics]] (2), [[Cybersecurity]] (1), [[Computer Networking]] (1)
> **Env Vars:** smtp (3), ssn (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Certifications](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=0)** - [Instructor] Obtaining a certification is an excellent way to increase your credibility as a [[Digital Forensics]] investigator. There are mainly two different types of certifications out there. One is those provided by tool vendors, the other is provided by professional associations. We'll look into these certifications in more detail one by one. Let's look at the OpenText EnCase Certified Examiner, or EnCE, program first. It requires 64 hours of authorized [[Computer Forensics]] training or 12 months of computer forensics work experience. Next is the certification provided by Exterro. The requirements for this certification include access to Forensics Toolkit, or FTK. This certification provided by Exterro is called Access Data Certified Examiner, or ACE. EC-Council also provides a certification. This one is vendor-neutral and open to the public. The name of the certification is Computer Hacking Forensic Investigator, or CHFI. Finally, there's a certification provided by an organization called the International Association of Computer Investigative Specialists, or IACIS. In this case,
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=93)** the certification is more for law enforcement officers or government employees. The name of the certification is Certified Forensic Computer Examiner, or CFCE. If you decide to become a career computer forensics investigator, consider obtaining one of these computer forensics certifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (4), [[Digital Forensics]] (1)
> **Env Vars:** ftk (1), ace (1), chfi (1), iacis (1), cfce (1)
> **Definitions:** is an  (1), is called (1)
> **Speakers:** - [instructor] (1)


### 3. Preparing for an Investigation

[↑ Back to Table of Contents](#table-of-contents)

#### [Tools and knowledge requirements](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=0)** - [Instructor] There are some prerequisites to starting a [[Digital Forensics]] investigation. These include basic [[Hardware]] and software tools, which require significant investments. Maintenance is an important aspect to consider. Hardware needs replacing every once in a while. The software also demands upgrading because new versions are coming out constantly. Managers shouldn't forget the fact that time is also money. Free software sounds good initially, but it could become a time sink when little professional support is available to help the team configure an application properly. It may well be the case that the software becomes obsolete once its development stops due to some obscure problems associated with the project. If this happens, you lose all your investments in the software. For one, your expertise in the software product becomes useless because you have to abandon it and find its replacement. This is why it's always essential to consider the total cost of ownership or TCO when owning hardware and software. Think about all the resources allocated during a solution's entire lifespan when making your important purchasing decisions. Compared to software and hardware, your investments into training and education
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=93)** are relatively safer bets as long as you make sound choices in what to learn. Learning fundamentals like number systems stays with you for your entire career, although updating and upgrading your knowledge is paramount to staying relevant as a digital forensics professional. This is why I'm covering classic concepts like hexadecimal numbers and offset. I call them classic because they'll never become obsolete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (4), [[Digital Forensics]] (2)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** tco (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Hardware](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=0)** - [Narrator] There are some [[Hardware]] tools you need as a [[Digital Forensics]] investigator to function effectively. One of the essential requirements for digital forensics hardware is efficiency, mainly in terms of speed. As a digital forensics investigator, you spend much of your time on mundane tasks, such as waiting for your imaging process to be over and looking for information. You can finish these tasks very quickly depending on how fast your computer is. Therefore, the speed of your digital forensics hardware is critical. Another requirement for your digital forensics hardware is capacity. Your digital forensics hardware demands more memory and storage, as well as extra base and slots. The third requirement is compatibility. In your investigations, you'll come across many different types of operating systems or software applications. There are also various kinds of hardware you'll have to deal with. The next requirement is mobility or portability. When you show up at a crime scene, you have to accomplish some initial digital forensics tasks, which is why some of the digital forensics hardware you carry must be more portable. When in a lab environment, you have access
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=94)** to a full-blown digital forensics workstation. However, at a crime scene, you need a scaled down version of the same hardware, especially a field kit. One of the major elements of the field kit is a laptop configured as a digital forensics workstation. There are also some miscellaneous digital forensics hardware like flashlights, antistatic evidence bags, cameras, chain of custody [[Forms]], cables and screwdrivers. Antistatic evidence bags are essential when handling sensitive [[Electronics]]. Touching electronics with your bare hands can cause a short circuit, making the evidence useless. Using an antistatic evidence bag prevents this from happening. There is a wide variety of specialized digital forensics hardware. What we've discussed so far is an excellent place to start learning more about them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (11), [[Hardware]] (10), [[Electronics]] (2), [[Forms]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Software](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=0)** - [Instructor] A huge part of becoming an effective [[Digital Forensics]] investigator, is to be familiar with all the major [[Computer Forensics]] software. There are well-known commercial digital forensics software tools out there, such as enCase, and Forensic Toolkit, or FTK. There are also open source and free digital forensics software. These include Autopsy, and SANS, Investigative Forensic Toolkit, or SIFT. We can also categorize the digital forensics software [[Microsoft Products|products]] based on the comprehensiveness of the features they provide. When an application provides all, or most, of the features necessary for you to conduct a digital forensics investigation, we call it a digital forensics software suite. Software tools, such as enCase, FTK, and Autopsy, fall under this category. There are also computer forensics utilities that focus only on a single aspect of digital forensics investigations. For example, FTK Imager, solely focuses on obtaining an image of an evidence drive. Tools, such as dcfldd, or DD,
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=95)** also provide similar features. Hex Editors allow you to examine your file at a binary level. What's really handy is packaging opensource and free forensics programs into a [[Linux]] operating system distribution. This way you don't have to install anything and start using them out of box. The digital forensics OS distributions also offer an isolated environment that's important to prevent tampering. You can install them on a physical machine or virtual machine. My hope is that by the time you're done with this course, you'll have a list of basic understanding of how we use these software solutions in a digital forensics context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (9), [[Computer Forensics]] (2), [[Microsoft Products|Products]] (1), [[Linux]] (1)
> **Env Vars:** ftk (3), sans (1), sift (1)
> **Analogies:** such as (3), for example (1)
> **Code Identifiers:** encase (2)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### [Understanding hexadecimal numbers](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=0)** - [Instructor] The knowledge of hexadecimal numbers is essential in the toolbox of a [[Digital Forensics]] investigator. One of the motivations for using hexadecimal numbers is that it's often necessary to investigate data at a binary level. We use binary numbers to represent everything on a computer device. Binary numbers rely on only two symbols, 0 and 1. Machine code is a string or strings consisting of 0s and 1s. It's the only language your computer speaks. Criminals frequently hide or fabricate their data at the machine code level. Therefore, as a digital forensics investigator, you should also be able to examine your evidence in its native format, that is combination of 0s and 1s. The challenge associated with reading machine code is that there are simply too many digits to deal with. A more compact way to represent binary numbers makes human inspection much easier. The way you represent your data in machine code is called encoding. For example, to encode A, we need eight binary digits, 0100 0001. As you can see, displaying the raw binary data
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=96)** takes up a lot of space. Detecting a pattern in the sea of 0s and 1s is also more difficult because of their similarities. Hexadecimal representation, on the other hand, is much more compact and easier to examine, which increases readability and facilitates spotting a specific pattern. Hexadecimal representation, on the other hand, is much more compact and easier to examine, which increases readability and facilitates spotting a specific pattern. Another reason we use hexadecimal numbers to represent binary numbers is the ease of conversion. I told you that letter A requires eight binary digits to encode, as shown here. In hexadecimal, we just need two digits to represent the same number, which are 4 and 1. Think about the difference between 0100 0001 versus 41. Which one do you think is easier to manage? Each binary digit is referred to as a bit. 1 byte consists of 8 bits. Usually 1 byte is all it takes to represent a character in an alphabet. The hexadecimal number system uses base 16, which means it uses 16 different symbols,
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=192)** 0 through 9 and A through F, to represent the magnitudes, such as 10 through 15. Therefore, in hexadecimal, A is 10, B is 11, C is 12, D is 13, E is 14, F is 15. Each hexadecimal digit is capable of representing four binary digits. 1111 is the biggest binary number you can represent with 1 hexadecimal digit, which is F. The knowledge of hexadecimal number system will help you in your future digital forensics investigations because you're bound to handle it in your hex editors. Many digital forensics tools also present data to their end users in hexadecimal numbers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (4)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Using a hex editor](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=0)** - [Presenter] Your computer stores everything in binary numbers, or in other words, zeros and ones. Criminals modify these binary numbers and fabricate them to hide their data. You need hex editors to find this hidden data. Hex in the term hex editors is short for hexadecimal. As its name suggests, hex editors allow us to examine and play with data at the binary level. In hex editors, your number appears in hex numbers, which represent binary numbers more compactly. There are many hex editors available. Some of them are free and open source. Others are commercial [[Microsoft Products|products]]. There are essential hex editor features you need as a [[Digital Forensics]] investigator. These include abilities to open big files or local drives. You frequently have to open an entire drive in a hex editor. It's problematic if your hex editor crashes because it cannot handle the file size or the drive. You also need abilities to make and save changes to reveal secrets. Another essential feature is an effective means to conduct searches, especially by sectors, which are the smallest physical
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=95)** storage unit of a data drive. It's sometimes necessary to shift bits to find hidden information. Almost all the hex editors can generate hash values, which are unique strings representing files. Getting a hash value using a hex editor is simple and fast. One of the things you encounter while using a hex editor is a distinction between physical and logical drives. Physical drives refer to hard drives, USB drives, or solid state drives. These are the tangible [[Hardware]] components connected to your computer. Logical drives refer to the partitions of a physical drive, which your operating system creates to allow end users to manage their [[Data Storage]] more effectively. Because of this, a single physical drive can show up as multiple logical drives on an operating system. A hex editor denotes the location of a particular piece of information in a file or drive by showing how many multiples of spaces away a specific part of data is from the beginning of a file or a sector. This concept is called offset. How do you feel about this initial tour
>
> **[3:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=188)** of a hex editor environment? Hopefully you're ready and motivated to do some basic investigations using hex editors by now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Digital Forensics]] (1), [[Hardware]] (1), [[Data Storage]] (1)
> **Definitions:** in other words (1), short for (1), is an  (1), is a  (1), is called (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** usb (1)
> **Speakers:** - [presenter] (1)

#### [Understanding offset](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=0)** - [Instructor] Understanding the concept of offset is critical in analyzing and interpreting your data in [[Digital Forensics]]. Offset is significant, especially in the context of locating a piece of information in your dataset. Simply put, an offset is a way to refer to a location from a particular reference point like the beginning of a file, the beginning of a sector, or the beginning of an entire drive by specifying their distance in bytes. That's the whole idea behind offset. To do this, we use hex numbers to record the number of bytes between a reference point and a location of our interest. By the way, hex here is short for hexadecimal. Let's say the offset is one zero in hex, which means the current location of a piece of data is 16 bytes away from a reference point. We use a particular offset notation to make it clear that it's a hex number as shown here. The prefix zero and lowercase x denote that the offset amount is in hex. Here, zero x one zero means the offset amount is one zero in hexadecimal. The subscript 16 is there to indicate
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=95)** that we're using base 16. With this newly-gained knowledge of offset, you can locate any piece of information in a file or drive. Before you feel more comfortable, you need lot of practice. You must try this on your own using the tools of your choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (1)
> **Definitions:** is a  (1), short for (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Forensics OS distributions](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=0)** - [Instructor] We talked about forensics [[Linux]] distributions. Let's check them out. Because its source code is freely available to the public, Linux is a great platform to leverage if you want to create a custom operating system. All you have to do is pick and choose the components you want and add your flavor to the graphical user interface, or GUI. We call these custom-built OS's distributions. A website called [DistroWatch.com](https://DistroWatch.com) follows the rankings of all the known Linux OS distributions. As you can see, there's so many out there. Kali is one of the Linux OS distributions specializing in [[Digital Forensics]]. It comes with Open Source and free digital forensic suites, such as Autopsy. Let's see if we can find it. Let's go to Applications. Choose Forensics. Autopsy is there. SANS Investigative Forensic Toolkit, or SIFT, is another forensic distribution worth your attention. This is what the SIFT environment looks like. You see all the cheat sheets on the desktop. Lets open one. This should be handy
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=93)** when you cannot remember a command or its options. GParted is a Linux OS distribution dedicated to managing disc partitions. It's a GUI version of FDISK, and a favorite tool for many digital forensics practitioners. Let's take a look. All this distribution contains is the GParted tool, except for some bare essentials such as screenshot, terminal, and a web browser. Let's start GParted. I'm about to create a new partition here, D-E-V-S-D-A 1. On Linux, we represent storage devices as files. A serial advanced technology attachment, or SATA drive, shows up as D-E-V-S-D-A, as shown here. If I had a second drive, it would appear as D-E-V-S-D-B, as in baby. The numbers after the drive letters, like SDA and SDB, refer to partitions. Therefore, D-E-V-S-D-A 1 is the first partition of D-E-V-S-D-A. While D-E-V-S-D-A 2 is the second partition.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=190)** To create these partitions, all I have to do is to click on New under partition. Here you decide the size of your partition and the file system, and click on Add. The last step is to press the Apply button here. I'm always amazed at how many free resources are available at our fingertips. Do you now have a good sense of what you can take advantage of? There's a lot to learn because each tool has many features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Digital Forensics]] (2)
> **Env Vars:** gui (2), sift (2), sans (1), fdisk (1), sata (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **URLs:** [distrowatch.com](https://distrowatch.com) (1)
> **Cross-References:** we talked about (1)

#### [Challenge: Hex editor](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=0)** (kooky music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=5)** - [Instructor] Let's download the Hex editor and give it a try. Visit this free Hex editor Neo website. Download and install the software. As a prep, let's create a text file called Test. Open the file and type, "This is a test." Let's save it. Your challenge is to open this text file in Neo and inspect it.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (kooky music) (1)

#### [Solution: Hex editor](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=0)** - [Instructor] Let's go ahead and download Neo. We'll select the first option. The download is now complete. Open the file. Click Install. And click on Close. Click OK. We created our text file earlier, the test.txt test file. Let's open the test text file in Neo. Go to File, Open, Open file. Choose test. Click on Open. You see the hex number representation of characters here. The original text is displayed here. And this is what an offset value looks like.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (2), click on (2), select the (1), go to (1)
> **File Paths:** test.txt (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. File System Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding file systems](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=0)** - [Instructor] Understanding how an operating system, or OS, stores files is critical in [[Computer Forensics]] because criminals use this knowledge to hide information. File systems determine how an OS stores data on a storage device. One of the most widely used [[Windows]] file systems today is File Allocation Table, or FAT. There's a newer Windows file system called New Technology File System, or NTFS. The main difference between FAT and NTFS is the file structure [[Databases]] used to store file [[Metadata]] and to keep track of the locations of the file data FAT uses file allocation table as a file structure database while NTFS uses master file table, or MFT. Let's go over some terminology here before we go any further. In the context of file systems, metadata refers to the data about files. For example, data such as file names, timestamps, and other file attributes are metadata. File data is the actual data stored in a file. It's also important to know the difference between sectors and clusters.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=95)** Each sector often contains 512 bytes of data. Newer hard drives use 4,096 byte sectors. Clusters are the smallest logical unit of file storage. They consist of one or more sectors. Although, they use drastically different [[Hardware]] to store data, solid state drives still use the same naming convention, such as sectors, in operating systems. Knowing the distinction between logical and physical file storage units is crucial, too. Logical file storage unit is what is recognized by an operating system. Clusters are logical units. Physical file storage unit is what is recognized by a storage device. Sectors are physical units. Therefore, we know that your physical storage device deals with sectors, while your operating system handles logical storage units, namely clusters. Your operating system stores a file at the cluster level. Because the files are stored in clusters, this is what causes a wasted space problem. Let's say that you have a file who size is 2,050 bytes.
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=192)** Also assume that a cluster consists of two sectors. As you can see in this diagram, your file whose size is 2,050 bytes cannot fit in two clusters. The file requires three clusters to be stored. Next time your operating system stores a new file, it must start after the third cluster. Because of this, there is this unused space in cluster number three, as you can see in blue, and this unused wasted space is called a [[Slack]]. When it comes to efficiency, NTFS is more efficient because it uses a smaller cluster size compared to FAT, which means it reduces the amount of select spaces resulting in less wasted spaces. The latest Windows file system is Resilient File System, or ReFS. It builds on the successes of its predecessors and is an attempt to address the newly emerging challenges file systems are facing. ReFS aims at making the Windows file system more compatible, available, and scalable. However, ReFS has its own shortcomings and is not a replacement for NTFS yet.
>
> **[4:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=290)** Have you noticed that we only focused on Windows file systems in this lesson? [[Linux]] and Mac OS file systems are entirely new topics. Of course, there are also many more things to learn about Windows. Well, we just scratched the surface, are you ready for more?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Metadata]] (3), [[Computer Forensics]] (1), [[Databases]] (1), [[Hardware]] (1)
> **Env Vars:** ntfs (5), fat (4), mft (1)
> **Definitions:** refers to (1), is called (1), is an  (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the boot sequence](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=0)** - [Instructor] Understanding the concept of boot sequence as a [[Computer Forensics]] investigator is mandatory because you often have to modify it to protect the integrity of your evidence. Some of the boot sequence related [[Hardware]] include CMOS and BIOS. CMOS is a volatile memory chip containing time and date information, as well as other configuration information. CMOS stands for complementary metal-oxide semiconductor. It's a computer chip on a motherboard. BIOS stores a program that loads hardware drivers. It also loads an operating system. Before your operating system is loaded into the main memory, you have to make the memory hardware operational by loading the driver for the memory. BIOS stands for basic input/output system. The BIOS hardware is now being replaced by a new alternative, which is called unified extensible firmware interface, or UEFI. One of the things your BIOS checks when your computer starts is the boot sequence. The boot sequence information is stored in your CMOS and the boot sequence setting decides which drive
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=96)** to access to read operating system code. This is significant to computer forensics, especially because we're always trying to avoid changing the evidence drive accidentally. As soon as your operating system has access to your evidence drive, it could attempt to write to it and therefore compromise your evidence. The best practice is to boot from a drive containing a specialized operating system with pre-installed computer forensics programs. You can create a USB stick containing a forensic distribution of a [[Linux]] operating system. All you have to do is plug the USB drive into your computer, which will provide an operating system for the machine you're investigating and not touch anything on your evidence drive. This is just one example of how to leverage your boot sequence for a computer forensics investigation. There are also many other uses. By learning more about them, you'll enhance your chance of a successful investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (4), [[Hardware]] (4), [[Linux]] (1)
> **Env Vars:** bios (5), cmos (4), usb (2), uefi (1)
> **Definitions:** stands for (2), is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Understanding disk/solid-state drives](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=0)** - [Instructor] [[Data Storage]] drives provide a relatively cheap way of storing data. As a [[Computer Forensics]] specialist, you recover data from various sources, such as solid state or hard disk drives. Therefore, it's essential to understand how they work to do your job effectively. We focus on hard disk drives here because of their complexity compared to solid state drives. Let's get started by learning some terminology. There are multiple disks inside your hard disk drive. Those are called platters. On both sides of the platters, you have read write heads. That's one read write head on each side. A platter is divided into tracks and sectors for addressing purposes. Tracks are concentric circular patterns on which data is written. Sectors are evenly divided sections of a track that typically holds 512 or 4,096 bytes of data. The reason why your platter is divided into tracks and sectors is that they allow you
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=92)** to locate a piece of information. Based on the track number and the sector numbers, you'll know exactly where the data is stored, and that information is stored in a database so that when there's a need to locate the piece of information, you can always come back to the exact location. A cylinder is a collection of tracks at the same location on multiple platters. The number of cylinders, sectors, and heads decides the total capacity of a hard disk drive. If you have 1000 cylinders, 32 sectors, and 100 heads, the total capacity of the hard disk drive can be computed by multiplying all these three numbers. We assume that each sector consists of 512 bytes, so we multiply 512 at the end of the process.
>
> **[2:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=163)** As a result, in this case, you have 1.6 gigabytes of capacity based on the number of cylinders, sectors, and heads.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1), [[Computer Forensics]] (1)
> **Versions:** 1.6 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the master boot records (MBR)](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=0)** - [Instructor] Once your BIOS selects a disc drive to boot from, the master boot record or MBR on your disc is accessed. The physical drive you're booting from contains the MBR, and it keeps track of information on partitions on a storage device such as locations of your partition, the sizes of your partitions, and the bootable status of your partition. Because at least one of your partitions has to be set up as bootable so that your computer can boot. The disc you're booting from can also contain boot loader software. The boot loader is a program that displays the menu screen you see when you start your computer. And it typically gives you options for different operating systems. For example, it could display a message that allows you to select either [[Windows]] or [[Linux]] operating system. Your MBR is located in the first sector of a storage device. There are some software solutions you should be aware of regarding MBR. You can use FDISK and its graphical user interface version called, GParted to edit your MBR. The Grand Unified Boot Loader or GRUB is an example of a boot loader typically installed
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=94)** by your Linux operating system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (1)
> **Env Vars:** mbr (5), bios (1), fdisk (1), grub (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Understanding Partitioning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=0)** - [Narrator] Partitioning creates an illusion to make a single physical storage device appear as multiple logical devices. For example, you can divide a physical drive into two partitions, one for the operating system and applications, and the other for data. By separating the data from the OS and applications, if it's necessary to reinstall the OS and applications, the data is not affected. In general, partitioning allows for more efficient and organized storage device management. Another very important use of partitioning is to make it possible to install multiple OS's on a single physical drive. This way you can have various OS options during a boot process and choose to boot into a particular OS. A typical setup for this is a multiple system that allows you to boot into either [[Windows]] or [[Linux]] OS on the same computer. There are two types of partitions, primary and extended. There could be up to four primary partitions. However, you can overcome this limit by making one of the primary partitions an extended partition. The extended partition can have an unlimited number of logical partitions in it.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=93)** Although the number of partitions depends on the size of the extended partition, Windows OS can be only installed on primary partitions while Linux OS can be installed on a logical partition two.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Linux]] (2)
> **CLI Commands:** make (2)
> **Prerequisites:** install (1), setup (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Partitioning a USB drive](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=5)** - [Instructor] Let's create one primary partition and one logical partition on a USB drive. The tool you need is Gparted. The first thing to do is to find the right drive. Based on the size of the drive, I know devsdb is my USB drive. On my USB stick, one primary partition takes up the whole drive, and its format is fat32. I have to resize this partition to make room for creating my second partition. Please note that you need to create an extended partition first to house a logical partition in it.

> [!info]- Semantic Content
>
> **Env Vars:** usb (3)
> **CLI Commands:** find (1), make (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### [Solution: Partitioning a USB drive](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=0)** - [Instructor] How did it go? As I said, let's resize the existing partition to about four gigabytes. Let's create an extended partition in the new space. Let's label it other. Click on add. The final step is to create a logical partition in it. I'll format the new partition to be EXT4 so that I can install a [[Linux]] OS, and I'll label it Linux and click on add. That's it. All that's left is clicking on this check mark button to apply all operations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **UI Navigation:** click on (2)
> **Env Vars:** ext4 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Persisting Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Evidence preservation approaches](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=0)** - [Narrator] The first task at a computer crime scene is to preserve evidence. The data you collect there may be all you have in solving a criminal case or policy violation, so you should be extremely careful to capture everything possible. While in a hurry to collect evidence, it's entirely possible to make significant mistakes, like accidentally adding, deleting, or modifying data. The consequences are grave, because the court may not accept the compromised digital evidence you submit. This possibility is why we have to do our best to keep our evidence as pristine as possible, which is the primary goal of data preservation in [[Digital Forensics]]. Luckily, we have well-established and concrete ways to preserve data. The first option is using write-blockers when copying data from a source, such as a hard drive in your computer, a USB drive, or an external [[Data Storage]] device. As their name suggests, write-blockers prevent writing to an evidence drive. After deploying your favorite write-blocker, but before making a copy of a data storage medium, the best practice is to get a hash value.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=95)** This process generates a unique string, represent a specific data set like a partition. You can produce another hash value once you get a copy of the partition. If the hash values don't match, the source and its copy are not identical. Mounting and unmounting drives are also relevant to data preservation, especially in [[Linux]] and Unix operating systems. Mounting is a mechanism an operating system or OS uses to make a drive or partition visible. If the OS doesn't recognize a data source, it cannot do anything to it, which is why we always want to begin with a drive unmounted before starting our forensic work. With data preservation techniques, such as write-blockers, hashing, and unmounting, there is much less chance for mishaps. They also ensure that your evidence collection process is sound and valid.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (2), [[Digital Forensics]] (1), [[Linux]] (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Env Vars:** usb (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### [Understanding the role of write blockers](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=1)** - [Instructor] [[Computer Forensics]] rule number one is not damaging your evidence. Here, the evidence refers to your evidence drive. The risk you're constantly running into is your operating system writing to your evidence drive. One of the countermeasures to keep this from happening is using a writeblocker. There are primarily two different types of writeblockers. The first type is [[Hardware]] right blockers. This picture shows what a hardware writeblocker looks like. Usually these devices sit between an evidence drive and a forensic workstation. The second type is a software writeblocker, and sometimes it's built into a computer forensic suite like in Case or FTK. You could also accomplish the same writeblocking effect by changing the configuration of your operating system. In addition to writeblocking, there are other factors to consider to protect the viability of your evidence. Physical security or chain of custody is one of them. By taking care of it, you know who had access to the physical evidence drive when and why. You can record all this information
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=95)** in a chain of custody form. Let's say making an image of an evidence drive using a writeblocker went flawlessly. If your evidence drive still turns out to be compromised, now you know it happened through unauthorized physical access.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Computer Forensics]] (1)
> **Definitions:** refers to (1), is a  (1)
> **Env Vars:** ftk (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Using a software write blocker](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=0)** - [Instructor] Let's enable write blocking on [[Windows 10]] so that the operating system is not able to write to a USB drive. To enable write blocking, we have to run a program called R-E-G-E-D-I-T, or Registry Editor. To run this program, press the [[Windows]] key and R key together.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=30)** Type regedit, as I did here. Click on OK. Now you see the Registry Editor window. Choose HKEY_LOCAL_MACHINE, choose SYSTEM, and then choose CurrentControlSet and then select Control. Do a right-click and choose New, and then select Key. Changing a registry setting on your computer could be dangerous. If you decide to follow what I'm doing, do it at your own risk, but be very careful. Now, type StorageDevicePolicies in the box and then do a right-click on the folder. Choose New and then choose DWORD 32-bit Value. Even if you're running a 64-bit OS, make sure that you still choose 32-bit option. Now type WriteProtect. Do another right-click, choose Modify and change the value data to 1. What this does is enabling the write blocking feature. A lot of times in computer science,
>
> **[2:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=127)** 1 means true while 0 means false. In this case, the write blocking option is now set to true, and therefore, you're enabling write blocking. Now click OK. Now let's restart the machine. The machine has been rebooted. Let's see our write blocking in action. We'll create a new folder on the desktop. Let's name it Test. Double-click on the folder, click on This PC, and you see the USB Drive here. We'll try to drag and drop the new folder onto the USB drive.
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=192)** And you will get this message saying, "The disk is write-protected." Therefore, the write blocking option is now enabled and working very well. This software-based write-blocking option is the cheapest way of accomplishing write blocking. You don't need any special software. If your operating system doesn't support this type of write blocking option, you'll need to have a special software program to enable write blocking For more serious forensics tasks, you'll need [[Hardware]] write blockers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (1), [[Windows]] (1), [[Hardware]] (1)
> **UI Navigation:** right-click (3), click on (2), double-click (1), drag and drop (1)
> **Env Vars:** usb (3), hkey_local_machine (1), system (1), dword (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Using hardware write blockers](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=0)** - [Presenter] [[Hardware]] write blockers come in many different [[Forms]]. Let's look at some popular solutions. The most basic solution is to connect an evidence drive through a USB interface. Here you rely on software for write blocking. The hardware simply provides a physical interface between your evidence drive and [[Computer Forensics]] workstation. A slightly more advanced solution is a hard drive docking station. The most significant advantage here is the cleaner form factor. There are fewer cables to mess with. However, the docking station approach also requires software to block writing. Professionals deserve more sophisticated solutions. The primary goal is to block writing and avoid accidents to comply with legal standards and requirements. Let's say that you're conducting an investigation and in the middle of it, something goes wrong with your hardware write blocker, and that's the last thing you want. These professional-grade hardware write blockers are more expensive, but provide ironclad operations. There are some well-known manufacturers of hardware write blockers such as WiebeTech by CRU. This company is a manufacturer of many other types
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=96)** of computer forensics equipment too. One of the main features of WiebeTech write blockers is more interface options. This particular product featured here provides USB 3.2 Type-C. It also comes with more convenient features like switches and digital displays. The most advanced hardware write blocking option is hard drive duplicators. They're fast and primarily plug and play. All you have to do is plug in your hard drive and then the duplicator will take care of the [[Representational State Transfer (REST)|rest]]. Therefore, it provides an automated solution. When buying a hardware write blocker, base your purchasing decision on the purpose and the nature of your investigation. You rarely need the most expensive equipment out there. Here the key is that you're making an informed decision.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (7), [[Computer Forensics]] (2), [[Forms]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** usb (2), cru (1)
> **Definitions:** is a  (2)
> **Versions:** 3.2 (1)
> **Analogies:** such as (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [presenter] (1)

#### [Understanding hashing](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=0)** - [Instructor] Hashing plays a vital role in [[Computer Forensics]]. It ensures that a data copy you make remains identical to its source. Hashing refers to the process of transforming an input, which is usually a file into an output, which is a unique string associated with that file. There are some significant characteristics you should know about hashing. First, any slight changes you make in a file will get amplified in considerable changes in its hash value. This behavior makes it very easy to detect changes made to a file by accident or on purpose. Hashing ensures [[Data Integrity]], meaning no intended changes are made in the data. In the context of computer forensics, this means the evidence drive remains the same during your investigation. That is, a forensic image or copy of the evidence drive stays the same. Therefore, hashing is an essential part of your computer forensics investigation. Any non-trivial computer forensics tools should be kept to produce hash values.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (4), [[Data Integrity]] (1)
> **Definitions:** refers to (1), is a  (1), is an  (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Hashing algorithms](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=0)** - [Instructor] There are various implementations of hash [[Algorithms]]. One of the well-known hash algorithms is MD5, which has been widely used in [[Digital Forensics]]. However, it's proven to be vulnerable. Another algorithm called the secure hash algorithm, or SHA, is a more secure version of MD5. There are many different variations of SHA. Collision is a non vulnerability in hash algorithms. It occurs when two different files produce the same hash value when put through the same algorithm. As you can see in this diagram, file one and file two are different, but when they go through the same hash algorithm, sometimes it's possible to end up with the same hash value. This problem rarely happens, but theoretically speaking, it could occur. Collisions have been found in both MD5 and SHA. A way to make a hash algorithm less vulnerable is to increase the size of its output. The bigger the hash value, the less the possibility of a collision. That is, a larger hash value means more secure hashing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3), [[Digital Forensics]] (1)
> **Env Vars:** md5 (3), sha (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Case Study: Hashing in FTK Imager](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=0)** - [Instructor] Many of the [[Computer Forensics]] tools available today come equipped with built-in hash functions. The primary purpose of these built-in hash features is the verification and validation of your data you're working on in your computer forensics investigation. For example, there's a tool called FTK Imager and it comes with both MD5 and SHA hash [[Algorithms]]. An alternative to using these built-in hash options is manually computing hash values. As we saw in another lesson, you can use a [[Linux]] hash algorithm implementation such as MD5 Sum. In this lesson, let's try the hash features of the FTK Imager. First choose file, click create disk image. We'll go for the default choice, physical drive, and click on next. From this list, choose your drive. I'm choosing the smallest drive just to make it quick. Click on finish. Now it's asking for image destinations. Let's click on add. Now we need to select the destination image type. We'll be using the raw image type, which is DD. Click on next.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=95)** I chose DD because it's a universal imaging format used by many other tools. Here I'll use my case number as 001. Evidence number also 001. Unique description is going to be test. Examiner 001, and I'll type test for the notes field. Click on next. Now I'll choose the image destination folder. Click on browse, I'm going to choose desktop. This way we can see the image being created on our desktop. The image file name I'll be using is my drive, my drive. Here you can break your image file into multiple files. It's called fragmentation in this case. I don't want to do this. That's why I type zero here. Click on finish, not bad. There's an option of verifying images after they're created. By selecting this option at the end of the imaging process, you'll have the hash values of the image files. Make sure you choose that option and click on start. As you can see, once the imaging process is over,
>
> **[3:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=194)** the FTK Imager tool will display the MD5 hash value of the image and also the SHA-1 hash value of the image. This demonstrates the built-in hash functions of the FTK Imager tool. Note that the FTK Imager tool computed the hash values before imaging, and then it gets the hash values again after imaging is done, and it shows that the hash values match.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (2), [[Algorithms]] (1), [[Linux]] (1)
> **Env Vars:** ftk (5), md5 (3), sha (2)
> **UI Navigation:** click on (8), select the (1)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Understanding mounting](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=0)** - [Instructor] Mounting is a concept related to partitioning. We already learned about partitioning in another lesson. Mounting is the process of making a partition visible to an operating system, or OS, and eventually to an end user, especially on a [[Linux]] operating system. Unmounting is the opposite. Connecting the drive and making it available to an OS can be dangerous because your OS can write to it. Another concept related to mounting is that of a mount point. It's simply a directory where a partition is made visible after mounting is done. Let's do a quick demo of mounting here. I already have my USB drive plugged into my computer. As soon as you plug in your USB drive, you'll see an icon like this. What this means is that your OS picked up your USB drive. This is probably the last thing you want in your [[Computer Forensics]] workstation because your OS could have written to your USB drive, which could be your evidence drive. The mounting happened because the operating system you're using is not a forensic copy. In a forensic copy,
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=93)** the OS won't automatically mount a USB drive like this. Therefore, we'll start by unmounting our USB drive. To unmount a USB drive, type umount, and then the name of the partition. But in this case, we don't know what the name of the partition is for the USB drive. To know the partition name, we need another command, which is fdisk. Type sudo fdisk -l. You cannot run your fdisk command directly because it requires administrator privilege to run, so that's why I type sudo in front. This is equivalent to running a program as an administrator on a [[Windows]] operating system. Now I'm ready to press enter. Press enter. It's asking for the password and press enter. The default password is kali. That's what I typed. Here we see all the storage devices connected to our computer and partitions on them. The storage device we're interested in is our USB drive. In this case, the USB drive
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=186)** and its partition are showing up as /dev/sdb1. And this is exactly the name to use to unmount the USB drive. I know the USB drive is SDB because SDA is the first disk drive letter referring to a hard drive, and I also know there's only one hard drive attached to my computer. The next drive letter is supposed to be SDB, which is my USB drive. Now we're ready to unmount the USB drive. Type sudo umount /dev/sdb1.
>
> **[3:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=237)** Please note that it's not unmount, but umount. And then /dev/sdb1 is the name of the partition. Pay attention to the naming convention here. /dev/sdb refers to the entire physical drive and /dev/sdb1 refers to a partition on that drive. When we're referring to the individual partitions on the same physical drive, we are using a numbering system, such as one, two, and three as we could have more than one partition on a physical drive. In this case, we are dealing with one partition, which is why we have number one next to the drive name stb. Now press enter, and as soon as you do that, you can see that the USB drive icon color is changing. It's grayed out and it also says... And it also says not mounted in between the parentheses. What this means is that now the drive is invisible to the operating system. We just learned how to unmount the partition,
>
> **[5:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=330)** and this is very significant in your computer forensics investigation because a lot of times in your investigations, you want your storage device to stay unmounted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (2), [[Linux]] (1), [[Windows]] (1)
> **Env Vars:** usb (15), sdb (2), sda (1)
> **CLI Commands:** sudo (3)
> **Definitions:** refers to (2), is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Mounting manually](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=0)** - [Instructor] A storage device connected to your computer is not mounted by default in a forensic copy of your [[Linux]] OS. When you're not dealing with an evidence drive and want to mount the drive, here is how you do it. First, identify the drive and the partition you want to mount. From our lesson earlier, we know the partition is /dev/sdb1. To mount it, first of all, we need to create a mount point. A mount point is a directory where you want to see the content of a drive. Let's create a new directory by typing mkdir and then the name of your mount point.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=54)** And we'll call it usb_mounted. Press Enter. Type ls to see what's in the current directory. Press Enter. As you can see, now we have a new directory created, called usb_mounted. Let's see what's inside the newly created directory. Type cd and the name of the mount point, which is ./usb_mounted/. Press Enter. Type ls and press Enter. There is nothing in the mount point directory we just created. Let's go back to the parent directory. Type cd .. cd here means change directory. The two dots signify the parent directory, so change your directory to the parent directory. We're going back to where we started. Press Enter. Type ls again. We're back to the directory that has another directory called usb_mounted. Now we're ready to mount our partition. The command is sudo mount file format type option,
>
> **[2:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=154)** which is -t vfat, and then the name of the partition, which is /dev/sdb1 and the name of the mount point.
>
> **[2:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=171)** And the directory was ./usb_mounted/. The dot in front of the forward-slash symbol means the current directory. Now press Enter. Password is kali, K-A-L-I. Press Enter. If you don't get any error messages, the partition has been successfully mounted. Let's see if it works. To check if the partition has been mounted successfully, we have to go to the mount point. Let's do change directory to the mount point. Type cd ./usb_mounted/.
>
> **[3:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=224)** Press Enter. Type ls. Now you see the files and the folders on the partition because the partition has been successfully mounted. As a [[Computer Forensics]] investigator, it's nice to have a way to control when a drive is mounted and unmounted.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Computer Forensics]] (1)
> **CLI Commands:** ls (4), cd (4), mkdir (1), sudo (1)
> **Code Identifiers:** usb_mounted (6)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Hashing in Kali](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=0)** (cheerful electronic music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=5)** - [Instructor] Let's try to use a hash algorithm to conduct an interesting experiment. We'll create a file first. Type touch test.txt. The touch command creates a new empty file in [[Linux]]. Press Enter. Let's see if the file was created. Type ls. It is there. Let me edit it using a Linux editor called Vim. Type vim test.txt. Press Enter. Press I to insert a text. Type, "This is a test!" Press Escape. Type :wq. So this writes the file and then quits the session. Press Enter. Let's generate a hash value. Type sha256sum test.txt.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=81)** Press Enter. That's your hash value. Here is your challenge. Find out if modifying the file name also changes its hash value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **File Paths:** test.txt (3)
> **CLI Commands:** ls (1), find (1)
> **Tools:** vim (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful electronic music) (1)

#### [Solution: Hashing in Kali](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=0)** - [Instructor] To change the file name, type move, mv space test.txt space challenge.txt,
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=15)** mv space test.txt space challenge.txt, press Enter.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=28)** Let's see if the file name got changed. Type ls, press Enter. There's no test.txt, but challenge.txt is the new file. Let's generate a hash value. Type sha256sum space challenge.txt
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=54)** Press Enter. Is the hash value the same as the one we just generated earlier? It looks the same and they are the same. Now we know changing the file name doesn't change the hash value.

> [!info]- Semantic Content
>
> **File Paths:** challenge.txt (4), test.txt (3)
> **CLI Commands:** mv (2), ls (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Aquiring Data

[↑ Back to Table of Contents](#table-of-contents)

#### [Data acquisition approaches](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=0)** - [Narrator] After taking essential precautions to preserve your evidence, you're finally ready to acquire your data. There are many ways of acquiring data in [[Computer Forensics]]. Static acquisition is one of the most basic and common [[Data Acquisition]] methods. Static acquisition retrieves data from non-volatile sources, such as a hard drive or USB drive. In a non-volatile source, data remains on the storage device after turning the power off. Live acquisition is becoming more necessary these days because of encryption. Live acquisition acquires data from a volatile source, such as main memory, also known as random access memory, or RAM. In a volatile source, data goes away from the storage device after it's turned off. In addition to static and live acquisition types, there is another way of acquisition, which is remote acquisition. Remote acquisition is done through a network connection and involves a client-server architecture. You often install a client on a machine from which you want to retrieve the data. The current trend is that live and remote acquisition practices are becoming more prevalent due to the encryption challenges I mentioned earlier. Static acquisition is more difficult, especially these days, because a data drive gets encrypted
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=93)** when a computing device is inactive. This means, by the time you're trying to do static acquisition, all you can get is an encrypted version of the data you're seeking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (1), [[Data Acquisition]] (1)
> **Env Vars:** usb (1), ram (1)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** such as (2)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Static acquisition with open-source tools](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=0)** - [Instructor] There are plenty of open-source utilities out there you can use to get an image of a drive. We'll use an open-source tool called dd to get an image of a USB drive. Our goal here is to get an image of an entire physical drive rather than a partition on the physical drive. Therefore, we'll be using /dev/sdb instead of /dev/sdb1
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=31)** to refer to our USB drive. We've already looked at finding out how a USB drive is recognized in a file system on [[Linux]]. The command to use for our imaging task is very simple. Type sudo, space, dd, space, if. IF here stands for input file. Equal sign, forward slash, dev, forward slash, sdb, instead of sdb1, which is a partition. Next, type a space, and then of, equals sign. OF here stands for output file. After the equal sign, type the target file name of the image. Let's use dot, forward slash, usb, underscore, image.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=96)** The dot here stands for the current directory. And then the extension dot dd. Press enter. Because you're using sudo, it's asking for the password. I type the password, and I'm pressing enter. The imaging process just started, and until it's done, your command prompt won't return. One way of checking whether the file has been actually created is to open another terminal window to see the name of the file showing up in your directory. Go to file, choose new window. Type ls and then press enter. As you can see, the file has been created. This file will be getting bigger and bigger as the imaging process is being done. Now, I'll type ls, space, dash l to list some more details of the file. Press enter. This is the file size. Let's try ls dash l again. Press enter. As you can see, compared to the previous file size, it's getting bigger. This means that the imaging process
>
> **[3:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=189)** is going on successfully. dd is one of the most basic tools out there you can use to get your simple imaging task done, but there are also more advanced tools for the imaging task you can use to make your job as a [[Computer Forensics]] investigator a little easier. One of these tools is dcfldd, a forensic version of dd.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Computer Forensics]] (1)
> **CLI Commands:** ls (3), sudo (2), make (1)
> **Definitions:** stands for (3), is a  (1), means that (1)
> **Env Vars:** usb (3)
> **Tools:** command prompt (1), terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Static acquisition case study with dd](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=0)** - [Presenter] There's also a way to split your image file into multiple fragments. Fragmentation is sometimes necessary because you have to put the files on media with very limited capacities. To do this, we can use dd together with another [[Linux]] utility. Type sudo space dd space input file equals sign forward slash dev forward slash sdb. which is the physical USB drive connected to my computer, and type space. Instead of typing OF, or output file and then equals sign target file name here, we'll use something called a filter. A filter in Linux takes the output of a previous command and passes that output as an input to the next command. Whatever the dd input file command produces, its output will go to the following command as an input. In this case, the output sent as an input will be the image file, but we'll split it into multiple files. The command we need for this is split. The split file size of my choice is 650 megabytes. That's why we type pipe here, space split
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=97)** space dash b space 650m space dash space usbimage dot. Whatever comes after the dot will serve as an extension so that when the files are created, they'll begin with the file name usbimage dot and extension. The file extension will be different in a sequential order to reflect the fact that a single image file is now split into multiple files. Press enter. The imaging process has begun. While it's getting done, we can see the progress in the second window. Type ls, press enter. So far there have been four files created: usbimage.aa, usbimage.ab, usbimage.ac, usbimage.ad.
>
> **[2:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=164)** There'll be some more files coming after this. By learning about these additional options for imaging, you have more flexibility in dealing with whatever situation is thrown at you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2)
> **CLI Commands:** sudo (1), ls (1)
> **Env Vars:** usb (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [presenter] (1)

#### [Static acquisition case study with dcfldd](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=3)** - [Instructor] The imaging process is finally over. Let's check the usbimage.log file. To see the content of this file, We'll be using the more command. Type more and the name of the log file. usb image.log. Please note that there was a typo. So it's i-a-m-g-e.l-o-g instead of i-m-a-g-e.l-o-g. But it still works. Press Enter. As you can see, the md5 hash value of your image is now showing. Let's also check whether the image file has been created. Type ls, press Enter, and you can see the usbimage.dd file with the correct spelling. As you can tell, dcfldd has more [[Computer Forensics]] features compared to dd. Plus, it's easier to use. Although the dcfldd software is free,
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=99)** you may still have to install it to your favorite [[Linux]] distribution. If you want to learn more about dcfldd, please check out this website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Forensics]] (1), [[Linux]] (1)
> **CLI Commands:** ls (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Live acquisition case study with a commercial tool](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=0)** - [Instructor] FTK Imager can serve as a live acquisition tool too. Here is how you do it. Go to file, choose capture memory. You have to specify what is your destination path. Next, click on browse. Let's make our destination folder as our desktop. Click OK, and then click on capture memory. The memory capturing process has been finished successfully. Click on close. You can see the memory dump file named memdump.mem.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1)
> **Env Vars:** ftk (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Live acquisition with a memory dump file](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980&t=5)** - [Instructor] To analyze the result of your live acquisition, you still need a separate software program. The software tool can be as simple as a hex editor. In this challenge, open the memory dump file in a hex editor and try to see what's inside. Do a search to find sensitive information.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)

#### [Solution: Live acquisition with a memory dump file](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=0)** - [Instructor] Let's open Neo. Go to file, open, open file. Choose mamdump.mam. Click open. Let's do a search. Click on the find icon. Make sure string is chosen and type password. Click find. As you can see, you can find every occurrence of the [[Microsoft Word|word]] password in your entire memory dump file like this, and you can keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Putting It All Together: Analyzing Data and Generating Reports

[↑ Back to Table of Contents](#table-of-contents)

#### [Forensic data analysis](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=0)** - [Instructor] [[Digital Forensics]] investigators spend most of their time analyzing their data. Data analysis is the culmination of a forensics investigation process. All your work for preparing, preserving, and acquiring data is essentially for making the analysis step possible. Analyzing data involves lots of searching and indexing is a technique that helps accelerate the search process. All major digital forensics [[Microsoft Products|products]] use indexing to improve their speed. Autopsy is an open source digital suite. It comes with powerful search and report generation features. It's nice that you can download Autopsy for free and try it for learning purposes. Commercial forensic software suites are pretty expensive and even cost prohibitive for individuals. If you work for a small organization with limited budget or have personal needs to conduct digital forensics investigations, Autopsy is a perfect tool for that. We have a couple of dedicated lessons to check out Autopsy more. It's also nice to explore specialized forensics utilities like Free Hex Editor Neo. You can download the latest version here and play with it.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=95)** Neo provides some handy features like bit shifting and file type information extraction. Criminals are always trying to mislead you to protect their secrets, but a tool like Neo can help you see through all their deceptions. In addition to changing file extensions and shifting bids in a file, crooks and spies also hide information in picture files. A steganography tool like OpenStego is what they use to do this. We have a lesson for you too and you'll get a decent exposure. There are many more data analysis techniques and mechanisms out there. What we covered in this course is only the tip of the iceberg, Although not exhaustive, you'll still have a good feel for what analysis means in digital forensics by the time you're done with all the lessons in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (4), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** we covered (1)
> **Exercise Files:** download the (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Indexing](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=0)** - [Instructor] Indexing refers to the process of creating a catalog by going through an evidence drive and recording the location of each data item. To give you an analogy, creating an index for a book is similar to creating an index for an evidence drive. Once you create an index in your book, you can quickly go to a page of your interest based on a keyword. The same applies to your evidence drive. Once you have your indexing done, the speed of searching gets faster because there's now a direct mapping between your searched keyword and the location containing the keyword in your evidence drive. All you have to do is to go to a location according to the index without really having to do the same search over and over again every time you look for a keyword. Initially, indexing takes a long time because it has to go through every single data item in your evidence drive, and then somehow record the location of each data item according to its keyword. Therefore, typically when you try to acquire an image out of an evidence drive, you always have an option to do your indexing first. Indexing is sometimes referred to as preprocessing. When you see the [[Microsoft Word|word]] preprocessing, you should associate that word with indexing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2)
> **UI Navigation:** go to (2)
> **Definitions:** refers to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Searching](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=0)** - [Instructor] Having the ability to search is essential in [[Digital Forensics]]. Investigators always need to do their keyword searches tied to their investigations. To demonstrate how a search is conducted in a computer forensic suite, let's use Autopsy. Autopsy is one of the most popular forensic software suites out there, and I highly recommend it. We'll start by creating a new case. Click on new case. Type your case name here. We'll use 001. Choose your base directory. Desktop is fine. Click on next. And use case number 001. You don't have to fill out the [[Representational State Transfer (REST)|rest]] of the information. Click on finish. Now, the next step involves loading an image. I already created an image of an evidence drive. We'll be using that image for this exercise. Click on next. Click on disc image or VM file. Click on next. Click on browse. Choose usbimage.001. Click on open. By the way, you'll find this image file in your exercise files folder. Click on next.
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=94)** Click next again. Click on finish. Your image is now successfully loaded. Go ahead and select data sources. Click on the plus sign. Click on the plus sign again. Click on the plus sign next to uspimage.001, Select volume 2. And you can see the files inside that volume. One of the things you notice here is files with X marks. What this means is that the files have been deleted. However, your computer forensic suite is able to detect these deleted files and you can even recover them by right clicking on the file. For example, dreamCar.jpg, choose extract files. We'll now try to export the file to our desktop.
>
> **[2:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=159)** Click on open and click on save. You can see the file just created on my desktop. Let's see if I can open it. What a handsome car. Let's go ahead and close it. Next, we'll conduct a search, which is our primary mission here. We'll try to find all the files that contain a name, in this case, Bill. So click on keyword search. Type Bill. Click on search. Out of all the files we have on the disc image, only one file contains the name Bill. This is a handy feature not only for conducting your [[Computer Forensics]] investigation, but also for anything you do daily. You always need to look for a file according to a keyword. Of course, any computer software suite should have a feature like this, but they're not all created equally. How well their search feature works could be an excellent way to measure the quality of a computer forensic suite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Digital Forensics]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Computer Forensics]] (1)
> **UI Navigation:** click on (17)
> **CLI Commands:** find (2)
> **Code Identifiers:** dreamcar (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generating a Report](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=0)** - [Instructor] Having the ability to auto generate a report is a very useful feature. Investigators usually auto generate their reports and use them as a starting point. We'll use Autopsy to demonstrate how you can auto generate a [[Digital Forensics]] report. We already loaded our image here. First, let's mark a piece of evidence so that it appears in my report. Let's pick a file here. I'm going to choose Dreamcar.jpg again. Do a right click and then choose add file tag. Next, select tag and comment. I'm going to leave a comment here as comment. Click on okay. And now you can see a new icon next to the file. Now the evidence is marked and it's going to show up in your report for sure. Let's generate our report. Go to tools. Choose generate report. The default choice is fine, which is [[HTML]] report. Click on next. Click on next,
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=94)** and click on finish. And click on close. To see your report, go to reports, click on HTML report. Double click it. Now, next to the star icon here, you can see tagged files. Click on the link and you can see the actual picture file.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=124)** Let's go back. The evidence you marked is now showing up with your comments, which is comment. Any mainstream computer forensic software suite should come with a feature to auto generate a report like this. If you don't see it, you should seriously doubt the quality of the software.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (2), [[Digital Forensics]] (1)
> **UI Navigation:** click on (7), go to (2)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Case Study: Hex editor analysis of a file with a wrong extension](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=1)** - [Instructor] Criminals often simply change the extensions of files to mislead [[Computer Forensics]] investigators. With the wrong file extension, it's difficult to know exactly what the original file type was. To find out the true file type, you could use a hex editor. We have a mystery file here called secret.jpg, and now I'll try to open it with a built-in [[Windows]] Photos app. The Windows Photos app is complaining because this is not a picture file and that's our clue that something's not right with a file extension. Let's close the Photos app and then open Neo. Click on file, open, open file, select secret.jpg. Click open. What you see here is all in hex numbers. These beginning bits of the file are called the file header signature. The file header signature of this file is 50 4b 03 04 14 00 06 00,
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=96)** and this is our clue. It also shows xml here, and we know somehow it's related to xml, but we don't know exactly what file type this is. For later use, let's copy the file header signature. Now let's close Neo. There are tables of file header signatures and they're called magic tables. You can find them on the internet. Based on the file header signature, one of the possibilities is [[Microsoft Office]] [[Microsoft Word|Word]] file. Let's try to change the file extension of the image file and see what happens. Let's try docx. docx presenter. It's asking whether I really want to do this, and the answer is yes. Let's open the file, and the file opens successfully, which means that this is the right file type and it says "This is a test!"

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Computer Forensics]] (1), [[Microsoft Office]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), open the (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Hex editor analysis of a bit-shifted file](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=0)** - [Instructor] Criminals shift bits in a file to hide a secret. To reveal the secret, you need a hex editor to shift the bits back to their original positions. Here we have a mystery file called secret.txt. Let me try to open this file using Notepad. I don't know what happened to the original text, but my strong suspicion is that the bits in the file might have been shifted. To know whether this is true or not, I'm going to open this file in Hex Workshop, a commercial hex editor. Compared to Neo, Hex Workshop provides more features in its trial version. Go to file, click open, choose secret.txt, click open. You'll find the secret.txt file in your exercise files folder. We'll try to shift the bits to your left first. Go to tools, operations, shift left. Choose eight bit unsigned byte. Click okay.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=93)** It's still scrambled. Now let's try to shift the bits to your right. Let's close the file. Don't save the changes. Let's open the file again. File, open, Secret.txt. Click open. Now I'll try to shift the bits to my right. Go to tools, operations, shift right, choose eight bit unsigned byte. Click okay. As you can see, the secret message is now revealed. The admin password is password. Shifting bits is one of the most basic techniques you can use to hide your secret. Maybe you can use this technique to keep your secret diary.

> [!info]- Semantic Content
>
> **File Paths:** secret.txt (4)
> **UI Navigation:** go to (3), open the (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Case Study: Steganography](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=0)** - [Presenter] Steganography is a way to hide information inside the picture file. Just like any other files, we store pictures in zeros and ones on our computer. The smallest unit of an image file is a pixel, and a picture file stores its pixel information and binary numbers in a [[Representational State Transfer (REST)|REST]] or file format. Assume that we use 24 bits to store a pixel. If it changed the last bit of each pixel data, it won't change the pixel too much in terms of its color. This is why we can change a picture by embedding our own information into the pixel data and still make it look indistinguishable from its original version. If we have 10,000 pixels in a picture, we have 10,000 opportunities to change their binary representations slightly. OpenStego is a free steganography tool. You can download it from this website. Let's give it a try. The user interface is relatively simple. The first field asks for a message to hide. I already created the secret message called message dot txt. You'll find the message dot txt file
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=97)** in your exercise file folder. Let's open it, and this is what it looks like. And let's go ahead and load it. The cover file refers to an image where my secret message will be embedded. It's this image file, olives dot png, and let's load it too.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=130)** I'll put stego file as a new picture file to be created out of my cover file and will contain the secret message file information. I'll just specify the path and the file name here. We'll call the new file stego dot png. Click open. We have an option to encrypt the secret message. We'll use the default encryption algorithm, which is AES. We'll also provide the password. That's it. Click on hide data, and you see the stego file I just created. Let's open the stego dot png file side by side to the olives dot png file. Can you tell the difference? I can't. It'll be extremely difficult to find out which image is the one containing secrets, unless you created it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** picture (5), just like (1)
> **Definitions:** is a  (3), refers to (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** rest (1), aes (1)
> **UI Navigation:** click on (1), open the (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [presenter] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=0)** - Thank you so much for watching this course. I hope you really enjoyed it. If you're interested in taking your skills a step further, I suggest you check out my other courses. Protecting Your Network with Open Source Software is an excellent introduction to [[Network Security]], a newly emerging field of [[Digital Forensics]]. Another course I recommend is my [[Network Forensics]] course that builds on my network security course. When you're ready to advance your knowledge even more, I recommend my [[Operating System Forensics]] course. Again, I'm Jung Woo. Thank you so much for joining me, I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (2), [[Digital Forensics]] (1), [[Network Forensics]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - thank (1)


## Instructor

- [[Jungwoo Ryoo]]

## Path Context

### In [[Become an IT Security Specialist]]
← [[Cybersecurity with Cloud Computing]] | **7 of 12** | [[Vulnerability Management in Cybersecurity- The Basics]] →

### In [[Cybersecurity Fundamentals]]
← [[Cybersecurity with Cloud Computing]] | **12 of 12**

### In [[Explore a Career in Computer Forensics]]
← [[The Cybersecurity Threat Landscape]] | **2 of 9** | [[Operating System Forensics]] →

## Appears In

- [[Become an IT Security Specialist]]
- [[Cybersecurity Fundamentals]]
- [[Explore a Career in Computer Forensics]]

---

[↑ Back to top](#)