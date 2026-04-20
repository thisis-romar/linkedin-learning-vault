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
  - Advance Your Skills as an IT Help Desk Specialist
path_count: 1
tags:
  - course
  - topic/it-help-desk
  - skill/troubleshooting
  - skill/windows-10
status: not-started
created: 2026-04-20
---

![Windows 10 for IT Support: Advanced Troubleshooting](https://media.licdn.com/dms/image/v2/C4E0DAQEfVJiyg1aJNA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1664469296114?e=2147483647&amp;v=beta&amp;t=KEW_CfdggAnbHKSus_CFk6aZCJczI7UNYxILQ_YdjK0)

# Windows 10 for IT Support: Advanced Troubleshooting

> If you work in IT supporting Windows 10, you have an excellent mastery of the basics. In this course, instructor Brien Posey helps you take your understanding to the next level. Brien explains common causes of service failure and how to fix them. He also guides you through steps to take in network troubleshooting, then shows you how to troubleshoot logins. Brien goes over tools and techniques you 

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting) | 1h 54m | Advanced | 59K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Brien Posey]]

## Skills Covered

- Troubleshooting
- Windows 10

## Table of Contents

### Introduction

#### Learn advanced troubleshooting in Windows 10
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=0)** - [Brien] Windows 10 is easily one of the most stable and reliable versions of Windows ever created.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=5)** Even so, things can and sometimes do go wrong.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=7)** When that happens, it's important to know how to troubleshoot the problem, and that's what this course is all about.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=13)** In this LinkedIn Learning course, I'll show you some Windows 10 troubleshooting techniques that go beyond the basics.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=18)** In fact, the techniques that I'm going to be showing you are the same ones that I use in real life and are based on my experiences that I've gained over my last 30 years in IT.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=27)** I'm Brien Posey, a 21 time Microsoft MVP, author, and commercial astronaut candidate, and I'll be your instructor for this course.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/learn-advanced-troubleshooting-in-windows-10?u=76281980&t=34)** So if you're ready to learn how to troubleshoot Windows, then I welcome you to join me in this LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Warnings:** troubleshoot (2)
> **Env Vars:** mvp (1)
> **Speakers:** - [brien] (1)


### 1. Devices and Services

#### Checking for stopped services
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=0)** - [Instructor] The Windows operating system makes use of a number of system services that run behind the scenes.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=5)** These services handle all sorts of different tasks that are fundamental to the operating system.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=10)** For example, the encrypting file service depends on a system service.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=14)** Likewise, the DNS client depends on a system service, and there are any number of other functions that are tied to system services.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=21)** The flip side of this is that if one of these system services were to stop, then the functionality that's tied to that service will come to a grinding halt as well.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=29)** So sometimes when you have a malfunction within Windows, it could be because the underlying service that corresponds to that function has stopped.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=37)** So how do you take a look at these services, and how do you know if a critical service has stopped.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=42)** Well to do that, you'll use a built-in tool called the Service Control Manager.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=45)** To access the Service Control Manager, what you need to do is right-click on the Start button, and then go to Run and type "services.msc" and click OK.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=57)** And that's going to launch the Service Control Manager, which you can see right here.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=62)** So as you look at the screen, you can see that we have a lot of information.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=65)** Each one of these rows corresponds to an individual system service.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=69)** And for each one of these services, the console displays the service's name.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=73)** It displays a description of the service.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=76)** Then there's a column with the status.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=78)** And the status column indicates whether or not the service is running.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=82)** Now, a moment ago, I mentioned that it's really important for system services to be running, and yet as you look at this console, you'll notice that the status column only displays a status of running for some of the services, but not others.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=94)** For example, right here, we have a great big gap where these services aren't running.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=99)** Now why is that?
>
> **[1:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=100)** Well, it all has to do with the startup type.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=102)** If you look at the startup type, you'll notice that some services are set to start manually.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=107)** Other services are set to start automatically.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=110)** As a general rule, any service that has a startup type of automatic should display a status of running.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=116)** Now, there are some exceptions, because there are some situations where Windows will start a service automatically, and then realize that that service isn't really being used at the moment, and it will shut that service down, as a way of saving some system resources.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=129)** But this tends to be the exception rather than the rule.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=131)** By and large, services that start automatically should be running.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=135)** So what do you do if there's a service that's set to start automatically, and it's not running?
>
> **[2:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=140)** Well, what you can do is tell the Service Control Manager to start the service.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=144)** So let's take a look at how to do that.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=147)** So I'm not going to shut down a critical system service, because that might cause this virtual machine to crash and ruin the video that you're watching right now.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=154)** Instead, I want to take a look at a service that's set to start manually.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=158)** So for that, I'm going to use the Background Intelligent Transfer service.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=162)** That's a service that's used for downloading content from the internet.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=166)** So I'll go ahead and double-click on the service.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=169)** And you can see that the startup type is set to manual.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=171)** And then we have these buttons down here: Start, Stop, Pause, and Resume.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=174)** So if we wanted to start the service, we could simply click the Start button, and Windows will attempt to start the service.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=180)** And I'll click OK.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=182)** And now we can see that the service is running.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=184)** Likewise, if I want to stop the service, I can simply double-click on the service, and then click the Stop button, and Windows will stop the service.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=194)** Now, typically there's not going to be a need to change the startup type for a service, but if you want to change the startup type, you can use this drop down and choose a new startup type.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=203)** So if for example, I wanted this particular service to start automatically, then I could change the startup type to automatic and click OK.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=212)** And then you can see that the startup type has changed from manual to automatic.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=217)** And then if I wanted to start the service, I could either reboot the machine, and it should start automatically, because we've changed the startup type.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=223)** Or I could click the Start button, and Windows starts the service.
>
> **[3:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/checking-for-stopped-services?u=76281980&t=228)** So that's how you use the Service Control Manager to start system services.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (3), type, (2), function (1), let (1)
> **UI Navigation:** double-click (2), right-click (1), go to (1)
> **Analogies:** for example (3)
> **Env Vars:** dns (1)
> **Best Practices:** general rule (1)
> **Speakers:** - [instructor] (1)

#### Common causes of service failure
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=0)** - [Instructor] If you find that a system service has stopped, it's usually really easy to go ahead and just restart that service.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=6)** I showed you how to do that in the previous video.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=8)** However, you may occasionally find that the service fails to start even when you try to start it manually.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=13)** Now, when that happens there are two main things that you should check because those two things can prevent a service from starting.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=19)** So let's take a look.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=20)** I'm going to go into the service control manager and I'm going to double click on the network location service.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=25)** And I'm just picking this service at random.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=27)** It's part of the Windows operating system.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=30)** So here you can see the property sheet for the network location awareness service and this particular service is currently running.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=37)** But for the sake of this video, let's pretend for a moment that this service had stopped and that I can't get it started again.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=43)** The first thing that I would recommend checking in a situation like that is the log on tab.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=49)** Because services require permission in order to function as a part of the operating system.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=54)** So you can see that this particular service is tied to an account called network service and there's a password for that account.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=61)** Now, this is part of Windows.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=63)** I didn't create the network service account.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=65)** I didn't enter the password.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=66)** Windows did this automatically all by itself.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=69)** So if a service is a part of the Windows operating system, then typically you'll never have to mess with the account or the password.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=76)** Microsoft handles all of that for you.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=78)** So why am I showing you this?
>
> **[1:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=80)** Well, not all services are native to the Windows operating system.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=84)** Sometimes when you install an application, there are services that go along with that application that get installed as a part of the application, and those services aren't managed by Microsoft.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=94)** Windows doesn't really know anything about them, but just like a native service, those services that belong to that application require permissions in order to function.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=103)** So oftentimes they're going to be tied to a service account.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=106)** And if you happen to change the password that's associated with that service account, then the service may fail to start as a result of that password change.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=114)** So that's when you would go into the screen right here and you would type a new password for whatever service account that that service is using.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=121)** As an alternative, you could configure the service to log in as the local system account.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=127)** Now, log on problems for service used to be quite common.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=129)** They're a lot less common than they used to be but they do still happen.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=132)** The other thing that I would recommend checking if you're having problems getting a service to start is the service dependencies.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=138)** Because some services are more or less self-contained.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=141)** They communicate directly with the Windows operating system and don't really depend on anything else.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=146)** However, there are services that depend on other services in order to function.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=151)** So if one of those dependency services has stopped, then services that depend on the dependency services will also stop.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=157)** So let's take a look at what that looks like.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=160)** You'll notice on the dialogue box that's open that there's a tab called dependencies.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=164)** I'll go ahead and click on that tab now.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=167)** And when I do, you can see that this particular service, the network location awareness service, has several dependencies.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=173)** It depends on the DHCP client service, the network store interface service, the remote procedure call service, the TCP/IP Protocol Driver service and the Windows event log service.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=184)** So all of these services have to be running in order for the network location awareness service to start.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=191)** So if you're having trouble starting the network location awareness service, then what you might do is take a look at this dependency list and then check and make sure that all of these dependency services are running.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=201)** You may find that one of those has stopped.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=203)** You could then start that dependency service and then you should be able to start the network location awareness service.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=208)** And I'm just using the network location awareness service as an example.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=212)** The same basic principle applies to every service on here.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=216)** Now, just as a service may depend on other services, there can also be services that depend on the service that you're trying to start.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=222)** In this case, the network list service which you can see right here depends on the network location awareness service.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=229)** So if the network location awareness service stops, the network list service will also stop.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=234)** And one thing that I want to point out is that dependencies can be hierarchal.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=238)** Sometimes there are dependencies to dependencies.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=240)** That's the reason why you see these plus icons next to all of these services.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=245)** So if I were to click on these, we can see that the DHCP client, for example, depends on an ancillary function driver for Winsock and the network store interface service.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=256)** So if for example, the network store interface service were to stop, then the DHCP client would also malfunction, which would cause the network location awareness service to stop and it would also cause the network list service to stop because the network list service is tied to the network location awareness service.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=274)** So there is a complex relationship of interdependencies among some services.
>
> **[4:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-causes-of-service-failure?u=76281980&t=278)** So that's something to be aware of as you try to troubleshoot service startup problems in Windows 10.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), interface (3), require (2), self (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** dhcp (3), tcp (1)
> **Analogies:** for example (2), just like (1)
> **UI Navigation:** click on (2)
> **Definitions:** is a  (2)
> **Warnings:** be aware (1), troubleshoot (1)
> **Prerequisites:** install (1), configure (1)

#### Using PowerShell to start failed services
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=0)** - [Instructor] In one of the previous videos I mentioned that any system services that are configured to start automatically, as a general rule, should be running in order for Windows 10 to function properly.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=10)** But as you saw in that video, the service control manager list a huge number of services and it can be really tedious to go through that entire list and figure out which services need to be running.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=20)** Fortunately, there's a shortcut, you can use PowerShell to simplify the process.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=24)** So let's take a look at how this might work.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=26)** I'm going to go ahead and click on the start button and then I'll go to all apps, and then I'll go to the W section, and I'll click on Windows PowerShell, and then I'm going to right click on Windows PowerShell and go to More and then run as administrator.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=43)** And this is going to open an elevated PowerShell session.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=47)** Okay, so here we are in PowerShell and if you want to see a list of the system services, you can use the Get-Service commandlet.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=54)** I'll go ahead and type that now.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=56)** (keyboard clicks) And when I do that, you can see a list of the services.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=61)** And for each service you see whether it's running or stopped, you see the service name, and you see the service description.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=67)** But what if we wanted to see a list of services that were configured to start automatically but that aren't currently running?
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=74)** Well, to do that, we can use the Get-Service commandlet but we also have to use another commandlet.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=79)** So let me show you how this works.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=80)** I'm going to type Get-Service and then I'll use the pipe symbol.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=87)** Now if you're not familiar with the pipe symbol what it does is it takes the output from a PowerShell Commandlet and uses it as input for another commandlet.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=95)** So now we need to specify a second commandlet.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=98)** And the commandlet that I'm going to use is Where-Object.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=102)** (keyboard clicks) The Where-Object commandlet is a filtering commandlet.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=108)** So it takes the input that you're giving it, in this case the list of services, and it filters it by the criteria that you specify.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=116)** So, now we need to specify a filter.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=119)** So I'm going to type a bracket then I'm going to type $_.Status and then space -eq space and then inside of apostrophes, Stopped.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=140)** So what we're doing is we're looking for services where the service status is equal.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=144)** That's the -eq, it stands for equal.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=147)** So we're checking for services where the status is equal to Stopped.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=151)** But if I were to simply close this out by typing another bracket and press enter, we would get a list of all of the services that are stopped.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=159)** But that doesn't completely help us because we don't know which of these services are configured to start automatically.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=164)** So let's repeat the command, and this time I'm going to remove the closing bracket and then I'm going to type -and so I'm setting up another condition.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=176)** We're going to look to see which services are stopped and which services have a startup type of automatic.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=182)** So I'll type &_.StartType (keyboard clicks) and I'll set that equal by typing -eq to automatic
>
> **[3:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=203)** and then I'll give it a closing bracket.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=205)** And so now we should just see a list of the services that are stopped, but that have a startup type of automatic.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=211)** And you can see that we get a much shorter list.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=214)** So what if we wanted to try starting all of these services?
>
> **[3:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=217)** Well, we can do that very, very easily.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=219)** One way that we could do it is to type Start-Service and then the service name.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=223)** So if for example, I wanted to start the bit Service, I could type Start-Service BITS,
>
> **[3:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=234)** and now if I type Get-Service BITS, we can see that the service is running.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=243)** We can also stop a service in the same way.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=246)** So we could type Stop-Service BITS.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=252)** Now the BITS service should be stopped.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=256)** And indeed it is.
>
> **[4:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=257)** But what if we wanted to try starting all of the services that have a startup type of automatic, but that are currently stopped?
>
> **[4:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=263)** Well, what we could do in a situation like that is repeat the command that we used earlier and then use another pipe symbol and then Start-Service.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=274)** (keyboard clicks) This tells PowerShell that we want to start every service on the list.
>
> **[4:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=280)** I'll press enter.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=282)** And there are some services that PowerShell isn't going to be able to start, hence the red errors that we see.
>
> **[4:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=287)** But by and large, PowerShell was able to start these services.
>
> **[4:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=290)** So if I were to repeat this command and get rid of these start service portion, we can see that now there are only three services that have a startup type of automatic, but that are currently stopped, whereas before we had six.
>
> **[5:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=304)** So we were able to start some of those services that were on the list by using the command that you see right here.
>
> **[5:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-start-failed-services?u=76281980&t=309)** So that's how you use PowerShell to manage services in Windows 10.

> [!info]- Semantic Content
>
> **Tools:** powershell (10)
> **UI Navigation:** click on (3), go to (3)
> **Code Keywords:** let (3), function (1)
> **Env Vars:** bits (4)
> **Definitions:** is a  (1), stands for (1)
> **Cross-References:** as you saw (1)
> **Analogies:** for example (1)
> **Best Practices:** general rule (1)

#### Using Device Manager to find failed devices
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=0)** - [Instructor] If you're having trouble getting Windows 10 to work with a particular piece of hardware, there can be any number of underlying causes.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=6)** It could be that the hardware itself is bad and needs to be replaced, or it could be a problem with the device driver that Windows 10 uses to communicate with the hardware.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=15)** So, what do you do in a situation like that?
>
> **[0:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=18)** Well, Microsoft provides the Device Manager as a way of managing device drivers and helping to identify problems with those device drivers.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=26)** So, let's take a look.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=28)** What I'm going to do is right click on the start button, and then I'm going to go to Device Manager, and this will open the Device Manager console.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=36)** I'll go ahead and make this a little bigger.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=40)** Now, right now I'm connected to a physical machine, and all of the devices that are attached to that physical machine are working properly, so we don't have any problems here.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=48)** But what might we expect to see if there were a problem?
>
> **[0:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=51)** Well, if you look at the very top, we've got the computer name.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=54)** In this case, the computer is called Posey Surface Book 2 because I'm using a Microsoft Surface Book 2.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=59)** And then beneath that, we have all of these containers, and each one of these containers corresponds to a category of hardware.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=66)** So, for example, we have audio inputs and outputs, we have batteries, we have biometric devices, Bluetooth, cameras, and so on.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=74)** So, we have all of these different categories of hardware.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=76)** Now, if we've got a device that's malfunctioning, typically, what you would see is that the container containing the device would already be expanded and you would have a warning icon next to the device itself identifying that device as being problematic.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=90)** Now, we're not seeing that in this case because all of our hardware is working properly.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=94)** But let's go ahead and take a look at an individual device.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=97)** I'm going to go ahead and expand cameras, and when I do that, you can see the hardware within it.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=102)** This particular computer has one camera.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=105)** It's an Intel AVStream Camera 2500, and we can even double click on this device, and that will open up the device property sheet.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=113)** In this case, the device status indicates that the device is working properly, but if there were a problem with the device, we would see a different device status, typically, something telling us that there's a problem with the device driver or with the device itself.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-device-manager-to-find-failed-devices?u=76281980&t=127)** So that's how you would go about using the Device Manager to find a device that's having problems on a Windows 10 system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2)
> **UI Navigation:** click on (2), go to (1), open the (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Disabling failed devices
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=0)** - [Narrator] If you find that a particular device is causing problems with Windows 10, then you may occasionally decide to disable that device.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=7)** Maybe it's a device that isn't fully supported for use with Windows 10, and disabling that device is the only way of making the problem go away, and helping Windows to be more stable.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=16)** Or maybe it's a device that just isn't needed anymore, but can't be physically removed.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=20)** In any case, you can disable a device, whether it's working properly or not, if you want Windows to ignore that device's existence.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=28)** So let's take a look at how to use the Device Manager to disable the device.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=31)** It's a really simple process.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=33)** What I'm going to do is right click on the 'start' button.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=37)** And then I'm going to go to Device Manager.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=43)** Now, let's go ahead and expand one of the containers within the Device Manager to reveal the individual devices within it.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=50)** I'll expand the Camera's container.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=52)** So we have one camera.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=54)** And let's suppose that we want to disable the camera.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=56)** The way that we would do this is to right click on the camera, and then choose the 'disable device' command.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=63)** And when I do that, I see a message saying, "Disabling this device will cause it to stop functioning.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=67)** "Do you really want to disable it?"
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=69)** In this case, I'll say 'yes', and the device becomes disabled.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=75)** And you'll notice that the icon for the camera has changed, indicating that the camera has been disabled.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=81)** Now, if at a later time we decide we want to re-enable the camera, we can do that very easily.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=86)** All we have to do is right click on the camera, and then choose 'enable device'.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=95)** And now the camera is enabled.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=96)** And you'll notice that the camera icon has changed to indicate that the camera is now enabled.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/disabling-failed-devices?u=76281980&t=101)** So that's how you use the Device Manager to disable and then re-enable a device within Windows 10.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Updating device drivers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=0)** - [Instructor] Normally, Windows Update will keep your device drivers up to date.
>
> **[0:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=3)** However, if you're using third party device drivers, you may occasionally find that there's a need to manually update a device driver, particularly if you're having problems with a device, and the vendor that made the device has a new driver available.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=15)** Now sometimes these third party drivers have their own installer, and you can just double-click on the installer, and it runs an MSI file and installs the updated device drivers.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=23)** That's a fairly common thing, but that particular functionality isn't available for every third party device driver.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=30)** So in those types of situations, you may be able to use the Device Manager to update a device driver.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=36)** So let's take a look at how that works.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=38)** So what I'm going to do is right-click on the Start button, and I'm going to go to Device Manager, and then I'm going to expand a device, I'll use the camera, and then I can see the camera that's attached to the system.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=55)** In this case, it's an Intel AVStream Camera 2500.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=59)** So what would we do if we wanted to update the device driver that's associated with this camera?
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=64)** Well, the way that we would do that is to right-click on the camera and then choose the update driver command from the shortcut menu.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=72)** And this is going to launch the Update Drivers Wizard.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=75)** So now we see a prompt asking us, "How do you want to search for the drivers?"
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=78)** We can search automatically for the drivers or we can browse the computer for drivers.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=83)** So if you've already gone to the vendor's website and you've downloaded a new device driver, you would use the "Browse my computer for drivers" option.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=89)** And then you would simply specify the driver that you had downloaded.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=93)** In this case, the camera's built in to the laptop.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=95)** It's provided by Microsoft.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=96)** I don't have a third party driver for it, so I'm just going to tell Windows to search automatically for the drivers to see if a newer driver is available.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=104)** So I'm going to click on "Search automatically for drivers" and I get a message indicating that the best drivers for the device are already installed.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=113)** But we also have an option right here to search for updated drivers on Windows Update.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=117)** So even though there's no updated driver that's already on the system and available, and there are no updates that Windows currently knows about, we can use the Windows Update to find out if a newer driver is available.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=128)** So let's go ahead and do that.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=129)** I'm going to click on the "Search for updated drivers on Windows Update" button, and I'm taken into Windows Update.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=138)** And you can see that there are a number of updates to be installed.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=141)** So we have some Windows updates and we have a display driver update right here, we have some firmware updates, and there are some other hardware updates, as well.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=150)** For example, down here by my mouse pointer, we have a driver for Bluetooth.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=154)** And then we have a new network driver.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=156)** So there are lots and lots of updates that are available for this machine, and some of those updates are device drivers.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/updating-device-drivers?u=76281980&t=162)** So that's how you would go about updating the device driver for a hardware component in Windows 10, using the Device Manager.

> [!info]- Semantic Content
>
> **UI Navigation:** right-click (2), click on (2), double-click (1), go to (1)
> **Code Keywords:** let (2), case, (2)
> **CLI Commands:** find (2)
> **Env Vars:** msi (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Network Troubleshooting

#### Verifying IP address assignments
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=0)** - [Instructor] If you're having networking problems with a Windows 10 machine, one of the first things that you should do is to check the machine's IP address assignment.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=8)** So let's take a look at how to do that.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=10)** I'm going to begin by taking a look at the IP address configuration on this machine.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=14)** So what I'm going to do is right-click on the Start button.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=19)** I'll go to Run and type control and click OK.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=25)** And this is going to open the legacy control panel.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=27)** I'll click Network and Internet, and then Network and Sharing Center, and then Change adapter settings.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=35)** So as you can see, this particular machine has one network connection.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=39)** So I'm going to right-click on the network adapter and I'll go to Properties.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=43)** And then this is going to display the adapter's properties.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=46)** So now we need to look at how IP address assignments are being made on this network adapter.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=51)** So I'm going to choose Internet Protocol Version Four, and then click Properties.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=56)** And when I do that, you can see that this machine is configured to obtain an IP address automatically and to obtain a DNS server address automatically.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=64)** So we're not assigning static IP addresses to this machine, it's getting its addresses from a DHCP server.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=70)** So now we need to verify that it actually is acquiring IP addresses.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=74)** Let me go ahead and cancel out of this.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=80)** So the next thing that I want to do is open a command prompt window and to do that, I'm going to click on the Start button and I'll go to the W section.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=92)** And then I'm going to expand Windows System and click on Command Prompt, and this opens up a Command Prompt window.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=99)** So the command that we use to find out the machine's IP address assignment is ipconfig.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=104)** I'll go ahead and type that.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=108)** And when I do, you can see that the machine's IPV4 address is 172.30.214.171 and it has a gateway of 172.30.208.1 So that's great, the machine is getting an IP address, but what about a DNS assignment?
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=125)** Well, the way that we find out what the machine is using as a DNS server is to repeat the ipconfig command, but this time we add a space and then slash and then the word all.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=138)** Now when I press Enter, I get information that is a lot more detailed.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=143)** So we're starting to see some IPV6 information, but more importantly, we can see the IP address of the DHCP server that issued the address to this machine.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=153)** We can also see the DNS server that this machine is using and that DNS server address is right here, 172.30.208.1.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=163)** So we can see very detailed information about this machine's IP address.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=167)** And incidentally, if this computer had multiple network adapters installed, then the ipconfig command would display information about each one of those adapters individually.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verifying-ip-address-assignments?u=76281980&t=177)** So that's how you use the Command Prompt window to verify IP address assignments in Windows 10.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5), dhcp (2), ipv4 (1), ipv6 (1)
> **UI Navigation:** go to (3), right-click (2), click on (2), open the (1)
> **Code Keywords:** let (2), static (1), this. (1)
> **Tools:** command prompt (4)
> **Versions:** 172.30.208 (2), 172.30.214 (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### The ping test
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=0)** - [Instructor] One of the easiest ways that you can test network connectivity in Windows 10 is to use the ping command, so let's take a look at how that might work.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=8)** I'm going to begin by opening a command prompt window.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=10)** So I'll click on the Start button, and then from there I'll go to all apps.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=16)** Next, I'll go to the W section, I'll expand Windows System, and I'll click on Command Prompt, and this opens a command prompt window.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=26)** Now, the way that the ping command works is that you type ping followed by the IP address of the system that you're wanting to test connectivity to.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=34)** So for example, this particular machine has an IP address of 147.100.100.60.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=40)** As a matter of fact, if I type ipconfig, you can see this machine's address.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=47)** Now, let's ping another machine on the network to see if we can communicate with it.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=51)** I've got another machine that has an IP address of 147.100.100.161.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=57)** So I'll type ping 147.100.100.161.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=69)** And when I do that, you'll notice that there's a bit of a delay, and then we're going to see an error message saying request timed out.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=75)** And the ping command actually sends four different packets to the destination address, so we're going to get this error message four times.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=81)** Now, does this mean that network connectivity is broken?
>
> **[1:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=84)** Not necessarily.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=86)** The reason for that is that when we use the ping command, we're actually sending ICMP packets to the destination address and some firewalls are configured to block ICMP packets.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=96)** Let me show you what I mean.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=99)** So right now we're on the machine that has the 161 address.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=103)** And as a matter of fact, if I open a command prompt window and I type ipconfig, you can see this machine's address.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=117)** Now, let's go ahead and disable the Windows firewall.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=122)** I'm going to right-click on the Start button and go to Run.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=125)** I'll type control and click OK.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=128)** And from there, I'm going to go to System and Security, and then I'll click on Windows Defender Firewall, and then I'll click on turn Windows Defender Firewall on or off.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=140)** And I'll go ahead and turn off the firewall.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=142)** And incidentally, this isn't something that I recommend you do.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=145)** I'm just doing this for demonstration purposes.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=147)** I'll click OK.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=149)** So the firewall is off.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=151)** Now let me switch back over to my other machine and we'll repeat the ping command.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=158)** Now we get a reply from the destination machine because the firewall is no longer blocking ICMP packets.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=164)** So the ping command can be used to test connectivity, but only so long as a firewall isn't standing in the way.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=169)** So we verified that this machine can communicate with another machine on the network.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=174)** What other things might we do with the ping command?
>
> **[2:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=176)** Well, if you verified that communication works within your network, then the next logical step would be to ping your default gateway and see if the gateway router responds.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=184)** So I'll go ahead and do that now.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=186)** My default gateway is 147.100.100.100, so let's ping that.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=193)** I'll press Enter, and we get a reply from the default gateway.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=197)** So we can communicate as far across our network as the default gateway.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=201)** Now let's find out if we can ping an internet resource.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=204)** Now, not all websites are pingable, but I'll go ahead and ping my own site, and that's [brianposey.com](https://brianposey.com).
>
> **[3:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=213)** I'll press Enter, and we get a reply from [brianposey.com](https://brianposey.com).
>
> **[3:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=217)** And you'll notice that the IP address for that site is being returned by the ping along with information about how long the ping took.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-ping-test?u=76281980&t=224)** So that's just a sample of how you might use the ping command to test connectivity on a Windows 10 machine.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (4), right-click (1)
> **Code Keywords:** let (7), switch (1)
> **Versions:** 147.100.100 (4)
> **Tools:** command prompt (4)
> **Env Vars:** icmp (3)
> **URLs:** [brianposey.com](https://brianposey.com) (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)

#### Testing DNS name resolution
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=0)** - [Instructor] Although you can use the ping command to test basic network connectivity, you can also use it to make sure that DNS name resolution is working properly, so let's take a look at how that works.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=9)** I'm going to begin by clicking on the Start button and I'll go to all apps.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=16)** I'll go to the W section of the Start menu.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=20)** I'll expand Windows System.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=22)** And I'll click on Command Prompt to open a command prompt window.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=25)** So let's start with just doing a basic connectivity test.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=28)** I'm going to type ping followed by the IP address of another system on my network, and the IP address that I'm going to use is 147.100.100.161.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=39)** So let's go ahead and do that.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=42)** I'll press Enter, and I get a reply from that system.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=45)** Now, I also happen to know that that system has a computer name of win2 and it's joined to a domain named [poseylab.com](https://poseylab.com).
>
> **[0:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=53)** So we can test DNS name resolution by pinging the fully qualified domain name of that system.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=60)** So I'll type ping win2, which is the computer name, dot [poseylab.com](https://poseylab.com), and I'll press Enter, and I get a result.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=76)** And it's important to make sure that the IP address that's returned in the result is the same as the IP address that you know to belong to that system.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=83)** So initially I pinged 147.100.100.161, and when I pinged the same system by its fully qualified domain name I got the same IP address returned in the reply, which is exactly what we want to see.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=96)** So DNS name resolution is indeed working on this system.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=99)** Now, another thing that you can do if you want is you can ping the system just based on its computer name alone.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=105)** So I'll go ahead and do that.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=109)** And I'll press Enter.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=110)** And what we see in the results is the fully qualified domain name.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=114)** If you look right here, you can see win2.[poseylab.com](https://poseylab.com).
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=117)** So Windows was able to resolve the system's fully qualified domain name and it's IP address just by pinging the computer name.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=125)** Now, if DNS name resolution weren't working for this and I tried to ping the system just based on its computer name, assuming that it's on the same network that I'm on and assuming that it can ping it by computer name, what we would typically expect to see is a result where maybe the IPv6 address was returned or something like that.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=143)** But we probably wouldn't expect to see the fully qualified domain name displayed in the ping results.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/testing-dns-name-resolution?u=76281980&t=148)** So that's how you can use the ping command to test DNS name resolution.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5)
> **Code Keywords:** let (3)
> **URLs:** [poseylab.com](https://poseylab.com) (3)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** make (2)
> **Versions:** 147.100.100 (2)
> **Tools:** command prompt (2)
> **Definitions:** is a  (1)

#### Fixing common DNS issues
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=0)** - [Instructor] In the previous video, I explained that you can use the ping command to confirm that DNS name resolution is working on your network.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=8)** Every once in a while though, you might find that you have trouble resolving a particular computer's name even though everything seems to be correct, your computer is configured to use the right DNS server the computer who's named or trying to resolve is using the same DNS server.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=22)** Everything appears to be correct and yet name resolution isn't working.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=25)** So why might that be?
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=27)** Well, it all comes down to something called the DNS resolver cache.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=30)** Let me explain, imagine what would happen if every time your computer needed to talk to another computer on your network it had to contact a DNS server first and resolve that computer's name even if it had just talked to that computer a moment ago.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=45)** Well, that type of activity would put a huge load on your DNS server, and it would also slow down every system on your network just because of all the extra overhead associated with contacting the DNS server over every little thing.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=57)** So thankfully, that's not the way that Windows works.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=60)** When you resolve a computer name, that resolved name is written to something called the DNS resolver cache so that the next time you have to communicate with that computer, Windows doesn't have to perform yet another DNS name resolution instead it can just look to the cash and find the entry for that computer and do the name resolution that way.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=77)** Now, the reason why that can sometimes lead to problems is because imagine what would happen if a computer on your network's IP address changed.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=85)** So if the IP address changes, the DNS record for that computer on the DNS server will also change to reflect the new IP address.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=93)** But if a computer that's trying to communicate with that machine has that machine's former name and IP address in its DNS resolver cache, then it will resolve the computer name to the wrong IP address.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=104)** So in a situation like that where you're trying to communicate with a computer on your network and DNS name resolution just isn't working, and you suspect that maybe that machine's IP address has changed, what you need to do is flush the DNS resolver cache.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=118)** And this is something that's really simple to do.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=121)** So let's take a look at how to do that.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=123)** I'm going to click on the start button and then from there I'm going to go to all apps, I'll go to the W section, I'll expand Windows system and we need elevated permissions for this so I'm going to right click on the command prompt and I'll go to more and then run as administrator.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=142)** And this is going to open an elevated command prompt window when I click yes.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=148)** So you can see that we're in a command prompt window and the Word administrator up here indicates that we're in an elevated command prompt window so we have administrative permissions and what we need to do is clear out the DNS resolver cache.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=159)** And the way that we do that is by using the IP config command and if this sounds familiar, it's because the IP config command is the command that's used to verify your IP address.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=171)** If I were to just press enter right now I would see this machine's IP address.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=174)** But to clear the DNS resolver cache what we can do is type IP config space slash flush dns.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=186)** And I'll press enter and I get a message saying that I have successfully flushed the DNS resolver cache.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=192)** And so what that does is the next time you try to resolve the name of that computer that you're having trouble with, rather than using a cashed IP address and fully qualified domain name Windows is going to be forced to contact the DNS server where it will get the most recent DNS record.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=208)** Now, you don't have to do this every time an IP address changes because entries in the DNS resolver cache are relatively short lived so cache entries will eventually expire and be replaced by more current data.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=220)** So the problem will eventually go away on its own when a computer on your network changes IP addresses.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-common-dns-issues?u=76281980&t=225)** But if you need to fix the problem quickly this is how you do it.

> [!info]- Semantic Content
>
> **Env Vars:** dns (20)
> **UI Navigation:** go to (3), click on (2)
> **Tools:** command prompt (4)
> **CLI Commands:** find (2)
> **Code Keywords:** let (2)
> **Analogies:** imagine (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Using the network troubleshooter
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=0)** - [Instructor] If you're experiencing network problems with a Windows 10 machine and you've thus far been unable to resolve the problems, then one option is to run the network troubleshooter.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=9)** The network troubleshooter is a mechanism that's built into Windows 10 and it diagnosis common network problems and automatically resolves them.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=16)** So let's take a look at how that might work.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=18)** What I'm going to do is right click on the start button and I'll go to Run and I'll type control.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=27)** (keyboard clicks) And so now I'm ta into the legacy control panel.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=32)** And next I'm going to click on the control panel search box and I'm going to type the word troubleshooting.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=40)** And you can see that I have a result right here.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=42)** I'll click on Troubleshooting.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=45)** And we have several different troubleshooting options and we have one right here for Network and Internet.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=50)** I'll go ahead and click on that now.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=53)** And so now I see a list of potential options.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=56)** So I have an option to find and fix problems with connecting to the internet or to websites.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=61)** There's an option for finding problems with Network Adapters.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=64)** There's another option for diagnosing Incoming Connections.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=67)** And then there's an option for diagnosing a Connection to a Workplace using DirectAccess.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=73)** I'll go ahead and use the internet connections option.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=75)** So I'll click on Internet Connections and then I see a quick summary of what's about to happen.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=81)** I'll click next.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=83)** And Windows begins trying to detect any problems that may exist.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=87)** So now I see a dialogue box and it says Please select the issue Windows should troubleshoot, and I'm going to tell Windows to troubleshoot my connection to the internet.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=94)** And incidentally, this particular machine isn't having any problems, but I'll click troubleshoot my connection to the internet and Windows perform some tests and begins looking for my problem.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=105)** And I get a message back saying that troubleshooting couldn't identify the problem, which isn't surprising because this machine doesn't have a problem.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=111)** But if a problem were detected, the troubleshooter would tell you what the problem was and it would either fix the problem or it would tell you how to fix the problem.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-network-troubleshooter?u=76281980&t=118)** So that's how you use a troubleshoot to diagnose problems with your network.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (1), select the (1)
> **Warnings:** troubleshoot (4)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Fixing Wi-Fi connectivity
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=0)** - [Instructor] If your Windows 10 machine is having trouble with Wi-Fi, then there are several things that you can do to troubleshoot the problem.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=7)** One of the first things that I recommend doing is just opening up the task bar and then right-clicking on the network icon, and then we have a troubleshoot problems link right here.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=15)** If I open that, then Windows begins detecting problems with the network adapter, and you can pick and choose which adapter you want to troubleshoot.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=23)** Now, I'm not actually going to complete this wizard because I'll lose my connection to this machine if I do that, and it will run the video.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=30)** But just know that in a situation like this, what you would want to do is to choose your Wi-Fi adapter, which is right here, and then click Next, and then Windows will begin troubleshooting the problem.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=40)** But there are some other things that you can do in addition to that.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=43)** I'll go ahead and cancel out of here.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=46)** Another thing that you can do is check the device driver to make sure that your wireless network adapter is working properly.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=52)** And the way that you would do that is by right-clicking on the start button and then go to System and then click Device Manager.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=63)** And then from there, you would want to expand Network Adapters And then look for your wireless network adapter.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=70)** This one is mine, but yours may have a different name.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=72)** So what you would do now is double click on the wireless network adapter and check the device status.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=78)** In this case, you can see that the device is working properly.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=81)** I'll go ahead and cancel out of this.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=85)** Another thing that I recommend doing is making sure that a Static IP address hasn't been assigned to the wireless network adapter.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=91)** Because if you assign a Static IP address to a wireless adapter, a lot of times, that will cause communications problems.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=98)** So the way that you would check that is by right-clicking on the start button, and then go to Run and type Control and click Okay.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=107)** And this is going to open the legacy Control Panel go to Network and Internet.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=113)** Then from there, go to Network and Sharing Center, and then click on Change adapter settings.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=122)** Now locate your wireless network adapter, which mine is this one right here.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=126)** Right-click on it, and go to Properties.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=130)** This is going to bring up the connections property sheet.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=133)** Now, locate Internet Protocol Version 4, which you can see right here, and click Properties.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=137)** And make sure that it's set to Obtain an IP address automatically.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=141)** While you're at, it's also a good idea to make sure that the adapters configured to obtain a DNS server address automatically.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=148)** I'll go ahead and cancel out of that.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=152)** So those are the basic things that you need to do to troubleshoot a problem with Wi-Fi.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=156)** But if none of that works, then what I would recommend doing is trying to connect to a different wireless access point than the one you've been attempting to connect to.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=164)** And the reason for that is simple.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=166)** It could be that you're just having a simple problem with that specific network.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=170)** For example, maybe you've got a bad set of credentials or what I've been noticing happening quite a bit lately is wireless access points that are depleting their IP address pool.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=180)** Because when you connect to a wireless access point, typically, that wireless access point acts as a DHCP server and it assigns an IP address to the machine that's connecting.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=190)** But because of the way that DHCP leases work, it's easy for a wireless access point to run out of IP addresses at least for a period of time.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=199)** And when that happens, no machine is going to be able to connect to it, even if that machine is configured correctly.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=205)** So you might try connecting to a different wireless network just to see if the connection's working.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=209)** Then that will tell you if the problem is on your end or if it's a problem with the wireless network itself.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-wi-fi-connectivity?u=76281980&t=215)** So those are just a few strategies for solving Wi-Fi connectivity problems in Windows 10.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), open the (1), click on (1), right-click (1)
> **Code Keywords:** static (2), this, (1), case, (1), this. (1)
> **Warnings:** troubleshoot (4)
> **CLI Commands:** make (3)
> **Env Vars:** dhcp (2), dns (1)
> **Versions:** version 4 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Network troubleshooting when Hyper-V is installed
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=0)** - [Instructor] The professional edition of Windows 10 comes with Hyper-V which allows you to run virtual machines on a Windows 10 desktop.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=7)** Now, from a troubleshooting standpoint the thing that you need to know is that when Hyper-V is enabled it changes the way that the Windows 10 network stack works.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=14)** So let's take a look at what these changes look like and what they mean to you from a troubleshooting perspective.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=19)** So what I'm going to do is go ahead and right click on the start button and I'm going to go to run and type control and click okay.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=29)** Now, the machine that I'm on right now does not have Hyper-V installed.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=32)** This is just a basic Windows 10 desktop.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=35)** So I'm going to click on network and internet.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=38)** From there, I'll go to Network and Sharing Center and then I'll click on change adapter settings.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=46)** So as you can see, I've got one network adapter.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=49)** Now if you look at the name of the network adapter, Microsoft Hyper-V Network Adapter, the reason for this name is that you're actually looking at a virtual machine right now.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=57)** So I don't have a physical network adapter, I've only got a virtual network adapter, but Hyper-V is not installed inside of this virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=64)** So for the purposes of what we're looking at right now just pretend that this is a physical network adapter.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=70)** So we've got one network adapter, I'll right click on it and go to properties and take a look at the various items that are enabled.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=78)** We have Client for Microsoft Networks is enabled, File and Printer sharing for Microsoft Networks is enabled as is QoS Packet Scheduler, Internet Protocol Version 4, that's TCP IPV4, and then Microsoft LLDP Protocol Driver and Internet Protocol version six.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=95)** So we've got all of these services that are enabled for this one network adapter.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=99)** Now with that said, I'm going to click on Internet Protocol version four and click properties, and you can see that there is an IP address that's assigned to this particular adapter.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=108)** And this is just an address that is specific to my own network.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=112)** I'm going to go ahead and cancel out of this.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=114)** And now I want to install Hyper-V so I'm going to drop back to the root of the control panel and then I'm going to go to programs.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=126)** And then I'll go to turn Windows feature on or off.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=130)** And this brings up a list of the various features that are available in Windows 10.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=134)** I'm going to select Hyper-V and I'll click OK.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=142)** And so now Hyper-V is being installed and I'm prompted to reboot the computer.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=147)** So I'm going to pause the video for just a second while this machine reboots and then we'll take a look at the changes that were made to the networking stack.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=155)** Okay, so Hyper-V is installed, and while the video was paused, I created a Hyper-V virtual switch.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=161)** I had to do that while the video was paused because the process of creating the virtual switch would've disrupted the recording.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=167)** But let me show you what I did.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=170)** I'll type Hyper-V in the search box and I'll open the Hyper-V manager.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=179)** And then what you would typically do is go to the virtual switch manager and choose the new virtual switch option and then click create virtual switch.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=186)** And then there is a screen that appears after that that asks you a couple of specifics.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=190)** That's the basic process.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=192)** But you can see the virtual switch that I created right here.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=194)** It's called My Virtual Switch, and you'll note that this is an external virtual switch.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=198)** And the reason why that's important is because an external virtual switch latches on to your physical network adapter.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=204)** So let me cancel out of this and I'm going to open control panel.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=214)** And just as before, I'm going to go to Network and Internet, Network and Sharing Center, and Change adapter settings.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=223)** Now, as you'll recall earlier I had a single network adapter, but now I've got three.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=227)** So let me show you what's going on here.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=229)** First, we have vEthernet default switch.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=232)** So when I created the virtual switch, the Windows operating system actually sees that as an extra network adapter.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=237)** So if I go and right click on this and go to properties, you can see that all of the basic components are enabled for this virtual switch.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=245)** And if I select TCP IP, you can see that the address that's assigned to that is 172 28 0 1, which is different than the IP address that this machine was previously using.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=256)** So I'll cancel out of this.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=258)** Then the next network adapter is this one right here.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=261)** This is the Hyper-V network adapter.
>
> **[4:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=263)** I'll right-click and click properties.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=267)** So this is the one that corresponds to the physical network adapter in the system.
>
> **[4:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=270)** Now remember, I'm using nested Hyper-V, I'm running Hyper-V inside of a virtual machine which is why this is called a Hyper-V network adapter.
>
> **[4:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=278)** But normally in an environment where you've got a physical network adapter, this particular property sheet would be bound to your physical network adapter.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=286)** But the interesting thing here is that notice all of these check boxes have been cleared, so we don't have the client for Microsoft Networks enabled, we don't have TCP IP enabled.
>
> **[4:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=295)** So this needs to stay exactly the way that it is in order for networking to work properly.
>
> **[5:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=300)** The only thing that should be enabled is the Microsoft LLDP protocol driver.
>
> **[5:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=304)** And if I scroll down, you can see that at the very bottom we've got the Hyper-V extensible virtual switch enabled.
>
> **[5:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=310)** But those are the only two options that should be enabled.
>
> **[5:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=312)** Let me cancel out of this.
>
> **[5:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=314)** So then we have this third network adapter and this is vEthernet.
>
> **[5:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=318)** And you'll notice that it says My Virtual Switch and if I right click on this and go to properties, you can see that all of the normal things are enabled and if I look at TCP IP, now we have the IP address that had previously been assigned to my machine.
>
> **[5:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=332)** So what's going on here, when you create a virtual switch in Hyper-V, that virtual switch gets bound to a physical network adaptor.
>
> **[5:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=340)** Because the virtual switch is using that physical network adapter, Windows can't use it itself, so it creates a virtual network adapter and assigns your normal IP address to that virtual network adapter.
>
> **[5:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=351)** So that virtual network adapter connects to the virtual switch which in turn connects to the physical network adapter.
>
> **[5:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=356)** So that's why this says vEthernet.
>
> **[5:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=359)** This is a virtual network adapter connected to My Virtual Switch, which is the name of the virtual switch that I created through Hyper-V.
>
> **[6:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=366)** So all of this is to say that now that Hyper-V is installed and I have an external virtual switch enabled, now my physical network adapter can't be used in the usual way.
>
> **[6:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=376)** Instead, all of my parent machines traffic has to go through this virtual network adapter.
>
> **[6:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/network-troubleshooting-when-hyper-v-is-installed?u=76281980&t=381)** So that's just something really important to keep in mind if you're doing troubleshooting on a Windows 10 machine that has Hyper-V enabled.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (21), let (5), this. (3)
> **UI Navigation:** go to (7), click on (6), open the (1), right-click (1), scroll down (1)
> **Env Vars:** tcp (4), lldp (2), ipv4 (1)
> **Definitions:** is a  (3), is an  (2), is called (1)
> **Code Identifiers:** vethernet (3)
> **Versions:** version 4 (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)

#### Hyper-V virtual machine connectivity
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=0)** - [Instructor] If you've installed HyperV on Windows 10 and you're having problems with your virtual machines being able to access the network then the problem is almost certainly related to your virtual switch.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=10)** So let's take a look at why this happens.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=12)** What I'm going to do is to create a new virtual machine.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=15)** So I'm going to click new and then virtual machine and then I'll click next.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=20)** I'm prompted to enter a name for the virtual machine.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=22)** I'll call this VM1.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=28)** I'll click next.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=30)** I'll choose my virtual machine generation, I'll just go with a generation two virtual machine.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=35)** And I'll assign one gigabyte for the startup memory and click next.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=40)** Now I'm taken to the configure networking screen.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=42)** Now by default, this virtual machine has no connectivity to the network whatsoever, so that may be one of the problems that you'll run into.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=50)** What I'm going to do instead is click this drop down and I'm going to choose the default switch.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=55)** I'll click next.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=57)** Now I'm taken to a screen that asks me to configure the virtual hard disk.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=61)** I'll click next.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=66)** Now I'm taken to the screen for installing the operating system on the virtual machine.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=70)** I'll just choose to install an operating system later.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=72)** I'll click next.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=74)** Then I'm taken to the summary screen, and I'll click finish and the new virtual machine is created.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=79)** Now, as you'll recall, I configured this virtual machine to use the default virtual switch.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=84)** And if I right click on the virtual machine and go to settings, and then I choose network adapter you can see that it's connected to the default switch.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=94)** Now as it is right now, this particular virtual machine, even though I'm using the default switch, would not be able to access the network.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=101)** Let me show you why that's the case.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=102)** I'll cancel out of this and I'm going to go to the virtual switch manager.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=107)** And we currently have two virtual switches.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=108)** We have the default switch, and we have my virtual switch.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=113)** Now, when you create a new virtual switch you're prompted to choose what type of switch you want to create.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=118)** Let me show you what that looks like.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=119)** I'll click on new virtual network switch and then I'm prompted as to the type of switch I want to create.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=125)** I can create an external, an internal, or a private virtual switch.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=129)** Now, of the three virtual switch types, only an external virtual switch is able to access the network.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=135)** With internal and private virtual switches the virtual machines can talk to each other but they can't talk to the outside world.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=141)** And with an internal virtual switch a virtual machine can also talk to the parent operating system but it can't communicate with the external network.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=149)** So only an external virtual switch will give you that network connectivity that you presumably need.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=154)** So having said that, let's go back to the default switch and you can see that the default switch is configured for the internal network.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=162)** So this will give you access to other virtual machines and it will give you access to the parent operating system, but it won't give you access to the physical network.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=170)** So that's why a virtual machine that's connected to the default switch won't give you that true network access.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=176)** So you won't be able to access the internet, you won't be able to access other machines on your network.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=180)** So if you need that physical network access, then what you'll have to do is to create an external virtual switch and then connect your virtual machine to the external virtual switch.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=189)** And it just so happens that I've got an external virtual switch created.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=193)** So I can configure this machine to use it.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=195)** I can right click on the virtual machine and go to settings and then I can click on network adapter and then I can set the virtual switch to my virtual switch, which is an external virtual switch and click okay.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=207)** And now that virtual machine would be able to access the network.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/hyper-v-virtual-machine-connectivity?u=76281980&t=210)** So that's why virtual machines running on Windows 10 HyperV may lack connectivity to the physical network.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (26), let (4), private (2), default, (1), case. (1)
> **UI Navigation:** click on (4), go to (3), switch to (1)
> **Prerequisites:** configure (3), install (1)
> **Env Vars:** vm1 (1)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 3. Troubleshooting Logins

#### Fixing a computer account
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=0)** - [Instructor] Occasionally, you may find that problems with a computer account can prevent a Windows 10 machine from being able to connect to an active-directory domain.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=8)** Let me show you what I mean.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=10)** What you can see right here is that I'm connected to a Windows server running Hyper-V, and I've got a couple of virtual machines up as evidenced by the RDP session icon, which you can see right here.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=19)** So right now, I'm looking at a Windows 10 desktop running in this virtual machine that is domain joined.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=25)** So let's go ahead and log into the domain.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=30)** So I'm prompted for my username and password.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=32)** I'm going to click on "Other user", and I'll enter my domain name, /, and then a username.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=44)** And then I'll type my password, and I get a message saying that the security database on the server does not have a computer account for this workstation trust relationship.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=55)** But this machine is domain joined, so what's going on?
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=59)** Well, what tends to happen is that if you have a domain-joined Windows 10 machine and you have a problem with that machine, so you decide to restore a backup, well, that backup may have a mismatched relationship with what's in the active-directory domain.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=74)** Because, as I'm sure you're aware, user accounts have passwords associated with them.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=78)** What a lot of people don't realize, though, is that computer accounts also have a password associated with them, and that computer-account password is something that's maintained by Windows.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=87)** As an administrator, you never have to touch it.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=90)** But that password gets changed periodically.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=93)** So if you restore a Windows 10 backup of a domain-joined machine, there's a chance that you reverted to an earlier point in time, where there was a different password.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=102)** And so, now, you have an old password that's associated with Windows 10, but your active-directory domain still has the current password.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=110)** So let's take a look at how to fix this problem.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=112)** From a Windows 10 perspective, the first thing that we have to do is get rid of the domain membership.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=117)** So I'm going to go ahead and log in with a local user account.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=126)** So now I'm logged into Windows, and I'm going to click Start and go to Settings, and then I'm going to go to System, and then About.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=140)** And then, I'll go to "Rename this PC, advanced".
>
> **[2:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=143)** I'll click Change, and I'll make this machine a member of a work group.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=152)** I'll click OK, and then I'll click OK.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=159)** I'm prompted for a username and password.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=165)** And so, now this machine has been removed from the domain, and it's now a member of a work group instead.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=170)** I'll click, OK, I'll click OK, I'll close this, and I'll click Restart.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=176)** So while that computer's restarting, there's something that we need to do on the active-directory side.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=181)** So let me switch over to my other virtual machine.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=183)** This virtual machine is my active directory domain controller.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=186)** And as you can see, I've got the Active Directory Users and Computers console open, and I've got the Computers container selected.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=193)** So here's my account for this machine.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=195)** What I need to do is right click on the account, and then click on Reset Account.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=200)** And I'm prompted, "Are you sure you want to reset this computer account?"
>
> **[3:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=203)** I'll click Yes, and that reset the account.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=207)** Now, technically I could just delete the account and then have Windows recreate it, but if I were to do that, then I would lose all of the computer-specific settings that go along with this account, so it's better to just reset it if you have that option.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=218)** So let me go ahead and close out this virtual machine, and now I'm back on my Windows 10 machine.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=226)** I'll log in.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=231)** And so, now that we're logged in, the next thing that we have to do is join the active-directory domain, so let's go ahead and do that.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=237)** I'll click Start, and I'll go to Settings.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=241)** Then I'll go to System, I'll click on About, and then "Rename this PC, advanced".
>
> **[4:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=253)** I'll click Change, and then I'll choose Domain.
>
> **[4:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=257)** And I'll type my domain name, which is [poseylab.com](https://poseylab.com), and click OK.
>
> **[4:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=265)** And I'm prompted for a username and password.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/fixing-a-computer-account?u=76281980&t=274)** And now I see a message welcoming me to the domain, so we fixed that computer account that became out of sync with Windows.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (1), switch (1), delete (1)
> **UI Navigation:** go to (5), click on (4)
> **CLI Commands:** find (1), make (1)
> **URLs:** [poseylab.com](https://poseylab.com) (1)
> **Env Vars:** rdp (1)
> **Speakers:** - [instructor] (1)

#### Common domain membership problems
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=0)** - [Instructor] If you're having trouble joining a Windows 10 machine to an active directory domain, there are two main things that you should check.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=6)** First of all, you need to verify that a network path exists to a domain controller.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=11)** Second, you need to make sure that DNS domain name resolution is working for the domain.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=16)** So, let's go ahead and work through the diagnostic process.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=19)** So, right now I'm on a non-domain joined Windows 10 desktop.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=23)** So, what I'm going to do is I'm going to right click on the start button and I'll go to Settings, and then I'll click on System, About, and then Rename this PC Advanced.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=38)** So I'll click on Change, and then I'll click Domain, and then I'll type in my domain name [poseylab.com](https://poseylab.com).
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=46)** I'll click OK and I get an error message saying that an active directory domain controller for the domain [poseylab.com](https://poseylab.com) could not be contacted.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=54)** So as I mentioned, there are two things that can cause this.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=57)** You can have a network error where there's no direct network path to a domain controller or you can have a DNS name resolution error.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=65)** So let's find out what's going on.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=67)** Let me go ahead and close this error and I'm going to open a command prompt window.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=71)** So I'll click on the start button and I'll go to All apps, and then I'll go to the W section.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=79)** And then I'll expand window system and click on Command Prompt.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=83)** And so now that a Command Prompt window is open, I want to ping my domain controller by its IP address.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=88)** And that IP address is 147.100.100.248.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=93)** So I'll type ping 147.100.100.248.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=105)** And so I do have a direct network path to my domain controller.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=109)** So that's good.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=110)** So since the network path exists, the problem is most likely DNS name resolution.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=115)** Now this particular domain controller is set up to be a DNS server.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=119)** So let's take a look at this machine's IP address configuration.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=122)** I'll go ahead and close this out.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=125)** And I'm going to right click on the start button and go to Run, and I'll type control and click OK.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=131)** Next, I'll go to Network & Internet, Network and Sharing Center, Change Adapter settings.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=140)** And then I'll right click on my adapter and go to properties, and then I'll click internet protocol version four and click Properties.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=148)** And so we can see this machine's IP address but take a look at the DNS server, the DNS server isn't something that's local to my network.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=155)** So what I want to do is I want to change this DNS server to one that's authoritative for my active directory domain.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=161)** So I'll change this to 147.100.100.248 and I'll click OK.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=172)** And I'll click Close and I'll close this out.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=176)** And so now let's try the connection again.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=178)** I'll click OK.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=180)** And now I'm prompted to enter a username and password.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=184)** So I'll go ahead and enter a username and I'll type my password and click OK.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=198)** And so now I've managed to join the domain.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/common-domain-membership-problems?u=76281980&t=201)** So if that's how you would troubleshoot a problem joining a domain in Windows 10.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), click on (6)
> **Env Vars:** dns (7)
> **Code Keywords:** let (5), this. (1)
> **Versions:** 147.100.100 (3)
> **Tools:** command prompt (3)
> **CLI Commands:** make (1), find (1)
> **URLs:** [poseylab.com](https://poseylab.com) (2)
> **Warnings:** troubleshoot (1)

#### Solving time sync issues
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=0)** - [Instructor] You may have noticed on your Windows 10 PCs that sometimes the clocks tend to drift a little bit.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=5)** Now this might not necessarily be a problem for you, but if the PC is connected to an active directory domain then clock drift can cause major problems, because Windows uses the Kerberos protocol for authentication, and Kerberos is time sensitive.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=18)** So if clocks become out of sync by more than a few minutes, you can have any number of problems that occur.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=24)** So there is a way that you can bring the clocks into sync.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=26)** The best option is to synchronize the Windows clock with an NTP server, NTP standing for Network Time Protocol.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=34)** Now, ideally what I'm about to show you you would want to perform at the active directory level, but you can do it at the local group policy level, particularly if you've got a standalone Windows 10 PC.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=44)** So let's go ahead and take a look at how this works.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=47)** What I'm going to do is right click on the start button, and I'll go to Run and I'll type gpedit.msc.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=58)** And this is going to open up the group policy editor with the local security policy.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=68)** So here we can see the local computer policy.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=70)** So I need to go to computer configuration, administrative templates, system, and then Windows Time Service and then time providers.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=84)** Now there are three group policy settings.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=85)** There are two of 'em that we need to enable.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=87)** First, we need to enable Windows NTP Client.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=90)** So I'll double click on Enable Windows NTP Client, and I will enable this and click okay.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=100)** Next, I'm going to click on configure Windows NTP Client, and I'll enable this as well.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=107)** Now, there are a couple of changes that I need to make here.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=110)** Right now, the type is set to NT5DS, and I need to change that to NTP.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=115)** I also need to change the NTP server so I'm going to delete what's already there.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=120)** And then I'm going to type several NTP servers.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=125)** So as you can see, the server is us.pool.[ntp.org](https://ntp.org),0x1 and then I have one.us.pool.[ntp.org](https://ntp.org),0x1.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=140)** And then I have 2.us.pool.[ntp.org](https://ntp.org),0x1.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=148)** And then 3.us.pool.[ntp.org](https://ntp.org),0x1.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=155)** So it's a lot to type but that gives you several NTP servers that you can use.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=159)** I'll go ahead and click okay, and then I'll close the group policy editor.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=163)** Now, eventually that change will take effect, but you might not see the clocks update immediately.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=168)** If you want the clock to update more quickly there is something that you can do.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=172)** What I'm going to do is open an elevated command prompt window, and I'm going to do that by clicking on the start button and then going to all apps, and then I'll go to the W section and then window system and I'll right click on command prompt, and I'll go more, and then run as administrator.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=191)** And this is going to open an elevated command prompt.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=194)** I'll click yes.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=196)** And now that the command prompt is open, there are two commands that I need to type.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=199)** The first one is GP update /force.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=205)** And what this does is it tells the Windows that you want to load the most recent security policy.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=210)** So you can see that the policy is updating and it takes just a second, but you can see that the computer policy update has completed successfully.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=218)** And now the user policy update has completed successfully.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=221)** So now Windows is aware of the most recent changes to the security policy.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=225)** The other thing that we need to do is to restart the Windows Time Service, and we need to do this through PowerShell.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=231)** So I'm going to click on the start button.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=234)** I'll go to all apps.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=236)** I'll go to the W section, then I'll go to Windows PowerShell.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=241)** I'll right click on Windows PowerShell, and go to more and then run as administrator.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=245)** And this will open an elevated PowerShell session.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=247)** I'll click yes.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=249)** So the command that I'm going to use is restart-service and then w32time And I'll press enter, and that will restart the Windows Time Service.
>
> **[4:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=262)** And so now at this point, the clock should be correct.
>
> **[4:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=266)** Now, it's worth noting that Windows will pull time from other sources.
>
> **[4:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=270)** If Windows happens to be connected to an active directory domain, it will try to get that time from a domain controller.
>
> **[4:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=275)** If Windows is running on a virtual machine, it will try to get its time from the hypervisor that it's running on.
>
> **[4:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=281)** So that's just something to be aware of.
>
> **[4:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=283)** But if you've got a standalone Windows system, then the method that I just showed you will work for getting the time from an authoritative time source.
>
> **[4:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=290)** And as I mentioned too, if you have a domain joined environment, then you can implement those policy settings that I showed you at the group policy level, so that they apply to all of your domain joined PCs.
>
> **[5:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/solving-time-sync-issues?u=76281980&t=300)** So that's how you fix time synchronization issues in Windows 10.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7), click on (6)
> **Env Vars:** ntp (9), nt5ds (1)
> **Tools:** command prompt (4), powershell (4)
> **URLs:** [ntp.org](https://ntp.org) (4)
> **Code Keywords:** let (1), delete (1), type. (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)


### 4. Troubleshooting System Updates and Integrity

#### Running CHKDSK
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=0)** - [Instructor] Sometimes when Windows experiences a problem that problem may be attributed to storage corruption.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=5)** If the disk becomes corrupt, then some of the Windows system files might also be corrupt and when that happens, Windows can malfunction and exhibit any number of different problems.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=16)** So fortunately, Microsoft has included a tool with Windows that you can use to check for disk corruption and to repair that corruption if it exists.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=23)** The tool is called check disk.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=25)** Now, if this sounds familiar, it may be because check disk has been a standard Microsoft utility for decades.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=31)** It was actually introduced in the days of DOS way back in the 1980s.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=35)** But the version of check disk that we have today is quite a bit different from what we had decades ago.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=39)** check disk has evolved over the years along with the operating system.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=43)** So let's take a look at how you would use check disk.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=45)** Now, we have to run check disk from a command prompt but we have to run it from an elevated command prompt otherwise it won't work.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=52)** If you attempt to run check disk from a standard command prompt and you attempt to repair, then Windows will give you an error telling you that you don't have permissions to run the operation even if you are logged in as an administrator.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=63)** So let's go ahead and open an elevated command prompt window.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=66)** What I'm going to do is click on the start button and I'm going to go to the W section, and then I'll expand Windows System, and then rather than clicking on command prompt I'm going to right click on it and this is going to open up a sub menu.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=82)** I'll go to more and then run as administrator.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=85)** And this is going to open an elevated command prompt, I'll click yes.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=91)** Now before I run check disk, what I'm going to do is type the check disk command, it's C H K D S K and then /? and I'll press enter.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=103)** And what this does is it causes Windows to display the check disk command syntax.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=107)** I'll go ahead and make this a little bigger.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=111)** So as you can see, there are any number of command line parameters that you can use with CHKDSK to fine tune its behavior.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=117)** Now, typically there are only two that you're going to need to use, volume and /f, volume is the letter of the drive that you want to check.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=124)** So if for example, you want to check the C drive, volume would be C:, /f tells Windows to fix any errors that it might encounter.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=132)** So let's take a look at how this works.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=134)** I'm going to type CHKDSK and then space and then C: because I want to run a scan of the C drive.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=145)** And let's just do a basic scan first without the /f.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=149)** I'll go ahead and press enter, and you can see what happens when we run CHKDSK.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=152)** You can see that CHKDSK is examining the basic structure of the disk and then it goes into step two, examining file name linkages.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=160)** And then stage three is examining the security descriptors, and then we get a summary of the disk's health.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=166)** Now in this case, the disk is healthy and because the computer is relatively fast and the disk is small, CHKDSK completes quickly.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=173)** But if you have a really large hard disk or a lot of corruption is present, or if you're on a slow machine this process could take a while to complete.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=180)** So let me go ahead and clear the screen.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=183)** And this time I want to rerun CHKDSK, but I want to do it with the /f parameter.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=187)** Now, as you recall, /f tells CHKDSK to fix any errors that it encounters, but there aren't any errors on this disk.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=194)** The reason why I want to show you that is because I want to show you what happens if you run CHKDSK against the C drive and you attempt to correct errors.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=202)** So let's repeat the previous command chkdsk C: and then I'm going to append space /f and I'll press enter.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=213)** And when I do that, I get an error message saying CHKDSK cannot run because the volume is in use by another process.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=219)** What this really means is that Windows is using the C drive and it has to do that in order to be able to function.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=224)** But then the error goes on and ask us, would you like to schedule this volume to be checked the next time the system restarts?
>
> **[3:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=230)** So I'll go ahead and press y and enter, and then I get a message saying the volume will be checked next time the system restarts.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=238)** So with that said, let's go ahead and close out the command prompt and let's reboot the system.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=247)** So Windows is restarting and I get a message that gives me a chance to abort the disk check before it happens.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=255)** And now you can see the disk check is running before the Windows operating system actually loads and it's fixing any errors that it may encounter because we used that /f parameter.
>
> **[4:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=269)** And then once the scan completes, Windows loads in the normal way.
>
> **[4:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=272)** So from there, you can simply log in and see if CHKDSK fixed your problem.
>
> **[4:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=276)** Now, one last thing that I do want to quickly mention is that if CHKDSK does find errors and you correct those errors, it's a good idea to keep running CHKDSK with the /f parameter until no more errors are reported because sometimes CHKDSK does need to be run more than once in order to successfully resolve everything.
>
> **[4:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-chkdsk?u=76281980&t=292)** So that's how you use CHKDSK to troubleshoot storage problems in Windows 10.

> [!info]- Semantic Content
>
> **Env Vars:** chkdsk (14), dos (1)
> **Code Keywords:** let (8), case, (1), function (1)
> **Tools:** command prompt (6), command line (1)
> **UI Navigation:** click on (2), go to (2)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)

#### Using the System File Checker
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=0)** - [Instructor] Sometimes when Windows experiences problems, it can be because there's a problem with one of the Windows system files.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=6)** The file might be corrupt, or it might be an outdated version.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=10)** Well, Windows contains a built-in tool, called the System File Checker, that you can use to check all of your system files, to make sure that they're all running the current version and that nothing is corrupt.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=20)** So let's take a look at how to do this.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=22)** I'm going to go ahead and click on the Start button.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=27)** And from there, I'm going to go to the W section of the Start menu.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=31)** I'll expand Windows System, and then I'm going to right-click on the Command Prompt and go to More and Run as administrator.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=39)** And this is going to open an elevated command prompt window.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=42)** I'll click Yes.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=46)** So as you've probably already guessed, the System File Checker is a command-line tool, and we run it by typing SFC for System File Checker.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=57)** Now, there are various command-line parameters that we can use with SFC, but the one that you'll typically want to use is scannow.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=64)** So I'm just going to type SFC /scannow.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=72)** And I'll press Enter.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=76)** And you can see that the scanning process has begun.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=80)** And as you can see, we got a message saying that Windows Resource Protection found some corrupt files, and it successfully repaired them.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=87)** So that's exactly what the System File Checker is designed to do.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=90)** It's designed to look for any corrupt files or files that are running outdated versions and then repair them automatically as you run the System File Checker.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-system-file-checker?u=76281980&t=97)** So that's how you use the System File Checker.

> [!info]- Semantic Content
>
> **Env Vars:** sfc (3)
> **UI Navigation:** click on (1), right-click (1), go to (1)
> **Code Keywords:** let (1), this. (1)
> **Tools:** command prompt (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Restoring a system's health
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=0)** - [Instructor] The Windows operating system contains a built-in tool called the Deployment Image Servicing and Management Tool, or DISM, as it's more commonly referred to.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=9)** This tool is typically used for imaging a system.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=12)** In other words, you might create a deployment image, and then you automatically deploy that image to a system, and the DISM tool is involved in that process.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=21)** But even though the DISM tool is primarily involved in imaging, it can also be used to repair a system using a parameter called Restore Health.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=29)** So let's go ahead and take a look at how this works.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=32)** What I'm going to do is click on the Start button.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=36)** Next, I'll go to the W section, I'll expand Windows System, and then I'll right-click on Command Prompt and go to More, and then Run as administrator.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=49)** I'll click yes, and now we've opened an Administrative Command Prompt window.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=54)** So to run the DISM command with the Restore Health parameter, what we need to do is type dism.exe space /online space /cleanup-image
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=79)** space /restorehealth, and I'll press enter.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=89)** And the process begins.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=90)** Now it's worth noting that this process can take quite some time to complete.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=94)** Typically, it takes at least 30 minutes, although it can take more or less time depending on the speed of your system and the size of your hard disk.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=103)** And so it looks like the process has completed successfully.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=106)** Now, in this case, the entire process took far less than the half an hour that I estimated, and that's probably because this is a lab machine running on a fast computer with nothing really on it, but in a real-world environment, it is common for this process to take a long time.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/restoring-a-system-s-health?u=76281980&t=121)** At any rate, that's how you use the DISM tool to restore the health of a Windows 10 PC.

> [!info]- Semantic Content
>
> **Env Vars:** dism (5)
> **UI Navigation:** go to (2), click on (1), right-click (1)
> **Code Keywords:** let (1), case, (1)
> **Tools:** command prompt (2)
> **Definitions:** in other words (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Verify your Windows build number
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=0)** - [Narrator] Occasionally, you may find that a problem is specific to a certain version of Windows, so it's helpful to be able to know what version of Windows you're actually running, particularly if you're trying to find help online and you find a description of a problem or a fix that pertains to one specific version or one specific build number.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=17)** So let's take a look at how to find your Windows version and build number.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=21)** The easiest way to do it is to click on the Start button and go to Settings, then go to System, and then click on About and this will provide you a nice summary of your PC.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=36)** For example, you can see the device name, the processor, how much memory is installed, the system type, the pen and touch.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=43)** But then if you go down just a little bit, you'll find this Windows specification section.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=47)** And here, you can see the edition.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=49)** We're running Windows 10 Pro, in this case.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=51)** The version 21H1, in this case, when that version was installed, followed by the OS build number and the experience.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/verify-your-windows-build-number?u=76281980&t=58)** So this screen provides you with a lot of really helpful information that can help you to narrow down whether or not a particular fix is appropriate for your individual system.

> [!info]- Semantic Content
>
> **CLI Commands:** find (5)
> **Code Keywords:** let (1), type, (1), case. (1), case, (1)
> **UI Navigation:** click on (2), go to (2)
> **Documentation:** specification (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Running Windows Update
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=0)** - [Instructor] When you experience problems with Windows 10, one of the simplest yet most effective things that you can do is to update Windows.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=7)** Oftentimes, the updates that Microsoft releases contain bug fixes.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=11)** Now, I'll be the first to admit that even though this is an advanced course, updating Windows is not exactly an advanced topic.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=18)** Nonetheless, I wanted to include it in this course simply because of how important it is to keep Windows up-to-date.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=23)** So with that said, let's take a look at how you update Windows.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=27)** I'm going to begin by clicking the start button.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=32)** Next, I'll go to settings.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=36)** From there, I'll click on update and security.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=41)** The Windows update tab is selected by default, and I'm going to click on check for updates.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=49)** Now at the moment, there are no urgent updates available, but if you look right here, you can see that there's a feature update that's available, and we can install that by clicking on the download and install link.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=59)** I'll go ahead and click on that now.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=64)** And so, as you can see, Windows has begun downloading the update, and then once the download process completes, it will automatically install this update, bring us up to the latest edition of Windows 10.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=78)** Okay, so it looks like the installation process has completed, and we can either click restart now, or we can schedule the restart to occur at another time.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=86)** I'm going to go ahead and click restart now, and Windows is restarting.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=96)** Okay, and the system is starting up, and the update has been installed.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=102)** Now, anytime that you install an update, it's a good idea to check and see if there are any other updates available, so let's go ahead and do that.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=108)** I'm going to click on the start button.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=111)** I'll go to settings, update and security, and let's check for updates, and it looks like there is an update available.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=121)** So you want to keep checking for updates until there are no more updates to install.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-windows-update?u=76281980&t=125)** But that's how you update Windows 10.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), go to (2)
> **Prerequisites:** install (5)
> **Code Keywords:** let (3), default, (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instructor] (1)

#### Using the Windows Update Troubleshooter
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=0)** - [Instructor] If you're having problems getting Windows Update to work properly, then the very first thing that you should do is check to make sure that you've got internet connectivity.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=7)** If internet connectivity is working, then the next thing that you should do is run the Windows Update Troubleshooter.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=13)** Now before we do that, let's go ahead and simulate a problem.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=17)** What I'm going to do is right click on the start button and I'll go to Run and I'll type services.msc.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=23)** That's going to open the service control manager.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=26)** Now, one of the services that's used by Windows Update is the Background Intelligent Transfer Service, or BITS as it's more commonly known.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=34)** You can see that service right here and if you look at the status column, you can see that the service is not running, but it needs to be running in order for Windows Update to function properly.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=43)** So let's go ahead and run the troubleshooter.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=46)** What I'm going to do is click on the start button and I'll go to Run and I'm going to type control.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=55)** (keyboard clicks) And this is going to bring up the legacy control panel.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=59)** So from there I'm going to type the word troubleshooting into the search box.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=69)** And you can see that we have a troubleshooting option, I'll go ahead and click on that now.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=74)** And we have a variety of troubleshooters that we can use to troubleshoot various problems.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=79)** The system and security section, which you can see right here, contains a link that we can click to fix problems with Windows Update.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=85)** I'll go ahead and click on that link now.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=87)** So this launches the Windows Update troubleshooter.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=90)** I'm going to go ahead and close the control panel.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=93)** You don't actually have to do that but I'm going to do that just to make things easier to see.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=96)** And then I'm going to move the over a little bit.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=99)** So now I'll click on Next.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=102)** And the troubleshooter begins.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=103)** You can see that it's checking to see if there's a pending restart and now it's starting the BITS Service.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=111)** So it detected that the BITS service wasn't running and then it started it.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=114)** Now we received a message saying that troubleshooting couldn't identify the problem.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=118)** And that's one of the little quirks with the troubleshooters, is that every once in a while they will tell you that they didn't find a problem even though they actually did.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=126)** Now if you look back at the service control manager, it looks as though the BITS Service isn't running.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=131)** But if I refresh the console, you can see that the BITS Service has actually been started and it now reflects the status of running.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=139)** So Windows Update should be able to run at this point.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=142)** Now, if you're concerned about that, you could rerun the troubleshooter, but rather than doing that, I'm just going to go ahead and close this out and I'm going to click on Start and then Settings, Update & Security, and let's check for updates.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=163)** And it looks like we're up to date, so Windows Update is working properly.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=167)** So the troubleshooter did its job even though it gave us that error message indicating that it didn't find anything.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-windows-update-troubleshooter?u=76281980&t=173)** So that's how you use a troubleshooter to diagnose problems with Windows Update.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (6), go to (2), open the (1)
> **Env Vars:** bits (5)
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** let (3), function (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Resolving common update errors
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=0)** - [Narrator] If you're having problems with Windows Update, and you haven't been able to use the troubleshooter to resolve those problems, there are a few other things that you can do.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=8)** The first thing that I recommend doing is unplugging any peripherals from your PC.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=12)** I'm talking about anything other than the keyboard or mouse.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=14)** So if you have a printer directly connected to the PC, you can unplug that.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=17)** If you have a scanner attached, unplug that.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=20)** Unplug anything other than your keyboard or mouse.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=23)** And of course you'll need a network connection.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=24)** Then reboot the PC and see if Windows Update works.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=28)** Hopefully it will, but if it doesn't there are some other things to try.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=30)** The next thing that I recommend trying is just making sure that you've got plenty of free disc space.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=36)** Now, this is less of an issue with newer Windows builds, because Microsoft actually reserves some space to be used by Windows Update.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=42)** But, even with that being the case, low disk space can cause problems.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=47)** So the way that you would check disk space is by opening up File Explorer, going to this PC and looking at your C Drive.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=56)** So, in this case, I've got 99.7 gigabytes free.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=59)** So we've got plenty of free disk space.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=62)** So the next thing that we would want to do is to close out File Explorer, and then boot the machine into safe mode.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=67)** And the way that you do that is by clicking on the 'start' button, and then holding down the 'shift key', and clicking the power icon and then click 'restart'.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=78)** And I'm holding down the shift key this entire time.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=81)** And now I'm letting go of the 'shift key', and the system should reboot.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=86)** So I'm taken to a screen that prompts me to choose an option.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=89)** I'm going to click on 'troubleshoot'.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=94)** And then I'm going to go to 'advanced options'.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=98)** Next time I'm going to click on 'startup settings'.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=102)** Now I'm going to click 'restart', and I'm taken to a screen that asks me what I want to do.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=109)** So I'm going to enable safe mode.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=112)** So I'll press four.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=115)** And now Windows will boot into safe mode.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=119)** And you'll notice that Windows reduces the screen resolution because we are booting into safe mode.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=123)** So I'll go ahead and enter my password.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=128)** And I'll close this out.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=130)** Now what we need to do is open up File Explorer, and I'll go to this PC and then the C drive, the Windows folder.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=142)** And we need to locate a folder called Software Distribution.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=151)** So here's the software distribution folder.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=153)** I'm going to open this up.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=155)** And this is the folder where the various updates that are downloaded from Windows Update are stored.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=161)** So what we want to do is just delete all of this.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=165)** So I'm going to select everything, right click and click on 'delete'.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=170)** So everything's been deleted.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=171)** I'll close out File Explorer, I'll empty the Recycle Bin.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=179)** And now let's restart the PC.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=185)** And Windows should boot normally.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=187)** And so, now I can log in.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=192)** So what I did in that last step when I deleted the software distribution folder was I effectively got rid of the Windows Update cache, all of the updates that had previously been downloaded.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=201)** The idea behind that is that if an update was downloaded incorrectly and became corrupted or something like that, then that could be causing problems with Windows update.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=210)** So if you go in and you clear out that folder, then you get rid of that entire cache, and you can kind of start fresh with Windows Update.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=217)** So hopefully now that that's been done, you can go into Windows Update and begin downloading updates in the usual way.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/resolving-common-update-errors?u=76281980&t=224)** So those are just a few things that you can try if you have problems with Windows Update.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), delete (2), try. (1), this. (1), let (1)
> **UI Navigation:** click on (3), go to (2)
> **Versions:** 99.7 (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 5. Performance Troubleshooting

#### Using the Task Manager for performance assessments
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=0)** - [Instructor] If Windows 10 is experiencing performance problems, then one of the simplest tools that you can use to figure out what's going on is the Task Manager.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=8)** Let me show you how this works.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=10)** I'm going to right click on the Start button and I'll go to Run and I'll type task mgr.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=21)** And I'll press OK and this opens up the Task Manager.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=24)** Now, at first there's nothing displayed but if I click on more details, then what I get is a list of every process that's running on the machine.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=33)** Let me go ahead and make this a little bigger.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=35)** So you can see for every process we can see the amount of CPU resources that are being used, we can see how much memory the process is using, how much disc time it's using, how much network bandwidth is being used, and how much power is being used.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=48)** So we get all of this information for every process that's running on the machine.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=52)** We can also sort these columns.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=54)** If, for example, I wanted to know which process is consuming the most CPU time, I could click on the CPU column and the list would be sorted by CPU usage.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=63)** Now, this isn't the only view that's available to us.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=66)** You'll notice that there's a tab at the top of the screen labeled performance.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=70)** I'll go ahead and click on the performance tab.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=74)** And what I get here is an overall view of the machine's performance.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=77)** So right now I can see the machine's CPU usage and you can see that the load on this machine is relatively low.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=85)** I could also click on memory and the graph would change to reflect the machine's memory usage rather than the CPU usage.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=91)** And of course, I also have an option that I can click on to see how the hard disc is being used.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=96)** And incidentally, if your machine has multiple discs, then you'll see an icon for each individual disc.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=101)** And then there's one more for looking at network performance.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-task-manager-for-performance-assessments?u=76281980&t=105)** So this is how you can use the task manager to assess the performance of a Windows 10 machine.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (6)
> **UI Navigation:** click on (5), go to (1)
> **Code Keywords:** let (2), if, (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Working with the Resource Monitor
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=0)** - [Instructor] Although you can use the Task Manager to access basic performance information, the Task Manager can also be used as a tool for accessing another tool called the Resource Monitor that provides you a little bit more detail.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=11)** So, let's take a look at how you access the Resource Monitor and how it works.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=16)** I'm going to begin by right clicking on the start button and I'll go to run and I'll type Task Manager and click okay.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=27)** And this opens up the Task Manager.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=30)** What I'm going to do now is click on the performance tab and then you'll notice that there's a link at the bottom of the window that says open Resource Monitor.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=38)** I'm going to go ahead and click on that link now.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=44)** So, this is the Resource Monitor and the Resource Monitor is divided into five tabs, overview, CPU, memory, disc, and network.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=53)** The overview tab shows a summary of how the system resources are being used.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=57)** So, for right now, you'll notice that the CPU section has been expanded, and so, we have a list of all of the processes that are running on this machine.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=65)** We can see the process ID, the description, the process status, the number of threads, which CPU is running the process, and we can see the average CPU usage.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=75)** And then, over here, we have a chart that shows the current CPU usage.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=79)** Right now, it's at about five or six percent and we can see the maximum frequency.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=84)** And then, we have a nice overview chart at the right side of the screen that shows us the current CPU usage, current disc usage, network, and memory usage.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=92)** Now, we can easily expand any of these other sections as well.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=95)** If, for example, we wanted to see how this system was using its disk resources, then I would just click on this down arrow right here, and that would expand the disc section.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=104)** So, again, we see our processes and the process ID and then we see the file that's being used and then we see some disc performance information.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=111)** And you'll notice that this information is just a little bit more detailed than what we had in the Task Manager.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=116)** So, now, let's take a look at some of these other tabs that are available to us.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=120)** I'll click on the CPU tab.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=122)** So, when I click on the CPU tab, I get a view that's very similar to what you saw on the overview tab, but the difference is that we have a bit more information available to us.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=132)** We still have our list of processes and the process ID and description and the status and threads, CPU and average CPU, but notice down here that instead of having dropdowns for disk and memory and that sort of thing, we now have other things besides just processes.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=147)** For example, we can look at the CPU resources being consumed by system services.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=152)** I'll go ahead and click that down arrow.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=153)** And now, we get a list of system services and we see the process ID associated with those services.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=159)** We see the service description and the service status and so on and so forth.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=163)** And we can also look at associated handles and associated modules.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=167)** Now, I'll click on the memory tab.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=170)** And the memory tab provides us with the same basic information.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=173)** We have a list of the processes that are running on the machine, and then we can see how the system's physical memory is being used.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=178)** So, you can see that the portion of the chart that's in green reflects memory and use, whereas the blue represents standby memory.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=186)** And then, we also have just a little bit of orange here, which corresponds to memory that's being modified, and then we get a nice summary down below of the available memory, the cash memory, the total memory and the installed memory.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=197)** Now, I'll click on the disc tab.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=200)** And the disc tab shows us disc activity.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=202)** We can see which processes are currently consuming disc resources, and then, we also have dropdowns for disc activity and storage.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=210)** So, we can get some nice detail about how our discs are being used.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=213)** And then, off to the right, we have graphs that show us exactly what the disc activity is.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=219)** We can see our overall disc activity and then we can also see disc activity on a specific disc.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=225)** And then, I'll click on the network tab, and the network tab works in essentially the same way as the other tabs that you've seen, in that it shows us the various processes that are running on the machine, and we can see which processes are using the network and how much network bandwidth those processes are consuming.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/working-with-the-resource-monitor?u=76281980&t=241)** So, that's how you use the Resource Monitor to evaluate a Windows 10 systems performance.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (11)
> **UI Navigation:** click on (8), go to (1)
> **Code Keywords:** let (2), if, (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Using the Performance Monitor
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=0)** - [Instructor] Windows 10's main tool for assessing system performance is called the Performance Monitor.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=5)** Now, the Performance Monitor works a little bit differently from the Resource Monitor and the Task Manager because the Resource Monitor and the Task Manager are focused on showing you the individual processes and what types of resources those processes are consuming, things like the amount of memory that each process is using and the amount of CPU time that a process is using.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=25)** The Performance Monitor is different because it focuses on whole system performance.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=29)** So let's take a look at this tool.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=31)** To get to the Performance Monitor, I'm going to right-click on the Start button and I'll go to Run and I'll type perfmon and press Enter.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=45)** And so now the Performance Monitor opens.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=46)** I'll go ahead and make this bigger.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=49)** So right now we just see a bit of summary information about the system's performance, but to access the main Performance Monitor screen, we need to click on Performance Monitor in the console tree.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=58)** I'll go ahead and do that now.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=59)** So this is what the Performance Monitor looks like, and it's broken up into two sections.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=64)** The top section is a graph that shows the current system performance, and this is shown in real time.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=70)** And then the lower section shows which counters we're looking at.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=74)** A counter is simply a mechanism that reflects one individual metric of the system's performance.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=80)** Right now, the counter that we're looking at is percentage processor time.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=84)** You can see the counter name just above my mouse pointer.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=87)** So the percentage processor time counter shows us what percentage of the time the CPU is being used.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=92)** So right now the CPU is being used less than 10% of the time.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=96)** So this machine has plenty of CPU resources.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=99)** But if, on the other hand, the percentage processor time counter showed that the CPU was consistently in use above 80% of the time, then that might be an indication that this machine has inadequate CPU resources and might need an upgrade.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=113)** Now, the percentage processor time counter isn't the only counter that's available.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=117)** There are plenty of others.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=119)** And the way that we would look at those is by clicking on the plus icon, and that's going to bring up the ad counter screen.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=126)** So from there we see a list of categories.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=128)** So processor is a category, RAS is a category redirector is a category.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=134)** And then we can expand those categories and see individual counters within them.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=138)** So if, for example, I wanted to see the percentage of time that the CPU was idle, I could select the percentage idle time counter, and I'll look at all instances as opposed to an individual CPU.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=150)** I'll click add and then click OK.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=152)** So now my graph is going to reflect the percentage of idle time and it's going to reflect the percentage of time that the CPU is in use.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=162)** And if I wanted to make this chart a little bit less confusing, I could even remove the percentage processor time counter, and the way that I would do that is by selecting it and then clicking on the X.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=172)** And so now I'm only looking at the percentage of time that the system is idle.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=177)** Now, for every Performance Monitor counter, there's a certain threshold of values that you're looking for.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=182)** Values within a certain threshold indicate normal conditions and values that exceed that threshold indicate that there's some sort of issue going on.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=191)** So a lot of times when you're troubleshooting a problem with Windows 10 and you go onto the internet and you find a Microsoft article talking about that problem, they'll tell you to load the Performance Monitor and to look at a specific counter and see if its value falls outside of a certain range, and if the value does fall outside of that range, then Microsoft will tell you what might be going on and what you need to do to solve that problem.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-the-performance-monitor?u=76281980&t=214)** So that's how the Performance Monitor works in Windows 10.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (9), ras (1)
> **Definitions:** is a  (4), is called (1)
> **Code Keywords:** if, (2), let (1), for. (1)
> **UI Navigation:** right-click (1), go to (1), click on (1), select the (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using PowerShell to track resource usage
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=0)** - [Instructor] Just as you can use the Task Manager and the Resource Monitor to find out what system resources each process is consuming, you can also get that information through PowerShell.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=10)** So let's take a look at how this works.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=11)** I'm going to begin by clicking on the Start button, and then I'm going to go to the W section, I'll go to Windows PowerShell, and then I'm going to right-click on Windows PowerShell, and go to More, and Run as administrator, and that's going to open an elevated PowerShell session.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=30)** I'll click Yes,
>
> **[0:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=39)** and here we are in PowerShell.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=41)** Now if you just want to get information about your system processes, you can do that by typing the Get-Process cmdlet.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=48)** I'll go ahead and do that so that you can see what it looks like.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=55)** And what you get is a list of every process that's running on the machine and the resources that that process is using.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=62)** So you can see the Handles, and then you see information about the amount of memory that the process is using.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=67)** Incidentally, WSetK, that's your working set memory in kilobytes.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=72)** And you can also see the CPU usage, the process Id, and then the ProcessName.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=77)** So this information is great, but as you can see, there are a lot of processes on this machine.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=82)** So if you're trying to track down a performance problem, then it really helps to be able to sort this list.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=87)** But let's take a look at how that might be done.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=90)** What I'm going to do is type Get-Process again, and this time I'm going to specify the pipe symbol.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=97)** And if you're not familiar with PowerShell, the pipe symbol tells PowerShell that you want to take the output from one cmdlet and use it as input for another cmdlet.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=105)** So we're taking the output that's generated by the Get-Process cmdlet, and we're treating it as input for another cmdlet.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=113)** And, in this case, that cmdlet is going to be Sort-Object.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=116)** I'll go ahead and type that.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=122)** Now we have to tell PowerShell what we want to sort by, and the way that we do that is by providing a property and then the name of that property.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=129)** So if I wanted to sort this list by CPU usage, then I would type -Property and then CPU.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=141)** And I'll go ahead and press enter.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=144)** And so now the output is sorted by CPU usage.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=147)** I'll go ahead and make this a little bit bigger, and I'll scroll up to the top.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=151)** And if you look at the CPU category, you can see that the very first process that's listed has no CPU usage, and then the CPU usage increases gradually.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=161)** And then as we scroll down, we get higher and higher CPU usage.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=165)** So we've effectively sorted our list of processes by the amount of CPU usage.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=170)** Now one thing that I do want to be sure and point out is that the information that's presented is accurate for that particular moment in time.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=177)** CPU usage fluctuates and so does memory usage.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=180)** So just because the information was accurate at the time that it was captured, doesn't mean that it's going to be accurate two seconds later.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=187)** The information does change.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=189)** But let's suppose that we want to narrow this down a little bit.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=192)** Suppose that, for whatever reason, we wanted to know which five processes are consuming the most CPU time.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=198)** Yes, we could look at our sorted list, but there is another way that we could do that.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=201)** What I'm going to do is repeat the command that we just typed, and then I'm going to add another pipe symbol at the end, which means that we're going to take this output that we already generated, and we're going to treat that as input for yet another PowerShell cmdlet.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=215)** And that cmdlet is going to be Select-Object.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=223)** Now the Select-Object cmdlet tells PowerShell which columns you want to display.
>
> **[3:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=228)** So we could type some various column headers and tell PowerShell how we want the output formatted, but what I'm going to do instead is I'm going to type -Last 5.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=239)** And when I press enter, what we get is a list of the five processes that are consuming the most CPU time.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=246)** So we've effectively narrowed down that great big list, and we found the five processes that are putting the greatest load on our CPU.
>
> **[4:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/using-powershell-to-track-resource-usage?u=76281980&t=253)** So that's just a taste of how you can use PowerShell to diagnose system performance issues.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (13)
> **Tools:** powershell (12)
> **UI Navigation:** go to (3), right-click (1), scroll up (1), scroll down (1)
> **Code Keywords:** let (3), case, (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)


### 6. Troubleshooting the Blue Screen of Death

#### Creating a blue screen error on demand
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=0)** - [Instructor] Typically, blue screen errors are something that you want to avoid.
>
> **[0:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=3)** After all, nobody wants to actually create a blue screen error.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=6)** However, if your goal is to learn about blue screen errors, then you need to be able to create such an error on demand.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=12)** So that's what I want to show you in this video.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=15)** Now, before I show you how to create a blue screen error on demand, it kind of goes without saying that you shouldn't do this on a production system.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=21)** You should only do this in a lab environment.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=23)** So with that said, let's go ahead and cause the system to blue screen.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=27)** So what I'm going to do is I'm going to click on the start button and then I'm going to go to the W section.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=38)** I'll expand Windows System, and then I'm going to right-click on Command Prompt, and I'll go to More and Run as administrator.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=46)** And this is going to open an elevated command prompt window.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=49)** I'll click Yes.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=52)** So to create a blue screen error, we're going to use a native Windows tool called Task Kill.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=57)** So I'll go ahead and type task kill, and we need to provide a few parameters to go along with this.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=66)** I'm going to use /IM.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=70)** And then we need to provide a name for a process.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=72)** So what we're essentially doing is we're shutting down a critical system process so that the system has no choice but to blue screen.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=79)** So the process that I'm going to shutdown a service host.exe.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=83)** So that's svchost.exe.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=90)** Now, normally Windows is designed so that it won't shutdown critical system processes, because shutting down such a process is usually considered to be a bad thing.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=99)** So what we're going to have to do is force the shutdown of the service host process, and we do that by appending /F to this command.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=108)** F standing for force.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=112)** So we've got taskkill /IM svchost.exe /F.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=117)** And when our press enter, the system should wait for a couple of seconds and then we'll see it blue screen.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=123)** So as you can see, the system blue screen.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=125)** And if you've never seen one of these before, this is what a blue screen error looks like.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/creating-a-blue-screen-error-on-demand?u=76281980&t=130)** So that's how you create a blue screen on demand.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (2), click on (1), right-click (1)
> **Code Keywords:** let (1), this. (1)
> **Tools:** command prompt (2)
> **Speakers:** - [instructor] (1)

#### The anatomy of a blue screen
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=0)** - [Instructor] There are several elements that are displayed when a blue screen error occurs.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=4)** The first and most obvious of these elements is the frowny face right here just to the left of my mouse pointer.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=10)** You're also going to see a rather generic error message saying your device ran into a problem and needs to restart.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=15)** We're just collecting some error info and then we'll restart for you.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=18)** Below that, you're typically going to see a counter that shows what percentage is complete and that percentage reflects the memory dump process.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=26)** So if you've configured Windows to perform a memory dump when a blue screen error occurs, then this counter is going to show you what percentage of the memory dump is complete.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=36)** So then, if you go down a little bit further, there are a couple of other things that are going on.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=41)** We have a QR code and you can scan this QR code with your smartphone and that will take you to a page that gives you information about the problem that you're having.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=51)** There's also a message saying, For more information about this issue and possible fixes, visit [windows.com/stopcode](https://windows.com/stopcode).
>
> **[0:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=58)** And then, it goes on to say, If you call a support person, give them this info.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=63)** And then we have a stop code.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=64)** In this case, that stop code is critical process died.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=68)** Now the stop code is the one thing on this page that's really important because it points to the source of the problem.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/the-anatomy-of-a-blue-screen?u=76281980&t=74)** And so, I'm going to be talking all about stop codes in Video 6-3, which covers basic troubleshooting steps.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1)
> **URLs:** [windows.com](https://windows.com) (1)
> **Speakers:** - [instructor] (1)

#### Basic troubleshooting steps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=0)** - [Instructor] The idea of fixing a blue screen of death error can be daunting, but the good news is that correcting the error is usually easier than it might seem.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=8)** Whenever an error like the one that you're seeing on the screen right now occurs, the very first thing that I would recommend doing is just rebooting the machine and seeing if the problem goes away.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=17)** Every once in a while, you may find that a blue screen error is a fluke and that it clears up on its own after you've rebooted the system.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=24)** If that doesn't happen, though, then what I would recommend is shutting down the system and then unplugging all of your USB devices, everything except for the keyboard and mouse, and then reboot the system in safe mode.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=35)** Once you're in safe mode, think about anything that's been installed recently and remove it, because if, for example, you recently installed an application and then blue screen errors began occurring shortly thereafter, then that application is very likely tied to those blue screen errors.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=51)** And it isn't just applications that can cause blue screen errors.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=54)** If you've recently installed a Windows update or an update to a device driver or even a new device driver or a new piece of hardware, those too can be contributors to the blue screen error.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=64)** So whenever you see an error like this, just think about what's changed on your system most recently, because whatever it is that was the most recent change, that's probably what's causing your error.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=75)** Now, if that approach doesn't help you to resolve the error, then the next thing that you should do is to take a look at the stop code, and the stop code is this item right here just above my mouse pointer.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=85)** In this case, the stop code says critical process died.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=89)** What this means is that a key system process was shut down unexpectedly and the operating system couldn't function without it.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=96)** Now, in this particular case I actually did this on purpose.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=100)** In the very first video in this lesson, I showed you how to trigger a blue screen error on demand, and that's what resulted in this particular stop code.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=108)** I actually used a command called task kill and I shut down a core system process, resulting in this blue screen.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=115)** Now, this isn't the only stop code that you can get.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=117)** There are several others.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=119)** But let's talk about what some of the common stop codes are and what they mean.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=123)** One common stop code is system thread exception not handled, and in my experience, this is one of the more difficult stop codes to troubleshoot because it's kind of a catchall error.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=133)** What it means is that some process or some thread that's running on your system encountered an error and it didn't know how to deal with that error, so it caused Windows to blue screen.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=143)** Typically, this is going to be tied to an application, but it can be tied to the Windows operating system or to a device driver.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=150)** Another error that you might occasionally encounter is IRQL not less or equal, and this particular error is almost always memory-related.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=159)** What it typically means is that a process or a device driver that's running on your system tried to access an area of memory that it didn't have permission to access.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=169)** So for example, you might have an application running on Windows, and that application tries to run a protected area of memory, and because it can't access that memory, it doesn't know what to do, and it causes a blue screen.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=180)** Another stop code that you might occasionally encounter is video TDR timeout detected, and this particular blue screen error is tied to your GPU.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=190)** So what happens a lot of times is if you've got a very graphically intense workload and you overstress your GPU to the point that it can't keep up with all of the instructions that are coming in, it can result in a blue screen with the stop code video TDR timeout detected.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=204)** Another problem that you might experience is page fault in nonpaged area.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=209)** This is one of the most common blue screen stop codes, and it's usually memory-related.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=214)** Typically, what it means is that either you've got some bad memory in your system that needs to be replaced, or it can mean that your system simply doesn't have enough memory.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=223)** Another common blue screen error is system service exception.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=227)** This one is almost always tied to a device driver, and if you happen to receive a system service exception stop code, then the device driver that resulted in that blue screen error will usually be printed just beneath the stop code.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=241)** And then one last stop code that you need to be aware of is DPC watchdog violation.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=246)** Now, this is one of those stop codes that was really common when Windows 10 first came out, but you don't see it very much anymore.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=252)** Typically it's caused when an SSD, that's a solid state drive, driver is found to be incompatible with Windows.
>
> **[4:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=259)** And the way that you would typically resolve that is by going into the device manager and making sure that the disk controller is using the SATA AHCI driver that's built into Windows rather than using a third-party driver.
>
> **[4:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/basic-troubleshooting-steps?u=76281980&t=272)** So those are some of the stop codes that you might encounter when diagnosing a blue screen of death error message in Windows 10.

> [!info]- Semantic Content
>
> **Env Vars:** tdr (2), gpu (2), usb (1), irql (1), dpc (1)
> **Code Keywords:** while, (1), if, (1), this, (1), case, (1), function (1)
> **Analogies:** for example (2)
> **Warnings:** troubleshoot (1), be aware (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Running the Reliability Monitor
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=0)** - [Instructor] When you experience a blue screen error in Windows 10, it's important to find out if the error is just a one-off situation that happened as a total fluke.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=8)** Or if the system has been consistently experiencing blue screen errors.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=12)** Knowing the answer to this question can help you know how to deal with the error.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=16)** So the best tool that Windows offers for finding out if blue screen errors are happening consistently or not is the reliability monitor.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=23)** So let's take a look at how to access and use this tool.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=26)** So what I'm going to do is I'm going to right click on the start button and I'm going to go to Run and then I'll type control and click okay.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=36)** And that's going to open the Legacy control panel.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=39)** Next, I'm going to click on System and Security.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=44)** Then I'll go to Security and maintenance.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=47)** From there, I'm going to expand the maintenance container and then I'll click on Viewer Reliability History.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=54)** And this is going to open the Reliability monitor.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=57)** I'll make this a little bigger.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=59)** So what we see in the Reliability Monitor is a recent history of the device.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=63)** So for the various days you can see any informational events that occurred.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=67)** You can also see warnings and you can see error messages.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=69)** And the nice thing about error messages is that they're categorized.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=73)** You'll notice that on the right side of the chart we have categories like application failure, Windows failures, miscellaneous failures, warnings and information.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=81)** So if we look at today, we can see that we had a Windows failure and we can also see that there was a miscellaneous failure.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=89)** And then we also had an informational event.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=91)** Now if you look down at the bottom you can see that all of today's events are listed.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=96)** So here's our informational event and then here's our critical events.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=100)** And it looks like we had six different errors that have happened on the system today.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=105)** Now the blue screen errors are in bold so we have shut down unexpectedly and then we have another shutdown unexpectedly.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=112)** Both of those are blue screen errors that occurred.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=115)** And if you want a little bit more information on this you can simply double click on the error and that will take you to a screen right here.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=122)** And if you look at problem event name you can see that this was indeed a blue screen error.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=127)** So this particular system has already blue screened twice today.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=131)** So if we were to go back to the security and maintenance screen and go back into the reliability monitor, we have some errors that have occurred on other days.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=142)** So it would be important to know are these blue screen errors or is something else going on with the system?
>
> **[2:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=147)** So if we were to look at yesterday then we have three critical events.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=151)** Windows was not shut down properly.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=153)** Windows failed to start because of a problem with the hard disc, and Windows failed to start because of a problem with the hard disc.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=159)** So some problems happened yesterday but these weren't blue screen problems.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=163)** So it appears, that the blue screen errors just started today.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=167)** And then we have another day that some errors occurred back on July 8th.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=172)** And if I select that, you can see that we have Windows was not shut down properly and Windows failed to start because of a problem with the hard disc.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=180)** So we have two errors there but none of those are blue screen errors.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=183)** So apparently the blue screen problem that this machine is experiencing was relatively recent.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/running-the-reliability-monitor?u=76281980&t=189)** At any rate, that's how you use the reliability monitor to look at recent history of the device and find out if the blue screen errors are happening consistently or if it's just a recent event.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (2), open the (2)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Configure a crash dump
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=0)** - [Instructor] If you're having problems with blue screen errors, then it's a good idea to configure Windows to create a crash dump file.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=6)** A crash dump file is essentially a copy of the machine's memory, and you can go through this file a little bit later on and then figure out what it was that caused the blue screen error to occur in the first place.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=18)** Now, Windows will create a crash dump file by default, even if you don't do anything at all.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=23)** But it's a good idea to go in and fine tune some of the options that are associated with creating a crash dump file, so that you can make sure that it meets your needs.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=31)** So, let's take a look at how that's done.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=33)** To get started, I'm going to right click on the start button, and then I'm going to go to system.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=42)** And then I'm going to click on Advanced System Settings.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=47)** So this brings up the system property sheet and then what you want to do from here is make sure that the advanced tab is selected, which it is, and then locate the startup and recovery section on that tab and then click settings.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=60)** Now you'll notice that we have a section right here next to my mouse pointer called System Failure and the settings that are within the section control what happens when a blue screen error occurs.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=70)** And so the first option that we have is write an event to the system log.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=74)** So this option should be selected because what happens is when a blue screen error occurs then an event is going to be written to the system log, so that you can open that log up in Event Viewer and see that a blue screen error has indeed occurred.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=87)** The second option is automatically restart.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=90)** I recommend deselecting this option if you're serious about trying to get to the root cause of the blue screen error.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=96)** And the reason for that is that if the system automatically restarts, it may restart before you have a chance to write down the specifics of the error.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=105)** So I like to go ahead and clear this out just so that I can have the error on screen for as long as I need it, and I don't have to worry about the system rebooting on me.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=113)** Because being able to write down the contents of a blue screen error is one thing, if you're expecting the error, but if the error happens totally unexpectedly you might not be prepared to do that.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=122)** So preventing an automatic restart just gives you the time that you need to be able to document the error.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=129)** The next thing that we have is right debugging information and you can see that this is set for an automatic memory dump, but we have a few other options.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=136)** You can see that we have an option of none, which prevents a memory dump from being written at all.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=141)** Then we have a small memory dump, which is essentially just a small memory summary and it's only 256 kilobytes in size, but a lot of times that small memory dump will give you the information that you need.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=152)** Then we have a few other options, kernel memory dump, complete memory dump, automatic memory dump, and active memory dump.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=159)** Now, the important thing that you need to know about this is that if you do a complete memory dump, then the file that's going to be created is going to be equal to the amount of memory that you've got installed in your system.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=169)** So if for example, your system has 120 gigabytes of ram, well then your crash dump file is also going to be 128 gigabytes if you select the complete memory dump option.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=181)** Now, kernel memory dump, automatic memory dump, and active memory dump can create files that are as large as the system's memory.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=188)** But depending on what's going on on the system at the time of the crash, these files do tend to be a little bit smaller.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=194)** So for our purposes, I'm just going to choose the small memory dump option.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=199)** And then we can also choose the folder that the memory dump gets written to.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=203)** By default, it's being written to system route mini dump.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=206)** There's also an option to overwrite any existing files and you can disable the automatic deletion of memory dumps when this space is low.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/configure-a-crash-dump?u=76281980&t=214)** But these are the primary options that you need to configure in preparation for analyzing a crash dump file.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (2), let (1)
> **UI Navigation:** go to (1), click on (1), select the (1)
> **CLI Commands:** make (2)
> **Prerequisites:** configure (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Analyzing a crash dump
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=0)** - [Narrator] A crash dump can be helpful in helping you to resolve blue screen errors, but it's important to know how to analyze a crash dump file.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=7)** The way that I like to do it is by using a free tool.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=10)** The tool's from a company called Nirsoft.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=13)** That's N-I-R-S-O-F-T, and it's called Blue Screen View.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=17)** You can download it for free.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=19)** So I've already downloaded this tool onto this computer, so let's go ahead and run it.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=23)** I'm going to open up File Explorer.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=26)** I'll go to 'This PC'.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=28)** And I've created a folder on the C drive called Blue Screen View.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=33)** And here we have the Blue Screen View program.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=36)** And incidentally, you don't even have to install this.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=38)** The program is self-contained, so you can simply copy the executable file to your computer.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=42)** There's nothing special that you have to do.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=45)** I'll go ahead and open up Blue Screen View, and I'll click 'yes'.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=50)** And what I do, the most recent crash dump file is automatically loaded.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=54)** So we can see that the crash dump file is selected.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=56)** We can see when the crash time was.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=58)** We can see the bug check string, the bug check code, and then a number of different parameters.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=64)** And we can even see which driver caused the crash.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=67)** In this case, it's 'ntoskernel.exe'.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=69)** And if we wanted a bit more detailed information, or if we just wanted to make this information easier to read we could simply double click on this.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=76)** And that gives us a popup that gives us all of the relevant information that can help us to troubleshoot the problem.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=82)** Now, down at the bottom, you can see all of the processes that were running at the time that the crash happened.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=88)** and 'ntoskernel' is at the very top of the list.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=91)** So you can see what address range it was using, what its size was, what its timestamp is, the time string.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=97)** And, depending on which process you're looking at, there may be some additional information such as a product name, or a file description, or file version, or a company, and the full path to the executable.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=108)** Now, one of the things that I really like about this tool is that it makes it easy to research a problem.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=113)** So even if you don't know what all of these memory addresses and sizes and all of that mean down at the bottom of the screen, this tool can still help you to figure out the cause of your blue screen error.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=125)** Let me show you the easy way of doing that.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=127)** What I'm going to do is select the dump file.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=130)** And then I'm going to go to 'file', and you'll notice that we have all of these Google search options.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=134)** So we can just say Google search bug check.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=137)** I'll go ahead and click that.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=139)** And so what happens is Windows opens up my web browser, and it automatically performs a Google search on the stop code that was generated as a result of the blue screen error.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=149)** And so the very first result is how to fix 'CRITICAL_PROCESS_DIED' errors in Windows.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=153)** So we're taken to some search results that can help us to solve the problems.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=158)** So, I'm going to go ahead and close this.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=160)** And once again, this tool is from a company called Nirsoft and it's called Blue Screen View.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=165)** And if you need help finding that, I'll go ahead and open up 'help' and go to 'about', and here you can see the file version, when the program was made, and you can see a link to a place where you can go and download this.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=176)** And again, this is a free utility.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/analyzing-a-crash-dump?u=76281980&t=178)** So that's how you analyze a crash dump file in Windows 10.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (4), let (2), self (1), case, (1)
> **UI Navigation:** go to (3), click on (1), select the (1)
> **CLI Commands:** make (1)
> **Env Vars:** critical_process_died (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** install (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980&t=0)** - [Brien] Thank you for watching my course.
>
> **[0:02](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980&t=2)** I truly hope that you enjoyed learning about Windows troubleshooting as much as I enjoyed creating this course for you.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980&t=7)** If you'd like to learn more about Windows then I would encourage you to check out my other LinkedIn Learning courses.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980&t=12)** I've created several other Windows courses and I've also developed courses on key topics such as cloud computing in Azure and AWS and Microsoft 365.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-for-it-support-advanced-troubleshooting/next-steps?u=76281980&t=21)** I'm Brien Posey, thanks again for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Analogies:** such as (1)
> **Speakers:** - [brien] (1)


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