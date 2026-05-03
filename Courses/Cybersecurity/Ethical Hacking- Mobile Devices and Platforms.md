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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/keeping-your-mobile-devices-safe?u=76281980&t=0)** - The smartphone and smart devices in general have, over recent times, dominated the personal and business technology landscape. Few people travel without at least one, if not two mobile phones, as well as a tablet or two. Unfortunately, the use of mobile devices offers a great opportunity for malicious interference, such as industrial espionage, surveillance and peeping into a personal's private activities, and cybercrime. Making sure that mobile device applications are security tested is now as important as business systems testing. I'm Malcolm Shore, and I've spent a career helping governments and businesses protect their systems. I'd like to invite you to take this course and learn how to test mobile devices. Let's get started with mobile devices.

> [!info]- Semantic Content
>
> **Analogies:** such as (1)
> **Speakers:** - the (1)

#### [Before watching this course](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/before-watching-this-course-2?u=76281980&t=0)** - [Narrator] This is a practical course, and during this course, I'll be mainly using [[Windows]]-based tools to interact with the mobile devices. I'll also be using the VirtualBox environment to run a [[Ubuntu]] GNOME virtual machine. And I'll be running applications at the command line on the mobile devices. Below the user interface, these are [[Linux]]-based systems. You should be competent in computer, network and mobile technologies, and be familiar with the basic Windows and Linux command line interfaces. We'll use software tools for the [[Android]] testing, but you'll require an iPhone or iPad that can be jailbroken and used for iOS testing and preferably not one that you use for your personal or work activities.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/course-disclaimer-2?u=76281980&t=0)** - [Narrator] This is one of a series of [[Ethical Hacking]] courses, and it uses a range of third-party testing tools. Some are commercial [[Microsoft Products|products]] and some are open-source. The download and installation instructions for all tools used in this course is available as a PDF in the associated course material. While we've done our best to ensure the tools we used and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. The testing tools we demonstrate are extremely powerful. They may demonstrate some of the same signature characteristics as malware and malicious implants, and may raise antivirus alerts when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it. And so, as for any other software from the Internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=0)** - [Instructor] The rapid growth and variety of applications of mobile technology has brought with it many new threats. The functionality of the platforms and the new technologies being introduced all offer a broader attack surface while security is struggling to keep up with the demands not only of the technology, but of usability. The infrastructure supporting mobile technology is now quite complex. The challenge of achieving non-intrusive security is most pronounced on mobile platforms, and the many flaws found over the last few years have squashed any idea that the mobile operating systems are somehow less vulnerable than their IT counterparts, all of which goes to make the job of the security tester critical to the continuing growth and success of mobile device use. The Open [[Web Application Security]] Project, [[OWASP]], started life by providing a framework and tools for testing web applications. However, its tremendous success spurred the creation of additional [[Security Testing]] projects in mobile, and more recently, [[IoT|Internet of Things]]. The OWASP Mobile Security Project, whose web page is shown here, is a good place to start in looking at the threats to mobile applications and the best practices in mobile device and [[Application Security]]. OWASP maintains a list of mobile threats that should be checked, and a key deliverable from the OWASP project is the top 10 threats list.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=95)** This provides a useful start point for testing and is a baseline hygiene check for any mobile application. While the project is now closed, these are still relevant. Let's take a quick look at each of them. Improper platform usage. This category covers the misuse of a platform feature or failure to use platform security controls, including [[Android]] intents, platform permissions, misuse of touch ID, the Keychain and other security controls in the mobile operating system. Insecure [[Data Storage]] combines two of the threats from the 2014 top 10 insecure data storage and unintended data leakage. Unfortunately, there are far too many ways in which these issues can occur. In a recent study of mobile apps, it was found 5% transfer personal information to a third-party server, and about half transmitted device and location information. Insecure communications covers poor handshaking, incorrect SSL versions, weak negotiation, clear text communication of sensitive assets and other similar issues. Even supposedly secure communications can prove to have weaknesses through issues such as poor random number generators. Insecure authentication, when authenticating the end user, or through bad session management is the next big threat. This can include failing to identify the user
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=190)** and to correctly maintain the user's identity throughout the session. Insufficient [[Cryptography]]. This issue is highlighted with a weakness found in MD4 and MD5 some years ago. But in general, cryptography is an area of significant concern because it's extremely difficult to design and code good cryptographic systems. Then the proprietary [[Algorithms]] should be approached with suspicion. Insecure authorization includes all threats related to failures in authorization, specifically to user-restricted function or access-controlled data. Client code quality is a catch all for code-level implementation problems in the mobile client, such as buffer overflows, format string vulnerabilities, and various other coding mistakes. Code tampering covers binary patching, local resource modification, method hooking, method swizzling, and dynamic memory modifications subsequent to the application being loaded. This can be done through changing the contents of memory, changing the system APIs that the application uses, or modifying the application's data and resources. Reverse engineering. This is an interesting category of threats, as it's the means by which testers validate security and provide recommendations for improvement to the developer. However, if an adversary gets ahold of the application and reverse engineers it, they're much more likely to exploit vulnerabilities
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=283)** in the application rather than reporting them. Extraneous functionality. Often developers include hidden back door functionality or other internal development security controls. They're not intended to be released into production. Or maybe some form of amusement, such as what are known as Easter eggs. These are hidden functions which appear when special combinations of key strokes or mouse clicks are used. There are many more threats. The 2016 list of significant threats has 91 entries, so while the form factor may be small, the testing activity isn't. One of the key goals of the OWASP Mobile Security Project is to provide standardization of mobile application testing methodologies. to ensure users can have confidence in their testing programs. While specific techniques exist for individual platforms, OWASP provides a general mobile threat model, which applies to any platform and can be customized to meet the needs of both the owner and the tester. The guidance is not only intended for testers, but also for developers. Providing guidance in the development of applications which are built from the ground up with security in mind. There are different ways of testing. The ideal mobile assessment combines static analysis, dynamic analysis, and forensic analysis to ensure that the majority of the mobile application attack surface is covered.
>
> **[6:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understand-and-test-for-mobile-vulnerabilities?u=76281980&t=377)** The underworld platform is able to be virtualized and so applications can be tested within a virtualized environment. When testing Apple applications, however, there is no virtualized environment and so the tester needs to jailbreak a device to use as the testing platform. A final note. This testing is designed to identify weaknesses in mobile applications. And in the case of the iPhone, it's involved running applications on a device. The techniques we use may not be suitable for forensics use, especially if evidential integrity is required.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=0)** - [Narrator] Preparing properly for testing will ensure the work is focused, efficient, and effective. This means understanding the application functionality, it's workflow and how it interacts with its supporting infrastructure. This is particularly important where the application might affect the security of sensitive business back-end systems, the tester needs to use the application and possibly monitor its network traffic through a proxy service. Where a potential issue is found, the tester needs to be able to test the application and demonstrate that the issue can be exploited, so preparing a test rig is a key lead-in to the actual testing. After preparation, the first phase of testing a mobile application is static analysis. Ideally, this is done form the application source code, but if not, then disassembly of the executable code using reverse engineering tools will be required. In the latter case, the executable code may be obtained from the relevant application store, or it may have to be extracted from the device. A working test environment that provides the services consumed by the application at runtime may also be useful, even at the static analysis stage. It's useful for the tester to identify and understand the full set of network interfaces used by the application across cellular, [[Wi-Fi|wifi]], Bluetooth and near-field communication services. These all have different characteristics, and potentially introduce different [[Forms]] of threats. The types of networking protocols used by the application are important areas of focus for the tester,
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=93)** as these may introduce security features, or may introduce security risks. In addition, knowing which components on the mobile phone that the application interacts with is another area of interest for the tester. These may include the GPS, cameras, USB, microphone, and so on. Another key area of risk is data leakage, and understanding what data the application can access is another useful area for the tester to review. Traditional sources of risk include applications which access the address book, messages and email, however, business and social media applications may also include information of a quite sensitive nature. Any interaction with other applications on the platform, and especially those which link to [[Cloud Services]] or payment gateways, will need to be reviewed. The tester will be interested in various aspects of the server-side environment, such as the hosting provider, authentication services, payment gateway services, as well as an understanding of the [[Application Development]] environment. The tester should review the permissions used by the application, the libraries in use, and any information relating to security weaknesses in those libraries. The types of objects implemented, and any runtime libraries or files that are called, these all provide the potential for weaknesses to be introduced. Another area which is commonly a problem is the use of hard-coded secrets within the application, such as API keys, credentials, or proprietary business logic. Manual review of the source code
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=187)** will pick up these issues fairly quickly. The overall security model of the application is another area of focus, this includes, in particular, the access controls provided to securely manage external services, and sanitization of inbound data. The tester will review the manner in which user authentication occurs, if it occurs, and how robust it is to malicious impersonation. Features such as account lock out, single sign on and one time passwords will have a significant impact on the results of the testing. Authorizations are also another area of interest, particularly areas such as permissions for files created at runtime, role specific functionality, and elevated privilege flags or values. Other areas which may be relevant are licensing checks and tamper detection features. Session management processors are an area of potential risk, particularly if the device needs to flush out sensitive information between sessions. The tester should ensure both the device and the server side close the session properly on completion, time out or interruption, and look for opportunities to misuse session IDs or otherwise achieve session fixation. Understanding the sensitivity of the data being processed, such as credit card numbers, bank account details, medical data and so on, is important when assessing the effectiveness of data protection. Testing is particularly important where the data is stored on devices which are or can be taken outside of the application environment, such as [[Cloud Storage]], SD cards and so on.
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=282)** Data stored in logs and in cash locations is also a common source of risk. Testing mobile websites differs little from testing browser websites, and the [[OWASP]] guidance is a good start. There are countless issues to consider, from cross-site scripting and [[HTML]] injection to cookies and cross-domain policies. OWASP provides 12 categories of testing within their Web Application [[Penetration Testing]] Methodology. Any vectors which might allow [[SQL]] and XML injection need to be identified and tested. Where an application uses a shell, the tester needs to look for ways to inject arbitrary system commands or modify intended commands. Encryption of data is a potential area of findings for testers. Two key areas of interest in [[Mobile Testing]] are random number generators and certificate management. An additional security feature which is used in mobile apps is pinning, an application may optionally implement either certificate pinning or public key pinning. This is an additional security feature when validating certificates, achieved by checking the presented certificate or public key against one or more hashes of legitimate certificates or public keys associated with the presenter. The downside of pinning certificates is that when a certificate expires and is renewed, pinning has to be updated. [[Google]] rotates its service certificates regularly, for example. Pinning public keys is a little harder to implement, but key rotation is not as much an issue. Pinning is of sufficient importance
>
> **[6:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/static-analysis-of-applications-2?u=76281980&t=375)** for OWASP to have produced a specific cheat sheet to encourage its implementation and testing.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=0)** - [Instructor] The second stage of [[Security Testing]] for mobile devices is called dynamic analysis. This is focused on looking at what the application does while it's running and what happens to the device storage between starting the application and closing the application. A view of the device's file system before running should be obtained, and change files reviewed after the application has been installed and run. The test still will look for credentials, payment card information, and other sensitive data being written to the file system and not purged. Application communication should be monitored and inspected. Looking for unexpected connections, sensitive application data being transmitted in the clear, and phone identification data such as IMEI and user details, which should not be present. The protocols used in transactions, particularly across [[Wi-Fi|wifi]] and near-field communications should be identified to detect those with known weaknesses. As with any application, the tester will look for ways to bypass or subvert credential entry and object access controls, including brute force attacks where viable. Web testing relevant to the application functionality needs to be done, including testing to determine whether client-side [[JavaScript]] code or malicious [[HTML]] or XML can be injected into the application. The tester will check the potential for malformation of user and service input into the application and any effect that might have. Testing in edge cases where external services such
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-applications-2?u=76281980&t=92)** as authentication are not available, need to be tested and unexpected interruptions introduced to test the application's ability to fail safe. There are a number of session management checks that can be carried out during dynamic testing, including the application susceptibilities in man in the middle attacks, eavesdropping, session fixation, privilege escalation and so on. Dynamic testing is an advanced skill which requires a good knowledge of the application and can involve some quite sophisticated low-level testing. The use of systems which hug applications and report on their internal activity can be useful, as can dis-assemblers to reverse engineer source code. We'll take an introductory look at the techniques and the tools that we might use, but we won't go too deeply into what is quite an advanced topic.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/mobile-web-testing?u=76281980&t=0)** - [Instructor] When we're testing websites, we'll often use a tool such as [[Burp Suite]] to intercept web traffic and allow us to inspect the web messages, change them and insert new ones. We can do the same with our mobile apps. When we normally connect, traffic would go from the mobile device directly to the web backend. When we use Burp Suite as a proxy, that traffic goes from the mobile app into Burp Suite and is then sent on to the backend application. Let's take a quick look at how we set up the [[Android]] phone to proxy. We can get to the proxy settings by long pressing the network name and selecting Modify Network. We can then check Show Advanced Options and select proxy manual and then we get to the proxy setup screen. All we need to do is set the proxy address to the IP address of our server hosting Burp Suite. Set the port to 8080 and we're ready to proxy mobile traffic. Web testing is out of scope for this course, but if you want to find out more, check out my other courses on using Burp Suite and web testing.

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
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=1)** - [Instructor] [[Android]] was first released by [[Google]] in 2008, is based on the [[Linux]] kernel, and typically runs on an ARM processor. The Android operating systems have whimsical names, with the first Android 4 release being called Jellybean and a later release, KitKat. Android 5 is known as Lollipop. Android 6, Marshmallow. Android 12 is now in common use, and we're seeing Android 13 on the latest devices. Android 14 was released for developer preview in February 2023. Many older model mobile devices are still in regular use, and manufacturers will often deploy older versions of Android on their newer models. Android 11 is still commonly seen on entry-level phones. Google provides an open source platform, but individual phone manufacturers incorporate proprietary code within their deployments. Consequently, there are some differences between different manufacturers. However, these shouldn't affect testing too much, and the same tools and techniques can generally be used. Android doesn't introduce a completely new security model but builds on the Linux security model with enhancements appropriate to the mobile environment. One of the main changes is making security application-centric rather than user-centric, allowing for proper sandboxing of applications. An Android mobile device consists of a [[Hardware]] platform, on top of which is the Android implementation of the Linux kernel.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=92)** And above that, the Android runtime environment and libraries. Pre-installed and user-installed applications, typically in [[Java]], run in the runtime environment and use the application framework for accessing user-level system resources. The Linux kernel is the core part of the operating system that mediates access to system resources. It's responsible for enabling multiple applications to effectively share the hardware by controlling access to CPU, memory, disk I/O, and networking. In addition to the kernel, the operating system contains a range of higher-level functions, such as editors, command line, graphical shells, compilers, and so on. An Android system, while it's based on the Linux kernel, is sufficiently different in most other respects that a Linux application won't run on Android. And an Android application won't run on Linux. Earlier versions of Android used the Dalvik virtual machine to run applications written in Java and just-in-time compilation to bytecode. But more recently, this has been dropped in favor of the Android runtime with ahead-of-time, or AOT, compilation. Android does provide a Linux-like shell, but it doesn't have the standard tools that come with Linux releases. The Toolbox was originally provided for application use, but this was limited, and third-party tools, like BusyBox, are often installed by testers to add these capabilities to Android.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=185)** From Android 6 onwards, Toolbox has been replaced by Toybox. This includes familiar Linux commands, such as cats, chmod, copy, rep, ls, makedev, and many more. The Landley web page shown here provides a status and roadmap for Toybox. In order to test mobile applications, we need to understand how an Android application is generated and deployed and the role of its component parts. An Android application is delivered as a package with a .apk extension. I've downloaded an app called Peggo to my testing folder. While this isn't recognized in [[Windows]], we can change the application extension to zip. Now let's have a look at it. It might be called an apk, but it's a zip file. We can see a number of folders and files. The main executable is called classes.dex. .dex is the extension used for a Dalvik executable file format, which includes the executable code and the source code. We also have a classes2.dex file. Multiple dex files are used when the size of a single file exceeds that allowed in the Dalvik executable specification. The package also contains a file called AndroidManifest.xml, which is a source of useful information
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=283)** regarding the application's characteristics and planned interactions. It also contains a number of subdirectories with additional resources and libraries needed by the application. Code runs either as an application, which has a user interface and typically interacts with the user, or a service, which has no graphical user interface and is typically used for long-running background tasks. In addition, there are two [[Forms]] of helper routines. The first is a broadcast receiver, which allows the application to register for specific events, which will then be passed to it for action. The second is a content provider, which interfaces between an application and file storage, and provides an [[SQL]]-like interface to read, write, modify, and delete data. SQLite is a common database service accessed via a content provider. Another key concept in Android is intents. These are objects used to manage requests and include an action and the relevant data for the request being made. An intent can be used to start an activity, access a broadcast receiver, or start a service. An application can register to listen for an intent activity request by including it in its manifest file. An intent can explicitly define its application target, or it can let the system identify the application or applications able to respond. If there's more than one,
>
> **[6:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-operating-system-22400547?u=76281980&t=374)** Android will display an application picker. Applications can export activities. And these can then be accessed by application to application intents. Applications can also access broadcast receivers and content providers exported by other applications. There's much more to learn about Android to be a good mobile pentester, but this is sufficient to get us started.

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
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=1)** - [Instructor] The [[Android]] security model takes a different perspective from [[Linux]] by assuming that the trust boundary is a single application rather than a single user. The model builds on this by providing a sandboxed environment for applications, and the next explicit means of allowing interactions between the mobile [[Hardware]], the user, and the application. It also introduces the concept of signing applications to ensure trusted provenance. Android applications are available from the [[Google]] Play Store, and this is the primary trusted source with over a million applications available. However, there are many other sources of Android applications which can be used including vendor-specific application repositories. However, there are many other sources of Android applications which can be used, including vendor-specific application repositories. Android applications are signed by their developer and each Android application must have a valid certificate. These can be self-signed by the developer or signed by an authority such as Verisign or another registrar service. Android does not however, do certificate chain validation. When an application is installed, it's assigned a unique identifier and it operates within its own application sandbox. This ensures that the application cannot interfere with other applications, and other applications cannot interfere with it. Files created by the application are stored in the sandbox and by default, accessible only buy that application.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=96)** Shared data is managed through content providers which provide the ability to define read write permissions for other applications. Content providers can also be used for application only data. By marking the data as not exported, keystores can be used to protect data by requiring a user password for access. Permissions are a key building block for security in Android, the Android system, and applications, own resources and data, and to access those another application must make an explicit request by declaring the permissions they need. These include things like access to the camera, access to the microphone, access to the contact list, writing to external storage, and so on. In general, applications should minimize the permissions they need. The set of system defined permissions cover most requirements. Applications can, however define their own permissions. Permissions are grouped in protection levels with normal protection level permissions, offering little risk, but dangerous protection level requiring explicit user agreement. An application declares the permission it needs in its Android manifest file. Android uses a technique called intents to achieve interprocess communication. An intent is a message requesting an action and optionally providing data. An intent can require recipients to have specific permissions in order to process the intent. An application component can implement intent filters
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/understanding-the-android-security-model?u=76281980&t=190)** to specify the type of intents that an activity, service, or broadcast receiver can respond to. The are three ways an intent can be used. An activity in Android represents a single screen in an application. An activity is started by sending a start activity intent. The intent may include data, and the activity may return data. A service in Android is a component that performs actions in the background without a user interface. A service is started by sending a start service intent. A broadcast is a message that any application can receive and is sent using one of the three send broadcast intents. An intent can be sent explicitly to an application component or it can be implicit, in which case the operating system will find the appropriate recipient component. Improvements in security are included in some releases of Android. The WPA3 [[Wi-Fi|WiFi]] security model was introduced in Android 10 together with better support for biometrics and additional permissions. Android 11 brought in more permissions, and auto reset application permissions after a period in months of inactivity. A [[Privacy]] dashboard was introduced in Android 12. There was no significant security added in Android 13, but there is a suggestion that Android 14 will block the installation of old applications, which are based on the less secure older [[Software Development]] kits.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-for-android-testing-2?u=76281980&t=0)** - [Instructor] There are two environments that we need to install to enable [[Android]] testing. The first of these is the [[Java]] SDK, available from the Oracle site shown here. There's a number of options available for download and either 8.01 or 8.02 will be fine. Select the option for you and download it. I'll download and install Java 8.01 for [[Windows]] x64. We finish downloading, so let's go install it. I'll take all the default features and I'll take the default environment for JRE. Okay, we're finished. The second environment that we need to load is the Android SDK. This can either be installed as part of the full developer's Android Studio, or we can scroll to the bottom of the webpage, and under Get Just The Command Line Tools, we can just load the SDK. I'll click on the installer and download and run it. We finished downloading, so let's go install it. I'll put this into my testing directory in an Android SDK folder. Okay that's installed, and I'll now run the SDK Manager to load the basic platform tools. I'll deselect all but the Android SDK platform tools. And install one package, and I'll accept the license. And we're complete.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=0)** - [Instructor] The file AndroidManifest.xml is used to describe the functionality and requirements of an [[Android]] application. And it's generated as part of the build process for that Android application. This is a compiled XML binary file and, to read it, we'll use a tool called Apktool. Let's download and install the tool from the website shown here. I'll firstly right-click on the Wrapper Script URL and download it.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=36)** This downloads the APKtool batch file which makes it easy for us to call the tool. I'll then follow the link to the APKtool 2.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=50)** And I'll download the latest JAR file, version 2.4.0.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=68)** I'm in a command shell and I've copied the APKtool files into my testing directory. Let's make sure it's working. Okay, we're good to go. When doing [[Mobile Testing]] commercially, you'll usually be given the APK file from your customer. However, you may want to test an application from one of the Android stores and you'll need to download it. Freeware applications are best sourced from the [[Google]] Play Store, but the standard install expects these to be downloaded and directly installed on an Android device. An alternative is to do the first step of a sideload via the Evozi website. We can see the page has a link to visit the Play Store.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=123)** We can now search for the app we want. Let's enter SMS Reader. And we get a list of the relevant packages. By clicking on the first one, I can see the URL.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=146)** I'll copy the URL and close this tab. I can now paste the URL into the search box in the APK Downloader and generate the download link.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=163)** I now have the link to download the APK. I'll click that. And the APK file downloads. While Google Play Store is the primary source of APK files, there are many other APK download sites on the Web. An example is [apkfiles.com](https://apkfiles.com) which has over half a million apps ready to download. I've now got APKTool ready to go and I'll have a look at the SMS Reader APK file that I've just downloaded. I've called it sms.apk and moved it into my working folder. To disassemble the application, I call APKTool with the D command.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=214)** APKTool processes the application file and disassembles it into a directory called sms. Let's go and have a look at that. We can see there are some subdirectories and two files: apktool.yml and AndroidManifest.xml. First, I'll look at the YML file. Okay, we can see at the bottom of the screen that we've used version 2.4 of the APKTool... and at the top of the screen that the target was sms.apk.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=268)** The application version code is 26 and its version is 2.17. Okay, let's now look at the AndroidManifest file. I'll open this in Notepad.
>
> **[4:57](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=297)** We can see the Android permissions that are needed for this app, including [[Wi-Fi|WiFi]] and Contacts permissions. Below that, we can see the app activity is being declared, starting with the main activity, SMS Reader, Settings activity, and more. You can download many Android applications to get familiar with their manifest files. Let's take a look at another example of the manifest file from an APK, which I've downloaded and called ABank.apk.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=349)** We can see that this manifest file has one interesting difference. The Android name entries are prefixed with the string md5xxxx. From Android version 5.1 onwards, by default, the type name of an activity is based on the MD5 of the full name of the type being exported. This allows the same fully qualified name to be provided from two different assemblies and not get a packaging error. In this manifest file, we can also see an API key being declared. This is fairly common. While some keys aren't particularly sensitive, some are. Between June and November 2013, security research has discovered that developers were putting sensitive API keys into their applications which potentially revealed [[Facebook]], Twitter, Bitly, Flicker, Foursquare, [[LinkedIn]], and Google accounts. Amazingly, some of these values even had names which included the [[Microsoft Word|word]] secret or private. While these specific issues have been fixed, the use of hard-coded values continues to be a key one for testers to be aware of. In addition to understanding the activities and permissions of an application, some things to look out for in manifest files are the application clause, debuggable equals true, and any exported activities. These are functions that can be called from other applications. In both cases, they can be misused. The manifest file, then, can be easily extracted
>
> **[7:25](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-the-manifest-file-2?u=76281980&t=445)** and allows us to profile the application.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=0)** - [Instructor] We can recover the [[JavaScript]] code from [[Android]] applications by processing the downloaded APK file. This requires the use of the dex2jar and the JD-GUI tools. The first tool, dex2jar, can be downloaded from its SourceForge site. This comes as a zip file and includes both [[Windows]] and [[Linux]] tools. I've downloaded this already into my Android testing tools directory. JD-GUI is available, as are a number of other [[Java]] decompiler tools, from the site shown here. It's a standalone graphical tool that displays the Java source code and class elements in a very usable way. We'll use it to browse the source code we reconstruct using dex2jar. I've already downloaded the Windows zip file into my Android testing tools directory. I'll again use the SMS reader application I downloaded to show how we can extract and browse the source code. I'll go in to the dex2jar directory and take a look at what's there.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=75)** The SH files are bash scripts and the BAT files, Windows batch files. I'll now run the Windows batch file to create the jar file from the SMS APK. For simplicity, I've copied the application file sms.apk into this directory.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=101)** This proceeds to decompile the application. We can see that we've created an sms-dex2jar.jar file. We've now completed the first step of reconstructing the Java application code. Let's have a look at it using the JD-GUI tool.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=144)** We can see the structure of the application on the left. I'll expand the structure using the plus keys. And if I click on an entry, it opens in the right hand pane. The open files are shown as tabs above the right hand pane and we can have multiple open and navigate through them by clicking on the tab. We can see the top level structure of the SMS application consists of four components. The application code and a de.awesome.apps.factory.smsreader and the additional supporting modules of Android, com, and awesome.system. We can see the main module starts by importing a number of libraries including speech libraries. And as we scroll down, we can see the application code. Let's open the com module and take a look. This contains three modules. [[Facebook]] ads, [[Google]], and karumi.dexter. Dexter is an Android library for handling permissions. If we open it, we can see that it imports a number of listener permissions. Here's the source code for the ABank app which has a slightly more complex top level structure. When I expand the Android support module we see multidex, v4, and v7 Android modules. In bc, we have java and org.bouncycastle.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-and-reading-javascript-code-2?u=76281980&t=244)** And the latter expands to various crypto and maths folders. Bouncy Castle is a lightweight [[Cryptography]] API for Java, developed and supported by the Legion of the Bouncy Castle, a not for profit organization based in Victoria, Australia. The application uses another open source library. The opentk graphics library. Be.axa.mobilebanking expands to the R class, which expands to R, a set of constants. And this is an automatically generated set of resource identifiers for all resources used. When I expand the entry starting with md50dd, we see a number of application specific routines. Reading the manifest file and the source code for applications provides the ability to review and identify issues in the application. While reading the code may be confusing as you start testing, with experience, you'll quickly become familiar with the various ways applications are built. And you'll develop your instincts for finding issues.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=0)** - [Instructor] We've seen how we can read source code through the JD GUI tool. We can also recover the source code through the command line, using the Jad tool. This reads an [[Android]] application's class files, and provides proper source code outputs in individual text files. Jad hasn't kept pace with [[Java]] development, but it's still a potentially useful alternative to JD GUI. The Jad executable is available as a download from the Varaneckas website. I've downloaded it and extracted the contents, the Jad executable, into my testing directory. As with JD GUI, an APK file must be converted into a JAR file using DEXtoJar before we can process it. I'll again use the SMS reader application to demonstrate Jad, and use the jar file I've already created. The Jad tool works on class files, so I've copied the Jar file into the Jad directory, and changed its extension to .zip. I'll burrow down from the DE directory,
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=74)** until we find the class files, which are in the SMS reader folder. This is the folder we need, and I've extracted it already into the Jad directory. I'll now run Jad to recover the Java source files from all the class files in the SMS reader folder. I'll put them in a new folder called SMS Java, and create them with a Java extension.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/recreating-java-source-code-with-jad-2?u=76281980&t=116)** We can see we've created a new folder with Java files. I'll look at one of these files with Notepad.
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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=0)** - [Instructor] A very useful tool which can be used to browse [[Android]] applications is JADX. This can be downloaded from the [[GitHub]] site, as a zip archive, or as an executable. I've downloaded this, and extracted it into my testing directory. So let's take a look. We've now got the user interface up and can open an application. JADX GUI allows us to directly open the APK file. I'll navigate to the SMS reader application. JADX has provided two folders in the left pane, a Source folder and a Resources folder. If I firstly look at the Resources folder, I can expand that and see the Manifest.xml file is listed, and if I click on that, I can see the XML source. In the Source folder, we can see the four main modules at the top-level application structure. And if we open the dee.awesome.apps.factory.smsreader, we can see the list of classes it contains. And if I click on the main class, we can again see the reconstituted class source file.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/browsing-applications-directly-with-jadx-2?u=76281980&t=77)** JADX also offers a search function from the navigation main menu item, using the text search icon. If I click on this, the first time it will decompile and index the app. It allows selective search in classes, fields, methods and code. I'll search in code, for the text password. And we can see all the occurrences of password in the app. JADX powerful search and its ability to simply read APK files, makes it a great option for the first look at an application.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=0)** - [Instructor] When preparing the environment for testing, we loaded the [[Android]] SDK. One of the important testing tools that we loaded with that is called ADB: the Android Debug Bridge. This enables us to get command line access to any Android device. To use ADB, I need to put the device into developer mode and I can do this by selecting the phone's settings, scroll down and select About, and then tap on the entry Build Number seven times. The phone will display a message to say it's in developer mode and add a new entry to the Settings menu called Developer Options. The easiest way to run ADB is over USB. So I can go into Developer Options and select USB Debugging. When I connect it to the computer subsequently, it will then ask whether I want to activate Debugging mode. I've got my Android phone connected to the computer using a USB cable. Let's look at the commands we can use with ADB. In the Basic options, we can see a Devices command. Let's use ADB to check what devices it can see. Okay, we can see one device here. Given there's just one device, ADB will automatically select it. If we had multiple devices connected, we would need to specify for ADB which device to use. There's also a set of device level commands. I won't go into them all right now, but I'll just note some basic ones. Push and pull are used to transfer files in and out of the device. Put forwarding is a useful feature
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=92)** for investigating traffic from the device using an intercepting HTTP proxy, and ADB offers a number of commands for this: install, install multiple, and uninstall allow application packages to be managed from the command line. However, the main command we want to look at right now is shell. The shell command provides a BASH-like shell in the Android device. Let's try that. I've confirmed ADB debugging and we now have a shell. 'Kay. We're now listing the files inside our Android phone. It's worth exploring the device to see how the file bases are arranged. However, the key files we're interested in when testing exist in the slash data folder. This is where the user loaded applications exist, and slash system, this is where system applications exist. Let's look at those two directories. Again, it's interesting to explore around here, but for testing, the three areas we're interested in are system app, system priv-app, and system del-app. We can see that we have the system application packages listed in APK and ODEX files. We noted earlier that applications are zip archives in which the [[Java]] code is stored in the classes.dex file. An ODEX is basically a preprocessed version of an application's classes.dex, that is execution ready for Dalvik. For our purposes, we can concentrate on the APK files. Again, we can see the APK and ODEX files of the priv-apps loaded on the device. From the kit-kat release onwards,
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=187)** Android splits its system applications into those that have routine privileges, which are in system slash app, and those that need system-level privileges, which are in system slash priv-app. This provides more control over the more dangerous applications. Here we see those system applications which were pre-installed on the device, but which have been removed. These are not actually deleted, just hidden. We can use the Exit command to leave the shell and return to the [[Windows]] command shell. It's simple with ADB to extract an application so that we can take a look at it. I'll pull down one of the applications we saw in slash system slash del-apps called Linchee and we can take a look at that. I've now downloaded this APK from the device. I'll start JEDX to take a look a first look at it. We can now examine this file, its android dot manifest, in resources, and its source code. I won't spend time on this, as our main interest is testing the applications we install. Let's go back and see what we can find out about our user applications. This gives an error. We don't have access to slash data. This is protected from normal access as part of the Sandbox Protective Regime for applications. To get access, we need to be root and that means jailbreaking our device. However, there is another way to do this.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/getting-command-line-access-with-adb?u=76281980&t=279)** Using an emulated, or virtualized environment. I'll initially look at the virtualized environments available through ADB and then I'll look at how we might use Virtual Box to load a virtualized Android system which has been developed by the Android x86 group. However, there is another way to do this using a emulated or virtualized environment. I'll initially look at the virtualized environments available through the SDK and then I'll look at how we might use Virtual Box to load a virtualized Android system, which has been developed by the Android x86 group. There are in fact, a number of alternatives, such as Genymotion, for running applications in a soft device, and it's a matter of preference which you choose.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=0)** - [Instructor] The [[Android]] SDK provides a means of running an emulated Android device. The first thing we need to do is to selet the variant of Android we want in the SDK manager, and load it. The first thing I'll do is deselect all. And then I'll scroll down, Android 4.4.2, and I'll select the ARM EABI version seven-a system image. I'll then proceed to install one package, and I'll accept the license. This will take a short while, that's finished installing. I'll now select "tools" and "manage AVDs". And a panel pops up. I can now add an Android virtual device, by selecting "create". I'll call it "Emu", and I'll select the Nexus seven. I'll select "target" Android 4.4.2, API level 19, and I'll select the WSVTA skin. I'll add a 256 MAG SD card and then press "okay". Okay, we've now finished with the SDK manager, and can go and start the emulator. I can use the Android command to list the available targets. And I see the Android 4.4.2 target that I've installed. I can also list the available virtual devices, and I can see my Emu virtual device.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/install-an-android-emulator-from-the-sdk-2?u=76281980&t=96)** I'll now start my emulator. We have to wait a few moments while it starts up. But here we have our emulated Nexus device. I started a new command shell, and I'll now check what devices ADB can see. I can see an emulated device. Let's go and check it out. We're in the device, and we can see from the prompt that we're running as root. Let's check. And we have full access to all our user applications.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=0)** - [Instructor] I'll download the [[Slack]] [[Team Collaboration]] application and do some dynamic analysis. I can download this from the website shown by downloading from the secure server. Okay, the download's complete. I've moved the APK into my platform tools directory and renamed it slack.apk. I can now use ADB to install this on the device. Okay, that's a success and we can see the Slack icon on the screen. Let's go into the shell and what's happened. The first thing is to check the package is installed. We can see that com.Slack is now installed as a package. And we can see it's installed as com.Slack-1.apk in data/app. Let's go and see what data files have been setup. We can see the com.Slack data folder at the top of the list. Let's see what's in it. There's just one file. The application libraries which redirect to data/app-lib/com.Slack-1. Okay, this is a pretty clean install and there's nothing much to see. I can exit the shell now. A useful command for dynamic testing is logcat which shows the logs being created by the system and by applications. There's a lot of them,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=94)** including regular LAN heartbeat. We can filter this by application. But as many messages come out via the system it's useful to just capture all logs for a session and then process them afterwards. I'll start capturing logs and then we'll go and run the Slack application. I'm back at the emulator and I'll now click the Slack icon. I get a welcome screen from Slack and I'm invited to sign in or create a new team. I'll create a new team called Exohack, the extraordinary hackers. I'll enter my email address. I have one setup for testing with Slack. Okay, I'll take a note of the URL and got on to the next screen. And I'll change my username to malcolm. I won't invite anyone else to the group just now. Okay, here, we have the main chat screen. I'll send a couple of messages to the group and I'll upload a file, and I'll tell them a secret. I'll upload one of my recent downloads. Which is a report on Operation Saffron Rose. And upload it. Okay, the upload started. Okay, that's enough for now. Let's go and do some analysis. I'll stop capturing logs now
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=186)** and we'll look at this file in a moment. First though, let's go into the device and have a look at what data's been collected. Slack has setup its [[Data Structures]] and we've got a number of new folders. We have a cache file and in it, an image_manager_disk_cache subfolder. There's a number of files here. Let's go in and have a look. I'll cat one of them to get a look at what it might be. I can see that that's a PNG file. I'll copy this to a more manageable name and we'll pick it up later. I'll also take look at the journal. That looks okay. I'll look at the [[Databases]] next. There's a reasonable amount of material here to look at. Note that the T2E39PBE1 an account manager databases have shm and wal files also. The wal file is the temporary writer head logging file and the shm is its indexers. These are all SQLite databases. We'll come back and pick them up later. There's no additional data written to the files directory. We're about done here. So let's get out and retrieve the files. I can use the adb pull command to extract the files from the device. Okay, I'll click on file1.png. It's just a graphic from the program. That's fine. We need an SQLite viewer to investigate the databases we've extracted.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/dynamic-analysis-of-android-applications-2?u=76281980&t=280)** And we can get one from the URL shown. This is a simple download and [[Windows]] install. I have it installed so let's look at the databases. Before we do that, however, we need to change their extensions. I'll open T2E39PBE1 first. We can see this has eight tables. Let's go browse the data. The table messages looks interesting. The right-hand column is a blog for the message. Let's have a look at those. And we can see that our secret, that Mary really did have a little lamb, is visible. I'll look at the user table. This has the user list in it and as we scroll right we can see further information. Such as email addresses and user names. The final thing we'll do is look at the log file from logcat. This is a large file. So let's do a find on Slack. Okay we can see some entries coming up that look interesting and they may be worth further investigation. However, we'll leave it here.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=0)** - [Instructor] There are dozens of [[Security Testing]] tools for [[Android]], ranging from very expensive enterprise-grade systems, which have a comprehensive set of automated tests such as FORTIFY to simple free tools to test for one aspect of security. The list of tools is changing daily with many becoming obsolete as time passes, and many new ones appearing. The [[GitHub]] site here provides a list of tools which you may wish to look at. One notable and accessible tool that we'll take a look at is Drozer. Drozer is a full testing framework created by MWR LABS, and is available as a free download command line version or as a full GUI paid version. Drozer's pretty useful as it doesn't need root and can run as a normal app using its own bridge. I've downloaded and installed the [[Windows]] version. Drozer currently has a bug and is unable to find the javac executable from path when the JDK is installed. In order to fix it I'll change the configuration.py file. It's in the drozer, Lib, drozer folder and I'll hard code the path to javac. Okay, I've now put in my path to the javac executable in the JDK as Program Files\\[[Java]]\\jdk1.8.0_101\\bin. The Drozer zip file includes a device agent called agent.apk which we need to push onto the device. I'll use ADB to do that. I've moved agent.apk into my platform-tools directory. Let's install it in my real device. Okay, we're installed.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=95)** I'll also need to forward TCP ports to enable the connection. I've redirected port 31415. That's the port to the Drozer server which the agent runs on the device. Before starting the Drozer console I need to start up the agent on the phone. Start the app, and at the bottom left switch on the server. I'm in the drozer folder, and I'll check what devices are available, and then I'll connect. Okay, we can se my HUAWEI phone. And we're connected. Drozer has a number of plugin modules that it provides. And we can use the list command to see what modules are available. I'll use the app.package.list module to list the packages on the device. This lists the packages. And we can see at the top, the com.[[Slack]] package is installed. Let's check the information on that package. This module provides a good set of information on the package showing its data location, its APK location, the permissions it uses, and those it defines. Drozer also analyzes the attack surface of the application, the areas which can be potentially exploited. This shows there's four activities and six broadcast receivers exported. However the [[Databases]] or content providers aren't exported and Drozer hasn't reported that debugging is on,
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=192)** which is good. Let's drill down into one of the activities. This lists the four activities that are exported. Note that all can be accessed without any permissions being required. Drozer can act as an external app and create an intent to access the activity. Let's see what happens when we start the DeepLinkActivity. Okay, the phone has come up and activated with the sign-in screen. This is good. We weren't able to bypass authentication. I'll do the same for the CallNavigationActivity. This produced an error message on the phone saying Drozer has stopped. This is safe but unexpected so it may be worth spending more time to see whether there's a bug here which may be exploitable. I can do this for all the activities, but it looks as if Drozer is taking care of its authentication quite well. We can also get information on the services that are exported. We can access the services from Drozer, but need to understand what we need to send as a message. However, let's just run a test. And we get an error message on the literal baadf00d. Let's run that again. And we still get unrecognized arguments. We need to get back to our static analysis, and find out what the service does, how we interact with it, and whether it's likely to lead to any security issues. This has been an introductory taste
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/using-drozer-to-analyze-applications-2?u=76281980&t=285)** to a quite sophisticated tool. There's a lot more to Drozer, and it's likely to be one of the main tools you'll use during your dynamic testing.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=0)** - [Instructor] Sometimes a bargain is not quite such a bargain, especially when we're buying tech [[Microsoft Products|products]] from overseas. Let's take a look at a bargain P40 Pro smartphone bought from an online shop in Asia for less than $100. The packaging shows that, as ordered, we have been delivered an eight gigabyte RAM, 256 gigabytes storage, deca-core, P40 Pro smartphone. When we go to check out the system information on the phone itself, we can see that it in fact does have 256 gigabyte storage. So far, so good. But notice that the system display doesn't show the RAM, nor the processor information. Let's connect via adb and have a look inside. I've set developer mode, so let's check devices, adb devices, and we can see we have a device, 0123456789ABCDEF available. Okay, let's adb shell. And we get a shell with a P40 Pro prompt. We can run getprop to check the phone properties. And here we see the CPU name, which is showing as a deca-core MediaTek MTK6799. And we can see the storage properties are 256 gigabyte and eight gigabyte. So far, so good. It looks like we did get a bargain, but let's double-check. We'll run our df command to check what storage we've got. And we can see, there's a data folder of 12 gig and a storage sdcard0 folder of 12 gig.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=99)** We haven't rooted the phone, so we can't see the data folder, but we can see our user storage.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/checking-for-scam-phones?u=76281980&t=110)** And if we have a look in storage/sdcard0/ DCIM/Camera, we can say the listing of the two photos I've taken. So it appears, in reality, we have a 32 gig storage capacity across our applications and files. Let's check our RAM now. We can do this by saying cat /proc/meminfo. And if we check the first entry, we can see that we have two gigabytes, not the promised eight gigabytes. We can also check the CPU specification, cat /proc/cpuinfo. And here we see the processor is in fact an MT6580, which is a processor used in 3G phones and has four cores, again, not the 10-core MTK6799 that was promised. As always, the moral when buying from overseas online stores is let the buyer beware.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=0)** - [Instructor] An iOS application interacts only with the directories inside its sandbox. During installation, iOS generates a UUID and creates a number of container directories for the application inside the sandbox directory. Each container directory has a specific role. The Bundle Container holds what's known as the application bundle, and the Data Container holds runtime data for both the application and the user. The Data Container is further divided into a number of sub-folders that the application can use to sort and organize its data. The application bundle is a directory called the application name with .app appended. For example, [Batman.app](https://Batman.app). This directory contains the application and its resources. For security purposes, this directory has signed its installation time, and any changes to the directory will prevent the application launching. The Data Container is a collection of data folders used by the application, including three standard folders. The Documents folder is used for user generated content, and the Library folder for application internal data. A tmp folder is used to write temporary information which is relevant only for the current application invocation. Other folders may exist within the sandbox and these are all application specific folders. The location of the standard documents and library directories isn't always the same as the application bundle. It's an implementation detail. In addition, beginning with iOS 8,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=94)** Apple introduced a change to the application file structure and splits the data of an application from the application bundle. Consequently, some investigation is required to fully understand application and file management. And this would be both operating system version and application specific. One of the interesting files in the application bundle is Info.plist. This is a plain text XML file which contains essential configuration information for a bundled executable. And so provides an initial view of the characteristics of the application. It exists in the top level directory of the application and provides a set of keys and values describing different aspects of the application which the system uses to configure the application runtime environment. A minimum set of descriptive keys should be included. The application name, its identifier, its main executable, and so on. We'll look at the Info.plist file in detail as we progress through this course. The iOS developer page shown lists the keys which should be included in any iOS application. And it's useful to understand what they are. Application developers can add additional keys as required. We won't be covering all the standard web weaknesses which might be present in any application, workstation or mobile. These are covered separately in the Web Testing course in this series. And the testing techniques are the same whatever the end device. However, in addition to the standard web weaknesses, there are some specific iOS issues which we will cover.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/ios-applications-and-vulnerabilities?u=76281980&t=189)** The first area of investigation joint testing is application [[Data Storage]]. There are three main options for storage in iOS, SQLite [[Databases]], the keychain and property list files. All can use the range of default protection provided by iOS, but require applications to specify the form of protection. While files are not normally accessible, testing should take into account there's an attacker with physical access to the device may be able to achieve jailbreak and therefore, be able to more readily access these files. Cached and temporary data is another key focus. For performance reasons, iOS stores an unencrypted screenshot of an application when it moves to the background. And any sensitive data on screen may be recoverable. Likewise, request and response data is stored in an unencrypted SQLite database called cache.db which is easily accessed and data recovered. When reviewing the application, it's useful to check whether it passes sensitive data between processes using URL handlers. These will be listed in the application's Info.plist under the UTF bundle URL types section. When a developer builds his or her application, they will set the various binary protection flags, data execution prevention, position independent executable, and address space layout randomization. Checking these have been set is a good test of application hiding.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=0)** - [Instructor] The iOS operating system is designed to be secure. And the way in which Apple manages applications provides additional security over their supply. Security in iOS starts when the user switches on the device. The Boot ROM [[Hardware]] contains read-only code to bootstrap the system and Apple's public key. The public key is used to verify the integrity of the second stage low-level boot code. The low-level boot takes the second stage boot load, known as iBoot, from flash memory and verifies its signature before loading it. Similarly, the iBoot verifies the integrity of the kernel before loading it. This provides a fully secure startup through to kernel, and the remainder of the operating system can then be loaded. The operating system provides a number of features able to be used by application developers to secure their code. Unfortunately, not all developers use these to their fullest extent, which is why we test applications. We've already seen that applications operate within their sandbox. They're application directory, meaning that not only can't an application interact in an ad hoc manner outside its sandbox, but also that it's protected from any other application interfering with it. There are explicit methods for interacting, such as requesting permissions for access to things such as media, the camera, the microphone, and so on. Applications can also export some of their methods to enable interapplication exchanges. iDevices include special hardware features
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=95)** which provide further protection against exploitation. Memory pages can be marked as write but not execute, using the ARM chip's Execute Never feature. This is similar to the Data Execution Protection feature familiar to [[Windows]] users. Address space layout randomization ensures that code and data are not still together, and so makes exploitation by overwriting memory locations, much more difficult. Position-independent execution, which enables an application to operate from any location in memory. Stack canaries can be used to check for malicious or accidental stack overrides. Overwriting the stack is a common method for gaining remote code execution, but with a stack canary, an application routine can always check when a function returns that the canary is still alive. iOS uses three types of data file. SQLite [[Databases]], property lists, and the key chain. By default, all data is encrypted at [[Representational State Transfer (REST)|rest]] using a file system key, so that should media be stolen, the information isn't compromised. When the device is turned on, this is unlocked. The data protection API provides the developer with options for how their data is protected during operation. These options are: no protection, the file is open at all times; complete protection, the file is inaccessible when the device is locked; complete unless open, the file is accessible if the application has it open when the device is locked; and complete until first user authentication,
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=189)** the file is always accessible after the first unlock. By default, the protection is set to complete until first unlock. The key chain has additional protection given its intended use for storing sensitive information. This includes such things as allowing items to be stored only when a passcode is set, and being limited to access on this device only. iOS applications are delivered to Apple by developers, and Apple will review and sign them prior to including them in the Apple store. Only applications which have been signed by Apple can launch on a standard Apple device. This ensures that the source of applications is trusted, and that malware hasn't infected them. However, the review process is not a full, in-depth security test. And some applications are released with application-level weaknesses, which is why we not only test out applications before they get released, but also applications from the store. An additional feature of the App Store is that it protects application developers from having their software stolen and sold on the black market. Some users prefer to jailbreak their device in order to gain access to applications provided through channels other than Apple, known as source repositories or repos. But in doing so, they open their device to a substantial risk of infection. That's why when we run a jailbreak to open our testing device, it's not recommended that the mobile returns to normal day-to-day use after that. Of course, once a device can run applications that aren't signed by Apple,
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/securing-ios-applications-by-design?u=76281980&t=281)** it can run not only special purpose software, such as we use in testing, but also cracked software, illegal copies that are distributed through the black market.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=0)** - [Instructor] Testing iPhone applications requires root access to an iPhone. And this means breaking the Apple security lockdown, a process called Jailbreaking. This can be done from [[Windows]] using the popular Pangu tool. Different versions of the tool are available for different versions of iOS. Here we can see the download for the latest release of the iOS 9.2 - 9.3 tool. There are also Pangu tools for earlier versions of iOS. I'd recommend that you obtain a dedicated device to use for testing. An older iPhone 4 or 5 is not too expensive. And if you're serious about [[Mobile Testing]], then it's useful to have a device configured and ready to go. It's preferable not to use your main day to day mobile for this work, as the device will have lower security and may be less reliable than the standard iPhone configuration. Jailbreaking requires connecting an iPhone to the PC using its USB cable, and running the Pangu tool. We can see the Pangu tool jailbreak screen on this slide. As soon as you click jailbreak, Pangu will ask you to change the device's date time into the Beijing time zone. It shows you how to do that. Remember to change it back immediately after Pangu finishes, to automatic date time. The process is mostly automated, so once you've downloaded the software, then just run it. Remember to remove any phone passcode before you start. And towards the end of the process, you'll need to open the Pangu app on your phone. Once the jailbreak is complete, you'll see the Cydia application on your mobile. This is an application installation tool, which has
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=95)** a number of beneficial sources of Apple applications. I've successfully run the Pangu jailbreak tool on my iPhone 4 device, running iOS 7.1.2. And I'll use that to demonstrate iOS application testing. The first time Cydia runs, it has to prepare the file base. This takes some time and occasionally messages may appear saying that the file base is getting full. These can be closed. The main Cydia screen is shown here with useful links in the main body and App Store type controls at the bottom. The first thing we need to do to enable testing is to load the AppSync plug in for Cydia and load OpenSSH so that we can connect to the device. To do this, we use the Cydia search icon on the device at the bottom right of the screen to find and install applications. Pretty much as we would on the App Store. To load AppSync, type AppSync in the search box and Cydia will find the application from its source repositories. Install that. Then go back to search and type OpenSSH and install that. Note the sources icon towards the bottom left on the bottom row, which is used to manage the source repositories used by Cydia. While a set of standard repositories are configured by default, you may find some tools are in other repositories, and you can have these repositories using the sources function. Now we have a jailbroken device with OpenSSH installed, we can can use PuTTY to connect to the device over [[Wi-Fi|WiFi]]. I've connected my device to WiFi and checked the IP address. Go to Settings, select WiFi, and press
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=189)** the information circle to the right of the network SSID. Mine's set to 192.168.1.2. I can now connect to it using my standard PuTTY client. It takes a little while to connect for the first time, as OpenSSH on the device is generating its SSH keys. Eventually, we'll see the login prompt. The standard login for the iPhone is a user ID of root and a password of alpine. We now have a full command line shown on the iPhone as root, and can see two directories: libraries and media. Let's change the top most directory so we can explore the file system. This shows the top most file structure and we can see it has a number of redirects. For example, var redirects us to /private/var. I'll use this shortcut and drop into the var folder. There's a number of folders here and you might like to spend a bit of time searching through them to see what they contain. For instance, let's have a look at the stash folder. There's a bunch of strange named folders here. Let's look at one of them. Here we see another folder named ringtones. And if we list that, we can see the ringtones stored on the device. While it's interesting to explore, one of the key areas we're interested in, is var mobile. So let's go there. The first two folders are applications and containers. Which we'll be spending time looking at. Followed by documents, library, media, and mobile software update.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=283)** The Library and Media folders contain interesting files. Library consists of sub folders containing the various operational files used by the device. For instance, if we look at the Accounts folder, we can see an sqlite database for Accounts. Likewise, if we look at the SMS folder, we can see the SMS database, which if were extracted into open bits, would find is a clear text database of text messages. The Media folder contains the various books, music, and photographs on the device. We can see the DCIM directory. And by drilling down, we can find the photographs that are on the device. The main folders we're interested in are Applications and Containers. Applications contains a number of uuid's. Likewise, if we list Containers, we also see a similar smaller set of uuid folders. Each of these uuid folders represents an application sandbox, including its application bundle and data container folders. Let's have a look at the Application folder, starting with 73F089B1. Here we can see a set of folders: Documents, Library, StoreKit, [Viber.app](https://Viber.app), and so on. If we look at the [Viber.app](https://Viber.app) folder, we can see what Apple calls the viber bundle. The full set of application files. The Container folder provides additional data for an application that doesn't use the same application uuid. So a bit of browsing will help us associate the two.
>
> **[6:22](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/jailbreaking-for-command-line-access?u=76281980&t=382)** And here we can see additional viber container files. Now that your device is open, it may be a good time to change the default root password. You can do this using the password command. There's plenty to explore inside the iPhone, and investing a bit of time in getting familiar with the file structure of your specific test device will pay off.

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
> **[0:01](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=1)** - [Instructor] There are more tools that we can use to access third-party application repositories and to run jailbreaks depending upon the iOS version and the device we are testing. Let's check out the list of available tools On the Pangu website. We can see that the website includes menu options for jailbreak devices and jailbreak iOS versions. I'm at the iOS 16 page, and the first tool we see is Sileem, which is a repository extractor. This is an online tool, which means we can install it directly through its mobile connectivity. Sileem can load Cydia without requiring system root, so it isn't really a full jailbreak. The next tool is Palera1n, which is a semi-tethered tool, meaning we need to run the jailbreak via RPC. There are two options for installing this. HackSn0w is a new tool which provides an online semi-jailbreak which isn't permanently installed, but will work while the app is running.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/more-jailbreak-and-extractor-tools?u=76281980&t=79)** Another tool which uses a different approach is iOS 16++. This doesn't jailbreak iOS directly, but installs a web-based operating system which enables jailbreak [[Simulation]] including installing Cydia. If you need to run a jailbreak or just extract a tool from a third-party repository, this is a useful reference site.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=0)** - [Instructor] Before starting iOS application testing, we need to install some tools into the device so that we can use them from the command line. The first device tool to install is Erica which provides a collection of command line utilities. We can do this using Cydia on the device by searching for Erica Utilities. Once we have this installed, we can confirm it's working by running the plist utility which is used to extract a nice tidy output from a semi-compiled plist file. I'll check this using an SSH connection. I'll navigate from my top directory into applications FaceTime. I can use the cat command to display the plist, but it comes out in a semi-compiled and not very readable form. With plutil, we get the plist displayed in a readable form. The next utility which is useful is called Clutch and is again loaded through Cydia. You may need to add a source for this. I loaded mine through the AppCake source at [http://cydia.iphonecake.com](http://cydia.iphonecake.com). This utility is used to identify all the encrypted applications and reverse engineer them to enable source analysis. It decrypts the application and dumps it into an IPA file. Let's check we've got Clutch running. I've installed Clutch, but I need to set it to executable before I run it. I can now list all my encrypted applications. We've now got a running Clutch.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=95)** The next tool to load is the strangely named Class-Dump Z. Again, you may need to add a source for this. I loaded mine from the source at [http://cydia.radar.org](http://cydia.radar.org), which lists it as Class-Dump Z. We can look at its help output to confirm it's working. The final device tool which we'll need to use for static analysis is IPA Installer. Once again, we can install this from Cydia using the standard repositories, and check it's working. When testing IOS applications, it's useful to have a simple means of exchanging files. To do this, we can use WinSCP. The installer is available from the webpage shown here, and it's a simple [[Windows]] installation. I've taken the typical installation option. One of the [[Data Storage]] options in iOS is SQLite, so it's useful to have an SQLite viewer on hand so that we can extract and investigate these [[Databases]]. We can get an SQLite browser from the URL shown. This is a simple download in Windows Install. iOS applications don't get installed with their source files. If we don't have access to the development source repository for the application, and we want to do more than the basic static analysis, we need to progress into the advanced topic of reverse engineering of applications from their binaries. While this course isn't intended to teach you how to do assembler level reverse engineering, it will provide an introduction to the topic. To do that, we'll need to load a binary code disassembler for the iOS application executable. There are a number of different disassemblers
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/preparing-to-test-ios-applications?u=76281980&t=187)** for Mac OS, [[Linux]], and Windows. The standard tool used by professionals is IDA. This is available as a trial download, and you can install it from the website shown here. Another disassembler, which we'll look at, is Hopper. This is available from Cryptic Apps, and we'll run through the download and installation later during the course. Another advanced tool that we'll take a first look at is Snoop-It, which we'll use for dynamic analysis of application operation. This operates as a device application which can be downloaded through Cydia, after you add repo.nesolabs.de to your sources.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=0)** - [Instructor] There are two [[Forms]] of iOS applications. Encrypted apps and unencrypted apps. While we can go directly to work on unencrypted applications we need to decrypt an encrypted one before we can start static analysis. We'll use Clutch with the -i switch to list all the encrypted applications on the device. We can see we have a number of encrypted applications on the device including one called Bubbsie which I've downloaded from the app store. Notice it has an index of eight. To decrypt Bubbsie I need to run Clutch again, specifying this application with the -d switch. Clutch decrypts the application and displays the destination path of the unencrypted ipa file. We'll be using the set of folders starting at private/var/mobile and we can see that Clutch has dropped the ipa into Documents/Dumped Let's go there and take a look. We can see the filename starting with com.kontrast which is the Bubbsie application in an unencrypted ipa form. I'll just rename this to make it simpler. It's possible to directly look at unencrypted applications on [[Windows]] because IPA files are, in fact, nothing more than zip files. I'll use WinSCP to navigate to the Bubbsie.ipa file we've just created in the Dumped folder and copy it to my Windows Testing directory. I'm in Explorer at my Testing directory, and I'll change the Bubbsie.ipa extension
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=93)** to zip and then open it. We can see two items, a Payload folder and iTunesArtwork. The file iTunesArtwork is a PNG file. I can demonstrate that by opening it in Paint. I'll go into the Payload folder and then into the [Bubbsie.app](https://Bubbsie.app) folder. Here's the full application container with the Bubbsie executable and the PLIST files. I can open the Info.plist file with WordPad.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=128)** But we can see it's still semi-compiled. This technique provides and initial view of the application, but it's pretty limited. Let's go back to the mobile device and do some further processing on the IPA file. To do further analysis, we now need to reinstate Bubbsie as a clean, unencrypted application replacing the original encrypted one. To do this we use the ipainstaller tool. That's done. We now have an unencrypted application called Bubbsie on our device from which we can extract the property lists and recover the class headers. Let's go to the Applications folder and find Bubbsie. I can see that the UUID starting with E36F9E3E was installed today. And as Bubbsie's the only application I've installed today then that's what we want. Let's drop into that folder and see what's there. We can see the application bundle container which is called [Bubbsie.app](https://Bubbsie.app). Remember that we don't want to create any new files in the application folder, otherwise we'll stop the application from working. So, we'll work on the application from the outer folder. Let's have a look at the application folder contents. We can see the main application Bubbsie pick up the property list files Info.plist and ResourceRules.plist. Let's start by using plutil to look at these, and I'll save the outputs into a file called About.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/extracting-properties-and-class-headers?u=76281980&t=226)** Okay, we can see the main executable is Bubbsie and there's icon files associated with it. It's identifier is the company name and application formed into com.kontrast.thunkit.bubbsie. It's version number is 1.2 and it uses a URL handler. I'll now look at ResourceRules and append the output to About. We can see the ResourceRules have been appended, but this hasn't added anything of great interest in this case. Next, I have to run class-dump-z to extract class headers from the application. And again, I'll append them to the About file. We've now created a file called About which contains the two plist files and the class headers in readable form. Of course, an application may have other plist files and we'd extract them all during static analysis. I'll now use WinSCP to select and copy this file into Windows where I can work more comfortably on it. I'll navigate to the Applications folder and I'll download About into my Testing directory. I've opened About with WordPad. We can browse through it, adding headers to the plist if we want. And we can look for structures and interface definitions. Looking through this provides a good start point for doing in-depth dynamic analysis and identifying interesting functions that might be hooked. Within the file there are protocol and interface sections which are used to declare methods and properties. Spending time on this file helps really understand the functionality of the application and provides additional hints as to what to look for during dynamic analysis.
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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=0)** - [Narrator] iOS is a compiled application. And we can't recover source code, as we can for [[Android]]. When can however download the application binary. Run it through a disassembler, which will display the application rendered into assembler level code. And use reverse engineering techniques to understand its functionality. Analyzing applications at this level of coding, isn't for the faint hearted. And it's beyond the level of normal testing. While this course isn't geared to teaching in depth reverse engineering. It's useful never the less to have some knowledge of binary disassembly when testing. Given the lack of source code available for installed iOS applications. I'll introduce two disassemblers. And you might like to spend a bit of time after the course, getting familiar with the binary code environment. We'll use the bubbsie binary to demonstrate these tools. Let's [[Fetch]] it from the bubbsie app folder. The first disassembler I want to take a brief look at, is IDA. I've got IDA loaded, and I'll drag bubbsie into the work area. IDA recognizes this, and processes the binary file. The left hand pane lists all functions found. And the right hand pane, allows the code to be displayed in various [[Forms]]. The bottom pane is a console for messages. The IDA tab provides a pane for the selected function to be displayed. And informally shows the [[Control Flow]]. As we move down the function list, we can click on the function
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=91)** to see it displayed in disassembled form, in the right hand panel. The Hex View tab, provides a raw view of the binary file. And we can browse through it looking for strings which might indicate high coded sense tip data. Such as user ID and password. If you need a professional solution, then you may wish to look further into IDA. However, I'll take a look at another disassembler, which provides a significant capability, at a more affordable price. The second disassembler I'll look at, is called Hopper and it runs on [[Linux]]. I'll be running this in the [[Ubuntu]] Gnome environment. Hopper is a disassembler, which is capable of handling iOS applications, as well as a range of other binary formats. A trial version can be downloaded. And this is sufficient to start with. I'll scroll down and select the Ubuntu version, and download it. Firefox asked if I want to install it. Which I do. That's installed now. I'll open up the applications to find Hopper Debugger and Hopper Disassembler. I'll start Hopper Disassembler. As I've selected a trial, I'll click the trial button. I've got the bubbsie application executable, in my VirtualBox shared folder. So I'll open that by selecting file. And then read executable to disassemble. Here we see the disassembled bubbsie application. With the function list on the left,
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=185)** the procedures in the middle pane, and then inspector panel on the right. The function panel at the left, has a second tab for strings. This provides a list of all the strings in the file. And it's useful for searching for sensitive data, such as credentials. If we click on a string, we see it's position in the file. There's a couple of useful buttons at the top right. Which aren't active in the trial version, but are in the full version. I've decided the trial demonstrates half it's value. And I've bought, and installed a license. If I click on the middle icon, which looks like a flow chart. I get a function structure chart, similar to that which we saw in IDA. The right hand icon is very useful. It recreates a form of high level pseudocode, which makes reading the functions much easier. Let's use Hopper to check whether the term secret is used. And if so, what for? First thing I need to do, is go into the default settings and turn off fuzzy search. It's a bit of a distraction for what we're doing. Then I'll select the strings tab, and enter secret in the search box. We've got a list of areas where the string is used. I'll look at the first single [[Microsoft Word|word]] secret. That has no references. So I'll leave that for now. However it might be useful to chase down where that's used later. When I've got more time. The second term however, does have references. Let's go look at 5059a. Okay.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/disassembling-ios-executable-code?u=76281980&t=276)** We can see we're loading it, as a constant into register r0. We don't quite know what it's doing with it though. However, if we click on the pseudocode button, we get a pseudocode version of this routine. At the top we can see it's an authentication function. And it's associated with Twitter. Let's look down for the use of secrets. Half way down the panel, I can see that we're setting a username, and a blank password. That might be a useful insight. But I'll need to spend a bit more time understanding how it uses that. At the bottom of the panel, I can see that we're initializing a token, with a null key and null secret. Again, we might want to check further how this used. But at face value, it seems a reasonable thing to do. There's much more functionality in Hopper. And spending time developing your experience with it, will ensure you get the most out of static iOS application testing. However, as with IDA, this is quite an advanced component of your mobile tests.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=0)** - [Instructor] Having become familiar with the application through static analysis, we can now run the application and use dynamic analysis techniques to check for operational issues. Some mobile applications connect to web services and are therefore subject to web vulnerabilities. We won't be covering the topic of web testing for mobile applications, because the testing is the same whether the end device is a mobile or desktop. And the testing techniques are covered fully in the web testing course. The mobile application may connect to external servers, not only using http or https, but possibly with other protocols. Once again, we won't do network traffic monitoring in this course, because we cover it in detail for all InPointe devices in the wireless testing course. The third area of iOS testing covers the operational aspects of the application, which are specific to the mobile platform. This includes its use of temporary and cache areas, and the data stored during application execution. The tool we'll use for dynamic execution monitoring is called Snoop-it. It consists of an agent which hooks into the target application, and a web server through which it reports the application's activity. We connect to Snoop-it's web portal on port 12345. I've configured Snoop-it to monitor the operation of Bubsy, and both Snoop-it and Bubsy are now running on my mobile device. Let's connect to the portal. I'll enter the used ID and the password, which is configured by default on Snoop-it, which is snoop-it, snoop-it. We can see that Snoop-it has hugged into Bubsy,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=96)** and he's now monitoring it. I'll take a photograph using Bubsy. I'll click on the file system under the monitoring category, and we can see the initial file system accesses that Bubsy's made when initializing, the first being to read its info.p list. And further down, we can see the new image controller accesses. We can see the UUID, starting with E36F, that we investigated earlier. On the keychain, we can see accesses to the keychain, and the attribute of kSec, attribute accessible when unlocked. Under network, we can see the https and http cores, and under sensitive APIs, the calls to location service, camera and [[Wi-Fi|wifi]]. We hover over an entry, we can see the details of the thread where the events happened. Under common crypto, we see the calls to the crypto routines. The analysis section provides the class analysis that we saw earlier interactively. I'll scroll down to TJC user account manager and select it, and we can see the class headers in the panel on the right. We can also do testing using these classes. I'll scroll to the bottom, to the simple test function, and on the right, scroll down the methods to helloSnoopi. The setup and invoke button at the top right will activate and if I press that, I'll get an invocation popup. I'll enter Linus as the ID, and invoke method.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=190)** And the result of the method is returned. Snoopi saying hello to Linus. We can do this with the Bubsy routines also. For instance, if I scroll to iRate, and then select the method message, and press setup and invoke and invoke the method, I get the Bubsy user rating message. Interacting with the running application is complex, and requires a good understanding of the methods, but it does offer an opportunity to stress test them as part of advanced testing. Moving on, I can also click on URL schemes. And we see the two URL schemes we saw earlier during our static analysis. The runtime manipulation functions allow fake information to be put into the device, such as a fake device ID, a fake MAC address and a fake device model. It also allows the current location to be manipulated. For instance, we can enter Jakarta, Indonesia.
>
> **[4:17](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=257)** And we can set the address. Note that the Snoop-it browser will lose connection with the device server if the application being monitored is in the background, but it will resume when the application is again active. We can now use WinSCP to have a look through the file system on the device. We can see that temp was accessed today, but when we look in it there's no files remaining. Bubsy has cleared up after itself. In library, we can see the preferences folder has been accessed. And in that, we can see the p-list files that have been updated. Let's go through PuTTY and use PLU tool to check that content, to make sure no sensitive data has been stored. I won't worry about the Apple files, just the application p-list. Here we can see configuration information, followed by some rating information with a date-time stamp and count. We're good, nothing sensitive here. Let's take a look at library caches and into the contrast folder. Here we can see the application cache files plus a Snoop-it cache directory. The Snoop-it cache directory isn't part of what we're testing. It's been created by Snoop-it, so we don't need to be concerned about it. We can, however, extract the SQLite [[Databases]], and look at them them using our database browser. I'll download the cache.db-wal, cache.db-shm and cache.db files to my testing directory and have a look at them. Before I do that, I'll change their names to make sure that we can read them. I'll use the SQLite database browser to check them.
>
> **[5:54](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/advancing-into-dynamic-analysis-of-ios?u=76281980&t=354)** Cache one has no tables, so it's fine. Cache two is encrypted. So is cache three. We're good, no sensitive data here. We're pretty much done now. We can't find any sensitive remnants after running Bubsy and, to the extent we monitored it, we didn't see anything particularly concerning in its operation.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=0)** - [Instructor] The [[OWASP]] folks have provided a training tool which we can use to learn about [[Mobile Testing]]. It's the Security Shepherd, described on the website here. This comes as a virtual machine, and you import it as an appliance into VirtualBox. I've downloaded and imported it, and it's running on IP address 10.0.2.19. We also need to download the Security Shepherd mobile VM, which we can do from here. This comes as a .7z compressed file, and it contains a virtual box appliance, as well as some tools and APK files. I've installed the appliance, and we're ready to go. I'll browse to 10.0.2.19 on my lab network, and here we have the Security Shepherd login screen. When you first start it up, you'll want to log in as admin with the password password. The first thing you'll be asked to do then is to change the password, which I've already done. And I'll log in with my credentials. Okay. The first thing we'll do is open mobile levels only, and then we'll go to Admin, Module Management, change the module layout, and enable open floor mode. And that provides us with access to all the lessons. We'll then select Lessons, and we see the set of lessons we can take. Let's select the first, Broken Crypto. We can see that the lesson is about breaking an encrypted chat session, and we're pointed to the [[Android]] VM. Here we can see the MobileShepherd virtual device.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=95)** When we pass over the screen, we lose our mouse, so the first thing we need to do is select Input, Mouse Integration. And then we can see the mouse, and we go on the screen and click, and we can click to become a device mouse. To escape the device, we can press the right Control key on our host keyboard. We can also do a check at port 5555 on the Security Shepherd mobile device, [[Nmap]] -PS -sV
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/taking-a-look-at-security-shepherd?u=76281980&t=124)** - p5555 10.0.2.21. And we can see this is open. We can connect to it with the ADB application, which I've installed in Kali, adb connect 10.0.2.21:5555, and we're connected. And we can adb shell to get a shell. And we can see that we are in fact an Android device.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=0)** - [Instructor] Let's click on BrokenCrypto and we get the BrokenCrypto lesson with three BrokenCrypto challenges and we'll select the lesson. Okay, we get a series of messages. When we double click on a message, the app pops up an option for us to select all and to copy. But before we do anything more, let's examine the messages. We can see that they have the value 20 occurring quite frequently and that's the hex value of a space. When we look at the first message, which starts 48656C6C6F2C20, we can see this looks very much like just a hexadecimal representation of the plain text message. There's plenty of ASCII charts available online and here's one we can use. The first part of the message decodes to hello. So all we have to do is use our ASCII chart to recover the messages, character by character. If we decode further, we find the first message starts with hello, how are you? We are holding a competition. We can decode all the messages, but in the interest of time, let's go directly to the last message. And we can scroll up the screen to do that. The message starts with, well, I have to do this... space, the key is. And when we decrypt the message starting at 33336564, we find that the key is 33EDEB397D665ED7D1A5
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/watching-for-bad-cryptography?u=76281980&t=102)** and so on. And there we have our key. This is what the lesson wanted us to find. So we can go back to Shepherd and enter it in the result key field at the top. 33EDEB397D665ED7D1A580F3148D4B2F
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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=0)** - [Instructor] Let's check out another lesson. This time, we'll take a look at insecure [[Data Storage]]. As described here, mobile apps can store data in the mobile device rather than in a backend server. And this can make apps much more responsive. On-device storage will typically use an SQLite database. Again, for this lesson, we need to use our Mobile Shepherd device. On the mobile phone screen, let's click on Insecure Data and then select the lesson Insecure Data. This brings up a message panel saying the key isn't here. Our mobile device has been set up to developer mode, so we can get into an [[Android]] shell on the device. We've already seen that we can connect from Kali using ADB. However, we can also simulate the effect of using ADB by pressing Alt + F1. And this goes into a shell directly from the device. If we want to go back to the mobile screen, we can use Alt + F7. Okay, we're at the command line. We can navigate to data/data to look for our application data, and it will list out the contents. We can see here, we have a number of folders, one of which is called com mobshep insecure data. Let's go into this, cd com, mobshep, insecure data. And we'll see what we've got.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/insecure-data-when-in-developer-mode?u=76281980&t=92)** We've got cache, [[Databases]], and lib. Let's go into the databases folder, and list, and we can see we have two databases, member and member journal. To look at the data in the member, [[SQL]] Lite database, we can simply dump the file out with cat, cat members, and we can see that it has a name VARCHAR, and a password VARCHAR. And we have an entry, admin battery, 7, 7, 7. Back in Shepherd, we can now enter, battery 7, 7, 7, and submit. And we've successfully completed the lesson. There are more lessons and many challenges that you can take in Security Shepherds mobile arena. You should continue to work through these after you finished this [[LinkedIn]] learning course to consolidate and extend your knowledge in the [[Mobile Testing]] space.

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
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-mobile-devices-and-platforms/next-steps?u=76281980&t=0)** - [Malcolm] I'd really like to thank you for joining me for this [[LinkedIn]] Learning course. I hope you enjoyed learning how to test the security of mobile technology and applications. Learning how to do [[Mobile Testing]] is just the start of your path to becoming a good mobile tester. Having understood the concepts and learnt about how to use the tools, you now need to practice and gain experience, and, in particular, become familiar with what is normal in a mobile app so that you can detect the abnormal. It's a lot of work, but it's also a lot of fun. There's always something new in [[Cybersecurity]]. And if you're interested in learning more, then check out the full cybersecurity [[Ethical Hacking]] segment of the library, where new [[Security Testing]] courses are added regularly. You'll find courses on using [[Kali Linux]], information gathering, denial of service, wireless testing, and much more. I'd also like to invite you to go to my author page, where you can find some additional courses on cybersecurity. If you want to get hands-on with some of the common tools, then do take a look at my introduction to Kali Linux, web application testing, and wireless testing courses. If you're wanting to learn about security for the cloud, then cybersecurity for [[Cloud Computing]] is for you. Thanks again for joining me on this course, and I hope to see you again soon.

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