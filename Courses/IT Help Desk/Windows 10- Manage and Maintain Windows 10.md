---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-10-manage-and-maintain-windows-10-2019
url: "https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019"
duration_minutes: 142
duration: 2h 22m
level: Intermediate
updated: 10/8/2021
learners: 27989
skills:
  - Windows 10
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHwdHRPswHQiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567185863433?e=2147483647&amp;v=beta&amp;t=hUu4PM6qHFfNLt9ghEmayyF5eaBIFw-CqrW5ii2uUg4"
linkedin_topic: IT Help Desk
learning_paths:
  - '[[Advance Your Skills as an IT Help Desk Specialist]]'
prev_courses:
  - '[[Windows 10 Configure And Support Core Services]]'
next_courses:
  - '[[Windows 10 for IT Support- Advanced Troubleshooting]]'
path_nav: '[{"path":"Advance Your Skills as an IT Help Desk Specialist","position":2,"total":11,"prev":"Windows 10 Configure And Support Core Services","next":"Windows 10 for IT Support- Advanced Troubleshooting"}]'
path_count: 1
tags:
  - course
  - topic/it-help-desk
  - skill/windows-10
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/IT%20Help%20Desk/Windows%2010-%20Manage%20and%20Maintain%20Windows%2010.md)

![Windows 10: Manage and Maintain Windows 10](https://media.licdn.com/dms/image/v2/C4E0DAQHwdHRPswHQiA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567185863433?e=2147483647&amp;v=beta&amp;t=hUu4PM6qHFfNLt9ghEmayyF5eaBIFw-CqrW5ii2uUg4)

# Windows 10: Manage and Maintain Windows 10

> Extend the life of the Windows machines in your organization by learning how to perform basic management and maintenance of Windows 10. Learn how to configure updates, monitor events and performance, back up and restore files, recover the entire system, and configure OneDrive for Business. She touches on Windows Defender, System Restore, Windows Insider, Resource Monitor, and more obscure servicin

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019) | 2h 22m | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The benefits of managing and maintaining Windows 10](#the-benefits-of-managing-and-maintaining-windows-10)
- [**1. Configure Updates**](#1-configure-updates) (5 videos)
  - [Configure basic Windows Update options](#configure-basic-windows-update-options)
  - [Plan for Windows Update in an enterprise](#plan-for-windows-update-in-an-enterprise)
  - [Select the appropriate servicing channel](#select-the-appropriate-servicing-channel)
  - [Troubleshoot updates](#troubleshoot-updates)
  - [Update Microsoft Store apps](#update-microsoft-store-apps)
- [**2. Monitor Windows**](#2-monitor-windows) (10 videos)
  - [Configure services](#configure-services)
  - [Configure event subscriptions](#configure-event-subscriptions)
  - [Manage performance with Task Manager](#manage-performance-with-task-manager)
  - [Manage performance with Resource Monitor](#manage-performance-with-resource-monitor)
  - [Manage performance with Performance Monitor](#manage-performance-with-performance-monitor)
  - [Manage performance with Reliability Monitor](#manage-performance-with-reliability-monitor)
  - [Monitor and manage printers](#monitor-and-manage-printers)
  - [Schedule tasks with Task Scheduler](#schedule-tasks-with-task-scheduler)
  - [Implement encryption](#implement-encryption)
  - [Configure Windows Defender Firewall and antivirus](#configure-windows-defender-firewall-and-antivirus)
- [**3. Manage Local Users, Local Groups, and Devices**](#3-manage-local-users-local-groups-and-devices) (7 videos)
  - [Create a workgroup or join a domain](#create-a-workgroup-or-join-a-domain)
  - [Create user accounts in Accounts and Computer Management](#create-user-accounts-in-accounts-and-computer-management)
  - [Manage local groups: NTFS permissions in Computer Management](#manage-local-groups-ntfs-permissions-in-computer-management)
  - [Manage users with Computer Management and Group Policy](#manage-users-with-computer-management-and-group-policy)
  - [Configure application settings](#configure-application-settings)
  - [Configure Credential Manager](#configure-credential-manager)
  - [Use Group Policy to secure users and computers](#use-group-policy-to-secure-users-and-computers)
- [**4. Configure System and Data Recovery**](#4-configure-system-and-data-recovery) (10 videos)
  - [Recover Windows 10 with a recovery drive](#recover-windows-10-with-a-recovery-drive)
  - [Create and manage System Restore points](#create-and-manage-system-restore-points)
  - [Explore recovery options](#explore-recovery-options)
  - [Troubleshoot the startup and boot process](#troubleshoot-the-startup-and-boot-process)
  - [Restore with file history](#restore-with-file-history)
  - [Configure OneDrive](#configure-onedrive)
  - [Configure OneDrive for Business](#configure-onedrive-for-business)
  - [Access and configure Backup and Restore](#access-and-configure-backup-and-restore)
  - [Explore wbadmin](#explore-wbadmin)
  - [Recover the OS with Windows Recovery Environment](#recover-the-os-with-windows-recovery-environment)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The benefits of managing and maintaining Windows 10](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/the-benefits-of-managing-and-maintaining-windows-10-14304567?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/the-benefits-of-managing-and-maintaining-windows-10-14304567?u=76281980&t=0)** - Welcome to [[Windows 10]], Manage and Maintain. In this course, I'll show you how to keep Windows 10 up to date and running smoothly in a small business or enterprise environment. Hi, my name is Joli Ballew, a best-selling author, a professor, and a Yogi. Managing and Maintaining [[Windows]] is more than just enabling Windows Update, Windows [[Microsoft Defender|Defender]], and system restore. There are many other tools at your disposal. Beyond Windows Update for instance, there are additional servicing options to keep your computers protected and configured with the latest features, including Windows Insider. There are traditional tools like event viewer, resource monitor, task manager, and more that let you monitor your devices and troubleshoot them effectively when problems occur. You can also prepare for disaster by creating a recovery drive and understanding the Windows recovery environment. There are various ways to network computers and options for user accounts and new ways to keep domain joint computers from infecting your internal network by checking their health prior to letting them in. As you can see, there's quite a bit to explore. So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Windows 10]] (2), [[Microsoft Defender|Defender]] (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - welcome (1)


### 1. Configure Updates

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure basic Windows Update options](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-basic-windows-update-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-basic-windows-update-options?u=76281980&t=0)** - Let's begin by talking about [[Windows]] Update. Windows Update is a service that provides important updates to [[Microsoft]] operating systems, protects against malware and security exploits, enhances Windows components and improves functionality. Windows Update has been available to users in control panel since Windows Vista. With [[Windows 10]], it's available from settings. I'll click Start and I'll click Settings, and then Update and Security to show you. I could check for updates if I wanted to, but that takes some time. So, I'll skip it for now. I don't have to check manually though. Microsoft releases security updates on the second Tuesday of every month and Windows gets them automatically. To see more settings, click Advanced Options. You can review and change how updates are installed among other things. Here, is giving me updates for other [[Microsoft Products]] when I update Windows. Here's to automatically download updates, even over metered connections. And I like this one, show a notification when your PC requires a restart to finish updating, you can also pause updates and you can choose how and when updates are installed. We'll talk about this shortly. I'll click Back. Let's look at another setting, change active hours. Here's where you tell Windows when you usually use the computer. This is a safeguard against unexpected reboots due to updates.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-basic-windows-update-options?u=76281980&t=93)** Go ahead and set your active hours now and click Save. Now, click View update history. I don't have much of a history here because this computer's pretty new, but you'll probably have a whole lot of updates. There are a few other advanced options you might be interested in. So, let's return to that for a minute. Let's click Advanced Options. One more time. Let's look at Delivery Optimization. This feature creates a local cache of updates and shares those with other PCs on your network. You can enable it for your local network or internet. If you're concerned about bandwidth, have an unreliable or unlimited internet connection, or have a lot of computers on your home network, you should enable the setting. Not all the options about Windows Update have to do with updates. You can find additional options in the local group policy editor provided you're running Windows 10 enterprise or professional. I'll type gpedit.msc and select edit group policy in the results. Local group policies are rules that you enable or disable that determine how the computer will work and what you allow users to do and can be used to place restrictions on the various Windows components like Windows Updates, as well as what you'll allow your users to do, well, on the computer. There are two areas to consider, computer configuration and user configuration, because I want to apply changes
>
> **[3:07](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-basic-windows-update-options?u=76281980&t=187)** to the computer in this instance, I'll expand computer configuration and navigate to this settings, computer configuration, administrative templates, Windows components, and down at the bottom Windows update. If you're interested in controlling how Windows Updates work you might want to read through the options, you might want to, for instance, allow updates to be downloaded automatically over metered connections, to keep mobile users updated, even if they don't have access to [[Wi-Fi|wifi]]. Perhaps you don't want to include device drivers with Windows Updates because you want to test all drivers first in the lab. You can configure that setting as well. You can also allow automatic updates immediate installation, should you want all updates to be installed as soon as they're available. There's always more to explore, especially here in the editor, but this gives you a good start regarding how to control Windows Update. Go ahead and continue to look around in the local group policy editor, and then close all of them windows when you're ready to proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (17), [[Microsoft]] (2), [[Windows 10]] (2), [[Microsoft Products]] (1), [[Wi-Fi|Wifi]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - let (1)

#### [Plan for Windows Update in an enterprise](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/plan-for-windows-update-in-an-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/plan-for-windows-update-in-an-enterprise?u=76281980&t=0)** - [Narrator] Managing updates on a personal computer or a small group of computers in a network doesn't generally require too much preparation. Often you set the update options and let the updates install automatically. Keeping computers updated in an enterprise is a lot more complicated than keeping a handful of machines up to date in a small network. There are many things to consider prior to installing updates, when thousands of computers are involved, especially when those computers are required for a corporation to run smoothly. And when downtime isn't an option. To make sure things go well during updates, especially big ones like updating from [[Windows 10]] to [[Windows]] 11 enterprises create and follow a deployment plan. This plan has many parts. It will categorize the computers that are already [[Hardware]] ready for the update. It will also define what to do with those that aren't. An enterprise might skip these machines or relegate them to a lab or other non-essential area, but more often we'll either update or retire them. The plan will also calculate software costs based on how many managed and unmanaged devices require the update. This is where servicing plans come into play, something you'll learn about in the next movie. Users who bring their own devices will also need those devices to be assessed. It will also define how to test existing applications to make sure they'll work after the update and what to do if essential apps aren't update ready.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/plan-for-windows-update-in-an-enterprise?u=76281980&t=101)** Here's some of the apps that will need to be assessed. The enterprise will also have to make sure the existing infrastructure is able to push out the upgrade while also backing up all the data and computers beforehand, you will need to define which updates will be deployed and which will not. There are many types, including quality and feature updates and the life cycles of each to consider. And one last thing, the enterprise must define a plan for educating end users on the changes included in the update. If the update is an entire upgrade to the operating system, those changes could be challenging for those users to find an adapt to. Once the enterprise has created the plan, they then turned to huddle, do it. They define what kind of infrastructure they'll use for the deployment and the options vary or are dependent on the enterprise. Here are only a few of the available options. It's also important to follow the advice from [[Microsoft]] to join Windows insider for business, which I'll discuss later in this course, there are options to preview builds and download and deploy builds from Microsoft's ISO pages when you do. Finally, there are additional tools for helping an enterprise determine readiness prior to deploying a pilot update, such as those available in Microsoft endpoint manager. The last part of the deployment plan will include a plan for pilot rollout.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/plan-for-windows-update-in-an-enterprise?u=76281980&t=195)** At a high level, the plan will choose a small group of users or devices to receive the upgrade. They'll implement various updates one at a time when they test. They'll validate that any deployment processes have succeeded, they'll test and support the users and devices in the pilot, and finally make adjustments and decisions for future updates based on the results of the pilot. This process can take months to complete the first time, but after it's done, the enterprise can reuse and tweak the plan for future updates. The takeaway is that a deployment plan is critical to a successful update rollout.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Windows]] (2), [[Windows 10]] (1), [[Hardware]] (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** in the next (1), later in (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** iso (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Select the appropriate servicing channel](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/select-the-appropriate-servicing-channel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/select-the-appropriate-servicing-channel?u=76281980&t=0)** - If you'd like to have access to the next generation of the [[Windows]] operating system before those additions are released to the public, as well as explore the available servicing options, you'll want to opt in to Insider Preview. When you do, you'll get access to updated builds of Windows, and can test the product and provide feedback to [[Microsoft]]. If this sounds good to you, let's have a look. Click Start, Settings, and Update and Security. Click Windows Insider Program on the left side. Now click Get Started. The first thing you need to do is link an account. I'll click Link An Account, and I'll choose the account to use. I'll click Continue. Here's where I can choose the kind of content I'd like to receive. Go ahead and read each of these and decide what's best for you. There's dev channel, beta channel, and release preview channel. I prefer the middle option, which is the recommended option for Microsoft. The beta channel is ideal for early adopters. At the time I recorded this, they were Windows 11 builds. Make sure you understand that you'll be opting in to try out pre-release software that might not be fully tested. This means the OS might not be stable
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/select-the-appropriate-servicing-channel?u=76281980&t=93)** and it might have some bugs. It'll also change often as features are added and removed. That said, make sure you aren't going to opt into Insider Preview on a computer you depend on and use every day. I'm not going to commit on this computer. So I'll click cancel. Beyond the Windows Insider Program, there are other servicing options to consider. Before I discuss these though, let's talk for a minute about what servicing actually means. The goal of Windows as a service is to continually provide new capabilities to the Windows operating system. Instead of having independent releases, think about Windows ME and Windows 7 and so on. With Windows as a service that ends and new features are provided or updated on a schedule as outlined in the servicing option you choose. You already know about Windows insider and this is likely the best for tech enthusiasts on small networks. The semi-annual channel provides new functionality with twice yearly feature update releases. Organizations can choose when to deploy these updates after testing them. This is best for organizations that want to get updates early and then roll them out when they're ready. The long-term servicing channel is designed to be used only for specialized devices, which typically don't run things like [[Microsoft Office]]. These are usually devices that control medical equipment or are used on bank teller machines or ATM machines for example.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/select-the-appropriate-servicing-channel?u=76281980&t=187)** In this channel, the device receives new feature releases every two or three years. If you're an end-user, you should start with Windows insider. As you move into corporate settings, we're updating machines and other infrastructure as crucial to the functionality at the business. You have to choose another servicing option. Continue on to learn more about updating Windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (13), [[Microsoft]] (2), [[Microsoft Office]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** atm (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - if (1)

#### [Troubleshoot updates](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/troubleshoot-updates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/troubleshoot-updates?u=76281980&t=0)** - [Instructor] Have you ever had [[Windows]] install updates only to find out later that they caused the computer to become unstable? There are a few ways to recover from this. One is to use System Restore to revert the computer to a previous stable state. While this might resolve the issue, the update might still re-install itself later and recreate the problem. If System Restore doesn't work, you can also try to uninstall an update on your own. And upon the likely automatic re-installation of it at some point via Windows Update, the bug could be fixed by then. To see this option, again, go to Start, Settings, and Update & Security. Click the Windows Update tab. And from here, click view update history. Here's a list of my latest updates. You can click any link to learn more about each one. If and when you think you've discovered the troublesome update, click Uninstall Updates at the top of the page. Choose the update you no longer want, and click on Install. Note that not every update will have an uninstall option, though. This one does, but this one doesn't. There's another option to take a look at, and that's the Windows Update Troubleshooter. Start, Settings, Update & Security, and Troubleshoot.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/troubleshoot-updates?u=76281980&t=96)** The Windows Update Troubleshooter is available here under additional troubleshooters. I'll click it to show you, and I'll click run the troubleshooter. In a perfect world, by the time you got here, [[Microsoft]] would have already figured out which update is problematic and updated this troubleshooter to help you fix the problem. I'll click the Back button and go here to the Recovery tab to show you a few more options. We'll talk about this more later, but the Reset this PC option lets you choose from these two options. You can reset the PC and keep your own files, or you can remove everything and start over. I'll click Cancel. On an end note, you might've found yourself here thinking I'd show you how to hide problematic updates forever, never to be re-installed. If that's what you're looking for, you'll have to obtain an old copy of the Microsoft Show or Hide Updates Troubleshooter. Microsoft doesn't offer that tool anymore. Be aware, though, you'll have to get it from a third-party site, and often, those are awash with ads and viruses. Try the options I've offered here first, and use the old Microsoft Show or Hide Updates Troubleshooter as a last resort.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Microsoft]] (4)
> **Warnings:** note that (1), troubleshoot (1), be aware (1)
> **Prerequisites:** install (3)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Update Microsoft Store apps](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/update-microsoft-store-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/update-microsoft-store-apps?u=76281980&t=0)** - [Instructor] The [[Microsoft]] Store is where you acquire new apps. The store is also where app updates originate. It's where manufacturers provide updates to fix bugs, add features, add additional information, and improve functionality. App updates might also include security features to fix issues uncovered after the app's release. By default, apps are updated automatically in [[Windows 10]]. You can manually check for updates in the Store by clicking the three ellipses and then Downloads and updates in the [[Windows]] Store window. From this window, click Get updates to see if any are available. Here are a few updates in the download queue. We'll wait while they download and install. It's best to let Windows keep your apps up to date, if for no other reason than to keep them secure and to fix any issues that can cause the app to perform poorly. But if, for whatever reason, you want to disable updates, you can. You might want to do this if it's your job to support users who work with apps from the store. Possibly because you want to test updates in a lab first before rolling them out to your workforce. Store apps aren't just fan and games anymore. There are plenty of apps that businesses use in a larger environment, and in these cases, it's always best to know what an update includes versus being surprised one morning with hundreds of support tickets after an update reaches your entire workforce. Let's click those ellipses again
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/update-microsoft-store-apps?u=76281980&t=93)** and this time, let's click Settings. Look for the slider for App updates. You can move it from On to Off if you like. You can manage how apps update in local group policy, too, which is available in Windows Pro and Windows Enterprise. Let's take a look. I'll type gpedit.msc and click Edit group policy in the results. The settings we're looking for are under Computer Configuration, Administrative Templates, Windows Components, and Store. Click the second entry, Turn off Automatic Download and Install of updates. If you click Enable, you can see that this will disable the automatic download and installation of app updates. Notice the other settings. You can disable all apps or even prevent access to the Store by turning off the Store application. If you ever have a problem with an app and updating it doesn't work, you can uninstall and reinstall the app. To uninstall an app, locate it in the Start menu, Here's Candy Crush Saga. To uninstall, right-click and choose Uninstall. It doesn't take long at all. You can't just uninstall anything, though, which is why I opted to show you how to uninstall from the Start menu.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/update-microsoft-store-apps?u=76281980&t=187)** For instance, you can't uninstall the Store. You can't uninstall the Mail app, the Weather app, and other default apps that come with Windows 10. You'll be able to tell easily because uninstall won't be an option when you right-click. If you ever decide you need to reinstall an app, all you have to do is search for it from the Store. We'll go back Home in the Store and we'll search for Candy Crush. And here we go. It says Owned. I can click and opt to install. If you use Store apps, remember it's best in most cases to let those apps update themselves automatically. However, you're in control and can disable this behavior and uninstall and reinstall apps as desired.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Windows 10]] (2), [[Microsoft]] (1)
> **Prerequisites:** install (3)
> **UI Navigation:** right-click (2)
> **Analogies:** for instance (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### 2. Monitor Windows

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure services](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-services-14305517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-services-14305517?u=76281980&t=0)** - [Instructor] A [[Windows]] service is a program, a routine, or a process that runs in the background. Windows update, Windows firewall, and network location awareness are examples of services. You can see these services and others in the Services window. Type services in the search window and click it in the results to follow along with me. You can sort the services in many ways. Sort by type by clicking the start-up column. Some services are configured to start when the computer does and are necessary for the computer to run effectively. These services are set to automatic. Sometimes problems arise when a service that needs to be running isn't. Ongoing problems ensure when a service needs to start automatically and run in the background, but doesn't. You can address these issues and more from the applicable services properties dialog box. I'll double click Plug and Play to show you. I'll sort by name first, so it's easier to find. I'll double-click Plug and Play. This service is what makes it possible to connect a device and let Windows configure it with very little input from you, if any. It's an important service, for sure. The explanation here states that disabling or stopping the service can result in system instability. If you were to discover a necessary service like this one was disabled while troubleshooting an unstable system, you could likely recover quickly by enabling it. Let's take a look at some of the other options
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-services-14305517?u=76281980&t=93)** from the General tab and why you might change a specific configuration choice. Startup Type offers four options. Automatic delayed start is best when you want to configure the service to automatically start during the boot and logon sequence, but at that same time don't want it to slow down the process. This option delays the start time just a little bit to increase logon performance. Automatic configures the service to automatically start during the boot process and the logon processes. Manual causes a service to become available only when it's needed, and disabled will disable the service. Disabling the service prevents the service from starting. You'll have to enable it manually here to get it going again. You can also stop, start, pause, and resume services. If you're having problems with a service, try stopping and starting it. That may resolve the issue. There are three more tabs. The Logon tab lets you configure the logon account that's used to start the service. The local system is selected by default, but if you've been directed to specify another logon account, you can do so here. As an example, you might want to configure a service to run from a domain account and has access to domain resources if problems arise for the service and the local system account. The Recovery tab allows you to designate what action will be taken if the service fails to load. You have options for first, second, and subsequent failures. You could take no action.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-services-14305517?u=76281980&t=188)** If you're troubleshooting, though, choose Restart the Service. Restarting the service will often resolve the problem. You could choose to restart the computer. This is a drastic step, so I'll suggest you use it only as a last resort. Run a program asks you to specify the program to run. You might want to run a script that notifies you when a service doesn't start so that you can look into the issue, perhaps uncovering its trigger. And finally the Dependencies tab. This lists any services that must be running in order for the selected service to start. There are no dependencies for Plug and Play. However, if there's information, you can use it to cross-reference those services and make sure they're configured to start, as well. Before you close the services window, take a look at the services that are currently disabled on your computer. I'll click Startup Type to sort them. You might find that Auto Timezone Updater is disabled, perhaps by choice, or [[Routing]] and remote access. You might even see some smart card services. If you don't need, say, the Smart Card Policy service, then it doesn't need to be enabled. See what's enabled and disabled on your computer, and then close the services window when you're finished.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Routing]] (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **UI Navigation:** double-click (1)
> **Speakers:** - [instructor] (1)

#### [Configure event subscriptions](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-event-subscriptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-event-subscriptions?u=76281980&t=0)** - [Instructor] Event viewer logs display events that occur on your computer. Events are created automatically by [[Windows]] in response to incidents that occur on your machine, such as an application freezing up, a user trying to log in, or a device driver failing to load, among other things. I'll expand Windows Logs and choose Application to show you some examples. There's no efficient way to review these logs regularly. There are thousands of events just on the single computer. That's where event subscriptions come in. You can create a subscription to alert you when a specific event occurs on a computer. And you can even have task scheduler perform a task in response to it if you like. Take a little time to review the logs from event viewer and make a list of events you'd like to monitor. When you create your first subscription you can refer to that list to make sure you collect exactly what you want. You might want to monitor critical system events, for instance. In event viewer, click subscriptions. If you are prompted to enable any services, do so and restart your computer if prompted. There are two types of event subscriptions, collector initiated and source computer initiated. Collector subscriptions are those that retrieve events from another computer. That other computer is called a source computer
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-event-subscriptions?u=76281980&t=94)** because it is the source of the events. This type of subscription is best for smaller networks, because each computer has to be configured manually for it to work. And it would be harder to implement if you had a lot of computers to manage. Source computer initiated subscriptions are those that start at the source computer. The source computer sends events to a collector computer. This is best for larger networks because source computers can be configured using group policy and do not need to be configured one at a time. Whatever you choose, both the source computer and the collector computer need to be configured before any events can be collected. Source computers need to run the Windows Remote Management Service and collector computers need to run the Windows Event Collector Service. Let's configure the collector computer first. We need to enable this computer to view subscriptions. I'll do this on my [[Windows 10]] Enterprise computer. First we'll open an elevated command prompt. I'll type C-M-D. I'll right click the command prompt and choose run as administrator. Now we need to type the proper command. The command is wecutil space qc. This is the Windows Event Collector Utility. And qc means quick config.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-event-subscriptions?u=76281980&t=191)** Would I like to proceed? Yes, I'll type y and press enter. You can see the Windows Event Collectors Service has been configured successfully. Now I'll switch over to my source computer. It needs to be configured as well. Again, I'll open an elevated command prompt. Click Yes. And I'll type the required command here. That command is winrm space quick config. Winrm stands for Windows Remote Management and starts the service.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-event-subscriptions?u=76281980&t=239)** It says it's not set up yet but would I like to make the changes. I'll click yes. If your network is set to public, you'll receive an error. The network type needs to be set to private or domain. If you get errors, make changes if you need to and then continue on. If other problems are detected, type y to let Windows resolve them. You might have to allow firewall exemption, for instance, or let a service run. Now I'll return to my collector computer, the machine running Windows 10 Enterprise. And here I am back at my collector computer. In Event Viewer I'm ready to create a subscription. I'll right click subscriptions and click Create Subscription. I'll start by filling out the required information. I'll leave the destination log at Forwarded Events. I'll opt for collector initiated. I am at the collector computer. And I'll click Select Computers. I'll click Add Domain Controller, and I'll type the name of the source computer. I know the name of that computer is winpro-1. I'll click check names. And there it is. Now I'll click OK and OK again. Now I need to set the events that I'd like to monitor. So I'll click Select Events. I'll collect critical events that appear in these event logs, Security and System. I'll click OK.
>
> **[5:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-event-subscriptions?u=76281980&t=333)** Now I'll click Advanced and finish up. You can configure any additional settings here. You might want to use HTTPS for additional security or select an event delivery optimization option. I'll just leave everything like it is and click OK. And I'll click OK to close it up. Now you can see the new subscription. It's listed in this list. You'll start to see events in the Forwarded Events node as events occur that match your criteria. Sometimes problems arise when you first try to configure a subscription. If it isn't working, right click the subscription in Event Viewer and click Runtime Status. You'll need to resolve any errors you see. It might be that the computer isn't available on the network or that the firewall exception for winrm wasn't configured. You might even see errors related to security. If this happens, make any changes you need, and when you're ready, try again. Just right click and click Retry. Even though creating subscriptions can be a little tricky the first couple of times, once it's set up it can provide a ton of useful information. You can browse through the information at your leisure, too, and attend to issues as they arise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Windows 10]] (2)
> **CLI Commands:** make (5), node (1)
> **Prerequisites:** configure (3), set up (2), you'll need (1)
> **Tools:** command prompt (3)
> **Analogies:** for instance (2), such as (1)
> **Definitions:** is called (1), stands for (1)
> **Env Vars:** https (1)
> **Speakers:** - [instructor] (1)

#### [Manage performance with Task Manager](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-task-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-task-manager?u=76281980&t=0)** - [Narrator] If you need to monitor your computer system, specifically to diagnose or enhance performance, Task Manager is a good place to start. Task Manager offers a graphical user interface that includes both lists and graphs to help you gain insight into how your computer makes use of resources. You can also use Task Manager to end problematic apps and processes and you can enhance the start-up process by limiting what starts when the operating system does. One way to open Task Manager is to right-click Start and click Task Manager, but there are lots of other options. If when you open Task Manager you see more details, click it and maximize the window. If you see fewer details, you're exactly where you need to be. Make sure the Processes tab is selected. Under the Processes tab, it's easy to see what kinds of system resources the active and running apps are using. If you're here because an app has frozen up and is non-responsive, you can select it and then click End task in the bottom right corner of the window to close it. I'll click Skype and I'll end that task. If you're having a problem with an app, generally, this resolves the problem. If you see an arrow beside a process, it means that other processes exist within it. If you're concerned with a specific system component like Memory, you can click that at the top of this interface
>
> **[1:35](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-task-manager?u=76281980&t=95)** to sort apps by how much memory they're using. This can help you figure out which app is responsible for a memory drain, if that's what you suspect the problem is. I'll do that. You can see that [[Google]] Chrome is using the most memory of all of the other apps. Let's repeat the process for CPU and Disk. Again, if you're having computer problems, maybe you can even hear your hard drive grinding away, or sense your CPU is overworked, you can see what app is likely overworking this system. Once you know that an app is causing a problem, you can opt to uninstall it and replace it with something that performs better, or you might simply choose to use that app when other tasks aren't running. Click the Performance tab now. I love the graphs here. It makes it very easy to see how my system components are reacting to whatever stresses I've put on them. It makes it easy to see if my CPU is overworked, if I'm using all of my memory, or if my network is taking a hit. You can also watch a specific graph [[React.js|react]] if you close a resource intensive program. Keep an eye on the Ethernet graph. You can see I've got a lot of activity here. Watch what happens if I close a video I'm playing in the Movies & TV app, and also close Spotify. You can see the usage goes down.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-task-manager?u=76281980&t=190)** The App history tab lets you see, well your app history. You could click Network to see which of your favorite apps use the most bandwidth. You can see [[Microsoft]] Edge, Cortana, and Spotify listed at the top. Now, click CPU time. Again, this will reorder the list with the apps that use the most CPU. You might find that Cortana uses a lot of time and resources, even though you never use the feature. If that's the case, consider disabling Cortana later. Now, click the Startup tab. This tab shows all the applications that start each time you boot [[Windows]]. And shows what runs in the background theoretically all the time. Some apps claim not to use resources when they're idle, but I'm not altogether sure about that. If you see something in this list you don't use, there's no reason for it to start and run in the background all the time. You can click it and choose to disable. Make sure to only disable items you recognize though. Here's Spotify. I don't need that to start each time the computer does. And here's iTunes software. Same thing. I'll disabled both of those. After you've disabled a few, click the Status button to review. You can see what's enabled and disabled. Anything you disabled will start when you want it to. It's just that for now, it won't run automatically all the time. The Users tab shows active users.
>
> **[4:45](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-task-manager?u=76281980&t=285)** You can select a user and opt to disconnect him or her if you want to. They'll probably lose any unsaved work, but if they've been logged in for a while and aren't actually using the computer, there's no need to have that user account depleting computer resources. The Details tab shows which apps and services are running, along with the description of the apps. It offers a place to end very specific items that don't appear in the Processes tab. I'll advise against disabling any tasks you don't recognize though. Stick with the things you know instead. Finally, the Services tab shows a list of services and their status. Services like [[DHCP]] and Plug and Play need to be running if you want their associated tests to run. Again, don't stop any service you're unfamiliar with because it might cause problems for the computer. That said, services might be running or stopped and you can sort them by status to see. If you need to start, restart, or stop a service, you can do it here. You don't have to open the Services window that you might already be familiar with. So, that's Task Manager in a nutshell. For the most part, it's a tool that lets you monitor, diagnose, and enhance your computer system. Explore a little more here. Click each tab again and sort what's shown in the available views. See what changes when you start and stop apps, especially if they're resource intensive like image editing programs. When you're done, close Task Manager. The next time you need to diagnose problems
>
> **[6:19](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-task-manager?u=76281980&t=379)** with your PC's performance, start with Task Manager. Its user interface is easy to use, and the graphs and various tabs often make it simple to draw conclusions about what's causing performance issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[React.js|React]] (1), [[Microsoft]] (1), [[Windows]] (1), [[DHCP]] (1)
> **Env Vars:** cpu (5), dhcp (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** right-click (1), open the (1)
> **Definitions:** is a  (1), means that (1)
> **Code Identifiers:** itunes (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)

#### [Manage performance with Resource Monitor](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-resource-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-resource-monitor?u=76281980&t=0)** - [Instructor] Resource Monitor offers real time insight into your computer system. This is a good troubleshooting option when you don't find the answers you're looking for in Task Manager. In fact, there's a link to Resource Monitor from inside Task Manager just for that purpose. Like other system tools, there are multiple ways to open Resource Monitor. I'll show you how to open it from Task Manager first. I'll right-click the Start button and click Task Manager. From the Performance tab down at the bottom, I see Open Resource Monitor. Let's let this run, and observe what happens to the graphs on the right side. This is real time data, just like you see in Task Manager, but with more detail. I'll drag this side out to show a longer time span. You will need to have some knowledge of threads, processes, and the inner workings of the computer to use what's offered here. If you want to see exactly which process is hanging up or causing bursts of activity, you can likely MP that there are hard faults for instance. A hard fault occurs when [[Windows]] has to temporarily store data in the swap file on a hard disk, instead of Ram. This happens when Ram is full, when data is stored in the swap file, it takes longer to load and retrieve and can cause noticeable performance problems. If you see a lot of hard faults, you can attribute it to a single program, you might be onto something if you're troubleshooting.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-resource-monitor?u=76281980&t=94)** We don't have any hard faults. To expand on this, scroll up and click the Memory tab. It's at the top beside overview and CPU. Chrome is still listed in the results. Look to the right, and you can see the hard fault graph. It's a nice representation of what we just saw in the memory section. Click the Network tab now to see what applications are using resources. Again, you can select or de-select to narrow the results. If you want to see, say the impact on the network from a single application, you can get that information here. You can save the settings you've configured for another time if you like. The option to save is from the File tab. Once saved, you can load the settings anytime you like. Although I don't use Resource Monitor much, I do look around in here if I feel a specific program is causing my computer to bog down, Even without knowing too much about it, you can use resource monitor to filter down to one application and see easily what effect it's having on the CPU, the disk, network and memory. And that might be all you need to do to resolve hard to diagnose problems with your PC.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Env Vars:** cpu (2)
> **UI Navigation:** right-click (1), scroll up (1)
> **Analogies:** just like (1), for instance (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Manage performance with Performance Monitor](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-performance-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-performance-monitor?u=76281980&t=0)** - [Illustrator] A computer's performance levels, are in a constant state of [[Flux]]. When several applications are running at once, and multiple processes and tasks are competing for resources at the same time, system resources can become strained causing performance to suffer. If you notice slow downs, you can use Performance Monitor to view information about how well computer components are handling the load. And perhaps narrow the bottleneck down, if you have one, to a single component like the CPU or RAM. There are many ways to open Performance Monitor. I'll search for it on the Task Bar. I'll choose to run as administrator. Click Performance Monitor in the left pane. Performance Monitor is currently monitoring percent processor time. You'll see this at the bottom of the page. This object counter represents the percentage of time the processor is busy during the sampling interval. If you notice this object consistently posts over 85%, you can assume the CPU is overworked, and can't handle the load placed on it. If you find this as the case, you can move the applications that require extensive CPU resources to a different machine, or add additional CPU's to this one. You can add your own counters. Right click an empty area of the graph, and click Add Counters to start. I'll add some counters here.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-performance-monitor?u=76281980&t=96)** I'll expand Memory, and I'd like to select Cache Faults Per Second. If you're not sure what this means, you can always click "Show description" in the bottom left corner. In simple terms, cache faults per second shows the rate at which pages sought in the cache were not found there and had to be obtained elsewhere, such as on a hard disk. I'll click Add. Now, I'll locate Physical Disk. I'll expand that. And I'd like to select Percent Disk Time. Percent Disk Time is the percentage of elapsed to time that the selected disk drive was busy servicing, read, or write requests. I'll leave Total Selected and click Add. Now, I'll click Okay. I need to make sure these counters have colors I can clearly distinguish, and I can see that two of these counters are red. I'll double-click one here and change it. I'll choose blue. Look at the other options here. The general tab lets me change how the interface looks and how often to sample. You can make the sample time higher or sample less frequently than every second, to see how performance looks over a longer period of time. From the Graph tab,
>
> **[3:11](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-performance-monitor?u=76281980&t=191)** you can create a title and show various grids and change the scale. If you can't see what's on the graph very well, experiment with these settings so you can. I'll click Okay to close this. You won't always be able to locate a problem quickly using Performance Monitor though, because often problems occur over time, and not over a period of say a hundred seconds. You can use performance to create a baseline graph though, and then save it to use as a comparison for later. By comparing the baseline to how the computer functions a couple of months down the road, you can uncover where and possibly how a bottleneck came to be. To do this first expand Data Collector Sets. Click User Defined, right click, point to New, and click Data Collector Set. Type a name for it. I'll type "Physical and Processor." Select Create Manually Advanced, and click Next. I'd like you to see all the options. In this example, select the Performance Counter check box, and click Next. Click Add to select the counters to use, noting that it's possible to gather data from a different computer if desired. I'm going to choose Physical Disk and Processor Performance by clicking their titles. Here's Processor Performance, and up top, is Physical Disk.
>
> **[4:47](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-performance-monitor?u=76281980&t=287)** I'll click Physical Disk and click Add, and I'll click Processor Performance, and click Add. Now, I'll click Okay. Select the Interval and click Next. I'll leave it at 15 seconds. Accept the Root Directory and click Next. Click Change to log in as the administrator of the machine you're monitoring. I'll type my name and password, and click Okay, and then click Finish. Now, you're ready to start the new Data Collector Set and let it run for a while. I'll expand User Defined. From User Defined, I'll right-click Physical and Processor, and click Start. Let it run for as long as you'd like, perhaps a few minutes, and when you're ready, right-click to stop it. You can review this dataset anytime you want, by clicking it in the left pane. You can then use this information to compare to the current graph, to learn more about what's causing any system slowdowns. Just right-click the entry in the left pane, and click Latest Report. You can also see these in the Reports section under User Defined. That's a high overview of Performance Monitor. As you can imagine, there's more to learn and explore. Go ahead and experiment with a few more counters,
>
> **[6:21](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-performance-monitor?u=76281980&t=381)** and change the view of the graphs to get a better idea of what's available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Flux]] (1)
> **UI Navigation:** select the (3), right-click (3), double-click (1)
> **Env Vars:** cpu (4), ram (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** such as (1), imagine (1)
> **Speakers:** - [illustrator] (1)

#### [Manage performance with Reliability Monitor](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-reliability-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-reliability-monitor?u=76281980&t=0)** - [Instructor] Reliability Monitor,, lets you review the status and stability of your computer system for the longterm. As you can see here, Reliability Monitor runs in the background and keeps track of events, software, [[Hardware]] failures, [[Windows]] failures, and more. It does all of this automatically. You can review the information anytime you want to see how your computer has been performing. To open it, just type reliability and click view, reliability history. You can move the graph back and forth in time to your review problems that have been logged by clicking the arrows on the end of each graph. You can also use the arrow keys on your keyboard. Notice the categories on the far right side. This is how the graph is laid out. You match the category, say windows failures with a date. If you click any entry, you can learn more about it. Take a minute now to click any red Xs you see. This red X shows that windows was not properly shut down and if I wanted, I could view the technical details. You can use this information to troubleshoot computer problems. You might find that once a week or so say, a specific application fails. When you discover something like this, you might try reinstalling the program, running it in compatibility mode or perhaps even replacing it with something more stable. It's also possible that you'll uncover problems with an [[Microsoft Office|Office]] program that won't update, the Windows lock screen stopping or not responding,
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-performance-with-reliability-monitor?u=76281980&t=94)** or a program like [[Google]] Chrome or [[Microsoft]] Edge closing unexpectedly. To see a longer range of details, click weeks instead of days. This computer hasn't been installed very long but you can see that it started out pretty healthy, in a sense, taking a downhill turn. You can also click, view all problem reports, it's at the bottom. This offers a summary of the things that have gone wrong. It's grouped together for easy reading. If you see problems that repeat here, dig a little deeper to find out why. You can also save the reliability history. Before you close the monitor, take one last look at the errors you found. See if you can pinpoint any specific problem or if you see any kind of pattern.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Hardware]] (1), [[Microsoft Office|Office]] (1), [[Google]] (1), [[Microsoft]] (1)
> **CLI Commands:** find (2)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Monitor and manage printers](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/monitor-and-manage-printers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/monitor-and-manage-printers?u=76281980&t=0)** - [Instructor] In the past installation of a printer included discs, instruction booklets and potentially catastrophic failure if any of the steps were out of order. Nowadays installing a printer is as easy as making the connection and pressing the power button. Installation happens without any interaction from the user, then printers appear in the printers and scanners window. Let's open that and see what we have installed. If for whatever reason you connect a compatible device and the installation doesn't happen, you can go ahead and connect the printer and turn it on and click add a printer or scanner here. [[Windows]] will take a minute to search for printers and scanners and then it'll give you a dialogue box where you can make choices and install it manually. I'll choose the printer that I want isn't listed, to speed up the process. Here you can select a shared printer by browsing for its name, you can add a printer with a TCP IP address or even a host name. You can add a Bluetooth wireless or network discoverable printer, and you can even choose to add a local printer with manual settings. I'll click cancel, once you have printers installed you can share them, you can secure them, and you can configure permissions to set limits on who can use them and when. To get started, click the printer to share. You'll have some options, choose manage. Now click printer properties.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/monitor-and-manage-printers?u=76281980&t=98)** You share the printer from the sharing tab. I'll click share this printer and I'll keep the default name, go ahead and click apply. Notice there's a disclaimer at the top, go ahead and read that. Now we need to open the network and sharing center, because we need to make sure that file and print sharing is enabled for our network. I'll click network and sharing center, and change advanced sharing settings. I'll expand our private network and you can see that turn on file and printer sharing is selected, so I'm okay. If yours is turned off, click the top option and click save changes. Back at the printer properties dialogue box, let's click the advanced tab. Here's where you can make the printer available only at specific times. If you want to only allow users to print during normal business hours, perhaps to keep anyone from using the printer after work hours, you can do that here just click available from, and configure your hours. The security tab is where you configure permissions. Notice here that everyone is listed and that everyone can print, provided they have any credentials you require. This might not be the setting you'd like to keep. If you want to change it click everyone and then click remove. After that, click add to add a new user
>
> **[3:14](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/monitor-and-manage-printers?u=76281980&t=194)** or a group of users and assign permissions for them. Let's take a look at administrators. Notice they have permissions by default to print, manage the printer, and manage documents. But if you add another group, perhaps general users, you might want to only allow them to print. Once you've configured users and applied permissions, you can start to manage the print queue as those users start to utilize the printers you've made available. I'll click okay to get to the print queue. Back at our open settings window for the HP Officejet printer I'll click open print queue. You can see I have one document that's printing, when you see an item in the queue you can right click it to control it. You can pause it, restart it, cancel it, and view its properties, I'll choose cancel. These settings are all well and good for home users and small businesses, but as the number of users grow and the number of printers increase, you want to incorporate group policy to manage the printers. In domains administrators will incorporate printer servers and printer pools too in conjunction with domain group policies. That's beyond our scope but I would like to show you some local group policies that can be applied to printers using the gpedit command. I'll type gpedit.msc on the task bar and click edit group policy. There are printer settings in both user configuration
>
> **[4:50](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/monitor-and-manage-printers?u=76281980&t=290)** and computer configuration. Let's look first at user configuration, here I'll click administrative templates, control panel, and printers. Enable any settings you'd like to apply to the users on your computer. One I like is to prevent deletion of printers, and another is prevent addition of printers. To learn more about any setting, or to apply it, double click it. Now let's look at the computer configuration options. They're also in administrative templates under printers. A setting I like to choose and apply is isolate print drivers from applications. I'll double click to show you. When you enable this you can greatly reduce the risk of a print driver failure causing an application to crash, there are a lot more settings as you can see. Continue to explore as time allows, and when you're finished close the local group policy editor window. There's even more you can do with printers, let's go back to our printers window where we left off, you could apply printing preferences. What you see here depends on the printer you have installed, but you might want to say change the orientation from portrait to landscape, or maybe apply some advanced features like always printing back to front.
>
> **[6:25](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/monitor-and-manage-printers?u=76281980&t=385)** What you see depends on the printer you have installed. Before moving on explore these options, and make your desired changes. Then close all open windows and the printers and scanners window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **CLI Commands:** make (4)
> **Prerequisites:** configure (3), install (1)
> **Env Vars:** tcp (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Schedule tasks with Task Scheduler](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/schedule-tasks-with-task-scheduler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/schedule-tasks-with-task-scheduler?u=76281980&t=0)** - [Instructor] If you ever need a program to run a response to an event, you can use Task Scheduler to create a task to perform that action for you automatically. For instance, you can have specific programs start when you log on. Logging on is the event or trigger, and the programs you opt to start are the response to that event. You can also use an event like a full disk error to trigger an action such as running Disk cleanup. You can look for events in Event Viewer, as well, such as unexpected system shutdown errors and perform an action when that happens. You might want to create and save a log file, for example, or run a script you've written. These actions and others can be created, managed, and monitored in Task Scheduler. You can access Task Scheduler from the Computer Management window or using any of these options. You could search for it. Type taskschd.msc in the search window, or use the scheduled task command at a command prompt. The simplest way, I think, is to type Task Scheduler. I already have a lot of scheduled tasks, but I'm going to show you how to create one from scratch. This is the best way to get familiar with Task Scheduler. When you do this, you can explore all the possibilities for triggers, actions, conditions, and settings. Before we start though, let's look at each of those words one more time in more detail. A trigger is what causes a task to run.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/schedule-tasks-with-task-scheduler?u=76281980&t=95)** For example, a specific time of day can be configured to trigger an action. A trigger can also be an event that was logged in Event Viewer, such as when someone logs on or off the computer. Conditions can be added to triggers to further defined when a task will run. While a trigger might set off a test to run on a specific day and time, a condition could require that the computer be idle before it will start. An action is what happens when that trigger plus conditions are met and action might mean running a log on or log off script or starting an application like [[Microsoft Outlook]] or disc defragmenter. A setting affects how a task performs and what happens if it can't run. A setting can be configured to retry the task at a later time, for instance, or to be canceled altogether. To create a task, click create task in the right pane. Here. I have my options. I'm going to run this cleanup based on specific triggers, actions and conditions. So I'm going to type this clean up here. I'm going to configure this tasks for [[Windows 10]], and I'm going to run it under my user account, and only when I'm logged on. Notice the user doesn't have to be logged on. I'll click triggers and I'll set a new trigger. I'm going to run this task weekly every Wednesday. Note I could delay the task or repeat the task or stop it if it runs longer than a certain amount of time.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/schedule-tasks-with-task-scheduler?u=76281980&t=192)** I'll go ahead and change this to two hours. I can also set the task to expire. I'll click OK. Now, I'll set an action. I'll click new. Now I have to choose which program to run. So I'm going to click browse. I need to browse to [[Windows]] (C:), the windows folder. I need to browse to system 32 because this is where the program is stored that I want to run. You can scroll down to see a lot of program names. I happen to know the name of mine. It's clean manager, Here's clean manager.exe. I'll select it and click open. I could add additional arguments, but I won't and I'll click OK. Now I'll click conditions. I could start the task only if the computer is idle for a certain amount of time. I'll change that to 30 minutes. I could stop if the computer ceases to be idle and I could even wake the computer to run the task. Let's look at settings. I can allow the tasks to be run on demand, run it, as soon as it's missed and more. Here's an option. If the task fails, restart every 30 minutes up to three times. Once you have everything set in this window, you're ready to click OK. The new task will appear in the list of other tasks, if you have any.
>
> **[4:45](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/schedule-tasks-with-task-scheduler?u=76281980&t=285)** You can right click a task to see more options. You can run the tasks now, end it, disable it to view its properties deleted, and yes, even export the task. If you want to run this same task on other computers, you can. There's more to learn about test scheduler, as you can imagine, but this is a good start. Continue to explore as time allows, remember to, that there's a command line tool per Task Scheduler. You can run the command with the create switch to create a new schedule task you can use forward slash change forward slash delete forward slash run, and also end. Although there are other commands. Take some time now and explore Task Scheduler. Schedule a few tasks just for fun. You can always right click and delete when you're finished.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Microsoft Outlook]] (1), [[Windows 10]] (1)
> **Analogies:** such as (3), for instance (2), for example (2), imagine (1)
> **Tools:** command prompt (1), command line (1)
> **UI Navigation:** scroll down (1), switch to (1)
> **Prerequisites:** before we start (1), configure (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Implement encryption](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/implement-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/implement-encryption?u=76281980&t=0)** - [Narrator] Encryption is the process of converting data into code. And is used to prevent unauthorized access to both data and entire drives. Encryption uses keys to lock and unlock the data and both keys must be available for access. You can enable basic encryption on all [[Windows]] operating systems. And you can use BitLocker on Windows Pro, Enterprise and Education. Basic encryption can be applied by right clicking a file or folder and choosing the encryption option. This is the type of encryption general home users apply. It's easy. Just right click the folder to encrypt and choose Properties. From the General tab, click Advanced. And here, in the Compress and Encrypt attributes section, place a check in encrypt contents to secure data, and click okay. You would click okay, but I'm going to go ahead and click cancel. When the user who encrypted the files is logged in, the files are available. If another user is logged in though, the files are not. It's protected by the user's password and a key that Windows creates. That key is stored locally. However, this isn't the way businesses and enterprises protect their data. They use BitLocker. BitLocker is more secure than using the encrypting file system method, which we just discussed. BitLocker can be used to encrypt entire hard drives, including both system and data drives.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/implement-encryption?u=76281980&t=95)** Let's open BitLocker from the task bar. I'll chose Manage BitLocker in the results. I can turn on BitLocker on my root drive C. I can turn it on a fixed data drive, which I've named V. I can also turn BitLocker on, on a removable data drive. This is called BitLocker To Go and can be used to secure drives that are removable. I'm going to opt to turn on BitLocker for my fixed data drive. So I'll click turn on BitLocker. What just happened happened very quickly. But when you first opt to turn on BitLocker, it searches for required or preferred components. One of the things it looks for is a TPM chip or a Trusted Platform Module chip. Although you can use BitLocker without it, it's still a good thing to include if you can. We have two choices for how we want to unlock this drive once we get BitLocker applied. We can use a password or a smart card. I'll chose a password. Now take a minute to enter one. It has to meet complexity requirements. So, pick a good one. Now I'll click next. I have to backup my recovery key. I can save that to my [[Microsoft]] account, to a USB flash drive, to a file, or I can print it. I'm going to choose USB flash drive. And I'll choose the drive I have connected to my computer.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/implement-encryption?u=76281980&t=189)** And click save. And I'll click next. Now I have a choice to make. I can encrypt the used disk space only, and this is faster and best for new PCs, or I can encrypt the entire drive, which is slower but best for PCs already in use. I'll go ahead and click the faster option now. Finally, I need to decide on an encryption mode. New encryption is best for fixed drives. And, mine is. Compatible mode is best for drives that can be moved. I'll leave the default selected and click next. It says it's all summed up, I'll be able to unlock the drive with the password and encryption might take some time. I'll click start encrypting. My drive was pretty small, so it didn't take long at all. I'll click close. And now look at my options. I can turn off BitLocker. I can remove the password or change it. And I can backup the key. I know where my key is though. Let's have a look. I saved it to my USB drive. And here it is. I could double click it to show you. It's a text file. I think all drives should be encrypted with BitLocker, if possible. So take a minute now to enable it on you drives if you haven't yet. Having your drive encrypted will protect it from unauthorized users, and will prevent access to the data on it, even if someone removes the drive from your computer and installs it in another.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Microsoft]] (1)
> **Env Vars:** usb (3), tpm (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Configure Windows Defender Firewall and antivirus](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-windows-defender-firewall-and-antivirus?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-windows-defender-firewall-and-antivirus?u=76281980&t=0)** - [Instructor] [[Windows]] [[Microsoft Defender|Defender]] has been a part of Windows operating systems since Windows XP, and has evolved from its introduction there as a simple antispyware program to the full-fledged antivirus solution it is today. You can open Windows Security settings from the taskbar. I'll type Windows Defender. And I'll click Windows Security in the results. There are quite a few entries on the left side of the window. Let's start with Virus & threat protection. This offers a place to perform a manual scan if you feel your computer has been recently compromised. You can also see the status here. When Windows Defender looks like this, with no action needed, and threat protection up to date, everything is working as it should. You can also manually check for updates here, under Virus & threat protection updates. If you see that Windows Defender is disabled, it's likely because you've put another antivirus solution in place, or your system protection is managed by your network administrator. You should only run one antivirus solution at a time, because running more than one can cause conflicts. So if it's disabled for a reason, make sure to keep it disabled. Click Account protection now. Again, mine looks good, but you can review what you see. Continue to explore each entry on the left side with me. Firewall & network protection gives a summary of settings and status, and allows you to allow an app through a firewall.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-windows-defender-firewall-and-antivirus?u=76281980&t=97)** You can also access troubleshooters, view notification settings, and more. App & browser control lets you configure how you want the firewall to manage apps and [[Microsoft]] Edge. These are all set to warn, but there are other options, including Block and Off. Device security offers access to various virtualization-based security features, as well as secure boot. That's beyond our scope here, but these features are covered in other courses here at [[LinkedIn]] Learning. Device performance & health offers a health report, as well as any issues found with, say, a laptop's battery life, or device drivers, among other things. And finally, Family options can be configured for children and other family members. Sometimes you'll want to exclude specific areas of your computer that you feel don't need to be scanned for malware or viruses. Perhaps you have a very large video library that's already been scanned several times, and has been deemed free of security threats. It's unlikely that a virus or malware would attack those files right now, so you can exclude the entire library if you like. I'll show you how to do that, but keep in mind that new video files you download from the internet should be scanned when you obtain them, just in case. Here's how to exclude something like the video library. Return to the Virus & threat protection section and click Manage settings. Scroll down and locate Add or remove exclusions.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-windows-defender-firewall-and-antivirus?u=76281980&t=192)** Here it is, under Exclusions. Click Add an exclusion. And choose what you'd like to exclude. Just for an example, I'll click Folder, and I'll click Videos. And Select. If I change my mind, I can always click and choose Remove. Finally, there are a few group policy settings that apply to Windows Security, specifically, Windows Defender. This is provided you're running [[Windows 10]] Pro or Enterprise. Let's have a look. I'll type gpedit.msc and I'll choose it in the results.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-windows-defender-firewall-and-antivirus?u=76281980&t=238)** Let's navigate to Computer Configuration, Administrative Templates, Windows Components, and Windows Defender Antivirus. You can turn off Windows Defender Antivirus here, if you like. You can personalize it, too. For instance, under Realtime Protection, you can opt to scan all downloaded files and attachments. Like the other areas of group policy, there are hundreds of settings to explore. You can drill into the folders for more settings. For instance, under Quarantine, you can configure removal of items from the Quarantine folder after a certain amount of days have passed. As time allows, explore all of these. In the end, though, I suggest you leave Windows Defender enabled until the time comes when you install a third party antivirus solution, or your network administrator puts some other solution in place. Windows Defender and the Security settings here have always done a great job of protecting all of my computers on my local network, and I opt to leave it in its default state with default settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (15), [[Microsoft Defender|Defender]] (9), [[Microsoft]] (1), [[LinkedIn]] (1), [[Windows 10]] (1)
> **Prerequisites:** configure (2), install (1)
> **UI Navigation:** scroll down (1), navigate to (1)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 3. Manage Local Users, Local Groups, and Devices

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a workgroup or join a domain](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-a-workgroup-or-join-a-domain-14308478?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-a-workgroup-or-join-a-domain-14308478?u=76281980&t=0)** - [Instructor] You may want to set up a network when you have computers you'd like to share data among. You can also share printers, backup devices, and an internet connection, among other things. Before deciding on the type of network to create, though, make sure to review your options. If your computers are in different locations, you can create user accounts on each of them and store your data in the cloud. If you're a home user, it's important to note that the Home Group feature has been removed. You can share files and folders manually, though. You learned in earlier movies how to manage local groups and users. You might also consider a workgroup. A workgroup is a good option if you have several computers, say, more than five, but less than 10, and those computers are in close proximity to one another. A workgroup might be the best for a small business, too. And when you have more than 10 computers, especially if you run a mid to large size company, you'll probably opt for a domain. Oftentimes, networking solutions come about organically and without much thought, especially when there are only a few computers involved. For instance, a small business might configure a [[Local Area Network (LAN)|local area network]] to have several computers that share an internet connection. As time passes, users may start to manually share their own files and folders and even printers. They may even create user accounts in their machines so others can gain access. Once this happens, it's possible to access any computer on the network from any other.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-a-workgroup-or-join-a-domain-14308478?u=76281980&t=95)** You simply need to browse through the computer from File Explorer, double-click the computer, and log in. Here's an example of a computer on a network. This is a computer where we store backups. On occasion, these smaller business workgroups evolve into domains. This happens when managing the workgroup becomes difficult, time-consuming, and generally impossible to scale efficiently. Configuring a domain involves adding at least one server, such as [[Windows Server]] 2016. Workgroups do not require a server, and user accounts are managed on a machine-to-machine basis. Whether you want to join a workgroup or a domain, you can make the change in Control Panel in [[Windows 10]]. It's in System. I'll open Control Panel first, and I'll make sure I'm viewing Control Panel by large icons. Now click System. With the System window open, click Change Settings next to Computer Name, Domain, and Workgroup settings. If you'd like to change the name of your workgroup, you can, just click Change. I'll leave mine as Workgroup so that I don't have to restart my PC. Now, I'll switch to a different PC and join the workgroup. I'll go to Control Panel again, click System, and again, click Change Settings. To use a wizard to join a domain or workgroup,
>
> **[3:14](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-a-workgroup-or-join-a-domain-14308478?u=76281980&t=194)** click Network ID, then choose what kind of network you have. I'll leave this computer is part of a business network selected, and choose Next. And I'll choose my company uses a network without a domain. If you're trying to join a domain, you can click here. However, this is kind of old school and isn't the way it works anymore. Generally, network administrators set you up. Whatever the case, I'll choose Next. Here, I'll type the computer or workgroup name. Notice Workgroup is already typed in there, and it is the name of my workgroup, so I'll click Next. I'll need to click Finish and restart my computer to join the workgroup. Remember, there are several solutions for networking computers. You can store your data in the cloud to access it from anywhere, you can share files manually, or you can opt to create and join workgroups or a domain. The one you choose depends on your needs, logistics, and network size.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1), [[Windows Server]] (1), [[Windows 10]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** double-click (1), switch to (1), go to (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), such as (1)
> **Prerequisites:** set up (1), configure (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Create user accounts in Accounts and Computer Management](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-user-accounts-in-accounts-and-computer-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-user-accounts-in-accounts-and-computer-management?u=76281980&t=0)** - [Narrator] There are several types of accounts you can create and use with [[Windows 10]]. The first is a local account, which is an account that is only valid on the local machine. Any personalizations you make with this account don't follow you when you log on to another computer. You can also create a [[Microsoft]] account for either a child or an adult. Personalizations you make here are stored in the cloud and are applied to any computer you log into using that account. Child accounts feature safety features as well. Another type of account is work or school. You might have one of these accounts if you sign in with [[Microsoft Office|Office]] 365 or other Microsoft services to access school or company resources. To access options to create these kinds of accounts, click Start, Settings, and then Accounts. What you see here depends on what kind of account you're logged in with. I'm going to assume you're connected to a [[Local Area Network (LAN)|local area network]] and that you're an Administrator. It doesn't matter right now if you're logged on with a local account or a Microsoft account though. It does matter if you're logged in with a domain account. Domain accounts are managed by domain administrators, not local ones. So if that's the case, you won't be able to create the accounts required for other users here. Because there are so many types of accounts you can create, I won't show you all of them. But there's nothing to worry about. You simply work through the wizard and input information when prompted. But to give you an idea, I'll show you how to create a simple local account. First, click Family & other users.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-user-accounts-in-accounts-and-computer-management?u=76281980&t=97)** Here, you can choose to add a family member or add someone else to this PC. I'll click this. Here's where you'll type the person sign in information if you have it. You can type in their email or phone number. I'll click I don't have this person sign in information to see what happens next. Now, I have some choices. I'm given the option to type in an email address, a phone number to get a new address, or to add a user without a Microsoft account. I'll click Add a user without a Microsoft account. Here's where I type in the username and the password. The password isn't necessary, but I will type in a username here. And I'll let Leah make her own password when she logs in. And I'll click Next. Now you can see in the new account listed here in Settings, under Family & other users. If you wanted to create an account for someone that had a Microsoft account, you would click here and continue through the process by typing their sign in information. If you're a network admin though or planning to become one, this isn't where you'll go to create accounts. You'll use Local Users and Groups, and this is available in the Computer Management console. To get there search for and then click Computer Management or right click the Start Menu and click Computer Management in the list that appears. I'll maximize this window,
>
> **[3:11](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-user-accounts-in-accounts-and-computer-management?u=76281980&t=191)** and I'll expand this a little bit to give us a little space. Now, expand Local Users and Groups and click Users. Let's take a look at what's here. You can see the new local account, a Guest account, and my log-in account. There's an Administrator account too, and there's Guest. The default account is managed by the system. This Utility account is used for [[Windows]] [[Microsoft Defender|Defender]]. The Guest account is not enabled by default. Watch what happens if I double click. I could enable it if I wanted. Notice the description is a built in account for guest access to the computer or domain. I'll click Cancel. You can create a new account here as well. This is a better way to create an account if you're a computer administrator, because it gives you more options and finer control. To get started, right click inside the user window and click New User. Fill out the information. I'll create a username [[John the Ripper|John]] and I won't set a password. Now, I'll make sure John creates a password at his login. And I'll click Create. I'm going to click one more user, Jane. (keyboard typing) Same thing here. And I'll click Create. When you're finished creating new users, click Close. And you'll see the new users appear. Now, double click any new user account.
>
> **[4:45](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-user-accounts-in-accounts-and-computer-management?u=76281980&t=285)** To change the group membership, click the Member of tab. I'm going to remove this user from the Users group by clicking users and clicking remove. Now, I'll add John to the Administrators group. And I'll click Okay. I'll do the same for Jane. And I'll put her in the Guest group. (mouse clicking) (keyboard typing) And I'll click Okay. If you'd like to see a list of groups and the users in them, click Groups in the left pane. Here's Administrators. I'll double click. And here's Guests. If you opt to put a user into one of these groups, they'll inherit the permissions for the group. Users in the Administrators group will have administrator access, and that's full control. If you put a user in the Guests group, that user when logged on only has the permission a guest would have, which is very limited access to the computer. If you want to learn more about the permissions assigned to a group, double click it again. I'll double click Users. You can see in the description that Users are prevented from making accidental or intentional system-wide changes and can run most applications. You can see Jennifer and Leah are members of the Users group. And if I double click Backup Operators,
>
> **[6:19](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-user-accounts-in-accounts-and-computer-management?u=76281980&t=379)** you can see that these users can override security restrictions for the sole purpose of backing up or restoring files. For the most part, at least in the beginning, you'll probably stick with Administrators and Users, and maybe Guests. But as time goes on and you become more accustomed to the available groups, you can create accounts for say remote desktop users, Hyper-V administrators, and so on. You can also create your own groups and add users to those groups, and configure your own specific permissions. You'll learn how to do that in the next movie. So, that's an overview of creating accounts. There are many types of users and accounts. Home users often use the Accounts window in Settings, but local admins often use Local Users and Groups for more granular control. If you're continuing to the next movie, leave this window open.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (6), [[John the Ripper|John]] (3), [[Windows 10]] (1), [[Microsoft Office|Office]] (1), [[Local Area Network (LAN)|Local area network]] (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3), is an  (1)
> **Non-Speech:** (keyboard typing) (2), (mouse clicking) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### [Manage local groups: NTFS permissions in Computer Management](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-local-groups-ntfs-permissions-in-computer-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-local-groups-ntfs-permissions-in-computer-management?u=76281980&t=0)** - [Woman] If you have a home or small [[Microsoft Office|office]] and only have a few users to manage, one option is to manage them each independently. You can create users from Settings and Accounts. You can see some accounts here. Jane, Jennifer, [[John the Ripper|John]], and Leah. Once you have users, you can also create folders and share them manually and apply your own permissions. This is usually sufficient when there aren't too many people, or too many computers involved. However, when you have a lot of users to manage, say groups of accountants, groups of salespeople, inventory specialists, and maybe even a [[Human Resources (HR)|human resources]] department, you need a more robust management solution. You also need to be able to better manage the folders you share rather than trying to navigate and manage those in File Explorer. This is where groups come in. You can create groups in the computer management console. One way to open the console, is to right-click start and choose computer management. I already have that open. Look at the groups that already exist. You can expand Local Users and Groups, and then click Groups in the left pane to get there. You could put users in these groups, but generally businesses create their own. This will be clear in a second. To create a group, right-click in the middle pane and click New Group. I'm going to create a couple of groups and add users to them.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-local-groups-ntfs-permissions-in-computer-management?u=76281980&t=93)** First, I'll create a group called Accountants. I'll type a description, and I'll need to add a member. I'm going to add John, and I'll click create. This will create a group called "Accountants" with one member named John. If I hire more accountants, all I have to do is add them to this group and they'll end here at the permissions that I've applied. Let's create another group. Inventory, description, and let's add Jane to this group. I created these users in a previous movie. I'll click create and close, and you'll see the groups appearing here and here, each having one member. Now that we have our groups, let's create a folder to share with one of them. Expand shared folders in the left pane and click shares. I'll right-click in the middle pane, click new share, and then I'm going to use this shared folder wizard to get started. I'll click next. I need to type a folder path. I'll click browse. I'll scroll down to this PC, and I think I'll go ahead and put it in public.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-local-groups-ntfs-permissions-in-computer-management?u=76281980&t=180)** And I'll put it in public documents, and I'll click next. I'm going to create a share name and I'm going to type tax information. For a description I'll type a little something, and I'll click next. Now I can put some default permissions in here or I can customize them. Let's look at the options. All users can have read access. Administrators can have full and other users read only. The third one is administrators can have full, and others have no access. Or I can customize the permissions. Let's do that. I'll click the custom button. Notice that everyone has read access to my new tax info folder. That's not what I want. So I'm going to remove the everyone group and the only people I would like to have access to my tax info folder are the accountants. So I'm going to click add here and I'm going to add them. Now I need to give my accountants the proper permissions. You can see three share permissions from the share permissions tab, full control, change, and read. You could set these, but it's better to click the security tab and configure NTFS permissions. There are a lot more options there. Now, let's give the accountants modify access. I'll click edit, and I'll add them here. Click ok.
>
> **[4:38](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-local-groups-ntfs-permissions-in-computer-management?u=76281980&t=278)** I'll click them in the list and I'll click modify. I'll click ok. And I'll click ok again. And I'll click finish. You can see the status and the summary here. And if you want to, you can run the wizard again. I won't do that. Instead, I'll click finish. Here's my new folder. I can double click the folder to see what settings I have. In here, I can set a user limit, change a description, review share permissions and review security. So that's how you create groups and assign permissions. But there's a lot more to learn with regard to the theory behind how to set this up. And that's beyond our scope at the moment. Generally though, it's best to leave share permissions alone and only configure NTFS permissions under the security tab. It just simplifies things. When you have both share and NTFS permissions, the most restrictive wins, and then that just makes everything just a little more complex. For now, and before you continue on, if you're in charge of creating the share and permission structure for an organization, you're going to need to know a lot more about this, beyond how to create a group and add users, or how to create a share net groups. There's a lot of information on [[LinkedIn]] alluring around these topics. So make a note now about that, and review related movies when time allows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (3), [[Microsoft Office|Office]] (1), [[Human Resources (HR)|Human resources]] (1), [[LinkedIn]] (1)
> **UI Navigation:** right-click (3), open the (1), scroll down (1)
> **Env Vars:** ntfs (3)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [woman] (1)

#### [Manage users with Computer Management and Group Policy](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-users-with-computer-management-and-group-policy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-users-with-computer-management-and-group-policy?u=76281980&t=0)** - [[Windows 10]] comes with several built in users, including, but not limited to, administrator, a default account used by the system and guest. The first time anyone logs into a computer using their own credentials, such as a [[Microsoft]] account, that name gets added to the list as well. You'll also see any users you created. We created all these in previous movies. As you've learned, you can create users and groups and then add users to those groups from this console. If you click groups in the left pane, you can see a few we've created, including accountants and inventory. The other groups you see here come with Windows 10, including things like guests, remote desktop users and backup operators. But back to users. You can manage individual users here. I'm going to double click [[John the Ripper|John]], a user I created an earlier movie and have a look at what's set for him. Notice I've deselected user must change password at next log on and in doing so made a couple of other options available. I could select user can not change password. I could select password never expires, and I could disable the account. Notice account is locked out is grayed out. If you set group policies for users that define how many incorrect login attempts they can have before they meet a threshold to be locked out, this will become available.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-users-with-computer-management-and-group-policy?u=76281980&t=94)** From the member of tab, you can see what groups John is a member of. He's a member of accountants and guests. It's easy to remove John from a group. All you have to do is click remove. I'll click okay, and continue. I'd like to show you how to use the Microsoft management console to apply group policy to a single user like John. But before I do, let me make it clear that this isn't the way most network administrators manage group policy for users. It would be quite complicated to manage them all singly in this way, at the very least, if not impossible. However, I think it's important to see how the Microsoft management console can be used should any situation warranted. Perhaps in the case of a home network or a very small business with one user that needs specific limitations search for MMC.exe and click it in the results.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-users-with-computer-management-and-group-policy?u=76281980&t=159)** Click file and click add, remove snapping. I want to add the group policy object editor. So I'll select that in the left pane and click add to move it to the right. Notice the group policy object will be applied to the local computer and less click browse. We could choose another computer if we liked, I'd like to show you how to choose a user like John and apply policies just for him. Notice I click the users tab, click to John, and now I'll click okay. I'll click finish but before I do, notice the group policy object name is now local computer backslash, John, and I'll click finish and okay. Over the left pane, let's expand local computer backslash, John policy, and user configuration. If you're familiar with the local group policy editor, this will look familiar to you. However, instead of computer policy or user policies, we have a single policy just for John. Let's look at some of the things we could configure. Here's administrative templates, control panel and personalization. We could, if we wanted prevent him from changing the theme or enabling a screensaver, we could even load a specific theme just for John. From programs, you also have some options.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/manage-users-with-computer-management-and-group-policy?u=76281980&t=255)** You could hide [[Windows]] marketplace, windows features, and even programs in control panel. As you can see here, there are a lot of options and you can really fine tune how you want to manage your users. And we're only looking at the options in control panel. There's still desktop, network, shared folders and even system. As noted before though, most administrators create groups of users and then manage those groups through various group policy options. Before you continue close, all open windows, you don't need to save this console unless you want to keep the settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (10), [[Microsoft]] (3), [[Windows]] (3), [[Windows 10]] (2)
> **CLI Commands:** make (1)
> **Env Vars:** mmc (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - windows (1)

#### [Configure application settings](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-application-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-application-settings?u=76281980&t=0)** - [Instructor] No matter how few users you have or how many, you'll have devices to manage. A single user can manage their devices from settings. Settings offers access to Bluetooth devices, printers and scanners, mice, and more. A small business will likely have more devices to manage than a single user. They could have a few printers, a laptop or two, and perhaps even a shared storage drive. Business owners can manage the health of these devices here and in Device Manager. I'll open Device Manager to show you. Here are disk drives, display adapters, portable devices, printers, and more. But back at settings, let's look at printers and scanners. I'll click the Manage tab under my printer to show you some options. From printer properties, you can set both sharing permissions and NTFS. And if you have an Advanced tab, you can even choose when the printer's available. However, large businesses and enterprises can't manage devices this way. There's simply too much to do and not enough options for the devices they use. That's because they have to manage devices that smaller businesses don't usually have, and [[Windows]] on its own can't manage, like iOS and [[Android]] mobile devices, various other phones and tablets, and company owned and provisioned laptops.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-application-settings?u=76281980&t=94)** Administrators must be able to keep track of these devices and keep them updated and retain the ability to wipe data off of them should they get lost or the related employee terminated. To control and oversee these types of devices, enterprises incorporate group policies and use Configuration Manager perhaps along with other technologies like [[Microsoft]] Intune and [[Microsoft Entra ID|Azure Active Directory]]. Modern management involves unifying the management of iOS and Android devices without having to use multiple applications. An administrator must be able to manage all devices from anywhere and from a single console if possible, as well. Intune and [[Microsoft Azure|Azure]] also use the cloud to manage devices and keep them updated as users log in no matter where they are or how they connect to the internet. Also, when a user is given a new device, like a laptop, the first time the user logs on, a wizard appears that helps them connect to Azure Active Directory without having a direct connection to the corporate network. And once authenticated, the user has access to the device and their own profile. Settings transfer, as well as permissions and business line of applications. Administrators can also use the GUI of [[Microsoft Entra ID|Azure AD]] and Microsoft Intune to add devices, configure them, manage them, and update them Admins can opt to push changes out to devices they manage too. And to apply security policies and configure [[Real-Time]] monitoring with Windows [[Microsoft Defender|Defender]]. No matter what size the network, Microsoft offers multiple ways to manage the devices on it.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-application-settings?u=76281980&t=189)** It might be something simple, like the printers and scanners window, or something more complex, like Azure Active Directory and Microsoft Intune.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (4), [[Microsoft Entra ID|Azure active directory]] (3), [[Windows]] (2), [[Android]] (2), [[Microsoft Azure|Azure]] (1)
> **Code Identifiers:** ios (2)
> **Env Vars:** ntfs (1), gui (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Configure Credential Manager](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-credential-manager-14301614?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-credential-manager-14301614?u=76281980&t=0)** - [Presenter] Have you ever wondered where [[Windows]] stores your usernames and passwords? Well, it saves them using a feature called Credential Manager. Credential Manager is available in Control panel when icon view is enabled and has its own entry shown here. There are two kinds of credentials: web credentials and Windows credentials. Here, web is selected. These are associated with login information for websites for the most part. If you expand any entry under the web credentials you see, you'll see a web address, username, the browser that was used when the password was saved, and it also offers access to the password. You can click show to see it. You'll have to type your password before it'll give it to you. You can also remove the password. Having access to the passwords and usernames is certainly handy if you ever forget a password. You don't have to reset via a webpage for sure. If you opt to remove a credential, Windows will forget it. And if you return to the website, you'll be prompted to type in the information again. Windows Credentials are associated with computers you connect to on your local network and applications like [[Microsoft Office]] and One Drive. This is also where you can find certificate based credentials too, although you might not have any of those. We don't. As with web credentials, you can select any credential to remove it. Here's the option.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-credential-manager-14301614?u=76281980&t=96)** You can also edit it. However, their credential can't be shown like web credentials can. Additionally, sometimes you can see the username and sometimes you can't. It depends on what credential you're viewing. You can see the username here, but no username here. It would take some time to recover if you lost your credentials, perhaps due to a computer failure. And for that reason, you can opt to back them up. The option to do this is available in Credential Manager under Windows Credentials. I'll click backup credentials to show you. As noted here, it says it's best to save the credentials to an external drive, so I'll click browse, and I'll navigate to One Drive. I'll type my file name and click save. Now, I click next. I'll need to press control alt delete to continue the backup and type in my username and password. I won't do that right now and I'll click cancel. To restore credentials, click the restore option. Click browse and navigate to where your credentials are stored. There's one other nifty little shortcut to credentials. From a run line, you can click this command, rundll32.exe with a space keymgr.dll, a comma,
>
> **[3:14](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-credential-manager-14301614?u=76281980&t=194)** and KRShowKeyMgr. You can also do that from an elevated command prompt. Watch what happens when I type the command and click enter. I have the option to look at the stored usernames and passwords and restore them. So that's a look at Credential Manager. There isn't much to it, but it can be so helpful when you need to retrieve a website password. If you haven't done so already, backup your credentials before moving on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Microsoft Office]] (1)
> **CLI Commands:** find (1)
> **Tools:** command prompt (1)
> **UI Navigation:** navigate to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [presenter] (1)

#### [Use Group Policy to secure users and computers](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/use-group-policy-to-secure-users-and-computers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/use-group-policy-to-secure-users-and-computers?u=76281980&t=0)** - [Instructor] Did you know that you can log in to your [[Windows]] PC with something other than a traditional password? You can choose a PIN or use a picture password, if you'd rather. Both are better choices on tablets because they require you only type a few numbers or use your finger to draw three gestures on an image. You can opt to lock the screen after a specific amount of time passes and require a password when you wake it up, as well. You do all of these things from Start and Settings. To configure login options, click Accounts. Click Sign-in options. If you choose PIN, you just click add. Type your password, and type and confirm your new PIN. You can change your password here, and here you can add a picture password. Same thing, type your password, and choose a picture. This is the one I selected, but you'll probably opt to choose a new picture, and then choose one you have saved to your computer. At the top of this screen, you can change when to require a sign-in. By default, you'll have to type a password or PIN or use your picture password every time you wake the computer from sleep. You can turn that off, though. I don't suggest it. If you do choose to set the computer to require a password after it wakes from sleep here in Settings, you want to set how long the computer should be idle
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/use-group-policy-to-secure-users-and-computers?u=76281980&t=94)** before it goes to sleep. To set that, click back and open System. Here's where you can tell Windows when to turn off the screen or go to sleep. You do that from the Power and Sleep tab. I have mine set like this. Turn the screen off after 10 minutes, but when plugged in, never put the computer to sleep. That's because I work at it all the time, and I'm always near it. Passwords and requiring them are extremely important when securing your computer and the computers on your network. That said, while you can tell your computers to create passwords and perhaps even change them once a month, you can't force them to without setting group policies. You can open the local group policy editor by typing gpedit.msc in the task bar. I've already done that, and I have it open. To access the password settings, navigate to Computer Configuration, Windows Settings, Security Settings, Account Policies, and here is Password Policy. Let's take a look at these one at a time. The maximum password age setting let you configure how many days can pass before the user is required to change their password. You can set passwords to expire after a number of days between one and 999, or you can specify that passwords never expire
>
> **[3:07](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/use-group-policy-to-secure-users-and-computers?u=76281980&t=187)** by setting the number of days to zero. Often, administrators choose 30 days or 60 days, but the choice is up to you. The Enforce Password History Policy setting let you set the number of unique new passwords that must be associated with the user account before an older password can be used. If you enable Enforce Password History, you should also configure a minimum password age. Minimum password age states how long a user must keep their password before it can be changed. If you don't configure this setting, users can change their password as many times in a row as necessary when they're required to, and then reuse their original password. The minimum password length policy lets you set the least number of characters that can make up a password. You can set a value between one and 14. If you choose zero, it means no password is required. The passwords must meet complexity requirements determines whether passwords must meet certain standards. Those standards are listed here, and include the following. Passwords cannot contain the user's account name or parts of the user's full name that exceed two consecutive characters. And passwords must be at least six characters in length. They must contain characters from three of the following four categories, uppercase characters A through Z, lowercase characters A through Z, numbers, and special characters
>
> **[4:41](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/use-group-policy-to-secure-users-and-computers?u=76281980&t=281)** like exclamation points and dollar signs. Finally, the Store Password Using Reversible Encryption Setting provides support for applications that use protocols that require the user's password for authentication. Reversible means that the encrypted passwords can be decrypted. An attacker who is able to break this encryption can access available resources. You should never enable this policy setting unless the application requirements outweigh the need to protect password information. You can incorporate account lockout policies with the password policy settings you configure. This lets you state when and how a user will be locked out of their computer if they try to input their password several times, but fail. If you're interested in that, take a few minutes to review those entries. Here's the account lockout duration, threshold, and an account lockout counter. As an example, you can set an account threshold for invalid logon attempts, say six, and then set how long to keep the user locked out before they can try again. You can also set how much time must pass before resetting the account lockout counter. So that's about it for password security and password policies. Remember, whatever you configure here is applied to the entire computer. If you change your mind about it, come back and remove the policies you don't like.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3)
> **Prerequisites:** configure (6), required to (2)
> **Analogies:** picture (5)
> **Env Vars:** pin (4)
> **UI Navigation:** go to (1), open the (1), navigate to (1)
> **CLI Commands:** make (1)
> **Definitions:** means that (1)
> **Best Practices:** you should never (1)


### 4. Configure System and Data Recovery

[↑ Back to Table of Contents](#table-of-contents)

#### [Recover Windows 10 with a recovery drive](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/recover-windows-10-with-a-recovery-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/recover-windows-10-with-a-recovery-drive?u=76281980&t=0)** - [Instructor] When [[Windows]] encounters a catastrophic failure, one that is so bad you can't boot the machine to access the recovery options from inside the operating system, you can use your recovery drive to get the computer back up and running. You have to create this drive yourself, though, before a problem occurs. So if you haven't done it yet, now's a good a time as any. To get started, type recovery drive in the search area of the task bar and click it in the results. I've already done that and I've selected Recovery Drive app. It's open here. Read what's offered on the screen. Note that you can use this recovery drive to reset your computer, to troubleshoot it, or even re-install it. What it doesn't say is that you need to insert a USB stick that holds at least eight gigabyte of data and that any existing data on it will be erased. I've inserted a drive. If you haven't, go ahead and do it now, if you're following along. Make sure that Back up system files to the recovery drive is selected and then click Next. Wait while Windows looks for a drive to use. This could take a minute or two. Once you see a list of available drives, select the one you want and click Next. Note that everything on the drive will be deleted, so if you have any personal files on it, you'll need to make sure those have been backed up before you click Create. When you're ready, click Create. It might take an hour or more,
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/recover-windows-10-with-a-recovery-drive?u=76281980&t=94)** so you might want to find something else to do for awhile. Once it finishes, click Finish, and then clearly mark the recovery drive on it and store the USB drive in a safe place. If you ever find yourself in a situation where the computer won't boot, all you have to do is insert this drive and try again. The computer will likely boot right to the drive. Troubleshooting options should appear. You can try automatic repair and if that doesn't work, system restore. If you still can't get the computer to start up, choose system image recovery. Before you move on, do you have any other computers you manage? Consider making recovery disks for those computers, too, or at the very least, verify system restore is enabled and backups are in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **CLI Commands:** make (2), find (2)
> **Warnings:** note that (2), troubleshoot (1)
> **Env Vars:** usb (2)
> **Prerequisites:** install (1), you'll need (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Create and manage System Restore points](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-and-manage-system-restore-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-and-manage-system-restore-points?u=76281980&t=0)** - [Instructor] System Restore has been a part of [[Windows]] since Windows ME, and automatically takes snapshots of the operating system and its various components, including the registry without input from you. That is, as long as System Restore's enabled. The snapshots it saves are called restore points. You can get to System Properties here by typing "system restore" in a search bar, and clicking Create a restore point in the results. If there ever comes a time when the computer begins to perform poorly, you can use these restore points to recover the system to a time that it was stable. Notice that System Restore only restores the operating system and the registry. It will not make any changes to your files, pictures, music, downloads, videos, and other personal data. Notice here that C is listed and the protection is on. C is usually the drive we're concerned with, although other drives can certainly exist and contain data. V holds my [[Virtual Machines]] and protection is turned off. If you ever feel like you're about to do something risky, perhaps installing a new device or device driver, you can create a restore point yourself. Click Create to create one now. I'll type a description and I'll click Create. When you see this prompt, click Close. To see the new restore point and learn how to restore from it, click System Restore. Click Next to get started.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-and-manage-system-restore-points?u=76281980&t=94)** You can choose the point you just created, or if others exist, you can choose from them as well. You can also scan for affected programs. I'll click Next. If you click Finish here, the computer will start the restore process and will reboot. It'll take some time as well, perhaps 10 to 15 minutes, maybe longer. So don't do that now. Let's click Cancel. To make sure System Restore is set up correctly, click Configure. Note how much disk space you have allotted for System Restore. I suggest keeping it at around 15 or 20%, provided you have the free space you need on your drive to allow for that much space to be used. The number of restore points you'll have to choose from depends on your computer configuration. The more space you give to System Restore, the more restore points you'll have. As the allotted spaces fill, the oldest restore points will be deleted and new ones will take their place. Let's cancel out of this and let's look at some Group Policy settings for System Restore. I'll type "gpedit.msc" I'll type "gpedit.msc" I'll type "gpedit.msc" and we'll have a look. From Computer Configuration, expand Administrative Templates, and then System. Scroll down to System Restore. There are two options: One is to turn off Configuration options, and another is to turn off System Restore completely.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/create-and-manage-system-restore-points?u=76281980&t=190)** I see no reason to disable System Restore. Although I could see reasons for disabling the options. Whatever the case and however you decide to configure it, make sure System Restore is enabled and that you remember it's an option, should your computer ever begin to malfunction. Further, make sure to create restore points manually. If you ever feel like you're about to do something that could harm the computer, like installing third-party software. Although System Restore isn't meant to help you recover from a malware attack, sometimes it can. Always better to be safe than sorry. So give System Restore room to run.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Virtual Machines]] (1)
> **CLI Commands:** make (4)
> **Prerequisites:** configure (2), set up (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Explore recovery options](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/explore-recovery-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/explore-recovery-options?u=76281980&t=0)** - [Instructor] Sometimes there's nothing you can do to get an unstable computer in good working order again, no matter how hard you try. When you come to this realization, you'll want to explore the recovery options. Click Start, Settings, Update & Security, and Recovery. You can reset the PC, perhaps go back to a previous version of [[Windows]], or access Advanced startup options. Resetting the PC re-installs the Windows operating system, which fixes problems that have to do with Windows. Sometimes operating system files get corrupt or go missing and reinstalling them is you only way to repair them. This process will also uninstall applications, though. It's important to do this because oftentimes it's those pesky third-party apps that caused system instability. Removing these can resolve problems that no other method can. Read the two choices carefully. You can opt to keep your files or remove them. Make sure to back up files and folders, no matter what choice you make, though, just in case something goes awry. If you want to sell your computer or give it to someone else, choose the second option. Definitely want to remove all your files. Otherwise, opt for the basic reset. The second choice here is to go back to a previous version of Windows. Notice it's no longer an option on my PC because it was updated more than 10 days ago.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/explore-recovery-options?u=76281980&t=96)** If you're having extremely difficult problems with the computer, you'll need to choose Advanced startup. This lets you start a device from a disk, like a USB drive or DVD. You can change your firmware settings, too, or change Windows startup settings. You can even restore from a system image. This will return your computer to a time when it was brand new, though, or from an image that you created not too long ago. Whatever the case, there's likely one option that will work for you here, good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5)
> **CLI Commands:** make (2)
> **Env Vars:** usb (1), dvd (1)
> **Cross-References:** go back to (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshoot the startup and boot process](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/troubleshoot-the-startup-and-boot-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/troubleshoot-the-startup-and-boot-process?u=76281980&t=0)** - [Narrator] When [[Windows]] won't boot, doesn't work properly, or when it boots slowly, you have several troubleshooting options. One is System Restore, which I covered in an earlier movie. This can return your computer to a previous state, to a time when it was working properly. Another is to boot to a Recovery Drive. Like System Restore, I covered making that drive in an earlier movie as well. If you can boot the computer, whether it's running or not, you can access several recovery options from the Advanced Startup Options in settings. You can also reset the PC there, too. Beyond that, you can access the startup options to limit what applications start when Windows does. This will improve the boot process if it's slow. Let's look briefly at each of these. You can open System Restore by typing it on the task bar. You'll need to click the option 'create a Restore Point' to open it. Here's the option to use System Restore. Clicking it offers a recommended Restore Point, or you can choose a different one. If the computer is running but isn't working properly, you can limit what runs in the background all the time from Task Manager. You can open that in many ways, but I'll right click the start button and choose Task Manager in the results. Make sure you see the option 'Viewer Details' so that you can access the Startup tab. Click 'Startup Impact' to see what's using the most resources.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/troubleshoot-the-startup-and-boot-process?u=76281980&t=93)** Look through the list and consider third-party applications you've installed that could be causing the issue. Likewise, disable any you don't use but recognize. On reboot, you'll be able to tell the difference. And if disabling a program fixes the problem, consider uninstalling it and finding an alternative. Finally, you can reboot to Advanced Options or reset the PC from Start, Settings, Update and Security, and the Recovery tab. There are other options here though. Activation is one of them. Windows won't work properly if it isn't activated. You can also click 'Troubleshoot.' If you find the problem here that you're having, it's easy to run a troubleshooter. Playing audio, problems with Bluetooth, network adapters, and even power. You can also look at Windows security and Windows update. If you decide you need to access the Advanced Startup Options, you can do so from the Settings app from Update and Security. You can also use either of the command prompts here. 'Shutdown/r/o' reboots the PC directly into the Advanced Options. If you add the other parameters as you see here, it'll happen a little faster. But what happens if you can't boot the computer to access the Settings option, or you can't
>
> **[3:06](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/troubleshoot-the-startup-and-boot-process?u=76281980&t=186)** access the Command Prompt? You'll need to try some of these. First, restart the PC and then try one of these options. Hold down the power button and restart three times. This is a built-in safeguard to recover from reboot loops. Reboot to a recovery drive or a Windows DVD. From there, you'll have access to Repair Options. You can also try restarting the PC while holding down the shift key. This is supposed to bring up the Advanced Options as well, although it doesn't always. Once you've rebooted, click 'Troubleshoot' to view the options. Choose one that you think is going to suit your situation the best. This might be System Restore, it might be a Recovery Drive, it might be a Command Prompt, or any of the other options. Once you choose one, you'll be prompted on how to proceed. This might entail navigating to a Recovery Drive, running a Repair sequence, booting into Safe Mode, and more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6)
> **CLI Commands:** make (1), find (1)
> **Tools:** command prompt (2)
> **Warnings:** troubleshoot (2)
> **Prerequisites:** you'll need (2)
> **Env Vars:** dvd (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)

#### [Restore with file history](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/restore-with-file-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/restore-with-file-history?u=76281980&t=0)** - [Narrator] [[Windows 10]] comes with a back up program called File History. File History scans your personal folders every hour, and copies changes to a back up drive. In order to configure the available settings in File History, we first need to set it up. Although there are options in settings, you'll get a lot further in control panel. I'll type control panel on the task bar, and show you how to locate File History. Change the view from category or small icons to large icons. Click File History. What you see here depends on many factors, including whether or not you've ever used File History. Whatever you see, click select drive. We need to tell File History where to save your backups. You can set up File History to back up to an external drive, a virtual drive, or a network drive. Choose the one that's right for you. I'll choose a USB drive called Recovery H. And I'll click down here at the bottom, OK. When you're ready, click turn on, and File History will start to back you up right away. Should you ever need to restore your computer from a backup, perhaps because of a computer failure, or loss, or to restore your data to a new computer, open File History and choose Restore Personal Files. I haven't run File History yet,
>
> **[1:37](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/restore-with-file-history?u=76281980&t=97)** but if I had, I'd see the options here. I'll return to File History settings. You can also opt to exclude folders from File History. Click Exclude Folders in the left pane, and click add. You might want to exclude say, a videos folder. When you're ready, click save changes. You can also view advanced settings. Here, you can choose how often to save copies of files. You might want to say, change every hour, to every 15 minutes, if you work on a lot of sensitive things. You can opt to keep saved versions forever, or for a certain amount of months as well. If you opt to keep files forever, be careful. Make sure you're back up drive is big enough to manage all these back ups. You can also click the link to review event log entries for errors. Just click, open File History event logs to view recent events or errors. Here, File History backup log doesn't have any entries. If File History isn't working properly, click here to find out why. When you're ready, click save changes at the bottom of the window. Finally, let's take a look at the local group policy settings you can apply for File History. There's only one, and that's the option to turn it off. You want to do this if you have another back up solution in place, and don't want to let File History be an option. I'll type, gpedit.msc,
>
> **[3:12](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/restore-with-file-history?u=76281980&t=192)** and click edit group policy in the results. Let's locate that one option. It's in Computer Configuration, Administrative Templates, [[Windows]] Components, and File History. Here it is. That's a pretty good overview of File History. You can use it to create backups, restore from them, and even choose which folders and libraries you want to back up and which you don't. And once File History is configured, it runs automatically in the background. You have to make sure to turn it on though, which we didn't do. The only thing to watch out for are prompts from Windows that offer warnings, such as the backup drive being full or unavailable, or File History having been otherwise unable to run. When you're ready, close the File History window. If it's running, it will continue to do so in the background.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Windows 10]] (1)
> **CLI Commands:** make (2), find (1)
> **Warnings:** be careful (1), watch out (1)
> **Prerequisites:** configure (1), set up (1)
> **Env Vars:** usb (1)
> **Analogies:** such as (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [narrator] (1)

#### [Configure OneDrive](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-onedrive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-onedrive?u=76281980&t=0)** - [Instructor] There are plenty of places to store personal data, including standalone computers, attached to external drives and local network drives. On this PC, we have a hard drive, a recovery drive, and a virtual drive and we have a few items available from Network. Large companies that need to manage corporate data might have onsite [[Data Storage]] rooms, or they might keep their data offsite in a server farm or server cluster hosted by a third-party for a monthly or yearly fee. Single users and small businesses might opt to store their data online as well. There are lots of options, including Dropbox, [[Microsoft OneDrive|OneDrive]], [[Google Drive]] and so on. We'll talk about OneDrive here. Open File Explorer on your own computer to see your OneDrive folder. If you don't see a OneDrive folder, it's because you haven't logged into this computer with a [[Microsoft]] account. You'll have to switch accounts if you want to follow along. Saving data to the OneDrive folder is a much different from saving to a personal library. Here for instance, in [[Microsoft Word]], I simply have to click File, Save As and choose OneDrive. Here's my OneDrive folder, and here's where I can save my test document. You can see the new document here in File Explorer in the OneDrive window, but you can also access the files you just saved
>
> **[1:34](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-onedrive?u=76281980&t=94)** from onedrive.[live.com](https://live.com). I've logged into my account here and you can see that just now. I saved the test.docx file. If I were to place the two [[Windows]] side by side, you could see that they hold the same data even the test document. This is OneDrive as it appears in the Edge web browser. And this is OneDrive as it appears on my personal computer. You can save data to OneDrive to back it up as well. While you shouldn't use it as your only backup solution, it certainly works in a pinch. Although many people do depend on OneDrive for all their backup needs, there's always the possibility that your account could be hacked and data deleted so make double backups. That said though, you can use File Explorer to drag and drop data to the OneDrive folder or copy and paste it to make a backup. Once it's there, should you ever need to recover it? You can. Consider a scenario where your personal laptop is stolen or lost, but you've been saving files to OneDrive. To recover your files, locate the data in OneDrive in a web browser, select what needs to be recovered and then click Download. You can download it to your replacement computer. If you accidentally delete a file, like so, you can go to the Recycle bin, select it and click Restore. If you decide you like using OneDrive
>
> **[3:07](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-onedrive?u=76281980&t=187)** and want to save all your documents there, or pictures or videos, you can change the properties of a folder to make it the default. If I go back to File Explorer, go to this PC and right-click Documents that say, I can select Properties, go to the Location folder and find a different target. I could choose OneDrive. I could also move the data that's already there from Location and the Move option. Here's OneDrive. Let's take one more look around OneDrive before we leave. You can select something to share it, to download, to delete, move, copy, even rename. You can create new folders to organize your work, documents, workbooks, and [[Microsoft PowerPoint|PowerPoint]] presentations. You can also upload files and folders. Once you have all your data in one place, at least the data you use often, you can access that data anywhere and you can collaborate from anywhere and work from anywhere. Finally, if you have a smartphone, consider downloading the OneDrive app. You can use this app to work on data from your phone or tablet, and you can get the app from almost any App Store.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft OneDrive|Onedrive]] (21), [[Data Storage]] (1), [[Google Drive]] (1), [[Microsoft]] (1), [[Microsoft Word]] (1)
> **UI Navigation:** go to (3), drag and drop (1), right-click (1)
> **CLI Commands:** make (3), find (1)
> **URLs:** [live.com](https://live.com) (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Configure OneDrive for Business](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-onedrive-for-business?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-onedrive-for-business?u=76281980&t=0)** - [Instructor] Many people use [[Microsoft OneDrive|OneDrive]] to store their personal data in the cloud. OneDrive is free if you have a [[Microsoft]] account. Businesses use OneDrive too. Their version OneDrive is more robust than the personal version and is called OneDrive for Business. As you can see here, I have two instances of OneDrive. One is for my personal data and the other is for my professional data. My employer uses OneDrive for business. OneDrive for Business is part of [[Microsoft Office|Office]] 365. Like OneDrive, it gives you a place in the cloud where you can store, share, and sync work files. It also offers many other features, including, but not limited to, remote work solutions for employees, [[Microsoft Office]] Online, collaboration tools, business email, and device management. If you'd like to try OneDrive for Business, you'll have to subscribe to the service. There is an option to try it for a month for free, if you'd like to do that and follow along. Once you're subscribed and have completed the setup process, you can add users from the Admin Center, shown here. Users you add will have access to Microsoft Office and Teams, among other things. Here's how to create an account for another person. Expand users, click active users, and click add a user.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/configure-onedrive-for-business?u=76281980&t=99)** Fill out all the information and click next. Work through the process and when you're done, click finish. To see what's available to you and other users, click the nine dots at the top of the page. Click OneDrive. The options here are similar to the options you'll find in any [[Cloud Storage]], including the ability to upload and download files, as well as sync files you work with. Click the nine dots once more and take one last look at what's available. Before moving on, take some time to open each app and at least understand its purpose. You might find that having access to OneDrive for Business is worth the monthly fee.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft OneDrive|Onedrive]] (12), [[Microsoft Office]] (2), [[Microsoft]] (1), [[Microsoft Office|Office]] (1), [[Cloud Storage]] (1)
> **CLI Commands:** find (2)
> **Definitions:** is called (1), is an  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Access and configure Backup and Restore](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/access-and-configure-backup-and-restore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/access-and-configure-backup-and-restore?u=76281980&t=0)** - [[Windows 10]] comes with a few ways to backup your data. You can use [[Microsoft OneDrive|OneDrive]] for instance, shown here on the right, and you can also use file history shown on the left. Both have their drawbacks though. OneDrive is somewhat manual. You're responsible for saving data there yourself, or at least redirecting where the data says by default, so that it ends up there. On the other hand, File History only backsup data stored in your default libraries. File History can't create a system image automatically, or backup data stored elsewhere, unless you manually add it to the list of backup entries. Neither option works if you need to restore from an older backup, such as one created in [[Windows]] 7. To resolve this issue, [[Microsoft]] re-instated backup and restore. Let's take a look at it. I'll type backup on the task bar to locate it. Click backup settings, to open system and the backup tab. To create a backup, you'll need to click, go to backup and restore Windows 7, and look at the options. Notice that you can create a system image, or a system repair disk, or you can opt to set up back up for Windows backup. Let's do that. You'll need to select where you'd like to save your backup. Here I have H, and notice it says, the system image cannot be saved on this location. And I have V. This drive does not have enough space
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/access-and-configure-backup-and-restore?u=76281980&t=93)** to store a system image. So my only option here, is to save to a network drive. I'll click save on a network. I'll browse to a network location. I'll choose this machine, and I'll opt save to a backups folder that I already created. And I'll click okay. I'll need to type my username and my password, so that I can access the network computer and I'll click okay. And here we are. Notice I have enough space here for a system image, but it says other people in the network might be able to access your backup. So when it's done, I think I'll go back and look at the permissions for that, just to be sure. I'll click next. I can either let Windows choose what to backup, or I can choose. Since we're trying to get away from accepting the default libraries, and want to incorporate other folders, I'll select, let me choose. And then I'll click next. Notice some things are already selected, including my libraries. I have my admins libraries, and my producers libraries. Let me expand Windows C though. Now I'd like to show you this folder script. I really need to backup this folder as well, which is another reason I wanted to choose my own backups. Understand that I'm not condoning creating folders on the root drive, but for instructional purposes, this will certainly do. I'll make sure include a system image is selected,
>
> **[3:08](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/access-and-configure-backup-and-restore?u=76281980&t=188)** and I'll click next. With that done, I'm ready to start the backup. All I have to do is click save settings, and run backup to complete the process. If I ever need this backup, I simply need to return here to locate and restore from it. I think it's best to incorporate all kinds of backups. I do use File History, and I save data to OneDrive. Three or four times a year, I create a new system image too, and I always keep my recovery disc handy. I suggest you work with various backup options as well. So tonight before closing out of your computer session, set some sort of backup to run, you may be glad you did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Microsoft OneDrive|Onedrive]] (3), [[Windows 10]] (1), [[Microsoft]] (1)
> **Prerequisites:** you'll need (2), set up (1)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - windows (1)

#### [Explore wbadmin](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/explore-wbadmin-14303588?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/explore-wbadmin-14303588?u=76281980&t=0)** - [Narrator] Other videos in this course cover backup and restore and there's a command line complement to this called wbadmin. It's disk-based based, so you can back up one machine and restore to that same machine or another one. If you opt to install to another machine, it's even okay if the [[Hardware]] is dissimilar. Wbadmin creates VHD files, which can be mounted for viewing. It's fairly easy to store them on DVD and USB drives, as well. Using wbadmin, there are two restore options. The bare metal restore option lets you use the [[Windows]] Recovery Environment to complete a full restoration. The individual file and folder and system state restore option lets you restore files, folders, or the machine's system state directly from a command line or [[Powershell]] prompt. The command to start a backup job is wbadmin space start space and backup. You follow this up with the applicable functions and parameters. You'll start with a backup target. It's dash backup target, no space, colon, no space and the letter of the drive to back up to followed by a colon. You'll follow this up with the drive to backup. You'll have to put a dash include again, no space, colon, no space the letter of the drive and then no space colon. Let's open up an elevated PowerShell command prompt
>
> **[1:37](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/explore-wbadmin-14303588?u=76281980&t=97)** and give that a try. I'll run it as an administrator and maximize the window. I'll type the command.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/explore-wbadmin-14303588?u=76281980&t=112)** I added the all critical parameter to include the partitions that contains the system state. I could also add dash quiet to avoid any prompts, but I won't do that here. Let's press enter. After retrieving the volume information we need to put Y for yes or N for no to perform the backup. Backing up right now would take quite a bit of time. So I'm going to go ahead and press no and continue. Once you have a backup available, you can use it to restore a computer. As noted earlier, you can do this from the recovery environment or from an elevated command prompt or PowerShell window. You can also Mount the file in disc management. How you choose to use it is up to you. But keep the files in a safe place and label them appropriately, whatever you decide.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (3), [[Hardware]] (1), [[Windows]] (1)
> **Tools:** powershell (3), command line (2), command prompt (2)
> **Env Vars:** vhd (1), dvd (1), usb (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)

#### [Recover the OS with Windows Recovery Environment](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/recover-the-os-with-windows-recovery-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/recover-the-os-with-windows-recovery-environment?u=76281980&t=0)** - [Technician] The [[Windows]] Recovery Environment also called Windows RE contains automatic repair tools that may be able to help you recover the system after a computer failure. Windows RE, also contains options for administrators and tech specialists, such as access to the command prompt, the ability to recover using a system image disc and options to access the firmware for UEFI settings among other things. You may be able to boot to the recovery environment from settings, recovery, and advanced options if your computer configuration supports it. There are other ways to enter the RE environment; you can hold down the shift key while you click restart to reboot the computer. You can use settings mentioned earlier or you can boot using recovery media like a recovery disk. I prefer to use a physical disk myself because most computers are already configured to boot to the disc automatically and will do so without difficulty. Windows RE will automatically start in certain instances too for example after two consecutive failed boot attempts or two unexpected shutdowns that occur within two minutes of boot completion, you'll see the RE environment. It will also happen when the computer encounters a secure boot error on any computer or a Bit Locker error on touch devices. When you get to the recovery environment what you see, depends on your computer setup. If you have devices connected that windows recognizes like USB drives and DVD drives, you'll see an option named "User Device".
>
> **[1:33](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/recover-the-os-with-windows-recovery-environment?u=76281980&t=93)** We don't have that option here, but if you do, you can select it and choose the device to boot to. You'll see this option, if you've already inserted a recovery disk or system image disk too. But what I'd like to show you here are the options under troubleshoot. You're probably familiar with some of these tools. System Restore, let's you choose a restore point. This will enable you to return your computer to a stable state when perhaps only a few days passed. Another good choice is Startup Repair. With this option the startup files are restored and repaired and problems with startup can be resolved quite easily. You can also change startup settings if you see the option, you can enable safe mode for instance or disable automatic restart on system failures. If you believe you can resolve a problem yourself, say by using safe mode or by uninstalling new device drivers or recently installed programs, this could be a good option for you. "System Image Recovery" is another option. If you have a system image disc that isn't too old assistant image disc is like a picture of the system state. You can also access UEFI firmware settings if you have that sort of system. So that leaves the command prompt. If you're good here, perhaps with knowledge of command line tools such as VCD edit and BCD boot, this might be a good option for you. Finally, there's a new option to go back to the previous build. I think this will become a popular option as Windows updates and upgrades become more fluid when Windows is just Windows and is no longer Windows 7, 8
>
> **[3:07](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/recover-the-os-with-windows-recovery-environment?u=76281980&t=187)** or 10. with this option, you'll be able to undo an upgrade if you have problems with it. So think about the problem you're having before you make a choice. If it's a recent problem system restore might work fine. If it's a startup issue, try Startup Repair. Assistant Image Recovery Disk if available is also a good choice. Make sure to consider all angles and then click the desired option to work through whatever process is required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (9)
> **Env Vars:** uefi (2), usb (1), dvd (1), vcd (1), bcd (1)
> **Analogies:** such as (2), for example (1), for instance (1), picture (1)
> **Tools:** command prompt (2), command line (1)
> **CLI Commands:** make (2)
> **Best Practices:** make sure to (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** setup (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/windows-10-manage-and-maintain-windows-10-2019/next-steps?u=76281980&t=1)** I hope you enjoyed this course on managing and maintaining [[Windows 10]]. I encourage you to use the tools offered here to keep your machines healthy, secure, and running optimally. By making the most of what [[Windows]] has to offer, you can monitor and respond to system events effectively, so, you can [[Representational State Transfer (REST)|rest]] easy knowing your devices are secure and up-to-date. If you're in an enterprise, you can make use of features such as Device Guard, Device Health Attestation, Device Registration, and others to keep your network healthy, too. Beyond that, I hope you create a custom [[Microsoft]] Management Console for your favorite tools, and explore Task Scheduler and [[Powershell]] for automating tasks you do often. If you're interested in learning more, or if you're studying for your Windows 10 MCSA, I suggest looking at the online library for more courses like this one, including courses that discuss configuring support and core services, implementing Windows, and configuring Windows devices. I hope you enjoyed this course as much as I enjoyed creating it. As always, feel free to find me online and reach out. I'd love to hear from you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Windows 10]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft]] (1), [[Powershell]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** mcsa (1)
> **Tools:** powershell (1)
> **Analogies:** such as (1)


## Instructor

- [[Joli Ballew]]

## Skills Covered

- Windows 10

## Path Context

### In [[Advance Your Skills as an IT Help Desk Specialist]]
← [[Windows 10 Configure And Support Core Services]] | **2 of 11** | [[Windows 10 for IT Support- Advanced Troubleshooting]] →

## Appears In

- [[Advance Your Skills as an IT Help Desk Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Windows 10 for IT Support- Advanced Troubleshooting]] — Windows 10
- [[Windows 10 Configure And Support Core Services]] — Windows 10
- [[Windows 10 for IT Support- Troubleshooting Basics]] — Windows 10
- [[Windows 10- Security]] — Windows 10
- [[Windows 10- Administration]] — Windows 10

---

[↑ Back to top](#)