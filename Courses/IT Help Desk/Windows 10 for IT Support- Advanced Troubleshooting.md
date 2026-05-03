---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: windows-10-for-it-support-advanced-troubleshooting
url: "https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting"
duration_minutes: 114
duration: 1h 54m
level: Advanced
updated: 9/30/2022
learners: 58597
skills:
  - Troubleshooting
  - Windows 10
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEfVJiyg1aJNA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664469296114?e=2147483647&amp;v=beta&amp;t=KEW_CfdggAnbHKSus_CFk6aZCJczI7UNYxILQ_YdjK0"
linkedin_topic: IT Help Desk
learning_paths:
  - '[[Advance Your Skills as an IT Help Desk Specialist]]'
prev_courses:
  - '[[Windows 10- Manage and Maintain Windows 10]]'
next_courses:
  - '[[Learning Pc Maintenance And Performance]]'
path_nav: '[{"path":"Advance Your Skills as an IT Help Desk Specialist","position":3,"total":11,"prev":"Windows 10- Manage and Maintain Windows 10","next":"Learning Pc Maintenance And Performance"}]'
path_count: 1
tags:
  - course
  - topic/it-help-desk
  - skill/troubleshooting
  - skill/windows-10
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/IT%20Help%20Desk/Windows%2010%20for%20IT%20Support-%20Advanced%20Troubleshooting.md)

![Windows 10 for IT Support: Advanced Troubleshooting](https://media.licdn.com/dms/image/v2/C4E0DAQEfVJiyg1aJNA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664469296114?e=2147483647&amp;v=beta&amp;t=KEW_CfdggAnbHKSus_CFk6aZCJczI7UNYxILQ_YdjK0)

# Windows 10 for IT Support: Advanced Troubleshooting

> If you work in IT supporting Windows 10, you have an excellent mastery of the basics. In this course, instructor Brien Posey helps you take your understanding to the next level. Brien explains common causes of service failure and how to fix them. He also guides you through steps to take in network troubleshooting, then shows you how to troubleshoot logins. Brien goes over tools and techniques you 

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting) | 1h 54m | Advanced | 59K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Learn advanced troubleshooting in Windows 10](#learn-advanced-troubleshooting-in-windows-10)
- [**1. Devices and Services**](#1-devices-and-services) (6 videos)
  - [Checking for stopped services](#checking-for-stopped-services)
  - [Common causes of service failure](#common-causes-of-service-failure)
  - [Using PowerShell to start failed services](#using-powershell-to-start-failed-services)
  - [Using Device Manager to find failed devices](#using-device-manager-to-find-failed-devices)
  - [Disabling failed devices](#disabling-failed-devices)
  - [Updating device drivers](#updating-device-drivers)
- [**2. Network Troubleshooting**](#2-network-troubleshooting) (8 videos)
  - [Verifying IP address assignments](#verifying-ip-address-assignments)
  - [The ping test](#the-ping-test)
  - [Testing DNS name resolution](#testing-dns-name-resolution)
  - [Fixing common DNS issues](#fixing-common-dns-issues)
  - [Using the network troubleshooter](#using-the-network-troubleshooter)
  - [Fixing Wi-Fi connectivity](#fixing-wi-fi-connectivity)
  - [Network troubleshooting when Hyper-V is installed](#network-troubleshooting-when-hyper-v-is-installed)
  - [Hyper-V virtual machine connectivity](#hyper-v-virtual-machine-connectivity)
- [**3. Troubleshooting Logins**](#3-troubleshooting-logins) (3 videos)
  - [Fixing a computer account](#fixing-a-computer-account)
  - [Common domain membership problems](#common-domain-membership-problems)
  - [Solving time sync issues](#solving-time-sync-issues)
- [**4. Troubleshooting System Updates and Integrity**](#4-troubleshooting-system-updates-and-integrity) (7 videos)
  - [Running CHKDSK](#running-chkdsk)
  - [Using the System File Checker](#using-the-system-file-checker)
  - [Restoring a system's health](#restoring-a-systems-health)
  - [Verify your Windows build number](#verify-your-windows-build-number)
  - [Running Windows Update](#running-windows-update)
  - [Using the Windows Update Troubleshooter](#using-the-windows-update-troubleshooter)
  - [Resolving common update errors](#resolving-common-update-errors)
- [**5. Performance Troubleshooting**](#5-performance-troubleshooting) (4 videos)
  - [Using the Task Manager for performance assessments](#using-the-task-manager-for-performance-assessments)
  - [Working with the Resource Monitor](#working-with-the-resource-monitor)
  - [Using the Performance Monitor](#using-the-performance-monitor)
  - [Using PowerShell to track resource usage](#using-powershell-to-track-resource-usage)
- [**6. Troubleshooting the Blue Screen of Death**](#6-troubleshooting-the-blue-screen-of-death) (6 videos)
  - [Creating a blue screen error on demand](#creating-a-blue-screen-error-on-demand)
  - [The anatomy of a blue screen](#the-anatomy-of-a-blue-screen)
  - [Basic troubleshooting steps](#basic-troubleshooting-steps)
  - [Running the Reliability Monitor](#running-the-reliability-monitor)
  - [Configure a crash dump](#configure-a-crash-dump)
  - [Analyzing a crash dump](#analyzing-a-crash-dump)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn advanced troubleshooting in Windows 10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=0)** - [Brien] [[Windows 10]] is easily one of the most stable and reliable versions of [[Windows]] ever created. Even so, things can and sometimes do go wrong. When that happens, it's important to know how to troubleshoot the problem, and that's what this course is all about. In this [[LinkedIn]] Learning course, I'll show you some Windows 10 troubleshooting techniques that go beyond the basics. In fact, the techniques that I'm going to be showing you are the same ones that I use in real life and are based on my experiences that I've gained over my last 30 years in IT. I'm Brien Posey, a 21 time [[Microsoft]] MVP, author, and commercial astronaut candidate, and I'll be your instructor for this course. So if you're ready to learn how to troubleshoot Windows, then I welcome you to join me in this LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[Windows]] (2), [[LinkedIn]] (2), [[Microsoft]] (1)
> **Warnings:** troubleshoot (2)
> **Env Vars:** mvp (1)
> **Speakers:** - [brien] (1)


### 1. Devices and Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Checking for stopped services](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=0)** - [Instructor] The [[Windows]] operating system makes use of a number of system services that run behind the scenes. These services handle all sorts of different tasks that are fundamental to the operating system. For example, the encrypting file service depends on a system service. Likewise, the DNS client depends on a system service, and there are any number of other functions that are tied to system services. The flip side of this is that if one of these system services were to stop, then the functionality that's tied to that service will come to a grinding halt as well. So sometimes when you have a malfunction within Windows, it could be because the underlying service that corresponds to that function has stopped. So how do you take a look at these services, and how do you know if a critical service has stopped. Well to do that, you'll use a built-in tool called the Service Control Manager. To access the Service Control Manager, what you need to do is right-click on the Start button, and then go to Run and type "services.msc" and click OK. And that's going to launch the Service Control Manager, which you can see right here. So as you look at the screen, you can see that we have a lot of information. Each one of these rows corresponds to an individual system service. And for each one of these services, the console displays the service's name. It displays a description of the service. Then there's a column with the status. And the status column indicates whether or not the service is running. Now, a moment ago, I mentioned that it's really important for system services to be running, and yet as you look at this console, you'll notice that the status column only displays a status of running
>
> **[1:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=92)** for some of the services, but not others. For example, right here, we have a great big gap where these services aren't running. Now why is that? Well, it all has to do with the startup type. If you look at the startup type, you'll notice that some services are set to start manually. Other services are set to start automatically. As a general rule, any service that has a startup type of automatic should display a status of running. Now, there are some exceptions, because there are some situations where Windows will start a service automatically, and then realize that that service isn't really being used at the moment, and it will shut that service down, as a way of saving some system resources. But this tends to be the exception rather than the rule. By and large, services that start automatically should be running. So what do you do if there's a service that's set to start automatically, and it's not running? Well, what you can do is tell the Service Control Manager to start the service. So let's take a look at how to do that. So I'm not going to shut down a critical system service, because that might cause this virtual machine to crash and ruin the video that you're watching right now. Instead, I want to take a look at a service that's set to start manually. So for that, I'm going to use the Background Intelligent Transfer service. That's a service that's used for downloading content from the internet. So I'll go ahead and double-click on the service. And you can see that the startup type is set to manual. And then we have these buttons down here: Start, Stop, Pause, and Resume. So if we wanted to start the service, we could simply click the Start button, and Windows will attempt to start the service. And I'll click OK. And now we can see that the service is running. Likewise, if I want to stop the service,
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=186)** I can simply double-click on the service, and then click the Stop button, and Windows will stop the service. Now, typically there's not going to be a need to change the startup type for a service, but if you want to change the startup type, you can use this drop down and choose a new startup type. So if for example, I wanted this particular service to start automatically, then I could change the startup type to automatic and click OK. And then you can see that the startup type has changed from manual to automatic. And then if I wanted to start the service, I could either reboot the machine, and it should start automatically, because we've changed the startup type. Or I could click the Start button, and Windows starts the service. So that's how you use the Service Control Manager to start system services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6)
> **UI Navigation:** double-click (2), right-click (1), go to (1)
> **Analogies:** for example (3)
> **Env Vars:** dns (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### [Common causes of service failure](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=0)** - [Instructor] If you find that a system service has stopped, it's usually really easy to go ahead and just restart that service. I showed you how to do that in the previous video. However, you may occasionally find that the service fails to start even when you try to start it manually. Now, when that happens there are two main things that you should check because those two things can prevent a service from starting. So let's take a look. I'm going to go into the service control manager and I'm going to double click on the network location service. And I'm just picking this service at random. It's part of the [[Windows]] operating system. So here you can see the property sheet for the network location awareness service and this particular service is currently running. But for the sake of this video, let's pretend for a moment that this service had stopped and that I can't get it started again. The first thing that I would recommend checking in a situation like that is the log on tab. Because services require permission in order to function as a part of the operating system. So you can see that this particular service is tied to an account called network service and there's a password for that account. Now, this is part of Windows. I didn't create the network service account. I didn't enter the password. Windows did this automatically all by itself. So if a service is a part of the Windows operating system, then typically you'll never have to mess with the account or the password. [[Microsoft]] handles all of that for you. So why am I showing you this? Well, not all services are native to the Windows operating system. Sometimes when you install an application, there are services that go along with that application that get installed as a part of the application, and those services aren't managed by Microsoft.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=94)** Windows doesn't really know anything about them, but just like a native service, those services that belong to that application require permissions in order to function. So oftentimes they're going to be tied to a service account. And if you happen to change the password that's associated with that service account, then the service may fail to start as a result of that password change. So that's when you would go into the screen right here and you would type a new password for whatever service account that that service is using. As an alternative, you could configure the service to log in as the local system account. Now, log on problems for service used to be quite common. They're a lot less common than they used to be but they do still happen. The other thing that I would recommend checking if you're having problems getting a service to start is the service dependencies. Because some services are more or less self-contained. They communicate directly with the Windows operating system and don't really depend on anything else. However, there are services that depend on other services in order to function. So if one of those dependency services has stopped, then services that depend on the dependency services will also stop. So let's take a look at what that looks like. You'll notice on the dialogue box that's open that there's a tab called dependencies. I'll go ahead and click on that tab now. And when I do, you can see that this particular service, the network location awareness service, has several dependencies. It depends on the [[DHCP]] client service, the network store interface service, the remote procedure call service, the TCP/IP Protocol Driver service and the Windows event log service. So all of these services have to be running in order
>
> **[3:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=187)** for the network location awareness service to start. So if you're having trouble starting the network location awareness service, then what you might do is take a look at this dependency list and then check and make sure that all of these dependency services are running. You may find that one of those has stopped. You could then start that dependency service and then you should be able to start the network location awareness service. And I'm just using the network location awareness service as an example. The same basic principle applies to every service on here. Now, just as a service may depend on other services, there can also be services that depend on the service that you're trying to start. In this case, the network list service which you can see right here depends on the network location awareness service. So if the network location awareness service stops, the network list service will also stop. And one thing that I want to point out is that dependencies can be hierarchal. Sometimes there are dependencies to dependencies. That's the reason why you see these plus icons next to all of these services. So if I were to click on these, we can see that the DHCP client, for example, depends on an ancillary function driver for Winsock and the network store interface service. So if for example, the network store interface service were to stop, then the DHCP client would also malfunction, which would cause the network location awareness service to stop and it would also cause the network list service to stop because the network list service is tied to the network location awareness service. So there is a complex relationship of interdependencies among some services. So that's something to be aware of as you try
>
> **[4:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=280)** to troubleshoot service startup problems in [[Windows 10]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[DHCP]] (3), [[Microsoft]] (2), [[Windows 10]] (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** dhcp (3), tcp (1)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1), troubleshoot (1)
> **Prerequisites:** install (1), configure (1)

#### [Using PowerShell to start failed services](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=0)** - [Instructor] In one of the previous videos I mentioned that any system services that are configured to start automatically, as a general rule, should be running in order for [[Windows 10]] to function properly. But as you saw in that video, the service control manager list a huge number of services and it can be really tedious to go through that entire list and figure out which services need to be running. Fortunately, there's a shortcut, you can use [[Powershell]] to simplify the process. So let's take a look at how this might work. I'm going to go ahead and click on the start button and then I'll go to all apps, and then I'll go to the W section, and I'll click on [[Windows]] PowerShell, and then I'm going to right click on Windows PowerShell and go to More and then run as administrator. And this is going to open an elevated PowerShell session. Okay, so here we are in PowerShell and if you want to see a list of the system services, you can use the Get-Service commandlet. I'll go ahead and type that now. (keyboard clicks) And when I do that, you can see a list of the services. And for each service you see whether it's running or stopped, you see the service name, and you see the service description. But what if we wanted to see a list of services that were configured to start automatically but that aren't currently running? Well, to do that, we can use the Get-Service commandlet but we also have to use another commandlet. So let me show you how this works. I'm going to type Get-Service and then I'll use the pipe symbol. Now if you're not familiar with the pipe symbol what it does is it takes the output from a PowerShell Commandlet
>
> **[1:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=92)** and uses it as input for another commandlet. So now we need to specify a second commandlet. And the commandlet that I'm going to use is Where-Object. (keyboard clicks) The Where-Object commandlet is a filtering commandlet. So it takes the input that you're giving it, in this case the list of services, and it filters it by the criteria that you specify. So, now we need to specify a filter. So I'm going to type a bracket then I'm going to type $_.Status and then space -eq space and then inside of apostrophes, Stopped. So what we're doing is we're looking for services where the service status is equal. That's the -eq, it stands for equal. So we're checking for services where the status is equal to Stopped. But if I were to simply close this out by typing another bracket and press enter, we would get a list of all of the services that are stopped. But that doesn't completely help us because we don't know which of these services are configured to start automatically. So let's repeat the command, and this time I'm going to remove the closing bracket and then I'm going to type -and so I'm setting up another condition. We're going to look to see which services are stopped and which services have a startup type of automatic. So I'll type &_.StartType
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=186)** (keyboard clicks) and I'll set that equal by typing -eq to automatic
>
> **[3:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=203)** and then I'll give it a closing bracket. And so now we should just see a list of the services that are stopped, but that have a startup type of automatic. And you can see that we get a much shorter list. So what if we wanted to try starting all of these services? Well, we can do that very, very easily. One way that we could do it is to type Start-Service and then the service name. So if for example, I wanted to start the bit Service, I could type Start-Service BITS,
>
> **[3:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=234)** and now if I type Get-Service BITS, we can see that the service is running. We can also stop a service in the same way. So we could type Stop-Service BITS. Now the BITS service should be stopped. And indeed it is. But what if we wanted to try starting all of the services that have a startup type of automatic, but that are currently stopped? Well, what we could do in a situation like that is repeat the command that we used earlier and then use another pipe symbol and then Start-Service. (keyboard clicks) This tells PowerShell that we want to start every service on the list. I'll press enter. And there are some services that PowerShell isn't going to be able to start, hence the red errors that we see. But by and large, PowerShell was able to start these services. So if I were to repeat this command and get rid of these start service portion, we can see that now there are only three services that have a startup type of automatic, but that are currently stopped, whereas before we had six. So we were able to start some of those services that were on the list by using the command that you see right here. So that's how you use PowerShell to manage services in Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (10), [[Windows 10]] (2), [[Windows]] (2)
> **Tools:** powershell (10)
> **UI Navigation:** click on (3), go to (3)
> **Env Vars:** bits (4)
> **Definitions:** is a  (1), stands for (1)
> **Cross-References:** as you saw (1)
> **Analogies:** for example (1)
> **Best Practices:** general rule (1)

#### [Using Device Manager to find failed devices](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=0)** - [Instructor] If you're having trouble getting [[Windows 10]] to work with a particular piece of [[Hardware]], there can be any number of underlying causes. It could be that the hardware itself is bad and needs to be replaced, or it could be a problem with the device driver that Windows 10 uses to communicate with the hardware. So, what do you do in a situation like that? Well, [[Microsoft]] provides the Device Manager as a way of managing device drivers and helping to identify problems with those device drivers. So, let's take a look. What I'm going to do is right click on the start button, and then I'm going to go to Device Manager, and this will open the Device Manager console. I'll go ahead and make this a little bigger. Now, right now I'm connected to a physical machine, and all of the devices that are attached to that physical machine are working properly, so we don't have any problems here. But what might we expect to see if there were a problem? Well, if you look at the very top, we've got the computer name. In this case, the computer is called Posey Surface Book 2 because I'm using a Microsoft Surface Book 2. And then beneath that, we have all of these containers, and each one of these containers corresponds to a category of hardware. So, for example, we have audio inputs and outputs, we have batteries, we have biometric devices, Bluetooth, cameras, and so on. So, we have all of these different categories of hardware. Now, if we've got a device that's malfunctioning, typically, what you would see is that the container containing the device would already be expanded and you would have a warning icon next to the device itself identifying that device as being problematic. Now, we're not seeing that in this case because all of our hardware is working properly.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=94)** But let's go ahead and take a look at an individual device. I'm going to go ahead and expand cameras, and when I do that, you can see the hardware within it. This particular computer has one camera. It's an Intel AVStream Camera 2500, and we can even double click on this device, and that will open up the device property sheet. In this case, the device status indicates that the device is working properly, but if there were a problem with the device, we would see a different device status, typically, something telling us that there's a problem with the device driver or with the device itself. So that's how you would go about using the Device Manager to find a device that's having problems on a Windows 10 system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (7), [[Windows 10]] (3), [[Microsoft]] (2)
> **UI Navigation:** click on (2), go to (1), open the (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Disabling failed devices](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=0)** - [Narrator] If you find that a particular device is causing problems with [[Windows 10]], then you may occasionally decide to disable that device. Maybe it's a device that isn't fully supported for use with Windows 10, and disabling that device is the only way of making the problem go away, and helping [[Windows]] to be more stable. Or maybe it's a device that just isn't needed anymore, but can't be physically removed. In any case, you can disable a device, whether it's working properly or not, if you want Windows to ignore that device's existence. So let's take a look at how to use the Device Manager to disable the device. It's a really simple process. What I'm going to do is right click on the 'start' button. And then I'm going to go to Device Manager. Now, let's go ahead and expand one of the containers within the Device Manager to reveal the individual devices within it. I'll expand the Camera's container. So we have one camera. And let's suppose that we want to disable the camera. The way that we would do this is to right click on the camera, and then choose the 'disable device' command. And when I do that, I see a message saying, "Disabling this device will cause it to stop functioning. "Do you really want to disable it?" In this case, I'll say 'yes', and the device becomes disabled. And you'll notice that the icon for the camera has changed, indicating that the camera has been disabled. Now, if at a later time we decide we want to re-enable the camera, we can do that very easily. All we have to do is right click on the camera, and then choose 'enable device'. And now the camera is enabled.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=96)** And you'll notice that the camera icon has changed to indicate that the camera is now enabled. So that's how you use the Device Manager to disable and then re-enable a device within Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Windows]] (2)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Updating device drivers](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=0)** - [Instructor] Normally, [[Windows]] Update will keep your device drivers up to date. However, if you're using third party device drivers, you may occasionally find that there's a need to manually update a device driver, particularly if you're having problems with a device, and the vendor that made the device has a new driver available. Now sometimes these third party drivers have their own installer, and you can just double-click on the installer, and it runs an MSI file and installs the updated device drivers. That's a fairly common thing, but that particular functionality isn't available for every third party device driver. So in those types of situations, you may be able to use the Device Manager to update a device driver. So let's take a look at how that works. So what I'm going to do is right-click on the Start button, and I'm going to go to Device Manager, and then I'm going to expand a device, I'll use the camera, and then I can see the camera that's attached to the system. In this case, it's an Intel AVStream Camera 2500. So what would we do if we wanted to update the device driver that's associated with this camera? Well, the way that we would do that is to right-click on the camera and then choose the update driver command from the shortcut menu. And this is going to launch the Update Drivers Wizard. So now we see a prompt asking us, "How do you want to search for the drivers?" We can search automatically for the drivers or we can browse the computer for drivers. So if you've already gone to the vendor's website and you've downloaded a new device driver, you would use the "Browse my computer for drivers" option. And then you would simply specify the driver that you had downloaded.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=93)** In this case, the camera's built in to the laptop. It's provided by [[Microsoft]]. I don't have a third party driver for it, so I'm just going to tell Windows to search automatically for the drivers to see if a newer driver is available. So I'm going to click on "Search automatically for drivers" and I get a message indicating that the best drivers for the device are already installed. But we also have an option right here to search for updated drivers on Windows Update. So even though there's no updated driver that's already on the system and available, and there are no updates that Windows currently knows about, we can use the Windows Update to find out if a newer driver is available. So let's go ahead and do that. I'm going to click on the "Search for updated drivers on Windows Update" button, and I'm taken into Windows Update. And you can see that there are a number of updates to be installed. So we have some Windows updates and we have a display driver update right here, we have some firmware updates, and there are some other [[Hardware]] updates, as well. For example, down here by my mouse pointer, we have a driver for Bluetooth. And then we have a new network driver. So there are lots and lots of updates that are available for this machine, and some of those updates are device drivers. So that's how you would go about updating the device driver for a hardware component in [[Windows 10]], using the Device Manager.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Hardware]] (2), [[Microsoft]] (1), [[Windows 10]] (1)
> **UI Navigation:** right-click (2), click on (2), double-click (1), go to (1)
> **CLI Commands:** find (2)
> **Env Vars:** msi (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Network Troubleshooting

[↑ Back to Table of Contents](#table-of-contents)

#### [Verifying IP address assignments](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=0)** - [Instructor] If you're having networking problems with a [[Windows 10]] machine, one of the first things that you should do is to check the machine's IP address assignment. So let's take a look at how to do that. I'm going to begin by taking a look at the IP address configuration on this machine. So what I'm going to do is right-click on the Start button. I'll go to Run and type control and click OK. And this is going to open the legacy control panel. I'll click Network and Internet, and then Network and Sharing Center, and then Change adapter settings. So as you can see, this particular machine has one network connection. So I'm going to right-click on the network adapter and I'll go to Properties. And then this is going to display the adapter's properties. So now we need to look at how IP address assignments are being made on this network adapter. So I'm going to choose Internet Protocol Version Four, and then click Properties. And when I do that, you can see that this machine is configured to obtain an IP address automatically and to obtain a DNS server address automatically. So we're not assigning static IP addresses to this machine, it's getting its addresses from a [[DHCP]] server. So now we need to verify that it actually is acquiring IP addresses. Let me go ahead and cancel out of this. So the next thing that I want to do is open a command prompt window and to do that, I'm going to click on the Start button and I'll go to the W section. And then I'm going to expand [[Windows]] System
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=95)** and click on Command Prompt, and this opens up a Command Prompt window. So the command that we use to find out the machine's IP address assignment is ipconfig. I'll go ahead and type that. And when I do, you can see that the machine's IPV4 address is 172.30.214.171 and it has a gateway of 172.30.208.1 So that's great, the machine is getting an IP address, but what about a DNS assignment? Well, the way that we find out what the machine is using as a DNS server is to repeat the ipconfig command, but this time we add a space and then slash and then the [[Microsoft Word|word]] all. Now when I press Enter, I get information that is a lot more detailed. So we're starting to see some IPV6 information, but more importantly, we can see the IP address of the DHCP server that issued the address to this machine. We can also see the DNS server that this machine is using and that DNS server address is right here, 172.30.208.1. So we can see very detailed information about this machine's IP address. And incidentally, if this computer had multiple network adapters installed, then the ipconfig command would display information about each one of those adapters individually. So that's how you use the Command Prompt window to verify IP address assignments in Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[DHCP]] (2), [[Windows]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** dns (5), dhcp (2), ipv4 (1), ipv6 (1)
> **UI Navigation:** go to (3), right-click (2), click on (2), open the (1)
> **Tools:** command prompt (4)
> **Versions:** 172.30.208 (2), 172.30.214 (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The ping test](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=0)** - [Instructor] One of the easiest ways that you can test network connectivity in [[Windows 10]] is to use the ping command, so let's take a look at how that might work. I'm going to begin by opening a command prompt window. So I'll click on the Start button, and then from there I'll go to all apps. Next, I'll go to the W section, I'll expand [[Windows]] System, and I'll click on Command Prompt, and this opens a command prompt window. Now, the way that the ping command works is that you type ping followed by the IP address of the system that you're wanting to test connectivity to. So for example, this particular machine has an IP address of 147.100.100.60. As a matter of fact, if I type ipconfig, you can see this machine's address. Now, let's ping another machine on the network to see if we can communicate with it. I've got another machine that has an IP address of 147.100.100.161. So I'll type ping 147.100.100.161.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=69)** And when I do that, you'll notice that there's a bit of a delay, and then we're going to see an error message saying request timed out. And the ping command actually sends four different packets to the destination address, so we're going to get this error message four times. Now, does this mean that network connectivity is broken? Not necessarily. The reason for that is that when we use the ping command, we're actually sending ICMP packets to the destination address and some firewalls are configured to block ICMP packets. Let me show you what I mean. So right now we're on the machine that has the 161 address. And as a matter of fact, if I open a command prompt window and I type ipconfig, you can see this machine's address. Now, let's go ahead and disable the Windows firewall. I'm going to right-click on the Start button and go to Run. I'll type control and click OK. And from there, I'm going to go to System and Security, and then I'll click on Windows [[Microsoft Defender|Defender]] Firewall, and then I'll click on turn Windows Defender Firewall on or off. And I'll go ahead and turn off the firewall. And incidentally, this isn't something that I recommend you do. I'm just doing this for demonstration purposes. I'll click OK. So the firewall is off. Now let me switch back over to my other machine and we'll repeat the ping command. Now we get a reply from the destination machine because the firewall is no longer blocking ICMP packets.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=164)** So the ping command can be used to test connectivity, but only so long as a firewall isn't standing in the way. So we verified that this machine can communicate with another machine on the network. What other things might we do with the ping command? Well, if you verified that communication works within your network, then the next logical step would be to ping your default gateway and see if the gateway router responds. So I'll go ahead and do that now. My default gateway is 147.100.100.100, so let's ping that. I'll press Enter, and we get a reply from the default gateway. So we can communicate as far across our network as the default gateway. Now let's find out if we can ping an internet resource. Now, not all websites are pingable, but I'll go ahead and ping my own site, and that's [brianposey.com](https://brianposey.com). I'll press Enter, and we get a reply from [brianposey.com](https://brianposey.com). And you'll notice that the IP address for that site is being returned by the ping along with information about how long the ping took. So that's just a sample of how you might use the ping command to test connectivity on a Windows 10 machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Windows 10]] (2), [[Microsoft Defender|Defender]] (2)
> **UI Navigation:** click on (4), go to (4), right-click (1)
> **Versions:** 147.100.100 (4)
> **Tools:** command prompt (4)
> **Env Vars:** icmp (3)
> **URLs:** [brianposey.com](https://brianposey.com) (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)

#### [Testing DNS name resolution](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=0)** - [Instructor] Although you can use the ping command to test basic network connectivity, you can also use it to make sure that DNS name resolution is working properly, so let's take a look at how that works. I'm going to begin by clicking on the Start button and I'll go to all apps. I'll go to the W section of the Start menu. I'll expand [[Windows]] System. And I'll click on Command Prompt to open a command prompt window. So let's start with just doing a basic connectivity test. I'm going to type ping followed by the IP address of another system on my network, and the IP address that I'm going to use is 147.100.100.161. So let's go ahead and do that. I'll press Enter, and I get a reply from that system. Now, I also happen to know that that system has a computer name of win2 and it's joined to a domain named [poseylab.com](https://poseylab.com). So we can test DNS name resolution by pinging the fully qualified domain name of that system. So I'll type ping win2, which is the computer name, dot [poseylab.com](https://poseylab.com), and I'll press Enter, and I get a result. And it's important to make sure that the IP address that's returned in the result is the same as the IP address that you know to belong to that system. So initially I pinged 147.100.100.161, and when I pinged the same system by its fully qualified domain name I got the same IP address returned in the reply,
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=94)** which is exactly what we want to see. So DNS name resolution is indeed working on this system. Now, another thing that you can do if you want is you can ping the system just based on its computer name alone. So I'll go ahead and do that. And I'll press Enter. And what we see in the results is the fully qualified domain name. If you look right here, you can see win2.[poseylab.com](https://poseylab.com). So Windows was able to resolve the system's fully qualified domain name and it's IP address just by pinging the computer name. Now, if DNS name resolution weren't working for this and I tried to ping the system just based on its computer name, assuming that it's on the same network that I'm on and assuming that it can ping it by computer name, what we would typically expect to see is a result where maybe the IPv6 address was returned or something like that. But we probably wouldn't expect to see the fully qualified domain name displayed in the ping results. So that's how you can use the ping command to test DNS name resolution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **Env Vars:** dns (5)
> **URLs:** [poseylab.com](https://poseylab.com) (3)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **Versions:** 147.100.100 (2)
> **Tools:** command prompt (2)
> **Definitions:** is a  (1)

#### [Fixing common DNS issues](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=0)** - [Instructor] In the previous video, I explained that you can use the ping command to confirm that DNS name resolution is working on your network. Every once in a while though, you might find that you have trouble resolving a particular computer's name even though everything seems to be correct, your computer is configured to use the right DNS server the computer who's named or trying to resolve is using the same DNS server. Everything appears to be correct and yet name resolution isn't working. So why might that be? Well, it all comes down to something called the DNS resolver cache. Let me explain, imagine what would happen if every time your computer needed to talk to another computer on your network it had to contact a DNS server first and resolve that computer's name even if it had just talked to that computer a moment ago. Well, that type of activity would put a huge load on your DNS server, and it would also slow down every system on your network just because of all the extra overhead associated with contacting the DNS server over every little thing. So thankfully, that's not the way that [[Windows]] works. When you resolve a computer name, that resolved name is written to something called the DNS resolver cache so that the next time you have to communicate with that computer, Windows doesn't have to perform yet another DNS name resolution instead it can just look to the cash and find the entry for that computer and do the name resolution that way. Now, the reason why that can sometimes lead to problems is because imagine what would happen if a computer on your network's IP address changed. So if the IP address changes, the DNS record for that computer on the DNS server will also change to reflect the new IP address.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=93)** But if a computer that's trying to communicate with that machine has that machine's former name and IP address in its DNS resolver cache, then it will resolve the computer name to the wrong IP address. So in a situation like that where you're trying to communicate with a computer on your network and DNS name resolution just isn't working, and you suspect that maybe that machine's IP address has changed, what you need to do is flush the DNS resolver cache. And this is something that's really simple to do. So let's take a look at how to do that. I'm going to click on the start button and then from there I'm going to go to all apps, I'll go to the W section, I'll expand Windows system and we need elevated permissions for this so I'm going to right click on the command prompt and I'll go to more and then run as administrator. And this is going to open an elevated command prompt window when I click yes. So you can see that we're in a command prompt window and the [[Microsoft Word|Word]] administrator up here indicates that we're in an elevated command prompt window so we have administrative permissions and what we need to do is clear out the DNS resolver cache. And the way that we do that is by using the IP config command and if this sounds familiar, it's because the IP config command is the command that's used to verify your IP address. If I were to just press enter right now I would see this machine's IP address. But to clear the DNS resolver cache what we can do is type IP config space slash flush dns.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=186)** And I'll press enter and I get a message saying that I have successfully flushed the DNS resolver cache. And so what that does is the next time you try to resolve the name of that computer that you're having trouble with, rather than using a cashed IP address and fully qualified domain name Windows is going to be forced to contact the DNS server where it will get the most recent DNS record. Now, you don't have to do this every time an IP address changes because entries in the DNS resolver cache are relatively short lived so cache entries will eventually expire and be replaced by more current data. So the problem will eventually go away on its own when a computer on your network changes IP addresses. But if you need to fix the problem quickly this is how you do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Microsoft Word|Word]] (1)
> **Env Vars:** dns (20)
> **UI Navigation:** go to (3), click on (2)
> **Tools:** command prompt (4)
> **CLI Commands:** find (2)
> **Analogies:** imagine (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Using the network troubleshooter](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=0)** - [Instructor] If you're experiencing network problems with a [[Windows 10]] machine and you've thus far been unable to resolve the problems, then one option is to run the network troubleshooter. The network troubleshooter is a mechanism that's built into Windows 10 and it diagnosis common network problems and automatically resolves them. So let's take a look at how that might work. What I'm going to do is right click on the start button and I'll go to Run and I'll type control. (keyboard clicks) And so now I'm ta into the legacy control panel. And next I'm going to click on the control panel search box and I'm going to type the [[Microsoft Word|word]] troubleshooting. And you can see that I have a result right here. I'll click on Troubleshooting. And we have several different troubleshooting options and we have one right here for Network and Internet. I'll go ahead and click on that now. And so now I see a list of potential options. So I have an option to find and fix problems with connecting to the internet or to websites. There's an option for finding problems with Network Adapters. There's another option for diagnosing Incoming Connections. And then there's an option for diagnosing a Connection to a Workplace using DirectAccess. I'll go ahead and use the internet connections option. So I'll click on Internet Connections and then I see a quick summary of what's about to happen. I'll click next. And [[Windows]] begins trying to detect any problems that may exist. So now I see a dialogue box and it says Please select the issue Windows should troubleshoot, and I'm going to tell Windows
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=93)** to troubleshoot my connection to the internet. And incidentally, this particular machine isn't having any problems, but I'll click troubleshoot my connection to the internet and Windows perform some tests and begins looking for my problem. And I get a message back saying that troubleshooting couldn't identify the problem, which isn't surprising because this machine doesn't have a problem. But if a problem were detected, the troubleshooter would tell you what the problem was and it would either fix the problem or it would tell you how to fix the problem. So that's how you use a troubleshoot to diagnose problems with your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Windows 10]] (2), [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (5), go to (1), select the (1)
> **Warnings:** troubleshoot (4)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Fixing Wi-Fi connectivity](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=0)** - [Instructor] If your [[Windows 10]] machine is having trouble with [[Wi-Fi]], then there are several things that you can do to troubleshoot the problem. One of the first things that I recommend doing is just opening up the task bar and then right-clicking on the network icon, and then we have a troubleshoot problems link right here. If I open that, then [[Windows]] begins detecting problems with the network adapter, and you can pick and choose which adapter you want to troubleshoot. Now, I'm not actually going to complete this wizard because I'll lose my connection to this machine if I do that, and it will run the video. But just know that in a situation like this, what you would want to do is to choose your Wi-Fi adapter, which is right here, and then click Next, and then Windows will begin troubleshooting the problem. But there are some other things that you can do in addition to that. I'll go ahead and cancel out of here. Another thing that you can do is check the device driver to make sure that your wireless network adapter is working properly. And the way that you would do that is by right-clicking on the start button and then go to System and then click Device Manager. And then from there, you would want to expand Network Adapters And then look for your wireless network adapter. This one is mine, but yours may have a different name. So what you would do now is double click on the wireless network adapter and check the device status. In this case, you can see that the device is working properly. I'll go ahead and cancel out of this. Another thing that I recommend doing is making sure that a Static IP address hasn't been assigned to the wireless network adapter. Because if you assign a Static IP address
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=93)** to a wireless adapter, a lot of times, that will cause communications problems. So the way that you would check that is by right-clicking on the start button, and then go to Run and type Control and click Okay. And this is going to open the legacy Control Panel go to Network and Internet. Then from there, go to Network and Sharing Center, and then click on Change adapter settings. Now locate your wireless network adapter, which mine is this one right here. Right-click on it, and go to Properties. This is going to bring up the connections property sheet. Now, locate Internet Protocol Version 4, which you can see right here, and click Properties. And make sure that it's set to Obtain an IP address automatically. While you're at, it's also a good idea to make sure that the adapters configured to obtain a DNS server address automatically. I'll go ahead and cancel out of that. So those are the basic things that you need to do to troubleshoot a problem with Wi-Fi. But if none of that works, then what I would recommend doing is trying to connect to a different wireless access point than the one you've been attempting to connect to. And the reason for that is simple. It could be that you're just having a simple problem with that specific network. For example, maybe you've got a bad set of credentials or what I've been noticing happening quite a bit lately is wireless access points that are depleting their IP address pool. Because when you connect to a wireless access point, typically, that wireless access point acts as a [[DHCP]] server and it assigns an IP address
>
> **[3:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=188)** to the machine that's connecting. But because of the way that DHCP leases work, it's easy for a wireless access point to run out of IP addresses at least for a period of time. And when that happens, no machine is going to be able to connect to it, even if that machine is configured correctly. So you might try connecting to a different wireless network just to see if the connection's working. Then that will tell you if the problem is on your end or if it's a problem with the wireless network itself. So those are just a few strategies for solving Wi-Fi connectivity problems in Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (4), [[Windows 10]] (2), [[Windows]] (2), [[DHCP]] (2)
> **UI Navigation:** go to (5), open the (1), click on (1), right-click (1)
> **Warnings:** troubleshoot (4)
> **CLI Commands:** make (3)
> **Env Vars:** dhcp (2), dns (1)
> **Versions:** version 4 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Network troubleshooting when Hyper-V is installed](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=0)** - [Instructor] The professional edition of [[Windows 10]] comes with Hyper-V which allows you to run [[Virtual Machines]] on a Windows 10 desktop. Now, from a troubleshooting standpoint the thing that you need to know is that when Hyper-V is enabled it changes the way that the Windows 10 network stack works. So let's take a look at what these changes look like and what they mean to you from a troubleshooting perspective. So what I'm going to do is go ahead and right click on the start button and I'm going to go to run and type control and click okay. Now, the machine that I'm on right now does not have Hyper-V installed. This is just a basic Windows 10 desktop. So I'm going to click on network and internet. From there, I'll go to Network and Sharing Center and then I'll click on change adapter settings. So as you can see, I've got one network adapter. Now if you look at the name of the network adapter, [[Microsoft]] Hyper-V Network Adapter, the reason for this name is that you're actually looking at a virtual machine right now. So I don't have a physical network adapter, I've only got a virtual network adapter, but Hyper-V is not installed inside of this virtual machine. So for the purposes of what we're looking at right now just pretend that this is a physical network adapter. So we've got one network adapter, I'll right click on it and go to properties and take a look at the various items that are enabled. We have Client for Microsoft Networks is enabled, File and Printer sharing for Microsoft Networks is enabled as is QoS Packet Scheduler, Internet Protocol Version 4, that's TCP IPV4, and then Microsoft LLDP Protocol Driver and Internet Protocol version six.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=95)** So we've got all of these services that are enabled for this one network adapter. Now with that said, I'm going to click on Internet Protocol version four and click properties, and you can see that there is an IP address that's assigned to this particular adapter. And this is just an address that is specific to my own network. I'm going to go ahead and cancel out of this. And now I want to install Hyper-V so I'm going to drop back to the root of the control panel and then I'm going to go to programs. And then I'll go to turn [[Windows]] feature on or off. And this brings up a list of the various features that are available in Windows 10. I'm going to select Hyper-V and I'll click OK.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=142)** And so now Hyper-V is being installed and I'm prompted to reboot the computer. So I'm going to pause the video for just a second while this machine reboots and then we'll take a look at the changes that were made to the networking stack. Okay, so Hyper-V is installed, and while the video was paused, I created a Hyper-V virtual switch. I had to do that while the video was paused because the process of creating the virtual switch would've disrupted the recording. But let me show you what I did. I'll type Hyper-V in the search box and I'll open the Hyper-V manager. And then what you would typically do is go to the virtual switch manager and choose the new virtual switch option and then click create virtual switch. And then there is a screen that appears after that that asks you a couple of specifics. That's the basic process. But you can see the virtual switch that I created right here. It's called My Virtual Switch, and you'll note that this is an external virtual switch. And the reason why that's important is because an external virtual switch latches on to your physical network adapter. So let me cancel out of this and I'm going to open control panel. And just as before, I'm going to go to Network and Internet, Network and Sharing Center, and Change adapter settings. Now, as you'll recall earlier I had a single network adapter, but now I've got three. So let me show you what's going on here. First, we have vEthernet default switch. So when I created the virtual switch, the Windows operating system actually sees
>
> **[3:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=235)** that as an extra network adapter. So if I go and right click on this and go to properties, you can see that all of the basic components are enabled for this virtual switch. And if I select TCP IP, you can see that the address that's assigned to that is 172 28 0 1, which is different than the IP address that this machine was previously using. So I'll cancel out of this. Then the next network adapter is this one right here. This is the Hyper-V network adapter. I'll right-click and click properties. So this is the one that corresponds to the physical network adapter in the system. Now remember, I'm using nested Hyper-V, I'm running Hyper-V inside of a virtual machine which is why this is called a Hyper-V network adapter. But normally in an environment where you've got a physical network adapter, this particular property sheet would be bound to your physical network adapter. But the interesting thing here is that notice all of these check boxes have been cleared, so we don't have the client for Microsoft Networks enabled, we don't have TCP IP enabled. So this needs to stay exactly the way that it is in order for networking to work properly. The only thing that should be enabled is the Microsoft LLDP protocol driver. And if I scroll down, you can see that at the very bottom we've got the Hyper-V extensible virtual switch enabled. But those are the only two options that should be enabled. Let me cancel out of this. So then we have this third network adapter and this is vEthernet. And you'll notice that it says My Virtual Switch and if I right click on this and go to properties, you can see that all of the normal things are enabled and if I look at TCP IP,
>
> **[5:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=329)** now we have the IP address that had previously been assigned to my machine. So what's going on here, when you create a virtual switch in Hyper-V, that virtual switch gets bound to a physical network adaptor. Because the virtual switch is using that physical network adapter, Windows can't use it itself, so it creates a virtual network adapter and assigns your normal IP address to that virtual network adapter. So that virtual network adapter connects to the virtual switch which in turn connects to the physical network adapter. So that's why this says vEthernet. This is a virtual network adapter connected to My Virtual Switch, which is the name of the virtual switch that I created through Hyper-V. So all of this is to say that now that Hyper-V is installed and I have an external virtual switch enabled, now my physical network adapter can't be used in the usual way. Instead, all of my parent machines traffic has to go through this virtual network adapter. So that's just something really important to keep in mind if you're doing troubleshooting on a Windows 10 machine that has Hyper-V enabled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (6), [[Microsoft]] (6), [[Windows]] (3), [[Virtual Machines]] (1)
> **UI Navigation:** go to (7), click on (6), open the (1), right-click (1), scroll down (1)
> **Env Vars:** tcp (4), lldp (2), ipv4 (1)
> **Definitions:** is a  (3), is an  (2), is called (1)
> **Code Identifiers:** vethernet (3)
> **Versions:** version 4 (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)

#### [Hyper-V virtual machine connectivity](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=0)** - [Instructor] If you've installed HyperV on [[Windows 10]] and you're having problems with your [[Virtual Machines]] being able to access the network then the problem is almost certainly related to your virtual switch. So let's take a look at why this happens. What I'm going to do is to create a new virtual machine. So I'm going to click new and then virtual machine and then I'll click next. I'm prompted to enter a name for the virtual machine. I'll call this VM1. I'll click next. I'll choose my virtual machine generation, I'll just go with a generation two virtual machine. And I'll assign one gigabyte for the startup memory and click next. Now I'm taken to the configure networking screen. Now by default, this virtual machine has no connectivity to the network whatsoever, so that may be one of the problems that you'll run into. What I'm going to do instead is click this drop down and I'm going to choose the default switch. I'll click next. Now I'm taken to a screen that asks me to configure the virtual hard disk. I'll click next. Now I'm taken to the screen for installing the operating system on the virtual machine. I'll just choose to install an operating system later. I'll click next. Then I'm taken to the summary screen, and I'll click finish and the new virtual machine is created. Now, as you'll recall, I configured this virtual machine to use the default virtual switch. And if I right click on the virtual machine and go to settings, and then I choose network adapter you can see that it's connected to the default switch.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=94)** Now as it is right now, this particular virtual machine, even though I'm using the default switch, would not be able to access the network. Let me show you why that's the case. I'll cancel out of this and I'm going to go to the virtual switch manager. And we currently have two virtual switches. We have the default switch, and we have my virtual switch. Now, when you create a new virtual switch you're prompted to choose what type of switch you want to create. Let me show you what that looks like. I'll click on new virtual network switch and then I'm prompted as to the type of switch I want to create. I can create an external, an internal, or a private virtual switch. Now, of the three virtual switch types, only an external virtual switch is able to access the network. With internal and private virtual switches the virtual machines can talk to each other but they can't talk to the outside world. And with an internal virtual switch a virtual machine can also talk to the parent operating system but it can't communicate with the external network. So only an external virtual switch will give you that network connectivity that you presumably need. So having said that, let's go back to the default switch and you can see that the default switch is configured for the internal network. So this will give you access to other virtual machines and it will give you access to the parent operating system, but it won't give you access to the physical network. So that's why a virtual machine that's connected to the default switch won't give you that true network access. So you won't be able to access the internet, you won't be able to access other machines on your network. So if you need that physical network access, then what you'll have to do is to create an external virtual switch and then connect your virtual machine
>
> **[3:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=187)** to the external virtual switch. And it just so happens that I've got an external virtual switch created. So I can configure this machine to use it. I can right click on the virtual machine and go to settings and then I can click on network adapter and then I can set the virtual switch to my virtual switch, which is an external virtual switch and click okay. And now that virtual machine would be able to access the network. So that's why virtual machines running on Windows 10 HyperV may lack connectivity to the physical network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (4), [[Windows 10]] (2)
> **UI Navigation:** click on (4), go to (3), switch to (1)
> **Prerequisites:** configure (3), install (1)
> **Env Vars:** vm1 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Troubleshooting Logins

[↑ Back to Table of Contents](#table-of-contents)

#### [Fixing a computer account](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=0)** - [Instructor] Occasionally, you may find that problems with a computer account can prevent a [[Windows 10]] machine from being able to connect to an active-directory domain. Let me show you what I mean. What you can see right here is that I'm connected to a [[Windows Server]] running Hyper-V, and I've got a couple of [[Virtual Machines]] up as evidenced by the RDP session icon, which you can see right here. So right now, I'm looking at a Windows 10 desktop running in this virtual machine that is domain joined. So let's go ahead and log into the domain. So I'm prompted for my username and password. I'm going to click on "Other user", and I'll enter my domain name, /, and then a username. And then I'll type my password, and I get a message saying that the security database on the server does not have a computer account for this workstation trust relationship. But this machine is domain joined, so what's going on? Well, what tends to happen is that if you have a domain-joined Windows 10 machine and you have a problem with that machine, so you decide to restore a backup, well, that backup may have a mismatched relationship with what's in the active-directory domain. Because, as I'm sure you're aware, user accounts have passwords associated with them. What a lot of people don't realize, though, is that computer accounts also have a password associated with them, and that computer-account password is something that's maintained by [[Windows]]. As an administrator, you never have to touch it. But that password gets changed periodically. So if you restore a Windows 10 backup
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=96)** of a domain-joined machine, there's a chance that you reverted to an earlier point in time, where there was a different password. And so, now, you have an old password that's associated with Windows 10, but your active-directory domain still has the current password. So let's take a look at how to fix this problem. From a Windows 10 perspective, the first thing that we have to do is get rid of the domain membership. So I'm going to go ahead and log in with a local user account. So now I'm logged into Windows, and I'm going to click Start and go to Settings, and then I'm going to go to System, and then About. And then, I'll go to "Rename this PC, advanced". I'll click Change, and I'll make this machine a member of a work group. I'll click OK, and then I'll click OK. I'm prompted for a username and password. And so, now this machine has been removed from the domain, and it's now a member of a work group instead. I'll click, OK, I'll click OK, I'll close this, and I'll click Restart. So while that computer's restarting, there's something that we need to do on the active-directory side. So let me switch over to my other virtual machine. This virtual machine is my [[Active Directory]] domain controller. And as you can see,
>
> **[3:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=187)** I've got the Active Directory Users and Computers console open, and I've got the Computers container selected. So here's my account for this machine. What I need to do is right click on the account, and then click on Reset Account. And I'm prompted, "Are you sure you want to reset this computer account?" I'll click Yes, and that reset the account. Now, technically I could just delete the account and then have Windows recreate it, but if I were to do that, then I would lose all of the computer-specific settings that go along with this account, so it's better to just reset it if you have that option. So let me go ahead and close out this virtual machine, and now I'm back on my Windows 10 machine. I'll log in. And so, now that we're logged in, the next thing that we have to do is join the active-directory domain, so let's go ahead and do that. I'll click Start, and I'll go to Settings. Then I'll go to System, I'll click on About, and then "Rename this PC, advanced". I'll click Change, and then I'll choose Domain. And I'll type my domain name, which is [poseylab.com](https://poseylab.com), and click OK. And I'm prompted for a username and password.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=274)** And now I see a message welcoming me to the domain, so we fixed that computer account that became out of sync with Windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (7), [[Windows]] (4), [[Active Directory]] (2), [[Windows Server]] (1), [[Virtual Machines]] (1)
> **UI Navigation:** go to (5), click on (4)
> **CLI Commands:** find (1), make (1)
> **URLs:** [poseylab.com](https://poseylab.com) (1)
> **Env Vars:** rdp (1)
> **Speakers:** - [instructor] (1)

#### [Common domain membership problems](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=0)** - [Instructor] If you're having trouble joining a [[Windows 10]] machine to an [[Active Directory]] domain, there are two main things that you should check. First of all, you need to verify that a network path exists to a domain controller. Second, you need to make sure that DNS domain name resolution is working for the domain. So, let's go ahead and work through the diagnostic process. So, right now I'm on a non-domain joined Windows 10 desktop. So, what I'm going to do is I'm going to right click on the start button and I'll go to Settings, and then I'll click on System, About, and then Rename this PC Advanced. So I'll click on Change, and then I'll click Domain, and then I'll type in my domain name [poseylab.com](https://poseylab.com). I'll click OK and I get an error message saying that an active directory domain controller for the domain [poseylab.com](https://poseylab.com) could not be contacted. So as I mentioned, there are two things that can cause this. You can have a network error where there's no direct network path to a domain controller or you can have a DNS name resolution error. So let's find out what's going on. Let me go ahead and close this error and I'm going to open a command prompt window. So I'll click on the start button and I'll go to All apps, and then I'll go to the W section. And then I'll expand window system and click on Command Prompt. And so now that a Command Prompt window is open, I want to ping my domain controller by its IP address. And that IP address is 147.100.100.248. So I'll type ping 147.100.100.248.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=105)** And so I do have a direct network path to my domain controller. So that's good. So since the network path exists, the problem is most likely DNS name resolution. Now this particular domain controller is set up to be a DNS server. So let's take a look at this machine's IP address configuration. I'll go ahead and close this out. And I'm going to right click on the start button and go to Run, and I'll type control and click OK. Next, I'll go to Network & Internet, Network and Sharing Center, Change Adapter settings. And then I'll right click on my adapter and go to properties, and then I'll click internet protocol version four and click Properties. And so we can see this machine's IP address but take a look at the DNS server, the DNS server isn't something that's local to my network. So what I want to do is I want to change this DNS server to one that's authoritative for my active directory domain. So I'll change this to 147.100.100.248 and I'll click OK.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=172)** And I'll click Close and I'll close this out. And so now let's try the connection again. I'll click OK. And now I'm prompted to enter a username and password. So I'll go ahead and enter a username and I'll type my password and click OK. And so now I've managed to join the domain. So if that's how you would troubleshoot a problem joining a domain in Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Active Directory]] (3)
> **UI Navigation:** go to (6), click on (6)
> **Env Vars:** dns (7)
> **Versions:** 147.100.100 (3)
> **Tools:** command prompt (3)
> **CLI Commands:** make (1), find (1)
> **URLs:** [poseylab.com](https://poseylab.com) (2)
> **Warnings:** troubleshoot (1)

#### [Solving time sync issues](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=0)** - [Instructor] You may have noticed on your [[Windows 10]] PCs that sometimes the clocks tend to drift a little bit. Now this might not necessarily be a problem for you, but if the PC is connected to an [[Active Directory]] domain then clock drift can cause major problems, because [[Windows]] uses the Kerberos protocol for authentication, and Kerberos is time sensitive. So if clocks become out of sync by more than a few minutes, you can have any number of problems that occur. So there is a way that you can bring the clocks into sync. The best option is to synchronize the Windows clock with an NTP server, NTP standing for Network Time Protocol. Now, ideally what I'm about to show you you would want to perform at the active directory level, but you can do it at the local group policy level, particularly if you've got a standalone Windows 10 PC. So let's go ahead and take a look at how this works. What I'm going to do is right click on the start button, and I'll go to Run and I'll type gpedit.msc. And this is going to open up the group policy editor with the local security policy. So here we can see the local computer policy. So I need to go to computer configuration, administrative templates, system, and then Windows Time Service and then time providers. Now there are three group policy settings. There are two of 'em that we need to enable. First, we need to enable Windows NTP Client. So I'll double click on Enable Windows NTP Client,
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=96)** and I will enable this and click okay. Next, I'm going to click on configure Windows NTP Client, and I'll enable this as well. Now, there are a couple of changes that I need to make here. Right now, the type is set to NT5DS, and I need to change that to NTP. I also need to change the NTP server so I'm going to delete what's already there. And then I'm going to type several NTP servers. So as you can see, the server is us.pool.[ntp.org](https://ntp.org),0x1 and then I have one.us.pool.[ntp.org](https://ntp.org),0x1.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=140)** And then I have 2.us.pool.[ntp.org](https://ntp.org),0x1.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=148)** And then 3.us.pool.[ntp.org](https://ntp.org),0x1. So it's a lot to type but that gives you several NTP servers that you can use. I'll go ahead and click okay, and then I'll close the group policy editor. Now, eventually that change will take effect, but you might not see the clocks update immediately. If you want the clock to update more quickly there is something that you can do. What I'm going to do is open an elevated command prompt window, and I'm going to do that by clicking on the start button and then going to all apps, and then I'll go to the W section and then window system and I'll right click on command prompt, and I'll go more, and then run as administrator. And this is going to open an elevated command prompt. I'll click yes. And now that the command prompt is open, there are two commands that I need to type. The first one is GP update /force. And what this does is it tells the Windows that you want to load the most recent security policy. So you can see that the policy is updating and it takes just a second, but you can see that the computer policy update has completed successfully. And now the user policy update has completed successfully. So now Windows is aware of the most recent changes to the security policy. The other thing that we need to do is to restart the Windows Time Service, and we need to do this through [[Powershell]]. So I'm going to click on the start button. I'll go to all apps. I'll go to the W section, then I'll go to Windows PowerShell.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=241)** I'll right click on Windows PowerShell, and go to more and then run as administrator. And this will open an elevated PowerShell session. I'll click yes. So the command that I'm going to use is restart-service and then w32time And I'll press enter, and that will restart the Windows Time Service. And so now at this point, the clock should be correct. Now, it's worth noting that Windows will pull time from other sources. If Windows happens to be connected to an active directory domain, it will try to get that time from a domain controller. If Windows is running on a virtual machine, it will try to get its time from the hypervisor that it's running on. So that's just something to be aware of. But if you've got a standalone Windows system, then the method that I just showed you will work for getting the time from an authoritative time source. And as I mentioned too, if you have a domain joined environment, then you can implement those policy settings that I showed you at the group policy level, so that they apply to all of your domain joined PCs. So that's how you fix time synchronization issues in Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (16), [[Powershell]] (4), [[Windows 10]] (3), [[Active Directory]] (3)
> **UI Navigation:** go to (7), click on (6)
> **Env Vars:** ntp (9), nt5ds (1)
> **Tools:** command prompt (4), powershell (4)
> **URLs:** [ntp.org](https://ntp.org) (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)


### 4. Troubleshooting System Updates and Integrity

[↑ Back to Table of Contents](#table-of-contents)

#### [Running CHKDSK](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=0)** - [Instructor] Sometimes when [[Windows]] experiences a problem that problem may be attributed to storage corruption. If the disk becomes corrupt, then some of the Windows system files might also be corrupt and when that happens, Windows can malfunction and exhibit any number of different problems. So fortunately, [[Microsoft]] has included a tool with Windows that you can use to check for disk corruption and to repair that corruption if it exists. The tool is called check disk. Now, if this sounds familiar, it may be because check disk has been a standard Microsoft utility for decades. It was actually introduced in the days of DOS way back in the 1980s. But the version of check disk that we have today is quite a bit different from what we had decades ago. check disk has evolved over the years along with the operating system. So let's take a look at how you would use check disk. Now, we have to run check disk from a command prompt but we have to run it from an elevated command prompt otherwise it won't work. If you attempt to run check disk from a standard command prompt and you attempt to repair, then Windows will give you an error telling you that you don't have permissions to run the operation even if you are logged in as an administrator. So let's go ahead and open an elevated command prompt window. What I'm going to do is click on the start button and I'm going to go to the W section, and then I'll expand Windows System, and then rather than clicking on command prompt I'm going to right click on it and this is going to open up a sub menu. I'll go to more and then run as administrator. And this is going to open an elevated command prompt, I'll click yes. Now before I run check disk, what I'm going to do
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=93)** is type the check disk command, it's C H K D S K and then /? and I'll press enter. And what this does is it causes Windows to display the check disk command syntax. I'll go ahead and make this a little bigger. So as you can see, there are any number of command line parameters that you can use with CHKDSK to fine tune its behavior. Now, typically there are only two that you're going to need to use, volume and /f, volume is the letter of the drive that you want to check. So if for example, you want to check the C drive, volume would be C:, /f tells Windows to fix any errors that it might encounter. So let's take a look at how this works. I'm going to type CHKDSK and then space and then C: because I want to run a scan of the C drive. And let's just do a basic scan first without the /f. I'll go ahead and press enter, and you can see what happens when we run CHKDSK. You can see that CHKDSK is examining the basic structure of the disk and then it goes into step two, examining file name linkages. And then stage three is examining the security descriptors, and then we get a summary of the disk's health. Now in this case, the disk is healthy and because the computer is relatively fast and the disk is small, CHKDSK completes quickly. But if you have a really large hard disk or a lot of corruption is present, or if you're on a slow machine this process could take a while to complete. So let me go ahead and clear the screen. And this time I want to rerun CHKDSK,
>
> **[3:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=185)** but I want to do it with the /f parameter. Now, as you recall, /f tells CHKDSK to fix any errors that it encounters, but there aren't any errors on this disk. The reason why I want to show you that is because I want to show you what happens if you run CHKDSK against the C drive and you attempt to correct errors. So let's repeat the previous command chkdsk C: and then I'm going to append space /f and I'll press enter. And when I do that, I get an error message saying CHKDSK cannot run because the volume is in use by another process. What this really means is that Windows is using the C drive and it has to do that in order to be able to function. But then the error goes on and ask us, would you like to schedule this volume to be checked the next time the system restarts? So I'll go ahead and press y and enter, and then I get a message saying the volume will be checked next time the system restarts. So with that said, let's go ahead and close out the command prompt and let's reboot the system. So Windows is restarting and I get a message that gives me a chance to abort the disk check before it happens. And now you can see the disk check is running before the Windows operating system actually loads and it's fixing any errors that it may encounter because we used that /f parameter. And then once the scan completes, Windows loads in the normal way. So from there, you can simply log in and see if CHKDSK fixed your problem. Now, one last thing that I do want to quickly mention
>
> **[4:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=278)** is that if CHKDSK does find errors and you correct those errors, it's a good idea to keep running CHKDSK with the /f parameter until no more errors are reported because sometimes CHKDSK does need to be run more than once in order to successfully resolve everything. So that's how you use CHKDSK to troubleshoot storage problems in [[Windows 10]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (12), [[Microsoft]] (2), [[Windows 10]] (1)
> **Env Vars:** chkdsk (14), dos (1)
> **Tools:** command prompt (6), command line (1)
> **UI Navigation:** click on (2), go to (2)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)

#### [Using the System File Checker](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=0)** - [Instructor] Sometimes when [[Windows]] experiences problems, it can be because there's a problem with one of the Windows system files. The file might be corrupt, or it might be an outdated version. Well, Windows contains a built-in tool, called the System File Checker, that you can use to check all of your system files, to make sure that they're all running the current version and that nothing is corrupt. So let's take a look at how to do this. I'm going to go ahead and click on the Start button. And from there, I'm going to go to the W section of the Start menu. I'll expand Windows System, and then I'm going to right-click on the Command Prompt and go to More and Run as administrator. And this is going to open an elevated command prompt window. I'll click Yes. So as you've probably already guessed, the System File Checker is a command-line tool, and we run it by typing SFC for System File Checker. Now, there are various command-line parameters that we can use with SFC, but the one that you'll typically want to use is scannow. So I'm just going to type SFC /scannow. And I'll press Enter. And you can see that the scanning process has begun. And as you can see, we got a message saying that Windows Resource Protection found some corrupt files, and it successfully repaired them. So that's exactly what the System File Checker is designed to do. It's designed to look for any corrupt files or files that are running outdated versions
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=94)** and then repair them automatically as you run the System File Checker. So that's how you use the System File Checker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5)
> **Env Vars:** sfc (3)
> **UI Navigation:** click on (1), right-click (1), go to (1)
> **Tools:** command prompt (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Restoring a system's health](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=0)** - [Instructor] The [[Windows]] operating system contains a built-in tool called the Deployment Image Servicing and Management Tool, or DISM, as it's more commonly referred to. This tool is typically used for imaging a system. In other words, you might create a deployment image, and then you automatically deploy that image to a system, and the DISM tool is involved in that process. But even though the DISM tool is primarily involved in imaging, it can also be used to repair a system using a parameter called Restore Health. So let's go ahead and take a look at how this works. What I'm going to do is click on the Start button. Next, I'll go to the W section, I'll expand Windows System, and then I'll right-click on Command Prompt and go to More, and then Run as administrator. I'll click yes, and now we've opened an Administrative Command Prompt window. So to run the DISM command with the Restore Health parameter, what we need to do is type dism.exe space /online space /cleanup-image
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=79)** space /restorehealth, and I'll press enter. And the process begins. Now it's worth noting that this process can take quite some time to complete. Typically, it takes at least 30 minutes, although it can take more or less time depending on the speed of your system and the size of your hard disk. And so it looks like the process has completed successfully. Now, in this case, the entire process took far less than the half an hour that I estimated, and that's probably because this is a lab machine running on a fast computer with nothing really on it, but in a real-world environment, it is common for this process to take a long time. At any rate, that's how you use the DISM tool to restore the health of a [[Windows 10]] PC.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Windows 10]] (1)
> **Env Vars:** dism (5)
> **UI Navigation:** go to (2), click on (1), right-click (1)
> **Tools:** command prompt (2)
> **Definitions:** in other words (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Verify your Windows build number](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=0)** - [Narrator] Occasionally, you may find that a problem is specific to a certain version of [[Windows]], so it's helpful to be able to know what version of Windows you're actually running, particularly if you're trying to find help online and you find a description of a problem or a fix that pertains to one specific version or one specific build number. So let's take a look at how to find your Windows version and build number. The easiest way to do it is to click on the Start button and go to Settings, then go to System, and then click on About and this will provide you a nice summary of your PC. For example, you can see the device name, the processor, how much memory is installed, the system type, the pen and touch. But then if you go down just a little bit, you'll find this Windows specification section. And here, you can see the edition. We're running [[Windows 10]] Pro, in this case. The version 21H1, in this case, when that version was installed, followed by the OS build number and the experience. So this screen provides you with a lot of really helpful information that can help you to narrow down whether or not a particular fix is appropriate for your individual system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Windows 10]] (1)
> **CLI Commands:** find (5)
> **UI Navigation:** click on (2), go to (2)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Running Windows Update](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=0)** - [Instructor] When you experience problems with [[Windows 10]], one of the simplest yet most effective things that you can do is to update [[Windows]]. Oftentimes, the updates that [[Microsoft]] releases contain bug fixes. Now, I'll be the first to admit that even though this is an advanced course, updating Windows is not exactly an advanced topic. Nonetheless, I wanted to include it in this course simply because of how important it is to keep Windows up-to-date. So with that said, let's take a look at how you update Windows. I'm going to begin by clicking the start button. Next, I'll go to settings. From there, I'll click on update and security. The Windows update tab is selected by default, and I'm going to click on check for updates. Now at the moment, there are no urgent updates available, but if you look right here, you can see that there's a feature update that's available, and we can install that by clicking on the download and install link. I'll go ahead and click on that now. And so, as you can see, Windows has begun downloading the update, and then once the download process completes, it will automatically install this update, bring us up to the latest edition of Windows 10. Okay, so it looks like the installation process has completed, and we can either click restart now, or we can schedule the restart to occur at another time. I'm going to go ahead and click restart now, and Windows is restarting.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=96)** Okay, and the system is starting up, and the update has been installed. Now, anytime that you install an update, it's a good idea to check and see if there are any other updates available, so let's go ahead and do that. I'm going to click on the start button. I'll go to settings, update and security, and let's check for updates, and it looks like there is an update available. So you want to keep checking for updates until there are no more updates to install. But that's how you update Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[Windows 10]] (3), [[Microsoft]] (1)
> **UI Navigation:** click on (4), go to (2)
> **Prerequisites:** install (5)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### [Using the Windows Update Troubleshooter](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=0)** - [Instructor] If you're having problems getting [[Windows]] Update to work properly, then the very first thing that you should do is check to make sure that you've got internet connectivity. If internet connectivity is working, then the next thing that you should do is run the Windows Update Troubleshooter. Now before we do that, let's go ahead and simulate a problem. What I'm going to do is right click on the start button and I'll go to Run and I'll type services.msc. That's going to open the service control manager. Now, one of the services that's used by Windows Update is the Background Intelligent Transfer Service, or BITS as it's more commonly known. You can see that service right here and if you look at the status column, you can see that the service is not running, but it needs to be running in order for Windows Update to function properly. So let's go ahead and run the troubleshooter. What I'm going to do is click on the start button and I'll go to Run and I'm going to type control. (keyboard clicks) And this is going to bring up the legacy control panel. So from there I'm going to type the [[Microsoft Word|word]] troubleshooting into the search box. And you can see that we have a troubleshooting option, I'll go ahead and click on that now. And we have a variety of troubleshooters that we can use to troubleshoot various problems. The system and security section, which you can see right here, contains a link that we can click to fix problems with Windows Update. I'll go ahead and click on that link now. So this launches the Windows Update troubleshooter. I'm going to go ahead and close the control panel. You don't actually have to do that
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=94)** but I'm going to do that just to make things easier to see. And then I'm going to move the over a little bit. So now I'll click on Next. And the troubleshooter begins. You can see that it's checking to see if there's a pending restart and now it's starting the BITS Service. So it detected that the BITS service wasn't running and then it started it. Now we received a message saying that troubleshooting couldn't identify the problem. And that's one of the little quirks with the troubleshooters, is that every once in a while they will tell you that they didn't find a problem even though they actually did. Now if you look back at the service control manager, it looks as though the BITS Service isn't running. But if I refresh the console, you can see that the BITS Service has actually been started and it now reflects the status of running. So Windows Update should be able to run at this point. Now, if you're concerned about that, you could rerun the troubleshooter, but rather than doing that, I'm just going to go ahead and close this out and I'm going to click on Start and then Settings, Update & Security, and let's check for updates. And it looks like we're up to date, so Windows Update is working properly. So the troubleshooter did its job even though it gave us that error message indicating that it didn't find anything. So that's how you use a troubleshooter to diagnose problems with Windows Update.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (9), [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (6), go to (2), open the (1)
> **Env Vars:** bits (5)
> **CLI Commands:** make (2), find (2)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Resolving common update errors](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=0)** - [Narrator] If you're having problems with [[Windows]] Update, and you haven't been able to use the troubleshooter to resolve those problems, there are a few other things that you can do. The first thing that I recommend doing is unplugging any peripherals from your PC. I'm talking about anything other than the keyboard or mouse. So if you have a printer directly connected to the PC, you can unplug that. If you have a scanner attached, unplug that. Unplug anything other than your keyboard or mouse. And of course you'll need a network connection. Then reboot the PC and see if Windows Update works. Hopefully it will, but if it doesn't there are some other things to try. The next thing that I recommend trying is just making sure that you've got plenty of free disc space. Now, this is less of an issue with newer Windows builds, because [[Microsoft]] actually reserves some space to be used by Windows Update. But, even with that being the case, low disk space can cause problems. So the way that you would check disk space is by opening up File Explorer, going to this PC and looking at your C Drive. So, in this case, I've got 99.7 gigabytes free. So we've got plenty of free disk space. So the next thing that we would want to do is to close out File Explorer, and then boot the machine into safe mode. And the way that you do that is by clicking on the 'start' button, and then holding down the 'shift key', and clicking the power icon and then click 'restart'. And I'm holding down the shift key this entire time. And now I'm letting go of the 'shift key', and the system should reboot. So I'm taken to a screen that prompts me to choose an option. I'm going to click on 'troubleshoot'. And then I'm going to go to 'advanced options'.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=98)** Next time I'm going to click on 'startup settings'. Now I'm going to click 'restart', and I'm taken to a screen that asks me what I want to do. So I'm going to enable safe mode. So I'll press four. And now Windows will boot into safe mode. And you'll notice that Windows reduces the screen resolution because we are booting into safe mode. So I'll go ahead and enter my password. And I'll close this out. Now what we need to do is open up File Explorer, and I'll go to this PC and then the C drive, the Windows folder. And we need to locate a folder called Software Distribution.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=151)** So here's the software distribution folder. I'm going to open this up. And this is the folder where the various updates that are downloaded from Windows Update are stored. So what we want to do is just delete all of this. So I'm going to select everything, right click and click on 'delete'. So everything's been deleted. I'll close out File Explorer, I'll empty the Recycle Bin. And now let's restart the PC. And Windows should boot normally. And so, now I can log in. So what I did in that last step when I deleted the software distribution folder was I effectively got rid of the Windows Update cache, all of the updates that had previously been downloaded. The idea behind that is that if an update was downloaded incorrectly and became corrupted or something like that, then that could be causing problems with Windows update. So if you go in and you clear out that folder, then you get rid of that entire cache, and you can kind of start fresh with Windows Update. So hopefully now that that's been done, you can go into Windows Update and begin downloading updates in the usual way. So those are just a few things that you can try if you have problems with Windows Update.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (14), [[Microsoft]] (1)
> **UI Navigation:** click on (3), go to (2)
> **Versions:** 99.7 (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 5. Performance Troubleshooting

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the Task Manager for performance assessments](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=0)** - [Instructor] If [[Windows 10]] is experiencing performance problems, then one of the simplest tools that you can use to figure out what's going on is the Task Manager. Let me show you how this works. I'm going to right click on the Start button and I'll go to Run and I'll type task mgr. And I'll press OK and this opens up the Task Manager. Now, at first there's nothing displayed but if I click on more details, then what I get is a list of every process that's running on the machine. Let me go ahead and make this a little bigger. So you can see for every process we can see the amount of CPU resources that are being used, we can see how much memory the process is using, how much disc time it's using, how much network bandwidth is being used, and how much power is being used. So we get all of this information for every process that's running on the machine. We can also sort these columns. If, for example, I wanted to know which process is consuming the most CPU time, I could click on the CPU column and the list would be sorted by CPU usage. Now, this isn't the only view that's available to us. You'll notice that there's a tab at the top of the screen labeled performance. I'll go ahead and click on the performance tab. And what I get here is an overall view of the machine's performance. So right now I can see the machine's CPU usage and you can see that the load on this machine is relatively low. I could also click on memory and the graph would change to reflect the machine's memory usage rather than the CPU usage. And of course, I also have an option that I can click on
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=94)** to see how the hard disc is being used. And incidentally, if your machine has multiple discs, then you'll see an icon for each individual disc. And then there's one more for looking at network performance. So this is how you can use the task manager to assess the performance of a Windows 10 machine.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2)
> **Env Vars:** cpu (6)
> **UI Navigation:** click on (5), go to (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Working with the Resource Monitor](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=0)** - [Instructor] Although you can use the Task Manager to access basic performance information, the Task Manager can also be used as a tool for accessing another tool called the Resource Monitor that provides you a little bit more detail. So, let's take a look at how you access the Resource Monitor and how it works. I'm going to begin by right clicking on the start button and I'll go to run and I'll type Task Manager and click okay. And this opens up the Task Manager. What I'm going to do now is click on the performance tab and then you'll notice that there's a link at the bottom of the window that says open Resource Monitor. I'm going to go ahead and click on that link now. So, this is the Resource Monitor and the Resource Monitor is divided into five tabs, overview, CPU, memory, disc, and network. The overview tab shows a summary of how the system resources are being used. So, for right now, you'll notice that the CPU section has been expanded, and so, we have a list of all of the processes that are running on this machine. We can see the process ID, the description, the process status, the number of threads, which CPU is running the process, and we can see the average CPU usage. And then, over here, we have a chart that shows the current CPU usage. Right now, it's at about five or six percent and we can see the maximum frequency. And then, we have a nice overview chart at the right side of the screen that shows us the current CPU usage, current disc usage, network, and memory usage. Now, we can easily expand any
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=94)** of these other sections as well. If, for example, we wanted to see how this system was using its disk resources, then I would just click on this down arrow right here, and that would expand the disc section. So, again, we see our processes and the process ID and then we see the file that's being used and then we see some disc performance information. And you'll notice that this information is just a little bit more detailed than what we had in the Task Manager. So, now, let's take a look at some of these other tabs that are available to us. I'll click on the CPU tab. So, when I click on the CPU tab, I get a view that's very similar to what you saw on the overview tab, but the difference is that we have a bit more information available to us. We still have our list of processes and the process ID and description and the status and threads, CPU and average CPU, but notice down here that instead of having dropdowns for disk and memory and that sort of thing, we now have other things besides just processes. For example, we can look at the CPU resources being consumed by system services. I'll go ahead and click that down arrow. And now, we get a list of system services and we see the process ID associated with those services. We see the service description and the service status and so on and so forth. And we can also look at associated handles and associated modules. Now, I'll click on the memory tab. And the memory tab provides us with the same basic information. We have a list of the processes that are running on the machine, and then we can see how the system's physical memory is being used. So, you can see that the portion of the chart that's in green reflects memory and use, whereas the blue represents standby memory. And then, we also have just a little bit of orange here,
>
> **[3:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=188)** which corresponds to memory that's being modified, and then we get a nice summary down below of the available memory, the cash memory, the total memory and the installed memory. Now, I'll click on the disc tab. And the disc tab shows us disc activity. We can see which processes are currently consuming disc resources, and then, we also have dropdowns for disc activity and storage. So, we can get some nice detail about how our discs are being used. And then, off to the right, we have graphs that show us exactly what the disc activity is. We can see our overall disc activity and then we can also see disc activity on a specific disc. And then, I'll click on the network tab, and the network tab works in essentially the same way as the other tabs that you've seen, in that it shows us the various processes that are running on the machine, and we can see which processes are using the network and how much network bandwidth those processes are consuming. So, that's how you use the Resource Monitor to evaluate a [[Windows 10]] systems performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (1)
> **Env Vars:** cpu (11)
> **UI Navigation:** click on (8), go to (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Using the Performance Monitor](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=0)** - [Instructor] [[Windows 10]]'s main tool for assessing system performance is called the Performance Monitor. Now, the Performance Monitor works a little bit differently from the Resource Monitor and the Task Manager because the Resource Monitor and the Task Manager are focused on showing you the individual processes and what types of resources those processes are consuming, things like the amount of memory that each process is using and the amount of CPU time that a process is using. The Performance Monitor is different because it focuses on whole system performance. So let's take a look at this tool. To get to the Performance Monitor, I'm going to right-click on the Start button and I'll go to Run and I'll type perfmon and press Enter. And so now the Performance Monitor opens. I'll go ahead and make this bigger. So right now we just see a bit of summary information about the system's performance, but to access the main Performance Monitor screen, we need to click on Performance Monitor in the console tree. I'll go ahead and do that now. So this is what the Performance Monitor looks like, and it's broken up into two sections. The top section is a graph that shows the current system performance, and this is shown in real time. And then the lower section shows which counters we're looking at. A counter is simply a mechanism that reflects one individual metric of the system's performance. Right now, the counter that we're looking at is percentage processor time. You can see the counter name just above my mouse pointer. So the percentage processor time counter shows us what percentage of the time the CPU is being used. So right now the CPU is being used
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=95)** less than 10% of the time. So this machine has plenty of CPU resources. But if, on the other hand, the percentage processor time counter showed that the CPU was consistently in use above 80% of the time, then that might be an indication that this machine has inadequate CPU resources and might need an upgrade. Now, the percentage processor time counter isn't the only counter that's available. There are plenty of others. And the way that we would look at those is by clicking on the plus icon, and that's going to bring up the ad counter screen. So from there we see a list of categories. So processor is a category, RAS is a category redirector is a category. And then we can expand those categories and see individual counters within them. So if, for example, I wanted to see the percentage of time that the CPU was idle, I could select the percentage idle time counter, and I'll look at all instances as opposed to an individual CPU. I'll click add and then click OK. So now my graph is going to reflect the percentage of idle time and it's going to reflect the percentage of time that the CPU is in use. And if I wanted to make this chart a little bit less confusing, I could even remove the percentage processor time counter, and the way that I would do that is by selecting it and then clicking on the X. And so now I'm only looking at the percentage of time that the system is idle. Now, for every Performance Monitor counter, there's a certain threshold of values that you're looking for. Values within a certain threshold indicate normal conditions and values that exceed that threshold indicate
>
> **[3:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=189)** that there's some sort of issue going on. So a lot of times when you're troubleshooting a problem with Windows 10 and you go onto the internet and you find a [[Microsoft]] article talking about that problem, they'll tell you to load the Performance Monitor and to look at a specific counter and see if its value falls outside of a certain range, and if the value does fall outside of that range, then Microsoft will tell you what might be going on and what you need to do to solve that problem. So that's how the Performance Monitor works in Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Microsoft]] (2)
> **Env Vars:** cpu (9), ras (1)
> **Definitions:** is a  (4), is called (1)
> **UI Navigation:** right-click (1), go to (1), click on (1), select the (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using PowerShell to track resource usage](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=0)** - [Instructor] Just as you can use the Task Manager and the Resource Monitor to find out what system resources each process is consuming, you can also get that information through [[Powershell]]. So let's take a look at how this works. I'm going to begin by clicking on the Start button, and then I'm going to go to the W section, I'll go to [[Windows]] PowerShell, and then I'm going to right-click on Windows PowerShell, and go to More, and Run as administrator, and that's going to open an elevated PowerShell session. I'll click Yes,
>
> **[0:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=39)** and here we are in PowerShell. Now if you just want to get information about your system processes, you can do that by typing the Get-Process cmdlet. I'll go ahead and do that so that you can see what it looks like. And what you get is a list of every process that's running on the machine and the resources that that process is using. So you can see the Handles, and then you see information about the amount of memory that the process is using. Incidentally, WSetK, that's your working set memory in kilobytes. And you can also see the CPU usage, the process Id, and then the ProcessName. So this information is great, but as you can see, there are a lot of processes on this machine. So if you're trying to track down a performance problem, then it really helps to be able to sort this list. But let's take a look at how that might be done. What I'm going to do is type Get-Process again, and this time I'm going to specify the pipe symbol. And if you're not familiar with PowerShell, the pipe symbol tells PowerShell that you want to take the output from one cmdlet and use it as input for another cmdlet. So we're taking the output that's generated by the Get-Process cmdlet, and we're treating it as input for another cmdlet. And, in this case, that cmdlet is going to be Sort-Object. I'll go ahead and type that. Now we have to tell PowerShell what we want to sort by, and the way that we do that is by providing a property and then the name of that property. So if I wanted to sort this list by CPU usage,
>
> **[2:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=133)** then I would type -Property and then CPU. And I'll go ahead and press enter. And so now the output is sorted by CPU usage. I'll go ahead and make this a little bit bigger, and I'll scroll up to the top. And if you look at the CPU category, you can see that the very first process that's listed has no CPU usage, and then the CPU usage increases gradually. And then as we scroll down, we get higher and higher CPU usage. So we've effectively sorted our list of processes by the amount of CPU usage. Now one thing that I do want to be sure and point out is that the information that's presented is accurate for that particular moment in time. CPU usage fluctuates and so does memory usage. So just because the information was accurate at the time that it was captured, doesn't mean that it's going to be accurate two seconds later. The information does change. But let's suppose that we want to narrow this down a little bit. Suppose that, for whatever reason, we wanted to know which five processes are consuming the most CPU time. Yes, we could look at our sorted list, but there is another way that we could do that. What I'm going to do is repeat the command that we just typed, and then I'm going to add another pipe symbol at the end, which means that we're going to take this output that we already generated, and we're going to treat that as input for yet another PowerShell cmdlet. And that cmdlet is going to be Select-Object.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=223)** Now the Select-Object cmdlet tells PowerShell which columns you want to display. So we could type some various column headers and tell PowerShell how we want the output formatted, but what I'm going to do instead is I'm going to type -Last 5. And when I press enter, what we get is a list of the five processes that are consuming the most CPU time. So we've effectively narrowed down that great big list, and we found the five processes that are putting the greatest load on our CPU. So that's just a taste of how you can use PowerShell to diagnose system performance issues.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (12), [[Windows]] (2)
> **Env Vars:** cpu (13)
> **Tools:** powershell (12)
> **UI Navigation:** go to (3), right-click (1), scroll up (1), scroll down (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)


### 6. Troubleshooting the Blue Screen of Death

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a blue screen error on demand](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=0)** - [Instructor] Typically, blue screen errors are something that you want to avoid. After all, nobody wants to actually create a blue screen error. However, if your goal is to learn about blue screen errors, then you need to be able to create such an error on demand. So that's what I want to show you in this video. Now, before I show you how to create a blue screen error on demand, it kind of goes without saying that you shouldn't do this on a production system. You should only do this in a lab environment. So with that said, let's go ahead and cause the system to blue screen. So what I'm going to do is I'm going to click on the start button and then I'm going to go to the W section. I'll expand [[Windows]] System, and then I'm going to right-click on Command Prompt, and I'll go to More and Run as administrator. And this is going to open an elevated command prompt window. I'll click Yes. So to create a blue screen error, we're going to use a native Windows tool called Task Kill. So I'll go ahead and type task kill, and we need to provide a few parameters to go along with this. I'm going to use /IM. And then we need to provide a name for a process. So what we're essentially doing is we're shutting down a critical system process so that the system has no choice but to blue screen. So the process that I'm going to shutdown a service host.exe. So that's svchost.exe. Now, normally Windows is designed
>
> **[1:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=92)** so that it won't shutdown critical system processes, because shutting down such a process is usually considered to be a bad thing. So what we're going to have to do is force the shutdown of the service host process, and we do that by appending /F to this command. F standing for force. So we've got taskkill /IM svchost.exe /F. And when our press enter, the system should wait for a couple of seconds and then we'll see it blue screen. So as you can see, the system blue screen. And if you've never seen one of these before, this is what a blue screen error looks like. So that's how you create a blue screen on demand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3)
> **UI Navigation:** go to (2), click on (1), right-click (1)
> **Tools:** command prompt (2)
> **Speakers:** - [instructor] (1)

#### [The anatomy of a blue screen](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=0)** - [Instructor] There are several elements that are displayed when a blue screen error occurs. The first and most obvious of these elements is the frowny face right here just to the left of my mouse pointer. You're also going to see a rather generic error message saying your device ran into a problem and needs to restart. We're just collecting some error info and then we'll restart for you. Below that, you're typically going to see a counter that shows what percentage is complete and that percentage reflects the memory dump process. So if you've configured [[Windows]] to perform a memory dump when a blue screen error occurs, then this counter is going to show you what percentage of the memory dump is complete. So then, if you go down a little bit further, there are a couple of other things that are going on. We have a QR code and you can scan this QR code with your smartphone and that will take you to a page that gives you information about the problem that you're having. There's also a message saying, For more information about this issue and possible fixes, visit [windows.com/stopcode](https://windows.com/stopcode). And then, it goes on to say, If you call a support person, give them this info. And then we have a stop code. In this case, that stop code is critical process died. Now the stop code is the one thing on this page that's really important because it points to the source of the problem. And so, I'm going to be talking all about stop codes in Video 6-3, which covers basic troubleshooting steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **URLs:** [windows.com](https://windows.com) (1)
> **Speakers:** - [instructor] (1)

#### [Basic troubleshooting steps](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=0)** - [Instructor] The idea of fixing a blue screen of death error can be daunting, but the good news is that correcting the error is usually easier than it might seem. Whenever an error like the one that you're seeing on the screen right now occurs, the very first thing that I would recommend doing is just rebooting the machine and seeing if the problem goes away. Every once in a while, you may find that a blue screen error is a fluke and that it clears up on its own after you've rebooted the system. If that doesn't happen, though, then what I would recommend is shutting down the system and then unplugging all of your USB devices, everything except for the keyboard and mouse, and then reboot the system in safe mode. Once you're in safe mode, think about anything that's been installed recently and remove it, because if, for example, you recently installed an application and then blue screen errors began occurring shortly thereafter, then that application is very likely tied to those blue screen errors. And it isn't just applications that can cause blue screen errors. If you've recently installed a [[Windows]] update or an update to a device driver or even a new device driver or a new piece of [[Hardware]], those too can be contributors to the blue screen error. So whenever you see an error like this, just think about what's changed on your system most recently, because whatever it is that was the most recent change, that's probably what's causing your error. Now, if that approach doesn't help you to resolve the error, then the next thing that you should do is to take a look at the stop code, and the stop code is this item right here just above my mouse pointer. In this case, the stop code says critical process died. What this means is that a key system process was shut down unexpectedly
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=94)** and the operating system couldn't function without it. Now, in this particular case I actually did this on purpose. In the very first video in this lesson, I showed you how to trigger a blue screen error on demand, and that's what resulted in this particular stop code. I actually used a command called task kill and I shut down a core system process, resulting in this blue screen. Now, this isn't the only stop code that you can get. There are several others. But let's talk about what some of the common stop codes are and what they mean. One common stop code is system thread exception not handled, and in my experience, this is one of the more difficult stop codes to troubleshoot because it's kind of a catchall error. What it means is that some process or some thread that's running on your system encountered an error and it didn't know how to deal with that error, so it caused Windows to blue screen. Typically, this is going to be tied to an application, but it can be tied to the Windows operating system or to a device driver. Another error that you might occasionally encounter is IRQL not less or equal, and this particular error is almost always memory-related. What it typically means is that a process or a device driver that's running on your system tried to access an area of memory that it didn't have permission to access. So for example, you might have an application running on Windows, and that application tries to run a protected area of memory, and because it can't access that memory, it doesn't know what to do, and it causes a blue screen. Another stop code that you might occasionally encounter is video TDR timeout detected, and this particular blue screen error is tied to your GPU.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=190)** So what happens a lot of times is if you've got a very graphically intense workload and you overstress your GPU to the point that it can't keep up with all of the instructions that are coming in, it can result in a blue screen with the stop code video TDR timeout detected. Another problem that you might experience is page fault in nonpaged area. This is one of the most common blue screen stop codes, and it's usually memory-related. Typically, what it means is that either you've got some bad memory in your system that needs to be replaced, or it can mean that your system simply doesn't have enough memory. Another common blue screen error is system service exception. This one is almost always tied to a device driver, and if you happen to receive a system service exception stop code, then the device driver that resulted in that blue screen error will usually be printed just beneath the stop code. And then one last stop code that you need to be aware of is DPC watchdog violation. Now, this is one of those stop codes that was really common when [[Windows 10]] first came out, but you don't see it very much anymore. Typically it's caused when an SSD, that's a solid state drive, driver is found to be incompatible with Windows. And the way that you would typically resolve that is by going into the device manager and making sure that the disk controller is using the SATA AHCI driver that's built into Windows rather than using a third-party driver. So those are some of the stop codes that you might encounter when diagnosing a blue screen of death error message in Windows 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Windows 10]] (2), [[Hardware]] (1)
> **Env Vars:** tdr (2), gpu (2), usb (1), irql (1), dpc (1)
> **Analogies:** for example (2)
> **Warnings:** troubleshoot (1), be aware (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Running the Reliability Monitor](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=0)** - [Instructor] When you experience a blue screen error in [[Windows 10]], it's important to find out if the error is just a one-off situation that happened as a total fluke. Or if the system has been consistently experiencing blue screen errors. Knowing the answer to this question can help you know how to deal with the error. So the best tool that [[Windows]] offers for finding out if blue screen errors are happening consistently or not is the reliability monitor. So let's take a look at how to access and use this tool. So what I'm going to do is I'm going to right click on the start button and I'm going to go to Run and then I'll type control and click okay. And that's going to open the Legacy control panel. Next, I'm going to click on System and Security. Then I'll go to Security and maintenance. From there, I'm going to expand the maintenance container and then I'll click on Viewer Reliability History. And this is going to open the Reliability monitor. I'll make this a little bigger. So what we see in the Reliability Monitor is a recent history of the device. So for the various days you can see any informational events that occurred. You can also see warnings and you can see error messages. And the nice thing about error messages is that they're categorized. You'll notice that on the right side of the chart we have categories like application failure, Windows failures, miscellaneous failures, warnings and information. So if we look at today, we can see that we had a Windows failure and we can also see that there was a miscellaneous failure. And then we also had an informational event. Now if you look down at the bottom
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=93)** you can see that all of today's events are listed. So here's our informational event and then here's our critical events. And it looks like we had six different errors that have happened on the system today. Now the blue screen errors are in bold so we have shut down unexpectedly and then we have another shutdown unexpectedly. Both of those are blue screen errors that occurred. And if you want a little bit more information on this you can simply double click on the error and that will take you to a screen right here. And if you look at problem event name you can see that this was indeed a blue screen error. So this particular system has already blue screened twice today. So if we were to go back to the security and maintenance screen and go back into the reliability monitor, we have some errors that have occurred on other days. So it would be important to know are these blue screen errors or is something else going on with the system? So if we were to look at yesterday then we have three critical events. Windows was not shut down properly. Windows failed to start because of a problem with the hard disc, and Windows failed to start because of a problem with the hard disc. So some problems happened yesterday but these weren't blue screen problems. So it appears, that the blue screen errors just started today. And then we have another day that some errors occurred back on July 8th. And if I select that, you can see that we have Windows was not shut down properly and Windows failed to start because of a problem with the hard disc. So we have two errors there but none of those are blue screen errors. So apparently the blue screen problem
>
> **[3:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=185)** that this machine is experiencing was relatively recent. At any rate, that's how you use the reliability monitor to look at recent history of the device and find out if the blue screen errors are happening consistently or if it's just a recent event.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Windows 10]] (1)
> **UI Navigation:** click on (3), go to (2), open the (2)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configure a crash dump](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=0)** - [Instructor] If you're having problems with blue screen errors, then it's a good idea to configure [[Windows]] to create a crash dump file. A crash dump file is essentially a copy of the machine's memory, and you can go through this file a little bit later on and then figure out what it was that caused the blue screen error to occur in the first place. Now, Windows will create a crash dump file by default, even if you don't do anything at all. But it's a good idea to go in and fine tune some of the options that are associated with creating a crash dump file, so that you can make sure that it meets your needs. So, let's take a look at how that's done. To get started, I'm going to right click on the start button, and then I'm going to go to system. And then I'm going to click on Advanced System Settings. So this brings up the system property sheet and then what you want to do from here is make sure that the advanced tab is selected, which it is, and then locate the startup and recovery section on that tab and then click settings. Now you'll notice that we have a section right here next to my mouse pointer called System Failure and the settings that are within the section control what happens when a blue screen error occurs. And so the first option that we have is write an event to the system log. So this option should be selected because what happens is when a blue screen error occurs then an event is going to be written to the system log, so that you can open that log up in Event Viewer and see that a blue screen error has indeed occurred. The second option is automatically restart. I recommend deselecting this option
>
> **[1:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=92)** if you're serious about trying to get to the root cause of the blue screen error. And the reason for that is that if the system automatically restarts, it may restart before you have a chance to write down the specifics of the error. So I like to go ahead and clear this out just so that I can have the error on screen for as long as I need it, and I don't have to worry about the system rebooting on me. Because being able to write down the contents of a blue screen error is one thing, if you're expecting the error, but if the error happens totally unexpectedly you might not be prepared to do that. So preventing an automatic restart just gives you the time that you need to be able to document the error. The next thing that we have is right debugging information and you can see that this is set for an automatic memory dump, but we have a few other options. You can see that we have an option of none, which prevents a memory dump from being written at all. Then we have a small memory dump, which is essentially just a small memory summary and it's only 256 kilobytes in size, but a lot of times that small memory dump will give you the information that you need. Then we have a few other options, kernel memory dump, complete memory dump, automatic memory dump, and active memory dump. Now, the important thing that you need to know about this is that if you do a complete memory dump, then the file that's going to be created is going to be equal to the amount of memory that you've got installed in your system. So if for example, your system has 120 gigabytes of ram, well then your crash dump file is also going to be 128 gigabytes if you select the complete memory dump option. Now, kernel memory dump, automatic memory dump, and active memory dump can create files
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=186)** that are as large as the system's memory. But depending on what's going on on the system at the time of the crash, these files do tend to be a little bit smaller. So for our purposes, I'm just going to choose the small memory dump option. And then we can also choose the folder that the memory dump gets written to. By default, it's being written to system route mini dump. There's also an option to overwrite any existing files and you can disable the automatic deletion of memory dumps when this space is low. But these are the primary options that you need to configure in preparation for analyzing a crash dump file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **CLI Commands:** make (2)
> **Prerequisites:** configure (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing a crash dump](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=0)** - [Narrator] A crash dump can be helpful in helping you to resolve blue screen errors, but it's important to know how to analyze a crash dump file. The way that I like to do it is by using a free tool. The tool's from a company called Nirsoft. That's N-I-R-S-O-F-T, and it's called Blue Screen View. You can download it for free. So I've already downloaded this tool onto this computer, so let's go ahead and run it. I'm going to open up File Explorer. I'll go to 'This PC'. And I've created a folder on the C drive called Blue Screen View. And here we have the Blue Screen View program. And incidentally, you don't even have to install this. The program is self-contained, so you can simply copy the executable file to your computer. There's nothing special that you have to do. I'll go ahead and open up Blue Screen View, and I'll click 'yes'. And what I do, the most recent crash dump file is automatically loaded. So we can see that the crash dump file is selected. We can see when the crash time was. We can see the bug check string, the bug check code, and then a number of different parameters. And we can even see which driver caused the crash. In this case, it's 'ntoskernel.exe'. And if we wanted a bit more detailed information, or if we just wanted to make this information easier to read we could simply double click on this. And that gives us a popup that gives us all of the relevant information that can help us to troubleshoot the problem. Now, down at the bottom, you can see all of the processes that were running at the time that the crash happened. and 'ntoskernel' is at the very top of the list. So you can see what address range it was using,
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=94)** what its size was, what its timestamp is, the time string. And, depending on which process you're looking at, there may be some additional information such as a product name, or a file description, or file version, or a company, and the full path to the executable. Now, one of the things that I really like about this tool is that it makes it easy to research a problem. So even if you don't know what all of these memory addresses and sizes and all of that mean down at the bottom of the screen, this tool can still help you to figure out the cause of your blue screen error. Let me show you the easy way of doing that. What I'm going to do is select the dump file. And then I'm going to go to 'file', and you'll notice that we have all of these [[Google]] search options. So we can just say Google search bug check. I'll go ahead and click that. And so what happens is [[Windows]] opens up my web browser, and it automatically performs a Google search on the stop code that was generated as a result of the blue screen error. And so the very first result is how to fix 'CRITICAL_PROCESS_DIED' errors in Windows. So we're taken to some search results that can help us to solve the problems. So, I'm going to go ahead and close this. And once again, this tool is from a company called Nirsoft and it's called Blue Screen View. And if you need help finding that, I'll go ahead and open up 'help' and go to 'about', and here you can see the file version, when the program was made, and you can see a link to a place where you can go and download this. And again, this is a free utility. So that's how you analyze a crash dump file in [[Windows 10]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (3), [[Windows]] (2), [[Windows 10]] (1)
> **UI Navigation:** go to (3), click on (1), select the (1)
> **CLI Commands:** make (1)
> **Env Vars:** critical_process_died (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** install (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980&t=0)** - [Brien] Thank you for watching my course. I truly hope that you enjoyed learning about [[Windows]] troubleshooting as much as I enjoyed creating this course for you. If you'd like to learn more about Windows then I would encourage you to check out my other [[LinkedIn]] Learning courses. I've created several other Windows courses and I've also developed courses on key topics such as [[Cloud Computing]] in [[Microsoft Azure|Azure]] and AWS and [[Microsoft 365]]. I'm Brien Posey, thanks again for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[LinkedIn]] (1), [[Cloud Computing]] (1), [[Microsoft Azure|Azure]] (1), [[Microsoft 365]] (1)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [brien] (1)


## Instructor

- [[Brien Posey]]

## Skills Covered

- Troubleshooting
- Windows 10

## Path Context

### In [[Advance Your Skills as an IT Help Desk Specialist]]
← [[Windows 10- Manage and Maintain Windows 10]] | **3 of 11** | [[Learning Pc Maintenance And Performance]] →

## Appears In

- [[Advance Your Skills as an IT Help Desk Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Windows 10- Manage and Maintain Windows 10]] — Windows 10
- [[Windows 10 Configure And Support Core Services]] — Windows 10
- [[Customer Service- Problem-Solving and Troubleshooting]] — Troubleshooting
- [[Windows 10 for IT Support- Troubleshooting Basics]] — Windows 10
- [[Windows 10- Security]] — Windows 10

---

[↑ Back to top](#)