---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-mobile-devices-and-platforms
url: "https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms"
duration_minutes: 118
duration: 1h 58m
level: Intermediate
updated: 6/29/2023
learners: 28628
skills:
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQEjWT-pm322YQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1570724627125?e=2147483647&amp;v=beta&amp;t=vfaJG_hc7buOyOhxK5Eqk0kypgzWc1ckYQ0E0HUfUqI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Wireless Networks]]'
next_courses:
  - '[[Ethical Hacking- Hacking IoT Devices]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":15,"total":19,"prev":"Ethical Hacking- Wireless Networks","next":"Ethical Hacking- Hacking IoT Devices"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Mobile%20Devices%20and%20Platforms.md)

![Ethical Hacking: Mobile Devices and Platforms](https://media.licdn.com/dms/image/v2/C4D0DAQEjWT-pm322YQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1570724627125?e=2147483647&amp;v=beta&amp;t=vfaJG_hc7buOyOhxK5Eqk0kypgzWc1ckYQ0E0HUfUqI)

# Ethical Hacking: Mobile Devices and Platforms

> Mobile devices are used for our most sensitive transactions, including email, banking, and social media. But they have a unique set of vulnerabilities, which hackers are all too willing to exploit. Security professionals need to know how to close the gaps and protect devices, data, and users from attacks. Join cybersecurity expert Malcolm Shore as he explores the two dominant mobile operating syst

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms) | 1h 58m | Intermediate | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Keeping your mobile devices safe](#keeping-your-mobile-devices-safe)
  - [Before watching this course](#before-watching-this-course)
  - [Course disclaimer](#course-disclaimer)
- [**1. Mobile Technology**](#1-mobile-technology) (4 videos)
  - [Understand and test for mobile vulnerabilities](#understand-and-test-for-mobile-vulnerabilities)
  - [Static analysis of applications](#static-analysis-of-applications)
  - [Dynamic analysis of applications](#dynamic-analysis-of-applications)
  - [Mobile web testing](#mobile-web-testing)
- [**2. Android**](#2-android) (12 videos)
  - [Understanding the Android operating system](#understanding-the-android-operating-system)
  - [Understanding the Android security model](#understanding-the-android-security-model)
  - [Preparing for Android testing](#preparing-for-android-testing)
  - [Extracting and reading the manifest file](#extracting-and-reading-the-manifest-file)
  - [Extracting and reading JavaScript code](#extracting-and-reading-javascript-code)
  - [Recreating Java source code with JAD](#recreating-java-source-code-with-jad)
  - [Browsing applications directly with JADX](#browsing-applications-directly-with-jadx)
  - [Getting command-line access with ADB](#getting-command-line-access-with-adb)
  - [Install an Android emulator from the SDK](#install-an-android-emulator-from-the-sdk)
  - [Dynamic analysis of Android applications](#dynamic-analysis-of-android-applications)
  - [Using Drozer to analyze applications](#using-drozer-to-analyze-applications)
  - [Checking for scam phones](#checking-for-scam-phones)
- [**3. iOS**](#3-ios) (8 videos)
  - [iOS applications and vulnerabilities](#ios-applications-and-vulnerabilities)
  - [Securing iOS applications by design](#securing-ios-applications-by-design)
  - [Jailbreaking for command-line access](#jailbreaking-for-command-line-access)
  - [More jailbreak and extractor tools](#more-jailbreak-and-extractor-tools)
  - [Preparing to test iOS applications](#preparing-to-test-ios-applications)
  - [Extracting properties and class headers](#extracting-properties-and-class-headers)
  - [Disassembling iOS executable code](#disassembling-ios-executable-code)
  - [Advancing into dynamic analysis of iOS](#advancing-into-dynamic-analysis-of-ios)
- [**4. Security Shepherd**](#4-security-shepherd) (3 videos)
  - [Taking a look at Security Shepherd](#taking-a-look-at-security-shepherd)
  - [Watching for bad cryptography](#watching-for-bad-cryptography)
  - [Insecure data when in developer mode](#insecure-data-when-in-developer-mode)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Keeping your mobile devices safe](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=0)** - The smartphone and smart devices in general have, over recent times, dominated the personal and business technology landscape.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=8)** Few people travel without at least one, if not two mobile phones, as well as a tablet or two.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=15)** Unfortunately, the use of mobile devices offers a great opportunity for malicious interference, such as industrial espionage, surveillance and peeping into a personal's private activities, and cybercrime.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=28)** Making sure that mobile device applications are security tested is now as important as business systems testing.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=36)** I'm Malcolm Shore, and I've spent a career helping governments and businesses protect their systems.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=42)** I'd like to invite you to take this course and learn how to test mobile devices.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=46)** Let's get started with mobile devices.

> [!info]- Semantic Content
>
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### [Before watching this course](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980&t=0)** - [Narrator] This is a practical course, and during this course, I'll be mainly using [[Windows]]-based tools to interact with the mobile devices.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980&t=8)** I'll also be using the VirtualBox environment to run a [[Ubuntu]] GNOME virtual machine.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980&t=14)** And I'll be running applications at the command line on the mobile devices.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980&t=18)** Below the user interface, these are [[Linux]]-based systems.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980&t=22)** You should be competent in computer, network and mobile technologies, and be familiar with the basic Windows and Linux command line interfaces.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980&t=30)** We'll use software tools for the [[Android]] testing, but you'll require an iPhone or iPad that can be jailbroken and used for iOS testing and preferably not one that you use for your personal or work activities.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Linux]] (2), [[Ubuntu]] (1), [[Android]] (1)
> **Code Identifiers:** iphone (1), ipad (1), ios (1)
> **Tools:** command line (2)
> **Env Vars:** gnome (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Course disclaimer](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=0)** - [Narrator] This is one of a series of [[Ethical Hacking]] courses, and it uses a range of third-party testing tools.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=6)** Some are commercial [[Microsoft Products|products]] and some are open-source.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=10)** The download and installation instructions for all tools used in this course is available as a PDF in the associated course material.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=17)** While we've done our best to ensure the tools we used and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=30)** Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=39)** The testing tools we demonstrate are extremely powerful.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=42)** They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=51)** Again, we can't provide assurance that the software hasn't been compromised when you download it.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=56)** And so, as for any other software from the Internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [narrator] (1)


### 1. Mobile Technology

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand and test for mobile vulnerabilities](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=0)** - [Instructor] The rapid growth and variety of applications of mobile technology has brought with it many new threats.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=8)** The functionality of the platforms and the new technologies being introduced all offer a broader attack surface while security is struggling to keep up with the demands not only of the technology, but of usability.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=22)** The infrastructure supporting mobile technology is now quite complex.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=26)** The challenge of achieving non-intrusive security is most pronounced on mobile platforms, and the many flaws found over the last few years have squashed any idea that the mobile operating systems are somehow less vulnerable than their IT counterparts, all of which goes to make the job of the security tester critical to the continuing growth and success of mobile device use.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=53)** The Open [[Web Application Security]] Project, [[OWASP]], started life by providing a framework and tools for testing web applications.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=63)** However, its tremendous success spurred the creation of additional [[Security Testing]] projects in mobile, and more recently, [[IoT|Internet of Things]].
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=72)** The OWASP Mobile Security Project, whose web page is shown here, is a good place to start in looking at the threats to mobile applications and the best practices in mobile device and [[Application Security]].
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=86)** OWASP maintains a list of mobile threats that should be checked, and a key deliverable from the OWASP project is the top 10 threats list.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=95)** This provides a useful start point for testing and is a baseline hygiene check for any mobile application.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=103)** While the project is now closed, these are still relevant.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=107)** Let's take a quick look at each of them.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=110)** Improper platform usage.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=113)** This category covers the misuse of a platform feature or failure to use platform security controls, including [[Android]] intents, platform permissions, misuse of touch ID, the Keychain and other security controls in the mobile operating system.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=132)** Insecure [[Data Storage]] combines two of the threats from the 2014 top 10 insecure data storage and unintended data leakage.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=142)** Unfortunately, there are far too many ways in which these issues can occur.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=147)** In a recent study of mobile apps, it was found 5% transfer personal information to a third-party server, and about half transmitted device and location information.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=159)** Insecure communications covers poor handshaking, incorrect SSL versions, weak negotiation, clear text communication of sensitive assets and other similar issues.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=171)** Even supposedly secure communications can prove to have weaknesses through issues such as poor random number generators.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=180)** Insecure authentication, when authenticating the end user, or through bad session management is the next big threat.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=187)** This can include failing to identify the user and to correctly maintain the user's identity throughout the session.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=195)** Insufficient [[Cryptography]].
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=197)** This issue is highlighted with a weakness found in MD4 and MD5 some years ago.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=203)** But in general, cryptography is an area of significant concern because it's extremely difficult to design and code good cryptographic systems.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=211)** Then the proprietary [[Algorithms]] should be approached with suspicion.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=216)** Insecure authorization includes all threats related to failures in authorization, specifically to user-restricted function or access-controlled data.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=227)** Client code quality is a catch all for code-level implementation problems in the mobile client, such as buffer overflows, format string vulnerabilities, and various other coding mistakes.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=240)** Code tampering covers binary patching, local resource modification, method hooking, method swizzling, and dynamic memory modifications subsequent to the application being loaded.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=253)** This can be done through changing the contents of memory, changing the system APIs that the application uses, or modifying the application's data and resources.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=264)** Reverse engineering.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=266)** This is an interesting category of threats, as it's the means by which testers validate security and provide recommendations for improvement to the developer.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=275)** However, if an adversary gets ahold of the application and reverse engineers it, they're much more likely to exploit vulnerabilities in the application rather than reporting them.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=287)** Extraneous functionality.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=289)** Often developers include hidden back door functionality or other internal development security controls.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=295)** They're not intended to be released into production.
>
> **[4:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=299)** Or maybe some form of amusement, such as what are known as Easter eggs.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=303)** These are hidden functions which appear when special combinations of key strokes or mouse clicks are used.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=309)** There are many more threats.
>
> **[5:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=311)** The 2016 list of significant threats has 91 entries, so while the form factor may be small, the testing activity isn't.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=321)** One of the key goals of the OWASP Mobile Security Project is to provide standardization of mobile application testing methodologies.
>
> **[5:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=330)** to ensure users can have confidence in their testing programs.
>
> **[5:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=334)** While specific techniques exist for individual platforms, OWASP provides a general mobile threat model, which applies to any platform and can be customized to meet the needs of both the owner and the tester.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=349)** The guidance is not only intended for testers, but also for developers.
>
> **[5:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=354)** Providing guidance in the development of applications which are built from the ground up with security in mind.
>
> **[6:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=361)** There are different ways of testing.
>
> **[6:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=363)** The ideal mobile assessment combines static analysis, dynamic analysis, and forensic analysis to ensure that the majority of the mobile application attack surface is covered.
>
> **[6:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=377)** The underworld platform is able to be virtualized and so applications can be tested within a virtualized environment.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=384)** When testing Apple applications, however, there is no virtualized environment and so the tester needs to jailbreak a device to use as the testing platform.
>
> **[6:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=395)** A final note.
>
> **[6:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=396)** This testing is designed to identify weaknesses in mobile applications.
>
> **[6:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=402)** And in the case of the iPhone, it's involved running applications on a device.
>
> **[6:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=406)** The techniques we use may not be suitable for forensics use, especially if evidential integrity is required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (6), [[Data Storage]] (2), [[Cryptography]] (2), [[Web Application Security]] (1), [[Security Testing]] (1)
> **Env Vars:** owasp (6), ssl (1), md4 (1), md5 (1)
> **Definitions:** is a  (3), is an  (2), known as (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Speakers:** - [instructor] (1)

#### [Static analysis of applications](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=0)** - [Narrator] Preparing properly for testing will ensure the work is focused, efficient, and effective.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=6)** This means understanding the application functionality, it's workflow and how it interacts with its supporting infrastructure.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=15)** This is particularly important where the application might affect the security of sensitive business back-end systems, the tester needs to use the application and possibly monitor its network traffic through a proxy service.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=27)** Where a potential issue is found, the tester needs to be able to test the application and demonstrate that the issue can be exploited, so preparing a test rig is a key lead-in to the actual testing.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=39)** After preparation, the first phase of testing a mobile application is static analysis.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=44)** Ideally, this is done form the application source code, but if not, then disassembly of the executable code using reverse engineering tools will be required.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=54)** In the latter case, the executable code may be obtained from the relevant application store, or it may have to be extracted from the device.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=62)** A working test environment that provides the services consumed by the application at runtime may also be useful, even at the static analysis stage.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=71)** It's useful for the tester to identify and understand the full set of network interfaces used by the application across cellular, [[Wi-Fi|wifi]], Bluetooth and near-field communication services.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=82)** These all have different characteristics, and potentially introduce different [[Forms]] of threats.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=87)** The types of networking protocols used by the application are important areas of focus for the tester, as these may introduce security features, or may introduce security risks.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=98)** In addition, knowing which components on the mobile phone that the application interacts with is another area of interest for the tester.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=106)** These may include the GPS, cameras, USB, microphone, and so on.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=112)** Another key area of risk is data leakage, and understanding what data the application can access is another useful area for the tester to review.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=122)** Traditional sources of risk include applications which access the address book, messages and email, however, business and social media applications may also include information of a quite sensitive nature.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=135)** Any interaction with other applications on the platform, and especially those which link to [[Cloud Services]] or payment gateways, will need to be reviewed.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=143)** The tester will be interested in various aspects of the server-side environment, such as the hosting provider, authentication services, payment gateway services, as well as an understanding of the [[Application Development]] environment.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=157)** The tester should review the permissions used by the application, the libraries in use, and any information relating to security weaknesses in those libraries.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=166)** The types of objects implemented, and any runtime libraries or files that are called, these all provide the potential for weaknesses to be introduced.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=174)** Another area which is commonly a problem is the use of hard-coded secrets within the application, such as API keys, credentials, or proprietary business logic.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=185)** Manual review of the source code will pick up these issues fairly quickly.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=189)** The overall security model of the application is another area of focus, this includes, in particular, the access controls provided to securely manage external services, and sanitization of inbound data.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=202)** The tester will review the manner in which user authentication occurs, if it occurs, and how robust it is to malicious impersonation.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=211)** Features such as account lock out, single sign on and one time passwords will have a significant impact on the results of the testing.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=220)** Authorizations are also another area of interest, particularly areas such as permissions for files created at runtime, role specific functionality, and elevated privilege flags or values.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=232)** Other areas which may be relevant are licensing checks and tamper detection features.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=238)** Session management processors are an area of potential risk, particularly if the device needs to flush out sensitive information between sessions.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=246)** The tester should ensure both the device and the server side close the session properly on completion, time out or interruption, and look for opportunities to misuse session IDs or otherwise achieve session fixation.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=260)** Understanding the sensitivity of the data being processed, such as credit card numbers, bank account details, medical data and so on, is important when assessing the effectiveness of data protection.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=271)** Testing is particularly important where the data is stored on devices which are or can be taken outside of the application environment, such as [[Cloud Storage]], SD cards and so on.
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=282)** Data stored in logs and in cash locations is also a common source of risk.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=288)** Testing mobile websites differs little from testing browser websites, and the [[OWASP]] guidance is a good start.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=295)** There are countless issues to consider, from cross-site scripting and [[HTML]] injection to cookies and cross-domain policies.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=302)** OWASP provides 12 categories of testing within their Web Application [[Penetration Testing]] Methodology.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=309)** Any vectors which might allow [[SQL]] and XML injection need to be identified and tested.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=314)** Where an application uses a shell, the tester needs to look for ways to inject arbitrary system commands or modify intended commands.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=322)** Encryption of data is a potential area of findings for testers.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=327)** Two key areas of interest in [[Mobile Testing]] are random number generators and certificate management.
>
> **[5:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=334)** An additional security feature which is used in mobile apps is pinning, an application may optionally implement either certificate pinning or public key pinning.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=344)** This is an additional security feature when validating certificates, achieved by checking the presented certificate or public key against one or more hashes of legitimate certificates or public keys associated with the presenter.
>
> **[5:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=356)** The downside of pinning certificates is that when a certificate expires and is renewed, pinning has to be updated.
>
> **[6:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=363)** [[Google]] rotates its service certificates regularly, for example.
>
> **[6:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=367)** Pinning public keys is a little harder to implement, but key rotation is not as much an issue.
>
> **[6:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=373)** Pinning is of sufficient importance for OWASP to have produced a specific cheat sheet to encourage its implementation and testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OWASP]] (3), [[Wi-Fi|Wifi]] (1), [[Forms]] (1), [[Cloud Services]] (1), [[Application Development]] (1)
> **Env Vars:** owasp (3), gps (1), usb (1), api (1), html (1)
> **Analogies:** such as (6), for example (1)
> **Definitions:** is a  (4), is an  (1)
> **Exercise Files:** source code (2)
> **Speakers:** - [narrator] (1)

#### [Dynamic analysis of applications](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=0)** - [Instructor] The second stage of [[Security Testing]] for mobile devices is called dynamic analysis.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=5)** This is focused on looking at what the application does while it's running and what happens to the device storage between starting the application and closing the application.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=16)** A view of the device's file system before running should be obtained, and change files reviewed after the application has been installed and run.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=23)** The test still will look for credentials, payment card information, and other sensitive data being written to the file system and not purged.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=32)** Application communication should be monitored and inspected.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=35)** Looking for unexpected connections, sensitive application data being transmitted in the clear, and phone identification data such as IMEI and user details, which should not be present.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=49)** The protocols used in transactions, particularly across [[Wi-Fi|wifi]] and near-field communications should be identified to detect those with known weaknesses.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=58)** As with any application, the tester will look for ways to bypass or subvert credential entry and object access controls, including brute force attacks where viable.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=68)** Web testing relevant to the application functionality needs to be done, including testing to determine whether client-side [[JavaScript]] code or malicious [[HTML]] or XML can be injected into the application.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=82)** The tester will check the potential for malformation of user and service input into the application and any effect that might have.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=90)** Testing in edge cases where external services such as authentication are not available, need to be tested and unexpected interruptions introduced to test the application's ability to fail safe.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=102)** There are a number of session management checks that can be carried out during dynamic testing, including the application susceptibilities in man in the middle attacks, eavesdropping, session fixation, privilege escalation and so on.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=117)** Dynamic testing is an advanced skill which requires a good knowledge of the application and can involve some quite sophisticated low-level testing.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=126)** The use of systems which hug applications and report on their internal activity can be useful, as can dis-assemblers to reverse engineer source code.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=135)** We'll take an introductory look at the techniques and the tools that we might use, but we won't go too deeply into what is quite an advanced topic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (1), [[Wi-Fi|Wifi]] (1), [[JavaScript]] (1), [[HTML]] (1)
> **Env Vars:** imei (1), html (1), xml (1)
> **Definitions:** is called (1), is an  (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Mobile web testing](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=0)** - [Instructor] When we're testing websites, we'll often use a tool such as [[Burp Suite]] to intercept web traffic and allow us to inspect the web messages, change them and insert new ones.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=10)** We can do the same with our mobile apps.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=13)** When we normally connect, traffic would go from the mobile device directly to the web backend.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=18)** When we use Burp Suite as a proxy, that traffic goes from the mobile app into Burp Suite and is then sent on to the backend application.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=27)** Let's take a quick look at how we set up the [[Android]] phone to proxy.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=31)** We can get to the proxy settings by long pressing the network name and selecting Modify Network.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=37)** We can then check Show Advanced Options and select proxy manual and then we get to the proxy setup screen.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=44)** All we need to do is set the proxy address to the IP address of our server hosting Burp Suite.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=50)** Set the port to 8080 and we're ready to proxy mobile traffic.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=54)** Web testing is out of scope for this course, but if you want to find out more, check out my other courses on using Burp Suite and web testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Burp Suite]] (5), [[Android]] (1)
> **Prerequisites:** set up (1), setup (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Android

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the Android operating system](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=1)** - [Instructor] [[Android]] was first released by [[Google]] in 2008, is based on the [[Linux]] kernel, and typically runs on an ARM processor.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=9)** The Android operating systems have whimsical names, with the first Android 4 release being called Jellybean and a later release, KitKat.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=18)** Android 5 is known as Lollipop.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=20)** Android 6, Marshmallow.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=23)** Android 12 is now in common use, and we're seeing Android 13 on the latest devices.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=28)** Android 14 was released for developer preview in February 2023.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=33)** Many older model mobile devices are still in regular use, and manufacturers will often deploy older versions of Android on their newer models.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=42)** Android 11 is still commonly seen on entry-level phones.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=47)** Google provides an open source platform, but individual phone manufacturers incorporate proprietary code within their deployments.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=54)** Consequently, there are some differences between different manufacturers.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=59)** However, these shouldn't affect testing too much, and the same tools and techniques can generally be used.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=65)** Android doesn't introduce a completely new security model but builds on the Linux security model with enhancements appropriate to the mobile environment.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=75)** One of the main changes is making security application-centric rather than user-centric, allowing for proper sandboxing of applications.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=85)** An Android mobile device consists of a [[Hardware]] platform, on top of which is the Android implementation of the Linux kernel.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=92)** And above that, the Android runtime environment and libraries.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=96)** Pre-installed and user-installed applications, typically in [[Java]], run in the runtime environment and use the application framework for accessing user-level system resources.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=108)** The Linux kernel is the core part of the operating system that mediates access to system resources.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=114)** It's responsible for enabling multiple applications to effectively share the hardware by controlling access to CPU, memory, disk I/O, and networking.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=126)** In addition to the kernel, the operating system contains a range of higher-level functions, such as editors, command line, graphical shells, compilers, and so on.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=137)** An Android system, while it's based on the Linux kernel, is sufficiently different in most other respects that a Linux application won't run on Android.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=146)** And an Android application won't run on Linux.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=150)** Earlier versions of Android used the Dalvik virtual machine to run applications written in Java and just-in-time compilation to bytecode.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=159)** But more recently, this has been dropped in favor of the Android runtime with ahead-of-time, or AOT, compilation.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=167)** Android does provide a Linux-like shell, but it doesn't have the standard tools that come with Linux releases.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=174)** The Toolbox was originally provided for application use, but this was limited, and third-party tools, like BusyBox, are often installed by testers to add these capabilities to Android.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=185)** From Android 6 onwards, Toolbox has been replaced by Toybox.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=191)** This includes familiar Linux commands, such as cats, chmod, copy, rep, ls, makedev, and many more.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=200)** The Landley web page shown here provides a status and roadmap for Toybox.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=205)** In order to test mobile applications, we need to understand how an Android application is generated and deployed and the role of its component parts.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=214)** An Android application is delivered as a package with a .apk extension.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=221)** I've downloaded an app called Peggo to my testing folder.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=225)** While this isn't recognized in [[Windows]], we can change the application extension to zip.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=242)** Now let's have a look at it.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=245)** It might be called an apk, but it's a zip file.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=249)** We can see a number of folders and files.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=252)** The main executable is called classes.dex.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=256)** .dex is the extension used for a Dalvik executable file format, which includes the executable code and the source code.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=263)** We also have a classes2.dex file.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=267)** Multiple dex files are used when the size of a single file exceeds that allowed in the Dalvik executable specification.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=275)** The package also contains a file called AndroidManifest.xml, which is a source of useful information regarding the application's characteristics and planned interactions.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=287)** It also contains a number of subdirectories with additional resources and libraries needed by the application.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=295)** Code runs either as an application, which has a user interface and typically interacts with the user, or a service, which has no graphical user interface and is typically used for long-running background tasks.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=308)** In addition, there are two [[Forms]] of helper routines.
>
> **[5:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=311)** The first is a broadcast receiver, which allows the application to register for specific events, which will then be passed to it for action.
>
> **[5:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=320)** The second is a content provider, which interfaces between an application and file storage, and provides an [[SQL]]-like interface to read, write, modify, and delete data.
>
> **[5:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=333)** SQLite is a common database service accessed via a content provider.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=338)** Another key concept in Android is intents.
>
> **[5:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=342)** These are objects used to manage requests and include an action and the relevant data for the request being made.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=349)** An intent can be used to start an activity, access a broadcast receiver, or start a service.
>
> **[5:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=356)** An application can register to listen for an intent activity request by including it in its manifest file.
>
> **[6:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=364)** An intent can explicitly define its application target, or it can let the system identify the application or applications able to respond.
>
> **[6:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=373)** If there's more than one, Android will display an application picker.
>
> **[6:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=377)** Applications can export activities.
>
> **[6:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=380)** And these can then be accessed by application to application intents.
>
> **[6:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=384)** Applications can also access broadcast receivers and content providers exported by other applications.
>
> **[6:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=391)** There's much more to learn about Android to be a good mobile pentester, but this is sufficient to get us started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (27), [[Linux]] (10), [[Google]] (2), [[Hardware]] (2), [[Java]] (2)
> **Definitions:** is a  (4), known as (1), is called (1)
> **Env Vars:** arm (1), cpu (1), aot (1), sql (1)
> **CLI Commands:** chmod (1), ls (1)
> **Exercise Files:** zip file (1), source code (1)
> **Analogies:** such as (2)
> **File Paths:** androidmanifest.xml (1)
> **Documentation:** specification (1)

#### [Understanding the Android security model](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=1)** - [Instructor] The [[Android]] security model takes a different perspective from [[Linux]] by assuming that the trust boundary is a single application rather than a single user.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=12)** The model builds on this by providing a sandboxed environment for applications, and the next explicit means of allowing interactions between the mobile [[Hardware]], the user, and the application.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=23)** It also introduces the concept of signing applications to ensure trusted provenance.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=30)** Android applications are available from the [[Google]] Play Store, and this is the primary trusted source with over a million applications available.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=38)** However, there are many other sources of Android applications which can be used including vendor-specific application repositories.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=45)** However, there are many other sources of Android applications which can be used, including vendor-specific application repositories.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=53)** Android applications are signed by their developer and each Android application must have a valid certificate.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=60)** These can be self-signed by the developer or signed by an authority such as Verisign or another registrar service.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=68)** Android does not however, do certificate chain validation.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=72)** When an application is installed, it's assigned a unique identifier and it operates within its own application sandbox.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=80)** This ensures that the application cannot interfere with other applications, and other applications cannot interfere with it.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=88)** Files created by the application are stored in the sandbox and by default, accessible only buy that application.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=96)** Shared data is managed through content providers which provide the ability to define read write permissions for other applications.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=104)** Content providers can also be used for application only data.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=108)** By marking the data as not exported, keystores can be used to protect data by requiring a user password for access.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=117)** Permissions are a key building block for security in Android, the Android system, and applications, own resources and data, and to access those another application must make an explicit request by declaring the permissions they need.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=132)** These include things like access to the camera, access to the microphone, access to the contact list, writing to external storage, and so on.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=141)** In general, applications should minimize the permissions they need.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=146)** The set of system defined permissions cover most requirements.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=150)** Applications can, however define their own permissions.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=153)** Permissions are grouped in protection levels with normal protection level permissions, offering little risk, but dangerous protection level requiring explicit user agreement.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=164)** An application declares the permission it needs in its Android manifest file.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=169)** Android uses a technique called intents to achieve interprocess communication.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=175)** An intent is a message requesting an action and optionally providing data.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=180)** An intent can require recipients to have specific permissions in order to process the intent.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=186)** An application component can implement intent filters to specify the type of intents that an activity, service, or broadcast receiver can respond to.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=197)** The are three ways an intent can be used.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=199)** An activity in Android represents a single screen in an application.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=204)** An activity is started by sending a start activity intent.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=208)** The intent may include data, and the activity may return data.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=213)** A service in Android is a component that performs actions in the background without a user interface.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=220)** A service is started by sending a start service intent.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=225)** A broadcast is a message that any application can receive and is sent using one of the three send broadcast intents.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=234)** An intent can be sent explicitly to an application component or it can be implicit, in which case the operating system will find the appropriate recipient component.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=245)** Improvements in security are included in some releases of Android.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=249)** The WPA3 [[Wi-Fi|WiFi]] security model was introduced in Android 10 together with better support for biometrics and additional permissions.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=258)** Android 11 brought in more permissions, and auto reset application permissions after a period in months of inactivity.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=268)** A [[Privacy]] dashboard was introduced in Android 12.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=271)** There was no significant security added in Android 13, but there is a suggestion that Android 14 will block the installation of old applications, which are based on the less secure older [[Software Development]] kits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (19), [[Linux]] (1), [[Hardware]] (1), [[Google]] (1), [[Wi-Fi|Wifi]] (1)
> **Definitions:** is a  (5)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** wpa3 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Preparing for Android testing](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=0)** - [Instructor] There are two environments that we need to install to enable [[Android]] testing.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=5)** The first of these is the [[Java]] SDK, available from the Oracle site shown here.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=10)** There's a number of options available for download and either 8.01 or 8.02 will be fine.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=16)** Select the option for you and download it.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=19)** I'll download and install Java 8.01 for [[Windows]] x64.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=25)** We finish downloading, so let's go install it.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=30)** I'll take all the default features and I'll take the default environment for JRE.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=39)** Okay, we're finished.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=42)** The second environment that we need to load is the Android SDK.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=46)** This can either be installed as part of the full developer's Android Studio, or we can scroll to the bottom of the webpage, and under Get Just The Command Line Tools, we can just load the SDK.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=58)** I'll click on the installer and download and run it.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=64)** We finished downloading, so let's go install it.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=68)** I'll put this into my testing directory in an Android SDK folder.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=75)** Okay that's installed, and I'll now run the SDK Manager to load the basic platform tools.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=81)** I'll deselect all but the Android SDK platform tools.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=89)** And install one package, and I'll accept the license.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=96)** And we're complete.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (5), [[Java]] (2), [[Windows]] (1)
> **Env Vars:** sdk (6), jre (1)
> **Prerequisites:** install (5)
> **Versions:** 8.01 (1), 8.02 (1), java 8 (1)
> **UI Navigation:** select the (1), click on (1)
> **Tools:** command line (1)
> **Speakers:** - [instructor] (1)

#### [Extracting and reading the manifest file](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=0)** - [Instructor] The file AndroidManifest.xml is used to describe the functionality and requirements of an [[Android]] application.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=8)** And it's generated as part of the build process for that Android application.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=13)** This is a compiled XML binary file and, to read it, we'll use a tool called Apktool.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=19)** Let's download and install the tool from the website shown here.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=24)** I'll firstly right-click on the Wrapper Script URL and download it.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=36)** This downloads the APKtool batch file which makes it easy for us to call the tool.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=42)** I'll then follow the link to the APKtool 2.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=50)** And I'll download the latest JAR file, version 2.4.0.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=68)** I'm in a command shell and I've copied the APKtool files into my testing directory.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=73)** Let's make sure it's working.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=80)** Okay, we're good to go.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=84)** When doing [[Mobile Testing]] commercially, you'll usually be given the APK file from your customer.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=90)** However, you may want to test an application from one of the Android stores and you'll need to download it.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=98)** Freeware applications are best sourced from the [[Google]] Play Store, but the standard install expects these to be downloaded and directly installed on an Android device.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=109)** An alternative is to do the first step of a sideload via the Evozi website.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=115)** We can see the page has a link to visit the Play Store.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=123)** We can now search for the app we want.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=127)** Let's enter SMS Reader.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=133)** And we get a list of the relevant packages.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=136)** By clicking on the first one, I can see the URL.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=146)** I'll copy the URL and close this tab.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=150)** I can now paste the URL into the search box in the APK Downloader and generate the download link.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=163)** I now have the link to download the APK.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=167)** I'll click that.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=171)** And the APK file downloads.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=176)** While Google Play Store is the primary source of APK files, there are many other APK download sites on the Web.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=183)** An example is [apkfiles.com](https://apkfiles.com) which has over half a million apps ready to download.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=191)** I've now got APKTool ready to go and I'll have a look at the SMS Reader APK file that I've just downloaded.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=199)** I've called it sms.apk and moved it into my working folder.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=204)** To disassemble the application, I call APKTool with the D command.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=214)** APKTool processes the application file and disassembles it into a directory called sms.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=222)** Let's go and have a look at that.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=229)** We can see there are some subdirectories and two files: apktool.yml and AndroidManifest.xml.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=239)** First, I'll look at the YML file.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=246)** Okay, we can see at the bottom of the screen that we've used version 2.4 of the APKTool... and at the top of the screen that the target was sms.apk.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=268)** The application version code is 26 and its version is 2.17.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=275)** Okay, let's now look at the AndroidManifest file.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=279)** I'll open this in Notepad.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=297)** We can see the Android permissions that are needed for this app, including [[Wi-Fi|WiFi]] and Contacts permissions.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=303)** Below that, we can see the app activity is being declared, starting with the main activity, SMS Reader, Settings activity, and more.
>
> **[5:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=313)** You can download many Android applications to get familiar with their manifest files.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=319)** Let's take a look at another example of the manifest file from an APK, which I've downloaded and called ABank.apk.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=349)** We can see that this manifest file has one interesting difference.
>
> **[5:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=352)** The Android name entries are prefixed with the string md5xxxx.
>
> **[5:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=358)** From Android version 5.1 onwards, by default, the type name of an activity is based on the MD5 of the full name of the type being exported.
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=368)** This allows the same fully qualified name to be provided from two different assemblies and not get a packaging error.
>
> **[6:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=376)** In this manifest file, we can also see an API key being declared.
>
> **[6:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=381)** This is fairly common.
>
> **[6:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=383)** While some keys aren't particularly sensitive, some are.
>
> **[6:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=386)** Between June and November 2013, security research has discovered that developers were putting sensitive API keys into their applications which potentially revealed [[Facebook]], Twitter, Bitly, Flicker, Foursquare, [[LinkedIn]], and Google accounts.
>
> **[6:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=403)** Amazingly, some of these values even had names which included the [[Microsoft Word|word]] secret or private.
>
> **[6:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=409)** While these specific issues have been fixed, the use of hard-coded values continues to be a key one for testers to be aware of.
>
> **[6:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=417)** In addition to understanding the activities and permissions of an application, some things to look out for in manifest files are the application clause, debuggable equals true, and any exported activities.
>
> **[7:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=433)** These are functions that can be called from other applications.
>
> **[7:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=437)** In both cases, they can be misused.
>
> **[7:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=441)** The manifest file, then, can be easily extracted and allows us to profile the application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (8), [[Google]] (3), [[Mobile Testing]] (1), [[Wi-Fi|Wifi]] (1), [[Facebook]] (1)
> **Env Vars:** apk (8), url (4), sms (3), api (2), xml (1)
> **Versions:** version 2 (2), 4.0 (1), 2.17 (1), version 5 (1)
> **File Paths:** androidmanifest.xml (2), apktool.yml (1)
> **Prerequisites:** install (2), you'll need (1)
> **Exercise Files:** download the (2)
> **CLI Commands:** make (1)
> **URLs:** [apkfiles.com](https://apkfiles.com) (1)

#### [Extracting and reading JavaScript code](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=0)** - [Instructor] We can recover the [[JavaScript]] code from [[Android]] applications by processing the downloaded APK file.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=8)** This requires the use of the dex2jar and the JD-GUI tools.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=13)** The first tool, dex2jar, can be downloaded from its SourceForge site.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=18)** This comes as a zip file and includes both [[Windows]] and [[Linux]] tools.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=23)** I've downloaded this already into my Android testing tools directory.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=29)** JD-GUI is available, as are a number of other [[Java]] decompiler tools, from the site shown here.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=36)** It's a standalone graphical tool that displays the Java source code and class elements in a very usable way.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=43)** We'll use it to browse the source code we reconstruct using dex2jar.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=48)** I've already downloaded the Windows zip file into my Android testing tools directory.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=54)** I'll again use the SMS reader application I downloaded to show how we can extract and browse the source code.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=63)** I'll go in to the dex2jar directory and take a look at what's there.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=75)** The SH files are bash scripts and the BAT files, Windows batch files.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=81)** I'll now run the Windows batch file to create the jar file from the SMS APK.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=86)** For simplicity, I've copied the application file sms.apk into this directory.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=101)** This proceeds to decompile the application.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=108)** We can see that we've created an sms-dex2jar.jar file.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=113)** We've now completed the first step of reconstructing the Java application code.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=118)** Let's have a look at it using the JD-GUI tool.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=144)** We can see the structure of the application on the left.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=147)** I'll expand the structure using the plus keys.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=151)** And if I click on an entry, it opens in the right hand pane.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=157)** The open files are shown as tabs above the right hand pane and we can have multiple open and navigate through them by clicking on the tab.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=166)** We can see the top level structure of the SMS application consists of four components.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=172)** The application code and a de.awesome.apps.factory.smsreader and the additional supporting modules of Android, com, and awesome.system.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=184)** We can see the main module starts by importing a number of libraries including speech libraries.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=190)** And as we scroll down, we can see the application code.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=198)** Let's open the com module and take a look.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=202)** This contains three modules.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=204)** [[Facebook]] ads, [[Google]], and karumi.dexter.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=212)** Dexter is an Android library for handling permissions.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=216)** If we open it, we can see that it imports a number of listener permissions.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=222)** Here's the source code for the ABank app which has a slightly more complex top level structure.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=228)** When I expand the Android support module we see multidex, v4, and v7 Android modules.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=239)** In bc, we have java and org.bouncycastle.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=244)** And the latter expands to various crypto and maths folders.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=249)** Bouncy Castle is a lightweight [[Cryptography]] API for Java, developed and supported by the Legion of the Bouncy Castle, a not for profit organization based in Victoria, Australia.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=264)** The application uses another open source library.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=271)** The opentk graphics library.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=275)** Be.axa.mobilebanking expands to the R class, which expands to R, a set of constants.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=283)** And this is an automatically generated set of resource identifiers for all resources used.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=290)** When I expand the entry starting with md50dd, we see a number of application specific routines.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=298)** Reading the manifest file and the source code for applications provides the ability to review and identify issues in the application.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=308)** While reading the code may be confusing as you start testing, with experience, you'll quickly become familiar with the various ways applications are built.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=318)** And you'll develop your instincts for finding issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (7), [[Java]] (5), [[Windows]] (4), [[JavaScript]] (1), [[Linux]] (1)
> **Env Vars:** gui (3), sms (3), apk (2), bat (1), api (1)
> **Exercise Files:** source code (5), zip file (2)
> **UI Navigation:** click on (1), scroll down (1), open the (1)
> **Definitions:** is an  (2), is a  (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### [Recreating Java source code with JAD](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=0)** - [Instructor] We've seen how we can read source code through the JD GUI tool.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=4)** We can also recover the source code through the command line, using the Jad tool.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=9)** This reads an [[Android]] application's class files, and provides proper source code outputs in individual text files.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=17)** Jad hasn't kept pace with [[Java]] development, but it's still a potentially useful alternative to JD GUI.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=24)** The Jad executable is available as a download from the Varaneckas website.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=29)** I've downloaded it and extracted the contents, the Jad executable, into my testing directory.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=36)** As with JD GUI, an APK file must be converted into a JAR file using DEXtoJar before we can process it.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=44)** I'll again use the SMS reader application to demonstrate Jad, and use the jar file I've already created.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=52)** The Jad tool works on class files, so I've copied the Jar file into the Jad directory, and changed its extension to .zip.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=63)** I'll burrow down from the DE directory,
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=74)** until we find the class files, which are in the SMS reader folder.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=79)** This is the folder we need, and I've extracted it already into the Jad directory.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=87)** I'll now run Jad to recover the Java source files from all the class files in the SMS reader folder.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=93)** I'll put them in a new folder called SMS Java, and create them with a Java extension.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=116)** We can see we've created a new folder with Java files.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=120)** I'll look at one of these files with Notepad.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=134)** We can see that Jad has decompiled the class file into a Java source code file, very similar to what we saw in JD GUI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (6), [[Android]] (1)
> **Env Vars:** gui (4), sms (4), apk (1), jar (1)
> **Exercise Files:** source code (4)
> **CLI Commands:** find (1)
> **Tools:** command line (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Browsing applications directly with JADX](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=0)** - [Instructor] A very useful tool which can be used to browse [[Android]] applications is JADX.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=5)** This can be downloaded from the [[GitHub]] site, as a zip archive, or as an executable.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=13)** I've downloaded this, and extracted it into my testing directory.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=17)** So let's take a look.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=19)** We've now got the user interface up and can open an application.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=23)** JADX GUI allows us to directly open the APK file.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=28)** I'll navigate to the SMS reader application.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=32)** JADX has provided two folders in the left pane, a Source folder and a Resources folder.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=38)** If I firstly look at the Resources folder, I can expand that and see the Manifest.xml file is listed, and if I click on that, I can see the XML source.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=52)** In the Source folder, we can see the four main modules at the top-level application structure.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=57)** And if we open the dee.awesome.apps.factory.smsreader, we can see the list of classes it contains.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=66)** And if I click on the main class, we can again see the reconstituted class source file.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=77)** JADX also offers a search function from the navigation main menu item, using the text search icon.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=88)** If I click on this, the first time it will decompile and index the app.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=94)** It allows selective search in classes, fields, methods and code.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=102)** I'll search in code, for the text password.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=109)** And we can see all the occurrences of password in the app.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=114)** JADX powerful search and its ability to simply read APK files, makes it a great option for the first look at an application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (1), [[GitHub]] (1)
> **Env Vars:** jadx (5), apk (2), gui (1), sms (1), xml (1)
> **UI Navigation:** click on (3), open the (2), navigate to (1)
> **File Paths:** manifest.xml (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### [Getting command-line access with ADB](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=0)** - [Instructor] When preparing the environment for testing, we loaded the [[Android]] SDK.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=5)** One of the important testing tools that we loaded with that is called ADB: the Android Debug Bridge.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=11)** This enables us to get command line access to any Android device.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=16)** To use ADB, I need to put the device into developer mode and I can do this by selecting the phone's settings, scroll down and select About, and then tap on the entry Build Number seven times.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=29)** The phone will display a message to say it's in developer mode and add a new entry to the Settings menu called Developer Options.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=37)** The easiest way to run ADB is over USB.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=40)** So I can go into Developer Options and select USB Debugging.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=44)** When I connect it to the computer subsequently, it will then ask whether I want to activate Debugging mode.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=51)** I've got my Android phone connected to the computer using a USB cable.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=55)** Let's look at the commands we can use with ADB.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=60)** In the Basic options, we can see a Devices command.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=63)** Let's use ADB to check what devices it can see.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=68)** Okay, we can see one device here.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=70)** Given there's just one device, ADB will automatically select it.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=74)** If we had multiple devices connected, we would need to specify for ADB which device to use.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=80)** There's also a set of device level commands.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=83)** I won't go into them all right now, but I'll just note some basic ones.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=87)** Push and pull are used to transfer files in and out of the device.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=91)** Put forwarding is a useful feature for investigating traffic from the device using an intercepting HTTP proxy, and ADB offers a number of commands for this: install, install multiple, and uninstall allow application packages to be managed from the command line.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=106)** However, the main command we want to look at right now is shell.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=110)** The shell command provides a BASH-like shell in the Android device.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=113)** Let's try that.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=115)** I've confirmed ADB debugging and we now have a shell.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=120)** 'Kay.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=121)** We're now listing the files inside our Android phone.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=124)** It's worth exploring the device to see how the file bases are arranged.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=127)** However, the key files we're interested in when testing exist in the slash data folder.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=132)** This is where the user loaded applications exist, and slash system, this is where system applications exist.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=139)** Let's look at those two directories.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=141)** Again, it's interesting to explore around here, but for testing, the three areas we're interested in are system app, system priv-app, and system del-app.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=152)** We can see that we have the system application packages listed in APK and ODEX files.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=158)** We noted earlier that applications are zip archives in which the [[Java]] code is stored in the classes.dex file.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=165)** An ODEX is basically a preprocessed version of an application's classes.dex, that is execution ready for Dalvik.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=173)** For our purposes, we can concentrate on the APK files.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=179)** Again, we can see the APK and ODEX files of the priv-apps loaded on the device.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=185)** From the kit-kat release onwards, Android splits its system applications into those that have routine privileges, which are in system slash app, and those that need system-level privileges, which are in system slash priv-app.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=199)** This provides more control over the more dangerous applications.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=205)** Here we see those system applications which were pre-installed on the device, but which have been removed.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=211)** These are not actually deleted, just hidden.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=214)** We can use the Exit command to leave the shell and return to the [[Windows]] command shell.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=219)** It's simple with ADB to extract an application so that we can take a look at it.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=223)** I'll pull down one of the applications we saw in slash system slash del-apps called Linchee and we can take a look at that.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=234)** I've now downloaded this APK from the device.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=237)** I'll start JEDX to take a look a first look at it.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=242)** We can now examine this file, its android dot manifest, in resources, and its source code.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=252)** I won't spend time on this, as our main interest is testing the applications we install.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=257)** Let's go back and see what we can find out about our user applications.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=263)** This gives an error.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=265)** We don't have access to slash data.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=267)** This is protected from normal access as part of the Sandbox Protective Regime for applications.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=272)** To get access, we need to be root and that means jailbreaking our device.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=277)** However, there is another way to do this.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=279)** Using an emulated, or virtualized environment.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=283)** I'll initially look at the virtualized environments available through ADB and then I'll look at how we might use Virtual Box to load a virtualized Android system which has been developed by the Android x86 group.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=295)** However, there is another way to do this using a emulated or virtualized environment.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=300)** I'll initially look at the virtualized environments available through the SDK and then I'll look at how we might use Virtual Box to load a virtualized Android system, which has been developed by the Android x86 group.
>
> **[5:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=313)** There are in fact, a number of alternatives, such as Genymotion, for running applications in a soft device, and it's a matter of preference which you choose.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (12), [[Java]] (1), [[Windows]] (1)
> **Env Vars:** adb (11), apk (4), usb (3), odex (3), sdk (2)
> **Tools:** command line (2), bash (1)
> **Prerequisites:** install (3)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** source code (1)

#### [Install an Android emulator from the SDK](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=0)** - [Instructor] The [[Android]] SDK provides a means of running an emulated Android device.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=5)** The first thing we need to do is to selet the variant of Android we want in the SDK manager, and load it.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=13)** The first thing I'll do is deselect all.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=16)** And then I'll scroll down, Android 4.4.2, and I'll select the ARM EABI version seven-a system image.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=28)** I'll then proceed to install one package, and I'll accept the license.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=34)** This will take a short while, that's finished installing.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=37)** I'll now select "tools" and "manage AVDs".
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=41)** And a panel pops up.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=43)** I can now add an Android virtual device, by selecting "create".
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=47)** I'll call it "Emu", and I'll select the Nexus seven.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=54)** I'll select "target" Android 4.4.2, API level 19, and I'll select the WSVTA skin.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=66)** I'll add a 256 MAG SD card and then press "okay".
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=73)** Okay, we've now finished with the SDK manager, and can go and start the emulator.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=80)** I can use the Android command to list the available targets.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=85)** And I see the Android 4.4.2 target that I've installed.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=89)** I can also list the available virtual devices, and I can see my Emu virtual device.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=96)** I'll now start my emulator.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=100)** We have to wait a few moments while it starts up.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=103)** But here we have our emulated Nexus device.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=107)** I started a new command shell, and I'll now check what devices ADB can see.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=113)** I can see an emulated device.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=115)** Let's go and check it out.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=120)** We're in the device, and we can see from the prompt that we're running as root.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=124)** Let's check.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=129)** And we have full access to all our user applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (8)
> **Env Vars:** sdk (3), arm (1), eabi (1), api (1), wsvta (1)
> **UI Navigation:** select the (3), scroll down (1)
> **Versions:** 4.4.2 (3)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Dynamic analysis of Android applications](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=0)** - [Instructor] I'll download the [[Slack]] [[Team Collaboration]] application and do some dynamic analysis.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=6)** I can download this from the website shown by downloading from the secure server.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=12)** Okay, the download's complete.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=15)** I've moved the APK into my platform tools directory and renamed it slack.apk.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=22)** I can now use ADB to install this on the device.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=28)** Okay, that's a success and we can see the Slack icon on the screen.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=33)** Let's go into the shell and what's happened.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=37)** The first thing is to check the package is installed.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=44)** We can see that com.Slack is now installed as a package.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=49)** And we can see it's installed as com.Slack-1.apk in data/app.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=56)** Let's go and see what data files have been setup.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=61)** We can see the com.Slack data folder at the top of the list.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=66)** Let's see what's in it.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=70)** There's just one file.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=72)** The application libraries which redirect to data/app-lib/com.Slack-1.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=78)** Okay, this is a pretty clean install and there's nothing much to see.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=81)** I can exit the shell now.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=83)** A useful command for dynamic testing is logcat which shows the logs being created by the system and by applications.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=93)** There's a lot of them, including regular LAN heartbeat.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=96)** We can filter this by application.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=98)** But as many messages come out via the system it's useful to just capture all logs for a session and then process them afterwards.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=106)** I'll start capturing logs and then we'll go and run the Slack application.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=112)** I'm back at the emulator and I'll now click the Slack icon.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=120)** I get a welcome screen from Slack and I'm invited to sign in or create a new team.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=126)** I'll create a new team called Exohack, the extraordinary hackers.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=131)** I'll enter my email address.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=133)** I have one setup for testing with Slack.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=138)** Okay, I'll take a note of the URL and got on to the next screen.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=142)** And I'll change my username to malcolm.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=148)** I won't invite anyone else to the group just now.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=154)** Okay, here, we have the main chat screen.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=157)** I'll send a couple of messages to the group and I'll upload a file, and I'll tell them a secret.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=165)** I'll upload one of my recent downloads.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=168)** Which is a report on Operation Saffron Rose.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=175)** And upload it.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=177)** Okay, the upload started.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=181)** Okay, that's enough for now.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=183)** Let's go and do some analysis.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=185)** I'll stop capturing logs now and we'll look at this file in a moment.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=190)** First though, let's go into the device and have a look at what data's been collected.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=197)** Slack has setup its [[Data Structures]] and we've got a number of new folders.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=201)** We have a cache file and in it, an image_manager_disk_cache subfolder.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=208)** There's a number of files here.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=210)** Let's go in and have a look.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=214)** I'll cat one of them to get a look at what it might be.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=218)** I can see that that's a PNG file.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=220)** I'll copy this to a more manageable name and we'll pick it up later.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=225)** I'll also take look at the journal.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=228)** That looks okay.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=230)** I'll look at the [[Databases]] next.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=232)** There's a reasonable amount of material here to look at.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=235)** Note that the T2E39PBE1 an account manager databases have shm and wal files also.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=244)** The wal file is the temporary writer head logging file and the shm is its indexers.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=250)** These are all SQLite databases.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=253)** We'll come back and pick them up later.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=255)** There's no additional data written to the files directory.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=258)** We're about done here.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=260)** So let's get out and retrieve the files.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=262)** I can use the adb pull command to extract the files from the device.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=269)** Okay, I'll click on file1.png.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=273)** It's just a graphic from the program.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=275)** That's fine.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=276)** We need an SQLite viewer to investigate the databases we've extracted.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=280)** And we can get one from the URL shown.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=283)** This is a simple download and [[Windows]] install.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=286)** I have it installed so let's look at the databases.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=289)** Before we do that, however, we need to change their extensions.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=295)** I'll open T2E39PBE1 first.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=300)** We can see this has eight tables.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=302)** Let's go browse the data.
>
> **[5:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=305)** The table messages looks interesting.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=307)** The right-hand column is a blog for the message.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=310)** Let's have a look at those.
>
> **[5:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=313)** And we can see that our secret, that Mary really did have a little lamb, is visible.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=319)** I'll look at the user table.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=321)** This has the user list in it and as we scroll right we can see further information.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=327)** Such as email addresses and user names.
>
> **[5:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=332)** The final thing we'll do is look at the log file from logcat.
>
> **[5:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=336)** This is a large file.
>
> **[5:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=337)** So let's do a find on Slack.
>
> **[5:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=341)** Okay we can see some entries coming up that look interesting and they may be worth further investigation.
>
> **[5:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=346)** However, we'll leave it here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Slack]] (13), [[Databases]] (5), [[Team Collaboration]] (1), [[Data Structures]] (1), [[Windows]] (1)
> **Tools:** slack (13)
> **Env Vars:** url (2), t2e39pbe1 (2), apk (1), adb (1), lan (1)
> **Prerequisites:** install (3), setup (3)
> **Definitions:** is a  (5)
> **CLI Commands:** cat (1), find (1)
> **Code Identifiers:** image_manager_disk_cache (1)
> **Cross-References:** coming up (1)

#### [Using Drozer to analyze applications](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=0)** - [Instructor] There are dozens of [[Security Testing]] tools for [[Android]], ranging from very expensive enterprise-grade systems, which have a comprehensive set of automated tests such as FORTIFY to simple free tools to test for one aspect of security.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=15)** The list of tools is changing daily with many becoming obsolete as time passes, and many new ones appearing.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=21)** The [[GitHub]] site here provides a list of tools which you may wish to look at.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=25)** One notable and accessible tool that we'll take a look at is Drozer.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=29)** Drozer is a full testing framework created by MWR LABS, and is available as a free download command line version or as a full GUI paid version.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=40)** Drozer's pretty useful as it doesn't need root and can run as a normal app using its own bridge.
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=45)** I've downloaded and installed the [[Windows]] version.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=48)** Drozer currently has a bug and is unable to find the javac executable from path when the JDK is installed.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=55)** In order to fix it I'll change the configuration.py file.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=59)** It's in the drozer, Lib, drozer folder and I'll hard code the path to javac.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=65)** Okay, I've now put in my path to the javac executable in the JDK as Program Files\\[[Java]]\\jdk1.8.0_101\\bin.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=77)** The Drozer zip file includes a device agent called agent.apk which we need to push onto the device.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=84)** I'll use ADB to do that.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=86)** I've moved agent.apk into my platform-tools directory.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=90)** Let's install it in my real device.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=94)** Okay, we're installed.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=95)** I'll also need to forward TCP ports to enable the connection.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=102)** I've redirected port 31415.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=105)** That's the port to the Drozer server which the agent runs on the device.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=110)** Before starting the Drozer console I need to start up the agent on the phone.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=114)** Start the app, and at the bottom left switch on the server.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=118)** I'm in the drozer folder, and I'll check what devices are available, and then I'll connect.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=126)** Okay, we can se my HUAWEI phone.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=130)** And we're connected.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=131)** Drozer has a number of plugin modules that it provides.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=134)** And we can use the list command to see what modules are available.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=141)** I'll use the app.package.list module to list the packages on the device.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=147)** This lists the packages.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=152)** And we can see at the top, the com.[[Slack]] package is installed.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=156)** Let's check the information on that package.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=162)** This module provides a good set of information on the package showing its data location, its APK location, the permissions it uses, and those it defines.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=171)** Drozer also analyzes the attack surface of the application, the areas which can be potentially exploited.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=180)** This shows there's four activities and six broadcast receivers exported.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=185)** However the [[Databases]] or content providers aren't exported and Drozer hasn't reported that debugging is on, which is good.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=193)** Let's drill down into one of the activities.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=197)** This lists the four activities that are exported.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=200)** Note that all can be accessed without any permissions being required.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=204)** Drozer can act as an external app and create an intent to access the activity.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=210)** Let's see what happens when we start the DeepLinkActivity.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=216)** Okay, the phone has come up and activated with the sign-in screen.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=221)** This is good.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=222)** We weren't able to bypass authentication.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=225)** I'll do the same for the CallNavigationActivity.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=230)** This produced an error message on the phone saying Drozer has stopped.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=234)** This is safe but unexpected so it may be worth spending more time to see whether there's a bug here which may be exploitable.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=241)** I can do this for all the activities, but it looks as if Drozer is taking care of its authentication quite well.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=247)** We can also get information on the services that are exported.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=252)** We can access the services from Drozer, but need to understand what we need to send as a message.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=258)** However, let's just run a test.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=263)** And we get an error message on the literal baadf00d.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=266)** Let's run that again.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=269)** And we still get unrecognized arguments.
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=272)** We need to get back to our static analysis, and find out what the service does, how we interact with it, and whether it's likely to lead to any security issues.
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=282)** This has been an introductory taste to a quite sophisticated tool.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=287)** There's a lot more to Drozer, and it's likely to be one of the main tools you'll use during your dynamic testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security Testing]] (1), [[Android]] (1), [[GitHub]] (1), [[Windows]] (1), [[Java]] (1)
> **Env Vars:** jdk (2), fortify (1), mwr (1), labs (1), gui (1)
> **Tools:** github (1), command line (1), slack (1)
> **CLI Commands:** find (2)
> **File Paths:** configuration.py (1)
> **Ports:** port 31415 (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)

#### [Checking for scam phones](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=0)** - [Instructor] Sometimes a bargain is not quite such a bargain, especially when we're buying tech [[Microsoft Products|products]] from overseas.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=7)** Let's take a look at a bargain P40 Pro smartphone bought from an online shop in Asia for less than $100.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=13)** The packaging shows that, as ordered, we have been delivered an eight gigabyte RAM, 256 gigabytes storage, deca-core, P40 Pro smartphone.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=23)** When we go to check out the system information on the phone itself, we can see that it in fact does have 256 gigabyte storage.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=31)** So far, so good.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=32)** But notice that the system display doesn't show the RAM, nor the processor information.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=37)** Let's connect via adb and have a look inside.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=41)** I've set developer mode, so let's check devices, adb devices, and we can see we have a device, 0123456789ABCDEF available.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=54)** Okay, let's adb shell.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=57)** And we get a shell with a P40 Pro prompt.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=60)** We can run getprop to check the phone properties.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=67)** And here we see the CPU name, which is showing as a deca-core MediaTek MTK6799.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=75)** And we can see the storage properties are 256 gigabyte and eight gigabyte.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=79)** So far, so good.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=81)** It looks like we did get a bargain, but let's double-check.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=84)** We'll run our df command to check what storage we've got.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=89)** And we can see, there's a data folder of 12 gig and a storage sdcard0 folder of 12 gig.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=99)** We haven't rooted the phone, so we can't see the data folder, but we can see our user storage.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=110)** And if we have a look in storage/sdcard0/ DCIM/Camera, we can say the listing of the two photos I've taken.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=123)** So it appears, in reality, we have a 32 gig storage capacity across our applications and files.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=130)** Let's check our RAM now.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=131)** We can do this by saying cat /proc/meminfo.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=138)** And if we check the first entry, we can see that we have two gigabytes, not the promised eight gigabytes.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=144)** We can also check the CPU specification, cat /proc/cpuinfo.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=154)** And here we see the processor is in fact an MT6580, which is a processor used in 3G phones and has four cores, again, not the 10-core MTK6799 that was promised.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=166)** As always, the moral when buying from overseas online stores is let the buyer beware.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** p40 (3), ram (3), cpu (2), mtk6799 (2), dcim (1)
> **CLI Commands:** cat (2)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. iOS

[↑ Back to Table of Contents](#table-of-contents)

#### [iOS applications and vulnerabilities](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=0)** - [Instructor] An iOS application interacts only with the directories inside its sandbox.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=5)** During installation, iOS generates a UUID and creates a number of container directories for the application inside the sandbox directory.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=15)** Each container directory has a specific role.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=18)** The Bundle Container holds what's known as the application bundle, and the Data Container holds runtime data for both the application and the user.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=28)** The Data Container is further divided into a number of sub-folders that the application can use to sort and organize its data.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=36)** The application bundle is a directory called the application name with .app appended.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=42)** For example, [Batman.app](https://Batman.app).
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=44)** This directory contains the application and its resources.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=48)** For security purposes, this directory has signed its installation time, and any changes to the directory will prevent the application launching.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=56)** The Data Container is a collection of data folders used by the application, including three standard folders.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=63)** The Documents folder is used for user generated content, and the Library folder for application internal data.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=71)** A tmp folder is used to write temporary information which is relevant only for the current application invocation.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=78)** Other folders may exist within the sandbox and these are all application specific folders.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=83)** The location of the standard documents and library directories isn't always the same as the application bundle.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=89)** It's an implementation detail.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=91)** In addition, beginning with iOS 8, Apple introduced a change to the application file structure and splits the data of an application from the application bundle.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=102)** Consequently, some investigation is required to fully understand application and file management.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=108)** And this would be both operating system version and application specific.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=113)** One of the interesting files in the application bundle is Info.plist.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=117)** This is a plain text XML file which contains essential configuration information for a bundled executable.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=125)** And so provides an initial view of the characteristics of the application.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=129)** It exists in the top level directory of the application and provides a set of keys and values describing different aspects of the application which the system uses to configure the application runtime environment.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=142)** A minimum set of descriptive keys should be included.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=146)** The application name, its identifier, its main executable, and so on.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=151)** We'll look at the Info.plist file in detail as we progress through this course.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=155)** The iOS developer page shown lists the keys which should be included in any iOS application.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=161)** And it's useful to understand what they are.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=163)** Application developers can add additional keys as required.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=168)** We won't be covering all the standard web weaknesses which might be present in any application, workstation or mobile.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=175)** These are covered separately in the Web Testing course in this series.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=178)** And the testing techniques are the same whatever the end device.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=182)** However, in addition to the standard web weaknesses, there are some specific iOS issues which we will cover.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=189)** The first area of investigation joint testing is application [[Data Storage]].
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=194)** There are three main options for storage in iOS, SQLite [[Databases]], the keychain and property list files.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=202)** All can use the range of default protection provided by iOS, but require applications to specify the form of protection.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=210)** While files are not normally accessible, testing should take into account there's an attacker with physical access to the device may be able to achieve jailbreak and therefore, be able to more readily access these files.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=222)** Cached and temporary data is another key focus.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=226)** For performance reasons, iOS stores an unencrypted screenshot of an application when it moves to the background.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=233)** And any sensitive data on screen may be recoverable.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=237)** Likewise, request and response data is stored in an unencrypted SQLite database called cache.db which is easily accessed and data recovered.
>
> **[4:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=247)** When reviewing the application, it's useful to check whether it passes sensitive data between processes using URL handlers.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=255)** These will be listed in the application's Info.plist under the UTF bundle URL types section.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=263)** When a developer builds his or her application, they will set the various binary protection flags, data execution prevention, position independent executable, and address space layout randomization.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=275)** Checking these have been set is a good test of application hiding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Storage]] (1), [[Databases]] (1)
> **Code Identifiers:** ios (9)
> **Env Vars:** url (2), uuid (1), xml (1), utf (1)
> **Definitions:** is a  (4)
> **URLs:** [batman.app](https://batman.app) (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Securing iOS applications by design](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=0)** - [Instructor] The iOS operating system is designed to be secure.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=4)** And the way in which Apple manages applications provides additional security over their supply.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=10)** Security in iOS starts when the user switches on the device.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=14)** The Boot ROM [[Hardware]] contains read-only code to bootstrap the system and Apple's public key.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=20)** The public key is used to verify the integrity of the second stage low-level boot code.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=26)** The low-level boot takes the second stage boot load, known as iBoot, from flash memory and verifies its signature before loading it.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=36)** Similarly, the iBoot verifies the integrity of the kernel before loading it.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=42)** This provides a fully secure startup through to kernel, and the remainder of the operating system can then be loaded.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=49)** The operating system provides a number of features able to be used by application developers to secure their code.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=56)** Unfortunately, not all developers use these to their fullest extent, which is why we test applications.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=61)** We've already seen that applications operate within their sandbox.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=65)** They're application directory, meaning that not only can't an application interact in an ad hoc manner outside its sandbox, but also that it's protected from any other application interfering with it.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=78)** There are explicit methods for interacting, such as requesting permissions for access to things such as media, the camera, the microphone, and so on.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=87)** Applications can also export some of their methods to enable interapplication exchanges.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=92)** iDevices include special hardware features which provide further protection against exploitation.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=99)** Memory pages can be marked as write but not execute, using the ARM chip's Execute Never feature.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=105)** This is similar to the Data Execution Protection feature familiar to [[Windows]] users.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=110)** Address space layout randomization ensures that code and data are not still together, and so makes exploitation by overwriting memory locations, much more difficult.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=121)** Position-independent execution, which enables an application to operate from any location in memory.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=127)** Stack canaries can be used to check for malicious or accidental stack overrides.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=133)** Overwriting the stack is a common method for gaining remote code execution, but with a stack canary, an application routine can always check when a function returns that the canary is still alive.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=144)** iOS uses three types of data file.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=147)** SQLite [[Databases]], property lists, and the key chain.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=152)** By default, all data is encrypted at [[Representational State Transfer (REST)|rest]] using a file system key, so that should media be stolen, the information isn't compromised.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=161)** When the device is turned on, this is unlocked.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=164)** The data protection API provides the developer with options for how their data is protected during operation.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=170)** These options are: no protection, the file is open at all times; complete protection, the file is inaccessible when the device is locked; complete unless open, the file is accessible if the application has it open when the device is locked; and complete until first user authentication, the file is always accessible after the first unlock.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=192)** By default, the protection is set to complete until first unlock.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=197)** The key chain has additional protection given its intended use for storing sensitive information.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=202)** This includes such things as allowing items to be stored only when a passcode is set, and being limited to access on this device only.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=212)** iOS applications are delivered to Apple by developers, and Apple will review and sign them prior to including them in the Apple store.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=220)** Only applications which have been signed by Apple can launch on a standard Apple device.
>
> **[3:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=225)** This ensures that the source of applications is trusted, and that malware hasn't infected them.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=230)** However, the review process is not a full, in-depth security test.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=236)** And some applications are released with application-level weaknesses, which is why we not only test out applications before they get released, but also applications from the store.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=246)** An additional feature of the App Store is that it protects application developers from having their software stolen and sold on the black market.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=254)** Some users prefer to jailbreak their device in order to gain access to applications provided through channels other than Apple, known as source repositories or repos.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=264)** But in doing so, they open their device to a substantial risk of infection.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=268)** That's why when we run a jailbreak to open our testing device, it's not recommended that the mobile returns to normal day-to-day use after that.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=277)** Of course, once a device can run applications that aren't signed by Apple, it can run not only special purpose software, such as we use in testing, but also cracked software, illegal copies that are distributed through the black market.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Windows]] (1), [[Databases]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** ios (4), iboot (2), idevices (1)
> **Analogies:** such as (3), similar to (1)
> **Env Vars:** rom (1), arm (1), api (1)
> **Definitions:** known as (2), is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Jailbreaking for command-line access](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=0)** - [Instructor] Testing iPhone applications requires root access to an iPhone.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=4)** And this means breaking the Apple security lockdown, a process called Jailbreaking.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=9)** This can be done from [[Windows]] using the popular Pangu tool.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=13)** Different versions of the tool are available for different versions of iOS.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=17)** Here we can see the download for the latest release of the iOS 9.2 - 9.3 tool.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=23)** There are also Pangu tools for earlier versions of iOS.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=27)** I'd recommend that you obtain a dedicated device to use for testing.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=31)** An older iPhone 4 or 5 is not too expensive.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=34)** And if you're serious about [[Mobile Testing]], then it's useful to have a device configured and ready to go.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=40)** It's preferable not to use your main day to day mobile for this work, as the device will have lower security and may be less reliable than the standard iPhone configuration.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=49)** Jailbreaking requires connecting an iPhone to the PC using its USB cable, and running the Pangu tool.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=56)** We can see the Pangu tool jailbreak screen on this slide.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=60)** As soon as you click jailbreak, Pangu will ask you to change the device's date time into the Beijing time zone.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=67)** It shows you how to do that.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=69)** Remember to change it back immediately after Pangu finishes, to automatic date time.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=74)** The process is mostly automated, so once you've downloaded the software, then just run it.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=79)** Remember to remove any phone passcode before you start.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=83)** And towards the end of the process, you'll need to open the Pangu app on your phone.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=88)** Once the jailbreak is complete, you'll see the Cydia application on your mobile.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=92)** This is an application installation tool, which has a number of beneficial sources of Apple applications.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=98)** I've successfully run the Pangu jailbreak tool on my iPhone 4 device, running iOS 7.1.2.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=106)** And I'll use that to demonstrate iOS application testing.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=110)** The first time Cydia runs, it has to prepare the file base.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=113)** This takes some time and occasionally messages may appear saying that the file base is getting full.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=118)** These can be closed.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=120)** The main Cydia screen is shown here with useful links in the main body and App Store type controls at the bottom.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=126)** The first thing we need to do to enable testing is to load the AppSync plug in for Cydia and load OpenSSH so that we can connect to the device.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=135)** To do this, we use the Cydia search icon on the device at the bottom right of the screen to find and install applications.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=142)** Pretty much as we would on the App Store.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=145)** To load AppSync, type AppSync in the search box and Cydia will find the application from its source repositories. Install that.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=154)** Then go back to search and type OpenSSH and install that.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=158)** Note the sources icon towards the bottom left on the bottom row, which is used to manage the source repositories used by Cydia.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=165)** While a set of standard repositories are configured by default, you may find some tools are in other repositories, and you can have these repositories using the sources function.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=175)** Now we have a jailbroken device with OpenSSH installed, we can can use PuTTY to connect to the device over [[Wi-Fi|WiFi]].
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=182)** I've connected my device to WiFi and checked the IP address.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=187)** Go to Settings, select WiFi, and press the information circle to the right of the network SSID.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=192)** Mine's set to 192.168.1.2.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=196)** I can now connect to it using my standard PuTTY client.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=201)** It takes a little while to connect for the first time, as OpenSSH on the device is generating its SSH keys.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=208)** Eventually, we'll see the login prompt.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=210)** The standard login for the iPhone is a user ID of root and a password of alpine.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=216)** We now have a full command line shown on the iPhone as root, and can see two directories: libraries and media.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=223)** Let's change the top most directory so we can explore the file system.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=227)** This shows the top most file structure and we can see it has a number of redirects.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=233)** For example, var redirects us to /private/var.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=238)** I'll use this shortcut and drop into the var folder.
>
> **[4:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=243)** There's a number of folders here and you might like to spend a bit of time searching through them to see what they contain.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=249)** For instance, let's have a look at the stash folder.
>
> **[4:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=253)** There's a bunch of strange named folders here.
>
> **[4:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=255)** Let's look at one of them.
>
> **[4:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=258)** Here we see another folder named ringtones.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=261)** And if we list that, we can see the ringtones stored on the device.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=266)** While it's interesting to explore, one of the key areas we're interested in, is var mobile.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=271)** So let's go there.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=273)** The first two folders are applications and containers.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=277)** Which we'll be spending time looking at.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=279)** Followed by documents, library, media, and mobile software update.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=283)** The Library and Media folders contain interesting files.
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=287)** Library consists of sub folders containing the various operational files used by the device.
>
> **[4:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=293)** For instance, if we look at the Accounts folder, we can see an sqlite database for Accounts.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=300)** Likewise, if we look at the SMS folder, we can see the SMS database, which if were extracted into open bits, would find is a clear text database of text messages.
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=312)** The Media folder contains the various books, music, and photographs on the device.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=317)** We can see the DCIM directory.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=319)** And by drilling down, we can find the photographs that are on the device.
>
> **[5:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=323)** The main folders we're interested in are Applications and Containers.
>
> **[5:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=328)** Applications contains a number of uuid's.
>
> **[5:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=331)** Likewise, if we list Containers, we also see a similar smaller set of uuid folders.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=338)** Each of these uuid folders represents an application sandbox, including its application bundle and data container folders.
>
> **[5:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=346)** Let's have a look at the Application folder, starting with 73F089B1.
>
> **[5:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=353)** Here we can see a set of folders: Documents, Library, StoreKit, [Viber.app](https://Viber.app), and so on.
>
> **[6:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=362)** If we look at the [Viber.app](https://Viber.app) folder, we can see what Apple calls the viber bundle.
>
> **[6:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=368)** The full set of application files.
>
> **[6:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=371)** The Container folder provides additional data for an application that doesn't use the same application uuid.
>
> **[6:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=377)** So a bit of browsing will help us associate the two.
>
> **[6:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=382)** And here we can see additional viber container files.
>
> **[6:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=386)** Now that your device is open, it may be a good time to change the default root password.
>
> **[6:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=390)** You can do this using the password command.
>
> **[6:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=395)** There's plenty to explore inside the iPhone, and investing a bit of time in getting familiar with the file structure of your specific test device will pay off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (3), [[Windows]] (1), [[Mobile Testing]] (1)
> **Code Identifiers:** iphone (9), ios (5)
> **CLI Commands:** find (5), ssh (1)
> **Env Vars:** sms (2), usb (1), ssid (1), ssh (1), dcim (1)
> **Versions:** 9.2 (1), 9.3 (1), 7.1.2 (1), 192.168.1 (1)
> **Prerequisites:** install (3), you'll need (1)
> **Analogies:** for instance (2), for example (1)
> **URLs:** [viber.app](https://viber.app) (2)

#### [More jailbreak and extractor tools](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=1)** - [Instructor] There are more tools that we can use to access third-party application repositories and to run jailbreaks depending upon the iOS version and the device we are testing.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=11)** Let's check out the list of available tools On the Pangu website.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=15)** We can see that the website includes menu options for jailbreak devices and jailbreak iOS versions.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=23)** I'm at the iOS 16 page, and the first tool we see is Sileem, which is a repository extractor.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=33)** This is an online tool, which means we can install it directly through its mobile connectivity.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=38)** Sileem can load Cydia without requiring system root, so it isn't really a full jailbreak.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=49)** The next tool is Palera1n, which is a semi-tethered tool, meaning we need to run the jailbreak via RPC.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=56)** There are two options for installing this.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=64)** HackSn0w is a new tool which provides an online semi-jailbreak which isn't permanently installed, but will work while the app is running.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=79)** Another tool which uses a different approach is iOS 16++.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=84)** This doesn't jailbreak iOS directly, but installs a web-based operating system which enables jailbreak [[Simulation]] including installing Cydia.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=94)** If you need to run a jailbreak or just extract a tool from a third-party repository, this is a useful reference site.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1)
> **Code Identifiers:** ios (5)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** rpc (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Preparing to test iOS applications](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=0)** - [Instructor] Before starting iOS application testing, we need to install some tools into the device so that we can use them from the command line.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=8)** The first device tool to install is Erica which provides a collection of command line utilities.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=14)** We can do this using Cydia on the device by searching for Erica Utilities.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=20)** Once we have this installed, we can confirm it's working by running the plist utility which is used to extract a nice tidy output from a semi-compiled plist file.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=29)** I'll check this using an SSH connection.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=32)** I'll navigate from my top directory into applications FaceTime.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=38)** I can use the cat command to display the plist, but it comes out in a semi-compiled and not very readable form.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=49)** With plutil, we get the plist displayed in a readable form.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=53)** The next utility which is useful is called Clutch and is again loaded through Cydia.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=58)** You may need to add a source for this.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=60)** I loaded mine through the AppCake source at [http://cydia.iphonecake.com](http://cydia.iphonecake.com).
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=67)** This utility is used to identify all the encrypted applications and reverse engineer them to enable source analysis.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=74)** It decrypts the application and dumps it into an IPA file.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=78)** Let's check we've got Clutch running.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=80)** I've installed Clutch, but I need to set it to executable before I run it.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=87)** I can now list all my encrypted applications.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=92)** We've now got a running Clutch.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=95)** The next tool to load is the strangely named Class-Dump Z.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=99)** Again, you may need to add a source for this.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=101)** I loaded mine from the source at [http://cydia.radar.org](http://cydia.radar.org), which lists it as Class-Dump Z.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=109)** We can look at its help output to confirm it's working.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=112)** The final device tool which we'll need to use for static analysis is IPA Installer.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=118)** Once again, we can install this from Cydia using the standard repositories, and check it's working.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=124)** When testing IOS applications, it's useful to have a simple means of exchanging files.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=129)** To do this, we can use WinSCP.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=131)** The installer is available from the webpage shown here, and it's a simple [[Windows]] installation.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=136)** I've taken the typical installation option.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=139)** One of the [[Data Storage]] options in iOS is SQLite, so it's useful to have an SQLite viewer on hand so that we can extract and investigate these [[Databases]].
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=149)** We can get an SQLite browser from the URL shown.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=152)** This is a simple download in Windows Install.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=155)** iOS applications don't get installed with their source files.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=159)** If we don't have access to the development source repository for the application, and we want to do more than the basic static analysis, we need to progress into the advanced topic of reverse engineering of applications from their binaries.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=172)** While this course isn't intended to teach you how to do assembler level reverse engineering, it will provide an introduction to the topic.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=179)** To do that, we'll need to load a binary code disassembler for the iOS application executable.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=185)** There are a number of different disassemblers for Mac OS, [[Linux]], and Windows.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=189)** The standard tool used by professionals is IDA.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=192)** This is available as a trial download, and you can install it from the website shown here.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=197)** Another disassembler, which we'll look at, is Hopper.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=201)** This is available from Cryptic Apps, and we'll run through the download and installation later during the course.
>
> **[3:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=207)** Another advanced tool that we'll take a first look at is Snoop-It, which we'll use for dynamic analysis of application operation.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=215)** This operates as a device application which can be downloaded through Cydia, after you add repo.nesolabs.de to your sources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Data Storage]] (1), [[Databases]] (1), [[Linux]] (1)
> **Env Vars:** ipa (2), ssh (1), ios (1), url (1), ida (1)
> **Prerequisites:** install (5)
> **Code Identifiers:** ios (4)
> **CLI Commands:** ssh (1), cat (1)
> **URLs:** [http://cydia.iphonecake.com](http://cydia.iphonecake.com) (1), [http://cydia.radar.org](http://cydia.radar.org) (1)
> **Tools:** command line (2)
> **Definitions:** is called (1), is a  (1)

#### [Extracting properties and class headers](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=0)** - [Instructor] There are two [[Forms]] of iOS applications.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=3)** Encrypted apps and unencrypted apps.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=6)** While we can go directly to work on unencrypted applications we need to decrypt an encrypted one before we can start static analysis.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=14)** We'll use Clutch with the -i switch to list all the encrypted applications on the device.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=20)** We can see we have a number of encrypted applications on the device including one called Bubbsie which I've downloaded from the app store.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=27)** Notice it has an index of eight.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=29)** To decrypt Bubbsie I need to run Clutch again, specifying this application with the -d switch.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=38)** Clutch decrypts the application and displays the destination path of the unencrypted ipa file.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=44)** We'll be using the set of folders starting at private/var/mobile and we can see that Clutch has dropped the ipa into Documents/Dumped Let's go there and take a look.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=57)** We can see the filename starting with com.kontrast which is the Bubbsie application in an unencrypted ipa form.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=65)** I'll just rename this to make it simpler.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=68)** It's possible to directly look at unencrypted applications on [[Windows]] because IPA files are, in fact, nothing more than zip files.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=76)** I'll use WinSCP to navigate to the Bubbsie.ipa file we've just created in the Dumped folder and copy it to my Windows Testing directory.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=87)** I'm in Explorer at my Testing directory, and I'll change the Bubbsie.ipa extension to zip and then open it.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=96)** We can see two items, a Payload folder and iTunesArtwork.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=101)** The file iTunesArtwork is a PNG file.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=104)** I can demonstrate that by opening it in Paint.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=108)** I'll go into the Payload folder and then into the [Bubbsie.app](https://Bubbsie.app) folder.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=113)** Here's the full application container with the Bubbsie executable and the PLIST files.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=118)** I can open the Info.plist file with WordPad.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=128)** But we can see it's still semi-compiled.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=131)** This technique provides and initial view of the application, but it's pretty limited.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=136)** Let's go back to the mobile device and do some further processing on the IPA file.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=141)** To do further analysis, we now need to reinstate Bubbsie as a clean, unencrypted application replacing the original encrypted one.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=150)** To do this we use the ipainstaller tool.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=156)** That's done.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=157)** We now have an unencrypted application called Bubbsie on our device from which we can extract the property lists and recover the class headers.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=165)** Let's go to the Applications folder and find Bubbsie.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=173)** I can see that the UUID starting with E36F9E3E was installed today.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=180)** And as Bubbsie's the only application I've installed today then that's what we want.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=184)** Let's drop into that folder and see what's there.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=188)** We can see the application bundle container which is called [Bubbsie.app](https://Bubbsie.app).
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=192)** Remember that we don't want to create any new files in the application folder, otherwise we'll stop the application from working.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=199)** So, we'll work on the application from the outer folder.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=202)** Let's have a look at the application folder contents.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=206)** We can see the main application Bubbsie pick up the property list files Info.plist and ResourceRules.plist.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=216)** Let's start by using plutil to look at these, and I'll save the outputs into a file called About.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=226)** Okay, we can see the main executable is Bubbsie and there's icon files associated with it.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=232)** It's identifier is the company name and application formed into com.kontrast.thunkit.bubbsie.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=238)** It's version number is 1.2 and it uses a URL handler.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=244)** I'll now look at ResourceRules and append the output to About.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=248)** We can see the ResourceRules have been appended, but this hasn't added anything of great interest in this case.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=254)** Next, I have to run class-dump-z to extract class headers from the application.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=259)** And again, I'll append them to the About file.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=262)** We've now created a file called About which contains the two plist files and the class headers in readable form.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=269)** Of course, an application may have other plist files and we'd extract them all during static analysis.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=275)** I'll now use WinSCP to select and copy this file into Windows where I can work more comfortably on it.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=281)** I'll navigate to the Applications folder and I'll download About into my Testing directory.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=288)** I've opened About with WordPad.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=290)** We can browse through it, adding headers to the plist if we want.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=294)** And we can look for structures and interface definitions.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=298)** Looking through this provides a good start point for doing in-depth dynamic analysis and identifying interesting functions that might be hooked.
>
> **[5:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=305)** Within the file there are protocol and interface sections which are used to declare methods and properties.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=310)** Spending time on this file helps really understand the functionality of the application and provides additional hints as to what to look for during dynamic analysis.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=319)** Of course, having a basic knowledge of Objective-C coding is useful when trying to make sense of these properties and interfaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Forms]] (1)
> **Env Vars:** ipa (2), png (1), plist (1), uuid (1), e36f9e3e (1)
> **UI Navigation:** navigate to (2), open the (1), go to (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** itunesartwork (2), ios (1)
> **URLs:** [bubbsie.app](https://bubbsie.app) (2)
> **Definitions:** is a  (1), is called (1)
> **Versions:** 1.2 (1)

#### [Disassembling iOS executable code](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=0)** - [Narrator] iOS is a compiled application.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=3)** And we can't recover source code, as we can for [[Android]].
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=6)** When can however download the application binary.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=9)** Run it through a disassembler, which will display the application rendered into assembler level code.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=14)** And use reverse engineering techniques to understand its functionality.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=18)** Analyzing applications at this level of coding, isn't for the faint hearted.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=22)** And it's beyond the level of normal testing.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=25)** While this course isn't geared to teaching in depth reverse engineering.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=29)** It's useful never the less to have some knowledge of binary disassembly when testing.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=34)** Given the lack of source code available for installed iOS applications.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=38)** I'll introduce two disassemblers.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=39)** And you might like to spend a bit of time after the course, getting familiar with the binary code environment.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=46)** We'll use the bubbsie binary to demonstrate these tools.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=49)** Let's [[Fetch]] it from the bubbsie app folder.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=55)** The first disassembler I want to take a brief look at, is IDA.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=59)** I've got IDA loaded, and I'll drag bubbsie into the work area.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=65)** IDA recognizes this, and processes the binary file.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=71)** The left hand pane lists all functions found.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=73)** And the right hand pane, allows the code to be displayed in various [[Forms]].
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=78)** The bottom pane is a console for messages.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=82)** The IDA tab provides a pane for the selected function to be displayed.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=85)** And informally shows the [[Control Flow]].
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=88)** As we move down the function list, we can click on the function to see it displayed in disassembled form, in the right hand panel.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=99)** The Hex View tab, provides a raw view of the binary file.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=102)** And we can browse through it looking for strings which might indicate high coded sense tip data.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=107)** Such as user ID and password.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=111)** If you need a professional solution, then you may wish to look further into IDA.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=116)** However, I'll take a look at another disassembler, which provides a significant capability, at a more affordable price.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=123)** The second disassembler I'll look at, is called Hopper and it runs on [[Linux]].
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=128)** I'll be running this in the [[Ubuntu]] Gnome environment.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=132)** Hopper is a disassembler, which is capable of handling iOS applications, as well as a range of other binary formats.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=139)** A trial version can be downloaded.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=141)** And this is sufficient to start with.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=143)** I'll scroll down and select the Ubuntu version, and download it.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=150)** Firefox asked if I want to install it.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=152)** Which I do.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=155)** That's installed now.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=156)** I'll open up the applications to find Hopper Debugger and Hopper Disassembler.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=161)** I'll start Hopper Disassembler.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=163)** As I've selected a trial, I'll click the trial button.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=168)** I've got the bubbsie application executable, in my VirtualBox shared folder.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=172)** So I'll open that by selecting file.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=175)** And then read executable to disassemble.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=180)** Here we see the disassembled bubbsie application.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=183)** With the function list on the left, the procedures in the middle pane, and then inspector panel on the right.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=190)** The function panel at the left, has a second tab for strings.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=193)** This provides a list of all the strings in the file.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=196)** And it's useful for searching for sensitive data, such as credentials.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=200)** If we click on a string, we see it's position in the file.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=204)** There's a couple of useful buttons at the top right.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=206)** Which aren't active in the trial version, but are in the full version.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=210)** I've decided the trial demonstrates half it's value.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=213)** And I've bought, and installed a license.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=215)** If I click on the middle icon, which looks like a flow chart.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=220)** I get a function structure chart, similar to that which we saw in IDA.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=224)** The right hand icon is very useful.
>
> **[3:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=227)** It recreates a form of high level pseudocode, which makes reading the functions much easier.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=233)** Let's use Hopper to check whether the term secret is used.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=236)** And if so, what for?
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=238)** First thing I need to do, is go into the default settings and turn off fuzzy search.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=244)** It's a bit of a distraction for what we're doing.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=246)** Then I'll select the strings tab, and enter secret in the search box.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=251)** We've got a list of areas where the string is used.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=254)** I'll look at the first single [[Microsoft Word|word]] secret.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=259)** That has no references.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=261)** So I'll leave that for now.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=263)** However it might be useful to chase down where that's used later.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=266)** When I've got more time.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=268)** The second term however, does have references.
>
> **[4:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=271)** Let's go look at 5059a.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=275)** Okay.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=276)** We can see we're loading it, as a constant into register r0.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=280)** We don't quite know what it's doing with it though.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=283)** However, if we click on the pseudocode button, we get a pseudocode version of this routine.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=289)** At the top we can see it's an authentication function.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=292)** And it's associated with Twitter.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=294)** Let's look down for the use of secrets.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=297)** Half way down the panel, I can see that we're setting a username, and a blank password.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=301)** That might be a useful insight.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=303)** But I'll need to spend a bit more time understanding how it uses that.
>
> **[5:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=307)** At the bottom of the panel, I can see that we're initializing a token, with a null key and null secret.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=314)** Again, we might want to check further how this used.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=317)** But at face value, it seems a reasonable thing to do.
>
> **[5:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=320)** There's much more functionality in Hopper.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=322)** And spending time developing your experience with it, will ensure you get the most out of static iOS application testing.
>
> **[5:30](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=330)** However, as with IDA, this is quite an advanced component of your mobile tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (2), [[Android]] (1), [[Fetch]] (1), [[Forms]] (1), [[Control Flow]] (1)
> **Env Vars:** ida (7)
> **UI Navigation:** click on (4), select the (2), scroll down (1)
> **Code Identifiers:** ios (4)
> **Definitions:** is a  (3), is called (1)
> **Exercise Files:** source code (2), download the (1)
> **Analogies:** such as (2), similar to (1)
> **CLI Commands:** find (1)

#### [Advancing into dynamic analysis of iOS](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=0)** - [Instructor] Having become familiar with the application through static analysis, we can now run the application and use dynamic analysis techniques to check for operational issues.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=10)** Some mobile applications connect to web services and are therefore subject to web vulnerabilities.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=16)** We won't be covering the topic of web testing for mobile applications, because the testing is the same whether the end device is a mobile or desktop.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=25)** And the testing techniques are covered fully in the web testing course.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=28)** The mobile application may connect to external servers, not only using http or https, but possibly with other protocols.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=37)** Once again, we won't do network traffic monitoring in this course, because we cover it in detail for all InPointe devices in the wireless testing course.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=46)** The third area of iOS testing covers the operational aspects of the application, which are specific to the mobile platform.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=53)** This includes its use of temporary and cache areas, and the data stored during application execution.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=60)** The tool we'll use for dynamic execution monitoring is called Snoop-it.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=64)** It consists of an agent which hooks into the target application, and a web server through which it reports the application's activity.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=72)** We connect to Snoop-it's web portal on port 12345.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=77)** I've configured Snoop-it to monitor the operation of Bubsy, and both Snoop-it and Bubsy are now running on my mobile device.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=84)** Let's connect to the portal.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=86)** I'll enter the used ID and the password, which is configured by default on Snoop-it, which is snoop-it, snoop-it.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=93)** We can see that Snoop-it has hugged into Bubsy, and he's now monitoring it.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=97)** I'll take a photograph using Bubsy.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=100)** I'll click on the file system under the monitoring category, and we can see the initial file system accesses that Bubsy's made when initializing, the first being to read its info.p list.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=110)** And further down, we can see the new image controller accesses.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=117)** We can see the UUID, starting with E36F, that we investigated earlier.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=123)** On the keychain, we can see accesses to the keychain, and the attribute of kSec, attribute accessible when unlocked.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=131)** Under network, we can see the https and http cores, and under sensitive APIs, the calls to location service, camera and [[Wi-Fi|wifi]].
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=143)** We hover over an entry, we can see the details of the thread where the events happened.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=149)** Under common crypto, we see the calls to the crypto routines.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=153)** The analysis section provides the class analysis that we saw earlier interactively.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=159)** I'll scroll down to TJC user account manager and select it, and we can see the class headers in the panel on the right.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=167)** We can also do testing using these classes.
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=170)** I'll scroll to the bottom, to the simple test function, and on the right, scroll down the methods to helloSnoopi.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=179)** The setup and invoke button at the top right will activate and if I press that, I'll get an invocation popup.
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=187)** I'll enter Linus as the ID, and invoke method.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=190)** And the result of the method is returned.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=192)** Snoopi saying hello to Linus.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=195)** We can do this with the Bubsy routines also.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=198)** For instance, if I scroll to iRate, and then select the method message, and press setup and invoke and invoke the method, I get the Bubsy user rating message.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=216)** Interacting with the running application is complex, and requires a good understanding of the methods, but it does offer an opportunity to stress test them as part of advanced testing.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=226)** Moving on, I can also click on URL schemes.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=230)** And we see the two URL schemes we saw earlier during our static analysis.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=234)** The runtime manipulation functions allow fake information to be put into the device, such as a fake device ID, a fake MAC address and a fake device model.
>
> **[4:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=245)** It also allows the current location to be manipulated.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=249)** For instance, we can enter Jakarta, Indonesia.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=257)** And we can set the address.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=259)** Note that the Snoop-it browser will lose connection with the device server if the application being monitored is in the background, but it will resume when the application is again active.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=269)** We can now use WinSCP to have a look through the file system on the device.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=273)** We can see that temp was accessed today, but when we look in it there's no files remaining.
>
> **[4:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=278)** Bubsy has cleared up after itself.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=280)** In library, we can see the preferences folder has been accessed.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=286)** And in that, we can see the p-list files that have been updated.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=290)** Let's go through PuTTY and use PLU tool to check that content, to make sure no sensitive data has been stored.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=297)** I won't worry about the Apple files, just the application p-list.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=303)** Here we can see configuration information, followed by some rating information with a date-time stamp and count.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=309)** We're good, nothing sensitive here.
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=312)** Let's take a look at library caches and into the contrast folder.
>
> **[5:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=316)** Here we can see the application cache files plus a Snoop-it cache directory.
>
> **[5:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=321)** The Snoop-it cache directory isn't part of what we're testing.
>
> **[5:23](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=323)** It's been created by Snoop-it, so we don't need to be concerned about it.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=327)** We can, however, extract the SQLite [[Databases]], and look at them them using our database browser.
>
> **[5:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=333)** I'll download the cache.db-wal, cache.db-shm and cache.db files to my testing directory and have a look at them.
>
> **[5:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=344)** Before I do that, I'll change their names to make sure that we can read them.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=349)** I'll use the SQLite database browser to check them.
>
> **[5:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=354)** Cache one has no tables, so it's fine.
>
> **[6:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=360)** Cache two is encrypted.
>
> **[6:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=367)** So is cache three.
>
> **[6:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=370)** We're good, no sensitive data here.
>
> **[6:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=373)** We're pretty much done now.
>
> **[6:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=375)** We can't find any sensitive remnants after running Bubsy and, to the extent we monitored it, we didn't see anything particularly concerning in its operation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (1), [[Databases]] (1)
> **Env Vars:** url (2), uuid (1), e36f (1), tjc (1), mac (1)
> **UI Navigation:** click on (2), scroll down (2), select the (1)
> **Code Identifiers:** ios (1), ksec (1), hellosnoopi (1), irate (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for instance (2), such as (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** setup (2)


### 4. Security Shepherd

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking a look at Security Shepherd](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=0)** - [Instructor] The [[OWASP]] folks have provided a training tool which we can use to learn about [[Mobile Testing]].
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=5)** It's the Security Shepherd, described on the website here.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=9)** This comes as a virtual machine, and you import it as an appliance into VirtualBox.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=14)** I've downloaded and imported it, and it's running on IP address 10.0.2.19.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=20)** We also need to download the Security Shepherd mobile VM, which we can do from here.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=25)** This comes as a .7z compressed file, and it contains a virtual box appliance, as well as some tools and APK files.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=34)** I've installed the appliance, and we're ready to go.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=36)** I'll browse to 10.0.2.19 on my lab network, and here we have the Security Shepherd login screen.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=44)** When you first start it up, you'll want to log in as admin with the password password.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=49)** The first thing you'll be asked to do then is to change the password, which I've already done.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=53)** And I'll log in with my credentials.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=59)** Okay.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=60)** The first thing we'll do is open mobile levels only, and then we'll go to Admin, Module Management, change the module layout, and enable open floor mode.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=73)** And that provides us with access to all the lessons.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=76)** We'll then select Lessons, and we see the set of lessons we can take.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=81)** Let's select the first, Broken Crypto.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=85)** We can see that the lesson is about breaking an encrypted chat session, and we're pointed to the [[Android]] VM.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=92)** Here we can see the MobileShepherd virtual device.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=95)** When we pass over the screen, we lose our mouse, so the first thing we need to do is select Input, Mouse Integration.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=103)** And then we can see the mouse, and we go on the screen and click, and we can click to become a device mouse.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=109)** To escape the device, we can press the right Control key on our host keyboard.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=114)** We can also do a check at port 5555 on the Security Shepherd mobile device, [[Nmap]] -PS -sV
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=124)** - p5555 10.0.2.21.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=130)** And we can see this is open.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=132)** We can connect to it with the ADB application, which I've installed in Kali, adb connect 10.0.2.21:5555, and we're connected.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=147)** And we can adb shell to get a shell.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=152)** And we can see that we are in fact an Android device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (2), [[OWASP]] (1), [[Mobile Testing]] (1), [[Nmap]] (1)
> **Versions:** 10.0.2 (4)
> **Env Vars:** owasp (1), apk (1), adb (1)
> **Ports:** port 5555 (1), :5555 (1)
> **UI Navigation:** go to (1), select the (1)
> **Speakers:** - [instructor] (1), - p5555 (1)
> **Code Identifiers:** sv (1)
> **Exercise Files:** download the (1)

#### [Watching for bad cryptography](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=0)** - [Instructor] Let's click on BrokenCrypto and we get the BrokenCrypto lesson with three BrokenCrypto challenges and we'll select the lesson.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=10)** Okay, we get a series of messages.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=13)** When we double click on a message, the app pops up an option for us to select all and to copy.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=25)** But before we do anything more, let's examine the messages.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=28)** We can see that they have the value 20 occurring quite frequently and that's the hex value of a space.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=35)** When we look at the first message, which starts 48656C6C6F2C20, we can see this looks very much like just a hexadecimal representation of the plain text message.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=49)** There's plenty of ASCII charts available online and here's one we can use.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=53)** The first part of the message decodes to hello.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=56)** So all we have to do is use our ASCII chart to recover the messages, character by character.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=62)** If we decode further, we find the first message starts with hello, how are you?
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=67)** We are holding a competition.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=69)** We can decode all the messages, but in the interest of time, let's go directly to the last message.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=75)** And we can scroll up the screen to do that.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=78)** The message starts with, well, I have to do this... space, the key is.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=86)** And when we decrypt the message starting at 33336564, we find that the key is 33EDEB397D665ED7D1A5
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=102)** and so on.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=103)** And there we have our key.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=105)** This is what the lesson wanted us to find.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=107)** So we can go back to Shepherd and enter it in the result key field at the top.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=112)** 33EDEB397D665ED7D1A580F3148D4B2F
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=128)** and submit.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (2), select the (1), scroll up (1)
> **CLI Commands:** find (3)
> **Env Vars:** ascii (2)
> **Best Practices:** the key is (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Insecure data when in developer mode](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=0)** - [Instructor] Let's check out another lesson.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=2)** This time, we'll take a look at insecure [[Data Storage]].
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=6)** As described here, mobile apps can store data in the mobile device rather than in a backend server.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=13)** And this can make apps much more responsive.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=16)** On-device storage will typically use an SQLite database.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=20)** Again, for this lesson, we need to use our Mobile Shepherd device.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=24)** On the mobile phone screen, let's click on Insecure Data and then select the lesson Insecure Data.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=34)** This brings up a message panel saying the key isn't here.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=37)** Our mobile device has been set up to developer mode, so we can get into an [[Android]] shell on the device.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=43)** We've already seen that we can connect from Kali using ADB.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=46)** However, we can also simulate the effect of using ADB by pressing Alt + F1.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=52)** And this goes into a shell directly from the device.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=55)** If we want to go back to the mobile screen, we can use Alt + F7.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=59)** Okay, we're at the command line.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=61)** We can navigate to data/data to look for our application data, and it will list out the contents.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=73)** We can see here, we have a number of folders, one of which is called com mobshep insecure data.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=80)** Let's go into this, cd com, mobshep, insecure data.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=91)** And we'll see what we've got.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=92)** We've got cache, [[Databases]], and lib.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=95)** Let's go into the databases folder, and list, and we can see we have two databases, member and member journal.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=106)** To look at the data in the member, [[SQL]] Lite database, we can simply dump the file out with cat, cat members, and we can see that it has a name VARCHAR, and a password VARCHAR.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=121)** And we have an entry, admin battery, 7, 7, 7.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=126)** Back in Shepherd, we can now enter, battery 7, 7, 7, and submit.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=136)** And we've successfully completed the lesson.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=138)** There are more lessons and many challenges that you can take in Security Shepherds mobile arena.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=144)** You should continue to work through these after you finished this [[LinkedIn]] learning course to consolidate and extend your knowledge in the [[Mobile Testing]] space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (3), [[Data Storage]] (1), [[Android]] (1), [[SQL]] (1), [[LinkedIn]] (1)
> **Env Vars:** adb (2), varchar (2), sql (1)
> **CLI Commands:** cat (2), make (1), cd (1)
> **UI Navigation:** click on (1), select the (1), navigate to (1)
> **SQL:** varchar (2)
> **Cross-References:** go back to (1)
> **Tools:** command line (1)
> **Definitions:** is called (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this [[LinkedIn]] Learning course.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=4)** I hope you enjoyed learning how to test the security of mobile technology and applications.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=10)** Learning how to do [[Mobile Testing]] is just the start of your path to becoming a good mobile tester.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=17)** Having understood the concepts and learnt about how to use the tools, you now need to practice and gain experience, and, in particular, become familiar with what is normal in a mobile app so that you can detect the abnormal.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=31)** It's a lot of work, but it's also a lot of fun.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=35)** There's always something new in [[Cybersecurity]].
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=38)** And if you're interested in learning more, then check out the full cybersecurity [[Ethical Hacking]] segment of the library, where new [[Security Testing]] courses are added regularly.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=48)** You'll find courses on using [[Kali Linux]], information gathering, denial of service, wireless testing, and much more.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=57)** I'd also like to invite you to go to my author page, where you can find some additional courses on cybersecurity.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=64)** If you want to get hands-on with some of the common tools, then do take a look at my introduction to Kali Linux, web application testing, and wireless testing courses.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=74)** If you're wanting to learn about security for the cloud, then cybersecurity for [[Cloud Computing]] is for you.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=82)** Thanks again for joining me on this course, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Kali Linux]] (2), [[LinkedIn]] (1), [[Mobile Testing]] (1), [[Ethical Hacking]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Wireless Networks]] | **15 of 19** | [[Ethical Hacking- Hacking IoT Devices]] →

## Appears In

- [[Become an Ethical Hacker]]

## Related Courses

_Courses sharing skills:_

- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Stealth Penetration Testing with Advanced Enumeration]] — Ethical Hacking
- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Ethical Hacking
- [[Ethical Hacking- SQL Injection]] — Ethical Hacking
- [[Ethical Hacking- Cloud Computing]] — Ethical Hacking

---

[↑ Back to top](#)