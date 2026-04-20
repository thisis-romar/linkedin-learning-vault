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
  - Become an IT Security Specialist
  - Cybersecurity Fundamentals
  - Explore a Career in Computer Forensics
path_count: 3
tags:
  - course
  - topic/security
  - topic/cloud-computing
status: not-started
created: 2026-04-20
---

![Cybersecurity Foundations: Computer Forensics](https://media.licdn.com/dms/image/v2/D560DAQG5VnozORNgkQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702587022790?e=2147483647&amp;v=beta&amp;t=n1BwL6VnZRkDQQVPhQWmfeCmD34_kd-Z3LR29eC0mKk)

# Cybersecurity Foundations: Computer Forensics

> Computer forensics is used to find legal evidence in computers, mobile devices, or data storage units. This course covers all the technical essentials for up-and-coming digital forensics professionals. Instructor Jungwoo Ryoo reviews the goals of computer forensics, the types of investigations it's used for, a forensic investigator's typical tool set, and the legal implications of this type of wor

> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics) | 2h 42m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jungwoo Ryoo]]

## Table of Contents

### Introduction

#### Computer forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=0)** - Cyber crime is growing.
>
> **[0:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=2)** It's all over the news.
>
> **[0:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=3)** Businesses are shut down due to ransomware attacks, and individuals are suffering from identity thefts.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=10)** The demand is high for computer forensics professionals who are at the forefront of bringing cyber criminals to justice.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=18)** Hello, I'm Jungwoo Ryoo.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=20)** As a college professor, I've been teaching computer forensics many years.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=24)** I'm thrilled you've joined me in this course where you'll learn major computer forensics topics, such as investigation prep, write blocking and data acquisition.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=36)** You'll also have an opportunity to explore evidence analysis and reporting through hands-on demos in Windows and Linux.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/computer-forensics?u=76281980&t=44)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - cyber (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=0)** - Let's talk about what you should know before taking this course.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=4)** My goal is to help you quickly learn essential digital forensics concepts and develop an overall understanding of the field.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=12)** So this course has no real prerequisites.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=16)** We'll be using both Windows and Linux operating systems, but don't worry if you don't have a Linux computer available, you can still sit back and watch the demos.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=27)** However, do keep in mind that many computer forensics investigations require using Linux, so it'll be good to get familiar with the OS.
>
> **[0:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=38)** The software tools used in this course are free or available as trial versions.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/what-you-should-know?u=76281980&t=43)** I'll share details about how to download each of them later in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1)
> **Cross-References:** later in (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)


### 1. Understanding Computer Forensics

#### Definition and goals of computer forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=0)** - [Instructor] The ultimate goal of computer forensics is to produce evidence for legal cases.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=7)** You need to keep four objectives in mind to achieve this goal.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=12)** The first objective is to prepare for an investigation by ensuring the integrity of the evidence.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=20)** An example is write protecting your evidence media to avoid accidentally writing over it.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=29)** The second objective is to acquire data, which includes duplicating your evidence to only work on the copy instead of the original media.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=40)** Once your data is acquired, the next step is to analyze it.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=45)** Conducting a search based on a keyword to find an incriminating piece of evidence is an excellent example of analyzing data.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=55)** Finally, the last step is to identify evidence and present it as a written report.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=62)** These reports can be autogenerated by your computer forensics tool, but you often have to edit them.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/definition-and-goals-of-computer-forensics?u=76281980&t=70)** When we accomplish these objectives of computer forensics, it's safe to allow investigators to submit their evidence.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### History
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=0)** - [Presenter] Computer forensics originated from practical needs in the law enforcement community.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=7)** Criminals started using computers to commit crimes and law enforcement officers in the trenches had to deal with the new phenomenon at the time.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=19)** One of the first official recognitions of computer forensics in the US as a separate field was the formation of a computer analysis response team, or CART by the Federal Bureau of Investigation, or FBI in 1984.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=39)** As the field matured, more players appeared.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=44)** The Federal Law Enforcement Training Centers, or FLETC started offering training in collecting digital data.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=56)** In 2005, the International Organization for Standardization, or ISO published a new standard called ISO 17025, general requirements for the competence of testing and calibration laboratories.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=78)** Since crimes have no borders, countries also had to work together to reconcile the differences in their laws to prosecute criminals successfully.
>
> **[1:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=90)** Europeans led this effort and played a significant role in establishing the Treaty of Convention on Cyber Crime in 2004, and the US signed the treaty.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=106)** As an astute viewer, you may have noticed the change of terms used here.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=111)** Cyber is a shorthand for cyberspace and refers to a virtual environment where information exchanges occur among computing devices.
>
> **[2:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=123)** The word cybercrime emphasizes that computer crimes are no longer confined to a single, isolated machine, but touch on a collection of devices connected through a communications network like the internet.
>
> **[2:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=138)** The word cybercrime compliments the more conventional label, "computer crime."
>
> **[2:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=145)** Therefore, we're increasingly seeing both computer and cyber used together in media, as in computer and cyber forensics.
>
> **[2:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=156)** You can also use digital forensics to cover both computer and cyber forensics because digital means anything using zeros and ones for representing data, which computers and cyberspaces do.
>
> **[2:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=173)** Since its humble beginning in the 1970s, computer forensics has seen explosive growth and continues to expand its scope.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=182)** Newly emerging technologies such as the Internet of Things, or IoT are constantly pushing the limits of the field.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/history?u=76281980&t=191)** I'm sure some future successor will soon replace IoT, which will help keep expanding the field of digital forensics.

> [!info]- Semantic Content
>
> **Env Vars:** iso (2), cart (1), fbi (1), fletc (1)
> **Definitions:** is a  (1), refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [presenter] (1)

#### Types of investigations
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=0)** - [Instructor] There are two primary types of computer forensics investigations.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=5)** One is public and the other is private.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=10)** Public investigations occur in the context of criminal cases.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=15)** They're usually conducted by law enforcement officers and driven by the statutes in the criminal law.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=24)** Examples of public investigations include drug crimes, sexual exploitation, and theft.
>
> **[0:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=34)** Private investigations occur in the context of civil cases.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=39)** Organizations try to avoid any form of litigation due to the enormous associated cost.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=47)** As a result, many private investigations turn out to be incident responses.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=54)** Private investigations are typically conducted by corporations or similar types of organizations.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=62)** The statutes of civil law or organizational policies drive private investigations.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=69)** One of the most important things to consider in private investigations is business continuity.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=77)** If your investigation hurts your business' bottom line, it's probably not worth the effort.
>
> **[1:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=85)** Therefore, your priority has to be stopping the violations instead of litigating.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=92)** Examples of private investigations include sabotage, embezzlement, and industrial espionage.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=102)** The boundary between public and private investigations is often unclear.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=108)** For example, when you're investigating an employee for a potential violation of company policies and coming across illegal pornography, the investigation quickly turns into a public case.
>
> **[2:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/types-of-investigations?u=76281980&t=123)** Because of this reason, as a computer forensics investigator, you should be able to handle both public and private cases.

> [!info]- Semantic Content
>
> **Code Keywords:** private (9), public (6), case. (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Tools
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=0)** - [Instructor] There are many tools of the trade in computer forensics.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=4)** Some of these tools are software-based, others are hardware-based.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=12)** Many computer forensics software tools exist in the form of a software suite.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=18)** They usually have a comprehensive set of features that cover an investigation from the beginning to its completion.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=27)** Some of these features include the ability to acquire and process data, conduct searches, and generate reports.
>
> **[0:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=38)** EnCase Forensic by OpenText is one such software suite.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=43)** Here is their website in case you'd like to check it out.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=48)** Depending on the nature of your case, you may need specialized software tools other than a computer forensic software suite because sometimes they don't provide the particular feature you're looking for.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=62)** For example, if you had to retrieve a hidden text in an image file, a general purpose computer forensics tool wouldn't help you.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=71)** For that, you need specialized software called a steganography tool similar to the one you're seeing here.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=80)** There are also special hardware needs.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=84)** Forensic software is demanding in terms of processing power, memory size, and storage space.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=92)** The more of these resources you have, the better.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=96)** Forensic workstations also feature extra base and ports to help with future expansions.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=104)** In addition to the computer forensics workstation, you may also need special equipment such as a write-blocker, which prevents an operating system from writing over on evidence drive.
>
> **[1:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=116)** Software write-blockers are also available, but hardware write-blockers are often preferred because of their simple and surefire nature.
>
> **[2:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=126)** Although it's not very special, a large capacity storage device is another tool you need in your computer forensics arsenal.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=135)** These days, evidence drives tend to be big size devices, and they are getting bigger as we speak.
>
> **[2:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=145)** Regardless of our backgrounds, we know very well that having an effective tool at hand can make a day and night difference.
>
> **[2:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=153)** The same applies to computer forensics.
>
> **[2:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools?u=76281980&t=156)** To be effective as a computer forensics investigator, you have to have as many relevant tools as possible, and throughout this course, we'll explore many of the tools I've mentioned.

> [!info]- Semantic Content
>
> **Analogies:** for example (1), similar to (1), such as (1)
> **Code Keywords:** case, (1), for. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Legal implications
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=0)** - [Instructor] As a computer forensics investigator, you should be aware of the potential legal consequences of your action.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=7)** If you conduct your computer forensics investigation improperly, the court could throw away all the evidence you provide.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=15)** Even worse, you could get into legal trouble if you're not careful.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=21)** In the context of a public investigation, one of the first things you have to consider is the Fourth Amendment.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=30)** As you know, the Fourth Amendment protects you from unauthorized search and seizure.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=36)** Therefore, as a computer forensics investigator working in public cases, you must obtain a warrant, by putting together a document called an affidavit, to justify the warrant.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=49)** In the context of a private investigation, the Fourth Amendment is often not a significant issue because internal policies drive your investigation.
>
> **[0:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=58)** instead of the statutes of the law.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=61)** Employers ask their employees to give their consent to comply with these policies when a job offer is made.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=70)** Whether part of a public or private case, for your evidence to be accepted by the court, you must ensure the reproducibility and verifiability of your evidence.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=82)** You can accomplish this by following systematic procedures in your computer forensics investigations when collecting and analyzing data.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=92)** For example, using chain of custody forms and evidence lockers is critical to ensure there is little chance of tampering.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=102)** Chain of custody forms allow you to track who handled your evidence, while evidence lockers are secure containers to store physical evidence.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=112)** One way of ensuring verifiability is by the use of hashing.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=117)** Let's say you have data on an original storage device or evidence drive, and a hash algorithm produces value A based on that data.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=130)** Then you make a copy of the drive.
>
> **[2:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=133)** If the same algorithm produces hash value B out of the duplicate, and if A and B match, the validity of the copy is verified.
>
> **[2:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=146)** This course has a dedicated lesson where we look into hashing in more detail.
>
> **[2:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=151)** Reproducibility is proven if you can generate the same hash value repeatedly.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=157)** The Fourth Amendment, verifiability, and reproducibility are what you should always keep in mind as a computer forensics professional.
>
> **[2:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=169)** How you conduct your investigation concerning these principles may have a significant legal impact.
>
> **[2:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/legal-implications?u=76281980&t=176)** To avoid unintended consequences, following the leading practices is essential.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), private (2), throw (1), case, (1), let (1)
> **Warnings:** be aware (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### Current and future trends
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=0)** - [Instructor] The good news for computer forensics professionals is that there are opportunities everywhere and there'll be even more because computer crimes are rising.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=10)** The bad news is that criminals are getting more organized and sophisticated, making our job as investigators more challenging.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=19)** There are many anti-forensics techniques that individuals can use when committing crimes in cyberspace.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=27)** It's now a common practice to adopt one or more of these approaches to evade detection.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=33)** Encryption is a huge challenge because it scrambles evidence and renders it useless.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=40)** All mainstream operating systems or OS vendors are providing advanced encryption capabilities for mobile devices and personal computers to protect the privacy of their customers.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=52)** Users can quickly and easily turn encryption on without expert knowledge.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=60)** Some of you may remember a controversy surrounding Apple not providing technical support for bypassing its encryption algorithm to help law enforcement.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=72)** Advances in hardware and software are always ongoing, presenting constant challenges.
>
> **[1:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=79)** The sheer volume of data they generate alone is already too daunting to keep up with.
>
> **[1:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=85)** These days, many standard storage devices have well over one terabyte capacity.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=92)** Unless we accomplish comparable advances in search tools, forensic analysis attempts are bound to take longer.
>
> **[1:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=100)** Luckily, we are seeing an explosion in data science innovations, especially in the area of big data and artificial intelligence, and I'm hoping that these newly emerging data science solutions will help reduce the average turnaround time for computer forensics analysis reports.
>
> **[2:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=120)** We are also storing more data in the cloud, and the ownership of data is not always clear, which could lead to custody disputes over potential evidence that a cloud service provider stores.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=135)** Another welcome change would be the improvement of the ease of use of computer forensics tools.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=142)** More automation is important because it will enable investigators to spend less time on mundane tasks and focus more on what's really important.
>
> **[2:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=152)** Automation can also help relieve specialists of simple but critical preliminary tasks such as collecting evidence at crime scenes, which less trained law enforcement officers should be able to handle with the help of more user-friendly software and hardware.
>
> **[2:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=172)** Despite some of the challenges I mentioned here, the prospect of computer forensics industry is highly positive.
>
> **[3:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=181)** There's always a big demand for well-trained professionals, and this trend will continue for the foreseeable future.
>
> **[3:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/current-and-future-trends?u=76281980&t=189)** If you're considering a career path in computer forensics, now is the time to jump in.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=0)** - [Instructor] Working in computer forensics is challenging, partly due to the rapidly changing technology landscape.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=7)** Whether they're old or new, all the technologies also coexist while new software and hardware are constantly appearing.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=17)** Take your PC, they continuously release new versions of the operating systems or OS.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=24)** Microsoft OS alone has a long list of upgrades from MS-DOS to the latest version of Windows OS.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=33)** Computer forensics professionals encounter many different technologies during an investigation.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=41)** It could be MS-DOS today, but Windows 11 tomorrow.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=47)** Does this mean that you need to know everything?
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=51)** The simple answer is no.
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=53)** It's virtually impossible to master every OS.
>
> **[0:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=58)** A good compromise is to develop foundational knowledge that transcends different versions of OSs and to focus on more persistent aspects of computer technology, such as file systems.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=72)** You also have to be resourceful.
>
> **[1:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=74)** Sometimes all it takes is a call to an expert.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=80)** However, it's still challenging to keep up with the changes and fundamentals and maintain an understanding of numerous technologies out there.
>
> **[1:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=90)** Therefore, to thrive in this ever-changing field, you must love learning.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=96)** The second challenge is that criminals are getting smarter and developing new ways thwart forensic analysis attempts.
>
> **[1:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=105)** These anti forensics techniques range from encryption to steganography.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=112)** Once again, computer forensic specialists should be fully aware of these tricks and wade through the challenges to acquire the evidence they are tasked to find.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=124)** The third challenge is the sheer volume of data to be analyzed.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=129)** The storage capacity of a typical computer is growing exponentially.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=135)** These days, it's common for a laptop to have a terabyte solid state drive.
>
> **[2:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=141)** To produce a timely report, an investigator must have access to a powerful workstation equipped with the latest forensic technologies, which are rapidly evolving themselves.
>
> **[2:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=154)** There are also other non-technical challenges.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=157)** Privacy is one of them.
>
> **[2:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=160)** To stay out of trouble, a forensic specialist should be crafty and able to navigate through private data while not violating a person's privacy.
>
> **[2:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=172)** Otherwise, the investigator risks having the collected evidence not accepted by the court.
>
> **[2:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=179)** Jurisdiction is another legal challenge.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=182)** Due to the differences in laws between countries, you may not be allowed to retrieve and present certain information.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=191)** There are many more challenges in computer forensics, which naturally result in more expansion and specializations in the field.
>
> **[3:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenges?u=76281980&t=201)** These challenges are good for the industry because they generate more opportunities for all of us.

> [!info]- Semantic Content
>
> **Code Keywords:** new, (1), private (1)
> **Env Vars:** dos (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Anti-forensics techniques
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=0)** - [Instructor] There is an ongoing race between criminals and computer forensics professionals.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=6)** The lawbreakers are always seeking ways to evade the investigators.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=12)** Sometimes bad guys get unexpected help from operating systems or OS vendors.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=19)** To protect the privacy of its users, OS companies strengthened their encryption, which could keep good guys like investigators from doing their work.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=29)** It's a delicate balance.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=32)** Encryption is one of the most daunting challenges computer forensics specialists face today because it prevents investigators from reading the data they need to investigate.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=45)** Another obstacle is an attempt to erase evidence from various media, like a solid state drive.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=52)** It's impossible to recover your data depending on how you delete it.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=57)** When you delete a file, your OS doesn't remove it from a storage device.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=62)** It simply marks the area the file occupies as deleted so it can be overwritten later.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=70)** Therefore, to thrive in this ever-changing field, to override the section designated as deleted and make it permanently erased.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=81)** Metadata provides information on different aspects of data.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=86)** If your data is a digital photo, its metadata includes facts like when the photo was taken and which device took it.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=96)** OSs keep metadata about files, including names, sizes, timestamps, and most importantly, where the files are stored.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=108)** Corrupting or deleting the metadata will make it extremely difficult to reconstruct or find the file.
>
> **[1:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=115)** Preventing metadata from being created altogether is another option.
>
> **[2:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=121)** An example is suppressing the changes of timestamps every time revisions are made.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=129)** This will throw off investigators because they'll be confused about the sequence of file change events.
>
> **[2:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=137)** There are also more creative ways to avoid detection and hide information.
>
> **[2:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=143)** One of the methods is using steganography, often favored by spies.
>
> **[2:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=149)** They can subtly embed information in a picture file so that the image is not significantly altered.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=157)** If done well, it's almost impossible to tell the difference between an original image and its tampered version, as you can see on the Guardian Project website where they offer a steganography app.
>
> **[2:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=173)** A more general method to hide data is to put it in unreachable places, undetectable by computer forensics software.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=182)** A slack space, a leftover created when writing to a file system, is a popular choice for this.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=191)** More advanced techniques can destroy evidence once they detect and attempt to analyze a digital medium forensically.
>
> **[3:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=200)** New anti-forensic approaches are constantly emerging and many more are under development.
>
> **[3:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/anti-forensics-sechniques?u=76281980&t=208)** This race between defenders and violators will continue as long as there is money to be made through computer and cyber crimes.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), override (1), throw (1), this. (1), continue (1)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** make (2), find (1)
> **Tools:** slack (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Compliance and forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=0)** - [Narrator] Computer forensics is essential to meeting compliance requirements.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=5)** Organizations must comply with different rules and regulations, depending on the industry.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=12)** The Health Insurance Portability and Accountability Act, or HIPAA of 1996, stipulates protecting personally identifiable information, or PII, in the healthcare and insurance industries.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=29)** The National Institute of Standards and Technology, or NIST, is a non-regulatory agency of the US Department of Commerce.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=40)** NIST SP 800-66 is a publication designed to help implement the HIPAA security rule.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=50)** SP here stands for special publication.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=55)** The NIST Guide clearly specifies computer forensics requirements and regulations.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=63)** In particular, it discusses establishing an audit trail, supporting a forensics investigation after an incident.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=72)** An audit trail is a chronological record that documents security-relevant events.
>
> **[1:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=79)** Various log messages generated by software and hardware are an example of an audit trail.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=87)** In handling credit card transactions, an organization is responsible for adhering to the Payment Card Industry Data Security Standard, or PCI DSS.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=99)** PCI DSS imposes annual audit reports to ensure organizations take proper security precautions while processing customer credit card information.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=111)** It mandates a process to provide a timely computer forensics investigation after a compromise occurs.
>
> **[2:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=120)** The Federal Information Security Management Act, or FSMA of 2002, requires federal organizations to generate and retain an immutable audit trail that enables a computer forensics investigation after a security incident.
>
> **[2:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=139)** Computer forensics plays a crucial role in ensuring that an organization remains compliant with cybersecurity rules and regulations.
>
> **[2:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/compliance-and-forensics?u=76281980&t=149)** This is one more reason to learn about computer forensics if you're involved in any aspect of the cybersecurity industry.

> [!info]- Semantic Content
>
> **Env Vars:** nist (3), hipaa (2), pci (2), dss (2), pii (1)
> **Definitions:** is a  (3), stands for (1)
> **Speakers:** - [narrator] (1)

#### Cybersecurity and forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=0)** - [Instructor] Cyber crimes are increasingly affecting our lives.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=4)** We routinely hear news about data breaches and wonder whether criminals stole our data.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=12)** Cybersecurity is all about preventing and responding to cyber crimes, which requires the heavy use of computer forensics techniques.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=22)** Whenever there is a security incident such as unauthorized access to a server, it's crucial trace back to the source of the attack and to understand how it happened.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=35)** By doing this, we determine the damages extent and take appropriate actions.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=42)** We can also prevent future attacks by making adjustments according to the lessons we learned from a comprehensive investigation.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=51)** Since the evidence of cyber crime is mostly present on computing devices like laptops, routers, and firewalls, a computer forensics investigation must accompany every cybersecurity action.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=66)** Due to this close relationship between cybersecurity and computer forensics, professionals are paying more attention to developing additional skills specific to handling cyber crimes.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=78)** One expertise required to more effectively investigate a cyber crime is knowledge of computer networking, which is the study of connecting machines using various media, including radio signals, internet and fiber optics cables.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=96)** As computer forensics workers who are seeking more specialization in cybersecurity regarding computer networking, they created an entirely new discipline called network forensics.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=111)** This subfield of computer forensics focuses on violations and crimes occurring in the context of a computer network.
>
> **[2:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cybersecurity-and-forensics?u=76281980&t=121)** Cyber crimes and computer forensics are now inseparable, and you need to develop at least a reasonable understanding of computer networking to play any significant role in a computer forensics investigation.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)


### 2. Areas of Computer Forensics

#### Specializations in computer forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=0)** - [Instructor] As computer forensics expands into cyber and digital domains, specialization is essential because it's impossible for one person to know everything.
>
> **[0:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=11)** Investigations in cyber spaces require expertise in computer networking because monitoring, passing network traffic establishes evidence after a cyber crime happens.
>
> **[0:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=25)** This involves looking for traces of crime and all the possible elements of what constitutes a computer network, including computers, switches, and routers.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=40)** Many computers host programs called servers that provide services to another program or remote users called clients.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=50)** Servers and clients can both be the origins and the destinations of computer network communications and should be subject to close scrutiny.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=62)** This emphasis on computer networking is why we collectively call the cyber crime-centric investigation techniques network forensics.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=72)** One of the conventional subfield of computer forensics is operating systems or OS forensics.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=80)** The sheer number of different OSs and their versions warrant a specialty.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=87)** The third primary specialization focuses on the World Wide Web.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=91)** These days, I find myself doing a majority of my computing tasks in a web browser.
>
> **[1:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=98)** I use a web client to check my emails.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=102)** I edit my documents in Google Docs.
>
> **[1:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=105)** I watch videos on YouTube.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=107)** My Google Chrome frequently takes up over half of the resources on my computer.
>
> **[1:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=113)** Just because of the dominance of the web and its applications in our everyday lives, unique web-specific forensic approaches are necessary and are in high demand.
>
> **[2:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=126)** Cloud computing is another trend shaping our information technology adoption.
>
> **[2:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=131)** The cloud now powers most of the applications we are accessing through the web.
>
> **[2:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=136)** Criminals have already started exploiting cloud users, which is why cloud forensics is becoming a major digital forensics subfield.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=147)** To compromise web and cloud security, criminals sponsor the development of malicious software or malware.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=157)** The complexity of malware is increasing as law breakers understand its value, and invest more resources in producing more sophisticated attack software.
>
> **[2:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=170)** Expert knowledge is a must to address malware challenges in computer forensics effectively.
>
> **[2:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=177)** Mobile computing devices have software and hardware characteristics fundamentally different from desktop computers.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=186)** The form factors are different and so are the OSs, such as iOS and Android.
>
> **[3:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=194)** Tablets and mobile phones are quickly becoming mainstream and we spend less and less time on our PCs.
>
> **[3:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=203)** We definitely need specialized treatment here, and mobile forensics is a response to this need.
>
> **[3:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=211)** Email forensics is the last specialization I'd like to bring up.
>
> **[3:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=217)** People spend a lot of their professional lives checking emails, and the same applies to criminals who exchange emails to coordinate their illegal activities.
>
> **[3:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=228)** The significance of email and digital forensics is high enough to deserve a specialization.
>
> **[3:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=236)** As the information technology landscape changes, digital forensics must keep up with the advancement of the field.
>
> **[4:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=244)** Specialization is a coping mechanism and the discipline of digital forensics will become even more diverse.
>
> **[4:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/specializations-in-computer-forensics?u=76281980&t=253)** I feel lucky to be part of this dynamic industry of digital forensics.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** find (1)
> **Code Keywords:** require (1)
> **Code Identifiers:** ios (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Network forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=0)** - [Instructor] Network forensics investigates crimes in cyberspace.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=5)** It focuses on analyzing and monitoring network traffic data exchanged between computing devices with unique addresses.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=14)** To be able to conduct network forensics tasks, you need to develop significant knowledge in computer networking.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=23)** Some of the topics to master include the roles of network hardware like switches, routers, and hosts, and various network layers such as physical, data link and application.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=39)** Others are concepts.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=41)** A prime example is network architecture, which decides how to assemble different networking hardware components using specific technologies.
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=53)** Understanding a network architecture is equivalent to acquiring a map, which is essential for the searches you need to conduct in a maze of various network devices and appliances.
>
> **[1:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=65)** Besides learning the hardware, layers and concepts, becoming proficient with networking software is another crucial aspect of establishing yourself as a network forensics specialist.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=80)** Therefore, to thrive in this ever-changing field, is operating systems or OSs.
>
> **[1:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=85)** They provide baseline networking capabilities that turn your application data into packets and then electrical or optical signals so that they can travel through copper wires or fiber optics cables.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=99)** Your OSs also allow you to configure your network settings to connect your computer to a local area network, or LAN.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=107)** If you're not already familiar with basic commands like ipconfig on Windows, or ifconfig on Linux, it's a good indicator that you lack qualifications as a network forensics investigator.
>
> **[2:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=123)** After developing proficiency with OSs, a natural next step is to study well-known software tools, Package snippers are one of them.
>
> **[2:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=133)** This will throw off investigators and package snippers are what you use to collect and preserve data in computer networks.
>
> **[2:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=144)** There are numerous other software tools in computer networking.
>
> **[2:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=148)** These are software firewall solutions, intrusion detection and prevention systems, security information and event management, or SIEM applications.
>
> **[2:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=161)** I hope you now have a good feel for what network forensics involves.
>
> **[2:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=166)** Several digital forensics software products have built-in features for network forensics tasks and require minimum networking knowledge, but much more is needed to dig deeper into the crime scenes in cyberspace.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/network-forensics?u=76281980&t=182)** If your career goal is to become a network forensics specialist, I recommend you do everything I've highlighted so far.

> [!info]- Semantic Content
>
> **Code Keywords:** throw (1), require (1)
> **Env Vars:** lan (1), siem (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Operating system forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=0)** - [Instructor] Operating systems, or OSs, are one of the most fundamental components of digital forensics.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=8)** We use OSs to control all the digital devices around us.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=14)** Take your mobile phones.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=16)** The prevalent OSs that drive their inner workings are Android and iOS.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=23)** Your favorite digital watches also have OSs.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=27)** Windows, Linux, and Mac OS power most of the computers in the world.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=33)** The diversity alone presents a considerable challenge.
>
> **[0:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=38)** Each type of hardware can potentially have its own OS, like your phone, watch, and computer.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=47)** Windows OS has so many versions and you cannot simply ignore its old versions because many of them are still in use.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=56)** I bet Windows 3.1 is still in news somewhere out there.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=61)** A more realistic scenario is investigators running into outdated OSs, such as Windows 98 instead of its prehistoric predecessor.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=72)** The die-hard nature of OSs and their diversity make them even tougher to investigate, and demand specialization.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=82)** One of the major areas of OSs forensics is file systems, because they store data, including evidence.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=91)** Although similar, each operating system has its unique way of storing files.
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=97)** This is even the case among different versions of the same OS, like Windows.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=104)** Have you heard of FAT or NTFS?
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=108)** FAT stands for File Allocation Table and NTFS is an acronym for New Technology File System.
>
> **[1:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=118)** Both of them are popular Windows file management systems.
>
> **[2:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=123)** Linux and Mac OS have their own.
>
> **[2:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=127)** Random access memory, or RAM, is another location where an investigator can find significant data leading to potentially incriminating evidence.
>
> **[2:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=137)** Over the years, the capacity of RAM has been increasing and personal computers or PCs often have eight gigabytes of memory or more.
>
> **[2:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=148)** You can find lots of valuable data in RAM, including unencrypted encryption keys and passwords.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=157)** The challenge is that the data in RAM is volatile, which means you lose its content when your computer is turned off.
>
> **[2:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=165)** Because of this, you must capture the data while the suspect computer is still on.
>
> **[2:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=171)** We call this act of retrieving data from RAM live acquisition.
>
> **[2:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=177)** OSs also generate numerous log files with crucial information like time stamps and identities of users.
>
> **[3:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=187)** Other areas of OS forensics include virtualization and cloud computing.
>
> **[3:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=194)** Many corporations no longer have their server room but outsource their IT to cloud service providers, which use virtual machines to install end users' OSs instead of physical PCs.
>
> **[3:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=209)** What I've discussed so far is just a highlight of the fascinating field of OS forensics.
>
> **[3:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/operating-system-forensics?u=76281980&t=215)** You at least need a decent level of competency in OS forensics to qualify as a digital forensics professional because the knowledge is foundational for almost all digital forensics tasks.

> [!info]- Semantic Content
>
> **Env Vars:** ram (5), fat (2), ntfs (2)
> **CLI Commands:** find (2), make (1)
> **Definitions:** stands for (1), is an  (1), we call this (1)
> **Code Keywords:** this, (1)
> **Code Identifiers:** ios (1)
> **Versions:** 3.1 (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)

#### Web forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=0)** - [Instructor] Web browsers are a huge part of how we use our computing devices.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=5)** We check our emails through web applications.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=9)** We shop online using our web browsers.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=13)** Online banking is another area where we use web applications.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=18)** We use web browsers on multiple platforms.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=22)** They're available on our phones, tablets, and computers.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=27)** We can also sync multiple instances of web browsers by signing on, which makes web forensics even more relevant.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=37)** Due to our heavy use of web browsers in our computing experience and on the internet, web forensics has become a significant subfield of digital forensics.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=49)** One of the web forensics goals is to find sensitive information, such as usernames and passwords.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=56)** Password management has been a challenge in cybersecurity.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=60)** Web browsers are trying to help mitigate the problem by allowing users to save their credentials in the cloud.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=68)** Therefore, full access to a web browser account can unlock many other online accounts a suspect owns.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=77)** The same, applies to credit card numbers because they're stored as well.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=82)** Browsing history is another treasure trove of information.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=87)** Based on the sites of user visits, investigators can tell much about the person, including motives and criminal intent.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=96)** A lot of what people do is also searching, and the query terms often provide clues to the mindset of a suspect.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=106)** Although ultimately encrypted to be saved in the cloud, the confidential information; documents, images, videos; data entered into forms, scripts, and executable files linger in a temporary and less secure memory location called cache.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=129)** Basically, examining web data alone can reveal ton of information on a user, including interests, preferences, beliefs, shopping habits, friends, family, and other social networks.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=147)** Because of the widespread use and the information-rich environment it provides, cyber criminals frequently launch their attacks against web browsers.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=157)** You must have heard of cross-site scripting and SQL injection by now.
>
> **[2:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=162)** Since these attacks occurred through web browsers, cybersecurity professionals can conduct a web forensics investigation to fulfill an incident response task.
>
> **[2:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=175)** The dominance and popularity of web browsers in everyday computing also presents some challenges.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=182)** An obvious one is their diversity.
>
> **[3:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=185)** There are several mainstream web browsers, and they continue to evolve.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=190)** Encryption and privacy features are others.
>
> **[3:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=193)** By using an incognito mode, users can conceal their browsing history.
>
> **[3:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=200)** Despite these difficulties, web browsers are still a primary source of evidence for digital forensics.
>
> **[3:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=207)** I hope you're intrigued and ready to learn more about them.
>
> **[3:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/web-forensics?u=76281980&t=211)** Web forensics certainly deserves attention in its own right.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** continue (1)
> **Env Vars:** sql (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Cloud forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=0)** - [Instructor] Cloud computing used to be an emerging technology, but not anymore.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=5)** It's quickly taken over many aspects of our computing lives.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=10)** Take file storage.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=12)** Many of us now have one or more cloud-drive service accounts.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=17)** I rarely store data locally.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=20)** This trend implies that digital forensics is no longer limited to local file systems, but must expand its scope to include cloud service products.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=31)** There are three major types of cloud services.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=35)** We are most familiar with Software as a service, or SaaS, because of its end-user facing nature.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=43)** It offers software solutions in web applications like word processors and spreadsheets.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=50)** Platform as a service, or PaaS, allows a self-contained environment where users can develop and maintain their software services.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=61)** Web servers, databases, and operating systems are frequently available in PaaS offerings.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=70)** Infrastructure-as-a-Service, or IaaS, is the most extensive cloud computing option and allows users to build their computing resources by providing virtual hardware.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=82)** Through IaaS, you can provide your virtual machines, virtual switches, and virtual routers, to name just a few.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=92)** What's daunting to digital forensics investigators is that criminals also have access to all these different cloud capabilities.
>
> **[1:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=101)** Due to the prevalence of cloud computing, the bad guys have a much easier time quickly setting up a computing infrastructure to commit a crime, and destroying it to evade detection, all on somebody else's hardware.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=117)** What's important here is the actions of cloud service providers to monitor these criminal activities.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=124)** By now, you know very well that social media sites could become the prime targets of criminal investigations and hold important evidence.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=135)** Investigators will have very little to work with if these companies don't cooperate in capturing, and detecting illegal activities on their service platforms.
>
> **[2:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=146)** Think about the possibility of having to execute a search warrant for an entire data center.
>
> **[2:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=152)** There is no way you can do your job effectively without the help of the people managing the facility.
>
> **[2:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=159)** This is why rules and regulations are critical in cloud forensics.
>
> **[2:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=165)** Without a mandate to help lawful investigators, cloud service providers have little incentive to do anything.
>
> **[2:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=172)** In civil cases, you can only rely on basic mechanisms such as service level agreements, or SLAs.
>
> **[3:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=180)** Another option is the Federal Rules of Civil Procedure, or FRCP.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=186)** Other than these, there doesn't seem to be too much available to help cloud forensics investigations.
>
> **[3:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/cloud-forensics?u=76281980&t=194)** Negotiations and legal knowledge, in addition to technical skills, play an essential role here.

> [!info]- Semantic Content
>
> **Code Keywords:** self (1)
> **Env Vars:** frcp (1)
> **Speakers:** - [instructor] (1)

#### Malware forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=0)** - [Instructor] Malware is short for malicious software.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=4)** Cyber criminals frequently use malware to commit crimes.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=9)** Computer viruses used to be the majority of malware we encountered, which is no longer the case.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=17)** Malware has evolved since its first appearance.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=21)** Many types of malware now exist including viruses, worms, adware, Trojan horses, rootkit, and ransomware.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=33)** Viruses need human assistance like opening a file while worms can spread on their own through network connections.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=43)** Adware is less damaging than other malware that destroys information because its goal is to display advertisements.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=52)** It's annoying but better than losing access to data.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=56)** Trojan horses appear benign and valuable on the surface, but the software performs steps to inflict damage behind the scenes.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=66)** Rootkits change your operating system altogether to hide any suspicious activities.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=72)** Changes are only visible to the installers of the rootkit.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=77)** Victims cannot detect anything unusual.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=81)** Ransomware seems to be very active these days.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=84)** I'm sure you heard about it.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=86)** They lock your computer and prevent you from using it.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=91)** Recently, many organizations have been the victims of ransomware attacks.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=96)** Criminals would ask for ransom money in return for unlocking your computer hence the name ransomware.
>
> **[1:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=105)** Much of malware forensics involves capturing and analyzing the software tools used for crimes to understand the scope of damage and to find ways to detect and disable them.
>
> **[1:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=119)** One of the most popular tools is disassembler, which allows an investigator to extract source code from an executable file.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=129)** Having access to source code is like obtaining a treasure map.
>
> **[2:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=134)** The source code shows the logic behind malware behavior and sheds light on its evasion techniques.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=142)** Another vital tool is live acquisition.
>
> **[2:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=145)** You want to catch malware red-handed while it's in action, and the best place to do this is the main memory of your computer in which the malware resides and is taking action.
>
> **[2:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=156)** After lifting the memory resident binary data that is simply a combination of zeros and ones, you can use a disassembler to dissect the malware you just captured.
>
> **[2:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=169)** One of the first steps of malware forensics is to detect malware.
>
> **[2:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=175)** A conventional way to do this is fingerprinting, which looks for a static pattern.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=182)** The assumption here is that the pattern is not changing, which is why we use the term static.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=190)** Malware is getting smarter and uses various tactics to avoid detection through static analysis, which is why we now need a new approach called dynamic analysis.
>
> **[3:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=203)** Observing damaging and deceptive behaviors is crucial in dynamic analysis.
>
> **[3:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/malware-forensics?u=76281980&t=210)** Because of the heavy emphasis on examining software, coding knowledge is critical to becoming an expert in malware forensics.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), case. (1)
> **Exercise Files:** source code (3)
> **CLI Commands:** find (1)
> **Definitions:** short for (1)
> **Speakers:** - [instructor] (1)

#### Mobile forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=0)** - [Instructor] Mobile computing devices are everywhere.
>
> **[0:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=3)** Mobile phones are quickly replacing personal computers in their popularity and functions.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=10)** It's now common to confiscate mobile phones and tablets in a criminal investigation.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=18)** Mobile forensics is a subfield of digital forensics, focusing on finding evidence on mobile devices.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=26)** The diversity of mobile devices is overwhelming.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=31)** I've gone through dozens of cell phones and tablets since my first purchase.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=37)** You've seen many technologies come and go as part of the mobile revolution in our modern world.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=44)** USB is a good example.
>
> **[0:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=46)** I have so many cables at home to connect devices using different USB standards like USB 2.0, USB 3.0, Apple lightning, USB 3.1 type C, and USB 4.0 connectors.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=63)** The list goes on and on.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=66)** Finding appropriate cables alone could be a massive challenge for a forensics investigator.
>
> **[1:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=73)** This example highlights the importance of tool support for cases involving mobile devices.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=80)** If a vendor can provide the universal kit with all the necessary hardware to get the data we need out of the proprietary hardware, the investigator's job will be much easier.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=93)** Therefore, mobile forensics investigators must be proficient with specialized hardware and software tools to do their jobs effectively because having the right equipment or program can make a big difference.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=108)** Luckily, many forensic solutions companies specialize in mobile devices as shown in this "Gifford Foundation" article.
>
> **[1:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=118)** To be competitive, they aim to cover as many technologies as possible, which include various versions of mobile operating systems and different generations of hardware by numerous vendors.
>
> **[2:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=133)** There are hardware components unique to mobile devices such as subscriber identifier module, or SIM.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=142)** Seizing all associated cables and media, like a secure digital or SD memory card, is vital at a crime scene.
>
> **[2:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=152)** There are also mobile device specific data to acquire.
>
> **[2:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=158)** These include phone books, text messages, call history, location information, Wi-Fi networks, and cell towers used.
>
> **[2:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=170)** Due to the diverse nature of mobile devices, it's often necessary to resort to multiple software and hardware tools.
>
> **[2:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=178)** Mobile devices require custom seizure and preservation methods.
>
> **[3:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mobile-forensics?u=76281980&t=184)** All these distinct characteristics of mobile device forensics demand special training, and justify recognition as a standalone track within digital forensics.

> [!info]- Semantic Content
>
> **Env Vars:** usb (6), sim (1)
> **Versions:** 2.0 (1), 3.0 (1), 3.1 (1), 4.0 (1)
> **Code Keywords:** module (1), require (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Email forensics
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=0)** - [Instructor] They are also our principle means to reach out to people.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=5)** Criminals know that we pay attention to email.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=8)** They try to exploit our increasing dependence on email in our personal and business lives.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=17)** Take phishing that tries to lure you into visiting a fake website and giving up sensitive information like your social security number or SSN.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=27)** Emails are its primary attack vector or mechanism.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=31)** Phishing is a form of social engineering taking advantage of human mistakes in an overall cybersecurity context.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=39)** Phishing emails can be as simple as someone impersonating your boss and asking for confidential information.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=47)** Emails can also deliver malware in their attachments.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=52)** Simply opening an attachment can infect your computer.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=57)** Since emails are so prevalent during our daily communications, the electronic conversations alone can serve as incriminating evidence.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=67)** Emails provide credible documentation of how various criminal activities unfolded in an organization in many corporate fraud cases and white collar crimes.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=80)** One of the major tasks of an email forensic specialist is to find out the true identities of the senders and the receivers of an email and validate the authenticity of a message.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=93)** We can use metadata to do this.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=96)** Assuming that our data is email, its metadata includes IP addresses, timestamps, headers, and email clients used.
>
> **[1:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=109)** Timestamps establish the sequence of criminal activities, while IP addresses can pinpoint where emails originated.
>
> **[2:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=120)** Other significant email data include multimedia content such as web links, pictures, videos, and audio files.
>
> **[2:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=131)** Another important email forensics task is keyword searches.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=135)** The goal is to find the emails relevant to the crime you're investigating.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=140)** Tool support is essential in making the search process efficient.
>
> **[2:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=146)** To retrieve emails and prepare them for an in-depth analysis, it's necessary to know how to work with different email clients.
>
> **[2:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=155)** There are characteristics unique to each client, and how they save their emails on local or remote file systems.
>
> **[2:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=164)** An effective investigator needs to be fully aware of these details.
>
> **[2:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=169)** Typically, emails go through multiple servers to reach their destinations.
>
> **[2:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=175)** To make this delivery process happen, email clients and servers use a protocol called Simple Mail Transfer Protocol or SMTP.
>
> **[3:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=185)** Because it's so easy to fabricate an email, it's frequently necessary to examine the SMTP logs of the email servers to check its validity.
>
> **[3:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=197)** Therefore, email forensics investigation requires you to understand the server side of the SMTP too.
>
> **[3:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=205)** Since email systems rely heavily on computer networks and their software applications, including clients and servers, it doesn't hurt to develop knowledge in computer networking.
>
> **[3:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=218)** Although we treat it as an independent subfield of digital forensics, email forensics is closely related to network forensics.
>
> **[3:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/email-forensics?u=76281980&t=228)** I would go so far as to say that email forensics is a further specialization of network forensics.

> [!info]- Semantic Content
>
> **Env Vars:** smtp (3), ssn (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Code Keywords:** this. (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Certifications
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=0)** - [Instructor] Obtaining a certification is an excellent way to increase your credibility as a digital forensics investigator.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=9)** There are mainly two different types of certifications out there.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=13)** One is those provided by tool vendors, the other is provided by professional associations.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=21)** We'll look into these certifications in more detail one by one.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=26)** Let's look at the OpenText EnCase Certified Examiner, or EnCE, program first.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=35)** It requires 64 hours of authorized computer forensics training or 12 months of computer forensics work experience.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=45)** Next is the certification provided by Exterro.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=49)** The requirements for this certification include access to Forensics Toolkit, or FTK.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=56)** This certification provided by Exterro is called Access Data Certified Examiner, or ACE.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=63)** EC-Council also provides a certification.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=68)** This one is vendor-neutral and open to the public.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=72)** The name of the certification is Computer Hacking Forensic Investigator, or CHFI.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=80)** Finally, there's a certification provided by an organization called the International Association of Computer Investigative Specialists, or IACIS.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=92)** In this case, the certification is more for law enforcement officers or government employees.
>
> **[1:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=100)** The name of the certification is Certified Forensic Computer Examiner, or CFCE.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/certifications?u=76281980&t=108)** If you decide to become a career computer forensics investigator, consider obtaining one of these computer forensics certifications.

> [!info]- Semantic Content
>
> **Env Vars:** ftk (1), ace (1), chfi (1), iacis (1), cfce (1)
> **Code Keywords:** let (1), public (1), finally, (1), case, (1)
> **Definitions:** is an  (1), is called (1)
> **Speakers:** - [instructor] (1)


### 3. Preparing for an Investigation

#### Tools and knowledge requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=0)** - [Instructor] There are some prerequisites to starting a digital forensics investigation.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=5)** These include basic hardware and software tools, which require significant investments.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=12)** Maintenance is an important aspect to consider.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=18)** Hardware needs replacing every once in a while.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=22)** The software also demands upgrading because new versions are coming out constantly.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=28)** Managers shouldn't forget the fact that time is also money.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=33)** Free software sounds good initially, but it could become a time sink when little professional support is available to help the team configure an application properly.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=44)** It may well be the case that the software becomes obsolete once its development stops due to some obscure problems associated with the project.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=54)** If this happens, you lose all your investments in the software.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=60)** For one, your expertise in the software product becomes useless because you have to abandon it and find its replacement.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=69)** This is why it's always essential to consider the total cost of ownership or TCO when owning hardware and software.
>
> **[1:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=79)** Think about all the resources allocated during a solution's entire lifespan when making your important purchasing decisions.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=88)** Compared to software and hardware, your investments into training and education are relatively safer bets as long as you make sound choices in what to learn.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=99)** Learning fundamentals like number systems stays with you for your entire career, although updating and upgrading your knowledge is paramount to staying relevant as a digital forensics professional.
>
> **[1:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=116)** This is why I'm covering classic concepts like hexadecimal numbers and offset.
>
> **[2:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/tools-and-knowledge-requirements?u=76281980&t=122)** I call them classic because they'll never become obsolete.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** require (1), while. (1)
> **Env Vars:** tco (1)
> **Definitions:** is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Hardware
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=0)** - [Narrator] There are some hardware tools you need as a digital forensics investigator to function effectively.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=8)** One of the essential requirements for digital forensics hardware is efficiency, mainly in terms of speed.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=17)** As a digital forensics investigator, you spend much of your time on mundane tasks, such as waiting for your imaging process to be over and looking for information.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=29)** You can finish these tasks very quickly depending on how fast your computer is.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=36)** Therefore, the speed of your digital forensics hardware is critical.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=42)** Another requirement for your digital forensics hardware is capacity.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=48)** Your digital forensics hardware demands more memory and storage, as well as extra base and slots.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=57)** The third requirement is compatibility.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=60)** In your investigations, you'll come across many different types of operating systems or software applications.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=68)** There are also various kinds of hardware you'll have to deal with.
>
> **[1:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=73)** The next requirement is mobility or portability.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=77)** When you show up at a crime scene, you have to accomplish some initial digital forensics tasks, which is why some of the digital forensics hardware you carry must be more portable.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=91)** When in a lab environment, you have access to a full-blown digital forensics workstation.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=99)** However, at a crime scene, you need a scaled down version of the same hardware, especially a field kit.
>
> **[1:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=109)** One of the major elements of the field kit is a laptop configured as a digital forensics workstation.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=117)** There are also some miscellaneous digital forensics hardware like flashlights, antistatic evidence bags, cameras, chain of custody forms, cables and screwdrivers.
>
> **[2:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=133)** Antistatic evidence bags are essential when handling sensitive electronics.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=140)** Touching electronics with your bare hands can cause a short circuit, making the evidence useless.
>
> **[2:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=148)** Using an antistatic evidence bag prevents this from happening.
>
> **[2:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=153)** There is a wide variety of specialized digital forensics hardware.
>
> **[2:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hardware?u=76281980&t=158)** What we've discussed so far is an excellent place to start learning more about them.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** function (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Software
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=0)** - [Instructor] A huge part of becoming an effective digital forensics investigator, is to be familiar with all the major computer forensics software.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=9)** There are well-known commercial digital forensics software tools out there, such as enCase, and Forensic Toolkit, or FTK.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=22)** There are also open source and free digital forensics software.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=28)** These include Autopsy, and SANS, Investigative Forensic Toolkit, or SIFT.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=40)** We can also categorize the digital forensics software products based on the comprehensiveness of the features they provide.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=50)** When an application provides all, or most, of the features necessary for you to conduct a digital forensics investigation, we call it a digital forensics software suite.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=63)** Software tools, such as enCase, FTK, and Autopsy, fall under this category.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=72)** There are also computer forensics utilities that focus only on a single aspect of digital forensics investigations.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=80)** For example, FTK Imager, solely focuses on obtaining an image of an evidence drive.
>
> **[1:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=90)** Tools, such as dcfldd, or DD, also provide similar features.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=99)** Hex Editors allow you to examine your file at a binary level.
>
> **[1:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=105)** What's really handy is packaging opensource and free forensics programs into a Linux operating system distribution.
>
> **[1:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=114)** This way you don't have to install anything and start using them out of box.
>
> **[2:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=120)** The digital forensics OS distributions also offer an isolated environment that's important to prevent tampering.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=130)** You can install them on a physical machine or virtual machine.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/software?u=76281980&t=135)** My hope is that by the time you're done with this course, you'll have a list of basic understanding of how we use these software solutions in a digital forensics context.

> [!info]- Semantic Content
>
> **Env Vars:** ftk (3), sans (1), sift (1)
> **Analogies:** such as (3), for example (1)
> **Code Identifiers:** encase (2)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### Understanding hexadecimal numbers
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=0)** - [Instructor] The knowledge of hexadecimal numbers is essential in the toolbox of a digital forensics investigator.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=8)** One of the motivations for using hexadecimal numbers is that it's often necessary to investigate data at a binary level.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=18)** We use binary numbers to represent everything on a computer device.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=24)** Binary numbers rely on only two symbols, 0 and 1.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=29)** Machine code is a string or strings consisting of 0s and 1s.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=35)** It's the only language your computer speaks.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=40)** Criminals frequently hide or fabricate their data at the machine code level.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=47)** Therefore, as a digital forensics investigator, you should also be able to examine your evidence in its native format, that is combination of 0s and 1s.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=60)** The challenge associated with reading machine code is that there are simply too many digits to deal with.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=68)** A more compact way to represent binary numbers makes human inspection much easier.
>
> **[1:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=76)** The way you represent your data in machine code is called encoding.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=82)** For example, to encode A, we need eight binary digits, 0100 0001.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=92)** As you can see, displaying the raw binary data takes up a lot of space.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=99)** Detecting a pattern in the sea of 0s and 1s is also more difficult because of their similarities.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=108)** Hexadecimal representation, on the other hand, is much more compact and easier to examine, which increases readability and facilitates spotting a specific pattern.
>
> **[2:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=122)** Hexadecimal representation, on the other hand, is much more compact and easier to examine, which increases readability and facilitates spotting a specific pattern.
>
> **[2:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=134)** Another reason we use hexadecimal numbers to represent binary numbers is the ease of conversion.
>
> **[2:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=141)** I told you that letter A requires eight binary digits to encode, as shown here.
>
> **[2:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=149)** In hexadecimal, we just need two digits to represent the same number, which are 4 and 1.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=157)** Think about the difference between 0100 0001 versus 41.
>
> **[2:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=165)** Which one do you think is easier to manage?
>
> **[2:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=169)** Each binary digit is referred to as a bit.
>
> **[2:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=173)** 1 byte consists of 8 bits.
>
> **[2:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=177)** Usually 1 byte is all it takes to represent a character in an alphabet.
>
> **[3:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=184)** The hexadecimal number system uses base 16, which means it uses 16 different symbols, 0 through 9 and A through F, to represent the magnitudes, such as 10 through 15.
>
> **[3:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=202)** Therefore, in hexadecimal, A is 10, B is 11, C is 12, D is 13, E is 14, F is 15.
>
> **[3:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=218)** Each hexadecimal digit is capable of representing four binary digits.
>
> **[3:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=225)** 1111 is the biggest binary number you can represent with 1 hexadecimal digit, which is F.
>
> **[3:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=234)** The knowledge of hexadecimal number system will help you in your future digital forensics investigations because you're bound to handle it in your hex editors.
>
> **[4:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hexadecimal-numbers?u=76281980&t=245)** Many digital forensics tools also present data to their end users in hexadecimal numbers.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Using a hex editor
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=0)** - [Presenter] Your computer stores everything in binary numbers, or in other words, zeros and ones.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=8)** Criminals modify these binary numbers and fabricate them to hide their data.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=15)** You need hex editors to find this hidden data.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=20)** Hex in the term hex editors is short for hexadecimal.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=27)** As its name suggests, hex editors allow us to examine and play with data at the binary level.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=35)** In hex editors, your number appears in hex numbers, which represent binary numbers more compactly.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=44)** There are many hex editors available.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=47)** Some of them are free and open source.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=50)** Others are commercial products.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=54)** There are essential hex editor features you need as a digital forensics investigator.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=61)** These include abilities to open big files or local drives.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=67)** You frequently have to open an entire drive in a hex editor.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=72)** It's problematic if your hex editor crashes because it cannot handle the file size or the drive.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=80)** You also need abilities to make and save changes to reveal secrets.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=87)** Another essential feature is an effective means to conduct searches, especially by sectors, which are the smallest physical storage unit of a data drive.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=99)** It's sometimes necessary to shift bits to find hidden information.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=107)** Almost all the hex editors can generate hash values, which are unique strings representing files.
>
> **[1:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=116)** Getting a hash value using a hex editor is simple and fast.
>
> **[2:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=122)** One of the things you encounter while using a hex editor is a distinction between physical and logical drives.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=130)** Physical drives refer to hard drives, USB drives, or solid state drives.
>
> **[2:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=138)** These are the tangible hardware components connected to your computer.
>
> **[2:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=143)** Logical drives refer to the partitions of a physical drive, which your operating system creates to allow end users to manage their data storage more effectively.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=157)** Because of this, a single physical drive can show up as multiple logical drives on an operating system.
>
> **[2:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=167)** A hex editor denotes the location of a particular piece of information in a file or drive by showing how many multiples of spaces away a specific part of data is from the beginning of a file or a sector.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=182)** This concept is called offset.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=186)** How do you feel about this initial tour of a hex editor environment?
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-hex-editor?u=76281980&t=191)** Hopefully you're ready and motivated to do some basic investigations using hex editors by now.

> [!info]- Semantic Content
>
> **Definitions:** in other words (1), short for (1), is an  (1), is a  (1), is called (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** this, (1)
> **Env Vars:** usb (1)
> **Speakers:** - [presenter] (1)

#### Understanding offset
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=0)** - [Instructor] Understanding the concept of offset is critical in analyzing and interpreting your data in digital forensics.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=10)** Offset is significant, especially in the context of locating a piece of information in your dataset.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=18)** Simply put, an offset is a way to refer to a location from a particular reference point like the beginning of a file, the beginning of a sector, or the beginning of an entire drive by specifying their distance in bytes.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=39)** That's the whole idea behind offset.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=43)** To do this, we use hex numbers to record the number of bytes between a reference point and a location of our interest.
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=53)** By the way, hex here is short for hexadecimal.
>
> **[0:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=58)** Let's say the offset is one zero in hex, which means the current location of a piece of data is 16 bytes away from a reference point.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=70)** We use a particular offset notation to make it clear that it's a hex number as shown here.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=77)** The prefix zero and lowercase x denote that the offset amount is in hex.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=84)** Here, zero x one zero means the offset amount is one zero in hexadecimal.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=92)** The subscript 16 is there to indicate that we're using base 16.
>
> **[1:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=98)** With this newly-gained knowledge of offset, you can locate any piece of information in a file or drive.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=106)** Before you feel more comfortable, you need lot of practice.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-offset?u=76281980&t=111)** You must try this on your own using the tools of your choice.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **Definitions:** is a  (1), short for (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Forensics OS distributions
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=0)** - [Instructor] We talked about forensics Linux distributions.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=4)** Let's check them out.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=6)** Because its source code is freely available to the public, Linux is a great platform to leverage if you want to create a custom operating system.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=17)** All you have to do is pick and choose the components you want and add your flavor to the graphical user interface, or GUI.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=26)** We call these custom-built OS's distributions.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=31)** A website called [DistroWatch.com](https://DistroWatch.com) follows the rankings of all the known Linux OS distributions.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=39)** As you can see, there's so many out there.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=44)** Kali is one of the Linux OS distributions specializing in digital forensics.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=51)** It comes with Open Source and free digital forensic suites, such as Autopsy.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=57)** Let's see if we can find it.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=60)** Let's go to Applications.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=63)** Choose Forensics.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=68)** Autopsy is there.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=71)** SANS Investigative Forensic Toolkit, or SIFT, is another forensic distribution worth your attention.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=80)** This is what the SIFT environment looks like.
>
> **[1:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=85)** You see all the cheat sheets on the desktop.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=88)** Lets open one.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=91)** This should be handy when you cannot remember a command or its options.
>
> **[1:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=98)** GParted is a Linux OS distribution dedicated to managing disc partitions.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=106)** It's a GUI version of FDISK, and a favorite tool for many digital forensics practitioners.
>
> **[1:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=113)** Let's take a look.
>
> **[1:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=115)** All this distribution contains is the GParted tool, except for some bare essentials such as screenshot, terminal, and a web browser.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=130)** Let's start GParted.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=135)** I'm about to create a new partition here, D-E-V-S-D-A 1.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=142)** On Linux, we represent storage devices as files.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=147)** A serial advanced technology attachment, or SATA drive, shows up as D-E-V-S-D-A, as shown here.
>
> **[2:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=158)** If I had a second drive, it would appear as D-E-V-S-D-B, as in baby.
>
> **[2:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=166)** The numbers after the drive letters, like SDA and SDB, refer to partitions.
>
> **[2:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=175)** Therefore, D-E-V-S-D-A 1 is the first partition of D-E-V-S-D-A.
>
> **[3:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=184)** While D-E-V-S-D-A 2 is the second partition.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=190)** To create these partitions, all I have to do is to click on New under partition.
>
> **[3:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=201)** Here you decide the size of your partition and the file system, and click on Add.
>
> **[3:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=212)** The last step is to press the Apply button here.
>
> **[3:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=217)** I'm always amazed at how many free resources are available at our fingertips.
>
> **[3:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=223)** Do you now have a good sense of what you can take advantage of?
>
> **[3:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensics-os-distributions?u=76281980&t=226)** There's a lot to learn because each tool has many features.

> [!info]- Semantic Content
>
> **Env Vars:** gui (2), sift (2), sans (1), fdisk (1), sata (1)
> **Code Keywords:** let (5), public (1), interface (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **URLs:** [distrowatch.com](https://distrowatch.com) (1)
> **Cross-References:** we talked about (1)

#### Challenge: Hex editor
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=0)** (kooky music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=5)** - [Instructor] Let's download the Hex editor and give it a try.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=9)** Visit this free Hex editor Neo website.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=13)** Download and install the software.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=17)** As a prep, let's create a text file called Test.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=24)** Open the file and type, "This is a test."
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=32)** Let's save it.
>
> **[0:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hex-editor?u=76281980&t=34)** Your challenge is to open this text file in Neo and inspect it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), try. (1), type, (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (kooky music) (1)

#### Solution: Hex editor
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=0)** - [Instructor] Let's go ahead and download Neo.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=8)** We'll select the first option.
>
> **[0:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=11)** The download is now complete.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=15)** Open the file.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=18)** Click Install.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=21)** And click on Close.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=26)** Click OK.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=30)** We created our text file earlier, the test.txt test file.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=37)** Let's open the test text file in Neo.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=42)** Go to File, Open, Open file.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=49)** Choose test.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=51)** Click on Open.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=54)** You see the hex number representation of characters here.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=60)** The original text is displayed here.
>
> **[1:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hex-editor?u=76281980&t=65)** And this is what an offset value looks like.

> [!info]- Semantic Content
>
> **UI Navigation:** open the (2), click on (2), select the (1), go to (1)
> **Code Keywords:** let (2)
> **File Paths:** test.txt (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. File System Fundamentals

#### Understanding file systems
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=0)** - [Instructor] Understanding how an operating system, or OS, stores files is critical in computer forensics because criminals use this knowledge to hide information.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=12)** File systems determine how an OS stores data on a storage device.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=21)** One of the most widely used Windows file systems today is File Allocation Table, or FAT.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=29)** There's a newer Windows file system called New Technology File System, or NTFS.
>
> **[0:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=38)** The main difference between FAT and NTFS is the file structure databases used to store file metadata and to keep track of the locations of the file data FAT uses file allocation table as a file structure database while NTFS uses master file table, or MFT.
>
> **[1:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=64)** Let's go over some terminology here before we go any further.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=69)** In the context of file systems, metadata refers to the data about files.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=75)** For example, data such as file names, timestamps, and other file attributes are metadata.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=84)** File data is the actual data stored in a file.
>
> **[1:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=89)** It's also important to know the difference between sectors and clusters.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=95)** Each sector often contains 512 bytes of data.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=102)** Newer hard drives use 4,096 byte sectors.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=108)** Clusters are the smallest logical unit of file storage.
>
> **[1:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=114)** They consist of one or more sectors.
>
> **[1:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=118)** Although, they use drastically different hardware to store data, solid state drives still use the same naming convention, such as sectors, in operating systems.
>
> **[2:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=133)** Knowing the distinction between logical and physical file storage units is crucial, too.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=140)** Logical file storage unit is what is recognized by an operating system.
>
> **[2:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=146)** Clusters are logical units.
>
> **[2:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=150)** Physical file storage unit is what is recognized by a storage device.
>
> **[2:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=156)** Sectors are physical units.
>
> **[2:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=159)** Therefore, we know that your physical storage device deals with sectors, while your operating system handles logical storage units, namely clusters.
>
> **[2:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=172)** Your operating system stores a file at the cluster level.
>
> **[2:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=178)** Because the files are stored in clusters, this is what causes a wasted space problem.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=186)** Let's say that you have a file who size is 2,050 bytes.
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=192)** Also assume that a cluster consists of two sectors.
>
> **[3:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=198)** As you can see in this diagram, your file whose size is 2,050 bytes cannot fit in two clusters.
>
> **[3:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=208)** The file requires three clusters to be stored.
>
> **[3:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=214)** Next time your operating system stores a new file, it must start after the third cluster.
>
> **[3:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=222)** Because of this, there is this unused space in cluster number three, as you can see in blue, and this unused wasted space is called a slack.
>
> **[3:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=235)** When it comes to efficiency, NTFS is more efficient because it uses a smaller cluster size compared to FAT, which means it reduces the amount of select spaces resulting in less wasted spaces.
>
> **[4:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=253)** The latest Windows file system is Resilient File System, or ReFS.
>
> **[4:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=260)** It builds on the successes of its predecessors and is an attempt to address the newly emerging challenges file systems are facing.
>
> **[4:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=270)** ReFS aims at making the Windows file system more compatible, available, and scalable.
>
> **[4:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=281)** However, ReFS has its own shortcomings and is not a replacement for NTFS yet.
>
> **[4:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=290)** Have you noticed that we only focused on Windows file systems in this lesson?
>
> **[4:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=297)** Linux and Mac OS file systems are entirely new topics.
>
> **[5:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=303)** Of course, there are also many more things to learn about Windows.
>
> **[5:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-file-systems?u=76281980&t=308)** Well, we just scratched the surface, are you ready for more?

> [!info]- Semantic Content
>
> **Env Vars:** ntfs (5), fat (4), mft (1)
> **Code Keywords:** let (2), this, (1)
> **Definitions:** refers to (1), is called (1), is an  (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### Understanding the boot sequence
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=0)** - [Instructor] Understanding the concept of boot sequence as a computer forensics investigator is mandatory because you often have to modify it to protect the integrity of your evidence.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=14)** Some of the boot sequence related hardware include CMOS and BIOS.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=21)** CMOS is a volatile memory chip containing time and date information, as well as other configuration information.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=31)** CMOS stands for complementary metal-oxide semiconductor.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=37)** It's a computer chip on a motherboard.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=42)** BIOS stores a program that loads hardware drivers.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=47)** It also loads an operating system.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=51)** Before your operating system is loaded into the main memory, you have to make the memory hardware operational by loading the driver for the memory.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=62)** BIOS stands for basic input/output system.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=69)** The BIOS hardware is now being replaced by a new alternative, which is called unified extensible firmware interface, or UEFI.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=82)** One of the things your BIOS checks when your computer starts is the boot sequence.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=88)** The boot sequence information is stored in your CMOS and the boot sequence setting decides which drive to access to read operating system code.
>
> **[1:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=101)** This is significant to computer forensics, especially because we're always trying to avoid changing the evidence drive accidentally.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=112)** As soon as your operating system has access to your evidence drive, it could attempt to write to it and therefore compromise your evidence.
>
> **[2:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=123)** The best practice is to boot from a drive containing a specialized operating system with pre-installed computer forensics programs.
>
> **[2:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=134)** You can create a USB stick containing a forensic distribution of a Linux operating system.
>
> **[2:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=143)** All you have to do is plug the USB drive into your computer, which will provide an operating system for the machine you're investigating and not touch anything on your evidence drive.
>
> **[2:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=160)** This is just one example of how to leverage your boot sequence for a computer forensics investigation.
>
> **[2:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=168)** There are also many other uses.
>
> **[2:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-boot-sequence?u=76281980&t=172)** By learning more about them, you'll enhance your chance of a successful investigation.

> [!info]- Semantic Content
>
> **Env Vars:** bios (5), cmos (4), usb (2), uefi (1)
> **Definitions:** stands for (2), is a  (1), is called (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Understanding disk/solid-state drives
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=0)** - [Instructor] Data storage drives provide a relatively cheap way of storing data.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=7)** As a computer forensics specialist, you recover data from various sources, such as solid state or hard disk drives.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=20)** Therefore, it's essential to understand how they work to do your job effectively.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=28)** We focus on hard disk drives here because of their complexity compared to solid state drives.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=37)** Let's get started by learning some terminology.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=42)** There are multiple disks inside your hard disk drive.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=47)** Those are called platters.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=50)** On both sides of the platters, you have read write heads.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=56)** That's one read write head on each side.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=60)** A platter is divided into tracks and sectors for addressing purposes.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=68)** Tracks are concentric circular patterns on which data is written.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=75)** Sectors are evenly divided sections of a track that typically holds 512 or 4,096 bytes of data.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=86)** The reason why your platter is divided into tracks and sectors is that they allow you to locate a piece of information.
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=97)** Based on the track number and the sector numbers, you'll know exactly where the data is stored, and that information is stored in a database so that when there's a need to locate the piece of information, you can always come back to the exact location.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=117)** A cylinder is a collection of tracks at the same location on multiple platters.
>
> **[2:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=126)** The number of cylinders, sectors, and heads decides the total capacity of a hard disk drive.
>
> **[2:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=136)** If you have 1000 cylinders, 32 sectors, and 100 heads, the total capacity of the hard disk drive can be computed by multiplying all these three numbers.
>
> **[2:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=151)** We assume that each sector consists of 512 bytes, so we multiply 512 at the end of the process.
>
> **[2:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-disk-solid-state-drives?u=76281980&t=163)** As a result, in this case, you have 1.6 gigabytes of capacity based on the number of cylinders, sectors, and heads.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case, (1)
> **Versions:** 1.6 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Understanding the master boot records (MBR)
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=0)** - [Instructor] Once your BIOS selects a disc drive to boot from, the master boot record or MBR on your disc is accessed.
>
> **[0:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=11)** The physical drive you're booting from contains the MBR, and it keeps track of information on partitions on a storage device such as locations of your partition, the sizes of your partitions, and the bootable status of your partition.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=28)** Because at least one of your partitions has to be set up as bootable so that your computer can boot.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=36)** The disc you're booting from can also contain boot loader software.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=42)** The boot loader is a program that displays the menu screen you see when you start your computer.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=50)** And it typically gives you options for different operating systems.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=56)** For example, it could display a message that allows you to select either Windows or Linux operating system.
>
> **[1:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=65)** Your MBR is located in the first sector of a storage device.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=72)** There are some software solutions you should be aware of regarding MBR.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=77)** You can use FDISK and its graphical user interface version called, GParted to edit your MBR.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-master-boot-records-mbr?u=76281980&t=86)** The Grand Unified Boot Loader or GRUB is an example of a boot loader typically installed by your Linux operating system.

> [!info]- Semantic Content
>
> **Env Vars:** mbr (5), bios (1), fdisk (1), grub (1)
> **Code Keywords:** from, (1), interface (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** such as (1), for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Understanding Partitioning
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=0)** - [Narrator] Partitioning creates an illusion to make a single physical storage device appear as multiple logical devices.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=8)** For example, you can divide a physical drive into two partitions, one for the operating system and applications, and the other for data.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=19)** By separating the data from the OS and applications, if it's necessary to reinstall the OS and applications, the data is not affected.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=30)** In general, partitioning allows for more efficient and organized storage device management.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=39)** Another very important use of partitioning is to make it possible to install multiple OS's on a single physical drive.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=49)** This way you can have various OS options during a boot process and choose to boot into a particular OS.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=59)** A typical setup for this is a multiple system that allows you to boot into either Windows or Linux OS on the same computer.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=69)** There are two types of partitions, primary and extended.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=75)** There could be up to four primary partitions.
>
> **[1:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=79)** However, you can overcome this limit by making one of the primary partitions an extended partition.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=87)** The extended partition can have an unlimited number of logical partitions in it.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-partitioning?u=76281980&t=93)** Although the number of partitions depends on the size of the extended partition, Windows OS can be only installed on primary partitions while Linux OS can be installed on a logical partition two.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Prerequisites:** install (1), setup (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Partitioning a USB drive
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=5)** - [Instructor] Let's create one primary partition and one logical partition on a USB drive.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=12)** The tool you need is Gparted.
>
> **[0:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=17)** The first thing to do is to find the right drive.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=22)** Based on the size of the drive, I know devsdb is my USB drive.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=29)** On my USB stick, one primary partition takes up the whole drive, and its format is fat32.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=39)** I have to resize this partition to make room for creating my second partition.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-partitioning-a-usb-drive?u=76281980&t=45)** Please note that you need to create an extended partition first to house a logical partition in it.

> [!info]- Semantic Content
>
> **Env Vars:** usb (3)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Partitioning a USB drive
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=0)** - [Instructor] How did it go?
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=7)** As I said, let's resize the existing partition to about four gigabytes.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=19)** Let's create an extended partition in the new space.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=26)** Let's label it other.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=29)** Click on add.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=31)** The final step is to create a logical partition in it.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=37)** I'll format the new partition to be EXT4 so that I can install a Linux OS, and I'll label it Linux and click on add.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=49)** That's it.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-partitioning-a-usb-drive?u=76281980&t=50)** All that's left is clicking on this check mark button to apply all operations.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **UI Navigation:** click on (2)
> **Env Vars:** ext4 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Persisting Data

#### Evidence preservation approaches
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=0)** - [Narrator] The first task at a computer crime scene is to preserve evidence.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=6)** The data you collect there may be all you have in solving a criminal case or policy violation, so you should be extremely careful to capture everything possible.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=19)** While in a hurry to collect evidence, it's entirely possible to make significant mistakes, like accidentally adding, deleting, or modifying data.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=33)** The consequences are grave, because the court may not accept the compromised digital evidence you submit.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=42)** This possibility is why we have to do our best to keep our evidence as pristine as possible, which is the primary goal of data preservation in digital forensics.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=56)** Luckily, we have well-established and concrete ways to preserve data.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=63)** The first option is using write-blockers when copying data from a source, such as a hard drive in your computer, a USB drive, or an external data storage device.
>
> **[1:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=76)** As their name suggests, write-blockers prevent writing to an evidence drive.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=84)** After deploying your favorite write-blocker, but before making a copy of a data storage medium, the best practice is to get a hash value.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=95)** This process generates a unique string, represent a specific data set like a partition.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=104)** You can produce another hash value once you get a copy of the partition.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=111)** If the hash values don't match, the source and its copy are not identical.
>
> **[1:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=119)** Mounting and unmounting drives are also relevant to data preservation, especially in Linux and Unix operating systems.
>
> **[2:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=131)** Mounting is a mechanism an operating system or OS uses to make a drive or partition visible.
>
> **[2:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=141)** If the OS doesn't recognize a data source, it cannot do anything to it, which is why we always want to begin with a drive unmounted before starting our forensic work.
>
> **[2:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=155)** With data preservation techniques, such as write-blockers, hashing, and unmounting, there is much less chance for mishaps.
>
> **[2:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/evidence-preservation-approaches?u=76281980&t=166)** They also ensure that your evidence collection process is sound and valid.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Code Keywords:** match, (1)
> **Env Vars:** usb (1)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### Understanding the role of write blockers
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=1)** - [Instructor] Computer forensics rule number one is not damaging your evidence.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=7)** Here, the evidence refers to your evidence drive.
>
> **[0:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=11)** The risk you're constantly running into is your operating system writing to your evidence drive.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=20)** One of the countermeasures to keep this from happening is using a writeblocker.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=28)** There are primarily two different types of writeblockers.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=33)** The first type is hardware right blockers.
>
> **[0:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=38)** This picture shows what a hardware writeblocker looks like.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=45)** Usually these devices sit between an evidence drive and a forensic workstation.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=51)** The second type is a software writeblocker, and sometimes it's built into a computer forensic suite like in Case or FTK.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=61)** You could also accomplish the same writeblocking effect by changing the configuration of your operating system.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=71)** In addition to writeblocking, there are other factors to consider to protect the viability of your evidence.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=78)** Physical security or chain of custody is one of them.
>
> **[1:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=83)** By taking care of it, you know who had access to the physical evidence drive when and why.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=92)** You can record all this information in a chain of custody form.
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=97)** Let's say making an image of an evidence drive using a writeblocker went flawlessly.
>
> **[1:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-the-role-of-write-blockers?u=76281980&t=105)** If your evidence drive still turns out to be compromised, now you know it happened through unauthorized physical access.

> [!info]- Semantic Content
>
> **Definitions:** refers to (1), is a  (1)
> **Code Keywords:** let (1)
> **Env Vars:** ftk (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Using a software write blocker
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=0)** - [Instructor] Let's enable write blocking on Windows 10 so that the operating system is not able to write to a USB drive.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=9)** To enable write blocking, we have to run a program called R-E-G-E-D-I-T, or Registry Editor.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=19)** To run this program, press the Windows key and R key together.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=30)** Type regedit, as I did here.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=35)** Click on OK.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=37)** Now you see the Registry Editor window.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=41)** Choose HKEY_LOCAL_MACHINE, choose SYSTEM, and then choose CurrentControlSet and then select Control.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=55)** Do a right-click and choose New, and then select Key.
>
> **[1:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=64)** Changing a registry setting on your computer could be dangerous.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=69)** If you decide to follow what I'm doing, do it at your own risk, but be very careful.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=77)** Now, type StorageDevicePolicies in the box and then do a right-click on the folder.
>
> **[1:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=90)** Choose New and then choose DWORD 32-bit Value.
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=97)** Even if you're running a 64-bit OS, make sure that you still choose 32-bit option.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=106)** Now type WriteProtect.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=111)** Do another right-click, choose Modify and change the value data to 1.
>
> **[1:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=119)** What this does is enabling the write blocking feature.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=124)** A lot of times in computer science, 1 means true while 0 means false.
>
> **[2:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=131)** In this case, the write blocking option is now set to true, and therefore, you're enabling write blocking.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=140)** Now click OK.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=142)** Now let's restart the machine.
>
> **[2:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=146)** The machine has been rebooted.
>
> **[2:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=149)** Let's see our write blocking in action.
>
> **[2:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=152)** We'll create a new folder on the desktop.
>
> **[2:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=158)** Let's name it Test.
>
> **[2:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=163)** Double-click on the folder, click on This PC, and you see the USB Drive here.
>
> **[2:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=174)** We'll try to drag and drop the new folder onto the USB drive.
>
> **[3:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=192)** And you will get this message saying, "The disk is write-protected."
>
> **[3:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=198)** Therefore, the write blocking option is now enabled and working very well.
>
> **[3:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=203)** This software-based write-blocking option is the cheapest way of accomplishing write blocking.
>
> **[3:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=211)** You don't need any special software.
>
> **[3:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-a-software-write-blocker?u=76281980&t=214)** If your operating system doesn't support this type of write blocking option, you'll need to have a special software program to enable write blocking For more serious forensics tasks, you'll need hardware write blockers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), new, (1), case, (1), protected (1)
> **UI Navigation:** right-click (3), click on (2), double-click (1), drag and drop (1)
> **Env Vars:** usb (3), hkey_local_machine (1), system (1), dword (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Using hardware write blockers
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=0)** - [Presenter] Hardware write blockers come in many different forms.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=4)** Let's look at some popular solutions.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=8)** The most basic solution is to connect an evidence drive through a USB interface.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=15)** Here you rely on software for write blocking.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=19)** The hardware simply provides a physical interface between your evidence drive and computer forensics workstation.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=28)** A slightly more advanced solution is a hard drive docking station.
>
> **[0:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=34)** The most significant advantage here is the cleaner form factor.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=40)** There are fewer cables to mess with.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=42)** However, the docking station approach also requires software to block writing.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=50)** Professionals deserve more sophisticated solutions.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=55)** The primary goal is to block writing and avoid accidents to comply with legal standards and requirements.
>
> **[1:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=64)** Let's say that you're conducting an investigation and in the middle of it, something goes wrong with your hardware write blocker, and that's the last thing you want.
>
> **[1:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=76)** These professional-grade hardware write blockers are more expensive, but provide ironclad operations.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=86)** There are some well-known manufacturers of hardware write blockers such as WiebeTech by CRU.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=92)** This company is a manufacturer of many other types of computer forensics equipment too.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=99)** One of the main features of WiebeTech write blockers is more interface options.
>
> **[1:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=105)** This particular product featured here provides USB 3.2 Type-C.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=111)** It also comes with more convenient features like switches and digital displays.
>
> **[1:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=119)** The most advanced hardware write blocking option is hard drive duplicators.
>
> **[2:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=125)** They're fast and primarily plug and play.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=129)** All you have to do is plug in your hard drive and then the duplicator will take care of the rest.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=135)** Therefore, it provides an automated solution.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=140)** When buying a hardware write blocker, base your purchasing decision on the purpose and the nature of your investigation.
>
> **[2:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=150)** You rarely need the most expensive equipment out there.
>
> **[2:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/using-hardware-write-blockers?u=76281980&t=154)** Here the key is that you're making an informed decision.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), let (2)
> **Env Vars:** usb (2), cru (1)
> **Definitions:** is a  (2)
> **Versions:** 3.2 (1)
> **Analogies:** such as (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [presenter] (1)

#### Understanding hashing
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=0)** - [Instructor] Hashing plays a vital role in computer forensics.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=5)** It ensures that a data copy you make remains identical to its source.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=12)** Hashing refers to the process of transforming an input, which is usually a file into an output, which is a unique string associated with that file.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=23)** There are some significant characteristics you should know about hashing.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=28)** First, any slight changes you make in a file will get amplified in considerable changes in its hash value.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=37)** This behavior makes it very easy to detect changes made to a file by accident or on purpose.
>
> **[0:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=46)** Hashing ensures data integrity, meaning no intended changes are made in the data.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=54)** In the context of computer forensics, this means the evidence drive remains the same during your investigation.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=63)** That is, a forensic image or copy of the evidence drive stays the same.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=69)** Therefore, hashing is an essential part of your computer forensics investigation.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-hashing?u=76281980&t=75)** Any non-trivial computer forensics tools should be kept to produce hash values.

> [!info]- Semantic Content
>
> **Definitions:** refers to (1), is a  (1), is an  (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### Hashing algorithms
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=0)** - [Instructor] There are various implementations of hash algorithms.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=4)** One of the well-known hash algorithms is MD5, which has been widely used in digital forensics.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=12)** However, it's proven to be vulnerable.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=16)** Another algorithm called the secure hash algorithm, or SHA, is a more secure version of MD5.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=24)** There are many different variations of SHA.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=28)** Collision is a non vulnerability in hash algorithms.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=32)** It occurs when two different files produce the same hash value when put through the same algorithm.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=41)** As you can see in this diagram, file one and file two are different, but when they go through the same hash algorithm, sometimes it's possible to end up with the same hash value.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=55)** This problem rarely happens, but theoretically speaking, it could occur.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=62)** Collisions have been found in both MD5 and SHA.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=67)** A way to make a hash algorithm less vulnerable is to increase the size of its output.
>
> **[1:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=73)** The bigger the hash value, the less the possibility of a collision.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hashing-algorithms?u=76281980&t=78)** That is, a larger hash value means more secure hashing.

> [!info]- Semantic Content
>
> **Env Vars:** md5 (3), sha (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Case Study: Hashing in FTK Imager
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=0)** - [Instructor] Many of the computer forensics tools available today come equipped with built-in hash functions.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=8)** The primary purpose of these built-in hash features is the verification and validation of your data you're working on in your computer forensics investigation.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=19)** For example, there's a tool called FTK Imager and it comes with both MD5 and SHA hash algorithms.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=31)** An alternative to using these built-in hash options is manually computing hash values.
>
> **[0:38](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=38)** As we saw in another lesson, you can use a Linux hash algorithm implementation such as MD5 Sum.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=47)** In this lesson, let's try the hash features of the FTK Imager.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=52)** First choose file, click create disk image.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=59)** We'll go for the default choice, physical drive, and click on next.
>
> **[1:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=65)** From this list, choose your drive.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=69)** I'm choosing the smallest drive just to make it quick.
>
> **[1:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=74)** Click on finish.
>
> **[1:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=76)** Now it's asking for image destinations.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=81)** Let's click on add.
>
> **[1:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=83)** Now we need to select the destination image type.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=88)** We'll be using the raw image type, which is DD.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=92)** Click on next.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=95)** I chose DD because it's a universal imaging format used by many other tools.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=102)** Here I'll use my case number as 001.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=108)** Evidence number also 001.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=112)** Unique description is going to be test.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=117)** Examiner 001, and I'll type test for the notes field.
>
> **[2:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=128)** Click on next.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=130)** Now I'll choose the image destination folder.
>
> **[2:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=134)** Click on browse, I'm going to choose desktop.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=140)** This way we can see the image being created on our desktop.
>
> **[2:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=146)** The image file name I'll be using is my drive, my drive.
>
> **[2:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=153)** Here you can break your image file into multiple files.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=157)** It's called fragmentation in this case.
>
> **[2:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=161)** I don't want to do this.
>
> **[2:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=163)** That's why I type zero here.
>
> **[2:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=167)** Click on finish, not bad.
>
> **[2:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=171)** There's an option of verifying images after they're created.
>
> **[2:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=176)** By selecting this option at the end of the imaging process, you'll have the hash values of the image files.
>
> **[3:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=184)** Make sure you choose that option and click on start.
>
> **[3:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=190)** As you can see, once the imaging process is over, the FTK Imager tool will display the MD5 hash value of the image and also the SHA-1 hash value of the image.
>
> **[3:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=205)** This demonstrates the built-in hash functions of the FTK Imager tool.
>
> **[3:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hashing-in-ftk-imager?u=76281980&t=212)** Note that the FTK Imager tool computed the hash values before imaging, and then it gets the hash values again after imaging is done, and it shows that the hash values match.

> [!info]- Semantic Content
>
> **Env Vars:** ftk (5), md5 (3), sha (2)
> **UI Navigation:** click on (8), select the (1)
> **Code Keywords:** let (2), type. (1), type, (1), case. (1), this. (1)
> **CLI Commands:** make (2)
> **Cross-References:** as we saw (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Understanding mounting
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=0)** - [Instructor] Mounting is a concept related to partitioning.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=5)** We already learned about partitioning in another lesson.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=10)** Mounting is the process of making a partition visible to an operating system, or OS, and eventually to an end user, especially on a Linux operating system.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=24)** Unmounting is the opposite.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=27)** Connecting the drive and making it available to an OS can be dangerous because your OS can write to it.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=36)** Another concept related to mounting is that of a mount point.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=41)** It's simply a directory where a partition is made visible after mounting is done.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=49)** Let's do a quick demo of mounting here.
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=53)** I already have my USB drive plugged into my computer.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=57)** As soon as you plug in your USB drive, you'll see an icon like this.
>
> **[1:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=64)** What this means is that your OS picked up your USB drive.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=70)** This is probably the last thing you want in your computer forensics workstation because your OS could have written to your USB drive, which could be your evidence drive.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=84)** The mounting happened because the operating system you're using is not a forensic copy.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=91)** In a forensic copy, the OS won't automatically mount a USB drive like this.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=99)** Therefore, we'll start by unmounting our USB drive.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=106)** To unmount a USB drive, type umount, and then the name of the partition.
>
> **[1:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=115)** But in this case, we don't know what the name of the partition is for the USB drive.
>
> **[2:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=122)** To know the partition name, we need another command, which is fdisk.
>
> **[2:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=128)** Type sudo fdisk -l.
>
> **[2:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=134)** You cannot run your fdisk command directly because it requires administrator privilege to run, so that's why I type sudo in front.
>
> **[2:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=147)** This is equivalent to running a program as an administrator on a Windows operating system.
>
> **[2:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=156)** Now I'm ready to press enter.
>
> **[2:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=159)** Press enter.
>
> **[2:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=161)** It's asking for the password and press enter.
>
> **[2:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=167)** The default password is kali. That's what I typed.
>
> **[2:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=171)** Here we see all the storage devices connected to our computer and partitions on them.
>
> **[2:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=179)** The storage device we're interested in is our USB drive.
>
> **[3:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=184)** In this case, the USB drive and its partition are showing up as /dev/sdb1.
>
> **[3:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=194)** And this is exactly the name to use to unmount the USB drive.
>
> **[3:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=199)** I know the USB drive is SDB because SDA is the first disk drive letter referring to a hard drive, and I also know there's only one hard drive attached to my computer.
>
> **[3:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=215)** The next drive letter is supposed to be SDB, which is my USB drive.
>
> **[3:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=223)** Now we're ready to unmount the USB drive.
>
> **[3:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=226)** Type sudo umount /dev/sdb1.
>
> **[3:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=237)** Please note that it's not unmount, but umount.
>
> **[4:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=243)** And then /dev/sdb1 is the name of the partition.
>
> **[4:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=249)** Pay attention to the naming convention here.
>
> **[4:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=253)** /dev/sdb refers to the entire physical drive and /dev/sdb1 refers to a partition on that drive.
>
> **[4:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=268)** When we're referring to the individual partitions on the same physical drive, we are using a numbering system, such as one, two, and three as we could have more than one partition on a physical drive.
>
> **[4:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=286)** In this case, we are dealing with one partition, which is why we have number one next to the drive name stb.
>
> **[4:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=297)** Now press enter, and as soon as you do that, you can see that the USB drive icon color is changing.
>
> **[5:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=309)** It's grayed out and it also says... And it also says not mounted in between the parentheses.
>
> **[5:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=322)** What this means is that now the drive is invisible to the operating system.
>
> **[5:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/understanding-mounting?u=76281980&t=327)** We just learned how to unmount the partition, and this is very significant in your computer forensics investigation because a lot of times in your investigations, you want your storage device to stay unmounted.

> [!info]- Semantic Content
>
> **Env Vars:** usb (15), sdb (2), sda (1)
> **Code Keywords:** case, (3), this. (2), let (1)
> **CLI Commands:** sudo (3)
> **Definitions:** refers to (2), is a  (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Mounting manually
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=0)** - [Instructor] A storage device connected to your computer is not mounted by default in a forensic copy of your Linux OS.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=9)** When you're not dealing with an evidence drive and want to mount the drive, here is how you do it.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=16)** First, identify the drive and the partition you want to mount.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=23)** From our lesson earlier, we know the partition is /dev/sdb1.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=30)** To mount it, first of all, we need to create a mount point.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=36)** A mount point is a directory where you want to see the content of a drive.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=43)** Let's create a new directory by typing mkdir and then the name of your mount point.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=54)** And we'll call it usb_mounted.
>
> **[1:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=61)** Press Enter.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=63)** Type ls to see what's in the current directory.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=67)** Press Enter.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=69)** As you can see, now we have a new directory created, called usb_mounted.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=78)** Let's see what's inside the newly created directory.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=82)** Type cd and the name of the mount point, which is ./usb_mounted/.
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=94)** Press Enter.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=95)** Type ls and press Enter.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=99)** There is nothing in the mount point directory we just created.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=104)** Let's go back to the parent directory.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=107)** Type cd ..
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=111)** cd here means change directory.
>
> **[1:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=115)** The two dots signify the parent directory, so change your directory to the parent directory.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=124)** We're going back to where we started.
>
> **[2:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=127)** Press Enter.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=129)** Type ls again.
>
> **[2:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=131)** We're back to the directory that has another directory called usb_mounted.
>
> **[2:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=138)** Now we're ready to mount our partition.
>
> **[2:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=142)** The command is sudo mount file format type option,
>
> **[2:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=154)** which is -t vfat, and then the name of the partition, which is /dev/sdb1 and the name of the mount point.
>
> **[2:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=171)** And the directory was ./usb_mounted/.
>
> **[2:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=179)** The dot in front of the forward-slash symbol means the current directory.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=186)** Now press Enter.
>
> **[3:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=188)** Password is kali, K-A-L-I.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=191)** Press Enter.
>
> **[3:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=193)** If you don't get any error messages, the partition has been successfully mounted.
>
> **[3:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=199)** Let's see if it works.
>
> **[3:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=202)** To check if the partition has been mounted successfully, we have to go to the mount point.
>
> **[3:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=210)** Let's do change directory to the mount point.
>
> **[3:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=215)** Type cd ./usb_mounted/.
>
> **[3:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=224)** Press Enter.
>
> **[3:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=226)** Type ls.
>
> **[3:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=228)** Now you see the files and the folders on the partition because the partition has been successfully mounted.
>
> **[3:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/mounting-manually?u=76281980&t=237)** As a computer forensics investigator, it's nice to have a way to control when a drive is mounted and unmounted.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (4), cd (4), mkdir (1), sudo (1)
> **Code Identifiers:** usb_mounted (6)
> **Code Keywords:** let (5)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Hashing in Kali
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=0)** (cheerful electronic music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=5)** - [Instructor] Let's try to use a hash algorithm to conduct an interesting experiment.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=10)** We'll create a file first.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=12)** Type touch test.txt.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=18)** The touch command creates a new empty file in Linux.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=23)** Press Enter.
>
> **[0:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=25)** Let's see if the file was created.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=28)** Type ls.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=31)** It is there.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=32)** Let me edit it using a Linux editor called Vim.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=36)** Type vim test.txt.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=42)** Press Enter.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=43)** Press I to insert a text.
>
> **[0:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=46)** Type, "This is a test!"
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=53)** Press Escape.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=55)** Type :wq.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=59)** So this writes the file and then quits the session.
>
> **[1:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=64)** Press Enter.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=66)** Let's generate a hash value.
>
> **[1:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=70)** Type sha256sum test.txt.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=81)** Press Enter.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=82)** That's your hash value.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=84)** Here is your challenge.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-hashing-in-kali?u=76281980&t=87)** Find out if modifying the file name also changes its hash value.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), type, (1), type : (1)
> **File Paths:** test.txt (3)
> **CLI Commands:** ls (1), find (1)
> **Tools:** vim (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful electronic music) (1)

#### Solution: Hashing in Kali
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=0)** - [Instructor] To change the file name, type move, mv space test.txt space challenge.txt,
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=15)** mv space test.txt space challenge.txt, press Enter.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=28)** Let's see if the file name got changed.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=31)** Type ls, press Enter.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=33)** There's no test.txt, but challenge.txt is the new file.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=40)** Let's generate a hash value.
>
> **[0:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=43)** Type sha256sum space challenge.txt
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=54)** Press Enter.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=56)** Is the hash value the same as the one we just generated earlier?
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=62)** It looks the same and they are the same.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-hashing-in-kali?u=76281980&t=67)** Now we know changing the file name doesn't change the hash value.

> [!info]- Semantic Content
>
> **File Paths:** challenge.txt (4), test.txt (3)
> **CLI Commands:** mv (2), ls (1)
> **Code Keywords:** let (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Aquiring Data

#### Data acquisition approaches
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=0)** - [Narrator] After taking essential precautions to preserve your evidence, you're finally ready to acquire your data.
>
> **[0:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=8)** There are many ways of acquiring data in computer forensics.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=13)** Static acquisition is one of the most basic and common data acquisition methods.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=19)** Static acquisition retrieves data from non-volatile sources, such as a hard drive or USB drive.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=27)** In a non-volatile source, data remains on the storage device after turning the power off.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=35)** Live acquisition is becoming more necessary these days because of encryption.
>
> **[0:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=41)** Live acquisition acquires data from a volatile source, such as main memory, also known as random access memory, or RAM.
>
> **[0:50](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=50)** In a volatile source, data goes away from the storage device after it's turned off.
>
> **[0:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=57)** In addition to static and live acquisition types, there is another way of acquisition, which is remote acquisition.
>
> **[1:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=65)** Remote acquisition is done through a network connection and involves a client-server architecture.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=71)** You often install a client on a machine from which you want to retrieve the data.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=77)** The current trend is that live and remote acquisition practices are becoming more prevalent due to the encryption challenges I mentioned earlier.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=86)** Static acquisition is more difficult, especially these days, because a data drive gets encrypted when a computing device is inactive.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/data-acquisition-approaches?u=76281980&t=96)** This means, by the time you're trying to do static acquisition, all you can get is an encrypted version of the data you're seeking.

> [!info]- Semantic Content
>
> **Code Keywords:** static (5)
> **Env Vars:** usb (1), ram (1)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** such as (2)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### Static acquisition with open-source tools
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=0)** - [Instructor] There are plenty of open-source utilities out there you can use to get an image of a drive.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=7)** We'll use an open-source tool called dd to get an image of a USB drive.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=13)** Our goal here is to get an image of an entire physical drive rather than a partition on the physical drive.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=21)** Therefore, we'll be using /dev/sdb instead of /dev/sdb1
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=31)** to refer to our USB drive.
>
> **[0:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=34)** We've already looked at finding out how a USB drive is recognized in a file system on Linux.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=42)** The command to use for our imaging task is very simple.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=48)** Type sudo, space, dd, space, if.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=56)** IF here stands for input file.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=59)** Equal sign, forward slash, dev, forward slash, sdb, instead of sdb1, which is a partition.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=72)** Next, type a space, and then of, equals sign.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=77)** OF here stands for output file.
>
> **[1:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=82)** After the equal sign, type the target file name of the image.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=87)** Let's use dot, forward slash, usb, underscore, image.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=96)** The dot here stands for the current directory.
>
> **[1:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=100)** And then the extension dot dd.
>
> **[1:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=105)** Press enter.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=107)** Because you're using sudo, it's asking for the password.
>
> **[1:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=113)** I type the password, and I'm pressing enter.
>
> **[1:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=118)** The imaging process just started, and until it's done, your command prompt won't return.
>
> **[2:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=125)** One way of checking whether the file has been actually created is to open another terminal window to see the name of the file showing up in your directory.
>
> **[2:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=136)** Go to file, choose new window.
>
> **[2:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=143)** Type ls and then press enter.
>
> **[2:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=145)** As you can see, the file has been created.
>
> **[2:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=151)** This file will be getting bigger and bigger as the imaging process is being done.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=157)** Now, I'll type ls, space, dash l to list some more details of the file.
>
> **[2:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=166)** Press enter.
>
> **[2:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=168)** This is the file size.
>
> **[2:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=172)** Let's try ls dash l again.
>
> **[2:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=176)** Press enter.
>
> **[2:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=177)** As you can see, compared to the previous file size, it's getting bigger.
>
> **[3:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=186)** This means that the imaging process is going on successfully.
>
> **[3:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=193)** dd is one of the most basic tools out there you can use to get your simple imaging task done, but there are also more advanced tools for the imaging task you can use to make your job as a computer forensics investigator a little easier.
>
> **[3:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-with-open-source-tools?u=76281980&t=212)** One of these tools is dcfldd, a forensic version of dd.

> [!info]- Semantic Content
>
> **CLI Commands:** ls (3), sudo (2), make (1)
> **Definitions:** stands for (3), is a  (1), means that (1)
> **Code Keywords:** let (2), if. (1), return. (1)
> **Env Vars:** usb (3)
> **Tools:** command prompt (1), terminal (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Static acquisition case study with dd
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=0)** - [Presenter] There's also a way to split your image file into multiple fragments.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=6)** Fragmentation is sometimes necessary because you have to put the files on media with very limited capacities.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=15)** To do this, we can use dd together with another Linux utility.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=21)** Type sudo space dd space input file equals sign forward slash dev forward slash sdb.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=35)** which is the physical USB drive connected to my computer, and type space.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=42)** Instead of typing OF, or output file and then equals sign target file name here, we'll use something called a filter.
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=53)** A filter in Linux takes the output of a previous command and passes that output as an input to the next command.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=63)** Whatever the dd input file command produces, its output will go to the following command as an input.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=71)** In this case, the output sent as an input will be the image file, but we'll split it into multiple files.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=80)** The command we need for this is split.
>
> **[1:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=83)** The split file size of my choice is 650 megabytes.
>
> **[1:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=90)** That's why we type pipe here, space split space dash b space 650m space dash space usbimage dot.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=112)** Whatever comes after the dot will serve as an extension so that when the files are created, they'll begin with the file name usbimage dot and extension.
>
> **[2:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=128)** The file extension will be different in a sequential order to reflect the fact that a single image file is now split into multiple files.
>
> **[2:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=137)** Press enter.
>
> **[2:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=139)** The imaging process has begun.
>
> **[2:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=141)** While it's getting done, we can see the progress in the second window.
>
> **[2:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=146)** Type ls, press enter.
>
> **[2:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=150)** So far there have been four files created: usbimage.aa, usbimage.ab, usbimage.ac, usbimage.ad.
>
> **[2:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=164)** There'll be some more files coming after this.
>
> **[2:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dd?u=76281980&t=168)** By learning about these additional options for imaging, you have more flexibility in dealing with whatever situation is thrown at you.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), case, (1), this. (1)
> **CLI Commands:** sudo (1), ls (1)
> **Env Vars:** usb (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [presenter] (1)

#### Static acquisition case study with dcfldd
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=3)** - [Instructor] The imaging process is finally over.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=7)** Let's check the usbimage.log file.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=14)** To see the content of this file, We'll be using the more command.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=20)** Type more and the name of the log file.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=24)** usb image.log.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=31)** Please note that there was a typo.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=35)** So it's i-a-m-g-e.l-o-g instead of i-m-a-g-e.l-o-g.
>
> **[0:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=46)** But it still works.
>
> **[0:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=47)** Press Enter.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=49)** As you can see, the md5 hash value of your image is now showing.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=56)** Let's also check whether the image file has been created.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=63)** Type ls, press Enter, and you can see the usbimage.dd file with the correct spelling.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=84)** As you can tell, dcfldd has more computer forensics features compared to dd.
>
> **[1:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=92)** Plus, it's easier to use.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=95)** Although the dcfldd software is free, you may still have to install it to your favorite Linux distribution.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/static-acquisition-case-study-with-dcfldd?u=76281980&t=106)** If you want to learn more about dcfldd, please check out this website.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **CLI Commands:** ls (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Live acquisition case study with a commercial tool
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=0)** - [Instructor] FTK Imager can serve as a live acquisition tool too.
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=5)** Here is how you do it.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=6)** Go to file, choose capture memory.
>
> **[0:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=11)** You have to specify what is your destination path.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=15)** Next, click on browse.
>
> **[0:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=18)** Let's make our destination folder as our desktop.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=22)** Click OK, and then click on capture memory.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=28)** The memory capturing process has been finished successfully.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=32)** Click on close.
>
> **[0:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/live-acquisition-case-study-with-a-commercial-tool?u=76281980&t=34)** You can see the memory dump file named memdump.mem.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Env Vars:** ftk (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Live acquisition with a memory dump file
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980&t=5)** - [Instructor] To analyze the result of your live acquisition, you still need a separate software program.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980&t=12)** The software tool can be as simple as a hex editor.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980&t=16)** In this challenge, open the memory dump file in a hex editor and try to see what's inside.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/challenge-live-acquisition-with-a-memory-dump-file?u=76281980&t=24)** Do a search to find sensitive information.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)

#### Solution: Live acquisition with a memory dump file
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=0)** - [Instructor] Let's open Neo.
>
> **[0:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=7)** Go to file, open, open file.
>
> **[0:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=15)** Choose mamdump.mam.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=19)** Click open.
>
> **[0:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=20)** Let's do a search.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=22)** Click on the find icon.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=26)** Make sure string is chosen and type password.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=32)** Click find.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/solution-live-acquisition-with-a-memory-dump-file?u=76281980&t=35)** As you can see, you can find every occurrence of the word password in your entire memory dump file like this, and you can keep going.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** let (2), this, (1)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 7. Putting It All Together: Analyzing Data and Generating Reports

#### Forensic data analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=0)** - [Instructor] Digital forensics investigators spend most of their time analyzing their data.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=6)** Data analysis is the culmination of a forensics investigation process.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=13)** All your work for preparing, preserving, and acquiring data is essentially for making the analysis step possible.
>
> **[0:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=23)** Analyzing data involves lots of searching and indexing is a technique that helps accelerate the search process.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=33)** All major digital forensics products use indexing to improve their speed.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=39)** Autopsy is an open source digital suite.
>
> **[0:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=44)** It comes with powerful search and report generation features.
>
> **[0:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=49)** It's nice that you can download Autopsy for free and try it for learning purposes.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=55)** Commercial forensic software suites are pretty expensive and even cost prohibitive for individuals.
>
> **[1:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=63)** If you work for a small organization with limited budget or have personal needs to conduct digital forensics investigations, Autopsy is a perfect tool for that.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=75)** We have a couple of dedicated lessons to check out Autopsy more.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=81)** It's also nice to explore specialized forensics utilities like Free Hex Editor Neo.
>
> **[1:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=90)** You can download the latest version here and play with it.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=95)** Neo provides some handy features like bit shifting and file type information extraction.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=102)** Criminals are always trying to mislead you to protect their secrets, but a tool like Neo can help you see through all their deceptions.
>
> **[1:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=113)** In addition to changing file extensions and shifting bids in a file, crooks and spies also hide information in picture files.
>
> **[2:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=123)** A steganography tool like OpenStego is what they use to do this.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=130)** We have a lesson for you too and you'll get a decent exposure.
>
> **[2:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=135)** There are many more data analysis techniques and mechanisms out there.
>
> **[2:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/forensic-data-analysis?u=76281980&t=141)** What we covered in this course is only the tip of the iceberg, Although not exhaustive, you'll still have a good feel for what analysis means in digital forensics by the time you're done with all the lessons in this chapter.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is an  (1)
> **Code Keywords:** this. (1)
> **Cross-References:** we covered (1)
> **Exercise Files:** download the (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Indexing
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=0)** - [Instructor] Indexing refers to the process of creating a catalog by going through an evidence drive and recording the location of each data item.
>
> **[0:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=11)** To give you an analogy, creating an index for a book is similar to creating an index for an evidence drive.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=19)** Once you create an index in your book, you can quickly go to a page of your interest based on a keyword.
>
> **[0:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=27)** The same applies to your evidence drive.
>
> **[0:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=31)** Once you have your indexing done, the speed of searching gets faster because there's now a direct mapping between your searched keyword and the location containing the keyword in your evidence drive.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=45)** All you have to do is to go to a location according to the index without really having to do the same search over and over again every time you look for a keyword.
>
> **[0:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=56)** Initially, indexing takes a long time because it has to go through every single data item in your evidence drive, and then somehow record the location of each data item according to its keyword.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=71)** Therefore, typically when you try to acquire an image out of an evidence drive, you always have an option to do your indexing first.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=81)** Indexing is sometimes referred to as preprocessing.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/indexing?u=76281980&t=86)** When you see the word preprocessing, you should associate that word with indexing.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2)
> **Definitions:** refers to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Searching
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=0)** - [Instructor] Having the ability to search is essential in digital forensics.
>
> **[0:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=4)** Investigators always need to do their keyword searches tied to their investigations.
>
> **[0:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=10)** To demonstrate how a search is conducted in a computer forensic suite, let's use Autopsy.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=19)** Autopsy is one of the most popular forensic software suites out there, and I highly recommend it.
>
> **[0:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=26)** We'll start by creating a new case.
>
> **[0:29](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=29)** Click on new case.
>
> **[0:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=33)** Type your case name here.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=35)** We'll use 001.
>
> **[0:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=37)** Choose your base directory.
>
> **[0:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=39)** Desktop is fine.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=42)** Click on next.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=45)** And use case number 001.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=48)** You don't have to fill out the rest of the information.
>
> **[0:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=51)** Click on finish.
>
> **[0:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=55)** Now, the next step involves loading an image.
>
> **[0:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=59)** I already created an image of an evidence drive.
>
> **[1:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=62)** We'll be using that image for this exercise.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=67)** Click on next.
>
> **[1:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=69)** Click on disc image or VM file.
>
> **[1:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=74)** Click on next.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=77)** Click on browse.
>
> **[1:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=79)** Choose usbimage.001.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=84)** Click on open.
>
> **[1:26](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=86)** By the way, you'll find this image file in your exercise files folder.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=91)** Click on next.
>
> **[1:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=94)** Click next again.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=96)** Click on finish.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=99)** Your image is now successfully loaded.
>
> **[1:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=102)** Go ahead and select data sources.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=106)** Click on the plus sign.
>
> **[1:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=109)** Click on the plus sign again.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=112)** Click on the plus sign next to uspimage.001, Select volume 2.
>
> **[1:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=119)** And you can see the files inside that volume.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=124)** One of the things you notice here is files with X marks.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=129)** What this means is that the files have been deleted.
>
> **[2:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=133)** However, your computer forensic suite is able to detect these deleted files and you can even recover them by right clicking on the file.
>
> **[2:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=143)** For example, dreamCar.jpg, choose extract files.
>
> **[2:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=151)** We'll now try to export the file to our desktop.
>
> **[2:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=159)** Click on open and click on save.
>
> **[2:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=165)** You can see the file just created on my desktop.
>
> **[2:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=169)** Let's see if I can open it.
>
> **[2:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=173)** What a handsome car.
>
> **[2:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=174)** Let's go ahead and close it.
>
> **[2:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=177)** Next, we'll conduct a search, which is our primary mission here.
>
> **[3:02](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=182)** We'll try to find all the files that contain a name, in this case, Bill.
>
> **[3:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=187)** So click on keyword search.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=191)** Type Bill.
>
> **[3:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=194)** Click on search.
>
> **[3:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=195)** Out of all the files we have on the disc image, only one file contains the name Bill.
>
> **[3:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=203)** This is a handy feature not only for conducting your computer forensics investigation, but also for anything you do daily.
>
> **[3:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=212)** You always need to look for a file according to a keyword.
>
> **[3:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=217)** Of course, any computer software suite should have a feature like this, but they're not all created equally.
>
> **[3:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/searching?u=76281980&t=226)** How well their search feature works could be an excellent way to measure the quality of a computer forensic suite.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (17)
> **Code Keywords:** let (3), case. (2), case, (1), this, (1)
> **CLI Commands:** find (2)
> **Code Identifiers:** dreamcar (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Generating a Report
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=0)** - [Instructor] Having the ability to auto generate a report is a very useful feature.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=6)** Investigators usually auto generate their reports and use them as a starting point.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=14)** We'll use Autopsy to demonstrate how you can auto generate a digital forensics report.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=21)** We already loaded our image here.
>
> **[0:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=25)** First, let's mark a piece of evidence so that it appears in my report.
>
> **[0:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=32)** Let's pick a file here.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=35)** I'm going to choose Dreamcar.jpg again.
>
> **[0:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=42)** Do a right click and then choose add file tag.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=48)** Next, select tag and comment.
>
> **[0:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=52)** I'm going to leave a comment here as comment.
>
> **[0:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=58)** Click on okay.
>
> **[1:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=60)** And now you can see a new icon next to the file.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=66)** Now the evidence is marked and it's going to show up in your report for sure.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=72)** Let's generate our report.
>
> **[1:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=74)** Go to tools.
>
> **[1:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=77)** Choose generate report.
>
> **[1:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=81)** The default choice is fine, which is HTML report.
>
> **[1:27](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=87)** Click on next.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=91)** Click on next, and click on finish.
>
> **[1:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=96)** And click on close.
>
> **[1:39](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=99)** To see your report, go to reports, click on HTML report.
>
> **[1:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=106)** Double click it.
>
> **[1:49](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=109)** Now, next to the star icon here, you can see tagged files.
>
> **[1:56](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=116)** Click on the link and you can see the actual picture file.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=124)** Let's go back.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=130)** The evidence you marked is now showing up with your comments, which is comment.
>
> **[2:17](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=137)** Any mainstream computer forensic software suite should come with a feature to auto generate a report like this.
>
> **[2:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/generating-a-rreport?u=76281980&t=145)** If you don't see it, you should seriously doubt the quality of the software.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), go to (2)
> **Code Keywords:** let (4), this. (1)
> **Env Vars:** html (2)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Case Study: Hex editor analysis of a file with a wrong extension
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=1)** - [Instructor] Criminals often simply change the extensions of files to mislead computer forensics investigators.
>
> **[0:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=9)** With the wrong file extension, it's difficult to know exactly what the original file type was.
>
> **[0:16](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=16)** To find out the true file type, you could use a hex editor.
>
> **[0:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=21)** We have a mystery file here called secret.jpg, and now I'll try to open it with a built-in Windows Photos app.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=36)** The Windows Photos app is complaining because this is not a picture file and that's our clue that something's not right with a file extension.
>
> **[0:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=48)** Let's close the Photos app and then open Neo.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=54)** Click on file, open, open file, select secret.jpg.
>
> **[1:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=67)** Click open.
>
> **[1:08](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=68)** What you see here is all in hex numbers.
>
> **[1:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=74)** These beginning bits of the file are called the file header signature.
>
> **[1:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=80)** The file header signature of this file is 50 4b 03 04 14 00 06 00, and this is our clue.
>
> **[1:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=100)** It also shows xml here, and we know somehow it's related to xml, but we don't know exactly what file type this is.
>
> **[1:52](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=112)** For later use, let's copy the file header signature.
>
> **[1:59](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=119)** Now let's close Neo.
>
> **[2:04](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=124)** There are tables of file header signatures and they're called magic tables.
>
> **[2:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=129)** You can find them on the internet.
>
> **[2:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=133)** Based on the file header signature, one of the possibilities is Microsoft Office Word file.
>
> **[2:21](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=141)** Let's try to change the file extension of the image file and see what happens.
>
> **[2:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=148)** Let's try docx.
>
> **[2:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=152)** docx presenter.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=157)** It's asking whether I really want to do this, and the answer is yes.
>
> **[2:43](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-hex-editor-analysis-of-a-file-with-a-wrong-extension?u=76281980&t=163)** Let's open the file, and the file opens successfully, which means that this is the right file type and it says "This is a test!"

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), type, (1), this, (1)
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), open the (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Hex editor analysis of a bit-shifted file
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=0)** - [Instructor] Criminals shift bits in a file to hide a secret.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=6)** To reveal the secret, you need a hex editor to shift the bits back to their original positions.
>
> **[0:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=14)** Here we have a mystery file called secret.txt.
>
> **[0:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=19)** Let me try to open this file using Notepad.
>
> **[0:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=24)** I don't know what happened to the original text, but my strong suspicion is that the bits in the file might have been shifted.
>
> **[0:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=35)** To know whether this is true or not, I'm going to open this file in Hex Workshop, a commercial hex editor.
>
> **[0:45](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=45)** Compared to Neo, Hex Workshop provides more features in its trial version.
>
> **[0:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=54)** Go to file, click open, choose secret.txt, click open.
>
> **[1:05](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=65)** You'll find the secret.txt file in your exercise files folder.
>
> **[1:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=72)** We'll try to shift the bits to your left first.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=75)** Go to tools, operations, shift left.
>
> **[1:24](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=84)** Choose eight bit unsigned byte.
>
> **[1:31](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=91)** Click okay.
>
> **[1:33](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=93)** It's still scrambled.
>
> **[1:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=97)** Now let's try to shift the bits to your right.
>
> **[1:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=101)** Let's close the file.
>
> **[1:44](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=104)** Don't save the changes.
>
> **[1:48](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=108)** Let's open the file again.
>
> **[1:51](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=111)** File, open, Secret.txt.
>
> **[1:55](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=115)** Click open.
>
> **[1:57](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=117)** Now I'll try to shift the bits to my right.
>
> **[2:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=120)** Go to tools, operations, shift right, choose eight bit unsigned byte.
>
> **[2:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=132)** Click okay.
>
> **[2:14](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=134)** As you can see, the secret message is now revealed.
>
> **[2:19](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=139)** The admin password is password.
>
> **[2:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=143)** Shifting bits is one of the most basic techniques you can use to hide your secret.
>
> **[2:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/hex-editor-analysis-of-a-bit-shifted-file?u=76281980&t=150)** Maybe you can use this technique to keep your secret diary.

> [!info]- Semantic Content
>
> **File Paths:** secret.txt (4)
> **Code Keywords:** let (4)
> **UI Navigation:** go to (3), open the (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Case Study: Steganography
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=0)** - [Presenter] Steganography is a way to hide information inside the picture file.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=6)** Just like any other files, we store pictures in zeros and ones on our computer.
>
> **[0:13](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=13)** The smallest unit of an image file is a pixel, and a picture file stores its pixel information and binary numbers in a REST or file format.
>
> **[0:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=25)** Assume that we use 24 bits to store a pixel.
>
> **[0:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=30)** If it changed the last bit of each pixel data, it won't change the pixel too much in terms of its color.
>
> **[0:40](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=40)** This is why we can change a picture by embedding our own information into the pixel data and still make it look indistinguishable from its original version.
>
> **[0:53](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=53)** If we have 10,000 pixels in a picture, we have 10,000 opportunities to change their binary representations slightly.
>
> **[1:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=66)** OpenStego is a free steganography tool.
>
> **[1:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=71)** You can download it from this website.
>
> **[1:15](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=75)** Let's give it a try.
>
> **[1:18](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=78)** The user interface is relatively simple.
>
> **[1:23](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=83)** The first field asks for a message to hide.
>
> **[1:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=88)** I already created the secret message called message dot txt.
>
> **[1:35](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=95)** You'll find the message dot txt file in your exercise file folder.
>
> **[1:41](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=101)** Let's open it, and this is what it looks like.
>
> **[1:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=107)** And let's go ahead and load it.
>
> **[1:54](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=114)** The cover file refers to an image where my secret message will be embedded.
>
> **[2:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=120)** It's this image file, olives dot png, and let's load it too.
>
> **[2:10](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=130)** I'll put stego file as a new picture file to be created out of my cover file and will contain the secret message file information.
>
> **[2:20](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=140)** I'll just specify the path and the file name here.
>
> **[2:25](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=145)** We'll call the new file stego dot png.
>
> **[2:30](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=150)** Click open.
>
> **[2:32](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=152)** We have an option to encrypt the secret message.
>
> **[2:37](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=157)** We'll use the default encryption algorithm, which is AES.
>
> **[2:42](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=162)** We'll also provide the password.
>
> **[2:46](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=166)** That's it.
>
> **[2:47](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=167)** Click on hide data, and you see the stego file I just created.
>
> **[2:58](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=178)** Let's open the stego dot png file side by side to the olives dot png file.
>
> **[3:07](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=187)** Can you tell the difference?
>
> **[3:09](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=189)** I can't.
>
> **[3:11](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/case-study-steganography?u=76281980&t=191)** It'll be extremely difficult to find out which image is the one containing secrets, unless you created it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), try. (1), interface (1)
> **Analogies:** picture (5), just like (1)
> **Definitions:** is a  (3), refers to (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** rest (1), aes (1)
> **UI Navigation:** click on (1), open the (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [presenter] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=0)** - Thank you so much for watching this course.
>
> **[0:03](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=3)** I hope you really enjoyed it.
>
> **[0:06](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=6)** If you're interested in taking your skills a step further, I suggest you check out my other courses.
>
> **[0:12](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=12)** Protecting Your Network with Open Source Software is an excellent introduction to network security, a newly emerging field of digital forensics.
>
> **[0:22](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=22)** Another course I recommend is my Network Forensics course that builds on my network security course.
>
> **[0:28](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=28)** When you're ready to advance your knowledge even more, I recommend my [[Operating System Forensics]] course.
>
> **[0:34](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=34)** Again, I'm Jung Woo.
>
> **[0:36](https://www.linkedin.com/learning/cybersecurity-foundations-computer-forensics/next-steps?u=76281980&t=36)** Thank you so much for joining me, I'll see you next time.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - thank (1)


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