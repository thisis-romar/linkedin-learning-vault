---
type: course
slug: learning-network-troubleshooting-practical-network-diagnostics-and-solutions
url: "https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions"
duration_minutes: 119
duration: 1h 59m
level: Intermediate
updated: 2/19/2025
learners: 137500
skills:
  - Network Troubleshooting
exercise_files: false
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-troubleshooting
status: not-started
created: 2026-04-17
---

# Learning Network Troubleshooting: Practical Network Diagnostics and Solutions

> Troubleshooting network issues is a key skill for a wide range of IT professionals and network professionals. In this course, instructor Robert McMillen teaches you the skills and tools that you need to start network troubleshooting. Robert begins with an overview on how to triage network problems, including basic TCP/IP issues and causes, then steps you through some common home networking and wir

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions) | 1h 59m | Intermediate | 138K learners

## Instructor

- [[Robert McMillen]]

## Skills Covered

- Network Troubleshooting

## Table of Contents

### Introduction

#### Need to troubleshoot your network?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=1)** - [Robert] IT Administrators and Sys Admins of all industries face the same issues every day, when it comes to connecting computers and devices to one another, and to the cloud.
>
> **[0:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=10)** Fixing network problems quickly and efficiently is a priority for any organization.
>
> **[0:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=15)** Troubleshooting your network is more than just figuring out issues with TCP/IP.
>
> **[0:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=19)** In my course, Learning Network Troubleshooting, you'll learn how to troubleshoot and fix wired and wifi network issues, VPN problems for road warriors, and triaging the most important issues when hit with a storm of networking problems.
>
> **[0:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=33)** You'll also learn how to use command line, PowerShell, and Linux troubleshooting tools.
>
> **[0:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=38)** You'll even learn about all the different components that make up a modern network.
>
> **[0:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=42)** My name is Robert McMillen.
>
> **[0:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=44)** I'm a Microsoft Certified Trainer, and Solutions Expert.
>
> **[0:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/need-to-troubleshoot-your-network?u=76281980&t=47)** I invite you to join me to learn all of these new network troubleshooting skills in my course, Learning Network Troubleshooting.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (1), vpn (1)
> **Tools:** command line (1), powershell (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [robert] (1)


### 1. Training Network Problems

#### How to determine the severity of network problems
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=0)** - [Instructor] Network severity triage is all about making sure we handle network issues in the proper order.
>
> **[0:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=7)** The Nielsen Group tells us that in order to triage any type of network severity, we need to review the following ways.
>
> **[0:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=14)** The first is the frequency with which the problem occurs.
>
> **[0:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=18)** Is this a common issue or is it rare?
>
> **[0:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=21)** The impact of the problem.
>
> **[0:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=22)** Once you find out the frequency, then you can see what the impact is.
>
> **[0:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=27)** Will it be easy or difficult for the users to overcome?
>
> **[0:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=30)** And also the persistence of the problem.
>
> **[0:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=32)** Is it a one-time problem that users can overcome once they know about it, or will users repeatedly be bothered by the problem?
>
> **[0:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=39)** Many times we're going to need to get others involved.
>
> **[0:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=43)** Understanding the severity of a network problem should not be up to a single person.
>
> **[0:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=47)** The accounting team may find something more severe than the HR team.
>
> **[0:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=51)** Therefore, it's important to have a notification system in place so severity can be determined.
>
> **[0:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=57)** The IT team may have a narrow view of what's important to an organization, so they may think that the email server is more important than the accounting server, but the owners of a company might feel differently about that.
>
> **[1:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=68)** When you gather the stakeholders, which includes department heads, owners, critical contractors, and others during an outage, it's more likely the proper list of importance will begin to take shape.
>
> **[1:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=80)** So what are the most common networking issues?
>
> **[1:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=84)** Here are six very common networking issues that happen in pretty much every networking environment.
>
> **[1:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=91)** The first would be a malware outbreak on hosts.
>
> **[1:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=94)** Network viruses can completely disable a computer network, so this really should be the first and most important issue that we should take a look at.
>
> **[1:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=103)** There can be a lot of different causes for computer viruses, such as email attachments, malicious software, a lot of different online advertisements, and even social media.
>
> **[1:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=114)** Another could be the lack of access that could be limited to a single user, or a small group, or everyone.
>
> **[2:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=121)** It's important to find out immediately how many people are affected to determine if this is an emergency or just a one-off user issue.
>
> **[2:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=128)** Wireless can play an ever increasing role in an organization's networking and networking problems.
>
> **[2:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=133)** The bandwidth for wireless is very narrow and easily stepped on by other devices.
>
> **[2:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=138)** A centralized wireless management system is the best way to see the severity of a Wi-Fi issue quickly and efficiently through.
>
> **[2:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=145)** Network slowness is more common and more frustrating than a network outage can be because at first there's no way to find the issue.
>
> **[2:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=152)** DNS is usually the culprit and needs to be the first thing to be looked at.
>
> **[2:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=157)** Without name resolution, it doesn't matter if you're connected or not, there is no access to resources.
>
> **[2:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=162)** Another issue can arise when network planning and management go off course when it comes to how many different IP addresses an organization needs.
>
> **[2:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=171)** Each user needs to have at least a single IP address, but now the average user requires up to five or even 10 addresses when you add in VoIP phones, tablets, cell phones, computers, and more.
>
> **[3:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=184)** And internet of things will further add to this issue as more devices come online.
>
> **[3:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=189)** Remote access can be a real hassle, VPNs can be blocked based on their usable protocols at restaurants and hotels among other locations.
>
> **[3:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=197)** Your job will be to determine if the issue is on the organization side or the source network as being the issue keeping the user from connecting.
>
> **[3:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=205)** Understanding the issues that cause a network problem is not the first thing you need to do.
>
> **[3:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-determine-the-severity-of-network-problems?u=76281980&t=210)** The impact and severity of a problem with input from stakeholders should be the first priority when determining how to proceed with mitigating a network outage.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Env Vars:** dns (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Fixing corporate resource issues
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=0)** - [Instructor] There are many corporate resource issues that we have in common.
>
> **[0:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=5)** Most corporations and organizations have the same basic server resources and problems accessing them.
>
> **[0:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=11)** Of course, there are exceptions as well as some technical companies having custom resources.
>
> **[0:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=16)** But this tutorial will get you through the most common ones you can expect as a corporate IT administrator.
>
> **[0:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=24)** When it comes to email, one of the things we need to ask ourselves, is email local or in the cloud?
>
> **[0:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=30)** If email's local, then you shouldn't have any issues accessing it from say Microsoft Outlook or Outlook on the web.
>
> **[0:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=37)** However, if it's in the cloud, we'll need to make sure that we edit DNS to point from our local infrastructure to Microsoft cloud.
>
> **[0:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=45)** How are we connected?
>
> **[0:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=47)** For email, we can connect internally through our LAN, we can connect wirelessly through Wi-Fi, or we can connect through VPN.
>
> **[0:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=56)** We can also connect through MAPI in Microsoft Outlook.
>
> **[1:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=60)** Lots of different ways to connect and lots of different ways to fail.
>
> **[1:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=64)** There's multiple email protocols besides MAPI.
>
> **[1:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=66)** We have Outlook web access or Outlook on the web as it's now called using HTTPS.
>
> **[1:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=72)** And we have some legacy protocols such as POP3 and IMAP.
>
> **[1:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=77)** Do we have our firewalls properly opened on both our laptops as well as our computers and also on the firewalls themselves if our users are outside the network?
>
> **[1:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=88)** And could internal site issues be caused by DNS?
>
> **[1:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=91)** For example, if your public domain is also the name of your active directory domain then when users try to connect to email, they may try to connect internally rather than to the cloud if that's where your email's being hosted.
>
> **[1:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=105)** So we need to make some changes in order to allow DNS to point the right direction for email.
>
> **[1:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=111)** Could our external site issues be caused by an ISP outage?
>
> **[1:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=115)** It should be a simple check, but an important one.
>
> **[1:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=117)** Where does the connection stop?
>
> **[2:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=120)** If we're having routing issues, then it's a good idea to find out where the beginning and where the ending is for our users.
>
> **[2:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=127)** Could the issues be caused by DNS, but not internal, could it be caused by public DNS?
>
> **[2:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=133)** If our users can't connect internally but they can't connect externally, then we need to look at the public DNS setup.
>
> **[2:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=141)** We should also look at IP exhaustion.
>
> **[2:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=143)** Many times we have a certain amount of IP addresses in our DHCP scope and those IPs become exhausted and we need to add additional IPs to our scope or set up an additional scope.
>
> **[2:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=154)** It could be a computer firewall issue.
>
> **[2:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=156)** Not only do we have the Windows firewall to be concerned about, but we also may see a firewall built in by an anti-malware program.
>
> **[2:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=164)** And it could be an individual device outage that you just can't get to because it's remote to your location.
>
> **[2:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=172)** As IT administrators, we need to be able to connect to devices remotely, but sometimes when those devices go down, we're unable to do so and we'll need to have the computer either shipped to us or we'll need to go to that computer.
>
> **[3:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=186)** When it comes to cloud resources, we have a lot of other things that we should also check.
>
> **[3:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=191)** Is there a port open to the cloud resource and is it done properly?
>
> **[3:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=196)** Then we have VPNs to the cloud resource.
>
> **[3:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=198)** Is that VPN down?
>
> **[3:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=201)** Many times when we have access to Azure or AWS from our local LAN, we need to set up a special VPN tunnel from our office to those cloud resources.
>
> **[3:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=212)** And we need to find out if the VPN tunnel is down that may be causing our issues.
>
> **[3:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=216)** Can other resources be reached outside of the cloud?
>
> **[3:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=219)** This is one of the things that you'll need to check.
>
> **[3:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=221)** If the cloud resources are unavailable but you can reach other resources, say at other vendors, then you'll have to look at your connection to that cloud resource.
>
> **[3:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=231)** Video and audio conferencing also has its own set of challenges, such as a lack of connection, or even if you do get connected, you need to be concerned about jittery sound or video.
>
> **[4:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=243)** That can make a call go sideways and make it go completely unusable for the user.
>
> **[4:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=250)** Is quality of service set up correctly?
>
> **[4:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=252)** What this has to do with is if you have a certain amount of bandwidth and it's being used by other services, such as downloading files, social networking, media streaming, maybe you need to set up quality of service so video and audio have some priority.
>
> **[4:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=267)** And could you need an ISP upload increase in speed?
>
> **[4:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=272)** Most connections are asynchronous, meaning that you're going to probably have a faster download speed than upload speed.
>
> **[4:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=278)** So you may need to contact your ISP in order to have that faster upload speed for when you're sending out video and audio.
>
> **[4:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=286)** These are some of the most common resources and features that can be disrupted in most organizations.
>
> **[4:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/fixing-corporate-resource-issues?u=76281980&t=292)** The next step will be to learn how to use the tools that can fix the problems.

> [!info]- Semantic Content
>
> **Env Vars:** dns (6), vpn (4), isp (3), lan (2), mapi (2)
> **CLI Commands:** make (4), find (2), aws (1)
> **Prerequisites:** set up (4), setup (1), you'll need (1)
> **Analogies:** such as (3), for example (1)
> **Code Keywords:** public (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Breaking down basic TCP/IP issues and causes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=0)** - [Narrator] IP structure is another key area of network troubleshooting.
>
> **[0:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=4)** First, we need to determine if you're using IPv4 or IPv6 addressing schemes.
>
> **[0:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=10)** By default you'll use both even if you didn't set it up that way.
>
> **[0:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=13)** And that's because Microsoft and other operating systems create a v4 and a v6 address by default.
>
> **[0:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=19)** Most organizations use v4 on the inside.
>
> **[0:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=22)** Although many use v6 on the outside due to the lack of v4 addresses.
>
> **[0:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=27)** For now we only care about the inside and I'll assume you're using v4.
>
> **[0:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=31)** Without getting into too much of a tutorial on IP addressing, I'll just mention that the most common IP issues are due to incorrect sub-netting.
>
> **[0:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=39)** Here's an IP address that is common in many homes and businesses.
>
> **[0:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=44)** It's an internal addressing scheme because you won't find it on the internet as it is a private subnet that is non-routable outside of a LAN.
>
> **[0:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=53)** Here we see the network portion that all other network devices need to follow in a single subnet.
>
> **[0:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=59)** They all have to start with 192.168.1.
>
> **[1:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=62)** Then they all have to end with a different number.
>
> **[1:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=65)** In this case, the host is a .5.
>
> **[1:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=68)** But every other host must be something other than a .5.
>
> **[1:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=72)** The problem most commonly seen is that the subnet mask may be different for some devices.
>
> **[1:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=77)** It may be 255.255.00 or slash 16 as it's also known, or some other number that will make it impossible for all the other devices to connect to each other.
>
> **[1:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=88)** Therefore, this common problem can be fixed by making sure that all network devices which we call hosts use the same subnet mask and the same network address.
>
> **[1:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=98)** Another common problem has to do with the rest of the IP configuration.
>
> **[1:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=103)** We need to make sure that the user is accessing a valid DNS server and has a way out of this network and into the next.
>
> **[1:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=110)** DNS will do the name resolution so we can do a simple DNS test to confirm this.
>
> **[1:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=115)** The gateway points us to the door we can use to leave our network.
>
> **[1:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=119)** And the router we connect to is the driver that will be get us there.
>
> **[2:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=123)** Let's look at a couple of command line tools that we can use to check if this is all working properly.
>
> **[2:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=129)** I'm in a command prompt on a server and I'm going to type IP config.
>
> **[2:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=134)** And that stands for IP configuration.
>
> **[2:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=137)** And when I hit enter, we can see that my IPv4 address is 192.168.21.110.
>
> **[2:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=143)** I also have a subnet mask that has three 255s in it which means that the 192.168.21 is my network address.
>
> **[2:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=151)** And then the last part of that is my host address.
>
> **[2:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=155)** I also have a second IP address as well at .199 using the same subnet mask.
>
> **[2:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=161)** Sometimes we need multiple different IP addresses for various different reasons.
>
> **[2:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=164)** One could be I'm routing to a different subnet.
>
> **[2:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=166)** Another could be that I'm also hosting VPN which requires a separate IP address.
>
> **[2:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=171)** And then one of the important things that we see here is the gateway.
>
> **[2:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=174)** The default gateway is shown as 21.1.
>
> **[2:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=178)** If there's no gateway shown, then I can't get out to any other VLAN or subnet on my network, and I also cannot get out to the internet.
>
> **[3:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=186)** So let's do a trace route and we're going to use the dash D switch.
>
> **[3:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=191)** And what that does is it keeps things from resolving names to IP addresses, which makes things just take longer.
>
> **[3:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=197)** So I'm going to put in an IP address here for Google DNS.
>
> **[3:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=202)** Let's watch the route that it takes to get there.
>
> **[3:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=211)** After the fifth hop, we can see that there's a delay.
>
> **[3:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=214)** That delay could mean that there's a route down and it could be routing us through another section or another router after it fails to be able to make it through that route.
>
> **[3:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=224)** Then after that, it fails over to the other route and we see that it takes us 10 hops to get there.
>
> **[3:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=230)** There's a maximum of 30 hops.
>
> **[3:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=232)** If it gets over 30 hops, you're probably in a routing loop and you're not going to get your destination and it's going to time out.
>
> **[3:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=239)** Another reason for a request timed out on a router between destination A and B could be that they have certain protocols turned off that don't allow that to happen.
>
> **[4:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=249)** In any case, we did get to our destination and that's the most important thing.
>
> **[4:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=254)** Now what I'm going to do is I'm going to go into control panel and I'm going to go to Network and Sharing Center.
>
> **[4:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=262)** And since this is a static IP address I can easily turn off my gateway.
>
> **[4:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=273)** And what I'll do is I'll just erase it here, click okay, and okay.
>
> **[4:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=280)** I'll go back into my command prompt and I'll run the same command again.
>
> **[4:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=287)** And we can see, I didn't even get out of my internal LAN to be able to go anywhere else.
>
> **[4:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=293)** It stopped me because I cannot get out through my router out to the next hop or the hop after that.
>
> **[4:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=299)** However, I can ping other IP addresses that are still in my same LAN.
>
> **[5:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=309)** It didn't affect what's happening locally because I'm on the same subnet as all these other computers.
>
> **[5:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=315)** However, I cannot get out after that subnet.
>
> **[5:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=319)** In order to properly get out to other resources outside of our network we need to look at IP addressing, DNS, and gateways.
>
> **[5:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/breaking-down-basic-tcp-ip-issues-and-causes?u=76281980&t=328)** Once you know, your IP address information is correct, we can look further down the line to see where things break.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), default. (1), private (1), this. (1)
> **Env Vars:** dns (5), lan (3), vpn (1), vlan (1)
> **Versions:** 192.168.21 (2), 192.168.1 (1), 255.255.00 (1), 21.1 (1)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is a  (2), stands for (1), means that (1)
> **Tools:** command prompt (2), command line (1)
> **Speakers:** - [narrator] (1)


### 2. Troubleshooting Remote User Network Problems

#### Common home networking issues
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=0)** - [Instructor] Home networking has its own set of common issues such as remote access to the corporate network.
>
> **[0:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=7)** Many times people try to connect using remote desktop or VPN or both.
>
> **[0:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=13)** Then there's problems with printing.
>
> **[0:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=15)** And that could be when you're remoted into another server but you're trying to print locally at your home.
>
> **[0:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=22)** And you can't see other PCs on the network and it's not just PCs, but other devices as well because network browsing is just not working.
>
> **[0:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=30)** Another issue would be slowness.
>
> **[0:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=32)** You just can't get enough speed going to make work worthwhile.
>
> **[0:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=36)** Therefore all you have is frustration when you try to get any work done.
>
> **[0:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=41)** Or you can't get out to the internet at all.
>
> **[0:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=44)** And that could be a problem with your computer or the internet provider, DNS, and many other things.
>
> **[0:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=50)** You also could have connectivity but then you keep getting dropped.
>
> **[0:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=54)** This is more likely to happen in a wireless situation but it can happen with wired as well.
>
> **[0:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=59)** Let's take a look at the most likely reasons for each of these issues.
>
> **[1:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=63)** When using remote desktop you need to make sure that you're in the correct group that has access into the remote desktop server.
>
> **[1:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=72)** So if we go into control panel items, and then we go into system, and then remote settings, you want to make sure that the allow remote connections to this computer is turned on.
>
> **[1:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=85)** We turn on the additional security feature with network level authentication on domain to join computers.
>
> **[1:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=92)** If you don't use domain joint computers you don't need to check this box.
>
> **[1:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=96)** You'll need to make sure you click select users and add in the users that you want.
>
> **[1:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=101)** Typically you'll add in the remote desktop users group, and then you'll just want to make sure that all the users that need to have access are in that group in active directory.
>
> **[1:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=113)** You can also create your own custom group.
>
> **[1:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=115)** It doesn't have to be called remote desktop users, but when we go into active directory users and computers, any group that you choose in the selected users group, needs to be inside the group in active directory.
>
> **[2:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=130)** I'm going to create a new group called RDP short for remote desktop users group.
>
> **[2:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=138)** I'll leave all the defaults the way they are.
>
> **[2:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=141)** And then I'll go to where it says members click add, I'll put in Mary click check names.
>
> **[2:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=149)** And now all I have to do is add people into this group rather than individually give them access.
>
> **[2:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=156)** So when I go back in to my remote settings, I can simply add in the group RDP.
>
> **[2:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=167)** And now anybody in that group will have access into our server.
>
> **[2:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=173)** Another thing you want to check is that the firewall is allowing that traffic.
>
> **[2:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=178)** So if go we back into all control panel items and then go into the windows defender firewall, you want to make sure that port 3389 is open.
>
> **[3:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=190)** I'll click on advanced settings, and then inbound rules, and then I'll scroll down to the remote desktop area and just make sure that all of these rules are enabled.
>
> **[3:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=206)** If they're not enabled you'll see that there is no green check mark next to them.
>
> **[3:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=213)** And this not only works for servers but it also works with Windows 10 professional or enterprise workstation operating systems as well.
>
> **[3:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=221)** However in a server you can have many different people all access the server at the same time.
>
> **[3:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=226)** But on a Windows 10 computer you can only have one access at a time.
>
> **[3:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=230)** Another thing we want to check would be the routing and remote access.
>
> **[3:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=234)** If you're using the Windows server as the VPN host.
>
> **[3:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=239)** You want to make sure that the green arrow is on and then you go into properties, make sure everything is set up the way it's supposed to be based on the type of VPN you're using.
>
> **[4:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=250)** If you're using multifactor authentication you may also need to add in various different authentication methods based on the vendor.
>
> **[4:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=257)** By using layer two tunneling protocol or Ike V2 make sure you use a pre shared key or a certificate.
>
> **[4:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=263)** And if you're using SSL VPN also called SSTP, make sure that you have a valid certificate.
>
> **[4:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=270)** And the expiration date is not past the date that you're using it.
>
> **[4:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=277)** You also want to look at the firewall that you're connecting through.
>
> **[4:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=281)** For instance, I'm using a Cisco ASA firewall and I want to make sure that the ports are open for all the VPN or remote desktop connections.
>
> **[4:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=291)** And you can see here under the access list.
>
> **[4:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=295)** And then the right hand side equals 3389.
>
> **[4:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=297)** Those are all the ports for remote desktop.
>
> **[5:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=300)** The ports for VPN here at the bottom, where it starts with PPTP which stands for point to point tunneling protocol.
>
> **[5:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=306)** Then we see the three rules that are needed for layer two tunneling protocol.
>
> **[5:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=312)** And then after that we can see HTTPS for SSTP VPN.
>
> **[5:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=316)** If those ports are being forwarded to the server that you're hosting the VPN or the remote desktop, then that would be a reason why it is that you can't connect.
>
> **[5:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=325)** I'm actually remoted into this server through remote desktop.
>
> **[5:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=330)** So you can see I'm using the ports 3389 going into the remote site.
>
> **[5:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=336)** And then from there I'm bouncing over to the domain controller.
>
> **[5:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=339)** So I'm actually doubly remoted in.
>
> **[5:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=342)** If you're having printing issues trying to print through remote desktop or from the office, then you may want to take a look at the printer drivers on your Windows 10 computer if you're using Windows.
>
> **[5:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=354)** And also if you're using Macintosh or Linux look for drivers there as well.
>
> **[5:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=358)** You can see my default printer drivers for the OfficeJet 3830.
>
> **[6:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=362)** So you want to make sure that you look at the printing device that's set as default and set the one that is the one that you want to print to.
>
> **[6:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=371)** You may also need to go out to the vendor to update to the latest print drivers every time windows doesn't update.
>
> **[6:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=378)** And that's because sometimes the updates will break the drivers.
>
> **[6:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=381)** You can also click on the device you want and click on manage and you set on default if the right one is not set to default.
>
> **[6:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=388)** So that way when you click print it automatically goes to that.
>
> **[6:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=391)** If you're remoted into another server as I am here, you need to make sure that you see the same print drivers for your local computer that you're seeing in the remote server.
>
> **[6:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=402)** So you can see, I won't be able to print because I don't have the correct printer drivers on my remote server.
>
> **[6:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=408)** So I would need to go to [hp.com](https://hp.com), go to support, and from there, I would need to download the proper print drivers in order to be able to print through remote desktop.
>
> **[6:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=418)** If you can't see other computers on your network we click on file explorer, and then we click on network.
>
> **[7:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=426)** Then you may need to turn network discovery on.
>
> **[7:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=432)** So we'll click a little bar choose turn on network discovery and file sharing.
>
> **[7:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=438)** And now we can see our devices.
>
> **[7:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=441)** You may also need to go into services.MSC.
>
> **[7:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=446)** And when you open up the services, you want to make sure that the services you see on the right-hand side, DNS client, function discovery, et cetera.
>
> **[7:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=453)** Those are all set to automatic and they're all started.
>
> **[7:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=456)** And you can simply do that by double clicking on the service and just make sure that the start-up type is set to automatic.
>
> **[7:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=463)** And then you can click start.
>
> **[7:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=465)** In our case this particular one is already started and running.
>
> **[7:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=469)** For slowness, as well as not being able to get out to the internet, you'll want to make sure that you have all your IP information.
>
> **[8:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=480)** So we can see here that my IP address is 192.168.21.209 That's good, that means I have an IP address.
>
> **[8:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=488)** and my gateway is 21.1.
>
> **[8:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=490)** So if you don't have a gateway that means you cannot get out to the internet.
>
> **[8:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=494)** If you have a DNS server that you see listed here make sure that you can ping that server to make sure that it's up and running.
>
> **[8:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=504)** And many times that's where your problem will be with either a missing gateway or a DNS server that's not up and running.
>
> **[8:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=512)** Dropped connections can usually be found with wireless and that is you may need more access points or a booster device.
>
> **[8:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=519)** And if you're having drop connections with wired it could be faulty wiring so you may need to get a cable tester or have someone come in to test your cabling.
>
> **[8:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=528)** Most home networking issues have the same problems no matter where you are.
>
> **[8:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-networking-issues?u=76281980&t=532)** These suggested fixes should get most users back up and running.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (8), dns (4), rdp (2), sstp (2), ssl (1)
> **CLI Commands:** make (19)
> **UI Navigation:** click on (5), go to (3), scroll down (1)
> **Code Keywords:** let (1), default. (1), function (1)
> **Versions:** 192.168.21 (1), 21.1 (1)
> **Definitions:** short for (1), stands for (1)
> **Analogies:** such as (1), for instance (1)
> **Prerequisites:** you'll need (1), set up (1)

#### Common home wireless issues
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=0)** - Wifi connections are becoming the dominant type of connection between the PC and the corporate network as well as the internet in both the home and the office.
>
> **[0:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=10)** So, it's likely that system administrators going forward will be troubleshooting wireless issues just as much if not more than wired ones.
>
> **[0:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=19)** One of the most common reasons that a wireless computer cannot connect is they don't have an IP address and that could be because they can't find a DHCP server or because there's some other problem with the wireless card being able to communicate with the SSID of the WiFi access point.
>
> **[0:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=37)** Another one would be poor reception and this could be because of concrete floors or walls or other barriers, because remember wireless also known as WiFi in this particular case is line of sight and that means if you can't see each other then connection is happening by bouncing off of walls and ceilings and floors which just isn't as good as a direct line of sight.
>
> **[1:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=60)** Missing DNS is another one.
>
> **[1:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=61)** If you get an IP address but you can't actually connect to anything by name then you don't have a good DNS connection.
>
> **[1:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=69)** DNS could be internal to the network or it could be external at a public DNS service.
>
> **[1:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=75)** And if one of those two is down and you don't have any alternatives then you're not going to be able to connect anything by name.
>
> **[1:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=83)** On the wireless access point itself, we need to look at the channel selection.
>
> **[1:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=87)** Many times, there's lots of other wireless access points in the area and there may be channel overlap and we may need to change the WiFi signal type.
>
> **[1:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=97)** There's many different types of signals such as A, B, G, N, et cetera.
>
> **[1:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=102)** And it's possible that the device that you're trying to connect from is not capable of using the signal type that's coming from the wireless access point.
>
> **[1:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=112)** So, you need to make sure that you check the wireless Nics capabilities before you buy or use any wireless access point.
>
> **[2:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=122)** And we also need to look at upgrading equipment.
>
> **[2:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=125)** It's possible that the equipment itself might be too old either on the client side or on the wireless access points side.
>
> **[2:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=132)** Even equipment in good working order needs to be upgraded every two to four years.
>
> **[2:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=138)** Here, we see a wireless access point and there's lots of different things that we can look at here to make sure that everything is working in order.
>
> **[2:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=146)** For instance, I'm going to take a look at under network wireless.
>
> **[2:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=149)** Now, even if you're not using the same brand of wireless access point, it's possible that you're going to see the same types of menus.
>
> **[2:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=157)** Most current wireless access points are going to have both the 2.4GHz and 5GHz antenna.
>
> **[2:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=163)** And you'll notice when you hit the dropdown on each of these, you're going to see different wireless modes.
>
> **[2:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=169)** So, we see under 2.4, we're only capable of BG or N however, if we go over to 5GHz, we're going to see NAC and you might also see a X if you have the latest.
>
> **[3:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=183)** 802 11 A used to be just on 2.4 GHz, it got updated and now moved over to 5GHz.
>
> **[3:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=190)** However, most client devices are no longer A capable.
>
> **[3:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=194)** If you can get away with it, I recommend that you disable the 2.4 GHz operation mode.
>
> **[3:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=201)** And that's because when you transmit both 2.4 and 5GHz, you end up slowing both of them down.
>
> **[3:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=207)** So, it's best if you're able to disable one or the other and the best one in this case would be to disable 2.4GHz.
>
> **[3:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=214)** When I scroll down, we can see the wireless settings for 2.4GHz, as well as 5GHz, I can disable my 2.4GHz just by unchecking that and I can also edit my 5GHz and it opens up a new tab.
>
> **[3:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=230)** Here's where we want to make sure the security is set up properly.
>
> **[3:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=233)** If we had it set to disable although it's going to run very quickly, it's going to become a security issue.
>
> **[3:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=239)** And the current best security right now for most networks is going to be WPA2 either Enterprise or Pre Shared Key.
>
> **[4:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=249)** Pre Shared Key is just going to use a passphrase similar to a password you might use to log into your computer.
>
> **[4:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=255)** And you want to make sure that your encryption type is set just to AES not to AEs and TKIP.
>
> **[4:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=260)** And that's because TKIP uses backwards compatibility that will lower your security.
>
> **[4:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=266)** If you're able to set up a radius server then it's best to go WPA2-Enterprise.
>
> **[4:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=271)** Now that requires a lot more setup and more knowledge but by setting this up you're going to end up using separate usernames and passwords for each user that connects.
>
> **[4:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=281)** And you can even connect that to active directory, so that way they use the same username and password they use to log into their windows computer.
>
> **[4:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=290)** We're going to close the 5GHz settings and take a look at Guest.
>
> **[4:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=295)** A lot of different corporate offices are going to have a Guest Network.
>
> **[5:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=300)** And it's a good idea because what it does is it only allows the user to connect to the internet and not to any internal resources.
>
> **[5:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=309)** And that keeps those guest users from accidentally or on purpose, getting into any resources that they shouldn't be getting into.
>
> **[5:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=318)** You can see that this model also has a different sub-net as well as a DHCP server.
>
> **[5:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=324)** And this DHCP server operates independently from the DHCP server you might have on your windows server or a router or a switch.
>
> **[5:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=332)** This will assign IP addresses to guest users and it will allow them to get out to the internet and nothing else.
>
> **[5:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=340)** Another area to look at would be the channel on which we're broadcasting.
>
> **[5:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=344)** We can see that in most cases, the channels are set to auto, however, you can go in and manually select a channel based on the various different quality that you get.
>
> **[5:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=355)** So, it's not a bad idea just to things out and see what type of quality your clients are getting connectivity wise.
>
> **[6:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=362)** If you're seeing a lot of issues with connections you may want to try changing to a different channel and you can see under the 2.4GHz you're seeing different channels.
>
> **[6:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=373)** Now, most of these channels overlap just a little bit with each other, except for one, six and 11 on the 2.4GHz but the 5GHz, there are 24 non-overlapping channels.
>
> **[6:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=387)** So, you have lots more options where you don't have to worry about having an issue where one is stepping on the other because of overlapping.
>
> **[6:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=395)** In many wireless access points, you're also going to see a tools menu, and these are the same types of tools that you would see in a windows computer, or Linux computer, you see Ping, Traceroute, NSlookup, Speed Test, Device Discovery, all these different things can help determine if you're having an issue from the access point itself.
>
> **[6:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=415)** It doesn't help if a computer can connect to the access point, but the access point can not connect to anything else.
>
> **[7:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=420)** So, for instance, I'll just go ahead and put in an IP address just to see if we can ping it.
>
> **[7:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=430)** So, it's collecting data.
>
> **[7:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=431)** Sometimes it takes a little bit longer from these devices because they have lower end processors and we can see there is the result, and there are ping times here as well.
>
> **[7:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=439)** So we know that that's working properly.
>
> **[7:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=441)** We can also traceroute out to the internet And we'll use Google's DNS server and we can see that that's successful as well.
>
> **[7:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=452)** Wireless problems can be difficult to overcome, however, if you can connect to a wired connection in your home or office ISP switch then you can avoid all these issues as far as wireless goes.
>
> **[7:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=464)** However, we know that that's not going to be a reality going forward since most people are connecting through WiFi.
>
> **[7:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-home-wireless-issues?u=76281980&t=471)** If that is the case, then these troubleshooting techniques should be able to assist most users with most problems.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5), dhcp (4), wpa2 (2), tkip (2), ssid (1)
> **Code Keywords:** switch (2), else. (2), public (1), type. (1), case, (1)
> **CLI Commands:** make (4), find (1)
> **Versions:** 2.4 (4)
> **Analogies:** for instance (2), such as (1), similar to (1)
> **Prerequisites:** set up (2), setup (1)
> **UI Navigation:** dropdown (1), scroll down (1)
> **Definitions:** known as (1)

#### Internet provider problems
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=0)** - [Instructor] Sometimes we're having problems getting out to the internet, and it could be multiple different reasons as to why that's happening.
>
> **[0:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=6)** It could be a problem with your server, it could be a problem with your Windows workstation, such as Windows 11.
>
> **[0:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=12)** I'm in a Windows 2025 server, and what I'm going to do is I'm going to go to the Start button, and from here I'm going to go to settings.
>
> **[0:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=21)** Inside settings, it's going to tell me the IP address information.
>
> **[0:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=26)** On the left hand side, I'll click on network and internet, and then I'll click on ethernet.
>
> **[0:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=33)** And under ethernet, we can see the IP address is set to manual.
>
> **[0:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=37)** That means it's a static IP address.
>
> **[0:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=39)** I manually entered that IP address, and it's not going to change even if I restart my server.
>
> **[0:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=45)** It also tells me the subnet mask as well as the gateway.
>
> **[0:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=48)** So you want to make sure all these things match before going further, because if they don't, such as if your gateway is set to an IP address that is not reachable, then you know that's the reason why it is you can't get out to the internet.
>
> **[1:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=63)** Another important area is going to be the DNS server.
>
> **[1:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=65)** You want to make sure the DNS server is set to an actual DNS server on the inside of your network if you have a computer or a server that's joined to the domain.
>
> **[1:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=74)** Now, if you have a computer that's not joined to the domain, it just has to be a public DNS server that is reachable.
>
> **[1:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=80)** And we'll take a look at some tools that will help you figure that out.
>
> **[1:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=84)** If you're using IPV6, you can look at those as well.
>
> **[1:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=86)** In my case, I am not, but you do want to make sure that IPV6 is set up properly if that's the case.
>
> **[1:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=93)** But in most organizations, you're going to see they're using IPV4 on the inside, and about half will be using IPV4 on the outside IP address on say the firewall router, and the other half will be using IPV6.
>
> **[1:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=106)** So I'm going to click on edit under the IP address, and you can see IPV4 is turned on.
>
> **[1:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=111)** So of course that's going to be one of the important things.
>
> **[1:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=114)** And then once again, the subnet mask and the gateway, as well as the DNS.
>
> **[1:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=119)** It's always a good idea to add an alternate DNS.
>
> **[2:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=122)** I know I have one other DNS server that's also a domain controller at .93, so I'll go ahead and add that.
>
> **[2:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=129)** And if DNS supports DNS over HTTPS for encrypted types of services, you can go ahead and add that as well.
>
> **[2:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=136)** I'm going to click save.
>
> **[2:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=139)** And now you can see my additional DNS server that's in the list.
>
> **[2:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=142)** That gives me some high availability in case the other DNS server is unreachable, which would keep me from reaching the internet.
>
> **[2:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=149)** Now let's look at some command line tools that can also help us out.
>
> **[2:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=153)** I'm going to go to the search box at the bottom and type in CMD for command.
>
> **[2:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=160)** You could also open up PowerShell, as that also has the command aliases built into it.
>
> **[2:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=165)** So either one should work.
>
> **[2:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=168)** After clearing the screen, I want to start by pinging my DNS server.
>
> **[2:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=172)** So I want to make sure that I can reach that at .92 or .93, either one.
>
> **[2:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=178)** And of course we can reach that.
>
> **[3:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=180)** And that means that DNS is not going to be a problem.
>
> **[3:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=183)** Domain name services, which resolves names to IP address, is not going to be an issue in this case.
>
> **[3:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=189)** Windows servers and clients by default have pinging turned off, with the exception of domain controllers.
>
> **[3:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=194)** And this DNS servers also a domain controller.
>
> **[3:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=197)** If for some reason you can't ping that IP address, but you do see it in the address resolution protocol table, by typing arp -a, then you know that it is up and running.
>
> **[3:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=210)** So here you can see my .92 as well as my .93.
>
> **[3:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=214)** It just means that pinging would be blocked, and that's okay, as long as we know that it's up and running, then it should be working properly.
>
> **[3:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=222)** I'll go ahead and clear the screen once again.
>
> **[3:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=225)** And now we're going to trace route, which in Windows terms is going to be tracert, and we're going to trace all the way out to Google's DNS server.
>
> **[3:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=236)** Now, if you don't want it to resolve all the different names along the way, which I like to not have happen, then you can just type in the -d command.
>
> **[4:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=243)** That way it just goes by IP addresses instead of trying to resolve by names to IP addresses.
>
> **[4:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=249)** Because at this point, I just want to see if I'm reaching this IP address, I don't really need to resolve the names along the way.
>
> **[4:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=256)** You might also see some asterisks.
>
> **[4:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=258)** That's okay.
>
> **[4:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=259)** Sometimes either you're going to see a timeout or it's just going to refuse to send a ping back, but in most cases, you're going to see that it will get to its destination if there's no routing issues.
>
> **[4:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=272)** Another thing to watch for is how many hops.
>
> **[4:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=274)** In this case, you can see it's 12 hops.
>
> **[4:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=276)** Now we're no more than 30 hops from any place around the world.
>
> **[4:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=280)** So if you go further than 30 hops, that means there's a routing loop or a routing problem out on the internet most likely, could also be within your network, that is causing the packets to not get to their destination.
>
> **[4:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=292)** And so further examination should be taken at that point.
>
> **[4:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=296)** So here we can see 12 hops.
>
> **[4:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=298)** So that is not a bad amount of hops.
>
> **[5:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=301)** I would say anywhere from eight to 15 would be something you should expect.
>
> **[5:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=305)** Now take a look at the milliseconds.
>
> **[5:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=307)** In my case, reaching 8.8.8.8, which is a Google DNS server, is only taking roughly five milliseconds.
>
> **[5:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=315)** I mean, there's some packets that are going to be less, there's going to be some packets that are more, but roughly around five milliseconds, which is really good.
>
> **[5:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=322)** If you see this in the hundreds or the thousands of milliseconds, that would be another reason to say, okay, I've got a problem with the DNS server I'm trying to reach.
>
> **[5:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=331)** So let's try a different DNS server.
>
> **[5:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=333)** So you can contact your internet service provider and you can ask them, what DNS servers should I be using?
>
> **[5:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=339)** And then you'll be able to change to those instead.
>
> **[5:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=342)** But once again, we're in a domain controller, so you don't change it in the DNS settings, you change it in another location.
>
> **[5:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=349)** So I'm going to go to tools, and then click on DNS.
>
> **[5:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=354)** So this is the DNS manager on the domain controller, and you want to make sure, if I go to properties, that there's a forwarder going out to whatever public IP address you want to hit.
>
> **[6:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=366)** So in this case, this is trying to get to an internal address.
>
> **[6:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=369)** That's not going to help me.
>
> **[6:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=370)** So I can click edit, I can go ahead and delete that, and I can replace it with a public DNS server, which would be the more correct way of setting this up.
>
> **[6:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=381)** So click apply, click okay.
>
> **[6:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=383)** And now what happens is anytime the domain controller doesn't have the resource that the client is looking for, it's going to forward that out to Google's DNS server.
>
> **[6:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=393)** And that's exactly what you want.
>
> **[6:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=396)** So what type of resource would not be something that the server would have.
>
> **[6:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=400)** Well, if a client is trying to get to a website, well that's something that the local domain controller is probably not going to be hosting.
>
> **[6:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=407)** It could be, but in most cases, if it's a public website, of course, like Google or MSN, this other sites, that's all hosted publicly someplace else.
>
> **[6:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=415)** So you have to have the public DNS server represented somewhere in those forwarders tab as you had just seen.
>
> **[7:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=422)** Let's switch over to a Windows 11 client and take a look there.
>
> **[7:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=427)** I'm on a Windows 11 client and I'm going to click on settings once again, and I'll click on network and internet, and click on ethernet.
>
> **[7:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=437)** And here you can see basically the same type of setup as the Windows 2025 server.
>
> **[7:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=442)** We see the static IP address, you can see the DNS servers, things like that.
>
> **[7:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=446)** Now, if you have a DHCP server, which automatically assigns IP addresses, you can take advantage of that by going onto the edit button that you see here and then changing from manual to automatic DHCP.
>
> **[7:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=459)** And then that will assign an IP address from the DHCP server.
>
> **[7:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=463)** And of course, most clients are going to be set up with DHCP, so you want to make sure that DHCP has been properly assigned to the client and it shows DNS.
>
> **[7:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=473)** Now I'm not going to do that, because it's going to change my IP address, and I'll lose connectivity to this remote computer, but that would be how you would switch over to that.
>
> **[8:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=480)** So you want to make sure DNS is there, the IP address is there, and it's all grabbing that IP information from the DHCP server.
>
> **[8:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=489)** Now we can also do that by going to a command prompt once again, and we can see this information, and I'll go ahead and change the directory and clear the screen, and we can see that information by typing in ipconfig but add the forward slash all to that.
>
> **[8:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=509)** And that tells us information such as the IP address, IPV4 and IPV6, as well as the DNS server.
>
> **[8:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=517)** And if it was receiving an IP from a DHCP server, you would see DHCP enabled yes.
>
> **[8:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=523)** Instead it says no.
>
> **[8:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=526)** Earlier I showed you trace route, which you can certainly run from the client as well.
>
> **[8:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=530)** But there's another tool called path ping, and it's very similar to the trace route command.
>
> **[8:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=537)** However, you end up getting the information sent to you a little bit differently, and it also takes a little bit longer for it to complete.
>
> **[9:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=544)** So I'll go ahead and let it complete and then we'll take a look at the information it shows.
>
> **[9:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=550)** And after about a minute, we can see that the trace is complete using path ping.
>
> **[9:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=555)** So you can see it does look a lot different than trace route, but it does give us information in a slightly different format.
>
> **[9:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=561)** You can use whichever way works best for you.
>
> **[9:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=564)** Determining if your computer or the internet provider is the problem, it requires many different places to check.
>
> **[9:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/internet-provider-problems?u=76281980&t=570)** So call your internet provider to check that everything is working as expected if everything is working well on your end.

> [!info]- Semantic Content
>
> **Env Vars:** dns (29), dhcp (8), ipv6 (4), ipv4 (4), https (1)
> **Code Keywords:** public (5), case, (4), let (4), static (2), case. (2)
> **UI Navigation:** click on (7), go to (5)
> **CLI Commands:** make (7)
> **Analogies:** such as (3), similar to (1)
> **Tools:** command line (1), powershell (1), command prompt (1)
> **Definitions:** means that (2), is a  (1)
> **Prerequisites:** set up (2), setup (1)


### 3. Troubleshooting Corporate Wireless Network Problems

#### Most common issues with corporate wireless
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=0)** - [Instructor] Cybersecurity has become one of the key concerns for many in our virtual world, especially regarding cybersecurity for personal and privacy rights.
>
> **[0:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=10)** There's technically no completely safe wireless.
>
> **[0:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=13)** There are so many ways to hack a wifi network that needs to be a main concern with data transmission.
>
> **[0:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=19)** The best security currently is AES, or Advanced Encryption Service Encryption, with the latest wireless protocols.
>
> **[0:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=26)** You're more likely to get hacked in a public wifi than private, but all wireless traffic should be suspect.
>
> **[0:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=32)** And this is due to spoofing gateways by using man in the middle attacks, wireless sniffers, and more.
>
> **[0:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=39)** Wireless antenna dampeners can help keep from getting hacked outside your office from war drivers.
>
> **[0:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=46)** Even when we're connected to the internet, many users commonly experience unstable or slow connection speeds with their wireless connections.
>
> **[0:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=53)** This is especially severe in areas where multiple access points are installed.
>
> **[0:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=58)** Signal interference is one of the reasons for the unstable connections.
>
> **[1:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=62)** Interference can be the result of equipment, coupled with different electromagnetic waves.
>
> **[1:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=68)** Wireless dead spots are also an issue, due to many thick walls, and multiple stories.
>
> **[1:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=73)** These can all be mitigated by using heat maps and centralized wireless.
>
> **[1:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=78)** Heat maps tell you where there's going to be dead spots, or too many wifi signals that can cause cross-talk.
>
> **[1:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=84)** Many higher-end products, like Cisco and Aruba, support this type of technology.
>
> **[1:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=88)** There are also handheld tools to detect signal interference that are on the market.
>
> **[1:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=93)** One of the greatest challenges in managing a wireless connection is ensuring that every user within that environment is content with their connection speed and usability.
>
> **[1:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=103)** Some users will download huge files, such as movies and podcasts, while others barely use wireless at all, and this can be mitigated by setting up quality of service, so no user can utilize over a certain amount of bandwidth.
>
> **[1:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=116)** Additional access points running on separate channels in the high use areas can also help.
>
> **[2:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=122)** Check that each wireless access point has the correct channel that they're going to broadcast on, so they don't overlap with other nearby access points.
>
> **[2:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=132)** Channel overlap can happen when you're not truly on an individual channel.
>
> **[2:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=137)** Many of the channels overlap with other channels.
>
> **[2:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=140)** There's more channels with five gigahertz than there are with 2.4 gigahertz, but check with your vendor to make sure that you're not using channels that may overlap with others in the area.
>
> **[2:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=152)** There are many different wifi standards, such as 802.11, A, B, G, N, AC, and AX.
>
> **[2:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=158)** What needs to be done is to find out what users' devices are capable with your wireless access points.
>
> **[2:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=165)** If you no longer need N or below, then you can get better speeds by eliminating those protocols with your SSID options.
>
> **[2:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=172)** The more protocols going through your antennas, the slower things will be, especially at the 2.4 gigahertz range.
>
> **[2:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=179)** Try to stay only with five gigahertz when possible, otherwise, ask management to upgrade your equipment.
>
> **[3:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/most-common-issues-with-corporate-wireless?u=76281980&t=186)** Many wireless problems can appear in your network, but all of them are resolvable by utilizing troubleshooting tools, and the latest wireless equipment.

> [!info]- Semantic Content
>
> **Versions:** 2.4 (2), 802.11 (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** public (1), private (1)
> **Env Vars:** aes (1), ssid (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Troubleshooting Wi-Fi interference
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=0)** - [Narrator] There's many different devices that can cause Wi-Fi interference that you should be aware of.
>
> **[0:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=5)** Many appliances such as microwaves and fluorescent lights, there are power cables and adapters, they all emit signals that can interfere with Wi-Fi.
>
> **[0:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=14)** The best thing to do would be to switch to five gigahertz Wi-Fi instead of 2.4 to get better signal strength.
>
> **[0:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=21)** Wireless devices including wireless headsets, keyboards, mice, cordless phones, baby monitors, and other wireless devices can also cause problems with Wi-Fi.
>
> **[0:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=32)** Gadgets commonly used such as video game controllers, wireless security cameras, radio motion detectors and others can also have issues.
>
> **[0:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=41)** Five gigahertz, once again, can help with these types of interferences.
>
> **[0:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=46)** If you live in an area with dense populations such as apartment buildings, then the growth in Wi-Fi network density, especially in populated areas, has increased among wireless networks and that can cause all types of interference.
>
> **[1:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=61)** Strong Wi-Fi signals in close proximity to each other can reduce performance by both networks that are wired, as well as wireless because of shared network connections.
>
> **[1:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=72)** And new public Wi-Fi networks are adding to this type of interference.
>
> **[1:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=76)** Dampener antennas can keep those signals from entering your space and can be placed safely on the outside of a building, or inside pointing out.
>
> **[1:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=85)** Thick materials such as concrete, metal and stone are not good for wireless signals.
>
> **[1:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=90)** Reflective surfaces such as mirrors and foil found in modern housing insulation can cause erratic Wi-Fi signals.
>
> **[1:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=98)** Adding more wireless access points can usually fix the problem.
>
> **[1:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=102)** Many people don't know this, but Wi-Fi works on line of sight.
>
> **[1:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=106)** So if a computers wireless network interface card and wireless access point can't see each other, then they have to rely on bouncing signals off floors, walls and ceilings to get to each other.
>
> **[1:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=116)** The more hops and the duller the material, the more the wireless will slow down.
>
> **[2:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=121)** Placing devices in areas that have better line of sight are the way to go.
>
> **[2:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-wi-fi-interference?u=76281980&t=125)** Signal interference is a big part of trouble shooting your network and this will become increasingly difficult as more Wi-Fi capable devices enter your network.

> [!info]- Semantic Content
>
> **Analogies:** such as (5)
> **Code Keywords:** switch (1), public (1), this, (1), interface (1)
> **Versions:** 2.4 (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [narrator] (1)


### 4. Troubleshooting VPN Network Problems

#### What VPN types work in hotels and restaurants
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=0)** - [Instructor] I'm going to review some of the different VPNs that you'll likely encounter as a system administrator.
>
> **[0:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=6)** IPsec is also known as IP security, is used heavily by Cisco, SonicWall, OpenVPN and many others.
>
> **[0:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=15)** SSTP or SSL is used by Windows, Cisco AnyConnect and others as well.
>
> **[0:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=21)** This relies on certificate based security and IKEv2 which stands for internet key exchange, which is known in a Windows server.
>
> **[0:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=29)** Is very useful for slow connections where you don't have to be reauthenticated in case your connection gets dropped.
>
> **[0:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=36)** Layer 2 Tunneling Protocol or L2TP is being used in Windows servers as well as Apple Macintosh and others.
>
> **[0:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=45)** There's two different types of L2TP.
>
> **[0:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=47)** One is password based and the other is certificate based.
>
> **[0:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=50)** Of course certificate is going to be more secure.
>
> **[0:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=53)** Point-to-Point Tunneling protocol known as PPTP is mostly used in Windows although it has been used by Cisco and others.
>
> **[0:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=59)** But now it's mostly retired, although you can still use it on a Windows server and client.
>
> **[1:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=65)** Apple and Cisco however, have retired their Poin-to-Point Tunneling Protocol VPNs.
>
> **[1:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=71)** In 2008, Microsoft came out with Direct Access and that worked on Windows servers.
>
> **[1:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=76)** And the way this worked was when you opened up your computer and logged in it automatically connected to VPN without having to enable the client.
>
> **[1:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=85)** It hasn't worked that well.
>
> **[1:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=86)** However, because of a lot of complexity and problems with the protocol but always on VPN for Windows 10 has started taking over, which does similar things as Direct Access except it does it from the Windows 10 computer rather than being pushed out from the server.
>
> **[1:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=104)** Of all these different protocols what works in hotels and restaurants and other public places?
>
> **[1:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=110)** The best one would be SSTP or SSL VPN.
>
> **[1:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=114)** SSTP as it's called in a Windows server, SSL VPN as it's called in other products.
>
> **[1:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=119)** And that's because it uses port 443 which by default is not going to be blocked by many firewalls in public places.
>
> **[2:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=128)** Port 443 is the same port that you would use for shopping sites, which is one of the reasons why it's not blocked.
>
> **[2:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=135)** In Microsoft Windows, it's going to be a full VPN solution.
>
> **[2:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=139)** And in Cisco, it starts out as a web VPN solution.
>
> **[2:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=143)** You'll go to a website, authenticate and then you'll be able to get into the system.
>
> **[2:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=149)** Layer 2 Tunneling Protocol can get through some networks.
>
> **[2:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=153)** However, certificate based is going to be a better choice rather than the password based as mentioned earlier.
>
> **[2:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=159)** In many cases, it may get blocked.
>
> **[2:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=162)** Apple did make it popular once again as it was a dine VPN type of protocol until Apple got rid of Point-to-Point Tunneling Protocol and decided to settle on L2TP.
>
> **[2:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=173)** There are many VPN choices but only a short list that will not be blocked in most public locations.
>
> **[2:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/what-vpn-types-work-in-hotels-and-restaurants?u=76281980&t=178)** If you use the other VPN types that are not SSL or L2TP then this is likely the reason your users can't VPN into the corporate network.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (10), ssl (4), l2tp (4), sstp (3), pptp (1)
> **Code Keywords:** public (3)
> **Definitions:** known as (2), stands for (1)
> **Ports:** port 443 (2)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### VPN works but cannot access any resources
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=0)** - [Instructor] I'm in my Windows server and I've gone ahead and installed the remote access server role.
>
> **[0:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=5)** And after doing that, if you go to Tools and Server Manager, you're going to see the option for routing and remote access.
>
> **[0:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=11)** And there's a lot of different reasons why things don't work, even if you can connect in VPN, using routing and remote access.
>
> **[0:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=18)** So I'm going to right click on my server and choose to configure and enable routing and remote access.
>
> **[0:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=25)** So the wizard appears, click next.
>
> **[0:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=28)** Now, here's one of the first things that causes a problem.
>
> **[0:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=31)** Most servers are only going to have one network card, and if they do have two network cards, that second network card is not going to be on the internet.
>
> **[0:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=39)** So you don't want to choose any of these options other than custom configuration, and that's because it's assuming that your server is going to have one network card on the internet with no firewall except for the firewall built in and one on the inside, and no one really does that anymore.
>
> **[0:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=55)** So I'm going to choose custom and click next, and then choose just VPN access.
>
> **[1:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=61)** Now you can also choose LAN routing as well, but in this case we're just going to choose VPN access because we don't want to turn the server into a router.
>
> **[1:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=70)** We just want to have it have VPN access and let the switches and the routers and the network do any routing that's necessary.
>
> **[1:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=78)** Click next and click finish.
>
> **[1:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=81)** Now the service is going to start when we click Start Service, and you'll see in the upper left hand corner, it's going to turn to green.
>
> **[1:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=88)** So now we can see our service has started and it automatically added in all these different types of ports and things like that into our configuration.
>
> **[1:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=99)** So I'm going to right click on the server and choose properties and show you some other areas that can definitely cause problems with Windows VPN.
>
> **[1:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=109)** First off, I'm just using IPV4, but if you're using IPV6, then you'll need to check the box that you see here and configure IPV6 on your firewall to be able to route any of those packets to this server.
>
> **[2:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=121)** I'm going to click on security and here's the authentication process.
>
> **[2:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=126)** So you can choose various different types of authentications such as Windows or Radius.
>
> **[2:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=131)** Radius would be if you're using a Radius server, which would be a network policy server on a Windows server.
>
> **[2:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=137)** Now I'm not doing that here, so I'll go ahead and go down to the next step.
>
> **[2:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=141)** You can also choose various different authentication methods.
>
> **[2:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=144)** If you're using the default, then you'll want to make sure that MS-CHAP v2 and EAP is checked, which it is by default.
>
> **[2:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=151)** If you're going to be using IKEv2 for one of your VPNs, If you're going to be using Ike V two for one of your VPNs, If you're using Radius or network policy server, make sure you choose the Radius accounting option, or you can go down and choose L2TP or IKEv2.
>
> **[2:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=168)** or you can go down and choose L two TP or Ike V two.
>
> **[2:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=169)** There's four different types of VPNs L2TP or Layer 2 Tunneling Protocol, IKEv2, Internet Key Exchange version 2, SSTP, which is your SSL type of VPN, and PPTP, which is Point-to-Point Tunneling Protocol.
>
> **[3:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=184)** Point-to-Point Tunneling Protocol has been outdated for a while, it has been hacked, so it's definitely not something you would want to go ahead and use, but it is enabled by default when you turn on VPN on the Windows server, and you don't even have to configure anything else.
>
> **[3:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=198)** It's just ready to be used.
>
> **[3:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=200)** However, L2TP, you need to have a pre shared key or certificate in order to make that work.
>
> **[3:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=207)** Now, if you're using SSTP VPN, you'll see you need to have a certificate binding and there is no certificate by default, but I've gone ahead and installed a public certificate called admin.[techpublishing.net](https://techpublishing.net), and I'm going to click on view just to make sure that it's not going to show any issues such as the valid from date.
>
> **[3:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=226)** So in my case, the date has not caused this to be expired, so it will work.
>
> **[3:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=231)** I'll go ahead and click okay and then click okay.
>
> **[3:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=236)** It's going to restart.
>
> **[3:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=238)** One other thing we want to make sure we check when I go back into properties after the restart is going to be IPV4.
>
> **[4:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=245)** So here it's showing the DHCP servers where those clients who VPN are going to get their IP from.
>
> **[4:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=251)** You could choose a static address pool if you don't have a DHCP server available on that particular network.
>
> **[4:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=257)** And then you would go ahead and click add and type in the range that's not currently in use to be handed out to the clients.
>
> **[4:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=264)** So if there is no DHCP server, you need to add the pool.
>
> **[4:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=267)** If there is one, you can go ahead and continue using it.
>
> **[4:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=271)** A new problem in Windows Server 2025 and with Windows 11 is going to be an issue with the ports.
>
> **[4:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=280)** Now this was not the case in Windows Server 2022 and older, but it is in 2025.
>
> **[4:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=286)** So you need to open up Device Manager on your VPN server and then go to where it says network adapters.
>
> **[4:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=296)** And you need to delete each one of these network adapters with the exception of the network adapter where you're getting your IP address from.
>
> **[5:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=304)** So in this case, GRE, IKEv2, all these different ones on down, you just need to right click and choose to uninstall the device and do that with each one of these until just your network adapters are still there.
>
> **[5:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=322)** Now what's going to happen is is after the service restarts, it's going to add these all back in and then they'll work.
>
> **[5:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=329)** to add these all back in and then they'll work.
>
> **[5:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=331)** This is a bug in Windows Server 2025.
>
> **[5:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=333)** It's possible it might get fixed at one point, but it hasn't been up until now.
>
> **[5:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=340)** We can also just go to the action tab at the top scan for hardware changes, and it'll go ahead Now I can close Device Manager, and now I'm going to go into Windows 11 and perform the same task where I uninstall all the different ports just as I did on the server.
>
> **[5:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=358)** I'm in Windows 11, and once again, we'll go into Device Manager and do the same task.
>
> **[6:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=366)** But I'll go ahead and fast forward to completing this task for you since you've already seen it be processed.
>
> **[6:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=374)** And that's done.
>
> **[6:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=375)** I'll go ahead and scan once again and they get added back in.
>
> **[6:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=382)** Now I'm going to go ahead and add in my VPN adapter by going into Settings, Network and Internet and VPN.
>
> **[6:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=393)** Now I'm going to choose to add a VPN and I need to choose the provider type.
>
> **[6:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=398)** So by default we're going to use the Windows built in, and I'm going to choose the connection name, and it has to be the same name as my certificate.
>
> **[6:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=407)** Otherwise it will fail.
>
> **[6:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=408)** So if you're using an IP address or the internal name of the server, you can't do thatwith SSTP VPN.
>
> **[6:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=415)** Now, if you're using Point-to-Point Tunneling Protocol, you can use that, but we definitely recommend against it because it has been hacked.
>
> **[7:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=422)** So I'll give the connection name and the server name the same exact name.
>
> **[7:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=429)** Now, the VPN type, you could leave it at automatic if you'd like, but the best thing to do is to choose the one you want to use so it will connect faster.
>
> **[7:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=437)** Otherwise it'll go through all the different VPN types until it finds one that works.
>
> **[7:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=442)** Now I'm going to put in the username and password and click save.
>
> **[7:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=448)** There is my VPN, and I can click connect, and now it says my connection has completed.
>
> **[7:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=456)** And one of the things that might cause a problem is if you don't go into DNS and make sure that you have a record that's pointing to the name of your certificate.
>
> **[7:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=465)** Now, if you are using this from the outside, which most people are, you'll want to ping it from the outside and make sure thatyou have a DNS record, whoever is hosting your DNS such as Network Solutions, GoDaddy, and other companies.
>
> **[7:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=478)** So in my case, I went ahead and add in the record and my DNS is pointing to that particular server.
>
> **[8:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=485)** So this should work just by pinging it and it does.
>
> **[8:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=494)** Now, if your DNS is not set up properly, and I'll do an ipconfig /all to show my DNS, then you won't be able to resolve any names to IP addresses internally.
>
> **[8:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=505)** So here you can see my DNS server set to .92, which is one of my domain controllers, which works fine.
>
> **[8:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=513)** So if I were to try to open up something on the domain, I could do so by using the name rather than the IP address.
>
> **[8:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=522)** So I'll put in \\li-dc01-2025.
>
> **[8:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=533)** and there you can see all my folders.
>
> **[8:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=535)** If this doesn't work for you, then that means that your DNS is possibly pointing to an outdated DNS server or one on the internet, which it shouldn't be if your server is on the domain.
>
> **[9:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/vpn-works-but-cannot-access-any-resources?u=76281980&t=548)** There are many reasons for VPN to fail, so be sure to follow all the steps needed to connect and you'll be able to open resources without issue in your local area network while away from the office.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (18), dns (9), l2tp (3), sstp (3), dhcp (3)
> **Code Keywords:** case, (3), default, (2), from. (2), let (1), default. (1)
> **CLI Commands:** make (7)
> **UI Navigation:** click on (4), go to (3)
> **Prerequisites:** configure (3), you need to have (2), you'll need (1), set up (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [techpublishing.net](https://techpublishing.net) (1)

#### Common VPN error codes and how to fix them
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=0)** - [Narrator] At some point, you're going to need to troubleshoot your VPN connections from clients to firewalls or servers that are acting as the VPN hosts.
>
> **[0:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=10)** The first one would be error code 800 and this is typically an invalid name or address to the VPN server, so you'll need to correct that.
>
> **[0:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=17)** Also, sometimes you'll see that when some network firewalls block the VPN traffic, the device will loose the connection to the local network.
>
> **[0:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=24)** The possible solution for error code 609 is a built in diagnostic with repair that's provided in Windows, provided you're using the Windows VPN option.
>
> **[0:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=34)** When you click the diagnostic button, which is shown on the error page of the VPN connection, it gives a repair option, which will try to fix the issue automatically.
>
> **[0:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=43)** Error 633 is a certificate issue, if it's happening with all users, then check the certificate config and internet information services.
>
> **[0:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=51)** If it's just a single user, then it's possible they're using the wrong certificate name.
>
> **[0:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=56)** When you use a certificate VPN connection, the name has to match the name on their certificate or it will not connect.
>
> **[1:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=65)** The error that starts with 0x800 is likely a firewall problem and will effect all users, so you should see this error for all users if you see it for one.
>
> **[1:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=73)** Be sure that the ports are correctly open on the firewall and being forwarded to the VPN host.
>
> **[1:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=81)** Error 809 is a very common certificate problem where the certificate likely expired or is bound to the wrong name and internet information services.
>
> **[1:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=91)** Error 13801 is due to an incorrect username and password or the password expired and the user didn't change it in time.
>
> **[1:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=99)** You'll need to go into active directory or the name of the VPN host and reset the password for that user.
>
> **[1:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=106)** And finally, the codes 691 and 789 are error codes due to L2TP VPN type and it's usually due to an expired certificate or an incorrect pre-shared key.
>
> **[1:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=119)** Remember with VPN on L2TP, you have the option of a certificate or a pre-shared key.
>
> **[2:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=125)** And this incorrect password could be on either the server or the client.
>
> **[2:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/common-vpn-error-codes-and-how-to-fix-them?u=76281980&t=130)** There are other errors as well, but these are the most common and can usually be fixed in just a few minutes, either on the clients side or on the server side.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (11), l2tp (2)
> **Definitions:** is a  (3)
> **Prerequisites:** you'll need (2)
> **Code Keywords:** finally, (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)


### 5. Network Tools Administrators Need to Know

#### Windows command-line tools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=0)** - [Instructor] I'm in a Windows 2019 server.
>
> **[0:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=2)** Although, you can open up these tools I'm about to show you in the workstation operating system such as Windows 10 as well.
>
> **[0:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=9)** And I'm going to right click on the Start button, and I'm going to choose Search, and I'm going to type in CMD, short for command, and instead of left clicking and opening it, what you want to do is right click on it, and choose to Run as an administrator.
>
> **[0:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=25)** Now, if you're not an administrator, you're going to get a pop-up that asks you to log in with your username and password.
>
> **[0:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=30)** I'm going to change directory back to the root, and clear the screen, and then type in ipconfig.
>
> **[0:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=37)** And this is the command that tells us, of course, what IP address information we have.
>
> **[0:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=42)** But I also like to use some switches.
>
> **[0:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=45)** And a switch is going to be either a dash, or a forward slash.
>
> **[0:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=52)** They both do the same thing.
>
> **[0:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=53)** So if I type in /all, for instance, then it not only shows me the IP information of the IP address that's the main IP address, but it also shows me any other IP information such as it's showing me my VPN adapter here.
>
> **[1:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=67)** So we see that it goes much more than without the /all.
>
> **[1:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=73)** I also like to use ipconfig/release and renew.
>
> **[1:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=80)** And the release will release a dynamically assigned IP address.
>
> **[1:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=84)** And then when we do a renew, it will renew that IP address.
>
> **[1:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=88)** And many times this will fix the problem of having a duplicate IP address.
>
> **[1:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=92)** So, we'll release an IP address that might be a duplicate, and when it renews it, you'll get a different IP address.
>
> **[1:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=98)** But this only works if you're using a dynamically assigned address.
>
> **[1:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=102)** If it's statically assigned, you'll need to go physically change that IP address.
>
> **[1:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=107)** Another one I like to do is the flushdns.
>
> **[1:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=112)** And what that does, is it flushes out any information that it might've been cached about any names to IP addresses that you have in the computer.
>
> **[2:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=120)** So if you have a change, say to a server's IP address or any other IP address on the network, it's going to be cached on your computer, and you won't have the latest information.
>
> **[2:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=131)** So by flushing that information, you'll be able to see the latest and greatest information about that named IP address.
>
> **[2:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=137)** And another one I like to do on a new computer is registerdns.
>
> **[2:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=143)** So if I've recently changed my IP address on a computer, whether statically or dynamically, registering the DNS will send that information off to the DNS server.
>
> **[2:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=153)** So that way, other computers that may need to be able to reach me will now be able to see what the new IP address is right away.
>
> **[2:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=160)** Now, if you don't do this, it will still register the DNS, but it may take anywhere from 15 minutes to an hour to do so.
>
> **[2:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=166)** Let's take a look at some of the other tools that come with our Windows operating systems.
>
> **[2:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=172)** Netstat shows us information about computers that we're connected to, and what port they're connected on.
>
> **[2:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=178)** What like to do, which makes it a little bit easier, is the netstat, then the minus or forward slash, it's up to you, an.
>
> **[3:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=188)** And what that's going to do is to just tell us what ports we're listening on, and that way we can tell whether or not our firewall is open too much or not enough.
>
> **[3:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=198)** But after the /an or the -an, whichever one you use, I like to put in a pipe command.
>
> **[3:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=204)** And a pipe command, what that does is, it allows us to put in the word more after it.
>
> **[3:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=208)** And then we only see one page at a time, because as you saw, when I typed netstat without the pipe more, it scrolled through many different pages.
>
> **[3:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=217)** Now I can use one page at a time by using the space bar.
>
> **[3:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=223)** And here are the open ports that the computer's listing on.
>
> **[3:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=227)** We see there's 80, 81, 88, et cetera.
>
> **[3:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=229)** These are all TCP ports, as you see on the left-hand side, so these are connection oriented types of ports, and we can see that there's LISTENING on the right side.
>
> **[3:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=239)** Now, there's no current computers connected to those ports.
>
> **[4:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=241)** That's why it says all zeros.
>
> **[4:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=244)** However, it does tell us what computers could connect on those ports.
>
> **[4:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=249)** Now after that, if we scroll down a few more pages, we see some computers that are connected to certain ports, such as ports 57813 and 814.
>
> **[4:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=258)** And you can see, instead of just saying LISTENING, it now says ESTABLISHED.
>
> **[4:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=263)** And, once again, you can go down until you get to the end, and then you can go edit your firewall if you want to block some of these ports.
>
> **[4:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=271)** And you would use this not only to see what ports your computer's listing on, but also see what ports other computers are connected to you on, and how they are connected.
>
> **[4:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=282)** Such as, we're seeing a lot of different ports connecting to 389, which is LDAP, which is the lightweight directory application protocol.
>
> **[4:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=290)** It's used when other computers want to look up an object, say an active directory for example.
>
> **[4:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=297)** However, on the right-hand side, we can see that they're using ports that are very high up in the 20,000 and up range.
>
> **[5:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=303)** And that's because you can't have a computer listening on the same port, and connecting to another computer at the same time.
>
> **[5:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=310)** So it happens, for instances, 192.168.21.112, as you see at the top, is connected on the left-hand side to port 389.
>
> **[5:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=318)** So it made its initial connection to LDAP.
>
> **[5:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=321)** However, the LDAP protocol then kicked it up to 26821, so that way other computers, such as other computers that may come down the list, we'll also be able to connect to 389, and they'll be redirected to another very high dynamic port.
>
> **[5:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=338)** And even the computer itself, we see all these are from .112 cannot connect multiple times to the same port.
>
> **[5:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=347)** They'll be redirected to a dynamic port after doing so.
>
> **[5:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=351)** If we continue to scroll down, we'll see UDP ports as well, not just TCP.
>
> **[5:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=357)** And eventually, we get down to the end.
>
> **[6:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=361)** nslookup is used to look up name servers for particular names of computers, or for domain names.
>
> **[6:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=372)** In this case, I just typed in nslookup, and what it did was it looked up the name server for the computer that I'm on.
>
> **[6:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=378)** And it looks like this particular computer is a name server itself, which is why it pointed back to itself.
>
> **[6:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=384)** If this was say a Windows 10 client, it would find out what name servers it's using, and then report on what those name servers are.
>
> **[6:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=392)** You can also be specific and say, "What's the name server lookup for a particular website?"
>
> **[6:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=397)** So if I put in [google.com](https://google.com), then you can see that it first starts out by looking at my local server, which is a DNS server at .110, which is called DC1.
>
> **[6:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=410)** Then what it did was it got redirected off to [google.com](https://google.com)'s DNS server.
>
> **[6:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=415)** So we can see there's a DNS server here, 172.217.
>
> **[6:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=419)** We can also see the IPv6 version as well.
>
> **[7:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=422)** And it says it's not authoritative because it's a DNS server but it's not a server where you can make changes to it.
>
> **[7:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=430)** So there is an authoritative server further up the line where people can make changes to it, and they replicate that information down the line to this particular server.
>
> **[7:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=439)** Having this information can help you troubleshoot, and that if you're having issues with names to IP addresses or the reverse, IP addresses to names, then it's helpful to find out what DNS server is giving you this information, or if there's any DNS server that's even responding.
>
> **[7:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=455)** Because without DNS, active directory can't work, and you can't properly use the internet.
>
> **[7:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=462)** And one more command I like to use is the ARP command, address resolution protocol.
>
> **[7:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=467)** And you need to use a switch with this, otherwise it won't work properly.
>
> **[7:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=470)** So I'm going to use the /a or the -a, depending on which one you'd like to use, and I'll hit enter.
>
> **[7:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=476)** And, what it does is it gives us a list of IP addresses it's communicated with recently.
>
> **[8:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=482)** I'm going to do that once again, but this time with the pipe more command.
>
> **[8:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=485)** So that way we only see one page at a time.
>
> **[8:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=488)** Every computer comes with a network card that has a physical address, also referred to as a MAC address, or media access control.
>
> **[8:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=495)** And we can see that in the center column.
>
> **[8:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=497)** That is the MAC address that's burned into the network card.
>
> **[8:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=501)** On the left-hand side we see the internet address, and we refer to the internet address as a logical address.
>
> **[8:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=506)** And the reason for that is because we can change it.
>
> **[8:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=508)** It's not something physical or burned into the card.
>
> **[8:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=511)** We could make 192.168.21.1.
>
> **[8:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=514)** We could also make it .20 or .254.
>
> **[8:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=518)** Or any other address in our subnet, or we could change the subnet altogether.
>
> **[8:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=522)** By showing address resolution protocol information, we can determine whether or not our computer has been able to communicate with other computers.
>
> **[8:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=531)** Now we can certainly use the ping command, but many times ping is turned off by the firewall for which you're connecting.
>
> **[8:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=538)** However, even if ping is turned off, you're still going to get address resolution protocol information.
>
> **[9:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=544)** Let's clear the screen.
>
> **[9:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=547)** And one of the different IP addresses that we can communicate with was .126 when we showed the ARP.
>
> **[9:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=556)** And if we ping it, we can see that we don't get a response.
>
> **[9:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=560)** And that's because the firewall is blocking that particular IP address from receiving any ICNP traffic, which is what ping uses.
>
> **[9:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=568)** However, when we do the same ARP command, we can see that 126 does show up.
>
> **[9:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=577)** So how I'd use this in troubleshooting is, I know the firewall's blocking ICNP traffic, however I do know that the computer, in some capacity, is up and running.
>
> **[9:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=587)** There are many more different types of troubleshooting tools that can help you with fixing any TCP/IP, or networking issues that come with all versions of Microsoft Windows operating systems.
>
> **[9:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=599)** And besides command line, you can also use PowerShell.
>
> **[10:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-command-line-tools?u=76281980&t=603)** So check out all the different tools at docs.[microsoft.com](https://microsoft.com).

> [!info]- Semantic Content
>
> **Env Vars:** dns (10), tcp (3), ldap (3), arp (3), listening (2)
> **Code Keywords:** switch (2), this, (2), let (2), from . (1), continue (1)
> **Analogies:** such as (5), for instance (1), for example (1)
> **CLI Commands:** make (4), find (2)
> **Definitions:** is a  (2), short for (1), is called (1), is an  (1)
> **UI Navigation:** click on (2), scroll down (2)
> **URLs:** [google.com](https://google.com) (2), [microsoft.com](https://microsoft.com) (1)
> **Versions:** 192.168.21 (2), 172.217 (1)

#### PowerShell tools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=0)** - [Instructor] I'm on my Windows 11 computer, and let's take a look at some PowerShell tools that can also help with network troubleshooting.
>
> **[0:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=7)** So I'm going to right-click on my start button, and I'll choose "Windows Terminal (Admin)" just to make sure I have all the rights I need to run any of the tools.
>
> **[0:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=16)** And then, the terminal shows up, and you can see I'm in PowerShell because it shows "PS" on the left-hand side.
>
> **[0:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=22)** So after clearing the screen, I'm going to type in the command that everybody knows, which would be just the "ping" command, and I'll try pinging out to a public IP address, you could also try pinging to a private address, although recall that only domain controllers have pinging turned on by default, so you'll be able to ping other computers, but they may not respond unless they're domain controllers, or if you go in and open up that firewall rule manually.
>
> **[0:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=47)** So there's my ping, so now what I want to do is I want to use the PowerShell equivalent of "ping," and here's the command I would type in, which is "Test-NetConnection" followed by "-ComputerName," and here is the computer that I'm trying to connect to.
>
> **[1:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=66)** So after hitting Enter, you can see that I was able to reach it, it shows the computer name, the remote address, but it also shows me my source address, this is the computer IP address that I'm currently on, which is that Windows 11 computer, and it was successful at trying to ping.
>
> **[1:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=83)** There's also an additional option you could choose such as "-information," "detailed" or "quiet," so I'm going to choose the "detailed" option, which gives me more information.
>
> **[1:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=92)** Really all I see now is the next hop, so it shows me my gateway, how I'm trying to get out to either the Internet or another subnet on my network, and you can see that "ReplyDetails" is also there.
>
> **[1:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=107)** So this is pretty fast, so let's go ahead and change this to an outside IP address and see how this might look a little different.
>
> **[1:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=118)** And there we go, we can see the remote IP address, we can see whether or not it was successful, and now we can see the "PingReplyDetails" is at five milliseconds, so it took five milliseconds to reach that IP address, whereas when I'm trying to get to something internally, then my RTT is going to be very low, or at least it should be, especially when you're troubleshooting.
>
> **[2:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=140)** If you see something in the hundreds or thousands of milliseconds trying to ping something internally, than you could have multiple different issues such as the device you're trying to ping is having problems, maybe it has all the resources being used and it's having a difficult time replying, or you could have something wrong with the networks which you're plugged into.
>
> **[2:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=159)** I've had many times where I would go to troubleshoot this exact issue and the "PingReplyDetails" would be very high in the milliseconds, and it would turn out that you would have several Ethernet cords that were plugged into the same switch, so say the same switch port one was plugged into port 10 as well, that caused a routing loop and it caused everything to slow down.
>
> **[3:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=183)** At one point, I even had one client that had 100 different routing loops, and it took several hours to undo to get it to work properly, so these types of loops tend to cause high milliseconds under those "PingReplyDetails."
>
> **[3:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=198)** I'm going to clear the screen, and you've already seen the "tracert -d," followed by the IP address, but now, what I'm going to do is choose the PowerShell equivalent, and that's going to be the "test-netconnection" once again, followed by the "-traceroute" spelled out, which is the way that Unix and Macintosh does it, and then, the IP address I'm trying to reach.
>
> **[3:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=223)** Now, after several seconds delay, here, you can see it doesn't show the same type of traceroute format that you're familiar with, with the "tracert" command in command line, but it does give us the same information, it shows us how many hops and those IP addresses from the beginning until the end, it doesn't, however, tell us if any of those hops timed out, as it did in traceroute, but it still tells us all the IP information.
>
> **[4:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=251)** Let's look at another one in PowerShell.
>
> **[4:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=254)** For instance, let's do an "nslookup," which looks up the DNS server for a particular name or IP address, so I'll do "nslookup" followed by the DNS IP address for Google, and here, you can see "dns.google" is the name, but we don't have to just do it that way, we could also put in the name as well, I'll try [microsoft.com](https://microsoft.com), and it tells us all the different DNS servers that are servicing [microsoft.com](https://microsoft.com).
>
> **[4:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=286)** Now, if you don't get a response, that means that you've got a DNS problem.
>
> **[4:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=290)** Whatever DNS server that you're trying to use is not responding, saying that that domain or that IP address exists or is reachable.
>
> **[4:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=298)** So let's look at the PowerShell equivalent by clearing the screen and we'll choose "Resolve-DnsName," that is the PowerShell commandlet, followed by the "-Name" and the name you're trying to reach, and we can see [microsoft.com](https://microsoft.com), and once again, it shows us all the DNS servers, both IPv6 as well as IPv4, that are responsible for responding for any requests for that domain name, so once again, if you don't see a response, that means that there's a problem with DNS that you need to resolve before being able to reach wherever you're trying to go, whether it's internal or external.
>
> **[5:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=336)** Let's take a look at "netstat."
>
> **[5:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=339)** If I type in "netstat," you can see any active connections that I've got on my computer, and here, you can see all the different ones, some say "ESTABLISHED," that means I am connected to them, and some say that you were connected to them under "CLOSE_WAIT," but now, it's going to time out and go away within the next minute or two.
>
> **[6:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=361)** There is a PowerShell equivalent for "Get-NetTCPConnection," which matches our "netstat."
>
> **[6:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=370)** Now, it shows us a lot of information and it does it, once again, in a different format, so here, you can see IPv6 at the top, which is just represented by those two colons, though we're mostly going to be looking at the IPv4 responses, 'cause that's what we're using.
>
> **[6:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=385)** So anything with a "0.0.0.0" that you see here, that's going to just be the local port and we're not too concerned about those, we should be more concerned about anything that has an IP address, so on the left-hand side, you can see my source IP, which is the IP address that I'm on, and then, the destination IP, which is going to be in the middle, and then, it shows us the port itself, so it's showing that I'm connected using port 443, which is HTTPS, so that's a secure connection, but take a look, the port that it's actually using is 51020, what does that mean?
>
> **[7:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=420)** That means that there's no type of connection that you can make to any port, such as 443, or 80, or whatever, that can handle more than one computer.
>
> **[7:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=430)** They start out connecting to 443, you can see multiple different connections that start out at 443, but once that connection is established, it has to get out of the way so the next computer can connect to it, so what it does is it throws it over to one of these upper ports that are typically not being used by anything else, so troubleshooting-wise would be, if you are using an application that is using one of these upper ports, then it's possible that when you try to connect to the internet, you're going to have a problem with a specific site because it's trying to use a port that's already in use, and then, you'll get a page-not-found when that happens.
>
> **[7:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=468)** If we go down a little bit lower, you can also see that I'm connected to this computer using port 3389, which is Remote Desktop, so my source computer is 21.14, and the destination computer is the Windows 11 computer I'm remote-ed into using Remote Desktop.
>
> **[8:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=484)** Although PowerShell commandlets may have more characters, more things you have to type, they also have more switches, more options, and can be changed easily and added into a PowerShell script.
>
> **[8:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/powershell-tools-10143327?u=76281980&t=495)** It's possible Microsoft may take away regular commands sometime in the future, so it would be a good idea to learn PowerShell equivalents, which is also starting to now work in some distributions of Linux.

> [!info]- Semantic Content
>
> **Tools:** powershell (11), windows terminal (1), terminal (1), command line (1)
> **Code Keywords:** let (6), switch (2), public (1), private (1), default, (1)
> **Env Vars:** dns (7), rtt (1), established (1), close_wait (1), https (1)
> **Definitions:** means that (3), is a  (1)
> **Analogies:** such as (3), for instance (1)
> **URLs:** [microsoft.com](https://microsoft.com) (3)
> **Ports:** port 10 (1), port 443 (1), port 3389 (1)
> **CLI Commands:** make (2)

#### Linux networking tools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=0)** - Linux has its set of networking tools similar to Microsoft Windows, and some of the commands are even the same or very similar.
>
> **[0:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=7)** For instance, IP config in Windows is similar to IF or interface config in Linux.
>
> **[0:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=15)** And here we see at the top the ethernet address of 192.168.21.158 with a slash 24 sub-net.
>
> **[0:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=24)** And there's our broadcast address.
>
> **[0:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=27)** It also shows the IPV6 address which is the same as Microsoft and that it shows both a V4 and V6 address.
>
> **[0:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=36)** Underneath that, we see the loop back address and the broadcast, multicast address at the bottom.
>
> **[0:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=42)** So it definitely shows different information than it does in the Microsoft version.
>
> **[0:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=47)** Including, it shows that there are transmit and receive packets but it shows that there's no errors.
>
> **[0:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=53)** So it also is giving us an idea if there's any kind of problem with our connection from our ethernet card to our switch.
>
> **[1:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=60)** Similar to the route print command in Microsoft Windows we have the IP route command in Linux.
>
> **[1:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=68)** And it basically tells us the information that we have about our route.
>
> **[1:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=73)** And you can also use the IP route command to add routes as well.
>
> **[1:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=76)** Ping is different in Linux, and that if you ping an IP address, it's going to do a continuous ping until you hit the Control + C.
>
> **[1:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=89)** So it goes way past the four pings that happens in Windows.
>
> **[1:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=94)** Once you hit Control + C, it stops.
>
> **[1:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=96)** However, we can do a ping minus C and then however many pings that you would like to request.
>
> **[1:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=104)** I'll just do four and we can see it'll just do four and it'll stop.
>
> **[1:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=109)** Trace route is similar in Windows as it is in Linux.
>
> **[1:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=113)** However, it's spelled differently.
>
> **[1:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=114)** This is the way we do it in Windows, but in Linux we actually spell out the entire word, followed by whatever IP address you would like to go to.
>
> **[2:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=125)** And we can see that it traced all the way through 10 different hops to get to Google's DNS.
>
> **[2:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=131)** And of course, trace route and ping are excellent tools to tell us whether or not we're connected.
>
> **[2:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=136)** And if there's any break in the hops, from where we're starting from to where we're trying to go.
>
> **[2:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=142)** Another command I like to use is DIG and that's followed by the IP address of a DNS server.
>
> **[2:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=150)** And it gives us all kinds of DNS information.
>
> **[2:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=153)** It tells things like the start of authority for the root server, as well as the DNS forwarder that you see here it's being forwarded to 8.8.8.
>
> **[2:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=162)** So that means basically once it goes to that DNS server which happens to be a Windows DNS server, anything it can't resolve there locally will be redirected to the Google DNS server.
>
> **[2:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=173)** I also like the fact that N map is built into Linux.
>
> **[2:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=177)** Although sometimes you may to type the app to get install command in order to get it to go.
>
> **[3:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=182)** But if we type in N map followed by an IP address or a name of a computer, we can go ahead and do a scan which is a great way of troubleshooting network problems.
>
> **[3:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=193)** And also checking to see if there's any vulnerabilities.
>
> **[3:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=197)** So I ran the scan.
>
> **[3:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=198)** It does a standard scan unless you use some of the switches and it shows us all the different open ports that might be on that particular server.
>
> **[3:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=206)** So we can see it's got 53 open, which means that DNS is there.
>
> **[3:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=209)** It's got port 80 and 443 so it must have a web server on it.
>
> **[3:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=213)** It's got LDAP, which means that it's probably a domain controller for a Windows server.
>
> **[3:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=218)** All different kinds of ports that are showing are open.
>
> **[3:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=221)** And we can use that information to then lock down anything that we're not using on the Firewall for that particular server.
>
> **[3:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=227)** And along with that, we can type in NETSTAT and it tells us if any of the other computers on the network or outside the network are connected to any of those ports that are shown from that N map scan.
>
> **[4:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=243)** And we can see there's a lot of different connected ports here and it would take a little bit of time to go through all of them to make sure that you don't see anything that may be compromised.
>
> **[4:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=253)** If we do the NETSTAT dash I, then it also gives a great network tool to tell us if we're transmitting and receiving okay.
>
> **[4:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/linux-networking-tools-10140421?u=76281980&t=265)** Between all these different Linux networking tools, we should be able to deduce any issues we have with our network interface cards, the local area network, and internet connection.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), netstat (2), ipv6 (1), dig (1), ldap (1)
> **Analogies:** similar to (3), for instance (1)
> **Code Keywords:** interface (2), switch (1)
> **Definitions:** means that (2), is a  (1)
> **Versions:** 192.168.21 (1), 8.8.8 (1)
> **CLI Commands:** make (1)
> **Ports:** port 80 (1)
> **UI Navigation:** go to (1)

#### Windows routing command-line tools
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=0)** - [Instructor] There are simple command line tools that we see in all versions of Windows, but there's also some commands that can help us with tracing routing.
>
> **[0:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=9)** And tracing routing is really important because it not only tells us where we currently are, but where we can go.
>
> **[0:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=17)** A quick tool for this is the pathping command.
>
> **[0:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=21)** And this basically just tells us how we can get out to a specific area and tells us how we get there.
>
> **[0:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=28)** So for instance, if I type in pathping, and I put in Google's DNS address, then it's going to go out and find how many hops it takes to get out to that address.
>
> **[0:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=41)** But for more experienced users the traceroute command is the best way to go.
>
> **[0:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=46)** There's lots of different switches with traceroute.
>
> **[0:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=49)** I like to use the -d because I don't always want to resolve names to IP addresses just yet.
>
> **[0:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=54)** So let's say for example, that you're trying to get out to a particular website, you can't get there.
>
> **[0:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=59)** However, you can get to other websites, you can use traceroute to tell you at what point you're getting stuck.
>
> **[1:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=66)** So I'm going to do traceroute -d, so we don't resolve those names, and I'm going to put in [google.com](https://google.com).
>
> **[1:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=75)** And we can see the hops that it's going to take, but we can also see the milliseconds, and it shows us three different rounds of milliseconds that it takes to get there.
>
> **[1:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=84)** And not all of the different hops are going to always be successful the first time round, as you can see by the asterisks.
>
> **[1:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=90)** And it could be that that particular router that you see with the asterisks may be overloaded with a lot of traffic and it's just slow to respond, or it could be that that particular route is having problems.
>
> **[1:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=103)** So, if you can't get from a to b, then it will tell you at what point you're getting stuck.
>
> **[1:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=110)** Now, what I like to do at that point is I like to go to the ISP, the internet service provider, and show them a screenshot of this.
>
> **[1:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=117)** Usually it takes the requirement to be escalated to level three before they will actually understand what this means.
>
> **[2:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=124)** And I'll use a screenshot of this particular window showing, "Hey, I'm getting stuck at 206.72.100.8.
>
> **[2:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=130)** Let's just say they were all asterisks 'cause that one, and I couldn't get any further.
>
> **[2:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=134)** Then what that ISP would do is they would find out, "Hey, is this particular router on my network or is it further up the line?"
>
> **[2:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=140)** And then they can notify the person up the line who's responsible for that router to fix that issue, or they can fix their own.
>
> **[2:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=147)** And this also works really well internally.
>
> **[2:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=149)** So if you're trying to get from one sub-net or VLAN to another, and you get stopped, then you can fix the routing problem.
>
> **[2:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=156)** The routing problem might be at a layer three switch that does inter-VLAN routing, or it may be at the router or you may have an access control list or a route that's just missing.
>
> **[2:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=167)** Now everyone's familiar with the ping command.
>
> **[2:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=170)** So if we did a ping to an external address, we see a response and we see how many milliseconds that took.
>
> **[2:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=179)** We can also do a ping to something on the inside.
>
> **[3:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=182)** However, ping has a lot more useful types of switches in it, besides without a switch as we see here.
>
> **[3:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=191)** So, what I'm going to do is show you how to use network troubleshooting tools using the ping command and the different switches.
>
> **[3:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=197)** So let's start out by doing a ping -t.
>
> **[3:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=202)** The reason I would use this, might be that I want to have a continuous ping, because if you don't use the -t you're just going to get four different responses, and you may want to get a lot more than that to get an aggregate amount to find out how many milliseconds it's really taking over a much longer period of time.
>
> **[3:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=223)** I've also used the -t command for other things, such as I may be looking for a particular cable and I'm not sure which one it is, because maybe there's a spiderweb of various different cables.
>
> **[3:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=235)** And I need to find out which one I unplug will cause this ping to stop.
>
> **[4:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=240)** So that would be a good way that you could use ping -t for that reason.
>
> **[4:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=245)** Just pressing Control + C keys will stop the -t.
>
> **[4:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=250)** Now, in Linux and Unix, it automatically does continuous ping, but in windows it will only do four.
>
> **[4:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=256)** And there's other great switches along with ping, such as you can do a -a and then type in an IP address.
>
> **[4:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=267)** And what it'll do is it will do a reverse DNS as well as ping that address.
>
> **[4:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=272)** So we can see that it didn't just ping 8.8.8.8, it also resolved the DNS name that goes with it.
>
> **[4:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=279)** And that's really useful if you have an IP address, but you're just not sure who owns that IP address, what's the name of the computer or the device that goes along with it in DNS.
>
> **[4:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=290)** Another ping I might do would be -4.
>
> **[4:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=294)** Now, the reason for that is if I go to ping an address and I receive an IPV6 reponse, then I may want to do -4, because that way I'll only get the TCP/IP version four address if that's really what I'm expecting.
>
> **[5:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=307)** And by default all Microsoft computers will respond on both IPV6 and IPV4 unless you manually uncheck one of the two.
>
> **[5:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=316)** I like to use this next one, it's the -l.
>
> **[5:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=319)** And what -l does, is it sends a ping packet based on size, because by default if you don't do -l, then you can see the byte size is 32.
>
> **[5:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=332)** We want to do something much larger than that because we want to test heavier packets on a route to see if it starts to bog down.
>
> **[5:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=341)** So if I do a ping -l, and I'll just do my own internal, so that way I don't bog down anything on the internet, and then I'll put in something such as 1500.
>
> **[5:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=351)** So instead of 32 bytes, I'm going to do 1500, and then I'll put in an internal address, hit Enter and we can see it doesn't bog down at all, it's still at one millisecond.
>
> **[6:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=363)** Fantastic, let's make it bigger.
>
> **[6:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=366)** Instead of 1500, let's do 5,000.
>
> **[6:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=373)** And it's still one millisecond.
>
> **[6:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=374)** So I'm sending a very large amount of bytes yet my router is not bogging down at all.
>
> **[6:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=380)** So I know that my router is actually working optimally.
>
> **[6:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=384)** If you start getting responses back in the hundreds or thousands of milliseconds, then you know that you've got a problem with that receiving end device.
>
> **[6:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=392)** It could also be a route or a switch on the way to that receiving device, so you may need to test all the different devices between point a and point b.
>
> **[6:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=402)** Now, if I would like to see what my routing table looks like I can type, route print.
>
> **[6:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=410)** And what route print does, is it tells me what different subnets I'm connected to.
>
> **[6:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=414)** And then I can use things such as the traceroute or the ping tool to tell me how I'm getting there.
>
> **[7:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=422)** So you can see my default route is all zeros going out through 21.1.
>
> **[7:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=427)** However, we can see other subnets that I'm connected to as well.
>
> **[7:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/windows-routing-command-line-tools-10141327?u=76281980&t=433)** Besides command line tools to run various different routing commands, there's also PowerShell that you can use using different syntax you can find out from docs.[microsoft.com](https://microsoft.com).

> [!info]- Semantic Content
>
> **Env Vars:** dns (4), isp (2), vlan (2), ipv6 (2), tcp (1)
> **Code Keywords:** let (5), switch (3), this. (1), this, (1), type, (1)
> **CLI Commands:** find (5), make (1)
> **Analogies:** such as (4), for instance (1), for example (1)
> **Versions:** 206.72.100 (1), 8.8.8 (1), 21.1 (1)
> **Tools:** command line (2), powershell (1)
> **URLs:** [google.com](https://google.com) (1), [microsoft.com](https://microsoft.com) (1)
> **UI Navigation:** go to (2)

#### Wireshark basics
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=0)** - [Instructor] I'm going to try on my black hat and my white hat in order to show how a hacker's going to try to find open ports on a Windows server or computer.
>
> **[0:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=11)** So for my black hat computer, I'm on a Windows 11 computer and I'm at [nmap.org](https://nmap.org).
>
> **[0:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=15)** This is going to allow me to install a program that will scan any server or computer that I'd like.
>
> **[0:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=23)** So I'm going to download the executable from [nmap.org](https://nmap.org) and then run that installation.
>
> **[0:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=30)** And I'm going to go to my server and I'm going to install another program called Wireshark.
>
> **[0:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=35)** And Wireshark is going to watch any packets that I use to try to hack into that server from nmap on my Windows 11 computer, and we can use that in order to troubleshoot to find out if anyone's trying to hack our computer, or if there's any kind of open ports than when we're doing some sort of a white hack scan just to see if there's any threats that we need to lock down.
>
> **[1:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=60)** I'm choosing all the defaults for this particular program.
>
> **[1:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=63)** It also installs something called NPCap, which is needed in order to run our scans from Nmap.
>
> **[1:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=69)** And while that's installed, I'm going to switch over to my server and install Wireshark.
>
> **[1:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=74)** I'm at [wireshark.org](https://wireshark.org) and I'm going to choose to download and install the Windows x64 installer.
>
> **[1:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=83)** Wireshark is downloaded, so I'm going to run the installation, and I'll go ahead and choose all the defaults once again.
>
> **[1:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=95)** Wireshark is an analyzer.
>
> **[1:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=96)** It can analyze protocols, ports, IP addresses, a lot of different information.
>
> **[1:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=102)** Now, there was a time when we had to pay for these programs, but then someone came up with this open source program called Wireshark, which we've all been using for many years.
>
> **[1:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=111)** So to be highly employable, I highly recommend that you learn to install and run Wireshark on your computer or server.
>
> **[2:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=122)** And if it's almost done installing, go ahead and launch it, and turn it on in listening mode to listen for any traffic that is coming into the server.
>
> **[2:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=132)** I think you'll be surprised at how many different internal and external sites that your server is communicating with, even though you didn't initiate it, just because it's part of the normal servers function.
>
> **[2:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=146)** Wireshark has started, and you can see several different options.
>
> **[2:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=149)** If you have a lot of different ethernet adapters, you're going to see all those adapters here, including wireless ones.
>
> **[2:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=154)** The one I want is just the one that says ethernet, because I only have the one, so I'll double click on it.
>
> **[2:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=160)** And now you can see a lot of traffic.
>
> **[2:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=163)** Once again, I'm not initiating any of this traffic, it's just happening because it needs to do it as a normal part of its operation.
>
> **[2:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=172)** I'm going to switch back to my black hat computer, which is going to be my Windows 11 computer, running nmap.
>
> **[2:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=178)** Installation has completed of Nmap/zenmap.
>
> **[3:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=181)** Now, Nmap is actually a command line driven program.
>
> **[3:05](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=185)** Zenmap is the GUI version.
>
> **[3:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=187)** So when you install it nowadays, you end up getting both.
>
> **[3:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=190)** But we're going to use the graphical user interface version just to make it a little easier to demonstrate.
>
> **[3:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=196)** We have multiple different options here in the upper right hand corner for the type of scan that we want to do.
>
> **[3:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=202)** Do we want to do a quick scan?
>
> **[3:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=204)** We don't want to do an intense scan.
>
> **[3:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=205)** Lots of different types.
>
> **[3:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=207)** Now, in most cases, firewalls will detect an intense scan and may shut that scan down.
>
> **[3:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=213)** But, since we're all in the internal network, the server itself is not capable of doing that, unless you add on a package that will do that for you.
>
> **[3:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=222)** In my case, it's just Windows Server 2025 without any additional software.
>
> **[3:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=227)** Let's start with a quick scan.
>
> **[3:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=228)** I'll click on Quick Scan and then put in the name or IP address of the server.
>
> **[3:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=232)** In my case, it's LI-DC01-2025.
>
> **[3:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=239)** So now I'll choose Scan on the right hand side, and it'll tell me if it finds any open ports on that firewall.
>
> **[4:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=247)** And there you can see many different open ports.
>
> **[4:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=249)** We see port 53, 80, 88, lots of different ones.
>
> **[4:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=252)** Some of these are normal for a Windows domain controller, such as 389 using LDAP.
>
> **[4:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=258)** LDAP is going to let us know what names may be on the server if we give a device the credentials needed in order to scan that.
>
> **[4:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=268)** And we also see Port 445, which is typically used for opening up file shares, things like that.
>
> **[4:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=275)** And 3389 is used for remote desktop, which I manually opened up.
>
> **[4:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=279)** I'm going to switch that over to an intense scan, and choose +UDP for UDP types of ports, and then just let that run.
>
> **[4:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=289)** That could take a while.
>
> **[4:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=290)** I'm going to switch back to my server to watch for the traffic.
>
> **[4:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=295)** You can see a lot of traffic going.
>
> **[4:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=296)** I'm going to choose to stop that traffic.
>
> **[5:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=300)** And what I can do is I can go ahead and look at the source address.
>
> **[5:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=304)** Now I know my source address is .110, so I'm going to click on source address, and then I can scroll down to where it shows me do .110, and I'll know the types of traffic from that scan, and what it's trying to do.
>
> **[5:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=319)** And I found my 110 traffic.
>
> **[5:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=321)** So you can see the source is 110, the destination is the server that I'm on, and you can see all the different types of ports it's doing.
>
> **[5:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=328)** So I can tell pretty clearly that this is an intense scan, because it's going through one port at a time, trying to find an opening.
>
> **[5:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=338)** And if it finds it, it's going to show up on my Zenmap screen.
>
> **[5:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=342)** So if there is a vulnerability, then I'll be able to go ahead and exploit it, because it's open.
>
> **[5:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=348)** Besides the time, the source, the destination, you can also see the protocol.
>
> **[5:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=354)** So here you see UDP, here's a SIP protocol.
>
> **[5:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=358)** And SIP is typically used for things like voice over IP.
>
> **[6:02](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=362)** You can see a port map, which is trying to map out all the different open ports, DTLS, there's also a lot of TCP, things like that.
>
> **[6:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=371)** Here's a DNS one that you can see here.
>
> **[6:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=373)** And when I scroll through these, you can see more detail beneath that, such as the frame, the ethernet type, which is going to be typically Ethernet 2 that we're using nowadays.
>
> **[6:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=384)** And you're going to see once again, the source and the destination, as well as the source and destination port that it's trying to scan.
>
> **[6:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=392)** And it's doing what's called a DNS query.
>
> **[6:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=395)** So I'm going to expand that a little bit, and it gives us a little bit more information here as well.
>
> **[6:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=399)** On the right-hand side, you can see hexadecimal, and that basically is being translated on the left-hand side.
>
> **[6:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=406)** While you're troubleshooting open ports, if you want to, you can say, hey, you know what?
>
> **[6:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=410)** I should not have a port open for port 80.
>
> **[6:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=414)** So what do I do about that?
>
> **[6:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=415)** Well, you can go into Windows Defender Firewall, and you can block it.
>
> **[7:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=423)** So I'll open up Windows Defender Firewall, and I'll click on Inbound Rules.
>
> **[7:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=428)** Now, there's lots of rules for Port 80, but what I want is I want to put this rule at the very top.
>
> **[7:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=432)** So I'll create a custom rule and I'll choose that it's a port.
>
> **[7:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=438)** Click Next, it's a TCP port, it's port 80.
>
> **[7:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=443)** Next.
>
> **[7:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=444)** And I'm going to block the connection on all the different types of profiles, and I'll just call this block 80, and click Finish.
>
> **[7:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=456)** Now I'm going to go back to my Windows 11 computer, run another type of quick scan, and see if port 80 is still open.
>
> **[7:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=463)** I'll cancel the scan back in my Windows 11 computer.
>
> **[7:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=467)** And this time I'm going to choose a quick scan, and choose Scan.
>
> **[7:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=475)** And take a look.
>
> **[7:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=477)** Blocking Port 80 makes it so it shows up as no longer open on my server.
>
> **[8:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=483)** So this is a great troubleshooting tool for you to be able to find out what ports are open from one computer to another as you've seen here using Zenmap and Wireshark, and the results of blocking ports that you don't want to leave open.
>
> **[8:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/wireshark-basics?u=76281980&t=498)** Every sys admin should have a good understanding of both Zenmap and Wireshark.

> [!info]- Semantic Content
>
> **Env Vars:** udp (3), ldap (2), sip (2), tcp (2), dns (2)
> **Code Keywords:** switch (4), let (3), case, (2), function (1), interface (1)
> **Ports:** port 80 (5), port 53 (1), port 445 (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1)
> **Prerequisites:** install (6)
> **CLI Commands:** find (4), make (1)
> **Definitions:** is an  (2), is a  (2)
> **URLs:** [nmap.org](https://nmap.org) (2), [wireshark.org](https://wireshark.org) (1)


### 6. Troubleshooting Routing, Switching, and Firewalls

#### Modern network design
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=0)** - [Instructor] I recall when I first got into the IT industry, the biggest problem I had was being able to see the overall network and all the devices that are in it and how they work together.
>
> **[0:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=12)** It took at least a couple of years before someone finally explained all the different parts to me where it all made sense.
>
> **[0:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=18)** And I hope to do that here for you as well.
>
> **[0:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=21)** All these years later, there's a lot more different devices and things are a lot more complicated, but it's still really a great idea to have an overall view of what you're looking at in your network closet, or your network operating center, or wherever it is that you keep all of your devices.
>
> **[0:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=37)** I'm going to start with the core layer three switch.
>
> **[0:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=40)** This is going to be the switch that not only is that the center of your network, but it's also going to be able to route as a router would.
>
> **[0:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=49)** This layer three switch can provide what's called inter-VLAN routing and you can also put it in an HA pair.
>
> **[0:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=55)** So you could actually have two switches here, where if one fails, then the other one picks up the slack.
>
> **[1:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=61)** Next we have layer two switches.
>
> **[1:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=63)** Layer two switches are layer three aware but they cannot do any inter-VLAN routing.
>
> **[1:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=68)** So what that means is that you can have multiple different subnets, or as we call them VLANs when we refer to them in switching, going through the layer two switches up to the layer three switch where it can then be routed to the different VLANs.
>
> **[1:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=82)** After that we have the firewall out to the internet service provider.
>
> **[1:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=88)** And you need to picture in your mind all of these things being connected together/ The firewall will be connected to the core switch and the layer two switches would also be connected to the core switch.
>
> **[1:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=97)** The firewall would then be connected out to the internet cloud.
>
> **[1:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=101)** And there may be various different hops between the firewall and the destination, but we refer to the cloud as being any and all connections outside our local area network that are not connected to say remote offices.
>
> **[1:55](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=115)** And that would be our internet connection.
>
> **[1:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=118)** Now we can add in our servers, we'll start with our active directory domain controller server and then we'll add in our DHCP DNS servers, and that way we can automatically send out IPs to computers that don't have them statically set and DNS would allow us to resolve names to IP addresses.
>
> **[2:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=138)** We also need to have some file and print servers.
>
> **[2:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=140)** And those would serve up files to us as well as allow us to print through those servers off to any network printing devices.
>
> **[2:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=149)** Also, our file and print servers might have a connection to an iSCSI SAN, and that may be due to a couple different reasons.
>
> **[2:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=156)** One is we can't fit enough storage into our file and print server.
>
> **[2:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=160)** The other may be as if we have a cluster setup where we have multiple different file servers all connected to the iSCSI SAN in order to allow high availability and fail over.
>
> **[2:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=173)** After that, we may have some database and application servers.
>
> **[2:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=177)** And this is typically where you'd find your accounting packages and other applications needed to run your company.
>
> **[3:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=183)** Of course, you've got to have email, and many companies are using email in-house in larger organizations because it's more economical.
>
> **[3:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=191)** Whereas larger organizations are going to use email out in the cloud, such as at Office or Microsoft 365.
>
> **[3:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=198)** And you may also have a VPN server.
>
> **[3:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=200)** Although the VPN server could be on the firewall.
>
> **[3:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=202)** it could also be on a Windows, Linux or other type of server.
>
> **[3:27](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=207)** Of course, if it is on the inside of your network and not on the firewall, you'll need to port forward the appropriate ports.
>
> **[3:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=213)** After that, you're going to need to have wireless access points in a modern network.
>
> **[3:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=217)** And depending on the size of the building and the way the building is laid out, you may have many different wireless access points along with a controller server that will tell us where the access points should be placed.
>
> **[3:50](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=230)** Then we'll need to have the network printers that are being printed through the file and print servers.
>
> **[3:56](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=236)** And these also could be placed all around the office and it could be placed in remote offices as well.
>
> **[4:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=243)** But that's not the only thing using an IP address.
>
> **[4:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=246)** We also need to have IP addresses set up for our VoIP phone system.
>
> **[4:10](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=250)** Now some offices have a completely separate network cabling system for VoIP phones, while others use it to piggyback on top of their existing cabling.
>
> **[4:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=258)** It really depends on bandwidth availability, and if you have the type of switches that can separate data from voice.
>
> **[4:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=268)** If you have multiple offices, then you're probably going to have an SD-WAN or MPLS connection connected to your remote office or remote offices.
>
> **[4:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=277)** Although SD-Wan is one of the latest types of connections that you can use, there are others such as you could use VPN tunnels using traditional internet.
>
> **[4:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=286)** You could use MPLS as mentioned earlier.
>
> **[4:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=289)** There's also layer two connections.
>
> **[4:51](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=291)** And if you're using the layer two internet, you'll need to have routers on both sides to split that into a router situation where you have layer three between the two routers on either side of the remote office and the home office and then layer two on the opposite side.
>
> **[5:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=309)** If you don't, then you'll have just one big subnet spreading across many offices, and that's just not efficient.
>
> **[5:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=316)** SD-WAN and all these other types of services can run over many different types of mediums, such as cable or fiber or digital circuits.
>
> **[5:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=325)** As mentioned earlier, you may also have VPNs to remote offices.
>
> **[5:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=330)** And this type of internet connection is the same type of internet connection you might see at your home.
>
> **[5:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=335)** It might be through Comcast, AT&T or others.
>
> **[5:39](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=339)** Many companies also have resources out on cloud servers such as at AWS or at Microsoft Azure.
>
> **[5:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=346)** And these connections can be a special VPN connection that's proprietary to say Microsoft Azure, or it could just be port forwards that happened through the Azure firewall or AWS firewall.
>
> **[5:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=359)** And finally, you've got Internet of Things devices, such as streaming music, you might have clocks for people clocking in when they come into work or when they leave, as well as other devices.
>
> **[6:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/modern-network-design?u=76281980&t=375)** The modern network is constantly changing and using faster and more secure devices every year.

> [!info]- Semantic Content
>
> **Env Vars:** vpn (4), vlan (2), dns (2), san (2), wan (2)
> **Code Keywords:** switch (6), finally, (1)
> **Analogies:** such as (5), picture (1)
> **Prerequisites:** you'll need (2), setup (1), set up (1)
> **CLI Commands:** aws (2), find (1)
> **Code Identifiers:** iscsi (2)
> **Tools:** slack (1)
> **Speakers:** - [instructor] (1)

#### How to fix data packets stuck en route
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=0)** - [Instructor] Traffic flow problems don't always happen from the inside out or the outside in from a LAN to a WAN.
>
> **[0:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=7)** They also happen between different subnets or VLANs inside the local area network.
>
> **[0:13](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=13)** As we can see here, we have two different computers that want to communicate with each other, and they're using a core L3 switch, which means it's a layer three switch, and it's capable of inter-VLAN routing.
>
> **[0:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=24)** And we see the two different VLANs.
>
> **[0:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=26)** We see one nine two, one six eight dot one, as well as dot two on VLAN 2.
>
> **[0:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=32)** And those VLANs can communicate with each other if everything's set up correctly between the two computers, as well as the layer three switch.
>
> **[0:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=43)** Let's see if we can get these two computers to communicate with each other.
>
> **[0:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=46)** I'm going to do an IP config to see what IP address we have.
>
> **[0:49](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=49)** And we see we're at one dot four, and our gateway is one nine two, one six eight dot one dot one.
>
> **[0:54](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=54)** So if we want to communicate with the one nine two, one six eight dot two network, as per that graphic we're going to need to set up a route to the two network through one dot two fifty-four.
>
> **[1:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=66)** And we do that by typing in route add.
>
> **[1:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=69)** And if we want it to be persistent, we would do a dash p, meaning that even if we restart the computer, it will keep that route.
>
> **[1:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=78)** I'll type in the subnet, which is the two dot zero subnet.
>
> **[1:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=82)** And now we need to add in the word 'mask,' followed by the subnet mask.
>
> **[1:28](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=88)** And now we need to add in the gateway, which is going to be our layer three switch that connects us into our VLAN two.
>
> **[1:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=98)** And that was successful.
>
> **[1:40](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=100)** Now let's take a look at our route.
>
> **[1:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=102)** So if I type 'route,' space, 'print,' and we scroll up to the IPV4 routes, we can see here that there is, under persistent routes, a one nine two, one six eight dot two dot zero going through the one dot two fifty-four.
>
> **[1:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=117)** Now that that's set up, we need to go and set up our layer three switch to make sure that that works, otherwise we still cannot communicate with our dot two network.
>
> **[2:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=126)** I've connected into our layer three switch using a program called PuTTY.
>
> **[2:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=131)** And you can see at the top we're connected through the COM4 serial port.
>
> **[2:15](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=135)** And that's connected by a USB to serial connection from the laptop right into our layer three switch.
>
> **[2:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=145)** Let's take a look at our configuration, and this is a Cisco layer three switch.
>
> **[2:31](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=151)** And we can do that by typing 'show run' to show our running configuration.
>
> **[2:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=156)** And what I did earlier was I set up these VLANs by typing in 'interface VLAN 1,' and then typing the IP address in the subnet mask.
>
> **[2:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=164)** And I did the same for VLAN 2.
>
> **[2:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=166)** Let's make sure we can ping those IP addresses.
>
> **[2:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=173)** And that works.
>
> **[2:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=178)** And that works as well.
>
> **[2:59](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=179)** So what that tells us is both VLANs are up and running, and the VLANs then get assigned to the ports on the switch.
>
> **[3:06](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=186)** And this is true no matter what brand of layer three switch that you're going to use.
>
> **[3:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=192)** And you could even assign VLANs to layer two switches that are layer three aware, meaning that they can't do inter-VLAN routing, but they are aware of the different VLAN numbers.
>
> **[3:21](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=201)** Next I'm going to type in 'config t' for config terminal, and I'm going to assign VLAN 2 to port two.
>
> **[3:30](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=210)** VLAN 1 is automatically assigned to every other port by default, and that's also true of all brands.
>
> **[3:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=215)** So if I type in the interface name, 'interface fastethernet one slash zero slash two,' now I can type the command 'switchport access VLAN 2,' And what that's going to do is it's going to assign the port number two to VLAN number two, and that's where I'm going to plug in my laptop number two.
>
> **[3:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=238)** Now I'm going to exit and just confirm that that worked by typing 'show run' again just to see if that applied.
>
> **[4:11](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=251)** And there it is at the top, switchport access VLAN 2.
>
> **[4:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=254)** We also want to make sure switchport mode access is on there.
>
> **[4:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=256)** 'Spanning-tree portfast' is an option, and it allows us to reconnect our computers if we disconnect or make any changes to the computer and the switch makes it happen a little bit more quickly.
>
> **[4:29](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=269)** I'm going to switch back to my command prompt, and we'll see what we can do.
>
> **[4:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=273)** One other change that I made was on the laptop number two.
>
> **[4:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=277)** I made sure that I had the default route set to two dot two fifty-four, so that way it will hit VLAN 2 switch.
>
> **[4:45](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=285)** And I was able to ping that as well.
>
> **[4:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=287)** Now let's see if we can ping the two dot four laptop, which is laptop number two.
>
> **[4:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=297)** And look at that; we can now ping it.
>
> **[5:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=300)** Let's do a trace route to it.
>
> **[5:07](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=307)** And we can see the hops that it takes to get over to our computer.
>
> **[5:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=312)** Hop number one is the layer three switch, and hop number two is right to laptop number two.
>
> **[5:18](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=318)** So everything worked great.
>
> **[5:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=319)** If you also need to route the VLAN number two out to the internet, you'll need to set up a route back to the dot two network by saying the exact same thing we did here with this particular computer.
>
> **[5:34](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=334)** We went in and we set up a route to dot two through one dot two fifty-four.
>
> **[5:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=338)** We'll add that same route to your firewall slash router out to the internet.
>
> **[5:43](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=343)** Otherwise it won't be able to find the dot two network.
>
> **[5:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=348)** Routing between VLANs and subnets can be a tricky thing internally.
>
> **[5:52](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/how-to-fix-data-packets-stuck-en-route?u=76281980&t=352)** Having the proper setup can ensure proper routing when needed by users and devices.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (14), let (6), interface (3), default, (1)
> **Env Vars:** vlan (14), lan (1), wan (1), ipv4 (1), com4 (1)
> **Prerequisites:** set up (7), you'll need (1), setup (1)
> **CLI Commands:** make (4), find (1)
> **Tools:** terminal (1), command prompt (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** scroll up (1)
> **Speakers:** - [instructor] (1)

#### Troubleshooting open firewall ports
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=0)** - [Instructor] I'm on my Windows 11 computer and I'm going to open up PowerShell by right clicking and choosing to open the Windows terminal for admin.
>
> **[0:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=9)** And what I want to do is use PowerShell in order to find out if a specific port is open and also how to troubleshoot that in the Windows firewall on the computer and trying to connect to.
>
> **[0:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=23)** So I'm going to start by typing in the test-netconnection command followed by the -computer, and then I'll put in the computer name.
>
> **[0:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=41)** Then I'm going to type in -port.
>
> **[0:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=42)** So this is going to tell us if the port that we're trying to get into is open.
>
> **[0:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=47)** So I'll put in 445.
>
> **[0:48](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=48)** This is a port I know that is open and press enter.
>
> **[0:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=53)** Now it's going through to attempt the connection using TCP.
>
> **[0:58](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=58)** TCP is a connection-oriented protocol.
>
> **[1:01](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=61)** So it's going to be a protocol that we really need to be concerned about because it's a way that the clients can open up file shares on the server.
>
> **[1:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=72)** And here we can see that this port is open.
>
> **[1:14](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=74)** However, what if we put in say a zero on here, on a port I know is for sure not open.
>
> **[1:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=80)** This is a way we can troubleshoot to find out, first off, if the port is open.
>
> **[1:24](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=84)** And second, how do we open it or how do we close it or how do we troubleshoot it on the server that we're trying to connect to?
>
> **[1:32](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=92)** And as expected, you can see that that connection had failed.
>
> **[1:36](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=96)** I'm going to switch over to the .92 computer, which is one of my domain controllers, and we're going to look and see what ports are open using a command.
>
> **[1:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=104)** Although you can see what ports are open by running a scan from another computer, you can also do this on the computer that is the destination itself.
>
> **[1:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=113)** So once again, I'm going to open up the terminal admin and I'm going to type a command that will allow me to see what ports are open all at once.
>
> **[2:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=123)** I've cleared the screen and even though I'm in PowerShell, this is going to be a regular command prompt type command, and it's going to be netstat -an, and then I'm going to type in the pipe command followed by more.
>
> **[2:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=137)** That way I don't see pages scrolling through all at once.
>
> **[2:19](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=139)** This is going to show a lot of different results.
>
> **[2:23](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=143)** So I'll press enter, this is going to show me all at once what ports are open on my server and if anyone has connected to it.
>
> **[2:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=153)** And if we scroll through by hitting the space bar, you can see not only open ports running through TCP/IP version four that are established, but also as you see here with IP version six.
>
> **[2:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=167)** So you can continue down, it'll tell you TCP, it'll tell you UDP, all the different ports that are open all the way through 65,535, which is the amount of TCP as well as UDP ports that are available in any computer that's running windows.
>
> **[3:03](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=183)** So here you see a lot of these ports that show, for instance, UDP, and it shows that there is a port there as well, but there's nothing established.
>
> **[3:12](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=192)** There's nothing actually communicating with those ports.
>
> **[3:16](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=196)** Let's scroll up further and then you see the asterisks as well.
>
> **[3:20](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=200)** So basically what this is saying is that these ports are not necessarily communicating with anyone, and unless they show that they are listening, then they're not even open to be able to connect to.
>
> **[3:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=213)** Now here you can see a lot of different ports.
>
> **[3:35](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=215)** You see the port numbers listed.
>
> **[3:38](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=218)** These are TCP ports and it says listening on the right hand side.
>
> **[3:41](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=221)** That means it's open.
>
> **[3:42](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=222)** There's a program that's listening and the firewall is open to that particular port.
>
> **[3:47](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=227)** So for instance, once again we have 3389, which is being used for remote desktop.
>
> **[3:53](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=233)** It's open and it's listening and there's a program waiting for it.
>
> **[3:57](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=237)** Now if you have an open port, but you don't necessarily have a program such as remote desktop waiting to accept that port, then it doesn't matter that the port is open because there's nothing to connect to.
>
> **[4:08](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=248)** So if I did not enable remote desktop on the server, but I opened up the port for 3389, then it would still not have any ability to be connected to because of that missing application.
>
> **[4:22](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=262)** Now here you see a lot of different established types of connections.
>
> **[4:26](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=266)** So this is telling us that this computer at .92 is communicating with .93, which is another domain controller, and it is established.
>
> **[4:37](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=277)** They're sending data back and forth over the ports that are listed after each of the colons.
>
> **[4:44](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/troubleshooting-open-firewall-ports?u=76281980&t=284)** The netstat command line is a great utility to tell us all at once what ports are open, which ones are connected to and established, and which ones are not being connected to because of the fact that there's nothing that's open either on the firewall or a program on the backend that can actually accept that connection.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (6), udp (3)
> **Tools:** powershell (3), windows terminal (1), terminal (1), command prompt (1), command line (1)
> **Definitions:** is a  (5)
> **Code Keywords:** switch (1), continue (1), let (1)
> **Warnings:** troubleshoot (3)
> **CLI Commands:** find (2)
> **UI Navigation:** open the (1), scroll up (1)
> **Analogies:** for instance (2)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980&t=0)** - [Robert] Thank you for joining me in our course on network troubleshooting.
>
> **[0:04](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980&t=4)** You learned how to fix many common and not so common networking issues with the home and office.
>
> **[0:09](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980&t=9)** You learned how to fix issues using command-line, PowerShell, and other utilities, using both the Windows and Linux operating systems.
>
> **[0:17](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980&t=17)** We also learned about Cisco and the operating system firewalls to solve connectivity problems between VLANs, subnets, and the internet.
>
> **[0:25](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980&t=25)** You learned about the modern network environment and how to put on your black and white hat for checking network connectivity and security.
>
> **[0:33](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980&t=33)** If you would like to see more of my courses, please check out my related course entitled Common Work From Home: Troubleshooting for IT Admins and Plan and Configure a Microsoft Teams Environment.
>
> **[0:46](https://www.linkedin.com/learning/learning-network-troubleshooting-practical-network-diagnostics-and-solutions/next-steps?u=76281980&t=46)** I look forward to working with you again very soon.

> [!info]- Semantic Content
>
> **Tools:** powershell (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [robert] (1)


## Path Context

### In [[Network Administration- Build Core Skills for Network Management and Security]]
← [[Networking Foundations- Wide Area Networks (WANs)]] | **5 of 6** | [[IT Security Foundations- Network Security]] →

## Appears In

- [[Network Administration- Build Core Skills for Network Management and Security]]

## Related Courses

_Courses sharing skills:_

- [[Wireshark- Network Troubleshooting]] — Network Troubleshooting
